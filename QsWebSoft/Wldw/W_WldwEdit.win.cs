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



namespace QsWebSoft.Wldw
{
    public partial class W_WldwEdit
    {
        public W_WldwEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

          
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

            //DataWindowChild dwc = dw_master.GetChild("fgflx");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            if (this.Request["yw_khbm"] != null)
            {
                var yw_khbm =this.Request["yw_khbm"].ToString();
                dw_master.Retrieve(yw_khbm);
                dw_lxr.Retrieve(yw_khbm);
                dw_yh.Retrieve(yw_khbm);
                dw_jsbm.Retrieve(yw_khbm);
                dw_ohdlxy.Retrieve(yw_khbm);
                dw_log.Retrieve(userid, "wldw");
                dw_dz.Retrieve(yw_khbm);
                dw_khsdttsz.Retrieve(yw_khbm);
          }

              //注册相关的js文件
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
        }
    }
}