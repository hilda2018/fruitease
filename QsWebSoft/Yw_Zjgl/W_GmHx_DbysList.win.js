﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_GmHx_DbysList()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow( requestor );
    var dw_delete = new DataWindow( requestor );
    var dw_filter = new DataWindow( requestor );
    var tb_2 = new ToolStrip( requestor );
    var rb_wqr = new RadioButton( requestor );
    var rb_yqr = new RadioButton( requestor );
    var sle_1 = new SingleLineEdit( requestor );
    var sle_kh = new SingleLineEdit( requestor );
    var sle_jzxh = new SingleLineEdit( requestor );
    var sle_ztdh = new SingleLineEdit( requestor );
    var sle_2 = new SingleLineEdit( requestor );
    var sle_3 = new SingleLineEdit( requestor );
    var tb_1 = new ToolStrip( requestor );
    var ddlb_rqlx = new DropDownListBox( requestor );
    var dp_begin = new DatePicker( requestor );
    var dp_end = new DatePicker( requestor );
    var dw_print = new DataWindow( requestor );
    var dw_log = new DataWindow( requestor );
    var ContextMenuStrip1 = new ContextMenu( requestor );
    var ds_1 = new DataStore( requestor );
    var ds_role = new DataStore( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_list == null ) dw_list = new DataWindow( requestor );
        dw_list.Attach( win.Control( "dw_list" ) );
        if ( dw_delete == null ) dw_delete = new DataWindow( requestor );
        dw_delete.Attach( win.Control( "dw_delete" ) );
        if ( dw_filter == null ) dw_filter = new DataWindow( requestor );
        dw_filter.Attach( win.Control( "dw_filter" ) );
        if ( tb_2 == null ) tb_2 = new ToolStrip( requestor );
        tb_2.Attach( win.Control( "tb_2" ) );
        if ( rb_wqr == null ) rb_wqr = new RadioButton( requestor );
        rb_wqr.Attach( win.Control( "rb_wqr" ) );
        if ( rb_yqr == null ) rb_yqr = new RadioButton( requestor );
        rb_yqr.Attach( win.Control( "rb_yqr" ) );
        if ( sle_1 == null ) sle_1 = new SingleLineEdit( requestor );
        sle_1.Attach( win.Control( "sle_1" ) );
        if ( sle_kh == null ) sle_kh = new SingleLineEdit( requestor );
        sle_kh.Attach( win.Control( "sle_kh" ) );
        if ( sle_jzxh == null ) sle_jzxh = new SingleLineEdit( requestor );
        sle_jzxh.Attach( win.Control( "sle_jzxh" ) );
        if ( sle_ztdh == null ) sle_ztdh = new SingleLineEdit( requestor );
        sle_ztdh.Attach( win.Control( "sle_ztdh" ) );
        if ( sle_2 == null ) sle_2 = new SingleLineEdit( requestor );
        sle_2.Attach( win.Control( "sle_2" ) );
        if ( sle_3 == null ) sle_3 = new SingleLineEdit( requestor );
        sle_3.Attach( win.Control( "sle_3" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( ddlb_rqlx == null ) ddlb_rqlx = new DropDownListBox( requestor );
        ddlb_rqlx.Attach( win.Control( "ddlb_rqlx" ) );
        if ( dp_begin == null ) dp_begin = new DatePicker( requestor );
        dp_begin.Attach( win.Control( "dp_begin" ) );
        if ( dp_end == null ) dp_end = new DatePicker( requestor );
        dp_end.Attach( win.Control( "dp_end" ) );
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

        if ( typeof ( self.CloseQuery ) == "function" )
            win.AttachEvent( "window", "CloseQuery", self.CloseQuery );

        if ( typeof ( self.PostOpen ) == "function" )
            win.AttachEvent( "window", "PostOpen", self.PostOpen );

        if ( typeof ( self.dw_List_Clicked ) == "function" )
            win.AttachEvent( "dw_list", "Clicked", self.dw_List_Clicked );

        if ( typeof ( self.dw_List_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_list", "DoubleClicked", self.dw_List_DoubleClicked );

        if ( typeof ( self.RbuttonDown ) == "function" )
            win.AttachEvent( "dw_list", "RButtonDown", self.RbuttonDown );

        if ( typeof ( self.dw_delete_ButtonClicked ) == "function" )
            win.AttachEvent( "dw_delete", "ButtonClicked", self.dw_delete_ButtonClicked );

        if ( typeof ( self.wqr ) == "function" )
            win.AttachEvent( "rb_wqr", "Clicked", self.wqr );

        if ( typeof ( self.yqr ) == "function" )
            win.AttachEvent( "rb_yqr", "Clicked", self.yqr );

        if ( typeof ( self.sle_EditChanged ) == "function" )
            win.AttachEvent( "sle_1", "EditChanged", self.sle_EditChanged );

        if ( typeof ( self.slekh_EditChanged ) == "function" )
            win.AttachEvent( "sle_kh", "EditChanged", self.slekh_EditChanged );

        if ( typeof ( self.slejzxh_EditChanged ) == "function" )
            win.AttachEvent( "sle_jzxh", "EditChanged", self.slejzxh_EditChanged );

        if ( typeof ( self.sleztdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_ztdh", "EditChanged", self.sleztdh_EditChanged );

        if ( typeof ( self.slejhdd_EditChanged ) == "function" )
            win.AttachEvent( "sle_2", "EditChanged", self.slejhdd_EditChanged );

        if ( typeof ( self.slehz_spmc_EditChanged ) == "function" )
            win.AttachEvent( "sle_3", "EditChanged", self.slehz_spmc_EditChanged );

        if ( typeof ( self.OpenWindow ) == "function" )
            win.AttachEvent( "btn_open", "Clicked", self.OpenWindow );

        if ( typeof ( self.Save ) == "function" )
            win.AttachEvent( "btn_save", "Clicked", self.Save );

        if ( typeof ( self.Print ) == "function" )
            win.AttachEvent( "btn_prn", "Clicked", self.Print );

        if ( typeof ( self.Tj ) == "function" )
            win.AttachEvent( "btn_tj", "Clicked", self.Tj );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "btn_read", "Clicked", self.Retrieve );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

        if ( typeof ( self.Delete ) == "function" )
            win.AttachEvent( "btn_delete", "Clicked", self.Delete );

        if ( typeof ( self.Filter ) == "function" )
            win.AttachEvent( "单列过滤ToolStripMenuItem", "Clicked", self.Filter );

        if ( typeof ( self.Filter_Cancle ) == "function" )
            win.AttachEvent( "取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle );

        if ( typeof ( self.Recover ) == "function" )
            win.AttachEvent( "恢复默认列ToolStripMenuItem", "Clicked", self.Recover );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "刷新ToolStripMenuItem", "Clicked", self.Retrieve );

        if ( typeof ( self.CopyCol ) == "function" )
            win.AttachEvent( "复制ToolStripMenuItem", "Clicked", self.CopyCol );

        if ( typeof ( self.CopySelect ) == "function" )
            win.AttachEvent( "选择复制ToolStripMenuItem", "Clicked", self.CopySelect );

        if ( typeof ( self.CopyL ) == "function" )
            win.AttachEvent( "整列复制ToolStripMenuItem", "Clicked", self.CopyL );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        dw_list.Detach(); dw_list = null;
        dw_delete.Detach(); dw_delete = null;
        dw_filter.Detach(); dw_filter = null;
        tb_2.Detach(); tb_2 = null;
        rb_wqr.Detach(); rb_wqr = null;
        rb_yqr.Detach(); rb_yqr = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        sle_ztdh.Detach(); sle_ztdh = null;
        sle_2.Detach(); sle_2 = null;
        sle_3.Detach(); sle_3 = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_rqlx.Detach(); ddlb_rqlx = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        dw_print.Detach(); dw_print = null;
        dw_log.Detach(); dw_log = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
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

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    var gjzt = "N"

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Yw_Zjgl_HxDbys.ashx");   

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
      
        self.Retrieve();
    }
    //#endregion


    //#region 窗口的OPEN事件
    this.wqr = function ()
    {

        gjzt = "N";
        self.Retrieve();
    }
    //#endregion

    //#region 窗口的OPEN事件
    this.yqr = function ()
    {

        gjzt = "Y";
        self.Retrieve();
    }
    //#endregion


    //#region 查询
    this.Retrieve = function () {
        if (self.CloseQuery() == 1)
            return;

        var rqlx = ddlb_rqlx.GetText();
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        //        if ( endDate < beginDate )
        //        {
        //            requestor.MessageBox( "提示", "结束日期不能小于开始日期!", ICON.StopSign );
        //            dp_Begin.SetFocus();
        //            return;
        //        }

        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");

        dw_list.Retrieve(gjzt, beginDate.getVarDate(), endDate.getVarDate(), rqlx);

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
        var node = "0005c16";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;

        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var hddz_cxh = dw_list.GetItemNumber(dw_list.GetRow(), "hddz_cxh");
        //        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        //        var zbr = dw_list.GetItemString( dw_list.GetRow(), "zbr" );
        var userid = requestor.GetParm("userid");
        var yshdfygjbh = dw_list.GetItemString(dw_list.GetRow(), "yshdfygjbh");
        var operation = requestor.GetParm("operation");
        //失效按钮的控制
        var ywy_ry = QsWebSoft.PubMethod.yshdfygjbh_cjry(yshdfygjbh).value;
        if (ywy_ry != userid) {
            operation = "show";
        }
        if (ywy_ry == userid) {
            operation = "open";
        }
//        if (rb_yqr.GetChecked() == true) {
//            operation = "show";
//        }
        if (yshdfygjbh == "" && rb_wqr.GetChecked() == true) {
            operation = "new";
        }

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&yshdfygjbh=' + yshdfygjbh + '&ywbh=' + ywbh + '&hddz_cxh=' + hddz_cxh + '&operation=' + operation.toString(), true);



    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow();

    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
//        dwoname = dwoName;
//        if (Row > 0)
//            if (dwoName == "id") {
//                self.OpenWindow();
//            }
    }
    //#endregion

//     this.Download = function () {
//         QsWebSoft.PubMethod.DownLoad();
//    }
    //#region 新建
    this.New = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "002012";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        if ( dw_list.RowCount() <= 0 )
            return;

        var ywbh = dw_list.GetItemString( dw_list.GetRow(), 'ywbh' )

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
            ts_1.Open( node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString(), true );
                
    }
    //#endregion

    //#region 删除
    this.Delete = function () {


        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;

        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();
        var ls_ywbh = dw_list.GetItemString(row, "ywbh");
        li_delete_retrieve = dw_delete.Retrieve(ls_ywbh);
        var yshdfygjbh = "";
        var zbr = "";
        if (li_delete_retrieve > 1) {
            dw_delete.Show();

        } else if (li_delete_retrieve == 1) {
            var yshdfygjbh = dw_delete.GetItemString(1, "yshdfygjbh");
            var zbr = dw_delete.GetItemString(1, "zbr");
            var zdbm = dw_delete.GetItemString(1, "zdbm");
            if (zdbm.length > 0) {
                requestor.MessageBox("提示", "单笔应收已经生成账单，不能删除，如需删除，请先删除账单<" + zdbm + ">");
                return;
            } else {
                self.Delete_zx(zbr, yshdfygjbh, row)


            }

        } else {
            requestor.MessageBox("提示", "没有归集数据");
            return;
        }


    }
     //#endregion


    this.dw_delete_ButtonClicked = function ( row, dwoName )
    {
        if ( dwoName == "b_qd" )
        {
            var delete_row = dw_delete.GetRow();
            if ( delete_row <= 0 )
            {
                requestor.MessageBox( "提示", "请选择需要删除的归集编号！" )
                return;
            } else
            {
                  var yshdfygjbh = dw_delete.GetItemString( delete_row, "yshdfygjbh" );
                var zbr = dw_delete.GetItemString( delete_row, "zbr" );

                 var zdbm = dw_delete.GetItemString( 1, "zdbm" );
                 if ( zdbm.length > 0 )
                {
                    requestor.MessageBox( "提示", "单笔应收已经生成账单，不能删除，如需删除，请先删除账单<"+zdbm+">" );
                    return;
                } else
                {   
                    var dw_list_row = dw_list.GetRow();               
                    self.Delete_zx( zbr, yshdfygjbh, dw_list_row )                 
                    dw_delete.Hide();
                    }
            }

        }

        if ( dwoName == "b_qx" )
        {
            dw_delete.Hide();

        }
    }

    this.Delete_zx = function ( zbr, yshdfygjbh, row )
    {
        var userid = requestor.GetParm( "userid" );
        if ( zbr != userid )
        {
            requestor.MessageBox( "提示", "不是自己的数据,不能被删除!", 1 );
            return;
        }

        if ( requestor.MessageBox( "提示", "删除归集编号为<" + yshdfygjbh + ">,是否确定?", ICON.Question, BUTTON.YesNo ) == 2 )
            return;

        //数据同步生鲜港
        var row = dw_log.InsertRow( 0 );
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString( row, "eid_max" ) //"hyfx" + userid + yearMonDay + maxNumber;
        var yshdfygjbh = dw_list.GetItemString( dw_list.GetRow(), "yshdfygjbh" );
        dw_log.SetItem( row, "eid", serialNumber );
        dw_log.SetItem( row, "tablename", "yw_hddz_yshdfygj" );
        dw_log.SetItem( row, "funname", "DelHddz" );
        dw_log.SetItem( row, "mainid", yshdfygjbh );
        dw_log.ScrollToRow( row );

        dw_log.AcceptText();
        var dw_log_data = dw_log.GetChanges();
        
        dw_list.DeleteRow( row );
        dw_list.RowsDiscard( row, row, DWBUFFER.Primary );
        //执行删除的WebService
        webReq.SetFunctionID( requestor.GetFunctionID() );
        webReq.Invoke( "Delete", "yshdfygjbh=" + yshdfygjbh + "&dw_log=" + dw_log_data );
        //webReq.Invoke("Delete", "yshdfygjbh=" + yshdfygjbh );
        dw_log.DeleteRow();
        if ( webReq.StatusCode() == 200 )
        {
            //            dw_list.RowsDiscard( row, row, DWBUFFER.Primary );
            requestor.MessageBox( "提示", webReq.ResponseText() );

        }
        else
        {
            requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
        }
    }

    //#region 打印
    this.Print = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        var state = dw_list.GetItemString(row, 'state')
        if (state != "提交") {
            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
            return;
        }

        dw_print.SetDataObject("dw_hddz_hdfyhxdcf_print");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "sqdbh"));
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
    this.slejzxh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤合同号
    this.sleztdh_EditChanged = function ( text )
    {
        dw_list.SetRedraw( false );
        if ( text == "" )
            dw_list.SetFilter( "" );
        else
            dw_list.SetFilter( "( Upper(ztdh) like Upper('%" + text + "%'))" );
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw( true );
    }
    //#endregion

    //#region 过滤合同号
    this.slejhdd_EditChanged = function ( text )
    {
        dw_list.SetRedraw( false );
        if ( text == "" )
            dw_list.SetFilter( "" );
        else
            dw_list.SetFilter( "( Upper(jhd) like Upper('%" + text + "%'))" );
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw( true );
    }
    //#endregion

    //#region 过滤合同号
    this.slehz_spmc_EditChanged = function ( text )
    {
        dw_list.SetRedraw( false );
        if ( text == "" )
            dw_list.SetFilter( "" );
        else
            dw_list.SetFilter( "( Upper(hz_spmc) like Upper('%" + text + "%'))" );
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw( true );
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



    //#region 复制
    this.Copy = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "0005c16";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh') 
        var operation
            operation = "copy";


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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh  + '&operation=' + operation.toString() , true);



    }
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_GmHx_DbysList", "dw_gm_dbys_list");
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


        //数据同步生鲜港
        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;
        var yshdfygjbh = dw_list.GetItemString(dw_list.GetRow(), "yshdfygjbh");
        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_hddz_yshdfygj");
        dw_log.SetItem(row, "funname", "DelHddz");
        dw_log.SetItem(row, "mainid", yshdfygjbh);
        dw_log.ScrollToRow(row);

        dw_log.AcceptText();
        var dw_log_data = dw_log.GetChanges();
        //        if (dw_log_data == "")
        //            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListSave", "dw_list=" + dw_d_data + "dw_log=" + dw_log_data);

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

    //#region 报批
    this.Tj = function () {
        var sqdbh = dw_list.GetItemString(row, "sqdbh")
        num = QsWebSoft.PubMethod.GenFksqdJzxxx_bp(sqdbh).value;
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var state = dw_list.GetItemString(row, "state")
        if (state == "提交") {

            requestor.MessageBox("提示", "本单据已经提交，不能再提交!")
            return
        }
        var sqdbh = dw_list.GetItemString(row, "sqdbh")
        var sfsp = dw_list.GetItemString(row, "sfsp");
        var num = 0;
        if (sfsp == "Y") {
            num = QsWebSoft.PubMethod.GenFksqdJzxxx_bp(sqdbh).value;
        } else {
            num = QsWebSoft.PubMethod.GenFksqdJzxxx(sqdbh).value;
        }

        if (num == "1") {
            if (sfsp == "Y") {
                dw_list.SetItem(row, "state", "待批");
            } else {
                dw_list.SetItem(row, "state", "提交");
            }
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "报批成功!")
        }
        else {
            requestor.MessageBox("提示", "报批失败!")

        }


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