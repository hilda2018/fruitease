using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace QsWebSoft
{
    public partial class BasePage : System.Web.UI.Page
    {

        protected override void OnPreLoad(EventArgs e)
        {
            //如果还没有登录,则转到login.aspx
            if (!AppService.IsLogin() )
            {
                Response.Redirect("/Login.aspx?ReturnUrl="+System.Web.HttpUtility.UrlEncode(this.Page.Request.RawUrl ) );
                return;
            }
            base.OnPreLoad(e);
        }

        protected bool IsClientScriptIncludeRegistered(string key)
        {
             return this.Page.ClientScript.IsClientScriptIncludeRegistered(this.GetType(), key);
        }

        /// <summary>
        /// 向输出的页面登记Javascript文件
        /// </summary>
        protected void RegisterClientScriptInclude(string key, string url)
        {
            if (url.Contains("?"))
            {
                this.ClientScript.RegisterClientScriptInclude(key, url);
                return;
            }

            //如果指定的js文件不存在,则查找是否有同名的min.js文件，即压缩版本的js文件
            string fileName = this.Page.Server.MapPath(url).ToLower();
            if (!File.Exists(fileName))
            {
                if (fileName.EndsWith(".js") && !fileName.EndsWith(".min.js"))
                {
                    fileName = fileName.Substring(0, fileName.Length - 3) + ".min.js";
                    if (!File.Exists(fileName))
                        return;
                }

                //更新url地址为新的js文件
                url = url.Substring(0, url.Length - 3) + ".min.js";
            }

            string fileTime = File.GetLastWriteTime(fileName).ToString("yyyyMMddHHmmss");

            //取文件时间
            this.ClientScript.RegisterClientScriptInclude(this.GetType(), key, url + "?fileTime=" + fileTime);
        }

        protected override void OnLoad(EventArgs e)
        {
            //注册通用的js文件，通过代码方式加载js文件，可以防止js由于浏览器缓存导致版本不一致产生的错误
            this.RegisterClientScriptInclude("ExtPB_Net.js", "/Scripts/ExtPB_Net.js");
            this.RegisterClientScriptInclude("MyExtPB.js", "/Scripts/MyExtPB.js");
            this.RegisterClientScriptInclude("JQuery-1.6.min.js", "/Scripts/JQuery-1.6.min.js");
            base.OnLoad(e); 
        }
     }
}