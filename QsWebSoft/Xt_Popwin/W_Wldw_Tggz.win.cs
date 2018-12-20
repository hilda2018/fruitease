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
    public partial class W_Wldw_Tggz 
    {
        public W_Wldw_Tggz()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            //ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            
            var ywbh = this.Request["ywbh"];
            var hddz_cxh = this.Request["hddz_cxh"].ToString();
            
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
           
        
            this.SetParm("ywbh", ywbh);
            dw_1.Retrieve(ywbh);
            dw_2.Retrieve(ywbh, int.Parse(hddz_cxh));
            dw_3.Retrieve(ywbh, int.Parse(hddz_cxh));
            dw_4.Retrieve(ywbh, int.Parse(hddz_cxh));
            //dw_2.Retrieve(ywbh);
            //dw_3.Retrieve(ywbh);
            //dw_4.Retrieve(ywbh);

            //for (var i = 1; i <= dw_4.RowCount;i++ ) {
            //    string jrdzwlsj = dw_4.GetItemDateTime(i, "jrdzwlsj").ToString();
                
            //    var cdzwlsj = dw_4.GetItemDateTime(i, "cdzwlsj");
            //    if (jrdzwlsj == "1900/1/1 0:00:00" || jrdzwlsj == null)
            //    {
            //        dw_4.SetItemDateTime(i, "jrdzwlsj", cdzwlsj);
            //    }
            //}
           
            this.dw_log.Retrieve(userid, "hdlb");

            this.RegisterClientScriptInclude("W_Wldw_Shdz_Select", "/Xt_Popwin/W_Wldw_Shdz_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
        }
    }
}
