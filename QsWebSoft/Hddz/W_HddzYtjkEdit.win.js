///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzYtjkEdit() {

    var self = this;
    var requestor = new PBWindow();
    var dw_sbys = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var tab_1 = new TabControl(requestor);
    var dw_jzxxx = new DataWindow(requestor);
    var dw_spxx = new DataWindow(requestor);
    var dw_spdhsr = new DataWindow(requestor);
    var dw_zzxx = new DataWindow(requestor);
    var dw_fsdz = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ContextMenuStrip2 = new ContextMenu(requestor);
    var ContextMenuStrip3 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_jzxxx = new DataStore(requestor);
    var ds_spxx = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_sbys == null) dw_sbys = new DataWindow(requestor);
        dw_sbys.Attach(win.Control("dw_sbys"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_jzxxx == null) dw_jzxxx = new DataWindow(requestor);
        dw_jzxxx.Attach(win.Control("dw_jzxxx"));
        if (dw_spxx == null) dw_spxx = new DataWindow(requestor);
        dw_spxx.Attach(win.Control("dw_spxx"));
        if (dw_spdhsr == null) dw_spdhsr = new DataWindow(requestor);
        dw_spdhsr.Attach(win.Control("dw_spdhsr"));
        if (dw_zzxx == null) dw_zzxx = new DataWindow(requestor);
        dw_zzxx.Attach(win.Control("dw_zzxx"));
        if (dw_fsdz == null) dw_fsdz = new DataWindow(requestor);
        dw_fsdz.Attach(win.Control("dw_fsdz"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ContextMenuStrip2 == null) ContextMenuStrip2 = new ContextMenu(requestor);
        ContextMenuStrip2.Attach(win.Control("ContextMenuStrip2"));
        if (ContextMenuStrip3 == null) ContextMenuStrip3 = new ContextMenu(requestor);
        ContextMenuStrip3.Attach(win.Control("ContextMenuStrip3"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_jzxxx == null) ds_jzxxx = new DataStore(requestor);
        ds_jzxxx.Attach(win.Control("ds_jzxxx"));
        if (ds_spxx == null) ds_spxx = new DataStore(requestor);
        ds_spxx.Attach(win.Control("ds_spxx"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_master_ButtonClicked) == "function")
            win.AttachEvent("dw_master", "ButtonClicked", self.dw_master_ButtonClicked);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.dw_master_RbuttonDown) == "function")
            win.AttachEvent("dw_master", "RButtonDown", self.dw_master_RbuttonDown);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowinsert", "Clicked", self.InsertRow);

        if (typeof (self.RowCopy) == "function")
            win.AttachEvent("btn_rowcopy", "Clicked", self.RowCopy);

        if (typeof (self.Ytsjfs) == "function")
            win.AttachEvent("btn_ytsjfs", "Clicked", self.Ytsjfs);

        if (typeof (self.dw_cmd_RowNext) == "function")
            win.AttachEvent("btn_rownext", "Clicked", self.dw_cmd_RowNext);

        if (typeof (self.dw_cmd_RowBack) == "function")
            win.AttachEvent("btn_rowback", "Clicked", self.dw_cmd_RowBack);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Tab_Select) == "function")
            win.AttachEvent("tab_1", "Clicked", self.Tab_Select);

        if (typeof (self.dw_jzxxx_Clicked) == "function")
            win.AttachEvent("dw_jzxxx", "Clicked", self.dw_jzxxx_Clicked);

        if (typeof (self.dw_jzxxx_DoubleClicked) == "function")
            win.AttachEvent("dw_jzxxx", "DoubleClicked", self.dw_jzxxx_DoubleClicked);

        if (typeof (self.dw_jzxxx_EditChanged) == "function")
            win.AttachEvent("dw_jzxxx", "EditChanged", self.dw_jzxxx_EditChanged);

        if (typeof (self.dw_jzxxx_GetFocus) == "function")
            win.AttachEvent("dw_jzxxx", "GetFocus", self.dw_jzxxx_GetFocus);

        if (typeof (self.dw_jzxxx_ItemChanged) == "function")
            win.AttachEvent("dw_jzxxx", "ItemChanged", self.dw_jzxxx_ItemChanged);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_jzxxx", "RButtonDown", self.RbuttonDown);

        if (typeof (self.dw_spxx_Clicked) == "function")
            win.AttachEvent("dw_spxx", "Clicked", self.dw_spxx_Clicked);

        if (typeof (self.dw_spxx_DoubleClicked) == "function")
            win.AttachEvent("dw_spxx", "DoubleClicked", self.dw_spxx_DoubleClicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_spxx", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_spxx_ItemChanged) == "function")
            win.AttachEvent("dw_spxx", "ItemChanged", self.dw_spxx_ItemChanged);

        if (typeof (self.RbuttonDown_spxx) == "function")
            win.AttachEvent("dw_spxx", "RButtonDown", self.RbuttonDown_spxx);

        if (typeof (self.dw_zzxx_Clicked) == "function")
            win.AttachEvent("dw_zzxx", "Clicked", self.dw_zzxx_Clicked);

        if (typeof (self.dw_zzxx_DoubleClicked) == "function")
            win.AttachEvent("dw_zzxx", "DoubleClicked", self.dw_zzxx_DoubleClicked);

        if (typeof (self.dw_zzxx_GetFocus) == "function")
            win.AttachEvent("dw_zzxx", "GetFocus", self.dw_zzxx_GetFocus);

        if (typeof (self.RbuttonDown_zzxx) == "function")
            win.AttachEvent("dw_zzxx", "RButtonDown", self.RbuttonDown_zzxx);

        if (typeof (self.dw_fsdz_Clicked) == "function")
            win.AttachEvent("dw_fsdz", "Clicked", self.dw_fsdz_Clicked);

        if (typeof (self.dw_fsdz_DoubleClicked) == "function")
            win.AttachEvent("dw_fsdz", "DoubleClicked", self.dw_fsdz_DoubleClicked);

        if (typeof (self.dw_fsdz_GetFocus) == "function")
            win.AttachEvent("dw_fsdz", "GetFocus", self.dw_fsdz_GetFocus);

        if (typeof (self.RbuttonDown_fsdz) == "function")
            win.AttachEvent("dw_fsdz", "RButtonDown", self.RbuttonDown_fsdz);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_6", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_spxx) == "function")
            win.AttachEvent("m_8", "Clicked", self.CopyCol_spxx);

        if (typeof (self.Recover_spxx) == "function")
            win.AttachEvent("m_5", "Clicked", self.Recover_spxx);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_13", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_zzxx) == "function")
            win.AttachEvent("m_15", "Clicked", self.CopyCol_zzxx);

        if (typeof (self.Recover_zzxx) == "function")
            win.AttachEvent("m_12", "Clicked", self.Recover_zzxx);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_sbys.Detach(); dw_sbys = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        tab_1.Detach(); tab_1 = null;
        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_spxx.Detach(); dw_spxx = null;
        dw_spdhsr.Detach(); dw_spdhsr = null;
        dw_zzxx.Detach(); dw_zzxx = null;
        dw_fsdz.Detach(); dw_fsdz = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        ContextMenuStrip3.Detach(); ContextMenuStrip3 = null;
        ds_1.Detach(); ds_1 = null;
        ds_jzxxx.Detach(); ds_jzxxx = null;
        ds_spxx.Detach(); ds_spxx = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Commodity_Select = null;
    var iw_Eport_Select = null;
    var iw_Country_Select = null;
    var iw_Jnhyd_Select = null;
    var iw_Dlxy_Select = null;
    var iw_Wldw_Select = null;
    var iw_Mxd_Select = null;
    var iw_Hddz_Dlxy_Select = null;
    var iw_Country_Select = null;
    var iw_RqTime_Select = null;
    var dwc = new DataWindowChild();
 
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/HddzYtjk.ashx");

    
    
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
            dw_spxx.Modify("DataWindow.Readonly=no");
            dw_zzxx.Modify("DataWindow.Readonly=no");
            dw_fsdz.Modify("DataWindow.Readonly=no");
            dw_fsdz.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_spxx.Modify("DataWindow.Readonly=yes");
            dw_zzxx.Modify("DataWindow.Readonly=yes");
            dw_fsdz.Modify("DataWindow.Readonly=yes");
            dw_fsdz.Modify("DataWindow.Readonly=yes");
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {

        dw_master.SetFocus();
        dw_spxx.ShareData(dw_spdhsr);
        var operation = requestor.GetParm("operation");
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
                self.Save();
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
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
    this.dw_zzxx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_fsdz_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion


    //#region 关闭窗口
    this.Exit = function () {
        if (self.CloseQuery() == 1)
            return;

        requestor.Close();
//        setTimeout("window.close();", 100);
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_spxx.AcceptText();
        dw_zzxx.AcceptText();
        dw_fsdz.AcceptText();
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_zzxx.DeletedCount() + dw_zzxx.ModifiedCount() + dw_fsdz.DeletedCount() + dw_fsdz.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        if (dwc != null){
        dwc.Detach();
        } ;//dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_jzxxx.AcceptText() != 1)
            return;

        if (dw_spxx.AcceptText() != 1)
            return;

        if (dw_zzxx.AcceptText() != 1)
            return;

        if (dw_fsdz.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_zzxx.ModifiedCount() + dw_zzxx.DeletedCount() + dw_fsdz.ModifiedCount() + dw_fsdz.DeletedCount() ) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString(row, "ywbh");
        dw_master.SetItem(row, "ywbh", ywbh);

        //FOB条件下判断是否有运费打勾 
        var jgfs = dw_master.GetItemString(1, "jgfs")
        if (jgfs == "FOB") {
            var sfyyf = dw_master.GetItemString(1, "sfyyf")
            if (sfyyf != "Y") {
                if (requestor.MessageBox("提示", "FOB下应该有运费支付，是否需要打勾?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_master.SetItem(1, "sfyyf", "Y")
                }
            }
        }
      

        for (row = dw_spxx.RowCount(); row > 0; row--) {
            dw_spxx.SetItem(row, "cxh", row);
            dw_spxx.SetItem(row, "ywbh", ywbh);

            var sfysx = dw_spxx.GetItemString(row, "sfysx")
            if (sfysx == "Y") {
                var spsx = dw_spxx.GetItemString(row, "spsx")
                if (spsx == null || spsx == "") {
                    requestor.MessageBox("提示", "第"+row+"行商品的制作或则保存方法必须输入！")
                    return;
                }
            };

            var sfypz = dw_spxx.GetItemString(row, "sfypz")
            if (sfypz == "Y") {
                var sppz = dw_spxx.GetItemString(row, "sppz")
                if (sppz == null || sppz == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的种类必须输入！")
                    return;
                }
            };

            var sfypplx = dw_spxx.GetItemString(row, "sfypplx")
            if (sfypplx == "Y") {
                var pplx = dw_spxx.GetItemString(row, "pplx")
                if (pplx == null || pplx == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的品牌类型必须输入！")
                    return;
                }
            };

            var sfyckxhqk = dw_spxx.GetItemString(row, "sfyckxhqk")
            if (sfyckxhqk == "Y") {
                var ckxhqk = dw_spxx.GetItemString(row, "ckxhqk")
                if (ckxhqk == null || ckxhqk == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的出口享惠情况必须输入！")
                    return;
                }
            };

            var sfydj = dw_spxx.GetItemString(row, "sfydj")

            if (sfydj == "Y") {
                var spdj = dw_spxx.GetItemString(row, "spdj")
 
                if (spdj == null || spdj == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的等级必须输入！")
                    return;
                }
            };

            var sfypp = dw_spxx.GetItemString(row, "sfypp")
            if (sfypp == "Y") {
                var sppp = dw_spxx.GetItemString(row, "sppp")
                if (sppp == null || sppp == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的品牌必须输入！")
                    return;
                }
            };

            var sfygg = dw_spxx.GetItemString(row, "sfygg")
            if (sfygg == "Y") {
                var spgg = dw_spxx.GetItemString(row, "spgg")
                if (spgg == null || spgg == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的规格必须输入！")
                    return;
                }
            };

            var sfyqt = dw_spxx.GetItemString(row, "sfyqt")
            if (sfyqt == "Y") {
                var spqtys = dw_spxx.GetItemString(row, "spqtys")
                if (spqtys == null || spqtys == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的其他要素必须输入！")
                    return;
                }
            };


        }
        

        if (dw_spxx.RowCount() > 0) {
            var hz_sl = dw_spxx.GetItemNumber(1, "jlsl_sum");
            dw_master.SetItem(1, "hz_sl", hz_sl)
        }
        if (dw_jzxxx.RowCount() == 0) {
            alert("货代单证中没有集装箱信息!");
            dw_jzxxx.SetFocus();
            return;
        }


        for (row = dw_zzxx.RowCount(); row > 0; row--) {
            dw_zzxx.SetItem(row, "cxh", row);
            dw_zzxx.SetItem(row, "ywbh", ywbh);
        }

        for (row = dw_fsdz.RowCount(); row > 0; row--) {
            dw_fsdz.SetItem(row, "cxh", row);
            dw_fsdz.SetItem(row, "ywbh", ywbh);
        }

        var zxs = dw_master.GetItemNumber(1, "zxs") 
        if (zxs == null && zxs == 0) {  
            if (dw_spxx.RowCount() > 0) {
                zxs = dw_spxx.GetItemNumber(1, "jlsl_sum") 
                dw_master.SetItem(1, "zxs", zxs)
            };
        };


        var zmz = dw_master.GetItemNumber(1, "zmz")
        if (zmz == null || zmz == 0) {
            if (dw_spxx.RowCount() > 0) {
                zmz = dw_spxx.GetItemNumber(1, "zmz_sum")
                dw_master.SetItem(1, "zmz", zmz)
            };
        };


        var zjz = dw_master.GetItemNumber(1, "zjz")
        if (zjz == null || zjz == 0) {
            if (dw_spxx.RowCount() > 0) {
                zjz = dw_spxx.GetItemNumber(1, "zjz_sum")
                dw_master.SetItem(1, "zjz", zjz)
            };
        };

        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_spxx_data = dw_spxx.GetChanges();
        var dw_zzxx_data = dw_zzxx.GetChanges();
        var dw_fsdz_data = dw_fsdz.GetChanges();
        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_spxx_data == "" && dw_zzxx_data == "" && dw_fsdz_data == "")
            return;
        //执行保存的WebService

        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_spxx=" + dw_spxx_data + "&dw_zzxx=" + dw_zzxx_data + "&dw_fsdz=" + dw_fsdz_data + "&ywbh=" + ywbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            ywbh = webReq.ResponseText();
            dw_master.SetItem(1, "ywbh", ywbh);

            var hth = dw_master.GetItemString(1, "hth")
            if (hth == "" || hth == null) {
                dw_master.SetItem(1, "hth", ywbh)
            };

            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "ywbh", ywbh);
                dw_jzxxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_spxx.RowCount(); row++) {
                dw_spxx.SetItem(row, "ywbh", ywbh);
                dw_spxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_zzxx.RowCount(); row++) {
                dw_zzxx.SetItem(row, "ywbh", ywbh);
                dw_zzxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_fsdz.RowCount(); row++) {
                dw_fsdz.SetItem(row, "ywbh", ywbh);
                dw_fsdz.SetItem(row, "cxh", row);
            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_spxx.ResetUpdate();
            dw_zzxx.ResetUpdate();
            dw_fsdz.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("ywbh.Tabsequence=0");
            return 1
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
//        if (lastdw.GetName() == "dw_jzxxx") {
//            var khbm = dw_master.GetItemString(1, "khbm");
//            var khmc = dw_master.GetItemString(1, "khmc");
//            var clfs = dw_master.GetItemString(1, "clfs");
//            var lxr = dw_master.GetItemString(1, "lxr");
//            var lxdh = dw_master.GetItemString(1, "lxdh");
//            var row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
//            dw_jzxxx.ScrollToRow(row);
//            dw_jzxxx.SetItem(row, "ysfs", ysfs);
//            dw_jzxxx.SetItem(row, "sjshrbm", khbm);
//            dw_jzxxx.SetItem(row, "sjshrmc", khmc);
//            dw_jzxxx.SetItem(row, "clfs", clfs);
//            dw_jzxxx.SetItem(row, "lxr", lxr);
//            dw_jzxxx.SetItem(row, "lxdh", lxdh);
//            
//            dw_jzxxx.SetFocus();
//        }

//        if (lastdw.GetName() == "dw_spxx") {
//            if (iw_Commodity_Select == null)
//                iw_Commodity_Select = new W_Commodity_Select();
//            var ShareMode = requestor.GetParm("ShareMode");
//            var ywy = requestor.GetParm("userid");
//            var Dlwtf = requestor.GetParm("Dlwtf");
//            row = dw_spxx.InsertRow(dw_spxx.GetRow());
//            var dwo = dw_spxx.GetDataObject();
//            iw_Commodity_Select.SetRow(row);
//            iw_Commodity_Select.SetDwo(dwo);
//            iw_Commodity_Select.SetDetailDW(dw_spxx);
////            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);


//        }

//        if (lastdw.GetName() == "dw_zzxx") {            
//            var row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
//            dw_jzxxx.ScrollToRow(row); 
//            dw_jzxxx.SetFocus();
//        }

        if (lastdw.GetName() == "dw_fsdz") {
            var row = dw_fsdz.InsertRow(dw_fsdz.GetRow());
            dw_fsdz.ScrollToRow(row);
            dw_fsdz.SetFocus();
        }

    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () { 
//        if (lastdw.GetName() == "dw_spxx") {
//            if (iw_Commodity_Select == null)
//                iw_Commodity_Select = new W_Commodity_Select();
//            var ShareMode = requestor.GetParm("ShareMode");
//            var ywy = requestor.GetParm("userid");
//            var Dlwtf = requestor.GetParm("Dlwtf");
//            var dwo = dw_spxx.GetDataObject();
//            iw_Commodity_Select.SetDwo(dwo);
//            iw_Commodity_Select.SetDetailDW(dw_spxx);
////            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);


//        }

//        if (lastdw.GetName() == "dw_jzxxx") {
//            var ysfs = dw_master.GetItemString(1, "ysfs")
//            var khbm = dw_master.GetItemString(1, "khbm");
//            var khmc = dw_master.GetItemString(1, "khmc");
//            var clfs = dw_master.GetItemString(1, "clfs");
//            var lxr = dw_master.GetItemString(1, "lxr");
//            var lxdh = dw_master.GetItemString(1, "lxdh");         

//            var row = dw_jzxxx.InsertRow(0);
//            dw_jzxxx.ScrollToRow(row);
//            dw_jzxxx.SetItem(row, "ysfs", ysfs);
//            dw_jzxxx.SetItem(row, "sjshrbm", khbm);
//            dw_jzxxx.SetItem(row, "sjshrmc", khmc);
//            dw_jzxxx.SetItem(row, "clfs", clfs);           
//            dw_jzxxx.SetItem(row, "lxr", lxr);
//            dw_jzxxx.SetItem(row, "lxdh", lxdh);
//            if (ysfs == "海运") {
//                dw_jzxxx.SetItem(row, "xx", "40尺高柜");
//                dw_jzxxx.SetItem(row, "xl", "冷藏集装箱");
//            };
//            dw_jzxxx.SetFocus();
//        }

//        if (lastdw.GetName() == "dw_zzxx") {
//            
//            var row = dw_zzxx.InsertRow(0);
//            dw_zzxx.ScrollToRow(row); 
//            dw_zzxx.SetFocus();
//        }

        if (lastdw.GetName() == "dw_fsdz") {

            var row = dw_fsdz.InsertRow(0);
            dw_fsdz.ScrollToRow(row);
            dw_fsdz.SetFocus();
        }
    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
//        var row = lastdw.GetRow();
//        if (row <= 0)
//            return;
//        var ywbh = dw_master.GetItemString(1, "ywbh")
//        if (ywbh = null && operation == "copy") {
//            requestor.MessageBox("提示", "复制状态下，请先保存后再删除明细数据！", ICON.Information);
//            lastdw.SetFocus();
//            return;

//        }

//        if (lastdw.GetName() == "dw_jzxxx") {

//            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);            

//            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
//                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
//                    lastdw.SetFocus();
//                    return;
//                }
//            }
//            lastdw.DeleteRow(row);
//        }

//        if (lastdw.GetName() == "dw_spxx") {

//            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

//            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
//                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
//                    lastdw.SetFocus();
//                    return;
//                }
//            }

//            lastdw.DeleteRow(row);
//            self.SetZje();
//        }

//        if (lastdw.GetName() == "dw_zzxx") {

//            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

//            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
//                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
//                    lastdw.SetFocus();
//                    return;
//                }
//            }

//            lastdw.DeleteRow(row);
//        }

        if (lastdw.GetName() == "dw_fsdz") {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            lastdw.DeleteRow(row);
        }


    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
//        if (lastdw.GetName() == 'dw_jzxxx') {
//            var row = dw_jzxxx.GetRow();
//            if (row <= 0)
//                return;
//            dw_jzxxx.RowsCopy(row, row, DWBUFFER.Primary, dw_jzxxx, row + 1, DWBUFFER.Primary)
//            dw_jzxxx.ScrollToRow(row + 1);
//        }
//        if (lastdw.GetName() == 'dw_spxx') {
//            var row = dw_spxx.GetRow();
//            if (row <= 0)
//                return;
//            dw_spxx.RowsCopy(row, row, DWBUFFER.Primary, dw_spxx, row + 1, DWBUFFER.Primary)
//            dw_spxx.ScrollToRow(row + 1);
//            self.SetZje();
//        }

//        if (lastdw.GetName() == 'dw_zzxx') {
//            var row = dw_zzxx.GetRow();
//            if (row <= 0)
//                return;
//            dw_zzxx.RowsCopy(row, row, DWBUFFER.Primary, dw_zzxx, row + 1, DWBUFFER.Primary)
//            dw_zzxx.ScrollToRow(row + 1); 
//        }

        if (lastdw.GetName() == 'dw_fsdz') {
            var row = dw_fsdz.GetRow();
            if (row <= 0)
                return;
            dw_fsdz.RowsCopy(row, row, DWBUFFER.Primary, dw_fsdz, row + 1, DWBUFFER.Primary)
            dw_fsdz.ScrollToRow(row + 1);
        }
    }
    //#endregion


   


    
    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
       
//        dw_jzxxx.Reset();
//        dw_jzxxx.InsertRow(0);

        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");

        var date = new Date();
        var arrayobj = new Array(4);
        arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyWtf(Dlwtf).value;
        if (arrayobj == null) {
            var cname = "";
            var ename = "";
            var eaddr = "";
            var tt_no = "";
            var address = "";
            var tel = "";
            var fax = "";
            var sh = "";
            var hgdm = "";
            var khyh = "";
            var yhzh = "";
        }
        else {
            if (arrayobj.length == 0) {
                var cname = "";
                var ename = "";
                var eaddr = "";
                var tt_no = "";
                var address = "";
                var tel = "";
                var fax = "";
                var sh = "";
                var hgdm = "";
                var khyh = "";
                var yhzh = "";

            }
            else {
                cname = arrayobj[0];
                ename = arrayobj[1];
                eaddr = arrayobj[2];
                tt_no = arrayobj[3];
                address = arrayobj[4];
                tel = arrayobj[5];
                fax = arrayobj[6];
                sh = arrayobj[7];
                hgdm = arrayobj[8];
                khyh = arrayobj[9];
                yhzh = arrayobj[10];
                //                var yhzh = "";
            }
        }

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

        var Dlwtf = requestor.GetParm("Dlwtf");
        var Dlxyh = null;
        Dlxyh = QsWebSoft.PubMethod.GetDlxyhImformationbyUserid(Dlwtf).value;
 
        dw_master.SetItem(1, 'zbr', userid);
        dw_master.SetItem(1, 'jcgzry', userid);
        
        dw_master.SetItem(1, 'dlwtf', Dlwtf);
         
        self.SetEditMode("new");

        var zmyhl = QsWebSoft.PubMethod.Wb2Usd("USD").value;
        dw_master.SetItem(1, "wbbb", "USD")
        dw_master.SetItem(1, "zmyhl", zmyhl)



       var li_insert =  dw_fsdz.InsertRow(0);
       dw_fsdz.SetItem(li_insert, "dzdm", "Y")

    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();
        var mxq = null;
        dw_master.SetItem(1, "ywbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate());
        var date_null = new Date("1900/01/01");
        dw_master.SetItem(1, "yjkgsj", date_null.getVarDate());
        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "hth", "");
        dw_master.SetItem(1, "beizhu", "");

        dw_master.SetItem(1, "beizhu_xgrq", Date());
        dw_master.SetItem(1, "sjkgsj", Date());
        dw_master.SetItem(1, "invoiceno", "");
        dw_master.SetItem(1, "invoice_date", Date());
        dw_master.SetItem(1, "hz_jzxh", "");
        dw_master.SetItem(1, "hz_spmc", "");
        dw_master.SetItem(1, "clfs", "");
        dw_master.SetItem(1, "mtdm", "");
        dw_master.SetItem(1, "mxq", mxq);

        self.SetZje();
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

      

        if (dwoName == "xhgq_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "mt";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_xhgq");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "qyg_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("qyg");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zzgk_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("zzgk");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }




       

        if (dwoName == "ycd_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("ycd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "qiyunguo_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("qiyunguo");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }


       

    }
    //#endregion

    
    //#region dw_master弹出选择
    this.dw_master_ButtonClicked = function (Row, dwoName) { 
        if (editMode == "show")
            return; 
        if (dwoName == "b_yfqk") { 
            dw_master.SetItem(1, "yfbj", "")
        }
        if (dwoName == "b_bxfqk") { 
            dw_master.SetItem(1, "bxfbj", "")
            dw_master.SetItem(1, "bxfbb", "")
            dw_master.SetItem(1, "bxfje", parseFloat(null))
        }
    }
    //#endregion



    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {

             

        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            if (zusdhl == null || zusdhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
            }

            dw_master.SetItem(1, "zmyhl", zusdhl);
            self.SetZje();
        }

      

        //单证类型和进出口标志一致
        if (dwoName == "dzlx") {
             dw_master.SetItem(row, "jckbz", data);
        }

         

    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
        if (dwoName == "ckka") {
            dw_master.GetChild(dwoName, dwc);
            if (data != "") {
                dwc.Retrieve("%" + data + "%");
            }
            else {
                dwc.Retrieve("%");
            }
        }
        
    }
    //#endregion



    //#region dw_spxx ItemChanged
    this.dw_spxx_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jlsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spxx.GetItemNumber(row, "zj")
            var ldc_djjg = ldc_zj / data;
            var ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
            dw_spxx.SetItem(row, "djjg", ldc_djjg);
            self.SetZje();
            self.CacluMjztj(row);
        }

        else if (dwoName == "zj") {
            if (data < 0) {
                alert("总价不能小于0,请重新输入!");
                return 1;
            }
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (data / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }

            ldc_zmz = dw_spxx.GetItemNumber(row, "zmz")
            if (ldc_zmz != null && ldc_zmz != 0) {
                var ldc_dj = (data / ldc_zmz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
        }

        else if (dwoName == "zmz" || dwoName == "zjz") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spxx.GetItemNumber(row, "zj")
            if (ldc_zj != null || ldc_zj != 0) {
                ldc_dj = (ldc_zj / data);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
            self.CacluMjztj(row);

        }

        if (  dwoName == "zjz"){
            dw_spxx.SetItem(row, "fdsl", dec(data));
        }


    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
       
    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_zzxx_Clicked = function (xPos, yPos, Row, dwoName) {
         dw_zzxx.SetFocus();      

    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_zzxx_DoubleClicked = function (xPos, yPos, Row, dwoName) { 
     if (dwoName == "zzgk") {
                 if (iw_Eport_Select == null)
                    iw_Eport_Select = new W_Eport_Select();
                iw_Eport_Select.SetDataWindow(dw_zzxx);
                iw_Eport_Select.SetData("hddz_zzgk");
                iw_Eport_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
                dw_zzxx.SetFocus();
            }

    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "sjshr_qk") {
            if (requestor.MessageBox("提示", "是否清除实际收货人记录?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                dw_jzxxx.SetItem(Row, "sjshrbm", "")
                dw_jzxxx.SetItem(Row, "sjshrmc", "")
            }

        }

        dw_jzxxx.SetFocus();

    }
    //#endregion



    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_fsdz_Clicked = function (xPos, yPos, Row, dwoName) {
         

        dw_fsdz.SetFocus();

    }
    //#endregion


    //#region dw_spdhsr ItemChanged
    this.dw_spdhsr_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jlsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spdhsr.GetItemNumber(row, "zj")
            var ldc_djjg = ldc_zj / data;
            var ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
            dw_spdhsr.SetItem(row, "djjg", ldc_djjg);
            self.SetZje();
            self.CacluMjztj(row);
        }

        else if (dwoName == "zj") {
            if (data < 0) {
                alert("总价不能小于0,请重新输入!");
                return 1;
            }
            var ldc_jlsl = dw_spdhsr.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (data / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spdhsr.SetItem(row, "djjg", ldc_djjg);
            }

            ldc_zmz = dw_spdhsr.GetItemNumber(row, "zmz")
            if (ldc_zmz != null && ldc_zmz != 0) {
                var ldc_dj = (data / ldc_zmz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spdhsr.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
        }

        else if (dwoName == "zmz" || dwoName == "zjz") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            if (dwoName == "zjz") {
                dw_spdhsr.SetItem(row, "fdsl", parseFloat(data));
            }

            var ldc_zj = dw_spdhsr.GetItemNumber(row, "zj")
            if (ldc_zj != null || ldc_zj != 0) {
                ldc_dj = (ldc_zj / data);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spdhsr.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
            self.CacluMjztj(row);


        }




    }
    //#endregion



    //#region dw_spxx_Clicked
    this.dw_spxx_Clicked = function (xPos, yPos, Row, dwoName, Data) {

        dw_spdhsr.ScrollToRow(Row);
    };
    //#endregion

    //#region dw_jzxxx EditChanged
    this.dw_jzxxx_EditChanged = function (row, dwoName, data) {

                dw_master.AcceptText();
                if (dwoName == "clfs"  ) {
                    var clfs = dw_master.GetItemString(1, "clfs")
                    if (clfs == null || clfs =="" ){
                        dw_master.SetItem(1,"clfs",data)
                    }
                }
    }
    //#endregion



    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_jzxxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_cmd.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_jzxxx.SetRedraw(false);
            dw_jzxxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_jzxxx, ll_row_to, DWBUFFER.Primary);
            dw_jzxxx.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_jzxxx.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_jzxxx.ScrollToRow(ll_row_count);
            }

            if (dw_jzxxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_jzxxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

        if (lastdw.GetName() == 'dw_spxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_cmd.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_spxx.SetRedraw(false);
            dw_spxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary);
            dw_spxx.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_spxx.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_spxx.ScrollToRow(ll_row_count);
            }

            if (dw_spxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_spxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_jzxxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from -1 ;
            }
            else {
                ll_row_to = 1;
            }

            dw_jzxxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_jzxxx, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1 ) {
                dw_jzxxx.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_jzxxx.ScrollToRow(1);
            }

            if (dw_jzxxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_jzxxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

        if (lastdw.GetName() == 'dw_spxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from - 1;
            }
            else {
                ll_row_to = 1;
            }

            dw_spxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1) {
                dw_spxx.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_spxx.ScrollToRow(1);
            }

            if (dw_spxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_spxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

    }
    //#endregion

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    //#region SetZje
    this.SetZje = function () {
        dw_spxx.AcceptText();
        dw_master.AcceptText();
        if (dw_spxx.RowCount() > 0) {
            ldc_zj_sum = dw_spxx.GetItemNumber(1, "zj_sum");
            ldc_zj_sum = parseFloat(ldc_zj_sum.toFixed(2));
        }
        else {
            ldc_zj_sum = 0;
        };
        dw_master.SetItem(1, "zje", ldc_zj_sum);
        var ldc_zmyhl = dw_master.GetItemNumber(1,"zmyhl");
        var ldc_zmyje = ldc_zj_sum * ldc_zmyhl;
        ldc_zmyje = parseFloat(ldc_zmyje.toFixed(2));
        dw_master.SetItem(1, 'zmyje', ldc_zmyje);

    }
    //#endregion

    //#region CacluMjztj
    this.CacluMjztj = function (row) {
        dw_spxx.AcceptText();
        var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
        //计算毛重、净重
        var ldc_zmz = dw_spxx.GetItemNumber(row, "zmz");
        var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz");

        if (ldc_jlsl > 0 && ldc_zmz > 0) {
            var ldc_djmz = ldc_zmz / ldc_jlsl;
            ldc_djmz = parseFloat(ldc_djmz.toFixed(4));
            dw_spxx.SetItem(row, "djmz", ldc_djmz);
        }
        if (ldc_jlsl > 0 && ldc_zjz > 0) {
            var ldc_djjz = ldc_zjz / ldc_jlsl;
            ldc_djjz = parseFloat(ldc_djjz.toFixed(4));
            dw_spxx.SetItem(row, "djjz", ldc_djjz);
        }
    }
    //#endregion

    //#region tabselect
    var lastdw = new DataWindow();
    this.Tab_Select = function () {
        if (tab_1.GetSelectedTab() == 1) {
            var bEditFlag = false;
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_jzxxx.SetFocus()
        }
        if (tab_1.GetSelectedTab() == 2) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_spxx.SetFocus()
        }

        if (tab_1.GetSelectedTab() == 3) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_zzxx.SetFocus()
//            dw_zzxx.dw_zzxx_GetFocus()
        }
      
    };
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit");
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_spxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit_spxx");
        self.Retrieve();
    }
    //#endregion



    //#region 恢复默认列
    this.Recover_zzxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit_zzxx");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_fsdz = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit_fsdz");
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.dw_master_RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_spxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_zzxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_fsdz = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_jzxxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_jzxxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_jzxxx.GetItemString(dw_jzxxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_jzxxx.GetItemDate(dw_jzxxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_jzxxx.GetItemNumber(dw_jzxxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion




    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row =  dw_master.GetRow();
        if (row <= 0)
            return;
        colType = dw_master.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_master.GetItemString(dw_master.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_master.GetItemDate(dw_master.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_master.GetItemNumber(dw_master.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_spxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_spxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_spxx.GetItemString(dw_spxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_spxx.GetItemDate(dw_spxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_spxx.GetItemNumber(dw_spxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_zzxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_zzxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_zzxx.GetItemString(dw_zzxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_zzxx.GetItemDate(dw_zzxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_zzxx.GetItemNumber(dw_zzxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

     //#region 替换XML里面特殊字符
    this.Replace_tszf = function (zfc) {
        if (zfc == null) {
            return zfc;
        }
      
        zfc = zfc.replace(/&/g, "&amp;")
        zfc = zfc.replace(/</g, "&lt;")
        zfc = zfc.replace(/>/g, "&gt;")
        zfc = zfc.replace(/>g/, "&gt;")
        zfc = zfc.replace(/'/g, "&apos;")
        zfc = zfc.replace(/"/g, "&quot;")
        return zfc;
    }
    //#endregion


    //数据导出
    this.Ytsjfs = function () {
        dw_master.AcceptText()
        var fsfxtid = "3111980075"
        var jkbh = "";
        jkbh = QsWebSoft.PubMethod.GetYtsjjkbh().value;
        if (jkbh != null) {
            jkbh += 1;
            QsWebSoft.PubMethod.Addytsjjkbh_master(jkbh).value;
        }

        var ywlx = dw_master.GetItemString(1, "ywbh");

        if (ywlx != null) {
            var str1 = "ywbh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ywlx);
        }

        var sjylx = "10"
        var date = new Date;
        var nf = date.getYear().toString();
        var yf = date.getMonth() + 1;
        if (yf < 10) {
            yf = "0" + yf;
        };
        var rq = date.getDate();
        if (rq < 10) {
            rq = "0" + rq;
        };
        var hh = date.getHours();
        if (hh < 10) {
            hh = "0" + hh;
        };
        var mm = date.getMinutes();
        if (mm < 10) {
            mm = "0" + mm;
        };
        var ss = date.getSeconds();
        if (ss < 10) {
            ss = "0" + ss;
        };
        var ytsjfszt = dw_master.GetItemString(1, "ytsjfszt");
        if (ytsjfszt == "Y") {
            if (requestor.MessageBox("提示", "本票已经发送过，是否再发送?", ICON.Question, BUTTON.YesNo) == 2)
                return;
            dw_master.SetItem(1, "ytsjfszt", "N");
        };

        if (ytsjfszt != null) {
            var str1 = "ytsjfszt";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ytsjfszt);
        }

        var date_fssj = new Date();
        dw_master.SetItem(1, "ytjkfssj", date_fssj.getVarDate());
        var ytjkfscs = dw_master.GetItemNumber(1, "ytjkfscs");
        if (ytjkfscs == null || ytjkfscs == 0) {
            ytjkfscs = 1
        } else {
            ytjkfscs = ytjkfscs + 1
        }
        dw_master.SetItem(1, "ytjkfscs", ytjkfscs);

        if (ytjkfscs != null) {
            var str1 = "ytjkfscs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int(jkbh, str1, ytjkfscs);
        }

        var sj = nf.toString() + yf.toString() + rq.toString() + hh.toString() + mm.toString() + ss.toString();
        var dqrq = nf.toString() + '-' + yf.toString() + '-' + rq.toString()
        var filename = "EMVS_EP_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC";
        var fileFullPath = "E:\\XML\\EMVS_EP_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC";
        dw_master.SetItem(1, "ytjkwjbh", filename);
        var content = '<?xml version="1.0" encoding="UTF-8"?>';
        content += '\n<Message_Data>';
        content += '\n  <project_id/>';
        content += '\n  <project_ver/>';
        content += '\n  <Message_Head>';
        var ywbh = dw_master.GetItemString(1, "ywbh");
        content += '\n    <Id>' + ywbh + '</Id>';
        content += '\n    <MsgType>EMVS_EP</MsgType>';
        content += '\n    <FileName>' + filename + '</FileName>';
        content += '\n    <Version>1.0</Version>';
        content += '\n    <Description>EMVS报文</Description>';
        content += '\n    <CreateTime>' + sj + '</CreateTime>';
        content += '\n    <From></From>';
        content += '\n    <To></To>';
        content += '\n    <CommType></CommType>';
        content += '\n    <MsgStatus></MsgStatus>';
        content += '\n  </Message_Head>';
        content += '\n  <Message_Body>';
        content += '\n    <PRE_ENTRY_INFO_ROOT COUNT="1">';
        content += '\n      <PRE_ENTRY_INFO_ITEM>';
        content += '\n        <SEQ_NO></SEQ_NO>';
        content += '\n        <BILL_SEQ_NO></BILL_SEQ_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';
        content += '\n        <COP_NO>' + ywbh + '</COP_NO>';
        content += '\n        <SEND_TRADE_CODE>3111980075</SEND_TRADE_CODE>';
        content += '\n        <RECEIVE_TRADE_CODE>3111980075</RECEIVE_TRADE_CODE>';
        var user_info = ""
        var EP15212 = dw_master.GetItemString(1, "ep15212");
        if (EP15212 == "Y") {
            user_info = "EP15212"
        };

        if (EP15212 != null) {
            var str1 = "ep15212";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, EP15212);
        }

        var EP14514 = dw_master.GetItemString(1, "EP14514");
        if (EP14514 == "Y") {
            if (user_info == "") {
                user_info = "EP14514"
            }
            else {
                user_info = user_info + ",EP14514"
            }
        };

        if (EP14514 != null) {
            var str1 = "EP14514";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, EP14514);
        }

        var EP14515 = dw_master.GetItemString(1, "EP14515");
        if (EP14515 == "Y") {
            if (user_info == "") {
                user_info = "EP14515"
            }
            else {
                user_info = user_info + ",EP14515"
            }
        };

        if (EP14515 != null) {
            var str1 = "EP14515";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, EP14515);
        }

        var EP14516 = dw_master.GetItemString(1, "EP14516");
        if (EP14516 == "Y") {
            if (user_info == "") {
                user_info = "EP14516"
            }
            else {
                user_info = user_info + ",EP14516"
            }
        };

        if (EP14516 != null) {
            var str1 = "EP14516";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, EP14516);
        }

        var EP25461 = dw_master.GetItemString(1, "ep25461");
        if (EP25461 == "Y") {
            if (user_info == "") {
                user_info = "EP25461"
            }
            else {
                user_info = user_info + ",EP25461"
            }
        };

        if (EP25461 != null) {
            var str1 = "EP25461";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, EP25461);
        }

        if (user_info == "") {
            requestor.MessageBox("提示", "请选择数据接收的机器用户名！")
            return
        }

        content += '\n        <USER_INFO>' + user_info + '</USER_INFO>';
        content += '\n        <BIZ_TYPE>1</BIZ_TYPE>';
        content += '\n        <DATA_SOURCE_TYPE>0</DATA_SOURCE_TYPE>';
        var dzlx = dw_master.GetItemString(1, "dzlx");
        if (dzlx == null) {
            requestor.MessageBox("提示", "请输入单证类型！")
            return
        }

        if (dzlx != null) {
            var str1 = "dzlx";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, dzlx);
        }

        content += '\n        <DEC_TYPE>' + dzlx + '</DEC_TYPE>';
        var ytjkzt = dw_master.GetItemString(1, "ytjkzt")
        if (ytjkzt == null || ytjkzt == "") {
            dw_master.SetItem(1, "ytjkzt", "4")
            ytjkzt = "4"
        } else if (ytjkzt == "4" || ytjkzt == "5") {
            if (requestor.MessageBox("提示", "数据已经产生过，亿通是否接收到，如果未接收到需要重新发送则选择YES，如果已经接收到需要覆盖以前内容则选择NO!", ICON.Question, BUTTON.YesNo) == 2) {
                dw_master.SetItem(1, "ytjkzt", "5")
                ytjkzt = "5"
            }
        };

        if (ytjkzt != null) {
            var str1 = "ytjkzt";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ytjkzt);
        }

        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';
        content += '\n      </PRE_ENTRY_INFO_ITEM>';
        content += '\n    </PRE_ENTRY_INFO_ROOT>';
        content += '\n    <EP_DEC_ROOT>';
        content += '\n      <EP_DEC_HEAD>';
        var bgdh = dw_master.GetItemString(1, "bgdh");
        if (bgdh == null) {
            bgdh = "";
        }

        if (bgdh != null) {
            var str1 = "bgdh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, bgdh);
        }

        content += '\n        <PRE_ENTRY_ID>' + bgdh + '</PRE_ENTRY_ID>';
        var jydwdm = dw_master.GetItemString(1, "jydwdm")
        if (jydwdm == null) {
            requestor.MessageBox("提示", "经营单位代码为空，不能申报")
            return;
        }

        if (jydwdm != null) {
            var str1 = "jydwdm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, jydwdm);
        }

        //        var jydwbm_hgqybm = QsWebSoft.PubMethod.ReadHgqydm(jydwbm).value;
        //        if (jydwbm_hgqybm == null) {
        //            jydwbm_hgqybm = "";
        //        };
        content += '\n        <TRADE_CO>' + jydwdm + '</TRADE_CO>';
        var jydwmc = dw_master.GetItemString(1, "jydwmc")
        content += '\n        <TRADE_NAME>' + jydwmc + '</TRADE_NAME>';

        if (jydwmc != null) {
            var str1 = "jydwmc";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, jydwmc);
        }

        var hzdwdqdm = dw_master.GetItemString(1, "hzdwdqdm")
        if (hzdwdqdm == null) {
            hzdwdqdm = "";
        }
        content += '\n        <DISTRICT_CODE>' + hzdwdqdm + '</DISTRICT_CODE>';

        if (hzdwdqdm != null) {
            var str1 = "hzdwdqdm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, hzdwdqdm);
        }

        var shdwdm = dw_master.GetItemString(1, "shdwdm_jsl");
        if (shdwdm == null) {
            requestor.MessageBox("提示", "货主单位代码为空，不能申报")
            return;
        }
        content += '\n        <OWNER_CODE>' + shdwdm + '</OWNER_CODE>';

        if (shdwdm != null) {
            var str1 = "shdwdm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, shdwdm);
        }

        var shdwmc = dw_master.GetItemString(1, "shdwmc");
        if (shdwmc == null) {
            shdwmc = "";
        }
        content += '\n        <OWNER_NAME>' + shdwmc + '</OWNER_NAME>';

        if (shdwmc != null) {
            var str1 = "shdwmc";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, shdwmc);
        }

        var sbdwdm = dw_master.GetItemString(1, "sbdwdm")
        if (sbdwdm == null || sbdwdm == "") {
            requestor.MessageBox("提示", "申报单位代码为空，不能申报")
            return;
        }

        if (sbdwdm != null) {
            var str1 = "sbdwdm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, sbdwdm);
        }

        content += '\n        <AGENT_CODE>3111980075</AGENT_CODE>';
        var bggsmc = dw_master.GetItemString(1, "bggsmc")
        if (bggsmc == null) {
            bggsmc = "";
        }
        content += '\n        <AGENT_NAME>' + bggsmc + '</AGENT_NAME>';

        if (bggsmc != null) {
            var str1 = "bggsmc";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, bggsmc);
        }

        var ysfs = dw_master.GetItemString(1, "ysfs")
        var ysfsbm = "";
        if (ysfs != null) {
            var str1 = "ysfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ysfs);
            ysfsbm = QsWebSoft.PubMethod.ReadYsfsbm(ysfs).value;
        };

        if (ysfsbm == null) {
            ysfsbm = "";
        }
        content += '\n        <TRAF_MODE>' + ysfsbm + '</TRAF_MODE>';
        var jcka = dw_master.GetItemString(1, "jcka")
        if (jcka == null) {
            jcka = ""
        }
        content += '\n        <I_E_PORT>' + jcka + '</I_E_PORT>';

        if (jcka != null) {
            var str1 = "jcka";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, jcka);
        }

        var zzgk = dw_master.GetItemString(1, "zzgk")
        if (zzgk != null) {
            var str1 = "zzgk";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, zzgk);
        }

        if (zzgk == null || zzgk == "") {
            var qyg = dw_master.GetItemString(1, "qyg")
            if (qyg != null) {
                var str1 = "qyg";
                QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, qyg);
            }

            var qygdm = dw_master.GetItemString(1, "qygdm");

            if (qygdm == null && qyg != null) {
                qygdm = QsWebSoft.PubMethod.ReadHggkdm(qyg).value; ;
            };
            if (qygdm != null) {
                var str1 = "qygdm";
                QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, qygdm);
            }

        } else {
            var qyg = dw_master.GetItemString(1, "zzgk")

            if (qyg != null) {
                var str1 = "zzgk";
                QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, qyg);
            }

            var qygdm = dw_master.GetItemString(1, "zzgkdm");

            if (qygdm == null && qyg != null) {
                qygdm = QsWebSoft.PubMethod.ReadHggkdm(qyg).value; ;
            };

            if (qygdm != null) {
                var str1 = "zzgkdm";
                QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, qygdm);
            }
        }
        if (qygdm == null) {
            qygdm = ""
        }

        content += '\n        <DISTINATE_PORT>' + qygdm + '</DISTINATE_PORT>';
        var cm = dw_master.GetItemString(1, "cm_jsl")
        if (cm == null) {
            cm = ""
        }
        content += '\n        <TRAF_NAME>' + cm + '</TRAF_NAME>';

        if (cm != null) {
            var str1 = "cm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, cm);
        }

        var hth = dw_master.GetItemString(1, "hth")
        if (hth == null) {
            hth = ""
        }

        if (hth != null) {
            var str1 = "hth";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, hth);
        }
        hth = self.Replace_tszf(hth);
        content += '\n        <CONTR_NO>' + hth + '</CONTR_NO>';
        content += '\n        <IN_RATIO>0</IN_RATIO>';
        var ztdh = dw_master.GetItemString(1, "ztdh")
        if (ztdh == null) {
            ztdh = ""
        }
        content += '\n        <BILL_NO>' + ztdh + '</BILL_NO>';

        if (ztdh != null) {
            var str1 = "ztdh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ztdh);
        }

        var qiyunguo = dw_master.GetItemString(1, "qiyunguo")

        if (qiyunguo != null) {
            var str1 = "qiyunguo";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, qiyunguo);
        }

        var qiyunguodm = dw_master.GetItemString(1, "qiyunguodm")
        if (qiyunguodm == null) {
            if (qiyunguo != null) {
                qiyunguodm = QsWebSoft.PubMethod.ReadGjdm(qiyunguo).value;
            }
        };
        if (qiyunguodm == null) {
            qiyunguodm = "";
        }
        if (qiyunguodm != null) {
            var str1 = "qiyunguodm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, qiyunguodm);
        }
        content += '\n        <TRADE_COUNTRY>' + qiyunguodm + '</TRADE_COUNTRY>';
        var myfs = dw_master.GetItemString(1, "myfs")
        if (myfs == null) {
            myfs = ""
        }

        if (myfs != null) {
            var str1 = "myfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, myfs);
        }

        content += '\n        <TRADE_MODE>' + myfs + '</TRADE_MODE>';
        var zmfs = dw_master.GetItemString(1, "zmfs")
        if (zmfs == null) {
            zmfs = ""
        }

        if (zmfs != null) {
            var str1 = "zmfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, zmfs);
        }

        content += '\n        <CUT_MODE>' + zmfs + '</CUT_MODE>';
        content += '\n        <PAY_MODE>0</PAY_MODE>';
        var jgfs = dw_master.GetItemString(1, "jgfs")
        var jgtkdm = QsWebSoft.PubMethod.ReadJgtk(jgfs).value; ;
        if (jgtkdm == null) {
            jgtkdm = ""
        }

        if (jgfs != null) {
            var str1 = "jgfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, jgfs);
        }

        content += '\n        <TRANS_MODE>' + jgtkdm + '</TRANS_MODE>';
        content += '\n        <PAY_WAY></PAY_WAY>';
        var yfbj = dw_master.GetItemString(1, "yfbj")
        if (yfbj == null || jgtkdm == "CRF" || jgtkdm == "CNF") {
            yfbj = ""
        }

        if (yfbj != null) {
            var str1 = "yfbj";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, yfbj);
        }

        content += '\n        <FEE_MARK>' + yfbj + '</FEE_MARK>';
        var yfbb = dw_master.GetItemString(1, "kpbz")
        var yfbbdm = "";
        if (yfbb != null || jgtkdm == "CRF") {
            var str1 = "kpbz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, yfbb);
            yfbbdm = QsWebSoft.PubMethod.ReadBbdm(yfbb).value; ;
        };

        if (yfbbdm == null) {
            yfbbdm = ""
        }

        content += '\n        <FEE_CURR>' + yfbbdm + '</FEE_CURR>';
        var yfje = dw_master.GetItemNumber(1, "kpje")
        if (yfje == null || yfje == 0) {
            content += '\n        <FEE_RATE></FEE_RATE>';
        } else {
            content += '\n        <FEE_RATE>' + yfje + '</FEE_RATE>';
        }

        if (yfje != null) {
            var str1 = "kpje";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int(jkbh, str1, yfje);
        }

        content += '\n        <OTHER_MARK></OTHER_MARK>';
        content += '\n        <OTHER_CURR></OTHER_CURR>';
        content += '\n        <OTHER_RATE></OTHER_RATE>';
        var bxfbj = dw_master.GetItemString(1, "bxfbj")
        if (bxfbj == null) {
            bxfbj = ""
        }

        if (bxfbj != null) {
            var str1 = "bxfbj";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, bxfbj);
        }

        content += '\n        <INSUR_MARK>' + bxfbj + '</INSUR_MARK>';
        var bxfbb = dw_master.GetItemString(1, "bxfbb")
        var bxfbbdm = "";
        if (bxfbb != null) {
            var str1 = "bxfbb";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, bxfbb);
            bxfbbdm = QsWebSoft.PubMethod.ReadBbdm(bxfbb).value; ;
        };
        if (bxfbbdm == null) {
            bxfbbdm = ""
        }

        content += '\n        <INSUR_CURR>' + bxfbbdm + '</INSUR_CURR>';
        var bxfje = dw_master.GetItemNumber(1, "bxfje")
        if (bxfje == null || bxfje == 0) {

            content += '\n        <INSUR_RATE></INSUR_RATE>';
        } else {
            content += '\n        <INSUR_RATE>' + bxfje + '</INSUR_RATE>';
        }

        if (bxfje != null) {
            var str1 = "bxfje";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int(jkbh, str1, bxfje);
        }

        var zxs = dw_master.GetItemNumber(1, "zxs")
        if (zxs == null) {
            zxs = 0;
        }

        if (zxs != null) {
            var str1 = "zxs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int(jkbh, str1, zxs);
        }

        content += '\n        <PACK_NO>' + zxs + '</PACK_NO>';
        var zmz = dw_master.GetItemNumber(1, "zmz")
        zmz = parseFloat(zmz.toFixed(4));
        if (zmz == null) {
            zmz = 0;
        }

        if (zmz != null) {
            var str1 = "zmz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int(jkbh, str1, zmz);
        }

        content += '\n        <GROSS_WT>' + zmz.toFixed(3) + '</GROSS_WT>';
        var zjz = dw_master.GetItemNumber(1, "zjz")
        zjz = parseFloat(zjz.toFixed(4));
        if (zjz == null) {
            zjz = 0;
        }

        if (zjz != null) {
            var str1 = "zjz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int(jkbh, str1, zjz);
        }

        content += '\n        <NET_WT>' + zjz.toFixed(3) + '</NET_WT>';
        content += '\n        <LICENSE_NO></LICENSE_NO>';
        content += '\n        <APPR_NO></APPR_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';

        content += '\n        <I_E_DATE>' + dqrq + '</I_E_DATE>';
        var bzzl = dw_master.GetItemString(1, "bzzl")
        if (bzzl == null) {
            bzzl = "";
        }

        if (bzzl != null) {
            var str1 = "bzzl";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, bzzl);
        }

        content += '\n        <WRAP_TYPE>' + bzzl + '</WRAP_TYPE>';
        var ytbz = dw_master.GetItemString(1, "ytbz");
        ytbz = self.Replace_tszf(ytbz);
        if (ytbz == null) {
            ytbz = "";
        }

        if (ytbz != null) {
            var str1 = "ytbz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ytbz);
        }

        content += '\n        <NOTE_S>' + ytbz + '</NOTE_S>';
        content += '\n        <D_DATE>' + dqrq + '</D_DATE>';

        content += '\n        <EX_SOURCE></EX_SOURCE>';
        var hcorhbh = dw_master.GetItemString(1, "hcorhbh_jsl")
        if (hcorhbh == null) {
            hcorhbh = "";
        }

        if (hcorhbh != null) {
            var str1 = "hcorhbh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, hcorhbh);
        }

        content += '\n        <VOYAGE_NO>' + hcorhbh + '</VOYAGE_NO>';
        var jckbz = dw_master.GetItemString(1, "jckbz")
        if (jckbz == null) {
            jckbz = "";
        }
        content += '\n        <IE_FLAG>' + jckbz + '</IE_FLAG>';

        if (jckbz != null) {
            var str1 = "jckbz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, jckbz);
        }

        content += '\n        <PRDTID></PRDTID>';
        content += '\n        <STORENO></STORENO>';
        content += '\n        <RAMANUALNO></RAMANUALNO>';
        content += '\n        <RADECLNO></RADECLNO>';
        var ytjkzt = dw_master.GetItemString(1, "ytjkzt")
        if (ytjkzt == null) {
            ytjkzt = "";
        }
        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';

        if (ytjkzt != null) {
            var str1 = "ytjkzt";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ytjkzt);
        }

        content += '\n        <MEMO></MEMO>';

        var jydwtyxydm = dw_master.GetItemString(1, "jydwtyxydm");
        if (jydwtyxydm == null) {
            jydwtyxydm = "";
        }
        content += '\n        <TRADE_CO_SCC>' + jydwtyxydm + '</TRADE_CO_SCC>'; //经营单位

        if (jydwtyxydm != null) {
            var str1 = "jydwtyxydm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, jydwtyxydm);
        }

        var sbdwtyxydm = dw_master.GetItemString(1, "sbdwtyxydm");
        if (sbdwtyxydm == null) {
            sbdwtyxydm = "";
        }
        content += '\n        <AGENT_CODE_SCC>' + sbdwtyxydm + '</AGENT_CODE_SCC>'; //申报单位

        if (sbdwtyxydm != null) {
            var str1 = "sbdwtyxydm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, sbdwtyxydm);
        }

        var shdwtyxydm = dw_master.GetItemString(1, "shdwtyxydm");
        if (shdwtyxydm == null) {
            shdwtyxydm = "";
        }

        if (shdwtyxydm.length == 18) {
            content += '\n        <OWNER_CODE_SCC>' + shdwtyxydm + '</OWNER_CODE_SCC>'; //货主单位
        } else {
            content += '\n        <OWNER_CODE_SCC></OWNER_CODE_SCC>'; //货主单位
        }

        if (shdwtyxydm != null) {
            var str1 = "shdwtyxydm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, shdwtyxydm);
        }

        var mygb = dw_master.GetItemString(1, "mygb")
        if (mygb != null) {
            var str1 = "mygb";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, mygb);
            mygb = QsWebSoft.PubMethod.ReadGjdm(mygb).value;
        };

        if (mygb == null) {
            mygb = "";
        }

        content += '\n        <TRADE_AREA_CODE>' + mygb + '</TRADE_AREA_CODE>';
        var decl_port = dw_master.GetItemString(1, "jcka")
        if (decl_port == null) {
            decl_port = ""
        }

        if (decl_port != null) {
            var str1 = "jcka";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, decl_port);
        }

        content += '\n        <DECL_PORT>' + decl_port + '</DECL_PORT>';
        content += '\n        <EDI_NO></EDI_NO>';

        content += '\n      </EP_DEC_HEAD>';

        var spxx_row = dw_spxx.RowCount();
        content += '\n      <EP_DEC_LIST COUNT="' + spxx_row + '">';


        var wbbb = dw_master.GetItemString(1, "wbbb")
        var wbbbdm = "";
        if (wbbb != null) {
            var str1 = "wbbb";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, wbbb);
            wbbbdm = QsWebSoft.PubMethod.ReadBbdm(wbbb).value; ;
        };
        if (wbbbdm == null) {
            wbbbdm = ""
        }

        var newrow = 0;
        for (row = 1; row <= dw_spxx.RowCount(); row++) {
            var cxh = dw_spxx.GetItemNumber(row, "cxh");
            QsWebSoft.PubMethod.Addytsjjkbh_spxx(jkbh, cxh);
            content += '\n        <EP_DEC_LIST_ITEM>';
            newrow = newrow + 1
            content += '\n          <G_NO>' + newrow + '</G_NO>';
            content += '\n          <CONTR_ITEM></CONTR_ITEM>';
            var hgbm = dw_spxx.GetItemString(row, "hgbm");
            if (hgbm == null) {
                hgbm = "";
            }

            if (hgbm != null) {
                var str1 = "hgbm";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, hgbm, row);
            }

            content += '\n          <CODE_T>' + hgbm.substr(0, 8) + '</CODE_T>';
            content += '\n          <CODE_S>' + hgbm.substr(8, 2) + '</CODE_S>';
            var spmc = dw_spxx.GetItemString(row, "spmc");
            if (spmc == null) {
                spmc = "";
            }

            var spmc_yw = dw_spxx.GetItemString(row, "spmc_yw");
            if (spmc_yw == null) {
                spmc_yw = "";
            }
            spmc = self.Replace_tszf(spmc);

            if (spmc != null) {
                var str1 = "spmc";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, spmc, row);
            }

            if (spmc == null) {
                spmc = "";
            }
            spmc_yw = self.Replace_tszf(spmc_yw);

            if (spmc_yw != null) {
                var str1 = "spmc_yw";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, spmc_yw, row);
            }

            if (spmc_yw == null) {
                spmc_yw = "";
            }
            var dmbz = dw_master.GetItemString(1, "dmbz");
            //            var str = "";
            //            if (dmbz == "Y") {
            //                str = "(生鲜港)";
            //            }
            content += '\n          <G_NAME>' + spmc + spmc_yw + '</G_NAME>';

            if (dmbz != null) {
                var str1 = "dmbz";
                QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, dmbz);
            }



            var sfysx = dw_spxx.GetItemString(row, "sfysx");

            if (sfysx != null) {
                var str1 = "sfysx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfysx, row);
            }

            var sfzy = dw_spxx.GetItemString(row, "sfzy");

            if (sfzy != null) {
                var str1 = "sfzy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfzy, row);
            }

            var sfygzfs = dw_spxx.GetItemString(row, "sfygzfs");

            if (sfygzfs != null) {
                var str1 = "sfygzfs";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfygzfs, row);
            }

            var sfypz = dw_spxx.GetItemString(row, "sfypz");

            if (sfypz != null) {
                var str1 = "sfypz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfypz, row);
            }

            var sfypplx = dw_spxx.GetItemString(row, "sfypplx");

            if (sfypplx != null) {
                var str1 = "sfypplx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfypplx, row);
            }

            var sfyckxhqk = dw_spxx.GetItemString(row, "sfyckxhqk");

            if (sfyckxhqk != null) {
                var str1 = "sfyckxhqk";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfyckxhqk, row);
            }

            var sfydj = dw_spxx.GetItemString(row, "sfydj");

            if (sfydj != null) {
                var str1 = "sfydj";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfydj, row);
            }

            var sfybzgg = dw_spxx.GetItemString(row, "sfybzgg");

            if (sfybzgg != null) {
                var str1 = "sfybzgg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfybzgg, row);
            }

            var sfypp = dw_spxx.GetItemString(row, "sfypp");

            if (sfypp != null) {
                var str1 = "sfypp";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfypp, row);
            }

            var sfygg = dw_spxx.GetItemString(row, "sfygg");

            if (sfygg != null) {
                var str1 = "sfygg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfygg, row);
            }

            var sfycf = dw_spxx.GetItemString(row, "sfycf");

            if (sfycf != null) {
                var str1 = "sfycf";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfycf, row);
            }

            var sfyxjgjggy = dw_spxx.GetItemString(row, "sfyxjgjggy");

            if (sfyxjgjggy != null) {
                var str1 = "sfyxjgjggy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfyxjgjggy, row);
            }

            var sfyqt = dw_spxx.GetItemString(row, "sfyqt");

            if (sfyqt != null) {
                var str1 = "sfyqt";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sfyqt, row);
            }

            var spsx = dw_spxx.GetItemString(row, "spsx");
            spsx = self.Replace_tszf(spsx);

            if (spsx != null) {
                var str1 = "spsx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, spsx, row);
            }

            if (spsx == null) {
                spsx = "";
            }
            var zy = dw_spxx.GetItemString(row, "zy");
            zy = self.Replace_tszf(zy);
            if (zy == null) {
                zy = "";
            }

            if (zy != null) {
                var str1 = "zy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, zy, row);
            }

            var gzfs = dw_spxx.GetItemString(row, "gzfs");
            gzfs = self.Replace_tszf(gzfs);
            if (gzfs == null) {
                gzfs = "";
            }

            if (gzfs != null) {
                var str1 = "gzfs";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, gzfs, row);
            }

            var sppz = dw_spxx.GetItemString(row, "sppz");
            sppz = self.Replace_tszf(sppz);
            if (sppz == null) {
                sppz = "";
            }

            if (sppz != null) {
                var str1 = "sppz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sppz, row);
            }

            var pplx = dw_spxx.GetItemString(row, "pplx");
            pplx = self.Replace_tszf(pplx);
            if (pplx == null) {
                pplx = "";
            }

            if (pplx != null) {
                var str1 = "pplx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, pplx, row);
            }

            var ckxhqk = dw_spxx.GetItemString(row, "ckxhqk");
            ckxhqk = self.Replace_tszf(ckxhqk);
            if (ckxhqk == null) {
                ckxhqk = "";
            }

            if (ckxhqk != null) {
                var str1 = "ckxhqk";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, ckxhqk, row);
            }

            var spdj = dw_spxx.GetItemString(row, "spdj");
            spdj = self.Replace_tszf(spdj);
            if (spdj == null) {
                spdj = "";
            }

            if (spdj != null) {
                var str1 = "spdj";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, spdj, row);
            }

            var bzgg = dw_spxx.GetItemString(row, "bzgg");
            bzgg = self.Replace_tszf(bzgg);
            if (bzgg == null) {
                bzgg = "";
            }

            if (bzgg != null) {
                var str1 = "bzgg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, bzgg, row);
            }

            var sppp = dw_spxx.GetItemString(row, "sppp");
            sppp = self.Replace_tszf(sppp);
            if (sppp == null) {
                sppp = "";
            }

            if (sppp != null) {
                var str1 = "sppp";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, sppp, row);
            }

            var spgg = dw_spxx.GetItemString(row, "spgg");
            spgg = self.Replace_tszf(spgg);
            if (spgg == null) {
                spgg = "";
            }

            if (spgg != null) {
                var str1 = "spgg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, spgg, row);
            }

            var cf = dw_spxx.GetItemString(row, "cf");
            cf = self.Replace_tszf(cf);
            if (cf == null) {
                cf = "";
            }

            if (cf != null) {
                var str1 = "cf";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, cf, row);
            }

            var xjgjggy = dw_spxx.GetItemString(row, "xjgjggy");
            xjgjggy = self.Replace_tszf(xjgjggy);
            if (xjgjggy == null) {
                xjgjggy = "";
            }

            if (xjgjggy != null) {
                var str1 = "xjgjggy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, xjgjggy, row);
            }

            var spqtys = dw_spxx.GetItemString(row, "spqtys");
            spqtys = self.Replace_tszf(spqtys);
            if (spqtys == null) {
                spqtys = "";
            }

            if (spqtys != null) {
                var str1 = "spqtys";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, spqtys, row);
            }

            dw_sbys.Retrieve(dw_spxx.GetItemString(row, "ywbh"), dw_spxx.GetItemString(row, "spbm"), dw_spxx.GetItemNumber(row, "cxh"));

            var ls_model = ""

            for (var i = 1; i <= dw_sbys.RowCount(); i++) {
                if (dw_sbys.GetItemString(i, "zdm") == "sppz") {
                    if (ls_model == "" || ls_model == "|") {
                        ls_model += "品种：" + dw_sbys.GetItemString(i, "zdz");
                    } else {
                        ls_model = ls_model + "|" + "品种：" + dw_sbys.GetItemString(i, "zdz")
                    }
                } else if (dw_sbys.GetItemString(i, "zdm") == "spdj") {
                    if (ls_model == "" || ls_model == "|") {
                        ls_model += "等级：" + dw_sbys.GetItemString(i, "zdz");
                    } else {
                        ls_model = ls_model + "|" + "等级：" + dw_sbys.GetItemString(i, "zdz")
                    }
                } else if (dw_sbys.GetItemString(i, "zdm") == "sppp") {
                    if (ls_model == "" || ls_model == "|") {
                        ls_model += "品牌：" + dw_sbys.GetItemString(i, "zdz");
                    } else {
                        ls_model = ls_model + "|" + "品牌：" + dw_sbys.GetItemString(i, "zdz")
                    }
                } else if (dw_sbys.GetItemString(i, "zdm") == "spgg" && dw_sbys.GetItemString(i, "spbm") == "admin000014") {
                    if (ls_model == "" || ls_model == "|") {
                        ls_model += "规格：" + dw_sbys.GetItemString(i, "zdz");
                    } else {
                        ls_model = ls_model + "|" + "规格：" + dw_sbys.GetItemString(i, "zdz")
                    }
                } else {
                    if (ls_model == "" || ls_model == "|") {
                        ls_model += dw_sbys.GetItemString(i, "zdz");
                        if (ls_model == "") {
                            ls_model = "|";
                        }
                    } else {
                        ls_model = ls_model + "|" + dw_sbys.GetItemString(i, "zdz");
                    }
                }
            }

            //            if (spsx != null && spsx != "" && sfysx == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = spsx;
            //                } else {
            //                    ls_model = ls_model + "|" + spsx
            //                }
            //            };


            //            if (pplx != null && pplx != "" && sfypplx == "Y") {
            //                ls_model = pplx;
            //            };

            //            if (ckxhqk != null && ckxhqk != "" && sfyckxhqk == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = ckxhqk;
            //                } else {
            //                    ls_model = ls_model + "|" + ckxhqk
            //                }
            //            };

            //            if (spsx != null && spsx != "" && sfysx == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = spsx;
            //                } else {
            //                    ls_model = ls_model + "|" + spsx
            //                }
            //            };

            //            if (zy != null && zy != "" && sfzy == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = zy;
            //                } else {
            //                    ls_model = ls_model + "|" + zy
            //                }

            //            };

            //            if (gzfs != null && gzfs != "" && sfygzfs == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = gzfs;
            //                } else {
            //                    ls_model = ls_model + "|" + gzfs
            //                }

            //            };

            //            if (sppz != null && sppz != "" && sfypz == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = "品种：" + sppz;
            //                } else {
            //                    ls_model = ls_model + "|" + "品种：" + sppz
            //                }

            //            };


            //            if (spdj != null && spdj != "" && sfydj == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = "等级：" + spdj;
            //                } else {
            //                    ls_model = ls_model + "|" + "等级：" + spdj
            //                }

            //            };
            //            if (spmc.indexOf("橙") < 0 && spmc.indexOf("葡萄") < 0 && spmc.indexOf("香蕉") < 0 && spmc.indexOf("苹果") < 0 && spmc.indexOf("柠檬") < 0) {
            //                ls_model = ls_model + "|" + "无GTIN"
            //                ls_model = ls_model + "|" + "无CAS"
            //            }


            //            if (bzgg != null && bzgg != "" && sfybzgg == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = bzgg;
            //                } else {
            //                    ls_model = ls_model + "|" + bzgg
            //                }

            //            };

            //            if (spmc.indexOf("葡萄柚") >= 0) {
            //                ls_model = ls_model + "|" + "无GTIN"
            //                ls_model = ls_model + "|" + "无CAS"
            //            }

            //            if (sppp != null && sppp != "" && sfypp == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = "品牌：" + sppp;
            //                } else {
            //                    ls_model = ls_model + "|" + "品牌：" + sppp
            //                }

            //            };


            //            if (spmc.indexOf("橙") >= 0 || spmc.indexOf("香蕉") >= 0 || spmc.indexOf("苹果") >= 0 || spmc.indexOf("柠檬") >= 0 || (spmc.indexOf("葡萄") >= 0 && spmc.indexOf("葡萄柚") < 0)) {
            //                ls_model = ls_model + "|" + "无GTIN"
            //                ls_model = ls_model + "|" + "无CAS"
            //            }

            //            if (spgg != null && spgg != "" && sfygg == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = spgg;
            //                } else {
            //                    ls_model = ls_model + "|" + spgg
            //                }

            //            };

            //            if (cf != null && cf != "" && sfycf == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = cf;
            //                } else {
            //                    ls_model = ls_model + "|" + cf
            //                }

            //            };
            //            if (xjgjggy != null && xjgjggy != "" && sfyxjgjggy == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = xjgjggy;
            //                } else {
            //                    ls_model = ls_model + "|" + xjgjggy
            //                }

            //            };
            //            if (spqtys != null && spqtys != "" && sfyqt == "Y") {
            //                if (ls_model == "") {
            //                    ls_model = spqtys;
            //                } else {
            //                    ls_model = ls_model + "|" + spqtys
            //                }

            //            };
            ls_model = self.Replace_tszf(ls_model);

            content += '\n          <G_MODEL>' + ls_model + '</G_MODEL>';

            var hggjdm = dw_master.GetItemString(1, "ycddm")
            var ycd = dw_master.GetItemString(1, "ycd")
            if (hggjdm == null) {
                if (ycd != null) {
                    hggjdm = QsWebSoft.PubMethod.ReadGjdm(ycd).value;
                }
            };
            if (hggjdm == null) {
                hggjdm = "";
            }

            if (hggjdm != null) {
                var str1 = "ycddm";
                QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, hggjdm);
            }

            if (ycd != null) {
                var str1 = "ycd";
                QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, ycd);
            }

            content += '\n          <ORIGIN_COUNTRY>' + hggjdm + '</ORIGIN_COUNTRY>';
            var zjz = dw_spxx.GetItemNumber(row, "zjz");
            if (zjz == null) {
                zjz = 0;
            }

            if (zjz != null) {
                var str1 = "zjz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int(jkbh, str1, zjz, row);
            }

            var jlsl = dw_spxx.GetItemNumber(row, "jlsl");
            if (jlsl == null) {
                jlsl = 0;
            }

            if (jlsl != null) {
                var str1 = "jlsl";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int(jkbh, str1, jlsl, row);
            }


            if (((hggjdm == "502") && spmc == "鲜橙") || (hggjdm == "602" && spmc == "鲜柠檬") || hggjdm == "609" || hggjdm == "601" || hggjdm == "602") {

                content += '\n          <G_QTY>' + jlsl + '</G_QTY>';
            } else {
                content += '\n          <G_QTY>' + zjz + '</G_QTY>';
            }

            var hgjldw = dw_spxx.GetItemString(row, "hgjldw");
            if (hgjldw == null) {
                hgjldw = "";
            }

            if (hgjldw != null) {
                var str1 = "hgjldw";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, hgjldw, row);
            }

            var jldw_jsl = dw_spxx.GetItemString(row, "jldw_jsl");
            if (jldw_jsl == null) {
                jldw_jsl = "";
            }

            if (jldw_jsl != null) {
                var str1 = "jldw";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, jldw_jsl, row);
            }

            if ((hggjdm == "502") && spmc == "鲜橙" || hggjdm == "609") {
                content += '\n          <G_UNIT>' + jldw_jsl + '</G_UNIT>';
            } else {
                content += '\n          <G_UNIT>' + hgjldw + '</G_UNIT>';
            }
            content += '\n          <QTY_1>' + zjz + '</QTY_1>';
            content += '\n          <UNIT_1>' + hgjldw + '</UNIT_1>';
            content += '\n          <QTY_2></QTY_2>';
            content += '\n          <UNIT_2></UNIT_2>';

            content += '\n          <TRADE_CURR>' + wbbbdm + '</TRADE_CURR>';
            if ((hggjdm == "601" || hggjdm == "502") && spmc == "鲜橙" || hggjdm == "609") {
                var djjg = dw_spxx.GetItemNumber(row, "djjg")
                if (djjg != null) {
                    var str1 = "djjg";
                    QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int(jkbh, str1, djjg, row);
                }

                content += '\n          <DECL_PRICE>' + djjg + '</DECL_PRICE>';
            } else {
                var hgdj = dw_spxx.GetItemNumber(row, "hgdj")
                if (hgdj != null) {
                    var str1 = "hgdj";
                    QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int(jkbh, str1, hgdj, row);
                }

                content += '\n          <DECL_PRICE>' + hgdj + '</DECL_PRICE>';
            }
            var zj = dw_spxx.GetItemNumber(row, 'zj')

            if (zj != null) {
                var str1 = "zj";

                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int(jkbh, str1, zj, row);
            }

            content += '\n          <TRADE_TOTAL>' + zj + '</TRADE_TOTAL>';

            var zjmsfs = dw_spxx.GetItemString(row, "zjmsfs")
            if (zjmsfs == null) {
                zjmsfs = ""
            }

            if (zjmsfs != null) {
                var str1 = "zjmsfs";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, zjmsfs, row);
            }

            content += '\n          <DUTY_MODE>' + zjmsfs + '</DUTY_MODE>'; //未做
            var yt = dw_spxx.GetItemString(row, "yt")
            if (yt == null) {
                yt = ""
            }

            if (yt != null) {
                var str1 = "yt";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx(jkbh, str1, yt, row);
            }

            content += '\n          <USE_TO>' + yt + '</USE_TO>';
            content += '\n          <PRDT_NO></PRDT_NO>';
            content += '\n          <GOODS_ID></GOODS_ID>';
            var zmz = dw_spxx.GetItemNumber(row, "zmz");
            if (zmz == null) {
                zmz = 0;
            }

            if (zmz != null) {
                var str1 = "zmz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int(jkbh, str1, zmz, row);
            }

            content += '\n          <GROSS_WT>' + zmz + '</GROSS_WT>';
            var zjz = dw_spxx.GetItemNumber(row, "zjz");
            if (zjz == null) {
                zjz = 0;
            }

            if (zjz != null) {
                var str1 = "zjz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int(jkbh, str1, zjz, row);
            }

            content += '\n          <NET_WT>' + zjz + '</NET_WT>';
            content += '\n          <WORK_USD>0.0</WORK_USD>';

            content += '\n          <DESTINATION_COUNTRY>142</DESTINATION_COUNTRY>';

            content += '\n        </EP_DEC_LIST_ITEM>';
        }

        content += '\n      </EP_DEC_LIST>';

        var jzxxx_row = dw_jzxxx.RowCount();
        content += '\n      <EP_DEC_CONTAINER_LIST COUNT="' + jzxxx_row + '">';

        var newrow_jzxxx = 0;
        for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
            var cxh = dw_jzxxx.GetItemNumber(row, "cxh");
            QsWebSoft.PubMethod.Addytsjjkbh_jzxxx(jkbh, cxh);
            content += '\n      	<EP_DEC_CONTAINER_ITEM>';
            var jzxh = dw_jzxxx.GetItemString(row, "jzxh");
            if (jzxh == null) {
                jzxh = "";
            }

            if (jzxh != null) {
                var str1 = "jzxh";
                QsWebSoft.PubMethod.Updateytsjjkbh_jzxxx(jkbh, str1, jzxh, row);
            }

            content += '\n      		<CONTAINER_NO>' + jzxh + '</CONTAINER_NO>';
            var xx = dw_jzxxx.GetItemString(row, "xx");
            var xxdm = "";
            if (xx != null) {
                var str1 = "xx";
                QsWebSoft.PubMethod.Updateytsjjkbh_jzxxx(jkbh, str1, xx, row);
                xxdm = QsWebSoft.PubMethod.ReadXxdm(xx).value;
            };
            if (xxdm == null) {
                xxdm = ""
            }

            content += '\n          <CONTAINER_MODEL>' + xxdm + '</CONTAINER_MODEL>';
            var jzxzz = 0;
            if (xx != null) {
                jzxzz = QsWebSoft.PubMethod.ReadJzxzz(xx).value;

            };
            if (jzxzz == null) {
                jzxzz = 0
            }
            content += '\n          <CONTAINER_WT>' + jzxzz + '</CONTAINER_WT>';
            content += '\n      	</EP_DEC_CONTAINER_ITEM>';
        }

        content += '\n      </EP_DEC_CONTAINER_LIST>';

        var fsdz_row = dw_fsdz.RowCount();
        content += '\n      <EP_DEC_CERT_LIST COUNT="' + fsdz_row + '">';
        for (row = 1; row <= dw_fsdz.RowCount(); row++) {
            var cxh = dw_fsdz.GetItemNumber(row, "cxh");
            QsWebSoft.PubMethod.Addytsjjkbh_fsdz(jkbh, cxh);
            content += '\n      	<EP_DEC_CERT_ITEM>';
            var dzdm = dw_fsdz.GetItemString(row, "dzdm");
            if (dzdm == null) {
                dzdm == ""
            }

            if (dzdm != null) {
                var str1 = "dzdm";
                QsWebSoft.PubMethod.Updateytsjjkbh_fsdz(jkbh, str1, dzdm, row);
            }

            content += '\n      		<DOCU_CODE>' + dzdm + '</DOCU_CODE>';
            var dzbh = dw_fsdz.GetItemString(row, "dzbh");
            dzbh = self.Replace_tszf(dzbh);
            if (dzbh == null) {
                dzbh == ""
            }

            if (dzbh != null) {
                var str1 = "dzbh";
                QsWebSoft.PubMethod.Updateytsjjkbh_fsdz(jkbh, str1, dzbh, row);
            }

            content += '\n          <CERT_CODE>' + dzbh + '</CERT_CODE>';
            content += '\n      	</EP_DEC_CERT_ITEM>';
        }
        content += '\n      </EP_DEC_CERT_LIST>';


        content += '\n    </EP_DEC_ROOT>';
        content += '\n  </Message_Body>';
        content += '\n</Message_Data>';

        if (content == null) {
            requestor.MessageBox("提示", "数据不全，无法生成文件！")
        } else {
            if (self.Save() == 1) {
                QsWebSoft.PubMethod.WriteYtjkXml(content, "E:\\XML\\", fileFullPath);
                QsWebSoft.PubMethod.UploadYTJK(fileFullPath, "send/");
                QsWebSoft.PubMethod.UploadYTJK(fileFullPath, "tmp/");
                requestor.MessageBox("提示", "文件<" + fileFullPath + ">已经生成完成！")

            }

            var wjm = "EMVS_370_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC"
            var ftpdz = ""
        }
    }
}



 