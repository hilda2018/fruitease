///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_WldwAdd_Shdz_New() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_list", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.fence) == "function")
            win.AttachEvent("btn_1", "Clicked", self.fence);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;
var iw_Country_Select = null;
var dwc_dq = new DataWindowChild();
var dwc_lm = new DataWindowChild();
var iw_Sfdqlm_Select = null; 

var column = null;
this.SetData = function (parm) {
    column = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Wldw.ashx");

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
    var khbm = requestor.GetParm("khbm");
    dw_list.Retrieve(khbm);
}

var dw_List = null;
this.SetListDataWindow = function (dw) {
    dw_List = dw;
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

  

//#region 存盘
this.save = function () {
    if (dw_list.AcceptText() != 1)
        return;

    if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }

    var yw_khbm = requestor.GetParm("yw_khbm");

    for (var i = 1; i <= dw_list.RowCount(); i++) {
        dw_list.SetItem(i, "yw_khbm", yw_khbm);
    }

    var dw_list_data = dw_list.GetChanges();

    if (dw_list_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("ShdzListSave", "dw_list=" + dw_list_data);
    requestor.MessageBox("", webReq.StatusCode());
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
};
//#endregion

 

//#region 获得数据窗口的焦点
var lastdw = new DataWindow();
this.dw_GetFocus = function (sender) {
    lastdw.Attach(sender);
};
//#endregion

 


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion

//var iw_fence = null;

this.fence = function () {
    //    if (iw_fence == null)
    //    iw_fence = new fence();
    //    requestor.Open("/IFView/fence.html");
    //    requestor.Open("/LoadWindow.ashx?WinName=IFView.fence", iw_fence);
    var row = dw_list.GetRow();
    var yw_khbm = dw_list.GetItemString(row, "yw_khbm");
  
    window.showModalDialog("/IFView/fence.html?khbm=" + yw_khbm, null, "dialogHeight:600px;dialogWidth:1000px;");
    dw_list.SetFocus();
}

//#region 添加明细
this.AddRow = function () {
    var row = dw_list.InsertRow(0);
    var khbm = requestor.GetParm("khbm");
    
    var cxh_max = dw_list.GetItemNumber(1,"cxh_max");
    
    dw_list.ScrollToRow(row);
    dw_list.SetItem(row, "yw_khbm", khbm);
    dw_list.SetItem(row, "cxh", cxh_max+1);
    dw_list.SetFocus();

}
//#endregion

//#region 删除商品
this.DeleteRow = function () {
    var row = dw_list.GetRow();
    if (row <= 0)
         return; 
    var status = dw_list.GetItemStatus(row, 0, DWBUFFER.Primary);

    if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
        dw_list.SetFocus();
        return;
    }
    }
    dw_list.DeleteRow(row);
  
}
//#endregion

//#region 单击明细单编号
this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
    if (Row > 0) {
        fzks_row = Row;
    };
    if (dwoName == "dz_dq") {
        var dz_sf = dw_list.GetItemString(Row, "dz_sf");
        dw_list.GetChild("dz_dq", dwc_dq);
        dwc_dq.SetFilter("");
        dwc_dq.Filter();

        dwc_dq.SetFilter("prv_name = '" + dz_sf + "'");
        dwc_dq.Filter();

    }

    if (dwoName == "dz_lm") {
        var dz_sf = dw_list.GetItemString(Row, "dz_sf");
        var dz_dq = dw_list.GetItemString(Row, "dz_dq");
        dw_list.GetChild("dz_lm", dwc_lm);
        dwc_lm.SetFilter("");
        dwc_lm.Filter();

        dwc_lm.SetFilter("prv_name = '" + dz_sf + "' and area_name = '" + dz_dq + "'");
        dwc_lm.Filter();

    }

}
//#endregion

//#region 单击明细单编号
this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
    if (dwoName == "dz_sf" || dwoName == "dz_dq" || dwoName == "dz_lm") {
        if (iw_Sfdqlm_Select == null)
            iw_Sfdqlm_Select = new W_Sfdqlm_Select();
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");

        var Khbm = dw_list.GetItemString(Row, "yw_khbm")

        iw_Sfdqlm_Select.SetDataWindow(dw_list);
        iw_Sfdqlm_Select.SetData("thwljh_wlgz_xxdz");
        iw_Sfdqlm_Select.SetRow(Row);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sfdqlm_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Sfdqlm_Select);
        dw_list.SetFocus();

    }

}
//#endregion

}
