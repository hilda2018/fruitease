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
    public partial class W_HdfyhycdfyEdit
    {
        public W_HdfyhycdfyEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            //DataWindowChild dwc = dw_master.GetChild("cllx");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            //DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            //dwc_xx.SetTransaction(this.AdoTransaction);
            //dwc_xx.Retrieve("%");

            //DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            //dwc_xl.SetTransaction(this.AdoTransaction);
            //dwc_xl.Retrieve("%");

            DataWindowChild dwc_fybm = dw_jzxxx.GetChild("fybm");
            dwc_fybm.SetTransaction(this.AdoTransaction);
            dwc_fybm.Retrieve("0109");

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
            var li_insert = 0;
            var jzxxx_sc_bz = ""; 
            if (this.Request["ywbh"] != null)
            {
                var ywbh = this.Request["ywbh"].ToString();
                var cxh = this.Request["cxh"];
                var yfkdbh = this.Request["yfkdbh"];
                this.SetParm("ywbh", ywbh);
                this.SetParm("cxh",cxh);
                
                dw_master.Retrieve(ywbh, cxh);
                yfkdbh = dw_master.GetItemString(1,"jzxxx_yfkdbh");
                if (yfkdbh == "" || yfkdbh == null)
                {                   
                    li_insert = dw_jzxxx.InsertRow(0);                 
                    dw_jzxxx.SetItemString(li_insert, "fybm", "010902");

                    jzxxx_sc_bz = dw_master.GetItemString(1, "jzxxx_sc_bz");
                     
                        dw_jzxxx.SetItemDecimal(li_insert, "je", 1100);
                   
                   
                    dw_jzxxx.SetItemString(li_insert, "ywbh", dw_master.GetItemString(1, "ywbh"));
                    dw_jzxxx.SetItemDouble(li_insert, "hddz_cxh", dw_master.GetItemDouble(1, "jzxxx_cxh"));
                    dw_jzxxx.SetItemDateTime(li_insert, "hdcsj", dw_master.GetItemDateTime(1, "jzxxx_hdcsj"));
                    dw_jzxxx.SetItemString(li_insert, "hth", dw_master.GetItemString(1, "hth"));
                    dw_jzxxx.SetItemString(li_insert, "khbm", dw_master.GetItemString(1, "khbm"));
                    dw_jzxxx.SetItemString(li_insert, "khmc", dw_master.GetItemString(1, "khmc"));
                    dw_jzxxx.SetItemString(li_insert, "khjc", dw_master.GetItemString(1, "khjc"));
                    dw_jzxxx.SetItemString(li_insert, "khpym", dw_master.GetItemString(1, "khpym"));
                    dw_jzxxx.SetItemString(li_insert, "jzxh", dw_master.GetItemString(1, "jzxxx_jzxh"));
                    dw_jzxxx.SetItemString(li_insert, "xx", dw_master.GetItemString(1, "jzxxx_xx"));
                    dw_jzxxx.SetItemString(li_insert, "xl", dw_master.GetItemString(1, "jzxxx_xl"));
                    dw_jzxxx.SetItemString(li_insert, "sjshrbm", dw_master.GetItemString(1, "jzxxx_sjshrbm"));
                    dw_jzxxx.SetItemString(li_insert, "sjshrmc", dw_master.GetItemString(1, "jzxxx_sjshrmc"));
                    dw_jzxxx.SetItemString(li_insert, "xhgqbm", dw_master.GetItemString(1, "xhgqbm"));
                    dw_jzxxx.SetItemString(li_insert, "xhgq", dw_master.GetItemString(1, "xhgq"));
                    dw_jzxxx.SetItemString(li_insert, "xhgqjc", dw_master.GetItemString(1, "xhgqjc"));
                    dw_jzxxx.SetItemString(li_insert, "xhgqpym", dw_master.GetItemString(1, "xhgqpym"));
                    dw_jzxxx.SetItemString(li_insert, "sc_bz", dw_master.GetItemString(1, "jzxxx_sc_bz"));
                    dw_jzxxx.SetItemString(li_insert, "hxfs", dw_master.GetItemString(1, "jzxxx_hxfs"));
                    dw_jzxxx.SetItemString(li_insert, "zjfscwld_bz", dw_master.GetItemString(1, "jzxxx_zjfscwld_bz"));
                    dw_jzxxx.SetItemString(li_insert, "zjfscwld_zyxx", dw_master.GetItemString(1, "jzxxx_zjfscwld_zyxx"));
                    dw_jzxxx.SetItemDateTime(li_insert, "fscwl_ddsj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_ddsj"));
                    dw_jzxxx.SetItemDateTime(li_insert, "fscwl_lksj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_lksj"));
                    dw_jzxxx.SetItemSqlDecimal(li_insert, "zlsj", dw_master.GetItemDecimal(1, "zlsj"));
                    dw_jzxxx.SetItemString(li_insert, "jdrbm", dw_master.GetItemString(1, "jdrbm"));
                    dw_jzxxx.SetItemString(li_insert, "jdrjc", dw_master.GetItemString(1, "jdrjc"));
                    dw_jzxxx.SetItemString(li_insert, "jdrmc", dw_master.GetItemString(1, "jdrmc"));
                    dw_jzxxx.SetItemString(li_insert, "jdrpym", dw_master.GetItemString(1, "jdrpym"));
                    var zjfscwld_bz = dw_master.GetItemString(1, "jzxxx_zjfscwld_bz");
                    var jschfscwld_bz = dw_master.GetItemString(1, "jzxxx_jschfscwld_bz");
                    if (zjfscwld_bz == "Y" || jschfscwld_bz =="Y")
                    {                     
                        li_insert = dw_jzxxx.InsertRow(0);
                        dw_jzxxx.SetItemString(li_insert, "fybm", "010903");
                        dw_jzxxx.SetItemDecimal(li_insert, "je", 0);
                        dw_jzxxx.SetItemString(li_insert, "ywbh", dw_master.GetItemString(1, "ywbh"));
                        dw_jzxxx.SetItemDouble(li_insert, "hddz_cxh", dw_master.GetItemDouble(1, "jzxxx_cxh"));
                        dw_jzxxx.SetItemDateTime(li_insert, "hdcsj", dw_master.GetItemDateTime(1, "jzxxx_hdcsj"));
                        dw_jzxxx.SetItemString(li_insert, "hth", dw_master.GetItemString(1, "hth"));
                        dw_jzxxx.SetItemString(li_insert, "khbm", dw_master.GetItemString(1, "khbm"));
                        dw_jzxxx.SetItemString(li_insert, "khmc", dw_master.GetItemString(1, "khmc"));
                        dw_jzxxx.SetItemString(li_insert, "khjc", dw_master.GetItemString(1, "khjc"));
                        dw_jzxxx.SetItemString(li_insert, "khpym", dw_master.GetItemString(1, "khpym"));
                        dw_jzxxx.SetItemString(li_insert, "jzxh", dw_master.GetItemString(1, "jzxxx_jzxh"));
                        dw_jzxxx.SetItemString(li_insert, "xx", dw_master.GetItemString(1, "jzxxx_xx"));
                        dw_jzxxx.SetItemString(li_insert, "xl", dw_master.GetItemString(1, "jzxxx_xl"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrbm", dw_master.GetItemString(1, "jzxxx_sjshrbm"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrmc", dw_master.GetItemString(1, "jzxxx_sjshrmc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqbm", dw_master.GetItemString(1, "xhgqbm"));
                        dw_jzxxx.SetItemString(li_insert, "xhgq", dw_master.GetItemString(1, "xhgq"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqjc", dw_master.GetItemString(1, "xhgqjc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqpym", dw_master.GetItemString(1, "xhgqpym"));
                        dw_jzxxx.SetItemString(li_insert, "sc_bz", dw_master.GetItemString(1, "jzxxx_sc_bz"));
                        dw_jzxxx.SetItemString(li_insert, "hxfs", dw_master.GetItemString(1, "jzxxx_hxfs"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_bz", dw_master.GetItemString(1, "jzxxx_zjfscwld_bz"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_zyxx", dw_master.GetItemString(1, "jzxxx_zjfscwld_zyxx"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_ddsj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_ddsj"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_lksj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_lksj"));
                        dw_jzxxx.SetItemSqlDecimal(li_insert, "zlsj", dw_master.GetItemDecimal(1, "zlsj"));
                        dw_jzxxx.SetItemString(li_insert, "jdrbm", dw_master.GetItemString(1, "jdrbm"));
                        dw_jzxxx.SetItemString(li_insert, "jdrjc", dw_master.GetItemString(1, "jdrjc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrmc", dw_master.GetItemString(1, "jdrmc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrpym", dw_master.GetItemString(1, "jdrpym"));

                    };

                    var xhgqjc = dw_master.GetItemString(1, "xhgqjc");
                    if (xhgqjc == "洋山" || xhgqjc == "洋三" || xhgqjc == "洋四")
                    {
                        li_insert = dw_jzxxx.InsertRow(0);
                        dw_jzxxx.SetItemString(li_insert, "fybm", "010901");
                        dw_jzxxx.SetItemDecimal(li_insert, "je", 800);
                        dw_jzxxx.SetItemString(li_insert, "ywbh", dw_master.GetItemString(1, "ywbh"));
                        dw_jzxxx.SetItemDouble(li_insert, "hddz_cxh", dw_master.GetItemDouble(1, "jzxxx_cxh"));
                        dw_jzxxx.SetItemDateTime(li_insert, "hdcsj", dw_master.GetItemDateTime(1, "jzxxx_hdcsj"));
                        dw_jzxxx.SetItemString(li_insert, "hth", dw_master.GetItemString(1, "hth"));
                        dw_jzxxx.SetItemString(li_insert, "khbm", dw_master.GetItemString(1, "khbm"));
                        dw_jzxxx.SetItemString(li_insert, "khmc", dw_master.GetItemString(1, "khmc"));
                        dw_jzxxx.SetItemString(li_insert, "khjc", dw_master.GetItemString(1, "khjc"));
                        dw_jzxxx.SetItemString(li_insert, "khpym", dw_master.GetItemString(1, "khpym"));
                        dw_jzxxx.SetItemString(li_insert, "jzxh", dw_master.GetItemString(1, "jzxxx_jzxh"));
                        dw_jzxxx.SetItemString(li_insert, "xx", dw_master.GetItemString(1, "jzxxx_xx"));
                        dw_jzxxx.SetItemString(li_insert, "xl", dw_master.GetItemString(1, "jzxxx_xl"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrbm", dw_master.GetItemString(1, "jzxxx_sjshrbm"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrmc", dw_master.GetItemString(1, "jzxxx_sjshrmc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqbm", dw_master.GetItemString(1, "xhgqbm"));
                        dw_jzxxx.SetItemString(li_insert, "xhgq", dw_master.GetItemString(1, "xhgq"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqjc", dw_master.GetItemString(1, "xhgqjc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqpym", dw_master.GetItemString(1, "xhgqpym"));
                        dw_jzxxx.SetItemString(li_insert, "sc_bz", dw_master.GetItemString(1, "jzxxx_sc_bz"));
                        dw_jzxxx.SetItemString(li_insert, "hxfs", dw_master.GetItemString(1, "jzxxx_hxfs"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_bz", dw_master.GetItemString(1, "jzxxx_zjfscwld_bz"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_zyxx", dw_master.GetItemString(1, "jzxxx_zjfscwld_zyxx"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_ddsj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_ddsj"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_lksj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_lksj"));
                        dw_jzxxx.SetItemSqlDecimal(li_insert, "zlsj", dw_master.GetItemDecimal(1, "zlsj"));
                        dw_jzxxx.SetItemString(li_insert, "jdrbm", dw_master.GetItemString(1, "jdrbm"));
                        dw_jzxxx.SetItemString(li_insert, "jdrjc", dw_master.GetItemString(1, "jdrjc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrmc", dw_master.GetItemString(1, "jdrmc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrpym", dw_master.GetItemString(1, "jdrpym"));
                    }
                    

                    var hxfs = dw_master.GetItemString(1, "jzxxx_hxfs");
                    if (hxfs == "空车还箱")
                    {
                        li_insert = dw_jzxxx.InsertRow(0);
                        dw_jzxxx.SetItemString(li_insert, "fybm", "010905");
                        dw_jzxxx.SetItemDecimal(li_insert, "je", 500);
                        dw_jzxxx.SetItemString(li_insert, "ywbh", dw_master.GetItemString(1, "ywbh"));
                        dw_jzxxx.SetItemDouble(li_insert, "hddz_cxh", dw_master.GetItemDouble(1, "jzxxx_cxh"));
                        dw_jzxxx.SetItemDateTime(li_insert, "hdcsj", dw_master.GetItemDateTime(1, "jzxxx_hdcsj"));
                        dw_jzxxx.SetItemString(li_insert, "hth", dw_master.GetItemString(1, "hth"));
                        dw_jzxxx.SetItemString(li_insert, "khbm", dw_master.GetItemString(1, "khbm"));
                        dw_jzxxx.SetItemString(li_insert, "khmc", dw_master.GetItemString(1, "khmc"));
                        dw_jzxxx.SetItemString(li_insert, "khjc", dw_master.GetItemString(1, "khjc"));
                        dw_jzxxx.SetItemString(li_insert, "khpym", dw_master.GetItemString(1, "khpym"));
                        dw_jzxxx.SetItemString(li_insert, "jzxh", dw_master.GetItemString(1, "jzxxx_jzxh"));
                        dw_jzxxx.SetItemString(li_insert, "xx", dw_master.GetItemString(1, "jzxxx_xx"));
                        dw_jzxxx.SetItemString(li_insert, "xl", dw_master.GetItemString(1, "jzxxx_xl"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrbm", dw_master.GetItemString(1, "jzxxx_sjshrbm"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrmc", dw_master.GetItemString(1, "jzxxx_sjshrmc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqbm", dw_master.GetItemString(1, "xhgqbm"));
                        dw_jzxxx.SetItemString(li_insert, "xhgq", dw_master.GetItemString(1, "xhgq"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqjc", dw_master.GetItemString(1, "xhgqjc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqpym", dw_master.GetItemString(1, "xhgqpym"));
                        dw_jzxxx.SetItemString(li_insert, "sc_bz", dw_master.GetItemString(1, "jzxxx_sc_bz"));
                        dw_jzxxx.SetItemString(li_insert, "hxfs", dw_master.GetItemString(1, "jzxxx_hxfs"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_bz", dw_master.GetItemString(1, "jzxxx_zjfscwld_bz"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_zyxx", dw_master.GetItemString(1, "jzxxx_zjfscwld_zyxx"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_ddsj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_ddsj"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_lksj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_lksj"));
                        dw_jzxxx.SetItemSqlDecimal(li_insert, "zlsj", dw_master.GetItemDecimal(1, "zlsj"));
                        dw_jzxxx.SetItemString(li_insert, "jdrbm", dw_master.GetItemString(1, "jdrbm"));
                        dw_jzxxx.SetItemString(li_insert, "jdrjc", dw_master.GetItemString(1, "jdrjc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrmc", dw_master.GetItemString(1, "jdrmc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrpym", dw_master.GetItemString(1, "jdrpym"));
                    }

                    var zlsj = dw_master.GetItemDecimal(1, "zlsj");
                    if (zlsj >1)
                    {
                        li_insert = dw_jzxxx.InsertRow(0);
                        dw_jzxxx.SetItemString(li_insert, "fybm", "010904");
                        dw_jzxxx.SetItemDecimal(li_insert, "je", 1000*(zlsj -1));
                        dw_jzxxx.SetItemString(li_insert, "ywbh", dw_master.GetItemString(1, "ywbh"));
                        dw_jzxxx.SetItemDouble(li_insert, "hddz_cxh", dw_master.GetItemDouble(1, "jzxxx_cxh"));
                        dw_jzxxx.SetItemDateTime(li_insert, "hdcsj", dw_master.GetItemDateTime(1, "jzxxx_hdcsj"));                  
                        dw_jzxxx.SetItemString(li_insert, "hth", dw_master.GetItemString(1, "hth"));
                        dw_jzxxx.SetItemString(li_insert, "khbm", dw_master.GetItemString(1, "khbm"));
                        dw_jzxxx.SetItemString(li_insert, "khmc", dw_master.GetItemString(1, "khmc"));
                        dw_jzxxx.SetItemString(li_insert, "khjc", dw_master.GetItemString(1, "khjc"));
                        dw_jzxxx.SetItemString(li_insert, "khpym", dw_master.GetItemString(1, "khpym"));
                        dw_jzxxx.SetItemString(li_insert, "jzxh", dw_master.GetItemString(1, "jzxxx_jzxh"));
                        dw_jzxxx.SetItemString(li_insert, "xx", dw_master.GetItemString(1, "jzxxx_xx"));
                        dw_jzxxx.SetItemString(li_insert, "xl", dw_master.GetItemString(1, "jzxxx_xl"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrbm", dw_master.GetItemString(1, "jzxxx_sjshrbm"));
                        dw_jzxxx.SetItemString(li_insert, "sjshrmc", dw_master.GetItemString(1, "jzxxx_sjshrmc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqbm", dw_master.GetItemString(1, "xhgqbm"));
                        dw_jzxxx.SetItemString(li_insert, "xhgq", dw_master.GetItemString(1, "xhgq"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqjc", dw_master.GetItemString(1, "xhgqjc"));
                        dw_jzxxx.SetItemString(li_insert, "xhgqpym", dw_master.GetItemString(1, "xhgqpym"));
                        dw_jzxxx.SetItemString(li_insert, "sc_bz", dw_master.GetItemString(1, "jzxxx_sc_bz"));
                        dw_jzxxx.SetItemString(li_insert, "hxfs", dw_master.GetItemString(1, "jzxxx_hxfs"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_bz", dw_master.GetItemString(1, "jzxxx_zjfscwld_bz"));
                        dw_jzxxx.SetItemString(li_insert, "zjfscwld_zyxx", dw_master.GetItemString(1, "jzxxx_zjfscwld_zyxx"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_ddsj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_ddsj"));
                        dw_jzxxx.SetItemDateTime(li_insert, "fscwl_lksj", dw_master.GetItemDateTime(1, "jzxxx_fscwl_lksj"));
                        dw_jzxxx.SetItemSqlDecimal(li_insert, "zlsj", dw_master.GetItemDecimal(1, "zlsj"));
                        dw_jzxxx.SetItemString(li_insert, "jdrbm", dw_master.GetItemString(1, "jdrbm"));
                        dw_jzxxx.SetItemString(li_insert, "jdrjc", dw_master.GetItemString(1, "jdrjc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrmc", dw_master.GetItemString(1, "jdrmc"));
                        dw_jzxxx.SetItemString(li_insert, "jdrpym", dw_master.GetItemString(1, "jdrpym"));

                    };

                }
                else
                {
                    dw_jzxxx.Retrieve(yfkdbh);                    
                  
                }

            }

            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Yh_Select", "/Xt_Popwin/W_Wldw_Yh_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Zfdx_Select", "/Xt_Popwin/W_Wldw_Zfdx_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Jdr_Select", "/Xt_Popwin/W_Wldw_Jdr_Select.win.js"); 
            //注册相关的js文件
              //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}