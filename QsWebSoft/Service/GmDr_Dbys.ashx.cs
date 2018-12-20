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
    /// SalesOrder 的摘要说明
    /// </summary>
    public class GmDr_Dbys : ServiceBase
    { 
        
        //单据保存
        protected void Save()
        {
            string userID = AppService.GetUserID(); 
            string yshdfygjbh = Request.Form["yshdfygjbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            string dw_cb_cmd = Request.Form["dw_cb_cmd"].ToString();
            SafeDS ds_master = new SafeDS("dw_drdbys_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_drdbys_edit_cmd");
            SafeDS ds_cb_cmd = new SafeDS("dw_drdbys_edit_cbcmd");
            
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_log.SetChanges(dw_log);
                ds_cb_cmd.SetChanges(dw_cb_cmd);
               

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (yshdfygjbh == null || yshdfygjbh == "")
                {
                    var year = System.DateTime.Now.ToString("yyyyMMdd");
                    SqlCommand cmd = this.DBHelp.GetCommand("select max(right(yshdfygjbh,6)) from yw_hddz_yshdfygj where substring(yshdfygjbh,1,12) = '" + userID + year.Substring(0, 8) + "' ");
                    object value = cmd.ExecuteScalar();
                    if (Convert.IsDBNull(value) || value == null)
                    {
                        yshdfygjbh = userID + year.Substring(0, 8) + "000001";
                    }
                    else
                    {
                        yshdfygjbh = userID + year.Substring(0, 8) + String.Format("{0:000000}", (long.Parse((string)value) + 1));
                    }
                    if (ds_master.RowCount == 1)
                    {
                        ds_master.SetItemString(1, "yshdfygjbh", yshdfygjbh);
                    }
                }
                

                //var fyjes = 0.00;
                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    //fyjes += ds_jzxxx.GetItemDouble(row, "fyje");
                    var sqdbh = ds_jzxxx.GetItemString(row, "sqdbh");

                    if (sqdbh == null || sqdbh =="")
                    {
                        
                            //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                            var year = System.DateTime.Now.ToString("yyyyMMdd");
                            SqlCommand cmd = this.DBHelp.GetCommand("select max(right(sqdbh,4)) from yw_hddz_fksqd where substring(sqdbh,1,8) = '" + year.Substring(0, 8) + "' ");
                            object value = cmd.ExecuteScalar();
                            if (Convert.IsDBNull(value) || value == null)
                            {
                                //sqdbh = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                                sqdbh = year.Substring(0, 8) + "0001";
                            }
                            else
                            {
                                //sqdbh = year.Substring(0, 8) + "0001";
                                sqdbh = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                            }
                            ds_jzxxx.SetItemString(row, "sqdbh", sqdbh);
                        }
                       
                  }
                if (ds_master.RowCount == 1)
                {
                    ds_master.SetItemString(1, "yshdfygjbh", yshdfygjbh);
                    //ds_master.SetItemDouble(1, "fyje", fyjes);
                }
                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    ds_log.SetItemString(row, "mainid", yshdfygjbh);
                }
                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    var yshdfygjbh_old = ds_jzxxx.GetItemString(row, "yshdfygjbh");
                    if (yshdfygjbh_old == null || yshdfygjbh_old == "")
                    {
                        ds_jzxxx.SetItemString(row, "yshdfygjbh", yshdfygjbh);
                        ds_jzxxx.SetItemDouble(row, "cxh", row);
                    }
                    //sqdbh_sum += ds_jzxxx.GetItemString(row, "sqdbh")+",";
                    

                } 

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_cb_cmd.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();


                if (ds_log.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        if (ds_master.UpdateData() == 1)
                        {
                            if (ds_cb_cmd.UpdateData() == 1)
                            {

                                var ywbh = ds_jzxxx.GetItemString(1, "ywbh");
                                SqlCommand cmd = this.DBHelp.GetCommand("update yw_hddz_fksqd_cmd set yshdfygjbh = @yshdfygjbh from yw_hddz_fksqd_cmd where ywbh =@ywbh and isnull(yshdfygjbh,'')=''");
                                SqlParameter param1 = new SqlParameter("@yshdfygjbh", yshdfygjbh);
                                SqlParameter param2 = new SqlParameter("@ywbh", ywbh);
                                cmd.Parameters.Add(param1);
                                cmd.Parameters.Add(param2);
                                cmd.ExecuteNonQuery();


                                //update_yshdfygjbh.ExecuteNonQuery();
                                this.DBHelp.Commit();
                                //把单据号码，传回到客户端

                                //this.Tbsxg(yshdfygjbh);

                                Response.Write(yshdfygjbh);



                            }
                            else
                            {
                                this.DBHelp.Rollback(); ;
                                this.SetErrorInfo("应收货代费用归集明细信息1保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                            }
                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("应收货代费用归集明细信息1保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                        }

                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("应收货代费用归集明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("应收货代费用归集明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                }
 
            }
         
        
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_cb_cmd.Dispose();
                ds_cb_cmd = null;

                ds_master.Dispose();
                ds_master = null;

                ds_jzxxx.Dispose();
                ds_jzxxx = null;

                ds_log.Dispose();
                ds_log = null;
            }
        }
    }
} 