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
    public class HddzYtjk2018 :  ServiceBase
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
            string dw_dzxx = Request.Form["dw_dzxx"].ToString();
            string dw_hwxx = Request.Form["dw_hwxx"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            string dw_hgfsdz = Request.Form["dw_hgfsdz"].ToString();
            string dw_jyjyxydz = Request.Form["dw_jyjyxydz"].ToString();
            string dw_qyzz = Request.Form["dw_qyzz"].ToString();
            string dw_syrxx = Request.Form["dw_syrxx"].ToString();
            string dw_sjsfdj = Request.Form["dw_sjsfdj"].ToString();
            string dw_sjzs = Request.Form["dw_sjzs"].ToString();
            string dw_sjbzcl = Request.Form["dw_sjbzcl"].ToString();
           

            SafeDS ds_dzxx = new SafeDS("dw_hddz_ytjk_edit2018");
            SafeDS ds_hwxx = new SafeDS("dw_hddz_ytjk_edit2018_spxx");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_ytjk_edit2018_jzxxx");
            SafeDS ds_hgfsdz = new SafeDS("dw_hddz_ytjk_edit2018_fsdz");
            SafeDS ds_jyjyxydz = new SafeDS("dw_hddz_ytjk_edit2018_jyjyxydz");
            SafeDS ds_qyzz = new SafeDS("dw_hddz_ytjk_edit2018_qyzz");
            SafeDS ds_syrxx = new SafeDS("dw_hddz_ytjk_edit2018_syrxx");
            SafeDS ds_sjsfdj = new SafeDS("dw_hddz_ytjk_edit2018_sjsfdj");
            SafeDS ds_sjzs = new SafeDS("dw_hddz_ytjk_edit2018_spxx_sjzs");
            SafeDS ds_sjbzcl = new SafeDS("dw_hddz_ytjk_edit2018_spxx_sjbzcl");

            

            try
            {
               
                ds_dzxx.SetChanges(dw_dzxx);
                ds_hwxx.SetChanges(dw_hwxx);
                ds_jzxxx.SetChanges(dw_jzxxx);                
                ds_hgfsdz.SetChanges(dw_hgfsdz);
                ds_jyjyxydz.SetChanges(dw_jyjyxydz);
                ds_qyzz.SetChanges(dw_qyzz);
                ds_syrxx.SetChanges(dw_syrxx);
                ds_sjsfdj.SetChanges(dw_sjsfdj);
                ds_sjzs.SetChanges(dw_sjzs);
                ds_sjbzcl.SetChanges(dw_sjbzcl);
                if (operation == "copy" || operation == "modify")
                {
                    ds_dzxx.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_hwxx.RowCount; row++)
                    {
                        ds_hwxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_hgfsdz.RowCount; row++)
                    {
                        ds_hgfsdz.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_jyjyxydz.RowCount; row++)
                    {
                        ds_jyjyxydz.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_qyzz.RowCount; row++)
                    {
                        ds_qyzz.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }

                    for (int row = 1; row <= ds_syrxx.RowCount; row++)
                    {
                        ds_syrxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_sjsfdj.RowCount; row++)
                    {
                        ds_sjsfdj.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_sjzs.RowCount; row++)
                    {
                        ds_sjzs.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_sjbzcl.RowCount; row++)
                    {
                        ds_sjbzcl.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }


                };
              
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
              
                if (ywbh == null || ywbh == "")
                {
                    if (ds_dzxx.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {

                        var Xj = "";
                        if (ds_hwxx.RowCount > 0) { 
                           Xj = ds_hwxx.GetItemString(1, "xj");
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
                   
                        ds_dzxx.SetItemString(1, "ywbh", ywbh);
                    }
                    else
                    {
                        ywbh = ds_dzxx.GetItemString(1, "ywbh");
                    }
                }

                var hth = ds_dzxx.GetItemString(1, "hth");

                if (hth == "" || hth == null) 
                {
                    ds_dzxx.SetItem(1, "hth", ywbh);
                }

                for (int row = 1; row <= ds_hwxx.RowCount; row++)
                {
                    ds_hwxx.SetItemString(row, "ywbh", ywbh);
                    ds_hwxx.SetItemDouble(row, "cxh", row);

                }

                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "ywbh", ywbh);
                    ds_jzxxx.SetItemDouble(row, "cxh", row);

                }

                for (int row = 1; row <= ds_hgfsdz.RowCount; row++)
                {
                    ds_hgfsdz.SetItemString(row, "ywbh", ywbh);
                    ds_hgfsdz.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_jyjyxydz.RowCount; row++)
                {
                    ds_jyjyxydz.SetItemString(row, "ywbh", ywbh);
                    ds_jyjyxydz.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_qyzz.RowCount; row++)
                {
                    ds_qyzz.SetItemString(row, "ywbh", ywbh);
                    ds_qyzz.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_syrxx.RowCount; row++)
                {
                    ds_syrxx.SetItemString(row, "ywbh", ywbh);
                    ds_syrxx.SetItemDouble(row, "cxh", row);
                }

                for (int row = 1; row <= ds_sjsfdj.RowCount; row++)
                {
                    ds_sjsfdj.SetItemString(row, "ywbh", ywbh);
                    ds_sjsfdj.SetItemDouble(row, "cxh", row);
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
                ds_dzxx.SetTransaction(this.DBHelp.TransAction);
                ds_hwxx.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_hgfsdz.SetTransaction(this.DBHelp.TransAction);
                ds_jyjyxydz.SetTransaction(this.DBHelp.TransAction);
                ds_qyzz.SetTransaction(this.DBHelp.TransAction);
                ds_syrxx.SetTransaction(this.DBHelp.TransAction);
                ds_sjsfdj.SetTransaction(this.DBHelp.TransAction);
                ds_sjzs.SetTransaction(this.DBHelp.TransAction);
                ds_sjbzcl.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_dzxx.UpdateData() == 1)
                {
                    if (ds_hwxx.UpdateData() == 1)
                    {                        
                        if (ds_jzxxx.UpdateData() == 1)
                        {
                            if (ds_hgfsdz.UpdateData() == 1) 
                            {
                                if (ds_jyjyxydz.UpdateData() == 1)
                                {
                                    if (ds_qyzz.UpdateData() == 1)
                                    {
                                        if (ds_syrxx.UpdateData() == 1)
                                        {
                                            if (ds_sjsfdj.UpdateData() == 1)
                                            {
                                                if (ds_sjzs.UpdateData() == 1)
                                                {
                                                    if (ds_sjbzcl.UpdateData() == 1)
                                                    {
                                                        this.DBHelp.Commit();
                                                        //把单据号码，传回到客户端
                                                        Response.Write(ywbh);
                                                    }
                                                    else
                                                    {
                                                        this.DBHelp.Rollback(); ;
                                                        this.SetErrorInfo("包装材料保存失败!\n\n详细错误信息：\n" + ds_syrxx.DBError);

                                                    }
                                                }
                                                else
                                                {
                                                    this.DBHelp.Rollback(); ;
                                                    this.SetErrorInfo("证书保存失败!\n\n详细错误信息：\n" + ds_syrxx.DBError);

                                                }
                                            }
                                            else
                                            {
                                                this.DBHelp.Rollback(); ;
                                                this.SetErrorInfo("随附单据保存失败!\n\n详细错误信息：\n" + ds_syrxx.DBError);

                                            }
                                        }
                                        else {
                                            this.DBHelp.Rollback(); ;
                                            this.SetErrorInfo("使用人信息保存失败!\n\n详细错误信息：\n" + ds_syrxx.DBError);
                                  
                                        }
                                    }
                                    else {
                                        this.DBHelp.Rollback(); ;
                                        this.SetErrorInfo("企业资质保存失败!\n\n详细错误信息：\n" + ds_qyzz.DBError);
                                    }
                                }
                                else {
                                    this.DBHelp.Rollback(); ;
                                    this.SetErrorInfo("检验检疫要求单证保存失败!\n\n详细错误信息：\n" + ds_jyjyxydz.DBError);
                                }
                            }
                            else
                            {
                                this.DBHelp.Rollback(); ;
                                this.SetErrorInfo("海关附随单证保存失败!\n\n详细错误信息：\n" + ds_hgfsdz.DBError);
                            }
                            
                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("集装箱信息保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError);
                        }
                    }
                    else
                    {
                        this.DBHelp.Rollback();;
                        this.SetErrorInfo("货物信息保存失败!\n\n详细错误信息：\n" + ds_hwxx.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("单证信息失败!\n\n详细错误信息：\n" + ds_dzxx.DBError + "  " + ds_dzxx.LastError);
                }
            }

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_dzxx.Dispose();
                ds_dzxx = null;

                ds_hwxx.Dispose();
                ds_hwxx = null;

                ds_jzxxx.Dispose();
                ds_jzxxx = null;

                ds_hgfsdz.Dispose();
                ds_hgfsdz = null;

                ds_jyjyxydz.Dispose();
                ds_jyjyxydz = null;

                ds_qyzz.Dispose();
                ds_qyzz = null;

                ds_syrxx.Dispose();
                ds_syrxx = null;

                ds_sjsfdj.Dispose();
                ds_sjsfdj = null;

                ds_sjzs.Dispose();
                ds_sjzs = null;

                ds_sjbzcl.Dispose();
                ds_sjbzcl = null;

            }
        }


      
    }
}