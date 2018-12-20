using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace QsWebSoft
{
    public partial class DownLoadPic : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            downloadPic();
        }

        public void downloadPic()
        {
            try
            {
                string fileName = HttpContext.Current.Request.QueryString["fileName"];
                string DownLoadFile = fileName + ".jpg";
                if (string.IsNullOrEmpty(fileName)) return;
                string strFile = AppDomain.CurrentDomain.BaseDirectory;

                strFile = strFile + "Images\\" + fileName + ".jpg";


                
                //Response.ContentEncoding = System.Text.Encoding.GetEncoding("UTF-8"); //解决中文乱码   
                //Response.AddHeader("Content-Disposition", "attachment; filename=" + strFilePath.ToString().Trim()); //解决中文文件名乱码
                FileStream fs = new FileStream(strFile, FileMode.Open);

                byte[] bytes = new byte[(int)fs.Length];

                fs.Read(bytes, 0, bytes.Length);
                
                fs.Close();


                //System.IO.File.WriteAllBytes(@"d:\" + fileName + ".jpg", bytes);

                HttpContext.Current.Response.ContentType = "application/octet-stream";
                HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=" + HttpUtility.UrlEncode(DownLoadFile));

                HttpContext.Current.Response.BinaryWrite(bytes);
                HttpContext.Current.Response.Flush();
                HttpContext.Current.Response.End();

                HttpContext.Current.ApplicationInstance.CompleteRequest();
            }
            catch (Exception  )
            {
                 
            }

        }
    }
}