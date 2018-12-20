///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_TreeView() {

    var self = this;
    var requestor = new PBWindow();
    var tv_1 = new TV_Category(requestor);
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ds_Categories = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (tv_1 == null) tv_1 = new TV_Category(requestor);
        tv_1.Attach(win.Control("tv_1"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ds_Categories == null) ds_Categories = new DataStore(requestor);
        ds_Categories.Attach(win.Control("ds_Categories"));

        

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        tv_1.Detach(); tv_1 = null;
        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        ds_Categories.Detach(); ds_Categories = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
    
}