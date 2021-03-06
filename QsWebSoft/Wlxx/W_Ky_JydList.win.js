﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Ky_JydList() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var dw_bak = new DataWindow(requestor);
    var dw_filter = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_kh = new SingleLineEdit(requestor);
    var sle_hth = new SingleLineEdit(requestor);
    var sle_2 = new SingleLineEdit(requestor);
    var sle_ydh = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ddlb_jyzt = new DropDownListBox(requestor);
    var ddlb_jyd = new DropDownListBox(requestor);
    var ddlb_jdrjc = new DropDownListBox(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_log = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);
    var ds_2 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (dw_bak == null) dw_bak = new DataWindow(requestor);
        dw_bak.Attach(win.Control("dw_bak"));
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (sle_kh == null) sle_kh = new SingleLineEdit(requestor);
        sle_kh.Attach(win.Control("sle_kh"));
        if (sle_hth == null) sle_hth = new SingleLineEdit(requestor);
        sle_hth.Attach(win.Control("sle_hth"));
        if (sle_2 == null) sle_2 = new SingleLineEdit(requestor);
        sle_2.Attach(win.Control("sle_2"));
        if (sle_ydh == null) sle_ydh = new SingleLineEdit(requestor);
        sle_ydh.Attach(win.Control("sle_ydh"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ddlb_jyzt == null) ddlb_jyzt = new DropDownListBox(requestor);
        ddlb_jyzt.Attach(win.Control("ddlb_jyzt"));
        if (ddlb_jyd == null) ddlb_jyd = new DropDownListBox(requestor);
        ddlb_jyd.Attach(win.Control("ddlb_jyd"));
        if (ddlb_jdrjc == null) ddlb_jdrjc = new DropDownListBox(requestor);
        ddlb_jdrjc.Attach(win.Control("ddlb_jdrjc"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_role == null) ds_role = new DataStore(requestor);
        ds_role.Attach(win.Control("ds_role"));
        if (ds_2 == null) ds_2 = new DataStore(requestor);
        ds_2.Attach(win.Control("ds_2"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_list", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.dw_List_DwnMouseMove) == "function")
            win.AttachEvent("dw_list", "DwnMouseMove", self.dw_List_DwnMouseMove);

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.dw_List_LButtonDown) == "function")
            win.AttachEvent("dw_list", "LButtonDown", self.dw_List_LButtonDown);

        if (typeof (self.dw_List_MouseMove) == "function")
            win.AttachEvent("dw_list", "MouseMove", self.dw_List_MouseMove);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_bak", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_Bak_ItemChanged) == "function")
            win.AttachEvent("dw_bak", "ItemChanged", self.dw_Bak_ItemChanged);

        if (typeof (self.dw_List_EntertoTab) == "function")
            win.AttachEvent("dw_bak", "KeyDown", self.dw_List_EntertoTab);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.slecdmc_EditChanged) == "function")
            win.AttachEvent("sle_kh", "EditChanged", self.slecdmc_EditChanged);

        if (typeof (self.slesj_EditChanged) == "function")
            win.AttachEvent("sle_hth", "EditChanged", self.slesj_EditChanged);

        if (typeof (self.slecph_EditChanged) == "function")
            win.AttachEvent("sle_2", "EditChanged", self.slecph_EditChanged);

        if (typeof (self.sleydh_EditChanged) == "function")
            win.AttachEvent("sle_ydh", "EditChanged", self.sleydh_EditChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.OpenWindow) == "function")
            win.AttachEvent("btn_open", "Clicked", self.OpenWindow);

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_prn", "Clicked", self.Print);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jyzt", "SelectionChanged", self.Retrieve);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jyd", "SelectionChanged", self.Retrieve);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jdrjc", "SelectionChanged", self.Retrieve);

        if (typeof (self.Filter) == "function")
            win.AttachEvent("单列过滤ToolStripMenuItem", "Clicked", self.Filter);

        if (typeof (self.Filter_Cancle) == "function")
            win.AttachEvent("取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

        if (typeof (self.CopySelect) == "function")
            win.AttachEvent("选择复制ToolStripMenuItem", "Clicked", self.CopySelect);

        if (typeof (self.CopyL) == "function")
            win.AttachEvent("整列复制ToolStripMenuItem", "Clicked", self.CopyL);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        dw_bak.Detach(); dw_bak = null;
        dw_filter.Detach(); dw_filter = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_hth.Detach(); sle_hth = null;
        sle_2.Detach(); sle_2 = null;
        sle_ydh.Detach(); sle_ydh = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_jyzt.Detach(); ddlb_jyzt = null;
        ddlb_jyd.Detach(); ddlb_jyd = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        dw_print.Detach(); dw_print = null;
        dw_log.Detach(); dw_log = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_2.Detach(); ds_2 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
	


    //#region 变量定义
    var editMode = "";
    var iw_Bgdj_Slwts = null;
    var dwc = new DataWindowChild();
    var dwoname = "";

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Ky_Thwljh.ashx");   

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
      
        self.Retrieve();
    }
    //#endregion

    //#region 数据查询
    this.Retrieve = function () {
        if (self.CloseQuery() == 1)
            return;

        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var jyzt = ddlb_jyzt.GetText();
        var jyd = ddlb_jyd.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        if (endDate < beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }
        var jyd = ddlb_jyd.GetText();
        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jyzt, jyd, userid,jdrjc);

        dw_bak.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jyzt, jyd, userid);
        if (dw_list.RowCount() > 0) {
            var ls_cdphbm = dw_list.GetItemString(1, "cdphbm");
            dw_bak.SetFilter("cdphbm = '" + ls_cdphbm + "'");
            dw_bak.Filter();
        }
    }
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

        dw_list.AcceptText();

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion

    this.scfysqd = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000512";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        var sqdbh = null;
        var ywbh = ""; ;

        if (row > 0) {
            for (var i = 1; i <= dw_bak.RowCount(); i++) {
                ywbh = ywbh + dw_bak.GetItemString(i, "ywbh").toString() + ",";
            }
        }
        ywbh = ywbh.substring(0, ywbh.length - 1);

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&sqdbh=' + sqdbh + '&operation=' + operation.toString() + '&ywbh=' + ywbh, true);
    }

    //#region 打开编辑窗口
    this.OpenWindow = function () {
       
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000306";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var cdphbm = dw_list.GetItemString(dw_list.GetRow(), 'cdphbm')
//        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        var operation = requestor.GetParm("operation");
        //失效按钮的控制

              

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&cdphbm=' + cdphbm + '&operation=' + operation.toString(), true);



    }
    //#endregion


    //#region 双击
    var iw_Ky_Jyd = null;
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            //            if (dwoName == "cdphbm") {
            //                self.OpenWindow();
            //            }
            //            if (iw_Ky_Jyd == null)
            //                iw_Ky_Jyd = new W_Ky_JydEdit_Bak();

            //        var Dlwtf = requestor.GetParm("Dlwtf");
            //        var row = dw_list.GetRow();
            //        var cdphbm = dw_list.GetItemString(row, "cdphbm")
            //        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Ky_JydEdit_Bak&cdphbm=" + cdphbm, iw_Ky_Jyd);
        } 
    }
    //#endregion

       
    //#region 打印
    this.Print = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print.SetDataObject("dw_hddz_print");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print.PrintPreview();
    }
    //#endregion
  
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(cdphbm) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤车队名称
    this.slecdmc_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(cdmc) like Upper('%" + text + "%')) or ( Upper(cdpym) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤司机
    this.slesj_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(sj) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 车牌号
    this.slecph_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(cph) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion  


    //#region 车牌号
    this.sleydh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ydh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion  


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Ky_JydList", "dw_ky_jyd_list");
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


    //#region 存盘
    this.Save = function () {
        if (dw_list.AcceptText() != 1)
            return;
        if (dw_bak.AcceptText() != 1)
            return;
        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) <= 0 && (dw_bak.ModifiedCount() + dw_bak.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
        var pdnr = ""

        for (var i = 1; i <= dw_list.RowCount(); i++) {
            var wdpd = dw_list.GetItemString(i, "wdpd");
            var djydsjpd = dw_list.GetItemString(i, "djydsjpd");
            var ls_cdphbm = dw_list.GetItemString(i, "cdphbm");
            var zbrq = dw_list.GetItemDate(i, "djydsj");
            var sfybq = dw_list.GetItemString(i, "sfybq");
            var bqqr = dw_list.GetItemString(i, "bqqr");
            var rq = new Date("2016/11/14");

            var status = dw_list.GetItemStatus(i, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified) {
                if ((wdpd == "Y" && djydsjpd == "Y" && (sfybq != "" || sfybq != null)) || (wdpd == "N" && djydsjpd == "N" && (sfybq == "" || sfybq == null))) {
                    //                    要不都输入 ,要不都没有输入
                } else {
                    pdnr = pdnr + ls_cdphbm + ","
                }
            }
            //            }

        }

        //部分输入情况下提醒 
        if (pdnr != "") {
            requestor.MessageBox("", "车队配货编码" + pdnr + "数据对应的温度,到检疫点时间,标签确认没有全部完整输入,请检查!")
            return;
        }

        var dw_d_data = dw_list.GetChanges();
        var dw_bak_data = dw_bak.GetChanges();
        if (dw_d_data == "" && dw_bak_data == "")
            return;

        dw_list.SetFilter();
        dw_list.Filter();

        //数据同步生鲜港
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            var state = dw_list.GetItemStatus(i, 0, DWBUFFER.Primary);
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {

                var cdphbm = dw_list.GetItemString(i, "cdphbm");

                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_kycd");
                dw_log.SetItem(row, "mainid", cdphbm);
                dw_log.ScrollToRow(row);
            }
        }

        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("JydListSave", "dw_list=" + dw_d_data + "&dw_bak=" + dw_bak_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
    }
    //#endregion  

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            //             if (dwoName != "lcqr" && dwoName != "lcwd" && dwoName != "jydbz" && dwoName != "djydsj" && dwoName != "cjydsj") {
            //                 var cdphbm = dw_list.GetItemString(dw_list.GetRow(), 'cdphbm')
            //                 dw_bak.Retrieve(cdphbm);
            //             }
            var ls_cdphbm = dw_list.GetItemString(Row, "cdphbm");
            dw_bak.SetFilter("cdphbm = '" + ls_cdphbm + "'");
            dw_bak.Filter();
            fzks_row = Row;

        };
    }
    //#endregion


     
    //#region 单击明细单编号
    this.dw_List_ItemChanged = function (Row, dwoName, Data) {
        if (Row > 0) {
            var kycd_lcqr;
            var lcwd;
            var kycd_bqqr;

            if (dwoName == "kycd_lcqr") {
                kycd_lcqr = Data;
                lcwd = dw_list.GetItemNumber(Row, "lcwd");
                kycd_bqqr = dw_list.GetItemString(Row, "kycd_bqqr");
                if ((kycd_lcqr == "N" || kycd_lcqr == null) && (lcwd == 0 || lcwd == null) && (kycd_bqqr == "" || kycd_bqqr == null)) {
                    dw_list.SetItem(Row, "completestatus", "N");
                } else {
                    dw_list.SetItem(Row, "completestatus", "Y");
                };
            };
            if (dwoName == "lcwd") {
                kycd_lcqr = dw_list.GetItemString(Row, "lcqr");
                lcwd = Data;
                kycd_bqqr = dw_list.GetItemString(Row, "bqqr");
                if ((kycd_lcqr == "N" || kycd_lcqr == null) && (lcwd == 0 || lcwd == null) && (kycd_bqqr == "" || kycd_bqqr == null)) {
                    dw_list.SetItem(Row, "completestatus", "N");
                } else {
                    dw_list.SetItem(Row, "completestatus", "Y");
                };
            };
            if (dwoName == "bqqr") {
                kycd_lcqr = dw_list.GetItemString(Row, "lcqr");
                lcwd = dw_list.GetItemNumber(Row, "lcwd");
                kycd_bqqr = Data;
                if ((kycd_lcqr == "N" || kycd_lcqr == null) && (lcwd == 0 || lcwd == null) && (kycd_bqqr == "" || kycd_bqqr == null)) {
                    dw_list.SetItem(Row, "completestatus", "N");
                } else {
                    dw_list.SetItem(Row, "completestatus", "Y");
                };
            };

            if (dwoName == "cjydsj") {
                dw_list.AcceptText();
                var zjfscwld_bz = dw_list.GetItemString(Row, "zjfscwld_bz");
                var sc_bz = dw_list.GetItemString(Row, "sc_bz");
                var dzdd = dw_list.GetItemString(Row, "dzdd");

                if (zjfscwld_bz == "Y" || sc_bz == "Y" || dzdd == "Y") {

                } else {
                    var cdphbm = dw_list.GetItemString(Row, "cdphbm");
                    var cjydsj = new Date(dw_list.GetItemDate(Row, "cjydsj"));
                    var num = QsWebSoft.PubMethod.UpdateQdsj(cdphbm, cjydsj).value;

                }

            }

            if (dwoName == "djydsj") {
                dw_list.AcceptText();
                var djydsj_ce = dw_list.GetItemNumber(Row, "djydsj_ce");
                if (djydsj_ce < 0 || djydsj_ce > 30) {
                    alert("请注意输入日期不能晚于当前日期并且不能早于30天前!");
                    return;
                    var rq = new Date();
                    dw_list.SetItem(Row, "djydsj", rq.getVarDate());
                    dw_master.SetFocus();
                    dw_list.SetColumn("djydsj");
                    dw_list.AcceptText();
                }
                var ywy = requestor.GetParm("userid");
                var date = new Date();
                dw_list.SetItem(Row, "djydsj_lrsj", date.getVarDate())
                dw_list.SetItem(Row, "djydsj_czry", ywy)

                //                var dqrq = new Date();
                //                var djydsj = Data.substr(0, 19);
                //                var arys1 = new Array();
                //                var arys2 = new Array();
                //                if (dqrq != null && djydsj != null) {
                //                    arys1 = djydsj.split('-');

                //                    var djydsj_rq = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
                //                    arys2 = dqrq.split('-');
                //                    var dqrq_rq = new Date(arys2[0], parseInt(arys2[1] - 1), arys2[2]);
                //                    if (djydsj_rq > dqrq_rq) {
                //                        requestor.MessageBox("aa", "cg");
                //                    } else {
                //                        requestor.MessageBox("ss", "ss");
                //                    };
                //                };
            };

        };
    }
    //#endregion


    //#region 单击明细单编号
    this.dw_Bak_ItemChanged = function (Row, dwoName, Data) {
        if (Row > 0) {
            var sfqbyt = 0;
            if (dwoName == "sfybq") {
                dw_bak.AcceptText();

                for (var i = 1; i <= dw_bak.RowCount(); i++) {
                    var sfybq;
                    sfybq = dw_bak.GetItemString(i, "sfybq");
                    if (sfybq != "Y") {
                        sfqbyt += 1;
                    }
                }
                if (sfqbyt == 0) {
                    var row1 = dw_list.GetRow();
                    dw_list.SetItem(row1, "completestatus", "Y");
                    dw_list.SetItem(row1, "sfybq", "已贴");
                } else if (sfqbyt != dw_bak.RowCount()) {
                    var row1 = dw_list.GetRow();
                    dw_list.SetItem(row1, "completestatus", "Y");
                    dw_list.SetItem(row1, "sfybq", "部分已贴");
                } else {
                    var row1 = dw_list.GetRow();
                    dw_list.SetItem(row1, "completestatus", "Y");
                    dw_list.SetItem(row1, "sfybq", "未贴");
                }
            }
        }
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        if (Row > 0) {  fzjs_row   = Row;   }
    }
    //#endregion

    //#region 复制字段内容
    this.CopyAll = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_list.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_list.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_list.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_list.GetItemNumber(row, cloname);
                copytext = num.toString();
            }

            if (copytext_sum == "") {
                copytext_sum = copytext
            } else {
                copytext_sum = copytext_sum + '\t' + '\n' + copytext
            }

        }

        window.clipboardData.setData("Text", copytext_sum);

    }
    //#endregion



    //#region 点击开始
    this.dw_List_LButtonDown = function (flags, xPos, yPos) {
        arr.splice(0, arr.length);
        begin = "Y"
    }
    //#endregion

    //#region 选择复制
    this.CopySelect = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list.GetItemNumber(row, arr[row1]);
                    copytext = num.toString();
                };
                if (copytext_sum == "") {
                    copytext_sum = copytext
                } else {
                    if (row1 == 0) {
                        copytext_sum = copytext_sum + copytext
                    } else {
                        copytext_sum = copytext_sum + '\t' + copytext
                    }
                }
            }

            copytext_sum = copytext_sum + '\n'

        }

        if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
            copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
        };

        window.clipboardData.setData("Text", copytext_sum);
    }

    //#endregion

    //#region 鼠标移动
    this.dw_List_DwnMouseMove = function (xPos, yPos, row, dwoName) {
        if (begin == "Y") {
            var str = arr.join(" ");
            if (str.indexOf(dwoName) < 0 && dwoName.indexOf("line") < 0 && dwoName.indexOf("reportsrv") < 0 && dwoName.indexOf("datawindow") < 0) {
                arr.push(dwoName);
            }

        }
    }
    //#endregion

    //#region 整列复制
    this.CopyL = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_list.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list.GetItemNumber(row, arr[row1]);
                    copytext = num.toString();
                };
                if (copytext_sum == "") {
                    copytext_sum = copytext
                } else {
                    if (row1 == 0) {
                        copytext_sum = copytext_sum + copytext
                    } else {
                        copytext_sum = copytext_sum + '\t' + copytext
                    }
                }
            }

            copytext_sum = copytext_sum + '\n'

        }

        if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
            copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
        };

        window.clipboardData.setData("Text", copytext_sum);
    }

    //#endregion

    //#region 单列过滤
    this.Filter = function () {
        dw_list.AcceptText();
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        colType = dw_list.Describe(cloname + ".colType");

        if (cloname.indexOf("line") >= 0) {
            return;
        }

        colType = colType.substring(0, 4);

        if (iw_Filter == null)
            iw_Filter = new W_Filter();
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var filter = "";
        //        var rowcount = dw_list.RowCount();
        //        if (rowcount > 0) {
        //            filter = dw_list.GetItemString(1, "filter");
        //        };
        iw_Filter.SetDataWindow(dw_list);
        //        iw_Filter.SetData(filter);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_list.SetFocus();
        dw_list.ScrollToRow(row)


    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle = function () {
        dw_list.SetFilter("");
        dw_list.Filter();
        dw_list.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

}
