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
    public partial class W_TszxList
    {
        public W_TszxList()
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


            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000803";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;
             
            ds_role.Retrieve(userid, role_no);
            var qbxs = "N";
            if (ds_role.RowCount > 0){
                qbxs = "Y";
            }
            this.SetParm("qbxs", qbxs);
           
            btn_new.Visible = true;
            btn_duplicate.Visible = true;
            btn_delete.Visible = true;
            this.SetParm("operation", "open");
            dw_list.Modify("DataWindow.Readonly=no");
          

            
            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), userid, qbxs);
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_TszxList", "/Nbgl/W_TszxList.win.js");
            this.RegisterClientScriptInclude("W_TszxEdit", "/Nbgl/W_TszxEdit.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
