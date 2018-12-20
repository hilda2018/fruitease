/**  版本信息模板在安装目录下，可自行修改。
* businessmargin.cs
*
* 功 能： N/A
* 类 名： businessmargin
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/2/3 13:17:52   $creater    初版
*
*/
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Attributes;

namespace Interfaces.Model
{
	/// <summary>
    /// 实体类
	/// </summary>
	[Serializable]
    [DisplayName("business")]
	public partial class businessmarginEntity
	{
		public businessmarginEntity()
		{}
		#region Model
		/// <summary>
		/// 代卖ID
		/// </summary>
		[Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string SupplierSellID
        { get;set; }

		/// <summary>
		/// 保证金金额
		/// </summary>
		[Description("保证金金额")]
		public string margin
		{ get;set; }
		/// <summary>
		/// 保证金日期
		/// </summary>
		[Description("保证金日期")]
		public string margindate
		{ get;set; }
		/// <summary>
		/// 保证金单据号
		/// </summary>
		[Description("保证金单据号")]
		public string margindocument
		{ get;set; }
		/// <summary>
		/// 保证金截止日期
		/// </summary>
		[Description("保证金截止日期")]
		public string marginenddate
		{ get;set; }
		/// <summary>
		/// 转关税金额
		/// </summary>
		[Description("转关税金额")]
		public string transittaxamount
		{ get;set; }
		/// <summary>
		/// 转增值税金额
		/// </summary>
		[Description("转增值税金额")]
		public string vatamount
		{ get;set; }
		/// <summary>
		/// 退保金额
		/// </summary>
		[Description("退保金额")]
		public string importcustomsduty
		{ get;set; }
		/// <summary>
		/// 退保日期
		/// </summary>
		[Description("退保日期")]
		public string surrenderdate
		{ get;set; }

		#endregion Model
	}
}

