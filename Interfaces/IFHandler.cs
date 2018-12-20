using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.IO;
using System.Text;

namespace Interfaces
{
    /// <summary>
    /// IFHandler 的摘要说明
    /// </summary>
    public class IFHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            ServResponse servResp = new ServResponse();
            try
            {
                string strErr = "";
                string tableName = context.Request.Params["tablename"];
                string changeCols = context.Request.Params["changecols"];
                string id = context.Request.Params["id"];
                string parameters = context.Request.Params["parameters"];
                string strJson = context.Request.Params["strjson"];

                if (string.IsNullOrEmpty(strJson))
                {
                    if (string.IsNullOrEmpty(tableName) || string.IsNullOrEmpty(id))
                    {
                        throw new Exception("tablename和id不能为空！");
                    }

                    List<string> p = new List<string>();
                    if (parameters != null)
                    {
                        p = parameters.Split(',').ToList();
                    }

                    servResp.result = Interfaces.GeneralPortal.DataToFreshPort(tableName, changeCols, id, out strErr, p.ToArray());
                    servResp.msg = strErr;
                }
                else
                {
                    List<RequestPara> list = JsonConvert.DeserializeObject<List<RequestPara>>(strJson);

                    if (list != null && list.Count > 0)
                    {
                        foreach (var para in list)
                        {
                            List<string> p = new List<string>();
                            if (para.parameters != null)
                            {
                                p = para.parameters.Split(',').ToList();
                            }
                            Interfaces.GeneralPortal.DataToFreshPort(para.tablename, para.changecols, para.id, out strErr, p.ToArray());
                        }
                    }
                    servResp.result = true;
                    servResp.msg = strErr;
                }
                SysLog("请求参数为" + context.Request.Params.ToString());
            }
            catch (Exception ex)
            {
                servResp.result = false;
                servResp.msg = ex.Message;
            }

            context.Response.Write(servResp.ToJsonString());
        }

        public static void SysLog(string strlog)
        {
            strlog = DateTime.Now.ToShortTimeString() + "\t远程请求：" + strlog;
            string path = HttpContext.Current.Server.MapPath("/Interfaces/");
            File.AppendAllText(path + "log_" + DateTime.Now.ToString("yyyyMMdd") + ".txt", strlog, Encoding.Default);
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }

    public class RequestPara
    {
        /// <summary>
        /// 表名
        /// </summary>
        public string tablename
        {
            get; set;
        }
        /// <summary>
        /// 更新字段集合
        /// </summary>
        public string changecols
        {
            get; set;
        }

        /// <summary>
        /// id
        /// </summary>
        public string id
        {
            get; set;
        }

        /// <summary>
        /// 其他参数
        /// </summary>
        public string parameters
        {
            get; set;
        }


    }
    public class ServResponse
    {
        public bool result { get; set; }

        public object data { get; set; }

        public string msg { get; set; }

        public string ToJsonString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}