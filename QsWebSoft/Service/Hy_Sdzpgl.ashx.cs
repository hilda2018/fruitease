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
//using System.Threading;

namespace QsWebSoft.Service
{
  

    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class Hy_Sdzpgl : ServiceBase
    {



        //单据删除
        protected void Delete()
        {
            bool successed = false;

            string fph = Request.Form["fph"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_sdzpgl Where fph =@fph");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_sdzpgl_cmd Where fph=@fph");
            master.Parameters.Add(new SqlParameter("@fph", fph));
            cmd.Parameters.Add(new SqlParameter("@fph", fph)); 
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
                Response.Write("发票号为<" + fph + ">,已被成功删除");

            }
            else
            {
                this.SetErrorInfo("发票号为<" + fph + ">,删除失败");
            }
        }


        //同步生鲜港
        protected void Tbsxg()
        {
            //Thread t1 = new Thread(new ThreadStart(delegate
            //{
                string fph = Request.Form["fph"].ToString();
                string strErr;
                //HddzIF serv = new HddzIF();
                Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_sdzpgl", null, fph, out strErr);
          
            //}));
            //t1.IsBackground = true;
            //t1.Start();
             
        }


        //单据保存
        protected void Save()
        {
            string userID = AppService.GetUserID();
            string fph = Request.Form["fph"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            string dw_log = Request.Form["dw_log"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_hy_sdzpgl_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_hy_sdzpgl_edit_cmd");
            SafeDS ds_log = new SafeDS("dw_s_log_list"); 
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_log.SetChanges(dw_log); 
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_log.RowCount; row++)
                    {
                        ds_log.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
               
                fph = ds_master.GetItemString(1, "fph");    

             

                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "fph", fph);
                    ds_jzxxx.SetItemDouble(row, "cxh", row);

                }
                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    ds_log.SetItemString(row, "mainid", fph);

                }
              
                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        if (ds_log.UpdateData() == 1)
                        {
                            this.DBHelp.Commit();
                            //把单据号码，传回到客户端
                            Response.Write(fph);
                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("传输错误日志信息保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                        }
                        
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("发票拆分信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("发票信息保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_log.Dispose();
                ds_log = null; 
            }
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_sdzpgl_list");
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);

                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("传输错误日志信息保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("货代单证信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

                ds_log.Dispose();
                ds_log = null;
            }
        }

    }
}