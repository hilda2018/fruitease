using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model.map
{
    public class FenceResponse
    {
        /// <summary>
        /// 执行结果 1--查询失败 0---查询成功
        /// </summary>
        public string code { get; set; }

        public string des { get; set; }

        public object result { get; set; }
    }

    public class FenceResponse<T>
    {
        /// <summary>
        /// 执行结果 1--查询失败 0---查询成功
        /// </summary>
        public string code { get; set; }

        public string des { get; set; }

        public T result { get; set; }
    }
}
