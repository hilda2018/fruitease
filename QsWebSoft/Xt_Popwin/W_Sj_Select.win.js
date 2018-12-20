///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Sj_Select()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow( requestor );
    var dw_2 = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );
    var sle_1 = new SingleLineEdit( requestor );

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

        if ( typeof ( self.dw_1_Clicked ) == "function" )
            win.AttachEvent( "dw_1", "Clicked", self.dw_1_Clicked );

        if ( typeof ( self.OK ) == "function" )
            win.AttachEvent( "dw_1", "DoubleClicked", self.OK );

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

    var sjlx = null;
    this.SetSjlx = function (parm) {
        sjlx = parm;
    }


    this.OK = function ()
    {
        var row = dw_1.GetRow();
        if ( row <= 0 )
        {
            requestor.MessageBox( "提示", "请选择要添加的往来单位信息!", ICON.StopSign );
            sle_1.SetFocus();
            return;

        }
        var sjbm = dw_1.GetItemString( row, 'sjbm' );
        var sjmc = dw_1.GetItemString( row, 'sjmc' );
        var lxdh = dw_1.GetItemString( row, 'lxdh' );
        var sfzh = dw_1.GetItemString( row, 'sfzh' )
        var cdbm = dw_1.GetItemString( row, 'cdbm' );
        var cdmc = dw_1.GetItemString( row, 'cdmc' );
        var ycdgx = dw_1.GetItemString( row, 'ycdgx' );
        var cdjc = dw_1.GetItemString( row, 'cdjc' );
        var cdpym = dw_1.GetItemString( row, 'cdpym' );
        var cp = dw_1.GetItemString( row, 'cph' );
        var sfybd = dw_1.GetItemString( row, 'sfybd' );
        var bdsbh = dw_1.GetItemString( row, 'bdsbh' );

        var bdyssbh = dw_1.GetItemString( row, 'bdyssbh' );
        //        var cjmc = dw_1.GetItemString(row, 'cjmc');  
        var cllxwh = dw_1.GetItemString( row, 'cllxwh' );
        var jsfs = dw_1.GetItemString( row, 'jsfs' );
        var zdtps = dw_1.GetItemString( row, 'zdtps' );
        if ( dw_mx != null )
        {

            if ( column == "cdph_sj" )
            {
                dw_mx.SetItem( 1, 'sj', sjmc );
                dw_mx.SetItem( 1, 'sjlxfs', lxdh );
                dw_mx.SetItem( 1, 'cdbm', cdbm );
                dw_mx.SetItem( 1, 'cdmc', cdmc );
                dw_mx.SetItem( 1, 'cdjc', cdjc );
                dw_mx.SetItem( 1, 'cdpym', cdpym );
                dw_mx.SetItem( 1, 'cph', cp );
                dw_mx.SetItem( 1, 'cllx', cllxwh );
                dw_mx.SetItem( 1, 'zdtps', zdtps );
                dw_mx.SetItem( 1, 'sfybd', sfybd );
                dw_mx.SetItem( 1, 'bdsbh', bdsbh );
                dw_mx.SetItem( 1, 'bdyssbh', bdyssbh );
                requestor.Close();
            };

            if ( column == "hy_mtywcl_sj" )
            {
                dw_mx.SetItem( RowData, 'jzxxx_gq_sj', sjmc );
                dw_mx.SetItem( RowData, 'jzxxx_gq_sjlxfs', lxdh );
                dw_mx.SetItem( RowData, 'jzxxx_gq_cp', cp );
                var hgcyd_bz = dw_mx.GetItemString( RowData, "jzxxx_hgcyd_bz" )
                if ( hgcyd_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_hgcyd_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_hgcyd_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_hgcyd_cp', cp );
                }
                var jyd_bz = dw_mx.GetItemString( RowData, "jzxxx_jyd_bz" )
                if ( jyd_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_jyd_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_jyd_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_jyd_cp', cp );
                }
                var zjfscwld_bz = dw_mx.GetItemString( RowData, "jzxxx_zjfscwld_bz" )
                if ( zjfscwld_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_cp', cp );
                }

                requestor.Close();
            };

            if ( column == "hy_hgcyd_sj" )
            {
                dw_mx.SetItem( RowData, 'jzxxx_hgcyd_sj', sjmc );
                dw_mx.SetItem( RowData, 'jzxxx_hgcyd_sjlxfs', lxdh );
                dw_mx.SetItem( RowData, 'jzxxx_hgcyd_cp', cp );
                var jyd_bz = dw_mx.GetItemString( RowData, "jzxxx_jyd_bz" )
                if ( jyd_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_jyd_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_jyd_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_jyd_cp', cp );
                }
                var zjfscwld_bz = dw_mx.GetItemString( RowData, "jzxxx_zjfscwld_bz" )
                if ( zjfscwld_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_cp', cp );
                }

                requestor.Close();
            };

            if ( column == "hy_jyd_sj" )
            {
                dw_mx.SetItem( RowData, 'jzxxx_jyd_sj', sjmc );
                dw_mx.SetItem( RowData, 'jzxxx_jyd_sjlxfs', lxdh );
                dw_mx.SetItem( RowData, 'jzxxx_jyd_cp', cp );

                var zjfscwld_bz = dw_mx.GetItemString( RowData, "jzxxx_zjfscwld_bz" )
                if ( zjfscwld_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_cp', cp );
                }
                var sc_bz = dw_mx.GetItemString( RowData, "jzxxx_sc_bz" )

                requestor.Close();
            };


            if ( column == "hy_sc_sj" )
            {
                dw_mx.SetItem( RowData, 'jzxxx_sc_sj', sjmc );
                dw_mx.SetItem( RowData, 'jzxxx_sc_sjlxfs', lxdh );
                dw_mx.SetItem( RowData, 'jzxxx_sc_cp', cp );
                var jschfscwld_bz = dw_mx.GetItemString( RowData, "jzxxx_jschfscwld_bz" )
                if ( jschfscwld_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_jschfscwld_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_jschfscwld_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_jschfscwld_cp', cp );
                }

                requestor.Close();
            };

            if ( column == "hy_fscwl_sj" )
            {
                var zjfscwld_bz = dw_mx.GetItemString( RowData, "jzxxx_zjfscwld_bz" )
                if ( zjfscwld_bz == "Y" )
                {
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sj', sjmc );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_sjlxfs', lxdh );
                    dw_mx.SetItem( RowData, 'jzxxx_zjfscwld_cp', cp );
                }

                requestor.Close();
            };

            if ( column == "wlgz_sj" )
            {
                dw_mx.SetItem( RowData, 'cph', cp );
                dw_mx.SetItem( RowData, 'bdsbh', bdsbh );
                dw_mx.SetItem( RowData, 'sfybd', sfybd );
                dw_mx.SetItem( RowData, 'bdyssbh', bdyssbh );
                dw_mx.SetItem( RowData, 'cdbm', cdbm );
                dw_mx.SetItem( RowData, 'cdmc', cdmc );
                dw_mx.SetItem( RowData, 'sjmc', sjmc );
                dw_mx.SetItem( RowData, 'sjh', lxdh );
                dw_mx.SetItem( RowData, 'sfzh', sfzh );
                dw_mx.SetItem( RowData, 'jsfs', jsfs );
                //判断是否有车牌





                if ( cp.length > 0 )
                {
                    dw_mx.SetItem( RowData, "sfybd", "O" );
                    var logid = requestor.GetParm( "userid" );
                    $.getJSON( "IFView/MapHandler.ashx", { action: "VerifyLicensePlate", cph: cp, logid: logid, r: Math.random() }, function ( res )
                    {
                        if ( res.result )
                        {
                            dw_mx.SetItem( RowData, "sfybd", "Y" );
                        } else if ( res.result == false )
                        {
                            dw_mx.SetItem( RowData, "sfybd", "N" );
                        } else
                        {
                            requestor.MessageBox( "提示", "北斗判定车辆失败，重新选择一下" )
                            return;
                        }
                    } )

                   

                    requestor.Close();
                } else
                {
                    requestor.Close();
                };



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
                dw_1.SetFilter("( Upper(sjmc) like '%" + text + "%') or ( Lower(sjmc) like '%" + text + "%') or ( Upper(lxdh) like '%" + text + "%') or ( Lower(lxdh) like '%" + text + "%') or ( Upper(cph) like '%" + text + "%') or ( Lower(cph) like '%" + text + "%')  or ( Lower(sfzh) like '%" + text + "%') or ( Upper(sfzh) like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();
            }
            dw_1.SetRedraw(true);
        }

        


        this.dw_1_Clicked = function (xPos,yPos,Row, dwoName )
        {
            if ( Row > 0 )
            {
                var cph = dw_1.GetItemString( Row, "cph" );
                dw_2.Retrieve( cph );
            }
        }
      
        //#region 刷新
        this.Retrieve = function () {
            var userid = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var sjlx = requestor.GetParm("sjlx");
            var cdbm = requestor.GetParm("Cdbm");
             
            if (sjlx == null) {
                sjlx = "全部";                
            }
            else if (sjlx == "hy") {
                sjlx = "海运";               
            }
            else if (sjlx == "ky") {
                sjlx = "空运";               
            }

            dw_1.Retrieve(sjlx, cdbm);
           
            dw_1.Modify("DataWindow.Readonly=yes");

        }
        //#endregion

        //#region 获取字符串长度
        function len(s) {
            var l = 0;
            var a = s.split("");
            for (var i = 0; i < a.length; i++) {
                if (a[i].charCodeAt(0) < 299)
                { l++; }
                else { l += 2; }
            }
            return l;
        }

        //#endregion

}