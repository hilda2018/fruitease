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
    public partial class W_Hddz_Hdf_Select
    {
        public W_Hddz_Hdf_Select()
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
            this.SetParm("ywy", ywy);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            DateTime date = System.DateTime.Now.AddDays(0);
            this.dp_end.Value = date;
            date = System.DateTime.Now.AddDays(-60);
            //date = new DateTime(DateTime.Now.Year, 1, -30);
            this.dp_begin.Value = date;

            this.ds_1.DataWindowObject = "dd_jdr_list";
            this.ds_1.Retrieve();
            ddlb_jdrjc.Items.Add("全部");
            for (int row = 1; row <= this.ds_1.RowCount; row++)
            {
                var jdrjc = this.ds_1.GetItemString(row, "jdrjc");
                ddlb_jdrjc.Items.Add(jdrjc);
            }

            dw_1.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()),"全部");
        
            //dw_1.Modify("DataWindow.Readonly=yes");

           

        }
    }
}
