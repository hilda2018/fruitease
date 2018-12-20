using Interfaces.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Xml;

namespace Interfaces
{
    /// <summary>
    /// 主数据相关
    /// </summary>
    public class MasterData
    {

    }
    /// <summary>
    /// 主数据返回对象
    /// </summary>
    public class MasterDataResponse
    {
        public MasterDataResponse() { }

        /// <summary>
        /// 解析返回xml
        /// </summary>
        /// <param name="strXml"></param>
        public MasterDataResponse(string strXml)
        {
            try
            {
                XmlDocument xdoc = new XmlDocument();
                xdoc.LoadXml(strXml);
                XmlElement root = xdoc.DocumentElement;



                var flagNode = root.SelectSingleNode("//flag");
                if (flagNode != null)
                    this._flag = flagNode.InnerText == "true";
                else
                    _flag = false;

                var Msgs = root.SelectSingleNode("//msg");
                if (Msgs != null)
                {
                    XmlNodeList errmsgs = Msgs.SelectNodes("errormessage");
                    _msg = new List<MasterDataMessage>();

                    foreach (XmlNode node in errmsgs)
                    {
                        MasterDataMessage ms = XmlUtil.Deserialize<MasterDataMessage>(node.OuterXml);
                        _msg.Add(ms);
                    }
                }
                var dataNode = root.SelectSingleNode("//data");
                if (dataNode != null)
                {
                    this._data = dataNode.OuterXml;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("返回xml解析时出错，原因：" + ex.Message);
            }
        }
        private bool _flag;
        /// <summary>
        /// 执行结果
        /// </summary>
        public bool flag
        {
            get { return _flag; }
            set { _flag = value; }
        }
        private List<MasterDataMessage> _msg;
        /// <summary>
        /// 消息
        /// </summary>
        public List<MasterDataMessage> msg
        {
            get { return _msg; }
            set { _msg = value; }
        }

        private string _data;
        /// <summary>
        /// 返回数据
        /// </summary>
        public string data
        {
            get { return _data; }
            set { _data = value; }
        }

        /// <summary>
        /// 把错误信息转换成字符串
        /// </summary>
        /// <returns></returns>
        public string GetMsgStr<T>()
        {
            if (_msg == null || _msg.Count == 0)
            {
                return "";
            }
            StringBuilder sb = new StringBuilder();
            foreach (MasterDataMessage ms in _msg)
            {
                if (!string.IsNullOrEmpty(ms.errorid))
                {
                    var propertyInfo = typeof(T).GetProperty(ms.errorid);
                    if (propertyInfo != null)
                    {
                        var arri = (DescriptionAttribute)propertyInfo.GetCustomAttributes(typeof(DescriptionAttribute), true).FirstOrDefault();//.ToList().Find(p => p is DescriptionAttribute);
                        if (arri != null)
                            sb.Append(arri.Description + "出错，原因:" + ms.errordata.Trim() + ";");
                        else
                        {
                            sb.Append(ms.errordata.Trim());
                            //sb.Append("字段" + ms.errorid + "缺少DescriptionAttribute;");
                        }
                           
                    }
                    else
                    {
                        sb.Append(ms.errordata);
                        //sb.Append("没有找到字段" + ms.errorid + "对应的描述;");
                    }
                }
                else
                {
                    sb.Append(ms.errordata);
                }
            }
            return sb.ToString();
        }
    }

    public class MasterDataMessage
    {
        [Description("错误字段ID")]
        public string errorid { get; set; }

        [Description("错误描述")]
        public string errordata { get; set; }
    }

}
