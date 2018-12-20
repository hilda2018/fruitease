using Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    public class s_log_fence
    {
        [Column(ColumnType.guidPK)]
        public string id { get; set; }
        public string rwbh { get; set; }

        public string des { get; set; }

        public DateTime cjsj { get; set; }

        public int? wlxh { get; set; }

        public string cph { get; set; }

        public string dz_xx { get; set; }

        public string jd { get; set; }

        public string wd { get; set; }

        public string fw { get; set; }
        /// <summary>
        /// 监听进还是出  0-进 1-出
        /// </summary>
        public string state { get; set; }

        /// <summary>
        /// 异常类型
        /// 0-- 围栏异常
        /// 1-- 出现程序异常 不用解析json
        /// </summary>
        public string type { get; set; }
    }

    public class s_task_exception: s_log_fence
    {
        public  int status { get; set; }
    }
}
