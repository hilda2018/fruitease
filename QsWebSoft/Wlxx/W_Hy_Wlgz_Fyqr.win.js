﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_Wlgz_Fyqr() {

    var self = this;
    var requestor = new PBWindow();
    var dw_jzxxx = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var dw_dcrw = new DataWindow(requestor);
    var dw_wldz = new DataWindow(requestor);
    var dw_rwxz = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ds_fybz = new DataStore(requestor);
    var ds_fyjs = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_jzxxx == null) dw_jzxxx = new DataWindow(requestor);
        dw_jzxxx.Attach(win.Control("dw_jzxxx"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (dw_dcrw == null) dw_dcrw = new DataWindow(requestor);
        dw_dcrw.Attach(win.Control("dw_dcrw"));
        if (dw_wldz == null) dw_wldz = new DataWindow(requestor);
        dw_wldz.Attach(win.Control("dw_wldz"));
        if (dw_rwxz == null) dw_rwxz = new DataWindow(requestor);
        dw_rwxz.Attach(win.Control("dw_rwxz"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ds_fybz == null) ds_fybz = new DataStore(requestor);
        ds_fybz.Attach(win.Control("ds_fybz"));
        if (ds_fyjs == null) ds_fyjs = new DataStore(requestor);
        ds_fyjs.Attach(win.Control("ds_fyjs"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_master_ButtonClicked) == "function")
            win.AttachEvent("dw_master", "ButtonClicked", self.dw_master_ButtonClicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.dw_rwxz_ButtonClicked) == "function")
            win.AttachEvent("dw_rwxz", "ButtonClicked", self.dw_rwxz_ButtonClicked);

        if (typeof (self.dw_rwxz_ItemChanged) == "function")
            win.AttachEvent("dw_rwxz", "ItemChanged", self.dw_rwxz_ItemChanged);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_1", "Clicked", self.AddRow);

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

        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_master.Detach(); dw_master = null;
        dw_dcrw.Detach(); dw_dcrw = null;
        dw_wldz.Detach(); dw_wldz = null;
        dw_rwxz.Detach(); dw_rwxz = null;
        tb_1.Detach(); tb_1 = null;
        ds_fybz.Detach(); ds_fybz = null;
        ds_fyjs.Detach(); ds_fyjs = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";

var dw_mx = null;

var dwc = new DataWindowChild();
var dwc_zbr = new DataWindowChild();
var iw_Sj_Select = null;
var iw_Sjmc_Select = null;
var iw_Wldw_Select = null;
var iw_Cj_Select = null;
 
this.SetDataWindow = function (dw) {
    dw_mx = dw;
}
var column = null;
this.SetData = function (parm) {
    column = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

 


//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hy_Wlgz_Fyqr.ashx"); 

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
    dw_rwxz.ShareData(dw_dcrw);
    dw_master.SetFocus();
    var operation = requestor.GetParm("operation");

    if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
        if (operation == "open") {
           
            self.SetEditMode("open");
            self.Add();
        }
    }
    else {
       
        self.SetEditMode("show");
    };

}

this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_master.AcceptText();

    if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }

   

}
//#endregion

//#region 新建
this.Add = function () {
    var rwbh = requestor.GetParm("Rwbh")
    dw_master.Retrieve(rwbh);
    dw_jzxxx.Retrieve(rwbh);
    
    var ywbh = requestor.GetParm("ywbh")
    var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
    dw_rwxz.Retrieve(ywbh, hddz_cxh, rwbh);
    dw_wldz.Retrieve(ywbh, hddz_cxh);
    if (dw_jzxxx.RowCount() < 1) {
        self.Fyjs();
    }
}
//#endregion

//#region dw_master ItemChanged
this.dw_master_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "jsfs") {
        self.Fyjs();
    }
};
//#endregion

//#region 费用模板重新读取
this.dw_master_ButtonClicked = function (Row, dwoName) {
    if (dwoName == "b_fyjs") {
        self.Fyjs();
    }
 }
//#endregion

//#region 费用模板重新读取
this.Fyjs = function () {
    dw_master.AcceptText();
    var sfsc = dw_master.GetItemString(1, "sfsc");
    if (sfsc == null || sfsc == "") {
        sfsc = "N";
    }
    for (i = 2; i <= dw_jzxxx.RowCount(); i++) {
        var dz_sf_ks = dw_jzxxx.GetItemString(i, "dz_sf_ks");
        var dz_dq_ks = dw_jzxxx.GetItemString(i, "dz_dq_ks");
        var dz_lm_ks = dw_jzxxx.GetItemString(i, "dz_lm_ks");
        var dz_sf_zz = dw_jzxxx.GetItemString(i, "dz_sf");
        var dz_dq_zz = dw_jzxxx.GetItemString(i, "dz_dq");
        var dz_lm_zz = dw_jzxxx.GetItemString(i, "dz_lm");
        if (dz_sf_ks != "上海") {
            dz_lm_ks = "all";
        };
        if (dz_sf_zz != "上海") {
            dz_lm_zz = "all";
        };
         ds_fyjs.Retrieve(dz_sf_ks, dz_dq_ks, dz_lm_ks, dz_sf_zz, dz_dq_zz, dz_lm_zz, sfsc);
        var je = 0;
        if (ds_fyjs.RowCount() > 0) {
            je = ds_fyjs.GetItemNumber(1, "je");
        }

        dw_jzxxx.SetItem(i, "fyje", je);

    };

}
 //#endregion

//#region 设置窗口是否可编辑
this.SetEditMode = function (newMode) {
    editMode = newMode;
    var bEditFlag = false;
    if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
        bEditFlag = true;
    }
    else {
        bEditFlag = false;
    };
  
    tb_1.SetVisible("btn_save", bEditFlag); 
    tb_1.SetVisible("btn_rowdelete", bEditFlag); 
    

    if (bEditFlag) {
        dw_master.Modify("DataWindow.Readonly=no");
        dw_jzxxx.Modify("DataWindow.Readonly=no");
        dw_rwxz.Modify("DataWindow.Readonly=yes");
        
    }
    else {
        dw_master.Modify("DataWindow.Readonly=yes");
        dw_jzxxx.Modify("DataWindow.Readonly=yes");
        dw_rwxz.Modify("DataWindow.Readonly=yes");
       
    }
};
//#endregion

//#region 添加明细
this.AddRow = function () {     
        var row = dw_jzxxx.InsertRow(0);
        dw_jzxxx.ScrollToRow(row);
    }
    //#endregion

 //#region 删除商品
this.DeleteRow = function () {
    var row = dw_jzxxx.GetRow();
    if (row <= 0)
        return;
    var status = dw_jzxxx.GetItemStatus(row, 0, DWBUFFER.Primary);
        if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
            if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                dw_jzxxx.SetFocus();
                return;
            }
        }
        dw_jzxxx.DeleteRow(row);   
}
//#region 存盘
this.save = function () {
    if (editMode == "show")
        return;
    dw_master.AcceptText();
    dw_jzxxx.AcceptText();

    if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }

    var rwbh = dw_master.GetItemString(1, "rwbh");


    //更新行号

    if (dw_jzxxx.RowCount() > 0) {
        dw_master.SetItem(1, "fysfqr", "Y");
    };
    for (row = dw_jzxxx.RowCount(); row > 0; row--) {
        var fymc = dw_jzxxx.GetItemString(row, "fymc_jsl");
        dw_jzxxx.SetItem(row, "fymc", fymc);
    }
    

    if (dw_jzxxx.AcceptText() != 1)
        return;
//    dw_master.AcceptText()
//    if (dw_master.AcceptText() != 1)
//        return;


    var dw_master_data = dw_master.GetChanges();
    var dw_jzxxx_data = dw_jzxxx.GetChanges();

    if (dw_master_data == "" && dw_jzxxx_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&rwbh=" + rwbh + "&operation=" + editMode);

    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
        rwbh = webReq.ResponseText();
        dw_master.SetItem(1, "rwbh", rwbh);


        dw_master.ResetUpdate();
        dw_jzxxx.ResetUpdate();

        self.SetEditMode("open");
        requestor.MessageBox("提示", "数据保存成功!");
        dw_master.Modify("rwbh.Tabsequence=0");

        self.Exit();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_master.SetFocus();
    }
}


//#region dw_jzxxx_ItemChanged
this.dw_jzxxx_ItemChanged = function (Row, dwoName, data) {
     //
};
//#endregion

 

//#region dw_Master Clicked
this.dw_Master_ButtonClicked = function (Row, dwoName) {
    if (dwoName == "b_cph") {
        if (iw_Sj_Select == null)
            iw_Sj_Select = new W_Sj_Select();
        sjlx = "hy";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Sj_Select.SetDataWindow(dw_master);
        iw_Sj_Select.SetRow(Row);
        iw_Sj_Select.SetData("wlgz_sj");

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx+ "&Cdbm= '" + "'", iw_Sj_Select);
        dw_master.SetFocus();
    }

    if (dwoName == "b_sjmc") {
        if (iw_Sjmc_Select == null)
            iw_Sjmc_Select = new W_Sjmc_Select();
        sjlx = "hy";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Sjmc_Select.SetDataWindow(dw_master);
        iw_Sjmc_Select.SetRow(Row);
        iw_Sjmc_Select.SetData("wlgz_sjmc");
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sjmc_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Sjmc_Select);
        dw_master.SetFocus();
    }

    if (dwoName == "b_cdmc") {
        if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
        khlx = "cd";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Wldw_Select.SetDataWindow(dw_master);
        iw_Wldw_Select.SetData("wlgz_cd");
        iw_Wldw_Select.SetRow(Row);
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_master.SetFocus();
    }

    if (dwoName == "b_cjmc") {
        if (iw_Cj_Select == null)
            iw_Cj_Select = new W_Cj_Select();
        sjlx = "hy";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Cj_Select.SetDataWindow(dw_master);
        iw_Cj_Select.SetRow(Row);
        iw_Cj_Select.SetData("wlgz_cj");
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Cj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Cj_Select);
        dw_master.SetFocus();
    }
}
//#endregion

 


//#region dw_master entertotab
this.dw_Master_EntertoTab = function (key, keyflags, dwo) {
    
}
 

//#region 关闭窗口
this.Exit = function () {
    requestor.Close();
}
//#endregion

}