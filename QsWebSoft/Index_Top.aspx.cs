using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data;
using System.Data.SqlClient;
using TXSoft.DataStore;

namespace QsWebSoft
{
    public partial class Index_Top : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.Response.CacheControl = "no-cache";

            
        }
       
    }
}
