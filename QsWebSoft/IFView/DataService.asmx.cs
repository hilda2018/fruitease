              using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Newtonsoft.Json;

namespace WebApplication1.IFView
{
    /// <summary>
    /// DataService 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://www.novacloud.com/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
    // [System.Web.Script.Services.ScriptService]
    public class DataService : System.Web.Services.WebService
    {


        [WebMethod]
        public string GetHddz(string conditions, string token)
        {
            ServResponse servResp = new ServResponse();
            try
            {
                //conditions = "{\"beginTime\":\"2016-01-01\",\"endTime\":\"\"}";
                Conditions c = new Conditions();
                try
                {
                    c = JsonConvert.DeserializeObject<Conditions>(conditions);
                }
                catch { throw new Exception("传入的查询条件解析错误！"); }


                DateTime beginTime = new DateTime();
                DateTime endTime = new DateTime();

                DateTime.TryParse(c.beginTime, out beginTime);
                DateTime.TryParse(c.endTime, out endTime);

                List<Interfaces.Model.ToEMailResponse> list = new Interfaces.Service.HddzService().GetEmailResponseList(beginTime, endTime,c.serviceNo,c.areaNo,c.areaName);

                
                //return JsonConvert.SerializeObject(list);
                servResp.data = list;
            }
            catch (Exception ex)
            {
                servResp.result = false;
                servResp.msg = ex.Message;
            }
            return servResp.ToJsonString();
        }


    }

    /// <summary>
    /// 查询条件对象
    /// </summary>
    public class Conditions
    {
        /// <summary>
        /// 开始时间
        /// </summary>
        public string beginTime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        public string endTime { get; set; }
        /// <summary>
        /// 业务编号
        /// </summary>
        public string serviceNo { get; set; }
        /// <summary>
        /// 地区名称
        /// </summary>
        public string areaName { get; set; }
        /// <summary>
        /// 地区编号
        /// </summary>
        public string areaNo { get; set; }
    }

    public class ServResponse
    {
        public bool result { get; set; }

        public object data { get; set; }

        public string msg { get; set; }

        public string ToJsonString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
