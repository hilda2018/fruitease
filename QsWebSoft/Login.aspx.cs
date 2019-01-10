using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using TXSoft.DataStore;
using System.Security.Cryptography;
using System.Text;
namespace QsWebSoft
{
    public partial class Login : System.Web.UI.Page
    {



        protected void Page_Load(object sender, EventArgs e)
        {



            if (this.IsPostBack)
            {
                string userID = UserID.Text.Trim();
                string pwd = Password.Text.Trim();
                string code = Code.Text.Trim();
                string error = string.Empty;


                if (!QsWebSoft.AppService.Login(userID, pwd, ref error))
                {
                    this.Page.ClientScript.RegisterStartupScript(this.GetType(), "Script", "alert('" + error + "');", true);
                    return;
                }

                if (UserID.Text == "admin")
                {
                    Response.Cookies["UserID"].Value = UserID.Text;
                }
                else
                {
                    Response.Cookies["UserID"].Value = UserID.Text.ToUpperInvariant();
                }


                if (string.Compare(Code.Text, Session["CaptchaImageText"].ToString()) != 0)
                {
                    this.Page.ClientScript.RegisterStartupScript(this.GetType(), "Script", "alert('验证码不正确!');", true);
                    return;
                }




                Response.Cookies["UserID"].Expires = DateTime.Now.AddDays(30);

                if (this.Request.QueryString["ReturnUrl"] != null)
                    Server.Transfer(HttpUtility.UrlDecode(this.Request.QueryString["ReturnUrl"].ToString()));
                else
                    Server.Transfer("Index.aspx");

            }
            else
            {
                VeriryCode.ImageUrl = @"/captcha/captcha.ashx?w=65&h=20&Ticks=" + DateTime.Now.Ticks.ToString();
                if (Request.Cookies["UserID"] != null)
                    UserID.Text = Request.Cookies["UserID"].Value;
                else
                    UserID.Text = "";
            }
        }

        protected override void Render(HtmlTextWriter writer)
        {


            base.Render(writer);
        }


    }
}
