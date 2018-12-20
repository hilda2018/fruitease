using System;
using System.Collections.Generic;
using System.Linq;
using Interfaces.Model;
using Dapper;
using Interfaces.Factory;
using System.Data;



namespace Interfaces.Service
{
    public class KyMapService : AbstractService
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


        public List<KyCarMapView> getCarMapList(string from, string to, string zt, string gl, string pc, string jyddsdsc_xs, string Dlwtf, string mdd,string jdrhkh, int pageSize, int page, string sort, string order)

        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string strWhere = "";
                strWhere += " (cdbm = @Dlwtf or jdrbm = @Dlwtf or  isnull(@Dlwtf,'') = '') and htjhthsj>= '2017.10.01'";
               
                if (!string.IsNullOrEmpty(zt))
                {
                    if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is not null and jyd_bz = 'Y'  and isnull(sdsj,cjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is not null   and  (case when jyd_bz = 'Y' then cjydsj else ' ' end) is not  null  and sdsj is null  ";
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

                    /*
                    if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,(case when jyd_bz = 'Y' then isnull(cjydsj,isnull(djydsj,cgqsj)) else isnull(djydsj,cgqsj) end )) is not null and  isnull(sdsj,cjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,cjydsj)  is not null and sdsj is null ";
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
                    }*/
                }
                if (!string.IsNullOrEmpty(gl))
                {
                    strWhere += " and (cph like '%'+@gl+'%'  or ztdh like '%'+@gl+'%'  or xhgqjc like '%'+@gl+'%' or ywbh like '%'+@gl+'%' or khjc like '%'+@gl+'%' or hth like '%'+@gl+'%'  or cyr like '%'+@gl+'%' or hz_spmc like '%'+@gl+'%' or jdrjc like '%'+@gl+'%' or cdjc like '%'+@gl+'%'  or jydjc like '%'+@gl+'%' )";
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

                    strWhere += " and  zyxx like '%'+@mdd+'%' ";

                }

                if (!string.IsNullOrEmpty(jdrhkh) && jdrhkh != "")
                {

                    strWhere += " and ( jdrjc like '%'+@jdrhkh+'%' or  khjc like '%'+@jdrhkh+'%') ";

                }


                string orderBy = "htjhthsj";

                if (sort == null || sort == "") {
                    sort = "htjhthsj";
                }
                orderBy = sort;
                if (order == "desc")
                    orderBy += " desc ";
                string sql = @"  select rownumber,ywbh,ztdh,zbrq,dlwtf,hth,khjc,hcorhbh,yjkgsj,sjkgsj,xhgqjc,cyr,hz_spmc,hgfxsj,hgfxsc,bghgjc,sjshrmc,zyxx,htjhthsj,htjhthsj_sjd,xcjhthsj,thjjcd,tpxx,bczz,
                                 sj,cph,sfybd,bdsbh,cgqsj,thsc,djydsj,cjydsj,jscsj,sjlxfs,sjccrq,sdsj,jyd_bz,gqdjydsc,jyddsdsc ,gqdsdsc,jyddsdsc_xs,jdrbm,jdrjc,cdbm,cdjc,jydjc  
                  from ( SELECT   row_number() over( order by " + orderBy + @") as rownumber, ywbh,ztdh,zbrq,dlwtf,hth,khjc,hcorhbh,yjkgsj,sjkgsj,xhgqjc,cyr,hz_spmc,hgfxsj,hgfxsc,bghgjc,
                                  sjshrmc,zyxx,bczz,htjhthsj,htjhthsj_sjd,xcjhthsj,thjjcd,tpxx,sj,cph,sfybd,bdsbh,cgqsj,thsc,djydsj,cjydsj,jscsj,sjlxfs,sjccrq,sdsj,jyd_bz,gqdjydsc,
                                  jyddsdsc ,gqdsdsc,jyddsdsc_xs,jdrbm,jdrjc,cdbm,cdjc,jydjc  
                          FROM  yw_hddz_kydt
                where  " + strWhere + @") t
                where  rownumber >@startIndex and rownumber <=@endIndex";

              return conn.Query<KyCarMapView>(sql, new
                {
                    from = from,
                    to = to,
                    gl = gl,
                    jyddsdsc_xs = jyddsdsc_xs,
                    Dlwtf = Dlwtf,
                    mdd = mdd,
                    jdrhkh = jdrhkh,
                    startIndex = pageSize * (page - 1),
                    endIndex = pageSize * page
                }).ToList();
            }
        }


        public int getCarMapCount(string from, string to, string zt, string gl, string pc,string Dlwtf, string mdd, string jdrhkh, string jyddsdsc_xs)

        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string strWhere = "";

                strWhere += " (cdbm = @Dlwtf or  jdrbm = @Dlwtf or isnull(@Dlwtf,'') = '') and  htjhthsj>= '2017.10.01'";

                if (!string.IsNullOrEmpty(zt))
                {
                     if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is not null and jyd_bz = 'Y'  and isnull(sdsj,cjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is not null   and  (case when jyd_bz = 'Y' then cjydsj else ' ' end) is not  null  and sdsj is null  ";
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

                    /*if (zt == "WCGQ")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and  isnull(sdsj,isnull(cjydsj,isnull(djydsj,cgqsj))) is null  ";
                    }
                    else if (zt == "YCGQJYWTG")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0 and isnull(sdsj,(case when jyd_bz = 'Y' then isnull(cjydsj,isnull(djydsj,cgqsj)) else isnull(djydsj,cgqsj) end )) is not null and  isnull(sdsj,cjydsj) is null ";
                    }
                    if (zt == "WSD")
                    {
                        strWhere += " and datediff(dd,htjhthsj,@to) >=0  and  isnull(sdsj,cjydsj)  is not null and sdsj is null ";
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
                    }*/
                }
                if (!string.IsNullOrEmpty(gl))
                {
                    strWhere += " and (cph like '%'+@gl+'%'  or ztdh like '%'+@gl+'%'  or xhgqjc like '%'+@gl+'%' or ywbh like '%'+@gl+'%' or khjc like '%'+@gl+'%' or hth like '%'+@gl+'%'  or cyr like '%'+@gl+'%' or hz_spmc like '%'+@gl+'%' or jdrjc like '%'+@gl+'%' or cdjc like '%'+@gl+'%' or jydjc like '%'+@gl+'%')";
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

                    strWhere += " and  zyxx like '%'+@mdd+'%' ";

                }

                if (!string.IsNullOrEmpty(jdrhkh) && jdrhkh != "")
                {

                    strWhere += " and ( jdrjc like '%'+@jdrhkh+'%' or  khjc like '%'+@jdrhkh+'%') ";

                }

                string sql = @"SELECT count(1) FROM   yw_hddz_kydt where   " + strWhere + @"";

                return conn.Query<int>(sql, new
                {
                    from = from,
                    to = to,
                    gl = gl,
                    jyddsdsc_xs = jyddsdsc_xs,
                     Dlwtf = Dlwtf,
                     mdd = mdd,
                    jdrhkh = jdrhkh,
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

    }
}
