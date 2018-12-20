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


namespace QsWebSoft.Nbgl
{
    public partial class W_ZskList
    {
        public W_ZskList()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            //ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var bm = AppService.GetBm(); 
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("bm", bm);

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

            //DataWindowChild dwc = dw_list.GetChild("yfbb");
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

            var node = "000803";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;
            var role_no = this.ds_1.GetItemString(li_row, "role_no");

            ds_role.Retrieve(userid, role_no);
            //if (ds_role.RowCount > 0)
            //{
            //    dw_list.Modify("DataWindow.Readonly=no");
            //}
            //else
            //{
            //    dw_list.Modify("DataWindow.Readonly=yes");
              
            //};

            ds_role_zskqx.Retrieve(userid);
            var zskqx = "";
            if (ds_role_zskqx.RowCount > 0) {
                zskqx = ds_role_zskqx.GetItemString(1,"zskqx");
            }
            this.SetParm("zskqx", zskqx);

            ds_zskfl.Retrieve();
            int i = 1;
            for (i = 1; i <= ds_zskfl.RowCount; i++){
                var zskfl = ds_zskfl.GetItemString(i,"zskfl");
                ddlb_zskfl.Items.Add(zskfl);
            };
            ddlb_zskfl.Items.Add("全部");
            // 数据检索
            this.dw_list.Retrieve(userid,DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()),zskqx);
            
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js"); 
            this.RegisterClientScriptInclude("W_ZskList", "/Nbgl/W_ZskList.win.js");
            this.RegisterClientScriptInclude("W_Fj_Edit", "/Hddz/W_Fj_Edit.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
