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


namespace QsWebSoft.Beta3
{
    public partial class W_TreeView
    {
        public W_TreeView()
        {

        }
        public override void OnLoad()
        {

           

            base.OnLoad();

            //��������
            ds_Categories.SetTransaction(this.AdoTransaction);
            ds_Categories.Retrieve();

            //������һ������Ĳ�Ʒ��Դ
            if (ds_Categories.RowCount > 0)
            {
                dw_1.SetTransaction(this.AdoTransaction);
                dw_1.Retrieve(ds_Categories.GetItemInt32(1, "categoryid")); 
            }
            
            //��ѡ�����
            dw_1.RowSelection = RowSelectionStyle.Single; 


            
            //ע�⣬���ؼ���JavaScript���������ȱʡ��ExtPB.Net TreeView
            //�����Զ����һ��JavaScript�����, TV_Category,ר���������ɲ�Ʒ��������ṹ

            //���ؼ����DataStore��������
            tv_1.StringData1 = "ds_Categories";


            //���ؼ������Ĳ�Ʒ�б����ݴ��ڶ�������
            tv_1.StringData2 = "dw_1";

            //ע��JS�ļ�
            this.RegisterClientScriptInclude("TV_Category", "/Beta3/TV_Category.js");

        }
    }
}
