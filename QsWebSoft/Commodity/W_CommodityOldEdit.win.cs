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



namespace QsWebSoft.Commodity
{
    public partial class W_CommodityOldEdit
    {
        public W_CommodityOldEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

          
            var operation = this.Request["operation"].ToString();
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();

            this.SetParm("userid", userid);
            this.SetParm("username", username);

            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            //DataWindowChild dwc_spdl = dw_master.GetChild("spdl");
            //dwc_spdl.SetTransaction(this.AdoTransaction);
            //dwc_spdl.Retrieve("%");

            if (this.Request["yw_spbm"] != null)
            {
                var spbm = this.Request["yw_spbm"].ToString();
                dw_master.Retrieve(spbm);
            }

            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_CommodityOldList", "/Commodity/W_CommodityOldList.win.js");
            this.RegisterClientScriptInclude("W_CommodityOldEdit", "/Commodity/W_CommodityOldEdit.win.js");
            this.RegisterClientScriptInclude("W_Spdl_Select", "/Xt_Popwin/W_Spdl_Select.win.js");
            this.RegisterClientScriptInclude("W_Hssh_Select", "/Xt_Popwin/W_Hssh_Select.win.js");
            this.RegisterClientScriptInclude("W_Jldw_Select", "/Xt_Popwin/W_Jldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Bzdw_Select", "/Xt_Popwin/W_Bzdw_Select.win.js");
            this.RegisterClientScriptInclude("W_Commodity_Select", "/Commodity/W_Commodity_Select.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}