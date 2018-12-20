///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_BgdjList() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var rb_wjs = new RadioButton(requestor);
    var rb_yjs = new RadioButton(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dw_1 = new HttpClientTest(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var httpClient = new HttpClientTest(requestor);
    var nvoTest = new NvoTest(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (rb_wjs == null) rb_wjs = new RadioButton(requestor);
        rb_wjs.Attach(win.Control("rb_wjs"));
        if (rb_yjs == null) rb_yjs = new RadioButton(requestor);
        rb_yjs.Attach(win.Control("rb_yjs"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dw_1 == null) dw_1 = new HttpClientTest(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (httpClient == null) httpClient = new HttpClientTest(requestor);
        httpClient.Attach(win.Control("httpClient"));
        if (nvoTest == null) nvoTest = new NvoTest(requestor);
        nvoTest.Attach(win.Control("nvoTest"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_list", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.wjsdj) == "function")
            win.AttachEvent("rb_wjs", "Clicked", self.wjsdj);

        if (typeof (self.yjsdj) == "function")
            win.AttachEvent("rb_yjs", "Clicked", self.yjsdj);

        if (typeof (self.OpenWindow) == "function")
            win.AttachEvent("btn_open", "Clicked", self.OpenWindow);

        if (typeof (self.Delete) == "function")
            win.AttachEvent("btn_delete", "Clicked", self.Delete);

        if (typeof (self.receive) == "function")
            win.AttachEvent("btn_js", "Clicked", self.receive);

        if (typeof (self.back) == "function")
            win.AttachEvent("btn_th", "Clicked", self.back);

        if (typeof (self.Copy) == "function")
            win.AttachEvent("btn_duplicate", "Clicked", self.Copy);

        if (typeof (self.Slwts) == "function")
            win.AttachEvent("btn_fs", "Clicked", self.Slwts);

        if (typeof (self.ShowExcel) == "function")
            win.AttachEvent("btn_1", "Clicked", self.ShowExcel);

        if (typeof (self.Downloadpic) == "function")
            win.AttachEvent("报关专用章ToolStripMenuItem", "Clicked", self.Downloadpic);

        if (typeof (self.Downloadpic2) == "function")
            win.AttachEvent("单证手签章ToolStripMenuItem", "Clicked", self.Downloadpic2);

        if (typeof (self.GetWlxx) == "function")
            win.AttachEvent("可视化物流信息ToolStripMenuItem", "Clicked", self.GetWlxx);

        if (typeof (self.GetHgcy) == "function")
            win.AttachEvent("海关查验信息ToolStripMenuItem", "Clicked", self.GetHgcy);

        if (typeof (self.GetBgdlz) == "function")
            win.AttachEvent("报关单流转信息ToolStripMenuItem", "Clicked", self.GetBgdlz);

        if (typeof (self.GetKlbcx) == "function")
            win.AttachEvent("靠离泊查询ToolStripMenuItem", "Clicked", self.GetKlbcx);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_1", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("取消个性化设置ToolStripMenuItem", "Clicked", self.Recover);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        tb_2.Detach(); tb_2 = null;
        sle_1.Detach(); sle_1 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        rb_wjs.Detach(); rb_wjs = null;
        rb_yjs.Detach(); rb_yjs = null;
        tb_1.Detach(); tb_1 = null;
        dw_1.Detach(); dw_1 = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        httpClient.Detach(); httpClient = null;
        nvoTest.Detach(); nvoTest = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
	


    //#region 变量定义
    var editMode = "";
    var dwc = new DataWindowChild();
    var iw_Bgdj_Slwts = null;
    var iw_Dzka_Cx = null;
    var iw_Cm_Dj = null; 
    var cloname = "";
    var billNo = "";
    var method = "";
    var entryId = "";
    var Lx = "";
    //实例化报关单据的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Bgdj.ashx");

    var webReqjh = new WebRequestor();
    webReqjh.SetWebServiceUrl("/Service/Jhdj.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        tb_1.SetVisible("btn_th", true);
        tb_1.SetVisible("btn_js", false);
//        dw_1.SetVisible("false");
//        dw_list.SetVisible("true");
        self.Retrieve();

    };
    //#endregion

    //#region 数据查询
    this.Retrieve = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        if (endDate < beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }

        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        userid = requestor.GetParm("userid");
        ShareMode = requestor.GetParm("ShareMode");
        Dlwtf = requestor.GetParm("Dlwtf");
        dw_list.Retrieve(ShareMode, userid,Dlwtf, beginDate.getVarDate(), endDate.getVarDate());



    }
    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenWindow = function () {

        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = ""
        var mxdbh = "";
        var row = 0;
        var bbh = 0;
        var status = "";
        var operation = "";
        if (rb_yjs.GetChecked() == true) {
            node = "000105";
            row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
            //如果没有数据，则返回
            if (dw_list.RowCount() <= 0)
                return;
            mxdbh = dw_list.GetItemString(dw_list.GetRow(), "mxdbh");
            bbh = dw_list.GetItemNumber(dw_list.GetRow(), "bbh");
            
            status = dw_list.GetItemString(dw_list.GetRow(), "state");
            dz_zdy = dw_list.GetItemString(dw_list.GetRow(), "dz_zdy");
            userid = requestor.GetParm("userid");
            if (dz_zdy == userid) {
//                if (status != "新制" & status != "退回" & status != "待接收" & status != "报关行拒收" & status != "客服退回") {
//                    operation = "show";
//                }
//                else {
                    operation = "open";
//                }
            }
            else {
                operation = "show";
            }
        }
        else if (rb_wjs.GetChecked() == true) {
            node = "000103";
            row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
            //如果没有数据，则返回
            if (dw_1.RowCount() <= 0)
                return;
            mxdbh = dw_1.GetItemString(dw_list.GetRow(), "mxdbh")
            bbh = dw_1.GetItemNumber(dw_list.GetRow(), "bbh")
            operation = "show";
        }



        //先取得页面父窗口的TabStrip控件
        if (ts_1 == null) {
            if (window.external != null)
                ts_1 = window.external.Control("ts_1");
        }

        if (ts_1 == null)
            return;

        //模块是否已打开
        var index = ts_1.SelectItem(node);
        if (index > 0)
            return;


        //取节点所对应的数据窗口记录

        if (row > 0) {
            openStyle = ds_1.GetItemString(row, "openStyle");
            url = ds_1.GetItemString(row, "WindowName");
            parm = ds_1.GetItemString(row, "OpenParm");
            label = ds_1.GetItemString(row, "Title");
        }

        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&mxdbh=' + mxdbh + '&bbh=' + bbh.toString() + '&operation=' + operation.toString(), true);
    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow();
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "mxdbh") {
                self.OpenWindow();
            }
        }
    }
    //#endregion



    //#region 新建
    this.New = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000103";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        var mxdbh = null;
        var bbh = 1;

        //先取得页面父窗口的TabStrip控件
        if (ts_1 == null) {
            if (window.external != null)
                ts_1 = window.external.Control("ts_1");
        }

        if (ts_1 == null)
            return;

        //模块是否已打开
        var index = ts_1.SelectItem(node);
        if (index > 0)
            return;


        //取节点所对应的数据窗口记录

        if (row > 0) {
            openStyle = ds_1.GetItemString(row, "openStyle");
            url = ds_1.GetItemString(row, "WindowName");
            parm = ds_1.GetItemString(row, "OpenParm");
            label = ds_1.GetItemString(row, "Title");
        }

        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&mxdbh=' + mxdbh + '&bbh=' + bbh.toString() + '&operation=' + operation.toString(), true);

    }
    //#endregion

    //#region 删除
    this.Delete = function () {
        if (rb_wjs.checked == true)
            return;
        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;

        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();

        var status = dw_list.GetItemString(row, "ht_state");
        if (status == "已回填") {
            requestor.MessageBox("提示", "当前单证的状态为<" + status + ">,不能被删除!", 1);
            return;
        }

        var mxdbh = dw_list.GetItemString(row, "mxdbh");
        var bbh = dw_list.GetItemNumber(row, "bbh");
        if (requestor.MessageBox("提示", "删除报关单证<" + mxdbh + "--第" + bbh.toString() + "版>,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
            return;
        var bgdz = QsWebSoft.PubMethod.CheckBgMxdbh(mxdbh).value;
        if (bgdz == 1) {
            requestor.MessageBox("提示", "当前单证只有一份,不能直接删除!请用退回功能", 1);
            return;
        }
        //执行删除的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Delete", "mxdbh=" + mxdbh + "&bbh=" + bbh.toString());

        if (webReq.StatusCode() == 200) {
            dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
            requestor.MessageBox("提示", webReq.ResponseText());
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000105";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        

        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var mxdbh = dw_list.GetItemString(dw_list.GetRow(), 'mxdbh')
        var bbh = dw_list.GetItemNumber(dw_list.GetRow(), 'bbh')
        var operation
        operation = "copy";


        //先取得页面父窗口的TabStrip控件
        if (ts_1 == null) {
            if (window.external != null)
                ts_1 = window.external.Control("ts_1");
        }

        if (ts_1 == null)
            return;

        //模块是否已打开
        var index = ts_1.SelectItem(node);
        if (index > 0)
            return;


        //取节点所对应的数据窗口记录

        if (row > 0) {
            openStyle = ds_1.GetItemString(row, "openStyle");
            url = ds_1.GetItemString(row, "WindowName");
            parm = ds_1.GetItemString(row, "OpenParm");
            label = ds_1.GetItemString(row, "Title");
        }

        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&mxdbh=' + mxdbh + '&bbh=' + bbh.toString() + '&operation=' + operation.toString(), true);



    }
    //#endregion


    //#region 打印
    this.Print = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "mxdbh"), dw_list.GetItemNumber(dw_list.GetRow(), "bbh"));
        dw_print.PrintPreview();
    }
    //#endregion
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(mxdbh) like '%" + text + "%')  or ( Lower(mxdbh) like '%" + text + "%')  or ( Lower(wxhth) like '%" + text + "%') or ( Upper(wxhth) like '%" + text + "%')");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 退回
    this.back = function () {

        var row = dw_list.GetRow();
        if (row <= 0) {
            return;
        }
        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();

        var status = dw_list.GetItemString(row, "ht_state");
        state = dw_list.GetItemString(row, "state");
        dz_zdy = dw_list.GetItemString(row, "dz_zdy");
        var mxdbh = dw_list.GetItemString(row, "mxdbh");
        userid = requestor.GetParm("userid");
        if (dz_zdy == userid) {
            if (state != "新制" & state != "退回" & state != "待接收" & state != "客服退回" & state != "报关行拒收") {
                requestor.MessageBox("提示", "单据" + mxdbh + "状态是" + state + ",不能退回!");
                return;
            }
        }
        else {
            requestor.MessageBox("提示", "不是自己的单据,不能退回!");
            return;
        }
        if (status == "已回填") {
            requestor.MessageBox("提示", "当前报关单的状态为<" + status + ">,不能被退回!", 1);
            return;
        }

        var mxdbh = dw_list.GetItemString(row, "mxdbh");
        var bbh = dw_list.GetItemNumber(row, "bbh");
        if (requestor.MessageBox("提示", "退回报关单<" + mxdbh + "--第" + bbh.toString() + "版>,将删除该报关和结汇单据的信息,如需重新制作该报关结汇单据，请从明细单重新生成单据,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
            return;

        //执行退回的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Delete", "mxdbh=" + mxdbh + "&bbh=" + bbh.toString());

        if (webReq.StatusCode() == 200) {
            dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
            requestor.MessageBox("提示", webReq.ResponseText());
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            return;
        }

        //执行退回的WebService
        webReqjh.SetFunctionID(requestor.GetFunctionID());
        webReqjh.Invoke("Delete", "mxdbh=" + mxdbh + "&bbh=" + bbh.toString());

        if (webReqjh.StatusCode() == 200) {
            dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
            requestor.MessageBox("提示", webReqjh.ResponseText());
        }
        else {
            requestor.MessageBox("提示", webReqjh.ResponseText(), ICON.StopSign);
            return;
        }
        //更新明细单状态
        var num = QsWebSoft.PubMethod.UpdateMxdAfterReceiveData(mxdbh, bbh, "退回").value;
        if (num != 1) {
            alert("提示，更新明细单状态失败!");
            return;
        }
        self.Retrieve();
    }
    //#endregion

    //#region 接收
    this.receive = function () {

    }
    //#endregion

    //#region 显示已接收单据
    this.yjsdj = function () {
        dw_list.SetDataObject = "dw_bgdj_list";
        tb_1.SetVisible("btn_th", true);
        tb_1.SetVisible("btn_js", false);
        tb_1.SetVisible("btn_duplicate", false);
        dw_1.SetVisible("false");
        dw_list.SetVisible("true");
        self.Retrieve()
    }

    //#endregion

    //#region 显示未接收单据
    this.wjsdj = function () {
        tb_1.SetVisible("btn_th", false);
        tb_1.SetVisible("btn_js", true);
        tb_1.SetVisible("btn_delete", false);
        tb_1.SetVisible("btn_duplicate", true);
        userid = requestor.GetParm("userid");
        dw_1.SetVisible("true");
        dw_list.SetVisible("false");
        dw_1.Retrieve(userid);
    }
    //#endregion

    this.ShowExcel = function () {
        //        window.location.href="/help.aspx?"
        var row = dw_list.GetRow();
        if (row <= 0) {
            return;
        }
        var mxdbh = dw_list.GetItemString(row, "mxdbh");
        //        var bbh = dw_list.GetItemString(row, "bbh");
        var Djbh = "BG3011";
        var name = "报关单证";
//        var reportName = "BG3011";
        var tt_no = dw_list.GetItemString(row, "tt_no");
        var paraMeters = mxdbh + "," + Djbh;
        var strFileName = "";
        var fileName = QsWebSoft.PubMethod.ShowPrintView(Djbh, tt_no, paraMeters).value;
        fileName =="aaa"
        if (fileName == null || fileName == "") {
            requestor.MessageBox("提示", "服务器繁忙，请重试！");
            return;
        }
        else {
            this.window.location.href = encodeURI("/DownLoad.aspx?fileName="
             + fileName + "&Djbh=" + name + "&Code=" + mxdbh);
        }

//        QsWebSoft.PubMethod.RecordPrn(mxdbh,"EXCEL");
    }



    //#region 申领报关委托书（注：发送欧恒）
    this.Slwts = function () {
        var row = dw_list.GetRow();
        if (row <= 0) {
            return;
        }
        var mxdbh = dw_list.GetItemString(row, "mxdbh");
        state = dw_list.GetItemString(row, "state");
        dz_zdy = dw_list.GetItemString(row, "dz_zdy");
        userid = requestor.GetParm("userid");

        var bgsp = QsWebSoft.PubMethod.CheckBgsp(mxdbh).value;
        if (bgsp <= 0) {
            requestor.MessageBox("提示", "单据" + mxdbh + "没有生成报关商品,不能重复发送!请打开生成报关商品！");
            return;
        }

        if (dz_zdy == userid) {
            if (state != "新制" & state != "客服退回" & state != "报关行拒收") {
                requestor.MessageBox("提示", "单据" + mxdbh + "状态是" + state + ",不能重复发送!");
                return;
            }
        }
        else {
            requestor.MessageBox("提示", "不是自己的单据,不能发送数据!");
            return;
        }
        var iw_Bgdj_Slwts = null;
        if (iw_Bgdj_Slwts == null)
            iw_Bgdj_Slwts = new W_Bgdj_Slwts();
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Bgdj_Slwts&mxdbh=" + mxdbh, iw_Bgdj_Slwts);




    }
    //#endregion



    //#region 印章下载
    this.Downloadpic = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var tt_no = dw_list.GetItemString(row, "tt_no");
        var fileName = "";
        if (tt_no == "02") {
            fileName = "报关专用章02";
        }
        else {
            fileName = "报关专用章01";
        }

        QsWebSoft.PubMethod.CreateFold();

        this.window.location.href = encodeURI("/DownLoadPic.aspx?fileName="
             + fileName);
           
    }
    //#endregion

    //#region 印章下载
    this.Downloadpic2 = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var tt_no = dw_list.GetItemString(row, "tt_no");
        var fileName = "";
        if (tt_no == "02") {
            fileName = "单证手签章02";
        }
        else {
            fileName = "单证手签章01";
        }

        QsWebSoft.PubMethod.CreateFold();

        this.window.location.href = encodeURI("/DownLoadPic.aspx?fileName="
             + fileName);

    }
    //#endregion


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Dz_bgdj.W_BgdjList", "dw_bgdj_list");
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {

        cloname = dwoName;


    }
    //#endregion
    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        colType = dw_list.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_list.GetItemString(dw_list.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_list.GetItemDate(dw_list.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_list.GetItemNumber(dw_list.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 获取物流信息
    this.GetWlxx = function () {
        //        billNo = "COSU6083886880C";

        billNo = dw_list.GetItemString(dw_list.GetRow(), "tdbh");
        var mxdbh = dw_list.GetItemString(dw_list.GetRow(), "mxdbh");
        var bbh = dw_list.GetItemNumber(dw_list.GetRow(), "bbh");
        var state = dw_list.GetItemString(dw_list.GetRow(), "state");
        var dz_zdy = dw_list.GetItemString(dw_list.GetRow(), "dz_zdy");
        var userid = requestor.GetParm("userid");
        Lx = "wlxx";

        if (dz_zdy == userid) {
            if (billNo == "" || billNo == null) {
                var iw_Tdh_Dj = null;
                if (iw_Tdh_Dj == null)
                    iw_Tdh_Dj = new W_Tdh_Dj();
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Tdh_Dj&mxdbh=" + mxdbh + "&bbh=" + bbh, iw_Tdh_Dj);
                billNo = QsWebSoft.PubMethod.GetTdhbymxdbh(mxdbh).value;
            }

        }

        method = "getVisualLogistics";
        entryId = "";
        //        QsWebSoft.PubMethod.GetXml("getVisualLogistics", billNo, "");
        //        this.window.location.href = encodeURI("/WebForm1.aspx");

        //        path = "\\XML\\WL\\" + billNo + ".xml";
        if (billNo == "" || billNo == null) {
            requestor.MessageBox("提示", "没有提单号，不能查询物流信息！");
            return;
        }
        if (iw_Dzka_Cx == null)
            iw_Dzka_Cx = new W_Dzka_Cx();
        requestor.Open(encodeURI("/LoadWindow.ashx?WinName=Xt_Popwin.W_Dzka_Cx&method=" + method + '&billNo=' + billNo + '&entryId=' + entryId + '&Lx=' + Lx, iw_Dzka_Cx));
    }
    //#endregion

    //#region 获取海关查验信息
    this.GetHgcy = function () {
        //        billNo = "NGBAUZ001950";
        billNo = dw_list.GetItemString(dw_list.GetRow(), "tdbh");
        method = "cxsoft.cargoinspect";
        entryId = dw_list.GetItemString(dw_list.GetRow(), "bgd_no");
        Lx = "hgcy";
        if (billNo == "" || billNo == null) {
            if (entryId == "" || entryId == null) {
                requestor.MessageBox("提示", "没有提单号跟报关单号，不能查询海关查验信息！");
                return;
            }
        }
        //        QsWebSoft.PubMethod.GetXml("cxsoft.cargoinspect", billNo, entryId);
        if (iw_Dzka_Cx == null)
            iw_Dzka_Cx = new W_Dzka_Cx();
        requestor.Open(encodeURI("/LoadWindow.ashx?WinName=Xt_Popwin.W_Dzka_Cx&method=" + method + '&billNo=' + billNo + '&entryId=' + entryId + '&Lx=' + Lx, iw_Dzka_Cx));
    }
    //#endregion

    //#region 获取报关单流转
    this.GetBgdlz = function () {
        //        billNo = "NGBAUZ001950";
        //        billNo = dw_list.GetItemString(dw_list.GetRow(), "tdbh");
        method = "cxsoft.entryflow";
        entryId = dw_list.GetItemString(dw_list.GetRow(), "bgd_no");
        Lx = "bgdlz";
        if (billNo == "" || billNo == null) {
            if (entryId == "" || entryId == null) {
                requestor.MessageBox("提示", "没有提单号跟报关单号，不能查询海关查验信息！");
                return;
            }
        }
        //        QsWebSoft.PubMethod.GetXml("cxsoft.cargoinspect", billNo, entryId);
        if (iw_Dzka_Cx == null)
            iw_Dzka_Cx = new W_Dzka_Cx();
        requestor.Open(encodeURI("/LoadWindow.ashx?WinName=Xt_Popwin.W_Dzka_Cx&method=" + method + '&billNo=' + billNo + '&entryId=' + entryId + '&Lx=' + Lx, iw_Dzka_Cx));
    }
    //#endregion

    //#region 靠离泊查询
    this.GetKlbcx = function () {
        //        billNo = "NGBAUZ001950";
        //        billNo = dw_list.GetItemString(dw_list.GetRow(), "tdbh");
        method = "getUnBerth";
        var cmhc = dw_list.GetItemString(dw_list.GetRow(), "cmhc");
        var userid = requestor.GetParm("userid");
        var dz_zdy = dw_list.GetItemString(dw_list.GetRow(), "dz_zdy");
        var mxdbh = dw_list.GetItemString(dw_list.GetRow(), "mxdbh");
        var bbh = dw_list.GetItemNumber(dw_list.GetRow(), "bbh");
        Lx = "klbcx";
        if (dz_zdy == userid) {
            if (cmhc == "" || cmhc == null) {
                var iw_Cm_Dj = null;
                if (iw_Cm_Dj == null)
                    iw_Cm_Dj = new W_Cm_Dj();
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Cm_Dj&mxdbh=" + mxdbh + "&bbh=" + bbh, iw_Cm_Dj);
                cmhc = QsWebSoft.PubMethod.GetCmhcbymxdbh(mxdbh).value;
            }

        }
        //        QsWebSoft.PubMethod.GetXml("cxsoft.cargoinspect", billNo, entryId);
        if (cmhc == null || cmhc == "") {
            requestor.MessageBox("提示", "没有船名，不能查询靠离泊信息！");
            return;
        }
        if (iw_Dzka_Cx == null)
            iw_Dzka_Cx = new W_Dzka_Cx();
        requestor.Open(encodeURI("/LoadWindow.ashx?WinName=Xt_Popwin.W_Dzka_Cx&method=" + method + '&engName=' + cmhc + '&Lx=' + Lx, iw_Dzka_Cx));
    }
    //#endregion

}
