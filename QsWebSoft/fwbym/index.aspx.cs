using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class index : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //ltView.Text=Convert.ToString("<h1 align=\"center\"> <span style=\"color:#E56600;font-family:NSimSun;font-size:32px;background-color:#FFFFFF;\">aaaaaaaaaaaa</span> </h1>"+
        //    "<h1 align=\"center\"><img alt=\"\" src=\"http://localhost:6094/web/kindeditor/plugins/emoticons/images/30.gif\" border=\"0\" /></h1>");
        //content.Text = ltView.Text;
    }
    /// <summary>
    /// 数据提交事件处理
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void btnSubmit_OnClick(object sender, EventArgs e)
    {
        //将TextBox控件内的值加入至页面容器内显示
        ltView.Text = content.Text;
    }
}