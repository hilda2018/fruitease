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
    public partial class W_Wlgz_DzwltjList
    {
        public W_Wlgz_DzwltjList()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            //ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;
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

            var node = "000723";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            DateTime date = System.DateTime.Now.AddDays(-30);
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

            this.ds_jdr.DataWindowObject = "dd_jdr_list";
            this.ds_jdr.Retrieve();
            ddlb_jdr.Items.Add("全部");
            for (int row = 1; row <= this.ds_jdr.RowCount; row++)
            {
                var jdrjc = this.ds_jdr.GetItemString(row, "jdrjc");
                if (jdrjc != "安徽欧恒" && jdrjc != "深圳欧恒进出口有限公司" && jdrjc != "深圳易赉")
                {
                    ddlb_jdr.Items.Add(jdrjc);
                }               
            }

            this.ds_pdy.DataWindowObject = "dw_pdy_list";
            this.ds_pdy.Retrieve();
            ddlb_pdy.Items.Add("全部");
            for (int row = 1; row <= this.ds_pdy.RowCount; row++)
            {
                var pdy = this.ds_pdy.GetItemString(row, "pdy");
                ddlb_pdy.Items.Add(pdy);
            } 
           

            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "全部", "全部");
            
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Wlgz_DzwltjList", "/Xxcx/W_Wlgz_DzwltjList.win.js");

            this.RegisterClientScriptInclude("W_Wlgz_DzwltjMx", "/Xxcx/W_Wlgz_DzwltjMx.win.js");
            this.RegisterClientScriptInclude("W_Wlgz_Dzwltj_Rw", "/Xxcx/W_Wlgz_Dzwltj_Rw.win.js");
            this.RegisterClientScriptInclude("W_Wlgz_Dzwltj_Ycyy", "/Xxcx/W_Wlgz_Dzwltj_Ycyy.win.js");

            
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
