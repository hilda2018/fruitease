///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Tszx_Hth_Select() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.OK) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.OK);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_1", "Clicked", self.Retrieve);

        if (typeof (self.OK) == "function")
            win.AttachEvent("btn_qd", "Clicked", self.OK);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Cancel", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var dw_mx = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }

//    this.SetDataWindow2 = function (dw) {
//        dw_mx2 = dw;
//    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }

    var sle_ts = null;
    this.SetParameter = function (parm) {
        sle_ts = parm;
    }

    this.OK = function () {
        
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要出口明细单!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        if (column == "tszx") {
             
            var ywbh = dw_1.GetItemString(row, "ywbh");
            var hth = dw_1.GetItemString(row, "hth");
            var khbm = dw_1.GetItemString(row, "khbm");
            var khmc = dw_1.GetItemString(row, "khmc");
            dw_mx.SetItem(1, "ywbh", ywbh)
            dw_mx.SetItem(1, "hth", hth)
            dw_mx.SetItem(1, "yw_khbm", khbm)
            dw_mx.SetItem(1, "khmc", khmc)
            requestor.Close();
        }
    }


    this.Exit = function () {
//        sle_ts.SetText("cancel");
        requestor.Close();
    }

        this.sle_EditChanged = function (text) {
            dw_1.SetRedraw(false);
            if (text == "") {
                dw_1.SetFilter("");
                dw_1.Filter();
            }
            else {
                dw_1.SetFilter("( Upper(hth) like '%" + text.toUpperCase() + "%') or ( Lower(ywbh) like '%" + text.toLowerCase() + "%') or ( Lower(khjc) like '%" + text.toLowerCase() + "%')");
                dw_1.Filter();
                dw_1.Sort();               
            }
            dw_1.SetRedraw(true);
        }

        //#region 数据查询
        this.Retrieve = function () {
            var beginDate = new Date(dp_begin.GetValue());
            var endDate = new Date(dp_end.GetValue());
            if (endDate < beginDate) {
                requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
                dp_Begin.SetFocus();
                return;
            }

            //把开始日期的时间部分设置为 00:00:00
            beginDate.setHours(0);
            beginDate.setMinutes(0);
            beginDate.setSeconds(0);

            //把结束日期的时间部分设置为 23:59:59
            endDate.setHours(23);
            endDate.setMinutes(59);
            endDate.setSeconds(59);
            var userid = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            dw_1.Retrieve(beginDate.getVarDate(), endDate.getVarDate());



        }
        //#endregion

        //#region 窗口的OPEN事件
        this.PostOpen = function () {
            self.Retrieve();
        }
        //#endregion
}