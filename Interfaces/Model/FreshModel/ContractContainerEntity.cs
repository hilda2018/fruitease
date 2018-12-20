
using Attributes;
/**  版本信息模板在安装目录下，可自行修改。
* contractcontainer.cs
*
* 功 能： N/A
* 类 名： contractcontainer
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/7/20 10:41:19   $creater    初版
*
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Interfaces.Model
{
    /// <summary>
    /// 集装箱信息表
    /// </summary>
    [Serializable]
    [DisplayName("contractcontainer")]
    public partial class contractcontainer
    {
        public contractcontainer()
        { }
        #region Model
        private string _suppliersellid;
        /// <summary>
        /// 供应商代卖ID
        /// </summary>
        [Description("供应商代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }
        private string _containerno;
        /// <summary>
        /// 集装箱号
        /// </summary>
        [Description("集装箱号")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string containerNo
        {
            set { _containerno = value; }
            get { return _containerno; }
        }
        private string _xlfs;
        /// <summary>
        /// 处理方式
        /// </summary>
        [Description("处理方式")]
        public string xlfs
        {
            set { _xlfs = value; }
            get { return _xlfs; }
        }
        private string _boxcase;
        /// <summary>
        /// 箱型
        /// </summary>
        [Description("箱型")]
        public string boxcase
        {
            set { _boxcase = value; }
            get { return _boxcase; }
        }
        private string _loadtype;
        /// <summary>
        /// 装货类型
        /// </summary>
        [Description("装货类型")]
        public string loadtype
        {
            set { _loadtype = value; }
            get { return _loadtype; }
        }
        private string _amount;
        /// <summary>
        /// 托盘或散装数量
        /// </summary>
        [Description("托盘或散装数量")]
        public string amount
        {
            set { _amount = value; }
            get { return _amount; }
        }

        //public string 
        #endregion Model


    }

    /// <summary>
    /// 集装箱封装
    /// </summary>
    public partial class contractcontainer1
    {
        public string SupplierSellID { get; set; }

        public List<contractcontainer> contractcontainer { get; set; }
    }
    //public
}

