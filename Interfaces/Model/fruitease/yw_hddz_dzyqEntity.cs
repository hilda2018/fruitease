/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_dzyq.cs
*
* 功 能： N/A
* 类 名： yw_hddz_dzyq
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/3 15:52:25   $creater    初版
*/
using System;
using System.ComponentModel;

namespace Interfaces.Model
{
	/// <summary>
    /// 实体类
	/// </summary>
	[Serializable]
	public partial class yw_hddz_dzyqEntity
	{
		public yw_hddz_dzyqEntity()
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
		/// 单证名称
		/// </summary>
		[Description("单证名称")]
		public string dzmc
		{ get;set; }
		/// <summary>
		/// 正副本情况
		/// </summary>
		[Description("正副本情况")]
		public string zfbqk
		{ get;set; }
		/// <summary>
		/// 是否收到正本
		/// </summary>
		[Description("是否收到正本")]
		public string sfsdzb
		{ get;set; }
		/// <summary>
		/// 是否收到时间
		/// </summary>
		[Description("是否收到时间")]
		public DateTime? sdzbsj
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
		public DateTime? sdfbsj
		{ get;set; }
		/// <summary>
		/// 收到副本人员
		/// </summary>
		[Description("收到副本人员")]
		public string sdfbry
		{ get;set; }
		/// <summary>
		/// 产品信息库编码
		/// </summary>
		[Description("产品信息库编码")]
		public string cpxxkbm
		{ get;set; }
		/// <summary>
		/// 商品编码
		/// </summary>
		[Description("商品编码")]
		public string spbm
		{ get;set; }
		/// <summary>
		/// 商品中文名称
		/// </summary>
		[Description("商品中文名称")]
		public string spzwmc
		{ get;set; }
		/// <summary>
		/// 国家代码
		/// </summary>
		[Description("国家代码")]
		public string ctr_code
		{ get;set; }
		/// <summary>
		/// 国家中文名称
		/// </summary>
		[Description("国家中文名称")]
		public string ctr_cname
		{ get;set; }
		/// <summary>
		/// 审单最新结果
		/// </summary>
		[Description("审单最新结果")]
		public string sdzxjg
		{ get;set; }
		/// <summary>
		/// 审单最新内容
		/// </summary>
		[Description("审单最新内容")]
		public string sdzxnr
		{ get;set; }
		/// <summary>
		/// 审单最新时间
		/// </summary>
		[Description("审单最新时间")]
		public string sdzxsj
		{ get;set; }
		/// <summary>
		/// 现场收单标志
		/// </summary>
		[Description("现场收单标志")]
		public string xcsdbz
		{ get;set; }

		#endregion Model


	}
}

