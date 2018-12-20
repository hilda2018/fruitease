///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Gen_Bgsp() {

	 var self=this;
	 var requestor= new PBWindow();
	 var rb_8= new RadioButton( requestor );
	 var rb_7= new RadioButton( requestor );
	 var rb_6= new RadioButton( requestor );
	 var rb_5= new RadioButton( requestor );
	 var rb_4= new RadioButton( requestor );
	 var rb_3= new RadioButton( requestor );
	 var rb_2= new RadioButton( requestor );
	 var rb_1= new RadioButton( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(rb_8 == null ) rb_8= new RadioButton( requestor );
		 rb_8.Attach( win.Control( "rb_8") ); 
		 if(rb_7 == null ) rb_7= new RadioButton( requestor );
		 rb_7.Attach( win.Control( "rb_7") ); 
		 if(rb_6 == null ) rb_6= new RadioButton( requestor );
		 rb_6.Attach( win.Control( "rb_6") ); 
		 if(rb_5 == null ) rb_5= new RadioButton( requestor );
		 rb_5.Attach( win.Control( "rb_5") ); 
		 if(rb_4 == null ) rb_4= new RadioButton( requestor );
		 rb_4.Attach( win.Control( "rb_4") ); 
		 if(rb_3 == null ) rb_3= new RadioButton( requestor );
		 rb_3.Attach( win.Control( "rb_3") ); 
		 if(rb_2 == null ) rb_2= new RadioButton( requestor );
		 rb_2.Attach( win.Control( "rb_2") ); 
		 if(rb_1 == null ) rb_1= new RadioButton( requestor );
		 rb_1.Attach( win.Control( "rb_1") ); 

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

		 rb_8.Detach(); rb_8=null; 
		 rb_7.Detach(); rb_7=null; 
		 rb_6.Detach(); rb_6=null; 
		 rb_5.Detach(); rb_5=null; 
		 rb_4.Detach(); rb_4=null; 
		 rb_3.Detach(); rb_3=null; 
		 rb_2.Detach(); rb_2=null; 
		 rb_1.Detach(); rb_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var sle_1=null;
    this.SetParameter = function (parm) {
        sle_1 = parm;
    }
    this.OK = function () {
        var selecttion = "";
        //按相同的HS编码  合并
        if (rb_1.GetChecked() == true) {
            selecttion = "1";
        }
        //按相同的HS编码 + 中英文品名  合并
        if (rb_2.GetChecked() == true) {
            selecttion = "2";
        }
        //按相同的HS编码 + 中英文品名 + 计量单位  合并
        if (rb_3.GetChecked() == true) {
            selecttion = "3";
        }
        //按相同的HS编码 + 计量单位  合并
        if (rb_4.GetChecked() == true) {
            selecttion = "4";
        }
        //按相同的HS编码 + 中文品名 合并
        if (rb_5.GetChecked() == true) {
            selecttion = "5";
        }
        //按相同的HS编码 + 英文品名 + 包装单位 合并
        if (rb_6.GetChecked() == true) {
            selecttion = "6";
        }
        //按相同的HS编码 + 中英文品名+规格  合并
        if (rb_7.GetChecked() == true) {
            selecttion = "7";
        }
        //按相同的HS编码 + 中英文品名+规格  合并
        if (rb_8.GetChecked() == true) {
            selecttion = "8";
        }
        sle_1.SetText(selecttion);
        requestor.Close();

    }

    this.Exit = function () {
        sle_1.SetText("CANCEL");
        requestor.Close();
    }
}
