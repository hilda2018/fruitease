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
    public partial class W_DllTest
    {
        public W_DllTest()
        {

        }
        public override void RegisterClientScript()
        {
            //��Ϊ ExtPB_Demo.js��һ��������,��õķ������Ǽ�����Page�Ļ��࣬��basePage���棬
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");

            //�ɳ����Զ�ע�ᣬ����Ҫ�ֹ�д���봦����
            //////////////////this.RegisterClientScriptInclude("W_DllTest", "/Beta3/W_DllTest.win.js"); 

            //���û���Ĺ��ܣ��������������IsRegisterScriptFileΪtrue ���Զ�ע�ᴰ������Ӧ��js�ļ�
            base.RegisterClientScript();

           
        }
        public override void OnLoad()
        {
            base.OnLoad();
         }
    }
}
