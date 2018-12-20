
using Attributes;
/**  版本信息模板在安装目录下，可自行修改。
* abnormal.cs
*
* 功 能： N/A
* 类 名： abnormal
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/9 10:54:19   $creater    初版
*
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Interfaces.Model
{
	/// <summary>
    /// 异常分录
	/// </summary>
	[Serializable]
    [DisplayName("error")]
	public partial class abnormalEntity
	{
		public abnormalEntity()
		{}
		#region Model
		/// <summary>
		/// 异常编号
		/// </summary>
		[Description("异常编号")]
		public string errortypecode
		{ get;set; }
		/// <summary>
		/// 异常名称
		/// </summary>
		[Description("异常名称")]
		public string errortypename
		{ get;set; }
		/// <summary>
		/// 异常时间
		/// </summary>
		[Description("异常时间")]
		public string errortime
		{ get;set; }
		/// <summary>
		/// 备注
		/// </summary>
		[Description("备注")]
		public string note
		{ get;set; }
		///// <summary>
		///// 异常类型
		///// </summary>
		//[Description("异常类型")]
		//public string yclx
		//{ get;set; }
		/// <summary>
		/// 集装箱号
		/// </summary>
		[Description("集装箱号")]
		public string cont
		{ get;set; }

		#endregion Model
	}

    /// <summary>
    /// 异常对象
	/// </summary>
	[Serializable]
    public partial class abnormal1Entity
    {
        public abnormal1Entity()
        { }
        #region Model
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string suppliersellid
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }
        /// <summary>
        /// 异常类型
        /// </summary>
        [Description("异常类型")]
        [ColumnAttribute(ColumnType.guidPK)]
        public string yclx
        { get; set; }
        /// <summary>
        /// 集装箱号
        /// </summary>
        [Description("集装箱号")]
        public string cont
        { get; set; }
        /// <summary>
        /// 异常分录集合
        /// </summary>
        public List<abnormalEntity> error { get; set; }

        #endregion Model
    }
}

