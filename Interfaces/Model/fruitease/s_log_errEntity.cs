/**  版本信息模板在安装目录下，可自行修改。
* s_log_err.cs
*
* 功 能： N/A
* 类 名： s_log_err
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/23 14:49:49   $creater    初版
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
	public partial class s_log_errEntity
	{
		public s_log_errEntity()
		{}
		#region Model
		/// <summary>
		/// ID
		/// </summary>
		[Description("ID")]
		public string eid
		{ get;set; }
		/// <summary>
		/// 表名
		/// </summary>
		[Description("表名")]
		public string tablename
		{ get;set; }
		/// <summary>
		/// 更新表字段
		/// </summary>
		[Description("更新表字段")]
		public string changecols
		{ get;set; }
		/// <summary>
		/// 接口传递的主键ID
		/// </summary>
		[Description("接口传递的主键ID")]
		public string mainid
		{ get;set; }
		/// <summary>
		/// 异常日志
		/// </summary>
		[Description("异常日志")]
		public string errmsg
		{ get;set; }
		/// <summary>
		/// 其他参数 多个用半角逗号分隔
		/// </summary>
		[Description("其他参数 多个用半角逗号分隔")]
		public string parameters
		{ get;set; }
		/// <summary>
		/// 创建时间
		/// </summary>
		[Description("创建时间")]
		public DateTime? cjsj
		{ get;set; }
		/// <summary>
		/// 上次重试时间
		/// </summary>
		[Description("上次重试时间")]
		public DateTime? sccssj
		{ get;set; }
		/// <summary>
		/// 重试次数
		/// </summary>
		[Description("重试次数")]
		public int cscs
		{ get;set; }
		/// <summary>
		/// 是否重试同步成功 0 --失败 1--成功
		/// </summary>
		[Description("是否重试同步成功 0 --失败 1--成功")]
		public int sfcg
		{ get;set; }
        /// <summary>
        /// 方法名
        /// </summary>
        public string funname { get; set; }

		#endregion Model


	}
}

