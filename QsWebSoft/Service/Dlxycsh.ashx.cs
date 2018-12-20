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
    public class Dlxycsh : ServiceBase
    {
       

        
        public void Save()
        {
            SafeDS ds = new SafeDS("dw_dlxy_bz");
            if (ds.SetChanges(this.Request.Form["dw_Master"].ToString()))
            {
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
            else
            {
                this.SetErrorInfo("WebService提交的数据不正确");
                return;
            }
            
            
        }

       
    }
}