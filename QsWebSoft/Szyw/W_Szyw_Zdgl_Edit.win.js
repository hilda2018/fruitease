///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Szyw_Zdgl_Edit()
{

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl( requestor );
    var dw_jzxxx = new DataWindow( requestor );
    var dw_print = new DataWindow( requestor );
    var dw_master = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );
    var ds_1 = new DataStore( requestor );
    var ds_jzxxx = new DataStore( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( tab_1 == null ) tab_1 = new TabControl( requestor );
        tab_1.Attach( win.Control( "tab_1" ) );
        if ( dw_jzxxx == null ) dw_jzxxx = new DataWindow( requestor );
        dw_jzxxx.Attach( win.Control( "dw_jzxxx" ) );
        if ( dw_print == null ) dw_print = new DataWindow( requestor );
        dw_print.Attach( win.Control( "dw_print" ) );
        if ( dw_master == null ) dw_master = new DataWindow( requestor );
        dw_master.Attach( win.Control( "dw_master" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( ds_1 == null ) ds_1 = new DataStore( requestor );
        ds_1.Attach( win.Control( "ds_1" ) );
        if ( ds_jzxxx == null ) ds_jzxxx = new DataStore( requestor );
        ds_jzxxx.Attach( win.Control( "ds_jzxxx" ) );

        if ( typeof ( self.CloseQuery ) == "function" )
            win.AttachEvent( "window", "CloseQuery", self.CloseQuery );

        if ( typeof ( self.PostOpen ) == "function" )
            win.AttachEvent( "window", "PostOpen", self.PostOpen );

        if ( typeof ( self.Tab_Select ) == "function" )
            win.AttachEvent( "tab_1", "Clicked", self.Tab_Select );

        if ( typeof ( self.dw_jzxxx_Clicked ) == "function" )
            win.AttachEvent( "dw_jzxxx", "Clicked", self.dw_jzxxx_Clicked );

        if ( typeof ( self.dw_jzxxx_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_jzxxx", "DoubleClicked", self.dw_jzxxx_DoubleClicked );

        if ( typeof ( self.dw_jzxxx_GetFocus ) == "function" )
            win.AttachEvent( "dw_jzxxx", "GetFocus", self.dw_jzxxx_GetFocus );

        if ( typeof ( self.dw_jzxxx_EditChanged ) == "function" )
            win.AttachEvent( "dw_jzxxx", "ItemChanged", self.dw_jzxxx_EditChanged );

        if ( typeof ( self.RbuttonDown ) == "function" )
            win.AttachEvent( "dw_jzxxx", "RButtonDown", self.RbuttonDown );

        if ( typeof ( self.dw_master_Clicked ) == "function" )
            win.AttachEvent( "dw_master", "Clicked", self.dw_master_Clicked );

        if ( typeof ( self.dw_master_ItemChanged ) == "function" )
            win.AttachEvent( "dw_master", "ItemChanged", self.dw_master_ItemChanged );

        if ( typeof ( self.Save ) == "function" )
            win.AttachEvent( "btn_save", "Clicked", self.Save );

        if ( typeof ( self.AddRow ) == "function" )
            win.AttachEvent( "btn_rowadd", "Clicked", self.AddRow );

        if ( typeof ( self.DeleteRow ) == "function" )
            win.AttachEvent( "btn_rowdelete", "Clicked", self.DeleteRow );

        if ( typeof ( self.RowCopy ) == "function" )
            win.AttachEvent( "btn_rowcopy", "Clicked", self.RowCopy );

        if ( typeof ( self.InsertRow ) == "function" )
            win.AttachEvent( "btn_rowinsert", "Clicked", self.InsertRow );

        if ( typeof ( self.dw_cmd_RowNext ) == "function" )
            win.AttachEvent( "btn_rownext", "Clicked", self.dw_cmd_RowNext );

        if ( typeof ( self.dw_cmd_RowBack ) == "function" )
            win.AttachEvent( "btn_rowback", "Clicked", self.dw_cmd_RowBack );

        if ( typeof ( self.Print ) == "function" )
            win.AttachEvent( "btn_print", "Clicked", self.Print );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        tab_1.Detach(); tab_1 = null;
        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_print.Detach(); dw_print = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_jzxxx.Detach(); ds_jzxxx = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
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
    //webReq.SetWebServiceUrl("/Service/Wlgzsjfk.ashx");
    webReq.SetWebServiceUrl("/Service/Szyw_Zdgl.ashx");  

    
    
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
        var sqdbh = dw_master.GetItemString(row, "sqdbh");
        var je_sum = dw_jzxxx.GetItemNumber(1, "je_sum");
        var zrmbhl = dw_master.GetItemNumber(1, "zrmbhl");

        var fymc = ""
        dw_master.SetItem(1, "je", je_sum);
        dw_master.SetItem(1, "zrmbje", je_sum * zrmbhl);

        //更新行号
        var hz_jzxh = ""
        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "sqdbh", sqdbh);
            dw_jzxxx.SetItem(row, "cxh", row);
            fymc = dw_jzxxx.GetItemString(row, "fymc_jsl")
            dw_jzxxx.SetItem(row, "fymc", fymc)
        }



        if (dw_jzxxx.RowCount() == 0) {
            alert("货代单证中没有集装箱信息!");
            dw_jzxxx.SetFocus();
            return;
        }


        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();


        if (dw_master_data == "" && dw_jzxxx_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&sqdbh=" + sqdbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            sqdbh = webReq.ResponseText();
            dw_master.SetItem(1, "sqdbh", sqdbh);


            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "sqdbh", sqdbh);
                dw_jzxxx.SetItem(row, "cxh", row);
            }


            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();

            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("sqdbh.Tabsequence=0");

            //dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion

    //#region 过滤集装箱号
    this.slejzxh_EditChanged = function (text) {
        dw_jzxxx.SetRedraw(false);
        if (text == "")
            dw_jzxxx.SetFilter("");
        else
            dw_jzxxx.SetFilter("( Upper(jzxh) like Upper('%" + text + "%'))");
        dw_jzxxx.Filter();
        dw_jzxxx.Sort();
        dw_jzxxx.SetRedraw(true);
    }
    //#endregion

    //#region 插入商品
    this.InsertRow = function () {
//        if (iW_Szyw_Zdgl_Edit_pop == null)
//            iW_Szyw_Zdgl_Edit_pop = new W_Szyw_Zdgl_Edit_pop();
//        var ShareMode = requestor.GetParm("ShareMode");
//        var ywy = requestor.GetParm("userid");
//        var Dlwtf = requestor.GetParm("Dlwtf");
//        var row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
//        var dwo = dw_jzxxx.GetDataObject();
//        var Sjskrbm = dw_master.GetItemString(1, "sjskrbm");

//        iW_Szyw_Zdgl_Edit_pop.SetRow(row);
//        iW_Szyw_Zdgl_Edit_pop.SetDwo(dwo);
//        iW_Szyw_Zdgl_Edit_pop.SetDetailDW(dw_jzxxx);
//        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Szyw_Zdgl_Edit_pop&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&Sjskrbm=' + Sjskrbm, iW_Szyw_Zdgl_Edit_pop);

    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
//        if (iW_Szyw_Zdgl_Edit_pop == null)
//            iW_Szyw_Zdgl_Edit_pop = new W_Szyw_Zdgl_Edit_pop();
//            var ShareMode = requestor.GetParm("ShareMode");
//            var ywy = requestor.GetParm("userid");
//            var Dlwtf = requestor.GetParm("Dlwtf");
//            var dwo = dw_jzxxx.GetDataObject();
//            var Sjskrbm = dw_master.GetItemString(1, "sjskrbm");
//            iW_Szyw_Zdgl_Edit_pop.SetRow(0);
//            iW_Szyw_Zdgl_Edit_pop.SetDwo(dwo);
//            iW_Szyw_Zdgl_Edit_pop.SetDetailDW(dw_jzxxx);
//            requestor.Open("/LoadWindow.ashx?WinName=Szyw.W_Szyw_Zdgl_Edit_pop&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&Sjskrbm=' + Sjskrbm, iW_Szyw_Zdgl_Edit_pop);
            
       
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


        dw_print.SetDataObject("dw_wlgz_sjfk_print");
        dw_print.Retrieve(sqdbh);
        dw_print.PrintPreview();
    }
    //#endregion
  
    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
//        if (dwoName == "hgbm") {
//            if (iw_Commodity_Select == null)
//                iw_Commodity_Select = new W_Commodit_Select();
//            var ywy = requestor.GetParm("userid"); ;
//            var ShareMode = requestor.GetParm("ShareMode"); ;
//            var Dlwtf = requestor.GetParm("Dlwtf"); ;
//            iw_Commodity_Select.SetDetailDW(dw_cmd);
//            iw_Commodity_Select.SetDwo("dw_mxd_edit_cmd");
//            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodit_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
//            dw_cmd.SetFocus();
//        }
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

        if (dwoName == "sjskrbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("wlgzsjfk_sjskr");
        
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
            iw_Wldw_Yh_Select.SetData("hdfyhdf_sjskryh");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Yh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&yw_khbm=" + sjskrbm, iw_Wldw_Yh_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "sqrgsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            jdr = "jdr";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("wlgzsjfkd_sqrgs");
            
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select);
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
            iw_Wldw_Zfdx_Select.SetData("hdfyhdf_zfdx");
            iw_Wldw_Zfdx_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Zfdx_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh, iw_Wldw_Zfdx_Select);
            dw_master.SetFocus();

        }

    }
    //#endregion

    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {       

        dw_jzxxx.SetFocus();

    }
    //#endregion


    //#region dw_jzxxx ItemChanged
    this.dw_jzxxx_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "fybm") {
            var ywbh = dw_jzxxx.GetItemString(row, "ywbh")
            var sqdbh = dw_master.GetItemString(1, "sqdbh")
            var fkcs = 0
            if (sqdbh == null) {
                sqdbh = ""
            }
            fkcs = QsWebSoft.PubMethod.ReadFycs(ywbh, data, sqdbh).value;

            for (var rowfind = 1; rowfind <= dw_jzxxx.RowCount(); rowfind++) {                
                if (dw_jzxxx.Find("ywbh = '" + ywbh + "' and fybm = '" + data + "'", rowfind, rowfind) > 0) {
                    fkcs++
                }
            };

            dw_jzxxx.SetItem(row, "fkcs", fkcs + 1)
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

    

    


}





