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
 
namespace QsWebSoft.Service
{
  

    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class Hy_Wlgz : ServiceBase
    {
        //单据删除
        protected  void Delete()
        {
            bool successed = false;
            string rwbh = Request.Form["rwbh"].ToString();
            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz_wlgz Where rwbh =@rwbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_wlgz_cmd Where rwbh=@rwbh");
            master.Parameters.Add(new SqlParameter("@rwbh", rwbh));
            cmd.Parameters.Add(new SqlParameter("@rwbh", rwbh)); 
            if (master.ExecuteNonQuery() > 0)
            {
                if (cmd.ExecuteNonQuery() > 0)
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

            if (successed)
            {
                Response.Write("任务跟踪编号为<" + rwbh + ">,已被成功删除");
             
            }
            else
            {
                this.SetErrorInfo("任务跟踪编号为<" + rwbh + ">,删除失败");
            }
        }

        public class wlgzList{
            public wlgzList() 
            { }
            public string rwbh
            { get; set; }
            public string ywbh
            { get; set; }
            public int hddz_cxh
            { get; set; }
        }

        //单据保存
        protected  void Save()
        {
            string userID = AppService.GetUserID();  
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            string dw_rwxz = Request.Form["dw_rwxz"].ToString();
            string dw_lsjl = Request.Form["dw_lsjl"].ToString();
            string ywbh = Request.Form["ywbh"].ToString();
            string cxh = Request.Form["cxh"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            string sj = "Y";
            string sftj = "Y";
            SafeDS ds_master = new SafeDS("dw_wlgz_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_wlgz_edit_cmd");
            SafeDS ds_rwxz = new SafeDS("dw_wlgz_jzxxx");
            SafeDS ds_lsjl = new SafeDS("dw_wlgz_edit_wldz_lsjl");
            SafeDS ds_log = new SafeDS("dw_s_log_list"); 
            try
            {
                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_rwxz.SetChanges(dw_rwxz);
                ds_lsjl.SetChanges(dw_lsjl);
                ds_log.SetChanges(dw_log);

                #region MyRegion
                ////TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
                //if (rwbh == null || rwbh == "" || rwbh == null)
                //{
                //    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                //    {
                //        var year = System.DateTime.Now.ToString("yyyyMMdd");
                //        SqlCommand cmd = this.DBHelp.GetCommand("select max(right(rwbh,4)) from yw_hddz_wlgz where substring(rwbh,1,8) = '" + year.Substring(0, 8) + "' ");
                //        object value = cmd.ExecuteScalar();
                //        if (Convert.IsDBNull(value) || value == null)
                //        {
                //            rwbh = year.Substring(0, 8) + "0001";
                //        }
                //        else
                //        {
                //            rwbh = year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                //        }
                //        ds_master.SetItemString(1, "rwbh", rwbh);
                //    }
                //    else
                //    {
                //        rwbh = ds_master.GetItemString(1, "rwbh");
                //    }
                //}


                //for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                //{
                //    ds_jzxxx.SetItemString(row, "rwbh", rwbh);
                //}

                //if (ds_rwxz.RowCount > 0)
                //{
                //    var gq_sfxz = ds_rwxz.GetItemString(1, "gq_sfxz");
                //    if (gq_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "gq_rwbh", rwbh);
                //    }
                //    else if (gq_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "gq_rwbh", "");
                //    }

                //    var gq_c_sfxz = ds_rwxz.GetItemString(1, "gq_c_sfxz");
                //    if (gq_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "gq_c_rwbh", rwbh);
                //    }
                //    else if (gq_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "gq_c_rwbh", "");
                //    }


                //    var hgcyd_sfxz = ds_rwxz.GetItemString(1, "hgcyd_sfxz");
                //    if (hgcyd_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "hgcyd_rwbh", rwbh);
                //    }
                //    else if (hgcyd_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "hgcyd_rwbh", "");
                //    }

                //    var hgcyd_c_sfxz = ds_rwxz.GetItemString(1, "hgcyd_c_sfxz");
                //    if (hgcyd_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "hgcyd_c_rwbh", rwbh);
                //    }
                //    else if (hgcyd_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "hgcyd_c_rwbh", "");
                //    }

                //    var jyd_sfxz = ds_rwxz.GetItemString(1, "jyd_sfxz");
                //    if (jyd_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "jyd_rwbh", rwbh);
                //    }
                //    else if (jyd_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "jyd_rwbh", "");
                //    }

                //    var jyd_c_sfxz = ds_rwxz.GetItemString(1, "jyd_c_sfxz");
                //    if (jyd_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "jyd_c_rwbh", rwbh);
                //    }
                //    else if (jyd_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "jyd_c_rwbh", "");
                //    }

                //    var zjfscwld_sfxz = ds_rwxz.GetItemString(1, "zjfscwld_sfxz");
                //    if (zjfscwld_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "zjfscwld_rwbh", rwbh);
                //    }
                //    else if (zjfscwld_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "zjfscwld_rwbh", "");
                //    }

                //    var zjfscwld_c_sfxz = ds_rwxz.GetItemString(1, "zjfscwld_c_sfxz");
                //    if (zjfscwld_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "zjfscwld_c_rwbh", rwbh);
                //    }
                //    else if (zjfscwld_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "zjfscwld_c_rwbh", "");
                //    }

                //    var sc_sfxz = ds_rwxz.GetItemString(1, "sc_sfxz");
                //    if (sc_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "sc_rwbh", rwbh);
                //    }
                //    else if (sc_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "sc_rwbh", "");
                //    }

                //    var sc_c_sfxz = ds_rwxz.GetItemString(1, "sc_c_sfxz");
                //    if (sc_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "sc_c_rwbh", rwbh);
                //    }
                //    else if (sc_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "sc_c_rwbh", "");
                //    }

                //    var jschfscwld_sfxz = ds_rwxz.GetItemString(1, "jschfscwld_sfxz");
                //    if (jschfscwld_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "jschfscwld_rwbh", rwbh);
                //    }
                //    else if (jschfscwld_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "jschfscwld_rwbh", "");
                //    }

                //    var jschfscwld_c_sfxz = ds_rwxz.GetItemString(1, "jschfscwld_c_sfxz");
                //    if (jschfscwld_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "jschfscwld_c_rwbh", rwbh);
                //    }
                //    else if (jschfscwld_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "jschfscwld_c_rwbh", "");
                //    }

                //    var fscwld3_sfxz = ds_rwxz.GetItemString(1, "fscwld3_sfxz");
                //    if (fscwld3_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld3_rwbh", rwbh);
                //    }
                //    else if (fscwld3_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld3_rwbh", "");
                //    }

                //    var fscwld3_c_sfxz = ds_rwxz.GetItemString(1, "fscwld3_c_sfxz");
                //    if (fscwld3_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld3_c_rwbh", rwbh);
                //    }
                //    else if (fscwld3_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld3_c_rwbh", "");
                //    }

                //    var fscwld4_sfxz = ds_rwxz.GetItemString(1, "fscwld4_sfxz");
                //    if (fscwld4_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld4_rwbh", rwbh);
                //    }
                //    else if (fscwld4_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld4_rwbh", "");
                //    }

                //    var fscwld4_c_sfxz = ds_rwxz.GetItemString(1, "fscwld4_c_sfxz");
                //    if (fscwld4_c_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld4_c_rwbh", rwbh);
                //    }
                //    else if (fscwld4_c_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "fscwld4_c_rwbh", "");
                //    }

                //    var dc_sfxz = ds_rwxz.GetItemString(1, "dc_sfxz");
                //    if (dc_sfxz == "Y")
                //    {
                //        ds_rwxz.SetItemString(1, "dc_rwbh", rwbh);
                //    }
                //    else if (dc_sfxz == "N")
                //    {
                //        ds_rwxz.SetItemString(1, "dc_rwbh", "");
                //    }
                //}
                #endregion

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_rwxz.SetTransaction(this.DBHelp.TransAction);
                ds_lsjl.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {
                    ds_lsjl.UpdateData();
                    ds_jzxxx.UpdateData();
                    

                        if (ds_rwxz.UpdateData() == 1)
                        {                             

                                this.DBHelp.Commit();
                                //把单据号码，传回到客户端


                                //if (cmd.ExecuteNonQuery() > 0){
                                if (ds_log.UpdateData() == 1)
                                {
                                    this.DBHelp.Commit();
                                    //把单据号码，传回到客户端
 
                                }
                                else
                                {
                                    DBHelp.Rollback();
                                    this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                                }



                                DBHelp dbHelp = new DBHelp();
                                SqlCommand cmd = new SqlCommand();
                                var userid = AppService.GetUserID();
                                try
                                {
                                    #region MyRegion
                                    //StringBuilder str = new StringBuilder();
                                    //str.Append("update yw_hddz_jzxxx ");
                                    //str.Append("set  cgqsj = case when  (select max(jrdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and  hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '港区' ) is null then cgqsj else (select max(jrdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and  hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '港区' ) end ,");
                                    //str.Append("djydsj = case when (select max(jrdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and  hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '检疫点' ) is null then djydsj else (select max(jrdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and  hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '检疫点' ) end,");
                                    //str.Append("tgjysj = case when (select max(cdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and   hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '检疫点' ) is null then tgjysj else (select max(cdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and   hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '检疫点' ) end,");
                                    //str.Append("cscsj = case when (select max(cdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and   hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '市场' ) is null then cscsj else (select max(cdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and   hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '市场' ) end ,");
                                    //str.Append("hdcsj =  case when (select max(jrdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and  hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '堆场') is null then hdcsj else (select max(jrdzwlsj) from Yw_hddz_wlgz_cmd where ywbh = yw_hddz_jzxxx.ywbh and  hddz_cxh = yw_hddz_jzxxx.cxh and rwmc = '堆场') end ");
                                    //str.Append("from yw_hddz_jzxxx ");
                                    //str.Append("where  ywbh = @ywbh and cxh = @cxh ;");
                                    #endregion
                                    cmd = dbHelp.GetCommand("p_hywlgz");
                                    cmd.CommandType = CommandType.StoredProcedure;
                                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                                    cmd.ExecuteNonQuery();

                                    for (int i = 1; i <= ds_master.RowCount; i++)
                                    {
                                        sj = "Y";
                                        string dzwlbh = ds_master.GetItemString(i, "dzwlbh");
                                        string dzwlbh_old = ds_master.GetItemString(i, "dzwlbh_old");
                                        string rwbh = ds_master.GetItemString(i, "rwbh");
                                        string sfybd = ds_master.GetItemString(i, "sfybd");
                                        string cph = ds_master.GetItemString(i, "cph");
                                        string cph_old = ds_master.GetItemString(i, "cph_old");
                                        DateTime? rwkssj = ds_master.GetItemDateTime(i, "rwkssj");
                                        ds_jzxxx.SetFilter("rwbh = '" + rwbh + "'");
                                        ds_jzxxx.Filter();
                                        for (int j = 1; j <= ds_jzxxx.RowCount; j++)
                                        {
                                            string dz_xx = ds_jzxxx.GetItemString(j, "dz_xx");
                                            string jd = ds_jzxxx.GetItemString(j, "jd");
                                            string wd = ds_jzxxx.GetItemString(j, "wd");
                                            string fw = ds_jzxxx.GetItemString(j, "fw");
                                            int wllx = ds_jzxxx.GetItemInt32(j, "wllx");
                                            string points = ds_jzxxx.GetItemString(j, "points");
                                            DateTime rq_null = DateTime.Parse("1900/1/1 0:00:00");
                                            string aa = rwkssj.ToString();

                                            if (rwkssj == null || aa == "1900/1/1 0:00:00" )
                                            {
                                                sj = "N";
                                            }
                                        }
                                        if (sj == "Y" && (sfybd == "Y" || sfybd == null) && cph.Length > 0)
                                        {
                                            IFView.FenceHandler fenceHandler = new IFView.FenceHandler();
                                            string strerr = string.Empty;
                                            bool flag = fenceHandler.AddLogisticsMonitoring(dzwlbh, out strerr);
                                           

                                            if (strerr == null)
                                            {
                                                strerr = "";
                                            }
                                            DBHelp.BeginTransAction();
                                            SqlCommand cmd_wlgz = DBHelp.GetCommand("insert into yw_hddz_wlgz_bd (rwbh,dqsj,strerr,cph,cph_old) values(@rwbh,getdate(),@strerr,@cph,@cph_old)");
                                            cmd_wlgz.Parameters.Add(new SqlParameter("@rwbh", rwbh));
                                            cmd_wlgz.Parameters.Add(new SqlParameter("@strerr", strerr));
                                            cmd_wlgz.Parameters.Add(new SqlParameter("@cph", cph));
                                            cmd_wlgz.Parameters.Add(new SqlParameter("@cph_old", cph_old));
                                            if (cmd_wlgz.ExecuteNonQuery() > 0)
                                            {
                                                DBHelp.Commit();
                                            }
                                            else
                                            {
                                                DBHelp.Rollback();  
                                            }

                                            //if (flag == false)
                                            //{
                                                
                                            //    this.SetErrorInfo("调用北斗地图失败原因：" + strerr);
                                                
                                            //}

                                            //强制结束老的任务

                                            if (cph != cph_old && cph_old != "" && cph_old != null)
                                            {
                                                IFView.FenceHandler fenceHandler_zqjs = new IFView.FenceHandler();
                                                string strerr_qzjs = string.Empty;
                                                bool flag_qzjs = fenceHandler_zqjs.stopTask(dzwlbh_old, out strerr);
                                                if (strerr_qzjs == null)
                                                {
                                                    strerr_qzjs = "";
                                                }
                                                DBHelp.BeginTransAction();
                                                SqlCommand cmd_wlgz_qzjs = DBHelp.GetCommand("insert into yw_hddz_wlgz_bd (rwbh,dqsj,strerr,cph,cph_old) values(@dzwlbh_old,getdate(),@strerr_qzjs,@cph,@cph_old)");
                                                cmd_wlgz_qzjs.Parameters.Add(new SqlParameter("@dzwlbh_old", "删除" + dzwlbh_old));
                                                cmd_wlgz_qzjs.Parameters.Add(new SqlParameter("@strerr_qzjs", strerr_qzjs));
                                                cmd_wlgz_qzjs.Parameters.Add(new SqlParameter("@cph", cph));
                                                cmd_wlgz_qzjs.Parameters.Add(new SqlParameter("@cph_old", cph_old));
                                                if (cmd_wlgz_qzjs.ExecuteNonQuery() > 0)
                                                {
                                                    DBHelp.Commit();
                                                }
                                                else
                                                {
                                                    DBHelp.Rollback();
                                                }
                                            }


                                        }

                                    }

                              
 
                                }

                                catch (Exception ex)
                                {
                                    this.SetErrorInfo(ex.Message);

                                }
                                finally
                                {
                                    dbHelp.Close();
                                    dbHelp = null;
                                }

                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("物流跟踪任务选择保存失败!\n\n详细错误信息：\n" + ds_rwxz.DBError);
                        }
                     
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("物流跟踪任务保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

                ds_rwxz.Dispose();
                ds_rwxz = null;

                ds_lsjl.Dispose();
                ds_lsjl = null;

                ds_log.Dispose();
                ds_log = null;
            }
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_wlgz_list");
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
                    this.SetErrorInfo("物流任务跟踪信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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