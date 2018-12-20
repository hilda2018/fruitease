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
    public partial class W_User_List
    {
        public W_User_List()
        {

        }
        
         public override void OnLoad()
        {
            base.OnLoad();

             ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            report.MainTitle = "ϵͳ�û��б�";
            report.ReportTiles.Add(new ReportTitle(1, Sybase.DataWindow.Alignment.Right, "��ӡ���ڣ�[@ϵͳ����] ҳ�룺[@ҳ��]/[@��ҳ��]"));

            //DataWindowChild dwc = dw_1.GetChild("Dlwtf");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("%");

            //DataWindowChild dwc_d_no = dw_1.GetChild("d_no");
            //dwc_d_no.SetTransaction(this.AdoTransaction);
            //dwc_d_no.Retrieve("%");

            var Dlwtf = AppService.GetDlwtf();            
            this.SetParm("Dlwtf", Dlwtf);             
            dw_1.Retrieve(Dlwtf);

          ////ע����Ҫʹ�õĵ������ڵ��¼���������JS�ļ�
            if (this.Page != null)
            {
                this.RegisterClientScriptInclude("W_User_List", "/Admin/W_User_List.win.js");
                this.RegisterClientScriptInclude("W_User_Edit", "/Admin/W_User_Edit.win.js");
                this.RegisterClientScriptInclude("W_Sys_User_SetPassword", "/Admin/W_Sys_User_SetPassword.win.js");
                this.RegisterClientScriptInclude("W_User_SetRoles", "/Admin/W_User_SetRoles.win.js");
                this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js"); 
            }

            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
