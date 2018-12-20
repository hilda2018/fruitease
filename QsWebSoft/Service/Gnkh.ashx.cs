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

namespace QsWebSoft.Service
{
    /// <summary>
    /// SalesOrder 的摘要说明
    /// </summary>
    public class Gnkh :  ServiceBase
    {


        //单据保存
        protected void Save()
        {
            string userID = AppService.GetUserID();
            string tybm = Request.Form["tybm"].ToString();
            var operation = Request.Form["operation"].ToString();

            string master = Request.Form["dw_Master"].ToString();
            SafeDS ds_master = new SafeDS("dw_ywy_gnkh_tybm_list");
            string gnkh_lxr = Request.Form["dw_gnkh_lxr"].ToString();
            SafeDS ds_gnkh_lxr = new SafeDS("dw_ywy_gnkh_tybm_edit_lxr");  
            string gnkh_list = Request.Form["dw_gnkh_list"].ToString(); 
            SafeDS ds_gnkh_list= new SafeDS("dw_ywy_gnkh_edit_list");
            string gnkh_shdz = Request.Form["dw_gnkh_shdz"].ToString();
            SafeDS ds_gnkh_shdz = new SafeDS("dw_ywy_gnkh_tybm_edit_shdz");
            try
            {
             
                ds_master.SetChanges(master);
                ds_gnkh_lxr.SetChanges(gnkh_lxr);
                ds_gnkh_list.SetChanges(gnkh_list);
                ds_gnkh_shdz.SetChanges(gnkh_shdz);
                //TODO  在服务器端，最好是重做一次数据校验，Demo简化处理，不再重复校验了。
               
                for (int row = 1; row <= ds_gnkh_lxr.RowCount; row++)
                {
                    ds_gnkh_lxr.SetItemString(row, "yw_khbm", tybm);
                    ds_gnkh_lxr.SetItemDouble(row, "cxh", row);
                }
                for (int row = 1; row <= ds_gnkh_shdz.RowCount; row++)
                {
                    ds_gnkh_shdz.SetItemString(row, "yw_khbm", tybm);
                    ds_gnkh_shdz.SetItemDouble(row, "cxh", row);
                }

                ds_master.SetTransaction(this.DBHelp.TransAction);
                ds_gnkh_lxr.SetTransaction(this.DBHelp.TransAction);
                ds_gnkh_list.SetTransaction(this.DBHelp.TransAction);
                ds_gnkh_shdz.SetTransaction(this.DBHelp.TransAction);
                this.DBHelp.BeginTransAction();
               
                
                if (ds_master.UpdateData() == 1)
                {
                    if (ds_gnkh_lxr.UpdateData() == 1)
                    {
                        if (ds_gnkh_list.UpdateData() == 1)
                        {
                            if (ds_gnkh_shdz.UpdateData() == 1)
                            {
                                this.DBHelp.Commit();
                                //把单据号码，传回到客户端
                                Response.Write(tybm);

                            }
                            else
                            {
                                this.DBHelp.Rollback(); ;
                                this.SetErrorInfo("明细国内客户收货地址保存失败!\n\n详细错误信息：\n" + ds_gnkh_lxr.DBError);
                            }

                        }
                        else
                        {
                            this.DBHelp.Rollback(); ;
                            this.SetErrorInfo("明细国内客户保存失败!\n\n详细错误信息：\n" + ds_gnkh_lxr.DBError);
                        }
                               
                        }
                    else
                    {
                        this.DBHelp.Rollback(); ;
                        this.SetErrorInfo("国内客户联系人保存失败!\n\n详细错误信息：\n" + ds_gnkh_lxr.DBError);
                    }
                }
                else
                {
                    this.DBHelp.Rollback(); ;
                    this.SetErrorInfo("国内客户评定失败!\n\n详细错误信息：\n" + ds_master.DBError);
                }
                   
            }
            catch (Exception ex)
            {
                this.SetErrorInfo(ex.Message);

            }
            finally
            {
                ds_master.Dispose();
                ds_master = null;
                ds_gnkh_lxr.Dispose();
                ds_gnkh_lxr = null;
                ds_gnkh_list.Dispose();
                ds_gnkh_list = null;
                ds_gnkh_shdz.Dispose();
                ds_gnkh_shdz = null;
            }
        }

           
    }
}