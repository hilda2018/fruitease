
using Attributes;
/**  版本信息模板在安装目录下，可自行修改。
* suppliersell.cs
*
* 功 能： N/A
* 类 名： suppliersell
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/4/13 13:28:54   $creater    初版
*
*/
using System;
using System.ComponentModel;

namespace Interfaces.Model
{
    /// <summary>
    /// 代卖信息主表
    /// </summary>
    [Serializable]
    [DisplayName("suppliersell")]
    public partial class suppliersellEntity
    {
        public suppliersellEntity()
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
        private string _userid;
        /// <summary>
        /// 填写人
        /// </summary>
        [Description("填写人")]
        public string UserID
        {
            set { _userid = value; }
            get { return _userid; }
        }
        private string _indate;
        /// <summary>
        /// 填写日期
        /// </summary>
        [Description("填写日期")]
        public string InDate
        {
            set { _indate = value; }
            get { return _indate; }
        }
        private string _sellcode;
        /// <summary>
        /// 代卖编号
        /// </summary>
        [Description("代卖编号")]
        [DisplayName("sellcode")]
        public string SellCode
        {
            set { _sellcode = value; }
            get { return _sellcode; }
        }

        /// <summary>
        /// 制表人所属国家
        /// </summary>
        [Description("制表人所属国家")]

        public string countryid
        {
            set;
            get;
        }
        private string _sellerid;
        /// <summary>
        /// 卖方
        /// </summary>
        [Description("卖方ID")]
        public string SellerID
        {
            set { _sellerid = value; }
            get { return _sellerid; }
        }
        /// <summary>
        /// 卖方英文地址
        /// </summary>
        public string selleraddressen { get; set; }
        /// <summary>
        /// 卖方中文地址
        /// </summary>
        public string selleraddresscn { get; set; }


        /// <summary>
        /// 实际供应商（英文）
        /// </summary>
        [Description("实际供应商")]
        public string actualseller
        {
            set;
            get;
        }
        /// <summary>
        /// 实际供应商（中文）
        /// </summary>
        public string actcnname { get; set; }

        /// <summary>
        /// 实际供应商英文地址
        /// </summary>
        public string actaddressen { get; set; }
        /// <summary>
        /// 实际供应商中文地址
        /// </summary>
        public string actaddresscn { get; set; }

        private string _buyerid;
        /// <summary>
        /// 买方英文名称
        /// </summary>
        [Description("买方英文名称")]
        public string BuyerID
        {
            set { _buyerid = value; }
            get { return _buyerid; }
        }

        /// <summary>
        /// 买方英文名称
        /// </summary>
        [Description("买方英文名称")]
        public string buyerenname { get; set; }

        /// <summary>
        /// 买方中文名称
        /// </summary>
        [Description("买方中文名称")]
        public string buyercnname { get; set; }

        /// <summary>
        /// 买方地址
        /// </summary>
        [Description("买方地址")]
        public string buyeraddresscn { get; set; }

        /// <summary>
        /// 买方英文地址
        /// </summary>
        [Description("买方英文地址")]
        public string buyeraddressen { get; set; }

        /// <summary>
        /// 船公司
        /// </summary>
        [Description("船公司")]
        public string shipcompany { get; set; }

        /// <summary>
        /// 船公司 英文
        /// </summary>
        public string companycnname { get; set; }

        private string _hasimportagent;
        /// <summary>
        /// 经营单位是否同买方相同
        /// </summary>
        [Description("经营单位是否同买方相同")]
        public string HasImportAgent
        {
            set { _hasimportagent = value; }
            get { return _hasimportagent; }
        }
        private string _importagentid;
        /// <summary>
        /// 代理公司
        /// </summary>
        [Description("代理公司ID")]
        public string ImportAgentID
        {
            set { _importagentid = value; }
            get { return _importagentid; }
        }
        /// <summary>
        /// 收货人ID
        /// </summary>
        [Description("收货人ID")]
        public string actualreceiveid
        {
            set;
            get;
        }
        private string _contractno;
        /// <summary>
        /// 合同号
        /// </summary>
        [Description("合同号")]
        public string ContractNo
        {
            set { _contractno = value; }
            get { return _contractno; }
        }

        /// <summary>
        /// 合同号
        /// </summary>
        [Description("合同号")]
        public string orderno
        {
            set;
            get;
        }
        private string _currency;
        /// <summary>
        /// 币种
        /// </summary>
        [Description("币种")]
        public string Currency
        {
            set { _currency = value; }
            get { return _currency; }
        }
        private decimal _summoney;
        /// <summary>
        /// 合同总金额
        /// </summary>
        [Description("合同总金额")]
        public decimal SumMoney
        {
            set { _summoney = value; }
            get { return _summoney; }
        }
        private decimal _summoneyrmb;
        /// <summary>
        /// 合同总金额人民币
        /// </summary>
        [Description("合同总金额人民币")]
        public decimal SumMoneyRMB
        {
            set { _summoneyrmb = value; }
            get { return _summoneyrmb; }
        }
        private string _origincountry;
        /// <summary>
        /// 原产国
        /// </summary>
        [Description("原产国")]
        public string OriginCountry
        {
            set { _origincountry = value; }
            get { return _origincountry; }
        }
        private string _destinationcountry;
        /// <summary>
        /// 目的国
        /// </summary>
        [Description("目的国")]
        public string DestinationCountry
        {
            set { _destinationcountry = value; }
            get { return _destinationcountry; }
        }
        private string _loadingport;
        /// <summary>
        /// 起运港
        /// </summary>
        [Description("起运港")]
        public string LoadingPort
        {
            set { _loadingport = value; }
            get { return _loadingport; }
        }
        private string _dischargeport;
        /// <summary>
        /// 目的港
        /// </summary>
        [Description("目的港")]
        public string DischargePort
        {
            set { _dischargeport = value; }
            get { return _dischargeport; }
        }
        private string _termspayment;
        /// <summary>
        /// 价格方式
        /// </summary>
        [Description("价格方式")]
        public string TermsPayment
        {
            set { _termspayment = value; }
            get { return _termspayment; }
        }
        private string _invoice;
        /// <summary>
        /// 发票号
        /// </summary>
        [Description("发票号")]
        public string Invoice
        {
            set { _invoice = value; }
            get { return _invoice; }
        }
        private string _totalsuttleweight;
        /// <summary>
        /// 总净重
        /// </summary>
        [Description("总净重")]
        public string TotalSuttleweight
        {
            set { _totalsuttleweight = value; }
            get { return _totalsuttleweight; }
        }
        private string _totalgrossweight;
        /// <summary>
        /// 总毛重
        /// </summary>
        [Description("总毛重")]
        public string TotalGrossweight
        {
            set { _totalgrossweight = value; }
            get { return _totalgrossweight; }
        }
        private string _paymentmethod;
        /// <summary>
        /// 付款方式
        /// </summary>
        [Description("付款方式")]
        public string PaymentMethod
        {
            set { _paymentmethod = value; }
            get { return _paymentmethod; }
        }
        private string _qualityinspectionclause;
        /// <summary>
        /// 质量检验条款
        /// </summary>
        [Description("质量检验条款")]
        public string QualityInspectionClause
        {
            set { _qualityinspectionclause = value; }
            get { return _qualityinspectionclause; }
        }
        private string _companyid;
        /// <summary>
        /// 国外货代公司
        /// </summary>
        [Description("国外货代公司")]
        public string CompanyID
        {
            set { _companyid = value; }
            get { return _companyid; }
        }
        private string _transport;
        /// <summary>
        /// 运输方式
        /// </summary>
        [Description("运输方式")]
        public string Transport
        {
            set { _transport = value; }
            get { return _transport; }
        }
        private string _status;
        /// <summary>
        /// 状态
        /// </summary>
        [Description("状态")]
        public string Status
        {
            set { _status = value; }
            get { return _status; }
        }
        private string _currentdate;
        /// <summary>
        /// 时间戳
        /// </summary>
        [Description("时间戳")]
        public string CurrentDate
        {
            set { _currentdate = value; }
            get { return _currentdate; }
        }
        private string _businesstype;
        /// <summary>
        /// 业务类型
        /// </summary>
        [Description("业务类型")]
        public string businesstype
        {
            set { _businesstype = value; }
            get { return _businesstype; }
        }
        private string _blno;
        /// <summary>
        /// 提单号
        /// </summary>
        [Description("提单号")]
        public string BLNo
        {
            set { _blno = value; }
            get { return _blno; }
        }
        /// <summary>
        /// 是否二次增补税 Y,N
        /// </summary>
        [Description("是否二次增补税")]
        public string secondtax { get; set; }
        /// <summary>
        /// 卸货港区
        /// </summary>
        [Description("卸货港区")]
        public string loadport
        {
            get; set;
        }

        /// <summary>
        /// 集装箱号
        /// </summary>
        [Description("集装箱号")]
        public string containerNo
        {
            get; set;
        }
        ///// <summary>
        ///// 开船日期
        ///// </summary>
        //public string departuredate
        //{
        //    get;set;
        //}
        /// <summary>
        /// 品名
        /// </summary>
        [Description("品名")]
        public string products { get; set; }

        /// <summary>
        /// 数量
        /// </summary>
        [Description("数量")]
        public string num { get; set; }

        /// <summary>
        /// 预计靠港时间
        /// </summary>
        [Description("预计靠港时间")]
        public string expectedarrival { get; set; }

        /// <summary>
        /// 实际靠港时间
        /// </summary>
        [Description("实际靠港时间")]
        public string actualarrivalf { get; set; }
        #endregion Model


    }
}

