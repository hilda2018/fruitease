///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Hdzt() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_2= new SingleLineEdit( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(sle_2 == null ) sle_2= new SingleLineEdit( requestor );
		 sle_2.Attach( win.Control( "sle_2") ); 

		 if(typeof(self.dw_1_DoubleClicked)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.dw_1_DoubleClicked); 

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

		 if(typeof(self.slesjmc_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.slesjmc_EditChanged); 

		 if(typeof(self.slecph_EditChanged)=="function") 
			 win.AttachEvent("sle_2","EditChanged",self.slecph_EditChanged); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_2.Detach(); sle_2=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var iw_Wldw_Select = null;
    
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Sz_Hdzt.ashx");



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


//#region 双击
this.dw_1_DoubleClicked = function (xPos, yPos, Row, dwoName) {
    if (Row > 0) {
        if (dwoName == "cdmc") {
            if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_1);
            iw_Wldw_Select.SetData("sj");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_1.SetFocus();

        }
    }

}
//#endregion


//#region 过滤
this.slesjmc_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    if (text == "")
        dw_1.SetFilter("");
    else
        dw_1.SetFilter("( Upper(cjmc) like '%" + text + "%')  or ( Lower(cjmc) like '%" + text + "%')");
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

 


this.InsertRow = function () {
    var row = dw_1.InsertRow(0);
   
 

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

 }