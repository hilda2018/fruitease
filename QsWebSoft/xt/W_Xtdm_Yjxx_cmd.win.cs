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


namespace QsWebSoft.xt
{
    public partial class W_Xtdm_Yjxx_cmd
    {
        public W_Xtdm_Yjxx_cmd()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)this.dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            var yjlx = this.Request["yjlx"].ToString();

            if (yjlx == "000101")
            {
                dw_1.DataStore.DataWindowObject = "dw_yjxx_wcdxx";
                //dw_1.DataStore.Reset();
            }
            else if (yjlx == "000102")
            {
                dw_1.DataStore.DataWindowObject = "dw_yjxx_cdxxyc";
            }
            else if (yjlx == "000103")
            {
                dw_1.DataStore.DataWindowObject = "dw_yjxx_wdgxx";
            }
            else if (yjlx == "000104")
            {
                dw_1.DataStore.DataWindowObject = "dw_yjxx_dzwdqxx";
            }

            else if (yjlx == "000301")
            {
                dw_1.DataStore.DataWindowObject = "dw_yjxx_hdfysjyc";
            }
            else if (yjlx == "000302")
            {
                dw_1.DataStore.DataWindowObject = "dw_yjxx_hyyqwsczd";
            }
            else if (yjlx == "000303")
            {
                dw_1.DataStore.DataWindowObject = "dw_yjxx_kyyqwsczd";
            }


            dw_1.Retrieve("%");


            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
