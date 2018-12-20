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
using Interfaces;
using System.Xml;

namespace QsWebSoft.Service
{
  

    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class Hdfy_yfjjf : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string sqdbh = Request.Form["sqdbh"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_yfjjf Where sqdbh =@sqdbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_yfjjf_cmd Where sqdbh=@sqdbh");
            master.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
            cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh)); 
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
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

            if (successed)
            {
                Response.Write("应付加急费编号为<" + sqdbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("应付加急费编号为<" + sqdbh + ">,删除失败");
            }
        }

        //数据导入   -- 》删除
        protected void SjdrDelete()
        {
            bool successed = false;

            string sjdrbh = Request.Form["sjdrbh"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_sjdr Where sjdrbh =@sjdrbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_sjdr_cmd Where sjdrbh =@sjdrbh");
            master.Parameters.Add(new SqlParameter("@sjdrbh", sjdrbh));
            cmd.Parameters.Add(new SqlParameter("@sjdrbh", sjdrbh));
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
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

            if (successed)
            {
                Response.Write("数据录入编号为<" + sjdrbh + ">,已被成功删除");

            }
            else
            {
                this.SetErrorInfo("数据录入编号为<" + sjdrbh + ">,删除失败");
            }
        }


       
        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string sqdbh = Request.Form["sqdbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_cmd = Request.Form["dw_cmd"].ToString();
            SafeDS ds_master = new SafeDS("dw_hddz_yfjjf_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_yfjjf_edit_cmd"); 

            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_cmd); 
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                   

                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (sqdbh == null || sqdbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(sqdbh,4)) from yw_hddz_yfjjf where substring(sqdbh,3,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            sqdbh = "QT"+ year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            sqdbh = "QT"+year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "sqdbh", sqdbh);
                    }
                    else
                    {
                        sqdbh = ds_master.GetItemString(1, "sqdbh");
                    }
                }

              

                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "sqdbh", sqdbh);
                    ds_jzxxx.SetItemDouble(row, "cxh", row); 
                }

               

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {        
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write(sqdbh);
                        
                    }
                    else
                    {
                        this.DBHelp.Rollback();;
                        this.SetErrorInfo("应付加急款明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("应付加急款保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

        //数据导入Edit保存
        protected void SjdrEditSave()
        {
            string userID = AppService.GetUserID();
            string sjdrbh = Request.Form["sjdrbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_cmd = Request.Form["dw_cmd"].ToString();
            SafeDS ds_master = new SafeDS("dw_hddz_sjdredit");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_sjdredit_cmd");
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_cmd);
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }


                };
                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write(sjdrbh);

                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("数据保存失败：此数据以保存，不能重复保存");
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("数据导入Edit保存!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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
            SafeDS ds_list = new SafeDS("dw_hddz_yfjjf_list");
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
                    this.SetErrorInfo("其他应收款保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 数据导入存盘
        protected void SjdrSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_sjdrlist");
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
                    this.SetErrorInfo("其他应收款保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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