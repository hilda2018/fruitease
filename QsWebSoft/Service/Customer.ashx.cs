using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;

namespace QsWebSoft.Service
{
    /// <summary>
    /// Customer 的摘要说明
    /// </summary>
    public class Customer : ServiceBase
    {

        protected void Save()
        {
            string dataObject = "d_customer_edit"; 
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
        protected void Delete()
        {
            string id = Request["id"].ToString(); 
             SqlCommand cmd = this.DBHelp.GetCommand("select count(*) where exists( select 1 from Sales  where custid=@id )");
            cmd.Parameters.Add(new SqlParameter("@id", id));
            int cnt = (int)cmd.ExecuteScalar();
            if (cnt > 0)
            {
                this.SetErrorInfo( "已存在客户编码<" + id + "> 的销售订单记录，不能被删除!" ) ;
            }
            else
            {
                cmd = this.DBHelp.GetCommand("delete from customer where id=@id");
                cmd.Parameters.Add(new SqlParameter("@id", id));
                cmd.ExecuteNonQuery();
            }
        }
    }
}