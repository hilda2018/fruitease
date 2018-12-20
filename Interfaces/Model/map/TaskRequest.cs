using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model.map
{
    public class TaskRequest
    {
        public string id { get; set; }

        public string userId { get; set; }

        public string taskNo { get; set; }

        public int no { get; set; }

        public string source { get; set; }

        public string vno { get; set; }

        public string address { get; set; }

        public string lat { get; set; }

        public string lng { get; set; }

        public string radius { get; set; }

        /// <summary>
        /// 监听进还是出  0-进 1-出
        /// </summary>
        public string listenStatus { get; set; }

        public string crttime { get; set; }

        public string crttype { get; set; }
    }
}
