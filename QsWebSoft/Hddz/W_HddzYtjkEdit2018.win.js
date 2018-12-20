///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzYtjkEdit2018() {

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl(requestor);
    var dw_sjsfdj = new DataWindow(requestor);
    var dw_dzxx = new DataWindow(requestor);
    var dw_sbys = new DataWindow(requestor);
    var dw_sjbzcl = new DataWindow(requestor);
    var dw_sjzs = new DataWindow(requestor);
    var dw_hwxx = new DataWindow(requestor);
    var dw_spdhsr = new DataWindow(requestor);
    var dw_jzxxx = new DataWindow(requestor);
    var dw_hgfsdz = new DataWindow(requestor);
    var dw_jyjyxydz = new DataWindow(requestor);
    var dw_qyzz = new DataWindow(requestor);
    var dw_syrxx = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var hwxx = new ContextMenu(requestor);
    var jzxxx = new ContextMenu(requestor);
    var hgsfdz = new ContextMenu(requestor);
    var jyjyxydz = new ContextMenu(requestor);
    var qyzz = new ContextMenu(requestor);
    var syrxx = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_jzxxx = new DataStore(requestor);
    var ds_spxx = new DataStore(requestor);
    var ds_sjsfdj = new DataStore(requestor);
    var ds_sjzsbh = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_sjsfdj == null) dw_sjsfdj = new DataWindow(requestor);
        dw_sjsfdj.Attach(win.Control("dw_sjsfdj"));
        if (dw_dzxx == null) dw_dzxx = new DataWindow(requestor);
        dw_dzxx.Attach(win.Control("dw_dzxx"));
        if (dw_sbys == null) dw_sbys = new DataWindow(requestor);
        dw_sbys.Attach(win.Control("dw_sbys"));
        if (dw_sjbzcl == null) dw_sjbzcl = new DataWindow(requestor);
        dw_sjbzcl.Attach(win.Control("dw_sjbzcl"));
        if (dw_sjzs == null) dw_sjzs = new DataWindow(requestor);
        dw_sjzs.Attach(win.Control("dw_sjzs"));
        if (dw_hwxx == null) dw_hwxx = new DataWindow(requestor);
        dw_hwxx.Attach(win.Control("dw_hwxx"));
        if (dw_spdhsr == null) dw_spdhsr = new DataWindow(requestor);
        dw_spdhsr.Attach(win.Control("dw_spdhsr"));
        if (dw_jzxxx == null) dw_jzxxx = new DataWindow(requestor);
        dw_jzxxx.Attach(win.Control("dw_jzxxx"));
        if (dw_hgfsdz == null) dw_hgfsdz = new DataWindow(requestor);
        dw_hgfsdz.Attach(win.Control("dw_hgfsdz"));
        if (dw_jyjyxydz == null) dw_jyjyxydz = new DataWindow(requestor);
        dw_jyjyxydz.Attach(win.Control("dw_jyjyxydz"));
        if (dw_qyzz == null) dw_qyzz = new DataWindow(requestor);
        dw_qyzz.Attach(win.Control("dw_qyzz"));
        if (dw_syrxx == null) dw_syrxx = new DataWindow(requestor);
        dw_syrxx.Attach(win.Control("dw_syrxx"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (hwxx == null) hwxx = new ContextMenu(requestor);
        hwxx.Attach(win.Control("hwxx"));
        if (jzxxx == null) jzxxx = new ContextMenu(requestor);
        jzxxx.Attach(win.Control("jzxxx"));
        if (hgsfdz == null) hgsfdz = new ContextMenu(requestor);
        hgsfdz.Attach(win.Control("hgsfdz"));
        if (jyjyxydz == null) jyjyxydz = new ContextMenu(requestor);
        jyjyxydz.Attach(win.Control("jyjyxydz"));
        if (qyzz == null) qyzz = new ContextMenu(requestor);
        qyzz.Attach(win.Control("qyzz"));
        if (syrxx == null) syrxx = new ContextMenu(requestor);
        syrxx.Attach(win.Control("syrxx"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_jzxxx == null) ds_jzxxx = new DataStore(requestor);
        ds_jzxxx.Attach(win.Control("ds_jzxxx"));
        if (ds_spxx == null) ds_spxx = new DataStore(requestor);
        ds_spxx.Attach(win.Control("ds_spxx"));
        if (ds_sjsfdj == null) ds_sjsfdj = new DataStore(requestor);
        ds_sjsfdj.Attach(win.Control("ds_sjsfdj"));
        if (ds_sjzsbh == null) ds_sjzsbh = new DataStore(requestor);
        ds_sjzsbh.Attach(win.Control("ds_sjzsbh"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.Tab_Select) == "function")
            win.AttachEvent("tab_1", "Clicked", self.Tab_Select);

        if (typeof (self.dw_sjsfdj_ItemChanged) == "function")
            win.AttachEvent("dw_sjsfdj", "ItemChanged", self.dw_sjsfdj_ItemChanged);

        if (typeof (self.dw_dzxx_ButtonClicked) == "function")
            win.AttachEvent("dw_dzxx", "ButtonClicked", self.dw_dzxx_ButtonClicked);

        if (typeof (self.dw_dzxx_Clicked) == "function")
            win.AttachEvent("dw_dzxx", "Clicked", self.dw_dzxx_Clicked);

        if (typeof (self.dw_dzxx_EditChanged) == "function")
            win.AttachEvent("dw_dzxx", "EditChanged", self.dw_dzxx_EditChanged);

        if (typeof (self.dw_dzxx_GetFocus) == "function")
            win.AttachEvent("dw_dzxx", "GetFocus", self.dw_dzxx_GetFocus);

        if (typeof (self.dw_dzxx_ItemChanged) == "function")
            win.AttachEvent("dw_dzxx", "ItemChanged", self.dw_dzxx_ItemChanged);

        if (typeof (self.dw_Sjbzcl_GetFocus) == "function")
            win.AttachEvent("dw_sjbzcl", "GetFocus", self.dw_Sjbzcl_GetFocus);

        if (typeof (self.dw_Sjzs_GetFocus) == "function")
            win.AttachEvent("dw_sjzs", "GetFocus", self.dw_Sjzs_GetFocus);

        if (typeof (self.dw_hwxx_Clicked) == "function")
            win.AttachEvent("dw_hwxx", "Clicked", self.dw_hwxx_Clicked);

        if (typeof (self.dw_hwxx_GetFocus) == "function")
            win.AttachEvent("dw_hwxx", "GetFocus", self.dw_hwxx_GetFocus);

        if (typeof (self.dw_hwxx_ItemChanged) == "function")
            win.AttachEvent("dw_hwxx", "ItemChanged", self.dw_hwxx_ItemChanged);

        if (typeof (self.dw_jzxxx_Clicked) == "function")
            win.AttachEvent("dw_jzxxx", "Clicked", self.dw_jzxxx_Clicked);

        if (typeof (self.dw_jzxxx_GetFocus) == "function")
            win.AttachEvent("dw_jzxxx", "GetFocus", self.dw_jzxxx_GetFocus);

        if (typeof (self.dw_hgsfdz_GetFocus) == "function")
            win.AttachEvent("dw_hgfsdz", "GetFocus", self.dw_hgsfdz_GetFocus);

        if (typeof (self.dw_jyjyxydz_GetFocus) == "function")
            win.AttachEvent("dw_jyjyxydz", "GetFocus", self.dw_jyjyxydz_GetFocus);

        if (typeof (self.dw_qyzz_GetFocus) == "function")
            win.AttachEvent("dw_qyzz", "GetFocus", self.dw_qyzz_GetFocus);

        if (typeof (self.dw_syrxx_GetFocus) == "function")
            win.AttachEvent("dw_syrxx", "GetFocus", self.dw_syrxx_GetFocus);

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

        if (typeof (self.Rjsjfs) == "function")
            win.AttachEvent("btn_1", "Clicked", self.Rjsjfs);

        if (typeof (self.dw_cmd_RowNext) == "function")
            win.AttachEvent("btn_rownext", "Clicked", self.dw_cmd_RowNext);

        if (typeof (self.dw_cmd_RowBack) == "function")
            win.AttachEvent("btn_rowback", "Clicked", self.dw_cmd_RowBack);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

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

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_19", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_zzxx) == "function")
            win.AttachEvent("m_21", "Clicked", self.CopyCol_zzxx);

        if (typeof (self.Recover_zzxx) == "function")
            win.AttachEvent("m_22", "Clicked", self.Recover_zzxx);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_26", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_zzxx) == "function")
            win.AttachEvent("m_28", "Clicked", self.CopyCol_zzxx);

        if (typeof (self.Recover_zzxx) == "function")
            win.AttachEvent("m_29", "Clicked", self.Recover_zzxx);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_33", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_zzxx) == "function")
            win.AttachEvent("m_35", "Clicked", self.CopyCol_zzxx);

        if (typeof (self.Recover_zzxx) == "function")
            win.AttachEvent("m_36", "Clicked", self.Recover_zzxx);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tab_1.Detach(); tab_1 = null;
        dw_sjsfdj.Detach(); dw_sjsfdj = null;
        dw_dzxx.Detach(); dw_dzxx = null;
        dw_sbys.Detach(); dw_sbys = null;
        dw_sjbzcl.Detach(); dw_sjbzcl = null;
        dw_sjzs.Detach(); dw_sjzs = null;
        dw_hwxx.Detach(); dw_hwxx = null;
        dw_spdhsr.Detach(); dw_spdhsr = null;
        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_hgfsdz.Detach(); dw_hgfsdz = null;
        dw_jyjyxydz.Detach(); dw_jyjyxydz = null;
        dw_qyzz.Detach(); dw_qyzz = null;
        dw_syrxx.Detach(); dw_syrxx = null;
        tb_1.Detach(); tb_1 = null;
        hwxx.Detach(); hwxx = null;
        jzxxx.Detach(); jzxxx = null;
        hgsfdz.Detach(); hgsfdz = null;
        jyjyxydz.Detach(); jyjyxydz = null;
        qyzz.Detach(); qyzz = null;
        syrxx.Detach(); syrxx = null;
        ds_1.Detach(); ds_1 = null;
        ds_jzxxx.Detach(); ds_jzxxx = null;
        ds_spxx.Detach(); ds_spxx = null;
        ds_sjsfdj.Detach(); ds_sjsfdj = null;
        ds_sjzsbh.Detach(); ds_sjzsbh = null;
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
    var ib_sjsfdj = true; 
    var ib_bzcl = true;
    var ib_zs = true;
    var dwc = new DataWindowChild();
 
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/HddzYtjk2018.ashx");

    
    
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
            dw_dzxx.Modify("DataWindow.Readonly=no");
            dw_hwxx.Modify("DataWindow.Readonly=no");
            dw_jzxxx.Modify("DataWindow.Readonly=no");
            dw_hgfsdz.Modify("DataWindow.Readonly=no");
            dw_jyjyxydz.Modify("DataWindow.Readonly=no");
            dw_qyzz.Modify("DataWindow.Readonly=no");
            dw_syrxx.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_dzxx.Modify("DataWindow.Readonly=yes");
            dw_hwxx.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_hgfsdz.Modify("DataWindow.Readonly=yes");
            dw_jyjyxydz.Modify("DataWindow.Readonly=yes");
            dw_qyzz.Modify("DataWindow.Readonly=yes");
            dw_syrxx.Modify("DataWindow.Readonly=yes");
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {

        dw_dzxx.SetFocus();
        dw_hwxx.ShareData(dw_spdhsr);
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
                dw_dzxx.Modify("id.Tabsequence=0");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_dzxx.Modify("id.Tabsequence=0");
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
    this.dw_dzxx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_hwxx_GetFocus = function (sender) {
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
    this.dw_hgfsdz_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jyjyxydz_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_qyzz_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_syrxx_GetFocus = function (sender) {
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

        dw_dzxx.AcceptText();
        dw_hwxx.AcceptText();
        dw_jzxxx.AcceptText();
        dw_hgfsdz.AcceptText();
        dw_jyjyxydz.AcceptText();
        dw_qyzz.AcceptText();
        dw_syrxx.AcceptText();
        dw_sjsfdj.AcceptText();
        dw_sjzs.AcceptText();
        dw_sjbzcl.AcceptText();



        if ((dw_dzxx.ModifiedCount() + dw_hwxx.DeletedCount() + dw_hwxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_hgfsdz.DeletedCount() + dw_hgfsdz.ModifiedCount() + dw_jyjyxydz.DeletedCount() + dw_jyjyxydz.ModifiedCount() + dw_qyzz.DeletedCount() + dw_qyzz.ModifiedCount() + dw_syrxx.DeletedCount() + dw_syrxx.ModifiedCount() + dw_sjsfdj.DeletedCount() + dw_sjsfdj.ModifiedCount() + dw_sjzs.DeletedCount() + dw_sjzs.ModifiedCount() + dw_sjbzcl.DeletedCount() + dw_sjbzcl.ModifiedCount()) > 0) {
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

        if (dw_dzxx.AcceptText() != 1)
            return;

        if (dw_hwxx.AcceptText() != 1)
            return;

        if (dw_jzxxx.AcceptText() != 1)
            return;

        if (dw_hgfsdz.AcceptText() != 1)
            return;

        if (dw_jyjyxydz.AcceptText() != 1)
            return;

        if (dw_qyzz.AcceptText() != 1)
            return;

        if (dw_syrxx.AcceptText() != 1)
            return;

        if (dw_sjsfdj.AcceptText() != 1)
            return;

        if (dw_sjzs.AcceptText() != 1)
            return;

        if (dw_sjbzcl.AcceptText() != 1)
            return;

        var aa = dw_dzxx.ModifiedCount();
        var bb = dw_hwxx.ModifiedCount()

       
        if ((dw_dzxx.ModifiedCount() + dw_hwxx.DeletedCount() + dw_hwxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_hgfsdz.DeletedCount() + dw_hgfsdz.ModifiedCount() + dw_jyjyxydz.DeletedCount() + dw_jyjyxydz.ModifiedCount() + dw_qyzz.DeletedCount() + dw_qyzz.ModifiedCount() + dw_syrxx.DeletedCount() + dw_syrxx.ModifiedCount() + dw_sjsfdj.ModifiedCount() + dw_sjsfdj.DeletedCount() + dw_sjzs.ModifiedCount() + dw_sjzs.DeletedCount() + dw_sjbzcl.ModifiedCount() + dw_sjbzcl.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_dzxx.GetRow();
        var ywbh = dw_dzxx.GetItemString(row, "ywbh");
        dw_dzxx.SetItem(row, "ywbh", ywbh);

        //FOB条件下判断是否有运费打勾 
        var jgfs = dw_dzxx.GetItemString(1, "jgfs")
        if (jgfs == "FOB") {
            var sfyyf = dw_dzxx.GetItemString(1, "sfyyf")
            if (sfyyf != "Y") {
                if (requestor.MessageBox("提示", "FOB下应该有运费支付，是否需要打勾?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_dzxx.SetItem(1, "sfyyf", "Y")
                }
            }
        }


        for (row = dw_hwxx.RowCount(); row > 0; row--) {
            dw_hwxx.SetItem(row, "cxh", row);
            dw_hwxx.SetItem(row, "ywbh", ywbh);

            var sfysx = dw_hwxx.GetItemString(row, "sfysx")
            if (sfysx == "Y") {
                var spsx = dw_hwxx.GetItemString(row, "spsx")
                if (spsx == null || spsx == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的制作或则保存方法必须输入！")
                    return;
                }
            };

            var sfypz = dw_hwxx.GetItemString(row, "sfypz")
            if (sfypz == "Y") {
                var sppz = dw_hwxx.GetItemString(row, "sppz")
                if (sppz == null || sppz == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的种类必须输入！")
                    return;
                }
            };

            var sfypplx = dw_hwxx.GetItemString(row, "sfypplx")
            if (sfypplx == "Y") {
                var pplx = dw_hwxx.GetItemString(row, "pplx")
                if (pplx == null || pplx == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的品牌类型必须输入！")
                    return;
                }
            };

            var sfyckxhqk = dw_hwxx.GetItemString(row, "sfyckxhqk")
            if (sfyckxhqk == "Y") {
                var ckxhqk = dw_hwxx.GetItemString(row, "ckxhqk")
                if (ckxhqk == null || ckxhqk == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的出口享惠情况必须输入！")
                    return;
                }
            };

            var sfydj = dw_hwxx.GetItemString(row, "sfydj")

            if (sfydj == "Y") {
                var spdj = dw_hwxx.GetItemString(row, "spdj")

                if (spdj == null || spdj == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的等级必须输入！")
                    return;
                }
            };

            var sfypp = dw_hwxx.GetItemString(row, "sfypp")
            if (sfypp == "Y") {
                var sppp = dw_hwxx.GetItemString(row, "sppp")
                if (sppp == null || sppp == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的品牌必须输入！")
                    return;
                }
            };

            var sfygg = dw_hwxx.GetItemString(row, "sfygg")
            if (sfygg == "Y") {
                var spgg = dw_hwxx.GetItemString(row, "spgg")
                if (spgg == null || spgg == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的规格必须输入！")
                    return;
                }
            };

            var sfyqt = dw_hwxx.GetItemString(row, "sfyqt")
            if (sfyqt == "Y") {
                var spqtys = dw_hwxx.GetItemString(row, "spqtys")
                if (spqtys == null || spqtys == "") {
                    requestor.MessageBox("提示", "第" + row + "行商品的其他要素必须输入！")
                    return;
                }
            };


        }




        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "cxh", row);
            dw_jzxxx.SetItem(row, "ywbh", ywbh);
        }

        for (row = dw_hgfsdz.RowCount(); row > 0; row--) {
            dw_hgfsdz.SetItem(row, "cxh", row);
            dw_hgfsdz.SetItem(row, "ywbh", ywbh);
        }

        for (row = dw_jyjyxydz.RowCount(); row > 0; row--) {
            dw_jyjyxydz.SetItem(row, "cxh", row);
            dw_jyjyxydz.SetItem(row, "ywbh", ywbh);
        }

        for (row = dw_qyzz.RowCount(); row > 0; row--) {
            dw_qyzz.SetItem(row, "cxh", row);
            dw_qyzz.SetItem(row, "ywbh", ywbh);
        }

        for (row = dw_syrxx.RowCount(); row > 0; row--) {
            dw_syrxx.SetItem(row, "cxh", row);
            dw_syrxx.SetItem(row, "ywbh", ywbh);
        }

        for (row = dw_sjsfdj.RowCount(); row > 0; row--) {
            dw_sjsfdj.SetItem(row, "cxh", row);
            dw_sjsfdj.SetItem(row, "ywbh", ywbh);
        }

        dw_sjsfdj.Hide()
        ib_sjsfdj = false;


        dw_sjzs.SetFilter("")
        dw_sjzs.Filter()

        for (row = dw_sjzs.RowCount(); row > 0; row--) {
            dw_sjzs.SetItem(row, "cxh", row);
            dw_sjzs.SetItem(row, "ywbh", ywbh);
        }

        dw_sjzs.Hide()
        ib_zs = false;

        dw_sjbzcl.SetFilter("")
        dw_sjbzcl.Filter()


        for (row = dw_sjbzcl.RowCount(); row > 0; row--) {
            dw_sjbzcl.SetItem(row, "cxh", row);
            dw_sjbzcl.SetItem(row, "ywbh", ywbh);
        }

        dw_sjbzcl.Hide()
        ib_bzcl = false;



        var zxs = dw_dzxx.GetItemNumber(1, "zxs")
        if (zxs == null && zxs == 0) {
            if (dw_hwxx.RowCount() > 0) {
                zxs = dw_hwxx.GetItemNumber(1, "jlsl_sum")
                dw_dzxx.SetItem(1, "zxs", zxs)
            };
        };


        var zmz = dw_dzxx.GetItemNumber(1, "zmz")
        if (zmz == null || zmz == 0) {
            if (dw_hwxx.RowCount() > 0) {
                zmz = dw_hwxx.GetItemNumber(1, "zmz_sum")
                dw_dzxx.SetItem(1, "zmz", zmz)
            };
        };


        var zjz = dw_dzxx.GetItemNumber(1, "zjz")
        if (zjz == null || zjz == 0) {
            if (dw_hwxx.RowCount() > 0) {
                zjz = dw_hwxx.GetItemNumber(1, "zjz_sum")
                dw_dzxx.SetItem(1, "zjz", zjz)
            };
        };

        var dw_dzxx_data = dw_dzxx.GetChanges();
        var dw_hwxx_data = dw_hwxx.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_hgfsdz_data = dw_hgfsdz.GetChanges();
        var dw_jyjyxydz_data = dw_jyjyxydz.GetChanges();
        var dw_qyzz_data = dw_qyzz.GetChanges();
        var dw_syrxx_data = dw_syrxx.GetChanges();
        var dw_sjsfdj_data = dw_sjsfdj.GetChanges();
        var dw_sjzs_data = dw_sjzs.GetChanges();
        var dw_sjbzcl_data = dw_sjbzcl.GetChanges();


        if (dw_dzxx_data == "" && dw_hwxx_data == "" && dw_jzxxx_data == "" && dw_hgfsdz_data == "" && dw_jyjyxydz_data == "" && dw_qyzz_data == "" && dw_syrxx_data == "" && dw_sjsfdj_data == "" && dw_sjzs_data == "" && dw_sjbzcl_data == "")
            return;
        //执行保存的WebService

        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_dzxx=" + dw_dzxx_data + "&dw_hwxx=" + dw_hwxx_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_hgfsdz=" + dw_hgfsdz_data + "&dw_jyjyxydz=" + dw_jyjyxydz_data + "&dw_qyzz=" + dw_qyzz_data + "&dw_syrxx=" + dw_syrxx_data + "&dw_sjsfdj=" + dw_sjsfdj_data + "&dw_sjzs=" + dw_sjzs_data + "&dw_sjbzcl=" + dw_sjbzcl_data + "&ywbh=" + ywbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            ywbh = webReq.ResponseText();
            dw_dzxx.SetItem(1, "ywbh", ywbh);

            var hth = dw_dzxx.GetItemString(1, "hth")
            if (hth == "" || hth == null) {
                dw_dzxx.SetItem(1, "hth", ywbh)
            };



            for (row = 1; row <= dw_hwxx.RowCount(); row++) {
                dw_hwxx.SetItem(row, "ywbh", ywbh);
                dw_hwxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "ywbh", ywbh);
                dw_jzxxx.SetItem(row, "cxh", row);
            }


            for (row = 1; row <= dw_hgfsdz.RowCount(); row++) {
                dw_hgfsdz.SetItem(row, "ywbh", ywbh);
                dw_hgfsdz.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_jyjyxydz.RowCount(); row++) {
                dw_jyjyxydz.SetItem(row, "ywbh", ywbh);
                dw_jyjyxydz.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_qyzz.RowCount(); row++) {
                dw_qyzz.SetItem(row, "ywbh", ywbh);
                dw_qyzz.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_syrxx.RowCount(); row++) {
                dw_syrxx.SetItem(row, "ywbh", ywbh);
                dw_syrxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_sjsfdj.RowCount(); row++) {
                dw_sjsfdj.SetItem(row, "ywbh", ywbh);
                dw_sjsfdj.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_sjzs.RowCount(); row++) {
                dw_sjzs.SetItem(row, "ywbh", ywbh);
                dw_sjzs.SetItem(row, "cxh", row);
            }


            for (row = 1; row <= dw_sjbzcl.RowCount(); row++) {
                dw_sjbzcl.SetItem(row, "ywbh", ywbh);
                dw_sjbzcl.SetItem(row, "cxh", row);
            }

           


            dw_dzxx.ResetUpdate();
            dw_hwxx.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_hgfsdz.ResetUpdate();
            dw_jyjyxydz.ResetUpdate();
            dw_qyzz.ResetUpdate();
            dw_syrxx.ResetUpdate();
            dw_sjsfdj.ResetUpdate();
            dw_sjzs.ResetUpdate();
            dw_sjbzcl.ResetUpdate();
 
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_dzxx.Modify("ywbh.Tabsequence=0");
            return 1
            //dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_dzxx.SetFocus();
        }
    }
    //#endregion


    //#region 插入商品
    this.InsertRow = function () {

        
            var row = lastdw.InsertRow(dw_fsdz.GetRow());
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
        
    }
    //#endregion


   


    
    //#region 新建
    this.Add = function () {
        dw_dzxx.Reset();
        dw_dzxx.InsertRow(0);
       
 
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
        
 
        dw_dzxx.SetItem(1, 'zbr', userid);
        dw_dzxx.SetItem(1, 'jcgzry', userid);

        dw_dzxx.SetItem(1, 'dlwtf', Dlwtf);
         
        self.SetEditMode("new");

        var zmyhl = QsWebSoft.PubMethod.Wb2Usd("USD").value;
        dw_dzxx.SetItem(1, "wbbb", "USD")
        dw_dzxx.SetItem(1, "zmyhl", zmyhl)


         
       var li_insert =  dw_hgfsdz.InsertRow(0);
       dw_hgfsdz.SetItem(li_insert, "dzdm", "Y")

    }
    //#endregion


     

    //#region dw_dzxx弹出选择
    this.dw_dzxx_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

      

        if (dwoName == "xhgq_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "mt";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_dzxx);
            iw_Wldw_Select.SetData("hddz_xhgq");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_dzxx.SetFocus();
        }

        if (dwoName == "qyg_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_dzxx);
            iw_Eport_Select.SetData("qyg");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_dzxx.SetFocus();
        }

        if (dwoName == "zzgk_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_dzxx);
            iw_Eport_Select.SetData("zzgk");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_dzxx.SetFocus();
        }




       

        if (dwoName == "ycd_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_dzxx);
            iw_Country_Select.SetData("ycd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_dzxx.SetFocus();

        }

        if (dwoName == "qiyunguo_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_dzxx);
            iw_Country_Select.SetData("qiyunguo");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_dzxx.SetFocus();

        }


       

    }
    //#endregion

    
    //#region dw_dzxx弹出选择
    this.dw_dzxx_ButtonClicked = function (Row, dwoName) { 
        if (editMode == "show")
            return; 
        if (dwoName == "b_yfqk") { 
            dw_dzxx.SetItem(1, "yfbj", "")
        }
        if (dwoName == "b_bxfqk") {
            dw_dzxx.SetItem(1, "bxfbj", "")
            dw_dzxx.SetItem(1, "bxfbb", "")
            dw_dzxx.SetItem(1, "bxfje", parseFloat(null))
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



    //#region dw_dzxx ItemChanged
    this.dw_dzxx_ItemChanged = function (row, dwoName, data) {

             

        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            if (zusdhl == null || zusdhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
            }

            dw_dzxx.SetItem(1, "zmyhl", zusdhl);
            self.SetZje();
        }

      

        //单证类型和进出口标志一致
        if (dwoName == "dzlx") {
             dw_dzxx.SetItem(row, "jckbz", data);
        }

         

    }
    //#endregion


    //#region dw_dzxx EditChanged
    this.dw_dzxx_EditChanged = function (row, dwoName, data) {

        dw_dzxx.AcceptText();
        if (dwoName == "ckka") {
            dw_dzxx.GetChild(dwoName, dwc);
            if (data != "") {
                dwc.Retrieve("%" + data + "%");
            }
            else {
                dwc.Retrieve("%");
            }
        }
        
    }
    //#endregion



    //#region dw_hwxx ItemChanged
    this.dw_hwxx_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jlsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_hwxx.GetItemNumber(row, "zj")
            var ldc_djjg = ldc_zj / data;
            var ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
            dw_hwxx.SetItem(row, "djjg", ldc_djjg);
            self.SetZje();
            self.CacluMjztj(row);
        }

        else if (dwoName == "zj") {
            if (data < 0) {
                alert("总价不能小于0,请重新输入!");
                return 1;
            }
            var ldc_jlsl = dw_hwxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (data / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_hwxx.SetItem(row, "djjg", ldc_djjg);
            }

            ldc_zmz = dw_hwxx.GetItemNumber(row, "zmz")
            if (ldc_zmz != null && ldc_zmz != 0) {
                var ldc_dj = (data / ldc_zmz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_hwxx.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
        }

        else if (dwoName == "zmz" || dwoName == "zjz") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_hwxx.GetItemNumber(row, "zj")
            if (ldc_zj != null || ldc_zj != 0) {
                ldc_dj = (ldc_zj / data);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_hwxx.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
            self.CacluMjztj(row);

        }

        if (  dwoName == "zjz"){
            dw_hwxx.SetItem(row, "fdsl", dec(data));
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
    this.dw_hgfsdz_Clicked = function (xPos, yPos, Row, dwoName) {
         

        dw_hgfsdz.SetFocus();

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



    //#region dw_hwxx_Clicked
    this.dw_hwxx_Clicked = function (xPos, yPos, Row, dwoName, Data) {

        dw_spdhsr.ScrollToRow(Row);
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

        if (lastdw.GetName() == 'dw_hwxx') {
            ll_row_from = dw_hwxx.GetRow();
            ll_row_count = dw_hwxx.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_hwxx.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_hwxx.SetRedraw(false);
            dw_hwxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_hwxx, ll_row_to, DWBUFFER.Primary);
            dw_hwxx.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_hwxx.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_hwxx.ScrollToRow(ll_row_count);
            }

            if (dw_hwxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_hwxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
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

        if (lastdw.GetName() == 'dw_hwxx') {
            ll_row_from = dw_hwxx.GetRow();
            ll_row_count = dw_hwxx.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from - 1;
            }
            else {
                ll_row_to = 1;
            }

            dw_hwxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_hwxx, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1) {
                dw_hwxx.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_hwxx.ScrollToRow(1);
            }

            if (dw_hwxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_hwxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

    }
    //#endregion

//#region dw_dzxx entertotab
    this.dw_dzxx_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    //#region SetZje
    this.SetZje = function () {
        dw_hwxx.AcceptText();
        dw_dzxx.AcceptText();
        if (dw_hwxx.RowCount() > 0) {
            ldc_zj_sum = dw_hwxx.GetItemNumber(1, "zj_sum");
            ldc_zj_sum = parseFloat(ldc_zj_sum.toFixed(2));
        }
        else {
            ldc_zj_sum = 0;
        };
        dw_hwxx.SetItem(1, "zje", ldc_zj_sum);
        var ldc_zmyhl = dw_hwxx.GetItemNumber(1, "zmyhl");
        var ldc_zmyje = ldc_zj_sum * ldc_zmyhl;
        ldc_zmyje = parseFloat(ldc_zmyje.toFixed(2));
        dw_hwxx.SetItem(1, 'zmyje', ldc_zmyje);

    }
    //#endregion

    //#region CacluMjztj
    this.CacluMjztj = function (row) {
        dw_hwxx.AcceptText();
        var ldc_jlsl = dw_hwxx.GetItemNumber(row, "jlsl");
        //计算毛重、净重
        var ldc_zmz = dw_hwxx.GetItemNumber(row, "zmz");
        var ldc_zjz = dw_hwxx.GetItemNumber(row, "zjz");

        if (ldc_jlsl > 0 && ldc_zmz > 0) {
            var ldc_djmz = ldc_zmz / ldc_jlsl;
            ldc_djmz = parseFloat(ldc_djmz.toFixed(4));
            dw_hwxx.SetItem(row, "djmz", ldc_djmz);
        }
        if (ldc_jlsl > 0 && ldc_zjz > 0) {
            var ldc_djjz = ldc_zjz / ldc_jlsl;
            ldc_djjz = parseFloat(ldc_djjz.toFixed(4));
            dw_hwxx.SetItem(row, "djjz", ldc_djjz);
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
            dw_dzxx.SetFocus()
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
            dw_hwxx.SetFocus()
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
            dw_jzxxx.SetFocus()

        }

        if (tab_1.GetSelectedTab() == 4) {
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
            dw_hgfsdz.SetFocus()

        }

        if (tab_1.GetSelectedTab() == 5) {
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
            dw_jyjyxydz.SetFocus()

        }
        if (tab_1.GetSelectedTab() == 6) {
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
            dw_qyzz.SetFocus()

        }
        if (tab_1.GetSelectedTab() == 7) {
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
            dw_syrxx.SetFocus()

        }
      
    };
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzYtjkEdit2018", "dw_hddz_ytjk_edit2018");
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_hwxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzYtjkEdit2018", "dw_hddz_ytjk_edit2018_spxx");
        self.Retrieve();
    }
    //#endregion



    //#region 恢复默认列
    this.Recover_jzxxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzYtjkEdit2018", "dw_hddz_ytjk_edit2018_jzxxx");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_hgfsdz = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzYtjkEdit2018", "dw_hddz_ytjk_edit2018_fsdz");
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_jyjyxydz = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzYtjkEdit2018", "dw_hddz_ytjk_edit2018_jyjyxydz");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_qyzz = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzYtjkEdit2018", "dw_hddz_ytjk_edit2018_qyzz");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_syrxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzYtjkEdit2018", "dw_hddz_ytjk_edit2018_syrxx");
        self.Retrieve();
    }
    //#endregion



    //#region 获得字段焦点
    this.dw_dzxx_RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_hwxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_jzxxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_hgfsdz = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown_jyjyxydz = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_qyzz = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_syrxx = function (dwo, xPos, yPos, Row, dwoName) {
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
        var row =  dw_dzxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_dzxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_dzxx.GetItemString(dw_dzxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_dzxx.GetItemDate(dw_dzxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_dzxx.GetItemNumber(dw_dzxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_hwxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_hwxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_hwxx.GetItemString(dw_hwxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_hwxx.GetItemDate(dw_hwxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_hwxx.GetItemNumber(dw_hwxx.GetRow(), cloname);
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
        zfc = zfc.replace(/'/g, "&apos;")
        zfc = zfc.replace(/"/g, "&quot;")
        return zfc;
    }
    //#endregion


    //数据导出
    this.Ytsjfs = function ()
    {
        dw_dzxx.AcceptText()
        var fsfxtid = "3111980075"
        var jkbh = "";
        jkbh = QsWebSoft.PubMethod.GetYtsjjkbh().value;
        if ( jkbh != null )
        {
            jkbh += 1;
            QsWebSoft.PubMethod.Addytsjjkbh_master( jkbh ).value;
        }

        var ywlx = dw_dzxx.GetItemString( 1, "ywbh" );

        if ( ywlx != null )
        {
            var str1 = "ywbh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ywlx );
        }

        var sjylx = "10"
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
        var ytsjfszt = dw_dzxx.GetItemString( 1, "ytsjfszt" );
        if ( ytsjfszt == "Y" )
        {
            if ( requestor.MessageBox( "提示", "本票已经发送过，是否再发送?", ICON.Question, BUTTON.YesNo ) == 2 )
                return;
            dw_dzxx.SetItem( 1, "ytsjfszt", "N" );
        };

        if ( ytsjfszt != null )
        {
            var str1 = "ytsjfszt";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ytsjfszt );
        }

        var date_fssj = new Date();
        dw_dzxx.SetItem( 1, "ytjkfssj", date_fssj.getVarDate() );
        var ytjkfscs = dw_dzxx.GetItemNumber( 1, "ytjkfscs" );
        if ( ytjkfscs == null || ytjkfscs == 0 )
        {
            ytjkfscs = 1
        } else
        {
            ytjkfscs = ytjkfscs + 1
        }
        dw_dzxx.SetItem( 1, "ytjkfscs", ytjkfscs );

        if ( ytjkfscs != null )
        {
            var str1 = "ytjkfscs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int( jkbh, str1, ytjkfscs );
        }

        var sj = nf.toString() + yf.toString() + rq.toString() + hh.toString() + mm.toString() + ss.toString();
        var dqrq = nf.toString() + '-' + yf.toString() + '-' + rq.toString()
        var filename = "EMVS_EP_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC";
        var fileFullPath = "E:\\XML\\EMVS_EP_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC";
        dw_dzxx.SetItem( 1, "ytjkwjbh", filename );
        var content = '<?xml version="1.0" encoding="UTF-8"?>';
        content += '\n<Message_Data>';
        content += '\n  <project_id/>';
        content += '\n  <project_ver/>';
        content += '\n  <Message_Head>';
        var ywbh = dw_dzxx.GetItemString( 1, "ywbh" );
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
        var EP15212 = dw_dzxx.GetItemString( 1, "ep15212" );
        if ( EP15212 == "Y" )
        {
            user_info = "EP15212"
        };

        if ( EP15212 != null )
        {
            var str1 = "ep15212";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, EP15212 );
        }

        var EP14514 = dw_dzxx.GetItemString( 1, "EP14514" );
        if ( EP14514 == "Y" )
        {
            if ( user_info == "" )
            {
                user_info = "EP14514"
            }
            else
            {
                user_info = user_info + ",EP14514"
            }
        };

        if ( EP14514 != null )
        {
            var str1 = "EP14514";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, EP14514 );
        }

        var EP26040 = dw_dzxx.GetItemString(1, "EP26040");
        if (EP26040 == "Y") {
            if (user_info == "") {
                user_info = "EP26040"
            }
            else {
                user_info = user_info + ",EP26040"
            }
        };

        if (EP26040 != null) {
            var str1 = "EP26040";
            QsWebSoft.PubMethod.Updateytsjjkbh_master(jkbh, str1, EP26040);
        }

        var EP14515 = dw_dzxx.GetItemString( 1, "EP14515" );
        if ( EP14515 == "Y" )
        {
            if ( user_info == "" )
            {
                user_info = "EP14515"
            }
            else
            {
                user_info = user_info + ",EP14515"
            }
        };

        if ( EP14515 != null )
        {
            var str1 = "EP14515";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, EP14515 );
        }

        var EP14516 = dw_dzxx.GetItemString( 1, "EP14516" );
        if ( EP14516 == "Y" )
        {
            if ( user_info == "" )
            {
                user_info = "EP14516"
            }
            else
            {
                user_info = user_info + ",EP14516"
            }
        };

        if ( EP14516 != null )
        {
            var str1 = "EP14516";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, EP14516 );
        }


        var EP25461 = dw_dzxx.GetItemString( 1, "EP25461" );
        if ( EP25461 == "Y" )
        {
            if ( user_info == "" )
            {
                user_info = "EP25461"
            }
            else
            {
                user_info = user_info + ",EP25461"
            }
        };

        if ( EP25461 != null )
        {
            var str1 = "EP25461";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, EP25461 );
        }

        var EP25645 = dw_dzxx.GetItemString( 1, "EP25645" );
        if ( EP25645 == "Y" )
        {
            if ( user_info == "" )
            {
                user_info = "EP25645"
            }
            else
            {
                user_info = user_info + ",EP25645"
            }
        };

        if ( EP25645 != null )
        {
            var str1 = "EP25645";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, EP25645 );
        }

        if ( user_info == "" )
        {
            requestor.MessageBox( "提示", "请选择数据接收的机器用户名！" )
            return
        }

        content += '\n        <USER_INFO>' + user_info + '</USER_INFO>';
        content += '\n        <BIZ_TYPE>1</BIZ_TYPE>';
        content += '\n        <DATA_SOURCE_TYPE>0</DATA_SOURCE_TYPE>';
        var dzlx = dw_dzxx.GetItemString( 1, "dzlx" );
        if ( dzlx == null )
        {
            requestor.MessageBox( "提示", "请输入单证类型！" )
            return
        }

        if ( dzlx != null )
        {
            var str1 = "dzlx";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, dzlx );
        }

        content += '\n        <DEC_TYPE>' + dzlx + '</DEC_TYPE>';
        var ytjkzt = dw_dzxx.GetItemString( 1, "ytjkzt" )
        if ( ytjkzt == null || ytjkzt == "" )
        {
            dw_dzxx.SetItem( 1, "ytjkzt", "4" )
            ytjkzt = "4"
        } else if ( ytjkzt == "4" || ytjkzt == "5" )
        {
            if ( requestor.MessageBox( "提示", "数据已经产生过，亿通是否接收到，如果未接收到需要重新发送则选择YES，如果已经接收到需要覆盖以前内容则选择NO!", ICON.Question, BUTTON.YesNo ) == 2 )
            {
                dw_dzxx.SetItem( 1, "ytjkzt", "5" )
                ytjkzt = "5"
            }
        };

        if ( ytjkzt != null )
        {
            var str1 = "ytjkzt";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ytjkzt );
        }

        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';
        content += '\n      </PRE_ENTRY_INFO_ITEM>';
        content += '\n    </PRE_ENTRY_INFO_ROOT>';
        content += '\n    <EP_DEC_ROOT>';
        content += '\n      <EP_DEC_HEAD>';
        var bgdh = dw_dzxx.GetItemString( 1, "bgdh" );
        if ( bgdh == null )
        {
            bgdh = "";
        }

        if ( bgdh != null )
        {
            var str1 = "bgdh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, bgdh );
        }

        content += '\n        <PRE_ENTRY_ID>' + bgdh + '</PRE_ENTRY_ID>';
        var jydwqyhgbm = dw_dzxx.GetItemString( 1, "jydwqyhgbm" )
        if ( jydwqyhgbm == null )
        {
            requestor.MessageBox( "提示", "经营单位海关企业代码，不能申报" )
            return;
        }



        if ( jydwtyxydm != null )
        {
            var str1 = "jydwqyhgbm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, jydwqyhgbm );
        }

        content += '\n        <TRADE_CO>' + jydwqyhgbm + '</TRADE_CO>';
        var jydwmc = dw_dzxx.GetItemString( 1, "jydwmc" )
        content += '\n        <TRADE_NAME>' + jydwmc + '</TRADE_NAME>';

        if ( jydwmc != null )
        {
            var str1 = "jydwmc";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, jydwmc );
        }

        var hzdwdqdm = dw_dzxx.GetItemString( 1, "hzdwdqdm" )
        if ( hzdwdqdm == null )
        {
            hzdwdqdm = "";
        }
        content += '\n        <DISTRICT_CODE>' + hzdwdqdm + '</DISTRICT_CODE>';

        if ( hzdwdqdm != null )
        {
            var str1 = "hzdwdqdm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, hzdwdqdm );
        }

        var shdwdm = dw_dzxx.GetItemString( 1, "shdwdm_jsl" );
        if ( shdwdm == null )
        {
            requestor.MessageBox( "提示", "货主单位代码为空，不能申报" )
            return;
        }
        content += '\n        <OWNER_CODE>' + shdwdm + '</OWNER_CODE>';

        if ( shdwdm != null )
        {
            var str1 = "shdwdm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, shdwdm );
        }

        var shdwmc = dw_dzxx.GetItemString( 1, "shdwmc" );
        if ( shdwmc == null )
        {
            shdwmc = "";
        }
        content += '\n        <OWNER_NAME>' + shdwmc + '</OWNER_NAME>';

        if ( shdwmc != null )
        {
            var str1 = "shdwmc";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, shdwmc );
        }

        var sbdwdm = dw_dzxx.GetItemString( 1, "sbdwdm" )
        if ( sbdwdm == null || sbdwdm == "" )
        {
            requestor.MessageBox( "提示", "申报单位代码为空，不能申报" )
            return;
        }

        if ( sbdwdm != null )
        {
            var str1 = "sbdwdm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, sbdwdm );
        }

        content += '\n        <AGENT_CODE>3111980075</AGENT_CODE>';
        var bggsmc = dw_dzxx.GetItemString( 1, "bggsmc" )
        if ( bggsmc == null )
        {
            bggsmc = "";
        }
        content += '\n        <AGENT_NAME>' + bggsmc + '</AGENT_NAME>';

        if ( bggsmc != null )
        {
            var str1 = "bggsmc";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, bggsmc );
        }

        var ysfs = dw_dzxx.GetItemString( 1, "ysfs" )
        var ysfsbm = "";
        if ( ysfs != null )
        {
            var str1 = "ysfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ysfs );
            ysfsbm = QsWebSoft.PubMethod.ReadYsfsbm( ysfs ).value;
        };

        if ( ysfsbm == null )
        {
            ysfsbm = "";
        }
        content += '\n        <TRAF_MODE>' + ysfsbm + '</TRAF_MODE>';
        var jcka = dw_dzxx.GetItemString( 1, "jcka" )
        if ( jcka == null )
        {
            jcka = ""
        }
        content += '\n        <I_E_PORT>' + jcka + '</I_E_PORT>';

        if ( jcka != null )
        {
            var str1 = "jcka";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, jcka );
        }

        var zzgk = dw_dzxx.GetItemString( 1, "zzgk" )
        if ( zzgk != null )
        {
            var str1 = "zzgk";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, zzgk );
        }

        if ( zzgk == null || zzgk == "" )
        {
            var qyg = dw_dzxx.GetItemString( 1, "qyg" )
            if ( qyg != null )
            {
                var str1 = "qyg";
                QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, qyg );
            }

            var qygdm = dw_dzxx.GetItemString( 1, "qygdm" );

            if ( qygdm == null && qyg != null )
            {
                qygdm = QsWebSoft.PubMethod.ReadHggkdm( qyg ).value; ;
            };
            if ( qygdm != null )
            {
                var str1 = "qygdm";
                QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, qygdm );
            }

        } else
        {
            var qyg = dw_dzxx.GetItemString( 1, "zzgk" )

            if ( qyg != null )
            {
                var str1 = "zzgk";
                QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, qyg );
            }

            var qygdm = dw_dzxx.GetItemString( 1, "zzgkdm" );

            if ( qygdm == null && qyg != null )
            {
                qygdm = QsWebSoft.PubMethod.ReadHggkdm( qyg ).value; ;
            };

            if ( qygdm != null )
            {
                var str1 = "zzgkdm";
                QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, qygdm );
            }
        }
        if ( qygdm == null )
        {
            qygdm = ""
        }

        content += '\n        <DISTINATE_PORT>' + qygdm + '</DISTINATE_PORT>';
        var cm = dw_dzxx.GetItemString( 1, "cm_jsl" )
        if ( cm == null )
        {
            cm = ""
        }
        content += '\n        <TRAF_NAME>' + cm + '</TRAF_NAME>';

        if ( cm != null )
        {
            var str1 = "cm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, cm );
        }

        var hth = dw_dzxx.GetItemString( 1, "hth" )
        if ( hth == null )
        {
            hth = ""
        }

        if ( hth != null )
        {
            var str1 = "hth";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, hth );
        }
        hth = self.Replace_tszf( hth );
        content += '\n        <CONTR_NO>' + hth + '</CONTR_NO>';
        content += '\n        <IN_RATIO>0</IN_RATIO>';
        var ztdh = dw_dzxx.GetItemString( 1, "ztdh" )
        if ( ztdh == null )
        {
            ztdh = ""
        }
        content += '\n        <BILL_NO>' + ztdh + '</BILL_NO>';

        if ( ztdh != null )
        {
            var str1 = "ztdh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ztdh );
        }

        var qiyunguo = dw_dzxx.GetItemString( 1, "qiyunguo" )

        if ( qiyunguo != null )
        {
            var str1 = "qiyunguo";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, qiyunguo );
        }

        var qiyunguodm = dw_dzxx.GetItemString( 1, "qiyunguodm" )
        if ( qiyunguodm == null )
        {
            if ( qiyunguo != null )
            {
                qiyunguodm = QsWebSoft.PubMethod.ReadGjdm( qiyunguo ).value;
            }
        };
        if ( qiyunguodm == null )
        {
            qiyunguodm = "";
        }
        if ( qiyunguodm != null )
        {
            var str1 = "qiyunguodm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, qiyunguodm );
        }
        content += '\n        <TRADE_COUNTRY>' + qiyunguodm + '</TRADE_COUNTRY>';
        var myfs = dw_dzxx.GetItemString( 1, "myfs" )
        if ( myfs == null )
        {
            myfs = ""
        }

        if ( myfs != null )
        {
            var str1 = "myfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, myfs );
        }

        content += '\n        <TRADE_MODE>' + myfs + '</TRADE_MODE>';
        var zmfs = dw_dzxx.GetItemString( 1, "zmfs" )
        if ( zmfs == null )
        {
            zmfs = ""
        }

        if ( zmfs != null )
        {
            var str1 = "zmfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, zmfs );
        }

        content += '\n        <CUT_MODE>' + zmfs + '</CUT_MODE>';
        content += '\n        <PAY_MODE>0</PAY_MODE>';
        var jgfs = dw_dzxx.GetItemString( 1, "jgfs" )
        var jgtkdm = QsWebSoft.PubMethod.ReadJgtk( jgfs ).value; ;
        if ( jgtkdm == null )
        {
            jgtkdm = ""
        }

        if ( jgfs != null )
        {
            var str1 = "jgfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, jgfs );
        }

        content += '\n        <TRANS_MODE>' + jgtkdm + '</TRANS_MODE>';
        content += '\n        <PAY_WAY></PAY_WAY>';
        var yfbj = dw_dzxx.GetItemString( 1, "yfbj" )
        if ( yfbj == null || jgtkdm == "CRF" || jgtkdm == "CNF" )
        {
            yfbj = ""
        }

        if ( yfbj != null )
        {
            var str1 = "yfbj";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, yfbj );
        }

        content += '\n        <FEE_MARK>' + yfbj + '</FEE_MARK>';
        var yfbb = dw_dzxx.GetItemString( 1, "kpbz" )
        var yfbbdm = "";
        if ( yfbb != null || jgtkdm == "CRF" )
        {
            var str1 = "kpbz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, yfbb );
            yfbbdm = QsWebSoft.PubMethod.ReadBbdm( yfbb ).value; ;
        };

        if ( yfbbdm == null )
        {
            yfbbdm = ""
        }

        content += '\n        <FEE_CURR>' + yfbbdm + '</FEE_CURR>';
        var yfje = dw_dzxx.GetItemNumber( 1, "kpje" )
        if ( yfje == null || yfje == 0 )
        {
            content += '\n        <FEE_RATE></FEE_RATE>';
        } else
        {
            content += '\n        <FEE_RATE>' + yfje + '</FEE_RATE>';
        }

        if ( yfje != null )
        {
            var str1 = "kpje";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int( jkbh, str1, yfje );
        }

        content += '\n        <OTHER_MARK></OTHER_MARK>';
        content += '\n        <OTHER_CURR></OTHER_CURR>';
        content += '\n        <OTHER_RATE></OTHER_RATE>';
        var bxfbj = dw_dzxx.GetItemString( 1, "bxfbj" )
        if ( bxfbj == null )
        {
            bxfbj = ""
        }

        if ( bxfbj != null )
        {
            var str1 = "bxfbj";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, bxfbj );
        }

        content += '\n        <INSUR_MARK>' + bxfbj + '</INSUR_MARK>';
        var bxfbb = dw_dzxx.GetItemString( 1, "bxfbb" )
        var bxfbbdm = "";
        if ( bxfbb != null )
        {
            var str1 = "bxfbb";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, bxfbb );
            bxfbbdm = QsWebSoft.PubMethod.ReadBbdm( bxfbb ).value; ;
        };
        if ( bxfbbdm == null )
        {
            bxfbbdm = ""
        }

        content += '\n        <INSUR_CURR>' + bxfbbdm + '</INSUR_CURR>';
        var bxfje = dw_dzxx.GetItemNumber( 1, "bxfje" )
        if ( bxfje == null || bxfje == 0 )
        {

            content += '\n        <INSUR_RATE></INSUR_RATE>';
        } else
        {
            content += '\n        <INSUR_RATE>' + bxfje + '</INSUR_RATE>';
        }

        if ( bxfje != null )
        {
            var str1 = "bxfje";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int( jkbh, str1, bxfje );
        }

        var zxs = dw_dzxx.GetItemNumber( 1, "zxs" )
        if ( zxs == null )
        {
            zxs = 0;
        }

        if ( zxs != null )
        {
            var str1 = "zxs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int( jkbh, str1, zxs );
        }

        content += '\n        <PACK_NO>' + zxs + '</PACK_NO>';
        var zmz = dw_dzxx.GetItemNumber( 1, "zmz" )
        zmz = parseFloat( zmz.toFixed( 4 ) );
        if ( zmz == null )
        {
            zmz = 0;
        }

        if ( zmz != null )
        {
            var str1 = "zmz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int( jkbh, str1, zmz );
        }

        content += '\n        <GROSS_WT>' + zmz.toFixed( 3 ) + '</GROSS_WT>';
        var zjz = dw_dzxx.GetItemNumber( 1, "zjz" )
        zjz = parseFloat( zjz.toFixed( 4 ) );
        if ( zjz == null )
        {
            zjz = 0;
        }

        if ( zjz != null )
        {
            var str1 = "zjz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master_int( jkbh, str1, zjz );
        }

        content += '\n        <NET_WT>' + zjz.toFixed( 3 ) + '</NET_WT>';
        content += '\n        <LICENSE_NO></LICENSE_NO>';
        content += '\n        <APPR_NO></APPR_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';

        content += '\n        <I_E_DATE>' + dqrq + '</I_E_DATE>';
        var bzzl = dw_dzxx.GetItemString( 1, "bzzl" )
        if ( bzzl == null )
        {
            bzzl = "";
        }

        if ( bzzl != null )
        {
            var str1 = "bzzl";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, bzzl );
        }

        content += '\n        <WRAP_TYPE>' + bzzl + '</WRAP_TYPE>';
        var ytbz = dw_dzxx.GetItemString( 1, "ytbz" );
        ytbz = self.Replace_tszf( ytbz );
        if ( ytbz == null )
        {
            ytbz = "";
        }

        if ( ytbz != null )
        {
            var str1 = "ytbz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ytbz );
        }

        content += '\n        <NOTE_S>' + ytbz + '</NOTE_S>';
        content += '\n        <D_DATE>' + dqrq + '</D_DATE>';

        content += '\n        <EX_SOURCE></EX_SOURCE>';
        var hcorhbh = dw_dzxx.GetItemString( 1, "hcorhbh_jsl" )
        if ( hcorhbh == null )
        {
            hcorhbh = "";
        }

        if ( hcorhbh != null )
        {
            var str1 = "hcorhbh";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, hcorhbh );
        }

        content += '\n        <VOYAGE_NO>' + hcorhbh + '</VOYAGE_NO>';
        var jckbz = dw_dzxx.GetItemString( 1, "jckbz" )
        if ( jckbz == null )
        {
            jckbz = "";
        }
        content += '\n        <IE_FLAG>' + jckbz + '</IE_FLAG>';

        if ( jckbz != null )
        {
            var str1 = "jckbz";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, jckbz );
        }

        content += '\n        <PRDTID></PRDTID>';
        content += '\n        <STORENO></STORENO>';
        content += '\n        <RAMANUALNO></RAMANUALNO>';
        content += '\n        <RADECLNO></RADECLNO>';
        var ytjkzt = dw_dzxx.GetItemString( 1, "ytjkzt" )
        if ( ytjkzt == null )
        {
            ytjkzt = "";
        }
        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';

        if ( ytjkzt != null )
        {
            var str1 = "ytjkzt";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ytjkzt );
        }

        content += '\n        <MEMO></MEMO>';

        var jydwtyxydm = dw_dzxx.GetItemString( 1, "jydwtyxydm" );
        if ( jydwtyxydm == null )
        {
            jydwtyxydm = "";
        }
        content += '\n        <TRADE_CO_SCC>' + jydwtyxydm + '</TRADE_CO_SCC>'; //经营单位

        if ( jydwtyxydm != null )
        {
            var str1 = "jydwtyxydm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, jydwtyxydm );
        }

        var sbdwtyxydm = dw_dzxx.GetItemString( 1, "sbdwtyxydm" );
        if ( sbdwtyxydm == null )
        {
            sbdwtyxydm = "";
        }
        content += '\n        <AGENT_CODE_SCC>' + sbdwtyxydm + '</AGENT_CODE_SCC>'; //申报单位

        if ( sbdwtyxydm != null )
        {
            var str1 = "sbdwtyxydm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, sbdwtyxydm );
        }

        var shdwtyxydm = dw_dzxx.GetItemString( 1, "shdwtyxydm" );
        if ( shdwtyxydm == null )
        {
            shdwtyxydm = "";
        }

        if ( shdwtyxydm.length == 18 )
        {
            content += '\n        <OWNER_CODE_SCC>' + shdwtyxydm + '</OWNER_CODE_SCC>'; //货主单位
        } else
        {
            content += '\n        <OWNER_CODE_SCC></OWNER_CODE_SCC>'; //货主单位
        }

        if ( shdwtyxydm != null )
        {
            var str1 = "shdwtyxydm";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, shdwtyxydm );
        }

        var mygb = dw_dzxx.GetItemString( 1, "mygb" )
        if ( mygb != null )
        {
            var str1 = "mygb";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, mygb );
            mygb = QsWebSoft.PubMethod.ReadGjdm( mygb ).value;
        };

        if ( mygb == null )
        {
            mygb = "";
        }

        content += '\n        <TRADE_AREA_CODE>' + mygb + '</TRADE_AREA_CODE>';
        var decl_port = dw_dzxx.GetItemString( 1, "jcka" )
        if ( decl_port == null )
        {
            decl_port = ""
        }

        if ( decl_port != null )
        {
            var str1 = "jcka";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, decl_port );
        }

        content += '\n        <DECL_PORT>' + decl_port + '</DECL_PORT>';
        content += '\n        <EDI_NO></EDI_NO>';
        content += '\n        <PROMISE_ITMES></PROMISE_ITMES>';
        var jwgysbm = dw_dzxx.GetItemString( 1, "jwgysbm" );
        if ( jwgysbm == null )
        {
            jwgysbm = "";
        }
        jwgysbm = self.Replace_tszf( jwgysbm );
        content += '\n        <OverseasConsignorCode>' + jwgysbm + '</OverseasConsignorCode>';
        var jwfhrmc_yw = dw_dzxx.GetItemString( 1, "jwfhrmc_yw" );
        if ( jwfhrmc_yw == null )
        {
            jwfhrmc_yw = "";
        }
        jwfhrmc_yw = self.Replace_tszf( jwfhrmc_yw );
        content += '\n        <OverseasConsignorEname>' + jwfhrmc_yw + '</OverseasConsignorEname>';

        content += '\n        <OverseasConsigneeCode></OverseasConsigneeCode>';
        content += '\n        <OverseasConsigneeEname></OverseasConsigneeEname>';

        var qiyunguo_rj = dw_dzxx.GetItemString( 1, "qiyunguo_rj" );
        if ( qiyunguo_rj == null )
        {
            qiyunguo_rj = "";
        }
        qiyunguo_rj = self.Replace_tszf( qiyunguo_rj );
        content += '\n        <TradeCountryStd>' + qiyunguo_rj + '</TradeCountryStd>';
        var ycddm_new = dw_dzxx.GetItemString( 1, "ycddm_new" );
        if ( ycddm_new == null )
        {
            ycddm_new = "";
        }                    
        content += '\n        <TradeAreaCodeStd>' + ycddm_new + '</TradeAreaCodeStd>';

        var zzgkdm = dw_dzxx.GetItemString( 1, "zzgkdm" );
        if ( zzgkdm == null )
        {
            zzgkdm = "";
        }

        content += '\n        <DistinatePortStd>' + zzgkdm + '</DistinatePortStd>';
        var ysfs = dw_dzxx.GetItemString( 1, "ysfs" )
        var ysfsbm = "";
        if ( ysfs != null )
        {
            var str1 = "ysfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ysfs );
            ysfsbm = QsWebSoft.PubMethod.ReadYsfsbm( ysfs ).value;
        };

        if ( ysfsbm == null )
        {
            ysfsbm = "";
        }
        content += '\n        <TrafModeStd>' + ysfsbm + '</TrafModeStd>';
        var myfs = dw_dzxx.GetItemString( 1, "myfs" )
        if ( myfs == null )
        {
            myfs = ""
        }

        if ( myfs != null )
        {
            var str1 = "myfs";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, myfs );
        }
        content += '\n        <TradeModeStd>' + myfs + '</TradeModeStd>';
        var kpbz = dw_dzxx.GetItemString( 1, "kpbz" )
        if ( kpbz == null )
        {
            kpbz = ""
        }
        content += '\n        <FeeCurrStd>' + kpbz + '</FeeCurrStd>';

        var bxfbb = dw_dzxx.GetItemString( 1, "bxfbb" )
        if ( bxfbb == null )
        {
            bxfbb = ""
        }
        content += '\n        <InsurCurrStd>' + bxfbb + '</InsurCurrStd>';

        content += '\n        <OtherCurrStd></OtherCurrStd>';
        content += '\n        <WrapTypeStd></WrapTypeStd>';
        var mt = dw_dzxx.GetItemString( 1, "mt" )
        if ( mt == null )
        {
            mt = ""
        }

        content += '\n        <MarkNo>' + mt + '</MarkNo>';
        var hggkdm2018 = dw_dzxx.GetItemString( 1, "hggkdm2018" )
        if ( hggkdm2018 == null )
        {
            hggkdm2018 = ""
        }
        content += '\n        <DespPortCode>' + hggkdm2018 + '</DespPortCode>';
        var xrjrjkadm = dw_dzxx.GetItemString( 1, "xrjrjkadm" )
        if ( xrjrjkadm == null )
        {
            xrjrjkadm = ""
        }
        content += '\n        <EntyPortCode>' + xrjrjkadm + '</EntyPortCode>';
        var hwcfd = dw_dzxx.GetItemString( 1, "hwcfd" )
        if ( hwcfd == null )
        {
            hwcfd = ""
        }
        hwcfd = self.Replace_tszf( hwcfd );
        content += '\n        <GoodsPlace>' + hwcfd + '</GoodsPlace>';
        var ztdh = dw_dzxx.GetItemString( 1, "ztdh" )
        if ( ztdh == null )
        {
            ztdh = ""
        }
        content += '\n        <BLNo>' + ztdh + '</BLNo>';

        var kajyjyjg = dw_dzxx.GetItemString( 1, "kajyjyjg" )
        if ( kajyjyjg == null )
        {
            kajyjyjg = ""
        }
        content += '\n        <InspOrgCode>' + kajyjyjg + '</InspOrgCode>';
        content += '\n        <SpecDeclFlag></SpecDeclFlag>';

        var mddjyjyjg = dw_dzxx.GetItemString( 1, "mddjyjyjg" )
        if ( mddjyjyjg == null )
        {
            mddjyjyjg = ""
        }
        content += '\n        <PurpOrgCode>' + mddjyjyjg + '</PurpOrgCode>';
        var zcrq_jsl = dw_dzxx.GetItemString( 1, "zcrq_jsl" )
        if ( zcrq_jsl == null )
        {
            zcrq_jsl = ""
        }
        content += '\n        <DespDate>' + zcrq_jsl + '</DespDate>';
        content += '\n        <CmplDschrgDt></CmplDschrgDt>';
        content += '\n        <CorrelationReasonFlag></CorrelationReasonFlag>';
        var lzjg = dw_dzxx.GetItemString( 1, "lzjg" )
        if ( lzjg == null )
        {
            lzjg = ""
        }
        content += '\n        <VsaOrgCode>' + lzjg + '</VsaOrgCode>';
        var yjzxbs = dw_dzxx.GetItemString( 1, "yjzxbs" )
        if ( yjzxbs == null )
        {
            yjzxbs = "0"
        }
        content += '\n        <OrigBoxFlag>' + yjzxbs + '</OrigBoxFlag>';
        var bjgslxr = dw_dzxx.GetItemString( 1, "bjgslxr" )
        if ( bjgslxr == null )
        {
            bjgslxr = ""
        }
        content += '\n        <DeclareName>' + bjgslxr + '</DeclareName>';
        content += '\n        <NoOtherPack></NoOtherPack>';
        var jyjysljg = dw_dzxx.GetItemString( 1, "jyjysljg" )
        if ( jyjysljg == null )
        {
            jyjysljg = ""
        }
        content += '\n        <OrgCode>' + jyjysljg + '</OrgCode>';
        var jwfhrmc_yw = dw_dzxx.GetItemString( 1, "jwfhrmc_yw" );
        if ( jwfhrmc_yw == null )
        {
            jwfhrmc_yw = "";
        }
        jwfhrmc_yw = self.Replace_tszf( jwfhrmc_yw );
        content += '\n        <OverseasConsignorCname>' + jwfhrmc_yw + '</OverseasConsignorCname>';
        var jwgysdz = dw_dzxx.GetItemString( 1, "jwgysdz" );
        if ( jwgysdz == null )
        {
            jwgysdz = "";
        }
        jwgysdz = self.Replace_tszf( jwgysdz );
        content += '\n        <OverseasConsignorAddr></OverseasConsignorAddr>';

        var jydwmc = dw_dzxx.GetItemString( 1, "jydwmc" );
        if ( jydwmc == null )
        {
            jydwmc = "";
        }
        jydwmc = self.Replace_tszf( jydwmc );
        content += '\n        <DomesticConsigneeEname>' + jydwmc + '</DomesticConsigneeEname>';

        content += '\n        <CorrelationNo></CorrelationNo>';
        var jydwsjjgdm = dw_dzxx.GetItemString( 1, "jydwsjjgdm" );
        if ( jydwsjjgdm == null )
        {
            jydwsjjgdm = "";
        }
        content += '\n        <TradeCiqCode>' + jydwsjjgdm + '</TradeCiqCode>';


        content += '\n        <OwnerCiqCode>NO</OwnerCiqCode>';
        var bjgssjjgdm = dw_dzxx.GetItemString( 1, "bjgssjjgdm" );
        if ( bjgssjjgdm == null )
        {
            bjgssjjgdm = "";
        }
        content += '\n        <DeclCiqCode>' + bjgssjjgdm + '</DeclCiqCode>';

        content += '\n      </EP_DEC_HEAD>';

        var spxx_row = dw_hwxx.RowCount();
        content += '\n      <EP_DEC_LIST COUNT="' + spxx_row + '">';


        var wbbb = dw_dzxx.GetItemString( 1, "wbbb" )
        var wbbbdm = "";
        if ( wbbb != null )
        {
            var str1 = "wbbb";
            QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, wbbb );
            wbbbdm = QsWebSoft.PubMethod.ReadBbdm( wbbb ).value; ;
        };
        if ( wbbbdm == null )
        {
            wbbbdm = ""
        }

        var newrow = 0;
        for ( row = 1; row <= dw_hwxx.RowCount(); row++ )
        {
            var cxh = dw_hwxx.GetItemNumber( row, "cxh" );
            QsWebSoft.PubMethod.Addytsjjkbh_spxx( jkbh, cxh );
            content += '\n        <EP_DEC_LIST_ITEM>';
            newrow = newrow + 1
            content += '\n          <G_NO>' + newrow + '</G_NO>';
            content += '\n          <CONTR_ITEM></CONTR_ITEM>';
            var hgbm = dw_hwxx.GetItemString( row, "hgbm" );
            if ( hgbm == null )
            {
                hgbm = "";
            }

            if ( hgbm != null )
            {
                var str1 = "hgbm";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, hgbm, row );
            }

            content += '\n          <CODE_T>' + hgbm.substr( 0, 8 ) + '</CODE_T>';
            content += '\n          <CODE_S>' + hgbm.substr( 8, 2 ) + '</CODE_S>';
            var spmc = dw_hwxx.GetItemString( row, "spmc" );
            if ( spmc == null )
            {
                spmc = "";
            }

            var spmc_yw = dw_hwxx.GetItemString( row, "spmc_yw" );
            if ( spmc_yw == null )
            {
                spmc_yw = "";
            }
            spmc = self.Replace_tszf( spmc );

            if ( spmc != null )
            {
                var str1 = "spmc";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, spmc, row );
            }

            if ( spmc == null )
            {
                spmc = "";
            }
            spmc_yw = self.Replace_tszf( spmc_yw );

            if ( spmc_yw != null )
            {
                var str1 = "spmc_yw";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, spmc_yw, row );
            }

            if ( spmc_yw == null )
            {
                spmc_yw = "";
            }
            var dmbz = dw_dzxx.GetItemString( 1, "dmbz" );
            //            var str = "";
            //            if (dmbz == "Y") {
            //                str = "(生鲜港)";
            //            }
            content += '\n          <G_NAME>' + spmc + spmc_yw + '</G_NAME>';

            if ( dmbz != null )
            {
                var str1 = "dmbz";
                QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, dmbz );
            }



            var sfysx = dw_hwxx.GetItemString( row, "sfysx" );

            if ( sfysx != null )
            {
                var str1 = "sfysx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfysx, row );
            }

            var sfzy = dw_hwxx.GetItemString( row, "sfzy" );

            if ( sfzy != null )
            {
                var str1 = "sfzy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfzy, row );
            }

            var sfygzfs = dw_hwxx.GetItemString( row, "sfygzfs" );

            if ( sfygzfs != null )
            {
                var str1 = "sfygzfs";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfygzfs, row );
            }

            var sfypz = dw_hwxx.GetItemString( row, "sfypz" );

            if ( sfypz != null )
            {
                var str1 = "sfypz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfypz, row );
            }

            var sfypplx = dw_hwxx.GetItemString( row, "sfypplx" );

            if ( sfypplx != null )
            {
                var str1 = "sfypplx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfypplx, row );
            }

            var sfyckxhqk = dw_hwxx.GetItemString( row, "sfyckxhqk" );

            if ( sfyckxhqk != null )
            {
                var str1 = "sfyckxhqk";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfyckxhqk, row );
            }

            var sfydj = dw_hwxx.GetItemString( row, "sfydj" );

            if ( sfydj != null )
            {
                var str1 = "sfydj";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfydj, row );
            }

            var sfybzgg = dw_hwxx.GetItemString( row, "sfybzgg" );

            if ( sfybzgg != null )
            {
                var str1 = "sfybzgg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfybzgg, row );
            }

            var sfypp = dw_hwxx.GetItemString( row, "sfypp" );

            if ( sfypp != null )
            {
                var str1 = "sfypp";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfypp, row );
            }

            var sfygg = dw_hwxx.GetItemString( row, "sfygg" );

            if ( sfygg != null )
            {
                var str1 = "sfygg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfygg, row );
            }

            var sfycf = dw_hwxx.GetItemString( row, "sfycf" );

            if ( sfycf != null )
            {
                var str1 = "sfycf";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfycf, row );
            }

            var sfyxjgjggy = dw_hwxx.GetItemString( row, "sfyxjgjggy" );

            if ( sfyxjgjggy != null )
            {
                var str1 = "sfyxjgjggy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfyxjgjggy, row );
            }

            var sfyqt = dw_hwxx.GetItemString( row, "sfyqt" );

            if ( sfyqt != null )
            {
                var str1 = "sfyqt";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sfyqt, row );
            }

            var spsx = dw_hwxx.GetItemString( row, "spsx" );
            spsx = self.Replace_tszf( spsx );

            if ( spsx != null )
            {
                var str1 = "spsx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, spsx, row );
            }

            if ( spsx == null )
            {
                spsx = "";
            }
            var zy = dw_hwxx.GetItemString( row, "zy" );
            zy = self.Replace_tszf( zy );
            if ( zy == null )
            {
                zy = "";
            }

            if ( zy != null )
            {
                var str1 = "zy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, zy, row );
            }

            var gzfs = dw_hwxx.GetItemString( row, "gzfs" );
            gzfs = self.Replace_tszf( gzfs );
            if ( gzfs == null )
            {
                gzfs = "";
            }

            if ( gzfs != null )
            {
                var str1 = "gzfs";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, gzfs, row );
            }

            var sppz = dw_hwxx.GetItemString( row, "sppz" );
            sppz = self.Replace_tszf( sppz );
            if ( sppz == null )
            {
                sppz = "";
            }

            if ( sppz != null )
            {
                var str1 = "sppz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sppz, row );
            }

            var pplx = dw_hwxx.GetItemString( row, "pplx" );
            pplx = self.Replace_tszf( pplx );
            if ( pplx == null )
            {
                pplx = "";
            }

            if ( pplx != null )
            {
                var str1 = "pplx";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, pplx, row );
            }

            var ckxhqk = dw_hwxx.GetItemString( row, "ckxhqk" );
            ckxhqk = self.Replace_tszf( ckxhqk );
            if ( ckxhqk == null )
            {
                ckxhqk = "";
            }

            if ( ckxhqk != null )
            {
                var str1 = "ckxhqk";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, ckxhqk, row );
            }

            var spdj = dw_hwxx.GetItemString( row, "spdj" );
            spdj = self.Replace_tszf( spdj );
            if ( spdj == null )
            {
                spdj = "";
            }

            if ( spdj != null )
            {
                var str1 = "spdj";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, spdj, row );
            }

            var bzgg = dw_hwxx.GetItemString( row, "bzgg" );
            bzgg = self.Replace_tszf( bzgg );
            if ( bzgg == null )
            {
                bzgg = "";
            }

            if ( bzgg != null )
            {
                var str1 = "bzgg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, bzgg, row );
            }

            var sppp = dw_hwxx.GetItemString( row, "sppp" );
            sppp = self.Replace_tszf( sppp );
            if ( sppp == null )
            {
                sppp = "";
            }

            if ( sppp != null )
            {
                var str1 = "sppp";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sppp, row );
            }

            var spgg = dw_hwxx.GetItemString( row, "spgg" );
            spgg = self.Replace_tszf( spgg );
            if ( spgg == null )
            {
                spgg = "";
            }

            if ( spgg != null )
            {
                var str1 = "spgg";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, spgg, row );
            }

            var cf = dw_hwxx.GetItemString( row, "cf" );
            cf = self.Replace_tszf( cf );
            if ( cf == null )
            {
                cf = "";
            }

            if ( cf != null )
            {
                var str1 = "cf";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, cf, row );
            }

            var xjgjggy = dw_hwxx.GetItemString( row, "xjgjggy" );
            xjgjggy = self.Replace_tszf( xjgjggy );
            if ( xjgjggy == null )
            {
                xjgjggy = "";
            }

            if ( xjgjggy != null )
            {
                var str1 = "xjgjggy";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, xjgjggy, row );
            }

            var spqtys = dw_hwxx.GetItemString( row, "spqtys" );
            spqtys = self.Replace_tszf( spqtys );
            if ( spqtys == null )
            {
                spqtys = "";
            }

            if ( spqtys != null )
            {
                var str1 = "spqtys";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, spqtys, row );
            }

            dw_sbys.Retrieve( dw_hwxx.GetItemString( row, "ywbh" ), dw_hwxx.GetItemString( row, "spbm" ), dw_hwxx.GetItemNumber( row, "cxh" ) );

            var ls_model = ""

            for ( var i = 1; i <= dw_sbys.RowCount(); i++ )
            {
                if ( dw_sbys.GetItemString( i, "zdm" ) == "sppz" )
                {
                    if ( ls_model == "" || ls_model == "|" )
                    {
                        ls_model += "品种：" + dw_sbys.GetItemString( i, "zdz" );
                    } else
                    {
                        ls_model = ls_model + "|" + "品种：" + dw_sbys.GetItemString( i, "zdz" )
                    }
                } else if ( dw_sbys.GetItemString( i, "zdm" ) == "spdj" )
                {
                    if ( ls_model == "" || ls_model == "|" )
                    {
                        ls_model += "等级：" + dw_sbys.GetItemString( i, "zdz" );
                    } else
                    {
                        ls_model = ls_model + "|" + "等级：" + dw_sbys.GetItemString( i, "zdz" )
                    }
                } else if ( dw_sbys.GetItemString( i, "zdm" ) == "sppp" )
                {
                    if ( ls_model == "" || ls_model == "|" )
                    {
                        ls_model += "品牌：" + dw_sbys.GetItemString( i, "zdz" );
                    } else
                    {
                        ls_model = ls_model + "|" + "品牌：" + dw_sbys.GetItemString( i, "zdz" )
                    }
                } else if ( dw_sbys.GetItemString( i, "zdm" ) == "spgg" && dw_sbys.GetItemString( i, "spbm" ) == "admin000014" )
                {
                    if ( ls_model == "" || ls_model == "|" )
                    {
                        ls_model += "规格：" + dw_sbys.GetItemString( i, "zdz" );
                    } else
                    {
                        ls_model = ls_model + "|" + "规格：" + dw_sbys.GetItemString( i, "zdz" )
                    }
                } else
                {
                    if ( ls_model == "" || ls_model == "|" )
                    {
                        ls_model += dw_sbys.GetItemString( i, "zdz" );
                        if ( ls_model == "" )
                        {
                            ls_model = "|";
                        }
                    } else
                    {
                        ls_model = ls_model + "|" + dw_sbys.GetItemString( i, "zdz" );
                    }
                }
            }


            ls_model = self.Replace_tszf( ls_model );

            content += '\n          <G_MODEL>' + ls_model + '</G_MODEL>';

            var hggjdm = dw_dzxx.GetItemString( 1, "ycddm" )
            var ycd = dw_dzxx.GetItemString( 1, "ycd" )
            if ( hggjdm == null )
            {
                if ( ycd != null )
                {
                    hggjdm = QsWebSoft.PubMethod.ReadGjdm( ycd ).value;
                }
            };
            if ( hggjdm == null )
            {
                hggjdm = "";
            }

            if ( hggjdm != null )
            {
                var str1 = "ycddm";
                QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, hggjdm );
            }

            if ( ycd != null )
            {
                var str1 = "ycd";
                QsWebSoft.PubMethod.Updateytsjjkbh_master( jkbh, str1, ycd );
            }

            content += '\n          <ORIGIN_COUNTRY>' + hggjdm + '</ORIGIN_COUNTRY>';
            var zjz = dw_hwxx.GetItemNumber( row, "zjz" );
            if ( zjz == null )
            {
                zjz = 0;
            }

            if ( zjz != null )
            {
                var str1 = "zjz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int( jkbh, str1, zjz, row );
            }

            var jlsl = dw_hwxx.GetItemNumber( row, "jlsl" );
            if ( jlsl == null )
            {
                jlsl = 0;
            }

            if ( jlsl != null )
            {
                var str1 = "jlsl";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int( jkbh, str1, jlsl, row );
            }


            if ( ( ( hggjdm == "502" ) && spmc == "鲜橙" ) || ( hggjdm == "602" && spmc == "鲜柠檬" ) || hggjdm == "609" || hggjdm == "601" || hggjdm == "602" )
            {

                content += '\n          <G_QTY>' + jlsl + '</G_QTY>';
            } else
            {
                content += '\n          <G_QTY>' + zjz + '</G_QTY>';
            }

            var hgjldw = dw_hwxx.GetItemString( row, "hgjldw" );
            if ( hgjldw == null )
            {
                hgjldw = "";
            }

            if ( hgjldw != null )
            {
                var str1 = "hgjldw";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, hgjldw, row );
            }

            var jldw_jsl = dw_hwxx.GetItemString( row, "jldw_jsl" );
            if ( jldw_jsl == null )
            {
                jldw_jsl = "";
            }

            if ( jldw_jsl != null )
            {
                var str1 = "jldw";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, jldw_jsl, row );
            }

            if ( ( hggjdm == "502" ) && spmc == "鲜橙" || hggjdm == "609" )
            {
                content += '\n          <G_UNIT>' + jldw_jsl + '</G_UNIT>';
            } else
            {
                content += '\n          <G_UNIT>' + hgjldw + '</G_UNIT>';
            }
            content += '\n          <QTY_1>' + zjz + '</QTY_1>';
            content += '\n          <UNIT_1>' + hgjldw + '</UNIT_1>';
            content += '\n          <QTY_2></QTY_2>';
            content += '\n          <UNIT_2></UNIT_2>';

            content += '\n          <TRADE_CURR>' + wbbbdm + '</TRADE_CURR>';
            if ( ( hggjdm == "601" || hggjdm == "502" ) && spmc == "鲜橙" || hggjdm == "609" )
            {
                var djjg = dw_hwxx.GetItemNumber( row, "djjg" )
                if ( djjg != null )
                {
                    var str1 = "djjg";
                    QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int( jkbh, str1, djjg, row );
                }

                content += '\n          <DECL_PRICE>' + djjg + '</DECL_PRICE>';
            } else
            {
                var hgdj = dw_hwxx.GetItemNumber( row, "hgdj" )
                if ( hgdj != null )
                {
                    var str1 = "hgdj";
                    QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int( jkbh, str1, hgdj, row );
                }

                content += '\n          <DECL_PRICE>' + hgdj + '</DECL_PRICE>';
            }
            var zj = dw_hwxx.GetItemNumber( row, 'zj' )

            if ( zj != null )
            {
                var str1 = "zj";

                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int( jkbh, str1, zj, row );
            }

            content += '\n          <TRADE_TOTAL>' + zj + '</TRADE_TOTAL>';

            var zjmsfs = dw_hwxx.GetItemString( row, "zjmsfs" )
            if ( zjmsfs == null )
            {
                zjmsfs = ""
            }

            if ( zjmsfs != null )
            {
                var str1 = "zjmsfs";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, zjmsfs, row );
            }

            content += '\n          <DUTY_MODE>' + zjmsfs + '</DUTY_MODE>'; //未做
            var sjyt = dw_hwxx.GetItemString( row, "sjyt" )
            if ( sjyt == null )
            {
                sjyt = ""
            }

            if ( sjyt != null )
            {
                var str1 = "yt";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx( jkbh, str1, sjyt, row );
            }

            content += '\n          <USE_TO>' + sjyt + '</USE_TO>';
            content += '\n          <PRDT_NO></PRDT_NO>';
            content += '\n          <GOODS_ID></GOODS_ID>';
            var zmz = dw_hwxx.GetItemNumber( row, "zmz" );
            if ( zmz == null )
            {
                zmz = 0;
            }

            if ( zmz != null )
            {
                var str1 = "zmz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int( jkbh, str1, zmz, row );
            }

            content += '\n          <GROSS_WT>' + zmz + '</GROSS_WT>';
            var zjz = dw_hwxx.GetItemNumber( row, "zjz" );
            if ( zjz == null )
            {
                zjz = 0;
            }

            if ( zjz != null )
            {
                var str1 = "zjz";
                QsWebSoft.PubMethod.Updateytsjjkbh_spxx_int( jkbh, str1, zjz, row );
            }

            content += '\n          <NET_WT>' + zjz + '</NET_WT>';
            content += '\n          <WORK_USD>0.0</WORK_USD>';

            content += '\n          <DESTINATION_COUNTRY>CHN</DESTINATION_COUNTRY>';
            var jnmdd = dw_hwxx.GetItemString( row, "jnmdd" )
            if ( jnmdd == null )
            {
                jnmdd = ""
            }
            content += '\n          <DistrictCode>' + jnmdd + '</DistrictCode>';
            content += '\n          <OriginCountryStd></OriginCountryStd>';
            content += '\n          <DestinationCountryStd></DestinationCountryStd>';
            content += '\n          <TradeCurrStd></TradeCurrStd>';
            content += '\n          <GUnitStd></GUnitStd>';
            content += '\n          <FirstUnitStd></FirstUnitStd>';
            content += '\n          <SecondUnitStd></SecondUnitStd>';

            var CIQbm = dw_hwxx.GetItemString( row, "ciqbm" )
            if ( CIQbm == null )
            {
                CIQbm = "";
            }
            CIQbm = CIQbm.replace( /(\r\n)+|(\r\r\n)+/g, "" );

            content += '\n          <CiqCode>' + CIQbm + '</CiqCode>';
            var spmc_yw = dw_hwxx.GetItemString( row, "spmc_yw" )
            if ( spmc_yw == null )
            {
                spmc_yw = ""
            }
            content += '\n          <DeclGoodsEname>' + spmc_yw + '</DeclGoodsEname>';
            content += '\n          <OrigPlaceCode></OrigPlaceCode>';
            var sjyt = dw_hwxx.GetItemString( row, "sjyt" )
            if ( sjyt == null )
            {
                sjyt = ""
            }
            content += '\n          <Purpose>' + sjyt + '</Purpose>';
            content += '\n          <ProdValidDt></ProdValidDt>';
            content += '\n          <ProdQgp></ProdQgp>';
            content += '\n          <GoodsAttr>19</GoodsAttr>';
            content += '\n          <Stuff></Stuff>';
            content += '\n          <UnCode></UnCode>';
            content += '\n          <DangName></DangName>';
            content += '\n          <DangPackType></DangPackType>';
            content += '\n          <DangPackSpec></DangPackSpec>';
            content += '\n          <EngManEntCnm></EngManEntCnm>';
            content += '\n          <NoDangFlag></NoDangFlag>';
            var mdddm = dw_hwxx.GetItemString( row, "mdddm" )
            if ( mdddm == null )
            {
                mdddm = ""
            }
            content += '\n          <DestCode>' + mdddm + '</DestCode>';
            content += '\n          <GoodsSpec></GoodsSpec>';
            content += '\n          <GoodsModel></GoodsModel>';
            content += '\n          <GoodsBrand></GoodsBrand>';
            content += '\n          <ProduceDate></ProduceDate>';
            content += '\n          <ProdBatchNo></ProdBatchNo>';
            content += '\n          <CiqName></CiqName>';
            content += '\n          <MnufctrRegno></MnufctrRegno>';
            content += '\n          <MnufctrRegName></MnufctrRegName>';

            content += '\n        </EP_DEC_LIST_ITEM>';
        }

        content += '\n      </EP_DEC_LIST>';

        var jzxxx_row = dw_jzxxx.RowCount();
        content += '\n      <EP_DEC_CONTAINER_LIST COUNT="' + jzxxx_row + '">';

        var newrow_jzxxx = 0;
        for ( row = 1; row <= dw_jzxxx.RowCount(); row++ )
        {
            var cxh = dw_jzxxx.GetItemNumber( row, "cxh" );
            QsWebSoft.PubMethod.Addytsjjkbh_jzxxx( jkbh, cxh );
            content += '\n      	<EP_DEC_CONTAINER_ITEM>';
            var jzxh = dw_jzxxx.GetItemString( row, "jzxh" );
            if ( jzxh == null )
            {
                jzxh = "";
            }

            if ( jzxh != null )
            {
                var str1 = "jzxh";
                QsWebSoft.PubMethod.Updateytsjjkbh_jzxxx( jkbh, str1, jzxh, row );
            }

            content += '\n      		<CONTAINER_NO>' + jzxh + '</CONTAINER_NO>';
            var xx = dw_jzxxx.GetItemString( row, "xx" );
            var xxdm = "";
            if ( xx != null )
            {
                var str1 = "xx";
                QsWebSoft.PubMethod.Updateytsjjkbh_jzxxx( jkbh, str1, xx, row );
                xxdm = QsWebSoft.PubMethod.ReadXxdm( xx ).value;
            };
            if ( xxdm == null )
            {
                xxdm = ""
            }

            content += '\n          <CONTAINER_MODEL>' + xxdm + '</CONTAINER_MODEL>';
            var jzxzz = 0;
            if ( xx != null )
            {
                jzxzz = QsWebSoft.PubMethod.ReadJzxzz( xx ).value;

            };
            if ( jzxzz == null )
            {
                jzxzz = 0
            }
            content += '\n          <CONTAINER_WT>' + jzxzz + '</CONTAINER_WT>';

            var xxbh = dw_jzxxx.GetItemString( row, "xxbh" );
            if ( xxbh == null )
            {
                xxbh = "";
            }

            content += '\n          <ContainerMdStd>' + xxbh + '</ContainerMdStd>';

            content += '\n          <GoodsNo></GoodsNo>';
            content += '\n          <LclFlag>0</LclFlag>';
            content += '\n          <GoodsContaWt></GoodsContaWt>';
            content += '\n      	</EP_DEC_CONTAINER_ITEM>';
        }

        content += '\n      </EP_DEC_CONTAINER_LIST>';

        var fsdz_row = dw_hgfsdz.RowCount();
        content += '\n      <EP_DEC_CERT_LIST COUNT="' + fsdz_row + '">';
        for ( row = 1; row <= dw_hgfsdz.RowCount(); row++ )
        {
            var cxh = dw_hgfsdz.GetItemNumber( row, "cxh" );
            QsWebSoft.PubMethod.Addytsjjkbh_fsdz( jkbh, cxh );
            content += '\n      	<EP_DEC_CERT_ITEM>';
            var dzdm = dw_hgfsdz.GetItemString( row, "dzdm" );
            if ( dzdm == null )
            {
                dzdm == ""
            }

            if ( dzdm != null )
            {
                var str1 = "dzdm";
                QsWebSoft.PubMethod.Updateytsjjkbh_fsdz( jkbh, str1, dzdm, row );
            }

            content += '\n      		<DOCU_CODE>' + dzdm + '</DOCU_CODE>';
            var dzbh = dw_hgfsdz.GetItemString( row, "dzbh" );
            dzbh = self.Replace_tszf( dzbh );
            if ( dzbh == null )
            {
                dzbh == ""
            }

            if ( dzbh != null )
            {
                var str1 = "dzbh";
                QsWebSoft.PubMethod.Updateytsjjkbh_fsdz( jkbh, str1, dzbh, row );
            }

            content += '\n          <CERT_CODE>' + dzbh + '</CERT_CODE>';
            content += '\n      	</EP_DEC_CERT_ITEM>';
        }
        content += '\n      </EP_DEC_CERT_LIST>';

        //        var sfxz_sum = 0;
        //        if (dw_jyjyxydz.RowCount() > 0) {
        //            sfxz_sum = dw_jyjyxydz.GetItemNumber(1, "sfxz_sum");
        //        };

        //        content += '\n      	<EP_DEC_EDOCRELATION_LIST COUNT="' + sfxz_sum.toString() + '">';
        //        for (row = 1; row <= dw_jyjyxydz.RowCount(); row++) {
        //            var sfxz = dw_jyjyxydz.GetItemString(row, "sfxz");
        //            if (sfxz == "Y") {
        //                content += '\n      	<EP_DEC_EDOCRELATION_ITEM>';
        //                var jkdm = dw_jyjyxydz.GetItemString(row, "jkdm");
        //                if (jkdm == null) {
        //                    jkdm == ""
        //                }
        //                content += '\n      	<FILE_TYPE>' + jkdm + '</FILE_TYPE>';

        //                var zsmc = dw_jyjyxydz.GetItemString(row, "zsmc");
        //                if (zsmc == null) {
        //                    zsmc == ""
        //                }
        //                content += '\n      	<FILE_NAME>' + zsmc + '</FILE_NAME >';
        //                var jydwdm = dw_dzxx.GetItemString(1, "jydwdm");
        //                if (jydwdm == null) {
        //                    jydwdm == ""
        //                }
        //                content += '\n      	<EDOCOWNERCODE>' + jydwdm + '</EDOCOWNERCODE>';
        //                var jydwmc = dw_dzxx.GetItemString(1, "jydwmc");
        //                if (jydwmc == null) {
        //                    jydwmc == ""
        //                }
        //                content += '\n      	<EDOCOWNERNAME>' + jydwmc + '</EDOCOWNERNAME>';
        //                content += '\n      	<OPNOTE></OPNOTE>';
        //                content += '\n      	</EP_DEC_EDOCRELATION_ITEM>';
        //            }
        //        }
        //        content += '\n      </EP_DEC_EDOCRELATION_LIST>';

        //      <EP_ECO_RELATIONT_LIST COUNT="2">
        //      	<EP_ECO_RELATIONT_ITEM>
        //      		<CERT_TYPE></CERT_TYPE>
        //          <ECO_CERT_NO></ECO_CERT_NO >
        //          <DEC_G_NO>1</DEC_G_NO>
        //          <ECO_G_NO>3</ECO_G_NO>
        //          <EXTEND_FILED></EXTEND_FILED>
        //      	</EP_ECO_RELATIONT_ITEM>
        //      	<EP_ECO_RELATIONT_ITEM>
        //      		<CERT_TYPE></CERT_TYPE>
        //          <ECO_CERT_NO></ECO_CERT_NO >
        //          <DEC_G_NO>1</DEC_G_NO>
        //          <ECO_G_NO>3</ECO_G_NO>
        //          <EXTEND_FILED></EXTEND_FILED>
        //      	</EP_ECO_RELATIONT_ITEM>
        //      </EP_ECO_RELATIONT_LIST>
        //      
        var sfxz_sum = 0;
        if ( dw_jyjyxydz.RowCount() > 0 )
        {
            sfxz_sum = dw_jyjyxydz.GetItemNumber( 1, "sfxz_sum" );
        };

        content += '\n      	<EP_DEC_DECREQUESTCERT_LIST COUNT="1">';
        for ( row = 1; row <= dw_jyjyxydz.RowCount(); row++ )
        {
            var sfxz = dw_jyjyxydz.GetItemString( row, "sfxz" );
            var jkdm = dw_jyjyxydz.GetItemString( row, "jkdm" );
            if ( sfxz == "Y" && jkdm == "21" )
            {
                content += '\n          	<EP_DEC_DECREQUESTCERT_ITEM>'
                content += '\n          	<G_No>' + row.toString() + '</G_No>'

                if ( jkdm == null )
                {
                    jkdm == ""
                }
                content += '\n          	<AppCertCode>' + jkdm + '</AppCertCode >'

                var zbfs = dw_jyjyxydz.GetItemNumber( row, "zbfs" );
                if ( zbfs == null )
                {
                    zbfs == 0
                }
                content += '\n          	<ApplOri>' + zbfs.toString() + '</ApplOri>'
                var fbfs = dw_jyjyxydz.GetItemNumber( row, "fbfs" );
                if ( fbfs == null )
                {
                    fbfs == 0
                }
                content += '\n          	<ApplCopyQuan>' + fbfs + '</ApplCopyQuan>'
                content += '\n          	</EP_DEC_DECREQUESTCERT_ITEM>'
            }
        }
        content += '\n      	</EP_DEC_DECREQUESTCERT_LIST>'

        //        var sjzs_row = dw_sjzs.RowCount();
        //        content += '\n      	<EP_DEC_DECGOODSLIMIT_LIST COUNT="' + sjzs_row + '">';
        //        for (row = 1; row <= dw_sjzs.RowCount(); row++) {
        //            content += '\n      	<EP_DEC_DECGOODSLIMIT_ITEM>'
        //            var sp_id = dw_sjzs.GetItemNumber(row, "sp_id");
        //            content += '\n      	<GoodsNo>' + sp_id + '</GoodsNo>'
        //            content += '\n      	<DecGLNo>' + row + '</DecGLNo >'

        //            var szkzdm = dw_sjsfdj.GetItemString(row, "szkzdm");
        //            if (szkzdm == null) {
        //                szkzdm == ""
        //            }
        //            content += '\n      	 <LicTypeCode>' + szkzdm + '</LicTypeCode>'
        //            var zsbh = dw_sjsfdj.GetItemString(row, "zsbh");
        //            if (zsbh == null) {
        //                zsbh == ""
        //            }
        //            content += '\n      	<LicenceNo>' + zsbh + '</LicenceNo>'
        //            content += '\n      	<LicWrtofDetailNo></LicWrtofDetailNo>'
        //            content += '\n      	<LicWrtofQty></LicWrtofQty>'
        //            content += '\n      	</EP_DEC_DECGOODSLIMIT_ITEM>'
        //        }
        //        content += '\n      	</EP_DEC_DECGOODSLIMIT_LIST>'
        //      <EP_DEC_DECGOODSLIMITVIN_LIST COUNT="2">
        //      	<EP_DEC_DECGOODSLIMITVIN_ITEM>
        //      		<GoodsNo>1</GoodsNo>
        //          <DecGLNo>1</DecGLNo>
        //          <LicenceNo></LicenceNo>
        //          <LicTypeCode></LicTypeCode>
        //          <VinNo></VinNo>
        //          <BillLadDate></BillLadDate>
        //          <QualityQgp></QualityQgp>
        //          <MotorNo></MotorNo>
        //          <VinCode></VinCode>
        //          <ChassisNo></ChassisNo>
        //          <InvoiceNum></InvoiceNum>
        //          <ProdCnnm></ProdCnnm>
        //          <ProdEnnm></ProdEnnm>
        //          <ModelEn></ModelEn>
        //          <PricePerUnit></PricePerUnit>
        //      	</EP_DEC_DECGOODSLIMITVIN_ITEM>
        //      	<EP_DEC_DECGOODSLIMITVIN_ITEM>
        //      		<GoodsNo>1</GoodsNo>
        //          <DecGLNo>1</DecGLNo>
        //          <LicenceNo></LicenceNo>
        //          <LicTypeCode></LicTypeCode>
        //          <VinNo></VinNo>
        //          <BillLadDate></BillLadDate>
        //          <QualityQgp></QualityQgp>
        //          <MotorNo></MotorNo>
        //          <VinCode></VinCode>
        //          <ChassisNo></ChassisNo>
        //          <InvoiceNum></InvoiceNum>
        //          <ProdCnnm></ProdCnnm>
        //          <ProdEnnm></ProdEnnm>
        //          <ModelEn></ModelEn>
        //          <PricePerUnit></PricePerUnit>
        //      	</EP_DEC_DECGOODSLIMITVIN_ITEM>
        //      </EP_DEC_DECGOODSLIMITVIN_LIST>
        //      <EP_DEC_DECOTHERPACK_LIST COUNT="2">
        //      	<EP_DEC_DECOTHERPACK_ITEM>
        //      		<Pack_NO>1</Pack_NO>
        //          <PackQty></PackQty >
        //          <PackType></PackType>
        //      	</EP_DEC_DECOTHERPACK_ITEM>
        //      	<EP_DEC_DECOTHERPACK_ITEM>
        //      		<Pack_NO>2</Pack_NO>
        //          <PackQty></PackQty >
        //          <PackType></PackType>
        //      	</EP_DEC_DECOTHERPACK_ITEM>
        //      </EP_DEC_DECOTHERPACK_LIST>
        //      <EP_DEC_DECCOPLIMIT_LIST COUNT="2">
        //      	<EP_DEC_DECCOPLIMIT_ITEM>
        //      		<COP_NO>1</COP_NO>
        //          <EntQualifNo></EntQualifNo >
        //          <EntQualifTypeCode></EntQualifTypeCode>
        //      	</EP_DEC_DECCOPLIMIT_ITEM>
        //      	<EP_DEC_DECCOPLIMIT_ITEM>
        //      		<COP_NO>2</COP_NO>
        //          <EntQualifNo></EntQualifNo >
        //          <EntQualifTypeCode></EntQualifTypeCode>
        //      	</EP_DEC_DECCOPLIMIT_ITEM>
        //      </EP_DEC_DECCOPLIMIT_LIST>
        var qyzz_row = dw_qyzz.RowCount();

        content += '\n      <EP_DEC_DECUSER_LIST COUNT="' + qyzz_row + '">'
        for ( row = 1; row <= dw_qyzz.RowCount(); row++ )
        {
            content += '\n      <EP_DEC_DECUSER_ITEM>'
            content += '\n      	<COP_NO>' + row + '</COP_NO>'
            var qyzzbh = dw_qyzz.GetItemString( row, "qyzzbh" );
            if ( qyzzbh == null )
            {
                qyzzbh == ""
            }
            content += '\n      <EntQualifNo>' + qyzzbh + '</EntQualifNo >'

            var qyzzlbdm = dw_qyzz.GetItemString( row, "qyzzlbdm" );
            if ( qyzzlbdm == null )
            {
                qyzzlbdm == ""
            }
            content += '\n      <EntQualifTypeCode>' + qyzzlbdm + '</EntQualifTypeCode>'
            content += '\n      </EP_DEC_DECUSER_ITEM>'
        }

        content += '\n      </EP_DEC_DECUSER_LIST>'

        var syrxx_row = dw_syrxx.RowCount();

        content += '\n      <EP_DEC_DECUSER_LIST COUNT="' + syrxx_row + '">'
        for ( row = 1; row <= dw_syrxx.RowCount(); row++ )
        {
            content += '\n      <EP_DEC_DECUSER_ITEM>'
            content += '\n      	<User_NO>' + row + '</User_NO>'
            var sydwlxr = dw_qyzz.GetItemString( row, "sydwlxr" );
            if ( sydwlxr == null )
            {
                sydwlxr == ""
            }
            content += '\n      <UseOrgPersonCode>' + sydwlxr + '</UseOrgPersonCode >'

            var sydwlxdh = dw_qyzz.GetItemString( row, "sydwlxdh" );
            if ( sydwlxdh == null )
            {
                sydwlxdh == ""
            }
            content += '\n      <UseOrgPersonTel>' + sydwlxdh + '</UseOrgPersonTel>'
            content += '\n      </EP_DEC_DECUSER_ITEM>'
        }

        content += '\n      </EP_DEC_DECUSER_LIST>'

        content += '\n    </EP_DEC_ROOT>';
        content += '\n  </Message_Body>';
        content += '\n</Message_Data>';

        if ( content == null )
        {
            requestor.MessageBox( "提示", "数据不全，无法生成文件！" )
        } else
        {
            if ( self.Save() == 1 )
            {
                QsWebSoft.PubMethod.WriteYtjkXml( content, "E:\\XML\\", fileFullPath );
                QsWebSoft.PubMethod.UploadYTJK( fileFullPath, "send/" );
                QsWebSoft.PubMethod.UploadYTJK( fileFullPath, "tmp/" );
                requestor.MessageBox( "提示", "文件<" + fileFullPath + ">已经生成完成！" )

            }

            var wjm = "EMVS_370_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC"
            var ftpdz = ""
        }
    }



    ////
    //数据导出
    this.Rjsjfs = function ()
    {
        var ywbh = dw_dzxx.GetItemString( 1, "ywbh" )

        var date_rjjkfssj = new Date();

        var filename = ywbh + ".xml";
        var fileFullPath = "D:\\RJJK\\" + ywbh + ".xml";

        //        var content = '<?xml version="1.0" encoding="gb2312"?>';
        var content = '<?xml version="1.0" encoding="gb2312"?>';


        content += '\r\n    <DecMessage>';
        content += '\r\n  <DecHead>';
        content += '\r\n    <GoodsCustomsId/>';
        content += '\r\n    <DecUuid/>';
        content += '\r\n    <CclNo/>';

        var sbdwdm = dw_dzxx.GetItemString( 1, "sbdwdm" );
        if ( sbdwdm == null )
        {
            sbdwdm = "";
        }
        content += '\r\n    <AgentCode>' + sbdwdm + '</AgentCode>';

        var bggsmc = dw_dzxx.GetItemString( 1, "bggsmc" );
        if ( bggsmc == null )
        {
            bggsmc = "";
        }
        content += '\r\n    <AgentName>' + bggsmc + '</AgentName>';


        //        var date = new Date;
        //        var nf = date.getYear().toString();
        //        var yf = date.getMonth() + 1;
        //        if ( yf < 10 )
        //        {
        //            yf = "0" + yf;
        //        };
        //        var rq = date.getDate();
        //        if ( rq < 10 )
        //        {
        //            rq = "0" + rq;
        //        };
        //        var hh = date.getHours();
        //        if ( hh < 10 )
        //        {
        //            hh = "0" + hh;
        //        };
        //        var mm = date.getMinutes();
        //        if ( mm < 10 )
        //        {
        //            mm = "0" + mm;
        //        };
        //        var ss = date.getSeconds();
        //        if ( ss < 10 )
        //        {
        //            ss = "0" + ss;
        //        };
        var sbrq = dw_dzxx.GetItemString( 1, "sbrq" );
        //        var sbrq = nf.toString() + '-' + yf.toString() + '-' + rq.toString() + ' ' + hh.toString() + ':' + mm.toString() + ':' + ss.toString()
        content += '\r\n    <CusDeclDate>' + sbrq + '</CusDeclDate>';
        content += '\r\n    <ApprNo/>';
        content += '\r\n    <SeqNo/>';
        content += '\r\n    <QcPassId/>';
        content += '\r\n    <DeclNo/>';
        content += '\r\n    <IEFlag>I</IEFlag>';
        content += '\r\n    <ApplyTypeCode/>';
        content += '\r\n    <Type/>';
        var ztdh = dw_dzxx.GetItemString( 1, "ztdh" );
        if ( ztdh == null )
        {
            ztdh = "";
        }
        content += '\r\n    <BillNo>' + ztdh + '</BillNo>';
        var ywbh = dw_dzxx.GetItemString( 1, "ywbh" );
        if ( ywbh == null )
        {
            ywbh = "";
        }
        content += '\r\n    <ContrNo>' + ywbh + '</ContrNo>';
        content += '\r\n    <CopCode/>';
        content += '\r\n    <CopName/>';
        var bghgbm_xrjrjkadm = dw_dzxx.GetItemString( 1, "bghgbm_xrjrjkadm" )
        if ( bghgbm_xrjrjkadm == null )
        {
            bghgbm_xrjrjkadm = ""
        }
        content += '\r\n    <CustomMaster>' + bghgbm_xrjrjkadm + '</CustomMaster>';

        var zmfs = dw_dzxx.GetItemString( 1, "zmfs" )
        if ( zmfs == null )
        {
            zmfs = ""
        }
        content += '\r\n    <CutMode>' + zmfs + '</CutMode>';

        var hggkdm2018 = dw_dzxx.GetItemString( 1, "hggkdm2018" )
        if ( hggkdm2018 == null )
        {
            hggkdm2018 = ""
        }
        content += '\r\n    <DistinatePort>' + hggkdm2018 + '</DistinatePort>';

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
        content += '\r\n    <FeeRate>' + kpje.toString() + '</FeeRate>';

        var zmz = dw_dzxx.GetItemNumber( 1, "zmz" )
        if ( zmz == null )
        {
            zmz = 0
        }
        content += '\r\n    <GrossWet>' + zmz.toString() + '</GrossWet>';


        content += '\r\n    <IEDate>' + sbrq + '</IEDate>';

        var jcka = dw_dzxx.GetItemString( 1, "jcka" )
        if ( jcka == null )
        {
            jcka = 0
        }
        content += '\r\n    <IEPort>' + jcka + '</IEPort>';

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
        content += '\r\n    <NetWt>' + zjz.toString() + '</NetWt>';
        content += '\r\n    <NoteS/>';
        content += '\r\n    <OtherCurr/>';
        content += '\r\n    <OtherMark/>';
        var zf = dw_dzxx.GetItemNumber( 1, "zf" )
        if ( zf == null || zf == 0 )
        {
             content += '\r\n    <OtherRate></OtherRate>';
        }else{
            content += '\r\n    <OtherRate>' + zf.toString() + '</OtherRate>';
         }

        var shdwdm_jsl = dw_dzxx.GetItemString( 1, "shdwdm_jsl" )
        if ( shdwdm_jsl == null )
        {
            shdwdm_jsl = "";
        }

        content += '\r\n    <OwnerCode>' + shdwdm_jsl + '</OwnerCode>';

        var shdwmc = dw_dzxx.GetItemString( 1, "shdwmc" )
        if ( shdwmc == null )
        {
            shdwmc = ""
        }
        content += '\r\n    <OwnerName>' + shdwmc + '</OwnerName>';

        var zxs = dw_dzxx.GetItemNumber( 1, "zxs" )
        if ( zxs == null )
        {
            zxs = 0
        }
        content += '\r\n    <PackNo>' + zxs.toString() + '</PackNo>';

        var qiyunguo_rj = dw_dzxx.GetItemString( 1, "qiyunguo_rj" )
        if ( qiyunguo_rj == null )
        {
            qiyunguo_rj = "";
        };
        content += '\r\n    <TradeCountry>' + qiyunguo_rj + '</TradeCountry>';


        var myfs = dw_dzxx.GetItemString( 1, "myfs" )
        if ( myfs == null )
        {
            myfs = 0
        }
        content += '\r\n    <TradeMode>' + myfs + '</TradeMode>';

        var ysfs = dw_dzxx.GetItemString( 1, "ysfs" )
        var ysfsbm;
        ysfsbm = QsWebSoft.PubMethod.ReadYsfsbm( ysfs ).value;
        if ( ysfsbm == null )
        {
            ysfsbm = ""
        }


        content += '\r\n    <TrafMode>' + ysfsbm + '</TrafMode>';

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

        jgfs = self.Replace_tszf( jgfs )
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
        content += '\r\n    <EntryId></EntryId>';
        content += '\r\n    <PreEntryId/>';
        content += '\r\n    <EdiId>1</EdiId>';
        content += '\r\n    <Risk/>';

        var dzlx = dw_dzxx.GetItemString( 1, "dzlx_1" )
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
        content += '\r\n    <BillType></BillType>';
        content += '\r\n    <CopCodeScc/>';
        content += '\r\n    <PromiseItmes/>';
        var qiyunguo_rj = dw_dzxx.GetItemString( 1, "qiyunguo_rj" )
        if ( qiyunguo_rj == null )
        {
            qiyunguo_rj = 0
        }
                       
        content += '\r\n    <TradeAreaCode>' + qiyunguo_rj + '</TradeAreaCode>';

        var mt = dw_dzxx.GetItemString( 1, "mt" )
        if ( mt == null )
        {
            mt = 0
        }
        content += '\r\n    <MarkNo>' + mt + '</MarkNo>';

        var qygdm = dw_dzxx.GetItemString( 1, "qygdm" )
        if ( qygdm == null )
        {
            qygdm = "";
        }

        content += '\r\n    <DespPortCode>' + qygdm + '</DespPortCode>';


        var xrjrjkadm = dw_dzxx.GetItemString( 1, "xrjrjkadm" )
        if ( xrjrjkadm == null )
        {
            xrjrjkadm = "";
        }

        content += '\r\n    <EntyPortCode>' + xrjrjkadm + '</EntyPortCode>';


        var hwcfd = dw_dzxx.GetItemString( 1, "hwcfd" )
        if ( hwcfd == null )
        {
            hwcfd = "";
        }

        content += '\r\n    <GoodsPlace>' + hwcfd + '</GoodsPlace>';

        var ztdh = dw_dzxx.GetItemString( 1, "ztdh" )
        if ( ztdh == null )
        {
            ztdh = "";
        }

        content += '\r\n    <BLNo>' + ztdh + '</BLNo>';


        var kajyjyjg = dw_dzxx.GetItemString( 1, "kajyjyjg" )
        if ( kajyjyjg == null )
        {
            kajyjyjg = "";
        }

        content += '\r\n    <InspOrgCode>' + kajyjyjg + '</InspOrgCode>';

        content += '\r\n    <SpecDeclFlag/>';

        var mddjyjyjg = dw_dzxx.GetItemString( 1, "mddjyjyjg" )
        if ( mddjyjyjg == null )
        {
            mddjyjyjg = "";
        }

        content += '\r\n    <PurpOrgCode>' + mddjyjyjg + '</PurpOrgCode>';

        var zcrq_jsl = dw_dzxx.GetItemString( 1, "zcrq_jsl" )
        if ( zcrq_jsl == null )
        {
            zcrq_jsl = "";
        }

        content += '\r\n    <DespDate>' + zcrq_jsl + '</DespDate>';
        content += '\r\n    <CmplDschrgDt/>';
        content += '\r\n    <CorrelationReasonFlag/>';

        var lzjg = dw_dzxx.GetItemString( 1, "lzjg" )
        if ( lzjg == null )
        {
            lzjg = "";
        }
        content += '\r\n    <VsaOrgCode>' + lzjg + '</VsaOrgCode>';

        content += '\r\n    <OrigBoxFlag/>';
        content += '\r\n    <DeclareName/>';
        content += '\r\n    <NoOtherPack/>';

        var jyjysljg = dw_dzxx.GetItemString( 1, "jyjysljg" )
        if ( jyjysljg == null )
        {
            jyjysljg = "";
        }
        content += '\r\n    <OrgCode>' + jyjysljg + '</OrgCode>';

        var jwgysbm = dw_dzxx.GetItemString( 1, "jwgysbm" )
        if ( jwgysbm == null )
        {
            jwgysbm = "";
        }
        content += '\r\n    <OverseasConsignorCode>' + jwgysbm + '</OverseasConsignorCode>';

        var jwgysmc = dw_dzxx.GetItemString( 1, "jwgysmc" )
        if ( jwgysmc == null )
        {
            jwgysmc = "";
        }
        content += '\r\n    <OverseasConsignorCname>' + jwgysmc + '</OverseasConsignorCname>';

        var jwfhrmc_yw = dw_dzxx.GetItemString( 1, "jwfhrmc_yw" )
        if ( jwfhrmc_yw == null )
        {
            jwfhrmc_yw = "";
        }
        content += '\r\n    <OverseasConsignorEname>' + jwfhrmc_yw + '</OverseasConsignorEname>';

        var jwgysdz = dw_dzxx.GetItemString( 1, "jwgysdz" )
        if ( jwgysdz == null )
        {
            jwgysdz = "";
        }
        content += '\r\n    <OverseasConsignorAddr></OverseasConsignorAddr>';

        content += '\r\n    <OverseasConsigneeCode/>';

        content += '\r\n    <OverseasConsigneeEname/>';
        content += '\r\n    <DomesticConsigneeEname/>';
        content += '\r\n    <CorrelationNo/>';

        var sbdwdm = dw_dzxx.GetItemString( 1, "sbdwdm" )
        if ( sbdwdm == null )
        {
            sbdwdm = "";
        }

        var sbdwtyxydm = dw_dzxx.GetItemString( 1, "sbdwtyxydm" )
        if ( sbdwtyxydm == null )
        {
            sbdwtyxydm = "";
        }

        content += '\r\n    <AgentCodeScc>' + sbdwtyxydm + '</AgentCodeScc>';

        var shdwtyxydm = dw_dzxx.GetItemString( 1, "shdwtyxydm" )
        if ( shdwtyxydm == null )
        {
            shdwtyxydm = ""
        }

        content += '\r\n    <OwnerCodeScc>' + shdwtyxydm + '</OwnerCodeScc>';

        var jydwtyxydm = dw_dzxx.GetItemString( 1, "jydwtyxydm" )
        if ( jydwtyxydm == null )
        {
            jydwtyxydm = "";
        }
        content += '\r\n    <TradeCoScc>' + jydwtyxydm + '</TradeCoScc>';

        var jydwdm = dw_dzxx.GetItemString( 1, "jydwdm" )
        if ( jydwdm == null )
        {
            jydwdm = "";
        }
        content += '\r\n    <TradeCode>' + jydwdm + '</TradeCode>';

        var jydwmc = dw_dzxx.GetItemString( 1, "jydwmc" )
        if ( jydwmc == null )
        {
            jydwmc = "";
        }
        content += '\r\n    <TradeName>' + jydwmc + '</TradeName>';

        var swjyjydjh_jydw = dw_dzxx.GetItemString( 1, "swjyjydjh_jydw" )
        if ( swjyjydjh_jydw == null )
        {
            swjyjydjh_jydw = "";
        }

        content += '\r\n    <TradeCiqCode>' + swjyjydjh_jydw + '</TradeCiqCode>';
        var swjyjydjh_shdw = dw_dzxx.GetItemString( 1, "swjyjydjh_shdw" )
        if ( swjyjydjh_shdw == null )
        {
            swjyjydjh_shdw = "";
        }
        content += '\r\n    <OwnerCiqCode>' + swjyjydjh_shdw + '</OwnerCiqCode>';
        var swjyjydjh_sbdw = dw_dzxx.GetItemString( 1, "swjyjydjh_sbdw" )
        if ( swjyjydjh_sbdw == null )
        {
            swjyjydjh_sbdw = "";
        }
        content += '\r\n    <DeclCiqCode>' + swjyjydjh_sbdw + '</DeclCiqCode>';
        content += '\r\n   </DecHead>';
        content += '\r\n   <DecLists>';
        /*以下统一取后在商品中使用*/
        var zmfs = dw_dzxx.GetItemString( 1, "zmfs" )
        if ( zmfs == null )
        {
            zmfs = "";
        }

        var ycddm = dw_dzxx.GetItemString( 1, "ycddm" )
        if ( ycddm == null )
        {
            ycddm = "";
        }

        var wbbb = dw_dzxx.GetItemString( 1, "wbbb" )
        if ( wbbb == null )
        {
            wbbb = "";
        }


        for ( row = 1; row <= dw_hwxx.RowCount(); row++ )
        {

            content += '\r\n    <DecList>';
            content += '\r\n      <CustomsGoodsId/>';
            content += '\r\n      <GoodsCustomsId/>';
            content += '\r\n      <ClassMark/>';
            var hgbm = dw_hwxx.GetItemString( row, "hgbm_rj" )
            if ( hgbm == null )
            {
                hgbm = "";
            }                       
            content += '\r\n      <CodeTS>' + hgbm + '</CodeTS>';
            content += '\r\n      <ContrItem/>';

            var dj = dw_hwxx.GetItemNumber( row, "dj" );
            if ( dj == null )
            {
                dj = 0;
            }
            content += '\r\n      <DeclPrice>' + dj + '</DeclPrice>';
            content += '\r\n      <DutyMode>1</DutyMode>';
            content += '\r\n      <Factor/>';

            var rjsbys = dw_hwxx.GetItemString( row, "rjsbys" )
            if ( rjsbys == null )
            {
                rjsbys = "";
            }
            content += '\r\n      <GModel>' + rjsbys + '</GModel>';

            var spmc = dw_hwxx.GetItemString( row, "spmc" )
            if ( spmc == null )
            {
                spmc = "";
            }
            //            spmc = self.Replace_tszf( spmc );
            //            spmc = self.Replace_fresh( spmc );
            content += '\r\n      <GName>' + spmc + '</GName>';
            content += '\r\n      <GNo>' + row + '</GNo>';
            var ycddm_new = dw_dzxx.GetItemString( 1, "ycddm_new" )
             if ( ycddm_new == null )
            {
                ycddm_new = "";
            }

            content += '\r\n      <OriginCountry>' + ycddm_new + '</OriginCountry>';
            content += '\r\n      <TradeCurr>' + wbbb + '</TradeCurr>';

            var zj = dw_hwxx.GetItemNumber( row, "zj" );
            if ( zj == null )
            {
                zj = 0;
            }
            content += '\r\n      <DeclTotal>' + zj + '</DeclTotal>';

            var zjz = dw_hwxx.GetItemNumber( row, "zjz" );
            if ( zjz == null )
            {
                zjz = 0;
            }
            content += '\r\n      <GQty>' + zjz + '</GQty>';

            var fdsl = dw_hwxx.GetItemNumber( row, "fdsl" );
            if ( fdsl == null )
            {
                fdsl = 0;
            }
            content += '\r\n      <FirstQty>' + fdsl + '</FirstQty>';
            content += '\r\n      <SecondQty/>';

            var hgjldw = dw_hwxx.GetItemString( row, "hgjldw" )
            if ( hgjldw == null )
            {
                hgjldw = "";
            }
            content += '\r\n      <GUnit>' + hgjldw + '</GUnit>';

            var fdjldw = dw_hwxx.GetItemString( row, "fdjldw" )
            if ( fdjldw == null )
            {
                fdjldw = "";
            }
            content += '\r\n      <FirstUnit>' + fdjldw + '</FirstUnit>';
            content += '\r\n      <SecondUnit/>';
            content += '\r\n      <UseTo/>';
            content += '\r\n      <WorkUsd/>';
            content += '\r\n      <ExgNo/>';
            content += '\r\n      <ExgVersion/>';
            content += '\r\n      <DestinationCountry>' + 142 + '</DestinationCountry>';

            var CIQbm = dw_hwxx.GetItemString( row, "CIQbm" )
            if ( CIQbm == null )
            {
                CIQbm = "";
            }

            content += '\r\n      <CiqCode>' + CIQbm + '</CiqCode>';

            var spmc_yw = dw_hwxx.GetItemString( row, "spmc_yw" )
            if ( spmc_yw == null )
            {
                spmc_yw = "";
            }
            content += '\r\n      <DeclGoodsEname>' + spmc_yw + '</DeclGoodsEname>';
            content += '\r\n      <OrigPlaceCode/>'

            var sjyt = dw_hwxx.GetItemString( row, "sjyt" )
            if ( sjyt == null )
            {
                sjyt = "";
            }
            content += '\r\n      <Purpose>' + sjyt + '</Purpose>';
            content += '\r\n      <ProdValidDt/>'
            content += '\r\n      <ProdQgp/>'
            if ( spmc == "鲜香蕉" )
            {
                content += '\r\n      <GoodsAttr>14,19</GoodsAttr>'
            } else
            {
                content += '\r\n      <GoodsAttr>19</GoodsAttr>'
            }

            content += '\r\n      <Stuff/>'
            content += '\r\n      <Uncode/>'
            content += '\r\n      <DangName/>'
            content += '\r\n      <DangPackType/>'
            content += '\r\n      <DangPackSpec/>'
            content += '\r\n      <EngManEntCnm/>'
            content += '\r\n      <NoDangFlag/>'

            var mdddm = dw_hwxx.GetItemString( row, "mdddm" )
            if ( mdddm == null )
            {
                mdddm = "";
            }
            content += '\r\n      <DestCode>' + mdddm + '</DestCode>';

            content += '\r\n      <GoodsSpec/>'
            content += '\r\n      <GoodsModel/>'
            content += '\r\n      <GoodsBrand/>'
            content += '\r\n      <ProduceDate/>'
            content += '\r\n      <ProdBatchNo/>'
            content += '\r\n      <MnufctrRegNo/>'
            content += '\r\n      <MnufctrRegName/>'

            var jnmdd = dw_hwxx.GetItemString( row, "jnmdd" )
            if ( jnmdd == null )
            {
                jnmdd = "";
            }
            content += '\r\n      <DistrictCode>' + jnmdd + '</DistrictCode>';


            content += '\r\n      <CiqName>' + spmc + '</CiqName>';
//            content += '\r\n      <DecGoodsLimits>'
//            content += '\r\n        <DecGoodsLimit>'
//            content += '\r\n          <LimitId/>'
//            content += '\r\n          <GoodsId/>'
//            content += '\r\n          <GoodsNo/>'
//            content += '\r\n          <LicTypeCode/>'
//            content += '\r\n          <LicenceNo/>'
//            content += '\r\n          <LicWrtofDetailNo/>'
//            content += '\r\n          <LicWrtofQty/>'
//            content += '\r\n          <MeasUnitCode/>'
//            content += '\r\n          <DecGoodsLimitVin>'
//            content += '\r\n            <LimitVinId/>'
//            content += '\r\n            <LicenceNo/>'
//            content += '\r\n            <LicTypeCode/>'
//            content += '\r\n            <VinNo/>'
//            content += '\r\n            <BillLadDate/>'
//            content += '\r\n            <QualityQgp/>'
//            content += '\r\n            <MotorNo/>'
//            content += '\r\n            <VinCode/>'
//            content += '\r\n            <ChassisNo/>'
//            content += '\r\n            <InvoiceNum/>'
//            content += '\r\n            <ProdCnnm/>'
//            content += '\r\n            <ProdEnnm/>'
//            content += '\r\n            <ModelEn/>'
//            content += '\r\n            <PricePerUnit/>'
//            content += '\r\n            <InvoiceNo/>'
//            content += '\r\n          </DecGoodsLimitVin>'
//            content += '\r\n      </DecGoodsLimit>'
//            content += '\r\n      </DecGoodsLimits>'
            content += '\r\n    </DecList>'

        }
        content += '\r\n  </DecLists>'
        content += '\r\n  <DecContainers>'

        for ( row = 1; row <= dw_jzxxx.RowCount(); row++ )
        {

            content += '\r\n    <Container>'
            content += '\r\n      <CustContainerId/>'
            content += '\r\n      <GoodsCustomsId/>'
            var jzxh = dw_jzxxx.GetItemString( row, "jzxh" )
            if ( jzxh == null )
            {
                jzxh = "";
            }
            content += '\r\n      <ContainerId>' + jzxh + '</ContainerId>'
            var xxbh = dw_jzxxx.GetItemString( row, "xxbh" )
             if ( xxbh == null )
            {
                xxbh = "";
            }
            content += '\r\n      <ContainerMd>' + xxbh + '</ContainerMd>'

            content += '\r\n      <GoodsNo/>'
            content += '\r\n      <LclFlag/>'
            content += '\r\n      <GoodsContaWt/>'
            
            var jzxzz = dw_jzxxx.GetItemString( row, "jzxzz" )
            content += '\r\n      <ContainerWt>' + jzxzz.toString() + '</ContainerWt>'
            content += '\r\n    </Container>'

        }


        content += '\r\n  </DecContainers>'
        content += '\r\n  <DecLicenseDocus>'

        for ( row = 1; row <= dw_hgfsdz.RowCount(); row++ )
        {

            content += '\r\n    <LicenseDocu>'
            content += '\r\n      <CustAttachId/>'
            content += '\r\n      <GoodsCustomsId/>'
            var dzdm = dw_hgfsdz.GetItemString( row, "dzdm" )
            if ( dzdm == null )
            {
                dzdm = "";
            }
            content += '\r\n      <DocuCode>' + dzdm + '</DocuCode>'

            var dzbh = dw_hgfsdz.GetItemString( row, "dzbh" )
            if ( dzbh == null )
            {
                dzbh = "";
            }

            content += '\r\n      <CertCode>' + '</CertCode>'
            //            content += '\r\n      <CertCode>' + dzbh.toString() + '</CertCode>'

            content += '\r\n    </LicenseDocu>'
        }
        content += '\r\n  </DecLicenseDocus>'
        content += '\r\n  <DecRequestCerts>'

        for ( row = 1; row <= dw_jyjyxydz.RowCount(); row++ )
        {
            content += '\r\n    <DecRequestCert>'


            content += '\r\n      <CclCertId/>'
            content += '\r\n      <GoodsCustomsId/>'

            var zsbh = dw_jyjyxydz.GetItemString( row, "zsbh" )
            if ( zsbh == null )
            {
                zsbh = "";
            }
            content += '\r\n      <AppCertCode>' + zsbh + '</AppCertCode>'

            var zbfs = dw_jyjyxydz.GetItemString( row, "zbfs" )
            if ( zbfs == null )
            {
                zbfs = "";
            }
            content += '\r\n      <ApplOri>' + zbfs + '</ApplOri>'

            var fbfs = dw_jyjyxydz.GetItemString( row, "fbfs" )
            if ( fbfs == null )
            {
                fbfs = "";
            }
            content += '\r\n      <ApplCopyQuan>' + fbfs + '</ApplCopyQuan>'

            content += '\r\n    </DecRequestCert>'



        }


        content += '\r\n  </DecRequestCerts>'
        content += '\r\n  <DecOtherPacks>'
        for ( row = 1; row <= dw_sjbzcl.RowCount(); row++ )
        {
            content += '\r\n    <DecOtherPack>'
            content += '\r\n      <PackId/>'
            content += '\r\n      <GoodsId/>'
            var pbzjs = dw_hwxx.GetItemString( row, "pbzjs" )
            if ( pbzjs == null )
            {
                pbzjs = "";
            }
            content += '\r\n      <PackQty>' + pbzjs + '</PackQty>'
            var clzl = dw_hwxx.GetItemString( row, "clzl" )
            if ( clzl == null )
            {
                clzl = "";
            }
            content += '\r\n      <PackType>' + clzl + '</PackType>'
            content += '\r\n    </DecOtherPack>'

        }

        content += '\r\n  </DecOtherPacks>'
        content += '\r\n  <DecUsers>'

        for ( row = 1; row <= dw_syrxx.RowCount(); row++ )
        {
            content += '\r\n   <DecUser>'
            content += '\r\n    <UserId/>'
            content += '\r\n      <DeclId/>'
            var sydwlxr = dw_hwxx.GetItemString( row, "sydwlxr" )
            if ( sydwlxr == null )
            {
                sydwlxr = "";
            }
            content += '\r\n      <UseOrgPersonCode>' + sydwlxr + '</UseOrgPersonCode>'
            var sydwlxdh = dw_hwxx.GetItemString( row, "sydwlxdh" )
            if ( sydwlxdh == null )
            {
                sydwlxdh = "";
            }
            content += '\r\n      <UseOrgPersonTel>' + sydwlxdh + '</UseOrgPersonTel>'
            content += '\r\n    </DecUser>'
        }

        content += '\r\n  </DecUsers>'
        content += '\r\n  <DecCopLimits>'
        for ( row = 1; row <= dw_qyzz.RowCount(); row++ )
        {
            content += '\r\n    <DecCopLimit>'
            content += '\r\n      <DeclLimitId/>'
            content += '\r\n      <DeclId/>'
            var qyzzbh = dw_hwxx.GetItemString( row, "qyzzbh" )
            if ( qyzzbh == null )
            {
                qyzzbh = "";
            }
            content += '\r\n      <EntQualifNo>' + qyzzbh + '</EntQualifNo>'
            var qyzzlbdm = dw_hwxx.GetItemString( row, "qyzzlbdm" )
            if ( qyzzlbdm == null )
            {
                qyzzlbdm = "";
            }
            content += '\r\n      <EntQualifTypeCode>' + qyzzlbdm + '</EntQualifTypeCode>'
            var qyzzlbmc = dw_hwxx.GetItemString( row, "qyzzlbmc" )
            if ( qyzzlbmc == null )
            {
                qyzzlbmc = "";
            }
            content += '\r\n      <EntQualifName>' + qyzzlbmc + '</EntQualifName>'
            content += '\r\n    </DecCopLimit>'
        }
        content += '\r\n  </DecCopLimits>'
        content += '\r\n  <DecCopPromises>'
        content += '\r\n    <DecCopPromise>'
        content += '\r\n      <CclPromiseId/>'
        content += '\r\n      <GoodsCustomsId/>'
        content += '\r\n      <DeclarationMaterialCode/>'
        content += '\r\n    </DecCopPromise>'
        content += '\r\n  </DecCopPromises>'
         
         for ( row = 1; row <= dw_hgfsdz.RowCount(); row++ )
        {
            content += '\r\n  <EdocRealation>'
            content += '\r\n    <UUID/>'
            content += '\r\n    <GoodsCustomsId/>'
            content += '\r\n    <EdocID/>'

             var dzdm = dw_hgfsdz.GetItemString( row, "dzdm" )
            if ( dzdm == null )
            {
                dzdm = "";
            }
            content += '\r\n    <EdocCode>' + dzdm + '</EdocCode>'
            content += '\r\n    <EdocFomatType/>'
            content += '\r\n    <OpNote/>'
            content += '\r\n    <EdocCopId/>'
            content += '\r\n    <EdocOwnerCode/>'
            content += '\r\n    <SignUnit/>'
            content += '\r\n    <SignTime/>'
            content += '\r\n    <EdocOwnerName/>'
            content += '\r\n    <EdocSize/>'
            content += '\r\n    <EdocNo/>'
            content += '\r\n    <EdocCName/>'
            content += '\r\n  </EdocRealation>'
        }
        content += '\r\n  <EcoRelation>'
        content += '\r\n    <EcoRelaton_Id/>'
        content += '\r\n    <GoodsCustomsId/>'
        content += '\r\n    <CustAttachId/>'
        content += '\r\n    <CertType/>'
        content += '\r\n    <EcoCertNo/>'
        content += '\r\n    <DecGNo/>'
        content += '\r\n    <EcoGNo/>'
        content += '\r\n    <ExtendFiled/>'
        content += '\r\n  </EcoRelation>'
        content += '\r\n  <DecMarkLobs>'
        content += '\r\n    <DecMarkLob>'
        content += '\r\n      <MarkId/>'
        content += '\r\n      <DeclId/>'
        content += '\r\n      <AttachName/>'
        content += '\r\n      <AttachType/>'
        content += '\r\n      <Attachment/>'
        content += '\r\n    </DecMarkLob>'
        content += '\r\n  </DecMarkLobs>'
        content += '\r\n  <DecFreeTxt>'
        content += '\r\n    <GoodsCustomsId/>'
        content += '\r\n    <RelId/>'
        content += '\r\n    <RelManNo/>'
        content += '\r\n    <BonNo/>'
        var hc = dw_dzxx.GetItemString( 1, "hc" )
        if ( hc == null )
        {
            hc = "";
        }
        content += '\r\n    <VoyNo>' + hc + '</VoyNo>'
        content += '\r\n    <DecBpNo/>'

        content += '\r\n    <CusFie/>'
        content += '\r\n    <DecNo/>'
        content += '\r\n  </DecFreeTxt>'
        content += '\r\n  <TrnHead>'
        content += '\r\n    <CustTrnPreId/>'
        content += '\r\n    <GoodsCustomsId/>'
        content += '\r\n    <TrnPreId/>'
        content += '\r\n    <TransNo/>'
        content += '\r\n    <TurnNo/>'
        content += '\r\n    <NativeTrafMode/>'
        content += '\r\n    <TrafCustomsNo/>'
        content += '\r\n    <NativeShipName/>'
        content += '\r\n    <NativeVoyageNo/>'
        content += '\r\n    <ContractorName/>'
        content += '\r\n    <ContractorCode/>'
        content += '\r\n    <TransFlag/>'
        content += '\r\n    <ValidTime/>'
        content += '\r\n    <ESealFlag/>'
        content += '\r\n    <Notes/>'
        content += '\r\n    <TrnType/>'
        content += '\r\n    <ApplCodeScc/>'
        content += '\r\n  </TrnHead>'
        //        content += '\r\n  <TrnList>'
        //        content += '\r\n    <TrnPreListId/>'
        //        content += '\r\n    <CustTrnPreId/>'
        //        content += '\r\n    <TrafMode/>'
        //        content += '\r\n    <ShipId/>'
        //        content += '\r\n    <ShipNameEn/>'
        //        content += '\r\n    <VoyageNo/>'
        //        content += '\r\n    <BillNo/>'
        //        content += '\r\n    <IEDate/>'
        //        content += '\r\n    <BillNum/>'
        //        content += '\r\n    <ContainerNo/>'
        //        content += '\r\n  </TrnList>'
        //        content += '\r\n  <TrnContainers>'
        //        content += '\r\n    <TrnContainer>'
        //        content += '\r\n      <TrnContainerId/>'
        //        content += '\r\n      <CustTrnPreId/>'
        //        content += '\r\n      <ContaNo/>'
        //        content += '\r\n      <ContaSn/>'
        //        content += '\r\n      <ContaModel/>'
        //        content += '\r\n      <SealNo/>'
        //        content += '\r\n      <TransName/>'
        //        content += '\r\n      <TransWeight/>'
        //        content += '\r\n    </TrnContainer>'
        //        content += '\r\n  </TrnContainers>'
        //        content += '\r\n  <TrnContaGoodsList>'
        //        content += '\r\n    <TrnContaGoods>'
        //        content += '\r\n      <TrnContaGoodsListId/>'
        //        content += '\r\n      <CustTrnPreId/>'
        //        content += '\r\n      <ContaNo/>'
        //        content += '\r\n      <ContaSn/>'
        //        content += '\r\n      <GNo/>'
        //        content += '\r\n      <ContaGoodsCount/>'
        //        content += '\r\n      <ContaGoodsWeight/>'
        //        content += '\r\n    </TrnContaGoods>'
        //        content += '\r\n  </TrnContaGoodsList>'
        content += '\r\n</DecMessage>'



        if ( content == null )
        {
            requestor.MessageBox( "提示", "数据不全，无法生成文件！" )
        } else
        {


            self.Save()
            var fso, f1, ts, s;
            var ForReading = 1;
            fso = new ActiveXObject( "Scripting.FileSystemObject" );
            f1 = fso.CreateTextFile( fileFullPath, true );
            f1.WriteLine( content );
            f1.Close();

            requestor.MessageBox( "提示", "文件<" + fileFullPath + ">已经生成完成！" )



        }

    }


    /////



}



 