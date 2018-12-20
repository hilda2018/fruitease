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
using Interfaces;
using System.Xml;

namespace QsWebSoft.Service
{
  

    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class Hdfy_Czdgl : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string czdbh = Request.Form["czdbh"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            ds_log.SetChanges(dw_log);
            ds_log.SetTransaction(this.DBHelp.TransAction);
            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_czd Where czdbh =@czdbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_czd_mx Where czdbh=@czdbh");
            //SqlCommand update_yszyf = DBHelp.GetCommand("update yw_hddz_fksqd_cmd set yshdfygjbh = null from  yw_hddz_fksqd_cmd Where yshdfygjbh=@yshdfygjbh");
            master.Parameters.Add(new SqlParameter("@czdbh", czdbh));
            cmd.Parameters.Add(new SqlParameter("@czdbh", czdbh));
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        DBHelp.Commit();
                        successed = true;
                    }
                    else
                    {
                        DBHelp.Rollback();
                        this.SetErrorInfo("传输错误日志信息保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
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
                Response.Write("出账单编号为<" + czdbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("出账单编号为<" + czdbh + ">,删除失败");
            }
        }


       
        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string czdbh = Request.Form["czdbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_cmd"].ToString();
            SafeDS ds_master = new SafeDS("dw_hddz_czd_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_czd_edit_cmd");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            //string sqdbh_sum = "";
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_log.SetChanges(dw_log);

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (czdbh == null || czdbh == "")
                {
                    var year = System.DateTime.Now.ToString("yyyyMMdd");
                    SqlCommand cmd = this.DBHelp.GetCommand("select max(right(czdbh,6)) from yw_hddz_czd where substring(czdbh,1,8) = '" + year.Substring(0, 8) + "' ");
                    object value = cmd.ExecuteScalar();
                    if (Convert.IsDBNull(value) || value == null)
                    {
                        czdbh = year.Substring(0, 8) + "000001";
                    }
                    else
                    {
                        czdbh = year.Substring(0, 8) + String.Format("{0:000000}", (long.Parse((string)value) + 1));
                    }
                    if (ds_master.RowCount == 1)
                    {
                        ds_master.SetItemString(1, "czdbh", czdbh);
                    }
                }
                else
                {
                    czdbh = ds_master.GetItemString(1, "czdbh");
                };


                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "czdbh", czdbh);
                    ds_jzxxx.SetItemDouble(row, "cxh", row);
                    //sqdbh_sum += ds_jzxxx.GetItemString(row, "sqdbh") + ",";
                }

                //sqdbh_sum = sqdbh_sum.Trim(',');

                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    ds_log.SetItemString(row, "mainid", czdbh);
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                //SqlCommand update_yshdfygjbh = DBHelp.GetCommand("update yw_hddz_fksqd_cmd set yshdfygjbh = @yshdfygjbh from  yw_hddz_fksqd_cmd Where sqdbh in (@sqdbh_sum)");
                //update_yshdfygjbh.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                //update_yshdfygjbh.Parameters.Add(new SqlParameter("@sqdbh_sum", sqdbh_sum));

                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        if (ds_log.UpdateData() == 1)
                        {
                            //update_yshdfygjbh.ExecuteNonQuery();
                            this.DBHelp.Commit();
                            //把单据号码，传回到客户端

                            //this.Tbsxg(yshdfygjbh);

                            Response.Write(czdbh);
                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("出账单明细信息保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                        }
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("出账单明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("出账单保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
                }
            }

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_master.Dispose();
                ds_master = null;

                ds_jzxxx.Dispose();
                ds_jzxxx = null;

                ds_log.Dispose();
                ds_log = null;
            }
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_czd_list");
            try
            {
                ds_list.SetChanges(dw_list);


                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {

                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write("存盘成功");
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("出账单信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_list.Dispose();
                ds_list = null;

            }
        }

    }
}