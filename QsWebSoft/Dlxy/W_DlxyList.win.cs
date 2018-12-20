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


namespace QsWebSoft.Dlxy
{
    public partial class W_DlxyList
    {
        public W_DlxyList()
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

            DataWindowChild dwc = dw_list.GetChild("ywy");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_list.GetChild("zdr");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            

            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000129";
            var li_row = this.ds_1.FindRow("id ='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
           
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;

            ////失效按钮的控制
            //ds_dlxysxgyl.Retrieve(userid);
            //if (ds_dlxysxgyl.RowCount > 0 ) {
            //    btn_sx.Visible = true;
            //    }
            //else {
            //    btn_sx.Visible = false;
            //}

            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {

                btn_new.Visible = true;
                btn_duplicate.Visible = true;
                btn_delete.Visible = true;
                btn_sx.Visible = true;
                this.SetParm("operation", "open");
            }
            else
            {
                btn_new.Visible = false;
                btn_duplicate.Visible = false;
                btn_delete.Visible = false;
                btn_sx.Visible = false;
                this.SetParm("operation", "show");
            }
            //接单人
            this.ds_2.DataWindowObject = "d_sys_userroles_wldw";
            this.ds_2.Retrieve(userid);
            this.ddlb_jdrjc.Items.Add("全部");
            for (int i = 1; i <= this.ds_2.RowCount;i++ ) {
                this.ddlb_jdrjc.Items.Add(this.ds_2.GetItemString(i,"dwjc"));
            }
            

            // 数据检索
            //this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf);
       
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_DlxyList", "/Dlxy/W_DlxyList.win.js");
            this.RegisterClientScriptInclude("W_DlxyEdit", "/Dlxy/W_DlxyEdit.win.js");
            this.RegisterClientScriptInclude("W_Fj_Edit", "/Hddz/W_Fj_Edit.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
