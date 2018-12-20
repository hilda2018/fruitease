///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Sys_User_SetPassword() {

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

		 if(typeof(self.Cancel)=="function") 
			 win.AttachEvent("cb_Cancel","Clicked",self.Cancel); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("cb_OK","Clicked",self.OK); 

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

	 this.OK = function () {

	     if (dw_1.AcceptText() != 1) {
	         dw_1.SetFocus();
	         return;
	     }

	     if (parseInt(dw_1.Describe("evaluate('len(password1)',1)")) < 6) {
	         requestor.MessageBox("提示", "密码的长度不能小于6位数", ICON.StopSign);
	         dw_1.SetFocus();
	         return;
	     }
	     if (dw_1.Describe("evaluate('password1 = password2',1)") == "false") {
	         requestor.MessageBox("提示", "两次输入的密码不相符,请重新输入!", ICON.StopSign);
	         dw_1.SetFocus();
	         return;
	     }

	     webReq.Invoke("SetPassword", "data=" + dw_1.GetChanges());
	     if (webReq.StatusCode() == 200) {
	     requestor.MessageBox("提示", "用户密码重置成功!");
	     requestor.Close();
	     }
	     else {
	     requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);

	     }

	 }

    this.Cancel = function () {
        requestor.Close(); 
    }   
}