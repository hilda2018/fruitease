﻿using System;
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
    public class Yw_Zjgl_Zdgl : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string zdbm = Request.Form["zdbm"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_zdgl Where zdbm =@zdbm");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_zdgl_cmd Where zdbm=@zdbm");
            SqlCommand cmd_yshdfygj = DBHelp.GetCommand("update yw_hddz_yshdfygj set zdbm = null from yw_hddz_yshdfygj Where zdbm=@zdbm");
            master.Parameters.Add(new SqlParameter("@zdbm", zdbm));
            cmd.Parameters.Add(new SqlParameter("@zdbm", zdbm));
            cmd_yshdfygj.Parameters.Add(new SqlParameter("@zdbm", zdbm)); 
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() >= 0)
                {

                    if (cmd_yshdfygj.ExecuteNonQuery() >= 0)
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

            if (successed)
            {
                Response.Write("账单编号为<" + zdbm + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("账单编号为<" + zdbm + ">,删除失败");
            }
        }
         
 
        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string zdbm = Request.Form["zdbm"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            SafeDS ds_master = new SafeDS("dw_gmdr_zdgl_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_gmdr_zdgl_edit_cmd"); 
       
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx); 
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                   

                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (zdbm == null || zdbm == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(zdbm,4)) from yw_hddz_zdgl where substring(zdbm,3,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            zdbm = "ZD" + year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            zdbm = "ZD" + year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "zdbm", zdbm);
                    }
                    else
                    {
                        zdbm = ds_master.GetItemString(1, "zdbm");
                    }
                }

              

                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "zdbm", zdbm);
                    ds_jzxxx.SetItemDouble(row, "cxh", row); 
                }

               

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {        
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write(zdbm);


                         
                        DBHelp.BeginTransAction();
                        SqlCommand master = DBHelp.GetCommand("update yw_hddz_yshdfygj set yw_hddz_yshdfygj.zdbm = yw_hddz_zdgl_cmd.zdbm from yw_hddz_yshdfygj,yw_hddz_zdgl_cmd Where yw_hddz_yshdfygj.yshdfygjbh = yw_hddz_zdgl_cmd.yshdfygjbh and yw_hddz_zdgl_cmd.zdbm =@zdbm");
                        master.Parameters.Add(new SqlParameter("@zdbm", zdbm)); 
                        if (master.ExecuteNonQuery() > 0)
                        { 
                             DBHelp.Commit();        

                        }
                        else
                        {
                             DBHelp.Rollback();
                             this.SetErrorInfo("更新归集信息表错误信息：\n" );
                        }
                     
                        
                    }
                    else
                    {
                        this.DBHelp.Rollback();;
                        this.SetErrorInfo("付款申请单明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("付款申请单保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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
               
            }
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_hdfycxf_list");
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