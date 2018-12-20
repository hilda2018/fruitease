using Interfaces.Model;
using Interfaces.Model.map;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace IFView
{
    /// <summary>
    /// FenceHandler 的摘要说明
    /// </summary>
    public class FenceHandler : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
        private static readonly object obj = new object();

        string strrep = "";
        responseOut res = new responseOut();
        string userid = "";
        HttpRequest request = null;
        JsonSerializerSettings setting = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
        string baseUrl = System.Configuration.ConfigurationManager.AppSettings["tmsURL"] + "/fence";

        public void ProcessRequest(HttpContext context)
        {
            string param = context.Request.Params["action"];
            request = context.Request;
            try
            {
                userid = QsWebSoft.AppService.GetUserID();
                if (context.Request.Params["token"] == null && string.IsNullOrEmpty(userid))
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
            }

            strrep = JsonConvert.SerializeObject(res, setting);
            context.Response.Write(strrep);
        }

        #region 收货地址维护


        #region 查询所有收货地址

        public void getShdzList(HttpContext context)
        {
            try
            {
                string khbm = context.Request.Params["khbm"];
                string khmc = context.Request.Params["khmc"];
                string shdz = context.Request.Params["shdz"];
                int page = int.Parse(context.Request.Params["page"]);
                int rows = int.Parse(context.Request.Params["rows"]);
                int count;
                List<yw_wldw_gnkh_shdzEntity> list = new Interfaces.Service.FenceService().getShdzList(khmc, khbm, shdz, rows, (page - 1) * rows, out count);
                res.result = true;
                res.rows = list;
                res.total = count;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion

        #region 新增、修改收货地址

        public void saveShdz(HttpContext context)
        {
            try
            {
                Interfaces.Service.FenceService dbserv = new Interfaces.Service.FenceService();
                string json = context.Request.Params["json"];
                string cxh = context.Request.Params["cxh"];
                yw_wldw_gnkh_shdzEntity model = JsonConvert.DeserializeObject<yw_wldw_gnkh_shdzEntity>(json);

                if (string.IsNullOrEmpty(model.shdz))
                {
                    throw new Exception("收货地址不能为空");
                }

                if (string.IsNullOrEmpty(cxh))
                {
                    dbserv.addShdz(model);
                }
                else
                {
                    dbserv.updateBaseShdz(model);
                }
                res.result = true;

            }
            catch (Exception ex)
            {
                res.result = true;
                res.msg = ex.Message;
            }
        }

        #endregion

        #region 删除收货地址
        public void delShdz(HttpContext context)
        {
            try
            {
                string khbm = context.Request.Params["khbm"];
                string cxh = context.Request.Params["cxh"];
                new Interfaces.Service.FenceService().delShdz(khbm, cxh);
                res.result = true;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion

        #region 获取所有国内采购商
        public void getAllGncgs(HttpContext context)
        {

            try
            {
                List<yw_wldwEntity> list = new Interfaces.Service.FenceService().getGncgsList();
                res.result = true;
                res.rows = list;
                res.total = list.Count;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion
        #endregion

        #region 获取调用选择电子围栏的地址

        public void getCreatFenceUrl(HttpContext context)
        {
            string createFenceBaseUrl = baseUrl + "/showFenceInfoPage.do";
            string logid = context.Request.Params["logid"];
            string token = HttpUtility.UrlEncode(DESEncrypt(userid));
            yw_wldw_gnkh_shdzEntity m1 = JsonConvert.DeserializeObject<yw_wldw_gnkh_shdzEntity>(context.Request.Params["json"]);

            ElectronicFence m = new ElectronicFence();
            m.uniqueId = m1.yw_khbm + "_" + m1.cxh;
            m.userId = userid;
            m.lat = m1.wd;
            m.lng = m1.jd;
            m.radius = m1.fw;
            m.address = m1.shdz;
            m.style = m1.type == 1 ? "polygon" : "circle";
            if (!string.IsNullOrEmpty(m1.points))
            {
                m.points = m1.points.Replace("\"", "\'");
            }

            var json = JsonConvert.SerializeObject(m, setting);

            string param = "?userId=" + userid + "&token=" + token + "&tools=1&json=" + HttpUtility.UrlEncode(json);
            res.data = createFenceBaseUrl + param;
        }
        #endregion

        #region 获取查询任务信息地址

        public void getTaskInfoUrl(HttpContext context)
        {
            string createFenceBaseUrl = baseUrl + "/showCarFencePage.do";
            string token = HttpUtility.UrlEncode(DESEncrypt(userid));
            string taskNo = context.Request.Params["rwbh"];

            string param = "?userId=" + userid + "&token=" + token + "&source=0&taskNo=" + HttpUtility.UrlEncode(taskNo);
            res.data = createFenceBaseUrl + param;
        }
        #endregion

        #region 电子围栏写入

        public void updateElectronicFence(HttpContext context)
        {
            try
            {
                string json = context.Request.Params["json"];
                writeLog(json);
                authorityCheck(context);
                ElectronicFence param = JsonConvert.DeserializeObject<ElectronicFence>(json);
                string[] id = param.uniqueId.Split('_');
                yw_wldw_gnkh_shdzEntity m = new yw_wldw_gnkh_shdzEntity();
                m.yw_khbm = id[0];
                m.cxh = id[1];
                if (param.style == "circle")
                {
                    m.type = 0;
                    m.fw = param.radius;
                    m.jd = param.lng;
                    m.wd = param.lat;
                }
                else
                {
                    m.type = 1;
                    m.points = param.points;
                }

                new Interfaces.Service.FenceService().updateShdz(m);
                res.result = true;
            }
            catch (Exception ex)
            {
                res.msg = ex.Message;
                res.result = false;
                writeLog("updateElectronicFence出现异常：" + ex.Message);
            }
        }

        #endregion

        #region 获取坐标接口
        public void getSiteByAddress(HttpContext context)
        {
            string url = baseUrl + "/getCenterByAddress.do";
            string token = HttpUtility.UrlEncode(DESEncrypt(userid));
            string address = context.Request.Params["address"];

            string param = "userId=" + userid + "&token=" + token + "&address=" + HttpUtility.UrlEncode(address);
            res.data = PostWebRequest(url, param, Encoding.UTF8);
        }
        #endregion

        #region 添加物流任务监视

        public void AddLogisticsMonitoringTest(HttpContext context)
        {
            try
            {
                string id = context.Request.Params["id"];
                string strerr = "";
                res.result = AddLogisticsMonitoring(id, out strerr);
                res.msg = strerr;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }

        public bool AddLogisticsMonitoring(string dzwlbh, out string strerr)
        {
            Interfaces.Service.FenceService serv = new Interfaces.Service.FenceService();
            strerr = "";
            s_fence_log log = new s_fence_log();
            log.jklx = "添加监控";
            log.sfcg = 0;
            log.dzwlbh = dzwlbh;

            try
            {
                yw_hddz_wlgzEntity wlgz = serv.getWlgzByDzwlbh(dzwlbh);
                userid = QsWebSoft.AppService.GetUserID();
                if (wlgz == null)
                {
                    throw new Exception("编号" + dzwlbh + "的任务不存在");
                }
                List<yw_hddz_wlgz_cmdEntity> cmdlist = serv.getWlgzcmdByRwbh(wlgz.rwbh);
                string token = HttpUtility.UrlEncode(DESEncrypt(userid));
                string url = baseUrl + "/saveFenceInfo.do";
                #region 日志
                Hashtable ht = new Hashtable();
                ht.Add("wlgz", wlgz);
                ht.Add("item", cmdlist);

                log.rwbh = wlgz.rwbh;
                log.rwkssj = wlgz.rwkssj;
                log.cph = wlgz.cph;
                log.sfxz = wlgz.status == 0 ? 1 : 0;
                log.reqjson = JsonConvert.SerializeObject(ht);

                #endregion
                if (string.IsNullOrEmpty(wlgz.cph) || wlgz.rwkssj == null)
                {
                    throw new Exception("车牌号和任务开始时间必须都不能为空");
                }

                if (wlgz.sfybd != "Y")
                {
                    throw new Exception("必须有北斗设备才能添加监控任务");
                }

                ElectronicFenceTask task = new ElectronicFenceTask();
                task.taskNo = wlgz.dzwlbh;
                task.userId = userid;
                task.vno = wlgz.cph;
                task.starttime = wlgz.rwkssj.GetValueOrDefault().ToString("yyyy-MM-dd HH:mm:ss");
                task.endtime = wlgz.rwkssj.GetValueOrDefault().AddDays(2).ToString("yyyy-MM-dd HH:mm:ss");
                if (wlgz.rwkssj.GetValueOrDefault().AddDays(2) <= DateTime.Now)
                {
                    throw new Exception("任务开始时间不能为2天前");
                }
                task.fences = new List<ElectronicFenceTaskItem>();
                bool isJump = true;
                int jumpNum = 0;
                foreach (var cmd in cmdlist)
                {
                    ElectronicFenceTaskItem item = new ElectronicFenceTaskItem();
                    item.address = string.IsNullOrEmpty(cmd.dz_xx) ? cmd.rwmc : cmd.dz_xx;


                    if (cmd.wllx == 0 && (string.IsNullOrEmpty(cmd.jd) || string.IsNullOrEmpty(cmd.wd) || string.IsNullOrEmpty(cmd.fw)))
                    {
                        if (cmd.wlxh == cmdlist.Count && cmd.rwmc == "堆场")// 最后一个堆场节点可以出现经度纬度为空
                        {
                            continue;
                        }
                        throw new Exception("围栏类型为圆时经度、维度、范围必须都不能为空");
                    }
                    if (cmd.wllx == 1 && string.IsNullOrEmpty(cmd.points))
                    {
                        if (cmd.wlxh == cmdlist.Count && cmd.rwmc == "堆场")// 最后一个堆场节点可以出现空坐标
                        {
                            continue;
                        }
                        throw new Exception("围栏类型为多边形时坐标点points不能为空");
                    }


                    if ((cmd.jrdzwlsj != null && cmd.jdzwlsj_czry != "北斗") || (cmd.cdzwlsj != null && cmd.cdzwlsj_czry != "北斗"))
                    {
                        jumpNum = cmd.wlxh;
                        isJump = true;
                    }
                    else
                    {
                        isJump = false;
                    }


                    item.no = cmd.wlxh;
                    item.lat = cmd.wd;
                    item.lng = cmd.jd;
                    item.radius = cmd.fw;

                    item.type = "0";
                    item.style = cmd.wllx == 1 ? "polygon" : "circle";
                    if (!string.IsNullOrEmpty(cmd.points))
                        item.points = cmd.points.Replace("\"", "\'");
                    //if (cmd.wlxh == 1 && cmd.rwlx != "1")
                    //{
                    //    item.type = "2";
                    //}
                    //if (cmd.wlxh == 1 && cmd.rwmc != "港区")
                    //{
                    //    item.type = "2";
                    //}

                    task.fences.Add(item);
                }

                if (isJump && jumpNum == task.fences[task.fences.Count - 1].no)
                {
                    stopTask(task.taskNo, out strerr);
                    serv.updateTaskExcptionStatusByRwbh(task.taskNo, 3);
                    throw new Exception(" 最后一个节点已经有进出围栏时间， 自动终止围栏任务");
                }

                //最后一个节点 只监控进
                task.fences[task.fences.Count - 1].type = "1";
                log.reqjson = JsonConvert.SerializeObject(task);
                string param = "userId=" + userid + "&token=" + token + "&json=" + HttpUtility.UrlEncode(log.reqjson);
                log.resjson = PostWebRequest(url, param, Encoding.UTF8);
                //log.resjson = "{\"code\":\"0\"}";

                FenceResponse response = JsonConvert.DeserializeObject<FenceResponse>(log.resjson);
                if (response.code == "0")
                {
                    if (wlgz.status == 0 || wlgz.status == null)
                    {
                        //修改监控状态
                        serv.updatewlgzstatus(wlgz.rwbh, 1);
                    }
                    writeLog("任务" + dzwlbh + "添加监控成功");
                    if (isJump && jumpNum > 0)
                    {
                        log.tgjd = jumpNum;
                        string strErr = "";
                        if (jumpFence(dzwlbh, jumpNum + 1, out strErr))
                        {
                            writeLog("任务" + dzwlbh + "监控节点自动跳到第" + (jumpNum) + "个节点");
                            return true;
                        }
                        else
                        {
                            throw new Exception("跳过围栏时出现异常，描述：" + strErr);
                        }
                    }
                    log.sfcg = 1;
                }
                else
                {
                    throw new Exception(response.des);
                }
            }
            catch (Exception ex)
            {
                strerr = ex.Message;
                writeLog("添加任务" + dzwlbh + "出现异常" + ex.Message);
            }
            finally
            {
                log.msg = strerr;
                serv.addfencelog(log);
            }
            return log.sfcg == 1;
        }
        #endregion

        #region 地图服务回调

        #region 车辆出入围栏反写
        public void UpdateInOrOutFence(HttpContext context)
        {
            try
            {
                string json = context.Request.Params["json"];
                writeLog(json, "fence");
                authorityCheck(context);
                TaskRequest param = JsonConvert.DeserializeObject<TaskRequest>(json);
                yw_hddz_wlgzEntity wlgz = new Interfaces.Service.FenceService().getWlgzByDzwlbh(param.taskNo);
                Interfaces.Service.FenceService fserv = new Interfaces.Service.FenceService();

                bool isUpdate = true;//是否需要更新
                try
                {
                    if (wlgz == null)
                    {
                        throw new Exception("没找到编号为" + param.taskNo + "的任务");
                    }

                    List<yw_hddz_wlgz_cmdEntity> list = new Interfaces.Service.FenceService().getWlgzcmdByRwbh(wlgz.rwbh);
                    foreach (var m in list)
                    {
                        if (m.wlxh == param.no)
                        {
                            if (param.listenStatus == "0")
                            {
                                if (m.jrdzwlsj != null)
                                    throw new Exception(m.rwbh + "已经有进入电子围栏时间");
                                else if (m.wlxh == 1 && m.rwlx != "1" && m.rwmc != "港区")
                                {
                                    throw new Exception("非港区的第一个任务不反写进时间");
                                }
                            }
                            if (param.listenStatus == "1")
                            {
                                if (m.rwmc == "港区")// 出港区时间 单独出来
                                {
                                    m.cdzwlsj = Convert.ToDateTime(param.crttime);
                                    fserv.UpdateWlgzCmdOutPort(m);
                                    throw new Exception(m.rwbh + "出港区时间需要单独处理");
                                }
                                else if (m.cdzwlsj != null)
                                {
                                    throw new Exception(m.rwbh + "已经有出电子围栏时间");
                                }

                            }
                            //出港区时间先不更新 2018年8月14日20:27:59
                            //if (param.listenStatus == "1" && m.rwmc == "港区")
                            //{
                            //    throw new Exception("出港区时间先不更新");
                            //}

                        }
                        else if (m.wlxh > param.no)
                        {
                            if (m.jrdzwlsj != null || m.cdzwlsj != null)
                            {
                                throw new Exception("后续节点已经有围栏出入时间，不能再写入时间");
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    isUpdate = false;
                    writeLog("UpdateInOrOutFence出现异常：" + ex.Message);
                }


                if (isUpdate)
                {
                    yw_hddz_wlgz_cmdEntity cmd = new yw_hddz_wlgz_cmdEntity();
                    cmd.rwbh = wlgz.rwbh;
                    cmd.wlxh = param.no;
                    cmd.ywbh = wlgz.ywbh;
                    cmd.hddz_cxh = int.Parse(wlgz.hddz_cxh);
                    if (param.listenStatus == "0")
                    {
                        cmd.jrdzwlsj = Convert.ToDateTime(param.crttime);
                        cmd.jdzwlsj_lrsj = DateTime.Now;
                    }
                    else
                    {
                        cmd.cdzwlsj = Convert.ToDateTime(param.crttime);
                        cmd.cdzwlsj_lrsj = DateTime.Now;
                    }
                    fserv.UpdateWlgzCmd(cmd);

                    res.result = true;
                }
                else// 不需要更新时 把result设为true
                {
                    res.result = true;
                }
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
                writeLog("UpdateInOrOutFence出现异常：" + ex.Message);
            }
        }
        #endregion

        #region 异常记录反写
        public void errorLog(HttpContext context)
        {
            try
            {
                authorityCheck(context);
                string taskNo = context.Request.Params["taskNo"];
                string des = context.Request.Params["desc"];
                string type = context.Request.Params["type"];
                string json = context.Request.Params["json"];

                //writeLog("接收到异常请求，参数taskNo=" + taskNo + "\t desc=" + des + "\t type=" + type + "\t json=" + json);
                writeLog(string.Format("任务编号为{0}的数据监听异常，说明：{1},json:{2}", taskNo, des, json), "errorlog");

                s_log_fence log = new s_log_fence();
                log.id = Guid.NewGuid().ToString();
                log.cjsj = DateTime.Now;
                log.des = des;
                log.rwbh = taskNo;
                log.type = type;
                if (type == "0" && !string.IsNullOrEmpty(json))
                {
                    TaskRequest param = JsonConvert.DeserializeObject<TaskRequest>(json);
                    log.jd = param.lng;
                    log.wd = param.lat;
                    log.fw = param.radius;
                    log.cph = param.vno;
                    log.dz_xx = param.address;
                    log.wlxh = param.no;
                    log.state = param.listenStatus;
                    if (log.wlxh == 1)// 只有第一个节点的异常才会结束任务
                    {
                        yw_hddz_wlgzEntity wlgz = new Interfaces.Service.FenceService().getWlgzByDzwlbh(taskNo);
                        if (wlgz.rwkssj.GetValueOrDefault().AddDays(1) < DateTime.Now)// 如果是第一个节点 且任务已开始1天 则关闭任务
                        {
                            string strerr = "";
                            this.stopTask(taskNo, out strerr);
                        }
                    }

                }

                new Interfaces.Service.FenceService().insertErrLog(log);



                res.result = true;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
                writeLog("errorLog出现异常：" + ex.Message);
            }
        }


        #endregion

        #endregion

        #region 根据任务编号查询当前节点
        public void queryTaskByNoTest(HttpContext context)
        {
            string id = context.Request.Params["id"];
            string strerr = "";
            TaskRequest m = queryTaskByNo(id, out strerr);
            res.msg = strerr;
            res.data = m;
            res.result = m != null;
        }

        public TaskRequest queryTaskByNo(string dzwlbh, out string strerr)
        {
            strerr = string.Empty;
            try
            {

                Interfaces.Service.FenceService serv = new Interfaces.Service.FenceService();
                //yw_hddz_wlgzEntity wlgz = serv.getWlgzByDzwlbh(dzwlbh);
                //List<yw_hddz_wlgz_cmdEntity> cmdlist = serv.getWlgzcmdByRwbh(wlgz.rwbh);
                string token = HttpUtility.UrlEncode(DESEncrypt(userid));
                string url = baseUrl + "/getListenFence.do";


                string param = "userId=" + userid + "&token=" + token + "&source=1&taskNo=" + dzwlbh;
                string strJson = PostWebRequest(url, param, Encoding.UTF8);
                FenceResponse<TaskRequest> response = JsonConvert.DeserializeObject<FenceResponse<TaskRequest>>(strJson);
                if (response.code == "0")
                {
                    return response.result;
                }
                else
                {
                    strerr = response.des;
                }
            }
            catch (Exception ex)
            {
                strerr = ex.Message;
                writeLog("queryTaskByNo出现异常：" + ex.Message);
            }
            return null;
        }


        #endregion

        #region 强制结束任务
        public void stopTaskTest(HttpContext context)
        {
            string rwbh = context.Request.Params["rwbh"];
            string strerr = "";
            res.result = stopTask(rwbh, out strerr);
            res.msg = strerr;
        }


        public bool stopTask(string dzwlbh, out string strerr)
        {
            strerr = string.Empty;
            Interfaces.Service.FenceService serv = new Interfaces.Service.FenceService();
            s_fence_log log = new s_fence_log();
            log.jklx = "终止监控";
            log.sfcg = 0;
            log.dzwlbh = dzwlbh;
            try
            {
                string url = baseUrl + "/stopTaskForce.do";
                userid = QsWebSoft.AppService.GetUserID();
                if (string.IsNullOrEmpty(userid))
                {
                    userid = "10000";
                }
                string token = HttpUtility.UrlEncode(DESEncrypt(userid));

                string param = string.Format("userId={0}&token={1}&source=0&taskNo={2}", userid, token, dzwlbh);
                log.reqjson = param;
                string strJson = PostWebRequest(url, param, Encoding.UTF8);
                log.resjson = strJson;
                FenceResponse response = JsonConvert.DeserializeObject<FenceResponse>(strJson);
                if (response.code == "0")
                {
                    log.sfcg = 1;
                }
                else
                {
                    strerr = response.des;
                }
            }
            catch (Exception ex)
            {
                strerr = ex.Message;
                writeLog("stopTask出现异常：" + ex.Message);
            }
            finally
            {
                log.msg = strerr;
                serv.addfencelog(log);
            }
            return log.sfcg == 1;
        }

        #endregion

        #region 将任务跳到指定的电子围栏

        public void jumpFenceTest(HttpContext context)
        {
            string strerr = "";
            string rwbh = context.Request.Params["rwbh"];
            int wlxh = int.Parse(context.Request.Params["wlxh"]);
            res.result = jumpFence(rwbh, wlxh, out strerr);
            res.msg = strerr;
        }

        public bool jumpFence(string dzwlbh, int wlxh, out string strerr)
        {
            strerr = string.Empty;
            Interfaces.Service.FenceService serv = new Interfaces.Service.FenceService();
            s_fence_log log = new s_fence_log();
            log.jklx = "监控跳节点";
            log.sfcg = 0;
            log.dzwlbh = dzwlbh;
            try
            {
                string url = baseUrl + "/jumpToDesignatedFence.do";
                userid = QsWebSoft.AppService.GetUserID();
                string token = HttpUtility.UrlEncode(DESEncrypt(userid));

                string param = string.Format("userId={0}&token={1}&source=0&taskNo={2}&no={3}", userid, token, dzwlbh, wlxh.ToString());
                log.reqjson = param;
                string strJson = PostWebRequest(url, param, Encoding.UTF8);
                log.resjson = strJson;
                FenceResponse response = JsonConvert.DeserializeObject<FenceResponse>(strJson);
                if (response.code == "0")
                {
                    log.sfcg = 1;
                }
                else
                {
                    strerr = response.des;
                    return false;
                }
            }
            catch (Exception ex)
            {
                strerr = ex.Message;
                writeLog("jumpFence出现异常：" + ex.Message);
            }
            finally
            {
                log.msg = strerr;
                serv.addfencelog(log);
            }
            return log.sfcg == 1;
        }
        #endregion

        #region 异常日志

        #region 查询异常任务
        public void getErrLog(HttpContext context)
        {
            try
            {
                string kssj = context.Request.Params["kssj"];
                string jssj = context.Request.Params["jssj"];
                string status = context.Request.Params["status"];
                int page = int.Parse(context.Request.Params["page"]);
                int rows = int.Parse(context.Request.Params["rows"]);
                string query = context.Request.Params["query"];
                int count;
                List<s_task_exception> list = new Interfaces.Service.FenceService().getTaskExcList(rows, (page - 1) * rows, kssj, jssj, status, query, out count);
                res.result = true;
                res.rows = list;
                res.total = count;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }

        #endregion

        #region 根据任务号查询异常日志
        public void getLogListByRwbh(HttpContext context)
        {
            try
            {
                string rwbh = context.Request.Params["rwbh"];
                if (string.IsNullOrEmpty(rwbh))
                {
                    throw new Exception("参数任务编号不能为空！");
                }
                List<s_log_fence> list = new Interfaces.Service.FenceService().getFenceLogList(rwbh);
                res.result = true;
                res.rows = list;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
                res.rows = new List<String>();
            }
        }
        #endregion

        #region 删除异常任务
        public void delFenceTask(HttpContext context)
        {
            try
            {
                string id = context.Request.Params["id"];
                new Interfaces.Service.FenceService().updateTaskExcptionStatus(id, 2);
                res.result = true;
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }
        }
        #endregion

        #region 忽略异常

        public void ignoreException(HttpContext context)
        {

        }
        #endregion

        #region 强制结束异常

        public void stopFenceTask(HttpContext context)
        {
            try
            {
                string id = context.Request.Params["id"];
                string rwbh = context.Request.Params["rwbh"];
                string strerr = "";
                if (stopTask(rwbh, out strerr))
                {
                    new Interfaces.Service.FenceService().updateTaskExcptionStatus(id, 1);
                    res.result = true;
                }
                else
                {
                    res.result = false;
                    res.msg = strerr;
                }
            }
            catch (Exception ex)
            {
                res.result = false;
                res.msg = ex.Message;
            }

        }

        #endregion

        #region 批量结束异常
        #endregion
        #endregion

        #region 公用方法

        #region token校验
        /// <summary>
        /// 地图回调接口 验证token
        /// </summary>
        /// <param name="context"></param>
        public static void authorityCheck(HttpContext context)
        {
            string userId = context.Request.Params["userId"];
            string token = context.Request.Params["token"];
            if (DESEncrypt(userId) != token)
            {
                throw new Exception("用户校验失败");
            }
        }
        #endregion

        #region post提交
        private string PostWebRequest(string postUrl, string paramData, Encoding dataEncode)
        {
            string ret = string.Empty;
            try
            {
                byte[] byteArray = dataEncode.GetBytes(paramData); //转化
                HttpWebRequest webReq = (HttpWebRequest)WebRequest.Create(new Uri(postUrl));
                webReq.Method = "POST";
                webReq.ContentType = "application/x-www-form-urlencoded";

                webReq.ContentLength = byteArray.Length;
                Stream newStream = webReq.GetRequestStream();
                newStream.Write(byteArray, 0, byteArray.Length);//写入参数
                newStream.Close();
                HttpWebResponse response = (HttpWebResponse)webReq.GetResponse();
                StreamReader sr = new StreamReader(response.GetResponseStream(), dataEncode);
                ret = sr.ReadToEnd();
                sr.Close();
                response.Close();
                newStream.Close();
            }
            catch (Exception ex)
            {
                throw new Exception("远程访问" + postUrl + "失败,详细：" + ex.Message);
            }
            return ret;
        }
        #endregion

        #region 记录日志
        public static void writeLog(string log, string filename = null)
        {
            try
            {
                string path = System.Web.HttpContext.Current.Server.MapPath("/IFView/log/");
                if (string.IsNullOrEmpty(filename))
                {
                    filename = "log";
                }
                lock (obj)
                {
                    File.AppendAllText(path + filename + "_" + DateTime.Now.ToString("yyyyMMdd") + ".txt", DateTime.Now.ToLongTimeString() + "\t" + log + Environment.NewLine, Encoding.Default);
                }
            }
            catch
            {

            }
        }
        #endregion

        #region Des加密解密
        #region 加密
        public static string DESEncrypt(string strToEncrypt)
        {
            string sKey = "tms&sgt#";
            var result = string.Empty;
            using (var objDesCryptoServiceProvider = new DESCryptoServiceProvider())
            {
                byte[] inputByteArray = Encoding.UTF8.GetBytes(strToEncrypt);
                objDesCryptoServiceProvider.Key = Encoding.UTF8.GetBytes(sKey);
                objDesCryptoServiceProvider.Mode = CipherMode.ECB;
                objDesCryptoServiceProvider.Padding = PaddingMode.PKCS7;
                byte[] bysEncrypted =
                    objDesCryptoServiceProvider.CreateEncryptor().TransformFinalBlock(inputByteArray, 0, inputByteArray.Length);
                result = Convert.ToBase64String(bysEncrypted);
            }
            return result;
        }
        #endregion

        #region 解密
        public static string DESDecrypt(string strToEncrypt, string sKey)
        {
            var result = string.Empty;
            using (var objDesCryptoServiceProvider = new DESCryptoServiceProvider())
            {
                byte[] inputByteArray = Convert.FromBase64String(strToEncrypt);
                objDesCryptoServiceProvider.Key = Encoding.UTF8.GetBytes(sKey);
                objDesCryptoServiceProvider.Mode = CipherMode.ECB;
                objDesCryptoServiceProvider.Padding = PaddingMode.PKCS7;
                byte[] bysEncrypted =
                    objDesCryptoServiceProvider.CreateDecryptor().TransformFinalBlock(inputByteArray, 0, inputByteArray.Length);
                result = Encoding.UTF8.GetString(bysEncrypted);
            }
            return result;
        }
        #endregion
        #endregion


        #endregion


        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}