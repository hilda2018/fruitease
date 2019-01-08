///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wlxx_List()
{

    var self = this;
    var requestor = new PBWindow();
    var em_gsmc = new EditMask( requestor );
    var dw_list = new DataWindow( requestor );
    var dw_gl = new DataWindow( requestor );
    var tb_2 = new ToolStrip( requestor );
    var ddlb_gsxz = new DropDownListBox( requestor );
    var tb_1 = new ToolStrip( requestor );
    var ddlb_rqlx = new DropDownListBox( requestor );
    var dp_begin = new DatePicker( requestor );
    var dp_end = new DatePicker( requestor );
    var sle_wtkh = new SingleLineEdit( requestor );
    var sle_xskhmc = new SingleLineEdit( requestor );
    var sle_ztdh = new SingleLineEdit( requestor );
    var sle_hz_jzxh = new SingleLineEdit( requestor );
    var ddlb_dqzt = new DropDownListBox( requestor );
    var ddlb_ssbm = new DropDownListBox( requestor );
    var dw_filter = new DataWindow( requestor );
    var dw_log = new DataWindow( requestor );
    var ContextMenuStrip1 = new ContextMenu( requestor );
    var ds_1 = new DataStore( requestor );
    var ds_role = new DataStore( requestor );
    var ds_ssbm = new DataStore( requestor );
    var ds_lbgs = new DataStore( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( em_gsmc == null ) em_gsmc = new EditMask( requestor );
        em_gsmc.Attach( win.Control( "em_gsmc" ) );
        if ( dw_list == null ) dw_list = new DataWindow( requestor );
        dw_list.Attach( win.Control( "dw_list" ) );
        if ( dw_gl == null ) dw_gl = new DataWindow( requestor );
        dw_gl.Attach( win.Control( "dw_gl" ) );
        if ( tb_2 == null ) tb_2 = new ToolStrip( requestor );
        tb_2.Attach( win.Control( "tb_2" ) );
        if ( ddlb_gsxz == null ) ddlb_gsxz = new DropDownListBox( requestor );
        ddlb_gsxz.Attach( win.Control( "ddlb_gsxz" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( ddlb_rqlx == null ) ddlb_rqlx = new DropDownListBox( requestor );
        ddlb_rqlx.Attach( win.Control( "ddlb_rqlx" ) );
        if ( dp_begin == null ) dp_begin = new DatePicker( requestor );
        dp_begin.Attach( win.Control( "dp_begin" ) );
        if ( dp_end == null ) dp_end = new DatePicker( requestor );
        dp_end.Attach( win.Control( "dp_end" ) );
        if ( sle_wtkh == null ) sle_wtkh = new SingleLineEdit( requestor );
        sle_wtkh.Attach( win.Control( "sle_wtkh" ) );
        if ( sle_xskhmc == null ) sle_xskhmc = new SingleLineEdit( requestor );
        sle_xskhmc.Attach( win.Control( "sle_xskhmc" ) );
        if ( sle_ztdh == null ) sle_ztdh = new SingleLineEdit( requestor );
        sle_ztdh.Attach( win.Control( "sle_ztdh" ) );
        if ( sle_hz_jzxh == null ) sle_hz_jzxh = new SingleLineEdit( requestor );
        sle_hz_jzxh.Attach( win.Control( "sle_hz_jzxh" ) );
        if ( ddlb_dqzt == null ) ddlb_dqzt = new DropDownListBox( requestor );
        ddlb_dqzt.Attach( win.Control( "ddlb_dqzt" ) );
        if ( ddlb_ssbm == null ) ddlb_ssbm = new DropDownListBox( requestor );
        ddlb_ssbm.Attach( win.Control( "ddlb_ssbm" ) );
        if ( dw_filter == null ) dw_filter = new DataWindow( requestor );
        dw_filter.Attach( win.Control( "dw_filter" ) );
        if ( dw_log == null ) dw_log = new DataWindow( requestor );
        dw_log.Attach( win.Control( "dw_log" ) );
        if ( ContextMenuStrip1 == null ) ContextMenuStrip1 = new ContextMenu( requestor );
        ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1" ) );
        if ( ds_1 == null ) ds_1 = new DataStore( requestor );
        ds_1.Attach( win.Control( "ds_1" ) );
        if ( ds_role == null ) ds_role = new DataStore( requestor );
        ds_role.Attach( win.Control( "ds_role" ) );
        if ( ds_ssbm == null ) ds_ssbm = new DataStore( requestor );
        ds_ssbm.Attach( win.Control( "ds_ssbm" ) );
        if ( ds_lbgs == null ) ds_lbgs = new DataStore( requestor );
        ds_lbgs.Attach( win.Control( "ds_lbgs" ) );

        if ( typeof ( self.PostOpen ) == "function" )
            win.AttachEvent( "window", "PostOpen", self.PostOpen );

        if ( typeof ( self.em_gsmc_Modified ) == "function" )
            win.AttachEvent( "em_gsmc", "Modified", self.em_gsmc_Modified );

        if ( typeof ( self.dw_List_Clicked ) == "function" )
            win.AttachEvent( "dw_list", "Clicked", self.dw_List_Clicked );

        if ( typeof ( self.dw_List_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_list", "DoubleClicked", self.dw_List_DoubleClicked );

        if ( typeof ( self.dw_List_DwnMouseMove ) == "function" )
            win.AttachEvent( "dw_list", "DwnMouseMove", self.dw_List_DwnMouseMove );

        if ( typeof ( self.dw_List_ItemChanged ) == "function" )
            win.AttachEvent( "dw_list", "ItemChanged", self.dw_List_ItemChanged );

        if ( typeof ( self.dw_List_EntertoTab ) == "function" )
            win.AttachEvent( "dw_list", "KeyDown", self.dw_List_EntertoTab );

        if ( typeof ( self.dw_List_LButtonDown ) == "function" )
            win.AttachEvent( "dw_list", "LButtonDown", self.dw_List_LButtonDown );

        if ( typeof ( self.RbuttonDown ) == "function" )
            win.AttachEvent( "dw_list", "RButtonDown", self.RbuttonDown );

        if ( typeof ( self.dw_gl_ButtonClicked ) == "function" )
            win.AttachEvent( "dw_gl", "ButtonClicked", self.dw_gl_ButtonClicked );

        if ( typeof ( self.OpenWindow ) == "function" )
            win.AttachEvent( "btn_open", "Clicked", self.OpenWindow );

        if ( typeof ( self.OpenYcyy ) == "function" )
            win.AttachEvent( "btn_ycyy", "Clicked", self.OpenYcyy );

        if ( typeof ( self.Gl ) == "function" )
            win.AttachEvent( "btn_gl", "Clicked", self.Gl );

        if ( typeof ( self.Xzgs ) == "function" )
            win.AttachEvent( "btn_1", "Clicked", self.Xzgs );

        if ( typeof ( self.ddlb_gsxz_GetFocus ) == "function" )
            win.AttachEvent( "ddlb_gsxz", "GetFocus", self.ddlb_gsxz_GetFocus );

        if ( typeof ( self.ddlb_gsxz_SelectionChanged ) == "function" )
            win.AttachEvent( "ddlb_gsxz", "SelectionChanged", self.ddlb_gsxz_SelectionChanged );

        if ( typeof ( self.Scgs ) == "function" )
            win.AttachEvent( "btn_2", "Clicked", self.Scgs );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "btn_read", "Clicked", self.Retrieve );

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

        em_gsmc.Detach(); em_gsmc = null;
        dw_list.Detach(); dw_list = null;
        dw_gl.Detach(); dw_gl = null;
        tb_2.Detach(); tb_2 = null;
        ddlb_gsxz.Detach(); ddlb_gsxz = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_rqlx.Detach(); ddlb_rqlx = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_wtkh.Detach(); sle_wtkh = null;
        sle_xskhmc.Detach(); sle_xskhmc = null;
        sle_ztdh.Detach(); sle_ztdh = null;
        sle_hz_jzxh.Detach(); sle_hz_jzxh = null;
        ddlb_dqzt.Detach(); ddlb_dqzt = null;
        ddlb_ssbm.Detach(); ddlb_ssbm = null;
        dw_filter.Detach(); dw_filter = null;
        dw_log.Detach(); dw_log = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_ssbm.Detach(); ds_ssbm = null;
        ds_lbgs.Detach(); ds_lbgs = null;
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
    var cloname = "";               
                               
    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    var ib_gl = false;
    var czy = "00";

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Szyw_Ywxx.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {

        self.Retrieve();

        var wjmc = window.location.href;

        var li_pos = wjmc.indexOf( "wjmc=" );
        if ( li_pos > 0 )
        {
            var gsmc = wjmc.substring( li_pos + 5 );
            ddlb_gsxz.SelectItem( parseInt( gsmc ) );
        }

    }
    //#endregion

    //#region 提交
    this.Qr = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var sfqr = dw_list.GetItemString(row, "sfqr");
        var sftj = dw_list.GetItemString(row, "sftj");
        if (sftj == "Y") {
            if (sfqr == "Y") {
                requestor.MessageBox("提示", "本单据已经提交，不能再提交!")
                return
            }
            else {
                dw_list.SetItem(row, "sfqr", "Y");
                var ywbh = dw_list.GetItemString(row, "ywbh");
                dw_list.ResetUpdate();

                var num = QsWebSoft.PubMethod.Ggdzqrzt("Y", ywbh).value;
                if (num = 1) {

                    requestor.MessageBox("提示", "数据已确认!")
                }
       
       
                else {
                    requestor.MessageBox("提示", "提交失败!")
                }
            }
        }
        else {
            requestor.MessageBox("提示", "数据未提交到货代单证!")
        }
    }
    //#endregion

    //#region 自己查询
    this.Retrieve = function ()
    {
        var beginDate = new Date( dp_begin.GetValue() );
        var endDate = new Date( dp_end.GetValue() );
        var rqlx = ddlb_rqlx.GetText();
        var wtkh = sle_wtkh.GetText();
        var xskhmc = sle_xskhmc.GetText();
        var ztdh = sle_ztdh.GetText();
        var hz_jzxh = sle_hz_jzxh.GetText();
        var dqzt = ddlb_dqzt.GetText();
        var bm = ddlb_ssbm.GetText();


        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours( 0 );
        beginDate.setMinutes( 0 );
        beginDate.setSeconds( 0 );

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours( 23 );
        endDate.setMinutes( 59 );
        endDate.setSeconds( 59 );

        if ( endDate <= beginDate )
        {
            requestor.MessageBox( "提示", "结束日期不能小于开始日期!", ICON.StopSign );
            dp_Begin.SetFocus();
            return;
        }

        dw_gl.AcceptText();
        var userid = requestor.GetParm( "userid" );
        var ShareMode = requestor.GetParm( "ShareMode" );
        var Dlwtf = requestor.GetParm( "Dlwtf" );
        var gwgysmc = dw_gl.GetItemString( 1, "gwgysmc" );
        var hdzt = dw_gl.GetItemString( 1, "hdzt" );
        var bgzt = dw_gl.GetItemString( 1, "bgzt" );
        var pz = dw_gl.GetItemString( 1, "pz" );
        var cm = dw_gl.GetItemString( 1, "cm" );
        var cyr = dw_gl.GetItemString( 1, "cyr" );
        var hz_spmc = dw_gl.GetItemString( 1, "hz_spmc" );
        var mygb = dw_gl.GetItemString( 1, "mygb" );
        var clxx = dw_gl.GetItemString( 1, "clxx" );
        var xgjb = dw_gl.GetItemString( 1, "xgjb" );
        var szjb = dw_gl.GetItemString( 1, "szjb" );
        var jhdd = dw_gl.GetItemString( 1, "jhdd" );
        var rjka = dw_gl.GetItemString( 1, "rjka" );
        var mtxx = dw_gl.GetItemString( 1, "mtxx" );
        var ysfs = dw_gl.GetItemString( 1, "ysfs" );
        var lry = dw_gl.GetItemString( 1, "lry" );
        var hcorhbh = dw_gl.GetItemString( 1, "hcorhbh" )
        //        dw_list.Retrieve( rqlx,beginDate.getVarDate(), endDate.getVarDate(),"");
        //     

        if ( czy = userid )
        {
            QsWebSoft.PubMethod.Ywxx_glsc( userid, "dw_wlxx_list" );
            QsWebSoft.PubMethod.Ywxx_gl( userid, "dw_wlxx_list", gwgysmc, hdzt, bgzt, pz, cm, cyr, hz_spmc, mygb, clxx, xgjb, szjb, jhdd, rjka, mtxx, ysfs, lry, hcorhbh );
        } else
        {
            QsWebSoft.PubMethod.Ywxx_glsc( userid, "dw_wlxx_list" );
        }
        dw_list.Retrieve( beginDate.getVarDate(), endDate.getVarDate(), rqlx, wtkh, xskhmc, ztdh, hz_jzxh, dqzt, bm, czy );
        dw_gl.Hide();
        ib_gl = false;
    }
    //#endregion



    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    }


    //#region

    this.Gl = function ()
    {

        if ( ib_gl == false )
        {
            dw_gl.Show();
            ib_gl = true;
        }
        else
        {
            dw_gl.Hide();
            ib_gl = false;
        }
        czy = requestor.GetParm( "userid" );
    }

    //#endregion

    //#region 打开编辑窗口
    this.OpenWindow = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "002004";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
         //失效按钮的控制
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");

       
        var ysfs = dw_list.GetItemString(dw_list.GetRow(), 'ysfs')

        var operation
//        if (ywy == userid || zbr == userid || userid == "0003"  ) {
            operation = "open";
//        }
//        else {
//            operation = "show";
//        }

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
           self.OpenWindow();              
        }
    }
    //#endregion


   this.Xzgs = function ()
   {
       em_gsmc.Show();
   }

   //#region 新增格式
   this.ddlb_gsxz_SelectionChanged = function (text)
   {

       var gsxz = ddlb_gsxz.GetText();

       QsWebSoft.PubMethod.InsertColRecordLsjl( "QsWebSoft.Szyw.W_Wlxx_List", "dw_Wlxx_list", gsxz );

       var wjmc = window.location.href;

       var li_pos = wjmc.indexOf( "wjmc=" );
       if ( li_pos > 0 )
       {
           wjmc = wjmc.substring( 0, li_pos - 1 );
       };

       window.location.href = wjmc + "&wjmc=" + text;

   }
   //#endregion

   this.ddlb_gsxz_GetFocus = function ()
   {
//       var userid = requestor.GetParm( "userid" );
//       ds_lbgs.DataWindowObject = "dw_lbgs_select";
//       ds_lbgs.Retrieve( userid, "QsWebSoft.Szyw.W_Wlxx_List", "dw_Wlxx_list" )
//       ddlb_gsxz.Reset();
//       for ( row = 1; row <= ds_lbgs.RowCount(); row++ )
//       {
//           var gsmc = ds_lbgs.GetItemString( row, "gsmc" );
//           ddlb_gsxz.AddItem( gsmc );
//       }

   }

   this.em_gsmc_Modified = function ( text )
   {
       em_gsmc.Hide();

       QsWebSoft.PubMethod.InsertColRecord( "QsWebSoft.Szyw.W_Wlxx_List", "dw_wlxx_list", text );

       ddlb_gsxz.AddItem( text );
   }
   //#endregion


   this.Scgs = function ()
   {
       

       var gsmc = ddlb_gsxz.GetText();
       if ( gsmc != "" && gsmc != null )
       {

           QsWebSoft.PubMethod.DeleteColRecordLsjl( "QsWebSoft.Szyw.W_Wlxx_List", "dw_wlxx_list", gsmc );
           requestor.MessageBox( "提示", "删除成功!" );

           var userid = requestor.GetParm( "userid" );
           ds_lbgs.DataWindowObject = "dw_lbgs_select";
           ds_lbgs.Retrieve( userid, "QsWebSoft.Szyw.W_Wlxx_List", "dw_wlxx_list" )
           ddlb_gsxz.Reset();
           for ( row = 1; row <= ds_lbgs.RowCount(); row++ )
           {
               var gsmc = ds_lbgs.GetItemString( row, "gsmc" );
               ddlb_gsxz.AddItem( gsmc );
           }

       }

   }



    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
                       fzks_row = Row;
        };
    }
    //#endregion

                   
    
    function GMTToStr(time) {
        var date = new Date(time)
        var Str = date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate() + ' ' +
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds()
        return Str
    }
    //#region 删除
    this.Delete = function ()
    {

        var row = dw_list.GetRow();
        if ( row <= 0 )
            retturn;


        var status = dw_list.GetItemString( row, "state" );

        if ( status != "新制" )
        {
            requestor.MessageBox( "提示", "当前货代单证的状态为<" + status + ">,不能被删除!", 1 );
            return;
        }

        var zbr = dw_list.GetItemString( row, "zbr" );
        var userid = requestor.GetParm( "userid" );
//        if ( zbr != userid )
//        {
//            requestor.MessageBox( "提示", "不是自己的数据,不能被删除!", 1 );
//            return;
//        }

        var hgfxsj = dw_list.GetItemDate( row, "hgfxsj" );
        var hgfxsj = GMTToStr( hgfxsj );
        var ywbh = dw_list.GetItemString( row, "ywbh" );
        if ( hgfxsj == '1900-1-1 0:0:0' )
        {
            var num = QsWebSoft.PubMethod.hddzDeleteRow( ywbh ).value;
            if ( num > 0 )
            {
                alert( "这票业务，已经做过费用不能删除！" );
                return;
            }
        }


        //var ywbh = dw_list.GetItemString(row, "ywbh");
        if ( requestor.MessageBox( "提示", "删除货代单证<" + ywbh + ">,是否确定?", ICON.Question, BUTTON.YesNo ) == 2 )
            return;

        var jdrbm = dw_list.GetItemString( row, "jdrbm" );
        var jdrState = QsWebSoft.PubMethod.SelJdrState( ywbh ).value;

        //同步生鲜港
        var SupplierSellID = dw_list.GetItemString( row, "SupplierSellID" );

        if ( SupplierSellID == null || SupplierSellID == "" )
        {
            if ( jdrState == "Y" )
            {
                requestor.MessageBox( "提示", "数据在上传处理中，10分钟后刷新列表再删除！", 1 );
                return;
            }
        }

        var ywbh = dw_list.GetItemString( row, "ywbh" );
        var log_num = dw_log.RowCount();

        var row = dw_log.InsertRow( 0 );
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString( row, "eid_max" ) //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem( row, "eid", serialNumber );
        dw_log.SetItem( row, "tablename", "yw_hddz" );
        dw_log.SetItem( row, "funname", "DelHddz" );
        dw_log.SetItem( row, "mainid", SupplierSellID );
        dw_log.SetItem( row, "parameters", ywbh );
        dw_log.ScrollToRow( row );
        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if ( dw_log_data == "" )
            return;
       
        //执行删除的WebService
        webReq.SetFunctionID( requestor.GetFunctionID() );
        webReq.Invoke( "Delete", "ywbh=" + ywbh + "&dw_log=" + dw_log_data );

        if ( webReq.StatusCode() == 200 )
        {
            dw_list.RowsDiscard( row, row, DWBUFFER.Primary );
            dw_log.ResetUpdate();
            requestor.MessageBox( "提示", webReq.ResponseText() );
        }
        else
        {
            requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
        }
    }
    //#endregion

     
   
  function GMTToStr(time){
    var  date = new Date(time)
    var  Str=date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' + 
    date.getDate() + ' ' + 
    date.getHours() + ':' + 
    date.getMinutes() + ':' + 
    date.getSeconds()
    return Str
}
 

    //#region 过滤客户
    this.slekh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("(Upper(khmc) like Upper('%" + text + "%')) or  (Upper(khpym) like Upper('%" + text + "%'))");
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
            dw_list.SetFilter("(Upper(hth) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    

     

    //#region 复制
    this.Copy = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "002002";
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString(), true);



    }
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_Wlxx_List", "dW_Wlxx_List");
        self.Retrieve();
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
        var str1 = dw_list.Describe("DataWindow.Table.Filter");
        dw_list.SetFilter();
        dw_list.Filter();



        var userid = requestor.GetParm("userid");
        dw_ygkthsj.Retrieve();
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
                dw_log.SetItem(row, "changecols", "xhgqbm,xhgq,xhgqjc,xhgqpym,mtdm,jcka,rjka,cdgsbm,cdgs,cdgsjc,cdgspym,hdzljcbz,hdzljcsj,hdzljcsj,sfsdhdzl,kyhdsj,tdlx,dzqk,cyrjc,hz_xx,jgtkqr,dsdyfzf,zjsjc,gwhdjc,zcqr,ctr_area2,dmbz,tycj,sfbhbj,bhbjsj,sfxb,sfzbzj,zbzjsj,js");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.ScrollToRow(row);
            };                
        }

        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;
                      

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }

        dw_list.SetFilter(str1);
        dw_list.Filter();
    }
    //#endregion  

     

    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\业务信息.txt');
        //        window.open('\aa.docx')
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
        iw_Hddz_Ycyy.SetYybm("0101");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

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
        
        iw_Filter.SetDataWindow(dw_list);   
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

    //#region 过滤取消
    this.dw_export = function () {
        dw_list.SaveAs("D:\AAAA.xml");
    }
    //#endregion

    
}