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
    public class Mxd :  ServiceBase
    {
    
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string mxdbh = Request.Form["mxdbh"].ToString();
            int bbh = Convert.ToInt32(Request.Form["bbh"].ToString());


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_mxd Where mxdbh=@id and bbh=@bbh ");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_mxd_cmd Where mxdbh=@id and bbh=@bbh ");
            SqlCommand tyzss = DBHelp.GetCommand("delete from yw_mxd_tyzss Where mxdbh=@id  and bbh=@bbh");
            SqlCommand mxdfy = DBHelp.GetCommand("delete from yw_mxd_fy Where mxdbh=@id  and bbh=@bbh");
            SqlCommand cbcy = DBHelp.GetCommand("delete from yw_mxd_cbyc Where mxdbh=@id  and bbh=@bbh");

            //SqlCommand sgcmd = DBHelp.GetCommand("delete from yw_mxd_cmd_sgmx Where mxdbh=@id  and bbh=@bbh");
            master.Parameters.Add(new SqlParameter("@id", mxdbh));
            master.Parameters.Add(new SqlParameter("@bbh", bbh));
            cmd.Parameters.Add(new SqlParameter("@id", mxdbh));
            cmd.Parameters.Add(new SqlParameter("@bbh", bbh));
            tyzss.Parameters.Add(new SqlParameter("@id", mxdbh));
            tyzss.Parameters.Add(new SqlParameter("@bbh", bbh));
            mxdfy.Parameters.Add(new SqlParameter("@id", mxdbh));
            mxdfy.Parameters.Add(new SqlParameter("@bbh", bbh));
            cbcy.Parameters.Add(new SqlParameter("@id", mxdbh));
            cbcy.Parameters.Add(new SqlParameter("@bbh", bbh));
        

            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
                {
                    if (tyzss.ExecuteNonQuery() > 0)
                    {
                            if (cbcy.ExecuteNonQuery() > 0)
                            {
                                    if (mxdfy.ExecuteNonQuery() >= 0)
                                    {
                                        if (bbh > 1)
                                        {
                                            SqlCommand ms = DBHelp.GetCommand("update yw_mxd set bb_flag='Y' Where mxdbh=@id and bbh=@bbh ");
                                            ms.Parameters.Add(new SqlParameter("@id", mxdbh));
                                            ms.Parameters.Add(new SqlParameter("@bbh", bbh - 1));
                                            if (ms.ExecuteNonQuery() > 0)
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
                                            if (bbh == 1)
                                            {
                                                SqlCommand wlxx = DBHelp.GetCommand("delete from yw_mxd_wl Where mxdbh=@id ");
                                                wlxx.Parameters.Add(new SqlParameter("@id", mxdbh));
       
                                            
                                                if (wlxx.ExecuteNonQuery() >= 0)
                                                {
                                                    DBHelp.Commit();
                                                    successed = true;
                                                }
                                                else
                                                {
                                                    DBHelp.Rollback();
                                                }
                                            }
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
                }
                else
                {
                    DBHelp.Rollback();
                }

            if (successed)
            {
                Response.Write("明细单<" +mxdbh + "--第" + bbh.ToString() + "版>,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("明细单<" + mxdbh + "--第" + bbh.ToString() + "版>,删除失败");
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
            string cbyc = Request.Form["dw_Cbyc"].ToString();
            string fy = Request.Form["dw_Fy"].ToString();
            string tyzss = Request.Form["dw_Tyzss"].ToString();
            string wlxx = Request.Form["dw_Wlxx"].ToString();

            SafeDS ds_master = new SafeDS("dw_mxd_edit_primary");
            SafeDS ds_cmd = new SafeDS("dw_mxd_edit_cmd");
            SafeDS ds_cbyc = new SafeDS("dw_mxd_edit_cbyc");
            SafeDS ds_fy = new SafeDS("dw_mxd_edit_fy");
            SafeDS ds_tyzss = new SafeDS("dw_mxd_edit_tyzss2");
            SafeDS ds_wlxx = new SafeDS("dw_mxd_edit_wl");


            try
            {
                ds_master.SetChanges(master);
                ds_cmd.SetChanges(detail);
                ds_cbyc.SetChanges(cbyc);
                ds_fy.SetChanges(fy);
                ds_tyzss.SetChanges(tyzss);
                ds_wlxx.SetChanges(wlxx);
               
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (mxdbh == null)
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {

                        SqlCommand cmd = this.DBHelp.GetCommand("select max(mxdbh) from yw_mxd ");
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

                for (int row = 1; row <= ds_cbyc.RowCount; row++)
                {
                    ds_cbyc.SetItemString(row, "mxdbh", mxdbh);
                    ds_cbyc.SetItemDouble(row, "bbh", bbh);
                }

                for (int row = 1; row <= ds_tyzss.RowCount; row++)
                {
                    ds_tyzss.SetItemString(row, "mxdbh", mxdbh);
                    ds_tyzss.SetItemDouble(row, "bbh", bbh);
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

                for (int row = 1; row <= ds_wlxx.RowCount; row++)
                {
                    ds_wlxx.SetItemString(row, "mxdbh", mxdbh);
                    ds_wlxx.SetItemDouble(row, "cxh", row);

                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_cmd.SetTransaction(this.DBHelp.TransAction);
                ds_cbyc.SetTransaction(this.DBHelp.TransAction);
                ds_fy.SetTransaction(this.DBHelp.TransAction);
                ds_tyzss.SetTransaction(this.DBHelp.TransAction);
                ds_wlxx.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    ds_cbyc.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    ds_tyzss.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    
                    for (int row = 1; row <= ds_cmd.RowCount; row++)
                    {
                        ds_cmd.SetRowStatus(row,Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_fy.RowCount; row++)
                    {
                        ds_fy.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                    for (int row = 1; row <= ds_wlxx.RowCount; row++)
                    {
                        ds_wlxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                };
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_cmd.UpdateData() == 1)
                    {
                        if (ds_cbyc.UpdateData() == 1)
                        {
                            if (ds_tyzss.UpdateData() == 1)
                            {
                                if (ds_fy.UpdateData() == 1)
                                {
                                    if (ds_wlxx.UpdateData() == 1)
                                    {

                                        this.DBHelp.Commit();

                                        //把单据号码，传回到客户端
                                        Response.Write(mxdbh);
                                    }
                                    else
                                    {
                                        this.DBHelp.Rollback();
                                        this.SetErrorInfo("单据明细保存失败!\n\n详细错误信息：\n" + ds_fy.DBError);
                                    }
                                }
                                else
                                {
                                    this.DBHelp.Rollback();
                                    this.SetErrorInfo("单据明细保存失败!\n\n详细错误信息：\n" + ds_fy.DBError);
                                }
                            }
                            else
                            {
                                this.DBHelp.Rollback();
                                this.SetErrorInfo("单据明细保存失败!\n\n详细错误信息：\n" + ds_tyzss.DBError);
                            }

                        }
                        else
                        {
                            this.DBHelp.Rollback();
                            this.SetErrorInfo("单据明细保存失败!\n\n详细错误信息：\n" + ds_cbyc.DBError);
                        }
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("单据明细保存失败!\n\n详细错误信息：\n" + ds_cmd.DBError);
                 }
                }
                else
                {
                   this.DBHelp.Rollback();
                   this.SetErrorInfo("单据保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_cbyc.Dispose();
                ds_cbyc = null;

                ds_fy.Dispose();
                ds_fy = null;

                ds_tyzss.Dispose();
                ds_tyzss = null;

                ds_wlxx.Dispose();
                ds_wlxx = null; 
            }
        }
    }
}