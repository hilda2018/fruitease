using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using TXSoft.DataStore;
using System.Text;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Globalization;
using QsWebSoft.Helper;
using System.ComponentModel;
using Sybase.DataWindow;
using TXSoft.Common;
using TXSoft.ExtPB;
using Microsoft.Win32;
using System.Configuration;
using System.Diagnostics;
using System.Net;
using System.Collections;
using Interfaces;
using System.Xml;
using System.Threading;

namespace QsWebSoft
{
    public partial class UploadingYT : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            AjaxPro.Utility.RegisterTypeForAjax(typeof(QsWebSoft.UploadingYT));
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetServerTime()
        {
            return DateTime.Now.ToString();
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReturnDateString(DateTime rq)
        {
            return rq.ToString();
        }

        //private string ftpServerIP = "192.168.1.1";//服务器ip  
        private string ftpUserID = "ocrftp";//用户名  
        private string ftpPassword = "Nova123456";//密码  

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void UploadYTJK(string fileName, string ftpPath)
        {
            //FTP地址  
            ftpPath = "ftp://120.26.85.21/" + ftpPath;
            //本机要上传的目录的父目录  
            string localPath = "E:\\XML\\";

            FileInfo fi = new FileInfo(localPath);
            //判断上传文件是文件还是文件夹  

            //file 如果是文件，则调用[上传文件]方法  
            UpLoadFile(localPath + fileName, ftpPath);
        }


        #region 上传文件

        /// <summary>  
        /// 上传文件  
        /// </summary>  
        /// <param name="localFile">要上传到FTP服务器的本地文件</param>  
        /// <param name="ftpPath">FTP地址</param>  
        public void UpLoadFile(string localFile, string ftpPath)
        {
            if (!File.Exists(localFile))
            {
                Response.Write("文件：“" + localFile + "” 不存在！");
                return;
            }
            FileInfo fileInf = new FileInfo(localFile);
            FtpWebRequest reqFTP;

            reqFTP = (FtpWebRequest)FtpWebRequest.Create(ftpPath);// 根据uri创建FtpWebRequest对象   
            reqFTP.Credentials = new NetworkCredential(ftpUserID, ftpPassword);// ftp用户名和密码  
            reqFTP.KeepAlive = false;// 默认为true，连接不会被关闭 // 在一个命令之后被执行  
            reqFTP.Method = WebRequestMethods.Ftp.UploadFile;// 指定执行什么命令  
            reqFTP.UseBinary = true;// 指定数据传输类型  
            reqFTP.ContentLength = fileInf.Length;// 上传文件时通知服务器文件的大小  
            int buffLength = 2048;// 缓冲大小设置为2kb  
            byte[] buff = new byte[buffLength];
            int contentLen;

            // 打开一个文件流 (System.IO.FileStream) 去读上传的文件  
            FileStream fs = fileInf.OpenRead();
            try
            {
                Stream strm = reqFTP.GetRequestStream();// 把上传的文件写入流  
                contentLen = fs.Read(buff, 0, buffLength);// 每次读文件流的2kb  

                while (contentLen != 0)// 流内容没有结束  
                {
                    // 把内容从file stream 写入 upload stream  
                    strm.Write(buff, 0, contentLen);
                    contentLen = fs.Read(buff, 0, buffLength);
                }
                // 关闭两个流  
                strm.Close();
                fs.Close();
                Response.Write("文件【" + ftpPath + "/" + fileInf.Name + "】上传成功！<br/>");
            }
            catch (Exception ex)
            {
                Response.Write("上传文件【" + ftpPath + "/" + fileInf.Name + "】时，发生错误：" + ex.Message + "<br/>");
            }
        }
        #endregion
    }
}