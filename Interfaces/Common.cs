using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Reflection;
using System.Security.Cryptography;
using System.IO;
using System.Xml.Serialization;
using System.Net;
using System.Xml;

namespace Interfaces
{
    public class Common<T> where T : new()
    {

        public static T Dt2Model(DataTable dt)
        {
            if (dt == null)
                return default(T);

            if (dt.Rows.Count > 0)
                return Dt2Model(dt.Rows[0]);

            return default(T);
        }

        public static T Dt2Model(DataRow dr)
        {
            T obj = new T();
            Type type = obj.GetType();
            PropertyInfo[] pis = type.GetProperties();
            for (int i = 0; i < pis.Length; i++)
            {
                if (!dr.Table.Columns.Contains(pis[i].Name))
                {
                    continue;
                }
                string dbname = dr[pis[i].Name.ToString()].GetType().Name.ToString().ToLower();
                //修改可用于格式化数据了解
                if (dbname == "dbnull")
                {
                    continue;
                    //pis[i].SetValue(obj, dt.Rows[0][pis[i].Name.ToString()].ToString(), null);
                }
                else
                {
                    if (dr[pis[i].Name.ToString()].ToString() != "") //如果修改的列值不为null，转换（因为有可能导入的时候是用excel导入，有空值）
                    {
                        //pis[i].SetValue(obj, dr[pis[i].Name.ToString()], null);
                        if (pis[i].PropertyType.IsEnum) //属性类型是否表示枚举
                        {
                            object enumName = Enum.Parse(pis[i].PropertyType, dr[pis[i].Name.ToString()].ToString(), false);
                            pis[i].SetValue(obj, enumName, null); //获取枚举值，设置属性值
                        }
                        else
                        {
                            pis[i].SetValue(obj, dr[pis[i].Name.ToString()], null);
                        }
                    }

                }
            }
            return (T)obj;
        }


        /// <summary>
        /// 将DataTable转换成IList
        /// </summary>
        /// <param name="dt">要转换的DataTable</param>
        /// <returns>返回IList</returns>
        public static List<T> Dt2List(DataTable dt)
        {
            List<T> list = new List<T>();
            Type type = typeof(T);
            foreach (DataRow dr in dt.Rows)
            {

                list.Add(Dt2Model(dr));
            }
            return list;
        }




        /// <summary>
        /// 通过反射获得对象名称和主键ID
        /// </summary>
        /// <param name="obj">对象</param>
        /// <returns>返回string[0]类名，string[1]主键</returns>
        public static string[] GetModelInfo(T obj)
        {
            string[] str = new string[2];
            Type T = obj.GetType();
            MethodInfo method = T.GetMethod("GetPK",
                                        BindingFlags.Public
                                        | BindingFlags.Instance,
                                        null, new Type[] { }, null);
            //通过反射执行ReturnAutoID方法，返回AutoID值
            string AutoID = method.Invoke(obj, null).ToString();
            str[0] = T.Name.ToString().ToLower().Replace("entity", "");
            str[1] = AutoID;
            //返回该Obj的名称以及ReturnAutoID的值
            return str;
        }
        public static string ChangeMD5(string Str)
        {
            string Code = "";
            byte[] password;
            SHA1 sha = SHA1.Create();

            // 密码转换 MD5 格式
            password = sha.ComputeHash(Encoding.Unicode.GetBytes(Str));
            // MD5 格式转换 String 格式
            for (int i = 0; i < Str.Length; i++)
            {
                Code = Code + password[i].ToString();
            }

            return Code;
        }
    }

    public class XmlUtil
    {
        #region 序列化
        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="type">类型</param>
        /// <param name="obj">对象</param>
        /// <returns></returns>
        public static string Serializer(Type type, object obj)
        {
            MemoryStream Stream = new MemoryStream();
            XmlSerializer xml = new XmlSerializer(type);
            try
            {
                //序列化对象
                xml.Serialize(Stream, obj);
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            Stream.Position = 0;
            StreamReader sr = new StreamReader(Stream);
            string str = sr.ReadToEnd();

            sr.Dispose();
            Stream.Dispose();

            return str;
        }

        public static Stream TransforToXMLFormat(object obj)
        {
            XmlSerializerFactory xmlSerializerFactory = new XmlSerializerFactory();

            XmlSerializer xmlSerializer = new XmlSerializer(obj.GetType());

            MemoryStream stream = new MemoryStream();

            xmlSerializer.Serialize(stream, obj);

            return stream;
        }
        #endregion

        #region 反序列化
        /// <summary>
        /// xml反序列化 只支持一层
        /// </summary>
        /// <param name="type">类型</param>
        /// <param name="xml">XML字符串</param>
        /// <returns></returns>
        public static T Deserialize<T>(string xml) where T : new()
        {
            try
            {
                XmlDocument xmldoc = new XmlDocument();
                xmldoc.LoadXml(xml);

                XmlNode hdxe = xmldoc.DocumentElement;
                T model = new T();
                Type t = model.GetType();
                PropertyInfo[] pis = t.GetProperties();
                foreach (XmlNode xe in hdxe.ChildNodes)
                {
                    for (int i = 0; i < pis.Length; i++)
                    {
                        if (xe.Name.ToLower() == pis[i].Name.ToLower())
                        {
                            object value = new object();
                            switch (pis[i].PropertyType.Name.ToLower())
                            {
                                case "string":
                                    value = xe.InnerText;
                                    break;
                                case "int":
                                    int num = 0;
                                    int.TryParse(xe.InnerText,out num);
                                    value = num;
                                    break;
                                case "float":
                                    float num1 = 0;
                                    float.TryParse(xe.InnerText, out num1);
                                    value = num1;
                                    break;
                                case "decimal":
                                    decimal d = 0;
                                    decimal.TryParse(xe.InnerText, out d);
                                    value = d;
                                    break;
                                case "datetime":
                                    DateTime date = new DateTime();
                                    DateTime.TryParse(xe.InnerText, out date);
                                    value = date;
                                    break;
                                default:
                                    //value = xe.InnerText;
                                    break;
                            }

                            pis[i].SetValue(model, value, null);
                            break;
                        }
                    }
                }
                return model;
            }
            catch (Exception e)
            {

                return new T();
            }
        }
        /// <summary>
        /// 反序列化
        /// </summary>
        /// <param name="type"></param>
        /// <param name="xml"></param>
        /// <returns></returns>
        public static object Deserialize(Type type, Stream stream)
        {
            XmlSerializer xmldes = new XmlSerializer(type);
            return xmldes.Deserialize(stream);
        }
        #endregion

        public static Model.ServiceRes GetResByXml(string strXml)
        {
            Model.ServiceRes res = new Model.ServiceRes();

            try
            {
                XmlDocument xdoc = new XmlDocument();
                xdoc.LoadXml(strXml);
                XmlElement root = xdoc.DocumentElement;
                var idNode = root.SelectSingleNode("SupplierSellID");
                if (idNode != null)
                    res.SupplierSellID = idNode.InnerText;
                else
                    throw new Exception("返回参数中无SupplierSellID节点");
                var isSuccessNode = root.SelectSingleNode("IsSuccess");
                if (isSuccessNode != null)
                    res.IsSuccess = isSuccessNode.InnerText == "true";
                else
                    res.IsSuccess = false;

                var Msgs = root.SelectSingleNode("Msg");
                if (Msgs != null)
                {
                    res.Msg = new List<string>();
                    foreach (XmlNode errmsg in Msgs.ChildNodes)
                    {
                        //Model.Message msg = new Model.Message();
                        //msg.errormessage = errmsg.InnerText;
                        res.Msg.Add(errmsg.InnerText);
                    }
                }

            }
            catch
            {
                return null;
            }


            return res;

        }
    }

    public class WebServiceHelper
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="url">地址</param>
        /// <param name="method">方法</param>
        /// <param name="param">json参数</param>
        /// <returns></returns>
        public static string WebServiceApp(string url, string method, string param)
        {
            byte[] byteArray = Encoding.UTF8.GetBytes("json=" + param);
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(new Uri(url + "/" + method));
            webRequest.Method = "POST";
            webRequest.ContentType = "application/x-www-form-urlencoded";
            webRequest.ContentLength = byteArray.Length;
            Stream newStream = webRequest.GetRequestStream();
            newStream.Write(byteArray, 0, byteArray.Length);
            newStream.Close();
            HttpWebResponse response = (HttpWebResponse)webRequest.GetResponse();
            StreamReader php = new StreamReader(response.GetResponseStream(), Encoding.UTF8);
            string phpend = php.ReadToEnd();

            return phpend;
        }
    }
}
