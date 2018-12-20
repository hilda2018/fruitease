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


namespace QsWebSoft.Wldw
{
    public partial class W_Wxlxr_Role_List
    {
        public W_Wxlxr_Role_List()
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
                this.RegisterClientScriptInclude("W_Wxlxr_Role_List", "/Wldw/W_Wxlxr_Role_List.win.js");
                this.RegisterClientScriptInclude("W_Wxlxr_Role_Edit", "/Wldw/W_Wxlxr_Role_Edit.win.js");
                this.RegisterClientScriptInclude("W_Wxlxr_Role_SetUsers", "/Wldw/W_Wxlxr_Role_SetUsers.win.js");
   
            }

            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
      }
    }
}
