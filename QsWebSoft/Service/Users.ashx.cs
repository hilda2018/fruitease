using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace QsWebSoft.Service
{
    public class Users : ServiceBase
    {
       

        
        public void Save()
        {
            SafeDS ds = new SafeDS("d_users_edit");
            if (ds.SetChanges(this.Request.Form["data"].ToString()))
            {
                 ds.SetTransaction(this.DBHelp.TransAction);
                  this.DBHelp.BeginTransAction();

                if (ds.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    this.SetSuccessedInfo("数据保存成功");
                }
                else
                {
                    this.DBHelp.Rollback();
                    this.SetErrorInfo("数据保存失败!");
                    return;
                }
            }
            else
            {
                this.SetErrorInfo("WebService提交的数据不正确");
                return;
            }
        }

        public void Delete()
        {
            this.DBHelp.BeginTransAction();
            try
            {
                //删除角色/帐户资料
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM Sys_UserRoles Where UserID=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();

                //删除帐户
                cmd = this.DBHelp.GetCommand("DELETE FROM Sys_Users Where ID=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();
                 this.DBHelp.Commit(); 
           }
            catch (Exception ex)
            {
                this.DBHelp.Rollback();
                this.SetErrorInfo("删除用户帐号时发生错误。\r\n错误信息为：\r\n" + ex.Message);
            }
       }

        public void SetPassword()
        {
            SafeDS ds = new SafeDS("d_sys_users_setpassword");
            if (ds.SetChanges(this.Request.Form["data"].ToString()))
            {
                string userID = ds.GetItemString(1, "ID");
                string pwd1 = ds.GetItemString(1, "password1");
                string pwd2 = ds.GetItemString(1, "password2");
                string error = string.Empty;

                if (pwd1.Length < 6)
                {
                    this.SetErrorInfo("帐号密码长度不能小于6位数");
                    return;
                }

                if (string.Compare(pwd1, pwd2, false) != 0)
                {
                    this.SetErrorInfo("两次输入的帐号密码不一致,请重新输入!");
                    return;
                }
                if(!AppService.SetPassword(userID,pwd1,ref error))
                {
                     this.SetErrorInfo(error);
                }
            }
            else
            {
                this.SetErrorInfo("WebService提交的数据不正确");
            }
        }


        public void ChangePwd()
        {
            SafeDS ds = new SafeDS("d_changepassword");
            if (ds.SetChanges(this.Request.Form["data"].ToString()))
            {
                string userID = AppService.GetUserID();
                string oldPwd = ds.GetItemString(1, "oldPwd");
                string pwd1 = ds.GetItemString(1, "newPwd1");
                string pwd2 = ds.GetItemString(1, "newPwd2");
                string error = string.Empty;

                if (pwd1.Length < 6)
                {
                    this.SetErrorInfo("帐号密码长度不能小于6位数");
                    return;
                }

                if (string.Compare(pwd1, pwd2, false) != 0)
                {
                    this.SetErrorInfo("两次输入的帐号密码不一致,请重新输入!");
                    return;
                }

                if (!AppService.ChangePassword(userID, oldPwd, pwd1, ref error))
                {
                    this.SetErrorInfo(error);
                }

            }
            else
            {
                this.SetErrorInfo("WebService提交的数据不正确");
            }
        }

        protected void SetUserRoles()
        {
            string userID = this.Request.Form["userid"].ToString();
            string roles = this.Request.Form["roles"].ToString();

            this.DBHelp.BeginTransAction();
            try
            {
                //先删除当前角色所分配的用户列表
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM Sys_UserRoles Where UserID=@userID");
                cmd.Parameters.Add(new SqlParameter("@userID", userID));
                cmd.ExecuteNonQuery();

                if (!string.IsNullOrEmpty(roles))
                {
                    string[] roleList = roles.Split(new char[] { ';' });
                    cmd = this.DBHelp.GetCommand("INSERT INTO Sys_UserRoles(RoleID, UserID) Values(@roleID,@userID)");
                    SqlParameter param1 = new SqlParameter("@userID", userID);
                    SqlParameter param2 = new SqlParameter("@roleID", "");
                    cmd.Parameters.Add(param1);
                    cmd.Parameters.Add(param2);

                    foreach (string roleID in roleList)
                    {
                        if (!string.IsNullOrEmpty(roleID))
                        {
                            param2.Value = roleID;
                            cmd.ExecuteNonQuery();
                        }
                    }
                }
                this.DBHelp.Commit();
            }
            catch (Exception ex)
            {
                this.SetErrorInfo("更新角色用户帐号时发生错误。\r\n错误信息为：\r\n" + ex.Message);

            }
        }
    }
}