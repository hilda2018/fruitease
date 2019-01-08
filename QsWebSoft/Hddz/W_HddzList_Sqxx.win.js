///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Sqxx() {

    var self = this;
    var requestor = new PBWindow();
    var dw_filter = new DataWindow(requestor);
    var dw_list = new DataWindow(requestor);
    var tab_1 = new TabControl(requestor);
    var dw_1 = new DataWindow(requestor);
    var dw_2 = new DataWindow(requestor);
    var dw_3 = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_kh = new SingleLineEdit(requestor);
    var sle_hth = new SingleLineEdit(requestor);
    var sle_tdh = new SingleLineEdit(requestor);
    var sle_bgdh = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ddlb_bgzt = new DropDownListBox(requestor);
    var dw_print = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (dw_2 == null) dw_2 = new DataWindow(requestor);
        dw_2.Attach(win.Control("dw_2"));
        if (dw_3 == null) dw_3 = new DataWindow(requestor);
        dw_3.Attach(win.Control("dw_3"));
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
        if (sle_tdh == null) sle_tdh = new SingleLineEdit(requestor);
        sle_tdh.Attach(win.Control("sle_tdh"));
        if (sle_bgdh == null) sle_bgdh = new SingleLineEdit(requestor);
        sle_bgdh.Attach(win.Control("sle_bgdh"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ddlb_bgzt == null) ddlb_bgzt = new DropDownListBox(requestor);
        ddlb_bgzt.Attach(win.Control("ddlb_bgzt"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_role == null) ds_role = new DataStore(requestor);
        ds_role.Attach(win.Control("ds_role"));

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

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.slekh_EditChanged) == "function")
            win.AttachEvent("sle_kh", "EditChanged", self.slekh_EditChanged);

        if (typeof (self.slehth_EditChanged) == "function")
            win.AttachEvent("sle_hth", "EditChanged", self.slehth_EditChanged);

        if (typeof (self.sletdh_EditChanged) == "function")
            win.AttachEvent("sle_tdh", "EditChanged", self.sletdh_EditChanged);

        if (typeof (self.slebgdh_EditChanged) == "function")
            win.AttachEvent("sle_bgdh", "EditChanged", self.slebgdh_EditChanged);

        if (typeof (self.Help) == "function")
            win.AttachEvent("btn_Help", "Clicked", self.Help);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.OpenWindow) == "function")
            win.AttachEvent("btn_open", "Clicked", self.OpenWindow);

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_prn", "Clicked", self.Print);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_bgzt", "SelectionChanged", self.Retrieve);

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

        dw_filter.Detach(); dw_filter = null;
        dw_list.Detach(); dw_list = null;
        tab_1.Detach(); tab_1 = null;
        dw_1.Detach(); dw_1 = null;
        dw_2.Detach(); dw_2 = null;
        dw_3.Detach(); dw_3 = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_hth.Detach(); sle_hth = null;
        sle_tdh.Detach(); sle_tdh = null;
        sle_bgdh.Detach(); sle_bgdh = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_bgzt.Detach(); ddlb_bgzt = null;
        dw_print.Detach(); dw_print = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
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
    var iw_Wldw_Select = null;
    var iw_Fj_Edit = null;
    var iw_HddzYtjkEdit = null;

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
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
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

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");
        if (Row > 0) {
            if (dwoName == "ywbh") {
                self.OpenWindow();
            } else
                if (dwoName == "bghg") {
                    if (readonly == "no") {
                        if (iw_Wldw_Select == null)
                            iw_Wldw_Select = new W_Wldw_Select();
                        khlx = "hg";
                        var ywy = requestor.GetParm("userid");
                        var ShareMode = requestor.GetParm("ShareMode");
                        var Dlwtf = requestor.GetParm("Dlwtf");
                        iw_Wldw_Select.SetDataWindow(dw_list);
                        iw_Wldw_Select.SetData("hddz_kybg_bghg");
                        iw_Wldw_Select.SetRow(Row);
                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                        dw_list.SetFocus();
                    }
                } if (dwoName == "bgsj") {
                    var date = new Date();
                    dw_list.SetItem(Row,"bgsj",date.getVarDate());
            } else if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_list.GetItemString(Row, "ywbh");
                var lx = "kybg"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_list.SetFocus();

            }
        }

    }
    //#endregion

        //#region dw_list ItemChanged
        this.dw_List_ItemChanged = function (row, dwoName, data) {
           if (dwoName == "htd") {
                if (data == "Y") {
                    var date = new Date();
                    dw_list.SetItem(row, "htd_rq", date.getVarDate())
                }
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
            dw_list.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤客户
    this.sleJzxh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jzxxx_jzxh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤合同号
    this.slehth_EditChanged = function (text) {
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

    //#region 过滤提单号
    this.sletdh_EditChanged = function (text) {
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

    //#region 过滤报关单号
    this.slebgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(bgdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤
    this.sle2_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion  



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Bg", "dw_hddz_list_bg");
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        if (Row > 0) {  fzjs_row   = Row;   }
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
        javascript: window.open('\空运报关.txt')
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

    //#region 单击明细单
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
            var jzxh = dw_list.GetItemString(Row, "jzxxx_jzxh");
            var zz_cm = dw_list.GetItemString(Row, "zz_cm");
            var cm = dw_list.GetItemString(Row, "cm");
            dw_1.Retrieve(jzxh);
            dw_2.Retrieve(jzxh);
            if (zz_cm == "" || zz_cm == null) {
                dw_3.Retrieve(cm);
            } else {
                dw_3.Retrieve(zz_cm);
            }
            
        };
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

    //数据导出
    this.Ytjk = function () {
        var row = dw_list.GetRow()
        var fsfxtid = dw_list.GetItemString(row, "ywbh");
        var ywlx = "0987654321"
        var sjylx = "10"
        var date = new Date;
        var nf = date.getYear().toString();
        var yf = date.getMonth() + 1;
        if (yf < 10) {
            yf = "0" + yf;
        };
        var rq = date.getDate();
        if (rq < 10) {
            rq = "0" + rq;
        };
        var hh = date.getHours();
        if (hh < 10) {
            hh = "0" + hh;
        };
        var mm = date.getMinutes();
        if (mm < 10) {
            mm = "0" + mm;
        };
        var ss = date.getSeconds();
        if (ss < 10) {
            ss = "0" + ss;
        };
        var sj = nf.toString() + yf.toString() + rq.toString() + hh.toString() + mm.toString() + ss.toString();
        var mrrq = nf.toString() + '/' + yf.toString() + '/' + rq.toString()
        var fileFullPath = "D:\\XML\\EMVS_EP_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC";

        var content = '<?xml version="1.0" encoding="UTF-8"?>';
        content += '\n<Message_Data>';
        content += '\n  <project_id/>';
        content += '\n  <project_ver/>';
        content += '\n  <Message_Head>';
        var ywbh = dw_list.GetItemString(row, "ywbh");
        content += '\n    <Id>' + ywbh + '</Id>';
        content += '\n    <MsgType>EMVS_DHL</MsgType>';
        content += '\n    <FileName>' + fileFullPath + '</FileName>';
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
        content += '\n        <RECEIVE_TRADE_CODE> </RECEIVE_TRADE_CODE>';
        content += '\n        <USER_INFO>EMVSOHGJ</USER_INFO>';
        content += '\n        <BIZ_TYPE>1</BIZ_TYPE>';
        content += '\n        <DATA_SOURCE_TYPE>0</DATA_SOURCE_TYPE>';
        var dzlx = dw_list.GetItemString(row, "dzlx");
        if (dzlx == null || dzlx == "") {
            requestor.MessageBox("提示", "请输入单证类型！")
            return
        }
        content += '\n        <DEC_TYPE>' + dzlx + '</DEC_TYPE>';
        var ytjkzt = dw_list.GetItemString(row, "ytjkzt")
        if (ytjkzt == null) {
            dw_list.SetItem(row, "ytjkzt", "4")
            ytjkzt = "4"
        } else if (ytjkzt == "4") {
            dw_list.SetItem(row, "ytjkzt", "5")
            ytjkzt = "5"
        };

        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';
        content += '\n      </PRE_ENTRY_INFO_ITEM>';
        content += '\n    </PRE_ENTRY_INFO_ROOT>';
        content += '\n    <EP_DEC_ROOT>';
        content += '\n      <EP_DEC_HEAD>';
        var bgdh = dw_list.GetItemString(row, "bgdh");
        if (bgdh == null) {
            bgdh = "";
        }
        content += '\n        <PRE_ENTRY_ID>' + bgdh + '</PRE_ENTRY_ID>';
        var jydwdm = dw_list.GetItemString(row, "jydwdm")
        if (jydwdm == null) {
            requestor.MessageBox("提示", "经营单位代码为空，不能申报")
            return;
        }
        //        var jydwbm_hgqybm = QsWebSoft.PubMethod.ReadHgqydm(jydwbm).value;
        //        if (jydwbm_hgqybm == null) {
        //            jydwbm_hgqybm = "";
        //        };
        content += '\n        <TRADE_CO>' + jydwdm + '</TRADE_CO>';
        var jydwmc = dw_list.GetItemString(row, "jydwmc")
        content += '\n        <TRADE_NAME>' + jydwmc + '</TRADE_NAME>';
        var hzdwdqdm = dw_list.GetItemString(row, "hzdwdqdm")
        if (hzdwdqdm == null) {
            hzdwdqdm = "";
        }
        content += '\n        <DISTRICT_CODE>' + hzdwdqdm + '</DISTRICT_CODE>';

        var shdwdm = dw_list.GetItemString(row, "shdwdm");
        if (shdwdm == null) {
            requestor.MessageBox("提示", "货主单位代码为空，不能申报")
            return;
        }
        content += '\n        <OWNER_CODE>' + shdwdm + '</OWNER_CODE>';
        var shdwmc = dw_list.GetItemString(row, "shdwmc");
        if (shdwmc == null) {
            shdwmc = "";
        }
        content += '\n        <OWNER_NAME>' + shdwmc + '</OWNER_NAME>';
        var sbdwdm = dw_list.GetItemString(row, "sbdwdm")
        if (sbdwdm == null) {
            requestor.MessageBox("提示", "申报单位代码为空，不能申报")
            return;
        }
        content += '\n        <AGENT_CODE>' + sbdwdm + '</AGENT_CODE>';
        var bggsmc = dw_list.GetItemString(row, "bggsmc")
        if (bggsmc == null) {
            bggsmc = "";
        }
        content += '\n        <AGENT_NAME>' + bggsmc + '</AGENT_NAME>';
        var ysfs = dw_list.GetItemString(row, "ysfs")
        var ysfsbm = "";
        if (ysfs != null) {
            ysfsbm = QsWebSoft.PubMethod.ReadYsfsbm(ysfs).value; ;
        };
        if (ysfsbm == null) {
            ysfsbm = "";
        }
        content += '\n        <TRAF_MODE>' + ysfsbm + '</TRAF_MODE>';
        var jcka = dw_list.GetItemString(row, "jcka")
        if (jcka == null) {
            jcka = ""
        }
        content += '\n        <I_E_PORT>' + jcka + '</I_E_PORT>';
        var qygdm = dw_list.GetItemString(row, "qygdm")

        if (qygdm == null) {
            qygdm = ""
        }
        content += '\n        <DISTINATE_PORT>' + qygdm + '</DISTINATE_PORT>';
        var cm = dw_list.GetItemString(row, "cm")
        if (cm == null) {
            cm = ""
        }
        content += '\n        <TRAF_NAME>' + cm + '</TRAF_NAME>';
        var hth = dw_list.GetItemString(row, "hth")
        if (hth == null) {
            hth = ""
        }
        content += '\n        <CONTR_NO>' + hth + '</CONTR_NO>';
        content += '\n        <IN_RATIO></IN_RATIO>';
        var ztdh = dw_list.GetItemString(row, "ztdh")
        if (ztdh == null) {
            ztdh = ""
        }
        content += '\n        <BILL_NO>' + ztdh + '</BILL_NO>';

        var ycd = dw_list.GetItemString(row, "ycd")
        var hggjdm = "";
        if (ycd != null) {
            hggjdm = QsWebSoft.PubMethod.ReadGjdm(ycd).value;
        };
        if (hggjdm == null) {
            hggjdm = "";
        }
        content += '\n        <TRADE_COUNTRY>' + hggjdm + '</TRADE_COUNTRY>';
        var myfs = dw_list.GetItemString(row, "myfs")
        if (myfs == null) {
            myfs = ""
        }
        content += '\n        <TRADE_MODE>' + myfs + '</TRADE_MODE>';
        var zmfs = dw_list.GetItemString(row, "zmfs")
        if (zmfs == null) {
            zmfs = ""
        }
        content += '\n        <CUT_MODE>' + zmfs + '</CUT_MODE>';
        content += '\n        <PAY_MODE>0</PAY_MODE>';
        var jgfs = dw_list.GetItemString(row, "jgfs")
        var jgtkdm = QsWebSoft.PubMethod.ReadJgtk(jgfs).value; ;
        if (jgtkdm == null) {
            jgtkdm = ""
        }
        content += '\n        <TRANS_MODE>' + jgtkdm + '</TRANS_MODE>';
        content += '\n        <PAY_WAY></PAY_WAY>';
        var yfbj = dw_list.GetItemString(row, "yfbj")
        if (yfbj == null) {
            yfbj = ""
        }
        content += '\n        <FEE_MARK>' + yfbj + '</FEE_MARK>';
        var yfbb = dw_list.GetItemString(row, "kpbz")
        var yfbbdm = "";
        if (yfbb != null) {
            yfbbdm = QsWebSoft.PubMethod.ReadBbdm(yfbb).value; ;
        };
        if (yfbbdm == null) {
            yfbbdm = ""
        }
        content += '\n        <FEE_CURR>' + yfbbdm + '</FEE_CURR>';
        var yfje = dw_list.GetItemNumber(row, "kpje")
        if (yfje == null) {
            yfje = 0;
        }
        content += '\n        <FEE_RATE>' + yfje + '</FEE_RATE>';

        content += '\n        <OTHER_MARK></OTHER_MARK>';
        content += '\n        <OTHER_CURR></OTHER_CURR>';
        content += '\n        <OTHER_RATE></OTHER_RATE>';
        var bxfbj = dw_list.GetItemString(row, "bxfbj")
        if (bxfbj == null) {
            bxfbj = ""
        }
        content += '\n        <INSUR_MARK>' + bxfbj + '</INSUR_MARK>';
        var bxfbb = dw_list.GetItemString(row, "bxfbb")
        var bxfbbdm = "";
        if (bxfbb != null) {
            bxfbbdm = QsWebSoft.PubMethod.ReadBbdm(bxfbb).value; ;
        };
        if (bxfbbdm == null) {
            bxfbbdm = ""
        }
        content += '\n        <INSUR_CURR>' + bxfbbdm + '</INSUR_CURR>';
        var bxfje = dw_list.GetItemNumber(row, "bxfje")
        if (bxfje == null) {
            bxfje = 0;
        }
        content += '\n        <INSUR_RATE>' + bxfje + '</INSUR_RATE>';
        var zxs = dw_list.GetItemNumber(row, "zxs")
        if (zxs == null) {
            zxs = 0;
        }
        content += '\n        <PACK_NO>' + zxs + '</PACK_NO>';
        var zmz = dw_list.GetItemNumber(row, "zmz")
        if (zmz == null) {
            zmz = 0;
        }
        content += '\n        <GROSS_WT>' + zmz + '</GROSS_WT>';
        var zjz = dw_list.GetItemNumber(row, "zjz")
        if (zjz == null) {
            zjz = 0;
        }
        content += '\n        <NET_WT>' + zjz + '</NET_WT>';
        content += '\n        <LICENSE_NO></LICENSE_NO>';
        content += '\n        <APPR_NO></APPR_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';

        content += '\n        <I_E_DATE>' + mrrq + '</I_E_DATE>';
        var bzzl = dw_list.GetItemString(row, "bzzl")
        if (bzzl == null) {
            bzzl = "";
        }
        content += '\n        <WRAP_TYPE>' + bzzl + '</WRAP_TYPE>';
        var ytbz = dw_list.GetItemString(row, "ytbz")
        if (ytbz == null || ytbz == "") {
            requestor.MessageBox("提示", "亿通备注，不能申报")
            return;
        }
        content += '\n        <NOTE_S>' + ytbz + '</NOTE_S>';
        content += '\n        <D_DATE>' + mrrq + '</D_DATE>';

        content += '\n        <EX_SOURCE></EX_SOURCE>';
        var hcorhbh = dw_list.GetItemString(row, "hcorhbh")
        ds_zzxx.Retrieve(ywbh)
        var zzxx_row = ds_zzxx.RowCount();
        if (zzxx_row > 0) {
            hcorhbh = ds_zzxx.GetItemString(zzxx_row, "zz_hcorhbh")
        }
        if (hcorhbh == null) {
            hcorhbh = "";
        }
        content += '\n        <VOYAGE_NO>' + hcorhbh + '</VOYAGE_NO>';
        var jckbz = dw_list.GetItemString(row, "jckbz")
        if (jckbz == null) {
            jckbz = "";
        }
        content += '\n        <IE_FLAG>' + jckbz + '</IE_FLAG>';

        content += '\n        <PRDTID></PRDTID>';
        content += '\n        <STORENO></STORENO>';
        content += '\n        <RAMANUALNO></RAMANUALNO>';
        content += '\n        <RADECLNO></RADECLNO>';
        var ytjkzt = dw_list.GetItemString(row, "ytjkzt")
        if (ytjkzt == null) {
            ytjkzt = "";
        }
        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';

        content += '\n        <MEMO></MEMO>';
        content += '\n      </EP_DEC_HEAD>';
        ds_spxx.Retrieve(ywbh)
        var spxx_row = ds_spxx.RowCount();
        content += '\n      <EP_DEC_LIST COUNT="' + spxx_row + '">';
        content += '\n        <EP_DEC_LIST_ITEM>';

        var wbbb = dw_list.GetItemString(row, "wbbb")
        var wbbbdm = "";
        if (wbbb != null) {
            wbbbdm = QsWebSoft.PubMethod.ReadBbdm(wbbb).value; ;
        };
        if (wbbbdm == null) {
            wbbbdm = ""
        }
        var newrow = 0;
        for (row = ds_spxx.RowCount(); row > 0; row--) {
            newrow = newrow + 1
            content += '\n          <G_NO>' + newrow + '</G_NO>';
            content += '\n          <CONTR_ITEM></CONTR_ITEM>';
            var hgbm = ds_spxx.GetItemString(row, "hgbm");
            if (hgbm == null) {
                hgbm = "";
            }
            content += '\n          <CODE_T>' + hgbm.substr(1, 8) + '</CODE_T>';
            content += '\n          <CODE_S>' + hgbm.substr(9, 2) + '</CODE_S>';
            var spmc = ds_spxx.GetItemString(row, "spmc");
            if (spmc == null) {
                spmc = "";
            }
            content += '\n          <G_NAME>' + spmc + '</G_NAME>';
            var spsx = ds_spxx.GetItemString(row, "spsx");
            var gzfs = ds_spxx.GetItemString(row, "gzfs");
            var sppz = ds_spxx.GetItemString(row, "sppz");
            var spdj = ds_spxx.GetItemString(row, "spdj");
            var bzgg = ds_spxx.GetItemString(row, "bzgg");
            var sppp = ds_spxx.GetItemString(row, "sppp");
            var spgg = ds_spxx.GetItemString(row, "spgg");
            var cf = ds_spxx.GetItemString(row, "cf");
            var xjgjggy = ds_spxx.GetItemString(row, "xjgjggy");
            var spqtys = ds_spxx.GetItemString(row, "spqtys");
            var ls_model = ""
            if (spsx != null && spsx != "") {
                ls_model = spsx;
            };
            if (gzfs != null || gzfs != "") {
                if (ls_model == "") {
                    ls_model = spsx;
                } else {
                    ls_model = ls_model + "|" + spsx
                }

            };
            if (sppz != null || sppz != "") {
                if (ls_model == "") {
                    ls_model = "品种:" + sppz;
                } else {
                    ls_model = ls_model + "|" + "品种:" + sppz
                }

            };
            if (spdj != null || spdj != "") {
                if (ls_model == "") {
                    ls_model = "等级:" + spdj;
                } else {
                    ls_model = ls_model + "|" + "等级:" + spdj
                }

            };
            if (bzgg != null || bzgg != "") {
                if (ls_model == "") {
                    ls_model = bzgg;
                } else {
                    ls_model = ls_model + "|" + bzgg
                }

            };
            if (sppp != null || sppp != "") {
                if (ls_model == "") {
                    ls_model = "品牌:" + sppp;
                } else {
                    ls_model = ls_model + "|" + "品牌:" + sppp
                }

            };

            if (spgg != null || spgg != "") {
                if (ls_model == "") {
                    ls_model = spgg;
                } else {
                    ls_model = ls_model + "|" + spgg
                }

            };

            if (cf != null || cf != "") {
                if (ls_model == "") {
                    ls_model = cf;
                } else {
                    ls_model = ls_model + "|" + cf
                }

            };
            if (xjgjggy != null || xjgjggy != "") {
                if (ls_model == "") {
                    ls_model = xjgjggy;
                } else {
                    ls_model = ls_model + "|" + xjgjggy
                }

            };
            if (spqtys != null || spqtys != "") {
                if (ls_model == "") {
                    ls_model = spqtys;
                } else {
                    ls_model = ls_model + "|" + spqtys
                }

            };


            content += '\n          <G_MODEL>' + ls_model + '</G_MODEL>';
            content += '\n          <ORIGIN_COUNTRY>' + hggjdm + '</ORIGIN_COUNTRY>';
            var zjz = ds_spxx.GetItemNumber(row, "zjz");
            if (zjz == null) {
                zjz = 0;
            }
            content += '\n          <G_QTY>' + zjz + '</G_QTY>';
            var hgjldw = ds_spxx.GetItemString(row, "hgjldw");
            if (hgjldw == null) {
                hgjldw = "";
            }
            content += '\n          <G_UNIT>' + hgjldw + '</G_UNIT>';
            content += '\n          <QTY_1>' + zjz + '</QTY_1>';
            content += '\n          <UNIT_1>' + hgjldw + '</UNIT_1>';
            content += '\n          <QTY_2></QTY_2>';
            content += '\n          <UNIT_2></UNIT_2>';

            content += '\n          <TRADE_CURR>' + wbbbdm + '</TRADE_CURR>';
            var hgdj = ds_spxx.GetItemNumber(row, "hgdj")
            content += '\n          <DECL_PRICE>' + hgdj + '</DECL_PRICE>';
            var zj = ds_spxx.GetItemNumber(row, 'zj')
            content += '\n          <TRADE_TOTAL>' + zj + '</TRADE_TOTAL>';

            var zjmsfs = ds_spxx.GetItemString(row, "zjmsfs")
            if (zjmsfs == null) {
                zjmsfs = ""
            }
            content += '\n          <DUTY_MODE>' + zjmsfs + '</DUTY_MODE>'; //未做
            var yt = ds_spxx.GetItemString(row, "yt")
            if (yt == null) {
                yt = ""
            }
            content += '\n          <USE_TO>' + yt + '</USE_TO>';
            content += '\n          <PRDT_NO></PRDT_NO>';
            content += '\n          <GOODS_ID></GOODS_ID>';
            var zmz = ds_spxx.GetItemNumber(row, "zmz");
            if (zmz == null) {
                zmz = 0;
            }
            content += '\n          <GROSS_WT>' + zmz + '</GROSS_WT>';
            var zjz = ds_spxx.GetItemNumber(row, "zjz");
            if (zjz == null) {
                zjz = 0;
            }
            content += '\n          <NET_WT>' + zjz + '</NET_WT>';
            content += '\n          <WORK_USD>0.0</WORK_USD>';
        }
        content += '\n        </EP_DEC_LIST_ITEM>';
        content += '\n      </EP_DEC_LIST>';
        ds_jzxxx.Retrieve(ywbh)
        var jzxxx_row = ds_jzxxx.RowCount();
        content += '\n      <EP_DEC_CONTAINER_LIST COUNT="' + jzxxx_row + '">';
        content += '\n      	<EP_DEC_CONTAINER_ITEM>';
        var newrow_jzxxx = 0;
        for (row = ds_jzxxx.RowCount(); row > 0; row--) {
            var jzxh = ds_jzxxx.GetItemString(row, "jzxh");
            if (jzxh == null) {
                jzxh = "";
            }
            content += '\n      		<CONTAINER_NO>' + jzxh + '</CONTAINER_NO>';
            var xx = ds_jzxxx.GetItemString(row, "xx");
            var xxdm = "";
            if (xx != null) {
                xxdm = QsWebSoft.PubMethod.ReadXxdm(xx).value;
            };
            if (xxdm == null) {
                xxdm = ""
            }
            content += '\n          <CONTAINER_MODEL>' + xxdm + '</CONTAINER_MODEL>';
            var jzxzz = "";

            if (xx != null) {
                jzxzz = QsWebSoft.PubMethod.ReadJzxzz(xx).value;

            };
            if (jzxzz == null) {
                jzxzz = 0
            }
            content += '\n          <CONTAINER_WT>' + jzxzz + '</CONTAINER_WT>';
        }
        content += '\n      	</EP_DEC_CONTAINER_ITEM>';
        content += '\n      </EP_DEC_CONTAINER_LIST>';

        //        content += '\n      <EP_DEC_CERT_LIST COUNT="1">';
        //        content += '\n      	<EP_DEC_CERT_ITEM>';
        //        content += '\n      		<DOCU_CODE>2</DOCU_CODE>';
        //        content += '\n          <CERT_CODE>010101110011</CERT_CODE>';
        //        content += '\n      	</EP_DEC_CERT_ITEM>';
        //        content += '\n      </EP_DEC_CERT_LIST>';
        //        content += '\n       <EP_DEC_EDOCRELATION_LIST COUNT="1">';
        //        content += '\n      	<EP_DEC_EDOCRELATION_ITEM>';
        //        content += '\n      		<FILE_TYPE>1</FILE_TYPE>';
        //        content += '\n          <FILE_NAME></FILE_NAME >';
        //        content += '\n          <EDOCOWNERCODE>1234567890</EDOCOWNERCODE>';
        //        content += '\n          <EDOCOWNERNAME>上海亿通国际股份有限公司</EDOCOWNERNAME>';
        //        content += '\n          <OPNOTE>备注</OPNOTE>';
        //        content += '\n      	</EP_DEC_EDOCRELATION_ITEM>';
        //        content += '\n      </EP_DEC_EDOCRELATION_LIST>';
        //        content += '\n      <EP_DEC_RESULT_LIST COUNT="1">';
        //        content += '\n        <EP_DEC_RESULT_ITEM>';
        //        content += '\n          <NOTICE_DATE></NOTICE_DATE>';
        //        content += '\n          <CHANNEL></CHANNEL>';
        //        content += '\n          <NOTE></NOTE>';
        //        content += '\n          <I_E_DATE></I_E_DATE>';
        //        content += '\n          <D_DATE></D_DATE>';
        //        content += '\n        </EP_DEC_RESULT_ITEM>';
        //        content += '\n      </EP_DEC_RESULT_LIST>';

        content += '\n    </EP_DEC_ROOT> ';
        content += '\n  </Message_Body>';
        content += '\n</Message_Data>';

        if (content == null) {
            requestor.MessageBox("提示", "数据不全，无法生成文件！")
        } else {
            QsWebSoft.PubMethod.WriteYtjkXml(content, "D:\\XML\\", fileFullPath);
            requestor.MessageBox("提示", "文件<" + fileFullPath + ">已经生成完成！")
        }

    }


    
    //    this.dc = function () { 
    //       dw_list.SaveAs(D:\XML\AAAA.xml)
    //    }
}
