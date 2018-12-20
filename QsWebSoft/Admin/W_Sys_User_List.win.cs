using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Web;
using System.Data;
using System.Data.SqlClient;

using Sybase.DataWindow;
using TXSoft.Common;
using TXSoft.ExtPB;
using TXSoft.DataStore;


namespace QsWebSoft.Admin
{
    public partial class W_Sys_User_List
    {
        public W_Sys_User_List()
        {

        }
        
         public override void OnLoad()
        {
            base.OnLoad();

             ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            report.MainTitle = "系统用户列表";
            report.ReportTiles.Add(new ReportTitle(1, Sybase.DataWindow.Alignment.Right, "打印日期：[@系统日期] 页码：[@页码]/[@总页数]"));

            DataWindowChild dwc = dw_1.GetChild("Dlwtf");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("%");

            DataWindowChild dwc_d_no = dw_1.GetChild("d_no");
            dwc_d_no.SetTransaction(this.AdoTransaction);
            dwc_d_no.Retrieve("%");

             dw_1.Retrieve();

          ////注册需要使用的弹出窗口的事件处理程序的JS文件
            if (this.Page != null)
            {
                this.RegisterClientScriptInclude("W_Sys_User_List", "/Admin/W_Sys_User_List.win.js");
                this.RegisterClientScriptInclude("W_Sys_User_Edit", "/Admin/W_Sys_User_Edit.win.js");
                this.RegisterClientScriptInclude("W_Sys_User_SetPassword", "/Admin/W_Sys_User_SetPassword.win.js");
                this.RegisterClientScriptInclude("W_Sys_User_SetRoles", "/Admin/W_Sys_User_SetRoles.win.js");
                this.RegisterClientScriptInclude("W_Sys_User_SetBType", "/Admin/W_Sys_User_SetBType.win.js");
                this.RegisterClientScriptInclude("W_Sys_User_SetPower", "/Admin/W_Sys_User_SetPower.win.js");
                this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js"); 
            }

            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));    
        }
    }
}
