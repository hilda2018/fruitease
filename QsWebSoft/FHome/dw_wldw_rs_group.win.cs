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
    public partial class dw_wldw_rs_group
    {
        public dw_wldw_rs_group()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            // ���ݼ���
            this.dw_1.Retrieve();
            //ע����ص�js�ļ�
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
