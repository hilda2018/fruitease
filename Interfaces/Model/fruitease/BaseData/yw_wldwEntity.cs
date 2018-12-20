using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    /// 往来单位
    /// </summary>
    public class yw_wldwEntity
    {
        #region Model
        private string _yw_khbm;
        /// <summary>
        /// 业务员客户编码
        /// </summary>
        [Column(ColumnType.guidPK)]
        public string yw_khbm
        {
            set { _yw_khbm = value; }
            get { return _yw_khbm; }
        }
        private string _khbm;
        /// <summary>
        /// 公司客户编码
        /// </summary>
        public string khbm
        {
            set { _khbm = value; }
            get { return _khbm; }
        }
        private string _khjc;
        /// <summary>
        /// 客户简称
        /// </summary>
        public string khjc
        {
            set { _khjc = value; }
            get { return _khjc; }
        }
        private string _khmc;
        /// <summary>
        /// 客户名称
        /// </summary>
        public string khmc
        {
            set { _khmc = value; }
            get { return _khmc; }
        }
        private string _pym;
        /// <summary>
        /// 拼音码
        /// </summary>
        public string pym
        {
            set { _pym = value; }
            get { return _pym; }
        }
        private string _khmc_yw;
        /// <summary>
        /// 往来单位客户英文名称
        /// </summary>
        public string khmc_yw
        {
            set { _khmc_yw = value; }
            get { return _khmc_yw; }
        }
        private string _tybm;
        /// <summary>
        /// 统一编码
        /// </summary>
        public string tybm
        {
            set { _tybm = value; }
            get { return _tybm; }
        }
        private string _tymc;
        /// <summary>
        /// 统一名称
        /// </summary>
        public string tymc
        {
            set { _tymc = value; }
            get { return _tymc; }
        }
        private string _pym_yw;
        /// <summary>
        /// 往来单位英文拼音码
        /// </summary>
        public string pym_yw
        {
            set { _pym_yw = value; }
            get { return _pym_yw; }
        }
       
        private string _shr;
        /// <summary>
        /// 收货人
        /// </summary>
        public string shr
        {
            set { _shr = value; }
            get { return _shr; }
        }
        private string _tzr;
        /// <summary>
        /// 通知人
        /// </summary>
        public string tzr
        {
            set { _tzr = value; }
            get { return _tzr; }
        }
        /// <summary>
        /// 申请人
        /// </summary>
        public string sqr { get; set; }

        /// <summary>
        /// 施检机构代码
        /// </summary>
        public string sjjgdm { get; set; }

        /// <summary>
        /// 企业海关编码
        /// </summary>
        public string qyhgbm { get; set; }

        /// <summary>
        /// 地址
        /// </summary>
        public string address { get; set; }

        /// <summary>
        /// 英文地址
        /// </summary>
        public string address_yw { get; set; }

        /// <summary>
        /// 国外供应商标识 1--是
        /// </summary>
        public string gwgys { get; set; }

        public string zjs { get; set; }

        /// <summary>
        /// 国内客户标识 1--是
        /// </summary>
        public string gncgs { get; set; }

        /// <summary>
        /// 经营单位（代理公司）标识 1--是
        /// </summary>
        public string wmgs { get; set; }

        /// <summary>
        /// 承运人标识 1--是
        /// </summary>
        public string cgsorhkgs { get; set; }

        /// <summary>
        /// 空运卸货港区 1--是
        /// </summary>
        public string mt { get; set; }

        /// <summary>
        /// 海运码头 1--是
        /// </summary>
        public string hymt { get; set; }

        /// <summary>
        /// 海关标识 1--是
        /// </summary>
        public string hg { get; set; }
        #endregion Model
    }
}
