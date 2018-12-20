///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_cd_Wlgz() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_wldz= new DataWindow( requestor );
	 var dw_dcrw= new DataWindow( requestor );
	 var dw_rwxz= new DataWindow( requestor );
	 var tab_1= new TabControl( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_lsjl= new DataWindow( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_wldz == null ) dw_wldz= new DataWindow( requestor );
		 dw_wldz.Attach( win.Control( "dw_wldz") ); 
		 if(dw_dcrw == null ) dw_dcrw= new DataWindow( requestor );
		 dw_dcrw.Attach( win.Control( "dw_dcrw") ); 
		 if(dw_rwxz == null ) dw_rwxz= new DataWindow( requestor );
		 dw_rwxz.Attach( win.Control( "dw_rwxz") ); 
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_lsjl == null ) dw_lsjl= new DataWindow( requestor );
		 dw_lsjl.Attach( win.Control( "dw_lsjl") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_dcrw_Clicked)=="function") 
			 win.AttachEvent("dw_dcrw","Clicked",self.dw_dcrw_Clicked); 

		 if(typeof(self.dw_rwxz_ButtonClicked)=="function") 
			 win.AttachEvent("dw_rwxz","ButtonClicked",self.dw_rwxz_ButtonClicked); 

		 if(typeof(self.dw_rwxz_ItemChanged)=="function") 
			 win.AttachEvent("dw_rwxz","ItemChanged",self.dw_rwxz_ItemChanged); 

		 if(typeof(self.dw_Master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_Master_ButtonClicked); 

		 if(typeof(self.dw_Master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_Master_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_Master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_Master_ItemChanged); 

		 if(typeof(self.dw_Master_EntertoTab)=="function") 
			 win.AttachEvent("dw_master","KeyDown",self.dw_Master_EntertoTab); 

		 if(typeof(self.dw_Master_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_master","RowFocusChanged",self.dw_Master_RowFocusChanged); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_jzxxx","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_jzxxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","ItemChanged",self.dw_jzxxx_ItemChanged); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.RowCopy)=="function") 
			 win.AttachEvent("btn_rowcopy","Clicked",self.RowCopy); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowinsert","Clicked",self.InsertRow); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_wldz.Detach(); dw_wldz=null; 
		 dw_dcrw.Detach(); dw_dcrw=null; 
		 dw_rwxz.Detach(); dw_rwxz=null; 
		 tab_1.Detach(); tab_1=null; 
		 dw_master.Detach(); dw_master=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 tb_1.Detach(); tb_1=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_lsjl.Detach(); dw_lsjl=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";

    var dw_mx = null;

    var dwc = new DataWindowChild();
    var dwc_zbr = new DataWindowChild();
    var iw_Sj_Select = null;
    var iw_Sjmc_Select = null;
    var iw_Wldw_Select = null;
    var iw_Cj_Select = null;
    var iW_Hy_cd_Wlgz_Rwdz = null;
    var iw_Bdsbh_Select = null;
    
    var lastdw = new DataWindow();

    var dwc_dq = new DataWindowChild();
    var dwc_lm = new DataWindowChild();
    var iw_Sfdqlm_Select = null;
    var xgnr = "";

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }
    var RowData = null;
    this.SetRow = function (parm) {
        RowData = parm;
    }

    var Rwlx = null;
    this.SetRwlx = function (parm) {
        Rwlx = parm;
    }



    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Wlgz.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_rwxz.ShareData(dw_dcrw);
        dw_wldz.Modify("DataWindow.Readonly=yes");
        lastdw.Attach(dw_master);
        self.Add();
    }

    this.SetListDataWindow = function (dw) {
        dw_List = dw;
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_rwxz.AcceptText();
        dw_wldz.AcceptText();
        if ((dw_master.ModifiedCount() + dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_wldz.ModifiedCount() + dw_wldz.DeletedCount() + dw_rwxz.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }
    }
    //#endregion

    //#region 新建
    this.Add = function () {
        var userid = requestor.GetParm("userid")
        var ywbh = requestor.GetParm("ywbh")
        var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));    
        dw_master.Retrieve(ywbh, hddz_cxh);
        dw_jzxxx.Retrieve(ywbh, hddz_cxh);
        dw_rwxz.Retrieve(ywbh, hddz_cxh);
        dw_wldz.Retrieve(ywbh, hddz_cxh);
        dw_lsjl.Retrieve(ywbh, hddz_cxh);
        dw_log.Retrieve(userid, "wlrw"); 
    }
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

        tb_1.SetVisible("btn_save", bEditFlag);
        tb_1.SetVisible("btn_rowdelete", bEditFlag);


        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_jzxxx.Modify("DataWindow.Readonly=no");
            dw_rwxz.Modify("DataWindow.Readonly=no");
            dw_wldz.Modify("DataWindow.Readonly=no");

        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_rwxz.Modify("DataWindow.Readonly=yes");
            dw_wldz.Modify("DataWindow.Readonly=yes");

        }
    };
    //#endregion

    //#region 获得数据窗口的焦点
    this.dw_GetFocus = function (sender) {
       
        lastdw.Attach(sender);

    };
    //#endregion


   
    //#region 添加明细
    this.AddRow = function () {
        if (lastdw.GetName() == "dw_master" || lastdw.GetName() == null || lastdw.GetName() == "") {
            var row = dw_master.InsertRow(0);
            var rwlx_master = dw_master.GetItemNumber(row, "rwlx_master");
            var ywbh = requestor.GetParm("ywbh");
            var userid = requestor.GetParm("userid");
            var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
            var jzxh = dw_rwxz.GetItemString(1, "jzxh");
            if (rwlx_master == "" || rwlx_master == null ) {
                rwlx_master = 1;
            } else {
                rwlx_master = rwlx_master + 1;
            }

            dw_master.SetItem(row, "rwlx", rwlx_master.toString());
            dw_master.SetItem(row, "ywbh", ywbh);
            dw_master.SetItem(row, "hddz_cxh", hddz_cxh);
            dw_master.SetItem(row, "jzxh", jzxh);
            dw_master.SetItem(row, "zbr", userid);
            var rwbh = ywbh + hddz_cxh.toString() + rwlx_master.toString();

            dw_master.SetItem(row, "rwbh", rwbh);

            dw_master.ScrollToRow(row);
            dw_master.SetFocus();
        }
        if (lastdw.GetName() == "dw_jzxxx") {
            var row_master = dw_master.GetRow();
            if (row_master < 1) {
                requestor.MessageBox("提示", "请选择任务！");
            }
            else {
                var ywbh = dw_master.GetItemString(row_master, "ywbh");
                var hddz_cxh = dw_master.GetItemNumber(row_master, "hddz_cxh");
                var rwlx = dw_master.GetItemString(row_master, "rwlx");
                var rwbh = dw_master.GetItemString(row_master, "rwbh");
                var row = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItem(row, "ywbh", ywbh);
                dw_jzxxx.SetItem(row, "hddz_cxh", hddz_cxh);
                dw_jzxxx.SetItem(row, "rwlx", rwlx);
                dw_jzxxx.SetItem(row, "rwbh", rwbh);
                dw_jzxxx.ScrollToRow(row);
                dw_jzxxx.SetFocus();
            }
        }



    }
    //#endregion


    //#region 删除商品
    this.DeleteRow = function () {
        if (lastdw.GetName() == "dw_master") {
            var row = dw_master.GetRow();
            if (row <= 0)
                return;
          
            var status = dw_master.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                    for (row1 = dw_jzxxx.RowCount(); row1 > 0; row1--) {
                        dw_jzxxx.DeleteRow(row1);
                    }                    
                    dw_master.DeleteRow(row);
                }
            } else {
                for (row1 = dw_jzxxx.RowCount(); row1 > 0; row1--) {
                    dw_jzxxx.DeleteRow(row1);
                }  
                dw_master.DeleteRow(row);
            }
        }

        if (lastdw.GetName() == "dw_jzxxx") {
            var row = dw_jzxxx.GetRow();
            if (row <= 0)
                return;
            var status = dw_jzxxx.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                    dw_jzxxx.DeleteRow(row);
                }
            } else {
                dw_jzxxx.DeleteRow(row);
            }

        };

    }


    //#region 复制商品
    this.RowCopy = function () {
        if (lastdw.GetName() == 'dw_master') {
            var row = dw_master.GetRow();
            if (row <= 0)
                return;
            dw_master.RowsCopy(row, row, DWBUFFER.Primary, dw_master, row + 1, DWBUFFER.Primary)
            dw_master.ScrollToRow(row + 1);
        }


        if (lastdw.GetName() == 'dw_jzxxx') {
            var row = dw_jzxxx.GetRow();
            if (row <= 0)
                return;
            dw_jzxxx.RowsCopy(row, row, DWBUFFER.Primary, dw_jzxxx, row + 1, DWBUFFER.Primary)
            dw_jzxxx.ScrollToRow(row + 1);
        }

     
    }
    //#endregion


    //#region 存盘
    this.save = function () {


        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_jzxxx.AcceptText() != 1)
            return;

        if (dw_rwxz.AcceptText() != 1)
            return;

        if (dw_wldz.AcceptText() != 1)
            return;

        if (dw_lsjl.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_master.DeletedCount() + dw_wldz.ModifiedCount() + dw_wldz.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_rwxz.ModifiedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }


        for (var i = 1; i <= dw_master.RowCount(); i++) {
            var sfybd = dw_master.GetItemString(i, "sfybd");
            var cph = dw_master.GetItemString(i, "cph");
            var rwbh = dw_master.GetItemString(i, "rwbh");
            if ((sfybd == null || sfybd == "") && cph.length > 0) {
                alert("请检查第" + i.toString() + "行的北斗查询没有点击!");
                return;
            }

            if (sfybd == "N") {
                var zxcph = dw_master.GetItemString(i, "zxcph");
                var bdyssbh = dw_master.GetItemString(i, "bdyssbh");
                var bdsbh = dw_master.GetItemString(i, "bdsbh");
                if (cph != zxcph && bdyssbh.length > 0) {
                    var num = QsWebSoft.PubMethod.BdsbhCph(bdyssbh, cph, "", rwbh).value;
                    var logid = requestor.GetParm("userid");
                    $.ajax({
                        async: false,
                        url: "IFView/MapHandler.ashx",
                        data: { action: "Cphbdbdsbh", cph: cph, bdyssbh: bdyssbh, logid: logid, r: Math.random() },
                        success: function (res) {
                            res = $.parseJSON(res);
                            if (res.result) {

                            } else {
                                alert("车牌号：" + cph + "邦定北斗设备" + bdsbh + "失败！");
                            }
                        }
                    });
                }
            }

            if (dw_master.GetItemStatus(i, "cph", DWBUFFER.Primary) == 1) {
                var cph = dw_master.GetItemString(i, "cph");
                var rwbh = dw_master.GetItemString(i, "rwbh");
                $.ajax({
                    async: false,
                    url: "IFView/MapHandler.ashx",
                    data: { action: "Szcljkks", cph: cph, logid: logid, r: Math.random() },
                    success: function (res) {
                        res = $.parseJSON(res);
                        if (res.result) {
                            var date = new Date();
                            dw_master.SetItem(i, "startdate", date.getVarDate());
                        } else {
                            alert("车牌号：" + cph + "设置车辆监控(开始)失败！");
                        }
                    }
                });
            }
        };

        for (var i = 1; i <= dw_master.RowCount(); i++) {
            dw_jzxxx.SetFilter("rwbh = '" + dw_master.GetItemString(i, "rwbh") + "'");
            dw_jzxxx.Filter();
            if (dw_jzxxx.GetItemStatus(dw_jzxxx.RowCount(), "jrdzwlsj", DWBUFFER.Primary) == 1) {
                var date = new Date(dw_jzxxx.GetItemDate(dw_jzxxx.RowCount(), "jrdzwlsj"));
                if (dw_jzxxx.GetItemDate(dw_jzxxx.RowCount(), "jrdzwlsj") != null && date.getFullYear() != 1900) {
                    var cph = dw_master.GetItemString(i, "cph");
                    var rwbh = dw_master.GetItemString(i, "rwbh");

                    $.ajax({
                        async: false,
                        url: "IFView/MapHandler.ashx",
                        data: { action: "Tzcljkjs", cph: cph, logid: logid, r: Math.random() },
                        success: function (res) {
                            res = $.parseJSON(res);
                            if (res.result) {
                                var date = new Date();
                                dw_master.SetItem(i, "enddate", date.getVarDate());
                            } else {
                                alert("车牌号：" + cph + "停止车辆监控(结束)失败！");
                            }
                        }
                    });
                }
            }
        }

        if (xgnr.length > 1) {
            var li_insertrow = dw_lsjl.InsertRow(0);
            var zbr = requestor.GetParm("userid");
            var ywbh = dw_rwxz.GetItemString(1, "ywbh");
            var hddz_cxh = dw_rwxz.GetItemNumber(1, "cxh");
            dw_lsjl.SetItem(li_insertrow, "ywbh", ywbh);
            dw_lsjl.SetItem(li_insertrow, "hddz_cxh", hddz_cxh);
            dw_lsjl.SetItem(li_insertrow, "zbr", zbr);
            dw_lsjl.SetItem(li_insertrow, "xgnr", xgnr);
        }


        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_lsjl.AcceptText();

        var ywbhsql = dw_master.GetItemString(1, "ywbh");
        var cxhsql = dw_master.GetItemNumber(1, "hddz_cxh");

        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_rwxz_data = dw_rwxz.GetChanges();
        var dw_wldz_data = dw_wldz.GetChanges();
        var dw_lsjl_data = dw_lsjl.GetChanges();

        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_rwxz_data == "" && dw_wldz_data == "" && dw_lsjl_data == "")
            return;



        //数据同步生鲜港
        //        for (var i = 1; i <= dw_list.RowCount(); i++) {
        //            var state = dw_list.GetItemStatus(i, 0, DWBUFFER.Primary);
        //            if (dw_list.GetItemStatus(i, "hgfxfs", DWBUFFER.Primary) == 1 || dw_list.GetItemStatus(i, "hgfxsj", DWBUFFER.Primary) == 1) {

        var ywbh = dw_rwxz.GetItemString(1, "ywbh");
        var cxh = dw_rwxz.GetItemNumber(1, "cxh");

        //        var log_num = dw_log.RowCount();

        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row, "eid_max"); //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
        str1 = "gq_sj,gq_cp,gq_sjlxfs,gq_rwbh,gq_c_rwbh,hgcyd_sj,hgcyd_cp,hgcyd_sjlxfs,hgcyd_rwbh,hgcyd_c_rwbh,jyd_sj,jyd_cp,jyd_sjlxfs,jyd_rwbh,jyd_c_rwbh,";
        str1 += "sc_sj,sc_cp,sc_sjlxfs,sc_rwbh,sc_c_rwbh,zjfscwld_sj,zjfscwld_cp,zjfscwld_sjlxfs,zjfscwld_rwbh,zjfscwld_c_rwbh,jschfscwld_sj,jschfscwld_cp,";
        str1 += "jschfscwld_sjlxfs,jschfscwld_rwbh,jschfscwld_c_rwbh,fscwld3_sj,fscwld3_cp,fscwld3_sjlxfs,fscwld3_rwbh,fscwld3_c_rwbh,fscwld4_sj,fscwld4_cp,";
        str1 += "fscwld4_sjlxfs,fscwld4_rwbh,fscwld4_c_rwbh,dc_sj,dc_cp,dc_sjlxfs,dc_rwbh,cgqsj,rscsj,djydsj,tgjysj,cscsj,hdcsj,fscwl_ddsj,fscwl_lksj,fscwl2_ddsj,";
        str1 += "fscwl2_lksj,fscwl3_ddsj,fscwl3_lksj,fscwl4_ddsj,fscwl4_lksj";
        dw_log.SetItem(row, "changecols", str1);
        dw_log.SetItem(row, "mainid", ywbh);
        dw_log.ScrollToRow(row);
        //            }
        //        }



        //        var log_num = dw_log.RowCount();

        //        for (var i = 1; i <= dw_master.RowCount(); i++) {
        //            if (dw_master.GetItemStatus(i, 0, DWBUFFER.Primary) == 1 || dw_master.GetItemStatus(i, 0, DWBUFFER.Primary) == 3) {
        //                var rwbh = dw_master.GetItemString(i, "rwbh");
        var row1 = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber1 = dw_log.GetItemString(row1, "eid_max"); //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row1, "eid", serialNumber1);
        dw_log.SetItem(row1, "tablename", "yw_hddz_wlgz");
        dw_log.SetItem(row1, "mainid", ywbh);
        dw_log.SetItem(row1, "parameters", cxh.toString());
        dw_log.ScrollToRow(row1);
        //            }
        //        }

        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_rwxz=" + dw_rwxz_data + "&dw_wldz=" + dw_wldz_data + "&dw_lsjl=" + dw_lsjl_data + "&dw_log=" + dw_log_data + "&operation=" + editMode + "&ywbh=" + ywbhsql + "&cxh=" + cxhsql.toString());

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            rwbh = webReq.ResponseText();
            dw_master.SetItem(1, "rwbh", rwbh);
            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "rwbh", rwbh);
            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_rwxz.ResetUpdate();
            dw_wldz.ResetUpdate();
            dw_lsjl.ResetUpdate();
            dw_log.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("rwbh.Tabsequence=0");


            //同步生鲜港数据
            self.Tbsxg();

            self.Exit();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }

    //#region dw_Master_RowFocusChanged
    this.dw_Master_RowFocusChanged = function (Row) {
        if (Row > 0) {
            
            var rwbh = dw_master.GetItemString(Row, "rwbh");
            dw_jzxxx.SetFilter("rwbh = '" + rwbh + "'");
            dw_jzxxx.Filter();
        }
    }
    //#region dw_Master_RowFocusChanged

    //#region dw_jzxxx_ItemChanged
    this.dw_jzxxx_ItemChanged = function (Row, dwoName, data) {

        var rwmc = dw_jzxxx.GetItemString(Row, "rwmc");
        var date = new Date("1900/01/01 00:00");
        if (Row > 0) {

            //            if (dwoName == "cdzwlsj") {
            //                if (dw_jzxxx.GetItemDate(Row, "jrdzwlsj") > date.getVarDate()) {
            //                    if (dw_jzxxx.GetItemDate(Row, "jrdzwlsj") > dw_jzxxx.GetItemDate(Row, "cdzwlsj")) {
            //                        requestor.MessageBox("", "出电子围栏时间不能小于进入电子围栏时间!");
            //                        var date = new Date();
            //                        dw_jzxxx.SetItem(Row, "cdzwlsj", date.getVarDate());
            //                        //                    dw_jzxxx.AcceptText();
            //                    }
            //                }
            //            }

            //            if (dwoName == "jrdzwlsj") {    
            //                if (dw_jzxxx.GetItemDate(Row - 1, "cdzwlsj")>date.getVarDate()) {
            //                    if (dw_jzxxx.GetItemDate(Row, "jrdzwlsj") < dw_jzxxx.GetItemDate(Row - 1, "cdzwlsj")) {
            //                        requestor.MessageBox("", "进入电子围栏时间不能小于上一层出电子围栏时间!");
            //                        var date = new Date();
            //                        dw_jzxxx.SetItem(Row, "jrdzwlsj", date.getVarDate());
            //                        //                    dw_jzxxx.AcceptText();
            //                    }
            //                }
            //            }
            if (dwoName == "jrdzwlsj") {
                dw_jzxxx.AcceptText();
                var ywy = requestor.GetParm("userid");
                var date = new Date();
                dw_jzxxx.SetItem(Row, "jdzwlsj_lrsj", date.getVarDate())
                dw_jzxxx.SetItem(Row, "jdzwlsj_czry", ywy)
            }

            if (dwoName == "cdzwlsj") {
                dw_jzxxx.AcceptText();
                var ywy = requestor.GetParm("userid");
                var date = new Date();
                dw_jzxxx.SetItem(Row, "cdzwlsj_lrsj", date.getVarDate())
                dw_jzxxx.SetItem(Row, "cdzwlsj_czry", ywy)
            }
        }
    }
    //#endregion

    this.dw_dcrw_Clicked = function (xPos, yPos, Row, dwoName) {
        
        if (dwoName == "dc_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "dc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_dcrw);
            iw_Wldw_Select.SetData("hyrw_dc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }
    }
     

    //#region dw_Master ItemChanged
    this.dw_Master_ItemChanged = function (Row, dwoName, data) {
        var rwbh = dw_master.GetItemString(1, "rwbh");
        for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
            var rwbh_new = dw_jzxxx.GetItemString(row, "rwbh");
            if (rwbh_new == null || rwbh_new == "") {
                dw_jzxxx.SetItem(row, "rwbh", rwbh);
            }
        };
        if (dwoName == "cph") {
//            if (data.length > 0) {
//                var logid = requestor.GetParm("userid");
//                 $.getJSON("IFView/MapHandler.ashx", { action: "VerifyLicensePlate", cph: data, logid: logid, r: Math.random() }, function (res) {
//                    if (res.result) {
//                        dw_master.SetItem(Row, "sfybd", "Y");
//                    } else {
//                        alert("车牌号：" + data + " 没有北斗信息");
//                        dw_master.SetItem(Row, "sfybd", "N");
//                    }
//                })
//               
//            };
            xgnr = xgnr + "第" + Row.toString() + "行的车牌号修改为：" + data + ";";
        }
        if (dwoName == "bdsbh") {
            xgnr = xgnr + "第" + Row.toString() + "行的北斗设备号修改为：" + data + ";";
        }
        if (dwoName == "cjmc") {
            xgnr = xgnr + "第" + Row.toString() + "行的车架名称修改为：" + data + ";";
        }
        if (dwoName == "sjmc") {
            xgnr = xgnr + "第" + Row.toString() + "行的司机名称修改为：" + data + ";";
        }
        if (dwoName == "sjh") {
            xgnr = xgnr + "第" + Row.toString() + "行的手机号修改为：" + data + ";";
        }
        if (dwoName == "sfzh") {
            xgnr = xgnr + "第" + Row.toString() + "行的身份证号修改为：" + data + ";";
        }
        if (dwoName == "rwkssj") {
            xgnr = xgnr + "第" + Row.toString() + "行的任务时间修改为：" + data + ";";
        }
        if (dwoName == "jsfs") {
            xgnr = xgnr + "第" + Row.toString() + "行的结算方式修改为：" + data + ";";
        }
        if (dwoName == "hxssmt") {
            xgnr = xgnr + "第" + Row.toString() + "行的还箱所属码头修改为：" + data + ";";
        }
        if (dwoName == "beizhu") {
            xgnr = xgnr + "第" + Row.toString() + "行的备注修改为：" + data + ";";
        }
        if (dwoName == "sfsc") {
            xgnr = xgnr + "第" + Row.toString() + "行的顺车改为：" + data + ";";
        }
    };
    //#endregion


    //#region dw_Master Clicked
    this.dw_Master_ButtonClicked = function (Row, dwoName) {
        if (dwoName == "b_cph") {
            if (iw_Sj_Select == null)
                iw_Sj_Select = new W_Sj_Select();
            sjlx = "hy";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Sj_Select.SetDataWindow(dw_master);
            iw_Sj_Select.SetRow(Row);
            iw_Sj_Select.SetData("wlgz_sj");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx + "&Cdbm= '" + "'", iw_Sj_Select);

            xgnr = xgnr + "第" + Row.toString() + "行的司机选择了 ;";
            dw_master.SetFocus();


        }




        if (dwoName == "b_sjmc") {
            if (iw_Sjmc_Select == null)
                iw_Sjmc_Select = new W_Sjmc_Select();
            sjlx = "hy";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Sjmc_Select.SetDataWindow(dw_master);
            iw_Sjmc_Select.SetRow(Row);
            iw_Sjmc_Select.SetData("wlgz_sjmc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sjmc_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Sjmc_Select);
            xgnr = xgnr + "第" + Row.toString() + "行的司机选择了 ;";

            dw_master.SetFocus();

        }

        if (dwoName == "b_cdmc") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("wlgz_cd");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
            xgnr = xgnr + "第" + Row.toString() + "行的车队选择了 ;";
        }

        if (dwoName == "b_cjmc") {
            if (iw_Cj_Select == null)
                iw_Cj_Select = new W_Cj_Select();
            sjlx = "hy";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Cj_Select.SetDataWindow(dw_master);
            iw_Cj_Select.SetRow(Row);
            iw_Cj_Select.SetData("wlgz_cj");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Cj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Cj_Select);
            dw_master.SetFocus();
            xgnr = xgnr + "第" + Row.toString() + "行的车队选择了 ;";
        }

//        if (dwoName == "b_xzwldz") {
//            if (iW_Hy_cd_Wlgz_Rwdz == null)
//                iW_Hy_cd_Wlgz_Rwdz = new W_Hy_cd_Wlgz_Rwdz();
//            sjlx = "hy";
//            var ywy = requestor.GetParm("userid");
//            var ShareMode = requestor.GetParm("ShareMode");
//            var Dlwtf = requestor.GetParm("Dlwtf");

//            iW_Hy_cd_Wlgz_Rwdz.SetDwoRwxz(dw_rwxz);
//            iW_Hy_cd_Wlgz_Rwdz.SetDwoWldz(dw_wldz);
//            iW_Hy_cd_Wlgz_Rwdz.SetDwoJzxxx(dw_jzxxx);
//            iW_Hy_cd_Wlgz_Rwdz.SetDwoMaster(dw_master);
//            iW_Hy_cd_Wlgz_Rwdz.SetRow(Row);
//            dw_jzxxx.AcceptText();
//            dw_jzxxx.SetFilter("");
//            dw_jzxxx.Filter();
//            var rwxh = 0
//            if (dw_jzxxx.RowCount() > 0) {
//                rwxh = dw_jzxxx.GetItemNumber(dw_jzxxx.RowCount(), "rwxh");

//            }
//            iW_Hy_cd_Wlgz_Rwdz.SetRwxh(rwxh);
//            if (Row > 0) {
//                var rwbh = dw_master.GetItemString(Row, "rwbh");
//                dw_jzxxx.SetFilter("rwbh = '" + rwbh + "'");
//                dw_jzxxx.Filter();
//            }
//            iW_Hy_cd_Wlgz_Rwdz.SetRow(Row);

//            //            iW_Hy_cd_Wlgz_Rwdz.SetData("wlgz_cj");
//            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hy_cd_Wlgz_Rwdz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iW_Hy_cd_Wlgz_Rwdz);
//            dw_master.SetFocus();
//            xgnr = xgnr + "第" + Row.toString() + "行的物流地址选择了 ;";
//        }

        if (dwoName == "b_bdcx") {
            var cph = dw_master.GetItemString(Row, "cph");

            if (cph.length > 0) {
                var logid = requestor.GetParm("userid");
                $.getJSON("IFView/MapHandler.ashx", { action: "PdcphVerifyLicensePlate", cph: cph, logid: logid, r: Math.random() }, function (res) {
                    if (res.result) {
                        dw_master.SetItem(Row, "sfybd", "Y");
                    } else {
                        alert("车牌号：" + cph + " 没有北斗信息");
                        dw_master.SetItem(Row, "sfybd", "N");
                    }
                })

            };

        }


        if (dwoName == "b_bdsbh") {
            if (iw_Bdsbh_Select == null)
                iw_Bdsbh_Select = new W_Bdsbh_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var hyky = "hy";
            iw_Bdsbh_Select.SetDataWindow(dw_master);
            iw_Bdsbh_Select.SetRow(Row);
            iw_Bdsbh_Select.SetData("wlgz_bdsbh");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Bdsbh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&hyky=" + hyky, iw_Bdsbh_Select);
            dw_master.SetFocus();


        }



    }
    //#endregion



    //#region 选择
    this.dw_rwxz_ItemChanged = function (row, dwoName, data) {
        var row_insert = 0;
        var row_find = 0;
        var ywbh = requestor.GetParm("ywbh")
        var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
        if (dwoName == "gq_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '港区'", 1, dw_jzxxx.RowCount());
            var gq_rwbh = dw_rwxz.GetItemString(1, "gq_rwbh");
            var gq_c_rwbh = dw_rwxz.GetItemString(1, "gq_c_rwbh");
            var gq_jd = dw_rwxz.GetItemString(1, "gq_jd");
            var gq_wd = dw_rwxz.GetItemString(1, "gq_wd");
            var gq_fw = dw_rwxz.GetItemNumber(1, "gq_fw");
            var gqdz = dw_rwxz.GetItemString(1, "gqdz");
            if (gqdz == "" || gqdz == null) {
                gqdz = "港区";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 1);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "港区");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", gq_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", gq_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", gq_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", gqdz);
                }
                dw_rwxz.SetItem(1, "gq_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "gq_rwbh", "N");
                    if (gq_rwbh == gq_c_rwbh || gq_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "gq_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "gq_c_sfxz", "N");
                    };
                };
            };
        };


        if (dwoName == "gq_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '港区'", 1, dw_jzxxx.RowCount());
            var gq_sfxz = dw_rwxz.GetItemString(1, "gq_sfxz");
            var gq_jd = dw_rwxz.GetItemString(1, "gq_jd");
            var gq_wd = dw_rwxz.GetItemString(1, "gq_wd");
            var gq_fw = dw_rwxz.GetItemNumber(1, "gq_fw");
            var gqdz = dw_rwxz.GetItemString(1, "gqdz");
            if (gqdz == "" || gqdz == null) {
                gqdz = "港区";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 1);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "港区");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", gq_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", gq_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", gq_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", gqdz);
                }
                if (gq_sfxz == "N" || gq_sfxz == "" || gq_sfxz == null) {
                    dw_rwxz.SetItem(1, "gq_rwbh", "Y");
                    dw_rwxz.SetItem(1, "gq_sfxz", "Y");
                }
                dw_rwxz.SetItem(1, "gq_c_rwbh", "Y");

            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0 && gq_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find)
                    };
                    dw_rwxz.SetItem(1, "gq_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "hgcyd_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '海关查验点'", 1, dw_jzxxx.RowCount());
            var hgcyd_rwbh = dw_rwxz.GetItemString(1, "hgcyd_rwbh");
            var hgcyd_c_rwbh = dw_rwxz.GetItemString(1, "hgcyd_c_rwbh");
            var hgcyd_jd = dw_rwxz.GetItemString(1, "hgcyd_jd");
            var hgcyd_wd = dw_rwxz.GetItemString(1, "hgcyd_wd");
            var hgcyd_fw = dw_rwxz.GetItemNumber(1, "hgcyd_fw");
            var hgcyddz = dw_rwxz.GetItemString(1, "hgcyddz");
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 2);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    //                dw_jzxxx.SetItem(row_insert, "dz", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "jd", hgcyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", hgcyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", hgcyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", hgcyddz);
                }
                dw_rwxz.SetItem(1, "hgcyd_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "hgcyd_rwbh", "N");
                    if (hgcyd_rwbh == hgcyd_c_rwbh || hgcyd_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "hgcyd_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "hgcyd_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "hgcyd_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '海关查验点'", 1, dw_jzxxx.RowCount());
            var hgcyd_sfxz = dw_rwxz.GetItemString(1, "hgcyd_sfxz")
            var hgcyd_jd = dw_rwxz.GetItemString(1, "hgcyd_jd");
            var hgcyd_wd = dw_rwxz.GetItemString(1, "hgcyd_wd");
            var hgcyd_fw = dw_rwxz.GetItemNumber(1, "hgcyd_fw");
            var hgcyddz = dw_rwxz.GetItemString(1, "hgcyddz");
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 2);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    //                dw_jzxxx.SetItem(row_insert, "dz", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "jd", hgcyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", hgcyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", hgcyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", hgcyddz);
                };
                if (hgcyd_sfxz == null || hgcyd_sfxz == "" || hgcyd_sfxz == "N") {
                    dw_rwxz.SetItem(1, "hgcyd_rwbh", "Y");
                    dw_rwxz.SetItem(1, "hgcyd_sfxz", "Y");
                };
                dw_rwxz.SetItem(1, "hgcyd_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {

                    if (row_find > 0 && hgcyd_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "hgcyd_c_rwbh", "N");
                };
            };
        };



        if (dwoName == "jyd_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '检疫点'", 1, dw_jzxxx.RowCount());
            var jyd_rwbh = dw_rwxz.GetItemString(1, "jyd_rwbh");
            var jyd_c_rwbh = dw_rwxz.GetItemString(1, "jyd_c_rwbh");
            var jyd_jd = dw_rwxz.GetItemString(1, "jyd_jd");
            var jyd_wd = dw_rwxz.GetItemString(1, "jyd_wd");
            var jyd_fw = dw_rwxz.GetItemNumber(1, "jyd_fw");
            var jyddz = dw_rwxz.GetItemString(1, "jyddz");
            if (jyddz == "" || jyddz == null) {
                jyddz = "检疫点";
            };

            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 3);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "检疫点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jyddz);
                }
                dw_rwxz.SetItem(1, "jyd_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "jyd_rwbh", "N");
                    if (jyd_rwbh == jyd_c_rwbh || jyd_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "jyd_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "jyd_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "jyd_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '检疫点'", 1, dw_jzxxx.RowCount());
            var jyd_sfxz = dw_rwxz.GetItemString(1, "jyd_sfxz");
            var jyd_jd = dw_rwxz.GetItemString(1, "jyd_jd");
            var jyd_wd = dw_rwxz.GetItemString(1, "jyd_wd");
            var jyd_fw = dw_rwxz.GetItemNumber(1, "jyd_fw");
            var jyddz = dw_rwxz.GetItemString(1, "jyddz");
            if (jyddz == "" || jyddz == null) {
                jyddz = "检疫点";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 3);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "检疫点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jyddz);
                }

                //            if (jyd_sfxz == null || jyd_sfxz == "" || jyd_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jyd_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jyd_sfxz", "Y");
                //            }
                dw_rwxz.SetItem(1, "jyd_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var jyd_sfxz = dw_rwxz.GetItemString(1, "jyd_sfxz");
                    if (row_find > 0 && jyd_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "jyd_c_rwbh", "N");
                };
            };
        };


        if (dwoName == "zjfscwld_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地1'", 1, dw_jzxxx.RowCount());
            var zjfscwld_rwbh = dw_rwxz.GetItemString(1, "zjfscwld_rwbh");
            var zjfscwld_c_rwbh = dw_rwxz.GetItemString(1, "zjfscwld_c_rwbh");
            var zjfscwld_jd = dw_rwxz.GetItemString(1, "zjfscwld_jd");
            var zjfscwld_wd = dw_rwxz.GetItemString(1, "zjfscwld_wd");
            var zjfscwld_fw = dw_rwxz.GetItemNumber(1, "zjfscwld_fw");
            var zjfscwld_zyxx = dw_rwxz.GetItemString(1, "zjfscwld_zyxx");
            if (zjfscwld_zyxx == "" || zjfscwld_zyxx == null) {
                zjfscwld_zyxx = "非市场物流地1";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 4);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地1");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", zjfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", zjfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", zjfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", zjfscwld_zyxx);
                };
                dw_rwxz.SetItem(1, "zjfscwld_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "zjfscwld_rwbh", "N");
                    if (zjfscwld_rwbh == zjfscwld_c_rwbh || zjfscwld_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "zjfscwld_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "zjfscwld_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "zjfscwld_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地1'", 1, dw_jzxxx.RowCount());
            var zjfscwld_sfxz = dw_rwxz.GetItemString(1, "zjfscwld_sfxz");
            var zjfscwld_jd = dw_rwxz.GetItemString(1, "zjfscwld_jd");
            var zjfscwld_wd = dw_rwxz.GetItemString(1, "zjfscwld_wd");
            var zjfscwld_fw = dw_rwxz.GetItemNumber(1, "zjfscwld_fw");
            var zjfscwld_zyxx = dw_rwxz.GetItemString(1, "zjfscwld_zyxx");
            if (zjfscwld_zyxx == "" || zjfscwld_zyxx == null) {
                zjfscwld_zyxx = "非市场物流地1";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 4);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地1");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", zjfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", zjfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", zjfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", zjfscwld_zyxx);
                };
                var zjfscwld_jv = dw_rwxz.GetItemNumber(1, "zjfscwld_jv");
                if (zjfscwld_jv == 1 && (zjfscwld_sfxz == null || zjfscwld_sfxz == "" || zjfscwld_sfxz == "N")) {
                    dw_rwxz.SetItem(1, "zjfscwld_rwbh", "Y");
                    dw_rwxz.SetItem(1, "zjfscwld_sfxz", "Y");
                }
                dw_rwxz.SetItem(1, "zjfscwld_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0 && zjfscwld_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "zjfscwld_c_rwbh", "N");
                };
            };
        };



        if (dwoName == "sc_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '市场'", 1, dw_jzxxx.RowCount());
            var sc_rwbh = dw_rwxz.GetItemString(1, "sc_rwbh");
            var sc_c_rwbh = dw_rwxz.GetItemString(1, "sc_c_rwbh");
            var sc_jd = dw_rwxz.GetItemString(1, "sc_jd");
            var sc_wd = dw_rwxz.GetItemString(1, "sc_wd");
            var sc_fw = dw_rwxz.GetItemNumber(1, "sc_fw");
            var scdz = dw_rwxz.GetItemString(1, "scdz");
            if (scdz == "" || scdz == null) {
                scdz = "市场";
            };

            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 5);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "市场");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", sc_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", sc_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", sc_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", scdz);
                }
                dw_rwxz.SetItem(1, "sc_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "sc_rwbh", "N");
                    if (sc_rwbh == sc_c_rwbh || sc_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "sc_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "sc_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "sc_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '市场'", 1, dw_jzxxx.RowCount());
            var sc_sfxz = dw_rwxz.GetItemString(1, "sc_sfxz");
            var sc_jd = dw_rwxz.GetItemString(1, "sc_jd");
            var sc_wd = dw_rwxz.GetItemString(1, "sc_wd");
            var sc_fw = dw_rwxz.GetItemNumber(1, "sc_fw");
            var scdz = dw_rwxz.GetItemString(1, "scdz");
            if (scdz == "" || scdz == null) {
                scdz = "市场";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 5);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "市场");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", sc_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", sc_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", sc_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", scdz);

                };
                //            if (sc_sfxz == null || sc_sfxz == "" || sc_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "sc_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "sc_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "sc_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0 && sc_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "sc_c_rwbh", "N");
                };
            };
        };


        if (dwoName == "jschfscwld_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地2'", 1, dw_jzxxx.RowCount());
            var jschfscwld_rwbh = dw_rwxz.GetItemString(1, "jschfscwld_rwbh");
            var jschfscwld_c_rwbh = dw_rwxz.GetItemString(1, "jschfscwld_c_rwbh");
            var jschfscwld_jd = dw_rwxz.GetItemString(1, "jschfscwld_jd");
            var jschfscwld_wd = dw_rwxz.GetItemString(1, "jschfscwld_wd");
            var jschfscwld_fw = dw_rwxz.GetItemNumber(1, "jschfscwld_fw");
            var jschfscwld_zyxx = dw_rwxz.GetItemString(1, "jschfscwld_zyxx");
            if (jschfscwld_zyxx == "" || jschfscwld_zyxx == null) {
                jschfscwld_zyxx = "非市场物流地2";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 6);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地2");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jschfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jschfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jschfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jschfscwld_zyxx);
                }
                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "jschfscwld_rwbh", "N");
                    if (jschfscwld_rwbh == jschfscwld_c_rwbh || jschfscwld_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "jschfscwld_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "jschfscwld_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "jschfscwld_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地2'", 1, dw_jzxxx.RowCount());
            var jschfscwld_sfxz = dw_rwxz.GetItemString(1, "jschfscwld_sfxz");
            var jschfscwld_jd = dw_rwxz.GetItemString(1, "jschfscwld_jd");
            var jschfscwld_wd = dw_rwxz.GetItemString(1, "jschfscwld_wd");
            var jschfscwld_fw = dw_rwxz.GetItemNumber(1, "jschfscwld_fw");
            var jschfscwld_zyxx = dw_rwxz.GetItemString(1, "jschfscwld_zyxx");
            if (jschfscwld_zyxx == "" || jschfscwld_zyxx == null) {
                jschfscwld_zyxx = "非市场物流地2";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 6);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地2");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jschfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jschfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jschfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jschfscwld_zyxx);
                };
                //            if (jschfscwld_sfxz == null || jschfscwld_sfxz == "" || jschfscwld_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jschfscwld_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "jschfscwld_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var jschfscwld_sfxz = dw_rwxz.GetItemString(1, "jschfscwld_sfxz");
                    if (row_find > 0 && jschfscwld_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "jschfscwld_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "fscwld3_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地3'", 1, dw_jzxxx.RowCount());
            var fscwld3_rwbh = dw_rwxz.GetItemString(1, "fscwld3_rwbh");
            var fscwld3_c_rwbh = dw_rwxz.GetItemString(1, "fscwld3_c_rwbh");
            var fscwld3_jd = dw_rwxz.GetItemString(1, "fscwld3_jd");
            var fscwld3_wd = dw_rwxz.GetItemString(1, "fscwld3_wd");
            var fscwld3_fw = dw_rwxz.GetItemNumber(1, "fscwld3_fw");
            var fscwld3_zyxx = dw_rwxz.GetItemString(1, "fscwld3_zyxx");
            if (fscwld3_zyxx == "" || fscwld3_zyxx == null) {
                fscwld3_zyxx = "非市场物流地3";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 7);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地3");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld3_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld3_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld3_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld3_zyxx);
                }
                dw_rwxz.SetItem(1, "fscwld3_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "fscwld3_rwbh", "N");
                    if (fscwld3_rwbh == fscwld3_c_rwbh || fscwld3_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "fscwld3_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "fscwld3_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "fscwld3_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地3'", 1, dw_jzxxx.RowCount());
            var fscwld3_sfxz = dw_rwxz.GetItemString(1, "fscwld3_sfxz");
            var fscwld3_jd = dw_rwxz.GetItemString(1, "fscwld3_jd");
            var fscwld3_wd = dw_rwxz.GetItemString(1, "fscwld3_wd");
            var fscwld3_fw = dw_rwxz.GetItemNumber(1, "fscwld3_fw");
            var fscwld3_zyxx = dw_rwxz.GetItemString(1, "fscwld3_zyxx");
            if (fscwld3_zyxx == "" || fscwld3_zyxx == null) {
                fscwld3_zyxx = "非市场物流地3";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 7);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地3");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld3_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld3_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld3_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld3_zyxx);
                };
                //            if (jschfscwld_sfxz == null || jschfscwld_sfxz == "" || jschfscwld_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jschfscwld_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "fscwld3_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var fscwld3_sfxz = dw_rwxz.GetItemString(1, "fscwld3_sfxz");
                    if (row_find > 0 && fscwld3_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "fscwld3_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "fscwld4_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地4'", 1, dw_jzxxx.RowCount());
            var fscwld4_rwbh = dw_rwxz.GetItemString(1, "fscwld4_rwbh");
            var fscwld4_c_rwbh = dw_rwxz.GetItemString(1, "fscwld4_c_rwbh");
            var fscwld4_jd = dw_rwxz.GetItemString(1, "fscwld4_jd");
            var fscwld4_wd = dw_rwxz.GetItemString(1, "fscwld4_wd");
            var fscwld4_fw = dw_rwxz.GetItemNumber(1, "fscwld4_fw");
            var fscwld4_zyxx = dw_rwxz.GetItemString(1, "fscwld4_zyxx");
            if (fscwld4_zyxx == "" || fscwld4_zyxx == null) {
                fscwld4_zyxx = "非市场物流地4";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 8);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地4");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld4_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld4_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld4_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld4_zyxx);
                }
                dw_rwxz.SetItem(1, "fscwld4_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "fscwld4_rwbh", "N");
                    if (fscwld4_rwbh == fscwld4_c_rwbh || fscwld4_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "fscwld4_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "fscwld4_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "fscwl4_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地4'", 1, dw_jzxxx.RowCount());
            var fscwld4_sfxz = dw_rwxz.GetItemString(1, "fscwld4_sfxz");
            var fscwld4_jd = dw_rwxz.GetItemString(1, "fscwld4_jd");
            var fscwld4_wd = dw_rwxz.GetItemString(1, "fscwld4_wd");
            var fscwld4_fw = dw_rwxz.GetItemNumber(1, "fscwld4_fw");
            var fscwld4_zyxx = dw_rwxz.GetItemString(1, "fscwld4_zyxx");
            if (fscwld4_zyxx == "" || fscwld4_zyxx == null) {
                fscwld4_zyxx = "非市场物流地4";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 8);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地4");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld4_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld4_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld4_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld4_zyxx);
                };
                //            if (jschfscwld_sfxz == null || jschfscwld_sfxz == "" || jschfscwld_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jschfscwld_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "fscwld4_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var fscwld3_sfxz = dw_rwxz.GetItemString(1, "fscwld3_sfxz");
                    if (row_find > 0 && fscwld4_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "fscwld4_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "dc_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '堆场'", 1, dw_jzxxx.RowCount());
            var dc_jd = dw_rwxz.GetItemString(1, "dc_jd");
            var dc_wd = dw_rwxz.GetItemString(1, "dc_wd");
            var dc_fw = dw_rwxz.GetItemNumber(1, "dc_fw");
            var dcdz = dw_rwxz.GetItemString(1, "dcdz");
            if (dcdz == "" || dcdz == null) {
                dcdz = "堆场";
            };

            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 9);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "堆场");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", dc_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", dc_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", dc_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", dcdz);
                }
                dw_rwxz.SetItem(1, "dc_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "dc_rwbh", "N");
                };
            }

        };

    }
    //#endregion


    //#region dw_master entertotab
    this.dw_Master_EntertoTab = function (key, keyflags, dwo) {
        var colname = dwo.GetColumnName();
        if (colname == "ycyymc") {
            return 0
        }
        else {
            return 1
        }
    }

    //#region 双击
    this.dw_rwxz_ButtonClicked = function (Row, dwoName) {
        if (dwoName == "b_sjshr1") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr1");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_sjshr2") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr2");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_sjshr3") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr3");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_sjshr4") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr4");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_dc") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "dc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("hy_wlgz_dcmc");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
    }
    //#endregion


    //#region  dw_cmd_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "dz_dq") {
            var dz_sf = dw_jzxxx.GetItemString(Row, "dz_sf");

            dw_jzxxx.GetChild("dz_dq", dwc_dq);
            dwc_dq.SetFilter("");
            dwc_dq.Filter();

            dwc_dq.SetFilter("prv_name = '" + dz_sf + "'");
            dwc_dq.Filter();

        }

        if (dwoName == "dz_lm") {
            var dz_sf = dw_jzxxx.GetItemString(Row, "dz_sf");
            var dz_dq = dw_jzxxx.GetItemString(Row, "dz_dq");
            dw_jzxxx.GetChild("dz_lm", dwc_lm);
            dwc_lm.SetFilter("");
            dwc_lm.Filter();

            dwc_lm.SetFilter("prv_name = '" + dz_sf + "' and area_name = '" + dz_dq + "'");
            dwc_lm.Filter();

        }

    }
    //#endregion



    //#region  dw_cmd_Clicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
//        if (dwoName == "dz_sf" || dwoName == "dz_dq" || dwoName == "dz_lm") {
//            if (iw_Sfdqlm_Select == null)
//                iw_Sfdqlm_Select = new W_Sfdqlm_Select();
//            var ywy = requestor.GetParm("userid");
//            var ShareMode = requestor.GetParm("ShareMode");
//            var Dlwtf = requestor.GetParm("Dlwtf");
//            var Khbm = "";



//            iw_Sfdqlm_Select.SetDataWindow(dw_jzxxx);
//            iw_Sfdqlm_Select.SetData("wlrw_jzxxx");
//            iw_Sfdqlm_Select.SetRow(Row);

//            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sfdqlm_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Sfdqlm_Select);
//            dw_jzxxx.SetFocus();

//        }

    }
    //#endregion


    //#region 同步生鲜港
    this.Tbsxg = function () {
//        var ywbh = dw_master.GetItemString(1, "ywbh");

//        var cxh = dw_master.GetItemNumber(1, "hddz_cxh");
//        //执行删除的WebService       
//        webReq.SetFunctionID(requestor.GetFunctionID());

//        zdmc = "djydsj,tgjysj,hdcsj";

//        webReq.Invoke("Tbsxg", "ywbh=" + ywbh + "&cxh=" + cxh + "&zdmc=" + zdmc);

//        if (webReq.StatusCode() == 200) {
//            webReq.ResponseText();
//            var num = QsWebSoft.PubMethod.UpdateTbsxgbz(ywbh, "Y").value;
//        }
//        else {
//            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
//        }
    }
    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        requestor.Close();
    }
    //#endregion

}
