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
    public partial class W_WldwOldEdit
    {
        public W_WldwOldEdit()
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
 

            if (this.Request["yw_khbm"] != null)
            {
                var yw_khbm =this.Request["yw_khbm"].ToString();
                dw_master.Retrieve(yw_khbm); 
          }


            //注册相关的js文件
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
        }
    }
}