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
    public partial class W_Hy_Wlgz_Fyqr_old
    {
        public W_Hy_Wlgz_Fyqr_old()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            var operation =  this.Request["operation"].ToString(); 
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();

            this.SetParm("userid", userid);
            this.SetParm("username", username);

            DataWindowChild dwc_fybm = dw_jzxxx.GetChild("fybm");
            dwc_fybm.SetTransaction(this.AdoTransaction);
            dwc_fybm.Retrieve("06");


            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            var ywbh = this.Request["Ywbh"].ToString();
            var hddz_cxh = this.Request["Hddz_cxh"].ToString();
            var rwbh = this.Request["Rwbh"].ToString();
            this.SetParm("ywbh", ywbh);
            this.SetParm("hddz_cxh", hddz_cxh);             
            this.SetParm("rwbh", rwbh);             
           
            dw_master.Retrieve(rwbh);           
            dw_jzxxx.Retrieve(rwbh);
            dw_rwxz.Retrieve(ywbh, int.Parse(hddz_cxh), rwbh);
            if (operation == "open")
            {
                if (dw_jzxxx.RowCount < 1)
                {
                    var jsfs = dw_master.GetItemString(1, "jsfs");
                    var mdd = dw_master.GetItemString(1, "mdd");
                    var lx = dw_master.GetItemString(1, "lx");                    
                    var qyd = dw_master.GetItemString(1, "qyd");
                    var hxfs = dw_rwxz.GetItemString(1, "hxfs");
                    var hxssmt = dw_master.GetItemString(1, "hxssmt");
                    if (jsfs == null)
                    {
                        jsfs = "";
                    }
                    if (mdd == null)
                    {
                        mdd = "";
                    }
                    if (lx == null)
                    {
                        lx = "";
                    }
                    if (qyd == null)
                    {
                        qyd = "";
                    }
                    if (hxfs == null)
                    {
                        hxfs = "";
                    }
                    if (hxssmt == null)
                    {
                        hxssmt = "";
                    }
                    if (jsfs == "不用结算") {
                        jsfs = "包月结算";
                    };
                    if (lx == "还箱")
                    {
                        ds_fybz.Retrieve(lx, mdd, qyd, jsfs, hxfs, hxssmt);
                    }
                    else
                    {
                        ds_fybz.Retrieve(lx, qyd, mdd, jsfs, hxfs, hxssmt);
                    }

                    if (ds_fybz.RowCount > 0)
                    {
                        int i = 1;
                        int li_insertrow = 0;
                        for (i = 1; i <= ds_fybz.RowCount; i++)
                        {
                            var je = ds_fybz.GetItemDecimal(i, "je");
                            if (je != 0)
                            {
                                li_insertrow = dw_jzxxx.InsertRow(0);
                                var fybm = ds_fybz.GetItemString(i, "fybm");
                                var fymc = ds_fybz.GetItemString(i, "fymc");
                                dw_jzxxx.SetItemString(li_insertrow, "fybm", fybm);
                                dw_jzxxx.SetItemString(li_insertrow, "fymc", fymc);
                                dw_jzxxx.SetItemDecimal(li_insertrow, "fyje", je);
                            }
                        }
                    }
                }
            }

           
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Cj_Select", "/Xt_Popwin/W_Cj_Select.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
