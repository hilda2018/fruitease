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
    public class Hy_Wlgz_Fyqr : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;
            string rwbh = Request.Form["rwbh"].ToString();
            DBHelp.BeginTransAction(); 
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_wlgz_fyqr Where rwbh=@rwbh");
            
            cmd.Parameters.Add(new SqlParameter("@rwbh", rwbh)); 
            
            if (cmd.ExecuteNonQuery() > 0)
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
                Response.Write("物流费用确认编号为<" + rwbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("物流费用确认编号为<" + rwbh + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string rwbh = Request.Form["rwbh"].ToString(); 
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            SafeDS ds_master = new SafeDS("dw_wlgz_edit_fyqr_master");
            SafeDS ds_jzxxx = new SafeDS("dw_wlgz_edit_cmd_js"); 
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                
                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "rwbh", rwbh);
                    ds_jzxxx.GetItemDouble(row, "fyje");
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
               
                this.DBHelp.BeginTransAction();

                var dd = ds_master.UpdateData();
                var cc = ds_jzxxx.UpdateData();

                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write(rwbh);
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("物流费用确认信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("物流费用确认保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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


        //单据保存
        protected void Save_old()
        {
            string userID = AppService.GetUserID();
            string rwbh = Request.Form["rwbh"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            SafeDS ds_master = new SafeDS("dw_wlgz_edit_fyqr_master_old");
            SafeDS ds_jzxxx = new SafeDS("dw_wlgz_edit_fyqr_old");
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);


                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "rwbh", rwbh);
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
                        Response.Write(rwbh);

                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("物流费用确认信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("物流费用确认保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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



    }
}