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

            //为数据窗口增加一个自定义的数据窗口服务
            DWServiceTest service = new DWServiceTest();

            //设置服务参数
            service.ContextControl = "ts_1";

            //加入到数据窗口服务列表中,注意服务名称是不区分大小写的
          dw_1.Services.Add("srv_Test", service);

            

        }
    }
}
