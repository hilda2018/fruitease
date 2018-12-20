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
    public class Wxlxr : ServiceBase
    {
       

        
        public void Save()
        {
            SafeDS ds = new SafeDS("dw_wxlxr_edit");
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
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM yw_hddz_wxlxr_userroles Where userid=@id");
                cmd.Parameters.Add(new SqlParameter("@id", this.Request.Form["id"].ToString()));
                cmd.ExecuteNonQuery();

                //删除帐户
                cmd = this.DBHelp.GetCommand("DELETE FROM yw_hddz_wxlxr Where userid=@id");
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



        protected void SetUserRoles()
        {
            string userID = this.Request.Form["userid"].ToString();
            string roles = this.Request.Form["roles"].ToString();

            this.DBHelp.BeginTransAction();
            try
            {
                //先删除当前角色所分配的用户列表
                SqlCommand cmd = this.DBHelp.GetCommand("DELETE FROM yw_hddz_wxlxr_userroles Where userid =@userID");
                cmd.Parameters.Add(new SqlParameter("@userID", userID));
                cmd.ExecuteNonQuery();

                if (!string.IsNullOrEmpty(roles))
                {
                    string[] roleList = roles.Split(new char[] { ';' });
                    cmd = this.DBHelp.GetCommand("INSERT INTO yw_hddz_wxlxr_userroles(RoleID, UserID) Values(@roleID,@userID)");
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