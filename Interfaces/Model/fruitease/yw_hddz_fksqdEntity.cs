/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_fksqd.cs
*
* 功 能： N/A
* 类 名： yw_hddz_fksqd
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/1/20 13:47:00   $creater    初版
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
	public partial class yw_hddz_fksqdEntity
	{
		public yw_hddz_fksqdEntity()
		{}
		#region Model
		/// <summary>
		/// 申请单编号
		/// </summary>
		[Description("申请单编号")]
		public string sqdbh
		{ get;set; }
		/// <summary>
		/// 申请人
		/// </summary>
		[Description("申请人")]
		public string zbr
		{ get;set; }
		/// <summary>
		/// 申请日期
		/// </summary>
		[Description("申请日期")]
		public string zbrq
		{ get;set; }
		/// <summary>
		/// 实际收款人编码
		/// </summary>
		[Description("实际收款人编码")]
		public string sjskrbm
		{ get;set; }
		/// <summary>
		/// 实际收款人名称
		/// </summary>
		[Description("实际收款人名称")]
		public string sjskrmc
		{ get;set; }
		/// <summary>
		/// 实际收款人简称
		/// </summary>
		[Description("实际收款人简称")]
		public string sjskrjc
		{ get;set; }
		/// <summary>
		/// 实际收款人拼音码
		/// </summary>
		[Description("实际收款人拼音码")]
		public string sjskrpym
		{ get;set; }
		/// <summary>
		/// 实际收款人开户银行
		/// </summary>
		[Description("实际收款人开户银行")]
		public string sjskrkhyh
		{ get;set; }
		/// <summary>
		/// 实际收款人银行帐号
		/// </summary>
		[Description("实际收款人银行帐号")]
		public string sjskryhzh
		{ get;set; }
		/// <summary>
		/// 付款方式
		/// </summary>
		[Description("付款方式")]
		public string fkfs
		{ get;set; }
		/// <summary>
		/// 申请人公司编码
		/// </summary>
		[Description("申请人公司编码")]
		public string sqrgsbm
		{ get;set; }
		/// <summary>
		/// 申请人公司名称
		/// </summary>
		[Description("申请人公司名称")]
		public string sqrgsmc
		{ get;set; }
		/// <summary>
		/// 申请人公司简称
		/// </summary>
		[Description("申请人公司简称")]
		public string sqrgsjc
		{ get;set; }
		/// <summary>
		/// 申请人公司拼音码
		/// </summary>
		[Description("申请人公司拼音码")]
		public string sqrgspym
		{ get;set; }
		/// <summary>
		/// 支付银行
		/// </summary>
		[Description("支付银行")]
		public string zfyh
		{ get;set; }
		/// <summary>
		/// 支付银行帐号
		/// </summary>
		[Description("支付银行帐号")]
		public string zfyhzh
		{ get;set; }
		/// <summary>
		/// 支付时间
		/// </summary>
		[Description("支付时间")]
		public DateTime? zfsj
		{ get;set; }
		/// <summary>
		/// 币别
		/// </summary>
		[Description("币别")]
		public string wbbb
		{ get;set; }
		/// <summary>
		/// 金额
		/// </summary>
		[Description("金额")]
		public decimal je
		{ get;set; }
		/// <summary>
		/// 折人民币汇率
		/// </summary>
		[Description("折人民币汇率")]
		public decimal zrmbhl
		{ get;set; }
		/// <summary>
		/// 折人民币金额
		/// </summary>
		[Description("折人民币金额")]
		public string zrmbje
		{ get;set; }
		/// <summary>
		/// 备注
		/// </summary>
		[Description("备注")]
		public string beizhu
		{ get;set; }
		/// <summary>
		/// 费用大类
		/// </summary>
		[Description("费用大类")]
		public string fydl
		{ get;set; }
		/// <summary>
		/// 费用大类名称
		/// </summary>
		[Description("费用大类名称")]
		public string fydlmc
		{ get;set; }
		/// <summary>
		/// 付款状态
		/// </summary>
		[Description("付款状态")]
		public string fkzt
		{ get;set; }
		/// <summary>
		/// 应付转实付标志
		/// </summary>
		[Description("应付转实付标志")]
		public string yfzsf
		{ get;set; }
		/// <summary>
		/// 状态
		/// </summary>
		[Description("状态")]
		public string state
		{ get;set; }
		/// <summary>
		/// 读取开始时间
		/// </summary>
		[Description("读取开始时间")]
		public string dqkssj
		{ get;set; }
		/// <summary>
		/// 读取结束时间
		/// </summary>
		[Description("读取结束时间")]
		public string dqjssj
		{ get;set; }
		/// <summary>
		/// 单据类型
		/// </summary>
		[Description("单据类型")]
		public string djlx
		{ get;set; }
		/// <summary>
		/// 支付对象类型
		/// </summary>
		[Description("支付对象类型")]
		public string zfdxlx
		{ get;set; }
		/// <summary>
		/// 车队编码
		/// </summary>
		[Description("车队编码")]
		public string cdbm
		{ get;set; }
		/// <summary>
		/// 汇总业务编号
		/// </summary>
		[Description("汇总业务编号")]
		public string hz_ywbh
		{ get;set; }
		/// <summary>
		/// 汇总合同号
		/// </summary>
		[Description("汇总合同号")]
		public string hz_hth
		{ get;set; }
		/// <summary>
		/// 车队名称
		/// </summary>
		[Description("车队名称")]
		public string cdmc
		{ get;set; }
		/// <summary>
		/// 车队简称
		/// </summary>
		[Description("车队简称")]
		public string cdjc
		{ get;set; }
		/// <summary>
		/// 是否有票
		/// </summary>
		[Description("是否有票")]
		public string sfyp
		{ get;set; }
		/// <summary>
		/// 车队拼音码
		/// </summary>
		[Description("车队拼音码")]
		public string cdpym
		{ get;set; }

		#endregion Model


	}
}

