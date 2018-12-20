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
    public partial class W_PhtjList_thmx_cmd
    {
        public W_PhtjList_thmx_cmd()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码
            //ReportService report = (ReportService)this.dw_phtj_thmx.Services.Add(ServiceName.Report);
            //report.RequestorDrawTitle = false;
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

            var begindate = this.Request["dp_date"].ToString();
            var sscd = this.Request["sscd"].ToString();
            //this.SetParm("dp_date", dp_date);
            //this.SetParm("sscd", sscd);

            this.ds_2.DataWindowObject = "dw_ywy_wldw_select_all";

            //DateTime dt = Convert.ToDateTime(dp_date);
            //本月第一天时间   
            //DateTime dt_First = dt.AddDays(-(dt.Day) + 1);

            this.dw_phtj_thmx_cmd.Retrieve(DateTime.Parse(this.dp_date.Value.ToString()), sscd);
        }
    }
}
