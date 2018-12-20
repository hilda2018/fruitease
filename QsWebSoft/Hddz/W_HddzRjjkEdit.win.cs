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
using System.Net;
using Scripting;


namespace QsWebSoft.Hddz
{
    public partial class W_HddzRjjkEdit
    {
        public W_HddzRjjkEdit()
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

            //DataWindowChild dwc_master_clfs = dw_master.GetChild("clfs");
            //dwc_master_clfs.SetTransaction(this.AdoTransaction);
            //dwc_master_clfs.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            //DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            //dwc_xx.SetTransaction(this.AdoTransaction);
            //dwc_xx.Retrieve("%");

            //DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            //dwc_xl.SetTransaction(this.AdoTransaction);
            //dwc_xl.Retrieve("%");

            //DataWindowChild dwc_clfs = dw_jzxxx.GetChild("clfs");
            //dwc_clfs.SetTransaction(this.AdoTransaction);
            //dwc_clfs.Retrieve("%");

            //DataWindowChild dwc_zjmsfs = dw_spdhsr.GetChild("zjmsfs");
            //dwc_zjmsfs.SetTransaction(this.AdoTransaction);
            //dwc_zjmsfs.Retrieve("%");

            //DataWindowChild dwc_yt = dw_spdhsr.GetChild("yt");
            //dwc_yt.SetTransaction(this.AdoTransaction);
            //dwc_yt.Retrieve("%");

            DataWindowChild dwc_hgjldw = dw_spdhsr.GetChild("hgjldw");
            dwc_hgjldw.SetTransaction(this.AdoTransaction);
            dwc_hgjldw.Retrieve("%");

            DataWindowChild dwc_fdjldw = dw_spdhsr.GetChild("fdjldw");
            dwc_fdjldw.SetTransaction(this.AdoTransaction);
            dwc_fdjldw.Retrieve("%");

            DataWindowChild dwc_bzzl = dw_spdhsr.GetChild("bzzl");
            dwc_bzzl.SetTransaction(this.AdoTransaction);
            dwc_bzzl.Retrieve("%");

            DataWindowChild dwc_sjyt = dw_spdhsr.GetChild("sjyt");
            dwc_sjyt.SetTransaction(this.AdoTransaction);
            dwc_sjyt.Retrieve("%");

            var operation = this.Request["operation"].ToString();
            this.SetParm("operation", operation);            
             
            if (this.Request["ywbh"] != null)
            {
                var ywbh = this.Request["ywbh"].ToString();
                this.SetParm("ywbh", ywbh);
                dw_master.Retrieve(ywbh);
                dw_jzxxx.Retrieve(ywbh);
                dw_spxx.Retrieve(ywbh);
                dw_zzxx.Retrieve(ywbh);
                dw_fsdz.Retrieve(ywbh);
                dw_sjzs.Retrieve(ywbh);
                dw_sjbzcl.Retrieve(ywbh);
                if (dw_zsbh.Retrieve(ywbh) <= 0)
                {
                    var sjzsbh_row = ds_sjzsbh.Retrieve("%");
                    int i = 1;
                    for (i = 1; i <= sjzsbh_row; i++)
                    {
                        var insert_row = dw_zsbh.InsertRow(0);
                        var zsbh = ds_sjzsbh.GetItemString(i, "zsbh");
                        dw_zsbh.SetItemString(insert_row, "zsbh", zsbh);
                    }
                };

                if (dw_sjsfdj.Retrieve(ywbh) <= 0)
                {
                    var sjsfdj_row = ds_sjsfdj.Retrieve("%");
                    int i = 1;
                    for (i = 1; i <= sjsfdj_row; i++)
                    {
                        var insert_row = dw_sjsfdj.InsertRow(0);
                        var sfdjbh = ds_sjsfdj.GetItemString(i, "sfdjbh");
                        dw_sjsfdj.SetItemString(insert_row, "sfdjbh", sfdjbh);
                        var sfdjmc = ds_sjsfdj.GetItemString(i, "sfdjmc");
                        dw_sjsfdj.SetItemString(insert_row, "sfdjmc", sfdjmc);
                    }

                }
            }


            //注册相关的js文件

            this.RegisterClientScriptInclude("W_Commodity_Select", "/Commodity/W_Commodity_Select.win.js");
            this.RegisterClientScriptInclude("W_Eport_Select", "/Xt_Popwin/W_Eport_Select.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Jnhyd_Select", "/Xt_Popwin/W_Jnhyd_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Dlxy_Select", "/Xt_Popwin/W_Hddz_Dlxy_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Mxd_Select", "/Xt_Popwin/W_Mxd_Select.win.js");
            this.RegisterClientScriptInclude("W_CommodityAdd", "/Commodity/W_CommodityAdd.win.js");
            //注册相关的js文件
            this.RegisterClientScriptInclude("W_Spdl_Select", "/Xt_Popwin/W_Spdl_Select.win.js");
            this.RegisterClientScriptInclude("W_Hssh_Select", "/Xt_Popwin/W_Hssh_Select.win.js");
            this.RegisterClientScriptInclude("W_Jldw_Select", "/Xt_Popwin/W_Jldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Bzdw_Select", "/Xt_Popwin/W_Bzdw_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_RqTime_Select", "/Xt_Popwin/W_RqTime_Select.win.js");
            ////注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }

 
             
    }    

}