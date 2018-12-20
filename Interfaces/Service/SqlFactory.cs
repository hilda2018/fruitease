using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using Attributes;

namespace Interfaces.Service
{
    /// <summary>
    /// 根据对象生成sql
    /// </summary>
    public class SqlFactory
    {

        #region Insert
        /// <summary>
        /// 根据对象获取插入sql
        /// </summary>
        /// <param name="obj">对象</param>
        /// <returns>sql</returns>
        public static string GetInsertSql(object obj)
        {
            //string[] ModelInfo = Common<object>.GetModelInfo(obj);


            //log.Debug("Insert 代码如下：");
            return GetInsertSql(obj, obj.GetType().Name.Replace("Entity", ""));
        }

        /// <summary>
        /// 根据对象获取插入sql
        /// </summary>
        /// <param name="obj">对象</param>
        /// <returns>sql</returns>
        public static string GetInsertSql(object obj, string TableName)
        {

            StringBuilder Columns = new StringBuilder("");
            StringBuilder Values = new StringBuilder("");
            Type t = obj.GetType();
            string sql = "insert into " + TableName + " ({0}) values ({1})";
            PropertyInfo[] pis = t.GetProperties();


            for (int i = 0; i < pis.Length; i++)
            {

                //if (pis[i].GetValue(obj, null) == null)
                //{
                //    continue;
                //}

                var colName = pis[i].Name.ToString();
                ColumnAttribute attr = (ColumnAttribute)pis[i].PropertyType.GetCustomAttributes(typeof(ColumnAttribute), true).FirstOrDefault();
                if (attr != null)
                {
                    if (attr.ReadOnly)//只读排除构建sql
                        continue;
                }

                //转换小写 防止Mysql区分大小写
                Columns.Append(colName);
                Values.Append("@" + colName);
                Columns.Append(",");
                Values.Append(",");
            }
            //log.Debug("Insert 代码如下：");
            return string.Format(sql, Columns.ToString().TrimEnd(','), Values.ToString().TrimEnd(','));

        }
        #endregion

        #region Update
        /// <summary>
        /// 根据对象获取修改sql，调用该方法 必须有GetPK方法
        /// </summary>
        /// <returns>sql</returns>
        public static string GetUpdateSql(object obj)
        {
            string[] ModelInfo = Common<object>.GetModelInfo(obj);
            //StringBuilder Columns = new StringBuilder("");

            Type t = obj.GetType();
            return GetUpdateSql(obj, ModelInfo[0], ModelInfo[1]);

        }
        /// <summary>
        /// 根据对象获取修改sql
        /// </summary>
        /// <returns>sql</returns>
        public static string GetUpdateSql(object obj, string TableName, string PKField)
        {

            //StringBuilder Columns = new StringBuilder("");
            StringBuilder Values = new StringBuilder("");
            Type t = obj.GetType();
            string sql = "update " + TableName + " set ";
            PropertyInfo[] pis = t.GetProperties();
            for (int i = 0; i < pis.Length; i++)
            {
                var colName = pis[i].Name.ToString();
                ColumnAttribute attr = (ColumnAttribute)pis[i].PropertyType.GetCustomAttributes(typeof(ColumnAttribute), true).FirstOrDefault();
                if (attr != null)
                {
                    if (attr.IsPK && string.IsNullOrEmpty(PKField))
                    {
                        PKField = colName;
                    }
                    if (attr.IsPK || attr.ReadOnly || attr.EditDisable)//主键、只读、不可修改列排除构建sql
                        continue;
                }

                Values.Append(colName + "=@" + colName);
                Values.Append(",");
            }
            string conditions = PKField + "=@" + PKField;

            return sql + Values.ToString().TrimEnd(',') + " where " + conditions; ;
        }
        #endregion

        #region Select

        public static string GetSelectListSql(object obj)
        {

            StringBuilder strSql = new StringBuilder("");
            Type t = obj.GetType();
            strSql.Append("select * from " + t.Name.Replace("Entity", ""));

            return strSql.ToString();
        }
        public static string GetPageSelectListSql(object obj, string ordercol, int pageIndex, int pageSize, string strWhere)
        {

            StringBuilder strSql = new StringBuilder("");
            Type t = obj.GetType();
            var tableName = t.Name.Replace("Entity", "");
            strSql.Append("select top " + pageSize + " * from(select row_number() over(order by " + ordercol + ") as rownumber, A.* from "
                + " (select * from " + tableName + (string.IsNullOrEmpty(strWhere) ? "" : " where " + strWhere) + ") A) B"
                + " where rownumber >" + pageIndex);
            return strSql.ToString();
        }

        #endregion
    }

    public class Common<T> where T : new()
    {
        #region DataTable 转Model,List
        public static T Dt2Model(DataTable dt)
        {
            return Dt2Model(dt.Rows[0]);
        }

        public static T Dt2Model(DataRow dr)
        {
            T obj = new T();
            Type type = obj.GetType();
            PropertyInfo[] pis = type.GetProperties();
            for (int i = 0; i < pis.Length; i++)
            {
                if (!dr.Table.Columns.Contains(pis[i].Name))
                {
                    continue;
                }
                string dbname = dr[pis[i].Name.ToString()].GetType().Name.ToString().ToLower();
                //修改可用于格式化数据了解
                if (dbname == "dbnull")
                {
                    continue;
                }
                else
                {
                    if (dr[pis[i].Name.ToString()].ToString() != "") //如果修改的列值不为null，转换（因为有可能导入的时候是用excel导入，有空值）
                    {
                        //pis[i].SetValue(obj, dr[pis[i].Name.ToString()], null);
                        if (pis[i].PropertyType.IsEnum) //属性类型是否表示枚举
                        {
                            object enumName = Enum.Parse(pis[i].PropertyType, dr[pis[i].Name.ToString()].ToString(), false);
                            pis[i].SetValue(obj, enumName, null); //获取枚举值，设置属性值
                        }
                        else
                        {
                            pis[i].SetValue(obj, dr[pis[i].Name.ToString()], null);
                        }
                    }

                }
            }
            return (T)obj;
        }


        /// <summary>
        /// 将DataTable转换成IList
        /// </summary>
        /// <param name="dt">要转换的DataTable</param>
        /// <returns>返回IList</returns>
        public static List<T> Dt2List(DataTable dt)
        {
            List<T> list = new List<T>();
            Type type = typeof(T);
            foreach (DataRow dr in dt.Rows)
            {
                T t = Dt2Model(dr);
                list.Add(t);
            }
            return list;
        }
        #endregion


        /// <summary>
        /// Convert a List{T} to a DataTable.
        /// </summary>
        public static DataTable ListToDataTable(List<T> items)
        {
            var tb = new DataTable(typeof(T).Name);

            PropertyInfo[] props = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);

            foreach (PropertyInfo prop in props)
            {
                Type t = GetCoreType(prop.PropertyType);
                tb.Columns.Add(prop.Name, t);
            }

            foreach (T item in items)
            {
                var values = new object[props.Length];

                for (int i = 0; i < props.Length; i++)
                {
                    values[i] = props[i].GetValue(item, null);
                }

                tb.Rows.Add(values);
            }

            return tb;
        }

        /// <summary>
        /// Determine of specified type is nullable
        /// </summary>
        public static bool IsNullable(Type t)
        {
            return !t.IsValueType || (t.IsGenericType && t.GetGenericTypeDefinition() == typeof(Nullable<>));
        }

        /// <summary>
        /// Return underlying type if type is Nullable otherwise return the type
        /// </summary>
        public static Type GetCoreType(Type t)
        {
            if (t != null && IsNullable(t))
            {
                if (!t.IsValueType)
                {
                    return t;
                }
                else
                {
                    return Nullable.GetUnderlyingType(t);
                }
            }
            else
            {
                return t;
            }
        }

        /// <summary>
        /// 通过反射获得对象名称和主键ID
        /// </summary>
        /// <param name="obj">对象</param>
        /// <returns>返回string[0]类名，string[1]主键</returns>
        public static string[] GetModelInfo(T obj)
        {
            string[] str = new string[2];
            Type T = obj.GetType();
            MethodInfo method = T.GetMethod("GetPK",
                                        BindingFlags.Public
                                        | BindingFlags.Instance,
                                        null, new Type[] { }, null);
            //通过反射执行ReturnAutoID方法，返回AutoID值
            string AutoID = method.Invoke(obj, null).ToString();
            str[0] = T.Name.ToString().ToLower().Replace("entity", "");
            str[1] = AutoID;
            //返回该Obj的名称以及ReturnAutoID的值
            return str;
        }

    }

    public class Tools
    {
        public static decimal ConvertDecimal(object str)
        {
            decimal num = 0;
            if (str == null)
                return num;
            decimal.TryParse(str.ToString(), out num);
            return num;
        }
        public static int ConvertInt(object str)
        {
            int num = 0;
            if (str == null)
                return num;
            int.TryParse(str.ToString(), out num);
            return num;
        }
    }
}
