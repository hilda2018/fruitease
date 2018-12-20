﻿using System;
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


namespace QsWebSoft.Wldw
{
    public partial class W_GnkhsyList
    {
        public W_GnkhsyList()
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
            var node = "000712";

            var li_row = this.ds_1.FindRow("id='" + node + "'", 1, this.ds_1.RowCount);
            var role_no = this.ds_1.GetItemString(li_row, "role_no");
          
            this.SetParm("userid", userid);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            
            ds_role.Retrieve(userid, role_no);
            
            if (ds_role.RowCount > 0)
            {                
                this.SetParm("operation", "open");
            }
            else
            {
               
                this.SetParm("operation", "show");
            }


            // 数据检索
            this.dw_list.Retrieve(Dlwtf);
            
            //注册相关的js文件
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_GnkhsyList", "/Wldw/W_GnkhsyList.win.js");
            this.RegisterClientScriptInclude("W_GnkhsyEdit", "/Wldw/W_GnkhsyEdit.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            
        }
    }
}
