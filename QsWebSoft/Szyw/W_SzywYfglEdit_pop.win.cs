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


namespace QsWebSoft.Szyw
{
    public partial class W_SzywYfglEdit_pop
    {
        public W_SzywYfglEdit_pop()
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

            DateTime date = System.DateTime.Now.AddDays(-60);
            this.dp_begin.Value = date;


            dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString("yyyy/MM/dd hh:mm")), DateTime.Parse(this.dp_end.Value.ToString("yyyy/MM/dd hh:mm")), "接单日期");
            dw_fymc.Retrieve();

            // 数据检索
            //this.dw_list.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString()), DateTime.Parse(this.dp_end.Value.ToString()), "未靠港", Dlwtf, "实际到港",userid);
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_SzywYfglEdit_pop", "/Szyw/W_SzywYfglEdit_pop.win.js");
            this.RegisterClientScriptInclude("W_SzywYfglEdit", "/Szyw/W_SzywYfglEdit.win.js");
            this.RegisterClientScriptInclude("W_SzywYfglList", "/Szyw/W_SzywYfglList.win.js");
            
            this.RegisterClientScriptInclude("W_SzywEdit_Kggl", "/Szyw/W_SzywEdit_Kggl.win.js");
            this.RegisterClientScriptInclude("W_SzywEdit", "/Szyw/W_SzywEdit.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
