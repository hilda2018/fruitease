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




namespace QsWebSoft.Szyw
{
    public partial class W_Ywxx_Edit
    {
        public W_Ywxx_Edit()
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
            var bm = AppService.GetBm(); 
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("userip", userip);
            this.SetParm("bm", bm);

            DataWindowChild gwgysjc = dw_master.GetChild("gwgysjc");
            gwgysjc.SetTransaction(this.AdoTransaction);
            gwgysjc.Retrieve( "");

            DataWindowChild khjc = dw_master.GetChild("khjc");
            khjc.SetTransaction(this.AdoTransaction);
            khjc.Retrieve("");

            DataWindowChild xskhjc = dw_master.GetChild("xskhjc");
            xskhjc.SetTransaction(this.AdoTransaction);
            xskhjc.Retrieve("");

            DataWindowChild jhdd = dw_master.GetChild("jhdd");
            jhdd.SetTransaction(this.AdoTransaction);
            jhdd.Retrieve("");

            DataWindowChild hgdc = dw_master.GetChild("hgdc");
            hgdc.SetTransaction(this.AdoTransaction);
            hgdc.Retrieve("");


            DataWindowChild spmc = dw_spxx.GetChild("spmc");
            spmc.SetTransaction(this.AdoTransaction);
            spmc.Retrieve("");


            if (this.Request["ywbh"] != null)
            {
                var ywbh = this.Request["ywbh"].ToString();
                this.SetParm("ywbh", ywbh);
                dw_master.Retrieve(ywbh);
                dw_jzxxx.Retrieve(ywbh);
                dw_spxx.Retrieve(ywbh);                
                this.dw_log.Retrieve(userid, "ywbj");
                ds_jdr.Retrieve(userid);


            }


            //注册相关的js文件

            this.RegisterClientScriptInclude("W_Commodity_Select", "/Commodity/W_Commodity_Select.win.js");
            this.RegisterClientScriptInclude("W_Eport_Select", "/Xt_Popwin/W_Eport_Select.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select_Sz", "/Xt_Popwin/W_Wldw_Select_Sz.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            this.RegisterClientScriptInclude("W_CommodityAdd", "/Commodity/W_CommodityAdd.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}