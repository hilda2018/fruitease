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


namespace QsWebSoft.Xt_Popwin
{
    public partial class W_Tszx_Hth_Select
    {
        public W_Tszx_Hth_Select()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();

            this.SetParm("userid", userid);
            this.SetParm("username", username);

            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
         
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            DataWindowChild  dwc = dw_1.GetChild("zbr");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");
            //dw_1.Retrieve(userid,DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()));
            dw_1.Modify("DataWindow.Readonly=yes");
            DateTime date = System.DateTime.Now.AddDays(-90);
            this.dp_begin.Value = date;
        }
    }
}
