///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Edit_Yflr() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_list_DoubleClicked) == "function")
            win.AttachEvent("dw_list", "DoubleClicked", self.dw_list_DoubleClicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_list", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_list_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_list_ItemChanged);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;
var iw_Country_Select = null;

var dw_mx = null;

//this.SetDataWindow = function (dw) {
//    dw_mx = dw;
//}
//var column = null;
//this.SetData = function (parm) {
//    column = parm;
//}
//var RowData = null;
//this.SetRow = function (parm) {
//    RowData = parm;
//}

var zbr = null;
this.SetZbr = function (parm) {
    zbr = parm;
}



//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hddz.ashx"); 

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
      self.Add();

    
}


this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();
    
    if ((dw_list.ModifiedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }
}
//#endregion

//#region 新建
this.Add = function () {
     
    var userid = requestor.GetParm("userid");
    if (zbr == userid) { 
        var li_row = dw_list.InsertRow(0);
        var date = new Date();     
        dw_list.SetItem(li_row, "zbr", userid);
        dw_list.SetItem(li_row, "zbrq", date.getDate());
    }
    else {        
        dw_list.Modify("DataWindow.Readonly=yes");
    }   

   
}
//#endregion


//#region 添加明细
this.AddRow = function () {
    var row = dw_list.InsertRow(0);
    dw_list.ScrollToRow(row);
    dw_list.SetFocus();
    var date = new Date();
    var userid = requestor.GetParm("userid");
    dw_list.SetItem(row, "zbr", userid);
    dw_list.SetItem(row, "zbrq", date.getDate());
}
//#endregion


//#region 删除商品
this.DeleteRow = function () {
    var status = dw_list.GetItemStatus(row, 0, DWBUFFER.Primary);
    if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
        if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
            dw_list.SetFocus();
            return;
        }
    }
    dw_list.DeleteRow(row);
}
//#endregion


//#region dw_list弹出选择
this.dw_list_DoubleClicked = function (xPos, yPos, Row, dwoName) {
    if (editMode == "show")
        return;


    if (dwoName == "khjc") {
        if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
        khlx = "gncgs";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var zydl = dw_list.GetItemString(Row, "zydl");
        var Dlxyh = dw_list.GetItemString(Row, "dlxyh");

        if (Dlxyh != null && Dlxyh != "") {
            requestor.MessageBox("提示", "代理协议号已经选择，不能再更改客户!", ICON.StopSign)
            return;
        }
        if (zydl == "代理") {
            iw_Wldw_Select.SetDataWindow(dw_list);
            iw_Wldw_Select.SetData("hddz_kh_dl");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_list.SetFocus();
        }
        if (zydl == "自营") {
            iw_Wldw_Select.SetDataWindow(dw_list);
            iw_Wldw_Select.SetData("hddz_kh_zy");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_list.SetFocus();
        }


    }



    if (dwoName == "cdgsjc") {
        if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
        khlx = "cdorhd";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Wldw_Select.SetDataWindow(dw_list);
        iw_Wldw_Select.SetData("hddz_cdgs");
        iw_Wldw_Select.SetRow(Row);
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_list.SetFocus();
    }

    if (dwoName == "cyrjc") {
        if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
        khlx = "cgsorhkgs";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Wldw_Select.SetDataWindow(dw_list);
        iw_Wldw_Select.SetData("hddz_cyr");
        iw_Wldw_Select.SetRow(Row);
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_list.SetFocus();
    }


    if (dwoName == "yfcdrjc") {
        var khorhd = dw_list.GetItemString(Row, "khorhd")

        if (khorhd == "客户") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            var khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_list);
            iw_Wldw_Select.SetData("hddz_yf_yfcdr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_list.SetFocus();
        }
        if (khorhd == "货代") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "hdgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_list);
            iw_Wldw_Select.SetData("hddz_yf_yfcdr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_list.SetFocus();
        }
    }
    if (dwoName == "jsdwjc") {
        var khorhd = dw_list.GetItemString(Row, "khorhd")
        if (khorhd == "货代") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            var khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_list);
            iw_Wldw_Select.SetData("hddz_jsdw");
            iw_Wldw_Select.SetRow(row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_list.SetFocus();
        }
    }

}
//#endregion

//#region dw_master ItemChanged
this.dw_list_ItemChanged = function (row, dwoName, data) {

    if (dwoName == "khorhd") {
        if (data == "客户") {
            var khbm = dw_list.GetItemString(row, "khbm")
            var khmc = dw_list.GetItemString(row, "khmc")
            var khjc = dw_list.GetItemString(row, "khjc")
            var khpym = dw_list.GetItemString(row, "khpym")

            dw_list.SetItem(row, "yfcdrbm", khbm)
            dw_list.SetItem(row, "yfcdr", khmc)
            dw_list.SetItem(row, "yfcdrjc", khjc)
            dw_list.SetItem(row, "yfcdrpym", khpym)

            dw_list.SetItem(row, "jsdwbm", null)
            dw_list.SetItem(row, "jsdwmc", null)
            dw_list.SetItem(row, "jsdwjc", null)
            dw_list.SetItem(row, "jsdwpym", null)
        }
        else if (data == "货代") {
            var hdgsbm = dw_list.GetItemString(row, "hdgsbm")
            var hdgsmc = dw_list.GetItemString(row, "hdgsmc")
            var hdgsjc = dw_list.GetItemString(row, "hdgsjc")
            var hdgspym = dw_list.GetItemString(row, "hdgspym")

            dw_list.SetItem(row, "yfcdrbm", hdgsbm)
            dw_list.SetItem(row, "yfcdr", hdgsmc)
            dw_list.SetItem(row, "yfcdrjc", hdgsjc)
            dw_list.SetItem(row, "yfcdrpym", hdgspym)

            var khbm = dw_list.GetItemString(row, "khbm")
            var khmc = dw_list.GetItemString(row, "khmc")
            var khjc = dw_list.GetItemString(row, "khjc")
            var khpym = dw_list.GetItemString(row, "khpym")

            dw_list.SetItem(row, "jsdwbm", khbm)
            dw_list.SetItem(row, "jsdwmc", khmc)
            dw_list.SetItem(row, "jsdwjc", khjc)
            dw_list.SetItem(row, "jsdwpym", khpym)

        };

    }



    if (dwoName == "ysfs") {
         
        var bghg = dw_list.GetItemString(row, "bghg")
        if (bghg == null || bghg == "") {
            if (data == "海运") {
                dw_list.SetItem(row, "bghgbm", "admin0612")
                dw_list.SetItem(row, "bghg", "龙吴海关")
                dw_list.SetItem(row, "bghgjc", "龙吴海关")
                dw_list.SetItem(row, "bghgpym", "lwhg")
            }
            if (data == "空运") {
                dw_list.SetItem(row, "bghgbm", "admin0618")
                dw_list.SetItem(row, "bghg", "浦东机场海关")
                dw_list.SetItem(row, "bghgjc", "浦东机场海关")
                dw_list.SetItem(row, "bghgpym", "pdjchg")
            }
        }

    }

    //如果是否有运费打勾，价格方式变为FOB
    if (dwoName == "sfyyf") {
        if (data == "Y") {
            dw_list.SetItem(row, "jgfs", "FOB")
            dw_list.SetItem(row, "yfbj", "3")
            dw_list.SetItem(row, "yfbb", "USD")
            dw_list.SetItem(row, "bxfbj", "1")
            dw_list.SetItem(row, "bxfbb", "USD")
            dw_list.SetItem(row, "bxfje", 0.3)
        } else {
            dw_list.SetItem(row, "khorhd", "")
            dw_list.SetItem(row, "yfcdrbm", "")
            dw_list.SetItem(row, "yfcdr", "")
            dw_list.SetItem(row, "yfcdrjc", "")
            dw_list.SetItem(row, "yfcdrpym", "")
            dw_list.SetItem(row, "jsdwbm", "")
            dw_list.SetItem(row, "jsdwmc", "")
            dw_list.SetItem(row, "jsdwjc", "")
            dw_list.SetItem(row, "jsdwpym", "")

        }

    }


    //货代提单默认需要二次换单
    if (dwoName == "sfshytd") {
        if (data == "Y")
        { dw_list.SetItem(row, "sfxyechd", "Y") }
        else { dw_list.SetItem(row, "sfxyechd", "N") };
    };

    //货代提单
    if (dwoName == "sfshytd") {
        if (data == "N") {
            dw_list.SetItem(row, "sfxyechd", "N");
            dw_list.SetItem(row, "ftdh", "");
            dw_list.SetItem(row, "hygsbm", "");
            dw_list.SetItem(row, "hygsmc", "");
            dw_list.SetItem(row, "hygsjc", "");
            dw_list.SetItem(row, "hygspym", "");
        }
    }

    
}
//#endregion


//#region 存盘
this.save = function () {
    if (dw_list.AcceptText() != 1)
        return;

    if ((dw_list.ModifiedCount() + dw_list.DeletedCount() <= 0)) {
        alert("没有数据需要保存!");
        return;
    }

    var dw_d_data = dw_list.GetChanges();
    if (dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    var editMode = "new";
    var ywbh = "";
    webReq.Invoke("YflrSave", "dw_master=" + dw_d_data + "&ywbh=" + ywbh + "&operation=" + editMode);

    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
        dw_list.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
        dw_list.SetFocus();
    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_list.SetFocus();
    }
}


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion

}
