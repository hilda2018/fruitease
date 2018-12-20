///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_JhzxgzList() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var ddlb_sfjs = new DropDownListBox(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_kh = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_1 = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (ddlb_sfjs == null) ddlb_sfjs = new DropDownListBox(requestor);
        ddlb_sfjs.Attach(win.Control("ddlb_sfjs"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (sle_kh == null) sle_kh = new SingleLineEdit(requestor);
        sle_kh.Attach(win.Control("sle_kh"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
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

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.dw_list_EntertoTab) == "function")
            win.AttachEvent("dw_list", "KeyDown", self.dw_list_EntertoTab);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.dw_List_RowFocusChanged) == "function")
            win.AttachEvent("dw_list", "RowFocusChanged", self.dw_List_RowFocusChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_sfjs", "Modified", self.Retrieve);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.slezxr_EditChanged) == "function")
            win.AttachEvent("sle_kh", "EditChanged", self.slezxr_EditChanged);

        if (typeof (self.Help) == "function")
            win.AttachEvent("btn_Help", "Clicked", self.Help);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_1", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_2", "Clicked", self.DeleteRow);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        ddlb_sfjs.Detach(); ddlb_sfjs = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        tb_1.Detach(); tb_1 = null;
        dw_print.Detach(); dw_print = null;
        dw_1.Detach(); dw_1 = null;
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

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Jhzxgz.ashx");   

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
        var sfjs = ddlb_sfjs.GetText();
         
       

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
        dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), sfjs);
        dw_1.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), sfjs);
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
        dw_1.AcceptText();
        if ((dw_list.ModifiedCount() + dw_list.DeletedCount() + dw_1.ModifiedCount() + dw_1.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2) {
                return 1;
            }
            else {
                this.Save();
                return 0;
            }
        }

    }
    //#endregion


     //#region 添加明细
    this.AddRow = function () {
        dw_list.AcceptText()
        var row = dw_list.InsertRow(0);
        var bh_max = dw_list.GetItemString(row, "bh_max")
        var userid = requestor.GetParm("userid");
        var bm = requestor.GetParm("bm");
        dw_list.SetItem(row, "bh", bh_max);
        dw_list.SetItem(row, "zbr", userid);
        dw_list.SetItem(row, "bm", bm);
        dw_list.ScrollToRow(row);
        dw_list.SetFocus();

    }

    //#endregion

     //#region 删除
    this.DeleteRow = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var bh = dw_list.GetItemString(row, "bh");
        var zbr = dw_list.GetItemString(row, "zbr");
        var userid = requestor.GetParm("userid");
        if (zbr != userid) {
            requestor.MessageBox("提示", "编号为<" + bh + ">的计划执行跟踪不是您输入的数据，不能删除！")
            return 
        }
        if (requestor.MessageBox("提示", "删除编号为<" + bh + ">的计划执行跟踪,是否确定?", ICON.Question, BUTTON.YesNo) == 2) {
            return;
        }

        for (row1 = dw_1.RowCount(); row1 > 0; row1--) {
            dw_1.DeleteRow(row1)
        };
        dw_list.DeleteRow(row);

    }
     

    //#region 行变化
    this.dw_List_RowFocusChanged = function (CurrentRow, dwoName) {
        if (CurrentRow > 0) {

            var bh = dw_list.GetItemString(CurrentRow, "bh")
            dw_1.SetFilter("bh = '" + bh + "'")
            dw_1.Filter()

            var zbr = dw_list.GetItemString(CurrentRow, "zbr");
            var userid = requestor.GetParm("userid");
            if (zbr = userid) {
                dw_1.Modify("DataWindow.Readonly=no");
            }
            else {
      
                dw_1.Modify("DataWindow.Readonly=yes");
            }

        }
    }
  //#endregion


    //#region 双击

    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
      
    }
    //#endregion

    //#region 修改数据窗口内容dw_List_ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "sfjs") {
            var bh = dw_list.GetItemString(row, "bh")
            var sfjs = "N";
            if (data == "" || data == null) {
                sfjs = "N";
            } else {
                sfjs = data;
            };
            QsWebSoft.PubMethod.UpdateJhzxgz_Sfjs(bh, sfjs);
            
        } else
            if (dwoName == "yjwcsj" || dwoName == "jg") {
                //        
                //            var status = dw_list.GetItemStatus(row, 0, DWBUFFER.Primary);
                //            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                dw_list.AcceptText()
                var li_xgcxh = dw_list.GetItemNumber(row, "xgcxh")
                var bh = dw_list.GetItemString(row, "bh")
                var li_insertrow = 0
                if (li_xgcxh == 0) {
                    li_insertrow = dw_1.InsertRow(0)
                    dw_1.SetItem(li_insertrow, "bh", bh)
                    dw_1.SetItem(li_insertrow, "cxh", li_insertrow)
                    dw_list.SetItem(row, "xgcxh", li_insertrow)
                } else {
                    li_insertrow = li_xgcxh
                }
                var yjwcsj = dw_list.GetItemDate(row, "yjwcsj");
                var jg = dw_list.GetItemString(row, "jg");
                dw_1.SetItem(li_insertrow, "xgsj", yjwcsj)
                dw_1.SetItem(li_insertrow, "jg", jg)

            }
        //            }
    }
 
    //#endregion

           
    //#region 打印
    this.Print = function () {
//        var row = dw_list.GetRow();
//        if (row <= 0)
//            return;
//        dw_print.SetDataObject("dw_hddz_print");
//        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
//        dw_print.PrintPreview();
    }
    //#endregion
  
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(zxnr) like '%" + text + "%')  or ( Lower(zxnr) like '%" + text + "%')");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤客户
    this.slezxr_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(zxr) like '%" + text + "%')  or ( Lower(zxr) like '%" + text + "%')");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

   
    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Nbgl.W_JhzxgzList", "dw_jhzxgz_list");
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

        //        var yjwcsj_jsl = dw_list.GetItemString(1, "yjwcsj_jsl");
        //        if (yjwcsj_jsl == "Y") {
        //            requestor.MessageBox("提示", "预计完成时间必须输入");
        //            return
        //        }

        dw_1.SetFilter("")
        dw_1.Filter()

        if (dw_list.AcceptText() != 1)
            return;

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount() + dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }



        var dw_d_data = dw_list.GetChanges();
        if (dw_d_data == "")
            return;

        var dw_1_data = dw_1.GetChanges();
        if (dw_1_data == null) {
            dw_1_data = ""
        }
         

        //执行保存的WebService


        //        webReq.SetFunctionID(requestor.GetFunctionID());
        //        webReq.Invoke("Save1", "dw_master=" + dw_1_data);


        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_d_data + "&dw_1=" + dw_1_data);
        //        webReq.Invoke("Save", "dw_master=" + dw_d_data);
        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号    

            dw_list.ResetUpdate();
            dw_1.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }

        var row = dw_list.GetRow()

        if (row > 0) {
            var bh = dw_list.GetItemString(row, "bh")

            dw_1.SetFilter("bh = '" + bh + "'")
            dw_1.Filter()

            var zbr = dw_list.GetItemString(row, "zbr");
            var userid = requestor.GetParm("userid");
            if (zbr = userid) {
                dw_1.Modify("DataWindow.Readonly=no");
            }
            else {

                dw_1.Modify("DataWindow.Readonly=yes");
            }
        }

    }
    //#endregion  



   
    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\计划执行跟踪.txt')
    }
    //#endregion

     
}
