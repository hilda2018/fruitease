///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Sshl() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_filter= new DataWindow( requestor );
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 

		 if(typeof(self.dw_1_Clicked)=="function") 
			 win.AttachEvent("dw_1","Clicked",self.dw_1_Clicked); 

		 if(typeof(self.dw_1_DoubleClicked)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.dw_1_DoubleClicked); 

		 if(typeof(self.dw_1_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_1","DwnMouseMove",self.dw_1_DwnMouseMove); 

		 if(typeof(self.dw_1_ItemChanged)=="function") 
			 win.AttachEvent("dw_1","ItemChanged",self.dw_1_ItemChanged); 

		 if(typeof(self.dw_1_EntertoTab)=="function") 
			 win.AttachEvent("dw_1","KeyDown",self.dw_1_EntertoTab); 

		 if(typeof(self.dw_1_LButtonDown)=="function") 
			 win.AttachEvent("dw_1","LButtonDown",self.dw_1_LButtonDown); 

		 if(typeof(self.dw_1_MouseMove)=="function") 
			 win.AttachEvent("dw_1","MouseMove",self.dw_1_MouseMove); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_1","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.InsertRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.CopyRow)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.CopyRow); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Filter)=="function") 
			 win.AttachEvent("单列过滤ToolStripMenuItem","Clicked",self.Filter); 

		 if(typeof(self.Filter_Cancle)=="function") 
			 win.AttachEvent("取消过滤ToolStripMenuItem","Clicked",self.Filter_Cancle); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.CopySelect)=="function") 
			 win.AttachEvent("选择复制ToolStripMenuItem","Clicked",self.CopySelect); 

		 if(typeof(self.CopyL)=="function") 
			 win.AttachEvent("整列复制ToolStripMenuItem","Clicked",self.CopyL); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_filter.Detach(); dw_filter=null; 
		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Sshl.ashx");

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    

    //#endregion

//#region 关闭窗口
this.Exit = function () {
    if (self.CloseQuery() == 1)
        return;
    setTimeout("window.close();", 100);
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {


    dw_1.AcceptText();
 

    if ((dw_1.DeletedCount() + dw_1.ModifiedCount() ) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }


}
//#endregion


this.InsertRow = function () {
    dw_1.InsertRow(0);
}
this.DeleteRow = function () {
    dw_1.DeleteRow(0);
}

this.CopyRow = function () {
    var row = dw_1.GetRow();
    if (row <= 0)
        return;

    dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
    dw_1.ScrollToRow(row + 1);


}

this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;


    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }


 
    var dw_d_data = dw_1.GetChanges();
    if ( dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save", "dw_Master=" + dw_d_data );

   
    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
      
        dw_1.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
         dw_1.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_1.SetFocus();
    }
}


//#region 单击明细单编号
this.dw_1_Clicked = function (xPos, yPos, Row, dwoName, Data) {
    if (Row > 0) {
        fzks_row = Row;
    };
}
//#endregion

//#region 获得字段焦点
this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
    cloname = dwoName;
    fzjs_row = Row;
}
//#endregion

//#region 复制字段内容
this.CopyAll = function () {
    var copytext = "";
    var copytext_sum = "";
    var row = dw_1.GetRow();
    if (row <= 0)
        return;


    for (row = fzks_row; row <= fzjs_row; row++) {
        colType = dw_1.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_1.GetItemString(row, cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_1.GetItemDate(row, cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_1.GetItemNumber(row, cloname);
            copytext = num.toString();
        }

        if (copytext_sum == "") {
            copytext_sum = copytext
        } else {
            copytext_sum = copytext_sum + '\t' + '\n' + copytext
        }

    }

    window.clipboardData.setData("Text", copytext_sum);

}
//#endregion



//#region 点击开始
this.dw_1_LButtonDown = function (flags, xPos, yPos) {
    arr.splice(0, arr.length);
    begin = "Y"
}
//#endregion

//#region 选择复制
this.CopySelect = function () {
    begin = "N";

    var copytext = "";
    var copytext_sum = "";
    var row = dw_1.GetRow();
    if (row <= 0)
        return;
    for (row = fzks_row; row <= fzjs_row; row++) {

        for (row1 = 0; row1 <= arr.length; row1++) {
            colType = dw_1.Describe(arr[row1] + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_1.GetItemString(row, arr[row1]);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_1.GetItemDate(row, arr[row1]));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            } else if (colType == "!") {
                continue;
            }
            else {
                var num = dw_1.GetItemNumber(row, arr[row1]);
                copytext = num.toString();
            };
            if (copytext_sum == "") {
                copytext_sum = copytext
            } else {
                if (row1 == 0) {
                    copytext_sum = copytext_sum + copytext
                } else {
                    copytext_sum = copytext_sum + '\t' + copytext
                }
            }
        }

        copytext_sum = copytext_sum + '\n'

    }

    if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
        copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
    };

    window.clipboardData.setData("Text", copytext_sum);
}

//#endregion

//#region 鼠标移动
this.dw_1_DwnMouseMove = function (xPos, yPos, row, dwoName) {
    if (begin == "Y") {
        var str = arr.join(" ");
        if (str.indexOf(dwoName) < 0 && dwoName.indexOf("line") < 0 && dwoName.indexOf("reportsrv") < 0 && dwoName.indexOf("datawindow") < 0) {
            arr.push(dwoName);
        }

    }
}
//#endregion

//#region 整列复制
this.CopyL = function () {

    var copytext = "";
    var copytext_sum = "";
    var row = dw_1.GetRow();
    if (row <= 0)
        return;

    for (row = 1; row <= dw_1.RowCount(); row++) {

        for (row1 = 0; row1 <= arr.length; row1++) {
            colType = dw_1.Describe(arr[row1] + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_1.GetItemString(row, arr[row1]);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_1.GetItemDate(row, arr[row1]));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            } else if (colType == "!") {
                continue;
            }
            else {
                var num = dw_1.GetItemNumber(row, arr[row1]);
                copytext = num.toString();
            };
            if (copytext_sum == "") {
                copytext_sum = copytext
            } else {
                if (row1 == 0) {
                    copytext_sum = copytext_sum + copytext
                } else {
                    copytext_sum = copytext_sum + '\t' + copytext
                }
            }
        }

        copytext_sum = copytext_sum + '\n'

    }

    if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
        copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
    };

    window.clipboardData.setData("Text", copytext_sum);
}

//#endregion

//#region 单列过滤
this.Filter = function () {
    dw_1.AcceptText();
    var row = dw_1.GetRow();
    if (row <= 0)
        return;

    colType = dw_1.Describe(cloname + ".colType");

    if (cloname.indexOf("line") >= 0) {
        return;
    }

    colType = colType.substring(0, 4);

    if (iw_Filter == null)
        iw_Filter = new W_Filter();
    var ywy = requestor.GetParm("userid");
    var ShareMode = requestor.GetParm("ShareMode");
    var Dlwtf = requestor.GetParm("Dlwtf");
    var filter = "";
    //        var rowcount = dw_1.RowCount();
    //        if (rowcount > 0) {
    //            filter = dw_1.GetItemString(1, "filter");
    //        };
    iw_Filter.SetDataWindow(dw_1);
    //        iw_Filter.SetData(filter);
    iw_Filter.SetDataWindowFilter(dw_filter);
    requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
    dw_1.SetFocus();
    dw_1.ScrollToRow(row)


}
//#endregion

//#region 过滤取消
this.Filter_Cancle = function () {
    dw_1.SetFilter("");
    dw_1.Filter();
    dw_1.SetFocus();
    dw_filter.Reset();
}
//#endregion

 }