///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hdfy_hshgm_ysfyqrList() {

    var self = this;
    var requestor = new PBWindow();
    var dw_filter = new DataWindow(requestor);
    var dw_list = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_sqdbh = new SingleLineEdit(requestor);
    var sle_hth = new SingleLineEdit(requestor);
    var sle_ywbh = new SingleLineEdit(requestor);
    var sle_jzxh = new SingleLineEdit(requestor);
    var sle_fydl = new SingleLineEdit(requestor);
    var sle_fymc = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ddlb_jsdwqr = new DropDownListBox(requestor);
    var ddlb_jyd = new DropDownListBox(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);
    var ds_jyd = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_sqdbh == null) sle_sqdbh = new SingleLineEdit(requestor);
        sle_sqdbh.Attach(win.Control("sle_sqdbh"));
        if (sle_hth == null) sle_hth = new SingleLineEdit(requestor);
        sle_hth.Attach(win.Control("sle_hth"));
        if (sle_ywbh == null) sle_ywbh = new SingleLineEdit(requestor);
        sle_ywbh.Attach(win.Control("sle_ywbh"));
        if (sle_jzxh == null) sle_jzxh = new SingleLineEdit(requestor);
        sle_jzxh.Attach(win.Control("sle_jzxh"));
        if (sle_fydl == null) sle_fydl = new SingleLineEdit(requestor);
        sle_fydl.Attach(win.Control("sle_fydl"));
        if (sle_fymc == null) sle_fymc = new SingleLineEdit(requestor);
        sle_fymc.Attach(win.Control("sle_fymc"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ddlb_jsdwqr == null) ddlb_jsdwqr = new DropDownListBox(requestor);
        ddlb_jsdwqr.Attach(win.Control("ddlb_jsdwqr"));
        if (ddlb_jyd == null) ddlb_jyd = new DropDownListBox(requestor);
        ddlb_jyd.Attach(win.Control("ddlb_jyd"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_role == null) ds_role = new DataStore(requestor);
        ds_role.Attach(win.Control("ds_role"));
        if (ds_jyd == null) ds_jyd = new DataStore(requestor);
        ds_jyd.Attach(win.Control("ds_jyd"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_list", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.dw_list_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_list_ItemChanged);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.btn_qx_Clicked) == "function")
            win.AttachEvent("btn_qx", "Clicked", self.btn_qx_Clicked);

        if (typeof (self.slesqdbh_EditChanged) == "function")
            win.AttachEvent("sle_sqdbh", "EditChanged", self.slesqdbh_EditChanged);

        if (typeof (self.slehth_EditChanged) == "function")
            win.AttachEvent("sle_hth", "EditChanged", self.slehth_EditChanged);

        if (typeof (self.sleywbh_EditChanged) == "function")
            win.AttachEvent("sle_ywbh", "EditChanged", self.sleywbh_EditChanged);

        if (typeof (self.slejzxh_EditChanged) == "function")
            win.AttachEvent("sle_jzxh", "EditChanged", self.slejzxh_EditChanged);

        if (typeof (self.slefydl_EditChanged) == "function")
            win.AttachEvent("sle_fydl", "EditChanged", self.slefydl_EditChanged);

        if (typeof (self.slefymc_EditChanged) == "function")
            win.AttachEvent("sle_fymc", "EditChanged", self.slefymc_EditChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jsdwqr", "SelectionChanged", self.Retrieve);

        if (typeof (self.ddlb_jyd_SelectionChanged) == "function")
            win.AttachEvent("ddlb_jyd", "SelectionChanged", self.ddlb_jyd_SelectionChanged);

        if (typeof (self.btn_1_Onclient_Clicked) == "function")
            win.AttachEvent("btn_1", "Clicked", self.btn_1_Onclient_Clicked);

        if (typeof (self.btn_2_Onclient_Clicked) == "function")
            win.AttachEvent("btn_2", "Clicked", self.btn_2_Onclient_Clicked);

        if (typeof (self.Filter) == "function")
            win.AttachEvent("单列过滤ToolStripMenuItem", "Clicked", self.Filter);

        if (typeof (self.Filter_Cancle) == "function")
            win.AttachEvent("取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

        if (typeof (self.CopySelect) == "function")
            win.AttachEvent("选择复制ToolStripMenuItem", "Clicked", self.CopySelect);

        if (typeof (self.CopyL) == "function")
            win.AttachEvent("整列复制ToolStripMenuItem", "Clicked", self.CopyL);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_filter.Detach(); dw_filter = null;
        dw_list.Detach(); dw_list = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_sqdbh.Detach(); sle_sqdbh = null;
        sle_hth.Detach(); sle_hth = null;
        sle_ywbh.Detach(); sle_ywbh = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        sle_fydl.Detach(); sle_fydl = null;
        sle_fymc.Detach(); sle_fymc = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_jsdwqr.Detach(); ddlb_jsdwqr = null;
        ddlb_jyd.Detach(); ddlb_jyd = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_jyd.Detach(); ds_jyd = null;
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
    var iw_Wldw_Zfdx_Select = null;
    var iw_Wldw_Jsbm_Select = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hdfyysfyqr.ashx");   

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
      
        self.Retrieve();
    }
    //#endregion

    //#region 查询
    this.Retrieve = function () {
        if (self.CloseQuery() == 1)
            return;

        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var jsdwqr = ddlb_jsdwqr.GetText();



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


        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jsdwqr);
      

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
        if (Row > 0)
            if (dwoName == "jsdwbm") {
                if (iw_Wldw_Zfdx_Select == null)
                    iw_Wldw_Zfdx_Select = new W_Wldw_Zfdx_Select();
                var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var jsdwbm = dw_list.GetItemString(dw_list.GetRow(), "jsdwbm");
                iw_Wldw_Zfdx_Select.SetDataWindow(dw_list);
                iw_Wldw_Zfdx_Select.SetData("jsdwqr_zfdx");
                iw_Wldw_Zfdx_Select.SetRow(dw_list.GetRow());
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Zfdx_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + jsdwbm + "&ywbh=" + ywbh, iw_Wldw_Zfdx_Select);
                dw_list.SetFocus();
            }
            if (dwoName == "jsbm") {
                if (iw_Wldw_Jsbm_Select == null)
                    iw_Wldw_Jsbm_Select = new W_Wldw_Jsbm_Select();
                var yw_khbm = dw_list.GetItemString(dw_list.GetRow(), "jsdwbm");
                iw_Wldw_Jsbm_Select.SetDataWindow(dw_list);
                iw_Wldw_Jsbm_Select.SetData("jsdwqr_zfdx");
                iw_Wldw_Jsbm_Select.SetRow(dw_list.GetRow());
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Jsbm_Select&yw_khbm=" + yw_khbm , iw_Wldw_Jsbm_Select);
                dw_list.SetFocus();
      
        }

    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
//        dwoname = dwoName;
//        if (Row > 0)
//            if (dwoName == "jsdwqr") {
//                
//            }
    }
    //#endregion
    //是否对账全选按钮
    this.btn_1_Onclient_Clicked = function (data) {

        var ywy = requestor.GetParm("userid");
        var date = new Date();
        var num = 0;
        for (var row = 0; row <= dw_list.RowCount(); row++) {
            var sfdz_N = dw_list.GetItemString(row, "yw_hddz_fksqd_jzxxx_sfdz");
            if (sfdz_N == 'Y') {
                num = num + 1;
            }
        }
        if (num > 0) {
            if (confirm("选中的数据之前已经对账是否继续")) {
                
                    for (var row = 0; row <= dw_list.RowCount(); row++) {
                        dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_sfdz", 'Y');
                        dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_dzry", ywy);
                        dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_dzsj", date.getVarDate());
                    }                
            } else {                
                return;
            }
        }

    }
    this.btn_2_Onclient_Clicked = function () {
        var date = new Date("1900/1/1");
        if (confirm("选中的数据之前已经对账是否继续")) {       
            for (var row = 0; row <= dw_list.RowCount(); row++) {
                dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_sfdz", 'N');
                dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_dzry", null);
                dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_dzsj", date.getVarDate());
            }
        } else {
            return;
        }
                
    }
      //#region dw_master EditChanged
    this.dw_list_ItemChanged = function (row, dwoName, data) {
        if (row > 0) {
            if (dwoName == "ysqr") {
                var date = new Date();
                dw_list.SetItem(row, "qrrq", date.getVarDate())
                var skfs = dw_list.GetItemString(row, "skfs")
                var ysje = dw_list.GetItemNumber(row, "ysje")

                var je = dw_list.GetItemNumber(row, "je")
                var yscqfje = dw_list.GetItemNumber(row, "yscqfje")
                if (yscqfje == null) {
                    yscqfje = 0;
                }
                if (skfs == "1" && (ysje == 0 || ysje == null)) {
                    dw_list.SetItem(row, "ysje", je - yscqfje)
                }
            }

            if (dwoName == "skfs") {
                var ysje = dw_list.GetItemNumber(row, "ysje")
                var je = dw_list.GetItemNumber(row, "je")
                var yscqfje = dw_list.GetItemNumber(row, "yscqfje")
                if (yscqfje == null) {
                    yscqfje = 0;
                }
                if (data == "1" && (ysje == 0 || ysje == null)) {
                    dw_list.SetItem(row, "ysje", je - yscqfje)
                }
                if (data == "-1") {
                    dw_list.SetItem(row, "ysje", 0)
                }
            }
            if (dwoName == "yw_hddz_fksqd_jzxxx_sfqr") {
                var ywy = requestor.GetParm("userid");
                var date = new Date();
                dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_qrsj", date.getVarDate())
                dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_qrr", ywy);
            }
            if (dwoName == "yw_hddz_fksqd_jzxxx_sfdz") {
                var ywy = requestor.GetParm("userid");
                var date = new Date();
                dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_dzry", ywy);
                dw_list.SetItem(row, "yw_hddz_fksqd_jzxxx_dzsj", date.getVarDate());
            }
        }

    }

//     this.Download = function () {
//         QsWebSoft.PubMethod.DownLoad();
//    }
      
    //#region 打印
//    this.Print = function () {
//        var row = dw_list.GetRow();
//        if (row <= 0)
//            return;
//        dw_print.SetDataObject("dw_hddz_hdfyhycqf_print");
//        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "sqdbh"));
//        dw_print.PrintPreview();
//    }
    //#endregion
     //#region 全选
    this.btn_qx_Clicked = function (text) {
        var je = 0;
        var skfs = "";
        var date = new Date();
        var ysje
        for (var row = dw_list.RowCount(); row > 0; row--) {
            skfs = dw_list.GetItemString(row, "skfs")
            if (skfs == "1" || skfs == "-1") {
                dw_list.SetItem(row, "ysqr", "Y")
                je = dw_list.GetItemNumber(row, "je")
                ysje = dw_list.GetItemNumber(row, "ysje")
                var yscqfje = dw_list.GetItemNumber(row, "yscqfje")
                if (yscqfje == null) {
                    yscqfje = 0;
                }
                if (skfs == "1" && (ysje == 0 || ysje == null)) {
                    dw_list.SetItem(row, "ysje", je - yscqfje)
                }
                if (skfs == "-1") {
                    dw_list.SetItem(row, "ysje", 0)
                }
                dw_list.SetItem(row, "qrrq", date.getVarDate())
            }
        }
    }

    //#region 过滤申请单号
    this.slesqdbh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(sqdbh) like Upper('%" + text + "%'))");
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

    //#region 过滤业务编号
    this.sleywbh_EditChanged = function (text) {
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

    //#region 过滤费用大类
    this.slefydl_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(fydl) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤费用名称
    this.slefymc_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(fybm) like Upper('%" + text + "%')) or ( Upper(fymc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤申请单号
    this.ddlb_jyd_SelectionChanged = function () {
        var jyd = ddlb_jyd.GetText();
        dw_list.SetRedraw(false);

        if (jyd == "" || jyd =="全部")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jzxxx_jyd_jc) like Upper('%" + jyd + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion
  


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Yw_Zjgl.W_Hdfy_hshgm_ysfyqrList", "dw_hddz_ysfyqr_list");
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
        if (dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Hshgm_ListSave", "dw_list=" + dw_d_data);

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
