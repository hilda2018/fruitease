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
    public partial class W_Clqy_Select
    {
        public W_Clqy_Select()
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
            var ycddm = this.Request["Ycddm"];
            var spbm = this.Request["Spbm"];
            this.SetParm("ywy", ywy);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("Ycddm", ycddm);
            this.SetParm("Spbm", spbm);

            dw_1.Retrieve(ycddm,spbm);
            //dw_1.Modify("DataWindow.Readonly=yes");

           

        }
    }
}
