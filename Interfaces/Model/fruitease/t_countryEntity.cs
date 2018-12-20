/**  版本信息模板在安装目录下，可自行修改。
* t_country.cs
*
* 功 能： N/A
* 类 名： t_country
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2016/5/16 16:58:07   $creater    初版
*
*/
using System;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    /// 国家表
    /// </summary>
    [Serializable]
    public partial class t_countryEntity
    {
        public t_countryEntity()
        { }

        #region Model
        private string _ctr_code;
        /// <summary>
        /// 代码
        /// </summary>
        public string ctr_code
        {
            set { _ctr_code = value; }
            get { return _ctr_code; }
        }
        private string _ctr_cname;
        /// <summary>
        /// 国家名
        /// </summary>
        public string ctr_cname
        {
            set { _ctr_cname = value; }
            get { return _ctr_cname; }
        }
        private string _ctr_ename;
        /// <summary>
        /// 国家名
        /// </summary>
        public string ctr_ename
        {
            set { _ctr_ename = value; }
            get { return _ctr_ename; }
        }
        private string _ctr_area2;
        /// <summary>
        /// 国家所属地区
        /// </summary>
        public string ctr_area2
        {
            set { _ctr_area2 = value; }
            get { return _ctr_area2; }
        }
        private string _dqdm;
        /// <summary>
        /// 地区代码(关联别的字段)
        /// </summary>
        [Column(ColumnType.ReadOnly)]
        public string dqdm
        {
            set { _dqdm = value; }
            get { return _dqdm; }
        }

        public string ctr_hgcode
        {
            get; set;
        }

        public string yzbh
        {
            get; set;
        }

        #endregion Model

    }
}

