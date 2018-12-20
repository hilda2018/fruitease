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
    public class Kyqdcx : ServiceBase
    {
        public void Save()
        {
            string dw_list = Request.Form["dw_list"].ToString();
            string dw_list2 = Request.Form["dw_list2"].ToString();

            SafeDS ds = new SafeDS("dw_ky_qdcx_list_hwxx");
            SafeDS ds2 = new SafeDS("dw_ky_qdcx_list_clxx");
            try
            {
                ds.SetChanges(dw_list);
                ds2.SetChanges(dw_list2);

                ds.SetTransaction(this.DBHelp.TransAction);
                ds2.SetTransaction(this.DBHelp.TransAction);

                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1 && ds2.UpdateData() == 1)
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

                ds2.Dispose();
                ds2 = null;
            }
        }
    }
}