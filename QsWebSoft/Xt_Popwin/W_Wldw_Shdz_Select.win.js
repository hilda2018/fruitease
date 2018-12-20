///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_Shdz_Select()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow( requestor );
    var dw_2 = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );
    var sle_1 = new SingleLineEdit( requestor );
    var ds_1 = new DataStore( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_1 == null ) dw_1 = new DataWindow( requestor );
        dw_1.Attach( win.Control( "dw_1" ) );
        if ( dw_2 == null ) dw_2 = new DataWindow( requestor );
        dw_2.Attach( win.Control( "dw_2" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( sle_1 == null ) sle_1 = new SingleLineEdit( requestor );
        sle_1.Attach( win.Control( "sle_1" ) );
        if ( ds_1 == null ) ds_1 = new DataStore( requestor );
        ds_1.Attach( win.Control( "ds_1" ) );

        if ( typeof ( self.OK ) == "function" )
            win.AttachEvent( "dw_1", "DoubleClicked", self.OK );

        if ( typeof ( self.dw_2_Clickded ) == "function" )
            win.AttachEvent( "dw_2", "Clicked", self.dw_2_Clickded );

        if ( typeof ( self.Add ) == "function" )
            win.AttachEvent( "btn_Add", "Clicked", self.Add );

        if ( typeof ( self.DeleteRow ) == "function" )
            win.AttachEvent( "btn_1", "Clicked", self.DeleteRow );

        if ( typeof ( self.sle_EditChanged ) == "function" )
            win.AttachEvent( "sle_1", "EditChanged", self.sle_EditChanged );

        if ( typeof ( self.OK ) == "function" )
            win.AttachEvent( "btn_ok", "Clicked", self.OK );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_Cancel", "Clicked", self.Exit );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        dw_1.Detach(); dw_1 = null;
        dw_2.Detach(); dw_2 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        ds_1.Detach(); ds_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var dw_mx = null;

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
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl( "/Service/Wldw.ashx" );



    this.OK = function ()
    {
        var row = dw_1.GetRow();     
        if ( row <= 0 )
        {
            requestor.MessageBox( "提示", "请选择要添加的往来单位信息!", ICON.StopSign );
            sle_1.SetFocus();
            return;

        }
        var shdz = dw_1.GetItemString( row, 'shdz' );
        var dz_sf = dw_1.GetItemString( row, 'dz_sf' );
        var dz_dq = dw_1.GetItemString( row, 'dz_dq' );
        var dz_lm = dw_1.GetItemString( row, 'dz_lm' );
        var type = dw_1.GetItemNumber( row, "type" );
        var jd = dw_1.GetItemString( row, 'jd' );
        var wd = dw_1.GetItemString( row, 'wd' );
        var fw = dw_1.GetItemString( row, 'fw' );
        var points = dw_1.GetItemString( row, 'points' );

        if ( dw_mx != null )
        {
            if ( column == "hddz_shdz" )
            {
                dw_mx.SetItem( RowData, 'shdz', shdz );
                requestor.Close();
            };
            if ( column == "hddz_shdz2" )
            {
                dw_mx.SetItem( RowData, 'jschfscwld_zyxx', shdz );

                requestor.Close();
            };

            if ( column == "hddz_shdz3" )
            {
                dw_mx.SetItem( RowData, 'fscwld3_zyxx', shdz );

                requestor.Close();
            };

            if ( column == "hddz_shdz4" )
            {
                dw_mx.SetItem( RowData, 'fscwld4_zyxx', shdz );
                requestor.Close();
            };
            if ( column == "hddz_shdz5" )
            {
                dw_mx.SetItem( RowData, 'zhongdian', shdz );
                requestor.Close();
            };

            if ( column == "thwljh_shdz" )
            {
                dw_mx.SetItem( RowData, 'shdz', shdz );
                dw_mx.SetItem( RowData, 'zjfscwld_zyxx', shdz );
                requestor.Close();
            };

            if ( column == "thwljh_zjfscwld_zyxx" )
            {
                dw_mx.SetItem( RowData, 'zjfscwld_zyxx', shdz );
                requestor.Close();
            };

            if ( column == "thwljh_jschfscwld_zyxx" )
            {
                dw_mx.SetItem( RowData, 'jschfscwld_zyxx', shdz );
                requestor.Close();
            };

            if ( column == "thwljh_fscwld3_zyxx" )
            {
                dw_mx.SetItem( RowData, 'fscwld3_zyxx', shdz );
                requestor.Close();
            };

            if ( column == "thwljh_fscwld4_zyxx" )
            {
                dw_mx.SetItem( RowData, 'fscwld4_zyxx', shdz );
                requestor.Close();
            };

            if ( column == "thwljh_wlgz_dz" )
            {
                dw_mx.SetItem( RowData, 'dz_xx', shdz );
                dw_mx.SetItem( RowData, 'dz_sf', dz_sf );
                dw_mx.SetItem( RowData, 'dz_dq', dz_dq );
                dw_mx.SetItem( RowData, 'dz_lm', dz_lm );
                dw_mx.SetItem( RowData, 'type', type );
                dw_mx.SetItem( RowData, 'jd', jd );
                dw_mx.SetItem( RowData, 'wd', wd );
                dw_mx.SetItem( RowData, 'fw', fw );
                dw_mx.SetItem( RowData, 'points', points );
                var ifModify = dw_mx.GetItemNumber( RowData, "ifmodify" );
                if ( ifModify > 0 )
                {
                    ifModify += 1;
                }
                dw_mx.SetItem( RowData, "ifmodify", ifModify );

                requestor.Close();
            };

            if ( column == "thwljh_wlgz_dz_list" )
            {
                dw_mx.SetItem( RowData, 'jzxxx_zyxx', shdz );
                requestor.Close();
            };

        };

    }

        this.Exit = function () {
            requestor.Close();
        }

        this.sle_EditChanged = function (text) {
            dw_1.SetRedraw(false);

            if (text == "") {
                dw_1.SetFilter("");
                dw_1.Filter();
            }
            else {
                dw_1.SetFilter("( Upper(shdz) like '%" + text + "%') or ( Lower(shdz) like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();
            }
            dw_1.SetRedraw( true );


//            dw_2.SetRedraw( false );

            if ( text == "" )
            {
                dw_2.SetFilter( "" );
                dw_2.Filter();
            }
            else
            {
                dw_2.SetFilter( "( Upper(shdz) like '%" + text + "%') or ( Lower(shdz) like '%" + text + "%')" );
                dw_2.Filter();
                dw_2.Sort();
            }
//            dw_1.SetRedraw( true );

        }

        //#region 增加
        this.Add = function ()
        {
            khbm = dw_mx.GetItemString( RowData, "sjshrbm" );
            khmc = dw_mx.GetItemString( RowData, "sjshrmc" );

            for ( var i = 1; i <= dw_2.RowCount(); i++ )
            {
                var xz = dw_2.GetItemString( i, "xz" );
                if ( xz == "Y" )
                {
                    var dz_id = dw_2.GetItemNumber( i, "dz_id" );
                    var shdz = dw_2.GetItemString( i, "shdz" );
                    var li_insertrow = dw_1.InsertRow( 0 );
                    dw_1.SetItem( li_insertrow, "dz_id", dz_id );
                    dw_1.SetItem( li_insertrow, "shdz", shdz );
                    dw_1.SetItem( li_insertrow, "khbm", khbm );
                    dw_1.SetItem( li_insertrow, "khmc", khmc );
                }



            }


            dw_1.AcceptText();

            var dw_list_data = dw_1.GetChanges();

            //执行保存的WebService
            webReq.SetFunctionID( requestor.GetFunctionID() );
            webReq.Invoke( "WldwShdzListSave", "dw_list=" + dw_list_data );
            if ( webReq.StatusCode() == 200 )
            {
                //服务器成功处理，返回单号
                ywbh = webReq.ResponseText();
                dw_1.ResetUpdate();

                dw_2.Retrieve( khbm )
                dw_1.Retrieve( khbm )

            }
            else
            {
                requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
                dw_1.SetFocus();
            }

        }


        this.dw_2_Clickded = function ( xPos, yPos, Row, dwoName )
        {
            var xz = dw_2.GetItemString( Row, "xz" );
            if ( xz == "Y" )
            {
                dw_2.SetItem( Row, "xz", "N" );
            } else
            {
                dw_2.SetItem( Row, "xz", "N" );
            }

        }


        //#region 增加
        this.DeleteRow = function ()
        {

            khbm = dw_mx.GetItemString( RowData, "sjshrbm" );
          
            var deleterow = dw_1.GetRow();
            dw_1.DeleteRow( deleterow );

            dw_1.AcceptText();

            var dw_list_data = dw_1.GetChanges();

            //执行保存的WebService
            webReq.SetFunctionID( requestor.GetFunctionID() );
            webReq.Invoke( "WldwShdzListSave", "dw_list=" + dw_list_data );
            if ( webReq.StatusCode() == 200 )
            {
                //服务器成功处理，返回单号
                ywbh = webReq.ResponseText();
                dw_1.ResetUpdate();
                dw_2.Retrieve( khbm )

            }
            else
            {
                requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
                dw_1.SetFocus();
            }

        }


//        var iw_WldwAdd_Shdz = null;
//        this.Add = function () {
//                        var yw_khbm = null;

//                        if (iw_WldwAdd_Shdz == null)
//                            iw_WldwAdd_Shdz = new W_WldwAdd_Shdz_New();
//                        iw_WldwAdd_Shdz.SetListDataWindow(dw_1);
//                        var khbm = requestor.GetParm("Khbm");
//                        var yw_khbm = requestor.GetParm("yw_khbm");
//                        var cxh_max = 0;
//                        if (dw_1.RowCount() > 0) {
//                            cxh_max = dw_1.GetItemNumber(1, "cxh_max");
//                        }

//                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_WldwAdd_Shdz_New&Khbm=" + khbm + "&cxh_max=" + cxh_max.toString() + "&yw_khbm=" + yw_khbm, iw_WldwAdd_Shdz);
//                        self.Retrieve();
//            var khbm = requestor.GetParm("Khbm");
//            var yw_khbm = requestor.GetParm("yw_khbm");
//            alert(yw_khbm);
            //            window.open("/IFView/fence.html?khbm=" + yw_khbm);
            ////            window.showModalDialog("/IFView/fence.html?khbm=" + yw_khbm, null, "dialogHeight:600px;dialogWidth:1000px;");
            //            self.Retrieve();


//            var ts_1 = null;
//            var openStyle = "3";
//            var url = "";
//            var parm = "";
//            var label = "";
//            var node = "000264";
//            var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());

//            var userid = requestor.GetParm("userid");
//            var operation
//            operation = "show";

//            //先取得页面父窗口的TabStrip控件
//            if (ts_1 == null) {
//                if (window.external != null)
//                    ts_1 = window.external.Control("ts_1");
//            }

//            if (ts_1 == null)
//                return;

//            //模块是否已打开
//            var index = ts_1.SelectItem(node);
//            if (index > 0)
//                return;


//            //取节点所对应的数据窗口记录

//            if (row > 0) {
//                openStyle = ds_1.GetItemString(row, "openStyle");
//                url = "/IFView/fence.html?khbm=" + yw_khbm;
//                //                url = ds_1.GetItemString(row, "WindowName");
//                parm = ds_1.GetItemString(row, "OpenParm");
//                label = ds_1.GetItemString(row, "Title");
//            }
//            //如果OpenStyle为2,则标识为打开的是一个Url地址
//            //如果是3,则表示打开一个响应用的HTML窗口
//            if (openStyle == "2")
//                ts_1.Open(node, label, "", url, true);
//            else if (openStyle == "3")
//                requestor.ShowModalDialog(url, null, parm);
//            else
//                ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&operation=' + operation.toString(), true);
//        }
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


        //#region 刷新
        this.Retrieve = function () {
            var userid = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var khbm = requestor.GetParm("khbm");
          
            dw_1.Retrieve(khbm);
             
            dw_1.Modify("DataWindow.Readonly=yes");

        }
        //#endregion

        

}