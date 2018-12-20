///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Module_CheckPassword() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));

        if (typeof (self.Cancel) == "function")
            win.AttachEvent("cb_Cancel", "Clicked", self.Cancel);

        if (typeof (self.OK) == "function")
            win.AttachEvent("cb_OK", "Clicked", self.OK);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var Password = null;
    this.SetPassword = function (parm) {
        Password = parm;
    }

    var Node = null;
    this.SetNode = function (parm) {
        Node = parm;
    }

    var dwo = null;
    this.SetDwo = function (parm) {
        dwo = parm;
    }
    var parm1 = null;
    this.SetParm1 = function (parm) {
        parm1 = parm;
    }
    var parm2 = null;
    this.SetParm2 = function (parm) {
        parm2 = parm;
    }
    var parm3 = null;
    this.SetParm3 = function (parm) {
        parm3 = parm;
    }
    var parm4 = null;
    this.SetParm4 = function (parm) {
        parm4 = parm;
    }
    var parm5 = null;
    this.SetParm5 = function (parm) {
        parm5 = parm;
    }
    var parm6 = null;
    this.SetParm6 = function (parm) {
        parm6 = parm;
    }
    var parm7 = null;
    this.SetParm7 = function (parm) {
        parm7 = parm;
    }
    
   
    
    var webReq = null;
    this.OK = function () {
        dw_1.AcceptText();
        var oldPwd = dw_1.GetItemString(1, "OldPwd");
        if (oldPwd == Password) {           
            dwo.Retrieve(parm1, parm2, parm3, parm4, parm5, parm6, parm7)
            requestor.Close();

        } else {
            requestor.MessageBox("提示", "您输入的密码不正确，请重新输入!", ICON.StopSign);
            dw_1.SetColumn("oldPwd");
            dw_1.SetFocus();
            return;
        }

    }
 
    //取消按钮事件  
    this.Cancel = function () {
        requestor.Close(); 

    }
  
}