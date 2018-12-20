///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Sfdqlm_Select_New() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_list.Detach(); dw_list=null; 
		 tb_1.Detach(); tb_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;
var iw_Country_Select = null;
var dwc_dq = new DataWindowChild();
var dwc_lm = new DataWindowChild();
var dwc_qh = new DataWindowChild();
var dwc_sc = new DataWindowChild();
  

var column = null;
this.SetData = function (parm) {
    column = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Wldw.ashx");

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
    
    dw_list.Retrieve();
}

var dw_List = null;
this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();


    if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }
}
//#endregion

  

//#region 存盘
this.save = function () {
    if (dw_list.AcceptText() != 1)
        return;


    if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }

    dw_list.AcceptText()

    for (row = dw_list.RowCount(); row > 0; row--) {
        var prv_name_jsl = dw_list.GetItemString(row, "prv_name_jsl");
        dw_list.SetItem(row, "prv_name", prv_name_jsl);
    }


    var dw_list_data = dw_list.GetChanges();

    if (dw_list_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("SfdqlmListSave", "dw_list=" + dw_list_data);

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
};
//#endregion

 

//#region 获得数据窗口的焦点
var lastdw = new DataWindow();
this.dw_GetFocus = function (sender) {
    lastdw.Attach(sender);
};
//#endregion

 


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion


//#region 添加明细
this.AddRow = function () {
    var row = dw_list.InsertRow(0); 
     
    dw_list.ScrollToRow(row);
    
    dw_list.SetFocus();

}
//#endregion

//#region 删除商品
this.DeleteRow = function () {
    var row = dw_list.GetRow();
    if (row <= 0)
         return; 
    var status = dw_list.GetItemStatus(row, 0, DWBUFFER.Primary);

    if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
        dw_list.SetFocus();
        return;
    }
    }
    dw_list.DeleteRow(row);
  
}
//#endregion

////#region 单击明细单编号
//this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
//    if (Row > 0) {
//        fzks_row = Row;
//    };
//    if (dwoName == "dz_dq") {
//        var dz_sf = dw_list.GetItemString(Row, "dz_sf");
//        dw_list.GetChild("dz_dq", dwc_dq);
//        dwc_dq.SetFilter("");
//        dwc_dq.Filter();

//        dwc_dq.SetFilter("prv_name = '" + dz_sf + "'");
//        dwc_dq.Filter();

//    }

//    if (dwoName == "dz_lm") {
//        var dz_sf = dw_list.GetItemString(Row, "dz_sf");
//        var dz_dq = dw_list.GetItemString(Row, "dz_dq");
//        dw_list.GetChild("dz_lm", dwc_lm);
//        dwc_lm.SetFilter("");
//        dwc_lm.Filter();

//        dwc_lm.SetFilter("prv_name = '" + dz_sf + "' and area_name = '" + dz_dq + "'");
//        dwc_lm.Filter();

//    }

//}
////#endregion


this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
    if (dwoName == "area_name") {
        dw_list.GetChild("area_name", dwc_qh);
        var prv_code = dw_list.GetItemString(Row, "prv_code"); 
        if (prv_code.length > 0) {
            dwc_qh.SetFilter("");
            dwc_qh.Filter();            
            dwc_qh.SetFilter("prv_code = '" + prv_code + "'");
            dwc_qh.Filter();
        } else {
            dwc_qh.SetFilter("");
            dwc_qh.Filter();
        }
    }

    if (dwoName == "sc") {
        var lx = dw_list.GetItemString(Row, "lx");
        dw_list.GetChild("sc", dwc_sc);
        dwc_sc.SetFilter("lx = '" + lx + "'");
        dwc_sc.Filter();
    }

}


this.dw_list_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "area_name") {
        dw_list.GetChild("area_name", dwc_qh);
        var li_find = dwc_qh.Find("area_name = '" + data + "'", 1, dwc_qh.RowCount());
        var area_code = dwc_qh.GetItemString(li_find, "area_code");
        dw_list.SetItem(row, "area_code", area_code);
        var max = 1000;
        for (row1 = dw_list.RowCount(); row1 > 0; row1--) {
            var area_code_row = dw_list.GetItemString(row1, "area_code");
            if (area_code_row == area_code) {
                var road_code_max = dw_list.GetItemString(row1, "road_code_max");
                if (max < parseInt(road_code_max)) {
                    max = parseInt(road_code_max);
                }
            }
        }

        max = max + 1;
        dw_list.SetItem(row, "road_code", area_code + max.toString());
    };


};



}
