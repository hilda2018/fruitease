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
    public class Hy_Wlgz_Hcj : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;
            string rwbh = Request.Form["rwbh"].ToString();
            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_wlgz Where rwbh =@rwbh"); 
            master.Parameters.Add(new SqlParameter("@rwbh", rwbh)); 
            if (master.ExecuteNonQuery() > 0)
            {              
                    DBHelp.Commit();
                    successed = true;      
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("换车架编号为<" + rwbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("换车架编号为<" + rwbh + ">,删除失败");
            }
        }

        //单据保存
        protected void Save()
        {
            string userID = AppService.GetUserID();
            string rwbh = Request.Form["rwbh"].ToString();
            string dw_master = Request.Form["dw_master"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_wlgz_edit"); 
            try
            {
                ds_master.SetChanges(dw_master); 

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (rwbh == null || rwbh == "" || rwbh == null)
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(rwbh,4)) from yw_hddz_wlgz where substring(rwbh,1,8) = '" + year.Substring(0, 8) + "' ");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            rwbh = year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            rwbh = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "rwbh", rwbh);
                    }
                    else
                    {
                        rwbh = ds_master.GetItemString(1, "rwbh");
                    }
                }
                 

                ds_master.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {  
                            this.DBHelp.Commit();
                            //把单据号码，传回到客户端
                            Response.Write(rwbh);

                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("调换车架任务保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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


    }
}