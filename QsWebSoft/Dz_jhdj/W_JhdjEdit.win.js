///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_JhdjEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_cmd= new DataWindow( requestor );
	 var dw_spms= new DataWindow( requestor );
	 var dw_fy= new DataWindow( requestor );
	 var dw_kehu= new DataWindow( requestor );
	 var dw_memo= new DataWindow( requestor );
	 var dw_selected= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );

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
		 if(dw_spms == null ) dw_spms= new DataWindow( requestor );
		 dw_spms.Attach( win.Control( "dw_spms") ); 
		 if(dw_fy == null ) dw_fy= new DataWindow( requestor );
		 dw_fy.Attach( win.Control( "dw_fy") ); 
		 if(dw_kehu == null ) dw_kehu= new DataWindow( requestor );
		 dw_kehu.Attach( win.Control( "dw_kehu") ); 
		 if(dw_memo == null ) dw_memo= new DataWindow( requestor );
		 dw_memo.Attach( win.Control( "dw_memo") ); 
		 if(dw_selected == null ) dw_selected= new DataWindow( requestor );
		 dw_selected.Attach( win.Control( "dw_selected") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

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

		 if(typeof(self.dw_cmd_DoubleClicked)=="function") 
			 win.AttachEvent("dw_cmd","DoubleClicked",self.dw_cmd_DoubleClicked); 

		 if(typeof(self.dw_cmd_EditChanged)=="function") 
			 win.AttachEvent("dw_cmd","EditChanged",self.dw_cmd_EditChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_cmd","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_cmd_ItemChanged)=="function") 
			 win.AttachEvent("dw_cmd","ItemChanged",self.dw_cmd_ItemChanged); 

		 if(typeof(self.dw_spms_EditChanged)=="function") 
			 win.AttachEvent("dw_spms","EditChanged",self.dw_spms_EditChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_spms","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_fy","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_fy_ItemChanged)=="function") 
			 win.AttachEvent("dw_fy","ItemChanged",self.dw_fy_ItemChanged); 

		 if(typeof(self.dw_kehu_Clicked)=="function") 
			 win.AttachEvent("dw_kehu","Clicked",self.dw_kehu_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_kehu","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_kehu_ItemChanged)=="function") 
			 win.AttachEvent("dw_kehu","ItemChanged",self.dw_kehu_ItemChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_memo","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_Selected_DoubleClicked)=="function") 
			 win.AttachEvent("dw_selected","DoubleClicked",self.dw_Selected_DoubleClicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_selected","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_Selected_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_selected","RowFocusChanged",self.dw_Selected_RowFocusChanged); 

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
			 win.AttachEvent("btn_preview","Clicked",self.Print); 

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
		 dw_spms.Detach(); dw_spms=null; 
		 dw_fy.Detach(); dw_fy=null; 
		 dw_kehu.Detach(); dw_kehu=null; 
		 dw_memo.Detach(); dw_memo=null; 
		 dw_selected.Detach(); dw_selected=null; 
		 tb_1.Detach(); tb_1=null; 
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
//    var iw_Jnhyd_Select = null;
    var iw_Dlxy_Select = null;
    var iw_Wldw_Select = null;
    var dwc = new DataWindowChild();
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Jhdj.ashx");

    

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
            tb_1.SetEnabled("btn_save", bEditFlag);
            tb_1.SetEnabled("btn_rowadd", bEditFlag);
            tb_1.SetEnabled("btn_rowdelete", bEditFlag);
            tb_1.SetEnabled("btn_rowcopy", bEditFlag);
//            tb_1.SetEnabled("btn_rowinsert", bEditFlag);
            tb_1.SetEnabled("btn_rownext", bEditFlag);
            tb_1.SetEnabled("btn_rowback", bEditFlag);
        }

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_cmd.Modify("DataWindow.Readonly=no");
            dw_spms.Modify("DataWindow.Readonly=no");
            dw_kehu.Modify("DataWindow.Readonly=no");
            dw_fy.Modify("DataWindow.Readonly=no");
            dw_memo.Modify("DataWindow.Readonly=no");

        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_cmd.Modify("DataWindow.Readonly=yes");
            dw_spms.Modify("DataWindow.Readonly=yes");
            dw_kehu.Modify("DataWindow.Readonly=yes");
            dw_fy.Modify("DataWindow.Readonly=yes");
            dw_memo.Modify("DataWindow.Readonly=yes");

        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.ShareData(dw_spms);
        dw_master.ShareData(dw_kehu);
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
                dw_master.Modify("mxdbh.Tabsequence=0");
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
        dw_fy.AcceptText();

        if ((dw_master.ModifiedCount()  + dw_cmd.DeletedCount() + dw_cmd.ModifiedCount() + dw_fy.DeletedCount() + dw_fy.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); 
        dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_spms.AcceptText() != 1)
            return;

        if (dw_cmd.AcceptText() != 1)
            return;

        if (dw_kehu.AcceptText() != 1)
            return;

        
        if (dw_fy.AcceptText() != 1)
            return;

        if (dw_selected.AcceptText() != 1)
            return;

        if (dw_memo.AcceptText() != 1)
            return;

       
        if ((dw_master.ModifiedCount() + dw_spms.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount()  + dw_fy.ModifiedCount() + dw_fy.DeletedCount()  + dw_kehu.ModifiedCount() + dw_memo.ModifiedCount() ) <= 0 ) {
            alert("没有数据需要保存!");
            return;
        }
        var row = dw_master.GetRow();
        var mxdbh = dw_master.GetItemString(row, "mxdbh");
        var bbh = dw_master.GetItemNumber(row, "bbh");


        var zje = dw_master.GetItemNumber(row, "zje");
        if (zje == 0 || zje == null) {
            alert("发票总金额不得为0,请输入商品金额!");
            tab_1.SelectTab(2);
            dw_cmd.SetFocus();

            return;
        }

        var zusdhl = dw_master.GetItemNumber(row, "zusdhl");
        if (zusdhl == 0 || zusdhl == null) {
            alert("折USD汇率不得为0或者空,请输入折USD汇率!");
            tab_1.SelectTab(1);
            dw_master.SetFocus();
            dw_master.SetColumn("zusdhl")

            return;
        }


        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            if (dw_cmd.GetItemString(row, "hgbm") == "") {
                dw_cmd.DeleteRow(row);
                continue;
            }
            dw_cmd.SetItem(row, "cxh", row);
            dw_cmd.SetItem(row, "mxdbh", mxdbh);
            dw_cmd.SetItem(row, "bbh", bbh);
        }

        if (dw_cmd.RowCount() == 0) {
            alert("明细单没有商品信息!");
            dw_cmd.SetFocus();
            return;
        }

        for (row = dw_fy.RowCount(); row > 0; row--) {
            dw_fy.SetItem(row, "cxh", row);
            dw_fy.SetItem(row, "mxdbh", mxdbh);
            dw_fy.SetItem(row, "bbh", bbh);
        }
       
        self.SetZje();
        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();
        var dw_fy_data = dw_fy.GetChanges();
        var dw_memo_data = dw_memo.GetChanges();
        var dw_selected_data = dw_selected.GetChanges();
        if (dw_master_data == "" && dw_cmd_data == "" &&  dw_fy_data == "" && dw_selected_data == "" && dw_memo_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data +  "&dw_Fy=" + dw_fy_data + "&dw_Selected=" + dw_selected_data + "&dw_Memo=" + dw_memo_data +  "&mxdbh=" + mxdbh + "&bbh=" + bbh + "&operation=" + editMode);


        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            mxdbh = webReq.ResponseText();
            dw_master.SetItem(1, "mxdbh", mxdbh);
            for (row = 1; row <= dw_cmd.RowCount(); row++) {
                dw_cmd.SetItem(row, "mxdbh", mxdbh);
            }

            for (row = 1; row <= dw_fy.RowCount(); row++) {
                dw_fy.SetItem(row, "mxdbh", mxdbh);
            }

            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            dw_fy.ResetUpdate();
          
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            //	         dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion

    //#region 插入行
    this.InsertRow = function () {

        if (lastdw.GetName() == 'dw_cmd') {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Commodity_Select.SetDetailDW(dw_cmd);
            iw_Commodity_Select.SetDwo("dw_jhdj_edit_cmd");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode="+ShareMode+"&ywy=" + ywy +"&Dlwtf = "+Dlwtf , iw_Commodity_Select);
        }
        if (lastdw.GetName() == 'dw_fy') {
            dw_fy.ScrollToRow(dw_fy.InsertRow(0));
            dw_fy.SetFocus();
        }
        else {
            return;
        }
    }
    //#endregion

    //#region 添加行
    this.AddRow = function () {
        if (lastdw.GetName() == 'dw_cmd') {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var dwo = "dw_jhdj_edit_cmd";
            iw_Commodity_Select.SetDetailDW(dw_cmd);
            iw_Commodity_Select.SetDwo("dw_jhdj_edit_cmd");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" +ShareMode +"&ywy="+ywy+"&Dlwtf="+Dlwtf, iw_Commodity_Select);
        }
        if (lastdw.GetName() == 'dw_fy') {
            dw_fy.ScrollToRow(dw_fy.InsertRow(0));
            dw_fy.SetFocus();
        }
        else {
            return;
        }
    };
    //#endregion

    //#region 删除行
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
        else {
            return;
        }

    }
    //#endregion

    //#region 复制行
    this.RowCopy = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;
        if (lastdw.GetName() == 'dw_cmd' || lastdw.GetName() == 'dw_fy') {
            lastdw.RowsCopy(row, row, DWBUFFER.Primary, lastdw, row + 1, DWBUFFER.Primary)
            lastdw.ScrollToRow(row + 1);
            self.SetZje();
        }
        else {
            return;
        }

    }
    //#endregion


    //#region 打印 
    this.Print = function () {

        if (tab_1.GetSelectedTab() != 4) {
            tab_1.SelectTab(4)
            dw_selected.SetFocus()
            return;
        }
        self.SaveData();
        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var bbh = dw_master.GetItemNumber(1, "bbh");
        var row = dw_selected.GetRow();
        var dwo = dw_selected.GetItemString(row, "dwname");
        var dzbh = dw_selected.GetItemString(row, "dzbh");
        var dzmc = dw_selected.GetItemString(row, "dzmc");
        dw_print.SetDataObject(dwo);
        dw_print.Retrieve(mxdbh, dzbh);
        dw_print.PrintPreview()

        QsWebSoft.PubMethod.RecordPrn(mxdbh, dzmc);
    }
    //#endregion

    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "hgbm") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Commodity_Select.SetDetailDW(dw_cmd);
            iw_Commodity_Select.SetDwo("dw_jhdj_edit_cmd");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode="+ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
            dw_cmd.SetFocus();
        }
    }
    //#endregion

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
        var userid = requestor.GetParm("userid");
        var date = new Date();
        var arrayobj = new Array(4);
        arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyUserid(userid).value;
        var cname = "";
        var ename = "";
        var eaddr = "";
        var tt_no = "";
        if (arrayobj == null) {
             cname = "";
             ename = "";
             eaddr = "";
             tt_no = "";

        }
        else {
            if (arrayobj.length == 0) {
                 cname = "";
                 ename = "";
                 eaddr = "";
                 tt_no = "";

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
        dw_kehu.SetItem(1, "tt_no", tt_no)
        dw_kehu.SetItem(1, "jydw_cname", cname)
        dw_kehu.SetItem(1, "jydw_ename", ename)
        dw_kehu.SetItem(1, "jydw_eaddr", eaddr)
        //        dw_kehu.SetItem(1, 'jydwxx', ename + '\n' + eaddr)
        dw_master.SetItem(1, 'zdr', userid);
        dw_master.SetItem(1, 'ywy', ywy);
        dw_master.SetItem(1, 'bm', bm);
        dw_master.SetItem(1, 'zdrq', date.getDate());
        dw_master.SetItem(1, 'fprq', date.getDate());
        dw_master.SetItem(1, 'state', "新制");
        //        dw_master.SetItem(1, 'spjc', "未审批");
        dw_master.SetItem(1, 'wbbb', "USD");
        var zusdhl = QsWebSoft.PubMethod.Wb2Usd("USD").value;
        var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb("USD").value;
        dw_master.SetItem(1, 'zusdhl', zusdhl);
        dw_master.SetItem(1, 'zrmbhl', zrmbhl);
        self.SetEditMode("new");

    }
    //#endregion

    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var date = new Date();
        dw_master.SetItem(1, "bbh", 1);
        dw_master.SetItem(1, "mxdbh", "");
        dw_master.SetItem(1, "zdr", userid);
        dw_master.SetItem(1, "zdrq", date.getDate());
        dw_master.SetItem(1, "fprq", date.getDate());
        dw_master.SetItem(1, "fsrq", null);
        dw_master.SetItem(1, "state", "新制");
//        dw_master.SetItem(1, "spjc", "未审批");
        dw_master.SetItem(1, "cy_state", "新制")
        dw_master.SetItem(1, "cy_byy", "")
        dw_master.SetItem(1, 'cy_jsrq', null)
        dw_master.SetItem(1, "dz_state", "新制")
        dw_master.SetItem(1, "dz_zdy", "")
        dw_master.SetItem(1, 'dz_jsrq', null)
        dw_master.SetItem(1, "dzjh_state", "新制")
//        dw_master.SetItem(1, "dzjh_zdy", "")
//        dw_master.SetItem(1, "ht_state", "未回填")
//        dw_master.SetItem(1, "htxg_state", "")
        var wbbb = dw_master.GetItemString(1, "wbbb")
        if (wbbb == null) {
            wbbb = "USD";
        }
        var zusdhl = QsWebSoft.PubMethod.Wb2Usd(wbbb).value;
        var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb(wbbb).value;
        dw_master.SetItem(1, 'zusdhl', zusdhl);
        dw_master.SetItem(1, 'zrmbhl', zrmbhl);
     
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            dw_cmd.SetItem(row, "wxhth", null);
        }
        self.SetZje();
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "mdka_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("mdka");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
            dw_master.AcceptText();
            var str = dw_master.GetItemString(1, "jgtk");
            var mkda = dw_master.GetItemString(1, "mdka");
            if (str.substring(0,1)=="C") {
                dw_master.SetItem(1, "jgtk_sm", mkda);
            }
        }

        if (dwoName == "zzka_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("zkka");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "mygb_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("mygb");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zzxfgb_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("zzxfgb");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();
        }
//        if (dwoName == "jnhyd_t") {
//            if (iw_Jnhyd_Select == null)
//                iw_Jnhyd_Select = new W_Jnhyd_Select();
//            iw_Jnhyd_Select.SetDataWindow(dw_master);
//            iw_Jnhyd_Select.SetData("jnhyd");
//            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Jnhyd_Select", iw_Jnhyd_Select);
//            dw_master.SetFocus();
//        }

        if (dwoName == "dlxyh_t") {
            if (iw_Dlxy_Select == null)
                iw_Dlxy_Select = new W_Dlxy_Select();
            iw_Dlxy_Select.SetDataWindow(dw_master);
            iw_Dlxy_Select.SetDataWindow2(dw_cbyc);
            iw_Dlxy_Select.SetData("dlxyh");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Dlxy_Select", iw_Dlxy_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "ywy_t") {
            //            self.GetData();
            //            dw_master.SetFocus();
        }


    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "gdz_flag") {
            if (data == "Y") {
                dw_cmd.Modify("wxdj_dz.Tabsequence=105");
            }
            else {
                dw_cmd.Modify("wxdj_dz.Tabsequence=0");
            }

        }

        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb(data).value;
            if (zusdhl == null || zusdhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
            }

            if (zrmbhl == null || zrmbhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折人民币值为0或者该货币没录入,请检查后重新修改!");
            }

            dw_master.SetItem(1, "zusdhl", zusdhl);
            dw_master.SetItem(1, "zrmbhl", zrmbhl);
            self.SetZje();
        }

        if (dwoName == "zusdhl") {
            var zusdje = data * dw_master.GetItemNumber(row, "zje");
            zusdje = parseFloat(zusdje.toFixed(2));
            dw_master.SetItem(row, "zusdje", zusdje);
             self.SetZje();
        }

        if (dwoName == "zrmbhl") {
            var zrmbje = data * dw_master.GetItemNumber(row, "zje");
            zrmbje = parseFloat(zrmbje.toFixed(2));
            dw_master.SetItem(row, "zrmbje", zrmbje);
             self.SetZje();
        }

        if (dwoName == "mxdbh") {
            var bbh = dw_master.GetItemNumber(1, "bbh");
            var num = QsWebSoft.PubMethod.CheckMxdbh(data, bbh).value;
            if (num > 0) {
                alert("提示，明细单编号已经存在,请重新编写!");
                dw_master.SetItemNull(1, "mxdbh");
                return;
            }
        }

       if (dwoName == "shfs") {
            if (data == 'L/C即期') {
                dw_master.SetItem(1, 'shfs_sm', 'AT SIGHT');
                dw_master.SetItem(1, 'fkqx', 0);
            }
//            if (data.indexOf("T") > 0 && dw_master.GetItemString(1, "shfs_sm").toUpperCase() == "AT SIGHT") {
//                dw_master.SetItem(1, "shfs_sm", "");
            //            }
            if (data.indexOf("T/T") > 0 || data == "T/T") {
                dw_master.SetItem(1, "shfs_sm", "AFTER 90 DAYS");
                dw_master.SetItem(1, "fkqx", 90);
            }
        }

        if (dwoName == "shfs2") {
            if (data == 'L/C即期') {
                dw_master.SetItem(1, 'shfs2_sm', 'AT SIGHT');
                dw_master.SetItem(1, 'fkqx2', 0);
            }
//            if (data.indexOf("T") > 0 && dw_master.GetItemString(1, "shfs_sm").toUpperCase() == "AT SIGHT") {
//                dw_master.SetItem(1, "shfs2_sm", "");
            //            }
            if (data.indexOf("T/T") > 0 || data == "T/T") {
                dw_master.SetItem(1, "shfs2_sm", "AFTER 90 DAYS");
                dw_master.SetItem(1, "fkqx2", 90);
            }
        }

        if (dwoName == "fkqx") {
            ld_yqcyr = new Date(dw_master.GetItemDate(1, "zyqx"));
            ld_yjshr = QsWebSoft.PubMethod.addDay(ld_yqcyr, parseInt(data)).value;
            if (ld_yqcyr != null) {
                dw_master.SetItem(1, "yjfkrq", ld_yjshr.getVarDate());
            }
            ls_shfs_sm = dw_master.GetItemString(1, "shfs_sm");
            if (ls_shfs_sm == null) {
                ls_shfs_sm = '';
            }
            dw_master.SetItem(1, "shfs_sm", data + ' DAYS');
        }

        if (dwoName == "fkqx2") {
            ld_yqcyr = new Date(dw_master.GetItemDate(1, "zyqx"));
            ld_yjshr = QsWebSoft.PubMethod.addDay(ld_yqcyr, parseInt(data)).value;
            if (ld_yqcyr != null) {
                dw_master.SetItem(1, "yjfkrq2", ld_yjshr.getVarDate());
            }
            ls_shfs_sm = dw_master.GetItemString(1, "shfs2_sm");
            if (ls_shfs_sm == null) {
                ls_shfs_sm = '';
            }
            dw_master.SetItem(1, "shfs2_sm", data + ' DAYS');
        }

        if (dwoName == "rate") {
            if (parseFloat(data) > 1 || parseFloat(data) < 0) {
                alert("提示信息,比率不能大于100%或者小于0%!");
                return;
            }
            dw_master.SetItem(1, "rate2", 1 - parseFloat(data));
        }

        if (dwoName == "rate2") {
            if (parseFloat(data) > 1 || parseFloat(data) < 0) {
                alert("提示信息,比率不能大于100%或者小于0%!");
                return;
            }
            dw_master.SetItem(1, "rate", 1 - parseFloat(data));
        }

        if (dwoName == "jgtk") {
            if (data == "FOB" || data == "FCA") {
                dw_master.SetItem(1, "jgtk_sm", dw_master.GetItemString(1, "ckka"));
                dw_master.SetItem(1, "fobbl", 100);
            }
            else if (data == "CIF" || data == "CFR") {
                dw_master.SetItem(1, "jgtk_sm", dw_master.GetItemString(1, "mdka"));
                dw_master.SetItem(1, "fobbl", 100);
            }
            else {
                dw_master.SetItem(1, "jgtk_sm", dw_master.GetItemString(1, "mdka"));
                dw_master.SetItem(1, "fobbl", 100);
            }
        }

        if (dwoName == "ckka") {
            if (dw_master.GetItemString(1, "jgtk") == "FOB" || dw_master.GetItemString(1, "jgtk") == "FCA") {
                dw_master.SetItem(1, "jgtk_sm", data);
            }
        }

        if (dwoName == "mdka") {
            var str = dw_master.GetItemString(1, "jgtk");
            if (str.substring(0, 1) == "C") {
                dw_master.SetItem(1, "jgtk_sm", data);
            }
        }

    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
        if (dwoName == "ckka") {
            dw_master.GetChild(dwoName, dwc);
            if (data != "")
                dwc.Retrieve("%" + data + "%");
            else
                dwc.Retrieve("%");
        }
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
            iw_Wldw_Select.SetDataWindow(dw_kehu);
            iw_Wldw_Select.SetData("khbm");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }

        if (dwoName == "shr_t") {
            khlx = "gwcgs";
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            iw_Wldw_Select.SetDataWindow(dw_kehu);
            iw_Wldw_Select.SetData("shr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }

        if (dwoName == "tzr_t") {
            khlx = "gwcgs";
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            iw_Wldw_Select.SetDataWindow(dw_kehu);
            iw_Wldw_Select.SetData("tzr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }

        if (dwoName == "ttr_t") {
            khlx = "gwcgs";
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            iw_Wldw_Select.SetDataWindow(dw_kehu);
            iw_Wldw_Select.SetData("ttr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }

        if (dwoName == "fkr_t") {
            khlx = "gwcgs";
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            iw_Wldw_Select.SetDataWindow(dw_kehu);
            iw_Wldw_Select.SetData("fkr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }

        if (dwoName == "zjsmc_t") {
            khlx = "gwcgs";
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            iw_Wldw_Select.SetDataWindow(dw_kehu);
            iw_Wldw_Select.SetData("zjsmc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }
    }
    //#endregion

    
    //#region dw_cmd ItemChanged
    this.dw_cmd_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jjsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            ldc_wxzj = (data * dw_cmd.GetItemNumber(row, "wxdj"));
            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
            dw_cmd.SetItem(row, "wxzj", ldc_wxzj);
            self.CacluSgje(row);
            self.CacluBzjs(row);
            self.CacluMjztj(row);
            self.SetZje();
            self.SetZmjztj();
        }

        else if (dwoName == "wxdj") {
            if (data < 0) {
                alert("单价不能小于0,请重新输入!");
                return 1;
            }
            ldc_wxzj = (data * dw_cmd.GetItemNumber(row, "jjsl"));
            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
            dw_cmd.SetItem(row, "wxzj", ldc_wxzj);
            dw_cmd.SetItem(row, "wxdj_dz", parseFloat(data));
            self.SetZje();
        }
        else if (dwoName == "wxzj") {
            if (data < 0) {
                alert("金额不能小于0,请重新输入!");
                return 1;
            }

            //如果数量大于0，则反算单价
            var Qty = dw_cmd.GetItemNumber(row, "jjsl");
            var Price = dw_cmd.GetItemNumber(row, "wxdj");
            if (Qty > 0) {
                ldc_wxdj = data / Qty;
                ldc_wxdj = parseFloat(ldc_wxdj.toFixed(6));
                dw_cmd.SetItem(row, "wxdj", ldc_wxdj);
            }
            self.SetZje();
        }

        else if (dwoName == "hsdj" || dwoName == "zzsl" || dwoName == "tsl") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            self.CacluSgje(row);
            self.SetZje();
        }

        else if (dwoName == "mjsl") {
            if (data < 0) {
                alert("每件数量不能小于0,请重新输入!");
                return 1;
            }
            self.CacluBzjs(row);
            self.CacluMjztj(row);
            self.SetZmjztj();
        }
        else if (dwoName == "bzjs" || dwoName == "mjmz" || dwoName == "mjjz" || dwoName == "djtjms") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            self.CacluMjztj(row);
            self.SetZmjztj();

        }

        else if (dwoName == "mz" || dwoName == "jz" || dwoName == "tj" ) {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            self.SetZmjztj();

        }


    }
    //#endregion




    //#region dw_spms EditChanged
    this.dw_spms_EditChanged = function (row, dwoName, data) {

//        dw_spms.AcceptText();
//        if (dwoName == "bzdw" || dwoName == "sldw") {
//             dw_spms.GetChild(dwoName, dwc);
//            if (data != "")
//                dwc.Retrieve("%" + data + "%");
//            else
//                dwc.Retrieve("%");
//        }
    }
    //#endregion

    //#region dw_cmd EditChanged
    this.dw_cmd_EditChanged = function (row, dwoName, data) {

//        dw_master.AcceptText();
//        if (dwoName == "bzdw" || dwoName == "jjdw" || dwoName == "nbzdw") {
//            dw_cmd.GetChild(dwoName, dwc);
//            if (data != "")
//                dwc.Retrieve("%" + data + "%");
//            else
//                dwc.Retrieve("%");
//        }
    }
    //#endregion

    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_cmd') {
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

            if (lastdw.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                lastdw.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_cmd') {
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

            if (lastdw.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                lastdw.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

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

   
    

    //#region dw_fy ItemChanged
    this.dw_fy_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "plus_less" || dwoName == "fybl" || dwoName == "fyje") {
            dw_fy.AcceptText();
            self.SetZje();
        }
    }
    //#endregion

    

    //#region SetZje
    this.SetZje = function () {
        dw_cmd.AcceptText();
        dw_master.AcceptText();
        dw_fy.AcceptText();
        var ldc_zusdhl = dw_master.GetItemNumber(1, "zusdhl");
        var ldc_zrmbhl = dw_master.GetItemNumber(1, "zrmbhl");
        if (dw_cmd.RowCount() > 0) {
            ldc_wxje = dw_cmd.GetItemNumber(1, "sum_wxzj");
            ldc_wxje = parseFloat(ldc_wxje.toFixed(2));
            ldc_wxje_dz = dw_cmd.GetItemNumber(1, "sum_wxzj_dz");
            ldc_wxje_dz = parseFloat(ldc_wxje_dz.toFixed(2));
            ldc_hsje = dw_cmd.GetItemNumber(1, "sum_hsje");
            ldc_hsje = parseFloat(ldc_hsje.toFixed(2));
            ldc_tse = dw_cmd.GetItemNumber(1, "sum_tse");
            ldc_tse = parseFloat(ldc_tse.toFixed(2));
            ldc_wbcgje = 0;
        }
        else {
            ldc_wxje = 0;
            ldc_wxje_dz = 0;
            ldc_hsje = 0;
            ldc_tse = 0;
            ldc_wbcgje = 0;
        };

        var ldc_sgcb_rmb = ldc_hsje + ldc_wbcgje * ldc_zrmbhl;
        ldc_sgcb_rmb = parseFloat(ldc_sgcb_rmb.toFixed(2));
       
        //重新计算需要增减的费用
        for (row = 1; row <= dw_fy.RowCount(); row++) {
            var ldc_fybl = dw_fy.GetItemNumber(row, "fybl");
            if (ldc_fybl == null) {
                ldc_fybl = 0;
            }
            if (ldc_fybl != 0) {
                var ldc_fy = ldc_wxje * ldc_fybl / 100;
                ldc_fy = parseFloat(ldc_fy.toFixed(2));
                dw_fy.SetItem(row, "fyje", ldc_fy);

                var ldc_fy_dz = ldc_wxje_dz * ldc_fybl / 100;
                ldc_fy_dz = parseFloat(ldc_fy_dz.toFixed(2));
                dw_fy.SetItem(row, "fy_dz", ldc_fy_dz);
            }
        };

        //总费用
        if (dw_fy.RowCount() > 0) {
            var ldc_fysum = dw_fy.GetItemNumber(1, "sum_fy");
            if (ldc_fysum == 0 || ldc_fysum == null) {
                ldc_fysum = 0;
            }
        }
        else {
            ldc_fysum = 0;
        }

        //成本核算用合同总金额
        ldc_wxje = ldc_wxje + ldc_fysum;
        ldc_wxje = parseFloat(ldc_wxje.toFixed(2));

        dw_master.SetItem(1, "zje", ldc_wxje);
       
        ldc_zusdje = ldc_zusdhl * ldc_wxje; //折美元
        ldc_zusdje = parseFloat(ldc_zusdje.toFixed(2));
        ldc_zrmbje = ldc_zrmbhl * ldc_wxje; //折人民币
        ldc_zrmbje = parseFloat(ldc_zrmbje.toFixed(2));
        dw_master.SetItem(1, "zusdje", ldc_zusdje);
        dw_master.SetItem(1, "zrmbje", ldc_zrmbje);
      
    }
    //#endregion

    //#region CacluSgje
    this.CacluSgje = function (row) {
        dw_cmd.AcceptText();
        var ldc_jjsl = dw_cmd.GetItemNumber(row, "jjsl");
        var ldc_hsdj = dw_cmd.GetItemNumber(row, "hsdj");
        var ldc_zzsl = dw_cmd.GetItemNumber(row, "zzsl");
        var ldc_tsl = dw_cmd.GetItemNumber(row, "tsl");
        if (ldc_jjsl == null) {
            ldc_jjsl = 0;
        }
        if (ldc_hsdj == 0) {
            ldc_hsdj = 0;
        }
        if (ldc_zzsl == null) {
            ldc_zzsl = 0;
        }
        if (ldc_tsl == null) {
            ldc_tsl = 0;
        }

        ldc_hszj = ldc_jjsl * ldc_hsdj;
        ldc_hszj = parseFloat(ldc_hszj.toFixed(2));
        ldc_bhsje = ldc_hszj / (1 + ldc_zzsl / 100);
        ldc_bhsje = parseFloat(ldc_bhsje.toFixed(2));
        ldc_bhsdj = ldc_bhsje / ldc_jjsl;
        ldc_bhsdj = parseFloat(ldc_bhsdj.toFixed(6));
        ldc_zzse = ldc_hszj - ldc_bhsje;
        ldc_zzse = parseFloat(ldc_zzse.toFixed(2));
        ldc_tse = ldc_bhsje * ldc_tsl / 100;
        ldc_tse = parseFloat(ldc_tse.toFixed(2));


        dw_cmd.SetItem(row, "hsje", ldc_hszj);
        dw_cmd.SetItem(row, "bhsdj", ldc_bhsdj);
        dw_cmd.SetItem(row, "bhsje", ldc_bhsje);
        dw_cmd.SetItem(row, "zzse", ldc_zzse);
        dw_cmd.SetItem(row, "tse", ldc_tse);

    }
    //#endregion

 //#region CacluBzjs
    this.CacluBzjs = function (row) {
        dw_cmd.AcceptText();
        var ldc_mjsl = dw_cmd.GetItemNumber(row, 'mjsl');
        if (ldc_mjsl == 0 || ldc_mjsl == null) {
            return;
        }
        var ldc_jjsl = dw_cmd.GetItemNumber(row, 'jjsl');
        var ldc_bzjs = ldc_jjsl / ldc_mjsl;
        //取整数部分
        if (parseInt(ldc_bzjs) != ldc_bzjs) {
            ldc_bzjs = Math.ceil(ldc_bzjs)   //去小数部分加1
        }
        dw_cmd.SetItem(row, 'bzjs', ldc_bzjs)
    }
    //#endregion


    //#region CacluMjztj
    this.CacluMjztj = function (row) {
        dw_cmd.AcceptText();
        var ldc_bzjs = dw_cmd.GetItemNumber(row, "bzjs");
        if (ldc_bzjs == 0) {
            ldc_bzjs = 0;
        }
        ldc_jjsl = dw_cmd.GetItemNumber(row, "jjsl");

        //计算毛重、净重
        ldc_mjmz = dw_cmd.GetItemNumber(row, "mjmz");
        ldc_mjjz = dw_cmd.GetItemNumber(row, "mjjz");
        if (ldc_bzjs > 0 && ldc_mjmz > 0) {
            ldc_mz = ldc_bzjs * ldc_mjmz;
            ldc_mz = parseFloat(ldc_mz.toFixed(4));
            dw_cmd.SetItem(row, "mz", ldc_mz);
        }
        if (ldc_bzjs > 0 && ldc_mjjz > 0) {
            ldc_jz = ldc_bzjs * ldc_mjjz;
            ldc_jz = parseFloat(ldc_jz.toFixed(4));
            dw_cmd.SetItem(row, "jz", ldc_jz);
        }
        
       
       
       

        var ls_djtjms = dw_cmd.GetItemString(row, "djtjms");
        ls_djtjms.toLowerCase();
        if (ls_djtjms == null) {
            ls_djtjms = "";
        }

        //计算体积
        if (ls_djtjms.length > 0) {
            var cm = ls_djtjms.indexOf("cm");
            var m = ls_djtjms.indexOf("m");
            if (cm > 0) {
                var li_pos = cm;
                ls_djtjms = ls_djtjms.substring(0, li_pos - 1);
                var ls_unit = "cm";
            }
            else if (m > 0) {
                li_pos = m;
                ls_djtjms = ls_djtjms.substring(0, li_pos - 1);
                ls_unit = "m";
            }
            else {
                ls_djtjms = ls_djtjms;
                ls_unit = "cm";
            }
        }
        li_pos = ls_djtjms.indexOf("x");
        while (li_pos > 0) {
            if (li_pos <= 0) {
                continue;
            }
            ls_djtjms = ls_djtjms.replace("x", "*");
            li_pos = ls_djtjms.indexOf("x");
        }

        li_pos = ls_djtjms.indexOf("X");
        while (li_pos > 0) {
            if (li_pos <= 0) {
                continue;
            }
            ls_djtjms = ls_djtjms.replace("X", "*");
            li_pos = ls_djtjms.indexOf("X");
        }

        if (ls_djtjms.substring(1) == "*" || ls_djtjms.substring(1) == "X" || ls_djtjms.substring(1) == "x") {
            ls_djtjms = ls_djtjms.substring(0, ls_djtjms.length - 1);
        }

        ls_value = dw_cmd.Describe("evaluate('" + ls_djtjms + "',0)");

        if (ls_unit == "cm") {
            if (ldc_bzjs > 0 && parseFloat(ls_value) > 0) {
                ldc_tj = parseFloat(ls_value) * ldc_bzjs / 1000000;
                ldc_tj = ldc_tj.toFixed(3);

                dw_cmd.SetItem(row, "tj", parseFloat(ldc_tj));
            }
           
        }
        else {
            if (ldc_bzjs > 0 && parseFloat(ls_value) > 0) {
                ldc_tj = parseFloat(ls_value) * ldc_bzjs;
            
                ldc_tj = ldc_tj.toFixed(3);
                dw_cmd.SetItem(row, "tj", parseFloat(ldc_tj));
            }
        }
    }
    //#endregion


 //#region GenBzms
    this.GenBzms = function (row) {
        dw_cmd.AcceptText();
        dw_spms.AcceptText();

        ldc_bzjs = dw_spms.GetItemNumber(1, 'bzjs');
        ls_bzdw = dw_spms.GetItemString(1, 'bzdw');

//        if (dw_cmd.RowCount() == 0) {
            ldc_nbzjs = 0;
//        }
//        else {
//            ldc_nbzjs = dw_cmd.GetItemNumber(1, 'sum_nbzjs');
//            ls_nbzdw = dw_cmd.GetItemString(1, 'c_nbzdw');
//        }

        if (dw_cmd.RowCount() > 0) {
            ls_max_bzdw = dw_cmd.Describe("evaluate('max(bzdw)',0)");
            ls_min_bzdw = dw_cmd.Describe("evaluate('min(bzdw)',0)");
        }

        if (ls_max_bzdw != ls_min_bzdw) {
            ls_bzdw = 'PACKAGES';
        }

        var ls_bzjs = QsWebSoft.PubMethod.Ywdx(ldc_bzjs).value;
        var ls_nbzjs = QsWebSoft.PubMethod.Ywdx(ldc_nbzjs).value;
        if (ldc_bzjs > 0 && ldc_nbzjs > 0) {
            ls_bzms = "TOTAL PACKED IN " + ls_bzjs + " " + ls_bzdw + " ( " + ls_nbzjs + " " + ls_nbzdw + " ) ";
        }
        else if (ldc_bzjs > 0 && (ldc_nbzjs <= 0 || ldc_nbzjs == null)) {
            ls_bzms = "TOTAL PACKED IN " + ls_bzjs + " " + ls_bzdw;
        }
        else {
            ls_bzms = '';
        }

        dw_spms.SetItem(1, 'bzms', ls_bzms);

    }
    //#endregion
   

    //#region SetZmjztj
    this.SetZmjztj = function (row) {
        dw_cmd.AcceptText();
        if (dw_cmd.RowCount() > 0) {
            ldc_zsl = dw_cmd.GetItemNumber(1, "sum_jjsl");
            ldc_zsl = parseFloat(ldc_zsl.toFixed(2));
        }
        else {
            ldc_zsl = 0
        }

        if (dw_cmd.RowCount() > 0) {
            ldc_zjs = dw_cmd.GetItemNumber(1, "sum_bzjs");
            ldc_zjs = parseFloat(ldc_zjs.toFixed(2));
            ldc_zmz = dw_cmd.GetItemNumber(1, "sum_mz");
            ldc_zmz = parseFloat(ldc_zmz.toFixed(2));
            ldc_zjz = dw_cmd.GetItemNumber(1, "sum_jz");
            ldc_zjz = parseFloat(ldc_zjz.toFixed(2));
            ldc_ztj = dw_cmd.GetItemNumber(1, "sum_tj");
            ldc_ztj = parseFloat(ldc_ztj.toFixed(3));
        }
        else {
            ldc_zjs = 0;
            ldc_zmz = 0;
            ldc_zjz = 0;
            ldc_ztj = 0;
        }
        var sldw = dw_cmd.Describe("evaluate('max(jjdw)',0)");
        var bzdw = dw_cmd.Describe("evaluate('max(bzdw)',0)");
        var zldw = dw_cmd.Describe("evaluate('max(zldw)',0)");
        dw_master.SetItem(1, "spsl", ldc_zsl)
        dw_master.SetItem(1, "sldw",sldw )
        dw_master.SetItem(1, "bzjs", ldc_zjs)
        dw_master.SetItem(1, "bzdw", bzdw)
        dw_master.SetItem(1, "zmz", ldc_zmz)
        dw_master.SetItem(1, "zjz", ldc_zjz)
        dw_master.SetItem(1, "zldw", zldw)
        dw_master.SetItem(1, "ztj", ldc_ztj)

        self.GenBzms();

    }
    //#endregion

    //#region dw_selected RowFocusChanged
    this.dw_Selected_RowFocusChanged = function (row, dwoName, data) {
        if (row > 0 && dw_selected.GetRow() > 0) {
            dw_memo.SetFilter("dz_zhuangtai_dzbh = '" + dw_selected.GetItemString(row, "dzbh") + "'");
            dw_memo.Filter();
            var mxdbh = dw_master.GetItemString(1, "mxdbh");
            var dzbh = dw_selected.GetItemString(row, "dzbh");
            if (dw_memo.RowCount() <= 0) {
                var insertrow = dw_memo.InsertRow(0);
                dw_memo.SetItem(insertrow, "dz_zhuangtai_dzbh", dzbh);
                dw_memo.SetItem(insertrow, "dz_zhuangtai_dtl_no", mxdbh);
            }
        }
    }
    //#endregion

    //#region dw_Selected双击
    this.dw_Selected_DoubleClicked = function (Row) {
        if (Row > 0)
            self.Print();

    }
    //#endregion


    //#region 存盘,用于生成合并商品，打印单证时的保存，差别在于保存成功不提示
    this.SaveData = function () {

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_spms.AcceptText() != 1)
            return;

        if (dw_cmd.AcceptText() != 1)
            return;

        if (dw_kehu.AcceptText() != 1)
            return;

        if (dw_selected.AcceptText() != 1)
            return;

        if (dw_memo.AcceptText() != 1)
            return;

       
        if (dw_fy.AcceptText() != 1)
            return;

        
        if ((dw_master.ModifiedCount() + dw_spms.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() + dw_selected.ModifiedCount() + dw_fy.ModifiedCount() + dw_fy.DeletedCount()  + dw_kehu.ModifiedCount()  + dw_memo.ModifiedCount()) <= 0) {
            //            requestor.MessageBox("提示","没有数据需要保存!");
            return;
        }

        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            if (dw_cmd.GetItemString(row, "hgbm") == "") {
                dw_cmd.DeleteRow(row);
                continue;
            }
            dw_cmd.SetItem(row, "cxh", row);
        }

      
        dw_master.SetItem(1, "zje", dw_cmd.GetItemNumber(1, "sum_wxzj"))
        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();
        var dw_selected_data = dw_selected.GetChanges();
        var dw_fy_data = dw_fy.GetChanges();
        var dw_kehu_data = dw_fy.GetChanges();
        var dw_memo_data = dw_memo.GetChanges();
        if (dw_master_data == "" && dw_cmd_data == "" && dw_selected_data == "" && dw_fy_data == ""    && dw_kehu_data == "" && dw_memo_data == "")
            return;
        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var bbh = dw_master.GetItemNumber(1, "bbh");
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data + "&dw_Selected=" + dw_selected_data + "&dw_Fy=" + dw_fy_data  + "&dw_Kehu=" + dw_kehu_data + "&dw_Memo=" + dw_memo_data + "&mxdbh=" + mxdbh + "&bbh=" + bbh + "&operation=" + editMode);


        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            dw_selected.ResetUpdate();
            dw_fy.ResetUpdate();
            dw_memo.ResetUpdate();
          
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
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

        if (tab_1.GetSelectedTab() == 1 ) {

            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            //            tb_1.SetVisible("btn_rowinsert", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
//            lastdw = dw_master;
        }

        if (tab_1.GetSelectedTab() == 4) {

            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            //            tb_1.SetVisible("btn_rowinsert", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
//            lastdw = dw_selected;
        }
    };
    //#endregion   

}
