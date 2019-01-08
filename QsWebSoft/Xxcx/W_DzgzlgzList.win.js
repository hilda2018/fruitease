///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_DzgzlgzList() {

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl(requestor);
    var dw_list = new DataWindow(requestor);
    var dw_list_bj = new DataWindow(requestor);
    var dw_list_gj = new DataWindow(requestor);
    var dw_list_gjczry = new DataWindow(requestor);
    var dw_list_hydz = new DataWindow(requestor);
    var dw_filter = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var dw_print = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ContextMenuStrip2 = new ContextMenu(requestor);
    var ContextMenuStrip3 = new ContextMenu(requestor);
    var ContextMenuStrip4 = new ContextMenu(requestor);
    var ContextMenuStrip5 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (dw_list_bj == null) dw_list_bj = new DataWindow(requestor);
        dw_list_bj.Attach(win.Control("dw_list_bj"));
        if (dw_list_gj == null) dw_list_gj = new DataWindow(requestor);
        dw_list_gj.Attach(win.Control("dw_list_gj"));
        if (dw_list_gjczry == null) dw_list_gjczry = new DataWindow(requestor);
        dw_list_gjczry.Attach(win.Control("dw_list_gjczry"));
        if (dw_list_hydz == null) dw_list_hydz = new DataWindow(requestor);
        dw_list_hydz.Attach(win.Control("dw_list_hydz"));
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ContextMenuStrip2 == null) ContextMenuStrip2 = new ContextMenu(requestor);
        ContextMenuStrip2.Attach(win.Control("ContextMenuStrip2"));
        if (ContextMenuStrip3 == null) ContextMenuStrip3 = new ContextMenu(requestor);
        ContextMenuStrip3.Attach(win.Control("ContextMenuStrip3"));
        if (ContextMenuStrip4 == null) ContextMenuStrip4 = new ContextMenu(requestor);
        ContextMenuStrip4.Attach(win.Control("ContextMenuStrip4"));
        if (ContextMenuStrip5 == null) ContextMenuStrip5 = new ContextMenu(requestor);
        ContextMenuStrip5.Attach(win.Control("ContextMenuStrip5"));
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

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list_bj", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_list_bj", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list_bj", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list_bj", "RButtonDown", self.RbuttonDown);

        if (typeof (self.dw_List_hydz_Clicked) == "function")
            win.AttachEvent("dw_list_hydz", "Clicked", self.dw_List_hydz_Clicked);

        if (typeof (self.dw_List_hydz_DoubleClicked) == "function")
            win.AttachEvent("dw_list_hydz", "DoubleClicked", self.dw_List_hydz_DoubleClicked);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list_hydz", "RButtonDown", self.RbuttonDown);

        if (typeof (self.Help) == "function")
            win.AttachEvent("btn_Help", "Clicked", self.Help);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

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

        if (typeof (self.Filter_haiyun) == "function")
            win.AttachEvent("m_2", "Clicked", self.Filter_haiyun);

        if (typeof (self.Filter_Cancle_haiyun) == "function")
            win.AttachEvent("m_4", "Clicked", self.Filter_Cancle_haiyun);

        if (typeof (self.Recover_haiyun) == "function")
            win.AttachEvent("m_7", "Clicked", self.Recover_haiyun);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_8", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_haiyun) == "function")
            win.AttachEvent("m_10", "Clicked", self.CopyCol_haiyun);

        if (typeof (self.CopySelect_haiyun) == "function")
            win.AttachEvent("m_11", "Clicked", self.CopySelect_haiyun);

        if (typeof (self.CopyL_haiyun) == "function")
            win.AttachEvent("m_12", "Clicked", self.CopyL_haiyun);

        if (typeof (self.Filter_bj) == "function")
            win.AttachEvent("m_13", "Clicked", self.Filter_bj);

        if (typeof (self.Filter_Cancle_bj) == "function")
            win.AttachEvent("m_15", "Clicked", self.Filter_Cancle_bj);

        if (typeof (self.Recover_bj) == "function")
            win.AttachEvent("m_18", "Clicked", self.Recover_bj);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_19", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_bj) == "function")
            win.AttachEvent("m_21", "Clicked", self.CopyCol_bj);

        if (typeof (self.CopySelect_bj) == "function")
            win.AttachEvent("m_22", "Clicked", self.CopySelect_bj);

        if (typeof (self.CopyL_bj) == "function")
            win.AttachEvent("m_23", "Clicked", self.CopyL_bj);

        if (typeof (self.Filter_gj) == "function")
            win.AttachEvent("m_24", "Clicked", self.Filter_gj);

        if (typeof (self.Filter_Cancle_gj) == "function")
            win.AttachEvent("m_26", "Clicked", self.Filter_Cancle_gj);

        if (typeof (self.Recover_gj) == "function")
            win.AttachEvent("m_29", "Clicked", self.Recover_gj);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_30", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_gj) == "function")
            win.AttachEvent("m_32", "Clicked", self.CopyCol_gj);

        if (typeof (self.CopySelect_gj) == "function")
            win.AttachEvent("m_33", "Clicked", self.CopySelect_gj);

        if (typeof (self.CopyL_gj) == "function")
            win.AttachEvent("m_34", "Clicked", self.CopyL_gj);

        if (typeof (self.Filter_gj) == "function")
            win.AttachEvent("m_35", "Clicked", self.Filter_gj);

        if (typeof (self.Filter_Cancle_gj) == "function")
            win.AttachEvent("m_37", "Clicked", self.Filter_Cancle_gj);

        if (typeof (self.Recover_gj) == "function")
            win.AttachEvent("m_40", "Clicked", self.Recover_gj);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("m_41", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol_gj) == "function")
            win.AttachEvent("m_43", "Clicked", self.CopyCol_gj);

        if (typeof (self.CopySelect_gj) == "function")
            win.AttachEvent("m_44", "Clicked", self.CopySelect_gj);

        if (typeof (self.CopyL_gj) == "function")
            win.AttachEvent("m_45", "Clicked", self.CopyL_gj);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tab_1.Detach(); tab_1 = null;
        dw_list.Detach(); dw_list = null;
        dw_list_bj.Detach(); dw_list_bj = null;
        dw_list_gj.Detach(); dw_list_gj = null;
        dw_list_gjczry.Detach(); dw_list_gjczry = null;
        dw_list_hydz.Detach(); dw_list_hydz = null;
        dw_filter.Detach(); dw_filter = null;
        tb_1.Detach(); tb_1 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        dw_print.Detach(); dw_print = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        ContextMenuStrip3.Detach(); ContextMenuStrip3 = null;
        ContextMenuStrip4.Detach(); ContextMenuStrip4 = null;
        ContextMenuStrip5.Detach(); ContextMenuStrip5 = null;
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
    var iw_GnkhlrtjList_Mx = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    var iw_DzgzlgzList_Mx = null;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Gnkhtj.ashx");   

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


        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), userid, '空运');
         dw_list_bj.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
        dw_list_gj.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
        dw_list_gjczry.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
        dw_list_hydz.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), userid, '海运');
       
        //        self.sle_EditChanged();
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


    

   

  
   
    

    //#region 过滤客户
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        var ycyy = sle_ycyy.GetText();
        var lry = sle_lry.GetText();
        var sdy = sle_sdry.GetText();
        var jcgzry = sle_jcgzry.GetText();
        var ls_filter = ""

        if (ycyy == null || ycyy == "") {
            //
        } else {
            ls_filter = "( ycyybm  like '%" + ycyy + "%')"
        };

        if (lry == null || lry == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(zbrmc like '%" + lry + "%') "
            } else {
                ls_filter = ls_filter + " and ( zbrmc like '%" + lry + "%')"
            };
        };

        if (sdy == null || sdy == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(sdrymc like '%" + sdy + "%') "
            } else {
                ls_filter = ls_filter + " and ( sdrymc like '%" + sdy + "%')"
            };
        };


        if (jcgzry == null || jcgzry == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(jcgzrymc like '%" + jcgzry + "%') "
            } else {
                ls_filter = ls_filter + " and ( jcgzrymc like '%" + jcgzry + "%')"
            };
        };


        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

  


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_DzgzlgzList", "dw_dzgzlgz_list");
        self.Retrieve();
    }
    //#endregion

    

    //#region 恢复默认列
    this.Recover_bj = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_DzgzlgzList", "dw_dzgzlgz_list_bj");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_gj = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_DzgzlgzList", "dw_dzgzlgz_list_gj");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_gjczry = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_DzgzlgzList", "dw_dzgzlgz_list_gjczry");
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

     

    //#region 复制字段内容
    this.CopyCol_bj = function () {
        var copytext = "";
        var row = dw_list_bj.GetRow();
        if (row <= 0)
            return;
        colType = dw_list_bj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_list_bj.GetItemString(dw_list_bj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_list_bj.GetItemDate(dw_list_bj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_list_bj.GetItemNumber(dw_list_bj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_gj = function () {
        var copytext = "";
        var row = dw_list_gj.GetRow();
        if (row <= 0)
            return;
        colType = dw_list_gj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_list_gj.GetItemString(dw_list_gj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_list_gj.GetItemDate(dw_list_gj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_list_gj.GetItemNumber(dw_list_gj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_gjczry = function () {
        var copytext = "";
        var row = dw_list_gjczry.GetRow();
        if (row <= 0)
            return;
        colType = dw_list_gjczry.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_list_gjczry.GetItemString(dw_list_gjczry.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_list_gjczry.GetItemDate(dw_list_gjczry.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_list_gjczry.GetItemNumber(dw_list_gjczry.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {

        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
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

        if (Row > 0)
            if (dwoName == "ldccs" || dwoName == "sdccs") {
                //                if (readonly == "no") {
                if (iw_DzgzlgzList_Mx == null)
                    iw_DzgzlgzList_Mx = new W_DzgzlgzList_Mx();
                var zbr = dw_list.GetItemString(Row, "ry");
                if (dwoName == "ldccs") {
                    var ycyybm = "010402";
                } else if (dwoName == "sdccs") {
                    var ycyybm = "010401";
                }
                requestor.MessageBox("", zbr);
                iw_DzgzlgzList_Mx.SetBeginDate(beginDate.getVarDate());
                iw_DzgzlgzList_Mx.SetEndDate(endDate.getVarDate());
                iw_DzgzlgzList_Mx.SetRy(zbr);
                iw_DzgzlgzList_Mx.SetYcyybm(ycyybm);

                requestor.Open("/LoadWindow.ashx?WinName=Xxcx.W_DzgzlgzList_Mx&BeginDate=" + beginDate.getVarDate() + "&EndDate=" + endDate.getVarDate() + "&Ry=" + zbr + "&YcyyBm=" + ycyybm, iw_DzgzlgzList_Mx);
                dw_list.SetFocus();
            }
    }
        //#endregion


        //#region 双击
        this.dw_List_hydz_DoubleClicked = function (xPos, yPos, Row, dwoName) {

            var beginDate = new Date(dp_begin.GetValue());
            var endDate = new Date(dp_end.GetValue());
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

            if (Row > 0)
                if (dwoName == "ldccs" || dwoName == "sdccs") {
                    //                if (readonly == "no") {
                    if (iw_DzgzlgzList_Mx == null)
                        iw_DzgzlgzList_Mx = new W_DzgzlgzList_Mx();
                    var zbr = dw_list_hydz.GetItemString(Row, "rybm");
                    if (dwoName == "ldccs") {
                        var ycyybm = "010402";
                    } else if (dwoName == "sdccs") {
                        var ycyybm = "010401";
                    }

                    iw_DzgzlgzList_Mx.SetBeginDate(beginDate.getVarDate());
                    iw_DzgzlgzList_Mx.SetEndDate(endDate.getVarDate());
                    iw_DzgzlgzList_Mx.SetRy(zbr);
                    iw_DzgzlgzList_Mx.SetYcyybm(ycyybm);

                    requestor.Open("/LoadWindow.ashx?WinName=Xxcx.W_DzgzlgzList_Mx&BeginDate=" + beginDate.getVarDate() + "&EndDate=" + endDate.getVarDate() + "&Ry=" + zbr + "&YcyyBm=" + ycyybm, iw_DzgzlgzList_Mx);
                    dw_list_hydz.SetFocus();
                }
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

    //#region 单击明细单编号
    this.dw_List_hydz_Clicked = function (xPos, yPos, Row, dwoName, Data) {
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

    
    //#region 选择复制
    this.CopySelect_bj = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list_bj.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list_bj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list_bj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list_bj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list_bj.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_gj = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list_gj.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list_gj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list_gj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list_gj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list_gj.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_gjczry = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list_gjczry.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list_gjczry.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list_gjczry.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list_gjczry.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list_gjczry.GetItemNumber(row, arr[row1]);
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

    

    //#region 整列复制
    this.CopyL_bj = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list_bj.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_list_bj.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list_bj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list_bj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list_bj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list_bj.GetItemNumber(row, arr[row1]);
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
    this.CopyL_gj = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list_gj.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_list_gj.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list_gj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list_gj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list_gj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list_gj.GetItemNumber(row, arr[row1]);
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
    this.CopyL_gjczry = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list_gjczry.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_list_gjczry.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list_gjczry.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list_gjczry.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list_gjczry.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list_gjczry.GetItemNumber(row, arr[row1]);
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

    

    //#region 单列过滤
    this.Filter_bj = function () {
        dw_list_bj.AcceptText();
        var row = dw_list_bj.GetRow();
        if (row <= 0)
            return;

        colType = dw_list_bj.Describe(cloname + ".colType");

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
        //        var rowcount = dw_list_bj.RowCount();
        //        if (rowcount > 0) {
        //            filter = dw_list_bj.GetItemString(1, "filter");
        //        };
        iw_Filter.SetDataWindow(dw_list_bj);
        //        iw_Filter.SetData(filter);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_list_bj.SetFocus();
        dw_list_bj.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_gj = function () {
        dw_list_gj.AcceptText();
        var row = dw_list_gj.GetRow();
        if (row <= 0)
            return;

        colType = dw_list_gj.Describe(cloname + ".colType");

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
        //        var rowcount = dw_list_gj.RowCount();
        //        if (rowcount > 0) {
        //            filter = dw_list_gj.GetItemString(1, "filter");
        //        };
        iw_Filter.SetDataWindow(dw_list_gj);
        //        iw_Filter.SetData(filter);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_list_gj.SetFocus();
        dw_list_gj.ScrollToRow(row)


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

    

    //#region 过滤取消
    this.Filter_Cancle_bj = function () {
        dw_list_bj.SetFilter("");
        dw_list_bj.Filter();
        dw_list_bj.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_gj = function () {
        dw_list_gj.SetFilter("");
        dw_list_gj.Filter();
        dw_list_gj.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
}
