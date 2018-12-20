﻿using System;
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
using System.Net;


namespace QsWebSoft.Hddz
{
    public partial class W_HddzYtjkEdit
    {
        public W_HddzYtjkEdit()
        {
            
        }

      
        public override void OnLoad()
        {
            base.OnLoad();
            //系统模块编码

            ReportService report = (ReportService)dw_jzxxx.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;

            //DataWindowChild dwc = dw_master.GetChild("mdg");
            //dwc.SetTransaction(this.AdoTransaction);
            //dwc.Retrieve("%");

            //DataWindowChild dwc_master_clfs = dw_master.GetChild("clfs");
            //dwc_master_clfs.SetTransaction(this.AdoTransaction);
            //dwc_master_clfs.Retrieve("%");

            //DataWindowChild dwc_jgfs = dw_master.GetChild("jgfs");
            //dwc_jgfs.SetTransaction(this.AdoTransaction);
            //dwc_jgfs.Retrieve("%");

            DataWindowChild dwc_xx = dw_jzxxx.GetChild("xx");
            dwc_xx.SetTransaction(this.AdoTransaction);
            dwc_xx.Retrieve("%");

            DataWindowChild dwc_xl = dw_jzxxx.GetChild("xl");
            dwc_xl.SetTransaction(this.AdoTransaction);
            dwc_xl.Retrieve("%");

            //DataWindowChild dwc_clfs = dw_jzxxx.GetChild("clfs");
            //dwc_clfs.SetTransaction(this.AdoTransaction);
            //dwc_clfs.Retrieve("%");

            //DataWindowChild dwc_zjmsfs = dw_spdhsr.GetChild("zjmsfs");
            //dwc_zjmsfs.SetTransaction(this.AdoTransaction);
            //dwc_zjmsfs.Retrieve("%");

            //DataWindowChild dwc_yt = dw_spdhsr.GetChild("yt");
            //dwc_yt.SetTransaction(this.AdoTransaction);
            //dwc_yt.Retrieve("%");

            DataWindowChild dwc_hgjldw = dw_spdhsr.GetChild("hgjldw");
            dwc_hgjldw.SetTransaction(this.AdoTransaction);
            dwc_hgjldw.Retrieve("%");

            DataWindowChild dwc_fdjldw = dw_spdhsr.GetChild("fdjldw");
            dwc_fdjldw.SetTransaction(this.AdoTransaction);
            dwc_fdjldw.Retrieve("%");

            var operation = this.Request["operation"].ToString();
            this.SetParm("operation", operation);
                       
            if (this.Request["ywbh"] != null)
            {
                var ywbh = this.Request["ywbh"].ToString();
                this.SetParm("ywbh", ywbh);
                dw_master.Retrieve(ywbh);
                dw_jzxxx.Retrieve(ywbh);
                dw_spxx.Retrieve(ywbh);
                dw_zzxx.Retrieve(ywbh);
                dw_fsdz.Retrieve(ywbh);
            }


            //注册相关的js文件

            this.RegisterClientScriptInclude("W_Commodity_Select", "/Commodity/W_Commodity_Select.win.js");
            this.RegisterClientScriptInclude("W_Eport_Select", "/Xt_Popwin/W_Eport_Select.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_Jnhyd_Select", "/Xt_Popwin/W_Jnhyd_Select.win.js");
            this.RegisterClientScriptInclude("W_Hddz_Dlxy_Select", "/Xt_Popwin/W_Hddz_Dlxy_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Mxd_Select", "/Xt_Popwin/W_Mxd_Select.win.js");
            this.RegisterClientScriptInclude("W_CommodityAdd", "/Commodity/W_CommodityAdd.win.js");
            //注册相关的js文件
            this.RegisterClientScriptInclude("W_Spdl_Select", "/Xt_Popwin/W_Spdl_Select.win.js");
            this.RegisterClientScriptInclude("W_Hssh_Select", "/Xt_Popwin/W_Hssh_Select.win.js");
            this.RegisterClientScriptInclude("W_Jldw_Select", "/Xt_Popwin/W_Jldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Bzdw_Select", "/Xt_Popwin/W_Bzdw_Select.win.js");
            this.RegisterClientScriptInclude("W_WldwAdd_New", "/Xt_Popwin/W_WldwAdd_New.win.js");
            this.RegisterClientScriptInclude("W_Country_Select", "/Xt_Popwin/W_Country_Select.win.js");
            this.RegisterClientScriptInclude("W_RqTime_Select", "/Xt_Popwin/W_RqTime_Select.win.js");
            ////注册需要使用的弹出窗口的事件处理程序的JS文件
            //this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
            //AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
        }



        //private FtpStatusCode UploadFun(string fileName, string uploadUrl) 
        //{ Stream requestStream = null; 
        //    FileStream fileStream = null;
        //    FtpWebResponse uploadResponse = null; 
        //    try { FtpWebRequest uploadRequest = (FtpWebRequest)WebRequest.Create(uploadUrl);
        //        uploadRequest.Method = WebRequestMethods.Ftp.UploadFile; 
        //        uploadRequest.Proxy = null; 
        //        NetworkCredential nc = new NetworkCredential();
        //        nc.UserName = "EMVSOHGJ";
        //        nc.Password = "EMVS370"; 
        //        uploadRequest.Credentials = nc; //修改getCredential();错误2
        //        requestStream = uploadRequest.GetRequestStream(); 
        //        fileStream = File.Open(fileName, FileMode.Open); 
        //        byte[] buffer = new byte[1024]; 
        //        int bytesRead; while (true) { bytesRead = fileStream.Read(buffer, 0, buffer.Length); 
        //            if (bytesRead == 0) break; requestStream.Write(buffer, 0, bytesRead);
        //        } 
        //        requestStream.Close(); 
        //        uploadResponse = (FtpWebResponse)uploadRequest.GetResponse(); 
        //        return uploadResponse.StatusCode; } 
        //    catch (UriFormatException ex) 
        //    { 
        //    } 
        //    catch (IOException ex) 
        //    {
        //    } 
        //    catch (WebException ex)
        //    {
        //    }
        //    finally
        //    { if (uploadResponse != null) 
        //        uploadResponse.Close(); 
        //        if (fileStream != null) 
        //            fileStream.Close(); 
        //        if (requestStream != null)
        //            requestStream.Close(); 
        //    } 
        //    return
        //        FtpStatusCode.Undefined; 
        //}

        //FtpStatusCode status = UploadFun(@"d:\1\1.txt", "ftp://域名/目录/保存文件名");

        ////ftp的上传功能  
        //public void Upload(string userId, string pwd, string filename, string ftpPath)
        //{
        //    FileInfo fileInf = new FileInfo(filename);
        //    FtpWebRequest reqFTP;
        //    // 根据uri创建FtpWebRequest对象   
        //    reqFTP = (FtpWebRequest)FtpWebRequest.Create(new Uri(ftpPath + fileInf.Name));
        //    // ftp用户名和密码  
        //    reqFTP.Credentials = new NetworkCredential(userId, pwd);

        //    reqFTP.UsePassive = false;
        //    // 默认为true，连接不会被关闭  
        //    // 在一个命令之后被执行  
        //    reqFTP.KeepAlive = false;
        //    // 指定执行什么命令  
        //    reqFTP.Method = WebRequestMethods.Ftp.UploadFile;
        //    // 指定数据传输类型  
        //    reqFTP.UseBinary = true;
        //    // 上传文件时通知服务器文件的大小  
        //    reqFTP.ContentLength = fileInf.Length;
        //    // 缓冲大小设置为2kb  
        //    int buffLength = 2048;
        //    byte[] buff = new byte[buffLength];
        //    int contentLen;
        //    // 打开一个文件流 (System.IO.FileStream) 去读上传的文件  
        //    FileStream fs = fileInf.OpenRead();
        //    try
        //    {
        //        // 把上传的文件写入流  
        //        Stream strm = reqFTP.GetRequestStream();
        //        // 每次读文件流的2kb  
        //        contentLen = fs.Read(buff, 0, buffLength);
        //        // 流内容没有结束  
        //        while (contentLen != 0)
        //        {
                    
        //            ////// 把内容从file stream 写入 upload stream  
        //            ////strm.Write(buff, 0, contentLen);
        //            ////contentLen = fs.Read(buff, 0, buffLength);
        //        }
        //        // 关闭两个流  
        //        strm.Close();
        //        fs.Close();
        //    }
        //    catch (Exception ex)
        //    {

        //    }
        //}  
    }
}