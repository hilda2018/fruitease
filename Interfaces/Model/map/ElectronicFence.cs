using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model.map
{
    /// <summary>
    /// 电子围栏
    /// </summary>
    public class ElectronicFence
    {
        /// <summary>
        /// 地址
        /// </summary>
        public string address { get; set; }
        public string source { get { return "0"; } }
        /// <summary>
        /// 主键id
        /// </summary>
        public string uniqueId { get; set; }

        /// <summary>
        /// 用户Id
        /// </summary>
        public string userId { get; set; }
        /// <summary>
        /// 纬度
        /// </summary>
        public string lat { get; set; }
        /// <summary>
        /// 经度
        /// </summary>
        public string lng { get; set; }
        /// <summary>
        /// 半径
        /// </summary>
        public string radius { get; set; }


        /// <summary>
        /// 地图类型 圆形--circle 多边形---polygon
        /// </summary>
        public string style { get; set; }
        /// <summary>
        /// 多边形坐标
        /// </summary>
        public string points { get; set; }
    }
}
