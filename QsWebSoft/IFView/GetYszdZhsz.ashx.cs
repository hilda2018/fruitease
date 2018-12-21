using Interfaces.Model;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace IFView
{
    /// <summary>
    /// IndexHandler 的摘要说明
    /// </summary>
    public class GetYszdZhsz : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
        private static readonly object obj = new object();

        string strrep = "";
        responseOut res = new responseOut();
        string userid = "";
        HttpRequest request = null;
        JsonSerializerSettings setting = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
        string baseUrl = System.Configuration.ConfigurationManager.AppSettings["tmsURL"] + "/index.html";

        public void ProcessRequest(HttpContext context)
        {
            string param = context.Request.Params["action"];
            request = context.Request;
            try
            {
                userid = QsWebSoft.AppService.GetUserID();
                if (context.Request.Params["token"] == null && string.IsNullOrEmpty(userid))
                {
                    throw new Exception("登录超时！");
                }
                object[] Obj = new object[] { context };
                MethodInfo vMethodInfo = GetType().GetMethod(param);
                if (vMethodInfo == null)
                {
                    return;
                }
                vMethodInfo.Invoke(this, Obj);
            }
            catch (Exception ex)
            {
                res.msg = ex.Message;
                res.result = false;
            }

            strrep = JsonConvert.SerializeObject(res, setting);
            context.Response.Write(strrep);
        }



        public void GetYszdZhszTableData(HttpContext context)
        {
            try
            {


                List<Get_Yszd_Zhsz_Table_Data> list =
                    new Interfaces.Service.GetYszdZhszService().GetYszdZhszTableDataServiceImpl();
                res.result = true;
                res.rows = list;
                res.total = list.ToArray().Length;
                res.msg = "获取应收对账账号设置相关的主表格数据成功";
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }




        public void GetComboboxJdrjcListData(HttpContext context)
        {
            try
            {
         
                Array jdrArr = new Interfaces.Service.GetYszdZhszService().GetComboboxJdrjcListDataServiceImpl();
                res.rows = jdrArr;
                res.total = jdrArr.Length;
                res.result = true;
                res.msg = "获取应收对账账号设置相关的接单人下拉数据成功";


            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }




        public void GetComboboxGsttListData(HttpContext context)
        {
            try
            {

                Array gsttArr =   new Interfaces.Service.GetYszdZhszService().GetComboboxGsttListDataServiceImpl();
                res.rows = gsttArr;
                res.total = gsttArr.Length;
                res.result = true;
                res.msg = "获取应收对账账号设置相关的公司抬头数据成功";
               
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
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