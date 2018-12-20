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
    public partial class W_Wlxx_Edit
    {
        public W_Wlxx_Edit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            //DataWindowChild dwc = dw_master.GetChild("mdg");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("%");
 
            //DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            //dwc_xx.SetTransaction(this.AdoTransaction);
            //dwc_xx.Retrieve("%");

            //DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            //dwc_xl.SetTransaction(this.AdoTransaction);
            //dwc_xl.Retrieve("%");

            //DataWindowChild dwc_clfs = dw_jzxxx.GetChild("clfs");
            //dwc_clfs.SetTransaction(this.AdoTransaction);
            //dwc_clfs.Retrieve("%");

            DataWindowChild clxx = dw_master.GetChild("clxx");
            clxx.SetTransaction(this.AdoTransaction);
            clxx.Retrieve("");

            DataWindowChild tjhm = dw_master.GetChild("tjhm");
            tjhm.SetTransaction(this.AdoTransaction);
            tjhm.Retrieve("");

            DataWindowChild hgtjhm = dw_master.GetChild("hgtjhm");
            hgtjhm.SetTransaction(this.AdoTransaction);
            hgtjhm.Retrieve("");

            DataWindowChild xskhjc = dw_master.GetChild("xskhjc");
            xskhjc.SetTransaction(this.AdoTransaction);
            xskhjc.Retrieve("");

           

            DataWindowChild hgcp = dw_master.GetChild("hgcp");
            hgcp.SetTransaction(this.AdoTransaction);
            hgcp.Retrieve("");

            DataWindowChild jhdd = dw_master.GetChild("jhdd");
            jhdd.SetTransaction(this.AdoTransaction);
            jhdd.Retrieve("");

            DataWindowChild hgdc = dw_master.GetChild("hgdc");
            hgdc.SetTransaction(this.AdoTransaction);
            hgdc.Retrieve("");

            

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
                this.SetParm("ywbh", ywbh);
                dw_master.Retrieve(ywbh);
                dw_jzxxx.Retrieve(ywbh);
                dw_spxx.Retrieve(ywbh);                
                this.dw_log.Retrieve(userid, "wlbj");
                ds_jdr.Retrieve(userid);

                if (dw_wlgz.Retrieve(ywbh, 1) <= 0) {
                    dw_wlgz.InsertRow(0);
                    dw_wlgz.SetItemString(1,"ywbh",ywbh);
                    dw_wlgz.SetItemDouble(1, "hddz_cxh", 1);
                    dw_wlgz.SetItemString(1, "rwbh", ywbh + "11");
                }

                if (dw_wlgz_cmd.Retrieve(ywbh, 1) <= 0)
                {
                    var li_insertrow = dw_wlgz_cmd.InsertRow(0); 
                    dw_wlgz_cmd.SetItemString(li_insertrow, "ywbh", ywbh);
                    dw_wlgz_cmd.SetItemDouble(li_insertrow, "hddz_cxh", 1);
                    dw_wlgz_cmd.SetItemString(li_insertrow, "rwbh", ywbh + "11");
                    dw_wlgz_cmd.SetItemString(li_insertrow, "rwlx", "1");
                    dw_wlgz_cmd.SetItemDouble(li_insertrow, "rwxh", 1);
                    dw_wlgz_cmd.SetItemString(li_insertrow, "rwmc", "港区");

                    var li_insertrow_shd = dw_wlgz_cmd.InsertRow(0);
                    dw_wlgz_cmd.SetItemString(li_insertrow_shd, "ywbh", ywbh);
                    dw_wlgz_cmd.SetItemDouble(li_insertrow_shd, "hddz_cxh", 1);
                    dw_wlgz_cmd.SetItemString(li_insertrow_shd, "rwbh", ywbh + "11");
                    dw_wlgz_cmd.SetItemString(li_insertrow_shd, "rwlx", "1");
                    dw_wlgz_cmd.SetItemDouble(li_insertrow_shd, "rwxh", 2);
                    dw_wlgz_cmd.SetItemString(li_insertrow_shd, "rwmc", "非市场物流地1");

                    var li_insertrow_dc = dw_wlgz_cmd.InsertRow(0);
                    dw_wlgz_cmd.SetItemString(li_insertrow_dc, "ywbh", ywbh);
                    dw_wlgz_cmd.SetItemDouble(li_insertrow_dc, "hddz_cxh", 1);
                    dw_wlgz_cmd.SetItemString(li_insertrow_dc, "rwbh", ywbh + "11");
                    dw_wlgz_cmd.SetItemString(li_insertrow_dc, "rwlx", "1");
                    dw_wlgz_cmd.SetItemDouble(li_insertrow_dc, "rwxh", 3);
                    dw_wlgz_cmd.SetItemString(li_insertrow_dc, "rwmc", "堆场");
                }

            }


            //注册相关的js文件

            this.RegisterClientScriptInclude("W_Commodity_Select", "/Commodity/W_Commodity_Select.win.js");
            this.RegisterClientScriptInclude("W_Eport_Select", "/Xt_Popwin/W_Eport_Select.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select_Sz", "/Xt_Popwin/W_Wldw_Select_Sz.win.js");
            //注册相关的js文件
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}