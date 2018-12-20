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

            //检索分类
            ds_Categories.SetTransaction(this.AdoTransaction);
            ds_Categories.Retrieve();

            //检索第一个分类的产品资源
            if (ds_Categories.RowCount > 0)
            {
                dw_1.SetTransaction(this.AdoTransaction);
                dw_1.Retrieve(ds_Categories.GetItemInt32(1, "categoryid")); 
            }
            
            //行选择服务
            dw_1.RowSelection = RowSelectionStyle.Single; 


            
            //注意，树控件的JavaScript的类对象不是缺省的ExtPB.Net TreeView
            //而是自定义的一个JavaScript类对象, TV_Category,专门用于生成产品分类的树结构

            //树控件邦定的DataStore对象名称
            tv_1.StringData1 = "ds_Categories";


            //树控件关联的产品列表数据窗口对象名称
            tv_1.StringData2 = "dw_1";

            //注册JS文件
            this.RegisterClientScriptInclude("TV_Category", "/Beta3/TV_Category.js");

        }
    }
}
