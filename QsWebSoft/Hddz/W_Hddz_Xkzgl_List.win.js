///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Xkzgl_List() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_filter= new DataWindow( requestor );
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var rb_hy= new RadioButton( requestor );
	 var rb_ky= new RadioButton( requestor );
	 var ddlb_zt= new DropDownListBox( requestor );
	 var ddlb_dqqk= new DropDownListBox( requestor );
	 var sle_pm= new SingleLineEdit( requestor );
	 var sle_gj= new SingleLineEdit( requestor );
	 var sle_pwh= new SingleLineEdit( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_role= new DataStore( requestor );
	 var ds_1= new DataStore( requestor );

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
		 if(rb_hy == null ) rb_hy= new RadioButton( requestor );
		 rb_hy.Attach( win.Control( "rb_hy") ); 
		 if(rb_ky == null ) rb_ky= new RadioButton( requestor );
		 rb_ky.Attach( win.Control( "rb_ky") ); 
		 if(ddlb_zt == null ) ddlb_zt= new DropDownListBox( requestor );
		 ddlb_zt.Attach( win.Control( "ddlb_zt") ); 
		 if(ddlb_dqqk == null ) ddlb_dqqk= new DropDownListBox( requestor );
		 ddlb_dqqk.Attach( win.Control( "ddlb_dqqk") ); 
		 if(sle_pm == null ) sle_pm= new SingleLineEdit( requestor );
		 sle_pm.Attach( win.Control( "sle_pm") ); 
		 if(sle_gj == null ) sle_gj= new SingleLineEdit( requestor );
		 sle_gj.Attach( win.Control( "sle_gj") ); 
		 if(sle_pwh == null ) sle_pwh= new SingleLineEdit( requestor );
		 sle_pwh.Attach( win.Control( "sle_pwh") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_1","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.dw_List_DoubleClicked); 

		 if(typeof(self.dw_List_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_1","DwnMouseMove",self.dw_List_DwnMouseMove); 

		 if(typeof(self.dw_1_ItemChanged)=="function") 
			 win.AttachEvent("dw_1","ItemChanged",self.dw_1_ItemChanged); 

		 if(typeof(self.dw_List_LButtonDown)=="function") 
			 win.AttachEvent("dw_1","LButtonDown",self.dw_List_LButtonDown); 

		 if(typeof(self.dw_List_MouseMove)=="function") 
			 win.AttachEvent("dw_1","MouseMove",self.dw_List_MouseMove); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_1","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowinsert","Clicked",self.InsertRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.CopyRow)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.CopyRow); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_hy","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_ky","Clicked",self.Retrieve); 

		 if(typeof(self.dw_1_Setfilter)=="function") 
			 win.AttachEvent("ddlb_zt","SelectionChanged",self.dw_1_Setfilter); 

		 if(typeof(self.dw_1_Setfilter)=="function") 
			 win.AttachEvent("ddlb_dqqk","SelectionChanged",self.dw_1_Setfilter); 

		 if(typeof(self.dw_1_Setfilter)=="function") 
			 win.AttachEvent("sle_pm","EditChanged",self.dw_1_Setfilter); 

		 if(typeof(self.dw_1_Setfilter)=="function") 
			 win.AttachEvent("sle_gj","EditChanged",self.dw_1_Setfilter); 

		 if(typeof(self.slepwh_EditChanged)=="function") 
			 win.AttachEvent("sle_pwh","EditChanged",self.slepwh_EditChanged); 

		 if(typeof(self.Filter)=="function") 
			 win.AttachEvent("单列过滤ToolStripMenuItem","Clicked",self.Filter); 

		 if(typeof(self.Filter_Cancle)=="function") 
			 win.AttachEvent("取消过滤ToolStripMenuItem","Clicked",self.Filter_Cancle); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.CopySelect)=="function") 
			 win.AttachEvent("选择复制ToolStripMenuItem","Clicked",self.CopySelect); 

		 if(typeof(self.CopyL)=="function") 
			 win.AttachEvent("整列复制ToolStripMenuItem","Clicked",self.CopyL); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_filter.Detach(); dw_filter=null; 
		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 rb_hy.Detach(); rb_hy=null; 
		 rb_ky.Detach(); rb_ky=null; 
		 ddlb_zt.Detach(); ddlb_zt=null; 
		 ddlb_dqqk.Detach(); ddlb_dqqk=null; 
		 sle_pm.Detach(); sle_pm=null; 
		 sle_gj.Detach(); sle_gj=null; 
		 sle_pwh.Detach(); sle_pwh=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_role.Detach(); ds_role=null; 
		 ds_1.Detach(); ds_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

   
    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    //#region 变量定义
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hddz_Xkzgl.ashx");



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

//#region 添加明细
this.AddRow = function () {
    var row = dw_1.InsertRow(0);
     dw_1.ScrollToRow(row);
     dw_1.SetFocus();
    
}
//#endregion


this.InsertRow = function () {
    var lx = "";
    if (rb_hy.GetChecked() == true) {
        lx = "hy"
    } else
    if (rb_ky.GetChecked() == true) {
        lx = "ky"
    }
    var userid = requestor.GetParm("userid");
    var li_insert

    var li_insert = dw_1.InsertRow(dw_1.GetRow());
    dw_1.SetItem(li_insert, "hyorky", lx)
    dw_1.SetItem(li_insert, "zbr", userid)
    dw_1.ScrollToRow(li_insert)
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
    var userid = requestor.GetParm("userid"); 
    dw_1.SetItem(row + 1, "zbr", userid)
    dw_1.ScrollToRow(row + 1)


}

this.Retrieve = function () {
    dw_1.AcceptText();
    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否需要保存?", ICON.Question, BUTTON.YesNo) == 1) {
            self.Save()
        }
    }


    var lx = "";
    if (rb_hy.GetChecked() == true) {
        lx = "hy"
    } else
        if (rb_ky.GetChecked() == true) {
            lx = "ky"
        }
    dw_1.Retrieve(lx);

}


this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;


    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }
    dw_1.SetRedraw(false)
    for (row = 0; row <= dw_1.RowCount(); row++) {
        dw_1.SetItem(row, "cxh", row);
    }

    dw_1.SetRedraw(true)
    var dw_d_data = dw_1.GetChanges();
    if (dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save", "dw_Master=" + dw_d_data);


    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号

        dw_1.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
        dw_1.SetFocus();
        self.Retrieve();
        self.dw_1_Setfilter();
    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_1.SetFocus();
    }
}

//#region 修改数据窗口内容dw_List_ItemChanged
this.dw_1_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "sl") {           
            dw_1.SetItem(row, "sy", data)   
    }

}
    //#endregion

//#region 过滤客户
this.slepm_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    var gj = sle_gj.GetText();     
    if (text == "") {        
        if (gj == "" || gj == null) {
            dw_1.SetFilter("");
        } else {
            dw_1.SetFilter("( Upper(pm) like Upper('%" + text + "%'))");
        }
    }
    else {
         if (gj == "" || gj == null) {
             dw_1.SetFilter("( Upper(pm) like Upper('%" + text + "%'))");
        } else {
             dw_1.SetFilter("(( Upper(pm) like Upper('%" + text + "%'))) and (( Upper(gj) like Upper('%" + gj + "%')))");
        }
    };
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

//#region 过滤客户
this.slegj_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    var pm = sle_pm.GetText();
    if (text == "") {
        if (pm == "" || pm == null) {
            dw_1.SetFilter("");
        } else {
            dw_1.SetFilter("( Upper(gj) like Upper('%" + text + "%'))");
        }
    }
    else {
        if (pm == "" || pm == null) {
            dw_1.SetFilter("( Upper(gj) like Upper('%" + text + "%'))");
        } else {
            dw_1.SetFilter("(( Upper(gj) like Upper('%" + text + "%'))) and (( Upper(pm) like Upper('%" + pm + "%')))");
        }
    };
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

//#region 过滤批文号
this.slepwh_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    var pm = sle_pm.GetText();
    if (text == "")
        dw_1.SetFilter("");        
    else {
        dw_1.SetFilter("( Upper(pwh) like Upper('%" + text + "%'))");
    };
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion


//#region 恢复默认列
this.dw_1_Setfilter = function () {
    var ls_zt = ddlb_zt.GetText(); 
    var ls_filter = "";    
    if (ls_zt == "未用完") {
        ls_filter = "(sy <> 0 or isnull(sy)) "
    } else if (ls_zt == "已用完") {        
        ls_filter = "sy = 0 "         
    } else if (ls_zt == "全部") {
        ls_filter = ""
    }
 
    var ls_dqqk = ddlb_dqqk.GetText();
    var ls_filter_dqqk = "";
    if (ls_dqqk == "未到期") {
        ls_filter_dqqk = "daysafter(dqr,today()) <= 0 "
    } else if (ls_dqqk == "已到期") {
        ls_filter_dqqk = "daysafter(dqr,today()) > 0 "
    } else if (ls_dqqk == "全部") {
        ls_filter_dqqk = ""
    }
   
    if (ls_filter == "") {       
       ls_filter = ls_filter_dqqk;
    }else{
     if (ls_filter_dqqk !=""){
        ls_filter = ls_filter + " and "+ ls_filter_dqqk;
      }
    }

 

    var pm = sle_pm.GetText();
    var ls_filter_pm = "";

    if (pm == "" || pm == null) {
        ls_filter_pm = "";
    } else {
        ls_filter_pm = "(( Upper(pm) like Upper('%" + pm + "%')))";
    }

    if (ls_filter == "") {
        ls_filter = ls_filter_pm;
    } else {
        if (ls_filter_pm != "") {
            ls_filter = ls_filter + " and " + ls_filter_pm;
        }
    }
   
    var gj = sle_gj.GetText();
    var ls_filter_gj = "";

    if (gj == "" || gj == null) {
        ls_filter_gj = "";
    } else {
        ls_filter_gj = "(( Upper(gj) like Upper('%" + gj + "%')))";
    }

    if (ls_filter == "") {
        ls_filter = ls_filter_gj;
    } else {
        if (ls_filter_gj != "") {
            ls_filter = ls_filter + " and " + ls_filter_gj;
        }
    }
    dw_1.SetFilter(ls_filter)    
    dw_1.Filter()

}
//#endregion

this.dw_1_filter = function () {
    var ls_zt = ddlb_zt.GetText()
    if (ls_zt == "未用完") {
        dw_1.SetFilter("sy <> 0 ")
    } else if (ls_zt == "已用完") {
        dw_1.SetFilter("sy = 0 ")
    } else if (ls_zt == "全部") {
        dw_1.SetFilter("")
    }

    dw_1.SetFilter("(( Upper(gj) like Upper('%" + text + "%'))) and (( Upper(pm) like Upper('%" + pm + "%')))");

    dw_1.Filter()


}

//#region 恢复默认列
this.Recover = function () {

    QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_Hddz_Xkzgl_List", "dw_hddz_xkzgl_list"); 
    self.Retrieve();
}
//#endregion

//#region 获得字段焦点
this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
    cloname = dwoName;
    if (Row > 0) {  fzjs_row   = Row;   }     
}
//#endregion


//#region 复制字段内容
this.CopyCol = function () {
    var copytext = "";
    var row = dw_1.GetRow();
    if (row <= 0)
        return;
    colType = dw_1.Describe(cloname + ".colType");
    colType = colType.substring(0, 4);
    if (colType == "char") {
        copytext = dw_1.GetItemString(dw_1.GetRow(), cloname);
    }
    else if (colType == "date" || colType == "time") {
        var rq = new Date(dw_1.GetItemDate(dw_1.GetRow(), cloname));
        rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
        copytext = rq;
    }
    else {
        var num = dw_1.GetItemNumber(dw_1.GetRow(), cloname);
        copytext = num.toString();
    }
    window.clipboardData.setData("Text", copytext);


}
//#endregion

//#region 单击明细单编号
this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
    if (Row > 0) {        
        fzks_row = Row;
    };
}
//#endregion


//#region 点击开始
this.dw_List_LButtonDown = function (flags, xPos, yPos) {
    arr.splice(0, arr.length);
    begin = "Y"
    fzks_row
}
//#endregion

//#region 选择复制
this.CopySelect = function () {
    begin = "N";

    var copytext = "";
    var copytext_sum = "";
    if (fzks_row <= 0)
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
this.dw_List_DwnMouseMove = function (xPos, yPos, row, dwoName) {
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
    var row = dw_list.GetRow();
    if (row <= 0)
        return;

    for (row = 1; row <= dw_1.RowCount(); row++) {

        for (row1 = 0; row1 <= arr.length; row1++) {
            colType = dw_list.Describe(arr[row1] + ".colType");
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

    iw_Filter.SetDataWindow(dw_1); 
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
    dw_1.Reset();
}
//#endregion

 }