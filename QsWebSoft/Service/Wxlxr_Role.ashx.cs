using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;

namespace QsWebSoft.Service
{
    /// <summary>
    /// Sys_Role 的摘要说明
    /// </summary>
    public class Wxlxr_Role : ServiceBase
    {

        
        protected void Save()
        {
            SafeDS ds = new SafeDS("dw_wxlxr_roles_edit");
            if (ds.SetChanges(this.Request.Form["data"].ToString()))
            {
                ds.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
                if (ds.UpdateData() == 1)
                {
                    this.DBHelp.Commit();
                    this.SetSuccessedInfo("数据保存成功!");
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
            ds.Dispose();
        }

        protected void Delete()
        {
            this.DBHelp.BeginTransAction();
            try
            {
                
                //删除角色/帐户资料
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM yw_hddz_wxlxr_userroles Where RoleID=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();

                //删除角色
                cmd = this.DBHelp.GetCommand("DELETE FROM yw_hddz_wxlxr_Roles Where ID=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();

                 this.DBHelp.Commit();
            }
            catch (Exception ex)
            {
                this.DBHelp.Rollback();
                this.SetErrorInfo("删除用户角色时发生错误。\r\n错误信息为：\r\n" + ex.Message);
            }
        }
       
      
       protected void  SetRoleUsers()
        {
           
           string roleID=this.Request.Form["roleid"].ToString();
           string users = this.Request.Form["users"].ToString();

            this.DBHelp.BeginTransAction();
            try
            {
                //先删除当前角色所分配的用户列表
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM yw_hddz_wxlxr_userroles Where RoleID=@roleID");
                cmd.Parameters.Add(new SqlParameter("@roleID",roleID));
                cmd.ExecuteNonQuery();

                if (!string.IsNullOrEmpty(users))
                {
                    string[] userList = users.Split(new char[] { ';' });
                    cmd = this.DBHelp.GetCommand("INSERT INTO yw_hddz_wxlxr_userroles(RoleID, UserID) Values(@roleID,@userID)");
                    SqlParameter param1 = new SqlParameter("@roleID", roleID);
                    SqlParameter param2 = new SqlParameter("@userID", "");
                    cmd.Parameters.Add(param1);
                    cmd.Parameters.Add(param2);

                    foreach (string userID in userList)
                    {
                        if (!string.IsNullOrEmpty(userID))
                        {
                            param2.Value = userID;
                            cmd.ExecuteNonQuery();
                        }
                    }
                }
                this.DBHelp.Commit(); 
            }
            catch (Exception ex)
            {
                this.DBHelp.Rollback();
                this.SetErrorInfo("更新角色微信用户帐号时发生错误。\r\n错误信息为：\r\n" + ex.Message);

            }
        }
    }
}