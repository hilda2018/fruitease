///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Sjzf() {

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

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_list", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_1", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_2", "Clicked", self.DeleteRow);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

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
var iw_Wldw_Select = null;
var iw_Country_Select = null;

var dw_mx = null;

this.SetDataWindow = function (dw) {
    dw_mx = dw;
}
var column = null;
this.SetData = function (parm) {
    column = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

var zbr = null;
this.SetZbr = function (parm) {
    zbr = parm;
}

var bslx = null;
this.SetBslx = function (parm) {
    bslx = parm;
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
    dw_list.Retrieve(column, bslx)
    //    var userid = requestor.GetParm("userid");
    //    if (zbr == userid) {
    //        var li_row = dw_list.InsertRow(0);
    //        var date = new Date();
    //        dw_list.SetItem(li_row, "ywbh", column);
    //        dw_list.SetItem(li_row, "bslx", "bslx");
    //    }
    //    else {
    //        dw_list.Modify("DataWindow.Readonly=yes");
    //    }
    var userid = requestor.GetParm("userid");
    dw_log.Retrieve(userid, "sjzf");
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

    for (row = dw_list.RowCount(); row > 0; row--) {
        dw_list.SetItem(row, "cxh", row);
    }


    var dw_d_data = dw_list.GetChanges();
    if (dw_d_data == "")
        return;

    dw_list.SetFilter();
    dw_list.Filter();

    //数据同步生鲜港
    for (var i = 1; i <= dw_list.RowCount(); i++) {
            var ywbh = dw_list.GetItemString(i, "ywbh");
            //                var log_num = dw_log.RowCount();

            var row = dw_log.InsertRow(0);
            //var maxNumber =  self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz_sjzf");
            dw_log.SetItem(row, "changecols", "");
            dw_log.SetItem(row, "mainid", ywbh);
            dw_log.ScrollToRow(row);
    }

    dw_log.AcceptText()

    var dw_log_data = dw_log.GetChanges();
    if (dw_log_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("SjzfSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号 

        if (dw_list.RowCount() > 0) {
            var gs = dw_list.GetItemNumber(1, "gs_sum");
            var zzs = dw_list.GetItemNumber(1, "zzs_sum");
            var bzj = dw_list.GetItemNumber(1, "bzj_sum");
            var bjgs = dw_list.GetItemNumber(1, "bjgs_sum");
            var bjzzs = dw_list.GetItemNumber(1, "bjzzs_sum");
            var bjbzj = dw_list.GetItemNumber(1, "bjbzj_sum");
            var zbj = dw_list.GetItemNumber(1, "zbj_sum");
            var xfs = dw_list.GetItemNumber(1, "xfs_sum");
            var sjzfrq = dw_list.GetItemString(1, "sjzfrq_min");
            if (gs == null) {
                gs = 0;
            };
            if (zzs == null) {
                zzs = 0;
            };
            if (bzj == null) {
                bzj = 0;
            };
            if (bjgs == null) {
                bjgs = 0;
            };
            if (bjzzs == null) {
                bjzzs = 0;
            };
            if (bjbzj == null) {
                bjbzj = 0;
            };
            if (zbj == null) {
                zbj = 0;
            };
            if (xfs == null) {
                xfs = 0;
            };
            alert
            var num = QsWebSoft.PubMethod.UpdateSjzf(column, gs, zzs, bzj, bjgs, bjzzs, bjbzj, zbj,xfs, sjzfrq).value;


        }
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

 //#region 添加明细
this.AddRow = function () {
    var row = dw_list.InsertRow(0);
    dw_list.ScrollToRow(row);
    dw_list.SetItem(row, "ywbh", column);
    dw_list.SetItem(row, "cxh", row);
    dw_list.SetItem(row, "bslx", bslx);
    dw_list.SetFocus();
}

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

//#region 删除商品
    this.dw_List_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "sjlx") {
            var bscs = 0;
            if (data == "关税") {
                bscs = dw_list.GetItemNumber(1, "bscs_gs");
            }else if (data == "增值税") {
                bscs = dw_list.GetItemNumber(1, "bscs_zzs");
            } else if (data == "保证金") {
                bscs = dw_list.GetItemNumber(1, "bscs_bzj");
            } else if (data == "补交关税") {
                bscs = dw_list.GetItemNumber(1, "bscs_bjgs");
            } else if (data == "补交增值税") {
                bscs = dw_list.GetItemNumber(1, "bscs_bjzzs");
            } else if (data == "补交保证金") {
                bscs = dw_list.GetItemNumber(1, "bscs_bjbzj");
            } else if (data == "滞报金") {
                bscs = dw_list.GetItemNumber(1, "bscs_zbj");
            } else if (data == "消费税") {
                bscs = dw_list.GetItemNumber(1, "bscs_xfs");
            };
            
            dw_list.SetItem(row, "bscs", bscs + 1)
        }
    }
//#endregion


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion

}
