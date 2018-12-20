///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_XtXq_TaskEdit() {

    var self = this;
    var requestor = new PBWindow();
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ds_1 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        ds_1.Detach(); ds_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Hddz_Hdf_Select = null;
    var dwc = new DataWindowChild();
    var iw_Wldw_Select = null;
    var iw_Wldw_Zfdx_Select = null;
    var iw_Wldw_Yh_Select = null;
    var iw_Tszx_Hth_Select = null;
    var iw_Fj_Edit = null;
    
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Tszx.ashx");

    
    
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
       
        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no"); 
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");            
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus();
         var operation = requestor.GetParm("operation");
       
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else {
            self.SetEditMode("show");
        };


    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
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
        if (editMode == "show")
            return;

        dw_master.AcceptText(); 

        if ((dw_master.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;


        if ((dw_master.ModifiedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
        var id = dw_master.GetItemString(1, "id");
        var dw_master_data = dw_master.GetChanges();

        if (dw_master_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        
        webReq.Invoke("TaskEditSave", "dw_master=" + dw_master_data + "&id=" + id);
        
        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            id = webReq.ResponseText();
            //dw_master.SetItem(1, "zxbh", zxbh);

            dw_master.SetItem(1, "id", id)
            dw_master.ResetUpdate();

            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("zxbh.Tabsequence=0");

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion



    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);


        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");

        var date = new Date();
        var ywyobj = new Array(2);
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid(userid).value;
        
        if (ywyobj == null) {
            var ywy = "";
            var bm = "";
        }
        else {
            if (ywyobj.length == 0) {
                var ywy = "";
                var bm = "";

            }
            else {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }

        dw_master.SetItem(1, 'task_inputuser', userid);
        dw_master.SetItem(1, 'task_inputdate', date.getVarDate());
        self.SetEditMode("new");

    }


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "zxbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate()); 
        
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        if (dwoName == "yw_khbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            var khlx = "";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("tszx_kh");


            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }
        if (dwoName == "hth_t") {
            if (iw_Tszx_Hth_Select == null)
                iw_Tszx_Hth_Select = new W_Tszx_Hth_Select();
            iw_Tszx_Hth_Select.SetDataWindow(dw_master);
            iw_Tszx_Hth_Select.SetData("tszx");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Tszx_Hth_Select", iw_Tszx_Hth_Select);
            dw_master.SetFocus();
        }


        //        if (dwoName == "sjskrkhyh_t") {
        //            if (iw_Wldw_Yh_Select == null)
        //                iw_Wldw_Yh_Select = new W_Wldw_Yh_Select();
        //            var sjskrbm = dw_master.GetItemString(1, "sjskrbm");
        //            var ywy = requestor.GetParm("userid");
        //            var ShareMode = requestor.GetParm("ShareMode");
        //            var Dlwtf = requestor.GetParm("Dlwtf");
        //            iw_Wldw_Yh_Select.SetDataWindow(dw_master);
        //            iw_Wldw_Yh_Select.SetData("hdfyhdf_sjskryh");
        //            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Yh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&yw_khbm=" + sjskrbm, iw_Wldw_Yh_Select);
        //            dw_master.SetFocus();

        //        }

        if (dwoName == "fj") {
            var ywbh = dw_master.GetItemString(1, "id");
            requestor.MessageBox
            if (ywbh == "" || ywbh == null) {
                requestor.MessageBox("", "请先保存再上传附件!");
                return;
            }
            if (iw_Fj_Edit == null)
                iw_Fj_Edit = new W_Fj_Edit();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var lx = "xtxq"
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
            dw_master.SetFocus();
            dw_master.ScrollToRow(Row)
        }


    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "fl") {
            if (data != "投诉") {
                dw_master.SetItem(row, "btsbm", "")
                dw_master.SetItem(row, "btsry", "")
            }
        }
    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
       
    }
    //#endregion

     
//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    

    


}





