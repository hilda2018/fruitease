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
    public partial class W_Sj_Select
    {
        public W_Sj_Select()
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
            var sjlx =this.Request["sjlx"];
            var cdbm = this.Request["Cdbm"];
            this.SetParm("sjlx", sjlx); 
            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("Cdbm", cdbm); 
            
           
            if (sjlx == null)
            {
                sjlx = "全部";                
            }
            else if(sjlx=="hy")
            {
                sjlx = "海运";               
            }
            else if (sjlx == "ky")
            {
                sjlx = "空运";                
            }
            dw_1.Retrieve(sjlx, cdbm);
            dw_2.Retrieve("");
            dw_1.Modify("DataWindow.Readonly=yes");

             
        }
    }
}
