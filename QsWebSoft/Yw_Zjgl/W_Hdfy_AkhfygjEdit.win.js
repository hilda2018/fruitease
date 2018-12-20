///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hdfy_AkhfygjEdit() {

    var self = this;
    var requestor = new PBWindow();
    var dw_log = new DataWindow(requestor);
    var sle_ts = new SingleLineEdit(requestor);
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var tab_1 = new TabControl(requestor);
    var dw_cmd = new DataWindow(requestor);
    var ds_1 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
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
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_master_DoubleClicked) == "function")
            win.AttachEvent("dw_master", "DoubleClicked", self.dw_master_DoubleClicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.AddRow);

        if (typeof (self.AddSinRow) == "function")
            win.AttachEvent("btn_rowoneadd", "Clicked", self.AddSinRow);

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

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_log.Detach(); dw_log = null;
        sle_ts.Detach(); sle_ts = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        tab_1.Detach(); tab_1 = null;
        dw_cmd.Detach(); dw_cmd = null;
        ds_1.Detach(); ds_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iW_Hddz_Ysjjf_Select = null;
    var dwc = new DataWindowChild();
    var iw_Wldw_Select = null;
    var iw_Wldw_Zfdx_Select = null;
    var iw_Wldw_Yh_Select = null;
    var iW_Hdfy_Akhfygj_Select = null;
    var iw_Wldw_Jsbm_Select = null;
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hdfy_Akhfygj.ashx");

    
    
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
        var yshdfygjbh = dw_master.GetItemString(row, "yshdfygjbh");

        var fymc = ""
        for (var i = dw_cmd.RowCount(); i > 0; i--) {
            var ywbh1 = dw_cmd.GetItemString(i, "ywbh");
            if (ywbh1 == "" || ywbh1 == '') {
                alert("业务编号不能为空！不能保存！！");
                return;
            }

        }
        //更新行号
        var hz_jzxh = ""
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            dw_cmd.SetItem(row, "yshdfygjbh", yshdfygjbh);
            dw_cmd.SetItem(row, "cxh_sqdbh", row);
            fymc = dw_jzxxx.GetItemString(row, "fymc_jsl");
            dw_cmd.SetItem(row, "fymc", fymc);
        }

        var userid = requestor.GetParm("userid");
        var d = new Date();

        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", d.getVarDate());
        dw_master.SetItem(1, "gjsj", d.getVarDate());
        dw_master.SetItem(1, "bs", 2);

        if (dw_cmd.RowCount() == 0) {
            alert("没有明细信息!");
            dw_cmd.SetFocus();
            return;
        }

        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();


        if (dw_master_data == "" && dw_cmd_data == "")
            return;

        //数据同步生鲜港
        var ywbh = dw_master.GetItemString(1, "yshdfygjbh");
        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_hddz_yshdfygj");
        dw_log.SetItem(row, "changecols", "");
        dw_log.SetItem(row, "mainid", ywbh);
        dw_log.ScrollToRow(row);

        //        for (var i = 1; i <= dw_jzxxx.RowCount(); i++) {
        //            if (dw_jzxxx.GetItemStatus(i, 0, DWBUFFER.Primary) == 1 || dw_jzxxx.GetItemStatus(i, 0, DWBUFFER.Primary) == 3) {
        //                var ywbh = dw_jzxxx.GetItemString(i, "yshdfygjbh");
        //                var cxh = dw_jzxxx.GetItemNumber(i, "cxh");
        //                var row = dw_log.InsertRow(0);
        //                //var maxNumber =  self.SerialNumber(log_num);
        //                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

        //                dw_log.SetItem(row, "eid", serialNumber);
        //                dw_log.SetItem(row, "tablename", "yw_hddz_yshdfygj_cmd");
        //                dw_log.SetItem(row, "changecols", "");
        //                dw_log.SetItem(row, "mainid", ywbh);
        //                dw_log.SetItem(row, "parameters", cxh.toString());
        //                dw_log.ScrollToRow(row);
        //            }
        //        }

        dw_log.AcceptText()
        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;


        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_cmd=" + dw_cmd_data + "&dw_log=" + dw_log_data + "&yshdfygjbh=" + yshdfygjbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            yshdfygjbh = webReq.ResponseText();
            dw_master.SetItem(1, "yshdfygjbh", yshdfygjbh);


            for (row = 1; row <= dw_cmd.RowCount(); row++) {
                dw_cmd.SetItem(row, "yshdfygjbh", yshdfygjbh);
                dw_cmd.SetItem(row, "cxh", row);
            }


            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();

            self.SetEditMode("open");

            //更新对应表数据
            QsWebSoft.PubMethod.UpdateYshdfygj(yshdfygjbh);

            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("sqdbh.Tabsequence=0");

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
        if (iW_Hdfy_Akhfygj_Select == null)
            iW_Hdfy_Akhfygj_Select = new W_Hdfy_Akhfygj_Select();
        var ShareMode = requestor.GetParm("ShareMode");
        var ywy = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        row = dw_cmd.InsertRow(dw_cmd.GetRow());
        var dwo = dw_cmd.GetDataObject();
        var yshdfygjbh = dw_master.GetItemString(1, "yshdfygjbh");
        var jdrbm = dw_master.GetItemString(1, "jdrbm");

        iW_Hdfy_Akhfygj_Select.SetRow(row);
        iW_Hdfy_Akhfygj_Select.SetDwo(dwo);
        iW_Hdfy_Akhfygj_Select.SetDetailDW(dw_cmd);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hdfy_Akhfygj_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&yshdfygjbh=' + yshdfygjbh + '&jdrbm=' + jdrbm, iW_Hdfy_Akhfygj_Select);

    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
        dw_master.AcceptText();
        if (dw_master.GetItemString(1, "jdrjc") == "" || dw_master.GetItemString(1, "jdrjc") == null) {
            requestor.MessageBox("", "请选择接单人!");
            return;
        }
        if (iW_Hdfy_Akhfygj_Select == null)
            iW_Hdfy_Akhfygj_Select = new W_Hdfy_Akhfygj_Select();
        var ShareMode = requestor.GetParm("ShareMode");
        var ywy = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var dwo = dw_cmd.GetDataObject();
        var jdrbm = dw_master.GetItemString(1, "jdrbm");

        //        row = dw_cmd.InsertRow(dw_cmd.RowCount());
        row = dw_cmd.RowCount();

        iW_Hdfy_Akhfygj_Select.SetRow(row);
        iW_Hdfy_Akhfygj_Select.SetDwo(dwo);
        iW_Hdfy_Akhfygj_Select.SetDetailDW(dw_cmd);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hdfy_Akhfygj_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&jdrbm=' + jdrbm, iW_Hdfy_Akhfygj_Select);
    }
    //#endregion

    this.AddSinRow = function () {
        dw_master.AcceptText();
        if (dw_master.GetItemString(1, "jdrjc") == "" || dw_master.GetItemString(1, "jdrjc") == null) {
            requestor.MessageBox("", "请选择接单人!");
            return;
        }
        var row = dw_cmd.InsertRow(0);
        dw_cmd.SetItem(row, "jdrbm", dw_master.GetItemString(1, "jdrbm"));
        dw_cmd.SetItem(row, "jdrjc", dw_master.GetItemString(1, "jdrjc"));
        dw_cmd.SetItem(row, "jdrmc", dw_master.GetItemString(1, "jdrmc"));
        dw_cmd.SetItem(row, "jdrpym", dw_master.GetItemString(1, "jdrpym"));
    }

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


    //#region 打印 
    this.Print = function () {

        var sqdbh = dw_master.GetItemString(1, "sqdbh");

        var state = dw_master.GetItemString(1, 'state')
        if (state != "提交") {
            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
            return;
        }


        dw_print.SetDataObject("dw_hddz_ysjjf_print");
        dw_print.Retrieve(sqdbh);
        dw_print.PrintPreview();
    }
    //#endregion
  
    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
         
    }
    //#endregion

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
//        dw_cmd.Reset();
//        dw_cmd.InsertRow(0);

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

        dw_master.SetItem(1, "yshdfygjbh", "");
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

        //接单人
        if (dwoName == "jdrjc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            jdr = "jdr";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_jdr");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "khjc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "all";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("akhfygj_khjc");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "jsdwjc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "all";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("akhfygj_jsdwjc");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "jsbm_t") {
            if (iw_Wldw_Jsbm_Select == null)
                iw_Wldw_Jsbm_Select = new W_Wldw_Jsbm_Select();
            var yw_khbm = dw_master.GetItemString(1, "jsdwbm");
            iw_Wldw_Jsbm_Select.SetDataWindow(dw_master);
            iw_Wldw_Jsbm_Select.SetData("jsdwqr_zfdx");
            iw_Wldw_Jsbm_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Jsbm_Select&yw_khbm=" + yw_khbm, iw_Wldw_Jsbm_Select);
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

    //#region dw_cmd dw_cmd_DoubleClicked
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "zfdxjc") {
            if (iw_Wldw_Zfdx_Select == null)
                iw_Wldw_Zfdx_Select = new W_Wldw_Zfdx_Select();
            var ywbh =  dw_cmd.GetItemString(Row,"ywbh");
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Zfdx_Select.SetDataWindow(dw_cmd);
            iw_Wldw_Zfdx_Select.SetData("hdfyjydfy_zfdx");
            iw_Wldw_Zfdx_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Zfdx_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh, iw_Wldw_Zfdx_Select);
            dw_master.SetFocus();
         
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
//        if (dwoName == "fybm") {
//            var ywbh = dw_cmd.GetItemString(row, "ywbh")
//            var sqdbh = dw_cmd.GetItemString(row, "sqdbh")
////            var ysfs = dw_cmd.GetItemString(row, "ysfs")
//            var jzxh = dw_cmd.GetItemString(row, "jzxh")
//            var tpxx = dw_cmd.GetItemNumber(row, "tpxx")
//            var zhlx = dw_cmd.GetItemString(row, "zhlx")
//            var fkcs = 0
//            if (sqdbh == null) {
//                sqdbh = ""
//            }
//            if (ysfs == "海运") {
//                fkcs = QsWebSoft.PubMethod.ReadJzxFycs(ywbh, jzxh, data, sqdbh).value;
//                for (var rowfind = 1; rowfind <= dw_cmd.RowCount(); rowfind++) {
//                    if (dw_cmd.Find("ywbh = '" + ywbh + "' and jzxh = '" + jzxh + "' and  fybm = '" + data + "'", rowfind, rowfind) > 0) {
//                        fkcs++
//                    }
//                };
//            } else {
//                fkcs = QsWebSoft.PubMethod.ReadKyFycs(ywbh, tpxx, zhlx, data, sqdbh).value;
//                for (var rowfind = 1; rowfind <= dw_cmd.RowCount(); rowfind++) {
//                    if (dw_cmd.Find("ywbh = '" + ywbh + "' and tpxx = " + tpxx + " and zhlx = '" +zhlx + "' and  fybm = '" + data + "'", rowfind, rowfind) > 0) {
//                        fkcs++
//                    }
//                };
//            }            
//            dw_cmd.SetItem(row, "fkcs", fkcs + 1)
//        }
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





