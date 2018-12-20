﻿using Interfaces.Model;
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
    public class IndexHandler : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
        private static readonly object obj = new object();

        string strrep = "";
        responseOut res = new responseOut();
        string userid =  "";
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

        #region 菜单渲染
        public void getMenuList(HttpContext context)
        {
            try
            {
                string parentid = context.Request.Params["parentId"];
                userid = QsWebSoft.AppService.GetUserID();
                List<d_menu_Entity> list = new Interfaces.Service.IndexService().GetMenuListImpl(userid, parentid);
                res.result = true;
                res.rows = list;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion


     /****预警信息***/
        #region 菜单渲染
        public void GetWarningMenuList(HttpContext context)
        {
            try
            {
                string parentid = context.Request.Params["parentId"];// 查询条件
                userid = QsWebSoft.AppService.GetUserID();
                int count;
                List<Get_Warning_Menu_List_Service> list =
                    new Interfaces.Service.GetWarningMenuListService().GetWarningMenuListServiceImpl(userid, parentid,
                        out count);
                res.result = true;
                res.total = count;
                res.rows = list;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion


        #region 菜单渲染
        public void GetTableData(HttpContext context)
        {
            try
            {
                string yjlxbm = context.Request.Params["yjlxbm"];// 查询条件
             
               int rows =Int32.Parse( context.Request.Params["rows"]);// 查询条件
               int page = Int32.Parse(context.Request.Params["page"]);// 查询条件
                string sfgx = context.Request.Params["sfgx"];// 查询条件
                string jdrjc = context.Request.Params["jdrjc"];// 查询条件
                string ry =  context.Request.Params["ry"];// 查询条件
                string yjnr = context.Request.Params["yjnr"];// 查询条件
                string ywbh = context.Request.Params["ywbh"];// 查询条件



                userid = QsWebSoft.AppService.GetUserID();
                res.result = true;
                res.msg = "预警表格加载完成";
                int count;
                List<Get_Warning_Table_Service> list = new Interfaces.Service.GetWarningMenuListService().GetWarningTableDataServiceImpl(yjlxbm, userid ,rows ,page, sfgx,jdrjc,ry,yjnr,ywbh ,out count);
      
                res.rows = list;
                res.total = count;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion

        #region 接单人渲染
        public void GetJdrData(HttpContext context)
        {
            try
            {
                userid = QsWebSoft.AppService.GetUserID();
                res.rows = new Interfaces.Service.GetWarningMenuListService().GetJdrListImpl(userid);
                res.result = true;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion




        #region 异常原因表格数据
        public void GetYcyyTableData(HttpContext context)
        {
            try
            {
                string ywbh = context.Request.Params["ywbh"];// 查询条件
                string yjlxbh = context.Request.Params["yjlxbh"];// 查询条件  

                userid = QsWebSoft.AppService.GetUserID();
            
                int count;
                List<ycyy_Service> list = new Interfaces.Service.GetWarningMenuListService().GetYcyyTableDataImpl(ywbh, yjlxbh  ,out count);
                res.result = true;
                res.msg = "获取异常原因表格数据成功";
                res.rows = list;
                res.total = count;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion

        #region 异常原因下拉数据
        public void GetYcyyListData(HttpContext context)
        {
            try
            {
                string yjlxbh = context.Request.Params["yjlxbh"];// 查询条件  
           
                userid = QsWebSoft.AppService.GetUserID();
                res.result = true;
                res.msg = "获取异常原因下拉数据成功";
                int count;
                List<ycyy_Select_List_Service> list = new Interfaces.Service.GetWarningMenuListService().GetYcyyListDataImpl(yjlxbh ,out count);
                res.rows = list;
                res.total = count;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion



        #region 新增、修改收货地址

        public void SaveYcyy(HttpContext context)
        {
            try
            {
                Interfaces.Service.GetWarningMenuListService GetWarningService = new Interfaces.Service.GetWarningMenuListService();
                
                string id = context.Request.Params["id"];
                string json = context.Request.Params["json"];
                ycyy_Service model = JsonConvert.DeserializeObject<ycyy_Service>(json);
              

           


                if (string.IsNullOrEmpty(id))
                {
                    GetWarningService.AddYcyyItem(model);
                    res.msg = "新增异常原因记录成功";
                }
                else
                {
                    GetWarningService.UpdateYcyyItem(model);
                    res.msg = "更新异常原因记录成功";
                }
                res.result = true;



            }
            catch (Exception ex)
            {
                res.result = true;
                res.msg = ex.Message;
            }
        }

        #endregion





        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}