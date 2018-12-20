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


namespace QsWebSoft.Xxcx
{
    public partial class W_Khywqkcx_List
    {
        public W_Khywqkcx_List()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
            ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            // 数据分页检索,必须在数据检索之前设置
            //this.dw_list.PageSize = 50;   //每页检索50条记录

            this.ds_1.DataWindowObject="d_sys_modules_all";
            this.ds_1.Retrieve();
                      
            var userid = AppService.GetUserID();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var node = "000906";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
               
            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0)
            {
                dw_list.Modify("DataWindow.Readonly=no");
                this.SetParm("Readonly", "no");
            }
            else
            {
                dw_list.Modify("DataWindow.Readonly=yes");
                this.SetParm("Readonly", "yes");

            }

            //// 数据检索
            //dw_cxtj.InsertRow(0);
            //var sjkgsj_ks_jsl = dw_cxtj.GetItemDate(1, "sjkgsj_ks_jsl");
            //dw_cxtj.SetItemDate(1, "sjkgsj_ks", sjkgsj_ks_jsl);

            //DataWindowChild dwc_mdka = dw_cxtj.GetChild("mdka");
            //dwc_mdka.SetTransaction(this.AdoTransaction);
            //dwc_mdka.Retrieve("%");


            //this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()),"单证");

            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");

            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_GstjzbList", "/Xxcx/W_GstjzbList.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
