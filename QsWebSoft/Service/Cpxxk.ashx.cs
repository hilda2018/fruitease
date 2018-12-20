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
    public class Cpxxk : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string cpxxkbm = Request.Form["cpxxkbm"].ToString();

            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_cpxxk Where cpxxkbm =@cpxxkbm");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_cpxxk_cmd Where cpxxkbm=@cpxxkbm");
            SqlCommand cmd_jycljtyq = DBHelp.GetCommand("delete from yw_hddz_cpxxk_jycljtyq Where cpxxkbm=@cpxxkbm");
            SqlCommand cmd_jydzyq = DBHelp.GetCommand("delete from yw_hddz_cpxxk_jydzyq Where cpxxkbm=@cpxxkbm"); 
            SqlCommand cmd_hgsj = DBHelp.GetCommand("delete from yw_hddz_cpxxk_hgsj Where cpxxkbm=@cpxxkbm");
            SqlCommand cmd_clqy = DBHelp.GetCommand("delete from yw_hddz_cpxxk_clqy Where cpxxkbm=@cpxxkbm");
            SqlCommand cmd_slb = DBHelp.GetCommand("delete from yw_hddz_cpxxk_slb Where cpxxkbm=@cpxxkbm");
            master.Parameters.Add(new SqlParameter("@cpxxkbm", cpxxkbm));
            cmd.Parameters.Add(new SqlParameter("@cpxxkbm", cpxxkbm));
            cmd_jycljtyq.Parameters.Add(new SqlParameter("@cpxxkbm", cpxxkbm));
            cmd_jydzyq.Parameters.Add(new SqlParameter("@cpxxkbm", cpxxkbm)); 
            cmd_hgsj.Parameters.Add(new SqlParameter("@cpxxkbm", cpxxkbm));
            cmd_clqy.Parameters.Add(new SqlParameter("@cpxxkbm", cpxxkbm));
            cmd_slb.Parameters.Add(new SqlParameter("@cpxxkbm", cpxxkbm)); 
            if (master.ExecuteNonQuery() > 0)
            {
                cmd.ExecuteNonQuery();
                cmd_jycljtyq.ExecuteNonQuery();
                cmd_jydzyq.ExecuteNonQuery() ;
                cmd_hgsj.ExecuteNonQuery(); 
                cmd_clqy.ExecuteNonQuery() ;
                cmd_slb.ExecuteNonQuery();
                DBHelp.Commit();
                successed = true;          
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("产品信息库编号为<" + cpxxkbm + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("产品信息库编号为<" + cpxxkbm + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string cpxxkbm = Request.Form["cpxxkbm"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            string dw_jzxxx_jycljtyq = Request.Form["dw_jycljtyq"].ToString(); 
            string dw_jzxxx_jydzyq = Request.Form["dw_jydzyq"].ToString();  
            string dw_jzxxx_hgsj = Request.Form["dw_hgsj"].ToString();
            string dw_jzxxx_clqy = Request.Form["dw_clqy"].ToString();
            string dw_jzxxx_slb = Request.Form["dw_slb"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_cpxxk_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_cpxxk_edit_cmd");
            SafeDS ds_jzxxx_jycljtyq = new SafeDS("dw_cpxxk_edit_jycljtyq");
            SafeDS ds_jzxxx_jydzyq = new SafeDS("dw_cpxxk_edit_jydzyq"); 
            SafeDS ds_jzxxx_hgsj = new SafeDS("dw_cpxxk_edit_hgsj");
            SafeDS ds_jzxxx_clqy = new SafeDS("dw_cpxxk_edit_clqy");
            SafeDS ds_jzxxx_slb = new SafeDS("dw_cpxxk_edit_slb");
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_jzxxx_jycljtyq.SetChanges(dw_jzxxx_jycljtyq);
                ds_jzxxx_jydzyq.SetChanges(dw_jzxxx_jydzyq);
                ds_jzxxx_hgsj.SetChanges(dw_jzxxx_hgsj);
                ds_jzxxx_clqy.SetChanges(dw_jzxxx_clqy);
                ds_jzxxx_slb.SetChanges(dw_jzxxx_slb);
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                    for (int row = 1; row <= ds_jzxxx_jycljtyq.RowCount; row++)
                    {
                        ds_jzxxx_jycljtyq.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                    for (int row = 1; row <= ds_jzxxx_jydzyq.RowCount; row++)
                    {
                        ds_jzxxx_jydzyq.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }



                    for (int row = 1; row <= ds_jzxxx_hgsj.RowCount; row++)
                    {
                        ds_jzxxx_hgsj.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                    for (int row = 1; row <= ds_jzxxx_clqy.RowCount; row++)
                    {
                        ds_jzxxx_clqy.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                    for (int row = 1; row <= ds_jzxxx_slb.RowCount; row++)
                    {
                        ds_jzxxx_slb.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (cpxxkbm == null || cpxxkbm == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(cpxxkbm,5)) from yw_hddz_cpxxk where substring(cpxxkbm,4,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            cpxxkbm = "CPK" + year.Substring(0, 8) + "00001";
                        }
                        else
                        {
                            cpxxkbm = "CPK" + year.Substring(0, 8) + String.Format("{0:00000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "cpxxkbm", cpxxkbm);
                    }
                    else
                    {
                        cpxxkbm = ds_master.GetItemString(1, "cpxxkbm");
                    }
                }



                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "cpxxkbm", cpxxkbm);
                    ds_jzxxx.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_jzxxx_jycljtyq.RowCount; row++)
                {
                    ds_jzxxx_jycljtyq.SetItemString(row, "cpxxkbm", cpxxkbm);
                    ds_jzxxx_jycljtyq.SetItemDouble(row, "cxh", row);
                }
                for (int row = 1; row <= ds_jzxxx_jydzyq.RowCount; row++)
                {
                    ds_jzxxx_jydzyq.SetItemString(row, "cpxxkbm", cpxxkbm);
                    ds_jzxxx_jydzyq.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_jzxxx_hgsj.RowCount; row++)
                {
                    ds_jzxxx_hgsj.SetItemString(row, "cpxxkbm", cpxxkbm);
                    ds_jzxxx_hgsj.SetItemDouble(row, "cxh", row);
                }
                for (int row = 1; row <= ds_jzxxx_clqy.RowCount; row++)
                {
                    ds_jzxxx_clqy.SetItemString(row, "cpxxkbm", cpxxkbm);
                    ds_jzxxx_clqy.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_jzxxx_slb.RowCount; row++)
                {
                    ds_jzxxx_slb.SetItemString(row, "cpxxkbm", cpxxkbm);
                    ds_jzxxx_slb.SetItemDouble(row, "cxh", row);
                }



                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx_jycljtyq.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx_jydzyq.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx_hgsj.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx_clqy.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx_slb.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    ds_jzxxx.UpdateData();
                    ds_jzxxx_jycljtyq.UpdateData();
                    ds_jzxxx_jydzyq.UpdateData();
                    ds_jzxxx_hgsj.UpdateData();
                    ds_jzxxx_clqy.UpdateData();
                    ds_jzxxx_slb.UpdateData();
                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write(cpxxkbm);
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("产品信息库保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_jzxxx_jycljtyq.Dispose();
                ds_jzxxx_jycljtyq = null;

                ds_jzxxx_jydzyq.Dispose();
                ds_jzxxx_jydzyq = null;


                ds_jzxxx_hgsj.Dispose();
                ds_jzxxx_hgsj = null;

                ds_jzxxx_clqy.Dispose();
                ds_jzxxx_clqy = null;

                ds_jzxxx_slb.Dispose();
                ds_jzxxx_slb = null;

            }

            //    if (ds_master.UpdateData() == 1)
            //    {
            //        if (ds_jzxxx.UpdateData() == 1)
            //        {
            //            if (ds_jzxxx_jycljtyq.UpdateData() == 1)
            //            {
            //                if (ds_jzxxx_jydzyq.UpdateData() == 1)
            //                {
                                
            //                        if (ds_jzxxx_hgsj.UpdateData() == 1)
            //                        {
            //                            if (ds_jzxxx_clqy.UpdateData() == 1)
            //                            {
            //                                this.DBHelp.Commit();
            //                                //把单据号码，传回到客户端
            //                                Response.Write(cpxxkbm);

            //                            }
            //                            else
            //                            {
            //                                this.DBHelp.Rollback(); ;
            //                                this.SetErrorInfo("产品信息库处理区域保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
            //                            }

            //                        }
            //                        else
            //                        {
            //                            this.DBHelp.Rollback(); ;
            //                            this.SetErrorInfo("产品信息库海关审价保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
            //                        }

                                
            //                }
            //                else
            //                {
            //                    this.DBHelp.Rollback(); ;
            //                    this.SetErrorInfo("产品信息库检疫单证要求保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
            //                }

            //            }
            //            else
            //            {
            //                this.DBHelp.Rollback(); ;
            //                this.SetErrorInfo("产品信息库检疫处理具体要求保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
            //            }
                        
            //        }
            //        else
            //        {
            //            this.DBHelp.Rollback();;
            //            this.SetErrorInfo("产品信息库明细保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
            //        }
            //    }
            //    else
            //    {
            //        this.DBHelp.Rollback();
            //        this.SetErrorInfo("产品信息库保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
            //    }
            //}

            //catch (Exception ex)
            //{
            //    this.SetErrorInfo(ex.Message);

            //}
            //finally
            //{
            //    ds_master.Dispose();
            //    ds_master = null;

            //    ds_jzxxx.Dispose();
            //    ds_jzxxx = null;

            //    ds_jzxxx_jycljtyq.Dispose();
            //    ds_jzxxx_jycljtyq = null;

            //    ds_jzxxx_jydzyq.Dispose();
            //    ds_jzxxx_jydzyq = null;
                 

            //    ds_jzxxx_hgsj.Dispose();
            //    ds_jzxxx_hgsj = null;

            //    ds_jzxxx_clqy.Dispose();
            //    ds_jzxxx_clqy = null;
               
            //}
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_cpxxk_list");
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
                    this.SetErrorInfo("产品信息库保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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