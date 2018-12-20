///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_Wlgz_Yfbz() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_filter= new DataWindow( requestor );
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_qyd= new SingleLineEdit( requestor );
	 var sle_mdd= new SingleLineEdit( requestor );
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
		 if(sle_qyd == null ) sle_qyd= new SingleLineEdit( requestor );
		 sle_qyd.Attach( win.Control( "sle_qyd") ); 
		 if(sle_mdd == null ) sle_mdd= new SingleLineEdit( requestor );
		 sle_mdd.Attach( win.Control( "sle_mdd") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_1","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_list_DoubleClicked)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.dw_list_DoubleClicked); 

		 if(typeof(self.dw_List_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_1","DwnMouseMove",self.dw_List_DwnMouseMove); 

		 if(typeof(self.dw_List_LButtonDown)=="function") 
			 win.AttachEvent("dw_1","LButtonDown",self.dw_List_LButtonDown); 

		 if(typeof(self.dw_List_MouseMove)=="function") 
			 win.AttachEvent("dw_1","MouseMove",self.dw_List_MouseMove); 

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

		 if(typeof(self.sleQyd_EditChanged)=="function") 
			 win.AttachEvent("sle_qyd","EditChanged",self.sleQyd_EditChanged); 

		 if(typeof(self.sleMdd_EditChanged)=="function") 
			 win.AttachEvent("sle_mdd","EditChanged",self.sleMdd_EditChanged); 

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
		 sle_qyd.Detach(); sle_qyd=null; 
		 sle_mdd.Detach(); sle_mdd=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义

var iw_Filter = null;
var begin = "N";
var fzks_row = 0;
var fzjs_row = 0;
var arr = new Array();
var iw_Sfdqlm_Select = null; 

var dwc_dq_ks = new DataWindowChild();
var dwc_lm_ks = new DataWindowChild();
var dwc_dq_zz = new DataWindowChild();
var dwc_lm_zz = new DataWindowChild();
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Wlgz_Yfbz.ashx");



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

//#region 过滤
this.sleQyd_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    if (text == "")
        dw_1.SetFilter("");
    else
        dw_1.SetFilter("( Upper(qyd) like Upper('%" + text + "%'))");
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

//#region 过滤
this.sleMdd_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    if (text == "")
        dw_1.SetFilter("");
    else
        dw_1.SetFilter("( Upper(mdd) like Upper('%" + text + "%'))");
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

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


//#region 恢复默认列
this.Recover = function () {

    QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Hy_Wlgz_Yfbz", "dw_wlgz_yfbz_list");
    dw_1.Retrieve("%");
}
//#endregion

//#region 获得字段焦点
this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
    cloname = dwoName;

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

//#region  dw_cmd_Clicked
this.dw_list_Clicked = function (xPos, yPos, Row, dwoName) {
    if (dwoName == "dz_dq_ks") {
        var dz_sf = dw_1.GetItemString(Row, "dz_sf_ks");

        dw_1.GetChild("dz_dq_ks", dwc_dq_ks);
        if (dwc_dq_ks.RowCount() > 0) {
            dwc_dq_ks.SetFilter("");
            dwc_dq_ks.Filter();

            dwc_dq_ks.SetFilter("prv_name = '" + dz_sf + "'");
            dwc_dq_ks.Filter();
        }

    }

    if (dwoName == "dz_lm_ks") {
        var dz_sf = dw_1.GetItemString(Row, "dz_sf_ks");
        var dz_dq = dw_1.GetItemString(Row, "dz_dq_ks"); 
        dw_1.GetChild("dz_lm_ks", dwc_lm_ks);
        if (dwc_lm_ks.RowCount() > 0) {
            dwc_lm_ks.SetFilter("");
            dwc_lm_ks.Filter();

            dwc_lm_ks.SetFilter("prv_name = '" + dz_sf + "' and area_name = '" + dz_dq + "'");
            dwc_lm_ks.Filter();
        }
    }

    if (dwoName == "dz_dq_zz") {
        var dz_sf = dw_1.GetItemString(Row, "dz_sf_zz");

        dw_1.GetChild("dz_dq_zz", dwc_dq_zz);
        if (dwc_dq_zz.RowCount() > 0) {
            dwc_dq_zz.SetFilter("");
            dwc_dq_zz.Filter();

            dwc_dq_zz.SetFilter("prv_name = '" + dz_sf + "'");
            dwc_dq_zz.Filter();
        }

    }

    if (dwoName == "dz_lm_zz") {
        var dz_sf = dw_1.GetItemString(Row, "dz_sf_zz");
        var dz_dq = dw_1.GetItemString(Row, "dz_dq_zz");
        dw_1.GetChild("dz_lm_zz", dwc_lm_zz);
        if (dwc_lm_zz.RowCount() > 0) {
            dwc_lm_zz.SetFilter("");
            dwc_lm_zz.Filter();

            dwc_lm_zz.SetFilter("prv_name = '" + dz_sf + "' and area_name = '" + dz_dq + "'");
            dwc_lm_zz.Filter();
        }

    }

}
//#endregion


//#region 单击明细单编号
this.dw_list_DoubleClicked = function (xPos, yPos, Row, dwoName) {
    if (dwoName == "dz_sf_ks" || dwoName == "dz_dq_ks" || dwoName == "dz_lm_ks") {
        if (iw_Sfdqlm_Select == null)
            iw_Sfdqlm_Select = new W_Sfdqlm_Select();
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");

        
        iw_Sfdqlm_Select.SetDataWindow(dw_1);
        iw_Sfdqlm_Select.SetData("yfbz_ks");
        iw_Sfdqlm_Select.SetRow(Row);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sfdqlm_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf  , iw_Sfdqlm_Select);
        dw_1.SetFocus();

    }

    if (dwoName == "dz_sf_zz" || dwoName == "dz_dq_zz" || dwoName == "dz_lm_zz") {
        if (iw_Sfdqlm_Select == null)
            iw_Sfdqlm_Select = new W_Sfdqlm_Select();
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");


        iw_Sfdqlm_Select.SetDataWindow(dw_1);
        iw_Sfdqlm_Select.SetData("yfbz_zz");
        iw_Sfdqlm_Select.SetRow(Row);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sfdqlm_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Sfdqlm_Select);
        dw_1.SetFocus();

    }

}
//#endregion

 }