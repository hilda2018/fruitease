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



namespace QsWebSoft.Yw_Zjgl
{
    public partial class W_Hdfyyshdfygj_Gbh_Ywbh_Edit
    {
        public W_Hdfyyshdfygj_Gbh_Ywbh_Edit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

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
            //dwc_fybm.Retrieve("0109");

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
           
            if (this.Request["yshdfygjbh"] == "wgj")            
            {
                var gbh_ywbh = this.Request["gbh_ywbh"].ToString();
                var ywbh = this.Request["ywbh"].ToString();
                var cxh_hddz = this.Request["cxh_hddz"];
                var yshdfygjbh = this.Request["yshdfygjbh"].ToString();
                this.SetParm("yshdfygjbh", yshdfygjbh);
                this.SetParm("ywbh", ywbh);
                this.SetParm("cxh_hddz", cxh_hddz);
                this.SetParm("gbh_ywbh", gbh_ywbh); 
            }
            else
            {
                var yshdfygjbh = this.Request["yshdfygjbh"].ToString();
                dw_master.Retrieve(yshdfygjbh);
                dw_jzxxx.Retrieve(yshdfygjbh);
            }

            dw_log.Retrieve(userid,"fygj");

            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js"); 
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}