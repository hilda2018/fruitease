﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_FtpEdit() {

	 var self=this;
	 var requestor= new PBWindow();

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

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
      self.Add();
  }

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

//#region 新建
this.Add = function () {
    var ywbh = requestor.GetParm("ywbh")
    dw_list.Retrieve(column, "货代单证备注")
    dw_list.AcceptText()
   
    var userid = requestor.GetParm("userid");
    var li_row = dw_list.InsertRow(0);
    var date = new Date();
    dw_list.SetItem(li_row, "ywbh", column);
    dw_list.SetItem(li_row, "zbr", userid);
    dw_list.SetItem(li_row, "zbrq", date.getDate());
    if (dw_list.RowCount() > 0) {
        dw_list.GetChild("ycyybm", dwc);
        dwc.Retrieve(yybm + "%");
        dw_list.GetChild("zbr", dwc_zbr);
        dwc_zbr.Retrieve("%");
    }
}
//#endregion

//#region 存盘
this.save = function () {
    if (dw_list.AcceptText() != 1)
        return;

    if ((dw_list.ModifiedCount() + dw_list.DeletedCount() <= 0)) {
        alert("没有数据需要保存!");
        return;
    }

    var dw_d_data = dw_list.GetChanges();
    if (dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("YcyySave", "dw_list=" + dw_d_data);


    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号

        dw_list.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
        dw_list.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_list.SetFocus();
    }
}


//#region dw_list ItemChanged
this.dw_List_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "ycyyqc") {
        var date = new Date();
        var date_null = new Date("1900/1/1");
        if (data == "Y") {
            dw_list.SetItem(row, "ycyyqcsj", date.getVarDate())
        } else {
            dw_list.SetItem(row, "ycyyqcsj", date_null.getVarDate())
        }
    }

}
//#endregion

//#region dw_master entertotab
this.dw_List_EntertoTab = function (key, keyflags, dwo) {
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