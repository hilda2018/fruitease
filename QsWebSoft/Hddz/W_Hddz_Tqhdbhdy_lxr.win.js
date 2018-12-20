///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Tqhdbhdy_lxr() {

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

        if (typeof (self.CMA_CGN_Tqhdbh) == "function")
            win.AttachEvent("cMACGM提前换单保函欧恒ToolStripMenuItem", "Clicked", self.CMA_CGN_Tqhdbh);

        if (typeof (self.Hlbt_tqhdbh_Clicked) == "function")
            win.AttachEvent("赫伯罗特提前换单保函ToolStripMenuItem", "Clicked", self.Hlbt_tqhdbh_Clicked);

        if (typeof (self.Hbnmtqhdbh_Clicked) == "function")
            win.AttachEvent("汉堡南美提前换单保函ToolStripMenuItem", "Clicked", self.Hbnmtqhdbh_Clicked);

        if (typeof (self.KLINE_tqhdbhoh_Clicked) == "function")
            win.AttachEvent("kLINE提前换单保函欧恒ToolStripMenuItem", "Clicked", self.KLINE_tqhdbhoh_Clicked);

        if (typeof (self.MOL_tqhdbh_OH_Clicked) == "function")
            win.AttachEvent("mOL提前换单保函欧恒ToolStripMenuItem", "Clicked", self.MOL_tqhdbh_OH_Clicked);

        if (typeof (self.NYK_Tqhdbh_Clicked) == "function")
            win.AttachEvent("nYK提前换单保函ToolStripMenuItem", "Clicked", self.NYK_Tqhdbh_Clicked);

        if (typeof (self.OOCL_Tqhdbh_Clicked) == "function")
            win.AttachEvent("oOCL提前换单保函欧恒ToolStripMenuItem", "Clicked", self.OOCL_Tqhdbh_Clicked);

        if (typeof (self.SAFMARINE_Tqhdbh_Clicked) == "function")
            win.AttachEvent("sAFMARINE提前换单保函欧恒ToolStripMenuItem", "Clicked", self.SAFMARINE_Tqhdbh_Clicked);

        if (typeof (self.APL) == "function")
            win.AttachEvent("aPL提前换单保函欧恒ToolStripMenuItem", "Clicked", self.APL);

        if (typeof (self.WH) == "function")
            win.AttachEvent("万海提前换单保函ToolStripMenuItem", "Clicked", self.WH);

        if (typeof (self.cosco) == "function")
            win.AttachEvent("cosco提前换单保函ToolStripMenuItem", "Clicked", self.cosco);

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
var W_Hddz_Tqhdbhdy_lxr = null;
var iw_Wldw_Select = null;


var yjkgsj = null;
this.setYjkgsj = function (parm) {
    yjkgsj = parm;
}

var cyrjc = null;
this.setCyrjc = function (parm) {
    cyrjc = parm;
}

var cm = null;
this.setCm = function (parm) {
    cm = parm;
}

var khjc = null;
this.setKhjc = function (parm) {
    khjc = parm;
}
var jydwjc = null;
this.setJydwjc = function (parm) {
    jydwjc = parm;
}
var ywbh = null;
this.setYwbh = function (parm) {
    ywbh = parm;
}


//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hddz.ashx");

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
    dw_master.SetItem(1, "yjkgsj", yjkgsj);
    dw_master.SetItem(1, "cyrjc", cyrjc);
    dw_master.SetItem(1, "cm", cm);
    dw_master.SetItem(1, "khjc", khjc);
    dw_master.SetItem(1, "ywbh", ywbh);

}
//#endregion
//CMA CGM提前换单保函（欧恒）
this.CMA_CGN_Tqhdbh = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");
    //var jydwjc = dw_master.GetItemString(1, "jydwjc");
//    alert(jydwjc);

    dw_print_cns.SetDataObject("dw_hddz_print_cmacgm");
    //    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, khjc, name, rq);
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}
//赫伯罗特提前换单保函
this.Hlbt_tqhdbh_Clicked = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");
    //var jydwjc = dw_master.GetItemString(1, "jydwjc");

    dw_print_cns.SetDataObject("dw_hddz_print_hblt");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}

////cosco提前换单保函
this.cosco = function () {
    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var ywbh = dw_master.GetItemString(1, "ywbh");
    dw_print_cns.SetDataObject("dw_hddz_print_cosco");
    dw_print_cns.Retrieve(ywbh);
    dw_print_cns.PrintPreview();
}

//汉堡南美提前换单保函
this.Hbnmtqhdbh_Clicked = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");
    //var jydwjc = dw_master.GetItemString(1, "jydwjc");

    dw_print_cns.SetDataObject("dw_hddz_print_hbnm");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}
//KLINE提前换单保函欧恒
this.KLINE_tqhdbhoh_Clicked = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");
    //var jydwjc = dw_master.GetItemString(1, "jydwjc");

    dw_print_cns.SetDataObject("dw_hddz_print_kline");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}
//MOL提前换单保函欧恒
this.MOL_tqhdbh_OH_Clicked = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");
    //var jydwjc = dw_master.GetItemString(1, "jydwjc");

    dw_print_cns.SetDataObject("dw_hddz_print_mol");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}
//NYK提前换单保函
this.NYK_Tqhdbh_Clicked = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");

    dw_print_cns.SetDataObject("dw_hddz_print_nyk");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}
//OOCL提前换单保函（欧恒）
this.OOCL_Tqhdbh_Clicked = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");

    dw_print_cns.SetDataObject("dw_hddz_print_oocl");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}

//SAFMARINE提前换单保函（欧恒）
this.SAFMARINE_Tqhdbh_Clicked = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");

    dw_print_cns.SetDataObject("dw_hddz_print_safmarine");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}

//APL提前换单保函（欧恒）
this.APL = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");

    dw_print_cns.SetDataObject("dw_hddz_print_tqhdbh");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}

//万海提前换单保函（欧恒）
this.WH = function () {

    var name = dw_master.GetItemString(1, "name");
    var rq = dw_master.GetItemDate(1, "rq");
    var yjkgsj = dw_master.GetItemDate(1, "yjkgsj");
    var cyrjc = dw_master.GetItemString(1, "cyrjc");
    var cm = dw_master.GetItemString(1, "cm");
    var khjc = dw_master.GetItemString(1, "khjc");

    dw_print_cns.SetDataObject("dw_hddz_print_wanhai");
    dw_print_cns.Retrieve(yjkgsj, cyrjc, cm, jydwjc, name, rq);
    dw_print_cns.PrintPreview();
}

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
        iw_Wldw_Select.SetData("Hddz_kggl_xhgq");
       
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_master.SetFocus();


    }

}


 




//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion


}
