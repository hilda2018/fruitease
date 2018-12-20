///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_XxcxzhxxcxList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_td= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var ddlb_tdzt= new DropDownListBox( requestor );
	 var dw_hycqf= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var ddlb_hycqf= new DropDownListBox( requestor );
	 var ddlb_cqfzfzt= new DropDownListBox( requestor );
	 var dw_sj= new DataWindow( requestor );
	 var tb_10= new ToolStrip( requestor );
	 var ddlb_sj= new DropDownListBox( requestor );
	 var dw_hgbzj= new DataWindow( requestor );
	 var tb_4= new ToolStrip( requestor );
	 var ddlb_hgbzj= new DropDownListBox( requestor );
	 var dw_jzxjbxx= new DataWindow( requestor );
	 var tb_5= new ToolStrip( requestor );
	 var ddlb_jzxjbxx= new DropDownListBox( requestor );
	 var dw_jzxcwxx= new DataWindow( requestor );
	 var tb_6= new ToolStrip( requestor );
	 var ddlb_jzxcwxx= new DropDownListBox( requestor );
	 var dw_spxx= new DataWindow( requestor );
	 var tb_7= new ToolStrip( requestor );
	 var ddlb_spxx= new DropDownListBox( requestor );
	 var dw_gjyf= new DataWindow( requestor );
	 var tb_8= new ToolStrip( requestor );
	 var ddlb_gjyf= new DropDownListBox( requestor );
	 var dw_httdjc= new DataWindow( requestor );
	 var tb_9= new ToolStrip( requestor );
	 var ddlb_httdjc= new DropDownListBox( requestor );
	 var dw_khkygz= new DataWindow( requestor );
	 var tb_14= new ToolStrip( requestor );
	 var ddlb_khkygz= new DropDownListBox( requestor );
	 var cbx_dtqk= new CheckBox( requestor );
	 var dw_sd= new DataWindow( requestor );
	 var tb_11= new ToolStrip( requestor );
	 var ddlb_sd= new DropDownListBox( requestor );
	 var dw_khhygz= new DataWindow( requestor );
	 var tb_12= new ToolStrip( requestor );
	 var ddlb_khhygz= new DropDownListBox( requestor );
	 var dw_kybzj= new DataWindow( requestor );
	 var tb_13= new ToolStrip( requestor );
	 var ddlb_kybzj= new DropDownListBox( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var rb_dzsj= new RadioButton( requestor );
	 var rb_yjdgsj= new RadioButton( requestor );
	 var rb_sjdgsj= new RadioButton( requestor );
	 var rb_fxsj= new RadioButton( requestor );
	 var rb_hdcsj= new RadioButton( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var em_ywbh= new EditMask( requestor );
	 var em_kh= new EditMask( requestor );
	 var em_hth= new EditMask( requestor );
	 var em_tgdh= new EditMask( requestor );
	 var em_cyr= new EditMask( requestor );
	 var em_bgdh= new EditMask( requestor );
	 var em_ycd= new EditMask( requestor );
	 var em_sp= new EditMask( requestor );
	 var em_gwgys= new EditMask( requestor );
	 var em_hz_jzxh= new EditMask( requestor );
	 var em_ztdh= new EditMask( requestor );
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
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_td == null ) dw_td= new DataWindow( requestor );
		 dw_td.Attach( win.Control( "dw_td") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(ddlb_tdzt == null ) ddlb_tdzt= new DropDownListBox( requestor );
		 ddlb_tdzt.Attach( win.Control( "ddlb_tdzt") ); 
		 if(dw_hycqf == null ) dw_hycqf= new DataWindow( requestor );
		 dw_hycqf.Attach( win.Control( "dw_hycqf") ); 
		 if(tb_3 == null ) tb_3= new ToolStrip( requestor );
		 tb_3.Attach( win.Control( "tb_3") ); 
		 if(ddlb_hycqf == null ) ddlb_hycqf= new DropDownListBox( requestor );
		 ddlb_hycqf.Attach( win.Control( "ddlb_hycqf") ); 
		 if(ddlb_cqfzfzt == null ) ddlb_cqfzfzt= new DropDownListBox( requestor );
		 ddlb_cqfzfzt.Attach( win.Control( "ddlb_cqfzfzt") ); 
		 if(dw_sj == null ) dw_sj= new DataWindow( requestor );
		 dw_sj.Attach( win.Control( "dw_sj") ); 
		 if(tb_10 == null ) tb_10= new ToolStrip( requestor );
		 tb_10.Attach( win.Control( "tb_10") ); 
		 if(ddlb_sj == null ) ddlb_sj= new DropDownListBox( requestor );
		 ddlb_sj.Attach( win.Control( "ddlb_sj") ); 
		 if(dw_hgbzj == null ) dw_hgbzj= new DataWindow( requestor );
		 dw_hgbzj.Attach( win.Control( "dw_hgbzj") ); 
		 if(tb_4 == null ) tb_4= new ToolStrip( requestor );
		 tb_4.Attach( win.Control( "tb_4") ); 
		 if(ddlb_hgbzj == null ) ddlb_hgbzj= new DropDownListBox( requestor );
		 ddlb_hgbzj.Attach( win.Control( "ddlb_hgbzj") ); 
		 if(dw_jzxjbxx == null ) dw_jzxjbxx= new DataWindow( requestor );
		 dw_jzxjbxx.Attach( win.Control( "dw_jzxjbxx") ); 
		 if(tb_5 == null ) tb_5= new ToolStrip( requestor );
		 tb_5.Attach( win.Control( "tb_5") ); 
		 if(ddlb_jzxjbxx == null ) ddlb_jzxjbxx= new DropDownListBox( requestor );
		 ddlb_jzxjbxx.Attach( win.Control( "ddlb_jzxjbxx") ); 
		 if(dw_jzxcwxx == null ) dw_jzxcwxx= new DataWindow( requestor );
		 dw_jzxcwxx.Attach( win.Control( "dw_jzxcwxx") ); 
		 if(tb_6 == null ) tb_6= new ToolStrip( requestor );
		 tb_6.Attach( win.Control( "tb_6") ); 
		 if(ddlb_jzxcwxx == null ) ddlb_jzxcwxx= new DropDownListBox( requestor );
		 ddlb_jzxcwxx.Attach( win.Control( "ddlb_jzxcwxx") ); 
		 if(dw_spxx == null ) dw_spxx= new DataWindow( requestor );
		 dw_spxx.Attach( win.Control( "dw_spxx") ); 
		 if(tb_7 == null ) tb_7= new ToolStrip( requestor );
		 tb_7.Attach( win.Control( "tb_7") ); 
		 if(ddlb_spxx == null ) ddlb_spxx= new DropDownListBox( requestor );
		 ddlb_spxx.Attach( win.Control( "ddlb_spxx") ); 
		 if(dw_gjyf == null ) dw_gjyf= new DataWindow( requestor );
		 dw_gjyf.Attach( win.Control( "dw_gjyf") ); 
		 if(tb_8 == null ) tb_8= new ToolStrip( requestor );
		 tb_8.Attach( win.Control( "tb_8") ); 
		 if(ddlb_gjyf == null ) ddlb_gjyf= new DropDownListBox( requestor );
		 ddlb_gjyf.Attach( win.Control( "ddlb_gjyf") ); 
		 if(dw_httdjc == null ) dw_httdjc= new DataWindow( requestor );
		 dw_httdjc.Attach( win.Control( "dw_httdjc") ); 
		 if(tb_9 == null ) tb_9= new ToolStrip( requestor );
		 tb_9.Attach( win.Control( "tb_9") ); 
		 if(ddlb_httdjc == null ) ddlb_httdjc= new DropDownListBox( requestor );
		 ddlb_httdjc.Attach( win.Control( "ddlb_httdjc") ); 
		 if(dw_khkygz == null ) dw_khkygz= new DataWindow( requestor );
		 dw_khkygz.Attach( win.Control( "dw_khkygz") ); 
		 if(tb_14 == null ) tb_14= new ToolStrip( requestor );
		 tb_14.Attach( win.Control( "tb_14") ); 
		 if(ddlb_khkygz == null ) ddlb_khkygz= new DropDownListBox( requestor );
		 ddlb_khkygz.Attach( win.Control( "ddlb_khkygz") ); 
		 if(cbx_dtqk == null ) cbx_dtqk= new CheckBox( requestor );
		 cbx_dtqk.Attach( win.Control( "cbx_dtqk") ); 
		 if(dw_sd == null ) dw_sd= new DataWindow( requestor );
		 dw_sd.Attach( win.Control( "dw_sd") ); 
		 if(tb_11 == null ) tb_11= new ToolStrip( requestor );
		 tb_11.Attach( win.Control( "tb_11") ); 
		 if(ddlb_sd == null ) ddlb_sd= new DropDownListBox( requestor );
		 ddlb_sd.Attach( win.Control( "ddlb_sd") ); 
		 if(dw_khhygz == null ) dw_khhygz= new DataWindow( requestor );
		 dw_khhygz.Attach( win.Control( "dw_khhygz") ); 
		 if(tb_12 == null ) tb_12= new ToolStrip( requestor );
		 tb_12.Attach( win.Control( "tb_12") ); 
		 if(ddlb_khhygz == null ) ddlb_khhygz= new DropDownListBox( requestor );
		 ddlb_khhygz.Attach( win.Control( "ddlb_khhygz") ); 
		 if(dw_kybzj == null ) dw_kybzj= new DataWindow( requestor );
		 dw_kybzj.Attach( win.Control( "dw_kybzj") ); 
		 if(tb_13 == null ) tb_13= new ToolStrip( requestor );
		 tb_13.Attach( win.Control( "tb_13") ); 
		 if(ddlb_kybzj == null ) ddlb_kybzj= new DropDownListBox( requestor );
		 ddlb_kybzj.Attach( win.Control( "ddlb_kybzj") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(rb_dzsj == null ) rb_dzsj= new RadioButton( requestor );
		 rb_dzsj.Attach( win.Control( "rb_dzsj") ); 
		 if(rb_yjdgsj == null ) rb_yjdgsj= new RadioButton( requestor );
		 rb_yjdgsj.Attach( win.Control( "rb_yjdgsj") ); 
		 if(rb_sjdgsj == null ) rb_sjdgsj= new RadioButton( requestor );
		 rb_sjdgsj.Attach( win.Control( "rb_sjdgsj") ); 
		 if(rb_fxsj == null ) rb_fxsj= new RadioButton( requestor );
		 rb_fxsj.Attach( win.Control( "rb_fxsj") ); 
		 if(rb_hdcsj == null ) rb_hdcsj= new RadioButton( requestor );
		 rb_hdcsj.Attach( win.Control( "rb_hdcsj") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 
		 if(em_ywbh == null ) em_ywbh= new EditMask( requestor );
		 em_ywbh.Attach( win.Control( "em_ywbh") ); 
		 if(em_kh == null ) em_kh= new EditMask( requestor );
		 em_kh.Attach( win.Control( "em_kh") ); 
		 if(em_hth == null ) em_hth= new EditMask( requestor );
		 em_hth.Attach( win.Control( "em_hth") ); 
		 if(em_tgdh == null ) em_tgdh= new EditMask( requestor );
		 em_tgdh.Attach( win.Control( "em_tgdh") ); 
		 if(em_cyr == null ) em_cyr= new EditMask( requestor );
		 em_cyr.Attach( win.Control( "em_cyr") ); 
		 if(em_bgdh == null ) em_bgdh= new EditMask( requestor );
		 em_bgdh.Attach( win.Control( "em_bgdh") ); 
		 if(em_ycd == null ) em_ycd= new EditMask( requestor );
		 em_ycd.Attach( win.Control( "em_ycd") ); 
		 if(em_sp == null ) em_sp= new EditMask( requestor );
		 em_sp.Attach( win.Control( "em_sp") ); 
		 if(em_gwgys == null ) em_gwgys= new EditMask( requestor );
		 em_gwgys.Attach( win.Control( "em_gwgys") ); 
		 if(em_hz_jzxh == null ) em_hz_jzxh= new EditMask( requestor );
		 em_hz_jzxh.Attach( win.Control( "em_hz_jzxh") ); 
		 if(em_ztdh == null ) em_ztdh= new EditMask( requestor );
		 em_ztdh.Attach( win.Control( "em_ztdh") ); 
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
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_td","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_td","DoubleClicked",self.dw_List_DoubleClicked); 

		 if(typeof(self.dw_List_MouseMove)=="function") 
			 win.AttachEvent("dw_td","MouseMove",self.dw_List_MouseMove); 

		 if(typeof(self.RbuttonDown_td)=="function") 
			 win.AttachEvent("dw_td","RButtonDown",self.RbuttonDown_td); 

		 if(typeof(self.Retrieve_td)=="function") 
			 win.AttachEvent("ddlb_tdzt","Modified",self.Retrieve_td); 

		 if(typeof(self.dw_List_hycqf_DoubleClicked)=="function") 
			 win.AttachEvent("dw_hycqf","DoubleClicked",self.dw_List_hycqf_DoubleClicked); 

		 if(typeof(self.Retrieve_hycqf)=="function") 
			 win.AttachEvent("ddlb_hycqf","Modified",self.Retrieve_hycqf); 

		 if(typeof(self.Retrieve_hycqf)=="function") 
			 win.AttachEvent("ddlb_cqfzfzt","Modified",self.Retrieve_hycqf); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_sj","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_List_sj_DoubleClicked)=="function") 
			 win.AttachEvent("dw_sj","DoubleClicked",self.dw_List_sj_DoubleClicked); 

		 if(typeof(self.em_sp_EditChanged)=="function") 
			 win.AttachEvent("dw_sj","EditChanged",self.em_sp_EditChanged); 

		 if(typeof(self.dw_List_MouseMove)=="function") 
			 win.AttachEvent("dw_sj","MouseMove",self.dw_List_MouseMove); 

		 if(typeof(self.RbuttonDown_sj)=="function") 
			 win.AttachEvent("dw_sj","RButtonDown",self.RbuttonDown_sj); 

		 if(typeof(self.Retrieve_sj)=="function") 
			 win.AttachEvent("ddlb_sj","Modified",self.Retrieve_sj); 

		 if(typeof(self.dw_List_hgbzj_DoubleClicked)=="function") 
			 win.AttachEvent("dw_hgbzj","DoubleClicked",self.dw_List_hgbzj_DoubleClicked); 

		 if(typeof(self.RbuttonDown_hgbzj)=="function") 
			 win.AttachEvent("dw_hgbzj","RButtonDown",self.RbuttonDown_hgbzj); 

		 if(typeof(self.Retrieve_hgbzj)=="function") 
			 win.AttachEvent("ddlb_hgbzj","Modified",self.Retrieve_hgbzj); 

		 if(typeof(self.dw_List_jzxjbxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxjbxx","DoubleClicked",self.dw_List_jzxjbxx_DoubleClicked); 

		 if(typeof(self.RbuttonDown_jzxjbxx)=="function") 
			 win.AttachEvent("dw_jzxjbxx","RButtonDown",self.RbuttonDown_jzxjbxx); 

		 if(typeof(self.Retrieve_jzxjbxx)=="function") 
			 win.AttachEvent("ddlb_jzxjbxx","Modified",self.Retrieve_jzxjbxx); 

		 if(typeof(self.dw_List_jzxcwxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxcwxx","DoubleClicked",self.dw_List_jzxcwxx_DoubleClicked); 

		 if(typeof(self.RbuttonDown_jzxcwxx)=="function") 
			 win.AttachEvent("dw_jzxcwxx","RButtonDown",self.RbuttonDown_jzxcwxx); 

		 if(typeof(self.Retrieve_jzxcwxx)=="function") 
			 win.AttachEvent("ddlb_jzxcwxx","Modified",self.Retrieve_jzxcwxx); 

		 if(typeof(self.dw_List_spxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_spxx","DoubleClicked",self.dw_List_spxx_DoubleClicked); 

		 if(typeof(self.RbuttonDown_spxx)=="function") 
			 win.AttachEvent("dw_spxx","RButtonDown",self.RbuttonDown_spxx); 

		 if(typeof(self.Retrieve_spxx)=="function") 
			 win.AttachEvent("ddlb_spxx","Modified",self.Retrieve_spxx); 

		 if(typeof(self.dw_List_gjyf_DoubleClicked)=="function") 
			 win.AttachEvent("dw_gjyf","DoubleClicked",self.dw_List_gjyf_DoubleClicked); 

		 if(typeof(self.RbuttonDown_gjyf)=="function") 
			 win.AttachEvent("dw_gjyf","RButtonDown",self.RbuttonDown_gjyf); 

		 if(typeof(self.Retrieve_gjyf)=="function") 
			 win.AttachEvent("ddlb_gjyf","Modified",self.Retrieve_gjyf); 

		 if(typeof(self.dw_List_httdjc_DoubleClicked)=="function") 
			 win.AttachEvent("dw_httdjc","DoubleClicked",self.dw_List_httdjc_DoubleClicked); 

		 if(typeof(self.RbuttonDown_httdjc)=="function") 
			 win.AttachEvent("dw_httdjc","RButtonDown",self.RbuttonDown_httdjc); 

		 if(typeof(self.Retrieve_httdjc)=="function") 
			 win.AttachEvent("ddlb_httdjc","Modified",self.Retrieve_httdjc); 

		 if(typeof(self.dw_List_khkygz_DoubleClicked)=="function") 
			 win.AttachEvent("dw_khkygz","DoubleClicked",self.dw_List_khkygz_DoubleClicked); 

		 if(typeof(self.RbuttonDown_khkygz)=="function") 
			 win.AttachEvent("dw_khkygz","RButtonDown",self.RbuttonDown_khkygz); 

		 if(typeof(self.Retrieve_khkygz)=="function") 
			 win.AttachEvent("ddlb_khkygz","Modified",self.Retrieve_khkygz); 

		 if(typeof(self.Retrieve_khkygz)=="function") 
			 win.AttachEvent("cbx_dtqk","Clicked",self.Retrieve_khkygz); 

		 if(typeof(self.dw_List_sd_DoubleClicked)=="function") 
			 win.AttachEvent("dw_sd","DoubleClicked",self.dw_List_sd_DoubleClicked); 

		 if(typeof(self.RbuttonDown_sd)=="function") 
			 win.AttachEvent("dw_sd","RButtonDown",self.RbuttonDown_sd); 

		 if(typeof(self.Retrieve_sd)=="function") 
			 win.AttachEvent("ddlb_sd","Modified",self.Retrieve_sd); 

		 if(typeof(self.dw_List_khhygz_DoubleClicked)=="function") 
			 win.AttachEvent("dw_khhygz","DoubleClicked",self.dw_List_khhygz_DoubleClicked); 

		 if(typeof(self.RbuttonDown_khhygz)=="function") 
			 win.AttachEvent("dw_khhygz","RButtonDown",self.RbuttonDown_khhygz); 

		 if(typeof(self.Retrieve_khhygz)=="function") 
			 win.AttachEvent("ddlb_khhygz","Modified",self.Retrieve_khhygz); 

		 if(typeof(self.dw_List_kybzj_DoubleClicked)=="function") 
			 win.AttachEvent("dw_kybzj","DoubleClicked",self.dw_List_kybzj_DoubleClicked); 

		 if(typeof(self.RbuttonDown_kybzj)=="function") 
			 win.AttachEvent("dw_kybzj","RButtonDown",self.RbuttonDown_kybzj); 

		 if(typeof(self.Retrieve_kybzj)=="function") 
			 win.AttachEvent("ddlb_kybzj","Modified",self.Retrieve_kybzj); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_dzsj","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_yjdgsj","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_sjdgsj","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_fxsj","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_hdcsj","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.Retrieve); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.em_ywbh_EditChanged)=="function") 
			 win.AttachEvent("em_ywbh","EditChanged",self.em_ywbh_EditChanged); 

		 if(typeof(self.em_kh_EditChanged)=="function") 
			 win.AttachEvent("em_kh","EditChanged",self.em_kh_EditChanged); 

		 if(typeof(self.em_hth_EditChanged)=="function") 
			 win.AttachEvent("em_hth","EditChanged",self.em_hth_EditChanged); 

		 if(typeof(self.em_tgdh_EditChanged)=="function") 
			 win.AttachEvent("em_tgdh","EditChanged",self.em_tgdh_EditChanged); 

		 if(typeof(self.em_cyr_EditChanged)=="function") 
			 win.AttachEvent("em_cyr","EditChanged",self.em_cyr_EditChanged); 

		 if(typeof(self.em_bgdh_EditChanged)=="function") 
			 win.AttachEvent("em_bgdh","EditChanged",self.em_bgdh_EditChanged); 

		 if(typeof(self.em_ycd_EditChanged)=="function") 
			 win.AttachEvent("em_ycd","EditChanged",self.em_ycd_EditChanged); 

		 if(typeof(self.em_sp_EditChanged)=="function") 
			 win.AttachEvent("em_sp","EditChanged",self.em_sp_EditChanged); 

		 if(typeof(self.em_gwgys_EditChanged)=="function") 
			 win.AttachEvent("em_gwgys","EditChanged",self.em_gwgys_EditChanged); 

		 if(typeof(self.em_hz_jzxh_EditChanged)=="function") 
			 win.AttachEvent("em_hz_jzxh","EditChanged",self.em_hz_jzxh_EditChanged); 

		 if(typeof(self.em_ztdh_EditChanged)=="function") 
			 win.AttachEvent("em_ztdh","EditChanged",self.em_ztdh_EditChanged); 

		 if(typeof(self.Recover_td)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover_td); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_td)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol_td); 

		 if(typeof(self.Recover_hycqf)=="function") 
			 win.AttachEvent("m_5","Clicked",self.Recover_hycqf); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_6","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_hycqf)=="function") 
			 win.AttachEvent("m_8","Clicked",self.CopyCol_hycqf); 

		 if(typeof(self.Recover_sj)=="function") 
			 win.AttachEvent("m_12","Clicked",self.Recover_sj); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_13","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_sj)=="function") 
			 win.AttachEvent("m_15","Clicked",self.CopyCol_sj); 

		 if(typeof(self.Recover_hgbzj)=="function") 
			 win.AttachEvent("m_19","Clicked",self.Recover_hgbzj); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_20","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_hgbzj)=="function") 
			 win.AttachEvent("m_22","Clicked",self.CopyCol_hgbzj); 

		 if(typeof(self.Recover_jzxjbxx)=="function") 
			 win.AttachEvent("m_26","Clicked",self.Recover_jzxjbxx); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_27","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_jzxjbxx)=="function") 
			 win.AttachEvent("m_29","Clicked",self.CopyCol_jzxjbxx); 

		 if(typeof(self.Recover_jzxcwxx)=="function") 
			 win.AttachEvent("m_33","Clicked",self.Recover_jzxcwxx); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_34","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_jzxcwxx)=="function") 
			 win.AttachEvent("m_36","Clicked",self.CopyCol_jzxcwxx); 

		 if(typeof(self.Recover_spxx)=="function") 
			 win.AttachEvent("m_40","Clicked",self.Recover_spxx); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_41","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_spxx)=="function") 
			 win.AttachEvent("m_43","Clicked",self.CopyCol_spxx); 

		 if(typeof(self.Recover_gjyf)=="function") 
			 win.AttachEvent("m_47","Clicked",self.Recover_gjyf); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_48","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_gjyf)=="function") 
			 win.AttachEvent("m_50","Clicked",self.CopyCol_gjyf); 

		 if(typeof(self.Recover_httdjc)=="function") 
			 win.AttachEvent("m_54","Clicked",self.Recover_httdjc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_55","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_httdjc)=="function") 
			 win.AttachEvent("m_57","Clicked",self.CopyCol_httdjc); 

		 if(typeof(self.Recover_khkygz)=="function") 
			 win.AttachEvent("m_61","Clicked",self.Recover_khkygz); 

		 if(typeof(self.Retrieve_khkygz)=="function") 
			 win.AttachEvent("m_62","Clicked",self.Retrieve_khkygz); 

		 if(typeof(self.CopyCol_khkygz)=="function") 
			 win.AttachEvent("m_64","Clicked",self.CopyCol_khkygz); 

		 if(typeof(self.Recover_sd)=="function") 
			 win.AttachEvent("m_68","Clicked",self.Recover_sd); 

		 if(typeof(self.Retrieve_sd)=="function") 
			 win.AttachEvent("m_69","Clicked",self.Retrieve_sd); 

		 if(typeof(self.CopyCol_sd)=="function") 
			 win.AttachEvent("m_71","Clicked",self.CopyCol_sd); 

		 if(typeof(self.Recover_khhygz)=="function") 
			 win.AttachEvent("m_75","Clicked",self.Recover_khhygz); 

		 if(typeof(self.Retrieve_khhygz)=="function") 
			 win.AttachEvent("m_76","Clicked",self.Retrieve_khhygz); 

		 if(typeof(self.CopyCol_khhygz)=="function") 
			 win.AttachEvent("m_78","Clicked",self.CopyCol_khhygz); 

		 if(typeof(self.Recover_kybzj)=="function") 
			 win.AttachEvent("m_82","Clicked",self.Recover_kybzj); 

		 if(typeof(self.Retrieve_kybzj)=="function") 
			 win.AttachEvent("m_83","Clicked",self.Retrieve_kybzj); 

		 if(typeof(self.CopyCol_kybzj)=="function") 
			 win.AttachEvent("m_85","Clicked",self.CopyCol_kybzj); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_td.Detach(); dw_td=null; 
		 tb_2.Detach(); tb_2=null; 
		 ddlb_tdzt.Detach(); ddlb_tdzt=null; 
		 dw_hycqf.Detach(); dw_hycqf=null; 
		 tb_3.Detach(); tb_3=null; 
		 ddlb_hycqf.Detach(); ddlb_hycqf=null; 
		 ddlb_cqfzfzt.Detach(); ddlb_cqfzfzt=null; 
		 dw_sj.Detach(); dw_sj=null; 
		 tb_10.Detach(); tb_10=null; 
		 ddlb_sj.Detach(); ddlb_sj=null; 
		 dw_hgbzj.Detach(); dw_hgbzj=null; 
		 tb_4.Detach(); tb_4=null; 
		 ddlb_hgbzj.Detach(); ddlb_hgbzj=null; 
		 dw_jzxjbxx.Detach(); dw_jzxjbxx=null; 
		 tb_5.Detach(); tb_5=null; 
		 ddlb_jzxjbxx.Detach(); ddlb_jzxjbxx=null; 
		 dw_jzxcwxx.Detach(); dw_jzxcwxx=null; 
		 tb_6.Detach(); tb_6=null; 
		 ddlb_jzxcwxx.Detach(); ddlb_jzxcwxx=null; 
		 dw_spxx.Detach(); dw_spxx=null; 
		 tb_7.Detach(); tb_7=null; 
		 ddlb_spxx.Detach(); ddlb_spxx=null; 
		 dw_gjyf.Detach(); dw_gjyf=null; 
		 tb_8.Detach(); tb_8=null; 
		 ddlb_gjyf.Detach(); ddlb_gjyf=null; 
		 dw_httdjc.Detach(); dw_httdjc=null; 
		 tb_9.Detach(); tb_9=null; 
		 ddlb_httdjc.Detach(); ddlb_httdjc=null; 
		 dw_khkygz.Detach(); dw_khkygz=null; 
		 tb_14.Detach(); tb_14=null; 
		 ddlb_khkygz.Detach(); ddlb_khkygz=null; 
		 cbx_dtqk.Detach(); cbx_dtqk=null; 
		 dw_sd.Detach(); dw_sd=null; 
		 tb_11.Detach(); tb_11=null; 
		 ddlb_sd.Detach(); ddlb_sd=null; 
		 dw_khhygz.Detach(); dw_khhygz=null; 
		 tb_12.Detach(); tb_12=null; 
		 ddlb_khhygz.Detach(); ddlb_khhygz=null; 
		 dw_kybzj.Detach(); dw_kybzj=null; 
		 tb_13.Detach(); tb_13=null; 
		 ddlb_kybzj.Detach(); ddlb_kybzj=null; 
		 tb_1.Detach(); tb_1=null; 
		 rb_dzsj.Detach(); rb_dzsj=null; 
		 rb_yjdgsj.Detach(); rb_yjdgsj=null; 
		 rb_sjdgsj.Detach(); rb_sjdgsj=null; 
		 rb_fxsj.Detach(); rb_fxsj=null; 
		 rb_hdcsj.Detach(); rb_hdcsj=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 em_ywbh.Detach(); em_ywbh=null; 
		 em_kh.Detach(); em_kh=null; 
		 em_hth.Detach(); em_hth=null; 
		 em_tgdh.Detach(); em_tgdh=null; 
		 em_cyr.Detach(); em_cyr=null; 
		 em_bgdh.Detach(); em_bgdh=null; 
		 em_ycd.Detach(); em_ycd=null; 
		 em_sp.Detach(); em_sp=null; 
		 em_gwgys.Detach(); em_gwgys=null; 
		 em_hz_jzxh.Detach(); em_hz_jzxh=null; 
		 em_ztdh.Detach(); em_ztdh=null; 
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
		 ds_1.Detach(); ds_1=null; 
		 ds_role.Detach(); ds_role=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
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
    var iw_Fj_Edit = null;

    var iw_Main1 = null;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hddz.ashx");   

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
      
        self.Retrieve();
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
        if (dw_td.RowCount() <= 0)
            return;
        var ywbh = dw_td.GetItemString(dw_td.GetRow(), 'ywbh')
        var status = dw_td.GetItemString(dw_td.GetRow(), 'state')
        var ywy = ""
        var zbr = dw_td.GetItemString(dw_td.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        //        var operation = requestor.GetParm("operation");
        //失效按钮的控制
        var zbr = dw_td.GetItemString(dw_td.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        var operation = "show"; 
        


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

    this.Tab_Select = function () {
        if (tab_1.GetSelectedTab() == 1 && dw_td.RowCount() < 1) {
            self.Retrieve_td();
        }
        if (tab_1.GetSelectedTab() == 2 && dw_hycqf.RowCount() < 1) {
            self.Retrieve_hycqf();
        }
        if (tab_1.GetSelectedTab() == 3 && dw_sj.RowCount() < 1) {
            self.Retrieve_sj();
        }
        if (tab_1.GetSelectedTab() == 4 && dw_hgbzj.RowCount() < 1) {
            self.Retrieve_hgbzj();
        }
        if (tab_1.GetSelectedTab() == 5 && dw_jzxjbxx.RowCount() < 1) {
            self.Retrieve_jzxjbxx();
        }
        if (tab_1.GetSelectedTab() == 6 && dw_jzxcwxx.RowCount() < 1) {
            self.Retrieve_jzxcwxx();
        }
        if (tab_1.GetSelectedTab() == 7 && dw_spxx.RowCount() < 1) {
            self.Retrieve_spxx();
        }
        if (tab_1.GetSelectedTab() == 8 && dw_gjyf.RowCount() < 1) {
            self.Retrieve_gjyf();
        }
        if (tab_1.GetSelectedTab() == 9 && dw_httdjc.RowCount() < 1) {
            self.Retrieve_httdjc();
        }
        if (tab_1.GetSelectedTab() == 10 && dw_khkygz.RowCount() < 1) {
            self.Retrieve_khkygz();
        }
        if (tab_1.GetSelectedTab() == 11 && dw_sd.RowCount() < 1) {
            self.Retrieve_sd();
        }
        if (tab_1.GetSelectedTab() == 12 && dw_khhygz.RowCount() < 1) {
            self.Retrieve_khhygz();
        }
        if (tab_1.GetSelectedTab() == 13 && dw_kybzj.RowCount() < 1) {
            self.Retrieve_kybzj();
        }

        if (em_ztdh.GetText() != "" && em_ztdh.GetText() != null) { 
            self.em_ztdh_EditChanged(em_ztdh.GetText());
        }
         if (em_hz_jzxh.GetText() != "" && em_hz_jzxh.GetText() != null) { 
             self.em_hz_jzxh_EditChanged(em_hz_jzxh.GetText());
         }
          if (em_gwgys.GetText() != "" && em_gwgys.GetText() != null) { 
              self.em_gwgys_EditChanged(em_gwgys.GetText());
        }

         if (em_sp.GetText() != "" && em_sp.GetText() != null) { 
             self.em_sp_EditChanged(em_sp.GetText());
        }
         if (em_ycd.GetText() != "" && em_ycd.GetText() != null) { 
             self.em_ycd_EditChanged(em_ycd.GetText());
        }
         if (em_cyr.GetText() != "" && em_cyr.GetText() != null) { 
             self.em_cyr_EditChanged(em_cyr.GetText());
        }
         if (em_hth.GetText() != "" && em_hth.GetText() != null) { 
             self.em_hth_EditChanged(em_hth.GetText());
        }
         if (em_ywbh.GetText() != "" && em_ywbh.GetText() != null) { 
             self.em_ywbh_EditChanged(em_ywbh.GetText());
        }
         if (em_bgdh.GetText() != "" && em_bgdh.GetText() != null) { 
             self.em_bgdh_EditChanged(em_bgdh.GetText());
        }
         if (em_tgdh.GetText() != "" && em_tgdh.GetText() != null) { 
             self.em_tgdh_EditChanged(em_tgdh.GetText());
        }
         if (em_kh.GetText() != "" && em_kh.GetText() != null) { 
             self.em_kh_EditChanged(em_kh.GetText());
        }
    };
    //#endregion


    //#region 打开编辑窗口
    this.OpenWindow_jzxcwxx = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000597";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_jzxcwxx.RowCount() <= 0)
            return;
        var ywbh = dw_jzxcwxx.GetItemString(dw_jzxcwxx.GetRow(), 'ywbh')
        var cxh = dw_jzxcwxx.GetItemNumber(dw_jzxcwxx.GetRow(), 'cxh')

        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_jzxcwxx.GetItemString(dw_jzxcwxx.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        var operation = requestor.GetParm("operation");

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

        dw_jzxcwxx.RowsDiscard(row, row, DWBUFFER.Primary);

    }
    //#endregion

    //#region 双击
    this.dw_List_jzxcwxx_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow_jzxcwxx();

    }
    //#endregion
   

    //#region 自己查询
    this.Retrieve = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var tdzt = ddlb_tdzt.GetText();
        var hycqfzt = ddlb_hycqf.GetText();
        var sjzt = ddlb_sj.GetText();
        var cqfzfzt = ddlb_cqfzfzt.GetText();
        var hgbzjzt = ddlb_hgbzj.GetText();
        var jzxjbxxzt = ddlb_jzxjbxx.GetText();
        var jzxcwxxzt = ddlb_jzxcwxx.GetText();
        var spxxzt = ddlb_spxx.GetText();
        var gjyfzt = ddlb_gjyf.GetText();
        var httdjczt = ddlb_httdjc.GetText();
        var sdzt = ddlb_sd.GetText();
        var khhygzzt = ddlb_khhygz.GetText();
        var kybzjzt = ddlb_kybzj.GetText();
        var khkygzzt = ddlb_khkygz.GetText();

        if (cbx_dtqk.GetChecked()) {
            var dtqk = "dt"
        } else {
            var dtqk = "fdt"
        }
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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }

        dw_td.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, tdzt, Tybm, Sfqytybm);
        dw_hycqf.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, hycqfzt, cqfzfzt, Tybm, Sfqytybm);
        dw_sj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, sjzt, Tybm, Sfqytybm);
        dw_hgbzj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, hgbzjzt, Tybm, Sfqytybm);
        dw_jzxjbxx.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, jzxjbxxzt, Tybm, Sfqytybm);
        dw_jzxcwxx.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, jzxcwxxzt, Tybm, Sfqytybm);
        dw_spxx.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, spxxzt, Tybm, Sfqytybm);
        dw_gjyf.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, gjyfzt, Tybm, Sfqytybm);
        dw_httdjc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, httdjczt, Tybm, Sfqytybm);
        dw_khkygz.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, khkygzzt, dtqk, Tybm, Sfqytybm);
        dw_sd.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, sdzt, Tybm, Sfqytybm);
        dw_khhygz.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, khhygzzt, Tybm, Sfqytybm);
        dw_kybzj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, kybzjzt, Tybm, Sfqytybm);

    }
    //#endregion


    //#region 提单查询
    this.Retrieve_td = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var tdzt = ddlb_tdzt.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
     
        dw_td.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, tdzt, Tybm, Sfqytybm);
      
    }
    //#endregion


    //#region 海运超期费查询
    this.Retrieve_hycqf = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var hycqfzt = ddlb_hycqf.GetText();
        var cqfzfzt = ddlb_cqfzfzt.GetText();
        

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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_hycqf.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, hycqfzt, cqfzfzt, Tybm, Sfqytybm);

    }
    //#endregion

    //#region 税金查询
    this.Retrieve_sj = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var sjzt = ddlb_sj.GetText(); 


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_sj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, sjzt, Tybm, Sfqytybm);

    }
    //#endregion

    //#region 海关保证金查询
    this.Retrieve_hgbzj = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var hgbzjzt = ddlb_hgbzj.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_hgbzj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, hgbzjzt, Tybm, Sfqytybm);

    }
    //#endregion

    //#region 集装箱基本信息查询
    this.Retrieve_jzxjbxx = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var jzxjbxxzt = ddlb_jzxjbxx.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_jzxjbxx.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, jzxjbxxzt, Tybm, Sfqytybm);

    }
    //#endregion

    //#region 集装箱财务信息查询
    this.Retrieve_jzxcwxx = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var jzxcwxxzt = ddlb_jzxcwxx.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_jzxcwxx.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, jzxcwxxzt, Tybm, Sfqytybm);

    }
    //#endregion

    //#region 商品信息查询
    this.Retrieve_spxx = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var spxxzt = ddlb_spxx.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_spxx.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, spxxzt, Tybm, Sfqytybm);

    }
    //#endregion


    //#region 国际运费信息查询
    this.Retrieve_gjyf = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var gjyfzt = ddlb_gjyf.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_gjyf.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, gjyfzt, Tybm, Sfqytybm);

    }
    //#endregion


    //#region 合同提单进程查询
    this.Retrieve_httdjc = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var httdjczt = ddlb_httdjc.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_httdjc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, httdjczt, Tybm, Sfqytybm);

    }
    //#endregion


    //#region 客户空运跟踪查询
    this.Retrieve_khkygz = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var khkygzzt = ddlb_khkygz.GetText();

        if (cbx_dtqk.GetChecked()) {
            var dtqk = "dt"
        } else {
            var dtqk = "fdt"
        }


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }

        dw_khkygz.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, khkygzzt, dtqk, Tybm, Sfqytybm);

    }
    //#endregion

    //#region 税单查询
    this.Retrieve_sd = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var sdzt = ddlb_sd.GetText();


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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }

        dw_sd.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, sdzt, Tybm, Sfqytybm);

    }
    //#endregion


    //#region 客户海运跟踪查询
    this.Retrieve_khhygz = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var khhygzzt = ddlb_khhygz.GetText()

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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_khhygz.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, khhygzzt, Tybm, Sfqytybm);

    }
    //#endregion

    //#region 空运保证金查询
    this.Retrieve_kybzj = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var kybzjzt = ddlb_kybzj.GetText()

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

        var sjlx = ""
        if (rb_dzsj.GetChecked() == true) {
            sjlx = "dzsj"
        }
        if (rb_yjdgsj.GetChecked() == true) {
            sjlx = "yjdgsj"
        }
        if (rb_sjdgsj.GetChecked() == true) {
            sjlx = "sjdgsj"
        }
        if (rb_fxsj.GetChecked() == true) {
            sjlx = "fxsj"
        }
        if (rb_hdcsj.GetChecked() == true) {
            sjlx = "hdcsj"
        }
        dw_kybzj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, sjlx, kybzjzt, Tybm, Sfqytybm);

    }
    //#endregion


    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    }
    //#endregion




    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_hycqf.GetItemString(Row, "ywbh");
                var lx = "hddz"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_hycqf.SetFocus();
            }
            if (dwoName == "hth") {
                self.OpenWindow();
            }
        }
    }
    //#endregion

    //#region 海运超期费双击
    this.dw_List_hycqf_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0){
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_hycqf.GetItemString(Row, "ywbh");
                var lx = "cqfgl"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_hycqf.SetFocus();
            }
        }
    }
    //#endregion


    //#region 税金双击
    this.dw_List_sj_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_sj.GetItemString(Row, "ywbh");
                var lx = "sj"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_sj.SetFocus();
            }
        }
    }
    //#endregion

    //#region 税金双击
    this.dw_List_hycqf_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_hycqf.GetItemString(Row, "ywbh");
                var lx = "cqfgl"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_hycqf.SetFocus();
            }
        }
    }
    //#endregion

    //#region 海关保证金双击
    this.dw_List_hgbzj_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_hgbzj.GetItemString(Row, "ywbh");
                var lx = "hybzj"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_hgbzj.SetFocus();
            }
        }
    }
    //#endregion

    //#region 海关保证金双击
    this.dw_List_gjyf_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_gjyf.GetItemString(Row, "ywbh");
                var lx = "hddz"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_gjyf.SetFocus();
            }
        }
    }
    //#endregion

    //#region 国际运费双击
    this.dw_List_gjyf_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_gjyf.GetItemString(Row, "ywbh");
                var lx = "hddz"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_gjyf.SetFocus();
            }
        }
    }
    //#endregion

    //#region 税单双击
    this.dw_List_sd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_sd.GetItemString(Row, "ywbh");
                var lx = "sd"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_sd.SetFocus();
            }
        }
    }
    //#endregion

    //#region 空运保证金双击
    this.dw_List_kybzj_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_hgbzj.GetItemString(Row, "ywbh");
                var lx = "kybzj"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_hgbzj.SetFocus();
            }
        }
    }
    //#endregion

     
    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {       
      //
           
    }
    //#endregion

//     this.Download = function () {
//         QsWebSoft.PubMethod.DownLoad();
//    }

       




    //#region 恢复默认列
    this.Recover_td = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_td_list");
        self.Retrieve_td();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_hycqf = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_hycqf_list");
        self.Retrieve_hycqf();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_sj = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_sj_list");
        self.Retrieve();
    }
    //#endregion

     //#region 恢复默认列
    this.Recover_hgbzj = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_hgbzj_list");
        self.Retrieve_hgbzj();
    }
    //#endregion
     

     //#region 恢复默认列
    this.Recover_jzxjbxx = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_jzxjbxx_list");
        self.Retrieve_jzxjbxx();
    }
    //#endregion

     //#region 恢复默认列
    this.Recover_jzxcwxx = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_jzxcwxx_list");
        self.Retrieve_jzxcwxx();
    }
    //#endregion

     //#region 恢复默认列
    this.Recover_spxx = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_spxx_list");
        self.Retrieve_spxx();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_gjyf = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_gjyf_list");
        self.Retrieve_gjyf();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_httdjc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_httdjc_list");
        self.Retrieve_httdjc();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_khkygz = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_khkygz_list");
        self.Retrieve_khkygz();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_sd = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_sd_list");
        self.Retrieve_sd();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_khhygz = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_khhygz_list");
        self.Retrieve_khhygz();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_kybzj = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xxcx.W_XxcxzhxxcxList", "dw_xxcx_zhxxcx_kybzj_list");
        self.Retrieve_khhygz();
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_td = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

    }
     //#endregion

     //#region 获得字段焦点
     this.RbuttonDown_hycqf = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

     //#region 获得字段焦点
     this.RbuttonDown_sj = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

      //#region 获得字段焦点
     this.RbuttonDown_hgbzj = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

      //#region 获得字段焦点
     this.RbuttonDown_jzxjbxx = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

      //#region 获得字段焦点
     this.RbuttonDown_jzxcwxx = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

      //#region 获得字段焦点
     this.RbuttonDown_spxx = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

     //#region 获得字段焦点
     this.RbuttonDown_gjyf = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

     //#region 获得字段焦点
     this.RbuttonDown_httdjc = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion


     //#region 获得字段焦点
     this.RbuttonDown_khkygz = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion


     //#region 获得字段焦点
     this.RbuttonDown_sd = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion


     //#region 获得字段焦点
     this.RbuttonDown_khhygz = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion

     //#region 获得字段焦点
     this.RbuttonDown_kybzj = function (dwo, xPos, yPos, Row, dwoName) {
         cloname = dwoName;

     }
     //#endregion


    //#region 复制字段内容
    this.CopyCol_td = function () {
        var copytext = "";
        var row = dw_td.GetRow();
        if (row <= 0)
            return;
        colType = dw_td.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_td.GetItemString(dw_td.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_td.GetItemDate(dw_td.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_td.GetItemNumber(dw_td.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_hycqf = function () {
        var copytext = "";
        var row = dw_hycqf.GetRow();
        if (row <= 0)
            return;
        colType = dw_hycqf.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_hycqf.GetItemString(dw_hycqf.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_hycqf.GetItemDate(dw_hycqf.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_hycqf.GetItemNumber(dw_hycqf.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_sj = function () {
        var copytext = "";
        var row = dw_sj.GetRow();
        if (row <= 0)
            return;
        colType = dw_sj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_sj.GetItemString(dw_sj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_sj.GetItemDate(dw_sj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_sj.GetItemNumber(dw_sj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

     //#region 复制字段内容
    this.CopyCol_hgbzj = function () {
        var copytext = "";
        var row = dw_hgbzj.GetRow();
        if (row <= 0)
            return;
        colType = dw_hgbzj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_hgbzj.GetItemString(dw_hgbzj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_hgbzj.GetItemDate(dw_hgbzj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_hgbzj.GetItemNumber(dw_hgbzj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


 //#region 复制字段内容
    this.CopyCol_jzxjbxx = function () {
        var copytext = "";
        var row = dw_jzxjbxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_jzxjbxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_jzxjbxx.GetItemString(dw_jzxjbxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_jzxjbxx.GetItemDate(dw_jzxjbxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_jzxjbxx.GetItemNumber(dw_jzxjbxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


 //#region 复制字段内容
    this.CopyCol_jzxcwxx = function () {
        var copytext = "";
        var row = dw_jzxcwxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_jzxcwxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_jzxcwxx.GetItemString(dw_jzxcwxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_jzxcwxx.GetItemDate(dw_jzxcwxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_jzxcwxx.GetItemNumber(dw_jzxcwxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


 //#region 复制字段内容
    this.CopyCol_spxx = function () {
        var copytext = "";
        var row = dw_spxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_spxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_spxx.GetItemString(dw_spxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_spxx.GetItemDate(dw_spxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_spxx.GetItemNumber(dw_spxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_gjyf = function () {
        var copytext = "";
        var row = dw_gjyf.GetRow();
        if (row <= 0)
            return;
        colType = dw_gjyf.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_gjyf.GetItemString(dw_gjyf.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_gjyf.GetItemDate(dw_gjyf.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_gjyf.GetItemNumber(dw_gjyf.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_httdjc = function () {
        var copytext = "";
        var row = dw_httdjc.GetRow();
        if (row <= 0)
            return;
        colType = dw_httdjc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_httdjc.GetItemString(dw_httdjc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_httdjc.GetItemDate(dw_httdjc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_httdjc.GetItemNumber(dw_httdjc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_khkygz = function () {
        var copytext = "";
        var row = dw_khkygz.GetRow();
        if (row <= 0)
            return;
        colType = dw_khkygz.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_khkygz.GetItemString(dw_khkygz.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_khkygz.GetItemDate(dw_khkygz.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_khkygz.GetItemNumber(dw_khkygz.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_sd = function () {
        var copytext = "";
        var row = dw_sd.GetRow();
        if (row <= 0)
            return;
        colType = dw_sd.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_sd.GetItemString(dw_sd.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_sd.GetItemDate(dw_sd.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_sd.GetItemNumber(dw_sd.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_khhygz = function () {
        var copytext = "";
        var row = dw_khhygz.GetRow();
        if (row <= 0)
            return;
        colType = dw_khhygz.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_khhygz.GetItemString(dw_khhygz.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_khhygz.GetItemDate(dw_khhygz.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_khhygz.GetItemNumber(dw_khhygz.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_kybzj = function () {
        var copytext = "";
        var row = dw_kybzj.GetRow();
        if (row <= 0)
            return;
        colType = dw_kybzj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_kybzj.GetItemString(dw_kybzj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_kybzj.GetItemDate(dw_kybzj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_kybzj.GetItemNumber(dw_kybzj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 过滤主提单号
    this.em_ztdh_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

         dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

         dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

         dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

         dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(ztdh) like Upper('%" + text + "%'))");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);

    }
    //#endregion

    //#region 过滤汇总集装箱号
    this.em_hz_jzxh_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(jzxh) like Upper('%" + text + "%'))");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

        dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

        dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(jzxh) like Upper('%" + text + "%'))");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

        dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(jzxxx_jzxh) like Upper('%" + text + "%'))");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

        dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);


        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(jzxh) like Upper('%" + text + "%'))");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(jzxh) like Upper('%" + text + "%'))");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);

    }
    //#endregion

    //#region 过滤国外供应商
    this.em_gwgys_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

          dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

          dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

          dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

          dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);


    }
    //#endregion

    //#region 过滤汇总商品
    this.em_sp_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

        dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

        dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

        dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

        dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(hz_spmc) like '%" + text + "%')  or ( Lower(hz_spmc) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);


    }
    //#endregion

    //#region 过滤原产地
    this.em_ycd_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

         dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

         dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

         dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

         dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(ycd) like '%" + text + "%')  or ( Lower(ycd) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);

    }
    //#endregion

    //#region 过滤承运人
    this.em_cyr_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

        dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

        dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

        dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

        dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);


        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(cyr) like '%" + text + "%')  or ( Lower(cyr) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);

    }
    //#endregion


    //#region 过滤合同号
    this.em_hth_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

         dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

         dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

         dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

         dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(hth) like '%" + text + "%')  or ( Lower(hth) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);
    }
    //#endregion


    //#region 过滤业务编号
    this.em_ywbh_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

        dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

        dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

        dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

        dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(ywbh) like '%" + text + "%')  or ( Lower(ywbh) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);

    }
    //#endregion


    //#region 过滤报关单号
    this.em_bgdh_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

        dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

        dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

        dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

        dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(bgdh) like '%" + text + "%')  or ( Lower(bgdh) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);


    }
    //#endregion


    //#region 过滤通关单号
    this.em_tgdh_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

        dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

        dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

        dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

        dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);

        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(tgdh) like '%" + text + "%')  or ( Lower(tgdh) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);
    }
    //#endregion

    //#region 过滤客户
    this.em_kh_EditChanged = function (text) {
        dw_td.SetRedraw(false);
        if (text == "")
            dw_td.SetFilter("");
        else
            dw_td.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_td.Filter();
        dw_td.Sort();
        dw_td.SetRedraw(true);

        dw_hycqf.SetRedraw(false);
        if (text == "")
            dw_hycqf.SetFilter("");
        else
            dw_hycqf.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_hycqf.Filter();
        dw_hycqf.Sort();
        dw_hycqf.SetRedraw(true);

        dw_sj.SetRedraw(false);
        if (text == "")
            dw_sj.SetFilter("");
        else
            dw_sj.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_sj.Filter();
        dw_sj.Sort();
        dw_sj.SetRedraw(true);

        dw_hgbzj.SetRedraw(false);
        if (text == "")
            dw_hgbzj.SetFilter("");
        else
            dw_hgbzj.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_hgbzj.Filter();
        dw_hgbzj.Sort();
        dw_hgbzj.SetRedraw(true);

        dw_jzxjbxx.SetRedraw(false);
        if (text == "")
            dw_jzxjbxx.SetFilter("");
        else
            dw_jzxjbxx.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_jzxjbxx.Filter();
        dw_jzxjbxx.Sort();
        dw_jzxjbxx.SetRedraw(true);

        dw_jzxcwxx.SetRedraw(false);
        if (text == "")
            dw_jzxcwxx.SetFilter("");
        else
            dw_jzxcwxx.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_jzxcwxx.Filter();
        dw_jzxcwxx.Sort();
        dw_jzxcwxx.SetRedraw(true);

        dw_spxx.SetRedraw(false);
        if (text == "")
            dw_spxx.SetFilter("");
        else
            dw_spxx.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_spxx.Filter();
        dw_spxx.Sort();
        dw_spxx.SetRedraw(true);


        dw_gjyf.SetRedraw(false);
        if (text == "")
            dw_gjyf.SetFilter("");
        else
            dw_gjyf.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_gjyf.Filter();
        dw_gjyf.Sort();
        dw_gjyf.SetRedraw(true);

        dw_httdjc.SetRedraw(false);
        if (text == "")
            dw_httdjc.SetFilter("");
        else
            dw_httdjc.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_httdjc.Filter();
        dw_httdjc.Sort();
        dw_httdjc.SetRedraw(true);

        dw_khkygz.SetRedraw(false);
        if (text == "")
            dw_khkygz.SetFilter("");
        else
            dw_khkygz.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_khkygz.Filter();
        dw_khkygz.Sort();
        dw_khkygz.SetRedraw(true);

        dw_sd.SetRedraw(false);
        if (text == "")
            dw_sd.SetFilter("");
        else
            dw_sd.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_sd.Filter();
        dw_sd.Sort();
        dw_sd.SetRedraw(true);

        dw_khhygz.SetRedraw(false);
        if (text == "")
            dw_khhygz.SetFilter("");
        else
            dw_khhygz.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_khhygz.Filter();
        dw_khhygz.Sort();
        dw_khhygz.SetRedraw(true);

        dw_kybzj.SetRedraw(false);
        if (text == "")
            dw_kybzj.SetFilter("");
        else
            dw_kybzj.SetFilter("( Upper(khmc) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%')");
        dw_kybzj.Filter();
        dw_kybzj.Sort();
        dw_kybzj.SetRedraw(true);

    }
    //#endregion
}
