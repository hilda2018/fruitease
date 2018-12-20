/**  版本信息模板在安装目录下，可自行修改。
* interfield.cs
*
* 功 能： N/A
* 类 名： interfield
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/10/25 15:15:54   $creater    初版
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
	public partial class interfieldEntity
	{
		public interfieldEntity()
		{}
		#region Model
		/// <summary>
		/// 接口字段表id
		/// </summary>
		[Description("接口字段表id")]
		public string id
		{ get;set; }
		/// <summary>
		/// 接口表
		/// </summary>
		[Description("接口表")]
		public string interid
		{ get;set; }
		/// <summary>
		/// 表名
		/// </summary>
		[Description("表名")]
		public string tbname
		{ get;set; }
		/// <summary>
		/// 字段名称
		/// </summary>
		[Description("字段名称")]
		public string fdname
		{ get;set; }
		/// <summary>
		/// 备注
		/// </summary>
		[Description("备注")]
		public string note
		{ get;set; }


        /// <summary>
        /// xml字段
        /// </summary>
        [Description("xml字段")]
        public string freshportfdname
        { get; set; }
        #endregion Model


    }
}

