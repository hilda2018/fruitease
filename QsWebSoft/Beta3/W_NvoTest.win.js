///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_NvoTest() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var cb_6= new CommandButton( requestor );
	 var dw_1= new DataWindow( requestor );
	 var nvoTest= new NvoTest( requestor );
	 var httpClient= new HttpClientTest( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(cb_6 == null ) cb_6= new CommandButton( requestor );
		 cb_6.Attach( win.Control( "cb_6") ); 
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(nvoTest == null ) nvoTest= new NvoTest( requestor );
		 nvoTest.Attach( win.Control( "nvoTest") ); 
		 if(httpClient == null ) httpClient= new HttpClientTest( requestor );
		 httpClient.Attach( win.Control( "httpClient") ); 

		 if(typeof(self.GetData)=="function") 
			 win.AttachEvent("cb_8","Clicked",self.GetData); 

		 if(typeof(self.PostData)=="function") 
			 win.AttachEvent("cb_7","Clicked",self.PostData); 

		 if(typeof(self.SetButtonText)=="function") 
			 win.AttachEvent("cb_6","Clicked",self.SetButtonText); 

		 if(typeof(self.OpenWindow2)=="function") 
			 win.AttachEvent("cb_5","Clicked",self.OpenWindow2); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("cb_4","Clicked",self.OpenWindow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("cb_3","Clicked",self.DeleteRow); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("cb_2","Clicked",self.InsertRow); 

		 if(typeof(self.FormatDate)=="function") 
			 win.AttachEvent("cb_1","Clicked",self.FormatDate); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 cb_6.Detach(); cb_6=null; 
		 dw_1.Detach(); dw_1=null; 
		 nvoTest.Detach(); nvoTest=null; 
		 httpClient.Detach(); httpClient=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    this.FormatDate = function () {
        var value = nvoTest.FormatDate(new Date(), "yyyy-mm-dd hh:mm");
        alert(value);

    }
    this.InsertRow = function () {
        nvoTest.InsertRow(0);
    }
    this.DeleteRow = function () {
        nvoTest.DeleteRow(0);
    }
    this.OpenWindow = function () {
        nvoTest.OpenWindow("W_Demo");
    }

    this.OpenWindow2 = function () {
        nvoTest.OpenWindow("W_Test",dw_1 );
    }

    this.SetButtonText = function () {
        requestor.MessageBox("提示", "点击确定后,当前按钮的文本将被修改!");
        nvoTest.SetButtonText("cb_6", "^-^");

    }

    this.PostData = function () {
        var data = httpClient.PostData("/Beta3/PostData.ashx", "name=同享软件", "application/x-www-form-urlencoded;");
        requestor.MessageBox("提示", data);
    }
    this.GetData = function () {
        var data = httpClient.GetData("/Beta3/GetData.ashx");
        requestor.MessageBox("提示", data);
    }
}