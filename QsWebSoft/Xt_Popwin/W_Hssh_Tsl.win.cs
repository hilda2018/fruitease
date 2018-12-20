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
using System.Linq;
using System.IO;
using Microsoft.Win32;
using System.Configuration;
using System.Diagnostics;
using QsWebSoft.Helper;


namespace QsWebSoft.Xt_Popwin
{
    public partial class W_Hssh_Tsl
    {
        public W_Hssh_Tsl()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var method = "getTaxRate";
            var code = "5407520091";
            //var code = this.Request["code"].ToString(); 
            //var tsflag = this.Request["tsflag"].ToString(); 

            string strFile = AppDomain.CurrentDomain.BaseDirectory;
            var timestamp = Context.Timestamp.ToString("yyyy-MM-dd HH:mm:ss");
            string sign = WS.MD5("hd01" + "750a8953a27a4d0aa6b4a70576574ead" + timestamp);
            //method = "getVisualLogistics";
            string format = "xml";
            string uid = "hd01";
            string url = "";
            //取随机数
            Random rnd = new Random();
            int n = rnd.Next(10000, 99999);
            url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&code=" + code + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign + "&t=" + n;
            //url = Server.UrlEncode(url);
            //WriteTextLog(url);
            strFile = strFile + "XML\\" +  code + ".xml";

            //WS.DownLoadAndCreateXML(url, strFile);
            var Stream = WS.WriteCardToStream(url);
            //STREAM转换为string
            StreamReader reader = new StreamReader(Stream);
            string text = reader.ReadToEnd();
            //ds_1.ImportString(text, Sybase.DataWindow.FileSaveAsType.Xml);
            //var row = 0;
            //var sxrq = "";
            //var jsrq = "";
            //var insertrow = 0;
            //var name = "";
            //var unit = "";
            //var dwcode = "";
            //var zssl_Set = "";
            //var tsl = "";
            //if (ds_1.RowCount > 1)
            //{
            //    //更新行号
            //    for (row = ds_1.RowCount; row > 0; row--)
            //    {
            //        insertrow = dw_1.InsertRow(0);
            //        sxrq = ds_1.GetItemString(row, "vesselname");
            //        jsrq = ds_1.GetItemString(row, "voyage");
            //        if (sxrq != null && sxrq != "")
            //        {
            //            name = ds_1.GetItemString(row + 1, "stepname");
            //            unit = ds_1.GetItemString(row + 1, "remark");
            //            dwcode = ds_1.GetItemString(row + 1, "ctnno");
            //            zssl_Set = ds_1.GetItemString(row + 1, "billno");
            //            tsl = ds_1.GetItemString(row + 1, "procresul");
            //        }

            //        dw_1.SetItemString(insertrow, "vesselname", sxrq);
            //        dw_1.SetItemString(insertrow, "voyage", jsrq);
            //        dw_1.SetItemString(insertrow, "stepname", name);
            //        dw_1.SetItemString(insertrow, "remark", unit);
            //        dw_1.SetItemString(insertrow, "ctnno", dwcode);
            //        dw_1.SetItemString(insertrow, "procresul", tsl);
            //        dw_1.SetItemString(insertrow, "billno", zssl_Set);
            //    }

            //}
            //dw_1.ImportString(text, Sybase.DataWindow.FileSaveAsType.Xml);
            //dw_1.Retrieve();
            dw_1.Modify("DataWindow.Readonly=yes");
            AjaxPro.Utility.RegisterTypeForAjax(typeof(PubMethod));
            this.RegisterClientScriptInclude("W_Hssh_Tsl_Import", "/Xt_Popwin/W_Hssh_Tsl_Import.win.js");
        }
        /// <summary>   
        /// 写入日志到文本文件   
        /// </summary>   
        /// <param name="action">动作</param>   
        /// <param name="strMessage">日志内容</param>   
        /// <param name="time">时间</param>   
        public static void WriteTextLog(string timestamp)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory;
            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            string fileFullPath = path + "\\XML\\Tsl.txt";
            StringBuilder str = new StringBuilder();
            str.Append(timestamp);

            StreamWriter sw;
            if (!File.Exists(fileFullPath))
            {
                sw = File.CreateText(fileFullPath);
            }
            else
            {
                sw = File.AppendText(fileFullPath);
            }
            sw.WriteLine(str.ToString());
            sw.Close();
        } 

    }
}
