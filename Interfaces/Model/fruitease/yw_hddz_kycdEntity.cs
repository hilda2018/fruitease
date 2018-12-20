/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_kycd.cs
*
* 功 能： N/A
* 类 名： yw_hddz_kycd
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/10 13:39:50   $creater    初版
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
	public partial class yw_hddz_kycdEntity
	{
		public yw_hddz_kycdEntity()
		{}
		#region Model
		/// <summary>
		/// 车队配货编码
		/// </summary>
		[Description("车队配货编码")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string cdphbm
		{ get;set; }
		/// <summary>
		/// 制表人
		/// </summary>
		[Description("制表人")]
		public string zbr
		{ get;set; }
		/// <summary>
		/// 制表日期
		/// </summary>
		[Description("制表日期")]
		public string zbrq
		{ get;set; }
		/// <summary>
		/// 司机
		/// </summary>
		[Description("司机")]
		public string sj
		{ get;set; }
		/// <summary>
		/// 司机联系方式
		/// </summary>
		[Description("司机联系方式")]
		public string sjlxfs
		{ get;set; }
		/// <summary>
		/// 车牌号
		/// </summary>
		[Description("车牌号")]
		public string cph
		{ get;set; }
		/// <summary>
		/// 出港区时间
		/// </summary>
		[Description("出港区时间")]
		public DateTime? cgqsj
		{ get;set; }
		/// <summary>
		/// 到检疫点时间
		/// </summary>
		[Description("到检疫点时间")]
		public DateTime? djydsj
		{ get;set; }

		#endregion Model


	}
}

