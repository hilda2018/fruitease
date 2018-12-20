using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using System.Web.SessionState;
using System.Data.SqlClient;

namespace QsWebSoft
{
    /// <summary>
    /// LoadWindow 的摘要说明
    /// </summary>
    public class LoadWindow : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
           ////是否已登录
           // if (!AppService.IsLogin())
           // {
           //     context.Response.StatusCode = 403;
           //     context.Response.Write("用户未登录或登录用户长时间未操作导致登录信息失效，需要重新录入系统!");
           //     return;
           // }

            if (context.Request["WinName"] == null)
            {
                context.Response.StatusCode = 500;
                context.Response.Write("未指定要打开的Window对象名称!");
                return;
            }

            //得到当前应用的缺省命名空间
            string nameSpace = this.GetType().Namespace;

            //得到打开窗口的完整对象名称
            string windowName= nameSpace + "."+context.Request["WinName"].ToString();
            string funtionID = string.Empty;

            //对应的系统模块ID
            if (context.Request["FunID"] != null)
            {
                funtionID = context.Request["FunID"].ToString();
            }

            TXSoft.ExtPB.Window window = null;
            Type windowType = null;
            try
            {
                if (!string.IsNullOrEmpty(windowName))
                {
                    Assembly[] asses = AppDomain.CurrentDomain.GetAssemblies();
                    foreach (System.Reflection.Assembly ass in asses)
                    {
                        windowType = ass.GetType(windowName);
                        if (windowType != null)
                            break;
                    }
                }

                if (windowType != null && typeof(TXSoft.ExtPB.Window).IsAssignableFrom(windowType))
                {
                    window = (TXSoft.ExtPB.Window)Activator.CreateInstance(windowType);
                }
                  
                 if (window != null)
                {
                     //根据窗口对象名称，即在数据库中对应的模块ID
                    if (string.IsNullOrEmpty(funtionID) && !string.IsNullOrEmpty(windowName))
                   {
                       DBHelp dbHelp = new DBHelp();
                       SqlCommand cmd = dbHelp.GetCommand("SELECT ID FROM Sys_Modules Where WindowName=@winName");
                       cmd.Parameters.Add(new SqlParameter("@WinName", windowName));
                       funtionID = (string)cmd.ExecuteScalar();
                       dbHelp.Close();
                       dbHelp = null; 
                    }

                    if (!string.IsNullOrEmpty(funtionID))
                        window.FunctionID = funtionID;

                   window.Context = context;
                   window.ProcessRequest();
                   if (window.LoadSuccessed)
                    {
                        string xml = window.GetXML();
                        context.Response.Write(xml);
                    }
                    else
                    {
                        context.Response.StatusCode = 500;
                       context.Response.Write(window.LoadErrorMessage);
                    }
                }
                else
                {
                    //表示请求的服务器资源未找到
                    context.Response.StatusCode = 404;
                    context.Response.Write("实例化窗口<" + windowName + ">失败!");
                }
            }
            finally
            {
                //确保Window对象的资源被释放
                if (window != null)
                {
                    window.Dispose();
                    window = null;
                }
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}