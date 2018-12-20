using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

public partial class index : System.Web.UI.Page
{
    bool isadd = true;
    int pID = 0;
    string ywbh = "";
    string rt = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        rt = Get("ID");
        JsCommon.Alert(rt,this);
        pID=Convert.ToInt32(rt.Substring(0,1));
        ywbh = rt.Substring(1);
        if (pID > 0)
            isadd = false;
        else
            isadd = true;
        if (!IsPostBack)
        {
            if (!isadd)
            {
                this.Title = "修改";
                BinData();
                this.btnSubmit.Text = this.Title;;
            }
            else
            {
                this.Title = "添加";
                this.btnSubmit.Text = this.Title;

            }
        } 
    }
    public void BinData()
    {
        string connStr = ConfigurationManager.ConnectionStrings["DBConnection"].ToString();
        SqlConnection conn = new SqlConnection(connStr);
        conn.Open();
        string sql = "select * from yw_fwb where ywbh='" + ywbh + "'";
        SqlCommand comm = new SqlCommand(sql, conn);
        SqlDataReader dr = comm.ExecuteReader();
        if (dr.Read())
        {
            content.Text = dr.GetString(dr.GetOrdinal("fwbnr"));
        }
        if (conn.State == ConnectionState.Open)
        {
            conn.Close();
        }

    }
    /// <summary>
    /// 数据提交事件处理
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void btnSubmit_OnClick(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            if (isadd)
            {
                string connStr = ConfigurationManager.ConnectionStrings["DBConnection"].ToString();
                SqlConnection conn = new SqlConnection(connStr);
                conn.Open();
                string sql = "insert into yw_fwb (ywbh,fwbnr) values(N'" + Convert.ToString(ywbh) + "',N'" + Convert.ToString(content.Text) + "')";
                SqlCommand comm = new SqlCommand(sql, conn);
                comm.ExecuteNonQuery();
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
                JsCommon.Alert("添加成功", "GetFwb.aspx?ID=" + rt, this);
            }
            else
            {
                string connStr = ConfigurationManager.ConnectionStrings["DBConnection"].ToString();
                SqlConnection conn = new SqlConnection(connStr);
                conn.Open();
                string sql = "Update yw_fwb set fwbnr='" + Convert.ToString(content.Text) + "' where ywbh='" + Convert.ToString(ywbh) + "'";
                SqlCommand comm = new SqlCommand(sql, conn);
                comm.ExecuteNonQuery();
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
                JsCommon.Alert("修改成功", "GetFwb.aspx?ID=" + rt , this);
            }
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
}