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
    public class Szyw_skhx : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string skdbh = Request.Form["skdbh"].ToString(); 

            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_sjskd Where skdbh=@skdbh");
            SqlCommand cmd_skhx = DBHelp.GetCommand("update yw_hddz_zdgl set  dzje =isnull((select  sum(a.skje)  from   yw_hddz_skhx_cmd  a where yw_hddz_zdgl.zdbm = a.djh  and   a.sjly = '账单' and a.skdbh <> @skdbh ),0), wsje = isnull(ysje,0) - isnull((select  sum(b.skje)  from   yw_hddz_skhx_cmd  b where yw_hddz_zdgl.zdbm = b.djh  and   b.sjly = '账单'  and b.skdbh <> @skdbh),0) from yw_hddz_zdgl,yw_hddz_skhx_cmd Where  yw_hddz_zdgl.zdbm = yw_hddz_skhx_cmd.djh and   yw_hddz_skhx_cmd.sjly = '账单' and yw_hddz_skhx_cmd.skdbh = @skdbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_skhx_cmd Where skdbh=@skdbh");
            master.Parameters.Add(new SqlParameter("@skdbh", skdbh));
            cmd_skhx.Parameters.Add(new SqlParameter("@skdbh", skdbh));
            cmd.Parameters.Add(new SqlParameter("@skdbh", skdbh));
           
               
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd_skhx.ExecuteNonQuery() >= 0)
                {

                    if (cmd.ExecuteNonQuery() >= 0)
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
                Response.Write("收款核销编号为<" + skdbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("收款核销编号为<" + skdbh + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string skdbh = Request.Form["skdbh"].ToString(); 
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString(); 
            SafeDS ds_master = new SafeDS("dw_szyw_skhx_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_szyw_skhx_edit_cmd"); 
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
                if (skdbh == null || skdbh == "")
                {

                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(skdbh,4)) from yw_hddz_sjskd where substring(skdbh,1,8) = '" + year.Substring(0, 8) + "' ");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            skdbh = year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            skdbh = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "skdbh", skdbh);
                    }
                    else
                    {
                        skdbh = ds_master.GetItemString(1, "skdbh");
                    }
                }

              

                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "skdbh", skdbh);
                    ds_jzxxx.SetItemDouble(row, "skd_cxh", row); 
                }

               

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction); 
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if(ds_jzxxx.RowCount> 0){
                        if (ds_jzxxx.UpdateData() == 1)
                        {        
                            this.DBHelp.Commit();
                            //把单据号码，传回到客户端


                            DBHelp.BeginTransAction();
                            SqlCommand master = DBHelp.GetCommand("update yw_hddz_zdgl set  dzje =isnull((select  sum(a.skje)  from   yw_hddz_skhx_cmd  a where yw_hddz_zdgl.zdbm = a.djh  and   a.sjly = '账单'),0), wsje = isnull(ysje,0) - isnull((select  sum(a.skje)  from   yw_hddz_skhx_cmd  a where yw_hddz_zdgl.zdbm = a.djh  and   a.sjly = '账单'),0) from yw_hddz_zdgl,yw_hddz_skhx_cmd Where  yw_hddz_zdgl.zdbm = yw_hddz_skhx_cmd.djh and   yw_hddz_skhx_cmd.sjly = '账单' and yw_hddz_skhx_cmd.skdbh = @skdbh");
                            master.Parameters.Add(new SqlParameter("@skdbh", skdbh));
                            if (master.ExecuteNonQuery() > 0)
                            {
                                DBHelp.Commit();

                            }
                            else
                            {
                                DBHelp.Rollback();
                                this.SetErrorInfo("更新账单到账金额信息：\n");
                            }

                            Response.Write(skdbh);
                        
                        }
                        else
                        {
                            this.DBHelp.Rollback();;
                            this.SetErrorInfo("收款核销明细信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                        }
                    }
                    else
                    {
                          this.DBHelp.Commit();
                            //把单据号码，传回到客户端
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("收款核销保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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
            SafeDS ds_list = new SafeDS("dw_szyw_skhx_list");
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
                    this.SetErrorInfo("收款核销信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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