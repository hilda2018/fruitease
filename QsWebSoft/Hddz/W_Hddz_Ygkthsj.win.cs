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
    public partial class W_Hddz_Ygkthsj
    {
        public W_Hddz_Ygkthsj()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
 
       
            if (this.Request["ywbh"] != null)
            {
                var ywbh = this.Request["ywbh"].ToString();
                dw_list.Retrieve(ywbh);
            }
           
            //ע����ص�js�ļ�
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");

            //ע����Ҫʹ�õĵ������ڵ��¼����������JS�ļ�
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}