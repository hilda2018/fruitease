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
    public partial class W_HddzList_Kyycgz
    {
        public W_HddzList_Kyycgz()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            ReportService report_fxsr = (ReportService)this.dw_fxsr.Services.Add(ServiceName.Report);
            report_fxsr.RequestorDrawTitle = false;
            ReportService report_fxsc = (ReportService)this.dw_fxsc.Services.Add(ServiceName.Report);
            report_fxsc.RequestorDrawTitle = false;
            ReportService report_thsc = (ReportService)this.dw_thsc.Services.Add(ServiceName.Report);
            report_thsc.RequestorDrawTitle = false;
            ReportService report_wxqk = (ReportService)this.dw_wxqk.Services.Add(ServiceName.Report);
            report_wxqk.RequestorDrawTitle = false;
            ReportService report_bqqk = (ReportService)this.dw_bqqk.Services.Add(ServiceName.Report);
            report_bqqk.RequestorDrawTitle = false;
            ReportService report_wdqk = (ReportService)this.dw_wdqk.Services.Add(ServiceName.Report);
            report_wdqk.RequestorDrawTitle = false;
            ReportService report_gqdjyd = (ReportService)this.dw_gqdjyd.Services.Add(ServiceName.Report);
            report_gqdjyd.RequestorDrawTitle = false;
            ReportService report_fyqk = (ReportService)this.dw_fyqk.Services.Add(ServiceName.Report);
            report_fyqk.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var Tybm = AppService.GetTybm();
            var Sfqytybm = AppService.GetSfqytybm();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("Tybm", Tybm);
            this.SetParm("Sfqytybm", Sfqytybm);

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

          
            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000157";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            DateTime date = System.DateTime.Now.AddDays(-30);
            
            this.dp_begin.Value = date;

            // 数据检索
            this.dw_fxsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证");
            this.dw_fxsc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证");
            this.dw_thsc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证");
            this.dw_wxqk.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证");
            this.dw_bqqk.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证", ddlb_jydzt_bqqk.Text.ToString(), ddlb_jyd_bqqk.Text.ToString());
            this.dw_wdqk.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证", ddlb_jydzt_wdqk.Text.ToString(), ddlb_jyd_wdqk.Text.ToString(), ddlb_wd.Text.ToString());
            this.dw_gqdjyd.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证", ddlb_jydzt_gqjyd.Text.ToString(), ddlb_jyd_gqjyd.Text.ToString());
            this.dw_fyqk.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_list_qtwt.Retrieve("单证", DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));

            this.dw_kgsr.Retrieve("单证", DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_cgqsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_djydsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_tgjydsr.Retrieve("单证", DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_qdsr.Retrieve("单证", DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_kgsjsr.Retrieve("单证", DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            this.dw_kghsr.Retrieve("单证", DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));

            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_HddzList_Kyycgz", "/Hddz/W_HddzList_Kyycgz.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Select", "/Xt_Popwin/W_Hddz_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy", "/Hddz/W_Hddz_Ycyy.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
