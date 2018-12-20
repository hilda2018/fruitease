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
using Interfaces;
using System.Xml;
//using System.Threading;


namespace QsWebSoft.Service
{
  

    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class Kycd_Thwljh : ServiceBase
    {

        

        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_kycd_thwljh_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);

                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {

                        this.DBHelp.Commit();

                        //////数据上传生鲜港
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string cdphbm = ds_list.GetItemString(row, "cdphbm");
                        //        string zdmc = "cgqsj";
                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_kycd", zdmc, cdphbm, out strErr);

                        //    };
                        //};

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("提货物流计划信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

                ds_log.Dispose();
                ds_log = null;
            }
        }

       
      
    }

}