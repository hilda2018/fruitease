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


        // #region 新增应收对账账号设置维护记录
        public void AddYsdzZhszImpl(Get_Yszd_Zhsz_Table_Data model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = "insert into yw_hddz_yszd_zhsz  ([jdrbm] ,[jdrmc] ,[zdlx] ,[bm] ,[gstt] ,[zh] ,[khyh]  ,[lxfs]) values (@zbr,@ycyybm,@ycyymc,@beizhu,@ycyyqc,@ywbh) ";
                conn.Execute(sql, model);
            }
        }



        // #region 更新应收对账账号设置维护记录
        public void UpdateYsdzZhszImpl(Get_Yszd_Zhsz_Table_Data model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = " update yw_hddz_ycyy  set zbr=@zbr,ycyybm=@ycyybm,ycyymc=@ycyymc,beizhu=@beizhu, ycyyqc=@ycyyqc,ywbh=@ywbh where id=@id";
                conn.Execute(sql, model);
            }
        }







        // #region 删除应收对账账号设置维护记录
        public void DeleteYsdzZhszImpl(Get_Yszd_Zhsz_Table_Data model)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                string sql = " update yw_hddz_ycyy  set zbr=@zbr,ycyybm=@ycyybm,ycyymc=@ycyymc,beizhu=@beizhu, ycyyqc=@ycyyqc,ywbh=@ywbh where id=@id";
                conn.Execute(sql, model);
            }
        }





    }

}