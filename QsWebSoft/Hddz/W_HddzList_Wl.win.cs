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
using System.Linq;
using System.IO;
using Microsoft.Win32;
using System.Configuration;
using System.Diagnostics;
using QsWebSoft.Helper;

namespace QsWebSoft.Hddz
{
    public partial class W_HddzList_Wl
    {
        public W_HddzList_Wl()
        {
        }
         

        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var Tybm = AppService.GetTybm();
            var Sfqytybm = AppService.GetSfqytybm();
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("Tybm", Tybm);
            this.SetParm("Sfqytybm", Sfqytybm);
       

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

            DataWindowChild dwc = dw_list.GetChild("zbr");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            //dwc = dw_list.GetChild("zdr");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //dwc = dw_list.GetChild("dz_zdy");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            //dwc = dw_list.GetChild("yw_Kptzs_dzjh_zdy");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            this.ds_2.DataWindowObject = "dw_xtdm_area2";
            this.ds_2.Retrieve();
            ddlb_ctr_area2.Items.Add("全部");
            for (int row = 1; row <= this.ds_2.RowCount; row++)
            {
                var ctr_area2 = this.ds_2.GetItemString(row, "ctr_area2");
                ddlb_ctr_area2.Items.Add(ctr_area2);
            }

            this.ds_jyj.DataWindowObject = "dw_wldw_jyj_select";
            this.ds_jyj.Retrieve();
            ddlb_jyj.Items.Add("全部");
            for (int row = 1; row <= this.ds_jyj.RowCount; row++)
            {
                var jyjjc = this.ds_jyj.GetItemString(row, "khjc");
                ddlb_jyj.Items.Add(jyjjc);
            }

            var node = "000108";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-60);
            this.dp_begin.Value = date;
            
            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0 )
            {
                btn_new.Visible = true;
                btn_duplicate.Visible = true;
                btn_delete.Visible = true;
                this.SetParm("operation", "open");
                dw_list.Modify("DataWindow.Readonly=no");
            }
            else
            {
                btn_new.Visible = false;
                btn_duplicate.Visible = false;
                btn_delete.Visible = false;
                this.SetParm("operation", "show");
                dw_list.Modify("DataWindow.Readonly=yes");
            }

            ds_role_kybmjl.Retrieve(userid, "076");
            if (ds_role_kybmjl.RowCount > 0)
            {
                this.SetParm("kybmjl", "Y");
                btn_zgggbz.Visible = true;
            }
            else
            {
                this.SetParm("kybmjl", "N");
                btn_zgggbz.Visible = false;
            }
            ds_role_hybmjl.Retrieve(userid, "077");
            if (ds_role_hybmjl.RowCount > 0)
            {
                this.SetParm("hybmjl", "Y");
            }
            else
            {
                this.SetParm("hybmjl", "N");
            }

            this.ds_3.DataWindowObject = "d_sys_userroles_wldw";
            this.ds_3.Retrieve(userid);
            this.ddlb_jdrjc.Items.Add("全部");
            for (int i = 1; i < this.ds_3.RowCount;i++ ) {
                this.ddlb_jdrjc.Items.Add(this.ds_3.GetItemString(i, "dwjc"));
            }


            //if (userid == "1003")
            //{
            //    btn_qgld.Visible = true;
            //    btn_yspt.Visible = true;
            //}
            

            // 数据检索
            this.dw_list.Retrieve(userid, DateTime.Parse(this.dp_begin.Value.ToString("yyyy/MM/dd hh:mm")), DateTime.Parse(this.dp_end.Value.ToString("yyyy/MM/dd hh:mm")), "zj", "未靠港", Dlwtf, "单证", Tybm, Sfqytybm, "全部", "N", "全部", "全部","全部");
            this.dw_log.Retrieve(userid, "hdlb");
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_HddzList_Wl", "/Hddz/W_HddzList_Wl.win.js");
            this.RegisterClientScriptInclude("W_HddzEdit", "/Hddz/W_HddzEdit.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Beizhu", "/Hddz/W_Hddz_Beizhu.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ygkthsj", "/Hddz/W_Hddz_Ygkthsj.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Edit_Yflr", "/Hddz/W_Hddz_Edit_Yflr.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Dzsd", "/Hddz/W_Hddz_Dzsd.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy", "/Hddz/W_Hddz_Ycyy.win.js");
            this.RegisterClientScriptInclude("W_Fj_Edit", "/Hddz/W_Fj_Edit.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Main1", "/Hddz/W_Main1.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Lxr_Select", "/Xt_Popwin/W_Wldw_Lxr_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Shdz_Select", "/Xt_Popwin/W_Wldw_Shdz_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_Lxr_New", "/Xt_Popwin/W_WldwAdd_Lxr_New.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Zqhc", "/Hddz/W_Hddz_Zqhc.win.js");
            this.RegisterClientScriptInclude("W_FtpEdit", "/pdfwj/W_FtpEdit.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_FileWindow", "/Hddz/W_FileWindow.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Wl_Select", "/Xt_Popwin/W_Hddz_Wl_Select.win.js");
            //this.RegisterClientScriptInclude("W_Test", "/Hddz/W_Test.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }
    }
}
