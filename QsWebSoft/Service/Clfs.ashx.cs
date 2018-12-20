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
    public class Clfs : ServiceBase
    {
       

        
        public void Save()
        {
            string master = Request.Form["dw_Master"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            SafeDS ds = new SafeDS("dw_clfs_list");
            try
            {
                ds.SetChanges(master);
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();
                        this.SetSuccessedInfo("数据保存成功");
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

                
            }
            
            
        }

       
    }
}