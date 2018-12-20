using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Interfaces.Model;

namespace Interfaces
{
    /// <summary>
    /// 水果通同步的通用口
    /// </summary>
    public class GeneralPortal
    {
        /// <summary>
        /// 数据同步到生鲜港（基于表更新）
        /// </summary>
        /// <param name="tableName">更新的表名 不能为空</param>
        /// <param name="changeCols">更新的字段（分隔符为,半角逗号）  当该参数为空或null时 同步所有字段，当模式为新增时该值为空</param>
        /// <param name="ID">主键值 不能为空。如果更新的是子表，传递主表的主键（例如集装箱信息）</param>
        /// <param name="strErr">执行日志</param>
        /// <param name="parameters">其他可选参数</param>
        /// <returns>是否执行成功</returns>
        public static bool DataToFreshPort(string tableName, string changeCols, string ID, out string strErr, string[] parameters = null)
        {
            strErr = string.Empty;
            bool flag = false;

            s_log_errEntity le = new s_log_errEntity();
            #region 记录日志 等待windows服务调用
            //flag = false;
            if (changeCols == "null")
                changeCols = null;

            try//执行失败 记录接口调用日志 把参数保存下来
            {
                var list = new Service.HddzService().GetLogerrListByTableName(tableName, ID, parameters, 10);

                if (list.FirstOrDefault(p => string.IsNullOrEmpty(p.changecols)) != null)//判断是否有更新所有字段的
                {
                    flag = true;
                    goto End;
                }

                le = list.FirstOrDefault();
                if (le == null)
                {
                    le = new s_log_errEntity();
                    le.eid = Guid.NewGuid().ToString();
                    le.tablename = tableName;
                    le.changecols = changeCols;
                    le.cjsj = DateTime.Now;
                    le.funname = "DataToFreshPort";
                    le.mainid = ID;
                    if (parameters != null)
                        le.parameters = string.Join(",", parameters);
                    Service.BaseService.SaveErrLog(le);

                }
                else
                {
                    string cols = le.changecols.TrimEnd(',');
                    string[] strs = le.changecols.Split(',');
                    foreach (string str in strs)
                    {
                        if (cols.IndexOf(str) == -1)
                            cols += "," + str;
                    }
                    if (le.changecols != cols)//字段发生变化 需要修改
                    {
                        le.changecols = cols;
                        le.cjsj = DateTime.Now;
                        Service.BaseService.UpdateErrLog(le);
                    }
                }
                flag = true;
            }
            catch (Exception ex)
            {
                flag = false;
                strErr = ex.Message;
                //throw ex;
            }

            #endregion
        End:
            return flag;
        }

        #region 重载方法 执行接口调用

        public static bool DataToFreshPort(s_log_errEntity log, out string strErr)
        {
            HddzIF serv = new HddzIF();
            string tableName = log.tablename;
            string changeCols = log.changecols;
            string ID = log.mainid;
            string[] parameters = log.parameters == null ? null : log.parameters.Split(',');
            bool flag = false;
            //字段集合
            List<interfieldEntity> colslist = new List<interfieldEntity>();
            //接口集合
            //List<string> interNames = new List<string>();
            try
            {

                if (!string.IsNullOrEmpty(changeCols))
                {
                    colslist = Service.BaseService.GetField(tableName, changeCols.Split(','));
                    // interNames  = GetIFlist(colslist);
                }

                //根据表名分别调用接口
                switch (tableName)
                {
                    case "yw_hddz"://货代单证
                    case "yw_hddz_jzxxx"://集装箱
                    case "yw_hddz_dzyq"://单证
                        yw_hddzEntity model = new Service.HddzService().GetModel(ID);
                        if (model == null)
                            throw new Exception("表" + tableName + "没有找到主键为" + ID + "的货代单证");
                        flag = HddzInterface(colslist, tableName, model, GetParameter(parameters, 0), serv);
                        break;
                    case "yw_hddz_sdzpgl_cmd"://运费
                    case "yw_hddz_sdzpgl":
                        flag = serv.SynInternational(ID);
                        break;
                    case "yw_hddz_fksqd_cmd"://超期费+国际运费
                    case "yw_hddz_fksqd":
                        yw_hddz_fksqdEntity fksqd = new Service.HddzService().GetFksqd(ID);
                        if (fksqd == null)
                            throw new Exception("表" + tableName + "没有找到主键为" + ID + "的数据");
                        flag = fksqdInterface(fksqd, serv);
                        break;
                    case "yw_hddz_ycyy":
                        flag = serv.SynAbnormal(ID, GetParameter(parameters, 0), GetParameter(parameters, 1));
                        break;
                    case "yw_hddz_kycd"://空运配货 cdphbm
                        flag = serv.SynAirDistribution(ID);
                        break;
                    case "yw_hddz_tpcdxx"://空运配货分录 cdphbm
                        flag = serv.SynAirDistributionItem(ID);
                        break;
                    case "yw_hddz_wlgz"://传入ywbh
                        flag = serv.SynSeaBLByWlgz(ID, GetParameter(parameters, 0));
                        break;
                    case "yw_hddz_yshdfygj_cmd":
                        //case "yw_hddz_qtysk_cmd"://传入ywbh
                        yw_hddzEntity hddz = new Service.HddzService().GetModel(ID);
                        if (hddz == null)
                            throw new Exception("表" + tableName + "没有找到主键为" + ID + "的货代单证");
                        flag = serv.SynFreightCosts(hddz, GetParameter(parameters, 0));
                        break;
                    case "yw_hddz_sjzf"://报关税金 传入ywbh
                        flag = serv.SynCustomsduty(ID);
                        break;
                    default:
                        throw new Exception("没有找到" + tableName + "对应接口");
                    //break;
                }

                serv.LogInfo.SaveLogToDb();
                strErr = serv.LogInfo.buildLogStr();
            }
            catch (Exception ex)
            {
                strErr = ex.Message;
                flag = false;
            }
            try
            {
                log.sccssj = DateTime.Now;
                log.sfcg = flag ? 1 : 0;
                log.cscs++;
                log.errmsg = serv.LogInfo.buildLogStr();
                Service.BaseService.UpdateErrLog(log);
            }
            catch (Exception ex)
            {
                strErr += "保存日志时出现异常：" + ex.Message;
            }
            return flag;
        }

        public static bool TestIn(string id, out string strErr)
        {
            s_log_errEntity log = new Interfaces.Service.HddzService().GetLogerr(id);

            return DataToFreshPort(log, out strErr);

        }
        #endregion


        #region 动态方法报错数据库
        /// <summary>
        /// 保存数据到日志
        /// </summary>
        /// <param name="tableName">更新的表名 不能为空</param>
        /// <param name="changeCols">更新的字段（分隔符为,半角逗号）  当该参数为空或null时 同步所有字段，当模式为新增时该值为空</param>
        /// <param name="ID">主键值 不能为空。如果更新的是子表，传递主表的主键（例如集装箱信息）</param>
        /// <param name="strErr">执行日志</param>
        /// <param name="parameters">其他可选参数</param>
        /// <returns>是否执行成功</returns>
        public bool SaveOpLog(string tableName, string changeCols, string ID, out string strErr, string[] parameters = null)
        {
            strErr = string.Empty;
            bool flag = false;

            s_log_errEntity le = new s_log_errEntity();
            #region 记录日志 等待windows服务调用
            //flag = false;
            if (changeCols == "null")
                changeCols = null;

            try//执行失败 记录接口调用日志 把参数保存下来
            {

                le = new s_log_errEntity();
                le.eid = Guid.NewGuid().ToString();
                le.tablename = tableName;
                le.changecols = changeCols;
                le.cjsj = DateTime.Now;
                le.funname = "DataToFreshPort";
                le.mainid = ID;
                if (parameters != null)
                    le.parameters = string.Join(",", parameters);
                Service.BaseService.SaveErrLog(le);


                flag = true;
            }
            catch (Exception ex)
            {
                flag = false;
                strErr = ex.Message;
                //throw ex;
            }

            #endregion
        End:
            return flag;
        }
        #endregion
        #region 获取接口

        private static List<string> GetIFlist(List<interfieldEntity> colslist)
        {
            var interNames = new List<string>();
            foreach (var item in colslist)
            {
                if (!interNames.Contains(item.interid))
                    interNames.Add(item.interid);

            }
            return interNames;
        }

        #endregion

        #region 获取参数

        private static string GetParameter(string[] parameters, int i)
        {
            if (parameters == null || parameters.Length <= i)
            {
                return null;
            }
            else
                return parameters[i];
        }
        #endregion

        #region 货单单证相关接口
        /// <summary>
        /// 货单单证相关接口
        /// </summary>
        /// <returns></returns>
        private static bool HddzInterface(List<interfieldEntity> colslist, string tableName, yw_hddzEntity model, string cxh, HddzIF serv)
        {

            List<string> interNames = new List<string>();

            //changeCols
            if (string.IsNullOrEmpty(model.SupplierSellID))//添加模式
            {
                colslist = Service.BaseService.GetFieldByTbName("yw_hddz");
                serv.cols = null;
            }
            else
            {
                if (colslist.Count == 0)
                {
                    colslist = Service.BaseService.GetFieldByTbName(tableName);
                    serv.cols = null;
                }
                else
                    serv.cols = colslist;
            }
            interNames = GetIFlist(colslist);
            #region 调用接口
            bool flag = true;

            #region 代卖信息同步
            if (flag && (interNames.Contains("SynSupplierSell")))//代卖
            {
                if (serv.cols != null)
                {
                    serv.cols = colslist.Where(p => p.interid == "SynSupplierSell").ToList();
                }
                flag = serv.SynSupplierSell(model);
            }
            #endregion

            #region 国际物流
            if (flag && interNames.Contains("SynInternational"))//国际物流
            {
                if (serv.cols != null)
                {
                    serv.cols = colslist.Where(p => p.interid == "SynInternational").ToList();
                }
                flag = serv.SynInternational(model);
            }
            #endregion

            #region 国内报关
            if (flag && interNames.Contains("SynDomestic"))//国内报关
            {
                if (serv.cols != null)
                {
                    serv.cols = colslist.Where(p => p.interid == "SynDomestic").ToList();
                }
                flag = serv.SynDomesticCustoms(model);
            }

            if (flag && interNames.Contains("SynDomesticCustomsDoc"))//国内报关单证
            {
                flag = serv.SynDomesticCustomsDoc(model, cxh);
            }
            #endregion

            #region 集装箱信息
            if (flag && interNames.Contains("SynContainerInfo"))//集装箱信息
            {
                flag = serv.SynContainerInfo(model);
            }
            #endregion

            #region 空运提货

            if (flag && interNames.Contains("SynAirBL") && model.ysfs == "空运")//主表
            {
                if (serv.cols != null)
                {
                    serv.cols = colslist.Where(p => p.interid == "SynAirBL").ToList();
                }

                flag = serv.SynAirBL(model);
            }

            if (flag && interNames.Contains("SynAirBLConsignee") && model.ysfs == "空运")//主表
            {
                if (serv.cols != null)
                {
                    serv.cols = colslist.Where(p => p.interid == "SynAirBLConsignee").ToList();
                }
                flag = serv.SynAirBLConsignee(model);
            }
            #endregion

            #region 海运提货

            if (flag && interNames.Contains("SynSeaBL") && model.ysfs == "海运")//主表
            {
                if (serv.cols != null)
                {
                    serv.cols = colslist.Where(p => p.interid == "SynSeaBL").ToList();
                }
                flag = serv.SynSeaBL(model, cxh);
            }

            if (flag && interNames.Contains("SynSeaBLConsignee") && model.ysfs == "海运")//主表
            {
                //flag = serv.SynSeaBLConsignee(model, cxh);
            }
            #endregion

            #region 业务保证金
            if (flag && interNames.Contains("SynBusinessMargin"))//业务保证金
            {
                if (serv.cols != null)
                {
                    serv.cols = colslist.Where(p => p.interid == "SynBusinessMargin").ToList();
                }
                flag = serv.SynBusinessMargin(model);
            }

            #endregion

            #region 还箱超期费用
            if (flag && interNames.Contains("SynGaveBackContainer") && model.ysfs == "海运")//主表
            {
                flag = serv.SynGaveBackContainer(model, cxh);
            }
            #endregion

            #endregion
            //保存日志
            //serv.LogInfo.SaveLog();
            //strErr = serv.LogInfo.Log;

            return flag;
        }

        #endregion

        #region 付款申请单相关
        private static bool fksqdInterface(yw_hddz_fksqdEntity model, HddzIF serv)
        {
            #region 调用接口
            bool flag = true;

            switch (model.fydl)
            {
                case "0105"://还箱超期费
                    flag = serv.SynGaveBackContainer(model.sqdbh);
                    break;
                case "02"://国际运费
                    flag = serv.SynInternationalFreight(model.sqdbh);
                    break;
                case "04"://货代保证金
                    flag = serv.SynFreightForwarder(model);
                    break;
            }

            #endregion
            //保存日志
            //serv.LogInfo.SaveLog();
            //strErr = serv.LogInfo.Log;

            return flag;
        }
        #endregion

        #region 货代单证删除
        /// <summary>
        /// 货代单证删除方法
        /// </summary>
        /// <param name="tableName">表名</param>
        /// <param name="ywbh">业务编号</param>
        /// <param name="strErr">错误日志</param>
        /// <returns></returns>
        public static bool DelHddz(string tableName, string ywbh, out string strErr)
        {
            bool flag = false;
            try
            {
                strErr = string.Empty;
                s_log_errEntity le = new s_log_errEntity();

                le.eid = Guid.NewGuid().ToString();
                le.tablename = tableName;
                le.mainid = ywbh;
                le.changecols = "";
                le.cjsj = DateTime.Now;
                le.funname = "DelHddz";
                Service.BaseService.SaveErrLog(le);
                //禁用未同步的接口设置sfcg 2
                Service.BaseService.UpdateLogList(le.mainid);
                flag = true;
            }
            catch (Exception ex)
            {
                strErr = ex.Message;
                flag = false;
            }

            return flag;
        }

        /// <summary>
        /// 货代单证删除方法
        /// </summary>
        /// <param name="ywbh">业务编号</param>
        /// <param name="strErr">错误日志</param>
        /// <param name="eid">失败日志id</param>
        /// <returns></returns>
        public static bool DelHddz(s_log_errEntity le, out string strErr)
        {
            bool flag = false;
            strErr = string.Empty;
            try
            {
                HddzIF serv = new HddzIF();
                flag = serv.DelHddz(le.mainid);
                serv.LogInfo.SaveLog();
                le.errmsg += serv.LogInfo.Log;
            }
            catch (Exception ex)
            {
                le.errmsg += DateTime.Now.ToString() + ":" + ex.Message;
                strErr = ex.Message;
            }
            try
            {
                le.sccssj = DateTime.Now;
                le.sfcg = flag ? 1 : 0;
                le.cscs++;
                Service.BaseService.UpdateErrLog(le);
            }
            catch (Exception ex)
            {
                strErr += ex.Message;
            }
            return flag;
        }
        #endregion

        #region 重试执行方法
        /// <summary>
        /// 重试执行同步方法
        /// </summary>
        /// <param name="eid">日志ID</param>
        public void RetryToFreshPort(string eid)
        {

        }

        #endregion

    }
}
