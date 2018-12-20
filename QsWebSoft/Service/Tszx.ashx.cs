using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using TXSoft.DataStore;
using System.Text;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace QsWebSoft.Service
{
  

    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class Tszx : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string zxbh = Request.Form["zxbh"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_tszx Where zxbh =@zxbh"); 
            master.Parameters.Add(new SqlParameter("@zxbh", zxbh)); 
            if (master.ExecuteNonQuery() > 0)
            {
                    DBHelp.Commit();
                    successed = true;
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("咨询投诉编号为<" + zxbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("咨询投诉编号为<" + zxbh + ">,删除失败");
            }
        }
        //系统需求----》删除
        protected void XtXqDelete()
        {
            bool successed = false;

            string id = Request.Form["id"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from ywxt_taskList Where id =@id");
            master.Parameters.Add(new SqlParameter("@id", id));
            if (master.ExecuteNonQuery() > 0)
            {
                DBHelp.Commit();
                successed = true;
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("系统需求编号为<" + id + ">,已被成功删除");

            }
            else
            {
                this.SetErrorInfo("系统需求编号为<" + id + ">,删除失败");
            }
        }
        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string zxbh = Request.Form["zxbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_tszx_edit"); 
            try
            {
                ds_master.SetChanges(dw_master);                
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (zxbh == null || zxbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(zxbh,4)) from yw_hddz_tszx where substring(zxbh,1,8) = '" + year.Substring(0, 8) + "' ");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            zxbh = year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            zxbh = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "zxbh", zxbh);
                    }
                    else
                    {
                        zxbh = ds_master.GetItemString(1, "zxbh");
                    }
                }

                ds_master.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {    
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write(zxbh);                  
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("投诉咨询保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
                }
            }

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_master.Dispose();
                ds_master = null;
                 
               
            }
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_tszx_list");
            try
            {
                ds_list.SetChanges(dw_list);


                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write("存盘成功");
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("投诉咨询信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_list.Dispose();
                ds_list = null;

            }
        }


        //#region 系统需求
        protected void TaskSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dd_xtxq_tasklist_select");
            string id = Request.Form["id"].ToString();
            try
            {
                ds_list.SetChanges(dw_list);
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (id == null || id == "")
                {
                    if (ds_list.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(id,4)) from ywxt_taskList where substring(id,1,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            id = year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            id = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_list.SetItemString(1, "id", id);
                    }
                    else
                    {
                        id = ds_list.GetItemString(1, "id");
                    }
                }

                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write("存盘成功");
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("投诉咨询信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_list.Dispose();
                ds_list = null;

            }
        }

        //#region 系统需求Edit
        protected void TaskEditSave()
        {
            string userID = AppService.GetUserID();
            string dw_master = Request.Form["dw_master"].ToString();
            string id = Request.Form["id"].ToString();
            SafeDS ds_master = new SafeDS("dd_xtxq_taskedit");
            try
            {
                ds_master.SetChanges(dw_master);

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (id == null || id == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(id,4)) from ywxt_taskList where substring(id,1,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            id = year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            id = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "id", id);
                    }
                    else
                    {
                        id = ds_master.GetItemString(1, "id");
                    }
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_master.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write(id);
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("投诉咨询信息保存失败!\n\n详细错误信息：\n" + ds_master.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_master.Dispose();
                ds_master = null;

            }
        }

    }
}