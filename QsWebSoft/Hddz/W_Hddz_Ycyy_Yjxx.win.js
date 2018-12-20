///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Ycyy_Yjxx() {

    var self = this;
    var requestor = new PBWindow();
    var dw_log = new DataWindow(requestor);
    var dw_list = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
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

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_list", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.dw_List_EntertoTab) == "function")
            win.AttachEvent("dw_list", "KeyDown", self.dw_List_EntertoTab);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.InsertRow);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_log.Detach(); dw_log = null;
        dw_list.Detach(); dw_list = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";

var dw_mx = null;

var dwc = new DataWindowChild();
var dwc_zbr = new DataWindowChild();

this.SetDataWindow = function (dw) {
    dw_mx = dw;
}
var column = null;
this.SetData = function (parm) {
    column = parm;
}
var cxh = null;
this.SetDataCxh = function (parm) {
    cxh = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

var yjlxbh = null;
this.SetYjlxbh = function (parm) {
    yjlxbh = parm;
}
 
 
//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hddz.ashx");
//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
    self.Add();
     
}

this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();

    if ((dw_list.ModifiedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }
}
//#endregion

//#region 新建
this.Add = function () {
    var ywbh = requestor.GetParm("ywbh");
    var jzxh = requestor.GetParm("jzxh");
    dw_list.Retrieve(column, yjlxbh)
    dw_list.AcceptText()

    var userid = requestor.GetParm("userid");
    var li_row = dw_list.InsertRow(0);
    var date = new Date();
    dw_list.SetItem(li_row, "ywbh", column);
    if (cxh != "" && cxh != null) {
        dw_list.SetItem(li_row, "cxh", cxh);
    }
    dw_list.SetItem(li_row, "zbr", userid);
    dw_list.SetItem(li_row, "zbrq", date.getVarDate());
    if (dw_list.RowCount() > 0) {
        dw_list.GetChild("ycyybm", dwc);
        dwc.Retrieve(yjlxbh );
        dw_list.GetChild("zbr", dwc_zbr);
        dwc_zbr.Retrieve("%");
    }

    dw_log.Retrieve(userid, "ycyy");
}
//#endregion

this.InsertRow = function () {
    //    dw_1.InsertRow(0);
    var ywbh = requestor.GetParm("ywbh");
    var jzxh = requestor.GetParm("jzxh");
    dw_list.Retrieve(column, yjlxbh)
    dw_list.AcceptText()

    var userid = requestor.GetParm("userid");
    var li_row = dw_list.InsertRow(0);
    var date = new Date();
    dw_list.SetItem(li_row, "ywbh", column);
    if (cxh != "" && cxh != null) {
        dw_list.SetItem(li_row, "cxh", cxh);
    }
    dw_list.SetItem(li_row, "zbr", userid);
    dw_list.SetItem(li_row, "zbrq", date.getDate());
    if (dw_list.RowCount() > 0) {
        dw_list.GetChild("ycyybm", dwc);
        dwc.Retrieve(yjlxbh);
        dw_list.GetChild("zbr", dwc_zbr);
        dwc_zbr.Retrieve("%");
    }
}

//#region 存盘
this.save = function () {
    if (dw_list.AcceptText() != 1)
        return;

    if ((dw_list.ModifiedCount() + dw_list.DeletedCount() <= 0)) {
        alert("没有数据需要保存!");
        return;
    }

    for (row = dw_list.RowCount(); row > 0; row--) {
        var ycyymc_jsl = dw_list.GetItemString(row, "ycyymc_jsl");
        dw_list.SetItem(row, "ycyymc", ycyymc_jsl);
    }

    var ywbh = "";
    for (row = dw_list.RowCount(); row > 0; row--) {

        var ycyybm = dw_list.GetItemString(row, "ycyybm");

        if (ycyybm == "010411") {
            ywbh = dw_list.GetItemString(row, "ywbh");
            var num = QsWebSoft.PubMethod.UpdateHybgHtd(ywbh).value;
        }
    }

    var dw_d_data = dw_list.GetChanges();
    if (dw_d_data == "")
        return;

    dw_list.SetFilter();
    dw_list.Filter();

    //数据同步生鲜港
    dw_list.AcceptText();
    for (var i = 1; i <= dw_list.RowCount(); i++) {
        var yy = dw_list.GetItemString(row, "yy");
        if (yy == "N") {
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1 || dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 3) {

                var ywbh = dw_list.GetItemString(i, "ywbh");
                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_ycyy");
                dw_log.SetItem(row, "changecols", "");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.SetItem(row, "parameters", ycyybm);
                dw_log.ScrollToRow(row);
            }
        }
    }

    dw_log.AcceptText();
    var dw_log_data = dw_log.GetChanges();    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("YcyyYjxxSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);
    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
        dw_list.ResetUpdate();
        dw_mx.ResetUpdate();
        dw_log.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
        dw_list.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_list.SetFocus();
    }
}


//#region dw_list ItemChanged
this.dw_List_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "ycyyqc") {
        var date = new Date();
        var date_null = new Date("1900/1/1");
        if (data == "Y") {
            dw_list.SetItem(row, "ycyyqcsj", date.getVarDate())
        } else {
            dw_list.SetItem(row, "ycyyqcsj", date_null.getVarDate())
        }
    }
    if (dwoName == "ycyybm") {
        dw_list.AcceptText();
        var yy_jsll = dw_list.GetItemString(row, "yy_jsll");
        dw_list.SetItem(row, "yy", yy_jsll);
    }

    //    dw_list.AcceptText();
    //    if (dwoName == "ycyybm") {
    //        var ycyybm = dw_list.GetItemString(row, "ycyybm");
    //        if (ycyybm == "010411") {
    //            dw_mx.SetItem(RowData, "htd", "Y");
    //        }
    //    }

}
//#endregion

//#region dw_master entertotab
this.dw_List_EntertoTab = function (key, keyflags, dwo) {
    var colname = dwo.GetColumnName();
    if (colname == "ycyymc") { 
        return 0
    }
    else {
 		return 1
    } 
}

//#region 关闭窗口
this.Exit = function () {
    requestor.Close();
}
//#endregion
 

}
