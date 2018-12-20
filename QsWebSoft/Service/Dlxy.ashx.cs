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
    public class Dlxy :  ServiceBase
    {



        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string dlxyh = Request.Form["dlxyh"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_dlxy Where dlxyh =@dlxyh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_dlxy_bz Where dlxyh =@dlxyh");
            master.Parameters.Add(new SqlParameter("@dlxyh", dlxyh));
            cmd.Parameters.Add(new SqlParameter("@dlxyh", dlxyh)); 
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
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

            if (successed)
            {
                Response.Write("货代单证编号为<" +dlxyh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("货代单证编号为<" + dlxyh + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            //string billID = string.Empty;
            string dlxyh = Request.Form["dlxyh"].ToString();
            int bbh = Convert.ToInt32(Request.Form["bbh"].ToString());
            var operation = Request.Form["operation"].ToString();

            string master = Request.Form["dw_Master"].ToString();
            string detail = Request.Form["dw_Detail"].ToString();

            SafeDS ds_master = new SafeDS("dw_dlxy_edit");
            SafeDS ds_cmd = new SafeDS("dw_dlxy_bz");

            try
            {
                ds_master.SetChanges(master);
                ds_cmd.SetChanges(detail);
                             
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (dlxyh == null)
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {

                        SqlCommand cmd = this.DBHelp.GetCommand("select max(dlxyh) from yw_dlxy ");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            dlxyh = "000001";
                        }
                        else
                        {
                            dlxyh = String.Format("{0:000000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "dlxyh", dlxyh);

                       
                    }
                    else
                    {
                        dlxyh = ds_master.GetItemString(1, "dlxyh");
                    }
                }

                            
                for (int row = 1; row <= ds_cmd.RowCount; row++)
                {
                    ds_cmd.SetItemString(row, "dlxyh", dlxyh);
                    ds_cmd.SetItemDouble(row, "bbh", bbh);
                    ds_cmd.SetItemDouble(row, "cxh", row);
                }

              

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_cmd.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    
                    for (int row = 1; row <= ds_cmd.RowCount; row++)
                    {
                        ds_cmd.SetRowStatus(row,Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                  
                   
                };
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_cmd.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write(dlxyh);                        

                       
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
            }
        }

        //#endregion  


        //更新同一个委托单位的其他代理协议为失效
        protected void UpdateDlxyState(string dlxyh, string dlwtf_bm)
        {
            Response.Write(dlxyh);
            Response.Write(dlwtf_bm);
            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("update yw_dlxy set state='失效' Where isnull(dlxyh,'') <> isnull(@dlxyh,'') and dlwtf_bm=@dlwtf_bm");
             master.Parameters.Add(new SqlParameter("@dlxyh", dlxyh));
             master.Parameters.Add(new SqlParameter("@dlwtf_bm", dlwtf_bm));
            
             Response.Write("存盘成功");
            if (master.ExecuteNonQuery() > 0)
            {                 
                    DBHelp.Commit();

            }
            else
            {
                DBHelp.Rollback();
            }

            
        }



        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list");
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
                    this.SetErrorInfo("货代单证信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#endregion  

         protected  void Sx()
        {
            bool successed = false;

            string dlxyh = Request.Form["dlxyh"].ToString();
            int bbh = Convert.ToInt32(Request.Form["bbh"].ToString());

            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("update yw_dlxy set state = '失效' from yw_dlxy Where dlxyh =@dlxyh and bbh=@bbh");
             master.Parameters.Add(new SqlParameter("@dlxyh", dlxyh));
             master.Parameters.Add(new SqlParameter("@bbh", bbh));
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
                Response.Write("代理协议编号为<" +dlxyh + ">,已变为失效");
             
            }
            else
            {
                this.SetErrorInfo("代理协议编号为<" + dlxyh + ">,失效失败");
            }
        }

         //#endregion  

         protected void HfSx()
         {
             bool successed = false;

             string dlxyh = Request.Form["dlxyh"].ToString();
             int bbh = Convert.ToInt32(Request.Form["bbh"].ToString());

             DBHelp.BeginTransAction();
             SqlCommand master = DBHelp.GetCommand("update yw_dlxy set state = '新制' from yw_dlxy Where dlxyh =@dlxyh and bbh=@bbh");
             master.Parameters.Add(new SqlParameter("@dlxyh", dlxyh));
             master.Parameters.Add(new SqlParameter("@bbh", bbh));
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
                 Response.Write("代理协议编号为<" + dlxyh + ">,已恢复失效");

             }
             else
             {
                 this.SetErrorInfo("代理协议编号为<" + dlxyh + ">,恢复失效失败");
             }
         }
    }
}