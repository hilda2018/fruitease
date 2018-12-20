using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Interfaces.Model
{
    /// <summary>
    /// 收货地址表
    /// </summary>
    public class yw_wldw_gnkh_shdzEntity
    {

        public string yw_khbm { get; set; }

        public string khmc { get; set; }

        public string cxh { get; set; }

        public string shdz { get; set; }

        public string jd { get; set; }

        public string wd { get; set; }

        public string fw { get; set; }

        public string dz_sf { get; set; }
        public string dz_dq { get; set; }

        public string dz_lm { get; set; }

        public DateTime? lrrq { get; set; }

        /// <summary>
        /// 地图类型0-- 圆形circle 1--多边形polygon
        /// </summary>
        public int type { get; set; }

        public string points { get; set; }

        public string sfgx { get; set; }

        public string scmc { get; set; }
    }
}
