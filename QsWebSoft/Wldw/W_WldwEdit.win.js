///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_WldwEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_print_zzsxx= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_lxr= new DataWindow( requestor );
	 var dw_yh= new DataWindow( requestor );
	 var wb_fj= new PBWebBrowser( requestor );
	 var dw_jsbm= new DataWindow( requestor );
	 var dw_ohdlxy= new DataWindow( requestor );
	 var dw_dz= new DataWindow( requestor );
	 var dw_khsdttsz= new DataWindow( requestor ); 
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
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_print_zzsxx == null ) dw_print_zzsxx= new DataWindow( requestor );
		 dw_print_zzsxx.Attach( win.Control( "dw_print_zzsxx") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_lxr == null ) dw_lxr= new DataWindow( requestor );
		 dw_lxr.Attach( win.Control( "dw_lxr") ); 
		 if(dw_yh == null ) dw_yh= new DataWindow( requestor );
		 dw_yh.Attach( win.Control( "dw_yh") ); 
		 if(wb_fj == null ) wb_fj= new PBWebBrowser( requestor );
		 wb_fj.Attach( win.Control( "wb_fj") ); 
		 if(dw_jsbm == null ) dw_jsbm= new DataWindow( requestor );
		 dw_jsbm.Attach( win.Control( "dw_jsbm") ); 
		 if(dw_ohdlxy == null ) dw_ohdlxy= new DataWindow( requestor );
		 dw_ohdlxy.Attach( win.Control( "dw_ohdlxy") ); 
		 if(dw_dz == null ) dw_dz= new DataWindow( requestor );
		 dw_dz.Attach( win.Control( "dw_dz") ); 
		 if(dw_khsdttsz == null ) dw_khsdttsz= new DataWindow( requestor );
		 dw_khsdttsz.Attach( win.Control( "dw_khsdttsz") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

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

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_lxr","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_EntertoTab)=="function") 
			 win.AttachEvent("dw_lxr","KeyDown",self.dw_EntertoTab); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_yh","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_EntertoTab)=="function") 
			 win.AttachEvent("dw_yh","KeyDown",self.dw_EntertoTab); 

		 if(typeof(self.dw_Jsbm_GetFocus)=="function") 
			 win.AttachEvent("dw_jsbm","GetFocus",self.dw_Jsbm_GetFocus); 

		 if(typeof(self.dw_EntertoTab)=="function") 
			 win.AttachEvent("dw_jsbm","KeyDown",self.dw_EntertoTab); 

		 if(typeof(self.dw_ohdlxy_Clicked)=="function") 
			 win.AttachEvent("dw_ohdlxy","Clicked",self.dw_ohdlxy_Clicked); 

		 if(typeof(self.dw_Ohdlxy_GetFocus)=="function") 
			 win.AttachEvent("dw_ohdlxy","GetFocus",self.dw_Ohdlxy_GetFocus); 

		 if(typeof(self.dw_EntertoTab)=="function") 
			 win.AttachEvent("dw_ohdlxy","KeyDown",self.dw_EntertoTab); 

		 if(typeof(self.dw_dz_DoubleClicked)=="function") 
			 win.AttachEvent("dw_dz","DoubleClicked",self.dw_dz_DoubleClicked); 

		 if(typeof(self.dw_dz_GetFocus)=="function") 
			 win.AttachEvent("dw_dz","GetFocus",self.dw_dz_GetFocus); 

		 if(typeof(self.dw_EntertoTab)=="function") 
			 win.AttachEvent("dw_dz","KeyDown",self.dw_EntertoTab); 

		 if(typeof(self.dw_khsdttsz_DoubleClicked)=="function") 
			 win.AttachEvent("dw_khsdttsz","DoubleClicked",self.dw_khsdttsz_DoubleClicked); 

		 if(typeof(self.dw_khsdttsz_GetFocus)=="function") 
			 win.AttachEvent("dw_khsdttsz","GetFocus",self.dw_khsdttsz_GetFocus); 

		 if(typeof(self.dw_EntertoTab)=="function") 
			 win.AttachEvent("dw_khsdttsz","KeyDown",self.dw_EntertoTab); 

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

		 if(typeof(self.Print_Zzsxx)=="function") 
			 win.AttachEvent("btn_Print_Zzsxx","Clicked",self.Print_Zzsxx); 

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
		 dw_log.Detach(); dw_log=null; 
		 dw_print_zzsxx.Detach(); dw_print_zzsxx=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_lxr.Detach(); dw_lxr=null; 
		 dw_yh.Detach(); dw_yh=null; 
		 wb_fj.Detach(); wb_fj=null; 
		 dw_jsbm.Detach(); dw_jsbm=null; 
		 dw_ohdlxy.Detach(); dw_ohdlxy=null; 
		 dw_dz.Detach(); dw_dz=null; 
		 dw_khsdttsz.Detach(); dw_khsdttsz=null; 
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
    var iw_Wldw_Select = null;

    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Wldw.ashx");

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

        tb_1.SetEnabled("btn_save", bEditFlag);

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_lxr.Modify("DataWindow.Readonly=no");
            dw_yh.Modify("DataWindow.Readonly=no");
            dw_jsbm.Modify("DataWindow.Readonly=no");
            dw_ohdlxy.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_lxr.Modify("DataWindow.Readonly=yes");
            dw_yh.Modify("DataWindow.Readonly=yes");
            dw_jsbm.Modify("DataWindow.Readonly=yes");
            dw_ohdlxy.Modify("DataWindow.Readonly=yes");
        };
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
            };
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            };

            if (operation == "open") {
                self.SetEditMode("open");
            }
        }
        else {
            self.SetEditMode("Show");
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
        this.dw_Jsbm_GetFocus = function (sender) {
            lastdw.Attach(sender);
        };
        //#endregion

        //#region 获得数据窗口的焦点
        var lastdw = new DataWindow();
        this.dw_dz_GetFocus = function (sender) {
            lastdw.Attach(sender);
        };
        //#endregion

        //#region 获得数据窗口的焦点
        var lastdw = new DataWindow();
        this.dw_Ohdlxy_GetFocus = function (sender) {
            lastdw.Attach(sender);
        };
        //#endregion

        //#region 获得数据窗口的焦点
        var lastdw = new DataWindow();
        this.dw_khsdttsz_GetFocus = function (sender) {
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

        //#region 存盘
        this.Save = function ()
        {
            if ( editMode == "show" )
                return;
            if ( dw_master.AcceptText() != 1 )
                return;
            if ( dw_lxr.AcceptText() != 1 )
                return;
            if ( dw_yh.AcceptText() != 1 )
                return;
            if ( dw_jsbm.AcceptText() != 1 )
                return;
            if ( dw_ohdlxy.AcceptText() != 1 )
                return;
            if ( dw_dz.AcceptText() != 1 )
                return;
            if ( dw_khsdttsz.AcceptText() != 1 )
                return;
            if ( ( dw_master.ModifiedCount() + dw_lxr.ModifiedCount() + dw_lxr.DeletedCount() + dw_yh.ModifiedCount() + dw_yh.DeletedCount() + dw_jsbm.ModifiedCount() + dw_jsbm.DeletedCount() + dw_ohdlxy.ModifiedCount() + dw_ohdlxy.DeletedCount() + dw_dz.ModifiedCount() + dw_dz.DeletedCount() + dw_khsdttsz.ModifiedCount() + dw_khsdttsz.DeletedCount() ) <= 0 )
            {
                alert( "没有数据需要保存!" );
                return;
            }


            //            var data1 = dw_master.GetItemString(1, "khmc");
            //            var data2 = dw_master.GetItemString(1, "khmc_yw");

            //            var num = QsWebSoft.PubMethod.khmc_zyw("khmc", data1).value;
            //               
            //                if (num == 1) {
            //                    requestor.MessageBox("提示", data1 + "已存在，不能添加！");
            //                    
            //                    return;
            //                }


            //                var num = QsWebSoft.PubMethod.khmc_zyw("khmc_yw", data2).value;
            //              
            //                if (num == 1) {
            //                    alert(data2 + "已存在，不能添加！");
            //                    return;
            //                }






            var gwgys = dw_master.GetItemString( 1, "gwgys" );
            var gncgs = dw_master.GetItemString( 1, "gncgs" );
            var wmgs = dw_master.GetItemString( 1, "wmgs" );
            var hdgs = dw_master.GetItemString( 1, "hdgs" );
            var bggs = dw_master.GetItemString( 1, "bggs" );
            var bjgs = dw_master.GetItemString( 1, "bjgs" );
            var jyj = dw_master.GetItemString( 1, "jyj" );
            var jyd = dw_master.GetItemString( 1, "jyd" );
            var jyfwgs = dw_master.GetItemString( 1, "jyfwgs" );
            var cgsorhkgs = dw_master.GetItemString( 1, "cgsorhkgs" );
            var cdorhd = dw_master.GetItemString( 1, "cdorhd" );
            var cd = dw_master.GetItemString( 1, "cd" );
            var mt = dw_master.GetItemString( 1, "mt" );
            var hymt = dw_master.GetItemString( 1, "hymt" );
            var cgsfxd = dw_master.GetItemString( 1, "cgsfxd" );
            var dc = dw_master.GetItemString( 1, "dc" );
            var fxgs = dw_master.GetItemString( 1, "hdgs" );
            var yh = dw_master.GetItemString( 1, "yh" );
            var hg = dw_master.GetItemString( 1, "hg" );
            var qt = dw_master.GetItemString( 1, "qt" );
            if ( ( gwgys == "0" ) && ( gncgs == "0" ) && ( wmgs == "0" ) && ( hdgs == "0" ) && ( bggs == "0" ) && ( bjgs == "0" ) && ( jyj == "0" )
             && ( jyd == "0" ) && ( jyfwgs == "0" ) && ( cgsorhkgs == "0" ) && ( cdorhd == "0" ) && ( cd == "0" ) && ( mt == "0" ) && ( cgsfxd == "0" )
             && ( dc == "0" ) && ( fxgs == "0" ) && ( yh == "0" ) && ( hg == "0" ) && ( qt == "0" ) )
            {
                alert( "请输入选择客户类型!" );
                dw_master.SetFocus();
                return;
            }


            var khjc = dw_master.GetItemString( 1, "khjc" );
            if ( khjc == null || khjc == "" )
            {
                alert( "请填写简称" );
                return;
            }


            var khmc = dw_master.GetItemString( 1, "khmc" );
            var khmc_yw = dw_master.GetItemString( 1, "khmc_yw" );
            if ( ( khmc == null || khmc == "" ) && ( khmc_yw == null || khmc_yw == "" ) )
            {
                if ( khmc == null || khmc == "" )
                {
                    alert( "请输入往来单位名称!" );
                    dw_master.SetFocus();
                    dw_master.SetColumn( "khmc" )
                    return;

                }
                if ( khmc_yw == null || khmc_yw == "" )
                {
                    alert( "请输入往来单位英文名称!" );
                    dw_master.SetFocus();
                    dw_master.SetColumn( "khmc_yw" )
                    return;
                }

            }



            if ( khmc.indexOf( "待定" ) > 0 || khmc == "待定" || khjc == "待定" )
            {
                var zs = 0;
                if ( ( parseInt( gncgs ) + parseInt( gwgys ) + parseInt( wmgs ) ) > 1 )
                {
                    zs = zs + 1;
                }
                if ( parseInt( cgsorhkgs ) > 1 )
                {
                    zs = zs + 1;
                }
                if ( ( parseInt( mt ) + parseInt( hymt ) ) > 1 )
                {
                    zs = zs + 1;
                }
                if ( parseInt( hg ) > 1 )
                {
                    zs = zs + 1;
                }

                if ( zs > 1 )
                {
                    alert( "待定的客户只能一个类型，需要增加其他类型则再新建一个往来单位!" );
                    return;
                }
            }


            var yw_khbm = dw_master.GetItemString( 1, "yw_khbm" );
            var ym = dw_master.GetItemString( 1, "ym" );
            var ymjg = QsWebSoft.PubMethod.ReadWldwYm( yw_khbm, ym ).value;

            if ( ymjg == "Y" )
            {
                alert( "页码已经被使用，请检查!" );
                dw_master.SetFocus();
                dw_master.SetColumn( "ym" )
                return;
            }


            //            var address = dw_master.GetItemString(1, "address");
            //            var address_yw = dw_master.GetItemString(1, "address_yw");
            //            if (address == null || address == "" ) {
            //                alert("请输入往来单位地址!");
            //                dw_master.SetFocus();
            //                dw_master.SetColumn("address")
            //                return;
            //            }


            var row = dw_master.GetRow();
            var yw_khbm = dw_master.GetItemString( row, "yw_khbm" );
            var khmc = dw_master.GetItemString( row, "khmc" );
            var pym = QsWebSoft.PubMethod.GetPYString( khmc ).value;
            var pym_yw = QsWebSoft.PubMethod.GetPYString( khmc_yw ).value;
            dw_master.SetItem( row, "pym", pym );
            dw_master.SetItem( row, "pym_yw", pym_yw );

            //更新行号
            for ( row = dw_lxr.RowCount(); row > 0; row-- )
            {

                dw_lxr.SetItem( row, "cxh", row );
                dw_lxr.SetItem( row, "yw_khbm", yw_khbm );
            }

            for ( row = dw_yh.RowCount(); row > 0; row-- )
            {

                dw_yh.SetItem( row, "cxh", row );
                dw_yh.SetItem( row, "yw_khbm", yw_khbm );
            }

            for ( row = dw_jsbm.RowCount(); row > 0; row-- )
            {
                dw_jsbm.SetItem( row, "cxh", row );
                dw_jsbm.SetItem( row, "yw_khbm", yw_khbm );
            }

            for ( row = dw_ohdlxy.RowCount(); row > 0; row-- )
            {
                dw_ohdlxy.SetItem( row, "cxh", row );
                dw_ohdlxy.SetItem( row, "yw_khbm", yw_khbm );
                var ksrq = dw_ohdlxy.GetItemDate( row, "ksrq" );
                var ksrq_max = dw_ohdlxy.GetItemDate( dw_ohdlxy.RowCount(), "ksrq_max" );

                if ( ksrq == ksrq_max )
                {
                    dw_ohdlxy.SetItem( row, "sfyx", "Y" );
                } else
                {
                    dw_ohdlxy.SetItem( row, "sfyx", "N" );
                };

                var jdr = dw_ohdlxy.GetItemString( row, "jdr" );
                if ( jdr == null || jdr == "" )
                { 
                   alert("协议时间维护中的第"+ row + "行请输入接单人！")
                }

            };

            for ( row = dw_dz.RowCount(); row > 0; row-- )
            {
                dw_dz.SetItem( row, "cxh", row );
                dw_dz.SetItem( row, "yw_khbm", yw_khbm );
            }

            var dw_master_data = dw_master.GetChanges();
            var dw_lxr_data = dw_lxr.GetChanges();
            var dw_yh_data = dw_yh.GetChanges();
            var dw_jsbm_data = dw_jsbm.GetChanges();
            var dw_ohdlxy_data = dw_ohdlxy.GetChanges();
            var dw_dz_data = dw_dz.GetChanges();
            var dw_khsdttsz_data = dw_khsdttsz.GetChanges();
            if ( dw_master_data == "" && dw_lxr_data == "" && dw_yh_data == "" && dw_jsbm_data == "" && dw_ohdlxy_data == "" && dw_dz_data == "" && dw_khsdttsz_data == "" )
                return;

            var khmc = dw_master.GetItemString( 1, "khmc" )
            var khywmc = dw_master.GetItemString( 1, "khmc_yw" )
            var yw_khbm = dw_master.GetItemString( 1, "yw_khbm" );
            var exists = QsWebSoft.PubMethod.CheckKhmc( yw_khbm, khmc, khywmc ).value;
            if ( exists > 0 )
            {
                requestor.MessageBox( "提示", "客户已经存在,不能保存!" );
                return;
            }

            //数据同步生鲜港
            //            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {
            var yw_khbm = dw_master.GetItemString( 1, "yw_khbm" );
            var row = dw_log.InsertRow( 0 );
            //var maxNumber =  self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString( row, "eid_max" ) //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem( row, "eid", serialNumber );
            dw_log.SetItem( row, "tablename", "yw_wldw" );
            //                dw_log.SetItem(row, "changecols", "hgfxfs,hgfxsj");
            dw_log.SetItem( row, "mainid", yw_khbm );
            dw_log.ScrollToRow( row );
            //            }


            dw_log.AcceptText()
            var dw_log_data = dw_log.GetChanges();
            if ( dw_log_data == "" )
                return;

            //执行保存的WebService
            webReq.SetFunctionID( requestor.GetFunctionID() );
            webReq.Invoke( "Save", "dw_Master=" + dw_master_data + "&dw_lxr=" + dw_lxr_data + "&dw_yh=" + dw_yh_data + "&dw_jsbm=" + dw_jsbm_data + "&dw_ohdlxy=" + dw_ohdlxy_data + "&dw_dz=" + dw_dz_data + "&dw_khsdttsz=" + dw_khsdttsz_data + "&dw_log=" + dw_log_data + "&yw_khbm=" + yw_khbm + "&operation=" + editMode );

            if ( webReq.StatusCode() == 200 )
            {
                //服务器成功处理，返回单号
                var yw_khbm = webReq.ResponseText();
                dw_master.SetItem( 1, "yw_khbm", yw_khbm );
                dw_master.ResetUpdate();
                dw_log.ResetUpdate();
                requestor.MessageBox( "提示", "数据保存成功!" );
                var num = QsWebSoft.PubMethod.UpdateOhdlxy().value;
                self.Exit();
            }
            else
            {
                requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
                dw_master.SetFocus();
            };
        };
//        //#endregion
//        this.dw_master_ItemChanged = function (Row, dwoName, data) {
//            if (dwoName == "khmc") {
//                var num = QsWebSoft.PubMethod.khmc_zyw("khmc", data).value;
//                alert(num);
//                if (num == 1) {
//                    requestor.MessageBox("提示", data + "已存在，不能添加！");
//                    dw_master.SetItem(Row, "khmc", "");
//                    dw_master.AcceptText();
//                    return;
//                }
//            }
//            if (dwoName == "khmc_yw") {
//                var num = QsWebSoft.PubMethod.khmc_zyw("khmc_yw", data).value;
//                alert(num);
//                if (num == 1) {
//                    alert(data + "已存在，不能添加！");
//                    return;
//                }
//            }
//        }
   //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();


        if ((dw_master.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion

    //#region 打印增值税信息
    this.Print_Zzsxx = function () {
        var row = dw_master.GetRow();
        if (row <= 0)
            return;
        dw_print_zzsxx.Retrieve(dw_master.GetItemString(dw_master.GetRow(), "yw_khbm"));
        dw_print_zzsxx.PrintPreview();
    }
    //#endregion

        //#region 打印 
        this.Print = function () {
            var yw_khbm = dw_master.GetItemString(1, "yw_khbm");
            dw_print.Retrieve(yw_khbm);
            dw_print.PrintPreview();
        }
        //#endregion



        //#region 新建
        this.Add = function () {
            dw_master.Reset();
            dw_master.InsertRow(0);
            dw_lxr.Reset();
            dw_lxr.InsertRow(0);
            dw_yh.Reset();
            dw_yh.InsertRow(0);
            dw_jsbm.Reset();
            //            dw_jsbm.InsertRow(0);
            dw_ohdlxy.Reset();
            dw_dz.Reset();
            var userid = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
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
            var date = new Date();
            dw_master.SetItem(1, "sqr", userid);
            dw_master.SetItem(1, "ywy", ywy);
            dw_master.SetItem(1, "bm", bm);
            dw_master.SetItem(1, "sqrq", date.getDate());
            dw_master.SetItem(1,"dlwtf",Dlwtf)
        }
        //#endregion

        //#region 复制
        this.Copy = function () {
            var userid = requestor.GetParm("userid");
            var date = new Date();
            dw_master.SetItem(1, "yw_khbm", "");
            dw_master.SetItem(1, "sqr", userid);
            dw_master.SetItem(1, "sqrq", date.getDate());
            dw_master.SetItem(1, "state", "新制");
            dw_master.SetItem(1, "spjc", "未审批");
            self.SetEditMode("copy");
        }
        //#endregion

        //#region 双击选择
        this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;
            if (dwoName == "mdka_t") {
                if (iw_Eport_Select == null)
                    iw_Eport_Select = new W_Eport_Select();
                iw_Eport_Select.SetDataWindow(dw_master);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
                dw_master.SetFocus();
            };


            if (dwoName == "country_t") {
                if (iw_Country_Select == null)
                    iw_Country_Select = new W_Country_Select();
                iw_Country_Select.SetDataWindow(dw_master);
                iw_Country_Select.SetData("country");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
                dw_master.SetFocus();
            }

            if (dwoName == "tybm" || dwoName == "tymc" || dwoName == "tybm_t" || dwoName == "tymc_t") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "";
                var tybm = dw_master.GetItemString(1, "tybm")
                var yw_khbm = dw_master.GetItemString(1, "yw_khbm")
                if (tybm == null) {
                    tybm = "";
                }
                if (yw_khbm == null) {
                    yw_khbm = "";
                }
                var tybmts = dw_master.GetItemNumber(1, "tybmts");
                var sfpd = dw_master.GetItemNumber(1, "sfpd");
                if (tybmts > 1 && sfpd > 0) {
                    requestor.MessageBox("提示", "如需要更改统一编码，到信息查询-国内客户管理中更改！");
                    return;
                }
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("wldw_tybm");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();


            }

            if (dwoName == "wtkhbm_t" || dwoName == "wtkhbm" || dwoName == "wtkhmc_t" || dwoName == "wtkhmc") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "wts";

                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("wldw_wtkh");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();


            }

            if (dwoName == "t_mrjyd" || dwoName == "mrjydjc") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "jy_mrjyd";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("wldw_jy_mrjyd");
                iw_Wldw_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        };
        //#endregion

        //#region 双击选择
        this.dw_dz_DoubleClicked = function (xPos, yPos, Row, dwoName) {
            if (dwoName == "ycd" ) {
                if (iw_Country_Select == null)
                    iw_Country_Select = new W_Country_Select();
                iw_Country_Select.SetDataWindow(dw_dz);
                iw_Country_Select.SetRow(Row); 
                iw_Country_Select.SetData("wldw_ycd");
 
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
                dw_dz.SetFocus();

            } 
        }

        //#region 双击选择
        this.dw_khsdttsz_DoubleClicked = function (xPos, yPos, Row, dwoName) {
            if (dwoName == "khjc") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "wts";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_khsdttsz);
                iw_Wldw_Select.SetData("wldw_khjc_khsdttsz");
                iw_Wldw_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (dwoName == "shdwjc") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "wts";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_khsdttsz);
                iw_Wldw_Select.SetData("wldw_shdwjc_khsdttsz");
                iw_Wldw_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        }

        //#region 添加明细
        this.AddRow = function () {

            if (lastdw.GetName() == "dw_lxr") {
                var row = dw_lxr.InsertRow(0);
                dw_lxr.ScrollToRow(row);
                dw_lxr.SetFocus();
            }

            if (lastdw.GetName() == "dw_yh") {
                var row = dw_yh.InsertRow(0);
                dw_yh.ScrollToRow(row);
                dw_yh.SetFocus();
            }

            if (lastdw.GetName() == "dw_jsbm") {
                var row = dw_jsbm.InsertRow(0);
                dw_jsbm.ScrollToRow(row);
                dw_jsbm.SetFocus();
            }

            if (lastdw.GetName() == "dw_ohdlxy") {
                var row = dw_ohdlxy.InsertRow(0);
                dw_ohdlxy.ScrollToRow(row);
                dw_ohdlxy.SetFocus();
            }

            if (lastdw.GetName() == "dw_dz") {
                var row = dw_dz.InsertRow(0);
                dw_dz.ScrollToRow(row);
                dw_dz.SetFocus();
            }

            if (lastdw.GetName() == "dw_khsdttsz") {
                var row = dw_khsdttsz.InsertRow(0);
                dw_khsdttsz.ScrollToRow(row);
                dw_khsdttsz.SetFocus();
            }
        }
        //#endregion

        //#region 删除商品
        this.DeleteRow = function () {
            var row = lastdw.GetRow();
            if (row <= 0)
                return;

            if (lastdw.GetName() == "dw_lxr") {

                var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }
                lastdw.DeleteRow(row);
            }

            if (lastdw.GetName() == "dw_yh") {
                var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }
                lastdw.DeleteRow(row);
            }


            if (lastdw.GetName() == "dw_jsbm") {
                var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }
                lastdw.DeleteRow(row);
            }

            if (lastdw.GetName() == "dw_ohdlxy") {
                var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }
                lastdw.DeleteRow(row);
            }

            if (lastdw.GetName() == "dw_dz") {
                var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }
                lastdw.DeleteRow(row);
            }

            if (lastdw.GetName() == "dw_khsdttsz") {
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
            if (lastdw.GetName() == 'dw_lxr') {
                var row = dw_lxr.GetRow();
                if (row <= 0)
                    return;
                dw_lxr.RowsCopy(row, row, DWBUFFER.Primary, dw_lxr, row + 1, DWBUFFER.Primary)
                dw_lxr.ScrollToRow(row + 1);
            }
            if (lastdw.GetName() == 'dw_yh') {
                var row = dw_spxx.GetRow();
                if (row <= 0)
                    return;
                dw_yh.RowsCopy(row, row, DWBUFFER.Primary, dw_yh, row + 1, DWBUFFER.Primary)
                dw_yh.ScrollToRow(row + 1);
            }
            if (lastdw.GetName() == 'dw_jsbm') {
                var row = dw_spxx.GetRow();
                if (row <= 0)
                    return;
                dw_jsbm.RowsCopy(row, row, DWBUFFER.Primary, dw_jsbm, row + 1, DWBUFFER.Primary)
                dw_jsbm.ScrollToRow(row + 1);
            }
            if (lastdw.GetName() == 'dw_ohdlxy') {
                var row = dw_spxx.GetRow();
                if (row <= 0)
                    return;
                dw_ohdlxy.RowsCopy(row, row, DWBUFFER.Primary, dw_ohdlxy, row + 1, DWBUFFER.Primary)
                dw_ohdlxy.ScrollToRow(row + 1);
            }
            if (lastdw.GetName() == 'dw_dz') {
                var row = dw_dz.GetRow();
                if (row <= 0)
                    return;
                dw_dz.RowsCopy(row, row, DWBUFFER.Primary, dw_dz, row + 1, DWBUFFER.Primary)
                dw_dz.ScrollToRow(row + 1);
            }
            if (lastdw.GetName() == 'dw_khsdttsz') {
                var row = dw_khsdttsz.GetRow();
                if (row <= 0)
                    return;
                dw_khsdttsz.RowsCopy(row, row, DWBUFFER.Primary, dw_khsdttsz, row + 1, DWBUFFER.Primary)
                dw_khsdttsz.ScrollToRow(row + 1);
            }
        }
        //#endregion

        //#region 插入商品
        this.InsertRow = function () {
            if (lastdw.GetName() == "dw_lxr") {
                var row = dw_lxr.InsertRow(dw_lxr.GetRow());
                dw_lxr.ScrollToRow(row);
                dw_lxr.SetFocus();
            }
            if (lastdw.GetName() == "dw_yh") {
                var row = dw_yh.InsertRow(dw_yh.GetRow());
                dw_yh.ScrollToRow(row);
                dw_yh.SetFocus();
            }
            if (lastdw.GetName() == "dw_jsbm") {
                var row = dw_jsbm.InsertRow(dw_jsbm.GetRow());
                dw_jsbm.ScrollToRow(row);
                dw_jsbm.SetFocus();
            }
            if (lastdw.GetName() == "dw_ohdlxy") {
                var row = dw_ohdlxy.InsertRow(dw_jsbm.GetRow());
                dw_ohdlxy.ScrollToRow(row);
                dw_ohdlxy.SetFocus();
            }

            if (lastdw.GetName() == "dw_dz") {
                var row = dw_dz.InsertRow(dw_dz.GetRow());
                dw_dz.ScrollToRow(row);
                dw_dz.SetFocus();
            }

            if (lastdw.GetName() == "dw_khsdttsz") {
                var row = dw_khsdttsz.InsertRow(dw_khsdttsz.GetRow());
                dw_khsdttsz.ScrollToRow(row);
                dw_khsdttsz.SetFocus();
            }
        }
        //#endregion

        //#region tabselect
        this.Tab_Select = function () {
            var bEditFlag = false;
            if (tab_1.GetSelectedTab() == 1) {
                var bEditFlag = false;
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);

            }
            if (tab_1.GetSelectedTab() == 2) {
                if (dw_lxr.RowCount() == 0) {
                    dw_lxr.InsertRow(0);
                    dw_lxr.SetFocus();
                }
                if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                    bEditFlag = true;
                }
                else {
                    bEditFlag = false;
                };
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
            }
            if (tab_1.GetSelectedTab() == 3) {
                if (dw_yh.RowCount() == 0) {
                    dw_yh.InsertRow(0);
                    dw_yh.SetFocus();
                }
                if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                    bEditFlag = true;
                }
                else {
                    bEditFlag = false;
                };
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
            }

            if (tab_1.GetSelectedTab() == 4) {

                var lx = "Wldw";
                var gjz = dw_master.GetItemString(1, "yw_khbm");
                var user = requestor.GetParm("userid");
                if (gjz == null || gjz == "") {
                    alert("数据还未保存，不能添加附件，请先存盘!");
                    return;
                }
                else {
                    wb_fj.Navigate("/WebExplorer.htm?lx=" + lx + "&gjz=" + gjz + "&user=" + user);
                }
            }

            if (tab_1.GetSelectedTab() == 5) {
                if (dw_jsbm.RowCount() == 0) {
//                    dw_jsbm.InsertRow(0);
                    dw_jsbm.SetFocus();
                }
                if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                    bEditFlag = true;
                }
                else {
                    bEditFlag = false;
                };
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
            }

            if (tab_1.GetSelectedTab() == 6) {
                if (dw_ohdlxy.RowCount() == 0) {                   
                    dw_ohdlxy.SetFocus();
                }
                if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                    bEditFlag = true;
                }
                else {
                    bEditFlag = false;
                };
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
            }

            if (tab_1.GetSelectedTab() == 7) {
                if (dw_dz.RowCount() == 0) {
                   
                    dw_dz.SetFocus();
                }
                if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                    bEditFlag = true;
                }
                else {
                    bEditFlag = false;
                };
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
            }
        };
        //#endregion

        //#region 附件上传
        this.UploadFile = function () {
            //            requestor.ShowModalDialog("/UploadFile.aspx", null, null);


        }
        //#endregion

};