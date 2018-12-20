///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_YtjkEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_master= new DataWindow( requestor );
	 var dw_print_zthqksm= new DataWindow( requestor );
	 var dw_print_packinglist= new DataWindow( requestor );
	 var dw_print_invoice= new DataWindow( requestor );
	 var tab_1= new TabControl( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_spxx= new DataWindow( requestor );
	 var dw_zzxx= new DataWindow( requestor );
	 var dw_print_contract= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ContextMenuStrip3= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );
	 var ds_spxx= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_print_zthqksm == null ) dw_print_zthqksm= new DataWindow( requestor );
		 dw_print_zthqksm.Attach( win.Control( "dw_print_zthqksm") ); 
		 if(dw_print_packinglist == null ) dw_print_packinglist= new DataWindow( requestor );
		 dw_print_packinglist.Attach( win.Control( "dw_print_packinglist") ); 
		 if(dw_print_invoice == null ) dw_print_invoice= new DataWindow( requestor );
		 dw_print_invoice.Attach( win.Control( "dw_print_invoice") ); 
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_spxx == null ) dw_spxx= new DataWindow( requestor );
		 dw_spxx.Attach( win.Control( "dw_spxx") ); 
		 if(dw_zzxx == null ) dw_zzxx= new DataWindow( requestor );
		 dw_zzxx.Attach( win.Control( "dw_zzxx") ); 
		 if(dw_print_contract == null ) dw_print_contract= new DataWindow( requestor );
		 dw_print_contract.Attach( win.Control( "dw_print_contract") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ContextMenuStrip2 == null ) ContextMenuStrip2= new ContextMenu( requestor );
		 ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2") ); 
		 if(ContextMenuStrip3 == null ) ContextMenuStrip3= new ContextMenu( requestor );
		 ContextMenuStrip3.Attach( win.Control( "ContextMenuStrip3") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_jzxxx == null ) ds_jzxxx= new DataStore( requestor );
		 ds_jzxxx.Attach( win.Control( "ds_jzxxx") ); 
		 if(ds_spxx == null ) ds_spxx= new DataStore( requestor );
		 ds_spxx.Attach( win.Control( "ds_spxx") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_RbuttonDown)=="function") 
			 win.AttachEvent("dw_master","RButtonDown",self.dw_master_RbuttonDown); 

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_jzxxx","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_jzxxx_EditChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","EditChanged",self.dw_jzxxx_EditChanged); 

		 if(typeof(self.dw_jzxxx_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_jzxxx_GetFocus); 

		 if(typeof(self.dw_jzxxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","ItemChanged",self.dw_jzxxx_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_jzxxx","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_spxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_spxx","DoubleClicked",self.dw_spxx_DoubleClicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_spxx","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_spxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_spxx","ItemChanged",self.dw_spxx_ItemChanged); 

		 if(typeof(self.RbuttonDown_spxx)=="function") 
			 win.AttachEvent("dw_spxx","RButtonDown",self.RbuttonDown_spxx); 

		 if(typeof(self.dw_zzxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_zzxx","DoubleClicked",self.dw_zzxx_DoubleClicked); 

		 if(typeof(self.dw_zzxx_GetFocus)=="function") 
			 win.AttachEvent("dw_zzxx","GetFocus",self.dw_zzxx_GetFocus); 

		 if(typeof(self.RbuttonDown_zzxx)=="function") 
			 win.AttachEvent("dw_zzxx","RButtonDown",self.RbuttonDown_zzxx); 

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

		 if(typeof(self.PrintContract)=="function") 
			 win.AttachEvent("m_print_contract","Clicked",self.PrintContract); 

		 if(typeof(self.PrintInvoice)=="function") 
			 win.AttachEvent("发票打印ToolStripMenuItem","Clicked",self.PrintInvoice); 

		 if(typeof(self.PrintPackingList)=="function") 
			 win.AttachEvent("箱单打印ToolStripMenuItem","Clicked",self.PrintPackingList); 

		 if(typeof(self.PrintZthqksm)=="function") 
			 win.AttachEvent("直提货情况说明ToolStripMenuItem","Clicked",self.PrintZthqksm); 

		 if(typeof(self.Sjdc)=="function") 
			 win.AttachEvent("btn_sjdc","Clicked",self.Sjdc); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_6","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_spxx)=="function") 
			 win.AttachEvent("m_8","Clicked",self.CopyCol_spxx); 

		 if(typeof(self.Recover_spxx)=="function") 
			 win.AttachEvent("m_5","Clicked",self.Recover_spxx); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_13","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_zzxx)=="function") 
			 win.AttachEvent("m_15","Clicked",self.CopyCol_zzxx); 

		 if(typeof(self.Recover_zzxx)=="function") 
			 win.AttachEvent("m_12","Clicked",self.Recover_zzxx); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_master.Detach(); dw_master=null; 
		 dw_print_zthqksm.Detach(); dw_print_zthqksm=null; 
		 dw_print_packinglist.Detach(); dw_print_packinglist=null; 
		 dw_print_invoice.Detach(); dw_print_invoice=null; 
		 tab_1.Detach(); tab_1=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_spxx.Detach(); dw_spxx=null; 
		 dw_zzxx.Detach(); dw_zzxx=null; 
		 dw_print_contract.Detach(); dw_print_contract=null; 
		 tb_1.Detach(); tb_1=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ContextMenuStrip3.Detach(); ContextMenuStrip3=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_jzxxx.Detach(); ds_jzxxx=null; 
		 ds_spxx.Detach(); ds_spxx=null; 
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
    var iw_Mxd_Select = null;
    var iw_Hddz_Dlxy_Select = null;
    var iw_Country_Select = null;
    var iw_RqTime_Select = null;
    var dwc = new DataWindowChild();
 
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Ytjk.ashx");

    
    
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
            dw_spxx.Modify("DataWindow.Readonly=no");
            dw_zzxx.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_spxx.Modify("DataWindow.Readonly=yes");
            dw_zzxx.Modify("DataWindow.Readonly=yes");

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
                self.Save();
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
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
    this.dw_zzxx_GetFocus = function (sender) {
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
        dw_spxx.AcceptText();
        dw_zzxx.AcceptText();
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_zzxx.DeletedCount() + dw_zzxx.ModifiedCount() ) > 0) {
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

        if (dw_spxx.AcceptText() != 1)
            return;

        if (dw_zzxx.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_zzxx.ModifiedCount() + dw_zzxx.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString(row, "ywbh");

        dw_master.SetItem(row, "ywbh", ywbh);

        //FOB条件下判断是否有运费打勾 
        var jgfs = dw_master.GetItemString(1, "jgfs")
        if (jgfs == "FOB") {
            var sfyyf = dw_master.GetItemString(1, "sfyyf")
            if (sfyyf != "Y") {
                if (requestor.MessageBox("提示", "FOB下应该有运费支付，是否需要打勾?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_master.SetItem(1, "sfyyf", "Y")
                }
            }
        }
        //更新行号
        var hz_jzxh = ""
        var clfs = ""
        var ysfs = dw_master.GetItemString(1, "ysfs")
        if (ysfs == "空运") {
            var yjkgsj = new Date(dw_master.GetItemDate(1, "yjkgsj"))
            var ywbh = dw_master.GetItemString(1, "ywbh")
            var htjhthsj_lb = dw_master.GetItemString(1, "htjhthsj_lb")
            var ts = dw_master.GetItemString(1, "ts")
            if (ts == "Y") {
                requestor.MessageBox("提示", "注意是否修改计划操作时间")
            }
            QsWebSoft.PubMethod.GenYjkgsjtxm(ywbh, yjkgsj);
        }
        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "cxh", row);
            dw_jzxxx.SetItem(row, "ywbh", ywbh);
            if (ysfs == "空运") {
                dw_jzxxx.SetItem(row, "htjhthsj", yjkgsj);
//                dw_jzxxx.SetItem(row, "htjhthsj_lb", htjhthsj_lb);
            }
            if (row == dw_jzxxx.RowCount()) {
                hz_jzxh = dw_jzxxx.GetItemString(row, "jzxh")
            }
            else {
                hz_jzxh = hz_jzxh + ", " + dw_jzxxx.GetItemString(row, "jzxh")
            };

            clfs = dw_jzxxx.GetItemString(row, "clfs")
            if (clfs == null || clfs == "") {
                requestor.MessageBox("提示", "请输入处理方式！")
                return;
            }

        }

        dw_master.SetItem(1, "hz_jzxh", hz_jzxh)

        var hz_spmc = ""
        for (row = dw_spxx.RowCount(); row > 0; row--) {

            dw_spxx.SetItem(row, "cxh", row);
            dw_spxx.SetItem(row, "ywbh", ywbh);
            if (row == dw_spxx.RowCount()) {
                hz_spmc = dw_spxx.GetItemString(row, "spmc")
            }
            else {
                hz_spmc = hz_spmc + "," + dw_spxx.GetItemString(row, "spmc")
            };

        }
        dw_master.SetItem(1, "hz_spmc", hz_spmc)

        if (dw_spxx.RowCount() > 0) {
            var hz_sl = dw_spxx.GetItemNumber(1, "jlsl_sum");
            dw_master.SetItem(1, "hz_sl", hz_sl)
        }
        if (dw_jzxxx.RowCount() == 0) {
            alert("货代单证中没有集装箱信息!");
            dw_jzxxx.SetFocus();
            return;
        }

        for (row = dw_zzxx.RowCount(); row > 0; row--) {

            dw_zzxx.SetItem(row, "cxh", row);
            dw_zzxx.SetItem(row, "ywbh", ywbh);

        }


        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_spxx_data = dw_spxx.GetChanges();
        var dw_zzxx_data = dw_zzxx.GetChanges();
        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_spxx_data == "" && dw_zzxx_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_spxx=" + dw_spxx_data + "&dw_zzxx=" + dw_zzxx_data + "&ywbh=" + ywbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            ywbh = webReq.ResponseText();
            dw_master.SetItem(1, "ywbh", ywbh);

            var hth = dw_master.GetItemString(1, "hth")
            if (hth == "" || hth == null) {
                dw_master.SetItem(1, "hth", ywbh)
            };

            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "ywbh", ywbh);
                dw_jzxxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_spxx.RowCount(); row++) {
                dw_spxx.SetItem(row, "ywbh", ywbh);
                dw_spxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_zzxx.RowCount(); row++) {
                dw_zzxx.SetItem(row, "ywbh", ywbh);
                dw_zzxx.SetItem(row, "cxh", row);
            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_spxx.ResetUpdate();
            dw_zzxx.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("ywbh.Tabsequence=0");

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
        if (lastdw.GetName() == "dw_jzxxx") {
            var khbm = dw_master.GetItemString(1, "khbm");
            var khmc = dw_master.GetItemString(1, "khmc");
            var clfs = dw_master.GetItemString(1, "clfs");
            var lxr = dw_master.GetItemString(1, "lxr");
            var lxdh = dw_master.GetItemString(1, "lxdh");
            var row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
            dw_jzxxx.ScrollToRow(row);
            dw_jzxxx.SetItem(row, "ysfs", ysfs);
            dw_jzxxx.SetItem(row, "sjshrbm", khbm);
            dw_jzxxx.SetItem(row, "sjshrmc", khmc);
            dw_jzxxx.SetItem(row, "clfs", clfs);
            dw_jzxxx.SetItem(row, "lxr", lxr);
            dw_jzxxx.SetItem(row, "lxdh", lxdh);
            
            dw_jzxxx.SetFocus();
        }

        if (lastdw.GetName() == "dw_spxx") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            row = dw_spxx.InsertRow(dw_spxx.GetRow());
            var dwo = dw_spxx.GetDataObject();
            iw_Commodity_Select.SetRow(row);
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(dw_spxx);
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);


        }

        if (lastdw.GetName() == "dw_zzxx") {            
            var row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
            dw_jzxxx.ScrollToRow(row); 
            dw_jzxxx.SetFocus();
        }

    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {

        if (lastdw.GetName() == "dw_spxx") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var dwo = dw_spxx.GetDataObject();
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(dw_spxx);
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);


        }

        if (lastdw.GetName() == "dw_jzxxx") {
            var ysfs = dw_master.GetItemString(1, "ysfs")
            var khbm = dw_master.GetItemString(1, "khbm");
            var khmc = dw_master.GetItemString(1, "khmc");
            var clfs = dw_master.GetItemString(1, "clfs");
            var lxr = dw_master.GetItemString(1, "lxr");
            var lxdh = dw_master.GetItemString(1, "lxdh");         

            var row = dw_jzxxx.InsertRow(0);
            dw_jzxxx.ScrollToRow(row);
            dw_jzxxx.SetItem(row, "ysfs", ysfs);
            dw_jzxxx.SetItem(row, "sjshrbm", khbm);
            dw_jzxxx.SetItem(row, "sjshrmc", khmc);
            dw_jzxxx.SetItem(row, "clfs", clfs);           
            dw_jzxxx.SetItem(row, "lxr", lxr);
            dw_jzxxx.SetItem(row, "lxdh", lxdh);
            if (ysfs == "海运") {
                dw_jzxxx.SetItem(row, "xx", "40尺高柜");
                dw_jzxxx.SetItem(row, "xl", "冷藏集装箱");
            };
            dw_jzxxx.SetFocus();
        }

        if (lastdw.GetName() == "dw_zzxx") {
            
            var row = dw_zzxx.InsertRow(0);
            dw_zzxx.ScrollToRow(row); 
            dw_zzxx.SetFocus();
        }
    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_master.GetItemString(1, "ywbh")
        if (ywbh = null && operation == "copy") {
            requestor.MessageBox("提示", "复制状态下，请先保存后再删除明细数据！", ICON.Information);
            lastdw.SetFocus();
            return;

        }

        if (lastdw.GetName() == "dw_jzxxx") {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);            

            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }
            lastdw.DeleteRow(row);
        }

        if (lastdw.GetName() == "dw_spxx") {

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

        if (lastdw.GetName() == "dw_zzxx") {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            lastdw.DeleteRow(row); 
        }


    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        if (lastdw.GetName() == 'dw_jzxxx') {
            var row = dw_jzxxx.GetRow();
            if (row <= 0)
                return;
            dw_jzxxx.RowsCopy(row, row, DWBUFFER.Primary, dw_jzxxx, row + 1, DWBUFFER.Primary)
            dw_jzxxx.ScrollToRow(row + 1);
        }
        if (lastdw.GetName() == 'dw_spxx') {
            var row = dw_spxx.GetRow();
            if (row <= 0)
                return;
            dw_spxx.RowsCopy(row, row, DWBUFFER.Primary, dw_spxx, row + 1, DWBUFFER.Primary)
            dw_spxx.ScrollToRow(row + 1);
            self.SetZje();
        }

        if (lastdw.GetName() == 'dw_zzxx') {
            var row = dw_zzxx.GetRow();
            if (row <= 0)
                return;
            dw_zzxx.RowsCopy(row, row, DWBUFFER.Primary, dw_zzxx, row + 1, DWBUFFER.Primary)
            dw_zzxx.ScrollToRow(row + 1); 
        }


    }
    //#endregion


    //#region 合同打印 
    this.PrintContract = function () {

        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_contract.SetDataObject("dw_hddz_print_contract");
        dw_print_contract.Retrieve(ywbh);
        dw_print_contract.PrintPreview();
    }
    //#endregion



    //#region 发票打印 
    this.PrintInvoice = function () {

        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_invoice.SetDataObject("dw_hddz_print_invoice");
        dw_print_invoice.Retrieve(ywbh);
        dw_print_invoice.PrintPreview();
    }
    //#endregion

    //#region 箱单打印 
    this.PrintPackingList = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_packinglist.SetDataObject("dw_hddz_print_packinglist");
        dw_print_packinglist.Retrieve(ywbh);
        dw_print_packinglist.PrintPreview();
    }
    //#endregion


    
    //#region 直提货情况说明打印 
    this.PrintZthqksm = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_zthqksm.SetDataObject("dw_hddz_print_zthqksmlist");
        dw_print_zthqksm.Retrieve(ywbh);
        dw_print_zthqksm.PrintPreview();
    }
    //#endregion



    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "hgbm") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ywy = requestor.GetParm("userid"); ;
            var ShareMode = requestor.GetParm("ShareMode"); ;
            var Dlwtf = requestor.GetParm("Dlwtf"); ;
            iw_Commodity_Select.SetDetailDW(dw_cmd);
            iw_Commodity_Select.SetDwo("dw_mxd_edit_cmd");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
            dw_cmd.SetFocus();
        }
    }
    //#endregion

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
//        dw_jzxxx.Reset();
//        dw_jzxxx.InsertRow(0);

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
            var address = "";
            var tel = "";
            var fax = "";
            var sh = "";
            var hgdm = "";
            var khyh = "";
            var yhzh = "";
        }
        else {
            if (arrayobj.length == 0) {
                var cname = "";
                var ename = "";
                var eaddr = "";
                var tt_no = "";
                var address = "";
                var tel = "";
                var fax = "";
                var sh = "";
                var hgdm = "";
                var khyh = "";
                var yhzh = "";

            }
            else {
                cname = arrayobj[0];
                ename = arrayobj[1];
                eaddr = arrayobj[2];
                tt_no = arrayobj[3];
                address = arrayobj[4];
                tel = arrayobj[5];
                fax = arrayobj[6];
                sh = arrayobj[7];
                hgdm = arrayobj[8];
                khyh = arrayobj[9];
                yhzh = arrayobj[10];
                //                var yhzh = "";
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

        //        dw_master.SetItem(1, "tt_no", tt_no)
        //        dw_master.SetItem(1, 'address', address)
        //        dw_master.SetItem(1, 'tel', tel)
        //        dw_master.SetItem(1, 'fax', fax)
        //        dw_master.SetItem(1, 'sh', sh)
        //        dw_master.SetItem(1, 'hgdm', hgdm)
        //        dw_master.SetItem(1, 'khyh', khyh)
        //        dw_master.SetItem(1, 'yhzh', yhzh)
        dw_master.SetItem(1, 'zbr', userid);
        dw_master.SetItem(1, 'jcgzry', userid);
        //        dw_master.SetItem(1, 'ywy', ywy);
        //        dw_master.SetItem(1, 'bm', bm);
        //        dw_master.SetItem(1, 'zdrq', date.getVarDate());
        //        dw_master.SetItem(1, 'wbbb', "USD");
        dw_master.SetItem(1, 'dlwtf', Dlwtf);
        //        dw_master.SetItem(1, 'dlxyh', Dlxyh);
        self.SetEditMode("new");

        var zmyhl = QsWebSoft.PubMethod.Wb2Usd("USD").value;
        dw_master.SetItem(1, "wbbb", "USD")
        dw_master.SetItem(1, "zmyhl", zmyhl)
       
     

    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "ywbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate());
        var date_null = new Date("1900/01/01");
        dw_master.SetItem(1, "yjkgsj", date_null.getVarDate());
        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "hth", "");
        dw_master.SetItem(1, "beizhu", "");

        dw_master.SetItem(1, "beizhu_xgrq", Date());
        dw_master.SetItem(1, "sjkgsj", Date());
        dw_master.SetItem(1, "invoiceno", "");
        dw_master.SetItem(1, "invoice_date", Date());
        dw_master.SetItem(1, "hz_jzxh", "");
        dw_master.SetItem(1, "hz_spmc", "");
        dw_master.SetItem(1, "clfs", "");
        dw_master.SetItem(1, "mtdm", "");


        self.SetZje();
        self.SetEditMode("copy");      
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        //        if (dwoName == "yjkgsj") {
        //            if (iw_RqTime_Select == null)
        //                iw_RqTime_Select = new W_RqTime_Select();
        //                khlx = "hdgs";
        //                var ywy = requestor.GetParm("userid");
        //                var ShareMode = requestor.GetParm("ShareMode");
        //                var Dlwtf = requestor.GetParm("Dlwtf");
        //                iw_RqTime_Select.SetDataWindow(dw_master);
        //                iw_RqTime_Select.SetData("hddz_hdgs");
        //                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_RqTime_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_RqTime_Select);
        //               dw_master.SetFocus();


        //        }


        if (dwoName == "hdgsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "hdgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hddz_hdgs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }

        if (dwoName == "bggsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "bggs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_bggs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "bjgsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "bjgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_bjgs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "bghg_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "hg";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_bghg");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "jyj_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "jyj";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_jyj");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }


        if (dwoName == "khbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            var Dlxyh = dw_master.GetItemString(1, "dlxyh");

            if (Dlxyh != null && Dlxyh != "") {
                requestor.MessageBox("提示", "代理协议号已经选择，不能再更改客户!", ICON.StopSign)
                return;
            }
            if (zydl == "代理") {
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_kh_dl");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (zydl == "自营") {
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_kh_zy");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }


        }

        if (dwoName == "shdwbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            iw_Wldw_Select.SetDataWindow(dw_master);
            if (zydl == "代理") {
                iw_Wldw_Select.SetData("hddz_shdw_dl");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (zydl == "自营") {
                iw_Wldw_Select.SetData("hddz_shdw_zy");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        }


        if (dwoName == "jydwbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            if (zydl == "代理") {
                khlx = "wmgs";
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_jydw");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            } else if (zydl == "自营") {
                khlx = "gncgs";
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_jydw");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus()
            }
        }

        if (dwoName == "gwgysbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gwgys";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_gwgys");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "cdgs_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cdorhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_cdgs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "cyr_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cgsorhkgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_cyr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "xhgq_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "mt";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_xhgq");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "qyg_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("qyg");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zzgk_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("zzgk");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }




        if (dwoName == "dlxyh_t") {

            if (iw_Hddz_Dlxy_Select == null)
                iw_Hddz_Dlxy_Select = new W_Hddz_Dlxy_Select();
            iw_Hddz_Dlxy_Select.SetDataWindow(dw_master);
            var zydl = dw_master.GetItemString(1, "zydl");

            if (zydl == "代理") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_dl");
            }
            else if (zydl == "自营") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_zy");
            }
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select", iw_Hddz_Dlxy_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "hygsmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cdorhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hddz_hygs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }


        if (dwoName == "ycd_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("ycd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "yfcdr_t") {
            var khorhd = dw_master.GetItemString(1, "khorhd")
            if (khorhd == "客户") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                var khlx = "gncgs";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");

                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_yf_yfcdr");
                iw_Wldw_Select.SetRow(1);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (khorhd == "货代") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "hdgs";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");

                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_yf_yfcdr");
                iw_Wldw_Select.SetRow(1);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        }

        if (dwoName == "jsdwbm_t") {

            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            var khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_jsdw");
            iw_Wldw_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "khorhd") {

            if (data == "客户") {
                var khbm = dw_master.GetItemString(1, "khbm")
                var khmc = dw_master.GetItemString(1, "khmc")
                var khjc = dw_master.GetItemString(1, "khjc")
                var khpym = dw_master.GetItemString(1, "khpym")

                dw_master.SetItem(1, "yfcdrbm", khbm)
                dw_master.SetItem(1, "yfcdr", khmc)
                dw_master.SetItem(1, "yfcdrjc", khjc)
                dw_master.SetItem(1, "yfcdrpym", khpym)

                dw_master.SetItem(1, "jsdwbm", null)
                dw_master.SetItem(1, "jsdwmc", null)
                dw_master.SetItem(1, "jsdwjc", null)
                dw_master.SetItem(1, "jsdwpym", null)
            }
            else if (data == "货代") {
                var hdgsbm = dw_master.GetItemString(1, "hdgsbm")
                var hdgsmc = dw_master.GetItemString(1, "hdgsmc")
                var hdgsjc = dw_master.GetItemString(1, "hdgsjc")
                var hdgspym = dw_master.GetItemString(1, "hdgspym")

                dw_master.SetItem(1, "yfcdrbm", hdgsbm)
                dw_master.SetItem(1, "yfcdr", hdgsmc)
                dw_master.SetItem(1, "yfcdrjc", hdgsjc)
                dw_master.SetItem(1, "yfcdrpym", hdgspym)

                var khbm = dw_master.GetItemString(1, "khbm")
                var khmc = dw_master.GetItemString(1, "khmc")
                var khjc = dw_master.GetItemString(1, "khjc")
                var khpym = dw_master.GetItemString(1, "khpym")

                dw_master.SetItem(1, "jsdwbm", khbm)
                dw_master.SetItem(1, "jsdwmc", khmc)
                dw_master.SetItem(1, "jsdwjc", khjc)
                dw_master.SetItem(1, "jsdwpym", khpym)

            };

        }

      

        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            if (zusdhl == null || zusdhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
            }

            dw_master.SetItem(1, "zmyhl", zusdhl);
            self.SetZje();
        }

        if (dwoName == "zydl") {
            if (data == "代理") {
                dw_master.SetItem(1, "jydwbm", "admin0003");
                dw_master.SetItem(1, 'jydwmc', "上海欧恒进出口有限公司");
                dw_master.SetItem(1, 'jydwjc', "上海欧恒");
                dw_master.SetItem(1, 'jydwpym', "shohjckyxgs");
            }
            if (data == "自营") {
                var shdwbm = dw_master.GetItemString(1, "shdwbm");
                var shdwmc = dw_master.GetItemString(1, "shdwmc");
                var shdwjc = dw_master.GetItemString(1, "shdwjc");
                var shdwpym = dw_master.GetItemString(1, "shdwpym");
                dw_master.SetItem(1, "jydwbm", shdwbm);
                dw_master.SetItem(1, 'jydwmc', shdwmc);
                dw_master.SetItem(1, 'jydwjc', shdwjc);
                dw_master.SetItem(1, 'jydwpym', shdwpym);
            }

        }

        if (dwoName == "ysfs") {
            //更新行号
            for (row = dw_jzxxx.RowCount(); row > 0; row--) {
                dw_jzxxx.SetItem(row, "ysfs", data);
                if (data == "海运") {
                    dw_jzxxx.SetItem(row, "tpxx", "");
                    dw_jzxxx.SetItem(row, "zhlx", "");
                }
                if (data == "空运") {
                    dw_jzxxx.SetItem(row, "jzxh", "");
                    dw_jzxxx.SetItem(row, "xx", "");
                    dw_jzxxx.SetItem(row, "xl", "");
                }
            }


            var bghg = dw_master.GetItemString(1, "bghg")
            if (bghg == null || bghg == "") {
                if (data == "海运") {
                    dw_master.SetItem(1, "bghgbm", "admin0612")
                    dw_master.SetItem(1, "bghg", "龙吴海关")
                    dw_master.SetItem(1, "bghgjc", "龙吴海关")
                    dw_master.SetItem(1, "bghgpym", "lwhg")
                }
                if (data == "空运") {
                    dw_master.SetItem(1, "bghgbm", "admin0618")
                    dw_master.SetItem(1, "bghg", "浦东机场海关")
                    dw_master.SetItem(1, "bghgjc", "浦东机场海关")
                    dw_master.SetItem(1, "bghgpym", "pdjchg")
                }
            }



            var jyjmc = dw_master.GetItemString(1, "jyjmc")
            if (jyjmc == null || jyjmc == "") {
                dw_master.SetItem(1, "jyjbm", "admin0611")
                dw_master.SetItem(1, "jyjmc", "浦东检疫局")
                dw_master.SetItem(1, "jyjjc", "浦东检疫局")
                dw_master.SetItem(1, "jyjpym", "pdjyj")

            }




        }

        //如果是否有运费打勾，价格方式变为FOB
        if (dwoName == "sfyyf") {
            if (data == "Y") {
                dw_master.SetItem(1, "jgfs", "FOB")
            }
        }
        //货代提单默认需要二次换单
        if (dwoName == "sfshytd") {
            if (data == "Y")
            { dw_master.SetItem(row, "sfxyechd", "Y") }
            else { dw_master.SetItem(row, "sfxyechd", "N") };
        };

        //货代提单
        if (dwoName == "sfshytd") {
            if (data == "N") {
                dw_master.SetItem(row, "sfxyechd", "N");
                dw_master.SetItem(row, "ftdh", "");
                dw_master.SetItem(row, "hygsbm", "");
                dw_master.SetItem(row, "hygsmc", "");
                dw_master.SetItem(row, "hygsjc", "");
                dw_master.SetItem(row, "hygspym", "");
            }
        }

        //是否中转
        if (dwoName == "sfzy") {
            if (data == "N") {
                dw_master.SetItem(row, "zz_cm", "");
                dw_master.SetItem(row, "zz_hcorhbh", "");
                dw_master.SetItem(row, "zzgk", "");
            }
        }

    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
        if (dwoName == "ckka") {
            dw_master.GetChild(dwoName, dwc);
            if (data != "") {
                dwc.Retrieve("%" + data + "%");
            }
            else {
                dwc.Retrieve("%");
            }
        }
        
    }
    //#endregion



    //#region dw_spxx ItemChanged
    this.dw_spxx_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jlsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spxx.GetItemNumber(row, "zj")
            var ldc_djjg = ldc_zj / data;
            var ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
            dw_spxx.SetItem(row, "djjg", ldc_djjg);
            self.SetZje();
            self.CacluMjztj(row);
        }

        else if (dwoName == "zj") {
            if (data < 0) {
                alert("总价不能小于0,请重新输入!");
                return 1;
            }
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (data / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }

            ldc_zmz = dw_spxx.GetItemNumber(row, "zmz")
            if (ldc_zmz != null && ldc_zmz != 0) {
                var ldc_dj = (data / ldc_zmz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
        }

        else if (dwoName == "zmz" || dwoName == "zjz") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spxx.GetItemNumber(row, "zj")
            if (ldc_zj != null || ldc_zj != 0) {
                ldc_dj = (ldc_zj / data);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
            self.CacluMjztj(row);

        }


    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "sjshrmc") {
          
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
                       
            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
           
           
        }

    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_zzxx_DoubleClicked = function (xPos, yPos, Row, dwoName) { 
     if (dwoName == "zzgk") {
                 if (iw_Eport_Select == null)
                    iw_Eport_Select = new W_Eport_Select();
                iw_Eport_Select.SetDataWindow(dw_zzxx);
                iw_Eport_Select.SetData("hddz_zzgk");
                iw_Eport_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
                dw_zzxx.SetFocus();
            }

    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "sjshr_qk") {
            if (requestor.MessageBox("提示", "是否清除实际收货人记录?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                dw_jzxxx.SetItem(Row, "sjshrbm", "")
                dw_jzxxx.SetItem(Row, "sjshrmc", "")
            }

        }

        dw_jzxxx.SetFocus();

    }
    //#endregion

    //#region dw_jzxxx EditChanged
    this.dw_jzxxx_EditChanged = function (row, dwoName, data) {

                dw_master.AcceptText();
                if (dwoName == "clfs"  ) {
                    var clfs = dw_master.GetItemString(1, "clfs")
                    if (clfs == null || clfs =="" ){
                        dw_master.SetItem(1,"clfs",data)
                    }
                }
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

        if (lastdw.GetName() == 'dw_spxx') {
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
            dw_spxx.SetRedraw(false);
            dw_spxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary);
            dw_spxx.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_spxx.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_spxx.ScrollToRow(ll_row_count);
            }

            if (dw_spxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_spxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
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

        if (lastdw.GetName() == 'dw_spxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from - 1;
            }
            else {
                ll_row_to = 1;
            }

            dw_spxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1) {
                dw_spxx.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_spxx.ScrollToRow(1);
            }

            if (dw_spxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_spxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
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

    //#region SetZje
    this.SetZje = function () {
        dw_spxx.AcceptText();
        dw_master.AcceptText();
        if (dw_spxx.RowCount() > 0) {
            ldc_zj_sum = dw_spxx.GetItemNumber(1, "zj_sum");
            ldc_zj_sum = parseFloat(ldc_zj_sum.toFixed(2));
        }
        else {
            ldc_zj_sum = 0;
        };
        dw_master.SetItem(1, "zje", ldc_zj_sum);
        var ldc_zmyhl = dw_master.GetItemNumber(1,"zmyhl");
        var ldc_zmyje = ldc_zj_sum * ldc_zmyhl;
        ldc_zmyje = parseFloat(ldc_zmyje.toFixed(2));
        dw_master.SetItem(1, 'zmyje', ldc_zmyje);

    }
    //#endregion

    //#region CacluMjztj
    this.CacluMjztj = function (row) {
        dw_spxx.AcceptText();
        var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
        //计算毛重、净重
        var ldc_zmz = dw_spxx.GetItemNumber(row, "zmz");
        var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz");

        if (ldc_jlsl > 0 && ldc_zmz > 0) {
            var ldc_djmz = ldc_zmz / ldc_jlsl;
            ldc_djmz = parseFloat(ldc_djmz.toFixed(4));
            dw_spxx.SetItem(row, "djmz", ldc_djmz);
        }
        if (ldc_jlsl > 0 && ldc_zjz > 0) {
            var ldc_djjz = ldc_zjz / ldc_jlsl;
            ldc_djjz = parseFloat(ldc_djjz.toFixed(4));
            dw_spxx.SetItem(row, "djjz", ldc_djjz);
        }
    }
    //#endregion

    //#region tabselect
    var lastdw = new DataWindow();
    this.Tab_Select = function () {
        if (tab_1.GetSelectedTab() == 1) {
            var bEditFlag = false;
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_jzxxx.SetFocus()
        }
        if (tab_1.GetSelectedTab() == 2) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_spxx.SetFocus()
        }

        if (tab_1.GetSelectedTab() == 3) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_zzxx.SetFocus()
//            dw_zzxx.dw_zzxx_GetFocus()
        }
      
    };
    //#endregion


    //数据导出
    this.Sjdc = function () {
        var fsfxtid = dw_master.GetItemString(1, "ywbh");
        var ywlx = "0987654321"
        var sjylx = "10"
        var date = new Date;
        var nf = date.getYear().toString();
        var yf = date.getMonth() + 1;
        if (yf < 10) {
            yf = "0" + yf;
        };
        var rq = date.getDate();
        if (rq < 10) {
            rq = "0" + rq;
        };
        var hh = date.getHours();
        if (hh < 10) {
            hh = "0" + hh;
        };
        var mm = date.getMinutes();
        if (mm < 10) {
            mm = "0" + mm;
        };
        var ss = date.getSeconds();
        if (ss < 10) {
            ss = "0" + ss;
        };
        var sj = nf.toString() + yf.toString() + rq.toString() + hh.toString() + mm.toString() + ss.toString();

        var fileFullPath = "C:\\XML\\EMVS_EP_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC";

        var content = '<?xml version="1.0" encoding="UTF-8"?>';
        content += '\n<Message_Data>';
        content += '\n  <project_id/>';
        content += '\n  <project_ver/>';
        content += '\n  <Message_Head>';
        var ywbh = dw_master.GetItemString(1, "ywbh");
        content += '\n    <Id>' + ywbh + '</Id>';
        content += '\n    <MsgType>EMVS_DHL</MsgType>';
        content += '\n    <FileName>' + fileFullPath + '</FileName>';
        content += '\n    <Version>1.0</Version>';
        content += '\n    <Description>EMVS报文</Description>';
        content += '\n    <CreateTime>' + sj + '</CreateTime>';
        content += '\n    <From></From>';
        content += '\n    <To></To>';
        content += '\n    <CommType></CommType>';
        content += '\n    <MsgStatus></MsgStatus>';
        content += '\n  </Message_Head>';
        content += '\n  <Message_Body>';
        content += '\n    <PRE_ENTRY_INFO_ROOT COUNT="1">';
        content += '\n      <PRE_ENTRY_INFO_ITEM>';
        content += '\n        <SEQ_NO></SEQ_NO>';
        content += '\n        <BILL_SEQ_NO></BILL_SEQ_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';
        content += '\n        <COP_NO>' + ywbh + '</COP_NO>';
        content += '\n        <SEND_TRADE_CODE>1234567890</SEND_TRADE_CODE>';
        content += '\n        <RECEIVE_TRADE_CODE>0987654321</RECEIVE_TRADE_CODE>';
        content += '\n        <USER_INFO>EP1234</USER_INFO>';
        content += '\n        <BIZ_TYPE>1</BIZ_TYPE>';
        content += '\n        <DATA_SOURCE_TYPE>0</DATA_SOURCE_TYPE>';
        content += '\n        <DEC_TYPE>1</DEC_TYPE>';
        content += '\n        <STATUS>4</STATUS>';
        content += '\n      </PRE_ENTRY_INFO_ITEM>';
        content += '\n    </PRE_ENTRY_INFO_ROOT>';
        content += '\n    <EP_DEC_ROOT>';
        content += '\n      <EP_DEC_HEAD>';
        content += '\n        <PRE_ENTRY_ID></PRE_ENTRY_ID>';
        content += '\n        <TRADE_CO>1234567890</TRADE_CO>';
        content += '\n        <TRADE_NAME>上海亿通国际股份有限公司</TRADE_NAME>';
        content += '\n        <DISTRICT_CODE></DISTRICT_CODE>';
        content += '\n        <OWNER_CODE></OWNER_CODE>';
        content += '\n        <OWNER_NAME></OWNER_NAME>';
        content += '\n        <AGENT_CODE>3104910033</AGENT_CODE>';
        content += '\n        <AGENT_NAME>上海亿通国际股份有限公司</AGENT_NAME>';
        content += '\n        <TRAF_MODE>5</TRAF_MODE>';
        content += '\n        <I_E_PORT></I_E_PORT>';
        content += '\n        <DISTINATE_PORT>3104</DISTINATE_PORT>';
        content += '\n        <TRAF_NAME>航空运输</TRAF_NAME>';
        content += '\n        <CONTR_NO>13215</CONTR_NO>';
        content += '\n        <IN_RATIO></IN_RATIO>';
        content += '\n        <BILL_NO>5188749053</BILL_NO>';
        content += '\n        <TRADE_COUNTRY>132</TRADE_COUNTRY>';
        content += '\n        <TRADE_MODE>3039</TRADE_MODE>';
        content += '\n        <CUT_MODE>101</CUT_MODE>';
        content += '\n        <PAY_MODE></PAY_MODE>';
        content += '\n        <TRANS_MODE></TRANS_MODE>';
        content += '\n        <PAY_WAY></PAY_WAY>';
        content += '\n        <FEE_MARK></FEE_MARK>';
        content += '\n        <FEE_CURR>502</FEE_CURR>';
        content += '\n        <FEE_RATE>0.0</FEE_RATE>';
        content += '\n        <OTHER_MARK></OTHER_MARK>';
        content += '\n        <OTHER_CURR>142</OTHER_CURR>';
        content += '\n        <OTHER_RATE>0.0</OTHER_RATE>';
        content += '\n        <INSUR_MARK></INSUR_MARK>';
        content += '\n        <INSUR_CURR>502</INSUR_CURR>';
        content += '\n        <INSUR_RATE>0.24</INSUR_RATE>';
        content += '\n        <PACK_NO>1</PACK_NO>';
        content += '\n        <GROSS_WT>2.0</GROSS_WT>';
        content += '\n        <NET_WT>2.0</NET_WT>';
        content += '\n        <LICENSE_NO></LICENSE_NO>';
        content += '\n        <APPR_NO></APPR_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';
        content += '\n        <I_E_DATE>1900-01-01</I_E_DATE>';
        content += '\n        <WRAP_TYPE>4M</WRAP_TYPE>';
        content += '\n        <NOTE_S></NOTE_S>';
        content += '\n        <D_DATE>2011-07-28</D_DATE>';
        content += '\n        <EX_SOURCE></EX_SOURCE>';
        content += '\n        <VOYAGE_NO>LD 0326</VOYAGE_NO>';
        content += '\n        <IE_FLAG>1</IE_FLAG>';
        content += '\n        <PRDTID></PRDTID>';
        content += '\n        <STORENO></STORENO>';
        content += '\n        <RAMANUALNO></RAMANUALNO>';
        content += '\n        <RADECLNO></RADECLNO>';
        content += '\n        <STATUS>4</STATUS>';
        content += '\n        <MEMO></MEMO>';
        content += '\n      </EP_DEC_HEAD>';
        content += '\n      <EP_DEC_LIST COUNT="1">';
        content += '\n        <EP_DEC_LIST_ITEM>';
        content += '\n          <G_NO>1</G_NO>';
        content += '\n          <CONTR_ITEM/>';
        content += '\n          <CODE_T>85371019</CODE_T>';
        content += '\n          <CODE_S>00</CODE_S>';
        content += '\n          <G_NAME>控制器（保税）</G_NAME>';
        content += '\n          <G_MODEL>0</G_MODEL>';
        content += '\n          <ORIGIN_COUNTRY>132</ORIGIN_COUNTRY>';
        content += '\n          <G_QTY>1.0</G_QTY>';
        content += '\n          <G_UNIT>007</G_UNIT>';
        content += '\n          <QTY_1>1.0</QTY_1>';
        content += '\n          <UNIT_1>007</UNIT_1>';
        content += '\n          <QTY_2>1.0</QTY_2>';
        content += '\n          <UNIT_2>035</UNIT_2>';
        content += '\n          <TRADE_CURR>502</TRADE_CURR>';
        content += '\n          <DECL_PRICE>77.74</DECL_PRICE>';
        content += '\n          <TRADE_TOTAL>77.73</TRADE_TOTAL>';
        content += '\n          <DUTY_MODE>1</DUTY_MODE>';
        content += '\n          <USE_TO>04</USE_TO>';
        content += '\n          <PRDT_NO></PRDT_NO>';
        content += '\n          <GOODS_ID></GOODS_ID>';
        content += '\n          <GROSS_WT>0.0</GROSS_WT>';
        content += '\n          <NET_WT>0.0</NET_WT>';
        content += '\n          <WORK_USD>0.0</WORK_USD>';
        content += '\n        </EP_DEC_LIST_ITEM>';
        content += '\n      </EP_DEC_LIST>';
        content += '\n      <EP_DEC_CONTAINER_LIST COUNT="1">';
        content += '\n      	<EP_DEC_CONTAINER_ITEM>';
        content += '\n      		<CONTAINER_NO>01000001</CONTAINER_NO>';
        content += '\n          <CONTAINER_MODEL>1</CONTAINER_MODEL>';
        content += '\n          <CONTAINER_WT>256.00001</CONTAINER_WT>';
        content += '\n      	</EP_DEC_CONTAINER_ITEM>';
        content += '\n      </EP_DEC_CONTAINER_LIST>';
        content += '\n      <EP_DEC_CERT_LIST COUNT="1">';
        content += '\n      	<EP_DEC_CERT_ITEM>';
        content += '\n      		<DOCU_CODE>2</DOCU_CODE>';
        content += '\n          <CERT_CODE>010101110011</CERT_CODE>';
        content += '\n      	</EP_DEC_CERT_ITEM>';
        content += '\n      </EP_DEC_CERT_LIST>';
        content += '\n       <EP_DEC_EDOCRELATION_LIST COUNT="1">';
        content += '\n      	<EP_DEC_EDOCRELATION_ITEM>';
        content += '\n      		<FILE_TYPE>1</FILE_TYPE>';
        content += '\n          <FILE_NAME></FILE_NAME >';
        content += '\n          <EDOCOWNERCODE>1234567890</EDOCOWNERCODE>';
        content += '\n          <EDOCOWNERNAME>上海亿通国际股份有限公司</EDOCOWNERNAME>';
        content += '\n          <OPNOTE>备注</OPNOTE>';
        content += '\n      	</EP_DEC_EDOCRELATION_ITEM>';
        content += '\n      </EP_DEC_EDOCRELATION_LIST>';
        content += '\n      <EP_DEC_RESULT_LIST COUNT="1">';
        content += '\n        <EP_DEC_RESULT_ITEM>';
        content += '\n          <NOTICE_DATE></NOTICE_DATE>';
        content += '\n          <CHANNEL></CHANNEL>';
        content += '\n          <NOTE></NOTE>';
        content += '\n          <I_E_DATE></I_E_DATE>';
        content += '\n          <D_DATE></D_DATE>';
        content += '\n        </EP_DEC_RESULT_ITEM>';
        content += '\n      </EP_DEC_RESULT_LIST>';
        content += '\n    </EP_DEC_ROOT> ';
        content += '\n  </Message_Body>';
        content += '\n</Message_Data>';

        if (content == null) {
            requestor.MessageBox("提示", "数据不全，无法生成文件！")
        } else {
            QsWebSoft.PubMethod.WriteYtjkXml(content, "C:\\XML\\", fileFullPath);
            requestor.MessageBox("提示", "文件<" + fileFullPath +">已经生成完成！")
        }

    }


    //#region 恢复默认列
    this.Recover = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit");
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_spxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit_spxx");
        self.Retrieve();
    }
    //#endregion



    //#region 恢复默认列
    this.Recover_zzxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit", "dw_hddz_edit_zzxx");
        self.Retrieve();
    }
    //#endregion

    //#region 获得字段焦点
    this.dw_master_RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_spxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_zzxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_jzxxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_jzxxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_jzxxx.GetItemString(dw_jzxxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_jzxxx.GetItemDate(dw_jzxxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_jzxxx.GetItemNumber(dw_jzxxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion




    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row =  dw_master.GetRow();
        if (row <= 0)
            return;
        colType = dw_master.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_master.GetItemString(dw_master.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_master.GetItemDate(dw_master.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_master.GetItemNumber(dw_master.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_spxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_spxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_spxx.GetItemString(dw_spxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_spxx.GetItemDate(dw_spxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_spxx.GetItemNumber(dw_spxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_zzxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_zzxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_zzxx.GetItemString(dw_zzxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_zzxx.GetItemDate(dw_zzxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_zzxx.GetItemNumber(dw_zzxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    

}





