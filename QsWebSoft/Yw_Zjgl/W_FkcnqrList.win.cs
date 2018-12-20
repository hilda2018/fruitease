﻿using System;
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
    public partial class W_FkcnqrList
    {
        public W_FkcnqrList()
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
            var node = "000580";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;           

            
            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            DataWindowChild dwc = dw_list.GetChild("zbr");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            this.ds_2.DataWindowObject = "dw_ywy_wldw_select_qx";
            this.ds_2.Retrieve(ShareMode, userid, Dlwtf, "申请人","");
            ddlb_sqrgs.Items.Add("全部");
            for (int row = 1; row <= this.ds_2.RowCount; row++)
            {
                var ctr_area2 = this.ds_2.GetItemString(row, "khjc");
                ddlb_sqrgs.Items.Add(ctr_area2);
            }

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

            }

            //// 数据检索

            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "未付款","全部",userid);
            
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_FkcnqrList", "/Yw_Zjgl/W_FkcnqrList.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            
        }
    }
}
