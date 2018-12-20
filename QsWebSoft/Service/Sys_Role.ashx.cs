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
    public class Sys_Role : ServiceBase
    {

        
        protected void Save()
        {
            SafeDS ds = new SafeDS("d_sys_roles_edit");
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
                //删除角色权限
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM Sys_RolePermissions Where RoleID=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();

                //删除角色/帐户资料
                cmd = this.DBHelp.GetCommand("DELETE FROM Sys_UserRoles Where RoleID=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();

                //删除角色
                cmd = this.DBHelp.GetCommand("DELETE FROM Sys_Roles Where ID=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();

                //删除预警权限
                SqlCommand cmdyj = this.DBHelp.GetCommand("DELETE FROM Sys_WarningPermissions Where RoleID=@id");
                cmdyj.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmdyj.ExecuteNonQuery();

                 this.DBHelp.Commit();
            }
            catch (Exception ex)
            {
                this.DBHelp.Rollback();
                this.SetErrorInfo("删除用户角色时发生错误。\r\n错误信息为：\r\n" + ex.Message);
            }
        }
       
        //设置角色权限
       protected void  SetPermissions()
       {
           string roleID = this.Request.Form["roleid"].ToString();
           string moduleID = this.Request.Form["moduleid"].ToString();
           string data = this.Request.Form["data"].ToString();

           SafeDS ds = new SafeDS("d_sys_rolepemessions_permission");
           ds.SetSyntaxData(data);
           ds.SetTransaction(this.DBHelp.TransAction);

          this.DBHelp.BeginTransAction();
           try
           {
               //先删除当前角色原来定义的权限
               SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM Sys_RolePermissions Where RoleID=@roleID AND ModuleID=@moduleID");
               cmd.Parameters.Add(new SqlParameter("@roleID", roleID));
               cmd.Parameters.Add(new SqlParameter("@moduleID", moduleID));
               cmd.ExecuteNonQuery();

               //增加新的权限
               cmd = this.DBHelp.GetCommand("INSERT INTO Sys_RolePermissions(RoleID, ModuleID, FunID , hasRight ) Values(@roleID,@moduleID,@funID, '1' )");
               SqlParameter parm_funID = new SqlParameter("@funID", "");

               cmd.Parameters.Add(new SqlParameter("@roleID", roleID));
                cmd.Parameters.Add(new SqlParameter("@moduleID", moduleID));
                cmd.Parameters.Add(parm_funID);

               for (int row = 1; row <= ds.RowCount; row++)
               {
                   if (ds.GetItemString(row, "hasRight") == "1")
                   {
                       parm_funID.Value = ds.GetItemString(row, "funID");
                       cmd.ExecuteNonQuery(); 
                   }
               }
               this.DBHelp.Commit();

           }
           catch (Exception ex)
           {
               this.DBHelp.Rollback();
               this.SetErrorInfo("更新角色权限时发生错误。\r\n错误信息为：\r\n" + ex.Message);

           }
           finally
           {
               ds.Dispose(); 
           }
     }
        //设置预警权限
       protected void SetWarning()
       {
           string roleID = this.Request.Form["roleid"].ToString();
           string moduleID = this.Request.Form["moduleid"].ToString();
           string data = this.Request.Form["data"].ToString();

           SafeDS ds = new SafeDS("d_sys_warningpemessions_permission");
           ds.SetSyntaxData(data);
           ds.SetTransaction(this.DBHelp.TransAction);

           this.DBHelp.BeginTransAction();
           try
           {
               //先删除当前角色原来定义的权限
               SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM Sys_WarningPermissions Where RoleID=@roleID AND ModuleID=@moduleID");
               cmd.Parameters.Add(new SqlParameter("@roleID", roleID));
               cmd.Parameters.Add(new SqlParameter("@moduleID", moduleID));
               cmd.ExecuteNonQuery();

               //增加新的权限
               cmd = this.DBHelp.GetCommand("INSERT INTO Sys_WarningPermissions(RoleID, ModuleID, FunID , hasRight ) Values(@roleID,@moduleID,@funID, '1' )");
               SqlParameter parm_funID = new SqlParameter("@funID", "");

               cmd.Parameters.Add(new SqlParameter("@roleID", roleID));
               cmd.Parameters.Add(new SqlParameter("@moduleID", moduleID));
               cmd.Parameters.Add(parm_funID);

               for (int row = 1; row <= ds.RowCount; row++)
               {
                   if (ds.GetItemString(row, "hasRight") == "1")
                   {
                       parm_funID.Value = ds.GetItemString(row, "funID");
                       cmd.ExecuteNonQuery();
                   }
               }
               this.DBHelp.Commit();

           }
           catch (Exception ex)
           {
               this.DBHelp.Rollback();
               this.SetErrorInfo("更新角色权限时发生错误。\r\n错误信息为：\r\n" + ex.Message);

           }
           finally
           {
               ds.Dispose();
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
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM Sys_UserRoles Where RoleID=@roleID");
                cmd.Parameters.Add(new SqlParameter("@roleID",roleID));
                cmd.ExecuteNonQuery();

                if (!string.IsNullOrEmpty(users))
                {
                    string[] userList = users.Split(new char[] { ';' });
                    cmd = this.DBHelp.GetCommand("INSERT INTO Sys_UserRoles(RoleID, UserID) Values(@roleID,@userID)");
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
                this.SetErrorInfo("更新角色用户帐号时发生错误。\r\n错误信息为：\r\n" + ex.Message);

            }
        }
    }
}