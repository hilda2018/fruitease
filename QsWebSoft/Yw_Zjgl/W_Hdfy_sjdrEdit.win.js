///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hdfy_sjdrEdit() {

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl(requestor);
    var dw_cmd = new DataWindow(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_sjdr = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind; 
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_cmd == null) dw_cmd = new DataWindow(requestor);
        dw_cmd.Attach(win.Control("dw_cmd"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_sjdr == null) ds_sjdr = new DataStore(requestor);
        ds_sjdr.Attach(win.Control("ds_sjdr"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.Tab_Select) == "function")
            win.AttachEvent("tab_1", "Clicked", self.Tab_Select);

        if (typeof (self.dw_cmd_Clicked) == "function")
            win.AttachEvent("dw_cmd", "Clicked", self.dw_cmd_Clicked);

        if (typeof (self.dw_cmd_DoubleClicked) == "function")
            win.AttachEvent("dw_cmd", "DoubleClicked", self.dw_cmd_DoubleClicked);

        if (typeof (self.dw_cmd_GetFocus) == "function")
            win.AttachEvent("dw_cmd", "GetFocus", self.dw_cmd_GetFocus);

        if (typeof (self.dw_cmd_ItemChanged) == "function")
            win.AttachEvent("dw_cmd", "ItemChanged", self.dw_cmd_ItemChanged);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.sjdr) == "function")
            win.AttachEvent("btn_sjdr", "Clicked", self.sjdr);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

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

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tab_1.Detach(); tab_1 = null;
        dw_cmd.Detach(); dw_cmd = null;
        dw_print.Detach(); dw_print = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_sjdr.Detach(); ds_sjdr = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iW_Hddz_Yfjjf_Select = null;
    var dwc = new DataWindowChild();
    var iw_Wldw_Select = null;
    var iw_Wldw_Zfdx_Select = null;
    var iw_Wldw_Yh_Select = null;
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor(); 
    webReq.SetWebServiceUrl("/Service/Hdfy_yfjjf.ashx");

    
    
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
            dw_cmd.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_cmd.Modify("DataWindow.Readonly=yes");
           
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


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_cmd_GetFocus = function (sender) {
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

        if ((dw_master.ModifiedCount() + dw_cmd.DeletedCount() + dw_cmd.ModifiedCount()) > 0) {
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

        if ((dw_master.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_master.GetRow();
        var sjdrbh = dw_master.GetItemString(row, "sjdrbh");

        var fymc = ""
        //        dw_master.SetItem(1, "je", je_sum);
        //        dw_master.SetItem(1, "zrmbje", zrmbje);

        //更新行号
        var hz_jzxh = ""
        var ywbh_err = 0;
        
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            dw_cmd.SetItem(row, "sjdrbh", sjdrbh);
            dw_cmd.SetItem(row, "cxh", row);
            if (dw_cmd.GetItemString(row, "ywbh") == "" || dw_cmd.GetItemString(row, "ywbh") == null) {
                ywbh_err += 1;
            }

            var ce = dw_cmd.GetItemNumber(row, "ce");
            var checkbox = dw_cmd.GetItemString(row, "checkbox");

            if (ce > 100 || ce < -100) {
                if (checkbox != 'Y') {
                  
                    alert("不能保存，请确认后在保存！！");
                    return;
                }
            }

        }
        if (ywbh_err > 0) {
            alert("请输入业务编号!");
            dw_cmd.SetFocus();
            return;
        }

        if (dw_cmd.RowCount() == 0) {
            alert("没有明细信息!");
            dw_cmd.SetFocus();
            return;
        }


        for (var i = 0; i < length; i++) {

        }


        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();


        if (dw_master_data == "" && dw_cmd_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("SjdrEditSave", "dw_master=" + dw_master_data + "&dw_cmd=" + dw_cmd_data + "&sjdrbh=" + sjdrbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            sjdrbh = webReq.ResponseText();
            dw_master.SetItem(1, "sjdrbh", sjdrbh);


            for (row = 1; row <= dw_cmd.RowCount(); row++) {
                dw_cmd.SetItem(row, "sjdrbh", sjdrbh);
                dw_cmd.SetItem(row, "cxh", row);
            }


            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();

            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("sjdrbh.Tabsequence=0");

            //dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion

    //#region 数据导入
    this.sjdr = function () {
        ds_sjdr.ImportFile();
        var sjdrbh1 = requestor.GetParm("sjdrbh1");
        for (var row = 1; row <= ds_sjdr.RowCount(); row++) {
            var rq = ds_sjdr.GetItemString(row, "rq");
            var djh = ds_sjdr.GetItemString(row, "djh");

            var je = ds_sjdr.GetItemString(row, "je");

            var jelx = ds_sjdr.GetItemString(row, "jelx");
            var jelxs = jelx.substring(0, 2);
            if (jelxs == "进口") {
                var Sub_jelx = jelx.substring(2, jelx.length);
            } else {
                var Sub_jelx = jelx;
            }


            var row1 = dw_cmd.InsertRow(row);
            var str1 = je.replace(',', '');
            var bgdh = "";
            bgdh = djh.substring(0, djh.length - 2);


            //            if (bgdh == "" || bgdh == null) {
            //                bgdh = djh.substring(0, djh.lastIndexOf('/'));
            //            }
            var ywbhHth = QsWebSoft.PubMethod.GetBgdhYwbh(bgdh).value;
            //            var zzs = QsWebSoft.PubMethod.GetSjdrZzs(bgdh).value;
            //            var gs = QsWebSoft.PubMethod.GetSjdrgs(bgdh).value;
            //            var bzj = QsWebSoft.PubMethod.GetSjdrbzj(bgdh).value;
            var ywbh = "";
            var hth = ""
            if (ywbhHth != "" && ywbhHth != null) {
                var ywbh = ywbhHth.substring(0, ywbhHth.lastIndexOf(','));
                var hth = ywbhHth.substring(ywbhHth.lastIndexOf(',') + 1, ywbhHth.length);
            }
            var ygzzs = QsWebSoft.PubMethod.p_hddz_sjdr_ygzzs(ywbh).value;
            var yggs = QsWebSoft.PubMethod.p_hddz_sjdr_yggs(ywbh).value;

            var dd = rq.replace(/-/g, '/');
            var date = new Date(dd);

            dw_cmd.SetItem(row, "rq", date.getVarDate());
            dw_cmd.SetItem(row, "je", parseFloat(str1));
            dw_cmd.SetItem(row, "djh", djh);
            dw_cmd.SetItem(row, "cxh", row);
            dw_cmd.SetItem(row, "sjdrbh", sjdrbh1);
            dw_cmd.SetItem(row, "ywbh", ywbh);
            dw_cmd.SetItem(row, "hth", hth);
            dw_cmd.SetItem(row, "ygzzs", ygzzs);
            dw_cmd.SetItem(row, "yggs", yggs);
            dw_cmd.SetItem(row, "sjlx", Sub_jelx);



            var djhwh = djh.substring(djh.lastIndexOf("-") + 1, djh.length);



            //var djhwh = djh.substring(djh.lastIndexOf("/") + 1, djh.length);

            // if (djhwh.indexOf("A") >= 0) {
            //dw_cmd.SetItem(row, "sjlx", "关税");
            var gs = QsWebSoft.PubMethod.GetSjdrgs(bgdh).value;
            //                if (gs != 0) {
            //                    dw_cmd.SetItem(row, "sjlx", "补交关税");
            //                } else {
            //                    dw_cmd.SetItem(row, "sjlx", "关税");
            //                }
            var ce = parseFloat(yggs) - parseFloat(gs) - parseFloat(str1);

            dw_cmd.SetItem(row, "ce", ce);
            dw_cmd.SetItem(row, "gs", gs);
            //            } else if (djhwh.indexOf("L") >= 0) {
            //                dw_cmd.SetItem(row, "sjlx", "增值税");
            //            }
            var zzs = QsWebSoft.PubMethod.GetSjdrZzs(bgdh).value;
            //            if (zzs != 0) {
            //                dw_cmd.SetItem(row, "sjlx", "补交增值税");
            //            } else {
            //                dw_cmd.SetItem(row, "sjlx", "增值税");
            //            }
            var ce = parseFloat(ygzzs) - parseFloat(zzs) - parseFloat(str1);
            dw_cmd.SetItem(row, "ce", ce);
            dw_cmd.SetItem(row, "zzs", zzs);
            //                //self.Dw_RowFocusChanging();

            //            } else if (djhwh.indexOf("U") >= 0) {
            //                dw_cmd.SetItem(row, "sjlx", "滞报金");
            var xfs = QsWebSoft.PubMethod.GetZbj(bgdh).value;
            dw_cmd.SetItem(row, "xfs", xfs);
            //            } else if (djhwh.indexOf("Y") >= 0) {
            //                dw_cmd.SetItem(row, "sjlx", "消费税");
            //                var xfs = QsWebSoft.PubMethod.GetXfs(bgdh).value;
            //                dw_cmd.SetItem(row, "xfs", xfs);
            //            }
            //            else{
            //                dw_cmd.SetItem(row, "sjlx", "保证金");
            //                var bzj = QsWebSoft.PubMethod.GetSjdrbzj(bgdh).value;
            //                dw_cmd.SetItem(row, "bzj", bzj);
            //            }

            dw_cmd.ScrollToRow(row1);
            dw_cmd.SetFocus();
        }
    }
//    this.Dw_RowFocusChanging = function(sender, currentRow, newRow) {
//        if (newRow == 0) {
//            return 0;
//        }
//        else {
//            var parent = window.event.srcElement.parentElement;
//            var new_id = parent.id;
//            var old_id;
//            var last;
//            last = new_id.lastIndexOf("_");
//            if (last > 0 && currentRow > 0) {
//                old_id = new_id.substring(0, last + 1) + (currentRow - 1);
//                document.getElementById(old_id).style.backgroundColor = "#FFFFFF";
//            }
//            parent.style.backgroundColor = "#EFD890";
//        }
//    }  
    //#region 插入商品
    this.InsertRow = function () {
        if (iW_Hddz_Yfjjf_Select == null)
            iW_Hddz_Yfjjf_Select = new W_Hddz_Yfjjf_Select();
        var ShareMode = requestor.GetParm("ShareMode");
        var ywy = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        row = dw_cmd.InsertRow(dw_cmd.GetRow());
        var dwo = dw_cmd.GetDataObject();
        var sjdrbh = dw_master.GetItemString(1, "sjdrbh");
        var sjskrbm = dw_master.GetItemString(1, "sjskrbm");
        var skbl = dw_master.GetItemString(1, "skbl");

        iW_Hddz_Yfjjf_Select.SetRow(row);
        iW_Hddz_Yfjjf_Select.SetDwo(dwo);
        iW_Hddz_Yfjjf_Select.SetDetailDW(dw_cmd);
        iW_Hddz_Yfjjf_Select.SetSkbl(skbl);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Yfjjf_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&sjdrbh=' + sjdrbh + '&Sjskrbm=' + sjskrbm, iW_Hddz_Yfjjf_Select);

    }
    //#endregion

//    //#region 添加明细
//    this.AddRow = function () {
//        dw_master.AcceptText();
//        var skbl = dw_master.GetItemNumber(1, "skbl");
//        if (skbl == "" || skbl == null) {
//            requestor.MessageBox("", "请输入收款比例!");
//            return;
//        }
//        if (iW_Hddz_Yfjjf_Select == null)
//            iW_Hddz_Yfjjf_Select = new W_Hddz_Yfjjf_Select();
//        var ShareMode = requestor.GetParm("ShareMode");
//        var ywy = requestor.GetParm("userid");
//        var Dlwtf = requestor.GetParm("Dlwtf");
//        var dwo = dw_cmd.GetDataObject();
//        var sjskrbm = dw_master.GetItemString(1, "sjskrbm");
//        var skbl = dw_master.GetItemNumber(1, "skbl");

////        row = dw_cmd.InsertRow(dw_cmd.RowCount());
//        row = dw_cmd.RowCount();

//        iW_Hddz_Yfjjf_Select.SetRow(row);
//        iW_Hddz_Yfjjf_Select.SetDwo(dwo);
//        iW_Hddz_Yfjjf_Select.SetDetailDW(dw_cmd);
//        iW_Hddz_Yfjjf_Select.SetSkbl(skbl);

//        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Yfjjf_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&Sjskrbm=' + sjskrbm, iW_Hddz_Yfjjf_Select);


//    }
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
        var row = dw_cmd.GetRow();
        if (row <= 0)
            return;
        dw_cmd.RowsCopy(row, row, DWBUFFER.Primary, dw_cmd, row + 1, DWBUFFER.Primary)
        dw_cmd.ScrollToRow(row + 1);
      
    }
    //#endregion


//    //#region 打印 
//    this.Print = function () {

//        var sjdrbh = dw_master.GetItemString(1, "sjdrbh");

//        var state = dw_master.GetItemString(1, 'state')
//        if (state != "提交") {
//            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
//            return;
//        }


//        dw_print.SetDataObject("dw_hddz_yfjjf_print");
//        dw_print.Retrieve(sjdrbh);
//        dw_print.PrintPreview();
//    }
//    //#endregion

   

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
        //        dw_cmd.Reset();
        //        dw_cmd.InsertRow(0);

        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");
        var sjdrbh1 = requestor.GetParm("sjdrbh1");
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
        dw_master.SetItem(1, 'sjdrbh', sjdrbh1);
        dw_master.SetItem(1, 'zbrq', date.getVarDate());
        self.SetEditMode("new");
    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "sjdrbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate()); 
        
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        if (dwoName == "sjskrbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            
            iw_Wldw_Select.SetData("hdfyjydfy_sjskr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "sjskrkhyh_t") {
            if (iw_Wldw_Yh_Select == null)
                iw_Wldw_Yh_Select = new W_Wldw_Yh_Select();
            var sjskrbm = dw_master.GetItemString(1, "sjskrbm");
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Yh_Select.SetDataWindow(dw_master);
            iw_Wldw_Yh_Select.SetData("hdfyjydfy_sjskryh");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Yh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&yw_khbm=" + sjskrbm, iw_Wldw_Yh_Select);
            dw_master.SetFocus();

        }

     
    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "wbbb") {
            var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb(data).value;
            var je = dw_master.GetItemNumber(1, "je");
            dw_master.SetItem(1, "zrmbhl", zrmbhl);

            dw_master.SetItem(1, "zrmbje", zrmbhl * je);
        }
       
    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
       
    }
    //#endregion

    var iW_Hddz_Select = null;
    //#region dw_cmd dw_cmd_DoubleClicked
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "zfdxjc") {
                if (iw_Wldw_Zfdx_Select == null)
                    iw_Wldw_Zfdx_Select = new W_Wldw_Zfdx_Select();
                var ywbh = dw_cmd.GetItemString(Row, "ywbh");
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Zfdx_Select.SetDataWindow(dw_cmd);
                iw_Wldw_Zfdx_Select.SetData("hdfyjydfy_zfdx");
                iw_Wldw_Zfdx_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Zfdx_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh, iw_Wldw_Zfdx_Select);
                dw_master.SetFocus();
            }
            if (dwoName == "ywbh") {
                if (iW_Hddz_Select == null)
                    iW_Hddz_Select = new W_Hddz_Select();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iW_Hddz_Select.SetDataWindow(dw_cmd);
                iW_Hddz_Select.SetData("sjdr");
                iW_Hddz_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iW_Hddz_Select);
                dw_master.SetFocus();
            }
//            if (dwoName == "hth") {
//                if (iW_Hddz_Select == null)
//                    iW_Hddz_Select = new W_Hddz_Select();
//                var ywy = requestor.GetParm("userid");
//                var ShareMode = requestor.GetParm("ShareMode");
//                var Dlwtf = requestor.GetParm("Dlwtf");
//                iW_Hddz_Select.SetDataWindow(dw_cmd);
//                iW_Hddz_Select.SetData("sjdr");
//                iW_Hddz_Select.SetRow(Row);
//                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iW_Hddz_Select);
//                dw_master.SetFocus();
//            }
        }
    }
    //#endregion

    //#region dw_cmd dw_cmd_Clicked
    this.dw_cmd_Clicked = function (xPos, yPos, Row, dwoName) {
       

        dw_cmd.SetFocus();

    }
    //#endregion


    //#region dw_cmd ItemChanged
    this.dw_cmd_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "fybm") {
            var ywbh = dw_cmd.GetItemString(row, "ywbh")
            var sjdrbh = dw_master.GetItemString(1, "sjdrbh")
            var ysfs = dw_cmd.GetItemString(row, "ysfs")
            var jzxh = dw_cmd.GetItemString(row, "jzxh")
            var tpxx = dw_cmd.GetItemNumber(row, "tpxx")
            var zhlx = dw_cmd.GetItemString(row, "zhlx")
            var fkcs = 0
            if (sjdrbh == null) {
                sjdrbh = ""
            }
            if (ysfs == "海运") {
                fkcs = QsWebSoft.PubMethod.ReadJzxFycs(ywbh, jzxh, data, sjdrbh).value;
                for (var rowfind = 1; rowfind <= dw_cmd.RowCount(); rowfind++) {
                    if (dw_cmd.Find("ywbh = '" + ywbh + "' and jzxh = '" + jzxh + "' and  fybm = '" + data + "'", rowfind, rowfind) > 0) {
                        fkcs++
                    }
                };
            } else {
                fkcs = QsWebSoft.PubMethod.ReadKyFycs(ywbh, tpxx, zhlx, data, sjdrbh).value;
                for (var rowfind = 1; rowfind <= dw_cmd.RowCount(); rowfind++) {
                    if (dw_cmd.Find("ywbh = '" + ywbh + "' and tpxx = " + tpxx + " and zhlx = '" +zhlx + "' and  fybm = '" + data + "'", rowfind, rowfind) > 0) {
                        fkcs++
                    }
                };
            }            
            dw_cmd.SetItem(row, "fkcs", fkcs + 1)
        }
    }
    //#endregion

    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_cmd') {
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
        }

      

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_cmd') {
            ll_row_from = dw_cmd.GetRow();
            ll_row_count = dw_cmd.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from -1 ;
            }
            else {
                ll_row_to = 1;
            }

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
        }

       

    }
    //#endregion

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

}





