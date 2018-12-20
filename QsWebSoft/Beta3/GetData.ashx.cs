using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace QsWebSoft.Beta3
{
    /// <summary>
    /// GetData 的摘要说明
    /// </summary>
    public class GetData : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                string strFile = AppDomain.CurrentDomain.BaseDirectory;
                strFile = strFile + "Excel\\Report\\2ff5515a-5b4b-437a-ad0c-438efaca7a81.xls";

                FileStream fs = new FileStream(strFile, FileMode.Open);

                byte[] bytes = new byte[(int)fs.Length];

                fs.Read(bytes, 0, bytes.Length);

                fs.Close();
                //byte[] fileData = GZip.Compress(Base64.Decode(bytes.ToString()));
                HttpContext.Current.Response.ContentType = "application/ms-excel";
                HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=" + HttpUtility.UrlEncode(strFile));

                HttpContext.Current.Response.BinaryWrite(bytes);
                HttpContext.Current.Response.Flush();
                HttpContext.Current.Response.End();
                //HttpContext.Current.ApplicationInstance.CompleteRequest();
            }
            catch (Exception )
            {
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