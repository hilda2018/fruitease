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
    public partial class W_Hdfy_sjdrEdit
    {
        public W_Hdfy_sjdrEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
          
            ReportService report = (ReportService)dw_cmd.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            //DataWindowChild dwc = dw_master.GetChild("cllx");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            //DataWindowChild dwc_xx = dw_cmd.GetChild("xx");
            //dwc_xx.SetTransaction(this.AdoTransaction);
            //dwc_xx.Retrieve("%");

            //DataWindowChild dwc_xl = dw_cmd.GetChild("xl");
            //dwc_xl.SetTransaction(this.AdoTransaction);
            //dwc_xl.Retrieve("%");

            //DataWindowChild dwc_fybm = dw_cmd.GetChild("fybm");
            //dwc_fybm.SetTransaction(this.AdoTransaction);
            //dwc_fybm.Retrieve("0116");

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

            if (this.Request["sjdrbh"] != null)
            {
                var sjdrbh1 = this.Request["sjdrbh1"].ToString();
                this.SetParm("sjdrbh1", sjdrbh1);
                var sjdrbh = this.Request["sjdrbh"].ToString();
                this.SetParm("sjdrbh", sjdrbh);
                dw_master.Retrieve(sjdrbh);
                dw_cmd.Retrieve(sjdrbh);             
            } 

            this.RegisterClientScriptInclude("W_Hddz_Select", "/Xt_Popwin/W_Hddz_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Yfjjf_Select", "/Xt_Popwin/W_Hddz_Yfjjf_Select.win.js");
            this.RegisterClientScriptInclude("W_Hdfy_sjdrEdit", "/Yw_Zjgl/W_Hdfy_sjdrEdit.win.js");
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件 
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}