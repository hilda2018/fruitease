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
    public class HddzRjjk :  ServiceBase
    {



        //单据删除
        protected  void Delete()
        {
            bool successed = false;

            string ywbh = Request.Form["ywbh"].ToString();


            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz Where ywbh =@ywbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_jzxxx Where ywbh=@ywbh");
            SqlCommand cmd_bg = DBHelp.GetCommand("delete from yw_hddz_spxx Where ywbh=@ywbh");
            SqlCommand cmd_zzxx = DBHelp.GetCommand("delete from yw_hddz_zzxx Where ywbh=@ywbh");
            SqlCommand cmd_fsdz = DBHelp.GetCommand("delete from yw_hddz_fsdz Where ywbh=@ywbh");
            master.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_bg.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_zzxx.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_fsdz.Parameters.Add(new SqlParameter("@ywbh", ywbh));  
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
                {

                    if (cmd_bg.ExecuteNonQuery() > 0)
                    {

                        cmd_zzxx.ExecuteNonQuery();
                        cmd_fsdz.ExecuteNonQuery();
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
                Response.Write("货代单证编号为<" +ywbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("货代单证编号为<" + ywbh + ">,删除失败");
            }
        }

        //单据保存
        protected  void Save()
        {
            
            string userID = AppService.GetUserID();
            string ywbh = Request.Form["ywbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            string dw_spxx = Request.Form["dw_spxx"].ToString();
            string dw_zzxx = Request.Form["dw_zzxx"].ToString();
            string dw_fsdz = Request.Form["dw_fsdz"].ToString();
            string dw_sjzs = Request.Form["dw_sjzs"].ToString();
            string dw_sjbzcl = Request.Form["dw_sjbzcl"].ToString();
            string dw_zsbh = Request.Form["dw_zsbh"].ToString();
            string dw_sjsfdj = Request.Form["dw_sjsfdj"].ToString();
            SafeDS ds_master = new SafeDS("dw_hddz_rjjk_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_rjjk_edit_jzxxx");
            SafeDS ds_spxx = new SafeDS("dw_hddz_rjjk_edit_spxx");
            SafeDS ds_zzxx = new SafeDS("dw_hddz_rjjk_edit_zzxx");
            SafeDS ds_fsdz = new SafeDS("dw_hddz_rjjk_edit_fsdz");
            SafeDS ds_sjzs = new SafeDS("dw_hddz_rjjk_edit_spxx_sjzs");
            SafeDS ds_sjbzcl = new SafeDS("dw_hddz_rjjk_edit_spxx_sjbzcl");
            SafeDS ds_zsbh = new SafeDS("dw_hddz_rjjk_edit_zsbh");
            SafeDS ds_sjsfdj = new SafeDS("dw_hddz_rjjk_edit_sjsfdj");
            try
            {
               
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_spxx.SetChanges(dw_spxx);
                ds_zzxx.SetChanges(dw_zzxx);
                ds_fsdz.SetChanges(dw_fsdz);
                ds_sjzs.SetChanges(dw_sjzs);
                ds_sjbzcl.SetChanges(dw_sjbzcl);
                ds_zsbh.SetChanges(dw_zsbh);
                ds_sjsfdj.SetChanges(dw_sjsfdj);
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_spxx.RowCount; row++)
                    {
                        ds_spxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_zzxx.RowCount; row++)
                    {
                        ds_zzxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_fsdz.RowCount; row++)
                    {
                        ds_fsdz.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_sjzs.RowCount; row++)
                    {
                        ds_sjzs.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_sjbzcl.RowCount; row++)
                    {
                        ds_sjbzcl.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_zsbh.RowCount; row++)
                    {
                        ds_zsbh.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_sjsfdj.RowCount; row++)
                    {
                        ds_sjsfdj.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                };
              
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
              
                if (ywbh == null || ywbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {

                        var Xj = "";
                        if (ds_spxx.RowCount > 0) { 
                           Xj = ds_spxx.GetItemString(1, "xj");
                        }                         
                         
                        var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);
                        SqlCommand cmd = this.DBHelp.GetCommand("select max(substring(ywbh,5,4)) from yw_hddz where substring(ywbh,1,2) = '" + year + "' and zbr = '" + userID+ "'");
                        object value = cmd.ExecuteScalar();
                        SqlCommand cmd_djdm = this.DBHelp.GetCommand("select max(Djdm) from Sys_Users where ID = '" + userID + "'");
                        object value_djdm = cmd_djdm.ExecuteScalar();
                        var Djdm = (string)value_djdm;
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            ywbh = year + Djdm + "0001" + Xj; 
                        }
                        else
                        {
                            ywbh = year + Djdm + String.Format("{0:0000}", (long.Parse((string)value) + 1)) + Xj;                        
                        }
                   
                        ds_master.SetItemString(1, "ywbh", ywbh);
                    }
                    else
                    {
                        ywbh = ds_master.GetItemString(1, "ywbh");
                    }
                }

                var hth = ds_master.GetItemString(1, "hth");

                if (hth == "" || hth == null) 
                {
                    ds_master.SetItem(1, "hth", ywbh);
                }


               

                for (int row = 1; row <= ds_spxx.RowCount; row++)
                {
                    ds_spxx.SetItemString(row, "ywbh", ywbh);
                    ds_spxx.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_zzxx.RowCount; row++)
                {
                    ds_zzxx.SetItemString(row, "ywbh", ywbh);
                    ds_zzxx.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_fsdz.RowCount; row++)
                {
                    ds_fsdz.SetItemString(row, "ywbh", ywbh);
                    ds_fsdz.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_sjzs.RowCount; row++)
                {
                    ds_sjzs.SetItemString(row, "ywbh", ywbh);
                    ds_sjzs.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_sjbzcl.RowCount; row++)
                {
                    ds_sjbzcl.SetItemString(row, "ywbh", ywbh);
                    ds_sjbzcl.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_zsbh.RowCount; row++)
                {
                    ds_zsbh.SetItemString(row, "ywbh", ywbh);
                    ds_zsbh.SetItemDouble(row, "cxh", row);
                }
                for (int row = 1; row <= ds_sjsfdj.RowCount; row++)
                {
                    ds_sjsfdj.SetItemString(row, "ywbh", ywbh);
                    ds_sjsfdj.SetItemDouble(row, "cxh", row);
                }


                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_spxx.SetTransaction(this.DBHelp.TransAction);
                ds_zzxx.SetTransaction(this.DBHelp.TransAction);
                ds_fsdz.SetTransaction(this.DBHelp.TransAction);
                ds_sjzs.SetTransaction(this.DBHelp.TransAction);
                ds_sjbzcl.SetTransaction(this.DBHelp.TransAction);
                ds_zsbh.SetTransaction(this.DBHelp.TransAction);
                ds_sjsfdj.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {                        
                        if (ds_spxx.UpdateData() == 1)
                        {
                            if (ds_zzxx.UpdateData() == 1) {
                                if (ds_fsdz.UpdateData() == 1)
                                {
                                    if (ds_sjzs.UpdateData() == 1)
                                    {
                                        if (ds_sjbzcl.UpdateData() == 1)
                                        {
                                            if (ds_zsbh.UpdateData() == 1)
                                            {
                                                ds_sjsfdj.UpdateData();
                                                this.DBHelp.Commit();
                                                //把单据号码，传回到客户端
                                                Response.Write(ywbh);
                                            }
                                            else
                                            {
                                                this.DBHelp.Rollback(); ;
                                                this.SetErrorInfo("货代证书编号保存失败!\n\n详细错误信息：\n" + ds_spxx.DBError);
                                            }
                                        }
                                        else
                                        {
                                            this.DBHelp.Rollback(); ;
                                            this.SetErrorInfo("货代证书编号保存失败!\n\n详细错误信息：\n" + ds_spxx.DBError);
                                        }
                                    }
                                    else
                                    {
                                        this.DBHelp.Rollback(); ;
                                        this.SetErrorInfo("货代包装材料保存失败!\n\n详细错误信息：\n" + ds_spxx.DBError);
                                    }
                                }
                                else
                                {
                                    this.DBHelp.Rollback(); ;
                                    this.SetErrorInfo("货代单据单据保存失败!\n\n详细错误信息：\n" + ds_spxx.DBError);
                                }
                                
                            }   else
                            {
                                this.DBHelp.Rollback(); ;
                                this.SetErrorInfo("货代单据附属单证保存失败!\n\n详细错误信息：\n" + ds_spxx.DBError);
                            }
                            
                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("货代单据商品信息保存失败!\n\n详细错误信息：\n" + ds_spxx.DBError);
                        }
                    }
                    else
                    {
                        this.DBHelp.Rollback();;
                        this.SetErrorInfo("货代单据集装箱信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_spxx.Dispose();
                ds_spxx = null;

                ds_zzxx.Dispose();
                ds_zzxx = null;

                ds_fsdz.Dispose();
                ds_fsdz = null;

                ds_sjzs.Dispose();
                ds_sjzs = null;

                ds_sjbzcl.Dispose();
                ds_sjbzcl = null;

                ds_sjsfdj.Dispose();
                ds_sjsfdj = null;
            }
        }


      
    }
}