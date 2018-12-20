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
    public partial class W_ZbfxtjList
    {
        public W_ZbfxtjList()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
            //ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;

            DateTime date = System.DateTime.Now.AddMonths(-1);
            this.dp_begin_day.Value = date;

            this.dp_begin_week.Value = date;

            //// 数据检索
            this.dw_list_day.Retrieve(DateTime.Parse(this.dp_begin_day.Value.ToString()), DateTime.Parse(this.dp_end_day.Value.ToString()), this.ddlb_sjd_day.Text.ToString());
            this.dw_list_week.Retrieve(DateTime.Parse(this.dp_begin_week.Value.ToString()), DateTime.Parse(this.dp_end_week.Value.ToString()), this.ddlb_sjd_week.Text.ToString());
            this.dw_list_mon.Retrieve(this.dp_nf_mon.Text.ToString(), this.dp_sjd_mon.Text.ToString());
            this.dw_list_year.Retrieve(this.ddlb_nf_beginyear.Text.ToString(), this.ddlb_nf_endyear.Text.ToString(), this.ddlb_sjd_year.Text.ToString());
            this.dw_1.Retrieve(DateTime.Parse(this.dp_1.Value.ToString()));

            
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_ZbfxtjList", "/Xxcx/W_ZbfxtjList.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_Kyyctj_Mon_Mx", "/Xxcx/W_Kyyctj_Mon_Mx.win.js");
            this.RegisterClientScriptInclude("W_Kyyctj_Day_Mx", "/Xxcx/W_Kyyctj_Day_Mx.win.js");
            this.RegisterClientScriptInclude("W_Kyyctj_Week_Mx", "/Xxcx/W_Kyyctj_Week_Mx.win.js");
            this.RegisterClientScriptInclude("W_Kyyctj_Year_Mx", "/Xxcx/W_Kyyctj_Year_Mx.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            
        }
    }
}
