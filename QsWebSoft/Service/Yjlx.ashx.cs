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
    public class Yjlx : ServiceBase
    {
       

        
        public void Save()
        {
            string master = Request.Form["dw_Master"].ToString();

            SafeDS ds = new SafeDS("dw_yjlx_all");
            try
            {
                ds.SetChanges(master);

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

            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds.Dispose();
                ds = null;

                
            }
            
            
        }

        protected void SetYjlxYcyy()
        {
            string yjlxbh = this.Request.Form["yjlxbh"].ToString();
            string roles = this.Request.Form["roles"].ToString();

            this.DBHelp.BeginTransAction();
            try
            {
                //先删除当前角色所分配的用户列表
                SqlCommand cmd = this.DBHelp.GetCommand(" delete yw_hddz_yjlx_ycyy where yjlxbh = @yjlxbh");
                cmd.Parameters.Add(new SqlParameter("@yjlxbh", yjlxbh));
                cmd.ExecuteNonQuery();

                if (!string.IsNullOrEmpty(roles))
                {
                    string[] roleList = roles.Split(new char[] { ';' });
                    cmd = this.DBHelp.GetCommand("insert into yw_hddz_yjlx_ycyy(yjlxbh,ycyybm) values(@yjlxbh,@ycyybm)");
                    SqlParameter param1 = new SqlParameter("@yjlxbh", yjlxbh);
                    SqlParameter param2 = new SqlParameter("@ycyybm", "");
                    cmd.Parameters.Add(param1);
                    cmd.Parameters.Add(param2);

                    foreach (string ycyybm in roleList)
                    {
                        if (!string.IsNullOrEmpty(ycyybm))
                        {
                            param2.Value = ycyybm;
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