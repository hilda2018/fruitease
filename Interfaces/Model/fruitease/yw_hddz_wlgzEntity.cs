/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_wlgz.cs
*
* 功 能： N/A
* 类 名： yw_hddz_wlgz
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/16 15:02:38   $creater    初版
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
    /// 物流跟踪
	/// </summary>
	[Serializable]
	public partial class yw_hddz_wlgzEntity
	{
		public yw_hddz_wlgzEntity()
		{}
		#region Model
		/// <summary>
		/// 任务编号
		/// </summary>
		[Description("任务编号")]
		public string rwbh
		{ get;set; }
		/// <summary>
		/// 制表时间
		/// </summary>
		[Description("制表时间")]
		public string zbsj
		{ get;set; }
		/// <summary>
		/// 制表人
		/// </summary>
		[Description("制表人")]
		public string zbr
		{ get;set; }
		/// <summary>
		/// 任务开始时间
		/// </summary>
		[Description("任务开始时间")]
		public DateTime? rwkssj
		{ get;set; }
		/// <summary>
		/// 任务类型
		/// </summary>
		[Description("任务类型")]
		public string rwlx
		{ get;set; }
		/// <summary>
		/// 业务编号
		/// </summary>
		[Description("业务编号")]
		public string ywbh
		{ get;set; }
		/// <summary>
		/// 手机号
		/// </summary>
		[Description("手机号")]
		public string sjh
		{ get;set; }
		/// <summary>
		/// 司机名称
		/// </summary>
		[Description("司机名称")]
		public string sjmc
		{ get;set; }
		/// <summary>
		/// 是否接收到任务
		/// </summary>
		[Description("是否接收到任务")]
		public string sfjsdrw
		{ get;set; }
		/// <summary>
		/// 货代单证次序号
		/// </summary>
		[Description("货代单证次序号")]
		public string hddz_cxh
		{ get;set; }
		/// <summary>
		/// 身份证号
		/// </summary>
		[Description("身份证号")]
		public string sfzh
		{ get;set; }
		/// <summary>
		/// 集装箱号
		/// </summary>
		[Description("集装箱号")]
		public string jzxh
		{ get;set; }
		/// <summary>
		/// 车牌号
		/// </summary>
		[Description("车牌号")]
		public string cph
		{ get;set; }
		/// <summary>
		/// 车架名称
		/// </summary>
		[Description("车架名称")]
		public string cjmc
		{ get;set; }
		/// <summary>
		/// 车队编码
		/// </summary>
		[Description("车队编码")]
		public string cdbm
		{ get;set; }
		/// <summary>
		/// 车队名称
		/// </summary>
		[Description("车队名称")]
		public string cdmc
		{ get;set; }
		/// <summary>
		/// 车架号
		/// </summary>
		[Description("车架号")]
		public string cjh
		{ get;set; }
		/// <summary>
		/// 与车队关系
		/// </summary>
		[Description("与车队关系")]
		public string ycdgx
		{ get;set; }
		/// <summary>
		/// 结算方式
		/// </summary>
		[Description("结算方式")]
		public string jsfs
		{ get;set; }
		/// <summary>
		/// 费用状态
		/// </summary>
		[Description("费用状态")]
		public string state_fy
		{ get;set; }
		/// <summary>
		/// 数据类型
		/// </summary>
		[Description("数据类型")]
		public string sjlx
		{ get;set; }
		/// <summary>
		/// 任务名称（地址）
		/// </summary>
		[Description("任务名称（地址）")]
		public string rwmc
		{ get;set; }
		/// <summary>
		/// 物流信息
		/// </summary>
		[Description("物流信息")]
		public string wlxx
		{ get;set; }
		/// <summary>
		/// 任务是否完成
		/// </summary>
		[Description("任务是否完成")]
		public string rwsfwc
		{ get;set; }
		/// <summary>
		/// 费用是否确认
		/// </summary>
		[Description("费用是否确认")]
		public string fysfqr
		{ get;set; }
		/// <summary>
		/// 还箱所属码头
		/// </summary>
		[Description("还箱所属码头")]
		public string hxssmt
		{ get;set; }
		/// <summary>
		/// 任务领取时间
		/// </summary>
		[Description("任务领取时间")]
		public string rwlqsj
		{ get;set; }
		/// <summary>
		/// 备注
		/// </summary>
		[Description("备注")]
		public string beizhu
		{ get;set; }

        /// <summary>
        /// 电子围栏编号
        /// </summary>
        public string dzwlbh { get; set; }

        /// <summary>
        /// 电子围栏监控任务状态 0 -- 未添加监控 1-- 已添加监控 2--已结束
        /// </summary>
        public int? status { get; set; }

        /// <summary>
        /// 是否有北斗
        /// </summary>
        public string sfybd { get; set; }
		#endregion Model


	}
}

