///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Filter() {

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

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_list","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.Qd)=="function") 
			 win.AttachEvent("btn_Qd","Clicked",self.Qd); 

		 if(typeof(self.Qx)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Qx); 

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

var dw_mx = null;
var dw_filter = null;

this.SetDataWindow = function (dw) {
    dw_mx = dw;
}
//var filter = null;
//this.SetData = function (parm) {
//    filter = parm;
//}

this.SetDataWindowFilter = function (dw) {
    dw_filter = dw;
}

 
//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Filter.ashx"); 

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

}
//#endregion

//#region 新建
this.Add = function () {
    var Zdm = requestor.GetParm("Zdm");
    var colType = requestor.GetParm("colType");
    dw_filter.SetFilter("zdmc = '" + Zdm + "'");
    dw_filter.Filter();
    var filter_row = dw_filter.RowCount()
    if (filter_row > 0) {
        for (row = 1; row <= dw_filter.RowCount(); row++) {
            var zdnr = dw_filter.GetItemString(row, "zdnr");
            var zdmc = dw_filter.GetItemString(row, "zdmc");
            var zdlx = dw_filter.GetItemString(row, "zdlx");
            var sfxz = dw_filter.GetItemString(row, "sfxz");
            var li_insertrow = dw_list.InsertRow(0);
            dw_list.SetItem(li_insertrow, "zdnr", zdnr);
            dw_list.SetItem(li_insertrow, "zdmc", zdmc);
            dw_list.SetItem(li_insertrow, "zdlx", zdlx);
            dw_list.SetItem(li_insertrow, "sfxz", sfxz);
        }
        dw_list.SetRedraw(false);
        dw_list.SetSort("zdnr");
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }

    var count = dw_mx.RowCount();
    dw_mx.SetFilter("");
    dw_mx.Filter();
    for (row = 1; row <= dw_mx.RowCount(); row++) {
        var zdnr = "";
        if (colType == "char") {
            zdnr = dw_mx.GetItemString(row, Zdm);
        } else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_mx.GetItemDate(row, Zdm));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            zdnr = rq.substring(0, rq.indexOf(" "));
        } else if (colType == "!") {
            continue;
        }
        else {
            var num = dw_mx.GetItemNumber(row, Zdm);
            zdnr = num.toString();
        };

        var li_find = dw_list.Find("zdnr = '" + zdnr + "'", 1, dw_list.RowCount());
        if (li_find < 1) {
            var li_insertrow = dw_list.InsertRow(0);
            dw_list.SetItem(li_insertrow, "zdnr", zdnr);
            dw_list.SetItem(li_insertrow, "zdmc", Zdm);
            dw_list.SetItem(li_insertrow, "zdlx", colType);
        }
    }
    dw_list.SetRedraw(false);
    dw_list.SetSort("zdnr");
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion

 //#region 全选
    //#region 单击明细单编号
this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
    if (dwoName == "qx") {
        var qx = dw_list.GetItemString(1, "qx");
        if (qx == "Y") {
            qx = "N"
        } else { 
           qx = "Y"
        }
        for (row = 1; row <= dw_list.RowCount(); row++) {
            dw_list.SetItem(row, "sfxz", qx)
            dw_list.SetItem(row, "qx", qx)
        };
    };
};
//#endregion

//#region 存盘
this.Qd = function () {
    dw_list.AcceptText();
    var ls_filter = "";

    for (row = 1; row <= dw_list.RowCount(); row++) {
        var sfxz = dw_list.GetItemString(row, "sfxz");
        var zdnr = dw_list.GetItemString(row, "zdnr");
        var zdmc = dw_list.GetItemString(row, "zdmc");
        var zdlx = dw_list.GetItemString(row, "zdlx");

        var li_find = dw_filter.Find("zdnr = '" + zdnr + "' and zdmc = '" + zdmc + "'", 1, dw_filter.RowCount());
        if (li_find < 1) {
            var li_insertrow = dw_filter.InsertRow(0);
            dw_filter.SetItem(li_insertrow, "zdlx", zdlx);
            dw_filter.SetItem(li_insertrow, "zdnr", zdnr)
            dw_filter.SetItem(li_insertrow, "zdmc", zdmc)
            dw_filter.SetItem(li_insertrow, "sfxz", sfxz)
        } else {
            dw_filter.SetItem(li_find, "sfxz", sfxz)
        };
    };


    dw_filter.SetFilter("sfxz = 'Y'");
    dw_filter.Filter();
    dw_filter.SetSort("zdmc")
    dw_filter.Sort()

    for (row = 1; row <= dw_filter.RowCount(); row++) {
        var zdnr = dw_filter.GetItemString(row, "zdnr");
        var zdmc = dw_filter.GetItemString(row, "zdmc");
        var zdlx = dw_filter.GetItemString(row, "zdlx");
        if (row == 1) {
            Zdm = zdmc;
        };

        if (ls_filter == "") {
            if (zdlx == "char") {
                ls_filter = "(" + zdmc + " = '" + zdnr + "'";
            } else if (zdlx == "date" || zdlx == "time") {
                ls_filter = "(" + "date(" + zdmc + ") = date('" + zdnr + "')";
            } else {
                ls_filter = "(" + zdmc + " = dec('" + zdnr + "')";
            };
        } else {
            if (Zdm != zdmc) {
                if (zdlx == "char") {
                    ls_filter = ls_filter + ") and (" + zdmc + " = '" + zdnr + "'";
                } else if (zdlx == "date" || zdlx == "time") {
                    ls_filter = ls_filter + ")  and (" + "date(" + zdmc + ") = date('" + zdnr + "')";
                } else {
                    ls_filter = ls_filter + ") and (" + zdmc + " = dec('" + zdnr + "')";
                };
                Zdm = zdmc;
            } else {
                if (zdlx == "char") {
                    ls_filter = ls_filter + " or " + zdmc + " = '" + zdnr + "'";
                } else if (zdlx == "date" || zdlx == "time") {
                    ls_filter = ls_filter + " or " + "date(" + zdmc + ") = date('" + zdnr + "')";
                } else {
                    ls_filter = ls_filter + " or " + zdmc + " = dec('" + zdnr + "')";
                };
            }
        };
    };

    if (ls_filter != "") {
        ls_filter = ls_filter + ")"
    };

    dw_mx.SetFilter(ls_filter);
    dw_mx.Filter();

    dw_filter.SetFilter("");
    dw_filter.Filter();
    dw_filter.SetSort("zdmc");
    dw_filter.Sort();

    requestor.Close();
}
//#endregion

//#region 取消
this.Qx = function () {
    dw_list.AcceptText();
    dw_mx.SetFilter("");
    dw_mx.Filter();    
    dw_filter.Reset();
    requestor.Close();
}
//#endregion


//#region 关闭窗口
this.Exit = function () {
    dw_filter.SetFilter("sfxz = 'Y'");
    dw_filter.Filter();
    dw_filter.SetSort("zdmc")
    dw_filter.Sort()

    for (row = 1; row <= dw_filter.RowCount(); row++) {
        var zdnr = dw_filter.GetItemString(row, "zdnr");
        var zdmc = dw_filter.GetItemString(row, "zdmc");
        var zdlx = dw_filter.GetItemString(row, "zdlx");
        if (row == 1) {
            Zdm = zdmc;
        };

        if (ls_filter == "") {
            if (zdlx == "char") {
                ls_filter = "(" + zdmc + " = '" + zdnr + "'";
            } else if (zdlx == "date" || zdlx == "time") {
                ls_filter = "(" + "date(" + zdmc + ") = date('" + zdnr + "')";
            } else {
                ls_filter = "(" + zdmc + " = dec('" + zdnr + "')";
            };
        } else {
            if (Zdm != zdmc) {
                if (zdlx == "char") {
                    ls_filter = ls_filter + ") and (" + zdmc + " = '" + zdnr + "'";
                } else if (zdlx == "date" || zdlx == "time") {
                    ls_filter = ls_filter + ")  and (" + "date(" + zdmc + ") = date('" + zdnr + "')";
                } else {
                    ls_filter = ls_filter + ") and (" + zdmc + " = dec('" + zdnr + "')";
                };
                Zdm = zdmc;
            } else {
                if (zdlx == "char") {
                    ls_filter = ls_filter + " or " + zdmc + " = '" + zdnr + "'";
                } else if (zdlx == "date" || zdlx == "time") {
                    ls_filter = ls_filter + " or " + "date(" + zdmc + ") = date('" + zdnr + "')";
                } else {
                    ls_filter = ls_filter + " or " + zdmc + " = dec('" + zdnr + "')";
                };
            }
        };
    };

    if (ls_filter != "") {
        ls_filter = ls_filter + ")"
    };

    dw_mx.SetFilter(ls_filter);
    dw_mx.Filter();

    dw_filter.SetFilter("");
    dw_filter.Filter();
    dw_filter.SetSort("zdmc")
    dw_filter.Sort();

    requestor.Close();
}
//#endregion

}
