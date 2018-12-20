///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Drjhzxb() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_1 = new SingleLineEdit(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_1_ItemChanged) == "function")
            win.AttachEvent("dw_1", "ItemChanged", self.dw_1_ItemChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.InsertRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.CopyRow) == "function")
            win.AttachEvent("btn_1", "Clicked", self.CopyRow);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Export) == "function")
            win.AttachEvent("btn_2", "Clicked", self.Export);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Xl.ashx");



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


    dw_1.AcceptText();
 

    if ((dw_1.DeletedCount() + dw_1.ModifiedCount() ) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }


}
//#endregion


//#region 窗口的OPEN事件
this.PostOpen = function () {

    self.Retrieve();
}
//#endregion

this.InsertRow = function () {
    dw_1.InsertRow(0);
}
this.DeleteRow = function () {
    dw_1.DeleteRow(0);
}

this.CopyRow = function () {
    var row = dw_1.GetRow();
    if (row <= 0)
        return;

    dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
    dw_1.ScrollToRow(row + 1);


}

this.dw_1_ItemChanged = function (Row, dwoName, data) {
    if (Row > 0) {
        if (dwoName == "yw_hddz_sjhdsj") {
            
            dw_1.SetItem(Row, "dongrou_sjhdsj", data);
            
        }
        if (dwoName == "yw_hddz_cktgsj") {
            dw_1.SetItem(Row, "dongrou_cktgsj", data);
        }
        if (dwoName == "yw_hddz_hgfxsj") {
            dw_1.SetItem(Row, "dongrou_hgfxsj", data);
        }
    }
}
this.Retrieve = function () {
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

    dw_1.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
}

this.sle_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    if (text == "")
        dw_1.SetFilter("");
    else
        dw_1.SetFilter("(Upper(yw_hddz_hz_jzxh) like Upper('%" + text + "%')) or (Upper(yw_hddz_hz_jzxh) like Upper('%" + text + "%'))");
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}

this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;


    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }


 
    var dw_d_data = dw_1.GetChanges();
    if ( dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save_drjhzxb", "dw_Master=" + dw_d_data );


    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
      
        dw_1.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
         dw_1.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_1.SetFocus();
    }
}

 }