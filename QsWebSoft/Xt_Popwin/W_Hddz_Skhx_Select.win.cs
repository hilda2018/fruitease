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
    public partial class W_Hddz_Skhx_Select
    {
        public W_Hddz_Skhx_Select()
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
            var jsdwbm = this.Request["jsdwbm"];
            int jsbm = int.Parse(this.Request["jsbm"]);
            var fydlbm = this.Request["fydlbm"];
            var jdrjc = this.Request["jdrjc"];
            decimal cmd_skje = decimal.Parse(this.Request["cmd_skje"]);
            this.SetParm("ywy", ywy);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("jsdwbm", jsdwbm);
            this.SetParm("jsbm", jsbm.ToString());
            this.SetParm("fydlbm", fydlbm);
            this.SetParm("cmd_skje", cmd_skje.ToString());
            this.SetParm("jdrjc", jdrjc.ToString());

            sle_skje.Text = cmd_skje.ToString("F2");
            if (jsdwbm == null)
            {
                jsdwbm = "";
            }


             if (fydlbm == null)
             {
                 fydlbm = "";
             }
              
            dw_1.Retrieve(jsdwbm,jsbm,fydlbm,jdrjc);
        
            //dw_1.Modify("DataWindow.Readonly=yes");

           

        }
    }
}
