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




namespace QsWebSoft.Hddz
{
    public partial class W_HddzEdit_Ky
    {
        public W_HddzEdit_Ky()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
            
            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            DataWindowChild dwc = dw_master.GetChild("mdg");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("%");

            DataWindowChild dwc_bm = dw_master.GetChild("bm");
            dwc_bm.SetTransaction(this.AdoTransaction);
            dwc_bm.Retrieve("%");

            DataWindowChild dwc_master_clfs = dw_master.GetChild("clfs");
            dwc_master_clfs.SetTransaction(this.AdoTransaction);
            dwc_master_clfs.Retrieve("%");

            DataWindowChild dwc_td_mdg = dw_tdzb.GetChild("mdg");
            dwc_td_mdg.SetTransaction(this.AdoTransaction);
            dwc_td_mdg.Retrieve("%");

            DataWindowChild dwc_td_clfs = dw_tdzb.GetChild("clfs");
            dwc_td_clfs.SetTransaction(this.AdoTransaction);
            dwc_td_clfs.Retrieve("%");

            DataWindowChild dwc_td_ycddm = dw_tdzb.GetChild("ycddm");
            dwc_td_ycddm.SetTransaction(this.AdoTransaction);
            dwc_td_ycddm.Retrieve("%");

            DataWindowChild dwc_td_qiyunguodm = dw_tdzb.GetChild("qiyunguodm");
            dwc_td_qiyunguodm.SetTransaction(this.AdoTransaction);
            dwc_td_qiyunguodm.Retrieve("%");

            DataWindowChild dwc_td_jcka = dw_tdzb.GetChild("jcka");
            dwc_td_jcka.SetTransaction(this.AdoTransaction);
            dwc_td_jcka.Retrieve("%");


            DataWindowChild dwc_fp_jgfs = dw_fpzb.GetChild("jgfs");
            dwc_fp_jgfs.SetTransaction(this.AdoTransaction);
            dwc_fp_jgfs.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            //DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            //dwc_xx.SetTransaction(this.AdoTransaction);
            //dwc_xx.Retrieve("%");

            //DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            //dwc_xl.SetTransaction(this.AdoTransaction);
            //dwc_xl.Retrieve("%");

            DataWindowChild dwc_clfs = dw_jzxxx.GetChild("clfs");
            dwc_clfs.SetTransaction(this.AdoTransaction);
            dwc_clfs.Retrieve("%");

            //DataWindowChild dwc_clqy = dw_master.GetChild("clqy");
            //dwc_clqy.SetTransaction(this.AdoTransaction);
            //dwc_clqy.Retrieve("", "");


            DataWindowChild dwc_gwgysbm_td = dw_tdzb.GetChild("gwgysbm");
            dwc_gwgysbm_td.SetTransaction(this.AdoTransaction);
            dwc_gwgysbm_td.Retrieve("%");

            DataWindowChild dwc_jydwbm_td = dw_tdzb.GetChild("jydwbm");
            dwc_jydwbm_td.SetTransaction(this.AdoTransaction);
            dwc_jydwbm_td.Retrieve("%");

            
            DataWindowChild dwc_jydwbm_fp = dw_fpzb.GetChild("jydwbm");
            dwc_jydwbm_fp.SetTransaction(this.AdoTransaction);
            dwc_jydwbm_fp.Retrieve("%");

            DataWindowChild dwc_wbbb_fp = dw_fpzb.GetChild("wbbb");
            dwc_wbbb_fp.SetTransaction(this.AdoTransaction);
            dwc_wbbb_fp.Retrieve("%");

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
                dw_sjzs.Retrieve(ywbh);                  
                dw_sjbzcl.Retrieve(ywbh);
                dw_dzqk.Retrieve(ywbh);
                dw_sxgsjjl.Retrieve(ywbh);
                ds_jdr.Retrieve(userid);
                var zsbh_rowcount = dw_zsbh.Retrieve(ywbh);
                
                if (zsbh_rowcount <= 0)
                {
                    var sjzsbh_row = ds_sjzsbh.Retrieve("%");
                    var zsbh_sum = "";
                    var zsmc_sum = "";
                    int i = 1;

                    for (i = 1; i <= sjzsbh_row; i++)
                    {
                        var insert_row = dw_zsbh.InsertRow(0);
                        var zsbh = ds_sjzsbh.GetItemString(i, "zsbh");
                        dw_zsbh.SetItemString(insert_row, "zsbh", zsbh);
                        var sfxz = ds_sjzsbh.GetItemString(i, "sfxz");
                        dw_zsbh.SetItemString(insert_row, "sfxz", sfxz);
                        var zsmc = ds_sjzsbh.GetItemString(insert_row, "zsmc");
                        if (sfxz == "Y")
                        {
                            if (zsbh_sum == "" || zsbh_sum == null)
                            {
                                zsmc_sum = zsmc;
                                zsbh_sum = zsbh;
                            }
                            else
                            {
                                zsmc_sum = zsmc_sum + "," + zsmc;
                                zsbh_sum = zsbh_sum + zsbh;
                            }
                        }
                    }
                    this.SetParm("zsmc", zsmc_sum);
                    this.SetParm("zsbh", zsbh_sum);

                };
                var sjsfdj_rowcount = dw_sjsfdj.Retrieve(ywbh);
                if (sjsfdj_rowcount <= 0)
                {
                    var sjsfdj_row = ds_sjsfdj.Retrieve("%");
                    var sfdj = "";
                    var sfdjbm = "";
                    int i = 1;
                    for (i = 1; i <= sjsfdj_row; i++)
                    {
                        var insert_row = dw_sjsfdj.InsertRow(0);
                        var sfdjbh = ds_sjsfdj.GetItemString(i, "sfdjbh");
                        dw_sjsfdj.SetItemString(insert_row, "sfdjbh", sfdjbh);
                        var sfdjmc = ds_sjsfdj.GetItemString(i, "sfdjmc");
                        dw_sjsfdj.SetItemString(insert_row, "sfdjmc", sfdjmc);
                        var sfxz = ds_sjsfdj.GetItemString(i, "sfxz");
                        dw_sjsfdj.SetItemString(insert_row, "sfxz", sfxz);
                        var cxh = ds_sjsfdj.GetItemDecimal(i, "cxh");
                        dw_sjsfdj.SetItemDecimal(insert_row, "cxh", cxh);
                        if (sfxz == "Y")
                        {
                            if (sfdj == "" || sfdj == null)
                            {
                                sfdj = sfdjmc;
                                sfdjbm = sfdjbh;
                            }
                            else
                            {
                                sfdj = sfdj + "," + sfdjmc;
                                sfdjbm = sfdjbm + sfdjbh;
                            }
                        }
                    }

                    this.SetParm("sfdj", sfdj);
                    this.SetParm("sfdjbm", sfdjbm);

                }
            }

            var sfymx = this.Request["sfymx"];
            this.SetParm("sfymx", sfymx);

            dw_log.Retrieve(userid, "kybj");

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
            this.RegisterClientScriptInclude("W_Wldw_Lxr_Select", "/Xt_Popwin/W_Wldw_Lxr_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Shdz_Select", "/Xt_Popwin/W_Wldw_Shdz_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_Lxr_New", "/Xt_Popwin/W_WldwAdd_Lxr_New.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_Shdz_New", "/Xt_Popwin/W_WldwAdd_Shdz_New.win.js");
            this.RegisterClientScriptInclude("W_Clqy_Select", "/Xt_Popwin/W_Clqy_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Dzsd", "/Hddz/W_Hddz_Dzsd.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Zqhc", "/Hddz/W_Hddz_Zqhc.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}