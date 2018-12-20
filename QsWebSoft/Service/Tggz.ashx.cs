using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;
using System.Data;

namespace QsWebSoft.Service
{
    public class Tggz : ServiceBase
    {
        

    //public void Save_Tggz()
    //    {

    //        string dw_1 = Request.Form["dw_1"].ToString();
    //        string dw_log = Request.Form["dw_log"].ToString();
    //        SafeDS ds_1 = new SafeDS("dw_hddz_tggz");
    //        SafeDS ds_log = new SafeDS("dw_s_log_list");

    //        try
    //        {

    //            //ds.SetChanges(master);
    //            //ds_log.SetChanges(dw_log);
    //            //ds.SetTransaction(this.DBHelp.TransAction);
    //            //ds_log.SetTransaction(this.DBHelp.TransAction);

    //            ds_1.SetChanges(dw_1);
            
    //            ds_log.SetChanges(dw_log);

               

    //            ds_1.SetTransaction(this.DBHelp.TransAction);
               
    //            ds_log.SetTransaction(this.DBHelp.TransAction);

    //            this.DBHelp.BeginTransAction();

    //            if (ds_1.UpdateData() == 1)
    //            {
                    
    //                ds_log.UpdateData();
    //                this.DBHelp.Commit();

    //                DBHelp dbHelp = new DBHelp();
    //                SqlCommand cmd = new SqlCommand();
    //                try
    //                {
                        
    //                    dbHelp.Commit();
    //                }
    //                catch (Exception ex)
    //                {
    //                    this.SetErrorInfo(ex.Message);
    //                }
    //                finally {
    //                    dbHelp.Close();
    //                    dbHelp = null;
    //                }

    //                this.SetSuccessedInfo("数据保存成功");
    //                // Response.Write("存盘成功");
    //            }
    //            else
    //            {
    //                this.DBHelp.Rollback();
    //                this.SetErrorInfo("数据保存失败!");
    //                return;
    //            }
    //        }

    //        catch (Exception ex)
    //        {
    //            this.SetErrorInfo(ex.Message);
    //        }
    //        finally
    //        {
    //            ds_1.Dispose();
    //            ds_1 = null;

               

    //            ds_log.Dispose();
    //            ds_log = null;
    //        }
    //    }





        public void Save_Tggz()
        {

            string dw_1 = Request.Form["dw_1"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_1 = new SafeDS("dw_hddz_tggz");
            SafeDS ds_log = new SafeDS("dw_s_log_list");

            try
            {

                //ds.SetChanges(master);
                //ds_log.SetChanges(dw_log);
                //ds.SetTransaction(this.DBHelp.TransAction);
                //ds_log.SetTransaction(this.DBHelp.TransAction);

                ds_1.SetChanges(dw_1);

                ds_log.SetChanges(dw_log);



                ds_1.SetTransaction(this.DBHelp.TransAction);

                ds_log.SetTransaction(this.DBHelp.TransAction);

                this.DBHelp.BeginTransAction();

                if (ds_1.UpdateData() == 1)
                {

                    ds_log.UpdateData();
                    this.DBHelp.Commit();

                    DBHelp dbHelp = new DBHelp();
                    SqlCommand cmd = new SqlCommand();
                    try
                    {

                        dbHelp.Commit();

                        

                    }
                    catch (Exception ex)
                    {
                        this.SetErrorInfo(ex.Message);
                    }
                    finally
                    {
                        dbHelp.Close();
                        dbHelp = null;
                    }

                    this.SetSuccessedInfo("数据保存成功");
                    // Response.Write("存盘成功");
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
                ds_1.Dispose();
                ds_1 = null;



                ds_log.Dispose();
                ds_log = null;
            }
        }





        public void Save()
        {
            //string master = Request.Form["dw_Master"].ToString();
            //string dw_log = Request.Form["dw_log"].ToString();
            //SafeDS ds = new SafeDS("dw_hddz_tggz");
            //SafeDS ds_log = new SafeDS("dw_s_log_list");

            string dw_1 = Request.Form["dw_1"].ToString();
            string dw_2 = Request.Form["dw_2"].ToString();
            string dw_3 = Request.Form["dw_3"].ToString();
            string dw_4 = Request.Form["dw_4"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();

            SafeDS ds_1 = new SafeDS("dw_hddz_tggz");
            SafeDS ds_2 = new SafeDS("dw_hddz_tggz_b_one");
            SafeDS ds_3 = new SafeDS("dw_hddz_tggz_b_two");
            SafeDS ds_4 = new SafeDS("dw_hddz_tggz_b_three");
            SafeDS ds_log = new SafeDS("dw_s_log_list");

            try
            {

                //ds.SetChanges(master);
                //ds_log.SetChanges(dw_log);
                //ds.SetTransaction(this.DBHelp.TransAction);
                //ds_log.SetTransaction(this.DBHelp.TransAction);

                ds_1.SetChanges(dw_1);
                ds_2.SetChanges(dw_2);
                ds_3.SetChanges(dw_3);
                ds_4.SetChanges(dw_4);
                ds_log.SetChanges(dw_log);

                for (var i = 1; i <= ds_4.RowCount; i++)
                {
                    var dz_xx = ds_4.GetItemString(i, "dz_xx");

                }

                ds_1.SetTransaction(this.DBHelp.TransAction);
                ds_2.SetTransaction(this.DBHelp.TransAction);
                ds_3.SetTransaction(this.DBHelp.TransAction);
                ds_4.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);

                this.DBHelp.BeginTransAction();

                if (ds_1.UpdateData() == 1)
                {
                    ds_2.UpdateData();
                    ds_3.UpdateData();
                    ds_4.UpdateData();
                    ds_log.UpdateData();
                    this.DBHelp.Commit();

                    DBHelp dbHelp = new DBHelp();
                    SqlCommand cmd = new SqlCommand();
                    try
                    {
                        cmd = dbHelp.GetCommand("p_hywlgz");
                        cmd.CommandType = CommandType.StoredProcedure;
                          
                        for (int i = 1; i <= ds_4.RowCount; i++)
                        {
                            var ywbh = ds_4.GetItemString(i, "ywbh");
                            var hddz_cxh =  ds_4.GetItemInt32(i, "hddz_cxh");
                            cmd.Parameters.Add(new SqlParameter("@ywbh",ywbh ));
                            cmd.Parameters.Add(new SqlParameter("@cxh", hddz_cxh.ToString()));
                            cmd.ExecuteNonQuery();
                            dbHelp.Commit();
                        }
                       
                        
                                 

                        for (int i = 1; i <= ds_2.RowCount;i++ ) { 
                            var ywbh = ds_2.GetItemString(i, "ywbh");
                            var cxh = ds_2.GetItemInt32(i, "cxh");
                             cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                            cmd.Parameters.Add(new SqlParameter("@cxh", cxh.ToString()));
                            cmd.ExecuteNonQuery();
                        }
                        dbHelp.Commit();

                    }
                    catch (Exception ex)
                    {
                        this.SetErrorInfo(ex.Message);
                    }
                    finally {
                        dbHelp.Close();
                        dbHelp = null;
                    }

                    this.SetSuccessedInfo("数据保存成功");
                    // Response.Write("存盘成功");
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
                ds_1.Dispose();
                ds_1 = null;

                ds_2.Dispose();
                ds_2 = null;

                ds_3.Dispose();
                ds_3 = null;

                ds_4.Dispose();
                ds_4 = null;

                ds_log.Dispose();
                ds_log = null;
            }
        }
    }
}