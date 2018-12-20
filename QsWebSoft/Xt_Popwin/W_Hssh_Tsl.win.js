///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hssh_Tsl() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var ds_1= new DataStore( requestor );

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
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.OK); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.OK); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_1.Detach(); sle_1=null; 
		 ds_1.Detach(); ds_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var dw_mx = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }


    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        sle_1.SetFocus();
    }
    this.OK = function () {

        if (sle_1.GetText() == "" || sle_1.GetText() == null) {
            alert("请输入要查询的海关编码!");
            return;
        }
        //        var format = "xml";
        //        var uid = "hd01";
        //        var method = "getTaxRate";
        //        var code = "5407520091";
        //        var url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&code=" + code + "&user_id=" + uid;
        //        var xml = QsWebSoft.PubMethod.GetXml(url, code).value;
        ////        ds_1.ImportString(xml);

        ////                dw_1.ImportString(xml);
        //                dw_1.ImportStringEx(15,xml);
        dw_1.Reset();
        var code = sle_1.GetText();
        var iw_Hssh_Import = null;
        if (iw_Hssh_Import == null)
            iw_Hssh_Import = new W_Hssh_Tsl_Import();
        iw_Hssh_Import.SetDataWindow(dw_1);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hssh_Tsl_Import&code=" + code, iw_Hssh_Import);



    }

    this.Exit = function () {
        setTimeout("window.close();", 100);
    }

   


 }