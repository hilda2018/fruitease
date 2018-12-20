using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Interfaces.Model;
using Interfaces;
using Dapper;
using Interfaces.Factory;
using System.Data;

namespace Interfaces.Service
{
    public class HddzService : AbstractService
    {

        /// <summary>
        /// 更新货代单证表 生鲜港关联ID
        /// </summary>
        public bool UpdateSupplierSellID(string SupplierSellID, string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string strSql = "update yw_hddz set SupplierSellID ='" + SupplierSellID + "' where ywbh='" + ywbh + "'";
                return conn.Execute(strSql) == 1;
            }
        }

        /// <summary>
        /// 更新货代单证表 ocr关联ID
        /// </summary>
        public bool UpdateOcrID(string ocrid, string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string strSql = "update yw_hddz set ocrid ='" + ocrid + "' where ywbh='" + ywbh + "'";
                return conn.Execute(strSql) == 1;
            }
        }

        /// <summary>
        /// 获取货代单证中ocrid不为空的数据
        /// </summary>
        /// <returns></returns>
        public List<yw_hddzEntity> GetOcrIDList()
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select ocrid,ywbh,zbr from yw_hddz where ocrid is not null and ocrid <>'' ";
                return conn.Query<yw_hddzEntity>(sql).ToList();
            }
        }

        /// <summary>
        /// 根据条件获取货代单证列表
        /// </summary>
        /// <param name="strWhere"></param>
        /// <returns></returns>
        public List<yw_hddzEntity> GetHddzList(string strWhere)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string sql = "select * from yw_hddz where  " + strWhere;
                return conn.Query<yw_hddzEntity>(sql).ToList();
            }
        }

        #region 保存货代单证、商品信息、集装箱信息， ocr对接专用
        /// <summary>
        /// 添加货代单证，包含主表和商品信息表
        /// </summary>
        /// <param name="model"></param>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool SaveHddz(yw_hddzEntity model, List<yw_hddz_spxxEntity> list)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                IDbTransaction _transaction = conn.BeginTransaction();
                try
                {
                    #region 数据补全
                    if (model.ysfs.Trim() == "海运")
                        model.ywbh = new Interfaces.Service.HddzService().GetNewYwbh(DateTime.Now.ToString("yy") + model.dqdm);
                    else
                        model.ywbh = new Interfaces.Service.HddzService().GetNewYwbh(DateTime.Now.ToString("yy") + "OC");

                    model.zbrq = DateTime.Now;
                    model.state = "新制";

                    model.zydl = model.zjsbm == model.khbm ? "自营" : "代理";
                    list.ForEach(p => p.ywbh = model.ywbh);
                    #endregion

                    //插入货代主表
                    string sql = SqlFactory.GetInsertSql(model);
                    conn.Execute(sql, model, _transaction);
                    //插入商品信息分录表
                    string spxxsql = SqlFactory.GetInsertSql(new yw_hddz_spxxEntity());
                    conn.Execute(spxxsql, list, _transaction);

                    AddHddzJzxxx(model, _transaction);
                    _transaction.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    _transaction.Rollback();
                    throw ex;

                }
            }
        }

        /// <summary>
        /// 修改货代单证，包含主表和商品信息表
        /// </summary>
        /// <param name="model"></param>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool ModifyHddz(yw_hddzEntity model, List<yw_hddz_spxxEntity> list)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                IDbTransaction _transaction = conn.BeginTransaction(); ;
                try
                {
                    #region 数据补全
                    model.zydl = model.zjsbm == model.khbm ? "自营" : "代理";
                    #endregion
                    //插入货代主表
                    //string sql = SqlFactory.GetUpdateSql(model, "yw_hddz", "ywbh");
                    string sql = @"update yw_hddz set gwgysbm=@gwgysbm,gwgysmc=@gwgysmc,gwgysjc=@gwgysjc,
khbm=@khbm,khmc=@khmc,khjc=@khjc,khpym=@khpym,zjsmc=@zjsmc,zjsbm=@zjsbm,zjsjc=@zjsjc,zjspym=@zjspym,shdwbm=@shdwbm,shdwmc=@shdwmc,
jydwbm=@jydwbm,jydwdm=@jydwdm,jydwmc=@jydwmc,jydwjc=@jydwjc,jydwpym=@jydwpym,jydwsjjgdm=@jydwsjjgdm,
hth=@hth,wbbb=@wbbb,zje=@zje,ycddm=@ycddm,ycd=@ycd,dqdm=@dqdm,yzbh=@yzbh,ctr_area2=@ctr_area2,qygdm=@qygdm,qiyunguodm=@qiyunguodm,qyg=@qyg,mdg=@mdg,
jgfs=@jgfs,invoiceno=@invoiceno,zjz=@zjz,zmz=@zmz,ysfs=@ysfs,zydl=@zydl,
ztdh=@ztdh,hz_spmc=@hz_spmc,cyr=@cyr,cyrbm=@cyrbm,cyrjc=@cyrjc,cyrpym=@cyrpym,ejycd=@ejycd,sfyyf=@sfyyf,tzrbm=@tzrbm,tzrmc=@tzrmc,tzrjc=@tzrjc,tzrpym=@tzrpym,
cm=@cm,hcorhbh=@hcorhbh,zz_hcorhbh=@zz_hcorhbh,zcrq=@zcrq,fh=@fh,hz_jzxh=@hz_jzxh,hz_xx=@hz_xx,hz_zhlx=@hz_zhlx,invoice_date=@invoice_date,
state=@state,mygb=@mygb,clfs=@clfs where ywbh=@ywbh";
                    conn.Execute(sql, model, _transaction);
                    //删除现有的商品，重新添加
                    string delsql = "delete from yw_hddz_spxx where ywbh=@ywbh";
                    conn.Execute(delsql, new { ywbh = model.ywbh }, _transaction);
                    //删除集装箱信息
                    string deljzxsql = "delete from yw_hddz_jzxxx where ywbh=@ywbh";
                    conn.Execute(deljzxsql, new { ywbh = model.ywbh }, _transaction);

                    //插入商品信息分录表
                    string spxxsql = SqlFactory.GetInsertSql(new yw_hddz_spxxEntity());
                    conn.Execute(spxxsql, list, _transaction);
                    AddHddzJzxxx(model, _transaction);
                    _transaction.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    _transaction.Rollback();
                    throw ex;

                }
            }
        }

        /// <summary>
        /// 添加集装箱信息表
        /// </summary>
        public bool AddHddzJzxxx(yw_hddzEntity model, IDbTransaction _transaction)
        {
            List<yw_hddz_jzxxxEntity> list = new List<yw_hddz_jzxxxEntity>();

            if (string.IsNullOrEmpty(model.hz_jzxh))
            {
                return true;
            }

            string[] strjzxh = model.hz_jzxh.Replace("、", ",").Split(',');
            int i = 1;
            foreach (string jzxh in strjzxh)
            {
                if (jzxh.Trim() == "")
                {
                    continue;
                }
                yw_hddz_jzxxxEntity jzx = new yw_hddz_jzxxxEntity();
                jzx.ywbh = model.ywbh;
                jzx.jzxh = jzxh;
                jzx.ysfs = model.ysfs;
                jzx.xx = "40尺高柜";
                jzx.xl = "冷藏集装箱";
                jzx.cxh = i++;
                list.Add(jzx);
            }

            if (conn.State == System.Data.ConnectionState.Closed)
            {
                conn.Open();
            }
            string sql = SqlFactory.GetInsertSql(new yw_hddz_jzxxxEntity());

            return conn.Execute(sql, list, _transaction) != 0;
        }
        #endregion

        #region 获取新业务编号
        /// <summary>
        /// 获取新的业务编号
        /// </summary>
        /// <returns></returns>
        public string GetNewYwbh(string flag)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "SELECT max(ywbh) from yw_hddz where ywbh like '" + flag + "%'";
                string ywbh = conn.Query<string>(sql).FirstOrDefault();
                if (ywbh != null)
                {
                    int num = 0;
                    int.TryParse(ywbh.Replace(flag, ""), out num);
                    return flag + (num + 1).ToString().PadLeft(4, '0');
                }
                else
                {
                    return flag + "0001";
                }
            }
        }
        #endregion

        #region 获取收到运费发票日期
        /// <summary>
        /// 获取收到运费发票日期
        /// </summary>
        /// <returns></returns>
        public yw_hddz_yfView GetSdyffpsj(string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = @" select  sum(yw_hddz_sdzpgl_cmd.kpje) kpje,  max(sdfprq) sdfprq from yw_hddz_sdzpgl,yw_hddz_sdzpgl_cmd
 where yw_hddz_sdzpgl.fph = yw_hddz_sdzpgl_cmd.fph
and yw_hddz_sdzpgl_cmd.ywbh = @ywbh ";
                return conn.Query<yw_hddz_yfView>(sql, new { ywbh = ywbh }).FirstOrDefault();
            }
        }

        #endregion

        #region 根据发票号查询货代单证


        public List<yw_hddzEntity> GetHddzByFph(string fph)
        {
            string strWhere = " ywbh in (select ywbh from yw_hddz_sdzpgl_cmd where fph ='" + fph + "')";
            return GetHddzList(strWhere);
        }

        #endregion

        #region 根据超期费申请单查询货代单证


        public List<yw_hddzEntity> GetHddzBySqdbh(string sqdbh)
        {
            string strWhere = " ywbh in (select ywbh from yw_hddz_fksqd_cmd where sqdbh ='" + sqdbh + "')";
            return GetHddzList(strWhere);
        }

        #endregion


        /// <summary>
        /// 根据ocrid获取货代单证信息
        /// </summary>
        /// <param name="ociid"></param>
        /// <returns></returns>
        public yw_hddzEntity GetHddzModel(string ocrid)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz where  ocrid =@ocrid ";
                return conn.Query<yw_hddzEntity>(sql, new { ocrid = ocrid }).FirstOrDefault();
            }
        }

        /// <summary>
        /// 根据ocrid获取货代单证信息
        /// </summary>
        /// <param name="ociid"></param>
        /// <returns></returns>
        public yw_hddzEntity GetModel(string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz where  ywbh =@ywbh ";
                return conn.Query<yw_hddzEntity>(sql, new { ywbh = ywbh }).FirstOrDefault();
            }
        }

        /// <summary>
        /// 根据业务编号获取集装箱信息
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public List<yw_hddz_jzxxxEntity> GetJzxxxListByYwbh(string ywbh, string cxh = null)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_jzxxx where  ywbh =@ywbh ";

                if (!string.IsNullOrEmpty(cxh))
                {
                    sql += " and cxh=@cxh";
                }

                return conn.Query<yw_hddz_jzxxxEntity>(sql, new { ywbh = ywbh, cxh = cxh }).ToList();
            }
        }

        #region 根据业务编号获取海运收货人信息
        /// <summary>
        /// 根据业务编号获取海运收货人信息
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public List<yw_hddz_wldzView> GetWldzListByYwbh(string ywbh, string cxh = null)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select b.jzxh,a.* from yw_hddz_wldz  a left join  yw_hddz_jzxxx b on a.ywbh=b.ywbh and a.hddz_cxh=b.cxh where  a.ywbh =@ywbh ";

                if (!string.IsNullOrEmpty(cxh))
                {
                    sql += " and a.hddz_cxh=@cxh";
                }

                return conn.Query<yw_hddz_wldzView>(sql, new { ywbh = ywbh, cxh = cxh }).ToList();
            }
        }
        #endregion

        #region 获取单证
        /// <summary>
        /// 根据业务编号获取集装箱信息
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public List<yw_hddz_dzyqEntity> GetdzyqListByYwbh(string ywbh, string cxh = null)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_dzyq where  ywbh =@ywbh ";

                if (!string.IsNullOrEmpty(cxh))
                {
                    sql += " and cxh=" + cxh;
                }

                return conn.Query<yw_hddz_dzyqEntity>(sql, new { ywbh = ywbh }).ToList();
            }
        }
        #endregion

        /// <summary>
        /// 根据业务编号获取汇总商品数量
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public int GetTotalSpslByYhbh(string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select sum(isnull(jlsl,0)) jlsl from yw_hddz_spxx where  ywbh =@ywbh ";
                return conn.Query<int>(sql, new { ywbh = ywbh }).FirstOrDefault();
            }
        }

        /// <summary>
        /// 查询业务编号
        /// </summary>
        /// <param name="beginTime"></param>
        /// <param name="endTime"></param>
        /// <returns></returns>
        public List<ToEMailResponse> GetEmailResponseList(DateTime beginTime, DateTime endTime, string ywbh, string dqdm, string dqmc)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }


                string sql = "select  ywbh code,a.dqdm area,b.ctr_area2 areaname from yw_hddz a left join t_area2 b on a.dqdm=b.dqdm  where 1=1 ";

                if (beginTime != DateTime.MinValue)
                {
                    sql += " and yjkgsj >=@beginTime ";
                }

                if (endTime != DateTime.MinValue)
                {
                    if (endTime.Hour == 0 && endTime.Minute == 0 && endTime.Second == 0)//结束时间的时分秒都为零 则为包含当天的所有数据
                    {
                        endTime = endTime.AddDays(1);
                    }
                    sql += " and  yjkgsj < @endTime  ";
                }

                if (!string.IsNullOrEmpty(ywbh))
                {
                    sql += " and  a.ywbh like @ywbh  ";
                }

                if (!string.IsNullOrEmpty(dqdm))
                {
                    sql += " and  b.dqdm = @dqdm  ";
                }

                if (!string.IsNullOrEmpty(dqmc))
                {
                    sql += " and  b.ctr_area2 like @dqmc  ";
                }

                return conn.Query<ToEMailResponse>(sql, new
                {
                    beginTime = beginTime,
                    endTime = endTime,
                    ywbh = "%" + ywbh + "%",
                    dqdm = dqdm,
                    dqmc = "%" + dqmc + "%"
                }).ToList();
            }

        }

        /// <summary>
        /// 根据业务编号获取最新集装箱信息
        /// </summary>
        /// <returns></returns>
        public yw_hddz_jzxxxEntity GetNewestJzxxxByYwbh(string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_jzxxx where  ywbh =@ywbh order by tgjysj desc ";
                return conn.Query<yw_hddz_jzxxxEntity>(sql, new { ywbh = ywbh }).FirstOrDefault();
            }
        }
        /// <summary>
        /// 获取异常原因列表
        /// </summary>
        /// <param name="ywbh"></param>
        /// <param name="ycyybm"></param>
        /// <param name="jzxh"></param>
        /// <returns></returns>
        public List<yw_hddz_ycyyEntity> GetYcyyList(string ywbh, string ycyybm, string jzxh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_ycyy where  ywbh =@ywbh  and ycyybm like '" + ycyybm + "%' ";

                if (!string.IsNullOrEmpty(jzxh))
                {
                    sql += " and jzxh=@jzxh";
                }
                return conn.Query<yw_hddz_ycyyEntity>(sql, new { ywbh = ywbh, ycyybm = ycyybm, jzxh = jzxh }).ToList();
            }
        }


        #region 获取空运配货子信息列表
        /// <summary>
        /// 获取空运配货子信息列表
        /// </summary>
        /// <param name="cdphbm"></param>
        /// <returns></returns>
        public List<yw_hddz_tpcdxxEntity> GetTpcdxxList(string cdphbm)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_tpcdxx where  cdphbm =@cdphbm ";


                return conn.Query<yw_hddz_tpcdxxEntity>(sql, new { cdphbm = cdphbm }).ToList();
            }
        }
        #endregion

        #region 获取空运配货主表信息
        /// <summary>
        /// 获取空运配货子信息列表
        /// </summary>
        /// <param name="cdphbm"></param>
        /// <returns></returns>
        public yw_hddz_kycdEntity GetKycdModel(string cdphbm)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_kycd where  cdphbm =@cdphbm ";


                return conn.Query<yw_hddz_kycdEntity>(sql, new { cdphbm = cdphbm }).FirstOrDefault();
            }
        }
        #endregion

        #region 超期费用
        /// <summary>
        /// 获取空运配货子信息列表
        /// </summary>
        /// <param name="cdphbm"></param>
        /// <returns></returns>
        public yw_hddz_hycqfView GetHycqf(string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = @"select  max(a.zfsj) zfsj,sum( b.je) je,max( b.gscqfje), b.ywbh from yw_hddz_fksqd a LEFT JOIN yw_hddz_fksqd_cmd b on a.sqdbh=b.sqdbh
where b.ywbh = @ywbh and a.fydl = '0105'  group by  b.ywbh ";

                return conn.Query<yw_hddz_hycqfView>(sql, new { ywbh = ywbh }).FirstOrDefault();
            }
        }
        #endregion

        #region 国际运费
        /// <summary>
        /// 根据申请编号获取国际运费信息列表
        /// </summary>
        /// <param name="cdphbm"></param>
        /// <returns></returns>
        public List<yw_hddz_gjyfView> GetGjyfList(string sqdbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = @"select  a.zfsj,a.zrmbhl,b.yssxf, b.ywbh,c.SupplierSellID from 
yw_hddz_fksqd a LEFT JOIN yw_hddz_fksqd_cmd b on a.sqdbh=b.sqdbh
LEFT JOIN yw_hddz c on b.ywbh=c.ywbh
where a.sqdbh=@sqdbh and a.fydl = '02' and c.SupplierSellID is not null";

                return conn.Query<yw_hddz_gjyfView>(sql, new { sqdbh = sqdbh }).ToList();
            }
        }
        #endregion


        #region 付款申请单
        /// <summary>
        /// 根据申请单编号获取对象
        /// </summary>
        /// <param name="sqdbh"></param>
        /// <returns></returns>
        public yw_hddz_fksqdEntity GetFksqd(string sqdbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "SELECT * from yw_hddz_fksqd where sqdbh = @sqdbh";
                return conn.Query<yw_hddz_fksqdEntity>(sql, new { sqdbh = sqdbh }).FirstOrDefault();

            }
        }
        #endregion

        #region 国内货代费用


        public List<yw_hddz_jzxxx_hdfyView> GethdfyList(string ywbh, string cxh_hddz)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select  fymc,fybm,fyje je,a.cxh flag,jzxh from yw_hddz_yshdfygj_cmd a LEFT JOIN yw_hddz_jzxxx b on a.ywbh=b.ywbh and a.cxh_hddz=b.cxh where  fybm like '01%'  and a.ywbh=@ywbh and a.cxh_hddz=@cxh_hddz";
                var list = conn.Query<yw_hddz_jzxxx_hdfyView>(sql, new { ywbh = ywbh, cxh_hddz = cxh_hddz }).ToList();

                return list;
            }
        }

        #endregion

        #region 税金支付
        /// <summary>
        /// 获取税金支付列表
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public List<yw_hddz_sjzfEntity> GetsjzfList(string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_sjzf where ywbh=@ywbh";
                var list = conn.Query<yw_hddz_sjzfEntity>(sql, new { ywbh = ywbh }).ToList();
                return list;
            }
        }
        #endregion

        #region 物流跟踪

        /// <summary>
        /// 根据ocrid获取货代单证信息
        /// </summary>
        /// <param name="ociid"></param>
        /// <returns></returns>
        public List<yw_hddz_wlgzEntity> GetWlgzList(string ywbh, string cxh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_wlgz where  ywbh =@ywbh and hddz_cxh=@cxh and rwlx!='堆场'  order by rwbh desc";
                return conn.Query<yw_hddz_wlgzEntity>(sql, new { ywbh = ywbh, cxh = cxh }).ToList();
            }
        }
        /// <summary>
        /// 根据任务编号获取物流跟踪
        /// </summary>
        /// <param name="ociid"></param>
        /// <returns></returns>
        public yw_hddz_wlgzEntity GetWlgzByRwbh(string rwbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "select * from yw_hddz_wlgz where  rwbh =@rwbh ";
                return conn.Query<yw_hddz_wlgzEntity>(sql, new { rwbh = rwbh }).FirstOrDefault();
            }
        }
        #endregion

        #region 根据ywbh查询生鲜港代卖ID
        /// <summary>
        /// 根据ywbh查询生鲜港代卖ID
        /// </summary>
        /// <returns></returns>
        public string GetSupplierSellIDByYwbh(string ywbh)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                string sql = "SELECT SupplierSellID from yw_hddz where ywbh = @ywbh";
                return conn.Query<string>(sql, new { ywbh = ywbh }).FirstOrDefault();
            }
        }

        #endregion

        #region 分页获取货代单证
        /// <summary>
        /// 获取数量
        /// </summary>
        /// <param name="strWhere"></param>
        /// <returns></returns>
        public int GetCount(string strWhere)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string sql = "select count(1) from yw_hddz " + (string.IsNullOrEmpty(strWhere) ? "" : " where " + strWhere);
                return conn.Query<int>(sql).FirstOrDefault();
            }
        }

        /// <summary>
        /// 分页查询货代单证
        /// </summary>
        /// <param name="strWhere"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public List<yw_hddzEntity> GetHddzByPage(string strWhere, int page, int pageSize)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string sql = SqlFactory.GetPageSelectListSql(new yw_hddzEntity(), " zbrq desc ", (page - 1) * pageSize, pageSize, strWhere);
                return conn.Query<yw_hddzEntity>(sql).ToList();
            }

        }
        #endregion

        #region 分页获取空运配货
        /// <summary>
        /// 获取数量
        /// </summary>
        /// <param name="strWhere"></param>
        /// <returns></returns>
        public int GetKycdCount(string strWhere)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string sql = "select count(1) from yw_hddz_kycd " + (string.IsNullOrEmpty(strWhere) ? "" : " where " + strWhere);
                return conn.Query<int>(sql).FirstOrDefault();
            }
        }

        /// <summary>
        /// 分页查询货代单证
        /// </summary>
        /// <param name="strWhere"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public List<yw_hddz_kycdEntity> GetKycdByPage(string strWhere, int page, int pageSize)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string sql = SqlFactory.GetPageSelectListSql(new yw_hddz_kycdEntity(), " zbrq desc ", (page - 1) * pageSize, pageSize, strWhere);
                return conn.Query<yw_hddz_kycdEntity>(sql).ToList();
            }

        }
        #endregion

        #region 查询同步失败的接口 重新同步

        public List<yw_hddzEntity> GetErrIntHddzList(string jklx)
        {
            using (conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }

                string sql = "select a.* from yw_hddz a left JOIN  s_log s on a.ywbh=s.ywbh  where  s.jklx =@jklx and sfcg=0 and  cjsj >'20170221' and czbs=1";
                return conn.Query<yw_hddzEntity>(sql, new { jklx = jklx }).ToList();
            }
        }
        #endregion

        #region 查询日志
        /// <summary>
        /// 查询s_log_err表数据
        /// </summary>
        /// <param name="pageSize">每次查询最大数据</param>
        /// <param name="cscs">重试次数</param>
        /// <returns></returns>
        public List<s_log_errEntity> GetLogerrList(int pageSize, int cscs)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string strWhere = " cscs<@cscs and sfcg=0";

                string sql = SqlFactory.GetPageSelectListSql(new s_log_errEntity(), " cjsj asc ", 0, pageSize, strWhere);
                return con.Query<s_log_errEntity>(sql, new { cscs = cscs }).ToList();
            }
        }
        #endregion

        #region 查询单条日志
        /// <summary>
        /// 查询s_log_err单个对象
        /// </summary>
        /// <returns></returns>
        public s_log_errEntity GetLogerr(string id)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                //string strWhere = "select * from s_log_err where eid=@id";

                string sql = "select * from s_log_err where eid=@id";
                return con.Query<s_log_errEntity>(sql, new { id = id }).FirstOrDefault();
            }
        }
        #endregion

        #region 根据主键和表查询数据
        /// <summary>
        /// 根据主键和表查询数据
        /// </summary>
        /// <param name="tablename"></param>
        /// <param name="mainid"></param>
        /// <param name="parameters"></param>
        /// <param name="cscs"></param>
        /// <returns></returns>
        public List<s_log_errEntity> GetLogerrListByTableName(string tablename, string mainid, string[] parameters, int cscs)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string strWhere = " where  mainid=@mainid and tablename=@tablename and cscs<@cscs  and sfcg=0 ";

                string sql = SqlFactory.GetSelectListSql(new s_log_errEntity()) + strWhere;
                string p = null;
                if (parameters != null)
                {
                    p = string.Join(",", parameters);
                }
                if (!string.IsNullOrEmpty(p))
                {
                    strWhere += "and parameters=@parameters";
                }

                return con.Query<s_log_errEntity>(sql, new { cscs = cscs, mainid = mainid, tablename = tablename, parameters = p }).ToList();
            }
        }
        #endregion

        #region 获取放箱时间
        /// <summary>
        /// 查询s_log_err单个对象
        /// </summary>
        /// <returns></returns>
        public DateTime? GetFxsj(string ywbh)
        {
            using (var con = ConnectionFactory.CreateConnection())
            {
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                string sql = "select max(fxsj) fxsj from yw_hddz_jzxxx where ywbh=@ywbh ";
                return con.Query<DateTime?>(sql, new { ywbh = ywbh }).FirstOrDefault();
               
            }
        }
        #endregion

        #region 深圳抓取推送
        

        #region 根据船名航次修改预计、实际靠港时间
        public void updateKgsjByCmHc(yw_hddzEntity hddz)
        {
            using (var conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                StringBuilder sql = new StringBuilder();
                sql.Append("update yw_hddz set ");
                if (hddz.yjkgsj != null)
                {
                    sql.Append("yjkgsj=@yjkgsj");
                }
                else if (hddz.sjkgsj != null)
                {
                    sql.Append("sjkgsj =@sjkgsj");
                }
                else
                {
                    throw new Exception("没有要修改的时间");
                }
                sql.Append(" where cm=@cm and hcorhbh=@hcorhbh and hgfxsj is null ");
                conn.Execute(sql.ToString(), hddz);
            }
        }
        #endregion


        #region 根据船名航次修改预计、实际靠港时间
        public void updateJzxSj(yw_hddz_jzxxxEntity jzx, string status)
        {
            using (var conn = ConnectionFactory.CreateConnection())
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                {
                    conn.Open();
                }
                StringBuilder sql = new StringBuilder();
                sql.Append("update yw_hddz_jzxxx set ");

                switch (status)
                {
                    case "0":
                        sql.Append("xcsj=@xcsj ");
                        break;
                    case "1":
                        sql.Append("cgqsj=@cgqsj ");
                        break;
                    default:
                        throw new Exception("status值不正确必须为1或0");
                }
                sql.Append(" where ywbh=@ywbh and cxh=@cxh ");
                conn.Execute(sql.ToString(), jzx);
            }
        }
        #endregion
        #endregion
    }
}

