using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace QsWebSoft.pdfwj
{
    public partial class ftpxs : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string path;
            try
            {
                path = HttpContext.Current.Server.MapPath(@"UploadFiles/pdf/") + "20150804043543912" + ".pdf";
                //path = "/UploadFiles/pdf/" + "20150804043543912" + ".pdf";
            }
            catch (Exception)
            {
                return;
            }
            System.IO.Stream iStream = null;
            byte[] buffer = new Byte[10000];
            int length;
            long dataToRead;
            string filename = "20150804043543912" + ".pdf";

            try
            {
                iStream = new System.IO.FileStream(path, System.IO.FileMode.Open, System.IO.FileAccess.Read, System.IO.FileShare.Read);
                dataToRead = iStream.Length;
                Response.Clear();
                Response.ClearHeaders();
                Response.ClearContent();
                Response.ContentType = "application/pdf"; //文件类型
                Response.AddHeader("Content-Length", dataToRead.ToString());//添加文件长度，进而显示进度
                Response.AddHeader("Content-Disposition", "attachment; filename=" + HttpUtility.UrlEncode(filename, System.Text.Encoding.UTF8));
                while (dataToRead > 0)
                {
                    if (Response.IsClientConnected)
                    {
                        length = iStream.Read(buffer, 0, 10000);
                        Response.OutputStream.Write(buffer, 0, length);
                        Response.Flush();

                        buffer = new Byte[10000];
                        dataToRead = dataToRead - length;
                    }
                    else
                    {
                        dataToRead = -1;
                    }
                }

            }
            catch (Exception ex)
            {
                Response.Write("文件下载时出现错误!");

            }
            finally
            {
                if (iStream != null)
                {
                    iStream.Close();
                }
                //结束响应，否则将导致网页内容被输出到文件，进而文件无法打开
                Response.End();
            }
        }
        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Write("<script>window.open('http://www.fruitease.com:8009/pdfwj/1407-0109.pdf','_blank')</script>");
            //Response.Redirect("http://www.fruitease.com:8009/pdfwj/1407-0109.pdf");
        }
        protected void Button3_Click(object sender, EventArgs e)
        {
            if (FileUpload1.HasFile)
            {
                string savePath = "";
                string random_time = "";
                string file_type = "pdf";
                file_type = file_type.ToUpper();
                switch (file_type)
                {
                    case "PDF":
                        savePath = @"UploadFiles/pdf/";
                        break;
                    case "MP3":
                        savePath = @"UploadFiles/srt/";
                        break;
                    case "SRT": //促销图
                        savePath = @"UploadFiles/mp3/";
                        break;
                }

                string fileName = HttpContext.Current.Server.HtmlEncode(FileUpload1.FileName);
                string extension = Path.GetExtension(fileName);
                string ImageName = null;
                if (extension.ToUpper() == "." + file_type)
                {
                    random_time = DateTime.Now.ToString("yyyyMMddhhmmssfff");
                    ImageName = random_time + extension;
                    savePath += ImageName;
                    savePath = HttpContext.Current.Server.MapPath(savePath);
                    FileUpload1.SaveAs(savePath);
                }
                else
                {
                    //JsCommon.Alert("文件上传格式" + extension + "错误,系统要求格式:" + file_type, this);
                }
            }
            else
            {
                //JsCommon.Alert("文件不允许为空", this);
                return;
            }
        }
    }
}