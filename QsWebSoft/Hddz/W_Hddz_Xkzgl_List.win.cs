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


namespace QsWebSoft.Hddz
{
    public partial class W_Hddz_Xkzgl_List
    {
        public W_Hddz_Xkzgl_List()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)this.dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            report.FontSize = 14;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();


            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000150";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            

            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {

                btn_rowadd.Visible = true;
                btn_rowdelete.Visible = true;
                btn_1.Visible = true;
                btn_save.Visible = true; 
                dw_1.Modify("DataWindow.Readonly=no");
            }
            else
            {
                btn_rowadd.Visible = true;
                btn_rowdelete.Visible = true;
                btn_1.Visible = true;
                btn_save.Visible = true;
                dw_1.Modify("DataWindow.Readonly=yes");
            }         


            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            dw_1.Retrieve("hy");

            this.RegisterClientScriptInclude("W_Hddz_Xkzgl_List", "/Hddz/W_Hddz_Xkzgl_List.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

            
        }
    }
}
