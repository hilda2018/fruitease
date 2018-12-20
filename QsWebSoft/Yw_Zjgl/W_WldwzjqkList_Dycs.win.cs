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
    public partial class W_WldwzjqkList_Dycs
    {
        public W_WldwzjqkList_Dycs()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            var khbm = this.Request["khbm"].ToString();
            this.SetParm("khbm", khbm);

            dw_1.Retrieve(khbm);
            //dw_1.Modify("DataWindow.Readonly=yes");
        }
    }
}
