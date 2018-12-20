///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />
var ts_1;
function W_Index() {

    var self = this;
    var requestor = new PBWindow();
     ts_1 = new TabStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (ts_1 == null) ts_1 = new TabStrip(requestor);
        ts_1.Attach(win.Control("ts_1"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        ts_1.Detach(); ts_1 = null;
        requestor.Detach(); requestor = null;
        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
     
    this.PostOpen = function () {
       
        ts_1.Open("009058", "系统首页", "", "/OpenWindow.aspx?FunID=009058" , true);

    }

 }