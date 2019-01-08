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


namespace QsWebSoft.FHome
{
    public partial class wldw_20190108
    {
        public wldw_20190108()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();



            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
           
           
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("wldw_20190108", "/FHome/wldw_20190108.win.js");

     
        

        }
    }
}
