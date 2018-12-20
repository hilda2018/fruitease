using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml;
using System.Xml.XPath;
namespace QsWebSoft
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        public string[] y = new string[4];
        protected void Page_Load(object sender, EventArgs e)
        {
            string strFile = AppDomain.CurrentDomain.BaseDirectory;
            var billNo = "NGBAUZ001948";
            strFile = strFile + "XML\\WL\\" + billNo + ".xml";
          XmlTextReader reader = new XmlTextReader(strFile);
          reader.WhitespaceHandling = WhitespaceHandling.None;
          XmlDocument xmlDoc = new XmlDocument();

         //将文件加载到XmlDocument对象中

         xmlDoc.Load(reader);

         //关闭连接

         reader.Close();

         //向listbox中添加代表文档的元素

         //lbNodes.Items.Add("XML Document");

        //查找根节点,并将它及它的子节点一同添加到listbox中

         XmlNode xnod = xmlDoc.DocumentElement;

         AddWithChildren(xnod,1);

          }



        private void AddWithChildren(XmlNode xnod, Int32 intLevel)

        {

        //将节点及它的子节点一同添加到listbox中

        //intLevel 控制缩进的深度

        XmlNode xnodWorking;

        String strIndent = new string(' ',2 * intLevel);

        //如果节点有值，读取它的值

        string strValue = (string) xnod.Value;

        if(strValue != null)

        {

        strValue = " : " + strValue;

        }

        //将节点的详细信息添加到ListBox中

        //lbNodes.Items.Add(strIndent + xnod.Name + strValue);

        //如果是元素节点，获取它的属性

        if (xnod.NodeType == XmlNodeType.Element)

        {

        XmlNamedNodeMap mapAttributes = xnod.Attributes;

        //将节点属性添加到ListBox中

        foreach(XmlNode xnodAttribute in mapAttributes)

        {

        //lbNodes.Items.Add(strIndent + " " + xnodAttribute.Name +  " : " + xnodAttribute.Value);

        }

        //如果还有子节点，就递归地调用这个程序

        if(xnod.HasChildNodes)

        {

        xnodWorking = xnod.FirstChild;

        while (xnodWorking != null)

        {

        AddWithChildren(xnodWorking, intLevel +1);

        xnodWorking = xnodWorking.NextSibling;

        }

        }

        }

        }




        
        }

      
    
}