///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzEdit_Kggl_Cyr() {

    var self = this;
    var requestor = new PBWindow();
    var dw_master = new DataWindow(requestor);
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

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_master.Detach(); dw_master = null;
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
var W_HddzEdit_Kggl_Cyr = null;
var iw_Wldw_Select = null;

var cm = null;
this.SetCm = function (parm) {
    cm = parm;
}
var hcorhbh = null;
this.SetHcorhbh = function (parm) {
    hcorhbh = parm;
}

var zz_cm = null;
this.SetZz_Cm = function (parm) {
    zz_cm = parm;
}
var zz_hcorhbh = null;
this.SetZz_Hcorhbh = function (parm) {
    zz_hcorhbh = parm;
}

var xhgqbm = null;
this.SetXhgqbm = function (parm) {
    xhgqbm = parm;
}

var xhgq = null;
this.SetXhgq = function (parm) {
    xhgq = parm;
}

var xhgqjc = null;
var xhgqjc_old = null;
this.SetXhgqjc = function (parm) {
    xhgqjc = parm;
    xhgqjc_old = parm;
}

var xhgqpym = null;
this.SetXhgqpym = function (parm) {
    xhgqpym = parm;
}

var yjkgsj = null;
this.SetYjkgsj = function (parm) {
    yjkgsj = parm;
}

var sjkgsj = null;
this.SetSjkgsj = function (parm) {
    sjkgsj = parm;
}

var mtdm = null;
this.SetMtdm = function (parm) {
    mtdm = parm;
}

var jcka = null;
this.SetJcka = function (parm) {
    jcka = parm;
}

var rjka = null;
this.SetRjka = function (parm) {
    rjka = parm;
}

var hdrbm = null;
this.SetHdrbm = function (parm) {
    hdrbm = parm;
}

var hdrjc = null;
this.SetHdrjc = function (parm) {
    hdrjc = parm;
}
var cyr = null;
this.SetCyr = function (parm) { 
    cyr = parm;
}
var cyrbm = null;
this.SetCyrbm = function (parm) {
    cyrbm = parm;
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


//#region CloseQuery
this.CloseQuery = function () {

    dw_master.AcceptText();


    if ((dw_master.ModifiedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }
}
//#endregion

//#region 新建
this.Add = function () {

    dw_master.Reset();
    dw_master.InsertRow(0);
    dw_master.SetItem(1, "cm", cm);
    dw_master.SetItem(1, "hcorhbh", hcorhbh);
    dw_master.SetItem(1, "zz_cm", zz_cm);
    dw_master.SetItem(1, "zz_hcorhbh", zz_hcorhbh);
    dw_master.SetItem(1, "xhgqbm", xhgqbm);
    dw_master.SetItem(1, "xhgq", xhgq);
    dw_master.SetItem(1, "xhgqjc", xhgqjc);
    dw_master.SetItem(1, "xhgqjc_old", xhgqjc_old);
    dw_master.SetItem(1, "xhgqpym", xhgqpym);
    dw_master.SetItem(1, "mtdm", mtdm);
    dw_master.SetItem(1, "jcka", jcka);
    dw_master.SetItem(1, "rjka", rjka);
    dw_master.SetItem(1, "hdrbm", hdrbm);
    dw_master.SetItem(1, "hdrjc", hdrjc);
    dw_master.SetItem(1, "cyr", cyr);
    dw_master.SetItem(1, "cyrbm", cyrbm);
    if (yjkgsj != null && yjkgsj != "") {
        var yjkgsj_rq = new Date(yjkgsj + ":00");
        dw_master.SetItem(1, "yjkgsj", yjkgsj_rq.getVarDate());
    }
    if (sjkgsj != null && sjkgsj != "") {
        var sjkgsj_rq = new Date(sjkgsj + ":00");
        dw_master.SetItem(1, "sjkgsj", sjkgsj_rq.getVarDate());
        dw_master.SetItem(1, "ykgsj", sjkgsj_rq.getVarDate());
    }
    dw_log.Retrieve(requestor.GetParm("userid"), 'kgglcyr');
    if (yjkgsj == null || yjkgsj == "") {
        var date = new Date("1900/01/01 00:00:00");
        yjkgsj = date.getVarDate();
    }

    if (sjkgsj >= "2000/00/00 00:00") {
        dw_cxcm.Retrieve(cm, zz_cm, xhgqbm, sjkgsj, hdrbm,cyrbm);
    }
    else {
        dw_cxcm.Retrieve(cm, zz_cm, xhgqbm, "", hdrbm, cyrbm);
    }
    

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
        iw_Wldw_Select.SetData("hddz_kggl_xhgq");
       
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_master.SetFocus();


    }

}

 

//#region 存盘
this.save = function () {
    if (dw_master.AcceptText() != 1)
        return;

    if (dw_master.ModifiedCount() <= 0) {
        alert("没有数据需要保存!");
        return;
    }


    var yjkgsj_pd = dw_master.GetItemNumber(1, "yjkgsj_pd");

    if (yjkgsj_pd < 0) {
        if (requestor.MessageBox("提示", "您输入的预计靠港时间已经在当前时间之后3天,是否继续保存?", ICON.Question, BUTTON.YesNo) == 2) {
            return;
        }

    }


    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    var cm = dw_master.GetItemString(1, "cm");
    var hcorhbh = dw_master.GetItemString(1, "hcorhbh");
    var zz_cm = dw_master.GetItemString(1, "zz_cm");
    var zz_hcorhbh = dw_master.GetItemString(1, "zz_hcorhbh");
    var xhgqbm = dw_master.GetItemString(1, "xhgqbm");
    var xhgq = dw_master.GetItemString(1, "xhgq");
    var xhgqjc_old = dw_master.GetItemString(1, "xhgqjc_old");
    var xhgqjc = dw_master.GetItemString(1, "xhgqjc");
    var xhgqpym = dw_master.GetItemString(1, "xhgqpym");
    var kgbz = dw_master.GetItemString(1, "kgbz");
    var yjkgsj_rq = new Date(dw_master.GetItemDate(1, "yjkgsj"));
    var sjkgsj_rq = new Date(dw_master.GetItemDate(1, "sjkgsj"));
    var ykgsj_rq = new Date(dw_master.GetItemDate(1, "ykgsj"));
    var zz_cm_new = dw_master.GetItemString(1, "zz_cm_new");
    var mtdm = dw_master.GetItemString(1, "mtdm");
    var jcka = dw_master.GetItemString(1, "jcka");
    var rjka = dw_master.GetItemString(1, "rjka");
    var hdrbm = dw_master.GetItemString(1, "hdrbm");
    var cyr = dw_master.GetItemString(1, "cyr");
    var cyrbm = dw_master.GetItemString(1, "cyrbm");
    if (zz_cm_new == null) {
        zz_cm_new == "";
    };
    if (mtdm == null) {
        mtdm == "";
    };
    if (jcka == null) {
        jcka == "";
    };
    if (rjka == null) {
        rjka == "";
    };
    var yjkgsj = QsWebSoft.PubMethod.ReturnDateString(yjkgsj_rq).value;
    var sjkgsj = QsWebSoft.PubMethod.ReturnDateString(sjkgsj_rq).value;
    var ykgsj = QsWebSoft.PubMethod.ReturnDateString(ykgsj_rq).value;
 
    //数据同步生鲜港
    for (var i = 1; i <= dw_cxcm.RowCount(); i++) {

        var ywbh = dw_cxcm.GetItemString(i, "ywbh");
        var log_num = dw_log.RowCount();

        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;


        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_hddz");
        dw_log.SetItem(row, "changecols", "xhgqbm,xhgq,xhgqjc,xhgqpym,yjkgsj,zz_hcorhbh,zz_cm,sjkgsj,mtdm,jcka,rjka,cyr");
        dw_log.SetItem(row, "mainid", ywbh);
        dw_log.ScrollToRow(row);

    }

    dw_log.AcceptText()

    var dw_log_data = dw_log.GetChanges();
    if (dw_log_data == "")
        return;

    
    webReq.Invoke("UpdateKgsjCyr", "cm=" + cm + "&hcorhbh=" + hcorhbh + "&zz_cm=" + zz_cm + "&zz_hcorhbh=" + zz_hcorhbh + "&xhgqbm=" + xhgqbm + "&xhgq=" + xhgq + "&xhgqjc=" + xhgqjc + "&xhgqjc_old=" + xhgqjc_old + "&xhgqpym=" + xhgqpym + "&yjkgsj=" + yjkgsj + "&sjkgsj=" + sjkgsj + "&ykgsj=" + ykgsj + "&kgbz=" + kgbz + "&zz_cm_new=" + zz_cm_new + "&mtdm=" + mtdm + "&jcka=" + jcka + "&rjka=" + rjka + "&hdrbm=" + hdrbm + "&cyr=" + cyr + "&cyrbm=" + cyrbm + "&dw_log=" + dw_log_data);

    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
        var cm = webReq.ResponseText();
        dw_master.SetItem(1, "cm", cm);
        dw_master.ResetUpdate();
        dw_log.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
        self.Exit();
    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_master.SetFocus();
    };
};
//#endregion


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion


}
