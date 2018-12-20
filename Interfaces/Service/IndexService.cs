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
    public class IndexService : BaseService 
    {

        #region 初次加载菜单
        public List<d_menu_Entity> GetMenuListImpl(string userid, string parentid )
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();



                string tempsql = @" SELECT Sys_Modules.ID,   " +
                             "         Sys_Modules.ParentID,   " +
                             "         Sys_Modules.Seq,   " +
                             "         Sys_Modules.Title,   " +
                             "         Sys_Modules.Description,   " +
                             "		Sys_Modules.OpenStyle," +
                             "         Sys_Modules.WindowName,   " +
                             "         Sys_Modules.OpenParm,   " +
                             "         Sys_Modules.IsLast,   " +
                             "         Sys_Modules.IsValid  " +
                             "    FROM Sys_Modules   ";


                string strWhere = "  where Sys_Modules.IsValid ='1' ";
                DynamicParameters parameters = new DynamicParameters();
                if (!string.IsNullOrEmpty(parentid))
                {
                    strWhere += " AND Sys_Modules.ParentID = @parentid";
                    parameters.Add("@parentid", parentid);
                }
                strWhere += " AND Sys_Modules.IsPopUp<>'1'";

                if (!string.IsNullOrEmpty(userid))
                {
                    strWhere += " AND  ( @userid = 'admin' OR Exists (select 1 from sys_rolepermissions where funid like sys_modules.id+'%'and roleid in (select roleid from sys_userroles where userid = @userid ) ) ) ORDER  BY Sys_Modules.Seq";
                    parameters.Add("@userid", userid);
                }
             

                string sql = tempsql + strWhere; 
                int count = conn.Query<int>(sql , parameters).FirstOrDefault();
                return conn.Query<d_menu_Entity>(sql,parameters ).ToList();
            }

        }


        #endregion


    }
}
