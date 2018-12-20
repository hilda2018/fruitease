///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_WldwzjqkBeizhu() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ddlb_lx= new DropDownListBox( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ddlb_lx == null ) ddlb_lx= new DropDownListBox( requestor );
		 ddlb_lx.Attach( win.Control( "ddlb_lx") ); 

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

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.save); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.InsertRow); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("ddlb_lx","SelectionChanged",self.sle_EditChanged); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_list.Detach(); dw_list=null; 
		 tb_1.Detach(); tb_1=null; 
		 ddlb_lx.Detach(); ddlb_lx=null; 
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

var khmc = null;
this.SetKhmc = function (parm) {
    khmc = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}
var jdrmc1 = null;
this.Setjdrmc = function (parm) {
    jdrmc1 = parm
}
var jdrjc1 = null;
this.Setjdrjc = function (parm) {
    jdrjc1 = parm
}

 
//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hdfyfymx.ashx"); 

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
  var jdrbm = requestor.GetParm("jdrbm");
    var jdrpym = requestor.GetParm("jdrpym");
    dw_list.Retrieve(khmc, jdrbm);
    dw_list.AcceptText();

    var userid = requestor.GetParm("userid");
    var li_row = dw_list.InsertRow(0);
    var date = new Date();
    dw_list.SetItem(li_row, "jdrbm", jdrbm);
    dw_list.SetItem(li_row, "jdrmc", jdrmc1);
    dw_list.SetItem(li_row, "jdrjc", jdrjc1);
    dw_list.SetItem(li_row, "jdrpym", jdrpym);
    dw_list.SetItem(li_row, "khmc", khmc);
    dw_list.SetItem(li_row, "rq", date.getVarDate());
}
//#endregion

this.InsertRow = function () {
    var jdrbm = requestor.GetParm("jdrbm");
    dw_list.Retrieve(khmc,jdrbm);
    dw_list.AcceptText();

    var userid = requestor.GetParm("userid");
    var li_row = dw_list.InsertRow(0);
    var date = new Date();
    dw_list.SetItem(li_row, "khmc", khmc);
    dw_list.SetItem(li_row, "rq", date.getVarDate());
}

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
    webReq.Invoke("BeizhuSave", "dw_list=" + dw_d_data);


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

}
//#endregion

//#region 过滤客户
this.sle_EditChanged = function (text) {
    dw_list.SetRedraw(false);

    var lx = ddlb_lx.GetText();
    var ls_filter = ""

    if (lx == null || lx == "" || lx == "全部") {
        //处理人员 
    } else {
        if (ls_filter == "") {
            ls_filter = "(lx like '%" + lx + "%') "
        } else {
            ls_filter = ls_filter + " and ( lx like '%" + lx + "%')"
        };
    };

    dw_list.SetFilter(ls_filter);
    dw_list.Filter();
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion


//#region 关闭窗口
this.Exit = function () {
    requestor.Close();
}
//#endregion

}
