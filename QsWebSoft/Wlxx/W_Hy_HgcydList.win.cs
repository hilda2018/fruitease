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
    public partial class W_Hy_HgcydList
    {
        public W_Hy_HgcydList()
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

            //DataWindowChild dwc = dw_list.GetChild("ywy");
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

            var node = "000207";
            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
            DateTime date = System.DateTime.Now.AddDays(-180);
            this.dp_begin.Value = date;

           
            ds_role.Retrieve(userid, role_no);
            if (ds_role.RowCount > 0 )
            {
                dw_list.Modify("DataWindow.Readonly=no");
            }
            else
            {
                dw_list.Modify("DataWindow.Readonly=yes");

            }
            this.ds_2.DataWindowObject = "d_sys_userroles_wldw";
            this.ds_2.Retrieve(userid);
            this.ddlb_jdrjc.Items.Add("全部");
            for (int row = 1; row <= ds_2.RowCount; row++)
            {
                this.ddlb_jdrjc.Items.Add(this.ds_2.GetItemString(row, "dwjc"));
            }


            // 数据检索
            this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "未海关查验", userid, "全部", "全部");
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Hy_HgcydList", "/Wlxx/W_Hy_HgcydList.win.js");
            this.RegisterClientScriptInclude("W_Hy_Wlgz", "/Wlxx/W_Hy_Wlgz.win.js");
            this.RegisterClientScriptInclude("W_Sj_Select", "/Xt_Popwin/W_Sj_Select.win.js");
            this.RegisterClientScriptInclude("W_Sjmc_Select", "/Xt_Popwin/W_Sjmc_Select.win.js");
            this.RegisterClientScriptInclude("W_Cj_Select", "/Xt_Popwin/W_Cj_Select.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");

            this.RegisterClientScriptInclude("W_Sfdqlm_Select", "/Xt_Popwin/W_Sfdqlm_Select.win.js");
            this.RegisterClientScriptInclude("W_Sfdqlm_Select_New", "/Xt_Popwin/W_Sfdqlm_Select_New.win.js");
            this.RegisterClientScriptInclude("W_Hy_Wlgz_Rwdz", "/Xt_Popwin/W_Hy_Wlgz_Rwdz.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Bdsbh_Select", "/Xt_Popwin/W_Bdsbh_Select.win.js");
          
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
