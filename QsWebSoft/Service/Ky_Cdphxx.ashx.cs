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
    public class Ky_Cdphxx : ServiceBase
    {
        //单据删除
        protected void Delete()
        {
            bool successed = false;

            string cdphbm = Request.Form["cdphbm"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            ds_log.SetChanges(dw_log);
            ds_log.SetTransaction(this.DBHelp.TransAction);
         

            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_kycd Where cdphbm =@cdphbm");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_tpcdxx Where cdphbm=@cdphbm");
            master.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
            cmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
            if (master.ExecuteNonQuery() > 0)
            {
                cmd.ExecuteNonQuery();
                ds_log.UpdateData();
                DBHelp.Commit();
                successed = true;
            }
            else
            {
                DBHelp.Rollback();
            }

            if (successed)
            {
                Response.Write("空运车队配货编号为<" + cdphbm + ">,已被成功删除");

            }
            else
            {
                this.SetErrorInfo("空运车队配货编号为<" + cdphbm + ">,删除失败");
            }
        }


        //同步生鲜港
        protected void Tbsxg()
        {
            //Thread t1 = new Thread(new ThreadStart(delegate
            //{
            string cdphbm = Request.Form["cdphbm"].ToString();
            string strErr;
            //HddzIF serv = new HddzIF();

            Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_kycd", null, cdphbm, out strErr);
            Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_tpcdxx", null, cdphbm, out strErr);

            //}));
            //t1.IsBackground = true;
            //t1.Start();


        }

        //单据保存
        protected void Save()
        {
            string userID = AppService.GetUserID();
            string cdphbm = Request.Form["cdphbm"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            SafeDS ds_master = new SafeDS("dw_ky_cdphxx_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_ky_cdphxx_edit_cmd");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_log.SetChanges(dw_log);
                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                    for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                    {
                        ds_jzxxx.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                if (cdphbm == null || cdphbm == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                        //var year = System.DateTime.Now.ToShortDateString().Substring(0, 8);
                        var year = System.DateTime.Now.ToString("yyyyMMdd");

                        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(cdphbm,4)) from yw_hddz_kycd where substring(cdphbm,1,8) = '" + year.Substring(0, 8) + "'");
                        object value = cmd.ExecuteScalar();
                        if (Convert.IsDBNull(value) || value == null)
                        {
                            cdphbm = year.Substring(0, 8) + "0001";
                        }
                        else
                        {
                            cdphbm = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                        }
                        ds_master.SetItemString(1, "cdphbm", cdphbm);
                    }
                    else
                    {
                        cdphbm = ds_master.GetItemString(1, "cdphbm");
                    }
                }



                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "cdphbm", cdphbm);

                }
                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    if (ds_log.GetItemString(row, "tablename") == "yw_hddz_kycd" || ds_log.GetItemString(row, "tablename") == "yw_hddz_tpcdxx")
                    {
                        ds_log.SetItemString(row, "mainid", cdphbm);
                    }
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                            if (ds_log.UpdateData() == 1)
                            {
                                this.DBHelp.Commit();
                                //把单据号码，传回到客户端
                                Response.Write(cdphbm);
                            }
                            else
                            {
                                this.DBHelp.Rollback(); ;
                                this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                            }
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
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

                ds_log.Dispose();
                ds_log = null;
            }
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_ky_cdphxx_list");
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
                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");

                        //////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        //HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string cdphbm = ds_list.GetItemString(row, "cdphbm");

                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_kycd", null, cdphbm, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("修改传输日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }

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
                ds_log.Dispose();
                ds_log = null;
            }
        }

    }
}