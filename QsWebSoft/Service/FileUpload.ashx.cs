using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Drawing;
using System.Web.SessionState;


using System.IO;
using TXSoft.Common;
using System.Data.SqlClient;

namespace QsWebSoft.Service
{
    /// <summary>
    /// FileUpload 的摘要说明
    /// </summary>
    public class FileUpload :ServiceBase 
    {

        protected void UpdatePic()
        {

            System.Drawing.Image original_image = null;
            System.Drawing.Bitmap final_image = null;
            System.Drawing.Graphics graphic = null;
            MemoryStream ms = null;

             //传入的文件Base64内容，是经过gzip压缩后再进行Base64编码的
            try
            {
                string empID = this.Context.Request.Form["empid"].ToString();
                byte[] fileData = GZip.UnCompress(Base64.Decode(this.Context.Request.Form["picdata"].ToString()));


                //生成缩略图,因为上传的图片文件可能比较大,而数据窗口所需要员工相片不需要很大，生成缩略图后
                //可有效减少图片文件的大小，其它客户端加载时，会比较快
                ms = new MemoryStream(fileData, 0, fileData.Length);
               original_image = System.Drawing.Image.FromStream(ms);

                // Calculate the new width and height
                int width = original_image.Width;
                int height = original_image.Height;
                int target_width = 128;   //数据窗口图片对象的宽度
                int target_height = 150;  //数据窗口图片对象的高度
               

     
                 final_image = new System.Drawing.Bitmap(target_width, target_height);
                 graphic = System.Drawing.Graphics.FromImage(final_image);
                 graphic.FillRectangle(new System.Drawing.SolidBrush(System.Drawing.Color.White), new System.Drawing.Rectangle(0, 0, target_width, target_height));
                 graphic.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.Default; /* new way */
                 graphic.DrawImage(original_image, 0, 0, target_width, target_height);

                 string thumbnail_id = DateTime.Now.ToString("yyyyMMddHHmmssfff")+".jpg";
                 string fileName = this.Context.Server.MapPath("/EmpPics/"+thumbnail_id);
                 final_image.Save(fileName, System.Drawing.Imaging.ImageFormat.Jpeg);

                 //更新员工相片的文件名称
                 DBHelp dbHelp = new DBHelp();
                 dbHelp.Open();

                 SqlCommand cmd = dbHelp.GetCommand("UPDATE HR_Employee Set PIC=@pic Where ID=@ID");
                 cmd.Parameters.Add(new SqlParameter("@pic",thumbnail_id));
                 cmd.Parameters.Add(new SqlParameter("@ID",empID)) ;
                 cmd.ExecuteNonQuery();
                 dbHelp.Close();

                 this.Context.Response.StatusCode = 200;
                 this.Context.Response.Write(thumbnail_id);
  
            }
            catch (Exception ex)
            {
               SetErrorInfo(ex.Message); 
             }
            finally
            {
                // Clean up
                if (final_image != null) final_image.Dispose();
                if (graphic != null) graphic.Dispose();
                if (original_image != null) original_image.Dispose();
                if (ms != null) ms.Close();
            }
       }

       
    }
}