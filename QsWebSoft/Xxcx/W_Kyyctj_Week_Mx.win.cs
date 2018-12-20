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
    public partial class W_Kyyctj_Week_Mx
    {
        public W_Kyyctj_Week_Mx()
        {
        }
        public override void OnLoad()
        {
            base.OnLoad();

            //系统模块编码
            //ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;
            //var userid = AppService.GetUserID();
            //var username = AppService.GetUserName();
            //var ShareMode = AppService.GetShareMode();
            //var Dlwtf = AppService.GetDlwtf();

            //this.SetParm("userid", userid);
            //this.SetParm("username", username);
            //this.SetParm("ShareMode", ShareMode);
            //this.SetParm("Dlwtf", Dlwtf);
             
            //this.ds_1.DataWindowObject = "d_sys_modules_all";
            //this.ds_1.Retrieve();
            
            //var node = "000717";
            //var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            ////DateTime date = DateTime.Parse(System.DateTime.Now.ToString("yyyy/01/01"));
            ////this.dp_begin.Value = date;
             
            //var role_no = this.ds_1.GetItemString(li_row, "role_no");

            //ds_role.Retrieve(userid, role_no);
            //if (ds_role.RowCount > 0)
            //{
            //    dw_list.Modify("DataWindow.Readonly=no");
            //    this.SetParm("Readonly", "no");
            //}
            //else
            //{
            //    dw_list.Modify("DataWindow.Readonly=yes");
            //    this.SetParm("Readonly", "yes");

            //};
            

            //var begindate = this.Request.QueryString["BeginDate"].ToString();
            //var enddate = this.Request.QueryString["EndDate"].ToString();
            //var zbr = this.Request.QueryString["Ry"].ToString();
            //var ycyybm = this.Request.QueryString["YcyyBm"].ToString();

            ////this.SetParm("begindate", begindate);
            ////this.SetParm("enddate", enddate);
            ////this.SetParm("zbr", zbr);
            ////this.SetParm("ycyybm", ycyybm);

            ////this.dp_begin.Value =DateTime.Parse(begindate.ToString());
            ////this.dp_end.Value =DateTime.Parse(enddate.ToString());
            ////Response.Write("<script>alert('" + begindate + "');</script>");

            //// 数据检索
            //this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), zbr, ycyybm);
            ////注册相关的js文件
            //this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            //this.RegisterClientScriptInclude("W_YcxxcxList", "/Xxcx/W_DzgzlgzList_Mx.win.js");
            //this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            ////注册需要使用的弹出窗口的事件处理程序的JS文件
            //this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

            var Week = this.Request["Week"].ToString();
            var Sjd = this.Request["Sjd"].ToString();
            var Kyycyy = this.Request["Kyycyy"].ToString();

            //this.dp_begin.Value = DateTime.Parse(begindate.ToString());
            //this.dp_end.Value = DateTime.Parse(enddate.ToString());

            dw_list.Retrieve(Week, Sjd, Kyycyy);
        }
    }
}
