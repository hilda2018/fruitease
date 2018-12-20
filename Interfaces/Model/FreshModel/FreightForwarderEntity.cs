/**  版本信息模板在安装目录下，可自行修改。
* freightforwarder.cs
*
* 功 能： N/A
* 类 名： freightforwarder
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/1/20 14:54:48   $creater    初版
*
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Interfaces.Model
{
	/// <summary>
    /// 实体类
	/// </summary>
	[Serializable]
    [DisplayName("huodai")]
	public partial class freightforwarderEntity
	{
		public freightforwarderEntity()
		{}
		#region Model
		/// <summary>
		/// 客户名称
		/// </summary>
		[Description("客户名称")]
		public string buyerid
		{ get;set; }
		/// <summary>
		/// 汇率
		/// </summary>
		[Description("汇率")]
		public string exchangeratenum
		{ get;set; }
		/// <summary>
		/// 币别
		/// </summary>
		[Description("币别")]
		public string currency
		{ get;set; }
        /// <summary>
        /// 金额
        /// </summary>
        [Description("金额")]
		public string money
		{ get;set; }
		/// <summary>
		/// 收款时间
		/// </summary>
		[Description("收款时间")]
		public string paydate
		{ get;set; }
		/// <summary>
		/// 退保日期
		/// </summary>
		[Description("退保日期")]
		public string surrendertime
		{ get;set; }
		/// <summary>
		/// 代买id
		/// </summary>
		[Description("代买id")]
		public string suppliersellid
		{ get;set; }

		#endregion Model


	}
}

