/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_ycyy.cs
*
* 功 能： N/A
* 类 名： yw_hddz_ycyy
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/9 10:21:37   $creater    初版
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
    public partial class yw_hddz_ycyyEntity
    {
        public yw_hddz_ycyyEntity()
        { }
        #region Model
        /// <summary>
        /// ID
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// 制表人
        /// </summary>
        [Description("制表人")]
        public string zbr
        { get; set; }
        /// <summary>
        /// 制表日期
        /// </summary>
        [Description("制表日期")]
        public DateTime? zbrq
        { get; set; }
        /// <summary>
        /// 异常原因编码
        /// </summary>
        [Description("异常原因编码")]
        public string ycyybm
        { get; set; }
        /// <summary>
        /// 异常原因名称
        /// </summary>
        [Description("异常原因名称")]
        public string ycyymc
        { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        [Description("备注")]
        public string beizhu
        { get; set; }
        /// <summary>
        /// 异常原因取消
        /// </summary>
        [Description("异常原因取消")]
        public string ycyyqc
        { get; set; }
        /// <summary>
        /// 异常原因取消时间
        /// </summary>
        [Description("异常原因取消时间")]
        public string ycyyqcsj
        { get; set; }
        /// <summary>
        /// 微信是否发送
        /// </summary>
        [Description("微信是否发送")]
        public string wxsffs
        { get; set; }
        /// <summary>
        /// 业务编号
        /// </summary>
        [Description("业务编号")]
        public string ywbh
        { get; set; }

        #endregion Model


    }
}

