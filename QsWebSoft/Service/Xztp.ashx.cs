using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Web;
using System.Data;
using System.Data.SqlClient;

using Sybase.DataWindow;
using TXSoft.Common;
using TXSoft.ExtPB;
using TXSoft.DataStore;
using System.IO;
using Microsoft.Win32;
using System.Configuration;
using System.Diagnostics;
using QsWebSoft.Helper;
using System.Net;
using System.Drawing.Imaging;

namespace QsWebSoft
{
    /// <summary>
    /// xztp 的摘要说明
    /// </summary>
    public class xztp : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            Encoding myEncoding = Encoding.GetEncoding("UTF-8");

            WebRequest wreq = WebRequest.Create("http://www.fruitease.com:8009/images/wxgzh_sj.gif");
            HttpWebResponse wresp = (HttpWebResponse)wreq.GetResponse();
            Stream s = wresp.GetResponseStream();
            System.Drawing.Image img;
            img = System.Drawing.Image.FromStream(s);
            img.Save("d:\\wxgzh_sj.gif", ImageFormat.Gif);
            img.Dispose();
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        public void Xztp()
        {
         
            Encoding myEncoding = Encoding.GetEncoding("UTF-8");

            WebRequest wreq = WebRequest.Create("http://www.fruitease.com:8009/images/wxgzh_sj.gif");
            HttpWebResponse wresp = (HttpWebResponse)wreq.GetResponse();
            Stream s = wresp.GetResponseStream();
            System.Drawing.Image img;
            img = System.Drawing.Image.FromStream(s);
            img.Save("d:\\wxgzh_sj.gif", ImageFormat.Gif);
            img.Dispose();
        }

    }
}