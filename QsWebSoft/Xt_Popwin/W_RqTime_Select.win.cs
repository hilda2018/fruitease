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
    public partial class W_RqTime_Select
    {
        public W_RqTime_Select()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
           
            dw_master.Retrieve();
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
