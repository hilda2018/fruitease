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
    /// 结汇单据 的摘要说明
    /// </summary>
    public class Jhdj :  ServiceBase
    {


        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string mxdbh = Request.Form["mxdbh"].ToString();
            int bbh = Convert.ToInt32(Request.Form["bbh"].ToString());


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_detail Where mxdbh=@id  ");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_detail_cmd Where mxdbh=@id  ");
            //SqlCommand cmd_hb = DBHelp.GetCommand("delete from yw_detail_cmd_hb Where mxdbh=@id  ");
            //SqlCommand packing_cmd = DBHelp.GetCommand("delete from yw_detail_packing_cmd Where mxdbh=@id ");
            SqlCommand fy = DBHelp.GetCommand("delete from yw_detail_fy Where mxdbh=@id  ");
            SqlCommand zhuangtai = DBHelp.GetCommand("delete from dz_zhuangtai Where dtl_no=@id  ");

            master.Parameters.Add(new SqlParameter("@id", mxdbh));
            cmd.Parameters.Add(new SqlParameter("@id", mxdbh));
            //cmd_hb.Parameters.Add(new SqlParameter("@id", mxdbh));
            //packing_cmd.Parameters.Add(new SqlParameter("@id", mxdbh));
            fy.Parameters.Add(new SqlParameter("@id", mxdbh));
            zhuangtai.Parameters.Add(new SqlParameter("@id", mxdbh));



            if (master.ExecuteNonQuery() > 0)//主表
            {
                if (cmd.ExecuteNonQuery() > 0)//商品
                {
                    //if (cmd_hb.ExecuteNonQuery() >= 0)//合并商品
                    //{
                    //    if (packing_cmd.ExecuteNonQuery() >= 0)//装箱信息
                    //    {
                            if (fy.ExecuteNonQuery() >= 0)//费用
                            {
                                if (zhuangtai.ExecuteNonQuery() >= 0)//单证编号
                                {
                                    DBHelp.Commit();
                                    successed = true;
                                }
                                else//单证编号
                                {
                                    DBHelp.Rollback();
                                }

                            }
                            else//费用信息
                            {
                                DBHelp.Rollback();
                            }

                    //    }
                    //    else//装箱信息
                    //    {
                    //        DBHelp.Rollback();
                    //    }

                    //}
                    //else//合并商品
                    //{
                    //    DBHelp.Rollback();
                    //}

                }
                else//商品
                {
                    DBHelp.Rollback();
                }

            }
            else//主表
            {
                DBHelp.Rollback();
            }
           
            
        

            if (successed)
            {
                Response.Write("结汇单据" + mxdbh + ",已被成功删除");
            }
            else
            {
                this.SetErrorInfo("结汇单据" + mxdbh +",删除失败");
            }
        }
       
        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            //string billID = string.Empty;
            string mxdbh = Request.Form["mxdbh"].ToString();
            int bbh = Convert.ToInt32(Request.Form["bbh"].ToString());
            var operation = Request.Form["operation"].ToString();
            string master = Request.Form["dw_Master"].ToString();
            string detail = Request.Form["dw_Detail"].ToString();
            string memo = Request.Form["dw_Memo"].ToString();
            string fy = Request.Form["dw_Fy"].ToString();           
            SafeDS ds_master = new SafeDS("dw_jhdj_edit_primary");
            SafeDS ds_cmd = new SafeDS("dw_jhdj_edit_cmd");
            SafeDS ds_fy = new SafeDS("dw_jhdj_edit_fy");
            SafeDS ds_memo = new SafeDS("dw_jhdj_memo");

            try
            {
                ds_master.SetChanges(master);
                ds_cmd.SetChanges(detail);
                ds_fy.SetChanges(fy);
                ds_memo.SetChanges(memo);

               
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (mxdbh == null)
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {

                        SqlCommand cmd = this.DBHelp.GetCommand("select max(mxdbh) from yw_detail ");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            mxdbh = "000001";
                        }
                        else
                        {
                            mxdbh = String.Format("{0:000000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "mxdbh", mxdbh);
                    }
                    else
                    {
                        mxdbh = ds_master.GetItemString(1, "mxdbh");
                    }
                }

                for (int row = 1; row <= ds_memo.RowCount; row++)
                {
                    ds_memo.SetItemString(row, "dz_zhuangtai_dtl_no", mxdbh);
                }           
             
                for (int row = 1; row <= ds_cmd.RowCount; row++)
                {
                    ds_cmd.SetItemString(row, "mxdbh", mxdbh);
                    ds_cmd.SetItemDouble(row, "bbh", bbh);
                    ds_cmd.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_fy.RowCount; row++)
                {
                    ds_fy.SetItemString(row, "mxdbh", mxdbh);
                    ds_fy.SetItemDouble(row, "bbh", bbh);
                    ds_fy.SetItemDouble(row, "cxh", row);
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_cmd.SetTransaction(this.DBHelp.TransAction);
                ds_fy.SetTransaction(this.DBHelp.TransAction);
                ds_memo.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    for (int row = 1; row <= ds_cmd.RowCount; row++)
                    {
                        ds_cmd.SetRowStatus(row,Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_fy.RowCount; row++)
                    {
                        ds_fy.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_memo.RowCount; row++)
                    {
                        ds_memo.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                };
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_cmd.UpdateData() == 1)
                    {
                        
                        if (ds_fy.UpdateData() == 1)
                        {
                            if (ds_memo.UpdateData() == 1)
                            {

                                this.DBHelp.Commit();

                                //把单据号码，传回到客户端
                                Response.Write(mxdbh);
                            }
                            else
                            {
                                this.DBHelp.Rollback();
                                this.SetErrorInfo("结汇单据单证格式保存失败!\n\n详细错误信息：\n" + ds_memo.DBError);
                            }
                        }
                        else
                        {
                            this.DBHelp.Rollback();
                            this.SetErrorInfo("结汇单据保存失败!\n\n详细错误信息：\n" + ds_fy.DBError);
                        }
                            
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("结汇单据保存失败!\n\n详细错误信息：\n" + ds_cmd.DBError);
                 }
                }
                else
                {
                   this.DBHelp.Rollback();
                   this.SetErrorInfo("结汇单据保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_cmd.Dispose();
                ds_cmd = null;

                ds_fy.Dispose();
                ds_fy = null;

                ds_memo.Dispose();
                ds_memo = null;

            }
        }

        //单据接收
        protected void SaveCopy()
        {
            string userID = AppService.GetUserID();
            //string billID = string.Empty;
            string mxdbh = Request.Form["mxdbh"].ToString();
            int bbh = Convert.ToInt32(Request.Form["bbh"].ToString());
            string master = Request.Form["dw_Master"].ToString();
            string detail = Request.Form["dw_Detail"].ToString();
            string fy = Request.Form["dw_Fy"].ToString();

            SafeDS ds_master = new SafeDS("ds_read_jhdj");
            SafeDS ds_cmd = new SafeDS("ds_read_jhdj_cmd");
            SafeDS ds_fy = new SafeDS("ds_read_jhdj_fy");

            try
            {
                ds_master.SetChanges(master);
                ds_cmd.SetChanges(detail);
                ds_fy.SetChanges(fy);


              

                for (int row = 1; row <= ds_cmd.RowCount; row++)
                {
                    ds_cmd.SetItemString(row, "mxdbh", mxdbh);
                    ds_cmd.SetItemDouble(row, "bbh", bbh);
                    ds_cmd.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_fy.RowCount; row++)
                {
                    ds_fy.SetItemString(row, "mxdbh", mxdbh);
                    ds_fy.SetItemDouble(row, "bbh", bbh);
                    ds_fy.SetItemDouble(row, "cxh", row);
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_cmd.SetTransaction(this.DBHelp.TransAction);
                ds_fy.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                for (int row = 1; row <= ds_cmd.RowCount; row++)
                {
                    ds_cmd.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                }
                for (int row = 1; row <= ds_fy.RowCount; row++)
                {
                    ds_fy.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                }
                
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_cmd.UpdateData() == 1)
                    {
                        
                           
                                if (ds_fy.UpdateData() == 1)
                                {


                                    this.DBHelp.Commit();

                                    //把单据号码，传回到客户端
                                    Response.Write(mxdbh);
                                }
                                else
                                {
                                    this.DBHelp.Rollback();
                                    this.SetErrorInfo("费用信息保存失败!\n\n详细错误信息：\n" + ds_fy.DBError);
                                }
                            
                                
                       
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("商品信息保存失败!\n\n详细错误信息：\n" + ds_cmd.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("主表信息保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_cmd.Dispose();
                ds_cmd = null;


                ds_fy.Dispose();
                ds_fy = null;
            }
        }
    }
}