///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Commodity_Select() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var ss_1 = new ToolStrip(requestor);
    var ds_dzqk = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (ss_1 == null) ss_1 = new ToolStrip(requestor);
        ss_1.Attach(win.Control("ss_1"));
        if (ds_dzqk == null) ds_dzqk = new DataStore(requestor);
        ds_dzqk.Attach(win.Control("ds_dzqk"));

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.OK) == "function")
            win.AttachEvent("btn_ok", "Clicked", self.OK);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Cancel", "Clicked", self.Exit);

        if (typeof (self.Add) == "function")
            win.AttachEvent("btn_Add", "Clicked", self.Add);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        ss_1.Detach(); ss_1 = null;
        ds_dzqk.Detach(); ds_dzqk = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //获取数据窗口

     var dw_d = null;
     this.SetDetailDW = function (dw) {
         dw_d = dw;
     }

     var dw_sjzs = null;
     this.SetSjzs = function (dw) {
         dw_sjzs = dw;
     }

     var dw_dzqk = null;
     this.SetDzqk = function (dw) {
         dw_dzqk = dw;
     }
     var dw_master = null;
     this.SetMaster = function (dw) {
         dw_master = dw;
     }


     var dwo = null;
     this.SetDwo = function (parm) {
         dwo = parm;
     }

     var rownum = 0;
     this.SetRow = function (row) {
         rownum = row;
     }

     var lx = "";
     this.SetLx = function (parm) {
         lx = parm;
     }





     this.OK = function () {
         if (dw_d == null)
             return;
         //         var row = dw_1.GetSelectedRow(0);
         //         if (row <= 0) {
         //             requestor.MessageBox("提示", "请选择要添加的货品记录!", ICON.StopSign);
         //             sle_1.SetFocus();
         //             return;
         //         }
         dw_1.SetFilter("");
         dw_1.Filter();
//         var ename = dw_master.GetItemString(1, "ycd");
       
         //明细单
         if (dwo == "dw_mxd_edit_cmd") {
             self.MxdCmd();
         };
         if (dwo == "dw_bgdj_edit_cmd") {
             self.MxdCmd();
         };

         if (dwo == "dw_jhdj_edit_cmd") {
             self.MxdCmd();
         };

         if (dwo == "dw_bgdj_edit_cmd_hb") {
             self.MxdCmd();
         };

         if (dwo == "dw_hddz_edit_spxx" ) {
             self.HddzCmd();
         };

         if ( dwo == "dw_ywxx_edit_spxx" )
         {
             self.YwxxCmd();
         };

         if (dwo == "dw_hddz_edit_wl_spxx") {
             self.HddzCmd_Wl();
         };

         if (dwo == "dw_hddz_edit_ky_spxx") {
             self.HddzCmd_Ky();
         };

         if (dwo == "dw_xtdm_zhsflb_list") {
             self.Zhsflb();
         };

         if (dwo == "dw_ywy_commodity_edit" || dwo == "dw_product_edit") {
             self.sptc();
         };

         if (dwo == "dw_cpxxk_edit") {
             self.Cpxxk();
         };

         if (dwo == "dw_xtdm_ssgdmkhxxtx") {
             self.Ssgdmkhxxtx();
         }
         

         requestor.Close();

     }

     //增加记录
     this.MxdCmd = function () {
         var count = 0;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }
             var ll_mxdspid_max = dw_d.Describe("evaluate('max(mxd_spid)',0)");
             ll_mxdspid_max++;
             var hgbm = dw_1.GetItemString(row, "hgbm");
             var tsl = QsWebSoft.PubMethod.GetTslByHgbm(hgbm).value;
             var zzsl = QsWebSoft.PubMethod.GetZzslByHgbm(hgbm).value;
             if (rownum > 0) {
                 if (count == 0) {
                     ll_insertrow = rownum;
                 }
                 else {
                     ll_insertrow = dw_d.InsertRow(rownum+1);
                 }

             }
             else {
                 ll_insertrow = dw_d.InsertRow(0);
             }

             dw_d.SetItem(ll_insertrow, "spbm", dw_1.GetItemString(row, "yw_spbm"));
             dw_d.SetItem(ll_insertrow, "spzwmc", dw_1.GetItemString(row, "spzwmc"));
             dw_d.SetItem(ll_insertrow, "spywmc", dw_1.GetItemString(row, "spywmc"));
             dw_d.SetItem(ll_insertrow, "spgg", dw_1.GetItemString(row, "spgg"));
             dw_d.SetItem(ll_insertrow, "hgbm", dw_1.GetItemString(row, "hgbm"));
             dw_d.SetItem(ll_insertrow, "jjdw", dw_1.GetItemString(row, "jldw_e"));
             dw_d.SetItem(ll_insertrow, "bzdw", dw_1.GetItemString(row, "bzdw_e"));
             dw_d.SetItem(ll_insertrow, "mjsl", dw_1.GetItemNumber(row, "mjsl"));
             dw_d.SetItem(ll_insertrow, "mjmz", dw_1.GetItemNumber(row, "mjmz"));
             dw_d.SetItem(ll_insertrow, "mjjz", dw_1.GetItemNumber(row, "mjjz"));
             dw_d.SetItem(ll_insertrow, "wxdj", dw_1.GetItemNumber(row, "wxdj"));
             dw_d.SetItem(ll_insertrow, "wxdj_dz", dw_1.GetItemNumber(row, "wxdj"));
             dw_d.SetItem(ll_insertrow, "djtjms", dw_1.GetItemString(row, "djtjms"));
             dw_d.SetItem(ll_insertrow, "sphh", dw_1.GetItemString(row, "sphh"));
             dw_d.SetItem(ll_insertrow, "mxd_spid", ll_mxdspid_max);
             dw_d.SetItem(ll_insertrow, "zzsl", zzsl);
             dw_d.SetItem(ll_insertrow, "tsl", tsl);
             count++;

         }

         
         if (count <= 0) {
             requestor.MessageBox("提示", "请选择要添加的货品记录!", ICON.StopSign);
             sle_1.SetFocus();
             return;
         }


     }

     //增加记录
     this.Ssgdmkhxxtx = function () {
         var count = 0;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }

             dw_d.SetItem(rownum, "spmc", dw_1.GetItemString(row, "yw_spbm"));
             dw_d.SetItem(rownum, "cnspmc", dw_1.GetItemString(row, "spzwmc"));
             count++;

         }


         if (count <= 0) {
             requestor.MessageBox("提示", "请选择要添加的货品记录!", ICON.StopSign);
             sle_1.SetFocus();
             return;
         }


     }

     //增加货代商品
     this.HddzCmd = function ()
     {
         var count = 0;
         for ( row = 1; row <= dw_1.RowCount(); row++ )
         {
             if ( dw_1.GetItemString( row, "selected" ) == "N" )
             {
                 continue;
             }
             //             var ll_mxdspid_max = dw_d.Describe("evaluate('max(mxd_spid)',0)");
             //             ll_mxdspid_max++;
             var hgbm = dw_1.GetItemString( row, "hgbm" );
             var tsl = QsWebSoft.PubMethod.GetTslByHgbm( hgbm ).value;
             var zzsl = QsWebSoft.PubMethod.GetZzslByHgbm( hgbm ).value;
              if ( lx == "insertrow" )
             {
                 if ( count == 0 )
                 {
                     ll_insertrow = rownum;
                 }
                 else
                 {

                     ll_insertrow = dw_d.InsertRow( rownum + 1 );
                 }

             }
             else
             {
                 ll_insertrow = dw_d.InsertRow( 0 );
             }

             dw_d.SetItem( ll_insertrow, "spbm", dw_1.GetItemString( row, "yw_spbm" ) );
             dw_d.SetItem( ll_insertrow, "spmc", dw_1.GetItemString( row, "spzwmc" ) );
             var spzwmc = dw_1.GetItemString( row, "spzwmc" );

             if ( spzwmc.indexOf( "鲜" ) >= 0 )
             {
                 dw_d.SetItem( ll_insertrow, "spsx", "鲜" );
             };
             if ( spzwmc.indexOf( "鲜椰子" ) >= 0 )
             {
                 dw_d.SetItem( ll_insertrow, "spsx", "鲜、未去内壳（内果皮）" );
                 dw_d.SetItem( ll_insertrow, "zy", "非种用" );
             };

             var ename = dw_master.GetItemString( 1, "ycd" );
             var pm = dw_1.GetItemString( row, "spywmc" );


             if ( ename == 'JAPAN' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'THAILAND' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'MALAYSIA' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'TAIWAN' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'BELGIUM' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'VIETNAM' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'NETHERLANDS' && pm == 'FRESH PEAR' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'URUGUAY' && pm == 'FRESH MANDARIN' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'URUGUAY' && pm == 'FRESH ORANGE' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'NEW ZEALAND' && pm == 'FRESH CHERRY' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'NEW ZEALAND' && pm == 'FRESH PERSIMMON' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else if ( ename == 'NEW ZEALAND' && pm == 'FRESH KIWIFRUIT' )
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "Y" );
             } else
             {
                 dw_master.SetItem( 1, "rjhwjyjyzm", "N" );
             }


             dw_d.SetItem( ll_insertrow, "spmc_yw", dw_1.GetItemString( row, "spywmc" ) );
             dw_d.SetItem( ll_insertrow, "spgg", dw_1.GetItemString( row, "spgg" ) );
             dw_d.SetItem( ll_insertrow, "hgbm", dw_1.GetItemString( row, "hgbm" ) );
             dw_d.SetItem( ll_insertrow, "hgjldw", dw_1.GetItemString( row, "hgjldw" ) );
             dw_d.SetItem( ll_insertrow, "fdjldw", dw_1.GetItemString( row, "hgjldw" ) );
             dw_d.SetItem( ll_insertrow, "jldw", dw_1.GetItemString( row, "jldw_e" ) );
             dw_d.SetItem( ll_insertrow, "sjjldw", dw_1.GetItemString( row, "sjjldw" ) );
             //             dw_d.SetItem(ll_insertrow, "bzdw", dw_1.GetItemString(row, "bzdw_e"));
             //             dw_d.SetItem(ll_insertrow, "mjsl", dw_1.GetItemNumber(row, "mjsl"));
             dw_d.SetItem( ll_insertrow, "djmz", dw_1.GetItemNumber( row, "mjmz" ) );
             dw_d.SetItem( ll_insertrow, "djjz", dw_1.GetItemNumber( row, "mjjz" ) );
             dw_d.SetItem( ll_insertrow, "sfysx", dw_1.GetItemString( row, "sfysx" ) );
             dw_d.SetItem( ll_insertrow, "sfygzfs", dw_1.GetItemString( row, "sfygzfs" ) );
             dw_d.SetItem( ll_insertrow, "sfypz", dw_1.GetItemString( row, "sfypz" ) );
             dw_d.SetItem( ll_insertrow, "sfydj", dw_1.GetItemString( row, "sfydj" ) );
             dw_d.SetItem( ll_insertrow, "sfybzgg", dw_1.GetItemString( row, "sfybzgg" ) );
             dw_d.SetItem( ll_insertrow, "sfypp", dw_1.GetItemString( row, "sfypp" ) );
             dw_d.SetItem( ll_insertrow, "sfygg", dw_1.GetItemString( row, "sfygg" ) );
             dw_d.SetItem( ll_insertrow, "sfycf", dw_1.GetItemString( row, "sfycf" ) );
             dw_d.SetItem( ll_insertrow, "sfyxjgjggy", dw_1.GetItemString( row, "sfyxjgjggy" ) );
             dw_d.SetItem( ll_insertrow, "sfzy", dw_1.GetItemString( row, "sfzy" ) );
             dw_d.SetItem( ll_insertrow, "sfyqt", dw_1.GetItemString( row, "sfyqt" ) );
             dw_d.SetItem(ll_insertrow, "sfypplx", dw_1.GetItemString(row, "sfypplx"));

             dw_d.SetItem(ll_insertrow, "sfyjgff", dw_1.GetItemString(row, "sfyjgff"));
             dw_d.SetItem(ll_insertrow, "sfynrbw", dw_1.GetItemString(row, "sfynrbw"));

             dw_d.SetItem(ll_insertrow, "sfych", dw_1.GetItemString(row, "sfych"));
             dw_d.SetItem(ll_insertrow, "spch", dw_1.GetItemString(row, "xhch"));
             dw_d.SetItem(ll_insertrow, "sfynz", dw_1.GetItemString(row, "sfynz")); 

             dw_d.SetItem(ll_insertrow, "sfynl", dw_1.GetItemString(row, "sfynl"));
             dw_d.SetItem(ll_insertrow, "sfysyfs", dw_1.GetItemString(row, "sfysyfs"));

             dw_d.SetItem(ll_insertrow, "sfy_sfhsr", dw_1.GetItemString(row, "sfy_sfhsr"));
             dw_d.SetItem(ll_insertrow, "sfyywpm", dw_1.GetItemString(row, "sfyywpm"));
             dw_d.SetItem(ll_insertrow, "spywpm", dw_1.GetItemString(row, "spywmc"));



             if ( dw_1.GetItemString( row, "sfypplx" ) == "Y" )
             {
                 dw_d.SetItem( ll_insertrow, "pplx", "4" );
             }
             dw_d.SetItem( ll_insertrow, "sfyckxhqk", dw_1.GetItemString( row, "sfyckxhqk" ) );
             if ( dw_1.GetItemString( row, "sfyckxhqk" ) == "Y" )
             {
                 dw_d.SetItem( ll_insertrow, "ckxhqk", "3" );
             }
             dw_d.SetItem( ll_insertrow, "sfygtin", dw_1.GetItemString( row, "sfygtin" ) );
             if ( dw_1.GetItemString( row, "sfygtin" ) == "Y" )
             {
                 dw_d.SetItem( ll_insertrow, "gtin", "无GTIN" );
             }
             dw_d.SetItem( ll_insertrow, "sfycas", dw_1.GetItemString( row, "sfycas" ) );
             if ( dw_1.GetItemString( row, "sfycas" ) == "Y" )
             {
                 dw_d.SetItem( ll_insertrow, "cas", "无CAS" );
             }
             var spid = dw_d.Describe( "evaluate('max(sp_id)',0)" );
             spid++;
             dw_d.SetItem( ll_insertrow, "sp_id", spid )
             var ll_insertrow1 = dw_sjzs.InsertRow( 0 );
             dw_sjzs.SetItem( ll_insertrow1, "sp_id", spid )
             dw_sjzs.SetItem( ll_insertrow1, "szkzdm", "07" )

             //             dw_d.SetItem(ll_insertrow, "wxdj", dw_1.GetItemNumber(row, "wxdj"));
             //             dw_d.SetItem(ll_insertrow, "wxdj_dz", dw_1.GetItemNumber(row, "wxdj"));
             //             dw_d.SetItem(ll_insertrow, "djtjms", dw_1.GetItemString(row, "djtjms"));
             //             dw_d.SetItem(ll_insertrow, "sphh", dw_1.GetItemString(row, "sphh"));
             //             dw_d.SetItem(ll_insertrow, "mxd_spid", ll_mxdspid_max);
             //             dw_d.SetItem(ll_insertrow, "zzsl", zzsl);
             //             dw_d.SetItem(ll_insertrow, "tsl", tsl);
             var yw_spbm = dw_1.GetItemString( row, "yw_spbm" );

             self.Spcsdzqk( yw_spbm )
             count++;

         }

         if ( count <= 0 )
         {
             requestor.MessageBox( "提示", "请选择要添加的货品记录!", ICON.StopSign );
             sle_1.SetFocus();
             return;
         }


     }



     //增加货代商品
     this.YwxxCmd = function ()
     {
         var count = 0;
         for ( row = 1; row <= dw_1.RowCount(); row++ )
         {
             if ( dw_1.GetItemString( row, "selected" ) == "N" )
             {
                 continue;
             }
                if ( lx == "insertrow" )
             {
                 if ( count == 0 )
                 {
                     ll_insertrow = rownum;
                 }
                 else
                 {

                     ll_insertrow = dw_d.InsertRow( rownum + 1 );
                 }

             } else if ( lx == "setrow" )
             {

                 ll_insertrow = rownum;

             }
             else
             {
                 ll_insertrow = dw_d.InsertRow( 0 );
             }

             dw_d.SetItem( ll_insertrow, "spbm", dw_1.GetItemString( row, "yw_spbm" ) );
             dw_d.SetItem( ll_insertrow, "spmc", dw_1.GetItemString( row, "spzwmc" ) );
             dw_d.SetItem( ll_insertrow, "spmc_yw", dw_1.GetItemString( row, "spywmc" ) );              
             count++;

         }

         if ( count <= 0 )
         {
             requestor.MessageBox( "提示", "请选择要添加的货品记录!", ICON.StopSign );
             sle_1.SetFocus();
             return;
         }


     }

     //增加货代商品
     this.HddzCmd_Wl = function () {
         var count = 0;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }
             var hgbm = dw_1.GetItemString(row, "hgbm");
             var tsl = QsWebSoft.PubMethod.GetTslByHgbm(hgbm).value;
             var zzsl = QsWebSoft.PubMethod.GetZzslByHgbm(hgbm).value;
             if (lx == "insertrow") {
                 if (count == 0) {
                     ll_insertrow = rownum;
                 }
                 else {

                     ll_insertrow = dw_d.InsertRow(rownum + 1);
                 }

             }
             else {
                 ll_insertrow = dw_d.InsertRow(0);
             }

             dw_d.SetItem(ll_insertrow, "spbm", dw_1.GetItemString(row, "yw_spbm"));
             dw_d.SetItem(ll_insertrow, "spmc", dw_1.GetItemString(row, "spzwmc"));
             var spzwmc = dw_1.GetItemString(row, "spzwmc");

             if (spzwmc.indexOf("鲜") >= 0) {
                 dw_d.SetItem(ll_insertrow, "spsx", "鲜");
             };
             if (spzwmc.indexOf("鲜椰子") >= 0) {
                 dw_d.SetItem(ll_insertrow, "spsx", "鲜、未去内壳（内果皮）");
                 dw_d.SetItem(ll_insertrow, "zy", "非种用");
             };

             var ename = dw_master.GetItemString(1, "ycd");
             var pm = dw_1.GetItemString(row, "spywmc");

 

             dw_d.SetItem(ll_insertrow, "spmc_yw", dw_1.GetItemString(row, "spywmc"));
             dw_d.SetItem(ll_insertrow, "spgg", dw_1.GetItemString(row, "spgg"));
             dw_d.SetItem(ll_insertrow, "hgbm", dw_1.GetItemString(row, "hgbm"));
             dw_d.SetItem(ll_insertrow, "hgjldw", dw_1.GetItemString(row, "hgjldw"));
             dw_d.SetItem(ll_insertrow, "fdjldw", dw_1.GetItemString(row, "hgjldw"));
             dw_d.SetItem(ll_insertrow, "jldw", dw_1.GetItemString(row, "jldw_e"));
             dw_d.SetItem(ll_insertrow, "sjjldw", dw_1.GetItemString(row, "sjjldw"));
             dw_d.SetItem(ll_insertrow, "djmz", dw_1.GetItemNumber(row, "mjmz"));
             dw_d.SetItem(ll_insertrow, "djjz", dw_1.GetItemNumber(row, "mjjz"));
             dw_d.SetItem(ll_insertrow, "sfysx", dw_1.GetItemString(row, "sfysx"));
             dw_d.SetItem(ll_insertrow, "sfygzfs", dw_1.GetItemString(row, "sfygzfs"));
             dw_d.SetItem(ll_insertrow, "sfypz", dw_1.GetItemString(row, "sfypz"));
             dw_d.SetItem(ll_insertrow, "sfydj", dw_1.GetItemString(row, "sfydj"));
             dw_d.SetItem(ll_insertrow, "sfybzgg", dw_1.GetItemString(row, "sfybzgg"));
             dw_d.SetItem(ll_insertrow, "sfypp", dw_1.GetItemString(row, "sfypp"));
             dw_d.SetItem(ll_insertrow, "sfygg", dw_1.GetItemString(row, "sfygg"));
             dw_d.SetItem(ll_insertrow, "sfycf", dw_1.GetItemString(row, "sfycf"));
             dw_d.SetItem(ll_insertrow, "sfyxjgjggy", dw_1.GetItemString(row, "sfyxjgjggy"));
             dw_d.SetItem(ll_insertrow, "sfzy", dw_1.GetItemString(row, "sfzy"));
             dw_d.SetItem(ll_insertrow, "sfyqt", dw_1.GetItemString(row, "sfyqt"));
             var spid = dw_d.Describe("evaluate('max(sp_id)',0)");
             spid++;
             dw_d.SetItem(ll_insertrow, "sp_id", spid)
             
             count++;

         }

         if (count <= 0) {
             requestor.MessageBox("提示", "请选择要添加的货品记录!", ICON.StopSign);
             sle_1.SetFocus();
             return;
         }


     }



     //增加货代商品
     this.HddzCmd_Ky = function () {
         var count = 0;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }
             //             var ll_mxdspid_max = dw_d.Describe("evaluate('max(mxd_spid)',0)");
             //             ll_mxdspid_max++;
             var hgbm = dw_1.GetItemString(row, "hgbm");
             var tsl = QsWebSoft.PubMethod.GetTslByHgbm(hgbm).value;
             var zzsl = QsWebSoft.PubMethod.GetZzslByHgbm(hgbm).value;
             if (lx == "insertrow") {
                 if (count == 0) {
                     ll_insertrow = rownum;
                 }
                 else {

                     ll_insertrow = dw_d.InsertRow(rownum + 1);
                 }

             }
             else {
                 ll_insertrow = dw_d.InsertRow(0);
             }

             dw_d.SetItem(ll_insertrow, "spbm", dw_1.GetItemString(row, "yw_spbm"));
             dw_d.SetItem(ll_insertrow, "spmc", dw_1.GetItemString(row, "spzwmc"));
             var spzwmc = dw_1.GetItemString(row, "spzwmc");

             if (spzwmc.indexOf("鲜") >= 0) {
                 dw_d.SetItem(ll_insertrow, "spsx", "鲜");
             };
             if (spzwmc.indexOf("鲜椰子") >= 0) {
                 dw_d.SetItem(ll_insertrow, "spsx", "鲜、未去内壳（内果皮）");
                 dw_d.SetItem(ll_insertrow, "zy", "非种用");
             };

             var ename = dw_master.GetItemString(1, "ycd");
             var pm = dw_1.GetItemString(row, "spywmc");

             if (ename == 'JAPAN') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'THAILAND') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'MALAYSIA') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'TAIWAN') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'BELGIUM') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'VIETNAM') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'NETHERLANDS' && pm == 'FRESH PEAR') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'URUGUAY' && pm == 'FRESH MANDARIN') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'URUGUAY' && pm == 'FRESH ORANGE') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'NEW ZEALAND' && pm == 'FRESH CHERRY') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'NEW ZEALAND' && pm == 'FRESH PERSIMMON') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else if (ename == 'NEW ZEALAND' && pm == 'FRESH KIWIFRUIT') {
                 dw_master.SetItem(1, "rjhwjyjyzm", "Y");
             } else {
                 dw_master.SetItem(1, "rjhwjyjyzm", "N");
             }
            

             dw_d.SetItem(ll_insertrow, "spmc_yw", dw_1.GetItemString(row, "spywmc"));
             dw_d.SetItem(ll_insertrow, "spgg", dw_1.GetItemString(row, "spgg"));
             dw_d.SetItem(ll_insertrow, "hgbm", dw_1.GetItemString(row, "hgbm"));
             dw_d.SetItem(ll_insertrow, "hgjldw", dw_1.GetItemString(row, "hgjldw"));
             dw_d.SetItem(ll_insertrow, "fdjldw", dw_1.GetItemString(row, "hgjldw"));
             dw_d.SetItem(ll_insertrow, "jldw", dw_1.GetItemString(row, "jldw_e"));
             dw_d.SetItem(ll_insertrow, "sjjldw", dw_1.GetItemString(row, "sjjldw"));
             //             dw_d.SetItem(ll_insertrow, "bzdw", dw_1.GetItemString(row, "bzdw_e"));
             //             dw_d.SetItem(ll_insertrow, "mjsl", dw_1.GetItemNumber(row, "mjsl"));
             dw_d.SetItem(ll_insertrow, "djmz", dw_1.GetItemNumber(row, "mjmz"));
             dw_d.SetItem(ll_insertrow, "djjz", dw_1.GetItemNumber(row, "mjjz"));
             dw_d.SetItem(ll_insertrow, "sfysx", dw_1.GetItemString(row, "sfysx"));
             dw_d.SetItem(ll_insertrow, "sfygzfs", dw_1.GetItemString(row, "sfygzfs"));
             dw_d.SetItem(ll_insertrow, "sfypz", dw_1.GetItemString(row, "sfypz"));
             dw_d.SetItem(ll_insertrow, "sfydj", dw_1.GetItemString(row, "sfydj"));
             dw_d.SetItem(ll_insertrow, "sfybzgg", dw_1.GetItemString(row, "sfybzgg"));
             dw_d.SetItem(ll_insertrow, "sfypp", dw_1.GetItemString(row, "sfypp"));
             dw_d.SetItem(ll_insertrow, "sfygg", dw_1.GetItemString(row, "sfygg"));
             dw_d.SetItem(ll_insertrow, "sfycf", dw_1.GetItemString(row, "sfycf"));
             dw_d.SetItem(ll_insertrow, "sfyxjgjggy", dw_1.GetItemString(row, "sfyxjgjggy"));
             dw_d.SetItem(ll_insertrow, "sfzy", dw_1.GetItemString(row, "sfzy"));
             dw_d.SetItem(ll_insertrow, "sfyqt", dw_1.GetItemString(row, "sfyqt"));
             var spid = dw_d.Describe("evaluate('max(sp_id)',0)");
             spid++;
             dw_d.SetItem(ll_insertrow, "sp_id", spid)
             var ll_insertrow1 = dw_sjzs.InsertRow(0);
             dw_sjzs.SetItem(ll_insertrow1, "sp_id", spid)
             dw_sjzs.SetItem(ll_insertrow1, "szkzdm", "07")

            
             var yw_spbm = dw_1.GetItemString(row, "yw_spbm");

             self.Spcsdzqk(yw_spbm)
             count++;

         }

         if (count <= 0) {
             requestor.MessageBox("提示", "请选择要添加的货品记录!", ICON.StopSign);
             sle_1.SetFocus();
             return;
         }


     }


     //增加综合收费类别
     this.Zhsflb = function () {
         var count = 0;
         var row = 0;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }
             if (rownum > 0) {
                 dw_d.SetItem(rownum, "fllb", dw_1.GetItemString(row, "spzwmc"));
             }
             count++;
         }


     }

     //产品信息库增加
     this.Cpxxk = function () {

         for (row = 1; row <= dw_1.RowCount(); row++) {

             var xz = dw_1.GetItemString(row, "selected");

             if (xz == "Y") {
                 dw_d.SetItem(1, "spbm", dw_1.GetItemString(row, "spbm"));
                 dw_d.SetItem(1, "spzwmc", dw_1.GetItemString(row, "spzwtc"));
                 dw_d.SetItem(1, "spywmc", dw_1.GetItemString(row, "spywtc"));
                 dw_d.SetItem(1, "hgbm", dw_1.GetItemString(row, "hgbm"));
             }
         }
     }

    //增加商品统一编码及名称
    this.sptc = function () {
        var count = 0;
        var row = 0;
        for (row = 1; row <= dw_1.RowCount(); row++) {
            if (dw_1.GetItemString(row, "selected") == "N") {
                continue;
            }
            if (rownum > 0) {
                dw_d.SetItem(1, "spbm", dw_1.GetItemString(row, "yw_spbm"));
                dw_d.SetItem(1, "spzwtc", dw_1.GetItemString(row, "spzwmc"));
                dw_d.SetItem(1, "spywtc", dw_1.GetItemString(row, "spywmc"));
            }
            count++;
        }
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
	         dw_1.SetFilter("( hgbm like '%" + text.toUpperCase() + "%')  or ( Lower(spywmc) like '%" + text.toLowerCase() + "%') or ( Upper(spywmc) like '%" + text.toUpperCase() + "%')or ( Lower(spgg) like '%" + text.toLowerCase() + "%') or ( Upper(spgg) like '%" + text.toUpperCase() + "%') or ( Lower(spzwmc) like '%" + text.toLowerCase() + "%')");
	         dw_1.Filter();
	         dw_1.Sort();
	     }
	     dw_1.SetRedraw(true);
	 }

	 var iw_Item_Edit = null;

	 //#region 增加
	 this.Add = function () {
	     var yw_spbm = null;
	     var iw_CommodityAdd = null;
	     if (iw_CommodityAdd == null)
	         iw_CommodityAdd = new W_CommodityAdd();
	     iw_CommodityAdd.SetListDataWindow(dw_1);
	     requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_CommodityAdd", iw_CommodityAdd);
	     self.Retrieve();
	 }
	 //#endregion


	 //#region 刷新
	 this.Retrieve = function () {
	     var ywy = requestor.GetParm("ywy");
	     var ShareMode = requestor.GetParm("ShareMode");
	     var Dlwtf = requestor.GetParm("Dlwtf");

	     dw_1.Retrieve(ShareMode, ywy, Dlwtf);

	 }
	 //#endregion

	 //#region 按商品判断是否需要产生新的证书
	 this.Spcsdzqk = function (spbm) {

	     var ycddm = dw_master.GetItemString(1, "ycddm");
	     
	     var li_rowcount = ds_dzqk.Retrieve(ycddm, spbm);
	     var ls_cpxxkbm = "";
	     var ls_spbm = "";
	     var ls_spzwmc = "";
	     var ls_ctr_code = "";
	     var ls_ctr_cname = "";
	     var ls_zfbqk = "";
	     var ls_dzmc = "";
	     var sfcr = "N";
	     var ysfs = dw_master.GetItemString(1, "ysfs");
	     if (li_rowcount > 0) {
	         var cpxxkbm = ds_dzqk.GetItemString(1, "cpxxkbm");
	         var li_find = dw_dzqk.Find("cpxxkbm = '" + cpxxkbm + "'", 1, ds_dzqk.RowCount());
	         if (li_find > 0) {
	             var li_find_fp = dw_dzqk.Find("dzmc = '发票'", 1, dw_dzqk.RowCount());
	             if (li_find_fp < 1 && ysfs == "海运") {
	                 ls_cpxxkbm = ds_dzqk.GetItemString(1, "cpxxkbm");
	                 ls_spbm = ds_dzqk.GetItemString(1, "spbm");
	                 ls_spzwmc = ds_dzqk.GetItemString(1, "spzwmc");
	                 ls_ctr_code = ds_dzqk.GetItemString(1, "ctr_code");
	                 ls_ctr_cname = ds_dzqk.GetItemString(1, "ctr_cname");
	                 ls_zfbqk = ds_dzqk.GetItemString(1, "zfbqk");
	                 ls_dzmc = ds_dzqk.GetItemString(1, "dzmc");
	                 var li_insert = dw_dzqk.InsertRow(0);
	                 dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
	                 dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
	                 dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
	                 dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
	                 dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
	                 dw_dzqk.SetItem(li_insert, "zfbqk", "副本");
	                 dw_dzqk.SetItem(li_insert, "dzmc", "发票");
	             }
	             return;
	         } else {
	             for (row1 = 1; row1 <= ds_dzqk.RowCount(); row1++) {

	                 ls_cpxxkbm = ds_dzqk.GetItemString(row1, "cpxxkbm");
	                 ls_spbm = ds_dzqk.GetItemString(row1, "spbm");
	                 ls_spzwmc = ds_dzqk.GetItemString(row1, "spzwmc");
	                 ls_ctr_code = ds_dzqk.GetItemString(row1, "ctr_code");
	                 ls_ctr_cname = ds_dzqk.GetItemString(row1, "ctr_cname");
	                 ls_zfbqk = ds_dzqk.GetItemString(row1, "zfbqk");
	                 ls_dzmc = ds_dzqk.GetItemString(row1, "dzmc");
	                 var li_find_dzmc = dw_dzqk.Find("dzmc = '" + ls_dzmc + "'", 1, dw_dzqk.RowCount());
	                 if (li_find_dzmc < 1 && (ysfs == "海运" || (ysfs == "空运" && ls_zfbqk == "正本" && ls_dzmc == "原产地证"))) {
	                     var li_insert = dw_dzqk.InsertRow(0);
	                     sfcr = "Y";
	                     dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
	                     dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
	                     dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
	                     dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
	                     dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
	                     dw_dzqk.SetItem(li_insert, "zfbqk", ls_zfbqk);
	                     dw_dzqk.SetItem(li_insert, "dzmc", ls_dzmc);
	                 }

	             };
	         };
	     };

	     var li_find_fp = dw_dzqk.Find("dzmc = '发票'", 1, dw_dzqk.RowCount());
	     if (li_find_fp < 1 && ysfs == "海运") {
	         var li_insert = dw_dzqk.InsertRow(0);
	         dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
	         dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
	         dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
	         dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
	         dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
	         dw_dzqk.SetItem(li_insert, "zfbqk", "副本");
	         dw_dzqk.SetItem(li_insert, "dzmc", "发票");
	     }

	     var li_find_td = dw_dzqk.Find("dzmc = '提单'", 1, dw_dzqk.RowCount());
	     if (li_find_td < 1 &&　ysfs == "海运") {
	         var li_insert = dw_dzqk.InsertRow(0);
	         dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
	         dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
	         dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
	         dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
	         dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
	         ls_zfbqk = dw_master.GetItemString(1, "tdlx");
	         dw_dzqk.SetItem(li_insert, "zfbqk", ls_zfbqk);
	         dw_dzqk.SetItem(li_insert, "dzmc", "提单");
	     };



	 };
	 //#endregion

  }