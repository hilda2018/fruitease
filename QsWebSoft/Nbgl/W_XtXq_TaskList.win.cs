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
    public partial class W_XtXq_TaskList
    {
        public W_XtXq_TaskList()
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
//---------------------------------------------------------------------------------------------------------------
            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000806";
            var ckqb = "N";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;

            
            this.SetParm("operation", "open");
            dw_list.Modify("DataWindow.Readonly=no");


            btn_tj.Visible = false;
            btn_zf.Visible = false;
            btn_tjryqr.Visible = false;
            btn_kfz.Visible = false;
            btn_kfwc.Visible = false;
            btn_bh.Visible = false;
            btn_lrryqr.Visible = false;
        
            ds_role.Retrieve(userid, "000807");
            if (ds_role.RowCount > 0)
            {
                btn_lrryqr.Visible = true;        
            }

            ds_role.Retrieve(userid, "00080702");
            if (ds_role.RowCount > 0)
            {                 
                 btn_tj.Visible = true;
                 btn_zf.Visible = true;
                 btn_tjryqr.Visible = true;
                 ckqb = "Y";
            }

            ds_role.Retrieve(userid, "00080701");
            if (ds_role.RowCount > 0)
            {
                btn_kfz.Visible = true;
                btn_kfwc.Visible = true;
                btn_bh.Visible = true;
                ckqb = "Y";
            }

            this.SetParm("ckqb", ckqb);

            
            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), userid,ckqb);
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Fj_Edit", "/Hddz/W_Fj_Edit.win.js");
            this.RegisterClientScriptInclude("W_XtXq_TaskList", "/Nbgl/W_XtXq_TaskList.win.js");
            this.RegisterClientScriptInclude("W_XtXq_TaskEdit", "/Nbgl/W_XtXq_TaskEdit.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
