
using Attributes;
/**  版本信息模板在安装目录下，可自行修改。
* gavebackcontainer.cs
*
* 功 能： N/A
* 类 名： gavebackcontainer
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/8 14:07:23   $creater    初版
*
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Interfaces.Model
{
    /// <summary>
    /// 国内货代费用详细
    /// </summary>
    [Serializable]
    [DisplayName("guoneifee")]
    public partial class FreightCostsEntity
    {
        public FreightCostsEntity()
        { }
        #region Model
        /// <summary>
        /// 生成主键
        /// </summary>
        public string salescostid
        {
            get;set;
        }
        /// <summary>
        /// 费用编码
        /// </summary>
        public string costtypecode
        {
            get;set;
        }

        /// <summary>
        /// 费用名称
        /// </summary>
        [Description("费用名称")]
        public string CostTypeID
        { get; set; }
        /// <summary>
        /// 费用金额
        /// </summary>
        [Description("费用金额")]
        public string Cost
        { get; set; }

        #endregion Model
    }

    /// <summary>
    /// 货代费用对象
    /// </summary>
    public partial class FreightCosts1
    {
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        { get; set; }
        /// <summary>
        /// 集装箱号
        /// </summary>
        [Description("集装箱号")]
        public string containerno
        { get; set; }
        public List<FreightCostsEntity> list { get; set; }
    }
}

