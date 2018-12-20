using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TXSoft.ExtPB;
using TXSoft.DataStore;

namespace QsWebSoft
{
     public  partial class BaseWindow : TXSoft.ExtPB.Window
    {

        //如果需要把权限信息传递到客户端，则使用窗口的PermissionDataStore对象
        private SafeDS _dsRight = null; 

        public override bool OnPreLoad()
        {
            if (!base.OnPreLoad())
                return false;

            if (AppService.GetUserID() == "admin")
                return true;

            //如果当前窗口设置了模块ID,取权限列表
            if (!string.IsNullOrEmpty(this.FunctionID))
            {
                //如果不需要把权限信息传到客户端，不要用PermissionDataStore,直接用new SafeDS

                _dsRight = new SafeDS("d_sys_user_permissions");

                _dsRight.SetTransaction(this.AdoTransaction);
                _dsRight.Retrieve(AppService.GetUserID(), this.FunctionID);

                if (this._dsRight.RowCount <= 0)
                {
                    _dsRight.Dispose();
                    _dsRight = null;
                    return true;
                }

                //如果系统有定义权限，但当前用户没有该模块的任何一个功能的权限
                //则作为没有权限打开该窗口
                if (_dsRight.FindRow("HasRight='1' ", 1, _dsRight.RowCount) <= 0)
                {
                    _dsRight.Dispose();
                    _dsRight = null;
                    this.LoadErrorMessage = "当前登录用户没有相应模块的权限";
                    this.LoadSuccessed = false;
                    return false;
                }
            }

     
            return true;
        }

       //控件或工具栏按钮（菜单）对象在输出之前，会先调用这个窗口函数
       //这样可以对同类控件作通用化的处理,例如统一调整数据窗口的的格式等
       //还可以根据窗口的用户权限,更新控件的状态,如果不需要把对象输出到客户端，则返回 false, 否则返回true
        public override bool PreRenderObject(object component)
        {
           if(component == null)
                return false;

            if(_dsRight == null || _dsRight.RowCount ==0 )
                return true; 
    
              Type type = component.GetType();

            //是否工具栏按钮或菜单项目

              if (typeof(TXSoft.ExtPB.ToolStripItem).IsAssignableFrom(type))
              {
                  ToolStripItem item = component as ToolStripItem;

                  if (string.IsNullOrEmpty(item.Name))
                      return base.PreRenderObject(component) ; 

                  //如果原来项目visible或enabled为false,则不处理
                  if(item.Visible == false || item.Enabled == false)
                      return base.PreRenderObject(component);

    
                 int findRow = _dsRight.FindRow("Lower(objName)='" + item.Name.ToLower() + "'", 1, _dsRight.RowCount);  //名称不区分大小写
                  if (findRow > 0)
                  {

                      if (_dsRight.GetItemString(findRow, "hasright") != "1")
                          item.Visible = false;  //如果项目不需要输出到客户端，则直接返回false
                  }
              }
              else if(typeof(TXSoft.ExtPB.CommandButton).IsAssignableFrom(type))
              {
                  CommandButton btn = component as CommandButton;

                  if (string.IsNullOrEmpty(btn.Name))
                      return base.PreRenderObject(component); 

                  if (btn.Visible == false || btn.Enabled == false)
                      return base.PreRenderObject(component);

                  int findRow = _dsRight.FindRow("Lower(objName)='" + btn.Name.ToLower() + "'", 1, _dsRight.RowCount);  //名称不区分大小写
                  if (findRow > 0)
                  {

                      if (_dsRight.GetItemString(findRow, "hasright") != "1")
                          btn.Enabled = false;  
                  }
              }
            
            return base.PreRenderObject(component);
        }


    
        public override void Dispose()
        {
            if (_dsRight != null)
            {
                _dsRight.Dispose();
                _dsRight = null; 
            }
            base.Dispose();
        }

        
        //public virtual void UpdateControls(DragObject objParent)
        //{
        //    if (!objParent.HasChilds)
        //        return;

        //    foreach (DragObject obj in objParent.Controls)
        //    {
        //        Type type = obj.GetType();

        //        //只对控钮进行判断
        //        if (typeof(TXSoft.ExtPB.CommandButton).IsAssignableFrom(type))
        //        {
        //            int findRow = this.PermissionDataStore.FindRow("Lower(objName)='" + obj.Name.ToLower() + "'", 1, this.PermissionDataStore.RowCount);
        //            if (findRow > 0)
        //            {
        //                if (this.PermissionDataStore.GetItemString(findRow, "HasRight") != "1")
        //                    obj.Enabled = false;
        //            }

        //        }
        //        else if (typeof(TXSoft.ExtPB.ToolStrip).IsAssignableFrom(type))
        //        {
        //            UpdateToolStrip(obj as ToolStrip);
        //        }
        //        else if (typeof(TXSoft.ExtPB.StatusStrip).IsAssignableFrom(type))
        //        {
        //            UpdateToolStrip(obj as ToolStrip);
        //        }
        //        else if (obj.HasChilds)  //递归查找子控件
        //        {
        //            UpdateControls(obj);
        //        }

        //    }
        //}

        //public virtual void UpdateToolStrip(ToolStrip strip)
        //{
        //    if (!strip.HasItems)
        //        return;

        //    foreach (ToolStripItem item in strip.Items)
        //    {
        //        int findRow = this.PermissionDataStore.FindRow("Lower(objName)='" + item.Name.ToLower() + "'", 1, this.PermissionDataStore.RowCount);
        //        if (findRow > 0)
        //        {
        //            if (this.PermissionDataStore.GetItemString(findRow, "HasRight") != "1")
        //                item.Enabled = false;
        //        }

        //        if (typeof(TXSoft.ExtPB.ToolStripDropDownItem).IsAssignableFrom(item.GetType()))
        //        {
        //            UpdateToolStripDropDownItem((TXSoft.ExtPB.ToolStripDropDownItem)item);
        //        }
        //    }
        //}

        //public virtual void UpdateToolStripDropDownItem(ToolStripDropDownItem dropDownItem)
        //{
        //    if (!dropDownItem.HasDropDownItems())
        //        return;

        //    foreach (ToolStripItem item in dropDownItem.DropDownItems)
        //    {
        //        int findRow = this.PermissionDataStore.FindRow("Lower(objName)='" + item.Name.ToLower() + "'", 1, this.PermissionDataStore.RowCount);
        //        if (findRow > 0)
        //        {
        //            if (this.PermissionDataStore.GetItemString(findRow, "HasRight") != "1")
        //                item.Enabled = false;
        //        }
        //        if (typeof(TXSoft.ExtPB.ToolStripDropDownItem).IsAssignableFrom(item.GetType()))
        //        {
        //            UpdateToolStripDropDownItem((TXSoft.ExtPB.ToolStripDropDownItem)item);
        //        }
        //    }
        //}

        //public override void Render(System.Xml.XmlTextWriter writer)
        //{
        //    //在生成xml之前，根据权限设置相应控件的状态
        //    if (this.PermissionDataStore.RowCount > 0)
        //    {
        //        UpdateControls(this);
        //    }

        //    base.Render(writer);
        //}
    }
}