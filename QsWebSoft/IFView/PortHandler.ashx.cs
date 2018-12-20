using Interfaces.Model;
using Interfaces.Model.map;
using Newtonsoft.Json;
using System;
using System.Collections;
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
    /// FenceHandler 的摘要说明
    /// </summary>
    public class PortHandler : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
        private static readonly object obj = new object();

        string strrep = "";
        PortResponse res = new PortResponse();
        string userid = "";
        HttpRequest request = null;
        JsonSerializerSettings setting = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };

        public void ProcessRequest(HttpContext context)
        {
            string param = context.Request.Params["action"];
            request = context.Request;
            res.code = "100";
            try
            {
                userid = QsWebSoft.AppService.GetUserID();
                if (context.Request.Params["token"] == null && string.IsNullOrEmpty(userid))
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
                res.des = ex.Message;
                res.code = "100";
            }

            strrep = JsonConvert.SerializeObject(res, setting);
            context.Response.Write(strrep);
        }

        #region 公用方法

        #region token校验
        /// <summary>
        /// 地图回调接口 验证token
        /// </summary>
        /// <param name="context"></param>
        public static void authorityCheck(HttpContext context)
        {
            string userId = context.Request.Params["userId"];
            string token = context.Request.Params["token"];
            if (DESEncrypt(userId) != token)
            {
                throw new Exception("用户校验失败");
            }
        }
        #endregion

        #region post提交
        private static string PostWebRequest(string postUrl, string paramData, Encoding dataEncode)
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
                throw new Exception("远程访问" + postUrl + "失败,详细：" + ex.Message);
            }
            return ret;
        }
        #endregion

        #region 记录日志
        public static void writeLog(string log, string filename = null)
        {
            try
            {
                string path = System.Web.HttpContext.Current.Server.MapPath("/IFView/log/");
                if (string.IsNullOrEmpty(filename))
                {
                    filename = "log_szzq";
                }
                lock (obj)
                {
                    File.AppendAllText(path + filename + "_" + DateTime.Now.ToString("yyyyMMdd") + ".txt", DateTime.Now.ToLongTimeString() + "\t" + log + Environment.NewLine, Encoding.Default);
                }
            }
            catch
            {

            }
        }
        #endregion

        #region Des加密解密
        #region 加密
        public static string DESEncrypt(string strToEncrypt)
        {
            string sKey = "hkc&sgt#";
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

        #region 解密
        public static string DESDecrypt(string strToEncrypt, string sKey)
        {
            var result = string.Empty;
            using (var objDesCryptoServiceProvider = new DESCryptoServiceProvider())
            {
                byte[] inputByteArray = Convert.FromBase64String(strToEncrypt);
                objDesCryptoServiceProvider.Key = Encoding.UTF8.GetBytes(sKey);
                objDesCryptoServiceProvider.Mode = CipherMode.ECB;
                objDesCryptoServiceProvider.Padding = PaddingMode.PKCS7;
                byte[] bysEncrypted =
                    objDesCryptoServiceProvider.CreateDecryptor().TransformFinalBlock(inputByteArray, 0, inputByteArray.Length);
                result = Encoding.UTF8.GetString(bysEncrypted);
            }
            return result;
        }
        #endregion
        #endregion


        #endregion

        #region 推送接受服务
        /// <summary>
        /// 更新靠港时间
        /// </summary>
        /// <param name="context"></param>
        public void updatePortTime(HttpContext context)
        {
            string cm = request.Params["shipName"];
            string hc = request.Params["voyage"];
            string sj = request.Params["expectedStopTime"];
            string type = request.Params["type"];

            try
            {
                writeLog(string.Format("updatePortTime收到参数，shipName={0}&voyage={1}&expectedStopTime={2}&type={3}", cm, hc, sj, type));
                authorityCheck(context);
                if (string.IsNullOrEmpty(cm) || string.IsNullOrEmpty(hc) || string.IsNullOrEmpty(sj) || string.IsNullOrEmpty(type))
                {
                    throw new Exception("参数shipName，voyage，expectedStopTime，type都不能为空");
                }

                DateTime d = new DateTime();
                if (!DateTime.TryParse(sj, out d))
                {
                    throw new Exception("expectedStopTime格式不正确");
                }
                yw_hddzEntity hddz = new yw_hddzEntity();
                hddz.cm = cm;
                hddz.hcorhbh = hc;
                if (type == "0")
                {
                    hddz.yjkgsj = d;
                }
                else if (type == "1")
                {
                    hddz.sjkgsj = d;
                }
                else
                {
                    throw new Exception("参数type不正确");
                }

                new Interfaces.Service.HddzService().updateKgsjByCmHc(hddz);
                res.code = "000";
            }
            catch (Exception ex)
            {
                writeLog("updatePortTime出现异常" + ex.Message);
                res.des = ex.Message;
            }
        }

        /// <summary>
        /// 更新靠港时间
        /// </summary>
        /// <param name="context"></param>
        public void updateContainerTime(HttpContext context)
        {
            string jzxh = request.Params["boxNumber"];
            string ztdh = request.Params["ladingBill"];
            string sj = request.Params["time"];
            string type = request.Params["status"];

            try
            {
                writeLog(string.Format("updateContainerTime收到参数，boxNumber={0}&ladingBill={1}&time={2}&status={3}", jzxh, ztdh, sj, type));
                authorityCheck(context);
                if (string.IsNullOrEmpty(jzxh) || string.IsNullOrEmpty(ztdh) || string.IsNullOrEmpty(sj) || string.IsNullOrEmpty(type))
                {
                    throw new Exception("参数boxNumber，ladingBill，time，status都不能为空");
                }

                DateTime d = new DateTime();
                if (!DateTime.TryParse(sj, out d))
                {
                    throw new Exception("expectedStopTime格式不正确");
                }
                yw_hddz_jzxxxEntity jzx = new yw_hddz_jzxxxEntity();
                switch (type)
                {
                    case "0":
                        jzx.xcsj = d;
                        break;
                    case "1":
                        jzx.cgqsj = d;
                        break;
                    default:
                        throw new Exception("status值不正确必须为1或0");
                }
                new Interfaces.Service.HddzService().updateJzxSj(jzx, type);
                res.code = "000";
            }
            catch (Exception ex)
            {
                writeLog("updateContainerTime出现异常" + ex.Message);
                res.des = ex.Message;
            }
        }

        public void errorLog(HttpContext context)
        {
            
            string msg = context.Request.Params["des"];
            string type = context.Request.Params["type"];
            writeLog(string.Format("errorLog收到参数，type={0}&des={1}", type, msg));
            authorityCheck(context);
            writeLog("errorLog方法接受到异常，" + (type == "1" ? "集装箱" : "船") + "出现异常" + msg);
            res.code = "000";
        }
        #endregion

        #region 调用深圳中间体服务
        static string baseUrl =System.Configuration.ConfigurationManager.AppSettings["szURL"];

        public void pushShipTest(HttpContext context)
        {
            string p1 = context.Request.Params["p1"];
            string p2 = context.Request.Params["p2"];
            string p3 = context.Request.Params["p3"];
            string strerr = "";
            res.code = pushShip(p1, p2, p3, out strerr) ? "000" : "100";
            res.des = strerr;
        }

        /// <summary>
        /// 调用中间体 推送船名 抓取靠港时间
        /// </summary>
        /// <param name="cm">船名</param>
        /// <param name="hcorhbh">航次</param>
        /// <param name="yjkgsj">预计靠港时间</param>
        /// <param name="strerr">异常日志返回</param>
        /// <returns></returns>
        public static bool pushShip(string cm, string hcorhbh, string yjkgsj, out string strerr)
        {
            strerr = string.Empty;
            Interfaces.Service.FenceService serv = new Interfaces.Service.FenceService();
            s_fence_log log = new s_fence_log();
            log.jklx = "船名推送";
            log.sfcg = 0;
            log.dzwlbh = cm;
            try
            {
                string url = baseUrl + "/api/grab/grabArrivalTime";

                string userid = "10000";

                string token = HttpUtility.UrlEncode(DESEncrypt(userid));

                string param = string.Format("userId={0}&token={1}&shipName={2}&voyage={3}&expectedStopTime={4}", userid, token, cm, hcorhbh, yjkgsj);
                log.reqjson = param;
                string strJson = PostWebRequest(url, param, Encoding.UTF8);
                log.resjson = strJson;
                FenceResponse response = JsonConvert.DeserializeObject<FenceResponse>(strJson);
                if (response.code == "0")
                {
                    log.sfcg = 1;
                }
                else
                {
                    strerr = response.des;
                }
            }
            catch (Exception ex)
            {
                strerr = ex.Message;
                writeLog("pushShip出现异常：" + ex.Message);
            }
            finally
            {
                log.msg = strerr;
                serv.addfencelog(log);
            }
            return log.sfcg == 1;
        }

        public void containerShipTest(HttpContext context)
        {
            string p1 = context.Request.Params["p1"];
            string p2 = context.Request.Params["p2"];
            string p3 = context.Request.Params["p3"];
            string strerr = "";
            res.code = containerShip(p1, p2, p3, out strerr) ? "000" : "100";
            res.des = strerr;
        }
        /// <summary>
        /// 调用中间体 集装箱抓取
        /// </summary>
        /// <param name="jzxh">集装箱号</param>
        /// <param name="ztdh">提单号</param>
        /// <param name="yjkgsj">预计靠港时间</param>
        /// <param name="strerr">异常信息</param>
        /// <returns></returns>
        public static bool containerShip(string jzxh, string ztdh, string yjkgsj, out string strerr)
        {
            strerr = string.Empty;
            Interfaces.Service.FenceService serv = new Interfaces.Service.FenceService();
            s_fence_log log = new s_fence_log();
            log.jklx = "集装箱推送";
            log.sfcg = 0;
            log.dzwlbh = jzxh;
            try
            {
                string url = baseUrl + "/api/grab/grabContainerStatus";

                string userid = "10000";

                string token = HttpUtility.UrlEncode(DESEncrypt(userid));

                string param = string.Format("userId={0}&token={1}&boxNumber={2}&ladingBill={3}&expectedStopTime={4}", userid, token, jzxh, ztdh, yjkgsj);
                log.reqjson = param;
                string strJson = PostWebRequest(url, param, Encoding.UTF8);
                log.resjson = strJson;
                FenceResponse response = JsonConvert.DeserializeObject<FenceResponse>(strJson);
                if (response.code == "0")
                {
                    log.sfcg = 1;
                }
                else
                {
                    strerr = response.des;
                }
            }
            catch (Exception ex)
            {
                strerr = ex.Message;
                writeLog("pushShip出现异常：" + ex.Message);
            }
            finally
            {
                log.msg = strerr;
                serv.addfencelog(log);
            }
            return log.sfcg == 1;
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

    public class PortResponse
    {
        public string code { get; set; }

        public string des { get; set; }

        public object result { get; set; }
    }
}