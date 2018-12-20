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
using QsWebSoft.Helper;


namespace QsWebSoft.xt
{
    public partial class W_Xtdm_Yjxx 
    {
        public W_Xtdm_Yjxx()
        {

        }
        public override void OnLoad()
        {

            //ϵͳģ�����
            base.OnLoad();
            ReportService report = (ReportService)this.dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();
            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            //���Ӹ��ڵ�
            tv_1.RootNodeData = "00";

            tv_1.PictureIndex = 2;
            tv_1.SelectedPictureIndex = 2;

            tv_1.LeavePictureIndex = 3;
            tv_1.LeaveSelectedPictureIndex = 3; 


            ////�������ڵ��DataStore��������
            tv_1.DataStore.DataWindowObject = "dw_yjlx_list";
            tv_1.DataStore.Reset();

            tv_1.DataField = "yjlxbh";
            tv_1.LabelField = "yjlxmc";
            tv_1.ParentField = "syjbh";
            tv_1.LeaveField = "islast";

            //�ӽڵ�����ݼ��ط�ʽ
            tv_1.LoadTreeNodesStyle = LoadTreeNodesStyle.Retrive;

            //���ڵ�������ݼ����ĵ�һ�������������Ǹýڵ��Data���Ե�ֵ
            tv_1.DataStore.Retrieve("00",userid);

            
           

            this.SetParm("userid", userid);
            this.SetParm("username", username);
            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);

            this.ds_1.DataWindowObject = "dd_jdr_list";
            this.ds_1.Retrieve();
            ddlb_jdrjc.Items.Add("ȫ��");
            for (int row = 1; row <= this.ds_1.RowCount; row++)
            {
                var jdrjc = this.ds_1.GetItemString(row, "jdrjc");
                ddlb_jdrjc.Items.Add(jdrjc);
            }

            this.dw_1.Retrieve( "00",userid);
            this.dw_1.SetFilter("jdrjc = '�Ϻ�ŷ��'");
            this.dw_1.SetFilter("jdrjc = 'δ��ѡ'");

            this.RegisterClientScriptInclude("W_Xtdm_Yjxx_cmd", "/xt/W_Xtdm_Yjxx_cmd.win.js");
            this.RegisterClientScriptInclude("W_HddzEdit", "/Hddz/W_HddzEdit.win.js");
            this.RegisterClientScriptInclude("W_Xtdm_Yjxx", "/xt/W_Xtdm_Yjxx.win.js");
            this.RegisterClientScriptInclude("W_Filter", "/Hddz/W_Filter.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Ycyy_Yjxx", "/Hddz/W_Hddz_Ycyy_Yjxx.win.js");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            
        }
    }
}
