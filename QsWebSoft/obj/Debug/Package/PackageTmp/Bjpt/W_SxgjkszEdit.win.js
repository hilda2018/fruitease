///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_SxgjkszEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var sle_ts= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(sle_ts == null ) sle_ts= new SingleLineEdit( requestor );
		 sle_ts.Attach( win.Control( "sle_ts") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_jzxxx == null ) ds_jzxxx= new DataStore( requestor );
		 ds_jzxxx.Attach( win.Control( "ds_jzxxx") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_jzxxx","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_jzxxx_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_jzxxx_GetFocus); 

		 if(typeof(self.dw_jzxxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","ItemChanged",self.dw_jzxxx_ItemChanged); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.RowCopy)=="function") 
			 win.AttachEvent("btn_rowcopy","Clicked",self.RowCopy); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowinsert","Clicked",self.InsertRow); 

		 if(typeof(self.dw_cmd_RowNext)=="function") 
			 win.AttachEvent("btn_rownext","Clicked",self.dw_cmd_RowNext); 

		 if(typeof(self.dw_cmd_RowBack)=="function") 
			 win.AttachEvent("btn_rowback","Clicked",self.dw_cmd_RowBack); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_print","Clicked",self.Print); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_master.Detach(); dw_master=null; 
		 sle_ts.Detach(); sle_ts=null; 
		 tb_1.Detach(); tb_1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_jzxxx.Detach(); ds_jzxxx=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = ""; 
    var dwc = new DataWindowChild(); 
    
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Sxgjksz.ashx");

    
    
    //#endregion

    //#region 设置窗口是否可编辑
    this.SetEditMode = function (newMode) {
        editMode = newMode;
        var bEditFlag = false;
        if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
            bEditFlag = true;
        }
        else {
            bEditFlag = false;
        };
//        if (tab_1.GetSelectedTab() == 2) {
//            tb_1.SetVisible("btn_rowadd", false);
//            tb_1.SetVisible("btn_rowdelete", false);
//            tb_1.SetVisible("btn_rowcopy", false);
//            tb_1.SetVisible("btn_rownext", false);
//            tb_1.SetVisible("btn_rowinsert", false);
//        }
//        else {
//            tb_1.SetVisible("btn_save", bEditFlag);
//            tb_1.SetVisible("btn_rowadd", bEditFlag);
//            tb_1.SetVisible("btn_rowdelete", bEditFlag);
//            tb_1.SetVisible("btn_rowcopy", bEditFlag); 
//            tb_1.SetVisible("btn_rownext", bEditFlag);
//            tb_1.SetVisible("btn_rowback", bEditFlag);
//            tb_1.SetVisible("btn_rowinsert", bEditFlag);
//        }

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_jzxxx.Modify("DataWindow.Readonly=no");
             
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
             
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus();
         var operation = requestor.GetParm("operation");
       
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else {
            self.SetEditMode("show");
        };


    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_jycljtyq_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    

    //#region 关闭窗口
    this.Exit = function () {
        if (self.CloseQuery() == 1)
            return;
        setTimeout("window.close();", 100);
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();
        dw_jzxxx.AcceptText(); 
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_jzxxx.AcceptText() != 1)
            return



        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_master.GetRow();
        var id = dw_master.GetItemString(row, "id");


        //更新行号
        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "interid", id);
            dw_jzxxx.SetItem(row, "id", row);
        }



        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();

        if (dw_master_data == "" && dw_jzxxx_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&id=" + id + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            id = webReq.ResponseText();
            dw_master.SetItem(1, "id", id);


            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "interid", id);
                var idcxh = id + row.toString();
                dw_jzxxx.SetItem(row, "id", idcxh);
            }



            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();


            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("id.Tabsequence=0");


        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion


    //#region 插入商品
    this.InsertRow = function () {
        var row = dw_jzxxx.InsertRow(lastdw.GetRow());
        dw_jzxxx.ScrollToRow(row);
        dw_jzxxx.SetFocus(); 
    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
        var row = dw_jzxxx.InsertRow(0);
         dw_jzxxx.ScrollToRow(row);
         dw_jzxxx.SetFocus();
    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = dw_jzxxx.GetRow();
        if (row <= 0)
            return;

        var status = dw_jzxxx.GetItemStatus(row, 0, DWBUFFER.Primary);

        if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
            if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                lastdw.SetFocus();
                return;
            }
        }
        dw_jzxxx.DeleteRow(row);
     
    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
        return;
        lastdw.RowsCopy(row, row, DWBUFFER.Primary, lastdw, row + 1, DWBUFFER.Primary)
        lastdw.ScrollToRow(row + 1);
    }
    //#endregion


    //#region 打印 
    this.Print = function () {
        var id = dw_master.GetItemString(1, "id");
        dw_print.SetDataObject("dw_cpxxk_print");
        dw_print.Retrieve(id);
        dw_print.PrintPreview();
    }
    //#endregion
  
    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
         
    }
    //#endregion


    //#region 双击
    this.dw_jzxxx_jydzyq_DoubleClicked = function (xPos, yPos, Row, dwoName) {
       
    }
        //#endregion

       

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
 
        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");

        var date = new Date();
        var ywyobj = new Array(2);
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid(userid).value;
        if (ywyobj == null) {
            var ywy = "";
            var bm = "";
        }
        else {
            if (ywyobj.length == 0) {
                var ywy = "";
                var bm = "";

            }
            else {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }
         
       self.SetEditMode("new");
      
    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        
        var date = new Date();

        dw_master.SetItem(1, "id", ""); 
        
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        

    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        
       
    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {
        dw_master.AcceptText();       
    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
       
    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {       
        dw_jzxxx.SetFocus();
    }
    //#endregion

     

    //#region dw_jzxxx ItemChanged
    this.dw_jzxxx_ItemChanged = function (row, dwoName, data) {
       
    }
    //#endregion

    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
             ll_row_from = lastdw.GetRow();
            ll_row_count = lastdw.RowCount();

            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = lastdw.RowCount();
            }

            if (ll_row_to == ll_row_from) {
                return;
            }
            lastdw.SetRedraw(false);
            lastdw.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, lastdw, ll_row_to, DWBUFFER.Primary);
            lastdw.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                lastdw.ScrollToRow(ll_row_from + 1);
            }
            else {
                lastdw.ScrollToRow(ll_row_count);
            }

            if (lastdw.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                lastdw.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
    }
    //#endregion



    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
        ll_row_from = lastdw.GetRow();
        ll_row_count = lastdw.RowCount();
        if (ll_row_from > 1) {
            ll_row_to = ll_row_from -1 ;
        }
        else {
            ll_row_to = 1;
        }

        lastdw.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, lastdw, ll_row_to, DWBUFFER.Primary);
        if (ll_row_from > 1 ) {
            lastdw.ScrollToRow(ll_row_from - 1);
        }
        else {
            lastdw.ScrollToRow(1);
        }

        if (lastdw.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
            lastdw.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
        }
    }
    //#endregion

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    
}





