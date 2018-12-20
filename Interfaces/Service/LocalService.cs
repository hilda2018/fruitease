using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Interfaces.Model;
using Dapper;
using Interfaces.Factory;

namespace Interfaces.Service
{
    /// <summary>
    /// 本地数据库
    /// </summary>
    public class LocalService : AbstractService
    {
        /// <summary>
        /// 保存执行日志
        /// </summary>
        public bool SaveLog(List<SysLogEntity> list)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string strsql = SqlFactory.GetInsertSql(new SysLogEntity());
                if (con.Execute(strsql, list) == list.Count)
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// 保存失败数据
        /// </summary>
        public  bool SaveFailData(List<FailLogEntity> list)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string strsql = SqlFactory.GetInsertSql(new FailLogEntity());
                if (con.Execute(strsql, list) == list.Count)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
