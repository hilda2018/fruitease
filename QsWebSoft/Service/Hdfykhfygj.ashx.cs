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
    public class Hdfykhfygj : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string yshdfygjbh = Request.Form["yshdfygjbh"].ToString();

            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete  from  yw_hddz_yshdfygj Where yshdfygjbh =@yshdfygjbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from  yw_hddz_yshdfygj_cmd Where yshdfygjbh=@yshdfygjbh");
            SqlCommand update_yszyf = DBHelp.GetCommand("update yw_hddz_fksqd_jzxxx set yshdfygjbh = null from  yw_hddz_fksqd_jzxxx Where yshdfygjbh=@yshdfygjbh");
            SqlCommand update_hdfyys = DBHelp.GetCommand("update yw_hddz_jzxxx set yshdfygjbh = null from  yw_hddz_jzxxx Where yshdfygjbh=@yshdfygjbh");
            SqlCommand update_cqfys = DBHelp.GetCommand("update yw_hddz_jzxxx set yshdfygjbh_cqf = null from  yw_hddz_jzxxx Where yshdfygjbh_cqf=@yshdfygjbh");
            SqlCommand update_qtys = DBHelp.GetCommand("update yw_hddz_qtysk_cmd set yshdfygjbh = null from  yw_hddz_qtysk_cmd Where yshdfygjbh=@yshdfygjbh");
          
            master.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            cmd.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            update_yszyf.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            update_hdfyys.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            update_cqfys.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
            update_qtys.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh)); 
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
                {
                    update_yszyf.ExecuteNonQuery();
                    update_hdfyys.ExecuteNonQuery(); 
                    update_cqfys.ExecuteNonQuery(); 
                    update_qtys.ExecuteNonQuery(); 
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

            if (successed)
            {
                Response.Write("应收货代费用归集编号为<" + yshdfygjbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("应收货代费用归集编号为<" + yshdfygjbh + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string yshdfygjbh = Request.Form["yshdfygjbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_hddz_yshdfygj_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_yshdfygj_edit_cmd"); 
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);                

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                  if (yshdfygjbh == null || yshdfygjbh == "")
                {
                    var year = System.DateTime.Now.ToString("yyyyMMdd");
                    SqlCommand cmd = this.DBHelp.GetCommand("select max(right(yshdfygjbh,6)) from yw_hddz_yshdfygj where substring(yshdfygjbh,1,8) = '" + year.Substring(0, 8) + "' ");
                    object value = cmd.ExecuteScalar();
                     if (Convert.IsDBNull(value) || value == null)
                    {
                        yshdfygjbh = year.Substring(0, 8) + "000001";
                    }
                    else
                    {
                        yshdfygjbh =   year.Substring(0, 8) + String.Format("{0:000000}", (long.Parse((string)value) + 1));
                    }
                    if (ds_master.RowCount ==1) {
                        ds_master.SetItemString(1, "yshdfygjbh", yshdfygjbh);
                    }
                }
                else
                {
                    yshdfygjbh = ds_master.GetItemString(1, "yshdfygjbh");
                };


                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "yshdfygjbh", yshdfygjbh); 
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
                        Response.Write(yshdfygjbh);
                        
                    }
                    else
                    {
                        this.DBHelp.Rollback();;
                        this.SetErrorInfo("应收货代费用归集明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("应收货代费用归集保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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
            SafeDS ds_list = new SafeDS("dw_hddz_hdfyyshdfygj_list");
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
                    this.SetErrorInfo("应收货代费用归集信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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