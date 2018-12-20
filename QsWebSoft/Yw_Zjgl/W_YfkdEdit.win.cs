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



namespace QsWebSoft.Yw_Zjgl
{
    public partial class W_YfkdEdit
    {
        public W_YfkdEdit()
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
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var userip = AppService.GetIp();

            this.SetParm("userid", userid);
            this.SetParm("username", username);

            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("userip", userip);
            DataWindowChild dwc = dw_print.GetChild("ywy");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_print.GetChild("sqr");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_print.GetChild("bm");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");
          

            if (this.Request["sqdbh"] != null)
            {
                var sqdbh = this.Request["sqdbh"].ToString();
                dw_master.Retrieve(sqdbh);
                dw_mx.Retrieve(sqdbh);
          }


            //注册相关的js文件
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            this.RegisterClientScriptInclude("W_Mxd_Select", "/Xt_Popwin/W_Mxd_Select.win.js");
        }
    }
}