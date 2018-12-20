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
    public class AuditInfo
    {
        public AuditInfo(string userID)
        {
            this.Auditor = userID;
            this.AuditDate = DateTime.Now;
            this.Status = "待审核";
        }

        public string Auditor { get; set; }
        public DateTime AuditDate { get; set; }
        public string Status { get; set; }
    }

    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class SalesOrder :  ServiceBase
    {


       //单据审核
        protected  void Audit()
        {
            
            string userID = AppService.GetUserID(); 
            string billID = Request.Form["BillID"].ToString(); 
            DBHelp.BeginTransAction();
            SqlCommand cmd = DBHelp.GetCommand("UPDATE Sales Set Auditor=@Auditor, AuditDate=@AuditDate, Status='审核' Where ID=@id AND Status='录入' ");
            cmd.Parameters.Add(new SqlParameter("@Auditor", userID));
            cmd.Parameters.Add(new SqlParameter("@AuditDate", DateTime.Today));
            cmd.Parameters.Add(new SqlParameter("@id", billID));

            if (cmd.ExecuteNonQuery() > 0)
            {
                 DBHelp.Commit();


                 AuditInfo audit = new AuditInfo(userID );

                　//转为Javascript的JSON字符串
                 string javascriptJson = JsonConvert.SerializeObject(audit, new JavaScriptDateTimeConverter());
                 Response.Write("(" + javascriptJson + ")");  //加上()，以便在客户端可以通过eval生成JS对象
            }
           else
            {
                DBHelp.Rollback();
                this.SetErrorInfo( "单据审核失败,可能该单据已被其它用户删除或审核!");
            }
      }

        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string billID = Request.Form["BillID"].ToString(); 

            DBHelp.BeginTransAction();
            SqlCommand cmd = DBHelp.GetCommand("delete from Sales Where ID=@id AND Status='录入' ");
            SqlCommand cmd_d = DBHelp.GetCommand("delete from SalesDetail Where ID=@id ");
            cmd.Parameters.Add(new SqlParameter("@id", billID));
            cmd_d.Parameters.Add(new SqlParameter("@id", billID));

            if (cmd.ExecuteNonQuery() > 0)
            {
                if (cmd_d.ExecuteNonQuery() > 0)
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
                Response.Write("销售订单<" + billID + ">已被成功删除");
            }
            else
            {
              this.SetErrorInfo("销售订单<" + billID + ">删除失败,请检查是否已被其它用户删除或审核了");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID(); 
            string billID = string.Empty; 

            string master = Request.Form["dw_Master"].ToString();
            string detail = Request.Form["dw_Detail"].ToString();

            SafeDS ds_m = new SafeDS("d_Sales_m");
            SafeDS ds_d = new SafeDS("d_Sales_d");

            try
            {
                ds_m.SetChanges(master);
                ds_d.SetChanges(detail);

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。

                if (ds_m.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                {
                    //更新录入人，用当前登录的用户帐号
                    ds_m.SetItem(1, "MakeBy", userID );

                    SqlCommand cmd = this.DBHelp.GetCommand("select max(id) from Sales ");
                    object value = cmd.ExecuteScalar();
                    if (Convert.IsDBNull(value) || value == null)
                    {
                        billID = "000001";
                    }
                    else
                    {
                        billID = String.Format("{0:000000}", (long.Parse((string)value) + 1));
                    }
                    ds_m.SetItemString(1, "id", billID);
                }
                else
                {
                    billID = ds_m.GetItemString(1, "ID");
                }

                for (int row = 1; row <= ds_d.RowCount; row++)
                {
                    ds_d.SetItemString(row, "id", billID);
                    ds_d.SetItemDouble(row, "seq", row);
                }


                ds_m.SetTransaction(this.DBHelp.TransAction);
                ds_d.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_m.UpdateData() == 1)
                {
                    if (ds_d.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();

                        //把单据号码，传回到客户端
                        Response.Write(billID);
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("单据明细保存失败!\n\n详细错误信息：\n" + ds_d.DBError);
                 }
                }
                else
                {
                   this.DBHelp.Rollback();
                   this.SetErrorInfo("单据保存失败!\n\n详细错误信息：\n" + ds_m.DBError + "  " + ds_m.LastError);
                }
            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message); 

            }
            finally
            {
                ds_m.Dispose();
                ds_m = null;

                ds_d.Dispose();
                ds_d = null; 
            }
        }
    }
}