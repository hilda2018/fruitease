
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
    /// 国内报关
	/// </summary>
	[Serializable]
	public partial class dometicEntity
	{
		public dometicEntity()
		{}
		#region Model
		private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
		{ 
			set{ _suppliersellid=value;}
			get{return _suppliersellid;}
		} 
		private string _expectedarrival;
        /// <summary>
        /// 预计到港时间
        /// </summary>
        [Description("预计到港时间")]
        public string ExpectedArrival
		{ 
			set{ _expectedarrival=value;}
			get{return _expectedarrival;}
		} 
		private string _actualarrival;
        /// <summary>
        /// 实际到港时间
        /// </summary>
        [Description("实际到港时间")]
        public string ActualArrivalf
		{ 
			set{ _actualarrival=value;}
			get{return _actualarrival;}
		} 
		private string _customsclearance;
        /// <summary>
        /// 放行时间
        /// </summary>
        [Description("放行时间")]
        public string CustomsClearance
		{ 
			set{ _customsclearance=value;}
			get{return _customsclearance;}
		} 
		private string _declarationnumber;
        /// <summary>
        /// 报关单号
        /// </summary>
        [Description("报关单号")]
        public string DeclarationNumber
		{ 
			set{ _declarationnumber=value;}
			get{return _declarationnumber;}
		} 
		private string _customscheck;
        /// <summary>
        /// 海关查验情况
        /// </summary>
        [Description("海关查验情况")]
        public string CustomsCheck
		{ 
			set{ _customscheck=value;}
			get{return _customscheck;}
		} 
		private string _customsid;
        /// <summary>
        /// 报关海关
        /// </summary>
        [Description("报关海关")]
        public string customsid
		{ 
			set{ _customsid=value;}
			get{return _customsid;}
		}
        /// <summary>
        /// 提单号
        /// </summary>
        [Description("提单号")]
        public string blno
        {
            get;set;
        }


        /// <summary>
		/// 通关单号
		/// </summary>
		[Description("通关单号")]
        public string ClearanceNumber
        { get; set; }
        /// <summary>
        /// 网上报检时间
        /// </summary>
        [Description("网上报检时间")]
        public string InspectionTime
        { get; set; }

        /// <summary>
        /// 通过时间
        /// </summary>
        [Description("通过时间")]
        public string InspectionTimereal
        { get; set; }

        /// <summary>
        /// 报检号
        /// </summary>
        [Description("报检号")]
        public string reportno
        { get; set; }

        /// <summary>
        /// 仓单时间
        /// </summary>
        [Description("仓单时间")]
        public string WarehouseReceiptTime
        { get; set; }
        /// <summary>
        /// 报关时间
        /// </summary>
        [Description("报关时间")]
        public string DeclarationTime
        { get; set; }
        /// <summary>
        /// 抵港时间
        /// </summary>
        [Description("抵港时间")]
        public string ArrivalTime
        { get; set; }
        /// <summary>
        /// 理货时间
        /// </summary>
        [Description("理货时间")]
        public string TallyTime
        { get; set; }
        /// <summary>
        /// 换单时间
        /// </summary>
        [Description("换单时间")]
        public string SingleTime
        { get; set; }
        /// <summary>
        /// 预计放行时间
        /// </summary>
        [Description("预计放行时间")]
        public string expectcustomsclearance
        { get; set; }

        /// <summary>
        /// 放箱时间
        /// </summary>
        public string putboxtime { get; set; }

        /// <summary>
        /// 国检通过时间
        /// </summary>
        public string inspectime { get; set; }
        #endregion Model


    }

    /// <summary>
    /// 单证表
	/// </summary>
	[Serializable]
    [DisplayName("item")]
    public partial class declarationdocumentEntity
    {
        public declarationdocumentEntity()
        { }
        #region Model
        /// <summary>
        /// 国内报关文件信息id
        /// </summary>
        [Description("国内报关文件信息id")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string declarationdocumentid
        { get; set; }
        /// <summary>
        /// 单证
        /// </summary>
        [Description("单证")]
        public string eximdocumentid
        { get; set; }
        /// <summary>
        /// 单证情况 2副本 1正本
        /// </summary>
        [Description("单证情况")]
        public string Positivecopy
        { get; set; }
        /// <summary>
        /// 收到正本
        /// </summary>
        [Description("收到正本")]
        public string originalreceive
        { get; set; }
        /// <summary>
        /// 正本时间
        /// </summary>
        [Description("正本时间")]
        public string originaltime
        { get; set; }
        /// <summary>
        /// 收到副本
        /// </summary>
        [Description("收到副本")]
        public string copyreceive
        { get; set; }
        /// <summary>
        /// 副本时间
        /// </summary>
        [Description("副本时间")]
        public string copytime
        { get; set; }
        /// <summary>
        /// 审单结果
        /// </summary>
        [Description("审单结果")]
        public string ExaminationResults
        { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        [Description("备注")]
        public string note
        { get; set; }

        #endregion Model
    }

    public partial class declarationdocument1Entity
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
        public List<declarationdocumentEntity> items { get; set; }
    }
}

