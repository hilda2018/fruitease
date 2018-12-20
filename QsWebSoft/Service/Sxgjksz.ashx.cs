﻿using System;
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
    public class Sxgjksz : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string id = Request.Form["id"].ToString();

            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from  interTb  Where id =@id");
            SqlCommand cmd = DBHelp.GetCommand("delete from  interfield  Where interid=@id");
            master.Parameters.Add(new SqlParameter("@id", id));
            cmd.Parameters.Add(new SqlParameter("@id", id)); 
            if (master.ExecuteNonQuery() > 0)
            {
                cmd.ExecuteNonQuery(); 
                DBHelp.Commit();
                successed = true;          
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("生鲜港接口数据设置编号为<" + id + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("生鲜港接口数据设置编号为<" + id + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string id = Request.Form["id"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_sxgjksz_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_sxgjksz_edit_cmd"); 
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx); 
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                     
                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (id == null || id == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(id,5)) from interTb where substring(id,1,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            id =   year.Substring(0, 8) + "00001";
                        }
                        else
                        {
                            id =   year.Substring(0, 8) + String.Format("{0:00000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "id", id);
                    }
                    else
                    {
                        id = ds_master.GetItemString(1, "id");
                    }
                }



                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "interid", id);
                    var idcxh = id + row.ToString();
                    ds_jzxxx.SetItemString(row, "id", idcxh);
                }
 

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    ds_jzxxx.UpdateData();
                    

                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write(id);
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("产品信息库保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_jzxxx.Dispose();
                ds_jzxxx = null;


            }

             
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_sxgjksz_list");
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
                    this.SetErrorInfo("生鲜港接口数据设置保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

    }
}