///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzRjjkEdit() {

    var self = this;
    var requestor = new PBWindow();
    var dw_sjsfdj = new DataWindow(requestor);
    var dw_zsbh = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var tab_1 = new TabControl(requestor);
    var dw_jzxxx = new DataWindow(requestor);
    var dw_spxx = new DataWindow(requestor);
    var dw_sjbzcl = new DataWindow(requestor);
    var dw_sjzs = new DataWindow(requestor);
    var dw_spdhsr = new DataWindow(requestor);
    var dw_zzxx = new DataWindow(requestor);
    var dw_fsdz = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ContextMenuStrip2 = new ContextMenu(requestor);
    var ContextMenuStrip3 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_jzxxx = new DataStore(requestor);
    var ds_spxx = new DataStore(requestor);
    var ds_sjzsbh = new DataStore(requestor);
    var ds_sjsfdj = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_sjsfdj == null) dw_sjsfdj = new DataWindow(requestor);
        dw_sjsfdj.Attach(win.Control("dw_sjsfdj"));
        if (dw_zsbh == null) dw_zsbh = new DataWindow(requestor);
        dw_zsbh.Attach(win.Control("dw_zsbh"));
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
        if (dw_sjbzcl == null) dw_sjbzcl = new DataWindow(requestor);
        dw_sjbzcl.Attach(win.Control("dw_sjbzcl"));
        if (dw_sjzs == null) dw_sjzs = new DataWindow(requestor);
        dw_sjzs.Attach(win.Control("dw_sjzs"));
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
        if (ds_sjzsbh == null) ds_sjzsbh = new DataStore(requestor);
        ds_sjzsbh.Attach(win.Control("ds_sjzsbh"));
        if (ds_sjsfdj == null) ds_sjsfdj = new DataStore(requestor);
        ds_sjsfdj.Attach(win.Control("ds_sjsfdj"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_sjsfdj_ItemChanged) == "function")
            win.AttachEvent("dw_sjsfdj", "ItemChanged", self.dw_sjsfdj_ItemChanged);

        if (typeof (self.dw_zsbh_ItemChanged) == "function")
            win.AttachEvent("dw_zsbh", "ItemChanged", self.dw_zsbh_ItemChanged);

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

        if (typeof (self.Rjsjfs) == "function")
            win.AttachEvent("btn_1", "Clicked", self.Rjsjfs);

        if (typeof (self.Xsjfs) == "function")
            win.AttachEvent("btn_xsjfs", "Clicked", self.Xsjfs);

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

        if (typeof (self.dw_spxx_RowFocusChanged) == "function")
            win.AttachEvent("dw_spxx", "RowFocusChanged", self.dw_spxx_RowFocusChanged);

        if (typeof (self.dw_Sjbzcl_GetFocus) == "function")
            win.AttachEvent("dw_sjbzcl", "GetFocus", self.dw_Sjbzcl_GetFocus);

        if (typeof (self.dw_Sjzs_GetFocus) == "function")
            win.AttachEvent("dw_sjzs", "GetFocus", self.dw_Sjzs_GetFocus);

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

        dw_sjsfdj.Detach(); dw_sjsfdj = null;
        dw_zsbh.Detach(); dw_zsbh = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        tab_1.Detach(); tab_1 = null;
        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_spxx.Detach(); dw_spxx = null;
        dw_sjbzcl.Detach(); dw_sjbzcl = null;
        dw_sjzs.Detach(); dw_sjzs = null;
        dw_spdhsr.Detach(); dw_spdhsr = null;
        dw_zzxx.Detach(); dw_zzxx = null;
        dw_fsdz.Detach(); dw_fsdz = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        ContextMenuStrip3.Detach(); ContextMenuStrip3 = null;
        ds_1.Detach(); ds_1 = null;
        ds_jzxxx.Detach(); ds_jzxxx = null;
        ds_spxx.Detach(); ds_spxx = null;
        ds_sjzsbh.Detach(); ds_sjzsbh = null;
        ds_sjsfdj.Detach(); ds_sjsfdj = null;
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
    var il_sp_id = 0;
    var ib_zs = true;
    var ib_bzcl = true;
    var ib_zsbh = true;
    var ib_sjsfdj = true;
 
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/HddzRjjk.ashx");

    
    
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
            dw_sjzs.Modify("DataWindow.Readonly=no");
            dw_sjbzcl.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_spxx.Modify("DataWindow.Readonly=yes");
            dw_zzxx.Modify("DataWindow.Readonly=yes");
            dw_fsdz.Modify("DataWindow.Readonly=yes");
            dw_sjzs.Modify("DataWindow.Readonly=yes");
            dw_sjbzcl.Modify("DataWindow.Readonly=yes");
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
    this.dw_Sjzs_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_Sjbzcl_GetFocus = function (sender) {
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
        dw_sjzs.AcceptText();
        dw_sjbzcl.AcceptText();
        dw_zsbh.AcceptText();
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_zzxx.DeletedCount() + dw_zzxx.ModifiedCount() + dw_fsdz.DeletedCount() + dw_fsdz.ModifiedCount() + dw_sjzs.DeletedCount() + dw_sjzs.ModifiedCount() + dw_sjbzcl.DeletedCount() + dw_sjbzcl.ModifiedCount() + dw_zsbh.DeletedCount() + dw_zsbh.ModifiedCount()) > 0) {
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

        if (dw_sjzs.AcceptText() != 1)
            return;

        if (dw_sjbzcl.AcceptText() != 1)
            return;

        if (dw_zsbh.AcceptText() != 1)
            return;

        if (dw_sjsfdj.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_zzxx.ModifiedCount() + dw_zzxx.DeletedCount() + dw_fsdz.ModifiedCount() + dw_fsdz.DeletedCount() + dw_sjzs.ModifiedCount() + dw_sjzs.DeletedCount() + dw_sjbzcl.ModifiedCount() + dw_sjbzcl.DeletedCount() + dw_zsbh.ModifiedCount() + dw_zsbh.DeletedCount() + dw_sjsfdj.ModifiedCount() + dw_sjsfdj.DeletedCount()) <= 0) {
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

//            var sfysx = dw_spxx.GetItemString(row, "sfysx")
//            if (sfysx == "Y") {
//                var spsx = dw_spxx.GetItemString(row, "spsx")
//                if (spsx == null || spsx == "") {
//                    requestor.MessageBox("提示", "第" + row + "行商品的制作或则保存方法必须输入！")
//                    return;
//                }
//            };

//            var sfypz = dw_spxx.GetItemString(row, "sfypz")
//            if (sfypz == "Y") {
//                var sppz = dw_spxx.GetItemString(row, "sppz")
//                if (sppz == null || sppz == "") {
//                    requestor.MessageBox("提示", "第" + row + "行商品的种类必须输入！")
//                    return;
//                }
//            };

//            var sfydj = dw_spxx.GetItemString(row, "sfydj")

//            if (sfydj == "Y") {
//                var spdj = dw_spxx.GetItemString(row, "spdj")

//                if (spdj == null || spdj == "") {
//                    requestor.MessageBox("提示", "第" + row + "行商品的等级必须输入！")
//                    return;
//                }
//            };

//            var sfypp = dw_spxx.GetItemString(row, "sfypp")
//            if (sfypp == "Y") {
//                var sppp = dw_spxx.GetItemString(row, "sppp")
//                if (sppp == null || sppp == "") {
//                    requestor.MessageBox("提示", "第" + row + "行商品的品牌必须输入！")
//                    return;
//                }
//            };

//            var sfygg = dw_spxx.GetItemString(row, "sfygg")
//            if (sfygg == "Y") {
//                var spgg = dw_spxx.GetItemString(row, "spgg")
//                if (spgg == null || spgg == "") {
//                    requestor.MessageBox("提示", "第" + row + "行商品的规格必须输入！")
//                    return;
//                }
//            };

//            var sfyqt = dw_spxx.GetItemString(row, "sfyqt")
//            if (sfyqt == "Y") {
//                var spqtys = dw_spxx.GetItemString(row, "spqtys")
//                if (spqtys == null || spqtys == "") {
//                    requestor.MessageBox("提示", "第" + row + "行商品的其他要素必须输入！")
//                    return;
//                }
//            };


        }


        if (dw_spxx.RowCount() > 0) {
            var hz_sl = dw_spxx.GetItemNumber(1, "jlsl_sum");
            dw_master.SetItem(1, "hz_sl", hz_sl)
        }
                

        for (row = dw_fsdz.RowCount(); row > 0; row--) {
            dw_fsdz.SetItem(row, "cxh", row);
            dw_fsdz.SetItem(row, "ywbh", ywbh);
        }

        for (row = dw_sjsfdj.RowCount(); row > 0; row--) {
            dw_sjsfdj.SetItem(row, "cxh", row);
            dw_sjsfdj.SetItem(row, "ywbh", ywbh);
        }

        dw_sjzs.SetFilter("")
        dw_sjzs.Filter()

        for (row = dw_sjzs.RowCount(); row > 0; row--) {
            dw_sjzs.SetItem(row, "cxh", row);
            dw_sjzs.SetItem(row, "ywbh", ywbh);
        }

        dw_sjzs.Hide()
        ib_zsbh = false;

        dw_sjbzcl.SetFilter("")
        dw_sjbzcl.Filter()

        for (row = dw_sjbzcl.RowCount(); row > 0; row--) {
            dw_sjbzcl.SetItem(row, "cxh", row);
            dw_sjbzcl.SetItem(row, "ywbh", ywbh);
        }

        dw_sjbzcl.Hide()
        ib_bzcl = false;

        for (row = dw_zsbh.RowCount(); row > 0; row--) {
            dw_zsbh.SetItem(row, "cxh", row);
            dw_zsbh.SetItem(row, "ywbh", ywbh);
        }

        dw_zsbh.Hide()
        ib_zs = false;

        for (row = dw_sjsfdj.RowCount(); row > 0; row--) {
            dw_sjsfdj.SetItem(row, "cxh", row);
            dw_sjsfdj.SetItem(row, "ywbh", ywbh);
        }

        dw_sjsfdj.Hide()
        ib_sjsfdj = false;

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
        var dw_sjzs_data = dw_sjzs.GetChanges();
        var dw_sjbzcl_data = dw_sjbzcl.GetChanges();
        var dw_zsbh_data = dw_zsbh.GetChanges();
        var dw_sjsfdj_data = dw_sjsfdj.GetChanges();
        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_spxx_data == "" && dw_zzxx_data == "" && dw_fsdz_data == "" && dw_sjzs_data == "" && dw_sjbzcl_data == "" && dw_zsbh_data == "" && dw_sjsfdj_data == "")
            return;
        //执行保存的WebService

        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_spxx=" + dw_spxx_data + "&dw_zzxx=" + dw_zzxx_data + "&dw_fsdz=" + dw_fsdz_data + "&dw_sjzs=" + dw_sjzs_data + "&dw_sjbzcl=" + dw_sjbzcl_data + "&dw_zsbh=" + dw_zsbh_data + "&dw_sjsfdj=" + dw_sjsfdj_data + "&ywbh=" + ywbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            ywbh = webReq.ResponseText();
            dw_master.SetItem(1, "ywbh", ywbh);

            var hth = dw_master.GetItemString(1, "hth")
            if (hth == "" || hth == null) {
                dw_master.SetItem(1, "hth", ywbh)
            };

             

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


            for (row = 1; row <= dw_sjzs.RowCount(); row++) {
                dw_sjzs.SetItem(row, "ywbh", ywbh);
                dw_sjzs.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_sjbzcl.RowCount(); row++) {
                dw_sjbzcl.SetItem(row, "ywbh", ywbh);
                dw_sjbzcl.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_zsbh.RowCount(); row++) {
                dw_zsbh.SetItem(row, "ywbh", ywbh);
                dw_zsbh.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_sjsfdj.RowCount(); row++) {
                dw_sjsfdj.SetItem(row, "ywbh", ywbh);
                dw_sjsfdj.SetItem(row, "cxh", row);
            }


            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_spxx.ResetUpdate();
            dw_zzxx.ResetUpdate();
            dw_fsdz.ResetUpdate();
            dw_sjzs.ResetUpdate();
            dw_sjbzcl.ResetUpdate();
            dw_zsbh.ResetUpdate();
            dw_sjsfdj.ResetUpdate();
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
                if (lastdw.GetName() == "dw_sjzs") {                    
                    var row = dw_sjzs.InsertRow(dw_sjzs.GetRow());
                    dw_sjzs.SetItem(row, "sp_id", il_sp_id)
                    dw_sjzs.ScrollToRow(row);
                    dw_sjzs.SetFocus();
                }

                if (lastdw.GetName() == "dw_sjbzcl") {
                    var row = dw_sjbzcl.InsertRow(dw_sjbzcl.GetRow());
                    dw_sjbzcl.SetItem(row, "sp_id", il_sp_id)
                    dw_sjbzcl.ScrollToRow(row);
                    dw_sjbzcl.SetFocus();
                }


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

        if (lastdw.GetName() == "dw_sjzs") {

            var row = dw_sjzs.InsertRow(0);
            dw_sjzs.SetItem(row, "sp_id", il_sp_id)
            dw_sjzs.ScrollToRow(row);
            dw_sjzs.SetFocus();
        }

        if (lastdw.GetName() == "dw_sjbzcl") {

            var row = dw_sjbzcl.InsertRow(0);
            dw_sjbzcl.SetItem(row, "sp_id", il_sp_id)
            dw_sjbzcl.ScrollToRow(row);
            dw_sjbzcl.SetFocus();
        }


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

        if (lastdw.GetName() == "dw_sjzs") {
            var row = lastdw.GetRow();
            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            lastdw.DeleteRow(row);
        }

        if (lastdw.GetName() == "dw_sjbzcl") {
            var row = lastdw.GetRow();
            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            lastdw.DeleteRow(row);
        }


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
         if (lastdw.GetName() == 'dw_sjzs') {
        var row = dw_sjzs.GetRow();
            if (row <= 0)
                return;
            dw_sjzs.RowsCopy(row, row, DWBUFFER.Primary, dw_sjzs, row + 1, DWBUFFER.Primary)
            dw_sjzs.ScrollToRow(row + 1);
        }

        if (lastdw.GetName() == 'dw_sjbzcl') {
            var row = dw_sjbzcl.GetRow();
            if (row <= 0)
                return;
            dw_sjbzcl.RowsCopy(row, row, DWBUFFER.Primary, dw_sjbzcl, row + 1, DWBUFFER.Primary)
            dw_sjbzcl.ScrollToRow(row + 1);
        }


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

//        if (dwoName == "qiyunguo_t") {
//            if (iw_Country_Select == null)
//                iw_Country_Select = new W_Country_Select();
//            iw_Country_Select.SetDataWindow(dw_master);
//            iw_Country_Select.SetData("qiyunguo");
//            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
//            dw_master.SetFocus();

//        }


       

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
        if (dwoName == "b_zsbh") {
           if (ib_zsbh) {
                dw_zsbh.Show(); 
                ib_zsbh = false;
            }
            else {
                dw_zsbh.Hide()
                ib_zsbh = true;
            }

        }
        if (dwoName == "b_sjsfdj") {
            if (ib_sjsfdj) {
                dw_sjsfdj.Show();
                ib_sjsfdj = false;
            }
            else {
                dw_sjsfdj.Hide()
                ib_sjsfdj = true;
            }

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



    //#region dw_fsdz_Clicked
    this.dw_fsdz_Clicked = function (xPos, yPos, Row, dwoName) {   
        dw_fsdz.SetFocus();
    }
    //#endregion

    //#region dw_sjzs_Clicked
    this.dw_sjzs_Clicked = function (xPos, yPos, Row, dwoName) {
        dw_sjzs.SetFocus();
    }
    //#endregion

    //#region dw_sjbzcl_Clicked
    this.dw_sjbzcl_Clicked = function (xPos, yPos, Row, dwoName) {
        dw_sjbzcl.SetFocus();
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
        il_sp_id = dw_spxx.GetItemNumber(Row, "sp_id");
        if (dwoName == "b_zs") {
            if (ib_zs) {
                dw_sjzs.Show();
                ib_zs = false;

            }
            else {
                dw_sjzs.Hide()
                ib_zs = true;
            }
            ib_bzcl = true;
            dw_sjbzcl.Hide();
        }

        if (dwoName == "b_bzcl") {
            if (ib_bzcl) {
                dw_sjbzcl.Show();
                ib_bzcl = false;
            }
            else {
                dw_sjbzcl.Hide()
                ib_bzcl = true;
            }
            ib_zs = true;
            dw_sjzs.Hide();
        }

    };
    //#endregion

     //#region dw_spxx_Clicked
    this.dw_spxx_RowFocusChanged = function (Row) {
        il_sp_id = dw_spxx.GetItemNumber(Row, "sp_id");
        dw_sjzs.SetFilter("sp_id = " + il_sp_id)
        dw_sjzs.Filter()
        dw_sjbzcl.SetFilter("sp_id = " + il_sp_id)
        dw_sjbzcl.Filter()
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


    //#region dw_zsbh ItemChanged
    this.dw_zsbh_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "sfxz") {
            var zsbh_sum = "";
            var zsmc_sum = "";
            for (row1 = 1; row1 <= dw_zsbh.RowCount(); row1++) {
                var sfxz = dw_zsbh.GetItemString(row1, "sfxz")
                if ((sfxz == "Y" && row != row1) || (row == row1 && data == "Y")) {
                    var zsbh = dw_zsbh.GetItemString(row1, "zsbh")
                    var zsmc = dw_zsbh.GetItemString(row1, "zsmc")
                    if (zsbh_sum == "") {
                        zsbh_sum = zsbh;
                        zsmc_sum = zsmc;
                    } else {
                        zsbh_sum = zsbh_sum + "," + zsbh
                        zsmc_sum = zsmc_sum + "," + zsmc
                    }
                }
            }
            dw_master.SetItem(1, "zsbh", zsbh_sum)
            dw_master.SetItem(1, "zsmc", zsmc_sum)

        }

    }
    //#endregion


    //#region dw_sjsfdj ItemChanged
    this.dw_sjsfdj_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "sfxz") {
            var sfdj = "";
            var sfdjbm = ""
            for (row1 = 1; row1 <= dw_sjsfdj.RowCount(); row1++) {
                var sfxz = dw_sjsfdj.GetItemString(row1, "sfxz")
                if ((sfxz == "Y" && row != row1) || (row == row1 && data == "Y")) {
                    var sfdjbh = dw_sjsfdj.GetItemString(row1, "sfdjbh")
                    var sfdjmc = dw_sjsfdj.GetItemString(row1, "sfdjmc")
                    if (sfdjbh == null) {
                        sfdjbh = "";
                    }  
                     sfdjbm = sfdjbm + sfdjbh
                    
                    if (sfdj == "") {
                        sfdj = sfdjmc;
                    } else {
                        sfdj = sfdj + ',' + sfdjmc
                    }


                }
            }
            dw_master.SetItem(1, "sfdjbm", sfdjbm)
            dw_master.SetItem(1, "sfdj", sfdj)
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

    //#region 恢复默认列
    this.Recover_sjdz = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit_spxx_sjdz");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_sjbzcl = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit_spxx_sjbzcl");
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

    //#region 获得字段焦点
    this.RbuttonDown_sjdz = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_sjbzcl = function (dwo, xPos, yPos, Row, dwoName) {
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
        zfc = zfc.replace("&", "&amp;")
        zfc = zfc.replace("<", "&lt;")
        zfc = zfc.replace(">", "&gt;")
        zfc = zfc.replace(">", "&gt;")
        zfc = zfc.replace("'", "&apos;")
        zfc = zfc.replace('"', "&quot;")
        zfc = zfc.replace(" & ", " &amp; ")
        return zfc;
    }
    //#endregion

    //#region 替换鲜字符
    this.Replace_fresh = function (zfc) {
        if (zfc == null) {
            return zfc;
        }
        zfc = zfc.replace("鲜", "")
        zfc = zfc.replace("fresh ", "")
        zfc = zfc.replace("FRESH ", "")
        zfc = zfc.replace("Fresh ", "") 
        return zfc;
    }
    //#endregion

    //数据导出
    this.Rjsjfs = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh")

        var date_rjjkfssj = new Date();
        dw_master.SetItem(1, "rjjkfssj", date_rjjkfssj.getVarDate());
        var rjjkfscs = dw_master.GetItemNumber(1, "rjjkfscs");
        if (rjjkfscs == null || rjjkfscs == 0) {
            rjjkfscs = 1
        } else {
            rjjkfscs = rjjkfscs + 1
        }
        dw_master.SetItem(1, "rjjkfscs", rjjkfscs);


        var filename = ywbh + ".xml";
        var fileFullPath = "D:\\RJJK\\" + ywbh + ".xml";

        var content = '<?xml version="1.0" encoding="gb2312"?>';
        content += '\r\n<DecMessage>';
        content += '\r\n  <DecHead>';
        content += '\r\n    <GoodsCustomsId/>';
        content += '\r\n    <DecUuid/>';
        content += '\r\n    <CclNo/>';


        var jydwtyxydm = dw_master.GetItemString( 1, "jydwtyxydm" );
        if ( jydwtyxydm == null )
        {
            jydwtyxydm = "";
        } 
        content += '\r\n    <AgentCode>' + jydwtyxydm + '</AgentCode>';

        var jydwmc = dw_master.GetItemString( 1, "jydwmc" );
        if ( jydwmc == null )
        {
            jydwmc = "";
        }
        content += '\r\n    <AgentName>' + jydwmc + '</AgentName>';


        var date = new Date;
        var nf = date.getYear().toString();
        var yf = date.getMonth() + 1;
        if ( yf < 10 )
        {
            yf = "0" + yf;
        };
        var rq = date.getDate();
        if ( rq < 10 )
        {
            rq = "0" + rq;
        };
        var hh = date.getHours();
        if ( hh < 10 )
        {
            hh = "0" + hh;
        };
        var mm = date.getMinutes();
        if ( mm < 10 )
        {
            mm = "0" + mm;
        };
        var ss = date.getSeconds();
        if ( ss < 10 )
        {
            ss = "0" + ss;
        };

        var sbrq = nf.toString() + '-' + yf.toString() + '-' + rq.toString() + ' ' + hh.toString() + ':' + mm.toString() + ':' + ss.toString()
        content += '\r\n   <CusDeclDate>' + sbrq + '   </CusDeclDate>';
        content += '\r\n    <ApprNo/>';
        content += '\r\n    <SeqNo/>';
        content += '\r\n    <QcPassId/>';
        content += '\r\n    <DeclNo/>';
        content += '\r\n    <IEFlag>I</IEFlag>';
        content += '\r\n    <ApplyTypeCode/>';
        content += '\r\n    <Type/>';
        var ztdh = dw_master.GetItemString( 1, "ztdh" );
        if ( ztdh == null )
        {
            ztdh = "";
        }
        content += '\r\n    <BillNo/>' + ztdh + '<BillNo/>';
        var ywbh = dw_master.GetItemString( 1, "ywbh" );
        if ( ywbh == null )
        {
            ywbh = "";
        }
        content += '\r\n    <ContrNo>' + ywbh + '</ContrNo>';
        content += '\r\n    <CopCode/>';
        content += '\r\n    <CopName/>';
        var decl_port = dw_dzxx.GetItemString( 1, "jcka" )
        if ( decl_port == null )
        {
            decl_port = ""
        }
        content += '\r\n    <CustomMaster>' + decl_port + '</CustomMaster>';

        var zmfs = dw_dzxx.GetItemString( 1, "zmfs" )
        if ( zmfs == null )
        {
            zmfs = ""
        }
        content += '\r\n    <CutMode>' + decl_port + '</CutMode>';

        var hggkdm2018 = dw_dzxx.GetItemString( 1, "hggkdm2018" )
        if ( hggkdm2018 == null )
        {
            hggkdm2018 = ""
        }
        content += '\r\n    < DistinatePort>' + hggkdm2018 + '</DistinatePort>';

        var kpbz = dw_dzxx.GetItemString( 1, "kpbz" )
        if ( kpbz == null )
        {
            kpbz = ""
        }
        content += '\r\n    <FeeCurr>' + kpbz + '</FeeCurr>';
        var yfbj = dw_dzxx.GetItemString( 1, "yfbj" )
        if ( yfbj == null )
        {
            yfbj = ""
        }
        content += '\r\n    <FeeMark>' + yfbj + '</FeeMark>';

        var kpje = dw_dzxx.GetItemNumber( 1, "kpje" )
        if ( kpje == null )
        {
            kpje = 0
        }
        content += '\r\n    <FeeRate/>' + kpje.toString() + '</FeeRate>';

        var zmz = dw_dzxx.GetItemNumber( 1, "zmz" )
        if ( zmz == null  )
        {
            zmz = 0
        }
        content += '\r\n    <GrossWet>' + zmz.toString() + '</GrossWet>';
      
         
        content += '\r\n    <IEDate/>' + sbrq + '</IEDate>';

        var xrjrjkadm = dw_dzxx.GetItemString( 1, "xrjrjkadm" )
        if ( xrjrjkadm == null )
        {
            xrjrjkadm = 0
        }
        content += '\r\n    <IEPort>' + xrjrjkadm + '</IEPort>';

        var bxfbb = dw_dzxx.GetItemString( 1, "bxfbb" )
        if ( bxfbb == null )
        {
            bxfbb = ""
        }
        content += '\r\n    <InsurCurr>' + bxfbb + '</InsurCurr>';

        var bxfbj = dw_dzxx.GetItemString( 1, "bxfbj" )
        if ( bxfbj == null )
        {
            bxfbj = ""
        }
        content += '\r\n    <InsurMark>' + bxfbj + '</InsurMark>';

        var bxfje = dw_dzxx.GetItemNumber( 1, "bxfje" )
        if ( bxfje == null )
        {
            bxfje = 0
        }
        content += '\r\n    <InsurRate>' + bxfje.toString() + '</InsurRate>';
        content += '\r\n    <LicenseNo/>';
        content += '\r\n    <ManualNo/>';
        var zjz = dw_dzxx.GetItemNumber( 1, "zjz" )
        if ( zjz == null )
        {
            zjz = 0
        }
        content += '\r\n    < NetWt>' + zjz.toString() + '</NetWt>';
        content += '\r\n    < NoteS/>';
        content += '\r\n    < OtherCurr/>';
        content += '\r\n    < OtherMark/>';
        var zf = dw_dzxx.GetItemNumber( 1, "zf" )
        if ( zf == null )
        {
            zf = 0
        }
        content += '\r\n    <OtherRate/>' + zf.toString() + '</OtherRate>';


        var shdwtyxydm = dw_dzxx.GetItemString( 1, "shdwtyxydm" )
        if ( shdwtyxydm == null )
        {
            shdwtyxydm = ""
        }
        content += '\r\n    <OwnerCode>' + shdwtyxydm + '</OwnerCode>';
        var shdwmc = dw_dzxx.GetItemString( 1, "shdwmc" )
        if ( shdwmc == null )
        {
            shdwmc = ""
        }
        content += '\r\n    < OwnerName>' + shdwmc + '</OwnerName>';

        var zxs = dw_dzxx.GetItemNumber( 1, "zxs" )
        if ( zxs == null )
        {
            zxs = 0
        }
        content += '\r\n    <PackNo/>' + zxs.toString() + '</PackNo>';

        var qiyunguo = dw_dzxx.GetItemString( 1, "qiyunguo" )
        if ( qiyunguo == null )
        {
            qiyunguo = 0
        }
        content += '\r\n    <TradeCountry>' + qiyunguo + '</TradeCountry>';

     
        var myfs = dw_dzxx.GetItemString( 1, "myfs" )
        if ( myfs == null )
        {
            myfs = 0
        }
        content += '\r\n    <TradeMode>' + myfs + '</TradeMode>';

        var ysfs = dw_dzxx.GetItemString( 1, "ysfs" )
        if ( ysfs == null )
        {
            ysfs = 0
        }
        content += '\r\n    <TrafMode>' + ysfs + '</TrafMode>';

        var cm_jsl = dw_dzxx.GetItemString( 1, "cm_jsl" )
        if ( cm_jsl == null )
        {
            cm_jsl = 0
        }
        content += '\r\n    <TrafName>' + cm_jsl + '</TrafName>';


        var jgfs = dw_dzxx.GetItemString( 1, "jgfs" )
        if ( jgfs == null )
        {
            jgfs = 0
        }
        content += '\r\n    <TransMode>' + jgfs + '</TransMode>';

        var bzzl = dw_dzxx.GetItemString( 1, "bzzl" )
        if ( bzzl == null )
        {
            bzzl = 0
        }
        content += '\r\n    <WrapType>' + bzzl + '</WrapType>';

        var bgdh = dw_dzxx.GetItemString( 1, "bgdh" )
        if ( bgdh == null )
        {
            bgdh = 0
        }
        content += '\r\n    <EntryId>' + bgdh + '</EntryId>';
        content += '\r\n    <PreEntryId/>' ;
        content += '\r\n    <EdiId>1</EdiId>';
        content += '\r\n    <Risk/>';

        var dzlx = dw_dzxx.GetItemString( 1, "dzlx" )
        if ( dzlx == null )
        {
            dzlx = 0
        }
        content += '\r\n    <EntryType>' + dzlx + '</EntryType>';
        content += '\r\n    <PDate/>';
        content += '\r\n    <TypistNo/>';
        content += '\r\n    <InputerName/>';
        content += '\r\n    <PartenerID/>';
        content += '\r\n    <TgdNo/>';
        content += '\r\n    <DeclTrnRel>0</DeclTrnRel>';
        content += '\r\n    <ChkSurety/>';
        content += '\r\n    <BillType>1</BillType>';
        content += '\r\n    <CopCodeScc/>';
        content += '\r\n    <PromiseItmes/>';
        var ycddm_new = dw_dzxx.GetItemString( 1, "ycddm_new" )
        if ( ycddm_new == null )
        {
            ycddm_new = 0
        }
        content += '\r\n    <TradeAreaCode>' + ycddm_new + '</TradeAreaCode>';

        var mt = dw_dzxx.GetItemString( 1, "mt" )
        if ( mt == null )
        {
            mt = 0
        }
        content += '\r\n    <MarkNo>' + mt + '</MarkNo>';

        var mt = dw_dzxx.GetItemString( 1, "mt" )
        if ( mt == null )
        {
            mt = 0
        }
        content += '\r\n    <MarkNo>' + mt + '</MarkNo>';
     

        var hggkdm2018 = dw_master.GetItemString( 1, "hggkdm2018" )
        if ( hggkdm2018 == null )
        {
            hggkdm2018 = "";
        }

        content += '\r\n    <DespPortCode>' + hggkdm2018 + '</DespPortCode>';


        var xrjrjkadm = dw_master.GetItemString( 1, "xrjrjkadm" )
        if ( xrjrjkadm == null )
        {
            xrjrjkadm = "";
        }

        content += '\r\n    <EntyPortCode>' + xrjrjkadm + '</EntyPortCode>';


        var hwcfd = dw_master.GetItemString( 1, "hwcfd" )
        if ( hwcfd == null )
        {
            hwcfd = "";
        }

        content += '\r\n    <GoodsPlace>' + hwcfd + '</GoodsPlace>';

        var ztdh = dw_master.GetItemString( 1, "ztdh" )
        if ( ztdh == null )
        {
            ztdh = "";
        }

        content += '\r\n    <BLNo>' + ztdh + '</BLNo>';


        var kajyjyjg = dw_master.GetItemString( 1, "kajyjyjg" )
        if ( kajyjyjg == null )
        {
            kajyjyjg = "";
        }

        content += '\r\n    <InspOrgCode>' + kajyjyjg + '</InspOrgCode>';

        content += '\r\n    <SpecDeclFlag/>';

        var mddjyjyjg = dw_master.GetItemString( 1, "mddjyjyjg" )
        if ( mddjyjyjg == null )
        {
            mddjyjyjg = "";
        }

        content += '\r\n    <PurpOrgCode>' + mddjyjyjg + '</PurpOrgCode>';

        var zcrq_jsl = dw_master.GetItemString( 1, "zcrq_jsl" )
        if ( zcrq_jsl == null )
        {
            zcrq_jsl = "";
        }

        content += '\r\n    <DespDate>' + zcrq_jsl + '</DespDate>';
        content += '\r\n    <CmplDschrgDt/>';
        content += '\r\n    <CorrelationReasonFlag/>';

        var lzjg = dw_master.GetItemString( 1, "lzjg" )
        if ( lzjg == null )
        {
            lzjg = "";
        }  
        content += '\r\n    <VsaOrgCode>' + lzjg + '</VsaOrgCode>';

        content += '\r\n    <OrigBoxFlag/>';
        content += '\r\n    <DeclareName/>';
        content += '\r\n    <NoOtherPack/>';

        var jyjysljg = dw_master.GetItemString( 1, "jyjysljg" )
        if ( jyjysljg == null )
        {
            jyjysljg = "";
        }
        content += '\r\n    <OrgCode>' + jyjysljg + '</OrgCode>';

        var jwgysbm = dw_master.GetItemString( 1, "jwgysbm" )
        if ( jwgysbm == null )
        {
            jwgysbm = "";
        }
        content += '\r\n    <OverseasConsignorCode>' + jwgysbm + '</OverseasConsignorCode>';

        var jwgysmc = dw_master.GetItemString( 1, "jwgysmc" )
        if ( jwgysmc == null )
        {
            jwgysmc = "";
        }
        content += '\r\n    <OverseasConsignorCname>' + jwgysmc + '</OverseasConsignorCname>';

        var jwfhrmc_yw = dw_master.GetItemString( 1, "jwfhrmc_yw" )
        if ( jwfhrmc_yw == null )
        {
            jwfhrmc_yw = "";
        }
        content += '\r\n    <OverseasConsignorEname>' + jwfhrmc_yw + '</OverseasConsignorEname>';

        var jwgysdz = dw_master.GetItemString( 1, "jwgysdz" )
        if ( jwgysdz == null )
        {
            jwgysdz = "";
        }
        content += '\r\n    <OverseasConsignorAddr>' + jwgysdz + '</OverseasConsignorAddr>';

        content += '\r\n    <OverseasConsigneeCode/>';

        content += '\r\n    <OverseasConsigneeEname/>';
        content += '\r\n    <DomesticConsigneeEname/>';
        content += '\r\n    <CorrelationNo/>';

        var sbdwdm = dw_master.GetItemString( 1, "sbdwdm" )
        if ( sbdwdm == null )
        {
            sbdwdm = "";
        }
        content += '\r\n    <AgentCodeScc>' + sbdwdm + '</AgentCodeScc>';

        var shdwdm_jsl = dw_master.GetItemString( 1, "shdwdm_jsl" )
        if ( shdwdm_jsl == null )
        {
            shdwdm_jsl = "";
        }
        content += '\r\n    <OwnerCodeScc>' + shdwdm_jsl + '</OwnerCodeScc>';

        var jydwtyxydm = dw_master.GetItemString( 1, "jydwtyxydm" )
        if ( jydwtyxydm == null )
        {
            jydwtyxydm = "";
        }
        content += '\r\n    <TradeCoScc>' + jydwtyxydm + '</TradeCoScc>';

        var jydwdm = dw_master.GetItemString( 1, "jydwdm" )
        if ( jydwdm == null )
        {
            jydwdm = "";
        }
        content += '\r\n    <TradeCode>' + jydwdm + '</TradeCode>';

        var jydwmc = dw_master.GetItemString( 1, "jydwmc" )
        if ( jydwmc == null )
        {
            jydwmc = "";
        }
        content += '\r\n    <TradeName>' + jydwmc + '</TradeName>';
        content += '\r\n    <TradeCiqCode/>';
        content += '\r\n    <OwnerCiqCode/>';
        content += '\r\n    <DeclCiqCode/>';
        content += '\r\n    </DecHead>';
        content += '\r\n    <DecLists>';
        /*以下统一取后在商品中使用*/
        var zmfs = dw_master.GetItemString( 1, "zmfs" )
        if ( zmfs == null )
        {
            zmfs = "";
        }

        var ycddm = dw_master.GetItemString( 1, "ycddm" )
        if ( ycddm == null )
        {
            ycddm = "";
        }

        var wbbb = dw_master.GetItemString( 1, "wbbb" )
        if ( wbbb == null )
        {
            wbbb = "";
        }


        for ( row = 1; row <= dw_spxx.RowCount(); row++ )
        {

            content += '\r\n    <DecList>';
            content += '\r\n    <CustomsGoodsId/>';
            content += '\r\n    <GoodsCustomsId/>';
            content += '\r\n    <ClassMark/>';
            var hgbm = dw_spxx.GetItemString( row, "hgbm_jsl" )
            if ( hgbm == null )
            {
                hgbm = "";
            }
            content += '\r\n<HS_CODE>' + hgbm + '</HS_CODE>';
            content += '\r\n    <ContrItem/>';

            var dj = dw_spxx.GetItemNumber( row, "dj" );
            if ( dj == null )
            {
                dj = 0;
            }
            content += '\r\n<DeclPrice>' + dj + '</DeclPrice>';
            content += '\r\n<DutyMode>' + zmfs + '</DutyMode>';
            content += '\r\n    <Factor/>';

            var spgg = dw_spxx.GetItemString( row, "spgg" )
            if ( spgg == null )
            {
                spgg = "";
            }
            content += '\r\n<GModel>' + spgg + '</GModel>';

            var spmc = dw_spxx.GetItemString( row, "spmc" )
            if ( spmc == null )
            {
                spmc = "";
            }
            spmc = self.Replace_tszf( spmc );
            spmc = self.Replace_fresh( spmc );
            content += '\r\n<GName>' + spmc + '</GName>';
            content += '\r\n<GNo>' + row + '</GNo>';
            content += '\r\n<OriginCountry>' + ycddm + '</OriginCountry>';
            content += '\r\n<TradeCurr>' + wbbb + '</TradeCurr>';

            var zj = dw_spxx.GetItemNumber( row, "zj" );
            if ( zj == null )
            {
                zj = 0;
            }
            content += '\r\n<DeclTotal>' + zj + '</DeclTotal>';

            var jlsl = dw_spxx.GetItemNumber( row, "jlsl" );
            if ( jlsl == null )
            {
                jlsl = 0;
            }
            content += '\r\n<GQty>' + jlsl + '</GQty>';

            var fdsl = dw_spxx.GetItemNumber( row, "fdsl" );
            if ( fdsl == null )
            {
                fdsl = 0;
            }
            content += '\r\n<FirstQty>' + fdsl + '</FirstQty>';
            content += '\r\n<SecondQty\>' ;

            var jldw = dw_spxx.GetItemString( row, "jldw" )
            if ( jldw == null )
            {
                jldw = "";
            }   
            content += '\r\n<GUnit>' + jldw + '</GUnit>';

            var fdjldw = dw_spxx.GetItemString( row, "fdjldw" )
            if ( fdjldw == null )
            {
                fdjldw = "";
            }
            content += '\r\n<FirstUnit>' + fdjldw + '</FirstUnit>';
            content += '\r\n<SecondUnit\>';
            content += '\r\n<UseTo\>';
            content += '\r\n<WorkUsd\>';
            content += '\r\n<ExgNo\>';
            content += '\r\n<ExgVersion\>';
            content += '\r\n<DestinationCountry>' + 142 + '</DestinationCountry>';
            var CIQbm = dw_spxx.GetItemString( row, "CIQbm" )
            if ( CIQbm == null )
            {
                CIQbm = "";
            }

            content += '\r\n<CiqCode>' + spmc_yw + '</CiqCode>';

            var spmc_yw = dw_spxx.GetItemString( row, "spmc_yw" )
            if ( spmc_yw == null )
            {
                spmc_yw = "";
            }
            content += '\r\n<DeclGoodsEname>' + spmc_yw + '</DeclGoodsEname>';
            content += '\r\n<OrigPlaceCode\>'

            var yt = dw_spxx.GetItemString( row, "yt" )
            if ( yt == null )
            {
                yt = "";
            }
            content += '\r\n<Purpose>' + yt + '</Purpose>';
            content += '\r\n<ProdValidDt\>'
            content += '\r\n<ProdQgp\>'
            content += '\r\n<GoodsAttr\>'
            content += '\r\n<Stuff\>'
            content += '\r\n<Uncode\>'
            content += '\r\n<DangName\>'
            content += '\r\n<DangPackType\>'
            content += '\r\n<DangPackSpec\>'
            content += '\r\n<EngManEntCnm\>'
            content += '\r\n<NoDangFlag\>'

            var mdddm = dw_spxx.GetItemString( row, "mdddm" )
            if ( mdddm == null )
            {
                mdddm = "";
            }
            content += '\r\n<DestCode>' + mdddm + '</DestCode>';

            content += '\r\n<GoodsSpec\>'
            content += '\r\n<GoodsModel\>'
            content += '\r\n<GoodsBrand\>'
            content += '\r\n<ProduceDate\>'
            content += '\r\n<ProdBatchNo\>'
            content += '\r\n<MnufctrRegNo\>'
            content += '\r\n<MnufctrRegName\>'

            var jnmdd = dw_spxx.GetItemString( row, "jnmdd" )
            if ( jnmdd == null )
            {
                jnmdd = "";
            }
            content += '\r\n<DistrictCode\>' + jnmdd + '</DistrictCode>';


            content += '\r\n<CiqName\>'
            content += '\r\n<DecGoodsLimits>'
            content += '\r\n<DecGoodsLimit>'
            content += '\r\n<LimitId\>'
            content += '\r\n<GoodsId\>'
            content += '\r\n<GoodsNo\>'
            content += '\r\n<LicTypeCode\>'
            content += '\r\n<LicenceNo\>'
            content += '\r\n<LicWrtofDetailNo\>'
            content += '\r\n<LicWrtofQty\>'
            content += '\r\n<MeasUnitCode\>'
            content += '\r\n<DecGoodsLimitVin\>'
            content += '\r\n<LimitVinId\>'
            content += '\r\n<LicenceNo\>'
            content += '\r\n<LicTypeCode\>'
            content += '\r\n<VinNo\>'
            content += '\r\n<BillLadDate\>'
            content += '\r\n<QualityQgp\>'
            content += '\r\n<MotorNo\>'
            content += '\r\n<VinCode\>'
            content += '\r\n<ChassisNo\>'
            content += '\r\n<InvoiceNum\>'
            content += '\r\n<ProdCnnm\>'
            content += '\r\n<ProdEnnm\>'
            content += '\r\n<ModelEn\>'
            content += '\r\n<PricePerUnit\>'
            content += '\r\n<InvoiceNo\>'
            content += '\r\n</DecGoodsLimitVin>'
            content += '\r\n</DecGoodsLimit>'
            content += '\r\n</DecGoodsLimits>'
            content += '\r\n</DecList>'
           
        }
         content += '\r\n</DecLists>'
        content += '\r\n<DecContainers>'
       
        for ( row = 1; row <= dw_jzxxx.RowCount(); row++ )
        {

            content += '\r\n<Container\>'
            content += '\r\n<CustContainerId\>'
            content += '\r\n<GoodsCustomsId\>'
             var jzxh = dw_spxx.GetItemString( row, "jzxh" )
            if ( jzxh == null )
            {
                jzxh = "";
            }
            content += '\r\n<ContainerId>'+jzxh+'</ContainerId>'
            var xx = dw_spxx.GetItemString( row, "xx" )
            if ( xx == null )
            {
                xx = "";
            }
            content += '\r\n<ContainerMd>'+xx+'</ContainerMd>'

            content += '\r\n<GoodsNo\>'
            content += '\r\n<LclFlag\>'

            content += '\r\n</Container>' 
            
        }

             
        content += '\r\n</DecContainers>'
        content += '\r\n<DecLicenseDocus\>'

        for ( row = 1; row <= dw_hgfsdz.RowCount(); row++ )
        {
            content += '\r\n<CustAttachId\>'
            content += '\r\n<GoodsCustomsId\>'
             var dzdm = dw_spxx.GetItemString( row, "dzdm" )
            if ( dzdm == null )
            {
                dzdm = "";
            }
            content += '\r\n<DocuCode>'+dzdm+'</DocuCode>'

             var dzbh = dw_spxx.GetItemString( row, "dzbh" )
            if ( dzbh == null )
            {
                dzbh = "";
            }
            content += '\r\n<CertCode>'+dzbh+'</CertCode>'

            content += '\r\n</LicenseDocu>'          
        }
        content += '\r\n</DecLicenseDocus>'
        content += '\r\n<DecRequestCerts>'

        for ( row = 1; row <= dw_jyjyxydz.RowCount(); row++ )
        {
            content += '\r\n<DecRequestCert>' 
            content += '\r\n<CclCertId\>'
            content += '\r\n<GoodsCustomsId\>'
            
            var zsbh = dw_spxx.GetItemString( row, "zsbh" )
            if ( zsbh == null )
            {
                zsbh = "";
            }
            content += '\r\n<AppCertCode>'+zsbh+'</AppCertCode>'

             var zbfs = dw_spxx.GetItemString( row, "zbfs" )
            if ( zbfs == null )
            {
                zbfs = "";
            }
            content += '\r\n<ApplOri>'+zbfs+'</ApplOri>'

            var fbfs = dw_spxx.GetItemString( row, "fbfs" )
            if ( fbfs == null )
            {
                fbfs = "";
            }
            content += '\r\n<ApplCopyQuan>'+fbfs+'</ApplCopyQuan>'

            content += '\r\n</DecRequestCert>'
           


          }


        content += '\r\n</DecRequestCerts>'
        content += '\r\n<DecOtherPacks>'
        for ( row = 1; row <= dw_sjbzcl.RowCount(); row++ )
        {
            content += '\r\n<DecOtherPack>'
            content += '\r\n<PackId\>'
            content += '\r\n<GoodsId\>'
            var pbzjs = dw_spxx.GetItemString( row, "pbzjs" )
            if ( pbzjs == null )
            {
                pbzjs = "";
            }
            content += '\r\n<PackQty>'+pbzjs+'</PackQty>'
             var clzl = dw_spxx.GetItemString( row, "clzl" )
            if ( clzl == null )
            {
                clzl = "";
            }
            content += '\r\n<PackType>'+clzl+'</PackType>'
            content += '\r\n</DecOtherPack>'
            
         }

        content += '\r\n</DecOtherPacks>'
        content += '\r\n<DecUsers>'             

         for ( row = 1; row <= dw_syrxx.RowCount(); row++ )
         {
            content += '\r\n<DecUser>'
            content += '\r\n<UserId\>'
            content += '\r\n<DeclId\>'
            var sydwlxr = dw_spxx.GetItemString( row, "sydwlxr" )
            if ( sydwlxr == null )
            {
                sydwlxr = "";
            }
            content += '\r\n<UseOrgPersonCode>'+sydwlxr+'</UseOrgPersonCode>'
             var sydwlxdh = dw_spxx.GetItemString( row, "sydwlxdh" )
            if ( sydwlxdh == null )
            {
                sydwlxdh = "";
            }
            content += '\r\n<UseOrgPersonTel>'+sydwlxdh+'</UseOrgPersonTel>'
            content += '\r\n</DecUser>'
          }

           content += '\r\n</DecUsers>'
           content += '\r\n<DecCopLimits>'   
          for ( row = 1; row <= dw_qyzz.RowCount(); row++ )
         {
            content += '\r\n<DecCopLimit>'
            content += '\r\n<DeclLimitId\>'
            content += '\r\n<DeclId\>'
            var qyzzbh = dw_spxx.GetItemString( row, "qyzzbh" )
            if ( qyzzbh == null )
            {
                qyzzbh = "";
            }
            content += '\r\n<EntQualifNo>'+qyzzbh+'</EntQualifNo>'
             var qyzzlbdm = dw_spxx.GetItemString( row, "qyzzlbdm" )
            if ( qyzzlbdm == null )
            {
                qyzzlbdm = "";
            }
            content += '\r\n<EntQualifTypeCode>'+qyzzlbdm+'</EntQualifTypeCode>'
             var qyzzlbmc = dw_spxx.GetItemString( row, "qyzzlbmc" )
            if ( qyzzlbmc == null )
            {
                qyzzlbmc = "";
            }
            content += '\r\n<EntQualifName>'+qyzzlbmc+'</EntQualifName>'
            content += '\r\n</DecCopLimit>'
          } 
           content += '\r\n</DecCopLimits>'
           content += '\r\n<DecCopPromises>'
           content += '\r\n<DecCopPromise>'
           content += '\r\n<CclPromiseId/>'
           content += '\r\n<GoodsCustomsId/>'
           content += '\r\n<DeclarationMaterialCode/>'
           content += '\r\n</DecCopPromise>'
           content += '\r\n</DecCopPromises>'

           content += '\r\n<EdocRealation>'
           content += '\r\n<UUID/>'
           content += '\r\n<GoodsCustomsId/>'
           content += '\r\n<EdocID/>'
           content += '\r\n<EdocCode/>'
           content += '\r\n<EdocFomatType/>'
           content += '\r\n<OpNote/>'
           content += '\r\n<EdocCopId/>'
           content += '\r\n<EdocOwnerCode/>'
           content += '\r\n<SignUnit/>'
           content += '\r\n<SignTime/>'
           content += '\r\n<EdocOwnerName/>'
           content += '\r\n<EdocSize/>'
           content += '\r\n<EdocNo/>'
           content += '\r\n<EdocCName/>'
           content += '\r\n</EdocRealation>'
           content += '\r\n<EcoRelation>'
           content += '\r\n<EcoRelaton_Id/>'
           content += '\r\n<GoodsCustomsId/>'
           content += '\r\n<CustAttachId/>'
           content += '\r\n<CertType/>'
           content += '\r\n<EcoCertNo/>'
           content += '\r\n<DecGNo/>'
           content += '\r\n<EcoGNo/>'
           content += '\r\n<ExtendFiled/>'
           content += '\r\n</EcoRelation>'
           content += '\r\n<DecMarkLobs>'
           content += '\r\n<DecMarkLob>'
           content += '\r\n<MarkId/>'
           content += '\r\n<DeclId/>'
           content += '\r\n<AttachName/>'
           content += '\r\n<AttachType/>'
           content += '\r\n<Attachment/>'
           content += '\r\n</DecMarkLob>'
           content += '\r\n</DecMarkLobs>'
           content += '\r\n<DecFreeTxt>'
           content += '\r\n<GoodsCustomsId/>'
           content += '\r\n<RelId/>'
           content += '\r\n<RelManNo/>'
           content += '\r\n<BonNo/>'
           content += '\r\n<VoyNo/>'
           content += '\r\n<DecBpNo/>'

           content += '\r\n<CusFie/>'
           content += '\r\n<DecNo/>'
           content += '\r\n</DecFreeTxt>'
           content += '\r\n<TrnHead>'
           content += '\r\n<CustTrnPreId/>'
           content += '\r\n<GoodsCustomsId/>'
           content += '\r\n<TrnPreId/>'
           content += '\r\n<TransNo/>'
           content += '\r\n<TurnNo/>'
           content += '\r\n<NativeTrafMode/>'
           content += '\r\n<TrafCustomsNo/>'
           content += '\r\n<NativeShipName/>'
           content += '\r\n<NativeVoyageNo/>'
           content += '\r\n<ContractorName/>'
           content += '\r\n<ContractorCode/>'
           content += '\r\n<TransFlag/>'
           content += '\r\n<ValidTime/>'
           content += '\r\n<ESealFlag/>'
           content += '\r\n<Notes/>'
           content += '\r\n<TrnType/>'
           content += '\r\n<ApplCodeScc/>'
           content += '\r\n</TrnHead>'
           content += '\r\n<TrnList>'
           content += '\r\n<TrnPreListId/>'
           content += '\r\n<CustTrnPreId/>'
           content += '\r\n<TrafMode/>'
           content += '\r\n<ShipId/>'
           content += '\r\n<ShipNameEn/>'
           content += '\r\n<VoyageNo/>'
           content += '\r\n<BillNo/>'
           content += '\r\n<IEDate/>'
           content += '\r\n<BillNum/>'
           content += '\r\n<ContainerNo/>'
           content += '\r\n</TrnList>'
           content += '\r\n<TrnContainers/>'
           content += '\r\n<TrnContainer>'
           content += '\r\n<TrnContainerId/>'
           content += '\r\n<CustTrnPreId/>'
           content += '\r\n<ContaNo/>'
           content += '\r\n<ContaSn/>'
           content += '\r\n<ContaModel/>'
           content += '\r\n<SealNo/>'
           content += '\r\n<TransName/>'
           content += '\r\n<TransWeight/>'
           content += '\r\n</TrnContainer>'
           content += '\r\n</TrnContainers>'
           content += '\r\n<TrnContaGoodsList>'
           content += '\r\n<TrnContaGoods>'
           content += '\r\n<TrnContaGoodsListId/>'
           content += '\r\n<CustTrnPreId/>'
           content += '\r\n<ContaNo/>'
           content += '\r\n<ContaSn/>'
           content += '\r\n<GNo/>'
           content += '\r\n<ContaGoodsCount/>'
           content += '\r\n<ContaGoodsWeight/>'
           content += '\r\n</TrnContaGoods>'
           content += '\r\n</TrnContaGoodsList>'
           content += '\r\n</DecMessage>'      

                    

        if (content == null) {
            requestor.MessageBox("提示", "数据不全，无法生成文件！")
        } else {
            //                        //            if (self.Save() == 1) {
            //                        QsWebSoft.PubMethod.WriteYtjkXml(content, "D:\\RJJK\\", fileFullPath);
            //                        requestor.MessageBox("提示", "文件<" + fileFullPath + ">已经生成完成！")

            //                        //            }

            ///////////

            if (self.Save() == 1) {
                var fso, f1, ts, s;
                var ForReading = 1;
                fso = new ActiveXObject("Scripting.FileSystemObject");
                f1 = fso.CreateTextFile(fileFullPath, true);
                f1.WriteLine(content);
                f1.Close();

                requestor.MessageBox("提示", "文件<" + fileFullPath + ">已经生成完成！")

            }

        }
    }


    this.Xsjfs = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh")

        var date_rjjkfssj = new Date();
        dw_master.SetItem(1, "rjjkfssj", date_rjjkfssj.getVarDate());
        var rjjkfscs = dw_master.GetItemNumber(1, "rjjkfscs");
        if (rjjkfscs == null || rjjkfscs == 0) {
            rjjkfscs = 1
        } else {
            rjjkfscs = rjjkfscs + 1
        }
        dw_master.SetItem(1, "rjjkfscs", rjjkfscs);


        var filename = ywbh + ".xml";
        var fileFullPath = "D:\\rjjk2\\" + ywbh + ".xml";

        //        var content = '<?xml version="1.0" encoding="utf-8" ?>';
        var content = '<?xml version="1.0" encoding="gb2312"?>';
        content += '\r\n<ROOT>';
        content += '\r\n<ITF_DCL_IO_DECL>';
        content += '\r\n<DeclId>' + ywbh + '</DeclId>';
        var Tdate = new Date();
        content += '\r\n<TransBatch>' + Tdate.getVarDate('yyyyMMddHHmmss') + '</TransBatch>';

        content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';

        content += '\r\n<EntUuid>' + ywbh + '</EntUuid>';

        content += '\r\n<TradeModeCode>11</TradeModeCode>';

        var hth = dw_master.GetItemString(1, "hth");
        if (hth == null) {
            hth = "";
        }
        hth = self.Replace_tszf(hth);
        content += '\r\n<ContractNo>' + hth + '</ContractNo>';

        var mt = dw_master.GetItemString(1, "mt");
        if (mt == null) {
            mt = "";
        }
        mt = self.Replace_tszf(mt);
        content += '\r\n<MarkNo>' + mt + '</MarkNo>';

        var ycdsjdm = dw_master.GetItemString(1, "ycdsjdm")
        if (ycdsjdm == null) {
            ycdsjdm = ""
        }

        var ycdsjdm_zjs = dw_master.GetItemString(1, "ycdsjdm_zjs")
        if (ycdsjdm_zjs == null) {
            ycdsjdm_zjs = ""
        }

        if (ycdsjdm_zjs == "") {
            content += '\r\n<TradeCountryCode>' + ycdsjdm + '</TradeCountryCode>';
        }
        else {
            content += '\r\n<TradeCountryCode>' + ycdsjdm_zjs + '</TradeCountryCode>';
        };
        var qiyunguosjdm = dw_master.GetItemString(1, "qiyunguosjdm")
        if (qiyunguosjdm == null) {
            qiyunguosjdm = ""
        }
        content += '\r\n<DespCtryCode>' + qiyunguosjdm + '</DespCtryCode>';

        var ysfs = dw_master.GetItemString(1, "ysfs")
        if (ysfs == "海运") {
            content += '\r\n<TransModeCode>1</TransModeCode>';
        } else if (ysfs == "空运") {
            content += '\r\n<TransModeCode>4</TransModeCode>';
        }


        var qygsjgkdm = dw_master.GetItemString(1, "qygsjgkdm")
        if (qygsjgkdm == null) {
            qygsjgkdm = "";
        }
        content += '\r\n<DespPortCode>' + qygsjgkdm + '</DespPortCode>';

        content += '\r\n<PortStopCode></PortStopCode>';

        var xrjjkrjkadm = dw_master.GetItemString(1, "xrjjkrjkadm")
        if (xrjjkrjkadm == null) {
            xrjjkrjkadm = "";
        }
        content += '\r\n<EntyPortCode>' + xrjjkrjkadm.toString() + '</EntyPortCode>';

        var xhgq = dw_master.GetItemString(1, "xhgqjc")
        if (xhgq == null) {
            xhgq = "";
        }
        content += '\r\n<EntyPortName>' + xhgq.toString() + '</EntyPortName>';

        var sjkgsj_jsl = dw_master.GetItemString(1, "yjkgsj_jsl")
        if (sjkgsj_jsl == null || sjkgsj_jsl == "1900/01/01") {
            requestor.MessageBox("提示", "预计靠港时间没有，请输入！")
            return
        };
        content += '\r\n<GdsArvlDate>' + sjkgsj_jsl + '</GdsArvlDate>';

        var hwcfd = dw_master.GetItemString(1, "hwcfd")
        if (hwcfd == null) {
            hwcfd = "";
        }
        hwcfd = self.Replace_tszf(hwcfd);
        content += '\r\n<GoodsPlace>' + hwcfd + '</GoodsPlace>';

        var rjmdd = dw_master.GetItemString(1, "rjmdd")
        if (rjmdd == null) {
            rjmdd = "";
        }
        content += '\r\n<DestCode>' + rjmdd + '</DestCode>';

        content += '\r\n<CounterClaim></CounterClaim>';

        var ztdh = dw_master.GetItemString(1, "ztdh")
        if (ztdh == null) {
            ztdh = "";
        }
        content += '\r\n<BillLadNo>' + ztdh.replace(/(^\s*)|(\s*$)/g, "") + '</BillLadNo>';

        content += '\r\n<DeliveryOrder>' + ztdh.replace(/(^\s*)|(\s*$)/g, "") + '</DeliveryOrder>';

        var jyjsjjgdm = dw_master.GetItemString(1, "jyjsjjgdm");
        if (jyjsjjgdm == null) {
            jyjsjjgdm = "";
        }
        var jyjmc = dw_master.GetItemString(1, "jyj_yw");
        if (jyjmc == null) {
            jyjmc = "";
        }

        var jyjsjjgdm_bjd = jyjsjjgdm;
        if (jyjsjjgdm == "310040") {
            jyjsjjgdm_bjd = "310910";
        }

        var jyjmc_bjd = jyjmc;
        if (jyjmc == "上海局龙吴办事处") {
            jyjmc_bjd = "闵行局松江办事处";
        }
        content += '\r\n<OrgCode>' + jyjsjjgdm_bjd + '</OrgCode>';
        content += '\r\n<OrgName>' + jyjmc_bjd + '</OrgName>';

        content += '\r\n<VsaOrgCode>' + jyjsjjgdm + '</VsaOrgCode>';
        content += '\r\n<VsaOrgName>' + jyjmc + '</VsaOrgName>';

        content += '\r\n<InspOrgCode>' + jyjsjjgdm + '</InspOrgCode>';
        content += '\r\n<InspOrgName>' + jyjmc + '</InspOrgName>';

        content += '\r\n<ExcInspDeptCode></ExcInspDeptCode>';
        content += '\r\n<DeclCustm>2200</DeclCustm>';
        content += '\r\n<SpecDeclFlag></SpecDeclFlag>';
        content += '\r\n<PurpOrgCode></PurpOrgCode>';

        var zs = "";
        var zb = "";
        var fb = "";
        var jkzs = "";
        for (row = 1; row <= dw_zsbh.RowCount(); row++) {
            var sfxz = dw_zsbh.GetItemString(row, "sfxz");
            if (sfxz == "Y") {
                var zsbh = dw_zsbh.GetItemString(row, "zsbh");
                var zbfs = dw_zsbh.GetItemNumber(row, "zbfs");
                var fbfs = dw_zsbh.GetItemNumber(row, "fbfs");
                var jkdm = dw_zsbh.GetItemString(row, "jkdm");
                if (zsbh != null) {
                    zs = zs + zsbh
                }
                if (zbfs != null) {
                    if (zb == "") {
                        zb = zbfs.toString();
                    } else {
                        zb = zb + "," + zbfs.toString();
                    }
                }
                if (fbfs != null) {
                    if (fb == null) {
                        fb = fbfs.toString();
                    } else {
                        fb = fb + "," + fbfs.toString();
                    }
                }
                if (jkdm != null) {
                    if (jkzs == "") {
                        jkzs = jkdm.toString();
                    } else {
                        jkzs = jkzs + "," + jkdm.toString();
                    }
                }
            }
        }
        content += '\r\n<AppCertCode>' + jkzs + '</AppCertCode>';
        content += '\r\n<ApplOri>' + zb + '</ApplOri>';
        content += '\r\n<ApplCopyQuan>' + fb + '</ApplCopyQuan>';

        content += '\r\n<CustmRegNo></CustmRegNo>';

        var bjydm = dw_master.GetItemString(1, "bjydm")
        if (bjydm == null) {
            bjydm = "";
        }
        bjydm = self.Replace_tszf(bjydm);
        content += '\r\n<DeclPersnCertNo>' + bjydm + '</DeclPersnCertNo>';

        content += '\r\n<DeclPersonName></DeclPersonName>';

        var bjgsmc = dw_master.GetItemString(1, "bjgsmc")
        if (bjgsmc == null) {
            bjgsmc = "";
        }
        bjgsmc = self.Replace_tszf(bjgsmc);
        content += '\r\n<DeclRegName>' + bjgsmc + '</DeclRegName>';

        var bjgslxr = dw_master.GetItemString(1, "bjgslxr")
        if (bjgslxr == null) {
            bjgslxr = "";
        }
        bjgslxr = self.Replace_tszf(bjgslxr);
        content += '\r\n<Contactperson>' + bjgslxr + '</Contactperson>';

        var bjgslxdh = dw_master.GetItemString(1, "bjgslxdh")
        if (bjgslxdh == null) {
            bjgslxdh = "";
        }
        bjgslxdh = self.Replace_tszf(bjgslxdh);
        content += '\r\n<ContTel>' + bjgslxdh + '</ContTel>';

        var jydwsjjgdm = dw_master.GetItemString(1, "jydwsjjgdm")
        jydwsjjgdm = self.Replace_tszf(jydwsjjgdm);
        if (jydwsjjgdm == null) {
            jydwsjjgdm = "";
        }
        content += '\r\n<ConsigneeCode>' + jydwsjjgdm + '</ConsigneeCode>';

        var jydwmc = dw_master.GetItemString(1, "jydwmc")
        if (jydwmc == null) {
            jydwmc = "";
        }
        jydwmc = self.Replace_tszf(jydwmc);
        jydwmc = jydwmc.replace("(", "（");
        jydwmc = jydwmc.replace(")", "）");
        content += '\r\n<ConsigneeCname>' + jydwmc + '</ConsigneeCname>';

        var jydwmc_yw = dw_master.GetItemString(1, "jydwmc_yw")
        if (jydwmc_yw == null) {
            jydwmc_yw = "";
        }
        jydwmc_yw = self.Replace_tszf(jydwmc_yw);
        content += '\r\n<ConsigneeEname>' + jydwmc_yw + '</ConsigneeEname>';

        content += '\r\n<ConsignorCname></ConsignorCname>';

        var bjlb = dw_master.GetItemString(1, "bjlb");
        if (bjlb == null) {
            bjlb = "";
        }
        content += '\r\n<DeclCode>' + bjlb + '</DeclCode>';



        content += '\r\n<DeclDate></DeclDate>';
        content += '\r\n<SpecPassFlag></SpecPassFlag>';

        var qyrq = dw_master.GetItemString(1, "zcrq");
        if (qyrq == null) {
            qyrq = "";
        }
        content += '\r\n<DespDate>' + qyrq + '</DespDate>';

        content += '\r\n<AttaCollectName></AttaCollectName>';
        content += '\r\n<TotalValUs></TotalValUs>';
        content += '\r\n<TotalValCn></TotalValCn>';
        content += '\r\n<ContCancelFlag></ContCancelFlag>';

        if (dw_master.GetItemString(1, "rjhwjyjyzm") == "Y") {
            content += '\r\n<AppCertName>入境货物检验检疫证明</AppCertName>';
        } else {
            content += '\r\n<AppCertName></AppCertName>';
        }



        var bjgssjjgdm = dw_master.GetItemString(1, "bjgssjjgdm");
        if (bjgssjjgdm == null) {
            bjgssjjgdm = "";
        }
        content += '\r\n<DeclRegNo>' + bjgssjjgdm + '</DeclRegNo>';

        var cm = dw_master.GetItemString(1, "cm_jsl");
        if (cm == null) {
            cm = "";
        }
        cm = self.Replace_tszf(cm);
        content += '\r\n<ConvynceName>' + cm.replace(/(^\s*)|(\s*$)/g, "") + '</ConvynceName>';

        var hcorhbh = dw_master.GetItemString(1, "hcorhbh_jsl");
        if (hcorhbh == null) {
            hcorhbh = "";
        }
        content += '\r\n<TransMeanNo>' + hcorhbh.replace(/(^\s*)|(\s*$)/g, "") + '</TransMeanNo>';
        content += '\r\n<CmplDschrgDt></CmplDschrgDt>';
        content += '\r\n<CorrelationDeclNo></CorrelationDeclNo>';
        content += '\r\n<CorrelationReasonFlag></CorrelationReasonFlag>';

        var tstk = dw_master.GetItemString(1, "tstk")
        if (tstk == null) {
            tstk = "";
        }
        tstk = self.Replace_tszf(tstk);
        //        if (dw_master.GetItemString(1, "rjhwjyjyzm") != "Y") {
        //            tstk += ",不申请出具入境货物检验检疫证明";
        //        }
        //        tstk = tstk.replace(/^,*|,*$/g, "");
        content += '\r\n<SpeclInspQuraRe>' + tstk + '</SpeclInspQuraRe>';
        content += '\r\n<ConsignorAddr></ConsignorAddr>';
        content += '\r\n<ArrivPortCode></ArrivPortCode>';
        content += '\r\n<ConsigneeAddr></ConsigneeAddr>';

        content += '\r\n<ConsignorCode></ConsignorCode>';

        content += '\r\n<SituationCode></SituationCode>';
        content += '\r\n<SituationLevel></SituationLevel>';

        var gwgysmc = dw_master.GetItemString(1, "gwgysmc")
        if (gwgysmc == null) {
            gwgysmc = "";
        }
        gwgysmc = self.Replace_tszf(gwgysmc);
        content += '\r\n<ConsignorEname>' + gwgysmc + '</ConsignorEname>';

        content += '\r\n<AplKind>I</AplKind>';
        content += '\r\n<SplitBillLadNo></SplitBillLadNo>';


        for (var row1 = 1; row1 <= dw_sjsfdj.RowCount(); row1++) {
            var sfdjmc = dw_sjsfdj.GetItemString(row1, "sfdjmc");
            if (sfdjmc == "IPPC木包装标识") {
                continue;
            }
            var sfxz = dw_sjsfdj.GetItemString(row1, "sfxz")
            var sfdjbh = "";
            var sfdjmc = "";
            if (sfxz == "Y") {
                content += '\r\n<ITF_DCL_IO_DECL_ATT>';
                content += '\r\n<DeclId>' + ywbh + '</DeclId>';
                var Tdate = new Date();
                content += '\r\n<TransBatch>' + Tdate.getVarDate('yyyyMMddHHmmss') + '</TransBatch>';
                content += '\r\n<AttId>' + row1 + '</AttId>';
                content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';

                var sfdj = "";
                sfdjbh = dw_sjsfdj.GetItemString(row1, "jkdm")
                var sfdjbm = "";
                sfdjmc = dw_sjsfdj.GetItemString(row1, "sfdjmc")
                content += '\r\n<AttDocTypeCode>' + sfdjbh + '</AttDocTypeCode>';
                var biaoshi = 0;
                for (var row = 1; row <= dw_spxx.RowCount(); row++) {
                    var bzzl = dw_spxx.GetItemString(row, "bzzl");
                    if (bzzl == "9C91") {
                        biaoshi += 1;
                    }
                }

                if (sfdjbh == "101999") {
                    if (biaoshi == 0) {
                        content += '\r\n<AttDocNo></AttDocNo>';
                    } else {
                        content += '\r\n<AttDocNo>IPPC</AttDocNo>';
                    }

                }
                content += '\r\n<AttDocName>' + sfdjmc + '</AttDocName>';
                content += '\r\n</ITF_DCL_IO_DECL_ATT>';
            }
        }

        for (var row = 1; row <= dw_spxx.RowCount(); row++) {
            content += '\r\n<ITF_DCL_IO_DECL_GOODS>';
            content += '\r\n<DeclId>' + ywbh + '</DeclId>';
            var Tdate = new Date();
            content += '\r\n<TransBatch>' + Tdate.getVarDate('yyyyMMddHHmmss') + '</TransBatch>';
            var spbm = dw_spxx.GetItemString(row, "spbm");
            spbm = spbm + row.toString();
            if (spbm == null) {
                content += '\r\n<GoodsId> </GoodsId>';
            } else {
                content += '\r\n<GoodsId>' + spbm + '</GoodsId>';
            }
            //            content += '\r\n<GoodsId></GoodsId>';
            content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';
            var cxh = dw_spxx.GetItemNumber(row, "cxh");
            if (cxh == null) {
                content += '\r\n<GoodsNo> </GoodsNo>';
            } else {
                content += '\r\n<GoodsNo>' + cxh + '</GoodsNo>';
            }
            var hgbm = dw_spxx.GetItemString(row, "hgbm_jsl")
            if (hgbm == null) {
                hgbm = "";
            }
            content += '\r\n<ProdHsCode>' + hgbm + '</ProdHsCode>';
            content += '\r\n<HsCodeDesc></HsCodeDesc>';
            content += '\r\n<InspType></InspType>';

            var CIQbm = dw_spxx.GetItemString(row, "ciqbm")
            if (CIQbm == null) {
                CIQbm = "";
            }
            content += '\r\n<CiqCode>' + CIQbm.replace(/(\r\n)+|(\r\r\n)+/g, "") + '</CiqCode>';

            var CIQmc = dw_spxx.GetItemString(row, "ciqmc")
            if (CIQmc == null) {
                CIQmc = "";
            }
            content += '\r\n<CiqName>' + CIQmc.replace(/(\r\n)+|(\r\r\n)+/g, "") + '</CiqName>';

            var spmc_jsl = dw_spxx.GetItemString(row, "spmc_jsl")
            if (spmc_jsl == null) {
                spmc_jsl = "";
            }
            spmc_jsl = spmc_jsl.replace("鲜", "");
            spmc_jsl = spmc_jsl.replace("其他", "");
            spmc_jsl = spmc_jsl.replace("其它", "");
            content += '\r\n<DeclGoodsCname>' + spmc_jsl + '</DeclGoodsCname>';

            var spmc_yw = dw_spxx.GetItemString(row, "spmc_yw")
            if (spmc_yw == null) {
                spmc_yw = "";
            }

            var ycddm = dw_master.GetItemString(1, "ycddm")
            if (ycddm == "502" && spmc_jsl == "鲜柑橘") {
                spmc_yw = "TANGELO";
            }
            spmc_yw = self.Replace_tszf(spmc_yw);
            spmc_yw = self.Replace_fresh(spmc_yw);
            content += '\r\n<DeclGoodsEname>' + spmc_yw + '</DeclGoodsEname>';
            var bzzl_zx = dw_spxx.GetItemString(row, "bzzl");
            if (bzzl_zx == null) {
                bzzl_zx = "";
            }
            var jlsl = dw_spxx.GetItemNumber(row, "jlsl");
            if (jlsl == null || bzzl_zx == "4M") {
                content += '\r\n<Qty></Qty>';
            } else {
                content += '\r\n<Qty>' + jlsl + '</Qty>';
            }
            var sjjldw = dw_spxx.GetItemString(row, "sjjldw");
            if (sjjldw == null || bzzl_zx == "4M") {
                content += '\r\n<QtyMeasUnit></QtyMeasUnit>';
            } else {
                content += '\r\n<QtyMeasUnit>' + sjjldw + '</QtyMeasUnit>';
            }
            var zjz = dw_spxx.GetItemNumber(row, "zjz");
            if (zjz == null) {
                zjz = 0;
            }
            content += '\r\n<Weight>' + zjz + '</Weight>';
            var hgjldw = dw_spxx.GetItemString(row, "hgjldw");
            var sjhgjldw = QsWebSoft.PubMethod.ReadSjhgjldm(hgjldw).value;
            if (sjhgjldw == null) {
                sjhgjldw = "";
            }
            content += '\r\n<WtMeasUnit>' + sjhgjldw + '</WtMeasUnit>';

            var unit_name = QsWebSoft.PubMethod.ReadSjunit_name(hgjldw).value;
            if (unit_name == null) {
                unit_name = "";
            }
            content += '\r\n<WtUnitName>' + unit_name + '</WtUnitName>';

            var fdsl = dw_spxx.GetItemNumber(row, "fdsl");

            if (fdsl == null) {
                content += '\r\n<StdQty></StdQty>';
            } else {
                content += '\r\n<StdQty>' + fdsl + '</StdQty>';
            }
            var zj = dw_spxx.GetItemNumber(row, "zj");
            if (zj == null) {
                zj = 0;
            }
            content += '\r\n<GoodsTotalVal>' + zj + '</GoodsTotalVal>';
            var cu_code_sj = dw_master.GetItemString(1, "cu_code_sj")
            if (cu_code_sj == null) {
                cu_code_sj = "";
            }
            //币别中商检代码
            content += '\r\n<Currency>' + cu_code_sj + '</Currency>';
            content += '\r\n<PricePerUnit></PricePerUnit>';
            content += '\r\n<GoodsSpec></GoodsSpec>';
            content += '\r\n<GoodsModel></GoodsModel>';
            content += '\r\n<GoodsBrand></GoodsBrand>';
            content += '\r\n<OriCtryCode>' + ycdsjdm + '</OriCtryCode>';
            content += '\r\n<OrigPlaceCode></OrigPlaceCode>';
            content += '\r\n<Purpose>12</Purpose>'; //用途代码;
            content += '\r\n<ProduceDate></ProduceDate>';
            content += '\r\n<ProdBatchNo></ProdBatchNo>';
            content += '\r\n<ProdValidDt></ProdValidDt>';
            content += '\r\n<ProdQgp></ProdQgp>';
            content += '\r\n<GoodsAttr>19</GoodsAttr>';
            content += '\r\n<GoodsAttrName>正常</GoodsAttrName>';
            content += '\r\n<Stuff></Stuff>';
            content += '\r\n<UnCode></UnCode>';
            content += '\r\n<DangName></DangName>';
            content += '\r\n<PackType></PackType>';
            content += '\r\n<PackSpec></PackSpec>';
            content += '\r\n<MnufctrRegNo></MnufctrRegNo>';
            content += '\r\n<By1></By1>';
            content += '\r\n<By2></By2>';
            content += '\r\n<EngManEntCnm></EngManEntCnm>';
            content += '\r\n<StdQtyUnitCode></StdQtyUnitCode>';
            content += '\r\n<StdWeight>' + zjz + '</StdWeight>';
            content += '\r\n<StdWeightUnitCode>' + sjhgjldw + '</StdWeightUnitCode>';
            content += '\r\n<StdWeightUnitName>' + unit_name + '</StdWeightUnitName>';
            content += '\r\n<MnufctrRegName></MnufctrRegName>';
            content += '\r\n<NormWerght></NormWerght>';
            content += '\r\n<WtNormWerght></WtNormWerght>';
            content += '\r\n<NoDangFlag></NoDangFlag>';

            content += '\r\n<ITF_DCL_IO_DECL_GOODS_LIMIT>';
            var Tdate = new Date();
            content += '\r\n<TransBatch>' + Tdate.getVarDate('yyyyMMddHHmmss') + '</TransBatch>';
            content += '\r\n<LimitId></LimitId>';

            if (spbm == null) {
                content += '\r\n<GoodsId> </GoodsId>';
            } else {
                content += '\r\n<GoodsId>' + spbm + '</GoodsId>';
            }
            //                content += '\r\n<GoodsId></GoodsId>';
            content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';
            if (cxh == null) {
                content += '\r\n<GoodsNo> </GoodsNo>';
            } else {
                content += '\r\n<GoodsNo>' + cxh + '</GoodsNo>';
            }
            content += '\r\n<LicTypeCode>325</LicTypeCode>';
            content += '\r\n<LicenceNo></LicenceNo>';
            content += '\r\n<LicName>进境动植物检疫许可证</LicName>';
            content += '\r\n<LicWrtofDetailNo></LicWrtofDetailNo>';
            content += '\r\n<LicWrtofQty>' + zjz + '</LicWrtofQty>';
            content += '\r\n<LicDetailLeft></LicDetailLeft>';
            content += '\r\n<LicWrtofLeft></LicWrtofLeft>';
            content += '\r\n</ITF_DCL_IO_DECL_GOODS_LIMIT>';

            content += '\r\n<ITF_DCL_IO_DECL_GOODS_PACK>';
            content += '\r\n<PackId></PackId>';
            if (spbm == null) {
                content += '\r\n<GoodsId> </GoodsId>';
            } else {
                content += '\r\n<GoodsId>' + spbm + '</GoodsId>';
            }
            //            content += '\r\n<GoodsId></GoodsId>';
            content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';
            var cxh = dw_spxx.GetItemNumber(row, "cxh");
            if (cxh == null) {
                content += '\r\n<GoodsNo> </GoodsNo>';
            } else {
                content += '\r\n<GoodsNo>' + cxh + '</GoodsNo>';
            }
            content += '\r\n<PackLenth></PackLenth>';
            content += '\r\n<PackHigh></PackHigh>';
            content += '\r\n<PackWide></PackWide>';

            var bzzl = dw_spxx.GetItemString(row, "bzzl");
            if (bzzl == null) {
                bzzl = "";
            }
            content += '\r\n<PackTypeCode>' + bzzl + '</PackTypeCode>';

            var bzzlmc = dw_spxx.GetItemString(row, "bzzlmc");
            if (bzzlmc == null) {
                bzzlmc = "";
            }
            content += '\r\n<PackCatgName>' + bzzlmc + '</PackCatgName>';
            content += '\r\n<PackTypeShort>' + bzzlmc + '</PackTypeShort>';

            var bzsl = dw_spxx.GetItemNumber(row, "bzsl");
            if (bzsl == null) {
                bzsl = "";
            }
            content += '\r\n<PackQty>' + bzsl + '</PackQty>';
            content += '\r\n<IsMainPack>1</IsMainPack>';
            content += '\r\n<MatType></MatType>';
            content += '\r\n<ProcFactory></ProcFactory>';

            content += '\r\n</ITF_DCL_IO_DECL_GOODS_PACK>';

            content += '\r\n</ITF_DCL_IO_DECL_GOODS>';
        }
        for (var row = 1; row <= dw_jzxxx.RowCount(); row++) {
            content += '\r\n<ITF_DCL_IO_DECL_CONT>';
            content += '\r\n<DeclId>' + ywbh + '</DeclId>';
            var Tdate = new Date();
            content += '\r\n<TransBatch>' + Tdate.getVarDate('yyyyMMddHHmmss') + '</TransBatch>';
            content += '\r\n<ContId></ContId>';
            content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';

            var jzxh = dw_jzxxx.GetItemString(1, "jzxh");
            if (jzxh == null) {
                jzxh = "";
            }
            content += '\r\n<CntnrModeCode>' + jzxh + '</CntnrModeCode>'; //集装箱规格代码

            var jzxslzh = 0;
            for (var row = 1; row <= dw_jzxxx.RowCount(); row++) {
                var jzxsl = dw_jzxxx.GetItemNumber(row, "jzxsl");
                jzxslzh += jzxsl;
            }

            content += '\r\n<ContainerQty>' + jzxslzh + '</ContainerQty>'; //集装箱数量;number;;0;1;1;;0;container_qty

            content += '\r\n<LclFlag></LclFlag>';

            //        var cxh = dw_jzxxx.GetItemString(1, "cxh");
            //        if (cxh == null) {
            //            cxh = "";
            //        }
            content += '\r\n<SeqNo></SeqNo>';

            content += '\r\n<ITF_DCL_IO_DECL_CONT_DETAIL>';
            content += '\r\n<ContDtId></ContDtId>';
            content += '\r\n<ContId></ContId>';
            content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';

            var jzxggdm = dw_jzxxx.GetItemString(row, "jzxh");
            if (jzxggdm == null) {
                jzxggdm = "";
            }
            content += '\r\n<CntnrModeCode>' + jzxggdm + '</CntnrModeCode>';

            var hz_jzxh = dw_jzxxx.GetItemString(1, "hz_jzxh");
            if (hz_jzxh == null) {
                hz_jzxh = "";
            }
            content += '\r\n<ContNo>' + hz_jzxh.replace(/\s+/g, "") + '</ContNo>';

            content += '\r\n<LclFlag></LclFlag>';
            content += '\r\n<SeqNo></SeqNo>';
            content += '\r\n</ITF_DCL_IO_DECL_CONT_DETAIL>';

            content += '\r\n</ITF_DCL_IO_DECL_CONT>';
        }

        content += '\r\n<ITF_DCL_IO_DECL_USER>';

        content += '\r\n<UserId>' + ywbh + '</UserId>';
        content += '\r\n<EntDeclNo>' + ywbh + '</EntDeclNo>';
        content += '\r\n<DeclId>' + ywbh + '</DeclId>';

        content += '\r\n<ConsumerUsrCode>3100647614</ConsumerUsrCode>';
        content += '\r\n<UserName>上海欧恒进出口有限公司</UserName>';

        content += '\r\n<UseOrgPersonCode />';
        content += '\r\n<UseOrgPersonTel />';

        content += '\r\n</ITF_DCL_IO_DECL_USER>';

        content += '\r\n</ITF_DCL_IO_DECL>';
        content += '\r\n</ROOT>';

        //        content += '\r\n<CIQ_IN_APL>';
        //        content += '\r\n<DECL_IN_RECORD>';
        //        content += '\r\n<INV_NO>' + ywbh + '</INV_NO>';
        //        var bjgssjjgdm = dw_master.GetItemString(1, "bjgssjjgdm");
        //        if (bjgssjjgdm == null) {
        //            bjgssjjgdm = "";
        //        }
        //        content += '\r\n<REG_NO>' + bjgssjjgdm + '</REG_NO>';
        //        content += '\r\n<SENDER_ADDR></SENDER_ADDR>';
        //        var bjgsmc = dw_master.GetItemString(1, "bjgsmc")
        //        if (bjgsmc == null) {
        //            bjgsmc = "";
        //        }
        //        bjgsmc = self.Replace_tszf(bjgsmc);
        //        content += '\r\n<APL_NAME>' + bjgsmc + '</APL_NAME>';
        //        var bjgslxr = dw_master.GetItemString(1, "bjgslxr")
        //        if (bjgslxr == null) {
        //            bjgslxr = "";
        //        }
        //        bjgslxr = self.Replace_tszf(bjgslxr);
        //        content += '\r\n<APL_LINKMAN>' + bjgslxr + '</APL_LINKMAN>';
        //        var bjgslxdh = dw_master.GetItemString(1, "bjgslxdh")
        //        if (bjgslxdh == null) {
        //            bjgslxdh = "";
        //        }
        //        bjgslxdh = self.Replace_tszf(bjgslxdh);
        //        content += '\r\n<APL_TEL>' + bjgslxdh + '</APL_TEL>';
        //        var bjydm = dw_master.GetItemString(1, "bjydm")
        //        if (bjydm == null) {
        //            bjydm = "";
        //        }
        //        bjydm = self.Replace_tszf(bjydm);
        //        content += '\r\n<APL_PERSON_CODE>' + bjydm + '</APL_PERSON_CODE>';

        //        var date = new Date;
        //        var nf = date.getYear().toString();
        //        var yf = date.getMonth() + 1;
        //        if (yf < 10) {
        //            yf = "0" + yf;
        //        };
        //        var rq = date.getDate();
        //        if (rq < 10) {
        //            rq = "0" + rq;
        //        };
        //        var hh = date.getHours();
        //        if (hh < 10) {
        //            hh = "0" + hh;
        //        };
        //        var mm = date.getMinutes();
        //        if (mm < 10) {
        //            mm = "0" + mm;
        //        };
        //        var ss = date.getSeconds();
        //        if (ss < 10) {
        //            ss = "0" + ss;
        //        };

        //        var sbrq = nf.toString() + '-' + yf.toString() + '-' + rq.toString() + ' ' + hh.toString() + ':' + mm.toString() + ':' + ss.toString()
        //        content += '\r\n<APL_DATE>' + sbrq + '</APL_DATE>';
        //        var qyxz = dw_master.GetItemString(1, "qyxz")
        //        if (qyxz == null) {
        //            qyxz = "";
        //        }

        //        content += '\r\n<CORP_ATTR>' + qyxz + '</CORP_ATTR>';
        //        var sfwstzcc = dw_master.GetItemString(1, "sfwstzcc")
        //        if (sfwstzcc == null || sfwstzcc == "") {
        //            sfwstzcc = "N";
        //        }
        //        content += '\r\n<FOREIGN_ASSET>' + sfwstzcc + '</FOREIGN_ASSET>';
        //        var jydwsjjgdm = dw_master.GetItemString(1, "jydwsjjgdm")
        //        jydwsjjgdm = self.Replace_tszf(jydwsjjgdm);
        //        if (jydwsjjgdm == null) {
        //            jydwsjjgdm = "";
        //        }
        //        content += '\r\n<CONSIGNEE_CODE>' + jydwsjjgdm + '</CONSIGNEE_CODE>';
        //        var jydwmc = dw_master.GetItemString(1, "jydwmc")
        //        if (jydwmc == null) {
        //            jydwmc = "";
        //        }
        //        jydwmc = self.Replace_tszf(jydwmc);
        //        content += '\r\n<CONSIGNEE_CN>' + jydwmc + '</CONSIGNEE_CN>';
        //        var jydwmc_yw = dw_master.GetItemString(1, "jydwmc_yw")
        //        if (jydwmc_yw == null) {
        //            jydwmc_yw = "";
        //        }
        //        jydwmc_yw = self.Replace_tszf(jydwmc_yw);
        //        content += '\r\n<CONSIGNEE_EN>' + jydwmc_yw + '</CONSIGNEE_EN>';

        //        content += '\r\n<CONSIGNOR_CODE></CONSIGNOR_CODE>';
        //        content += '\r\n<CONSIGNOR_CN></CONSIGNOR_CN>';
        //        var gwgysmc = dw_master.GetItemString(1, "gwgysmc")
        //        if (gwgysmc == null) {
        //            gwgysmc = "";
        //        }
        //        gwgysmc = self.Replace_tszf(gwgysmc);
        //        content += '\r\n<CONSIGNOR_EN>' + gwgysmc + '</CONSIGNOR_EN>';
        //        var ysgj = dw_master.GetItemString(1, "ysgj");
        //        if (ysgj == null) {
        //            ysgj = "";
        //        }
        //        content += '\r\n<CONVEY_CODE>' + ysgj + '</CONVEY_CODE>'; //运输方式要固定分海运集装箱  海运散货 空运 代码需要咨询

        //        var hcorhbh = dw_master.GetItemString(1, "hcorhbh_jsl");
        //        if (hcorhbh == null) {
        //            hcorhbh = "";
        //        }

        //        content += '\r\n<CONVEY_DETAIL>' + hcorhbh + '</CONVEY_DETAIL>'; //运输方式细节;string;20;0;1;1;;;trans_means_code 暂时不管
        //        content += '\r\n<TONNAGE></TONNAGE>';
        //        var hth = dw_master.GetItemString(1, "hth");
        //        if (hth == null) {
        //            hth = "";
        //        }
        //        hth = self.Replace_tszf(hth);
        //        content += '\r\n<CONTRACT_NO>' + hth + '</CONTRACT_NO>';
        //        var myfs = dw_master.GetItemString(1, "myfs")
        //        var myfsdm = QsWebSoft.PubMethod.ReadSjMyfs(myfs).value;
        //        if (myfsdm == null) {
        //            myfsdm = ""
        //        }
        //        content += '\r\n<TRADE_CODE>' + myfsdm + '</TRADE_CODE>';
        //        var ycdsjdm = dw_master.GetItemString(1, "ycdsjdm")
        //        if (ycdsjdm == null) {
        //            ycdsjdm = ""
        //        }
        //        content += '\r\n<TRADE_AREA_CODE>' + ycdsjdm + '</TRADE_AREA_CODE>';
        //        var ztdh = dw_master.GetItemString(1, "ztdh")
        //        if (ztdh == null) {
        //            ztdh = "";
        //        }

        //        content += '\r\n<BL_NO>' + ztdh + '</BL_NO>';

        //        var yjkgsj_jsl = dw_master.GetItemString(1, "yjkgsj_jsl")
        //        if (yjkgsj_jsl == null) {
        //            yjkgsj_jsl = ""
        //        }
        //        content += '\r\n<ARRIVE_DATE>' + yjkgsj_jsl + '</ARRIVE_DATE>';
        //        var qiyunguosjdm = dw_master.GetItemString(1, "qiyunguosjdm")
        //        if (qiyunguosjdm == null) {
        //            qiyunguosjdm = ""
        //        }
        //        content += '\r\n<DEPART_AREA_CODE>' + qiyunguosjdm + '</DEPART_AREA_CODE>';

        //        content += '\r\n<LICENCE_NO></LICENCE_NO>'; //许可证号码;string;20;0;1;1;;;license_code
        //        content += '\r\n<APPROVE_CODE></APPROVE_CODE>'; //审批号码;string;10;0;1;1;;;approve_code
        //        var sjkgsj_jsl = dw_master.GetItemString(1, "sjkgsj_jsl")

        //        if (sjkgsj_jsl == null || sjkgsj_jsl == "1900/01/01") {
        //            requestor.MessageBox("提示", "预计靠港时间没有，请输入！")
        //            return
        //        };

        //        content += '\r\n<UNLOAD_DATE>' + sjkgsj_jsl + '</UNLOAD_DATE>';

        //        var qygsjgkdm = dw_master.GetItemString(1, "qygsjgkdm")
        //        if (qygsjgkdm == null) {
        //            qygsjgkdm = "";
        //        }
        //        content += '\r\n<DEPART_PORT>' + qygsjgkdm + '</DEPART_PORT>';

        //        var rjka = dw_master.GetItemString(1, "rjka")

        //        if (rjka == null) {
        //            rjka = "";
        //        }

        //        content += '\r\n<ARRIVE_PORT>' + rjka + '</ARRIVE_PORT>';
        //        var spts = dw_master.GetItemNumber(1, "spts")

        //        if (spts == null) {
        //            content += '\r\n<COMPEN_VALID_DAYS></COMPEN_VALID_DAYS>';
        //        } else {
        //            content += '\r\n<COMPEN_VALID_DAYS>' + spts + '</COMPEN_VALID_DAYS>';

        //        }
        //        content += '\r\n<MID_PORT></MID_PORT>';
        //        var rjmdd = dw_master.GetItemString(1, "rjmdd")
        //        if (rjmdd == null) {
        //            rjmdd = "";
        //        }
        //        content += '\r\n<DESTINATION>' + rjmdd + '</DESTINATION>';
        //        var tstk = dw_master.GetItemString(1, "tstk")
        //        if (tstk == null) {
        //            tstk = "";
        //        }
        //        tstk = self.Replace_tszf(tstk);
        //        content += '\r\n<SPEC_CLAUSE>' + tstk + '</SPEC_CLAUSE>';
        //        var hwcfd = dw_master.GetItemString(1, "hwcfd")
        //        if (hwcfd == null) {
        //            hwcfd = "";
        //        }
        //        hwcfd = self.Replace_tszf(hwcfd);
        //        content += '\r\n<GOODS_PLACE>' + hwcfd + '</GOODS_PLACE>';
        //        var sfdjbm = dw_master.GetItemString(1, "sfdjbm")
        //        if (sfdjbm == null) {
        //            sfdjbm = "";
        //        }
        //        content += '\r\n<ATTACH_DOC_CODES>' + sfdjbm + '</ATTACH_DOC_CODES>';
        //        content += '\r\n<DEST_ORG_CODE></DEST_ORG_CODE>';
        //        var jyjsjjgdm = dw_master.GetItemString(1, "jyjsjjgdm");
        //        if (jyjsjjgdm == null) {
        //            jyjsjjgdm = "";
        //        }
        //        content += '\r\n<CHECK_ORG_CODE>' + jyjsjjgdm + '</CHECK_ORG_CODE>';

        //        var zs = "";
        //        var zb = "";
        //        var fb = "";
        //        for (row = 1; row <= dw_zsbh.RowCount(); row++) {
        //            var sfxz = dw_zsbh.GetItemString(row, "sfxz");
        //            if (sfxz == "Y") {
        //                var zsbh = dw_zsbh.GetItemString(row, "zsbh");
        //                var zbfs = dw_zsbh.GetItemNumber(row, "zbfs");
        //                var fbfs = dw_zsbh.GetItemNumber(row, "fbfs");
        //                if (zsbh != null) {
        //                    zs = zs + zsbh
        //                }
        //                if (zbfs != null) {
        //                    if (zb == "") {
        //                        zb = zbfs.toString();
        //                    } else {
        //                        zb = zb + "," + zbfs.toString();
        //                    }
        //                }
        //                if (fbfs != null) {
        //                    if (fb == null) {
        //                        fb = fbfs.toString();
        //                    } else {
        //                        fb = fb + "," + fbfs.toString();
        //                    }
        //                }
        //            }
        //        }

        //        content += '\r\n<CERT_TYPE_CODES>' + zs + '</CERT_TYPE_CODES>';
        //        content += '\r\n<CERT_ORIGINALS>' + zb + '</CERT_ORIGINALS>';
        //        content += '\r\n<CERT_COPIES>' + fb + '</CERT_COPIES>';
        //        var bjlb = dw_master.GetItemString(1, "bjlb");
        //        if (bjlb == null) {
        //            bjlb = "";
        //        }
        //        content += '\r\n<DECL_TYPE_CODE>' + bjlb + '</DECL_TYPE_CODE>';

        //        var yt = dw_master.GetItemString(1, "yt");
        //        if (yt == null) {
        //            yt = "";
        //        }
        //        yt = self.Replace_tszf(yt);
        //        content += '\r\n<PURPOSE>' + yt + '</PURPOSE>';
        //        var mt = dw_master.GetItemString(1, "mt");
        //        if (mt == null) {
        //            mt = "";
        //        }
        //        mt = self.Replace_tszf(mt);
        //        content += '\r\n<MARKS_NUM>' + mt + '</MARKS_NUM>';

        //        content += '\r\n<DESP_DATE></DESP_DATE>'
        //        content += '\r\n<CUSTOM_CODE></CUSTOM_CODE>';
        //        content += '\r\n<BACK_TRANSPORT_FLAG></BACK_TRANSPORT_FLAG>';
        //        var cm = dw_master.GetItemString(1, "cm_jsl");
        //        if (cm == null) {
        //            cm = "";
        //        }



        //        cm = self.Replace_tszf(cm);
        //        content += '\r\n<TRANS_MEANS_NAME>' + cm + '</TRANS_MEANS_NAME>';

        //        content += '\r\n<OPERATOR_CODE></OPERATOR_CODE>';
        //        content += '\r\n<OPER_DEPT></OPER_DEPT>';
        //        content += '\r\n<TECH_REG_CODE></TECH_REG_CODE>';


        //        //        content += '\r\n<EXCHANGE MySign="Table" TableName="dec_t_decl_exchange">';
        //        //        content += '\r\n<EXCHANGE_RECORD MySign="row">';
        //        //        content += '\r\n<RESULT_CONTENT></RESULT_CONTENT>'; //厂检结果;string;400;0;1;1;;;result_content
        //        //        content += '\r\n</EXCHANGE_RECORD>';
        //        //        content += '\r\n</EXCHANGE>';

        //        var spxx_row = dw_spxx.RowCount();
        //        content += '\r\n<DECL_IN_GOODS_DESC>';



        //        for (row = 1; row <= dw_spxx.RowCount(); row++) {
        //            content += '\r\n<DECL_IN_GOODS_RECORD>';
        //            content += '\r\n<INV_NO>' + ywbh + '</INV_NO>';
        //            content += '\r\n<REG_NO>' + bjgssjjgdm + '</REG_NO>';

        //            var sp_id = dw_spxx.GetItemNumber(row, "sp_id");
        //            var cxh = dw_spxx.GetItemNumber(row, "cxh");
        //            if (cxh == null) {
        //                content += '\r\n<SERIAL_NO> </SERIAL_NO>';
        //            } else {
        //                content += '\r\n<SERIAL_NO>' + cxh + '</SERIAL_NO>';
        //            }
        //            var spmc = dw_spxx.GetItemString(row, "spmc")
        //            if (spmc == null) {
        //                spmc = "";
        //            }
        //            spmc = self.Replace_tszf(spmc);
        //            spmc = self.Replace_fresh(spmc);
        //            content += '\r\n<GOODS_CN>' + spmc + '</GOODS_CN>';
        //            var spmc_yw = dw_spxx.GetItemString(row, "spmc_yw")
        //            if (spmc_yw == null) {
        //                spmc_yw = "";
        //            }

        //            var ycddm = dw_master.GetItemString(1, "ycddm")
        //            if (ycddm == "502" && spmc == "鲜柑橘") {
        //                spmc_yw = "TANGELO";
        //            }
        //            spmc_yw = self.Replace_tszf(spmc_yw);
        //            spmc_yw = self.Replace_fresh(spmc_yw);
        //            content += '\r\n<GOODS_EN>' + spmc_yw + '</GOODS_EN>';
        //            var spgg = dw_spxx.GetItemString(row, "spgg")
        //            if (spgg == null) {
        //                spgg = "";
        //            }
        //            spgg = self.Replace_tszf(spgg);
        //            content += '\r\n<GOODS_MODEL></GOODS_MODEL>';
        //            var hgbm = dw_spxx.GetItemString(row, "hgbm_jsl")
        //            if (hgbm == null) {
        //                hgbm = "";
        //            }
        //            content += '\r\n<HS_CODE>' + hgbm + '</HS_CODE>';
        //            content += '\r\n<ORI_AREA_CODE>' + ycdsjdm + '</ORI_AREA_CODE>';
        //            var zjz = dw_spxx.GetItemNumber(row, "zjz");
        //            if (zjz == null) {
        //                zjz = 0;
        //            }
        //            content += '\r\n<WEIGHT>' + zjz + '</WEIGHT>';
        //            //商品表的申报单位 在单位代码中增加商检单位
        //            var hgjldw = dw_spxx.GetItemString(row, "hgjldw");
        //            var sjhgjldw = QsWebSoft.PubMethod.ReadSjhgjldm(hgjldw).value;
        //            if (sjhgjldw == null) {
        //                sjhgjldw = "";
        //            }
        //            content += '\r\n<WEIGHT_UNIT_CODE>' + sjhgjldw + '</WEIGHT_UNIT_CODE>';

        //            content += '\r\n<STD_WEIGHT>' + zjz + '</STD_WEIGHT>'; //重量;number (10,2);;0;1;1;;0;std_weight
        //            content += '\r\n<STD_WEIGHT_UNIT_CODE>' + sjhgjldw + '</STD_WEIGHT_UNIT_CODE>'; //重量单位代码;string;4;0;1;1;std_weight_unit_code;;weight_unit_code
        //            //计量数量 计量单位转商检代码表
        //            var bzzl_zx = dw_spxx.GetItemString(row, "bzzl");
        //            if (bzzl_zx == null) {
        //                bzzl_zx = "";
        //            }
        //            var jlsl = dw_spxx.GetItemNumber(row, "jlsl");
        //            if (jlsl == null || bzzl_zx == "4M") {
        //                content += '\r\n<QUANTITY></QUANTITY>';
        //            } else {
        //                content += '\r\n<QUANTITY>' + jlsl + '</QUANTITY>';
        //            }
        //            //商品表的申报单位 在单位代码中增加商检单位
        //            var sjjldw = dw_spxx.GetItemString(row, "sjjldw");
        //            if (sjjldw == null || bzzl_zx == "4M") {
        //                content += '\r\n<QUANTITY_UNIT_CODE></QUANTITY_UNIT_CODE>';
        //            } else {
        //                content += '\r\n<QUANTITY_UNIT_CODE>' + sjjldw + '</QUANTITY_UNIT_CODE>';
        //            }
        //            //取法定数量  法定单位
        //            var fdsl = dw_spxx.GetItemNumber(row, "fdsl");

        //            if (fdsl == null) {
        //                content += '\r\n<STD_QUANTITY></STD_QUANTITY>';
        //            } else {
        //                content += '\r\n<STD_QUANTITY>' + fdsl + '</STD_QUANTITY>';
        //            }
        //            var fdjldw = dw_spxx.GetItemString(row, "fdjldw");
        //            var sjfdjldw = QsWebSoft.PubMethod.ReadSjhgjldm(fdjldw).value;
        //            if (sjfdjldw == null) {
        //                sjfdjldw = "";
        //            }
        //            content += '\r\n<STD_UNIT>' + sjfdjldw + '</STD_UNIT>';

        //            var zj = dw_spxx.GetItemNumber(row, "zj");
        //            if (zj == null) {
        //                zj = 0;
        //            }
        //            content += '\r\n<AMOUNT>' + zj + '</AMOUNT>';
        //            var cu_code_sj = dw_master.GetItemString(1, "cu_code_sj")
        //            if (cu_code_sj == null) {
        //                cu_code_sj = "";
        //            }
        //            //币别中商检代码
        //            content += '\r\n<MONEY_UNIT>' + cu_code_sj + '</MONEY_UNIT>';
        //            var bzsl = dw_spxx.GetItemNumber(row, "bzsl");
        //            if (bzsl == null || bzsl == 0) {
        //                content += '\r\n<PACK_QUAN></PACK_QUAN>'; //包装数量;number(10,2);;1;1;1;;;pack_number
        //            } else {
        //                content += '\r\n<PACK_QUAN>' + bzsl + '</PACK_QUAN>'; //包装数量;number(10,2);;1;1;1;;;pack_number
        //            }
        //            var bzzl = dw_spxx.GetItemString(row, "bzzl");
        //            if (bzzl == null) {
        //                bzzl = "";
        //            }
        //            content += '\r\n<PACK_KIND>' + bzzl + '</PACK_KIND>'; //包装类型代码;string;4;1;1;1;dec_t_pack_type;;pack_type_code


        //            content += '\r\n<PRICE></PRICE>';
        //            content += '\r\n<WASTE_FLAG>1</WASTE_FLAG>'; //废旧物品标识;string;4;0;1;1;;;waste_flag
        //            //增加字段 默认一个代码库
        //            var sjyt = dw_spxx.GetItemString(row, "sjyt");
        //            if (sjyt == null) {
        //                sjyt = "";
        //            }
        //            content += '\r\n<PURPOSE_CODE>' + sjyt + '</PURPOSE_CODE>'; //用途代码;string;4;0;1;1;dec_c_usage;;purpose_code

        //            content += '\r\n<PROD_REG_NO></PROD_REG_NO>';
        //            content += '\r\n<CONDITION_FLAG></CONDITION_FLAG>';
        //            content += '\r\n<CHECKUP_WORK_CODE></CHECKUP_WORK_CODE>';
        //            content += '\r\n<CHECKUP_TYPE_CODE></CHECKUP_TYPE_CODE>';
        //            content += '\r\n<INSP_MODE_CODE></INSP_MODE_CODE>';
        //            dw_sjzs.SetFilter("sp_id = " + sp_id)
        //            dw_sjzs.Filter()
        //            for (row2 = 1; row2 <= dw_sjzs.RowCount(); row2++) {
        //                //监管条件 许可证/审批号 主表里面有 但不同商品应该不一样   哪里选择 
        //                content += '\r\n<LIMIT >';
        //                content += '\r\n<LIMIT_RECORD>';
        //                content += '\r\n<INV_NO>' + ywbh + '</INV_NO>';
        //                content += '\r\n<REG_NO>' + bjgssjjgdm + '</REG_NO>';
        //                if (cxh == null) {
        //                    content += '\r\n<GOODS_NO></GOODS_NO>'; //货物序号;number(2,0);;0;1;1;;;goods_no
        //                }
        //                else {
        //                    content += '\r\n<GOODS_NO>' + cxh + '</GOODS_NO>'; //货物序号;number(2,0);;0;1;1;;;goods_no
        //                }
        //                var szkzdm = dw_sjzs.GetItemString(row2, "szkzdm")
        //                if (szkzdm == null) {
        //                    szkzdm = ""
        //                }
        //                content += '\r\n<LIMIT_CODE>' + szkzdm + '</LIMIT_CODE>'; //设限控制代码;string;4;1;1;1;;;limit_code
        //                var zsbh = dw_sjzs.GetItemString(row2, "zsbh")
        //                if (zsbh == null) {
        //                    zsbh = ""
        //                }
        //                content += '\r\n<REG_CODE>' + zsbh + '</REG_CODE>'; //证书编号;string;10;1;1;1;;;reg_code
        //                content += '\r\n</LIMIT_RECORD>';
        //                content += '\r\n</LIMIT>';
        //            }

        //            content += '\r\n<PACK_ADD>';
        //            dw_sjbzcl.SetFilter("sp_id = " + sp_id)
        //            dw_sjbzcl.Filter()
        //            for (row3 = 1; row3 <= dw_sjbzcl.RowCount(); row3++) {
        //                content += '\r\n<PACK_ADD_RECORD>';
        //                content += '\r\n<INV_NO>' + ywbh + '</INV_NO>';
        //                content += '\r\n<REG_NO>' + bjgssjjgdm + ' </REG_NO>'; // 企业注册号; string; 10; 0; 1; 1; ; ; reg_no
        //                if (cxh == null) {
        //                    content += '\r\n<GOODS_NO></GOODS_NO>'; //货物序号;number(2,0);;0;1;1;;;goods_no
        //                }
        //                else {
        //                    content += '\r\n<GOODS_NO>' + cxh + '</GOODS_NO>'; //货物序号;number(2,0);;0;1;1;;;goods_no
        //                }
        //                var clzl = dw_sjbzcl.GetItemString(row3, "clzl")
        //                if (clzl == null) {
        //                    clzl = "";
        //                }
        //                content += '\r\n<MATERIAL_TYPE>' + clzl + '</MATERIAL_TYPE>'; //材料种类;string;20;0;1;1;;;material_type
        //                var jgcj = dw_sjbzcl.GetItemString(row3, "jgcj")
        //                if (jgcj == null) {
        //                    jgcj = "";
        //                }
        //                content += '\r\n<FACTORY>' + jgcj + '</FACTORY>'; //加工厂家;string;50;0;1;1;;;factory
        //                var cd = dw_sjbzcl.GetItemNumber(row3, "cd")
        //                if (cd == null) {
        //                    content += '\r\n<PACK_LONG></PACK_LONG>'; //长;number;;0;1;1;;0;pack_long
        //                } else {
        //                    content += '\r\n<PACK_LONG>' + cd + '</PACK_LONG>'; //长;number;;0;1;1;;0;pack_long
        //                }
        //                var kd = dw_sjbzcl.GetItemNumber(row3, "kd")
        //                if (kd == null) {
        //                    content += '\r\n<PACK_WIDE></PACK_WIDE>'; //宽;number;;0;1;1;;0;pack_wide
        //                } else {
        //                    content += '\r\n<PACK_WIDE>' + kd + '</PACK_WIDE>'; //宽;number;;0;1;1;;0;pack_wide
        //                }
        //                var gd = dw_sjbzcl.GetItemNumber(row3, "gd")
        //                if (gd == null) {
        //                    content += '\r\n<PACK_HIGH></PACK_HIGH>'; //高;number;;0;1;1;;0;pack_high
        //                } else {
        //                    content += '\r\n<PACK_HIGH>' + gd + '</PACK_HIGH>'; //高;number;;0;1;1;;0;pack_high
        //                }

        //                var pdcldm = dw_sjbzcl.GetItemString(row3, "pdcldm")
        //                if (pdcldm == null) {
        //                    pdcldm = "";
        //                }
        //                content += '\r\n<MATTING_CODE>' + pdcldm + '</MATTING_CODE>'; //铺垫材料代码;string;4;0;1;1;;;matting_code
        //                var pbzjs = dw_sjbzcl.GetItemString(row3, "pbzjs")
        //                if (pbzjs == null) {
        //                    pbzjs = ""
        //                }
        //                content += '\r\n<PACK_NUMBER>' + pbzjs + '</PACK_NUMBER>'; //辅包装件数;number;;0;1;1;;0;pack_number

        //                content += '\r\n</PACK_ADD_RECORD>';
        //            }
        //            content += '\r\n</PACK_ADD>';
        //            content += '\r\n</DECL_IN_GOODS_RECORD>';
        //        }

        //        content += '\r\n</DECL_IN_GOODS_DESC>';

        //        var jzxxx_row = dw_jzxxx.RowCount();
        //        content += '\r\n<DECL_IN_CONTAINER>';

        //        var newrow_jzxxx = 0;
        //        for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
        //            content += '\r\n<DECL_IN_CONTAINER_RECORD>';
        //            content += '\r\n<INV_NO>' + ywbh + '</INV_NO>'; //发票或其它唯一标识号;string;20;0;1;1;;;ent_decl_no
        //            content += '\r\n<REG_NO>' + bjgssjjgdm + ' </REG_NO>'; // 企业注册号; string; 10; 0; 1; 1; ; ; 
        //            var jzxh = dw_jzxxx.GetItemString(row, "jzxh");
        //            if (jzxh == null) {
        //                jzxh = "";
        //            }
        //            content += '\r\n<CONTAINER_MODEL_CODE>' + jzxh + '</CONTAINER_MODEL_CODE>'; //集装箱规格代码;string;4;0;1;1;;;container_model_code

        //            content += '\r\n<CONTAINER_CODE> </CONTAINER_CODE>';
        //            var jzxsl = dw_jzxxx.GetItemNumber(row, "jzxsl");
        //            if (jzxsl == null) {
        //                content += '\r\n<CONTAINER_QUANTITY></CONTAINER_QUANTITY>'; //集装箱数量;number;;0;1;1;;0;container_qty
        //            } else {
        //                content += '\r\n<CONTAINER_QUANTITY>' + jzxsl + '</CONTAINER_QUANTITY>'; //集装箱数量;number;;0;1;1;;0;container_qty
        //            }
        //            content += '\r\n</DECL_IN_CONTAINER_RECORD>';
        //        }

        //        content += '\r\n</DECL_IN_CONTAINER>';

        //        /*
        //        content += '\r\n- <DECL_IN_RESPONSE MySign="Table" TableName="dec_m_decl_response">';
        //        content += '\r\n- <DECL_IN_RESPONSE_RECORD MySign="Row">';
        //        content += '\r\n<DECL_NO_TYPE>报检号类型;string;2;0;0;1;;;decl_no_type</DECL_NO_TYPE>';
        //        content += '\r\n<DECL_GET_NO>预报检号;string;20;0;0;1;;;decl_get_no</DECL_GET_NO>';
        //        content += '\r\n<DECL_NO>正式报检号;string;40;0;0;1;;;decl_no</DECL_NO>';
        //        content += '\r\n<ENT_DECL_NO>报检申请流水号;string;20;0;0;1;;;ent_decl_no</ENT_DECL_NO>';
        //        content += '\r\n<DECL_NO_RETURN>网上报检流水号;string;40;0;0;1;;;decl_no_return</DECL_NO_RETURN>';
        //        content += '\r\n<RSP_NO>;numeric(2, 0);;0;0;1;;;rsp_no</RSP_NO>';
        //        content += '\r\n<DECL_REG_NO>单位报检注册号;string;10;0;0;1;;;decl_reg_no</DECL_REG_NO>';
        //        content += '\r\n<SENDER_ADDR>发送邮箱;string;50;0;0;1;;;sender_addr</SENDER_ADDR>';
        //        content += '\r\n<RSP_KIND>回执类型;string;2;0;0;1;;;rsp_kind</RSP_KIND>';
        //        content += '\r\n<RSP_CODES>回执代码;string;200;0;0;1;;;rsp_codes</RSP_CODES>';
        //        content += '\r\n<RSP_GEN_TIME>回执生成时间;datetime;;0;0;1;;;rsp_gen_time</RSP_GEN_TIME>';
        //        content += '\r\n<RSP_SEND_TIME>回执发送时间;datetime;;0;0;1;;;rsp_send_time</RSP_SEND_TIME>';
        //        content += '\r\n<RSP_STATE>回执状态;string;1;0;0;1;;;rsp_state</RSP_STATE>';
        //        content += '\r\n<RSP_INFO>回执信息;string;2000;0;0;1;;;rsp_info</RSP_INFO>';
        //        content += '\r\n<ADD_INFO>附加信息;string;500;0;0;1;;;add_info</ADD_INFO>';
        //        content += '\r\n<YONGHU_ID>用户ID;string;50;0;1;1;;;yonghu_id</YONGHU_ID>';
        //        content += '\r\n<SEND_FLAG>是否推送标志;string;1;0;0;1;;;send_flag</SEND_FLAG>';
        //        content += '\r\n<FETCH_FLAG>是否自动提取标志;string;1;0;0;1;;;fetch_flag</FETCH_FLAG>';
        //        content += '\r\n</DECL_IN_RESPONSE_RECORD>';        
        //        content += '\r\n</DECL_IN_RESPONSE>';
        //        */
        //        content += '\r\n</DECL_IN_RECORD>';
        //        content += '\r\n</CIQ_IN_APL>';
        //        content += '\r\n</DECLARE>';
        //        content += '\r\n</CIQ_DOC>';

        if (content == null) {
            requestor.MessageBox("提示", "数据不全，无法生成文件！")
        } else {
            //            //            if (self.Save() == 1) {
            //            QsWebSoft.PubMethod.WriteYtjkXml(content, "D:\\RJJK\\", fileFullPath);
            //            requestor.MessageBox("提示", "文件<" + fileFullPath + ">已经生成完成！")

            //            //            }

            //            /////////

            if (self.Save() == 1) {
                var fso, f1, ts, s;
                var ForReading = 1;
                fso = new ActiveXObject("Scripting.FileSystemObject");
                f1 = fso.CreateTextFile(fileFullPath, true);
                f1.WriteLine(content);
                f1.Close();

                requestor.MessageBox("提示", "文件<" + fileFullPath + ">已经生成完成！")

            }


               


            ////////


        }
    }


}





