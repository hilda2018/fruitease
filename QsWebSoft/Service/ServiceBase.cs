using System;
using System.Web;
using System.Web.SessionState;
using System.Reflection;
using System.Data.SqlClient;


namespace QsWebSoft.Service
{
    public class ServiceBase : IHttpHandler, IRequiresSessionState
    {
      
        #region IHttpHandler Members

        public bool IsReusable
        {
            // 如果无法为其他请求重用托管处理程序，则返回 false。
            // 如果按请求保留某些状态信息，则通常这将为 false。
            get { return true; }
        }

        private HttpContext _contex = null;
        private string       _methodName = string.Empty;
        private string      _functionID = string.Empty;
        private string      _winName = string.Empty; 
        private DBHelp      _dbHelp = null; 

        public HttpRequest Request
        {
            get
            {
                if (_contex == null)
                    return null;
                return _contex.Request;
            }
        }

        public HttpResponse Response
        {
            get
            {
                if (_contex == null)
                    return null;
                return _contex.Response;
            }
        }

        public HttpServerUtility Server
        {
            get
            {
                if (_contex == null)
                    return null;
                return _contex.Server;
            }
        }

        public HttpContext Context
        {
            get { return _contex; }
        }

        public HttpSessionState Session
        {
            get
            {
                if (_contex == null)
                    return null;

                return _contex.Session;
            }
        }

        public DBHelp DBHelp
        {
            get
            {
                if (_dbHelp == null)
                {
                    _dbHelp = new DBHelp();
                    _dbHelp.Open();
                }
                return _dbHelp;
            }
        }

    
        public string MethodName
        {
            get { return this._methodName; }
        }

       public string FunctionID
        {
            get { return _functionID; }
            set { _functionID = value; }
        }

        public string WindowName
        {
           get { return _winName; }
            set { _winName = value; }
        }

        /// <summary>
        /// 验证权限
        /// </summary>
        /// <returns></returns>
        public virtual bool CheckPermission()
        {
            return true; 
        }

        public void SetSuccessedInfo(string text)
        {
            this.Response.StatusCode = 200;
            this.Response.Write(text); 
        }

        public void SetErrorInfo(string text)
        {
            this.Response.StatusCode = 500;
            this.Response.Write(text); 
        }

        public void ProcessRequest(HttpContext context)
        {
            _contex = context;
            _contex.Response.StatusCode = 200;  

            //是否已登录？
           if (!AppService.IsLogin() )
            {
                context.Response.StatusCode = 403;    
                context.Response.Write("用户未登录或连接已超时!");
                return;
            }

            //检查传入的参数
            if (Request.Form["Method"] == null)
            {
                context.Response.StatusCode = 500;
                context.Response.Write("Service调用未指定Method参数!");
                return;
            }
            this._methodName = Request.Form["Method"].ToString();


            //是否有传入调用的模块ID?
            if (Request.Form["FunID"] != null)
            {
                this._functionID = Request.Form["FunID"].ToString(); 
            }

            //是否有传入调用的系统窗口名称?
            if (Request.Form["WinName"] != null)
            {
                this._functionID = Request.Form["WinName"].ToString();
            }

             //判断是否有执行该操作的权限
            if (!CheckPermission())
            {
                context.Response.Write("抱歉,你没有执行该功能的权限,如有需要,请跟系统管理员联系!");
                return;
            }

            try
            {
                //用反射调用相应的执行函数,如果函数没有参数，调用的函数名称也不区分大小写(BindingFlags.IgnoreCase)
                this.GetType().InvokeMember(_methodName,
                                             BindingFlags.InvokeMethod |
                                             BindingFlags.Public |
                                             BindingFlags.NonPublic |
                                             BindingFlags.Instance | 
                                             BindingFlags.IgnoreCase, 
                                             null,
                                             this,
                                             null);

            }
            catch (Exception ex)
            {
                context.Response.StatusCode = 500;
                context.Response.Write(ex.Message);
            }

            finally
            {
                //确保数据库连接断开
                if (_dbHelp != null)
                {
                    _dbHelp.Close();
                    _dbHelp = null;
                }
            }

        }

        #endregion
    }
}
