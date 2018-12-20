using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Data.SqlClient;
using Sybase.DataWindow;
using TXSoft.Common;
using TXSoft.Db;
using System.Web.SessionState;

namespace QsWebSoft
{
    public class DBHelp : IDbProfile,IDisposable
    {
        private string  connString = "";
        private SqlConnection cnn =null;
        private SqlTransaction trans = null;
        private Sybase.DataWindow.AdoTransaction _tr=null;
        private string _name = String.Empty;

        public DBHelp()
        {
           
             connString = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;
        }

        /// <summary>
        /// 执行查询语句，返回DataSet
        /// </summary>
        /// <param name="SQLString">查询语句</param>
        /// <returns>DataSet</returns>
        public DataSet Query(string SQLString)
        {
            DBHelp conn = new DBHelp();
            SqlConnection connection = new SqlConnection(conn.connString);
            {
                DataSet ds = new DataSet();
                try
                {
                    connection.Open();
                    SqlDataAdapter command = new SqlDataAdapter(SQLString, connection);
                    command.Fill(ds, "ds");
                }
                catch (System.Data.SqlClient.SqlException ex)
                {
                    throw new Exception(ex.Message);
                }
                return ds;
            }
        }
       
        public string ProfileName
        {
            get { return _name; }
            set
            {
                _name = value;
                //根据不同的ProfileName,返回连接不同的数据库

                if(_name=="hr")
                    connString = ConfigurationManager.ConnectionStrings["HRConnection"].ConnectionString;
                else
                    connString = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;
            }
        }

        public string GetUserID()
        {
            return AppService.GetUserID(); 
         }

        public object GetSessionValue(string name)
        {
            return HttpContext.Current.Session[name];
        }

        public DatabaseType GetDbType()
        {
            return DatabaseType.SqlSever;
        }

        public string GetParameterName(string name)
        {
            return "@" + name;
        }

        public SqlConnection Open()
        {
            if (cnn == null)
            {
                cnn = new SqlConnection(connString);
                cnn.Open();
            }
              return cnn;
        }

        public IDbConnection GetDbConnection()
        {
            if (cnn == null)
                return this.Open();

            return cnn;
        }

        public void Close()
        {
           if(cnn!=null && cnn.State == ConnectionState.Open)
            {
                this.Commit(); 
                cnn.Close();
                cnn =null;
            }
        }

        public AdoTransaction TransAction
        {
            get
           {
               if (cnn == null)
                   this.Open();

               if (_tr == null  )
               {
                   _tr = new AdoTransaction(cnn);
                   _tr.BindConnection(); 
               }
               return _tr; 
            }
        }
        public void BeginTransAction()
        {
            if (cnn != null)
            {
                trans = this.cnn.BeginTransaction();
               if (_tr != null)
                   _tr.Transaction = trans; 
            }
        }

        public void Commit()
        {
            if (trans != null)
            {
                trans.Commit();
               trans.Dispose();
                trans = null;
            }
        }

        public void Rollback()
        {
            if (trans != null)
            {
                trans.Rollback();
                trans.Dispose();
                trans = null;
            }
        }

        public SqlCommand GetCommand(string sql)
        {
            if (cnn == null)
                this.Open();

            SqlCommand cmd;
            if (trans == null)
                cmd = new SqlCommand(sql, cnn);
            else
                cmd = new SqlCommand(sql, cnn, trans);

            return cmd; 
        }


        /*------------------------------------------------------
        * 封装一些常用的数据库操作方法
        * ----------------------------------------------------*/


        /// <summary>
        /// 根据Sql语句生成DataStore对象，并自动检索数据
        /// </summary>
        /// <param name="sqlSelect"></param>
        /// <returns></returns>
        public TXSoft.DataStore.SafeDS DataStoreFromSql(string sqlSelect)
        {
            TXSoft.DataStore.SafeDS ds = new TXSoft.DataStore.SafeDS();
            ds.Create(Sybase.DataWindow.DataWindowSyntaxGenerator.DataWindowSyntaxFromSql(this.TransAction, sqlSelect));
            ds.SetTransaction(this.TransAction);
            ds.Retrieve();
            return ds;
        }

        public SqlDataReader ExecuteReader(string commandText, IDbDataParameter[] dbParameters = null, CommandType commandType = CommandType.Text)
        {
            SqlCommand cmd = this.GetCommand(commandText);
            cmd.CommandType = commandType;
            if (dbParameters != null)
                cmd.Parameters.AddRange(dbParameters);

            return cmd.ExecuteReader();
        }

        public int ExecuteNonQuery(string commandText, IDbDataParameter[] dbParameters = null, CommandType commandType = CommandType.Text)
        {
            SqlCommand cmd = this.GetCommand(commandText);
            cmd.CommandType = commandType;
            if (dbParameters != null)
                cmd.Parameters.AddRange(dbParameters);

            return cmd.ExecuteNonQuery();
        }

        public object ExecuteScalar(string commandText, IDbDataParameter[] dbParameters = null, CommandType commandType = CommandType.Text)
        {
            SqlCommand cmd = this.GetCommand(commandText);
            cmd.CommandType = commandType;
            if (dbParameters != null)
                cmd.Parameters.AddRange(dbParameters);

            return cmd.ExecuteScalar();
        }

        public void Dispose()
        {
            this.Close(); 
        }
    }
}
