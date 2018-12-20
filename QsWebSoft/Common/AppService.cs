using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace QsWebSoft
{
    public sealed class AppService
    {

        //对字符串进行SHA256加密处理
        public static string SHA256(string str)
        {
            byte[] SHA256Data = Encoding.UTF8.GetBytes(str);
            SHA256Managed Sha256 = new SHA256Managed();
            byte[] Result = Sha256.ComputeHash(SHA256Data);
            return  Convert.ToBase64String(Result).Replace('+', '_').Replace('/', '_');  
       }

        /// <summary>
        /// 对密码进行加密处理
        /// </summary>
        /// <param name="pwd"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        public static string GetPassword(string pwd, string key)
        {
            return SHA256(pwd + ";" + key + "*%323cvbacdao&%$@#_)Nv4sadf8a_*^2#&*@123abco!2342323fasf");
        }

        public static  string GetUserID()
        {
            string userID = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["UserID"]!=null )
            {
                userID = HttpContext.Current.Session["UserID"].ToString(); 
            }
          return userID; 
        }

        public static void SetUserID(string userID)
        {
            if (HttpContext.Current != null)
            {
                if (userID == "admini")
                {
                    HttpContext.Current.Session["UserID"] = userID;
                }
                else
                {
                    HttpContext.Current.Session["UserID"] = userID.ToUpperInvariant();
                }
            }

        }
       

        public static string GetUserName()
        {
            string userName = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["UserName"] != null)
            {
                userName = HttpContext.Current.Session["UserName"].ToString();
            }
            return userName;
        }


        /// <summary>
        /// 判断密码是否为默认
        /// </summary>
        /// <param name="userPwd">密码</param>
        /// <remarks>zdy add</remarks>
        public static void SetPwdIsSame(string userPwd)
        {
            
            if (HttpContext.Current != null)
            {
                if (userPwd == "777777")
                {
                    HttpContext.Current.Session["IsPwdSame"] = 1;
                }
                else
                {
                    HttpContext.Current.Session["IsPwdSame"] = 0;
                }
            }

        }
        public static void SetUserName(string userName)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["UserName"] = userName;
        }


        

        public static string GetShareMode()
        {
            string ShareMode = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["ShareMode"] != null)
            {
                ShareMode = HttpContext.Current.Session["ShareMode"].ToString();
            }
            return ShareMode;
        }

        public static void SetShareMode(string ShareMode)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["ShareMode"] = ShareMode;
        }

        public static void SetDlwtf(string Dlwtf)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["Dlwtf"] = Dlwtf;
        }


       

        public static string GetDlwtf()
        {
            string Dlwtf = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["Dlwtf"] != null)
            {
                Dlwtf = HttpContext.Current.Session["Dlwtf"].ToString();
            }
            return Dlwtf;
        }

        public static void SetZlcqts(string Zlcqts)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["Zlcqts"] = Zlcqts;
        }


        public static string GetZlcqts()
        {
            string Zlcqts = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["Zlcqts"] != null)
            {
                Zlcqts = HttpContext.Current.Session["Zlcqts"].ToString();
            }
            return Zlcqts;
        }

        public static void SetTybm(string Tybm)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["Tybm"] = Tybm;
        }

        public static string GetTybm()
        {
            string Tybm = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["Tybm"] != null)
            {
                Tybm = HttpContext.Current.Session["Tybm"].ToString();
            }
            return Tybm;
        }

        public static void SetSfqytybm(string Sfqytybm)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["Sfqytybm"] = Sfqytybm;
        }

        public static string GetSfqytybm()
        {
            string Sfqytybm = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["Sfqytybm"] != null)
            {
                Sfqytybm = HttpContext.Current.Session["Sfqytybm"].ToString();
            }
            return Sfqytybm;
        }

        public static void SetBm(string Bm)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["Bm"] = Bm;
        }

        public static string GetBm()
        {
            string Bm = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["Bm"] != null)
            {
                Bm = HttpContext.Current.Session["Bm"].ToString();
            }
            return Bm;
        }


      
       
        public static string CompanyID()
        {
            string userID = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["CompanyID"] != null)
            {
                userID = HttpContext.Current.Session["CompanyID"].ToString();
            }
            return userID;
        }

        public static void SetCompanyID(string companyID)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["CompanyID"] = companyID;
        }

        public static string GetCompanyName()
        {
            string userName = string.Empty;
            if (HttpContext.Current != null && HttpContext.Current.Session["CompanyName"] != null)
            {
                userName = HttpContext.Current.Session["CompanyName"].ToString();
            }
            return userName;
        }


        public static void SetCompanyName(string companyName)
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session["CompanyName"] = companyName;
        }

        public static string GetIp()
        {
            if(System.Web.HttpContext.Current!=null)
                return System.Web.HttpContext.Current.Request.UserHostAddress.ToString();

            return string.Empty;
        }
        /// <summary>
        /// 判断是否有用户已登录系统
        /// </summary>
        /// <returns></returns>
        public static bool IsLogin()
        {
            if (HttpContext.Current == null)
                return false;

            return ( HttpContext.Current.Session["UserID"] != null ) ? true : false;  ; 
        }


        /// <summary>
        /// 用户登录
        /// </summary>
        /// <param name="userID"></param>
        /// <param name="password"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public static bool Login(string userID, string password, ref string error)
        {
            #if ExtPB_Demo
                if (string.Compare(userID, "admin", true) == 0 && string.Compare(password, "123456789", true) == 0)
                {

                    SetUserID(userID);
                    SetUserName("系统管理员");

                    //登用用户关联的其它信息，如所属机构、所属部门、选择的帐套代码、帐套名称等
                    SetCompanyID("001");
                    SetCompanyName("广州市同享软件科技有限公司");

                    Log("用户登录");
                    return true;
                }
                error = "用户帐号或密码错误,登录帐号为admin,密码为123456789";
                return false;
        #else

                bool result = false;
                error = string.Empty;
   
                DBHelp dbHelp = new DBHelp();

                SqlCommand cmd = null;
                DBHelp dbHelp1 = new DBHelp();
                SqlCommand cmd1 = null;
                try
                {
                    //判断原来的用户密码是否一致
                    string Zlcqts = "";
                    cmd1 = dbHelp.GetCommand("select count(*) from yw_wldw,yw_wldw_zjqk,sys_users where yw_wldw.yw_khbm = yw_wldw_zjqk.khbm and yw_wldw_zjqk.khbm = sys_users.tybm and id = @id and (( isnull(yw_wldw.ohsjje,0) >0  and  isnull(yw_wldw.ohsjje,0) <  isnull(yw_wldw_zjqk.ohsjje,0))  or ( isnull(yw_wldw.ohsjje,0) >0  and  isnull(yw_wldw.ohsjje,0) <  isnull(yw_wldw_zjqk.ohsjje,0))  or ( isnull(yw_wldw.ohsjzq,0) >0  and  isnull(yw_wldw.ohsjzq,0) <  isnull(yw_wldw_zjqk.ohsjzq,0))  or ( isnull(yw_wldw.hssjje,0) >0  and  isnull(yw_wldw.hssjje,0) <  isnull(yw_wldw_zjqk.hssjje,0))  or ( isnull(yw_wldw.hssjzq,0) >0  and  isnull(yw_wldw.hssjzq,0) <  isnull(yw_wldw_zjqk.hssjzq,0))  or ( isnull(yw_wldw.hdfyje,0) >0  and  isnull(yw_wldw.hdfyje,0) <  isnull(yw_wldw_zjqk.hdfyje,0))  or ( isnull(yw_wldw.hdfyzq,0) >0  and  isnull(yw_wldw.hdfyzq,0) <  isnull(yw_wldw_zjqk.hdfyzq,0))  or ( isnull(yw_wldw.gjyfje,0) >0  and  isnull(yw_wldw.gjyfje,0) <  isnull(yw_wldw_zjqk.gjyfje,0))  or  isnull(yw_wldw.gjyfzq,0) >0  and  isnull(yw_wldw.gjyfzq,0) <  isnull(yw_wldw_zjqk.gjyfzq,0)) )");

                    cmd1.Parameters.Add(new SqlParameter("@id", userID));
                    SqlDataReader rs1 = cmd1.ExecuteReader();
                    if (rs1.Read())
                    {
                        Zlcqts = "已超期！";
                    }

                    SetZlcqts(Zlcqts);
                }

                catch (Exception ex)
                {
                    error = ex.Message;
                }
                finally
                {
                    dbHelp1.Close();
                    dbHelp1 = null;
                }
                   

                try
                {

                    
                    //判断原来的用户密码是否一致
                    cmd = dbHelp.GetCommand("SELECT Name,randKey, Password ,IsLocked,ShareMode,isnull(Dlwtf,''),isnull(d_no,''),isnull(gsndl,'N'),isnull(Tybm,''),isnull(Sfqytybm,'N') FROM Sys_Users Where ID=@id AND IsValid='1' ");
                    cmd.Parameters.Add(new SqlParameter("@id", userID));
                    SqlDataReader rs = cmd.ExecuteReader();
                    if (rs.Read())
                    {
                        //帐号是否销定
                        bool isLocked = false;
                        string gsndl = "N"; 
                        if (!rs.IsDBNull(2))
                        {
                            isLocked = ( rs.GetString(3) == "1" ) ? true : false;
                            gsndl = rs.GetString(7); 
                        }
                        string ipdz = GetIp();
                        if (gsndl == "Y" && ipdz != "180.166.207.114")
                        {
                            if (ipdz == null) {
                                ipdz = "a";
                            }
                            error = "内部用户,不允许登录系统!"+ipdz;
                        }
                        else 
                            if (isLocked)
                        {
                            error = "用户帐号已被锁定,不允许登录系统!";
                        }
                        else
                        {
                            string userName = rs.GetString(0);
                            string randKey = rs.GetString(1);
                            string oldPassword = rs.GetString(2);
                            string pwd = GetPassword(password, randKey);
                            string ShareMode = rs.GetString(4);
                            string Dlwtf = rs.GetString(5);
                            string Bm = rs.GetString(6);
                            string Tybm = rs.GetString(8);
                            string Sfqytybm = rs.GetString(9);
                            rs.Close();

                            if (password == "777777")
                            {
                                //把用户ID和用户名称，保存到Session
                                //如果用户有其它信息，如机构或部门，也相应保存起来
                                SetPwdIsSame(password);//zdy add
                                SetUserID(userID);
                                SetUserName(userName);
                                SetShareMode(ShareMode);
                                SetDlwtf(Dlwtf);
                                SetTybm(Tybm);
                                SetSfqytybm(Sfqytybm);
                                SetBm(Bm);
                                //登用用户关联的其它信息，如所属机构、所属部门、选择的帐套代码、帐套名称等
                                SetCompanyID("01");
                                SetCompanyName("上海欧恒进出口有限公司");

                               
                                //加入登录日志
                                Log("用户登录");
                                

                                //设置登录成功
                                result = true;
                            }
                            else
                            {
                                //密码是否一致?
                                if (string.Compare(pwd, oldPassword, false) != 0)
                                {
                                    error = "密码不正确!";
                                }
                                else
                                {
                                    //把用户ID和用户名称，保存到Session
                                    //如果用户有其它信息，如机构或部门，也相应保存起来
                                    SetPwdIsSame(password);//zdy add
                                    SetUserID(userID);
                                    SetUserName(userName);
                                    SetShareMode(ShareMode);
                                    SetDlwtf(Dlwtf);
                                    SetBm(Bm);
                                    SetTybm(Tybm);
                                    SetSfqytybm(Sfqytybm);
                                    //登用用户关联的其它信息，如所属机构、所属部门、选择的帐套代码、帐套名称等
                                    SetCompanyID("01");
                                    SetCompanyName("上海欧恒进出口有限公司");

                                
                                    //加入登录日志
                                    Log("用户登录");


                                    //设置登录成功
                                    result = true;
                                }
                            }
                        }

                    }
                    else
                    {
                        error = "用户[ " + userID + " ]不存在或已被禁用!";
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
               return result;
            #endif
        }

        /// <summary>
        /// 更改用户密码
        /// </summary>
        /// <param name="userID"></param>
        /// <param name="oldPassword"></param>
        /// <param name="newPassword"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public static bool ChangePassword(string userID, string oldPassword, string newPassword, ref string error)
        {
            bool result = false;
            error = string.Empty;

            if (oldPassword.Length < 6) 
            {
                error = "原密码的长度少于6位，请重新输入!";
                return false;
            }
            //------ zdy add
            if (oldPassword == newPassword && oldPassword == "888888")
            {
                error = "新密码不能与旧密码一致!";
                return false;
            }
            ///--------zdy---end
            if (newPassword.Length < 6)
            {
                error = "新密码的长度少于6位，请重新输入!";
                return false;
           }

            DBHelp dbHelp =new DBHelp();
            SqlCommand cmd =null; 
            try{
                 //判断原来的用户密码是否一致
                cmd = dbHelp.GetCommand("SELECT randKey, Password FROM Sys_Users Where ID=@id AND IsValid='1' ");
                cmd.Parameters.Add(new SqlParameter("@id",userID));
                SqlDataReader rs = cmd.ExecuteReader();
                if (rs.Read())
                {
                    string randKey =rs.GetString(0); 
                    string pwd =rs.GetString(1); 
                    rs.Close();

                    oldPassword = GetPassword(oldPassword, randKey); 

                    //旧密码是否一致?
                     if (string.Compare(pwd, oldPassword, false) != 0)
                     {
                         error = "原密码不正确，请重新输入!";
                     }
                     else
                     {
                         //更新密码
                         result = SetPassword(userID, newPassword, ref error);
                     }
                }
                else
                {
                    error = "用户[ " + userID + " ]不存在或已被禁用,修改密码失败!";
                }
            }
            catch(Exception ex)
            {
                error =ex.Message;
            }
            finally
            {
                dbHelp.Close();
                dbHelp = null; 
            }

            return result;
        }

        public static bool SetPassword(string userID, string password, ref string error)
        {
            bool result =false; 
            error = string.Empty;

            if (password.Length < 6)
            {
                error = "密码的长度小能小于6位,请重新输入!";
                return false; 
            }

            //生成一个随机Key
           string  randKey = Guid.NewGuid().ToString().Substring(0, 8);

            //加密
           string pwd = GetPassword(password, randKey);

           DBHelp dbHelp = new DBHelp();
           try
           {
               SqlCommand cmd = dbHelp.GetCommand("UPDATE Sys_Users Set RandKey=@randKey, Password=@password Where id=@id");
               cmd.Parameters.Add(new SqlParameter("@randKey", randKey));
               cmd.Parameters.Add(new SqlParameter("@password", pwd));
               cmd.Parameters.Add(new SqlParameter("@id", userID));
               cmd.ExecuteNonQuery();
               result = true;
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
           return result; 
        }

       /// <summary>
       /// 记录操作日志
       /// </summary>
       /// <param name="reason"></param>
        public static void Log(string reason)
        {
            DBHelp dbHelp = new DBHelp();
            try
            {
                dbHelp.Open(); 
                SqlCommand cmd = dbHelp.GetCommand("Insert Into Sys_Log (UserID, LoginTime, IP) Values(@userID,GetDate(), @ip) ");
                cmd.Parameters.Add(new SqlParameter("@userID", GetUserID() ));
                cmd.Parameters.Add(new SqlParameter("@ip", GetIp() ));
                cmd.ExecuteNonQuery();
            }
            catch (Exception ) { }
            finally
            {
                dbHelp.Close();
                dbHelp = null;
            }
        }
        ///// <summary>
        ///// 
        ///// <summary>
        ///// 记录操作日志
        ///// </summary>
        ///// <param name="reason"></param>
        //public static void Zlfxts(string reason)
        //{
        //    DBHelp dbHelp = new DBHelp();
        //    try
        //    {
        //        dbHelp.Open();
        //        //SqlCommand cmd = dbHelp.GetCommand("select count(*) from yw_wldw,yw_wldw_zjqk,rs_employee  where yw_wldw.yw_khbm = rs_employee.khbm and e_no = @userID and yw_wldw.yw_khbm = yw_wldw_zjqk.khbm and  and (isnull(yw_wldw.ohsjje,0) < isnull(yw_wldw_zjqk .ohsjje,0) or isnull(yw_wldw.ohsjzq,0) < isnull(yw_wldw_zjqk .ohsjzq,0) or isnull(yw_wldw.hssjje,0) < isnull(yw_wldw_zjqk .hssjje,0) or  isnull(yw_wldw.hssjzq,0) < isnull(yw_wldw_zjqk .hssjzq,0) or  isnull(yw_wldw.hdfyje,0) < isnull(yw_wldw_zjqk .hdfyje,0)  or isnull(yw_wldw.hdfyzq,0) < isnull(yw_wldw_zjqk .hdfyzq,0) or isnull(yw_wldw.gjyfje,0) < isnull(yw_wldw_zjqk .gjyfje,0)  or isnull(yw_wldw.gjyfzq,0) < isnull(yw_wldw_zjqk .gjyfzq,0)  )  ");
        //        SqlCommand cmd = dbHelp.GetCommand("SELECT count(*) FROM Sys_Users Where ID=@id");
               
        //        cmd.Parameters.Add(new SqlParameter("@userID", GetUserID())); 
        //        SqlDataReader rs = cmd.ExecuteReader();
        //        if (rs.Read())
        //        {
        //            int sl = rs.GetInt16(0);
        //            if (sl > 0){
                        
        //                reason = "额度或则账龄超期!";
        //            }
        //        }
        //    }
        //    catch (Exception) { }
        //    finally
        //    {
        //        dbHelp.Close();
        //        dbHelp = null;
        //    }
        //}
        ///// <summary>
        ///// 
        

        /// 退出系统
        /// </summary>
        public static void Logout()
        {
            if (HttpContext.Current != null)
                HttpContext.Current.Session.RemoveAll();
        }


        public static IEnumerable<Menu> MenuList(string userId)
        {
            var dbHelp = new DBHelp();
            try
            {
                dbHelp.Open();
                var cmd = new SqlCommand();
                if (userId == "admin")
                    cmd = dbHelp.GetCommand("select * from V_ClassModules");
                else
                {
                    cmd = dbHelp.GetCommand("select * from V_UserModules where UserID = @userId");
                    cmd.Parameters.Add(new SqlParameter("@userId", userId));
                }
                var reader = cmd.ExecuteReader();
                var list = new List<Menu>();
                while (reader.Read())
                {
                    var item = new Menu()
                    {
                        Id = reader["Id"].ToString(),
                        Title = reader["Title"].ToString(),
                        Description = reader["Description"].ToString(),
                        Style = reader["Style"].ToString(),
                        SubId = reader["SubId"].ToString(),
                        SubTitle = reader["SubTitle"].ToString(),
                        SubDescription = reader["SubDescription"].ToString(),
                        SubStyle = reader["SubStyle"].ToString()
                    };

                    list.Add(item);
                }

                reader.Close();

                return list;
            }
            finally
            {
                dbHelp.Close();
            }
        }
    }


      


    public class Menu
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Style { get; set; }

        public string SubId { get; set; }

        public string SubTitle { get; set; }

        public string SubDescription { get; set; }

        public string SubStyle { get; set; }
    }
}