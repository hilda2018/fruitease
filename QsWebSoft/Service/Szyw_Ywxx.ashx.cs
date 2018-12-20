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
    public class Szyw_Ywxx : ServiceBase
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
            SqlCommand cmd_sxgsjjl = DBHelp.GetCommand("delete from yw_hddz_sxgsjjl Where ywbh=@ywbh");
            master.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
            cmd_bg.Parameters.Add(new SqlParameter("@ywbh", ywbh));

            cmd_sxgsjjl.Parameters.Add(new SqlParameter("@ywbh", ywbh));

            if (master.ExecuteNonQuery() > 0)
            {
                cmd.ExecuteNonQuery();
                cmd_bg.ExecuteNonQuery();

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

            }
            else
            {
                this.SetErrorInfo("货代单证编号为<" + ywbh + ">,删除失败");
            }
        }



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


        //protected void SetUpdateYwbh()
        //{
        //    string ywbh = this.Request.Form["ywbh"].ToString();   //归集-业务编号
        //    string roles = this.Request.Form["roles"].ToString();

        //    this.DBHelp.BeginTransAction();
        //    try
        //    {


        //        if (!string.IsNullOrEmpty(roles))
        //        {
        //            string[] roleList = roles.Split(new char[] { ';' });
        //            SqlCommand cmd = this.DBHelp.GetCommand("update yw_hddz set ysmxcd = '归并业务编号',gbh_ywbh = @ywbh where ywbh = @roleID");
        //            SqlParameter param1 = new SqlParameter("@ywbh", ywbh);
        //            SqlParameter param2 = new SqlParameter("@roleID", roleList);
        //            cmd.Parameters.Add(param1);
        //            cmd.Parameters.Add(param2);

        //            foreach (string roleID in roleList)
        //            {
        //                if (!string.IsNullOrEmpty(roleID))
        //                {
        //                    param2.Value = roleID;
        //                    cmd.ExecuteNonQuery();
        //                }
        //            }
        //        }
        //        this.DBHelp.Commit();
        //    }
        //    catch (Exception ex)
        //    {
        //        this.SetErrorInfo("业务编号归集时发生错误。\r\n错误信息为：\r\n" + ex.Message);

        //    }
        //}


        protected void SetUpdatekgsj(string cm, DateTime yjkgsj, DateTime sjkgsj, string hcorhbh,string mtxx,string ssbm)
        { 
            this.DBHelp.BeginTransAction();
            try
            {

                SqlCommand cmd = this.DBHelp.GetCommand("update yw_hddz set yjkgsj = (case when datediff(dd,isnull(@yjkgsj,'1900/1/1'),'2000/1/1') >=0 then null else @yjkgsj end),sjkgsj = (case when datediff(dd,isnull(@sjkgsj,'1900/1/1'),'2000/1/1') >=0 then null else @sjkgsj end),mtxx = @mtxx,ssbm =@ssbm from yw_hddz where ywbh like '%SZ%' and cm = @cm and hcorhbh = @hcorhbh; select 'szkgsj'+convert(varchar(35),getdate(),113)+ywbh,'yw_hddz','yjkgsj,sjkgsj,mtxx,ssbm,mcq_rq',ywbh,getdate(),0,0,'DataToFreshPort' from yw_hddz where ywbh like '%SZ%' and cm = @cm and hcorhbh = @hcorhbh;");
                SqlParameter param1 = new SqlParameter("@cm", cm);
                SqlParameter param2 = new SqlParameter("@yjkgsj", yjkgsj);
                SqlParameter param3 = new SqlParameter("@sjkgsj", sjkgsj);
                SqlParameter param4 = new SqlParameter("@hcorhbh", hcorhbh);
                SqlParameter param5 = new SqlParameter("@mtxx", mtxx);
                SqlParameter param6 = new SqlParameter("@ssbm", ssbm);
                cmd.Parameters.Add(param1);
                cmd.Parameters.Add(param2);
                cmd.Parameters.Add(param3);
                cmd.Parameters.Add(param4);
                cmd.Parameters.Add(param5);
                cmd.Parameters.Add(param6);
                cmd.ExecuteNonQuery();                 
                this.DBHelp.Commit();
            }
            catch (Exception ex)
            {
                this.SetErrorInfo("预计靠港时间及实际靠放时间时发生错误。\r\n错误信息为：\r\n" + ex.Message);

            }
        }

        protected void SetUpdatebgdh(string ztdh, string bgdh, DateTime bgsj, string hgdc, DateTime jgwq, DateTime mcq_rq)
        {
            this.DBHelp.BeginTransAction();
            try
            {

                SqlCommand cmd = this.DBHelp.GetCommand("update yw_hddz set bgdh = @bgdh, bgsj = ( case when @bgsj < '2000/01/01' then null else @bgsj end),hgdc = @hgdc, jgwq = ( case when @jgwq < '2000/01/01' then null else @jgwq end),mcq_rq = ( case when @mcq_rq < '2000/01/01' then null else @mcq_rq end) from yw_hddz where ztdh = @ztdh; INSERT INTO s_log_err (eid,tablename,changecols,mainid,cjsj,cscs,sfcg,funname) select 'szbgxx'+convert(varchar(35),getdate(),113)+ywbh,'yw_hddz','bgdh,bgsj,hgdc,jgwq,mcq_rq',ywbh,getdate(),0,0,'DataToFreshPort' from yw_hddz where ztdh = @ztdh;");
                SqlParameter param1 = new SqlParameter("@bgdh", bgdh);
                SqlParameter param2 = new SqlParameter("@ztdh", ztdh);
                SqlParameter param3 = new SqlParameter("@bgsj", bgsj);
                SqlParameter param4 = new SqlParameter("@hgdc", hgdc);            
                SqlParameter param5 = new SqlParameter("@jgwq", jgwq);
                SqlParameter param6 = new SqlParameter("@mcq_rq", mcq_rq);
                cmd.Parameters.Add(param1);
                cmd.Parameters.Add(param2);
                cmd.Parameters.Add(param3);
                cmd.Parameters.Add(param4);
                cmd.Parameters.Add(param5);
                cmd.Parameters.Add(param6);
                cmd.ExecuteNonQuery();
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
            string dw_log = Request.Form["dw_log"].ToString();
            SafeDS ds_master = new SafeDS("dw_ywxx_edit");
            SafeDS ds_jzxxx = new SafeDS("dw_ywxx_edit_jzxxx");
            SafeDS ds_spxx = new SafeDS("dw_ywxx_edit_spxx");
            SafeDS ds_log = new SafeDS("dw_s_log_list");

            try
            {

                ds_master.SetChanges(dw_master);
                ds_jzxxx.SetChanges(dw_jzxxx);
                ds_spxx.SetChanges(dw_spxx);
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

                    for (int row = 1; row <= ds_log.RowCount; row++)
                    {
                        ds_log.SetRowStatus(row, Sybase.DataWindow.DataBuffer.Primary, Sybase.DataWindow.RowStatus.New);
                    }
                };

                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。

                if (ywbh == null || ywbh == "")
                {
                    if (ds_master.GetRowStatus(1, Sybase.DataWindow.DataBuffer.Primary) == Sybase.DataWindow.RowStatus.NewAndModified)
                    {
                          
                        var Dqdm = ds_master.GetItemString(1, "dqdm");
                        var year = System.DateTime.Now.ToShortDateString().Substring(2, 2);

                        SqlCommand cmd = this.DBHelp.GetCommand("select max(substring( ywbh,5,4)) from yw_hddz where  substring(ywbh,1,2) = '" + year + "' and dqdm = '" + Dqdm + "' ");
                        object value = cmd.ExecuteScalar();

                        if (Convert.IsDBNull(value) || value == null)
                        {
                            ywbh = year + Dqdm + "0001";
                        }
                        else
                        {
                            ywbh = year + Dqdm + String.Format("{0:0000}", (long.Parse((string)value) + 1));
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


                for (int row = 1; row <= ds_log.RowCount; row++)
                {
                    if (ds_log.GetItemString(row, "funname") != "DelHddz")
                    {
                        ds_log.SetItemString(row, "mainid", ywbh);
                    }
                }
                 
                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_jzxxx.SetTransaction(this.DBHelp.TransAction);
                ds_spxx.SetTransaction(this.DBHelp.TransAction);
                ds_log.SetTransaction(this.DBHelp.TransAction);

                this.DBHelp.BeginTransAction();

                if (ds_master.UpdateData() == 1)
                {
                    if (ds_jzxxx.UpdateData() == 1)
                    {
                        ds_spxx.UpdateData();  
                        

                        if (ds_log.UpdateData() == 1)
                        {
                            this.DBHelp.Commit();
                            var cm = ds_master.GetItemString(1, "cm");
                            var yjkgsj = ds_master.GetItemDateTime(1, "yjkgsj");
                            var sjkgsj = ds_master.GetItemDateTime(1, "sjkgsj");
                            var hcorhbh = ds_master.GetItemString(1, "hcorhbh");
                            var mtxx = ds_master.GetItemString(1, "mtxx");
                            var ssbm = ds_master.GetItemString(1, "ssbm");
                            var bgdh = ds_master.GetItemString(1, "bgdh");
                            var ztdh = ds_master.GetItemString(1, "ztdh");
                            var bgsj = ds_master.GetItemDate(1, "bgsj");
                            var jgwq = ds_master.GetItemDateTime(1, "jgwq");
                            var hgdc = ds_master.GetItemString(1, "hgdc");
                            var mcq_rq = ds_master.GetItemDateTime(1, "mcq_rq");
                            
                            if (cm.Length > 0 && hcorhbh.Length > 0)
                            {
                                if (mtxx == null) {
                                    mtxx = "";
                                };
                                if (ssbm == null)
                                {
                                    ssbm = "";
                                };
                                 SetUpdatekgsj(cm, yjkgsj, sjkgsj, hcorhbh,mtxx,ssbm);
                            };

                            if(ztdh.Length > 0){
                                SetUpdatebgdh(ztdh, bgdh, bgsj, hgdc, jgwq, mcq_rq);
                            }
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
            }
        }

    }
}