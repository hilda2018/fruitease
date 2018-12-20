using System;
using System.Collections.Generic;
using System.Linq;
using Interfaces.Model;
using Dapper;
using Interfaces.Factory;
using System.Data;



namespace Interfaces.Service
{
    public class MapService : AbstractService
    {
        #region 插入地图查询日志

        /// <summary>
        /// 插入地图查询日志
        /// </summary>
        public bool InsertMapLog(string userId, string token, string cph, string msg = null)
        {
            s_log_mapEntity model = new s_log_mapEntity();
            model.logid = Guid.NewGuid().ToString();
            model.userId = userId;
            model.token = token;
            model.cph = cph;
            model.msg = msg;
            model.cjsj = DateTime.Now;
            return InsertMapLog(model);
        }

        /// <summary>
        /// 插入地图查询日志
        /// </summary>
        public bool InsertMapLog(s_log_mapEntity model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = SqlFactory.GetInsertSql(model);
                return conn.Execute(sql, model) != 0;
            }
        }

        #endregion

        #region 查询车辆列表


        public List<CarMapView> getCarMapList(string from, string to, string zt, string gl, string pc,string jdr, string jyddsdsc_xs, string mdd, string kh, int pageSize, int page, string sort, string order)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string strWhere = "";
                strWhere += " htjhthsj>= '2017.10.01'";
               
                if (!string.IsNullOrEmpty(zt))
                {
                    if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null and jyd_bz = 'Y'  and isnull(sdsj,lkjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null   and  (case when jyd_bz = 'Y' then lkjydsj else ' ' end) is not  null  and sdsj is null  ";
                    }
                    if (zt == "YSD")
                    {
                        if (!string.IsNullOrEmpty(from))
                        {
                            strWhere += " and datediff(dd,sdsj,@from) <=0 ";
                        }
                        if (!string.IsNullOrEmpty(to))
                        {
                            strWhere += " and datediff(dd,sdsj,@to) >=0  ";
                        }
                    }
                    if (zt == "QB")
                    {
                        strWhere += " and (( datediff(dd,htjhthsj,@to) >=0  and   sdsj is null ) or ( datediff(dd,sdsj,@from) <=0 and datediff(dd,sdsj,@to) >=0 ) ) ";
                    }
                }
                if (!string.IsNullOrEmpty(gl))
                {
                    strWhere += " and (jzxh like '%'+@gl+'%' or ztdh like '%'+@gl+'%' or cph like '%'+@gl+'%'  or xhgqjc like '%'+@gl+'%' or jyd_jc like '%'+@gl+'%'  or jdrjc like '%'+@gl+'%'  or khjc like '%'+@gl+'%' )";
                }

                if (!string.IsNullOrEmpty(pc))
                {
                    if (pc == "WPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) = '' ";
                    }
                    if (pc == "YPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) <> '' ";
                    }
                }
                if (!string.IsNullOrEmpty(jdr))
                {
                    if (jdr != "QB")
                    {
                        strWhere += " and  jdrjc like '%'+@jdr+'%' ";
                    }

                }

                if (!string.IsNullOrEmpty(jyddsdsc_xs) && jyddsdsc_xs != "" && jyddsdsc_xs != "0")
                {

                    strWhere += " and  jyddsdsc_xs >= @jyddsdsc_xs ";
                    
                }

                if (!string.IsNullOrEmpty(mdd) && mdd != "")
                {

                    strWhere += " and  mdd like '%'+@mdd+'%' ";

                }

                if (!string.IsNullOrEmpty(kh) && kh != "")
                {

                    strWhere += " and ( jdrjc like '%'+@kh+'%' or  khjc like '%'+@kh+'%') ";

                }

                string orderBy = "htjhthsj";

                if (sort == null || sort == "") {
                    sort = "htjhthsj";
                }
                orderBy = sort;
                if (order == "desc")
                    orderBy += " desc ";
                string sql = @"  select rownumber,rwbh,rwzt,cph,sfybd,bdsbh,jzxh,ztdh,xhgqjc,jyd_jc,mdd,zt, htjhthsj = convert(varchar(50),htjhthsj,111)+ isnull(htjhthsj_sjd,''),cgqsj,xccy,djydsj,kgsj,tgjysj,lkjydsj,sdsj,gqdjydsc,jyddsdsc ,gqdsdsc,jdrjc,khjc,startdate,enddate
                  from ( SELECT   row_number() over( order by " + orderBy + @") as rownumber,rwzt,rwbh, cph,sfybd,bdsbh,jzxh,ztdh,xhgqjc,jyd_jc,mdd,zt,htjhthsj,htjhthsj_sjd,cgqsj,xccy,djydsj,kgsj,tgjysj,lkjydsj,sdsj,
                  gqdjydsc,jyddsdsc,gqdsdsc,jdrjc,khjc,startdate,enddate 
                FROM  yw_hddz_hydt
                where  " + strWhere + @") t
                where  rownumber >@startIndex and rownumber <=@endIndex";

              return conn.Query<CarMapView>(sql, new
                {
                    from = from,
                    to = to,
                    gl = gl,
                    jdr=jdr,
                    jyddsdsc_xs = jyddsdsc_xs,
                    mdd = mdd,
                    kh = kh,
                    startIndex = pageSize * (page - 1),
                    endIndex = pageSize * page
                }).ToList();
            }
        }

        public List<CarMapView> getCarControlList(string from, string to, string zt, string gl, string pc, string jyddsdsc_xs, string mdd, string kh, int pageSize, int page, string sort, string order)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string strWhere = "";
                strWhere += " htjhthsj>= '2017.10.01'";

                if (!string.IsNullOrEmpty(zt))
                {
                    if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null and jyd_bz = 'Y'  and isnull(sdsj,lkjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null   and  (case when jyd_bz = 'Y' then lkjydsj else ' ' end) is not  null  and sdsj is null  ";
                    }
                    if (zt == "YSD")
                    {
                        if (!string.IsNullOrEmpty(from))
                        {
                            strWhere += " and datediff(dd,sdsj,@from) <=0 ";
                        }
                        if (!string.IsNullOrEmpty(to))
                        {
                            strWhere += " and datediff(dd,sdsj,@to) >=0  ";
                        }
                    }
                    if (zt == "QB")
                    {
                        strWhere += " and (( datediff(dd,htjhthsj,@to) >=0  and   sdsj is null ) or ( datediff(dd,sdsj,@from) <=0 and datediff(dd,sdsj,@to) >=0 ) ) ";
                    }
                }
                if (!string.IsNullOrEmpty(gl))
                {
                    strWhere += " and (jzxh like '%'+@gl+'%' or ztdh like '%'+@gl+'%' or cph like '%'+@gl+'%'  or xhgqjc like '%'+@gl+'%' or jyd_jc like '%'+@gl+'%'  or jdrjc like '%'+@gl+'%'  or khjc like '%'+@gl+'%' )";
                }

                if (!string.IsNullOrEmpty(pc))
                {
                    if (pc == "WPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) = '' ";
                    }
                    if (pc == "YPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) <> '' ";
                    }
                }

                if (!string.IsNullOrEmpty(jyddsdsc_xs) && jyddsdsc_xs != "" && jyddsdsc_xs != "0")
                {

                    strWhere += " and  jyddsdsc_xs >= @jyddsdsc_xs ";

                }

                if (!string.IsNullOrEmpty(mdd) && mdd != "")
                {

                    strWhere += " and  mdd like '%'+@mdd+'%' ";

                }

                if (!string.IsNullOrEmpty(kh) && kh != "")
                {

                    strWhere += " and ( jdrjc like '%'+@kh+'%' or  khjc like '%'+@kh+'%') ";

                }

                string orderBy = "htjhthsj";

                if (sort == null || sort == "")
                {
                    sort = "htjhthsj";
                }
                orderBy = sort;
                if (order == "desc")
                    orderBy += " desc ";
                string sql = @"  select rownumber,cph,sfybd,bdsbh,jzxh,ztdh,xhgqjc,jyd_jc,mdd,zt, htjhthsj = convert(varchar(50),htjhthsj,111)+ isnull(htjhthsj_sjd,''),cgqsj,xccy,djydsj,kgsj,tgjysj,lkjydsj,sdsj,gqdjydsc,jyddsdsc ,gqdsdsc,jdrjc,khjc,startdate,enddate
                  from ( SELECT   row_number() over( order by " + orderBy + @") as rownumber, cph,sfybd,bdsbh,jzxh,ztdh,xhgqjc,jyd_jc,mdd,zt,htjhthsj,htjhthsj_sjd,cgqsj,xccy,djydsj,kgsj,tgjysj,lkjydsj,sdsj,
                  gqdjydsc,jyddsdsc,gqdsdsc,jdrjc,khjc,startdate,enddate 
                FROM  yw_hddz_hydt
                where  " + strWhere + @" and isnull(startdate,'1900/01/01')>'1900/01/01') t
                where  rownumber >@startIndex and rownumber <=@endIndex and isnull(startdate,'1900/01/01')>'1900/01/01'";

                return conn.Query<CarMapView>(sql, new
                {
                    from = from,
                    to = to,
                    gl = gl,
                    jyddsdsc_xs = jyddsdsc_xs,
                    mdd = mdd,
                    kh = kh,
                    startIndex = pageSize * (page - 1),
                    endIndex = pageSize * page
                }).ToList();
            }
        }

        public int getCarMapCount(string from, string to, string zt, string gl, string pc,string jdr, string jyddsdsc_xs, string mdd, string kh)

        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string strWhere = "";
               
                strWhere += " htjhthsj>= '2017.10.01'";

                if (!string.IsNullOrEmpty(zt))
                {
                    if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null and jyd_bz = 'Y'  and isnull(sdsj,lkjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null   and  (case when jyd_bz = 'Y' then lkjydsj else ' ' end) is not  null  and sdsj is null  ";
                    }
                    if (zt == "YSD")
                    {
                        if (!string.IsNullOrEmpty(from))
                        {
                            strWhere += " and datediff(dd,sdsj,@from) <=0 ";
                        }
                        if (!string.IsNullOrEmpty(to))
                        {
                            strWhere += " and datediff(dd,sdsj,@to) >=0  ";
                        }
                    }
                    if (zt == "QB")
                    {
                        strWhere += " and (( datediff(dd,htjhthsj,@to) >=0  and   sdsj is null ) or ( datediff(dd,sdsj,@from) <=0 and datediff(dd,sdsj,@to) >=0 ) ) ";
                    }
                }
                if (!string.IsNullOrEmpty(gl))
                {
                    strWhere += " and (jzxh like '%'+@gl+'%' or ztdh like '%'+@gl+'%' or cph like '%'+@gl+'%'  or xhgqjc like '%'+@gl+'%' or jyd_jc like '%'+@gl+'%'  or jdrjc like '%'+@gl+'%'  or khjc like '%'+@gl+'%' )";
                }

                if (!string.IsNullOrEmpty(pc))
                {
                    if (pc == "WPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) = '' ";
                    }
                    if (pc == "YPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) <> '' ";
                    }
                }

                if (!string.IsNullOrEmpty(jdr))
                {
                    if (jdr != "QB")
                    {
                        strWhere += " and  jdrjc like '%'+@jdr+'%' ";
                    }

                }


                if (!string.IsNullOrEmpty(jyddsdsc_xs) && jyddsdsc_xs != "" && jyddsdsc_xs != "0")
                {

                    strWhere += " and  jyddsdsc_xs >= @jyddsdsc_xs ";

                }

                if (!string.IsNullOrEmpty(mdd) && mdd != "")
                {

                    strWhere += " and  mdd like '%'+@mdd+'%' ";

                }

                if (!string.IsNullOrEmpty(kh) && kh != "")
                {

                    strWhere += " and ( jdrjc like '%'+@kh+'%' or  khjc like '%'+@kh+'%') ";

                }

                string sql = @"SELECT count(1) FROM   yw_hddz_hydt where   " + strWhere + @"";

                return conn.Query<int>(sql, new
                {
                    from = from,
                    to = to,
                    gl = gl,
                    jdr = jdr,                     
                    jyddsdsc_xs = jyddsdsc_xs,
                     mdd = mdd,
                    kh = kh
                }).FirstOrDefault();
            }
        }

        public int getCarControlCount(string from, string to, string zt, string gl, string pc, string jyddsdsc_xs, string mdd, string kh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string strWhere = "";

                strWhere += " htjhthsj>= '2017.10.01'";

                if (!string.IsNullOrEmpty(zt))
                {
                    if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null and jyd_bz = 'Y'  and isnull(sdsj,lkjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,isnull(lkjydsj,isnull(djydsj,cgqsj))) is not null   and  (case when jyd_bz = 'Y' then lkjydsj else ' ' end) is not  null  and sdsj is null  ";
                    }
                    if (zt == "YSD")
                    {
                        if (!string.IsNullOrEmpty(from))
                        {
                            strWhere += " and datediff(dd,sdsj,@from) <=0 ";
                        }
                        if (!string.IsNullOrEmpty(to))
                        {
                            strWhere += " and datediff(dd,sdsj,@to) >=0  ";
                        }
                    }
                    if (zt == "QB")
                    {
                        strWhere += " and (( datediff(dd,htjhthsj,@to) >=0  and   sdsj is null ) or ( datediff(dd,sdsj,@from) <=0 and datediff(dd,sdsj,@to) >=0 ) ) ";
                    }
                }
                if (!string.IsNullOrEmpty(gl))
                {
                    strWhere += " and (jzxh like '%'+@gl+'%' or ztdh like '%'+@gl+'%' or cph like '%'+@gl+'%'  or xhgqjc like '%'+@gl+'%' or jyd_jc like '%'+@gl+'%' )";
                }

                if (!string.IsNullOrEmpty(pc))
                {
                    if (pc == "WPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) = '' ";
                    }
                    if (pc == "YPC")
                    {
                        strWhere += " and  rtrim(isnull(cph,'')) <> '' ";
                    }
                }

                if (!string.IsNullOrEmpty(jyddsdsc_xs) && jyddsdsc_xs != "" && jyddsdsc_xs != "0")
                {

                    strWhere += " and  jyddsdsc_xs >= @jyddsdsc_xs ";

                }

                if (!string.IsNullOrEmpty(mdd) && mdd != "")
                {

                    strWhere += " and  mdd like '%'+@mdd+'%' ";

                }

                if (!string.IsNullOrEmpty(kh) && kh != "")
                {

                    strWhere += " and ( jdrjc like '%'+@kh+'%' or  khjc like '%'+@kh+'%') ";

                }

                string sql = @"SELECT count(1) FROM   yw_hddz_hydt where   " + strWhere + @" and isnull(startdate,'1900/01/01')>'1900/01/01'";

                return conn.Query<int>(sql, new
                {
                    from = from,
                    to = to,
                    gl = gl,
                    jyddsdsc_xs = jyddsdsc_xs,
                    mdd = mdd,
                    kh = kh
                }).FirstOrDefault();
            }
        }
        #endregion

        #region 地图查询记录
        /// <summary>
        /// 获取地图查询记录 前20条
        /// </summary>
        /// <returns></returns>
        public List<s_log_mapEntity> getCarMapHistory(string userId)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string sql = @"select top 20 * from s_log_map where userId=@userId order by cjsj desc";
                return conn.Query<s_log_mapEntity>(sql, new { userId = userId }).ToList();
            }
        }
        #endregion

        #region 更新北斗设备维护表
        /// <summary>
        /// 
        /// </summary>
        public bool UpdateBdsbwh(List<yw_hddz_bdsbwhEntity> list)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = SqlFactory.GetUpdateSql(new yw_hddz_bdsbwhEntity(), "yw_hddz_bdsbwh", "bdyssbh");
                return conn.Execute(sql, list) != 0;
            }
        }
        #endregion
    }
}
