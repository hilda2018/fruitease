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



namespace QsWebSoft.Wlxx
{
    public partial class W_Hy_ThwljhEdit
    {
        public W_Hy_ThwljhEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            //ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;


           
            var operation = this.Request["operation"].ToString();
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var userip = AppService.GetIp();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("userip", userip);

            


            if (this.Request["ywbh"] != null)
            {
                var ywbh = this.Request["ywbh"].ToString();
                var cxh = Convert.ToDecimal(this.Request["cxh"]);
                this.SetParm("ywbh", ywbh);
                this.SetParm("cxh", cxh.ToString());
                dw_master.Retrieve(ywbh, cxh);
                dw_cmd.Retrieve(ywbh, cxh);
               
            }

            this.dw_log.Retrieve(userid, "hyjh");

            //注册相关的js文件

             this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
             //注册相关的js文件
             this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
             this.RegisterClientScriptInclude("W_Wldw_Lxr_Select", "/Xt_Popwin/W_Wldw_Lxr_Select.win.js");
             this.RegisterClientScriptInclude("W_Wldw_Shdz_Select", "/Xt_Popwin/W_Wldw_Shdz_Select.win.js");
             this.RegisterClientScriptInclude("W_WldwAdd_Lxr_New", "/Xt_Popwin/W_WldwAdd_Lxr_New.win.js");
             this.RegisterClientScriptInclude("W_WldwAdd_Shdz_New", "/Xt_Popwin/W_WldwAdd_Shdz_New.win.js");
             this.RegisterClientScriptInclude("W_Sfdqlm_Select", "/Xt_Popwin/W_Sfdqlm_Select.win.js");
             this.RegisterClientScriptInclude("W_Sfdqlm_Select_New", "/Xt_Popwin/W_Sfdqlm_Select_New.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}