/**  版本信息模板在安装目录下，可自行修改。

*
*/
using System;
using System.ComponentModel;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    ///  yw_hddz_yszd_zhsz
    ///  货代单证——应收账单——账号设置 --（账单设置）
    ///  lxfs  联系方式
    ///  客户银行
    ///  账号

    /// </summary>
    [Serializable]
    public partial class Get_Yszd_Zhsz_Table_Data
    {
        public string jdrbm { get; set; }    // 接单人编码
        public string jdrmc { get; set; }     //  接单人名称
        public string zdlx { get; set; }    //  账单类型
        public string gstt { get; set; }    //  公司抬头
        public string zh { get; set; }      //账号
        public string khyh { get; set; } // 客户银行
        public string lxfs { get; set; }  //联系方式
        public int key_id { get; set; }  //key 主键
    }

}

