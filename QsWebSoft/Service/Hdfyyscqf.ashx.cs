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
    public class Hdfyyscqf : ServiceBase
    {

        

        //#region 列表存盘
        protected void YscqfListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_hdfyyscqfy_list");
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
                    ////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                        //HddzIF serv = new HddzIF();
                        for (int row = 1; row <= ds_list.RowCount; row++)
                        {
                            string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                            if (zt == "NotModified")
                            {
                                string ywbh = ds_list.GetItemString(row, "ywbh");
                                int cxh = ds_list.GetItemInt32(row, "jzxxx_cxh");
                                string zdmc = "yscqfqrrq";

                                string strErr;
                                Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_jzxxx", zdmc, ywbh, out strErr, new string[] { cxh.ToString() });
                            };
                        };
                    //}));
                    //t1.IsBackground = true;
                    //t1.Start();

                    

                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("应收超期费保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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