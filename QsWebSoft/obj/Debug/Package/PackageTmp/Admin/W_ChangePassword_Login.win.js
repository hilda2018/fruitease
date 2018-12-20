///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_ChangePassword_Login() {

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
			 win.AttachEvent("window","Close",self.Cancel); 

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

    var webReq = null;
    this.OK = function () {
        dw_1.AcceptText();
        var oldPwd = dw_1.GetItemString(1, "OldPwd");
        if (oldPwd == "" || oldPwd.length < 6) {
            requestor.MessageBox("提示", "请输入原来的用户密码,密码的长度不能小于6位数!", ICON.StopSign);
            dw_1.SetColumn("oldPwd");
            dw_1.SetFocus();
            return;
        }

        var newPwd1 = dw_1.GetItemString(1, "NewPwd1");
        var newPwd2 = dw_1.GetItemString(1, "NewPwd2");
        if (newPwd1 == "") {
            requestor.MessageBox("提示", "请输入新的用户密码!", ICON.StopSign);
            dw_1.SetColumn("NewPwd1");
            dw_1.SetFocus();
            return;
        }
        //---zdy  add
        if (newPwd1 == oldPwd) {
            requestor.MessageBox("提示", "新密码不能与旧密码相同!", ICON.StopSign);
            dw_1.SetColumn("NewPwd1");
            dw_1.SetFocus();
            return;
        }
        //------zdy end
        if (newPwd1.length < 6) {
            requestor.MessageBox("提示", "用户密码的长度不能小于6位数!", ICON.StopSign);
            dw_1.SetColumn("NewPwd1");
            dw_1.SetFocus();
            return;
        }

        if (newPwd1 != newPwd2) {
            requestor.MessageBox("提示", "两次输入的密码不一致,请重新输入!", ICON.StopSign);
            dw_1.SetColumn("NewPwd1");
            dw_1.SetFocus();
            return;
        }

        if (newPwd1 == "888888" || newPwd2 == "888888") {
            requestor.MessageBox("提示", "新密码不能跟初始密码一样，请重新输入!", ICON.StopSign);
            dw_1.SetColumn("NewPwd1");
            dw_1.SetFocus();
            return;
        }


        if (webReq == null) {
            webReq = new WebRequestor();
            webReq.SetWebServiceUrl("/Service/Sys_Users.ashx");
        }
        webReq.Invoke("ChangePwd", "data=" + dw_1.GetChanges());
        if (webReq.StatusCode() == 200) {
            requestor.MessageBox("提示", "用户密码修改成功!");
            requestor.Close();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_1.SetFocus();
            return;
        }
    }
    //----zdy  edit 
    //取消按钮事件 若是默认密码跳转到Login页面，反之亦然;
    this.Cancel = function () {
       
            window.external.Document.location = "/Login.aspx";
            requestor.Close();
            

    }
    //-----zdy end 

}