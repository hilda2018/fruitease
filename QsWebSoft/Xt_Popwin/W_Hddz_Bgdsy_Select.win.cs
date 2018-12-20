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
    public partial class W_Hddz_Bgdsy_Select
    {
        public W_Hddz_Bgdsy_Select()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var ywy=this.Request["ywy"];
            var ShareMode = this.Request["ShareMode"];
            var Dlwtf = this.Request["Dlwtf"];
            var bb = this.Request["bb"];
            this.SetParm("ywy", ywy);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("bb", bb);

            DateTime date = System.DateTime.Now.AddDays(0);
            this.dp_end.Value = date;
            date = System.DateTime.Now.AddMonths(-6);
            this.dp_begin.Value = date;

            dw_1.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), bb);
            //dw_1.Modify("DataWindow.Readonly=yes");
           

        }
    }
}
