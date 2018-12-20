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
using System.Net;
using System.Drawing.Imaging;

namespace QsWebSoft.Szyw
{
    public partial class W_Wlxx_List
    {
        public W_Wlxx_List()
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
            this.dw_list.PageSize = 200;   //每页检索50条记录

            DataWindowChild dwc = dw_list.GetChild("zbr");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            DataWindowChild jcka = dw_list.GetChild("jcka");
            jcka.SetTransaction(this.AdoTransaction);
            jcka.Retrieve("");


            DataWindowChild gwgysmc = dw_gl.GetChild("gwgysmc");
            gwgysmc.SetTransaction(this.AdoTransaction);
            gwgysmc.Retrieve("");

            DataWindowChild hdzt = dw_gl.GetChild("hdzt");
            hdzt.SetTransaction(this.AdoTransaction);
            hdzt.Retrieve("");

            DataWindowChild pz = dw_gl.GetChild("pz");
            pz.SetTransaction(this.AdoTransaction);
            pz.Retrieve("");

            DataWindowChild rjka = dw_gl.GetChild("rjka");
            rjka.SetTransaction(this.AdoTransaction);
            rjka.Retrieve("");

            DataWindowChild lry = dw_gl.GetChild("lry");
            lry.SetTransaction(this.AdoTransaction);
            lry.Retrieve("");

            this.ds_1.DataWindowObject = "d_sys_modules_all";
            this.ds_1.Retrieve();

            var node = "002001";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
             DateTime date = DateTime.Parse(System.DateTime.Now.ToString("yyyy-MM-01")).AddMonths(-1);
         
            this.dp_begin.Value = date;
            
            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0 )
            {
                this.SetParm("operation", "open");
                //dw_list.Modify("DataWindow.Readonly=no");
            }
            else
            {
                this.SetParm("operation", "show");
                //dw_list.Modify("DataWindow.Readonly=no");
            }

            dw_gl.InsertRow(0);

            this.ds_ssbm.DataWindowObject = "dd_ssbm_select";
            this.ds_ssbm.Retrieve(userid);
            this.ddlb_ssbm.Items.Add("全部");
            for (int row = 1; row <= this.ds_ssbm.RowCount; row++)
            {
                var name = this.ds_ssbm.GetItemString(row, "name");
                this.ddlb_ssbm.Items.Add(name);
            }


            this.ds_lbgs.DataWindowObject = "dw_lbgs_select";
            this.ds_lbgs.Retrieve(userid, "QsWebSoft.Szyw.W_Wlxx_List", "dw_wlxx_list");

            for (int row = 1; row <= this.ds_lbgs.RowCount; row++)
            {
                var gsmc = ds_lbgs.GetItemString(row, "gsmc");
                this.ddlb_gsxz.Items.Add(gsmc);
            }


            var dd = DateTime.Parse(this.dp_end.Value.ToString("yyyy/MM/dd hh:mm"));
            // 数据检索
            //this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString("yyyy/MM/dd hh:mm")), DateTime.Parse(this.dp_end.Value.ToString("yyyy/MM/dd hh:mm")), "单证");
            this.dw_log.Retrieve(userid, "ywxx");
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Wlxx_List", "/Hddz/W_Wlxx_List.win.js");
            this.RegisterClientScriptInclude("W_Ywxx_Edit", "/Hddz/W_Ywxx_Edit.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy", "/Hddz/W_Hddz_Ycyy.win.js");   
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_FileWindow", "/Hddz/W_FileWindow.win.js");
             //this.RegisterClientScriptInclude("W_Test", "/Hddz/W_Test.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

            
        }
    }
}
