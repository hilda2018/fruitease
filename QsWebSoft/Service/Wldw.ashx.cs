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
    public class Wldw :  ServiceBase
    {


        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string yw_khbm = Request.Form["yw_khbm"].ToString();
            string userid = AppService.GetUserID();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_wldw Where yw_khbm =@id ");
            master.Parameters.Add(new SqlParameter("@id", yw_khbm));

            SqlCommand detail = DBHelp.GetCommand("delete from yw_wldw_khfp Where yw_khbm =@id ");
            detail.Parameters.Add(new SqlParameter("@id", yw_khbm));

            SqlCommand lxr = DBHelp.GetCommand("delete from yw_wldw_lxr Where yw_khbm =@id ");
            lxr.Parameters.Add(new SqlParameter("@id", yw_khbm));

            SqlCommand yh = DBHelp.GetCommand("delete from yw_wldw_yh Where yw_khbm =@id ");
            yh.Parameters.Add(new SqlParameter("@id", yw_khbm));

            SqlCommand jsbm = DBHelp.GetCommand("delete from yw_wldw_jsbm Where yw_khbm =@id ");
            jsbm.Parameters.Add(new SqlParameter("@id", yw_khbm));

            SqlCommand ohdlxy = DBHelp.GetCommand("delete from yw_wldw_ohdlxy Where yw_khbm =@id ");
            ohdlxy.Parameters.Add(new SqlParameter("@id", yw_khbm));

            SqlCommand dz = DBHelp.GetCommand("delete from yw_wldw_dz Where yw_khbm =@id ");
            dz.Parameters.Add(new SqlParameter("@id", yw_khbm));

            SqlCommand khsdttsz = DBHelp.GetCommand("delete from yw_wldw_jysdttsz Where ckdwbm =@id ");
            khsdttsz.Parameters.Add(new SqlParameter("@id", yw_khbm));

            if (master.ExecuteNonQuery() > 0)
            {
                if (detail.ExecuteNonQuery() >= 0)
                {
                    if (lxr.ExecuteNonQuery() >= 0)
                    {
                        if (yh.ExecuteNonQuery() >= 0)
                        {
                            if (jsbm.ExecuteNonQuery() >= 0)
                            {
                                if (ohdlxy.ExecuteNonQuery() >= 0)
                                {
                                    if (dz.ExecuteNonQuery() >= 0)
                                    {
                                        if (khsdttsz.ExecuteNonQuery()>=0)
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
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("客户<" + yw_khbm + ">,已被成功删除");
            }
            else
            {
                this.SetErrorInfo("客户<" + yw_khbm + ">,删除失败");
            }
        }

            


        //单据保存
        protected void Save()
        {
            string userID = AppService.GetUserID();
            string yw_khbm = Request.Form["yw_khbm"].ToString();
            var operation = Request.Form["operation"].ToString();
            string master = Request.Form["dw_Master"].ToString();
            SafeDS ds_master = new SafeDS("dw_ywy_wldw_edit");
            string lxr = Request.Form["dw_lxr"].ToString();
            SafeDS ds_lxr = new SafeDS("dw_ywy_wldw_edit_lxr");
            string yh = Request.Form["dw_yh"].ToString();
            SafeDS ds_yh = new SafeDS("dw_ywy_wldw_edit_yh");
            string jsbm = Request.Form["dw_jsbm"].ToString();
            SafeDS ds_jsbm = new SafeDS("dw_ywy_wldw_edit_jsbm");
            string ohdlxy = Request.Form["dw_ohdlxy"].ToString();
            SafeDS ds_ohdlxy = new SafeDS("dw_ywy_wldw_edit_ohdlxy");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            string dz = Request.Form["dw_dz"].ToString();
            SafeDS ds_dz = new SafeDS("dw_ywy_wldw_edit_dz");
            string khsdttsz = Request.Form["dw_khsdttsz"].ToString();
            SafeDS ds_khsdttsz = new SafeDS("dw_ywy_wldw_edit_khsdttsz");

            try
            {
             
                ds_master.SetChanges(master);
                ds_lxr.SetChanges(lxr);
                ds_yh.SetChanges(yh);
                ds_jsbm.SetChanges(jsbm);
                ds_ohdlxy.SetChanges(ohdlxy);
                ds_log.SetChanges(dw_log);
                ds_dz.SetChanges(dz);
                ds_khsdttsz.SetChanges(khsdttsz);
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if ((operation == "copy" || operation == "modify") && yw_khbm == "")
                {
                      ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                      for (int row = 1; row <= ds_lxr.RowCount; row++)
                      {
                          ds_lxr.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                      }
                      for (int row = 1; row <= ds_yh.RowCount; row++)
                      {
                          ds_yh.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                      }
                      for (int row = 1; row <= ds_jsbm.RowCount; row++)
                      {
                          ds_jsbm.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                      }
                      for (int row = 1; row <= ds_ohdlxy.RowCount; row++)
                      {
                          ds_ohdlxy.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                      }
                      for (int row = 1; row <= ds_dz.RowCount; row++)
                      {
                          ds_dz.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                      }
                      for (int row = 1; row <= ds_khsdttsz.RowCount; row++)
                      {
                          ds_khsdttsz.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                      }
                };

                if (yw_khbm == null || yw_khbm == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified || operation == "copy")
                    {
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(yw_khbm) from yw_wldw where sqr=@userid ");
   
                        cmd.Parameters.Add(new SqlParameter("@userid", userID)); 
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            yw_khbm = userID + "0001";
                        }
                        else
                        {
                            yw_khbm = (string)value;
                            yw_khbm = yw_khbm.Remove(0, userID.Length);
                            yw_khbm = userID + String.Format("{0:0000}", (long.Parse(yw_khbm) + 1));
                        }
                        ds_master.SetItemString(1, "yw_khbm", yw_khbm);
                      
                    }
                    else
                    {
                        yw_khbm = ds_master.GetItemString(1, "yw_khbm");
                    }
                }


                for (int row = 1; row <= ds_lxr.RowCount; row++)
                {
                    ds_lxr.SetItemString(row, "yw_khbm", yw_khbm);
                    ds_lxr.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_yh.RowCount; row++)
                {
                    ds_yh.SetItemString(row, "yw_khbm", yw_khbm);
                    ds_yh.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_jsbm.RowCount; row++)
                {
                    ds_jsbm.SetItemString(row, "yw_khbm", yw_khbm);
                    ds_jsbm.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_ohdlxy.RowCount; row++)
                {
                    ds_ohdlxy.SetItemString(row, "yw_khbm", yw_khbm);
                    ds_ohdlxy.SetItemDouble(row, "cxh", row);
                    var ksrq = ds_ohdlxy.GetItemDate(row, "ksrq");
                    var ksrq_max = ds_ohdlxy.GetItemDate(row, "ksrq_max"); 
                    if (ksrq == ksrq_max) {
                        ds_ohdlxy.SetItem(row, "sfyx", "Y");
                    } else {
                        ds_ohdlxy.SetItem(row, "sfyx", "N");
                    };
                }

                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    ds_log.SetItemString(row, "mainid", yw_khbm);
                }

                for (int row = 1; row <= ds_dz.RowCount; row++)
                {
                    ds_dz.SetItemString(row, "yw_khbm", yw_khbm);
                    ds_dz.SetItemDouble(row, "cxh", row);
                }
                for (int row = 1; row <= ds_khsdttsz.RowCount; row++)
                {
                    if (!string.IsNullOrEmpty(ds_khsdttsz.GetItemString(row,"khbm")) && !string.IsNullOrEmpty(ds_khsdttsz.GetItemString(row,"shdwbm")))
                    {
                    ds_khsdttsz.SetItemString(row, "ckdwbm", yw_khbm);
                    ds_khsdttsz.SetItemString(row, "ckdwmc", ds_master.GetItemString(1,"khmc"));
                    ds_khsdttsz.SetItemString(row, "ckdwjc", ds_master.GetItemString(1, "khjc"));
                    ds_khsdttsz.SetItemString(row, "ckdwpym", ds_master.GetItemString(1, "pym"));
                    }
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_lxr.SetTransaction(this.DBHelp.TransAction);
                ds_yh.SetTransaction(this.DBHelp.TransAction);
                ds_jsbm.SetTransaction(this.DBHelp.TransAction);
                ds_ohdlxy.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds_dz.SetTransaction(this.DBHelp.TransAction);
                ds_khsdttsz.SetTransaction(this.DBHelp.TransAction);

                this.DBHelp.BeginTransAction();
               
                
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_lxr.UpdateData() == 1)
                    {
                        if (ds_yh.UpdateData() == 1)
                        {
                            if (ds_jsbm.UpdateData() == 1)
                            {
                                if (ds_dz.UpdateData() == 1)
                                {
                                    if (ds_khsdttsz.UpdateData() == 1)
                                    {
                                        if (ds_ohdlxy.UpdateData() == 1)
                                        {
                                            if (ds_log.UpdateData() == 1)
                                            {
                                                this.DBHelp.Commit();
                                                //把单据号码，传回到客户端
                                                Response.Write(yw_khbm);
                                                if (operation == "new" || operation == "copy")
                                                {
                                                    SqlCommand detail = DBHelp.GetCommand("insert into yw_wldw_khfp(yw_khbm,ywy) select yw_khbm,sqr from yw_wldw where yw_khbm=@id ;");
                                                    detail.Parameters.Add(new SqlParameter("@id", yw_khbm));
                                                    SqlCommand detail2 = DBHelp.GetCommand("insert into yw_wldw_khfp(yw_khbm,ywy) select yw_khbm,ywy from yw_wldw where yw_khbm=@id ;");
                                                    detail2.Parameters.Add(new SqlParameter("@id", yw_khbm));
                                                    if (detail.ExecuteNonQuery() > 0)
                                                    {
                                                        detail2.ExecuteNonQuery();
                                                    }
                                                    else
                                                    {
                                                        this.DBHelp.Rollback();
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                this.DBHelp.Rollback(); ;
                                                this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                                            }
                                        }

                                        else
                                        {
                                            this.DBHelp.Rollback(); ;
                                            this.SetErrorInfo("欧恒代理协议信息保存失败!\n\n详细错误信息：\n" + ds_ohdlxy.DBError);
                                        }
                                    }
                                    else
                                    {
                                        this.DBHelp.Rollback(); ;
                                        this.SetErrorInfo("欧恒客户税单抬头设置信息保存失败!\n\n详细错误信息：\n" + ds_khsdttsz.DBError);
                                    }
                                }
                                else
                                {
                                    this.DBHelp.Rollback(); ;
                                    this.SetErrorInfo("欧恒地址信息保存失败!\n\n详细错误信息：\n" + ds_dz.DBError);
                                }
                              }
                            else
                            {
                                this.DBHelp.Rollback(); ;
                                this.SetErrorInfo("结算部门信息保存失败!\n\n详细错误信息：\n" + ds_jsbm.DBError);
                            }
                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("银行信息保存失败!\n\n详细错误信息：\n" + ds_yh.DBError);
                        }
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("联系人信息保存失败!\n\n详细错误信息：\n" + ds_lxr.DBError);
                    }   
                  
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("往来单位保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

            }
        }

         protected void UpdateState()
        {
           ///// bool successed = false;

            string yw_khbm = Request.Form["yw_khbm"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("update yw_wldw set state = (case when gwcgs = '1' or fgf = '1' then '批准' else '待批' end ),spjc = (case when gwcgs = '1' then '自动审批' else '未审批' end ),khzt = (case when gwcgs = '1' then '在线' else '潜在' end ) from yw_wldw Where yw_khbm=@id ");
            master.Parameters.Add(new SqlParameter("@id", yw_khbm));

            master.ExecuteReader();

            //if (master.ExecuteReader() )
            //{
               
            //        DBHelp.Commit();
            //        successed = true;
               
            //}
            //else
            //{
            //    DBHelp.Rollback();
            //}

          
        }

         //#region 往来单位收货地址存盘
         protected void ShdzListSave()
         {
             string userID = AppService.GetUserID();
             string dw_list = Request.Form["dw_list"].ToString();
             SafeDS ds_list = new SafeDS("dw_ywy_gnkh_tybm_edit_shdz_select");
             
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
                     this.SetErrorInfo("往来单位收货地址保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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



         //#region 往来单位收货地址存盘
         protected void WldwShdzListSave()
         {
             string userID = AppService.GetUserID();
             string dw_list = Request.Form["dw_list"].ToString();
             SafeDS ds_list = new SafeDS("dw_wldw_shdz_list");

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
                     this.SetErrorInfo("往来单位收货地址保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


         //#region 往来单位收货地址存盘
         protected void SfdqlmListSave()
         {
             string userID = AppService.GetUserID();
             string dw_list = Request.Form["dw_list"].ToString();
             SafeDS ds_list = new SafeDS("dw_road_list");

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
                     this.SetErrorInfo("往来单位收货地址保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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



         //#region 往来单位收货地址存盘
         protected void LxrListSave()
         {
             string userID = AppService.GetUserID();
             string dw_list = Request.Form["dw_list"].ToString();
             SafeDS ds_list = new SafeDS("dw_ywy_gnkh_tybm_edit_lxr");
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
                     this.SetErrorInfo("往来单位联系人保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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