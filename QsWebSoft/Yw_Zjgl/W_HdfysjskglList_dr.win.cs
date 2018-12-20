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
    public partial class W_HdfysjskglList_dr
    {
        public W_HdfysjskglList_dr()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
          
            ReportService report = (ReportService)dw_cmd.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;


            //var operation = this.Request["operation"].ToString();
            //this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();   
            var Dlwtf = AppService.GetDlwtf();
            //var userip = AppService.GetIp();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            //this.SetParm("userip", userip);

            //if (this.Request["sjdrbh"] != null)
            //{
            //    var sjdrbh1 = this.Request["sjdrbh1"].ToString();
            //    this.SetParm("sjdrbh1", sjdrbh1);
            //    var sjdrbh = this.Request["sjdrbh"].ToString();
            //    this.SetParm("sjdrbh", sjdrbh);
                
            //    dw_cmd.Retrieve(sjdrbh);             
            //} 

            
            this.RegisterClientScriptInclude("W_Hddz_Select", "/Xt_Popwin/W_Hddz_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Yfjjf_Select", "/Xt_Popwin/W_Hddz_Yfjjf_Select.win.js");
            this.RegisterClientScriptInclude("W_HdfysjskglList_dr", "/Yw_Zjgl/W_HdfysjskglList_dr.win.js");
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}