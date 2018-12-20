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
    public partial class W_GmDr_Zdcx_Edit
    {
        public W_GmDr_Zdcx_Edit()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
            DataWindowChild dwc_fybm = dw_jzxxx.GetChild("fybm");
            dwc_fybm.SetTransaction(this.AdoTransaction);
            dwc_fybm.Retrieve("%");
            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

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


            if (this.Request["khbm"] != null)
            {
                var khbm = this.Request["khbm"].ToString();
                var end = this.Request["end"];
                DateTime date = Convert.ToDateTime(end);
                this.SetParm("khbm", khbm);

                dw_master.Retrieve(date, khbm);

                if (dw_master.RowCount == 0)
                {
                    dw_jzxxx.Retrieve("");
                }
                else {
                    var zdbm = dw_master.GetItemString(1, "zdbm");
                    dw_jzxxx.Retrieve(zdbm); 
                }
                
                
                
            }

            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js"); 
            this.RegisterClientScriptInclude("W_GmDr_Zdcx_Edit", "/Yw_Zjgl/W_GmDr_Zdcx_Edit.win.js");
            this.RegisterClientScriptInclude("W_Yw_ZjglFkglList", "/Yw_Zjgl/W_Yw_ZjglFkglList.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js"); 
            this.RegisterClientScriptInclude("W_Wlgz_Sjfk_Select", "/Xt_Popwin/W_Wlgz_Sjfk_Select.win.js");
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}