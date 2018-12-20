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
    public partial class W_Sys_User_List_Tongbu
    {
        public W_Sys_User_List_Tongbu()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            //var khlx = "";
            //var fgflx = ""; 
            var userid = AppService.GetUserID();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            //khlx = this.Request["khlx"];
            //fgflx = this.Request["fgflx"]; 
            //this.SetParm("khlx", khlx);
            //this.SetParm("fgflx", fgflx);
            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            var id = this.Request["id"].ToString();
            this.SetParm("id", id);
            dw_1.Retrieve(id);
            //dw_1.Modify("DataWindow.Readonly=yes");
            

            this.RegisterClientScriptInclude("W_WldwAdd", "/Xt_Popwin/W_WldwAdd.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            this.RegisterClientScriptInclude("W_Sys_User_List_Tongbu", "/Xt_Popwin/W_Sys_User_List_Tongbu.win.js");

           // AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
