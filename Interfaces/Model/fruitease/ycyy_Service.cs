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
    ///异常原因 表格
    /// </summary>
    [Serializable]
    public partial class ycyy_Service
    {

        

        public string wxsffs{ get; set; }
        public string id{ get; set; }  
        public string zbr{ get; set; }   
        public string zbrq{ get; set; }   
        public string ycyybm{ get; set; }   
        public string ycyymc{ get; set; }   
        public string beizhu{ get; set; }   
        public string ycyyqc{ get; set; }   
        public string ycyyqcsj{ get; set; } 
        public string ywbh{ get; set; }    
        public int cxh{ get; set; }   
        public string yy{ get; set; }   

    }

}
