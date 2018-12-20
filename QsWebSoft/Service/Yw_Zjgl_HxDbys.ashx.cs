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
    public class Yw_Zjgl_HxDbys : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string yshdfygjbh = Request.Form["yshdfygjbh"].ToString(); 
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            ds_log.SetChanges(dw_log);
            ds_log.SetTransaction(this.DBHelp.TransAction);
            DBHelp.BeginTransAction();
            
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_yshdfygj_cmd Where yshdfygjbh=@yshdfygjbh");
            SqlCommand cmd_qtysk = DBHelp.GetCommand("update yw_hddz_fksqd_jzxxx set yshdfygjbh = null   Where yshdfygjbh = @yshdfygjbh");
            SqlCommand cmd_jzxxx = DBHelp.GetCommand("update yw_hddz_jzxxx set yshdfygjbh = null   Where yshdfygjbh = @yshdfygjbh");
            SqlCommand cmd_fksqd = DBHelp.GetCommand("update yw_hddz_qtysk_cmd set yshdfygjbh = null   Where yshdfygjbh = @yshdfygjbh");
            SqlCommand master = DBHelp.GetCommand("delete  yw_hddz_yshdfygj where yshdfygjbh = @yshdfygjbh");
            master.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            cmd.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            cmd_qtysk.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            cmd_jzxxx.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            cmd_fksqd.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh)); 
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() >= 0) 
                {
                    var dd = ds_log.UpdateData();
                    if (ds_log.UpdateData() == 1)
                    {
                        if (cmd_qtysk.ExecuteNonQuery() >= 0)
                        {
                            if (cmd_jzxxx.ExecuteNonQuery() >= 0)
                            {
                                if (cmd_fksqd.ExecuteNonQuery() >= 0)
                                {

                                    DBHelp.Commit();
                                    successed = true;
                                }
                                else {
                                    DBHelp.Rollback();
                                }
                            }
                            else {
                                DBHelp.Rollback();
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
                Response.Write("账单编号为<" + yshdfygjbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("账单编号为<" + yshdfygjbh + ">,删除失败");
            }
        }


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
            //string dw_cb_cmd = Request.Form["dw_cb_cmd"].ToString();
            SafeDS ds_master = new SafeDS("dw_gmhx_dbys_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_gmhx_dbys_edit_cmd");
            //SafeDS ds_cb_cmd = new SafeDS("dw_drdbys_edit_cbcmd");

            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_log.SetChanges(dw_log);
                //ds_cb_cmd.SetChanges(dw_cb_cmd);


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

                    if (sqdbh == null || sqdbh == "")
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
                //ds_cb_cmd.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_log.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        if (ds_master.UpdateData() == 1)
                        {
                            //if (ds_cb_cmd.UpdateData() == 1)
                            //{

                                var ywbh = ds_jzxxx.GetItemString(1, "ywbh");
                                //SqlCommand cmd_fksqd = this.DBHelp.GetCommand("update yw_hddz_fksqd_jzxxx set yshdfygjbh = @yshdfygjbh from yw_hddz_fksqd_jzxxx where ywbh =@ywbh and cxh_hddz = @cxh_hddz and isnull(yshdfygjbh,'')=''");
                                //SqlCommand cmd_qtysk = this.DBHelp.GetCommand("update yw_hddz_qtysk_cmd set yshdfygjbh = @yshdfygjbh from yw_hddz_qtysk_cmd where ywbh =@ywbh and cxh_hddz = @cxh_hddz and isnull(yshdfygjbh,'')=''");
                                //SqlCommand cmd_jzxxx = this.DBHelp.GetCommand(" update yw_hddz_jzxxx set yshdfygjbh = @yshdfygjbh from yw_hddz_jzxxx where ywbh =@ywbh and cxh = @cxh_hddz and isnull(yshdfygjbh,'')=''");


                                SqlParameter param1 = new SqlParameter("@yshdfygjbh", yshdfygjbh);
                                SqlParameter param2 = new SqlParameter("@ywbh", ywbh);
                                SqlCommand cmd_fksqd = this.DBHelp.GetCommand("update yw_hddz_fksqd_jzxxx set yshdfygjbh = @yshdfygjbh from yw_hddz_fksqd_jzxxx where ywbh =@ywbh  and isnull(yshdfygjbh,'')=''");
                                cmd_fksqd.Parameters.Add(param1);
                                cmd_fksqd.Parameters.Add(param2);    
                                SqlCommand cmd_qtysk = this.DBHelp.GetCommand("update yw_hddz_qtysk_cmd set yshdfygjbh = @yshdfygjbh from yw_hddz_qtysk_cmd where ywbh =@ywbh  and isnull(yshdfygjbh,'')=''");
                                cmd_qtysk.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                                cmd_qtysk.Parameters.Add(new SqlParameter("@ywbh", ywbh));    
                                SqlCommand cmd_jzxxx = this.DBHelp.GetCommand(" update yw_hddz_jzxxx set yshdfygjbh = @yshdfygjbh from yw_hddz_jzxxx where ywbh =@ywbh and isnull(yshdfygjbh,'')=''");
                                cmd_jzxxx.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                                cmd_jzxxx.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                                
                                cmd_fksqd.ExecuteNonQuery();
                                cmd_qtysk.ExecuteNonQuery();
                                cmd_jzxxx.ExecuteNonQuery();

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
                //}
                //else
                //{
                //    this.DBHelp.Rollback(); ;
                //    this.SetErrorInfo("应收货代费用归集明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                //}

            }


            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                //ds_cb_cmd.Dispose();
                //ds_cb_cmd = null;

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
            SafeDS ds_list = new SafeDS("dw_hddz_hdfycxf_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_log.UpdateData() == 1)
                {
                    if (ds_list.UpdateData() == 1)
                    {

                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("货代费用拆箱费信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                    }

                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("货代费用拆箱费信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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