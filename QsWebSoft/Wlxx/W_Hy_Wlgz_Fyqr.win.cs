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
    public partial class W_Hy_Wlgz_Fyqr
    {
        public W_Hy_Wlgz_Fyqr()
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
            dw_rwxz.Retrieve(ywbh, int.Parse(hddz_cxh));
            dw_wldz.Retrieve(ywbh, int.Parse(hddz_cxh));
              
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Cj_Select", "/Xt_Popwin/W_Cj_Select.win.js");

            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
