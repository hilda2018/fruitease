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


namespace QsWebSoft.Wlxx
{
    public partial class W_Hy_Wlgz_Hcj
    {
        public W_Hy_Wlgz_Hcj()
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
            var rwbh = this.Request["Rwbh"].ToString(); 
            var rwmc = this.Request["Rwmc"].ToString();
            var cjmc = this.Request["Cjmc"].ToString();

            this.SetParm("rwbh", rwbh); 
            this.SetParm("rwmc", rwmc);
            this.SetParm("cjmc", cjmc);
            if (rwbh == null || rwbh == "" || rwbh == null || rwbh == "null")
            {
                //dw_master.InsertRow(0);
                //DataWindowChild dwc_zbr = dw_master.GetChild("zbr");
                //dwc_zbr.SetTransaction(this.AdoTransaction);
                //dwc_zbr.Retrieve("%");
                //dw_master.SetItemSqlString(1,"zbr",userid);  
            }
            else
            {
                dw_master.Retrieve(rwbh);    
                

            };

           
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Cj_Select", "/Xt_Popwin/W_Cj_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
