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
    public partial class W_HdfyjydfyyfzsfEdit
    {
        public W_HdfyjydfyyfzsfEdit()
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

            DataWindowChild dwc_fybm = dw_jzxxx.GetChild("fybm");
            dwc_fybm.SetTransaction(this.AdoTransaction);
            dwc_fybm.Retrieve("0115");

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

            if (this.Request["sqdbh"] != null)
            {
                var sqdbh = this.Request["sqdbh"].ToString();

                var fydl = "0105";
                DateTime dqkssj = System.DateTime.Now.AddDays(-180);
                DateTime dqjssj =System.DateTime.Now; ;

                this.SetParm("sqdbh", sqdbh);
                var row =  dw_master.Retrieve(sqdbh);
                if (row > 0)
                {
                    fydl = dw_master.GetItemString(row, "fydl");
                    dqkssj = dw_master.GetItemDateTime(row, "dqkssj");
                    dqjssj = dw_master.GetItemDateTime(row, "dqjssj");
                }

                dw_jzxxx.Retrieve(sqdbh, "N", fydl, dqkssj, dqjssj);
              
               
            }


            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Scfy_Select", "/Xt_Popwin/W_Hddz_Scfy_Select.win.js");
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}