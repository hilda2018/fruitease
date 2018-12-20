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
    public partial class W_Hy_WlgzEdit
    {
        public W_Hy_WlgzEdit()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            var operation = "new";
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();

            this.SetParm("userid", userid);
            this.SetParm("username", username);

            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            var rwbh = this.Request["Rwbh"].ToString();
            var ywbh = this.Request["Ywbh"].ToString();
            var hddz_cxh = this.Request["Hddz_cxh"].ToString();
            var rwmc = this.Request["Rwmc"].ToString();
            this.SetParm("rwbh", rwbh);
            this.SetParm("ywbh", ywbh);
            this.SetParm("hddz_cxh", hddz_cxh);
            this.SetParm("rwmc", rwmc);
            dw_rwxz.Retrieve(ywbh, int.Parse(hddz_cxh),rwbh);


            dw_master.Retrieve(ywbh, int.Parse(hddz_cxh));
            //var rwmc_zw = "";
            //if (rwmc == "gq")
            //{
            //    rwmc_zw = "����";
            //}
            //if (rwmc == "jyd")
            //{
            //    rwmc_zw = "���ߵ�";
            //}
            //if (rwmc == "sc")
            //{
            //    rwmc_zw = "�г�";
            //}
            //if (rwmc == "jschzy")
            //{
            //    rwmc_zw = "���г���ת��";
            //}
            //if (rwmc == "dc")
            //{
            //    rwmc_zw = "�ѳ�";
            //}

            dw_jzxxx.Retrieve(ywbh, int.Parse(hddz_cxh));


            //};

           
            //ע����ص�js�ļ�
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Cj_Select", "/Xt_Popwin/W_Cj_Select.win.js");
            this.RegisterClientScriptInclude("W_Sjmc_Select", "/Xt_Popwin/W_Sjmc_Select.win.js");
            this.RegisterClientScriptInclude("W_Sj_Select", "/Xt_Popwin/W_Sj_Select.win.js");
            //ע����Ҫʹ�õĵ������ڵ��¼���������JS�ļ�
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }
    }
}
