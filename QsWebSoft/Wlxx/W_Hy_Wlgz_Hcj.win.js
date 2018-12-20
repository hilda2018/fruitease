///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_Wlgz_Hcj() {

    var self = this;
    var requestor = new PBWindow();
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_Master_ButtonClicked) == "function")
            win.AttachEvent("dw_master", "ButtonClicked", self.dw_Master_ButtonClicked);

        if (typeof (self.dw_Master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_Master_Clicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_master", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_Master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_Master_ItemChanged);

        if (typeof (self.dw_Master_EntertoTab) == "function")
            win.AttachEvent("dw_master", "KeyDown", self.dw_Master_EntertoTab);

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

var Rwlx = null;
this.SetRwlx = function (parm) {
    Rwlx = parm;
}



//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hy_Wlgz_Hcj.ashx"); 

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
    dw_master.AcceptText(); 
    if ((dw_master.ModifiedCount()  ) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }

   

}
//#endregion

//#region 新建
this.Add = function () {
    var rwbh = requestor.GetParm("Rwbh")

    var ywbh = requestor.GetParm("ywbh")
    var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
    var rwmc = requestor.GetParm("rwmc");
    var cjmc = requestor.GetParm("cjmc");
    var rwmc_zw = "换车架";
    var row_insert = 0;
    if (rwbh == null || rwbh == "" || rwbh == null || rwbh == "null") {
        dw_master.InsertRow(0);
        dw_master.SetItem(1, "rwlx", rwmc_zw);
        dw_master.SetItem(1, "cjmc", cjmc);        

    } else {
        dw_master.Retrieve(rwbh);

    }

    
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
       
    }
    else {
        dw_master.Modify("DataWindow.Readonly=yes");
       
       
    }
};
//#endregion

 
//#region 存盘
this.save = function () {

    if (editMode == "show")
        return;

    if (dw_master.AcceptText() != 1)
        return;
    

    if ((dw_master.ModifiedCount() ) <= 0) {
        alert("没有数据需要保存!");
        return;
    }

    var rwbh = dw_master.GetItemString(1, "rwbh");


    dw_master.AcceptText();
 

    var dw_master_data = dw_master.GetChanges();
    


    if (dw_master_data == "" )
        return;

    requestor.MessageBox("","aaa")
    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save", "dw_master=" + dw_master_data  + "&rwbh=" + rwbh + "&operation=" + editMode);
    requestor.MessageBox("", "bbb")
    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
        rwbh = webReq.ResponseText();
        dw_master.SetItem(1, "rwbh", rwbh);
        dw_master.ResetUpdate();
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


//#region dw_Master ItemChanged
this.dw_Master_ItemChanged = function (Row, dwoName) {
    
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
    var colname = dwo.GetColumnName();
    if (colname == "ycyymc") { 
        return 0
    }
    else {        
 		return 1
    }
}

 

//#region 关闭窗口
this.Exit = function () {
    requestor.Close();
}
//#endregion

}
