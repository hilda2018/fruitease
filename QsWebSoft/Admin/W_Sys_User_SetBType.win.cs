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
    public partial class W_Sys_User_SetBType
    {
        public W_Sys_User_SetBType()
        {

        }

        
        public override void OnLoad()
        {
            base.OnLoad();

            dw_1.RowSelection = RowSelectionStyle.Extended;
            dw_2.RowSelection = RowSelectionStyle.Extended;

          
            string id = string.Empty;
            if (this.Request["id"] != null)
                id = this.Request["id"].ToString();

           
            dw_1.Retrieve(id);
            dw_2.Retrieve(id);
            dw_3.Retrieve(id);

            //dw_4.Retrieve("");
        }
    }
}
