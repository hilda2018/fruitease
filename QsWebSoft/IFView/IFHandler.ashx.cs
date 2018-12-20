using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace WebApplication1.IFView
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
            }
            catch (Exception ex)
            {
                servResp.result = false;
                servResp.msg = ex.Message;
            }

            context.Response.Write(servResp.ToJsonString());
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
            get;
            set;
        }
        /// <summary>
        /// 更新字段集合
        /// </summary>
        public string changecols
        {
            get;
            set;
        }

        /// <summary>
        /// id
        /// </summary>
        public string id
        {
            get;
            set;
        }

        /// <summary>
        /// 其他参数
        /// </summary>
        public string parameters
        {
            get;
            set;
        }


    }
}