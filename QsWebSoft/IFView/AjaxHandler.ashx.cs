 using Interfaces.Model;
using Interfaces.OCRModel;
using Interfaces.OCRWebServ;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Xml;

namespace IFView
{
    /// <summary>
    /// AjaxHandler 的摘要说明
    /// </summary>
    public class AjaxHandler : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
        string strrep = "";
        responseOut res = new responseOut();
        string userid = "";
        public void ProcessRequest(HttpContext context)
        {
            string param = context.Request.Params["action"];


            try
            {
                userid = QsWebSoft.AppService.GetUserID();
                if (string.IsNullOrEmpty(userid))
                {
                    throw new Exception("登录超时！");
                }
                object[] Obj = new object[] { context };
                MethodInfo vMethodInfo = GetType().GetMethod(param);
                if (vMethodInfo == null)
                {
                    return;
                }
                vMethodInfo.Invoke(this, Obj);
            }
            catch (Exception ex)
            {
                res.msg = ex.Message;
                res.result = false;
                strrep = JsonConvert.SerializeObject(res);
                context.Response.Write(strrep);
                //throw ex;
            }
        }

        public void GetOcrDataList(HttpContext context)
        {
            try
            {
                OcrInvokeServiceImpl serv = new OcrInvokeServiceImpl();
                string fph = context.Request.Params["invoiceno"];
                string tdh = context.Request.Params["billno"];
                if (fph == null)
                {
                    fph = "";
                }
                if (tdh == null)
                {
                    tdh = "";
                }
                string strJson = serv.queryMainInfoList("ocr", fph, tdh);
                //string strJson = "{\"info\":\"[{'billno':'COSU6900370400','blairstatusname':'未上传,N','blstatusname':'待调整,Y','ciqstatusname':'未上传,N','countrycnname':'新西兰','examinationstatusname':'未上传,N','invoiceno':'fp20160407-4','invstatusname':'字段检验不通过,Y','ocrmainid':'0f222c22-fffc-4dab-a4e1-701e5a28cee8','orstatusname':'调整结束,Y','phystatusname':'待调整,Y','plstatusname':'字段检验不通过,Y','productcnname':'鲜苹果','prstatusname':'未上传,N','regions':'','shippingcompany':'中国远洋','transportname':'海运'},{'billno':'td20160411-1','blairstatusname':'未上传,N','blstatusname':'待调整,Y','ciqstatusname':'未上传,N','countrycnname':'新西兰','examinationstatusname':'未上传,N','invoiceno':'fp20160411-1','invstatusname':'字段检验不通过,Y','ocrmainid':'0f239773-29b1-4d36-b3f4-9a71ed8d2269','orstatusname':'字段检验不通过,Y','phystatusname':'字段检测通过,Y','plstatusname':'待调整,Y','productcnname':'鲜苹果','prstatusname':'未上传,N','regions':'','shippingcompany':'中国远洋','transportname':'海运'},{'billno':'3213213','blairstatusname':'未上传,N','blstatusname':'字段检验不通过,Y','ciqstatusname':'未上传,N','countrycnname':'新西兰','examinationstatusname':'未上传,N','invoiceno':'23123','invstatusname':'调整结束,Y','ocrmainid':'1a1bfb80-5806-40e7-a0de-147078cd6c2d','orstatusname':'待调整,Y','phystatusname':'待调整,Y','plstatusname':'待调整,Y','productcnname':'鲜苹果','prstatusname':'未上传,N','regions':'','shippingcompany':'中国远洋','transportname':'海运'},{'billno':'td-20160421-1','blairstatusname':'未上传,N','blstatusname':'调整结束,Y','ciqstatusname':'未上传,N','countrycnname':'新西兰','examinationstatusname':'未上传,N','invoiceno':'fp-20160421-1','invstatusname':'调整结束,Y','ocrmainid':'c7a2c909-a912-4500-a9b0-991192c81dc0','orstatusname':'待调整,Y','phystatusname':'待调整,Y','plstatusname':'调整结束,Y','productcnname':'鲜苹果','prstatusname':'未上传,N','regions':'','shippingcompany':'中国远洋','transportname':'海运'},{'billno':'COSU6900370400','blairstatusname':'未上传,N','blstatusname':'调整结束,Y','ciqstatusname':'未上传,N','countrycnname':'新西兰','examinationstatusname':'未上传,N','invoiceno':'5736','invstatusname':'字段检验不通过,Y','ocrmainid':'e1a7ab4b-3fcd-4c09-9c8b-115c1a144c26','orstatusname':'调整结束,Y','phystatusname':'字段检验不通过,Y','plstatusname':'字段检验不通过,Y','productcnname':'鲜苹果','prstatusname':'未上传,N','regions':'','shippingcompany':'中国远洋','transportname':'海运'}]\",\"status\":\"Y\"}";
                ServerResEntity model = JsonConvert.DeserializeObject<ServerResEntity>(strJson);

                if (model != null && model.status == "Y")
                {
                    List<OCRHddzEntity> list = JsonConvert.DeserializeObject<List<OCRHddzEntity>>(model.info);
                    if (list.Count == 0)
                    {
                        throw new Exception("没有查询到数据");
                    }
                    //给数据加上同步状态
                    Interfaces.OcrIF.ChangeStatus(list, userid);
                    strrep = "{\"rows\":" + JsonConvert.SerializeObject(list) + ",\"total\":" + list.Count + "}";
                }
                else
                {
                    strrep = "{\"rows\":[],\"total\":0,\"result\":false,\"message\":\"" + model.info + "\"}";
                    //strrep = "{\"result\":false,\"message\":\"" + model.info + "\"}";
                }
            }
            catch (Exception ex)
            {
                strrep = "{\"rows\":[],\"total\":0,\"result\":false,\"message\":\"" + ex.Message + "\"}";
            }
            context.Response.Write(strrep);
        }

        #region 第一次同步
        /// <summary>
        /// ocr同步到水果通
        /// </summary>
        /// <param name="modelXml"></param>
        /// <returns></returns>
        public void OCRToFruit(HttpContext context)
        {
            SysLogEntity log = new SysLogEntity();
            try
            {
                bool isadd = false;
                //接受
                string id = context.Request.Params["id"];
                Interfaces.OCRWebServ.OcrInvokeServiceImpl serv = new OcrInvokeServiceImpl();
                //判断id是否已经同步
                //serv.Timeout = 20000;//20秒的超时时间
                string xmlData = serv.queryInfo("<?xml version=\"1.0\" encoding=\"utf-8\"?><ROOT><ocrmainid>" + id + "</ocrmainid><token>ocr</token></ROOT>");

                #region xml
                //                string xmlData = @"<freshport>
                //  <flag>true</flag>
                //  <msg/>
                //  <data>
                //    <yw_hddz>
                //      <ocrid>432ce7f1-3012-4e8b-ab81-d6f588afe2bb</ocrid>
                //      <gwgysbm>NEW ZEALAND APPLE LTD</gwgysbm>
                //      <zjsmc>NEW ZEALAND APPLE LTD</zjsmc>
                //      <khbm>Fuhuida Fareast (Xiamen) Corporation.</khbm>
                //      <jydwbm>Fuhuida Fareast (Xiamen) Corporation.</jydwbm>
                //      <hz_spmc>鲜苹果</hz_spmc>
                //      <ysfs>海运</ysfs>
                //      <cyr>中国远洋</cyr>
                //      <cyrbm>中国远洋</cyrbm>
                //      <invoiceno>fp-20160506-1</invoiceno>
                //      <ztdh>td-20160506-1</ztdh>
                //      <ycddm>New zealand1</ycddm>
                //      <ejycd>New zealand</ejycd>
                //      <sfyyf>FREIGHT PREPAID</sfyyf>
                //      <cm>MOL DESTINY</cm>
                //      <hcorhbh>009</hcorhbh>
                //      <zcrq>2015.05.13</zcrq>
                //      <qyg>NAPIER</qyg>
                //      <mdg>SHANGHAI</mdg>
                //      <fh>F3304!7</fh>
                //      <zjz>20916.00</zjz>
                //      <zmz>23240.00</zmz>
                //      <hz_jzxh>TGHU9995270</hz_jzxh>
                //      <hz_xx>40RQ</hz_xx>
                //      <hz_zhlx>40RQ</hz_zhlx>
                //      <jgfs>C&amp;amp;F</jgfs>
                //      <wbbb>USD</wbbb>
                //      <zje>45259.90</zje>
                //      <invoice_date>2015.05.15</invoice_date>
                //      <mygb>New zealand</mygb>
                //      <tzrmc>SHANGHAI YUHUA FRUIT CO. , LTD</tzrmc>
                //      <jldw>CARTONS</jldw>
                //      <details>
                //        <yw_hddz_spxx>
                //          <spmc_yw>Apples</spmc_yw>
                //          <jldw>CARTONS</jldw>
                //          <jlsl>224</jlsl>
                //          <fpje>8724.80</fpje>
                //          <hgbm></hgbm>
                //          <djjg>38.95</djjg>
                //          <spgg_yw>90</spgg_yw>
                //          <sppz_yw>Rose</sppz_yw>
                //          <spdj_yw>HG</spdj_yw>
                //          <sppp_yw></sppp_yw>
                //          <spms></spms>
                //          <zjz>3920.00</zjz>
                //          <zmz>4256.00</zmz>
                //        </yw_hddz_spxx>
                //        <yw_hddz_spxx>
                //          <spmc_yw>Apples</spmc_yw>
                //          <jldw>CARTONS</jldw>
                //          <jlsl>98</jlsl>
                //          <fpje>3817.10</fpje>
                //          <hgbm></hgbm>
                //          <djjg>38.95</djjg>
                //          <spgg_yw>60</spgg_yw>
                //          <sppz_yw>Rose</sppz_yw>
                //          <spdj_yw>HG</spdj_yw>
                //          <sppp_yw></sppp_yw>
                //          <spms></spms>
                //          <zjz></zjz>
                //          <zmz></zmz>
                //        </yw_hddz_spxx>
                //        <yw_hddz_spxx>
                //          <spmc_yw>Apples</spmc_yw>
                //          <jldw>CARTONS</jldw>
                //          <jlsl>392</jlsl>
                //          <fpje>15268.40</fpje>
                //          <hgbm></hgbm>
                //          <djjg>38.95</djjg>
                //          <spgg_yw>80</spgg_yw>
                //          <sppz_yw>Rose</sppz_yw>
                //          <spdj_yw>HG</spdj_yw>
                //          <sppp_yw></sppp_yw>
                //          <spms></spms>
                //          <zjz></zjz>
                //          <zmz></zmz>
                //        </yw_hddz_spxx>
                //        <yw_hddz_spxx>
                //          <spmc_yw>Apples</spmc_yw>
                //          <jldw>CARTONS</jldw>
                //          <jlsl>448</jlsl>
                //          <fpje>17449.60</fpje>
                //          <hgbm></hgbm>
                //          <djjg>38.95</djjg>
                //          <spgg_yw>70</spgg_yw>
                //          <sppz_yw>Rose</sppz_yw>
                //          <spdj_yw>HG</spdj_yw>
                //          <sppp_yw></sppp_yw>
                //          <spms></spms>
                //          <zjz></zjz>
                //          <zmz></zmz>
                //        </yw_hddz_spxx>
                //      </details>
                //    </yw_hddz>
                //  </data>
                //</freshport>";
                #endregion

                List<yw_hddz_spxxEntity> list = new List<yw_hddz_spxxEntity>();
                Interfaces.Service.HddzService dbServ = new Interfaces.Service.HddzService();
                Interfaces.Service.BaseService baseServ = new Interfaces.Service.BaseService();
                yw_hddzEntity editmodel = dbServ.GetHddzModel(id);//主表对象
                yw_hddzEntity model = new yw_hddzEntity();
                if (editmodel == null)
                {
                    editmodel = new yw_hddzEntity();
                    isadd = true;
                }
                else
                {
                    if (editmodel.zbr != userid)
                    {
                        throw new Exception("该数据已被其他账号同步！");
                    }
                    isadd = false;
                }


                //解析xml文件
                #region xml测试文件
                //string xmlData = @"<freshport>
                //  <flag>true</flag>
                //  <msg/>
                //  <data><yw_hddz>  <ocrid>432ce7f1-3012-4e8b-ab81-d6f588afe2bb</ocrid>  <gwgysbm>yangliutao</gwgysbm>  <zjsmc>NEW ZEALAND APPLE LTD</zjsmc>  <khbm>yangtao</khbm>  <jydwbm>same</jydwbm>  <ysfs>海运</ysfs>  <cyr>003</cyr>  <invoiceno>fp-20160506-1</invoiceno>  <ztdh>td-20160506-1</ztdh>  <ycddm>4</ycddm>  <ejycd>New zealand</ejycd>  <sfyyf>FREIGHT PREPAID</sfyyf>  <cm>MOL DESTINY</cm>  <hcorhbh>009</hcorhbh>  <czrq/>  <qyg>NAPIER</qyg>  <mdg/>  <fh>F3304!7</fh>  <zjz>20916.00</zjz>  <zmz>23240.00</zmz>  <hz_jzxh>TGHU9995270</hz_jzxh>  <hz_xx>40RQ</hz_xx>  <hz_zhlx>40RQ</hz_zhlx>  <jgfs>C&amp;amp;F</jgfs>  <wbbb>USD</wbbb>  <zje>45259.90</zje>  <invoice_date>13-05-2015</invoice_date>  <details>    <yw_hddz_spxx>      <spmc_yw>Apples</spmc_yw>      <jlsl>224</jlsl>      <fpje>8724.80</fpje>      <or_hscode/>    </yw_hddz_spxx>    <yw_hddz_spxx>      <spmc_yw>Apples</spmc_yw>      <jlsl>98</jlsl>      <fpje>3817.10</fpje>      <or_hscode/>    </yw_hddz_spxx>    <yw_hddz_spxx>      <spmc_yw>Apples</spmc_yw>      <jlsl>392</jlsl>      <fpje>15268.40</fpje>      <or_hscode/>    </yw_hddz_spxx>    <yw_hddz_spxx>      <spmc_yw>Apples</spmc_yw>      <jlsl>448</jlsl>      <fpje>17449.60</fpje>      <or_hscode/>    </yw_hddz_spxx>  </details></yw_hddz></data>
                //</freshport>";
                #endregion

                Interfaces.MasterDataResponse mdr = new Interfaces.MasterDataResponse(xmlData);
                log.otherID = id;
                #region 返回数据处理
                if (!mdr.flag)//执行失败
                {
                    log.msg = mdr.GetMsgStr<yw_hddzEntity>();
                    res.msg = log.msg;
                    res.result = false;
                    //strrep = "{\"result\":false,\"message\":\"" + log.msg + "\"}";
                }
                else
                {
                    //把xml转化成对象
                    OcrXmlToHddz(mdr.data, out model, out list);
                    #region 基础表名称对应代码
                    List<yw_hddz_ocrvalmapEntity> errordatelist = new List<yw_hddz_ocrvalmapEntity>();

                    #region 国外供应商
                    if (!string.IsNullOrEmpty(model.gwgysbm))
                    {
                        yw_wldwEntity gwgys = Interfaces.Service.BaseService.GetWldwModel(model.gwgysbm);
                        if (gwgys != null)
                        {
                            model.gwgysbm = gwgys.yw_khbm;
                            model.gwgysjc = gwgys.khjc;
                            model.gwgysmc = gwgys.khmc_yw;
                        }
                        else
                        {
                            yw_hddz_ocrvalmapEntity errData = new yw_hddz_ocrvalmapEntity();
                            errData.field = "gwgys";
                            errData.fieldname = "国外供应商";
                            errData.ocrvalue = model.gwgysbm;
                            errData.tablename = "yw_wldw";
                            errordatelist.Add(errData);
                        }
                    }
                    #endregion

                    #region 客户
                    if (!string.IsNullOrEmpty(model.khbm))
                    {
                        yw_wldwEntity kh = Interfaces.Service.BaseService.GetWldwModel(model.khbm);
                        if (kh != null)
                        {
                            model.khbm = kh.yw_khbm;
                            model.khjc = kh.khjc;
                            model.khmc = kh.khmc;
                            model.khpym = kh.pym;
                        }
                        else
                        {
                            yw_hddz_ocrvalmapEntity errData = new yw_hddz_ocrvalmapEntity();
                            errData.field = "kh";
                            errData.fieldname = "委托客户";
                            errData.ocrvalue = model.khbm;
                            errData.tablename = "yw_wldw";
                            errordatelist.Add(errData);
                        }
                    }
                    #endregion

                    #region 经营单位
                    if (!string.IsNullOrEmpty(model.jydwbm))
                    {
                        yw_wldwEntity jydw = Interfaces.Service.BaseService.GetWldwModel(model.jydwbm);
                        if (jydw != null)
                        {
                            model.jydwbm = jydw.yw_khbm;
                            model.jydwjc = jydw.khjc;
                            model.jydwmc = jydw.khmc;
                            model.jydwpym = jydw.pym;
                            model.jydwdm = jydw.qyhgbm;
                            model.jydwsjjgdm = jydw.sjjgdm;
                        }
                        else
                        {
                            yw_hddz_ocrvalmapEntity errData = new yw_hddz_ocrvalmapEntity();
                            errData.field = "jydw";
                            errData.fieldname = "经营单位";
                            errData.ocrvalue = model.jydwbm;
                            errData.tablename = "yw_wldw";
                            errordatelist.Add(errData);
                        }
                    }
                    #endregion

                    #region 承运人
                    if (!string.IsNullOrEmpty(model.cyr))
                    {
                        yw_wldwEntity cyr = Interfaces.Service.BaseService.GetWldwModel(model.cyr);
                        if (cyr != null)
                        {
                            model.cyrbm = cyr.yw_khbm;
                            model.cyrjc = cyr.khjc;
                            model.cyr = cyr.khmc;
                            model.cyrpym = cyr.pym;
                        }
                        else
                        {
                            yw_hddz_ocrvalmapEntity errData = new yw_hddz_ocrvalmapEntity();
                            errData.field = "cyr";
                            errData.fieldname = "承运人";
                            errData.ocrvalue = model.cyrbm;
                            errData.tablename = "yw_wldw";
                            errordatelist.Add(errData);
                        }
                    }
                    #endregion

                    #region 中间商
                    if (!string.IsNullOrEmpty(model.zjsmc))
                    {
                        yw_wldwEntity zjs = Interfaces.Service.BaseService.GetWldwModel(model.zjsmc);
                        if (zjs != null)
                        {
                            model.zjsbm = zjs.yw_khbm;
                            model.zjsjc = zjs.khjc;
                            model.zjsmc = zjs.khmc_yw;
                            model.zjspym = zjs.pym;
                        }
                        else
                        {
                            yw_hddz_ocrvalmapEntity errData = new yw_hddz_ocrvalmapEntity();
                            errData.field = "zjs";
                            errData.fieldname = "中间商";
                            errData.ocrvalue = model.zjsmc;
                            errData.tablename = "yw_wldw";
                            errordatelist.Add(errData);
                        }
                    }
                    #endregion

                    #region 通知人
                    if (!string.IsNullOrEmpty(model.tzrmc))
                    {
                        yw_wldwEntity tzr = Interfaces.Service.BaseService.GetWldwModel(model.tzrmc);
                        if (tzr != null)
                        {
                            model.tzrbm = tzr.yw_khbm;
                            model.tzrjc = tzr.khjc;
                            model.tzrmc = tzr.khmc;
                            model.tzrpym = tzr.pym;
                        }
                        else
                        {
                            yw_hddz_ocrvalmapEntity errData = new yw_hddz_ocrvalmapEntity();
                            errData.field = "tzr";
                            errData.fieldname = "通知人";
                            errData.ocrvalue = model.tzrmc;
                            errData.tablename = "yw_wldw";
                            errordatelist.Add(errData);
                        }
                    }
                    #endregion

                    #region 原产地
                    if (!string.IsNullOrEmpty(model.ycddm))
                    {
                        t_countryEntity ycd = Interfaces.Service.BaseService.GetCountryModel(model.ycddm);
                        if (ycd != null)
                        {
                            model.ycd = ycd.ctr_ename;
                            model.ycddm = ycd.ctr_hgcode;
                            model.dqdm = ycd.dqdm;
                            model.qiyunguodm = ycd.ctr_hgcode;
                            model.ctr_area2 = ycd.ctr_area2;
                            model.yzbh = ycd.yzbh;
                        }
                        else
                        {
                            yw_hddz_ocrvalmapEntity errData = new yw_hddz_ocrvalmapEntity();
                            errData.field = "ycd";
                            errData.fieldname = "原产地";
                            errData.ocrvalue = model.ycddm;
                            errData.tablename = "t_country";
                            errordatelist.Add(errData);
                        }
                    }
                    #endregion

                    #endregion
                    //完善对象字段
                    #region 根据代码完善数据
                    model.sfyyf = model.sfyyf.ToUpper().Replace(" ","") == "FREIGHTPREPAID" ? "N" : "Y";
                    model.jgfs = model.jgfs.Replace("&amp;", "&");
                    #endregion


                    #region 数据保存
                    model.zbr = userid;
                    if (errordatelist.Count == 0)//没有错误才能保存
                    {
                        if (!isadd)
                        {
                            model.ywbh = editmodel.ywbh;
                            model.zbrq = editmodel.zbrq;
                            model.zbr = editmodel.zbr;
                            model.state = editmodel.state;
                            model.SupplierSellID = editmodel.SupplierSellID;
                            model.shdwbm = editmodel.shdwbm;
                        }
                        list.ForEach(p => p.ywbh = model.ywbh);
                        log.ywbh = model.ywbh;
                        //保存数据
                        if (isadd)
                            dbServ.SaveHddz(model, list);
                        else
                            dbServ.ModifyHddz(model, list);
                        res.result = true;
                        log.msg = "编号为" + model.ywbh + "的数据保存成功";
                    }
                    else//把错误和数据抛到前端
                    {
                        res.id = id;
                        res.data = model;
                        res.data1 = list;
                        res.errordata = errordatelist;
                        res.errortype = 1;
                        res.msg = log.msg = "有未匹配的值。";
                        res.result = false;
                    }

                    #endregion
                }

                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message.Replace(Environment.NewLine, "");
                res.msg = log.msg;
                res.result = false;
                res.errortype = 2;
            }
            strrep = JsonConvert.SerializeObject(res);
            context.Response.Write(strrep);
        }
        #endregion

        #region 处理后同步
        /// <summary>
        /// 错误处理后提交
        /// </summary>
        /// <param name="context"></param>
        public void JsonToFruit(HttpContext context)
        {
            SysLogEntity log = new SysLogEntity();
            try
            {
                #region 接受数据、声明变量

                bool isadd = false;
                Interfaces.Service.HddzService dbServ = new Interfaces.Service.HddzService();
                string strData = context.Request.Params["data"];
                yw_hddzEntity model = JsonConvert.DeserializeObject<yw_hddzEntity>(strData);

                string strErrorData = context.Request.Params["errdata"];
                List<yw_hddz_ocrvalmapEntity> maplist = JsonConvert.DeserializeObject<List<yw_hddz_ocrvalmapEntity>>(strErrorData);

                string strspxx = context.Request.Params["data1"];
                List<yw_hddz_spxxEntity> spxxlist = JsonConvert.DeserializeObject<List<yw_hddz_spxxEntity>>(strspxx);
                #endregion

                #region 判断是否已经有对应数据
                yw_hddzEntity editmodel = dbServ.GetHddzModel(model.OcrID);//主表对象

                if (editmodel == null)
                {
                    editmodel = new yw_hddzEntity();
                    isadd = true;
                }
                else
                {
                    if (editmodel.zbr != userid)
                    {
                        throw new Exception("该数据已被其他账号同步！");
                    }
                    isadd = false;
                }
                #endregion

                #region 关系映射
                //保存值对应关系
                maplist.ForEach(p => p.ID = Guid.NewGuid().ToString());

                List<yw_hddz_ocrvalmapEntity> addmaplist = new List<yw_hddz_ocrvalmapEntity>();
                foreach (var mapinfo in maplist)
                {
                    string val = null;
                    if (string.IsNullOrEmpty(mapinfo.value))//如果没有选择对应值 则需要快速创建
                    {
                        val = mapinfo.ocrvalue;
                        #region 往来单位
                        if (mapinfo.tablename == "yw_wldw")
                        {
                            Interfaces.Service.BaseService.AddWldw(mapinfo.ocrvalue);


                        }
                        #endregion
                        else if (mapinfo.tablename == "t_country")
                        {
                            throw new Exception("原产地没有选择对应值！");
                            //model.ycd = model.ycd;
                        }


                    }
                    else
                    {
                        val = mapinfo.value;
                        mapinfo.ID = Guid.NewGuid().ToString();
                        addmaplist.Add(mapinfo);
                    }

                    #region 往来单位匹配  
                    if (mapinfo.tablename == "yw_wldw")
                    {
                        yw_wldwEntity wldw = Interfaces.Service.BaseService.GetWldwModel(val);
                        switch (mapinfo.field)
                        {
                            case "gwgys":
                                #region 国外供应商
                                model.gwgysbm = wldw.yw_khbm;
                                model.gwgysjc = wldw.khjc;
                                model.gwgysmc = wldw.khmc_yw;
                                #endregion
                                break;
                            case "kh":
                                #region 客户
                                model.khbm = wldw.khbm;
                                model.khjc = wldw.khjc;
                                model.khmc = wldw.khmc;
                                model.khpym = wldw.pym;

                                #endregion
                                break;
                            case "jydw":
                                #region 经营单位
                                model.jydwbm = wldw.yw_khbm;
                                model.jydwjc = wldw.khjc;
                                model.jydwmc = wldw.khmc;
                                model.jydwpym = wldw.pym;
                                model.jydwdm = wldw.qyhgbm;
                                model.jydwsjjgdm = wldw.sjjgdm;
                                #endregion
                                break;
                            case "cyr":
                                #region 承运人
                                model.cyrbm = wldw.yw_khbm;
                                model.cyrjc = wldw.khjc;
                                model.cyr = wldw.khmc;
                                model.cyrpym = wldw.pym;
                                #endregion
                                break;
                            case "zjs":
                                #region 中间商
                                model.zjsbm = wldw.yw_khbm;
                                model.zjsjc = wldw.khjc;
                                model.zjsmc = wldw.khmc;
                                model.zjspym = wldw.pym;
                                #endregion
                                break;
                            case "tzr":
                                #region 通知人
                                model.tzrbm = wldw.yw_khbm;
                                model.tzrjc = wldw.khjc;
                                model.tzrmc = wldw.khmc;
                                model.tzrpym = wldw.pym;
                                #endregion
                                break;
                        }
                    }
                    #endregion
                    #region 原产地
                    else if (mapinfo.field == "ycd")
                    {
                        t_countryEntity ycd = Interfaces.Service.BaseService.GetCountryModel(val);
                        if (ycd != null)
                        {
                            model.ycd = ycd.ctr_ename;
                            model.ycddm = ycd.ctr_hgcode;
                            model.dqdm = ycd.dqdm;
                            model.qiyunguodm = ycd.ctr_hgcode;
                            model.ctr_area2 = ycd.ctr_area2;
                            model.yzbh = ycd.yzbh;
                        }
                        else
                        {
                            throw new Exception("没有查询到相应的原产地");
                        }
                    }
                    #endregion

                }

                Interfaces.Service.BaseService.AddMapList(addmaplist);
                #endregion

                #region 保存数据
                if (!isadd)
                {
                    model.ywbh = editmodel.ywbh;
                    model.zbrq = editmodel.zbrq;
                    model.zbr = editmodel.zbr;
                    model.state = editmodel.state;
                    model.SupplierSellID = editmodel.SupplierSellID;
                    model.shdwbm = editmodel.shdwbm;
                }
                spxxlist.ForEach(p => p.ywbh = model.ywbh);
                //保存数据
                if (isadd)
                    dbServ.SaveHddz(model, spxxlist);
                else
                    dbServ.ModifyHddz(model, spxxlist);

                res.result = true;
                log.msg = "编号为" + model.ywbh + "的数据保存成功";

                #endregion
            }
            catch (Exception ex)
            {
                log.msg = ex.Message.Replace(Environment.NewLine, "");
                res.msg = log.msg;
                res.result = false;
                res.errortype = 2;
            }
            strrep = JsonConvert.SerializeObject(res);
            context.Response.Write(strrep);
        }
        #endregion


        #region 保存数据



        #endregion

        /// <summary>
        /// 传入ocrid获取ocr系统对应的数据 (未实现)
        /// </summary>
        /// <param name="context"></param>
        public void GetOcrDataByOcrID(HttpContext context)
        {

        }

        #region 解析xml为对象
        /// <summary>
        /// 把ocr返回的xml数据 解析成对象
        /// </summary>
        /// <param name="xml"></param>
        private void OcrXmlToHddz(string xml, out yw_hddzEntity model, out List<yw_hddz_spxxEntity> list)
        {
            model = new yw_hddzEntity();
            list = new List<yw_hddz_spxxEntity>();
            string strError = "";
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);
            XmlNodeList xnl = doc.GetElementsByTagName("yw_hddz");
            if (xnl.Count == 0)
            {
                throw new Exception("返回的xml中不包含yw_hddz");
            }
            XmlNode mainxn = xnl.Item(0);
            //string jsonText = JsonConvert.SerializeXmlNode(mainxn);
            //JObject obj = JsonConvert.DeserializeObject(jsonText) as JObject;
            //if (obj["yw_hddz"]["invoice_date"] != null)//发票日期格式判定 
            //{
            //    string str = obj["yw_hddz"]["invoice_date"].ToString().Replace("\"", "");
            //    DateTime d = new DateTime();
            //    if (!DateTime.TryParse(str, out d))
            //    {
            //        throw new Exception("OCR返回的发票日期为" + str + "格式错误,日期格式为yyyy.MM.dd！");
            //    }
            //}

            // yw_hddzXmlData data = JsonConvert.DeserializeObject<yw_hddzXmlData>(jsonText);
            model = ModelTools.ConvertXmlToModel<yw_hddzEntity>(mainxn.OuterXml, out strError);
            if (!string.IsNullOrEmpty(strError))
                throw new Exception("返回的xml主表yw_hddz解析错误！详细：" + strError);
            XmlNodeList detailsxnl = mainxn.SelectNodes("details/yw_hddz_spxx");
            var i = 1;
            foreach (XmlNode spxn in detailsxnl)
            {
                //string jsonText1 = JsonConvert.SerializeXmlNode(spxn);
                yw_hddz_spxxEntity spitem = ModelTools.ConvertXmlToModel<yw_hddz_spxxEntity>(spxn.OuterXml, out strError);
                //yw_hddz_spxxXmlData data1 = JsonConvert.DeserializeObject<yw_hddz_spxxXmlData>(jsonText1);
                if (string.IsNullOrEmpty(strError))
                {
                    //spitem = data1.yw_hddz_spxx;
                    //spitem.ywbh = ywbh;
                    spitem.cxh = i++;
                    spitem.sppp = spitem.sppp_yw;
                    spitem.sppz = spitem.sppz_yw;
                    spitem.spdj = spitem.spdj_yw;
                    spitem.spgg = spitem.spgg_yw;

                    list.Add(spitem);
                }
                else
                {
                    throw new Exception("返回的xml从表yw_hddz_spxx解析错误！详细：" + strError);
                }
            }


        }
        #endregion


        #region 基础数据查询接口
        /// <summary>
        /// 分页获取往来单位
        /// </summary>
        /// <param name="context"></param>
        public void GetWldwList(HttpContext context)
        {
            string name = context.Request.Params["name"];
            int page = int.Parse(context.Request.Params["page"]);
            int pageSize = int.Parse(context.Request.Params["rows"]);
            if (page <= 0)
                page = 1;
            int count = 0;
            List<yw_wldwEntity> list = Interfaces.Service.BaseService.GetWldwListByPage(name, (page - 1) * pageSize, pageSize, out count);
            strrep = "{\"rows\":" + JsonConvert.SerializeObject(list) + ",\"total\":" + count + "}";
            context.Response.Write(strrep);
        }/// <summary>
         /// 分页获取国家
         /// </summary>
         /// <param name="context"></param>
        public void GetCountryList(HttpContext context)
        {
            string name = context.Request.Params["name"];
            int page = int.Parse(context.Request.Params["page"]);
            int pageSize = int.Parse(context.Request.Params["rows"]);
            if (page <= 0)
                page = 1;

            int count = 0;
            List<t_countryEntity> list = Interfaces.Service.BaseService.GetCountryListByPage(name, (page - 1) * pageSize, pageSize, out count);
            strrep = "{\"rows\":" + JsonConvert.SerializeObject(list) + ",\"total\":" + count + "}";
            context.Response.Write(strrep);
        }
        #endregion

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
    public class yw_hddzXmlData
    {
        public yw_hddzEntity yw_hddz { get; set; }
    }

    public class yw_hddz_spxxXmlData
    {
        public yw_hddz_spxxEntity yw_hddz_spxx { get; set; }
    }
    /// <summary>
    /// 返回前台的对象
    /// </summary>
    public class responseOut
    {
        /// <summary>
        /// 执行结果
        /// </summary>
        public bool result { get; set; }
        /// <summary>
        /// 执行日志
        /// </summary>
        public string msg { get; set; }
        /// <summary>
        /// 错误类型 1--值不匹配，2--其他错误
        /// </summary>
        public int errortype { get; set; }
        /// <summary>
        /// ocr获取的主表对象（处理过），当错位类型为1时使用
        /// </summary>
        public object data { get; set; }


        /// <summary>
        /// ocr获取的分录表对象（处理过），当错位类型为1时使用
        /// </summary>
        public object data1 { get; set; }

        /// <summary>
        /// 值匹配对象，ocr获取的数据 无对应值的处理
        /// </summary>
        public object errordata { get; set; }
        public string id { get; set; }

        public object rows { get; set; }

        public int total { get; set; }

        public string sfcph { get; set; }
    }
}