using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    /// <summary>
    /// 地图查询记录
    /// </summary>
    public class s_log_mapEntity
    {
        /// <summary>
        /// ID
        /// </summary>
        public string logid { get; set; }

        /// <summary>
        /// 车牌号
        /// </summary>
        public string cph { get; set; }


        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime cjsj { get; set; }

        /// <summary>
        /// 错误日志
        /// </summary>
        public string msg { get; set; }

        public string userId { get; set; }

        public string token { get; set; }
    }
}
