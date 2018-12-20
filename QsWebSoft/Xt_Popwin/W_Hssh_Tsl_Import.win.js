///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hssh_Tsl_Import() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
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
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.OK); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 ds_1.Detach(); ds_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var dw_mx = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
        for (row = dw_mx.RowCount(); row > 0; row--) {
            dw_mx.DeleteRow(row);
        }
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }
    
    //#region 窗口的OPEN事件
    this.PostOpen = function () {
//        self.OK();
        //        alert(dw_mx.RowCount());
    }
    this.OK = function () {
        if (dw_1.RowCount() == 0) {
            alert("未查到对应的信息!")
            requestor.Close();
            return;
        }
//        for (row = dw_1.RowCount(); row > 0; row--) {


//            sxrq = dw_1.GetItemString(row, "vesselname");
//            jsrq = dw_1.GetItemString(row, "voyage");
//            if (sxrq != null && sxrq != "") {
//                name = dw_1.GetItemString(row, "stepname");
//                unit = dw_1.GetItemString(row, "remark");
//                dwcode = dw_1.GetItemString(row, "ctnno");
//                zssl_Set = dw_1.GetItemString(row, "billno");
//                tsl = dw_1.GetItemString(row, "procresul");
//                hgbm = dw_1.GetItemString(row, "hgbm");
//            }
//            insertrow = dw_mx.InsertRow(0);
//            dw_mx.SetItem(insertrow, "vesselname", sxrq);
//            dw_mx.SetItem(insertrow, "voyage", jsrq);
//            dw_mx.SetItem(insertrow, "stepname", name);
//            dw_mx.SetItem(insertrow, "remark", unit);
//            dw_mx.SetItem(insertrow, "ctnno", dwcode);
//            dw_mx.SetItem(insertrow, "procresul", tsl);
//            dw_mx.SetItem(insertrow, "billno", zssl_Set);
//            dw_mx.SetItem(insertrow, "hgbm", hgbm);
//        }
        requestor.Close();
    }

    this.Exit = function () {
        requestor.Close();
    }

    this.sle_EditChanged = function (text) {
        dw_1.SetRedraw(false);
        if (text == "") {
            dw_1.SetFilter("");
            dw_1.Filter();
        }
        else {
            dw_1.SetFilter("( Upper(hs_code) like '%" + text + "%') or ( Lower(cname) like '%" + text + "%') or ( cname like '%" + text + "%')");
            dw_1.Filter();
            dw_1.Sort();
        }
        dw_1.SetRedraw(true);
    }


 }