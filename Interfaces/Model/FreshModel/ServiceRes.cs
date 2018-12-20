using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.IO;
using System.Xml;
using Interfaces.Service;

namespace Interfaces.Model
{
    /// <summary>
    /// 服务返回对象
    /// </summary>
    public class ServiceRes
    {
        public string SupplierSellID { get; set; }

        public bool IsSuccess { get; set; }

        public List<string> Msg
        {
            get;
            set;
        }
        //public string ToXml() { return ""; }
    }
    public class Message
    {
        public string errormessage { get; set; }
    }

    /// <summary>
    /// 系统日志
    /// </summary>
    public class SysLog
    {
        public SysLog()
        {
            _loglist = new List<SysLogEntity>();
        }
        public string tableName { get; set; }

        private List<SysLogEntity> _loglist;
        #region 方法

        /// <summary>
        /// 添加日志
        /// </summary>
        /// <param name="log"></param>
        public void Add(SysLogEntity log)
        {
            if (_loglist == null)
                _loglist = new List<SysLogEntity>();
            _loglist.Add(log);
        }

        /// <summary>
        /// 保存日志
        /// </summary>
        public void SaveLog()
        {
            //try
            //{
            //    SaveLogToDB();
            //    SaveFailToDb();
            //}
            //catch (Exception ex) { }
            //string path = "";
            string path = "/Interfaces/";
            path = HttpContext.Current.Server.MapPath(path);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            
            _strlog = buildLogStr();
            File.AppendAllText(path + "log_" + DateTime.Now.ToString("yyyyMMdd") + ".txt", _strlog, Encoding.Default);
            SaveLogToDb();
        }
        /// <summary>
        /// 把日志生成一条字符串
        /// </summary>
        public string buildLogStr()
        {
            StringBuilder sb = new StringBuilder();
            foreach (var item in this._loglist)
            {

                sb.Append(item.timespan.ToString());
                sb.Append("\t");
                sb.Append("业务编号为" + item.ywbh + "的数据同步" + item.jklx);
                switch (item.status)
                {
                    case (int)LogStateType.Success:
                        sb.Append("成功,");
                        break;
                    case (int)LogStateType.SyncFail:
                        sb.Append("失败，");
                        break;
                    case (int)LogStateType.SaveIDFail:
                        sb.Append("失败，");
                        break;
                }

                if (!string.IsNullOrEmpty(item.msg))
                {
                    sb.Append("原因：" + item.msg + ",");
                }
                //sb.Append("耗时：" + item.consuming + "秒");
                sb.Append("\n\r");
            }
            return sb.ToString();
        }

        public void SaveLogToDb()
        {
            List<s_log> list = new List<s_log>();
            foreach (var item in this._loglist)
            {
                if (item.hasSaved)
                    continue;

                s_log m = new s_log();
                m.logid = Guid.NewGuid().ToString();
                m.ywbh = item.ywbh;
                m.jklx = item.jklx;
                m.msg = item.msg;
                m.sfcg = item.status == 0 ? 1 : 0;
                m.cjsj = item.timespan;
                m.requestxml = item.RequestXML;
                m.responsexml = item.ResponseXml;
                item.hasSaved = true;
                list.Add(m);
            }
            Service.BaseService.SaveErrorLog(list);
        }
        /// <summary>
        /// 保存失败日志
        /// </summary>
        public void SaveFailLogToDb()
        {
            List<s_log> list = new List<s_log>();
            var llist = this.GetFailLog();
            foreach (var item in llist)
            {
                if (item.hasSaved)
                    continue;

                s_log m = new s_log();
                m.logid = Guid.NewGuid().ToString();
                m.ywbh = item.ywbh;
                m.jklx = item.jklx;
                m.msg = item.msg;
                m.sfcg = item.status == 0 ? 1 : 0;
                m.cjsj = item.timespan;
                m.requestxml = item.RequestXML;
                m.responsexml = item.ResponseXml;
                item.hasSaved = true;
                list.Add(m);
            }
            Service.BaseService.SaveErrorLog(list);
        }



        public void clear()
        {
            _loglist = new List<SysLogEntity>();
        }

        private string _strlog;

        public string Log
        {
            get { return _strlog; }
        }

        /// <summary>
        /// 把日志保存到本地数据库
        /// </summary>
        //private void SaveLogToDB()
        //{
        //    List<SysLogEntity> list = AllLog;
        //    if (list.Count > 0)
        //    {
        //        foreach (var model in list)
        //        {
        //            model.Id = Guid.NewGuid().ToString();
        //        }
        //    }
        //    LocalService serv = new LocalService();
        //    serv.SaveLog(list);
        //}

        /// <summary>
        /// 保存日志到数据库
        /// </summary>
        private void SaveFailToDb()
        {
            var faillist = GetFailLog();
            List<FailLogEntity> list = new List<FailLogEntity>();
            if (faillist.Count > 0)
            {
                foreach (var m in faillist)
                {
                    FailLogEntity fmodel = new FailLogEntity(m);
                    fmodel.timespan = DateTime.Now;
                    fmodel.flag = "fpdb";
                    fmodel.Id = Guid.NewGuid().ToString();
                    list.Add(fmodel);
                }

            }

        }



        /// <summary>
        /// 保存执行失败数据到本地
        /// 以便下次重试同步使用
        /// 未实现
        /// </summary>
        public void SaveFailRecord()
        {
            string path = "/Interfaces/";
            path = HttpContext.Current.Server.MapPath(path);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            string xmlName = path + "FailData.xml";
            if (!File.Exists(xmlName))
            {
                CreateDataXml(xmlName);
            }
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(xmlName);
            XmlElement rootNode = xmlDoc.DocumentElement;
            var failLog = this.GetFailLog();

            foreach (var log in failLog)
            {

                XmlElement xe = xmlDoc.CreateElement("item");
                xe.SetAttribute("SupplierSellID", log.otherID);
                xe.InnerText = log.ywbh;
                rootNode.AppendChild(xe);
            }

            xmlDoc.Save(xmlName);
        }
        /// <summary>
        /// 创建Data基础xml
        /// </summary>
        /// <param name="path"></param>
        private void CreateDataXml(string path)
        {
            //创建XML文档对象
            System.Xml.XmlDocument xmldoc = new System.Xml.XmlDocument();
            //创建xml 声明节点
            System.Xml.XmlNode xmlnode = xmldoc.CreateNode(System.Xml.XmlNodeType.XmlDeclaration, "", "");
            //添加上述创建和 xml声明节点
            xmldoc.AppendChild(xmlnode);
            //创建xml dbGuest 元素（根节点）
            System.Xml.XmlElement xmlelem = xmldoc.CreateElement("", "Data", "");


            xmldoc.AppendChild(xmlelem);
            try
            {
                xmldoc.Save(path);
            }
            catch (Exception ex)
            {
                if (ex.Message.IndexOf("访问被拒绝") != -1)
                {

                    return;
                }
            }

        }
        #endregion

        /// <summary>
        /// 所有日志
        /// </summary>
        public List<SysLogEntity> AllLog
        {
            get { return _loglist; }
        }
        /// <summary>
        /// 获取执行成功的日志
        /// </summary>
        /// <returns></returns>
        public List<SysLogEntity> GetSuccessLog()
        {
            return _loglist.FindAll(l => l.status == (int)LogStateType.Success);
        }
        /// <summary>
        /// 获取执行失败的日志
        /// </summary>
        /// <returns></returns>
        public List<SysLogEntity> GetFailLog()
        {
            return _loglist.FindAll(l => l.status != (int)LogStateType.Success);
        }

        ///// <summary>
        ///// 重写tostring方法
        ///// </summary>
        ///// <returns></returns>
        //public override string ToString()
        //{

        //    return base.ToString();
        //}
    }

    /// <summary>
    /// 执行状态 成功，同步失败，同步成功但保存ID失败
    /// </summary>
    public enum LogStateType { Success, SyncFail, SaveIDFail }

    public class SysLogEntity
    {
        public string Id { get; set; }


        /// <summary>
        /// 业务编号
        /// </summary>
        public string ywbh
        {
            get; set;
        }
        /// <summary>
        /// 对应生鲜港代卖表主键ID
        /// </summary>
        public string otherID { get; set; }

        /// <summary>
        /// 是否添加
        /// </summary>
        public bool isAdd { get; set; }


        /// <summary>
        /// 同步状态
        /// </summary>
        public int status { get; set; }

        /// <summary>
        /// 消息
        /// </summary>
        public string msg { get; set; }

        /// <summary>
        /// 执行时间
        /// </summary>
        public DateTime timespan { get; set; }

        /// <summary>
        /// 执行时间
        /// </summary>
        public int consuming { get; set; }

        /// <summary>
        /// 接口类型
        /// </summary>
        public string jklx { get; set; }

        /// <summary>
        /// 请求的字符串
        /// </summary>
        public string RequestXML { get; set; }

        /// <summary>
        /// 响应的字符串
        /// </summary>
        public string ResponseXml { get; set; }


        /// <summary>
        /// 是否已经保存
        /// </summary>
        public bool hasSaved
        {
            get; set;
        }
    }
    public class FailLogEntity
    {

        public FailLogEntity() { }

        public FailLogEntity(SysLogEntity log)
        {
            _ywbh = log.ywbh;
            _otherid = log.otherID;
            _status = log.status;
            _msg = log.msg;
        }
        public string Id { get; set; }

        private string _logId;
        /// <summary>
        /// 关联日志表ID
        /// </summary>
        public string logId
        {
            get { return _logId; }
            set { _logId = value; }
        }
        private string _ywbh;
        /// <summary>
        /// 业务编号
        /// </summary>
        public string ywbh
        {
            get { return _ywbh; }
            set { _ywbh = value; }
        }

        private string _otherid;
        /// <summary>
        /// 对接系统的主表ID
        /// </summary>
        public string otherID
        {
            get { return _otherid; }
            set { _otherid = value; }
        }



        private int _status;
        /// <summary>
        /// 同步状态
        /// </summary>
        public int status
        {
            get { return _status; }
            set { _status = value; }
        }

        private string _msg;
        /// <summary>
        /// 消息
        /// </summary>
        public string msg
        {
            get { return _msg; }
            set { _msg = value; }
        }

        /// <summary>
        /// 时间戳
        /// </summary>
        public DateTime timespan { get; set; }

        /// <summary>
        /// 标识， fpdb --生鲜港对接，ocr--ocr对接
        /// </summary>
        public string flag { get; set; }

    }
}
