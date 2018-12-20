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
    /// Yfkd 的摘要说明
    /// </summary>
    public class Fysqd :  ServiceBase
    {


       //单据审核
        protected  void Audit()
        {
            
            string userID = AppService.GetUserID();
            string sqdbh = Request.Form["sqdbh"].ToString(); 
            DBHelp.BeginTransAction();
            SqlCommand cmd = DBHelp.GetCommand("UPDATE yw_fysqd Set state=@state Where charindex(sqdbh,@id)>0  ");
            cmd.Parameters.Add(new SqlParameter("@state", "待审核"));
            cmd.Parameters.Add(new SqlParameter("@id", sqdbh));

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
                this.SetErrorInfo( "单据提交审核失败,可能该单据已被其它用户删除或审核!");
            }
      }

        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string sqdbh = Request.Form["Sqdbh"].ToString(); 

            DBHelp.BeginTransAction();
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_fysqd Where sqdbh=@id ");
            SqlCommand cmd_d = DBHelp.GetCommand("delete from yw_fysqd_mx Where sqdbh=@id ");
            cmd.Parameters.Add(new SqlParameter("@id", sqdbh));
            cmd_d.Parameters.Add(new SqlParameter("@id", sqdbh));

            if (cmd.ExecuteNonQuery() > 0)
            {
                if (cmd_d.ExecuteNonQuery() >= 0)
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
                Response.Write("费用申请<" + sqdbh + ">已被成功删除");
            }
            else
            {
                this.SetErrorInfo("费用申请<" + sqdbh + ">删除失败,请检查是否已被其它用户删除或审核了");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string sqdbh = string.Empty; 

            string master = Request.Form["dw_Master"].ToString();
            string detail = Request.Form["dw_Detail"].ToString();

            SafeDS ds_m = new SafeDS("dw_fysqd_edit");
            SafeDS ds_d = new SafeDS("dw_fysqd_mx_edit");

            try
            {
                ds_m.SetChanges(master);
                ds_d.SetChanges(detail);

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。

                if (ds_m.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                {
                    //更新录入人，用当前登录的用户帐号
                    ds_m.SetItem(1, "sqr", userID );
                    var year = System.DateTime.Now.ToShortDateString().Substring(2,2);
                    SqlCommand cmd = this.DBHelp.GetCommand("select max(substring(sqdbh,10,4)) from yw_fysqd where  substring(sqdbh,3,2)=@year and substring(sqdbh,5,5)=@userid ");
                    cmd.Parameters.Add(new SqlParameter("@userid", userID));
                    cmd.Parameters.Add(new SqlParameter("@year", year));
                    object value = cmd.ExecuteScalar();
                    if (Convert.IsDBNull(value) || value == null)
                    {
                        sqdbh = "FY" + year + userID + "0001";
                    }
                    else
                    {
                        sqdbh = "FY" + year + userID + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                    }
                    ds_m.SetItemString(1, "sqdbh", sqdbh);
                }
                else
                {
                    sqdbh = ds_m.GetItemString(1, "sqdbh");
                }

                for (int row = 1; row <= ds_d.RowCount; row++)
                {
                    ds_d.SetItemString(row, "sqdbh", sqdbh);
                    ds_d.SetItemDouble(row, "cxh", row);
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
                        Response.Write(sqdbh);
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



        //打印
        protected void Print()
        {
            bool successed = false;

            string sqdbh = Request.Form["Sqdbh"].ToString();

            DBHelp.BeginTransAction();
            SqlCommand cmd = DBHelp.GetCommand("update  yw_fysqd set dy_flag='Y' Where charindex(sqdbh,@id)>0 ");
           
            cmd.Parameters.Add(new SqlParameter("@id", sqdbh));

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
                var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);
                string userID = AppService.GetUserID();
                string dybh = "";
                SqlCommand d = this.DBHelp.GetCommand("select max(substring(dybh,3,6)) from yw_fysqd where  substring(dybh,1,2)=@year and sqr =@userid ");
                d.Parameters.Add(new SqlParameter("@userid", userID));
                d.Parameters.Add(new SqlParameter("@year", year));
                object value = d.ExecuteScalar();
                if (Convert.IsDBNull(value) || value == null)
                {
                    dybh = year  + "000001";
                }
                else
                {
                    dybh = year + String.Format("{0:000000}", (long.Parse((string)value) + 1));
                }
                SqlCommand cmd2 = DBHelp.GetCommand("update  yw_fysqd set dybh=@dybh Where charindex(sqdbh,@id)>0 ");

                cmd2.Parameters.Add(new SqlParameter("@id", sqdbh));
                cmd2.Parameters.Add(new SqlParameter("@dybh", dybh));
                if (cmd2.ExecuteNonQuery() > 0)
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
                this.SetErrorInfo("更新费用申请<" + sqdbh + ">打印状态失败");
            }
        }

        //取消打印标志
        protected void Cancel()
        {
            bool successed = false;

            string sqdbh = Request.Form["Sqdbh"].ToString();

            DBHelp.BeginTransAction();
            SqlCommand cmd = DBHelp.GetCommand("update  yw_fysqd set dy_flag='N',dybh= null Where charindex(sqdbh,@id)>0 ");

            cmd.Parameters.Add(new SqlParameter("@id", sqdbh));

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
                Response.Write("费用申请<" + sqdbh + ">打印标志取消成功");
            }
            else
            {
                this.SetErrorInfo("更新费用申请<" + sqdbh + ">打印状态取消失败");
            }
        }
    }
}