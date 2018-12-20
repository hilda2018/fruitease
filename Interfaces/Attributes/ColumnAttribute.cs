using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;

namespace Attributes
{
    /// <summary>
    /// 列字段
    /// </summary>
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property)]
    public class ColumnAttribute : BaseAttribute
    {
        /// <summary>
        /// 自增长
        /// </summary>
        public bool AutoIncrement { get; set; }
        public ColumnAttribute()
        {
            AutoIncrement = false;
        }
        /// <summary>
        /// 标识字段只读，不可插入或修改
        /// </summary>
        public bool ReadOnly { get; set; }
        /// <summary>
        /// 是否主键
        /// </summary>
        public bool IsPK { get; set; }
        /// <summary>
        /// 不可修改列（可插入）
        /// </summary>
        public bool EditDisable { get; set; }

        /// <summary>
        /// 字段属性设置
        /// </summary>
        /// <param name="t">列类型</param>
        public ColumnAttribute(ColumnType t)
        {
            switch (t)
            {
                case ColumnType.autoIncrementPK:
                    AutoIncrement = false;
                    EditDisable = true;
                    IsPK = true;
                    break;
                case ColumnType.guidPK:
                    AutoIncrement = false;
                    EditDisable = true;
                    IsPK = true;
                    break;
                case ColumnType.autoIncrement:
                    AutoIncrement = true;
                    break;
                case ColumnType.EditDisabled:
                    EditDisable = true;
                    break;
                case ColumnType.ReadOnly:
                    ReadOnly = true;
                    break;
            }
            
        }


    }


    public enum ColumnType
    {
        [Description("自增主键")]
        autoIncrementPK,
        [Description("Guid主键")]
        guidPK,
        [Description("自增长列")]
        autoIncrement,
        [Description("修改时不能修改")]
        EditDisabled,
        [Description("不能修改")]
        ReadOnly
    }
}
