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
    public class Kddgl : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;
            string kddbh = Request.Form["kddbh"].ToString();
            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_kdgl Where kddbh =@kddbh");
            master.Parameters.Add(new SqlParameter("@kddbh", kddbh)); 
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
                Response.Write("快递单编号为<" + kddbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("快递单编号为<" + kddbh + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string kddbh = Request.Form["kddbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_kddgl_edit"); 
            try
            {
                ds_master.SetChanges(dw_master); 
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                 };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (kddbh == null || kddbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(kddbh,4)) from yw_kdgl where substring(kddbh,1,8) = '" + year.Substring(0, 8) + "' ");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            kddbh = year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            kddbh = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "kddbh", kddbh);
                    }
                    else
                    {
                        kddbh = ds_master.GetItemString(1, "kddbh");
                    }
                }

               

               

                ds_master.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                           
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write(kddbh);                       
                    
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("快递单保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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
            SafeDS ds_list = new SafeDS("dw_kddgl_list");
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
                    this.SetErrorInfo("快递单信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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