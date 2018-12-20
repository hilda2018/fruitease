///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_DllTest() {

    var self = this;
    var requestor = new PBWindow();
    var st_ComputeName = new StaticText(requestor);
    var st_SystemDir = new StaticText(requestor);
    var st_WinDir = new StaticText(requestor);
    var dllTest = new DllTest(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (st_ComputeName == null) st_ComputeName = new StaticText(requestor);
        st_ComputeName.Attach(win.Control("st_ComputeName"));
        if (st_SystemDir == null) st_SystemDir = new StaticText(requestor);
        st_SystemDir.Attach(win.Control("st_SystemDir"));
        if (st_WinDir == null) st_WinDir = new StaticText(requestor);
        st_WinDir.Attach(win.Control("st_WinDir"));
        if (dllTest == null) dllTest = new DllTest(requestor);
        dllTest.Attach(win.Control("dllTest"));

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (dllTest.RunCalc) == "function")
            win.AttachEvent("cb_1", "Clicked", dllTest.RunCalc);

        if (typeof (dllTest.RunNotePad) == "function")
            win.AttachEvent("cb_2", "Clicked", dllTest.RunNotePad);

        if (typeof (self.Max) == "function")
            win.AttachEvent("cb_4", "Clicked", self.Max);

        if (typeof (self.Add) == "function")
            win.AttachEvent("cb_3", "Clicked", self.Add);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        st_ComputeName.Detach(); st_ComputeName = null;
        st_SystemDir.Detach(); st_SystemDir = null;
        st_WinDir.Detach(); st_WinDir = null;
        dllTest.Detach(); dllTest = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

	 this.PostOpen = function () {

	     st_SystemDir.SetText(dllTest.GetSystemDir());
	     st_WinDir.SetText(dllTest.GetWindowDir());
	     st_ComputeName.SetText(dllTest.GetComputeName());
	 }

	 this.Add = function () {
	     var val = dllTest.Add(100, 800);
	     requestor.MessageBox("提示", "F_Add(100,800)的计算结果为:" + val);
	 }
	 this.Max = function () {
	     var val = dllTest.Max(100, 800);
	     requestor.MessageBox("提示", "F_Max(100,800)的计算结果为:" + val);
	 }
}