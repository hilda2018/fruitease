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



namespace QsWebSoft.Import
{
    public partial class W_Import_Xml
    {
        public W_Import_Xml()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

            ReportService report = (ReportService)this.dw_list.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
        
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();
            var userip = AppService.GetIp();

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            this.SetParm("userip", userip);
            dw_list.Retrieve();

            //ע����Ҫʹ�õĵ������ڵ��¼���������JS�ļ�
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            this.RegisterClientScriptInclude("W_Import_Xml", "/Import/W_Import_Xml.Win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));

        }
    }
}
