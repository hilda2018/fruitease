/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_wldz.cs
*
* 功 能： N/A
* 类 名： yw_hddz_wldz
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/16 17:11:13   $creater    初版
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
    /// 海运收货人
    /// </summary>
    [Serializable]
    public class yw_hddz_wldzEntity
    {
        public yw_hddz_wldzEntity()
        { }
        #region Model
        /// <summary>
        /// 业务编号
        /// </summary>
        [Description("业务编号")]
        public string ywbh
        { get; set; }
        /// <summary>
        /// 货代单证次序号
        /// </summary>
        [Description("货代单证次序号")]
        public string hddz_cxh
        { get; set; }
        /// <summary>
        /// 次序号
        /// </summary>
        [Description("次序号")]
        public string cxh
        { get; set; }
        /// <summary>
        /// 地址序号
        /// </summary>
        [Description("地址序号")]
        public string dzxh
        { get; set; }
        /// <summary>
        /// 省份
        /// </summary>
        [Description("省份")]
        public string dz_sf
        { get; set; }
        /// <summary>
        /// 地区
        /// </summary>
        [Description("地区")]
        public string dz_dq
        { get; set; }
        /// <summary>
        /// 路名
        /// </summary>
        [Description("路名")]
        public string dz_lm
        { get; set; }
        /// <summary>
        /// 详细地址
        /// </summary>
        [Description("详细地址")]
        public string dz_xx
        { get; set; }
        /// <summary>
        /// 实际收货人编码
        /// </summary>
        [Description("实际收货人编码")]
        public string sjshrbm
        { get; set; }
        /// <summary>
        /// 实际收货人名称
        /// </summary>
        [Description("实际收货人名称")]
        public string sjshrmc
        { get; set; }
        /// <summary>
        /// 联系电话
        /// </summary>
        [Description("联系电话")]
        public string sjshrlxdh
        { get; set; }
        /// <summary>
        /// 联系人
        /// </summary>
        [Description("联系人")]
        public string sjshrlxr
        { get; set; }

        #endregion Model
    }

    public class yw_hddz_wldzView : yw_hddz_wldzEntity
    {
        /// <summary>
        /// 集装箱号
        /// </summary>
        public string jzxh { get; set; }
    }
}

