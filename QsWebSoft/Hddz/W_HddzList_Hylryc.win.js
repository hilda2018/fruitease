///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Hylryc() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_cgqsr= new DataWindow( requestor );
	 var mle_2= new MultiLineEdit( requestor );
	 var dw_jscsj= new DataWindow( requestor );
	 var mle_1= new MultiLineEdit( requestor );
	 var dw_fscsj= new DataWindow( requestor );
	 var mle_3= new MultiLineEdit( requestor );
	 var dw_sjkgsj= new DataWindow( requestor );
	 var mle_4= new MultiLineEdit( requestor );
	 var dw_cjydsr= new DataWindow( requestor );
	 var mle_5= new MultiLineEdit( requestor );
	 var dw_dcsj= new DataWindow( requestor );
	 var mle_6= new MultiLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var ddlb_jdr= new DropDownListBox( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ContextMenuStrip3= new ContextMenu( requestor );
	 var ContextMenuStrip4= new ContextMenu( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
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
	 var ContextMenuStrip15= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_2= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_cgqsr == null ) dw_cgqsr= new DataWindow( requestor );
		 dw_cgqsr.Attach( win.Control( "dw_cgqsr") ); 
		 if(mle_2 == null ) mle_2= new MultiLineEdit( requestor );
		 mle_2.Attach( win.Control( "mle_2") ); 
		 if(dw_jscsj == null ) dw_jscsj= new DataWindow( requestor );
		 dw_jscsj.Attach( win.Control( "dw_jscsj") ); 
		 if(mle_1 == null ) mle_1= new MultiLineEdit( requestor );
		 mle_1.Attach( win.Control( "mle_1") ); 
		 if(dw_fscsj == null ) dw_fscsj= new DataWindow( requestor );
		 dw_fscsj.Attach( win.Control( "dw_fscsj") ); 
		 if(mle_3 == null ) mle_3= new MultiLineEdit( requestor );
		 mle_3.Attach( win.Control( "mle_3") ); 
		 if(dw_sjkgsj == null ) dw_sjkgsj= new DataWindow( requestor );
		 dw_sjkgsj.Attach( win.Control( "dw_sjkgsj") ); 
		 if(mle_4 == null ) mle_4= new MultiLineEdit( requestor );
		 mle_4.Attach( win.Control( "mle_4") ); 
		 if(dw_cjydsr == null ) dw_cjydsr= new DataWindow( requestor );
		 dw_cjydsr.Attach( win.Control( "dw_cjydsr") ); 
		 if(mle_5 == null ) mle_5= new MultiLineEdit( requestor );
		 mle_5.Attach( win.Control( "mle_5") ); 
		 if(dw_dcsj == null ) dw_dcsj= new DataWindow( requestor );
		 dw_dcsj.Attach( win.Control( "dw_dcsj") ); 
		 if(mle_6 == null ) mle_6= new MultiLineEdit( requestor );
		 mle_6.Attach( win.Control( "mle_6") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 
		 if(ddlb_jdr == null ) ddlb_jdr= new DropDownListBox( requestor );
		 ddlb_jdr.Attach( win.Control( "ddlb_jdr") ); 
		 if(ContextMenuStrip2 == null ) ContextMenuStrip2= new ContextMenu( requestor );
		 ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2") ); 
		 if(ContextMenuStrip3 == null ) ContextMenuStrip3= new ContextMenu( requestor );
		 ContextMenuStrip3.Attach( win.Control( "ContextMenuStrip3") ); 
		 if(ContextMenuStrip4 == null ) ContextMenuStrip4= new ContextMenu( requestor );
		 ContextMenuStrip4.Attach( win.Control( "ContextMenuStrip4") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
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
		 if(ContextMenuStrip15 == null ) ContextMenuStrip15= new ContextMenu( requestor );
		 ContextMenuStrip15.Attach( win.Control( "ContextMenuStrip15") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_2 == null ) ds_2= new DataStore( requestor );
		 ds_2.Attach( win.Control( "ds_2") ); 

		 if(typeof(self.OpenYcyy_Fxsc)=="function") 
			 win.AttachEvent("window","Clicked",self.OpenYcyy_Fxsc); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("window","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_hdyc_Clicked)=="function") 
			 win.AttachEvent("dw_cgqsr","Clicked",self.dw_hdyc_Clicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_cgqsr","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_cgqsr_GetFocus)=="function") 
			 win.AttachEvent("dw_cgqsr","GetFocus",self.dw_cgqsr_GetFocus); 

		 if(typeof(self.dw_hdyc_ItemChanged)=="function") 
			 win.AttachEvent("dw_cgqsr","ItemChanged",self.dw_hdyc_ItemChanged); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_cgqsr","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_cgqsr","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_hdyc_Clicked)=="function") 
			 win.AttachEvent("dw_jscsj","Clicked",self.dw_hdyc_Clicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_jscsj","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_jscsj_GetFocus)=="function") 
			 win.AttachEvent("dw_jscsj","GetFocus",self.dw_jscsj_GetFocus); 

		 if(typeof(self.dw_hdyc_ItemChanged)=="function") 
			 win.AttachEvent("dw_jscsj","ItemChanged",self.dw_hdyc_ItemChanged); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_jscsj","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_jscsj","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_hdyc_Clicked)=="function") 
			 win.AttachEvent("dw_fscsj","Clicked",self.dw_hdyc_Clicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_fscsj","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_fscsj_GetFocus)=="function") 
			 win.AttachEvent("dw_fscsj","GetFocus",self.dw_fscsj_GetFocus); 

		 if(typeof(self.dw_hdyc_ItemChanged)=="function") 
			 win.AttachEvent("dw_fscsj","ItemChanged",self.dw_hdyc_ItemChanged); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_fscsj","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_fscsj","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_hdyc_Clicked)=="function") 
			 win.AttachEvent("dw_sjkgsj","Clicked",self.dw_hdyc_Clicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_sjkgsj","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_sjkgsj_GetFocus)=="function") 
			 win.AttachEvent("dw_sjkgsj","GetFocus",self.dw_sjkgsj_GetFocus); 

		 if(typeof(self.dw_hdyc_ItemChanged)=="function") 
			 win.AttachEvent("dw_sjkgsj","ItemChanged",self.dw_hdyc_ItemChanged); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_sjkgsj","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_sjkgsj","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_cjydsr_Clicked)=="function") 
			 win.AttachEvent("dw_cjydsr","Clicked",self.dw_cjydsr_Clicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_cjydsr","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_cjydsr_GetFocus)=="function") 
			 win.AttachEvent("dw_cjydsr","GetFocus",self.dw_cjydsr_GetFocus); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_cjydsr","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_cjydsr","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_dcsj_Clicked)=="function") 
			 win.AttachEvent("dw_dcsj","Clicked",self.dw_dcsj_Clicked); 

		 if(typeof(self.dw_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_dcsj","DwnMouseMove",self.dw_DwnMouseMove); 

		 if(typeof(self.dw_dcsj_GetFocus)=="function") 
			 win.AttachEvent("dw_dcsj","GetFocus",self.dw_dcsj_GetFocus); 

		 if(typeof(self.dw_hdyc_ItemChanged)=="function") 
			 win.AttachEvent("dw_dcsj","ItemChanged",self.dw_hdyc_ItemChanged); 

		 if(typeof(self.dw_LButtonDown)=="function") 
			 win.AttachEvent("dw_dcsj","LButtonDown",self.dw_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_dcsj","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Help)=="function") 
			 win.AttachEvent("btn_Help","Clicked",self.Help); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_jdr","SelectionChanged",self.Retrieve); 

		 if(typeof(self.BeiZhu)=="function") 
			 win.AttachEvent("btn_BeiZhu","Clicked",self.BeiZhu); 

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

		 if(typeof(self.Filter_wxqk)=="function") 
			 win.AttachEvent("m_35","Clicked",self.Filter_wxqk); 

		 if(typeof(self.Filter_Cancle_wxqk)=="function") 
			 win.AttachEvent("m_37","Clicked",self.Filter_Cancle_wxqk); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_40","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_wxqk)=="function") 
			 win.AttachEvent("m_42","Clicked",self.CopyCol_wxqk); 

		 if(typeof(self.CopySelect_wxqk)=="function") 
			 win.AttachEvent("m_43","Clicked",self.CopySelect_wxqk); 

		 if(typeof(self.CopyL_wxqk)=="function") 
			 win.AttachEvent("m_44","Clicked",self.CopyL_wxqk); 

		 if(typeof(self.Recover_wxqk)=="function") 
			 win.AttachEvent("m_45","Clicked",self.Recover_wxqk); 

		 if(typeof(self.Filter_tgyc)=="function") 
			 win.AttachEvent("m_46","Clicked",self.Filter_tgyc); 

		 if(typeof(self.Filter_Cancle_tgyc)=="function") 
			 win.AttachEvent("m_48","Clicked",self.Filter_Cancle_tgyc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_51","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_tgyc)=="function") 
			 win.AttachEvent("m_53","Clicked",self.CopyCol_tgyc); 

		 if(typeof(self.CopySelect_tgyc)=="function") 
			 win.AttachEvent("m_54","Clicked",self.CopySelect_tgyc); 

		 if(typeof(self.CopyL_tgyc)=="function") 
			 win.AttachEvent("m_55","Clicked",self.CopyL_tgyc); 

		 if(typeof(self.Recover_tgyc)=="function") 
			 win.AttachEvent("m_56","Clicked",self.Recover_tgyc); 

		 if(typeof(self.Filter_fxyc)=="function") 
			 win.AttachEvent("m_57","Clicked",self.Filter_fxyc); 

		 if(typeof(self.Filter_Cancle_fxyc)=="function") 
			 win.AttachEvent("m_59","Clicked",self.Filter_Cancle_fxyc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_62","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_fxyc)=="function") 
			 win.AttachEvent("m_64","Clicked",self.CopyCol_fxyc); 

		 if(typeof(self.CopySelect_fxyc)=="function") 
			 win.AttachEvent("m_65","Clicked",self.CopySelect_fxyc); 

		 if(typeof(self.CopyL_fxyc)=="function") 
			 win.AttachEvent("m_66","Clicked",self.CopyL_fxyc); 

		 if(typeof(self.Recover_fxyc)=="function") 
			 win.AttachEvent("m_67","Clicked",self.Recover_fxyc); 

		 if(typeof(self.Filter_bjtgyc)=="function") 
			 win.AttachEvent("m_68","Clicked",self.Filter_bjtgyc); 

		 if(typeof(self.Filter_Cancle_bjtgyc)=="function") 
			 win.AttachEvent("m_70","Clicked",self.Filter_Cancle_bjtgyc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_73","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_bjtgyc)=="function") 
			 win.AttachEvent("m_75","Clicked",self.CopyCol_bjtgyc); 

		 if(typeof(self.CopySelect_bjtgyc)=="function") 
			 win.AttachEvent("m_76","Clicked",self.CopySelect_bjtgyc); 

		 if(typeof(self.CopyL_bjtgyc)=="function") 
			 win.AttachEvent("m_77","Clicked",self.CopyL_bjtgyc); 

		 if(typeof(self.Recover_bjtgyc)=="function") 
			 win.AttachEvent("m_78","Clicked",self.Recover_bjtgyc); 

		 if(typeof(self.Filter_gjyc)=="function") 
			 win.AttachEvent("m_79","Clicked",self.Filter_gjyc); 

		 if(typeof(self.Filter_Cancle_gjyc)=="function") 
			 win.AttachEvent("m_81","Clicked",self.Filter_Cancle_gjyc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_84","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_gjyc)=="function") 
			 win.AttachEvent("m_86","Clicked",self.CopyCol_gjyc); 

		 if(typeof(self.CopySelect_gjyc)=="function") 
			 win.AttachEvent("m_87","Clicked",self.CopySelect_gjyc); 

		 if(typeof(self.CopyL_gjyc)=="function") 
			 win.AttachEvent("m_88","Clicked",self.CopyL_gjyc); 

		 if(typeof(self.Recover_gjyc)=="function") 
			 win.AttachEvent("m_89","Clicked",self.Recover_gjyc); 

		 if(typeof(self.Filter_hdyc)=="function") 
			 win.AttachEvent("m_90","Clicked",self.Filter_hdyc); 

		 if(typeof(self.Filter_Cancle_hdyc)=="function") 
			 win.AttachEvent("m_92","Clicked",self.Filter_Cancle_hdyc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_95","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_hdyc)=="function") 
			 win.AttachEvent("m_97","Clicked",self.CopyCol_hdyc); 

		 if(typeof(self.CopySelect_hdyc)=="function") 
			 win.AttachEvent("m_98","Clicked",self.CopySelect_hdyc); 

		 if(typeof(self.CopyL_hdyc)=="function") 
			 win.AttachEvent("m_99","Clicked",self.CopyL_hdyc); 

		 if(typeof(self.Recover_hdyc)=="function") 
			 win.AttachEvent("m_100","Clicked",self.Recover_hdyc); 

		 if(typeof(self.Filter_cgqsr)=="function") 
			 win.AttachEvent("m_101","Clicked",self.Filter_cgqsr); 

		 if(typeof(self.Filter_Cancle_cgqsr)=="function") 
			 win.AttachEvent("m_103","Clicked",self.Filter_Cancle_cgqsr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_106","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_cgqsr)=="function") 
			 win.AttachEvent("m_108","Clicked",self.CopyCol_cgqsr); 

		 if(typeof(self.CopySelect_cgqsr)=="function") 
			 win.AttachEvent("m_109","Clicked",self.CopySelect_cgqsr); 

		 if(typeof(self.CopyL_cgqsr)=="function") 
			 win.AttachEvent("m_110","Clicked",self.CopyL_cgqsr); 

		 if(typeof(self.Recover_cgqsr)=="function") 
			 win.AttachEvent("m_111","Clicked",self.Recover_cgqsr); 

		 if(typeof(self.Filter_jscsj)=="function") 
			 win.AttachEvent("m_112","Clicked",self.Filter_jscsj); 

		 if(typeof(self.Filter_Cancle_jscsj)=="function") 
			 win.AttachEvent("m_114","Clicked",self.Filter_Cancle_jscsj); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_117","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_jscsj)=="function") 
			 win.AttachEvent("m_119","Clicked",self.CopyCol_jscsj); 

		 if(typeof(self.CopySelect_jscsj)=="function") 
			 win.AttachEvent("m_120","Clicked",self.CopySelect_jscsj); 

		 if(typeof(self.CopyL_jscsj)=="function") 
			 win.AttachEvent("m_121","Clicked",self.CopyL_jscsj); 

		 if(typeof(self.Recover_jscsj)=="function") 
			 win.AttachEvent("m_122","Clicked",self.Recover_jscsj); 

		 if(typeof(self.Filter_fscsj)=="function") 
			 win.AttachEvent("m_123","Clicked",self.Filter_fscsj); 

		 if(typeof(self.Filter_Cancle_fscsj)=="function") 
			 win.AttachEvent("m_125","Clicked",self.Filter_Cancle_fscsj); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_128","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_fscsj)=="function") 
			 win.AttachEvent("m_130","Clicked",self.CopyCol_fscsj); 

		 if(typeof(self.CopySelect_fscsj)=="function") 
			 win.AttachEvent("m_131","Clicked",self.CopySelect_fscsj); 

		 if(typeof(self.CopyL_fscsj)=="function") 
			 win.AttachEvent("m_132","Clicked",self.CopyL_fscsj); 

		 if(typeof(self.Recover_fscsj)=="function") 
			 win.AttachEvent("m_133","Clicked",self.Recover_fscsj); 

		 if(typeof(self.Filter_hdyc)=="function") 
			 win.AttachEvent("m_134","Clicked",self.Filter_hdyc); 

		 if(typeof(self.Filter_Cancle_hdyc)=="function") 
			 win.AttachEvent("m_136","Clicked",self.Filter_Cancle_hdyc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_139","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_hdyc)=="function") 
			 win.AttachEvent("m_141","Clicked",self.CopyCol_hdyc); 

		 if(typeof(self.CopySelect_hdyc)=="function") 
			 win.AttachEvent("m_142","Clicked",self.CopySelect_hdyc); 

		 if(typeof(self.CopyL_hdyc)=="function") 
			 win.AttachEvent("m_143","Clicked",self.CopyL_hdyc); 

		 if(typeof(self.Recover_hdyc)=="function") 
			 win.AttachEvent("m_144","Clicked",self.Recover_hdyc); 

		 if(typeof(self.Filter_hdyc)=="function") 
			 win.AttachEvent("m_145","Clicked",self.Filter_hdyc); 

		 if(typeof(self.Filter_Cancle_hdyc)=="function") 
			 win.AttachEvent("m_147","Clicked",self.Filter_Cancle_hdyc); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_150","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_hdyc)=="function") 
			 win.AttachEvent("m_152","Clicked",self.CopyCol_hdyc); 

		 if(typeof(self.CopySelect_hdyc)=="function") 
			 win.AttachEvent("m_153","Clicked",self.CopySelect_hdyc); 

		 if(typeof(self.CopyL_hdyc)=="function") 
			 win.AttachEvent("m_154","Clicked",self.CopyL_hdyc); 

		 if(typeof(self.Recover_hdyc)=="function") 
			 win.AttachEvent("m_155","Clicked",self.Recover_hdyc); 

		 if(typeof(self.Filter_cgqsr)=="function") 
			 win.AttachEvent("m_156","Clicked",self.Filter_cgqsr); 

		 if(typeof(self.Filter_Cancle_cgqsr)=="function") 
			 win.AttachEvent("m_158","Clicked",self.Filter_Cancle_cgqsr); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_161","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_cgqsr)=="function") 
			 win.AttachEvent("m_163","Clicked",self.CopyCol_cgqsr); 

		 if(typeof(self.CopySelect_cgqsr)=="function") 
			 win.AttachEvent("m_164","Clicked",self.CopySelect_cgqsr); 

		 if(typeof(self.CopyL_cgqsr)=="function") 
			 win.AttachEvent("m_165","Clicked",self.CopyL_cgqsr); 

		 if(typeof(self.Recover_cgqsr)=="function") 
			 win.AttachEvent("m_166","Clicked",self.Recover_cgqsr); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_cgqsr.Detach(); dw_cgqsr=null; 
		 mle_2.Detach(); mle_2=null; 
		 dw_jscsj.Detach(); dw_jscsj=null; 
		 mle_1.Detach(); mle_1=null; 
		 dw_fscsj.Detach(); dw_fscsj=null; 
		 mle_3.Detach(); mle_3=null; 
		 dw_sjkgsj.Detach(); dw_sjkgsj=null; 
		 mle_4.Detach(); mle_4=null; 
		 dw_cjydsr.Detach(); dw_cjydsr=null; 
		 mle_5.Detach(); mle_5=null; 
		 dw_dcsj.Detach(); dw_dcsj=null; 
		 mle_6.Detach(); mle_6=null; 
		 tb_1.Detach(); tb_1=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 ddlb_jdr.Detach(); ddlb_jdr=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ContextMenuStrip3.Detach(); ContextMenuStrip3=null; 
		 ContextMenuStrip4.Detach(); ContextMenuStrip4=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
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
		 ContextMenuStrip15.Detach(); ContextMenuStrip15=null; 
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

        //        dw_thsc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        self.SelectionChanged_bgyc();
        //        dw_wxqk.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        self.SelectionChanged_Jyyc();
        //        dw_tgyc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        self.SelectionChanged_tgyc();
        //        dw_fxyc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        self.SelectionChanged_fxyc();
        //        dw_bjtgyc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        self.SelectionChanged_bjtgyc();
        //        dw_gjyc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        self.SelectionChanged_gjyc();
        //        dw_hdyc.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        self.SelectionChanged_hdyc();
        dw_cgqsr.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);

        dw_jscsj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);

        dw_fscsj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);

        dw_sjkgsj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);

        dw_cjydsr.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);

        dw_dcsj.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jdr);

        //        dw_bqqk.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        dw_wdqk.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);
        //        dw_gqdjyd.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), rqlx);

    }
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_cgqsr_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jscsj_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_fscsj_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_sjkgsj_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_cjydsr_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_dcsj_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    var iw_Hddz_Ywkh_BeiZhu = null;
    this.BeiZhu = function () {
        if (lastdw.GetName() == "dw_cgqsr") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_cgqsr.GetRow();
            var ywbh = dw_cgqsr.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = dw_cgqsr.GetItemString(row, "jzxh");
            var cdphbm = "";
            var mkm = "dw_cgqsr";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_cgqsr.SetFocus();
        }
        if (lastdw.GetName() == "dw_jscsj") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_jscsj.GetRow();
            var ywbh = dw_jscsj.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = dw_jscsj.GetItemString(row, "jzxh");
            var cdphbm = "";
            var mkm = "dw_jscsj";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_jscsj.SetFocus();
        }
        if (lastdw.GetName() == "dw_fscsj") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_fscsj.GetRow();
            var ywbh = dw_fscsj.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = dw_fscsj.GetItemString(row, "jzxh");
            var cdphbm = "";
            var mkm = "dw_fscsj";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_fscsj.SetFocus();
        }
        if (lastdw.GetName() == "dw_sjkgsj") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_sjkgsj.GetRow();
            var ywbh = dw_sjkgsj.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = "";
            var cdphbm = "";
            var mkm = "dw_sjkgsj";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_sjkgsj.SetFocus();
        }
        if (lastdw.GetName() == "dw_cjydsr") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_cjydsr.GetRow();
            var ywbh = dw_cjydsr.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = dw_cjydsr.GetItemString(row, "jzxh");
            var cdphbm = "";
            var mkm = "dw_cjydsr";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_cjydsr.SetFocus();
        }
        if (lastdw.GetName() == "dw_dcsj") {
            if (iw_Hddz_Ywkh_BeiZhu == null)
                iw_Hddz_Ywkh_BeiZhu = new W_Hddz_Ywkh_BeiZhu();
            var row = dw_dcsj.GetRow();
            var ywbh = dw_dcsj.GetItemString(row, "ywbh");
            var cxh = "";
            var jzxh = dw_dcsj.GetItemString(row, "jzxh");
            var cdphbm = "";
            var mkm = "dw_dcsj";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ywkh_BeiZhu&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&cxh=" + cxh + "&jzxh=" + jzxh + "&cdphbm=" + cdphbm + "&mkm=" + mkm, iw_Hddz_Ywkh_BeiZhu);
            dw_dcsj.SetFocus();
        }
    }

    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
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
    this.SelectionChanged_bgyc = function (text) {
        var ycclzt_bgyc = ddlb_bgyc.GetText();
        var ls_filter = "";
        if (ycclzt_bgyc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_bgyc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_thsc.SetRedraw(false);
        dw_thsc.SetFilter(ls_filter);
        dw_thsc.Filter();
        dw_thsc.Sort();
        dw_thsc.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_Jyyc = function (text) {
        var ycclzt_jyyc = ddlb_jyyc.GetText();
        var ls_filter = "";
        if (ycclzt_jyyc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_jyyc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_wxqk.SetRedraw(false);
        dw_wxqk.SetFilter(ls_filter);
        dw_wxqk.Filter();
        dw_wxqk.Sort();
        dw_wxqk.SetRedraw(true);
    }
    //#endregion 


    //#region 过滤处理状态
    this.SelectionChanged_tgyc = function (text) {
        var ls_filter = "";
        var ycclzt_tgyc = ddlb_tgyc.GetText();
        if (ycclzt_tgyc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_tgyc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_tgyc.SetRedraw(false);
        dw_tgyc.SetFilter(ls_filter);
        dw_tgyc.Filter();
        dw_tgyc.Sort();
        dw_tgyc.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_fxyc = function (text) {
        var ls_filter = "";
        var ycclzt_fxyc = ddlb_fxyc.GetText();
        if (ycclzt_fxyc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_fxyc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_fxyc.SetRedraw(false);
        dw_fxyc.SetFilter(ls_filter);
        dw_fxyc.Filter();
        dw_fxyc.Sort();
        dw_fxyc.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_gjyc = function (text) {
        var ls_filter = "";
        var ycclzt_gjyc = ddlb_gjyc.GetText();
        if (ycclzt_gjyc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_gjyc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_gjyc.SetRedraw(false);
        dw_gjyc.SetFilter(ls_filter);
        dw_gjyc.Filter();
        dw_gjyc.Sort();
        dw_gjyc.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_hdyc = function (text) {
        var ls_filter = "";
        var ycclzt_hdyc = ddlb_hdyc.GetText();
        if (ycclzt_hdyc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_hdyc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_hdyc.SetRedraw(false);
        dw_hdyc.SetFilter(ls_filter);
        dw_hdyc.Filter();
        dw_hdyc.Sort();
        dw_hdyc.SetRedraw(true);
    }
    //#endregion 

    //#region 过滤处理状态
    this.SelectionChanged_bjtgyc = function (text) {
        var ls_filter = "";
        var ycclzt_bjtgyc = ddlb_bjtgyc.GetText();
        if (ycclzt_bjtgyc == "未处理") {
            ls_filter = "ycclzt = 'N'";
        } else if (ycclzt_bjtgyc == "已处理") {
            ls_filter = "ycclzt = 'Y'";
        }

        dw_bjtgyc.SetRedraw(false);
        dw_bjtgyc.SetFilter(ls_filter);
        dw_bjtgyc.Filter();
        dw_bjtgyc.Sort();
        dw_bjtgyc.SetRedraw(true);
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

    

    //#region 恢复默认列
    this.Recover_fxsc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_fxsc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_tdsc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_tdsc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_wxqk = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_wxqk");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_tgyc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_tgyc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_fxyc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_fxyc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_sjkgsj = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_sjkgsj");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_hdyc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_hdyc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_cjydsr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_cjydsr");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_cgqsr = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_cgqsr");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_jscsj = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_jscsj");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_fscsj = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_fscsj");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_gjyc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_gjyc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_bjtgyc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_bjtgyc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_bjtgyc = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_bjtgyc");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_bqqk = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_bqqk");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_wdqk = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_wdqk");
        self.Retrieve();
    }
    //#endregion

    //#region 恢复默认列
    this.Recover_gqdjyd = function () {
        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hyycgz", "dw_hddz_list_hyycgz_gqdjyd");
        self.Retrieve();
    }
    //#endregion



    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

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
    this.CopyCol_tgyc = function () {
        var copytext = "";
        var row = dw_tgyc.GetRow();
        if (row <= 0)
            return;
        colType = dw_tgyc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_tgyc.GetItemString(dw_tgyc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_tgyc.GetItemDate(dw_tgyc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_tgyc.GetItemNumber(dw_tgyc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_fxyc = function () {
        var copytext = "";
        var row = dw_fxyc.GetRow();
        if (row <= 0)
            return;
        colType = dw_fxyc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_fxyc.GetItemString(dw_fxyc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_fxyc.GetItemDate(dw_fxyc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_fxyc.GetItemNumber(dw_fxyc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_sjkgsj = function () {
        var copytext = "";
        var row = dw_sjkgsj.GetRow();
        if (row <= 0)
            return;
        colType = dw_sjkgsj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_sjkgsj.GetItemString(dw_sjkgsj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_sjkgsj.GetItemDate(dw_sjkgsj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_sjkgsj.GetItemNumber(dw_sjkgsj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_hdyc = function () {
        var copytext = "";
        var row = dw_hdyc.GetRow();
        if (row <= 0)
            return;
        colType = dw_hdyc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_hdyc.GetItemString(dw_hdyc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_hdyc.GetItemDate(dw_hdyc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_hdyc.GetItemNumber(dw_hdyc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_cjydsr = function () {
        var copytext = "";
        var row = dw_cjydsr.GetRow();
        if (row <= 0)
            return;
        colType = dw_cjydsr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_cjydsr.GetItemString(dw_cjydsr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_cjydsr.GetItemDate(dw_cjydsr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_cjydsr.GetItemNumber(dw_cjydsr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_dcsj = function () {
        var copytext = "";
        var row = dw_dcsj.GetRow();
        if (row <= 0)
            return;
        colType = dw_dcsj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_dcsj.GetItemString(dw_dcsj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_dcsj.GetItemDate(dw_dcsj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_dcsj.GetItemNumber(dw_dcsj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_jscsj = function () {
        var copytext = "";
        var row = dw_jscsj.GetRow();
        if (row <= 0)
            return;
        colType = dw_jscsj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_jscsj.GetItemString(dw_jscsj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_jscsj.GetItemDate(dw_jscsj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_jscsj.GetItemNumber(dw_jscsj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_fscsj = function () {
        var copytext = "";
        var row = dw_fscsj.GetRow();
        if (row <= 0)
            return;
        colType = dw_fscsj.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_fscsj.GetItemString(dw_fscsj.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_fscsj.GetItemDate(dw_fscsj.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_fscsj.GetItemNumber(dw_fscsj.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_cgqsr = function () {
        var copytext = "";
        var row = dw_cgqsr.GetRow();
        if (row <= 0)
            return;
        colType = dw_cgqsr.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_cgqsr.GetItemString(dw_cgqsr.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_cgqsr.GetItemDate(dw_cgqsr.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_cgqsr.GetItemNumber(dw_cgqsr.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);
    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol_gjyc = function () {
        var copytext = "";
        var row = dw_gjyc.GetRow();
        if (row <= 0)
            return;
        colType = dw_gjyc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_gjyc.GetItemString(dw_gjyc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_gjyc.GetItemDate(dw_gjyc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_gjyc.GetItemNumber(dw_gjyc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_bjtgyc = function () {
        var copytext = "";
        var row = dw_bjtgyc.GetRow();
        if (row <= 0)
            return;
        colType = dw_bjtgyc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_bjtgyc.GetItemString(dw_bjtgyc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_bjtgyc.GetItemDate(dw_bjtgyc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_bjtgyc.GetItemNumber(dw_bjtgyc.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol_bjtgyc = function () {
        var copytext = "";
        var row = dw_bjtgyc.GetRow();
        if (row <= 0)
            return;
        colType = dw_bjtgyc.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_bjtgyc.GetItemString(dw_bjtgyc.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_bjtgyc.GetItemDate(dw_bjtgyc.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_bjtgyc.GetItemNumber(dw_bjtgyc.GetRow(), cloname);
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
 

    //#region CloseQuery
    this.CloseQuery = function () {
     


    }
    //#endregion

    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\海运异常跟踪.txt')
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
        iw_Hddz_Ycyy.SetDataWindow(dw_fxsc);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("放行");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion


    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy_Bgyc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_thsc.GetRow();
        var ywbh = dw_thsc.GetItemString(row, "ywbh")
        iw_Hddz_Ycyy.SetDataWindow(dw_thsc);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("报关"); 
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy_Jyyc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_wxqk.GetRow();
        var ywbh = dw_wxqk.GetItemString(row, "ywbh")
        iw_Hddz_Ycyy.SetDataWindow(dw_wxqk);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("检疫"); 
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy_Tgyc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_tgyc.GetRow();
        var ywbh = dw_tgyc.GetItemString(row, "ywbh")
        iw_Hddz_Ycyy.SetDataWindow(dw_tgyc);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("01");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy_Fxyc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_fxyc.GetRow();
        var ywbh = dw_fxyc.GetItemString(row, "ywbh")
        iw_Hddz_Ycyy.SetDataWindow(dw_fxyc);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("放行");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy_Gjyc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_gjyc.GetRow();
        var ywbh = dw_gjyc.GetItemString(row, "ywbh")
        iw_Hddz_Ycyy.SetDataWindow(dw_gjyc);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("国检");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy_Hdyc = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_hdyc.GetRow();
        var ywbh = dw_hdyc.GetItemString(row, "ywbh")
        iw_Hddz_Ycyy.SetDataWindow(dw_hdyc);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("换单");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

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
    this.dw_fxsc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_bgyc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
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
    this.dw_tgyc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_fxyc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_bjtgyc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_gjyc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_hdyc_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_cjydsr_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_dcsj_Clicked = function (xPos, yPos, Row, dwoName, Data) {
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

     
    //#region 报关异常修改状态
    this.dw_bgyc_ItemChanged = function (Row, dwoName, Data) {
        if (dwoName == "ycclzt") { 
             var ywbh = dw_thsc.GetItemString(Row,"ywbh");  
             QsWebSoft.PubMethod.Insert_ycclzt(ywbh,'报关异常',Data).value; 
      
        };
    }
    //#endregion



     //#region 报关异常修改状态
     this.dw_wxqk_ItemChanged = function (Row, dwoName, Data) {
         if (dwoName == "ycclzt") {
             var ywbh = dw_wxqk.GetItemString(Row, "ywbh");
             QsWebSoft.PubMethod.Insert_ycclzt(ywbh, '报检异常', Data).value;

         };
     }
     //#endregion

     //#region 通关异常修改状态
     this.dw_tgyc_ItemChanged = function (Row, dwoName, Data) {
         if (dwoName == "ycclzt") {
             var ywbh = dw_tgyc.GetItemString(Row, "ywbh");
             QsWebSoft.PubMethod.Insert_ycclzt(ywbh, '通关异常', Data).value;

         };
     }
     //#endregion


     //#region 通关异常修改状态
     this.dw_fxyc_ItemChanged = function (Row, dwoName, Data) {
         if (dwoName == "ycclzt") {
             var ywbh = dw_fxyc.GetItemString(Row, "ywbh");
             QsWebSoft.PubMethod.Insert_ycclzt(ywbh, '放行异常', Data).value;

         };
     }
     //#endregion


     //#region 通关异常修改状态
     this.dw_bjtgyc_ItemChanged = function (Row, dwoName, Data) {
         if (dwoName == "ycclzt") {
             var ywbh = dw_bjtgyc.GetItemString(Row, "ywbh");
             QsWebSoft.PubMethod.Insert_ycclzt(ywbh, '报检通过异常', Data).value;

         };
     }
     //#endregion


     //#region 通关异常修改状态
     this.dw_gjyc_ItemChanged = function (Row, dwoName, Data) {
         if (dwoName == "ycclzt") {
             var ywbh = dw_gjyc.GetItemString(Row, "ywbh");
             QsWebSoft.PubMethod.Insert_ycclzt(ywbh, '国检异常', Data).value;

         };
     }
     //#endregion


     //#region 通关异常修改状态
     this.dw_hdyc_ItemChanged = function (Row, dwoName, Data) {
         if (dwoName == "ycclzt") {
             var ywbh = dw_hdyc.GetItemString(Row, "ywbh");
             QsWebSoft.PubMethod.Insert_ycclzt(ywbh, '换单异常', Data).value;

         };
     }
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
        fzjs_row = Row;
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



    //#region 点击开始
    this.dw_LButtonDown = function (flags, xPos, yPos) {
        arr.splice(0, arr.length);
        begin = "Y"
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

    //#region 选择复制
    this.CopySelect_tgyc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_tgyc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_tgyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_tgyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_tgyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_tgyc.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_fxyc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxyc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fxyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fxyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fxyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fxyc.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_sjkgsj = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_sjkgsj.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_sjkgsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_sjkgsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_sjkgsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_sjkgsj.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_hdyc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_hdyc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_hdyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_hdyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_hdyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_hdyc.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_cjydsr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_cjydsr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_cjydsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_cjydsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_cjydsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_cjydsr.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_dcsj = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_dcsj.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_dcsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_dcsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_dcsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_dcsj.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_cgqsr = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_cgqsr.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_cgqsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_cgqsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_cgqsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_cgqsr.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_jscsj = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_jscsj.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_jscsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_jscsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_jscsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_jscsj.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_fscsj = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fscsj.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fscsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fscsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fscsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fscsj.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_gjyc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_gjyc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_gjyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_gjyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_gjyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_gjyc.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_bjtgyc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_bjtgyc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_bjtgyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_bjtgyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_bjtgyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_bjtgyc.GetItemNumber(row, arr[row1]);
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
    this.CopySelect_bjtgyc = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_bjtgyc.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_bjtgyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_bjtgyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_bjtgyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_bjtgyc.GetItemNumber(row, arr[row1]);
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
    this.CopyL_tgyc = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_tgyc.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_tgyc.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_tgyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_tgyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_tgyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_tgyc.GetItemNumber(row, arr[row1]);
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
    this.CopyL_fxyc = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_fxyc.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_fxyc.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_fxyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_fxyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_fxyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_fxyc.GetItemNumber(row, arr[row1]);
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
    this.CopyL_sjkgsj = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_sjkgsj.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_sjkgsj.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_sjkgsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_sjkgsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_sjkgsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_sjkgsj.GetItemNumber(row, arr[row1]);
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
    this.CopyL_hdyc = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_hdyc.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_hdyc.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_hdyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_hdyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_hdyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_hdyc.GetItemNumber(row, arr[row1]);
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
    this.CopyL_cjydsr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_cjydsr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_cjydsr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_cjydsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_cjydsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_cjydsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_cjydsr.GetItemNumber(row, arr[row1]);
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
    this.CopyL_dcsj = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_dcsj.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_cjydsr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_dcsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_dcsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_dcsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_dcsj.GetItemNumber(row, arr[row1]);
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
    this.CopyL_cgqsr = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_cgqsr.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_cgqsr.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_cgqsr.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_cgqsr.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_cgqsr.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_cgqsr.GetItemNumber(row, arr[row1]);
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
    this.CopyL_jscsj = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_jscsj.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_jscsj.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_jscsj.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_jscsj.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_jscsj.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_jscsj.GetItemNumber(row, arr[row1]);
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
    this.CopyL_gjyc = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_gjyc.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_gjyc.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_gjyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_gjyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_gjyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_gjyc.GetItemNumber(row, arr[row1]);
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
    this.CopyL_bjtgyc = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_bjtgyc.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_bjtgyc.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_bjtgyc.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_bjtgyc.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_bjtgyc.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_bjtgyc.GetItemNumber(row, arr[row1]);
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
    this.Filter_tgyc = function () {
        dw_tgyc.AcceptText();
        var row = dw_tgyc.GetRow();
        if (row <= 0)
            return;

        colType = dw_tgyc.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_tgyc);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_tgyc.SetFocus();
        dw_tgyc.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_fxyc = function () {
        dw_fxyc.AcceptText();
        var row = dw_fxyc.GetRow();
        if (row <= 0)
            return;

        colType = dw_fxyc.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_fxyc);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_fxyc.SetFocus();
        dw_fxyc.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_sjkgsj = function () {
        dw_sjkgsj.AcceptText();
        var row = dw_sjkgsj.GetRow();
        if (row <= 0)
            return;

        colType = dw_sjkgsj.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_sjkgsj);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_sjkgsj.SetFocus();
        dw_sjkgsj.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_hdyc = function () {
        dw_hdyc.AcceptText();
        var row = dw_hdyc.GetRow();
        if (row <= 0)
            return;

        colType = dw_hdyc.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_hdyc);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_hdyc.SetFocus();
        dw_hdyc.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_cjydsr = function () {
        dw_cjydsr.AcceptText();
        var row = dw_cjydsr.GetRow();
        if (row <= 0)
            return;

        colType = dw_cjydsr.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_cjydsr);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_cjydsr.SetFocus();
        dw_cjydsr.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_dcsj = function () {
        dw_dcsj.AcceptText();
        var row = dw_dcsj.GetRow();
        if (row <= 0)
            return;

        colType = dw_dcsj.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_dcsj);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_dcsj.SetFocus();
        dw_dcsj.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_cgqsr = function () {
        dw_cgqsr.AcceptText();
        var row = dw_cgqsr.GetRow();
        if (row <= 0)
            return;

        colType = dw_cgqsr.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_cgqsr);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_cgqsr.SetFocus();
        dw_cgqsr.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_jscsj = function () {
        dw_jscsj.AcceptText();
        var row = dw_jscsj.GetRow();
        if (row <= 0)
            return;

        colType = dw_jscsj.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_jscsj);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_jscsj.SetFocus();
        dw_jscsj.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_fscsj = function () {
        dw_fscsj.AcceptText();
        var row = dw_fscsj.GetRow();
        if (row <= 0)
            return;

        colType = dw_fscsj.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_fscsj);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_fscsj.SetFocus();
        dw_fscsj.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_gjyc = function () {
        dw_gjyc.AcceptText();
        var row = dw_gjyc.GetRow();
        if (row <= 0)
            return;

        colType = dw_gjyc.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_gjyc);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_gjyc.SetFocus();
        dw_gjyc.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_bjtgyc = function () {
        dw_bjtgyc.AcceptText();
        var row = dw_bjtgyc.GetRow();
        if (row <= 0)
            return;

        colType = dw_bjtgyc.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_bjtgyc);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_bjtgyc.SetFocus();
        dw_bjtgyc.ScrollToRow(row)


    }
    //#endregion

    //#region 单列过滤
    this.Filter_bjtgyc = function () {
        dw_bjtgyc.AcceptText();
        var row = dw_bjtgyc.GetRow();
        if (row <= 0)
            return;

        colType = dw_bjtgyc.Describe(cloname + ".colType");

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

        iw_Filter.SetDataWindow(dw_bjtgyc);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_bjtgyc.SetFocus();
        dw_bjtgyc.ScrollToRow(row)


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
    this.Filter_Cancle_tgyc = function () {
        dw_tgyc.SetFilter("");
        dw_tgyc.Filter();
        dw_tgyc.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_fxyc = function () {
        dw_fxyc.SetFilter("");
        dw_fxyc.Filter();
        dw_fxyc.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_sjkgsj = function () {
        dw_sjkgsj.SetFilter("");
        dw_sjkgsj.Filter();
        dw_sjkgsj.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_hdyc = function () {
        dw_hdyc.SetFilter("");
        dw_hdyc.Filter();
        dw_hdyc.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_cjydsr = function () {
        dw_cjydsr.SetFilter("");
        dw_cjydsr.Filter();
        dw_cjydsr.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_dcsj = function () {
        dw_dcsj.SetFilter("");
        dw_dcsj.Filter();
        dw_dcsj.SetFocus();
        dw_dcsj.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_cgqsr = function () {
        dw_cgqsr.SetFilter("");
        dw_cgqsr.Filter();
        dw_cgqsr.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_jscsj = function () {
        dw_jscsj.SetFilter("");
        dw_jscsj.Filter();
        dw_jscsj.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_fscsj = function () {
        dw_fscsj.SetFilter("");
        dw_fscsj.Filter();
        dw_fscsj.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_gjyc = function () {
        dw_gjyc.SetFilter("");
        dw_gjyc.Filter();
        dw_gjyc.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_bjtgyc = function () {
        dw_bjtgyc.SetFilter("");
        dw_bjtgyc.Filter();
        dw_bjtgyc.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
    //#region 过滤取消
    this.Filter_Cancle_bjtgyc = function () {
        dw_bjtgyc.SetFilter("");
        dw_bjtgyc.Filter();
        dw_bjtgyc.SetFocus();
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


}
