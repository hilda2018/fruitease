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


namespace QsWebSoft.Hddz
{
    public partial class W_HddzList_Khhygz
    {
        public W_HddzList_Khhygz()
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
            var Tybm = AppService.GetTybm();
            var Sfqytybm = AppService.GetSfqytybm();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf); 
            this.SetParm("Tybm", Tybm);
            this.SetParm("Sfqytybm", Sfqytybm);

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

            //dwc = dw_list.GetChild("yw_Kptzs_dzjh_zdy");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "000146";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            DateTime date = System.DateTime.Now.AddDays(-30);
            this.dp_begin.Value = date;
            
            //接单人
            this.ds_2.DataWindowObject = "d_sys_userroles_wldw";
            this.ds_2.Retrieve(userid);
            this.ddlb_jdrjc.Items.Add("全部");
            for (int row = 1; row <= ds_2.RowCount;row ++ ) {
                this.ddlb_jdrjc.Items.Add(ds_2.GetItemString(row,"dwjc"));
            }

            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "全部", "全部", "全部", "全部", Tybm, Sfqytybm, "单证", "N", "全部", userid);
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_HddzList_Khhygz", "/Hddz/W_HddzList_Khhygz.win.js");
            this.RegisterClientScriptInclude("W_Hy_ThwljhEdit", "/Hddz/W_Hy_ThwljhEdit.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy", "/Hddz/W_Hddz_Ycyy.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
