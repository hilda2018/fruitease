///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_CpxxkEdit() {

    var self = this;
    var requestor = new PBWindow();
    var dw_master = new DataWindow(requestor);
    var sle_ts = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);
    var tab_1 = new TabControl(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_jzxxx = new DataWindow(requestor);
    var dw_jycljtyq = new DataWindow(requestor);
    var dw_jydzyq = new DataWindow(requestor);
    var dw_hgsj = new DataWindow(requestor);
    var dw_clqy = new DataWindow(requestor);
    var dw_slb = new DataWindow(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_jzxxx = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (sle_ts == null) sle_ts = new SingleLineEdit(requestor);
        sle_ts.Attach(win.Control("sle_ts"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_jzxxx == null) dw_jzxxx = new DataWindow(requestor);
        dw_jzxxx.Attach(win.Control("dw_jzxxx"));
        if (dw_jycljtyq == null) dw_jycljtyq = new DataWindow(requestor);
        dw_jycljtyq.Attach(win.Control("dw_jycljtyq"));
        if (dw_jydzyq == null) dw_jydzyq = new DataWindow(requestor);
        dw_jydzyq.Attach(win.Control("dw_jydzyq"));
        if (dw_hgsj == null) dw_hgsj = new DataWindow(requestor);
        dw_hgsj.Attach(win.Control("dw_hgsj"));
        if (dw_clqy == null) dw_clqy = new DataWindow(requestor);
        dw_clqy.Attach(win.Control("dw_clqy"));
        if (dw_slb == null) dw_slb = new DataWindow(requestor);
        dw_slb.Attach(win.Control("dw_slb"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_jzxxx == null) ds_jzxxx = new DataStore(requestor);
        ds_jzxxx.Attach(win.Control("ds_jzxxx"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.RowCopy) == "function")
            win.AttachEvent("btn_rowcopy", "Clicked", self.RowCopy);

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowinsert", "Clicked", self.InsertRow);

        if (typeof (self.dw_cmd_RowNext) == "function")
            win.AttachEvent("btn_rownext", "Clicked", self.dw_cmd_RowNext);

        if (typeof (self.dw_cmd_RowBack) == "function")
            win.AttachEvent("btn_rowback", "Clicked", self.dw_cmd_RowBack);

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_print", "Clicked", self.Print);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Tab_Select) == "function")
            win.AttachEvent("tab_1", "Clicked", self.Tab_Select);

        if (typeof (self.dw_jzxxx_Clicked) == "function")
            win.AttachEvent("dw_jzxxx", "Clicked", self.dw_jzxxx_Clicked);

        if (typeof (self.dw_jzxxx_DoubleClicked) == "function")
            win.AttachEvent("dw_jzxxx", "DoubleClicked", self.dw_jzxxx_DoubleClicked);

        if (typeof (self.dw_jzxxx_GetFocus) == "function")
            win.AttachEvent("dw_jzxxx", "GetFocus", self.dw_jzxxx_GetFocus);

        if (typeof (self.dw_jzxxx_ItemChanged) == "function")
            win.AttachEvent("dw_jzxxx", "ItemChanged", self.dw_jzxxx_ItemChanged);

        if (typeof (self.dw_jzxxx_jycljtyq_Clicked) == "function")
            win.AttachEvent("dw_jycljtyq", "Clicked", self.dw_jzxxx_jycljtyq_Clicked);

        if (typeof (self.dw_jzxxx_jycljtyq_GetFocus) == "function")
            win.AttachEvent("dw_jycljtyq", "GetFocus", self.dw_jzxxx_jycljtyq_GetFocus);

        if (typeof (self.dw_jzxxx_jydzyq_Clicked) == "function")
            win.AttachEvent("dw_jydzyq", "Clicked", self.dw_jzxxx_jydzyq_Clicked);

        if (typeof (self.dw_jzxxx_jydzyq_DoubleClicked) == "function")
            win.AttachEvent("dw_jydzyq", "DoubleClicked", self.dw_jzxxx_jydzyq_DoubleClicked);

        if (typeof (self.dw_jzxxx_jydzyq_GetFocus) == "function")
            win.AttachEvent("dw_jydzyq", "GetFocus", self.dw_jzxxx_jydzyq_GetFocus);

        if (typeof (self.dw_jzxxx_hgsj_Clicked) == "function")
            win.AttachEvent("dw_hgsj", "Clicked", self.dw_jzxxx_hgsj_Clicked);

        if (typeof (self.dw_jzxxx_hgsj_GetFocus) == "function")
            win.AttachEvent("dw_hgsj", "GetFocus", self.dw_jzxxx_hgsj_GetFocus);

        if (typeof (self.dw_jzxxx_clqy_Clicked) == "function")
            win.AttachEvent("dw_clqy", "Clicked", self.dw_jzxxx_clqy_Clicked);

        if (typeof (self.dw_jzxxx_clqy_GetFocus) == "function")
            win.AttachEvent("dw_clqy", "GetFocus", self.dw_jzxxx_clqy_GetFocus);

        if (typeof (self.dw_jzxxx_slb_Clicked) == "function")
            win.AttachEvent("dw_slb", "Clicked", self.dw_jzxxx_slb_Clicked);

        if (typeof (self.dw_jzxxx_slb_GetFocus) == "function")
            win.AttachEvent("dw_slb", "GetFocus", self.dw_jzxxx_slb_GetFocus);

        if (typeof (self.dw_jzxxx_slb_ItemChanged) == "function")
            win.AttachEvent("dw_slb", "ItemChanged", self.dw_jzxxx_slb_ItemChanged);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_master.Detach(); dw_master = null;
        sle_ts.Detach(); sle_ts = null;
        tb_1.Detach(); tb_1 = null;
        tab_1.Detach(); tab_1 = null;
        dw_print.Detach(); dw_print = null;
        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_jycljtyq.Detach(); dw_jycljtyq = null;
        dw_jydzyq.Detach(); dw_jydzyq = null;
        dw_hgsj.Detach(); dw_hgsj = null;
        dw_clqy.Detach(); dw_clqy = null;
        dw_slb.Detach(); dw_slb = null;
        ds_1.Detach(); ds_1 = null;
        ds_jzxxx.Detach(); ds_jzxxx = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = ""; 
    var dwc = new DataWindowChild();
    var iw_Country_Select = null;
    var iw_Commodity_Select = null;
    var iw_Fj_Edit = null;
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Cpxxk.ashx");

    
    
    //#endregion

    //#region 设置窗口是否可编辑
    this.SetEditMode = function (newMode) {
        editMode = newMode;
        var bEditFlag = false;
        if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
            bEditFlag = true;
        }
        else {
            bEditFlag = false;
        };
        if (tab_1.GetSelectedTab() == 2) {
            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowinsert", false);
        }
        else {
            tb_1.SetVisible("btn_save", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag); 
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowinsert", bEditFlag);
        }

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_jzxxx.Modify("DataWindow.Readonly=no");
            dw_jycljtyq.Modify("DataWindow.Readonly=no");
            dw_jydzyq.Modify("DataWindow.Readonly=no");
            dw_hgsj.Modify("DataWindow.Readonly=no");
            dw_clqy.Modify("DataWindow.Readonly=no");
            dw_slb.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_jycljtyq.Modify("DataWindow.Readonly=yes");
            dw_jydzyq.Modify("DataWindow.Readonly=yes");
            dw_hgsj.Modify("DataWindow.Readonly=yes");
            dw_clqy.Modify("DataWindow.Readonly=yes");
            dw_slb.Modify("DataWindow.Readonly=yes");
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus();
         var operation = requestor.GetParm("operation");
       
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("cpxxkbm.Tabsequence=0");
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else {
            self.SetEditMode("show");
        };


    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_jycljtyq_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_jydzyq_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_bgdzyq_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_hgsj_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_clqy_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_slb_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        if (self.CloseQuery() == 1)
            return;
        setTimeout("window.close();", 100);
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_jycljtyq.AcceptText();
        dw_jydzyq.AcceptText(); 
        dw_hgsj.AcceptText();
        dw_clqy.AcceptText();
        dw_slb.AcceptText();
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_jycljtyq.DeletedCount() + dw_jycljtyq.ModifiedCount() + dw_jydzyq.DeletedCount() + dw_jydzyq.ModifiedCount() + dw_hgsj.DeletedCount() + dw_hgsj.ModifiedCount() + dw_clqy.DeletedCount() + dw_clqy.ModifiedCount() + dw_slb.DeletedCount() + dw_slb.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

//        //释放对象
//        dwc_jydzyq.Detach();
//        dwc_jydzyq = null;
//        dwc_bgdzyq.Detach();
//        dwc_bgdzyq = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_jzxxx.AcceptText() != 1)
            return

        if (dw_jycljtyq.AcceptText() != 1)
            return;

        if (dw_jydzyq.AcceptText() != 1)
            return;


        if (dw_hgsj.AcceptText() != 1)
            return;

        if (dw_clqy.AcceptText() != 1)
            return;

        if (dw_slb.AcceptText() != 1)
            return;


        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jycljtyq.ModifiedCount() + dw_jycljtyq.DeletedCount() + dw_jydzyq.ModifiedCount() + dw_jydzyq.DeletedCount() + dw_hgsj.ModifiedCount() + dw_hgsj.DeletedCount() + dw_clqy.ModifiedCount() + dw_clqy.DeletedCount() + dw_slb.ModifiedCount() + dw_slb.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var zdj = dw_master.GetItemNumber(1, "zdj");
        var zgj = dw_master.GetItemNumber(1, "zgj");
        if (zdj > zgj) {
            alert("最低价不能大于最高价！！");
            return;
        }

        var row = dw_master.GetRow();
        var cpxxkbm = dw_master.GetItemString(row, "cpxxkbm");


        //更新行号
        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "cpxxkbm", cpxxkbm);
            dw_jzxxx.SetItem(row, "cxh", row);
        }

        //更新行号
        for (row = dw_jycljtyq.RowCount(); row > 0; row--) {
            dw_jycljtyq.SetItem(row, "cpxxkbm", cpxxkbm);
            dw_jycljtyq.SetItem(row, "cxh", row);
        }

        //更新行号
        for (row = dw_jydzyq.RowCount(); row > 0; row--) {
            dw_jydzyq.SetItem(row, "cpxxkbm", cpxxkbm);
            dw_jydzyq.SetItem(row, "cxh", row);
            var dzmc = dw_jydzyq.GetItemString(row, "dzmc_jsl")
            dw_jydzyq.SetItem(row, "dzmc", dzmc)
        }


        //更新行号
        for (row = dw_hgsj.RowCount(); row > 0; row--) {
            dw_hgsj.SetItem(row, "cpxxkbm", cpxxkbm);
            dw_hgsj.SetItem(row, "cxh", row);

        }

        //更新行号
        for (row = dw_clqy.RowCount(); row > 0; row--) {
            dw_clqy.SetItem(row, "cpxxkbm", cpxxkbm);
            dw_clqy.SetItem(row, "cxh", row);

        }

        //更新行号
        for (row = dw_slb.RowCount(); row > 0; row--) {
            dw_slb.SetItem(row, "cpxxkbm", cpxxkbm);
            dw_slb.SetItem(row, "cxh", row);

        }

        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_jycljtyq_data = dw_jycljtyq.GetChanges();
        var dw_jydzyq_data = dw_jydzyq.GetChanges();
        var dw_hgsj_data = dw_hgsj.GetChanges();
        var dw_clqy_data = dw_clqy.GetChanges();
        var dw_slb_data = dw_slb.GetChanges();

        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_jycljtyq_data == "" && dw_jydzyq_data == "" && dw_hgsj_data == "" && dw_clqy_data == "" && dw_slb_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_jycljtyq=" + dw_jycljtyq_data + "&dw_jydzyq=" + dw_jydzyq_data + "&dw_hgsj=" + dw_hgsj_data + "&dw_clqy=" + dw_clqy_data + "&dw_slb=" + dw_slb_data + "&cpxxkbm=" + cpxxkbm + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            cpxxkbm = webReq.ResponseText();
            dw_master.SetItem(1, "cpxxkbm", cpxxkbm);


            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "cpxxkbm", cpxxkbm);
                dw_jzxxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_jycljtyq.RowCount(); row++) {
                dw_jycljtyq.SetItem(row, "cpxxkbm", cpxxkbm);
                dw_jycljtyq.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_jydzyq.RowCount(); row++) {
                dw_jydzyq.SetItem(row, "cpxxkbm", cpxxkbm);
                dw_jydzyq.SetItem(row, "cxh", row);
            }


            for (row = 1; row <= dw_hgsj.RowCount(); row++) {
                dw_hgsj.SetItem(row, "cpxxkbm", cpxxkbm);
                dw_hgsj.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_clqy.RowCount(); row++) {
                dw_clqy.SetItem(row, "cpxxkbm", cpxxkbm);
                dw_clqy.SetItem(row, "cxh", row);
            }


            for (row = 1; row <= dw_slb.RowCount(); row++) {
                dw_slb.SetItem(row, "cpxxkbm", cpxxkbm);
                dw_slb.SetItem(row, "cxh", row);
            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_jycljtyq.ResetUpdate();
            dw_jydzyq.ResetUpdate();
            dw_hgsj.ResetUpdate();
            dw_clqy.ResetUpdate();
            dw_slb.ResetUpdate();

            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("cpxxkbm.Tabsequence=0");

            //dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion


    //#region 插入商品
    this.InsertRow = function () {
        var row = lastdw.InsertRow(lastdw.GetRow());
        lastdw.ScrollToRow(row);
        lastdw.SetFocus(); 
    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
         var row = lastdw.InsertRow(0);
        lastdw.ScrollToRow(row);
        lastdw.SetFocus();
    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;

        var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

        if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
            if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                lastdw.SetFocus();
                return;
            }
        }
        lastdw.DeleteRow(row);
     
    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
        return;
        lastdw.RowsCopy(row, row, DWBUFFER.Primary, lastdw, row + 1, DWBUFFER.Primary)
        lastdw.ScrollToRow(row + 1);
    }
    //#endregion


    //#region 打印 
    this.Print = function () {
        var cpxxkbm = dw_master.GetItemString(1, "cpxxkbm");
        dw_print.SetDataObject("dw_cpxxk_print");
        dw_print.Retrieve(cpxxkbm);
        dw_print.PrintPreview();
    }
    //#endregion
  
    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
         
    }
    //#endregion


    //#region 双击
    this.dw_jzxxx_jydzyq_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");
        if (Row > 0)
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var cpxxkbm = dw_jydzyq.GetItemString(Row, "cpxxkbm");
                var dzmc = dw_jydzyq.GetItemString(Row, "dzbh");
                var lx = "jhdz";
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + cpxxkbm +dzmc + "&lx=" + lx, iw_Fj_Edit);
                dw_jydzyq.SetFocus();
            }
    }
        //#endregion

       

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
 
        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");

        var date = new Date();
        var ywyobj = new Array(2);
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid(userid).value;
        if (ywyobj == null) {
            var ywy = "";
            var bm = "";
        }
        else {
            if (ywyobj.length == 0) {
                var ywy = "";
                var bm = "";

            }
            else {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }

       dw_master.SetItem(1, 'zbr', userid);
       self.SetEditMode("new");
      
    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "cpxxkbm", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate()); 
        
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        dw_master.AcceptText();
        if (dwoName == "ctr_code_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("cpxxk_country");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "spbm_t") {

            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ywy = requestor.GetParm("userid"); ;
            var ShareMode = requestor.GetParm("ShareMode"); ;
            var Dlwtf = requestor.GetParm("Dlwtf"); ;
            iw_Commodity_Select.SetDetailDW(dw_master);
            iw_Commodity_Select.SetDwo("dw_cpxxk_edit");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
            dw_master.SetFocus();
        }


    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        
       
    }
    //#endregion

    //#region dw_jzxxx_slb_ItemChanged ItemChanged
    this.dw_jzxxx_slb_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "ksrq") {
            dw_slb.AcceptText();
            var ksrq = new Date(dw_slb.GetItemDate(row, "ksrq"));
            dw_slb.SetItem(row - 1, "jsrq", ksrq.getVarDate());
        };
     
        if (dwoName == "zcgs") {
            dw_master.SetItem(1, "zcgs", parseFloat(data));
        };
        if (dwoName == "yhgs") {
            dw_master.SetItem(1, "yhgs", parseFloat(data));
        };
        if (dwoName == "zzsl") {
            dw_master.SetItem(1, "zzsl", parseFloat(data));
        };

    }
    //#endregion
    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {
        dw_master.AcceptText();       
    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
       
    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {       
        dw_jzxxx.SetFocus();
    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_jycljtyq_Clicked
    this.dw_jzxxx_jycljtyq_Clicked = function (xPos, yPos, Row, dwoName) {
        dw_jycljtyq.SetFocus();
    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_jydzyq_Clicked
    this.dw_jzxxx_jydzyq_Clicked = function (xPos, yPos, Row, dwoName) {
        dw_jydzyq.SetFocus();
    }
    //#endregion


    
    //#region dw_jzxxx dw_jzxxx_hgsj_Clicked
    this.dw_jzxxx_hgsj_Clicked = function (xPos, yPos, Row, dwoName) {
        dw_hgsj.SetFocus();
    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_hgsj_Clicked
    this.dw_jzxxx_clqy_Clicked = function (xPos, yPos, Row, dwoName) {
        dw_clqy.SetFocus();
    }
    //#endregion

    //#region dw_jzxxx ItemChanged
    this.dw_jzxxx_ItemChanged = function (row, dwoName, data) {
       
    }
    //#endregion

    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
             ll_row_from = lastdw.GetRow();
            ll_row_count = lastdw.RowCount();

            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = lastdw.RowCount();
            }

            if (ll_row_to == ll_row_from) {
                return;
            }
            lastdw.SetRedraw(false);
            lastdw.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, lastdw, ll_row_to, DWBUFFER.Primary);
            lastdw.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                lastdw.ScrollToRow(ll_row_from + 1);
            }
            else {
                lastdw.ScrollToRow(ll_row_count);
            }

            if (lastdw.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                lastdw.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
    }
    //#endregion



    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
        ll_row_from = lastdw.GetRow();
        ll_row_count = lastdw.RowCount();
        if (ll_row_from > 1) {
            ll_row_to = ll_row_from -1 ;
        }
        else {
            ll_row_to = 1;
        }

        lastdw.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, lastdw, ll_row_to, DWBUFFER.Primary);
        if (ll_row_from > 1 ) {
            lastdw.ScrollToRow(ll_row_from - 1);
        }
        else {
            lastdw.ScrollToRow(1);
        }

        if (lastdw.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
            lastdw.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
        }
    }
    //#endregion

    //#region dw_master entertotab
        this.dw_master_EntertoTab = function (key, keyflags, dwo) {
    //        var keycode = key;
    //        var colname = dwo.GetColumnName();

        }
    
    //#endregion

    //#region tabselect

    this.Tab_Select = function () {
        if (tab_1.GetSelectedTab() == 6) {
            dw_slb.SetFocus();
        }

    };
    //#endregion




    
}





