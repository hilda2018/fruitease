
using Attributes;
/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_tpcdxx.cs
*
* 功 能： N/A
* 类 名： yw_hddz_tpcdxx
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/10 14:45:55   $creater    初版
*
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
	/// <summary>
    /// 实体类
	/// </summary>
	[Serializable]
	public partial class yw_hddz_tpcdxxEntity
	{
		public yw_hddz_tpcdxxEntity()
		{}
        #region Model
        /// <summary>
        /// 车队配货编码
        /// </summary>
        [Description("车队配货编码")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string cdphbm
        { get; set; }
        
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
		/// 装车数量
		/// </summary>
		[Description("装车数量")]
		public string gq_tpxx
		{ get;set; }
		/// <summary>
		/// 签收时间
		/// </summary>
		[Description("签收时间")]
		public string qdsj
		{ get;set; }

		#endregion Model


	}
}

