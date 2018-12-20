/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz.cs
*
* 功 能： N/A
* 类 名： yw_hddz
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/4/7 17:48:50   $creater    初版
*
*/
using System;
using System.ComponentModel;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    /// 货代单证
    /// </summary>
    [Serializable]
    public partial class yw_hddzEntity
    {
        public yw_hddzEntity()
        { }
        #region Model
        /// <summary>
        /// Ocr对应主ID
        /// </summary>
        [Description("Ocr对应主ID")]
        public string OcrID { get; set; }
        private string _suppliersellid;
        /// <summary>
        /// 生鲜港代卖ID
        /// </summary>
        [Description("生鲜港代卖ID")]
        [Column(ColumnType.EditDisabled)]
        public string SupplierSellID
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }

        private string _ywbh;
        /// <summary>
        /// 业务编号 主键
        /// </summary>
        [Description("业务编号")]
        [Column(ColumnType.guidPK)]
        public string ywbh
        {
            set { _ywbh = value; }
            get { return _ywbh; }
        }

        private string _zbr;
        /// <summary>
        /// 制单人
        /// </summary>
        [Description("制表人")]
        [Column(ColumnType.EditDisabled)]
        public string zbr
        {
            set { _zbr = value; }
            get { return _zbr; }
        }
        private DateTime _zbrq;
        /// <summary>
        /// 制表日期
        /// </summary>
        [Description("制表日期")]
        [Column(ColumnType.EditDisabled)]
        public DateTime zbrq
        {
            set { _zbrq = value; }
            get { return _zbrq; }
        }

        /// <summary>
        /// 自营代理标志
        /// </summary>
        [Description("自营代理")]
        public string zydl
        {
            set;
            get;
        }

        private string _gwgysbm;
        /// <summary>
        /// 国外供应商
        /// </summary>
        [Description("国外供应商")]
        public string gwgysbm
        {
            set { _gwgysbm = value; }
            get { return _gwgysbm; }
        }
        /// <summary>
        /// 国外供应商名称
        /// </summary>
        [Description("国外供应商名称")]
        public string gwgysmc { get; set; }
        /// <summary>
        /// 国外供应商简称
        /// </summary>
        [Description("国外供应商简称")]
        public string gwgysjc { get; set; }

        private string _khbm;
        /// <summary>
        /// 委托客户
        /// </summary>
        [Description("委托客户")]
        public string khbm
        {
            set { _khbm = value; }
            get { return _khbm; }
        }
        /// <summary>
        /// 客户名称
        /// </summary>
        [Description("客户名称")]
        public string khmc { get; set; }
        /// <summary>
        /// 客户简称
        /// </summary>
        [Description("客户简称")]
        public string khjc { get; set; }
        /// <summary>
        /// 客户拼音码
        /// </summary>
        [Description("客户拼音码")]
        public string khpym { get; set; }
        /// <summary>
        /// 中间商名称
        /// </summary>
        [Description("中间商名称")]
        public string zjsmc { get; set; }

        /// <summary>
        /// 中间商编码
        /// </summary>
        [Description("中间商编码")]
        public string zjsbm { get; set; }

        /// <summary>
        /// 中间商简称
        /// </summary>
        [Description("中间商简称")]
        public string zjsjc { get; set; }
        /// <summary>
        /// 中间商拼音码
        /// </summary>
        [Description("中间商拼音码")]
        public string zjspym { get; set; }


        private string _shdwbm;
        /// <summary>
        /// 收货单位编码
        /// </summary>
        [Description("收货单位编码")]
        [Column(ColumnType.EditDisabled)]
        public string shdwbm
        {
            set { _shdwbm = value; }
            get { return _shdwbm; }
        }

        //private string _shdwmc;
        /// <summary>
        /// 收货单位名称
        /// </summary>
        [Description("收货单位名称")]
        [Column(ColumnType.EditDisabled)]
        public string shdwmc
        {
            set;
            get;
        }



        /// <summary>
        /// 经营单位编码
        /// </summary>
        [Description("经营单位编码")]
        public string jydwbm
        {
            set;
            get;
        }

        /// <summary>
        /// 经营单位代码
        /// </summary>
        [Description("经营单位代码")]
        public string jydwdm
        {
            set;
            get;
        }

        /// <summary>
        /// 经营单位名称
        /// </summary>
        [Description("经营单位名称")]
        public string jydwmc { get; set; }
        /// <summary>
        /// 经营单位简称
        /// </summary>
        [Description("经营单位简称")]
        public string jydwjc { get; set; }
        /// <summary>
        /// 经营单位拼音码
        /// </summary>
        [Description("经营单位拼音码")]
        public string jydwpym { get; set; }

        /// <summary>
        /// 经营单位施检机构代码
        /// </summary>
        [Description("经营单位施检机构代码")]
        public string jydwsjjgdm { get; set; }


        //private string _HasImportAgent;
        ///// <summary>
        ///// 经营单位是否同买方相同
        ///// </summary>
        //public string HasImportAgent
        //{
        //    set { _HasImportAgent = value; }
        //    get { return _HasImportAgent; }
        //}
        private string _hth;
        /// <summary>
        /// 合同号
        /// </summary>
        [Description("合同号")]
        public string hth
        {
            set { _hth = value; }
            get { return _hth; }
        }

        private string _wbbb;
        /// <summary>
        /// 币别
        /// </summary>
        [Description("币别")]
        public string wbbb
        {
            set { _wbbb = value; }
            get { return _wbbb; }
        }
        private double _zje;
        /// <summary>
        /// 总金额
        /// </summary>
        [Description("总金额")]
        public double zje
        {
            set { _zje = value; }
            get { return _zje; }
        }

        //private double _SumMoneyRMB;
        ///// <summary>
        ///// 人民币总金额
        ///// </summary>
        //[Description("人民币总金额")]
        //public double SumMoneyRMB
        //{
        //    set { _SumMoneyRMB = value; }
        //    get { return _SumMoneyRMB; }
        //}
        private string _ycddm;
        /// <summary>
        /// 原产地代码
        /// </summary>
        [Description("原产地代码")]
        public string ycddm
        {
            set { _ycddm = value; }
            get { return _ycddm; }
        }
        /// <summary>
        /// 原产地名称
        /// </summary>
        [Description("原产地名称")]
        public string ycd
        {
            set; get;
        }

        /// <summary>
        /// 地区代码
        /// </summary>
        [Description("地区代码")]
        public string dqdm
        {
            set; get;
        }
        /// <summary>
        /// Y证编号
        /// </summary>
        [Description("Y证编号")]
        public string yzbh
        {
            get; set;
        }

        /// <summary>
        /// 细分地区
        /// </summary>
        [Description("细分地区")]
        public string ctr_area2
        {
            get; set;
        }
        /// <summary>
        /// 目的国
        /// </summary>
        //[IgnoreAttribute]
        //public string DestinationCountry { get; set; }

        private string _qygdm;
        /// <summary>
        /// 起运港
        /// </summary>
        [Description("起运港代码")]
        public string qygdm
        {
            set { _qygdm = value; }
            get { return _qygdm; }
        }
        /// <summary>
        /// 起运国
        /// </summary>
        [Description("起运国代码")]
        public string qiyunguodm
        {
            set;
            get;
        }

        //private string _qyg;
        /// <summary>
        /// 起运港
        /// </summary>
        [Description("起运港")]
        public string qyg
        {
            set;
            get;
        }

        private string _mdg;
        /// <summary>
        /// 目的港
        /// </summary>
        [Description("目的港")]
        public string mdg
        {
            set { _mdg = value; }
            get { return _mdg; }
        }
        private string _jgfs;
        /// <summary>
        /// 价格方式
        /// </summary>
        [Description("价格方式")]
        public string jgfs
        {
            set { _jgfs = value; }
            get { return _jgfs; }
        }
        private string _invoiceno;
        /// <summary>
        /// 进口发票号
        /// </summary>
        [Description("进口发票号")]
        public string invoiceno
        {
            set { _invoiceno = value; }
            get { return _invoiceno; }
        }
        private double _zjz;
        /// <summary>
        /// 总净重
        /// </summary>
        [Description("总净重")]
        public double zjz
        {
            set { _zjz = value; }
            get { return _zjz; }
        }
        private double _zmz;
        /// <summary>
        /// 总毛重
        /// </summary>
        [Description("总毛重")]
        public double zmz
        {
            set { _zmz = value; }
            get { return _zmz; }
        }
        private string _gwhdbm;
        /// <summary>
        /// 国外货代代码
        /// </summary>
        [Description("国外货代代码")]
        [Column(ColumnType.EditDisabled)]
        public string gwhdbm
        {
            set { _gwhdbm = value; }
            get { return _gwhdbm; }
        }
        /// <summary>
        /// 国外货代代码
        /// </summary>
        [Description("国外货代代码")]
        [Column(ColumnType.EditDisabled)]
        public string gwhdmc
        {
            set;
            get;
        }
        private string _ysfs;
        /// <summary>
        /// 运输方式
        /// </summary>
        [Description("运输方式")]
        public string ysfs
        {
            set { _ysfs = value; }
            get { return _ysfs; }
        }
        /// <summary>
        /// 是否转运
        /// </summary>
        public string sfzy { get; set; }

        private string _dmbz;
        /// <summary>
        /// 代卖标志
        /// </summary>
        [Description("代卖标志")]
        public string dmbz
        {
            set { _dmbz = value; }
            get { return _dmbz; }
        }
        private string _ztdh;
        /// <summary>
        /// 主提单号
        /// </summary>
        [Description("主提单号")]
        public string ztdh
        {
            set { _ztdh = value; }
            get { return _ztdh; }
        }

        /// <summary>
        /// 提单类型
        /// </summary>
        [Description("提单类型")]
        public string tdlx
        {
            set;
            get;
        }
        private string _hz_spmc;
        /// <summary>
        /// 汇总商品
        /// </summary>
        [Description("汇总商品")]
        public string hz_spmc
        {
            set { _hz_spmc = value; }
            get { return _hz_spmc; }
        }
        /// <summary>
        /// 总箱数
        /// </summary>
        public string zxs
        {
            get;set;
        }

        /// <summary>
        /// 承运人
        /// </summary>
        [Description("承运人")]
        public string cyr
        {
            set;
            get;
        }
        /// <summary>
        /// 承运人
        /// </summary>
        [Description("承运人编码")]
        public string cyrbm
        {
            set;
            get;
        }
        /// <summary>
        /// 承运人简称
        /// </summary>
        [Description("承运人简称")]
        public string cyrjc
        {
            set;
            get;
        }
        /// <summary>
        /// 承运人简称
        /// </summary>
        [Description("承运人拼音码")]
        public string cyrpym
        {
            set;
            get;
        }

        private string _ejycd;
        /// <summary>
        /// 二级原产地
        /// </summary>
        [Description("二级原产地")]
        public string ejycd
        {
            set { _ejycd = value; }
            get { return _ejycd; }
        }
        private string _sfyyf;
        /// <summary>
        /// 是否有运费
        /// </summary>
        [Description("是否有运费")]
        public string sfyyf
        {
            set { _sfyyf = value; }
            get { return _sfyyf; }
        }

        /// <summary>
        /// 运费承担人
        /// </summary>
        public string yfcdr { get; set; }
        /// <summary>
        /// 运费承担方
        /// </summary>
        public string khorhd { get; set; }

        /// <summary>
        /// 运费承担人编码
        /// </summary>
        public string yfcdrbm { get; set; }
        /// <summary>
        /// 运费币别
        /// </summary>
        public string yfbb { get; set; }
        /// <summary>
        /// 运费金额
        /// </summary>
        public float yfje { get; set; }
        ///// <summary>
        ///// 收到运费发票时间
        ///// </summary>
        //public DateTime? sdyffpsj
        //{ get; set; }
        /// <summary>
        /// 运费支付确认时间
        /// </summary>
        public DateTime? yfzfqrsj { get; set; }

        /// <summary>
        /// 货代公司编码
        /// </summary>
        public string hdgsbm { get; set; }
        private string _tzrbm;
        /// <summary>
        /// 通知人编码notify
        /// </summary>
        [Description("通知人编码")]
        public string tzrbm
        {
            set { _tzrbm = value; }
            get { return _tzrbm; }
        }



        /// <summary>
        /// 通知人名称notify
        /// </summary>
        [Description("通知人名称")]
        public string tzrmc
        {
            set;
            get;
        }

        /// <summary>
        /// 通知人简称notify
        /// </summary>
        [Description("通知人简称")]
        public string tzrjc
        {
            set;
            get;
        }

        /// <summary>
        /// 通知人拼音码notify
        /// </summary>
        [Description("通知人拼音码")]
        public string tzrpym
        {
            set;
            get;
        }

        private string _cm;
        /// <summary>
        /// 船名英文
        /// </summary>
        [Description("船名英文")]
        public string cm
        {
            set { _cm = value; }
            get { return _cm; }
        }
        /// <summary>
        /// 中转船名
        /// </summary>
        [Description("中转船名")]
        public string zz_cm
        {
            set;
            get;
        }
        private string _hcorhbh;
        /// <summary>
        /// 航次
        /// </summary>
        [Description("航次")]
        public string hcorhbh
        {
            set { _hcorhbh = value; }
            get { return _hcorhbh; }
        }
        
        /// <summary>
        /// 正确航次
        /// </summary>
        [Description("正确航次")]
        public string hcorhbh_zq
        {
            set;
            get;
        }


        /// <summary>
        /// 中转航次
        /// </summary>
        [Description("中转航次")]
        public string zz_hcorhbh
        {
            set;
            get;
        }
        //private string _zcrq;
        /// <summary>
        /// 装船日期
        /// </summary>
        [Description("装船日期")]
        public DateTime? zcrq
        {
            set;
            get;
        }

        private string _fh;
        /// <summary>
        /// 封号
        /// </summary>
        [Description("封号")]
        public string fh
        {
            set { _fh = value; }
            get { return _fh; }
        }

        private string _hz_jzxh;
        /// <summary>
        /// 集装箱号
        /// </summary>
        [Description("集装箱号")]
        public string hz_jzxh
        {
            set { _hz_jzxh = value; }
            get { return _hz_jzxh; }
        }
        private string _hz_xx;
        /// <summary>
        /// 箱型
        /// </summary>
        [Description("箱型")]
        public string hz_xx
        {
            set { _hz_xx = value; }
            get { return _hz_xx; }
        }
        private string _hz_zhlx;
        /// <summary>
        /// 箱类
        /// </summary>
        [Description("箱类")]
        public string hz_zhlx
        {
            set { _hz_zhlx = value; }
            get { return _hz_zhlx; }
        }


        private DateTime _invoice_date;
        /// <summary>
        /// 发票日期
        /// </summary>
        [Description("发票日期")]
        public DateTime invoice_date
        {
            set { _invoice_date = value; }
            get { return _invoice_date; }
        }
        /// <summary>
        /// 状态 默认为新制
        /// </summary>
        [Description("状态")]

        public string state
        {
            get; set;
        }

        /// <summary>
        /// 贸易国别
        /// </summary>
        [Description("贸易国别")]
        public string mygb
        {
            get; set;
        }
        /// <summary>
        /// 处理方式
        /// </summary>
        [Description("处理方式")]
        public string clfs
        {
            get; set;
        }
        #endregion Model

        #region  物流部分

        /// <summary>
        /// 预计靠港时间
        /// </summary>
        [Description("预计靠港时间")]
        public DateTime? yjkgsj { get; set; }

        /// <summary>
        /// 实际靠港时间
        /// </summary>
        [Description("实际靠港时间")]
        public DateTime? sjkgsj { get; set; }

        /// <summary>
        /// 海关放行时间
        /// </summary>
        [Description("海关放行时间")]
        public DateTime? hgfxsj
        {
            get; set;
        }


        /// <summary>
        /// 报关单号
        /// </summary>
        [Description("报关单号")]
        public string bgdh
        {
            get; set;
        }

        /// <summary>
        /// 报检号
        /// </summary>
        [Description("报检号")]
        public string bjh
        {
            get; set;
        }
        /// <summary>
        /// 是否查验
        /// </summary>
        [Description("是否查验")]
        public string sfcy
        {
            get; set;
        }

        /// <summary>
        /// 报关海关
        /// </summary>
        [Description("报关海关")]
        public string bghg
        {
            get; set;
        }

        /// <summary>
        /// 海关放行方式
        /// </summary>
        [Description("海关放行方式")]
        public string hgfxfs
        {
            get; set;
        }

        /// <summary>
        /// 卸货港区
        /// </summary>
        [Description("卸货港区")]
        public string xhgq
        {
            get; set;
        }
        /// <summary>
        /// 
        /// </summary>
        public DateTime? qrdfsj { get; set; }
        #endregion

        #region 报关

        /// <summary>
        /// 通关单号
        /// </summary>
        public string tgdh { get; set; }

        /// <summary>
        /// 报检时间
        /// </summary>
        public DateTime? wsbjsj { get; set; }

        /// <summary>
        /// 报关时间
        /// </summary>
        public DateTime? bgsj { get; set; }
        /// <summary>
        /// 换单时间
        /// </summary>
        public DateTime? sjhdsj { get; set; }

        /// <summary>
        /// 仓单时间
        /// </summary>
        public DateTime? sjzq_zqcdsj { get; set; }

        /// <summary>
        /// 抵港时间
        /// </summary>
        public DateTime? sjzq_zqdgsj { get; set; }

        /// <summary>
        /// 理货时间
        /// </summary>
        public DateTime? sjzq_zqlhsj { get; set; }

        /// <summary>
        /// 预估海关放行时间
        /// </summary>
        public DateTime? yghgfxsj { get; set; }

        /// <summary>
        /// 窗口通过
        /// </summary>
        public DateTime? cktgsj { get; set; }


        /// <summary>
        /// 国检通过时间
        /// </summary>
        public DateTime? wzhfxsj { get; set; }



        #endregion

        #region 还箱超期
        /// <summary>
        /// 免箱期
        /// </summary>
        public string mxq { get; set; }
        /// <summary>
        /// 客户提供免箱期
        /// </summary>
        public string khmxq { get; set; }
        #endregion

        #region 货代保证金
        /// <summary>
        /// 保证金单据号
        /// </summary>
        [Description("保证金单据号")]
        public string bzjdjh
        { get; set; }
        /// <summary>
        /// 保证金金额
        /// </summary>
        [Description("保证金金额")]
        public string bzj
        { get; set; }
        /// <summary>
        /// 保证金时间
        /// </summary>
        [Description("保证金时间")] 
        public DateTime? sjzfrq
        { get; set; }
        /// <summary>
        /// 保证金截止日期
        /// </summary>
        [Description("保证金截止日期")]
        public DateTime? bzjjzsj
        { get; set; }
        /// <summary>
        /// 转关税
        /// </summary>
        [Description("转关税")]
        public decimal zgs
        { get; set; }
        /// <summary>
        /// 转增值税
        /// </summary>
        [Description("转增值税")]
        public decimal zzzs
        { get; set; }
        /// <summary>
        /// 退保证金
        /// </summary>
        [Description("退保证金")]
        public decimal tbzj
        { get; set; }
        /// <summary>
        /// 退款到账时间
        /// </summary>
        [Description("退款到账时间")]
        public DateTime? tkdzsj
        { get; set; }


        #endregion Model

        /// <summary>
        /// 返回主键
        /// </summary>
        /// <returns></returns>
        public string GetPK()
        {
            return "ywbh";
        }
    }

    /// <summary>
    /// 运费视图
    /// </summary>
    public partial class yw_hddz_yfView
    {
        public string ywbh { get; set; }

        public DateTime? sdfprq { get; set; }

        public float kpje { get; set; }
    }

    /// <summary>
    /// 海运超期费
    /// </summary>
    public partial class yw_hddz_hycqfView
    {
        /// <summary>
        /// 业务编号
        /// </summary>
        public string ywbh { get; set; }
        /// <summary>
        /// 实际超期费用
        /// </summary>
        public string je { get; set; }

        /// <summary>
        /// 预估超期费金额
        /// </summary>
        public string gscqfje { get; set; }

        /// <summary>
        /// 预估超期费金额
        /// </summary>
        public DateTime? zfsj { get; set; }
    }

    /// <summary>
    /// 国际运费
    /// </summary>
    public partial class yw_hddz_gjyfView
    {
        /// <summary>
        /// 业务编号
        /// </summary>
        public string ywbh { get; set; }

        /// <summary>
        /// 代卖ID
        /// </summary>
        public string SupplierSellID { get; set; }

        /// <summary>
        /// 折人民币汇率
        /// </summary>
        public decimal zrmbhl { get; set; }

        /// <summary>
        /// 应收手续费
        /// </summary>
        public decimal yssxf { get; set; }

        /// <summary>
        /// 支付时间
        /// </summary>
        public DateTime? zfsj { get; set; }
    }

}

