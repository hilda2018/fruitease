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



namespace QsWebSoft.Hddz
{
    public partial class W_YtjkEdit
    {
        public W_YtjkEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            DataWindowChild dwc = dw_master.GetChild("mdg");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("%");

            DataWindowChild dwc_master_clfs = dw_master.GetChild("clfs");
            dwc_master_clfs.SetTransaction(this.AdoTransaction);
            dwc_master_clfs.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            dwc_xx.SetTransaction(this.AdoTransaction);
            dwc_xx.Retrieve("%");

            DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            dwc_xl.SetTransaction(this.AdoTransaction);
            dwc_xl.Retrieve("%");

            DataWindowChild dwc_clfs = dw_jzxxx.GetChild("clfs");
            dwc_clfs.SetTransaction(this.AdoTransaction);
            dwc_clfs.Retrieve("%");

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

            if (this.Request["ywbh"] != null)
            {
                var ywbh = this.Request["ywbh"].ToString();
                this.SetParm("ywbh", ywbh);
                dw_master.Retrieve(ywbh);
                dw_jzxxx.Retrieve(ywbh);
                dw_spxx.Retrieve(ywbh);
                dw_zzxx.Retrieve(ywbh);
            }


            //注册相关的js文件

            this.RegisterClientScriptInclude("W_Commodity_Select", "/Commodity/W_Commodity_Select.win.js");
            this.RegisterClientScriptInclude("W_Eport_Select", "/Xt_Popwin/W_Eport_Select.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Jnhyd_Select", "/Xt_Popwin/W_Jnhyd_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Dlxy_Select", "/Xt_Popwin/W_Hddz_Dlxy_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Mxd_Select", "/Xt_Popwin/W_Mxd_Select.win.js");
            this.RegisterClientScriptInclude("W_CommodityAdd", "/Commodity/W_CommodityAdd.win.js");
            //注册相关的js文件
            this.RegisterClientScriptInclude("W_Spdl_Select", "/Xt_Popwin/W_Spdl_Select.win.js");
            this.RegisterClientScriptInclude("W_Hssh_Select", "/Xt_Popwin/W_Hssh_Select.win.js");
            this.RegisterClientScriptInclude("W_Jldw_Select", "/Xt_Popwin/W_Jldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Bzdw_Select", "/Xt_Popwin/W_Bzdw_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_RqTime_Select", "/Xt_Popwin/W_RqTime_Select.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}