///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_WljdgzList() {

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl(requestor);
    var dw_wpjh = new DataWindow(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_filter = new DataWindow(requestor);
    var dw_ypjh = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_ywbh = new SingleLineEdit(requestor);
    var sle_ztdh = new SingleLineEdit(requestor);
    var sle_jzxh = new SingleLineEdit(requestor);
    var ddlb_jdrjc = new DropDownListBox(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ContextMenuStrip2 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_2 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_wpjh == null) dw_wpjh = new DataWindow(requestor);
        dw_wpjh.Attach(win.Control("dw_wpjh"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (dw_ypjh == null) dw_ypjh = new DataWindow(requestor);
        dw_ypjh.Attach(win.Control("dw_ypjh"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_ywbh == null) sle_ywbh = new SingleLineEdit(requestor);
        sle_ywbh.Attach(win.Control("sle_ywbh"));
        if (sle_ztdh == null) sle_ztdh = new SingleLineEdit(requestor);
        sle_ztdh.Attach(win.Control("sle_ztdh"));
        if (sle_jzxh == null) sle_jzxh = new SingleLineEdit(requestor);
        sle_jzxh.Attach(win.Control("sle_jzxh"));
        if (ddlb_jdrjc == null) ddlb_jdrjc = new DropDownListBox(requestor);
        ddlb_jdrjc.Attach(win.Control("ddlb_jdrjc"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ContextMenuStrip2 == null) ContextMenuStrip2 = new ContextMenu(requestor);
        ContextMenuStrip2.Attach(win.Control("ContextMenuStrip2"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_2 == null) ds_2 = new DataStore(requestor);
        ds_2.Attach(win.Control("ds_2"));

        if (typeof (self.dw_bqqk_Clicked) == "function")
            win.AttachEvent("window", "Clicked", self.dw_bqqk_Clicked);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("window", "RButtonDown", self.RbuttonDown);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sleywbh_EditChanged) == "function")
            win.AttachEvent("sle_ywbh", "EditChanged", self.sleywbh_EditChanged);

        if (typeof (self.sleztdh_EditChanged) == "function")
            win.AttachEvent("sle_ztdh", "EditChanged", self.sleztdh_EditChanged);

        if (typeof (self.slejzxh_EditChanged) == "function")
            win.AttachEvent("sle_jzxh", "EditChanged", self.slejzxh_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jdrjc", "SelectionChanged", self.Retrieve);

        if (typeof (self.Filter_fxsr) == "function")
            win.AttachEvent("单列过滤ToolStripMenuItem", "Clicked", self.Filter_fxsr);

        if (typeof (self.Filter_Cancle_fxsr) == "function")
            win.AttachEvent("取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle_fxsr);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_fxsr) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol_fxsr);

        if (typeof (self.CopySelect_fxsr) == "function")
            win.AttachEvent("选择复制ToolStripMenuItem", "Clicked", self.CopySelect_fxsr);

        if (typeof (self.CopyL_fxsr) == "function")
            win.AttachEvent("整列复制ToolStripMenuItem", "Clicked", self.CopyL_fxsr);

        if (typeof (self.Recover_fxsr) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover_fxsr);

        if (typeof (self.Filter_fxsc) == "function")
            win.AttachEvent("m_2", "Clicked", self.Filter_fxsc);

        if (typeof (self.Filter_Cancle_fxsc) == "function")
            win.AttachEvent("m_4", "Clicked", self.Filter_Cancle_fxsc);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_8", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_fxsc) == "function")
            win.AttachEvent("m_10", "Clicked", self.CopyCol_fxsc);

        if (typeof (self.CopySelect_fxsc) == "function")
            win.AttachEvent("m_11", "Clicked", self.CopySelect_fxsc);

        if (typeof (self.CopyL_fxsc) == "function")
            win.AttachEvent("m_12", "Clicked", self.CopyL_fxsc);

        if (typeof (self.Recover_fxsc) == "function")
            win.AttachEvent("m_7", "Clicked", self.Recover_fxsc);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tab_1.Detach(); tab_1 = null;
        dw_wpjh.Detach(); dw_wpjh = null;
        dw_print.Detach(); dw_print = null;
        dw_filter.Detach(); dw_filter = null;
        dw_ypjh.Detach(); dw_ypjh = null;
        tb_1.Detach(); tb_1 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_ywbh.Detach(); sle_ywbh = null;
        sle_ztdh.Detach(); sle_ztdh = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        ds_1.Detach(); ds_1 = null;
        ds_2.Detach(); ds_2 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
	


    //#region 变量定义
    var editMode = "";
    var iw_Bgdj_Slwts = null;
    var iw_Hddz_Select = null;
    var dwc = new DataWindowChild();
    var dwoname = "";

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hddz.ashx");   

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
        var Tybm = requestor.GetParm("Tybm");
        var Sfqytybm = requestor.GetParm("Sfqytybm");

        dw_wpjh.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), userid, jdrjc);
        //        dw_ypjh.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
        dw_ypjh.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), userid,jdrjc);
    }
    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        if (self.CloseQuery() == 1)
            return;
        setTimeout("window.close();", 100);
    }
    //#endregion

       
    //#region 打印
    this.Print = function () {
        var row = dw_fxsr.GetRow();
        if (row <= 0)
            return;
        dw_print.SetDataObject("dw_hddz_print");
        dw_print.Retrieve(dw_fxsr.GetItemString(dw_fxsr.GetRow(), "ywbh"));
        dw_print.PrintPreview();
    }
    //#endregion


    //#region 过滤
    this.sleywbh_EditChanged = function (text) {

        dw_wpjh.SetRedraw(false);
        if (text == "")
            dw_wpjh.SetFilter("");
        else
            dw_wpjh.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_wpjh.Filter();
        dw_wpjh.Sort();
        dw_wpjh.SetRedraw(true);

        dw_ypjh.SetRedraw(false);
        if (text == "")
            dw_ypjh.SetFilter("");
        else
            dw_ypjh.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_ypjh.Filter();
        dw_ypjh.Sort();
        dw_ypjh.SetRedraw(true);

    }
    //#endregion


    //#region 过滤
    this.sleztdh_EditChanged = function (text) {

        dw_wpjh.SetRedraw(false);
        if (text == "")
            dw_wpjh.SetFilter("");
        else
            dw_wpjh.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_wpjh.Filter();
        dw_wpjh.Sort();
        dw_wpjh.SetRedraw(true);

        dw_ypjh.SetRedraw(false);
        if (text == "")
            dw_ypjh.SetFilter("");
        else
            dw_ypjh.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_ypjh.Filter();
        dw_ypjh.Sort();
        dw_ypjh.SetRedraw(true);

    }
    //#endregion


    //#region 过滤
    this.slejzxh_EditChanged = function (text) {

        dw_wpjh.SetRedraw(false);
        if (text == "")
            dw_wpjh.SetFilter("");
        else
            dw_wpjh.SetFilter("( Upper(jzxxx_jzxh) like Upper('%" + text + "%'))");
        dw_wpjh.Filter();
        dw_wpjh.Sort();
        dw_wpjh.SetRedraw(true);

        dw_ypjh.SetRedraw(false);
        if (text == "")
            dw_ypjh.SetFilter("");
        else
            dw_ypjh.SetFilter("( Upper(jzxxx_jzxh) like Upper('%" + text + "%'))");
        dw_ypjh.Filter();
        dw_ypjh.Sort();
        dw_ypjh.SetRedraw(true);

    }
    //#endregion


    //#region CloseQuery
    this.CloseQuery = function () {

        dw_wpjh.AcceptText();

        if ((dw_wpjh.ModifiedCount() + dw_wpjh.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


        dw_ypjh.AcceptText();

        if ((dw_ypjh.ModifiedCount() + dw_ypjh.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

    }
    //#endregion


    //#region 恢复默认列
    this.Recover_wpjh = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_Hy_WljdgzList", "dw_hy_wljdgz_wpjh_list");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_ypjh = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_Hy_WljdgzList", "dw_hy_wljdgz_ypjh_list");
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_wpjh = function () {
        var copytext = "";
        var row = dw_wpjh.GetRow();
        if (row <= 0)
            return;
        colType = dw_wpjh.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_wpjh.GetItemString(dw_wpjh.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_wpjh.GetItemDate(dw_wpjh.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_wpjh.GetItemNumber(dw_wpjh.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_ypjh = function () {
        var copytext = "";
        var row = dw_ypjh.GetRow();
        if (row <= 0)
            return;
        colType = dw_ypjh.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_ypjh.GetItemString(dw_ypjh.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_ypjh.GetItemDate(dw_ypjh.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_ypjh.GetItemNumber(dw_ypjh.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\客户空运跟踪.txt')
    }
    //#endregion


    //#region 单击明细单编号
    this.dw_wpjh_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_ypjh_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        if (Row > 0) {  fzjs_row   = Row;   }
    }
    //#endregion

    //#region 复制字段内容
    this.CopyAll_wpjh = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_wpjh.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_wpjh.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_wpjh.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_wpjh.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_wpjh.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_ypjh = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_ypjh.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_ypjh.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_ypjh.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_ypjh.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_ypjh.GetItemNumber(row, cloname);
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
    this.dw_LButtonDown = function (flags, xPos, yPos) {
        arr.splice(0, arr.length);
        begin = "Y"
    }
    //#endregion

    //#region 选择复制
    this.CopySelect_wpjh = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_wpjh.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_wpjh.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_wpjh.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_wpjh.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_wpjh.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_ypjh = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_ypjh.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_ypjh.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_ypjh.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_ypjh.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_ypjh.GetItemNumber(row, arr[row1]);
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
    this.dw_DwnMouseMove = function (xPos, yPos, row, dwoName) {
        if (begin == "Y") {
            var str = arr.join(" ");
            if (str.indexOf(dwoName) < 0 && dwoName.indexOf("line") < 0 && dwoName.indexOf("reportsrv") < 0 && dwoName.indexOf("datawindow") < 0) {
                arr.push(dwoName);
            }

        }
    }
    //#endregion

    //#region 整列复制
    this.CopyL_wpjh = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_wpjh.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_wpjh.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_wpjh.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_wpjh.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_wpjh.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_wpjh.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_ypjh = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_ypjh.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_ypjh.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_ypjh.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_ypjh.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_ypjh.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_ypjh.GetItemNumber(row, arr[row1]);
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
    this.Filter_wpjh = function () {
        dw_wpjh.AcceptText();
        var row = dw_wpjh.GetRow();
        if (row <= 0)
            return;

        colType = dw_wpjh.Describe(cloname + ".colType");

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
        
        iw_Filter.SetDataWindow(dw_wpjh); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_wpjh.SetFocus();
        dw_wpjh.ScrollToRow(row)


    }
    //#endregion


    //#region 单列过滤
    this.Filter_ypjh = function () {
        dw_ypjh.AcceptText();
        var row = dw_ypjh.GetRow();
        if (row <= 0)
            return;

        colType = dw_ypjh.Describe(cloname + ".colType");

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
        
        iw_Filter.SetDataWindow(dw_ypjh); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_ypjh.SetFocus();
        dw_ypjh.ScrollToRow(row)


    }
    //#endregion


    //#region 过滤取消
    this.Filter_Cancle_wpjh = function () {
        dw_wpjh.SetFilter("");
        dw_wpjh.Filter();
        dw_wpjh.SetFocus(); 
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_ypjh = function () {
        dw_ypjh.SetFilter("");
        dw_ypjh.Filter();
        dw_ypjh.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

}
