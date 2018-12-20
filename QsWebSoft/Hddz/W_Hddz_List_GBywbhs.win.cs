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


namespace QsWebSoft.Hddz
{
    public partial class W_Hddz_List_GBywbhs
    {
        public W_Hddz_List_GBywbhs() 
        {

        }

        
        public override void OnLoad()
        {
            base.OnLoad();

            dw_1.RowSelection = RowSelectionStyle.Extended;
            dw_2.RowSelection = RowSelectionStyle.Extended;

            var ywbh = this.Request["ywbh"].ToString();

            this.SetParm("ywbh", ywbh);

            var yshdfygj = QsWebSoft.PubMethod.GjhYwbh_yshdfygj(ywbh);
            var skhxgl = QsWebSoft.PubMethod.GjhYwbh_skhxgl(ywbh);

            this.SetParm("yshdfygj", yshdfygj.ToString());
            this.SetParm("skhxgl", skhxgl.ToString());

            //string id = string.Empty;
            //if (this.Request["id"] != null)
            //    id = this.Request["id"].ToString();
            DateTime date1 = DateTime.Now;
            this.dp_end.Value = date1;
            DateTime date = System.DateTime.Now.AddDays(-60);
            this.dp_begin.Value = date;
            
            dw_1.Retrieve(DateTime.Parse(this.dp_begin.Value.ToString("yyyy/MM/dd hh:mm")), DateTime.Parse(this.dp_end.Value.ToString("yyyy/MM/dd hh:mm")));
            dw_2.Retrieve(ywbh);          

            dw_4.InsertRow(0);
        }
    }
}
