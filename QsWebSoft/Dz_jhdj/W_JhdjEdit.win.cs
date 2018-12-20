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



namespace QsWebSoft.Dz_jhdj
{
    public partial class W_JhdjEdit
    {
        public W_JhdjEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_cmd.Services.Add(ServiceName.Report);               
            report.RequestorDrawTitle = false;
            report = (ReportService)dw_fy.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            DataWindowChild dwc = dw_spms.GetChild("bzdw");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_spms.GetChild("sldw");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_kehu.GetChild("tt_no");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_master.GetChild("ckka");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("%");


            var operation = this.Request["operation"].ToString();
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            if (this.Request["mxdbh"] != null)
            {
                var bbh = Convert.ToDecimal(this.Request["bbh"]);
                var mxdbh =this.Request["mxdbh"].ToString();
               

 
                dw_master.Retrieve(mxdbh, bbh);
                dw_cmd.Retrieve(mxdbh, bbh);
                dw_fy.Retrieve(mxdbh, bbh);
                dw_selected.Retrieve();
                dw_memo.Retrieve(mxdbh);
                

            }
            

            //注册相关的js文件

            this.RegisterClientScriptInclude("W_Commodity_Select", "/Commodity/W_Commodity_Select.win.js");
            this.RegisterClientScriptInclude("W_Eport_Select", "/Xt_Popwin/W_Eport_Select.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Jnhyd_Select", "/Xt_Popwin/W_Jnhyd_Select.win.js");
            this.RegisterClientScriptInclude("W_Dlxy_Select", "/Xt_Popwin/W_Dlxy_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_CommodityAdd", "/Commodity/W_CommodityAdd.win.js");
            //注册相关的js文件
            this.RegisterClientScriptInclude("W_Spdl_Select", "/Xt_Popwin/W_Spdl_Select.win.js");
            this.RegisterClientScriptInclude("W_Hssh_Select", "/Xt_Popwin/W_Hssh_Select.win.js");
            this.RegisterClientScriptInclude("W_Jldw_Select", "/Xt_Popwin/W_Jldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Bzdw_Select", "/Xt_Popwin/W_Bzdw_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}