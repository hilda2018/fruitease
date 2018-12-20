///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Ky_CdphxxEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_kh= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_qd= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var sle_ts= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );
	 var ds_spxx= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_kh == null ) dw_kh= new DataWindow( requestor );
		 dw_kh.Attach( win.Control( "dw_kh") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_qd == null ) dw_qd= new DataWindow( requestor );
		 dw_qd.Attach( win.Control( "dw_qd") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(sle_ts == null ) sle_ts= new SingleLineEdit( requestor );
		 sle_ts.Attach( win.Control( "sle_ts") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
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

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_jzxxx","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_qd_Clicked)=="function") 
			 win.AttachEvent("dw_qd","Clicked",self.dw_qd_Clicked); 

		 if(typeof(self.dw_Master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_Master_ButtonClicked); 

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

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_kh.Detach(); dw_kh=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_qd.Detach(); dw_qd=null; 
		 dw_master.Detach(); dw_master=null; 
		 sle_ts.Detach(); sle_ts=null; 
		 tb_1.Detach(); tb_1=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
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
    var iw_Tpxx_Cdph_Select = null;
    var dwc = new DataWindowChild();
    var iw_Wldw_Select = null;
    var iw_Sj_Select = null;
    var iw_Bdsbh_Select = null;
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    var zdmc = null;
    var num = 0;
    webReq.SetWebServiceUrl("/Service/Ky_Cdphxx.ashx");

    
    
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
        }
        else {
            tb_1.SetVisible("btn_save", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
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
                //                var djydsj = dw_master.GetItemDate(1, "djydsj")
                //                if (djydsj > new Date("1900/1/1") ) {
                //                    dw_master.Modify("DataWindow.Readonly=yes");
                //                }
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
        dw_qd.AcceptText();
        var xgNum = 0;
        for (var i = 1; i <= dw_qd.RowCount(); i++) {
            if (dw_qd.GetItemString(i, "sfxg") == "Y") {
                xgNum += 1;
            }
        }

        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + xgNum) > 0) {
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



        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_qd.ModifiedCount() + dw_qd.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var sjccrq_sj = dw_master.GetItemString(1, "sjccrq_sj")
        if (sjccrq_sj == null || sjccrq_sj == "") {
            alert("请输入实际出车时间!");
            dw_master.SetFocus();
            return;
        }

//        var cgqsj = dw_master.GetItemString(1, "cgqsj")
//        if (cgqsj == null || cgqsj == "") {
//            alert("没有出港区时间!");
//            dw_master.SetFocus();
//            return;
//        }

        var row = dw_master.GetRow();
        var cdphbm = dw_master.GetItemString(row, "cdphbm");

        dw_master.SetItem(row, "cdphbm", cdphbm);
        //更新行号
        var hz_jzxh = "";
        var hz_ztdh = "";
        var hz_pm = "";
        var hz_zzxx = "";
        var tpsl = 0;
        var szsl = 0;

        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "cdphbm", cdphbm);
            var ztdh = dw_jzxxx.GetItemString(row, "ztdh");
            if (ztdh == null || ztdh == "") {
                ztdh = " ";
            }
            var hz_spmc = dw_jzxxx.GetItemString(row, "hz_spmc");
            var gq_tpxx = dw_jzxxx.GetItemNumber(row, "gq_tpxx");
            var zhlx = dw_jzxxx.GetItemString(row, "zhlx");
            if (zhlx == "托盘") {
                tpsl = tpsl + gq_tpxx;
            };
            if (zhlx == "散装") {
                szsl = szsl + gq_tpxx;
            };
            if (hz_ztdh.indexOf(ztdh) < 0) {
                if (hz_ztdh == "") {
                    hz_ztdh = ztdh;
                } else {
                    hz_ztdh = hz_ztdh + "," + ztdh;
                }
            };
            if (hz_pm.indexOf(ztdh) < 0) {
                if (hz_pm == "") {
                    hz_pm = hz_spmc;
                } else {
                    hz_pm = hz_pm + "," + hz_spmc;
                }
            };
        };

        if (dw_jzxxx.RowCount() > 0) {
            var jdrbm = dw_jzxxx.GetItemString(1, "yw_hddz_jdrbm");
            var jdrmc = dw_jzxxx.GetItemString(1, "yw_hddz_jdrmc");
            var jdrjc = dw_jzxxx.GetItemString(1, "yw_hddz_jdrjc");
            var jdrpym = dw_jzxxx.GetItemString(1, "yw_hddz_jdrpym");
            dw_master.SetItem(1, "jdrbm", jdrbm);
            dw_master.SetItem(1, "jdrmc", jdrmc);
            dw_master.SetItem(1, "jdrjc", jdrjc);
            dw_master.SetItem(1, "jdrpym", jdrpym);
        }

        dw_master.SetItem(1, "hz_ztdh", hz_ztdh);
        dw_master.SetItem(1, "hz_pm", hz_pm);
        if (dw_jzxxx.RowCount() > 0) {
            var xccy = dw_jzxxx.GetItemString(1, "xccy_max");
            dw_master.SetItem(1, "xccy", xccy);
        }

        dw_master.SetItem(1, "hz_ztdh", hz_ztdh);

        if (tpsl != 0) {
            hz_zzxx = tpsl.toString() + "托盘";
        }
        if (szsl != 0) {
            if (hz_zzxx == "") {
                hz_zzxx = szsl.toString() + "散装";
            } else {
                hz_zzxx = hz_zzxx + szsl.toString() + "散装";
            }
        };

        dw_master.SetItem(1, "hz_zzxx", hz_zzxx);


        if (dw_jzxxx.RowCount() == 0) {
            alert("货代单证中没有集装箱信息!");
            dw_jzxxx.SetFocus();
            return;
        }

        var sflc = "N"
        if (dw_jzxxx.RowCount() != 0) {
            sflc = dw_jzxxx.GetItemString(1, "jzxxx_sflc")
        }
        if (sflc == "Y") {
            dw_master.SetItem(1, "sflc", sflc)
        }



        var sfybd = dw_master.GetItemString(1, "sfybd");
        var cph = dw_master.GetItemString(1, "cph");
        if ((sfybd == null || sfybd == "") && cph.length > 0) {
            alert("请检查北斗查询没有点击!");
            return;


        }

        var zxcph = dw_master.GetItemString(1, "zxcph");
        var bdyssbh = dw_master.GetItemString(1, "bdyssbh");
        var bdsbh = dw_master.GetItemString(1, "bdsbh");
        var cdphbm = dw_master.GetItemString(1, "cdphbm");
        if (cph != zxcph && bdyssbh.length > 0) {
            var num = QsWebSoft.PubMethod.BdsbhCph(bdyssbh, cph, cdphbm, "").value;
            var logid = requestor.GetParm("userid");
            $.getJSON("IFView/KyMapHandler.ashx", { action: "Cphbdbdsbh", cph: cph, bdyssbh: bdyssbh, logid: logid, r: Math.random() }, function (res) {
                if (res.result) {

                } else {
                    alert("车牌号：" + cph + "绑定北斗设备" + bdsbh + "失败！");
                }
            })
        }



        if (dw_master.AcceptText() != 1)
            return;

        if (dw_jzxxx.AcceptText() != 1)
            return;



        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();


        if (dw_master_data == "" && dw_jzxxx_data == "")
            return;


        //数据同步生鲜港
        var cgqsj = dw_master.GetItemString(1, "cgqsj");

        if (cgqsj != "" && cgqsj != null) {

            var cdphbm = dw_master.GetItemString(1, "cdphbm");

            var log_num = dw_log.RowCount();

            var row = dw_log.InsertRow(0);
            //var maxNumber =  self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz_kycd");
            dw_log.SetItem(row, "changecols", "");
            dw_log.SetItem(row, "mainid", cdphbm);
            dw_log.ScrollToRow(row);

            setTimeout(function () { }, 10);

            var log_num = dw_log.RowCount();

            var row = dw_log.InsertRow(0);
            //var maxNumber =  self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz_tpcdxx");
            dw_log.SetItem(row, "changecols", "");
            dw_log.SetItem(row, "mainid", cdphbm);
            dw_log.ScrollToRow(row);
            setTimeout(function () { }, 10);


            for (var i = 1; i <= dw_jzxxx.RowCount(); i++) {
                if (dw_jzxxx.GetItemStatus(i, 0, DWBUFFER.Primary) == 1 || dw_jzxxx.GetItemStatus(i, 0, DWBUFFER.Primary) == 3) {

                    var ywbh = dw_jzxxx.GetItemString(i, "ywbh");
                    var cxh = dw_jzxxx.GetItemNumber(i, "cxh");

                    var log_num = dw_log.RowCount();

                    var row = dw_log.InsertRow(0);
                    //var maxNumber =  self.SerialNumber(log_num);
                    var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                    dw_log.SetItem(row, "eid", serialNumber);
                    dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
                    dw_log.SetItem(row, "changecols", "lxr,zjfscwld_zyxx,zjfscwld_bz,sc_bz,clfs,zhlx");
                    dw_log.SetItem(row, "mainid", ywbh);
                    dw_log.SetItem(row, "parameters", cxh.toString());
                    dw_log.ScrollToRow(row);
                }
            }



            dw_log.AcceptText()

            var dw_log_data = dw_log.GetChanges();
            if (dw_log_data == "")
                return;
        }

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_log=" + dw_log_data + "&cdphbm=" + cdphbm + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            cdphbm = webReq.ResponseText();
            dw_master.SetItem(1, "cdphbm", cdphbm);


            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "cdphbm", cdphbm);
            }
            for (row = 1; row <= dw_qd.RowCount(); row++) {
                dw_qd.SetItem(row, "sfxg", "N");
            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_log.ResetUpdate();

            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("cdphbm.Tabsequence=0");

            //同步生鲜港数据
            //            self.Tbsxg();

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
        if (iw_Tpxx_Cdph_Select == null)
            iw_Tpxx_Cdph_Select = new W_Tpxx_Cdph_Select();
        var ShareMode = requestor.GetParm("ShareMode");
        var ywy = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
        var dwo = dw_jzxxx.GetDataObject();
        var cdbm = dw_master.GetItemString(1, "cdbm");
        if (cdbm == null || cdbm == "") {
            requestor.MessageBox("提示", "请先选择车队！")
            return;
        }
        iw_Tpxx_Cdph_Select.SetRow(row);
        iw_Tpxx_Cdph_Select.SetDwo(dwo);
        iw_Tpxx_Cdph_Select.SetDetailDW(dw_jzxxx);

        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Tpxx_Cdph_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&Cdbm=' + cdbm, iw_Tpxx_Cdph_Select);

    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
        if (iw_Tpxx_Cdph_Select == null)
            iw_Tpxx_Cdph_Select = new W_Tpxx_Cdph_Select();
        var ShareMode = requestor.GetParm("ShareMode");
        var ywy = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var dwo = dw_jzxxx.GetDataObject();
        var cdbm = dw_master.GetItemString(1, "cdbm");
        if (cdbm == null || cdbm == "") {
            requestor.MessageBox("提示","请先选择车队！")
            return;
        }
        iw_Tpxx_Cdph_Select.SetDwo(dwo);
        iw_Tpxx_Cdph_Select.SetDetailDW(dw_jzxxx);
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Tpxx_Cdph_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&Cdbm=' + cdbm, iw_Tpxx_Cdph_Select);


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

        var qdsj = dw_jzxxx.GetItemString(row, "qdsj");
        if (qdsj != null) {
            if (requestor.MessageBox("提示", "签到时间已经存在，如果删除，将会把签到时间都删除掉，是否删除?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                lastdw.SetFocus();
                return;
            }
        }
        var ywbh = dw_jzxxx.GetItemString(row, "ywbh");
        var cxh = dw_jzxxx.GetItemNumber(row, "cxh");

        var log_num = dw_log.RowCount();

        var row_log = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row_log, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row_log, "eid", serialNumber);
        dw_log.SetItem(row_log, "tablename", "yw_hddz_jzxxx");
        dw_log.SetItem(row_log, "changecols", "lxr,zjfscwld_zyxx,zjfscwld_bz,sc_bz,clfs,zhlx");
        dw_log.SetItem(row_log, "mainid", ywbh);
        dw_log.SetItem(row_log, "parameters", cxh.toString());
        dw_log.ScrollToRow(row_log);

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

        var cdphbm = dw_master.GetItemString(1, "cdphbm");
        dw_print.SetDataObject("dw_ky_cdphxx_print");
        dw_print.Retrieve(cdphbm);
        dw_print.PrintPreview();
    }
    //#endregion
  
    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        if (dwoName == "hgbm") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodit_Select();
            var ywy = requestor.GetParm("userid"); ;
            var ShareMode = requestor.GetParm("ShareMode"); ;
            var Dlwtf = requestor.GetParm("Dlwtf"); ;
            iw_Commodity_Select.SetDetailDW(dw_cmd);
            iw_Commodity_Select.SetDwo("dw_mxd_edit_cmd");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
            dw_cmd.SetFocus();
        }

      
        
    }
    //#endregion

     //#region dw_Master Clicked
    this.dw_Master_ButtonClicked = function (Row, dwoName) {
         if (dwoName == "b_bdcx") {
             var cph = dw_master.GetItemString(Row, "cph");
            if (cph.length > 0) {
                var logid = requestor.GetParm("userid");
                $.getJSON("IFView/KyMapHandler.ashx", { action: "PdcphVerifyLicensePlate", cph: cph, logid: logid, r: Math.random() }, function (res) {
                    if (res.result) {
                        dw_master.SetItem(Row, "sfybd", "Y");
                    } else {
                        alert("车牌号：" + cph + " 没有北斗信息");
                        dw_master.SetItem(Row, "sfybd", "N");
                    }
                })

            };

        }
    }
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

        var li_retrieve = dw_kh.Retrieve(Dlwtf);
        if (li_retrieve > 0) {
            var cdmc = dw_kh.GetItemString(li_retrieve, "khmc");
            var cdjc = dw_kh.GetItemString(li_retrieve, "khjc");
            var cdpym = dw_kh.GetItemString(li_retrieve, "pym");
            dw_master.SetItem(1, 'cdbm', Dlwtf);
            dw_master.SetItem(1, 'cdmc', cdmc);
            dw_master.SetItem(1, 'cdjc', cdjc);
            dw_master.SetItem(1, 'cdpym', cdpym);
        };
        dw_master.SetItem(1, 'zbr', userid);
        self.SetEditMode("new");



    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "cdphbm", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate()); 
        
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        var djydsj = dw_master.GetItemDate(1, "djydsj")
        if (djydsj > new Date("1900/1/1")) {
            return;
        }

      

        if (dwoName == "cdmc_t") {
            var Dlwtf = requestor.GetParm("Dlwtf");
            if (Dlwtf.length == 0) {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "cd";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                if (Dlwtf == null || Dlwtf == "") {
                    iw_Wldw_Select.SetDataWindow(dw_master);

                    iw_Wldw_Select.SetData("cdph_cd");
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_master.SetFocus();
                }
            }

        }

        if (dwoName == "sj_t") {
            if (iw_Sj_Select == null)
                iw_Sj_Select = new W_Sj_Select();
            sjlx = "ky";
            var cdbm = dw_master.GetItemString(1, "cdbm");
            if (cdbm == null || cdbm == "") {
                requestor.MessageBox("提示", "请先选择车队！")
                return;
            }
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Sj_Select.SetDataWindow(dw_master);
            iw_Sj_Select.SetData("cdph_sj");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx + "&Cdbm=" + cdbm, iw_Sj_Select);
            dw_master.SetFocus();


        }

        if (dwoName == "t_bdsbh") {
            if (iw_Bdsbh_Select == null)
                iw_Bdsbh_Select = new W_Bdsbh_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var hyky = "ky";
            iw_Bdsbh_Select.SetDataWindow(dw_master);
            iw_Bdsbh_Select.SetRow(Row);
            iw_Bdsbh_Select.SetData("kyph_bdsbh");
 
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Bdsbh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&hyky=" + hyky, iw_Bdsbh_Select);
            dw_master.SetFocus();



        }



    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "cllx") {
            var sflc = dw_master.GetItemString(1, "sflc")
            if (sflc == null) {
                sflc = "N"
            };
            var clsfje = QsWebSoft.PubMethod.ReadKyclje(data, sflc).value;
            dw_master.SetItem(1, "clsfje", clsfje)
            var zdtps = QsWebSoft.PubMethod.ReadCllxwhZdtps(data).value;
            dw_master.SetItem(1, "zdtps", zdtps)
        }

        if (dwoName == "sflc") {
            var cllx = dw_master.GetItemString(1, "cllx")
            var fkcs = 0
            if (cllx == null) {
                cllx = "N"
            }
            var clsfje = QsWebSoft.PubMethod.ReadKyclje(cllx, data).value;
            dw_master.SetItem(1, "clsfje", clsfje)
        }

        var djydsj = dw_master.GetItemDate(1, "djydsj")
        if (djydsj > new Date("1900/1/1")) {
            return;
        };


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

    var iw_Set_Sj = null;
    //#region dw_qd dw_qd_Clicked
    this.dw_qd_Clicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "qd") {
            if (iw_Set_Sj == null)
                iw_Set_Sj = new W_Set_Sj();
            var cdphbm = dw_master.GetItemString(1, "cdphbm");
            var sjshrbm = dw_qd.GetItemString(Row, "sjshrbm");
            iw_Set_Sj.SetData("qd");
            iw_Set_Sj.SetDataWindow(dw_qd);
            iw_Set_Sj.SetCdphbm(cdphbm);
            iw_Set_Sj.SetSjshrbm(sjshrbm);
            requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Set_Sj", iw_Set_Sj);
        }
    }
    //#endregion

    //#region dw_jzxxx ItemChanged
    this.dw_jzxxx_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "gq_tpxx") {
            var ld_gq_tpxx_jsl = dw_jzxxx.GetItemNumber(row, "gq_tpxx_jsl")
            if (parseFloat(data) > ld_gq_tpxx_jsl) {
                requestor.MessageBox("提示", "你输入的数据大于未托运的数量，请检查!")
                dw_jzxxx.SetItem(row,"gq_tpxx",0)
                return 1
            }
        }
        if (dwoName == "jyd_tpxx") {
            var ld_jyd_tpxx_jsl = dw_jzxxx.GetItemNumber(row, "jyd_tpxx_jsl")
            if (parseFloat(data) > ld_jyd_tpxx_jsl) {
                requestor.MessageBox("提示", "你输入的数据大于未托运的数量，请检查!")
                dw_jzxxx.SetItem(row, "jyd_tpxx", 0)
                return 1
            }
        }
        if (dwoName == "zjfscwld_tpxx") {
            var ld_zjfscwld_tpxx_jsl = dw_jzxxx.GetItemNumber(row, "zjfscwld_tpxx_jsl")
            if (parseFloat(data) > ld_zjfscwld_tpxx_jsl) {
                requestor.MessageBox("提示", "你输入的数据大于未托运的数量，请检查!")
                dw_jzxxx.SetItem(row, "zjfscwld_tpxx", 0)
                return 1
            }
        }
        if (dwoName == "sc_tpxx") {
            var ld_sc_tpxx_jsl = dw_jzxxx.GetItemNumber(row, "sc_tpxx_jsl")
            if (parseFloat(data) > ld_sc_tpxx_jsl) {
                requestor.MessageBox("提示", "你输入的数据大于未托运的数量，请检查!")
                dw_jzxxx.SetItem(row, "sc_tpxx", 0)
                return 1
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


    ////////


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Ky_CdphxxEdit", "dw_ky_cdphxx_edit_cmd");
        self.Retrieve();
    }
    //#endregion


    

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
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

    //#region 同步生鲜港
    this.Tbsxg = function () {
        var cdphbm = dw_master.GetItemString(1, "cdphbm");
        //执行删除的WebService       
        webReq.SetFunctionID(requestor.GetFunctionID());


        webReq.Invoke("Tbsxg", "cdphbm=" + cdphbm  );

        if (webReq.StatusCode() == 200) {
            webReq.ResponseText();
          
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }
    //#endregion


}





