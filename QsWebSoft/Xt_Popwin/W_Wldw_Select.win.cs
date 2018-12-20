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
                fgflx = "������˾";
            }

            if (fgflx == "bggs")
            {
                fgflx = "���ع�˾";
            }

            if (khlx == null || khlx == "")
            {
                khlx = "ȫ��";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if(khlx=="gwgys")
            {
                khlx = "���⹩Ӧ��";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "wts")
            {
                khlx = "ί����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "gncgs")
            {
                khlx = "���ڲɹ���";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "wmgs")
            {
                khlx = "��ó��˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hdgs")
            {
                khlx = "������˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "bggs")
            {
                khlx = "���ع�˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "bjgs")
            {
                khlx = "���칫˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "yh")
            {
                khlx = "����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hg")
            {
                khlx = "����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jyd")
            {
                khlx = "���ߵ�";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "cxd")
            {
                khlx = "�����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jy_jyd")
            {
                //var jyjsjjgdm = this.Request["jyjsjjgdm"];
                //this.SetParm("jyjsjjgdm", jyjsjjgdm);  
                khlx = "���ߵ�";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
                //dw_1.SetFilter("sjjgdm = '" + jyjsjjgdm + "'");
                //dw_1.Filter();
            }
            else if (khlx == "jy_mrjyd")
            {
                //var jyjsjjgdm = this.Request["jyjsjjgdm"];
                //this.SetParm("jyjsjjgdm", jyjsjjgdm);
                khlx = "���ߵ�";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
                //dw_1.SetFilter("sjjgdm = '" + jyjsjjgdm + "'");
                //dw_1.Filter();
            }
            else if (khlx == "jyj")
            {
                khlx = "���߾�";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jyfwgs")
            {
                khlx = "���߷���˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
 
            else if (khlx == "cgsorhkgs")
            {
                khlx = "����˾���չ�˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
             }
             else if (khlx == "cdorhd")
            {
                khlx = "��������";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
             }
             else if (khlx == "cd")
            {
                khlx = "����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "mt")
            {
                khlx = "��ͷ";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hymt")
            {
                khlx = "������ͷ";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "cgsfxd") 
            {
                khlx = "����˾�����";

                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "dc")
            {
                khlx = "�ѳ�";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "fxgs")
            {
                khlx = "���乫˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "hgcyd")
            {
                khlx = "���ز����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }

            else if (khlx == "sc")
            {
                khlx = "�г�";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "zjs")
            {
                khlx = "�м���";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "gwhd")
            {
                khlx = "�������";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "qt")
            {
                khlx = "����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "cxd")
            {
                khlx = "�����";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "sqr")
            {
                khlx = "������";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "jdr")
            {
                khlx = "�ӵ���";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "wlgs")
            {
                khlx = "������˾";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "all")
            {
                khlx = "ȫ��";
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
                dw_1.Retrieve(ShareMode, userid, Dlwtf, "ȫ��");
                dw_1.SetFilter("tybm = '"+tybm+"'");
                dw_1.Filter();
            }

            dw_1.Modify("DataWindow.Readonly=yes");

            this.RegisterClientScriptInclude("W_WldwAdd", "/Xt_Popwin/W_WldwAdd.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            
        }
    }
}
