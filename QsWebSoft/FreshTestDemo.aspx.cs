
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Interfaces;
using Interfaces.Model;
using System.Xml;
using System.ComponentModel;
using System.Reflection;

namespace WebApplication1
{
    public partial class FreshTestDemo : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(QsWebSoft.AppService.GetUserID()))
            {
                Response.Write("登录超时！");
                Response.End();
            }
        }
        string ywbh = "16ZT1916";
        string[] ywbhs = { "16ZT1697", "16ZT1916" };
       // HddzIF serv = new HddzIF();


        /// <summary>
        /// 查看调用webservice地址
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button2_Click(object sender, EventArgs e)
        {
            Interfaces.FreshPortSupplierSell.CommonInvokeServiceImpl serv = new Interfaces.FreshPortSupplierSell.CommonInvokeServiceImpl();
            this.TextBox1.Text = serv.Url;
        }

        /// <summary>
        /// 完整调用测试
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button3_Click(object sender, EventArgs e)
        {

            HddzIF serv = new HddzIF();

            this.Label1.Text = "";
            if (serv.HddzChange(ywbhs))
            {
                this.Label1.Text = "数据同步成功！";
            }
            else
                this.Label1.Text = "数据同步失败！";
            //调用日志
            this.TextBox1.Text = serv.LogInfo.Log;


        }
        /// <summary>
        /// 输入业务部编号调用
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button4_Click(object sender, EventArgs e)
        {
            HddzIF serv = new HddzIF();
            if (this.txtywbh.Text.Trim() != "")
            {
                ywbh = this.txtywbh.Text;
            }

            this.Label1.Text = "";
            if (serv.HddzChange(ywbh))
            {
                this.Label1.Text = "数据同步成功！";
            }
            else
                this.Label1.Text = "数据同步失败！";
            //调用日志
            this.TextBox1.Text = serv.LogInfo.Log;
        }

       
    }
}