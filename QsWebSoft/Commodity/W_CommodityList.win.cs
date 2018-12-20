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


namespace QsWebSoft.Commodity
{
    public partial class W_CommodityList
    {
        public W_CommodityList()
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
            
          

            // 数据检索
            var userid = AppService.GetUserID();
            var li_row = this.ds_1.FindRow("id = '009003'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);


            DataWindowChild dwc_spdl = dw_list.GetChild("spdl");
            dwc_spdl.SetTransaction(this.AdoTransaction);
            dwc_spdl.Retrieve("%");

            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {
                btn_new.Visible = true;
                btn_duplicate.Visible = true;
                btn_delete.Visible = true;
                this.SetParm("operation", "open");
            }
            else
            {
                btn_new.Visible = false;
                btn_duplicate.Visible = false;
                btn_delete.Visible = false;
                this.SetParm("operation", "show");
            }


            // 数据检索
            this.dw_list.Retrieve();
            //this.dw_list.Retrieve("zyxx", userid);
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_CommodityList", "/Commodity/W_CommodityList.win.js");
            this.RegisterClientScriptInclude("W_CommodityEdit", "/Commodity/W_CommodityEdit.win.js");
            this.RegisterClientScriptInclude("W_CommodityAdd", "/Commodity/W_CommodityAdd.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
