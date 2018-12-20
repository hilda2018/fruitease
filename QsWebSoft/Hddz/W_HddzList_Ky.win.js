///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Ky()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow( requestor );
    var dw_log = new DataWindow( requestor );
    var dw_print_forma = new DataWindow( requestor );
    var dw_filter = new DataWindow( requestor );
    var dw_print_ecczm = new DataWindow( requestor );
    var dw_print_hczm = new DataWindow( requestor );
    var tb_3 = new ToolStrip( requestor );
    var ddlb_ctr_area2 = new DropDownListBox( requestor );
    var ddlb_sd = new DropDownListBox( requestor );
    var sle_jzxh = new SingleLineEdit( requestor );
    var sle_3 = new SingleLineEdit( requestor );
    var sle_tgdh = new SingleLineEdit( requestor );
    var sle_sjshrmc = new SingleLineEdit( requestor );
    var cbx_tycj = new CheckBox( requestor );
    var ddlb_jdrjc = new DropDownListBox( requestor );
    var dw_print_zthqksm = new DataWindow( requestor );
    var dw_print_packinglist = new DataWindow( requestor );
    var dw_print_invoice = new DataWindow( requestor );
    var dw_print_contract = new DataWindow( requestor );
    var mle_jzxh = new MultiLineEdit( requestor );
    var tb_2 = new ToolStrip( requestor );
    var ddlb_rqlx = new DropDownListBox( requestor );
    var dp_begin = new DatePicker( requestor );
    var dp_end = new DatePicker( requestor );
    var sle_1 = new SingleLineEdit( requestor );
    var sle_kh = new SingleLineEdit( requestor );
    var sle_hth = new SingleLineEdit( requestor );
    var sle_tdh = new SingleLineEdit( requestor );
    var ddlb_jdr = new DropDownListBox( requestor );
    var sle_ftdh = new SingleLineEdit( requestor );
    var sle_gwgys = new SingleLineEdit( requestor );
    var tb_1 = new ToolStrip( requestor );
    var rb_zj = new RadioButton( requestor );
    var rb_qb = new RadioButton( requestor );
    var rb_hy = new RadioButton( requestor );
    var rb_ky = new RadioButton( requestor );
    var ddlb_fxzt = new DropDownListBox( requestor );
    var sle_2 = new SingleLineEdit( requestor );
    var dw_print_bzjsqs = new DataWindow( requestor );
    var dw_print_qksm = new DataWindow( requestor );
    var dw_print_dlbgwts = new DataWindow( requestor );
    var dw_print_dlxy = new DataWindow( requestor );
    var dw_print_sjmf_contract = new DataWindow( requestor );
    var dw_print_sjmf_packinglist = new DataWindow( requestor );
    var dw_print_sjmf_invoice = new DataWindow( requestor );
    var ContextMenuStrip1 = new ContextMenu( requestor );
    var ds_1 = new DataStore( requestor );
    var ds_role = new DataStore( requestor );
    var ds_2 = new DataStore( requestor );
    var ds_role_kybmjl = new DataStore( requestor );
    var ds_role_hybmjl = new DataStore( requestor );
    var ds_sd = new DataStore( requestor );
    var ds_3 = new DataStore( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_list == null ) dw_list = new DataWindow( requestor );
        dw_list.Attach( win.Control( "dw_list" ) );
        if ( dw_log == null ) dw_log = new DataWindow( requestor );
        dw_log.Attach( win.Control( "dw_log" ) );
        if ( dw_print_forma == null ) dw_print_forma = new DataWindow( requestor );
        dw_print_forma.Attach( win.Control( "dw_print_forma" ) );
        if ( dw_filter == null ) dw_filter = new DataWindow( requestor );
        dw_filter.Attach( win.Control( "dw_filter" ) );
        if ( dw_print_ecczm == null ) dw_print_ecczm = new DataWindow( requestor );
        dw_print_ecczm.Attach( win.Control( "dw_print_ecczm" ) );
        if ( dw_print_hczm == null ) dw_print_hczm = new DataWindow( requestor );
        dw_print_hczm.Attach( win.Control( "dw_print_hczm" ) );
        if ( tb_3 == null ) tb_3 = new ToolStrip( requestor );
        tb_3.Attach( win.Control( "tb_3" ) );
        if ( ddlb_ctr_area2 == null ) ddlb_ctr_area2 = new DropDownListBox( requestor );
        ddlb_ctr_area2.Attach( win.Control( "ddlb_ctr_area2" ) );
        if ( ddlb_sd == null ) ddlb_sd = new DropDownListBox( requestor );
        ddlb_sd.Attach( win.Control( "ddlb_sd" ) );
        if ( sle_jzxh == null ) sle_jzxh = new SingleLineEdit( requestor );
        sle_jzxh.Attach( win.Control( "sle_jzxh" ) );
        if ( sle_3 == null ) sle_3 = new SingleLineEdit( requestor );
        sle_3.Attach( win.Control( "sle_3" ) );
        if ( sle_tgdh == null ) sle_tgdh = new SingleLineEdit( requestor );
        sle_tgdh.Attach( win.Control( "sle_tgdh" ) );
        if ( sle_sjshrmc == null ) sle_sjshrmc = new SingleLineEdit( requestor );
        sle_sjshrmc.Attach( win.Control( "sle_sjshrmc" ) );
        if ( cbx_tycj == null ) cbx_tycj = new CheckBox( requestor );
        cbx_tycj.Attach( win.Control( "cbx_tycj" ) );
        if ( ddlb_jdrjc == null ) ddlb_jdrjc = new DropDownListBox( requestor );
        ddlb_jdrjc.Attach( win.Control( "ddlb_jdrjc" ) );
        if ( dw_print_zthqksm == null ) dw_print_zthqksm = new DataWindow( requestor );
        dw_print_zthqksm.Attach( win.Control( "dw_print_zthqksm" ) );
        if ( dw_print_packinglist == null ) dw_print_packinglist = new DataWindow( requestor );
        dw_print_packinglist.Attach( win.Control( "dw_print_packinglist" ) );
        if ( dw_print_invoice == null ) dw_print_invoice = new DataWindow( requestor );
        dw_print_invoice.Attach( win.Control( "dw_print_invoice" ) );
        if ( dw_print_contract == null ) dw_print_contract = new DataWindow( requestor );
        dw_print_contract.Attach( win.Control( "dw_print_contract" ) );
        if ( mle_jzxh == null ) mle_jzxh = new MultiLineEdit( requestor );
        mle_jzxh.Attach( win.Control( "mle_jzxh" ) );
        if ( tb_2 == null ) tb_2 = new ToolStrip( requestor );
        tb_2.Attach( win.Control( "tb_2" ) );
        if ( ddlb_rqlx == null ) ddlb_rqlx = new DropDownListBox( requestor );
        ddlb_rqlx.Attach( win.Control( "ddlb_rqlx" ) );
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
        if ( ddlb_jdr == null ) ddlb_jdr = new DropDownListBox( requestor );
        ddlb_jdr.Attach( win.Control( "ddlb_jdr" ) );
        if ( sle_ftdh == null ) sle_ftdh = new SingleLineEdit( requestor );
        sle_ftdh.Attach( win.Control( "sle_ftdh" ) );
        if ( sle_gwgys == null ) sle_gwgys = new SingleLineEdit( requestor );
        sle_gwgys.Attach( win.Control( "sle_gwgys" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( rb_zj == null ) rb_zj = new RadioButton( requestor );
        rb_zj.Attach( win.Control( "rb_zj" ) );
        if ( rb_qb == null ) rb_qb = new RadioButton( requestor );
        rb_qb.Attach( win.Control( "rb_qb" ) );
        if ( rb_hy == null ) rb_hy = new RadioButton( requestor );
        rb_hy.Attach( win.Control( "rb_hy" ) );
        if ( rb_ky == null ) rb_ky = new RadioButton( requestor );
        rb_ky.Attach( win.Control( "rb_ky" ) );
        if ( ddlb_fxzt == null ) ddlb_fxzt = new DropDownListBox( requestor );
        ddlb_fxzt.Attach( win.Control( "ddlb_fxzt" ) );
        if ( sle_2 == null ) sle_2 = new SingleLineEdit( requestor );
        sle_2.Attach( win.Control( "sle_2" ) );
        if ( dw_print_bzjsqs == null ) dw_print_bzjsqs = new DataWindow( requestor );
        dw_print_bzjsqs.Attach( win.Control( "dw_print_bzjsqs" ) );
        if ( dw_print_qksm == null ) dw_print_qksm = new DataWindow( requestor );
        dw_print_qksm.Attach( win.Control( "dw_print_qksm" ) );
        if ( dw_print_dlbgwts == null ) dw_print_dlbgwts = new DataWindow( requestor );
        dw_print_dlbgwts.Attach( win.Control( "dw_print_dlbgwts" ) );
        if ( dw_print_dlxy == null ) dw_print_dlxy = new DataWindow( requestor );
        dw_print_dlxy.Attach( win.Control( "dw_print_dlxy" ) );
        if ( dw_print_sjmf_contract == null ) dw_print_sjmf_contract = new DataWindow( requestor );
        dw_print_sjmf_contract.Attach( win.Control( "dw_print_sjmf_contract" ) );
        if ( dw_print_sjmf_packinglist == null ) dw_print_sjmf_packinglist = new DataWindow( requestor );
        dw_print_sjmf_packinglist.Attach( win.Control( "dw_print_sjmf_packinglist" ) );
        if ( dw_print_sjmf_invoice == null ) dw_print_sjmf_invoice = new DataWindow( requestor );
        dw_print_sjmf_invoice.Attach( win.Control( "dw_print_sjmf_invoice" ) );
        if ( ContextMenuStrip1 == null ) ContextMenuStrip1 = new ContextMenu( requestor );
        ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1" ) );
        if ( ds_1 == null ) ds_1 = new DataStore( requestor );
        ds_1.Attach( win.Control( "ds_1" ) );
        if ( ds_role == null ) ds_role = new DataStore( requestor );
        ds_role.Attach( win.Control( "ds_role" ) );
        if ( ds_2 == null ) ds_2 = new DataStore( requestor );
        ds_2.Attach( win.Control( "ds_2" ) );
        if ( ds_role_kybmjl == null ) ds_role_kybmjl = new DataStore( requestor );
        ds_role_kybmjl.Attach( win.Control( "ds_role_kybmjl" ) );
        if ( ds_role_hybmjl == null ) ds_role_hybmjl = new DataStore( requestor );
        ds_role_hybmjl.Attach( win.Control( "ds_role_hybmjl" ) );
        if ( ds_sd == null ) ds_sd = new DataStore( requestor );
        ds_sd.Attach( win.Control( "ds_sd" ) );
        if ( ds_3 == null ) ds_3 = new DataStore( requestor );
        ds_3.Attach( win.Control( "ds_3" ) );

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

        if ( typeof ( self.dw_List_EntertoTab ) == "function" )
            win.AttachEvent( "dw_list", "KeyDown", self.dw_List_EntertoTab );

        if ( typeof ( self.dw_List_LButtonDown ) == "function" )
            win.AttachEvent( "dw_list", "LButtonDown", self.dw_List_LButtonDown );

        if ( typeof ( self.dw_List_MouseMove ) == "function" )
            win.AttachEvent( "dw_list", "MouseMove", self.dw_List_MouseMove );

        if ( typeof ( self.RbuttonDown ) == "function" )
            win.AttachEvent( "dw_list", "RButtonDown", self.RbuttonDown );

        if ( typeof ( self.Stop ) == "function" )
            win.AttachEvent( "btn_stop", "Clicked", self.Stop );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_ctr_area2", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Jyjyzs ) == "function" )
            win.AttachEvent( "jyjyzs", "Clicked", self.Jyjyzs );

        if ( typeof ( self.Ohdlxy ) == "function" )
            win.AttachEvent( "欧恒代理协议ToolStripMenuItem", "Clicked", self.Ohdlxy );

        if ( typeof ( self.Bgd ) == "function" )
            win.AttachEvent( "报关单ToolStripMenuItem", "Clicked", self.Bgd );

        if ( typeof ( self.Xswj ) == "function" )
            win.AttachEvent( "归档文件ToolStripMenuItem", "Clicked", self.Xswj );

        if ( typeof ( self.ddlb_sdxz_getfocus ) == "function" )
            win.AttachEvent( "ddlb_sd", "GetFocus", self.ddlb_sdxz_getfocus );

        if ( typeof ( self.Sd ) == "function" )
            win.AttachEvent( "ddlb_sd", "SelectionChanged", self.Sd );

        if ( typeof ( self.sleJzxh_EditChanged ) == "function" )
            win.AttachEvent( "sle_jzxh", "EditChanged", self.sleJzxh_EditChanged );

        if ( typeof ( self.sleTgdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_3", "EditChanged", self.sleTgdh_EditChanged );

        if ( typeof ( self.sleBjh_EditChanged ) == "function" )
            win.AttachEvent( "sle_tgdh", "EditChanged", self.sleBjh_EditChanged );

        if ( typeof ( self.sleSjshrmc_EditChanged ) == "function" )
            win.AttachEvent( "sle_sjshrmc", "EditChanged", self.sleSjshrmc_EditChanged );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "cbx_tycj", "Clicked", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_jdrjc", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_rqlx", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "btn_read", "Clicked", self.Retrieve );

        if ( typeof ( self.sle_EditChanged ) == "function" )
            win.AttachEvent( "sle_1", "EditChanged", self.sle_EditChanged );

        if ( typeof ( self.slectr_area2_EditChanged ) == "function" )
            win.AttachEvent( "sle_kh", "EditChanged", self.slectr_area2_EditChanged );

        if ( typeof ( self.slehth_EditChanged ) == "function" )
            win.AttachEvent( "sle_hth", "EditChanged", self.slehth_EditChanged );

        if ( typeof ( self.sletdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_tdh", "EditChanged", self.sletdh_EditChanged );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_jdr", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.sleftdh_EditChanged ) == "function" )
            win.AttachEvent( "sle_ftdh", "EditChanged", self.sleftdh_EditChanged );

        if ( typeof ( self.slectr_area2_EditChanged ) == "function" )
            win.AttachEvent( "sle_gwgys", "EditChanged", self.slectr_area2_EditChanged );

        if ( typeof ( self.Help ) == "function" )
            win.AttachEvent( "btn_help", "Clicked", self.Help );

        if ( typeof ( self.OcrDq ) == "function" )
            win.AttachEvent( "btn_ocrdq", "Clicked", self.OcrDq );

        if ( typeof ( self.New ) == "function" )
            win.AttachEvent( "btn_new", "Clicked", self.New );

        if ( typeof ( self.Copy ) == "function" )
            win.AttachEvent( "btn_duplicate", "Clicked", self.Copy );

        if ( typeof ( self.Delete ) == "function" )
            win.AttachEvent( "btn_delete", "Clicked", self.Delete );

        if ( typeof ( self.OpenWindow ) == "function" )
            win.AttachEvent( "btn_open", "Clicked", self.OpenWindow );

        if ( typeof ( self.Save ) == "function" )
            win.AttachEvent( "btn_save", "Clicked", self.Save );

        if ( typeof ( self.Yflr ) == "function" )
            win.AttachEvent( "btn_yflr", "Clicked", self.Yflr );

        if ( typeof ( self.PrintContract ) == "function" )
            win.AttachEvent( "合同打印ToolStripMenuItem", "Clicked", self.PrintContract );

        if ( typeof ( self.PrintSjmfContract ) == "function" )
            win.AttachEvent( "m_sjmfht", "Clicked", self.PrintSjmfContract );

        if ( typeof ( self.PrintInvoice ) == "function" )
            win.AttachEvent( "发票打印ToolStripMenuItem", "Clicked", self.PrintInvoice );

        if ( typeof ( self.PrintSjmfInvoice ) == "function" )
            win.AttachEvent( "m_sjmffpdy", "Clicked", self.PrintSjmfInvoice );

        if ( typeof ( self.PrintPackingList ) == "function" )
            win.AttachEvent( "箱单打印ToolStripMenuItem", "Clicked", self.PrintPackingList );

        if ( typeof ( self.PrintSjmfPackingList ) == "function" )
            win.AttachEvent( "m_sjmfxd", "Clicked", self.PrintSjmfPackingList );

        if ( typeof ( self.PrintZthqksm ) == "function" )
            win.AttachEvent( "直提货情况说明ToolStripMenuItem", "Clicked", self.PrintZthqksm );

        if ( typeof ( self.Print_qksm ) == "function" )
            win.AttachEvent( "btn_qksmdy", "Clicked", self.Print_qksm );

        if ( typeof ( self.Print_bzjsqs ) == "function" )
            win.AttachEvent( "btn_bzjsqs", "Clicked", self.Print_bzjsqs );

        if ( typeof ( self.Print_dlbgwts ) == "function" )
            win.AttachEvent( "btn_dlbgwts", "Clicked", self.Print_dlbgwts );

        if ( typeof ( self.Print_hczm ) == "function" )
            win.AttachEvent( "航次证明ToolStripMenuItem", "Clicked", self.Print_hczm );

        if ( typeof ( self.Print_ecczm ) == "function" )
            win.AttachEvent( "二程船证明ToolStripMenuItem", "Clicked", self.Print_ecczm );

        if ( typeof ( self.Print_dlxy ) == "function" )
            win.AttachEvent( "代理协议ToolStripMenuItem", "Clicked", self.Print_dlxy );

        if ( typeof ( self.Print_forma ) == "function" )
            win.AttachEvent( "产地证ToolStripMenuItem", "Clicked", self.Print_forma );

        if ( typeof ( self.OpenYcyy ) == "function" )
            win.AttachEvent( "btn_ycyy", "Clicked", self.OpenYcyy );

        if ( typeof ( self.Zgggbz ) == "function" )
            win.AttachEvent( "btn_zgggbz", "Clicked", self.Zgggbz );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "rb_zj", "Clicked", self.Retrieve );

        if ( typeof ( self.RetrieveQb ) == "function" )
            win.AttachEvent( "rb_qb", "Clicked", self.RetrieveQb );

        if ( typeof ( self.RetrieveHy ) == "function" )
            win.AttachEvent( "rb_hy", "Clicked", self.RetrieveHy );

        if ( typeof ( self.RetrieveKy ) == "function" )
            win.AttachEvent( "rb_ky", "Clicked", self.RetrieveKy );

        if ( typeof ( self.Retrieve ) == "function" )
            win.AttachEvent( "ddlb_fxzt", "SelectionChanged", self.Retrieve );

        if ( typeof ( self.sleycd_EditChanged ) == "function" )
            win.AttachEvent( "sle_2", "EditChanged", self.sleycd_EditChanged );

        if ( typeof ( self.Filter ) == "function" )
            win.AttachEvent( "单列过滤ToolStripMenuItem", "Clicked", self.Filter );

        if ( typeof ( self.Filter_Cancle ) == "function" )
            win.AttachEvent( "取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle );

        if ( typeof ( self.Dcrz ) == "function" )
            win.AttachEvent( "导出ToolStripMenuItem", "Clicked", self.Dcrz );

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
        dw_log.Detach(); dw_log = null;
        dw_print_forma.Detach(); dw_print_forma = null;
        dw_filter.Detach(); dw_filter = null;
        dw_print_ecczm.Detach(); dw_print_ecczm = null;
        dw_print_hczm.Detach(); dw_print_hczm = null;
        tb_3.Detach(); tb_3 = null;
        ddlb_ctr_area2.Detach(); ddlb_ctr_area2 = null;
        ddlb_sd.Detach(); ddlb_sd = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        sle_3.Detach(); sle_3 = null;
        sle_tgdh.Detach(); sle_tgdh = null;
        sle_sjshrmc.Detach(); sle_sjshrmc = null;
        cbx_tycj.Detach(); cbx_tycj = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        dw_print_zthqksm.Detach(); dw_print_zthqksm = null;
        dw_print_packinglist.Detach(); dw_print_packinglist = null;
        dw_print_invoice.Detach(); dw_print_invoice = null;
        dw_print_contract.Detach(); dw_print_contract = null;
        mle_jzxh.Detach(); mle_jzxh = null;
        tb_2.Detach(); tb_2 = null;
        ddlb_rqlx.Detach(); ddlb_rqlx = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_hth.Detach(); sle_hth = null;
        sle_tdh.Detach(); sle_tdh = null;
        ddlb_jdr.Detach(); ddlb_jdr = null;
        sle_ftdh.Detach(); sle_ftdh = null;
        sle_gwgys.Detach(); sle_gwgys = null;
        tb_1.Detach(); tb_1 = null;
        rb_zj.Detach(); rb_zj = null;
        rb_qb.Detach(); rb_qb = null;
        rb_hy.Detach(); rb_hy = null;
        rb_ky.Detach(); rb_ky = null;
        ddlb_fxzt.Detach(); ddlb_fxzt = null;
        sle_2.Detach(); sle_2 = null;
        dw_print_bzjsqs.Detach(); dw_print_bzjsqs = null;
        dw_print_qksm.Detach(); dw_print_qksm = null;
        dw_print_dlbgwts.Detach(); dw_print_dlbgwts = null;
        dw_print_dlxy.Detach(); dw_print_dlxy = null;
        dw_print_sjmf_contract.Detach(); dw_print_sjmf_contract = null;
        dw_print_sjmf_packinglist.Detach(); dw_print_sjmf_packinglist = null;
        dw_print_sjmf_invoice.Detach(); dw_print_sjmf_invoice = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_2.Detach(); ds_2 = null;
        ds_role_kybmjl.Detach(); ds_role_kybmjl = null;
        ds_role_hybmjl.Detach(); ds_role_hybmjl = null;
        ds_sd.Detach(); ds_sd = null;
        ds_3.Detach(); ds_3 = null;
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

    var iw_Hddz_Beizhu = null;
    var iw_Hddz_Edit_Yflr = null;
    var iw_Fj_Edit = null;
    var iw_Wldw_Select = null;
    
    var iw_Test = null;
    var iw_Main1 = null;
    var result = "";
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
    this.Retrieve = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var tycj = "N"
        if (cbx_tycj.GetChecked() == true) {
            tycj = "Y";
        }

        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var ctr_area2 = ddlb_ctr_area2.GetText();
        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        if (endDate <= beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }


        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var Tybm = requestor.GetParm("Tybm");
        var Sfqytybm = requestor.GetParm("Sfqytybm");
        var lx = ""
        if (rb_zj.GetChecked() == true) {
            lx = "zj"
        } else
            if (rb_qb.GetChecked() == true) {
                lx = "qb"
            } else
                if (rb_hy.GetChecked() == true) {

                    lx = "hy"
                }
                else
                    if (rb_ky.GetChecked() == true) {
                        lx = "ky"
                    }
                    dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), lx, fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, ctr_area2, tycj, jdrjc);
        //        self.slectr_area2_EditChanged();
    }
    //#endregion


    //#region 全部查询
    this.RetrieveQb = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var ctr_area2 = ddlb_ctr_area2.GetText();
        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        var tycj = "N"
        if (cbx_tycj.GetChecked() == true) {
            tycj = "Y";
        }

        if (endDate <= beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }

        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var Tybm = requestor.GetParm("Tybm");
        var Sfqytybm = requestor.GetParm("Sfqytybm");

        dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), "qb", fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, ctr_area2, tycj, jdrjc);
        //        self.slectr_area2_EditChanged();
    }
    //#endregion

    //#region 海运查询
    this.RetrieveHy = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var ctr_area2 = ddlb_ctr_area2.GetText();
        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        var tycj = "N"
        if (cbx_tycj.GetChecked() == true) {
            tycj = "Y";
        }

        if (endDate <= beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }

        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var Tybm = requestor.GetParm("Tybm");
        var Sfqytybm = requestor.GetParm("Sfqytybm");

        dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), "hy", fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, ctr_area2, tycj,jdrjc);
//        self.slectr_area2_EditChanged();
    }
    //#endregion



    //#region 空运查询
    this.RetrieveKy = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var ctr_area2 = ddlb_ctr_area2.GetText();
        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        var tycj = "N"
        if (cbx_tycj.GetChecked() == true) {
            tycj = "Y";
        }

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

        dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), "ky", fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, ctr_area2, tycj, jdrjc);
        //        self.slectr_area2_EditChanged();
    }
    //#endregion


    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenWindow = function ()
    {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000172";
        var row = ds_1.Find( "id='" + node + "'", 1, ds_1.RowCount() );
        //如果没有数据，则返回
        if ( dw_list.RowCount() <= 0 )
            return;
        var ywbh = dw_list.GetItemString( dw_list.GetRow(), 'ywbh' )
        var status = dw_list.GetItemString( dw_list.GetRow(), 'state' )
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString( dw_list.GetRow(), "zbr" );
        var userid = requestor.GetParm( "userid" );
        //        var operation = requestor.GetParm("operation");
        //失效按钮的控制
        var zbr = dw_list.GetItemString( dw_list.GetRow(), "zbr" );
        var userid = requestor.GetParm( "userid" );

        var kybmjl = requestor.GetParm( "kybmjl" );
        var hybmjl = requestor.GetParm( "hybmjl" );

        var ysfs = dw_list.GetItemString( dw_list.GetRow(), 'ysfs' )

        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString( row, "ywbh" );
        var sfymx = QsWebSoft.PubMethod.KyhddzSfymx( ywbh ).value;
        if ( sfymx == null )
        {
            sfymx = 0;
        }
       
        var operation
        if ( ( ywy == userid || zbr == userid || userid == "0003" || ( ysfs == "空运" && kybmjl == "Y" ) || ( ysfs == "海运" && hybmjl == "Y" ) ) )
        {
            operation = "open";
        }
        else
        {
            operation = "show";
        }

        //先取得页面父窗口的TabStrip控件
        if ( ts_1 == null )
        {
            if ( window.external != null )
                ts_1 = window.external.Control( "ts_1" );
        }

        if ( ts_1 == null )
            return;

        //模块是否已打开
        var index = ts_1.SelectItem( node );
        if ( index > 0 )
            return;


        //取节点所对应的数据窗口记录

        if ( row > 0 )
        {
            openStyle = ds_1.GetItemString( row, "openStyle" );
            url = ds_1.GetItemString( row, "WindowName" );
            parm = ds_1.GetItemString( row, "OpenParm" );
            label = ds_1.GetItemString( row, "Title" );
        }
        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if ( openStyle == "2" )
            ts_1.Open( node, label, "", url, true );
        else if ( openStyle == "3" )
            requestor.ShowModalDialog( url, null, parm );
        else

            ts_1.Open( node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&sfymx=' + sfymx + '&operation=' + operation.toString(), true );



    }
    //#endregion



    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "ywbh") {
                self.OpenWindow();
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
                dw_list.ScrollToRow(Row)
            }
            else if (dwoName == "beizhu") {
                self.AddBeizhu(Row);
            }

        } 
    }
    //#endregion





    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            if (dwoName == "hz_jzxh") {
                mle_jzxh.Show()
                var hz_jzxh = dw_list.GetItemString(Row, "hz_jzxh")
                mle_jzxh.SetText(hz_jzxh);
                mle_jzxh.Move(xPos + 600, yPos + 450)

            } else if (dwoName == "dzzt") {
                mle_jzxh.Show()
                var hz_jzxh = dw_list.GetItemString(Row, "dzzt")
                mle_jzxh.SetText(hz_jzxh);
                mle_jzxh.Move(xPos + 600, yPos + 450)

            }
            else if (dwoName == "yjkgsj") {
                mle_jzxh.Show()
                var yjkgsjsrsj = dw_list.GetItemDate(Row, "yjkgsjsrsj")
                mle_jzxh.SetText(yjkgsjsrsj);
                mle_jzxh.Move(xPos + 600, yPos + 450)
            }
            else if (dwoName == "beizhu") {
                mle_jzxh.Show()
                var beizhu = dw_list.GetItemString(Row, "beizhu")
                mle_jzxh.SetText(beizhu);
                mle_jzxh.Move(xPos + 600, yPos + 450)
            }
            else if (dwoName == "xhgqjc") {
                var ysfs = dw_list.GetItemString(Row, "ysfs");
                if (ysfs == "" || ysfs == null) {
                    requestor.MessageBox("提示", "请先选择运输方式！")
                    return
                }
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                if (ysfs == "海运") {
                    khlx = "hymt";
                } else {
                    khlx = "mt"
                }
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_list);
                iw_Wldw_Select.SetRow(Row);
                iw_Wldw_Select.SetData("hddzlist_xhgq");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_list.SetFocus();
            }
            else if (dwoName == "cdgsjc") {
                var ysfs = dw_list.GetItemString(Row, "ysfs");
                if (ysfs == "" || ysfs == null) {
                    requestor.MessageBox("提示", "请先选择运输方式！")
                    return
                }
                if (ysfs == "海运") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "cdorhd";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetRow(Row);
                    iw_Wldw_Select.SetData("hddzlist_cdgs");
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_list.SetFocus();
                }
            }
            else {
                mle_jzxh.Hide()
            }

            fzks_row = Row;
        };
    }
    //#endregion

    //#region 修改数据窗口内容dw_List_ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "hdzljcbz") {
            var date = new Date();
            var date_null = new Date("1900/1/1");
            if (data == "Y") {
                dw_list.SetItem(row, "hdzljcsj", date.getVarDate())
            } else {
                dw_list.SetItem(row, "hdzljcsj", date_null.getVarDate())
            }

        }

        if (dwoName == "tdlx") {
            var dzzt = dw_list.GetItemString(row, "dzzt");
            var tdlx = dw_list.GetItemString(row, "tdlx");
            if (tdlx !== "未知") {
                dzzt = dzzt.replace("提单类型未确定;", "");
            }
            dw_list.SetItem(row, "dzzt", dzzt);
            var ywbh = dw_list.GetItemString(row, "ywbh");
            var num = QsWebSoft.PubMethod.Update_Hddz_Tdlx(ywbh, data).value;

            var dzzt_1 = QsWebSoft.PubMethod.SelectDzzt(ywbh, dzzt).value;
            if (dzzt_1 != null && dzzt_1 != "") {
                dw_list.SetItem(row, "dzzt", dzzt_1);
            }
        }

        if (dwoName == "sfbhbj") {
            var date = new Date();
            var date_null = new Date("1900/1/1");
            if (data == "Y") {
                dw_list.SetItem(row, "bhbjsj", date.getVarDate());
            } else {
                dw_list.SetItem(row, "bhbjsj", date_null.getVarDate());
            }
        }

        if (dwoName == "sfzbzj") {
            var date = new Date();
            var date_null = new Date("1900/1/1");
            if (data == "Y") {
                dw_list.SetItem(row, "zbzjsj", date.getVarDate());
            } else {
                dw_list.SetItem(row, "zbzjsj", date_null.getVarDate());
            }
        }

//        if (dwoName == "hxzgtgzt") {
//            var date = new Date();
//            dw_list.SetItem(row, "hxzgtgsj", date.getVarDate());
//        }
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
        var node = "000172";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        var ywbh = null;

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
        
        var    sfymx = 0;
        

        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open( node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString() + '&sfymx=' + sfymx, true );

    }
    //#endregion

    //#region 删除
    this.Delete = function () {

        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;



        //        dw_list.ReSelectRow(row);
        //        dw_list.RefreshDetails();

        var status = dw_list.GetItemString(row, "state");

        if (status != "新制") {
            requestor.MessageBox("提示", "当前货代单证的状态为<" + status + ">,不能被删除!", 1);
            return;
        }

        var ywy = ""//dw_list.GetItemString(row, "ywy");
        var zbr = dw_list.GetItemString(row, "zbr");
        var userid = requestor.GetParm("userid");
        
        if (ywy != userid && zbr != userid) {
            requestor.MessageBox("提示", "不是自己的数据,不能被删除!", 1);
            return;
        }

        var ywbh = dw_list.GetItemString(row, "ywbh");
        var SupplierSellID = dw_list.GetItemString(row, "SupplierSellID");
        if (requestor.MessageBox("提示", "删除货代单证<" + ywbh + ">,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
            return;

        //同步生鲜港
        var SupplierSellID = dw_list.GetItemString(row, "SupplierSellID");

        var jdrbm = dw_list.GetItemString(row, "jdrbm");
        var jdrState = QsWebSoft.PubMethod.SelJdrState(ywbh).value;
        if (SupplierSellID == null || SupplierSellID == "") {
            if (jdrState == "Y") {
                requestor.MessageBox("提示", "数据在上传处理中，10分钟后刷新列表再删除！", 1);
                return;
            }
        }

        var ywbh = dw_list.GetItemString(row, "ywbh");
        var log_num = dw_log.RowCount();

        var row = dw_log.InsertRow(0);
        //var maxNumber =  self.SerialNumber(log_num);
        var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

        dw_log.SetItem(row, "eid", serialNumber);
        dw_log.SetItem(row, "tablename", "yw_hddz");
        dw_log.SetItem(row, "funname", "DelHddz");
        dw_log.SetItem(row, "mainid", SupplierSellID);
        dw_log.SetItem(row, "parameters", ywbh);
        dw_log.ScrollToRow(row);
        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行删除的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Delete", "ywbh=" + ywbh + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
            dw_log.ResetUpdate();
            requestor.MessageBox("提示", webReq.ResponseText());
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }
    //#endregion

    //#region 合同终止
    this.Stop = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_log.Retrieve(requestor.GetParm("userid"), "kylb");
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var state = dw_list.GetItemString(row, "state");
        var SupplierSellID = dw_list.GetItemString(row, "SupplierSellID");
        var dw_log_row = dw_log.InsertRow(0);
        var eid = dw_log.GetItemString(dw_log_row, "eid_max");
        dw_log.DeleteRow(dw_log_row);
        if (state == "终止") {
            if (requestor.MessageBox("提示", "货代单证<" + ywbh + ">已经终止，是否修改为新制?", ICON.Question, BUTTON.YesNo) == 1)
                var state = "新制"
            var num = QsWebSoft.PubMethod.UpdateHddzState(ywbh, SupplierSellID, state, eid).value;
            if (num == 1) {
                dw_list.SetItem(row, "state", "新制");
            }
        }
        else {
            var Kysfph = QsWebSoft.PubMethod.Kysfph(ywbh).value;
            if (Kysfph == 'N') {
                if (requestor.MessageBox("提示", "是否终止货代单证<" + ywbh + ">", ICON.Question, BUTTON.YesNo) == 1)
                    var state = "终止"
                var num = QsWebSoft.PubMethod.UpdateHddzState(ywbh, SupplierSellID, "终止", eid).value;
                if (num == 1) {
                    dw_list.SetItem(row, "state", "终止");
                }
            } else {
                requestor.MessageBox("提示", "已经有配货，不能终止，要终止，请先删除配货信息！");
            }
        }
    }
    //#endregion


    //#region 合同打印
    this.PrintContract = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
        dw_print_contract.Retrieve(ywbh)
        dw_print_contract.PrintPreview()
    }
    //#endregion

    //#region 合同打印
    this.PrintSjmfContract = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
        dw_print_sjmf_contract.Retrieve(ywbh)
        dw_print_sjmf_contract.PrintPreview()
    }
    //#endregion



    //#region 发票打印
    this.PrintInvoice = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
        var zje = dw_list.GetItemNumber(dw_list.GetRow(), "zje");
        var gwgysmc = dw_list.GetItemString(dw_list.GetRow(), "gwgysmc");
         
        self.Jedx(zje);
        dw_print_invoice.SetRedraw(false);
        var strFilePath = "/Images/logon/";       
        strFilePath = strFilePath + gwgysmc + ".jpg";
        dw_print_invoice.SetPicture("p_1", strFilePath);
        dw_print_invoice.Retrieve(ywbh, result);
        dw_print_invoice.PrintPreview()
         
        //       
    }
    //#endregion

    //#region 发票打印
    this.PrintSjmfInvoice = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
        var zje = dw_list.GetItemNumber(dw_list.GetRow(), "zje");
        var zjsmc = dw_list.GetItemString(dw_list.GetRow(), "zjsmc");

        self.Jedx(zje);
        dw_print_sjmf_invoice.SetRedraw(false);
        var strFilePath = "/Images/logon/";
        strFilePath = strFilePath + zjsmc + ".jpg";
        dw_print_sjmf_invoice.SetPicture("p_1", strFilePath);
        dw_print_sjmf_invoice.Retrieve(ywbh, result);
        dw_print_sjmf_invoice.PrintPreview()

        //       
    }
    //#endregion

    //#region 箱单打印 
    this.PrintPackingList = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
        dw_print_packinglist.Retrieve(ywbh)
        dw_print_packinglist.PrintPreview()
    }
    //#endregion

    //#region 实际卖方箱单打印 
    this.PrintSjmfPackingList = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
        dw_print_sjmf_packinglist.Retrieve(ywbh)
        dw_print_sjmf_packinglist.PrintPreview()
    }
    //#endregion


    //#region 箱单打印 
    this.PrintZthqksm = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
        dw_print_zthqksm.Retrieve(ywbh)
        dw_print_zthqksm.PrintPreview()
    }
    //#endregion

    //#region 打印
    this.Print_qksm = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_qksm.SetDataObject("dw_hddz_print_qksm");
        dw_print_qksm.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_qksm.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_bzjsqs = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_bzjsqs.SetDataObject("dw_hddz_print_bzjsqs");
        dw_print_bzjsqs.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_bzjsqs.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_dlbgwts = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_dlbgwts.SetDataObject("dw_hddz_print_dlbgwts");
        dw_print_dlbgwts.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_dlbgwts.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_hczm = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_hczm.SetDataObject("dw_hddz_print_hczm");
        dw_print_hczm.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_hczm.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_ecczm = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_ecczm.SetDataObject("dw_hddz_print_ecczm");
        dw_print_ecczm.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_ecczm.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_dlxy = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_dlxy.SetDataObject("dw_hddz_print_dlxy");
        dw_print_dlxy.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_dlxy.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_forma = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_forma.SetDataObject("dw_hddz_print_cdz");
        dw_print_forma.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        var strFilePath = "/Images/cdzyz.png";
        dw_print_forma.SetPicture("p_1", strFilePath);
        dw_print_forma.PrintPreview();
    }
    //#endregion
 

    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("Upper(ywbh) like Upper('%" + text + "%')");
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
    //#endregion

    //#region 过滤通关单号
    this.sleTgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("(Upper(tgdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤报检号
    this.sleBjh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("(Upper(bjh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤实际收货人名称
    this.sleSjshrmc_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("(Upper(sjshrmc) like Upper('%" + text + "%'))");
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

    //#region 过滤副提单号
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


    //#region 过滤国外供应商
    this.slegwgys_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%')) or ( Upper(gwgyspym) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤原产地
    this.sleycd_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ycd) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤集装箱号
    this.sleJzxh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("Upper(hz_jzxh) like Upper('%" + text + "%') ");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤细分地区
    this.slectr_area2_EditChanged = function (text) {
        var ctr_area2 = ddlb_ctr_area2.GetText();
        var ls_filter = "";
        var gwgysmc = sle_gwgys.GetText();
        if (gwgysmc == "" || gwgysmc == null) {
            ls_filter = "";
        } else {
            ls_filter = "(( Upper(gwgysmc) like Upper('%" + gwgysmc + "%')) or ( Upper(gwgyspym) like Upper('%" + gwgysmc + "%')))";
        }

        var kh = sle_kh.GetText();

        if (kh == "" || kh == null) {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "((Upper(khmc) like Upper('%" + kh + "%')) or ( Upper(khpym) like Upper('%" + kh + "%')) or ( Upper(shdwjc) like Upper('%" + kh + "%')))";
            } else {
                ls_filter = ls_filter + " and (( Upper(khmc) like Upper('%" + kh + "%')) or ( Upper(khpym) like Upper('%" + kh + "%')) or ( Upper(shdwjc) like Upper('%" + kh + "%')))";

            }
        }


        if (ctr_area2 == "" || ctr_area2 == "全部") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "( Upper(ctr_area2) like Upper('%" + ctr_area2 + "%')) ";

            } else {
                ls_filter = ls_filter + " and ( Upper(ctr_area2) like Upper('%" + ctr_area2 + "%'))";

            }
        }
       
        dw_list.SetRedraw(false);
        dw_list.SetFilter(ls_filter);
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

    this.Dcrz = function ()
    {
        var userid = requestor.GetParm( "userid" );
        var sjts = dw_list.RowCount();
        var num = QsWebSoft.PubMethod.Dcrq( userid, "空运货代单证", sjts ).value;

    }

    //#region 复制
    this.Copy = function ()
    {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000172";
        var row = ds_1.Find( "id='" + node + "'", 1, ds_1.RowCount() );
        //如果没有数据，则返回
        if ( dw_list.RowCount() <= 0 )
            return;
        var ywbh = dw_list.GetItemString( dw_list.GetRow(), 'ywbh' )
        var operation
        operation = "copy";


        //先取得页面父窗口的TabStrip控件
        if ( ts_1 == null )
        {
            if ( window.external != null )
                ts_1 = window.external.Control( "ts_1" );
        }

        if ( ts_1 == null )
            return;

        //模块是否已打开
        var index = ts_1.SelectItem( node );
        if ( index > 0 )
            return;


        //取节点所对应的数据窗口记录

        if ( row > 0 )
        {
            openStyle = ds_1.GetItemString( row, "openStyle" );
            url = ds_1.GetItemString( row, "WindowName" );
            parm = ds_1.GetItemString( row, "OpenParm" );
            label = ds_1.GetItemString( row, "Title" );
        }
        var sfymx = 0;
        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if ( openStyle == "2" )
            ts_1.Open( node, label, "", url, true );
        else if ( openStyle == "3" )
            requestor.ShowModalDialog( url, null, parm );
        else
            ts_1.Open( node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString() + '&sfymx=' + sfymx, true );



    }
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_ky", "dw_hddz_list_ky");
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
            }
        }

        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListSave_Ky", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

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
    }
    //#endregion  

    //#region 增加备注
    this.AddBeizhu = function (Row) {
        if (iw_Hddz_Beizhu == null)
            iw_Hddz_Beizhu = new W_Hddz_Beizhu();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var ywbh = dw_list.GetItemString(Row, "ywbh")
        var zbr = dw_list.GetItemString(Row, "zbr")
        var userid = requestor.GetParm("userid");
        //        if (zbr == userid) {
        iw_Hddz_Beizhu.SetDataWindow(dw_list);
        iw_Hddz_Beizhu.SetData(ywbh);
        iw_Hddz_Beizhu.SetRow(Row);
        iw_Hddz_Beizhu.SetZbr(zbr);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Beizhu", iw_Hddz_Beizhu);

        //        }
    }
    //#endregion

    //#region 获得字段焦点
    this.Help = function () {
        //            javascript: window.open('\货代单证.txt')
        window.open('\aa.docx')
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

    this.Btn = function (Row) {

        //            if (iw_Test == null)
        //                iw_Test = new W_Test();

        //            requestor.Open("\WebForm1.aspx.cs.");

        //        }

        //         string strConn = "uid=sa;pwd=a6023;database=zjnb;server=180.166.207.114";
        //            SqlConnection ConnSql=new SqlConnection (strConn); 
        //            ConnSql.Open ();
        //             string strSQL="SELECT * FROM yw_hddz where datediff(yy,zbrq,getdate()) = 0 ";
        //            SqlDataAdapter da=new SqlDataAdapter(strSQL,ConnSql);         
        //            DataSet ds=new DataSet();
        //            da.Fill(ds);
        //            ds.WriteXml("aaa.xml");

        //            javascript: window.open("\Hddz\HTMLPage1.htm")
    }
    //#endregion


    this.fwb = function () {

        //            javascript: window.open("../fwbym/kindeditor/asp.net/demo.aspx");
        //            javascript: window.open("../fwbwj/fwbck.aspx?ID=1YW009");

        //            javascript: window.open("../fwbym/kindeditor/asp.net/index.aspx?ID=1YW001", "newwindow", "height=100,width=400,top=300,left=800,toolbar=no,menubar=no,scrollbars=no,resizable=no, location=no,status=no");
        //            Response("<script>window.open('../fwbym/kindeditor/asp.net/demo.aspx?ID=1','_blank')</script>");
        //            requestor.Open("/fwbym/kindeditor/asp.net/demo.aspx", "/fwbym/kindeditor/asp.net/demo.aspx");
    }

    //#region 异常原因
    this.Xswj = function () {
        var row = dw_list.GetRow();
        if (row >= 0) {
            var wjgd = dw_list.GetItemString(row, "wjgd");
            if (wjgd != null) {
                
                window.open("http://www.fruitease.com:8009/wenjian/wjgd/" + wjgd, "_blank", "channelmode");
            } else {
                requestor.MessageBox("提示", "文件未上传！")
            }
        }
    }
    //#endregion


    //#region 检验检疫证书
    this.Jyjyzs = function ()
    {
        var row = dw_list.GetRow();
        if ( row >= 0 )
        {
            var jyjyzs = dw_list.GetItemString( row, "jyjyzs" );
            if ( jyjyzs == null || jyjyzs == "" )
            {
                requestor.MessageBox( "提示", "文件未上传！" )
            } else
                  if ( jyjyzs.indexOf( ";" ) >= 0 )
                {
                    var jyjyzs_dgwj = jyjyzs.split( ";" );
                    for ( row = 0; row <= jyjyzs_dgwj.length - 1; row++ )
                    {
                        var wjmc = jyjyzs_dgwj[row].toString();
                        if ( wjmc.length > 1 )
                        {
                            window.open( "http://www.fruitease.com:8009/wenjian/CIQ TAX/" + wjmc, "_blank", "channelmode" );
                        }

                    }
                } else
                {
                    window.open( "http://www.fruitease.com:8009/wenjian/CIQ TAX/" + jyjyzs, "_blank", "channelmode" );
                }


        }
    }
    //#endregion


    //#region 税单
    this.Sd = function () {
        //        var sd = ddlb_sd.GetText();
        //        sd=sd.replace(/\s/g, '-kg-');
        //        if (sd == null || sd == "") {
        //            requestor.MessageBox("提示", "税单未上传！")
        //        } else {
        //            //                        javascript: window.open("http://www.fruitease.com:8009/wenjian/CIQ TAX/" + sd, "_blank", "channelmode");
        //            javascript: window.open("../FileWindow.aspx?sd=" + sd, "_blank", "channelmode");
        //        }

        var sd = ddlb_sd.GetText();
//        sd = sd.replace(/\s/g, '-kg-');
        if (sd == null || sd == "") {
            requestor.MessageBox("提示", "税单未上传！")
        } else {

                var ts_1 = null;
                var openStyle = "0";
                var url = "";
                var parm = "";
                var label = "";
                var node = "009060";
                var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());

                var ywbh = null;

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


                    ts_1.Open(node, label, "", "/Wjxz/W_Wjxz.aspx?FunID=" + node + '&wjmc=' + escape(sd), true);

                }

            }
            //#endregion

        //#region 获得数据窗口的焦点
        this.ddlb_sdxz_getfocus = function (sender) {
            var li_row
            li_row = dw_list.GetRow();
            var ywbh;
            ywbh = dw_list.GetItemString(li_row, "ywbh");

            ds_sd.DataWindowObject = "dd_sd_list";
            ds_sd.Retrieve(ywbh);
            ddlb_sd.Reset();
            for (row = 1; row <= ds_sd.RowCount(); row++) {
                var wjmc = ds_sd.GetItemString(row, "wjmc");
                ddlb_sd.AddItem(wjmc);
            }
        };
        //#endregion


        //#region 获得数据窗口的焦点
        this.ddlb_zbsdxz_getfocus = function (sender) {
            var li_row
            li_row = dw_list.GetRow();
            var ywbh;
            ywbh = dw_list.GetItemString(li_row, "ywbh");

            ds_sd.DataWindowObject = "dd_zbsd_list";
            ds_sd.Retrieve(ywbh);
            ddlb_zbsd.Reset();
            for (row = 1; row <= ds_sd.RowCount(); row++) {
                var wjmc = ds_sd.GetItemString(row, "wjmc");
                ddlb_zbsd.AddItem(wjmc);
            }
        };
        //#endregion


    //#region 欧恒代理协议
    this.Ohdlxy = function () {
        var row = dw_list.GetRow();
        if (row > 0) {
            var ohdlxy = dw_list.GetItemString(row, "ohdlxy");
            if (ohdlxy == null || ohdlxy == "") {
                requestor.MessageBox("提示", "欧恒代理协议未上传！")
            } else {
                var ohdlxygq = dw_list.GetItemString(row, "ohdlxygq"); 
                if (ohdlxygq == "N") {
                    requestor.MessageBox("提示", "欧恒代理协议已经过期！")
                }
                window.open("http://www.fruitease.com:8009/wenjian/OHDLXY/" + ohdlxy, "_blank", "channelmode");
            }
        }
    }
    //#endregion

    //#region 报关单
    this.Bgd = function () {
        var row = dw_list.GetRow();
        if (row > 0) {
            var sfybgd = dw_list.GetItemString(row, "sfybgd");
            if (sfybgd == "Y") {
                var bgdwjmc = dw_list.GetItemString(row, "bgdwjmc");
                if (bgdwjmc.indexOf(";") >= 0) {
                    var bgdwjmc_dgwj = bgdwjmc.split(";");
                    for (row = 0; row <= bgdwjmc_dgwj.length - 1; row++) {
                        var wjmc = bgdwjmc_dgwj[row].toString();
                        if (wjmc.length > 1) {
                            var index = wjmc.indexOf(".pdf");

                            if (index > 0) {
                                window.open("http://www.fruitease.com:8009/wenjian/bgd/" + wjmc, "_blank", "channelmode");
                            } else {
                                // window.open("http://www.fruitease.com:8009/IFView/mergeImage.aspx?IMGPATH=/wenjian/bgd/" + bgdwjmc, "_blank", "channelmode");        
                                window.open("http://www.fruitease.com:8009/IFView/imgyz.html?IMGPATH=/wenjian/bgd/" + wjmc, "_blank", "channelmode");

                            } 
                        } 
                    }
                }

                //            var bgdh = dw_list.GetItemString(row, "bgdh");
                //            if (bgdh == null || bgdh == "") {
                //                requestor.MessageBox("提示", "对应报关单号未输入！")
                //            } else {
                //                var sfybgd = dw_list.GetItemString(row, "sfybgd");
                //                if (sfybgd == "N") {
                //                    //                    requestor.MessageBox("提示", "报关单未上传！")
                //                    var ywbh = dw_list.GetItemString(row, "ywbh");

                //                    var index = ywbh.indexOf("-");

                //                    if (index > 0) {
                //                        ywbh = ywbh.substring(0, index);
                //                    };
                //                    
                //                    window.open("http://www.fruitease.com:8009/wenjian/bgd/" + ywbh + ".pdf", "_blank", "channelmode");
                ////                    window.open("http://www.fruitease.com:8009/IFView/imgyz.html?IMGPATH=/wenjian/bgd/220920161090007114.jpg", "_blank", "channelmode");
                //                } else {
                //                    bgdh = bgdh + ",";
                //                    do {
                //                     
                //                        var bgd = "";
                //                        var index = bgdh.indexOf(",");
                //                        if (index > 0) {
                //                            bgd = bgdh.substring(0, index)
                //                            bgdh = bgdh.substr(index + 1)

                //                        }
                //                        if (bgd.length > 1) {
                ////                            window.open("/IFView/imgyz.html?IMGPATH=/wenjian/bgd/220920161090007114.jpg", "_blank", "channelmode");
                //             
                //                            window.open("http://www.fruitease.com:8009/wenjian/bgd/" + bgd + ".pdf", "_blank", "channelmode");
                //                        }
                //                    } while (bgdh.indexOf(",") > 0);

                //                }
                //            }
            }
        }
    }
    //#endregion

    //#region 异常原因
    this.Zgggbz = function () {
        var row = dw_list.GetRow();
        if (row >= 0) {
            var ywbh = dw_list.GetItemString(row, "ywbh");
            var zgggbz = dw_list.GetItemString(row, "zgggbz");
            if (zgggbz == "Y") {
                if (requestor.MessageBox("提示", "业务编号：<" + ywbh + ">已经存在修改标志，是否取消修改标志?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_list.SetItem(row, "zgggbz", "N");
                }
            } else {
                if (requestor.MessageBox("提示", "业务编号：<" + ywbh + ">是否增加修改标志?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_list.SetItem(row, "zgggbz", "Y");
                }
            }
        }
    }
    //#endregion

    this.Jedx = function (source) {
        var ss = new Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE");
        var d1 = new Array("TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN");
        var d2 = new Array("TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY");
        var pos = new Array("", " THOUSAND ", " MILLION ", " BILLION ");

        var int_part;
        var dec_part;

        var temp;
        var part;
        var h;
        var s;
        var d;
        var count = 1
        var ds;
        result = "";
        var i;
        temp = source.toString();
        i = temp.indexOf(".");

        if (i == -1) {
            int_part = temp;
            dec_part = "";
        }
        else {
            int_part = temp.substring(0, i);
            dec_part = temp.substring(i + 1, temp.length);
        }

        if (int_part == "0") {
            result = "ZERO"
        }
        else {
            while (int_part > "") {
                temp = ""
                part = parseFloat(int_part.substring(int_part.length - 3, int_part.length));

                if (int_part.length > 3) {
                    int_part = int_part.substring(0, int_part.length - 3);
                }
                else {
                    int_part = "";
                }

                h = parseInt(part / 100, 10);
                ds = part % 100;
                d = parseInt(ds / 10, 10);
                s = ds % 10;

                if (h == 0) {
                    //                    temp="AND";;
                }
                else {
                    temp = ss[h] + " HUNDRED  "
                }


                if (ds != 0) {
                    temp = temp + "AND ";
                    if (d >= 2) {
                        temp = temp + " " + d2[d - 2] + " " + ss[s] + " ";
                    }
                    else {
                        if (d >= 1) {
                            temp = temp + " " + d1[s] + " ";
                        }
                        else {
                            temp = temp + " " + ss[s] + " ";
                        }
                    }
                }
                result = temp + pos[count - 1] + result;
                count++
            }
        }

        temp = "";
        if (dec_part == "" || dec_part == null) {
            //
        } else {
            ds = parseFloat(dec_part.substring(0, 2));
            d = parseInt(ds / 10, 10);
            s = ds % 10;

            if (ds != 0) {
                if (d >= 2) {
                    temp = temp + " " + d2[d - 2] + " " + ss[s]
                }
                else {
                    if (d >= 1) {
                        temp = temp + " " + d1[s]
                    } else {
                        temp = temp + " " + ss[s]
                    }
                }
            }

            if (temp > "") {
                result = result + ' CENTS ' + temp
            }
        }

        if (result.substring(0, 3) == "AND") {
            result = result.substring(3, result.length - 2)
        }

    };

    //#endregion


    //#region 增加备注
    this.Yflr = function () {
        if (iw_Hddz_Edit_Yflr == null)
            iw_Hddz_Edit_Yflr = new W_Hddz_Edit_Yflr();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var userid = requestor.GetParm("userid");
        var ywbh;
        var operation = "new";
        iw_Hddz_Edit_Yflr.SetZbr(userid);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Edit_Yflr" + '&ywbh=' + ywbh + '&operation=' + operation, iw_Hddz_Edit_Yflr);

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
                        copytext_sum = copytext_sum  + copytext
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

    //#region 过滤取消
    this.dw_export = function () {
        dw_list.SaveAs("D:\AAAA.xml");
    }
    //#endregion

    //#region Ocr读取
    this.OcrDq = function () {
//        requestor.Open("/IFView/OCRIFDemo.aspx",_bla); 
           //        this.window.location.href = encodeURI("/IFView/OCRIFDemo.aspx");
//        window.open('/IFView/OCRIFDemo.aspx');

        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000162";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        
        var ywbh = null;

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
            ts_1.Open(node, label, "", "/IFView/OCRIFDemo.aspx?FunID=" + node , true);

    }
    //#endregion
}