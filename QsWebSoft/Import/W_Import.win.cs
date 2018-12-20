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


namespace QsWebSoft.Import
{
    public partial class W_Import
    {
        public W_Import()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

            this.RegisterClientScriptInclude("W_Import", "/Import/W_Import.Win.js");
        }
    }
}
