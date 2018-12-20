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


namespace QsWebSoft.Wldw
{
    public partial class W_Wxlxr_Role_Edit
    {
        public W_Wxlxr_Role_Edit()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

            if (this.Request["ID"] != null)
            {
                dw_1.Retrieve(this.Request["ID"].ToString());
            }
            else
            {
                dw_1.DataStore.RetrieveChilds();
                dw_1.InsertRow(0);
            }
        }
    }
}
