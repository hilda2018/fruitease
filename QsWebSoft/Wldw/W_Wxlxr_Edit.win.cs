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
    public partial class W_Wxlxr_Edit
    {
        public W_Wxlxr_Edit()
        {

        }

        
        public override void OnLoad()
        {
            base.OnLoad();

            DataWindowChild dwc = dw_1.GetChild("khbm");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("%");

           
            if (this.Request["ID"] != null)
            {
                dw_1.Retrieve(this.Request["ID"].ToString());
            }
            else
            {
                dw_1.InsertRow(0);
            }

            //ע����ص�js�ļ� 
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            //ע����Ҫʹ�õĵ������ڵ��¼����������JS�ļ�
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}