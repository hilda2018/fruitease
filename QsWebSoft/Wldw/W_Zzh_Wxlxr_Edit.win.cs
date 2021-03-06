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
    public partial class W_Zzh_Wxlxr_Edit
    {
        public W_Zzh_Wxlxr_Edit()
        {

        }

        
        public override void OnLoad()
        {
            base.OnLoad();

            //DataWindowChild dwc = dw_1.GetChild("khbm");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("%");

            var Dlwtf = AppService.GetDlwtf();
            this.SetParm("Dlwtf", Dlwtf);


            if (this.Request["ID"] != null)
            {
                dw_1.Retrieve(this.Request["ID"].ToString());
            }
            else
            {
                dw_1.InsertRow(0);
                var id_max = this.Request["id_max"].ToString();
                dw_1.SetItemString(1, "userid", id_max);
                dw_1.SetItemString(1, "khbm", Dlwtf);
            }

            

            //注册相关的js文件 
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
