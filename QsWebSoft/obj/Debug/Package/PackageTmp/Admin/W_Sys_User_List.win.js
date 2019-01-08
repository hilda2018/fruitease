///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Sys_User_List() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_FindText = new SingleLineEdit(requestor);
    var ddlb_zhlx = new DropDownListBox(requestor);
    var sle_dydw = new SingleLineEdit(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_FindText == null) sle_FindText = new SingleLineEdit(requestor);
        sle_FindText.Attach(win.Control("sle_FindText"));
        if (ddlb_zhlx == null) ddlb_zhlx = new DropDownListBox(requestor);
        ddlb_zhlx.Attach(win.Control("ddlb_zhlx"));
        if (sle_dydw == null) sle_dydw = new SingleLineEdit(requestor);
        sle_dydw.Attach(win.Control("sle_dydw"));

        if (typeof (self.dw_1_DoubleClicked) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.dw_1_DoubleClicked);

        if (typeof (self.Filter) == "function")
            win.AttachEvent("sle_FindText", "Modified", self.Filter);

        if (typeof (self.Add) == "function")
            win.AttachEvent("btn_Add", "Clicked", self.Add);

        if (typeof (self.Edit) == "function")
            win.AttachEvent("btn_Edit", "Clicked", self.Edit);

        if (typeof (self.Delete) == "function")
            win.AttachEvent("btn_Delete", "Clicked", self.Delete);

        if (typeof (self.SetPassword) == "function")
            win.AttachEvent("btn_SetPassword", "Clicked", self.SetPassword);

        if (typeof (self.SetRoles) == "function")
            win.AttachEvent("btn_SetRoles", "Clicked", self.SetRoles);

        if (typeof (self.dw_1_SelectionChanged) == "function")
            win.AttachEvent("ddlb_zhlx", "SelectionChanged", self.dw_1_SelectionChanged);

        if (typeof (self.sledydw_EditChanged) == "function")
            win.AttachEvent("sle_dydw", "EditChanged", self.sledydw_EditChanged);

        if (typeof (self.wldw) == "function")
            win.AttachEvent("btn_wldw", "Clicked", self.wldw);

        if (typeof (self.Copy_Power) == "function")
            win.AttachEvent("btn_1", "Clicked", self.Copy_Power);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_FindText.Detach(); sle_FindText = null;
        ddlb_zhlx.Detach(); ddlb_zhlx = null;
        sle_dydw.Detach(); sle_dydw = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改


    var iw_Edit = null; 
    var iw_SetPassword = null;
    var iw_SetRoles = null;
    var iW_Sys_User_SetPower = null;
    var iw_SetBType = null;

    this.Filter = function (text) {
        if (text == "")
            dw_1.SetFilter("");
        else
            dw_1.SetFilter("( ID like '%" + text + "%') or ( name like '%" + text + "%') ");

        dw_1.Filter();
        dw_1.Sort();
    }


    this.Add = function () {
        if (iw_Edit == null) {
            iw_Edit = new W_Sys_User_Edit();
            iw_Edit.SetListDataWindow(dw_1);
        }
        requestor.Open("/LoadWindow.ashx?WinName=Admin.W_Sys_User_Edit", iw_Edit);
    }

    this.dw_1_SelectionChanged = function () {
        var zhlx = ddlb_zhlx.GetText();
        var ls_filter = "";
        if (zhlx == "内部账号") {
            ls_filter = "dlwtf = '' or isnull(dlwtf)";

        } else if (zhlx == "客户帐号") {
            ls_filter = "len(dlwtf) >1";
        }

        dw_1.SetFilter(ls_filter);
        dw_1.Filter();

    }

    //#region 过滤合同号
    this.sledydw_EditChanged = function (text) {
        dw_1.SetRedraw(false);
        if (text == "")
            dw_1.SetFilter("");
        else
            dw_1.SetFilter("( Upper(dydw) like '%" + text + "%')  or ( Lower(dydw) like '%" + text + "%')");
        dw_1.Filter();
        dw_1.Sort();
        dw_1.SetRedraw(true);
    }
    //#endregion

     this.Edit = function () {
            if (dw_1.GetRow() <= 0)
                return;

            if (iw_Edit == null) {
                iw_Edit = new W_Sys_User_Edit();
                iw_Edit.SetListDataWindow(dw_1);
             }
            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "N") {
                requestor.MessageBox("提示", "本帐户是客户增加的帐户,注意是否需要修改！")
//                return;
            }
            requestor.Open("/LoadWindow.ashx?WinName=Admin.W_Sys_User_Edit&ID=" + id, iw_Edit);
        }

        this.Delete = function () {
            if (dw_1.GetRow() <= 0)
                return;
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "N") {
                requestor.MessageBox("提示", "本帐户是客户增加的帐户,不能删除！")
                return;
            }
            if (requestor.MessageBox("提示", "真的要删除当前选择的用户吗?", ICON.Question, BUTTON.YesNo) == 2) {
                dw_1.SetFocus();
                return;
            }

            webReq.Invoke("Delete", "id=" + escape(dw_1.GetItemString(dw_1.GetRow(), "ID")));
            if (webReq.StatusCode() == 200) {
                dw_1.RowsDiscard(dw_1.GetRow(), dw_1.GetRow(), DWBUFFER.Primary);
                dw_1.SetFocus(); 
            }
            else {
                requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            }
            dw_1.SetFocus();
        }

        
        this.SetPassword = function () {
            if (dw_1.GetRow() <= 0)
                return;
            if (iw_SetPassword == null)
                iw_SetPassword = new W_Sys_User_SetPassword();

            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
             
            requestor.Open("/LoadWindow.ashx?WinName=Admin.W_Sys_User_SetPassword&ID=" + id, iw_SetPassword);
        }

        this.SetRoles = function () {

            if (dw_1.GetRow() <= 0)
                return;
            if (iw_SetRoles == null)
                iw_SetRoles = new W_Sys_User_SetRoles();

            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "N") {
                requestor.MessageBox("提示", "本帐户是客户增加的帐户,不能修改权限！")
                return;
            }
            requestor.Open("/LoadWindow.ashx?WinName=Admin.W_Sys_User_SetRoles&ID=" + id, iw_SetRoles);

        }
        //往来单位设置
        this.wldw = function () {

            if (dw_1.GetRow() <= 0)
                return;
            if (iw_SetBType == null)
                iw_SetBType = new W_Sys_User_SetBType();
                  
            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
            var name = dw_1.GetItemString(dw_1.GetRow(), "name");

            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "N") {
                requestor.MessageBox("提示", "本帐户是客户增加的帐户,不能修改权限！")
                return;
            }
           
            requestor.Open("/LoadWindow.ashx?WinName=Admin.W_Sys_User_SetBType&ID=" + id + "&Name=" + name, iw_SetBType);

        }

        this.Copy_Power = function () {
            if (dw_1.GetRow() <= 0)
                return;
            if (iW_Sys_User_SetPower == null)
                iW_Sys_User_SetPower = new W_Sys_User_SetPower();

            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "N") {
                requestor.MessageBox("提示", "本帐户是客户增加的帐户,不能修改权限！")
                return;
            }
            requestor.Open("/LoadWindow.ashx?WinName=Admin.W_Sys_User_SetPower&ID=" + id, iW_Sys_User_SetPower);
        }




        this.dw_1_DoubleClicked = function (xPos, yPos, Row, data) {
            if (Row == 0)
                return;

            self.Edit(); 
        }
    }

var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Sys_Users.ashx");
