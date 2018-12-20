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
    public class WldwOld :  ServiceBase
    {


        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string yw_khbm = Request.Form["yw_khbm"].ToString();
            string userid = AppService.GetUserID();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from Corporations Where yw_khbm =@id ");
            master.Parameters.Add(new SqlParameter("@id", yw_khbm));

            

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
            SafeDS ds_master = new SafeDS("dw_corporations_edit"); 

            try
            {
             
                ds_master.SetChanges(master); 
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if ((operation == "copy" || operation == "modify") && yw_khbm == "")
                {
                      ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    
                };

                if (yw_khbm == null || yw_khbm == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified || operation == "copy")
                    {
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(yw_khbm) from Corporations   "); 
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            yw_khbm = userID + "0001";
                        }
                        else
                        {
                            yw_khbm = (string)value; 
                            yw_khbm =   String.Format("{0:0000}", (long.Parse(yw_khbm) + 1));
                        }
                        ds_master.SetItemString(1, "yw_khbm", yw_khbm);
                      
                    }
                    else
                    {
                        yw_khbm = ds_master.GetItemString(1, "yw_khbm");
                    }
                }


                
                ds_master.SetTransaction(this.DBHelp.TransAction);               
                this.DBHelp.BeginTransAction();
               
                
                if (ds_master.UpdateData() == 1)
                {
                   
                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write(yw_khbm);
                                              
                  
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

           
    }
}