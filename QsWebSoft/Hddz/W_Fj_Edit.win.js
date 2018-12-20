///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Fj_Edit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var wb_fj= new PBWebBrowser( requestor );
	 var tb_1= new ToolStrip( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(wb_fj == null ) wb_fj= new PBWebBrowser( requestor );
		 wb_fj.Attach( win.Control( "wb_fj") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 wb_fj.Detach(); wb_fj=null; 
		 tb_1.Detach(); tb_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

  

        this.Exit = function () {
            requestor.Close();
        }

       

        //#region 数据查询
        this.Retrieve = function () {
            var lx = requestor.GetParm("lx");
            var gjz = requestor.GetParm("ywbh");
            var user = requestor.GetParm("userid");
            wb_fj.Navigate("/WebExplorer.htm?lx=" + lx + "&gjz=" + gjz + "&user=" + user);
        }
        //#endregion

        //#region 窗口的OPEN事件
        this.PostOpen = function () {
            self.Retrieve();
        }
        //#endregion


}