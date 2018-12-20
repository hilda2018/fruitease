///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_WldwzjqkList_DY() {

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

        if (typeof (self.print_Clicked) == "function")
            win.AttachEvent("btn_save", "Clicked", self.print_Clicked);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

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
var W_WldwzjqkList_DY = null;
var iw_Wldw_Select = null;



var khbm = null;
this.setKhbm = function (parm) {
    khbm = parm;
}
var khmc = null;
this.setKhmc = function (parm) {
    khmc = parm;
}
var ohsjje = null;
this.setOhsjje = function (parm) {
    ohsjje = parm;
}
var ohsjzq = null;
this.setOhsjzq = function (parm) {
    ohsjzq = parm;
}
var hssjje = null;
this.setHssjje = function (parm) {
    hssjje = parm;
}
var hssjzq = null;
this.setHssjzq = function (parm) {
    hssjzq = parm;
}
var hdfyje = null;
this.setHdfyje = function (parm) {
    hdfyje = parm;
}
var hdfyzq = null;
this.setHdfyzq = function (parm) {
    hdfyzq = parm;
}
var gjyfje = null;
this.setGjyfje = function (parm) {
    gjyfje = parm;
}
var gjyfzq = null;
this.setGjyfzq = function (parm) {
    gjyfzq = parm;
}

//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Yw_Zjgl.ashx");

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {

    self.Add();
    var operation = requestor.GetParm("operation");
    if (operation == "show") {
        dw_master.Modify("DataWindow.Readonly=no");
    }
}


//#endregion




//#region 新建
this.Add = function () {

    dw_master.Reset();
    dw_master.InsertRow(0);
    dw_master.SetItem(1, "khbm", khbm);
    dw_master.SetItem(1, "khmc", khmc);
    dw_master.SetItem(1, "ohsjje", ohsjje);
    dw_master.SetItem(1, "ohsjzq", ohsjzq);
    dw_master.SetItem(1, "hssjje", hssjje);
    dw_master.SetItem(1, "hssjzq", hssjzq);
    dw_master.SetItem(1, "hdfyje", hdfyje);
    dw_master.SetItem(1, "hdfyzq", hdfyzq);
    dw_master.SetItem(1, "gjyfzq", gjyfzq);
    dw_master.SetItem(1, "gjyfje", gjyfje);
   
//    if (yjkgsj != null && yjkgsj != "") {
//        var yjkgsj_rq = new Date(yjkgsj + ":00");
//        dw_master.SetItem(1, "yjkgsj", yjkgsj_rq.getVarDate());
//    }
//    if (sjkgsj != null && sjkgsj != "") {
//        var sjkgsj_rq = new Date(sjkgsj + ":00");
//        dw_master.SetItem(1, "sjkgsj", sjkgsj_rq.getVarDate());
//        dw_master.SetItem(1, "ykgsj", sjkgsj_rq.getVarDate());
//    }
//    dw_log.Retrieve(requestor.GetParm("userid"), 'kggl');
//    if (yjkgsj == null || yjkgsj == "") {
//        var date = new Date("1900/01/01 00:00:00");
//        yjkgsj = date.getVarDate();
//    }
//    dw_cxcm.Retrieve(cm, zz_cm, yjkgsj);

}
//#endregion

  //#region dw_master弹出选择
this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
    if (editMode == "show")
        return;

    if (dwoName == "xhgqjc_t") {
        if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
        khlx = "hymt";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Wldw_Select.SetDataWindow(dw_master);
        iw_Wldw_Select.SetData("Yw_Zjgl_kggl_xhgq");
       
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_master.SetFocus();


    }

}

//打印
this.print_Clicked = function () {
    var khbm = dw_master.GetItemString(1, "khbm");
    var khmc = dw_master.GetItemString(1, "khmc");
    var ohsjje = dw_master.GetItemNumber(1, "ohsjje");
    var hssjje = dw_master.GetItemNumber(1, "hssjje");
    var hdfyje = dw_master.GetItemNumber(1, "hdfyje");
    var gjyfje = dw_master.GetItemNumber(1, "gjyfje");
    var fh = dw_master.GetItemNumber(1, "fh");
    //账期
    var ohsjzq = dw_master.GetItemNumber(1, "ohsjzq");
    var hssjzq = dw_master.GetItemNumber(1, "hssjzq");
    var hdfyzq = dw_master.GetItemNumber(1, "hdfyzq");
    var gjyfzq = dw_master.GetItemNumber(1, "gjyfzq");

    //    var khbm = dw_list.GetItemString(1, "khbm");
    //    var khmc = dw_list.GetItemString(1, "khmc");
    //    var ohsjje = dw_list.GetItemNumber(1, "ohsjje");
    //    var ohsjzq = dw_list.GetItemNumber(1, "ohsjzq");
    //    var hssjje = dw_list.GetItemNumber(1, "hssjje");
    //    var hssjzq = dw_list.GetItemNumber(1, "hssjzq");
    //    var hdfyje = dw_list.GetItemNumber(1, "hdfyje");
    //    var hdfyzq = dw_list.GetItemNumber(1, "hdfyzq");
    //    var gjyfje = dw_list.GetItemNumber(1, "gjyfje");
    //    var gjyfzq = dw_list.GetItemNumber(1, "gjyfzq");



    dw_print_cns.SetDataObject("dw_wldw_print_ckh");
    dw_print_cns.Retrieve(khbm, khmc, ohsjje, hssjje, hdfyje, gjyfje, fh);
    //dw_print_cns.Retrieve(khbm, fh);
    dw_print_cns.PrintPreview();    
    QsWebSoft.PubMethod.Wldwzjqk_Dycs(khbm, khmc, ohsjje, ohsjzq, hssjje, hssjzq, hdfyje, hdfyzq, gjyfje, gjyfzq, fh).value;
}
 




//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion


}
