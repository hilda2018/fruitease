using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Interfaces.Factory;

namespace Interfaces.Service
{
    public class AbstractService
    {
        protected IDbConnection conn =null;
        private IDbTransaction _transaction;
        protected IDbTransaction Transaction
        {
            get { return _transaction; }
        }
        /// <summary>
        /// 开始事务
        /// </summary>
        protected void BegionTran()
        {
            if (conn == null)
                conn = ConnectionFactory.CreateConnection();

            if (conn.State == ConnectionState.Closed)
                conn.Open();
            _transaction = conn.BeginTransaction();

        }
        /// <summary>
        /// 回滚事务
        /// </summary>
        protected void RollBackTran()
        {
            _transaction.Rollback();
            conn.Close();
            conn.Dispose();
        }
        /// <summary>
        /// 提交事务
        /// </summary>
        protected void CommitTran()
        {
            _transaction.Commit();
            conn.Close();
            conn.Dispose();
        }
    }
}
