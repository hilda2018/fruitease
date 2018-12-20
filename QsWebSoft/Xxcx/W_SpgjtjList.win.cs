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
    public partial class W_SpgjtjList
    {
        public W_SpgjtjList()
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

            var node = "000715";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            DateTime date = DateTime.Parse(System.DateTime.Now.ToString("yyyy/01/01"));
            this.dp_begin.Value = date;
             
            var role_no = this.ds_1.GetItemString(li_row, "role_no");

            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {
                dw_list.Modify("DataWindow.Readonly=no");
                this.SetParm("Readonly", "no");
            }
            else
            {
                dw_list.Modify("DataWindow.Readonly=yes");
                this.SetParm("Readonly", "yes");

            };

            this.ds_2.DataWindowObject = "dd_cport";
            this.ds_2.Retrieve();
            ddlb_mdg.Items.Add("全部");
            for (int row = 1; row <= this.ds_2.RowCount; row++)
            {
                var cname = this.ds_2.GetItemString(row, "cname");
                ddlb_mdg.Items.Add(cname);
            }
            //接单人
            this.ds_3.DataWindowObject = "d_sys_userroles_wldw";
            this.ds_3.Retrieve(userid);
            this.ddlb_jdrjc.Items.Add("全部");
            for (int row = 1; row <= this.ds_3.RowCount; row++)
            {
                var ctr_area2 = this.ds_3.GetItemString(row, "dwjc");
                this.ddlb_jdrjc.Items.Add(ctr_area2);
            }

            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), 3, 3, "全部", "全部");
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_SpgjtjList", "/Xxcx/W_SpgjtjList.win.js");
            this.RegisterClientScriptInclude("W_SpgjtjList_Mx", "/Xxcx/W_SpgjtjList_Mx.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
