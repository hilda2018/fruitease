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
    public partial class W_WldwzjqkList_DY
    {
        public W_WldwzjqkList_DY()
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
            this.RegisterClientScriptInclude("W_Yw_ZjglEdit_Kggl", "/Yw_Zjgl/W_Yw_ZjglEdit_Kggl.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
