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
    public partial class W_Fj_Edit
    {
        public W_Fj_Edit()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
          
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ywbh = this.Request["ywbh"].ToString();
            var lx = this.Request["lx"].ToString();
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ywbh", ywbh);
            this.SetParm("lx", lx);
        }
    }
}
