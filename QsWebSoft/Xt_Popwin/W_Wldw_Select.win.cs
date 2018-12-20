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


namespace QsWebSoft.Xt_Popwin
{
    public partial class W_Wldw_Select
    {
        public W_Wldw_Select()
        {
            
        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var khlx = "";
            var fgflx = "";
            var czd_jsdwbm = "";
            var czd_jdrbm = "";
           
            var userid = AppService.GetUserID();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            khlx=this.Request["khlx"];
            fgflx = this.Request["fgflx"];
            czd_jsdwbm = this.Request["czd_jsdwbm"];
            czd_jdrbm = this.Request["czd_jdrbm"];
          

            this.SetParm("khlx", khlx);
            this.SetParm("fgflx", fgflx);
            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            
            if (!string.IsNullOrEmpty(czd_jsdwbm))
            {
                this.SetParm("czd_jsdwbm", czd_jsdwbm);
            }
            if (!string.IsNullOrEmpty(czd_jdrbm))
            {
                this.SetParm("czd_jdrbm", czd_jdrbm);
            }
            

            if (khlx == "gwgys" || khlx == "cgsorhkgs" || khlx == "cdorhd" || khlx == "dc")
            {
                btn_Add.Visible = true;
            }
            else
            {
                btn_Add.Visible = false;
            };

            if (fgflx == "hdgs")
            {
                fgflx = "货代公司";
            }

            if (fgflx == "bggs")
            {
                fgflx = "报关公司";
            }

            if (khlx == null || khlx == "")
            {
                khlx = "全部";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if(khlx=="gwgys")
            {
                khlx = "国外供应商";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "wts")
            {
                khlx = "委托商";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "gncgs")
            {
                khlx = "国内采购商";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "wmgs")
            {
                khlx = "外贸公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hdgs")
            {
                khlx = "货代公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "bggs")
            {
                khlx = "报关公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "bjgs")
            {
                khlx = "报检公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "yh")
            {
                khlx = "银行";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hg")
            {
                khlx = "海关";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jyd")
            {
                khlx = "检疫点";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "cxd")
            {
                khlx = "拆箱点";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jy_jyd")
            {
                //var jyjsjjgdm = this.Request["jyjsjjgdm"];
                //this.SetParm("jyjsjjgdm", jyjsjjgdm);  
                khlx = "检疫点";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
                //dw_1.SetFilter("sjjgdm = '" + jyjsjjgdm + "'");
                //dw_1.Filter();
            }
            else if (khlx == "jy_mrjyd")
            {
                //var jyjsjjgdm = this.Request["jyjsjjgdm"];
                //this.SetParm("jyjsjjgdm", jyjsjjgdm);
                khlx = "检疫点";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
                //dw_1.SetFilter("sjjgdm = '" + jyjsjjgdm + "'");
                //dw_1.Filter();
            }
            else if (khlx == "jyj")
            {
                khlx = "检疫局";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jyfwgs")
            {
                khlx = "检疫服务公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
 
            else if (khlx == "cgsorhkgs")
            {
                khlx = "船公司航空公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
             }
             else if (khlx == "cdorhd")
            {
                khlx = "船代航代";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
             }
             else if (khlx == "cd")
            {
                khlx = "车队";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "mt")
            {
                khlx = "码头";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hymt")
            {
                khlx = "海运码头";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "cgsfxd") 
            {
                khlx = "船公司放箱点";

                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "dc")
            {
                khlx = "堆场";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "fxgs")
            {
                khlx = "放箱公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hgcyd")
            {
                khlx = "海关查验点";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }

            else if (khlx == "sc")
            {
                khlx = "市场";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "zjs")
            {
                khlx = "中间商";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "gwhd")
            {
                khlx = "国外货代";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "qt")
            {
                khlx = "其他";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "cxd")
            {
                khlx = "拆箱点";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "sqr")
            {
                khlx = "申请人";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jdr")
            {
                khlx = "接单人";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "wlgs")
            {
                khlx = "物流公司";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "all")
            {
                khlx = "全部";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "fgf")
            {
                dw_1.DataWindowObject = "dw_ywy_wldw_fgf_select";
                dw_1.Retrieve(fgflx);
            }
            else if (khlx == "gnkh_tybm")
            {                 
                 var tybm = this.Request["tybm"]; 
                 this.SetParm("tybm", tybm); 
                dw_1.Retrieve(ShareMode, userid, Dlwtf, "全部");
                dw_1.SetFilter("tybm = '"+tybm+"'");
                dw_1.Filter();
            }

            dw_1.Modify("DataWindow.Readonly=yes");

            this.RegisterClientScriptInclude("W_WldwAdd", "/Xt_Popwin/W_WldwAdd.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            
        }
    }
}
