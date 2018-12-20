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
    public partial class W_HdfyLrcxList_Gbhywbh_Edit
    {
        public W_HdfyLrcxList_Gbhywbh_Edit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

           

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

            var ywbh1 = "";
            var gbh_ywbh = this.Request["gbh_ywbh"].ToString();
            if (gbh_ywbh != null && gbh_ywbh != "")
            {
                ywbh1 = gbh_ywbh;
            }
            else {
                ywbh1 = this.Request["ywbh"].ToString();
            }



            var ywbh = this.Request["ywbh"].ToString();
            var cxh = this.Request["cxh"].ToString();
            var ysfs = this.Request["ysfs"].ToString();  //运输方式

            dw_master.Retrieve(ywbh1, int.Parse(cxh), ysfs);
            dw_jzxxx.Retrieve(gbh_ywbh,ywbh, int.Parse(cxh), ysfs);
            dw_cbmx.Retrieve(gbh_ywbh,ywbh, int.Parse(cxh), ysfs);
            

            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js"); 
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}