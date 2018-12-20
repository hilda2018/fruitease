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
    public partial class W_Sys_User_SetPassword
    {
        public W_Sys_User_SetPassword()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

            if (this.Request["ID"] != null)
            {
                dw_1.Retrieve(this.Request["ID"].ToString());
            }
            if (dw_1.RowCount == 0)
            {
                this.LoadSuccessed = false;
                this.LoadErrorMessage = "用户帐号可能已被删除!";
            }
        }
    }
}
