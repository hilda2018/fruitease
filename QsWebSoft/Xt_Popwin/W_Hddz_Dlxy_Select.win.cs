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
    public partial class W_Hddz_Dlxy_Select
    {
        public W_Hddz_Dlxy_Select()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();

            var zbrq = this.Request["zbrq"].ToString();

            DateTime date = System.DateTime.Now.AddDays(-730);
            this.dp_begin.Value = date;
           
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("zbrq", zbrq);
            DateTime dazbrq = DateTime.Parse(zbrq);

            dw_1.Retrieve(userid, DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()),dazbrq);
            dw_1.Modify("DataWindow.Readonly=yes");
        }
    }
}
