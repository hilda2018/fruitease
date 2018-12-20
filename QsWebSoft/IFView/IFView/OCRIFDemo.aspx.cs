using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Interfaces;
using Interfaces.OCRWebServ;
using Newtonsoft.Json;
using Interfaces.OCRModel;

namespace IFView
{
    public partial class OCRIFDemo : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(QsWebSoft.AppService.GetUserID()))
            {
                Response.Write("登录超时！");
                Response.End();
            }

        }
    }
}