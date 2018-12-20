using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Interfaces.Model
{
    /// <summary>
    /// 币种表
    /// </summary>
    public class t_currencyEntity
    {
        /// <summary>
        /// 币种类型 主键
        /// </summary>
        public string cu_type { get; set; }
        
        public string cu_cname { get; set; }

        public string cu_ename { get; set; }

        /// <summary>
        /// 折美元汇率
        /// </summary>
        public decimal xchg_usd { get; set; }

        /// <summary>
        /// 折人民币汇率
        /// </summary>
        public decimal xchg_rmb { get; set; }

        public string GetPK(){
            return "cu_type";
        }
    }
}