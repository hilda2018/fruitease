using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Interfaces.Model;
using Interfaces.Service;
using System.Xml;
using System.ComponentModel;
using System.Reflection;
using Attributes;

namespace Interfaces
{
    /// <summary>
    /// 货代单证相关接口对生鲜港
    /// </summary>
    public class HddzIF
    {
        /// <summary>
        /// 初始化
        /// </summary>
        public HddzIF()
        {
            loginfo = new SysLog();
        }

        private SysLog loginfo;
        public SysLog LogInfo
        {
            get { return loginfo; }
        }
        /// <summary>
        /// 数据访问对象
        /// </summary> 
        HddzService DbServ = new HddzService();
        /// <summary>
        /// webservice服务对象
        /// </summary>
        FreshPortSupplierSell.CommonInvokeServiceImpl WSserv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
        /// <summary>
        /// 更改的列集合
        /// </summary>
        public List<interfieldEntity> cols { get; set; }



        #region 同步生鲜港代卖
        /// <summary>
        /// 
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public bool SynSupplierSell(string ywbh)
        {
            yw_hddzEntity model = DbServ.GetModel(ywbh);
            return SynSupplierSell(model);
        }

        /// <summary>
        /// 货代单证 添加|修改同步生鲜港
        /// </summary>
        /// <param name="list">更新的对象集合</param>
        /// <returns></returns>
        public bool SynSupplierSell(yw_hddzEntity m)
        {

            string user = System.Configuration.ConfigurationManager.AppSettings["FreshPortUser"];

            WSserv.Timeout = 20000;//20秒的超时时间

            #region 查询汇率
            //List<t_currencyEntity> curlist = BaseService.GetCurrencyList();
            #endregion

            #region 遍历list,调用webservice
            //foreach (var m in list)
            //{
            SysLogEntity log = new SysLogEntity();
            log.ywbh = m.ywbh;
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.jklx = "代卖同步";

            List<contractcontainer> containerlist = new List<contractcontainer>();
            try
            {
                #region 构建生鲜港代卖表Model
                suppliersellEntity model = new suppliersellEntity();
                model.SupplierSellID = m.SupplierSellID;
                model.UserID = user;
                model.InDate = m.zbrq.ToString("yyyy-MM-dd hh:mm:ss");
                model.SellCode = m.ywbh;
                //model.SellerID = m.gwgysbm;
                //卖方
                //model.SellerID = m.gwgysmc;
                if (!string.IsNullOrEmpty(m.zjsbm))
                {
                    yw_wldwEntity zjs = BaseService.GetWldwModelByKhbm(m.zjsbm);
                    if (zjs != null)
                    {
                        model.selleraddresscn = zjs.address;
                        model.selleraddressen = zjs.address_yw;
                        model.SellerID = zjs.khmc_yw;
                    }
                }
                //实际发货
                if (!string.IsNullOrEmpty(m.gwgysbm))
                {
                    yw_wldwEntity sjgys = BaseService.GetWldwModelByKhbm(m.gwgysbm);
                    if (sjgys != null)
                    {
                        model.actualseller = sjgys.khmc_yw;
                        model.actcnname = sjgys.khmc;
                        model.actaddresscn = sjgys.address;
                        model.actaddressen = sjgys.address_yw;
                    }
                }

                //model.BuyerID = m.khbm;
                //买方
                yw_wldwEntity kh = BaseService.GetWldwModelByKhbm(m.khbm);
                if (!string.IsNullOrEmpty(m.khbm))
                {
                    if (kh != null)
                    {
                        model.buyercnname = kh.khmc;
                        model.BuyerID = kh.khmc_yw;
                        model.buyerenname = kh.khmc_yw;
                        if (string.IsNullOrEmpty(model.buyerenname))
                        {
                            model.buyerenname = kh.khmc;
                            model.BuyerID = kh.khmc;
                        }
                        model.buyeraddresscn = kh.address;
                        model.buyeraddressen = kh.address_yw;
                    }
                }


                //if (string.IsNullOrEmpty(model.buyerenname))
                //{
                //    throw new Exception("委托客户英文名称为空！");
                //}




                model.HasImportAgent = m.zydl == "自营" ? "0" : "1";
                yw_wldwEntity jydw = BaseService.GetWldwModelByKhbm(m.jydwbm);
                if (jydw != null)
                {
                    model.ImportAgentID = jydw.khmc_yw;
                }
                //model.ImportAgentID = m.jydwmc;
                model.actualreceiveid = m.shdwmc;
                //model.ContractNo = m.hth;
                model.orderno = m.hth;
                model.Currency = m.wbbb;
                model.SumMoney = (decimal)m.zje;
                model.containerNo = m.hz_jzxh;
                //model.departuredate = m.zcrq.ToString("yyyy-MM-dd");
                //合同总金额人民币
                //var cur = curlist.SingleOrDefault(p => p.cu_type == m.wbbb);
                //if (cur != null)
                //{
                //    model.SumMoneyRMB = (decimal)m.zje * cur.xchg_rmb;
                //}
                //model.OriginCountry = m.ycddm;
                model.OriginCountry = m.ycd;
                //目的国 固定为中国 水果通中国代码为100
                //model.DestinationCountry = "100";
                model.DestinationCountry = "中国";
                //model.LoadingPort = m.qygdm;
                model.LoadingPort = m.qyg;
                model.DischargePort = m.mdg;
                model.TermsPayment = m.jgfs;
                model.Invoice = m.invoiceno;
                model.TotalSuttleweight = m.zjz.ToString();
                model.TotalGrossweight = m.zmz.ToString();
                //model.CompanyID = m.gwhdbm;
                model.CompanyID = m.gwhdmc;
                model.Transport = m.ysfs == "海运" ? "0" : m.ysfs == "空运" ? "1" : "";
                //代买标志Y--代卖；N或null--买断 转换到 生鲜港 0 代卖；1 买断
                model.businesstype = m.dmbz == "Y" ? "0" : "";
                model.secondtax = m.dmbz == "Y" ? "Y" : "";
                model.BLNo = m.ztdh;
                model.countryid = "中国";
                model.loadport = m.xhgq;
                model.products = m.hz_spmc;
                model.num = m.zxs;
                model.expectedarrival = ConvertDateTime(m.yjkgsj);
                model.actualarrivalf = ConvertDateTime(m.sjkgsj);
                //model.num = DbServ.GetTotalSpslByYhbh(m.ywbh).ToString();
                #endregion

                #region 调用webservice
                log.RequestXML = GetPostXml(model).OuterXml;

                log.ResponseXml = WSserv.suppliersell(log.RequestXML);
                if (string.IsNullOrEmpty(log.ResponseXml))
                {
                    throw new Exception("远程接口返回的xml为空！");
                }
                #endregion

                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);
                if (res.flag)//执行成功
                {
                    //解析返回data 取出id
                    string id = GetIDFromXml(res.data);
                    if (string.IsNullOrEmpty(m.SupplierSellID))//如果是新增，则需要把生鲜港ID写入货代单证表
                    {
                        if (!string.IsNullOrEmpty(id))
                        {
                            try
                            {
                                if (DbServ.UpdateSupplierSellID(id, m.ywbh))
                                {
                                    log.status = (int)LogStateType.Success;
                                    m.SupplierSellID = id;
                                }
                                else
                                    throw new Exception("反写货代单证关联ID失败");
                            }
                            catch (Exception ex)
                            {
                                log.status = (int)LogStateType.SaveIDFail;
                                log.msg = ex.Message;
                            }
                        }
                        else//返回的xml中如果没有SupplierSellID
                            log.msg = "返回的XML中SupplierSellID值为空";
                    }
                    else//修改模式直接成功
                    {
                        log.status = (int)LogStateType.Success;
                    }
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<suppliersellEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            //if (log.status != (int)LogStateType.Success)
            loginfo.Add(log);
            //}
            #endregion

            return log.status == (int)LogStateType.Success;
        }

        #endregion

        #region 删除货代单证
        /// <summary>
        /// 删除货代单证 同步到生鲜港
        /// </summary>
        /// <returns></returns>
        public bool DelHddz(string ywbh)
        {
            #region 日志初始化
            SysLogEntity log = new SysLogEntity();
            log.ywbh = ywbh;
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.jklx = "删除货代单证";
            #endregion

            try
            {
                #region 调用接口
                var model = new { ywbh = ywbh };
                log.RequestXML = GetPostXml<string>(model, true).OuterXml;

                log.ResponseXml = WSserv.deletesuppliersell(log.RequestXML);
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }

        #endregion

        #region 同步集装箱信息



        /// <summary>
        /// 同步集装箱信息
        /// </summary>
        /// <returns></returns>
        public bool SynContainerInfo(yw_hddzEntity hddz, string cxh = null)
        {


            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            //WSserv.Timeout = 20000;//20秒的超时时间
            #region 日志初始化
            SysLogEntity log = new SysLogEntity();
            log.ywbh = hddz.ywbh;
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.jklx = "集装箱信息同步";
            #endregion

            try
            {
                contractcontainer1 model = new contractcontainer1();
                model.contractcontainer = new List<contractcontainer>();
                model.SupplierSellID = hddz.SupplierSellID;
                if (string.IsNullOrEmpty(model.SupplierSellID))
                {
                    throw new Exception("代卖信息未同步");
                }
                List<yw_hddz_jzxxxEntity> jzxlist = DbServ.GetJzxxxListByYwbh(hddz.ywbh, cxh);

                if (hddz.ysfs == "空运")//空运只有一条 需要数量合并
                {
                    contractcontainer container = new contractcontainer();
                    container.SupplierSellID = hddz.SupplierSellID;
                    container.containerNo = jzxlist[0].jzxh;
                    container.boxcase = jzxlist[0].xx;
                    container.loadtype = jzxlist[0].zhlx;
                    container.xlfs = jzxlist[0].clfs;
                    container.amount = jzxlist.Sum(p => p.tpxx == null ? 0 : int.Parse(p.tpxx)).ToString();
                    model.contractcontainer.Add(container);
                }
                else
                {//海运
                    foreach (var jzx in jzxlist)
                    {
                        contractcontainer container = new contractcontainer();
                        container.SupplierSellID = hddz.SupplierSellID;
                        container.containerNo = jzx.jzxh;
                        container.xlfs = jzx.clfs;
                        container.boxcase = jzx.xx;
                        container.loadtype = jzx.zhlx;
                        container.amount = "1";
                        model.contractcontainer.Add(container);
                    }
                }

                #region 调用接口
                log.RequestXML = GetPostXml<contractcontainer>(model, true).OuterXml;

                log.ResponseXml = WSserv.container(log.RequestXML);
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        #endregion

        #region 同步国际物流
        ///// <summary>
        ///// 同步国际物流 传递业务编号
        ///// </summary>
        ///// <param name="ywbh"></param>
        ///// <returns></returns>
        //public bool SynInternational(string ywbh)
        //{
        //    yw_hddzEntity model = DbServ.GetModel(ywbh);
        //    return SynInternational(model);
        //}

        /// <summary>
        /// 同步国际物流 传递发票编号
        /// </summary>
        /// <param name="fpbh">发票编号</param>
        /// <returns></returns>
        public bool SynInternational(string fpbh)
        {
            List<yw_hddzEntity> list = DbServ.GetHddzByFph(fpbh);

            bool flag = true;

            foreach (var m in list)
            {

                flag = SynInternational(m);
            }

            return flag;
        }

        /// <summary>
        /// 同步国际物流信息，需要先同步代卖信息
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public bool SynInternational(yw_hddzEntity hddz)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "国际物流";
            try
            {
                //yw_hddzEntity hddz = new HddzService().GetModel(ywbh);
                if (string.IsNullOrEmpty(hddz.SupplierSellID))
                {
                    throw new Exception("同步物流信息之前需要同步代卖信息！");
                }


                internalEntity model = new internalEntity();
                model.SupplierSellID = hddz.SupplierSellID;
                model.transport = hddz.ysfs == "海运" ? "0" : hddz.ysfs == "空运" ? "1" : "";
                model.IfTransit = string.IsNullOrEmpty(hddz.sfzy) ? "-1" : (hddz.sfzy == "Y" ? "1" : "0");
                model.VoyageNumber = string.IsNullOrEmpty(hddz.hcorhbh_zq) ? hddz.hcorhbh : hddz.hcorhbh_zq;
                model.TransportCompany = hddz.cyr;
                if (hddz.ysfs == "海运")
                    model.TransportNumber = hddz.cm;
                else
                    model.TransportNumber = model.VoyageNumber;

                //承运人需要从往来单位查询英文名称 传递
                yw_wldwEntity cyr = BaseService.GetWldwModelByKhbm(hddz.cyrbm);
                if (cyr != null)
                {
                    model.shipcompany = cyr.khmc_yw;
                    model.companycnname = cyr.khmc;
                }


                model.TransitTportNumber = hddz.zz_cm;
                model.TransitVoyageNumber = hddz.zz_hcorhbh;
                //model.LadingBill = hddz.ztdh;
                model.LadingBillType = hddz.tdlx;
                model.ladingbilltypecnname = hddz.tdlx;
                model.departuredate = ConvertDateTime(hddz.zcrq);
                model.telexrelease = ConvertDateTime(hddz.qrdfsj);
                model.ispaysshipping = hddz.sfyyf == "Y" ? "1" : "0";
                model.feebear = hddz.yfcdr;
                model.feetype = hddz.khorhd == "客户" ? "1" : "0";
                model.currency = hddz.yfbb;

                yw_hddz_yfView yf = DbServ.GetSdyffpsj(hddz.ywbh);
                if (yf != null)
                {
                    model.shipcost = yf.kpje.ToString();
                    model.receiveinvoicetime = ConvertDateTime(yf.sdfprq);
                }

                model.shipreceivetime = ConvertDateTime(hddz.yfzfqrsj);
                //model.expectedarrival = ConvertDateTime(hddz.yjkgsj);
                //model.actualarrivalf = ConvertDateTime(hddz.sjkgsj);

                log.RequestXML = GetPostXml(model).OuterXml;
                log.ResponseXml = WSserv.@internal(log.RequestXML);
                //string strResXml = "";
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
            //把日志保存到本地
            //loginfo.SaveLog();
            //if (loginfo.GetFailLog().Count > 0)//有执行失败
            //{
            //    return false;
            //}
            //else
            //    return true;
        }
        #endregion

        #region 同步国内报关
        /// <summary>
        /// 同步国内报关
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public bool SynDomesticCustoms(string ywbh)
        {
            yw_hddzEntity model = DbServ.GetModel(ywbh);
            if (model == null)
            {
                throw new Exception("没有查询到业务编号对应的数据！");
            }
            return SynDomesticCustoms(model);
        }
        enum hgfxfs { 正常放行, 放行查验, 查验放行 };
        /// <summary>
        /// 同步国内报关
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynDomesticCustoms(yw_hddzEntity hddz)
        {

            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "国内报关";
            try
            {

                //yw_hddzEntity hddz = new HddzService().GetModel(ywbh);
                if (string.IsNullOrEmpty(hddz.SupplierSellID))
                {
                    throw new Exception("同步物流信息之前需要同步代卖信息！");
                }
                dometicEntity model = new dometicEntity();
                model.SupplierSellID = hddz.SupplierSellID;
                //model.ExpectedArrival = ConvertDateTime(hddz.yjkgsj);
                //model.ActualArrivalf = ConvertDateTime(hddz.sjkgsj);
                model.CustomsClearance = ConvertDateTime(hddz.hgfxsj);
                model.DeclarationNumber = hddz.bgdh;
                model.customsid = hddz.bghg;
                //hgfxfs a ;
                //Enum.TryParse<hgfxfs>(hddz.hgfxfs, out a);
                model.CustomsCheck = string.IsNullOrEmpty(hddz.hgfxfs) ? null : (hddz.hgfxfs == "正常放行" ? "0" : (hddz.hgfxfs == "查验放行" ? "1" : "2"));
                model.blno = hddz.ztdh;

                model.ClearanceNumber = hddz.tgdh;
                model.InspectionTime = ConvertDateTime(hddz.wsbjsj);
                model.InspectionTimereal = ConvertDateTime(hddz.cktgsj);
                model.WarehouseReceiptTime = ConvertDateTime(hddz.sjzq_zqcdsj);//仓单时间 需要再确认
                model.DeclarationTime = ConvertDateTime(hddz.bgsj);
                model.ArrivalTime = ConvertDateTime(hddz.sjzq_zqdgsj);
                model.TallyTime = ConvertDateTime(hddz.sjzq_zqlhsj);
                model.SingleTime = ConvertDateTime(hddz.sjhdsj);
                model.expectcustomsclearance = ConvertDateTime(hddz.yghgfxsj);
                model.reportno = hddz.bjh;
                model.inspectime = ConvertDateTime(hddz.wzhfxsj);
                model.putboxtime = ConvertDateTime(DbServ.GetFxsj(hddz.ywbh));

                //string strPostXml = GetPostXml(model).OuterXml;
                log.RequestXML = GetPostXml(model).OuterXml;
                //string strResXml = serv.dometic(strPostXml);
                log.ResponseXml = WSserv.dometic(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            //把日志保存到本地
            //loginfo.SaveLog();
            //loginfo.SaveLogToDb();

            return log.status == (int)LogStateType.Success;
            //if (loginfo.GetFailLog().Count > 0)//有执行失败
            //{
            //    return false;
            //}
            //else
            //    return true;

        }

        /// <summary>
        /// 国内报关单证同步
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynDomesticCustomsDoc(yw_hddzEntity hddz, string cxh)
        {
            //#region 信息

            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            WSserv.Timeout = 20000;//20秒的超时时间
            #region 日志初始化
            SysLogEntity log = new SysLogEntity();
            log.ywbh = hddz.ywbh;
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.jklx = "国内报关单证同步";
            #endregion

            try
            {
                if (string.IsNullOrEmpty(hddz.SupplierSellID))
                {
                    throw new Exception("代卖信息未同步");
                }
                List<yw_hddz_dzyqEntity> dzlist = DbServ.GetdzyqListByYwbh(hddz.ywbh, cxh);
                declarationdocument1Entity model = new declarationdocument1Entity();
                model.items = new List<declarationdocumentEntity>();
                model.SupplierSellID = hddz.SupplierSellID;
                if (dzlist.Count == 0)
                {
                    return false;
                }

                foreach (var dz in dzlist)
                {
                    declarationdocumentEntity m = new declarationdocumentEntity();

                    m.declarationdocumentid = dz.ywbh + "_" + dz.cxh;
                    m.eximdocumentid = dz.dzmc;
                    // m.Positivecopy = dz.zfbqk == "正本" ? "1" : (dz.zfbqk == "副本" ? "2" : "0");
                    switch (dz.zfbqk)
                    {
                        case "正本":
                        case "正本提单":
                            m.Positivecopy = "1";
                            break;
                        case "副本":
                        case "电放":
                        case "电放提单":
                        case "WAYBILL":
                            m.Positivecopy = "2";
                            break;
                        default:
                            m.Positivecopy = "0";
                            break;
                    }
                    //收到正本标识 和现场收单标识 任一打钩 算收到正本
                    m.originalreceive = dz.sfsdzb == "Y" || dz.xcsdbz == "Y" ? "1" : "0";
                    m.originaltime = ConvertDateTime(dz.sdzbsj);

                    m.copyreceive = dz.sfsdfb == "Y" ? "1" : "0";
                    m.copytime = ConvertDateTime(dz.sdfbsj);
                    m.ExaminationResults = dz.sdzxjg == "通过" ? "1" : (string.IsNullOrEmpty(dz.sdzxjg) ? "0" : "2");
                    //m.note =dz

                    model.items.Add(m);
                }


                #region 调用接口
                log.RequestXML = GetPostXml<declarationdocumentEntity>(model, true).OuterXml;

                log.ResponseXml = WSserv.logicitem(log.RequestXML);
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;


        }
        #endregion

        #region 海运提货
        /// <summary>
        /// 海运提货主信息
        /// </summary>
        /// <returns></returns>
        public bool SynSeaBLByWlgz(string ywbh, string cxh)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = ywbh;
            log.jklx = "海运提货";
            try
            {
                seadelivery1Entity model = new seadelivery1Entity();
                //司机信息 物流跟踪
                List<yw_hddz_wlgzEntity> wlgzlist = DbServ.GetWlgzList(ywbh, cxh);

                if (wlgzlist.Count == 0)//没有物流 直接跳出
                {
                    return true;
                }

                yw_hddz_wlgzEntity wlgz = null;
                foreach (var m in wlgzlist)
                {
                    if (!string.IsNullOrEmpty(m.sjmc))
                    {
                        wlgz = m;
                        break;
                    }
                }

                if (wlgz == null)
                    throw new Exception("没有找到" + ywbh + "的司机信息");

                List<yw_hddz_jzxxxEntity> jzxlist = DbServ.GetJzxxxListByYwbh(ywbh, cxh);
                model.SupplierSellID = DbServ.GetSupplierSellIDByYwbh(ywbh);

                if (string.IsNullOrEmpty(model.SupplierSellID))
                    throw new Exception("代卖主表信息未同步！");

                model.takegoods = new List<seadeliveryEntity>();

                foreach (var jzx in jzxlist)
                {
                    seadeliveryEntity m = new seadeliveryEntity();
                    m.SupplierSellID = model.SupplierSellID;
                    m.containerno = jzx.jzxh;
                    m.drivercontact = wlgz.sjmc;
                    m.drivertel = wlgz.sjh;
                    m.platenumber = wlgz.cph;

                    model.takegoods.Add(m);
                }


                log.RequestXML = GetPostXml<seadeliveryEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.domestictakegoods(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        /// <summary>
        /// 海运提货主信息
        /// </summary>
        /// <returns></returns>
        public bool SynSeaBL(yw_hddzEntity hddz, string cxh)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "海运提货";
            try
            {
                if (string.IsNullOrEmpty(hddz.SupplierSellID))
                {
                    throw new Exception("代卖信息未同步");
                }
                seadelivery1Entity model = new seadelivery1Entity();
                List<yw_hddz_jzxxxEntity> jzxlist = DbServ.GetJzxxxListByYwbh(hddz.ywbh, cxh);
                model.SupplierSellID = hddz.SupplierSellID;
                model.takegoods = new List<seadeliveryEntity>();


                foreach (var jzx in jzxlist)
                {
                    seadeliveryEntity m = new seadeliveryEntity();
                    m.SupplierSellID = hddz.SupplierSellID;
                    m.containerno = jzx.jzxh;
                    if (jzx.htjhthsj != null)//后台计划提货时间 需要日期和时间段累加
                    {
                        DateTime jhthsj = (DateTime)jzx.htjhthsj;
                        int h = 0;
                        int.TryParse(jzx.htjhthsj_sjd, out h);
                        jhthsj = jhthsj.Date.AddHours(h);
                        m.takegoodstime = jhthsj.ToString("yyyy-MM-dd HH:mm:ss");
                    }
                    //m.takegoodstime = ConvertDateTime(jzx.htjhthsj);


                    m.docklandsleavetime = ConvertDateTime(jzx.cgqsj);
                    m.quarantinepointarrivetime = ConvertDateTime(jzx.djydsj);
                    m.quarantinepointname = jzx.jyd_mc;
                    m.quarantinepointstate = string.IsNullOrEmpty(jzx.jycydzt) ? "-1" : (jzx.jycydzt == "扣柜" ? "1" : "0");
                    m.quarantinepointleavetime = ConvertDateTime(jzx.tgjysj);
                    //m.realtakegoodstime = jzx.
                    m.quarantineresult = (GetKghcl(jzx.kghcl) + 1).ToString();
                    m.islab = jzx.ssys == "Y" ? "1" : "0";

                    ////司机信息 物流跟踪
                    //yw_hddz_wlgzEntity wlgz = DbServ.GetWlgz(hddz.ywbh, jzx.cxh.ToString());
                    //if (wlgz != null)
                    //{
                    //    m.drivercontact = wlgz.sjmc;
                    //    m.drivertel = wlgz.sjh;
                    //    m.platenumber = wlgz.cph;
                    //}
                    model.takegoods.Add(m);
                }


                log.RequestXML = GetPostXml<seadeliveryEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.domestictakegoods(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }

        /// <summary>
        /// 海运提货收货人
        /// </summary>
        /// <returns></returns>
        public bool SynSeaBLConsignee(yw_hddzEntity hddz, string cxh)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "海运提货收货人";
            try
            {
                seadeliveryitemEntity model = new seadeliveryitemEntity();
                List<yw_hddz_wldzView> jzxlist = DbServ.GetWldzListByYwbh(hddz.ywbh, cxh);
                //model.buyid = hddz.khmc;
                model.SupplierSellID = hddz.SupplierSellID;
                model.shr = new List<seadeliveryitem>();

                foreach (var wldz in jzxlist)
                {
                    seadeliveryitem m = new seadeliveryitem();
                    // m.airdeliveryitemid = hddz.ywbh + "_shr_" + jzx.cxh;
                    m.SupplierSellID = hddz.SupplierSellID;
                    //m.buyid = hddz.khmc;
                    m.containerno = wldz.jzxh;

                    m.Customerconsigneeid = wldz.sjshrmc;
                    m.dtgcontacts = wldz.sjshrlxr;
                    m.dtgdeliveryaddress = wldz.dz_xx;

                    m.dtgcontactnumber = wldz.sjshrlxdh;
                    model.shr.Add(m);
                }

                log.RequestXML = GetPostXml<seadeliveryitem>(model, true).OuterXml;
                log.ResponseXml = WSserv.takeitem(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        #endregion

        #region 空运提货（提单信息）
        /// <summary>
        /// 空运提单信息
        /// </summary>
        /// <returns></returns>
        public bool SynAirBL(yw_hddzEntity hddz)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "空运提货";
            try
            {
                if (string.IsNullOrEmpty(hddz.SupplierSellID))
                {
                    throw new Exception("代卖信息未同步");
                }
                airdeliveryEntity model = new airdeliveryEntity();
                yw_hddz_jzxxxEntity jzx = DbServ.GetNewestJzxxxByYwbh(hddz.ywbh);
                model.suppliersellid = hddz.SupplierSellID;
                model.quarantinetime = ConvertDateTime(jzx.tgjysj);
                model.quarantinemethod = string.IsNullOrEmpty(jzx.jycydzt) ? "-1" : (jzx.jycydzt == "正常放行" ? "0" : "1");
                model.quarantineresult = GetKghcl(jzx.kghcl).ToString();
                model.islab = jzx.ssys == "Y" ? "0" : null;
                model.note = jzx.jydbz;

                log.RequestXML = GetPostXml(model, true).OuterXml;
                log.ResponseXml = WSserv.airdelivery(log.RequestXML);

                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }

        /// <summary>
        /// 空运提单分录收货人信息
        /// </summary>
        /// <returns></returns>
        public bool SynAirBLConsignee(yw_hddzEntity hddz, string cxh = null)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "空运提货收货人";
            try
            {
                if (string.IsNullOrEmpty(hddz.SupplierSellID))
                {
                    throw new Exception("代卖信息未同步");
                }
                airdeliveryitemEntity model = new airdeliveryitemEntity();
                List<yw_hddz_jzxxxEntity> jzxlist = DbServ.GetJzxxxListByYwbh(hddz.ywbh, cxh);
                //model.buyid = hddz.khmc;
                model.suppliersellid = hddz.SupplierSellID;
                model.shr = new List<airdeliveryitem>();

                foreach (var jzx in jzxlist)
                {
                    airdeliveryitem m = new airdeliveryitem();
                    m.airdeliveryitemid = hddz.ywbh + "_shr_" + jzx.cxh;
                    m.suppliersellid = hddz.SupplierSellID;
                    //m.buyid = hddz.khmc;
                    m.consigneecompany = jzx.sjshrmc;
                    m.contacts = jzx.lxr;
                    m.deliveryaddress = jzx.shdz;
                    m.num = jzx.tpxx;
                    m.contactnumber = jzx.lxdh;
                    model.shr.Add(m);
                }

                log.RequestXML = GetPostXml<airdeliveryitem>(model, true).OuterXml;
                log.ResponseXml = WSserv.airdeliveryitem(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }

        public int GetKghcl(string str)
        {
            int i = -1;
            switch (str)
            {
                case "熏蒸":
                    i = 0;
                    break;
                case "放行":
                    i = 1;
                    break;
                case "退运":
                    i = 2;
                    break;
                case "销毁":
                    i = 3;
                    break;
                case "贴标签":
                    i = 4;
                    break;
                case "辐照":
                    i = 5;
                    break;
            }
            return i;
        }
        #endregion

        #region 空运配货
        /// <summary>
        /// 空运配货
        /// </summary>
        /// <returns></returns>
        public bool SynAirDistribution(string cdphbm)
        {
            yw_hddz_kycdEntity kycd = DbServ.GetKycdModel(cdphbm);

            return SynAirDistribution(kycd);
        }

        /// <summary>
        /// 空运配货
        /// </summary>
        /// <returns></returns>
        public bool SynAirDistribution(yw_hddz_kycdEntity kycd)
        {

            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = kycd.cdphbm;
            log.jklx = "空运配货";
            try
            {
                AirDistributionEntity model = new AirDistributionEntity();

                model.cargoid = kycd.cdphbm;
                model.driver = kycd.sj;
                model.tel = kycd.sjlxfs;
                model.carplate = kycd.cph;
                model.departuretime = ConvertDateTime(kycd.cgqsj);
                model.arrivequarantinetime = ConvertDateTime(kycd.djydsj);

                log.RequestXML = GetPostXml(model).OuterXml;
                log.ResponseXml = WSserv.cargo(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;

        }
        /// <summary>
        /// 空运配货分录
        /// </summary>
        /// <param name="kycd"></param>
        /// <returns></returns>
        public bool SynAirDistributionItem(string cdphbm)
        {

            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = cdphbm;
            log.jklx = "空运配货收货人";
            try
            {
                AirDistributionItem1Entity model = new AirDistributionItem1Entity();
                model.cargoid = cdphbm;
                model.items = new List<AirDistributionItemEntity>();
                List<yw_hddz_tpcdxxEntity> list = DbServ.GetTpcdxxList(cdphbm);

                foreach (var item in list)
                {
                    AirDistributionItemEntity m = new AirDistributionItemEntity();
                    m.airdeliveryitemid = item.ywbh + "_shr_" + item.cxh;
                    m.loadingquantity = item.gq_tpxx;
                    m.receivegoodstime = item.qdsj;

                    model.items.Add(m);
                }

                log.RequestXML = GetPostXml<AirDistributionItemEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.cargoitem(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;

        }
        #endregion

        #region 异常原因接口
        /// <summary>
        /// 异常同步
        /// </summary>
        /// <param name="ywbh">货代单证业务编号</param>
        /// <param name="ycyybm">异常原因编码</param>
        /// <param name="jzxh">集装箱号 海运提货用到</param>
        /// <returns></returns>
        public bool SynAbnormal(string ywbh, string ycyybm, string jzxh = null)
        {
            yw_hddzEntity model = DbServ.GetModel(ywbh);
            if (model == null)
            {
                throw new Exception("没有查询到业务编号对应的数据！");
            }
            return SynAbnormal(model, ycyybm, jzxh);
        }
        /// <summary>
        /// 异常原因
        /// </summary>
        /// <param name="hddz"></param>
        /// <param name="jzxh"></param>
        /// <returns></returns>
        public bool SynAbnormal(yw_hddzEntity hddz, string ycyybm, string jzxh = null)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "异常同步";
            try
            {
                if (string.IsNullOrEmpty(ycyybm))
                {
                    throw new Exception("异常原因编码不能为空！");
                }
                abnormal1Entity model = new abnormal1Entity();
                List<yw_hddz_ycyyEntity> list = DbServ.GetYcyyList(hddz.ywbh, ycyybm, jzxh);
                //model.buyid = hddz.khmc;
                model.suppliersellid = hddz.SupplierSellID;
                model.error = new List<abnormalEntity>();
                if (list.Count == 0)
                    return false;

                switch (ycyybm.Substring(0, 2))
                {
                    case "01":
                        model.yclx = "国内报关";
                        break;
                    case "02":
                        model.yclx = "海运提货";
                        //if (string.IsNullOrEmpty(jzxh) && hddz.ysfs == "海运")
                        //    throw new Exception("海运提货同步异常信息必须传入集装箱号！");
                        break;
                    case "03":
                        model.yclx = "空运提货";
                        break;
                    default:
                        throw new Exception("异常原因类别不识别！");
                }
                //model.cont = jzxh;


                foreach (var item in list)
                {
                    abnormalEntity m = new abnormalEntity();
                    m.errortime = ConvertDateTime(item.zbrq);
                    m.errortypecode = item.ycyybm;
                    m.errortypename = item.ycyymc;
                    m.note = item.beizhu;
                    if (model.yclx == "海运提货" && string.IsNullOrEmpty(jzxh))//海运提货 需要按照集装箱拆分
                    {
                        List<yw_hddz_jzxxxEntity> jzxlist = DbServ.GetJzxxxListByYwbh(hddz.ywbh);

                        foreach (var jzx in jzxlist)
                        {
                            abnormalEntity m1 = new abnormalEntity();
                            m1.errortime = ConvertDateTime(item.zbrq);
                            m1.errortypecode = item.ycyybm;
                            m1.errortypename = item.ycyymc;
                            m1.note = item.beizhu;
                            m1.cont = jzx.jzxh;
                            model.error.Add(m1);
                        }

                    }
                    else
                    {
                        m.cont = jzxh;
                        model.error.Add(m);
                    }
                }

                log.RequestXML = GetPostXml<abnormalEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.err(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;

            //return false;
        }

        #endregion

        #region 资金费用同步
        #region 海运还箱超期

        /// <summary>
        /// 海运还箱超期
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynGaveBackContainer(string sqdbh)
        {
            List<yw_hddzEntity> list = DbServ.GetHddzBySqdbh(sqdbh);

            bool flag = true;

            foreach (var m in list)
            {
                flag = SynGaveBackContainer(m, null);
            }

            return flag;
        }

        /// <summary>
        /// 海运还箱超期
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynGaveBackContainer(string ywbh, string cxh)
        {
            yw_hddzEntity model = DbServ.GetModel(ywbh);
            if (model == null)
            {
                throw new Exception("没有查询到业务编号对应的数据！");
            }
            return SynGaveBackContainer(model, cxh);
        }

        /// <summary>
        /// 海运还箱超期
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynGaveBackContainer(yw_hddzEntity hddz, string cxh)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "海运还箱超期";
            try
            {
                GaveBackContainer1 model = new GaveBackContainer1();
                List<yw_hddz_jzxxxEntity> jzxlist = DbServ.GetJzxxxListByYwbh(hddz.ywbh, cxh);
                //model.buyid = hddz.khmc;
                model.SupplierSellID = hddz.SupplierSellID;
                model.takegoods = new List<GaveBackContainerEntity>();

                if (string.IsNullOrEmpty(model.SupplierSellID))
                    throw new Exception("代卖信息未同步");

                foreach (var jzx in jzxlist)
                {
                    GaveBackContainerEntity m = new GaveBackContainerEntity();
                    // m.airdeliveryitemid = hddz.ywbh + "_shr_" + jzx.cxh;
                    m.SupplierSellID = hddz.SupplierSellID;
                    //m.buyid = hddz.khmc;
                    m.containerno = jzx.jzxh;
                    m.returnboxtime = ConvertDateTime(jzx.hdcsj);
                    m.freetime = hddz.mxq;
                    m.offerfree = hddz.khmxq;
                    m.overmoneyconfirmtime = ConvertDateTime(jzx.yscqfqrrq);

                    yw_hddz_hycqfView cqf = DbServ.GetHycqf(hddz.ywbh);
                    if (cqf != null)
                    {
                        m.acturalmoney = cqf.je;
                        m.expectedcost = cqf.gscqfje;
                        m.overmoneyconfirmtime = ConvertDateTime(cqf.zfsj);
                    }
                    model.takegoods.Add(m);
                }

                log.RequestXML = GetPostXml<GaveBackContainerEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.returnbox(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }

        #endregion

        #region 国际运费
        /// <summary>
        /// 国际运费同步
        /// </summary>
        /// <param name="sqdbh"></param>
        public bool SynInternationalFreight(string sqdbh)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = sqdbh;
            log.jklx = "国际运费";
            try
            {
                internationalfreight1 model = new internationalfreight1();
                List<yw_hddz_gjyfView> list = DbServ.GetGjyfList(sqdbh);
                model.list = new List<internationalfreightEntity>();
                foreach (var item in list)
                {
                    internationalfreightEntity m = new internationalfreightEntity();
                    m.exchangeratenum = item.zrmbhl.ToString();
                    m.paydate = ConvertDateTime(item.zfsj);
                    m.suppliersellid = item.SupplierSellID;
                    m.paymoney = item.yssxf.ToString();
                    model.list.Add(m);
                }

                log.RequestXML = GetPostXml<internationalfreightEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.intermoney(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        #endregion

        #region 货代保证金
        /// <summary>
        /// 货代保证金同步
        /// </summary>
        /// <param name="id"></param>
        public bool SynFreightForwarder(yw_hddz_fksqdEntity fksqd)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = fksqd.sqdbh;
            log.jklx = "货代保证金";
            try
            {
                freightforwarderEntity model = new freightforwarderEntity();
                model.buyerid = fksqd.sjskrmc;
                model.currency = fksqd.wbbb;
                model.exchangeratenum = fksqd.zrmbhl.ToString();
                model.money = Math.Abs(fksqd.je).ToString();
                if (fksqd.je > 0)//金额为正 支付时间为退款时间
                    model.surrendertime = ConvertDateTime(fksqd.zfsj);
                else//金额为负 支付时间为收款时间{
                {
                    model.paydate = ConvertDateTime(fksqd.zfsj);
                }


                log.RequestXML = GetPostXml(model, true).OuterXml;
                log.ResponseXml = WSserv.huodai(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        #endregion

        #region 国内货代费用
        /// <summary>
        /// 国内货代费用
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynFreightCosts(yw_hddzEntity hddz, string jzx_cxh)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "货代费用";
            try
            {
                FreightCosts1 model = new FreightCosts1();
                List<yw_hddz_jzxxx_hdfyView> jzxlist = DbServ.GethdfyList(hddz.ywbh, jzx_cxh);
                //model.buyid = hddz.khmc;
                if (jzxlist.Count == 0)
                    throw new Exception("没有找到货代费用");
                model.SupplierSellID = hddz.SupplierSellID;
                model.list = new List<FreightCostsEntity>();
                model.containerno = jzxlist[0].jzxh;

                foreach (var item in jzxlist)
                {
                    FreightCostsEntity m = new FreightCostsEntity();
                    m.salescostid = "hdfy_" + hddz.ywbh + "_" + item.flag;
                    m.CostTypeID = item.fymc;
                    m.costtypecode = item.fybm;
                    m.Cost = item.je.ToString();
                    model.list.Add(m);
                }

                log.RequestXML = GetPostXml<FreightCostsEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.guoneifee(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        #endregion

        #region 国际税金支付
        /// <summary>
        /// 国际税金支付
        /// </summary>
        /// <param name="ywbh"></param>
        /// <returns></returns>
        public bool SynCustomsduty(string ywbh)
        {

            yw_hddzEntity model = DbServ.GetModel(ywbh);
            if (model == null)
            {
                throw new Exception("没有查询到业务编号对应的数据！");
            }

            return SynCustomsduty(model);
        }
        /// <summary>
        /// 国际税金支付
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynCustomsduty(yw_hddzEntity hddz)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "国际税金";
            try
            {
                imcustomsduty1 model = new imcustomsduty1();
                List<yw_hddz_sjzfEntity> list = DbServ.GetsjzfList(hddz.ywbh);
                //model.buyid = hddz.khmc;
                model.SupplierSellID = hddz.SupplierSellID;
                model.list = new List<imcustomsdutyEntity>();

                //第一次税金
                var list1 = list.Where(p => p.bslx == "zcsj").ToList();
                if (list1.Count > 0)
                {
                    imcustomsdutyEntity m1 = new imcustomsdutyEntity();
                    m1.imcustomsdutyitemid = "gjsj_" + hddz.ywbh + "_zcsj";
                    foreach (var item in list1)
                    {
                        switch (item.sjlx)
                        {
                            case "关税":
                                m1.importtariff = item.sjje.ToString();
                                break;
                            case "增值税":
                                m1.importvat = item.sjje.ToString();
                                break;
                            case "滞报金":
                                m1.latefees = item.sjje.ToString();
                                break;
                            case "保证金":
                                m1.bond = item.sjje.ToString();
                                m1.paytaxesdate = ConvertDateTime(item.sjzfrq);
                                break;
                        }
                    }
                    model.list.Add(m1);
                }
                //补交税金
                var list2 = list.Where(p => p.bslx == "bjsj").ToList();
                if (list2.Count > 0)
                {
                    int l = (from p in list select p.bscs).Max();

                    for (int i = 0; i < l; i++)
                    {
                        var list3 = list.Where(p => p.bslx == "bjsj" && p.bscs == (i + 1)).ToList();
                        imcustomsdutyEntity m1 = new imcustomsdutyEntity();
                        m1.imcustomsdutyitemid = "gjsj_" + hddz.ywbh + "_bjsj_" + i.ToString();
                        foreach (var item in list3)
                        {
                            switch (item.sjlx.Replace("补交", ""))
                            {
                                case "关税":
                                    m1.importtariff = item.sjje.ToString();
                                    break;
                                case "增值税":
                                    m1.importvat = item.sjje.ToString();
                                    break;
                                case "滞报金":
                                    m1.latefees = item.sjje.ToString();
                                    break;
                                case "保证金":
                                    m1.bond = item.sjje.ToString();
                                    m1.paytaxesdate = ConvertDateTime(item.sjzfrq);
                                    break;
                            }
                        }
                        model.list.Add(m1);
                    }
                }

                log.RequestXML = GetPostXml<imcustomsdutyEntity>(model, true).OuterXml;
                log.ResponseXml = WSserv.importfee(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        #endregion

        #region 业务保证金
        /// <summary>
        /// 业务保证金
        /// </summary>
        /// <param name="hddz"></param>
        /// <returns></returns>
        public bool SynBusinessMargin(yw_hddzEntity hddz)
        {
            SysLogEntity log = new SysLogEntity();
            //FreshPortSupplierSell.CommonInvokeServiceImpl serv = new FreshPortSupplierSell.CommonInvokeServiceImpl();
            log.status = (int)LogStateType.SyncFail;
            log.timespan = DateTime.Now;
            log.ywbh = hddz.ywbh;
            log.jklx = "业务保证金";
            try
            {
                businessmarginEntity model = new businessmarginEntity();
                //model.buyid = hddz.khmc;
                model.SupplierSellID = hddz.SupplierSellID;
                model.margindocument = hddz.bzjdjh;
                model.margin = hddz.bzj.ToString();
                model.margindate = ConvertDateTime(hddz.sjzfrq);
                model.marginenddate = ConvertDateTime(hddz.bzjjzsj);
                model.transittaxamount = hddz.zgs.ToString();
                model.vatamount = hddz.zzzs.ToString();
                model.importcustomsduty = hddz.tbzj.ToString();
                model.surrenderdate = ConvertDateTime(hddz.tkdzsj);

                log.RequestXML = GetPostXml(model).OuterXml;
                log.ResponseXml = WSserv.business(log.RequestXML);
                #region 处理返回xml
                //ServiceRes res = XmlUtil.GetResByXml(strResXml);
                MasterDataResponse res = new MasterDataResponse(log.ResponseXml);

                if (res.flag)
                {
                    //解析返回data 取出id
                    log.status = (int)LogStateType.Success;
                }
                else//执行失败，记录日志
                {
                    log.msg = res.GetMsgStr<internalEntity>();
                }
                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message;
            }
            TimeSpan span = DateTime.Now - log.timespan;
            log.consuming = span.Seconds;
            loginfo.Add(log);
            return log.status == (int)LogStateType.Success;
        }
        #endregion
        #endregion

        #region 工具

        /// <summary>
        /// 时间格式转换 yyyy-MM-dd HH:mm:ss
        /// </summary>
        /// <param name="d"></param>
        /// <returns></returns>
        public string ConvertDateTime(DateTime? d)
        {
            return d == null ? null : ((DateTime)d).ToString("yyyy-MM-dd HH:mm:ss");
        }
        #endregion

        #region Xml处理方法

        /// <summary>
        /// 从xml的data元素中找到ID
        /// </summary>
        /// <param name="xml"></param>
        /// <returns></returns>
        private string GetIDFromXml(string strXml)
        {
            XmlDocument xdoc = new XmlDocument();
            xdoc.LoadXml(strXml);
            XmlElement root = xdoc.DocumentElement;

            var node = root.SelectSingleNode("//SupplierSellID");

            if (node != null)
                return node.InnerText;
            else
                return null;
        }

        #region 根据model构建xml
        /// <summary>
        /// 根据model构建xml
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        private XmlDocument GetPostXml(object model, bool isAll = false)
        {
            XmlDocument xdoc = new XmlDocument();
            var head = xdoc.CreateXmlDeclaration("1.0", "utf-8", "no");
            xdoc.AppendChild(head);
            XmlElement root = xdoc.CreateElement("freshport");
            XmlElement dnode = xdoc.CreateElement("data");
            Type t = model.GetType();
            //获取名称
            string tablename = GetDisplayName(t);
            XmlElement pnode = xdoc.CreateElement(tablename);
            //分解属性集合

            GetPostEL(pnode, xdoc, model, isAll);
            //XmlDocument xmdoc = new XmlDocument();
            //xmdoc.LoadXml(XmlUtil.Serializer(model.GetType(), model));
            //XmlElement node = xmdoc.DocumentElement;
            //pnode.InnerXml = node.InnerXml;
            dnode.AppendChild(pnode);
            root.AppendChild(dnode);
            xdoc.AppendChild(root);
            return xdoc;
        }

        #endregion

        #region 根据model构建xml（二级接口，泛型）
        /// <summary>
        /// 根据model构建xml
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        private XmlDocument GetPostXml<T>(object model, bool isAll = false)
        {
            XmlDocument xdoc = new XmlDocument();
            var head = xdoc.CreateXmlDeclaration("1.0", "utf-8", "no");
            xdoc.AppendChild(head);
            XmlElement root = xdoc.CreateElement("freshport");
            XmlElement dnode = xdoc.CreateElement("data");
            Type t = model.GetType();
            ////获取名称
            //string tablename = t.Name.Replace("Entity", "");
            //XmlElement pnode = xdoc.CreateElement(tablename);
            //分解属性集合

            GetPostEL<T>(dnode, xdoc, model, isAll);
            //XmlDocument xmdoc = new XmlDocument();
            //xmdoc.LoadXml(XmlUtil.Serializer(model.GetType(), model));
            //XmlElement node = xmdoc.DocumentElement;
            //pnode.InnerXml = node.InnerXml;
            //dnode.AppendChild(pnode);
            root.AppendChild(dnode);
            xdoc.AppendChild(root);
            return xdoc;
        }

        #endregion
        /// <summary>
        /// 一层结构Model转换xml
        /// </summary>
        /// <param name="pNode">父节点</param>
        /// <param name="xdoc">xml对象</param>
        /// <param name="obj">要转换成xml的数据</param>
        ///  <param name="isAll">是否全部</param>
        private void GetPostEL(XmlElement pNode, XmlDocument xdoc, object obj, bool isAll)
        {
            PropertyInfo[] pis = obj.GetType().GetProperties();

            foreach (var p in pis)
            {
                if (!isAll && cols != null && cols.Count > 0 && !nodeIsNeedAdd(p))
                {
                    continue;
                }

                XmlElement node = xdoc.CreateElement(p.Name);
                object val = p.GetValue(obj, null);

                if (val != null)
                    node.InnerText = val.ToString();
                else
                    continue;

                pNode.AppendChild(node);
            }
        }
        /// <summary>
        /// 特定结构子表转换xml
        /// </summary>
        /// <typeparam name="T">对象下List里的T</typeparam>
        /// <param name="pNode">父节点</param>
        /// <param name="xdoc">xml对象</param>
        /// <param name="obj">要转换成xml的数据</param>
        /// <param name="isAll">是否全部</param>
        private void GetPostEL<T>(XmlElement pNode, XmlDocument xdoc, object obj, bool isAll)
        {
            PropertyInfo[] pis = obj.GetType().GetProperties();
            foreach (var p in pis)
            {
                XmlElement node;
                object val = p.GetValue(obj, null);
                if (p.PropertyType.IsGenericType)//数组处理
                {

                    List<T> val1 = (List<T>)val;
                    foreach (T t1 in val1)
                    {
                        node = xdoc.CreateElement(GetDisplayName(t1.GetType()));
                        GetPostEL(node, xdoc, t1, isAll);
                        pNode.AppendChild(node);
                    }
                }
                else
                {
                    node = xdoc.CreateElement(GetName(p));
                    if (val != null)
                        node.InnerText = val.ToString();
                    else
                        continue;
                    pNode.AppendChild(node);
                }
            }
        }

        /// <summary>
        /// 节点是否需要添加
        /// </summary>
        /// <returns></returns>
        private bool nodeIsNeedAdd(PropertyInfo pi)
        {
            //判断是否主键
            ColumnAttribute attr = (ColumnAttribute)pi.GetCustomAttributes(typeof(ColumnAttribute), true).FirstOrDefault();
            if (attr != null && attr.IsPK)
                return true;

            //判断是否在修改列中
            if (cols.FindIndex(p => p.freshportfdname == pi.Name) > -1)
                return true;


            return false;
        }
        /// <summary>
        /// 获取字段名称
        /// </summary>
        /// <param name="pi"></param>
        /// <returns></returns>
        private string GetName(PropertyInfo pi)
        {
            var arri = (DisplayNameAttribute)pi.GetCustomAttributes(typeof(DisplayNameAttribute), true).FirstOrDefault();//.ToList().Find(p => p is DescriptionAttribute);
            if (arri != null)
                return arri.DisplayName;

            return pi.Name;
        }
        /// <summary>
        /// 获取对象名称
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        private string GetDisplayName(Type t)
        {
            var arri = (DisplayNameAttribute)t.GetCustomAttributes(typeof(DisplayNameAttribute), true).FirstOrDefault();//.ToList().Find(p => p is DescriptionAttribute);
            if (arri != null)
                return arri.DisplayName;

            return t.Name.Replace("Entity", "");
        }
        #endregion
    }
}