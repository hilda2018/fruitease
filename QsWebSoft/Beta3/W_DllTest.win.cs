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
            //因为 ExtPB_Demo.js是一个公共库,最好的方法，是加入了Page的基类，即basePage里面，
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");

            //由程序自动注册，不需要手工写代码处理了
            //////////////////this.RegisterClientScriptInclude("W_DllTest", "/Beta3/W_DllTest.win.js"); 

            //调用基类的功能，如果窗口设置了IsRegisterScriptFile为true 会自动注册窗口所对应的js文件
            base.RegisterClientScript();

           
        }
        public override void OnLoad()
        {
            base.OnLoad();
         }
    }
}
