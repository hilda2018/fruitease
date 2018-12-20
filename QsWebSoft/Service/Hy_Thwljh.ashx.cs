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
    public class Hy_Thwljh : ServiceBase
    {

        //同步生鲜港
        protected void Tbsxg()
        {
            //////数据上传生鲜港
            //Thread t1 = new Thread(new ThreadStart(delegate
            //{
                //HddzIF serv = new HddzIF();
                //string ywbh = Request.Form["ywbh"].ToString();
                //string hddz_cxh = Request.Form["hddz_cxh"].ToString();
                //string zdmc_wldz = Request.Form["zdmc_wldz"].ToString();
                //string strErr;
                //if (zdmc_wldz == "Y")
                //{
                //    Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_wldz", null, ywbh, out strErr, new string[] { hddz_cxh.ToString() });
                //}
        
            //}));
            //t1.IsBackground = true;
            //t1.Start();

                 

             
        }


        //单据保存
        protected void Save()
        {
            string userID = AppService.GetUserID();
            var operation = Request.Form["operation"].ToString();
            string ywbh = Request.Form["ywbh"].ToString();
            Int32 cxh = int.Parse(Request.Form["cxh"].ToString());
            string dw_master = Request.Form["dw_master"].ToString();
            SafeDS ds_master = new SafeDS("dw_hy_thwljh_edit");
            string dw_cmd = Request.Form["dw_cmd"].ToString();
            SafeDS ds_cmd = new SafeDS("dw_wlgz_edit_wldz");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_master.SetChanges(dw_master);
                ds_cmd.SetChanges(dw_cmd);
                ds_log.SetChanges(dw_log);

                for (int row = 1; row <= ds_cmd.RowCount; row++)
                {
                    ds_cmd.SetItemString(row, "ywbh", ywbh);
                    ds_cmd.SetItemDouble(row, "hddz_cxh", cxh);
                    ds_cmd.SetItemDouble(row, "cxh", row);

                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_cmd.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_cmd.UpdateData() == 1)
                    {
                        if (ds_log.UpdateData() == 1)
                        {
                            this.DBHelp.Commit();
                            //把单据号码，传回到客户端
                        }
                        else {
                            this.DBHelp.Rollback();
                            this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError + "  " + ds_log.LastError);
                        }
                    }
                    else {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("提货物流计划保存失败!\n\n详细错误信息：\n" + ds_cmd.DBError + "  " + ds_cmd.LastError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("提货物流计划保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_log.Dispose();
                ds_log = null;
            }
        }

        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_thwljh_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            string dw_htjhthsj = Request.Form["dw_htjhthsj"].ToString();
            SafeDS ds_htjhthsj = new SafeDS("dw_hddz_htjhthsj_lrsj");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);
                ds_htjhthsj.SetChanges(dw_htjhthsj);

                //for (int row = 1; row <= ds_list.RowCount; row++)
                //{
                //    var ywbh1 = ds_list.GetItemString(row, "ywbh");
                //    var ywbh2=ds_htjhthsj.GetItemString(row,"ywbh");
                //    var cxh1=ds_list.GetItemDecimal(row,"cxh");
                //    var cxh2=ds_htjhthsj.GetItemDecimal(row,"hddz_cxh");
                //    if (ywbh1==ywbh2&&cxh1==cxh2)
                //    {
                //        var htjhthsj_sjd = ds_list.GetItemString(row, "jzxxx_htjhthsj_sjd");
                //        ds_htjhthsj.SetItemString(row, "htjhthsj_sjd", htjhthsj_sjd);
                //    }
                    
                //}

                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds_htjhthsj.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    if (ds_htjhthsj.UpdateData()==1)
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
                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        int cxh = ds_list.GetItemInt32(row, "cxh");
                        //        DateTime htjhthsj = new DateTime(1999, 01, 01, 00, 00, 00);
                        //        htjhthsj = ds_list.GetItemDateTime(row, "jzxxx_htjhthsj");
                        //        string zdmc = "htjhthsj";
                        //        DateTime date1 = new DateTime(2000, 01, 01, 00, 00, 00);
                        //        if (htjhthsj > date1)
                        //        {
                        //        string strErr;
                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_jzxxx", zdmc, ywbh, out strErr, new string[] { cxh.ToString() });
                        //        }
                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();


                    }
                    else {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("修改传输日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("提货物流计划信息保存失败!\n\n详细错误信息：\n" + ds_htjhthsj.DBError);
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
                ds_htjhthsj.Dispose();
                ds_htjhthsj = null;
            }
        }

        //#region 码头业务处理列表存盘
        protected void MtywclListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_mtywcl_list");
            //string dw_log = Request.Form["dw_log"].ToString();
            //SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                //ds_log.SetChanges(dw_log);

                ds_list.SetTransaction(this.DBHelp.TransAction);
                //ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
               // if (ds_list.e)   
                {
                    //if (ds_log.UpdateData()==1)
                    //{


                        this.DBHelp.Commit();

                        //////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        //HddzIF serv = new HddzIF();
                        for (int row = 1; row <= ds_list.RowCount; row++)
                        {
                            string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                            if (zt == "NotModified")
                            {
                                string ywbh = ds_list.GetItemString(row, "ywbh");
                                int cxh = ds_list.GetItemInt32(row, "cxh");
                                string zdmc = "fxgsjc,fxsj";
                                string strErr;
                                Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_jzxxx", zdmc, ywbh, out strErr, new string[] { cxh.ToString() });

                                DBHelp.Commit();

                                DBHelp.BeginTransAction();
                                SqlCommand cmd = DBHelp.GetCommand("select count(*),rwbh= isnull(max(Yw_hddz_wlgz_cmd.rwbh),''),dzwlbh= isnull(max(Yw_hddz_wlgz.dzwlbh),'') from Yw_hddz_wlgz,Yw_hddz_wlgz_cmd,yw_hddz_jzxxx Where Yw_hddz_wlgz.rwbh = Yw_hddz_wlgz_cmd.rwbh and Yw_hddz_wlgz_cmd.ywbh = yw_hddz_jzxxx.ywbh  and  Yw_hddz_wlgz_cmd.hddz_cxh = yw_hddz_jzxxx.cxh  and Yw_hddz_wlgz_cmd.ywbh=@ywbh and Yw_hddz_wlgz_cmd.hddz_cxh = @cxh and len(yw_hddz_jzxxx.fxdcjc) > 0 and Yw_hddz_wlgz_cmd.rwmc = '堆场' and (jd is null and points is null)");

                                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                                cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                                SqlDataReader rs = cmd.ExecuteReader();
                                if (rs.Read())
                                {
                                    int num = rs.GetInt32(0);
                                    string rwbh = rs.GetString(1);
                                    string dzwlbh = rs.GetString(2);
                                    rs.Close();
                                    if (num > 0)
                                    {
                                        SqlCommand cmd_update = DBHelp.GetCommand(" update  Yw_hddz_wlgz_cmd set Yw_hddz_wlgz_cmd.jd = yw_wldw_gnkh_shdz.jd, Yw_hddz_wlgz_cmd.wd = yw_wldw_gnkh_shdz.wd, Yw_hddz_wlgz_cmd.fw = yw_wldw_gnkh_shdz.fw, Yw_hddz_wlgz_cmd.wllx = yw_wldw_gnkh_shdz.type,Yw_hddz_wlgz_cmd.points = yw_wldw_gnkh_shdz.points from Yw_hddz_wlgz_cmd,yw_hddz_jzxxx ,yw_wldw_gnkh_shdz,yw_wldw Where Yw_hddz_wlgz_cmd.ywbh = yw_hddz_jzxxx.ywbh  and  Yw_hddz_wlgz_cmd.hddz_cxh = yw_hddz_jzxxx.cxh  and   yw_wldw_gnkh_shdz.yw_khbm = yw_wldw.yw_khbm  and yw_wldw.khjc = yw_hddz_jzxxx.fxdcjc and Yw_hddz_wlgz_cmd.ywbh=@ywbh and Yw_hddz_wlgz_cmd.hddz_cxh = @cxh and len(yw_hddz_jzxxx.fxdcjc) > 0 and Yw_hddz_wlgz_cmd.rwmc = '堆场' and (Yw_hddz_wlgz_cmd.jd is null and Yw_hddz_wlgz_cmd.points is null) ");
                                        cmd_update.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                                        cmd_update.Parameters.Add(new SqlParameter("@cxh", cxh));
                                        if (cmd_update.ExecuteNonQuery() > 0)
                                        { 
                                             DBHelp.Commit();
                                            
                                            

                                            IFView.FenceHandler fenceHandler = new IFView.FenceHandler();
                                            string strerr = string.Empty;
                                            bool flag = fenceHandler.AddLogisticsMonitoring(dzwlbh, out strerr);


                                            if (strerr == null)
                                            {
                                                strerr = "";
                                            }
                                            DBHelp.BeginTransAction();
                                            SqlCommand cmd_wlgz = DBHelp.GetCommand("insert into yw_hddz_wlgz_bd (rwbh,dqsj,strerr) values(@rwbh,getdate(),@strerr)");
                                            cmd_wlgz.Parameters.Add(new SqlParameter("@rwbh", rwbh));
                                            cmd_wlgz.Parameters.Add(new SqlParameter("@strerr", strerr));
                                            if (cmd_wlgz.ExecuteNonQuery() > 0)
                                            {
                                                DBHelp.Commit();
                                            }
                                            else
                                            {
                                                DBHelp.Rollback();
                                            }
                                        }else                                      
                                            {
                                                DBHelp.Rollback();
                                            }
                                    }
                                    
                                }
                                else
                                {
                                    DBHelp.Rollback();
                                }


                                
                            };

                           

                            

                        };
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    //}
                    //else {
                    //    this.DBHelp.Rollback();
                    //    this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n"+ds_log.DBError);
                    //}
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("码头业务处理保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
                //ds_log.Dispose();
                //ds_log = null;
            }
        }

        //#region 码头司机任务列表存盘
        protected void MtsjrwListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_mtsjrw_list");
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
                    this.SetErrorInfo("码头司机任务保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 出港区时间列表存盘
        protected void CgqsjListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_cgqsj_list");
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
                    //////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                        //HddzIF serv = new HddzIF();
                        for (int row = 1; row <= ds_list.RowCount; row++)
                        {
                            string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                            if (zt == "NotModified")
                            {
                                string ywbh = ds_list.GetItemString(row, "ywbh");
                                int cxh = ds_list.GetItemInt32(row, "cxh");
                                string zdmc = "cgqsj";
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
                    this.SetErrorInfo("出港区时间保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 海关查验点列表存盘
        protected void HgcydListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_hgcyd_list");
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
                    this.SetErrorInfo("海关查验点保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 检疫点列表存盘
        protected void JydListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_jyd_list");
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
                    //////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                        //HddzIF serv = new HddzIF();
                        for (int row = 1; row <= ds_list.RowCount; row++)
                        {
                            string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                            if (zt == "NotModified")
                            {
                                string ywbh = ds_list.GetItemString(row, "ywbh");
                                int cxh = ds_list.GetItemInt32(row, "cxh");
                                string zdmc = "djydsj,tgjysj,jycydzt,kghcl,ssys";
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
                    this.SetErrorInfo("检疫点保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 市场列表存盘
        protected void ScListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_sc_list");
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
                    this.SetErrorInfo("市场保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 司机上传照片备注存盘
        protected void SjsczpBzSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_ohwl_sczp_list");
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
                    this.SetErrorInfo("保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 堆场列表存盘
        protected void DcListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_dc_list");
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
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("传输错误日志信息保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("市场保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 非市场物流列表存盘
        protected void FscwlListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_fscwl_list");
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
                    this.SetErrorInfo("市场保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 冷处理列表存盘
        protected void LclglListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_lclgl_list");
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
                    this.SetErrorInfo("市场保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 物流查询列表存盘
        protected void WlcxListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_wlcx_list");
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
                    this.SetErrorInfo("市场保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 设备交接单列表存盘
        protected void SbjjdglListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_sbjjdgl_list");
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
                    this.SetErrorInfo("设备交接单管理保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 船公司超期费收费标准库列表存盘
        protected void CgscqfsfbzListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_cgscqfsfbz_list");
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
                    this.SetErrorInfo("船公司超期费收费标准库保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 超期费管理列表存盘
        protected void CqfglListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hy_cqfgl_list");
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
                    this.SetErrorInfo("超期费管理保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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