using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data.SqlClient;

namespace QsWebSoft
{
    public partial class DownLoad : System.Web.UI.Page
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
                string DownLoadFile = HttpContext.Current.Request.QueryString["Code"]+"_"
                    + HttpContext.Current.Request.QueryString["Djbh"] + ".xls";
                if (string.IsNullOrEmpty(fileName))
                {
                    HttpContext.Current.ApplicationInstance.CompleteRequest();
                } 
                string strFile = AppDomain.CurrentDomain.BaseDirectory;
                strFile = strFile + "Excel\\Report\\"+fileName+".xls";
                System.IO.FileStream fs = new System.IO.FileStream(strFile, System.IO.FileMode.Open, System.IO.FileAccess.Read, FileShare.ReadWrite);

                //FileStream fs = new FileStream(strFile, FileMode.Open);

                byte[] bytes = new byte[(int)fs.Length];

                fs.Read(bytes, 0, bytes.Length);
                
                fs.Close();
                try
                {
                    File.Delete(strFile);
                    RecordPrn(HttpContext.Current.Request.QueryString["Code"], "EXCEL");
                }
                catch
                {
                }
               
                //byte[] fileData = GZip.Compress(Base64.Decode(bytes.ToString()));
                HttpContext.Current.Response.ContentType = "application/ms-excel";
                HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=" + HttpUtility.UrlEncode(DownLoadFile));

                HttpContext.Current.Response.BinaryWrite(bytes);
                HttpContext.Current.Response.Flush();
                //HttpContext.Current.Response.End();
                HttpContext.Current.ApplicationInstance.CompleteRequest();
            }
            catch (HttpException ex)
            {
                string strModuleExcel = AppDomain.CurrentDomain.BaseDirectory + "ErrorD.txt";
                if (File.Exists(strModuleExcel))
                {
                    File.Delete(strModuleExcel);
                }
                FileStream fs_stream = new FileStream(strModuleExcel, FileMode.CreateNew);
                BinaryWriter writefile = new BinaryWriter(fs_stream);
                writefile.Write(HttpUtility.UrlEncode(ex.Message, System.Text.Encoding.Unicode));
                writefile.Close();

                HttpContext.Current.ApplicationInstance.CompleteRequest();
            }
            

        }

        public void RecordPrn(string mxdbh, string lx)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            var userip = AppService.GetIp();
            try
            {
                cmd = dbHelp.GetCommand("insert into sys_prn_record (userid,djlx,fph,ip,rq) values(@userid,@lx,@fph,@userip,getdate())   ");


                cmd.Parameters.Add(new SqlParameter("@fph", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@lx", lx));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@userip", userip));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

        }
    }
}