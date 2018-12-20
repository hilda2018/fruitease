using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Interfaces.Model;
using Interfaces.Factory;
using Dapper;
using System.Collections;

namespace Interfaces.Service
{
    /// <summary>
    /// 基础服务
    /// </summary>
    public class BaseService : AbstractService
    {
        /// <summary>
        /// 获取所有货币信息
        /// </summary>
        /// <returns></returns>
        public static List<t_currencyEntity> GetCurrencyList()
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetSelectListSql(new t_currencyEntity());
                return con.Query<t_currencyEntity>(sql).ToList();
            }
        }

        #region 国家表
        /// <summary>
        /// 根据原产地代码获取国家信息
        /// </summary>
        /// <param name="ycddm"></param>
        /// <returns></returns>
        public static t_countryEntity GetCountrybyYcddm(string ycddm)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "SELECT a.ctr_code,ctr_cname,ctr_ename,b.ctr_area2,b.dqdm,a.ctr_hgcode from t_country a LEFT JOIN t_area2 b on a.ctr_area2=b.ctr_area2 where ctr_hgcode=@ctr_hgcode";
                return con.Query<t_countryEntity>(sql, new { ctr_hgcode = ycddm }).FirstOrDefault();
            }
        }
        /// <summary>
        /// 根据国家名称获取国家对象
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public static t_countryEntity GetCountryModel(string name)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                yw_hddz_ocrvalmapEntity map = GetMap("t_country", name);
                if (map != null)
                {
                    name = map.value;
                }
                name = name.ToLower().Replace(" ", "").Replace(".", "").Replace("&", "");


                string sql = "SELECT a.ctr_code,ctr_cname,ctr_ename,b.ctr_area2,b.dqdm,a.ctr_hgcode from t_country a LEFT JOIN t_area2 b on a.ctr_area2=b.ctr_area2 where  replace(replace(replace(LOWER(a.ctr_ename),' ',''),'.',''),'&','')=@ctr_ename";

                t_countryEntity model = con.Query<t_countryEntity>(sql, new { ctr_ename = name }).FirstOrDefault();

                //if (model == null)//如果库中没有则添加model
                //{
                //    model = new t_countryEntity();
                //    model.ctr_ename = name;
                //    //model.
                //    AddCountry(model);
                //}
                return model;
            }
        }

        /// <summary>
        /// 新建国家
        /// </summary>
        /// <param name="model"></param>
        public static void AddCountry(t_countryEntity model)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetInsertSql(model);

                con.Execute(sql, model);
            }
        }


        /// <summary>
        /// 分页查询往来单位
        /// </summary>
        /// <param name="name"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public static List<t_countryEntity> GetCountryListByPage(string name, int pageIndex, int pageSize, out int count)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string strWhere = "";

                count = 0;
                if (!string.IsNullOrEmpty(name))
                {
                    strWhere = "  ctr_cname like  '%'+@name+'%' or ctr_ename like  '%'+@name+'%'";
                    //countsql += " where (ctr_cname like  '%'+@name+'%' or ctr_ename like  '%'+@name+'%')";
                }
                string sql = SqlFactory.GetPageSelectListSql(new t_countryEntity(), "ctr_code", pageIndex, pageSize, strWhere);
                string countsql = "select count(1) from yw_wldw  " + (string.IsNullOrEmpty(strWhere) ? "" : " where " + strWhere);

                count = con.Query<int>(countsql, new { name = name }).FirstOrDefault();

                return con.Query<t_countryEntity>(sql, new { name = name }).ToList();
            }
        }
        #endregion

        #region 往来单位
        /// <summary>
        /// 获取所有货币信息
        /// </summary>
        /// <returns></returns>
        public static List<yw_wldwEntity> GetWldwListByHddz(yw_hddzEntity model)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetSelectListSql(new yw_wldwEntity());
                sql += " where yw_khbm in(@khbm,@gwgysbm,@jydwbm,@cyrbm)";
                return con.Query<yw_wldwEntity>(sql, model).ToList();
            }
        }

        /// <summary>
        /// 根据名称匹配往来单位
        /// </summary>
        /// <param name="khmc_yw"></param>
        /// <returns></returns>
        public static yw_wldwEntity GetWldwModel(string khmc_yw)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }

                yw_hddz_ocrvalmapEntity map = GetMap("yw_wldw", khmc_yw);
                if (map != null)
                {
                    khmc_yw = map.value;
                }

                khmc_yw = khmc_yw.ToLower().Replace(" ", "").Replace(".", "").Replace("&", "");
                string sql = "select * from yw_wldw where replace(replace(replace(LOWER(khmc_yw),' ',''),'.',''),'&','')=@khmc_yw or replace(replace(replace(LOWER(khmc),' ',''),'.',''),'&','')=@khmc_yw";

                yw_wldwEntity model = con.Query<yw_wldwEntity>(sql, new { khmc_yw = khmc_yw }).FirstOrDefault();

                //if (model == null)//如果库中没有则添加model
                //{
                //    model = new yw_wldwEntity();
                //    model.khmc_yw = khmc_yw;
                //    model.sqr = "4001";
                //    model.yw_khbm = GetNewWldwKhbm(model.sqr);
                //    model.khmc = khmc_yw;
                //    AddWldw(model);
                //}
                return model;
            }
        }
        /// <summary>
        /// 根据客户编码获取往来单位
        /// </summary>
        /// <param name="khmc_yw"></param>
        /// <returns></returns>
        public static yw_wldwEntity GetWldwModelByKhbm(string yw_khbm)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "select * from yw_wldw where yw_khbm=@yw_khbm";

                yw_wldwEntity model = con.Query<yw_wldwEntity>(sql, new { yw_khbm = yw_khbm }).FirstOrDefault();
                return model;
            }
        }
        /// <summary>
        /// 分页查询往来单位
        /// </summary>
        /// <param name="name"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public static List<yw_wldwEntity> GetWldwListByPage(string name, int pageIndex, int pageSize, out int count)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }

                count = 0;
                string strWhere = "";
                if (!string.IsNullOrEmpty(name))
                {
                    strWhere += "  (khmc like  '%'+@name+'%' or khmc_yw like  '%'+@name+'%')";
                    //countsql += " where (khmc like  '%'+@name+'%' or khmc_yw like  '%'+@name+'%')";
                }
                string sql = SqlFactory.GetPageSelectListSql(new yw_wldwEntity(), "khbm", pageIndex, pageSize, strWhere);
                string countsql = "select count(1) from yw_wldw  " + (string.IsNullOrEmpty(strWhere) ? "" : " where " + strWhere);
                count = con.Query<int>(countsql, new { name = name }).FirstOrDefault();
                return con.Query<yw_wldwEntity>(sql, new { name = name }).ToList();
            }
        }



        /// <summary>
        /// 获取新的客户编号
        /// </summary>
        /// <returns></returns>
        public static string GetNewWldwKhbm(string flag)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "SELECT max(yw_khbm) from yw_wldw where yw_khbm like '" + flag + "%'";
                string ywbh = con.Query<string>(sql).FirstOrDefault();
                if (ywbh != null)
                {
                    int num = 0;
                    int.TryParse(ywbh.Replace(flag, ""), out num);
                    return flag + (num + 1).ToString().PadLeft(4, '0');
                }
                else
                {
                    return flag + "0001";
                }
            }
        }
        /// <summary>
        /// 新建往来单位
        /// </summary>
        /// <param name="model"></param>
        public static void AddWldw(yw_wldwEntity model)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetInsertSql(model);

                con.Execute(sql, model);
            }
        }
        /// <summary>
        /// 新建往来单位
        /// </summary>
        /// <param name="khmc_yw">客户英文名称</param>
        public static void AddWldw(string khmc_yw)
        {
            yw_wldwEntity model = new yw_wldwEntity();
            model.yw_khbm = GetNewWldwKhbm("4001");

            model.khmc = khmc_yw;
            model.khmc_yw = khmc_yw;
            model.sqr = "4001";
            AddWldw(model);
        }
        #endregion

        #region ocr值关系表
        /// <summary>
        /// 添加ocr值对应基础数据关系
        /// </summary>
        /// <param name="list"></param>
        public static void AddMapList(List<yw_hddz_ocrvalmapEntity> list)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetInsertSql(new yw_hddz_ocrvalmapEntity());

                con.Execute(sql, list);
            }

        }

        /// <summary>
        /// 根据ocr值和表名查询数据
        /// </summary>
        /// <param name="tablename"></param>
        /// <param name="ocrvalue"></param>
        /// <returns></returns>
        public static yw_hddz_ocrvalmapEntity GetMap(string tablename, string ocrvalue)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "select * from yw_hddz_ocrvalmap where tablename=@tablename and ocrvalue=@ocrvalue";
                return con.Query<yw_hddz_ocrvalmapEntity>(sql, new { tablename = tablename, ocrvalue = ocrvalue }).FirstOrDefault();
            }
        }

        #endregion

        #region 错误日志记录
        /// <summary>
        /// 记录错误日志
        /// </summary>
        /// <param name="list"></param>
        public static void SaveErrorLog(List<s_log> list)
        {
            foreach (var m in list)
            {
                m.cxh = GetCxh(m);
            }
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetInsertSql(new s_log());



                con.Execute(sql, list);
                //return con.Query<t_currencyEntity>(sql).ToList();
            }
        }


        public static int GetCxh(s_log log)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "select  ISNULL ( max(cxh),0)+1 num from s_log where ywbh=@ywbh and jklx =@jklx";



                return con.Query<int>(sql, log).FirstOrDefault();
                //return con.Query<t_currencyEntity>(sql).ToList();
            }
        }
        #endregion

        #region 获取接口字段配置
        /// <summary>
        /// 获取接口字段配置
        /// </summary>
        /// <param name="tableName">表名</param>
        /// <param name="cols">列</param>
        /// <returns>返回集合</returns>
        public static List<interfieldEntity> GetField(string tableName, string[] cols)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }

                DynamicParameters ht = new DynamicParameters();
                ht.Add("@tbname", tableName);
                string strInSql = string.Empty;
                for (int i = 0; i < cols.Length; i++)
                {
                    ht.Add("@fdname" + i, cols[i]);
                    strInSql += "@fdname" + i + ",";
                }

                string sql = " select a.id,b.intername interid ,a.tbname,a.fdname,a.note,a.freshportfdname from interfield a left join interTb b on a.interid=b.id   ";
                sql += " where  a.tbname=@tbname and  a.fdname in (" + strInSql.TrimEnd(',') + ")";

                return con.Query<interfieldEntity>(sql, ht).ToList();
            }
        }

        /// <summary>
        /// 获取接口字段配置
        /// </summary>
        /// <param name="tableName">表名</param>
        /// <param name="cols">列</param>
        /// <returns>返回集合</returns>
        public static List<interfieldEntity> GetFieldByTbName(string tableName)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }

                DynamicParameters ht = new DynamicParameters();
                ht.Add("@tbname", tableName);

                string sql = " select a.id,b.intername interid ,a.tbname,a.fdname,a.note,a.freshportfdname from interfield a left join interTb b on a.interid=b.id   ";
                sql += " where  a.tbname=@tbname and  a.fdname is null";

                return con.Query<interfieldEntity>(sql, ht).ToList();
            }
        }
        #endregion

        #region 根据表名获取接口

        /// <summary>
        /// 获取接口字段配置
        /// </summary>
        /// <param name="tableName">表名</param>
        /// <param name="cols">列</param>
        /// <returns>返回集合</returns>
        public static List<interfieldEntity> GetAllFieldByTbName(string tableName)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }

                DynamicParameters ht = new DynamicParameters();
                ht.Add("@tbname", tableName);

                string sql = @" select fdname,note+fdname note,interid from (select DISTINCT a.fdname,a.note,right('000' + a.interid,3) interid  from interfield a left join interTb b on a.interid=b.id
 where a.tbname =@tbname and a.fdname is not null ) b ORDER BY interid asc";

                return con.Query<interfieldEntity>(sql, ht).ToList();
            }
        }

        #endregion

        #region 失败操作记录

        #region 获取失败记录对象
        /// <summary>
        /// 获取失败记录对象
        /// </summary>
        /// <returns></returns>
        public static s_log_errEntity Getle(string eid)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "select * from s_log_err where eid=@eid";

                s_log_errEntity model = con.Query<s_log_errEntity>(sql, new { eid = eid }).FirstOrDefault();
                return model;
            }
        }
        #endregion

        #region 更新失败操作记录
        /// <summary>
        /// 更新失败操作记录
        /// </summary>
        /// <returns></returns>
        public static void UpdateErrLog(s_log_errEntity model)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetUpdateSql(model, "s_log_err", "eid");

                con.Execute(sql, model);
            }
        }
        #endregion

        #region 保存同步失败的参数
        /// <summary>
        /// 保存同步失败的参数
        /// </summary>
        /// <param name="model"></param>
        public static void SaveErrLog(s_log_errEntity model)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = SqlFactory.GetInsertSql(model);

                con.Execute(sql, model);
            }
        }
        #endregion

        #region 批量取消未同步的任务
        /// <summary>
        /// 
        /// </summary>
        public static void UpdateLogList(string ywbh)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "update s_log_err set sfcg=2 where mainid=@ywbh and sfcg=0 and funname!='DelHddz'";

                con.Execute(sql, new { ywbh = ywbh });
            }
        }

        #endregion

        #endregion
    }
}