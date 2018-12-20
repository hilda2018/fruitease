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


namespace QsWebSoft.Dz_bgdj
{
    public partial class W_BgdjList
    {
        public W_BgdjList()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            report = (ReportService)this.dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

            DataWindowChild dwc = dw_list.GetChild("ywy");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_list.GetChild("bm");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_list.GetChild("dz_zdy");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();


            var node = "000104";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;

            // 数据检索
            //this.dw_list.Retrieve(righttype, userid, DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_BgdjList", "/Dz_bgdj/W_BgdjList.win.js");
            this.RegisterClientScriptInclude("W_BgdjEdit", "/Dz_bgdj/W_BgdjEdit.win.js");
            this.RegisterClientScriptInclude("W_Bgdj_Slwts", "/Xt_Popwin/W_Bgdj_Slwts.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            this.RegisterClientScriptInclude("W_Dzka_Cx", "/Xt_Popwin/W_Dzka_Cx.win.js");
            this.RegisterClientScriptInclude("W_Cm_Dj", "/Xt_Popwin/W_Cm_Dj.win.js");
            this.RegisterClientScriptInclude("W_Tdh_Dj", "/Xt_Popwin/W_Tdh_Dj.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
