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


namespace QsWebSoft.Szyw
{
    public partial class W_Szyw_Zdcx_List
    {
        public W_Szyw_Zdcx_List()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
           
          
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
       

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

            //DataWindowChild dwc = dw_list.GetChild("zbr");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //dwc = dw_list.GetChild("zdr");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //dwc = dw_list.GetChild("dz_zdy");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //dwc = dw_list.GetChild("yw_Kptzs_dzjh_zdy");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "002024";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-90);
            this.dp_begin.Value = date;

            DateTime date1 = System.DateTime.Now.Date;


            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {

                //btn_new.Visible = true;
                 
                this.SetParm("operation", "open");
                dw_list.Modify("DataWindow.Readonly=no");
            }
            else
            {
                //btn_new.Visible = false;
                
                this.SetParm("operation", "show");
                dw_list.Modify("DataWindow.Readonly=yes");
            }
            var dd = DateTime.Parse(this.dp_end.Value.ToString());
            
            // 数据检索
           // this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), System.DateTime.Now.Date,"全部");
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_SzywFkglEdit_pop", "/Szyw/W_SzywFkglEdit_pop.win.js");
            this.RegisterClientScriptInclude("W_Szyw_yfzsf", "/Szyw/W_Szyw_yfzsf.win.js");
            this.RegisterClientScriptInclude("W_SzywFkglEdit", "/Szyw/W_SzywFkglEdit.win.js");
            this.RegisterClientScriptInclude("W_Szyw_Zdcx_List", "/Szyw/W_Szyw_Zdcx_List.win.js");
            this.RegisterClientScriptInclude("W_SzywFkglEdit_pop", "/Szyw/W_SzywFkglEdit_pop.win.js");
            this.RegisterClientScriptInclude("W_WlgzsjfkEdit", "/Szyw/W_WlgzsjfkEdit.win.js");
            this.RegisterClientScriptInclude("W_WlgzsjfkEdit", "/Szyw/W_WlgzsjfkEdit.win.js");
            this.RegisterClientScriptInclude("W_Szyw_Zdcx_List", "/Yw_Zjgl/W_Szyw_Zdcx_List.win.js");
            this.RegisterClientScriptInclude("W_WlgzsjfkEdit", "/Yw_Zjgl/W_WlgzsjfkEdit.win.js");
            this.RegisterClientScriptInclude("W_Szyw_Zdcx_Edit", "/Szyw/W_Szyw_Zdcx_Edit.win.js");

            this.RegisterClientScriptInclude("W_SzywFkglEdit_pop", "/Szyw/W_SzywFkglEdit_pop.win.js");
            this.RegisterClientScriptInclude("W_SzywFkglEdit", "/Szyw/W_SzywFkglEdit.win.js");
            this.RegisterClientScriptInclude("W_Szyw_Zdcx_List", "/Szyw/W_Szyw_Zdcx_List.win.js");

            this.RegisterClientScriptInclude("W_Szyw_Zdcx_List", "/Szyw/W_Szyw_Zdcx_List.win.js");
            this.RegisterClientScriptInclude("W_SzywFkglEdit_pop", "/Szyw/W_SzywFkglEdit_pop.win.js");
            this.RegisterClientScriptInclude("W_WlgzsjfkEdit", "/Szyw/W_WlgzsjfkEdit.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
