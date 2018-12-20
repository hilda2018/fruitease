using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model.map
{
    /// <summary>
    /// 电子围栏
    /// </summary>
    public class ElectronicFenceTask
    {

        public string source { get { return "0"; } }
        /// <summary>
        /// 开始时间
        /// </summary>
        public string starttime { get; set; }
        /// <summary>
        /// 结束时间
        /// </summary>
        public string endtime { get; set; }

        /// <summary>
        /// 用户Id
        /// </summary>
        public string userId { get; set; }
        /// <summary>
        /// 任务号
        /// </summary>
        public string taskNo { get; set; }
        /// <summary>
        /// 车牌号
        /// </summary>
        public string vno { get; set; }

        public List<ElectronicFenceTaskItem> fences { get; set; }
    }
    //{"address":"浦星公路永南路1688号","lat":"121.524808","lng":"31.011749","no":3,"radius":"1000","style":"circle","type":"0"}
    public class ElectronicFenceTaskItem
    {
        /// <summary>
        /// 地址
        /// </summary>
        public string address { get; set; }
        /// <summary>
        /// 纬度
        /// </summary>
        public string lat { get; set; }
        /// <summary>
        /// 经度
        /// </summary>
        public string lng { get; set; }
        /// <summary>
        /// 序号 必须是连续的
        /// </summary>
        public int no { get; set; }
        /// <summary>
        /// 半径
        /// </summary>
        public string radius { get; set; }
        /// <summary>
        /// 类型
        /// </summary>
        public string style { get; set; }
        /// <summary>
        /// 监视类型 0 -- 进和出 1--只进 2--只出
        /// </summary>
        public string type { get; set; }

        public string points { get; set; }

    }
}
