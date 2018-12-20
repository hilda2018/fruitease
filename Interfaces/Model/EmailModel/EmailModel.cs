using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    /// <summary>
    /// 邮箱查询业务编号对象
    /// </summary>
    public class ToEMailResponse
    {
        /// <summary>
        /// 业务编码
        /// </summary>
        public string code { get; set; }

        /// <summary>
        /// 地区编码
        /// </summary>
        public string area { get; set; }
        /// <summary>
        /// 地区名称
        /// </summary>
        public string areaname { get; set; }

    }
}
