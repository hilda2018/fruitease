using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    /// <summary>
    /// 货代单证商品分录表
    /// </summary>
    public class yw_hddz_spxxEntity
    {
        #region Model
        private string _ywbh;
        /// <summary>
        /// 业务编号
        /// </summary>
        [Description("业务编号")]
        public string ywbh
        {
            set { _ywbh = value; }
            get { return _ywbh; }
        }
        private int _cxh;
        /// <summary>
        /// 次序号
        /// </summary>
        public int cxh
        {
            set { _cxh = value; }
            get { return _cxh; }
        }
        private string _spbm;
        /// <summary>
        /// 商品编码
        /// </summary>
        public string spbm
        {
            set { _spbm = value; }
            get { return _spbm; }
        }
        private string _spmc;
        /// <summary>
        /// 商品名称
        /// </summary>
        public string spmc
        {
            set { _spmc = value; }
            get { return _spmc; }
        }
        private string _spmc_yw;
        /// <summary>
        /// 商品英文名称
        /// </summary>
        public string spmc_yw
        {
            set { _spmc_yw = value; }
            get { return _spmc_yw; }
        }
        private string _jldw;
        /// <summary>
        /// 计量单位
        /// </summary>
        public string jldw
        {
            set { _jldw = value; }
            get { return _jldw; }
        }
        private double _jlsl;
        /// <summary>
        /// 计量数量
        /// </summary>
        [Description("计量数量")]
        public double jlsl
        {
            set { _jlsl = value; }
            get { return _jlsl; }
        }

        private decimal _fpje;
        /// <summary>
        /// 发票金额
        /// </summary>
        [Description("业务编号")]
        public decimal fpje
        {
            set { _fpje = value; }
            get { return _fpje; }
        }

        private string _hgbm;
        /// <summary>
        /// 海关编码
        /// </summary>
        public string hgbm
        {
            set { _hgbm = value; }
            get { return _hgbm; }
        }
        /// <summary>
        /// 单件价格
        /// </summary>
        [Description("单件价格")]
        public decimal djjg { get; set; }
        /// <summary>
        /// 商品品种英文
        /// </summary>
        public string sppz_yw { get; set; }

        /// <summary>
        /// 商品品种
        /// </summary>
        public string sppz { get; set; }

        /// <summary>
        /// 商品规格英文
        /// </summary>
        public string spgg_yw { get; set; }

        /// <summary>
        /// 商品规格
        /// </summary>
        public string spgg{ get; set; }
        /// <summary>
        /// 商品等级英文
        /// </summary>
        public string spdj_yw { get; set; }
        /// <summary>
        /// 商品等级
        /// </summary>
        public string spdj { get; set; }
        /// <summary>
        /// 商品品牌
        /// </summary>
        public string sppp_yw { get; set; }
        /// <summary>
        /// 商品品牌
        /// </summary>
        public string sppp { get; set; }

        /// <summary>
        /// 总净重
        /// </summary>
        [Description("总净重")]
        public decimal zjz { get; set; }
        /// <summary>
        /// 总毛重
        /// </summary>
        [Description("总毛重")]
        public decimal zmz { get; set; }

        #endregion Model
    }
}
