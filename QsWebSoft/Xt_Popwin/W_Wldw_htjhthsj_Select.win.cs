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
    public partial class W_Wldw_htjhthsj_Select
    {
        public W_Wldw_htjhthsj_Select()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
             
            var userid = AppService.GetUserID();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();



            var ywbh = this.Request["ywbh"];
            this.SetParm("ywbh", ywbh);

            var cxh =this.Request["cxh"];
            

            this.SetParm("cxh", cxh);
    

            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);




            dw_1.Retrieve(ywbh, int.Parse(cxh));
            dw_1.Modify("DataWindow.Readonly=yes");

             
        }
    }
}
