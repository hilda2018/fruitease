using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using Microsoft.Win32;
using System.Configuration;

using TXSoft.Common;
using System.Diagnostics;
//using System.Windows.Forms;

namespace QsWebSoft
{
    public class ExcelPrintHelper 
    {
        public void ShowPrintView(string strReportName, string tt_no, List<string> parms, ref string strFileName, ref string error)
        {
            lock (this)
            {
                try
                {
                    strFileName = "";


                    string strFilePath = AppDomain.CurrentDomain.BaseDirectory;
                    if (strFilePath.EndsWith("\\"))
                    {
                        strFilePath = strFilePath + "EXCEL\\";
                    }
                    else
                    {

                        strFilePath = strFilePath + "\\EXCEL\\";
                    }

                    #region 判断文件夹,如果不存在则重新创建
                    //if (Directory.Exists(strFilePath))
                    //{
                    //    try
                    //    {
                    //        Directory.Delete(strFilePath, true);
                    //    }
                    //    catch
                    //    {
                    //        error = "生成报表文件时删除原报表格式错误,可能是EXCEL 文件夹下文件正在使用,请先关闭!";
                    //        return;
                    //    }
                    //}

                    //Directory.CreateDirectory(strFilePath);
                    if (!Directory.Exists(strFilePath))
                    {
                        Directory.CreateDirectory(strFilePath);
                    }

                    #endregion
                    //ChangRegedit(ref error);//注册数据源
                    SheetPrint print1 = new SheetPrint();
                    //测试用
                    //获取导出模板
                    string[] paras = null;
                    PubMethod.GetExcelParm(strReportName, tt_no, ref paras);
                    if (paras == null)
                    {
                        return;
                    }
                    else
                    {
                        print1.Parameter = paras[0];
                        print1.SQLText = paras[1];
                        print1.Path = paras[2];
                    }
                    strFileName = Guid.NewGuid().ToString();
                    ScEXCEL(print1, strFilePath, strFileName, ref error);
                    if (string.IsNullOrEmpty(error))
                    {
                        ScBb(parms, strFilePath, strFileName, ref error);//生成报表
                        if (!string.IsNullOrEmpty(error))
                        {
                            strFileName = "";
                        }
                    }
                    else
                    {
                        strFileName = "";
                    }

                    GC.Collect();
                }
                catch (Exception ex)
                {
                    if (File.Exists(AppDomain.CurrentDomain.BaseDirectory + "Report\\" + strFileName + ".xls"))
                    {
                        File.Delete(AppDomain.CurrentDomain.BaseDirectory + "Report\\" + strFileName + ".xls");
                    }
                    strFileName = "";
                    throw ex;
                }
                finally
                {
                    GC.Collect();
                    //GC.WaitForPendingFinalizers(); 
                }
            }

        }

        /// <summary>
        /// 删除已经存在的模板
        /// </summary>
        /// <returns></returns>
        public  bool DeleteMb(string strFilePath, string strKeyWord ,ref string error)
        {
            if (File.Exists(strFilePath + "Report\\" + strKeyWord + ".xls"))
            {
                try
                {
                    File.Delete(strFilePath + "Report\\" + strKeyWord + ".xls");
                }
                catch
                {
                    error="生成报表文件时删除原报表格式错误,可能是EXCEL 文件夹下文件已打开,请先关闭!";
                    return false;
                }
            }
            if (File.Exists(strFilePath + "Report\\" + strKeyWord + "bak.xls"))
            {
                try
                {
                    File.Delete(strFilePath + "Report\\" + strKeyWord + "bak.xls");
                }
                catch
                {
                    error="生成报表文件时删除原报表格式错误,可能是EXCEL 文件夹下文件已打开,请先关闭!";
                    return false;
                }
            }
            return true;
        }
        /// <summary>
        /// 生成有EXCEL报表服务
        /// </summary>
        /// <param name="parms">参数</param>
        /// <param name="strFilePath">路径</param>
        /// <param name="strFileName">文件名</param>
        public void ScBb(List<string> parms, string strFilePath, string strFileName,ref string error)
        {
            #region 生成EXCEL报表
            lock (this)
            {
                try
                {
                    XLReport rt = new XLReport();
                    Microsoft.Office.Interop.Excel.Application xlpp
                        = new Microsoft.Office.Interop.Excel.Application();

                    xlpp.DisplayAlerts = false;　　　　//不显示警告 
                    xlpp.Application.Visible = false;　　　　//不显示界面 
                    int count = parms.Count;
                    #region 构造参数
                    string k1 = string.Empty; string k2 = string.Empty;
                    string k3 = string.Empty; string k4 = string.Empty;
                    string k5 = string.Empty; string k6 = string.Empty;
                    string k7 = string.Empty; string k8 = string.Empty;
                    string k9 = string.Empty; string k0 = string.Empty;

                    for (int i = 0; i < count; i++)
                    {
                        string k = parms[i];

                        switch (i)
                        {
                            case 0:
                                k0 = k;
                                break;
                            case 1:
                                k1 = k;
                                break;
                            case 2:
                                k2 = k;
                                break;
                            case 3:
                                k3 = k;
                                break;
                            case 4:
                                k4 = k;
                                break;
                            case 5:
                                k5 = k;
                                break;
                            case 6:
                                k6 = k;
                                break;
                            case 7:
                                k7 = k;
                                break;
                            case 8:
                                k8 = k;
                                break;
                            case 9:
                                k9 = k;
                                break;
                            default:
                                break;
                        }
                    }
                    #endregion
                    string name = strFilePath + "\\" + strFileName + ".xrf";
                    //Process[] ps = Process.GetProcessesByName("Excel");
                    //foreach (Process p in ps)
                    //{
                    //    if (Process.getxlpp.)
                    //    //输出进程路径
                    //    p.Kill();
                    //}
                    rt.ExcelReport(ref xlpp, ref name, ref k0, ref k1, ref k2, ref k3, ref k4, ref k5, ref k6, ref k7, ref k8, ref k9);

            #endregion
                    //string filepath = strFilePath + "Report\\" + strFileName + ".xls";

                    //xlpp.Workbooks.Open(filepath);
                    //xlpp.ActiveWorkbook.Save();

                    xlpp.Quit();
                    xlpp = null;
                    //System.Runtime.InteropServices.Marshal.ReleaseComObject((object)xlpp);
                    //System.GC.GetGeneration(xlpp);
                }
                catch (Exception ex)
                {
                    error += strFileName + "\r\n";
                    error = "生成报表出错！" + ex.Message;

                    string strModuleExcel = strFilePath + "Error.txt";
                    //if (File.Exists(strModuleExcel))
                    //{
                    //    File.Delete(strModuleExcel);
                    //}
                    FileStream fs_stream = new FileStream(strModuleExcel, FileMode.OpenOrCreate);
                    BinaryWriter writefile = new BinaryWriter(fs_stream);
                    writefile.Write(HttpUtility.UrlDecode(error, System.Text.Encoding.UTF8));
                    writefile.Close();

                    throw ex;
                }
                finally
                {
                    //删除模板
                    if (File.Exists(strFilePath + strFileName + ".xls"))
                    {
                        File.Delete(strFilePath + strFileName + ".xls");
                    }

                    if (File.Exists(strFilePath + strFileName + ".xrf"))
                    {
                        File.Delete(strFilePath + strFileName + ".xrf");
                    }

                    if (File.Exists(strFilePath + strFileName + ".log"))
                    {
                        File.Delete(strFilePath + strFileName + ".log");
                    }
                }

                ////删除模板
                //if (File.Exists(strFilePath + strFileName + ".xls"))
                //{
                //    File.Delete(strFilePath + strFileName + ".xls");
                //}

                //if (File.Exists(strFilePath + strFileName + ".xrf"))
                //{
                //    File.Delete(strFilePath + strFileName + ".xrf");
                //}

                //if (File.Exists(strFilePath + strFileName + ".log"))
                //{
                //    File.Delete(strFilePath + strFileName + ".log");
                //}
                //process.Close();
                //process.Dispose();
            }
        }

        /// <summary>
        /// 生成EXCEL模板文件和执行文件
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="strFilePath"></param>
        /// <param name="strKeyWord"></param>
        public  void ScEXCEL(SheetPrint obj, string strFilePath, string strKeyWord, ref string error)
        {
            lock (this)
            {
                try
                {
                    if (obj == null) return;
                    if (string.IsNullOrEmpty(obj.Parameter))
                    {
                        error = "设置参数不全,无法生成模板!";
                        return;
                    }
                    if (string.IsNullOrEmpty(obj.SQLText))
                    {
                        error = "设置SQL不全,无法生成模板!";
                        return;
                    }
                    if (string.IsNullOrEmpty(obj.Path))
                    {
                        error = "未指定EXCEL模板!";
                        return;
                    }
                    string templeFilePath = obj.Path;
                    if (!templeFilePath.StartsWith(@"\"))
                    {
                        templeFilePath = @"\" + templeFilePath;
                    }
                    templeFilePath = AppDomain.CurrentDomain.BaseDirectory + "ExcelTemple\\" + templeFilePath;
                    if (!File.Exists(templeFilePath))
                    {
                        error = "指定的EXCEL模板不存在!";
                        return;
                    }

                    //生成EXCEL模板文件
                    System.IO.FileStream fs = new System.IO.FileStream(templeFilePath, System.IO.FileMode.Open, System.IO.FileAccess.Read, FileShare.ReadWrite);

                    byte[] bytes = new byte[(int)fs.Length];

                    fs.Read(bytes, 0, bytes.Length);

                    fs.Close();

                    //if (!File.Exists(strFilePath)) Directory.CreateDirectory(strFilePath);
                    string strModuleExcel = strFilePath + strKeyWord + ".xls";
                    File.Delete(strModuleExcel);
                    FileStream fs_stream = new FileStream(strModuleExcel, FileMode.CreateNew);
                    BinaryWriter writefile = new BinaryWriter(fs_stream);
                    writefile.Write(bytes);
                    writefile.Close();

                    //2.生成XLEXCEL文件
                    string strModuleXlt = strFilePath + strKeyWord + ".xrf";
                    FileStream fsxls = new FileStream(strModuleXlt, FileMode.OpenOrCreate, FileAccess.Write);
                    StreamWriter sw = new StreamWriter(fsxls, System.Text.Encoding.GetEncoding("GB2312"));//通过指定字符编码方式可以实现对汉字的支持，否则在用记事本打开查看会出现乱码
                    sw.Flush();
                    sw.BaseStream.Seek(0, SeekOrigin.Begin);

                    GetConnectString con = new GetConnectString();
                    GetDataSouce conn = con.GetDataSouce();
                    string strText = "";
                    strText = "ExcelReport Version 2.0" + "\r\n" +
                               "[Data Source]" + "\r\n" +
                               "Name1=QswmExcelExport" + "\r\n" +
                               "User1=" + "sa" + "\r\n" +
                               "Password1=" + conn.UsePassword + "\r\n" +
                                "" + "\r\n" +
                                "[File] " + "\r\n" +
                                "ReportTemplateFileName=" + strKeyWord + ".xls" + "\r\n" +
                                "ReportFileName=Report\\" + strKeyWord + ".xls" + "\r\n" +
                                "LogFileName=" + strFilePath + strKeyWord + ".log" + "\r\n"
                               ;

                    strText = strText + obj.Parameter + "\r\n" + "[SQL]" + "\r\n" + obj.SQLText;
                    sw.WriteLine(strText);
                    sw.Flush();
                    sw.Close();
                }
                catch (Exception ex)
                {
                    error = "生成Excel失败！" + ex.Message;
                    //string strModuleExcel = strFilePath + "Errorxls.txt";

                    //FileStream fs_stream = new FileStream(strModuleExcel, FileMode.CreateNew);
                    //BinaryWriter writefile = new BinaryWriter(fs_stream);
                    //writefile.Write(HttpUtility.UrlEncode(error, System.Text.Encoding.UTF8));
                    //writefile.Close();

                    throw ex;
                }
            }
        }

        #region 报表连接
        //***************************************************************************************
        //说明：1.设计 Excel报表的连接要求新建的ODBC数据源，数据源的名称为QswmExcelReport（不能用其它名称数据源）
        //      2.客户端应用程序如果没有注册QswmExcelReport数据源，则系统会自动注册  
        //      3.在设计报表时一定要使用 QswmExcelReport数据源。      
        //***************************************************************************************
        /// <summary>
        /// EXCEL报表 连接 参数 注册表信息
        /// </summary>
        public  void ChangRegedit(ref string error)
        {
            try
            {
                string keyname = "QswmExcelExport";
                bool exist = IsRegeditExit(keyname);
                if (exist)
                {
                    return;
                }
                try
                {
                    string strPathCC = "\"" + AppDomain.CurrentDomain.BaseDirectory + @"XLReportCom.dll" + "\"";
                    System.Diagnostics.Process.Start("regsvr32", strPathCC + " /s");

                    RegistryKey hkml = Registry.CurrentUser;
                    RegistryKey software = hkml.OpenSubKey("SOFTWARE", true);
                    RegistryKey aimdir = software.OpenSubKey("ODBC", true);
                    RegistryKey kk1 = aimdir.OpenSubKey("ODBC.INI", true);
                    RegistryKey das = kk1.OpenSubKey("ODBC Data Sources", true);
                    das.SetValue(keyname, "SQL Server");

                    GetConnectString con = new GetConnectString();
                    GetDataSouce conn = con.GetDataSouce();

                    List<string[]> strs = new List<string[]>();
                    strs.Add(new string[] { "Database", conn.Database });
                    strs.Add(new string[] { "Description", "导出EXECL" });
                    strs.Add(new string[] { "Driver", "C:\\WINDOWS\\system32\\SQLSRV32.dll" });
                    strs.Add(new string[] { "LastUser", conn.UseID });
                    strs.Add(new string[] { "Server", conn.Datasource });
                    WTRegedit(strs, keyname);
                }
                catch
                {
                    error = "创建EXCEL报表连接ODBC数据源时发生错误!";
                }
            }
            catch
            { 

            }
        }
        #region 修改注册表
        //1.读取指定名称的注册表的值 
        private string GetRegistData(string name)
        {
            string registData;
            RegistryKey hkml = Registry.CurrentUser;
            RegistryKey software = hkml.OpenSubKey("SOFTWARE", true);
            RegistryKey aimdir = software.OpenSubKey("ODBC", true);
            RegistryKey kk1 = aimdir.OpenSubKey("ODBC.INI", true);
            registData = kk1.GetValue(name).ToString();
            return registData;
        }
        //2.向注册表中写数据 
        private static void WTRegedit(List<string[]> strs, string Keyname)
        {

            RegistryKey hklm = Registry.CurrentUser;
            RegistryKey software = hklm.OpenSubKey("SOFTWARE", true);
            RegistryKey aimdir = software.OpenSubKey("ODBC", true);
            RegistryKey kk1 = aimdir.OpenSubKey("ODBC.INI", true);

            RegistryKey key = kk1.CreateSubKey(Keyname);
            foreach (var item in strs)
            {
                key.SetValue(item[0], item[1]);
            }
        }
        //以上是在注册表中HKEY_LOCAL_MACHINE\SOFTWARE目录下新建XXX目录并在此目录下创建名称为name值为tovalue的注册表项； 

        //3.删除注册表中指定的注册表项 
        private void DeleteRegist(string name)
        {
            string[] aimnames;
            RegistryKey hkml = Registry.CurrentUser;
            RegistryKey software = hkml.OpenSubKey("SOFTWARE", true);
            RegistryKey aimdir = software.OpenSubKey("ODBC", true);
            RegistryKey kk1 = aimdir.OpenSubKey("ODBC.INI", true);
            aimnames = kk1.GetSubKeyNames();
            foreach (string aimKey in aimnames)
            {
                if (aimKey == name)
                {
                    kk1.DeleteSubKeyTree(name);
                }
                if (aimKey == "ODBC Data Sources")
                {
                    RegistryKey key = kk1.OpenSubKey("ODBC Data Sources", true);
                    key.DeleteValue(name);
                }
            }
        }
        //以上是在注册表中HKEY_LOCAL_MACHINE\SOFTWARE目录下XXX目录中删除名称为name注册表项； 

        //4.判断指定注册表项是否存在 
        private static bool IsRegeditExit(string name)
        {
            bool _exit = false;
            string[] subkeyNames;
            RegistryKey hkml = Registry.CurrentUser;
            RegistryKey software = hkml.OpenSubKey("SOFTWARE", true);
            RegistryKey aimdir = software.OpenSubKey("ODBC", true);
            RegistryKey kk1 = aimdir.OpenSubKey("ODBC.INI", true);
            subkeyNames = kk1.GetSubKeyNames();
            foreach (string keyName in subkeyNames)
            {
                if (keyName == name)
                {
                    _exit = true;
                    return _exit;
                }
            }
            return _exit;
        }
        #endregion
        public class GetDataSouce
        {
            public string Database { get; set; }
            public string DataBase_add { get; set; }
            public string Datasource { get; set; }
            public string UseID { get; set; }
            public string UsePassword { get; set; }
        }
        public class GetConnectString
        {
            /// <summary>
            /// 获取数据库参数配置
            /// </summary>
            /// <returns></returns>
            private string[] GetDataBase()
            {
                string[] strings = new string[5];

                var name1 = System.Configuration.ConfigurationManager.ConnectionStrings;

                string[] kkk = name1["DBConnection"].ConnectionString.Split(';');
                for (int i = 0; i < kkk.Length; i++)
                {
                    int k = kkk[i].IndexOf('=');
                    strings[i] = kkk[i].Substring(k + 1, (kkk[i].Length - k - 1));
                }

                return strings;

            }

            public GetDataSouce GetDataSouce()
            {
                string[] data = GetDataBase();
                GetDataSouce obj = new GetDataSouce();
                obj.Database = data[1];
                //obj.DataBase_add = data[4];
                obj.Datasource = data[0];
                obj.UseID = data[2];
                obj.UsePassword = data[3];

                return obj;
            }
        }
        #endregion
       
    }
}
