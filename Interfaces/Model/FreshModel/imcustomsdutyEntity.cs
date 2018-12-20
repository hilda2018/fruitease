/**  版本信息模板在安装目录下，可自行修改。
* imcustomsduty.cs
*
* 功 能： N/A
* 类 名： imcustomsduty
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/1/23 14:15:36   $creater    初版
*
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Interfaces.Model
{
    /// <summary>
    /// 国际报关税金
    /// </summary>
    [Serializable]
    [DisplayName("imcustomsduty")]
    public partial class imcustomsdutyEntity
    {
        public imcustomsdutyEntity()
        { }
        #region Model
        /// <summary>
        /// 分录id
        /// </summary>
        [Description("分录id")]
        public string imcustomsdutyitemid
        { get; set; }
        /// <summary>
        /// 保证金金额
        /// </summary>
        [Description("保证金金额")]
        public string bond
        { get; set; }
        /// <summary>
        /// 保证金日期
        /// </summary>
        [Description("保证金日期")]
        public string paytaxesdate
        { get; set; }
        /// <summary>
        /// 关税
        /// </summary>
        [Description("关税")]
        public string importtariff
        { get; set; }
        /// <summary>
        /// 增值税
        /// </summary>
        [Description("增值税")]
        public string importvat
        { get; set; }
        /// <summary>
        /// 滞纳金
        /// </summary>
        [Description("滞纳金")]
        public string latefees
        { get; set; }

        #endregion Model


    }
    /// <summary>
    /// 国际报关税金封装对象
    /// </summary>
    public class imcustomsduty1
    {
        private string _suppliersellid;
        /// <summary>
        /// 代卖ID
        /// </summary>
        [Description("代卖ID")]
        public string SupplierSellID
        {
            set { _suppliersellid = value; }
            get { return _suppliersellid; }
        }

        /// <summary>
        /// 
        /// </summary>
        public List<imcustomsdutyEntity> list { get; set; }
    }
}

