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
    public partial class W_Wldw_Shdz_Select
    {
        public W_Wldw_Shdz_Select()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var khbm = "";
            var yw_khbm = "";
            var userid = AppService.GetUserID();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            khbm = this.Request["Khbm"];
            yw_khbm = this.Request["yw_khbm"];
            this.SetParm("Khbm", khbm);
            this.SetParm("yw_khbm", yw_khbm); 
            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            dw_1.Retrieve(khbm);
            dw_2.Retrieve(khbm);   
            dw_1.Modify("DataWindow.Readonly=yes");
            this.RegisterClientScriptInclude("W_WldwAdd_Shdz_New", "/Xt_Popwin/W_WldwAdd_Shdz_New.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("json2", "/Scripts/json2.js");
        }
    }
}
