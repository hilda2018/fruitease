///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_YfkdEdit() {

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl(requestor);
    var dw_mx = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var dw_print = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ds_1 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_mx == null) dw_mx = new DataWindow(requestor);
        dw_mx.Attach(win.Control("dw_mx"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_mx_DoubleClicked) == "function")
            win.AttachEvent("dw_mx", "DoubleClicked", self.dw_mx_DoubleClicked);

        if (typeof (self.dw_mx_ItemChanged) == "function")
            win.AttachEvent("dw_mx", "ItemChanged", self.dw_mx_ItemChanged);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_master", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_preview", "Clicked", self.Print);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tab_1.Detach(); tab_1 = null;
        dw_mx.Detach(); dw_mx = null;
        dw_master.Detach(); dw_master = null;
        dw_print.Detach(); dw_print = null;
        tb_1.Detach(); tb_1 = null;
        ds_1.Detach(); ds_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改



    //#region 变量定义
    var editMode = "";
    var iw_Mxd_Select = null;
    var iw_Wldw_Select = null;
    

    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Yfkd.ashx");

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

//        tb_1.SetEnabled("btn_save", bEditFlag);
//        tb_1.SetEnabled("btn_rowadd", bEditFlag);
//        tb_1.SetEnabled("btn_rowdelete", bEditFlag);

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_mx.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_mx.Modify("DataWindow.Readonly=no");
        };
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
            };
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            };

            if (operation == "open") {
                self.SetEditMode("open");
                var sqje = dw_master.GetItemNumber(1,"sqfkje");
                var jedx = QsWebSoft.PubMethod.Zwdx(sqje).value;
                dw_master.SetItem(1, "jedx", jedx);
                dw_master.ResetUpdate();
            }
        }
        else {
            self.SetEditMode("show");
            var sqje = dw_master.GetItemNumber(1, "sqfkje");
            var jedx = QsWebSoft.PubMethod.Zwdx(sqje).value;
            dw_master.SetItem(1, "jedx", jedx);
            dw_master.ResetUpdate();
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

    //#region 存盘
        this.Save = function () {
            if (editMode == "show")
                return;
            if (dw_master.AcceptText() != 1)
                return;

            if (dw_mx.AcceptText() != 1)
                return;

            if ((dw_master.ModifiedCount() + dw_master.DeletedCount() + dw_mx.ModifiedCount() + dw_mx.DeletedCount()) <= 0) {
                alert("没有数据需要保存!");
                return;
            }


            //更新行号
            for (row = dw_mx.RowCount(); row > 0; row--) {
                //                if (dw_mx.GetItemNumber(row, "sqfkje") == 0) {
                //                    dw_mx.DeleteRow(row);
                //                    continue;
                //                }
                dw_mx.SetItem(row, "cxh", row);
            }

            //            if (dw_mx.RowCount() == 0) {
            //                alert("付款申请没有明细记录!");
            //                dw_master.SetFocus();
            //                return;
            //            }


            var skdwmc = dw_master.GetItemString(1, "skdwmc");

            if (skdwmc == null || skdwmc == "") {
                alert("请选择收款单位名称!");
                dw_master.SetFocus();
                dw_master.SetColumn("skdwmc")
                return;
            }

            var fkfs = dw_master.GetItemString(1, "fkfs");
            if (fkfs == null || fkfs == "") {
                alert("请选择付款方式!");
                dw_master.SetFocus();
                dw_master.SetColumn("fkfs")
                return;
            }

            var fkyt = dw_master.GetItemString(1, "fkyt");
            if (fkyt == null || fkyt == "") {
                alert("请选择付款类型!");
                dw_master.SetFocus();
                dw_master.SetColumn("fkyt")
                return;
            }

            var khyh = dw_master.GetItemString(1, "skdwkhyh");
            if (khyh == null || khyh == "") {
                alert("请输入收款单位银行!");
                dw_master.SetFocus();
                dw_master.SetColumn("skdwkhyh")
                return;
            }

            var yhzh = dw_master.GetItemString(1, "skdwyhzh");
            if (yhzh == null || yhzh == "") {
                alert("请输入收款单位银行账号!");
                dw_master.SetFocus();
                dw_master.SetColumn("skdwyhzh")
                return;
            }
            var sqfkje = dw_master.GetItemNumber(1, "sqfkje");
            if (dw_mx.RowCount() > 0) {
                var mxje = dw_mx.GetItemNumber(1, "sqfkje_sum");
            }
            else {
                mxje = 0;
            }
            var ce = sqfkje - mxje;
            ce = parseFloat(ce.toFixed(2));
            if (ce < 0) {
                requestor.MessageBox("提示", "拆分金额不能超过付款总金额!");
                return;
            }
            var userid = requestor.GetParm("userid");

            dw_master.SetItem(1, "sqr", userid);
            var khbm = dw_master.GetItemString(1, "skdwbm");
            QsWebSoft.PubMethod.UpdateGcyhzh(khbm, khyh, yhzh).value;

            //            dw_master.SetItem(dw_master.GetRow(), "sqfkje", dw_mx.GetItemNumber(1, "sqfkje_sum"))
            var dw_master_data = dw_master.GetChanges();
            var dw_mx_data = dw_mx.GetChanges();

            if (dw_master_data == "" && dw_mx_data == "")
                return;

            //执行保存的WebService
            webReq.SetFunctionID(requestor.GetFunctionID());
            webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_mx_data + "&sqdbh=" + sqdbh + "&operation=" + editMode);

            if (webReq.StatusCode() == 200) {
                //服务器成功处理，返回单号
                var sqdbh = webReq.ResponseText();
                dw_master.SetItem(1, "sqdbh", sqdbh);
                for (row = 1; row <= dw_mx.RowCount(); row++) {
                    dw_mx.SetItem(row, "sqdbh", sqdbh);
                }
                dw_master.ResetUpdate();
                dw_mx.ResetUpdate();
                requestor.MessageBox("提示", "数据保存成功!");
                if (requestor.MessageBox("提示", "继续新建申请单?", ICON.Question, BUTTON.YesNo) == 1) {
                    self.Add();
                }
                else {
                    return;
                }
                //                self.Exit();
            }
            else {
                requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
                dw_master.SetFocus();
            };
        };
        //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();
        dw_mx.AcceptText();

        if ((dw_master.ModifiedCount() + dw_mx.DeletedCount() + dw_mx.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        

    }
    //#endregion


    //#region 打印 
        this.Print = function () {
            var sqdbh = dw_master.GetItemString(1, "sqdbh");
            dw_print.Retrieve(sqdbh);
            dw_print.PrintPreview();
        }
        //#endregion



    //#region 新建
        this.Add = function () {
            dw_master.Reset();
            dw_master.InsertRow(0);
            var userid = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var userip = requestor.GetParm("userip");
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


            var arrayobj = new Array(4);
            arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyWtf(Dlwtf).value;
            if (arrayobj == null) {
                var cname = "";
                var ename = "";
                var eaddr = "";
                var tt_no = "";
            }
            else {
                if (arrayobj.length == 0) {
                    var cname = "";
                    var ename = "";
                    var eaddr = "";
                    var tt_no = "";

                }
                else {
                    cname = arrayobj[0];
                    ename = arrayobj[1];
                    eaddr = arrayobj[2];
                    tt_no = arrayobj[3];
                }
            }
            var date = new Date();
            dw_master.SetItem(1, "sqr", userid);
            dw_master.SetItem(1, "ywy", ywy);
            dw_master.SetItem(1, "bm", bm);
            dw_master.SetItem(1, "sqrq", date.getDate());
            dw_master.SetItem(1, "yjfkrq", date.getDate());
            dw_master.SetItem(1, "dlwtf", Dlwtf);
            dw_master.SetItem(1, "fkdwbm", tt_no);
            dw_master.SetItem(1, "fkdwmc", cname);
            dw_master.SetItem(1, "ip", userip);

            var khyh = "";
            var yhzh = "";
            var count = 0;
            ds_1.Retrieve(tt_no);
            count = ds_1.RowCount();
            if (count > 0) {
                khyh = ds_1.GetItemString(1, "khyh");
                yhzh = ds_1.GetItemString(1, "yhzh");
                dw_master.SetItem(1, "fkdwkhyh", khyh)
                dw_master.SetItem(1, 'fkdwyhzh', yhzh)
            }

            var zusdhl = QsWebSoft.PubMethod.Wb2Usd("RMB").value;
            var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb("RMB").value;
            dw_master.SetItem(1, 'zusdhl', zusdhl);
            dw_master.SetItem(1, 'zrmbhl', zrmbhl);
        }
        //#endregion

    //#region 复制
        this.Copy = function () {
            var userid = requestor.GetParm("userid");
            var date = new Date();
            dw_master.SetItem(1, "sqdbh", "");
            dw_master.SetItem(1, "sqr", userid);
            dw_master.SetItem(1, "sqrq", date.getDate());
            dw_master.SetItem(1, "state", "新制");
            dw_master.SetItem(1, "spjc", "未审批");
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd("RMB").value;
            var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb("RMB").value;
            dw_master.SetItem(1, 'zusdhl', zusdhl);
            dw_master.SetItem(1, 'zrmbhl', zrmbhl);
            self.SetEditMode("copy");
        }
        //#endregion


    //#region 弹出选择
        this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;
            if (dwoName == "skdwbh_t") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "gngys";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("skdwbh");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
                var khbm = dw_master.GetItemString(dw_master.GetRow(), "skdwbm");
                var num = arrayobj = QsWebSoft.PubMethod.CheckGcFk(khbm).value;
                if (num >= 1) {
                    alert("该工厂今天已经做过付款申请，请注意!");
                }
            }
        };
        //#endregion

    //#region 添加明细
            this.AddRow = function () {
                dw_mx.ScrollToRow(dw_mx.InsertRow(0));
                dw_mx.SetFocus();

            }
            //#endregion

    //#region 删除明细
            this.DeleteRow = function () {
                var row = dw_mx.GetRow();
                if (row <= 0)
                    return;
                var status = dw_mx.GetItemStatus(row, 0, DWBUFFER.Primary);

                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        dw_mx.SetFocus();
                        return;
                    }


                    dw_mx.DeleteRow(row);
                    self.SetZje();
                }
                else {
                    dw_mx.DeleteRow(row);
                    self.SetZje();
                }


            }
        //#endregion


    //#region SetZje
        this.SetZje = function () {
            dw_mx.AcceptText();
            var zje = 0;
//            if (dw_mx.RowCount() > 0) {
//                zje = dw_mx.GetItemNumber(1, "sqfkje_sum");
//                dw_master.SetItem(1, 'sqfkje', zje);
//            }
        }
        //#endregion



        //#region dw_master ItemChanged
        this.dw_master_ItemChanged = function (row, dwoName, data) {
            if (dwoName == "fkdwbm") {
                var cname = "";
                var khyh = "";
                var yhzh = "";
                var count = 0;
                ds_1.Retrieve(data);
                count = ds_1.RowCount();
                if (count > 0) {
                    cname = ds_1.GetItemString(1, "cname");
                    khyh = ds_1.GetItemString(1, "khyh");
                    yhzh = ds_1.GetItemString(1, "yhzh");
                    dw_master.SetItem(1, "fkdwmc", cname)
                    dw_master.SetItem(1, "fkdwkhyh", khyh)
                    dw_master.SetItem(1, 'fkdwyhzh', yhzh)
                }
            }

            if (dwoName == "wbbb") {
                var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
                var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb(data).value;
            
                dw_master.SetItem(1, 'zusdhl', zusdhl);
                dw_master.SetItem(1, 'zrmbhl', zrmbhl);

            }
        }
        //#endregion



  //#region dw_mx双击
        this.dw_mx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;

            if (dwoName == "mxdbh") {
                if (iw_Mxd_Select == null)
                    iw_Mxd_Select = new W_Mxd_Select();
                iw_Mxd_Select.SetDataWindow(dw_mx);
                iw_Mxd_Select.SetData("yfkd");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Mxd_Select", iw_Mxd_Select);
                dw_master.SetFocus();
            }
        }

        //#region dw_mx ItemChanged
        this.dw_mx_ItemChanged = function (row, dwoName, data) {
            if (dwoName == "sqfkje") {
                self.SetZje();
            }
        }
        //#endregion


        //#region dw_mx ItemChanged
        this.dw_master_ItemChanged = function (row, dwoName, data) {
            if (dwoName == "sqfkje") {
                sqje = parseFloat(data);
                var jedx = QsWebSoft.PubMethod.Zwdx(sqje).value;
                dw_master.SetItem(row, "jedx", jedx);
            }
        }
        //#endregion

};