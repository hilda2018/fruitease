/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_dzyq_cmd.cs
*
* 功 能： N/A
* 类 名： yw_hddz_dzyq_cmd
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/3 14:26:54   $creater    初版
*
*/
using System;
using System.ComponentModel;

namespace Interfaces.Model
{
	/// <summary>
    /// 实体类
	/// </summary>
	[Serializable]
	public partial class yw_hddz_dzyq_cmdEntity
	{
		public yw_hddz_dzyq_cmdEntity()
		{}
		#region Model
		/// <summary>
		/// 业务编号
		/// </summary>
		[Description("业务编号")]
		public string ywbh
		{ get;set; }
		/// <summary>
		/// 次序号
		/// </summary>
		[Description("次序号")]
		public string cxh
		{ get;set; }
		/// <summary>
		/// 次序号明细
		/// </summary>
		[Description("次序号明细")]
		public string cxh_mx
		{ get;set; }
		/// <summary>
		/// 审单结果
		/// </summary>
		[Description("审单结果")]
		public string sdjg
		{ get;set; }
		/// <summary>
		/// 审单内容
		/// </summary>
		[Description("审单内容")]
		public string sdnr
		{ get;set; }
		/// <summary>
		/// 审单时间
		/// </summary>
		[Description("审单时间")]
		public string sdsj
		{ get;set; }
		/// <summary>
		/// 审单人
		/// </summary>
		[Description("审单人")]
		public string sdr
		{ get;set; }
		/// <summary>
		/// 是否收到正本
		/// </summary>
		[Description("是否收到正本")]
		public string sfsdzb
		{ get;set; }
		/// <summary>
		/// 收到正本时间
		/// </summary>
		[Description("收到正本时间")]
		public string sdzbsj
		{ get;set; }
		/// <summary>
		/// 收到正本人员
		/// </summary>
		[Description("收到正本人员")]
		public string sdzbry
		{ get;set; }
		/// <summary>
		/// 是否收到副本
		/// </summary>
		[Description("是否收到副本")]
		public string sfsdfb
		{ get;set; }
		/// <summary>
		/// 收到副本时间
		/// </summary>
		[Description("收到副本时间")]
		public string sdfbsj
		{ get;set; }
		/// <summary>
		/// 收到副本人员
		/// </summary>
		[Description("收到副本人员")]
		public string sdfbry
		{ get;set; }

		#endregion Model


	}
}

