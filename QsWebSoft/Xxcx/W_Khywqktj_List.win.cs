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


namespace QsWebSoft.Xxcx
{
    public partial class W_Khywqktj_List
    {
        public W_Khywqktj_List()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            //ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
             
            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000723";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            DateTime date = DateTime.Parse(System.DateTime.Now.ToString("yyyy/01/01"));
            this.dp_begin.Value = date;
             
            var role_no = this.ds_1.GetItemString(li_row, "role_no");

            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {
                dw_list.Modify("DataWindow.Readonly=no");
                this.SetParm("Readonly", "no");
            }
            else
            {
                dw_list.Modify("DataWindow.Readonly=yes");
                this.SetParm("Readonly", "yes");

            };


            //// 数据检索
            dw_cxtj.InsertRow(0);
            var sjkgsj_ks_jsl = dw_cxtj.GetItemDate(1, "sjkgsj_ks_jsl");
            dw_cxtj.SetItemDate(1, "sjkgsj_ks", sjkgsj_ks_jsl);

            DataWindowChild dwc_mdka = dw_cxtj.GetChild("mdka");
            dwc_mdka.SetTransaction(this.AdoTransaction);
            dwc_mdka.Retrieve("%");


            //// 数据检索


            //this.dw_list.Retrieve("2018.01.01", "2018.12.12", "40010002", "海运", "");
            
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Khywqktj_List", "/Xxcx/W_Khywqktj_List.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
          
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
