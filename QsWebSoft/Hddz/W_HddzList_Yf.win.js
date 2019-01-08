///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Yf()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow( requestor );
    var tb_3 = new ToolStrip( requestor );
    var ddlb_jdrjc = new DropDownListBox( requestor );
    var dw_1 = new DataWindow( requestor );
    var dw_filter = new DataWindow( requestor );
    var tb_2 = new ToolStrip( requestor );
    var dp_begin = new DatePicker( requestor );
    var dp_end = new DatePicker( requestor );
    var sle_1 = new SingleLineEdit( requestor );
    var sle_kh = new SingleLineEdit( requestor );
    var sle_hth = new SingleLineEdit( requestor );
    var sle_tdh = new SingleLineEdit( requestor );
    var sle_ftdh = new SingleLineEdit( requestor );
    var sle_fph = new SingleLineEdit( requestor );
    var tb_1 = new ToolStrip( requestor );
    var ddlb_htlx = new DropDownListBox( requestor );
    var ddlb_yfzt = new DropDownListBox( requestor );
    var ddlb_fpzt = new DropDownListBox( requestor );
    var ddlb_sdzt = new DropDownListBox( requestor );
    var ddlb_qrzt = new DropDownListBox( requestor );
    var dw_print = new DataWindow( requestor );
    var dw_log = new DataWindow( requestor );
    var ContextMenuStrip1 = new ContextMenu( requestor );
    var ds_1 = new DataStore( requestor );
    var ds_role = new DataStore( requestor );
    var ds_2 = new DataStore( requestor );

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
        if ( dw_1 == null ) dw_1 = new DataWindow( requestor );
        dw_1.Attach( win.Control( "dw_1" ) );
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
        if ( sle_tdh == null ) sle_tdh = new SingleLineEdit( requestor );
        sle_tdh.Attach( win.Control( "sle_tdh" ) );
        if ( sle_ftdh == null ) sle_ftdh = new SingleLineEdit( requestor );
        sle_ftdh.Attach( win.Control( "sle_ftdh" ) );
        if ( sle_fph == null ) sle_fph = new SingleLineEdit( requestor );
        sle_fph.Attach( win.Control( "sle_fph" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( ddlb_htlx == null ) ddlb_htlx = new DropDownListBox( requestor );
        ddlb_htlx.Attach( win.Control( "ddlb_htlx" ) );
        if ( ddlb_yfzt == null ) ddlb_yfzt = new DropDownListBox( requestor );
        ddlb_yfzt.Attach( win.Control( "ddlb_yfzt" ) );
        if ( ddlb_fpzt == null ) ddlb_fpzt = new DropDownListBox( requestor );
        ddlb_fpzt.Attach( win.Control( "ddlb_fpzt" ) );
        if ( ddlb_sdzt == null ) ddlb_sdzt = new DropDownListBox( requestor );
        ddlb_sdzt.Attach( win.Control( "ddlb_sdzt" ) );
        if ( ddlb_qrzt == null ) ddlb_qrzt = new DropDownListBox( requestor );
        ddlb_qrzt.Attach( win.Control( "ddlb_qrzt" ) );
        if ( dw_print == null ) dw_print = new DataWindow( requestor );
        dw_print.Attach( win.Control( "dw_print" ) );
        if ( dw_log == null ) dw_log = new DataWindow( requestor );
        dw_log.Attach( win.Control( "dw_log" ) );
        if ( ContextMenuStrip1 == null ) ContextMenuStrip1 = new ContextMenu( requestor );
        ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1" ) );
        if ( ds_1 == null ) ds_1 = new DataStore( requestor );
        ds_1.Attach( win.Control( "ds_1" ) );
        if ( ds_role == null ) ds_role = new DataStore( requestor );
        ds_role.Attach( win.Control( "ds_role" ) );
        if ( ds_2 == null ) ds_2 = new DataStore( requestor );
        ds_2.Attach( win.Control( "ds_2" ) );

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

        if ( typeof ( self.dw_List_ItemChanged ) == "function" )
            win.AttachEvent( "dw_list", "ItemChanged", self.dw_List_ItemChanged );

        if ( typeof ( self.dw_List_LButtonDown ) == "function" )
            win.AttachEvent( "dw_list", "LButtonDown", self.dw_List_LButtonDown );

        if ( typeof ( self.dw_List_MouseMove ) == "function" )
            win.AttachEvent( "dw_list", "MouseMove", self.dw_List_MouseMove );

        if ( typeof ( self.RbuttonDown ) == "function" )
            win.AttachEvent( "dw_list", "RButtonDown", self.RbuttonDown );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_jdrjc", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "btn_read", "Clicked", self.Retrieve );

        if ( typeof ( self.sle_EditChanged ) == "function" )
            win.AttachEvent( "sle_1", "EditChanged", self.sle_EditChanged );

        if ( typeof ( self.slekh_EditChanged ) == "function" )
            win.AttachEvent( "sle_kh", "EditChanged", self.slekh_EditChanged );

        if ( typeof ( self.slehth_EditChanged ) == "function" )
            win.AttachEvent( "sle_hth", "EditChanged", self.slehth_EditChanged );

        if ( typeof ( self.sletdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_tdh", "EditChanged", self.sletdh_EditChanged );

        if ( typeof ( self.sleftdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_ftdh", "EditChanged", self.sleftdh_EditChanged );

        if ( typeof ( self.slefph_EditChanged ) == "function" )
            win.AttachEvent( "sle_fph", "EditChanged", self.slefph_EditChanged );

        if ( typeof ( self.Help ) == "function" )
            win.AttachEvent( "btn_Help", "Clicked", self.Help );

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

        if ( typeof ( self.ddlb_SelectionChanged ) == "function" )
            win.AttachEvent( "ddlb_htlx", "SelectionChanged", self.ddlb_SelectionChanged );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_yfzt", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.ddlb_SelectionChanged ) == "function" )
            win.AttachEvent( "ddlb_fpzt", "SelectionChanged", self.ddlb_SelectionChanged );

        if ( typeof ( self.ddlb_SelectionChanged ) == "function" )
            win.AttachEvent( "ddlb_sdzt", "SelectionChanged", self.ddlb_SelectionChanged );

        if ( typeof ( self.ddlb_SelectionChanged ) == "function" )
            win.AttachEvent( "ddlb_qrzt", "SelectionChanged", self.ddlb_SelectionChanged );

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
        dw_1.Detach(); dw_1 = null;
        dw_filter.Detach(); dw_filter = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_hth.Detach(); sle_hth = null;
        sle_tdh.Detach(); sle_tdh = null;
        sle_ftdh.Detach(); sle_ftdh = null;
        sle_fph.Detach(); sle_fph = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_htlx.Detach(); ddlb_htlx = null;
        ddlb_yfzt.Detach(); ddlb_yfzt = null;
        ddlb_fpzt.Detach(); ddlb_fpzt = null;
        ddlb_sdzt.Detach(); ddlb_sdzt = null;
        ddlb_qrzt.Detach(); ddlb_qrzt = null;
        dw_print.Detach(); dw_print = null;
        dw_log.Detach(); dw_log = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_2.Detach(); ds_2 = null;
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
    var iw_Fj_Edit = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hddz.ashx");   

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
        var yfzt = ddlb_yfzt.GetText();
        var jdrjc = ddlb_jdrjc.GetText();


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
        var Dlwtf = requestor.GetParm("Dlwtf");
        var Tybm = requestor.GetParm("Tybm");
        var Sfqytybm = requestor.GetParm("Sfqytybm");

        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), yfzt, Dlwtf, Tybm, Sfqytybm, userid,jdrjc);
        dw_log.Retrieve(userid, "yfgl");
    }
    //#endregion

    //#this.ddlb_SelectionChanged 数据查询
    this.ddlb_SelectionChanged = function () {
        var fpzt = ddlb_fpzt.GetText();
        var sdzt = ddlb_sdzt.GetText();
        var htlx = ddlb_htlx.GetText();
        var qrzt = ddlb_qrzt.GetText();
        
        var ls_filter = "";

        if (fpzt == "全部" || fpzt == "") {
            ls_filter = ""
        } else {
            ls_filter = "(( Upper(fpzt) like Upper('%" + fpzt + "%')))"
        }

        if (sdzt == "全部" || sdzt == "") {
            ls_filter = ls_filter
        } else {
            ls_filter = ls_filter + " and (( Upper(sdzt) like Upper('%" + sdzt + "%')))"
        }

        if (htlx == "全部" || htlx == "") {
            ls_filter = ls_filter
        } else {
            if (htlx == "终止合同") {
                if (ls_filter == "") {
                    ls_filter = ls_filter + " (state = '终止')";
                } else {
                    ls_filter = ls_filter + " and (state = '终止')";
                }
            } else {
                if (ls_filter == "") {
                    ls_filter = ls_filter + "(state <> '终止')";
                } else {
                    ls_filter = ls_filter + " and (state <> '终止')";
                }
            }
        }

        if (qrzt == "全部" || qrzt == "") {
            ls_filter = ls_filter
        } else {
            if (qrzt == "未确认") {
                if (ls_filter == "") {
                    ls_filter = ls_filter + " ( yfqr = 'N' or isnull(yfqr))";
                } else {
                    ls_filter = ls_filter + " and ( yfqr = 'N' or isnull(yfqr))";
                }
            } else {
                if (ls_filter == "") {
                    ls_filter = ls_filter + "(yfqr = 'Y')";
                } else {
                    ls_filter = ls_filter + " and (yfqr = 'Y')";
                }
            }
        }

        dw_list.SetRedraw(false);
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);

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
        var operation
        operation = "show";




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
        if (Row > 0) {
            if (dwoName == "yfcdrjc") {
                var khorhd = dw_list.GetItemString(Row, "khorhd")
                if (khorhd == "客户") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "gncgs";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");

                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetData("hddz_yf_yfcdr");
                    iw_Wldw_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_list.SetFocus();
                }
                 if (khorhd == "货代") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "hdgs";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");

                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetData("hddz_yf_yfcdr");
                    iw_Wldw_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_list.SetFocus();
                }
            }

            else if (dwoName == "hygsmc") {
                var yw_khbm = dw_list.GetItemString(Row, "hygsmc")
                if (yw_khbm == null || yw_khbm == "")
                    return
                self.OpenWldw(yw_khbm);
            }
            else if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_list.GetItemString(Row, "ywbh");
                var lx = "hdyf"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_list.SetFocus();

            }
            else if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_list.GetItemString(Row, "ywbh");
                var lx = "hddz"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_list.SetFocus();

            }
            else if (dwoName == "jsdwjc") {

                var gjyf = dw_list.GetItemString(Row, "gjyf");
                var jsdwqr = dw_list.GetItemString(Row, "jsdwqr");
                if (gjyf == "Y") {
                    requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                    return
                }
                if (jsdwqr == "Y") {
                    requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                    return
                }

                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var khlx = "gncgs";
                iw_Wldw_Select.SetDataWindow(dw_list);
                iw_Wldw_Select.SetData("hddz_yf_jsdw");
                iw_Wldw_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_list.SetFocus();
            }
            else if (dwoName == "ywbh") {
                self.OpenWindow();
            }
        }

    }
    //#endregion

    //#region 修改数据窗口内容dw_List_ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "khorhd") {
            dw_list.SetRedraw(false)

            if (data == "客户") {
                var khbm = dw_list.GetItemString(row, "khbm")
                var khmc = dw_list.GetItemString(row, "khmc")
                var khjc = dw_list.GetItemString(row, "khjc")
                var khpym = dw_list.GetItemString(row, "khpym")

                dw_list.SetItem(row, "yfcdrbm", khbm)
                dw_list.SetItem(row, "yfcdr", khmc)
                dw_list.SetItem(row, "yfcdrjc", khjc)
                dw_list.SetItem(row, "yfcdrpym", khpym)
            }
            else if (data == "货代") {
                var hdgsbm = dw_list.GetItemString(row, "hdgsbm")
                var hdgsmc = dw_list.GetItemString(row, "hdgsmc")
                var hdgsjc = dw_list.GetItemString(row, "hdgsjc")
                var hdgspym = dw_list.GetItemString(row, "hdgspym")

                dw_list.SetItem(row, "yfcdrbm", hdgsbm)
                dw_list.SetItem(row, "yfcdr", hdgsmc)
                dw_list.SetItem(row, "yfcdrjc", hdgsjc)
                dw_list.SetItem(row, "yfcdrpym", hdgspym)
            };
            dw_list.SetRedraw(true)
        }
        var date = new Date();
        var date_null = new Date("1900/1/1");
        if (dwoName == "sfytzcgskp") {
            if (data == "Y") {
                dw_list.SetItem(row, "tzcgskpsj", date.getVarDate())
            } else {
                dw_list.SetItem(row, "tzcgskpsj", date_null.getVarDate())
            }
        }


        if (dwoName == "sfsdsd") {
            if (data == "Y") {
                dw_list.SetItem(row, "sdsdsj", date.getVarDate())
            } else {
                dw_list.SetItem(row, "sdsdsj", date_null.getVarDate())
            }
        }


        if (dwoName == "sfyfyzf") {
            if (data == "Y") {
                dw_list.SetItem(row, "yfzfqrsj", date.getVarDate())
            } else {
                var date_null = new Date("1900/1/1");
                dw_list.SetItem(row, "yfzfqrsj", date_null.getVarDate())
                
            }
        }

        if (dwoName == "fph") {
            if (data != "") {
                dw_list.SetItem(row, "sdyffpsj", date.getVarDate())

            }
        }

    }
    //#endregion

           
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

    //#region 过滤提单号
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


    //#region 过滤发票号
    this.slefph_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(zzsfph) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion




    //#region 过滤
    this.sle2_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion  



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hd", "dw_hddz_list_Hd");
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
        if (dw_d_data == "")
            return;

        dw_list.SetFilter();
        dw_list.Filter();

        //数据同步生鲜港
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            var state = dw_list.GetItemStatus(i, 0, DWBUFFER.Primary);
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {

                var ywbh = dw_list.GetItemString(i, "ywbh");
                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz");
                dw_log.SetItem(row, "changecols", "yfcdrbm,yfcdr,yfcdrjc,yfcdrpym,yfzfqrsj");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.ScrollToRow(row);
            }
        }

        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListYfSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            for (var i = 1; i <= dw_list.RowCount(); i++) {
                var date_null = new Date("2000/1/1");
                if (dw_list.GetItemStatus(i, "sfyfyzf", DWBUFFER.Primary) == 1) {
                    if (dw_list.GetItemDate(i, "yfzfqrsj") < date_null.getVarDate()) {
                        var num = QsWebSoft.PubMethod.UpdateDateNull(dw_list.GetItemString(i, "ywbh"), "yfzfqrsj").value;
                    }
                }
            }
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
    }
    //#endregion  



    //#region 打开往来单位编辑界面
    this.OpenWldw = function (text) {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "009002";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (text == null)
            return;
         var operation
         operation = "show";
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&yw_khbm=' + text + '&operation=' + operation.toString(), true);

    }
    //#endregion

    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\运费管理.txt')
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

        iw_Hddz_Ycyy.SetDataWindow(dw_list);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("0103");
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
        if (Row > 0) {  fzjs_row   = Row;   }
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
