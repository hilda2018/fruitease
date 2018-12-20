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
    ///异常原因 列表选择 表格
    /// </summary>
    [Serializable]
    public partial class  ycyy_Select_List_Service
    {
        public string ycyybm{ get; set; } 
        public string ycyymc{ get; set; } 
        public string sfmx{ get; set; } 
        public string ycyylb{ get; set; } 
        public string yy{ get; set; }   

    }

}

