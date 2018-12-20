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
    public partial class W_HddzList_Kylryc
    {
        public W_HddzList_Kylryc()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            ReportService report_kgsr = (ReportService)this.dw_kgsr.Services.Add(ServiceName.Report);
            report_kgsr.RequestorDrawTitle = false;
            ReportService report_cgqsr = (ReportService)this.dw_cgqsr.Services.Add(ServiceName.Report);
            report_cgqsr.RequestorDrawTitle = false;
            ReportService report_djydsr = (ReportService)this.dw_djydsr.Services.Add(ServiceName.Report);
            report_djydsr.RequestorDrawTitle = false;
            ReportService report_tgjydsr = (ReportService)this.dw_tgjydsr.Services.Add(ServiceName.Report);
            report_tgjydsr.RequestorDrawTitle = false;
            ReportService report_qdsr = (ReportService)this.dw_qdsr.Services.Add(ServiceName.Report);
            report_qdsr.RequestorDrawTitle = false;
            ReportService report_kgsjsr = (ReportService)this.dw_kgsjsr.Services.Add(ServiceName.Report);
            report_kgsjsr.RequestorDrawTitle = false;
            ReportService report_kghsr = (ReportService)this.dw_kghsr.Services.Add(ServiceName.Report);
            report_kghsr.RequestorDrawTitle = false;
            ReportService report_fxsr = (ReportService)this.dw_fxsr.Services.Add(ServiceName.Report);
            report_fxsr.RequestorDrawTitle = false;
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
            //接单人
            this.ds_2.DataWindowObject = "dd_jdr_list";
            this.ds_2.Retrieve();
            ddlb_jdr.Items.Add("全部");
            for (int row = 1; row <= this.ds_2.RowCount; row++)
            {
                var ctr_area2 = this.ds_2.GetItemString(row, "jdrjc");
                ddlb_jdr.Items.Add(ctr_area2);
            }

            // 数据检索

            this.dw_kgsr.Retrieve( DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()),"全部");
            this.dw_cgqsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_djydsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_tgjydsr.Retrieve( DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_qdsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_kgsjsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_kghsr.Retrieve( DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_fxsr.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");

            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_HddzList_Kyycgz", "/Hddz/W_HddzList_Kyycgz.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Select", "/Xt_Popwin/W_Hddz_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy", "/Hddz/W_Hddz_Ycyy.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ywkh_BeiZhu", "/Hddz/W_Hddz_Ywkh_BeiZhu.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
