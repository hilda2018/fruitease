using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace WebApplication1.IFView
{
    /// <summary>
    /// App服务专用接口
    /// </summary>
    [WebService(Namespace = "http://www.novacloud.com/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
    // [System.Web.Script.Services.ScriptService]
    public class ForAppWS : System.Web.Services.WebService
    {

        /// <summary>
        /// 检疫点更新同步接口
        /// </summary>
        /// <param name="ywbh">业务编号</param>
        /// <param name="cxh">集装箱表 次序号</param>
        /// <returns>执行结果</returns>
        [WebMethod]
        public string QuarantineData(string ywbh, string cxh)
        {
            ServResponse servResp = new ServResponse();
            try
            {
                string strErr = "";
                
                servResp.result = Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_jzxxx", "djydsj,jycydzt,tgjysj,kgsj,ssys,kghcl,kghclsj,jydbz", ywbh, out strErr, new string[] { cxh });
                servResp.msg = strErr;
            }
            catch (Exception ex)
            {
                servResp.result =false;
                servResp.msg = ex.Message;
            }

            return servResp.ToJsonString();
        }

        /// <summary>
        /// 空运检查数据同步
        /// </summary>
        /// <param name="cdphbm">编号</param>
        /// <returns>执行结果</returns>
        [WebMethod]
        public string AirDistributionData(string cdphbm)
        {
            ServResponse servResp = new ServResponse();
            try
            {
                string strErr = "";

                servResp.result = Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_kycd", "", cdphbm, out strErr);
                servResp.result = Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_tpcdxx", "", cdphbm, out strErr);
                servResp.msg = strErr;
            }
            catch (Exception ex)
            {
                servResp.result = false;
                servResp.msg = ex.Message;
            }

            return servResp.ToJsonString();
        }
    }
}
