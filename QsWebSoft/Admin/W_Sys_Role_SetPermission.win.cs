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
    public partial class W_Sys_Role_SetPermission
    {
        public W_Sys_Role_SetPermission()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

    
            string id = this.Request["id"].ToString();

           dw_Modules.Retrieve(id);
           dw_RoleInfo.Retrieve(id);

        }
    }
}
