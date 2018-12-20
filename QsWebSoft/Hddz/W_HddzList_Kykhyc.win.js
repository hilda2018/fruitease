///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Kykhyc() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_fxsc= new DataWindow( requestor );
	 var mle_6= new MultiLineEdit( requestor );
	 var ddlb_1= new ToolStrip( requestor );
	 var ddlb_ycclzt_fxsc= new DropDownListBox( requestor );
	 var dw_thsc= new DataWindow( requestor );
	 var mle_1= new MultiLineEdit( requestor );
	 var tb_4= new ToolStrip( requestor );
	 var ddlb_ycclzt_thsc= new DropDownListBox( requestor );
	 var dw_wxqk= new DataWindow( requestor );
	 var dw_bqqk= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var ddlb_jydzt_bqqk= new DropDownListBox( requestor );
	 var ddlb_jyd_bqqk= new DropDownListBox( requestor );
	 var dw_wdqk= new DataWindow( requestor );
	 var tb_7= new ToolStrip( requestor );
	 var ddlb_wd= new DropDownListBox( requestor );
	 var ddlb_jydzt_wdqk= new DropDownListBox( requestor );
	 var ddlb_jyd_wdqk= new DropDownListBox( requestor );
	 var dw_gqdjyd= new DataWindow( requestor );
	 var tb_8= new ToolStrip( requestor );
	 var ddlb_ycclzt_gqdjyd= new DropDownListBox( requestor );
	 var ddlb_jydzt_gqjyd= new DropDownListBox( requestor );
	 var ddlb_jyd_gqjyd= new DropDownListBox( requestor );
	 var dw_fyqk= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var ddlb_ycclzt_fyqk= new DropDownListBox( requestor );
	 var dw_list_qtwt= new DataWindow( requestor );
	 var tb_5= new ToolStrip( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_ywbh= new SingleLineEdit( requestor );
	 var ddlb_jdr= new DropDownListBox( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ContextMenuStrip3= new ContextMenu( requestor );
	 var ContextMenuStrip4= new ContextMenu( requestor );
	 var ContextMenuStrip5= new ContextMenu( requestor );
	 var ContextMenuStrip6= new ContextMenu( requestor );
	 var ContextMenuStrip7= new ContextMenu( requestor );
	 var ContextMenuStrip8= new ContextMenu( requestor );
	 var ContextMenuStrip9= new ContextMenu( requestor );
	 var ContextMenuStrip10= new ContextMenu( requestor );
	 var ContextMenuStrip11= new ContextMenu( requestor );
	 var ContextMenuStrip12= new ContextMenu( requestor );
	 var ContextMenuStrip13= new ContextMenu( requestor );
	 var ContextMenuStrip14= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_2= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_fxsc == null ) dw_fxsc= new DataWindow( requestor );
		 dw_fxsc.Attach( win.Control( "dw_fxsc") ); 
		 if(mle_6 == null ) mle_6= new MultiLineEdit( requestor );
		 mle_6.Attach( win.Control( "mle_6") ); 
		 if(ddlb_1 == null ) ddlb_1= new ToolStrip( requestor );
		 ddlb_1.Attach( win.Control( "ddlb_1") ); 
		 if(ddlb_ycclzt_fxsc == null ) ddlb_ycclzt_fxsc= new DropDownListBox( requestor );
		 ddlb_ycclzt_fxsc.Attach( win.Control( "ddlb_ycclzt_fxsc") ); 
		 if(dw_thsc == null ) dw_thsc= new DataWindow( requestor );
		 dw_thsc.Attach( win.Control( "dw_thsc") ); 
		 if(mle_1 == null ) mle_1= new MultiLineEdit( requestor );
		 mle_1.Attach( win.Control( "mle_1") ); 
		 if(tb_4 == null ) tb_4= new ToolStrip( requestor );
		 tb_4.Attach( win.Control( "tb_4") ); 
		 if(ddlb_ycclzt_thsc == null ) ddlb_ycclzt_thsc= new DropDownListBox( requestor );
		 ddlb_ycclzt_thsc.Attach( win.Control( "ddlb_ycclzt_thsc") ); 
		 if(dw_wxqk == null ) dw_wxqk= new DataWindow( requestor );
		 dw_wxqk.Attach( win.Control( "dw_wxqk") ); 
		 if(dw_bqqk == null ) dw_bqqk= new DataWindow( requestor );
		 dw_bqqk.Attach( win.Control( "dw_bqqk") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(ddlb_jydzt_bqqk == null ) ddlb_jydzt_bqqk= new DropDownListBox( requestor );
		 ddlb_jydzt_bqqk.Attach( win.Control( "ddlb_jydzt_bqqk") ); 
		 if(ddlb_jyd_bqqk == null ) ddlb_jyd_bqqk= new DropDownListBox( requestor );
		 ddlb_jyd_bqqk.Attach( win.Control( "ddlb_jyd_bqqk") ); 
		 if(dw_wdqk == null ) dw_wdqk= new DataWindow( requestor );
		 dw_wdqk.Attach( win.Control( "dw_wdqk") ); 
		 if(tb_7 == null ) tb_7= new ToolStrip( requestor );
		 tb_7.Attach( win.Control( "tb_7") ); 
		 if(ddlb_wd == null ) ddlb_wd= new DropDownListBox( requestor );
		 ddlb_wd.Attach( win.Control( "ddlb_wd") ); 
		 if(ddlb_jydzt_wdqk == null ) ddlb_jydzt_wdqk= new DropDownListBox( requestor );
		 ddlb_jydzt_wdqk.Attach( win.Control( "ddlb_jydzt_wdqk") ); 
		 if(ddlb_jyd_wdqk == null ) ddlb_jyd_wdqk= new DropDownListBox( requestor );
		 ddlb_jyd_wdqk.Attach( win.Control( "ddlb_jyd_wdqk") ); 
		 if(dw_gqdjyd == null ) dw_gqdjyd= new DataWindow( requestor );
		 dw_gqdjyd.Attach( win.Control( "dw_gqdjyd") ); 
		 if(tb_8 == null ) tb_8= new ToolStrip( requestor );
		 tb_8.Attach( win.Control( "tb_8") ); 
		 if(ddlb_ycclzt_gqdjyd == null ) ddlb_ycclzt_gqdjyd= new DropDownListBox( requestor );
		 ddlb_ycclzt_gqdjyd.Attach( win.Control( "ddlb_ycclzt_gqdjyd") ); 
		 if(ddlb_jydzt_gqjyd == null ) ddlb_jydzt_gqjyd= new DropDownListBox( requestor );
		 ddlb_jydzt_gqjyd.Attach( win.Control( "ddlb_jydzt_gqjyd") ); 
		 if(ddlb_jyd_gqjyd == null ) ddlb_jyd_gqjyd= new DropDownListBox( requestor );
		 ddlb_jyd_gqjyd.Attach( win.Control( "ddlb_jyd_gqjyd") ); 
		 if(dw_fyqk == null ) dw_fyqk= new DataWindow( requestor );
		 dw_fyqk.Attach( win.Control( "dw_fyqk") ); 
		 if(tb_3 == null ) tb_3= new ToolStrip( requestor );
		 tb_3.Attach( win.Control( "tb_3") ); 
		 if(ddlb_ycclzt_fyqk == null ) ddlb_ycclzt_fyqk= new DropDownListBox( requestor );
		 ddlb_ycclzt_fyqk.Attach( win.Control( "ddlb_ycclzt_fyqk") ); 
		 if(dw_list_qtwt == null ) dw_list_qtwt= new DataWindow( requestor );
		 dw_list_qtwt.Attach( win.Control( "dw_list_qtwt") ); 
		 if(tb_5 == null ) tb_5= new ToolStrip( requestor );
		 tb_5.Attach( win.Control( "tb_5") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 
		 if(sle_ywbh == null ) sle_ywbh= new SingleLineEdit( requestor );
		 sle_ywbh.Attach( win.Control( "sle_ywbh") ); 
		 if(ddlb_jdr == null ) ddlb_jdr= new DropDownListBox( requestor );
		 ddlb_jdr.Attach( win.Control( "ddlb_jdr") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ContextMenuStrip2 == null ) ContextMenuStrip2= new ContextMenu( requestor );
		 ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2") ); 
		 if(ContextMenuStrip3 == null ) ContextMenuStrip3= new ContextMenu( requestor );
		 ContextMenuStrip3.Attach( win.Control( "ContextMenuStrip3") ); 
		 if(ContextMenuStrip4 == null ) ContextMenuStrip4= new ContextMenu( requestor );
		 ContextMenuStrip4.Attach( win.Control( "ContextMenuStrip4") ); 
		 if(ContextMenuStrip5 == null ) ContextMenuStrip5= new ContextMenu( requestor );
		 ContextMenuStrip5.Attach( win.Control( "ContextMenuStrip5") ); 
		 if(ContextMenuStrip6 == null ) ContextMenuStrip6= new ContextMenu( requestor );
		 ContextMenuStrip6.Attach( win.Control( "ContextMenuStrip6") ); 
		 if(ContextMenuStrip7 == null ) ContextMenuStrip7= new ContextMenu( requestor );
		 ContextMenuStrip7.Attach( win.Control( "ContextMenuStrip7") ); 
		 if(ContextMenuStrip8 == null ) ContextMenuStrip8= new ContextMenu( requestor );
		 ContextMenuStrip8.Attach( win.Control( "ContextMenuStrip8") ); 
		 if(ContextMenuStrip9 == null ) ContextMenuStrip9= new ContextMenu( requestor );
		 ContextMenuStrip9.Attach( win.Control( "ContextMenuStrip9") ); 
		 if(ContextMenuStrip10 == null ) ContextMenuStrip10= new ContextMenu( requestor );
		 ContextMenuStrip10.Attach( win.Control( "ContextMenuStrip10") ); 
		 if(ContextMenuStrip11 == null ) ContextMenuStrip11= new ContextMenu( requestor );
		 ContextMenuStrip11.Attach( win.Control( "ContextMenuStrip11") ); 
		 if(ContextMenuStrip12 == null ) ContextMenuStrip12= new ContextMenu( requestor );
		 ContextMenuStrip12.Attach( win.Control( "ContextMenuStrip12") ); 
		 if(ContextMenuStrip13 == null ) ContextMenuStrip13= new ContextMenu( requestor );
		 ContextMenuStrip13.Attach( win.Control( "ContextMenuStrip13") ); 
		 if(ContextMenuStrip14 == null ) ContextMenuStrip14= new ContextMenu( requestor );
		 ContextMenuStrip14.Attach( win.Control( "ContextMenuStrip14") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_2 == null ) ds_2= new DataStore( requestor );
		 ds_2.Attach( win.Control( "ds_2") ); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("window","Clicked",self.Retrieve); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_fxsc_Clicked)=="function") 
			 win.AttachEvent("dw_fxsc","Clicked",self.dw_fxsc_Clicked); 

		 if(typeof(self.dw_fxsc_DoubleClicked)=="function") 
			 win.AttachEvent("dw_fxsc","DoubleClicked",self.dw_fxsc_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_fxsc","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_fxsc_GetFocus)=="function") 
			 win.AttachEvent("dw_fxsc","GetFocus",self.dw_fxsc_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_fxsc","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_fxsc","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_thsc_Clicked)=="function") 
			 win.AttachEvent("dw_thsc","Clicked",self.dw_thsc_Clicked); 

		 if(typeof(self.dw_thsc_DoubleClicked)=="function") 
			 win.AttachEvent("dw_thsc","DoubleClicked",self.dw_thsc_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_thsc","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_thsc_GetFocus)=="function") 
			 win.AttachEvent("dw_thsc","GetFocus",self.dw_thsc_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_thsc","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_thsc","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_wxqk_Clicked)=="function") 
			 win.AttachEvent("dw_wxqk","Clicked",self.dw_wxqk_Clicked); 

		 if(typeof(self.dw_wxqk_DoubleClicked)=="function") 
			 win.AttachEvent("dw_wxqk","DoubleClicked",self.dw_wxqk_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_wxqk","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_wxqk_GetFocus)=="function") 
			 win.AttachEvent("dw_wxqk","GetFocus",self.dw_wxqk_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_wxqk","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_wxqk","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_bqqk_Clicked)=="function") 
			 win.AttachEvent("dw_bqqk","Clicked",self.dw_bqqk_Clicked); 

		 if(typeof(self.dw_bqqk_DoubleClicked)=="function") 
			 win.AttachEvent("dw_bqqk","DoubleClicked",self.dw_bqqk_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_bqqk","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_bqqk_GetFocus)=="function") 
			 win.AttachEvent("dw_bqqk","GetFocus",self.dw_bqqk_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_bqqk","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_bqqk","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_wdqk_Clicked)=="function") 
			 win.AttachEvent("dw_wdqk","Clicked",self.dw_wdqk_Clicked); 

		 if(typeof(self.dw_wdqk_DoubleClicked)=="function") 
			 win.AttachEvent("dw_wdqk","DoubleClicked",self.dw_wdqk_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_wdqk","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_wdqk_GetFocus)=="function") 
			 win.AttachEvent("dw_wdqk","GetFocus",self.dw_wdqk_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_wdqk","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_wdqk","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_gqdjyd_Clicked)=="function") 
			 win.AttachEvent("dw_gqdjyd","Clicked",self.dw_gqdjyd_Clicked); 

		 if(typeof(self.dw_gqdjyd_DoubleClicked)=="function") 
			 win.AttachEvent("dw_gqdjyd","DoubleClicked",self.dw_gqdjyd_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_gqdjyd","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_gqdjyd_GetFocus)=="function") 
			 win.AttachEvent("dw_gqdjyd","GetFocus",self.dw_gqdjyd_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_gqdjyd","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_gqdjyd","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_fyqk_Clicked)=="function") 
			 win.AttachEvent("dw_fyqk","Clicked",self.dw_fyqk_Clicked); 

		 if(typeof(self.dw_fyqk_DoubleClicked)=="function") 
			 win.AttachEvent("dw_fyqk","DoubleClicked",self.dw_fyqk_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_fyqk","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_fyqk_GetFocus)=="function") 
			 win.AttachEvent("dw_fyqk","GetFocus",self.dw_fyqk_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_fyqk","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_fyqk","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_qtwt_Clicked)=="function") 
			 win.AttachEvent("dw_list_qtwt","Clicked",self.dw_qtwt_Clicked); 

		 if(typeof(self.dw_qtwt_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list_qtwt","DoubleClicked",self.dw_qtwt_DoubleClicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_list_qtwt","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_qtwt_GetFocus)=="function") 
			 win.AttachEvent("dw_list_qtwt","GetFocus",self.dw_qtwt_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_list_qtwt","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list_qtwt","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_ywbh","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_jdr","SelectionChanged",self.Retrieve); 

		 if(typeof(self.BeiZhu)=="function") 
			 win.AttachEvent("btn_BeiZhu","Clicked",self.BeiZhu); 

		 if(typeof(self.Filter_fxsr)=="function") 
			 win.AttachEvent("单列过滤ToolStripMenuItem","Clicked",self.Filter_fxsr); 

		 if(typeof(self.Filter_Cancle_fxsr)=="function") 
			 win.AttachEvent("取消过滤ToolStripMenuItem","Clicked",self.Filter_Cancle_fxsr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_fxsr)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol_fxsr); 

		 if(typeof(self.CopySelect_fxsr)=="function") 
			 win.AttachEvent("选择复制ToolStripMenuItem","Clicked",self.CopySelect_fxsr); 

		 if(typeof(self.CopyL_fxsr)=="function") 
			 win.AttachEvent("整列复制ToolStripMenuItem","Clicked",self.CopyL_fxsr); 

		 if(typeof(self.Recover_fxsr)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover_fxsr); 

		 if(typeof(self.Filter_fxsc)=="function") 
			 win.AttachEvent("m_2","Clicked",self.Filter_fxsc); 

		 if(typeof(self.Filter_Cancle_fxsc)=="function") 
			 win.AttachEvent("m_4","Clicked",self.Filter_Cancle_fxsc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_8","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_fxsc)=="function") 
			 win.AttachEvent("m_10","Clicked",self.CopyCol_fxsc); 

		 if(typeof(self.CopySelect_fxsc)=="function") 
			 win.AttachEvent("m_11","Clicked",self.CopySelect_fxsc); 

		 if(typeof(self.CopyL_fxsc)=="function") 
			 win.AttachEvent("m_12","Clicked",self.CopyL_fxsc); 

		 if(typeof(self.Recover_fxsc)=="function") 
			 win.AttachEvent("m_7","Clicked",self.Recover_fxsc); 

		 if(typeof(self.Filter_thsc)=="function") 
			 win.AttachEvent("m_13","Clicked",self.Filter_thsc); 

		 if(typeof(self.Filter_Cancle_thsc)=="function") 
			 win.AttachEvent("m_15","Clicked",self.Filter_Cancle_thsc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_19","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_thsc)=="function") 
			 win.AttachEvent("m_21","Clicked",self.CopyCol_thsc); 

		 if(typeof(self.CopySelect_thsc)=="function") 
			 win.AttachEvent("m_22","Clicked",self.CopySelect_thsc); 

		 if(typeof(self.CopyL_thsc)=="function") 
			 win.AttachEvent("m_23","Clicked",self.CopyL_thsc); 

		 if(typeof(self.Recover_thsc)=="function") 
			 win.AttachEvent("m_18","Clicked",self.Recover_thsc); 

		 if(typeof(self.Filter_wxqk)=="function") 
			 win.AttachEvent("m_24","Clicked",self.Filter_wxqk); 

		 if(typeof(self.Filter_Cancle_wxqk)=="function") 
			 win.AttachEvent("m_26","Clicked",self.Filter_Cancle_wxqk); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_30","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_wxqk)=="function") 
			 win.AttachEvent("m_32","Clicked",self.CopyCol_wxqk); 

		 if(typeof(self.CopySelect_wxqk)=="function") 
			 win.AttachEvent("m_33","Clicked",self.CopySelect_wxqk); 

		 if(typeof(self.CopyL_wxqk)=="function") 
			 win.AttachEvent("m_34","Clicked",self.CopyL_wxqk); 

		 if(typeof(self.Recover_wxqk)=="function") 
			 win.AttachEvent("m_29","Clicked",self.Recover_wxqk); 

		 if(typeof(self.Filter_bqqk)=="function") 
			 win.AttachEvent("m_35","Clicked",self.Filter_bqqk); 

		 if(typeof(self.Filter_Cancle_bqqk)=="function") 
			 win.AttachEvent("m_37","Clicked",self.Filter_Cancle_bqqk); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_41","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_bqqk)=="function") 
			 win.AttachEvent("m_43","Clicked",self.CopyCol_bqqk); 

		 if(typeof(self.CopySelect_bqqk)=="function") 
			 win.AttachEvent("m_44","Clicked",self.CopySelect_bqqk); 

		 if(typeof(self.CopyL_bqqk)=="function") 
			 win.AttachEvent("m_45","Clicked",self.CopyL_bqqk); 

		 if(typeof(self.Recover_bqqk)=="function") 
			 win.AttachEvent("m_40","Clicked",self.Recover_bqqk); 

		 if(typeof(self.Filter_wdqk)=="function") 
			 win.AttachEvent("m_46","Clicked",self.Filter_wdqk); 

		 if(typeof(self.Filter_Cancle_wdqk)=="function") 
			 win.AttachEvent("m_48","Clicked",self.Filter_Cancle_wdqk); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_52","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_wdqk)=="function") 
			 win.AttachEvent("m_54","Clicked",self.CopyCol_wdqk); 

		 if(typeof(self.CopySelect_wdqk)=="function") 
			 win.AttachEvent("m_55","Clicked",self.CopySelect_wdqk); 

		 if(typeof(self.CopyL_wdqk)=="function") 
			 win.AttachEvent("m_56","Clicked",self.CopyL_wdqk); 

		 if(typeof(self.Recover_wdqk)=="function") 
			 win.AttachEvent("m_51","Clicked",self.Recover_wdqk); 

		 if(typeof(self.Filter_gqdjyd)=="function") 
			 win.AttachEvent("m_57","Clicked",self.Filter_gqdjyd); 

		 if(typeof(self.Filter_Cancle_gqdjyd)=="function") 
			 win.AttachEvent("m_59","Clicked",self.Filter_Cancle_gqdjyd); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_63","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_gqdjyd)=="function") 
			 win.AttachEvent("m_65","Clicked",self.CopyCol_gqdjyd); 

		 if(typeof(self.CopySelect_gqdjyd)=="function") 
			 win.AttachEvent("m_66","Clicked",self.CopySelect_gqdjyd); 

		 if(typeof(self.CopyL_gqdjyd)=="function") 
			 win.AttachEvent("m_67","Clicked",self.CopyL_gqdjyd); 

		 if(typeof(self.Recover_gqdjyd)=="function") 
			 win.AttachEvent("m_62","Clicked",self.Recover_gqdjyd); 

		 if(typeof(self.Filter_kgsr)=="function") 
			 win.AttachEvent("m_68","Clicked",self.Filter_kgsr); 

		 if(typeof(self.Filter_Cancle_kgsr)=="function") 
			 win.AttachEvent("m_70","Clicked",self.Filter_Cancle_kgsr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_74","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_kgsr)=="function") 
			 win.AttachEvent("m_76","Clicked",self.CopyCol_kgsr); 

		 if(typeof(self.CopySelect_kgsr)=="function") 
			 win.AttachEvent("m_77","Clicked",self.CopySelect_kgsr); 

		 if(typeof(self.CopyL_kgsr)=="function") 
			 win.AttachEvent("m_78","Clicked",self.CopyL_kgsr); 

		 if(typeof(self.Recover_kgsr)=="function") 
			 win.AttachEvent("m_73","Clicked",self.Recover_kgsr); 

		 if(typeof(self.Filter_cgqsj)=="function") 
			 win.AttachEvent("m_79","Clicked",self.Filter_cgqsj); 

		 if(typeof(self.Filter_Cancle_cgqsj)=="function") 
			 win.AttachEvent("m_81","Clicked",self.Filter_Cancle_cgqsj); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_84","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_cgqsj)=="function") 
			 win.AttachEvent("m_86","Clicked",self.CopyCol_cgqsj); 

		 if(typeof(self.CopySelect_cgqsj)=="function") 
			 win.AttachEvent("m_87","Clicked",self.CopySelect_cgqsj); 

		 if(typeof(self.CopyL_cgqsj)=="function") 
			 win.AttachEvent("m_88","Clicked",self.CopyL_cgqsj); 

		 if(typeof(self.Recover_cgqsj)=="function") 
			 win.AttachEvent("m_89","Clicked",self.Recover_cgqsj); 

		 if(typeof(self.Filter_djydsr)=="function") 
			 win.AttachEvent("m_90","Clicked",self.Filter_djydsr); 

		 if(typeof(self.Filter_Cancle_djydsr)=="function") 
			 win.AttachEvent("m_92","Clicked",self.Filter_Cancle_djydsr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_95","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_djydsr)=="function") 
			 win.AttachEvent("m_97","Clicked",self.CopyCol_djydsr); 

		 if(typeof(self.CopySelect_djydsr)=="function") 
			 win.AttachEvent("m_98","Clicked",self.CopySelect_djydsr); 

		 if(typeof(self.CopyL_djydsr)=="function") 
			 win.AttachEvent("m_99","Clicked",self.CopyL_djydsr); 

		 if(typeof(self.Recover_djydsr)=="function") 
			 win.AttachEvent("m_100","Clicked",self.Recover_djydsr); 

		 if(typeof(self.Filter_tgjysr)=="function") 
			 win.AttachEvent("m_101","Clicked",self.Filter_tgjysr); 

		 if(typeof(self.Filter_Cancle_tgjysr)=="function") 
			 win.AttachEvent("m_103","Clicked",self.Filter_Cancle_tgjysr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_106","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_tgjysr)=="function") 
			 win.AttachEvent("m_108","Clicked",self.CopyCol_tgjysr); 

		 if(typeof(self.CopySelect_tgjysr)=="function") 
			 win.AttachEvent("m_109","Clicked",self.CopySelect_tgjysr); 

		 if(typeof(self.CopyL_tgjysr)=="function") 
			 win.AttachEvent("m_110","Clicked",self.CopyL_tgjysr); 

		 if(typeof(self.Recover_tgjysr)=="function") 
			 win.AttachEvent("m_111","Clicked",self.Recover_tgjysr); 

		 if(typeof(self.Filter_qdlr)=="function") 
			 win.AttachEvent("m_112","Clicked",self.Filter_qdlr); 

		 if(typeof(self.Filter_Cancle_qdlr)=="function") 
			 win.AttachEvent("m_114","Clicked",self.Filter_Cancle_qdlr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_117","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_qdlr)=="function") 
			 win.AttachEvent("m_119","Clicked",self.CopyCol_qdlr); 

		 if(typeof(self.CopySelect_qdlr)=="function") 
			 win.AttachEvent("m_120","Clicked",self.CopySelect_qdlr); 

		 if(typeof(self.CopyL_qdlr)=="function") 
			 win.AttachEvent("m_121","Clicked",self.CopyL_qdlr); 

		 if(typeof(self.Recover_qdlr)=="function") 
			 win.AttachEvent("m_122","Clicked",self.Recover_qdlr); 

		 if(typeof(self.Filter_kgsjsl)=="function") 
			 win.AttachEvent("m_123","Clicked",self.Filter_kgsjsl); 

		 if(typeof(self.Filter_Cancle_kgsjsl)=="function") 
			 win.AttachEvent("m_125","Clicked",self.Filter_Cancle_kgsjsl); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_128","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_kgsjsl)=="function") 
			 win.AttachEvent("m_130","Clicked",self.CopyCol_kgsjsl); 

		 if(typeof(self.CopySelect_kgsjsl)=="function") 
			 win.AttachEvent("m_131","Clicked",self.CopySelect_kgsjsl); 

		 if(typeof(self.CopyL_kgsjsl)=="function") 
			 win.AttachEvent("m_132","Clicked",self.CopyL_kgsjsl); 

		 if(typeof(self.Recover_kgsjsl)=="function") 
			 win.AttachEvent("m_133","Clicked",self.Recover_kgsjsl); 

		 if(typeof(self.Filter_kghlr)=="function") 
			 win.AttachEvent("m_134","Clicked",self.Filter_kghlr); 

		 if(typeof(self.Filter_Cancle_kghlr)=="function") 
			 win.AttachEvent("m_136","Clicked",self.Filter_Cancle_kghlr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_139","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_kghlr)=="function") 
			 win.AttachEvent("m_141","Clicked",self.CopyCol_kghlr); 

		 if(typeof(self.CopySelect_kghlr)=="function") 
			 win.AttachEvent("m_142","Clicked",self.CopySelect_kghlr); 

		 if(typeof(self.CopyL_kghlr)=="function") 
			 win.AttachEvent("m_143","Clicked",self.CopyL_kghlr); 

		 if(typeof(self.Recover_kghlr)=="function") 
			 win.AttachEvent("m_144","Clicked",self.Recover_kghlr); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_fxsc.Detach(); dw_fxsc=null; 
		 mle_6.Detach(); mle_6=null; 
		 ddlb_1.Detach(); ddlb_1=null; 
		 ddlb_ycclzt_fxsc.Detach(); ddlb_ycclzt_fxsc=null; 
		 dw_thsc.Detach(); dw_thsc=null; 
		 mle_1.Detach(); mle_1=null; 
		 tb_4.Detach(); tb_4=null; 
		 ddlb_ycclzt_thsc.Detach(); ddlb_ycclzt_thsc=null; 
		 dw_wxqk.Detach(); dw_wxqk=null; 
		 dw_bqqk.Detach(); dw_bqqk=null; 
		 tb_2.Detach(); tb_2=null; 
		 ddlb_jydzt_bqqk.Detach(); ddlb_jydzt_bqqk=null; 
		 ddlb_jyd_bqqk.Detach(); ddlb_jyd_bqqk=null; 
		 dw_wdqk.Detach(); dw_wdqk=null; 
		 tb_7.Detach(); tb_7=null; 
		 ddlb_wd.Detach(); ddlb_wd=null; 
		 ddlb_jydzt_wdqk.Detach(); ddlb_jydzt_wdqk=null; 
		 ddlb_jyd_wdqk.Detach(); ddlb_jyd_wdqk=null; 
		 dw_gqdjyd.Detach(); dw_gqdjyd=null; 
		 tb_8.Detach(); tb_8=null; 
		 ddlb_ycclzt_gqdjyd.Detach(); ddlb_ycclzt_gqdjyd=null; 
		 ddlb_jydzt_gqjyd.Detach(); ddlb_jydzt_gqjyd=null; 
		 ddlb_jyd_gqjyd.Detach(); ddlb_jyd_gqjyd=null; 
		 dw_fyqk.Detach(); dw_fyqk=null; 
		 tb_3.Detach(); tb_3=null; 
		 ddlb_ycclzt_fyqk.Detach(); ddlb_ycclzt_fyqk=null; 
		 dw_list_qtwt.Detach(); dw_list_qtwt=null; 
		 tb_5.Detach(); tb_5=null; 
		 tb_1.Detach(); tb_1=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_ywbh.Detach(); sle_ywbh=null; 
		 ddlb_jdr.Detach(); ddlb_jdr=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ContextMenuStrip3.Detach(); ContextMenuStrip3=null; 
		 ContextMenuStrip4.Detach(); ContextMenuStrip4=null; 
		 ContextMenuStrip5.Detach(); ContextMenuStrip5=null; 
		 ContextMenuStrip6.Detach(); ContextMenuStrip6=null; 
		 ContextMenuStrip7.Detach(); ContextMenuStrip7=null; 
		 ContextMenuStrip8.Detach(); ContextMenuStrip8=null; 
		 ContextMenuStrip9.Detach(); ContextMenuStrip9=null; 
		 ContextMenuStrip10.Detach(); ContextMenuStrip10=null; 
		 ContextMenuStrip11.Detach(); ContextMenuStrip11=null; 
		 ContextMenuStrip12.Detach(); ContextMenuStrip12=null; 
		 ContextMenuStrip13.Detach(); ContextMenuStrip13=null; 
		 ContextMenuStrip14.Detach(); ContextMenuStrip14=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_2.Detach(); ds_2=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
	


    //#region 变量定义
    var editMode = "";
    var iw_Bgdj_Slwts = null;
    var iw_Hddz_Select = null;
    var dwc = new DataWindowChild();
    var dwoname = "";

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
        var jdr = ddlb_jdr.GetText();

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

        //        dw_fxsr.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        dw_fxsc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);
        dw_thsc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);
        dw_wxqk.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);
        dw_bqqk.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), ddlb_jydzt_bqqk.GetText(), ddlb_jyd_bqqk.GetText(), jdr);
        dw_wdqk.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), ddlb_jydzt_wdqk.GetText(), ddlb_jyd_wdqk.GetText(), ddlb_wd.GetText(), jdr);
        dw_gqdjyd.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), ddlb_jydzt_gqjyd.GetText(), ddlb_jyd_gqjyd.GetText(), jdr);
        dw_fyqk.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);
        dw_list_qtwt.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);

        //        dw_kgsr.Retrieve(rqlx, beginDate.getVarDate(), endDate.getVarDate());
        //        dw_cgqsr.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
        //        dw_djydsr.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
        //        dw_tgjydsr.Retrieve(rqlx, beginDate.getVarDate(), endDate.getVarDate());
        //        dw_qdsr.Retrieve(rqlx, beginDate.getVarDate(), endDate.getVarDate());
        //        dw_kgsjsr.Retrieve(rqlx, beginDate.getVarDate(), endDate.getVarDate());
        //        dw_kghsr.Retrieve(rqlx, beginDate.getVarDate(), endDate.getVarDate());

        self.SelectionChanged_fxsc();

    }
    //#endregion

    var iw_Hddz_Ywkh_BeiZhu = null;
    this.BeiZhu = function () {
        if (lastdw.GetName() == "dw_fxsc") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_fxsc.GetRow();
            var ywbh = dw_fxsc.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = "";
            var mkm = "dw_fxsc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_fxsc.SetFocus();
        }
        if (lastdw.GetName() == "dw_thsc") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_thsc.GetRow();
            var ywbh = dw_thsc.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = dw_thsc.GetItemString(row, "cdphbm");
            var mkm = "dw_thsc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_thsc.SetFocus();
        }
        if (lastdw.GetName() == "dw_wxqk") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_wxqk.GetRow();
            var ywbh = dw_wxqk.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = dw_wxqk.GetItemString(row, "cdphbm");
            var mkm = "dw_wxqk";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_wxqk.SetFocus();
        }
        if (lastdw.GetName() == "dw_bqqk") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_bqqk.GetRow();
            var ywbh = dw_bqqk2.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = dw_bqqk.GetItemString(row, "cdphbm");
            var mkm = "dw_bqqk";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_bqqk.SetFocus();
        }
        if (lastdw.GetName() == "dw_wdqk") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_wdqk.GetRow();
            var ywbh = dw_wdqk.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = dw_wdqk.GetItemString(row, "cdphbm");
            var mkm = "dw_wdqk";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_wdqk.SetFocus();
        }
        if (lastdw.GetName() == "dw_gqdjyd") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_gqdjyd.GetRow();
            var ywbh = dw_gqdjyd.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = dw_gqdjyd.GetItemString(row, "cdphbm");
            var mkm = "dw_gqdjyd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_gqdjyd.SetFocus();
        }
        if (lastdw.GetName() == "dw_fyqk") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_fyqk.GetRow();
            var ywbh = "";
            var cxh = "";
            var jzxh = "";
            var cdphbm = dw_fyqk.GetItemString(row, "cdphbm");
            var mkm = "dw_fyqk";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_fyqk.SetFocus();
        }
        if (lastdw.GetName() == "dw_list_qtwt") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_qtwt.GetRow();
            var ywbh = dw_qtwt.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = "";
            var mkm = "dw_list_qtwt";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_qtwt.SetFocus();
        }
    }

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_fxsc_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_thsc_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_wxqk_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_bqqk_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_wdqk_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_gqdjyd_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_fyqk_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_qtwt_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        fzjs_row = Row;
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 点击开始
    this.dw_LButtonDown = function (flags, xPos, yPos) {
        arr.splice(0, arr.length);
        begin = "Y"
    }
    //#endregion

    //#region 鼠标移动
    this.dw_DwnMouseMove = function (xPos, yPos, row, dwoName) {
        if (begin == "Y") {
            var str = arr.join(" ");
            if (str.indexOf(dwoName) < 0 && dwoName.indexOf("line") < 0 && dwoName.indexOf("reportsrv") < 0 && dwoName.indexOf("datawindow") < 0) {
                arr.push(dwoName);
            }

        }
    }
    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        if (self.CloseQuery() == 1)
            return;
        setTimeout("window.close();", 100);
    }
    //#endregion

    this.InsertRow_qtwt = function () {
        dw_list_qtwt.InsertRow(0);
    }
    this.DeleteRow_qtwt = function () {
        dw_list_qtwt.DeleteRow(0);
    }

    this.CopyRow_qtwt = function () {
        var row = dw_list_qtwt.GetRow();
        if (row <= 0)
            return;

        dw_list_qtwt.RowsCopy(row, row, DWBUFFER.Primary, dw_list_qtwt, row + 1, DWBUFFER.Primary)
        dw_list_qtwt.ScrollToRow(row + 1);
    }

    this.Save_qtwt = function () {

        if (dw_list_qtwt.AcceptText() != 1)
            return;


        if ((dw_list_qtwt.ModifiedCount() + dw_list_qtwt.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }



        var dw_d_data = dw_list_qtwt.GetChanges();
        if (dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListkyycgzqtwtSave", "dw_Master=" + dw_d_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            dw_list_qtwt.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list_qtwt.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list_qtwt.SetFocus();
        }
    }

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
        if (dw_fxsr.RowCount() <= 0)
            return;
        var ywbh = dw_fxsr.GetItemString(dw_fxsr.GetRow(), 'ywbh')    
        var ywy = ""// dw_fxsr.GetItemString(dw_fxsr.GetRow(), "ywy");
        var zbr = dw_fxsr.GetItemString(dw_fxsr.GetRow(), "zbr");
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
    this.dw_fxsr_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0 && dwoName == "ywbh") {
            self.OpenWindow();
        }

    }
    //#endregion

    //#region 双击
    this.dw_qtwt_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0 && dwoName == "ywbh" || dwoName=="ztdh") {
            if (iw_Hddz_Select == null)
                iw_Hddz_Select = new W_Hddz_Select();
            iw_Hddz_Select.SetDataWindow(dw_list_qtwt);
            iw_Hddz_Select.SetRow(Row);
            iw_Hddz_Select.SetData("qtwt");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Select", iw_Hddz_Select);
            dw_list_qtwt.SetFocus();
        }
    }
    //#endregion
       
    //#region 打印
    this.Print = function () {
        var row = dw_fxsr.GetRow();
        if (row <= 0)
            return;
        dw_print.SetDataObject("dw_hddz_print");
        dw_print.Retrieve(dw_fxsr.GetItemString(dw_fxsr.GetRow(), "ywbh"));
        dw_print.PrintPreview();
    }
    //#endregion

    //#region 过滤
    this.sle_EditChanged = function (text) {

        dw_fxsr.SetRedraw(false);
        if (text == "")
            dw_fxsr.SetFilter("");
        else
            dw_fxsr.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_fxsr.Filter();
        dw_fxsr.Sort();
        dw_fxsr.SetRedraw(true);

        dw_fxsc.SetRedraw(false);
        if (text == "")
            dw_fxsc.SetFilter("");
        else
            dw_fxsc.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_fxsc.Filter();
        dw_fxsc.Sort();
        dw_fxsc.SetRedraw(true);

        dw_thsc.SetRedraw(false);
        if (text == "")
            dw_thsc.SetFilter("");
        else
            dw_thsc.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_thsc.Filter();
        dw_thsc.Sort();
        dw_thsc.SetRedraw(true);

        dw_wxqk.SetRedraw(false);
        if (text == "")
            dw_wxqk.SetFilter("");
        else
            dw_wxqk.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_wxqk.Filter();
        dw_wxqk.Sort();
        dw_wxqk.SetRedraw(true);

        dw_bqqk.SetRedraw(false);
        if (text == "")
            dw_bqqk.SetFilter("");
        else
            dw_bqqk.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_bqqk.Filter();
        dw_bqqk.Sort();
        dw_bqqk.SetRedraw(true);

        dw_wdqk.SetRedraw(false);
        if (text == "")
            dw_wdqk.SetFilter("");
        else
            dw_wdqk.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_wdqk.Filter();
        dw_wdqk.Sort();
        dw_wdqk.SetRedraw(true);

        dw_gqdjyd.SetRedraw(false);
        if (text == "")
            dw_gqdjyd.SetFilter("");
        else
            dw_gqdjyd.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_gqdjyd.Filter();
        dw_gqdjyd.Sort();
        dw_gqdjyd.SetRedraw(true);

        dw_list_qtwt.SetRedraw(false);
        if (text == "")
            dw_list_qtwt.SetFilter("");
        else
            dw_list_qtwt.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_list_qtwt.Filter();
        dw_list_qtwt.Sort();
        dw_list_qtwt.SetRedraw(true);


        dw_kgsr.SetRedraw(false);
        if (text == "")
            dw_kgsr.SetFilter("");
        else
            dw_kgsr.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_kgsr.Filter();
        dw_kgsr.Sort();
        dw_kgsr.SetRedraw(true);

        dw_cgqsr.SetRedraw(false);
        if (text == "")
            dw_cgqsr.SetFilter("");
        else
            dw_cgqsr.SetFilter("( Upper(hth) like Upper('%" + text + "%'))");
        dw_cgqsr.Filter();
        dw_cgqsr.Sort();
        dw_cgqsr.SetRedraw(true);

        dw_djydsr.SetRedraw(false);
        if (text == "")
            dw_djydsr.SetFilter("");
        else
            dw_djydsr.SetFilter("( Upper(hth) like Upper('%" + text + "%'))");
        dw_djydsr.Filter();
        dw_djydsr.Sort();
        dw_djydsr.SetRedraw(true);

        dw_tgjydsr.SetRedraw(false);
        if (text == "")
            dw_tgjydsr.SetFilter("");
        else
            dw_tgjydsr.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_tgjydsr.Filter();
        dw_tgjydsr.Sort();
        dw_tgjydsr.SetRedraw(true);

        dw_qdsr.SetRedraw(false);
        if (text == "")
            dw_qdsr.SetFilter("");
        else
            dw_qdsr.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))  or ( Upper(hth) like Upper('%" + text + "%'))");
        dw_qdsr.Filter();
        dw_qdsr.Sort();
        dw_qdsr.SetRedraw(true);

        dw_kgsjsr.SetRedraw(false);
        if (text == "")
            dw_kgsjsr.SetFilter("");
        else
            dw_kgsjsr.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))   or ( Upper(hth) like Upper('%" + text + "%'))");
        dw_kgsjsr.Filter();
        dw_kgsjsr.Sort();
        dw_kgsjsr.SetRedraw(true);

        dw_kghsr.SetRedraw(false);
        if (text == "")
            dw_kghsr.SetFilter("");
        else
            dw_kghsr.SetFilter("( Upper(ywbh) like Upper('%" + text + "%')) or ( Upper(hth) like Upper('%" + text + "%'))");
        dw_kghsr.Filter();
        dw_kghsr.Sort();
        dw_kghsr.SetRedraw(true);

    }

    
    //#endregion
  

    //#region 过滤处理状态
    this.SelectionChanged_fxsc = function (text) {
        var ycclzt_fxsc = ddlb_ycclzt_fxsc.GetText();
        var ls_filter = "";
        if (ycclzt_fxsc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_fxsc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_fxsc.SetRedraw(false);
        dw_fxsc.SetFilter(ls_filter);
        dw_fxsc.Filter();
        dw_fxsc.Sort();
        dw_fxsc.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_thsc = function (text) {
        var ycclzt_thsc = ddlb_ycclzt_thsc.GetText();
        var ls_filter = "";
        if (ycclzt_thsc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_thsc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        };

        dw_thsc.SetRedraw(false);
        dw_thsc.SetFilter(ls_filter);
        dw_thsc.Filter();
        dw_thsc.Sort();
        dw_thsc.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_jydzt_bqqk = function (text) {
        var jydzt_bqqk = ddlb_jydzt_bqqk.GetText();
        var ls_filter = "";
        if (jydzt_bqqk == "未到检疫点") {
            ls_filter = "(isnull(kycd_djydsj,'') = '')";
        } else if (jydzt_bqqk == "已到检疫点") {
            ls_filter = "(isnull(kycd_djydsj,'') != '')";
        };

        dw_bqqk.SetRedraw(false);
        dw_bqqk.SetFilter(ls_filter);
        dw_bqqk.Filter();
        dw_bqqk.Sort();
        dw_bqqk.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_jyd_bqqk = function (text) {
        var jyd_bqqk = ddlb_jyd_bqqk.GetText();
        var ls_filter = "";
        if (jyd_bqqk == "辉展物流") {
            ls_filter = "(isnull(jzxxx_jyd_jc,'') = '辉展物流')";
        } else if (jyd_bqqk == "非辉展物流") {
            ls_filter = "(isnull(jzxxx_jyd_jc,'') != '辉展物流')";
        };

        dw_bqqk.SetRedraw(false);
        dw_bqqk.SetFilter(ls_filter);
        dw_bqqk.Filter();
        dw_bqqk.Sort();
        dw_bqqk.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_jydzt_wdqk = function (text) {
        var jydzt_wdqk = ddlb_jydzt_wdqk.GetText();
        var ls_filter = "";
        if (jydzt_wdqk == "未到检疫点") {
            ls_filter = "(isnull(kycd_djydsj,'') = '')";
        } else if (jydzt_wdqk == "已到检疫点") {
            ls_filter = "(isnull(kycd_djydsj,'') != '')";
        };

        dw_wdqk.SetRedraw(false);
        dw_wdqk.SetFilter(ls_filter);
        dw_wdqk.Filter();
        dw_wdqk.Sort();
        dw_wdqk.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_jyd_wdqk = function (text) {
        var jyd_wdqk = ddlb_jyd_wdqk.GetText();
        var ls_filter = "";
        if (jyd_wdqk == "辉展物流") {
            ls_filter = "(isnull(jzxxx_jyd_jc,'') = '辉展物流')";
        } else if (jyd_wdqk == "非辉展物流") {
            ls_filter = "(isnull(jzxxx_jyd_jc,'') != '辉展物流')";
        };

        dw_wdqk.SetRedraw(false);
        dw_wdqk.SetFilter(ls_filter);
        dw_wdqk.Filter();
        dw_wdqk.Sort();
        dw_wdqk.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_jydzt_gqjyd = function (text) {
        var jydzt_gqjyd = ddlb_jydzt_gqjyd.GetText();
        var ls_filter = "";
        if (jydzt_gqjyd == "未到检疫点") {
            ls_filter = "(isnull(kycd_djydsj,'') = '')";
        } else if (jydzt_gqjyd == "已到检疫点") {
            ls_filter = "(isnull(kycd_djydsj,'') != '')";
        };

        dw_gqdjyd.SetRedraw(false);
        dw_gqdjyd.SetFilter(ls_filter);
        dw_gqdjyd.Filter();
        dw_gqdjyd.Sort();
        dw_gqdjyd.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_jyd_gqjyd = function (text) {
        var jyd_gqjyd = ddlb_jyd_gqjyd.GetText();
        var ls_filter = "";
        if (jyd_gqjyd == "辉展物流") {
            ls_filter = "(isnull(jzxxx_jyd_jc,'') = '辉展物流')";
        } else if (jyd_gqjyd == "非辉展物流") {
            ls_filter = "(isnull(jzxxx_jyd_jc,'') != '辉展物流')";
        };

        dw_gqdjyd.SetRedraw(false);
        dw_gqdjyd.SetFilter(ls_filter);
        dw_gqdjyd.Filter();
        dw_gqdjyd.Sort();
        dw_gqdjyd.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_wdqk = function (text) {
        var wdqk = ddlb_wd.GetText();
        requestor.MessageBox("", wdqk);
        var ls_filter = "";
        if (wdqk == "无法测温") {
            ls_filter = "(isnull(kycd_lcqr,'') = 'Y')";
        } else if (wdqk == "没有测温") {
            ls_filter = "((isnull(kycd_lcqr,'') != 'Y') and (isnull(kycd_lcwd,'')=''))";
        } else if (wdqk == "温度异常") {
            ls_filter = "(isnull(kycd_lcwd,'') >10)";
        };
        requestor.MessageBox("", ls_filter);
        dw_wdqk.SetRedraw(false);
        dw_wdqk.SetFilter(ls_filter);
        dw_wdqk.Filter();
        dw_wdqk.Sort();
        dw_wdqk.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.OnClinet_Clicked_Wdqk = function (text) {
        var wdwqr = cbx_wdwqr.GetChecked();
        var wdyc = cbx_wdyc.GetChecked();
        var ls_filter = "";
        if (wdwqr == true) {
            ls_filter = "(kycd_lcqr = 'N' or kycd_lcqr = null)";
        }
        if (wdyc == true) {
            if (ls_filter == "") {
                ls_filter = "if(isnull(kycd_lcwd),0,kycd_lcwd) > 10";
            } else {
                ls_filter = ls_filter + " and if(isnull(kycd_lcwd),0,kycd_lcwd) > 10";
            }
        }
        dw_wdqk.SetRedraw(false);
        dw_wdqk.SetFilter(ls_filter);
        dw_wdqk.Filter();
        dw_wdqk.Sort();
        dw_wdqk.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_gqdjyd = function (text) {
        var ycclzt_gqdjyd = ddlb_ycclzt_gqdjyd.GetText();
        var ls_filter = "";
        if (ycclzt_gqdjyd == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_gqdjyd == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        };

        dw_gqdjyd.SetRedraw(false);
        dw_gqdjyd.SetFilter(ls_filter);
        dw_gqdjyd.Filter();
        dw_gqdjyd.Sort();
        dw_gqdjyd.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    
    this.SelectionChanged_fyqk = function (text) {
        var ycclzt_fyqk = ddlb_ycclzt_fyqk.GetText();
         var ls_filter = "";
        if (ycclzt_fyqk == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_fyqk == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        };
 
        dw_fyqk.SetRedraw(false);
        dw_fyqk.SetFilter(ls_filter);
        dw_fyqk.Filter();
        dw_fyqk.Sort();
        dw_fyqk.SetRedraw(true);
    }
    //#endregion 

    //#region 恢复默认列
    this.Recover_fxsr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_fxsr");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_fxsc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_fxsc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_tdsc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_tdsc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_wxqk = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_wxqk");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_bqqk = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_bqqk");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_wdqk = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_wdqk");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_cgqsj = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_cgqsj");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_djydsr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_djydsr");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_gqdjyd = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_gqdjyd");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_kghlr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_kghlr");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_kgsjsl = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_kgsjsl");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_qdlr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_qdlr");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_tgjysr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_tgjysr");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_fyqk = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_fyqk");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_kgsr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Kyycgz", "dw_hddz_list_kyycgz_kgsr");
        self.Retrieve();
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_fxsr = function () {
        var copytext = "";
        var row = dw_fxsr.GetRow();
        if (row <= 0)
            return;
        colType = dw_fxsr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_fxsr.GetItemString(dw_fxsr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_fxsr.GetItemDate(dw_fxsr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_fxsr.GetItemNumber(dw_fxsr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_fxsc = function () {
        var copytext = "";
        var row = dw_fxsc.GetRow();
        if (row <= 0)
            return;
        colType = dw_fxsc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_fxsc.GetItemString(dw_fxsc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_fxsc.GetItemDate(dw_fxsc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_fxsc.GetItemNumber(dw_fxsc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_thsc = function () {
        var copytext = "";
        var row = dw_thsc.GetRow();
        if (row <= 0)
            return;
        colType = dw_thsc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_thsc.GetItemString(dw_thsc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_thsc.GetItemDate(dw_thsc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_thsc.GetItemNumber(dw_thsc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_wxqk = function () {
        var copytext = "";
        var row = dw_wxqk.GetRow();
        if (row <= 0)
            return;
        colType = dw_wxqk.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_wxqk.GetItemString(dw_wxqk.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_wxqk.GetItemDate(dw_wxqk.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_wxqk.GetItemNumber(dw_wxqk.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_bqqk = function () {
        var copytext = "";
        var row = dw_bqqk.GetRow();
        if (row <= 0)
            return;
        colType = dw_bqqk.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_bqqk.GetItemString(dw_bqqk.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_bqqk.GetItemDate(dw_bqqk.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_bqqk.GetItemNumber(dw_bqqk.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_wdqk = function () {
        var copytext = "";
        var row = dw_wdqk.GetRow();
        if (row <= 0)
            return;
        colType = dw_wdqk.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_wdqk.GetItemString(dw_wdqk.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_wdqk.GetItemDate(dw_wdqk.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_wdqk.GetItemNumber(dw_wdqk.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_gqdjyd = function () {
        var copytext = "";
        var row = dw_gqdjyd.GetRow();
        if (row <= 0)
            return;
        colType = dw_gqdjyd.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_gqdjyd.GetItemString(dw_gqdjyd.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_gqdjyd.GetItemDate(dw_gqdjyd.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_gqdjyd.GetItemNumber(dw_gqdjyd.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_kghlr = function () {
        var copytext = "";
        var row = dw_kghlr.GetRow();
        if (row <= 0)
            return;
        colType = dw_kghlr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_kghlr.GetItemString(dw_kghlr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_kghlr.GetItemDate(dw_kghlr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_kghlr.GetItemNumber(dw_kghlr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_kgsjsl = function () {
        var copytext = "";
        var row = dw_kgsjsl.GetRow();
        if (row <= 0)
            return;
        colType = dw_kgsjsl.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_kgsjsl.GetItemString(dw_kgsjsl.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_kgsjsl.GetItemDate(dw_kgsjsl.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_kgsjsl.GetItemNumber(dw_kgsjsl.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_qdlr = function () {
        var copytext = "";
        var row = dw_qdlr.GetRow();
        if (row <= 0)
            return;
        colType = dw_qdlr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_qdlr.GetItemString(dw_qdlr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_qdlr.GetItemDate(dw_qdlr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_qdlr.GetItemNumber(dw_qdlr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_tgjysr = function () {
        var copytext = "";
        var row = dw_tgjysr.GetRow();
        if (row <= 0)
            return;
        colType = dw_tgjysr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_tgjysr.GetItemString(dw_tgjysr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_tgjysr.GetItemDate(dw_tgjysr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_tgjysr.GetItemNumber(dw_tgjysr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_djydsr = function () {
        var copytext = "";
        var row = dw_djydsr.GetRow();
        if (row <= 0)
            return;
        colType = dw_djydsr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_djydsr.GetItemString(dw_djydsr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_djydsr.GetItemDate(dw_djydsr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_djydsr.GetItemNumber(dw_djydsr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_cgqsj = function () {
        var copytext = "";
        var row = dw_cgqsj.GetRow();
        if (row <= 0)
            return;
        colType = dw_cgqsj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_cgqsj.GetItemString(dw_cgqsj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_cgqsj.GetItemDate(dw_cgqsj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_cgqsj.GetItemNumber(dw_cgqsj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_fyqk = function () {
        var copytext = "";
        var row = dw_fyqk.GetRow();
        if (row <= 0)
            return;
        colType = dw_fyqk.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_fyqk.GetItemString(dw_fyqk.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_fyqk.GetItemDate(dw_fyqk.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_fyqk.GetItemNumber(dw_fyqk.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_kgsr = function () {
        var copytext = "";
        var row = dw_kgsr.GetRow();
        if (row <= 0)
            return;
        colType = dw_kgsr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_kgsr.GetItemString(dw_kgsr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_kgsr.GetItemDate(dw_kgsr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_kgsr.GetItemNumber(dw_kgsr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (dw_fxsr.AcceptText() != 1)
            return;

        if ((dw_fxsr.ModifiedCount() + dw_fxsr.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        

        var dw_d_data = dw_fxsr.GetChanges();
        if (dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListKhkygzSave", "dw_fxsr=" + dw_d_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_fxsr.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_fxsr.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_fxsr.SetFocus();
        }
    }
    //#endregion  

    //#region CloseQuery
    this.CloseQuery = function () {

        dw_list_qtwt.AcceptText();

        if ((dw_list_qtwt.ModifiedCount() + dw_list_qtwt.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion

    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\客户空运跟踪.txt')
    }
    //#endregion

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy_Fxsc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_fxsc.GetRow(); 
        var ywbh = dw_fxsc.GetItemString(row, "ywbh")
        iw_Hddz_Ycyy.SetDataWindow(dw_fxsr);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("0301");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 单击明细单编号
    this.OpenYcyy_Thsc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_thsc.GetRow();
        var ywbh = dw_thsc.GetItemString(row, "ywbh_jsl")

        iw_Hddz_Ycyy.SetDataWindow(dw_thsc);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("0302");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion


    //#region 单击明细单编号
    this.OpenYcyy_Gqdjyd = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_gqdjyd.GetRow();
        var ywbh = dw_gqdjyd.GetItemString(row, "ywbh_jsl")

        iw_Hddz_Ycyy.SetDataWindow(dw_gqdjyd);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("0303");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 单击明细单编号
    this.OpenYcyy_Fyqk = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_fyqk.GetRow();
        var ywbh = dw_fyqk.GetItemString(row, "cdphbm")

        iw_Hddz_Ycyy.SetDataWindow(dw_fyqk);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("0304");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 查验放行批量处理
    this.Cyfxplcl = function () {
        for (row = dw_fxsc.RowCount(); row > 0; row--) {
            var hgfxfs = dw_fxsc.GetItemString(row, "hgfxfs");
            if (hgfxfs == "查验放行") {
                var ywbh = dw_fxsc.GetItemString(row, "ywbh");
                var userid = requestor.GetParm("userid");
                QsWebSoft.PubMethod.Cyfxplsc(ywbh, userid).value; 
       
            }
        }

    
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var rqlx = ddlb_rqlx.GetText();

        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        dw_fxsc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);

        requestor.MessageBox("提示", "处理完成！")

    }
    //#endregion

    //#region 单击明细单编号
    this.dw_fxsr_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_fxsc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_thsc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_wxqk_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_bqqk_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_wdqk_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_gqdjyd_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_fyqk_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion
    
    //#region 单击明细单编号
    this.dw_qtwt_Clicked = function (xPos, yPos, Row, dwoName, Data) {
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
    this.CopyAll_fxsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_fxsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_fxsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_fxsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_fxsr.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_fxsc = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxsc.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_fxsc.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_fxsc.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_fxsc.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_fxsc.GetItemNumber(row, cloname);
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


    //#region 复制字段内容
    this.CopyAll_thsc = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_thsc.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_thsc.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_thsc.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_thsc.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_thsc.GetItemNumber(row, cloname);
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


    //#region 复制字段内容
    this.CopyAll_wxqk = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_wxqk.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_wxqk.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_wxqk.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_wxqk.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_wxqk.GetItemNumber(row, cloname);
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


    //#region 复制字段内容
    this.CopyAll_bqqk = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_bqqk.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_bqqk.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_bqqk.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_bqqk.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_bqqk.GetItemNumber(row, cloname);
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


    //#region 复制字段内容
    this.CopyAll_wdqk = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_wdqk.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_wdqk.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_wdqk.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_wdqk.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_wdqk.GetItemNumber(row, cloname);
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


    //#region 复制字段内容
    this.CopyAll_gqdjyd = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_gqdjyd.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_gqdjyd.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_gqdjyd.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_gqdjyd.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_gqdjyd.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_fyqk = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_fyqk.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_fyqk.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_fyqk.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_fyqk.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_fyqk.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_qtwt = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_list_qtwt.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= qtwt_row; row++) {
            colType = dw_list_qtwt.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_list_qtwt.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_list_qtwt.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_list_qtwt.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_kgsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_kgsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_kgsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_kgsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_kgsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_kgsr.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_cgqsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_cgqsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_cgqsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_cgqsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_cgqsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_cgqsr.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_djydsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_djydsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_djydsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_djydsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_djydsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_djydsr.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_tgjydsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_tgjydsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_tgjydsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_tgjydsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_tgjydsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_tgjydsr.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_qdsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_qdsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_qdsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_qdsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_qdsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_qdsr.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_kgsjsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_kgsjsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_kgsjsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_kgsjsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_kgsjsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_kgsjsr.GetItemNumber(row, cloname);
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

    //#region 复制字段内容
    this.CopyAll_kghsr = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_kghsr.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_kghsr.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_kghsr.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_kghsr.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_kghsr.GetItemNumber(row, cloname);
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
    this.dw_LButtonDown = function (flags, xPos, yPos) {
        arr.splice(0, arr.length);
        begin = "Y"
    }
    //#endregion

    //#region 选择复制
    this.CopySelect_fxsr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxsr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fxsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fxsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fxsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fxsr.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_fxsc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxsc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fxsc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fxsc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fxsc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fxsc.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_thsc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_thsc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_thsc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_thsc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_thsc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_thsc.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_wxqk = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_wxqk.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_wxqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fxsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_wxqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_wxqk.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_bqqk = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_bqqk.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_bqqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_bqqk.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_bqqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_bqqk.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_wdqk = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_wdqk.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_wdqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_wdqk.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_wdqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_wdqk.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_gqdjyd = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_gqdjyd.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_gqdjyd.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_gqdjyd.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_gqdjyd.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_gqdjyd.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_kghlr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_kghlr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_kghlr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_kghlr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_kghlr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_kghlr.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_kgsjsl = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_kgsjsl.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_kgsjsl.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_kgsjsl.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_kgsjsl.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_kgsjsl.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_qdlr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_qdlr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_qdlr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_qdlr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_qdlr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_qdlr.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_tgjysr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_tgjysr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_tgjysr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_tgjysr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_tgjysr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_tgjysr.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_djydsr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_djydsr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_djydsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_djydsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_djydsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_djydsr.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_cgqsj = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_cgqsj.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_cgqsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_cgqsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_cgqsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_cgqsj.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_fyqk = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fyqk.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fyqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fyqk.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fyqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fyqk.GetItemNumber(row, arr[row1]);
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

    //#region 选择复制
    this.CopySelect_kgsr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_kgsr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_kgsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_kgsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_kgsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_kgsr.GetItemNumber(row, arr[row1]);
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
    this.dw_DwnMouseMove = function (xPos, yPos, row, dwoName) {
        if (begin == "Y") {
            var str = arr.join(" ");
            if (str.indexOf(dwoName) < 0 && dwoName.indexOf("line") < 0 && dwoName.indexOf("reportsrv") < 0 && dwoName.indexOf("datawindow") < 0) {
                arr.push(dwoName);
            }

        }
    }
    //#endregion

    //#region 整列复制
    this.CopyL_fxsr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxsr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_fxsr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fxsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fxsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fxsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fxsr.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_fxsc = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxsc.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_fxsc.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fxsc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fxsc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fxsc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fxsc.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_thsc = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_thsc.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_thsc.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_thsc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_thsc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_thsc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_thsc.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_wxqk = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_wxqk.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_wxqk.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_wxqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_wxqk.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_wxqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_wxqk.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_bqqk = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_bqqk.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_bqqk.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_bqqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_bqqk.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_bqqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_bqqk.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_wdqk = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_wdqk.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_wdqk.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_wdqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_wdqk.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_wdqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_wdqk.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_gqdjyd = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_gqdjyd.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_gqdjyd.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_gqdjyd.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_gqdjyd.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_gqdjyd.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_gqdjyd.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_kghlr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_kghlr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_kghlr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_kghlr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_kghlr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_kghlr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_kghlr.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_kgsjsl = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_kgsjsl.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_kgsjsl.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_kgsjsl.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_kgsjsl.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_kgsjsl.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_kgsjsl.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_qdlr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_qdlr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_qdlr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_qdlr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_qdlr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_qdlr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_qdlr.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_tgjysr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_tgjysr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_tgjysr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_tgjysr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_tgjysr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_tgjysr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_tgjysr.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_djydsr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_djydsr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_djydsr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_djydsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_djydsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_djydsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_djydsr.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_cgqsj = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_cgqsj.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_cgqsj.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_cgqsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_cgqsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_cgqsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_cgqsj.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_fyqk = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fyqk.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_fyqk.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fyqk.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fyqk.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fyqk.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fyqk.GetItemNumber(row, arr[row1]);
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

    //#region 整列复制
    this.CopyL_kgsr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_kgsr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_kgsr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_kgsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_kgsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_kgsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_kgsr.GetItemNumber(row, arr[row1]);
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
    this.Filter_fxsr = function () {
        dw_fxsr.AcceptText();
        var row = dw_fxsr.GetRow();
        if (row <= 0)
            return;

        colType = dw_fxsr.Describe(cloname + ".colType");

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
        
        iw_Filter.SetDataWindow(dw_fxsr); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_fxsr.SetFocus();
        dw_fxsr.ScrollToRow(row)


    }
    //#endregion


    //#region 单列过滤
    this.Filter_fxsc = function () {
        dw_fxsc.AcceptText();
        var row = dw_fxsc.GetRow();
        if (row <= 0)
            return;

        colType = dw_fxsc.Describe(cloname + ".colType");

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
        
        iw_Filter.SetDataWindow(dw_fxsc); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_fxsc.SetFocus();
        dw_fxsc.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_thsc = function () {
        dw_thsc.AcceptText();
        var row = dw_thsc.GetRow();
        if (row <= 0)
            return;

        colType = dw_thsc.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_thsc); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_thsc.SetFocus();
        dw_thsc.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_wxqk = function () {
        dw_wxqk.AcceptText();
        var row = dw_wxqk.GetRow();
        if (row <= 0)
            return;

        colType = dw_wxqk.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_wxqk); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_wxqk.SetFocus();
        dw_wxqk.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_bqqk = function () {
        dw_bqqk.AcceptText();
        var row = dw_bqqk.GetRow();
        if (row <= 0)
            return;

        colType = dw_bqqk.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_bqqk); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_bqqk.SetFocus();
        dw_bqqk.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_wdqk = function () {
        dw_wdqk.AcceptText();
        var row = dw_wdqk.GetRow();
        if (row <= 0)
            return;

        colType = dw_wdqk.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_wdqk); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_wdqk.SetFocus();
        dw_wdqk.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_gqdjyd = function () {
        dw_gqdjyd.AcceptText();
        var row = dw_gqdjyd.GetRow();
        if (row <= 0)
            return;

        colType = dw_gqdjyd.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_gqdjyd); 
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_gqdjyd.SetFocus();
        dw_gqdjyd.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_kghlr = function () {
        dw_kghlr.AcceptText();
        var row = dw_kghlr.GetRow();
        if (row <= 0)
            return;

        colType = dw_kghlr.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_kghlr);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_kghlr.SetFocus();
        dw_kghlr.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_kgsjsl = function () {
        dw_kgsjsl.AcceptText();
        var row = dw_kgsjsl.GetRow();
        if (row <= 0)
            return;

        colType = dw_kgsjsl.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_kgsjsl);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_kgsjsl.SetFocus();
        dw_kgsjsl.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_qdlr = function () {
        dw_qdlr.AcceptText();
        var row = dw_qdlr.GetRow();
        if (row <= 0)
            return;

        colType = dw_qdlr.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_qdlr);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_qdlr.SetFocus();
        dw_qdlr.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_tgjysr = function () {
        dw_tgjysr.AcceptText();
        var row = dw_tgjysr.GetRow();
        if (row <= 0)
            return;

        colType = dw_tgjysr.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_tgjysr);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_tgjysr.SetFocus();
        dw_tgjysr.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_djydsr = function () {
        dw_djydsr.AcceptText();
        var row = dw_djydsr.GetRow();
        if (row <= 0)
            return;

        colType = dw_djydsr.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_djydsr);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_djydsr.SetFocus();
        dw_djydsr.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_cgqsj = function () {
        dw_cgqsj.AcceptText();
        var row = dw_cgqsj.GetRow();
        if (row <= 0)
            return;

        colType = dw_cgqsj.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_cgqsj);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_cgqsj.SetFocus();
        dw_cgqsj.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_kgsr = function () {
        dw_kgsr.AcceptText();
        var row = dw_kgsr.GetRow();
        if (row <= 0)
            return;

        colType = dw_kgsr.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_kgsr);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_kgsr.SetFocus();
        dw_kgsr.ScrollToRow(row)
    }
    //#endregion

    //#region 单列过滤
    this.Filter_fyqk = function () {
        dw_fyqk.AcceptText();
        var row = dw_fyqk.GetRow();
        if (row <= 0)
            return;

        colType = dw_fyqk.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_fyqk);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_fyqk.SetFocus();
        dw_fyqk.ScrollToRow(row)


    }
    //#endregion


    //#region 过滤取消
    this.Filter_Cancle_fxsr = function () {
        dw_fxsr.SetFilter("");
        dw_fxsr.Filter();
        dw_fxsr.SetFocus(); 
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_fxsc = function () {
        dw_fxsc.SetFilter("");
        dw_fxsc.Filter();
        dw_fxsc.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_thsc = function () {
        dw_thsc.SetFilter("");
        dw_thsc.Filter();
        dw_thsc.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_wxqk = function () {
        dw_wxqk.SetFilter("");
        dw_wxqk.Filter();
        dw_wxqk.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_bqqk = function () {
        dw_bqqk.SetFilter("");
        dw_bqqk.Filter();
        dw_bqqk.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_wdqk = function () {
        dw_wdqk.SetFilter("");
        dw_wdqk.Filter();
        dw_wdqk.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_gqdjyd = function () {
        dw_gqdjyd.SetFilter("");
        dw_gqdjyd.Filter();
        dw_gqdjyd.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_kghlr = function () {
        dw_kghlr.SetFilter("");
        dw_kghlr.Filter();
        dw_kghlr.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_kgsjsl = function () {
        dw_kgsjsl.SetFilter("");
        dw_kgsjsl.Filter();
        dw_kgsjsl.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_qdlr = function () {
        dw_qdlr.SetFilter("");
        dw_qdlr.Filter();
        dw_qdlr.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_tgjysr = function () {
        dw_tgjysr.SetFilter("");
        dw_tgjysr.Filter();
        dw_tgjysr.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_djydsr = function () {
        dw_djydsr.SetFilter("");
        dw_djydsr.Filter();
        dw_djydsr.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_cgqsj = function () {
        dw_cgqsj.SetFilter("");
        dw_cgqsj.Filter();
        dw_cgqsj.SetFocus();
        dw_filter.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_fyqk = function () {
        dw_fyqk.SetFilter("");
        dw_fyqk.Filter();
        dw_fyqk.SetFocus();
        dw_fyqk.Reset();
    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle_kgsr = function () {
        dw_kgsr.SetFilter("");
        dw_kgsr.Filter();
        dw_kgsr.SetFocus();
        dw_kgsr.Reset();
    }
    //#endregion
}
