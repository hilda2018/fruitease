using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace QsWebSoft
{
    public partial class Help : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            download();
        }

        public void download()
        {
            try
            {
                string fileName = HttpContext.Current.Request.QueryString["fileName"];

                if (string.IsNullOrEmpty(fileName)) return;
                string strFile = AppDomain.CurrentDomain.BaseDirectory;
                
                strFile = strFile + "Excel\\Report\\" + fileName + ".xls";

                FileStream fs = new FileStream(strFile, FileMode.Open);

                byte[] bytes = new byte[(int)fs.Length];

                fs.Read(bytes, 0, bytes.Length);

                fs.Close();

                File.Delete(strFile);
                //byte[] fileData = GZip.Compress(Base64.Decode(bytes.ToString()));
                HttpContext.Current.Response.ContentType = "application/ms-excel";
                HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=" + HttpUtility.UrlEncode(strFile));

                HttpContext.Current.Response.BinaryWrite(bytes);
                HttpContext.Current.Response.Flush();
                HttpContext.Current.Response.End();
                //HttpContext.Current.ApplicationInstance.CompleteRequest();
            }
            catch (Exception ex)
            {
              var  error = ex.Message;
            }

        }
    }
}