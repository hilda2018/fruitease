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
    /// Sdgl 的摘要说明
    /// </summary>
    public class Sdgl :  ServiceBase
    {


 

     
        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();
            string sqdbh = string.Empty; 

            string master = Request.Form["dw_Master"].ToString();
            string detail = Request.Form["dw_Detail"].ToString();

            SafeDS ds_m = new SafeDS("dw_sd_master");
            SafeDS ds_d = new SafeDS("dw_sdmx_bgfp");

            try
            {
                ds_m.SetChanges(master);
                ds_d.SetChanges(detail);

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。

              
                var sdbh = ds_m.GetItemString(1, "sdbh");
               

                for (int row = 1; row <= ds_d.RowCount; row++)
                {
                    ds_d.SetItemString(row, "sdbh", sdbh);
                    ds_d.SetItemDouble(row, "cxh", row);
                }


                ds_m.SetTransaction(this.DBHelp.TransAction);
                ds_d.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_m.UpdateData() == 1)
                {
                    if (ds_d.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();

                        //把单据号码，传回到客户端
                        Response.Write(sdbh);
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("单据明细保存失败!\n\n详细错误信息：\n" + ds_d.DBError);
                 }
                }
                else
                {
                   this.DBHelp.Rollback();
                   this.SetErrorInfo("单据保存失败!\n\n详细错误信息：\n" + ds_m.DBError + "  " + ds_m.LastError);
                }
            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message); 

            }
            finally
            {
                ds_m.Dispose();
                ds_m = null;

                ds_d.Dispose();
                ds_d = null; 
            }
        }
    }
}