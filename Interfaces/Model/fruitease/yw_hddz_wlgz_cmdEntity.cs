/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_wlgz_cmd.cs
*
* 功 能： N/A
* 类 名： yw_hddz_wlgz_cmd
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/8/8 15:38:52   $creater    初版
*
*/
using System;
using System.ComponentModel;

namespace Interfaces.Model
{
	/// <summary>
    /// 物流跟踪详细
	/// </summary>
	[Serializable]
	public partial class yw_hddz_wlgz_cmdEntity
	{
		public yw_hddz_wlgz_cmdEntity()
		{}
		#region Model
		/// <summary>
		/// 任务编号
		/// </summary>
		[Description("任务编号")]
		public string rwbh
		{ get;set; }
		/// <summary>
		/// 任务序号
		/// </summary>
		[Description("任务序号")]
		public int rwxh
		{ get;set; }
		/// <summary>
		/// 任务备注
		/// </summary>
		[Description("任务备注")]
		public string rwbz
		{ get;set; }
		/// <summary>
		/// 业务编号
		/// </summary>
		[Description("业务编号")]
		public string ywbh
		{ get;set; }
		/// <summary>
		/// 任务名称
		/// </summary>
		[Description("任务名称")]
		public string rwmc
		{ get;set; }
		/// <summary>
		/// 任务类型
		/// </summary>
		[Description("任务类型")]
		public string rwlx
		{ get;set; }
		/// <summary>
		/// 货代单证次序号
		/// </summary>
		[Description("货代单证次序号")]
		public int hddz_cxh
		{ get;set; }
        /// <summary>
        /// 经度
        /// </summary>
        [Description("经度")]
        public string jd
        { get; set; }
        /// <summary>
        /// 纬度
        /// </summary>
        [Description("纬度")]
        public string wd
        { get; set; }
        /// <summary>
        /// 进入电子围栏时间
        /// </summary>
        [Description("进入电子围栏时间")]
		public DateTime? jrdzwlsj
		{ get;set; }

        /// <summary>
        /// 进入电子围栏时间
        /// </summary>
        [Description("进入电子围栏录入时间")]
        public DateTime? jdzwlsj_lrsj
        { get; set; }
        /// <summary>
        /// 范围
        /// </summary>
        [Description("范围")]
		public string fw
		{ get;set; }
		/// <summary>
		/// 出电子围栏时间
		/// </summary>
		[Description("出电子围栏时间")]
		public DateTime? cdzwlsj { get; set; }

        /// <summary>
        /// 出电子围栏时间
        /// </summary>
        [Description("出电子围栏录入时间")]
        public DateTime? cdzwlsj_lrsj
        { get;set; }
        /// <summary>
        /// 出电子围栏时间 操作人员
        /// </summary>
        public string cdzwlsj_czry { get; set; }
        /// <summary>
        /// 进入电子围栏时间 操作人员
        /// </summary>
        public string jdzwlsj_czry { get; set; }
        /// <summary>
        /// 是否长时间停留
        /// </summary>
        [Description("是否长时间停留")]
		public string sfcsjzl
		{ get;set; }
		/// <summary>
		/// 滞留起始时间
		/// </summary>
		[Description("滞留起始时间")]
		public string zlqssj
		{ get;set; }
		/// <summary>
		/// 地址
		/// </summary>
		[Description("地址")]
		public string dz
		{ get;set; }
		/// <summary>
		/// 起点标志
		/// </summary>
		[Description("起点标志")]
		public string qdbz
		{ get;set; }
		/// <summary>
		/// 次序号
		/// </summary>
		[Description("次序号")]
		public int cxh
		{ get;set; }
		/// <summary>
		/// 终点标志
		/// </summary>
		[Description("终点标志")]
		public string zdbz
		{ get;set; }
		/// <summary>
		/// 省份
		/// </summary>
		[Description("省份")]
		public string dz_sf
		{ get;set; }
		/// <summary>
		/// 地区
		/// </summary>
		[Description("地区")]
		public string dz_dq
		{ get;set; }
		/// <summary>
		/// 计费区域
		/// </summary>
		[Description("计费区域")]
		public string dz_lm
		{ get;set; }
		/// <summary>
		/// 物流序号
		/// </summary>
		[Description("物流序号")]
		public int wlxh
		{ get;set; }
		/// <summary>
		/// 费用金额
		/// </summary>
		[Description("费用金额")]
		public decimal fyje
		{ get;set; }
		/// <summary>
		/// 备注
		/// </summary>
		[Description("备注")]
		public string beizhu
		{ get;set; }
		

        public string  dz_xx { get; set; }

        public int wllx { get; set; }
        public string points { get; set; }
        #endregion Model


    }
}

