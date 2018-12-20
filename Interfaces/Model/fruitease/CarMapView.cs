using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    /// <summary>
    /// 地图车辆信息封装
    /// </summary>
    public class CarMapView
    {

        public string rownumber { get; set; }
        /// <summary>
        /// 车牌号
        /// </summary>
        public string cph { get; set; }

        /// <summary>
        /// 集装箱号
        /// </summary>
        /// 

        public string sfybd { get; set; }

        /// <summary>
        /// 北斗设备号
        /// 
        /// </summary>
        public string bdsbh { get; set; }

        /// <summary>
        /// 北斗设备号
        /// </summary>
        
        public string jzxh { get; set; }

        /// <summary>
        /// 提单号
        /// </summary>
        public string ztdh { get; set; }

        /// <summary>
        /// 卸货港区
        /// </summary>
        public string xhgqjc { get; set; }

        /// <summary>
        /// 检疫点
        /// </summary>
        public string jyd_jc { get; set; }


        /// <summary>
        /// 目的地
        /// </summary>
        public string mdd { get; set; }

        /// <summary>
        /// 目的地
        /// </summary>
        public string zt { get; set; }

        /// <summary>
        /// 目的地
        /// </summary>
        public string htjhthsj { get; set; }
        /// <summary>
        /// 目的地
        /// </summary>
        public string cgqsj { get; set; }


        /// <summary>
        /// 目的地
        /// </summary>
        public string xccy { get; set; }

        /// <summary>
        /// 到达检疫点时间
        /// </summary>
        public string djydsj { get; set; }

        /// <summary>
        /// 扣柜时间
        /// </summary>
        public string kgsj { get; set; }


        /// <summary>
        /// 通过检疫时间爱女
        /// </summary>
        public string tgjysj { get; set; }


        /// <summary>
        /// 离开检疫点时间
        /// </summary>
        public string lkjydsj { get; set; }

        /// <summary>
        /// 目的地
        /// </summary>
        public string sdsj { get; set; }

        /// <summary>
        /// 目的地
        /// </summary>
        public string gqdjydsc { get; set; }

        /// <summary>
        /// 目的地
        /// </summary>
        public string jyddsdsc { get; set; }

        /// <summary>
        /// 目的地
        /// </summary>
        public string gqdsdsc { get; set; }

        /// <summary>
        /// 接单人
        /// </summary>
        public string jdrjc { get; set; }

        /// <summary>
        /// 客户
        /// </summary>
        public string khjc { get; set; }

        /// <summary>
        /// 监控开始时间
        /// </summary>
        public string startdate { get; set; }

        /// <summary>
        /// 监控结束时间
        /// </summary>
        public string enddate { get; set; }
        /// <summary>
        /// 任务编号
        /// </summary>
        public string rwbh { get; set; }

        /// <summary>
        /// 任务状态 1 围栏监控  
        /// </summary>
        public int? rwzt { get; set; }
    }
}
