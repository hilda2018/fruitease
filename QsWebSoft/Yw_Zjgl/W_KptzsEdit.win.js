///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_KptzsEdit() {

    var self = this;
    var requestor = new PBWindow();
    var sle_ts = new SingleLineEdit(requestor);
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var tab_1 = new TabControl(requestor);
    var dw_cmd = new DataWindow(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_cmd_bg = new DataWindow(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_bgsp = new DataStore(requestor);
    var ds_bg = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (sle_ts == null) sle_ts = new SingleLineEdit(requestor);
        sle_ts.Attach(win.Control("sle_ts"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_cmd == null) dw_cmd = new DataWindow(requestor);
        dw_cmd.Attach(win.Control("dw_cmd"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_cmd_bg == null) dw_cmd_bg = new DataWindow(requestor);
        dw_cmd_bg.Attach(win.Control("dw_cmd_bg"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_bgsp == null) ds_bgsp = new DataStore(requestor);
        ds_bgsp.Attach(win.Control("ds_bgsp"));
        if (ds_bg == null) ds_bg = new DataStore(requestor);
        ds_bg.Attach(win.Control("ds_bg"));

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

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowinsert", "Clicked", self.InsertRow);

        if (typeof (self.RowCopy) == "function")
            win.AttachEvent("btn_rowcopy", "Clicked", self.RowCopy);

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

        if (typeof (self.dw_cmd_Clicked) == "function")
            win.AttachEvent("dw_cmd", "Clicked", self.dw_cmd_Clicked);

        if (typeof (self.dw_cmd_EditChanged) == "function")
            win.AttachEvent("dw_cmd", "EditChanged", self.dw_cmd_EditChanged);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_cmd", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_cmd_ItemChanged) == "function")
            win.AttachEvent("dw_cmd", "ItemChanged", self.dw_cmd_ItemChanged);

        if (typeof (self.dw_cmd_EntertoTab) == "function")
            win.AttachEvent("dw_cmd", "KeyDown", self.dw_cmd_EntertoTab);

        if (typeof (self.dw_cmd_DoubleClicked) == "function")
            win.AttachEvent("dw_cmd_bg", "DoubleClicked", self.dw_cmd_DoubleClicked);

        if (typeof (self.dw_cmd_EditChanged) == "function")
            win.AttachEvent("dw_cmd_bg", "EditChanged", self.dw_cmd_EditChanged);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_cmd_bg", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_cmd_ItemChanged) == "function")
            win.AttachEvent("dw_cmd_bg", "ItemChanged", self.dw_cmd_ItemChanged);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        sle_ts.Detach(); sle_ts = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        tab_1.Detach(); tab_1 = null;
        dw_cmd.Detach(); dw_cmd = null;
        dw_print.Detach(); dw_print = null;
        dw_cmd_bg.Detach(); dw_cmd_bg = null;
        ds_1.Detach(); ds_1 = null;
        ds_bgsp.Detach(); ds_bgsp = null;
        ds_bg.Detach(); ds_bg = null;
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
    var dwc = new DataWindowChild();
 
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Kptzs.ashx");

    
    
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
            tb_1.SetVisible("btn_rowadd", false);
//            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag); 
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowinsert", bEditFlag); 
        }

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_cmd.Modify("DataWindow.Readonly=no");
            dw_cmd_bg.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_cmd.Modify("DataWindow.Readonly=yes");
            dw_cmd_bg.Modify("DataWindow.Readonly=yes");
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
        dw_cmd.AcceptText();
        dw_cmd_bg.AcceptText();

        if ((dw_master.ModifiedCount() + dw_cmd.DeletedCount() + dw_cmd.ModifiedCount() + dw_cmd_bg.DeletedCount() + dw_cmd_bg.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;
       
        if (dw_cmd.AcceptText() != 1)
            return;


        if ((dw_master.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() + dw_cmd_bg.ModifiedCount() + dw_cmd_bg.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
        var row = dw_master.GetRow();
        var id = dw_master.GetItemString(row, "id");
            id = ""
//        id = id.replace(' ', '');
//        dw_master.SetItem(row, "id", id);
//        if (id == null || id == "") {
//            alert("请输入开票通知书编号!");
//            tab_1.SelectTab(1);
//            dw_master.SetFocus();
//            dw_master.SetColumn("id")
//            return;
//        }


//        var num = QsWebSoft.PubMethod.CheckKptzsid(id).value;
//        if (num > 0 && (editMode == "new" || editMode == "copy")) {
//            alert("提示，开票通知书编号已经存在,请重新编写!");
//            tab_1.SelectTab(1);
//            dw_master.SetFocus();
//            dw_master.SetColumn("id")
//            return;
//        }
       

        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            
            dw_cmd.SetItem(row, "cxh", row);
            dw_cmd.SetItem(row, "id", id);
        }

        for (row = dw_cmd_bg.RowCount(); row > 0; row--) {

            dw_cmd_bg.SetItem(row, "cxh", row);
            dw_cmd_bg.SetItem(row, "id", id);
        }


        if (dw_cmd.RowCount() == 0) {
            alert("开票通知书没有商品信息!");
            dw_cmd.SetFocus();
            return;
        }


        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();
        var dw_cmd_bg_data = dw_cmd_bg.GetChanges();

        if (dw_master_data == "" && dw_cmd_data == "" && dw_cmd_bg_data == "")
            return;
        //执行保存的WebService

      
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_cmd=" + dw_cmd_data + "&dw_cmd_bg=" + dw_cmd_bg_data + "&id=" + id + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            id = webReq.ResponseText();
            dw_master.SetItem(1, "id", id);

            for (row = 1; row <= dw_cmd.RowCount(); row++) {
                dw_cmd.SetItem(row, "id", id);
                dw_cmd.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_cmd_bg.RowCount(); row++) {
                dw_cmd_bg.SetItem(row, "id", id);
                dw_cmd_bg.SetItem(row, "cxh", row);
            }

            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            dw_cmd_bg.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("id.Tabsequence=0");

            //	         dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion

    //#region 插入商品
    this.InsertRow = function () {


        if (iw_Commodity_Select == null)
            iw_Commodity_Select = new W_Commodit_Select();
        var ywy = requestor.GetParm("userid");
        row = dw_cmd.InsertRow(dw_cmd.GetRow());
        var dwo = lastdw.GetDataObject();
        iw_Commodity_Select.SetDetailDW(dw_cmd);
        iw_Commodity_Select.SetRow(row);
        iw_Commodity_Select.SetDwo(dwo);
        requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ywy=" + ywy, iw_Commodity_Select);
        dw_cmd.AcceptText();


    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
//        if (lastdw.GetName() == 'dw_cmd') {
//            if (iw_Commodity_Select == null)
//                iw_Commodity_Select = new W_Commodit_Select();
//            var ShareMode = requestor.GetParm("ShareMode");
//            var ywy = requestor.GetParm("userid");
//            var Dlwtf = requestor.GetParm("Dlwtf");
//            var dwo = dw_cmd.GetDataObject();
//            iw_Commodity_Select.SetDwo(dwo);
//            iw_Commodity_Select.SetDetailDW(dw_cmd);

//            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);
//        }
//        if (lastdw.GetName() == 'dw_cmd') {
            dw_cmd.ScrollToRow(dw_cmd.InsertRow(0));
            dw_cmd.SetFocus();
//        }
    };
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;

        if (lastdw.GetName() == 'dw_cmd' ) {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            lastdw.DeleteRow(row);
            self.SetZje();
        }


    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        var row = dw_cmd.GetRow();
        if (row <= 0)
            return;

        dw_cmd.RowsCopy(row, row, DWBUFFER.Primary, dw_cmd, row + 1, DWBUFFER.Primary)
            dw_cmd.ScrollToRow(row + 1);
            self.SetZje();


    }
    //#endregion

    //#region 打印 
    this.Print = function () {

        var id = dw_master.GetItemString(1, "id"); 
        dw_print.SetDataObject("dw_ck_kptzs_print");
        dw_print.Retrieve(id);
        dw_print.PrintPreview();
    }
    //#endregion
  
    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "hgbm") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            var ywy = requestor.GetParm("userid"); ;
            var ShareMode = requestor.GetParm("ShareMode"); ;
            var Dlwtf = requestor.GetParm("Dlwtf"); ;
            iw_Commodity_Select.SetDetailDW(dw_cmd);
            iw_Commodity_Select.SetDwo("dw_mxd_edit_cmd");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
            dw_cmd.SetFocus();
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


        dw_master.SetItem(1, "tt_no", tt_no)
        dw_master.SetItem(1, 'address', address)
        dw_master.SetItem(1, 'tel', tel)
        dw_master.SetItem(1, 'fax', fax)
        dw_master.SetItem(1, 'sh', sh)
        dw_master.SetItem(1, 'hgdm', hgdm)
        dw_master.SetItem(1, 'khyh', khyh)
        dw_master.SetItem(1, 'yhzh', yhzh)
        dw_master.SetItem(1, 'zdr', userid);
        dw_master.SetItem(1, 'ywy', ywy);
        dw_master.SetItem(1, 'bm', bm);
        dw_master.SetItem(1, 'zdrq', date.getVarDate());
        //        dw_master.SetItem(1, 'wbbb', "USD");
        dw_master.SetItem(1, 'dlwtf', Dlwtf);
        dw_master.SetItem(1, 'dlxyh', Dlxyh);
        self.SetEditMode("new");


    }
    //#endregion

    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "id", "");
        dw_master.SetItem(1, "zdr", userid);
        dw_master.SetItem(1, "zdrq", date.getVarDate());
        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "spjc", "未审批");        

        
        self.SetZje();
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "mxdbh_t") {
            var mxdb_old = dw_master.GetItemString(Row, 'mxdbh');
            if (iw_Mxd_Select == null)
                iw_Mxd_Select = new W_Mxd_Select();
            iw_Mxd_Select.SetDataWindow(dw_master);
            iw_Mxd_Select.SetData("kptzs");
            iw_Mxd_Select.SetParameter(sle_ts);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Mxd_Select", iw_Mxd_Select);
            dw_master.SetFocus();
            dw_master.AcceptText()

            if (sle_ts.GetText() == "cancel") {
                return;
            }
            var mxdbh = dw_master.GetItemString(Row, 'mxdbh')
            var ll_rowcount, ll_rowcount_bgsp, ll_loop, ll_insertrow, ll_mxdspid, ll_wxhtspid
            var ls_ywy, ls_spbm, ls_hgbm, ls_spzwmc, ls_spywmc, ls_spgg, ls_sphh, ls_jjdw, ls_sldw
            var ldc_jjsl, ldc_spsl, ldc_wxdj, ldc_wxzj, ldc_wxdj_fob, ldc_wxzj_fob, ldc_wkpsl, ldc_wkpfobje	//可开票数量
            var ls_kpjjdw

            if (mxdbh == null || mxdbh == "") {
                return
            };

            ll_rowcount_bgsp = ds_bgsp.Retrieve(mxdbh);

            if (ll_rowcount_bgsp == 0) {
                requestor.MessageBox("提示", "明细单(" + mxdbh + ")的商品已全部开票完毕，或者报关数据未回填，请核对！")
                dw_master.SetItem(1, "mxdbh", mxdb_old)
                return
            }

            var ls_zydl, ls_tt_no, ls_ywy, ls_bm
            ll_rowcount = ds_bg.Retrieve(mxdbh)
            if (ll_rowcount > 0) {
                ls_zydl = ds_bg.GetItemString(1, "zydl")
                ls_tt_no = ds_bg.GetItemString(1, "tt_no")
                ls_ywy = ds_bg.GetItemString(1, "ywy")
                ls_bm = ds_bg.GetItemString(1, "bm")
                dw_master.SetItem(1, "zydl", ls_zydl)
                dw_master.SetItem(1, "tt_no", ls_tt_no)
                dw_master.SetItem(1, "ywy", ls_ywy)
                dw_master.SetItem(1, "bm", ls_bm)

                ll_rowcount = ds_1.Retrieve(ls_tt_no)
                if (ll_rowcount > 0) {
                    //设置抬头
                    var ls_tel, ls_fax, ls_sh, ls_hgdm, ls_khyh, ls_yhzh, ls_dwmc
                    ls_tel = ds_1.GetItemString(1, "tel")
                    ls_fax = ds_1.GetItemString(1, "fax")
                    ls_sh = ds_1.GetItemString(1, "swdjhm")
                    ls_hgdm = ds_1.GetItemString(1, "bgbh")
                    ls_khyh = ds_1.GetItemString(1, "khyh")
                    ls_yhzh = ds_1.GetItemString(1, "yhzh")
                    dw_master.SetItem(1, "tel", ls_tel)
                    dw_master.SetItem(1, "fax", ls_fax)
                    dw_master.SetItem(1, "sh", ls_sh)
                    dw_master.SetItem(1, "hgdm", ls_hgdm)
                    dw_master.SetItem(1, "khyh", ls_khyh)
                    dw_master.SetItem(1, "yhzh", ls_yhzh)
                };

            };


            //读取报关合并后商品数据   
            if (dw_cmd_bg.RowCount() > 0) {
                if (requestor.MessageBox("提示", "已有报关商品数据，是否覆盖原有数据？", ICON.Question, BUTTON.YesNo) == 1) {
                    for (ll_loop = dw_cmd_bg.RowCount(); ll_loop > 0; ll_loop--) {
                        dw_cmd_bg.DeleteRow(ll_loop)
                    }
                    for (ll_loop = dw_cmd.RowCount(); ll_loop > 0; ll_loop--) {
                        dw_cmd.DeleteRow(ll_loop)
                    }
                    

                    //                    dw_cmd_bg.RowsMove(1, dw_cmd_bg.RowCount(), DWBUFFER.Delete , dw_cmd_bg, dw_cmd_bg.RowCount(), DWBUFFER.Delete);
                    //                    dw_cmd_bg.RowsMove(1, dw_cmd_bg.RowCount(), DWBUFFER.Delete, dw_cmd_bg, dw_cmd_bg.RowCount(), DWBUFFER.Delete);
                }
            }


            ls_ywy = dw_master.GetItemString(1, "ywy")

            for (ll_loop = 1; ll_loop < ll_rowcount_bgsp; ll_loop++) {
                ll_mxdspid = ds_bgsp.GetItemNumber(ll_loop, "cxh")
                ls_hgbm = ds_bgsp.GetItemString(ll_loop, "hgbm")
                var zjfph = ds_bgsp.GetItemString(ll_loop, "zjfph")
                ls_spbm = ds_bgsp.GetItemString(ll_loop, "spbm")
                ls_sphh = ds_bgsp.GetItemString(ll_loop, "sphh")
                ls_spzwmc = ds_bgsp.GetItemString(ll_loop, "spzwmc")
                ls_spywmc = ds_bgsp.GetItemString(ll_loop, "spywmc")
                ls_spgg = ds_bgsp.GetItemString(ll_loop, "spgg")
                ldc_wkpsl = ds_bgsp.GetItemNumber(ll_loop, "c_wkpsl")  	//未开票报关数量
                ldc_zzsl = ds_bgsp.GetItemNumber(ll_loop, "zzsl")
                ldc_tsl = ds_bgsp.GetItemNumber(ll_loop, "tsl") 
                if (ldc_wkpsl <= 0) {
                    continue;
                };

                ls_kpjjdw = ds_bgsp.GetItemString(ll_loop, "kpjjdw")
                if (ls_kpjjdw = null) {
                    ls_kpjjdw == "报关单位"
                };

                //如果按'报关单位'开票,则取报关数量,如果按'采购单位'开票,则取商品数量
                if (ls_kpjjdw = '报关单位') {
                    ldc_jjsl = ds_bgsp.GetItemNumber(ll_loop, "jjsl")  		//报关商品数量
                    ls_jjdw = ds_bgsp.GetItemString(ll_loop, "jjdw")
                };
                if (ls_kpjjdw = '采购单位') {
                    ldc_jjsl = ds_bgsp.GetItemNumber(ll_loop, "spsl")  		//报关商品数量
                    ls_jjdw = ds_bgsp.GetItemString(ll_loop, "sldw")
                };


                if (ldc_jjsl = 0) {
                    ldc_jjsl = 1
                };

                ldc_spsl = ds_bgsp.GetItemNumber(ll_loop, "spsl")  		//实际出口商品数量
                ls_sldw = ds_bgsp.GetItemString(ll_loop, "sldw")
                ldc_wxzj = ds_bgsp.GetItemNumber(ll_loop, "c_wkpwxzj")//未开票报关总价
                ldc_wxdj = ldc_wxzj / ldc_wkpsl						//报关单价=报关总价/报关数量	
                ldc_wxzj_fob = ds_bgsp.GetItemNumber(ll_loop, "c_wkpfobje")//未开票报关FOB金额
                ldc_wxdj_fob = ldc_wxzj_fob / ldc_wkpsl			//报关单价fob=报关总价fob/报关数量

                //插入一行
                ll_insertrow = dw_cmd_bg.InsertRow(0);
                dw_cmd_bg.SetItem(ll_insertrow, "mxdbh", mxdbh)
                dw_cmd_bg.SetItem(ll_insertrow, "mxdbh_add", zjfph)
                dw_cmd_bg.SetItem(ll_insertrow, "mxd_spid", ll_mxdspid)
                dw_cmd_bg.SetItem(ll_insertrow, "ywy", ls_ywy)
                dw_cmd_bg.SetItem(ll_insertrow, 'hgbm', ls_hgbm)
                dw_cmd_bg.SetItem(ll_insertrow, 'spbm', ls_spbm)
                dw_cmd_bg.SetItem(ll_insertrow, 'sphh', ls_sphh)
                dw_cmd_bg.SetItem(ll_insertrow, 'spzwmc', ls_spzwmc)
                dw_cmd_bg.SetItem(ll_insertrow, 'spywmc', ls_spywmc)
                dw_cmd_bg.SetItem(ll_insertrow, 'spgg', ls_spgg)

                dw_cmd_bg.SetItem(ll_insertrow, 'jjsl', ldc_wkpsl)
                dw_cmd_bg.SetItem(ll_insertrow, 'jjdw', ls_jjdw)
                dw_cmd_bg.SetItem(ll_insertrow, 'spsl', ldc_spsl)
                dw_cmd_bg.SetItem(ll_insertrow, 'sldw', ls_sldw)

                dw_cmd_bg.SetItem(ll_insertrow, 'wxdj', ldc_wxdj)
                dw_cmd_bg.SetItem(ll_insertrow, 'wxzj', ldc_wxzj)
                dw_cmd_bg.SetItem(ll_insertrow, 'wxdj_fob', ldc_wxdj_fob)
                dw_cmd_bg.SetItem(ll_insertrow, 'wxzj_fob', ldc_wxzj_fob)


                ll_insertrow = dw_cmd.InsertRow(0);
                dw_cmd.SetItem(ll_insertrow, "mxdbh", mxdbh)
                dw_cmd.SetItem(ll_insertrow, "mxdbh_add", zjfph)
                dw_cmd.SetItem(ll_insertrow, "mxd_spid", ll_mxdspid)
                dw_cmd.SetItem(ll_insertrow, "ywy", ls_ywy)
                dw_cmd.SetItem(ll_insertrow, 'hgbm', ls_hgbm)
                dw_cmd.SetItem(ll_insertrow, 'spbm', ls_spbm)
                dw_cmd.SetItem(ll_insertrow, 'sphh', ls_sphh)
                dw_cmd.SetItem(ll_insertrow, 'spmc', ls_spzwmc)
                dw_cmd.SetItem(ll_insertrow, 'spgg', ls_spgg)
                dw_cmd.SetItem(ll_insertrow, 'spsl', ldc_wkpsl)
                dw_cmd.SetItem(ll_insertrow, 'sldw', ls_jjdw)
                dw_cmd.SetItem(ll_insertrow, 'wxdj_fob', ldc_wxdj_fob)
                dw_cmd.SetItem(ll_insertrow, 'wxzj_fob', ldc_wxzj_fob)
                dw_cmd.SetItem(ll_insertrow, 'zzsl', ldc_zzsl)
                dw_cmd.SetItem(ll_insertrow, 'tsl', ldc_tsl)

            };
        };


        if (dwoName == "kpdwmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gngys";

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("kpdw");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "jhdwmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gngys";

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("jhdw");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }


    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "tt_no") {
            var address = "";
            var khyh = "";
            var yhzh = "";
            var count = 0;
            var fax = "";
            var tel = "";
            var sh = "";
            var hgdm = "";
            ds_1.Retrieve(data);
            count = ds_1.RowCount();
            if (count > 0) {
                address = ds_1.GetItemString(1, "caddr");
                khyh = ds_1.GetItemString(1, "khyh");
                yhzh = ds_1.GetItemString(1, "yhzh");
                tel = ds_1.GetItemString(1, "tel");
                fax = ds_1.GetItemString(1, "fax");
                sh = ds_1.GetItemString(1, "swdjhm");
                hgdm = ds_1.GetItemString(1, "bgbh");
                dw_master.SetItem(1, "address", address);
                dw_master.SetItem(1, "khyh", khyh);
                dw_master.SetItem(1, 'yhzh', yhzh);
                dw_master.SetItem(1, "fax", fax);
                dw_master.SetItem(1, 'tel', tel);
                dw_master.SetItem(1, "sh", sh);
                dw_master.SetItem(1, 'hgdm', hgdm);
            }
        }





    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
        if (dwoName == "ckka") {
            dw_master.GetChild(dwoName, dwc);
            if (data != "")
                dwc.Retrieve("%" + data + "%");
            else
                dwc.Retrieve("%");
        }
    }
    //#endregion



    //#region dw_cmd ItemChanged
    this.dw_cmd_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jjsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            ldc_wxzj = (data * dw_cmd.GetItemNumber(row, "wxdj"));
            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
            dw_cmd.SetItem(row, "wxzj", ldc_wxzj);
            self.CacluSgje(row);
//            self.CacluBzjs(row);
//            self.CacluMjztj(row);
            self.SetZje();
//            self.SetZmjztj();
        }

        else if (dwoName == "wxdj") {
            if (data < 0) {
                alert("单价不能小于0,请重新输入!");
                return 1;
            }
            ldc_wxzj = (data * dw_cmd.GetItemNumber(row, "jjsl"));
            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
            dw_cmd.SetItem(row, "wxzj", ldc_wxzj);
            dw_cmd.SetItem(row, "wxdj_dz", parseFloat(data));
            self.SetZje();
        }
//        else if (dwoName == "wxzj") {
//            if (data < 0) {
//                alert("金额不能小于0,请重新输入!");
//                return 1;
//            }

//            //如果数量大于0，则反算单价
//            var Qty = dw_cmd.GetItemNumber(row, "jjsl");
//            var Price = dw_cmd.GetItemNumber(row, "wxdj");
//            if (Qty > 0) {
//                ldc_wxdj = data / Qty;
//                ldc_wxdj = parseFloat(ldc_wxdj.toFixed(6));
//                dw_cmd.SetItem(row, "wxdj", ldc_wxdj);
//            }
//            self.SetZje();
//        }

        else if (dwoName == "hsdj" || dwoName == "zzsl" || dwoName == "tsl") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            self.CacluSgje(row);
            self.SetZje();
        }

        else if (dwoName == "spsl") {
            if (data < 0) {
                alert("每件数量不能小于0,请重新输入!");
                return 1;
            }
            self.CacluSgje(row);
            self.SetZje();
//            self.CacluBzjs(row);
//            self.CacluMjztj(row);
//            self.SetZmjztj();
        }
        else if (dwoName == "bzjs" || dwoName == "mjmz" || dwoName == "mjjz" || dwoName == "djtjms") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            self.CacluMjztj(row);
            self.SetZmjztj();

        }

        else if (dwoName == "mz" || dwoName == "jz" || dwoName == "tj" ) {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            self.SetZmjztj();

        }


    }
    //#endregion


    //#region dw_cmd EditChanged
    this.dw_cmd_EditChanged = function (row, dwoName, data) {

//        dw_master.AcceptText();
//        if (dwoName == "bzdw" || dwoName == "jjdw" || dwoName == "nbzdw") {
//            dw_cmd.GetChild(dwoName, dwc);
//            if (data != "")
//                dwc.Retrieve("%" + data + "%");
//            else
//                dwc.Retrieve("%");
//        }
    }
    //#endregion

    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
//        if (lastdw.GetName() == 'dw_cmd') {
            ll_row_from = dw_cmd.GetRow();
            ll_row_count = dw_cmd.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_cmd.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_cmd.SetRedraw(false);
            dw_cmd.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_cmd, ll_row_to, DWBUFFER.Primary);
            dw_cmd.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_cmd.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_cmd.ScrollToRow(ll_row_count);
            }

            if (dw_cmd.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_cmd.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
//        }

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
//        if (lastdw.GetName() == 'dw_cmd') {
            ll_row_from = dw_cmd.GetRow();
            ll_row_count = dw_cmd.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from -1 ;
            }
            else {
                ll_row_to = 1;
            }


//            if (ll_row_to == ll_row_from) {
//                return;
//            }
            dw_cmd.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_cmd, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1 ) {
                dw_cmd.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_cmd.ScrollToRow(1);
            }

            if (dw_cmd.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_cmd.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
//        }

    }
    //#endregion

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    //#region dw_kehu ItemChanged
    this.dw_kehu_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "tt_no") {

            var arrayobj = new Array(3);
            arrayobj = QsWebSoft.PubMethod.GetCompanyImformation(data).value;
            if (arrayobj == null) {
                var cname = "";
                var ename = "";
                var eaddr = "";
            }
            else {
                if (arrayobj.length == 0) {
                    var cname = "";
                    var ename = "";
                    var eaddr = "";

                }
                else {
                    var cname = arrayobj[0];
                    var ename = arrayobj[1];
                    var eaddr = arrayobj[2];
                }
            }
            dw_kehu.SetItem(1, "jydw_cname", cname)
            dw_kehu.SetItem(1, "jydw_ename", ename)
            dw_kehu.SetItem(1, "jydw_eaddr", eaddr)
            dw_kehu.SetItem(1, 'jydwxx', ename + '\n' + eaddr)
        }
    }
    //#endregion


    //#region SetZje
    this.SetZje = function () {
        dw_cmd.AcceptText();
        dw_master.AcceptText();
        dw_cmd_bg.AcceptText();
        if (dw_cmd.RowCount() > 0) {
            ldc_hsje = dw_cmd.GetItemNumber(1, "sum_hsje");
            ldc_hsje = parseFloat(ldc_hsje.toFixed(2));
        }
        else {           
            ldc_hsje = 0;            
        };
        
        dw_master.SetItem(1, "kpje", ldc_hsje);

    }
    //#endregion

    //#region CacluSgje
    this.CacluSgje = function (row) {
        dw_cmd.AcceptText();
//        var ldc_jjsl = dw_cmd.GetItemNumber(row, "spsl");
//        var ldc_hsdj = dw_cmd.GetItemNumber(row, "hsdj");
//        var ldc_zzsl = dw_cmd.GetItemNumber(row, "zzsl");
//        var ldc_tsl = dw_cmd.GetItemNumber(row, "tsl");
//        if (ldc_jjsl == null) {
//            ldc_jjsl = 0;
//        }
//        if (ldc_hsdj == 0) {
//            ldc_hsdj = 0;
//        }
//        if (ldc_zzsl == null) {
//            ldc_zzsl = 0;
//        }
//        if (ldc_tsl == null) {
//            ldc_tsl = 0;
//        }

//        ldc_hszj = ldc_jjsl * ldc_hsdj;
//        ldc_hszj = parseFloat(ldc_hszj.toFixed(2));
//        ldc_bhsje = ldc_hszj / (1 + ldc_zzsl / 100);
//        ldc_bhsje = parseFloat(ldc_bhsje.toFixed(2));
//        ldc_bhsdj = ldc_bhsje / ldc_jjsl;
//        ldc_bhsdj = parseFloat(ldc_bhsdj.toFixed(6));
//        ldc_zzse = ldc_hszj - ldc_bhsje;
//        ldc_zzse = parseFloat(ldc_zzse.toFixed(2));
//        ldc_tse = ldc_bhsje * ldc_tsl / 100;
//        ldc_tse = parseFloat(ldc_tse.toFixed(2));


//        dw_cmd.SetItem(row, "hsje", ldc_hszj);
//        dw_cmd.SetItem(row, "bhsdj", ldc_bhsdj);
//        dw_cmd.SetItem(row, "bhsje", ldc_bhsje);
//        dw_cmd.SetItem(row, "zzse", ldc_zzse); 

    }
    //#endregion

 //#region CacluBzjs
    this.CacluBzjs = function (row) {
        dw_cmd.AcceptText();
        var ldc_mjsl = dw_cmd.GetItemNumber(row, 'mjsl');
        if (ldc_mjsl == 0 || ldc_mjsl == null) {
            return;
        }
        var ldc_jjsl = dw_cmd.GetItemNumber(row, 'jjsl');
        var ldc_bzjs = ldc_jjsl / ldc_mjsl;
        //取整数部分
        if (parseInt(ldc_bzjs) != ldc_bzjs) {
            ldc_bzjs = Math.ceil(ldc_bzjs)   //去小数部分加1
        }
        dw_cmd.SetItem(row, 'bzjs', ldc_bzjs)
    }
    //#endregion


    //#region CacluMjztj
    this.CacluMjztj = function (row) {
        dw_cmd.AcceptText();
        var ldc_bzjs = dw_cmd.GetItemNumber(row, "bzjs");
        if (ldc_bzjs == 0) {
            ldc_bzjs = 0;
        }
        ldc_jjsl = dw_cmd.GetItemNumber(row, "jjsl");

        //计算毛重、净重
        ldc_mjmz = dw_cmd.GetItemNumber(row, "mjmz");
        ldc_mjjz = dw_cmd.GetItemNumber(row, "mjjz");
        if (ldc_bzjs > 0 && ldc_mjmz > 0) {
            ldc_mz = ldc_bzjs * ldc_mjmz;
            ldc_mz = parseFloat(ldc_mz.toFixed(4));
            dw_cmd.SetItem(row, "mz", ldc_mz);
        }
        if (ldc_bzjs > 0 && ldc_mjjz > 0) {
            ldc_jz = ldc_bzjs * ldc_mjjz;
            ldc_jz = parseFloat(ldc_jz.toFixed(4));
            dw_cmd.SetItem(row, "jz", ldc_jz);
        }
        
       
       
       

        var ls_djtjms = dw_cmd.GetItemString(row, "djtjms");
        ls_djtjms.toLowerCase();
        if (ls_djtjms == null) {
            ls_djtjms = "";
        }

        //计算体积
        if (ls_djtjms.length > 0) {
            var cm = ls_djtjms.indexOf("cm");
            var m = ls_djtjms.indexOf("m");
            if (cm > 0) {
                var li_pos = cm;
                ls_djtjms = ls_djtjms.substring(0, li_pos - 1);
                var ls_unit = "cm";
            }
            else if (m > 0) {
                li_pos = m;
                ls_djtjms = ls_djtjms.substring(0, li_pos - 1);
                ls_unit = "m";
            }
            else {
                ls_djtjms = ls_djtjms;
                ls_unit = "cm";
            }
        }
        li_pos = ls_djtjms.indexOf("x");
        while (li_pos > 0) {
            if (li_pos <= 0) {
                continue;
            }
            ls_djtjms = ls_djtjms.replace("x", "*");
            li_pos = ls_djtjms.indexOf("x");
        }


        li_pos = ls_djtjms.indexOf("X");
        while (li_pos > 0) {
            if (li_pos <= 0) {
                continue;
            }
            ls_djtjms = ls_djtjms.replace("X", "*");
            li_pos = ls_djtjms.indexOf("X");
        }
        if (ls_djtjms.substring(1) == "*" || ls_djtjms.substring(1) == "X" || ls_djtjms.substring(1) == "x") {
            ls_djtjms = ls_djtjms.substring(0, ls_djtjms.length - 1);
        }

        ls_value = dw_cmd.Describe("evaluate('" + ls_djtjms + "',0)");

        if (ls_unit == "cm") {
            if (ldc_bzjs > 0 && parseFloat(ls_value) > 0) {
                ldc_tj = parseFloat(ls_value) * ldc_bzjs / 1000000;
                ldc_tj = ldc_tj.toFixed(3);

                dw_cmd.SetItem(row, "tj", parseFloat(ldc_tj));
            }
           
        }
        else {
            if (ldc_bzjs > 0 && parseFloat(ls_value) > 0) {
                ldc_tj = parseFloat(ls_value) * ldc_bzjs;
            
                ldc_tj = ldc_tj.toFixed(3);
                dw_cmd.SetItem(row, "tj", parseFloat(ldc_tj));
            }
        }
    }
    //#endregion


 //#region GenBzms
    this.GenBzms = function (row) {
        dw_cmd.AcceptText();

        ldc_bzjs = dw_spms.GetItemNumber(1, 'bzjs');
        ls_bzdw = dw_spms.GetItemString(1, 'bzdw');

//        if (dw_cmd.RowCount() == 0) {
            ldc_nbzjs = 0;
//        }
//        else {
//            ldc_nbzjs = dw_cmd.GetItemNumber(1, 'sum_nbzjs');
//            ls_nbzdw = dw_cmd.GetItemString(1, 'c_nbzdw');
//        }

        if (dw_cmd.RowCount() > 0) {
            ls_max_bzdw = dw_cmd.Describe("evaluate('max(bzdw)',0)");
            ls_min_bzdw = dw_cmd.Describe("evaluate('min(bzdw)',0)");
        }

        if (ls_max_bzdw != ls_min_bzdw) {
            ls_bzdw = 'PACKAGES';
        }

        var ls_bzjs = QsWebSoft.PubMethod.Ywdx(ldc_bzjs).value;
        var ls_nbzjs = QsWebSoft.PubMethod.Ywdx(ldc_nbzjs).value;
        if (ldc_bzjs > 0 && ldc_nbzjs > 0) {
            ls_bzms = "TOTAL PACKED IN " + ls_bzjs + " " + ls_bzdw + " ( " + ls_nbzjs + " " + ls_nbzdw + " ) ";
        }
        else if (ldc_bzjs > 0 && (ldc_nbzjs <= 0 || ldc_nbzjs == null)) {
            ls_bzms = "TOTAL PACKED IN " + ls_bzjs + " " + ls_bzdw;
        }
        else {
            ls_bzms = '';
        }

        dw_spms.SetItem(1, 'bzms', ls_bzms);

    }
    //#endregion
   

    //#region SetZmjztj
    this.SetZmjztj = function (row) {
        dw_cmd.AcceptText();
        if (dw_cmd.RowCount() > 0) {
            ldc_zsl = dw_cmd.GetItemNumber(1, "sum_jjsl");
            ldc_zsl = parseFloat(ldc_zsl.toFixed(2));
        }
        else {
            ldc_zsl = 0
        }

        if (dw_cmd.RowCount() > 0) {
            ldc_zjs = dw_cmd.GetItemNumber(1, "sum_bzjs");
            ldc_zjs = parseFloat(ldc_zjs.toFixed(2));
            ldc_zmz = dw_cmd.GetItemNumber(1, "sum_mz");
            ldc_zmz = parseFloat(ldc_zmz.toFixed(2));
            ldc_zjz = dw_cmd.GetItemNumber(1, "sum_jz");
            ldc_zjz = parseFloat(ldc_zjz.toFixed(2));
            ldc_ztj = dw_cmd.GetItemNumber(1, "sum_tj");
            ldc_ztj = parseFloat(ldc_ztj.toFixed(3));
        }
        else {
            ldc_zjs = 0;
            ldc_zmz = 0;
            ldc_zjz = 0;
            ldc_ztj = 0;
        }
        var sldw = dw_cmd.Describe("evaluate('max(jjdw)',0)");
        var bzdw = dw_cmd.Describe("evaluate('max(bzdw)',0)");
        var zldw = dw_cmd.Describe("evaluate('max(zldw)',0)");
        dw_master.SetItem(1, "spsl", ldc_zsl)
        dw_master.SetItem(1, "sldw",sldw )
        dw_master.SetItem(1, "bzjs", ldc_zjs)
        dw_master.SetItem(1, "bzdw", bzdw)
        dw_master.SetItem(1, "zmz", ldc_zmz)
        dw_master.SetItem(1, "zjz", ldc_zjz)
        dw_master.SetItem(1, "zldw", zldw)
        dw_master.SetItem(1, "ztj", ldc_ztj)

        self.GenBzms();

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
        }
        if (tab_1.GetSelectedTab() == 2) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
        }

      
    };
    //#endregion



}
