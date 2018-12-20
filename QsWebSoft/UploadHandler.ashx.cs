using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data.SqlClient;
using System.Data;
using TXSoft.DataStore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace QsWebSoft
{
    /// <summary>
    /// UploadHandler 的摘要说明
    /// </summary> 
   
    public class UploadHandler : IHttpHandler
    {
       
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Charset = "utf-8";
            HttpPostedFile file = context.Request.Files["Filedata"];
            string uploadPath =HttpContext.Current.Server.MapPath(@context.Request["folder"]) + "\\";
            if (file != null)
            {
            if (!Directory.Exists(uploadPath))
            {
            Directory.CreateDirectory(uploadPath);
            }
            file.SaveAs(uploadPath + file.FileName);
           
            //SqlCommand detail = DBHelp.GetCommand("insert into yw_wldw_khfp(yw_khbm,ywy) select yw_khbm,sqr from yw_wldw where yw_khbm=@id ;");
            //detail.Parameters.Add(new SqlParameter("@id", "1"));
            
            //if (detail.ExecuteNonQuery() > 0)
            //{
               
            //}
            //else
            //{
            //    DBHelp.Rollback();
            //}
        

            //下面这句代码缺少的话，上传成功后上传队列的显示不会自动消失
            context.Response.Write("1");
            }
            else
            {
            context.Response.Write("0");
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