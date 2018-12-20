using System;
using System.Collections.Generic;
using System.Linq;
using Interfaces.Model;
using Dapper;
using Interfaces.Factory;
using System.Data;
using System.Text;
using System.Collections;

namespace Interfaces.Service
{
    public class FenceService : AbstractService
    {
        #region 获取国内采购商
        public List<yw_wldwEntity> getGncgsList()
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                    con.Open();

                string sql = @"select yw_khbm,khjc,khmc from yw_wldw  where len(khmc) > 0 ";
                return con.Query<yw_wldwEntity>(sql).ToList();
            }
        }
        #endregion

        #region 收货地址查询
        /// <summary>
        /// 查询收货地址表
        /// </summary>
        /// <returns></returns>
        public List<yw_wldw_gnkh_shdzEntity> getShdzList(string khmc, string khbm, string shdz, int rows, int pageIndex, out int count)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                    con.Open();
                string strWhere = "  where 1=1 ";
                DynamicParameters Parameters = new DynamicParameters();
                if (!string.IsNullOrEmpty(khbm))
                {
                    strWhere += " and a.yw_khbm = @khbm";
                    Parameters.Add("@khbm", khbm);
                }

                if (!string.IsNullOrEmpty(khmc))
                {
                    strWhere += " and b.khjc like @khmc";
                    Parameters.Add("@khmc", "%" + khmc + "%");
                }

                if (!string.IsNullOrEmpty(shdz))
                {
                    strWhere += " and a.shdz like @shdz";
                    Parameters.Add("@shdz", "%" + shdz + "%");
                }
                Parameters.Add("@pageIndex", pageIndex);
                string sql = @" select top " + rows + @" * from  (select  row_number() over(order by a.yw_khbm,a.cxh) as rownumber, a.*,b.khjc khmc 
                    from yw_wldw_gnkh_shdz a join yw_wldw b on a.yw_khbm=b.yw_khbm"
+ strWhere + ") a where rownumber > @pageIndex  ";
                string countSql = "select count(1) from yw_wldw_gnkh_shdz a join yw_wldw b on a.yw_khbm=b.yw_khbm " + strWhere;
                count = con.Query<int>(countSql, Parameters).FirstOrDefault();
                return con.Query<yw_wldw_gnkh_shdzEntity>(sql, Parameters).ToList();
            }
        }
        #endregion


        #region 批量同步专用
        /// <summary>
        /// 查询收货地址表
        /// </summary>
        /// <returns></returns>
        public List<yw_wldw_gnkh_shdzEntity> getKJWShdzList()
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                    con.Open();


                string sql = @"select * from yw_wldw_gnkh_shdz where jd is null or wd is null ";
                return con.Query<yw_wldw_gnkh_shdzEntity>(sql).ToList();
            }
        }
        #endregion

        #region 新增收货地址
        public void addShdz(yw_wldw_gnkh_shdzEntity model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                model.cxh = getNewCxh(model.yw_khbm).ToString();
                model.lrrq = DateTime.Now;
                string sql = " insert into yw_wldw_gnkh_shdz  (yw_khbm,cxh,shdz,dz_sf,dz_dq,dz_lm,sfgx,scmc)values(@yw_khbm,@cxh,@shdz,@dz_sf,@dz_dq,@dz_lm,@sfgx,@scmc) ";
                conn.Execute(sql, model);
            }
        }
        /// <summary>
        /// 修改基本信息
        /// </summary>
        /// <param name="model"></param>
        public void updateBaseShdz(yw_wldw_gnkh_shdzEntity model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = " update yw_wldw_gnkh_shdz set shdz=@shdz,dz_sf=@dz_sf,dz_dq=@dz_dq,dz_lm=@dz_lm,sfgx=@sfgx,scmc=@scmc where yw_khbm=@yw_khbm  and cxh=@cxh ";
                conn.Execute(sql, model);
            }
        }

        public void delShdz(string yw_khbm, string cxh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();

                string sql = " delete from  yw_wldw_gnkh_shdz  where yw_khbm=@yw_khbm  and cxh=@cxh ";
                conn.Execute(sql, new { yw_khbm = yw_khbm, cxh = cxh });
            }
        }

        public int getNewCxh(string khbm)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                    con.Open();

                string sql = @"select  isnull(max(cxh),0)+1  from yw_wldw_gnkh_shdz where yw_khbm=@khbm";
                return con.Query<int>(sql, new { khbm = khbm }).FirstOrDefault();
            }
        }
        #endregion

        #region 修改收货地址电子围栏信息
        public void updateShdz(yw_wldw_gnkh_shdzEntity model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = " update yw_wldw_gnkh_shdz set jd=@jd,wd=@wd,fw=@fw,type=@type,points=@points where yw_khbm=@yw_khbm  and cxh=@cxh ";
                conn.Execute(sql, model);
            }
        }
        #endregion

        #region 修改物流跟踪车辆进出电子围栏时间
        public void UpdateWlgzCmd(yw_hddz_wlgz_cmdEntity model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                StringBuilder sql = new StringBuilder();
                sql.Append("update yw_hddz_wlgz_cmd set ");
                string strWhere = "";
                if (model.jrdzwlsj != null)
                {
                    sql.Append("jrdzwlsj =@jrdzwlsj,jdzwlsj_lrsj=@jdzwlsj_lrsj,jdzwlsj_czry='北斗' ");
                    strWhere = " and jrdzwlsj is null";
                }
                else if (model.cdzwlsj != null)
                {
                    sql.Append("cdzwlsj =@cdzwlsj,cdzwlsj_lrsj=@cdzwlsj_lrsj,cdzwlsj_czry='北斗' ");
                    strWhere = " and cdzwlsj is null";
                }
                else
                {
                    throw new Exception("进出电子围栏时间必须有一个不能为空");
                }
                sql.Append(" where rwbh=@rwbh and wlxh=@wlxh");
                sql.Append(strWhere);
                conn.Execute(sql.ToString(), model);

                conn.Execute("p_hywlgz", new { ywbh = model.ywbh, cxh = model.hddz_cxh }, null, null, CommandType.StoredProcedure);
                s_log_errEntity log = new s_log_errEntity();
                log.eid = "dzwl_" + Guid.NewGuid().ToString();
                log.cjsj = DateTime.Now;
                log.cscs = 0;
                log.funname = "DataToFreshPort";
                log.mainid = model.ywbh;
                log.parameters = model.hddz_cxh.ToString();
                log.changecols = "gq_sj,gq_cp,gq_sjlxfs,gq_rwbh,gq_c_rwbh,hgcyd_sj,hgcyd_cp,hgcyd_sjlxfs,hgcyd_rwbh,hgcyd_c_rwbh,jyd_sj,jyd_cp,jyd_sjlxfs,jyd_rwbh,jyd_c_rwbh,"
                + "sc_sj,sc_cp,sc_sjlxfs,sc_rwbh,sc_c_rwbh,zjfscwld_sj,zjfscwld_cp,zjfscwld_sjlxfs,zjfscwld_rwbh,zjfscwld_c_rwbh,jschfscwld_sj,jschfscwld_cp,"
                + "jschfscwld_sjlxfs,jschfscwld_rwbh,jschfscwld_c_rwbh,fscwld3_sj,fscwld3_cp,fscwld3_sjlxfs,fscwld3_rwbh,fscwld3_c_rwbh,fscwld4_sj,fscwld4_cp,"
                + "fscwld4_sjlxfs,fscwld4_rwbh,fscwld4_c_rwbh,dc_sj,dc_cp,dc_sjlxfs,dc_rwbh,cgqsj,rscsj,djydsj,tgjysj,cscsj,hdcsj,fscwl_ddsj,fscwl_lksj,fscwl2_ddsj,"
                + "fscwl2_lksj,fscwl3_ddsj,fscwl3_lksj,fscwl4_ddsj,fscwl4_lksj";
                log.sfcg = 0;
                log.tablename = "yw_hddz_jzxxx";

                s_log_errEntity log1 = new s_log_errEntity();
                log1.eid = "dzwl_" + Guid.NewGuid().ToString();
                log1.cjsj = DateTime.Now;
                log1.cscs = 0;
                log1.funname = "DataToFreshPort";
                log1.mainid = model.ywbh;
                log1.parameters = model.hddz_cxh.ToString();
                log1.changecols = "";
                log1.sfcg = 0;
                log1.tablename = "yw_hddz_wlgz";
                List<s_log_errEntity> list = new List<s_log_errEntity>();
                list.Add(log);
                list.Add(log1);
                string logsql = SqlFactory.GetInsertSql(log);
                conn.Execute(logsql, list);

            }
        }

        public void UpdateWlgzCmdOutPort(yw_hddz_wlgz_cmdEntity model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                StringBuilder sql = new StringBuilder();
                sql.Append("update yw_hddz_wlgz_cmd set ");
                sql.Append(" cdzwlsj_bd  =@cdzwlsj ");
                sql.Append(" where rwbh=@rwbh and wlxh=@wlxh");
                conn.Execute(sql.ToString(), model);
            }
        }
        #endregion

        #region 根据任务编号获取任务
        public yw_hddz_wlgzEntity getWlgzByRwbh(string rwbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string sql = @"select  * from yw_hddz_wlgz where rwbh = @rwbh";
                return conn.Query<yw_hddz_wlgzEntity>(sql, new { rwbh = rwbh }).FirstOrDefault();
            }
        }

        public yw_hddz_wlgzEntity getWlgzByDzwlbh(string dzwlbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string sql = @"select  * from yw_hddz_wlgz where dzwlbh = @dzwlbh";
                return conn.Query<yw_hddz_wlgzEntity>(sql, new { dzwlbh = dzwlbh }).FirstOrDefault();
            }
        }

        public List<yw_hddz_wlgz_cmdEntity> getWlgzcmdByRwbh(string rwbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string sql = @"select * from yw_hddz_wlgz_cmd where rwbh = @rwbh order by wlxh asc";
                return conn.Query<yw_hddz_wlgz_cmdEntity>(sql, new { rwbh = rwbh }).ToList();
            }
        }
        #endregion


        #region 添加异常日志

        public void insertErrLog(s_log_fence model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();

                string sql = SqlFactory.GetInsertSql(model);
                conn.Execute(sql, model);

                s_task_exception task = conn.Query<s_task_exception>(" select * from s_task_exception where rwbh=@rwbh and type=@type", model).FirstOrDefault();

                if (task == null)//新增
                {
                    string sql1 = SqlFactory.GetInsertSql(model, "s_task_exception");
                    conn.Execute(sql1, model);
                }
                else
                {
                    task.des = model.des;
                    task.dz_xx = model.dz_xx;
                    task.fw = model.fw;
                    task.cjsj = model.cjsj;
                    task.state = model.state;
                    task.wd = model.wd;
                    task.jd = model.jd;
                    task.wlxh = model.wlxh;
                    task.status = 0;
                    string sql1 = SqlFactory.GetUpdateSql(task, "s_task_exception", "id");
                    conn.Execute(sql1, task);
                }

            }
        }
        #endregion

        #region 更新异常状态

        public void updateTaskExcptionStatus(string id, int status)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();

                string sql = " update s_task_exception set status=@status where id=@id";
                conn.Execute(sql, new { status = status, id = id });

            }
        }

        public void updateTaskExcptionStatusByRwbh(string taskNo, int status)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();

                string sql = " update s_task_exception set status=@status where rwbh=@taskNo";
                conn.Execute(sql, new { status = status, taskNo = taskNo });

            }
        }

        #endregion

        #region 查询异常日志
        /// <summary>
        /// 查询收货地址表
        /// </summary>
        /// <returns></returns>
        public List<s_task_exception> getTaskExcList(int rows, int pageIndex, string kssj, string jssj, string status, string query, out int count)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == ConnectionState.Closed)
                    con.Open();
                string strWhere = "  where 1=1 ";
                DynamicParameters Parameters = new DynamicParameters();
                if (!string.IsNullOrEmpty(kssj))
                {
                    strWhere += " and cjsj >= @kssj";
                    Parameters.Add("@kssj", kssj);
                }

                if (!string.IsNullOrEmpty(jssj))
                {
                    strWhere += " and cjsj <= @jssj";
                    Parameters.Add("@jssj", jssj + " 23:59:59");
                }
                if (!string.IsNullOrEmpty(status))
                {
                    strWhere += " and status=@status";
                    Parameters.Add("@status", status);
                }
                if (!string.IsNullOrEmpty(query))
                {
                    strWhere += " and (rwbh like @query  or cph like @query )";
                    Parameters.Add("@query", "%" + query + "%");
                }

                Parameters.Add("@pageIndex", pageIndex);
                string sql = @" select top " + rows + @" * from  (select  row_number() over(order by cjsj desc) as rownumber,* 
                    from s_task_exception "
+ strWhere + ") a where rownumber > @pageIndex  ";
                string countSql = "select count(1) from s_task_exception  " + strWhere;
                count = con.Query<int>(countSql, Parameters).FirstOrDefault();
                return con.Query<s_task_exception>(sql, Parameters).ToList();
            }
        }
        #endregion

        #region 根据任务查询日志
        /// <summary>
        /// 查询收货地址表
        /// </summary>
        /// <returns></returns>
        public List<s_log_fence> getFenceLogList(string rwbh)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                    con.Open();

                string sql = @" select * from s_log_fence where rwbh=@rwbh ";
                return con.Query<s_log_fence>(sql, new { rwbh = rwbh }).ToList();
            }
        }
        #endregion


        #region 获取批量清理三天前创建异常任务
        public List<s_task_exception> getClearTaskExcList()
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == ConnectionState.Closed)
                    con.Open();
                string sql = @"select a.* from  s_task_exception  a left join yw_hddz_wlgz b  on a.rwbh =b.dzwlbh
where b.rwkssj < getdate()-3  and a.status=0 order by b.rwkssj desc";
                return con.Query<s_task_exception>(sql).ToList();
            }
        }
        #endregion


        #region 监控任务记录日志
        /// <summary>
        ///  监控任务记录日志
        /// </summary>
        /// <param name="log"></param>
        public void addfencelog(s_fence_log log)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();

                log.id = Guid.NewGuid().ToString();
                string sql = SqlFactory.GetInsertSql(log);
                conn.Execute(sql, log);
            }
        }
        #endregion

        #region 修改任务状态
        /// <summary>
        ///  修改任务状态
        /// </summary>
        /// <param name="log"></param>
        public void updatewlgzstatus(string rwbh,int status)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();

               
                string sql = " update yw_hddz_wlgz set status=@status where rwbh=@rwbh";
                conn.Execute(sql, new { rwbh = rwbh,status=status});
            }
        }
        #endregion
    }
}
