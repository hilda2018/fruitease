///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_MtywclList()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow( requestor );
    var tb_3 = new ToolStrip( requestor );
    var ddlb_jdrjc = new DropDownListBox( requestor );
    var ddlb_sc = new DropDownListBox( requestor );
    var ddlb_pdy = new DropDownListBox( requestor );
    var dw_log = new DataWindow( requestor );
    var dw_filter = new DataWindow( requestor );
    var tb_2 = new ToolStrip( requestor );
    var dp_begin = new DatePicker( requestor );
    var dp_end = new DatePicker( requestor );
    var sle_1 = new SingleLineEdit( requestor );
    var sle_kh = new SingleLineEdit( requestor );
    var sle_hth = new SingleLineEdit( requestor );
    var sle_jzxh = new SingleLineEdit( requestor );
    var sle_bgdh = new SingleLineEdit( requestor );
    var sle_tgdh = new SingleLineEdit( requestor );
    var tb_1 = new ToolStrip( requestor );
    var ddlb_dhzt = new DropDownListBox( requestor );
    var ddlb_tgzt = new DropDownListBox( requestor );
    var ddlb_tdzt = new DropDownListBox( requestor );
    var ddlb_mtywcl = new DropDownListBox( requestor );
    var ddlb_wllx = new DropDownListBox( requestor );
    var sle_ztdh = new SingleLineEdit( requestor );
    var sle_ftdh = new SingleLineEdit( requestor );
    var dw_print = new DataWindow( requestor );
    var ContextMenuStrip1 = new ContextMenu( requestor );
    var ds_1 = new DataStore( requestor );
    var ds_role = new DataStore( requestor );
    var ds_2 = new DataStore( requestor );
    var ds_pdy = new DataStore( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_list == null ) dw_list = new DataWindow( requestor );
        dw_list.Attach( win.Control( "dw_list" ) );
        if ( tb_3 == null ) tb_3 = new ToolStrip( requestor );
        tb_3.Attach( win.Control( "tb_3" ) );
        if ( ddlb_jdrjc == null ) ddlb_jdrjc = new DropDownListBox( requestor );
        ddlb_jdrjc.Attach( win.Control( "ddlb_jdrjc" ) );
        if ( ddlb_sc == null ) ddlb_sc = new DropDownListBox( requestor );
        ddlb_sc.Attach( win.Control( "ddlb_sc" ) );
        if ( ddlb_pdy == null ) ddlb_pdy = new DropDownListBox( requestor );
        ddlb_pdy.Attach( win.Control( "ddlb_pdy" ) );
        if ( dw_log == null ) dw_log = new DataWindow( requestor );
        dw_log.Attach( win.Control( "dw_log" ) );
        if ( dw_filter == null ) dw_filter = new DataWindow( requestor );
        dw_filter.Attach( win.Control( "dw_filter" ) );
        if ( tb_2 == null ) tb_2 = new ToolStrip( requestor );
        tb_2.Attach( win.Control( "tb_2" ) );
        if ( dp_begin == null ) dp_begin = new DatePicker( requestor );
        dp_begin.Attach( win.Control( "dp_begin" ) );
        if ( dp_end == null ) dp_end = new DatePicker( requestor );
        dp_end.Attach( win.Control( "dp_end" ) );
        if ( sle_1 == null ) sle_1 = new SingleLineEdit( requestor );
        sle_1.Attach( win.Control( "sle_1" ) );
        if ( sle_kh == null ) sle_kh = new SingleLineEdit( requestor );
        sle_kh.Attach( win.Control( "sle_kh" ) );
        if ( sle_hth == null ) sle_hth = new SingleLineEdit( requestor );
        sle_hth.Attach( win.Control( "sle_hth" ) );
        if ( sle_jzxh == null ) sle_jzxh = new SingleLineEdit( requestor );
        sle_jzxh.Attach( win.Control( "sle_jzxh" ) );
        if ( sle_bgdh == null ) sle_bgdh = new SingleLineEdit( requestor );
        sle_bgdh.Attach( win.Control( "sle_bgdh" ) );
        if ( sle_tgdh == null ) sle_tgdh = new SingleLineEdit( requestor );
        sle_tgdh.Attach( win.Control( "sle_tgdh" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( ddlb_dhzt == null ) ddlb_dhzt = new DropDownListBox( requestor );
        ddlb_dhzt.Attach( win.Control( "ddlb_dhzt" ) );
        if ( ddlb_tgzt == null ) ddlb_tgzt = new DropDownListBox( requestor );
        ddlb_tgzt.Attach( win.Control( "ddlb_tgzt" ) );
        if ( ddlb_tdzt == null ) ddlb_tdzt = new DropDownListBox( requestor );
        ddlb_tdzt.Attach( win.Control( "ddlb_tdzt" ) );
        if ( ddlb_mtywcl == null ) ddlb_mtywcl = new DropDownListBox( requestor );
        ddlb_mtywcl.Attach( win.Control( "ddlb_mtywcl" ) );
        if ( ddlb_wllx == null ) ddlb_wllx = new DropDownListBox( requestor );
        ddlb_wllx.Attach( win.Control( "ddlb_wllx" ) );
        if ( sle_ztdh == null ) sle_ztdh = new SingleLineEdit( requestor );
        sle_ztdh.Attach( win.Control( "sle_ztdh" ) );
        if ( sle_ftdh == null ) sle_ftdh = new SingleLineEdit( requestor );
        sle_ftdh.Attach( win.Control( "sle_ftdh" ) );
        if ( dw_print == null ) dw_print = new DataWindow( requestor );
        dw_print.Attach( win.Control( "dw_print" ) );
        if ( ContextMenuStrip1 == null ) ContextMenuStrip1 = new ContextMenu( requestor );
        ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1" ) );
        if ( ds_1 == null ) ds_1 = new DataStore( requestor );
        ds_1.Attach( win.Control( "ds_1" ) );
        if ( ds_role == null ) ds_role = new DataStore( requestor );
        ds_role.Attach( win.Control( "ds_role" ) );
        if ( ds_2 == null ) ds_2 = new DataStore( requestor );
        ds_2.Attach( win.Control( "ds_2" ) );
        if ( ds_pdy == null ) ds_pdy = new DataStore( requestor );
        ds_pdy.Attach( win.Control( "ds_pdy" ) );

        if ( typeof ( self.CloseQuery ) == "function" )
            win.AttachEvent( "window", "CloseQuery", self.CloseQuery );

        if ( typeof ( self.PostOpen ) == "function" )
            win.AttachEvent( "window", "PostOpen", self.PostOpen );

        if ( typeof ( self.dw_List_Clicked ) == "function" )
            win.AttachEvent( "dw_list", "Clicked", self.dw_List_Clicked );

        if ( typeof ( self.dw_List_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_list", "DoubleClicked", self.dw_List_DoubleClicked );

        if ( typeof ( self.dw_List_DwnMouseMove ) == "function" )
            win.AttachEvent( "dw_list", "DwnMouseMove", self.dw_List_DwnMouseMove );

        if ( typeof ( self.dw_List_EditChanged ) == "function" )
            win.AttachEvent( "dw_list", "EditChanged", self.dw_List_EditChanged );

        if ( typeof ( self.dw_List_ItemChanged ) == "function" )
            win.AttachEvent( "dw_list", "ItemChanged", self.dw_List_ItemChanged );

        if ( typeof ( self.dw_List_ItemFocusChanged ) == "function" )
            win.AttachEvent( "dw_list", "ItemFocusChanged", self.dw_List_ItemFocusChanged );

        if ( typeof ( self.dw_List_LButtonDown ) == "function" )
            win.AttachEvent( "dw_list", "LButtonDown", self.dw_List_LButtonDown );

        if ( typeof ( self.dw_List_MouseMove ) == "function" )
            win.AttachEvent( "dw_list", "MouseMove", self.dw_List_MouseMove );

        if ( typeof ( self.RbuttonDown ) == "function" )
            win.AttachEvent( "dw_list", "RButtonDown", self.RbuttonDown );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_jdrjc", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_pdy", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "btn_read", "Clicked", self.Retrieve );

        if ( typeof ( self.sle_EditChanged ) == "function" )
            win.AttachEvent( "sle_1", "EditChanged", self.sle_EditChanged );

        if ( typeof ( self.slekh_EditChanged ) == "function" )
            win.AttachEvent( "sle_kh", "EditChanged", self.slekh_EditChanged );

        if ( typeof ( self.slehth_EditChanged ) == "function" )
            win.AttachEvent( "sle_hth", "EditChanged", self.slehth_EditChanged );

        if ( typeof ( self.slejzxh_EditChanged ) == "function" )
            win.AttachEvent( "sle_jzxh", "EditChanged", self.slejzxh_EditChanged );

        if ( typeof ( self.slebgdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_bgdh", "EditChanged", self.slebgdh_EditChanged );

        if ( typeof ( self.sletgdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_tgdh", "EditChanged", self.sletgdh_EditChanged );

        if ( typeof ( self.Save ) == "function" )
            win.AttachEvent( "btn_save", "Clicked", self.Save );

        if ( typeof ( self.OpenWindow ) == "function" )
            win.AttachEvent( "btn_open", "Clicked", self.OpenWindow );

        if ( typeof ( self.Print ) == "function" )
            win.AttachEvent( "btn_prn", "Clicked", self.Print );

        if ( typeof ( self.OpenYcyy ) == "function" )
            win.AttachEvent( "btn_ycyy", "Clicked", self.OpenYcyy );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_dhzt", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_tgzt", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_tdzt", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_mtywcl", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_wllx", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.sleztdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_ztdh", "EditChanged", self.sleztdh_EditChanged );

        if ( typeof ( self.sleftdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_ftdh", "EditChanged", self.sleftdh_EditChanged );

        if ( typeof ( self.Filter ) == "function" )
            win.AttachEvent( "单列过滤ToolStripMenuItem", "Clicked", self.Filter );

        if ( typeof ( self.Filter_Cancle ) == "function" )
            win.AttachEvent( "取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "刷新ToolStripMenuItem", "Clicked", self.Retrieve );

        if ( typeof ( self.CopyCol ) == "function" )
            win.AttachEvent( "复制ToolStripMenuItem", "Clicked", self.CopyCol );

        if ( typeof ( self.CopySelect ) == "function" )
            win.AttachEvent( "选择复制ToolStripMenuItem", "Clicked", self.CopySelect );

        if ( typeof ( self.CopyL ) == "function" )
            win.AttachEvent( "整列复制ToolStripMenuItem", "Clicked", self.CopyL );

        if ( typeof ( self.Recover ) == "function" )
            win.AttachEvent( "恢复默认列ToolStripMenuItem", "Clicked", self.Recover );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        dw_list.Detach(); dw_list = null;
        tb_3.Detach(); tb_3 = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        ddlb_sc.Detach(); ddlb_sc = null;
        ddlb_pdy.Detach(); ddlb_pdy = null;
        dw_log.Detach(); dw_log = null;
        dw_filter.Detach(); dw_filter = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_hth.Detach(); sle_hth = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        sle_bgdh.Detach(); sle_bgdh = null;
        sle_tgdh.Detach(); sle_tgdh = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_dhzt.Detach(); ddlb_dhzt = null;
        ddlb_tgzt.Detach(); ddlb_tgzt = null;
        ddlb_tdzt.Detach(); ddlb_tdzt = null;
        ddlb_mtywcl.Detach(); ddlb_mtywcl = null;
        ddlb_wllx.Detach(); ddlb_wllx = null;
        sle_ztdh.Detach(); sle_ztdh = null;
        sle_ftdh.Detach(); sle_ftdh = null;
        dw_print.Detach(); dw_print = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_2.Detach(); ds_2 = null;
        ds_pdy.Detach(); ds_pdy = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
	


    //#region 变量定义
    var editMode = "";
    var iw_Bgdj_Slwts = null;
    var dwc = new DataWindowChild();
    var dwoname = "";
    var iw_Wldw_Select = null;
    var iw_Sj_Select = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Thwljh.ashx");   

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
      
        self.Retrieve();
    }
    //#endregion

    //#region 数据查询
    this.Retrieve = function () {
        if (self.CloseQuery() == 1)
            return;

        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var mtywcl = ddlb_mtywcl.GetText();
        var tdzt = ddlb_tdzt.GetText();
        var dhzt = ddlb_dhzt.GetText();
        var tgzt = ddlb_tgzt.GetText();
        var wllx = ddlb_wllx.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var sc = ddlb_sc.GetText();
        var pdy = ddlb_pdy.GetText();
        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        if (endDate < beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }


        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm( "Dlwtf" );
      
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), tdzt, mtywcl, dhzt, tgzt,wllx,  userid, jdrjc,sc, pdy);

    }
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

        dw_list.AcceptText();

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenWindow = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000202";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var cxh = dw_list.GetItemNumber(dw_list.GetRow(), 'cxh')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        var operation = "show";

        //失效按钮的控制



        //先取得页面父窗口的TabStrip控件
        if (ts_1 == null) {
            if (window.external != null)
                ts_1 = window.external.Control("ts_1");
        }

        if (ts_1 == null)
            return;

        //模块是否已打开
        var index = ts_1.SelectItem(node);
        if (index > 0)
            return;


        //取节点所对应的数据窗口记录

        if (row > 0) {
            openStyle = ds_1.GetItemString(row, "openStyle");
            url = ds_1.GetItemString(row, "WindowName");
            parm = ds_1.GetItemString(row, "OpenParm");
            label = ds_1.GetItemString(row, "Title");
        }
        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&cxh=' + cxh + '&operation=' + operation.toString(), true);



    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenHddz = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000110";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        var operation = requestor.GetParm("operation");
        //失效按钮的控制



        //先取得页面父窗口的TabStrip控件
        if (ts_1 == null) {
            if (window.external != null)
                ts_1 = window.external.Control("ts_1");
        }

        if (ts_1 == null)
            return;

        //模块是否已打开
        var index = ts_1.SelectItem(node);
        if (index > 0)
            return;


        //取节点所对应的数据窗口记录

        if (row > 0) {
            openStyle = ds_1.GetItemString(row, "openStyle");
            url = ds_1.GetItemString(row, "WindowName");
            parm = ds_1.GetItemString(row, "OpenParm");
            label = ds_1.GetItemString(row, "Title");
        }
        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString(), true);



    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");

        if (Row > 0) {
            if (dwoName == "ywbh") {
                self.OpenHddz();
            }
            if (dwoName == "jzxxx_fxgsjc") {
                if (readonly == "no") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "fxgs";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetData("hy_mtywcl_fxgs");
                    iw_Wldw_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_list.SetFocus();
                }
            }
            if (dwoName == "jzxxx_cgsfxdjc") {
                if (readonly == "no") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "cgsfxd";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetData("hy_mtywcl_cgsfxd");
                    iw_Wldw_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_list.SetFocus();
                }
            }

            if (dwoName == "jzxxx_fxdcjc") {
                if (readonly == "no") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "dc";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetData("hy_mtywcl_fxdc");
                    iw_Wldw_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_list.SetFocus();
                }
            }

            if (dwoName == "jzxxx_gq_bz" || dwoName == "jzxxx_hgcyd_bz" || dwoName == "jzxxx_jyd_bz" || dwoName == "jzxxx_zjfscwld_bz" || dwoName == "yw_hddz_jzxxx_sc_bz" || dwoName == "jzxxx_jschfscwld_bz" || dwoName == "jzxxx_dc_bz") {
                self.OpenWindow();
            }

            //            if (dwoName == "jzxxx_gq_sj") {
            //                if (readonly == "no") {
            //                    if (iw_Sj_Select == null)
            //                        iw_Sj_Select = new W_Sj_Select();
            //                    sjlx = "hy";
            //                    var ywy = requestor.GetParm("userid");
            //                    var ShareMode = requestor.GetParm("ShareMode");
            //                    var Dlwtf = requestor.GetParm("Dlwtf");
            //                    iw_Sj_Select.SetDataWindow(dw_list);
            //                    iw_Sj_Select.SetRow(Row);
            //                    iw_Sj_Select.SetData("hy_mtywcl_sj");
            //                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx+ "&Cdbm= '" + "'", iw_Sj_Select);
            //                    dw_list.SetFocus();
            //                }

            //            }
            if (dwoName == "jzxxx_sdxtdsj") {
                var li_row = ds_1.Find("id='000203'", 1, ds_1.RowCount());
                var role_no = ds_1.GetItemString(li_row, "role_no");
                var userid = requestor.GetParm("userid");
                ds_role.Retrieve(userid, role_no);
                if (ds_role.RowCount() > 0) {
                    var date = new Date();
                    dw_list.SetItem(Row, "jzxxx_sdxtdsj", date.getVarDate());
                } else {
                    requestor.MessageBox("没有权限", "没有权限");
                    return;
                }
            }
        }
    }
    //#endregion


    //#region dw_List  ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "jzxxx_gq_sjlxfs") {
            var jzxxx_hgcyd_bz = dw_list.GetItemString(row, "jzxxx_hgcyd_bz")
            if (jzxxx_hgcyd_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_hgcyd_sjlxfs", data);
            }
            var jzxxx_jyd_bz = dw_list.GetItemString(row, "jzxxx_jyd_bz")
            if (jzxxx_jyd_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_jyd_sjlxfs", data);
            }
            var jzxxx_zjfscwld_bz = dw_list.GetItemString(row, "jzxxx_zjfscwld_bz")
            if (jzxxx_zjfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_zjfscwld_sjlxfs", data);
            }
            //            var jzxxx_sc_bz = dw_list.GetItemString(row, "jzxxx_sc_bz")
            //            if (jzxxx_sc_bz == "Y") {
            //                dw_list.SetItem(1, "jzxxx_sc_sjlxfs", data);
            //            }
            //            var jzxxx_jschfscwld_bz = dw_list.GetItemString(row, "jzxxx_jschfscwld_bz")
            //            if (jzxxx_jschfscwld_bz == "Y") {
            //                dw_list.SetItem(1, "jzxxx_jschfscwld_sjlxfs", data);
            //            }
            var jzxxx_dc_bz = dw_list.GetItemString(row, "jzxxx_dc_bz")
            if (jzxxx_dc_bz == "Y" && jzxxx_zjfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_dc_sjlxfs", data);
            }

        }

        if (dwoName == "jzxxx_gq_cp") {
            var jzxxx_hgcyd_bz = dw_list.GetItemString(row, "jzxxx_hgcyd_bz")
            if (jzxxx_hgcyd_bz == "Y") {

                dw_list.SetItem(1, "jzxxx_hgcyd_cp", data);
            }
            var jzxxx_jyd_bz = dw_list.GetItemString(row, "jzxxx_jyd_bz")
            if (jzxxx_jyd_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_jyd_cp", data);
            }
            var jzxxx_zjfscwld_bz = dw_list.GetItemString(row, "jzxxx_zjfscwld_bz")
            if (jzxxx_zjfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_zjfscwld_cp", data);
            }
            //            var jzxxx_sc_bz = dw_list.GetItemString(row, "jzxxx_sc_bz")
            //            if (jzxxx_sc_bz == "Y") {
            //                dw_list.SetItem(1, "jzxxx_sc_cp", data);
            //            }
            //            var jzxxx_jschfscwld_bz = dw_list.GetItemString(row, "jzxxx_jschfscwld_bz")
            //            if (jzxxx_jschfscwld_bz == "Y") {
            //                dw_list.SetItem(1, "jzxxx_jschfscwld_cp", data);
            //            }
            var jzxxx_dc_bz = dw_list.GetItemString(row, "jzxxx_dc_bz")
            if (jzxxx_dc_bz == "Y" && jzxxx_zjfscwld_bz == "Y") {
                dw_list.SetItem(1, "jzxxx_dc_cp", data);
            }

        }
//        if (dwoName == "yw_hddz_jzxxx_sbjjd") {
//            alert("dd");
//            var ywy = requestor.GetParm("userid");
//            var date = new Date();
//            dw_list.SetItem(row, "yw_hddz_jzxxx_sbjjd_lrry", ywy);
//            dw_list.SetItem(row, "yw_hddz_jzxxx_sbjjd_lrsj", date.getVarDate());

//        }


    }
    //#endregion

    this.dw_List_ItemChanged = function (row, dwoName, data) {
        dw_list.AcceptText();
        if (dwoName == "jzxxx_sdxtdsj") {
            var ywbh = dw_list.GetItemString(row, "ywbh");
            var sdxtdsj = dw_list.GetItemDate(row, "jzxxx_sdxtdsj");
            var rowcount = dw_list.RowCount();
            for (var i = 1; i <= rowcount; i++) {
                var iywbh = dw_list.GetItemString(i, "ywbh");
                if (iywbh == ywbh) {
                    dw_list.SetItem(i, "jzxxx_sdxtdsj", sdxtdsj);
                }
            }
        }
        if (dwoName == "yw_hddz_jzxxx_sbjjd") {
            var ywy = requestor.GetParm("userid");
            var date = new Date();
            dw_list.SetItem(row, "yw_hddz_jzxxx_sbjjd_lrry", ywy);
            dw_list.SetItem(row, "yw_hddz_jzxxx_sbjjd_lrsj", date.getVarDate());

        }

    }
       
    //#region 打印
    this.Print = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print.SetDataObject("dw_hddz_print");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print.PrintPreview();
    }
    //#endregion
  
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤客户
    this.slekh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%')) or ( Upper(khpym) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤市场
    this.ddlb_sc_SelectionChanged = function () {

        var sc = ddlb_sc.GetText();
        var bjsc = "N";
        var jsc = "Y";

        if (sc == "全部") {
            dw_list.SetFilter("");
        }
        else {
            if (sc == "非市场") {
                dw_list.SetFilter("( Upper(jzxxx_sc_bz) like Upper('%" + bjsc + "%'))");
            }
            else {
                dw_list.SetFilter("( Upper(yw_hddz_jzxxx_sc_jc) like Upper('%" + sc + "%')) and ( Upper(jzxxx_sc_bz) like Upper('%" + jsc + "%'))");
            }
        };
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);

    }
    //#endregion

    //#region 过滤合同号
    this.slehth_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hth) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤集装箱号
    this.slejzxh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jzxxx_jzxh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤报关单号
    this.slebgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(bgdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤通关单号
    this.sletgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(tgdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤主提单号
    this.sleztdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤付提单号
    this.sleftdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ftdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤设备交接单号
    this.sletdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Hy_MtywclList", "dw_hy_mtywcl_list");
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
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        colType = dw_list.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_list.GetItemString(dw_list.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_list.GetItemDate(dw_list.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_list.GetItemNumber(dw_list.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 存盘
    this.Save = function () {
        if (dw_list.AcceptText() != 1)
            return;

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
 
        var dw_d_data = dw_list.GetChanges();
        if ( dw_d_data == "")
            return;

        //数据同步生鲜港
//        for (var i = 1; i <= dw_list.RowCount(); i++) {
//            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {

//                var jzxh = dw_list.GetItemString(i, "jzxxx_jzxh");
//                //                var log_num = dw_log.RowCount();

//                var row = dw_log.InsertRow(0);
//                //var maxNumber =  self.SerialNumber(log_num);
//                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

//                dw_log.SetItem(row, "eid", serialNumber);
//                dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
//                dw_log.SetItem(row, "changecols", "sdxtdsj,sfyxcjh,sfsdfxhz,gqjhsj,gqjhsj_lb,gq_sjlxfs,gq_cp,mtywclbz");
//                dw_log.SetItem(row, "mainid", jzxh);
//                dw_log.ScrollToRow(row);
//            }
//        }

//        dw_log.AcceptText()

//        var dw_log_data = dw_log.GetChanges();
//        if (dw_log_data == "")
//            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("MtywclListSave", "dw_list=" + dw_d_data);
        
        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
     }
    //#endregion  

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh")
      
        var cxh = dw_list.GetItemNumber(row, "cxh")

        iw_Hddz_Ycyy.SetDataWindow(dw_list);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetDataCxh(cxh); 

        iw_Hddz_Ycyy.SetYybm("0202");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        fzjs_row = Row;
    }
    //#endregion

    //#region 复制字段内容
    this.CopyAll = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_list.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_list.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_list.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_list.GetItemNumber(row, cloname);
                copytext = num.toString();
            }

            if (copytext_sum == "") {
                copytext_sum = copytext
            } else {
                copytext_sum = copytext_sum + '\t' + '\n' + copytext
            }

        }

        window.clipboardData.setData("Text", copytext_sum);

    }
    //#endregion



    //#region 点击开始
    this.dw_List_LButtonDown = function (flags, xPos, yPos) {
        arr.splice(0, arr.length);
        begin = "Y"
    }
    //#endregion

    //#region 选择复制
    this.CopySelect = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list.GetItemNumber(row, arr[row1]);
                    copytext = num.toString();
                };
                if (copytext_sum == "") {
                    copytext_sum = copytext
                } else {
                    if (row1 == 0) {
                        copytext_sum = copytext_sum + copytext
                    } else {
                        copytext_sum = copytext_sum + '\t' + copytext
                    }
                }
            }

            copytext_sum = copytext_sum + '\n'

        }

        if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
            copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
        };

        window.clipboardData.setData("Text", copytext_sum);
    }

    //#endregion

    //#region 鼠标移动
    this.dw_List_DwnMouseMove = function (xPos, yPos, row, dwoName) {
        if (begin == "Y") {
            var str = arr.join(" ");
            if (str.indexOf(dwoName) < 0 && dwoName.indexOf("line") < 0 && dwoName.indexOf("reportsrv") < 0 && dwoName.indexOf("datawindow") < 0) {
                arr.push(dwoName);
            }

        }
    }
    //#endregion

    //#region 整列复制
    this.CopyL = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_list.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list.GetItemNumber(row, arr[row1]);
                    copytext = num.toString();
                };
                if (copytext_sum == "") {
                    copytext_sum = copytext
                } else {
                    if (row1 == 0) {
                        copytext_sum = copytext_sum + copytext
                    } else {
                        copytext_sum = copytext_sum + '\t' + copytext
                    }
                }
            }

            copytext_sum = copytext_sum + '\n'

        }

        if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
            copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
        };

        window.clipboardData.setData("Text", copytext_sum);
    }

    //#endregion

    //#region 单列过滤
    this.Filter = function () {
        dw_list.AcceptText();
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        colType = dw_list.Describe(cloname + ".colType");

        if (cloname.indexOf("line") >= 0) {
            return;
        }

        colType = colType.substring(0, 4);

        if (iw_Filter == null)
            iw_Filter = new W_Filter();
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var filter = "";
        //        var rowcount = dw_list.RowCount();
        //        if (rowcount > 0) {
        //            filter = dw_list.GetItemString(1, "filter");
        //        };
        iw_Filter.SetDataWindow(dw_list);
        //        iw_Filter.SetData(filter);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_list.SetFocus();
        dw_list.ScrollToRow(row)


    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle = function () {
        dw_list.SetFilter("");
        dw_list.Filter();
        dw_list.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

}
