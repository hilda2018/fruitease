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



namespace QsWebSoft.Szyw
{
    public partial class W_SzywYfglEdit 
    {
        public W_SzywYfglEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            //DataWindowChild dwc = dw_jzxxx.GetChild("fymc");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("0123");

            DataWindowChild dwc_fybm = dw_jzxxx.GetChild("fybm");
            dwc_fybm.SetTransaction(this.AdoTransaction);
            dwc_fybm.Retrieve("0123");

            DataWindowChild dwc_wbbb = dw_master.GetChild("wbbb");
            dwc_wbbb.SetTransaction(this.AdoTransaction);
            dwc_wbbb.Retrieve("%");

            //DataWindowChild dwc = dw_master.GetChild("cllx");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            //DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            //dwc_xx.SetTransaction(this.AdoTransaction);
            //dwc_xx.Retrieve("%");

            //DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            //dwc_xl.SetTransaction(this.AdoTransaction);
            //dwc_xl.Retrieve("%");

            //DataWindowChild dwc_fybm = dw_jzxxx.GetChild("fybm");
            //dwc_fybm.SetTransaction(this.AdoTransaction);
            //dwc_fybm.Retrieve("0123");

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

            if (this.Request["yfkdbh"] != null)
            {
                var yfkdbh = this.Request["yfkdbh"].ToString();
                this.SetParm("yfkdbh", yfkdbh);
                dw_master.Retrieve(yfkdbh);
                dw_jzxxx.Retrieve(yfkdbh);
              
               
            }


            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_SzywYfglEdit_pop", "/Szyw/W_SzywYfglEdit_pop.win.js");
            this.RegisterClientScriptInclude("W_SzywYfglEdit", "/Szyw/W_SzywYfglEdit.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_cxf_Select", "/Xt_Popwin/W_Hddz_cxf_Select.win.js");
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}