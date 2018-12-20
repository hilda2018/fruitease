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
using System.Net;
using System.Drawing.Imaging;


namespace QsWebSoft.Wlxx
{
    public partial class W_Hy_Wlgz
    {
        public W_Hy_Wlgz()
        {

        }
        public override void OnLoad()
        {
            base.OnLoad();
            var operation = "new";
            this.SetParm("operation", operation);

            var userid = AppService.GetUserID();
            var username = AppService.GetUserName();

            this.SetParm("userid", userid);
            this.SetParm("username", username);

            var ShareMode = AppService.GetShareMode();
            var Dlwtf = AppService.GetDlwtf();

            this.SetParm("ShareMode", ShareMode);
            this.SetParm("Dlwtf", Dlwtf);
            var ywbh = this.Request["Ywbh"].ToString();
            var hddz_cxh =  this.Request["Hddz_cxh"].ToString(); 
            var rwmc = this.Request["Rwmc"].ToString();
            this.SetParm("ywbh", ywbh);
            this.SetParm("hddz_cxh", hddz_cxh); 
            this.SetParm("rwmc", rwmc);

           
            
            dw_rwxz.Retrieve(ywbh, int.Parse(hddz_cxh));
            dw_wldz.Retrieve(ywbh, int.Parse(hddz_cxh));
             dw_master.Retrieve(ywbh, int.Parse(hddz_cxh));
           
            dw_jzxxx.Retrieve(ywbh, int.Parse(hddz_cxh));
            dw_lsjl.Retrieve(ywbh, int.Parse(hddz_cxh));
            this.dw_log.Retrieve(userid, "gzzz");


           
            //注册相关的js文件
            this.RegisterClientScriptInclude("json2", "/Scripts/json2.js");
            this.RegisterClientScriptInclude("ExtPB_Demo", "/Beta3/ExtPB_Demo.js");
            this.RegisterClientScriptInclude("W_Cj_Select", "/Xt_Popwin/W_Cj_Select.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");
            this.RegisterClientScriptInclude("W_Sjmc_Select", "/Xt_Popwin/W_Sjmc_Select.win.js"); 
            this.RegisterClientScriptInclude("W_Hy_Wlgz_Rwdz", "/Xt_Popwin/W_Hy_Wlgz_Rwdz.win.js");
            this.RegisterClientScriptInclude("W_Sfdqlm_Select", "/Xt_Popwin/W_Sfdqlm_Select.win.js");
            this.RegisterClientScriptInclude("W_Bdsbh_Select", "/Xt_Popwin/W_Bdsbh_Select.win.js");
            this.RegisterClientScriptInclude("W_Sfdqlm_Select_New", "/Xt_Popwin/W_Sfdqlm_Select_New.win.js");
            this.RegisterClientScriptInclude("W_Wldw_Select", "/Xt_Popwin/W_Wldw_Select.win.js");

           //注册需要使用的弹出窗口的事件处理程序的JS文件
            this.RegisterClientScriptInclude("W_Index", "W_Index.win.js");
        }

        public void Xztp1()
        {
            Encoding myEncoding = Encoding.GetEncoding("UTF-8");

            WebRequest wreq = WebRequest.Create("http://www.fruitease.com:8009/images/wxgzh_sj.gif");
            HttpWebResponse wresp = (HttpWebResponse)wreq.GetResponse();
            Stream s = wresp.GetResponseStream();
            System.Drawing.Image img;
            img = System.Drawing.Image.FromStream(s);
            img.Save("e:\\wxgzh_sj.gif", ImageFormat.Gif);
            img.Dispose();
        }
   
    }
}
