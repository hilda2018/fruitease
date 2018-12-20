///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Ssgdmkhxxtx() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_2 = new ToolStrip(requestor);
    var sle_guojia = new SingleLineEdit(requestor);
    var sle_spmc = new SingleLineEdit(requestor);
    var sle_shdw = new SingleLineEdit(requestor);
    var sle_gys = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (sle_guojia == null) sle_guojia = new SingleLineEdit(requestor);
        sle_guojia.Attach(win.Control("sle_guojia"));
        if (sle_spmc == null) sle_spmc = new SingleLineEdit(requestor);
        sle_spmc.Attach(win.Control("sle_spmc"));
        if (sle_shdw == null) sle_shdw = new SingleLineEdit(requestor);
        sle_shdw.Attach(win.Control("sle_shdw"));
        if (sle_gys == null) sle_gys = new SingleLineEdit(requestor);
        sle_gys.Attach(win.Control("sle_gys"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));

        if (typeof (self.dw_1_Clicked) == "function")
            win.AttachEvent("dw_1", "Clicked", self.dw_1_Clicked);

        if (typeof (self.dw_1_DoubleClicked) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.dw_1_DoubleClicked);

        if (typeof (self.slectr_area2_EditChanged) == "function")
            win.AttachEvent("sle_spmc", "EditChanged", self.slectr_area2_EditChanged);

        if (typeof (self.slehth_EditChanged) == "function")
            win.AttachEvent("sle_shdw", "EditChanged", self.slehth_EditChanged);

        if (typeof (self.sletdh_EditChanged) == "function")
            win.AttachEvent("sle_gys", "EditChanged", self.sletdh_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

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
        tb_2.Detach(); tb_2 = null;
        sle_guojia.Detach(); sle_guojia = null;
        sle_spmc.Detach(); sle_spmc = null;
        sle_shdw.Detach(); sle_shdw = null;
        sle_gys.Detach(); sle_gys = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Ssgdmkhxxtx.ashx");



    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {

        self.Retrieve();
    }
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

//#region 数据查询
this.Retrieve = function () {
    var gj = sle_gj.GetText();
    var spmc = sle_spmc.GetText();
    var shdw = sle_shdw.GetText();
    var gys = sle_gys.GetText();

    dw_1.Retrieve(gj, spmc, shdw, gys);
    self.sle_EditChanged();
}
//#endregion

//#region 过滤客户
this.sle_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    var gj = sle_gj.GetText();
    var spmc = sle_spmc.GetText();
    var shdw = sle_shdw.GetText();
    var gys = sle_gys.GetText();
    var ls_filter = ""

    if (gj == null || gj == "") {
        //
    } else {
        if (ls_filter == "") {
            ls_filter = "( gjmc  like '%" + gj + "%')"
        } else {
            ls_filter = ls_filter + " and ( gjmc  like '%" + gj + "%')"
        }
    };

    if (spmc == null || spmc == "") {
        //
    } else {
        if (ls_filter == "") {
            ls_filter = "(cnspmc like '%" + spmc + "%') "
        } else {
            ls_filter = ls_filter + " and ( cnspmc like '%" + spmc + "%')"
        };
    };

    if (shdw == null || shdw == "") {
        //
    } else {
        if (ls_filter == "") {
            ls_filter = "(cnshdw like '%" + shdw + "%') "
        } else {
            ls_filter = ls_filter + " and ( cnshdw like '%" + shdw + "%')"
        };
    };


    if (gys == null || gys == "") {
        //
    } else {
        if (ls_filter == "") {
            ls_filter = "(gys like '%" + gys + "%') "
        } else {
            ls_filter = ls_filter + " and ( gys like '%" + gys + "%')"
        };
    };


    dw_1.SetFilter(ls_filter);
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
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


var iw_Country_Select = null;
var iw_Commodity_Select = null;
var iw_wldw_Select = null;
this.dw_1_Clicked = function (xPos, yPos, Row, dwoName) {
    if (dwoName == "gjmc") {
        if (iw_Country_Select == null)
            iw_Country_Select = new W_Country_Select();
        iw_Country_Select.SetDataWindow(dw_1);
        iw_Country_Select.SetRow(Row);
        iw_Country_Select.SetData("Ssgdmkhxxtx_gj");
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
        dw_1.SetFocus();
    }
    if (dwoName == "cnspmc") {
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
          
        dw_1.SetFocus();
    }
    if (dwoName == "cnshdw") {
        if (iw_wldw_Select == null)
            iw_wldw_Select = new W_Wldw_Select();
        iw_wldw_Select.SetDataWindow(dw_1);
        iw_wldw_Select.SetRow(Row);
        iw_wldw_Select.SetData("Ssgdmkhxxtx_shdw");
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select", iw_wldw_Select);
        dw_1.SetFocus();
    } 
}

this.dw_1_DoubleClicked = function (xPos, yPos, Row, dwoName) {
    
}

this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;


    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }

    for (var i = 1; i <= dw_1.RowCount(); i++) {
        var gjmc = dw_1.GetItemString(i, 'gjmc');
        var spmc = dw_1.GetItemString(i, 'cnspmc');
        var shdw = dw_1.GetItemString(i, 'cnshdw');
        var mxsp = dw_1.GetItemString(i, 'mxsp');
        if (mxsp != "Y") {
            if (gjmc == null || gjmc == "") {
                alert("国家名称不能为空!");
                return;
            } else if (spmc == null || spmc == "") {
                alert("商品名称不能为空!");
                return;
            } else if (shdw == null || shdw == "") {
                alert("收货单位不能为空!");
                return;
            }
            for (var j = 1; j <= dw_1.RowCount(); j++) {
                var j_gjmc = dw_1.GetItemString(j, 'gjmc');
                var j_shdw = dw_1.GetItemString(j, 'cnshdw');
                var j_mxsp = dw_1.GetItemString(j, 'mxsp');
                if (j_gjmc == gjmc && j_shdw == shdw && j_mxsp == "Y") {
                    alert("列表里已有收货单位与国家名称重复的数据是免选商品,如要更改,请先删除数据!");
                    return;
                }
            }
        } else if (mxsp == "Y") {
            if (gjmc == null || gjmc == "") {
                alert("国家名称不能为空!");
                return;
            } else if (shdw == null || shdw == "") {
                alert("收货单位不能为空!");
                return;
            }
            for (var j = 1; j <= dw_1.RowCount(); j++) {
                var j_gjmc = dw_1.GetItemString(j, 'gjmc');
                var j_shdw = dw_1.GetItemString(j, 'cnshdw');
                var j_mxsp = dw_1.GetItemString(j, 'mxsp');
                if (j_gjmc == gjmc && j_shdw == shdw && j_mxsp == "N") {
                    alert("列表里已有收货单位与国家名称重复的数据是非免选商品,如要更改,请先删除数据!");
                    return;
                }
            }
        }
    }

    var dw_d_data = dw_1.GetChanges();
    if (dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save", "dw_Master=" + dw_d_data);


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