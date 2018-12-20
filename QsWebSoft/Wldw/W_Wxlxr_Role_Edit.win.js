///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wxlxr_Role_Edit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.Cancel)=="function") 
			 win.AttachEvent("cb_Cancel","Clicked",self.Cancel); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("cb_Save","Clicked",self.OK); 

		 if(typeof(self.dw_1_ItemChanged)=="function") 
			 win.AttachEvent("dw_1","ItemChanged",self.dw_1_ItemChanged); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改


var dw_List = null;
this.SetListDataWindow = function (dw) {
    dw_List = dw;
}

this.CloseQuery = function () {
    dw_1.AcceptText();
    if (dw_1.ModifiedCount() > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }
}

this.OK = function () {
    if (dw_1.AcceptText() != 1) {
        dw_1.SetFocus();
        return;
    }
    if (dw_1.ModifiedCount() == 0) {
        requestor.MessageBox("提示", "数据没有修改,不需要保存!");
        dw_1.SetFocus();
        return;
    }

    if (!dw_1.CheckData("*", "*")) {
        dw_1.SetFocus();
        return;
    }

    webReq.Invoke("Save", "data=" + dw_1.GetChanges());
    if (webReq.StatusCode() == 200) {

        if (dw_List != null) {
            if (dw_1.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NewModified)
                dw_1.CopyDataEx(1, dw_List, 0);
            else
                dw_1.CopyDataEx(1, dw_List, dw_List.GetRow());

            dw_List.SetFocus();
        }

        dw_1.ResetUpdate();
        requestor.Close();
    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
    }

}

this.Cancel = function () {
    requestor.Close();
}


this.dw_1_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "id") {
        var num = QsWebSoft.PubMethod.CheckRole(data).value;
        if (num > 0) {
            requestor.MessageBox("提示", "角色代码已经存在，请重新确认!");
            return;
        }
    }

}
}
