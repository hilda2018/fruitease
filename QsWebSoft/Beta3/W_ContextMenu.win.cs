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


namespace QsWebSoft.Beta3
{
    public partial class W_ContextMenu
    {
        public W_ContextMenu()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

            dw_1.Retrieve(); 
        }
    }
}
