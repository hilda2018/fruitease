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
            report.MainTitle = "ϵͳ�û���ɫ�б�";
            report.ReportTiles.Add(new ReportTitle(1, Sybase.DataWindow.Alignment.Right, "��ӡ���ڣ�[@ϵͳ����] ҳ�룺[@ҳ��]/[@��ҳ��]"));

            dw_1.Retrieve();
    
            //ע����Ҫʹ�õĵ������ڵ��¼���������JS�ļ�
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
