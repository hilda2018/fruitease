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
using Interfaces.Model;

namespace IFView
{
    /// <summary>
    /// MapHandler 的摘要说明
    /// </summary>
    public class MapHandler : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
        string strrep = "";
        responseOut res = new responseOut();
        string userid = "";
        HttpRequest request = null;
        string baseUrl = System.Configuration.ConfigurationManager.AppSettings["tmsURL"]+"/tms";
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
        
        /// <summary>
        /// 验证车牌
        /// </summary>
        /// <param name="context"></param>
        public void VerifyLicensePlate(HttpContext context)
        {
            string url = baseUrl  + "/searchMuliExitsAjax.do";
            var cph = context.Request.Params["cph"].ToString().Replace(",", ";");
            string logid = context.Request.Params["logid"];
            string token = HttpUtility.UrlEncode(DESEncrypt(userid, "tms&sgt#"));
            string param = "userId=" + userid + "&token=" + token + "&vnos=" + HttpUtility.UrlEncode(cph, Encoding.UTF8);
            string ret = PostWebRequest(url, param, Encoding.UTF8);
            MapResponseData mapRes = new MapResponseData();

            mapRes = JsonConvert.DeserializeObject<MapResponseData>(ret);

            if (mapRes.result != null && mapRes.result != "")
            {
                if (mapRes.code == "0" || mapRes.code == "3")
                {
                    res.result = true;
                    res.data = param;
                    if (mapRes.code == "3")
                    {
                        res.msg = mapRes.result;
                        res.data = "userId=" + userid + "&token=" + token + "&vnos="
                            + HttpUtility.UrlEncode(mapRes.result.Replace(",", ";").TrimEnd(';'), Encoding.UTF8);

                    }
                    if (string.IsNullOrEmpty(logid))
                    {
                        Interfaces.Service.KyMapService serv = new Interfaces.Service.KyMapService();
                        serv.InsertMapLog(userid, token, cph, res.msg);
                    }
                }
            }
            else if (mapRes.code == "1" || mapRes.code == "2" || mapRes.result == null || mapRes.result=="")
            {
                res.result = false;
                res.msg = mapRes.des;
            }
        }
        #endregion

        #region 轨迹跟踪 传入任务编号 返回url
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public void singleVerifyLicensePlate(HttpContext context)
        {
            string url = baseUrl + "/showErrorInfoPage.do";
            
            string token = HttpUtility.UrlEncode(DESEncrypt(userid, "tms&sgt#"));
            string rwbh = context.Request.Params["rwbh"];
            yw_hddz_wlgzEntity wlgz = new Interfaces.Service.FenceService().getWlgzByRwbh(rwbh);
            if (wlgz.status == 0)
            {
                res.result = false;
                res.msg = "该任务没有在监控中";
            }
            else
            {
                string param = "?userId=" + userid + "&token=" + token + "&source=0&hide=0&taskNo=" + HttpUtility.UrlEncode(wlgz.dzwlbh, Encoding.UTF8);
                res.result = true;
                res.data = url + param;
            }
        }
        #endregion

        #region 单个验证车牌号
        string url_yzcph = "https://tms.freshport.com/tms/getCarExists.do";
        public void PdcphVerifyLicensePlate(HttpContext context)
        {
            var cph = context.Request.Params["cph"].ToString().Replace(",", ";");
            string logid = context.Request.Params["logid"];
            string token = HttpUtility.UrlEncode(DESEncrypt(userid, "tms&sgt#"));
            string param = "userId=" + userid + "&token=" + token + "&vno=" + HttpUtility.UrlEncode(cph, Encoding.UTF8);
            string ret = PostWebRequest(url_yzcph, param, Encoding.UTF8);
            MapResponseData mapRes = new MapResponseData();

            mapRes = JsonConvert.DeserializeObject<MapResponseData>(ret);

            if (mapRes.code == "0" )
            {
                res.result = true;
                res.data = param;
            }
            else   
            {
                res.result = false;
                res.msg = mapRes.des;
            }
        }
        #endregion

        #region 车牌号绑定北斗设备号
        string url_bdcphsb = "https://tms.freshport.com/tms/bindingVno.do";
        public void Cphbdbdsbh(HttpContext context)
        {
            var cph = context.Request.Params["cph"].ToString().Replace(",", ";");
            var bdyssbh = context.Request.Params["bdyssbh"].ToString().Replace(",", ";");
            string logid = context.Request.Params["logid"];
            string token = HttpUtility.UrlEncode(DESEncrypt(userid, "tms&sgt#"));
            string param = "userId=" + userid + "&token=" + token + "&vno=" + HttpUtility.UrlEncode(cph, Encoding.UTF8) + "&deviceNum=" + HttpUtility.UrlEncode(bdyssbh, Encoding.UTF8);
            string ret = PostWebRequest(url_bdcphsb, param, Encoding.UTF8);
            CphhBdsbbdResponseData CphbdbdsbhmapRes = new CphhBdsbbdResponseData();

            CphbdbdsbhmapRes = JsonConvert.DeserializeObject<CphhBdsbbdResponseData>(ret);

            if (CphbdbdsbhmapRes.code == "0")
            {
                res.result = true;
            }
            else
            {
                res.result = false;
            }
        }

        #endregion

        #region 设置车辆监控(开始)
        //string url_szcljkks = "https://tms.freshport.com/auto/startCarListen.do";
        //public void Szcljkks(HttpContext context)
        //{
        //    var cph = context.Request.Params["cph"].ToString().Replace(",", ";");
        //    string logid = context.Request.Params["logid"];
        //    string token = HttpUtility.UrlEncode(DESEncrypt(userid, "tms&sgt#"));
        //    string param = "userId=" + userid + "&token=" + token + "&car={\"vno\":\"" + HttpUtility.UrlEncode(cph, Encoding.UTF8) + "\"," + "\"startdate\":\"" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + "\"," + "\"status\":\"0\"}";
        //    string ret = PostWebRequest(url_szcljkks, param, Encoding.UTF8);
        //    SzcljkksResponseData SzcljkksmapRes = new SzcljkksResponseData();

        //    SzcljkksmapRes = JsonConvert.DeserializeObject<SzcljkksResponseData>(ret);

        //    if (SzcljkksmapRes.code == "0")
        //    {
        //        res.result = true;
        //    }
        //    else
        //    {
        //        res.result = false;
        //    }
        //}
        #endregion

        #region 停止车辆监控(结束)
        string url_tzcljkjs = "https://tms.freshport.com/auto/stopCarListen.do";
        public void Tzcljkjs(HttpContext context)
        {
            var cph = context.Request.Params["cph"].ToString().Replace(",", ";");
            string logid = context.Request.Params["logid"];
            string token = HttpUtility.UrlEncode(DESEncrypt(userid, "tms&sgt#"));
            string param = "userId=" + userid + "&token=" + token + "&vno=" + HttpUtility.UrlEncode(cph, Encoding.UTF8);
            string ret = PostWebRequest(url_tzcljkjs, param, Encoding.UTF8);
            TzcljkjsResponseData TzcljkjsmapRes = new TzcljkjsResponseData();

            TzcljkjsmapRes = JsonConvert.DeserializeObject<TzcljkjsResponseData>(ret);

            if (TzcljkjsmapRes.code == "0")
            {
                res.result = true;
            }
            else
            {
                res.result = false;
            }
        }
        #endregion

        #region 查询设备状态
        string url_sbztcx = "https://tms.freshport.com/tms/getCustomInfos.do";
         
        public void Sbztcx(HttpContext context)
        {
            var deviceNums = context.Request.Params["deviceNums"].ToString();
            string logid = context.Request.Params["logid"];
            string token = HttpUtility.UrlEncode(DESEncrypt(userid, "tms&sgt#"));
            string param = "userId=" + userid + "&token=" + token + "&deviceNums=" + deviceNums;
            string ret = PostWebRequest(url_sbztcx, param, Encoding.UTF8);
            MapResponseData_Sbztcx mapRes_Sbztcx = new MapResponseData_Sbztcx();

            mapRes_Sbztcx = JsonConvert.DeserializeObject<MapResponseData_Sbztcx>(ret);

            if (mapRes_Sbztcx.code == "0" || mapRes_Sbztcx.code == "3")
            {
                res.result = true;
                res.data = param;
                if (mapRes_Sbztcx.code == "0" )
                {
                    //res.msg = mapRes_Sbztcx.MapResponseData_Sbztcx_mxx;
                    //res.data = "userId=" + userid + "&token=" + token + "&vnos="
                    //    + HttpUtility.UrlEncode(mapRes_Sbztcx.result.Replace(",", ";").TrimEnd(';'), Encoding.UTF8);
                    List<yw_hddz_bdsbwhEntity> list = new List<yw_hddz_bdsbwhEntity>();
                    foreach (var m in mapRes_Sbztcx.result)
                    {
                        yw_hddz_bdsbwhEntity model = new yw_hddz_bdsbwhEntity();
                        model.bdyssbh = m.deviceNum;
                        model.deviceID = m.deviceID;
                        model.deviceNum = m.deviceNum;
                        model.adr = m.adr;
                        model.odometer = m.odometer;
                        model.onlineStatus = m.onlineStatus;
                        model.status = m.status;
                        model.vno = m.vno;
                        list.Add(model);
                    }
                    new Interfaces.Service.MapService().UpdateBdsbwh(list);

                }
                if (string.IsNullOrEmpty(logid))
                {
                    Interfaces.Service.MapService serv = new Interfaces.Service.MapService();
                    serv.InsertMapLog(userid, token, deviceNums, res.msg);
                }
            }
            else if (mapRes_Sbztcx.code == "1" || mapRes_Sbztcx.code == "2")
            {
                res.result = false;
                res.msg = mapRes_Sbztcx.des;
            }
        }
        #endregion

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
       

        #region 查询车牌数据

        /// <summary>
        /// 获取车牌列表
        /// </summary>
        public void getLicensePlateList(HttpContext context)
        {
            int page = int.Parse(request.Params["page"]);
            int pageSize = int.Parse(request.Params["rows"]);
            string sort = request.Params["sort"];
            string order = request.Params["order"];
            if (page <= 0)
                page = 1;

            string from = request.Params["from"].ToString();
            string to = request.Params["to"].ToString();
            string zt = request.Params["zt"].ToString();
            string gl = request.Params["gl"].ToString();
            string pc = request.Params["pc"].ToString();
            string jdr = request.Params["jdr"].ToString();
            string jyddsdsc_xs = request.Params["jyddsdsc_xs"].ToString();
            string mdd = request.Params["mdd"].ToString();
            string kh = request.Params["kh"].ToString(); 
            Interfaces.Service.MapService serv = new Interfaces.Service.MapService();
            var list = serv.getCarMapList(from, to, zt, gl, pc,jdr, jyddsdsc_xs, mdd,kh, pageSize, page, sort, order);
            int count = serv.getCarMapCount(from, to, zt, gl, pc,jdr, jyddsdsc_xs, mdd, kh);

            res.rows = list;
            res.total = count;

        }
        #endregion

        #region 查询车牌数据

        /// <summary>
        /// 获取车牌列表
        /// </summary>
        public void getLicensePlateControlList(HttpContext context)
        {
            int page = int.Parse(request.Params["page"]);
            int pageSize = int.Parse(request.Params["rows"]);
            string sort = request.Params["sort"];
            string order = request.Params["order"];
            if (page <= 0)
                page = 1;

            string from = request.Params["from"].ToString();
            string to = request.Params["to"].ToString();
            string zt = request.Params["zt"].ToString();
            string gl = request.Params["gl"].ToString();
            string pc = request.Params["pc"].ToString();
            string jyddsdsc_xs = request.Params["jyddsdsc_xs"].ToString();
            string mdd = request.Params["mdd"].ToString();
            string jdrhkh = request.Params["jdrhkh"].ToString(); 
            Interfaces.Service.MapService serv = new Interfaces.Service.MapService();
            var list = serv.getCarControlList(from, to, zt, gl, pc, jyddsdsc_xs, mdd,jdrhkh, pageSize, page, sort, order);
            int count = serv.getCarControlCount(from, to, zt, gl, pc, jyddsdsc_xs, mdd, jdrhkh);

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


    public class CphhBdsbbdResponseData
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

    public class SzcljkksResponseData
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

    public class TzcljkjsResponseData
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

    public class MapResponseData_Sbztcx
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
        public List<MapResponseData_Sbztcx_mxx> result
        { get; set; }
      

    }
  


     public class MapResponseData_Sbztcx_mxx
    {

        /// <summary>
        /// 执行结果编码 1:系统错误;0:全部查到;2:全部未查到; 
        /// </summary>
         public string vno { get; set; }
        /// <summary>
        /// 描述
        /// </summary>
         public string lat { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string lon { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string adr { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string utc { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string spd { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string drc { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string bdLat { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string bdLon { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string status { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>


         public string odometer { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string deviceID { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>


         public string onlineStatus { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>

         public string deviceNum { get; set; }
        /// <summary>
        /// 返回的可查询车牌号
        /// </summary>
          
    }
 
}