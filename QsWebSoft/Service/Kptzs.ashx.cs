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
    public class Kptzs :  ServiceBase
    {



        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string id = Request.Form["id"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_kptzs Where id=@id");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_kptzs_cmd Where id=@id");
            SqlCommand cmd_bg = DBHelp.GetCommand("delete from yw_kptzs_cmd_bg Where id=@id");
            master.Parameters.Add(new SqlParameter("@id", id));
            cmd.Parameters.Add(new SqlParameter("@id", id));
            cmd_bg.Parameters.Add(new SqlParameter("@id", id));  
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
                {

                    if (cmd_bg.ExecuteNonQuery() > 0)
                    {

                        DBHelp.Commit();
                        successed = true;
                    }
                    else
                    {
                        DBHelp.Rollback();
                    }
                }
                else
                {
                    DBHelp.Rollback();
                }
                                           
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("开票通知书<" +id + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("开票通知书<" + id + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string id = Request.Form["id"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_cmd = Request.Form["dw_cmd"].ToString();
            string dw_cmd_bg = Request.Form["dw_cmd_bg"].ToString();
            SafeDS ds_master = new SafeDS("dw_ck_kptzs_edit");
            SafeDS ds_cmd = new SafeDS("dw_ck_kptzs_cmd");
            SafeDS ds_cmd_bg = new SafeDS("dw_ck_kptzs_cmd_bg");
            try
            {
                ds_master.SetChanges(dw_master);
                ds_cmd.SetChanges(dw_cmd);
                ds_cmd_bg.SetChanges(dw_cmd_bg);
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_cmd.RowCount; row++)
                    {
                        ds_cmd.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_cmd_bg.RowCount; row++)
                    {
                        ds_cmd_bg.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (id == null || id == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);                          
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(id,6)) from yw_kptzs where substring(id,1,2) = '"+year+"'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            id = year + "000001";
                        }
                        else
                        {
                            id = year+String.Format("{0:000000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "id", id);
                    }
                    else
                    {
                        id = ds_master.GetItemString(1, "id");
                    }
                }


                for (int row = 1; row <= ds_cmd.RowCount; row++)
                {
                    ds_cmd.SetItemString(row, "id", id);
                    ds_cmd.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_cmd_bg.RowCount; row++)
                {
                    ds_cmd_bg.SetItemString(row, "id", id);
                    ds_cmd_bg.SetItemDouble(row, "cxh", row);
                }


                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_cmd.SetTransaction(this.DBHelp.TransAction);
                ds_cmd_bg.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
               

                if (ds_master.UpdateData() == 1)
                {
                    if (ds_cmd.UpdateData() == 1)
                    {
                        if (ds_cmd_bg.UpdateData() == 1)
                        {
                            this.DBHelp.Commit();
                            //把单据号码，传回到客户端
                            Response.Write(id);
                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("开票通知书报关商品保存失败!\n\n详细错误信息：\n" + ds_cmd_bg.DBError);
                        }
                    }
                    else
                    {
                        this.DBHelp.Rollback();;
                        this.SetErrorInfo("开票通知书商品保存失败!\n\n详细错误信息：\n" + ds_cmd.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("开票通知书保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_cmd.Dispose();
                ds_cmd = null;

                ds_cmd_bg.Dispose();
                ds_cmd_bg = null;
               
            }
        }
    }
}