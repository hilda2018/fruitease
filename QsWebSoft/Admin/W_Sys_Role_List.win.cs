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
    public partial class W_Sys_Role_List
    {
        public W_Sys_Role_List()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

           
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            report.MainTitle = "系统用户角色列表";
            report.ReportTiles.Add(new ReportTitle(1, Sybase.DataWindow.Alignment.Right, "打印日期：[@系统日期] 页码：[@页码]/[@总页数]"));

            dw_1.Retrieve();
    
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            if (this.Page != null)
            {
                this.RegisterClientScriptInclude("W_Sys_Role_List", "/Admin/W_Sys_Role_List.win.js");
                this.RegisterClientScriptInclude("W_Sys_Role_Edit", "/Admin/W_Sys_Role_Edit.win.js");
                this.RegisterClientScriptInclude("W_Sys_Role_SetPermission", "/Admin/W_Sys_Role_SetPermission.win.js");
                this.RegisterClientScriptInclude("W_Sys_Warning_SetPermission", "/Admin/W_Sys_Warning_SetPermission.win.js");
                this.RegisterClientScriptInclude("W_Sys_Role_SetUsers", "/Admin/W_Sys_Role_SetUsers.win.js");
   
            }

            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
      }
    }
}
