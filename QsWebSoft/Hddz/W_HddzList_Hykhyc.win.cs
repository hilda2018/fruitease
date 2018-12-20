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
    public partial class W_HddzList_Hykhyc
    {
        public W_HddzList_Hykhyc()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            
            ReportService report_fxsc = (ReportService)this.dw_fxsc.Services.Add(ServiceName.Report);
            report_fxsc.RequestorDrawTitle = false;
            ReportService report_thyc = (ReportService)this.dw_thyc.Services.Add(ServiceName.Report);
            report_thyc.RequestorDrawTitle = false;
            ReportService report_bgyc = (ReportService)this.dw_thsc.Services.Add(ServiceName.Report);
            report_bgyc.RequestorDrawTitle = false;
            ReportService report_bjyc = (ReportService)this.dw_wxqk.Services.Add(ServiceName.Report);
            report_bjyc.RequestorDrawTitle = false;
            ReportService report_tgyc = (ReportService)this.dw_tgyc.Services.Add(ServiceName.Report);
            report_tgyc.RequestorDrawTitle = false;
            ReportService report_fxyc = (ReportService)this.dw_fxyc.Services.Add(ServiceName.Report);
            report_fxyc.RequestorDrawTitle = false;
            ReportService report_bjtgyc = (ReportService)this.dw_bjtgyc.Services.Add(ServiceName.Report);
            report_bjtgyc.RequestorDrawTitle = false;
            ReportService report_gjyc = (ReportService)this.dw_gjyc.Services.Add(ServiceName.Report);
            report_gjyc.RequestorDrawTitle = false;
            ReportService report_hdyc = (ReportService)this.dw_hdyc.Services.Add(ServiceName.Report);
            report_hdyc.RequestorDrawTitle = false;
            ReportService report_bjhthcq = (ReportService)this.dw_bjhthcq.Services.Add(ServiceName.Report);
            report_bjhthcq.RequestorDrawTitle = false;
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

            var node = "000158";
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
            this.dw_fxsc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_thyc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_thsc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_wxqk.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_tgyc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_fxyc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_bjtgyc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_gjyc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_hdyc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_bjhthcq.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            this.dw_mtsjthyc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部");
            //this.dw_wdqk.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证");
            //this.dw_gqdjyd.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "单证");
          
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_HddzList_Hyycgz", "/Hddz/W_HddzList_Hyycgz.win.js");
            this.RegisterClientScriptInclude("W_Wldw_htjhthsj_Select", "/Xt_Popwin/W_Wldw_htjhthsj_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy", "/Hddz/W_Hddz_Ycyy.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
