﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QsWebSoft.Beta3
{
    /// <summary>
    /// 数据窗口服务测试
    /// </summary>
    public class DWServiceTest:TXSoft.DataStore.BaseService
    {
        public DWServiceTest()
        {
            //设置当前数据窗口服务，在客户端所使用的pb对象名称
            //该对象必须继承于 n_cst_dwsrv，这个属性非常重要，否则extpb.net不能在客户端正常加载所需要的PB对象
            this.PBObjectType = "n_cst_dwsrv_test";
        }

        /// <summary>
        /// 设置数据窗口服务所需要关联的控件名称,n_cst_dwsrv_test，需要关联一个tabStrip控件
        /// </summary>
        public string ContextControl { get; set; }


        /// <summary>
        /// 把当前服务所需要的使用的参数，传到客户端
        /// 客户端在正常实例化PB对象后，会通过调用 of_LoadParm把参数传过去。
        /// 如果需要传递多个参数，则用字符串连接起来，然后在PB客户端对字符串进行分解解析
        /// 如 parm1=223|parm2=323|parm3=test
        /// </summary>
        /// <returns></returns>
        public override string GetParm()
        {
            return "parm1=test|parm2=1223|parm3=" + this.ContextControl;
        }
  
    }
}