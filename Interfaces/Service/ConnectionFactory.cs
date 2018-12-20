using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Data;
using System.Reflection;
using System.Data.SqlClient;

namespace Interfaces.Factory
{
    // <summary>
    /// Connection工厂用于实例化对应的IDbConnection对象，传递给dDapper。
    /// </summary>
    public class ConnectionFactory
    {
        private static readonly string connectionName = "SQLServer";
        private static readonly string connString = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;

        public static IDbConnection CreateConnection()
        {
            IDbConnection conn = null;
            switch (connectionName)
            {
                case "SQLServer":
                    conn = new SqlConnection(connString);
                    break;
            }
            conn.Open();
            return conn;
        }




    }
}
