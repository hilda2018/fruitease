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


namespace QsWebSoft.Yw_Zjgl
{
    public partial class W_SdglList
    {
        public W_SdglList()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
            ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

            this.ds_1.DataWindowObject="d_sys_modules_all";
            this.ds_1.Retrieve();
                      
            var userid = AppService.GetUserID();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var node = "000209";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;
            
            this.SetParm("userid", userid);
           this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            DataWindowChild dwc = dw_list.GetChild("ywy");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_list.GetChild("bm");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");
            //// 数据检索
            // this.dw_list.Retrieve(ShareMode, userid,Dlwtf, "全部");
            
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_YfkdList", "/Yw_Zjgl/W_YfkdList.win.js");
            this.RegisterClientScriptInclude("W_YfkdEdit", "/Yw_Zjgl/W_YfkdEdit.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            
        }
    }
}
