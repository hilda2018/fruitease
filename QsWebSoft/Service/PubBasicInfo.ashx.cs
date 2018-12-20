using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using TXSoft.DataStore;

namespace QsWebSoft.Service
{
    /// <summary>
    /// PubBasicInfo 的摘要说明
    /// </summary>
    public class PubBasicInfo : ServiceBase
    {
       
        protected virtual void Save()
        {
            string dataObject = Request["dataObject"].ToString();
            string dwChanges = Request["dwChanges"].ToString();
            SafeDS ds = null;

            try
            {
                ds = new SafeDS(dataObject);
                ds.SetTransaction(this.DBHelp.TransAction);
                ds.SetChanges(dwChanges);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    Response.Write("OK");
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo(ds.DBError);
                }
            }
            catch (Exception ex)
            {
                this.DBHelp.Rollback();
                this.SetErrorInfo(ex.Message);
           }
            finally
            {
                if (ds != null)
                {
                    ds.Dispose();
                    ds = null; 
                }
            }
        }
    }
}