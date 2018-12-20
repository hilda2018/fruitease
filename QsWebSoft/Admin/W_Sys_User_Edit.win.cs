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


namespace QsWebSoft.Admin
{
    public partial class W_Sys_User_Edit
    {
        public W_Sys_User_Edit()
        {

        }

        
        public override void OnLoad()
        {
            base.OnLoad();

            DataWindowChild dwc = dw_1.GetChild("Dlwtf");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("%");

            DataWindowChild dwc_d_no = dw_1.GetChild("d_no");
            dwc_d_no.SetTransaction(this.AdoTransaction);
            dwc_d_no.Retrieve("%");
           
            if (this.Request["ID"] != null)
            {
                dw_1.Retrieve(this.Request["ID"].ToString());
            }
            else
            {
                dw_1.InsertRow(0);
            }

            //注册相关的js文件 
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
