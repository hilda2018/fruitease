﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Set_Sj() {

    var self = this;
    var requestor = new PBWindow();
    var tb_1 = new ToolStrip(requestor);
    var dp_1 = new DatePicker(requestor);
    var em_sj = new EditMask(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (dp_1 == null) dp_1 = new DatePicker(requestor);
        dp_1.Attach(win.Control("dp_1"));
        if (em_sj == null) em_sj = new EditMask(requestor);
        em_sj.Attach(win.Control("em_sj"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tb_1.Detach(); tb_1 = null;
        dp_1.Detach(); dp_1 = null;
        em_sj.Detach(); em_sj = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";

    var dw_mx = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;

    }

    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }

    var cdphbm = null;
    this.SetCdphbm = function (parm) {
        cdphbm = parm;
    }

    var sjshrbm = null;
    this.SetSjshrbm = function (parm) {
        sjshrbm = parm;
    }

    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Wlxx.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        var date = new Date();
        var sj = date.getHours() + ':' + date.getMinutes();
        em_sj.SetText(sj);
    }

    //#region CloseQuery
    this.CloseQuery = function () {


    }
    //#endregion



    //#region 存盘
    this.save = function () {
        var rq_lj = new Date(dp_1.GetValue());
        var sj = em_sj.GetText();
        if (sj == "" || sj == null) {
            requestor.MessageBox("提示", "请选择时间！")
            return;
        }
        var s = sj.substr(0, 2);
        var m = sj.substring(sj.length - 2);
        rq_lj.setHours(s);
        rq_lj.setMinutes(m);

        if (column == "qd") {
            QsWebSoft.PubMethod.UpdateCdphQdsj(rq_lj, cdphbm, sjshrbm);
            for (row = 1; row <= dw_mx.RowCount(); row++) {
                var sjshrbm2 = dw_mx.GetItemString(row, "sjshrbm");
                if (sjshrbm2 == sjshrbm) {
                    dw_mx.SetItem(row, "qdsj", rq_lj.getVarDate());
                    var date = new Date();
                    dw_mx.SetItem(row, "djqdsj", date.getVarDate());
                    var ywy = requestor.GetParm("userid");
                    var date = new Date();
                    dw_mx.SetItem(row, "qssj_lrsj", date.getVarDate())
                    dw_mx.SetItem(row, "qssj_czry", ywy)
                    dw_mx.SetItem(row, "sfxg", "Y");
                }

            }
        };

        requestor.Close();

    }


    //#region 关闭窗口
    this.Exit = function () {

        requestor.Close();
    }
    //#endregion

}