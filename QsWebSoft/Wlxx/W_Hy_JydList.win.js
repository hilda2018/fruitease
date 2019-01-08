///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_JydList() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_3 = new ToolStrip(requestor);
    var ddlb_jyj = new DropDownListBox(requestor);
    var sle_2 = new SingleLineEdit(requestor);
    var ss_1 = new ToolStrip(requestor);
    var dw_filter = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_kh = new SingleLineEdit(requestor);
    var sle_hth = new SingleLineEdit(requestor);
    var sle_jzxh = new SingleLineEdit(requestor);
    var sle_3 = new SingleLineEdit(requestor);
    var ddlb_jdrjc = new DropDownListBox(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ddlb_jyd = new DropDownListBox(requestor);
    var cbx_sfssys = new CheckBox(requestor);
    var ddlb_qgld = new DropDownListBox(requestor);
    var sle_jyd = new SingleLineEdit(requestor);
    var ddlb_sc = new DropDownListBox(requestor);
    var dw_print = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);
    var ds_jyj = new DataStore(requestor);
    var ds_2 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_3 == null) tb_3 = new ToolStrip(requestor);
        tb_3.Attach(win.Control("tb_3"));
        if (ddlb_jyj == null) ddlb_jyj = new DropDownListBox(requestor);
        ddlb_jyj.Attach(win.Control("ddlb_jyj"));
        if (sle_2 == null) sle_2 = new SingleLineEdit(requestor);
        sle_2.Attach(win.Control("sle_2"));
        if (ss_1 == null) ss_1 = new ToolStrip(requestor);
        ss_1.Attach(win.Control("ss_1"));
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
        if (sle_jzxh == null) sle_jzxh = new SingleLineEdit(requestor);
        sle_jzxh.Attach(win.Control("sle_jzxh"));
        if (sle_3 == null) sle_3 = new SingleLineEdit(requestor);
        sle_3.Attach(win.Control("sle_3"));
        if (ddlb_jdrjc == null) ddlb_jdrjc = new DropDownListBox(requestor);
        ddlb_jdrjc.Attach(win.Control("ddlb_jdrjc"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ddlb_jyd == null) ddlb_jyd = new DropDownListBox(requestor);
        ddlb_jyd.Attach(win.Control("ddlb_jyd"));
        if (cbx_sfssys == null) cbx_sfssys = new CheckBox(requestor);
        cbx_sfssys.Attach(win.Control("cbx_sfssys"));
        if (ddlb_qgld == null) ddlb_qgld = new DropDownListBox(requestor);
        ddlb_qgld.Attach(win.Control("ddlb_qgld"));
        if (sle_jyd == null) sle_jyd = new SingleLineEdit(requestor);
        sle_jyd.Attach(win.Control("sle_jyd"));
        if (ddlb_sc == null) ddlb_sc = new DropDownListBox(requestor);
        ddlb_sc.Attach(win.Control("ddlb_sc"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_role == null) ds_role = new DataStore(requestor);
        ds_role.Attach(win.Control("ds_role"));
        if (ds_jyj == null) ds_jyj = new DataStore(requestor);
        ds_jyj.Attach(win.Control("ds_jyj"));
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

        if (typeof (self.ddlb_jyj_SelectionChanged) == "function")
            win.AttachEvent("ddlb_jyj", "SelectionChanged", self.ddlb_jyj_SelectionChanged);

        if (typeof (self.slebjh_EditChanged) == "function")
            win.AttachEvent("sle_2", "EditChanged", self.slebjh_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.slekh_EditChanged) == "function")
            win.AttachEvent("sle_kh", "EditChanged", self.slekh_EditChanged);

        if (typeof (self.slehth_EditChanged) == "function")
            win.AttachEvent("sle_hth", "EditChanged", self.slehth_EditChanged);

        if (typeof (self.slejzxh_EditChanged) == "function")
            win.AttachEvent("sle_jzxh", "EditChanged", self.slejzxh_EditChanged);

        if (typeof (self.sletgdh_EditChanged) == "function")
            win.AttachEvent("sle_3", "EditChanged", self.sletgdh_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jdrjc", "SelectionChanged", self.Retrieve);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.OpenWindow) == "function")
            win.AttachEvent("btn_open", "Clicked", self.OpenWindow);

        if (typeof (self.OpenWlgz_J) == "function")
            win.AttachEvent("btn_open_rw", "Clicked", self.OpenWlgz_J);

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_prn", "Clicked", self.Print);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jyd", "SelectionChanged", self.Retrieve);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("cbx_sfssys", "Clicked", self.Retrieve);

        if (typeof (self.scfysqd) == "function")
            win.AttachEvent("btn_scfysqd", "Clicked", self.scfysqd);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_qgld", "SelectionChanged", self.Retrieve);

        if (typeof (self.slejyd_EditChanged) == "function")
            win.AttachEvent("sle_jyd", "EditChanged", self.slejyd_EditChanged);

        if (typeof (self.ddlb_sc_SelectionChanged) == "function")
            win.AttachEvent("ddlb_sc", "SelectionChanged", self.ddlb_sc_SelectionChanged);

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
        tb_3.Detach(); tb_3 = null;
        ddlb_jyj.Detach(); ddlb_jyj = null;
        sle_2.Detach(); sle_2 = null;
        ss_1.Detach(); ss_1 = null;
        dw_filter.Detach(); dw_filter = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_hth.Detach(); sle_hth = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        sle_3.Detach(); sle_3 = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_jyd.Detach(); ddlb_jyd = null;
        cbx_sfssys.Detach(); cbx_sfssys = null;
        ddlb_qgld.Detach(); ddlb_qgld = null;
        sle_jyd.Detach(); sle_jyd = null;
        ddlb_sc.Detach(); ddlb_sc = null;
        dw_print.Detach(); dw_print = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_jyj.Detach(); ds_jyj = null;
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
    var iw_Sj_Select = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Thwljh.ashx");   

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
        var jydzt = ddlb_jyd.GetText();
        var qgld = ddlb_qgld.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var sc = ddlb_sc.GetText();

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

        var sfssys = "N"
        if (cbx_sfssys.GetChecked() == true) {
            sfssys = "Y";
        }

        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jydzt, sfssys, qgld, userid,jdrjc, sc);

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
        var node = "0005A2";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        var sqdbh = null;
        var ywbh = null;
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
        ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
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
        var node = "000110";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        var operation
        operation = "show";




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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString(), true);



    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");
        if (Row > 0)
            if (dwoName == "ywbh") {
                self.OpenWindow();
            }
        if (dwoName == "jzxxx_jyd_sj") {
            if (readonly == "no") {
                if (iw_Sj_Select == null)
                    iw_Sj_Select = new W_Sj_Select();
                sjlx = "hy";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Sj_Select.SetDataWindow(dw_list);
                iw_Sj_Select.SetRow(Row);
                iw_Sj_Select.SetData("hy_jyd_sj");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx+ "&Cdbm= '" + "'", iw_Sj_Select);
                dw_list.SetFocus();
            }
        }
    }
    //#endregion


        //#region dw_List  ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "jzxxx_jyd_sjlxfs") {

            var jzxxx_zjfscwld_bz = dw_list.GetItemString(row, "jzxxx_zjfscwld_bz")
            if (jzxxx_zjfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_zjfscwld_sjlxfs", data);
            }
            var jzxxx_sc_bz = dw_list.GetItemString(row, "jzxxx_sc_bz")
            if (jzxxx_sc_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_sc_sjlxfs", data);
            }
            var jzxxx_jschfscwld_bz = dw_list.GetItemString(row, "jzxxx_jschfscwld_bz")
            if (jzxxx_jschfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_jschfscwld_sjlxfs", data);
            }
            var jzxxx_dc_bz = dw_list.GetItemString(row, "jzxxx_dc_bz")
            if (jzxxx_dc_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_dc_sjlxfs", data);
            }

        }

        if (dwoName == "jzxxx_hgcyd_cp") {


            var jzxxx_zjfscwld_bz = dw_list.GetItemString(row, "jzxxx_zjfscwld_bz")
            if (jzxxx_zjfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_zjfscwld_cp", data);
            }
            var jzxxx_sc_bz = dw_list.GetItemString(row, "jzxxx_sc_bz")
            if (jzxxx_sc_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_sc_cp", data);
            }
            var jzxxx_jschfscwld_bz = dw_list.GetItemString(row, "jzxxx_jschfscwld_bz")
            if (jzxxx_jschfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_jschfscwld_cp", data);
            }
            var jzxxx_dc_bz = dw_list.GetItemString(row, "jzxxx_dc_bz")
            if (jzxxx_dc_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_dc_cp", data);
            }

        }

        if (dwoName == "jzxxx_jycydzt") {
            if (data == "扣柜") {
                var date = new Date();
                dw_list.SetItem(row, "jzxxx_kgsj", date.getVarDate());
            } else {
                var date = new Date('1900/1/1');
                var jzxxx_kgsj_jsl = dw_list.GetItemString(row, "jzxxx_kgsj_jsl");               
                if (jzxxx_kgsj_jsl != null && jzxxx_kgsj_jsl != "" && jzxxx_kgsj_jsl != "1900/1/1" && jzxxx_kgsj_jsl != "1900/01/01" ) {
                    dw_list.SetItem(row, "jzxxx_kgsj", date.getVarDate());
                    dw_list.SetItem(row, "jzxxx_ssys", "N");
                    dw_list.SetItem(row, "jzxxx_kghcl", '');
                    dw_list.SetItem(row, "jzxxx_kghclsj", date.getVarDate());
                }
            }

        }

        if (dwoName == "jzxxx_kghcl") {

            if (data != null) {
                var date = new Date();
                dw_list.SetItem(row, "jzxxx_kghclsj", date.getVarDate());
            } else {
                var date = new Date('1900/01/01');
                dw_list.SetItem(row, "jzxxx_kghclsj", date.getVarDate());
            }

        }

        if (dwoname == "jzxxx_djydsj") {
            dw_list.AcceptText();
            var date = new Date();
            var date_null = new Date("1900/1/1");
            if (data == "" || data == "1900/01/01" || data == null) {
                dw_list.SetItem(row, "djydsj_lrsj", date_null.getVarDate())
            } else {
                dw_list.SetItem(row, "djydsj_lrsj", date.getVarDate())
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
    
    //#region 过滤
    this.slebjh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(bjh) like Upper('%" + text + "%'))");
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

    //#region 过滤市场
    this.ddlb_sc_SelectionChanged = function () {

        var sc = ddlb_sc.GetText();
        var bjsc = "N";
        var jsc = "Y";

        if (sc == "全部") {
            dw_list.SetFilter("");
        }
        else {
            if (sc == "非市场") {
                dw_list.SetFilter("( Upper(jzxxx_sc_bz) like Upper('%" + bjsc + "%'))");
            }
            else {
                dw_list.SetFilter("( Upper(yw_hddz_jzxxx_sc_jc) like Upper('%" + sc + "%')) and ( Upper(jzxxx_sc_bz) like Upper('%" + jsc + "%'))");
            }
        };
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


    //#region 过滤集装箱号
    this.slejzxh_EditChanged = function (text) {
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

    //#region 过滤通关单号
    this.sletgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(tgdh) like Upper('%" + text + "%'))");
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

    //#region 过滤检疫点
    this.slejyd_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jzxxx_jyd_jc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤
    this.ddlb_jyj_SelectionChanged = function () {
        var jyjjc = ddlb_jyj.GetText();
        dw_list.SetRedraw(false);
        if (jyjjc == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jyjjc) like Upper('%" + jyjjc + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);

    }
    //#endregion

    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Hy_JydList", "dw_hy_jyd_list");
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
        webReq.Invoke("JydListSave", "dw_list=" + dw_d_data);
        
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


    //#region 打开 任务
    var iw_Hy_Wlgz = null;
    this.OpenWlgz_J = function (Row) {
        if (iw_Hy_Wlgz == null)
            iw_Hy_Wlgz = new W_Hy_Wlgz();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hddz_cxh = dw_list.GetItemNumber(row, "cxh");
        var syrw = dw_list.GetItemNumber(row, "syrw");
//        if (syrw > 0) {
//            requestor.MessageBox("提示", "前一节点尚未下任务，不能做进检疫点任务");
//            return
//        }
        var rwbh = QsWebSoft.PubMethod.ReadRwbh(ywbh, hddz_cxh.toString(), "jyd_rwbh").value;// dw_list.GetItemString(row, "jzxxx_jyd_rwbh");
        iw_Hy_Wlgz.SetDataWindow(dw_list);
        iw_Hy_Wlgz.SetData(ywbh);
        iw_Hy_Wlgz.SetRow(hddz_cxh);
        iw_Hy_Wlgz.SetRwlx("检疫点任务");
        var rwmc = "jyd";
        
        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Hy_Wlgz&Rwbh=" + rwbh + '&Ywbh=' + ywbh + '&Hddz_cxh=' + hddz_cxh.toString() + '&Rwmc=' + rwmc, iw_Hy_Wlgz);

    }
    //#endregion

    this.OpenWlgz_C = function (Row) {
        if (iw_Hy_Wlgz == null)
            iw_Hy_Wlgz = new W_Hy_Wlgz();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hddz_cxh = dw_list.GetItemNumber(row, "cxh");
        var jyd_rwbh = QsWebSoft.PubMethod.ReadRwbh(ywbh, hddz_cxh.toString(), "jyd_rwbh").value;
        if (jyd_rwbh == null || jyd_rwbh == null) {
            requestor.MessageBox("提示", "入检疫点的任务尚未制作，不能做出检疫点任务");
            return
        }
        var syrw = dw_list.GetItemNumber(row, "syrw");
        if (syrw > 0) {
            requestor.MessageBox("提示", "前一节点尚未下任务，不能做出检疫点任务");
            return
        }
        var rwbh = QsWebSoft.PubMethod.ReadRwbh(ywbh, hddz_cxh.toString(), "jyd_c_rwbh").value; // dw_list.GetItemString(row, "jzxxx_jyd_c_rwbh");
        iw_Hy_Wlgz.SetDataWindow(dw_list);
        iw_Hy_Wlgz.SetData(ywbh);
        iw_Hy_Wlgz.SetRow(hddz_cxh);
        iw_Hy_Wlgz.SetRwlx("检疫点任务");
        var rwmc = "jyd";
        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Hy_Wlgz&Rwbh=" + rwbh + '&Ywbh=' + ywbh + '&Hddz_cxh=' + hddz_cxh.toString() + '&Rwmc=' + rwmc, iw_Hy_Wlgz);

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
