///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wxlxr_Role_List() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

		 if(typeof(self.Add)=="function") 
			 win.AttachEvent("btn_Add","Clicked",self.Add); 

		 if(typeof(self.Edit)=="function") 
			 win.AttachEvent("btn_Edit","Clicked",self.Edit); 

		 if(typeof(self.Delete)=="function") 
			 win.AttachEvent("btn_Delete","Clicked",self.Delete); 

		 if(typeof(self.SetUsers)=="function") 
			 win.AttachEvent("btn_SetUsers","Clicked",self.SetUsers); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改


    var iw_Edit = null; 
    var iw_SetUsers = null;

	 this.Add = function () {
	     if (iw_Edit == null) {
	         iw_Edit = new W_Wxlxr_Role_Edit();
	         iw_Edit.SetListDataWindow(dw_1);
	     }
	     requestor.Open("/LoadWindow.ashx?WinName=Wldw.W_Wxlxr_Role_Edit", iw_Edit);
	 }

	 this.Edit = function () {
	     if (dw_1.GetRow() <= 0)
	         return;

	     if (iw_Edit == null) {
	         iw_Edit = new W_Wxlxr_Role_Edit();
	         iw_Edit.SetListDataWindow(dw_1);
	     }
	     var id = escape(dw_1.GetItemString(dw_1.GetRow(), "ID"));
	     requestor.Open("/LoadWindow.ashx?WinName=Wldw.W_Wxlxr_Role_Edit&ID=" + id, iw_Edit);
	 }

	 this.Delete = function () {
	     if (dw_1.GetRow() <= 0)
	         return;
	     var name = dw_1.GetItemString(dw_1.GetRow(), 'id');
	     if (name == "admin") {
	         requestor.MessageBox("提示", "管理员角色不能删除！", ICON.Information);
	         return;
	     }
	     if (requestor.MessageBox("提示", "真的要删除当前选择的用户角色吗?", ICON.Question, BUTTON.YesNo) == 2) {
	         dw_1.SetFocus();
	         return;
	     }

	     webReq.Invoke("delete", "id=" + escape(dw_1.GetItemString(dw_1.GetRow(), "ID")));
	     if (webReq.StatusCode() == 200) {
	         dw_1.RowsDiscard(dw_1.GetRow(), dw_1.GetRow(), DWBUFFER.Primary);
	         dw_1.SetFocus();
	     }
	     else {
	         requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
	     }
	     dw_1.SetFocus();
	 }

	 this.dw_1_DoubleClicked = function (xPos, yPos, Row, dwoName) {
	 }

	

	 this.SetUsers = function () {
	     if (dw_1.GetRow() <= 0)
	         return;
	     if (iw_SetUsers == null)
	         iw_SetUsers = new W_Wxlxr_Role_SetUsers();

	     requestor.Open("/LoadWindow.ashx?WinName=Wldw.W_Wxlxr_Role_SetUsers&id=" + dw_1.GetItemString(dw_1.GetRow(), "ID"), iw_SetUsers );

	 }
}

var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Wxlxr_Role.ashx"); 
