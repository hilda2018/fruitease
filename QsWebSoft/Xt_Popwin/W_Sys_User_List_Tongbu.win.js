///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Sys_User_List_Tongbu() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_Id = new SingleLineEdit(requestor);

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
        if (sle_Id == null) sle_Id = new SingleLineEdit(requestor);
        sle_Id.Attach(win.Control("sle_Id"));

        if (typeof (self.OK) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.OK);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.sle_Id_EditChanged) == "function")
            win.AttachEvent("sle_Id", "EditChanged", self.sle_Id_EditChanged);

        if (typeof (self.OK) == "function")
            win.AttachEvent("btn_ok", "Clicked", self.OK);

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
        sle_Id.Detach(); sle_Id = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//    var dw_mx = null;

//    this.SetDataWindow = function (dw) {
//        dw_mx = dw;
//    }
//    var column = null;
//    this.SetData = function (parm) {
//        column = parm;
//    }
//    var RowData = 1;
//    this.SetRow = function (parm) {
//        RowData = parm;
//    }

//    var dw_mx_gnkh = null;

//    this.SetDataWindow_gnkh = function (dw) {
//        dw_mx_gnkh = dw;
//    }

//    var dw_mx_lxr = null;

//    this.SetDataWindow_lxr = function (dw) {
//        dw_mx_lxr = dw;
//    };


    this.OK = function () {

        var row = dw_1.GetRow();

        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要同步的用户名!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var ID_B = requestor.GetParm("id");
        var ID_A = dw_1.GetItemString(dw_1.GetRow(), "id");

        var num = QsWebSoft.PubMethod.TongbuA_B(ID_A, ID_B).value;
        if (num = 1) {
            alert("同步成功！");
        } else {
            alert("同步失败！");
        }
        requestor.Close();

    }

    this.ck = function () {
        
    }
        this.Exit = function () {
            requestor.Close();
        }
        //#region 过滤
        this.sle_EditChanged = function (text) {
           
            dw_1.SetRedraw(false);
            if (text == "")
                dw_1.SetFilter("");
            else
                dw_1.SetFilter("Upper(name) like Upper('%" + text + "%')");
            dw_1.Filter();
            dw_1.Sort();
            dw_1.SetRedraw(true);
        }
//        this.sle_EditChanged = function (text) {
//            dw_1.SetRedraw(false);
//            if (text == "")
//                dw_1.SetFilter("");
//            else
//                dw_1.SetFilter("Upper(name) like Upper('%" + text + "%') ");
//            dw_1.Filter();
//            dw_1.Sort();
//            dw_1.SetRedraw(true);
//        }
        this.sle_Id_EditChanged = function (text) {
            dw_1.SetRedraw(false);
            if (text == "")
                dw_1.SetFilter("");
            else
                dw_1.SetFilter("Upper(id) like Upper('%" + text + "%') ");
            dw_1.Filter();
            dw_1.Sort();
            dw_1.SetRedraw(true);
        }
        //#region 增加
        var iw_WldwAdd = null;
        this.Add = function () {
            var yw_khbm = null;
            
            if (iw_WldwAdd == null)
                iw_WldwAdd = new W_WldwAdd_New();
            iw_WldwAdd.SetListDataWindow(dw_1);
            iw_WldwAdd.SetData("yw_khbm");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_WldwAdd_New", iw_WldwAdd);
           
            self.Retrieve();

        }
        //#endregion
        //点击显示出港区和检疫点
        this.Show_Jyd_Clicked = function () {
            dw_1.Retrieve('1');
        }

        //#region 刷新
        this.Retrieve = function () {
            var userid = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var khlx = requestor.GetParm("khlx");
            var fgflx = requestor.GetParm("fgflx");

           
            if (fgflx == "hdgs") {
                fgflx = "货代公司";
            }

            if (fgflx == "bggs") {
                fgflx = "报关公司";
            }

            if (khlx == null) {
                khlx = "全部";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "gwgys") {
                khlx = "国外供应商";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "gncgs") {
                khlx = "国内采购商";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "all") {
                khlx = "全部";
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
            else if (khlx == "fgf") {
                dw_1.DataWindowObject = "dw_ywy_wldw_fgf_select";
                dw_1.Retrieve(fgflx);
            }
            else {
                dw_1.Retrieve(ShareMode, userid, Dlwtf, khlx);
            }
             

            dw_1.Modify("DataWindow.Readonly=yes");

        }
        //#endregion

        //#region 获取字符串长度
        function len(s) {
            var l = 0;
            var a = s.split("");
            for (var i = 0; i < a.length; i++) {
                if (a[i].charCodeAt(0) < 299)
                { l++; }
                else { l += 2; }
            }
            return l;
        }

        //#endregion

}