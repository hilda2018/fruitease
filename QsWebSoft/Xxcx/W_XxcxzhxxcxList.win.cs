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
    public partial class W_XxcxzhxxcxList
    {
        public W_XxcxzhxxcxList()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            ReportService report = (ReportService)this.dw_td.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            ReportService report_hycqf = (ReportService)this.dw_hycqf.Services.Add(ServiceName.Report);
            report_hycqf.RequestorDrawTitle = false;

            ReportService report_sj = (ReportService)this.dw_sj.Services.Add(ServiceName.Report);
            report_sj.RequestorDrawTitle = false;

            ReportService report_hgbzj = (ReportService)this.dw_hgbzj.Services.Add(ServiceName.Report);
            report_hgbzj.RequestorDrawTitle = false;

            ReportService report_jzxjbxx = (ReportService)this.dw_jzxjbxx.Services.Add(ServiceName.Report);
            report_jzxjbxx.RequestorDrawTitle = false;

            ReportService report_jzxcwxx = (ReportService)this.dw_jzxcwxx.Services.Add(ServiceName.Report);
            report_jzxcwxx.RequestorDrawTitle = false;

            ReportService report_spxx = (ReportService)this.dw_spxx.Services.Add(ServiceName.Report);
            report_spxx.RequestorDrawTitle = false;

            ReportService report_gjyf = (ReportService)this.dw_gjyf.Services.Add(ServiceName.Report);
            report_gjyf.RequestorDrawTitle = false;

            ReportService report_httdjc = (ReportService)this.dw_httdjc.Services.Add(ServiceName.Report);
            report_httdjc.RequestorDrawTitle = false;

            ReportService report_khkygz = (ReportService)this.dw_khkygz.Services.Add(ServiceName.Report);
            report_khkygz.RequestorDrawTitle = false;

            ReportService report_sd = (ReportService)this.dw_sd.Services.Add(ServiceName.Report);
            report_sd.RequestorDrawTitle = false;

            ReportService report_khhygz = (ReportService)this.dw_sd.Services.Add(ServiceName.Report);
            report_khhygz.RequestorDrawTitle = false;

            ReportService report_kybzj = (ReportService)this.dw_sd.Services.Add(ServiceName.Report);
            report_kybzj.RequestorDrawTitle = false;



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

            //DataWindowChild dwc = dw_list.GetChild("zbr");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

          

            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000701";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-90);
            this.dp_begin.Value = date;
           
            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0 )
            {

                this.SetParm("operation", "open");
                
            }
            else
            {
                this.SetParm("operation", "show"); 
            }         
            
            // 数据检索
 
            //this.dw_td.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部",Tybm,Sfqytybm);
            //this.dw_hycqf.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部","全部");
            //this.dw_sj.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
            //this.dw_hgbzj.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "保证金未处理");
            //this.dw_jzxjbxx.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部"); 
            //this.dw_jzxcwxx.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
            //this.dw_spxx.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
            //this.dw_gjyf.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
            //this.dw_httdjc.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
            //this.dw_khkygz.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj");
            //this.dw_sd.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
            //this.dw_khhygz.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
            //this.dw_kybzj.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "dzsj", "全部");
          
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_XxcxzhxxcxList", "/Xxcx/W_XxcxzhxxcxList.win.js"); 
            this.RegisterClientScriptInclude("W_Fj_Edit", "/Hddz/W_Fj_Edit.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_HddzEdit", "/Hddz/W_HddzEdit.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Beizhu", "/Hddz/W_Hddz_Beizhu.win.js"); 
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_HdfykhfygjEdit", "/Yw_Zjgl/W_HdfykhfygjEdit.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
