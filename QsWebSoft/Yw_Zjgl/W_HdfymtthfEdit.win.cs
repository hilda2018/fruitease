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
    public partial class W_HdfymtthfEdit
    {
        public W_HdfymtthfEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;           

            DataWindowChild dwc_fybm = dw_jzxxx.GetChild("fybm");
            dwc_fybm.SetTransaction(this.AdoTransaction);
            dwc_fybm.Retrieve("0102");

            var operation = this.Request["operation"].ToString();
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var userip = AppService.GetIp();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("userip", userip);

            if (operation == "sqsp")
            {
                btn_sp.Visible = true; 
            }
            if (operation == "cxsp")
            {
                btn_cxsp.Visible = true;
            }

            if (this.Request["sqdbh"] != null)
            {
                var cdphbm = this.Request["sqdbh"].ToString();
                this.SetParm("cdphbm", cdphbm);
                dw_master.Retrieve(cdphbm);
                dw_jzxxx.Retrieve(cdphbm);
              
               
            }


            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Mtthf_Select", "/Xt_Popwin/W_Hddz_Mtthf_Select.win.js");
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}