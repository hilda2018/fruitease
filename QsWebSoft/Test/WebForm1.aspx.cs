using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Text;

namespace QsWebSoft.Test
{
    public partial class WebForm1 : System.Web.UI.Page
    {

        int PageSize = 18;
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void GetDate()
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand commd = null;
        }

        public void GridView_DataBind()
        {
            DataSet ds = new DataSet();
            DBHelp dbHelp = new DBHelp();
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT yw_hddz.ywbh,yw_hddz.zbr,yw_hddz.zbrq,yw_hddz.dlwtf,yw_hddz.hth,yw_hddz.dlxyh,yw_hddz.zydl FROM yw_hddz WHERE (datediff(dd,yw_hddz.zbrq,'2016-11-12') < =0  AND datediff(dd,yw_hddz.zbrq,'2017-02-10') > =0) AND (yw_hddz.ysfs = '海运') and (state <> '终止' and yw_hddz.sjkgsj is null)");

            ds = dbHelp.Query(sql.ToString());

            GridView1.PageSize = PageSize;
            GridView1.DataKeyNames = new string[] { "EQUIPLISTID" };
            GridView1.DataSource = ds;
            GridView1.DataBind();
        }

    }
}