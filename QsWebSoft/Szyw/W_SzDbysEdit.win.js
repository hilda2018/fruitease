///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_SzDbysEdit() {

    var self = this;
    var requestor = new PBWindow();
    var dw_log = new DataWindow(requestor);
    var tab_1 = new TabControl(requestor);
    var dw_jzxxx = new DataWindow(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_cb_cmd = new DataWindow(requestor);
    var sle_ts = new SingleLineEdit(requestor);
    var dw_master = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_jzxxx = new DataStore(requestor);
    var ds_2 = new DataStore(requestor);
    var ds_hydcf = new DataStore(requestor);
    var ds_master = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
        if (tab_1 == null) tab_1 = new TabControl(requestor);
        tab_1.Attach(win.Control("tab_1"));
        if (dw_jzxxx == null) dw_jzxxx = new DataWindow(requestor);
        dw_jzxxx.Attach(win.Control("dw_jzxxx"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_cb_cmd == null) dw_cb_cmd = new DataWindow(requestor);
        dw_cb_cmd.Attach(win.Control("dw_cb_cmd"));
        if (sle_ts == null) sle_ts = new SingleLineEdit(requestor);
        sle_ts.Attach(win.Control("sle_ts"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_jzxxx == null) ds_jzxxx = new DataStore(requestor);
        ds_jzxxx.Attach(win.Control("ds_jzxxx"));
        if (ds_2 == null) ds_2 = new DataStore(requestor);
        ds_2.Attach(win.Control("ds_2"));
        if (ds_hydcf == null) ds_hydcf = new DataStore(requestor);
        ds_hydcf.Attach(win.Control("ds_hydcf"));
        if (ds_master == null) ds_master = new DataStore(requestor);
        ds_master.Attach(win.Control("ds_master"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.Tab_Select) == "function")
            win.AttachEvent("tab_1", "Clicked", self.Tab_Select);

        if (typeof (self.dw_jzxxx_DoubleClicked) == "function")
            win.AttachEvent("dw_jzxxx", "DoubleClicked", self.dw_jzxxx_DoubleClicked);

        if (typeof (self.dw_jzxxx_GetFocus) == "function")
            win.AttachEvent("dw_jzxxx", "GetFocus", self.dw_jzxxx_GetFocus);

        if (typeof (self.dw_jzxxx_ItemChanged) == "function")
            win.AttachEvent("dw_jzxxx", "ItemChanged", self.dw_jzxxx_ItemChanged);

        if (typeof (self.dw_cb_Clicked) == "function")
            win.AttachEvent("dw_cb_cmd", "Clicked", self.dw_cb_Clicked);

        if (typeof (self.dw_master_Clicked) == "function")
            win.AttachEvent("dw_master", "Clicked", self.dw_master_Clicked);

        if (typeof (self.dw_master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_master_ItemChanged);

        if (typeof (self.Sp) == "function")
            win.AttachEvent("btn_sp", "Clicked", self.Sp);

        if (typeof (self.Cxsp) == "function")
            win.AttachEvent("btn_cxsp", "Clicked", self.Cxsp);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.AddRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.AddRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.RowCopy) == "function")
            win.AttachEvent("btn_rowcopy", "Clicked", self.RowCopy);

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowinsert", "Clicked", self.InsertRow);

        if (typeof (self.dw_cmd_RowNext) == "function")
            win.AttachEvent("btn_rownext", "Clicked", self.dw_cmd_RowNext);

        if (typeof (self.dw_cmd_RowBack) == "function")
            win.AttachEvent("btn_rowback", "Clicked", self.dw_cmd_RowBack);

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_print", "Clicked", self.Print);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_log.Detach(); dw_log = null;
        tab_1.Detach(); tab_1 = null;
        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_print.Detach(); dw_print = null;
        dw_cb_cmd.Detach(); dw_cb_cmd = null;
        sle_ts.Detach(); sle_ts = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_jzxxx.Detach(); ds_jzxxx = null;
        ds_2.Detach(); ds_2 = null;
        ds_hydcf.Detach(); ds_hydcf = null;
        ds_master.Detach(); ds_master = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iW_Szyw_Dbys_Select = null;
    var dwc = new DataWindowChild();
    var iw_Wldw_Select = null;
    var iw_Wldw_Zfdx_Select = null;
    var iw_Wldw_Yh_Select = null;
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl( "/Service/Szyw_Dbys.ashx" );

    
    
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
                self.SetEditMode( "open" );
                self.Add();
                dw_master.Modify("id.Tabsequence=0");
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else
        {
            self.Add();
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





    this.dw_cb_Clicked = function ( xPos, yPos, Row, dwoName )
    {
        dw_cb_cmd.AcceptText();
        dw_jzxxx.AcceptText();
        if ( dwoName == "b_scys" )
        {
            for ( row = 1; row <= dw_cb_cmd.RowCount(); row++ )
            {
                var xz = dw_cb_cmd.GetItemString( row, "xz" );
                var yshdfygjbh = dw_cb_cmd.GetItemString( row, "yshdfygjbh" );
                if ( xz == "Y" && (yshdfygjbh == null || yshdfygjbh == "") )
                {
                    var sqdbh = dw_cb_cmd.GetItemString( row, "sqdbh" );
                    var cxh = dw_cb_cmd.GetItemNumber( row, "cxh" );
                    var jzxh = dw_cb_cmd.GetItemString( row, "jzxh" );
                    var ztdh = dw_cb_cmd.GetItemString( row, "ztdh" );
                    var ywbh = dw_cb_cmd.GetItemString( row, "ywbh" );
                    var fybm = dw_cb_cmd.GetItemString( row, "fybm" );
                    var fymc = dw_cb_cmd.GetItemString( row, "fymc" );
                    var wbbb = dw_cb_cmd.GetItemString( row, "wbbb" );
                    var je = dw_cb_cmd.GetItemNumber( row, "je" );
                     var li_find = dw_jzxxx.Find( "sqdbh = '" + sqdbh + "' and cxh_sqdbh = " + cxh.toString(),1,dw_jzxxx.RowCount() );
                    if ( li_find > 0 )
                    {
                        alert("第"+row.toString()+"行的选择已经录入过，不能选择")
                    } else
                    {
                        var jzxxx_row = dw_jzxxx.InsertRow( 0 );
                        dw_jzxxx.SetItem( jzxxx_row, "sqdbh", sqdbh );
                        dw_jzxxx.SetItem( jzxxx_row, "cxh_sqdbh", cxh );
                        dw_jzxxx.SetItem( jzxxx_row, "jzxh", jzxh );
                        dw_jzxxx.SetItem( jzxxx_row, "ztdh", ztdh );
                        dw_jzxxx.SetItem( jzxxx_row, "ywbh", ywbh );
                        dw_jzxxx.SetItem( jzxxx_row, "fybm", fybm );
                        dw_jzxxx.SetItem( jzxxx_row, "fymc", fymc );
                        dw_jzxxx.SetItem( jzxxx_row, "fyje", je );
                    }
                }
            }
        }

    }

 
     
         


    //#region 存盘
    this.Save = function ()
    {
        if ( editMode == "show" )
            return;

        if ( dw_master.AcceptText() != 1 )
            return;

        if ( dw_jzxxx.AcceptText() != 1 )
            return;

        if ( ( dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() ) <= 0 )
        {
            alert( "没有数据需要保存!" );
            return;
        }

        var row = dw_master.GetRow();
        var yshdfygjbh = dw_master.GetItemString( row, "yshdfygjbh" );
        if ( dw_jzxxx.RowCount() > 0 )
        {
            var je_sum = dw_jzxxx.GetItemNumber( 1, "fyje_sum" )
            dw_master.SetItem( 1, "fyje", je_sum );

            var dcf_sum = dw_jzxxx.GetItemNumber( 1, "dcf_sum" )
            dw_master.SetItem( 1, "dcf", dcf_sum );

            var ddfy_sum = dw_jzxxx.GetItemNumber( 1, "ddfy_sum" )
            dw_master.SetItem( 1, "ddfy", ddfy_sum );
            var sjdgf_sum = dw_jzxxx.GetItemNumber( 1, "sjdgf_sum" )
            dw_master.SetItem( 1, "sjdgf", sjdgf_sum );
            var hyf_sum = dw_jzxxx.GetItemNumber( 1, "hyf_sum" )
            dw_master.SetItem( 1, "hyf", hyf_sum );
            var mtf_sum = dw_jzxxx.GetItemNumber( 1, "mtf_sum" )
            dw_master.SetItem( 1, "mtf", mtf_sum );
            var wjf_sum = dw_jzxxx.GetItemNumber( 1, "wjf_sum" ) 
            dw_master.SetItem( 1, "wjf", wjf_sum );
            var zgcz_sum = dw_jzxxx.GetItemNumber( 1, "zgcz_sum" )
            dw_master.SetItem( 1, "zgcz", zgcz_sum );
            var jgjz_sum = dw_jzxxx.GetItemNumber( 1, "jgjz_sum" )
            dw_master.SetItem( 1, "jgjz", jgjz_sum );
            var gbf_sum = dw_jzxxx.GetItemNumber( 1, "gbf_sum" )
            dw_master.SetItem( 1, "gbf", gbf_sum );
            var df_sum = dw_jzxxx.GetItemNumber( 1, "df_sum" )
            dw_master.SetItem( 1, "df", df_sum );
            var yf_sum = dw_jzxxx.GetItemNumber( 1, "yf_sum" )
            dw_master.SetItem( 1, "yf", yf_sum );
            var jcf_sum = dw_jzxxx.GetItemNumber( 1, "jcf_sum" )  
            dw_master.SetItem( 1, "jcf", jcf_sum );
            var sj_sum = dw_jzxxx.GetItemNumber( 1, "sj_sum" )
             dw_master.SetItem( 1, "sj", sj_sum );
            var qtfy_sum = dw_jzxxx.GetItemNumber( 1, "qtfy_sum" )
            dw_master.SetItem( 1, "qtfy", qtfy_sum );
            var dlf_sum = dw_jzxxx.GetItemNumber( 1, "dlf_sum" )
            dw_master.SetItem( 1, "dlf", dlf_sum );
            var tcf_sum = dw_jzxxx.GetItemNumber( 1, "tcf_sum" )
            dw_master.SetItem( 1, "tcf", tcf_sum );
            var xgf_sum = dw_jzxxx.GetItemNumber( 1, "xgf_sum" )
            dw_master.SetItem( 1, "xgf", xgf_sum );
            var bgfwf_sum = dw_jzxxx.GetItemNumber( 1, "bgfwf_sum" )
            dw_master.SetItem( 1, "bgfwf", bgfwf_sum );
            var zjf_sum = dw_jzxxx.GetItemNumber( 1, "zjf_sum" )
            dw_master.SetItem( 1, "zjf", zjf_sum );
            var zjxhf_sum = dw_jzxxx.GetItemNumber( 1, "zjxhf_sum" )
            dw_master.SetItem( 1, "zjxhf", zjxhf_sum );
            var jyf_sum = dw_jzxxx.GetItemNumber( 1, "jyf_sum" )
            dw_master.SetItem( 1, "jyf", jyf_sum );
            var xdf_sum = dw_jzxxx.GetItemNumber( 1, "xdf_sum" )
            dw_master.SetItem( 1, "xdf", xdf_sum );
        }

        //更新行号
        var hz_jzxh = ""


        for ( row = dw_jzxxx.RowCount(); row > 0; row-- )
        {
            var yshdfygjbh_old = dw_jzxxx.GetItemString( row, "yshdfygjbh" );
            if ( ( yshdfygjbh_old == null || yshdfygjbh_old == "" ) && yshdfygjbh != null )
            {
                dw_jzxxx.SetItem( row, "yshdfygjbh", yshdfygjbh );
                dw_jzxxx.SetItem( row, "cxh", row );
                fymc = dw_jzxxx.GetItemString( row, "fymc_jsl" )
                dw_jzxxx.SetItem( row, "fymc", fymc )
            }
        }


        for ( row = dw_cb_cmd.RowCount(); row > 0; row-- )
        {
            var yshdfygjbh_old = dw_cb_cmd.GetItemString( row, "yshdfygjbh" )
            if ( yshdfygjbh_old == "" || yshdfygjbh_old == null )
            {
                dw_cb_cmd.SetItem( row, "yshdfygjbh", yshdfygjbh );
            }
        }


        if ( dw_jzxxx.RowCount() == 0 )
        {
            alert( "没有应收明细数据，不能保存!" );
            dw_jzxxx.SetFocus();
            return;
        }
        //数据同步生鲜港
        var ywbh = dw_cb_cmd.GetItemString(1, "yshdfygjbh");
        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_hddz_yshdfygj");
        dw_log.SetItem(row, "changecols", "");
        dw_log.SetItem(row, "funname", "DataToFreshPort");
        dw_log.SetItem(row, "mainid", ywbh);
        dw_log.ScrollToRow(row);
        dw_log.AcceptText()
        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_cb_cmd_data = dw_cb_cmd.GetChanges();

        if ( dw_master_data == "" && dw_jzxxx_data == "" && dw_cb_cmd_data == "" )
            return;
        //执行保存的WebService
        webReq.SetFunctionID( requestor.GetFunctionID() );
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_log=" + dw_log_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_cb_cmd=" + dw_cb_cmd_data + "&yshdfygjbh=" + yshdfygjbh + "&operation=" + editMode);

        if ( webReq.StatusCode() == 200 )
        {
            //服务器成功处理，返回单号
            yshdfygjbh = webReq.ResponseText();
            dw_master.SetItem( 1, "yshdfygjbh", yshdfygjbh );


            for ( row = 1; row <= dw_jzxxx.RowCount(); row++ )
            {
                var yshdfygjbh_old = dw_jzxxx.GetItemString( row, "yshdfygjbh" );
                if ( yshdfygjbh_old == null || yshdfygjbh_old == "" )
                {
                    dw_jzxxx.SetItem( row, "yshdfygjbh", yshdfygjbh );
                    dw_jzxxx.SetItem( row, "cxh", row );
                }
            }

            for ( row = 1; row <= dw_cb_cmd.RowCount(); row++ )
            {
                dw_cb_cmd.SetItem( row, "yshdfygjbh", yshdfygjbh );
            }


            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_cb_cmd.ResetUpdate();

            self.SetEditMode( "open" );
            requestor.MessageBox( "提示", "数据保存成功!" );

            dw_master.Modify( "yshdfygjbh.Tabsequence=0" );

            //dw_cmd.SetFocus();

        }
        else
        {
            requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
            dw_master.SetFocus();
        }
    }
    //#endregion


    //#region 插入商品
    this.InsertRow = function ()
    {
        var li_row = dw_jzxxx.GetRow();
        var li_insert = dw_jzxxx.InsertRow( li_row );
        var ywbh = dw_master.GetItemString( 1, "ywbh" );
        var ztdh = dw_master.GetItemString( 1, "ztdh" );
        var jzxh = dw_master.GetItemString( 1, "jzxh" );
        var jdrbm = dw_master.GetItemString( 1, "jdrbm" );
        var jdrmc = dw_master.GetItemString( 1, "jdrmc" );
        var jdrjc = dw_master.GetItemString( 1, "jdrjc" );
        var jdrpym = dw_master.GetItemString( 1, "jdrpym" );
        dw_jzxxx.SetItem( li_insert, "ywbh", ywbh );
        dw_jzxxx.SetItem( li_insert, "ztdh", ztdh );
        dw_jzxxx.SetItem( li_insert, "jzxh", jzxh );
         dw_jzxxx.SetItem( li_insert, "jdrbm", jdrbm );
        dw_jzxxx.SetItem( li_insert, "jdrmc", jdrmc );
        dw_jzxxx.SetItem( li_insert, "jdrjc", jdrjc );
        dw_jzxxx.SetItem( li_insert, "jdrpym", jdrpym );
    }
    //#endregion

    //#region 添加明细
    this.AddRow = function ()
    {
        var li_insert = dw_jzxxx.InsertRow( 0 );
        var ywbh = dw_master.GetItemString( 1, "ywbh" );
        var ztdh = dw_master.GetItemString( 1, "ztdh" );
        var jzxh = dw_master.GetItemString( 1, "jzxh" );
        var jdrbm = dw_master.GetItemString( 1, "jdrbm" );
        var jdrmc = dw_master.GetItemString( 1, "jdrmc" );
        var jdrjc = dw_master.GetItemString( 1, "jdrjc" );
        var jdrpym = dw_master.GetItemString( 1, "jdrpym" );
        dw_jzxxx.SetItem( li_insert, "ywbh", ywbh );
        dw_jzxxx.SetItem( li_insert, "ztdh", ztdh );
        dw_jzxxx.SetItem( li_insert, "jzxh", jzxh );
        dw_jzxxx.SetItem( li_insert, "jdrbm", jdrbm );
        dw_jzxxx.SetItem( li_insert, "jdrmc", jdrmc );
        dw_jzxxx.SetItem( li_insert, "jdrjc", jdrjc );
        dw_jzxxx.SetItem( li_insert, "jdrpym", jdrpym );

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

        var sqdbh = dw_master.GetItemString(1, "sqdbh");

        var state = dw_master.GetItemString(1, 'state')
        if (state != "提交") {
            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
            return;
        }

        dw_print.SetDataObject("dw_hddz_hdfyhxdcf_print");
        dw_print.Retrieve(sqdbh);
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

    //#region 新建
    this.Add = function ()
    {
        dw_master.Reset();
        dw_master.InsertRow( 0 );
        //        dw_jzxxx.Reset();
        //        dw_jzxxx.InsertRow(0);

        var userid = requestor.GetParm( "userid" );
        var Dlwtf = requestor.GetParm( "Dlwtf" );
        var userip = requestor.GetParm( "userip" );

        var date = new Date();
        var ywyobj = new Array( 2 );
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid( userid ).value;
        if ( ywyobj == null )
        {
            var ywy = "";
            var bm = "";
        }
        else
        {
            if ( ywyobj.length == 0 )
            {
                var ywy = "";
                var bm = "";

            }
            else
            {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }

        dw_master.SetItem( 1, 'zbr', userid );
        var ywbh = requestor.GetParm( "ywbh" );
        ds_master.Retrieve( ywbh );
        var ywbh = ds_master.GetItemString( 1, "ywbh" );
        dw_master.SetItem( 1, "ywbh", ywbh );
        var ztdh = ds_master.GetItemString( 1, "ztdh" );
        dw_master.SetItem( 1, "ztdh", ztdh );
        var hz_jzxh = ds_master.GetItemString( 1, "hz_jzxh" );
        dw_master.SetItem( 1, "jzxh", hz_jzxh );
        var ywbh = ds_master.GetItemString( 1, "ywbh" );
        dw_master.SetItem( 1, "ywbh", ywbh );
        var sjkgsj = ds_master.GetItemDate( 1, "sjkgsj" );
        dw_master.SetItem( 1, "sjkgsj", sjkgsj );
        var khbm = ds_master.GetItemString( 1, "khbm" );
        dw_master.SetItem( 1, "khbm", khbm );
        dw_master.SetItem( 1, "jsdwbm", khbm );
        var khmc = ds_master.GetItemString( 1, "khmc" );
        dw_master.SetItem( 1, "khmc", khmc );
        dw_master.SetItem( 1, "jsdwmc", khmc );
        var khjc = ds_master.GetItemString( 1, "khjc" );
        dw_master.SetItem( 1, "khjc", khjc );
        dw_master.SetItem( 1, "jsdwjc", khjc );
        var khpym = ds_master.GetItemString( 1, "khpym" );
        dw_master.SetItem( 1, "khpym", khpym );
        dw_master.SetItem( 1, "jsdwpym", khpym );
        var jdrbm = ds_master.GetItemString( 1, "jdrbm" );
        dw_master.SetItem( 1, "jdrbm", jdrbm );
        var jdrmc = ds_master.GetItemString( 1, "jdrmc" );
        dw_master.SetItem( 1, "jdrmc", jdrmc );
        var jdrjc = ds_master.GetItemString( 1, "jdrjc" );
        dw_master.SetItem( 1, "jdrjc", jdrjc );
        var jdrpym = ds_master.GetItemString( 1, "jdrpym" );
        dw_master.SetItem( 1, "jdrpym", jdrpym );
        var tgrq = ds_master.GetItemDate( 1, "tgrq" );
        dw_master.SetItem( 1, "tgrq", tgrq );
        var jgwq = ds_master.GetItemDate( 1, "jgwq" );
        dw_master.SetItem( 1, "jgwq", jgwq );
        var hgrq = ds_master.GetItemDate( 1, "hgrq" );
        dw_master.SetItem( 1, "hgrq", hgrq );
        var jhrq = ds_master.GetItemDate( 1, "jhrq" );
        dw_master.SetItem( 1, "jhrq", jhrq );
        var jhdd = ds_master.GetItemString( 1, "jhdd" );
        dw_master.SetItem( 1, "jhdd", jhdd );
        var qgrq = ds_master.GetItemDate( 1, "qgrq" );
        dw_master.SetItem( 1, "qgrq", qgrq );
        self.SetEditMode( "new" );



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
        dw_master.SetItem(1, "spry", "");

        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        if (dwoName == "sjskrbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");


            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hdfyhdf_sjskr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "sjskrkhyh_t") {
            if (iw_Wldw_Yh_Select == null)
                iw_Wldw_Yh_Select = new W_Wldw_Yh_Select();
            var sjskrbm = dw_master.GetItemString(1, "sjskrbm");
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Yh_Select.SetDataWindow(dw_master);
            iw_Wldw_Yh_Select.SetData("hdfyhxdcf_sjskryh");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Yh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&yw_khbm=" + sjskrbm, iw_Wldw_Yh_Select);
            dw_master.SetFocus();

        } if (dwoName == "sqrgsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "jdr";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hdfyhycqf_sqrgsbm");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }
     

    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "wbbb") {
            var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb(data).value;
            var je = dw_master.GetItemNumber(1, "je");
            dw_master.SetItem(1, "zrmbhl", zrmbhl);

            dw_master.SetItem(1, "zrmbje", zrmbhl * je);
        }
    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
       
    }
    //#endregion



    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "zfdxjc") {
            if (iw_Wldw_Zfdx_Select == null)
                iw_Wldw_Zfdx_Select = new W_Wldw_Zfdx_Select();
            var ywbh = dw_jzxxx.GetItemString(Row, "ywbh");
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Zfdx_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Zfdx_Select.SetData("hdfyhxdcf_zfdx");
            iw_Wldw_Zfdx_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Zfdx_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh, iw_Wldw_Zfdx_Select);
            dw_master.SetFocus();

        }

    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function ( xPos, yPos, Row, dwoName )
    {


        dw_jzxxx.SetFocus();
        alert( 11 );

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

    //#region  
    this.Sp = function () {
        var sqdbh = dw_master.GetItemString(1, "sqdbh");
        var userid = requestor.GetParm("userid"); ;
        var message_num = requestor.MessageBox("提示", "审批是否通过?", ICON.Question, BUTTON.YesNoCancel);
        if (message_num == 1) {
            var num = QsWebSoft.PubMethod.GenFksqdJzxxx_sp(sqdbh, userid, "提交", "部门审批通过").value;
            if (num == 1) {
                self.Exit();
            }
        } else if (message_num == 2) {
            var num = QsWebSoft.PubMethod.GenFksqdJzxxx_sp(sqdbh, userid, "新制", "部门审批不通过").value;
            if (num == 1) {
                self.Exit();
            }
        } else if (message_num == 3) {
            return;
        }
    }
    //#endregion

    //#region  
    this.Cxsp = function () {
        var sqdbh = dw_master.GetItemString(1, "sqdbh");
        var userid = requestor.GetParm("userid"); ;
        var message_num = requestor.MessageBox("提示", "是否撤销审批?", ICON.Question, BUTTON.YesNo);
        if (message_num == 1) {
            var num = QsWebSoft.PubMethod.GenFksqdJzxxx_sp(sqdbh, "", "新制", "部门撤销审批").value;
            if (num == 1) {
                self.Exit();
            }
        } else if (message_num == 2) {
            return
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





