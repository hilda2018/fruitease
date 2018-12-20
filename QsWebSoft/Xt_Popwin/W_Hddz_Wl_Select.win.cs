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


namespace QsWebSoft.Xt_Popwin
{
    public partial class W_Hddz_Wl_Select
    {
        public W_Hddz_Wl_Select()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            dw_1.InsertRow(0);
        }
    }
}
