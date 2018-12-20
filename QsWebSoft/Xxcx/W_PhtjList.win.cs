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


namespace QsWebSoft.Xxcx
{
    public partial class W_PhtjList
    {
        public W_PhtjList()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
            //ReportService report = (ReportService)this.dw_phtj_thmx.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var Tybm = AppService.GetTybm();
            var Sfqytybm = AppService.GetSfqytybm();
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("Tybm", Tybm);
            this.SetParm("Sfqytybm", Sfqytybm);
 
            DateTime dt = DateTime.Now;
            //本月第一天时间   
            DateTime dt_First = dt.AddDays(-(dt.Day) + 1);
            this.dp_date.Value = dt_First;  
           
            this.dw_list.Retrieve(DateTime.Parse(this.dp_date.Value.ToString()));
           
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_PhtjList", "/Xxcx/W_PhtjList.win.js");
            this.RegisterClientScriptInclude("W_PhtjList_fgqth_cmd", "/Xxcx/W_PhtjList_fgqth_cmd.win.js");
            this.RegisterClientScriptInclude("W_PhtjList_kchx_cmd", "/Xxcx/W_PhtjList_kchx_cmd.win.js");
            this.RegisterClientScriptInclude("W_PhtjList_schx_cmd", "/Xxcx/W_PhtjList_schx_cmd.win.js");
            this.RegisterClientScriptInclude("W_PhtjList_thmx_cmd", "/Xxcx/W_PhtjList_thmx_cmd.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            
        }
    }
}
