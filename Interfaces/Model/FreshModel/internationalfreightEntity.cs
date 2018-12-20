/**  版本信息模板在安装目录下，可自行修改。
* internationalfreight.cs
*
* 功 能： N/A
* 类 名： internationalfreight
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/1/19 16:21:15   $creater    初版
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
    [DisplayName("intermoney")]
    public partial class internationalfreightEntity
	{
		public internationalfreightEntity()
		{}
		#region Model
		/// <summary>
		/// 代卖ID
		/// </summary>
		[Description("代卖ID")]
		public string suppliersellid
		{ get;set; }
		/// <summary>
		/// 折人民币汇率
		/// </summary>
		[Description("折人民币汇率")]
		public string exchangeratenum
		{ get;set; }
		/// <summary>
		/// 支付时间
		/// </summary>
		[Description("支付时间")]
		public string paydate
		{ get;set; }
		/// <summary>
		/// 支付金额
		/// </summary>
		[Description("支付金额")]
		public string paymoney
		{ get;set; }

		#endregion Model


	}

    /// <summary>
    /// 集装箱封装
    /// </summary>
    public partial class internationalfreight1
    {


        public List<internationalfreightEntity> list { get; set; }
    }
}

