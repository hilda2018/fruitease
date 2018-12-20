///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Wl_Select() {

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

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("window","Close",self.Exit); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("cb_2","Clicked",self.Exit); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("cb_1","Clicked",self.OK); 

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

    var sle_1=null;
    this.SetParameter = function (parm) {
        sle_1 = parm;
    }

    var dw_d = null;
    this.SetDataWindow = function (dw) {
        dw_d = dw;
    }

     //#region 窗口的OPEN事件
    this.PostOpen = function () {
//        dw_d.ShareData(dw_1);
//        dw_d.InsertRow(0);
    }



    this.OK = function () {
        dw_1.SetItem(1, "gbms", "QD")
        dw_1.RowsCopy(1, 1, DWBUFFER.Primary, dw_d, 1, DWBUFFER.Primary)
        requestor.Close();

    }

    this.Exit = function () {
        dw_1.SetItem(1, "gbms", "QX")
        dw_1.RowsCopy(1, 1, DWBUFFER.Primary, dw_d, 1, DWBUFFER.Primary)
        
        requestor.Close();
    }
}
