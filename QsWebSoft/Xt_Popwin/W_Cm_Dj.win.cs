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
    public partial class W_Cm_Dj
    {
        public W_Cm_Dj()
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
            var mxdbh = this.Request["mxdbh"].ToString();
            var bbh = Convert.ToDecimal(this.Request["bbh"]);
            this.SetParm("mxdbh", mxdbh);
            this.SetParm("bbh", bbh.ToString());
            dw_master.Retrieve(mxdbh, bbh);
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
