///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Cdgzlx_Select() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var ss_1= new ToolStrip( requestor );

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
		 if(ss_1 == null ) ss_1= new ToolStrip( requestor );
		 ss_1.Attach( win.Control( "ss_1") ); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.OK); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

		 if(typeof(self.CopyRow)=="function") 
			 win.AttachEvent("btn_2","Clicked",self.CopyRow); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_1.Detach(); sle_1=null; 
		 ss_1.Detach(); ss_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //获取数据窗口

     var dw_name = null;
     this.SetName = function (dw) {
         dw_name = dw;
     }
     var dw_mx = null;
     this.SetDataWindow = function (dw) {
         dw_mx = dw;
     }

     var rownum = 0;
     this.SetRow = function (row) {
         rownum = row;
     }

     var lx = "";
     this.SetLx = function (parm) {
         lx = parm;
     }



     this.OK = function () {

         if (dw_name == null)
             return;
         //明细单

         var count = dw_1.RowCount();
         var data = "";
         for (var i = 1; i <= count; i++) {
             var selected = dw_1.GetItemString(i, "selected");
             if (selected == 'Y') {
                 var type = dw_1.GetItemString(i, "type");
                 data += type + ",";

                 var chepai = dw_1.GetItemString(i, "chepai");
                 var apsj = dw_1.GetItemString(i, "apsj");

                 var dd = QsWebSoft.PubMethod.cdgzap(chepai, apsj, type).value;
                
             }
         }



         dw_mx.SetItem(rownum, dw_name, data);


         requestor.Close();

     }
     //复制行
     this.CopyRow = function () {
         var row = dw_1.GetRow();
         if (row <= 0)
             return;

         dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
         dw_1.ScrollToRow(row + 1);


     }

     //增加记录
     this.Hddz = function () {
         var count = 0;
         var Clqy_sum = "";
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }
             Clqy = dw_1.GetItemString(row, "clqy");
             if (Clqy_sum == "") {
                 Clqy_sum = Clqy;
             } else {
                 Clqy_sum = Clqy_sum + "," + Clqy;
             };

         }
        

         dw_d.SetItem(1, "clqy", Clqy_sum);
     

     }

     this.Exit = function () {
         requestor.Close();
     }
    
//	 //#region 刷新
//	 this.Retrieve = function () {
//	     var ywy = requestor.GetParm("ywy");
//	     var ShareMode = requestor.GetParm("ShareMode");
//	     var Dlwtf = requestor.GetParm("Dlwtf");
//	     var Ycddm = requestor.GetParm("Ycddm");
//	     var Spbm = requestor.GetParm("Spbm");
//	     dw_1.Retrieve(Ycddm, Spbm);

//	 }
	 //#endregion
  }