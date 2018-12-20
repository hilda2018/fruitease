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
    public class Jhzxgz : ServiceBase
    {

        public void Save()
        {
            string master = Request.Form["dw_Master"].ToString();
            string dw_cmd = Request.Form["dw_1"].ToString();
            SafeDS ds = new SafeDS("dw_jhzxgz_list");
            SafeDS ds_cmd = new SafeDS("dw_jhzxgz_list_cmd");
            try
            {
                ds.SetChanges(master);               
                ds_cmd.SetChanges(dw_cmd);
                ds.SetTransaction(this.DBHelp.TransAction);
                ds_cmd.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {   
                    
                    ds_cmd.UpdateData();
                    this.DBHelp.Commit();
                    //this.SetSuccessedInfo("数据保存成功");
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


            }


        }

        //public void Save()
        //{
        //    string master = Request.Form["dw_Master"].ToString();

        //    SafeDS ds = new SafeDS("dw_jhzxgz_list");
        //    try
        //    {
        //        ds.SetChanges(master);

        //        ds.SetTransaction(this.DBHelp.TransAction);
        //        this.DBHelp.BeginTransAction();

        //        if (ds.UpdateData() == 1)
        //        {
        //            this.DBHelp.Commit();
        //            //this.SetSuccessedInfo("数据保存成功");
        //        }
        //        else
        //        {
        //            this.DBHelp.Rollback();
        //            this.SetErrorInfo("数据保存失败!");
        //            return;
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        this.SetErrorInfo(ex.Message);

        //    }
        //    finally
        //    {
        //        ds.Dispose();
        //        ds = null;


        //    }


        //}


        public void Save1()
        {
            string master = Request.Form["dw_Master"].ToString();

            SafeDS ds = new SafeDS("dw_jhzxgz_list_cmd");
            try
            {
                ds.SetChanges(master);

                ds.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    //this.SetSuccessedInfo("数据保存成功");
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


            }


        }


        ////单据保存
        //protected void Save()
        //{


        //    string dw_list = Request.Form["dw_list"].ToString();
        //    string dw_1 = Request.Form["dw_1"].ToString();
            
        //    SafeDS ds_list = new SafeDS("dw_jhzxgz_list");
        //    SafeDS ds_1 = new SafeDS("dw_jhzxgz_list_cmd");
             
        //    try
        //    {

        //        ds_list.SetChanges(dw_list);
        //        ds_1.SetChanges(dw_1);
               
                   
        //    //for (int row = 1; row <= ds_list.RowCount; row++)
        //    //{
        //    //    ds_list.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
        //    //}
        //        //for (int row = 1; row <= ds_1.RowCount; row++)
        //        //{
        //        //    var bh_temp = ds_1.GetItemString(row, "bh_temp");
        //        //    if (bh_temp == null || bh_temp == "")
        //        //    {   

        //        //        var bh = ds_1.GetItemString(row, "bh");
        //        //        ds_1.SetItem(row, "bh_temp", bh);
        //        //        ds_1.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
        //        //    }
        //        //}
                   

               

               
        //        ds_list.SetTransaction(this.DBHelp.TransAction);
        //        ds_1.SetTransaction(this.DBHelp.TransAction);
               
        //        this.DBHelp.BeginTransAction();
        //        if (ds_list.UpdateData() == 1)
        //        {
        //            if (ds_list.UpdateData() == 1)
        //            {
                        
        //                this.DBHelp.Commit();
        //                //把单据号码，传回到客户端
        //                Response.Write("sc");
        //            }
        //            else
        //            {
        //                this.DBHelp.Rollback();
        //                this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_list.DBError + "  " + ds_list.LastError);
        //            }

        //        }
        //        else
        //        {
        //            this.DBHelp.Rollback();
        //            this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_list.DBError + "  " + ds_list.LastError);
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        this.SetErrorInfo(ex.Message);

        //    }
        //    finally
        //    {
        //        ds_list.Dispose();
        //        ds_list = null;

        //        ds_1.Dispose();
        //        ds_1 = null;

                
        //    }
        //}
        
       

       
    }
}