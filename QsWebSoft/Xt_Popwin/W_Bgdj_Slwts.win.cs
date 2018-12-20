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
    public partial class W_Bgdj_Slwts
    {
        public W_Bgdj_Slwts()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            var operation = "new";
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            var mxdbh = this.Request["mxdbh"].ToString();
            this.SetParm("mxdbh", mxdbh);
            DataWindowChild  dwc = dw_master.GetChild("hxd_ldr");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_master.GetChild("sdry");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            //ע����ص�js�ļ�
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");

            //ע����Ҫʹ�õĵ������ڵ��¼���������JS�ļ�
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
