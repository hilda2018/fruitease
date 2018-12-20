///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Select() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_ywbh = new SingleLineEdit(requestor);
    var sle_tdh = new SingleLineEdit(requestor);

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
        if (sle_ywbh == null) sle_ywbh = new SingleLineEdit(requestor);
        sle_ywbh.Attach(win.Control("sle_ywbh"));
        if (sle_tdh == null) sle_tdh = new SingleLineEdit(requestor);
        sle_tdh.Attach(win.Control("sle_tdh"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.OK) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.OK);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.OK) == "function")
            win.AttachEvent("btn_ok", "Clicked", self.OK);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Cancel", "Clicked", self.Exit);

        if (typeof (self.sle_ywbh_EditChanged) == "function")
            win.AttachEvent("sle_ywbh", "EditChanged", self.sle_ywbh_EditChanged);

        if (typeof (self.sle_tdh_EditChanged) == "function")
            win.AttachEvent("sle_tdh", "EditChanged", self.sle_tdh_EditChanged);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_ywbh.Detach(); sle_ywbh = null;
        sle_tdh.Detach(); sle_tdh = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改


    var dw_mx = null;
    var dw_mx1 = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }

    this.SetDataWindow1 = function (dw) {
        dw_mx1 = dw;
    }

    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }

    var RowData = null;
    this.SetRow = function (parm) {
        RowData = parm;
    }


  //#region 窗口的OPEN事件
    this.PostOpen = function () {
        sle_ywbh.SetFocus();
        self.Retrieve();
    }
    this.OK = function () {
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要添加的单证信息!", ICON.StopSign);
            sle_ywbh.SetFocus();
            return;

        }
        var ywbh = dw_1.GetItemString(row, 'ywbh');
        var ztdh = dw_1.GetItemString(row, 'ztdh');
        var yjkgsj = dw_1.GetItemDate(row, 'yjkgsj');
        var sjkgsj = dw_1.GetItemDate(row, "sjkgsj");
        var hgfxsj = dw_1.GetItemDate(row, "hgfxsj");
        var zbrq = dw_1.GetItemDate(row, "zbrq");
        var hth = dw_1.GetItemDate(row, "hth");
        if (dw_mx != null) {
            if (column == "qtwt") {
                dw_mx.SetItem(RowData, 'ywbh', ywbh);
                dw_mx.SetItem(RowData, 'ztdh', ztdh);
                dw_mx.SetItem(RowData, 'yjkgsj', yjkgsj);
                dw_mx.SetItem(RowData, 'sjkgsj', sjkgsj);
                dw_mx.SetItem(RowData, 'fxsj', hgfxsj);
                dw_mx.SetItem(RowData, 'dzrq', zbrq);
                requestor.Close();
            };

            if (column=="sjdr") {
                dw_mx.SetItem(RowData, 'ywbh', ywbh);
                dw_mx.SetItem(RowData, 'hth', hth);
                requestor.Close();
            }

        };



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
            dp_begin.SetFocus();
            return;
        }

        dw_1.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
    }

        this.Exit = function () {
            requestor.Close();
        }

        this.sle_ywbh_EditChanged = function (text) {
            dw_1.SetRedraw(false);
            if (text == "") {
                dw_1.SetFilter("");
                dw_1.Filter();
            }
            else {
                dw_1.SetFilter("( Upper(ywbh) like '%" + text.toUpperCase() + "%') or ( Lower(ywbh) like '%" + text.toLowerCase() + "%') or ( ywbh like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();               
            }
            dw_1.SetRedraw(true);
        }

        this.sle_tdh_EditChanged = function (text) {
            dw_1.SetRedraw(false);
            if (text == "") {
                dw_1.SetFilter("");
                dw_1.Filter();
            }
            else {
                dw_1.SetFilter("( Upper(ztdh) like '%" + text.toUpperCase() + "%') or ( Lower(ztdh) like '%" + text.toLowerCase() + "%') or ( ztdh like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();
            }
            dw_1.SetRedraw(true);
        }
}