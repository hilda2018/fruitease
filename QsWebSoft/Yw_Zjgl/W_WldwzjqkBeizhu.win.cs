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


namespace QsWebSoft.Yw_Zjgl
{
    public partial class W_WldwzjqkBeizhu
    {
        public W_WldwzjqkBeizhu()
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

            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            var jdrbm = this.Request["jdrbm"].ToString();
            var jdrpym = this.Request["jdrpym"].ToString();
            this.SetParm("jdrbm",jdrbm);
            this.SetParm("jdrpym", jdrpym);
             
           
            //ע����ص�js�ļ�
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");

            //ע����Ҫʹ�õĵ������ڵ��¼����������JS�ļ�
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}