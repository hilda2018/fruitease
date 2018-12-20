﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzKyzjzgz() {

    var self = this;
    var requestor = new PBWindow();
    var dw_log = new DataWindow(requestor);
    var dw_1 = new DataWindow(requestor);
    var dw_list = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_ydh = new SingleLineEdit(requestor);
    var sle_mdg = new SingleLineEdit(requestor);
    var ddlb_ylwl = new DropDownListBox(requestor);
    var ddlb_jdrjc = new DropDownListBox(requestor);
    var dw_filter = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_jsq = new SingleLineEdit(requestor);
    var sle_kh = new SingleLineEdit(requestor);
    var sle_hth = new SingleLineEdit(requestor);
    var cbx_sfzbzj = new CheckBox(requestor);
    var dw_print = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);
    var ds_2 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_ydh == null) sle_ydh = new SingleLineEdit(requestor);
        sle_ydh.Attach(win.Control("sle_ydh"));
        if (sle_mdg == null) sle_mdg = new SingleLineEdit(requestor);
        sle_mdg.Attach(win.Control("sle_mdg"));
        if (ddlb_ylwl == null) ddlb_ylwl = new DropDownListBox(requestor);
        ddlb_ylwl.Attach(win.Control("ddlb_ylwl"));
        if (ddlb_jdrjc == null) ddlb_jdrjc = new DropDownListBox(requestor);
        ddlb_jdrjc.Attach(win.Control("ddlb_jdrjc"));
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_jsq == null) sle_jsq = new SingleLineEdit(requestor);
        sle_jsq.Attach(win.Control("sle_jsq"));
        if (sle_kh == null) sle_kh = new SingleLineEdit(requestor);
        sle_kh.Attach(win.Control("sle_kh"));
        if (sle_hth == null) sle_hth = new SingleLineEdit(requestor);
        sle_hth.Attach(win.Control("sle_hth"));
        if (cbx_sfzbzj == null) cbx_sfzbzj = new CheckBox(requestor);
        cbx_sfzbzj.Attach(win.Control("cbx_sfzbzj"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
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

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_1", "Clicked", self.Retrieve);

        if (typeof (self.sle_ztdh_EditChanged) == "function")
            win.AttachEvent("sle_ydh", "EditChanged", self.sle_ztdh_EditChanged);

        if (typeof (self.sle_mdg_EditChanged) == "function")
            win.AttachEvent("sle_mdg", "EditChanged", self.sle_mdg_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_ylwl", "SelectionChanged", self.Retrieve);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jdrjc", "SelectionChanged", self.Retrieve);

        if (typeof (self.Help) == "function")
            win.AttachEvent("btn_Help", "Clicked", self.Help);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.sle_jsq_EditChanged) == "function")
            win.AttachEvent("sle_jsq", "EditChanged", self.sle_jsq_EditChanged);

        if (typeof (self.sle_kh_EditChanged) == "function")
            win.AttachEvent("sle_kh", "EditChanged", self.sle_kh_EditChanged);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_hth", "EditChanged", self.sle_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("cbx_sfzbzj", "Clicked", self.Retrieve);

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

        dw_log.Detach(); dw_log = null;
        dw_1.Detach(); dw_1 = null;
        dw_list.Detach(); dw_list = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_ydh.Detach(); sle_ydh = null;
        sle_mdg.Detach(); sle_mdg = null;
        ddlb_ylwl.Detach(); ddlb_ylwl = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        dw_filter.Detach(); dw_filter = null;
        tb_1.Detach(); tb_1 = null;
        sle_jsq.Detach(); sle_jsq = null;
        sle_kh.Detach(); sle_kh = null;
        sle_hth.Detach(); sle_hth = null;
        cbx_sfzbzj.Detach(); cbx_sfzbzj = null;
        dw_print.Detach(); dw_print = null;
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
    var iw_GnkhlrtjList_Mx = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/hddz.ashx");   

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
        var ylwl = ddlb_ylwl.GetText();
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

        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var sfzbzj = "N"
        if (cbx_sfzbzj.GetChecked() == true) {
            sfzbzj = "Y";
        };

        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), sfzbzj, ylwl, userid, jdrjc);
        var hth = sle_hth.GetText();
        var jsq = sle_jsq.GetText();
        self.sle_EditChanged(hth);
        self.sle_jsq_EditChanged(jsq);
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (dw_list.AcceptText() != 1)
            return;


        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()  + dw_log.ModifiedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var dw_list_data = dw_list.GetChanges();
        if (dw_list_data == "")
            return;

        var userid = requestor.GetParm("userid");
        var sj = new Date();
        //数据同步生鲜港
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {
                var ywbh = dw_list.GetItemString(i, "ywbh");
                var log_num = dw_log.RowCount();

                //                var maxNumber = self.SerialNumber(log_num);
                //                var serialNumber = "hybg" + userid + yearMonDay + maxNumber;
                var row = dw_log.InsertRow(0);

                var serialNumber = dw_log.GetItemString(row, "eid_max")

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_dzyq");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.SetItem(row, "funname", "DataToFreshPort");
                dw_log.ScrollToRow(row);
            }
        }

        var dw_log_data = dw_log.GetChanges();


        //        for (var i = 1; i <= dw_list.RowCount(); i++) {
        //            if (dw_list.GetItemStatus(i, "dzyq_sfsdzb", DWBUFFER.Primary) == 1) {
        //                var ywbh = dw_list.GetItemString(i, "ywbh");
        //                var row = dw_1.InsertRow(0);

        //                dw_1.SetItem(row, "zbr", userid);
        //                dw_1.SetItem(row, "checkdate", sj.getVarDate());
        //                dw_1.SetItem(row, "checkif", ywbh);
        //                dw_1.SetItem(row, "szlx", dw_list.GetItemString(i,"dzyq_sfsdzb"));
        //                dw_1.SetItem(row, "hth", dw_list.GetItemString(i, "hth"));
        //                dw_1.SetItem(row, "szlx", "DataToFreshPort");
        //                dw_1.SetItem(row, "zfbqk", "DataToFreshPort");
        //                dw_1.SetItem(row, "zbmc", "DataToFreshPort");
        //                dw_1.ScrollToRow(row);
        //            }
        //        }

        //        var dw_log_data = dw_log.GetChanges();

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("HddzKyzjzgzSave", "dw_list=" + dw_list_data + "&dw_log=" + dw_log_data);

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

    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hth) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤
    this.sle_kh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(shdwmc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤
    this.sle_jsq_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("(" + text + "<= jsq )");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤
    this.sle_ztdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤
    this.sle_mdg_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(mdg) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
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

    this.dw_List_ItemChanged = function (row, dwoName, data) {
        //        dw_list.AcceptText();
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hth = dw_list.GetItemString(row, "hth");
        var bz = dw_list.GetItemString(row, "dzyq_bz");
        var sj = new Date();
        if (dwoName == "dzyq_sfsdzb") {
            if (data == "Y") {
                dw_list.SetItem(row, "dzyq_sdzbsj", sj.getVarDate());
//                QsWebSoft.PubMethod.UpdateKycdzgzYorN("sfsdzb", "Y", hth, ywbh, 'zjz');
            } else {
                dw_list.SetItem(row, "dzyq_sdzbsj", sj.getVarDate());
//                QsWebSoft.PubMethod.UpdateKycdzgzYorN("sfsdzb", "N", hth, ywbh, 'zjz');
            }
        }
//        if (dwoName == "dzyq_jc") {
//            if (data == "Y") {
//                QsWebSoft.PubMethod.UpdateKycdzgzJcYorN("sfsdzb", "Y", hth, ywbh, 'zjz');
//            } else {
//                QsWebSoft.PubMethod.UpdateKycdzgzJcYorN("sfsdzb", "N", hth, ywbh, 'zjz');
//            }
//        }
//        if (dwoName == "dzyq_bz") {
//            QsWebSoft.PubMethod.UpdateKycdzbz(hth, ywbh, bz, "zjz");
//        }
    }

    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hd", "dw_hddz_list_Hd");
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


    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\税金管理.txt')
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 双击明细单编号
    var iW_HddzKycdzgz_cmd = null;
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            if (dwoName == "dzyq_sdzbsj") {
                if (iW_HddzKycdzgz_cmd == null)
                    iW_HddzKycdzgz_cmd = new W_HddzKycdzgz_cmd();
                var zfbqk = "zb";
                var zbmc = "zjz";
                var hth = dw_list.GetItemString(Row, "hth");
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_HddzKycdzgz_cmd&hth=" + hth + "&zfbqk=" + zfbqk + "&zbmc=" + zbmc, iW_HddzKycdzgz_cmd);
                dw_list.SetFocus();
            }
            if (dwoName == "dzyq_sdfbsj") {
                if (iW_HddzKycdzgz_cmd == null)
                    iW_HddzKycdzgz_cmd = new W_HddzKycdzgz_cmd();
                var zfbqk = "fb";
                var zbmc = "zjz";
                var hth = dw_list.GetItemString(Row, "hth");
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_HddzKycdzgz_cmd&hth=" + hth + "&zfbqk=" + zfbqk + "&zbmc=" + zbmc, iW_HddzKycdzgz_cmd);
                dw_list.SetFocus();
            }
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        fzjs_row = Row;
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
