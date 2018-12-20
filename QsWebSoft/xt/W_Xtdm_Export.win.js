///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Export() {

    var self = this;
    var requestor = new PBWindow();
    var dw_log = new DataWindow(requestor);
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_2 = new SingleLineEdit(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (sle_2 == null) sle_2 = new SingleLineEdit(requestor);
        sle_2.Attach(win.Control("sle_2"));

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.InsertRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.CopyRow) == "function")
            win.AttachEvent("btn_1", "Clicked", self.CopyRow);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.gkdm_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.gkdm_EditChanged);

        if (typeof (self.ZYWMC_EditChanged) == "function")
            win.AttachEvent("sle_2", "EditChanged", self.ZYWMC_EditChanged);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_log.Detach(); dw_log = null;
        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        sle_2.Detach(); sle_2 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Export.ashx");



    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        if (self.CloseQuery() == 1)
            return;
        setTimeout("window.close();", 100);
    }
    //#endregion 港口代码编辑
    this.gkdm_EditChanged = function (text) {
        dw_1.SetRedraw(false);
        if (text == "")
            dw_1.SetFilter("");
        else
            dw_1.SetFilter("( Upper(sjgkdm) like '%" + text + "%') ");
        dw_1.Filter();
        dw_1.Sort();
        dw_1.SetRedraw(true);
    }
    //#endregion 中英文查询
    this.ZYWMC_EditChanged = function (text) {
        dw_1.SetRedraw(false);
        if (text == "")
            dw_1.SetFilter("");
        else
            dw_1.SetFilter("( Upper(ename) like '%" + text + "%') or ( Lower(ename) like '%" + text + "%') or (cname like '%"+ text +"%')");
        dw_1.Filter();
        dw_1.Sort();
        dw_1.SetRedraw(true);
    }
    //#region CloseQuery
    this.CloseQuery = function () {


        dw_1.AcceptText();


        if ((dw_1.DeletedCount() + dw_1.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion


    this.InsertRow = function () {
        dw_1.InsertRow(0);
    }
    this.DeleteRow = function () {
        var dw_1_row = dw_1.GetRow();
        var aa = dw_1.GetItemStatus(dw_1_row, 0, DWBUFFER.Primary)
        requestor.MessageBox("", aa);
        if (dw_1.GetItemStatus(dw_1_row, 0, DWBUFFER.Primary) != 3) {
            var ename = dw_1.GetItemString(dw_1_row, "ename");
            var ctr_no = dw_1.GetItemString(dw_1_row, "ctr_no");
            var row = dw_log.InsertRow(0);
            var serialNumber = dw_log.GetItemString(row, "eid_max");

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "t_port");
            dw_log.SetItem(row, "changecols", "");
            dw_log.SetItem(row, "mainid", ename);
            dw_log.SetItem(row, "parameters", ctr_no);
            
            dw_log.ScrollToRow(row);
        }
        dw_1.DeleteRow(0);
    }

    this.CopyRow = function () {
        var row = dw_1.GetRow();
        if (row <= 0)
            return;

        dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
        dw_1.ScrollToRow(row + 1);


    }

    this.Save = function () {

        if (dw_1.AcceptText() != 1)
            return;

        if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var dw_d_data = dw_1.GetChanges();
        if (dw_d_data == "")
            return;

        //数据同步生鲜港
        for (var i = 1; i <= dw_1.RowCount(); i++) {
            var ename = dw_1.GetItemString(i, "ename");
            var ctr_no = dw_1.GetItemString(i, "ctr_no");
            var li_pos = 0;
            var ycyymc_tctsfh = ename;

            ycyymc_tctsfh.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");

            var li_find1 = 0;
            if (i > 1) {
                li_find1 = dw_1.Find("(ename = '" + ename + "' and ctr_no = '" + ctr_no + "') or (ename = '" + ycyymc_tctsfh + "' and ctr_no = '" + ctr_no + "' ) ", 1, i - 1)
            }

            var li_find2 = 0;
            if (i < dw_1.RowCount()) {
                li_find1 = dw_1.Find("(ename = '" + ename + "' and ctr_no = '" + ctr_no + "') or (ename = '" + ycyymc_tctsfh + "' and ctr_no = '" + ctr_no + "' ) ", i + 1, dw_1.RowCount())
                //li_find1 = dw_1.Find("ycyymc = '" + ycyymc + "' or ycyymc = '" + ycyymc_tctsfh + "' or ycyymc_tctsfh = '" + ycyymc + "' or ycyymc_tctsfh = '" + ycyymc_tctsfh + "'", i + 1, dw_1.RowCount())
            }

            if (li_find1 + li_find2 > 0) {
                var li_find = 0;
                if (li_find2 > 0) {
                    li_find = li_find1 + li_find2 + 1;
                } else {
                    li_find = li_find1;
                };
                requestor.MessageBox("提示", "异常原因：" + ename + "在" + li_find.toString() + "行存在重复，不能保存！");
                return;
            }
            if (dw_1.GetItemStatus(i, 0, DWBUFFER.Primary) != 0) {
                var ename = dw_1.GetItemString(i, "ename");
                var ctr_no = dw_1.GetItemString(i, "ctr_no");
                var row = dw_log.InsertRow(0);
                //var maxNumber = self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max");

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "t_port");
                dw_log.SetItem(row, "changecols", "");
                dw_log.SetItem(row, "mainid", ename);
                dw_log.SetItem(row, "parameters", ctr_no);
                dw_log.ScrollToRow(row);
            }
        }

        dw_log.AcceptText()
        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_d_data + "&dw_log=" + dw_log_data);


        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号

            dw_1.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_1.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_1.SetFocus();
        }
    }
}