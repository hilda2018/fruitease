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
    /// 接单人
    /// </summary>
    [Serializable]
    public partial class Get_Jdr
    {
        public string khjc{ get; set; }
    }
}

