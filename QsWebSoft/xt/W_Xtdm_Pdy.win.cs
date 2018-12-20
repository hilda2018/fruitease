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
    public partial class W_Xtdm_Pdy
    {
        public W_Xtdm_Pdy()
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
            dw_2.Retrieve("%");
            if (dw_1.RowCount > 0)
            {
                var pdy = dw_1.GetItemString(1, "pdy");
                dw_2.SetFilter("pdy = '" + pdy + "'");
                dw_2.Filter();
            }
            
        }
    }
}
