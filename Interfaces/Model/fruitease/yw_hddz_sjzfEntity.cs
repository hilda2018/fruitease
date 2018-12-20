/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_sjzf.cs
*
* 功 能： N/A
* 类 名： yw_hddz_sjzf
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/1/23 14:45:42   $creater    初版
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
    public partial class yw_hddz_sjzfEntity
    {
        public yw_hddz_sjzfEntity()
        { }
        #region Model
        /// <summary>
        /// 业务编号
        /// </summary>
        [Description("业务编号")]
        public string ywbh
        { get; set; }
        /// <summary>
        /// 次序号
        /// </summary>
        [Description("次序号")]
        public int cxh
        { get; set; }

        /// <summary>
        /// 数据类型
        /// </summary>
        [Description("数据类型")]
        public string sjlx
        { get; set; }


        /// <summary>
        /// 报税类型
        /// </summary>
        [Description("报税类型")]
        public string bslx
        { get; set; }

        /// <summary>
        /// 报税次数
        /// </summary>
        [Description("报税次数")]
        public int bscs
        { get; set; }
        /// <summary>
        /// 金额
        /// </summary>
        [Description("金额")]
        public decimal sjje
        { get; set; }
        /// <summary>
        /// 支付时间
        /// </summary>
        [Description("支付时间")]
        public DateTime? sjzfrq
        { get; set; }



        #endregion Model


    }
}

