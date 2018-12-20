using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.OCRModel
{
    class ServerRes
    {
    }

    /// <summary>
    /// 返回结果封装
    /// </summary>
    public class ServerResEntity
    {
        public string info { get; set; }

        public string status { get; set; }
    }

    /// <summary>
    /// ocr货代数据返回对象
    /// </summary>
    public class OCRHddzEntity
    {
        #region Model
        /// <summary>
        /// 是否已经同步
        /// </summary>
        public bool IsSync { get; set; }

        public string ywbh { get; set; }
        private string _ocrmainid;
        /// <summary>
        /// 主键
        /// </summary>
        public string ocrmainid
        {
            set { _ocrmainid = value; }
            get { return _ocrmainid; }
        }
        private string _invoiceno;
        /// <summary>
        /// 发票号
        /// </summary>
        public string invoiceno
        {
            set { _invoiceno = value; }
            get { return _invoiceno; }
        }
        private string _billno;
        /// <summary>
        /// 提单号
        /// </summary>
        public string billno
        {
            set { _billno = value; }
            get { return _billno; }
        }
        private string _countrycnname;
        /// <summary>
        /// 国家
        /// </summary>
        public string countrycnname
        {
            set { _countrycnname = value; }
            get { return _countrycnname; }
        }
        private string _productcnname;
        /// <summary>
        /// 产品
        /// </summary>
        public string productcnname
        {
            set { _productcnname = value; }
            get { return _productcnname; }
        }
        private string _regions;
        /// <summary>
        /// 地区
        /// </summary>
        public string regions
        {
            set { _regions = value; }
            get { return _regions; }
        }
        private string _transportname;
        /// <summary>
        /// 运输方式
        /// </summary>
        public string transportname
        {
            set { _transportname = value; }
            get { return _transportname; }
        }
        private string _shippingcompany;
        /// <summary>
        /// 船公司
        /// </summary>
        public string shippingcompany
        {
            set { _shippingcompany = value; }
            get { return _shippingcompany; }
        }
        private string _invstatusname;
        /// <summary>
        /// 发票状态
        /// </summary>
        public string invstatusname
        {
            set { _invstatusname = value; }
            get { return _invstatusname; }
        }
        private string _plstatusname;
        /// <summary>
        /// 箱单
        /// </summary>
        public string plstatusname
        {
            set { _plstatusname = value; }
            get { return _plstatusname; }
        }
        private string _blstatusname;
        /// <summary>
        /// 海运提单
        /// </summary>
        public string blstatusname
        {
            set { _blstatusname = value; }
            get { return _blstatusname; }
        }
        private string _blairstatusname;
        /// <summary>
        /// 空运提单
        /// </summary>
        public string blairstatusname
        {
            set { _blairstatusname = value; }
            get { return _blairstatusname; }
        }
        private string _orstatusname;
        /// <summary>
        /// 产地证
        /// </summary>
        public string orstatusname
        {
            set { _orstatusname = value; }
            get { return _orstatusname; }
        }
        private string _prstatusname;
        /// <summary>
        /// 冷处理记录
        /// </summary>
        public string prstatusname
        {
            set { _prstatusname = value; }
            get { return _prstatusname; }
        }
        private string _phystatusname;
        /// <summary>
        /// 植检证
        /// </summary>
        public string phystatusname
        {
            set { _phystatusname = value; }
            get { return _phystatusname; }
        }
        private string _examinationstatusname;
        /// <summary>
        /// 核辐射
        /// </summary>
        public string examinationstatusname
        {
            set { _examinationstatusname = value; }
            get { return _examinationstatusname; }
        }
        private string _ciqstatusname;
        /// <summary>
        /// 冷处理证明
        /// </summary>
        public string ciqstatusname
        {
            set { _ciqstatusname = value; }
            get { return _ciqstatusname; }
        }

        #endregion Model


    }
}
