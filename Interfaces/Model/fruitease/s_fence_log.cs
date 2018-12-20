using Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    public class s_fence_log
    {
        [Column(ColumnType.guidPK)]
        public string id { get; set; }
        public string rwbh { get; set; }

        public string dzwlbh { get; set; }

        public DateTime? rwkssj { get; set; }
        /// <summary>
        /// 发送请求   如果数据未通过校验则是 水果通wlgz数据json
        /// </summary>
        public string reqjson { get; set; }

        public string resjson { get; set; }
        public string jklx { get; set; }

       

        public string cph { get; set; }
        /// <summary>
        /// 是否新增任务
        /// </summary>
        public int? sfxz { get; set; }

        /// <summary>
        /// 跳过节点记录
        /// </summary>
        public int? tgjd { get; set; }

        public string msg { get; set; }
        /// <summary>
        /// 是否成功 0--失败 1--成功
        /// </summary>
        public int? sfcg { get; set; }
    }
    
}
