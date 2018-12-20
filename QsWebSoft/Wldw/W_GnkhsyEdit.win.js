///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_GnkhsyEdit() {

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl(requestor);
    var tab_2 = new TabControl(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var dw_lxr = new DataWindow(requestor);
    var dw_yh = new DataWindow(requestor);
    var dw_jsbm = new DataWindow(requestor);
    var dw_gnkh_list = new DataWindow(requestor);
    var dw_gnkh_lxr = new DataWindow(requestor);
    var dw_gnkh_shdz = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ContextMenuStrip2 = new ContextMenu(requestor);
    var ContextMenuStrip3 = new ContextMenu(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (tab_2 == null) tab_2 = new TabControl(requestor);
        tab_2.Attach(win.Control("tab_2"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (dw_lxr == null) dw_lxr = new DataWindow(requestor);
        dw_lxr.Attach(win.Control("dw_lxr"));
        if (dw_yh == null) dw_yh = new DataWindow(requestor);
        dw_yh.Attach(win.Control("dw_yh"));
        if (dw_jsbm == null) dw_jsbm = new DataWindow(requestor);
        dw_jsbm.Attach(win.Control("dw_jsbm"));
        if (dw_gnkh_list == null) dw_gnkh_list = new DataWindow(requestor);
        dw_gnkh_list.Attach(win.Control("dw_gnkh_list"));
        if (dw_gnkh_lxr == null) dw_gnkh_lxr = new DataWindow(requestor);
        dw_gnkh_lxr.Attach(win.Control("dw_gnkh_lxr"));
        if (dw_gnkh_shdz == null) dw_gnkh_shdz = new DataWindow(requestor);
        dw_gnkh_shdz.Attach(win.Control("dw_gnkh_shdz"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ContextMenuStrip2 == null) ContextMenuStrip2 = new ContextMenu(requestor);
        ContextMenuStrip2.Attach(win.Control("ContextMenuStrip2"));
        if (ContextMenuStrip3 == null) ContextMenuStrip3 = new ContextMenu(requestor);
        ContextMenuStrip3.Attach(win.Control("ContextMenuStrip3"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.Tab_Select) == "function")
            win.AttachEvent("tab_1", "SelectionChanged", self.Tab_Select);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("tab_2", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_lxr", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_EntertoTab) == "function")
            win.AttachEvent("dw_lxr", "KeyDown", self.dw_EntertoTab);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_yh", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_EntertoTab) == "function")
            win.AttachEvent("dw_yh", "KeyDown", self.dw_EntertoTab);

        if (typeof (self.dw_Jsbm_GetFocus) == "function")
            win.AttachEvent("dw_jsbm", "GetFocus", self.dw_Jsbm_GetFocus);

        if (typeof (self.dw_EntertoTab) == "function")
            win.AttachEvent("dw_jsbm", "KeyDown", self.dw_EntertoTab);

        if (typeof (self.gnkh_RowFocusChanged) == "function")
            win.AttachEvent("dw_gnkh_list", "RowFocusChanged", self.gnkh_RowFocusChanged);

        if (typeof (self.dw_gnkh_lxr_Clicked) == "function")
            win.AttachEvent("dw_gnkh_lxr", "Clicked", self.dw_gnkh_lxr_Clicked);

        if (typeof (self.dw_gnkh_lxr_GetFocus) == "function")
            win.AttachEvent("dw_gnkh_lxr", "GetFocus", self.dw_gnkh_lxr_GetFocus);

        if (typeof (self.dw_gnkh_shdz_Clicked) == "function")
            win.AttachEvent("dw_gnkh_shdz", "Clicked", self.dw_gnkh_shdz_Clicked);

        if (typeof (self.dw_gnkh_shdz_GetFocus) == "function")
            win.AttachEvent("dw_gnkh_shdz", "GetFocus", self.dw_gnkh_shdz_GetFocus);

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

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_preview", "Clicked", self.Print);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("m_5", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_6", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("m_8", "Clicked", self.CopyCol);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("m_12", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_13", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("m_15", "Clicked", self.CopyCol);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tab_1.Detach(); tab_1 = null;
        tab_2.Detach(); tab_2 = null;
        dw_print.Detach(); dw_print = null;
        dw_master.Detach(); dw_master = null;
        dw_lxr.Detach(); dw_lxr = null;
        dw_yh.Detach(); dw_yh = null;
        dw_jsbm.Detach(); dw_jsbm = null;
        dw_gnkh_list.Detach(); dw_gnkh_list = null;
        dw_gnkh_lxr.Detach(); dw_gnkh_lxr = null;
        dw_gnkh_shdz.Detach(); dw_gnkh_shdz = null;
        tb_1.Detach(); tb_1 = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        ContextMenuStrip3.Detach(); ContextMenuStrip3 = null;
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
    var iw_Wldw_Select = null;

    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Gnkhsy.ashx");

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

        tb_1.SetEnabled("btn_save", bEditFlag);

        if (bEditFlag) {

             dw_gnkh_lxr.Modify("DataWindow.Readonly=no");
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_lxr.Modify("DataWindow.Readonly=yes");
            dw_yh.Modify("DataWindow.Readonly=yes");
            dw_jsbm.Modify("DataWindow.Readonly=yes");
            dw_gnkh_shdz.Modify("DataWindow.Readonly=no");
        }
        else {
             dw_gnkh_lxr.Modify("DataWindow.Readonly=yes");
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_lxr.Modify("DataWindow.Readonly=yes");
            dw_yh.Modify("DataWindow.Readonly=yes");
            dw_jsbm.Modify("DataWindow.Readonly=yes");
            dw_gnkh_shdz.Modify("DataWindow.Readonly=yes");
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
            }
        }
        else {
            self.SetEditMode("Show");
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
        this.dw_gnkh_lxr_GetFocus = function (sender) {
            lastdw.Attach(sender);
        };
        //#endregion



        //#region 获得数据窗口的焦点
        var lastdw = new DataWindow();
        this.dw_gnkh_shdz_GetFocus = function (sender) {
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
             
            if (dw_gnkh_lxr.AcceptText() != 1)
                return;
            if (dw_gnkh_list.AcceptText() != 1)
                return;
            if (dw_gnkh_shdz.AcceptText() != 1)
                return;
            if ((dw_gnkh_lxr.ModifiedCount() + dw_gnkh_lxr.DeletedCount() + dw_gnkh_list.ModifiedCount() + dw_gnkh_list.DeletedCount() + dw_gnkh_shdz.ModifiedCount() + dw_gnkh_shdz.DeletedCount()) <= 0) {
                alert("没有数据需要保存!");
                return;
            }

            var tybm = dw_gnkh_list.GetItemString(1, "tybm")


            //更新行号
            for (row = dw_gnkh_lxr.RowCount(); row > 0; row--) {
                dw_gnkh_lxr.SetItem(row, "cxh", row);
                dw_gnkh_lxr.SetItem(row, "yw_khbm", tybm);
            }

            //更新行号
            for (row = dw_gnkh_shdz.RowCount(); row > 0; row--) {
                dw_gnkh_shdz.SetItem(row, "cxh", row);
                dw_gnkh_shdz.SetItem(row, "yw_khbm", tybm);
            }


            var dw_gnkh_lxr_data = dw_gnkh_lxr.GetChanges();
            var dw_gnkh_list_data = dw_gnkh_list.GetChanges();
            var dw_gnkh_shdz_data = dw_gnkh_shdz.GetChanges();
            if (dw_gnkh_lxr_data == "" && dw_gnkh_list_data == "" && dw_gnkh_shdz_data == "")
                return;



            //执行保存的WebService
            webReq.SetFunctionID(requestor.GetFunctionID());
            webReq.Invoke("Save",  "&dw_gnkh_lxr=" + dw_gnkh_lxr_data + "&dw_gnkh_list=" + dw_gnkh_list_data + "&dw_gnkh_shdz=" + dw_gnkh_shdz_data + "&tybm=" + tybm + "&operation=" + editMode);

            if (webReq.StatusCode() == 200) {
                //服务器成功处理，返回单号
                var yw_khbm = webReq.ResponseText();
                dw_master.SetItem(1, "tybm", tybm);
                dw_master.ResetUpdate();
                requestor.MessageBox("提示", "数据保存成功!");
                self.Exit();
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
        dw_gnkh_lxr.AcceptText();
        dw_gnkh_list.AcceptText();
        dw_gnkh_shdz.AcceptText();
        if (( dw_gnkh_lxr.ModifiedCount() + dw_gnkh_lxr.DeletedCount() + dw_gnkh_list.ModifiedCount() + dw_gnkh_list.DeletedCount() + dw_gnkh_shdz.ModifiedCount() + dw_gnkh_shdz.DeletedCount()) <= 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion


        //#region 打印 
        this.Print = function () {
            var tybm = dw_master.GetItemString(1, "tybm");
            dw_print.Retrieve(tybm);
            dw_print.PrintPreview();
        }
        //#endregion



       
        //#region 双击选择
        this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;
          

        };
        //#endregion

        //#region dw_jzxxx dw_jzxxx_DoubleClicked
        this.dw_gnkh_lxr_Clicked = function (xPos, yPos, Row, dwoName) {
            dw_gnkh_lxr.SetFocus();

        }
        //#endregion


        //#region dw_jzxxx dw_jzxxx_DoubleClicked
        this.dw_gnkh_shdz_Clicked = function (xPos, yPos, Row, dwoName) {
            dw_gnkh_shdz.SetFocus();

        }
        //#endregion

        //#region 双击选择
        this.dw_master_ButtonClicked = function (Row, dwoName) {
            if (editMode == "show")
                return;
            

        };
        //#endregion

        

        //#region 添加明细
            this.AddRow = function () {
              
       
            if (lastdw.GetName() == "dw_gnkh_lxr") {
                var row = dw_gnkh_lxr.InsertRow(0);
                dw_gnkh_lxr.ScrollToRow(row);
                dw_gnkh_lxr.SetFocus();
            }
            if (lastdw.GetName() == "dw_gnkh_shdz") {
                var row = dw_gnkh_shdz.InsertRow(0);
                dw_gnkh_shdz.ScrollToRow(row);
                dw_gnkh_shdz.SetFocus();
            }

        }
        //#endregion

        //#region 删除商品
        this.DeleteRow = function () {
            var row = lastdw.GetRow();
            if (row <= 0)
                return;

            if (lastdw.GetName() == "dw_gnkh_lxr") {

                var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }
                lastdw.DeleteRow(row);
            }

           


            if (lastdw.GetName() == "dw_gnkh_shdz") {

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
            if (lastdw.GetName() == 'dw_lxr') {
                var row = dw_lxr.GetRow();
                if (row <= 0)
                    return;
                dw_lxr.RowsCopy(row, row, DWBUFFER.Primary, dw_lxr, row + 1, DWBUFFER.Primary)
                dw_lxr.ScrollToRow(row + 1);
            }
            
            if (lastdw.GetName() == 'dw_gnkh_shdz') {
                var row = dw_gnkh_shdz.GetRow();
                if (row <= 0)
                    return;
                dw_gnkh_shdz.RowsCopy(row, row, DWBUFFER.Primary, dw_gnkh_shdz, row + 1, DWBUFFER.Primary)
                dw_gnkh_shdz.ScrollToRow(row + 1);
            }


        }
        //#endregion

        
        //#region 插入商品
        this.InsertRow = function () {
            if (lastdw.GetName() == "dw_gnkh_lxr") {
                var row = dw_gnkh_lxr.InsertRow(dw_gnkh_lxr.GetRow());
                dw_gnkh_lxr.ScrollToRow(row);
                dw_gnkh_lxr.SetFocus();
            }
             
            if (lastdw.GetName() == "dw_gnkh_shdz") {
                var row = dw_gnkh_shdz.InsertRow(dw_gnkh_lxr.GetRow());
                dw_gnkh_shdz.ScrollToRow(row);
                dw_gnkh_shdz.SetFocus();
            }


        }
        //#endregion


        //#region 复制商品
        this.Tybmgg = function () {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gnkh_tybm";

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var tybm = dw_gnkh_list.GetItemString(1, "tybm"); 
            iw_Wldw_Select.SetDataWindow_gnkh(dw_gnkh_list);
            iw_Wldw_Select.SetDataWindow_lxr(dw_gnkh_lxr);
            iw_Wldw_Select.SetData("gnkh_tybm"); 
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx + "&tybm=" + tybm, iw_Wldw_Select);
            dw_master.SetFocus();

        }
        //#endregion


        //#region
        this.gnkh_RowFocusChanged = function (Row, dwoName) {
            if (Row > 0) {
                var yw_khbm = dw_gnkh_list.GetItemString(Row, "yw_khbm")
                dw_master.ScrollToRow(Row)
                dw_lxr.SetFilter("yw_khbm = '" + yw_khbm + "'");
                dw_lxr.Filter();
                dw_yh.SetFilter("yw_khbm = '" + yw_khbm + "'");
                dw_yh.Filter();
                dw_jsbm.SetFilter("yw_khbm = '" + yw_khbm + "'");
                dw_jsbm.Filter();

                var lx = "Wldw";
                var gjz = dw_master.GetItemString(Row, "yw_khbm");
                var user = dw_master.GetItemString(Row, "sqr");
                if (gjz == null || gjz == "") {
                    alert("数据还未保存，不能添加附件，请先存盘!");
                    return;
                }
                else {
                   // wb_fj.Navigate("/WebExplorer.htm?lx=" + lx + "&gjz=" + gjz + "&user=" + user);
                }
            }
        }
        //#endregion

        //#region tabselect
        this.Tab_Select = function () {
            var bEditFlag = false;
            if (tab_1.GetSelectedTab() == 1) {
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
            if (tab_1.GetSelectedTab() == 3) {
                if (dw_gnkh_lxr.RowCount() == 0) {
                    dw_gnkh_lxr.InsertRow(0);
                    dw_gnkh_lxr.SetFocus();
                }
                if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                    bEditFlag = true;
                }
                else {
                    bEditFlag = false;
                };
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
            }
            if (tab_1.GetSelectedTab() == 4) {
                if (dw_gnkh_shdz.RowCount() == 0) {
                    dw_gnkh_shdz.InsertRow(0);
                    dw_gnkh_shdz.SetFocus();
                }
                if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                    bEditFlag = true;
                }
                else {
                    bEditFlag = false;
                };
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
            }           

        };
        //#endregion

        //#region 附件上传
        this.UploadFile = function () {
            //            requestor.ShowModalDialog("/UploadFile.aspx", null, null);


        }
        //#endregion

};