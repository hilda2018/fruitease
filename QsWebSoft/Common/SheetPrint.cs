using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QsWebSoft
{
    public class SheetPrint
    {
        private string _name;

        /// <summary>
        /// 报表名称
        /// </summary>
        public string Name 
        { 
            get { return _name; }
            set { _name = value; } 
        }

        private string _parameter;
        /// <summary>
        /// 报表参数
        /// </summary>
        public string Parameter
        {
            get { return _parameter; }
            set { _parameter = value; }
        }

        private string _sqlText;
        /// <summary>
        /// 报表SQL
        /// </summary>
        public string SQLText
        {
            get { return _sqlText; }
            set { _sqlText = value; }
        }

        private string _path;
        /// <summary>
        /// 报表路径
        /// </summary>
        public string Path
        {
            get { return _path; }
            set { _path = value; }
        }
    }
}