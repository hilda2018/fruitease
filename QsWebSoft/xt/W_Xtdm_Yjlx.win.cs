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


namespace QsWebSoft.xt
{
    public partial class W_Xtdm_Yjlx
    {
        public W_Xtdm_Yjlx()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)this.dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            dw_1.Retrieve("%");

            ////注册需要使用的弹出窗口的事件处理程序的JS文件

            if(this.Page != null){
                this.RegisterClientScriptInclude("W_Xtdm_Yjlx_Ycyys", "/xt/W_Xtdm_Yjlx_Ycyys.win.js");
            }

            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
