using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace QsWebSoft.Wjxz
{
    public partial class W_Wjxz_Zbsd : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var wjmc = this.Request["wjmc"].ToString();
            Image1.ImageUrl = "/wenjian/CIQ_TAX_ORIGINAL/" + wjmc;

           

        }
    }
}