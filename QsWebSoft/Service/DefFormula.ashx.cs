using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.DataStore;
using System.Data.SqlClient;

namespace QsWebSoft.Service
{
    /// <summary>
    /// DefFormula 的摘要说明
    /// </summary>
    public class DefFormula : ServiceBase
    {
        public void GetValueList()
        {
         
            string tableName = Request.Form["tableName"].ToString();
            string fieldName = Request.Form["fieldName"].ToString(); 

            string result = string.Empty;
            int row = 0;
            //只是简单演示通过WebService返回不同的数据,实际项目一般是从数据库取数
            //string[] ls_Tables = new string[] { "JB", "YG", "KQ", "JF", "ZQ" };
            SafeDS ds = new SafeDS("d_hr_salary_defformula_valuelist");
            switch (tableName)
            {
                case "YG":
                    {
                        switch (fieldName)
                        {
                            case "deptid":
                                row = ds.InsertRow(0);
                                ds.SetItem(row, "value", "001");
                                row = ds.InsertRow(0);
                                ds.SetItem(row, "value", "002");
                                break;

                            case "deptname":
                                row = ds.InsertRow(0);
                                ds.SetItem(row, "value", "办公室");
                                row = ds.InsertRow(0);
                                ds.SetItem(row, "value", "信息中心");
                                break;
                            case "salarytype":
                                row = ds.InsertRow(0);
                                ds.SetItem(row, "value", "月薪");
                                row = ds.InsertRow(0);
                                ds.SetItem(row, "value", "日薪");
                                break;
                        }
                    }
                    break;
            }

            if (ds.RowCount > 0)
            {
                Response.Write(ds.GetSyntaxData());
            }
            ds.Dispose();
            ds = null; 
       
        }

       
        
    }
}