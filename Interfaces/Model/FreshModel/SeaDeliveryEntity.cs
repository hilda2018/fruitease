
using Attributes;
/**  版本信息模板在安装目录下，可自行修改。
* dometic.cs
*
* 功 能： N/A
* 类 名： dometic
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/6/28 14:34:03   $creater    初版
*
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Interfaces.Model
{
    /// <summary>
    /// 海运提货分录
    /// </summary>
    [Serializable]
    [DisplayName("takegoods")]
    public partial class seadeliveryEntity
    {
        public seadeliveryEntity()
        { }
        #region Model
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }
        /// <summary>
        /// 集装箱号
        /// </summary>
        [ColumnAttribute(ColumnType.guidPK)]
        public string containerno { get; set; }

        /// <summary>
        /// 计划提货时间
        /// </summary>
        public string takegoodstime { get; set; }

        /// <summary>
        /// 出港区时间
        /// </summary>
        public string docklandsleavetime { get; set; }

        /// <summary>
        /// 到检疫点时间
        /// </summary>
        public string quarantinepointarrivetime { get; set; }

        /// <summary>
        /// 检疫点名称
        /// </summary>
        public string quarantinepointname { get; set; }

        /// <summary>
        /// 检疫点状态 0正常放行 1扣柜
        /// </summary>
        public string quarantinepointstate { get; set; }

        

        /// <summary>
        /// 出检疫点时间
        /// </summary>
        [Description("出检疫点时间")]
        public string quarantinepointleavetime
        {
            set;
            get;
        }
        /// <summary>
        /// 处理结果1：熏蒸2：放行3：退运4：销毁5：贴标签6：辐照
        /// </summary>
        [Description("处理结果")]
        public string quarantineresult
        {
            set;
            get;
        }

        /// <summary>
        /// 是否送实验室 0否 1是
        /// </summary>
        [Description("是否送实验室")]
        public string islab
        {
            set;
            get;
        }




        /// <summary>
        /// 司机联系人
        /// </summary>
        public string drivercontact { get; set; }
        /// <summary>
        /// 联系电话
        /// </summary>
        public string drivertel
        {
            set;
            get;
        }
        /// <summary>
        /// 车牌号
        /// </summary>
        public string platenumber { get; set; }

        ///// <summary>
        ///// 提货时间
        ///// </summary>
        //public string realtakegoodstime { get; set; }

        

        #endregion Model
    }

    /// <summary>
    /// 海运提货分录收货人
    /// </summary>
    [Serializable]
    public partial class seadelivery1Entity
    {
        public seadelivery1Entity()
        { }
        #region Model
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }
        /// <summary>
        /// 收货人信息
        /// </summary>
        public List<seadeliveryEntity> takegoods { get; set; }

        #endregion Model
    }

    /// <summary>
    /// 海运提货收货人
    /// </summary>
    [Serializable]
    [DisplayName("item")]
    public partial class seadeliveryitem
    {
        public seadeliveryitem()
        { }
        #region Model
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }

        /// <summary>
        /// 集装箱号
        /// </summary>
        [Description("集装箱号")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string containerno
        {
            set;
            get;
        }

        /// <summary>
        /// 收货单位
        /// </summary>
        [Description("收货单位")]
        public string Customerconsigneeid
        {
            set;
            get;
        }

        /// <summary>
        /// 收货人
        /// </summary>
        [Description("收货人")]
        public string dtgcontacts
        {
            set;
            get;
        }

        /// <summary>
        /// 收货地址
        /// </summary>
        [Description("收货地址")]
        public string dtgdeliveryaddress
        {
            set;
            get;
        }

        /// <summary>
        /// 联系电话
        /// </summary>
        [Description("联系电话")]
        public string dtgcontactnumber
        {
            set;
            get;
        }



        /// <summary>
        /// 收货时间
        /// </summary>
        [Description("收货时间")]
        public string dtgrealgoodsarrivetime
        {
            set;
            get;
        }

        /// <summary>
        /// 提货时间
        /// </summary>
        public string takegoodstime { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Description("备注")]
        public string note
        {
            set;
            get;
        }


        #endregion Model
    }

    /// <summary>
    /// 海运提货收货人 传递对象
    /// </summary>
    public class seadeliveryitemEntity
    {
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }


        public List<seadeliveryitem> shr { get; set; }
    }
}

