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



namespace QsWebSoft.Dlxy
{
    public partial class W_DlxyEdit
    {
        public W_DlxyEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_cmd.Services.Add(ServiceName.Report);               
            report.RequestorDrawTitle = false;

            var operation = this.Request["operation"].ToString();
            this.SetParm("operation", operation);
     

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var Dlwtf = AppService.GetDlwtf();
            var userip = AppService.GetIp();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("userip", userip);

            if (this.Request["dlxyh"] != null)
            {
                var bbh = Convert.ToDecimal(this.Request["bbh"]);
                var dlxyh =this.Request["dlxyh"].ToString();
                this.SetParm("dlxyh", dlxyh);
                this.SetParm("bbh", bbh.ToString());
                dw_master.Retrieve(dlxyh,bbh);
                dw_cmd.Retrieve(dlxyh,bbh);
            }
         

            //注册相关的js文件

            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            //注册相关的js文件
             this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}