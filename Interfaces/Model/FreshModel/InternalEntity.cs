
using Attributes;
/**  版本信息模板在安装目录下，可自行修改。
* internal.cs
*
* 功 能： N/A
* 类 名： internal
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/6/28 14:29:27   $creater    初版
*
*/
using System;
using System.ComponentModel;

namespace Interfaces.Model
{
    /// <summary>
    /// 国际物流信息
    /// </summary>
    [Serializable]
    public partial class internalEntity
    {
        public internalEntity()
        { }
        #region Model
        /// <summary>
        /// 代卖主表ID
        /// </summary>
        [Description("代卖主表ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID { get; set; }

        /// <summary>
        /// 船公司
        /// </summary>
        [Description("船公司")]
        public string TransportCompany { get; set; }

        private string _transportnumber;
        /// <summary>
        /// 船名航空名
        /// </summary>
        [Description("船名航空名")]
        public string TransportNumber
        {
            set { _transportnumber = value; }
            get { return _transportnumber; }
        }
        private string _voyagenumber;
        /// <summary>
        /// 船次
        /// </summary>
        [Description("船次")]
        public string VoyageNumber
        {
            set { _voyagenumber = value; }
            get { return _voyagenumber; }
        }
        /// <summary>
        /// 是否中转 0否1是
        /// </summary>
        public string IfTransit { get; set; }
        private string _transittportnumber;
        /// <summary>
        /// 中转船名/航班号
        /// </summary>
        [Description("中转船名/航班号")]
        public string TransitTportNumber
        {
            set { _transittportnumber = value; }
            get { return _transittportnumber; }
        }
        private string _transitvoyagenumber;
        /// <summary>
        /// 中转航次
        /// </summary>
        [Description("中转航次")]
        public string TransitVoyageNumber
        {
            set { _transitvoyagenumber = value; }
            get { return _transitvoyagenumber; }
        }
        private string _transport;
        /// <summary>
        /// 运输方式
        /// </summary>
        [Description("运输方式")]
        public string transport
        {
            set { _transport = value; }
            get { return _transport; }
        }

        /// <summary>
        /// 提单号
        /// </summary>
        [Description("提单号")]
        public string LadingBill
        {
            get; set;
        }
        /// <summary>
        /// 提单类型
        /// </summary>
        [Description("提单类型")]
        public string LadingBillType
        {
            get; set;
        }
        /// <summary>
        /// 提单类型2
        /// </summary>
        [Description("提单类型")]
        public string ladingbilltypecnname
        {
            get; set;
        }

        /// <summary>
        /// 船公司
        /// </summary>
        [Description("船公司")]
        public string shipcompany
        {
            get; set;
        }
        /// <summary>
        /// 船公司中文
        /// </summary>
        [Description("船公司中文")]
        public string companycnname
        {
            get; set;
        }

        /// <summary>
        /// 开船日期
        /// </summary>
        public string departuredate
        {
            get; set;
        }
        /// <summary>
        /// 确认电放时间
        /// </summary>
        public string telexrelease { get; set; }

        /// <summary>
        /// 是否支付运费
        /// </summary>
        public string ispaysshipping { get; set; }

        /// <summary>
        /// 费用承担人
        /// </summary>
        public string feebear { get; set; }


        /// <summary>
        /// 费用支付人员 0货代公司 1客户
        /// </summary>
        public string feetype { get; set; }


        /// <summary>
        /// 币种
        /// </summary>
        public string currency { get; set; }


        /// <summary>
        /// 运费金额
        /// </summary>
        public string shipcost { get; set; }


        /// <summary>
        /// 收到运费发票时间
        /// </summary>
        public string receiveinvoicetime { get; set; }


        /// <summary>
        /// 船公司收到运费时间
        /// </summary>
        public string shipreceivetime { get; set; }

        /// <summary>
        /// 预计到港时间
        /// </summary>
        public string expectedarrival { get; set; }

        /// <summary>
        /// 实际到港时间
        /// </summary>
        public string actualarrivalf { get; set; }



        #endregion Model


    }
}

