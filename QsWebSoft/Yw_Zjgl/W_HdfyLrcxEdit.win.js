///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HdfyLrcxEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_master= new DataWindow( requestor );
	 var sle_ts= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var tab_1= new TabControl( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_cbmx= new DataWindow( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(sle_ts == null ) sle_ts= new SingleLineEdit( requestor );
		 sle_ts.Attach( win.Control( "sle_ts") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_cbmx == null ) dw_cbmx= new DataWindow( requestor );
		 dw_cbmx.Attach( win.Control( "dw_cbmx") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_jzxxx == null ) ds_jzxxx= new DataStore( requestor );
		 ds_jzxxx.Attach( win.Control( "ds_jzxxx") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

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

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_jzxxx","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_jzxxx_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_jzxxx_GetFocus); 

		 if(typeof(self.dw_jzxxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","ItemChanged",self.dw_jzxxx_ItemChanged); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_master.Detach(); dw_master=null; 
		 sle_ts.Detach(); sle_ts=null; 
		 tb_1.Detach(); tb_1=null; 
		 tab_1.Detach(); tab_1=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_cbmx.Detach(); dw_cbmx=null; 
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
    var iw_Wldw_Select = null;
    var iw_Wldw_Zfdx_Select = null; 
    var iw_Wldw_Yh_Select = null;
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hdfylrcx.ashx");

    
    
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
        if (tab_1.GetSelectedTab() == 2) {

            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowinsert", false);
            
        }
        else {
            tb_1.SetVisible("btn_save", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag); 
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowinsert", bEditFlag);
        }

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

        if (dw_jzxxx.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_master.GetRow();
        var yshdfygjbh = dw_master.GetItemString(row, "yshdfygjbh");

        var hz_jzxh = ""
        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "yshdfygjbh", yshdfygjbh);
            dw_jzxxx.SetItem(row, "cxh", row);
        }




        if (dw_jzxxx.RowCount() == 0) {
            alert("客户费用归集中没有明细信息!");
            dw_jzxxx.SetFocus();
            return;
        }


        var fyje_sum = dw_jzxxx.GetItemNumber(1, "fyje_sum");
        dw_master.SetItem(1, "fyje", fyje_sum)
        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();


        if (dw_master_data == "" && dw_jzxxx_data == "")
            return;
        //执行保存的WebService

        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&yshdfygjbh=" + yshdfygjbh + "&operation=" + editMode);
        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            yshdfygjbh = webReq.ResponseText();
            dw_master.SetItem(1, "yshdfygjbh", yshdfygjbh);

            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "yshdfygjbh", yshdfygjbh);
                dw_jzxxx.SetItem(row, "cxh", row);
            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();

            self.SetEditMode("open");

            //更新对应表数据
//            QsWebSoft.PubMethod.UpdateYshdfygj(yshdfygjbh);
            //
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("yshdfygjbh.Tabsequence=0");

            //dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion


    //#region 插入商品
    this.InsertRow = function () {
        
//        var sjskrbm = dw_master.GetItemString(1, "sjskrbm");
//        var sjskrmc = dw_master.GetItemString(1, "sjskrmc");
//        var sjskrjc = dw_master.GetItemString(1, "sjskrjc");
//        var sjskrpym = dw_master.GetItemString(1, "sjskrpym");
        var row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
//        dw_jzxxx.SetItem(row, "zfdxbm", sjskrbm);
//        dw_jzxxx.SetItem(row, "zfdxmc", sjskrmc);
//        dw_jzxxx.SetItem(row, "zfdxjc", sjskrjc);
//        dw_jzxxx.SetItem(row, "zfdxpym", sjskrpym);

        dw_jzxxx.ScrollToRow(row);
        dw_jzxxx.SetFocus();
    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
//        var sjskrbm = dw_master.GetItemString(1, "sjskrbm");
//        var sjskrmc = dw_master.GetItemString(1, "sjskrmc");
//        var sjskrjc = dw_master.GetItemString(1, "sjskrjc");
//        var sjskrpym = dw_master.GetItemString(1, "sjskrpym");
        var row = dw_jzxxx.InsertRow(0);
        dw_jzxxx.ScrollToRow(row);
//        dw_jzxxx.SetItem(row, "zfdxbm", sjskrbm);
//        dw_jzxxx.SetItem(row, "zfdxmc", sjskrmc);
//        dw_jzxxx.SetItem(row, "zfdxjc", sjskrjc);
//        dw_jzxxx.SetItem(row, "zfdxpym", sjskrpym);     
        dw_jzxxx.SetFocus();
       
    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;

        var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

        if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
            if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                lastdw.SetFocus();
                return;
            }
        }
        lastdw.DeleteRow(row);
     
    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        var row = dw_jzxxx.GetRow();
        if (row <= 0)
            return;
        dw_jzxxx.RowsCopy(row, row, DWBUFFER.Primary, dw_jzxxx, row + 1, DWBUFFER.Primary)
        dw_jzxxx.ScrollToRow(row + 1);
      
    }
    //#endregion


    //#region 打印 
    this.Print = function () {

        var yfkdbh = dw_master.GetItemString(1, "yfkdbh");

        var state = dw_master.GetItemString(1, 'jzxxx_state')
        if (state != "提交") {
            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
            return;
        }


        dw_print.SetDataObject("dw_hddz_hdfyhycdfy_print");
        dw_print.Retrieve(yfkdbh);
        dw_print.PrintPreview();
    }
    //#endregion

    //#region 新建
    this.Open = function () {
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

        dw_master.SetItem(1, 'zbr', userid);
        self.SetEditMode("new");

    }
    //#endregion


    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);

        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");
        var ywbh = requestor.GetParm("ywbh");
        var cxh_hddz = requestor.GetParm("cxh_hddz");
        dw_master_dq.Retrieve(ywbh, cxh_hddz)
        dw_jzxxx_dq.Retrieve(ywbh, cxh_hddz)
        dw_cbmx.Retrieve(ywbh, cxh_hddz)
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
       
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "ywbh", dw_master_dq.GetItemString(1, "ywbh"));
        dw_master.SetItem(1, "hth", dw_master_dq.GetItemString(1, "hth"));
        dw_master.SetItem(1, "cxh_hddz", dw_master_dq.GetItemNumber(1, "cxh_hddz"));
        dw_master.SetItem(1, "ztdh", dw_master_dq.GetItemString(1, "ztdh"));
        dw_master.SetItem(1, "khbm", dw_master_dq.GetItemString(1, "khbm"));
        dw_master.SetItem(1, "khmc", dw_master_dq.GetItemString(1, "khmc"));
        dw_master.SetItem(1, "khjc", dw_master_dq.GetItemString(1, "khjc"));
        dw_master.SetItem(1, "khpym", dw_master_dq.GetItemString(1, "khpym"));
        dw_master.SetItem(1, "jsdwbm", dw_master_dq.GetItemString(1, "jsdwbm"));
        dw_master.SetItem(1, "jsdwmc", dw_master_dq.GetItemString(1, "jsdwmc"));
        dw_master.SetItem(1, "jsdwjc", dw_master_dq.GetItemString(1, "jsdwjc"));
        dw_master.SetItem(1, "jsdwpym", dw_master_dq.GetItemString(1, "jsdwpym"));
        dw_master.SetItem(1, "jzxh", dw_master_dq.GetItemString(1, "jzxh"));
        dw_master.SetItem(1, "zhlx", dw_master_dq.GetItemString(1, "zhlx"));
        dw_master.SetItem(1, "tpxx", dw_master_dq.GetItemNumber(1, "tpxx"));
        dw_master.SetItem(1, "gjkzsj", dw_master_dq.GetItemDate(1, "gjkzsj"));
        dw_master.SetItem(1, "xx", dw_master_dq.GetItemString(1, "xx"));
        dw_master.SetItem(1, "xl", dw_master_dq.GetItemString(1, "xl"));
        dw_master.SetItem(1, "ysfs", dw_master_dq.GetItemString(1, "ysfs"));
        dw_master.SetItem(1, "zydl", dw_master_dq.GetItemString(1, "zydl"));
        dw_master.SetItem(1, "yfzyswqr", dw_master_dq.GetItemString(1, "yfzyswqr"));
        dw_master.SetItem(1, "yscqfwqr", dw_master_dq.GetItemString(1, "yscqfwqr"));
        dw_master.SetItem(1, "ysfwfwqr", dw_master_dq.GetItemString(1, "ysfwfwqr"));
        dw_master.SetItem(1, "sfwhdf", dw_master_dq.GetItemString(1, "sfwhdf"));
        dw_master.SetItem(1, "ycd", dw_master_dq.GetItemString(1, "ycd"));
        dw_master.SetItem(1, "sfxyechd", dw_master_dq.GetItemString(1, "sfxyechd"));
        dw_master.SetItem(1, "sfwmtf", dw_master_dq.GetItemString(1, "sfwmtf"));
        dw_master.SetItem(1, "sfwjydf", dw_master_dq.GetItemString(1, "sfwjydf"));
        dw_master.SetItem(1, "sfwhycdf", dw_master_dq.GetItemString(1, "sfwhycdf"));
        dw_master.SetItem(1, "jycydzt", dw_master_dq.GetItemString(1, "jycydzt"));
        dw_master.SetItem(1, "kghcl", dw_master_dq.GetItemString(1, "kghcl"));
        dw_master.SetItem(1, "sjkgsj", dw_master_dq.GetItemDatetime(1, "sjkgsj"));
        dw_master.SetItem(1, "jsbm", dw_master_dq.GetItemString(1, "jsbm"));
        var ywbh = dw_master_dq.GetItemString(1, "ywbh");
        var cxh_hddz = dw_master_dq.GetItemNumber(1, "cxh_hddz");
        var yshdfygjbh = dw_master.GetItemString(1, "yshdfygjbh")
        if (yshdfygjbh == null) {
            yshdfygjbh = ""
        }
        var ygjcs = QsWebSoft.PubMethod.ReadGjcs(yshdfygjbh, ywbh, cxh_hddz).value;
        dw_master.SetItem(1, "ygjcs", ygjcs);
        if (ygjcs == null) {
            ygjcs = 0 
        }
        dw_master.SetItem(1, "gjcs", ygjcs + 1);
        dw_master.SetItem(1, "zbr", userid);
        for (row = 1; row <= dw_jzxxx_dq.RowCount(); row++) {
            var li_row = dw_jzxxx.InsertRow(0)
            dw_jzxxx.SetItem(li_row, "sjly", dw_jzxxx_dq.GetItemString(row, "sjly"));
            dw_jzxxx.SetItem(li_row, "ywbh", dw_jzxxx_dq.GetItemString(row, "ywbh"));
            dw_jzxxx.SetItem(li_row, "cxh_hddz", dw_jzxxx_dq.GetItemNumber(row, "cxh_hddz"));
            dw_jzxxx.SetItem(li_row, "sqdbh", dw_jzxxx_dq.GetItemString(row, "sqdbh"));
            dw_jzxxx.SetItem(li_row, "cxh_sqdbh", dw_jzxxx_dq.GetItemNumber(row, "cxh_sqdbh"));
            dw_jzxxx.SetItem(li_row, "fybm", dw_jzxxx_dq.GetItemString(row, "fybm"));
            dw_jzxxx.SetItem(li_row, "fymc", dw_jzxxx_dq.GetItemString(row, "fymc"));
            dw_jzxxx.SetItem(li_row, "fyje", dw_jzxxx_dq.GetItemNumber(row, "fyje"));
        }
        self.SetEditMode("new");


    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "sqdbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate()); 
        
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
        if (lastdw.GetName() == 'dw_jzxxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_cmd.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_jzxxx.SetRedraw(false);
            dw_jzxxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_jzxxx, ll_row_to, DWBUFFER.Primary);
            dw_jzxxx.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_jzxxx.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_jzxxx.ScrollToRow(ll_row_count);
            }

            if (dw_jzxxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_jzxxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

      

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_jzxxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from -1 ;
            }
            else {
                ll_row_to = 1;
            }

            dw_jzxxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_jzxxx, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1 ) {
                dw_jzxxx.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_jzxxx.ScrollToRow(1);
            }

            if (dw_jzxxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_jzxxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
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





