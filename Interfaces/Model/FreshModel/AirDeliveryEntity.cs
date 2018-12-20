
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
    /// 空运提货
    /// </summary>
    [Serializable]
    public partial class airdeliveryEntity
    {
        public airdeliveryEntity()
        { }
        #region Model
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string suppliersellid
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }

        /// <summary>
        /// 通过检疫点时间yyyy-MM-dd HH:mm:ss
        /// </summary>
        [Description("通过检疫点时间")]
        public string quarantinetime
        {
            set;
            get;
        }

        /// <summary>
        /// 检疫放行方式0：正常放行1：扣柜
        /// </summary>
        [Description("检疫放行方式")]
        public string quarantinemethod
        {
            set;
            get;
        }

        /// <summary>
        /// 处理结果0：熏蒸1：放行2：退运3：销毁4：贴标签5：辐照
        /// </summary>
        [Description("处理结果")]
        public string quarantineresult
        {
            set;
            get;
        }

        /// <summary>
        /// 是否送实验室0：是
        /// </summary>
        [Description("是否送实验室")]
        public string islab
        {
            set;
            get;
        }

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
    /// 空运提货收货人
    /// </summary>
    [Serializable]
    public partial class airdeliveryitem
    {
        public airdeliveryitem()
        { }
        #region Model
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string suppliersellid
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }

        /// <summary>
        /// 提货人主键 格式 ywbh + "_shr_" + cxh
        /// </summary>
        [Description("提货人主键")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string airdeliveryitemid
        {
            set;
            get;
        }

        /// <summary>
        /// 收货单位
        /// </summary>
        [Description("收货单位")]
        public string consigneecompany
        {
            set;
            get;
        }

        /// <summary>
        /// 收货人
        /// </summary>
        [Description("收货人")]
        public string contacts
        {
            set;
            get;
        }

        /// <summary>
        /// 收货地址
        /// </summary>
        [Description("收货地址")]
        public string deliveryaddress
        {
            set;
            get;
        }

        /// <summary>
        /// 联系电话
        /// </summary>
        [Description("联系电话")]
        public string contactnumber
        {
            set;
            get;
        }



        /// <summary>
        /// 提货数量
        /// </summary>
        [Description("提货数量")]
        public string num
        {
            set;
            get;
        }


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
    /// 空运提货收货人 传递对象
    /// </summary>
    public class airdeliveryitemEntity
    {
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string suppliersellid
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }


        public List<airdeliveryitem> shr { get; set; }
    }
}

