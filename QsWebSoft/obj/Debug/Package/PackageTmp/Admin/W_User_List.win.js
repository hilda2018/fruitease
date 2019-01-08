///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_User_List() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_FindText = new SingleLineEdit(requestor);

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

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_FindText.Detach(); sle_FindText = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改


    var iw_Edit = null; 
    var iw_SetPassword = null;
    var iw_SetRoles = null; 

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
            iw_Edit = new W_User_Edit();
            iw_Edit.SetListDataWindow(dw_1);
        }
        if (dw_1.RowCount() > 0) {
            var id_max = escape(dw_1.GetItemString(1, "id_max"));
        } else {
            var id_max =  requestor.GetParm("userid")+"001";
        }

        requestor.Open("/LoadWindow.ashx?WinName=Admin.W_User_Edit" + '&id_max=' + id_max, iw_Edit);
    }

    this.Edit = function () {
        if (dw_1.GetRow() <= 0)
            return;

        if (iw_Edit == null) {
            iw_Edit = new W_User_Edit();
            iw_Edit.SetListDataWindow(dw_1);
        }

        var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
        var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
        if (sfszzh == "Y") {
            requestor.MessageBox("提示","本帐户不是子帐户,不能修改！")
            return;
        }
        requestor.Open("/LoadWindow.ashx?WinName=Admin.W_User_Edit&ID=" + id, iw_Edit);
    }

        this.Delete = function () {
            if (dw_1.GetRow() <= 0)
                return;
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "Y") {
                requestor.MessageBox("提示", "本帐户不是子帐户,不能删除！")
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
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "Y") {
                requestor.MessageBox("提示", "本帐户不是子帐户,不能设置！")
                return;
            }

            if (iw_SetPassword == null)
                iw_SetPassword = new W_Sys_User_SetPassword();

            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
             
            requestor.Open("/LoadWindow.ashx?WinName=Admin.W_Sys_User_SetPassword&ID=" + id, iw_SetPassword);
        }

        this.SetRoles = function () {
           

            if (dw_1.GetRow() <= 0)
                return;

            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "Y"  ) {
                requestor.MessageBox("提示", "本帐户不是子帐户,不能设置！")
                return;
            }

            if (iw_SetRoles == null)
                iw_SetRoles = new W_User_SetRoles();

            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
            requestor.Open("/LoadWindow.ashx?WinName=Admin.W_User_SetRoles&ID=" + id, iw_SetRoles);

        }
        this.dw_1_DoubleClicked = function (xPos, yPos, Row, data) {
            if (Row == 0)
                return;

            self.Edit(); 
        }
    }

var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Users.ashx");
