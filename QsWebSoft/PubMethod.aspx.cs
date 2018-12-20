using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using TXSoft.DataStore;
using System.Text;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Globalization;
using QsWebSoft.Helper;
using System.ComponentModel;
using Sybase.DataWindow;
using TXSoft.Common;
using TXSoft.ExtPB;
using Microsoft.Win32;
using System.Configuration;
using System.Diagnostics;
using System.Net;
using System.Collections;
using Interfaces;
using System.Xml;
using System.Threading;
using System.Drawing.Imaging;

 

namespace QsWebSoft
{
    public partial class PubMethod : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            AjaxPro.Utility.RegisterTypeForAjax(typeof(QsWebSoft.PubMethod));
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetServerTime()
        {
            return DateTime.Now.ToString();
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReturnDateString(DateTime rq)
        {
            return rq.ToString();
        }
        //查询归集后业务编号 与 应收货代费用归集 是否已归集
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static int GjhYwbh_yshdfygj(string ywbh)
        {
            int num = 0;
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(1) from yw_hddz_yshdfygj_cmd where ywbh =  @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }           
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //查询归集后业务编号 与 应收货代费用归集 是否已归集
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int GjhYwbh_yshdfygj2(string ywbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(1) from yw_hddz_yshdfygj_cmd where ywbh =  @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //查询归集后业务编号 与 收款核销管理 是否已归集
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static int GjhYwbh_skhxgl(string ywbh)
        {
            int num = 0;
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(1) from yw_hddz_skhx_cmd where ywbh =  @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //查询制表人
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static string yshdfygjbh_cjry(string yshdfygjbh, ref string num)
        {
            
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(zbr,'') from yw_hddz_yshdfygj where yshdfygjbh = @yshdfygjbh");
                cmd.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetString(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
       
      
        //查询这票业务是否归集，如果归集在应收费用确认中 不能将‘应收确认’去掉。
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static int sfy_yshdfygj(string ywbh, string jzxh, string ztdh, ref int num, string error)
        {
            
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_yshdfygj where ywbh = @ywbh and jzxh = @jzxh and ztdh = @ztdh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@jzxh", jzxh));
                cmd.Parameters.Add(new SqlParameter("@ztdh", ztdh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //应收物流服务费用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenYswlfy(string ywbh, int cxh, string userid, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            StringBuilder strBud = new StringBuilder();

            try
            {
                strBud.Append(@"insert into s_log_err(eid,tablename,changecols,mainid,parameters,cscs,sfcg,funname) 
                        values(@GUID,'yw_hddz_jzxxx','wlfyje,wlfylclfje,tsycdzyjsje',@ywbh,@cxh,0,0,'DataToFreshPort');");

                updatecmd = dbHelp.GetCommand(strBud.ToString());
                updatecmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                updatecmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                updatecmd.Parameters.Add(new SqlParameter("@userid", userid));
                updatecmd.Parameters.Add(new SqlParameter("@GUID", "yswl" + userid + Guid.NewGuid().ToString()));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };
            }
            catch (Exception ex)
            {
                error = ex.Message;
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
                strBud.Length = 0;
                strBud = null;
            }
            return num;
        }
      
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void ProcessRequests()
        {
       
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            Encoding myEncoding = Encoding.GetEncoding("UTF-8");

            //WebRequest wreq = WebRequest.Create("http://www.fruitease.com:8009/images/wxgzh_sj.gif");
            //HttpWebResponse wresp = (HttpWebResponse)wreq.GetResponse();
            //Stream s = wresp.GetResponseStream();
            //System.Drawing.Image img;
            //img = System.Drawing.Image.FromStream(s);
            //img.Save("c:\\wxgzh_sj.gif", ImageFormat.Gif);
            //img.Dispose();


            WebRequest wreq = WebRequest.Create("http://www.fruitease.com:8009/images/wxgzh_sj.gif");
            HttpWebResponse wresp = (HttpWebResponse)wreq.GetResponse();
            Stream s = wresp.GetResponseStream();
            System.Drawing.Image img;
            img = System.Drawing.Image.FromStream(s);
            img.Save("D:\\aa.jpg", ImageFormat.Gif);
        }

        //货代单证合同盖章下载
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void DownloadGz()
        {
            Encoding myEncoding = Encoding.GetEncoding("UTF-8");
            WebRequest wreq = WebRequest.Create("http://www.fruitease.com:8009/Images/htdygz.gif");
            HttpWebResponse wresp = (HttpWebResponse)wreq.GetResponse();
            Stream s = wresp.GetResponseStream();
            System.Drawing.Image img;
            img = System.Drawing.Image.FromStream(s);
            img.Save("D:\\htdygz.jpg", ImageFormat.Gif);
        }

        //查询归集后业务编号 与 收款核销管理 是否已归集
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int GjhYwbh_skhxgl2(string ywbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(1) from yw_hddz_skhx_cmd where ywbh =  @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static decimal Wb2Usd(string wbbb, ref decimal hl)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT xchg_usd FROM t_currency Where cu_type=@wbbb  ");
                cmd.Parameters.Add(new SqlParameter("@wbbb", wbbb));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    hl = rs.GetDecimal(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return hl;
        }

        //取折人民币汇率
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static decimal Wb2Rmb(string wbbb, ref decimal hl)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT xchg_rmb FROM t_currency Where cu_type=@wbbb  ");
                cmd.Parameters.Add(new SqlParameter("@wbbb", wbbb));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    hl = rs.GetDecimal(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return hl;
        }
        //取产品信息库管理中的最低价和最高价
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static int dw_spxxzgj_sdj(string ctr_cname,string spbm,double djjg , ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            double h2;
            double hl;
            
            try
            {
                cmd = dbHelp.GetCommand("SELECT  zdj,zgj FROM yw_hddz_cpxxk Where spbm = @spbm and ctr_ename = @ctr_cname");
                cmd.Parameters.Add(new SqlParameter("@spbm", spbm));
                cmd.Parameters.Add(new SqlParameter("@ctr_cname", ctr_cname));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    hl = rs.GetDouble(0);
                    h2 = rs.GetDouble(1);
                    if (djjg < hl || djjg > h2) {
                        num = 1;
                    }
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //取退税率
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static double GetTslByHgbm(string hgbm, ref double tsl)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(tsl,0) FROM t_hgsh Where hs_code=@hgbm");
                cmd.Parameters.Add(new SqlParameter("@hgbm", hgbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tsl = rs.GetDouble(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return tsl;
        }

        //取增值税率
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static double GetZzslByHgbm(string hgbm, ref double zzsl)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(tax_rate,0) FROM t_hgsh Where hs_code=@hgbm  ");
                cmd.Parameters.Add(new SqlParameter("@hgbm", hgbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    zzsl = rs.GetDouble(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return zzsl;
        }
        


        //判断明细单编码是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckMxdbh(string mxdbh, int bbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_mxd Where mxdbh=@mxdbh and bbh=@bbh  ");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@bbh", bbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //对账联系人维护
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string dzlxrwh(string khbm,string ywbh, ref string num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand cmdCount = null;
            string lxfs = "";
            try
            {
                cmd = dbHelp.GetCommand("SELECT dzlxrwh.lxr,dzlxrwh.lxfs FROM dzlxrwh  where  dzlxrwh.khbm = @khbm");
                cmd.Parameters.Add(new SqlParameter("@khbm", khbm));
                
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetString(0);
                    lxfs = rs.GetString(1);
                    cmdCount = dbHelp.GetCommand("update yw_hddz_zdgl set dzlxr = @dzlxr,lxfs = @lxfs where ywbh = @ywbh");
                    cmdCount.Parameters.Add(new SqlParameter("@dzlxr", num));
                    cmdCount.Parameters.Add(new SqlParameter("@lxfs", lxfs));
                    cmdCount.Parameters.Add(new SqlParameter("@ywbh", ywbh));

                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断代理协议号是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckDlxyh(string dlxyh, int bbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_dlxy Where dlxyh=@dlxyh and bbh=@bbh ");
                cmd.Parameters.Add(new SqlParameter("@dlxyh", dlxyh));
                cmd.Parameters.Add(new SqlParameter("@bbh", bbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);                    
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断开票通知书编码是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckKptzsid(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_kptzs Where id=@id  ");
                cmd.Parameters.Add(new SqlParameter("@id", id));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //取左边开始的N个字符
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string Left(string str, int len, ref string tmpStr)
        {
            tmpStr = str;
            if (!string.IsNullOrEmpty(str) && str.Length > len)
            {
                tmpStr = str.Substring(0, len);
            }
            return tmpStr;
        }

        //数字转换英文大写
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string Ywdx(decimal num, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT dbo.f_num_upper(@num)  ");
                cmd.Parameters.Add(new SqlParameter("@num", num));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tmpStr = rs.GetString(0);
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }
        
        
        //数字转换中文大写
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string Zwdx(decimal num, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT dbo.f_ChineseCost(@num)  ");
                cmd.Parameters.Add(new SqlParameter("@num", num));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tmpStr = rs.GetString(0);
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //取抬头信息BY ttno
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetCompanyImformation(string tt_no, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(cname,''),isnull(ename,''),isnull(eaddr,'') from t_enterprise where tt_no=@tt_no  ");
                cmd.Parameters.Add(new SqlParameter("@tt_no", tt_no));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[3];
                    int i = 0;
                    for (i = 0; i < 3; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }


        //取日期加减N天
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public DateTime addDay(DateTime sdate, int days, ref DateTime tmpStr)
        {
            tmpStr = sdate.AddDays(days);
            return tmpStr;

        }

        //取代理商信息BY userid
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string GetDlxyhImformationbyUserid(string Dlwtf, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select dlxyh from yw_dlxy with (nolock),(select sqrq_max = max(a.sqrq) from yw_dlxy a with (nolock) where dlwtf_bm = @Dlwtf)  aa where dlwtf_bm = @Dlwtf and sqrq =  aa.sqrq_max and bb_flag = 'Y';");
                cmd.Parameters.Add(new SqlParameter("@Dlwtf", Dlwtf));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tmpStr = rs.GetString(0);
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //取代理商信息BY userid
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string hxzgtgzt_hxzgtgqrry(string ctr_area2, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("  SELECT  whry FROM t_area2  where ctr_area2 = @ctr_area2 ");
                cmd.Parameters.Add(new SqlParameter("@ctr_area2", ctr_area2));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tmpStr = rs.GetString(0);
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //取抬头信息BY userid
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetCompanyImformationbyUserid(string userid, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(a.cname,''),isnull(a.ename,''),isnull(a.eaddr,''),isnull(a.tt_no,'') from t_enterprise a,t_operator b where  a.tt_no = b.tt_no and b.e_no=@userid  ");
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[4];
                    int i = 0;
                    for (i = 0; i < 4; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }


        //取个人信息BY userid
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetGrxxbyUserid(string userid, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(a.name,''),isnull(a.mobile_tel,'') from rs_employee a where    a.e_no=@userid  ");
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[2];
                    int i = 0;
                    for (i = 0; i < 2; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //取抬头信息BY wtf
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetCompanyImformationbyWtf(string wtf, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(a.cname,''),isnull(a.ename,''),isnull(a.eaddr,''),isnull(a.tt_no,''),isnull(a.caddr,''),isnull(a.gsdjqybs,''),isnull(a.fax,''),isnull(a.swdjhm,''),isnull(a.bgbh,''),isnull(a.khyh,''),isnull(a.yhzh,'') from t_enterprise a,yw_dlxy c where c.dlwtf_bm=@bm and a.tt_no = c.dlstf_bm  ");
                cmd.Parameters.Add(new SqlParameter("@bm", wtf));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[11];
                    int i = 0;
                    for (i = 0; i < 11; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }
        //Hddz中查询目的港的jdr
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string MdgAndJdrjc(string mdg, ref string jdrjc)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select jdrjc from t_port_c where cname = @mdg");
                cmd.Parameters.Add(new SqlParameter("@mdg", mdg));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    jdrjc = rs.GetString(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return jdrjc;
        }
        //Hddz集装箱号校验
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string JzxhJy(string jzxh, ref string jyjzxh, ref string jyws)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("p_hddz_jzxhjy");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@jzxh", jzxh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    jyjzxh = rs.GetString(0);
                    jyws = rs.GetString(1);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            if (jyjzxh != null && jyjzxh != "" && jyws != null && jyws != "" && jyjzxh == jyws)
            { return jzxh; }
            else { return jyws; }
        }
        //判断结汇单据是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckDetailMxdbh(string mxdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_detail Where mxdbh=@mxdbh  ");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断报关单据是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckBgMxdbh(string mxdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM cy_baoguan Where mxdbh=@mxdbh  ");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新生成报关结汇数据后明细单状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateMxdAfterReceiveData(string mxdbh, int bbh, string state, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                if (state == "接收")
                {
                    cmd = dbHelp.GetCommand("update yw_mxd set dz_jsrq=getdate(),dz_state='已接收',dz_zdy=@userid ,dzjh_jsrq=getdate() ,dzjh_zdy = @userid, dzjh_state = '已接收',state='批准',spjc='自动审批',fsrq=getdate() Where mxdbh=@mxdbh and bbh=@bbh  ");
                    cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                    cmd.Parameters.Add(new SqlParameter("@bbh", bbh));
                    cmd.Parameters.Add(new SqlParameter("@userid", userid));
                }
                if (state == "退回")
                {
                    cmd = dbHelp.GetCommand("update yw_mxd set dz_jsrq=null,dz_state='未接收',dz_zdy=null ,dzjh_jsrq=null ,dzjh_zdy =null, dzjh_state = '未接收',state='新制',spjc='未审批',fsrq=null Where mxdbh=@mxdbh and bbh=@bbh  ");
                    cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                    cmd.Parameters.Add(new SqlParameter("@bbh", bbh));
                }


                ;
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断日期是否为空
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string CheckDate(DateTime sDate)
        {
            if (sDate.ToString("yyyy-MM-dd") == "1900-01-01")
            {
                return "1900-01-01";
            }
            else
            {
                return sDate.ToString();
            }
        }
        ////数据导入  预估增值税
        ////执行存储过程计算
        //[AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        //public double p_hddz_sjdr_ygzzs(string ywbh, ref double num, string error)
        //{
        //    DBHelp dbHelp = new DBHelp();

        //    SqlCommand cmd = null;
        //    try
        //    {
        //        cmd = dbHelp.GetCommand("p_hddz_sjdr_ygzzs");
        //        cmd.CommandType = CommandType.StoredProcedure;
        //        //cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
        //        IDataParameter[] iData = new SqlParameter[4];
        //        iData[0] = new SqlParameter("@ywbh", ywbh);


        //        SqlDataReader rs = dbHelp.RunProcedure("p_hddz_sjdr_ygzzs", iData);

        //        if (rs.Read())
        //        {
        //            num = rs.GetDouble(0);
        //            rs.Close();
        //        }
        //        object value = cmd.ExecuteScalar();
        //        num = long.Parse((string)value);
        //        if (cmd.ExecuteNonQuery() >= 0)
        //        {
        //            dbHelp.Commit();
        //            //object value = cmd.ExecuteScalar();
        //            //num = long.Parse((string)value);
        //        }
        //        else
        //        {
        //            dbHelp.Rollback();
        //            return 0;
        //        };


        //    }

        //    catch (Exception ex)
        //    {
        //        error = ex.Message;

        //    }
        //    finally
        //    {
        //        dbHelp.Close();
        //        dbHelp = null;
        //    }
        //    return num;
        //}

        //数据导入  增值税 p_hddz_sjdr_ygzzs
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double p_hddz_sjdr_ygzzs(string ywbh, ref double zzs)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select ((zje* isnull(sshl,0) + isnull(kpje,0)*isnull(kphl,0)) * (case when jgfs <> 'CIF' and bxfbj = '1' then 1+isnull(bxfje,0)/100 else 1 end) *(1+ isnull(yhgs,isnull(zcgs,0)))*zzsl) as ygzzs from (select zje,sshl = (select max(zjj) from t_currency_sshl where datediff(mm,hlrq,isnull(bgsj,isnull(sjkgsj,yjkgsj))) = 0 and t_currency_sshl.wbbb = yw_hddz.wbbb),kpje = (select sum(yw_hddz_sdzpgl_cmd.kpje) from yw_hddz_sdzpgl,yw_hddz_sdzpgl_cmd where yw_hddz_sdzpgl.fph = yw_hddz_sdzpgl_cmd.fph and yw_hddz_sdzpgl_cmd.ywbh = yw_hddz.ywbh),kphl = (select max(zjj) from yw_hddz_sdzpgl,yw_hddz_sdzpgl_cmd,t_currency_sshl where yw_hddz_sdzpgl.fph = yw_hddz_sdzpgl_cmd.fph and yw_hddz_sdzpgl_cmd.ywbh = yw_hddz.ywbh and  datediff(mm,hlrq,isnull(bgsj,isnull(sjkgsj,yjkgsj))) = 0 and  t_currency_sshl.wbbb = yw_hddz_sdzpgl.kpbz),yw_hddz.jgfs,   yw_hddz.bxfje,   yw_hddz.bxfbj,      yhgs = (select max(yw_hddz_cpxxk_slb.yhgs) from yw_hddz_cpxxk_slb,yw_hddz_cpxxk,yw_hddz_spxx where yw_hddz_cpxxk_slb.cpxxkbm = yw_hddz_cpxxk.cpxxkbm and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),ksrq) <=0 and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),jsrq) >0  and yw_hddz_cpxxk.ctr_ename = yw_hddz.ycd and yw_hddz_spxx.ywbh = yw_hddz.ywbh and yw_hddz_cpxxk.spzwmc = yw_hddz_spxx.spmc ),zcgs = (select max(yw_hddz_cpxxk_slb.zcgs) from yw_hddz_cpxxk_slb,yw_hddz_cpxxk,yw_hddz_spxx where  yw_hddz_cpxxk_slb.cpxxkbm = yw_hddz_cpxxk.cpxxkbm and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),ksrq) <=0 and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),jsrq) >0  and yw_hddz_cpxxk.ctr_ename = yw_hddz.ycd and yw_hddz_spxx.ywbh = yw_hddz.ywbh and yw_hddz_cpxxk.spzwmc = yw_hddz_spxx.spmc ),zzsl = (select  max(yw_hddz_cpxxk_slb.zzsl)  from yw_hddz_cpxxk_slb,yw_hddz_cpxxk,yw_hddz_spxx where yw_hddz_cpxxk_slb.cpxxkbm = yw_hddz_cpxxk.cpxxkbm and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),ksrq) <=0 and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),jsrq) >0  and yw_hddz_cpxxk.ctr_ename = yw_hddz.ycd and yw_hddz_spxx.ywbh = yw_hddz.ywbh and yw_hddz_cpxxk.spzwmc = yw_hddz_spxx.spmc ),yw_hddz.ywbh from yw_hddz)a where a.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    zzs = rs.GetDouble(0);

                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return zzs;
        }
        //数据导入  增值税 p_hddz_sjdr_yggs
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double p_hddz_sjdr_yggs(string ywbh, ref double gs)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select ((zje* isnull(sshl,0) + isnull(kpje,0)*isnull(kphl,0)) *(case when jgfs <> 'CIF' and bxfbj = '1' then 1+isnull(bxfje,0)/100 else 1 end)*isnull(yhgs,zcgs))   from (select 	zje,	sshl = (select max(zjj) from t_currency_sshl where datediff(mm,hlrq,isnull(bgsj,isnull(sjkgsj,yjkgsj))) = 0 and t_currency_sshl.wbbb = yw_hddz.wbbb),	kpje = (select sum(yw_hddz_sdzpgl_cmd.kpje) from yw_hddz_sdzpgl,yw_hddz_sdzpgl_cmd where yw_hddz_sdzpgl.fph = yw_hddz_sdzpgl_cmd.fph and yw_hddz_sdzpgl_cmd.ywbh = yw_hddz.ywbh),	kphl = (select max(zjj) from yw_hddz_sdzpgl,yw_hddz_sdzpgl_cmd,t_currency_sshl where yw_hddz_sdzpgl.fph = yw_hddz_sdzpgl_cmd.fph and yw_hddz_sdzpgl_cmd.ywbh = yw_hddz.ywbh and  datediff(mm,hlrq,isnull(bgsj,isnull(sjkgsj,yjkgsj))) = 0 and  t_currency_sshl.wbbb = yw_hddz_sdzpgl.kpbz),	yw_hddz.jgfs,   	yw_hddz.bxfje,   	yw_hddz.bxfbj,      	yhgs = (select max(yw_hddz_cpxxk_slb.yhgs) from yw_hddz_cpxxk_slb,yw_hddz_cpxxk,yw_hddz_spxx where yw_hddz_cpxxk_slb.cpxxkbm = yw_hddz_cpxxk.cpxxkbm and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),ksrq) <=0 and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),jsrq) >0  and yw_hddz_cpxxk.ctr_ename = yw_hddz.ycd and yw_hddz_spxx.ywbh = yw_hddz.ywbh and yw_hddz_cpxxk.spzwmc = yw_hddz_spxx.spmc ),	zcgs = (select max(yw_hddz_cpxxk_slb.zcgs) from yw_hddz_cpxxk_slb,yw_hddz_cpxxk,yw_hddz_spxx where  yw_hddz_cpxxk_slb.cpxxkbm = yw_hddz_cpxxk.cpxxkbm and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),ksrq) <=0 and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),jsrq) >0  and yw_hddz_cpxxk.ctr_ename = yw_hddz.ycd and yw_hddz_spxx.ywbh = yw_hddz.ywbh and yw_hddz_cpxxk.spzwmc = yw_hddz_spxx.spmc ),	zzsl = (select  max(yw_hddz_cpxxk_slb.zzsl)  from yw_hddz_cpxxk_slb,yw_hddz_cpxxk,yw_hddz_spxx where yw_hddz_cpxxk_slb.cpxxkbm = yw_hddz_cpxxk.cpxxkbm and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),ksrq) <=0 and datediff(dd,isnull(bgsj,isnull(sjkgsj,yjkgsj)),jsrq) >0  and yw_hddz_cpxxk.ctr_ename = yw_hddz.ycd and yw_hddz_spxx.ywbh = yw_hddz.ywbh and yw_hddz_cpxxk.spzwmc = yw_hddz_spxx.spmc ),	ywbh from yw_hddz)a where a.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    gs = rs.GetDouble(0);

                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return gs;
        }

        //数据导入  增值税 GetSjdrZzs
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double GetSjdrZzs(string bgdh, ref double zzs)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select zzs+isnull(zzs_bj,0) from yw_hddz where bgdh=@bgdh");
                cmd.Parameters.Add(new SqlParameter("@bgdh", bgdh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    zzs = rs.GetDouble(0);
                
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return zzs;
        }

        //数据导入  关税 GetSjdrgs
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double GetSjdrgs(string bgdh, ref double gs)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select gs+isnull(gs_bj,0) from yw_hddz where bgdh= @bgdh");
                cmd.Parameters.Add(new SqlParameter("@bgdh", bgdh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    gs = rs.GetDouble(0);

                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return gs;
        }

        //数据导入   滞报金  GetZbj
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double GetZbj(string bgdh, ref double zbj)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select zbj  from yw_hddz where bgdh=@bgdh");
                cmd.Parameters.Add(new SqlParameter("@bgdh", bgdh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    zbj = rs.GetDouble(0);

                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return zbj;
        }

        //数据导入   消费税  GetXfs
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double GetXfs(string bgdh, ref double xfs)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select xfs  from yw_hddz where bgdh=@bgdh");
                cmd.Parameters.Add(new SqlParameter("@bgdh", bgdh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    xfs = rs.GetDouble(0);

                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return xfs;
        }
        

        //数据导入  保证金 GetSjdrbzj
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double GetSjdrbzj(string bgdh, ref double bzj)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(bzj,0)+isnull(bzj_bj,0)  from yw_hddz where bgdh= @bgdh");
                cmd.Parameters.Add(new SqlParameter("@bgdh", bgdh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    bzj = rs.GetDouble(0);

                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return bzj;
        }

        //实际收款管理--数据导入
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Getsjskgl_lkrmc(string dfhm, ref string khbh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select yw_khbm+','+khjc+'-'+pym from yw_wldw where khmc = @dfhm");
                cmd.Parameters.Add(new SqlParameter("@dfhm", dfhm));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    khbh = rs.GetString(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return khbh;
        }
        //数据录入  ywbh        
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetBgdhYwbh(string bgdh, ref string ywbh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select ywbh+','+hth from yw_hddz where bgdh= @bgdh");
                cmd.Parameters.Add(new SqlParameter("@bgdh", bgdh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    ywbh = rs.GetString(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return ywbh;
        }
        ////实际收款管理 -- 录入数据  编码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string ReturnSjskgl_sjdr(ref string skdbh)
        {
            DBHelp dbHelp = new DBHelp();
            try
            {
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。 

                var year = System.DateTime.Now.ToString("yyyyMMdd");
                SqlCommand cmd = dbHelp.GetCommand("select max(right(skdbh,4)) from yw_hddz_sjskd where substring(skdbh,1,8) = '" + year.Substring(0, 8) + "' ");
                object value = cmd.ExecuteScalar();
                if (Convert.IsDBNull(value) || value == null)
                {
                    skdbh = year.Substring(0, 8) + "0001";
                }
                else
                {
                    skdbh =year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                }
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    //sjdrbh
                    //sjdrbh = rs.GetString(0);
                    rs.Close();
                }
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return skdbh;
        }
        //录入数据  编码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string ReturnSjdrSjdrbhString(ref string sjdrbh)
        {
            DBHelp dbHelp = new DBHelp();
            try
            {
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。 

                var year = System.DateTime.Now.ToString("yyyyMMdd");
                SqlCommand cmd = dbHelp.GetCommand("select max(right(sjdrbh,4)) from yw_hddz_sjdr where substring(sjdrbh,5,8) = '" + year.Substring(0, 8) + "'");
                object value = cmd.ExecuteScalar();
                if (Convert.IsDBNull(value) || value == null)
                {
                    sjdrbh = "SJDR" + year.Substring(0, 8) + "0001";
                }
                else
                {
                    sjdrbh = "SJDR" + year.Substring(0, 8) + String.Format("{0:0000}", (long.Parse((string)value) + 1));
                }
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    //sjdrbh
                    //sjdrbh = rs.GetString(0);
                    rs.Close();
                }
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return sjdrbh;
        }

        //取抬头信息BY userid
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string GetBgwtsByMxdbh(string mxdbh, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(a.hxdbh,'') from yw_hxdgl a where a.mxdbh=@mxdbh  and a.hxdzt not in ('注销') ");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {

                    tmpStr = rs.GetString(0);

                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }


        //取抬头信息BY userid
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetYwybyUserid(string userid, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(b.e_no,''),isnull(b.d_no,''),isnull(b.d_name,'') from yw_wldw_webuser a ,t_operator b where a.ywy=b.e_no and a.e_no=@userid  ");
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[2];
                    int i = 0;
                    for (i = 0; i < 2; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }
        //在码头司机任务中打开任务 疏运
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateYshdfygjfksqd(string ywbh, string yshdfygjbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set yshdfygjbh = @yshdfygjbh where ywbh = @ywbh ");
                cmd.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
               


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //在码头司机任务中打开任务 疏运
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int shuyunxhgq(string ywbh, string yw_hddz_sygq, string yw_hddz_sygqpym, string yw_hddz_sygqbm, string yw_hddz_sygqjc, ref int num)
        {              
            DBHelp dbHelp = new DBHelp();            
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set sygq = @yw_hddz_sygq, sygqpym = @yw_hddz_sygqpym , sygqbm = @yw_hddz_sygqbm, sygqjc = @yw_hddz_sygqjc where ywbh = @ywbh ");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@yw_hddz_sygq", yw_hddz_sygq));
                cmd.Parameters.Add(new SqlParameter("@yw_hddz_sygqpym", yw_hddz_sygqpym));
                cmd.Parameters.Add(new SqlParameter("@yw_hddz_sygqbm", yw_hddz_sygqbm));
                cmd.Parameters.Add(new SqlParameter("@yw_hddz_sygqjc", yw_hddz_sygqjc));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //易赉集装箱物流跟踪  免仓期
         [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int yljzxwlgz_mcq(string ywbh, string mxq, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set mxq = @mxq where ywbh = @ywbh");


                cmd.Parameters.Add(new SqlParameter("@mxq", mxq));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
             
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

         //保存市场名称
         //[ajaxpro.ajaxmethod(ajaxpro.httpsessionstaterequirement.readwrite)]
         //public int scjcsave(string scmc, string ywbh, int cxh, ref int num)
         //{
         //    dbhelp dbhelp = new dbhelp();
         //    sqlcommand cmd = null;
         //    var userid = appservice.getuserid();
         //    try
         //    {
         //        cmd = dbhelp.getcommand("update yw_hddz_jzxxx set sc_jc=@scmc where ywbh=@ywbh and cxh=@cxh");


         //        cmd.parameters.add(new sqlparameter("@scmc", scmc));
         //        cmd.parameters.add(new sqlparameter("@ywbh", ywbh));
         //        cmd.parameters.add(new sqlparameter("@cxh", cxh));

         //        if (cmd.executenonquery() > 0)
         //        {
         //            dbhelp.commit();
         //            num = 1;
         //        }
         //        else
         //        {
         //            dbhelp.rollback();
         //        }

         //    }

         //    catch (exception ex)
         //    {
         //        page.clientscript.registerstartupscript(page.gettype(), ex.message, "");

         //    }
         //    finally
         //    {
         //        dbhelp.close();
         //        dbhelp = null;
         //    }
         //    return num;
         //}

        //wldwzjqklist打一次数保存
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Wldwzjqk_Dycs(string khbm, string khmc, double ohsjje, double ohsjzq, double hssjje, double hssjzq, double hdfyje, double hdfyzq, double gjyfje, double gjyfzq,double fh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("insert into yw_wldw_zjqk_Dycs(khbh, khmc, ohsjje, ohsjzq, hssjje, hssjzq, hdfyje, hdfyzq, gjyfje, gjyfzq,fh,dycs,dyrq) values(@khbm,@khmc,@ohsjje,@ohsjzq,@hssjje,@hssjzq,@hdfyje,@hdfyzq,@gjyfje,@gjyfzq,@fh,(select isnull(max(dycs),0)+1 from yw_wldw_zjqk_Dycs where khbh=@khbm),getdate()) ");
                cmd.Parameters.Add(new SqlParameter("@khbm", khbm));
                cmd.Parameters.Add(new SqlParameter("@khmc", khmc));
                cmd.Parameters.Add(new SqlParameter("@ohsjje", ohsjje));
                cmd.Parameters.Add(new SqlParameter("@ohsjzq", ohsjzq));
                cmd.Parameters.Add(new SqlParameter("@hssjje", hssjje));
                cmd.Parameters.Add(new SqlParameter("@hssjzq", hssjzq));
                cmd.Parameters.Add(new SqlParameter("@hdfyje", hdfyje));
                cmd.Parameters.Add(new SqlParameter("@hdfyzq", hdfyzq));
                cmd.Parameters.Add(new SqlParameter("@gjyfje", gjyfje));
                cmd.Parameters.Add(new SqlParameter("@gjyfzq", gjyfzq));
                cmd.Parameters.Add(new SqlParameter("@fh", fh)); 

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //车队工作安排
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int cdgzap(string chepai, string apsj, string type, int bbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("insert into Cdgzrwfp(chepai,apsj,type) values(@chepai,@apsj,@type)");
                cmd.Parameters.Add(new SqlParameter("@chepai", chepai));
                cmd.Parameters.Add(new SqlParameter("@apsj", apsj));
                cmd.Parameters.Add(new SqlParameter("@type", type));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //生成报关单据打印格式
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int GenBgdzAfterReceiveData(string mxdbh, int bbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand(" insert cy_zhuangtai(dtl_no,dzbh) values(@mxdbh,'BG9999')  ");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //同步 将A用户的权限同步给B用户
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string TongbuA_B(string Id_A, string Id_B, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete Sys_UserRoles where UserID= @Id_B");
                delcmd.Parameters.Add(new SqlParameter("@Id_B", Id_B));



                cmd = dbHelp.GetCommand("insert into Sys_UserRoles select RoleID,@Id_B as UserID from Sys_UserRoles where UserID=@Id_A");

                cmd.Parameters.Add(new SqlParameter("@Id_B", Id_B));
                cmd.Parameters.Add(new SqlParameter("@Id_A", Id_A));



                if (delcmd.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int yjlxSfgzesessit(string ywbh,ref int num) {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand(" insert into yw_hddz_yjxx_sfgx(yjlxbm,ywbh,sfgx) values(@yjlxbm,@ywbh,@sfgx)");
               
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
               
                // cmd = dbHelp.GetCommand(" insert cy_zhuangtai(dtl_no,dzbh) values(@mxdbh,'BG9999')  ");
                //cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //预警信息是否确认
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int YjlxSfgx(string yjlxbm, string ywbh, string hth ,string sfgx, ref int num)
        {
             
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand(" insert into yw_hddz_yjxx_sfgx(yjlxbm,ywbh,jzxh,sfgx) values(@yjlxbm,@ywbh,@hth,@sfgx)");
                cmd.Parameters.Add(new SqlParameter("@yjlxbm", yjlxbm));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@hth", hth));
                cmd.Parameters.Add(new SqlParameter("@sfgx", sfgx));
                
                // cmd = dbHelp.GetCommand(" insert cy_zhuangtai(dtl_no,dzbh) values(@mxdbh,'BG9999')  ");
                //cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        
        //预警信息是否--否定
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Yjlxfd(string yjlxbm, string ywbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("delete yw_hddz_yjxx_sfgx where yjlxbm = @yjlxbm and ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@yjlxbm", yjlxbm));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));

                // cmd = dbHelp.GetCommand(" insert cy_zhuangtai(dtl_no,dzbh) values(@mxdbh,'BG9999')  ");
                //cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //往来客户资金情况   删除打印次数
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int deleteDycs(string khbh, int dycs, DateTime dyrq, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("delete yw_wldw_zjqk_Dycs where khbh = @khbh and dycs = @dycs and dyrq = @dyrq");
                cmd.Parameters.Add(new SqlParameter("@khbh", khbh));
                cmd.Parameters.Add(new SqlParameter("@dycs", dycs));
                cmd.Parameters.Add(new SqlParameter("@dyrq", dyrq));

                // cmd = dbHelp.GetCommand(" insert cy_zhuangtai(dtl_no,dzbh) values(@mxdbh,'BG9999')  ");
                //cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成结汇单据打印格式
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int GenJhdzAfterReceiveData(string mxdbh, int bbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand(" insert dz_zhuangtai(dtl_no,dzbh) values(@mxdbh,'JH9999')  ");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));

                ;
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //生成报关商品
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenBgsp(string mxdbh, string hbfs, decimal fobbl, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;

            SqlCommand delcmd = null;
            SqlCommand cmd_sbys = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  cy_baoguan_cmd_hb where mxdbh=@mxdbh");
                delcmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                if (delcmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                }
                //按相同的HS编码  合并
                if (hbfs == "1")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                      "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                     "SELECT @mxdbh,max(bbh), min(cxh),max(hgbm),max(sj_flag),max(spzwmc), max(spywmc),max(spgg),sum(jjsl),max(jjdw),round(sum(wxzj)/sum(jjsl),4),sum(wxzj),sum(jjsl),max(jjdw),sum(wxzj)*@fobbl,max(cpxh),max(bzdw),sum(bzjs),sum(mz),sum(jz),sum(tj),max(spbm)" +
                     "FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh GROUP BY hgbm");
                }
                //按相同的HS编码 + 中英文品名  合并
                if (hbfs == "2")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                  "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                 "SELECT @mxdbh,max(bbh), min(cxh),max(hgbm),max(sj_flag),spzwmc, spywmc,max(spgg),sum(jjsl),max(jjdw),round(sum(wxzj)/sum(jjsl),4),sum(wxzj),sum(jjsl),max(jjdw),sum(wxzj)*@fobbl,max(cpxh),max(bzdw),sum(bzjs),sum(mz),sum(jz),sum(tj),max(spbm)" +
                 "FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh GROUP BY hgbm,spzwmc,spywmc");
                }
                //按相同的HS编码 + 中英文品名 + 计量单位  合并
                if (hbfs == "3")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                  "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                 "SELECT @mxdbh,max(bbh), min(cxh),max(hgbm),max(sj_flag),spzwmc, spywmc,max(spgg),sum(jjsl),jjdw,round(sum(wxzj)/sum(jjsl),4),sum(wxzj),sum(jjsl),max(jjdw),sum(wxzj)*@fobbl,max(cpxh),max(bzdw),sum(bzjs),sum(mz),sum(jz),sum(tj),max(spbm)" +
                 "FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh GROUP BY hgbm,spzwmc,spywmc,jjdw");
                }

                //按相同的HS编码 + 计量单位  合并
                if (hbfs == "4")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                  "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                 "SELECT @mxdbh,max(bbh), min(cxh),max(hgbm),max(sj_flag),max(spzwmc), max(spywmc),max(spgg),sum(jjsl),jjdw,round(sum(wxzj)/sum(jjsl),4),sum(wxzj),sum(jjsl),max(jjdw),sum(wxzj)*@fobbl,max(cpxh),max(bzdw),sum(bzjs),sum(mz),sum(jz),sum(tj),max(spbm)" +
                 "FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh GROUP BY hgbm,jjdw");
                }

                //按相同的HS编码 + 中文品名 合并
                if (hbfs == "5")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                  "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                 "SELECT @mxdbh,max(bbh), min(cxh),max(hgbm),max(sj_flag),spzwmc, max(spywmc),max(spgg),sum(jjsl),max(jjdw),round(sum(wxzj)/sum(jjsl),4),sum(wxzj),sum(jjsl),max(jjdw),sum(wxzj)*@fobbl,max(cpxh),max(bzdw),sum(bzjs),sum(mz),sum(jz),sum(tj),max(spbm)" +
                 "FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh GROUP BY hgbm,spzwmc");
                }

                //按相同的HS编码 + 英文品名 + 包装单位 合并
                if (hbfs == "6")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                  "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                 "SELECT @mxdbh,max(bbh), min(cxh),max(hgbm),max(sj_flag),max(spzwmc), spywmc,max(spgg),sum(jjsl),max(jjdw),round(sum(wxzj)/sum(jjsl),4),sum(wxzj),sum(jjsl),max(jjdw),sum(wxzj)*@fobbl,max(cpxh),bzdw,sum(bzjs),sum(mz),sum(jz),sum(tj),max(spbm)" +
                 "FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh GROUP BY hgbm,spywmc,bzdw");
                }

                //按相同的HS编码 + 中英文品名+规格  合并
                if (hbfs == "7")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                  "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                 "SELECT @mxdbh,max(bbh), min(cxh),max(hgbm),max(sj_flag),spzwmc, spywmc,spgg,sum(jjsl),max(jjdw),round(sum(wxzj)/sum(jjsl),4),sum(wxzj),sum(jjsl),max(jjdw),sum(wxzj)*@fobbl,max(cpxh),max(bzdw),sum(bzjs),sum(mz),sum(jz),sum(tj),max(spbm)" +
                 "FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh GROUP BY hgbm,spzwmc,spywmc,spgg");
                }

                //不要合并
                if (hbfs == "8")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO cy_baoguan_cmd_hb" +
                  "( mxdbh,bbh,cxh,hgbm,sj_flag,spzwmc,spywmc,spgg,jjsl,jjdw,wxdj,wxzj ,spsl,sldw,wxzj_fob,cpxh,bzdw,bzjs,mz,jz,tj,spbm)" +
                 "SELECT @mxdbh,bbh, cxh,hgbm,sj_flag,spzwmc, spywmc,spgg,jjsl,jjdw,wxdj,wxzj,jjsl,jjdw,wxzj*@fobbl,cpxh,bzdw,bzjs,mz,jz,tj,spbm" +
                 " FROM cy_baoguan_cmd  WHERE mxdbh=@mxdbh ");
                }
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@fobbl", fobbl));
                ;
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                }


                //cmd_hgdw = dbHelp.GetCommand("update cy_baoguan_cmd_hb set jjsl = (case when unit_name='千克' then jz else jjsl end) ,jjdw = unit_name , wxdj = (case when unit_name='千克' then round(wxzj/jz,2) else wxdj end ) from cy_baoguan_cmd_hb,t_hgsh,t_hgunit where cy_baoguan_cmd_hb.hgbm =  t_hgsh.hs_code and t_hgsh.jldw = t_hgunit.unit_code  and mxdbh = @mxdbh");
                //cmd_hgdw.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));

                //if (cmd_hgdw.ExecuteNonQuery() >= 0)
                //{
                //    dbHelp.Commit();
                //}
                //else
                //{
                //    dbHelp.Rollback();
                //    return "0";
                //}


                cmd_sbys = dbHelp.GetCommand("update cy_baoguan_cmd_hb set spywmc_bg =yw_commodity.spywmc_bg from cy_baoguan_cmd_hb,yw_commodity where cy_baoguan_cmd_hb.spbm =  yw_commodity.yw_spbm and mxdbh = @mxdbh");
                cmd_sbys.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));

                if (cmd_sbys.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                }


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //判断角色是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckRole(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM Sys_roles Where id=@id  ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //判断用户是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckUser(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM t_operator Where e_no=@id  ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //判断明细单是否填了报关行
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckMxdBggs(string mxdbh, int bbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_mxd_tyzss Where mxdbh=@mxdbh and bbh=@bbh and bghkhbm is not null  ");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@bbh", bbh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //发布消息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int F_bbs_fb(string fbr, string title, string detail, string jsr, string lx, ref int num)
        {
            var ls_fbnyr = DateTime.Now.ToShortDateString();
            var fbnyr = Convert.ToDateTime(ls_fbnyr).ToString("yyyyMMdd", System.Globalization.DateTimeFormatInfo.InvariantInfo);
            int id = 0;
            string ls_id = "";
            DBHelp dbHelp = new DBHelp();
            dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(max(CAST(substring(id,1,4) as int)),0) FROM t_bbs WHERE t_bbs.fbnyr = @fbnyr AND fbr = @fbr;");
                cmd.Parameters.Add(new SqlParameter("@fbr", fbr));
                cmd.Parameters.Add(new SqlParameter("@fbnyr", fbnyr));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    id = rs.GetInt32(0);
                    rs.Close();
                }

            }


            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }


            if (id == 0)
            {
                ls_id = "0001" + fbr;
            }
            else
            {
                id = id + 1;
                ls_id = String.Format("{0:0000}", (id)) + fbr;
            }

            string bm = "";
            dbHelp = new DBHelp();
            SqlCommand cmd3 = null;
            try
            {
                cmd3 = dbHelp.GetCommand("SELECT isnull(d_no,'') FROM t_operator  where e_no = @fbr;");
                cmd3.Parameters.Add(new SqlParameter("@fbr", fbr));
                SqlDataReader rs2 = cmd3.ExecuteReader();
                if (rs2.Read())
                {
                    bm = rs2.GetString(0);
                    rs2.Close();
                }

            }


            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            dbHelp = new DBHelp();
            SqlCommand cmd4 = null;
            SqlCommand cmd2 = null;
            try
            {
                cmd4 = dbHelp.GetCommand("INSERT INTO t_bbs( fbrq,fbr,topic,id,department,flag,detail,fbnyr,hsz,lx)" +
                    " VALUES ( getdate(), @fbr,   @title,   @id,   @bm,   '发送到人员',  @fbnr,   @fbnyr,   'N' ,  @lx ); ");
                cmd2 = dbHelp.GetCommand("INSERT INTO t_bbs_state( fbnyr,id,jsry,state,flag)" +
                    " VALUES ( @fbnyr, @id,@jsry,'0',  '发送到人员' ); ");
                cmd4.Parameters.Add(new SqlParameter("@fbr", fbr));
                cmd4.Parameters.Add(new SqlParameter("@title", title));
                cmd4.Parameters.Add(new SqlParameter("@id", ls_id));
                cmd4.Parameters.Add(new SqlParameter("@bm", bm));
                cmd4.Parameters.Add(new SqlParameter("@fbnr", detail));
                cmd4.Parameters.Add(new SqlParameter("@fbnyr", fbnyr));
                cmd4.Parameters.Add(new SqlParameter("@lx", lx));

                cmd2.Parameters.Add(new SqlParameter("@fbnyr", fbnyr));
                cmd2.Parameters.Add(new SqlParameter("@id", ls_id));
                cmd2.Parameters.Add(new SqlParameter("@jsry", jsr));

                if (cmd4.ExecuteNonQuery() > 0)
                {
                    if (cmd2.ExecuteNonQuery() > 0)
                    {
                        dbHelp.Commit();
                        num = 1;
                    }
                    else
                    {
                        dbHelp.Rollback();
                        num = 0;
                    }

                }
                else
                {
                    dbHelp.Rollback();
                    num = 0;
                }



            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;





        }


        //获取报关委托书配单员
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public static string[] GetLdr(string tt_no, string bm, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand(" select bmshry,bgwts_ldr  from yw_bgwts_opset where tt_no = @tt_no and d_no = @bm ; ");
                cmd.Parameters.Add(new SqlParameter("@tt_no", tt_no));
                cmd.Parameters.Add(new SqlParameter("@bm", bm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[2];
                    int i = 0;
                    for (i = 0; i < 2; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return tmpStr;
        }

        //更新托单的报关公司
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateTyzssBggs(string mxdbh, string bggsbm, string bggsmc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_mxd_tyzss set bghkhbm=@bggsbm,bghmc=@bggsmc Where mxdbh=@mxdbh   ");


                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@bggsbm", bggsbm));
                cmd.Parameters.Add(new SqlParameter("@bggsmc", bggsmc));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新托单的提单号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateTyzssTdh(string mxdbh, string tdh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_mxd_tyzss set tdh=@tdh Where mxdbh=@mxdbh   ");


                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@tdh", tdh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新托单的船名
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateTyzssCmhc(string mxdbh, string cmhc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_mxd_tyzss set cmhc=@cmhc Where mxdbh=@mxdbh   ");


                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@cmhc", cmhc));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断商品是否使用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckSp(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_mxd_cmd Where spbm=@id  ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断客户是否使用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckKh(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_mxd Where khbm=@id  ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断货代公司是否使用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckHdgs(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_mxd_tyzss ,yw_mxd Where hdgs=@id and yw_mxd_tyzss.mxdbh = yw_mxd.mxdbh and yw_mxd_tyzss.bbh = yw_mxd.bbh and yw_mxd.bb_flag='Y'  ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断报关公司是否使用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckBggs(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_mxd_tyzss,yw_mxd Where yw_mxd_tyzss.bghkhbm=@id and yw_mxd_tyzss.mxdbh = yw_mxd.mxdbh and yw_mxd_tyzss.bbh = yw_mxd.bbh and yw_mxd.bb_flag='Y' ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新报关费用付款方
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateBgdjFy(string mxdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update cy_baoguan set tj_flag='被委托方', ht_state = '未回填' Where mxdbh=@mxdbh   ");


                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成拼音码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetPYString(string str)
        {
            string tempStr = "";
            foreach (char c in str)
            {
                if ((int)c >= 33 && (int)c <= 126)
                {//字母和符号原样保留                   
                    tempStr += c.ToString();
                }
                else      //累加拼音声母           
                {
                    tempStr += GetPYChar(c.ToString());
                }
            }
            return tempStr;
        }
        /// <summary>       
        /// /// 取单个字符的拼音声母       
        /// </summary>        
        /// <param name="c">要转换的单个汉字</param>       
        /// /// <returns>拼音声母</returns> 
        public string GetPYChar(string c)
        {
            byte[] array = new byte[2];
            array = System.Text.Encoding.Default.GetBytes(c);
            int i = (short)(array[0] - '\0') * 256 + ((short)(array[1] - '\0'));
            if (i < 0xB0A1) return "*";
            if (i < 0xB0C5) return "a";
            if (i < 0xB2C1) return "b";
            if (i < 0xB4EE) return "c";
            if (i < 0xB6EA) return "d";
            if (i < 0xB7A2) return "e";
            if (i < 0xB8C1) return "f";
            if (i < 0xB9FE) return "g";
            if (i < 0xBBF7) return "h";
            if (i < 0xBFA6) return "j";
            if (i < 0xC0AC) return "k";
            if (i < 0xC2E8) return "l";
            if (i < 0xC4C3) return "m";
            if (i < 0xC5B6) return "n";
            if (i < 0xC5BE) return "o";
            if (i < 0xC6DA) return "p";
            if (i < 0xC8BB) return "q";
            if (i < 0xC8F6) return "r";
            if (i < 0xCBFA) return "s";
            if (i < 0xCDDA) return "t";
            if (i < 0xCEF4) return "w";
            if (i < 0xD1B9) return "x";
            if (i < 0xD4D1) return "y";
            if (i < 0xD7FA) return "z";
            return "*";
        }

        //判断报关10位代码是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckBggs(string id, string khbm, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_wldw Where sh=@id and yw_khbm<>@khbm");
                cmd.Parameters.Add(new SqlParameter("@id", id));
                cmd.Parameters.Add(new SqlParameter("@khbm", khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断是否生成报关商品
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckBgsp(string mxdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM cy_baoguan_cmd_hb Where mxdbh=@id  ");
                cmd.Parameters.Add(new SqlParameter("@id", mxdbh));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成EXCEL格式
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ShowPrintView(string strReportName, string tt_no, string strParameters, ref string strFileName)
        {
            lock (this)
            {
                string error = "";
                try
                {
                    List<string> lstParameters = new List<string>();

                    var paras = strParameters.Split(',');
                    foreach (var item in paras)
                    {
                        lstParameters.Add(item);
                    }
                    //20151102
                    //ExcelPrintHelper excelhelper = new ExcelPrintHelper();
                    //excelhelper.ShowPrintView(strReportName, tt_no, lstParameters, ref strFileName, ref error);
                    ////Page.ClientScript.RegisterStartupScript(Page.GetType(), "AA",error);
                    return strFileName;
                }
                catch (Exception ex)
                {
                    Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, error);
                    //string strModuleExcel = AppDomain.CurrentDomain.BaseDirectory + "ErrorS.txt";

                    //FileStream fs_stream = new FileStream(strModuleExcel, FileMode.CreateNew);
                    //BinaryWriter writefile = new BinaryWriter(fs_stream);
                    //writefile.Write(HttpUtility.UrlEncode(error, System.Text.Encoding.UTF32));
                    //writefile.Close();

                }
                finally
                {

                }
                return strFileName;
            }
        }
        //下载EXCEL到本地
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void DownLoadExcel(string strFileName)
        {
            //ExcelPrintHelper excelhelper = new ExcelPrintHelper();
            //excelhelper.DownLoadExcel(strFileName);
        }

        //取EXCEL打印的相关参数
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetExcelParm(string dzbh, string tt_no, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(Parameter,''),isnull(SQLText,''),isnull(Path,'') from sheetprint where djbh=@dzbh and ttno=@ttno ");
                cmd.Parameters.Add(new SqlParameter("@dzbh", dzbh));
                cmd.Parameters.Add(new SqlParameter("@ttno", tt_no));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[3];
                    int i = 0;
                    for (i = 0; i < 3; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //获取当前路径
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetCurrentDirectory(ref string CurrentDirectory)
        {
            string strFilePath = AppDomain.CurrentDomain.BaseDirectory;
            //if (strFilePath.EndsWith("\\"))
            //{
            //    strFilePath = strFilePath + "Images\\";
            //}
            //else
            //{

            //    strFilePath = strFilePath + "\\Images\\";
            //}

            return strFilePath;

        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void CreateFold()
        {
            //string strFileName = "报关专用章01.jpg";
            //string CreatePath = Server.MapPath(".//upload//") + strFileName.ToString();
            //string CreatePath ="c:\\cbnb\\" + strFileName.ToString();
            string CreatePath = "c:\\cbnb";
            if (!Directory.Exists(CreatePath))
            {
                Directory.CreateDirectory(CreatePath);
            }

            //string strFilePath = AppDomain.CurrentDomain.BaseDirectory;
            //if (strFilePath.EndsWith("\\"))
            //{
            //    strFilePath = strFilePath + "Images\\报关专用章01.jpg";
            //}
            //else
            //{

            //    strFilePath = strFilePath + "\\Images\\报关专用章01.jpg";
            //}
            //if (File.Exists(strFilePath))
            //{
            //    System.IO.FileInfo file = new System.IO.FileInfo(strFilePath);
            //    //Response.Charset = "GB2312";
            //    //Response.ContentEncoding = System.Text.Encoding.GetEncoding("UTF-8");
            //    Response.AddHeader("Content-length", file.Length.ToString());
            //    Response.ContentType = "appliction/octet-stream";
            //    Response.WriteFile(file.FullName);
            //    Response.End();
            //}



            //if (File.Exists(strFilePath))
            //{
            //    FileInfo file = new FileInfo(strFilePath);
            //    Response.ContentEncoding = System.Text.Encoding.GetEncoding("UTF-8"); //解决中文乱码   
            //    Response.AddHeader("Content-Disposition", "attachment; filename=" + strFilePath.ToString().Trim()); //解决中文文件名乱码       
            //    Response.AddHeader("Content-length", file.Length.ToString());
            //    Response.ContentType = "appliction/octet-stream";
            //    Response.WriteFile(file.FullName);
            //    Response.End();
            //}
        }

        //记录打印使用情况
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void RecordPrn(string mxdbh, string lx)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            var userip = AppService.GetIp();
            try
            {
                cmd = dbHelp.GetCommand("insert into sys_prn_record (userid,djlx,fph,ip,rq) values(@userid,@lx,@fph,@userip,getdate())   ");


                cmd.Parameters.Add(new SqlParameter("@fph", mxdbh));
                cmd.Parameters.Add(new SqlParameter("@lx", lx));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@userip", userip));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

        }

        //删除数据窗口的自定义记录
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void DelColRecord(string winname, string dwname)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();

            try
            {
                cmd = dbHelp.GetCommand(" delete from ExtPB_ColumnInfo where userid = @userid and Window = @winname and dwObject = @dwname   ");


                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@winname", winname));
                cmd.Parameters.Add(new SqlParameter("@dwname", dwname));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

        }



        //更新自定义记录
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void InsertColRecord(string winname, string dwname,string style)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();

            try
            {
                cmd = dbHelp.GetCommand("delete from ExtPB_ColumnInfo_Lsjl where  userid = @userid and Window = @winname and dwObject = @dwname and gsmc = @style; INSERT INTO ExtPB_ColumnInfo_Lsjl(UserID,Window,dwObject, Name,ColIndex,X,Width, Visible,printflag, PageSummary,gsmc ) SELECT UserID,Window,dwObject, Name,ColIndex,X,Width, Visible,printflag, PageSummary,@style FROM  ExtPB_ColumnInfo where userid = @userid and Window = @winname and dwObject = @dwname");


                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@winname", winname));
                cmd.Parameters.Add(new SqlParameter("@dwname", dwname));
                cmd.Parameters.Add(new SqlParameter("@style", style));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

        }

        //更新自定义记录
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void InsertColRecordLsjl(string winname, string dwname, string style)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();

            try
            {
                cmd = dbHelp.GetCommand(" INSERT INTO ExtPB_ColumnInfo(UserID,Window,dwObject, Name,ColIndex,X,Width, Visible,printflag, PageSummary ) SELECT UserID,Window,dwObject, Name,ColIndex,X,Width, Visible,printflag, PageSummary  FROM  ExtPB_ColumnInfo_Lsjl where userid = @userid and Window = @winname and dwObject = @dwname and gsmc = @style");


                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@winname", winname));
                cmd.Parameters.Add(new SqlParameter("@dwname", dwname));
                cmd.Parameters.Add(new SqlParameter("@style", style));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

        }


        // 电子口岸接口
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetXml(string url, string uid, ref string xml)
        {

            //var timestamp = Context.Timestamp.ToString();
            //string sign = WS.MD5("hd01"+"750a8953a27a4d0aa6b4a70576574ead"+timestamp);
            ////method = "getVisualLogistics";
            //string format ="xml";
            //string uid="hd01";
            //string strFile = AppDomain.CurrentDomain.BaseDirectory;
            //string url = "";
            //if (method == "getVisualLogistics")
            //{

            //    strFile = strFile + "XML\\WL\\" + billNo + ".xml";
            //    url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&billNo=" + billNo + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign;
            //}
            //if (method == "cxsoft.cargoinspect")
            //{
            //    if (billNo != null&&billNo !="")
            //    {
            //        strFile = strFile + "XML\\HGCY\\" + billNo + ".xml";
            //        url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&billNo=" + billNo + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign;
            //    }
            //    else if (entryId != null)
            //    {
            //        strFile = strFile + "XML\\HGCY\\" + entryId + ".xml";
            //        url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&entryId=" + entryId + "&user_id=" + uid + "&timestamp=" + timestamp + "&sign=" + sign;
            //    }
            //}    

            //WS.DownLoadAndCreateXML(url, strFile);
            string strFile = AppDomain.CurrentDomain.BaseDirectory;

            //path = strFile + path;
            //dw_1.ImportFile(path,Sybase.DataWindow.FileSaveAsType.Xml);
            //File.Delete(path);

            var timestamp = Context.Timestamp.ToString("yyyy-MM-dd HH:mm:ss");
            string sign = WS.MD5(uid + "750a8953a27a4d0aa6b4a70576574ead" + timestamp);
            //取随机数
            Random rnd = new Random();
            int n = rnd.Next(10000, 99999);
            //method = "getVisualLogistics";

            //WriteTextLog(timestamp);

            url = url + "&timestamp=" + timestamp + "&sign=" + sign + "&t=" + n;


            WriteTextLog(url);
            var Stream = WS.WriteCardToStream(url);
            //STREAM转换为string
            StreamReader reader = new StreamReader(Stream);
            string text = reader.ReadToEnd();
            return text;

        }

        /// <summary>   
        /// 写入日志到文本文件   
        /// </summary>   
        /// <param name="action">动作</param>   
        /// <param name="strMessage">日志内容</param>   
        /// <param name="time">时间</param>   
        public static void WriteTextLog(string timestamp)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory;
            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            string fileFullPath = path + "\\XML\\System.txt";
            StringBuilder str = new StringBuilder();
            str.Append(timestamp);

            StreamWriter sw;
            if (!File.Exists(fileFullPath))
            {
                sw = File.CreateText(fileFullPath);
            }
            else
            {
                sw = File.AppendText(fileFullPath);
            }
            sw.WriteLine(str.ToString());
            sw.Close();
        }

        //判断该工厂当天是否申请过付款
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckGcFk(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_yfkd Where skdwbm=@id  and datediff(dd,sqrq,getdate())=0 ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断该客户当天是否申请过费用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckGcFy(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_fysqd Where skdwbm=@id  and datediff(dd,sqrq,getdate())=0 ");
                cmd.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }


            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //取船名BY mxdbh
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string GetCmhcbymxdbh(string mxdbh, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select max(cmhc) from yw_mxd_tyzss where mxdbh=@mxdbh;");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tmpStr = rs.GetString(0);
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //取提单号BY tdh
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string GetTdhbymxdbh(string mxdbh, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select max(tdh) from yw_mxd_tyzss where mxdbh=@mxdbh;");
                cmd.Parameters.Add(new SqlParameter("@mxdbh", mxdbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tmpStr = rs.GetString(0);
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //取中文计量单位
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string GetJldwZwbyJldwyw(string jldw, ref string tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select max(cname) from t_jldw where ename=@jldw;");
                cmd.Parameters.Add(new SqlParameter("@jldw", jldw));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    tmpStr = rs.GetString(0);
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //更改海运报关提交状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Gghybgtjzt(string sftj, string ywbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set sftj  = @sftj where ywbh = @ywbh");


                cmd.Parameters.Add(new SqlParameter("@sftj", sftj));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));


                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        


        //更新往来单位银行账号信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateGcyhzh(string khbm, string khyh, string yhzh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_wldw set khyh=@khyh, yhzh=@yhzh Where yw_khbm=@khbm and (khyh is null or yhzh is null or len(yhzh)=0 or len(khyh)=0 )  ");


                cmd.Parameters.Add(new SqlParameter("@khbm", khbm));
                cmd.Parameters.Add(new SqlParameter("@khyh", khyh));
                cmd.Parameters.Add(new SqlParameter("@yhzh", yhzh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断客户名称是否重覆
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckKhmc(string yw_khbm, string khmc, string khywmc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                if (!string.IsNullOrEmpty(khmc) && string.IsNullOrEmpty(khywmc))
                {
                    cmd = dbHelp.GetCommand("select count(*) from yw_wldw Where (isnull(replace(replace(replace(khmc,' ',''),',',''),'.',''),'') = isnull(replace(replace(replace(@khmc,' ',''),',',''),'.',''),'')) and isnull(yw_khbm,'') <> isnull(@id,'')");
                    cmd.Parameters.Add(new SqlParameter("@id", yw_khbm));
                    cmd.Parameters.Add(new SqlParameter("@khmc", khmc));
                }

                else if (!string.IsNullOrEmpty(khywmc) && string.IsNullOrEmpty(khmc))
                {
                    cmd = dbHelp.GetCommand("select count(*) from yw_wldw Where (isnull(replace(replace(replace(khmc_yw,' ',''),',',''),'.',''),'') = isnull(replace(replace(replace(@khywmc,' ',''),',',''),'.',''),'')) and isnull(yw_khbm,'') <> isnull(@id,'') ");
                    cmd.Parameters.Add(new SqlParameter("@id", yw_khbm));
                    cmd.Parameters.Add(new SqlParameter("@khywmc", khywmc));
                }

                else if (!string.IsNullOrEmpty(khmc) && !string.IsNullOrEmpty(khywmc))
                {
                    cmd = dbHelp.GetCommand("select count(*) from yw_wldw Where (isnull(replace(replace(replace(khmc,' ',''),',',''),'.',''),'') = isnull(replace(replace(replace(@khmc,' ',''),',',''),'.',''),'') or isnull(replace(replace(replace(khmc_yw,' ',''),',',''),'.',''),'') = isnull(replace(replace(replace(@khywmc,' ',''),',',''),'.',''),'')) and isnull(yw_khbm,'') <> isnull(@id,'') ");
                    cmd.Parameters.Add(new SqlParameter("@id", yw_khbm));
                    cmd.Parameters.Add(new SqlParameter("@khmc", khmc));
                    cmd.Parameters.Add(new SqlParameter("@khywmc", khywmc));
                }

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //计算相应费用已经付过几次
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadFycs(string ywbh, string fybm, string sqdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_cmd Where isnull(ywbh,'') = isnull(@ywbh,'')  and  isnull(fybm,'') = isnull(@fybm,'') and isnull(sqdbh,'') <> isnull(@sqdbh,'') ");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@fybm", fybm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //计算相应集装箱费用已经付过几次
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadJzxFycs(string ywbh, string jzxh, string fybm, string sqdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_cmd Where isnull(ywbh,'') = isnull(@ywbh,'') and  isnull(jzxh,'') = isnull(@jzxh,'') and  isnull(fybm,'') = isnull(@fybm,'') and isnull(sqdbh,'') <> isnull(@sqdbh,'') ");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                cmd.Parameters.Add(new SqlParameter("@jzxh", jzxh));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@fybm", fybm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //计算相应包坏箱集装箱费用已经付过几次
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadJzxBhxFycs(string ywbh, string jzxh, string fybm, string sqdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_cmd Where isnull(ywbh,'') = isnull(@ywbh,'') and  isnull(jzxh,'') = isnull(@jzxh,'') and  isnull(fybm,'') = isnull(@fybm,'') and isnull(sqdbh,'') <> isnull(@sqdbh,'') and isnull(yffybz,'N') = 'Y' ");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                cmd.Parameters.Add(new SqlParameter("@jzxh", jzxh));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@fybm", fybm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //计算相应空运费用已经付过几次
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadKyFycs(string ywbh, int tpxx, string zhlx, string fybm, string sqdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_cmd Where isnull(ywbh,'') = isnull(@ywbh,'') and  isnull(tpxx,0) = isnull(@tpxx,0) and isnull(zhlx,'') = isnull(@zhlx,'') and  isnull(fybm,'') = isnull(@fybm,'') and isnull(sqdbh,'') <> isnull(@sqdbh,'') ");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                cmd.Parameters.Add(new SqlParameter("@tpxx", tpxx));
                cmd.Parameters.Add(new SqlParameter("@zhlx", zhlx));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@fybm", fybm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }
        //系统需求--》提交人员确认
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int xtxqTjryqr(DateTime date1, string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update ywxt_taskList set task_subuser = @userid, task_subuser_confirm = 'Y',task_subUser_confirmDate = @task_subUser_confirmDate where id = @id ");
                //cmd.Parameters.Add(new SqlParameter("@task_subuser_confirm", 'Y'));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@task_subUser_confirmDate", date1));
                cmd.Parameters.Add(new SqlParameter("@id", id));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //更新往来单位银行账号信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int HddzListSdOcrwjsb(string sfcs,string ywbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ocrwjsb set sfcs = @sfcs where wjlx = '正本税单' and ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@sfcs", sfcs));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }



        //系统需求--》提交
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int xtxqTj(string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update ywxt_taskList set task_subUser = @userid,task_courseState = '新制' where id = @id ");
                //cmd.Parameters.Add(new SqlParameter("@task_subuser_confirm", 'Y'));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@id", id));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //系统需求--》开发
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int xtxqKF(String task_coursestate, string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update ywxt_taskList set task_coursestate = @task_coursestate where id = @id ");
                //cmd.Parameters.Add(new SqlParameter("@task_subuser_confirm", 'Y'));
                cmd.Parameters.Add(new SqlParameter("@task_coursestate", task_coursestate));
                cmd.Parameters.Add(new SqlParameter("@id", id));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //系统需求--》录入人员确认
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int xtxqLrryqr(DateTime date1, string id, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update ywxt_taskList set task_inputUser_Confirm = 'Y',task_inputUser_ConfirmDate = @task_inputUser_ConfirmDate where id = @id ");
                //cmd.Parameters.Add(new SqlParameter("@task_subuser_confirm", 'Y'));
                cmd.Parameters.Add(new SqlParameter("@task_inputUser_ConfirmDate", date1));
                cmd.Parameters.Add(new SqlParameter("@id", id));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //计算付款对象已经付过几次
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadZfdxFycs(string zfdxbm, string fybm, string sqdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_cmd Where isnull(zfdxbm,'') = isnull(@zfdxbm,'')  and  isnull(fybm,'') = isnull(@fybm,'') and isnull(sqdbh,'') <> isnull(@sqdbh,'') ");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                cmd.Parameters.Add(new SqlParameter("@zfdxbm", zfdxbm));
                cmd.Parameters.Add(new SqlParameter("@fybm", fybm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //计算相应空运车辆费用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadKyclje(string cllx, string sflc, ref int clje)
        {

            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                if (sflc == "Y")
                {
                    cmd = dbHelp.GetCommand("select max(lccsfje) from t_cllxwh Where isnull(cllxwh,'') = isnull(@cllx,'')");

                }
                else
                {
                    cmd = dbHelp.GetCommand("select max(flccsfje) from t_cllxwh Where isnull(cllxwh,'') = isnull(@cllx,'')");
                }
                cmd.Parameters.Add(new SqlParameter("@cllx", cllx));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    clje = rs.GetInt32(0);
                    rs.Close();
                }

            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return clje;

        }


        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdJzxxx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));



                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));


                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                 "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs,jdrbm,jdrjc,jdrmc,jdrpym) " +
                 "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                " getdate() cfrq,yw_hddz_jzxxx.cxh,t_fylx.skfs,yw_hddz_fksqd_cmd.jdrbm,yw_hddz_fksqd_cmd.jdrjc,yw_hddz_fksqd_cmd.jdrmc,yw_hddz_fksqd_cmd.jdrpym " +
                 " FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh     and (( yw_hddz_fksqd_cmd.jzxh = yw_hddz_jzxxx.jzxh  and  len(yw_hddz_fksqd_cmd.jzxh ) >0)  or ( yw_hddz_fksqd_cmd.tpxx = yw_hddz_jzxxx.tpxx  and  yw_hddz_fksqd_cmd.zhlx = yw_hddz_jzxxx.zhlx  and len(yw_hddz_fksqd_cmd.zhlx ) >0)  or  len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 )  and " +
                 "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");

                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));



                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交'  from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                int num1 = delcmd.ExecuteNonQuery();
                int num2 = updatecmdmx.ExecuteNonQuery();
                int num3 = cmd.ExecuteNonQuery();
                int num4 = updatecmd.ExecuteNonQuery();

                if (delcmd.ExecuteNonQuery() >= 0 && updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //货代费用撤销
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdHdf(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
               
                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //货代其他明细费用撤销
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string HdqtmxfyCx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            SqlCommand deletecmd = null;
            try
            {

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '新制' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                deletecmd = dbHelp.GetCommand("delete from yw_hddz_fksqd_jzxxx where yw_hddz_fksqd_jzxxx.sqdbh=@sqdbh");
                deletecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                if (updatecmd.ExecuteNonQuery() >= 0 && deletecmd.ExecuteNonQuery() >= 0)
                    {
                        dbHelp.Commit();
                        num = "1";
                    }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //资金审批撤销
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Zjspcx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '新制' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdJzxxxQtmx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                 "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                 "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                " getdate(),yw_hddz_jzxxx.cxh,t_fylx.skfs " +
                 "FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh  and  yw_hddz_fksqd_cmd.hddz_cxh = yw_hddz_jzxxx.cxh  and (( yw_hddz_fksqd_cmd.jzxh = yw_hddz_jzxxx.jzxh  and  len(yw_hddz_fksqd_cmd.jzxh ) >0)  or ( yw_hddz_fksqd_cmd.tpxx = yw_hddz_jzxxx.tpxx  and  yw_hddz_fksqd_cmd.zhlx = yw_hddz_jzxxx.zhlx  and len(yw_hddz_fksqd_cmd.zhlx ) >0)  or  len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 )  and " +
                 "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");

                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                var a = delcmd.ExecuteNonQuery();
                var b = updatecmdmx.ExecuteNonQuery();
                var c = cmd.ExecuteNonQuery();
                var d = updatecmd.ExecuteNonQuery();
                if (delcmd.ExecuteNonQuery() >= 0 && updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() >= 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqd(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));


                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));


                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                 "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                 "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                " getdate(),yw_hddz_jzxxx.cxh,t_fylx.skfs " +
                 "FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh and " +
                 "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");


                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));


                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (delcmd.ExecuteNonQuery() >= 0 && updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成集装箱车队付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdCdJzxxx(string yfkdbh, Int32 cxh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where yfkdbh = @yfkdbh and cxh_hddz = @cxh");
                delcmd.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));
                delcmd.Parameters.Add(new SqlParameter("@cxh", cxh));


                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where yfkdbh=@yfkdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));


                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                   "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq,cxh_hddz,skfs ) " +
                   "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                  "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                  "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                  " getdate() ,yw_hddz_jzxxx.cxh,t_fylx.skfs " +
                  "FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                  "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh  and (( yw_hddz_fksqd_cmd.jzxh = yw_hddz_jzxxx.jzxh  and  len(yw_hddz_fksqd_cmd.jzxh ) >0)  or len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 )  and " +
                   " yw_hddz_fksqd_cmd.yfkdbh = @yfkdbh ");
                cmd.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));


                updatecmd = dbHelp.GetCommand("update yw_hddz_jzxxx set state  = '提交',tjrq = getdate() from  yw_hddz_jzxxx where yfkdbh=@yfkdbh and cxh = @cxh");
                updatecmd.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));
                updatecmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                if (delcmd.ExecuteNonQuery() >= 0 && updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdScJzxxx(string yfkdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@yfkdbh ");
                delcmd.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));


                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where yfkdbh=@yfkdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));


                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx" +
                   "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq,cxh_hddz,skfs )" +
                   "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                  "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc," +
                  "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end ," +
                  " getdate(),yw_hddz_jzxxx.cxh,t_fylx.skfs " +
                  "FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                  "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh  and ((yw_hddz_fksqd_cmd.tpxx = yw_hddz_jzxxx.tpxx  and yw_hddz_fksqd_cmd.hddz_cxh = yw_hddz_jzxxx.cxh and yw_hddz_fksqd_cmd.zhlx = yw_hddz_jzxxx.zhlx  and  len(yw_hddz_fksqd_cmd.zhlx ) >0)  or  " +
                  " ( yw_hddz_fksqd_cmd.jzxh = yw_hddz_jzxxx.jzxh  and  len(yw_hddz_fksqd_cmd.jzxh ) >0)  or len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 )  and " +
                  "yw_hddz_fksqd_cmd.yfkdbh = @yfkdbh");

                cmd.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));

                updatecmd = dbHelp.GetCommand("update yw_hddz_yfksqd set state  = '提交' from  yw_hddz_yfksqd where yfkdbh=@yfkdbh");
                updatecmd.Parameters.Add(new SqlParameter("@yfkdbh", yfkdbh));
                if (delcmd.ExecuteNonQuery() >= 0 && updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };

            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成空运付款明细信息       
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdKyJzxxx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                   "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                   "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                  "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                  "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                  " getdate(),yw_hddz_jzxxx.cxh,t_fylx.skfs " +
                   "FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                  "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh  and  yw_hddz_fksqd_cmd.tpxx = yw_hddz_jzxxx.tpxx  and yw_hddz_fksqd_cmd.zhlx = yw_hddz_jzxxx.zhlx  and " +
                   "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");

                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (delcmd.ExecuteNonQuery() >= 0 && updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //生成空运对应到提单付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdKytdJzxxx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                   "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                   "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                  "null,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                  "je =  yw_hddz_fksqd_cmd.je , " +
                  " getdate(),yw_hddz_fksqd_cmd.hddz_cxh,t_fylx.skfs " +
                   "FROM yw_hddz_fksqd_cmd ,t_fylx " +
                  "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm   and " +
                   "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");

                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (delcmd.ExecuteNonQuery() >= 0 && updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdFywfyJzxxx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            try
            {

                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));


                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (updatecmdmx.ExecuteNonQuery() >= 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新实际收款单提交状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenSJskdFy(string skdbh, string zhuangtai, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            //SqlCommand updatecmdmx = null;
            try
            {



                updatecmd = dbHelp.GetCommand("update yw_hddz_sjskd set state  = @zhuangtai from  yw_hddz_sjskd where skdbh=@skdbh");
                updatecmd.Parameters.Add(new SqlParameter("@zhuangtai", zhuangtai));
                updatecmd.Parameters.Add(new SqlParameter("@skdbh", skdbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成空运车队付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdKycdJzxxx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            try
            {
                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));


                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (updatecmdmx.ExecuteNonQuery() >= 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成应付转实付明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdYfzsfJzxxx(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            try
            {

                updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '提交' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (updatecmdmx.ExecuteNonQuery() >= 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //计算往来单位是否有结算部门
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadWldwJsbm(string yw_khbm, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_wldw_jsbm Where isnull(yw_khbm,'') = isnull(@yw_khbm,'') ");
                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //通过jdrbm获取 应收明细程度
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string Jdrbm_Ysmxcd(string jdrbm, ref string num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select ysmxcd from yw_wldw_jdr_yssz where jdrbm = @jdrbm");
                cmd.Parameters.Add(new SqlParameter("@jdrbm", jdrbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetString(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //读取最大托盘数量
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadCllxwhZdtps(string cllxwh, ref string zdtps)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select max(zdtps) from t_cllxwh Where isnull(cllxwh,'') = isnull(@cllxwh,'') ");
                cmd.Parameters.Add(new SqlParameter("@cllxwh", cllxwh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    zdtps = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return zdtps;
        }

        //归集保存后更新对应4个表中的归集日期和编码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void UpdateYshdfygj(string yshdfygjbh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_yfzys = null;
            SqlCommand cmd_hdfyys = null;
            SqlCommand cmd_cqfys = null;
            SqlCommand cmd_qtys = null;
            try
            {
                //应付转应收数据
                cmd_yfzys = dbHelp.GetCommand("update yw_hddz_fksqd_jzxxx set yw_hddz_fksqd_jzxxx.yshdfygjbh =  yw_hddz_yshdfygj_cmd.yshdfygjbh from yw_hddz_fksqd_jzxxx, yw_hddz_yshdfygj_cmd Where yw_hddz_yshdfygj_cmd.sjly = '应付转应收' and  isnull(yw_hddz_fksqd_jzxxx.yshdfygjbh,'') = '' and yw_hddz_fksqd_jzxxx.sqdbh = yw_hddz_yshdfygj_cmd.sqdbh  and yw_hddz_fksqd_jzxxx.cxh = yw_hddz_yshdfygj_cmd.cxh_sqdbh  and yw_hddz_fksqd_jzxxx.ywbh = yw_hddz_yshdfygj_cmd.ywbh and isnull(yw_hddz_fksqd_jzxxx.cxh_hddz,1) = isnull(yw_hddz_yshdfygj_cmd.cxh_hddz,1)  and isnull(yw_hddz_yshdfygj_cmd.yshdfygjbh,'') = isnull(@yshdfygjbh,'') ");
                cmd_yfzys.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));

                if (cmd_yfzys.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

                //货代费用应收数据
                cmd_hdfyys = dbHelp.GetCommand("update yw_hddz_jzxxx set yw_hddz_jzxxx.yshdfygjbh =  yw_hddz_yshdfygj_cmd.yshdfygjbh from yw_hddz_jzxxx, yw_hddz_yshdfygj_cmd Where yw_hddz_yshdfygj_cmd.sjly = '货代费用' and yw_hddz_jzxxx.yshdfygjbh is null and yw_hddz_jzxxx.ywbh = yw_hddz_yshdfygj_cmd.ywbh and yw_hddz_jzxxx.cxh = yw_hddz_yshdfygj_cmd.cxh_hddz  and isnull(yw_hddz_yshdfygj_cmd.yshdfygjbh,'') = isnull(@yshdfygjbh,'') ");
                cmd_hdfyys.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                if (cmd_hdfyys.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }


                //超期费应收
                cmd_cqfys = dbHelp.GetCommand("update yw_hddz_jzxxx set yw_hddz_jzxxx.yshdfygjbh_cqf =  yw_hddz_yshdfygj_cmd.yshdfygjbh from yw_hddz_jzxxx, yw_hddz_yshdfygj_cmd Where yw_hddz_yshdfygj_cmd.sjly = '超期费应收' and yw_hddz_jzxxx.yshdfygjbh_cqf is null and  yw_hddz_jzxxx.ywbh = yw_hddz_yshdfygj_cmd.ywbh and yw_hddz_jzxxx.cxh = yw_hddz_yshdfygj_cmd.cxh_hddz  and isnull(yw_hddz_yshdfygj_cmd.yshdfygjbh,'') = isnull(@yshdfygjbh,'') ");
                cmd_cqfys.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                if (cmd_cqfys.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }


                //其他应收数据
                cmd_qtys = dbHelp.GetCommand("update yw_hddz_qtysk_cmd set yw_hddz_qtysk_cmd.yshdfygjbh =  yw_hddz_yshdfygj_cmd.yshdfygjbh from yw_hddz_qtysk_cmd, yw_hddz_yshdfygj_cmd Where yw_hddz_yshdfygj_cmd.sjly = '其他应收' and yw_hddz_qtysk_cmd.yshdfygjbh is null and   yw_hddz_qtysk_cmd.ywbh = yw_hddz_yshdfygj_cmd.ywbh and yw_hddz_qtysk_cmd.cxh_hddz = yw_hddz_yshdfygj_cmd.cxh_hddz  and isnull(yw_hddz_yshdfygj_cmd.yshdfygjbh,'') = isnull(@yshdfygjbh,'') ");
                cmd_qtys.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));

                if (cmd_qtys.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

        }

        //已归集次数
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int ReadGjcs(string yshdfygjbh, string ywbh, int cxh_hddz, ref int gjcs)
        {

            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_yshdfygj Where isnull(yshdfygjbh,'') <> isnull(@yshdfygjbh,'') and isnull(ywbh,'') = isnull(@ywbh,'') and cxh_hddz = @cxh_hddz");
                cmd.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@cxh_hddz", cxh_hddz));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    gjcs = rs.GetInt32(0);
                    rs.Close();
                }

            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return gjcs;

        }
        //主账号注销子账号也注销
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string W_sysUserZCX(string dlwtf, string sfszzd, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
                updatecmd = dbHelp.GetCommand("update Sys_Users set IsValid = 0 where dlwtf = @dlwtf and sfszzh != @sfszzd");
                updatecmd.Parameters.Add(new SqlParameter("@dlwtf", dlwtf));
                updatecmd.Parameters.Add(new SqlParameter("@sfszzd", sfszzd));
                var dd = updatecmd.ExecuteNonQuery();
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }



        //其它收款单
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenQtysk(string sqdbh, string state, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
                updatecmd = dbHelp.GetCommand("update yw_hddz_qtysk set tjrq  = getdate(),state  = @state from  yw_hddz_qtysk where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //其它收款单
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenYsjjf(string sqdbh, string state, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
                updatecmd = dbHelp.GetCommand("update yw_hddz_ysjjf set tjrq  = getdate(),state  = @state from  yw_hddz_ysjjf where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //其它收款单
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenYfjjf(string sqdbh, string state, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
                updatecmd = dbHelp.GetCommand("update yw_hddz_yfjjf set tjrq  = getdate(),state  = @state from  yw_hddz_yfjjf where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新往来客户帐龄
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenWldwZlrq(string jsdwbm, string jsdwmc, string jsbm, string fydlbm, string fydlmc, string jdrbm, string jdrmc, DateTime zlrq, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            SqlCommand cmd = null;
            int countNum = 0;

            try
            {
                #region 2018-04-07 欧阳文注释
                //if (cxh == 0)
                //{
                    //if (fydl == "01")
                    //{
                    //    updatecmd = dbHelp.GetCommand("update yw_wldw set zlrq  = @zlrq  from  yw_wldw  where yw_khbm = @jsdwbm");
                    //    updatecmd.Parameters.Add(new SqlParameter("@zlrq", zlrq));
                    //    updatecmd.Parameters.Add(new SqlParameter("@jsdwbm", jsdwbm));
                    //}
                    //if (fydl == "02")
                    //{
                    //    updatecmd = dbHelp.GetCommand("update yw_wldw set zlrq_gjyf  = @zlrq  from  yw_wldw  where yw_khbm = @jsdwbm");
                    //    updatecmd.Parameters.Add(new SqlParameter("@zlrq", zlrq));
                    //    updatecmd.Parameters.Add(new SqlParameter("@jsdwbm", jsdwbm));
                    //}
                    //if (fydl == "03")
                    //{
                    //    updatecmd = dbHelp.GetCommand("update yw_wldw set zlrq_hgsj  = @zlrq  from  yw_wldw  where yw_khbm = @jsdwbm");
                    //    updatecmd.Parameters.Add(new SqlParameter("@zlrq", zlrq));
                    //    updatecmd.Parameters.Add(new SqlParameter("@jsdwbm", jsdwbm));
                    //}
                    //if (fydl == "04")
                    //{
                    //    updatecmd = dbHelp.GetCommand("update yw_wldw set zlrq_hdbzj  = @zlrq  from  yw_wldw  where yw_khbm = @jsdwbm");
                    //    updatecmd.Parameters.Add(new SqlParameter("@zlrq", zlrq));
                    //    updatecmd.Parameters.Add(new SqlParameter("@jsdwbm", jsdwbm));
                    //}

                //}
                //else
                //{
                //    updatecmd = dbHelp.GetCommand("update yw_wldw_jsbm set zlrq  = @zlrq  from  yw_wldw_jsbm  where yw_khbm = @jsdwbm and cxh = @cxh");
                //    updatecmd.Parameters.Add(new SqlParameter("@zlrq", zlrq));
                //    updatecmd.Parameters.Add(new SqlParameter("@jsdwbm", jsdwbm));
                //    updatecmd.Parameters.Add(new SqlParameter("@cxh", cxh));

                //}
                #endregion

                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_wldw_zlrq_fydlbm_jdr Where yw_khbm = @jsdwbm and jsbm = @jsbm and fydlbm = @fydlbm and jdrbm = @jdrbm  ");
                cmd.Parameters.AddWithValue("@jsdwbm", jsdwbm);
                cmd.Parameters.AddWithValue("@jsbm", jsbm);
                cmd.Parameters.AddWithValue("@fydlbm", fydlbm);
                cmd.Parameters.AddWithValue("@jdrbm", jdrbm);

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    countNum = rs.GetInt32(0);
                    rs.Close();
                }

                if (countNum>0)
                {
                    updatecmd = dbHelp.GetCommand("update yw_wldw_zlrq_fydlbm_jdr set zlrq  = @zlrq  from  yw_wldw_zlrq_fydlbm_jdr  where yw_khbm = @jsdwbm and jsbm = @jsbm and fydlbm = @fydlbm and jdrbm = @jdrbm");
                    updatecmd.Parameters.AddWithValue("@jsdwbm", jsdwbm);
                    updatecmd.Parameters.AddWithValue("@jsbm", jsbm);
                    updatecmd.Parameters.AddWithValue("@fydlbm", fydlbm);
                    updatecmd.Parameters.AddWithValue("@jdrbm", jdrbm);
                    updatecmd.Parameters.AddWithValue("@zlrq", zlrq);
                }
                else
                {
                    updatecmd = dbHelp.GetCommand("insert into yw_wldw_zlrq_fydlbm_jdr(yw_khbm,khmc,jsbm,fydlbm,fydlmc,jdrbm,jdrmc,zlrq) values(@jsdwbm,@jsdwmc,@jsbm,@fydlbm,@fydlmc,@jdrbm,@jdrmc,@zlrq)");
                    updatecmd.Parameters.AddWithValue("@jsdwbm", jsdwbm);
                    updatecmd.Parameters.AddWithValue("@jsdwmc", jsdwmc);
                    updatecmd.Parameters.AddWithValue("@jsbm", jsbm);
                    updatecmd.Parameters.AddWithValue("@fydlbm", fydlbm);
                    updatecmd.Parameters.AddWithValue("@fydlmc", fydlmc);
                    updatecmd.Parameters.AddWithValue("@jdrbm", jdrbm);
                    updatecmd.Parameters.AddWithValue("@jdrmc", jdrmc);
                    updatecmd.Parameters.AddWithValue("@zlrq", zlrq);
                }

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新结算单位汇总帐龄明细信息更新
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenJsdwJsxxxx(string sjly, string djh, int djxh, string khqr, string khbz, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;

            try
            {
                if (sjly == "fygj")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz_yshdfygj_cmd set khqr  = @khqr , khbz = @khbz, khqrsj = getdate()  from  yw_hddz_yshdfygj_cmd  where yshdfygjbh = @djh and cxh = @djxh");
                    updatecmd.Parameters.Add(new SqlParameter("@khqr", khqr));
                    updatecmd.Parameters.Add(new SqlParameter("@khbz", khbz));
                    updatecmd.Parameters.Add(new SqlParameter("@djh", djh));
                    updatecmd.Parameters.Add(new SqlParameter("@djxh", djxh));
                }
                if (sjly == "fygj2")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz_yshdfygj_cmd set khqr  = @khqr , khbz = @khbz, khqrsj = getdate()  from  yw_hddz_yshdfygj_cmd  where yshdfygjbh = @djh and cxh = @djxh");
                    updatecmd.Parameters.Add(new SqlParameter("@khqr", khqr));
                    updatecmd.Parameters.Add(new SqlParameter("@khbz", khbz));
                    updatecmd.Parameters.Add(new SqlParameter("@djh", djh));
                    updatecmd.Parameters.Add(new SqlParameter("@djxh", djxh));
                }
                if (sjly == "sjskd")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz_sjskd_cmd set khqr  = @khqr , khbz = @khbz  from  yw_hddz_sjskd_cmd  where skdbh = @djh and cxh = @djxh");
                    updatecmd.Parameters.Add(new SqlParameter("@khqr", khqr));
                    updatecmd.Parameters.Add(new SqlParameter("@khbz", khbz));
                    updatecmd.Parameters.Add(new SqlParameter("@djh", djh));
                    updatecmd.Parameters.Add(new SqlParameter("@djxh", djxh));
                }

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //计算空运保证金海关处理编号
        //读取最大托盘数量
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Readkybzjhgcl(ref string zdtps)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var year = System.DateTime.Now.ToString("yyyyMMdd");
            try
            {

                cmd = dbHelp.GetCommand("select max(substring(hgclbh,9,2)) from yw_hddz  Where substring(hgclbh,1,8) = @year ");
                cmd.Parameters.Add(new SqlParameter("@year", year));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    zdtps = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            if (Convert.IsDBNull(zdtps) || zdtps == null)
            {
                zdtps = year.Substring(0, 8) + "01";
            }
            else
            {
                zdtps = year.Substring(0, 8) + String.Format("{0:00}", (long.Parse(zdtps) + 1));
            }
            return zdtps;
        }

        //空运预计报关时间更新计划操作时间
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenYjkgsjjhczsj(string ywbh, string yjkgsj, string htjhthsj_lb, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            SqlCommand updatetxm = null;
            try
            {
                updatetxm = dbHelp.GetCommand("update yw_hddz_tmxx set jhthsj = convert(datetime,substring(@yjkgsj,1,19))  from  yw_hddz_tmxx where ywbh=@ywbh and isnull(tmdycs,0) < 1");
                updatetxm.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                updatetxm.Parameters.Add(new SqlParameter("@yjkgsj", yjkgsj));



                updatecmd = dbHelp.GetCommand("update yw_hddz_jzxxx set htjhthsj = convert(datetime,substring(@yjkgsj,1,19))  from  yw_hddz_jzxxx where ywbh=@ywbh");
                updatecmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                updatecmd.Parameters.Add(new SqlParameter("@yjkgsj", yjkgsj));
                if (updatetxm.ExecuteNonQuery() >= 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //空运预计报关时间更新计划操作时间
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenYjkgsjtxm(string ywbh, string yjkgsj, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
                updatecmd = dbHelp.GetCommand("update yw_hddz_tmxx set jhthsj = convert(datetime,substring(@yjkgsj,1,19))  from  yw_hddz_tmxx where ywbh=@ywbh and isnull(tmdycs,0) < 1");
                updatecmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                updatecmd.Parameters.Add(new SqlParameter("@yjkgsj", yjkgsj));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return "1";
        }

        //更新空运车队配货信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenKycdph(string cdphbm, int fgzrts, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            SqlCommand cmd = null;
            SqlCommand cmd_zcf = null;
            SqlCommand cmd_zlf = null;
            SqlCommand cmd_zycf = null;
            SqlCommand cmd_xzf = null;
            SqlCommand cmd_ewsfje = null;

            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh= 'KY'+@cdphbm ");
                delcmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));


                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                                       "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                                        "SELECT 'KY'+yw_hddz_kycd.cdphbm,row_number() over(order by yw_hddz_tpcdxx.cxh asc),null,yw_hddz_tpcdxx.ywbh, " +
                                        "yw_hddz_jzxxx.jzxh,'011001','空运运费',  " +
                                        "je =  round(clsfje * ( case when yw_hddz_tpcdxx.gq_tpxx = 0 then yw_hddz_tpcdxx.jyd_tpxx else yw_hddz_tpcdxx.gq_tpxx end)/(select sum( case when a.gq_tpxx <> 0 then  a.gq_tpxx when   a.jyd_tpxx <>0 then a.jyd_tpxx when  a.zjfscwld_tpxx <> 0 then a.zjfscwld_tpxx when a.sc_tpxx <> 0  then a.sc_tpxx end) from yw_hddz_tpcdxx a where a.cdphbm = yw_hddz_kycd.cdphbm),2) ,  " +
                                        "getdate(),yw_hddz_tpcdxx.cxh,t_fylx.skfs  " +
                                        "FROM yw_hddz_jzxxx,t_fylx,yw_hddz_kycd,yw_hddz_tpcdxx " +
                                        "WHERE t_fylx.fybm = '011001' and " +
                                        "yw_hddz_tpcdxx.ywbh = yw_hddz_jzxxx.ywbh  and " +
                                        "yw_hddz_tpcdxx.cxh = yw_hddz_jzxxx.cxh  and " +
                                        "yw_hddz_kycd.cdphbm = yw_hddz_tpcdxx.cdphbm and " +
                                        " isnull(clsfje,0) <> 0 and " +
                                        "yw_hddz_kycd.cdphbm =   @cdphbm");

                cmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));


                cmd_zcf = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                                         "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                                        "SELECT 'KY'+yw_hddz_kycd.cdphbm,row_number() over(order by yw_hddz_tpcdxx.cxh asc),null,yw_hddz_tpcdxx.ywbh, " +
                                          "yw_hddz_jzxxx.jzxh,'011002','滞车费',  " +
                                          "je =  round(zcf *( case when yw_hddz_tpcdxx.gq_tpxx = 0 then yw_hddz_tpcdxx.jyd_tpxx else yw_hddz_tpcdxx.gq_tpxx end)/(select sum( case when a.gq_tpxx <> 0 then  a.gq_tpxx when   a.jyd_tpxx <>0 then a.jyd_tpxx when  a.zjfscwld_tpxx <> 0 then a.zjfscwld_tpxx when a.sc_tpxx <> 0  then a.sc_tpxx end) from yw_hddz_tpcdxx a where a.cdphbm = yw_hddz_kycd.cdphbm),2) ,  " +
                                          "getdate(),yw_hddz_tpcdxx.cxh,t_fylx.skfs  " +
                                          "FROM yw_hddz_jzxxx,t_fylx,yw_hddz_kycd,yw_hddz_tpcdxx " +
                                          "WHERE t_fylx.fybm = '011002' and " +
                                          "yw_hddz_tpcdxx.ywbh = yw_hddz_jzxxx.ywbh  and " +
                                          "yw_hddz_tpcdxx.cxh = yw_hddz_jzxxx.cxh  and " +
                                          "yw_hddz_kycd.cdphbm = yw_hddz_tpcdxx.cdphbm and " +
                                          " isnull(zcf,0) <> 0 and " +
                                          "yw_hddz_kycd.cdphbm =   @cdphbm");

                cmd_zcf.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));


                cmd_zlf = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                                         "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                                        "SELECT 'KY'+yw_hddz_kycd.cdphbm,row_number() over(order by yw_hddz_tpcdxx.cxh asc),null,yw_hddz_tpcdxx.ywbh, " +
                                          "yw_hddz_jzxxx.jzxh,'011003','制冷费',  " +
                                          "je =  round(zlf * ( case when yw_hddz_tpcdxx.gq_tpxx = 0 then yw_hddz_tpcdxx.jyd_tpxx else yw_hddz_tpcdxx.gq_tpxx end)/(select sum( case when a.gq_tpxx <> 0 then  a.gq_tpxx when   a.jyd_tpxx <>0 then a.jyd_tpxx when  a.zjfscwld_tpxx <> 0 then a.zjfscwld_tpxx when a.sc_tpxx <> 0  then a.sc_tpxx end) from yw_hddz_tpcdxx a where a.cdphbm = yw_hddz_kycd.cdphbm),2) ,  " +
                                          "getdate(),yw_hddz_tpcdxx.cxh,t_fylx.skfs  " +
                                          "FROM yw_hddz_jzxxx,t_fylx,yw_hddz_kycd,yw_hddz_tpcdxx " +
                                          "WHERE t_fylx.fybm = '011003' and " +
                                          "yw_hddz_tpcdxx.ywbh = yw_hddz_jzxxx.ywbh  and " +
                                          "yw_hddz_tpcdxx.cxh = yw_hddz_jzxxx.cxh  and " +
                                          "yw_hddz_kycd.cdphbm = yw_hddz_tpcdxx.cdphbm and " +
                                          " isnull(zlf,0) <> 0 and " +
                                          "yw_hddz_kycd.cdphbm =   @cdphbm");

                cmd_zlf.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));


                cmd_zycf = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                                         "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                                        "SELECT 'KY'+yw_hddz_kycd.cdphbm,row_number() over(order by yw_hddz_tpcdxx.cxh asc),null,yw_hddz_tpcdxx.ywbh, " +
                                          "yw_hddz_jzxxx.jzxh,'011004','转运运费',  " +
                                          "je =  round(zycf * ( case when yw_hddz_tpcdxx.gq_tpxx = 0 then yw_hddz_tpcdxx.jyd_tpxx else yw_hddz_tpcdxx.gq_tpxx end)/(select sum( case when a.gq_tpxx <> 0 then  a.gq_tpxx when   a.jyd_tpxx <>0 then a.jyd_tpxx when  a.zjfscwld_tpxx <> 0 then a.zjfscwld_tpxx when a.sc_tpxx <> 0  then a.sc_tpxx end) from yw_hddz_tpcdxx a where a.cdphbm = yw_hddz_kycd.cdphbm),2) ,  " +
                                          "getdate(),yw_hddz_tpcdxx.cxh,t_fylx.skfs  " +
                                          "FROM yw_hddz_jzxxx,t_fylx,yw_hddz_kycd,yw_hddz_tpcdxx " +
                                          "WHERE t_fylx.fybm = '011004' and " +
                                          "yw_hddz_tpcdxx.ywbh = yw_hddz_jzxxx.ywbh  and " +
                                          "yw_hddz_tpcdxx.cxh = yw_hddz_jzxxx.cxh  and " +
                                          "yw_hddz_kycd.cdphbm = yw_hddz_tpcdxx.cdphbm and " +
                                          " isnull(zycf,0) <> 0 and " +
                                          "yw_hddz_kycd.cdphbm =   @cdphbm");

                cmd_zycf.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));


                cmd_xzf = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                                         "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                                        "SELECT 'KY'+yw_hddz_kycd.cdphbm,row_number() over(order by yw_hddz_tpcdxx.cxh asc),null,yw_hddz_tpcdxx.ywbh, " +
                                          "yw_hddz_jzxxx.jzxh,'011005','熏蒸费',  " +
                                          "je =  round(xzf * ( case when yw_hddz_tpcdxx.gq_tpxx = 0 then yw_hddz_tpcdxx.jyd_tpxx else yw_hddz_tpcdxx.gq_tpxx end)/(select sum( case when a.gq_tpxx <> 0 then  a.gq_tpxx when   a.jyd_tpxx <>0 then a.jyd_tpxx when  a.zjfscwld_tpxx <> 0 then a.zjfscwld_tpxx when a.sc_tpxx <> 0  then a.sc_tpxx end) from yw_hddz_tpcdxx a where a.cdphbm = yw_hddz_kycd.cdphbm),2) ,  " +
                                          "getdate(),yw_hddz_tpcdxx.cxh,t_fylx.skfs  " +
                                          "FROM yw_hddz_jzxxx,t_fylx,yw_hddz_kycd,yw_hddz_tpcdxx " +
                                          "WHERE t_fylx.fybm = '011001' and " +
                                          "yw_hddz_tpcdxx.ywbh = yw_hddz_jzxxx.ywbh  and " +
                                          "yw_hddz_tpcdxx.cxh = yw_hddz_jzxxx.cxh  and " +
                                          "yw_hddz_kycd.cdphbm = yw_hddz_tpcdxx.cdphbm and " +
                                          " isnull(xzf,0) <> 0 and " +
                                          "yw_hddz_kycd.cdphbm =   @cdphbm");

                cmd_xzf.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));


                cmd_ewsfje = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                                         "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                                        "SELECT 'KY'+yw_hddz_kycd.cdphbm,row_number() over(order by yw_hddz_tpcdxx.cxh asc),null,yw_hddz_tpcdxx.ywbh, " +
                                          "yw_hddz_jzxxx.jzxh,'011006','其他额外费用',  " +
                                          "je =  round(yw_hddz_kycd.ewsfje * ( case when yw_hddz_tpcdxx.gq_tpxx = 0 then yw_hddz_tpcdxx.jyd_tpxx else yw_hddz_tpcdxx.gq_tpxx end)/(select sum(case when a.gq_tpxx <> 0 then  a.gq_tpxx when   a.jyd_tpxx <>0 then a.jyd_tpxx when  a.zjfscwld_tpxx <> 0 then a.zjfscwld_tpxx when a.sc_tpxx <> 0  then a.sc_tpxx end) from yw_hddz_tpcdxx a where a.cdphbm = yw_hddz_kycd.cdphbm),2) ,  " +
                                          "getdate(),yw_hddz_tpcdxx.cxh,t_fylx.skfs  " +
                                          "FROM yw_hddz_jzxxx,t_fylx,yw_hddz_kycd,yw_hddz_tpcdxx " +
                                          "WHERE t_fylx.fybm = '011006' and " +
                                          "yw_hddz_tpcdxx.ywbh = yw_hddz_jzxxx.ywbh  and " +
                                          "yw_hddz_tpcdxx.cxh = yw_hddz_jzxxx.cxh  and " +
                                          "yw_hddz_kycd.cdphbm = yw_hddz_tpcdxx.cdphbm and " +
                                          " isnull(yw_hddz_kycd.ewsfje,0) <> 0 and " +
                                          "yw_hddz_kycd.cdphbm =   @cdphbm");

                cmd_ewsfje.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));

                updatecmd = dbHelp.GetCommand("update yw_hddz_kycd set state = '提交', fgzrts  = @fgzrts  , tjrq  = getdate() from  yw_hddz_kycd where cdphbm =@cdphbm");
                updatecmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
                updatecmd.Parameters.Add(new SqlParameter("@fgzrts", fgzrts));
                if (delcmd.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() >= 0 && cmd_zcf.ExecuteNonQuery() >= 0 && cmd_zlf.ExecuteNonQuery() >= 0 && cmd_zycf.ExecuteNonQuery() >= 0 && cmd_xzf.ExecuteNonQuery() >= 0 && cmd_ewsfje.ExecuteNonQuery() >= 0 && updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };

            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //收款核销跟踪删除时修改对应状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenSkhxsc(string djh, int djxh, string sjly, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
                if (sjly == "fygj")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz_yshdfygj_cmd set hxwcbz = 'N' from  yw_hddz_yshdfygj_cmd where yshdfygjbh=@djh and cxh = @djxh");

                }
                else if (sjly == "sygj2")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz_yshdfygj_cmd set hxwcbz2 = 'N' from  yw_hddz_yshdfygj_cmd where yshdfygjbh=@djh and cxh = @djxh");

                }
                else if (sjly == "fksqd_sxf")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set hxwcbz_sxf = 'N' from  yw_hddz_fksqd_cmd where sqdbh=@djh and cxh = @djxh");
                }
                else
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set hxwcbz = 'N' from  yw_hddz_fksqd_cmd where sqdbh=@djh and cxh = @djxh");

                }

                updatecmd.Parameters.Add(new SqlParameter("@djh", djh));
                updatecmd.Parameters.Add(new SqlParameter("@djxh", djxh));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return "1";
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string WriteYtjkXml(string timestamp, string path, string fileFullPath, ref string num)
        {

            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            StringBuilder str = new StringBuilder();
            str.Append(timestamp);

            StreamWriter sw;
            if (!File.Exists(fileFullPath))
            {
                sw = File.CreateText(fileFullPath);
            }
            else
            {
                sw = File.AppendText(fileFullPath);
            }
            sw.WriteLine(str.ToString());
            sw.Close();
            return num;
        }

        //读取企业海关代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadHgqydm(string yw_khbm, ref string hgqybm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(qyhgbm) from yw_wldw  Where yw_khbm = @yw_khbm ");
                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    hgqybm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return hgqybm;
        }

        //读取企业海关代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadSjjgdm(string yw_khbm, ref string sjjgdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(sjjgdm) from yw_wldw  Where yw_khbm = @yw_khbm ");
                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sjjgdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return sjjgdm;
        }

        //读取运输方式编码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadYsfsbm(string ysfs, ref string ysfsbm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(ysfsbm) from t_ysfs  Where ysfs = @ysfs ");
                cmd.Parameters.Add(new SqlParameter("@ysfs", ysfs));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    ysfsbm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return ysfsbm;
        }

        //读取商检贸易方式编码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadSjMyfs(string myfs, ref string myfsdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(myfsdm_sjy) from t_myfs  Where myfsdm = @myfs ");
                cmd.Parameters.Add(new SqlParameter("@myfs", myfs));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    myfsdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return myfsdm;
        }

        //读取海关港口代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadHggkdm(string qyg, ref string hggkdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(case when isnull(hggkdm,'') = '' then ctr_ename else hggkdm end) from t_port,t_country  Where t_port.ctr_no = t_country.ctr_code and ename = @qyg ");
                cmd.Parameters.Add(new SqlParameter("@qyg", qyg));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    hggkdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return hggkdm;
        }

        //读取商检目的港港口代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadSjmdggkdm(string mdg, ref string sjgkdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(sjgkdm )  from t_port_c   Where  cname = @mdg ");
                cmd.Parameters.Add(new SqlParameter("@mdg", mdg));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sjgkdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return sjgkdm;
        }

        //读取商检目的港港口代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadSjdqdm(string dqdm, ref string dqsjdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(dqsjdm )  from t_dq   Where  dqdm = @dqdm ");
                cmd.Parameters.Add(new SqlParameter("@dqdm", dqdm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    dqsjdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return dqsjdm;
        }

        //读取海关代码国家名称
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadQyg(string hggkdm, ref string qyg)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(ename) from t_port  Where hggkdm = @hggkdm ");
                cmd.Parameters.Add(new SqlParameter("@hggkdm", hggkdm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    qyg = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return qyg;
        }

        //读取海关代码国家商检港口代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadQygsjgkdm(string hggkdm, ref string qygsjgkdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(sjgkdm) from t_port  Where hggkdm = @hggkdm ");
                cmd.Parameters.Add(new SqlParameter("@hggkdm", hggkdm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    qygsjgkdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return qygsjgkdm;
        }

        //读取海关港口国家代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadGjdm(string ctr_ename, ref string hggjdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(ctr_hgcode) from t_country  Where ctr_ename = @ctr_ename ");
                cmd.Parameters.Add(new SqlParameter("@ctr_ename", ctr_ename));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    hggjdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return hggjdm;
        }

        //读取海关港口国家名称
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadGj(string ctr_hgcode, ref string ctr_ename)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(ctr_ename) from t_country  Where ctr_hgcode = @ctr_hgcode ");
                cmd.Parameters.Add(new SqlParameter("@ctr_hgcode", ctr_hgcode));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    ctr_ename = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return ctr_ename;
        }

        //读取币别代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadBbdm(string cu_type, ref string bbdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(cu_code) from t_currency  Where cu_type = @cu_type ");
                cmd.Parameters.Add(new SqlParameter("@cu_type", cu_type));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    bbdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return bbdm;
        }

        //读取箱型代码代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadXxdm(string xx, ref string xxdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(xxdm) from t_xx  Where xx = @xx ");
                cmd.Parameters.Add(new SqlParameter("@xx", xx));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    xxdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return xxdm;
        }


     

        //读取商检海关数量单位
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadSjhgjldm(string unit_code, ref string sjjldw)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(sjjldw) from t_hgunit  Where unit_code = @unit_code ");
                cmd.Parameters.Add(new SqlParameter("@unit_code", unit_code));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sjjldw = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return sjjldw;
        }

        //读取商检海关数量单位
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadSjunit_name(string unit_code, ref string sjjldw)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(unit_name) from t_hgunit  Where unit_code = @unit_code ");
                cmd.Parameters.Add(new SqlParameter("@unit_code", unit_code));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sjjldw = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return sjjldw;
        }

        //读取商检海关数量单位
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadSjjldm(string ename, ref string sjjldw)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(sjjldw) from t_jldw  Where ename = @ename ");
                cmd.Parameters.Add(new SqlParameter("@ename", ename));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sjjldw = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return sjjldw;
        }

        //取折人民币汇率
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public double ReadJzxzz(string xx, ref double jzxzz)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select max(jzxzz) from t_xx  Where xx = @xx  ");
                cmd.Parameters.Add(new SqlParameter("@xx", xx));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    jzxzz = rs.GetDouble(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return jzxzz;
        }


        //跟新货代但终附属单据中的报关单号 
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateHddzBgdh(string ywbh, string tgdh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_fsdz set dzbh=@tgdh  Where ywbh=@ywbh and dzdm = 'A'");


                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@tgdh", tgdh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //读取价格条款代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadJgtk(string jgtk, ref string jgtkdm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(jgtkdm) from t_price_term  Where jgtk = @jgtk ");
                cmd.Parameters.Add(new SqlParameter("@jgtk", jgtk));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    jgtkdm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return jgtkdm;
        }

        //更新托单的报关公司
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateJhzxgz_Sfjs(string bh, string sfjs, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_jhzxgz set sfjs=@sfjs Where bh=@bh   ");


                cmd.Parameters.Add(new SqlParameter("@bh", bh));
                cmd.Parameters.Add(new SqlParameter("@sfjs", sfjs));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断归集后的数据能否删除
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckYshdfygj(string yshdfygjbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT count(*) FROM yw_hddz_skhx_cmd Where djh=@yshdfygjbh");

                cmd.Parameters.Add(new SqlParameter("@yshdfygjbh", yshdfygjbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新任务编号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        //public int UpdateWlgzRwbh(string rwbh, string ywbh, int cxh, string rwmc, string jrdzwlsj, string cdzwlsj, ref int num)
        public int UpdateWlgzRwbh(string rwbh, string ywbh, int cxh, string rwmc, DateTime jrdzwlsj, DateTime cdzwlsj, ref int num)
        {

            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                if (rwmc == "gq")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set cgqsj = convert(datetime,@cdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };

                if (rwmc == "hgcyd")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set cydsj = convert(datetime,@cdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };

                if (rwmc == "jyd_j")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set djydsj = convert(datetime,@jrdzwlsj)  Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@cxjrdzwlsjh", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };

                if (rwmc == "jyd_c")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set   tgjysj = convert(datetime,@cdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@cxjrdzwlsjh", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };


                if (rwmc == "zjfscwld_j")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set fscwl_ddsj = convert(datetime,@jrdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@jrdzwlsj", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };

                if (rwmc == "zjfscwld_c")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set   fscwl_lksj = convert(datetime,@cdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@jrdzwlsj", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };

                if (rwmc == "sc_j")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set rscsj = convert(datetime,@jrdzwlsj)  Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@jrdzwlsj", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };
                if (rwmc == "sc_c")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set  cscsj = convert(datetime,@cdzwlsj)  Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@jrdzwlsj", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };

                if (rwmc == "jschfscwld_j")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set fscwl_ddsj = convert(datetime,@jrdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@jrdzwlsj", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };

                if (rwmc == "jschfscwld_c")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set  fscwl_lksj = convert(datetime,@cdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@jrdzwlsj", jrdzwlsj));
                    cmd.Parameters.Add(new SqlParameter("@cdzwlsj", cdzwlsj));
                };



                if (rwmc == "dc")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set hdcsj = convert(datetime,@jrdzwlsj) Where ywbh=@ywbh and cxh=@cxh  ");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                    cmd.Parameters.Add(new SqlParameter("@jrdzwlsj", jrdzwlsj));
                };

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetStringByUrl(string strUrl, ref string strallstrm)
        {

            WebRequest wrt = WebRequest.Create(strUrl);
            WebResponse wrse = wrt.GetResponse();
            Stream strM = wrse.GetResponseStream();
            StreamReader SR = new StreamReader(strM, Encoding.GetEncoding("utf-8"));
            strallstrm = SR.ReadToEnd();
            return strallstrm;
        }

        //删除所有条码，然后重新生成
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string DeleteKyTmdy(string ywbh, int cxh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_tmxx where ywbh=@ywbh and cxh=@cxh ");
                delcmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                delcmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                if (delcmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenKyTmdy(string tdh, string ywbh, int cxh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {


                cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_tmxx " +
                 "( tdh,jhthsj,hbh,xhgq,hz_spmc,zhlx,zhsl,shr,lxr ,lxdh,ywbh,cxh) " +
                 "SELECT @tdh,yw_hddz_jzxxx.htjhthsj,yw_hddz.hcorhbh,yw_hddz.xhgqjc,yw_hddz.hz_spmc,yw_hddz_jzxxx.zhlx, " +
                "yw_hddz_jzxxx.tpxx,yw_hddz_jzxxx.sjshrmc,yw_hddz_jzxxx.lxr,yw_hddz_jzxxx.lxdh, " +
                " yw_hddz_jzxxx.ywbh,yw_hddz_jzxxx.cxh " +
                 "FROM yw_hddz,yw_hddz_jzxxx " +
                "WHERE yw_hddz.ywbh  = yw_hddz_jzxxx.ywbh and yw_hddz_jzxxx.ywbh = @ywbh and " +
                 "yw_hddz_jzxxx.cxh = @cxh ");
                cmd.Parameters.Add(new SqlParameter("@tdh", tdh));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@cxh", cxh));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };

            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新货代单证状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateHddzState(string ywbh, string SupplierSellID, string state, string eid, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand cmd1 = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set state = @state  Where ywbh=@ywbh");

                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@state", state));
                if (cmd.ExecuteNonQuery() > 0)
                {


                    cmd1 = dbHelp.GetCommand("insert into s_log_err(eid,tablename,changecols,mainid,cjsj,cscs,sfcg,funname) values(@eid,'yw_hddz','state',@ywbh,getdate(),0,0,'DataToFreshPort')");
                    cmd1.Parameters.Add(new SqlParameter("@eid", eid));
                    cmd1.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    if (cmd1.ExecuteNonQuery() > 0)
                    {
                        dbHelp.Commit();
                        num = 1;

                    }
                    else
                    {
                        dbHelp.Rollback();
                        num = 0;
                    }
                }
                else
                {
                    dbHelp.Rollback();
                    num = 0;
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //读取客户统一编码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadWldwTybm(string yw_khbm, ref string khbm)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(tybm) from yw_wldw  Where yw_khbm = @yw_khbm ");
                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    khbm = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return khbm;
        }

        //读取客户默认联系人
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadWldwTybmLxr(string khbm, ref string lxr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(lxr) from yw_wldw_gnkh_lxr  Where yw_khbm = @khbm and mrlxr = 'Y' and sfgnwl ='Y' ");
                cmd.Parameters.Add(new SqlParameter("@khbm", khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    lxr = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return lxr;
        }

        //读取客户默认联系电话
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadWldwTybmLxdh(string khbm, ref string lxdh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(lxr) from yw_wldw_gnkh_lxr  Where yw_khbm = @khbm and mrlxr = 'Y' and sfgnwl ='Y' ");
                cmd.Parameters.Add(new SqlParameter("@khbm", khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    lxdh = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return lxdh;
        }

        //读取任务编号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadRwbh(string ywbh, string hddz_cxh, string rwmc, ref string rwbh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                if (rwmc == "gq_c_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(gq_c_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "hgcyd_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(hgcyd_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "hgcyd_c_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(hgcyd_c_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "sc_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(sc_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "sc_c_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(sc_c_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "jyd_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(jyd_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "jyd_c_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(jyd_c_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "zjfscwld_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(zjfscwld_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "jschfscwld_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(jschfscwld_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "zjfscwld_c_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(zjfscwld_c_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "jschfscwld_c_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(jschfscwld_c_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }
                if (rwmc == "dc_rwbh")
                {
                    cmd = dbHelp.GetCommand("select max(dc_rwbh) from yw_hddz_jzxxx  Where ywbh = @ywbh and cxh = convert(integer,@hddz_cxh)");
                }


                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@hddz_cxh", hddz_cxh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    rwbh = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return rwbh;
        }

        //读取商品对应国家是否需要Y证
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadGjSpYz(string ctr_ename, string spbm, ref string yz)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select case when count(*) >0 then 'Y' else 'N' end  from yw_hddz_cpxxk  Where ctr_ename = @ctr_ename and spbm = @spbm and isnull(yhgs,0) > 0");
                cmd.Parameters.Add(new SqlParameter("@ctr_ename", ctr_ename));
                cmd.Parameters.Add(new SqlParameter("@spbm", spbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    yz = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return yz;
        }

        //读取商品对应国家的检疫处理要求
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadGjSpJyclyq(string ctr_ename, string spbm, ref string jyclyq)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select isnull(max(jyclyq),'')  from yw_hddz_cpxxk  Where ctr_ename = @ctr_ename and spbm = @spbm ");
                cmd.Parameters.Add(new SqlParameter("@ctr_ename", ctr_ename));
                cmd.Parameters.Add(new SqlParameter("@spbm", spbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    jyclyq = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return jyclyq;
        }
        //实际收货人 list保存到Edit中
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string dw_master_sjskrmc(string sjshrbm, string sjshrmc,string lxr,string lxdh,string ywbh1,ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;

            try
            {
                updatecmd = dbHelp.GetCommand("update yw_hddz_jzxxx set sjshrbm = @sjshrbm,sjshrmc = @sjshrmc,lxr = @lxr,lxdh = @lxdh where ywbh =@ywbh1 and cxh = '1'");
                updatecmd.Parameters.Add(new SqlParameter("@sjshrbm", sjshrbm));
                updatecmd.Parameters.Add(new SqlParameter("@sjshrmc", sjshrmc));
                updatecmd.Parameters.Add(new SqlParameter("@lxr", lxr));
                updatecmd.Parameters.Add(new SqlParameter("@lxdh", lxdh));
                updatecmd.Parameters.Add(new SqlParameter("@ywbh1", ywbh1));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //货代物流车队保存
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Hdwlcdbc(string cdmc, string ywbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;

            try
            {
                updatecmd = dbHelp.GetCommand("update yw_hddz_wlgz set cdmc = @cdmc where ywbh =@ywbh");
                updatecmd.Parameters.Add(new SqlParameter("@cdmc", cdmc));
                updatecmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string WlgzFyqr(string rwbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;

            try
            {
                updatecmd = dbHelp.GetCommand("update yw_hddz_wlgz set state_fy  = '提交' from  yw_hddz_wlgz where rwbh=@rwbh");
                updatecmd.Parameters.Add(new SqlParameter("@rwbh", rwbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成物流跟踪集装箱费用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenWlgzFksqd(string sqdbh, string state, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {


                updatecmd = dbHelp.GetCommand("update yw_wlgz_fksqd set state  = @state from  yw_wlgz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //海运实际付款撤销报批
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string HysjfkCxbp(string sqdbh, string state, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {


                updatecmd = dbHelp.GetCommand("update yw_wlgz_fksqd set state  = @state from  yw_wlgz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //取剩余油费
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public decimal cddqyp(string cdbm, ref decimal syyf)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand cmd_ydk = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(sum(je),0.00)  FROM yw_wlgz_fksqd_cmd Where zfdxbm =@cdbm and fybm = '050106'  ");
                cmd.Parameters.Add(new SqlParameter("@cdbm", cdbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    syyf = rs.GetDecimal(0);

                    rs.Close();
                }

                cmd = dbHelp.GetCommand("select case when count(*) >0 then 'Y' else 'N' end  from yw_hddz_cpxxk  Where ctr_ename = @ctr_ename and spbm = @spbm and isnull(yhgs,0) > 0");

                cmd_ydk = dbHelp.GetCommand("SELECT isnull(sum(isnull(dkypje,0)),0.00)  FROM yw_wlgz_fksqd Where sjskrbm =@cdbm  ");
                cmd_ydk.Parameters.Add(new SqlParameter("@cdbm", cdbm));
                SqlDataReader rs_ydk = cmd_ydk.ExecuteReader();
                if (rs_ydk.Read())
                {
                    syyf = syyf - rs_ydk.GetDecimal(0);

                    rs_ydk.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return syyf;
        }

        //是否有富文本         
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadFwb(string ywbh, ref string sfcz)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select case when count(*) > 0 then 'Y' else 'N' end from yw_fwb where ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sfcz = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            if (sfcz == null || sfcz == "")
            {
                sfcz = "N";
            }
            return sfcz;
        }

        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenQsd(string qsdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;

            try
            {

                cmd = dbHelp.GetCommand("update yw_hddz_qsd set state  = '提交' from  yw_hddz_qsd where qsdbh=@qsdbh");
                cmd.Parameters.Add(new SqlParameter("@qsdbh", qsdbh));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };

            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //跟新货代但终附属单据中的报关单号 
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateThwljhHgcyd(string ywbh, string cydbm, string cyd, string cydjc, string cydpym, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set cydbm=@cydbm ,cyd=@cyd ,cydjc=@cydjc , cydpym=@cydpym  Where ywbh=@ywbh ");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@cydbm", cydbm));
                cmd.Parameters.Add(new SqlParameter("@cyd", cyd));
                cmd.Parameters.Add(new SqlParameter("@cydjc", cydjc));
                cmd.Parameters.Add(new SqlParameter("@cydpym", cydpym));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertSjzf_gs(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_gs = null;
            var userid = AppService.GetUserID();
            try
            {

                cmd_gs = dbHelp.GetCommand("INSERT INTO yw_hddz_sjzf ( ywbh, cxh,bslx,bscs,sjlx,sjje,sjzfrq )  select ywbh,1,'zcsj',1,'关税',gs  - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf a where a.bslx = 'zcsj' and a.sjlx = '关税' and a.ywbh = yw_hddz.ywbh ),0) ,sjzfrq from yw_hddz where isnull(gs - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf b where b.bslx = 'zcsj' and b.sjlx = '关税' and b.ywbh = yw_hddz.ywbh ),0),0)> 0 and ywbh not in (select ywbh from yw_hddz_sjzf  where bslx = 'zcsj' and sjlx = '关税');");

                if (cmd_gs.ExecuteNonQuery() > 0)
                {

                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertSjzf_zzs(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_zzs = null;
            var userid = AppService.GetUserID();
            try
            {

                cmd_zzs = dbHelp.GetCommand("INSERT INTO yw_hddz_sjzf ( ywbh, cxh,bslx,bscs,sjlx,sjje,sjzfrq )  select ywbh,2,'zcsj',1,'增值税',zzs  - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf a where a.bslx = 'zcsj' and a.sjlx = '增值税' and a.ywbh = yw_hddz.ywbh ),0) ,sjzfrq from yw_hddz where isnull(zzs - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf b where b.bslx = 'zcsj' and b.sjlx = '增值税' and b.ywbh = yw_hddz.ywbh ),0),0)> 0 and ywbh not in (select ywbh from yw_hddz_sjzf  where bslx = 'zcsj' and sjlx = '增值税');");
                if (cmd_zzs.ExecuteNonQuery() > 0)
                {

                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertSjzf_bzj(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_bzj = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd_bzj = dbHelp.GetCommand("INSERT INTO yw_hddz_sjzf ( ywbh, cxh,bslx,bscs,sjlx,sjje,sjzfrq )  select ywbh,3,'zcsj',1,'保证金',bzj -  - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf a where a.bslx = 'zcsj' and a.sjlx = '保证金' and a.ywbh = yw_hddz.ywbh ),0),sjzfrq from yw_hddz where isnull(bzj - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf b where b.bslx = 'zcsj' and b.sjlx = '保证金' and b.ywbh = yw_hddz.ywbh ),0),0)> 0 and ywbh not in (select ywbh from yw_hddz_sjzf  where bslx = 'zcsj' and sjlx = '保证金');");

                if (cmd_bzj.ExecuteNonQuery() > 0)
                {

                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertSjzf_bjgs(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_bjgs = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd_bjgs = dbHelp.GetCommand("INSERT INTO yw_hddz_sjzf ( ywbh, cxh,bslx,bscs,sjlx,sjje,sjzfrq )  select ywbh,4,'bjsj',1,'补交关税',gs_bj  - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf a where a.bslx = 'zcsj' and a.sjlx = '补交关税' and a.ywbh = yw_hddz.ywbh ),0),sjzfrq from yw_hddz where isnull(gs_bj - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf b where b.bslx = 'zcsj' and b.sjlx = '补交关税' and b.ywbh = yw_hddz.ywbh ),0),0)> 0 and ywbh not in (select ywbh from yw_hddz_sjzf  where bslx = 'bjsj' and sjlx = '补交关税');");

                if (cmd_bjgs.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {

                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertSjzf_bjzzs(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_bjzzs = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd_bjzzs = dbHelp.GetCommand("INSERT INTO yw_hddz_sjzf ( ywbh, cxh,bslx,sjlx,bscs,sjje,sjzfrq )  select ywbh,5,'bjsj',1,'补交增值税',bzj_bj  - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf a where a.bslx = 'zcsj' and a.sjlx = '补交增值税' and a.ywbh = yw_hddz.ywbh ),0),sjzfrq from yw_hddz where isnull(zzs_bj - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf b where b.bslx = 'zcsj' and b.sjlx = '补交增值税' and b.ywbh = yw_hddz.ywbh ),0),0)> 0 and ywbh not in (select ywbh from yw_hddz_sjzf  where bslx = 'bjsj' and sjlx = '补交增值税');");
                if (cmd_bjzzs.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertSjzf_bjbzj(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_bjbzj = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd_bjbzj = dbHelp.GetCommand("INSERT INTO yw_hddz_sjzf ( ywbh, cxh,bslx,bscs,sjlx,sjje,sjzfrq )  select ywbh,6,'bjsj',1,'补交保证金',bzj_bj  - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf a where a.bslx = 'zcsj' and a.sjlx = '补交保证金' and a.ywbh = yw_hddz.ywbh ),0) ,sjzfrq from yw_hddz where isnull(bzj_bj - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf b where b.bslx = 'zcsj' and b.sjlx = '补交保证金' and b.ywbh = yw_hddz.ywbh ),0),0)> 0 and ywbh not in (select ywbh from yw_hddz_sjzf  where bslx = 'bjsj' and sjlx = '补交保证金');");
                if (cmd_bjbzj.ExecuteNonQuery() > 0)
                {

                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertSjzf_zbj(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_zbj = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd_zbj = dbHelp.GetCommand("INSERT INTO yw_hddz_sjzf ( ywbh, cxh,bslx,bscs,sjlx,sjje,sjzfrq )  select ywbh,7,'bjsj',1,'滞报金',zbj  - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf a where a.bslx = 'zcsj' and a.sjlx = '滞报金' and a.ywbh = yw_hddz.ywbh ),0) ,sjzfrq from yw_hddz where isnull(zbj - isnull(( select isnull(sum(sjje),0) from yw_hddz_sjzf b where b.bslx = 'zcsj' and b.sjlx = '滞报金' and b.ywbh = yw_hddz.ywbh ),0),0)> 0 and ywbh not in (select ywbh from yw_hddz_sjzf  where bslx = 'bjsj' and sjlx = '滞报金');");
                if (cmd_zbj.ExecuteNonQuery() > 0)
                {

                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }


        //更新税金中的支付日期
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateSjzf_sjzfrq(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_sjzfrq = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd_sjzfrq = dbHelp.GetCommand("update yw_hddz_sjzf set yw_hddz_sjzf.sjzfrq = yw_hddz.sjzfrq  from  yw_hddz_sjzf,yw_hddz where yw_hddz_sjzf.ywbh = yw_hddz.ywbh and  yw_hddz_sjzf.sjzfrq is null and yw_hddz.sjzfrq is not null;");
                if (cmd_sjzfrq.ExecuteNonQuery() > 0)
                {

                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入税金中是否支付过的数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateSjzf(string ywbh, decimal gs, decimal zzs, decimal bzj, decimal bjgs, decimal bjzzs, decimal bjbzj, decimal zbj, decimal xfs, string sjzfrq, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();

            try
            {

                cmd = dbHelp.GetCommand("update yw_hddz set gs = @gs,zzs = @zzs,bzj = @bzj,gs_bj = @bjgs,zzs_bj = @bjzzs,bzj_bj = @bjbzj,zbj = @zbj,xfs = @xfs,sjzfrq =  @sjzfrq   from yw_hddz where ywbh = @ywbh");

                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@gs", gs));
                cmd.Parameters.Add(new SqlParameter("@zzs", zzs));
                cmd.Parameters.Add(new SqlParameter("@bzj", bzj));
                cmd.Parameters.Add(new SqlParameter("@bjgs", bjgs));
                cmd.Parameters.Add(new SqlParameter("@bjzzs", bjzzs));
                cmd.Parameters.Add(new SqlParameter("@bjbzj", bjbzj));
                cmd.Parameters.Add(new SqlParameter("@zbj", zbj));
                cmd.Parameters.Add(new SqlParameter("@xfs", xfs));
                cmd.Parameters.Add(new SqlParameter("@sjzfrq", sjzfrq));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //插入单证审单数据表
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InertDzqk(string ywbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd_dzqk = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd_dzqk = dbHelp.GetCommand("INSERT INTO yw_hddz_dzyq_cmd  ( ywbh, cxh, cxh_mx,  sdjg,   sdnr, sdsj, sdr,sfsdzb, sdzbsj, sdzbry, sfsdfb, sdfbsj,  sdfbry )  select ywbh,  cxh,1,  sdzxjg, sdzxnr, sdzxsj, @sdr,  case when isnull(xcsdbz,'N') = 'Y' then 'Y' else sfsdzb end,   sdzbsj, sdzbry, sfsdfb, sdfbsj, sdfbry from yw_hddz_dzyq where ywbh = @ywbh   and  (xcsdbz = 'Y' or sfsdzb = 'Y' or sfsdfb = 'Y' ) and ywbh+convert(varchar(10),cxh) not in (select ywbh+convert(varchar(10),cxh) from yw_hddz_dzyq_cmd );");
                cmd_dzqk.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd_dzqk.Parameters.Add(new SqlParameter("@sdr", userid));
                if (cmd_dzqk.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                };
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;

        }

        //更新报关单号对应的OCR 文件
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateBgdhOcrwjsb(string ywbh, string bgdh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ocrwjsb set ywbh = @ywbh  Where  left(wjmc,18)=@bgdh and wjlx = '税单'");

                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@bgdh", bgdh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                    num = 0;
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新报关单号对应的OCR 文件
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateTgdhOcrwjsb(string ywbh, string tgdh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ocrwjsb set ywbh = @ywbh  Where  left(wjmc,15)=@tgdh and wjlx = '检验检疫证书'");

                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@tgdh", tgdh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                    num = 0;
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string CancleFksqd(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand updatecmd = null;
            SqlCommand delcmd = null;
            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (delcmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                }
                else
                {
                    dbHelp.Rollback();
                };

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '新制' from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断页码是否重复
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadWldwYm(string yw_khbm, string ym, ref string ymjg)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select (case when isnull(max(yw_khbm),'') = '' then 'N' else 'Y' end)  from yw_wldw  Where yw_khbm <> @yw_khbm and ym = @ym and len(ym) >0 ");
                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                cmd.Parameters.Add(new SqlParameter("@ym", ym));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    ymjg = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return ymjg;
        }

        //更新增票是否支付
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Zpsfzf(string fph, string ywbh, string sfzf, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;

            try
            {

                cmd = dbHelp.GetCommand("update yw_hddz_sdzpgl_cmd set sfzf  = @sfzf from  yw_hddz_sdzpgl_cmd where fph=@fph and ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@sfzf", sfzf));
                cmd.Parameters.Add(new SqlParameter("@fph", fph));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };

            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //税金支付 更新是否支付完成标志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Sjzf_sfwc(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;

            try
            {

                cmd = dbHelp.GetCommand("update  yw_hddz_sjzf set sjzfwc = 'Y'  FROM yw_hddz_sjzf,yw_hddz_fksqd_cmd WHERE  yw_hddz_sjzf.cnqr = 'Y' and yw_hddz_sjzf.ywbh = yw_hddz_fksqd_cmd.ywbh and  yw_hddz_sjzf.cxh = yw_hddz_fksqd_cmd.sjzf_cxh and yw_hddz_fksqd_cmd.sqdbh = @sqdbh");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };

            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //撤销空运车队配货
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string CancleKycdph(string cdphbm, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand updatecmd = null;
            SqlCommand delcmd = null;


            try
            {
                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh= 'KY'+@cdphbm ");
                delcmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
                if (delcmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                }
                else
                {
                    dbHelp.Rollback();
                };


                updatecmd = dbHelp.GetCommand("update yw_hddz_kycd set state  = '新制',tjrq = null from  yw_hddz_fksqd where cdphbm=@cdphbm");
                updatecmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断明细单编码是否存在
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckKycdph(string cdphbm, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_jzxxx where sqdbh= 'KY'+@cdphbm  and isnull(ysqr,'N') = 'Y'");
                cmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //读取数据表中的税单管理面的最大号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int GenSdglCxh(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(max(convert(integer,substring(sddybh,9,3))),0) from yw_hddz  where  substring(sddybh,1,8) = convert(varchar(10),getdate(),112)");
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //读取数据表中的理货信息批次号的最大号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int GenLhxxPch(ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(max(substring(sqlhpc,9,3)),0) from yw_hddz_jzxxx  where  substring(sqlhpc,1,8) = convert(varchar(10),getdate(),112)");
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断提单号+集装箱号是否重复使用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ZtdhJzxhCf(string ywbh, string ztdh, string jzxh, ref string xtywbh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("SELECT isnull(max(yw_hddz.ywbh),'') FROM yw_hddz,yw_hddz_jzxxx Where yw_hddz.state <> '终止' and yw_hddz.ywbh = yw_hddz_jzxxx.ywbh and isnull(yw_hddz_jzxxx.ywbh,'') <> isnull(@ywbh,'') and  isnull(ztdh,'') = isnull(@ztdh,'') and isnull(jzxh,'') = isnull(@jzxh,'') ");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@ztdh", ztdh));
                cmd.Parameters.Add(new SqlParameter("@jzxh", jzxh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    xtywbh = rs.GetString(0);
                    rs.Close();
                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return xtywbh;
        }

        //判断是否有检疫费用明细
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int KyhddzSfymx(string ywbh, ref int sfymx)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_cmd where ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sfymx = rs.GetInt32(0);
                    rs.Close();
                }
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return sfymx;
        }

        //更新理货状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string EditLhzt_jkdgqrbz(string ywbh, string zdnr, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand updatecmd = null;
            try
            {
                if (zdnr == "确报动态")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz set sjzq_jkdgqrbz  = @zdnr, sjzq_zqdgsj = getdate()  from  yw_hddz where ywbh=@ywbh");
                }
                else
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz set sjzq_jkdgqrbz  = @zdnr, sjzq_zqdgsj = null  from  yw_hddz where ywbh=@ywbh");
                }
                updatecmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                updatecmd.Parameters.Add(new SqlParameter("@zdnr", zdnr));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                    //////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                    //HddzIF serv = new HddzIF();

                    string zdmc = "sjzq_zqdgsj";
                    string strErr;

                    Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                    //}));
                    //t1.IsBackground = true;
                    //t1.Start();
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新理货状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string EditLhzt_lhzt(string ywbh, string zdnr, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand updatecmd = null;
            try
            {
                if (zdnr == "正常理货")
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz set sjzq_lhzt  = @zdnr, sjzq_zqlhsj = getdate()  from  yw_hddz where ywbh=@ywbh");
                }
                else
                {
                    updatecmd = dbHelp.GetCommand("update yw_hddz set sjzq_lhzt  = @zdnr, sjzq_zqlhsj = null  from  yw_hddz where ywbh=@ywbh");

                }
                updatecmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                updatecmd.Parameters.Add(new SqlParameter("@zdnr", zdnr));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                    //////数据上传生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                    //HddzIF serv = new HddzIF();

                    string zdmc = "sjzq_zqlhsj";
                    string strErr;

                    Interfaces.GeneralPortal.DataToFreshPort("yw_hddz", zdmc, ywbh, out strErr);

                    //}));
                    //t1.IsBackground = true;
                    //t1.Start();
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //货代单证列表中更新提单类型
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Update_Hddz_Tdlx(string ywbh, string tdlx, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                string zfbqk = "";
                if (tdlx == "正本提单")
                {
                    zfbqk = "正本";
                }
                else if (tdlx == "未知")
                {
                    zfbqk = "";
                }
                else
                {
                    zfbqk = "副本";
                }

                cmd = dbHelp.GetCommand("update yw_hddz_dzyq set zfbqk = @zfbqk from yw_hddz_dzyq Where ywbh=@ywbh and dzmc = '提单' ");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@zfbqk", zfbqk));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }


            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return num;
        }

        //判断生鲜港代卖客户信息提醒是否匹配
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckSsgdmkhxxtx(string gj, string spmc, string shdw, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from t_ssgdmkhxxtx where  shdw = @shdw and gj= @gj and( isnull(spmc,'') ='' or isnull(spmc,'')= @spmc) ");
                cmd.Parameters.Add(new SqlParameter("@gj", gj));
                cmd.Parameters.Add(new SqlParameter("@spmc", spmc));
                cmd.Parameters.Add(new SqlParameter("@shdw", shdw));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //判断生鲜港代卖商品信息提醒是否匹配
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int CheckGjspEczsbz(string gj, string spmc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_cpxxk where ctr_ename= @gj and spbm = @spmc and isnull(eczsbz,'N') = 'Y'");
                cmd.Parameters.Add(new SqlParameter("@gj", gj));
                cmd.Parameters.Add(new SqlParameter("@spmc", spmc));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //查验放行批量生成异常原因
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Cyfxplsc(string ywbh, string zbr, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand(" insert yw_hddz_ycyy(zbr,zbrq,ycyybm,ycyymc,ywbh) values(@zbr,getdate(),'030115','海关查验',@ywbh)  ");

                cmd.Parameters.Add(new SqlParameter("@zbr", zbr));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                ;
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetSpxx(string spmc, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select yw_spbm,spzwmc,spywmc,hgbm,isnull(spgg,''),isnull(t_hgsh.jldw,''),isnull(jldw_e,''),isnull(sjjldw,''),isnull(sfysx,'N'),isnull(sfygzfs,'N'),isnull(sfypz,'N'),isnull(sfydj,'N'),isnull(sfybzgg,'N'),isnull(sfypp,'N'),isnull(sfygg,'N'),isnull(sfycf,'N'),isnull(sfyxjgjggy,'N'),isnull(sfzy,'N'),isnull(sfyqt,'') from yw_commodity,t_hgsh where yw_commodity.hgbm = t_hgsh.hs_code and spywmc like '%'+@spmc+'%'");
                cmd.Parameters.Add(new SqlParameter("@spmc", spmc));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[19];
                    int i = 0;
                    for (i = 0; i <= 18; i++)
                    {
                        str = rs.GetString(i);

                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //读取企业海关代码
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string ReadWldwMc(string yw_khbm, ref string khmc)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select max(khmc) from yw_wldw  Where yw_khbm = isnull(@yw_khbm,'') ");
                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    khmc = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return khmc;
        }

        //读取国家原产地
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetYcd(string ycd, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(ctr_ename,''),isnull(ctr_hgcode,''),isnull(yzbh,''),dqdm = (select max(dqdm) from t_area2 where ctr_area2 = t_country.ctr_area2),isnull(ctr_area2,'') from t_country  where ctr_hgcode = @ycd");
                cmd.Parameters.Add(new SqlParameter("@ycd", ycd));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[4];
                    int i = 0;
                    for (i = 0; i < 4; i++)
                    {
                        str = rs.GetString(i);

                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //读取启运港
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        static public string[] GetQyg(string qyg, ref string[] tmpStr)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(ename,'')+ ', '+  isnull(ctr_ename,'') ,isnull(hggkdm,''),isnull(sjgkdm,'')  FROM t_port,t_country where  ctr_no *= ctr_code and ename like '%'+@qyg+'%'");
                cmd.Parameters.Add(new SqlParameter("@qyg", qyg));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string str = null;
                    tmpStr = new string[3];
                    int i = 0;
                    for (i = 0; i < 3; i++)
                    {
                        str = rs.GetString(i);
                        tmpStr.SetValue(str, i);
                    }
                    rs.Close();
                }

            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return tmpStr;
        }

        //执行存储过程计算     
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Ccgc(string sql_string, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand updatecmd = null;
            try
            {

                updatecmd = dbHelp.GetCommand("exec @sql_string");
                updatecmd.Parameters.Add(new SqlParameter("@sql_string", sql_string));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新插入生鲜港标志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateTbsxgbz(string ywbh, string scsxgbz, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set scsxgbz = @scsxgbz from yw_hddz Where ywbh=@ywbh   ");

                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@scsxgbz", scsxgbz));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //获取最大亿通数据接口编号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int GetYtsjjkbh(ref int jkbh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("select isnull(max(jkbh),0) from yw_hddz_ytsjjk_master");
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    jkbh = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return jkbh;
        }

        //添加亿通数据接口编号master
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Addytsjjkbh_master(int jkbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("insert into yw_hddz_ytsjjk_master(jkbh,crsj) values(@jkbh,getdate())");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //添加亿通数据接口编号fsdz
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Addytsjjkbh_fsdz(int jkbh, int xh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("insert into yw_hddz_ytsjjk_fsdz(jkbh,crsj,xh) values(@jkbh,getdate(),@xh)");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //添加亿通数据接口编号jzxxx
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Addytsjjkbh_jzxxx(int jkbh, int xh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("insert into yw_hddz_ytsjjk_jzxxx(jkbh,crsj,xh) values(@jkbh,getdate(),@xh)");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //添加亿通数据接口编号spxx
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Addytsjjkbh_spxx(int jkbh, int xh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("insert into yw_hddz_ytsjjk_spxx(jkbh,crsj,xh) values(@jkbh,getdate(),@xh)");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新亿通数据接口编号master
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Updateytsjjkbh_master(int jkbh, string str, string str2, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ytsjjk_master set " + str + "=@str2 where jkbh=@jkbh");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@str2", str2));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新亿通数据接口编号master_int类型
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Updateytsjjkbh_master_int(int jkbh, string str, int str2, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ytsjjk_master set " + str + "=@str2 where jkbh=@jkbh");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@str2", str2));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新亿通数据接口编号fsdz
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Updateytsjjkbh_fsdz(int jkbh, string str, string str2, int xh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ytsjjk_fsdz set " + str + "=@str2 where jkbh=@jkbh and xh=@xh");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@str2", str2));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新亿通数据接口编号jzxxx
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Updateytsjjkbh_jzxxx(int jkbh, string str, string str2, int xh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ytsjjk_jzxxx set " + str + "=@str2 where jkbh=@jkbh and xh=@xh");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@str2", str2));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新亿通数据接口编号spxx
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Updateytsjjkbh_spxx(int jkbh, string str, string str2, int xh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ytsjjk_spxx set " + str + "=@str2 where jkbh=@jkbh and xh=@xh");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@str2", str2));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新亿通数据接口编号spxx_int类型
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Updateytsjjkbh_spxx_int(int jkbh, string str, int str2, int xh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_ytsjjk_spxx set " + str + "=@str2 where jkbh=@jkbh and xh=@xh");
                cmd.Parameters.Add(new SqlParameter("@jkbh", jkbh));
                cmd.Parameters.Add(new SqlParameter("@str2", str2));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新海运报关红通道
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateHybgHtd(string ywbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set htd='Y',htd_rq=getdate() where ywbh=@ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新亿通数据接口编号spxx
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Insert_ycclzt(string ywbh, string cllx, string lxz, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                if (lxz == "Y")
                {
                    cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_ycgz_clbz( ywbh,yclx,clsj,clry ) VALUES ( @ywbh,@cllx,getdate(),@userid)");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@userid", userid));
                    cmd.Parameters.Add(new SqlParameter("@cllx", cllx));
                }
                else
                {
                    cmd = dbHelp.GetCommand("delete from  yw_hddz_ycgz_clbz where ywbh = @ywbh and yclx =@cllx");
                    cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                    cmd.Parameters.Add(new SqlParameter("@cllx", cllx));
                }

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //获取亿通数据接口master表字段新值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_master(string ywbh, string zdm, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(CAST(" + zdm + " AS varchar),'') from yw_hddz where ywbh=@ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口master表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_master_zzgkdm(string ywbh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select zzgkdm = isnull((select isnull(max(hggkdm),'') from t_port where ename = yw_hddz.zzgk),'') FROM yw_hddz WHERE yw_hddz.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口master表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public Decimal GetYtsjjk_master_kpje(string ywbh, ref Decimal str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(sum(yw_hddz_sdzpgl_cmd.kpje),'') from yw_hddz_sdzpgl,yw_hddz_sdzpgl_cmd where yw_hddz_sdzpgl.fph = yw_hddz_sdzpgl_cmd.fph and yw_hddz_sdzpgl_cmd.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetDecimal(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口master表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_master_kpbz(string ywbh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(max(kpbz),'') from yw_hddz_sdzpgl,yw_hddz_sdzpgl_cmd where yw_hddz_sdzpgl.fph = yw_hddz_sdzpgl_cmd.fph and yw_hddz_sdzpgl_cmd.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口master表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_master_jydwtyxydm(string ywbh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select jydwtyxydm=isnull((select isnull(szhm,'') from yw_wldw where khbm = yw_hddz.jydwdm and len(khbm) > 0),'') FROM yw_hddz WHERE yw_hddz.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口master表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_master_sbdwtyxydm(string ywbh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select sbdwtyxydm=isnull((select isnull(szhm,'') from yw_wldw where khbm = yw_hddz.sbdwdm  and len(khbm) > 0),'') FROM yw_hddz WHERE yw_hddz.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口master表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_master_shdwtyxydm(string ywbh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select shdwtyxydm=isnull((select isnull(szhm,'') from yw_wldw where khbm = yw_hddz.shdwdm  and len(khbm) > 0),'') FROM yw_hddz WHERE yw_hddz.ywbh = @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口jzxxx表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_jzxxx(string ywbh, string zdm, int xh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(CAST(" + zdm + " AS varchar),'') from yw_hddz_jzxxx where ywbh=@ywbh and isnull(cxh,'')=@xh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口spxx表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_spxx(string ywbh, string zdm, int xh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(CAST(" + zdm + " AS varchar),'') from yw_hddz_spxx where ywbh=@ywbh and isnull(cxh,'')=@xh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口spxx表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_spxx_jldw_jsl(string ywbh, int xh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select jldw_jsl=isnull((select max(sjjldw) from t_jldw where used_flag = 'Y'   and  ename = yw_hddz_spxx.jldw),'') FROM yw_hddz_spxx WHERE yw_hddz_spxx.ywbh = @ywbh and isnull(cxh,'')=@xh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //获取亿通数据接口fsdz表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetYtsjjk_fsdz(string ywbh, string zdm, int xh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select isnull(CAST(" + zdm + " AS varchar),'') from yw_hddz_fsdz where ywbh=@ywbh and isnull(cxh,'')=@xh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@xh", xh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //更新加急标志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateJsbz(string ywbh, string jsbz, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set jsbz= @jsbz,htd_rq=getdate() where ywbh=@ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@jsbz", jsbz));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新空运产地证跟踪是否选中标志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateKycdzgzYorN(string zdm, string sfxz, string hth, string ywbh, string zbmc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                string str_szlx = "";
                string str_sfbqk = "";
                if (zdm == "xcsdbz")
                {
                    str_szlx = "随机收证";
                    str_sfbqk = "正本";
                }
                else if (zdm == "sfsdzb")
                {
                    str_szlx = "办公室收证";
                    str_sfbqk = "正本";
                }
                else if (zdm == "sfsdfb")
                {
                    str_szlx = "随机收证副本";
                    str_sfbqk = "副本";
                }

                if (zbmc == "cdz")
                {
                    zbmc = "原产地证";
                }
                else if (zbmc == "zjz")
                {
                    zbmc = "植检证";
                }
                StringBuilder str = new StringBuilder("");
                if (str_sfbqk == "正本")
                {
                    str.Append("update yw_hddz_dzyq set " + zdm + "= @sfxz,sdzbsj=getdate(),sdzbry=@userid from yw_hddz,yw_hddz_dzyq where yw_hddz_dzyq.dzmc=@zbmc and yw_hddz_dzyq.ywbh=yw_hddz.ywbh and yw_hddz.hth=@hth ");
                }
                else
                {
                    str.Append("update yw_hddz_dzyq set " + zdm + "= @sfxz,sdfbsj=getdate(),sdfbry=@userid from yw_hddz,yw_hddz_dzyq where yw_hddz_dzyq.dzmc=@zbmc and yw_hddz_dzyq.ywbh=yw_hddz.ywbh and yw_hddz.hth=@hth ");
                }

                if (sfxz == "N")
                {
                    str.Append("update yw_hddz set dzqk='未收到单证;' from yw_hddz where hth=@hth ");
                }
                else
                {
                    str.Append("update yw_hddz set dzqk='已收齐;' from yw_hddz where hth=@hth ");
                }
                str.Append("insert into yw_hddz_kycdzgz_zzjc_beizhu(zbr,zbrmc,checkdate,checkif,szlx,hth,zfbqk,zbmc) values(@userid,(select name from Sys_Users where ID=@userid),getdate(),@sfxz,@str_szlx,@hth,@str_sfbqk,@zbmc)");

                str.Append(" insert into s_log_err ( eid,tablename,mainid,cjsj,cscs,sfcg,funname) values ( 'kydz'+ CONVERT(varchar(100), GETDATE(), 113)+@czy,'yw_hddz_dzyq',@ywbh,getdate(),0,0,'DataToFreshPort')");

                cmd = dbHelp.GetCommand(str.ToString());
                cmd.Parameters.Add(new SqlParameter("@sfxz", sfxz));
                cmd.Parameters.Add(new SqlParameter("@hth", hth));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@str_szlx", str_szlx));
                cmd.Parameters.Add(new SqlParameter("@str_sfbqk", str_sfbqk));
                cmd.Parameters.Add(new SqlParameter("@czy", userid));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@zbmc", zbmc));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //空运产地证寄出是否选中
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateKycdzgzJcYorN(string zdm, string sfxz, string hth, string ywbh, string dzmc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                if (dzmc == "cdz")
                {
                    dzmc = "原产地证";
                }
                else if (dzmc == "zjz")
                {
                    dzmc = "植检证";
                }
                StringBuilder str = new StringBuilder("");

                str.Append("update yw_hddz_dzyq set " + zdm + "= @sfxz from yw_hddz,yw_hddz_dzyq where yw_hddz_dzyq.ywbh=yw_hddz.ywbh and yw_hddz.hth=@hth and dzmc = @dzmc ");


                cmd = dbHelp.GetCommand(str.ToString());
                cmd.Parameters.Add(new SqlParameter("@sfxz", sfxz));
                cmd.Parameters.Add(new SqlParameter("@hth", hth));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@czy", userid));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@dzmc", dzmc));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //空运产地证备注
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateKycdzbz(string hth, string ywbh, string bz, string dzmc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                if (dzmc == "cdz")
                {
                    dzmc = "原产地证";
                }
                else if (dzmc == "zjz")
                {
                    dzmc = "植检证";
                }
                StringBuilder str = new StringBuilder("");

                str.Append("update yw_hddz_dzyq set bz= @bz from yw_hddz,yw_hddz_dzyq where yw_hddz_dzyq.ywbh=yw_hddz.ywbh and yw_hddz.hth=@hth and dzmc = @dzmc ");


                cmd = dbHelp.GetCommand(str.ToString());

                cmd.Parameters.Add(new SqlParameter("@bz", bz));
                cmd.Parameters.Add(new SqlParameter("@hth", hth));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@czy", userid));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@dzmc", dzmc));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //空运产地证单证编号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateKyzjzDzbh(string hth, string ywbh, string dzbh, string dzmc, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                if (dzmc == "cdz")
                {
                    dzmc = "原产地证";
                }
                else if (dzmc == "zjz")
                {
                    dzmc = "植检证";
                }
                StringBuilder str = new StringBuilder("");

                str.Append("update yw_hddz_dzyq set dzbh = @dzbh from yw_hddz,yw_hddz_dzyq where yw_hddz_dzyq.ywbh=yw_hddz.ywbh and yw_hddz.hth=@hth and dzmc = @dzmc ");

                cmd = dbHelp.GetCommand(str.ToString());

                cmd.Parameters.Add(new SqlParameter("@hth", hth));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@czy", userid));
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@dzmc", dzmc));
                cmd.Parameters.Add(new SqlParameter("@dzbh", dzbh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //添加空运换单是否有仓储费
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int InsertHddzKyCf(string ywbh, string sfyccf, string beizhu, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand(" insert into yw_hddz_kyhd(ywbh,cxh,sfyccf,beizhu) values(@ywbh,1,isnull(@sfyccf,'N'),isnull(@beizhu,''))");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@sfyccf", sfyccf));
                cmd.Parameters.Add(new SqlParameter("@beizhu", beizhu));
                ;
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新空运换单是否有仓储费
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateHddzKyCf(string ywbh, int cxh, string sfyccf, string beizhu, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_kyhd set sfyccf = @sfyccf,beizhu = @beizhu from yw_hddz_kyhd where ywbh=@ywbh and cxh = @cxh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@sfyccf", sfyccf));
                cmd.Parameters.Add(new SqlParameter("@beizhu", beizhu));
                cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新车队配货签到时间
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateCdphQdsj(DateTime sj, string cdphbm, string sjshrbm, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                string strSql = "update yw_hddz_tpcdxx set qdsj=@sj,djqdsj=getdate(),qssj_lrsj=getdate(),qssj_czry=@userid where cdphbm=@cdphbm and sjshrbm=@sjshrbm;";
                strSql += "INSERT INTO s_log_err(eid,tablename,mainid,funname) VALUES('kpmx'+@userid+newid(),'yw_hddz_tpcdxx',@cdphbm,'DataToFreshPort')";
                cmd = dbHelp.GetCommand(strSql);
                cmd.Parameters.Add(new SqlParameter("@sj", sj));
                cmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
                cmd.Parameters.Add(new SqlParameter("@sjshrbm", sjshrbm));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    this.serialNumber("kpmx", cdphbm, "yw_hddz_tpcdxx", null);
                    num = 1;

                    //// 同步生鲜港
                    //Thread t1 = new Thread(new ThreadStart(delegate
                    //{
                    //string strErr;
                    //HddzIF serv = new HddzIF();
                    //Interfaces.GeneralPortal.DataToFreshPort("yw_hddz_tpcdxx", null, cdphbm, out strErr);

                    //}));
                    //t1.IsBackground = true;
                    //t1.Start();


                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //获取亿通数据接口master表字段值
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Kysfph(string ywbh, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select case when count(*) > 0 then 'Y' else 'N' end  FROM  yw_hddz_tpcdxx WHERE ywbh = @ywbh ");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //撤销非业务费用
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateFywfy(string sqdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_fksqd set state = '新制' from yw_hddz_fksqd where sqdbh = @sqdbh");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //单证状态查询
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string SelectDzzt(string ywbh, string str1, ref string num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                StringBuilder str = new StringBuilder("");
                str.Append("update yw_hddz set dzqk= (select case when COUNT(*)=0 then '无需单证;' ");
                str.Append("when sum(case when isnull(yw_hddz_dzyq.sfsdzb,'N')='N' and isnull(yw_hddz_dzyq.sfsdfb,'N')='N' then 1 else 0 end)=COUNT(*) then '未收到单证;' ");
                str.Append("when sum(case when ((isnull(zfbqk,'')='正本' and isnull(yw_hddz_dzyq.sfsdzb,'N')='Y') or ((isnull(zfbqk,'')='副本' or (isnull(zfbqk,'')!='正本' and isnull(zfbqk,'未知')!='未知')) and (isnull(yw_hddz_dzyq.sfsdzb,'N')='Y' or isnull(yw_hddz_dzyq.sfsdfb,'N')='Y'))) then 1 else 0 end)=COUNT(*) then '已收齐;' ");
                str.Append("else @str end ");
                str.Append("from yw_hddz,yw_hddz_dzyq where yw_hddz.ywbh=yw_hddz_dzyq.ywbh and yw_hddz.ywbh=aa.ywbh) from yw_hddz as aa where aa.ywbh=@ywbh");

                cmd = dbHelp.GetCommand(str.ToString());
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@str", str1));

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    num = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新签收时间
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateQdsj(string cdphbm, DateTime cjydsj, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_tpcdxx set qdsj= @cjydsj from yw_hddz_tpcdxx where cdphbm=@cdphbm");
                cmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
                cmd.Parameters.Add(new SqlParameter("@cjydsj", cjydsj));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    this.serialNumber("kyqd", cdphbm, "yw_hddz_tpcdxx", "qdsj");
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新签收时间
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateQdsjywbh(string ywbh, DateTime cjydsj, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_tpcdxx set qdsj= @cjydsj from yw_hddz_tpcdxx where ywbh=@ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@cjydsj", cjydsj));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    this.serialNumber("kyqd", ywbh, "yw_hddz_tpcdxx", "qdsj");
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新打印状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateDyzt(string sqdbh, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_fksqd set sfdy= 'Y' from yw_hddz_fksqd where sqdbh=@sqdbh");
                cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //传输客户地址判断是否存在，如果对应客户里面没有这个收货地址，则自动加入
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int Pdshdzbcr(String yw_khbm, string shdz, string dz_sf, string dz_dq, string dz_lm, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            DBHelp dbHelp_insert = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand cmd_insert = null;
            var userid = AppService.GetUserID();

            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_wldw_gnkh_shdz where yw_khbm=@yw_khbm and shdz=@shdz and dz_sf=@dz_sf and dz_dq=@dz_dq and dz_lm=@dz_lm ");
                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                cmd.Parameters.Add(new SqlParameter("@shdz", shdz));
                cmd.Parameters.Add(new SqlParameter("@dz_sf", dz_sf));
                cmd.Parameters.Add(new SqlParameter("@dz_dq", dz_dq));
                cmd.Parameters.Add(new SqlParameter("@dz_lm", dz_lm)); 

                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    var aa = rs.GetInt32(0);
                    if (aa == 0)
                    {

                        cmd_insert = dbHelp_insert.GetCommand("INSERT INTO yw_wldw_gnkh_shdz( yw_khbm,cxh,lrry,lrrq,shdz, hymr,kymr,sfgx,dz_sf,dz_dq,dz_lm ) VALUES ( @yw_khbm, (select isnull(max(cxh),0)+1 from yw_wldw_gnkh_shdz a where a.yw_khbm = @yw_khbm),@userid,getdate(),@shdz,'Y','N','N',@dz_sf,@dz_dq,@dz_lm )");
                        cmd_insert.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                        cmd_insert.Parameters.Add(new SqlParameter("@shdz", shdz));
                        cmd_insert.Parameters.Add(new SqlParameter("@dz_sf", dz_sf));
                        cmd_insert.Parameters.Add(new SqlParameter("@dz_dq", dz_dq));
                        cmd_insert.Parameters.Add(new SqlParameter("@dz_lm", dz_lm)); 
                        cmd_insert.Parameters.Add(new SqlParameter("@userid", userid));
                        if (cmd_insert.ExecuteNonQuery() > 0)
                        {
                            dbHelp_insert.Commit();
                            num = 1;
                        }
                        else
                        {
                            dbHelp_insert.Rollback();
                        };
                        num = 0;
                    }
                    else
                    {
                        num = 0;
                    }

                }

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

            return num;
        }

        //更新区港联动
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateQgld(string ywbh, string qgld, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                if (qgld == "Y")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz set qgld= 'N' from yw_hddz where ywbh=@ywbh");
                }
                else
                {
                    cmd = dbHelp.GetCommand("update yw_hddz set qgld= 'Y' from yw_hddz where ywbh=@ywbh");
                }
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新洋山普通
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateYspt(string ywbh, string qgld, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                if (qgld == "G")
                {
                    cmd = dbHelp.GetCommand("update yw_hddz set qgld= 'N' from yw_hddz where ywbh=@ywbh");
                }
                else
                {
                    cmd = dbHelp.GetCommand("update yw_hddz set qgld= 'G' from yw_hddz where ywbh=@ywbh");
                }
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //private string ftpServerIP = "192.168.1.1";//服务器ip  
        private string ftpUserID = "EMVSOHGJ";//用户名  
        private string ftpPassword = "EMVS370";//密码  

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void UploadYTJK(string fileName, string ftpPath)
        {
            //FTP地址  
            ftpPath = "ftp://61.152.176.30/" + ftpPath;
            //本机要上传的目录的父目录  
            //string localPath = "D:\\XML\\";

            //file 如果是文件，则调用[上传文件]方法  
            //UpLoadFile(localPath + fileName, ftpPath);
            UpLoadFile(fileName, ftpPath);
        }

        #region 上传文件

        /// <summary>  
        /// 上传文件  
        /// </summary>  
        /// <param name="localFile">要上传到FTP服务器的本地文件</param>  
        /// <param name="ftpPath">FTP地址</param>  
        public void UpLoadFile(string localFile, string ftpPath)
        {
            if (!File.Exists(localFile))
            {
                //Response.Write("文件：“" + localFile + "” 不存在！");
                //return;
            }
            FileInfo fileInf = new FileInfo(localFile);
            string uri = ftpPath + fileInf.Name;
            FtpWebRequest reqFTP;

            reqFTP = (FtpWebRequest)FtpWebRequest.Create(uri);// 根据uri创建FtpWebRequest对象   
            reqFTP.Credentials = new NetworkCredential(ftpUserID, ftpPassword);// ftp用户名和密码  
            reqFTP.KeepAlive = false;// 默认为true，连接不会被关闭 // 在一个命令之后被执行  
            reqFTP.Method = WebRequestMethods.Ftp.UploadFile;// 指定执行什么命令  
            reqFTP.UseBinary = true;// 指定数据传输类型  
            reqFTP.ContentLength = fileInf.Length;// 上传文件时通知服务器文件的大小  
            int buffLength = 2048;// 缓冲大小设置为2kb  
            byte[] buff = new byte[buffLength];
            int contentLen;

            // 打开一个文件流 (System.IO.FileStream) 去读上传的文件  
            FileStream fs = fileInf.OpenRead();
            try
            {
                Stream strm = reqFTP.GetRequestStream();// 把上传的文件写入流  
                contentLen = fs.Read(buff, 0, buffLength);// 每次读文件流的2kb  

                while (contentLen != 0)// 流内容没有结束  
                {
                    // 把内容从file stream 写入 upload stream  
                    strm.Write(buff, 0, contentLen);
                    contentLen = fs.Read(buff, 0, buffLength);
                }
                // 关闭两个流  
                strm.Close();
                fs.Close();
                //Response.Write("文件【" + ftpPath + "/" + fileInf.Name + "】上传成功！<br/>");
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
        }
        #endregion

        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void DownFile(string SaveFileName, string ServerFileName)
        {
            try
            {
                string fileName = "D:\\sdxz\\" + SaveFileName;//客户端保存的文件名
                string filePath = Server.MapPath("~/wenjian/CIQ TAX/" + SaveFileName);//路径

                //以字符流的形式下载文件
                FileStream fs = new FileStream(filePath, FileMode.Open);
                byte[] bytes = new byte[(int)fs.Length];
                fs.Read(bytes, 0, bytes.Length);
                fs.Close();
                System.Web.HttpContext.Current.Response.ContentType = "application/octet-stream";
                System.Web.HttpContext.Current.Response.Charset = "GB2312";
                //通知浏览器下载文件而不是打开
                System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;   filename=" + HttpUtility.UrlEncode(fileName, System.Text.Encoding.UTF8));
                System.Web.HttpContext.Current.Response.BinaryWrite(bytes);
                System.Web.HttpContext.Current.Response.Flush();
                //System.Web.HttpContext.Current.Response.End();
                HttpContext.Current.ApplicationInstance.CompleteRequest();
                //System.Web.HttpContext.Current.Response.Clear();


            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
        }

        #region 插入生成流水号
        /// <summary>
        /// 往s_log_err插入流水号
        /// </summary>
        /// <param name="strName">模块名</param>
        /// <param name="ywbh">业务编号</param>
        /// <param name="tableName">插入的表名</param>
        /// <param name="fieldName">插入字段名</param>
        /// <returns>是否执行成功</returns>
        public bool serialNumber(string strName, string ywbh, string tableName, string fieldName)
        {

            //s_log_err插入maxid
            string userID = AppService.GetUserID();
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = new SqlCommand();
            DataSet ds = new DataSet();
            string sqlstr = "";
            string maxid = "";
            string insertStr = "";
            string insertMaxid = "";
            string sqlinsert = "";
            bool flag = false;
            try
            {
                //查询最大流水号
                sqlstr = string.Format("select max(right(eid,8)) as maxid from s_log_err where datediff(dd,cjsj,getdate()) = 0 and left(eid,8) = '{0}{1}' and len(eid) = 24;", strName, userID);

                ds = dbHelp.Query(sqlstr);

                maxid = ds.Tables[0].Rows[0]["maxid"].ToString().Trim();

                //流水号格式:xxxx+yyyymmdd+userid+00000000
                insertStr = strName + userID + string.Format("{0:yyyyMMdd}", DateTime.Now);

                //流水号
                if (maxid == "" || maxid == null)
                {
                    insertMaxid = insertStr + "00000001";
                }
                else
                {
                    int num = int.Parse(maxid);
                    num += 1;
                    insertMaxid = insertStr + num.ToString("d8");
                }

                sqlinsert = string.Format("INSERT INTO s_log_err (eid,tablename,changecols,mainid,cjsj,cscs,sfcg,funname) VALUES ('{0}','{1}','{2}','{3}',getdate(),0,0,'DataToFreshPort');", insertMaxid, tableName, fieldName, ywbh);
                cmd = dbHelp.GetCommand(sqlinsert);
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    flag = true;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
                flag = false;
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return flag;
        }
        #endregion

        //更新报检颜色
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateBjys(string tdh, string ys, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set bjys=@ys from yw_hddz where tgdh like @tdh+'%'");
                cmd.Parameters.Add(new SqlParameter("@tdh", tdh));
                cmd.Parameters.Add(new SqlParameter("@ys", ys));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //根据税金抬头读取是否是加急业务标志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Wldw_Sfsjjyw(string shdwdm, ref string sfsjjyw)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select max(sfsjjyw) from yw_wldw where yw_khbm = @shdwdm");
                cmd.Parameters.Add(new SqlParameter("@shdwdm", shdwdm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    sfsjjyw = rs.GetString(0);
                    rs.Close();
                }
            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return sfsjjyw;
        }

        //二次归集后利润查询中的确认标志修改
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public void QrbzGg(string ywbh, string jzxh)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz_jzxxx set lrcx_qrbz = 'N' where ywbh = @ywbh and jzxh = @jzxh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@jzxh", jzxh));

                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();

                }
                else
                {
                    dbHelp.Rollback();
                }

            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }

        }

        //更新无需归集
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int UpdateWxgj(string ywbh, string wxgj, ref int num)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            var userid = AppService.GetUserID();
            if (wxgj == "Y")
            {
                wxgj = "Y";
            }
            else
            {
                wxgj = "N";
            }
            try
            {
                cmd = dbHelp.GetCommand("update yw_hddz set wxgj=@wxgj from yw_hddz where ywbh =@ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                cmd.Parameters.Add(new SqlParameter("@wxgj", wxgj));
                if (cmd.ExecuteNonQuery() > 0)
                {
                    dbHelp.Commit();
                    num = 1;
                }
                else
                {
                    dbHelp.Rollback();
                }
            }

            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //查询无需归集
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string SelectWxgj(string ywbh, ref string wxgj)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select case when max(wxgj)!=null then CONVERT(nvarchar(20), max(wxgj)) else '0' end from yw_hddz where yw_hddz.ywbh= @ywbh");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    wxgj = rs.GetString(0);
                    rs.Close();
                }
            }

            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return wxgj;
        }

        //执行存储过程计算
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string p_hddz_skhx_select_sjk(string jsdwbm, int cxh, string fydlbm, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("p_hddz_skhx_select_sjk");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@jsdwbm", jsdwbm));
                cmd.Parameters.Add(new SqlParameter("@cxh", cxh));
                cmd.Parameters.Add(new SqlParameter("@fydlbm", fydlbm));

                if (cmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //执行存储过程计算  --数据导入税金管理 ---  撤回
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string DeleteSjdr(string sjdrbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("p_hddz_Deletesjzf");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@sjdrbh", sjdrbh));

                if (cmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //执行存储过程计算  --数据导入提交到税金管理
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetTJSJGL(string sjdrbh, ref string num,string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("p_hddz_sjzf");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@sjdrbh", sjdrbh));
                if (cmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //申报审批生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdJzxxx_bp(string sqdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {


                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = '待批',spjc ='未审批',sqrq = getdate(),spry = null  from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
        //数据导入  提交
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string getState(string sjdrbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {


                updatecmd = dbHelp.GetCommand("update yw_hddz_sjdr set state = '提交' where sjdrbh = @sjdrbh");
                updatecmd.Parameters.Add(new SqlParameter("@sjdrbh", sjdrbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }
       


        //审批通过生成集装箱付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdJzxxx_sp(string sqdbh, string spry, string state, string spjc, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {

                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (delcmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                }
                else
                {
                    dbHelp.Rollback();
                };


                if (state == "批准" || state == "提交")
                {
                    updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                    updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                    if (updatecmdmx.ExecuteNonQuery() >= 0)
                    {
                        dbHelp.Commit();
                    }
                    else
                    {
                        dbHelp.Rollback();
                        return "0";
                    };

                    cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                     "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                     "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                    "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                    "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                    " getdate(),yw_hddz_jzxxx.cxh,t_fylx.skfs " +
                     "FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                    "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh     and (( yw_hddz_fksqd_cmd.jzxh = yw_hddz_jzxxx.jzxh  and  len(yw_hddz_fksqd_cmd.jzxh ) >0)  or ( yw_hddz_fksqd_cmd.tpxx = yw_hddz_jzxxx.tpxx  and  yw_hddz_fksqd_cmd.zhlx = yw_hddz_jzxxx.zhlx  and len(yw_hddz_fksqd_cmd.zhlx ) >0)  or  len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 )  and " +
                     "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");


                    cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                    if (cmd.ExecuteNonQuery() > 0)
                    {
                        dbHelp.Commit();

                    }
                    else
                    {
                        dbHelp.Rollback();
                    };

                };

                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = @state,spjc = @spjc,sqrq = getdate(),spry = @spry from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                updatecmd.Parameters.Add(new SqlParameter("@spjc", spjc));
                updatecmd.Parameters.Add(new SqlParameter("@spry", spry));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //生成空运付款明细信息
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdKyJzxxx_sp(string sqdbh, string spry, string state, string spjc, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {

                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (delcmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    num = "0";
                };
                if (state == "批准" || state == "提交")
                {
                    updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                    updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                    cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                       "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                       "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                      "yw_hddz_jzxxx.jzxh,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                      "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                      " getdate(),yw_hddz_jzxxx.cxh,t_fylx.skfs " +
                       "FROM yw_hddz_fksqd_cmd,yw_hddz_jzxxx,t_fylx " +
                      "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and yw_hddz_fksqd_cmd.ywbh = yw_hddz_jzxxx.ywbh  and  yw_hddz_fksqd_cmd.tpxx = yw_hddz_jzxxx.tpxx  and yw_hddz_fksqd_cmd.zhlx = yw_hddz_jzxxx.zhlx  and " +
                       "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");

                    cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                    if (updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0)
                    {
                        dbHelp.Commit();
                        num = "1";
                    }
                    else
                    {
                        dbHelp.Rollback();
                        num = "0";
                    };
                }
                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = @state,spjc = @spjc,sqrq = getdate(),spry = @spry from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                updatecmd.Parameters.Add(new SqlParameter("@spjc", spjc));
                updatecmd.Parameters.Add(new SqlParameter("@spry", spry));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    num = "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }



        //生成空运提单付款明细信息 k
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GenFksqdKytd_sp(string sqdbh, string spry, string state, string spjc, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            SqlCommand updatecmd = null;
            SqlCommand updatecmdmx = null;
            SqlCommand delcmd = null;
            try
            {

                delcmd = dbHelp.GetCommand("delete from  yw_hddz_fksqd_jzxxx where sqdbh=@sqdbh ");
                delcmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                if (delcmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    num = "0";
                };
                if (state == "批准" || state == "提交")
                {
                    updatecmdmx = dbHelp.GetCommand("update yw_hddz_fksqd_cmd set tjrq  = getdate() from  yw_hddz_fksqd_cmd where sqdbh=@sqdbh");
                    updatecmdmx.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));

                    cmd = dbHelp.GetCommand("INSERT INTO yw_hddz_fksqd_jzxxx " +
                       "( sqdbh,cxh,yfkdbh,ywbh,jzxh,fybm,fymc,je,cfrq ,cxh_hddz,skfs) " +
                       "SELECT yw_hddz_fksqd_cmd.sqdbh,row_number() over(order by yw_hddz_fksqd_cmd.cxh asc),yw_hddz_fksqd_cmd.yfkdbh,yw_hddz_fksqd_cmd.ywbh, " +
                      "null,yw_hddz_fksqd_cmd.fybm,yw_hddz_fksqd_cmd.fymc, " +
                      "je = case when len(yw_hddz_fksqd_cmd.hz_jzxh) > 0 and isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) >0 then  yw_hddz_fksqd_cmd.je /isnull(jzxsl,yw_hddz_fksqd_cmd.tpxx) else  yw_hddz_fksqd_cmd.je end , " +
                      " getdate(),yw_hddz_fksqd_cmd.hddz_cxh,t_fylx.skfs " +
                       "FROM yw_hddz_fksqd_cmd,t_fylx " +
                      "WHERE yw_hddz_fksqd_cmd.fybm = t_fylx.fybm and  " +
                       "yw_hddz_fksqd_cmd.sqdbh = @sqdbh ");

                    cmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                    if (updatecmdmx.ExecuteNonQuery() >= 0 && cmd.ExecuteNonQuery() > 0)
                    {
                        dbHelp.Commit();
                        num = "1";
                    }
                    else
                    {
                        dbHelp.Rollback();
                        num = "0";
                    };
                }
                updatecmd = dbHelp.GetCommand("update yw_hddz_fksqd set state  = @state,spjc = @spjc,sqrq = getdate(),spry = @spry from  yw_hddz_fksqd where sqdbh=@sqdbh");
                updatecmd.Parameters.Add(new SqlParameter("@sqdbh", sqdbh));
                updatecmd.Parameters.Add(new SqlParameter("@state", state));
                updatecmd.Parameters.Add(new SqlParameter("@spjc", spjc));
                updatecmd.Parameters.Add(new SqlParameter("@spry", spry));

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    num = "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //更新北斗设备号里最新的车牌号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string BdsbhCph(string bdyssbh, string cph, string cdphbm, string rwbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {


                updatecmd = dbHelp.GetCommand("update yw_hddz_bdsbwh set zxcph  = ( case when zxcph ='沪A00000' then zxcph else null end)  from  yw_hddz_bdsbwh where zxcph=@cph; update yw_hddz_bdsbwh set zxcph  = @cph  from  yw_hddz_bdsbwh where bdyssbh=@bdyssbh;  update yw_hddz_wlgz set bdyssbh  = null,bdsbh = null  from  yw_hddz_wlgz where (bdyssbh=@bdyssbh or cph = @cph) and rwbh <> @rwbh;  update yw_hddz_kycd set bdyssbh  = null,bdsbh = null  from  yw_hddz_kycd where (bdyssbh=@bdyssbh or cph = @cph) and cdphbm <> isnull(@cdphbm,'');update t_sj set bdsbh=null,bdyssbh=null from t_sj where bdyssbh=@bdyssbh and cph!=@cph;");
                updatecmd.Parameters.Add(new SqlParameter("@cph", cph));
                updatecmd.Parameters.Add(new SqlParameter("@bdyssbh", bdyssbh));
                updatecmd.Parameters.Add(new SqlParameter("@cdphbm", cdphbm));
                updatecmd.Parameters.Add(new SqlParameter("@rwbh", rwbh));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    num = "0";
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //


        //更新北斗设备号里最新的车牌号
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string UpdateCph( string cph,string sfybd, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {


                updatecmd = dbHelp.GetCommand("update t_sj set bdsbh=null,sfybd= @sfybd from t_sj where cph!=@cph;");
                updatecmd.Parameters.Add(new SqlParameter("@cph", cph));
                updatecmd.Parameters.Add(new SqlParameter("@sfybd", sfybd)); 
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    num = "0";
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //


        //更新检疫点标志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string UpdateJzxxxXccy(string ywbh, string xccy, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {


                updatecmd = dbHelp.GetCommand("update yw_hddz_jzxxx set jyd_bz  = @xccy  from  yw_hddz_jzxxx where ywbh=@ywbh");
                updatecmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                updatecmd.Parameters.Add(new SqlParameter("@xccy", xccy));
                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //

        //执行存储过程计算  --出账单明细汇总
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string GetCzdMxhz(string czdbh, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("p_hddz_czd");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@czdbh", czdbh));

             

                if (cmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //更新检疫点标志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string UpdateOhdlxy(ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand updatecmd = null;
            try
            {
                updatecmd = dbHelp.GetCommand("UPDATE yw_hddz SET yw_hddz.zzrq=yw_wldw_ohdlxy.zzrq,yw_hddz.ohdlxy=yw_hddz.shdwmc+(CONVERT (VARCHAR (100),ksrq,112)+isnull(wjlx,'.jpg')) FROM yw_wldw_ohdlxy,yw_hddz WHERE yw_wldw_ohdlxy.yw_khbm=yw_hddz.shdwbm AND datediff(dd,zbrq,yw_wldw_ohdlxy.ksrq)<=0 AND datediff(dd,zbrq,yw_wldw_ohdlxy.zzrq)>=0 AND yw_hddz.jdrbm=yw_wldw_ohdlxy.jdr AND yw_hddz.ohdlxy!=yw_hddz.shdwmc+(CONVERT (VARCHAR (100),ksrq,112)+isnull(wjlx,'.jpg'))");

                if (updatecmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };

            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }

        //获取接单人设置表状态
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string SelJdrState(string jdrbm, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select case when count(*) > 0 then 'Y' else 'N' end  FROM  t_jdrbm_state WHERE jdrbm = @jdrbm and isnull(state,'N')='Y'");
                cmd.Parameters.Add(new SqlParameter("@jdrbm", jdrbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }


        //往来单位设置为深圳
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Wldw_SetSz(string yw_khbm, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("update yw_wldw set sz_flag = 'Y' from yw_wldw where yw_khbm = @yw_khbm;");

                cmd.Parameters.Add(new SqlParameter("@yw_khbm", yw_khbm));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }



      
        //删除业务信息 过滤条件
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Ywxx_glsc(string zbr,string mkmc, ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("delete from yw_hddz_ywxx_gl where zbr = @zbr and mkmc = @mkmc;");

                cmd.Parameters.Add(new SqlParameter("@zbr", zbr));
                cmd.Parameters.Add(new SqlParameter("@mkmc", mkmc)); 
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }

        //修改业务信息 过滤条件
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Ywxx_gl(string zbr, string mkmc,string gwgysmc,string hdzt,string bgzt,string pz , string cm ,string cyr , string hz_spmc, string mygb, string clxx, string xgjb, string szjb, string jhdd, string rjka, string mtxx, string ysfs, string lry,string hcorhbh,  ref string str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("insert into  yw_hddz_ywxx_gl(zbr,mkmc,gwgysmc,hdzt,bgzt,pz,cm,cyr,hz_spmc,mygb,clxx,xgjb,szjb,jhdd,rjka,mtxx,ysfs,lry,hcorhbh)"+
                "VALUES(@zbr,@mkmc,@gwgysmc,@hdzt,@bgzt,@pz,@cm,@cyr,@hz_spmc,@mygb,@clxx,@xgjb,@szjb,@jhdd,@rjka,@mtxx,@ysfs,@lry,@hcorhbh)");

                cmd.Parameters.Add(new SqlParameter("@zbr", zbr));
                cmd.Parameters.Add(new SqlParameter("@mkmc", mkmc));
                cmd.Parameters.Add(new SqlParameter("@gwgysmc", gwgysmc));
                cmd.Parameters.Add(new SqlParameter("@hdzt", hdzt));
                cmd.Parameters.Add(new SqlParameter("@bgzt", bgzt)); 
                cmd.Parameters.Add(new SqlParameter("@pz", pz));
                cmd.Parameters.Add(new SqlParameter("@cm", cm)); 
                cmd.Parameters.Add(new SqlParameter("@cyr", cyr));
                cmd.Parameters.Add(new SqlParameter("@hz_spmc", hz_spmc));
                cmd.Parameters.Add(new SqlParameter("@mygb", mygb));
                cmd.Parameters.Add(new SqlParameter("@clxx", clxx));
                cmd.Parameters.Add(new SqlParameter("@xgjb", xgjb));
                cmd.Parameters.Add(new SqlParameter("@szjb", szjb));
                cmd.Parameters.Add(new SqlParameter("@jhdd", jhdd));
                cmd.Parameters.Add(new SqlParameter("@rjka", rjka));
                cmd.Parameters.Add(new SqlParameter("@mtxx", mtxx));
                cmd.Parameters.Add(new SqlParameter("@ysfs", ysfs));
                cmd.Parameters.Add(new SqlParameter("@lry", lry));
                cmd.Parameters.Add(new SqlParameter("@hcorhbh", hcorhbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetString(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }



        //执行存储过程计算
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string p_khywqkcx_list( DateTime sjkgsj_ks, DateTime sjkgsj_zz, string khbm, string ysfs, string mdka,string userid, ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();

            SqlCommand cmd = null;
            try
            {

                cmd = dbHelp.GetCommand("p_khywqkcx_list");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@@ad_begin", sjkgsj_ks));
                cmd.Parameters.Add(new SqlParameter("@@ad_end", sjkgsj_zz));
                cmd.Parameters.Add(new SqlParameter("@as_khbm", khbm));
                cmd.Parameters.Add(new SqlParameter("@as_ysfs", ysfs));
                cmd.Parameters.Add(new SqlParameter("@as_mdka", mdka));
                cmd.Parameters.Add(new SqlParameter("@userid", userid));

                if (cmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //导出日志
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public string Dcrq(string userid, string module,int sjts,ref string num, string error)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {


                cmd = dbHelp.GetCommand("insert into yw_hddz_dcrz(id,userid,module,zbsj,sjts) values( newid(),@userid,@module,getdate(),@sjts)");
                cmd.Parameters.Add(new SqlParameter("@userid", userid));
                cmd.Parameters.Add(new SqlParameter("@module", module));
                cmd.Parameters.Add(new SqlParameter("@sjts", sjts));
                if (cmd.ExecuteNonQuery() >= 0)
                {
                    dbHelp.Commit();
                    num = "1";
                }
                else
                {
                    dbHelp.Rollback();
                    return "0";
                };


            }

            catch (Exception ex)
            {
                error = ex.Message;

            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return num;
        }


        //货代单证中删除数据不让如果做个费用不让删除
        [AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
        public int hddzDeleteRow(string ywbh, ref int str)
        {
            DBHelp dbHelp = new DBHelp();
            SqlCommand cmd = null;
            try
            {
                cmd = dbHelp.GetCommand("select count(*) from yw_hddz_fksqd_cmd ,yw_hddz_tpcdxx ,yw_hddz where yw_hddz_fksqd_cmd.ywbh = yw_hddz_tpcdxx.cdphbm and yw_hddz_tpcdxx.ywbh = yw_hddz.ywbh and yw_hddz.ywbh = @ywbh'");
                cmd.Parameters.Add(new SqlParameter("@ywbh", ywbh));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    str = rs.GetInt32(0);
                    rs.Close();
                }
            }
            catch (Exception ex)
            {
                Page.ClientScript.RegisterStartupScript(Page.GetType(), ex.Message, "");
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
            return str;
        }
    }
}
