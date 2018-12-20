using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Xml;

namespace Interfaces.Model
{
    /// <summary>
    /// model相关工具
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ModelTools
    {

        /// <summary>
        /// 把xml转换成model,仅支持一层结构
        /// </summary>
        /// <param name="xml"></param>
        /// <returns></returns>
        public static T ConvertXmlToModel<T>(string xml, out string strError) where T : new()
        {
            strError = string.Empty;
            T obj = new T();
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);
            XmlNodeList nodelist = doc.DocumentElement.ChildNodes;

            PropertyInfo[] pis = obj.GetType().GetProperties();

            foreach (PropertyInfo p in pis)
            {
                string colName = p.Name.ToString().ToLower();
                string coltype = p.PropertyType.Name.ToString().ToLower();
                foreach (XmlNode node in nodelist)
                {
                    string str = node.InnerText;
                    string strErr = null;
                    if (string.IsNullOrEmpty(str))
                        continue;

                    if (node.Name.ToLower() == colName)
                    {
                        switch (coltype)
                        {
                            case "string":
                                p.SetValue(obj, node.InnerText, null);
                                break;
                            case "decimal":
                                decimal d = 0;
                                str = treatedNumString(str);
                                if (decimal.TryParse(str, out d))
                                    p.SetValue(obj, d, null);
                                else
                                    strErr = "值不是有效的decimal类型";
                                break;
                            case "double":
                                double d1 = 0;
                                str = treatedNumString(str);
                                if (double.TryParse(str, out d1))
                                    p.SetValue(obj, d1, null);
                                else
                                    strErr = "值不是有效的decimal类型";
                                break;
                            case "float":
                                float f = 0;
                                str = treatedNumString(str);
                                if (float.TryParse(str, out f))
                                    p.SetValue(obj, f, null);
                                else
                                    strErr = "值不是有效的float类型";
                                break;
                            case "int":
                                int i = 0;
                                str = treatedNumString(str);
                                if (int.TryParse(str, out i))
                                    p.SetValue(obj, i, null);
                                else
                                    strErr = "值不是有效的int类型";
                                break;
                            case "datetime":
                                DateTime date = new DateTime();
                                if (DateTime.TryParse(str, out date))
                                {
                                    p.SetValue(obj, date, null);
                                }
                                else
                                    strErr = "值不是有效的datetime类型，有效日期格式为yyyy.mm.dd、yyyy-mm-dd";
                                break;
                            default:
                                strErr = "对象类型(" + coltype + ")暂不支持！";
                                break;
                        }
                        if (strErr != null)//当有错误时 需要
                        {
                            var arri = (DescriptionAttribute)p.GetCustomAttributes(typeof(DescriptionAttribute), true).FirstOrDefault();//.ToList().Find(p => p is DescriptionAttribute);
                            if (arri != null)
                                strError += ("OCR读取的" + arri.Description + "转换时出错，原因:" + strErr + ",值为：" + str + ";");
                            else
                                strError += ("OCR读取的" + colName + "转换时出错，原因:" + strErr + ",值为：" + str + ";");

                        }

                    }
                }
            }
            return obj;
        }

        /// <summary>
        /// 去除字符串中多余的字
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string treatedNumString(string str)
        {
            return Regex.Replace(str, @"[^\d|~.]*", "");
        }
    }


}
