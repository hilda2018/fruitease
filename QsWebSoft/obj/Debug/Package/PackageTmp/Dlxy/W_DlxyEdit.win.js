///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_DlxyEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_cmd= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ds_dlxycsh= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_cmd == null ) dw_cmd= new DataWindow( requestor );
		 dw_cmd.Attach( win.Control( "dw_cmd") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ds_dlxycsh == null ) ds_dlxycsh= new DataStore( requestor );
		 ds_dlxycsh.Attach( win.Control( "ds_dlxycsh") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_EditChanged)=="function") 
			 win.AttachEvent("dw_master","EditChanged",self.dw_master_EditChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_EntertoTab)=="function") 
			 win.AttachEvent("dw_master","KeyDown",self.dw_master_EntertoTab); 

		 if(typeof(self.dw_cmd_DoubleClicked)=="function") 
			 win.AttachEvent("dw_cmd","DoubleClicked",self.dw_cmd_DoubleClicked); 

		 if(typeof(self.dw_cmd_EditChanged)=="function") 
			 win.AttachEvent("dw_cmd","EditChanged",self.dw_cmd_EditChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_cmd","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_cmd_ItemChanged)=="function") 
			 win.AttachEvent("dw_cmd","ItemChanged",self.dw_cmd_ItemChanged); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowinsert","Clicked",self.InsertRow); 

		 if(typeof(self.RowCopy)=="function") 
			 win.AttachEvent("btn_rowcopy","Clicked",self.RowCopy); 

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

		 tab_1.Detach(); tab_1=null; 
		 dw_master.Detach(); dw_master=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_cmd.Detach(); dw_cmd=null; 
		 tb_1.Detach(); tb_1=null; 
		 ds_dlxycsh.Detach(); ds_dlxycsh=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Commodity_Select = null;
    var iw_Eport_Select = null;
    var iw_Country_Select = null;
    var iw_Jnhyd_Select = null;
    var iw_Dlxy_Select = null;
    var iw_Wldw_Select = null;
    var dwc = new DataWindowChild();
 
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Dlxy.ashx");

    
    
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
        if (tab_1.GetSelectedTab() == 1) {

            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
//            tb_1.SetVisible("btn_rowinsert", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
        }
        else {
            tb_1.SetVisible("btn_save", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rowinsert", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
        }

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_cmd.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_cmd.Modify("DataWindow.Readonly=yes");
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
                dw_master.Modify("dlxyh.Tabsequence=0");
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
        dw_cmd.AcceptText();

        if ((dw_master.ModifiedCount()  + dw_cmd.DeletedCount() + dw_cmd.ModifiedCount() ) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_cmd.AcceptText() != 1)
            return;

        

        if ((dw_master.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
        var row = dw_master.GetRow();
        if (dw_master.GetItemString(row, "jdrbm") == "" || dw_master.GetItemString(row, "jdrbm") == null) {
            alert("请选择接单人!");
            return;
        }
        var dlxyh = dw_master.GetItemString(row, "dlxyh");
        var bbh = dw_master.GetItemNumber(row, "bbh");
        dlxyh = dlxyh.replace(' ', '');
        if (dlxyh.indexOf("&") > 0) {
            alert("明细单编号不能包含&符号!");
            return;
        }
        if (dlxyh.indexOf("%") > 0) {
            alert("明细单编号不能包含%符号!");
            return;
        }

        if (dlxyh.indexOf("#") > 0) {
            alert("明细单编号不能包含#符号!");
            return;
        }
        if (dlxyh.indexOf(",") > 0) {
            alert("明细单编号不能包含逗号!");
            return;
        }
        if (dlxyh.indexOf("（") > 0) {
            alert("明细单编号不能包含中文括号左符号!");
            return;
        }
        if (dlxyh.indexOf("）") > 0) {
            alert("明细单编号不能包含中文右括号!");
            return;
        }
        dw_master.SetItem(row, "dlxyh", dlxyh);
        if (dlxyh == null || dlxyh == "") {
            alert("请输入明细单编号!");
            tab_1.SelectTab(1);
            dw_master.SetFocus();
            dw_master.SetColumn("dlxyh")
            return;
        }




        var num = QsWebSoft.PubMethod.CheckDlxyh(dlxyh, bbh).value;
        if (num > 0 && (editMode == "new" || editMode == "copy")) {
            alert("提示，明细单编号已经存在,请重新编写!");
            tab_1.SelectTab(1);
            dw_master.SetFocus();
            dw_master.SetColumn("dlxyh")
            return;
        }

        var dlwtf_bm = dw_master.GetItemString(row, "dlwtf_bm");
        if (dlwtf_bm == null || dlwtf_bm == "") {
            alert("请选择!");
            dw_master.SetFocus();
            dw_master.SetColumn("dlwtf_bm")
            return;
        }


        var yxrq = dw_master.GetItemDate( row, "yxrq" );
        if ( yxrq == null || yxrq == "1900/01/01" )
        {
            alert( "请输入有效日期，否则货代单证中将选择不到!" );
            dw_master.SetFocus();
            dw_master.SetColumn( "yxrq" )
            return;
        }
        

        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {

            dw_cmd.SetItem(row, "cxh", row);
            dw_cmd.SetItem(row, "dlxyh", dlxyh);
            dw_cmd.SetItem(row, "bbh", bbh);
        }

        if (dw_cmd.RowCount() == 0) {
            alert("明细单没有商品信息!");
            dw_cmd.SetFocus();
            return;
        }




        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();

        if (dw_master_data == "" && dw_cmd_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data + "&dlxyh=" + dlxyh + "&bbh=" + bbh + "&operation=" + editMode);
        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            dlxyh = webReq.ResponseText();
            dw_master.SetItem(1, "dlxyh", dlxyh);
            for (row = 1; row <= dw_cmd.RowCount(); row++) {
                dw_cmd.SetItem(row, "dlxyh", dlxyh);
            }

            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("dlxyh.Tabsequence=0");

            dw_cmd.SetFocus();

            //执行更新的WebService

//            requestor.MessageBox("提示", dlxyh);

//            var dlwtf_bm = dw_master.GetItemString(1, "dlwtf_bm");
//            requestor.MessageBox("提示dlwtf_bm", dlwtf_bm);
//            webReq.SetFunctionID(requestor.GetFunctionID());
//            webReq.Invoke("UpdateDlxyState", "dlxyh=" + dlxyh + "&dlwtf_bm=" + dlwtf_bm);
//          




        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion


    //#region 插入商品
    this.InsertRow = function () {
        var row = dw_cmd.InsertRow(dw_cmd.GetRow());
        dw_cmd.ScrollToRow(row);
        dw_cmd.AcceptText();


    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
        var row = dw_cmd.InsertRow(0);
        dw_cmd.ScrollToRow(row);
        dw_cmd.SetFocus();
    };
    //#endregion


    //#region 删除商品
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;

        if (lastdw.GetName() == 'dw_cmd' || lastdw.GetName() == 'dw_fy') {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            lastdw.DeleteRow(row);
            self.SetZje();
        }


    }
    //#endregion


    

    //#region 复制商品
    this.RowCopy = function () {
        var row = dw_cmd.GetRow();
        if (row <= 0)
            return;

        dw_cmd.RowsCopy(row, row, DWBUFFER.Primary, dw_cmd, row + 1, DWBUFFER.Primary)
            dw_cmd.ScrollToRow(row + 1);
            self.SetZje();


    }
    //#endregion


    //#region 打印 
    this.Print = function () {

        var dlxyh = dw_master.GetItemString(1, "dlxyh");
        var bbh = dw_master.GetItemNumber(1, "bbh");
        dw_print.SetDataObject("dw_dlxy_print");
        dw_print.Retrieve(dlxyh, bbh);
        dw_print.PrintPreview();
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
        var arrayobj = new Array(4);
        arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyWtf(Dlwtf).value;
        if (arrayobj == null) {
            var cname = "";
            var ename = "";
            var eaddr = "";
            var tt_no = "";
        }
        else {
            if (arrayobj.length == 0) {
                var cname = "";
                var ename = "";
                var eaddr = "";
                var tt_no = "";

            }
            else {
                cname = arrayobj[0];
                ename = arrayobj[1];
                eaddr = arrayobj[2];
                tt_no = arrayobj[3];
            }
        }

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

        var Dlwtf = requestor.GetParm("Dlwtf");
        var Dlxyh = null;
        Dlxyh = QsWebSoft.PubMethod.GetDlxyhImformationbyUserid(Dlwtf).value;

        //代理协议条款初始化
        ds_dlxycsh.Retrieve('dlxycsh',0)
        ds_dlxycsh.RowsCopy(1, 1000, DWBUFFER.Primary, dw_cmd, 1, DWBUFFER.Primary)


//        dw_kehu.SetItem(1, "tt_no", tt_no)
//        dw_kehu.SetItem(1, "jydw_cname", cname)
//        dw_kehu.SetItem(1, "jydw_ename", ename)
//        dw_kehu.SetItem(1, "jydw_eaddr", eaddr)
//        dw_kehu.SetItem(1, 'jydwxx', ename + '\n' + eaddr)
//        dw_tyzss.SetItem(1, "yfzdtt", cname)
        dw_master.SetItem(1, 'zdr', userid);
        dw_master.SetItem(1, 'ywy', ywy);
        dw_master.SetItem(1, 'bm', bm);
        dw_master.SetItem(1, 'sqrq', date.getVarDate());
//        dw_master.SetItem(1, 'fprq', date.getVarDate());
        dw_master.SetItem(1, 'state', "新制");
//        dw_master.SetItem(1, 'spjc', "未审批");
        dw_master.SetItem(1, 'wbbb', "USD");
        self.SetEditMode("new");

    }
    //#endregion

    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "bbh", 1);
        dw_master.SetItem(1, "dlxyh", "");
        dw_master.SetItem(1, "zdr", userid);
        dw_master.SetItem(1, "zdrq", date.getVarDate());
       

        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "spjc", "未审批");
        
        self.SetZje();
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "dlwtf_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("dlxy_dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "dlstf_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "hdgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("dlxy_dlstf");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "dljdr_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            jdr = "jdr";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("dlxy_dljdr");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select);
            dw_master.SetFocus();
        }
    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        
        
    }
    //#endregion


    //#region dw_kehu弹出选择
    this.dw_kehu_Clicked = function (xPos, yPos, Row, dwoName) {
        var khlx = "";
        if (editMode == "show")
            return;
        if (dwoName == "khbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gwcgs";
            var ywy = requestor.GetParm("userid"); 
            var ShareMode = requestor.GetParm("ShareMode"); 
            var Dlwtf = requestor.GetParm("Dlwtf"); 
            iw_Wldw_Select.SetDataWindow(dw_kehu);
            iw_Wldw_Select.SetData("khbm");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }

       
    }
    //#endregion

  
    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
//        if (lastdw.GetName() == 'dw_cmd') {
            ll_row_from = dw_cmd.GetRow();
            ll_row_count = dw_cmd.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_cmd.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_cmd.SetRedraw(false);
            dw_cmd.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_cmd, ll_row_to, DWBUFFER.Primary);
            dw_cmd.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_cmd.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_cmd.ScrollToRow(ll_row_count);
            }

            if (dw_cmd.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_cmd.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
//        }

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
//        if (lastdw.GetName() == 'dw_cmd') {
            ll_row_from = dw_cmd.GetRow();
            ll_row_count = dw_cmd.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from -1 ;
            }
            else {
                ll_row_to = 1;
            }


//            if (ll_row_to == ll_row_from) {
//                return;
//            }
            dw_cmd.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_cmd, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1 ) {
                dw_cmd.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_cmd.ScrollToRow(1);
            }

            if (dw_cmd.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_cmd.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
//        }

    }
    //#endregion

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    //#region dw_kehu ItemChanged
    this.dw_kehu_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "tt_no") {

            var arrayobj = new Array(3);
            arrayobj = QsWebSoft.PubMethod.GetCompanyImformation(data).value;
            if (arrayobj == null) {
                var cname = "";
                var ename = "";
                var eaddr = "";
            }
            else {
                if (arrayobj.length == 0) {
                    var cname = "";
                    var ename = "";
                    var eaddr = "";

                }
                else {
                    var cname = arrayobj[0];
                    var ename = arrayobj[1];
                    var eaddr = arrayobj[2];
                }
            }
            dw_kehu.SetItem(1, "jydw_cname", cname)
            dw_kehu.SetItem(1, "jydw_ename", ename)
            dw_kehu.SetItem(1, "jydw_eaddr", eaddr)
            dw_kehu.SetItem(1, 'jydwxx', ename + '\n' + eaddr)
        }
    }
    //#endregion

   

    //#region tabselect
    var lastdw = new DataWindow();
    this.Tab_Select = function () {
        if (tab_1.GetSelectedTab() == 2) {
            var bEditFlag = false;
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
//            tb_1.SetVisible("btn_rowinsert", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
//            lastdw = dw_cmd;
        }
        if (tab_1.GetSelectedTab() == 3) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", false);
//            tb_1.SetVisible("btn_rowinsert", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
//            lastdw = dw_fy;
        }

        if (tab_1.GetSelectedTab() == 1 || tab_1.GetSelectedTab() == 6) {

            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
//            tb_1.SetVisible("btn_rowinsert", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
//            lastdw = dw_master;
        }
    };
    //#endregion


    //#region 获取字符串长度
    function len(s) {
        var l = 0; 
        var a = s.split("");
        for (var i = 0; i < a.length; i++) {
            if (a[i].charCodeAt(0) < 299)
            { l++; }
            else { l += 2; } 
        }
        return l;
    }

    //#endregion

}
