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
    public partial class W_Hddz_Dzsd
    {
        public W_Hddz_Dzsd()
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
            //var Dlwtf = AppService.GetDlwtf();

            this.SetParm("ShareMode", ShareMode);
            //this.SetParm("Dlwtf", Dlwtf);

            DataWindowChild dwc_sdzbry = dw_list.GetChild("sdzbry");
            dwc_sdzbry.SetTransaction(this.AdoTransaction);
            dwc_sdzbry.Retrieve("%");

            DataWindowChild dwc_sdr = dw_list.GetChild("sdr");
            dwc_sdr.SetTransaction(this.AdoTransaction);
            dwc_sdr.Retrieve("%");

            DataWindowChild dwc_sdfbry = dw_list.GetChild("sdfbry");
            dwc_sdfbry.SetTransaction(this.AdoTransaction);
            dwc_sdfbry.Retrieve("%");

            dw_log.Retrieve(userid, "dzsd");
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
