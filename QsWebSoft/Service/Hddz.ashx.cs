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
    public class Hddz : ServiceBase
    {



        //单据删除
        protected void Delete()
        {
            bool successed = false;

            string ywbh = Request.Form["ywbh"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            ds_log.SetChanges(dw_log);
            ds_log.SetTransaction(this.DBHelp.TransAction);
            DBHelp.BeginTransAction();
            SqlCommand master = DBHelp.GetCommand("delete from yw_hddz Where ywbh =@ywbh");
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_jzxxx Where ywbh=@ywbh");
            SqlCommand cmd_bg = DBHelp.GetCommand("delete from yw_hddz_spxx Where ywbh=@ywbh");
            SqlCommand cmd_zzxx = DBHelp.GetCommand("delete from yw_hddz_zzxx Where ywbh=@ywbh");
            SqlCommand cmd_fsdz = DBHelp.GetCommand("delete from yw_hddz_fsdz Where ywbh=@ywbh");
            SqlCommand cmd_sjzsbh = DBHelp.GetCommand("delete from yw_hddz_sjzsbh Where ywbh=@ywbh");
            SqlCommand cmd_sjzs = DBHelp.GetCommand("delete from yw_hddz_spxx_sjzs Where ywbh=@ywbh");
            SqlCommand cmd_sjbzcl = DBHelp.GetCommand("delete from yw_hddz_spxx_sjbzcl Where ywbh=@ywbh");
            SqlCommand cmd_sjsfdj = DBHelp.GetCommand("delete from yw_hddz_sjsfdj Where ywbh=@ywbh");
            SqlCommand cmd_dzqk = DBHelp.GetCommand("delete from yw_hddz_dzyq Where ywbh=@ywbh");
            SqlCommand cmd_dzqk_cmd = DBHelp.GetCommand("delete from yw_hddz_dzyq_cmd Where ywbh=@ywbh");
            SqlCommand cmd_ocrwjsb = DBHelp.GetCommand("delete from yw_hddz_ocrwjsb Where ywbh=@ywbh");
            SqlCommand cmd_sxgsjjl = DBHelp.GetCommand("delete from yw_hddz_sxgsjjl Where ywbh=@ywbh");
            master.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_bg.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_zzxx.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_sjzsbh.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_fsdz.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_sjzs.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_sjbzcl.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_sjsfdj.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_dzqk.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_dzqk_cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_ocrwjsb.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_sxgsjjl.Parameters.Add(new SqlParameter("@ywbh", ywbh));

            if (master.ExecuteNonQuery() > 0)
            {
                cmd.ExecuteNonQuery();
                cmd_bg.ExecuteNonQuery();
                cmd_zzxx.ExecuteNonQuery();
                cmd_fsdz.ExecuteNonQuery();
                cmd_sjzsbh.ExecuteNonQuery();
                cmd_sjzs.ExecuteNonQuery();
                cmd_sjbzcl.ExecuteNonQuery();
                cmd_sjsfdj.ExecuteNonQuery();
                cmd_dzqk.ExecuteNonQuery();
                cmd_dzqk_cmd.ExecuteNonQuery();
                cmd_ocrwjsb.ExecuteNonQuery();
                cmd_sxgsjjl.ExecuteNonQuery();
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

                Response.Write("货代单证编号为<" + ywbh + ">,已被成功删除");
                //Thread t1 = new Thread(new ThreadStart(delegate
                //{
                //HddzIF serv = new HddzIF();
                //string strErr;
                //Interfaces.GeneralPortal.DelHddz("yw_hddz", SupplierSellID, out strErr);
                //}));
                //t1.IsBackground = true;
                //t1.Start();
            }
            else
            {
                this.SetErrorInfo("货代单证编号为<" + ywbh + ">,删除失败");
            }
        }



        //单据删除
        protected void Zbsd_sfcs()
        {
            bool successed = false;

            string ywbh = Request.Form["ywbh"].ToString();
            DBHelp.BeginTransAction();
            SqlCommand cmd = DBHelp.GetCommand("delete from yw_hddz_jzxxx Where ywbh=@ywbh");
            
            cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));

            if (cmd.ExecuteNonQuery() > 0)
            {
                 
                DBHelp.Commit();
                successed = true;

            }
            else
            {
                DBHelp.Rollback();
            }

            //if (successed)
            //{
            //    Response.Write("货代单证编号为<" + ywbh + ">,已被");                
            //}
            //else
            //{
            //    this.SetErrorInfo("货代单证编号为<" + ywbh + ">,删除失败");
            //}
        }


        ////同步生鲜港
        //protected void Tbsxg()
        //{
        //    string ywbh = Request.Form["ywbh"].ToString();
        //    string zdmc = Request.Form["zdmc"].ToString();
        //    string zdmc_jzxxx = Request.Form["zdmc_jzxxx"].ToString();
        //    string zdmc_dzyq = Request.Form["zdmc_dzyq"].ToString();
        //    string strErr;

        //    //调用接口
        //    //Thread t1 = new Thread(new ThreadStart(delegate
        //    //{
        //    ////HddzIF serv = new HddzIF();

        //    Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);
        //    if (zdmc_jzxxx == "Y")
        //    {
        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_jzxxx", null, ywbh, out strErr);
        //    };
        //    if (zdmc_dzyq == "Y")
        //    {
        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_dzyq", null, ywbh, out strErr);
        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_dzyq_cmd", null, ywbh, out strErr);
        //    };
        //    //}));
        //    //t1.IsBackground = true;
        //    //t1.Start();


        //}

        #region 插入生成流水号
        /// <summary>
        /// 往s_log_err插入流水号
        /// </summary>
        /// <param name="strName">模块名</param>
        /// <param name="ywbh">业务编号</param>
        /// <param name="tableName">插入的表名</param>
        /// <param name="fieldName">插入字段名</param>
        /// <returns>是否执行成功</returns>
        public bool serialNumber(string strName, string ywbh, string tableName, string fieldName)
        {

            //s_log_err插入maxid
            string userID = AppService.GetUserID();
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = new SqlCommand();
            DataSet ds = new DataSet();
            string sqlstr = "";
            string maxid = "";
            string insertStr = "";
            string insertMaxid = "";
            string sqlinsert = "";
            bool flag = false;
            try
            {
                //查询最大流水号
                sqlstr = string.Format("select max(right(eid,8)) as maxid from s_log_err where datediff(dd,cjsj,getdate()) = 0 and left(eid,8) = '{0}{1}' and len(eid) = 24;", strName, userID);

                ds = dbHelp.Query(sqlstr);

                maxid = ds.Tables[0].Rows[0]["maxid"].ToString().Trim();

                //流水号格式:xxxx+yyyymmdd+userid+00000000
                insertStr = strName + userID + string.Format("{0:yyyyMMdd}", DateTime.Now);

                //流水号
                if (maxid == "" || maxid == null)
                {
                    insertMaxid = insertStr + "00000001";
                }
                else
                {
                    int num = int.Parse(maxid);
                    num += 1;
                    insertMaxid = insertStr + num.ToString("d8");
                }

                sqlinsert = string.Format("INSERT INTO s_log_err (eid,tablename,changecols,mainid,cjsj,cscs,sfcg,funname) VALUES ('{0}','{1}','{2}','{3}',getdate(),0,0,'DataToFreshPort');", insertMaxid, tableName, fieldName, ywbh);
                cmd = dbHelp.GetCommand(sqlinsert);
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    flag = true;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);
                flag = false;
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return flag;
        }
        #endregion


        protected void SetUpdateYwbh()
        {
            string ywbh = this.Request.Form["ywbh"].ToString();   //归集-业务编号
            string roles = this.Request.Form["roles"].ToString();

            this.DBHelp.BeginTransAction();
            try
            {
                ////先删除当前角色所分配的用户列表
                //SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM Sys_UserRoles Where UserID=@userID");
                //cmd.Parameters.Add(new SqlParameter("@userID", userID));
                //cmd.ExecuteNonQuery();

                if (!string.IsNullOrEmpty(roles))
                {
                    string[] roleList = roles.Split(new char[] { ';' });
                    SqlCommand cmd = this.DBHelp.GetCommand("update yw_hddz set ysmxcd = '归并业务编号',gbh_ywbh = @ywbh where ywbh = @roleID");
                    SqlParameter param1 = new SqlParameter("@ywbh", ywbh);
                    SqlParameter param2 = new SqlParameter("@roleID", roleList);
                    cmd.Parameters.Add(param1);
                    cmd.Parameters.Add(param2);

                    foreach (string roleID in roleList)
                    {
                        if (!string.IsNullOrEmpty(roleID))
                        {
                            param2.Value = roleID;
                            cmd.ExecuteNonQuery();
                        }
                    }
                }
                this.DBHelp.Commit();
            }
            catch (Exception ex)
            {
                this.SetErrorInfo("业务编号归集时发生错误。\r\n错误信息为：\r\n" + ex.Message);

            }
        }

        //单据保存
        protected void Save()
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
            string dw_dzqk = Request.Form["dw_dzqk"].ToString();
            string dw_sxgsjjl = Request.Form["dw_sxgsjjl"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_master = new SafeDS("dw_hddz_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_edit_jzxxx");
            SafeDS ds_spxx = new SafeDS("dw_hddz_edit_spxx");
            SafeDS ds_zzxx = new SafeDS("dw_hddz_edit_zzxx");
            SafeDS ds_fsdz = new SafeDS("dw_hddz_edit_fsdz");
            SafeDS ds_sjzs = new SafeDS("dw_hddz_rjjk_edit_spxx_sjzs");
            SafeDS ds_sjbzcl = new SafeDS("dw_hddz_rjjk_edit_spxx_sjbzcl");
            SafeDS ds_zsbh = new SafeDS("dw_hddz_rjjk_edit_zsbh");
            SafeDS ds_sjsfdj = new SafeDS("dw_hddz_rjjk_edit_sjsfdj");
            SafeDS ds_dzqk = new SafeDS("dw_hddz_edit_dzqk");
            SafeDS ds_sxgsjjl = new SafeDS("dw_hddz_edit_sxgsjjl");
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            
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
                ds_dzqk.SetChanges(dw_dzqk);
                ds_sxgsjjl.SetChanges(dw_sxgsjjl);
                ds_log.SetChanges(dw_log);
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
                    for (int row = 1; row <= ds_dzqk.RowCount; row++)
                    {
                        ds_dzqk.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_log.RowCount; row++)
                    {
                        ds_log.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    ds_sxgsjjl.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。

                if (ywbh == null || ywbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {

                        var Xj = "";
                        if (ds_spxx.RowCount > 0)
                        {
                            Xj = ds_spxx.GetItemString(1, "xj");
                        }

                        var Ysfs = ds_master.GetItemString(1, "ysfs");
                        if (Ysfs == "海运")
                        {
                            var Dqdm = ds_master.GetItemString(1, "dqdm");
                            var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);

                            SqlCommand cmd = this.DBHelp.GetCommand("select max(substring(case when ywbh='18LY2366' then '18LY2393' else ywbh end,5,4)) from yw_hddz where ysfs='海运' and substring(ywbh,1,2) = '" + year + "' and dqdm = '" + Dqdm + "' and ywbh not between '18LY2367' and '18LY2393'");
                            object value = cmd.ExecuteScalar();

                            if (Convert.IsDBNull(value) || value == null)
                            {
                                ywbh = year + Dqdm + "0001" + Xj;
                            }
                            else
                            {
                                ywbh = year + Dqdm + String.Format("{0:0000}", (long.Parse((string)value) + 1)) + Xj;
                            }
                        }
                        else if (Ysfs == "空运" || Ysfs == "陆运")
                        {
                            var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);

                            SqlCommand cmd = this.DBHelp.GetCommand("select max(substring(ywbh,5,4)) from yw_hddz where (ysfs='空运' or ysfs='陆运') and substring(ywbh,1,2) = '" + year + "' and zbr = '" + userID + "'");
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


                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "ywbh", ywbh);
                    ds_jzxxx.SetItemDouble(row, "cxh", row);
                    
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

                for (int row = 1; row <= ds_dzqk.RowCount; row++)
                {
                    ds_dzqk.SetItemString(row, "ywbh", ywbh);
                    ds_dzqk.SetItemDouble(row, "cxh", row);
                }
                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    if (ds_log.GetItemString(row, "funname") != "DelHddz")
                    {
                        ds_log.SetItemString(row, "mainid", ywbh);
                    }
                }

                for (int i = 1; i <= ds_spxx.RowCount; i++)
                {
                    string str = ds_spxx.GetItemString(i, "spmc_yw");
                }

                ds_sxgsjjl.SetItemString(1, "ywbh", ywbh);
                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_spxx.SetTransaction(this.DBHelp.TransAction);
                ds_zzxx.SetTransaction(this.DBHelp.TransAction);
                ds_fsdz.SetTransaction(this.DBHelp.TransAction);
                ds_sjzs.SetTransaction(this.DBHelp.TransAction);
                ds_sjbzcl.SetTransaction(this.DBHelp.TransAction);
                ds_zsbh.SetTransaction(this.DBHelp.TransAction);
                ds_sjsfdj.SetTransaction(this.DBHelp.TransAction);
                ds_dzqk.SetTransaction(this.DBHelp.TransAction);
                ds_sxgsjjl.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                
                this.DBHelp.BeginTransAction();

                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        if (ds_spxx.UpdateData() == 1)
                        {
                            if (ds_zzxx.UpdateData() == 1)
                            {
                                if (ds_fsdz.UpdateData() == 1)
                                {
                                    if (ds_sjzs.UpdateData() == 1)
                                    {
                                        if (ds_sjbzcl.UpdateData() == 1)
                                        {
                                            if (ds_zsbh.UpdateData() == 1)
                                            {
                                                if (ds_sjsfdj.UpdateData() == 1)
                                                {
                                                    if (ds_dzqk.UpdateData() == 1)
                                                    {
                                                        if (ds_sxgsjjl.UpdateData() == 1)
                                                        {
                                                            if (ds_log.UpdateData() == 1)
                                                            {
                                                                this.DBHelp.Commit();
                                                                //把单据号码，传回到客户端
                                                                Response.Write(ywbh);
                                                            }
                                                            else
                                                            {
                                                                this.DBHelp.Rollback();
                                                                this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_log.DBError + "  " + ds_log.LastError);
                                                            }
                                                        }
                                                        else
                                                        {
                                                            this.DBHelp.Rollback();
                                                            this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_sxgsjjl.DBError + "  " + ds_sxgsjjl.LastError);
                                                        }
                                                    }
                                                    else
                                                    {
                                                        this.DBHelp.Rollback();
                                                        this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_dzqk.DBError + "  " + ds_dzqk.LastError);
                                                    }
                                                }
                                                else
                                                {
                                                    this.DBHelp.Rollback();
                                                    this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_sjsfdj.DBError + "  " + ds_sjsfdj.LastError);
                                                }
                                            }
                                            else
                                            {
                                                this.DBHelp.Rollback();
                                                this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_zsbh.DBError + "  " + ds_zsbh.LastError);
                                            }
                                        }
                                        else
                                        {
                                            this.DBHelp.Rollback();
                                            this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_sjbzcl.DBError + "  " + ds_sjbzcl.LastError);
                                        }
                                    }
                                    else
                                    {
                                        this.DBHelp.Rollback();
                                        this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_sjzs.DBError + "  " + ds_sjzs.LastError);
                                    }
                                }
                                else
                                {
                                    this.DBHelp.Rollback();
                                    this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_fsdz.DBError + "  " + ds_fsdz.LastError);
                                }
                            }
                            else
                            {
                                this.DBHelp.Rollback();
                                this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_zzxx.DBError + "  " + ds_zzxx.LastError);
                            }
                        }
                        else
                        {
                            this.DBHelp.Rollback();
                            this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_spxx.DBError + "  " + ds_spxx.LastError);
                        }
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("货代单据保存失败!\n\n详细错误信息：\n" + ds_jzxxx.DBError + "  " + ds_jzxxx.LastError);
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

                ds_dzqk.Dispose();
                ds_dzqk = null;

                ds_sxgsjjl.Dispose();
                ds_sxgsjjl = null;

                ds_log.Dispose();
                ds_log = null;
            }
        }


        //单据保存
        protected void Save_Ky()
        {

            string userID = AppService.GetUserID();
            string ywbh = Request.Form["ywbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();
            string dw_jzxxx = Request.Form["dw_jzxxx"].ToString();
            string dw_spxx = Request.Form["dw_spxx"].ToString();
            string dw_sjzs = Request.Form["dw_sjzs"].ToString();
            string dw_sjbzcl = Request.Form["dw_sjbzcl"].ToString();
            string dw_zsbh = Request.Form["dw_zsbh"].ToString();
            string dw_sjsfdj = Request.Form["dw_sjsfdj"].ToString();
            string dw_dzqk = Request.Form["dw_dzqk"].ToString();
            string dw_sxgsjjl = Request.Form["dw_sxgsjjl"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_master = new SafeDS("dw_hddz_edit_ky");
            SafeDS ds_jzxxx = new SafeDS("dw_hddz_edit_ky_jzxxx");
            SafeDS ds_spxx = new SafeDS("dw_hddz_edit_ky_spxx");
            SafeDS ds_sjzs = new SafeDS("dw_hddz_rjjk_edit_spxx_sjzs");
            SafeDS ds_sjbzcl = new SafeDS("dw_hddz_rjjk_edit_spxx_sjbzcl");
            SafeDS ds_zsbh = new SafeDS("dw_hddz_rjjk_edit_zsbh");
            SafeDS ds_sjsfdj = new SafeDS("dw_hddz_rjjk_edit_sjsfdj");
            SafeDS ds_dzqk = new SafeDS("dw_hddz_edit_ky_dzqk");
            SafeDS ds_sxgsjjl = new SafeDS("dw_hddz_edit_sxgsjjl");
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {

                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_spxx.SetChanges(dw_spxx);
                ds_sjzs.SetChanges(dw_sjzs);
                ds_sjbzcl.SetChanges(dw_sjbzcl);
                ds_zsbh.SetChanges(dw_zsbh);
                ds_sjsfdj.SetChanges(dw_sjsfdj);
                ds_dzqk.SetChanges(dw_dzqk);
                ds_sxgsjjl.SetChanges(dw_sxgsjjl);
                ds_log.SetChanges(dw_log);
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
                    for (int row = 1; row <= ds_dzqk.RowCount; row++)
                    {
                        ds_dzqk.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    for (int row = 1; row <= ds_log.RowCount; row++)
                    {
                        ds_log.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                    ds_sxgsjjl.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。

                if (ywbh == null || ywbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {

                        var Xj = "";
                        if (ds_spxx.RowCount > 0)
                        {
                            Xj = ds_spxx.GetItemString(1, "xj");
                        }

                        var Ysfs = ds_master.GetItemString(1, "ysfs");
                        if (Ysfs == "海运")
                        {
                            var Dqdm = ds_master.GetItemString(1, "dqdm");
                            var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);
                            SqlCommand cmd = this.DBHelp.GetCommand("select max(substring(ywbh,5,4)) from yw_hddz where ysfs='海运' and substring(ywbh,1,2) = '" + year + "' and dqdm = '" + Dqdm + "'");
                            object value = cmd.ExecuteScalar();

                            if (Convert.IsDBNull(value) || value == null)
                            {
                                ywbh = year + Dqdm + "0001" + Xj;
                            }
                            else
                            {
                                ywbh = year + Dqdm + String.Format("{0:0000}", (long.Parse((string)value) + 1)) + Xj;
                            }
                        }
                        else if (Ysfs == "空运" || Ysfs == "陆运")
                        {
                            var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);
                            SqlCommand cmd = this.DBHelp.GetCommand("select max(substring(ywbh,5,4)) from yw_hddz where (ysfs='空运' or ysfs='陆运') and substring(ywbh,1,2) = '" + year + "' and zbr = '" + userID + "'");
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


                for (int row = 1; row <= ds_jzxxx.RowCount; row++)
                {
                    ds_jzxxx.SetItemString(row, "ywbh", ywbh);
                    ds_jzxxx.SetItemDouble(row, "cxh", row);

                }

                for (int row = 1; row <= ds_spxx.RowCount; row++)
                {
                    ds_spxx.SetItemString(row, "ywbh", ywbh);
                    ds_spxx.SetItemDouble(row, "cxh", row);
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

                for (int row = 1; row <= ds_dzqk.RowCount; row++)
                {
                    ds_dzqk.SetItemString(row, "ywbh", ywbh);
                    ds_dzqk.SetItemDouble(row, "cxh", row);
                }


                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    ds_log.SetItemString(row, "mainid", ywbh);
                }
                ds_sxgsjjl.SetItemString(1, "ywbh", ywbh);
                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_spxx.SetTransaction(this.DBHelp.TransAction);
                ds_sjzs.SetTransaction(this.DBHelp.TransAction);
                ds_sjbzcl.SetTransaction(this.DBHelp.TransAction);
                ds_zsbh.SetTransaction(this.DBHelp.TransAction);
                ds_sjsfdj.SetTransaction(this.DBHelp.TransAction);
                ds_dzqk.SetTransaction(this.DBHelp.TransAction);
                ds_sxgsjjl.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_master.UpdateData() == 1)
                {
                    ds_jzxxx.UpdateData();
                    ds_spxx.UpdateData();
                    ds_sjzs.UpdateData();
                    ds_sjbzcl.UpdateData();
                    ds_zsbh.UpdateData();
                    ds_sjsfdj.UpdateData();
                    ds_dzqk.UpdateData();
                    ds_sxgsjjl.UpdateData();
                    ds_log.UpdateData();
                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write(ywbh);

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

                ds_sjzs.Dispose();
                ds_sjzs = null;

                ds_sjbzcl.Dispose();
                ds_sjbzcl = null;

                ds_sjsfdj.Dispose();
                ds_sjsfdj = null;

                ds_dzqk.Dispose();
                ds_dzqk = null;

                ds_sxgsjjl.Dispose();
                ds_sxgsjjl = null;

                ds_log.Dispose();
                ds_log = null;
            }
        }


        //#region 列表存盘
        protected void ListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            string dw_ygkthsj = Request.Form["dw_ygkthsj"].ToString();
            SafeDS ds_ygkthsj = new SafeDS("dw_hddz_ygkthsj_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);
                ds_ygkthsj.SetChanges(dw_ygkthsj);

                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds_ygkthsj.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        ds_ygkthsj.UpdateData();
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("修改传输日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
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
                ds_ygkthsj.Dispose();
                ds_ygkthsj = null;
            }
        }


        //#region 列表存盘
        protected void ListSave_Ky()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_ky");
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
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
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


        //#region 列表存盘
        protected void SxgsjjlListSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_sxgsjjl");
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
                    this.DBHelp.Rollback();
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

            }
        }

        //#region 海运换单列表存盘
        protected void ListHdSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_hd");
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


                        //数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "yjkgsj,sjkgsj,sjhdsj,xhgqbm,xhgq,xhgqjc,xhgqpym";
                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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

        //#region 确认电放列表存盘
        protected void ListQrdfSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_qrdf");
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

                        ////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "qrdfsj";
                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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

        //#region 空运换单列表存盘
        protected void ListHdkySave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_hd_ky");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            string dw_yjkgsj = Request.Form["dw_yjkgsj"].ToString();
            SafeDS ds_yjkgsj = new SafeDS("dw_hddz_yjkgsj_lssj");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);
                ds_yjkgsj.SetChanges(dw_yjkgsj);

                for (int i = 1; i <= ds_yjkgsj.RowCount; i++)
                {

                    ds_yjkgsj.SetItem(i, "id", Guid.NewGuid().ToString());
                }

                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds_yjkgsj.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        ds_yjkgsj.UpdateData();
                        this.DBHelp.Commit();

                        ////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        //////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "yjkgsj,sjkgsj,kyhdsj,sjhdsj";
                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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

            }
        }

        //#region 空运换单拆分存盘
        protected void ListHdkycfSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_hd_kycf");
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
                    this.SetErrorInfo("空运换单拆分信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 运费列表存盘
        protected void ListYfSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_yf");
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


                        ////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "yfcdrbm,yfcdr,yfcdrjc,yfcdrpym,yfzfqrsj";
                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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

        //#region 税金列表存盘
        protected void ListSjSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_sj");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();


                        ////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string strErr;
                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_sjzf", null, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端                    
                        Response.Write("存盘成功");
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

        //#region 税金列表存盘
        protected void ListSdSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_sd");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);

                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {
                    ds_log.UpdateData(); 
                        this.DBHelp.Commit();
                        //把单据号码，传回到客户端                    
                        Response.Write("存盘成功");
                                 
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

        //#region 海运保证金列表存盘
        protected void ListBzjSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_bzj");
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
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "bzjdjh,bzj,sjzfrq,bzjjzsj,zgs,zzzs,tbzj,tkdzsj";
                        //        string strErr;
                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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

        //#region 空运保证金列表存盘
        protected void ListBzjKySave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_bzj_ky");
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

                        // ////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "bzjdjh,bzj,sjzfrq,bzjjzsj,zgs,zzzs,tbzj,tkdzsj";
                        //        string strErr;
                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback();
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


        //#region 检疫存盘
        protected void ListJySave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_jy");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            string dw_xccy = Request.Form["dw_xccy"].ToString();
            SafeDS ds_xccy = new SafeDS("dw_hddz_xccy_lssj");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_log);
                ds_xccy.SetChanges(dw_xccy);

                for (int i = 1; i <= ds_xccy.RowCount; i++)
                {

                    ds_xccy.SetItem(i, "id", Guid.NewGuid().ToString());
                }

                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                ds_xccy.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                //UpdateData() update属性  如果ds_list.Update() = 1 
                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {

                        var num = ds_xccy.UpdateData();
                        this.DBHelp.Commit();


                        //////数据上传生鲜港
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "bjh,tgdh,wsbjsj,cktgsj";
                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("报检信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
                ds_xccy.Dispose();
                ds_xccy = null;
            }
        }


        //#region 检疫无纸化存盘
        protected void ListJyWzhSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_jy_wzh");
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
                    this.SetErrorInfo("换单信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 报关存盘
        protected void ListBgSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            string dw_bsnr = Request.Form["dw_bsnr"].ToString();
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_bg");
            SafeDS ds_bsnr = new SafeDS("dw_hddz_bsnr_list");
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_bsnr.SetChanges(dw_bsnr);
                ds_log.SetChanges(dw_log);

                for (int row = 1; row <= ds_bsnr.RowCount; row++)
                {
                    ds_bsnr.SetItemDouble(row, "cxh", row);
                }

                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_bsnr.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {
                    ds_bsnr.UpdateData();
                    if (ds_log.UpdateData() == 1)
                    {
                        this.DBHelp.Commit();
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("修改传输日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                #region 2017-04-01  注释
                //////数据上传生鲜港
                //Thread t1 = new Thread(new ThreadStart(delegate
                //{
                ////HddzIF serv = new HddzIF();
                //for (int row = 1; row <= ds_list.RowCount; row++)
                //{
                //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                    //    if (zt == "NotModified")
                //    {
                //        string ywbh = ds_list.GetItemString(row, "ywbh");
                //        string zdmc = "bgdh,bghgbm,bghg,bghgjc,bghgpym,bgsj,sjzq_zqcdsj";
                //        string strErr;

                    //        //2017-03-31 生成流水号
                //        //this.serialNumber("hybg", ywbh, "yw_hddz", zdmc);

                    //        //Interfaces.GeneralPortal GeneralPortal = new Interfaces.GeneralPortal();
                //        //GeneralPortal.SaveOpLog("yw_hddz", zdmc, ywbh, out strErr);
                //        //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);
                //    };
                //};
                //}));
                //t1.IsBackground = true;
                //t1.Start();
                #endregion

                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("报关信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_list.Dispose();
                ds_bsnr.Dispose();
                ds_log.Dispose();
                ds_list = null;
                ds_bsnr = null;
                ds_log = null;
            }
        }

        //#region 空运报关存盘
        protected void ListBgKySave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_bg_ky");
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
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //if (zt == "NotModified")
                        //{
                        //string ywbh = ds_list.GetItemString(row, "ywbh");
                        //string zdmc = "bgdh,bghgbm,bghg,bghgjc,bghgpym,bgsj";
                        //string strErr;

                        //this.serialNumber("kybg", ywbh, "yw_hddz", zdmc);
                        //Interfaces.GeneralPortal GeneralPortal = new Interfaces.GeneralPortal();
                        //GeneralPortal.SaveOpLog("yw_hddz", zdmc, ywbh, out strErr);
                        //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //};
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("报关信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 空运仓储费保存
        protected void ListCcfKySave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_ccfqr_ky");
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
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //if (zt == "NotModified")
                        //{
                        //string ywbh = ds_list.GetItemString(row, "ywbh");
                        //string zdmc = "bgdh,bghgbm,bghg,bghgjc,bghgpym,bgsj";
                        //string strErr;

                        //this.serialNumber("kybg", ywbh, "yw_hddz", zdmc);
                        //Interfaces.GeneralPortal GeneralPortal = new Interfaces.GeneralPortal();
                        //GeneralPortal.SaveOpLog("yw_hddz", zdmc, ywbh, out strErr);
                        //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //};
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("报关信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 放行存盘
        protected void ListFxSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_fx");
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
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("海关放行信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_list.Dispose();
                ds_log.Dispose();
                ds_list = null;
                ds_log = null;
            }



            //string zdmc = "hgfxfs,hgfxsj";
            //string strErr;

            //2017-03-31  生成流水号
            //this.serialNumber("hyfx", ywbh, "yw_hddz", zdmc);


            //Interfaces.GeneralPortal GeneralPortal = new Interfaces.GeneralPortal();
            //GeneralPortal.SaveOpLog("yw_hddz", zdmc, ywbh, out strErr);


            //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);
            //};


            //}));
            //t1.IsBackground = true;
            //t1.Start();

            ////把单据号码，传回到客户端
            //Response.Write("存盘成功");


        }

        protected void YljzxwlgzSaves()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_tggz_Select");
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
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("海关放行信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_list.Dispose();
                ds_log.Dispose();
                ds_list = null;
                ds_log = null;
            }
        }

        //#region 易赉集装箱物流跟踪
        protected void YljzxwlgzSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_tggz");
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
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("海关放行信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_list.Dispose();
                ds_log.Dispose();
                ds_list = null;
                ds_log = null;
            }
        }

        //#region 放行预估存盘
        protected void ListFxygSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_fxyg");
            try
            {
                ds_list.SetChanges(dw_list);


                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {

                    this.DBHelp.Commit();


                    //////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                    ////HddzIF serv = new HddzIF();
                    for (int row = 1; row <= ds_list.RowCount; row++)
                    {
                        string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        if (zt == "NotModified")
                        {

                            string ywbh = ds_list.GetItemString(row, "ywbh");
                            string zdmc = "yghgfxsj";
                            string strErr;

                            Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        };
                    };
                    //}));
                    //t1.IsBackground = true;
                    //t1.Start();


                    //把单据号码，传回到客户端
                    Response.Write("存盘成功");
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("报关信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 空运放行存盘
        protected void ListKyfxSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_fx_ky");
            try
            {
                ds_list.SetChanges(dw_list);


                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {

                    this.DBHelp.Commit();


                    //////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                    ////HddzIF serv = new HddzIF();
                    for (int row = 1; row <= ds_list.RowCount; row++)
                    {
                        string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        if (zt == "NotModified")
                        {

                            string ywbh = ds_list.GetItemString(row, "ywbh");
                            string zdmc = "hgfxfs,hgfxsj";
                            string strErr;

                            Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        };
                    };
                    //}));
                    //t1.IsBackground = true;
                    //t1.Start();

                    //把单据号码，传回到客户端
                    Response.Write("存盘成功");
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("报关信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 货代单证备注存盘
        protected void BeizhuSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_beizhu");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {
                    this.DBHelp.Commit();

                    DBHelp.BeginTransAction();
                    string beizhu = ds_list.GetItemString(ds_list.RowCount, "beizhu");
                    string ywbh = ds_list.GetItemString(ds_list.RowCount, "ywbh");
                    SqlCommand master = DBHelp.GetCommand("update yw_hddz set beizhu = @beizhu,beizhu_xgrq = getdate()  from yw_hddz Where ywbh =@ywbh");
                    master.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    master.Parameters.Add(new SqlParameter("@beizhu", beizhu));
                    if (master.ExecuteNonQuery() > 0)
                    {
                        DBHelp.Commit();
                        Response.Write(beizhu);
                        //// successed_beizhu = true;
                    }
                    else
                    {
                        DBHelp.Rollback();
                    }

                    //把单据号码，传回到客户端
                    Response.Write("存盘成功");

                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("备注保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 货代单证单证审单存盘
        protected void DzsdSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_edit_dzqk_cmd");
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

                        DBHelp.BeginTransAction();

                        string sdjg = ds_list.GetItemString(ds_list.RowCount, "sdjg");
                        string ywbh = ds_list.GetItemString(ds_list.RowCount, "ywbh");
                        string sdnr = ds_list.GetItemString(ds_list.RowCount, "sdnr");
                        Int32 cxh = ds_list.GetItemInt32(ds_list.RowCount, "cxh");
                        SqlCommand master = DBHelp.GetCommand("update yw_hddz_dzyq set sdzxjg = @sdjg,sdzxnr =@sdnr, sdzxsj = getdate()  from yw_hddz_dzyq Where ywbh =@ywbh and cxh =@cxh");
                        master.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                        master.Parameters.Add(new SqlParameter("@cxh", cxh));
                        master.Parameters.Add(new SqlParameter("@sdjg", sdjg));
                        master.Parameters.Add(new SqlParameter("@sdnr", sdnr));
                        if (master.ExecuteNonQuery() > 0)
                        {
                            DBHelp.Commit();
                        }
                        else
                        {
                            DBHelp.Rollback();
                        }

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("审单结果保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 货代单证异常原因存盘
        protected void YcyySave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_ycyy_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {

                        this.DBHelp.Commit();

                        //////数据上传生鲜港               
                        if (ds_list.RowCount > 0)
                        {
                            //Thread t1 = new Thread(new ThreadStart(delegate
                            //{
                            ////HddzIF serv = new HddzIF();
                            //string ywbh = ds_list.GetItemString(1, "ywbh");
                            //string yybm = ds_list.GetItemString(1, "ycyybm");
                            //string strErr;
                            //String[] qtcs = { yybm };

                            //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_ycyy", null, ywbh, out strErr, qtcs);

                            //}));
                            //t1.IsBackground = true;
                            //t1.Start();

                            //把单据号码，传回到客户端
                            Response.Write("存盘成功");
                        }
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
                    this.SetErrorInfo("报关信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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



        //#region 货代单证异常原因存盘
        protected void YcyyYjxxSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_ycyy_yjxx_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {

                        this.DBHelp.Commit();

                        //////数据上传生鲜港               
                        if (ds_list.RowCount > 0)
                        {
                            //Thread t1 = new Thread(new ThreadStart(delegate
                            //{
                            ////HddzIF serv = new HddzIF();
                            //string ywbh = ds_list.GetItemString(1, "ywbh");
                            //string yybm = ds_list.GetItemString(1, "ycyybm");
                            //string strErr;
                            //String[] qtcs = { yybm };

                            //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_ycyy", null, ywbh, out strErr, qtcs);

                            //}));
                            //t1.IsBackground = true;
                            //t1.Start();

                            //把单据号码，传回到客户端
                            Response.Write("存盘成功");
                        }
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
                    this.SetErrorInfo("报关信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 货代单证理货信息存盘
        protected void lhxxSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_lhxx");
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
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("修改传输日志保存失败\n\n详细错误信息：\n" + ds_log.DBError);
                    }

                    #region 2017 4-12 注释
                    //////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                    ////HddzIF serv = new HddzIF();
                    //for (int row = 1; row <= ds_list.RowCount; row++)
                    //{
                    //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                    //    if (zt == "NotModified")
                    //    {

                    //        string ywbh = ds_list.GetItemString(row, "ywbh");
                    //        string zdmc = "sjzq_zqlhsj,sjzq_zqdgsj";
                    //        string strErr;

                    //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                    //    };
                    //};
                    //}));
                    //t1.IsBackground = true;
                    //t1.Start();
                    #endregion

                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("理货信息保存失败!!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#region 更新货代时间 -- 承运人
        protected void UpdateKgsjCyr()
        {
            string userID = AppService.GetUserID();
            string cm = Request.Form["cm"].ToString();
            string hcorhbh = Request.Form["hcorhbh"].ToString();
            string zz_cm = Request.Form["zz_cm"].ToString();
            string zz_hcorhbh = Request.Form["zz_hcorhbh"].ToString();
            string xhgqbm = Request.Form["xhgqbm"].ToString();
            string xhgqmc = Request.Form["xhgq"].ToString();
            string xhgqjc_old = Request.Form["xhgqjc_old"].ToString();
            string xhgqjc = Request.Form["xhgqjc"].ToString();
            string xhgqpym = Request.Form["xhgqpym"].ToString();
            string yjkgsj = Request.Form["yjkgsj"].ToString();
            string sjkgsj = Request.Form["sjkgsj"].ToString();
            string ykgsj = Request.Form["ykgsj"].ToString();
            string kgbz = Request.Form["kgbz"].ToString();
            string zz_cm_new = Request.Form["zz_cm_new"].ToString();
            string mtdm = Request.Form["mtdm"].ToString();
            string jcka = Request.Form["jcka"].ToString();
            string rjka = Request.Form["rjka"].ToString();
            string hdrbm = Request.Form["hdrbm"].ToString();
            string cyr = Request.Form["cyr"].ToString();

            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                DBHelp.BeginTransAction();
                SqlCommand master;
                if (kgbz == "N")
                {

                    if (sjkgsj == null || sjkgsj.Substring(0, 8) == "1900/1/1")
                    {
                        if (zz_cm_new == "")
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka   from yw_hddz where isnull(cyr,'') = isnull(@cyr,'') and state <> '终止' and ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,'')) ) and  sjkgsj is null ");
                        }
                        else
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj),zz_cm = @zz_cm_new, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka   from  isnull(cyr,'') = isnull(@cyr,'') and yw_hddz where state <> '终止' and ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,'')) ) and  sjkgsj is null ");

                        }
                    }
                    else
                    {
                        if (zz_cm_new == "")
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), sjkgsj = convert(datetime,@sjkgsj),sjkgsj_lrsj=getdate(),sjkgsj_czry=@userid, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka  from yw_hddz where isnull(cyr,'') = isnull(@cyr,'')  and state <> '终止' and  ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and  sjkgsj is null ");
                        }
                        else
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), sjkgsj = convert(datetime,@sjkgsj),sjkgsj_lrsj=getdate(),sjkgsj_czry=@userid, zz_cm = @zz_cm_new, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka   from yw_hddz where isnull(cyr,'') = isnull(@cyr,'') state <> '终止' and  ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and  sjkgsj is null ");
                        }
                    }
                }
                else
                {
                    if (sjkgsj == null || sjkgsj.Substring(0, 8) == "1900/1/1")
                    {
                        master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj),sjkgsj=null, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka    from yw_hddz where isnull(cyr,'') = isnull(@cyr,'') and state <> '终止' and  (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and   sjkgsj = @ykgsj ");
                    }
                    else
                    {
                        master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), sjkgsj =  convert(datetime,@sjkgsj),sjkgsj_lrsj=getdate(),sjkgsj_czry=@userid, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka   from yw_hddz where isnull(cyr,'') = isnull(@cyr,'') and state <> '终止' and  (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and   sjkgsj = @ykgsj ");
                    }
                }
                master.Parameters.Add(new SqlParameter("@cm", cm));
                master.Parameters.Add(new SqlParameter("@hcorhbh", hcorhbh));
                master.Parameters.Add(new SqlParameter("@zz_cm", zz_cm));
                master.Parameters.Add(new SqlParameter("@zz_hcorhbh", zz_hcorhbh));
                master.Parameters.Add(new SqlParameter("@xhgqbm", xhgqbm));
                master.Parameters.Add(new SqlParameter("@cyr", cyr));
                master.Parameters.Add(new SqlParameter("@xhgqmc", xhgqmc));
                master.Parameters.Add(new SqlParameter("@xhgqjc_old", xhgqjc_old));
                master.Parameters.Add(new SqlParameter("@xhgqjc", xhgqjc));
                master.Parameters.Add(new SqlParameter("@xhgqpym", xhgqpym));
                master.Parameters.Add(new SqlParameter("@yjkgsj", DateTime.Parse(yjkgsj)));
                master.Parameters.Add(new SqlParameter("@sjkgsj", DateTime.Parse(sjkgsj)));
                master.Parameters.Add(new SqlParameter("@ykgsj", DateTime.Parse(ykgsj)));
                master.Parameters.Add(new SqlParameter("@mtdm", mtdm));
                master.Parameters.Add(new SqlParameter("@jcka", jcka));
                master.Parameters.Add(new SqlParameter("@rjka", rjka));
                master.Parameters.Add(new SqlParameter("@hdrbm", hdrbm));
                master.Parameters.Add(new SqlParameter("@userid", userID));
                if (zz_cm_new != "")
                {
                    master.Parameters.Add(new SqlParameter("@zz_cm_new", zz_cm_new));
                }

                if (master.ExecuteNonQuery() > 0)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        DBHelp.Commit();
                        Response.Write("存盘成功!");
                    }
                    else
                    {
                        DBHelp.Rollback();
                        this.SetErrorInfo("修改传输日志保存失败\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    DBHelp.Rollback();
                }
            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                DBHelp.Dispose();

                ds_log.Dispose();
                ds_log = null;
            }
            //if (successed)
            //{
            //    Response.Write("船名为<" + cm + ">,的业务靠港时间已经修改成功");

            //    if (zz_cm_new != "")
            //    {
            //        tbsxg_kggl(cm, zz_cm_new, xhgqbm, yjkgsj);
            //    }
            //    else
            //    {
            //        tbsxg_kggl(cm, zz_cm, xhgqbm, yjkgsj);
            //    }


            //}
            //else
            //{
            //    this.SetErrorInfo("船名为<" + cm + ">,的业务靠港时间已经修改失败");
            //}
        }
        //#endregion


        //#region 更新货代时间
        protected void UpdateKgsj()
        {
            string userID = AppService.GetUserID();
            string cm = Request.Form["cm"].ToString();
            string hcorhbh = Request.Form["hcorhbh"].ToString();
            string zz_cm = Request.Form["zz_cm"].ToString();
            string zz_hcorhbh = Request.Form["zz_hcorhbh"].ToString();
            string xhgqbm = Request.Form["xhgqbm"].ToString();
            string xhgqmc = Request.Form["xhgq"].ToString();
            string xhgqjc_old = Request.Form["xhgqjc_old"].ToString();
            string xhgqjc = Request.Form["xhgqjc"].ToString();
            string xhgqpym = Request.Form["xhgqpym"].ToString();
            string yjkgsj = Request.Form["yjkgsj"].ToString();
            string sjkgsj = Request.Form["sjkgsj"].ToString();
            string ykgsj = Request.Form["ykgsj"].ToString();
            string kgbz = Request.Form["kgbz"].ToString();
            string zz_cm_new = Request.Form["zz_cm_new"].ToString();
            string mtdm = Request.Form["mtdm"].ToString();
            string jcka = Request.Form["jcka"].ToString();
            string rjka = Request.Form["rjka"].ToString();
            string hdrbm = Request.Form["hdrbm"].ToString();

            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_log.SetChanges(dw_log);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                DBHelp.BeginTransAction();
                SqlCommand master;
                if (kgbz == "N")
                {

                    if (sjkgsj == null || sjkgsj.Substring(0, 8) == "1900/1/1")
                    {
                        if (zz_cm_new == "")
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka   from yw_hddz where state <> '终止' and ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,'')) ) and  sjkgsj is null ");
                        }
                        else
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj),zz_cm = @zz_cm_new, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka  from yw_hddz where state <> '终止' and ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,'')) ) and  sjkgsj is null ");

                        }
                    }
                    else
                    {
                        if (zz_cm_new == "")
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), sjkgsj = convert(datetime,@sjkgsj),sjkgsj_lrsj=getdate(),sjkgsj_czry=@userid, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka  from yw_hddz where state <> '终止' and  ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and  sjkgsj is null ");
                        }
                        else
                        {
                            master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), sjkgsj = convert(datetime,@sjkgsj),sjkgsj_lrsj=getdate(),sjkgsj_czry=@userid, zz_cm = @zz_cm_new, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka  from yw_hddz where state <> '终止' and  ysfs = '海运' and (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and  rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and  sjkgsj is null ");
                        }
                    }
                }
                else
                {
                    if (sjkgsj == null || sjkgsj.Substring(0, 8) == "1900/1/1")
                    {
                        master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj),sjkgsj=null, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka   from yw_hddz where state <> '终止' and  (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and   sjkgsj = @ykgsj ");
                    }
                    else
                    {
                        master = DBHelp.GetCommand("update yw_hddz set xhgqbm = @xhgqbm, xhgq = @xhgqmc,xhgqjc = @xhgqjc, xhgqpym = @xhgqpym, yjkgsj = convert(datetime,@yjkgsj), sjkgsj =  convert(datetime,@sjkgsj),sjkgsj_lrsj=getdate(),sjkgsj_czry=@userid, zz_hcorhbh = @zz_hcorhbh, mtdm = @mtdm, jcka = @jcka, rjka = @rjka  from yw_hddz where state <> '终止' and  (rtrim(isnull(cm,'')) = rtrim(isnull(@cm,'')) and rtrim(isnull(zz_cm,'')) = rtrim(isnull(@zz_cm,'')) and  rtrim(isnull(hdrbm,'')) = rtrim(isnull(@hdrbm,'')) and rtrim(isnull(xhgqjc,'')) = rtrim(isnull(@xhgqjc_old,''))) and   sjkgsj = @ykgsj ");
                    }
                }
                master.Parameters.Add(new SqlParameter("@cm", cm));
                master.Parameters.Add(new SqlParameter("@hcorhbh", hcorhbh));
                master.Parameters.Add(new SqlParameter("@zz_cm", zz_cm));
                master.Parameters.Add(new SqlParameter("@zz_hcorhbh", zz_hcorhbh));
                master.Parameters.Add(new SqlParameter("@xhgqbm", xhgqbm));
                master.Parameters.Add(new SqlParameter("@xhgqmc", xhgqmc));
                master.Parameters.Add(new SqlParameter("@xhgqjc_old", xhgqjc_old));
                master.Parameters.Add(new SqlParameter("@xhgqjc", xhgqjc));
                master.Parameters.Add(new SqlParameter("@xhgqpym", xhgqpym));
                master.Parameters.Add(new SqlParameter("@yjkgsj", DateTime.Parse(yjkgsj)));
                master.Parameters.Add(new SqlParameter("@sjkgsj", DateTime.Parse(sjkgsj)));
                master.Parameters.Add(new SqlParameter("@ykgsj", DateTime.Parse(ykgsj)));
                master.Parameters.Add(new SqlParameter("@mtdm", mtdm));
                master.Parameters.Add(new SqlParameter("@jcka", jcka));
                master.Parameters.Add(new SqlParameter("@rjka", rjka));
                master.Parameters.Add(new SqlParameter("@hdrbm", hdrbm));
                master.Parameters.Add(new SqlParameter("@userid", userID));
                if (zz_cm_new != "")
                {
                    master.Parameters.Add(new SqlParameter("@zz_cm_new", zz_cm_new));
                }

                if (master.ExecuteNonQuery() > 0)
                {
                    if (ds_log.UpdateData() == 1)
                    {
                        DBHelp.Commit();
                        Response.Write("存盘成功!");
                    }
                    else
                    {
                        DBHelp.Rollback();
                        this.SetErrorInfo("修改传输日志保存失败\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    DBHelp.Rollback();
                }
            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                DBHelp.Dispose();

                ds_log.Dispose();
                ds_log = null;
            }
            //if (successed)
            //{
            //    Response.Write("船名为<" + cm + ">,的业务靠港时间已经修改成功");

            //    if (zz_cm_new != "")
            //    {
            //        tbsxg_kggl(cm, zz_cm_new, xhgqbm, yjkgsj);
            //    }
            //    else
            //    {
            //        tbsxg_kggl(cm, zz_cm, xhgqbm, yjkgsj);
            //    }


            //}
            //else
            //{
            //    this.SetErrorInfo("船名为<" + cm + ">,的业务靠港时间已经修改失败");
            //}
        }
        //#endregion







        //#region 数据上传生鲜港
        protected void tbsxg_kggl(string cm, string zz_cm, string xhgqbm, string yjkgsj)
        {
            SafeDS ds_list = new SafeDS("ds_kggl_ywbh_list");

            ds_list.SetTransaction(this.DBHelp.TransAction);
            this.DBHelp.BeginTransAction();

            ds_list.Retrieve(cm, zz_cm, xhgqbm, yjkgsj);
            //Thread t1 = new Thread(new ThreadStart(delegate
            //{
            ////HddzIF serv = new HddzIF();
            for (int row = 1; row <= ds_list.RowCount; row++)
            {
                string ywbh = ds_list.GetItemString(row, "ywbh");
                string zdmc = "yjkgsj,sjkgsj,xhgqbm,xhgqmc,xhgqjc,xhgqpym,zz_hcorhbh";
                string strErr;

                this.serialNumber("kggl", ywbh, "yw_hddz", zdmc);

                Interfaces.GeneralPortal GeneralPortal = new Interfaces.GeneralPortal();
                GeneralPortal.SaveOpLog("yw_hddz", zdmc, ywbh, out strErr);

                //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);
            };
            //}));
            //t1.IsBackground = true;
            //t1.Start();



            if (ds_list.RowCount > 0)
            {
                DBHelp.Commit();
            }
            else
            {
                DBHelp.Rollback();
            }


        }

        //#endregion

        //#region 免箱期确认
        protected void ListMxqqrSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_mxqqr");
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
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        //for (int row = 1; row <= ds_list.RowCount; row++)
                        //{
                        //    string zt = ds_list.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary).ToString();

                        //    if (zt == "NotModified")
                        //    {

                        //        string ywbh = ds_list.GetItemString(row, "ywbh");
                        //        string zdmc = "mxq,khmxq";
                        //        string strErr;

                        //        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                        //    };
                        //};
                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();


                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("免箱期取人保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("免箱期取人保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#endregion

        //#region 通关进程存盘
        protected void ListTgjcgzSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_tgjcgz");
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
                    this.SetErrorInfo("通关进程跟踪信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#endregion

        //#region 客户空运跟踪
        protected void ListkhkygzSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_khkygz");
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
                    this.SetErrorInfo("客户空运跟踪保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#endregion

        //#region 客户空运跟踪
        public void ListkyycgzqtwtSave()
        {
            string master = Request.Form["dw_Master"].ToString();

            SafeDS ds = new SafeDS("dw_hddz_list_kyycgz_qtwt");
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
        //#endregion

        //#region 报关存盘
        protected void ListDzgzSave()
        {
            string userID = AppService.GetUserID();
            string dw_bsnr = Request.Form["dw_bsnr"].ToString();
            SafeDS ds_bsnr = new SafeDS("dw_dzgz_list_cmd");
            try
            {

                ds_bsnr.SetChanges(dw_bsnr);

                for (int row = 1; row <= ds_bsnr.RowCount; row++)
                {
                    ds_bsnr.SetItemDouble(row, "cxh_mx", row);
                }


                ds_bsnr.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds_bsnr.UpdateData() == 1)
                {

                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write("存盘成功");
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("单证跟踪保存失败!\n\n详细错误信息：\n" + ds_bsnr.DBError);
                }

            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_bsnr.Dispose();
                ds_bsnr = null;

            }
        }
        //#endregion

        //#region 退税管理列表存盘
        protected void ListTsglSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_tsgl");
            try
            {
                ds_list.SetChanges(dw_list);

                //for (int row = 1; row <= ds_list.RowCount; row++)
                //{                    
                //    ds_list.SetItemDouble(row, "cxh", row);

                //}


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

            }
        }
        //#endregion

        //#region 自营税金支付确认列表存盘
        protected void ListSjzfSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_sjzf");
            try
            {
                ds_list.SetChanges(dw_list);


                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();


                if (ds_list.UpdateData() == 1)
                {

                    this.DBHelp.Commit();


                    ////数据上传生鲜港       

                    if (ds_list.RowCount > 0)
                    {
                        //Thread t1 = new Thread(new ThreadStart(delegate
                        //{
                        ////HddzIF serv = new HddzIF();
                        string ywbh = ds_list.GetItemString(1, "ywbh");
                        string strErr;
                        Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_sjzf", null, ywbh, out strErr);

                        //}));
                        //t1.IsBackground = true;
                        //t1.Start();

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
                    }

                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("自营税金出纳确认信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#endregion

        //#region 货代单证税金支付存盘
        protected void SjzfSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_sj_sjzf");
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

                        ////数据上传生鲜港
                        //if (ds_list.RowCount > 0)
                        //{
                        //    ////HddzIF serv = new HddzIF();
                        //    string ywbh = ds_list.GetItemString(1, "ywbh");
                        //    string strErr;
                        //    Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_sjzf", null, ywbh, out strErr);
                        //}
                        //

                        //把单据号码，传回到客户端
                        Response.Write("存盘成功");
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
                    this.SetErrorInfo("税金信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#endregion

        //#region 货代单证备注存盘
        //#region 货代单证税金支付存盘
        protected void ZqhcSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_edit_zqhc");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetChanges(dw_log);
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
                        this.SetErrorInfo("传输错误日志保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("正确航次保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#endregion

        //#region 货代单证税金支付存盘
        protected void ListOcrwjsbSave()
        {
            //// bool successed_beizhu = false;
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_ocrwjsb_wsb_list");
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
                    this.SetErrorInfo("ocr文件保存保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#endregion



        //单据保存
        protected void YflrSave()
        {

            string userID = AppService.GetUserID();
            string ywbh = Request.Form["ywbh"].ToString();
            var operation = Request.Form["operation"].ToString();
            string dw_master = Request.Form["dw_master"].ToString();

            SafeDS ds_master = new SafeDS("dw_hddz_edit_yflr");

            try
            {

                ds_master.SetChanges(dw_master);

                if (operation == "copy" || operation == "modify")
                {
                    ds_master.SetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);

                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。

                if (ywbh == null || ywbh == "")
                {
                    for (int row = 1; row <= ds_master.RowCount; row++)
                    {
                        var zbr = ds_master.GetItemString(row, "zbr");
                        if (ds_master.GetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                        {
                            var Xj = "";
                            var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);
                            SqlCommand cmd = this.DBHelp.GetCommand("select isnull(max(substring(ywbh,5,4)),'0000') from yw_hddz where substring(ywbh,1,2) = '" + year + "' and zbr = '" + zbr + "'");
                            object value = cmd.ExecuteScalar();
                            SqlCommand cmd_djdm = this.DBHelp.GetCommand("select max(Djdm) from Sys_Users where ID = '" + zbr + "'");
                            object value_djdm = cmd_djdm.ExecuteScalar();
                            var Djdm = (string)value_djdm;

                            if (Convert.IsDBNull(value) || value == null)
                            {
                                ywbh = year + Djdm + "0001" + Xj;
                            }
                            else
                            {
                                ywbh = year + Djdm + String.Format("{0:0000}", (long.Parse((string)value) + row)) + Xj;
                            }

                            ds_master.SetItemString(row, "ywbh", ywbh);
                        }
                        else
                        {
                            ywbh = ds_master.GetItemString(1, "ywbh");
                        }
                    }

                }

                var hth = ds_master.GetItemString(1, "hth");

                if (hth == "" || hth == null)
                {
                    ds_master.SetItem(1, "hth", ywbh);
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);

                this.DBHelp.BeginTransAction();
                if (ds_master.UpdateData() == 1)
                {

                    this.DBHelp.Commit();
                    //把单据号码，传回到客户端
                    Response.Write(ywbh);

                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("运费录入单据保存失败!\n\n详细错误信息：\n" + ds_master.DBError + "  " + ds_master.LastError);
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

            }
        }

        //#endregion


        //#region 列表存盘
        protected void HddzKycdzgzSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_kycdzgz_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {

                    this.DBHelp.Commit();
                    Response.Write("存盘成功");

                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("空运产地证跟踪信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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
        //#region 列表存盘-->空运植检证
        protected void HddzKyzjzgzSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_kyzjzgz_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_list);
                ds_list.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();

                if (ds_list.UpdateData() == 1)
                {
                    if (ds_log.UpdateData() == 1)
                    {


                        this.DBHelp.Commit();
                        Response.Write("存盘成功");
                    }
                    else
                    {
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("空运植检证跟踪信息保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("空运植检证跟踪信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 税金列表存盘
        protected void ListJjfcxSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_list_jjfcx");
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
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("加急业务单证信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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


        //#region 列表存盘
        protected void HddzKycdzgzSave_Zzjc()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_kycdzgz_zzjc_list");
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
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("空运产地证跟踪信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 列表存盘
        protected void YwkhBeiZhuSave()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_ywkh_beizhu");
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
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("业务考核备注信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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

        //#region 列表存盘 -- 》空运机场植检证
        protected void HddzKyzjzgzSave_Zzjc()
        {
            string userID = AppService.GetUserID();
            string dw_list = Request.Form["dw_list"].ToString();
            SafeDS ds_list = new SafeDS("dw_hddz_kyzjzgz_zzjc_list");
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_log = new SafeDS("dw_s_log_list");
            try
            {
                ds_list.SetChanges(dw_list);
                ds_log.SetChanges(dw_list);
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
                        this.DBHelp.Rollback();
                        this.SetErrorInfo("空运植检证跟踪信息保存失败!\n\n详细错误信息：\n" + ds_log.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("空运植检证跟踪信息保存失败!\n\n详细错误信息：\n" + ds_list.DBError);
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