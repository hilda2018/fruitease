using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QsWebSoft.Beta3
{
    /// <summary>
    /// PostData 的摘要说明
    /// </summary>
    public class PostData : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
             context.Response.ContentType = "text/html";
             if (context.Request.Form["name"] != null)
                 context.Response.Write("上传的数据是:" + context.Request.Form["name"]);
             else
             {
                 context.Response.Write("上传的数据是不正确!");
             }
         }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}