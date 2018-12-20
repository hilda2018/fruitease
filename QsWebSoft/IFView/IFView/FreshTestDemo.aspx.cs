
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Interfaces;
using Interfaces.Model;
using System.Xml;
using System.ComponentModel;
using System.Reflection;

namespace WebApplication1
{
    public partial class FreshTestDemo : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(QsWebSoft.AppService.GetUserID()))
            {
                Response.Write("登录超时！");
                Response.End();
            }
        }
        string ywbh = "16ZT1916";
        string[] ywbhs = { "16ZT1697", "16ZT1916" };
        // HddzIF serv = new HddzIF();
        

        /// <summary>
        /// 查看调用webservice地址
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button2_Click(object sender, EventArgs e)
        {
            Interfaces.FreshPortSupplierSell.CommonInvokeServiceImpl serv = new Interfaces.FreshPortSupplierSell.CommonInvokeServiceImpl();
            this.TextBox1.Text = serv.Url;
        }

        /// <summary>
        /// 完整调用测试
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button3_Click(object sender, EventArgs e)
        {

            HddzIF serv = new HddzIF();

            this.Label1.Text = "";
            //if (serv.HddzChange(ywbhs))
            //{
            //    this.Label1.Text = "数据同步成功！";
            //}
            //else
            //    this.Label1.Text = "数据同步失败！";
            //调用日志
            this.TextBox1.Text = serv.LogInfo.Log;


        }

        /// <summary>
        /// 代卖同步测试
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button4_Click(object sender, EventArgs e)
        {
            HddzIF serv = new HddzIF();
            if (this.txtywbh.Text.Trim() != "")
            {
                ywbh = this.txtywbh.Text;
            }

            this.Label1.Text = "";
            //if (serv.HddzChange(ywbh))
            //{
            //    Console.Write("同步成功");
            //    this.Label1.Text = "数据同步成功！";
            //}
            //else
            //{
            //    Console.Write("同步失败");
            //    this.Label1.Text = "数据同步失败！";
            //}
            //调用日志
            this.TextBox1.Text = serv.LogInfo.Log;
            //string strlog = serv.LogInfo.Log;
        }

        /// <summary>
        /// 国际物流测试
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button1_Click(object sender, EventArgs e)
        {
            HddzIF serv = new HddzIF();
            if (this.txtywbh.Text.Trim() != "")
            {
                ywbh = this.txtywbh.Text;
            }

            this.Label1.Text = "";
            //if (serv.HddzChange(ywbh, FreshPortDataType.InternationalLogistics))
            //{
            //    Console.Write("同步成功");
            //    this.Label1.Text = "数据同步成功！";
            //}
            //else
            //{
            //    Console.Write("同步失败");
            //    this.Label1.Text = "数据同步失败！";
            //}
            //调用日志
            this.TextBox1.Text = serv.LogInfo.Log;
        }
        /// <summary>
        /// 国内物流
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Button6_Click(object sender, EventArgs e)
        {
            HddzIF serv = new HddzIF();
            if (this.txtywbh.Text.Trim() != "")
            {
                ywbh = this.txtywbh.Text;
            }

            this.Label1.Text = "";
            //if (serv.HddzChange(ywbh,FreshPortDataType.DomesticLogistics))
            //{
            //    Console.Write("同步成功");
            //    this.Label1.Text = "数据同步成功！";
            //}
            //else
            //{
            //    Console.Write("同步失败");
            //    this.Label1.Text = "数据同步失败！";
            //}
            //调用日志
            this.TextBox1.Text = serv.LogInfo.Log;
        }

        protected void Button5_Click(object sender, EventArgs e)
        {
//            #region xml
//            string xml = @"<yw_hddz>
//      <ocrid>3d59043e-71dd-43a7-b0f2-e00a628540c4</ocrid>
//      <gwgysbm>ENZAFRUIT NZ INTERNATIONAL LIMITED</gwgysbm>
//      <zjsmc>ENZAFRUIT NZ INTERNATIONAL LIMITED</zjsmc>
//      <khbm>SHANGHAI ZE LUN TRADING CO LTD</khbm>
//      <jydwbm>SHANGHAI   OHENG   IMPORT&amp;amp;EXPORT   CO.,LTD.</jydwbm>
//      <hz_spmc>鲜苹果</hz_spmc>
//      <ysfs>海运</ysfs>
//      <cyr>中海集装箱运输股份有限公司</cyr>
//      <cyrbm>中海集装箱运输股份有限公司</cyrbm>
//      <invoiceno>D16279</invoiceno>
//      <ztdh>NPESHA000807</ztdh>
//      <ycddm>New zealand</ycddm>
//      <ejycd>New zealand</ejycd>
//      <sfyyf>Freight Prepaid</sfyyf>
//      <cm>CMA CGM PUGET</cm>
//      <hcorhbh>094ZJN</hcorhbh>
//      <zcrq>2016.05.15</zcrq>
//      <qyg>Napier, New Zealand</qyg>
//      <mdg>shanghai, china Peoples Rep</mdg>
//      <fh>799861、799888</fh>
//      <zjz>34566</zjz>
//      <zmz>39102</zmz>
//      <hz_jzxh>CXRU1026319、CXRU1490124</hz_jzxh>
//      <hz_xx>40RH</hz_xx>
//      <hz_zhlx>40RH</hz_zhlx>
//      <jgfs>CIF</jgfs>
//      <wbbb>USD</wbbb>
//      <zje>120,400.00</zje>
//      <invoice_date>2016.05.15</invoice_date>
//      <mygb>New zealand</mygb>
//      <tzrmc>SHANGHAI ZE LUN TRADING CO LTD</tzrmc>
//      <jldw>CTN</jldw>
//      <clfs>无</clfs>
//      <details>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>1,092</jlsl>
//          <fpje>41,496.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>38.00</djjg>
//          <spgg_yw>30</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>HG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 30ct HG 2 Layer Z Pack Size 050</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>420</jlsl>
//          <fpje>11,760.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>28.00</djjg>
//          <spgg_yw>30</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>SG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 30ct SG 2 Layer Z Pack Size 060</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>168</jlsl>
//          <fpje>7,728.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>46.00</djjg>
//          <spgg_yw>70</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>SG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 70ct SG Z Pack Size 070</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>56</jlsl>
//          <fpje>2,576.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>46.00</djjg>
//          <spgg_yw>80</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>SG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 80ct SG Z Pack Size 080</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>84</jlsl>
//          <fpje>3,192.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>38.00</djjg>
//          <spgg_yw>30</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>HG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 30ct HG 2 Layer Z Pack Size 050</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>1,092</jlsl>
//          <fpje>39,312.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>36.00</djjg>
//          <spgg_yw>30</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>HG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 30ct HG 2 Layer Z Pack Size 060</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>420</jlsl>
//          <fpje>11,760.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>28.00</djjg>
//          <spgg_yw>30</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>SG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 30ct SG 2 Layer Z Pack Size 060</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//        <yw_hddz_spxx>
//          <spmc_yw></spmc_yw>
//          <jldw>CTN</jldw>
//          <jlsl>56</jlsl>
//          <fpje>2,576.00</fpje>
//          <hgbm>080810</hgbm>
//          <djjg>46.00</djjg>
//          <spgg_yw>70</spgg_yw>
//          <sppz_yw>Envy</sppz_yw>
//          <spdj_yw>SG</spdj_yw>
//          <sppp_yw></sppp_yw>
//          <spms>EnvyTM (Scilate) 70ct SG Z Pack Size 070</spms>
//          <zjz></zjz>
//          <zmz></zmz>
//        </yw_hddz_spxx>
//      </details>
//    </yw_hddz>";
//            #endregion

//            string strError = "";
//            yw_hddzEntity model = ModelTools.ConvertXmlToModel<yw_hddzEntity>(xml,out strError);
//            //string str = ModelTools<yw_hddzEntity>.treatedNumString("120,000.00");
//            this.TextBox1.Text = strError;
        }
    }
}