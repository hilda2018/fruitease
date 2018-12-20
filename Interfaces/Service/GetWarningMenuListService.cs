using System;
using System.Collections.Generic;
using System.Linq;
using Interfaces.Model;
using Dapper;
using Interfaces.Factory;
using System.Data;
using System.Text;
using System.Collections;
using System.Data.Common;
using System.Data.SqlClient;
using System.Dynamic;
using System.Web.UI;

namespace Interfaces.Service
{
    public class GetWarningMenuListService : BaseService
    {


        public List<Get_Warning_Menu_List_Service> GetWarningMenuListServiceImpl(string userid, string parentid, out int count)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();


                string tempsql = @"SELECT" +
                                 "	yw_hddz_yjlx.yjlxbh," +
                                 "	yw_hddz_yjlx.yjlxmc," +
                                 "	yw_hddz_yjlx.khsfck," +
                                 "	yw_hddz_yjlx.syjbh," +
                                 "	yw_hddz_yjlx.IsLast," +
                                 "	yw_hddz_yjlx.yjbz," +
                                 "	yw_hddz_yjlx.xh " +
                                 "FROM yw_hddz_yjlx ";

                string strWhere = "  where  ";
                DynamicParameters parameters = new DynamicParameters();
                if (!string.IsNullOrEmpty(parentid))
                {
                    strWhere += "( yw_hddz_yjlx.syjbh = @parentid )";
                    parameters.Add("@parentid", parentid);
                }

                strWhere += "AND isnull( state, 'N' ) = 'Y' AND (";

                if (!string.IsNullOrEmpty(userid))
                {
                    strWhere +=
                        "yw_hddz_yjlx.yjlxbh IN ( SELECT Sys_WarningPermissions.FunID FROM Sys_WarningPermissions, Sys_UserRoles WHERE Sys_WarningPermissions.RoleID = Sys_UserRoles.RoleID AND Sys_WarningPermissions.hasright = '1' AND Sys_UserRoles.UserID = @userid ) " +
                        "	OR yw_hddz_yjlx.yjlxbh IN (" +
                        "SELECT LEFT" +
                        "	( Sys_WarningPermissions.FunID, 4 ) " +
                        "FROM" +
                        "	Sys_WarningPermissions," +
                        "	Sys_UserRoles " +
                        "WHERE" +
                        "	Sys_WarningPermissions.RoleID = Sys_UserRoles.RoleID " +
                        "	AND Sys_WarningPermissions.hasright = '1' " +
                        "	AND Sys_UserRoles.UserID = @userid " +
                        "	) " +
                        "	OR yw_hddz_yjlx.yjlxbh IN (" +
                        "SELECT LEFT" +
                        "	( Sys_WarningPermissions.FunID, 2 ) " +
                        "FROM" +
                        "	Sys_WarningPermissions," +
                        "	Sys_UserRoles " +
                        "WHERE" +
                        "	Sys_WarningPermissions.RoleID = Sys_UserRoles.RoleID " +
                        "	AND Sys_WarningPermissions.hasright = '1' " +
                        "	AND Sys_UserRoles.UserID = @userid " +
                        "	))";
                    parameters.Add("@userid", userid);
                }


                string sql = tempsql + strWhere;
                count = conn.Query<int>(sql, parameters).FirstOrDefault();
                return conn.Query<Get_Warning_Menu_List_Service>(sql, parameters).ToList();
            }


        }

        public Array GetJdrListImpl(string userid)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();
                 
                string tempsql = @"SELECT  khjc from" + "	yw_wldw " ;
               // exec GetRecordFromPage 'yw_wldw', 'khjc', 100,1,1,"sfjdr = 'Y'"
                string strWhere = "  where  ";
                strWhere += "sfjdr = 'Y' ";
                
                string sql = tempsql + strWhere ;

                return conn.Query(sql).ToArray();

            }
        }


        public List<Get_Warning_Table_Service>  GetWarningTableDataServiceImpl(string yjlxbm, string userId , int rows ,int pageIndex, string sfgx,string jdrjc,string ry,string yjnr,string ywbh , out int count)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();


                string strWhere = "where 1=1 ";
                DynamicParameters Parameters = new DynamicParameters();


                if (!string.IsNullOrEmpty(yjlxbm))
                {
                    strWhere += " and a.yjlxbm like @yjlxbm ";
                    Parameters.Add("@yjlxbm",yjlxbm + "%");
                }
                //预警内容
                if (!string.IsNullOrEmpty(yjnr))
                {
                    strWhere += " and a.yjnr like @yjnr";
                    Parameters.Add("@yjnr", "%"+ yjnr+ "%");
                }
                //处理人员 
                if (!string.IsNullOrEmpty(ry))
                {
                    strWhere += " and a.ry = @ry";
                    Parameters.Add("@ry", ry);
                }
                if(!string.IsNullOrEmpty(jdrjc)){
                    strWhere += " and a.jdrjc= @jdrjc";
                    Parameters.Add("@jdrjc", jdrjc);
                }
                if (!string.IsNullOrEmpty(sfgx))
                {
                    strWhere += " and b.sfgx= @sfgx ";
                    Parameters.Add("@sfgx", sfgx);
                }

                strWhere += " and ";
                if (!string.IsNullOrEmpty(userId))
                {

                    DynamicParameters param  = new DynamicParameters();
                    string ckqxSql = "(select count(*)  from  dbo.Sys_UserRoles  where dbo.Sys_UserRoles.RoleID = '101' and	  dbo.Sys_UserRoles.UserID = @userId)"; 
                    string gzryzkzjSql ="(select count(*)  from  dbo.Sys_UserRoles  where dbo.Sys_UserRoles.RoleID = '102' and dbo.Sys_UserRoles.UserID =@userId)";     
                    param.Add("@userId",userId);
                    int ckqx = conn.Query<int>(ckqxSql,param).FirstOrDefault();
                    int gzryzkzj = conn.Query<int>(gzryzkzjSql,param).FirstOrDefault();

                    strWhere  += "( select count(*) from dbo.Sys_WarningPermissions,dbo.Sys_UserRoles where dbo.Sys_WarningPermissions.FunID = a.yjlxbm and dbo.Sys_WarningPermissions.RoleID = dbo.Sys_UserRoles.RoleID and dbo.Sys_WarningPermissions.hasright = '1' and  dbo.Sys_UserRoles.UserID = @userId ) > 0  AND(("+ckqx+">0 and   zbr = @userId) or("+gzryzkzj+">0 and  jcgzry = @userId) or ("+ckqx+"= 0 and "+gzryzkzj +"=0)) ";

                    Parameters.Add("@userId", userId);
                }


                Parameters.Add("@userId", userId);        
                Parameters.Add("@rows", rows);  
                string sql = @" select top " + rows + @" a.xh,* from  (select  row_number() over(order by a.xh asc ) as rownumber, a.* ,b.sfgx from yw_hddz_yccx a left join yw_hddz_yjxx_sfgx b on ( a.ywbh=b.ywbh and isnull(a.hth,'')= isnull(b.jzxh,'') and  a.yjlxbm=b.yjlxbm)  "+ strWhere + ") a where a.rownumber > "+ rows * (pageIndex-1)+" order by a.xh asc";

      
              //  select rows from sysindexes where id = object_id('yw_hddz_yccx') and indid in (0,1)
                string countSql = "select  count(1)  from yw_hddz_yccx a left join yw_hddz_yjxx_sfgx b on ( a.ywbh=b.ywbh and isnull(a.hth,'')= isnull(b.jzxh,'') and  a.yjlxbm=b.yjlxbm) " + strWhere ;


                    count = conn.Query<int>(countSql, Parameters).FirstOrDefault();
                    return conn.Query<Get_Warning_Table_Service>(sql, Parameters).ToList();
  
               


            }

   

        }



        //#region 异常原因表格 下拉
       public List<ycyy_Select_List_Service>  GetYcyyListDataImpl(string yjlxbh , out int count)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string tempsql = @"SELECT t_ycyy.ycyybm," +
                                 "         t_ycyy.ycyymc,  " +
                                 "         t_ycyy.sfmx,   " +
                                 "         t_ycyy.ycyylb,  " +
                                 "         t_ycyy.yy " +
                                 "    FROM t_ycyy,yw_hddz_yjlx_ycyy ";


                string strWhere = "";

      
                
                DynamicParameters parameters = new DynamicParameters();
                if (!string.IsNullOrEmpty(yjlxbh))
                {          
                   strWhere += "WHERE ( t_ycyy.ycyybm = yw_hddz_yjlx_ycyy.ycyybm ) AND ( ( yw_hddz_yjlx_ycyy.yjlxbh = @yjlxbh ) AND ( t_ycyy.sfmx = 'Y' ) )";
                    parameters.Add("@yjlxbh", yjlxbh);
                }

                string sql = tempsql + strWhere;
                count = conn.Query<int>(sql, parameters).FirstOrDefault();
                return conn.Query<ycyy_Select_List_Service>(sql, parameters).ToList();


            }

        }

        //# end region 异常原因表格 下拉


        //#region 异常原因表格 
        public List<ycyy_Service>  GetYcyyTableDataImpl(string ywbh,string yjlxbh , out int count)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
             if (conn.State == System.Data.ConnectionState.Closed)
                 conn.Open();

                string tempsql = @"SELECT isnull( yw_hddz_ycyy.id, '' ) AS id,isnull( yw_hddz_ycyy.zbr, '' ) AS zbr,isnull( yw_hddz_ycyy.zbrq, '' ) AS zbrq,isnull( yw_hddz_ycyy.ycyybm, '' ) AS ycyybm,isnull( yw_hddz_ycyy.ycyymc, '' ) AS ycyymc,isnull( yw_hddz_ycyy.beizhu, '' ) AS beizhu,isnull( yw_hddz_ycyy.ycyyqc, '' ) AS ycyyqc,isnull( yw_hddz_ycyy.ycyyqcsj, '' ) AS ycyyqcsj,isnull( yw_hddz_ycyy.wxsffs, '' ) AS wxsffs, isnull( yw_hddz_ycyy.ywbh, '' ) AS ywbh,isnull( yw_hddz_ycyy.cxh, '' ) AS cxh,	isnull(yw_hddz_ycyy.yy, '' ) AS yy FROM yw_hddz_ycyy";

                string strWhere = "";
                DynamicParameters parameters = new DynamicParameters();
                if (!string.IsNullOrEmpty(ywbh))
                {
                    if ( !string.IsNullOrEmpty(yjlxbh) )
                    {
                        strWhere += " WHERE ( yw_hddz_ycyy.ywbh = @ywbh ) AND ( yw_hddz_ycyy.ycyybm IN ( SELECT ycyybm FROM yw_hddz_yjlx_ycyy WHERE yjlxbh = @yjlxbh AND len( ycyybm ) > 0 ) ) ORDER BY yw_hddz_ycyy.zbrq DESC";
                        parameters.Add("@ywbh", ywbh);   
                        parameters.Add("@yjlxbh", yjlxbh);
                        string sql = tempsql + strWhere;
                        count = conn.Query<int>(sql, parameters).FirstOrDefault();
                        return conn.Query<ycyy_Service>(sql, parameters).ToList();


                    }
                }


                count = 0;
                return new List<ycyy_Service>();
                           
         


            }
         }
    //# end region 异常原因表格 




        // #region 新增异常记录
        public void AddYcyyItem(ycyy_Service model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = " insert into yw_hddz_ycyy  (zbr,ycyybm,ycyymc,beizhu, ycyyqc,ywbh)values(@zbr,@ycyybm,@ycyymc,@beizhu,@ycyyqc,@ywbh) ";
                conn.Execute(sql, model);
            }
        }
        /// <summary>
 
        
        // #region 更新异常记录
        public void UpdateYcyyItem(ycyy_Service model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = " update yw_hddz_ycyy  set zbr=@zbr,ycyybm=@ycyybm,ycyymc=@ycyymc,beizhu=@beizhu, ycyyqc=@ycyyqc,ywbh=@ywbh where id=@id";
                conn.Execute(sql, model);
            }
        }
        /// <summary>


    }

}