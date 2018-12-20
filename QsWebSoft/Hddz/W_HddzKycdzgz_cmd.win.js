///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzKycdzgz_cmd() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_list","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_List_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_List_ItemChanged); 

		 if(typeof(self.dw_List_EntertoTab)=="function") 
			 win.AttachEvent("dw_list","KeyDown",self.dw_List_EntertoTab); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_list.Detach(); dw_list=null; 
		 tb_1.Detach(); tb_1=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";

var dw_mx = null;

var dwc = new DataWindowChild();
var dwc_zbr = new DataWindowChild();

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

var yybm = null;
this.SetYybm = function (parm) {
    yybm = parm;
}
 
 
//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hddz.ashx");
//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
    self.Retrieve();

}

//#region 数据查询
this.Retrieve = function () {
    if (self.CloseQuery() == 1)
        return;

    var hth = requestor.GetParm("hth");
    var zfbqk = requestor.GetParm("zfbqk");
    var zbmc = requestor.GetParm("zbmc");

    if (zbmc == "cdz") {
        zbmc = "原产地证";
    }
    else if (zbmc == "zjz") {
        zbmc = "植检证";
    }

    var beginDate = new Date(dp_begin.GetValue());
    var date = new Date();

    //把开始日期的时间部分设置为 00:00:00
    beginDate.setHours(0);
    beginDate.setMinutes(0);
    beginDate.setSeconds(0);

    if (beginDate > date) {
        requestor.MessageBox("提示", "开始日期不能大于当前时间!", ICON.StopSign);
        dp_Begin.SetFocus();
        return;
    }

    var userid = requestor.GetParm("userid");
    var ShareMode = requestor.GetParm("ShareMode");
    var Dlwtf = requestor.GetParm("Dlwtf");
    dw_list.SetRedraw(false);
    dw_list.Retrieve(beginDate.getVarDate(), hth, zfbqk, zbmc);
    dw_list.SetRedraw(true);
}
//#endregion

this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();

    if ((dw_list.ModifiedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }

   

}
//#endregion


//#region dw_list ItemChanged
this.dw_List_ItemChanged = function (row, dwoName, data) {

}
//#endregion

//#region dw_master entertotab
this.dw_List_EntertoTab = function (key, keyflags, dwo) {

}

//#region 关闭窗口
this.Exit = function () {
    requestor.Close();
}
//#endregion
 

}
