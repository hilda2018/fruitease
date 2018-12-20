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
    public partial class W_Hy_Wlgz_Yfbz
    {
        public W_Hy_Wlgz_Yfbz()
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

            DataWindowChild dwc_fybm = dw_1.GetChild("fybm");
            dwc_fybm.SetTransaction(this.AdoTransaction);
            dwc_fybm.Retrieve("06");
            
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);          
            dw_1.Retrieve("%");

            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_Sfdqlm_Select", "/Xt_Popwin/W_Sfdqlm_Select.win.js");
            this.RegisterClientScriptInclude("W_Sfdqlm_Select_New", "/Xt_Popwin/W_Sfdqlm_Select_New.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
