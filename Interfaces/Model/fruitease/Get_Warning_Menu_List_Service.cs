/*
 *
 *2018 17 27
 *
 *
 *
 */
using System;
using System.ComponentModel;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    ///预警内容 菜单
    /// </summary>
    [Serializable]
    public partial class Get_Warning_Menu_List_Service
    {
        public string yjlxbh{ get; set; }
        public string yjlxmc { get; set; }
        public string khsfck { get; set; }
        public string syjbh { get; set; }
        public string IsLast { get; set; }
        public string yjbz{ get; set; }
        public string xh{ get; set; }
    }

}

