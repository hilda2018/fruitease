///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_XtXq_TaskList() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var ddlb_clzt = new DropDownListBox(requestor);
    var ddlb_jjzt = new DropDownListBox(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dw_print = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_role = new DataStore(requestor);
    var ds_1 = new DataStore(requestor);

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
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (ddlb_clzt == null) ddlb_clzt = new DropDownListBox(requestor);
        ddlb_clzt.Attach(win.Control("ddlb_clzt"));
        if (ddlb_jjzt == null) ddlb_jjzt = new DropDownListBox(requestor);
        ddlb_jjzt.Attach(win.Control("ddlb_jjzt"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_role == null) ds_role = new DataStore(requestor);
        ds_role.Attach(win.Control("ds_role"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_list", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.sle_SelectionChanged) == "function")
            win.AttachEvent("ddlb_clzt", "SelectionChanged", self.sle_SelectionChanged);

        if (typeof (self.sle_SelectionChanged) == "function")
            win.AttachEvent("ddlb_jjzt", "SelectionChanged", self.sle_SelectionChanged);

        if (typeof (self.New) == "function")
            win.AttachEvent("btn_new", "Clicked", self.New);

        if (typeof (self.Delete) == "function")
            win.AttachEvent("btn_delete", "Clicked", self.Delete);

        if (typeof (self.OpenWindow) == "function")
            win.AttachEvent("btn_open", "Clicked", self.OpenWindow);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.Tj) == "function")
            win.AttachEvent("btn_tj", "Clicked", self.Tj);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.kfz) == "function")
            win.AttachEvent("btn_zf", "Clicked", self.kfz);

        if (typeof (self.tjryqr) == "function")
            win.AttachEvent("btn_tjryqr", "Clicked", self.tjryqr);

        if (typeof (self.lrryqr) == "function")
            win.AttachEvent("btn_lrryqr", "Clicked", self.lrryqr);

        if (typeof (self.kfz) == "function")
            win.AttachEvent("btn_kfz", "Clicked", self.kfz);

        if (typeof (self.kfz) == "function")
            win.AttachEvent("btn_kfwc", "Clicked", self.kfz);

        if (typeof (self.kfz) == "function")
            win.AttachEvent("btn_bh", "Clicked", self.kfz);

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
        sle_1.Detach(); sle_1 = null;
        ddlb_clzt.Detach(); ddlb_clzt = null;
        ddlb_jjzt.Detach(); ddlb_jjzt = null;
        tb_1.Detach(); tb_1 = null;
        dw_print.Detach(); dw_print = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_role.Detach(); ds_role = null;
        ds_1.Detach(); ds_1 = null;
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
    var iw_Fj_Edit = null;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Tszx.ashx");

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
        //        var Dlwtf = requestor.GetParm("Dlwtf");
        var ckqb = requestor.GetParm("ckqb");

        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), userid,ckqb);

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
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000807";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var zxbh = dw_list.GetItemString(dw_list.GetRow(), 'id')
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "task_inputUser");
        var userid = requestor.GetParm("userid");
        var operation = requestor.GetParm("operation"); 
        //失效按钮的控制
//        var state = dw_list.GetItemString(dw_list.GetRow(), 'state')

        if (zbr != userid) {
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&zxbh=' + zxbh + '&operation=' + operation.toString(), true);
    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName != "fj") {
                self.OpenWindow();
            }
            else if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_list.GetItemString(Row, "id");
                var lx = "xtxq"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_list.SetFocus();
                dw_list.ScrollToRow(Row)
            }
        }
    }


    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
 
    }
    //#endregion

//     this.Download = function () {
//         QsWebSoft.PubMethod.DownLoad();
//    }
    //#region 新建
    this.New = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000807";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());    
        var operation = "new";
        var id = null;

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
        else {             
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&zxbh=' + id + '&operation=' + operation.toString(), true);

        }
    }
    //#endregion

    //#region 删除
    this.Delete = function () {

        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;

        var lrry = dw_list.GetItemString(row, "task_inputuser");
        var userid = requestor.GetParm("userid");

        if (lrry != userid) {
            alert("这个不是您的数据，您不能删除！");
            return;
        }
        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();



        //        var userid = requestor.GetParm("userid");
        //        if ( zbr != userid) {
        //            requestor.MessageBox("提示", "不是自己的数据,不能被删除!", 1);
        //            return;
        //        }
        // 

        var id = dw_list.GetItemString(row, "id");
        if (requestor.MessageBox("提示", "删除投诉咨询编号为<" + id + ">,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
            return;

        //执行删除的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("XtXqDelete", "id=" + id);

        if (webReq.StatusCode() == 200) {
            dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
            requestor.MessageBox("提示", webReq.ResponseText());
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }
    //#endregion

//    //#region 打印
//    this.Print = function () {
//        var row = dw_list.GetRow();
//        if (row <= 0)
//            return;

//        var state = dw_list.GetItemString(row, 'state')
//        if (state != "提交") {
//            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
//            return;
//        }

//        dw_print.SetDataObject("dw_hddz_hdfyhdf_print");
//        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "zxbh"));
//        dw_print.PrintPreview();
//    }
//    //#endregion
  
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(id) like '%" + text + "%')  or ( Lower(id) like '%" + text + "%')");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }

    this.sle_SelectionChanged = function () {
        dw_list.SetRedraw(false);
        var clzt = ddlb_clzt.GetText();
        var jjzt = ddlb_jjzt.GetText();
        var ls_filter = "";
        if (clzt != "全部") {
            ls_filter = "task_coursestate = '" + clzt + "'";
        }

        if (jjzt != "全部") {             
            if (ls_filter == "") {
                ls_filter = "task_emergencystate = '" + jjzt + "'";
            } else {
                ls_filter = ls_filter + " and task_emergencystate = '" + jjzt + "'";
            }
        }
        
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
//    //#endregion
//    //#region 复制
//    this.Copy = function () {
//        var ts_1 = null;
//        var openStyle = "0";
//        var url = "";
//        var parm = "";
//        var label = "";
//        var node = "000807";
//        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
//        //如果没有数据，则返回
//        if (dw_list.RowCount() <= 0)
//            return;
//        var zxbh = dw_list.GetItemString(dw_list.GetRow(), 'id')
//        var operation

//        operation = "copy";


//        //先取得页面父窗口的TabStrip控件
//        if (ts_1 == null) {
//            if (window.external != null)
//                ts_1 = window.external.Control("ts_1");
//        }

//        if (ts_1 == null)
//            return;

//        //模块是否已打开
//        var index = ts_1.SelectItem(node);
//        if (index > 0)
//            return;


//        //取节点所对应的数据窗口记录

//        if (row > 0) {
//            openStyle = ds_1.GetItemString(row, "openStyle");
//            url = ds_1.GetItemString(row, "WindowName");
//            parm = ds_1.GetItemString(row, "OpenParm");
//            label = ds_1.GetItemString(row, "Title");
//        }

//        //如果OpenStyle为2,则标识为打开的是一个Url地址
//        //如果是3,则表示打开一个响应用的HTML窗口
//        if (openStyle == "2")
//            ts_1.Open(node, label, "", url, true);
//        else if (openStyle == "3")
//            requestor.ShowModalDialog(url, null, parm);
//        else
//            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&zxbh=' + zxbh  + '&operation=' + operation.toString() , true);
// 
//    }
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Nbgl.W_XtXq_TaskList", "dw_tszx_list");
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
        var row = dw_list.GetRow();
        var id = dw_list.GetItemString(row,"id");
        var dw_d_data = dw_list.GetChanges();
        if (dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("TaskSave", "dw_list=" + dw_d_data+"&id="+id);

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

        var id = dw_list.GetItemString(row, "id");
        var num = QsWebSoft.PubMethod.xtxqTj(id).value;
        if (num == "1") {
            dw_list.SetItem(row, "state", "提交")
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "提交成功!")
        }
        else {
            requestor.MessageBox("提示", "提交失败!")

        }
        self.Retrieve();

    }
    //#endregion提交人员确认
    this.tjryqr = function () {
        var row = dw_list.GetRow();
        if (row <= 0) {
            return;
        }
        var task_subuser_confirm = dw_list.GetItemString(row, "task_subuser_confirm")
        if (task_subuser_confirm == "已确认") {
            requestor.MessageBox("提示", "本单据已经确认，不能再确认!")
            return
        }
        var id = dw_list.GetItemString(row, "id");
        var date = new Date();
        var task_subuser_confirm = 'Y';
        
        var num = QsWebSoft.PubMethod.xtxqTjryqr(date, id).value;

        if (num == "1") {
//            dw_list.SetItem(row, "state", "提交")
//            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "提交成功!")
        }
        else {
            requestor.MessageBox("提示", "提交失败!")

        }
        self.Retrieve();
    }

    this.lrryqr = function () {
        var Row = dw_list.GetRow();
        if (Row <= 0) {
            return;
        }
        var task_inputUser_Confirm = dw_list.GetItemString(Row, "task_inputUser_Confirm");
        if (task_inputUser_Confirm == '已确认') {
            requestor.MessageBox("提示", "本单据已经确认，不能再确认!")
            return
        }
        var id = dw_list.GetItemString(Row, 'id');
        var date = new Date();
        var num = QsWebSoft.PubMethod.xtxqLrryqr(date, id).value;
        if (num == "1") {
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "报批成功!")
        } else {
            requestor.MessageBox("提示", "报批失败!")
        }
        self.Retrieve();
    }

    this.kfz = function (key) {
        var row = dw_list.GetRow();
        if (row <= 0) {
            return;
        }
        var num = "";
        var id = dw_list.GetItemString(row, 'id');
        if (key == 'btn_zf') {
            var task_coursestate = '作废'
            num = QsWebSoft.PubMethod.xtxqKF(task_coursestate, id).value;
        }
        if (key == 'btn_bh') {
            var task_coursestate = '驳回'
            num = QsWebSoft.PubMethod.xtxqKF(task_coursestate, id).value;
        }
        if (key == 'btn_kfz') {
            var task_coursestate = '开发中'
            num = QsWebSoft.PubMethod.xtxqKF(task_coursestate, id).value;
        }
        if (key == 'btn_kfwc') {
            var task_coursestate = '开发完成'
            num = QsWebSoft.PubMethod.xtxqKF(task_coursestate, id).value;
        }
        if (num == "1") {
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "报批成功!")
        } else {
            requestor.MessageBox("提示", "报批失败!")
        }
        self.Retrieve();
    }
}
