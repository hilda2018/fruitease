﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace QsWebSoft.Service
{
    public class Gngk : ServiceBase
    {
       

        
        public void Save()
        {
            string master = Request.Form["dw_1"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();

            SafeDS ds = new SafeDS("dw_xtdm_gngk");
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds.SetChanges(master);
                ds_log.SetChanges(dw_log);
                ds.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
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

       
    }
}