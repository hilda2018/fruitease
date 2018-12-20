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
    public partial class W_WldwAdd_Shdz_New
    {
        public W_WldwAdd_Shdz_New()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
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
            var khbm = this.Request["Khbm"];
            this.SetParm("Khbm", khbm);
            var yw_khbm = this.Request["yw_khbm"];
            this.SetParm("yw_khbm", yw_khbm);
            var cxh_max = this.Request["cxh_max"];
            this.SetParm("cxh_max", cxh_max);

            dw_list.Retrieve(khbm);
            this.RegisterClientScriptInclude("W_Sfdqlm_Select", "/Xt_Popwin/W_Sfdqlm_Select.win.js");
            this.RegisterClientScriptInclude("W_Sfdqlm_Select_New", "/Xt_Popwin/W_Sfdqlm_Select_New.win.js");

            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
