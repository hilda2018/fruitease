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


namespace QsWebSoft.Xxcx
{
    public partial class W_Wlgz_Dzwltj_Rw
    {
        public W_Wlgz_Dzwltj_Rw()
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
            this.SetParm("ShareMode", ShareMode);

            this.ds_jdr.DataWindowObject = "dd_jdr_list";
            this.ds_jdr.Retrieve();
            ddlb_jdr.Items.Add("全部");
            for (int row = 1; row <= this.ds_jdr.RowCount; row++)
            {
                var jdrjc = this.ds_jdr.GetItemString(row, "jdrjc");
                ddlb_jdr.Items.Add(jdrjc);
            }

            this.ds_pdy.DataWindowObject = "dw_pdy_list";
            this.ds_pdy.Retrieve();
            ddlb_pdy.Items.Add("全部");
            for (int row = 1; row <= this.ds_pdy.RowCount; row++)
            {
                var pdy = this.ds_pdy.GetItemString(row, "pdy");
                ddlb_pdy.Items.Add(pdy);
            } 
           
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_Wlgz_Dzwltj_Ycyy", "/Xxcx/W_Wlgz_Dzwltj_Ycyy.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
