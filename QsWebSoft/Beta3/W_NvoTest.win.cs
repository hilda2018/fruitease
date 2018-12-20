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
    public partial class W_NvoTest
    {
        public W_NvoTest()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

            dw_1.Retrieve();


            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_NvoTest", "/Beta3/W_NvoTest.win.js"); 

            
        }
    }
}
