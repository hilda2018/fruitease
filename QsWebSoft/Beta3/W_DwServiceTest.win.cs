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
    public partial class W_DwServiceTest
    {
        public W_DwServiceTest()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();

            //Ϊ���ݴ�������һ���Զ�������ݴ��ڷ���
            DWServiceTest service = new DWServiceTest();

            //���÷������
            service.ContextControl = "ts_1";

            //���뵽���ݴ��ڷ����б���,ע����������ǲ����ִ�Сд��
          dw_1.Services.Add("srv_Test", service);

            

        }
    }
}
