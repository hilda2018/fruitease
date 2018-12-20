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
    public partial class W_GnkhsyEdit
    {
        public W_GnkhsyEdit()
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

            

            if (this.Request["tybm"] != null)
            {
                var tybm = this.Request["tybm"].ToString(); 
                dw_master.Retrieve(tybm);
                dw_lxr.Retrieve(tybm);
                dw_yh.Retrieve(tybm);
                dw_jsbm.Retrieve(tybm);
                
                  dw_gnkh_list.Retrieve(tybm);
                  DataWindowChild dwc = dw_gnkh_lxr.GetChild("khbm");
                  dwc.SetTransaction(this.AdoTransaction);
                  dwc.Retrieve(tybm);

                  dw_gnkh_lxr.Retrieve(tybm);
                  dw_gnkh_shdz.Retrieve(tybm); 
          }

         
            //注册相关的js文件
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
        }
    }
}