///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_JdrCskz() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_gl= new SingleLineEdit( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(sle_gl == null ) sle_gl= new SingleLineEdit( requestor );
		 sle_gl.Attach( win.Control( "sle_gl") ); 

		 if(typeof(self.dw_1_Clicked)=="function") 
			 win.AttachEvent("dw_1","Clicked",self.dw_1_Clicked); 

		 if(typeof(self.dw_1_ItemChanged)=="function") 
			 win.AttachEvent("dw_1","ItemChanged",self.dw_1_ItemChanged); 

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

		 if(typeof(self.sleGl_EditChanged)=="function") 
			 win.AttachEvent("sle_gl","EditChanged",self.sleGl_EditChanged); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_gl.Detach(); sle_gl=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var iw_Wldw_Select = null;
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    var dwc = new DataWindowChild();

    webReq.SetWebServiceUrl("/Service/Fylx.ashx");



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
    //释放对象
    dwc.Detach(); dwc = null;

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

//#region 过滤接单人
this.sleGl_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    if (text == "")
        dw_1.SetFilter("");
    else
        dw_1.SetFilter("Upper(jdrmc) like Upper('%" + text + "%')");
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

//#region dw_1弹出选择
this.dw_1_Clicked = function (xPos, yPos, Row, dwoName) {
    if (dwoName == "jdrmc") {
        if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
        var khlx = "jdr";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Wldw_Select.SetDataWindow(dw_1);
        iw_Wldw_Select.SetData("cskz");
        iw_Wldw_Select.SetRow(Row);
        //    //生鲜港 
        //    if (zdmc == null || zdmc == "") {
        //        zdmc = "jdrbm,jdrmc,jdrjc,jdrpym";
        //    } else {
        //        zdmc = zdmc + ',' + "jdrbm,jdrmc,jdrjc,jdrpym";

        //    };
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_1.SetFocus();
    }

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

//    //数据同步生鲜港
//    for (var i = 1; i <= dw_1.rowcount(); i++) {
//        if (dw_1.getitemstatus(i, 0, dwbuffer.primary) != 0) {
//            var jdrmc = dw_1.getitemstring(i, "jdrmc");
//            var row = dw_log.insertrow(0);
//            //var maxnumber = self.serialnumber(log_num);
//            var serialnumber = dw_log.getitemstring(row, "eid_max") //"hyfx" + userid + yearmonday + maxnumber;

//            dw_log.setitem(row, "eid", serialnumber);
//            dw_log.setitem(row, "tablename", "yslx_t");
//            dw_log.setitem(row, "changecols", "");
//            dw_log.setitem(row, "mainid", jdrmc);
//            dw_log.scrolltorow(row);
//        }
//    }

//    dw_log.AcceptText()
//    var dw_log_data = dw_log.GetChanges();
//    if (dw_log_data == "")
//        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("JdrCskz_Save", "dw_1=" + dw_d_data); //+ "&dw_log=" + dw_log_data

   
    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号

        dw_1.ResetUpdate();
//        dw_log.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
         dw_1.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_1.SetFocus();
    }
}

 }