using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

namespace QsWebSoft
{
    public partial class OpenWindow : BasePage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (this.Request["FunID"] != null)
            {
   
                 DBHelp db = new DBHelp();
                db.Open();

                string windowName = string.Empty;
                string parm = string.Empty;

                SqlCommand cmd = db.GetCommand("SELECT WindowName, OpenParm  From Sys_Modules Where ID=@FunID");
                cmd.Parameters.AddWithValue("@FunID", Request["FunID"].ToString());
                SqlDataReader rs = cmd.ExecuteReader();

                if (rs.Read())
                {
                    if (rs.IsDBNull(0))
                    {
                        rs.Close();
                        db.Close();
                        Response.Write("<div style='text-align: center; margin-top: 150px; font-size: 24px; color: #900; font-weight: bold;'> <p><img src='/Images/jianshezhong1.gif'  alt='coming soon' /></p><p>当前模块正在开发中......</p></div>");
                        return;
                    }

                    windowName = rs.GetString(0);
                    if (!rs.IsDBNull(1))
                        parm = rs.GetString(1);
                }

                if (!String.IsNullOrEmpty(windowName))
                {
                    win.FunctionID = this.Request["FunID"].ToString();
                    win.StringParm = parm;
                    win.WindowType = windowName;

                }
                rs.Close();
                db.Close();

               
            }
        }

        protected override void OnPreRender(EventArgs e)
        {
            //窗口的标题
            if (win.Instance != null)
                this.Title = win.Instance.Title;
   
            base.OnPreRender(e);
        }
    }
}