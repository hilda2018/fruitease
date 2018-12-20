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


namespace QsWebSoft.Yw_Zjgl
{
    public partial class W_Hdfyyshdfygj_Gbh_Ywbh_List
    {
        public W_Hdfyyshdfygj_Gbh_Ywbh_List()
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
           
          
            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
       

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

            //DataWindowChild dwc = dw_list.GetChild("zbr");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("");

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

            var node = "000590";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-90);
            this.dp_begin.Value = date;

            this.ds_2.DataWindowObject = "dd_jdr_list";
            this.ds_2.Retrieve();
            ddlb_jdr.Items.Add("全部");
            for (int row = 1; row <= this.ds_2.RowCount; row++)
            {
                var jdrjc = this.ds_2.GetItemString(row, "jdrjc");
                ddlb_jdr.Items.Add(jdrjc);
            }

            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {

              
                btn_delete.Visible = true;
                this.SetParm("operation", "open");
                dw_list.Modify("DataWindow.Readonly=no");
            }
            else
            {
               
                btn_delete.Visible = false;
                this.SetParm("operation", "show");
                dw_list.Modify("DataWindow.Readonly=yes");
            }

            
            // 数据检索
            this.dw_list.Retrieve("无归集时间", DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), Dlwtf, "全部","全部",0);
            dw_log.Retrieve(userid, "hdgj");
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy", "/Hddz/W_Hddz_Ycyy.win.js");
            this.RegisterClientScriptInclude("W_Hdfyyshdfygj_Gbh_Ywbh_List", "/Yw_Zjgl/W_Hdfyyshdfygj_Gbh_Ywbh_List.win.js");
            this.RegisterClientScriptInclude("W_HdfyyshdfygjEdit", "/Yw_Zjgl/W_HdfyyshdfygjEdit.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
