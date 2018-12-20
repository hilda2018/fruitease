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



namespace QsWebSoft.Wlxx
{
    public partial class W_Ky_CdphxxEdit
    {
        public W_Ky_CdphxxEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            DataWindowChild dwc = dw_master.GetChild("cllx");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            //DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            //dwc_xx.SetTransaction(this.AdoTransaction);
            //dwc_xx.Retrieve("%");

            //DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            //dwc_xl.SetTransaction(this.AdoTransaction);
            //dwc_xl.Retrieve("%");

            //DataWindowChild dwc_clfs = dw_jzxxx.GetChild("clfs");
            //dwc_clfs.SetTransaction(this.AdoTransaction);
            //dwc_clfs.Retrieve("%");

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

            if (this.Request["cdphbm"] != null)
            {
                var cdphbm = this.Request["cdphbm"].ToString();
                this.SetParm("cdphbm", cdphbm);
                dw_master.Retrieve(cdphbm);
                dw_jzxxx.Retrieve(cdphbm);
                dw_qd.Retrieve(cdphbm);
            };

            dw_kh.Retrieve(Dlwtf);
            this.dw_log.Retrieve(userid, "kpmx");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Sj_Select", "/Xt_Popwin/W_Sj_Select.win.js");
            this.RegisterClientScriptInclude("W_Tpxx_Cdph_Select", "/Xt_Popwin/W_Tpxx_Cdph_Select.win.js");
            this.RegisterClientScriptInclude("W_Set_Sj", "/Wlxx/W_Set_Sj.win.js");
            this.RegisterClientScriptInclude("W_Bdsbh_Select", "/Xt_Popwin/W_Bdsbh_Select.win.js");
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}