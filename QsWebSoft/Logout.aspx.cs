using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace QsWebSoft
{
    public partial class Logout : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.Session.RemoveAll();
            
         
            //ClearCookie("UserID");
        }

        //public static void ClearCookie(string CookieName)
        //{
        //    HttpCookie myCookie = new HttpCookie(CookieName);
        //    DateTime now = DateTime.Now;
        //    myCookie.Expires = now.AddYears(-2);//时间设置负数就能删除    
        //    HttpContext.Current.Response.Cookies.Add(myCookie);
        //}
    }
}
