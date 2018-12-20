using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

public partial class GetFwb : System.Web.UI.Page
{
    int pID = 0;
    string ywbh = "test";
    protected void Page_Load(object sender, EventArgs e)
    {
        string rt = Get("ID");
        if (rt == "")
        {
            ywbh = "YW001";
        }
        else
        {
            JsCommon.Alert(rt, this);
            pID = Convert.ToInt32(rt.Substring(0, 1));
            ywbh = rt.Substring(1);
        }
        BindData();
    }
    public void BindData()
    {
        string connStr = ConfigurationManager.ConnectionStrings["DBConnection"].ToString();
        SqlConnection conn = new SqlConnection(connStr);
        conn.Open();
        string sql = "select * from yw_fwb where ywbh='" + ywbh + "'";
        SqlCommand comm = new SqlCommand(sql, conn);
        SqlDataReader dr = comm.ExecuteReader();
        if (dr.Read())
        {
            ltView.Text = dr.GetString(dr.GetOrdinal("fwbnr"));
        }
        if (conn.State == ConnectionState.Open)
        {
            conn.Close();
        }
    }
    protected String Get(String VarName)
    {
        string varValue = "";
        if (!string.IsNullOrEmpty(HttpContext.Current.Request[VarName]))
            varValue = HttpContext.Current.Request[VarName].ToString();
        else if (!string.IsNullOrEmpty(HttpContext.Current.Request.QueryString[VarName]))
            varValue = HttpContext.Current.Request.QueryString[VarName].ToString();
        else if (!string.IsNullOrEmpty(HttpContext.Current.Request.Form[VarName]))
            varValue = HttpContext.Current.Request.Form[VarName].ToString();
        return varValue;
    }

    //测试按钮
    protected void Add_Btn_Click(object sender, EventArgs e)
    {
        Response.Write("<script>window.open('index.aspx?ID=0YW002','_blank')</script>");
    }
}