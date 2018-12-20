///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_WldwAdd_New()
{

    var self = this;
    var requestor = new PBWindow();
    var tab_1 = new TabControl( requestor );
    var dw_master = new DataWindow( requestor );
    var dw_log = new DataWindow( requestor );
    var dw_lxr = new DataWindow( requestor );
    var dw_yh = new DataWindow( requestor );
    var dw_jsbm = new DataWindow( requestor );
    var dw_ohdlxy = new DataWindow( requestor );
    var dw_dz = new DataWindow( requestor );
    var dw_khsdttsz = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( tab_1 == null ) tab_1 = new TabControl( requestor );
        tab_1.Attach( win.Control( "tab_1" ) );
        if ( dw_master == null ) dw_master = new DataWindow( requestor );
        dw_master.Attach( win.Control( "dw_master" ) );
        if ( dw_log == null ) dw_log = new DataWindow( requestor );
        dw_log.Attach( win.Control( "dw_log" ) );
        if ( dw_lxr == null ) dw_lxr = new DataWindow( requestor );
        dw_lxr.Attach( win.Control( "dw_lxr" ) );
        if ( dw_yh == null ) dw_yh = new DataWindow( requestor );
        dw_yh.Attach( win.Control( "dw_yh" ) );
        if ( dw_jsbm == null ) dw_jsbm = new DataWindow( requestor );
        dw_jsbm.Attach( win.Control( "dw_jsbm" ) );
        if ( dw_ohdlxy == null ) dw_ohdlxy = new DataWindow( requestor );
        dw_ohdlxy.Attach( win.Control( "dw_ohdlxy" ) );
        if ( dw_dz == null ) dw_dz = new DataWindow( requestor );
        dw_dz.Attach( win.Control( "dw_dz" ) );
        if ( dw_khsdttsz == null ) dw_khsdttsz = new DataWindow( requestor );
        dw_khsdttsz.Attach( win.Control( "dw_khsdttsz" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );

        if ( typeof ( self.CloseQuery ) == "function" )
            win.AttachEvent( "window", "CloseQuery", self.CloseQuery );

        if ( typeof ( self.PostOpen ) == "function" )
            win.AttachEvent( "window", "PostOpen", self.PostOpen );

        if ( typeof ( self.Tab_Select ) == "function" )
            win.AttachEvent( "tab_1", "Clicked", self.Tab_Select );

        if ( typeof ( self.dw_master_Clicked ) == "function" )
            win.AttachEvent( "dw_master", "Clicked", self.dw_master_Clicked );

        if ( typeof ( self.dw_GetFocus ) == "function" )
            win.AttachEvent( "dw_master", "GetFocus", self.dw_GetFocus );

        if ( typeof ( self.dw_master_ItemChanged ) == "function" )
            win.AttachEvent( "dw_master", "ItemChanged", self.dw_master_ItemChanged );

        if ( typeof ( self.dw_GetFocus ) == "function" )
            win.AttachEvent( "dw_lxr", "GetFocus", self.dw_GetFocus );

        if ( typeof ( self.dw_EntertoTab ) == "function" )
            win.AttachEvent( "dw_lxr", "KeyDown", self.dw_EntertoTab );

        if ( typeof ( self.dw_GetFocus ) == "function" )
            win.AttachEvent( "dw_yh", "GetFocus", self.dw_GetFocus );

        if ( typeof ( self.dw_EntertoTab ) == "function" )
            win.AttachEvent( "dw_yh", "KeyDown", self.dw_EntertoTab );

        if ( typeof ( self.dw_Jsbm_GetFocus ) == "function" )
            win.AttachEvent( "dw_jsbm", "GetFocus", self.dw_Jsbm_GetFocus );

        if ( typeof ( self.dw_Dz_GetFocus ) == "function" )
            win.AttachEvent( "dw_dz", "GetFocus", self.dw_Dz_GetFocus );

        if ( typeof ( self.dw_khsdttsz_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_khsdttsz", "DoubleClicked", self.dw_khsdttsz_DoubleClicked );

        if ( typeof ( self.dw_khsdttsz_GetFocus ) == "function" )
            win.AttachEvent( "dw_khsdttsz", "GetFocus", self.dw_khsdttsz_GetFocus );

        if ( typeof ( self.AddRow ) == "function" )
            win.AttachEvent( "btn_rowadd", "Clicked", self.AddRow );

        if ( typeof ( self.DeleteRow ) == "function" )
            win.AttachEvent( "btn_rowdelete", "Clicked", self.DeleteRow );

        if ( typeof ( self.save ) == "function" )
            win.AttachEvent( "btn_save", "Clicked", self.save );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        tab_1.Detach(); tab_1 = null;
        dw_master.Detach(); dw_master = null;
        dw_log.Detach(); dw_log = null;
        dw_lxr.Detach(); dw_lxr = null;
        dw_yh.Detach(); dw_yh = null;
        dw_jsbm.Detach(); dw_jsbm = null;
        dw_ohdlxy.Detach(); dw_ohdlxy = null;
        dw_dz.Detach(); dw_dz = null;
        dw_khsdttsz.Detach(); dw_khsdttsz = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Wldw_Select = null;
    var iw_Country_Select = null;

    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }
    var RowData = null;
    this.SetRow = function (parm) {
        RowData = parm;
    }

    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Wldw.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        self.Add();
    }

    var dw_List = null;
    this.SetListDataWindow = function (dw) {
        dw_List = dw;
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {

        dw_master.AcceptText();


        if ((dw_master.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }
    }
    //#endregion

     
    //#region 新建
    this.Add = function ()
    {
         
        dw_master.Reset();
        dw_master.InsertRow(0);
        dw_lxr.Reset();
        dw_lxr.InsertRow(0);
        dw_yh.Reset();
        dw_yh.InsertRow(0);
        dw_jsbm.Reset();
        dw_jsbm.InsertRow(0);
        dw_ohdlxy.Reset();
        dw_ohdlxy.InsertRow(0);
        dw_dz.Reset();
        dw_dz.InsertRow(0);
        dw_khsdttsz.Reset();
        dw_khsdttsz.InsertRow(0);
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
        dw_master.SetItem(1, "dlwtf", Dlwtf);
        

    }
    //#endregion


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

    //#region 存盘
    this.save = function () {
        if (dw_master.AcceptText() != 1)
            return;
        if (dw_lxr.AcceptText() != 1)
            return;

        if (dw_yh.AcceptText() != 1)
            return;

        if (dw_jsbm.AcceptText() != 1)
            return;

        if (dw_ohdlxy.AcceptText() != 1)
            return;

        if (dw_log.AcceptText() != 1)
            return;

        if (dw_dz.AcceptText() != 1)
            return;

        if (dw_khsdttsz.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_lxr.ModifiedCount() + dw_lxr.DeletedCount() + dw_yh.ModifiedCount() + dw_yh.DeletedCount() + dw_jsbm.ModifiedCount() + dw_jsbm.DeletedCount() + dw_ohdlxy.ModifiedCount() + dw_ohdlxy.DeletedCount() + dw_dz.ModifiedCount() + dw_dz.DeletedCount() + dw_khsdttsz.ModifiedCount() + dw_khsdttsz.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
        var gwgys = dw_master.GetItemString(1, "gwgys");
        var gncgs = dw_master.GetItemString(1, "gncgs");
        var wmgs = dw_master.GetItemString(1, "wmgs");
        var hdgs = dw_master.GetItemString(1, "hdgs");
        var bggs = dw_master.GetItemString(1, "bggs");
        var bjgs = dw_master.GetItemString(1, "bjgs");
        var jyj = dw_master.GetItemString(1, "jyj");
        var jyd = dw_master.GetItemString(1, "jyd");
        var jyfwgs = dw_master.GetItemString(1, "jyfwgs");
        var cgsorhkgs = dw_master.GetItemString(1, "cgsorhkgs");
        var cdorhd = dw_master.GetItemString(1, "cdorhd");
        var cd = dw_master.GetItemString(1, "cd");
        var mt = dw_master.GetItemString(1, "mt");
        var cgsfxd = dw_master.GetItemString(1, "cgsfxd");
        var dc = dw_master.GetItemString(1, "dc");
        var fxgs = dw_master.GetItemString(1, "hdgs");
        var yh = dw_master.GetItemString(1, "yh");
        var hg = dw_master.GetItemString(1, "hg");
        var qt = dw_master.GetItemString(1, "qt");
        if ((gwgys == "0") && (gwgys == "0") && (wmgs == "0") && (hdgs == "0") && (bggs == "0") && (bjgs == "0") && (jyj == "0")
             && (jyd == "0") && (jyfwgs == "0") && (cgsorhkgs == "0") && (cdorhd == "0") && (cd == "0") && (mt == "0") && (cgsfxd == "0")
             && (dc == "0") && (fxgs == "0") && (yh == "0") && (hg == "0") && (qt == "0")) {
            alert("请输入选择客户类型!");
            dw_master.SetFocus();
            return;
        }


        var khmc = dw_master.GetItemString(1, "khmc");
        var khmc_yw = dw_master.GetItemString(1, "khmc_yw");
        if ((khmc == null || khmc == "") && (khmc_yw == null || khmc_yw == "")) {
            if (khmc == null || khmc == "") {
                alert("请输入往来单位名称!");
                dw_master.SetFocus();
                dw_master.SetColumn("khmc")
                return;

            }
            if (khmc_yw == null || khmc_yw == "") {
                alert("请输入往来单位英文名称!");
                dw_master.SetFocus();
                dw_master.SetColumn("khmc_yw")
                return;
            }

        }


        var row = dw_master.GetRow();
        var yw_khbm = dw_master.GetItemString(row, "yw_khbm");
        var khmc = dw_master.GetItemString(row, "khmc");
        var pym = QsWebSoft.PubMethod.GetPYString(khmc).value;
        var pym_yw = QsWebSoft.PubMethod.GetPYString(khmc_yw).value;
        dw_master.SetItem(row, "pym", pym);
        dw_master.SetItem(row, "pym_yw", pym_yw);

        //更新行号
        for (row = dw_lxr.RowCount(); row > 0; row--) {

            dw_lxr.SetItem(row, "cxh", row);
            dw_lxr.SetItem(row, "yw_khbm", yw_khbm);
        }

        for (row = dw_yh.RowCount(); row > 0; row--) {

            dw_yh.SetItem(row, "cxh", row);
            dw_yh.SetItem(row, "yw_khbm", yw_khbm);
        }

        for (row = dw_jsbm.RowCount(); row > 0; row--) {

            dw_jsbm.SetItem(row, "cxh", row);
            dw_jsbm.SetItem(row, "yw_khbm", yw_khbm);
        }

        for (row = dw_ohdlxy.RowCount(); row > 0; row--) {

            dw_ohdlxy.SetItem(row, "cxh", row);
            dw_ohdlxy.SetItem(row, "yw_khbm", yw_khbm);
            var ksrq = dw_ohdlxy.GetItemDate(row, "ksrq");
            var ksrq_max = dw_ohdlxy.GetItemDate(dw_ohdlxy.RowCount(), "ksrq_max");

            if (ksrq == ksrq_max) {
                dw_ohdlxy.SetItem(row, "sfyx", "Y");
            } else {
                dw_ohdlxy.SetItem(row, "sfyx", "N");
            };
        }

        for (row = dw_dz.RowCount(); row > 0; row--) {

            dw_dz.SetItem(row, "cxh", row);
            dw_dz.SetItem(row, "yw_khbm", yw_khbm);
        }

        var dw_master_data = dw_master.GetChanges();
        var dw_lxr_data = dw_lxr.GetChanges();
        var dw_yh_data = dw_yh.GetChanges();
        var dw_jsbm_data = dw_jsbm.GetChanges();
        var dw_ohdlxy_data = dw_ohdlxy.GetChanges();
        var dw_dz_data = dw_dz.GetChanges();
        var dw_khsdttsz_data = dw_khsdttsz.GetChanges();
        if (dw_master_data == "" && dw_lxr_data == "" && dw_yh_data == "" && dw_jsbm_data == "" && dw_ohdlxy_data == "" && dw_dz_data == "" && dw_khsdttsz_data == "")
            return;

        var khmc = dw_master.GetItemString(1, "khmc")
        var khywmc = dw_master.GetItemString(1, "khmc_yw")
        var yw_khbm = dw_master.GetItemString(1, "yw_khbm");
        var exists = QsWebSoft.PubMethod.CheckKhmc(yw_khbm, khmc, khywmc).value;
        if (exists > 0) {
            requestor.MessageBox("提示", "客户已经存在,不能保存!");
            return;
        }

        //数据同步生鲜港
        //            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {
        var yw_khbm = dw_master.GetItemString(1, "yw_khbm");

        var userid = requestor.GetParm("userid");

        dw_log.Retrieve(userid, "wldw");

        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        dw_log.AcceptText();
        var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_wldw");
        //                dw_log.SetItem(row, "changecols", "hgfxfs,hgfxsj");
        dw_log.SetItem(row, "mainid", yw_khbm);
        dw_log.ScrollToRow(row);
        //            }


        dw_log.AcceptText()
        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_lxr=" + dw_lxr_data + "&dw_yh=" + dw_yh_data + "&dw_jsbm=" + dw_jsbm_data + "&dw_ohdlxy=" + dw_ohdlxy_data + "&dw_log=" + dw_log_data + "&dw_dz=" + dw_dz_data +"&dw_khsdttsz=" + dw_khsdttsz_data+ "&yw_khbm=" + yw_khbm + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            var yw_khbm = webReq.ResponseText();
            dw_master.SetItem(1, "yw_khbm", yw_khbm);
            dw_master.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            self.Exit();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        };
    };
    //#endregion

    //#region 单击选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "country_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("country");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();
        }

    }
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
    this.dw_Dz_GetFocus = function (sender) {
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

        requestor.Close();
    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "fgf") {

            if (data == "0") {
                dw_master.SetItem(1, "fgflx", "");
                dw_master.SetItem(1, "sfgx", "N");
            }
            else {
                dw_master.SetItem(1, "sfgx", "Y");
            }
        }
    }
    //#endregion

    //#region tabselect
    this.Tab_Select = function () {
        var bEditFlag = false;
        if (tab_1.GetSelectedTab() == 1) {
            var bEditFlag = false; 
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag); 

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
        }

       

        if (tab_1.GetSelectedTab() == 4) {
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
        }

        if (tab_1.GetSelectedTab() == 5) {
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
        }

        if (tab_1.GetSelectedTab() == 6) {
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
        }
    };
    //#endregion

}
