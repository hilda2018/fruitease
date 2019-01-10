﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function dw_wldw_rs_group() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ss_1 = new ToolStrip(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ss_1 == null) ss_1 = new ToolStrip(requestor);
        ss_1.Attach(win.Control("ss_1"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_AddRow", "Clicked", self.InsertRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_DeleteRow", "Clicked", self.DeleteRow);

        if (typeof (self.SaveData) == "function")
            win.AttachEvent("btn_1", "Clicked", self.SaveData);

        if (typeof (self.CloseWindow) == "function")
            win.AttachEvent("btn_CloseDW", "Clicked", self.CloseWindow);

        if (typeof (self.Reflesh) == "function")
            win.AttachEvent("btn_2", "Clicked", self.Reflesh);

        if (typeof (self.Filter) == "function")
            win.AttachEvent("单列过滤ToolStripMenuItem", "Clicked", self.Filter);

        if (typeof (self.Filter_Cancle) == "function")
            win.AttachEvent("取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle);

        if (typeof (self.Dcrz) == "function")
            win.AttachEvent("导出ToolStripMenuItem", "Clicked", self.Dcrz);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

        if (typeof (self.CopySelect) == "function")
            win.AttachEvent("选择复制ToolStripMenuItem", "Clicked", self.CopySelect);

        if (typeof (self.CopyL) == "function")
            win.AttachEvent("整列复制ToolStripMenuItem", "Clicked", self.CopyL);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        ss_1.Detach(); ss_1 = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    // 数据分页检索,必须在数据检索之前设置


    //#region 变量定义
    var new_dw = null;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/RsGroundHandle.ashx");

    //#region CloseQuery
    this.CloseQuery = function () {
        dw_1.AcceptText();
        if ((dw_1.DeletedCount() + dw_1.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }
    }
    //#endregion


 

    this.InsertRow = function () { dw_1.InsertRow(0); }
    this.DeleteRow = function () { dw_1.DeleteRow(0); }
    this.CloseWindow = function () { if (self.CloseQuery() == 1) return;  setTimeout("window.close();", 100); }
    this.Reflesh = function () {if (self.CloseQuery() == 1) return; dw_1.Refresh(); }


    this.SaveData = function () {

        //  成功接受输入的时候，返回1
        if (dw_1.AcceptText() != 1)
            return;
        if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        for (var i = 1; i <= dw_1.RowCount(); i++) {
            var d_name_jsl = dw_1.GetItemString(i, "d_name_jsl");
            dw_1.SetItem(i,"d_name", d_name_jsl)
        }




        var dw_d_data = dw_1.GetChanges(); alert(dw_d_data);


        if (dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "changedData=" + dw_d_data);


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


