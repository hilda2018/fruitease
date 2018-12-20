using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;

namespace QsWebSoft.Service
{
    public class Item : ServiceBase
    {

        protected void Save()
        {
            string dataObject = "d_item_edit";
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
            SqlCommand cmd = this.DBHelp.GetCommand("select count(*) where exists( select 1 from SalesDetail  where itemid=@id) ");
            cmd.Parameters.Add(new SqlParameter("@id", id));
            int cnt = (int)cmd.ExecuteScalar();
            if (cnt > 0)
            {
                this.SetErrorInfo("已存在货品编码<" + id + "> 的销售订单明细记录，不能被删除!");
            }
            else
            {
                cmd = this.DBHelp.GetCommand("delete from item where id=@id");
                cmd.Parameters.Add(new SqlParameter("@id", id));
                cmd.ExecuteNonQuery();
            }
        }
    }
}