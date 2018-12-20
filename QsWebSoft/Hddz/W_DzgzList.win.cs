using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.IO;

using Sybase.DataWindow;
using TXSoft.Common;
using TXSoft.ExtPB;
using TXSoft.DataStore;

namespace QsWebSoft.Hddz
{
    public partial class W_DzgzList
    {
        public W_DzgzList()
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

            DataWindowChild dwc = dw_bsnr.GetChild("sdzbry");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

            dwc = dw_bsnr.GetChild("sdfbry");
            dwc.SetTransaction(this.AdoTransaction);
            dwc.Retrieve("");

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

            var node = "000151";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;

           
            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0 )
            {
                dw_list.Modify("DataWindow.Readonly=no");
                this.SetParm("Readonly", "no");
            }
            else
            {
                dw_list.Modify("DataWindow.Readonly=yes");
                this.SetParm("Readonly", "yes");

            }

            //接单人
            this.ds_3.DataWindowObject = "d_sys_userroles_wldw";
            this.ds_3.Retrieve(userid);
            this.ddlb_jdrjc.Items.Add("全部");
            for (int row = 1; row <= ds_3.RowCount; row++)
            {
                this.ddlb_jdrjc.Items.Add(ds_3.GetItemString(row, "dwjc"));
            }

            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, Tybm, Sfqytybm,"N","N",3,"全部");

             
             
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js"); 
            this.RegisterClientScriptInclude("W_DzgzList", "/Hddz/W_DzgzList.win.js"); 
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Dzsd", "/Hddz/W_Hddz_Dzsd.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }


       
  
    }
}
