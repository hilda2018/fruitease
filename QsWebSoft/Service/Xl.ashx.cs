using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace QsWebSoft.Service
{
    public class Xl : ServiceBase
    {
       

        
        public void Save()
        {
            string master = Request.Form["dw_Master"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            SafeDS ds = new SafeDS("dw_xtdm_xl_list");
            try
            {
                //ds.SetChanges(master);
                //ds_log.SetChanges(dw_log);
                //ds_log.SetTransaction(this.DBHelp.TransAction);
                //ds.SetTransaction(this.DBHelp.TransAction);
                //this.DBHelp.BeginTransAction();


                ds.SetChanges(master);
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();



                var dd = ds.UpdateData();
                var dd1 =  ds_log.UpdateData();
                if (ds.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();
                        this.SetSuccessedInfo("数据保存成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("修改传输日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("数据保存失败!");
                    return;
                }
            }

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds.Dispose();
                ds = null;

                ds_log.Dispose();
                ds_log = null;
            }
            
            
        }
        public void Save_drjhzxb()
        {
            string master = Request.Form["dw_Master"].ToString();

            SafeDS ds = new SafeDS("dw_drjhzxb");
            try
            {
                ds.SetChanges(master);

                ds.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    this.SetSuccessedInfo("数据保存成功");
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("数据保存失败!");
                    return;
                }
            }

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds.Dispose();
                ds = null;


            }


        }



        public void SaveSpndxs()
        {
            string master = Request.Form["dw_Master"].ToString();

            SafeDS ds = new SafeDS("dw_xtdm_spndxs_list");
            try
            {
                ds.SetChanges(master);

                ds.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    this.SetSuccessedInfo("数据保存成功");
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("数据保存失败!");
                    return;
                }
            }

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds.Dispose();
                ds = null;


            }


        }

       
    }
}