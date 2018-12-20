
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
    /// 还箱超期
    /// </summary>
    [Serializable]
    [DisplayName("returnbox")]
    public partial class GaveBackContainerEntity
    {
        public GaveBackContainerEntity()
        { }
        #region Model
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
        [ColumnAttribute(ColumnType.guidPK)]
        public string containerno
        { get; set; }
        /// <summary>
        /// 还堆场时间
        /// </summary>
        [Description("还堆场时间")]
        public string returnboxtime
        { get; set; }
        /// <summary>
        /// 免箱期
        /// </summary>
        [Description("免箱期")]
        public string freetime
        { get; set; }
        /// <summary>
        /// 实际超期费用
        /// </summary>
        [Description("实际超期费用")]
        public string acturalmoney
        { get; set; }
        /// <summary>
        /// 客户提供免箱期天数
        /// </summary>
        [Description("客户提供免箱期天数")]
        public string offerfree
        { get; set; }
        /// <summary>
        /// 超期费确认日期
        /// </summary>
        [Description("超期费确认日期")]
        public string overmoneyconfirmtime
        { get; set; }
        /// <summary>
        /// 预计超期费用
        /// </summary>
        [Description("预计超期费用")]
        public string expectedcost
        { get; set; }

        #endregion Model
    }

    /// <summary>
    /// 还想超期xml封装对象
    /// </summary>
    public partial class GaveBackContainer1
    {
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        { get; set; }

        public List<GaveBackContainerEntity> takegoods { get; set; }
    }
}

