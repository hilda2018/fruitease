///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_GmHx_Skhx_Select()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );
    var sle_1 = new SingleLineEdit( requestor );
    var cbx_1 = new CheckBox( requestor );
    var ss_1 = new ToolStrip( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_1 == null ) dw_1 = new DataWindow( requestor );
        dw_1.Attach( win.Control( "dw_1" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( sle_1 == null ) sle_1 = new SingleLineEdit( requestor );
        sle_1.Attach( win.Control( "sle_1" ) );
        if ( cbx_1 == null ) cbx_1 = new CheckBox( requestor );
        cbx_1.Attach( win.Control( "cbx_1" ) );
        if ( ss_1 == null ) ss_1 = new ToolStrip( requestor );
        ss_1.Attach( win.Control( "ss_1" ) );

        if ( typeof ( self.Sjdq ) == "function" )
            win.AttachEvent( "btn_sjdq", "Clicked", self.Sjdq );

        if ( typeof ( self.sle_EditChanged ) == "function" )
            win.AttachEvent( "sle_1", "EditChanged", self.sle_EditChanged );

        if ( typeof ( self.cbx_clicked ) == "function" )
            win.AttachEvent( "cbx_1", "Clicked", self.cbx_clicked );

        if ( typeof ( self.OK ) == "function" )
            win.AttachEvent( "btn_ok", "Clicked", self.OK );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_Cancel", "Clicked", self.Exit );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "btn_2", "Clicked", self.Retrieve );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        cbx_1.Detach(); cbx_1 = null;
        ss_1.Detach(); ss_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //获取数据窗口

     var dw_d = null;
     this.SetDetailDW = function (dw) {
         dw_d = dw;
     }

     var dwo = null;
     this.SetDwo = function (parm) {
         dwo = parm;
     }

     var rownum = 0;
     this.SetRow = function (row) {
         rownum = row;
     }


     this.OK = function () {
         if (dw_d == null)
             return;      
         dw_1.SetFilter("");
         dw_1.Filter();

         //空运车队配货信息
         if (dwo == "dw_gmhx_skhx_edit_cmd")
         {
             self.Skhx();
         };    

         requestor.Close();

     }

     //增加记录
     this.Skhx = function ()
     {
         var count = 0;
         var sjkgsj;
         
         for ( row = 1; row <= dw_1.RowCount(); row++ )
         {
             if ( dw_1.GetItemString( row, "xz" ) != "Y" )
             {
                 continue;
             }

             var zdbm = dw_1.GetItemString( row, "zdbm" );
             var li_find = dw_d.Find( "djh = '" + zdbm + "'", 1, dw_d.RowCount() )
             if ( li_find > 0 )
             {
                 requestor.MessageBox( "提示", "账单编号<"+zdbm+">已经增加!", ICON.StopSign );
          
                 continue;
             }


             if ( rownum > 0 )
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


             dw_d.SetItem( ll_insertrow, "djh", dw_1.GetItemString( row, "zdbm" ) );
             dw_d.SetItem( ll_insertrow, "djxh", 1 );
             dw_d.SetItem( ll_insertrow, "sjly", "账单" );

             dw_d.SetItem( ll_insertrow, "skje", dw_1.GetItemNumber( row, "wsje" ) );

             dw_d.SetItem( ll_insertrow, "jdrjc", dw_1.GetItemString( row, "jdrjc" ) );
             dw_d.SetItem( ll_insertrow, "jdrmc", dw_1.GetItemString( row, "jdrmc" ) );
             dw_d.SetItem( ll_insertrow, "jdrbm", dw_1.GetItemString( row, "jdrbm" ) );
             dw_d.SetItem( ll_insertrow, "jdrpym", dw_1.GetItemString( row, "jdrpym" ) );

             dw_d.SetItem( ll_insertrow, "jsdwbm", dw_1.GetItemString( row, "khbm" ) );
             dw_d.SetItem( ll_insertrow, "jsdwjc", dw_1.GetItemString( row, "khjc" ) );
             dw_d.SetItem( ll_insertrow, "jsdwmc", dw_1.GetItemString( row, "khmc" ) );
             dw_d.SetItem( ll_insertrow, "jsdwpym", dw_1.GetItemString( row, "khpym" ) );

             count++;

         }


         if ( count <= 0 )
         {
             requestor.MessageBox( "提示", "请选择要添加的应收明细记录!", ICON.StopSign );
             sle_1.SetFocus();
             return;
         }


     }
     

	 this.Exit = function () {
	     requestor.Close();
	 }

	  


	 //#region 查询
	 this.Retrieve = function () {
      

	     var userid = requestor.GetParm("userid");
	     var ShareMode = requestor.GetParm("ShareMode");
	     var Dlwtf = requestor.GetParm("Dlwtf");
 
	     
	     dw_1.Retrieve();

	 }
	 //#endregion

	 //#region 全选
	 this.cbx_clicked = function () {
	     dw_1.SetRedraw(false);
	     if (cbx_1.GetChecked()) {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "xz", "Y")
	         }
	     } else {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "xz", "N")
	         }
	     }
	     dw_1.SetRedraw(true);
	 }
	 //#endregion

	 //#region 自动计算
	 this.zdjs = function () {
	     var cmd_skje = requestor.GetParm("cmd_skje");
	     var whxje = 0
	     dw_1.SetRedraw(false);
	     for (row = 1; row <= dw_1.RowCount(); row++) {
	         whxje = dw_1.GetItemNumber(row, "whxje")
	         if ( cmd_skje > 0 ) {
	             dw_1.SetItem(row, "xz", "Y")
	             cmd_skje = cmd_skje - whxje
	         } else {
	             dw_1.SetItem(row, "xz", "N")
             }
	     }

	     dw_1.SetRedraw(true);
	 }
	 //#endregion


	 this.sle_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "") {
	         dw_1.SetFilter("");
	         dw_1.Filter();
	     }
	     else {
	         dw_1.SetFilter( "( Upper(zdbm) like '%" + text.toUpperCase() + "%')  or ( Lower(khmc) like '%" + text.toLowerCase() + "%') or ( Lower(khjc) like '%" + text.toLowerCase() + "%') or ( Lower(khpym) like '%" + text.toLowerCase() + "%')" );
	         dw_1.Filter();
	         dw_1.Sort();
	     }
	     dw_1.SetRedraw(true);
	 }

	 var iw_Item_Edit = null;



  }