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
    public partial class W_Hy_Wlgz_Rwdz
    {
        public W_Hy_Wlgz_Rwdz()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
          
            ReportService report = (ReportService)dw_list.Services.Add(ServiceName.Report);

            var operation = "new";
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            //var khbm = this.Request["khbm"];
            //this.SetParm("khbm", khbm);
            //var cxh_max = this.Request["cxh_max"];
            //this.SetParm("cxh_max", cxh_max);

            //dw_list.Retrieve(khbm);

            //注册相关的js文件
            this.RegisterClientScriptInclude("json2", "/Scripts/json2.js");
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
