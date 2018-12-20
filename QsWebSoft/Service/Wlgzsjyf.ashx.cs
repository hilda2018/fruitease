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
    public class Wlgzsjyf : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string yfkdbh = Request.Form["yfkdbh"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_yfksqd Where yfkdbh =@yfkdbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_fksqd_cmd Where yfkdbh=@yfkdbh");
            master.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));
            cmd.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh)); 
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
                Response.Write("应付管理应付单号为<" + yfkdbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("应付管理应付单号为<" + yfkdbh + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string yfkdbh = Request.Form["yfkdbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_szyw_sjyf_edit");   
            SafeDS ds_jzxxx = new SafeDS("dw_szyw_sjyf_edit_cmd");
       
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
                if (yfkdbh == null || yfkdbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(yfkdbh,4)) from yw_hddz_yfksqd where substring(yfkdbh,4,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            yfkdbh = "yhk"+year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            yfkdbh = "yhk" + year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "yfkdbh", yfkdbh);
                    }
                    else
                    {
                        yfkdbh = ds_master.GetItemString(1, "yfkdbh");
                    }
                }

              

                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "yfkdbh", yfkdbh);
                    ds_jzxxx.SetItemDouble(row, "cxh", row);
                    ds_jzxxx.SetItemString(row, "sqdbh", yfkdbh);
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
                        Response.Write(yfkdbh);
                        
                    }
                    else
                    {
                        this.DBHelp.Rollback();;
                        this.SetErrorInfo("应付管理明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("应付管理保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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
            SafeDS ds_list = new SafeDS("dw_szyw_sjyf_list");
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
                    this.SetErrorInfo("应付管理信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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