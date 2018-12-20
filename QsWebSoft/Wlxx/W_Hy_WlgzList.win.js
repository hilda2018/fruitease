///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_WlgzList() {

    var self = this;
    var requestor = new PBWindow();
    var dw_filter = new DataWindow(requestor);
    var dw_list = new DataWindow(requestor);
    var tb_3 = new ToolStrip(requestor);
    var ddlb_rwzt = new DropDownListBox(requestor);
    var ddlb_fyzt = new DropDownListBox(requestor);
    var ddlb_rwlx = new DropDownListBox(requestor);
    var tb_2 = new ToolStrip(requestor);
    var ddlb_rq = new DropDownListBox(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_jzxh = new SingleLineEdit(requestor);
    var sle_wtkh = new SingleLineEdit(requestor);
    var sle_sjshr = new SingleLineEdit(requestor);
    var sle_cdmc = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ddlb_jdrjc = new DropDownListBox(requestor);
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
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_3 == null) tb_3 = new ToolStrip(requestor);
        tb_3.Attach(win.Control("tb_3"));
        if (ddlb_rwzt == null) ddlb_rwzt = new DropDownListBox(requestor);
        ddlb_rwzt.Attach(win.Control("ddlb_rwzt"));
        if (ddlb_fyzt == null) ddlb_fyzt = new DropDownListBox(requestor);
        ddlb_fyzt.Attach(win.Control("ddlb_fyzt"));
        if (ddlb_rwlx == null) ddlb_rwlx = new DropDownListBox(requestor);
        ddlb_rwlx.Attach(win.Control("ddlb_rwlx"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (ddlb_rq == null) ddlb_rq = new DropDownListBox(requestor);
        ddlb_rq.Attach(win.Control("ddlb_rq"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (sle_jzxh == null) sle_jzxh = new SingleLineEdit(requestor);
        sle_jzxh.Attach(win.Control("sle_jzxh"));
        if (sle_wtkh == null) sle_wtkh = new SingleLineEdit(requestor);
        sle_wtkh.Attach(win.Control("sle_wtkh"));
        if (sle_sjshr == null) sle_sjshr = new SingleLineEdit(requestor);
        sle_sjshr.Attach(win.Control("sle_sjshr"));
        if (sle_cdmc == null) sle_cdmc = new SingleLineEdit(requestor);
        sle_cdmc.Attach(win.Control("sle_cdmc"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ddlb_jdrjc == null) ddlb_jdrjc = new DropDownListBox(requestor);
        ddlb_jdrjc.Attach(win.Control("ddlb_jdrjc"));
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

        if (typeof (self.sleRwzt_EditChanged) == "function")
            win.AttachEvent("ddlb_rwzt", "SelectionChanged", self.sleRwzt_EditChanged);

        if (typeof (self.sleFyzt_EditChanged) == "function")
            win.AttachEvent("ddlb_fyzt", "SelectionChanged", self.sleFyzt_EditChanged);

        if (typeof (self.sleRwlx_SelectionChanged) == "function")
            win.AttachEvent("ddlb_rwlx", "SelectionChanged", self.sleRwlx_SelectionChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_rq", "SelectionChanged", self.Retrieve);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.slejzxh_EditChanged) == "function")
            win.AttachEvent("sle_jzxh", "EditChanged", self.slejzxh_EditChanged);

        if (typeof (self.slewtkh_EditChanged) == "function")
            win.AttachEvent("sle_wtkh", "EditChanged", self.slewtkh_EditChanged);

        if (typeof (self.slesjshr_EditChanged) == "function")
            win.AttachEvent("sle_sjshr", "EditChanged", self.slesjshr_EditChanged);

        if (typeof (self.slecdmc_EditChanged) == "function")
            win.AttachEvent("sle_cdmc", "EditChanged", self.slecdmc_EditChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.OpenFy) == "function")
            win.AttachEvent("btn_2", "Clicked", self.OpenFy);

        if (typeof (self.OpenFy_old) == "function")
            win.AttachEvent("btn_openfy", "Clicked", self.OpenFy_old);

        if (typeof (self.OpenWindow) == "function")
            win.AttachEvent("btn_open", "Clicked", self.OpenWindow);

        if (typeof (self.Xsdt) == "function")
            win.AttachEvent("btn_xsdt", "Clicked", self.Xsdt);

        if (typeof (self.Tj) == "function")
            win.AttachEvent("btn_tj", "Clicked", self.Tj);

        if (typeof (self.Jsrw) == "function")
            win.AttachEvent("btn_1", "Clicked", self.Jsrw);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

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

        dw_filter.Detach(); dw_filter = null;
        dw_list.Detach(); dw_list = null;
        tb_3.Detach(); tb_3 = null;
        ddlb_rwzt.Detach(); ddlb_rwzt = null;
        ddlb_fyzt.Detach(); ddlb_fyzt = null;
        ddlb_rwlx.Detach(); ddlb_rwlx = null;
        tb_2.Detach(); tb_2 = null;
        ddlb_rq.Detach(); ddlb_rq = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        sle_wtkh.Detach(); sle_wtkh = null;
        sle_sjshr.Detach(); sle_sjshr = null;
        sle_cdmc.Detach(); sle_cdmc = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
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
    var iw_Wldw_Select = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Wlgz.ashx");   

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
        var rqlx = ddlb_rq.GetText();
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
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx, userid, jdrjc);

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

    //#region 打开编辑窗口
    this.OpenWindow = function () {
        var iw_Hy_Wlgz = null;

        if (iw_Hy_Wlgz == null)
            iw_Hy_Wlgz = new W_Hy_Wlgz();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var rwbh = dw_list.GetItemString(row, "rwbh");
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hddz_cxh = dw_list.GetItemNumber(row, "hddz_cxh");
        iw_Hy_Wlgz.SetDataWindow(dw_list);
        iw_Hy_Wlgz.SetData(ywbh);
        iw_Hy_Wlgz.SetRow(hddz_cxh);
        iw_Hy_Wlgz.SetRwlx("物流跟踪");
        var rwmc = "wlgz";

        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Hy_Wlgz&Rwbh=" + rwbh + '&Ywbh=' + ywbh + '&Hddz_cxh=' + hddz_cxh.toString() + '&Rwmc=' + rwmc, iw_Hy_Wlgz);

            self.Retrieve(); //刷新
    }
        //#endregion

        //#region 打开编辑窗口
    this.OpenFy = function () {
        var iw_Hy_Wlgz_Fyqr = null;

        if (iw_Hy_Wlgz_Fyqr == null)
            iw_Hy_Wlgz_Fyqr = new W_Hy_Wlgz_Fyqr();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var rwbh = dw_list.GetItemString(row, "rwbh");
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hddz_cxh = dw_list.GetItemNumber(row, "hddz_cxh");
        iw_Hy_Wlgz_Fyqr.SetDataWindow(dw_list);

        var rwmc = "wlgz";

        var state = dw_list.GetItemString(dw_list.GetRow(), 'state_fy')


        var operation = requestor.GetParm("operation");
        if (operation == "open" && (state == null || state == "" || state == "新制")) {
            operation = "open";
        }
        else {
            operation = "show";
        }
       
        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Hy_Wlgz_Fyqr&Rwbh=" + rwbh + '&Ywbh=' + ywbh + '&Hddz_cxh=' + hddz_cxh.toString() + '&operation=' + operation.toString(), iw_Hy_Wlgz_Fyqr);

    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenFy_old = function () {
        var iw_Hy_Wlgz_Fyqr_old = null;

        if (iw_Hy_Wlgz_Fyqr_old == null)
            iw_Hy_Wlgz_Fyqr_old = new W_Hy_Wlgz_Fyqr_old();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var rwbh = dw_list.GetItemString(row, "rwbh");
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hddz_cxh = dw_list.GetItemNumber(row, "hddz_cxh");
        iw_Hy_Wlgz_Fyqr_old.SetDataWindow(dw_list);

        var rwmc = "wlgz";

        var state = dw_list.GetItemString(dw_list.GetRow(), 'state_fy')


        var operation = requestor.GetParm("operation");
        if (operation == "open" && (state == null || state == "" || state == "新制")) {
            operation = "open";
        }
        else {
            operation = "show";
        }
        
        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Hy_Wlgz_Fyqr_old&Rwbh=" + rwbh + '&Ywbh=' + ywbh + '&Hddz_cxh=' + hddz_cxh.toString() + '&operation=' + operation.toString(), iw_Hy_Wlgz_Fyqr_old);


    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");
        if (Row > 0)
            if (dwoName == "ywbh") {
                self.OpenWindow();
            }

        if (dwoName == "jzxxx_sc_sj") {
            if (readonly == "no") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Sj_Select();
                sjlx = "hy";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_list);
                iw_Wldw_Select.SetRow(Row);
                iw_Wldw_Select.SetData("hy_sc_sj");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Wldw_Select);
                dw_list.SetFocus();
            }
        }

        if (dwoName == "jzxxx_fxdcjc") {
            if (readonly == "no") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "dc";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");

                iw_Wldw_Select.SetDataWindow(dw_list);
                iw_Wldw_Select.SetData("hy_sc_dc");
                iw_Wldw_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_list.SetFocus();
            }

        }


    }
    //#endregion


        //#region dw_List  ItemChanged
        this.dw_List_ItemChanged = function (row, dwoName, data) {

            if (dwoName == "jzxxx_sc_sjlxfs") {

                var jzxxx_jschfscwld_bz = dw_list.GetItemString(row, "jzxxx_jschfscwld_bz")
                if (jzxxx_jschfscwld_bz == "Y") {
                    dw_list.SetItem(1, "jzxxx_jschfscwld_sjlxfs", data);
                }
                var jzxxx_dc_bz = dw_list.GetItemString(row, "jzxxx_dc_bz")
                if (jzxxx_dc_bz == "Y") {
                    dw_list.SetItem(1, "jzxxx_dc_sjlxfs", data);
                }

            }

            if (dwoName == "jzxxx_sc_cp") {


                var jzxxx_jschfscwld_bz = dw_list.GetItemString(row, "jzxxx_jschfscwld_bz")
                if (jzxxx_jschfscwld_bz == "Y") {
                    dw_list.SetItem(1, "jzxxx_jschfscwld_cp", data);
                }
                var jzxxx_dc_bz = dw_list.GetItemString(row, "jzxxx_dc_bz")
                if (jzxxx_dc_bz == "Y") {
                    dw_list.SetItem(1, "jzxxx_dc_cp", data);
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
    this.slekh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%')) or ( Upper(khpym) like Upper('%" + text + "%'))");
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

    //#region 过滤集装箱号
    this.slejzxh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jzxh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤委托客户
    this.slewtkh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(khjc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤实际收货人
    this.slesjshr_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(sjshrmc) like Upper('%" + text + "%'))");
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
            dw_list.SetFilter("( Upper(cdmc) like Upper('%" + text + "%'))");
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

    //#region 过滤
    this.sleRwlx_SelectionChanged = function (index) {
        var rwzt = ddlb_rwzt.GetText();
        var ls_filter = "";

        if (rwzt == "" || rwzt == null || rwzt == "全部") {
            ls_filter = "";
        } else {
            ls_filter = "(( Upper(rwzt) = Upper('" + rwzt + "')))";
        }

        var fyzt = ddlb_fyzt.GetText();
        if (fyzt == "" || fyzt == null || fyzt == "全部") {
            ls_filter = ls_filter;
        } else {
            if (ls_filter == "") {
                ls_filter = "(( Upper(fyzt) = Upper('" + fyzt + "')))  ";
            }
            else {
                ls_filter = ls_filter + "and (( Upper(fyzt) = Upper('" + fyzt + "')))  ";
            }
        }
        var rwlx = ddlb_rwlx.GetText();
        if (rwlx == "全部") {
            ls_filter = ls_filter;
        }
        else {
            if (ls_filter == "") {
                ls_filter = "(( Upper(rwlx) = Upper('" + rwlx + "')))  ";
            }
            else {
                ls_filter = ls_filter + "and (( Upper(rwlx) = Upper('" + rwlx + "')))  ";
            }

        };
        dw_list.SetRedraw(false);
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Hy_ScList", "dw_hy_sc_list");
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

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
 
        var dw_d_data = dw_list.GetChanges();
        if ( dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListSave", "dw_list=" + dw_d_data);
        
        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
     }
    //#endregion  


    //#region 提交
     this.Tj = function () {
         var row = dw_list.GetRow();
         if (row <= 0)
             return;
         var state = dw_list.GetItemString(row, "state_fy")
         if (state == "提交") {
             if (requestor.MessageBox("提示", "本单据已经提交,是否撤销?", ICON.Question, BUTTON.YesNo) == 1) {
                 dw_list.SetItem(row, "state_fy", "新制")
 
             } else {
                 return
             }
         }
         var rwbh = dw_list.GetItemString(row, "rwbh")

         var num = QsWebSoft.PubMethod.WlgzFyqr(rwbh).value;
         if (num == "1") {
             dw_list.SetItem(row, "state_fy", "提交")
             dw_list.ResetUpdate();
             requestor.MessageBox("提示", "报批成功!")
         }
         else {
             requestor.MessageBox("提示", "报批失败!")

         }

     }
    //#endregion

    //#region 显示提单
    this.Xsdt = function () {
        var row = dw_list.GetRow();
        if (row >= 0) {
            var rwbh = dw_list.GetItemString(row, "rwbh");
                 javascript: window.open("http://transport.fruitease.com/index.php/Home/Index/index?taskno=" + rwbh,"_blank", "channelmode");

//              javascript: window.open("http://transport.fruitease.com/index.php/Home/Index/index?taskno=201510260050","_blank", "channelmode")
             
        };
    };
    //#endregion

    //#region 结束任务
    this.Jsrw = function () {
        var row = dw_list.GetRow();
        if (row >= 0) {
            var rwbh = dw_list.GetItemString(row, "rwbh");
            dw_list.SetItem(row, "rwsfwc", "Y");
            dw_list.SetItem(row, "rwzt", "任务完成")
        };
    };
    //#endregion

    //#region 任务状态
    this.sleRwzt_EditChanged = function (text) {
        var rwzt = ddlb_rwzt.GetText();
        var ls_filter = "";

        if (rwzt == "" || rwzt == null || rwzt == "全部") {
            ls_filter = "";
        } else {
            ls_filter = "(( Upper(rwzt) = Upper('" + rwzt + "')))  ";
        }

        var fyzt = ddlb_fyzt.GetText();
        if (fyzt == "" || fyzt == null || fyzt == "全部") {
            ls_filter = ls_filter;
        } else {
            if (ls_filter == "") {
                ls_filter = "(( Upper(fyzt) = Upper('" + fyzt + "')))  ";
            }
            else {
                ls_filter = ls_filter + "and (( Upper(fyzt) = Upper('" + fyzt + "')))  ";
            }
        }
        var rwlx = ddlb_rwlx.GetText();
        if (rwlx == "全部") {
            ls_filter = ls_filter;
        }
        else {
            if (ls_filter == "") {
                ls_filter = "(( Upper(rwlx) = Upper('" + rwlx + "')))  ";
            }
            else {
                ls_filter = ls_filter + "and (( Upper(rwlx) = Upper('" + rwlx + "')))  ";
            }

        };
        dw_list.SetRedraw(false);
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region  费用状态
    this.sleFyzt_EditChanged = function (text) {
        var rwzt = ddlb_rwzt.GetText();
        var ls_filter = "";

        if (rwzt == "" || rwzt == null || rwzt == "全部") {
            ls_filter = "";
        } else {
            ls_filter = "(( Upper(rwzt) = Upper('" + rwzt + "')))  ";
        }

        var fyzt = ddlb_fyzt.GetText();

        if (fyzt == "" || fyzt == null || fyzt == "全部") {
            ls_filter = ls_filter;
        } else {
            if (ls_filter == "") {
                ls_filter = "(( Upper(fyzt) = Upper('" + fyzt + "')))  ";
            }
            else {
                ls_filter = ls_filter + "and (( Upper(fyzt) = Upper('" + fyzt + "')))  ";
            }
        }

         
        var rwlx = ddlb_rwlx.GetText();
        if (rwlx == "全部") {
            ls_filter = ls_filter;
        }
        else {
            if (ls_filter == "") {
                ls_filter = "(( Upper(rwlx) = Upper('" + rwlx + "')))  ";
            }
            else {
                ls_filter = ls_filter + "and (( Upper(rwlx) = Upper('" + rwlx + "')))  ";
            }
            
        };
                 
        dw_list.SetRedraw(false);
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
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
