using System;
using System.ComponentModel;
using Attributes;

namespace Interfaces.Model
{
    /// <summary>
    /// ocr映射关系存储表
    /// </summary>
    public class yw_hddz_ocrvalmapEntity
    {
        /// <summary>
        /// 主键
        /// </summary>
        public string ID { get; set; }
        /// <summary>
        /// 所属字段
        /// </summary>
        public string field { get; set; }
        /// <summary>
        /// 所属字段名称
        /// </summary>
        public string fieldname { get; set; }
        /// <summary>
        /// 字段关联从表名称
        /// </summary>
        public string tablename { get; set; }



        /// <summary>
        /// ocr系统获取的值
        /// </summary>
        public string ocrvalue { get; set; }

        /// <summary>
        /// 水果通系统对应的值（如果空则需要从表添加数据）
        /// </summary>
        public string value { get; set; }
    }
}
