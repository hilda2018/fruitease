/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_jzxxx.cs
*
* 功 能： N/A
* 类 名： yw_hddz_jzxxx
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/7/14 15:13:50   $creater    初版
*
*/
using System;
namespace Interfaces.Model
{
    /// <summary>
    /// 集装箱信息表
    /// </summary>
    [Serializable]
    public partial class yw_hddz_jzxxxEntity
    {
        public yw_hddz_jzxxxEntity()
        { }
        #region Model
        private string _ywbh;
        /// <summary>
        /// 业务编号
        /// </summary>
        public string ywbh
        {
            set { _ywbh = value; }
            get { return _ywbh; }
        }
        /// <summary>
        /// 次序号
        /// </summary>
        public int cxh { get; set; }

        /// <summary>
        /// 集装箱号
        /// </summary>
        public string jzxh { get; set; }

        /// <summary>
        /// 处理方式
        /// </summary>
        public string clfs { get; set; }

        private string _ysfs;
        /// <summary>
        /// 运输方式
        /// </summary>
        public string ysfs
        {
            set { _ysfs = value; }
            get { return _ysfs; }
        }
        private string _xx;
        /// <summary>
        /// 箱型
        /// </summary>
        public string xx
        {
            set { _xx = value; }
            get { return _xx; }
        }
        private string _xl;
        /// <summary>
        /// 箱类
        /// </summary>
        public string xl
        {
            set { _xl = value; }
            get { return _xl; }
        }
        /// <summary>
        /// 装货类型
        /// </summary>
        public string zhlx
        {
            get; set;
        }
        /// <summary>
        /// 托盘信息
        /// </summary>
        public string tpxx
        {
            get; set;
        }

        #endregion Model

        #region 检疫信息
        /// <summary>
        /// 通过检疫时间
        /// </summary>
        public DateTime? tgjysj { get; set; }

        /// <summary>
        /// 检疫放行方式
        /// </summary>
        public string jycydzt { get; set; }
        /// <summary>
        /// 检疫点备注
        /// </summary>
        public string jydbz { get; set; }
        /// <summary>
        /// 扣柜后处理
        /// </summary>
        public string kghcl { get; set; }
        /// <summary>
        /// 送实验室
        /// </summary>
        public string ssys { get; set; }

        /// <summary>
        /// 放箱时间
        /// </summary>
        public DateTime? fxsj { get; set; }

        #endregion

        #region 实际收货人
        /// <summary>
        /// 实际收货单位
        /// </summary>
        public string sjshrmc { get; set; }
        /// <summary>
        /// 联系人
        /// </summary>
        public string lxr { get; set; }
        /// <summary>
        /// 联系电话
        /// </summary>
        public string lxdh { get; set; }

        /// <summary>
        /// 收货地址
        /// </summary>
        public string shdz { get; set; }



        #endregion

        #region 海运提货

        /// <summary>
        /// 后台计划提货时间
        /// </summary>
        public DateTime? htjhthsj { get; set; }

        /// <summary>
        /// 后台计划提货时间端
        /// </summary>
        public string htjhthsj_sjd { get; set; }

        /// <summary>
        /// 出港区时间
        /// </summary>
        public DateTime? cgqsj { get; set; }

        /// <summary>
        /// 卸船时间
        /// </summary>
        public DateTime? xcsj { get; set; }

        /// <summary>
        /// 到检疫点时间
        /// </summary>
        public DateTime? djydsj { get; set; }

        /// <summary>
        /// 检疫点名称
        /// </summary>
        public string jyd_mc { get; set; }

        /// <summary>
        /// 司机
        /// </summary>
        public string gq_sj { get; set; }

        /// <summary>
        /// 司机联系方式
        /// </summary>
        public string gq_sjlxfs { get; set; }


        /// <summary>
        /// 车牌号
        /// </summary>
        public string gq_cp { get; set; }

        #endregion

        #region 还箱超期
        /// <summary>
        /// 回堆场时间
        /// </summary>
        public DateTime? hdcsj { get; set; }
        /// <summary>
        /// 应收超期费确认日期
        /// </summary>
        public DateTime? yscqfqrrq { get; set; }
        #endregion
    }
    /// <summary>
    /// 集装箱货代费用
    /// </summary>
    public class yw_hddz_jzxxx_hdfyView
    {
        /// <summary>
        /// 标识
        /// </summary>
        public string flag { get; set; }

        /// <summary>
        /// 费用名称
        /// </summary>
        public string fymc { get; set; }

        /// <summary>
        /// 费用编码
        /// </summary>
        public string fybm { get; set; }

        /// <summary>
        /// 金额
        /// </summary>
        public decimal je { get; set; }
        /// <summary>
        /// 集装箱号
        /// </summary>
        public string jzxh { get; set; }
    }
}

