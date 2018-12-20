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
    public partial class W_Hddz_Bgbjfy_Select
    {
        public W_Hddz_Bgbjfy_Select()
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
            date = System.DateTime.Now.AddDays(-90);
            this.dp_begin.Value = date;

            this.ds_gstt.DataWindowObject = "dd_wldw_select_gstt";
            this.ds_gstt.Retrieve();
            ddlb_gstt.Items.Add("全部");
            for (int row = 1; row <= this.ds_gstt.RowCount; row++)
            {
                var khjc = this.ds_gstt.GetItemString(row, "khjc");
                ddlb_gstt.Items.Add(khjc);
            }


            dw_1.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "上海欧恒");
      
            //dw_1.Modify("DataWindow.Readonly=yes");

           

        }
    }
}
