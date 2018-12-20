///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_BgdjEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_cmd= new DataWindow( requestor );
	 var dw_spms= new DataWindow( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var dw_bg= new DataWindow( requestor );
	 var dw_spms2= new DataWindow( requestor );
	 var dw_fy= new DataWindow( requestor );
	 var dw_kehu= new DataWindow( requestor );
	 var dw_memo= new DataWindow( requestor );
	 var dw_selected= new DataWindow( requestor );
	 var dw_tyzss= new DataWindow( requestor );
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ds_1= new DataStore( requestor );

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
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(dw_bg == null ) dw_bg= new DataWindow( requestor );
		 dw_bg.Attach( win.Control( "dw_bg") ); 
		 if(dw_spms2 == null ) dw_spms2= new DataWindow( requestor );
		 dw_spms2.Attach( win.Control( "dw_spms2") ); 
		 if(dw_fy == null ) dw_fy= new DataWindow( requestor );
		 dw_fy.Attach( win.Control( "dw_fy") ); 
		 if(dw_kehu == null ) dw_kehu= new DataWindow( requestor );
		 dw_kehu.Attach( win.Control( "dw_kehu") ); 
		 if(dw_memo == null ) dw_memo= new DataWindow( requestor );
		 dw_memo.Attach( win.Control( "dw_memo") ); 
		 if(dw_selected == null ) dw_selected= new DataWindow( requestor );
		 dw_selected.Attach( win.Control( "dw_selected") ); 
		 if(dw_tyzss == null ) dw_tyzss= new DataWindow( requestor );
		 dw_tyzss.Attach( win.Control( "dw_tyzss") ); 
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

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

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_spms","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_bg","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_bg_ItemChanged)=="function") 
			 win.AttachEvent("dw_bg","ItemChanged",self.dw_bg_ItemChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_spms2","GetFocus",self.dw_GetFocus); 

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

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_tyzss","GetFocus",self.dw_GetFocus); 

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

		 if(typeof(self.GenBgsp)=="function") 
			 win.AttachEvent("btn_sphb","Clicked",self.GenBgsp); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_preview","Clicked",self.Print); 

		 if(typeof(self.ShowExcel)=="function") 
			 win.AttachEvent("btn_excel","Clicked",self.ShowExcel); 

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
		 sle_1.Detach(); sle_1=null; 
		 dw_bg.Detach(); dw_bg=null; 
		 dw_spms2.Detach(); dw_spms2=null; 
		 dw_fy.Detach(); dw_fy=null; 
		 dw_kehu.Detach(); dw_kehu=null; 
		 dw_memo.Detach(); dw_memo=null; 
		 dw_selected.Detach(); dw_selected=null; 
		 dw_tyzss.Detach(); dw_tyzss=null; 
		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 ds_1.Detach(); ds_1=null; 
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
    var iw_BgspHb = null;
    var dwc = new DataWindowChild();
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Bgdj.ashx");

    //#endregion

    //#region 设置窗口是否可编辑
    this.SetEditMode = function (newMode) {

        editMode = newMode;
        var bEditFlag = false;
        if (editMode == "Edit" || editMode == "copy") {
            bEditFlag = true;
        }
        else {
            bEditFlag = false;
        };
//        if (tab_1.GetSelectedTab() == 1) {
//            tb_1.SetVisible("btn_rowadd", false);
//            tb_1.SetVisible("btn_rowdelete", false);
//            tb_1.SetVisible("btn_rowcopy", false);
////            tb_1.SetVisible("btn_rowinsert", false);
//            tb_1.SetVisible("btn_rownext", false);
//            tb_1.SetVisible("btn_rowback", false);
//            tb_1.SetVisible("btn_sphb", false);
//        }
//        else {
            tb_1.SetEnabled("btn_save", bEditFlag);
            tb_1.SetEnabled("btn_rowadd", bEditFlag);
            tb_1.SetEnabled("btn_rowdelete", bEditFlag);
            tb_1.SetEnabled("btn_rowcopy", bEditFlag);
//            tb_1.SetEnabled("btn_rowinsert", bEditFlag);
            tb_1.SetEnabled("btn_rownext", bEditFlag);
            tb_1.SetEnabled("btn_rowback", bEditFlag);
//            tb_1.SetEnabled("btn_sphb", bEditFlag);
//        }
        dw_selected.Modify("DataWindow.Readonly=yes");
        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_cmd.Modify("DataWindow.Readonly=no");
            dw_spms.Modify("DataWindow.Readonly=no");
            dw_kehu.Modify("DataWindow.Readonly=no");
            dw_memo.Modify("DataWindow.Readonly=no");
            dw_tyzss.Modify("DataWindow.Readonly=no");
            dw_bg.Modify("DataWindow.Readonly=no");
            dw_fy.Modify("DataWindow.Readonly=no");
            dw_spms2.Modify("DataWindow.Readonly=no");
            dw_1.Modify("DataWindow.Readonly=yes");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_cmd.Modify("DataWindow.Readonly=yes");
            dw_spms.Modify("DataWindow.Readonly=yes");
            dw_kehu.Modify("DataWindow.Readonly=yes");
            dw_memo.Modify("DataWindow.Readonly=yes");
            dw_tyzss.Modify("DataWindow.Readonly=yes");
            dw_bg.Modify("DataWindow.Readonly=yes");
            dw_fy.Modify("DataWindow.Readonly=yes");
            dw_spms2.Modify("DataWindow.Readonly=yes");
            dw_1.Modify("DataWindow.Readonly=yes");
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.ShareData(dw_spms);
        dw_master.ShareData(dw_spms2);
        dw_master.ShareData(dw_kehu);
        dw_bg.SetFocus();
        var operation = requestor.GetParm("operation");
        if (operation == "new") {
            self.Add();
        }   
        if (operation == "new" || operation == "open" || operation == "copy") {           
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            }
            else {
                self.SetEditMode("Edit");
             }

        }
        else {
            self.SetEditMode("show");
        };

        tab_1.SelectTab(3);
        bEditFlag = false;
        if (editMode == "Edit" || editMode == "copy") {
            bEditFlag = true;
        }
        else {
            bEditFlag = false;
        };

        tb_1.SetVisible("btn_rowadd", bEditFlag);
        tb_1.SetVisible("btn_rowdelete", bEditFlag);
        tb_1.SetVisible("btn_rowcopy", false);
        //            tb_1.SetVisible("btn_rowinsert", bEditFlag);
        tb_1.SetVisible("btn_rownext", false);
        tb_1.SetVisible("btn_rowback", false);
        tb_1.SetVisible("btn_sphb", true);
        //            lastdw = dw_bg;

    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region tabselect

    this.Tab_Select = function () {
        if (tab_1.GetSelectedTab() == 2) {
            var bEditFlag = false;
            if (editMode == "Edit" || editMode == "copy") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };

            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            //            tb_1.SetVisible("btn_rowinsert", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_sphb", false);
            //            lastdw = dw_cmd;
        }
        if (tab_1.GetSelectedTab() == 3) {
            bEditFlag = false;
            if (editMode == "Edit" || editMode == "copy") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };

            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            //            tb_1.SetVisible("btn_rowinsert", bEditFlag);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
            tb_1.SetVisible("btn_sphb", true);
            //            lastdw = dw_bg;
        }
        if (tab_1.GetSelectedTab() == 4) {
            bEditFlag = false;
            if (editMode == "Edit" || editMode == "copy") {
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
            tb_1.SetVisible("btn_sphb", false);
            //            lastdw = dw_fy;
        }
        if (tab_1.GetSelectedTab() == 1) {
            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            //            tb_1.SetVisible("btn_rowinsert", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
            tb_1.SetVisible("btn_sphb", false);
            //            lastdw = dw_master;
         
        }
 
        if (tab_1.GetSelectedTab() == 5) {
            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            //            tb_1.SetVisible("btn_rowinsert", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
            tb_1.SetVisible("btn_sphb", false);
            //            lastdw = dw_selected;
        }
        if (tab_1.GetSelectedTab() == 7) {


            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowback", false);
            tb_1.SetVisible("btn_sphb", false);
        }
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
        dw_tyzss.AcceptText();

        if ((dw_master.ModifiedCount() + dw_tyzss.ModifiedCount() + dw_cmd.DeletedCount() + dw_cmd.ModifiedCount() + dw_fy.DeletedCount() + dw_fy.ModifiedCount()) > 0) {
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

        if (dw_bg.AcceptText() != 1)
            return;

        if (dw_fy.AcceptText() != 1)
            return;

        if (dw_tyzss.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_spms.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() + dw_selected.ModifiedCount() + dw_fy.ModifiedCount() + dw_fy.DeletedCount() + dw_tyzss.ModifiedCount() + dw_kehu.ModifiedCount() + dw_bg.ModifiedCount() + dw_memo.ModifiedCount()) <= 0) {
            requestor.MessageBox("提示", "没有数据需要保存!");
            return;
        }



        if ((dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() + dw_bg.ModifiedCount()) > 0) {

            if (requestor.MessageBox("提示", "是否用报关商品中的合计数去自动设置总的毛净重体积包装等?", ICON.Question, BUTTON.YesNo) == 1) {
          
                dw_master.SetItem(1, "zje", dw_bg.GetItemNumber(1, "sum_wxzj"))
            
                dw_master.SetItem(1, "bzjs", dw_bg.GetItemNumber(1, "sum_bzjs"))
                dw_master.SetItem(1, "zmz", dw_bg.GetItemNumber(1, "sum_mz"))
                dw_master.SetItem(1, "zjz", dw_bg.GetItemNumber(1, "sum_jz"))
                dw_master.SetItem(1, "ztj", dw_bg.GetItemNumber(1, "sum_tj"))
                dw_master.SetItem(1, "spsl", dw_bg.GetItemNumber(1, "sum_spsl"))
            }
            var zusdje = dw_bg.GetItemNumber(1, "sum_wxzj") * dw_master.GetItemNumber(1, "zusdhl");
            var zrmbje = dw_bg.GetItemNumber(1, "sum_wxzj") * dw_master.GetItemNumber(1, "zrmbhl");
            zusdje = parseFloat(zusdje.toFixed(2));
            zrmbje = parseFloat(zrmbje.toFixed(2));
            dw_master.SetItem(1, "zusdje", zusdje);
            dw_master.SetItem(1, "zrmbje", zrmbje);
        }


        var zje = dw_master.GetItemNumber(1, "zje");
        if (zje == 0 || zje == null) {
            alert("发票总金额不得为0,请输入商品金额!");
            tab_1.SelectTab(2);
            dw_cmd.SetFocus();

            return;
        }

        var zusdhl = dw_master.GetItemNumber(1, "zusdhl");
        if (zusdhl == 0 || zusdhl == null) {
            alert("折USD汇率不得为0或者空,请输入折USD汇率!");
            tab_1.SelectTab(1);
            dw_master.SetFocus();
            dw_master.SetColumn("zusdhl")

            return;
        }

        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            dw_cmd.SetItem(row, "cxh", row);
        }

        if (dw_cmd.RowCount() == 0) {
            alert("明细单没有商品信息!");
            dw_cmd.SetFocus();
            return;
        }
        if (dw_bg.RowCount() == 0) {
            requestor.MessageBox("提示", "报关单没有商品信息!");
            dw_bg.SetFocus();
            //            return;
        }

        //更新行号
        for (row = dw_bg.RowCount(); row > 0; row--) {
            dw_bg.SetItem(row, "cxh", row);
        }

        //进行数据数据校验
        //	     if (dw_m.ModifiedCount() > 0 || dw_m.GetItemString(dw_m.GetRow(), "id") == "") {
        //	         if (!dw_m.CheckData("*", ""))
        //	             return;
        //	     }

        //	     if (dw_d.ModifiedCount() > 0) {
        //	         if (!dw_d.CheckData("*", ""))
        //	             return;
        //	     }


        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();
        var dw_selected_data = dw_selected.GetChanges();
        var dw_fy_data = dw_fy.GetChanges();
        var dw_tyzss_data = dw_tyzss.GetChanges();
        var dw_bg_data = dw_bg.GetChanges();
        var dw_kehu_data = dw_kehu.GetChanges();
        var dw_memo_data = dw_memo.GetChanges();
        if (dw_master_data == "" && dw_cmd_data == "" && dw_selected_data == "" && dw_fy_data == "" && dw_tyzss_data == "" && dw_bg_data == "" && dw_kehu_data == "" && dw_memo_data == "")
            return;



        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var bbh = dw_master.GetItemNumber(1, "bbh");
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data + "&dw_Selected=" + dw_selected_data + "&dw_Fy=" + dw_fy_data + "&dw_Tyzss=" + dw_tyzss_data + "&dw_Bg=" + dw_bg_data + "&dw_Kehu=" + dw_kehu_data + "&dw_Memo=" + dw_memo_data + "&mxdbh=" + mxdbh + "&bbh=" + bbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            dw_selected.ResetUpdate();
            dw_fy.ResetUpdate();
            dw_tyzss.ResetUpdate();
            dw_memo.ResetUpdate();
            dw_bg.ResetUpdate();

            //	         self.SetEditMode("");
            requestor.MessageBox("提示", "数据保存成功!");
            //	         dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
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

        if (dw_bg.AcceptText() != 1)
            return;

        if (dw_fy.AcceptText() != 1)
            return;

        if (dw_tyzss.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_spms.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() + dw_selected.ModifiedCount() + dw_fy.ModifiedCount() + dw_fy.DeletedCount() + dw_tyzss.ModifiedCount() + dw_kehu.ModifiedCount() + dw_bg.ModifiedCount() + dw_memo.ModifiedCount()) <= 0) {
            //            requestor.MessageBox("提示","没有数据需要保存!");
            return;
        }
        if ((dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() + dw_bg.ModifiedCount()) > 0) {

            if (requestor.MessageBox("提示", "是否用报关商品中的合计数去自动设置总的毛净重体积包装等?", ICON.Question, BUTTON.YesNo) == 1) {

                dw_master.SetItem(1, "zje", dw_bg.GetItemNumber(1, "sum_wxzj"))
                dw_master.SetItem(1, "bzjs", dw_bg.GetItemNumber(1, "sum_bzjs"))
                dw_master.SetItem(1, "zmz", dw_bg.GetItemNumber(1, "sum_mz"))
                dw_master.SetItem(1, "zjz", dw_bg.GetItemNumber(1, "sum_jz"))
                dw_master.SetItem(1, "ztj", dw_bg.GetItemNumber(1, "sum_tj"))
                dw_master.SetItem(1, "spsl", dw_bg.GetItemNumber(1, "sum_spsl"))
            }
            var zusdje = dw_bg.GetItemNumber(1, "sum_wxzj") * dw_master.GetItemNumber(1, "zusdhl");
            var zrmbje = dw_bg.GetItemNumber(1, "sum_wxzj") * dw_master.GetItemNumber(1, "zrmbhl");
            zusdje = parseFloat(zusdje.toFixed(2));
            zrmbje = parseFloat(zrmbje.toFixed(2));
            dw_master.SetItem(1, "zusdje", zusdje);
            dw_master.SetItem(1, "zrmbje", zrmbje);
        }

        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            if (dw_cmd.GetItemString(row, "hgbm") == "") {
                dw_cmd.DeleteRow(row);
                continue;
            }
            dw_cmd.SetItem(row, "cxh", row);
        }

        //        if (dw_bg.RowCount() == 0) {
        //           requestor.MessageBox("提示","报关单没有商品信息!");
        //            dw_master.SetFocus();
        //            return;
        //        }

        //进行数据数据校验
        //	     if (dw_m.ModifiedCount() > 0 || dw_m.GetItemString(dw_m.GetRow(), "id") == "") {
        //	         if (!dw_m.CheckData("*", ""))
        //	             return;
        //	     }

        //	     if (dw_d.ModifiedCount() > 0) {
        //	         if (!dw_d.CheckData("*", ""))
        //	             return;
        //	     }

        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();
        var dw_selected_data = dw_selected.GetChanges();
        var dw_fy_data = dw_fy.GetChanges();
        var dw_tyzss_data = dw_tyzss.GetChanges();
        var dw_bg_data = dw_fy.GetChanges();
        var dw_kehu_data = dw_fy.GetChanges();
        var dw_memo_data = dw_memo.GetChanges();
        if (dw_master_data == "" && dw_cmd_data == "" && dw_selected_data == "" && dw_fy_data == "" && dw_tyzss_data == "" && dw_bg_data == "" && dw_kehu_data == "" && dw_memo_data == "")
            return;



        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var bbh = dw_master.GetItemNumber(1, "bbh");
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data + "&dw_Selected=" + dw_selected_data + "&dw_Fy=" + dw_fy_data + "&dw_Tyzss=" + dw_tyzss_data + "&dw_Bg=" + dw_bg_data + "&dw_Kehu=" + dw_kehu_data + "&dw_Memo=" + dw_memo_data + "&mxdbh=" + mxdbh + "&bbh=" + bbh + "&operation=" + editMode);


        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号

            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            dw_selected.ResetUpdate();
            dw_fy.ResetUpdate();
            dw_tyzss.ResetUpdate();
            dw_memo.ResetUpdate();
            dw_bg.ResetUpdate();
            //	         self.SetEditMode("");
            //            requestor.MessageBox("提示", "数据保存成功!");
            //	         dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion


    //#region 插入商品
    this.InsertRow = function () {
        lastdw.AcceptText();
        if (lastdw.GetName() == 'dw_cmd') {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            row = lastdw.InsertRow(lastdw.GetRow());
            var dwo = lastdw.GetDataObject();
            iw_Commodity_Select.SetDetailDW(lastdw);
            iw_Commodity_Select.SetRow(row);
            iw_Commodity_Select.SetDwo(dwo);
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode="+ShareMode+"&ywy=" + ywy+"&Dlwtf=" + Dlwtf, iw_Commodity_Select);
        }
        if (lastdw.GetName() == 'dw_bg') {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            ywy = requestor.GetParm("userid");
            ShareMode = requestor.GetParm("ShareMode");
            Dlwtf = requestor.GetParm("Dlwtf");

            row = lastdw.InsertRow(lastdw.GetRow());
            dwo = lastdw.GetDataObject();
            iw_Commodity_Select.SetDetailDW(lastdw);
            iw_Commodity_Select.SetRow(row);
            iw_Commodity_Select.SetDwo(dwo);
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
        }



    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
        lastdw.AcceptText();
        if (lastdw.GetName() == 'dw_cmd') {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var dwo = lastdw.GetDataObject();
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(lastdw);

            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
        }
        if (lastdw.GetName() == 'dw_bg') {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            ywy = requestor.GetParm("userid");
            ShareMode = requestor.GetParm("ShareMode");
            Dlwtf = requestor.GetParm("Dlwtf");
            dwo = lastdw.GetDataObject();
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(lastdw);

            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
        }
        if (lastdw.GetName() == 'dw_fy') {
            dw_fy.ScrollToRow(dw_fy.InsertRow(0));
            dw_fy.SetFocus();
        }
    };
    //#endregion

    //#region 删除
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;
        if (lastdw.GetName() == 'dw_cmd' || lastdw.GetName() == 'dw_fy' || lastdw.GetName() == 'dw_bg') {
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


    //#region  生成报关商品
    this.GenBgsp = function () {
        if (editMode == "show")
            return;
        self.SaveData();
        if (iw_BgspHb == null)
            iw_BgspHb = new W_Gen_Bgsp();
        iw_BgspHb.SetParameter(sle_1);
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Gen_Bgsp", iw_BgspHb);
        var selection = sle_1.GetText();
        if (selection == "CANCEL") {
            return;
        }

        //计算fobbl=(商品总金额-运费-保费)/商品总金额
        var ldc_spzje = dw_cmd.GetItemNumber(1, "sum_wxzj");
        var ldc_yf = dw_master.GetItemNumber(1, "yf_usd");
        
        var ldc_bf = dw_master.GetItemNumber(1, "bf_usd");
        var fobbl
        if (ldc_yf == null) {
            ldc_yf = 0
        };
        if (ldc_bf == null) {
            ldc_bf = 0
        };

        if (ldc_spzje == 0) {
            fobbl = 1
        }
        else {
            fobbl = ((ldc_spzje - ldc_yf - ldc_bf) / ldc_spzje)

        };

        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var num = QsWebSoft.PubMethod.GenBgsp(mxdbh, selection, fobbl).value;
        if (num == "1") {
            requestor.MessageBox("提示", "生成报关商品成功!")
//            var hgbm = "";
//            var bgdw = "";
//            var jldw = "";
//            var jjdwzw = "";
//            var msg = "如下商品报关计量单位和出口计量单位不同，请核对报关数量：";
//            for (row = dw_bg.RowCount(); row > 0; row--) {
//                hgbm = dw_bg.GetItemString(row, "hgbm");
//                bgdw = dw_bg.GetItemString(row, "jjdw");
//                jldw = dw_bg.GetItemString(row, "sldw");
//                jjdwzw = QsWebSoft.PubMethod.GetJldwZwbyJldwyw(jldw).value;
//                if (bgdw != jjdwzw) {
//                    msg = msg + "\r\n" + "HS编码为" + hgbm + "：报关计量单位为(" + bgdw + ")， 实际出口计量单位"+jldw+"(" + jjdwzw + ")";
//                }
//            }
            //            requestor.MessageBox("提示", msg)
            requestor.MessageBox("提示", "系统不再自动调整商品报关计量单位，如有需要，请手工调整!")
        }
        else {
            requestor.MessageBox("提示", "生成报关商品失败!")

        }
        dw_bg.Retrieve(mxdbh);


    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var date = new Date();
        dw_master.SetItem(1, "bbh", 1);
        dw_master.SetItem(1, "wybh_add", "");
        dw_master.SetItem(1, "zdr", userid);
        dw_master.SetItem(1, "zdrq", date.getDate());
        dw_master.SetItem(1, "fprq", date.getDate());
        dw_master.SetItem(1, "fsrq", null);
        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "cy_state", "已接收")
        dw_master.SetItem(1, 'cy_jsrq', date.getDate())
        dw_master.SetItem(1, "dz_state", "已接收")
        dw_master.SetItem(1, 'dz_jsrq', date.getDate())
        dw_master.SetItem(1, "dzjh_state", "新制")
        dw_master.SetItem(1, "htxg_state", "")
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
        dw_master.Modify("wybh_add.Tabsequence=10");
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
            if (str.substring(0, 1) == "C") {
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
        if (dwoName == "jnhyd_t") {
            if (iw_Jnhyd_Select == null)
                iw_Jnhyd_Select = new W_Jnhyd_Select();
            iw_Jnhyd_Select.SetDataWindow(dw_master);
            iw_Jnhyd_Select.SetData("jnhyd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Jnhyd_Select", iw_Jnhyd_Select);
            dw_master.SetFocus();
        }

//        if (dwoName == "dlxyh_t") {
//            if (iw_Dlxy_Select == null)
//                iw_Dlxy_Select = new W_Dlxy_Select();
//            iw_Dlxy_Select.SetDataWindow(dw_master);
//            iw_Dlxy_Select.SetDataWindow2(dw_cbyc);
//            iw_Dlxy_Select.SetData("dlxyh");
//            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Dlxy_Select", iw_Dlxy_Select);
//            dw_master.SetFocus();
//        }

        if (dwoName == "ywy_t") {
            //            self.GetData();
            //            dw_master.SetFocus();
        }


    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "wybh_add") {
            dw_master.SetItem(row, "mxdbh", dw_master.GetItemString(row, "wybh") + data);
        };

        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb(data).value;
            if (zusdhl == null || zusdhl == 0) {
                requestor.MessageBox("提示", "系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
                return;
            }

            if (zrmbhl == null || zrmbhl == 0) {
                requestor.MessageBox("提示", "系统代码的货币汇率表中货币:" + data + " 折人民币值为0或者该货币没录入,请检查后重新修改!");
                return;
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
                requestor.MessageBox("提示", "明细单编号已经存在,请重新编写!");
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
                requestor.MessageBox("提示", "比率不能大于100%或者小于0%!");
                return;
            }
            dw_master.SetItem(1, "rate2", 1 - parseFloat(data));
        }

        if (dwoName == "rate2") {
            if (parseFloat(data) > 1 || parseFloat(data) < 0) {
                requestor.MessageBox("提示", "比率不能大于100%或者小于0%!");
                return;
            }
            dw_master.SetItem(1, "rate", 1 - parseFloat(data));
        }

        if (dwoName == "jgtk") {
            if (data == "FOB" || data == "FCA") {
                dw_master.SetItem(1, "jgtk_sm", dw_master.GetItemString(1, "ckka"));
                dw_tyzss.SetItem(1, "yfydf", "FREIGHT COLLECT");
                dw_master.SetItem(1, "fobbl", 100);
            }
            else if (data == "CIF" || data == "CFR") {
                dw_tyzss.SetItem(1, "yfydf", "FREIGHT PREPAID");
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

    //#region dw_tyzss弹出选择
    this.dw_tyzss_Clicked = function (xPos, yPos, Row, dwoName) {
        var khlx = "";
        if (editMode == "show")
            return;
        if (dwoName == "zdhd_t") {
            var zdhd = dw_tyzss.GetItemString(1, "zdhd_flag");
            if (zdhd != "Y")
                return;
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "fgf";
            iw_Wldw_Select.SetDataWindow(dw_tyzss);
            iw_Wldw_Select.SetData("zdhd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }

        if (dwoName == "hdgs_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "fgf";
            iw_Wldw_Select.SetDataWindow(dw_tyzss);
            iw_Wldw_Select.SetData("hdgs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx, iw_Wldw_Select);
            dw_kehu.SetFocus();
        }
    }
    //#endregion

    //#region dw_cmd ItemChanged
    this.dw_cmd_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jjsl") {
            if (data < 0) {
                requestor.MessageBox("提示", "数量不能小于0,请重新输入!");
                return 1;
            }
            ldc_wxzj = dw_cmd.GetItemNumber(row, "wxzj");
            ldc_wxdj = ldc_wxzj / data;
            ldc_wxdj = parseFloat(ldc_wxdj.toFixed(2));
            dw_cmd.SetItem(row, "wxdj", ldc_wxdj);
            dw_cmd.SetItem(row, "wxdj_dz", ldc_wxdj);
//            ldc_wxzj = (data * dw_cmd.GetItemNumber(row, "wxdj"));
//            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
//            dw_cmd.SetItem(row, "wxzj", ldc_wxzj);
            self.CacluSgje(row, dw_cmd);
            self.CacluBzjs(row, dw_cmd);
            self.CacluMjztj(row, dw_cmd);
            self.SetZje();
//            self.SetZmjztj();
        }

        else if (dwoName == "wxdj") {
            if (data < 0) {
                requestor.MessageBox("提示", "单价不能小于0,请重新输入!");
                return 1;
            }
//            ldc_wxzj = (data * dw_cmd.GetItemNumber(row, "jjsl"));
//            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
//            dw_cmd.SetItem(row, "wxzj", ldc_wxzj);
//            self.SetZje();
        }
        else if (dwoName == "wxzj") {
            if (data < 0) {
                requestor.MessageBox("提示", "金额不能小于0,请重新输入!");
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
                requestor.MessageBox("提示", "输入值不能小于0,请重新输入!");
                return 1;
            }
            self.CacluSgje(row, dw_cmd);
            self.SetZje();
        }

        else if (dwoName == "mjsl") {
            if (data < 0) {
                requestor.MessageBox("提示", "每件数量不能小于0,请重新输入!");
                return 1;
            }
            self.CacluBzjs(row, dw_cmd);
            self.CacluMjztj(row, dw_cmd);
            self.SetZmjztj();
        }
        else if (dwoName == "bzjs" || dwoName == "mjmz" || dwoName == "mjjz" || dwoName == "djtjms") {
            if (data < 0) {
                requestor.MessageBox("提示", "输入值不能小于0,请重新输入!");
                return 1;
            }
            self.CacluMjztj(row, dw_cmd);
            self.SetZmjztj();

        }

        else if (dwoName == "mz" || dwoName == "jz" || dwoName == "tj") {
            if (data < 0) {
                requestor.MessageBox("提示", "输入值不能小于0,请重新输入!");
                return 1;
            }
            self.SetZmjztj();

        }
        else if (dwoName == "djtj") {
            if (data < 0) {
                requestor.MessageBox("提示", "输入值不能小于0,请重新输入!");
                return 1;
            }
            var bzjs = dw_cmd.GetItemNumber(row, "bzjs");
            var tj = bzjs * data;
            dw_cmd.SetItem(row, "tj", tj);
            self.SetZmjztj();

        }


    }
    //#endregion

    //#region dw_bg_ItemChanged
    this.dw_bg_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jjsl") {
            if (data < 0) {
                requestor.MessageBox("提示", "数量不能小于0,请重新输入!");
                return 1;
            }
//            ldc_wxzj = (data * dw_bg.GetItemNumber(row, "wxdj"));
//            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
//            dw_bg.SetItem(row, "wxzj", ldc_wxzj);
            //            self.CacluSgje(row,dw_bg);
            ldc_wxzj = dw_bg.GetItemNumber(row, "wxzj");
            ldc_wxdj = ldc_wxzj / data;
            ldc_wxdj = parseFloat(ldc_wxdj.toFixed(2));
            dw_bg.SetItem(row, "wxdj", ldc_wxdj);
            self.CacluMjztj(row, dw_bg);
        }

        else if (dwoName == "wxdj") {
            if (data < 0) {
                requestor.MessageBox("提示", "单价不能小于0,请重新输入!");
                return 1;
            }
//            ldc_wxzj = (data * dw_bg.GetItemNumber(row, "jjsl"));
//            ldc_wxzj = parseFloat(ldc_wxzj.toFixed(2));
//            dw_bg.SetItem(row, "wxzj", ldc_wxzj);
        }
        else if (dwoName == "wxzj") {
            if (data < 0) {
                requestor.MessageBox("提示", "金额不能小于0,请重新输入!");
                return 1;
            }

            //如果数量大于0，则反算单价
            var Qty = dw_bg.GetItemNumber(row, "jjsl");
            var Price = dw_bg.GetItemNumber(row, "wxdj");
            if (Qty > 0) {
                ldc_wxdj = data / Qty;
                ldc_wxdj = parseFloat(ldc_wxdj.toFixed(4));
                dw_bg.SetItem(row, "wxdj", ldc_wxdj);

            }
            dw_bg.SetItem(row, "wxzj_fob", parseFloat(data));
            self.SetZje2();
        }


        else if (dwoName == "mjsl") {
            if (data < 0) {
                requestor.MessageBox("提示", "每件数量不能小于0,请重新输入!");
                return 1;
            }
            self.CacluBzjs(row,dw_bg);
            self.CacluMjztj(row,dw_bg);
        }
        else if (dwoName == "bzjs" || dwoName == "mjmz" || dwoName == "mjjz" || dwoName == "djtjms") {
            if (data < 0) {
                requestor.MessageBox("提示", "输入值不能小于0,请重新输入!");
                return 1;
            }
            self.CacluMjztj(row,dw_bg);

        }

        else if (dwoName == "mz" || dwoName == "jz" || dwoName == "tj") {
            if (data < 0) {
                requestor.MessageBox("提示", "输入值不能小于0,请重新输入!");
                return 1;
            }

        }


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
//        if (lastdw.GetName() == 'dw_cmd') {
            ll_row_from = dw_cmd.GetRow();
            ll_row_count = dw_cmd.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from - 1;
            }
            else {
                ll_row_to = 1;
            }


            //            if (ll_row_to == ll_row_from) {
            //                return;
            //            }
            dw_cmd.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_cmd, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1) {
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
//        if (lastdw.GetName() == 'dw_cmd') {
            ll_row_from = dw_cmd.GetRow();
            ll_row_count = dw_cmd.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from - 1;
            }
            else {
                ll_row_to = 1;
            }


            //            if (ll_row_to == ll_row_from) {
            //                return;
            //            }
            dw_cmd.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_cmd, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1) {
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



    //#region dw_kehu ItemChanged
    this.dw_kehu_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "tt_no") {
            var cname = "";
            var ename = "";
            var eaddr = "";
            var arrayobj = new Array(3);
            arrayobj = QsWebSoft.PubMethod.GetCompanyImformation(data).value;
            if (arrayobj == null) {
                cname = "";
                 ename = "";
                 eaddr = "";
            }
            else {
                if (arrayobj.length == 0) {
                     cname = "";
                     ename = "";
                     eaddr = "";

                }
                else {
                     cname = arrayobj[0];
                     ename = arrayobj[1];
                     eaddr = arrayobj[2];
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

    //#region dw_tyzss ItemChanged
    this.dw_tyzss_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "yqcyr") {
            dw_tyzss.AcceptText();
            ld_fprq = new Date(dw_master.GetItemDate(1, "fprq"));
            var ls_fprq = QsWebSoft.PubMethod.CheckDate(ld_fprq).value;
            ld_yqcyr = new Date(dw_tyzss.GetItemDate(1, "yqcyr"));
            var ls_yqcyr = QsWebSoft.PubMethod.CheckDate(ld_yqcyr).value;
            if (ls_yqcyr < ls_fprq) {
                arequestor.MessageBox("提示","要求出运日(" + ls_yqcyr + ")不能前于发票日期(" + ls_fprq + ")");
                dw_tyzss.SetItem(1, "yqcyr", null);
                return;
            }
            ll_fkqx = dw_master.GetItemNumber(1, "fkqx")
            ll_fkqx2 = dw_master.GetItemNumber(1, "fkqx2")
            if (ll_fkqx == null)
                ll_fkqx = 0;
            if (ll_fkqx2 == null)
                ll_fkqx2 = 0;
            ld_rq = new Date(dw_tyzss.GetItemDate(1, "yqcyr"));
            var ld_yjshr = QsWebSoft.PubMethod.addDay(ld_rq, parseInt(ll_fkqx)).value;
            var ld_yjshr2 = QsWebSoft.PubMethod.addDay(ld_rq, parseInt(ll_fkqx2)).value;
            dw_master.SetItem(1, "yjfkrq", ld_yjshr.getVarDate());
            dw_master.SetItem(1, "yjfkrq2", ld_yjshr2.getVarDate());
        }

        if (dwoName == "yfydf") {
            dw_tyzss.AcceptText();
            ls_jgtk = dw_master.GetItemString(1, "jgtk");
            ls_jgtk = ls_jgtk.toUpperCase();

            if (ls_jgtk.indexOf("FOB") > 0) {
                if (data != "FREIGHT COLLECT") {
                   requestor.MessageBox("提示","价格条款为" + ls_jgtk + ",运费是不是应为'FREIGHT COLLECT'");
                   return;
                }
            }
            else {
                if (data != "FREIGHT PREPAID") {
                    requestor.MessageBox("提示","价格条款为" + ls_jgtk + ",运费是不是应为'FREIGHT PREPAID'");
                    return;
                }
            }
        }

        if (dwoName == "zdhd_flag") {
            dw_tyzss.AcceptText();
            if (data == "N") {
                dw_tyzss.SetItem(1, "zdhd", "");
            }

        }

        if (dwoName == "tdqf") {
            dw_tyzss.AcceptText();
            if (dw_tyzss.GetItemString(1, "tdqf") == "电放") {
                dw_tyzss.SetItem(1, "tdzs", "");
            }
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
            ldc_hsje = dw_cmd.GetItemNumber(1, "sum_hsje");
            ldc_hsje = parseFloat(ldc_hsje.toFixed(2));
            //            ldc_tse = dw_cmd.GetItemNumber(1, "sum_tse");
            ldc_tse = 0;
            ldc_tse = parseFloat(ldc_tse.toFixed(2));
            ldc_wbcgje = 0;
        }
        else {
            ldc_wxje = 0;
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


    //#region SetZje2
    this.SetZje2 = function () {
        dw_bg.AcceptText();
        dw_master.AcceptText();
        dw_fy.AcceptText();
        var ldc_zusdhl = dw_master.GetItemNumber(1, "zusdhl");
        var ldc_zrmbhl = dw_master.GetItemNumber(1, "zrmbhl");
        var ldc_hsje = 0;
        if (dw_bg.RowCount() > 0) {
            ldc_wxje = dw_bg.GetItemNumber(1, "sum_wxzj");
            ldc_wxje = parseFloat(ldc_wxje.toFixed(2));

            //            ldc_tse = dw_cmd.GetItemNumber(1, "sum_tse");
            ldc_tse = 0;
            ldc_tse = parseFloat(ldc_tse.toFixed(2));
            ldc_wbcgje = 0;
        }
        else {
            ldc_wxje = 0;
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
    this.CacluSgje = function (row,dwo) {
        dwo.AcceptText();
        var ldc_jjsl = dwo.GetItemNumber(row, "jjsl");
        var ldc_hsdj = dwo.GetItemNumber(row, "hsdj");
        var ldc_zzsl = dwo.GetItemNumber(row, "zzsl");
        var ldc_tsl = dwo.GetItemNumber(row, "tsl");
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


        dwo.SetItem(row, "hsje", ldc_hszj);
        dwo.SetItem(row, "bhsdj", ldc_bhsdj);
        dwo.SetItem(row, "bhsje", ldc_bhsje);
        dwo.SetItem(row, "zzse", ldc_zzse);
        dwo.SetItem(row, "tse", ldc_tse);

    }
    //#endregion

    //#region CacluBzjs
    this.CacluBzjs = function (row,dwo) {
        dwo.AcceptText();
        var ldc_mjsl = dwo.GetItemNumber(row, 'mjsl');
        if (ldc_mjsl == 0 || ldc_mjsl == null) {
            return;
        }
        var ldc_jjsl = dwo.GetItemNumber(row, 'jjsl');
        var ldc_bzjs = ldc_jjsl / ldc_mjsl;
        //取整数部分
        if (parseInt(ldc_bzjs) != ldc_bzjs) {
            ldc_bzjs = Math.ceil(ldc_bzjs)   //去小数部分加1
        }
        dwo.SetItem(row, 'bzjs', ldc_bzjs)
    }
    //#endregion


    //#region CacluMjztj
    this.CacluMjztj = function (row,dwo) {
        dwo.AcceptText();
        var ldc_bzjs = dwo.GetItemNumber(row, "bzjs");
        if (ldc_bzjs == 0) {
            ldc_bzjs = 0;
        }
        ldc_jjsl = dwo.GetItemNumber(row, "jjsl");

        //计算毛重、净重
        ldc_mjmz = dwo.GetItemNumber(row, "mjmz");
        ldc_mjjz = dwo.GetItemNumber(row, "mjjz");
        if (ldc_bzjs > 0 && ldc_mjmz > 0) {
            ldc_mz = ldc_bzjs * ldc_mjmz;
            ldc_mz = parseFloat(ldc_mz.toFixed(4));
            dwo.SetItem(row, "mz", ldc_mz);
        }
        if (ldc_bzjs > 0 && ldc_mjjz > 0) {
            ldc_jz = ldc_bzjs * ldc_mjjz;
            ldc_jz = parseFloat(ldc_jz.toFixed(4));
            dwo.SetItem(row, "jz", ldc_jz);
        }





        var ls_djtjms = dwo.GetItemString(row, "djtjms");
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

                dwo.SetItem(row, "tj", parseFloat(ldc_tj));
            }

        }
        else {
            if (ldc_bzjs > 0 && parseFloat(ls_value) > 0) {
                ldc_tj = parseFloat(ls_value) * ldc_bzjs;

                ldc_tj = ldc_tj.toFixed(3);
                dwo.SetItem(row, "tj", parseFloat(ldc_tj));
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
        dw_master.SetItem(1, "sldw", sldw)
        dw_master.SetItem(1, "bzjs", ldc_zjs)
        dw_master.SetItem(1, "bzdw", bzdw)
        dw_master.SetItem(1, "zmz", ldc_zmz)
        dw_master.SetItem(1, "zjz", ldc_zjz)
        dw_master.SetItem(1, "zldw", zldw)
        dw_master.SetItem(1, "ztj", ldc_ztj)

        self.GenBzms();

    }
    //#endregion

    //#region 打印
    this.Print = function () {

        if (tab_1.GetSelectedTab() != 5) {
            tab_1.SelectTab(5)
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
        var tt_no = dw_master.GetItemString(1, "tt_no");
        var strFilePath = "/Images/";
        dw_print.SetDataObject(dwo);
        dw_print.Retrieve(mxdbh, dzbh);
         
        if (dzbh == "BG3011" || dzbh == "BG5303") {
            strFilePath = strFilePath + "报关专用章" + tt_no + ".jpg";
            dw_print.SetPicture("p_1", strFilePath);
        }
        else {

            strFilePath = strFilePath + "单证手签章" + tt_no + ".jpg";
            dw_print.SetPicture("p_1", strFilePath);

        }
        var slhj = self.set_total_sl(dzbh);
        dw_print.Modify("t_total_jjsl.text='" + slhj + "'");
        if (dzbh == "BG3011" || dzbh == "BG5303") {
            if (requestor.MessageBox("提示", "是否需要套打报关单?", ICON.Question, BUTTON.YesNo) == 1) {
                dw_print.Modify("td_flag.text='1'");
            }
            else {
                dw_print.Modify("td_flag.text='0'");
            }
        }

        dw_print.PrintPreview();

        QsWebSoft.PubMethod.RecordPrn(mxdbh, dzmc);
    }
    //#endregion

    //#region dw_selected RowFocusChanged
    this.dw_Selected_RowFocusChanged = function (row, dwoName, data) {
        if (row > 0&&dw_selected.GetRow()>0) {
            dw_memo.SetFilter("cy_zhuangtai_dzbh = '" + dw_selected.GetItemString(row, "dzbh") + "'");
            dw_memo.Filter();
            var mxdbh = dw_master.GetItemString(1, "mxdbh");
            var dzbh = dw_selected.GetItemString(row, "dzbh");
            if (dw_memo.RowCount() <= 0) {
                var insertrow = dw_memo.InsertRow(0);
                dw_memo.SetItem(insertrow, "cy_zhuangtai_dzbh", dzbh);
                dw_memo.SetItem(insertrow, "cy_zhuangtai_dtl_no", mxdbh);
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

    //#region ShowExcel
    this.ShowExcel = function () {
//        if (tab_1.GetSelectedTab() != 5) {
//            tab_1.SelectTab(5)
//            dw_selected.SetFocus()
//            return;
//        }

        self.SaveData();
        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var bbh = dw_master.GetItemNumber(1, "bbh");
        var tt_no = dw_master.GetItemString(1, "tt_no");
        var row = dw_selected.GetRow();
        var dzbh = dw_selected.GetItemString(1, "dzbh");

        var name = "报关单证";
        var reportName = dzbh;
        var paraMeters = mxdbh + "," + dzbh;
        var strFileName = "";
        var fileName = QsWebSoft.PubMethod.ShowPrintView(reportName, tt_no, paraMeters).value;
        if (fileName == null || fileName == "") {
            requestor.MessageBox("提示", "服务器繁忙，请重试！");
            return;
        }
        else {
            this.window.location.href = "/DownLoad.aspx?fileName="
             + fileName + "&Djbh=" + name + "&Code=" + mxdbh;
        }
//        QsWebSoft.PubMethod.RecordPrn(mxdbh, "EXCEL");

    }
    //#endregion

    //#region 
    this.dw_Selected_DoubleClicked = function (Row) {
        if (Row > 0)
            self.Print();

    }
    //#endregion

    //#region   设置发票、装箱单的合计数量按单位分组 wf_set_total_jjsl
    this.set_total_sl = function (dzbh) {
        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var temp = "";
      
        if (dzbh == "BG5301" || dzbh == "BG5302" || dzbh == "BG5303" || dzbh == "BG5304") {
            ds_1.SetDataObject("ds_bgdj_sldwfz_sj");
        }
        else {
            ds_1.SetDataObject("ds_bgdj_sldwfz");
        }
        ds_1.Retrieve(mxdbh);
        var ll_count = ds_1.RowCount();
        if (ll_count < 1)
            return;
        for (ll_loop = 1; ll_loop <= ll_count; ll_loop++) {
            temp = temp + ds_1.GetItemNumber(ll_loop, "spsl") + " " + ds_1.GetItemString(ll_loop, "sldw") + "~r~n";
        }
        return temp;
    }
    }
    //#endregion
   



