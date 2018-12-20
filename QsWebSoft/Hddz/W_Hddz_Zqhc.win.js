///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Zqhc() {

    var self = this;
    var requestor = new PBWindow();
    var dw_log = new DataWindow(requestor);
    var dw_list = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_zqhc = new SingleLineEdit(requestor);

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
        if (sle_zqhc == null) sle_zqhc = new SingleLineEdit(requestor);
        sle_zqhc.Attach(win.Control("sle_zqhc"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_list", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.sle_zqhc_EditChanged) == "function")
            win.AttachEvent("sle_zqhc", "EditChanged", self.sle_zqhc_EditChanged);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_log.Detach(); dw_log = null;
        dw_list.Detach(); dw_list = null;
        tb_1.Detach(); tb_1 = null;
        sle_zqhc.Detach(); sle_zqhc = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;
var iw_Country_Select = null;

var dw_mx = null;

this.SetDataWindow = function (dw) {
    dw_mx = dw;
}
var cm = null;
this.SetData = function (parm) {
    cm = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

var zbr = null;
this.SetZbr = function (parm) {
    zbr = parm;
}

var yjkgsj = null;
this.SetYjkgsj = function (parm) {
    yjkgsj = parm;
}

var hcorhbh_zq = null;
this.SetHcorhbh_zq = function (parm) {
    hcorhbh_zq = parm;
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
    dw_list.Retrieve(cm,  yjkgsj)
    for (row = dw_list.RowCount(); row > 0; row--) {
        dw_list.SetItem(row, "hcorhbh_zq", hcorhbh_zq)
    }

//    dw_list.Modify("DataWindow.Readonly=yes");

    var userid = requestor.GetParm("userid");
    dw_log.Retrieve(userid, "zqhc");

}
//#endregion

//#region 新建

this.sle_zqhc_EditChanged = function (text) {
    for (row = dw_list.RowCount(); row > 0; row--) {
        dw_list.SetItem(row, "hcorhbh_zq", text)
    }
}
//#endregion

//#region 存盘
this.save = function () {
    if (dw_list.AcceptText() != 1)
        return;

    if ((dw_list.ModifiedCount() + dw_list.DeletedCount() <= 0)) {
        alert("没有数据需要保存!");
        return;
    }

    var dw_d_data = dw_list.GetChanges();
    if (dw_d_data == "")
        return;

    dw_list.SetFilter();
    dw_list.Filter();

    //数据同步生鲜港
    for (var i = 1; i <= dw_list.RowCount(); i++) {
        if (dw_list.GetItemStatus(i, "hcorhbh_zq", DWBUFFER.Primary) == 1) {

            var ywbh = dw_list.GetItemString(i, "ywbh");
            //                var log_num = dw_log.RowCount();

            var row = dw_log.InsertRow(0);
            //var maxNumber =  self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz");
            dw_log.SetItem(row, "changecols", "hcorhbh_zq");
            dw_log.SetItem(row, "mainid", ywbh);
            dw_log.ScrollToRow(row);
        }
    }

    dw_log.AcceptText()

    var dw_log_data = dw_log.GetChanges();
    if (dw_log_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("ZqhcSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log);

    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号

        dw_list.ResetUpdate();
        dw_log.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
        dw_list.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_list.SetFocus();
    }
}


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion

}
