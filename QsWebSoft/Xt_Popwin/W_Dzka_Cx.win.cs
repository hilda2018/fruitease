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
    public partial class W_Dzka_Cx
    {
        public W_Dzka_Cx()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            this.RegisterClientScriptInclude("W_Dzka_Cx", "/Xt_Popwin/W_Dzka_Cx.win.js");
            ReportService report = (ReportService)dw_1.Services.Add(ServiceName.Report);
            report.RequestorDrawTitle = false;
            var method = this.Request["method"].ToString();
            var billNo = "";
            var entryId = "";
            var engName = "";
            var Lx =  this.Request["Lx"].ToString();

            string strFile = AppDomain.CurrentDomain.BaseDirectory;

            if (Lx == "wlxx")
            {
                billNo = this.Request["billNo"].ToString();
                entryId = this.Request["entryId"].ToString();
                dw_1.DataWindowObject = "dw_dzka_wl";
                this.Title = "物流可视化查询";

                this.SetParm("billNo", billNo);
                this.SetParm("entryId", entryId);

            }

            if (Lx == "hgcy")
            {
                billNo = this.Request["billNo"].ToString();
                entryId = this.Request["entryId"].ToString();
                dw_1.DataWindowObject = "dw_dzka_hgcy";
                this.Title = "海关查验信息查询";
                this.SetParm("billNo", billNo);
                this.SetParm("entryId", entryId);
            }


            if (Lx == "bgdlz")
            {
                billNo = this.Request["billNo"].ToString();
                entryId = this.Request["entryId"].ToString();
                dw_1.DataWindowObject = "dw_dzka_bgdlz";
                this.Title = "报关单流转信息查询";
                this.SetParm("billNo", billNo);
                this.SetParm("entryId", entryId);
            }

            if (Lx == "klbcx")
            {
                engName = this.Request["engName"].ToString();
                //engName = "HYUNDAIBANGKOK";
                dw_1.DataWindowObject = "dw_dzka_klbcx";
                this.Title = "靠离泊查询";
            }
            this.SetParm("method", method);
            this.SetParm("Lx", Lx);

            //path = strFile + path;
            //dw_1.ImportFile(path,Sybase.DataWindow.FileSaveAsType.Xml);
            //File.Delete(path);

            var timestamp = Context.Timestamp.ToString("yyyy-MM-dd HH:mm:ss");
            string sign = WS.MD5("hd01" + "750a8953a27a4d0aa6b4a70576574ead" + timestamp);
            //method = "getVisualLogistics";
            string format = "xml";
            string uid = "hd01";
            string url = "";
            //取随机数
            Random rnd = new Random(); 
            int n = rnd.Next(10000, 99999);
            //WriteTextLog(timestamp);
            if (Lx == "wlxx" || Lx == "hgcy" || Lx == "bgdlz")
            {
                if (billNo != null && billNo != "")
                {
                    url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&billNo=" + billNo + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign + "&t=" + n;
                }
                else if (entryId != null && entryId != "")
                {
                    url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&entryId=" + entryId + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign + "&t=" + n;
                }
            }
            else if (Lx == "klbcx")
            {
                url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&engName=" + engName + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign + "&t=" + n;
                //url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&chnName=" + "%E7%8E%B0%E4%BB%A3%E6%9B%BC%E8%B0%B7" + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign;
            }
            
            //WriteTextLog(url);
            //保存到本地
            if (billNo != null && billNo != "")
            {
                strFile = strFile + "XML\\" + Lx + billNo + ".xml";
            }
            else
            {
                strFile = strFile + "XML\\" + Lx + entryId + ".xml";
            }
            //WS.DownLoadAndCreateXML(url, strFile);
            var Stream = WS.WriteCardToStream(url);
            //STREAM转换为string
            StreamReader reader = new StreamReader(Stream);
            string text = reader.ReadToEnd();
            //if (text.IndexOf("<ResCode>0</ResCode>") > 0 && text.IndexOf("<<ResMsg>未查到</ResMsg>") > 0)
            //{
            //    this.SetParm("message", "未查到");
            //    return;
            //}
            //else
            //{
            dw_1.ImportString(text, Sybase.DataWindow.FileSaveAsType.Xml);
            //}
            //dw_1.Retrieve();
            dw_1.Modify("DataWindow.Readonly=yes");

            
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

            string fileFullPath = path + "\\XML\\System.txt";
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
