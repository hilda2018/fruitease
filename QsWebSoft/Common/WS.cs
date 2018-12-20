using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Net;
using System.IO;
using System.Security.Cryptography;


namespace QsWebSoft.Helper
{
    public class WS
    {
        /// <summary>  
        /// 请求连接，响应得到数据流，生成XML  
        /// </summary>  
        /// <param name="url">请求url</param>  
        /// <param name="path">存放生成XML的路径</param>  
        /// <returns></returns>  
        public static bool DownLoadAndCreateXML(string url, string path)
        {
            try
            {
                WebRequest request = WebRequest.Create(url);
                request.ContentType = "text/xml";
                WebResponse response = request.GetResponse();
                //path = path + "\\tt.xml";
                using (StreamWriter write = new StreamWriter(new FileStream(path, FileMode.Create)))
                {
                    using (StreamReader reader = new StreamReader(response.GetResponseStream(), System.Text.Encoding.UTF8))
                    {
                        write.WriteLine(reader.ReadToEnd());
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                ex.ToString();
                return false;
            }
        }

        /// <summary>  
        /// 根据访问URL来返回XML文档流  
        /// </summary>  
        /// <param name="Url">访问URL</param>  
        /// <returns>XML文档流</returns>  
        public static Stream WriteCardToStream(string Url)
        {
            try
            {
                WebRequest request = WebRequest.Create(Url);
                request.ContentType = "text/xml";
                WebResponse response = request.GetResponse();
                Stream stream = response.GetResponseStream();
                return stream;
            }
            catch (Exception ex)
            {
                ex.ToString();
                return null;
            }
        }
        /// <summary>  
        /// MD5加密方式加密  
        /// ggh  
        /// </summary>  
        /// <param name="s">需要加密的字符串</param>  
        /// <returns>经过md5加密过的字符串</returns>  
        public static string MD5(string s)
        {
            byte[] b = Encoding.Default.GetBytes(s);
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] result = md5.ComputeHash(b);
            s = "";
            for (int i = 0; i < result.Length; i++)
            {
                s += result[i].ToString("x").PadLeft(2, '0');
            }
            return s;
        } 





    }
}