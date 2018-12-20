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


namespace QsWebSoft.Fybz
{
    public partial class W_Fybz_GqscbzList
    {
        public W_Fybz_GqscbzList()
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

            //DataWindowChild dwc = dw_list.GetChild("ywy");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //dwc = dw_list.GetChild("zdr");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //dwc = dw_list.GetChild("dz_zdy");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //DataWindowChild dwc_fybm = dw_list.GetChild("fybm");
            //dwc_fybm.SetTransaction(this.AdoTransaction);
            //dwc_fybm.Retrieve("0102");

            //this.ds_1.DataWindowObject = "d_sys_modules_all";
            //this.ds_1.Retrieve();

            //var node = "009101";
            //var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            //var role_no = this.ds_1.GetItemString(li_row, "role_no");
            //DateTime date = System.DateTime.Now.AddDays(-180);
            //this.dp_begin.Value = date;

           
            //ds_role.Retrieve(userid, role_no);
            //if (ds_role.RowCount > 0 )
            //{
            //    dw_list.Modify("DataWindow.Readonly=no");
            //    this.SetParm("Readonly", "no");
            //}
            //else
            //{
            //    dw_list.Modify("DataWindow.Readonly=yes");
            //    this.SetParm("Readonly", "yes");

            //}

          

            // 数据检索
            this.dw_list.Retrieve();
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Fybz_MtzlfyList", "/Fybz/W_Fybz_MtzlfyList.win.js");
            this.RegisterClientScriptInclude("dw_fybz_qd_Select", "/Xt_Popwin/dw_fybz_qd_Select.win.js");
            this.RegisterClientScriptInclude("dw_fybz_zd_Select", "/Xt_Popwin/dw_fybz_zd_Select.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
