///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Dzka_Cx() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );

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

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("window","PostOpen",self.Exit); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.OK); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_1","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.PostOpen); 

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
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var method = "";
var billNo = null;
var entryId = "";
var Lx = "";
var xml = "";
var uid = "hd01";
var url = "";
var cloname = ""; 
//#endregion
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
//        Lx = requestor.GetParm("Lx");
//        method = requestor.GetParm("method");
//        billNo = requestor.GetParm("billNo");
//        entryId = requestor.GetParm("entryId");
//        alert()
//        if (billNo != null && billNo != "") {
//            url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&billNo=" + billNo + "&user_id=" + uid;
//        }
//        else {
//            url = "http://api.trainer.nbeport.com/router/rest?method=" + method + "&format=" + format + "&entryId=" + entryId + "&user_id=" + uid;
//        }
//        alert(url);
//        xml = QsWebSoft.PubMethod.GetXml(url, uid);
//        //        dw_1.ImportString(text, Sybase.DataWindow.FileSaveAsType.Xml);
//        dw_1.ImportString(xml);
    }
    this.OK = function () {
//        var row = dw_1.GetRow();
//        if (row <= 0) {
//            requestor.MessageBox("提示", "请选择包装单位!", ICON.StopSign);
//            sle_1.SetFocus();
//            return;

//        }
//        var bzdwc = dw_1.GetItemString(row, 'cname');
//        var bzdwe = dw_1.GetItemString(row, 'ename');
//        if (dw_mx != null) {
//            if (column == "bzdw_c") {
//                dw_mx.SetItem(1, 'bzdw_c', bzdwc);
//                dw_mx.SetItem(1, 'bzdw_e', bzdwe);
//                requestor.Close();
//            };
//        };
    }

    this.Exit = function () {
        requestor.Close();
    }

    this.sle_EditChanged = function (text) {
//        dw_1.SetRedraw(false);
//        if (text == "") {
//            dw_1.SetFilter("");
//            dw_1.Filter();
//        }
//        else {
//            dw_1.SetFilter("( Upper(cname) like '%" + text.toUpperCase + "%') or ( Lower(cname) like '%" + text.toLowerCase() + "%') or ( ename like '%" + text + "%')");
//            dw_1.Filter();
//            dw_1.Sort();
//        }
//        dw_1.SetRedraw(true);
    }



 }