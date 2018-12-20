using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace QsWebSoft.Service
{
    public class Bgtj : ServiceBase
    {
       

        
        public void Save()
        {
            string master = Request.Form["dw_Master"].ToString();

            SafeDS ds = new SafeDS("dw_bgtj_list");
            try
            {
                ds.SetChanges(master);

                ds.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    this.SetSuccessedInfo("数据保存成功");
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("数据保存失败!");
                    return;
                }
            }

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds.Dispose();
                ds = null;

                
            }
            
            
        }



        //#region 货代单证备注存盘
        protected void BeizhuSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_wlgz_bdtj_ycyy");
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
                    this.SetErrorInfo("异常原因保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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