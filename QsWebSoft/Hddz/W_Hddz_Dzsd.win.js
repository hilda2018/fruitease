///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Dzsd() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_log= new DataWindow( requestor );
	 var dw_list= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_list","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_log.Detach(); dw_log=null; 
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

var dw_mx = null;
var dw_mx_master = null;
this.SetDataWindow = function (dw) {
    dw_mx = dw;
}

this.SetDataWindow_master = function (dw) {
    dw_mx_master = dw;
}

 
var column = null;
this.SetData = function (parm) {
    column = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

var zbr = null;
this.SetZbr = function (parm) {
    zbr = parm;
}

var tdsfzb = null;
this.SetTdsfzb = function (parm) {
    tdsfzb = parm;
}

var dzmc = null;
this.SetDzmc = function (parm) {
    dzmc = parm;
}

var tdsfzb = null;
this.SetTdsfzb = function (parm) {
    tdsfzb = parm;
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
//    var ywbh = requestor.GetParm("ywbh")
     
    dw_list.Retrieve(column, RowData, dzmc, tdsfzb);

    var userid = requestor.GetParm("userid");
    if (zbr == userid) {
        var li_row = dw_list.InsertRow(0);
        var date = new Date();
        dw_list.SetItem(li_row, "ywbh", column);
        dw_list.SetItem(li_row, "cxh", RowData);
        dw_list.SetItem(li_row, "cxh_mx", li_row);
        dw_list.SetItem(li_row, "sdsj", date.getDate());
        dw_list.SetItem(li_row, "sdr", userid);
    }
    else {
        dw_list.Modify("DataWindow.Readonly=yes");
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

    for (row = 1; row <= dw_list.RowCount(); row++) {
        var sdjg = dw_list.GetItemString(row, "sdjg");
        var sdnr = dw_list.GetItemString(row, "sdnr");
        if (sdjg == "不通过" && (sdnr == null || sdnr == "")) {
            alert("不通过必须输入原因!");
            return;
        }
    };
    var dw_d_data = dw_list.GetChanges();
    if (dw_d_data == "")
        return;

    //数据同步生鲜港
    var num = 0;
    for (var i = 1; i <= dw_list.RowCount(); i++) {
        if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1 || dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 3) {
            num += 1;
        }
    }
    if (num > 0) {
        var ywbh = dw_list.GetItemString(1, "ywbh");
        var cxh = dw_list.GetItemNumber(1, "cxh");
        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_hddz_dzyq");
        dw_log.SetItem(row, "changecols", "zfbqk,sfsdzb,sdzbsj");
        dw_log.SetItem(row, "mainid", ywbh);
        dw_log.SetItem(row, "parameters", cxh.toString());
        dw_log.ScrollToRow(row);
    }

    dw_log.AcceptText();

    var dw_log_data = dw_log.GetChanges();
    if (dw_log_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("DzsdSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号

        dw_list.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
        var sdzxjg = dw_list.GetItemString(dw_list.RowCount(), "sdjg");
        var sdzxnr = dw_list.GetItemString(dw_list.RowCount(), "sdnr");
        var sfsdzb = dw_list.GetItemString(dw_list.RowCount(), "sfsdzb");
        var sdzbry = dw_list.GetItemString(dw_list.RowCount(), "sdzbry");
        var sdzbsj = dw_list.GetItemDate(dw_list.RowCount(), "sdzbsj");
        var sfsdfb = dw_list.GetItemString(dw_list.RowCount(), "sfsdfb");
        var sdfbsj = dw_list.GetItemDate(dw_list.RowCount(), "sdfbsj");
        var sdfbry = dw_list.GetItemString(dw_list.RowCount(), "sdfbry");
        var sfsdzb_hj = dw_list.GetItemNumber(1, "sfsdzb_hj");

        var sfsdfb_hj = dw_list.GetItemNumber(1, "sfsdfb_hj");

        if (sdzxjg != null && sdzxjg != "") {
            dw_mx.SetItem(RowData, "sdzxjg", sdzxjg);
        }
        if (sdzxnr != null && sdzxnr != "") {
            dw_mx.SetItem(RowData, "sdzxnr", sdzxnr);
        }

        if (sfsdzb == "Y") {
            dw_mx.SetItem(RowData, "sfsdzb", sfsdzb);
            dw_mx.SetItem(RowData, "sdzbsj", sdzbsj);
            dw_mx.SetItem(RowData, "sdzbry", sdzbry);
            dw_mx.SetItem(RowData, "sdmxsj", 1);
            
        };
        if (sfsdfb == "Y") {
            dw_mx.SetItem(RowData, "sfsdfb", sfsdfb);
            dw_mx.SetItem(RowData, "sdfbsj", sdfbsj);
            dw_mx.SetItem(RowData, "sdfbry", sdfbry);
            dw_mx.SetItem(RowData, "sdmxsj", 1);

        };
        if (sfsdzb_hj == 0) {
            var sftd = dw_mx.GetItemString(RowData, "dzmc");
            var date = new Date("1900/01/01");
            if (sftd == "提单") {
                dw_mx.SetItem(RowData, "sfsdzb", "N");
                dw_mx_master.SetItem(1, "qrdf", "N");
                dw_mx_master.SetItem(1, "qrdfsj", date.getVarDate());
            }
        }
        if (sfsdfb_hj == 0) {
            var sftd = dw_mx.GetItemString(RowData, "dzmc");
            if (sftd == "提单") {
                dw_mx.SetItem(RowData, "sfsdfb", "N");
            }
        }
        requestor.Close();
    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_list.SetFocus();
    }
}


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion

//#region this.dw_dzqk_ItemChanged
this.dw_master_ItemChanged = function (Row, dwoName, data) {
    var userid = requestor.GetParm("userid");
    var date = new Date();
    if (dwoName == "sfsdzb") {
        if (data == "Y") {
            dw_list.SetItem(Row, "sdzbry", userid)
            dw_list.SetItem(Row, "sdjg", "通过")
        } else {
            dw_list.SetItem(Row, "sdzbry", "")
            dw_list.SetItem(Row, "sdjg", "")
        }
        dw_list.SetItem(Row, "sdzbsj", date.getVarDate());
    }
    if (dwoName == "sfsdfb") {
        if (data == "Y") {
            dw_list.SetItem(Row, "sdfbry", userid)
            dw_list.SetItem(Row, "sdjg", "通过")
        } else {
            dw_list.SetItem(Row, "sdfbry", "")
            dw_list.SetItem(Row, "sdjg", "")
        }
        dw_list.SetItem(Row, "sdfbsj", date.getVarDate());
    }
}
//#endregion


}
