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


namespace QsWebSoft.Hddz
{
    public partial class W_Hddz_Ywkh_BeiZhu
    {
        public W_Hddz_Ywkh_BeiZhu()
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

            var ywbh = "";
            var cxh = "";
            var jzxh = "";
            var cdphbm = "";
            var mkm = "";
            ywbh = this.Request["ywbh"];
            cxh = this.Request["cxh"];
            jzxh = this.Request["jzxh"];
            cdphbm = this.Request["cdphbm"];
            mkm = this.Request["mkm"];
            this.SetParm("ywbh", ywbh);
            this.SetParm("cxh", cxh);
            this.SetParm("jzxh", jzxh);
            this.SetParm("cdphbm", cdphbm);
            this.SetParm("mkm", mkm);

            dw_1.Retrieve(ywbh, cxh, jzxh, cdphbm, mkm);
        }
    }
}
