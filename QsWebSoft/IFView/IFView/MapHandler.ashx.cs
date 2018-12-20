using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace IFView
{
    /// <summary>
    /// MapHandler 的摘要说明
    /// </summary>
    public class MapHandler : IHttpHandler
    {
        string strrep = "";
        responseOut res = new responseOut();
        string userid = "";
        HttpRequest request = null;

        public void ProcessRequest(HttpContext context)
        {
            string param = context.Request.Params["action"];
            request = context.Request;
            try
            {
                userid = QsWebSoft.AppService.GetUserID();
                if (string.IsNullOrEmpty(userid))
                {
                    throw new Exception("登录超时！");
                }
                object[] Obj = new object[] { context };
                MethodInfo vMethodInfo = GetType().GetMethod(param);
                if (vMethodInfo == null)
                {
                    return;
                }
                vMethodInfo.Invoke(this, Obj);
            }
            catch (Exception ex)
            {
                res.msg = ex.Message;
                res.result = false;

            }
            strrep = JsonConvert.SerializeObject(res);
            context.Response.Write(strrep);
        }

        #region 验证车牌号
        string url = "https://tms.freshport.com/tms/searchMuliExitsAjax.do";
        /// <summary>
        /// 验证车牌
        /// </summary>
        /// <param name="context"></param>
        public void VerifyLicensePlate(HttpContext context)
        {
            var cph = context.Request.Params["cph"].ToString().Replace(",", ";");
            string logid = context.Request.Params["logid"];
            string token = DESEncrypt(userid, "tms&sgt#");
            string param = "userId=" + userid + "&token=" + token + "&vnos=" + HttpUtility.UrlEncode(cph, Encoding.UTF8);
            string ret = PostWebRequest(url, param, Encoding.UTF8);
            MapResponseData mapRes = JsonConvert.DeserializeObject<MapResponseData>(ret);

            if (mapRes.code == "0" || mapRes.code == "3")
            {
                res.result = true;
                res.data = param;
                if (mapRes.code == "3")
                {
                    res.msg = "只找到部分车的定位信息：" + mapRes.result;
                    res.data = "userId=" + userid + "&token=" + token + "&vnos="
                        + HttpUtility.UrlEncode(mapRes.result.Replace(",", ";").TrimEnd(';'), Encoding.UTF8);
                }
                if (string.IsNullOrEmpty(logid))
                {
                    Interfaces.Service.MapService serv = new Interfaces.Service.MapService();
                    serv.InsertMapLog(userid, token, cph, res.msg);
                }
            }
            else if (mapRes.code == "1" || mapRes.code == "2")
            {
                res.result = false;
                res.msg = mapRes.des;
            }
        }

        #region post提交
        private string PostWebRequest(string postUrl, string paramData, Encoding dataEncode)
        {
            string ret = string.Empty;
            try
            {
                byte[] byteArray = dataEncode.GetBytes(paramData); //转化
                HttpWebRequest webReq = (HttpWebRequest)WebRequest.Create(new Uri(postUrl));
                webReq.Method = "POST";
                webReq.ContentType = "application/x-www-form-urlencoded";

                webReq.ContentLength = byteArray.Length;
                Stream newStream = webReq.GetRequestStream();
                newStream.Write(byteArray, 0, byteArray.Length);//写入参数
                newStream.Close();
                HttpWebResponse response = (HttpWebResponse)webReq.GetResponse();
                StreamReader sr = new StreamReader(response.GetResponseStream(), dataEncode);
                ret = sr.ReadToEnd();
                sr.Close();
                response.Close();
                newStream.Close();
            }
            catch (Exception ex)
            {

            }
            return ret;
        }
        #endregion

        #region 加密
        public static string DESEncrypt(string strToEncrypt, string sKey)
        {
            var result = string.Empty;
            using (var objDesCryptoServiceProvider = new DESCryptoServiceProvider())
            {
                byte[] inputByteArray = Encoding.UTF8.GetBytes(strToEncrypt);
                objDesCryptoServiceProvider.Key = Encoding.UTF8.GetBytes(sKey);
                objDesCryptoServiceProvider.Mode = CipherMode.ECB;
                objDesCryptoServiceProvider.Padding = PaddingMode.PKCS7;
                byte[] bysEncrypted =
                    objDesCryptoServiceProvider.CreateEncryptor().TransformFinalBlock(inputByteArray, 0, inputByteArray.Length);
                result = Convert.ToBase64String(bysEncrypted);
            }
            return result;
        }
        #endregion
        #endregion

        #region 查询车牌数据

        /// <summary>
        /// 获取车牌列表
        /// </summary>
        public void getLicensePlateList(HttpContext context)
        {
            int page = int.Parse(request.Params["page"]);
            int pageSize = int.Parse(request.Params["rows"]);
            if (page <= 0)
                page = 1;

            string from = request.Params["from"].ToString();
            string to = request.Params["to"].ToString();
            Interfaces.Service.MapService serv = new Interfaces.Service.MapService();
            var list = serv.getCarMapList(from, to, pageSize, page);
            int count = serv.getCarMapCount(from, to);

            res.rows = list;
            res.total = count;

        }
        #endregion

        #region 获取当前用户历史查询记录
        /// <summary>
        /// 查询历史记录
        /// </summary>
        public void GetMapViewHistory(HttpContext context)
        {
            Interfaces.Service.MapService serv = new Interfaces.Service.MapService();
            var list = serv.getCarMapHistory(userid);
            res.result = true;
            res.rows = list;
        }
        #endregion

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
    public class MapResponseData
    {

        /// <summary>
        /// 执行结果编码 1:系统错误;0:全部查到;2:全部未查到; 
        /// </summary>
        public string code { get; set; }
        /// <summary>
        /// 描述
        /// </summary>
        public string des { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>
        public string result { get; set; }
    }

}