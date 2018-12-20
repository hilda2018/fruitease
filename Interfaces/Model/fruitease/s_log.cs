using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    /// <summary>
    /// 错误日志
    /// </summary>
    public class s_log
    {
        /// <summary>
        /// ID
        /// </summary>
        public string logid { get; set; }

        /// <summary>
        /// 业务编号
        /// </summary>
        public string ywbh { get; set; }
        /// <summary>
        /// 次序号 
        /// </summary>
        public int cxh { get; set; }
        /// <summary>
        /// 是否成功 0--失败  1--成功 
        /// </summary>
        public int sfcg { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime cjsj { get; set; }
        /// <summary>
        /// 接口类型
        /// </summary>
        public string jklx { get; set; }
        /// <summary>
        /// 错误日志
        /// </summary>
        public string msg { get; set; }

        public string requestxml { get; set; }

        public string responsexml { get; set; }
    }
}
