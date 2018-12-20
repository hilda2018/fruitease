using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;
using System.Security.Cryptography;
using Interfaces;
using System.Text;

namespace QsWebSoft.Service
{
    public class Log_Err : ServiceBase
    {



        //同步生鲜港
        protected void Tbsxg()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_log_err");
            try
            {
                ds_list.SetChanges(dw_list);

                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {

                    ////数据上传生鲜港
                    ////HddzIF serv = new HddzIF();
                    //for (int row = 1; row <= ds_list.RowCount; row++)
                    //{
                    //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                    //    if (zt == "NotModified")
                    //    {

                    //        string tablename = ds_list.GetItemString(row, "tablename");
                    //        string changecols = ds_list.GetItemString(row, "changecols");
                    //        string mainid = ds_list.GetItemString(row, "mainid");
                    //        string parameters = ds_list.GetItemString(row, "parameters");
                    //        string eid = ds_list.GetItemString(row, "eid");
                    //        string strErr;

                    //        Interfaces.GeneralPortal.DataToFreshPort(tablename, changecols, mainid, out strErr, parameters.Split(','), eid);

                    //    };
                    //};


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
                ds_list.Dispose();
                ds_list = null;

            }
        }
    }
}