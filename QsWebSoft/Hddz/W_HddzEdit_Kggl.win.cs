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


namespace QsWebSoft.Hddz
{
    public partial class W_Hddz_Edit_Kggl
    {
        public W_Hddz_Edit_Kggl()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

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


         
            //DataWindowChild dwc = dw_master.GetChild("fgflx");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //DataWindowChild dwc = dw_master.GetChild("country");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");
            this.dw_log.Retrieve(userid, "kggl"); 
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_HddzEdit_Kggl", "/Hddz/W_HddzEdit_Kggl.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
