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
    public class GetYszdZhszService : BaseService
    {


        public List<Get_Yszd_Zhsz_Table_Data> GetYszdZhszTableDataServiceImpl()
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();


                string sql = "select * from yw_hddz_yszd_zhsz";
                return conn.Query<Get_Yszd_Zhsz_Table_Data>(sql).ToList();
            }


        }




        public Array GetComboboxJdrjcListDataServiceImpl()
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string sql = "select yw_khbm,khjc from yw_wldw where sfjdr = 'Y' ";//是否是接单人 接单人简称

                return conn.Query(sql).ToArray();

            }
        }

        public Array GetComboboxGsttListDataServiceImpl()
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string sql = "select khmc from yw_wldw where gsttbz = 'Y' ";//是否公司抬头

                return conn.Query(sql).ToArray();

            }
        }


        public Array GetBaseYszdZhszDataImpl()
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();

                string sql = "select yw_khbm,yhmc,zh  from yw_wldw_yh where mryh ='Y' and yw_khbm is not null and zh is not null and yhmc is not null ";//是否公司抬头

                return conn.Query(sql).ToArray();

            }
        }


        // #region 新增应收对账账号设置维护记录
        public void AddYszdZhszImpl(string jdrbm, string gstt, string khyh, string zdlx, string jdrmc, string lxfs,string zh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();


                DynamicParameters parameters = new DynamicParameters();

                parameters.Add("@jdrbm", jdrbm);
                parameters.Add("@gstt", gstt);
                parameters.Add("@khyh", khyh);
                parameters.Add("@zdlx", zdlx);
                parameters.Add("@zh", zh);
                parameters.Add("@jdrmc", jdrmc);
                parameters.Add("@lxfs", lxfs);
                string sql = "insert into yw_hddz_yszd_zhsz  ([jdrbm] ,[jdrmc] ,[zdlx] ,[gstt]  ,[khyh]  ,[lxfs],[zh] ) values (@jdrbm,@jdrmc,@zdlx,@gstt,@khyh,@lxfs,@zh) ";

                conn.Execute(sql, parameters);
            }
        }



        // #region 更新应收对账账号设置维护记录
        public void UpdateYszdZhszImpl(Get_Yszd_Zhsz_Table_Data model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = " UPDATE yw_hddz_yszd_zhsz SET jdrbm = @jdrbm,jdrmc = @jdrmc ,zdlx = @zdlx  ,gstt = @gstt,zh= @zh,khyh = @khyh,lxfs = @lxfs WHERE key_id = @key_id ";
                conn.Execute(sql, model);
            }
        }





        // #region 删除应收对账账号设置维护记录
        public void DeleteYszdZhszImpl(int keyId)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                DynamicParameters parameters = new DynamicParameters();
                
                parameters.Add("@keyId", keyId);
                string sql = "DELETE FROM yw_hddz_yszd_zhsz  where key_id=@keyId";
                conn.Execute(sql,parameters);
            }
        }





    }

}