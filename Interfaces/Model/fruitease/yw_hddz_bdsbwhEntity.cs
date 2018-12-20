/**  版本信息模板在安装目录下，可自行修改。
* yw_hddz_dzyq.cs
*
* 功 能： N/A
* 类 名： yw_hddz_dzyq
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/11/3 15:52:25   $creater    初版
*/
using System;
using System.ComponentModel;

namespace Interfaces.Model
{
	/// <summary>
    /// 实体类
	/// </summary>
	[Serializable]
	public partial class yw_hddz_bdsbwhEntity
	{
        public yw_hddz_bdsbwhEntity()
		{}
		#region Model

		public string bdyssbh
		{ get;set; }

        public string adr { get; set; }

        public string status { get; set; }
        public string onlineStatus { get; set; }
        public string odometer { get; set; }
        public string vno { get; set; }
        public string deviceNum { get; set; }

        public string deviceID { get; set; }
		#endregion Model


	}
}

