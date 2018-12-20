/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz.cs
*
* 功 能： N/A
* 类 名： yw_hddz
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/4/7 17:48:50   $creater    初版
*
*/
using System;
using System.ComponentModel;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    /// 货代单证
    /// </summary>
    [Serializable]
    public partial class d_menu_Entity
    {
        public string ID{ get; set; }
        public string ParentID { get; set; }
        public string Seq { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string OpenStyle{ get; set; }
        public string WindowName { get; set; }
        public string OpenParm { get; set; }
        public string IsLast { get; set; }
        public string IsValid { get; set; }
   


    }

}

