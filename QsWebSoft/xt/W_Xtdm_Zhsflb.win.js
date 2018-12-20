///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Zhsflb() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));

        if (typeof (self.dw_1_DoubleClicked) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.dw_1_DoubleClicked);

        if (typeof (self.dw_1_ItemChanged) == "function")
            win.AttachEvent("dw_1", "ItemChanged", self.dw_1_ItemChanged);

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

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var iw_Country_Select = null;
    var iw_Commodity_Select = null;
  
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Zhsflb.ashx");



    //#endregion

//#region 关闭窗口
this.Exit = function () {
    if (self.CloseQuery() == 1)
        return;
    setTimeout("window.close();", 100);
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {


    dw_1.AcceptText();
 

    if ((dw_1.DeletedCount() + dw_1.ModifiedCount() ) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }


}
//#endregion


this.InsertRow = function () {
    dw_1.InsertRow(0);
}
this.DeleteRow = function () {
    dw_1.DeleteRow(0);
}

this.CopyRow = function () {
    var row = dw_1.GetRow();
    if (row <= 0)
        return;

    dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
    dw_1.ScrollToRow(row + 1);


}


//#region dw_1弹出选择
this.dw_1_DoubleClicked = function (xPos, yPos, Row, dwoName) {

    if (dwoName == "fllb") {
        var fljb = dw_1.GetItemNumber(Row, "fljb")
        if (fljb == null) {
            requestor.MessageBox("提示", "请先选择级别！ ")
            dw_1.SetFocus();
            return;
        }
       
        if (fljb == 1 || fljb == 0) {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var dwo = dw_1.GetDataObject();
            iw_Commodity_Select.SetRow(Row);
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(dw_1);
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);
        }

        if (fljb == 2) {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            var dwo = dw_1.GetDataObject();
            iw_Country_Select.SetDataWindow(dw_1);
            iw_Country_Select.SetData("zhsflb");
            iw_Country_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_1.SetFocus();
        }

    }

    if (dwoName == "country") {
        var fljb = dw_1.GetItemNumber(Row, "fljb")
        if (fljb == null) {
            requestor.MessageBox("提示", "请先选择级别！ ")
            dw_1.SetFocus();
            return;
        }

        if (fljb == 0) {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            var dwo = dw_1.GetDataObject();
            iw_Country_Select.SetDataWindow(dw_1);
            iw_Country_Select.SetData("zhsflb_gjsp");
            iw_Country_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_1.SetFocus();
        }
    }
}

//#region dw_1修改框
this.dw_1_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "fljb") {
        if (data == 3) {
            dw_1.SetItem(row, "fllb", "其他国家")
        }else if (data == 4) {
            dw_1.SetItem(row, "fllb", "空运")
        }
        else if (data == 1) {
            dw_1.SetItem(row, "country", "");
            dw_1.SetItem(row, "fllb", "空运")
        }else 
        {
            dw_1.SetItem(row, "fllb", "")
        }
       
    }
}

this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;


    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }

    var dw_d_data = dw_1.GetChanges();
    if ( dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save", "dw_Master=" + dw_d_data );


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