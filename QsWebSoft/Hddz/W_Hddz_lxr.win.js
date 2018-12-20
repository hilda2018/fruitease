///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_lxr() {

    var self = this;
    var requestor = new PBWindow();
    var dw_master = new DataWindow(requestor);
    var dw_print_cns = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dw_log = new DataWindow(requestor);
    var dw_cxcm = new DataWindow(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (dw_print_cns == null) dw_print_cns = new DataWindow(requestor);
        dw_print_cns.Attach(win.Control("dw_print_cns"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
        if (dw_cxcm == null) dw_cxcm = new DataWindow(requestor);
        dw_cxcm.Attach(win.Control("dw_cxcm"));

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("window", "Clicked", self.dw_master_Clicked);

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.dw_EntertoTab) == "function")
            win.AttachEvent("window", "KeyDown", self.dw_EntertoTab);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Ok) == "function")
            win.AttachEvent("btn_1", "Clicked", self.Ok);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_master.Detach(); dw_master = null;
        dw_print_cns.Detach(); dw_print_cns = null;
        tb_1.Detach(); tb_1 = null;
        dw_log.Detach(); dw_log = null;
        dw_cxcm.Detach(); dw_cxcm = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var W_Hddz_lxr = null;
var iw_Wldw_Select = null;


var ywbh = null;
this.setYwbh = function (parm) {
    ywbh = parm;
}
var Dy = null;
this.setDY = function (parm) {
    Dy = parm;
}

this.Ok = function () {

    var rq = dw_master.GetItemDate(1, "rq");
    dw_print_cns.SetDataObject(Dy);    
    dw_print_cns.Retrieve(ywbh, rq);
    dw_print_cns.PrintPreview();
}


 




//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion


}
