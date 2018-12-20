///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzEdit_Wl() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_spxx= new DataWindow( requestor );
	 var dw_spdhsr= new DataWindow( requestor );
	 var sle_ts= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ContextMenuStrip3= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );
	 var ds_spxx= new DataStore( requestor );
	 var ds_clqy= new DataStore( requestor );
	 var ds_jdr= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_spxx == null ) dw_spxx= new DataWindow( requestor );
		 dw_spxx.Attach( win.Control( "dw_spxx") ); 
		 if(dw_spdhsr == null ) dw_spdhsr= new DataWindow( requestor );
		 dw_spdhsr.Attach( win.Control( "dw_spdhsr") ); 
		 if(sle_ts == null ) sle_ts= new SingleLineEdit( requestor );
		 sle_ts.Attach( win.Control( "sle_ts") ); 
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
		 if(ds_clqy == null ) ds_clqy= new DataStore( requestor );
		 ds_clqy.Attach( win.Control( "ds_clqy") ); 
		 if(ds_jdr == null ) ds_jdr= new DataStore( requestor );
		 ds_jdr.Attach( win.Control( "ds_jdr") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

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

		 if(typeof(self.dw_master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_master_ButtonClicked); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_master_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_RbuttonDown)=="function") 
			 win.AttachEvent("dw_master","RButtonDown",self.dw_master_RbuttonDown); 

		 if(typeof(self.dw_spxx_Clicked)=="function") 
			 win.AttachEvent("dw_spxx","Clicked",self.dw_spxx_Clicked); 

		 if(typeof(self.dw_spxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_spxx","DoubleClicked",self.dw_spxx_DoubleClicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_spxx","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_spxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_spxx","ItemChanged",self.dw_spxx_ItemChanged); 

		 if(typeof(self.RbuttonDown_spxx)=="function") 
			 win.AttachEvent("dw_spxx","RButtonDown",self.RbuttonDown_spxx); 

		 if(typeof(self.dw_spxx_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_spxx","RowFocusChanged",self.dw_spxx_RowFocusChanged); 

		 if(typeof(self.dw_spdhsr_ItemChanged)=="function") 
			 win.AttachEvent("dw_spdhsr","ItemChanged",self.dw_spdhsr_ItemChanged); 

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

		 if(typeof(self.Tbsxg)=="function") 
			 win.AttachEvent("btn_tbsxg","Clicked",self.Tbsxg); 

		 if(typeof(self.dw_cmd_RowNext)=="function") 
			 win.AttachEvent("btn_rownext","Clicked",self.dw_cmd_RowNext); 

		 if(typeof(self.dw_cmd_RowBack)=="function") 
			 win.AttachEvent("btn_rowback","Clicked",self.dw_cmd_RowBack); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

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

		 tab_1.Detach(); tab_1=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_master.Detach(); dw_master=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_spxx.Detach(); dw_spxx=null; 
		 dw_spdhsr.Detach(); dw_spdhsr=null; 
		 sle_ts.Detach(); sle_ts=null; 
		 tb_1.Detach(); tb_1=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ContextMenuStrip3.Detach(); ContextMenuStrip3=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_jzxxx.Detach(); ds_jzxxx=null; 
		 ds_spxx.Detach(); ds_spxx=null; 
		 ds_clqy.Detach(); ds_clqy=null; 
		 ds_jdr.Detach(); ds_jdr=null; 
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
    var il_sp_id = 0;
    var ib_zs = true;
    var ib_bzcl = true;
    var ib_zsbh = true;
    var ib_sjsfdj = true;
    var iw_Clqy_Select = null;
    var iw_Wldw_Lxr_Select = null;
    var iw_Wldw_Shdz_Select = null;
    var iw_Wldw_Dz_Select = null;
    var iw_Hddz_Dzsd = null;
    var iw_Hddz_Zqhc = null;
     
    var result = "";
    var zdmc = "";
    var zdmc_jzxxx = "N";
//    var zdmc_dzyq = "N";

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hddz_Wl.ashx");

    
    
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
            dw_spdhsr.Modify("DataWindow.Readonly=no"); 
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_spxx.Modify("DataWindow.Readonly=yes"); 
            dw_spdhsr.Modify("DataWindow.Readonly=yes"); 
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus(); 
        dw_spxx.ShareData(dw_spdhsr);

        var operation = requestor.GetParm("operation");
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                zdmc_jzxxx = "Y";
//                zdmc_dzyq = "Y";
                self.Copy();
                self.SetEditMode("copy");
                self.Save();
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
                var bggsbm = dw_master.GetItemString(1, "bggsbm");
                if (bggsbm == "" || bggsbm == null) {
                    self.AddOcr();
                }
            }


            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else {
            self.SetEditMode("show");
        };

        if (ds_jdr.RowCount() > 0) {
            var jdrbm = ds_jdr.GetItemString(1, "yw_khbm");
            var jdrjc = ds_jdr.GetItemString(1, "khjc");
            var jdrmc = ds_jdr.GetItemString(1, "khmc");
            var jdrpym = ds_jdr.GetItemString(1, "pym");
        }

        var dw_jdrmc = dw_master.GetItemString(1, "jdrmc");

        if (dw_jdrmc == "" || dw_jdrmc == null) {
            if (jdrmc == "" || jdrmc == null) {
                dw_master.SetItem(1, "jdrbm", "admin0003");
                dw_master.SetItem(1, "jdrjc", "上海欧恒");
                dw_master.SetItem(1, "jdrmc", "上海欧恒进出口有限公司");
                dw_master.SetItem(1, "jdrpym", "shohjckyxgs");
            } else {
                dw_master.SetItem(1, "jdrbm", jdrbm);
                dw_master.SetItem(1, "jdrjc", jdrjc);
                dw_master.SetItem(1, "jdrmc", jdrmc);
                dw_master.SetItem(1, "jdrpym", jdrpym);
            }
        }
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
        dw_spxx.AcceptText(); 
       
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_spxx.ModifiedCount() ) > 0) {
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


        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_spxx.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
        var khmc = dw_master.GetItemString(1, "khmc");
        if (khmc == null && khmc == "") {
            alert("请选择委托客户！");
            return;
        }

        if (dw_master.GetItemString(1, "jdrbm") == "" || dw_master.GetItemString(1, "jdrbm") == null) {
            requestor.MessageBox("提示", "请选择接单人!");
            return;
        }
        if (dw_jzxxx.GetItemString(1, "lxr") == "" || dw_jzxxx.GetItemString(1, "lxr") == null) {
            requestor.MessageBox("提示", "请选择收货人!");
            return;
        }

        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_master.SetItem(row, "ywbh", ywbh);


        //更新行号
        var hz_jzxh = ""
        var hz_sjshr = "";
        var hz_sjshrgs = 0;
        var clfs = dw_master.GetItemString(1, "clfs");
        var ysfs = dw_master.GetItemString(1, "ysfs");
        var ztdh = dw_master.GetItemString(1, "ztdh")


        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "cxh", row);
            dw_jzxxx.SetItem(row, "ywbh", ywbh);
            var jzxh = dw_jzxxx.GetItemString(row, "jzxh");
            if (jzxh != null && jzxh != '' && ztdh != null && ztdh != "") {
                var xtywbh = QsWebSoft.PubMethod.ZtdhJzxhCf(ywbh, ztdh, jzxh).value;
                if (xtywbh != '') {
                    requestor.MessageBox("提示", "集装箱号:" + jzxh + '提单号：' + ztdh + '在业务单据' + xtywbh + '已经存在，不能使用！')
                    return;
                }
            }
            if (row == dw_jzxxx.RowCount()) {
                hz_jzxh = dw_jzxxx.GetItemString(row, "jzxh");
                hz_sjshr = dw_jzxxx.GetItemString(row, "sjshrmc");
                hz_sjshrgs = hz_sjshrgs + 1;
                var jschfscwld_shrmc = dw_jzxxx.GetItemString(row, "jschfscwld_shrmc");
                if (hz_sjshr.indexOf(jschfscwld_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + jschfscwld_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld3_shrmc = dw_jzxxx.GetItemString(row, "fscwld3_shrmc");
                if (hz_sjshr.indexOf(fscwld3_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld3_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld4_shrmc = dw_jzxxx.GetItemString(row, "fscwld4_shrmc");
                if (hz_sjshr.indexOf(fscwld4_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld4_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };

            }
            else {
                hz_jzxh = hz_jzxh + ", " + dw_jzxxx.GetItemString(row, "jzxh")
                var sjshrmc = dw_jzxxx.GetItemString(row, "sjshrmc");
                if (hz_sjshr.indexOf(sjshrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + sjshrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var jschfscwld_shrmc = dw_jzxxx.GetItemString(row, "jschfscwld_shrmc");
                if (hz_sjshr.indexOf(jschfscwld_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + jschfscwld_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld3_shrmc = dw_jzxxx.GetItemString(row, "fscwld3_shrmc");
                if (hz_sjshr.indexOf(fscwld3_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld3_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld4_shrmc = dw_jzxxx.GetItemString(row, "fscwld4_shrmc");
                if (hz_sjshr.indexOf(fscwld4_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld4_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
            };

        }


        if (ysfs == "海运") {
            dw_master.SetItem(1, "jzxsl", dw_jzxxx.RowCount());
        } else {
            dw_master.SetItem(1, "jzxsl", 0);
        };
        dw_master.SetItem(1, "hz_jzxh", hz_jzxh)
        dw_master.SetItem(1, "hz_sjshr", hz_sjshr)
        dw_master.SetItem(1, "hz_sjshrgs", hz_sjshrgs)

        var hz_spmc = "";
        var hz_spywmc = ""
        var hz_hgbm = ""
        var hz_pz = ""
        var ycd = dw_master.GetItemString(1, "ycd");
        var clfs = dw_master.GetItemString(1, "clfs");
        var lclfspd = "N"
        var mzfp = "Y";
        var jzfp = "Y";
        for (row = dw_spxx.RowCount(); row > 0; row--) {
            dw_spxx.SetItem(row, "cxh", row);
            dw_spxx.SetItem(row, "ywbh", ywbh);
            if (row == dw_spxx.RowCount()) {
                hz_spmc = dw_spxx.GetItemString(row, "spmc");
                hz_spywmc = dw_spxx.GetItemString(row, "spmc_yw");
                hz_hgbm = dw_spxx.GetItemString(row, "hgbm");
                hz_pz = dw_spxx.GetItemString(row, "sppz");
            }
            else {
                var spmc = dw_spxx.GetItemString(row, "spmc");
                var spmc_yw = dw_spxx.GetItemString(row, "spmc_yw");
                if (hz_spmc.indexOf(spmc) < 0) {
                    hz_spmc = hz_spmc + "," + dw_spxx.GetItemString(row, "spmc")
                    hz_spywmc = hz_spywmc + "," + dw_spxx.GetItemString(row, "spmc_yw")
                }

                var hgbm = dw_spxx.GetItemString(row, "hgbm");
                if (hz_hgbm.indexOf(hgbm) < 0) {
                    hz_hgbm = hz_hgbm + "," + dw_spxx.GetItemString(row, "hgbm")
                }


                var pz = dw_spxx.GetItemString(row, "sppz");
                if (hz_pz.indexOf(pz) < 0) {
                    hz_pz = hz_pz + "," + dw_spxx.GetItemString(row, "sppz")
                }
            };
            var jldw = dw_spxx.GetItemString(row, "jldw")
            var sjjldw = QsWebSoft.PubMethod.ReadSjjldm(jldw).value;
            if (sjjldw == null) {
                sjjldw = ""
            }
            dw_spxx.SetItem(row, "sjjldw", sjjldw)


            //判断是否有二次代码信息 

            var gj = dw_master.GetItemString(1, "ycddm");
            var shdwbm = dw_master.GetItemString(1, "shdwbm");
            var zjsjc = dw_master.GetItemString(1, "zjsjc");
            var spbm = dw_spxx.GetItemString(row, "spbm");
            var dmbz = dw_master.GetItemString(1, "dmbz");
            var ycd = dw_master.GetItemString(1, "ycd");



            //判断毛总和净重是否和分摊的毛净重一致，不一致进行提醒
            var zmz = dw_spxx.GetItemNumber(row, "zmz");
            var zmz_jsl = dw_spxx.GetItemNumber(row, "zmz_jsl");
            if (parseFloat(zmz.toFixed(4)) != parseFloat(zmz_jsl.toFixed(4))) {
                mzfp = "N"
            };
            var zjz = dw_spxx.GetItemNumber(row, "zjz");
            var zjz_jsl = dw_spxx.GetItemNumber(row, "zjz_jsl");
            if (parseFloat(zjz.toFixed(4)) != parseFloat(zjz_jsl.toFixed(4))) {
                jzfp = "N"
            };
        };

        if (mzfp == "N" || jzfp == "N") {
            if (requestor.MessageBox("提示", "商品对应的毛净重不是按数量及权重分摊的，是否继续保存？", ICON.Question, BUTTON.YesNo, 2) == 2) {
                return;
            };
        };



        dw_master.SetItem(1, "hz_spmc", hz_spmc)
        dw_master.SetItem(1, "hz_spywmc", hz_spywmc)
        dw_master.SetItem(1, "hz_hgbm", hz_hgbm)
        dw_master.SetItem(1, "hz_pz", hz_pz)
        var ysgj = dw_master.GetItemString(1, "ysgj")
        if (ysgj == null || ysgj == "") {
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (ysfs == "海运" && dw_jzxxx.RowCount() > 0) {

                var xl_max = dw_jzxxx.GetItemString(1, "xl_max")
                if (xl_max == "Y") {
                    dw_master.SetItem(1, "ysgj", "29")
                }
                else {
                    dw_master.SetItem(1, "ysgj", "20")
                }
            }
            if (ysfs == "空运") {
                dw_master.SetItem(1, "ysgj", "50")
            }
        }





        //
        if (dw_spxx.RowCount() > 0) {
            var hz_sl = dw_spxx.GetItemNumber(1, "jlsl_sum");
            dw_master.SetItem(1, "hz_sl", hz_sl)
        }

        dw_jzxxx.AcceptText();
        if (dw_jzxxx.RowCount() == 0) {
            alert("货代单证中没有集装箱信息!");
            dw_jzxxx.SetFocus();
            return;
        }


        //处理汇总信息  
        var hz_xx = dw_jzxxx.GetItemString(1, "hz_xx");
        var hz_zhlx = dw_jzxxx.GetItemString(1, "hz_zhlx");
        var hz_tpsl = dw_jzxxx.GetItemNumber(1, "hz_tpsl");
        var hz_szsl = dw_jzxxx.GetItemNumber(1, "hz_szsl");
        dw_master.SetItem(1, "hz_xx", hz_xx)
        dw_master.SetItem(1, "hz_zhlx", hz_zhlx)
        dw_master.SetItem(1, "hz_tpsl", hz_tpsl)
        dw_master.SetItem(1, "hz_szsl", hz_szsl)

        //

        for (row = dw_spxx.RowCount(); row > 0; row--) {
            dw_spxx.SetItem(row, "cxh", row);
            dw_spxx.SetItem(row, "ywbh", ywbh);
        }



        var zxs = dw_master.GetItemNumber(1, "zxs")

        if (zxs == null || zxs == 0) {
            if (dw_spxx.RowCount() > 0) {
                zxs = dw_spxx.GetItemNumber(1, "jlsl_sum")
                dw_master.SetItem(1, "zxs", zxs)
            };
        } else {
            if (dw_spxx.RowCount() > 0) {
                var jlsl_sum = dw_spxx.GetItemNumber(1, "jlsl_sum")
                if (zxs != jlsl_sum) {
                    if (requestor.MessageBox("提示", "商品合计的总箱数和主表中总箱数不一致，是否按商品合计的总箱数覆盖主表总箱数?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                        dw_master.SetItem(1, "zxs", jlsl_sum)
                    }
                }
            };
        };


        var hz_bzsl = dw_master.GetItemNumber(1, "hz_bzsl")

        if (hz_bzsl == null || hz_bzsl == 0) {
            if (dw_spxx.RowCount() > 0) {
                hz_bzsl = dw_spxx.GetItemNumber(1, "bzsl_sum")
                dw_master.SetItem(1, "hz_bzsl", hz_bzsl)
            };
        } else {
            if (dw_spxx.RowCount() > 0) {
                var bzsl_sum = dw_spxx.GetItemNumber(1, "bzsl_sum")
                if (hz_bzsl != bzsl_sum) {
                    if (requestor.MessageBox("提示", "商品合计的汇总包装数量和主表中汇总包装数量不一致，是否按商品合计的汇总包装数量覆盖主表汇总包装数量?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                        dw_master.SetItem(1, "hz_bzsl", bzsl_sum)
                    }
                }
            };
        };



        var zmz = dw_master.GetItemNumber(1, "zmz");
        var zjz = dw_master.GetItemNumber(1, "zjz");
        if (dw_spxx.RowCount() > 0) {
            zmz = dw_spxx.GetItemNumber(1, "zmz_sum")
            zjz = dw_spxx.GetItemNumber(1, "zjz_sum")
        }

        zmz = parseFloat(zmz.toFixed(4));
        dw_master.SetItem(1, "zmz", zmz);
        zjz = parseFloat(zjz.toFixed(4));
        dw_master.SetItem(1, "zjz", zjz);


        //判断每个集装箱的毛重是否在规定范围内 18-24吨
        var jzxsl = dw_jzxxx.RowCount();
        var ysfs = dw_master.GetItemString(1, "ysfs");
        if (jzxsl > 0 && ysfs == "海运") {
            var mxmz = zmz / jzxsl;
            if (mxmz < 14000 || mxmz > 28000) {
                requestor.MessageBox("提示", "请检查集装箱数量信息是否缺失！");
            }
        }


        var zjz = dw_master.GetItemNumber(1, "zjz")
        if (dw_spxx.RowCount() > 0 && editMode != "copy") {
            zjz = dw_spxx.GetItemNumber(1, "zjz_sum")
            zjz = parseFloat(zjz.toFixed(4));

            dw_master.SetItem(1, "zjz", zjz)

        };




        self.SetZje();

        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_spxx_data = dw_spxx.GetChanges();

        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_spxx_data == "")
            return;

        //数据同步生鲜港
        if (editMode == "new" || editMode == "copy") {
            var ywbh = dw_master.GetItemString(i, "ywbh");
            var row = dw_log.InsertRow(0);
            var serialNumber = dw_log.GetItemString(row, "eid_max")

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz");
            var mainid = dw_log.GetItemString(row, "mainid");
            if (mainid == null || mainid == "") {
                dw_log.SetItem(row, "mainid", ywbh);
            };
            dw_log.ScrollToRow(row);
        } else if (zdmc != null && zdmc != "") {
            var ywbh = dw_master.GetItemString(i, "ywbh");
            var row = dw_log.InsertRow(0);
            var serialNumber = dw_log.GetItemString(row, "eid_max")

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz");
            zdmc = zdmc + ",hz_jzxh,zxs,hz_spmc";
            dw_log.SetItem(row, "changecols", zdmc);
            var mainid = dw_log.GetItemString(row, "mainid");
            if (mainid == null || mainid == "") {
                dw_log.SetItem(row, "mainid", ywbh);
            };
            dw_log.ScrollToRow(row);
        }
        setTimeout(function () { }, 10);
        if (zdmc_jzxxx == "Y") {
            for (var i = 1; i <= dw_jzxxx.RowCount(); i++) {

                var ywbh = dw_jzxxx.GetItemString(i, "ywbh");
                var cxh = dw_jzxxx.GetItemNumber(i, "cxh");
                var row = dw_log.InsertRow(0);
                var serialNumber = dw_log.GetItemString(row, "eid_max")

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
                dw_log.SetItem(row, "changecols", "");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.SetItem(row, "parameters", cxh.toString());
                dw_log.ScrollToRow(row);

            }
        }


        zdmc = "";
        zdmc_jzxxx = "";
        //        zdmc_dzyq = "";

        dw_log.AcceptText();

        var dw_log_data = dw_log.GetChanges();
        //        if (dw_log_data == "")
        //            return;

        var cdmc = dw_master.GetItemString(1, "cdmcs");
        var ywbh = dw_master.GetItemString(1, "ywbh");
        var Tjcd = QsWebSoft.PubMethod.Hdwlcdbc(cdmc, ywbh).value;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_spxx=" + dw_spxx_data + "&dw_log=" + dw_log_data + "&ywbh=" + ywbh + "&operation=" + editMode);

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



            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_spxx.ResetUpdate();

            dw_log.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");

            dw_master.Modify("ywbh.Tabsequence=0");
            //            //同步生鲜港数据

            var num = 0;
            if (ysfs == "海运") {
                for (var i = 1; i <= dw_jzxxx.RowCount(); i++) {
                    if (dw_jzxxx.GetItemString(i, "jzxh").replace(/(^s*)|(s*$)/g, "") == "" || dw_jzxxx.GetItemString(i, "jzxh").replace(/(^s*)|(s*$)/g, "") == null) {
                        num += 1;
                    }
                }
            }


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
            var ysfs = dw_master.GetItemString(1, "ysfs");
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
            iw_Commodity_Select.SetMaster(dw_master);
            iw_Commodity_Select.SetLx("insertrow"); 
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);
             
        }

     
       
    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
        if (lastdw.GetName() == "dw_spxx") {
            dw_spxx.AcceptText();
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var dwo = dw_spxx.GetDataObject();
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(dw_spxx);
            iw_Commodity_Select.SetLx("addrow");
            iw_Commodity_Select.SetMaster(dw_master);
            iw_Commodity_Select.SetRow(0);
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

            if (ysfs == "海运") {
                dw_jzxxx.SetItem(row, "xx", "40尺高柜");
                dw_jzxxx.SetItem(row, "xl", "冷藏集装箱");
                var Tybm = QsWebSoft.PubMethod.ReadWldwTybm(khbm).value;
                lxr = QsWebSoft.PubMethod.ReadWldwTybmLxr(Tybm).value;
                lxdh = QsWebSoft.PubMethod.ReadWldwTybmLxdh(Tybm).value;
            };
            dw_jzxxx.SetItem(row, "lxr", lxr);
            dw_jzxxx.SetItem(row, "lxdh", lxdh);
            dw_jzxxx.SetFocus();
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
           if (dw_jzxxx.GetItemString(row, "wlfyqr") == "Y") {
                requestor.MessageBox("", "物流费用已经确认，不能删除!");
                return;
            }

            if (dw_jzxxx.GetItemString(row, "htjhthsj_lb") != "" && dw_jzxxx.GetItemString(row, "htjhthsj_lb") != null) {
                requestor.MessageBox("", "物流部门已下计划，不能删除!");
                return;
            }

            var gjyf = dw_jzxxx.GetItemString(row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }


            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == 3) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                } else {
                    lastdw.DeleteRow(row);
                }

            } else {
                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }
                
                var contractcontainerid = lastdw.GetItemString(row, "contractcontainerid");

                if (contractcontainerid == "" || contractcontainerid == null) {
                    lastdw.DeleteRow(row);
                } else {
                    lastdw.DeleteRow(row);
                    var row = dw_log.InsertRow(0);
                    var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                    dw_log.SetItem(row, "eid", serialNumber);
                    dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
                    dw_log.SetItem(row, "funname", "DelHddz");
                    dw_log.SetItem(row, "mainid", contractcontainerid);
                    dw_log.ScrollToRow(row);
                }
            }
        }
        if (lastdw.GetName() == "dw_spxx") {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            if (row > 0) {              

                lastdw.DeleteRow(row);                
            }
            self.SetZje();
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
            dw_jzxxx.SetItem(row + 1, "contractcontainerid", "");
        }
        if (lastdw.GetName() == 'dw_spxx') {
            var row = dw_spxx.GetRow();
            if (row <= 0)
                return;

            
            dw_spxx.RowsCopy(row, row, DWBUFFER.Primary, dw_spxx, row + 1, DWBUFFER.Primary)
            dw_spxx.SetItem(row + 1, "sp_id", il_sp_id);

            dw_spxx.ScrollToRow(row + 1);
            dw_spdhsr.ScrollToRow(row + 1);
            self.SetZje();
           
        }

 

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

        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");
        var sfdj = requestor.GetParm("sfdj");
        var sfdjbm = requestor.GetParm("sfdjbm");
        var zsbh = requestor.GetParm("zsbh");
        var zsmc = requestor.GetParm("zsmc");
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

        dw_master.SetItem(1, 'zbr', userid);
        dw_master.SetItem(1, 'jcgzry', userid);
        dw_master.SetItem(1, 'sdry', userid);
        dw_master.SetItem(1, 'dlwtf', Dlwtf);
        dw_master.SetItem(1, 'sfdj', sfdj);
        dw_master.SetItem(1, 'sfdjbm', sfdjbm);
        dw_master.SetItem(1, 'zsbh', zsbh);
        dw_master.SetItem(1, 'zsmc', zsmc);
        self.SetEditMode("new");

        var zmyhl = QsWebSoft.PubMethod.Wb2Usd("USD").value;
        dw_master.SetItem(1, "wbbb", "USD")
        dw_master.SetItem(1, "zmyhl", zmyhl)
        var ysfs = requestor.GetParm("ysfs");
        dw_master.SetItem(1, 'ysfs', ysfs);
        var bg = requestor.GetParm("bg");
        dw_master.SetItem(1, 'bg', bg);
        var bj = requestor.GetParm("bj");
        dw_master.SetItem(1, 'bj', bj);
        var wl = requestor.GetParm("wl");
        dw_master.SetItem(1, 'wl', wl);
        var hd = requestor.GetParm("hd");
        dw_master.SetItem(1, 'hd', hd);
        var fx = requestor.GetParm("fx");
        dw_master.SetItem(1, 'fx', fx);

    }
    //#endregion


  

    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();
        var mxq = null;
        dw_master.SetItem(1, "ywbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate());
        var date_null = new Date("0000/00/00");

        dw_master.SetItem(1, "yjkgsj", dw_master.GetItemDate(1, 'fzyjkgsj'));
        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "hth", "");
        dw_master.SetItem(1, "beizhu", "");

        dw_master.SetItem(1, "beizhu_xgrq", Date());
        dw_master.SetItem(1, "sjkgsj", Date());
        dw_master.SetItem(1, "invoiceno", "");
        dw_master.SetItem(1, "invoice_date", Date());
        dw_master.SetItem(1, "hz_jzxh", "");
        dw_master.SetItem(1, "hz_spmc", "");
        dw_master.SetItem(1, "hz_spywmc", "");
        dw_master.SetItem(1, "hz_hgbm", "");
        dw_master.SetItem(1, "hz_pz", "");
        dw_master.SetItem(1, "dmbz", "N");

        dw_master.SetItem(1, "clfs", "");
        var ysfs = dw_master.GetItemString(1, "ysfs");
        dw_master.SetItem(1, "mxq", mxq);
        dw_master.SetItem(1, "bgdh", "");
        dw_master.SetItem(1, "dzlx", "");
        dw_master.SetItem(1, "zxs", 0);
        dw_master.SetItem(1, "bzzl", "");
        dw_master.SetItem(1, "zmz", 0)
        dw_master.SetItem(1, "zjz", 0);
        dw_master.SetItem(1, "zxs", 0);
        dw_master.SetItem(1, "ztdh", "");
        dw_master.SetItem(1, "jsdwbm", "");
        dw_master.SetItem(1, "jsdwmc", "");
        dw_master.SetItem(1, "jsdwjc", "");
        dw_master.SetItem(1, "jsdwpym", "");
        dw_master.SetItem(1, "gjyf", "N");
        dw_master.SetItem(1, "jzxsl", 0);
        dw_master.SetItem(1, "yfje", 0);
        dw_master.SetItem(1, "hdzljcsj", date_null.getVarDate());
        dw_master.SetItem(1, "wlfyqr", 0);
        dw_master.SetItem(1, "gwgys_tymc", "");
        dw_master.SetItem(1, "jyjyzs", "");
        dw_master.SetItem(1, "wjgd", "");
        dw_master.SetItem(1, "sfyjyjyzs", "");
        dw_master.SetItem(1, "sfysd", "");
        dw_master.SetItem(1, "sfygdwj", "");
        dw_master.SetItem(1, "dztxts", 0);
        dw_master.SetItem(1, "tdzt", 0);
        dw_master.SetItem(1, "sdtgfs", 0);
        dw_master.SetItem(1, "zdzfs", 0);
        dw_master.SetItem(1, "ohdlxy", "");
        dw_master.SetItem(1, "zzrq", date_null.getVarDate());
        dw_master.SetItem(1, "dzqk", "");
        dw_master.SetItem(1, "qrdf", "");
        dw_master.SetItem(1, "qrdfsj", date_null.getVarDate());
        //        dw_master.SetItem(1, "jdrbm", "");
        //        dw_master.SetItem(1, "jdrmc", "");
        //        dw_master.SetItem(1, "jdrjc", "");
        //        dw_master.SetItem(1, "jdrpym", "");
        dw_master.SetItem(1, "SupplierSellID", "");
        dw_master.SetItem(1, "xhgqbm", "");
        dw_master.SetItem(1, "xhgq", "");
        dw_master.SetItem(1, "xhgqjc", "");
        dw_master.SetItem(1, "xhgqpym", "");
        dw_master.SetItem(1, "qgld", "");
//        requestor.MessageBox("","1");
//        dw_master.SetItem(1, "dlxyh", "");
//        requestor.MessageBox("", "2");
//        dw_master.SetItem(1, "ohdlxy", "");
//        requestor.MessageBox("", "3");
//        dw_master.SetItem(1, "sfsjjyw", "");
//        requestor.MessageBox("", "4");
//        dw_master.SetItem(1, "zzrq", date_null.getVarDate());
//        requestor.MessageBox("", "5");
        for (row = dw_jzxxx.RowCount(); row > 0; row--) {

            dw_jzxxx.SetItem(row, "jzxh", "");
            dw_jzxxx.SetItem(row, "clfs", "");

            dw_jzxxx.SetItem(row, "sjshrbm", "");
            dw_jzxxx.SetItem(row, "sjshrmc", "");

            dw_jzxxx.SetItem(row, "lxr", "");
            dw_jzxxx.SetItem(row, "lxdh", "");
            dw_jzxxx.SetItem(row, "shdz", "");
            dw_jzxxx.SetItem(row, "zybz", "");
            dw_jzxxx.SetItem(row, "zyxx", "");

            dw_jzxxx.SetItem(row, "zjfscwld_shrbm", "");
            dw_jzxxx.SetItem(row, "zjfscwld_shrmc", "");
            dw_jzxxx.SetItem(row, "zjfscwld_zyxx", "");

            dw_jzxxx.SetItem(row, "jschfscwld_shrbm", "");
            dw_jzxxx.SetItem(row, "jschfscwld_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr2", "");
            dw_jzxxx.SetItem(row, "lxdh2", "");
            dw_jzxxx.SetItem(row, "jschfscwld_zyxx", "");

            dw_jzxxx.SetItem(row, "fscwld3_shrbm", "");
            dw_jzxxx.SetItem(row, "fscwld3_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr3", "");
            dw_jzxxx.SetItem(row, "lxdh3", "");
            dw_jzxxx.SetItem(row, "fscwld3_zyxx", "");

            dw_jzxxx.SetItem(row, "fscwld4_shrbm", "");
            dw_jzxxx.SetItem(row, "fscwld4_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr4", "");
            dw_jzxxx.SetItem(row, "lxdh4", "");
            dw_jzxxx.SetItem(row, "fscwld4_zyxx", "");
            dw_jzxxx.SetItem(row, "fscwld4_zyxx", 0);
            dw_jzxxx.SetItem(row, "wlfyqr", "N");
            dw_jzxxx.SetItem(row, "htjhthsj_lb", "");

            dw_jzxxx.SetItem(row, "contractcontainerid", "");

        }



        self.SetZje();
        //重新按收货单位来设置是否是加急业务
        var shdwbm = dw_master.GetItemString(1, "shdwbm");
        var sfsjjyw = QsWebSoft.PubMethod.Wldw_Sfsjjyw(shdwbm);
        dw_master.SetItem(1, "sfsjjyw", sfsjjyw);
        //
        self.SetEditMode("copy");
    }
    //#endregion


    //重写date属性
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1, //month 
            "d+": this.getDate(), //day 
            "h+": this.getHours(), //hour 
            "m+": this.getMinutes(), //minute 
            "s+": this.getSeconds(), //second 
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
            "S": this.getMilliseconds() //millisecond 
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }


    this.dw_master_ButtonClicked = function (Row, dwoName) {
        if (dwoName == "b_pg") {
            if (iw_Hddz_Zqhc == null)
                iw_Hddz_Zqhc = new W_Hddz_Zqhc();

            var Dlwtf = requestor.GetParm("Dlwtf");
            var cm = dw_master.GetItemString(Row, "cm");
            var hcorhbh_zq = dw_master.GetItemString(Row, "hcorhbh_zq");
            var yjkgsj = dw_master.GetItemDate(Row, "yjkgsj");
            var date = new Date(yjkgsj).format("yyyy-MM-dd hh:mm:ss");

            var zbr = dw_master.GetItemString(Row, "zbr")
            var userid = requestor.GetParm("userid");

            iw_Hddz_Zqhc.SetDataWindow(dw_master);
            iw_Hddz_Zqhc.SetData(cm);
            iw_Hddz_Zqhc.SetRow(Row);
            iw_Hddz_Zqhc.SetZbr(zbr);
            iw_Hddz_Zqhc.SetYjkgsj(yjkgsj);
            iw_Hddz_Zqhc.SetHcorhbh_zq(hcorhbh_zq);

            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Zqhc&Cm=" + cm + "&Yjkgsj=" + date, iw_Hddz_Zqhc);

        }

        if (editMode == "show" && dwoName != "b_pg")
            return;

        if (dwoName == "b_yfqk") {

            //生鲜港
            dw_master.SetItem(1, "yfbj", "")
            if (zdmc == null || zdmc == "") {
                zdmc = "yfbj";
            } else {
                if (zdmc.indexOf(dwoName) < 1) {
                    zdmc = zdmc + ',' + "yfbj";
                };
            };
        }


        if (dwoName == "b_bxfqk") {
            dw_master.SetItem(1, "bxfbj", "")
            dw_master.SetItem(1, "bxfbb", "")
            dw_master.SetItem(1, "bxfje", parseFloat(null))
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "yfbj";
            } else {
                if (zdmc.indexOf(dwoName) < 1) {
                    zdmc = zdmc + ',' + "bxfbj,bxfb,b,bxfje";
                };
            };
        }


        if (dwoName == "b_zsbh") {
            if (ib_zsbh) {
                dw_zsbh.Show();
                ib_zsbh = false;
            }
            else {
                dw_zsbh.Hide()
                ib_zsbh = true;
            }

        }

        if (dwoName == "b_sjsfdj") {
            if (ib_sjsfdj) {
                dw_sjsfdj.Show();
                ib_sjsfdj = false;
            }
            else {
                dw_sjsfdj.Hide()
                ib_sjsfdj = true;
            }

        }

     
    }

    function Todate(num) { //Fri Oct 31 18:00:00 UTC+0800 2008
        num = num + "";
        var date = "";
        var month = new Array();
        month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jan"] = 6;
        month["Jul"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
        var week = new Array();
        week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
        str = num.split(" ");
        date = str[5] + "-";
        date = date + month[str[1]] + "-" + str[2];
        return date;
    }

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {

        if (editMode == "show")
            return;

        if (dwoName == "t_cdmc") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hdwl_cd");
            //iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "hdgsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "hdgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hddz_hdgs");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bxfbj,bxfb,b,bxfje";
            } else {
                zdmc = zdmc + ',' + "bxfbj,bxfb,b,bxfje";

            };
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
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bggsbm,bggsmc,bggsjc,bggspym,sbdwdm";
            } else {
                zdmc = zdmc + ',' + "bggsbm,bggsmc,bggsjc,bggspym,sbdwdm";

            };

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
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bjgsbm,bjgsmc,bjgsjc,bjgspym,bjgssjjgdm";
            } else {
                zdmc = zdmc + ',' + "bjgsbm,bjgsmc,bjgsjc,bjgspym,bjgssjjgdm";
            };
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

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bghgbm,bghg,bghgjc,bghgpym";
            } else {
                zdmc = zdmc + ',' + "bghgbm,bghg,bghgjc,bghgpym";
            };

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

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jyjbm,jyjmc,jyjjc,jyjpym,jyjsjjgdm,hwcfd";
            } else {
                zdmc = zdmc + ',' + "jyjbm,jyjmc,jyjjc,jyjpym,jyjsjjgdm,hwcfd";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }


        if (dwoName == "khbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "wts";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            var Dlxyh = dw_master.GetItemString(1, "dlxyh");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "khbm,khmc,khjc,khpym,shdwmc,shdwjc,shdwpym,shdwdm,lxr,lxdh,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            } else {
                zdmc = zdmc + ',' + "khbm,khmc,khjc,khpym,shdwmc,shdwjc,shdwpym,shdwdm,lxr,lxdh,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };


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

        if (dwoName == "jdr_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            jdr = "jdr";

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_jdr");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jdrbm,jdrmc,jdrjc,jdrpym";
            } else {
                zdmc = zdmc + ',' + "jdrbm,jdrmc,jdrjc,jdrpym";

            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select);
            dw_master.SetFocus();
        }


        if (dwoName == "shdwbm_t") {
            if (iw_Hddz_Dlxy_Select == null)
                iw_Hddz_Dlxy_Select = new W_Hddz_Dlxy_Select();
            iw_Hddz_Dlxy_Select.SetDataWindow(dw_master);
            var zydl = dw_master.GetItemString(1, "zydl");
            var zbrq = dw_master.GetItemDate(1, "zbrq");
            var zbrqstr = Todate(zbrq);

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";

            } else {
                zdmc = zdmc + ',' + "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };


            if (zydl == "代理") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_dl");
            }
            else if (zydl == "自营") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_zy");
            }
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select&zbrq=" + zbrqstr, iw_Hddz_Dlxy_Select);
            dw_master.SetFocus();


        }

        if (dwoName == "tzr_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            iw_Wldw_Select.SetDataWindow(dw_master);
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "tzrbm,tzrmc,tzrjc,tzrpym";
            } else {
                zdmc = zdmc + ',' + "tzrbm,tzrmc,tzrjc,tzrpym";
            };


            iw_Wldw_Select.SetData("hddz_tzr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "jydwbm_t" || dwoName == "jydwbm1_t" || dwoName == "jydwbm2_t" || dwoName == "jydwbm3_t" || dwoName == "jydwbm4_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            } else {
                zdmc = zdmc + ',' + "jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };

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

        if (dwoName == "gwgysbm_t" || dwoName == "gwgysbm1_t" || dwoName == "gwgysbm2_t" || dwoName == "gwgysbm3_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gwgys";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_gwgys");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "gwgysbm,gwgysmc,gwgysjc,gwgyspym,zjsbm,zjsmc,zjsjc,zjspym,mygb";
            } else {
                zdmc = zdmc + ',' + "gwgysbm,gwgysmc,gwgysjc,gwgyspym,zjsbm,zjsmc,zjsjc,zjspym,mygb";
            };

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
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "cdgsbm,cdgs,cdgsjc,cdgspym";
            } else {
                zdmc = zdmc + ',' + "cdgsbm,cdgs,cdgsjc,cdgspym";
            };

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
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "cyrbm,cyr,cyrjc,cyrpym";
            } else {
                zdmc = zdmc + ',' + "cyrbm,cyr,cyrjc,cyrpym";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zjs_t" || dwoName == "zjs1_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "zjs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_zjs");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "zjsbm,zjsmc,zjsjc,zjspym,mygb";
            } else {
                zdmc = zdmc + ',' + "zjsbm,zjsmc,zjsjc,zjspym,mygb";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "mygb_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetDataWindow1(dw_dzqk);
            iw_Country_Select.SetData("hddz_mygb");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "mygb";
            } else {
                zdmc = zdmc + ',' + "mygb";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "gwhd_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gwhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_gwhd");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "gwhdbm,gwhdmc,gwhdjc,gwhdpym";
            } else {
                zdmc = zdmc + ',' + "gwhdbm,gwhdmc,gwhdjc,gwhdpym";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }


        if (dwoName == "xhgq_t") {
            var ysfs = dw_master.GetItemString(1, "ysfs");
            if (ysfs == "" || ysfs == null) {
                requestor.MessageBox("提示", "请先选择运输方式！")
                return
            }
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            if (ysfs == "海运") {
                khlx = "hymt";
            } else {
                khlx = "mt"
            }

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "xhgqbm,xhgq,xhgqjc,xhgqpym,mtdm,jcka,rjka";
            } else {
                zdmc = zdmc + ',' + "xhgqbm,xhgq,xhgqjc,xhgqpym,mtdm,jcka,rjka";
            };

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_xhgq");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "qyg_t" || dwoName == "qyg1_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("qyg");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "qyg,qygdm,qygsjgkdm";
            } else {
                zdmc = zdmc + ',' + "qyg,qygdm,qygsjgkdm";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zzgk_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("zzgk");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "zzgk";
            } else {
                zdmc = zdmc + ',' + "zzgk";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }




        if (dwoName == "dlxyh_t") {

            if (iw_Hddz_Dlxy_Select == null)
                iw_Hddz_Dlxy_Select = new W_Hddz_Dlxy_Select();
            iw_Hddz_Dlxy_Select.SetDataWindow(dw_master);
            var zydl = dw_master.GetItemString(1, "zydl");
            var zbrq = dw_master.GetItemDate(1, "zbrq");
            var zbrqstr = Todate(zbrq);

            if (zydl == "代理") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_dl");
            }
            else if (zydl == "自营") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_zy");
            }
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            } else {
                zdmc = zdmc + ',' + "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };


            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select&zbrq=" + zbrqstr, iw_Hddz_Dlxy_Select);
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

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "hygsbm,hygsmc,hygsjc,hygspym";
            } else {
                zdmc = zdmc + ',' + "hygsbm,hygsmc,hygsjc,hygspym";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }


        if (dwoName == "ycd_t" || dwoName == "ycd2_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetDataWindow1(dw_dzqk);
            iw_Country_Select.SetData("ycd");
            iw_Country_Select.SetDataWindow2(dw_spxx);

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "ycd,ycddm,qiyunguo,qiyunguodm,yzbhdqdm,ctr_area2,rjka";
            } else {
                zdmc = zdmc + ',' + "ycd,ycddm,qiyunguo,qiyunguodm,yzbhdqdm,ctr_area2,rjka";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "qiyunguo_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("qiyunguo");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "qiyunguo,qiyunguodm";
            } else {
                zdmc = zdmc + ',' + "qiyunguo,qiyunguodm";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }


        if (dwoName == "yfcdr_t") {
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "yfcdrbm,yfcdr,yfcdrjc,yfcdrpym";
            } else {
                zdmc = zdmc + ',' + "yfcdrbm,yfcdr,yfcdrjc,yfcdrpym";
            };


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

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jsdwbm,jsdwmc,jsdwjc,jsdwpym";
            } else {
                zdmc = zdmc + ',' + "jsdwbm,jsdwmc,jsdwjc,jsdwpym";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "t_clqy") {
            dw_master.AcceptText();
            dw_spxx.AcceptText();
            if (iw_Clqy_Select == null)
                iw_Clqy_Select = new W_Clqy_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            row = dw_master.GetRow();
            var dwo = dw_master.GetDataObject();
            iw_Clqy_Select.SetRow(row);
            iw_Clqy_Select.SetDwo(dwo);
            iw_Clqy_Select.SetDetailDW(dw_master);

            var ycddm = dw_master.GetItemString(1, "ycddm"); ;
            if (ycddm == null) {
                requestor.MessageBox("提示", "请选择原产地！");
                return;
            };

            var spbm = "";
            if (dw_spxx.RowCount() > 0) {
                spbm = dw_spxx.GetItemString(1, "spbm")
            };

            if (ycddm == null) {
                requestor.MessageBox("提示", "请选择商品！");
                return;
            };

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "clqy";
            } else {
                zdmc = zdmc + ',' + "clqy";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Clqy_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&Ycddm=' + ycddm + '&Spbm=' + spbm, iw_Clqy_Select);

        }

        if (dwoName == "gwgysdz_t") {

            if (iw_Wldw_Dz_Select == null)
                iw_Wldw_Dz_Select = new W_Wldw_Dz_Select();
            var yw_khbm = dw_master.GetItemString(1, "gwgysbm");
            iw_Wldw_Dz_Select.SetDataWindow(dw_master);
            iw_Wldw_Dz_Select.SetData("hddz_gwgysdz");
            iw_Wldw_Dz_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Dz_Select&yw_khbm=" + yw_khbm, iw_Wldw_Dz_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "zjsdz_t") {
            if (iw_Wldw_Dz_Select == null)
                iw_Wldw_Dz_Select = new W_Wldw_Dz_Select();
            var yw_khbm = dw_master.GetItemString(1, "gwgysbm");
            iw_Wldw_Dz_Select.SetDataWindow(dw_master);
            iw_Wldw_Dz_Select.SetData("hddz_zjsdz");
            iw_Wldw_Dz_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Dz_Select&yw_khbm=" + yw_khbm, iw_Wldw_Dz_Select);
            dw_master.SetFocus();

        }

    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (zdmc == null || zdmc == "") {
            zdmc = dwoName;
        } else {
            if (zdmc.indexOf(dwoName) < 1) {
                zdmc = zdmc + ',' + dwoName;
            };
        };
        if (dwoName == "zje") {
            //生鲜港
            if (zdmc == null || zdmc == "") {
                zdmc = "zje";
            } else {
                if (zdmc.indexOf(dwoName) < 1) {
                    zdmc = zdmc + ',' + "zje";
                };
            };
        }
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
            var jgfs = dw_master.GetItemString(1, "jgfs");
            if (jgfs != "CIF") {
                dw_master.SetItem(1, "bxfbb", data);
            }

            var yjbb = dw_fpzb.GetItemString(1, "yjbb");
            if (yjbb == null || yjbb == 0 || yjbb == "") {
                dw_fpzb.SetItem(1, "yjbb", data);
            }
        }

        if (dwoName == "zydl") {

            zdmc = zdmc + ',jydwbm,jydwmc,jydwjc,jydwpym';

            if (data == "代理") {
                dw_master.SetItem(1, "jydwbm", "admin0003");
                dw_master.SetItem(1, 'jydwmc', "上海欧恒进出口有限公司");
                dw_master.SetItem(1, 'jydwjc', "上海欧恒");
                dw_master.SetItem(1, 'jydwpym', "shohjckyxgs");
            }
            if (data == "自营") {
                 
            }

        }

        if (dwoName == "ysfs") {
            //更新行号
            for (row = dw_jzxxx.RowCount(); row > 0; row--) {
                dw_jzxxx.SetItem(row, "ysfs", data);
                if (data == "海运") {
                    dw_jzxxx.SetItem(row, "tpxx", 0);
                    dw_jzxxx.SetItem(row, "zhlx", "");
                    //                    dw_jzxxx.SetItem(row, "hwcfd", "龙吴");
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

        }

        //如果是否有运费打勾，价格方式变为FOB
        if (dwoName == "sfyyf") {
            if (data == "Y") {
                dw_master.SetItem(1, "jgfs", "FOB")
                dw_master.SetItem(1, "yfbj", "3")
                dw_master.SetItem(1, "yfbb", "USD")
                dw_master.SetItem(1, "bxfbj", "1")
                dw_master.SetItem(1, "bxfbb", "USD")
                dw_master.SetItem(1, "bxfje", 0.3)
            } else {
                dw_master.SetItem(1, "khorhd", "")
                dw_master.SetItem(1, "yfcdrbm", "")
                dw_master.SetItem(1, "yfcdr", "")
                dw_master.SetItem(1, "yfcdrjc", "")
                dw_master.SetItem(1, "yfcdrpym", "")
                dw_master.SetItem(1, "jsdwbm", "")
                dw_master.SetItem(1, "jsdwmc", "")
                dw_master.SetItem(1, "jsdwjc", "")
                dw_master.SetItem(1, "jsdwpym", "")

            }

        }

        if (dwoName == "jgfs") {
            if (data == "FOB" || data == "C&F") {
                dw_master.SetItem(1, "bxfbj", "1")
                dw_master.SetItem(1, "bxfbb", "USD")
                dw_master.SetItem(1, "bxfje", 0.3)
            }
            if (data == "CIF") {
                dw_master.SetItem(1, "bxfbj", "")
                dw_master.SetItem(1, "bxfbb", "")
                dw_master.SetItem(1, "bxfje", parseFloat(null))
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
        //单证类型和进出口标志一致
        if (dwoName == "dzlx") {
            dw_master.SetItem(row, "jckbz", data);
        }

        if (dwoName == "qygdm") {
            var qyg = QsWebSoft.PubMethod.ReadQyg(data).value;
            var qygsjgkdm = QsWebSoft.PubMethod.ReadQygsjgkdm(data).value;
            dw_master.SetItem(row, "qyg", qyg);
            dw_master.SetItem(row, "qygsjgkdm", qygsjgkdm);
            if (zdmc == null || zdmc == "") {
                zdmc = qyg + ',' + qygsjgkdm;
            } else {
                zdmc = zdmc + ',' + qyg + ',' + qygsjgkdm;
            };

        }

        if (dwoName == "ycddm") {
            var ycd = QsWebSoft.PubMethod.ReadGj(data).value;
            dw_master.SetItem(row, "ycd", ycd);
            dw_master.SetItem(row, "qiyunguodm", data);
            dw_master.SetItem(row, "qiyunguo", ycd);
            for (row = dw_dzqk.RowCount(); row > 0; row--) {
                dw_dzqk.DeleteRow(row);
            };
        };

        if (dwoName == "qiyunguodm") {
            var qiyunguo = QsWebSoft.PubMethod.ReadGj(data).value;
            dw_master.SetItem(row, "qiyunguo", qiyunguo);
        }

        if (dwoName == "dfcyf" || dwoName == "dfcbxf") {
            self.CacluFcybf();
        }

        if (dwoName == "tdlx") {
            var li_find = dw_dzqk.Find("dzmc = '提单'", 1, dw_dzqk.RowCount())
            if (data == "正本提单") {
                dw_dzqk.SetItem(li_find, "zfbqk", "正本")
            } else if (data == "未知") {
                dw_dzqk.SetItem(li_find, "zfbqk", "")
            }
            else {
                dw_dzqk.SetItem(li_find, "zfbqk", "副本")
            }
        }

        if (dwoName == "zmz") {
            var zmz_sum = 0;
            var jlsl_qz_sum = 0;
            if (dw_spxx.RowCount() > 1) {
                zmz_sum = dw_spxx.GetItemNumber(1, "zmz_sum");
                jlsl_qz_sum = dw_spxx.GetItemNumber(1, "jlsl_qz_sum");
            }


            if (zmz_sum != parseFloat(data) && jlsl_qz_sum != 0) {
                for (row = 1; row <= dw_spxx.RowCount(); row++) {
                    var jlsl_qz = dw_spxx.GetItemNumber(row, "jlsl_qz");
                    var ldc_zmz = 0;
                    if (row == dw_spxx.RowCount()) {
                        dw_spxx.SetItem(row, "zmz", 0);
                        dw_spxx.AcceptText();
                        var ldc_zmz_sum = dw_spxx.GetItemNumber(1, "zmz_sum");
                        ldc_zmz = parseFloat(data) - ldc_zmz_sum;

                    } else {
                        ldc_zmz = parseFloat(data) * jlsl_qz / jlsl_qz_sum;
                    }
                    ldc_zmz = parseFloat(ldc_zmz.toFixed(2));
                    dw_spxx.SetItem(row, "zmz", ldc_zmz);
                    var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
                    //计算毛重、净重
                    if (ldc_jlsl > 0 && ldc_zmz > 0) {
                        var ldc_djmz = ldc_zmz / ldc_jlsl;
                        ldc_djmz = parseFloat(ldc_djmz.toFixed(4));
                        dw_spxx.SetItem(row, "djmz", ldc_djmz);

                    }
                }
                self.CacluFcybf()
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zmz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zmz";
                    };
                };
            }

            if (dwoName == "zjz") {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zjz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zjz";
                    };
                };
            }
        }


        if (dwoName == "zjz") {
            var zjz_sum = 0;
            var jlsl_qz_sum = 0;
            if (dw_spxx.RowCount() > 1) {
                zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
                jlsl_qz_sum = dw_spxx.GetItemNumber(1, "jlsl_qz_sum");
            }


            if (zjz_sum != parseFloat(data) && jlsl_qz_sum != 0) {
                for (row = 1; row <= dw_spxx.RowCount(); row++) {
                    var jlsl_qz = dw_spxx.GetItemNumber(row, "jlsl_qz");
                    var ldc_zjz = 0;
                    if (row == dw_spxx.RowCount()) {
                        dw_spxx.SetItem(row, "zjz", 0);
                        dw_spxx.AcceptText();
                        var ldc_zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
                        ldc_zjz = parseFloat(data) - ldc_zjz_sum;

                    } else {
                        ldc_zjz = parseFloat(data) * jlsl_qz / jlsl_qz_sum;
                    }
                    ldc_zjz = parseFloat(ldc_zjz.toFixed(2));
                    dw_spxx.SetItem(row, "zjz", ldc_zjz);

                    var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
                    //计算毛重、净重
                    if (ldc_jlsl > 0 && ldc_zjz > 0) {
                        var ldc_djjz = ldc_zjz / ldc_jlsl;
                        ldc_djjz = parseFloat(ldc_djjz.toFixed(4));
                        dw_spxx.SetItem(row, "djjz", ldc_djjz);
                    }
                }
                self.CacluFcybf()
            }

        }

        /*如果已经发送亿通、则提醒需要通知报关人员*/
        if (dwoName == "dmbz") {
            var ytjkfscs = dw_master.GetItemNumber(1, "ytjkfscs");
            if (ytjkfscs > 0) {
                requestor.MessageBox("提醒", "报关数据已经发送，请及时通知报关人员修改报关信息！");
                var yjtsbm = dw_master.GetItemString(1, "yjtsbm");
                if (yjtsbm == null) { yjtsbm = "" }
                if (yjtsbm.indexOf("A") <= 0) {
                    yjtsbm = yjtsbm + "A"
                    dw_master.SetItem(1, "yjtsbm", yjtsbm);
                }

            };
        }

        if (dwoName == "zf") {
            self.SetZje();
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

            ldc_zjz = dw_spxx.GetItemNumber(row, "zjz")
            if (ldc_zjz != null && ldc_zjz != 0) {
                var ldc_dj = (data / ldc_zjz);
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
            if (dwoName == "zmz") {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zmz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zmz";
                    };
                };
            } else {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zjz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zjz";
                    };
                };
            }
            
            if (dwoName == "zjz") {
                dw_spxx.SetItem(row, "fdsl", parseFloat(data));
                var ldc_zj = dw_spxx.GetItemNumber(row, "zj")
                if (ldc_zj != null || ldc_zj != 0) {
                    ldc_dj = (ldc_zj / data);
                    ldc_dj = parseFloat(ldc_dj.toFixed(4));
                    dw_spxx.SetItem(row, "dj", ldc_dj);
                }
            }
            self.SetZje();
            self.CacluMjztj(row);
            var ldc_zmz_sum = dw_spxx.GetItemNumber(1, "zmz_sum");
            dw_master.SetItem(1, "zmz", ldc_zmz_sum);
            var ldc_zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
            dw_master.SetItem(1, "zjz", ldc_zjz_sum);

        }
        else if (dwoName == "sppp") {
            dw_spxx.SetItem(row, "sppp_yw", data)
        }
        else if (dwoName == "spgg") {
            dw_spxx.SetItem(row, "spgg_yw", data)
        }

        if (dwoName == "fpje") {
            var ldc_yf = dw_spxx.GetItemNumber(row, "yf")
            if (ldc_yf == null) {
                ldc_yf = 0;
            }
            var ldc_bxf = dw_spxx.GetItemNumber(row, "bxf")
            if (ldc_bxf == null) {
                ldc_bxf = 0;
            }
            var ldc_zj = parseFloat(ldc_yf) + parseFloat(ldc_bxf) + parseFloat(data);

            dw_spxx.SetItem(row, "zj", ldc_zj)
            var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz")
            if (ldc_zjz == null) {
                ldc_zjz = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_zjz != 0) {
                var ldc_dj = (ldc_zj / ldc_zjz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl == null) {
                ldc_jlsl = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_jlsl != 0) {
                var ldc_djjg = (ldc_zj / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }
            //生鲜港
            if (zdmc == null || zdmc == "") {
                zdmc = "zje";
            } else {
                if (zdmc.indexOf("zje") < 1) {
                    zdmc = zdmc + ',' + "zje";
                };
            };
        }

        if (dwoName == "zjz") {
            self.CacluFcybf();
        }

       
        if (dwoName == "djmz") {
            var djmz = data;
            var jlsl = dw_spxx.GetItemNumber(row, "jlsl");
            var zmz = djmz * jlsl;
            dw_spxx.SetItem(row, "zmz", zmz);
        }
    }
    //#endregion


    //#region dw_spdhsr ItemChanged
    this.dw_spdhsr_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jlsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spdhsr.GetItemNumber(row, "zj")
            var ldc_djjg = ldc_zj / data;
            var ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
            dw_spdhsr.SetItem(row, "djjg", ldc_djjg);
            self.SetZje();
            self.CacluMjztj(row);
        }

        else if (dwoName == "zj") {
            if (data < 0) {
                alert("总价不能小于0,请重新输入!");
                return 1;
            }
            var ldc_jlsl = dw_spdhsr.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (data / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spdhsr.SetItem(row, "djjg", ldc_djjg);
            }

            ldc_zmz = dw_spdhsr.GetItemNumber(row, "zmz")
            if (ldc_zmz != null && ldc_zmz != 0) {
                var ldc_dj = (data / ldc_zmz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spdhsr.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
        }

        else if (dwoName == "zmz" || dwoName == "zjz") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            if (dwoName == "zjz") {
                dw_spdhsr.SetItem(row, "fdsl", parseFloat(data));
            }

            if (dwoName == "zmz") {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zmz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zmz";
                    };
                };
            } else {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zjz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zjz";
                    };
                };
            }   

            var ldc_zj = dw_spdhsr.GetItemNumber(row, "zj")
            if (ldc_zj != null || ldc_zj != 0) {
                var ldc_dj = (ldc_zj / data);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spdhsr.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
            self.CacluMjztj(row);


        }
        else if (dwoName == "sppp") {
            dw_spxx.SetItem(row, "sppp_yw", data)
        }
        else if (dwoName == "spgg") {
            dw_spxx.SetItem(row, "spgg_yw", data)
        }


        if (dwoName == "fpje") {
            var ldc_yf = dw_spxx.GetItemNumber(row, "yf")
            if (ldc_yf == null) {
                ldc_yf = 0;
            }
            var ldc_bxf = dw_spxx.GetItemNumber(row, "bxf")
            if (ldc_bxf == null) {
                ldc_bxf = 0;
            }
            var ldc_zj = parseFloat(ldc_yf) + parseFloat(ldc_bxf) + parseFloat(data);
            dw_spxx.SetItem(row, "zj", ldc_zj)
            var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz")
            if (ldc_zjz == null) {
                ldc_zjz = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_zjz != 0) {
                var ldc_dj = (ldc_zj / ldc_zjz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }

            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl == null) {
                ldc_jlsl = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_jlsl != 0) {
                var ldc_djjg = (ldc_zj / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }

            //生鲜港
            if (zdmc == null || zdmc == "") {
                zdmc = "zje";
            } else {
                if (zdmc.indexOf("zje") < 1) {
                    zdmc = zdmc + ',' + "zje";
                };
            };
        }

        if (dwoName == "zjz") {
            self.CacluFcybf();
        }

        

    }
    //#endregion




    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {

        if (dwoName == "sjshrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }
        
        if (dwoName == "lxr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }
        if (dwoName == "shr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_shr");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "shdz") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }

        ////
        if (dwoName == "jschfscwld_shrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr2_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr2_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "shdz") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }

        /////
        if (dwoName == "jschfscwld_shrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr2_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr2_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr2") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "jschfscwld_shrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr2");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "jschfscwld_zyxx") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "jschfscwld_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz2");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }
        /////
        if (dwoName == "fscwld3_shrmc") {
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr3_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr3_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr3") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld3_shrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr3");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "fscwld3_zyxx") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld3_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz3");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }


        /////
        if (dwoName == "fscwld4_shrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr4_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr4_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr4") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld4_shrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr4");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "fscwld4_zyxx") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld4_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz4");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

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




    //#region dw_spxx_Clicked
    this.dw_spxx_RowFocusChanged = function (Row) {
        
    };
    //#endregion

    //#region dw_jzxxx EditChanged
    this.dw_jzxxx_EditChanged = function (row, dwoName, data) {
        zdmc_jzxxx = "Y";
        dw_master.AcceptText();
        if (dwoName == "clfs") {
            var clfs = dw_master.GetItemString(1, "clfs")
            if (clfs == null || clfs == "") {
                dw_master.SetItem(1, "clfs", data)
            }
        }
    }
     //#endregion



    //#region dw_spxx_Clicked
    this.dw_spxx_Clicked = function (xPos, yPos, Row, dwoName, Data) {

            dw_spdhsr.ScrollToRow(Row);
            if (dwoName == "b_zs") {
                if (ib_zs) {
                    dw_sjzs.Show();
                    ib_zs = false;

                }
                else {
                    dw_sjzs.Hide()
                    ib_zs = true;
                }
                ib_bzcl = true;
                dw_sjbzcl.Hide();
            }

            if (dwoName == "b_bzcl") {
                if (ib_bzcl) {
                    dw_sjbzcl.Show();
                    ib_bzcl = false;
                }
                else {
                    dw_sjbzcl.Hide()
                    ib_bzcl = true;
                }
                ib_zs = true;
                dw_sjzs.Hide();
            }
    };
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
        var ldc_zf = dw_master.GetItemNumber(1, "zf");
        ldc_zf = parseFloat(ldc_zf.toFixed(2));
        if (ldc_zf == null) {
            ldc_zf = 0;
        };
        ldc_zj_sum = ldc_zj_sum + ldc_zf;
        dw_master.SetItem(1, "zje", ldc_zj_sum);
        var ldc_zmyhl = dw_master.GetItemNumber(1, "zmyhl");
        var ldc_zmyje = ldc_zj_sum * ldc_zmyhl;
        ldc_zmyje = parseFloat(ldc_zmyje.toFixed(2));
        dw_master.SetItem(1, 'zmyje', ldc_zmyje);

    }
    //#endregion

    //#region CacluMjztj
    this.CacluMjztj = function (row) {
        dw_spxx.AcceptText();
        dw_spdhsr.AcceptText();
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

    //#region CacluMjztj
    this.CacluFcybf = function () {
        dw_master.AcceptText();
        dw_spxx.AcceptText();
        dw_spdhsr.AcceptText();
        dw_fpzb.AcceptText();

        var ldc_dfcyf = dw_fpzb.GetItemNumber(1, "dfcyf");
      
        if (ldc_dfcyf == null) {
            ldc_dfcyf = 0;
        }
        var ldc_dfcbxf = dw_fpzb.GetItemNumber(1, "dfcbxf");
        if (ldc_dfcbxf == null) {
            ldc_dfcbxf = 0;
        }

        var ldc_zjz_sum = 0;
        if (dw_spxx.RowCount() > 0) {
            ldc_zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
        };

        var ldc_yf_lj = 0;
        var ldc_bxf_lj = 0;
         
        for (row2 = 1; row2 <= dw_spxx.RowCount(); row2++) {
            var ldc_zjz = dw_spxx.GetItemNumber(row2, "zjz");
            if (ldc_zjz == null) {
                ldc_zjz = 0;
            }
            var ldc_fpje = dw_spxx.GetItemNumber(row2, "fpje");
            if (ldc_fpje == null) {
                ldc_fpje = 0;
            }
            var ldc_yf = 0;
            var ldc_bxf = 0;
           
            if (ldc_zjz_sum != 0) {
                ldc_yf = (ldc_dfcyf * ldc_zjz / ldc_zjz_sum);
                ldc_bxf = (ldc_dfcbxf * ldc_zjz / ldc_zjz_sum);
            }
            ldc_yf = parseFloat(ldc_yf.toFixed(2));
            
            ldc_bxf = parseFloat(ldc_bxf.toFixed(2));

            if (row2 == dw_spxx.RowCount()) {
                ldc_yf = ldc_dfcyf - ldc_yf_lj;
                ldc_bxf = ldc_dfcbxf - ldc_bxf_lj;
            } else {
                ldc_yf_lj = ldc_yf_lj + ldc_yf;
                ldc_bxf_lj = ldc_bxf_lj + ldc_bxf;
            }
           
            dw_spxx.SetItem(row2, "yf", ldc_yf)
            dw_spxx.SetItem(row2, "bxf", ldc_bxf)
            var ldc_fpje = dw_spxx.GetItemNumber(row2, "fpje");

            var ldc_zj = parseFloat(ldc_yf) + parseFloat(ldc_bxf) + parseFloat(ldc_fpje);
            dw_spxx.SetItem(row2, "zj", ldc_zj)

            if ((ldc_zj != null || ldc_zj != 0) && ldc_zjz != 0) {
                ldc_dj = (ldc_zj / ldc_zjz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row2, "dj", ldc_dj);
            }

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
   
        }
      
    };
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit_Wl", "dw_hddz_edit_wl");
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_spxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit_Wl", "dw_hddz_edit_wl_spxx");
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

     
}





