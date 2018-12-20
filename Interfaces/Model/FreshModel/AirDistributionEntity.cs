/**  版本信息模板在安装目录下，可自行修改。
* airdistribution.cs
*
* 功 能： N/A
* 类 名： airdistribution
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/10 13:30:56   $creater    初版
*
*/
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    /// 空运配货
    /// </summary>
    [Serializable]
    [DisplayName("cargo")]
    public partial class AirDistributionEntity
    {
        public AirDistributionEntity()
        { }
        #region Model
        /// <summary>
        /// 配货id
        /// </summary>
        [Description("配货id")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string cargoid
        { get; set; }
        /// <summary>
        /// 司机
        /// </summary>
        [Description("司机")]
        public string driver
        { get; set; }
        /// <summary>
        /// 电话
        /// </summary>
        [Description("电话")]
        public string tel
        { get; set; }
        /// <summary>
        /// 车牌号
        /// </summary>
        [Description("车牌号")]
        public string carplate
        { get; set; }
        /// <summary>
        /// 出港区时间 
        /// </summary>
        [Description("出港区时间 ")]
        public string departuretime
        { get; set; }
        /// <summary>
        /// 到检疫点时间 
        /// </summary>
        [Description("到检疫点时间 ")]
        public string arrivequarantinetime
        { get; set; }

        #endregion Model


    }

    /// <summary>
    /// 空运配货分录
    /// </summary>
    [DisplayName("cargoitem")]
    public partial class AirDistributionItemEntity
    {
        #region Model
        /// <summary>
        /// 收货人ID
        /// </summary>
        [Description("收货人ID")]
        public string airdeliveryitemid
        { get; set; }
        
        /// <summary>
        /// 装车数量
        /// </summary>
        [Description("装车数量")]
        public string loadingquantity
        { get; set; }
        /// <summary>
        /// 确认收货时间
        /// </summary>
        [Description("确认收货时间")]
        public string receivegoodstime
        { get; set; }

        #endregion Model
    }


    /// <summary>
    /// 空运配货分录封装对象
    /// </summary>
    public partial class AirDistributionItem1Entity
    {
        /// <summary>
        /// 配货id
        /// </summary>
        [Description("配货id")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string cargoid
        { get; set; }

        public List<AirDistributionItemEntity> items { get; set; }
    }
}

