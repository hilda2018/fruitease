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
    ///预警内容 表格
    /// </summary>
    [Serializable]
    public partial class Get_Warning_Table_Service
    {
        public string yjlxbm{ get; set; }
        public string yjlxmc{ get; set; }
        public string ywbh { get; set; }
        public string rownumber { get; set; }
        public string yjsj { get; set; }
        public string ry { get; set; }
        public string sfhys{ get; set; }
        public string rymc { get; set; }
        public string yjnr { get; set; }
        public string ycd{ get; set; }
        public string sp{ get; set; }
        public string xq{ get; set; }
        public string  total{ get; set; }
        public string qzyj{ get; set; }
        public string jsq{ get; set; }
        public string jdrjc{ get; set; }
        public string sfyycyy { get; set; }
        public int xh{ get; set; }
        public string hth { get; set; }
        public string sfgx{ get; set; }

    }

}

