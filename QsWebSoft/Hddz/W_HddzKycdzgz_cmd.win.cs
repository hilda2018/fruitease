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


namespace QsWebSoft.Hddz
{
    public partial class W_HddzKycdzgz_cmd
    {
        public W_HddzKycdzgz_cmd()
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

            var hth = "";

            hth = this.Request["hth"];
            this.SetParm("hth", hth);

            var zfbqk = "";

            zfbqk = this.Request["zfbqk"];
            this.SetParm("zfbqk", zfbqk);

            var zbmc = "";

            zbmc = this.Request["zbmc"];
            this.SetParm("zbmc", zbmc);

            if (zbmc == "cdz")
            {
                zbmc = "原产地证";
            }
            else if (zbmc == "zjz")
            {
                zbmc = "植检证";
            }

            DateTime date = System.DateTime.Now.AddDays(-60);

            this.dp_begin.Value = date;


            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), hth, zfbqk, zbmc);
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_HddzKycdzgz_cmd", "/Hddz/W_HddzKycdzgz_cmd.win.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
