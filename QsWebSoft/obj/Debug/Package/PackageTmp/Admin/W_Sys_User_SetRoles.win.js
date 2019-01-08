﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Sys_User_SetRoles() {

    var self = this;
    var requestor = new PBWindow();
    var dw_3 = new DataWindow(requestor);
    var sle_2 = new SingleLineEdit(requestor);
    var tb_2 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var dw_2 = new DataWindow(requestor);
    var dw_1 = new DataWindow(requestor);
    var dw_4 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ContextMenuStrip2 = new ContextMenu(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_3 == null) dw_3 = new DataWindow(requestor);
        dw_3.Attach(win.Control("dw_3"));
        if (sle_2 == null) sle_2 = new SingleLineEdit(requestor);
        sle_2.Attach(win.Control("sle_2"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (dw_2 == null) dw_2 = new DataWindow(requestor);
        dw_2.Attach(win.Control("dw_2"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (dw_4 == null) dw_4 = new DataWindow(requestor);
        dw_4.Attach(win.Control("dw_4"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ContextMenuStrip2 == null) ContextMenuStrip2 = new ContextMenu(requestor);
        ContextMenuStrip2.Attach(win.Control("ContextMenuStrip2"));

        if (typeof (self.ysqjs_EditChanged) == "function")
            win.AttachEvent("sle_2", "EditChanged", self.ysqjs_EditChanged);

        if (typeof (self.jssz_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.jssz_EditChanged);

        if (typeof (self.dw_2_Clicked) == "function")
            win.AttachEvent("dw_2", "Clicked", self.dw_2_Clicked);

        if (typeof (self.dw_1_Clicked) == "function")
            win.AttachEvent("dw_1", "Clicked", self.dw_1_Clicked);

        if (typeof (self.RemoveUsers) == "function")
            win.AttachEvent("cb_3", "Clicked", self.RemoveUsers);

        if (typeof (self.AddUsers) == "function")
            win.AttachEvent("cb_1", "Clicked", self.AddUsers);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_OK", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Exit", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_3.Detach(); dw_3 = null;
        sle_2.Detach(); sle_2 = null;
        tb_2.Detach(); tb_2 = null;
        sle_1.Detach(); sle_1 = null;
        dw_2.Detach(); dw_2 = null;
        dw_1.Detach(); dw_1 = null;
        dw_4.Detach(); dw_4 = null;
        tb_1.Detach(); tb_1 = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

	 var dataChanged = false;
	 this.AddUsers = function () {
	     if (dw_1.RowCount() <= 0)
	         return;
	     if (dw_1.GetSelectedRow(0) <= 0) {
	         requestor.MessageBox("提示", "请选择要增加的用户帐号!");
	         return;
	     }

	     dw_1.SetRedraw(false);
	     dw_2.SetRedraw(false);

	     var filter = dw_1.Describe("datawindow.table.filter");
	     if (filter == "?" || filter == "!")
	         filter = "";
	     var sle_1_text = sle_1.GetText();
	     if (sle_1_text == "" || sle_1_text == null) {

	         dw_1.SetFilter("isSelected() ");
	     } else {
	         dw_1.SetFilter("isSelected() and Upper(name) like Upper('%" + sle_1_text + "%')");
	     }

	     dw_1.Filter();

	     dw_1.RowsMove(1, dw_1.RowCount(), DWBUFFER.Primary, dw_2, dw_2.RowCount() + 1, DWBUFFER.Primary);
	     dw_1.SetFilter(filter);
	     dw_1.Filter();

	     dw_2.SelectRow(0, false);
	     dw_1.SelectRow(0, false);
	     dw_1.SetRedraw(true);
	     dw_2.SetRedraw(true);
	     dataChanged = true;

	 }

	 this.RemoveUsers = function () {

	     if (dw_2.RowCount() <= 0)
	         return; 
	     if (dw_2.GetSelectedRow(0) <= 0) {
	         requestor.MessageBox("提示", "请选择要移除的用户帐号!");
	         return;
	     }

        dw_1.SetRedraw(false);
        dw_2.SetRedraw(false);

        var sle_2_text = sle_2.GetText();
        if (sle_2_text == "" || sle_2_text == null) {

            dw_2.SetFilter("isSelected() ");
        } else {
            dw_2.SetFilter("isSelected() and Upper(name) like Upper('%" + sle_2_text + "%')");
        }

//        dw_2.SetFilter("isSelected()");
        dw_2.Filter();

        dw_2.RowsMove(1, dw_2.RowCount(), DWBUFFER.Primary, dw_1, dw_1.RowCount() + 1, DWBUFFER.Primary);

        if (sle_2_text == "" || sle_2_text == null) {
            dw_2.SetFilter("");
        } else {
            dw_2.SetFilter("Upper(name) like Upper('%" + sle_2_text + "%')");
        }

//        dw_2.SetFilter("");
        dw_2.Filter();

        dw_2.SelectRow(0, false);
        dw_1.SelectRow(0, false);
        dw_1.SetRedraw(true);
        dw_2.SetRedraw(true);
        dataChanged = true;
    }
    //过滤
    this.jssz_EditChanged = function (text) {
        dw_1.SetRedraw(false);
        if (text == "")
            dw_1.SetFilter("");
        else
            dw_1.SetFilter("Upper(name) like Upper('%" + text + "%')");
        dw_1.Filter();
        dw_1.Sort();
        dw_1.SetRedraw(true);
    }

    //过滤
    this.ysqjs_EditChanged = function (text) {
        dw_2.SetRedraw(false);
        if (text == "")
            dw_2.SetFilter("");
        else
            dw_2.SetFilter("Upper(name) like Upper('%" + text + "%')");
        dw_2.Filter();
        dw_2.Sort();
        dw_2.SetRedraw(true);
    }

    this.Save = function () {
        if (!dataChanged) {
            requestor.MessageBox("提示", "未调整角色用户帐号资料,不需要保存!");
            return;
        }


        //        var dw_d_data = dw_2.GetChanges();
        //        alert(dw_2.DeletedCount());
        //        alert(dw_d_data);
        self.ysqjs_EditChanged("");
        self.jssz_EditChanged("");


        var id = escape(dw_3.GetItemString(1, "id"));
        //var data = dw_2.GetChanges();
        var data = "";
        for (row = 1; row <= dw_2.RowCount(); row++) {
            data += escape(dw_2.GetItemString(row, "id")) + ";"
        }

        webReq.Invoke("SetUserRoles", "userid=" + id + "&roles=" + data);
        if (webReq.StatusCode() == 200) {
            requestor.MessageBox("提示", "更新角色用户成功!");
            dataChanged = false;
            requestor.Close();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText());
        }
    }

	 this.Exit = function () {
	     if(dataChanged) {
	         if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
	             return;
	     }

	     requestor.Close();
	 }

	 this.dw_1_Clicked = function (xPos, yPos, Row, dwoName) {
	     if (Row > 0) {
	         var roles = dw_1.GetItemString(Row, "id");
	         self.dw_4_Retrieve(roles);
	     }
	 };
	 this.dw_2_Clicked = function (xPos, yPos, Row, dwoName) {
	     if (Row > 0) {
	         var roles = dw_2.GetItemString(Row, "id");
	         self.dw_4_Retrieve(roles);
	     };
	 };
	 this.dw_4_Retrieve = function (roles) {
	     dw_4.Retrieve(roles);
	 };

 }