///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzEdit_Ky() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_forma= new DataWindow( requestor );
	 var dw_print_sjmf_invoice= new DataWindow( requestor );
	 var dw_print_ecczm= new DataWindow( requestor );
	 var dw_print_hczm= new DataWindow( requestor );
	 var dw_print_invoice= new DataWindow( requestor );
	 var dw_zsbh= new DataWindow( requestor );
	 var dw_print_zthqksm= new DataWindow( requestor );
	 var dw_print_contract= new DataWindow( requestor );
	 var dw_print_bzjsqs= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_tdzb= new DataWindow( requestor );
	 var dw_spxx= new DataWindow( requestor );
	 var dw_fpzb= new DataWindow( requestor );
	 var dw_spdhsr= new DataWindow( requestor );
	 var dw_sjbzcl= new DataWindow( requestor );
	 var dw_sjzs= new DataWindow( requestor );
	 var dw_dzqk= new DataWindow( requestor );
	 var dw_sxgsjjl= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var sle_ts= new SingleLineEdit( requestor );
	 var dw_print_sjmf_packinglist= new DataWindow( requestor );
	 var dw_sjsfdj= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dw_print_qksm= new DataWindow( requestor );
	 var dw_print_sjmf_contract= new DataWindow( requestor );
	 var dw_print_dlbgwts= new DataWindow( requestor );
	 var dw_print_packinglist= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );
	 var ds_spxx= new DataStore( requestor );
	 var ds_sjzsbh= new DataStore( requestor );
	 var ds_sjsfdj= new DataStore( requestor );
	 var ds_clqy= new DataStore( requestor );
	 var ds_dzqk= new DataStore( requestor );
	 var ds_jdr= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_forma == null ) dw_forma= new DataWindow( requestor );
		 dw_forma.Attach( win.Control( "dw_forma") ); 
		 if(dw_print_sjmf_invoice == null ) dw_print_sjmf_invoice= new DataWindow( requestor );
		 dw_print_sjmf_invoice.Attach( win.Control( "dw_print_sjmf_invoice") ); 
		 if(dw_print_ecczm == null ) dw_print_ecczm= new DataWindow( requestor );
		 dw_print_ecczm.Attach( win.Control( "dw_print_ecczm") ); 
		 if(dw_print_hczm == null ) dw_print_hczm= new DataWindow( requestor );
		 dw_print_hczm.Attach( win.Control( "dw_print_hczm") ); 
		 if(dw_print_invoice == null ) dw_print_invoice= new DataWindow( requestor );
		 dw_print_invoice.Attach( win.Control( "dw_print_invoice") ); 
		 if(dw_zsbh == null ) dw_zsbh= new DataWindow( requestor );
		 dw_zsbh.Attach( win.Control( "dw_zsbh") ); 
		 if(dw_print_zthqksm == null ) dw_print_zthqksm= new DataWindow( requestor );
		 dw_print_zthqksm.Attach( win.Control( "dw_print_zthqksm") ); 
		 if(dw_print_contract == null ) dw_print_contract= new DataWindow( requestor );
		 dw_print_contract.Attach( win.Control( "dw_print_contract") ); 
		 if(dw_print_bzjsqs == null ) dw_print_bzjsqs= new DataWindow( requestor );
		 dw_print_bzjsqs.Attach( win.Control( "dw_print_bzjsqs") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_tdzb == null ) dw_tdzb= new DataWindow( requestor );
		 dw_tdzb.Attach( win.Control( "dw_tdzb") ); 
		 if(dw_spxx == null ) dw_spxx= new DataWindow( requestor );
		 dw_spxx.Attach( win.Control( "dw_spxx") ); 
		 if(dw_fpzb == null ) dw_fpzb= new DataWindow( requestor );
		 dw_fpzb.Attach( win.Control( "dw_fpzb") ); 
		 if(dw_spdhsr == null ) dw_spdhsr= new DataWindow( requestor );
		 dw_spdhsr.Attach( win.Control( "dw_spdhsr") ); 
		 if(dw_sjbzcl == null ) dw_sjbzcl= new DataWindow( requestor );
		 dw_sjbzcl.Attach( win.Control( "dw_sjbzcl") ); 
		 if(dw_sjzs == null ) dw_sjzs= new DataWindow( requestor );
		 dw_sjzs.Attach( win.Control( "dw_sjzs") ); 
		 if(dw_dzqk == null ) dw_dzqk= new DataWindow( requestor );
		 dw_dzqk.Attach( win.Control( "dw_dzqk") ); 
		 if(dw_sxgsjjl == null ) dw_sxgsjjl= new DataWindow( requestor );
		 dw_sxgsjjl.Attach( win.Control( "dw_sxgsjjl") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(sle_ts == null ) sle_ts= new SingleLineEdit( requestor );
		 sle_ts.Attach( win.Control( "sle_ts") ); 
		 if(dw_print_sjmf_packinglist == null ) dw_print_sjmf_packinglist= new DataWindow( requestor );
		 dw_print_sjmf_packinglist.Attach( win.Control( "dw_print_sjmf_packinglist") ); 
		 if(dw_sjsfdj == null ) dw_sjsfdj= new DataWindow( requestor );
		 dw_sjsfdj.Attach( win.Control( "dw_sjsfdj") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dw_print_qksm == null ) dw_print_qksm= new DataWindow( requestor );
		 dw_print_qksm.Attach( win.Control( "dw_print_qksm") ); 
		 if(dw_print_sjmf_contract == null ) dw_print_sjmf_contract= new DataWindow( requestor );
		 dw_print_sjmf_contract.Attach( win.Control( "dw_print_sjmf_contract") ); 
		 if(dw_print_dlbgwts == null ) dw_print_dlbgwts= new DataWindow( requestor );
		 dw_print_dlbgwts.Attach( win.Control( "dw_print_dlbgwts") ); 
		 if(dw_print_packinglist == null ) dw_print_packinglist= new DataWindow( requestor );
		 dw_print_packinglist.Attach( win.Control( "dw_print_packinglist") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ContextMenuStrip2 == null ) ContextMenuStrip2= new ContextMenu( requestor );
		 ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_jzxxx == null ) ds_jzxxx= new DataStore( requestor );
		 ds_jzxxx.Attach( win.Control( "ds_jzxxx") ); 
		 if(ds_spxx == null ) ds_spxx= new DataStore( requestor );
		 ds_spxx.Attach( win.Control( "ds_spxx") ); 
		 if(ds_sjzsbh == null ) ds_sjzsbh= new DataStore( requestor );
		 ds_sjzsbh.Attach( win.Control( "ds_sjzsbh") ); 
		 if(ds_sjsfdj == null ) ds_sjsfdj= new DataStore( requestor );
		 ds_sjsfdj.Attach( win.Control( "ds_sjsfdj") ); 
		 if(ds_clqy == null ) ds_clqy= new DataStore( requestor );
		 ds_clqy.Attach( win.Control( "ds_clqy") ); 
		 if(ds_dzqk == null ) ds_dzqk= new DataStore( requestor );
		 ds_dzqk.Attach( win.Control( "ds_dzqk") ); 
		 if(ds_jdr == null ) ds_jdr= new DataStore( requestor );
		 ds_jdr.Attach( win.Control( "ds_jdr") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_master_ButtonClicked); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_master_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_RbuttonDown)=="function") 
			 win.AttachEvent("dw_master","RButtonDown",self.dw_master_RbuttonDown); 

		 if(typeof(self.dw_zsbh_ItemChanged)=="function") 
			 win.AttachEvent("dw_zsbh","ItemChanged",self.dw_zsbh_ItemChanged); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_jzxxx","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_jzxxx_EditChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","EditChanged",self.dw_jzxxx_EditChanged); 

		 if(typeof(self.dw_jzxxx_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_jzxxx_GetFocus); 

		 if(typeof(self.dw_jzxxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","ItemChanged",self.dw_jzxxx_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_jzxxx","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_tdzb","ButtonClicked",self.dw_master_ButtonClicked); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_tdzb","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_GetFocus)=="function") 
			 win.AttachEvent("dw_tdzb","GetFocus",self.dw_master_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_tdzb","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_RbuttonDown)=="function") 
			 win.AttachEvent("dw_tdzb","RButtonDown",self.dw_master_RbuttonDown); 

		 if(typeof(self.dw_spxx_Clicked)=="function") 
			 win.AttachEvent("dw_spxx","Clicked",self.dw_spxx_Clicked); 

		 if(typeof(self.dw_spxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_spxx","DoubleClicked",self.dw_spxx_DoubleClicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_spxx","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_spxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_spxx","ItemChanged",self.dw_spxx_ItemChanged); 

		 if(typeof(self.RbuttonDown_spxx)=="function") 
			 win.AttachEvent("dw_spxx","RButtonDown",self.RbuttonDown_spxx); 

		 if(typeof(self.dw_spxx_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_spxx","RowFocusChanged",self.dw_spxx_RowFocusChanged); 

		 if(typeof(self.dw_master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_fpzb","ButtonClicked",self.dw_master_ButtonClicked); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_fpzb","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_GetFocus)=="function") 
			 win.AttachEvent("dw_fpzb","GetFocus",self.dw_master_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_fpzb","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_RbuttonDown)=="function") 
			 win.AttachEvent("dw_fpzb","RButtonDown",self.dw_master_RbuttonDown); 

		 if(typeof(self.dw_spdhsr_ItemChanged)=="function") 
			 win.AttachEvent("dw_spdhsr","ItemChanged",self.dw_spdhsr_ItemChanged); 

		 if(typeof(self.dw_Sjbzcl_GetFocus)=="function") 
			 win.AttachEvent("dw_sjbzcl","GetFocus",self.dw_Sjbzcl_GetFocus); 

		 if(typeof(self.dw_Sjzs_GetFocus)=="function") 
			 win.AttachEvent("dw_sjzs","GetFocus",self.dw_Sjzs_GetFocus); 

		 if(typeof(self.dw_dzqk_Clicked)=="function") 
			 win.AttachEvent("dw_dzqk","Clicked",self.dw_dzqk_Clicked); 

		 if(typeof(self.dw_dzqk_DoubleClicked)=="function") 
			 win.AttachEvent("dw_dzqk","DoubleClicked",self.dw_dzqk_DoubleClicked); 

		 if(typeof(self.dw_dzqk_GetFocus)=="function") 
			 win.AttachEvent("dw_dzqk","GetFocus",self.dw_dzqk_GetFocus); 

		 if(typeof(self.dw_dzqk_ItemChanged)=="function") 
			 win.AttachEvent("dw_dzqk","ItemChanged",self.dw_dzqk_ItemChanged); 

		 if(typeof(self.RbuttonDown_dzqk)=="function") 
			 win.AttachEvent("dw_dzqk","RButtonDown",self.RbuttonDown_dzqk); 

		 if(typeof(self.Select_zbqx)=="function") 
			 win.AttachEvent("btn_zbqx","Clicked",self.Select_zbqx); 

		 if(typeof(self.Select_fbqx)=="function") 
			 win.AttachEvent("btn_fbqx","Clicked",self.Select_fbqx); 

		 if(typeof(self.dw_sjsfdj_ItemChanged)=="function") 
			 win.AttachEvent("dw_sjsfdj","ItemChanged",self.dw_sjsfdj_ItemChanged); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowinsert","Clicked",self.InsertRow); 

		 if(typeof(self.RowCopy)=="function") 
			 win.AttachEvent("btn_rowcopy","Clicked",self.RowCopy); 

		 if(typeof(self.Csdzqk)=="function") 
			 win.AttachEvent("btn_csdzqk","Clicked",self.Csdzqk); 

		 if(typeof(self.Tbsxg)=="function") 
			 win.AttachEvent("btn_tbsxg","Clicked",self.Tbsxg); 

		 if(typeof(self.dw_cmd_RowNext)=="function") 
			 win.AttachEvent("btn_rownext","Clicked",self.dw_cmd_RowNext); 

		 if(typeof(self.dw_cmd_RowBack)=="function") 
			 win.AttachEvent("btn_rowback","Clicked",self.dw_cmd_RowBack); 

		 if(typeof(self.PrintContract)=="function") 
			 win.AttachEvent("m_print_contract","Clicked",self.PrintContract); 

		 if(typeof(self.PrintSjmfContract)=="function") 
			 win.AttachEvent("m_print_sjmf_contract","Clicked",self.PrintSjmfContract); 

		 if(typeof(self.PrintInvoice)=="function") 
			 win.AttachEvent("发票打印ToolStripMenuItem","Clicked",self.PrintInvoice); 

		 if(typeof(self.PrintSjmfInvoice)=="function") 
			 win.AttachEvent("m_sjmfinvoice","Clicked",self.PrintSjmfInvoice); 

		 if(typeof(self.PrintPackingList)=="function") 
			 win.AttachEvent("箱单打印ToolStripMenuItem","Clicked",self.PrintPackingList); 

		 if(typeof(self.PrintSjmfPackingList)=="function") 
			 win.AttachEvent("m_sjmfxddy","Clicked",self.PrintSjmfPackingList); 

		 if(typeof(self.PrintZthqksm)=="function") 
			 win.AttachEvent("直提货情况说明ToolStripMenuItem","Clicked",self.PrintZthqksm); 

		 if(typeof(self.Print_qksm)=="function") 
			 win.AttachEvent("情况说明打印ToolStripMenuItem","Clicked",self.Print_qksm); 

		 if(typeof(self.Print_bzjsqs)=="function") 
			 win.AttachEvent("btn_bzjsqs","Clicked",self.Print_bzjsqs); 

		 if(typeof(self.Print_dlbgwts)=="function") 
			 win.AttachEvent("btn_dlbgwts","Clicked",self.Print_dlbgwts); 

		 if(typeof(self.Print_hczm)=="function") 
			 win.AttachEvent("btn_hczm","Clicked",self.Print_hczm); 

		 if(typeof(self.Print_ecczm)=="function") 
			 win.AttachEvent("btn_ecczm","Clicked",self.Print_ecczm); 

		 if(typeof(self.Print_forma)=="function") 
			 win.AttachEvent("产地证ToolStripMenuItem","Clicked",self.Print_forma); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_6","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_spxx)=="function") 
			 win.AttachEvent("m_8","Clicked",self.CopyCol_spxx); 

		 if(typeof(self.Recover_spxx)=="function") 
			 win.AttachEvent("m_5","Clicked",self.Recover_spxx); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_master.Detach(); dw_master=null; 
		 dw_forma.Detach(); dw_forma=null; 
		 dw_print_sjmf_invoice.Detach(); dw_print_sjmf_invoice=null; 
		 dw_print_ecczm.Detach(); dw_print_ecczm=null; 
		 dw_print_hczm.Detach(); dw_print_hczm=null; 
		 dw_print_invoice.Detach(); dw_print_invoice=null; 
		 dw_zsbh.Detach(); dw_zsbh=null; 
		 dw_print_zthqksm.Detach(); dw_print_zthqksm=null; 
		 dw_print_contract.Detach(); dw_print_contract=null; 
		 dw_print_bzjsqs.Detach(); dw_print_bzjsqs=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_tdzb.Detach(); dw_tdzb=null; 
		 dw_spxx.Detach(); dw_spxx=null; 
		 dw_fpzb.Detach(); dw_fpzb=null; 
		 dw_spdhsr.Detach(); dw_spdhsr=null; 
		 dw_sjbzcl.Detach(); dw_sjbzcl=null; 
		 dw_sjzs.Detach(); dw_sjzs=null; 
		 dw_dzqk.Detach(); dw_dzqk=null; 
		 dw_sxgsjjl.Detach(); dw_sxgsjjl=null; 
		 tb_2.Detach(); tb_2=null; 
		 sle_ts.Detach(); sle_ts=null; 
		 dw_print_sjmf_packinglist.Detach(); dw_print_sjmf_packinglist=null; 
		 dw_sjsfdj.Detach(); dw_sjsfdj=null; 
		 tb_1.Detach(); tb_1=null; 
		 dw_print_qksm.Detach(); dw_print_qksm=null; 
		 dw_print_sjmf_contract.Detach(); dw_print_sjmf_contract=null; 
		 dw_print_dlbgwts.Detach(); dw_print_dlbgwts=null; 
		 dw_print_packinglist.Detach(); dw_print_packinglist=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_jzxxx.Detach(); ds_jzxxx=null; 
		 ds_spxx.Detach(); ds_spxx=null; 
		 ds_sjzsbh.Detach(); ds_sjzsbh=null; 
		 ds_sjsfdj.Detach(); ds_sjsfdj=null; 
		 ds_clqy.Detach(); ds_clqy=null; 
		 ds_dzqk.Detach(); ds_dzqk=null; 
		 ds_jdr.Detach(); ds_jdr=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Commodity_Select = null;
    var iw_Eport_Select = null;
    var iw_Country_Select = null;
    var iw_Jnhyd_Select = null;
    var iw_Dlxy_Select = null;
    var iw_Wldw_Select = null;
    var iw_Mxd_Select = null;
    var iw_Hddz_Dlxy_Select = null;
    var iw_Country_Select = null;
    var iw_RqTime_Select = null;
    var dwc = new DataWindowChild();
    var il_sp_id = 0;
    var ib_zs = true;
    var ib_bzcl = true;
    var ib_zsbh = true;
    var ib_sjsfdj = true;
    var iw_Clqy_Select = null;
    var iw_Wldw_Lxr_Select = null;
    var iw_Wldw_Shdz_Select = null;
    var iw_Hddz_Dzsd = null;
    var iw_Hddz_Zqhc = null;
    var result = "";
    var zdmc = "";
    var zdmc_jzxxx = "N";
//    var zdmc_dzyq = "N";

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hddz.ashx");

    
    
    //#endregion

    //#region 设置窗口是否可编辑
    this.SetEditMode = function (newMode) {
        editMode = newMode;
        var bEditFlag = false;
        if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
            bEditFlag = true;
        }
        else {
            bEditFlag = false;
        };
        if (tab_1.GetSelectedTab() == 2) {

            tb_1.SetVisible("btn_rowadd", false);
            tb_1.SetVisible("btn_rowdelete", false);
            tb_1.SetVisible("btn_rowcopy", false);
            tb_1.SetVisible("btn_rownext", false);
            tb_1.SetVisible("btn_rowinsert", false);
        }
        else {
            tb_1.SetVisible("btn_save", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowinsert", bEditFlag);
        }

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_jzxxx.Modify("DataWindow.Readonly=no");
            dw_spxx.Modify("DataWindow.Readonly=no");
            dw_dzqk.Modify("DataWindow.Readonly=no");
            dw_tdzb.Modify("DataWindow.Readonly=no");
            dw_fpzb.Modify("DataWindow.Readonly=no");
            dw_sjbzcl.Modify("DataWindow.Readonly=no");
            dw_sjsfdj.Modify("DataWindow.Readonly=no");
            dw_sjzs.Modify("DataWindow.Readonly=no");
            dw_sxgsjjl.Modify("DataWindow.Readonly=no");
            dw_zsbh.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_spxx.Modify("DataWindow.Readonly=yes");
            dw_dzqk.Modify("DataWindow.Readonly=yes");
            dw_tdzb.Modify("DataWindow.Readonly=yes");
            dw_fpzb.Modify("DataWindow.Readonly=yes");
            dw_sjbzcl.Modify("DataWindow.Readonly=yes");
            dw_sjsfdj.Modify("DataWindow.Readonly=yes");
            dw_sjzs.Modify("DataWindow.Readonly=yes");
            dw_sxgsjjl.Modify("DataWindow.Readonly=yes");
            dw_zsbh.Modify("DataWindow.Readonly=yes");
        }

        var sfymx = requestor.GetParm("sfymx");
        if (sfymx != '0') {
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus();
        dw_master.ShareData(dw_tdzb);
        dw_master.ShareData(dw_fpzb);
        dw_spxx.ShareData(dw_spdhsr);

        var operation = requestor.GetParm("operation");
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                zdmc_jzxxx = "Y";
//                zdmc_dzyq = "Y";
                self.Copy();
                self.SetEditMode("copy");
                self.Save();
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
                var bggsbm = dw_master.GetItemString(1, "bggsbm");
                if (bggsbm == "" || bggsbm == null) {
                    self.AddOcr();
                }
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }
        }
        else {
            self.SetEditMode("show");
        };

        if (dw_tdzb.GetItemString(1, "jzxgjzxh") == "Y") {
            dw_jzxxx.Modify("jzxh.Tabsequence=0");
        }

//        if (ds_jdr.RowCount() > 0) {
//            var jdrbm = ds_jdr.GetItemString(1, "yw_khbm");
//            var jdrjc = ds_jdr.GetItemString(1, "khjc");
//            var jdrmc = ds_jdr.GetItemString(1, "khmc");
//            var jdrpym = ds_jdr.GetItemString(1, "pym");
//        } else {
//            dw_master.SetItem(1, "jdrbm", "admin0003");
//            dw_master.SetItem(1, "jdrjc", "上海欧恒");
//            dw_master.SetItem(1, "jdrmc", "上海欧恒进出口有限公司");
//            dw_master.SetItem(1, "jdrpym", "shohjckyxgs");
//        }

//        var dw_jdrmc = dw_master.GetItemString(1, "jdrmc");

//        if (dw_jdrmc == "" || dw_jdrmc == null) {
//            if (jdrmc == "" || jdrmc == null) {
//                dw_master.SetItem(1, "jdrbm", "admin0003");
//                dw_master.SetItem(1, "jdrjc", "上海欧恒");
//                dw_master.SetItem(1, "jdrmc", "上海欧恒进出口有限公司");
//                dw_master.SetItem(1, "jdrpym", "shohjckyxgs");
//            } else {
//                dw_master.SetItem(1, "jdrbm", jdrbm);
//                dw_master.SetItem(1, "jdrjc", jdrjc);
//                dw_master.SetItem(1, "jdrmc", jdrmc);
//                dw_master.SetItem(1, "jdrpym", jdrpym);
//            }
//        }
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_Sjzs_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_Sjbzcl_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_dzqk_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
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
        if (editMode == "show")
            return;

        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_spxx.AcceptText();
        dw_sjzs.AcceptText();
        dw_sjbzcl.AcceptText();
        dw_zsbh.AcceptText();
        dw_sjsfdj.AcceptText();
        dw_dzqk.AcceptText();
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_sjzs.DeletedCount() + dw_sjzs.ModifiedCount() + dw_sjbzcl.DeletedCount() + dw_sjbzcl.ModifiedCount() + dw_zsbh.DeletedCount() + dw_zsbh.ModifiedCount() + dw_sjsfdj.DeletedCount() + dw_sjsfdj.ModifiedCount() + dw_dzqk.DeletedCount() + dw_dzqk.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_jzxxx.AcceptText() != 1)
            return;

        if (dw_spxx.AcceptText() != 1)
            return;

        if (dw_sjzs.AcceptText() != 1)
            return;

        if (dw_sjbzcl.AcceptText() != 1)
            return;

        if (dw_zsbh.AcceptText() != 1)
            return;

        if (dw_sjsfdj.AcceptText() != 1)
            return;

        if (dw_dzqk.AcceptText() != 1)
            return;

        if (dw_sxgsjjl.AcceptText() != 1)
            return;

        

        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_sjzs.ModifiedCount() + dw_sjzs.DeletedCount() + dw_sjbzcl.ModifiedCount() + dw_sjbzcl.DeletedCount() + dw_zsbh.ModifiedCount() + dw_zsbh.DeletedCount() + dw_sjsfdj.ModifiedCount() + dw_sjsfdj.DeletedCount() + dw_dzqk.ModifiedCount() + dw_dzqk.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        if (dw_master.GetItemString(1, "khmc") == "") {
            requestor.MessageBox("提示", "请选择委托客户！");
            return;
        }
        if (dw_master.GetItemString(1, "jdrbm") == "" || dw_master.GetItemString(1, "jdrbm") == null) {
            requestor.MessageBox("提示", "请选择接单人！");
            return;
        }
        if (dw_master.GetItemString(1, "ysmxcd") == "" || dw_master.GetItemString(1, "ysmxcd") == null) {
            requestor.MessageBox("提示", "请选择应收明细程度！");
            return;
        }

        //地区代码不能为空，需要选择原产地 
        var dqdm = dw_master.GetItemString(1, "dqdm");
        if (dqdm == "" || dqdm == null) {
            requestor.MessageBox("提示", "请选择原产地！");
            return;
        }

        var yjkgsjxg = dw_master.GetItemString(1, "yjkgsjxg");
        if (editMode != "copy" && yjkgsjxg == "Y") {
            if (requestor.MessageBox("提示", "预计靠港时间和制作日期一致，请核对预计靠港时间是否正确？", ICON.Question, BUTTON.YesNo) == 2) {
                return;
            }
        }
        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString(row, "ywbh");
        dw_master.SetItem(row, "ywbh", ywbh);

        //FOB条件下判断是否有运费打勾 
        var jgfs = dw_master.GetItemString(1, "jgfs")
        if (jgfs == "FOB") {
            var sfyyf = dw_master.GetItemString(1, "sfyyf")
            if (sfyyf != "Y") {
                if (requestor.MessageBox("提示", "FOB下应该有运费支付，是否需要打勾?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_master.SetItem(1, "sfyyf", "Y")
                }
            }
        }
        //更新行号
        var hz_jzxh = ""
        var hz_sjshr = "";
        var hz_sjshrgs = 0;
        var clfs = dw_master.GetItemString(1, "clfs");
        var ysfs = dw_master.GetItemString(1, "ysfs")
        if (ysfs == "空运") {
            var yjkgsj = new Date(dw_master.GetItemDate(1, "yjkgsj"))
            var ywbh = dw_master.GetItemString(1, "ywbh")
            var htjhthsj_lb = dw_master.GetItemString(1, "htjhthsj_lb")
            var ts = dw_master.GetItemString(1, "ts")
            if (ts == "Y") {
                requestor.MessageBox("提示", "注意是否修改计划操作时间")
            }
            QsWebSoft.PubMethod.GenYjkgsjtxm(ywbh, yjkgsj);
        };
        var ztdh = dw_master.GetItemString(1, "ztdh");
        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "cxh", row);
            dw_jzxxx.SetItem(row, "ywbh", ywbh);
            var jzxh = "";
            if (jzxh != null && jzxh != '' && ztdh != null && ztdh != "") {
                var xtywbh = QsWebSoft.PubMethod.ZtdhJzxhCf(ywbh, ztdh, jzxh).value;
                if (xtywbh != '') {
                    requestor.MessageBox("提示", "集装箱号:" + jzxh + '提单号：' + ztdh + '在业务单据' + xtywbh + '已经存在，不能使用！')
                    return;
                }
            }
            if (row == dw_jzxxx.RowCount()) {
                hz_jzxh = "";
                hz_sjshr = dw_jzxxx.GetItemString(row, "sjshrmc");
                hz_sjshrgs = hz_sjshrgs + 1;
                var jschfscwld_shrmc = dw_jzxxx.GetItemString(row, "jschfscwld_shrmc");
                if (hz_sjshr.indexOf(jschfscwld_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + jschfscwld_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld3_shrmc = dw_jzxxx.GetItemString(row, "fscwld3_shrmc");
                if (hz_sjshr.indexOf(fscwld3_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld3_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld4_shrmc = dw_jzxxx.GetItemString(row, "fscwld4_shrmc");
                if (hz_sjshr.indexOf(fscwld4_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld4_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };

            }
            else {
                hz_jzxh = "";
                var sjshrmc = dw_jzxxx.GetItemString(row, "sjshrmc");
                if (hz_sjshr.indexOf(sjshrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + sjshrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var jschfscwld_shrmc = dw_jzxxx.GetItemString(row, "jschfscwld_shrmc");
                if (hz_sjshr.indexOf(jschfscwld_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + jschfscwld_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld3_shrmc = dw_jzxxx.GetItemString(row, "fscwld3_shrmc");
                if (hz_sjshr.indexOf(fscwld3_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld3_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
                var fscwld4_shrmc = dw_jzxxx.GetItemString(row, "fscwld4_shrmc");
                if (hz_sjshr.indexOf(fscwld4_shrmc) < 0) {
                    hz_sjshr = hz_sjshr + "," + fscwld4_shrmc
                    hz_sjshrgs = hz_sjshrgs + 1;
                };
            };

            clfs_jzxxx = dw_jzxxx.GetItemString(row, "clfs")
            if ((clfs_jzxxx == null || clfs_jzxxx == "") && editMode != "copy") {
                requestor.MessageBox("提示", "请输入处理方式！")
                return;
            }


            if (clfs_jzxxx != clfs) {
                requestor.MessageBox("提示", "处理方式前后不一致请查看！")
                return;
            }

        }

        if (ysfs == "海运") {
            dw_master.SetItem(1, "jzxsl", dw_jzxxx.RowCount());
        } else {
            dw_master.SetItem(1, "jzxsl", 0);
        };
        dw_master.SetItem(1, "hz_jzxh", hz_jzxh)
        dw_master.SetItem(1, "hz_sjshr", hz_sjshr)
        dw_master.SetItem(1, "hz_sjshrgs", hz_sjshrgs)

        //PBL字段
        //        var gwgys_tymc = QsWebSoft.PubMethod.SelectGwgys_tymc(ywbh).value;
        //        dw_master.SetItem(1, "gwgys_tymc", gwgys_tymc)
        //        var jyjyzs = QsWebSoft.PubMethod.SelectJyjyzs(ywbh).value;
        //        dw_master.SetItem(1, "jyjyzs", jyjyzs)
        //        var wjgd = QsWebSoft.PubMethod.SelectWjgd(ywbh).value;
        //        dw_master.SetItem(1, "wjgd", wjgd)
        //        var sfyjyjyzs = QsWebSoft.PubMethod.SelectSfyjyjyzs(ywbh).value;
        //        dw_master.SetItem(1, "sfyjyjyzs", sfyjyjyzs)
        //        var sfysd = QsWebSoft.PubMethod.SelectSfysd(ywbh).value;
        //        dw_master.SetItem(1, "sfysd", sfysd)
        //        var sfygdwj = QsWebSoft.PubMethod.SelectSfygdwj(ywbh).value;
        //        dw_master.SetItem(1, "sfygdwj", sfygdwj)
        //        var dztxts = QsWebSoft.PubMethod.SelectDztxts(ywbh).value;
        //        dw_master.SetItem(1, "dztxts", dztxts)

        //        var dzfsnum = 0;
        //        for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
        //            if (dw_dzqk.GetItemString(i, "dzmc") != "提单") {
        //                dzfsnum += 1;
        //            }
        //        }
        //        dw_master.SetItem(1, "dzfs", dzfsnum)

        //        var ysdzfsnum = 0;
        //        for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
        //            if (dw_dzqk.GetItemString(i, "dzmc") != "提单") {
        //                if (dw_dzqk.GetItemString(i, "zfbqk").search("正本") > 0) {
        //                    if (dw_dzqk.GetItemString(i, "sfsdzb") == "Y") {
        //                        ysdzfsnum += 1;
        //                    }
        //                } else {
        //                    if (dw_dzqk.GetItemString(i, "sfsdfb") == "Y" || dw_dzqk.GetItemString(i, "sfsdzb") == "Y") {
        //                        ysdzfsnum += 1;
        //                    }
        //                }
        //            }
        //        }
        //        dw_master.SetItem(1, "ysdzfs", ysdzfsnum)

        var tdztnum = 0;
        for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
            if (dw_dzqk.GetItemString(i, "dzmc") == "提单") {
                if (dw_dzqk.GetItemString(i, "zfbqk").search("正本") > 0) {
                    if (dw_dzqk.GetItemString(i, "sfsdzb") == "Y") {
                        tdztnum += 1;
                    }
                } else {
                    if (dw_dzqk.GetItemString(i, "sfsdfb") == "Y" || dw_dzqk.GetItemString(i, "sfsdzb") == "Y") {
                        tdztnum += 1;
                    }
                }
            }
        }
        dw_master.SetItem(1, "tdzt", tdztnum)

        //        var sftdwznum = 0;
        //        for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
        //            if (dw_dzqk.GetItemString(i, "dzmc") == "提单") {
        //                if (dw_dzqk.GetItemString(i, "zfbqk") == "未知") {
        //                    sftdwznum += 1;
        //                }
        //            }
        //        }
        //        dw_master.SetItem(1, "sftdwz", sftdwznum)

        //        var tdwznum = 0;
        //        for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
        //            if (dw_dzqk.GetItemString(i, "dzmc") == "提单") {
        //                if (dw_dzqk.GetItemString(i, "zfbqk") == "未知") {
        //                    if (dw_dzqk.GetItemString(i, "sfsdfb") == "N") {
        //                        tdwznum += 1;
        //                    }
        //                }
        //            }
        //        }
        //        if (tdwznum > 0) {
        //            dw_master.SetItem(1, "tdwz", tdwznum)
        //        }

        var sdtgfsnum = 0;
        for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
            if (dw_dzqk.GetItemString(i, "sdzxjg") == "通过") {
                sdtgfsnum += 1;
            }
        }
        dw_master.SetItem(1, "sdtgfs", sdtgfsnum)

        var zdzfsnum = 0;
        zdzfsnum = dw_dzqk.RowCount();
        dw_master.SetItem(1, "zdzfs", zdzfsnum);

        //        var ohdlxy = QsWebSoft.PubMethod.SelectOhdlxy(ywbh).value;
        //        dw_master.SetItem(1, "ohdlxy", ohdlxy)

        //        var zzrq = QsWebSoft.PubMethod.SelectZzrq(ywbh).value;
        //        var rqzzrq = new Date(zzrq);
        //        dw_master.SetItem(1, "zzrq", rqzzrq.getVarDate());

        var dzqk = "";
        var dzqknum = 0;
        if (dw_dzqk.RowCount() > 0) {
            for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
                if (dw_dzqk.GetItemString(i, "dzmc") == "提单" && (dw_dzqk.GetItemString(i, "zfbqk") == null || dw_dzqk.GetItemString(i, "zfbqk") == "" || dw_dzqk.GetItemString(i, "zfbqk") == "未知")) {
                    dzqk += "提单类型未确定;";

                }
            }
            for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
                if ((dw_dzqk.GetItemString(i, "zfbqk") == "正本" && dw_dzqk.GetItemString(i, "sfsdzb") == "Y") || (dw_dzqk.GetItemString(i, "zfbqk") == "副本" && (dw_dzqk.GetItemString(i, "sfsdzb") == "Y" || dw_dzqk.GetItemString(i, "sfsdfb") == "Y"))) {
                    dzqknum += 1;
                } else if (dw_dzqk.GetItemString(i, "dzmc") == "提单" && dw_dzqk.GetItemString(i, "zfbqk") == "正本提单" && dw_dzqk.GetItemString(i, "sfsdzb") == "Y") {
                    dzqknum += 1;
                } else if (dw_dzqk.GetItemString(i, "dzmc") == "提单" && (dw_dzqk.GetItemString(i, "zfbqk") == "电放提单" || dw_dzqk.GetItemString(i, "zfbqk") == "目的港签单" || dw_dzqk.GetItemString(i, "zfbqk") == "WAYBILL")) {
                    if (dw_dzqk.GetItemString(i, "sfsdzb") == "Y" || dw_dzqk.GetItemString(i, "sfsdfb") == "Y") {
                        dzqknum += 1;
                    }
                } else {
                    var str = dw_dzqk.GetItemString(i, "dzmc");
                    var str2 = dw_dzqk.GetItemString(i, "sdzxnr");
                    if (dw_dzqk.GetItemString(i, "zfbqk") == "正本") {
                        if (dw_dzqk.GetItemString(i, "sfsdzb") != "Y" && dw_dzqk.GetItemString(i, "sfsdfb") == "Y") {
                            dzqk += str + "正本未收到,但副本已到" + str2 + ";";
                        }
                        if (dw_dzqk.GetItemString(i, "sfsdzb") != "Y" && dw_dzqk.GetItemString(i, "sfsdfb") != "Y") {
                            dzqk += str + "正本未收到" + str2 + ";";
                        }
                    }
                    if (dw_dzqk.GetItemString(i, "zfbqk") == "副本") {
                        if (dw_dzqk.GetItemString(i, "sfsdzb") != "Y" && dw_dzqk.GetItemString(i, "sfsdfb") != "Y") {
                            dzqk += str + "副本未收到" + str2 + ";";
                        }
                    }
                    if (dw_dzqk.GetItemString(i, "dzmc") != "提单" && dw_dzqk.GetItemString(i, "zfbqk") != "正本" && dw_dzqk.GetItemString(i, "zfbqk") != "副本" && dw_dzqk.GetItemString(i, "sfsdzb") != "Y" && dw_dzqk.GetItemString(i, "sfsdfb") != "Y") {
                        var str3 = dw_dzqk.GetItemString(i, "zfbqk");
                        dzqk += str + str3 + "未收到" + str2 + ";";
                    }
                    if (dw_dzqk.GetItemString(i, "dzmc") == "提单" && dw_dzqk.GetItemString(i, "zfbqk") == "正本提单") {
                        if (dw_dzqk.GetItemString(i, "sfsdzb") != "Y" && dw_dzqk.GetItemString(i, "sfsdfb") == "Y") {
                            dzqk += str + "正本提单未收到,但副本已到" + str2 + ";";
                        }
                        if (dw_dzqk.GetItemString(i, "sfsdzb") != "Y" && dw_dzqk.GetItemString(i, "sfsdfb") != "Y") {
                            dzqk += str + "正本提单未收到" + str2 + ";";
                        }
                    }
                    if (dw_dzqk.GetItemString(i, "dzmc") == "提单" && (dw_dzqk.GetItemString(i, "zfbqk") == "电放提单" || dw_dzqk.GetItemString(i, "zfbqk") == "目的港签单" || dw_dzqk.GetItemString(i, "zfbqk") == "WAYBILL")) {
                        if (dw_dzqk.GetItemString(i, "sfsdzb") != "Y" && dw_dzqk.GetItemString(i, "sfsdfb") != "Y") {
                            var str3 = dw_dzqk.GetItemString(i, "zfbqk");
                            dzqk += str + str3 + "未收到" + str2 + ";";
                        }
                    }
                }
            }
            if (dzqknum == 0) {
                dzqk = "未收到单证;";
            } else if (dzqknum == dw_dzqk.RowCount()) {
                dzqk = "已收齐;";
            }
        } else {
            dzqk = "无需单证;";
        }

        dw_master.SetItem(1, "dzqk", dzqk)
        //

        var hz_spmc = "";
        var hz_spywmc = ""
        var hz_hgbm = ""
        var hz_pz = ""
        var ycd = dw_master.GetItemString(1, "ycd");
        var clfs = dw_master.GetItemString(1, "clfs");
        var lclfspd = "N"
        var mzfp = "Y";
        var jzfp = "Y";
        for (row = dw_spxx.RowCount(); row > 0; row--) {
            dw_spxx.SetItem(row, "cxh", row);
            dw_spxx.SetItem(row, "ywbh", ywbh);
            if (row == dw_spxx.RowCount()) {
                hz_spmc = dw_spxx.GetItemString(row, "spmc");
                hz_spywmc = dw_spxx.GetItemString(row, "spmc_yw");
                hz_hgbm = dw_spxx.GetItemString(row, "hgbm");
                hz_pz = dw_spxx.GetItemString(row, "sppz");
            }
            else {
                var spmc = dw_spxx.GetItemString(row, "spmc");
                var spmc_yw = dw_spxx.GetItemString(row, "spmc_yw");
                if (hz_spmc.indexOf(spmc) < 0) {
                    hz_spmc = hz_spmc + "," + dw_spxx.GetItemString(row, "spmc")
                    hz_spywmc = hz_spywmc + "," + dw_spxx.GetItemString(row, "spmc_yw")
                }

                var hgbm = dw_spxx.GetItemString(row, "hgbm");
                if (hz_hgbm.indexOf(hgbm) < 0) {
                    hz_hgbm = hz_hgbm + "," + dw_spxx.GetItemString(row, "hgbm")
                }


                var pz = dw_spxx.GetItemString(row, "sppz");
                if (hz_pz.indexOf(pz) < 0) {
                    hz_pz = hz_pz + "," + dw_spxx.GetItemString(row, "sppz")
                }
            };
            var jldw = dw_spxx.GetItemString(row, "jldw")
            var sjjldw = QsWebSoft.PubMethod.ReadSjjldm(jldw).value;
            if (sjjldw == null) {
                sjjldw = ""
            }
            dw_spxx.SetItem(row, "sjjldw", sjjldw)

            //商检时候 默认第一行商品的用途
            if (row == 1) {
                var sjyt = dw_spxx.GetItemString(row, "sjyt")
                dw_master.SetItem(1, "yt", sjyt)
            }

            //判断是否有二次代码信息 

            var gj = dw_master.GetItemString(1, "ycddm");
            var shdwbm = dw_master.GetItemString(1, "shdwbm");
            var zjsjc = dw_master.GetItemString(1, "zjsjc");
            var spbm = dw_spxx.GetItemString(row, "spbm");
            var dmbz = dw_master.GetItemString(1, "dmbz");
            var ycd = dw_master.GetItemString(1, "ycd");

            if (dmbz == "Y") {

                var Gjspeczsbz = QsWebSoft.PubMethod.CheckGjspEczsbz(ycd, spbm).value;

                if (Gjspeczsbz == 0) {
                    requestor.MessageBox("提示", "对应国家商品不能进行二次代卖，请和生鲜港业务员!")
                    return;
                }
            }

            var sfyecdm = QsWebSoft.PubMethod.CheckSsgdmkhxxtx(gj, spbm, shdwbm, zjsjc).value;

            if (sfyecdm > 0 && dmbz != "Y") {
                if (requestor.MessageBox("提示", "对应国家商品及收货单位和供应商按规则需要设置为进生鲜港业务,是否设置本票业务为进生鲜港业务?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_master.SetItem(1, "dmbz", "Y");
                }
            }
            if (sfyecdm == 0 && dmbz == "Y") {
                if (requestor.MessageBox("提示", "对应国家商品及收货单位和供应商按规则不需要设置为进生鲜港业务,是否设置本票业务为非进生鲜港业务?", ICON.Question, BUTTON.YesNo) == 1) {
                    dw_master.SetItem(1, "dmbz", "N");
                }
            };





            //处理检疫处理要求

            var jyclyq = QsWebSoft.PubMethod.ReadGjSpJyclyq(ycd, spbm).value;
            var clqy = dw_master.GetItemString(1, "clqy");
            if (jyclyq == "" || jyclyq == null) {
                jyclyq = "无";
            };
            if (clfs == jyclyq || (clfs == "无" && clqy == "非限制区域")) {
                //冷处理方式一致或则是无 处理区域为 非限制区域
            }
            else {
                if (lclfspd == "N") {
                    requestor.MessageBox("提示", "本单证对应商品的冷热处理方式不对应，请检查！");
                    lclfspd = "Y";
                }
            }

            //泰国椰子海关编码不能用 08011990
            var hgbm = dw_spxx.GetItemString(row, "hgbm");
            var ycd = dw_master.GetItemString(1, "ycd");
            if ((ycd == "THAILAND" || ycd == "TAIWAN") && hgbm == "08011990") {
                requestor.MessageBox("提示", "泰国椰子不能用08011990这个海关编码，请替换为08011200！");
                return;
            }



            //判断毛总和净重是否和分摊的毛净重一致，不一致进行提醒
            var zmz = dw_spxx.GetItemNumber(row, "zmz");
            var zmz_jsl = dw_spxx.GetItemNumber(row, "zmz_jsl");
            if (parseFloat(zmz.toFixed(4)) != parseFloat(zmz_jsl.toFixed(4))) {
                mzfp = "N"
            };
            var zjz = dw_spxx.GetItemNumber(row, "zjz");
            var zjz_jsl = dw_spxx.GetItemNumber(row, "zjz_jsl");
            if (parseFloat(zjz.toFixed(4)) != parseFloat(zjz_jsl.toFixed(4))) {
                jzfp = "N"
            };
        };

        if (mzfp == "N" || jzfp == "N") {
            if (requestor.MessageBox("提示", "商品对应的毛净重不是按数量及权重分摊的，是否继续保存？", ICON.Question, BUTTON.YesNo, 2) == 2) {
                return;
            };
        };



        dw_master.SetItem(1, "hz_spmc", hz_spmc)
        dw_master.SetItem(1, "hz_spywmc", hz_spywmc)
        dw_master.SetItem(1, "hz_hgbm", hz_hgbm)
        dw_master.SetItem(1, "hz_pz", hz_pz)
        var ysgj = dw_master.GetItemString(1, "ysgj")
        if (ysgj == null || ysgj == "") {
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (ysfs == "海运" && dw_jzxxx.RowCount() > 0) {

                var xl_max = dw_jzxxx.GetItemString(1, "xl_max")
                if (xl_max == "Y") {
                    dw_master.SetItem(1, "ysgj", "29")
                }
                else {
                    dw_master.SetItem(1, "ysgj", "20")
                }
            }
            if (ysfs == "空运") {
                dw_master.SetItem(1, "ysgj", "50")
            }
        }

        dw_sjsfdj.AcceptText()
        var sfdjbm = "";
        var sfdj = "";
        for (row1 = 1; row1 <= dw_sjsfdj.RowCount(); row1++) {
            dw_sjsfdj.SetItem(row1, "ywbh", ywbh);
            var sfxz = dw_sjsfdj.GetItemString(row1, "sfxz")
            if ((sfxz == "Y" && row != row1) || (row == row1 && data == "Y")) {
                var sfdjbh = dw_sjsfdj.GetItemString(row1, "sfdjbh")
                var sfdjmc = dw_sjsfdj.GetItemString(row1, "sfdjmc")
                if (sfdjbh == null) {
                    sfdjbh = "";
                }
                sfdjbm = sfdjbm + sfdjbh

                if (sfdj == "") {
                    sfdj = sfdjmc;
                } else {
                    sfdj = sfdj + ',' + sfdjmc
                }
            }
        }

        dw_master.SetItem(1, "sfdjbm", sfdjbm)
        dw_master.SetItem(1, "sfdj", sfdj)


        //处理方式对应后 处理区域必须在范围内
        clfs = dw_master.GetItemString(1, "clfs");

        if (clfs != null && clfs != "") {
            var ycddm = dw_master.GetItemString(1, "ycddm"); ;
            if (ycddm == null) {
                ycddm = "";
            };

            var spbm = "";
            if (dw_spxx.RowCount() > 0) {
                spbm = dw_spxx.GetItemString(1, "spbm")
            };

            ds_clqy.Retrieve(ycddm, spbm);
            if (ds_clqy.RowCount() > 1) {
                var clqy = dw_master.GetItemString(1, "clqy");
                if (clqy == null || clqy == "") {
                    requestor.MessageBox("提示", "该国本产品有" + clfs + "区域，请选择！");
                    dw_master.SetFocus();
                    return;
                }

            }

        };



        //
        if (dw_spxx.RowCount() > 0) {
            var hz_sl = dw_spxx.GetItemNumber(1, "jlsl_sum");
            dw_master.SetItem(1, "hz_sl", hz_sl)
        }

        if (dw_jzxxx.RowCount() == 0) {
            alert("货代单证中没有集装箱信息!");
            dw_jzxxx.SetFocus();
            return;
        }


        //处理汇总信息  
        var hz_zhlx = dw_jzxxx.GetItemString(1, "hz_zhlx");
        var hz_tpsl = dw_jzxxx.GetItemNumber(1, "hz_tpsl");
        var hz_szsl = dw_jzxxx.GetItemNumber(1, "hz_szsl");
        dw_master.SetItem(1, "hz_zhlx", hz_zhlx)
        dw_master.SetItem(1, "hz_tpsl", hz_tpsl)
        dw_master.SetItem(1, "hz_szsl", hz_szsl)

         //
        var jdrbm = dw_master.GetItemString( 1, "jdrbm" );
        var bm = dw_master.GetItemString( 1, "bm" );
        dw_master.GetChild( "bm", dwc );
        var li_bm_count = dwc.Retrieve( jdrbm );
        if ( ( bm == null || bm == "" ) && li_bm_count > 0 )
        {
            alert( "请选择部门!" );
            dw_master.SetFocus();
            return;
        }

        //
        //

        for (row = dw_spxx.RowCount(); row > 0; row--) {
            dw_spxx.SetItem(row, "cxh", row);
            dw_spxx.SetItem(row, "ywbh", ywbh);
        }


        for (row = dw_dzqk.RowCount(); row > 0; row--) {
            dw_dzqk.SetItem(row, "cxh", row);
            dw_dzqk.SetItem(row, "ywbh", ywbh);

        }

        dw_sjzs.SetFilter("")
        dw_sjzs.Filter()
        for (row = dw_sjzs.RowCount(); row > 0; row--) {
            dw_sjzs.SetItem(row, "cxh", row);
            dw_sjzs.SetItem(row, "ywbh", ywbh);
        }

        dw_sjzs.Hide()
        ib_zsbh = false;

        dw_sjbzcl.SetFilter("")
        dw_sjbzcl.Filter()

        for (row = dw_sjbzcl.RowCount(); row > 0; row--) {
            dw_sjbzcl.SetItem(row, "cxh", row);
            dw_sjbzcl.SetItem(row, "ywbh", ywbh);
        }

        dw_sjbzcl.Hide()
        ib_bzcl = false;

        for (row = dw_zsbh.RowCount(); row > 0; row--) {
            dw_zsbh.SetItem(row, "cxh", row);
            dw_zsbh.SetItem(row, "ywbh", ywbh);
        }

        dw_zsbh.Hide()
        ib_zs = false;

        var zxs = dw_master.GetItemNumber(1, "zxs")

        if (zxs == null || zxs == 0) {
            if (dw_spxx.RowCount() > 0) {
                zxs = dw_spxx.GetItemNumber(1, "jlsl_sum")
                dw_master.SetItem(1, "zxs", zxs)
            };
        } else {
            if (dw_spxx.RowCount() > 0) {
                var jlsl_sum = dw_spxx.GetItemNumber(1, "jlsl_sum")
                if (zxs != jlsl_sum) {
                    if (requestor.MessageBox("提示", "商品合计的总箱数和主表中总箱数不一致，是否按商品合计的总箱数覆盖主表总箱数?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                        dw_master.SetItem(1, "zxs", jlsl_sum)
                    }
                }
            };
        };


        var hz_bzsl = dw_master.GetItemNumber(1, "hz_bzsl")

        if (hz_bzsl == null || hz_bzsl == 0) {
            if (dw_spxx.RowCount() > 0) {
                hz_bzsl = dw_spxx.GetItemNumber(1, "bzsl_sum")
                dw_master.SetItem(1, "hz_bzsl", hz_bzsl)
            };
        } else {
            if (dw_spxx.RowCount() > 0) {
                var bzsl_sum = dw_spxx.GetItemNumber(1, "bzsl_sum")
                if (hz_bzsl != bzsl_sum) {
                    if (requestor.MessageBox("提示", "商品合计的汇总包装数量和主表中汇总包装数量不一致，是否按商品合计的汇总包装数量覆盖主表汇总包装数量?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                        dw_master.SetItem(1, "hz_bzsl", bzsl_sum)
                    }
                }
            };
        };



        var zmz = dw_master.GetItemNumber(1, "zmz");
        var zjz = dw_master.GetItemNumber(1, "zjz");
        //        if (zmz == null || zmz == 0) {
        //        if (dw_spxx.RowCount() > 0 && editMode != "copy") {
        if (dw_spxx.RowCount() > 0) {
            zmz = dw_spxx.GetItemNumber(1, "zmz_sum")
            zjz = dw_spxx.GetItemNumber(1, "zjz_sum")
        }

        zmz = parseFloat(zmz.toFixed(4));
        dw_master.SetItem(1, "zmz", zmz);
        zjz = parseFloat(zjz.toFixed(4));
        dw_master.SetItem(1, "zjz", zjz);

        //        } else {
        //            if (dw_spxx.RowCount() > 0) {
        //                var zmz_sum = dw_spxx.GetItemNumber(1, "jlsl_sum")
        //                if (zxs != zmz_sum) {
        //                    if (requestor.MessageBox("提示", "商品合计的总毛总和主表中总毛总不一致，是否按商品合计的总毛重覆盖主表总箱数?", ICON.Question, BUTTON.YesNo, 2) == 1) {
        //                        dw_master.SetItem(1, "zmz", zmz_sum)
        //                    }
        //                }
        //            };
        //        };

        //判断每个集装箱的毛重是否在规定范围内 18-24吨
        var jzxsl = dw_jzxxx.RowCount();
        var ysfs = dw_master.GetItemString(1, "ysfs");
        if (jzxsl > 0 && ysfs == "海运") {
            var mxmz = zmz / jzxsl;
            if (mxmz < 14000 || mxmz > 28000) {
                requestor.MessageBox("提示", "请检查集装箱数量信息是否缺失！");
            }
        }


        var zjz = dw_master.GetItemNumber(1, "zjz")
        //        if (zjz == null || zjz == 0) {
        if (dw_spxx.RowCount() > 0 && editMode != "copy") {
            zjz = dw_spxx.GetItemNumber(1, "zjz_sum")
            zjz = parseFloat(zjz.toFixed(4));

            dw_master.SetItem(1, "zjz", zjz)
            //            };
        };


        if (dw_dzqk.RowCount() == 0) {
            if (requestor.MessageBox("提示", "单证情况没有输入，是否自动产生？", ICON.Question, BUTTON.YesNo, 2) == 1) {
                self.Csdzqk();
            }
        }

        self.SetZje();
        dw_sxgsjjl.SetItem(1, "ywbh", ywbh)
        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_spxx_data = dw_spxx.GetChanges();
        var dw_sjzs_data = dw_sjzs.GetChanges();
        var dw_sjbzcl_data = dw_sjbzcl.GetChanges();
        var dw_zsbh_data = dw_zsbh.GetChanges();
        var dw_sjsfdj_data = dw_sjsfdj.GetChanges();
        var dw_dzqk_data = dw_dzqk.GetChanges();
        var dw_sxgsjjl_data = dw_sxgsjjl.GetChanges();
        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_spxx_data == "" && dw_sjzs_data == "" && dw_sjbzcl_data == "" && dw_zsbh_data == "" && dw_sjsfdj_data == "" && dw_dzqk_data == "")
            return;

        //数据同步生鲜港

        if (editMode == "new" || editMode == "copy") {
            var ywbh = dw_master.GetItemString(i, "ywbh");
            var row = dw_log.InsertRow(0);
            //var maxNumber = self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz");
            dw_log.SetItem(row, "mainid", ywbh);
            dw_log.ScrollToRow(row);
        } else if (zdmc != null && zdmc != "") {
            var ywbh = dw_master.GetItemString(i, "ywbh");
            var row = dw_log.InsertRow(0);
            //var maxNumber = self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz");
            zdmc = zdmc + ",hz_jzxh,zxs,hz_spmc";
            dw_log.SetItem(row, "changecols", zdmc);
            dw_log.SetItem(row, "mainid", ywbh);
            dw_log.ScrollToRow(row);
        }
        setTimeout(function () { }, 10);
        if (zdmc_jzxxx == "Y") {
            for (var i = 1; i <= dw_jzxxx.RowCount(); i++) {

                var ywbh = dw_jzxxx.GetItemString(i, "ywbh");
                var cxh = dw_jzxxx.GetItemNumber(i, "cxh");
                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
                dw_log.SetItem(row, "changecols", "");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.SetItem(row, "parameters", cxh.toString());
                dw_log.ScrollToRow(row);

            }
        }
        setTimeout(function () { }, 10);
        //        if (zdmc_dzyq == "Y") {
        ;
        if (dw_dzqk.RowCount() > 0) {

            var ywbh = dw_dzqk.GetItemString(1, "ywbh");
            var zymdj = dw_dzqk.GetItemString(1, "zymdj_max");

            if (zymdj == "Y") {

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_dzyq");
                dw_log.SetItem(row, "changecols", "");
                dw_log.SetItem(row, "mainid", ywbh);

                dw_log.ScrollToRow(row);
                for (var i = 1; i <= dw_dzqk.RowCount(); i++) {
                    dw_dzqk.SetItem(i, "zymdj", "N");
                }
            }
        }
        //        }

        dw_log.AcceptText();

        var dw_log_data = dw_log.GetChanges();


        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save_Ky", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_spxx=" + dw_spxx_data + "&dw_sjzs=" + dw_sjzs_data + "&dw_sjbzcl=" + dw_sjbzcl_data + "&dw_zsbh=" + dw_zsbh_data + "&dw_sjsfdj=" + dw_sjsfdj_data + "&dw_dzqk=" + dw_dzqk_data + "&dw_sxgsjjl=" + dw_sxgsjjl_data + "&dw_log=" + dw_log_data + "&ywbh=" + ywbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号

            ywbh = webReq.ResponseText();
            dw_master.SetItem(1, "ywbh", ywbh);

            var hth = dw_master.GetItemString(1, "hth")
            if (hth == "" || hth == null) {
                dw_master.SetItem(1, "hth", ywbh)
            };

            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "ywbh", ywbh);
                dw_jzxxx.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_spxx.RowCount(); row++) {
                dw_spxx.SetItem(row, "ywbh", ywbh);
                dw_spxx.SetItem(row, "cxh", row);
            }


            for (row = 1; row <= dw_sjzs.RowCount(); row++) {
                dw_sjzs.SetItem(row, "ywbh", ywbh);
                dw_sjzs.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_sjbzcl.RowCount(); row++) {
                dw_sjbzcl.SetItem(row, "ywbh", ywbh);
                dw_sjbzcl.SetItem(row, "cxh", row);
            }

            for (row = 1; row <= dw_zsbh.RowCount(); row++) {
                dw_zsbh.SetItem(row, "ywbh", ywbh);
                dw_zsbh.SetItem(row, "cxh", row);
            }
            for (row = 1; row <= dw_sjsfdj.RowCount(); row++) {
                dw_sjsfdj.SetItem(row, "ywbh", ywbh);
                dw_sjsfdj.SetItem(row, "cxh", row);
            }
            for (row = 1; row <= dw_dzqk.RowCount(); row++) {
                dw_dzqk.SetItem(row, "ywbh", ywbh);
                dw_dzqk.SetItem(row, "cxh", row);
            }
            dw_sxgsjjl.SetItem(1, "ywbh", ywbh)
            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_spxx.ResetUpdate();
            dw_sjzs.ResetUpdate();
            dw_sjbzcl.ResetUpdate();
            dw_zsbh.ResetUpdate();
            dw_sjsfdj.ResetUpdate();
            dw_dzqk.ResetUpdate();
            dw_sxgsjjl.ResetUpdate();
            dw_log.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");

            //            var num = QsWebSoft.PubMethod.InertDzqk(ywbh).value;
            //            if (num == 1) {
            //                zdmc_dzyq = "Y";
            //            }
            dw_master.Modify("ywbh.Tabsequence=0");
            //            //同步生鲜港数据
            //            self.Tbsxg();
            //dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion

    //#region dw_spdhsr ItemChanged
    this.dw_spdhsr_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jlsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spdhsr.GetItemNumber(row, "zj")
            var ldc_djjg = ldc_zj / data;
            var ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
            dw_spdhsr.SetItem(row, "djjg", ldc_djjg);
            self.SetZje();
            self.CacluMjztj(row);
        }

        else if (dwoName == "zj") {
            if (data < 0) {
                alert("总价不能小于0,请重新输入!");
                return 1;
            }
            var ldc_jlsl = dw_spdhsr.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (data / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spdhsr.SetItem(row, "djjg", ldc_djjg);
            }

            ldc_zmz = dw_spdhsr.GetItemNumber(row, "zmz")
            if (ldc_zmz != null && ldc_zmz != 0) {
                var ldc_dj = (data / ldc_zmz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spdhsr.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
        }

        else if (dwoName == "zmz" || dwoName == "zjz") {

            var zmz = dw_spxx.GetItemNumber(row, "zmz");
            var zjz = dw_spxx.GetItemNumber(row, "zjz");
            if (zmz < zjz) {
                requestor.MessageBox("提示", "总净重不能小于总毛重!")
                return;
            }

            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }

            if (dwoName == "zjz") {
                dw_spdhsr.SetItem(row, "fdsl", parseFloat(data));
            }

            if (dwoName == "zmz") {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zmz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zmz";
                    };
                };
            } else {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zjz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zjz";
                    };
                };
            }

            var ldc_zj = dw_spdhsr.GetItemNumber(row, "zj")
            if (ldc_zj != null || ldc_zj != 0) {
                var ldc_dj = (ldc_zj / data);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spdhsr.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
            self.CacluMjztj(row);


        }
        else if (dwoName == "sppp") {
            dw_spxx.SetItem(row, "sppp_yw", data)
        }
        else if (dwoName == "spgg") {
            dw_spxx.SetItem(row, "spgg_yw", data)
        }


        if (dwoName == "fpje") {
            var ldc_yf = dw_spxx.GetItemNumber(row, "yf")
            if (ldc_yf == null) {
                ldc_yf = 0;
            }
            var ldc_bxf = dw_spxx.GetItemNumber(row, "bxf")
            if (ldc_bxf == null) {
                ldc_bxf = 0;
            }
            var ldc_zj = parseFloat(ldc_yf) + parseFloat(ldc_bxf) + parseFloat(data);
            dw_spxx.SetItem(row, "zj", ldc_zj)
            var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz")
            if (ldc_zjz == null) {
                ldc_zjz = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_zjz != 0) {
                var ldc_dj = (ldc_zj / ldc_zjz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }

            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl == null) {
                ldc_jlsl = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_jlsl != 0) {
                var ldc_djjg = (ldc_zj / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }

            //生鲜港
            if (zdmc == null || zdmc == "") {
                zdmc = "zje";
            } else {
                if (zdmc.indexOf("zje") < 1) {
                    zdmc = zdmc + ',' + "zje";
                };
            };
        }

        if (dwoName == "zjz") {
            self.CacluFcybf();
        }

        if (dwoName == "bzzl") {
            if (data == "9C91") {
                var row_find_q = dw_sjsfdj.Find("sfdjbh = 'Q'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_q, "sfxz", "Y")
                var row_find_v = dw_sjsfdj.Find("sfdjbh = 'V'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_v, "sfxz", "N")
            } else {
                var row_find_q = dw_sjsfdj.Find("sfdjbh = 'Q'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_q, "sfxz", "N")
                var row_find_v = dw_sjsfdj.Find("sfdjbh = 'V'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_v, "sfxz", "Y")
            }
            dw_sjsfdj.AcceptText()
            var sfdjbm = "";
            var sfdj = "";
            for (row1 = 1; row1 <= dw_sjsfdj.RowCount(); row1++) {
                var sfxz = dw_sjsfdj.GetItemString(row1, "sfxz")
                if ((sfxz == "Y" && row != row1) || (row == row1 && data == "Y")) {
                    var sfdjbh = dw_sjsfdj.GetItemString(row1, "sfdjbh")
                    var sfdjmc = dw_sjsfdj.GetItemString(row1, "sfdjmc")
                    if (sfdjbh == null) {
                        sfdjbh = "";
                    }
                    sfdjbm = sfdjbm + sfdjbh

                    if (sfdj == "") {
                        sfdj = sfdjmc;
                    } else {
                        sfdj = sfdj + ',' + sfdjmc
                    }


                }
            }
            dw_master.SetItem(1, "sfdjbm", sfdjbm)
            dw_master.SetItem(1, "sfdj", sfdj)
        }

    }
    //#endregion

    this.Csdzqk = function () {
        var ycddm = dw_master.GetItemString(1, "ycddm");
        var ls_cpxxkbm = "";
        var ls_spbm = "";
        var ls_spzwmc = "";
        var ls_ctr_code = "";
        var ls_ctr_cname = "";
        var ls_zfbqk = "";
        var ls_dzmc = "";

        for (row = dw_dzqk.RowCount(); row > 0; row--) {
            var spbm = dw_dzqk.GetItemString(row, "spbm");
            var li_find = dw_spxx.Find("spbm = '" + spbm + "'", 1, dw_spxx.RowCount());
            if (li_find == 0) {
                dw_dzqk.DeleteRow(row);
            }
        }

        var ls_cpxxkbm = "";
        var sfcr = "N";
        var ysfs = dw_master.GetItemString(1, "ysfs");
        var mdg = dw_master.GetItemString(1, "mdg");
        for (row = 1; row <= dw_spxx.RowCount(); row++) {
            var spbm = dw_spxx.GetItemString(row, "spbm");
            var li_rowcount = ds_dzqk.Retrieve(ycddm, spbm);

            if (li_rowcount > 0) {
                var cpxxkbm = ds_dzqk.GetItemString(1, "cpxxkbm");
                var li_find = dw_dzqk.Find("cpxxkbm = '" + cpxxkbm + "'", 1, ds_dzqk.RowCount());

                if (li_find > 0) {
                    continue;
                } else {

                    for (row1 = 1; row1 <= ds_dzqk.RowCount(); row1++) {
                        ls_cpxxkbm = ds_dzqk.GetItemString(row1, "cpxxkbm");
                        ls_spbm = ds_dzqk.GetItemString(row1, "spbm");
                        ls_spzwmc = ds_dzqk.GetItemString(row1, "spzwmc");
                        ls_ctr_code = ds_dzqk.GetItemString(row1, "ctr_code");
                        ls_ctr_cname = ds_dzqk.GetItemString(row1, "ctr_cname");
                        ls_zfbqk = ds_dzqk.GetItemString(row1, "zfbqk");
                        ls_dzmc = ds_dzqk.GetItemString(row1, "dzmc");
                        var li_find = dw_dzqk.Find("trim(dzmc) = trim('" + ls_dzmc + "')", 1, dw_dzqk.RowCount());

                        if (li_find < 1 && (ysfs == "海运" || (ysfs == "空运" && ((mdg == "上海" && ls_zfbqk == "正本") || mdg != "上海") && (ls_dzmc == "原产地证" || ls_dzmc == "植检证")))) {
                            var li_insert = dw_dzqk.InsertRow(0);
                            sfcr = "Y";
                            dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
                            dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
                            dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
                            dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
                            dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
                            dw_dzqk.SetItem(li_insert, "zymdj", "Y");
                            dw_dzqk.SetItem(li_insert, "zfbqk", ls_zfbqk);
                            dw_dzqk.SetItem(li_insert, "dzmc", ls_dzmc);
                        };
                    };
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
            dw_dzqk.SetItem(li_insert, "zymdj", "Y");
            dw_dzqk.SetItem(li_insert, "zfbqk", "副本");
            dw_dzqk.SetItem(li_insert, "dzmc", "发票");
        }

        var li_find_td = dw_dzqk.Find("dzmc = '提单'", 1, dw_dzqk.RowCount());

        if (li_find_td < 1 && ysfs == "海运") {
            var li_insert = dw_dzqk.InsertRow(0);
            dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
            dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
            dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
            dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
            dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
            dw_dzqk.SetItem(li_insert, "zymdj", "Y");
            ls_zfbqk = dw_master.GetItemString(1, "tdlx");
            dw_dzqk.SetItem(li_insert, "zfbqk", ls_zfbqk);
            dw_dzqk.SetItem(li_insert, "dzmc", "提单");
        };
        var zydl = dw_master.GetItemString(1, "zydl");
        if (zydl == "自营") {
            var li_find_bjwts = dw_dzqk.Find("dzmc = '报检委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bjwts < 1 && ysfs == "海运") {
                var li_insert = dw_dzqk.InsertRow(0);
                dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
                dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
                dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
                dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
                dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
                dw_dzqk.SetItem(li_insert, "zymdj", "Y");
                dw_dzqk.SetItem(li_insert, "zfbqk", "正本");
                dw_dzqk.SetItem(li_insert, "dzmc", "报检委托书");
            };

            var li_find_bgwts = dw_dzqk.Find("dzmc = '报关委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bgwts < 1 && ysfs == "海运") {
                var li_insert = dw_dzqk.InsertRow(0);
                dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
                dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
                dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
                dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
                dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
                dw_dzqk.SetItem(li_insert, "zymdj", "Y");
                dw_dzqk.SetItem(li_insert, "zfbqk", "正本");
                dw_dzqk.SetItem(li_insert, "dzmc", "报关委托书");
            };
        } else {
            var li_find_bjwts = dw_dzqk.Find("dzmc = '报检委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bjwts > 0) {
                dw_dzqk.DeleteRow(li_find_bjwts);

            };

            var li_find_bgwts = dw_dzqk.Find("dzmc = '报关委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bgwts > 0) {
                dw_dzqk.DeleteRow(li_find_bgwts);
            };
        }

    };

    //#region 插入商品
    this.InsertRow = function () {
        if (lastdw.GetName() == "dw_jzxxx") {

            var sfymx = requestor.GetParm("sfymx");
            if (sfymx != '0') {
                tb_1.SetEnabled("btn_rowinsert", false);
                requestor.MessageBox("提示", "已产生费用明细，不可修改！", ICON.Information);
                return;
            }

            var khbm = dw_master.GetItemString(1, "khbm");
            var khmc = dw_master.GetItemString(1, "khmc");
            var clfs = dw_master.GetItemString(1, "clfs");
            var lxr = dw_master.GetItemString(1, "lxr");
            var lxdh = dw_master.GetItemString(1, "lxdh");
            var ysfs = dw_master.GetItemString(1, "ysfs");
            var row = dw_jzxxx.InsertRow(dw_jzxxx.GetRow());
            dw_jzxxx.ScrollToRow(row);
            dw_jzxxx.SetItem(row, "ysfs", ysfs);
            dw_jzxxx.SetItem(row, "sjshrbm", khbm);
            dw_jzxxx.SetItem(row, "sjshrmc", khmc);
            dw_jzxxx.SetItem(row, "clfs", clfs);
            dw_jzxxx.SetItem(row, "lxr", lxr);
            dw_jzxxx.SetItem(row, "lxdh", lxdh);

            dw_jzxxx.SetFocus();
        }

        if (lastdw.GetName() == "dw_spxx") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            row = dw_spxx.InsertRow(dw_spxx.GetRow());
            var dwo = dw_spxx.GetDataObject();

            iw_Commodity_Select.SetRow(row);
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(dw_spxx);
            iw_Commodity_Select.SetSjzs(dw_sjzs);
            iw_Commodity_Select.SetDzqk(dw_dzqk);
            iw_Commodity_Select.SetMaster(dw_master);
            iw_Commodity_Select.SetLx("insertrow");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);
            var row = dw_spxx.GetRow()
            if (row > 0) {
                il_sp_id = dw_spxx.GetItemNumber(row, "sp_id"); ;
                if (il_sp_id == null) {
                    il_sp_id = 0;
                }
                dw_sjzs.SetFilter(" sp_id = " + il_sp_id)
                dw_sjzs.Filter()
            }

        }


        if (lastdw.GetName() == "dw_sjzs") {
            var row = dw_sjzs.InsertRow(dw_sjzs.GetRow());
            dw_sjzs.SetItem(row, "sp_id", il_sp_id)
            dw_sjzs.ScrollToRow(row);
            dw_sjzs.SetFocus();
        }

        if (lastdw.GetName() == "dw_sjbzcl") {
            var row = dw_sjbzcl.InsertRow(dw_sjbzcl.GetRow());
            dw_sjbzcl.SetItem(row, "sp_id", il_sp_id)
            dw_sjbzcl.ScrollToRow(row);
            dw_sjbzcl.SetFocus();
        }
        if (lastdw.GetName() == "dw_dzqk") {
            var row = dw_dzqk.InsertRow(dw_dzqk.GetRow());
            dw_dzqk.ScrollToRow(row);
            dw_dzqk.SetFocus();
        }


    }
    //#endregion

    //#region 添加明细
    this.AddRow = function ()
    {
        if ( lastdw.GetName() == "dw_spxx" )
        {
            dw_spxx.AcceptText();
            if ( iw_Commodity_Select == null )
                iw_Commodity_Select = new W_Commodity_Select();
            var ShareMode = requestor.GetParm( "ShareMode" );
            var ywy = requestor.GetParm( "userid" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            var dwo = dw_spxx.GetDataObject();
            iw_Commodity_Select.SetDwo( dwo );
            iw_Commodity_Select.SetDetailDW( dw_spxx );
            iw_Commodity_Select.SetLx( "addrow" );
            iw_Commodity_Select.SetSjzs( dw_sjzs );
            iw_Commodity_Select.SetDzqk( dw_dzqk );
            iw_Commodity_Select.SetMaster( dw_master );
            iw_Commodity_Select.SetRow( 0 );
            requestor.Open( "/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select );
            var row = dw_spxx.GetRow()
            if ( row > 0 )
            {
                il_sp_id = dw_spxx.GetItemNumber( row, "sp_id" ); ;
                if ( il_sp_id == null )
                {
                    il_sp_id = 0;
                }
                dw_sjzs.SetFilter( " sp_id = " + il_sp_id )
                dw_sjzs.Filter()
            }
        }

        if ( lastdw.GetName() == "dw_jzxxx" )
        {

            var sfymx = requestor.GetParm( "sfymx" );
            
            if ( sfymx != '0' )
            {
                tb_1.SetEnabled( "btn_rowadd", false );
                requestor.MessageBox( "提示", "已产生费用明细，不可修改！", ICON.Information );
                return;
            }

            var ysfs = dw_master.GetItemString( 1, "ysfs" )
            var khbm = dw_master.GetItemString( 1, "khbm" );
            var khmc = dw_master.GetItemString( 1, "khmc" );
            var clfs = dw_master.GetItemString( 1, "clfs" );
            var lxr = dw_master.GetItemString( 1, "lxr" );
            var lxdh = dw_master.GetItemString( 1, "lxdh" );

            var row = dw_jzxxx.InsertRow( 0 );
            dw_jzxxx.ScrollToRow( row );
            dw_jzxxx.SetItem( row, "ysfs", ysfs );
            dw_jzxxx.SetItem( row, "sjshrbm", khbm );
            dw_jzxxx.SetItem( row, "sjshrmc", khmc );
            dw_jzxxx.SetItem( row, "clfs", clfs );

            if ( ysfs == "海运" )
            {
                dw_jzxxx.SetItem( row, "xx", "40尺高柜" );
                dw_jzxxx.SetItem( row, "xl", "冷藏集装箱" );
                var Tybm = QsWebSoft.PubMethod.ReadWldwTybm( khbm ).value;
                lxr = QsWebSoft.PubMethod.ReadWldwTybmLxr( Tybm ).value;
                lxdh = QsWebSoft.PubMethod.ReadWldwTybmLxdh( Tybm ).value;
            };
            dw_jzxxx.SetItem( row, "lxr", lxr );
            dw_jzxxx.SetItem( row, "lxdh", lxdh );
            dw_jzxxx.SetFocus();
        }

        if ( lastdw.GetName() == "dw_sjzs" )
        {

            var row = dw_sjzs.InsertRow( 0 );
            dw_sjzs.SetItem( row, "sp_id", il_sp_id )
            dw_sjzs.ScrollToRow( row );
            dw_sjzs.SetFocus();
        }

        if ( lastdw.GetName() == "dw_sjbzcl" )
        {

            var row = dw_sjbzcl.InsertRow( 0 );
            dw_sjbzcl.SetItem( row, "sp_id", il_sp_id )
            dw_sjbzcl.ScrollToRow( row );
            dw_sjbzcl.SetFocus();
        }

        if ( lastdw.GetName() == "dw_dzqk" )
        {

            var row = dw_dzqk.InsertRow( 0 );
            dw_dzqk.ScrollToRow( row );
            dw_dzqk.SetFocus();
        }


    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_master.GetItemString(1, "ywbh")
        if (ywbh = null && operation == "copy") {
            requestor.MessageBox("提示", "复制状态下，请先保存后再删除明细数据！", ICON.Information);
            lastdw.SetFocus();
            return;

        }

        if (lastdw.GetName() == "dw_jzxxx") {

            var sfymx = requestor.GetParm("sfymx");
            if (sfymx != '0') {
                tb_1.SetEnabled("btn_rowdelete", false);
                requestor.MessageBox("提示", "已产生费用明细，不可修改！", ICON.Information);
                return;
            }

            if (dw_tdzb.GetItemString(1, "jzxgjzxh") == "Y") {
                requestor.MessageBox("", "该票不允许删除集装箱号!");
                return;
            }


            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == 3) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                } else {
                    lastdw.DeleteRow(row);
                }

            } else {
                if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                        lastdw.SetFocus();
                        return;
                    }
                }

                var contractcontainerid = lastdw.GetItemString(row, "contractcontainerid");

                if (contractcontainerid == "" || contractcontainerid == null) {
                    lastdw.DeleteRow(row);
                } else {
                    lastdw.DeleteRow(row);
                    var row = dw_log.InsertRow(0);
                    var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                    dw_log.SetItem(row, "eid", serialNumber);
                    dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
                    dw_log.SetItem(row, "funname", "DelHddz");
                    dw_log.SetItem(row, "mainid", contractcontainerid);
                    dw_log.ScrollToRow(row);
                }
            }
        }

        if (lastdw.GetName() == "dw_spxx") {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            if (row > 0) {
                if (row > 0) {
                    var il_sp_id = lastdw.GetItemNumber(row, "sp_id");
                    if (il_sp_id == null) {
                        il_sp_id = 0;
                    }
                    dw_sjzs.SetFilter("sp_id = " + il_sp_id);
                    dw_sjzs.Filter();

                    for (row1 = dw_sjzs.RowCount(); row1 > 0; row1--) {
                        dw_sjzs.DeleteRow(row1)
                    }
                }

                lastdw.DeleteRow(row);

                if (row > 1) {
                    var il_sp_id = lastdw.GetItemNumber(row - 1, "sp_id");
                    if (il_sp_id == null) {
                        il_sp_id = 0;
                    }
                    dw_sjzs.SetFilter("sp_id = " + il_sp_id);
                    dw_sjzs.Filter();
                }
            }
            self.SetZje();
        }


        if (lastdw.GetName() == "dw_dzqk") {

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);

            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            lastdw.DeleteRow(row);
        }

    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        if (lastdw.GetName() == 'dw_jzxxx') {

            var sfymx = requestor.GetParm("sfymx");
            if (sfymx != '0') {
                tb_1.SetEnabled("btn_rowcopy", false);
                requestor.MessageBox("提示", "已产生费用明细，不可修改！", ICON.Information);
                return;
            }

            var row = dw_jzxxx.GetRow();
            if (row <= 0)
                return;
            dw_jzxxx.RowsCopy(row, row, DWBUFFER.Primary, dw_jzxxx, row + 1, DWBUFFER.Primary)
            dw_jzxxx.ScrollToRow(row + 1);
        }
        if (lastdw.GetName() == 'dw_spxx') {
            var row = dw_spxx.GetRow();
            if (row <= 0)
                return;

            var il_sp_id = dw_spxx.GetItemNumber(row, "sp_id_max")
            var sp_id = dw_spxx.GetItemNumber(row, "sp_id")
            dw_sjzs.SetFilter(" sp_id = " + sp_id)
            dw_sjzs.Filter()
            var rowcount = dw_sjzs.RowCount();
            dw_sjzs.RowsCopy(1, dw_sjzs.RowCount(), DWBUFFER.Primary, dw_sjzs, dw_sjzs.RowCount() + 1, DWBUFFER.Primary)

            for (row1 = rowcount + 1; row1 <= dw_sjzs.RowCount(); row1++) {
                dw_sjzs.SetItem(row1, "sp_id", il_sp_id)
            }
            dw_spxx.RowsCopy(row, row, DWBUFFER.Primary, dw_spxx, row + 1, DWBUFFER.Primary)
            dw_spxx.SetItem(row + 1, "sp_id", il_sp_id);

            dw_sjzs.SetFilter(" sp_id = " + il_sp_id)
            dw_sjzs.Filter()
            dw_spxx.ScrollToRow(row + 1);
            self.SetZje();
            self.Csdzqk();
        }


        if (lastdw.GetName() == 'dw_dzqk') {
            var row = dw_dzqk.GetRow();
            if (row <= 0)
                return;
            dw_dzqk.RowsCopy(row, row, DWBUFFER.Primary, dw_dzqk, row + 1, DWBUFFER.Primary)
            dw_dzqk.ScrollToRow(row + 1);
        }
    }
    //#endregion


    //#region 合同打印 
    this.PrintContract = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_contract.SetDataObject("dw_hddz_print_contract");
        dw_print_contract.Retrieve(ywbh);
        dw_print_contract.PrintPreview();
    }
    //#endregion

    //#region 实际卖方合同打印 
    this.PrintSjmfContract = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_sjmf_contract.SetDataObject("dw_hddz_print_sjmf_contract");
        dw_print_sjmf_contract.Retrieve(ywbh);
        dw_print_sjmf_contract.PrintPreview();
    }
    //#endregion

    //#region 发票打印
    this.PrintInvoice = function () {

        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_invoice.SetDataObject("dw_hddz_print_invoice");
        var zje = dw_master.GetItemNumber(1, "zje");
        var gwgysmc = dw_master.GetItemString(1, "gwgysmc");
        self.Jedx(zje);

        var strFilePath = "/Images/logon/";
        dw_print_invoice.Retrieve(ywbh, result)
        strFilePath = strFilePath + gwgysmc + ".jpg";
        dw_print_invoice.SetPicture("p_1", strFilePath);
        dw_print_invoice.PrintPreview()
    }
    //#endregion

    //#region 发票打印
    this.PrintSjmfInvoice = function () {

        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_invoice.SetDataObject("dw_hddz_print_invoice");
        var zje = dw_master.GetItemNumber(1, "zje");
        var zjsmc = dw_master.GetItemString(1, "zjsmc");
        self.Jedx(zje);

        var strFilePath = "/Images/logon/";
        dw_print_sjmf_invoice.Retrieve(ywbh, result)
        strFilePath = strFilePath + zjsmc + ".jpg";
        dw_print_sjmf_invoice.SetPicture("p_1", strFilePath);
        dw_print_sjmf_invoice.PrintPreview()
    }
    //#endregion

    //#region 箱单打印 
    this.PrintPackingList = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_packinglist.SetDataObject("dw_hddz_print_packinglist");
        dw_print_packinglist.Retrieve(ywbh);
        dw_print_packinglist.PrintPreview();
    }
    //#endregion


    //#region 实际卖方箱单打印 
    this.PrintSjmfPackingList = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_sjmf_packinglist.SetDataObject("dw_hddz_print_sjmf_packinglist");
        dw_print_sjmf_packinglist.Retrieve(ywbh);
        dw_print_sjmf_packinglist.PrintPreview();
    }
    //#endregion

    
    //#region 直提货情况说明打印 
    this.PrintZthqksm = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_zthqksm.SetDataObject("dw_hddz_print_zthqksmlist");
        dw_print_zthqksm.Retrieve(ywbh);
        dw_print_zthqksm.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_qksm = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_qksm.SetDataObject("dw_hddz_print_qksm");
        dw_print_qksm.Retrieve(ywbh);
        dw_print_qksm.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_bzjsqs = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_bzjsqs.SetDataObject("dw_hddz_print_bzjsqs");
        dw_print_bzjsqs.Retrieve(ywbh);
        dw_print_bzjsqs.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_dlbgwts = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_dlbgwts.SetDataObject("dw_hddz_print_dlbgwts");
        dw_print_dlbgwts.Retrieve(ywbh);
        dw_print_dlbgwts.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_hczm = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_hczm.SetDataObject("dw_hddz_print_hczm");
        dw_print_hczm.Retrieve(ywbh);
        dw_print_hczm.PrintPreview();
    }
    //#endregion
    //#region 打印
    this.Print_ecczm = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_print_ecczm.SetDataObject("dw_hddz_print_ecczm");
        dw_print_ecczm.Retrieve(ywbh);
        dw_print_ecczm.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_forma = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        dw_forma.SetDataObject("dw_hddz_print_cdz");
        dw_forma.Retrieve(ywbh);
        var strFilePath = "/Images/cdzyz.png"; 
        dw_forma.SetPicture("p_1", strFilePath);
     
        dw_forma.PrintPreview();
    }
    //#endregion

    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "hgbm") {
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ywy = requestor.GetParm("userid"); ;
            var ShareMode = requestor.GetParm("ShareMode"); ;
            var Dlwtf = requestor.GetParm("Dlwtf"); ;
            iw_Commodity_Select.SetDetailDW(dw_cmd);
            iw_Commodity_Select.SetDwo("dw_mxd_edit_cmd");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Commodity_Select);
            dw_cmd.SetFocus();
        }
    }
    //#endregion

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);
       
//        dw_jzxxx.Reset();
//        dw_jzxxx.InsertRow(0);

        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");
        var sfdj = requestor.GetParm("sfdj");
        var sfdjbm = requestor.GetParm("sfdjbm");
        var zsbh = requestor.GetParm("zsbh");
        var zsmc = requestor.GetParm("zsmc"); 
        var date = new Date();
        var arrayobj = new Array(4);
        arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyWtf(Dlwtf).value;
        if (arrayobj == null) {
            var cname = "";
            var ename = "";
            var eaddr = "";
            var tt_no = "";
            var address = "";
            var tel = "";
            var fax = "";
            var sh = "";
            var hgdm = "";
            var khyh = "";
            var yhzh = "";
        }
        else {
            if (arrayobj.length == 0) {
                var cname = "";
                var ename = "";
                var eaddr = "";
                var tt_no = "";
                var address = "";
                var tel = "";
                var fax = "";
                var sh = "";
                var hgdm = "";
                var khyh = "";
                var yhzh = "";

            }
            else {
                cname = arrayobj[0];
                ename = arrayobj[1];
                eaddr = arrayobj[2];
                tt_no = arrayobj[3];
                address = arrayobj[4];
                tel = arrayobj[5];
                fax = arrayobj[6];
                sh = arrayobj[7];
                hgdm = arrayobj[8];
                khyh = arrayobj[9];
                yhzh = arrayobj[10];
                //                var yhzh = "";
            }
        }

        var ywyobj = new Array(2);
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid(userid).value;
        if (ywyobj == null) {
            var ywy = "";
            var bm = "";
        }
        else {
            if (ywyobj.length == 0) {
                var ywy = "";
                var bm = "";

            }
            else {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }

        var Dlwtf = requestor.GetParm("Dlwtf");
        var Dlxyh = null;
        Dlxyh = QsWebSoft.PubMethod.GetDlxyhImformationbyUserid(Dlwtf).value;
 
        dw_master.SetItem(1, 'zbr', userid);
        dw_master.SetItem(1, 'jcgzry', userid);
        dw_master.SetItem(1, 'sdry', userid);
        dw_master.SetItem(1, 'dlwtf', Dlwtf);
        dw_master.SetItem(1, 'sfdj', sfdj);
        dw_master.SetItem(1, 'sfdjbm', sfdjbm);
        dw_master.SetItem(1, 'zsbh', zsbh);
        dw_master.SetItem(1, 'zsmc', zsmc);      
        self.SetEditMode("new");

        var zmyhl = QsWebSoft.PubMethod.Wb2Usd("USD").value;
        dw_master.SetItem(1, "wbbb", "USD")
        dw_master.SetItem(1, "zmyhl", zmyhl)

        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "jzxh", "");
            dw_jzxxx.SetItem(row, "xx", "");
            dw_jzxxx.SetItem(row, "xl", "");
        }
        var bghg = dw_master.GetItemString(1, "bghg")
        if (bghg == null || bghg == "") {
            dw_master.SetItem(1, "bghgbm", "admin0618")
            dw_master.SetItem(1, "bghg", "浦东机场海关")
            dw_master.SetItem(1, "bghgjc", "浦东机场海关")
            dw_master.SetItem(1, "bghgpym", "pdjchg")
        }


        if ( ds_jdr.RowCount() > 0 )
        {
            var jdrbm = ds_jdr.GetItemString( 1, "yw_khbm" );
            var jdrjc = ds_jdr.GetItemString( 1, "khjc" );
            var jdrmc = ds_jdr.GetItemString( 1, "khmc" );
            var jdrpym = ds_jdr.GetItemString( 1, "pym" );
        } else
        {
            dw_master.SetItem( 1, "jdrbm", "admin0003" );
            dw_master.SetItem( 1, "jdrjc", "上海欧恒" );
            dw_master.SetItem( 1, "jdrmc", "上海欧恒进出口有限公司" );
            dw_master.SetItem( 1, "jdrpym", "shohjckyxgs" );
        }

        var dw_jdrmc = dw_master.GetItemString( 1, "jdrmc" );

        if ( dw_jdrmc == "" || dw_jdrmc == null )
        {
            if ( jdrmc == "" || jdrmc == null )
            {
                dw_master.SetItem( 1, "jdrbm", "admin0003" );
                dw_master.SetItem( 1, "jdrjc", "上海欧恒" );
                dw_master.SetItem( 1, "jdrmc", "上海欧恒进出口有限公司" );
                dw_master.SetItem( 1, "jdrpym", "shohjckyxgs" );
            } else
            {
                dw_master.SetItem( 1, "jdrbm", jdrbm );
                dw_master.SetItem( 1, "jdrjc", jdrjc );
                dw_master.SetItem( 1, "jdrmc", jdrmc );
                dw_master.SetItem( 1, "jdrpym", jdrpym );
            }
        }


       dw_sxgsjjl.Reset();
       dw_sxgsjjl.InsertRow(0);

    }
    //#endregion


   //#region 新建
    this.AddOcr = function () {
        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");
        var sfdj = requestor.GetParm("sfdj");
        var sfdjbm = requestor.GetParm("sfdjbm");
        var zsbh = requestor.GetParm("zsbh");
        var zsmc = requestor.GetParm("zsmc");
        var date = new Date();
        var arrayobj = new Array(4);
        arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyWtf(Dlwtf).value;
        if (arrayobj == null) {
            var cname = "";
            var ename = "";
            var eaddr = "";
            var tt_no = "";
            var address = "";
            var tel = "";
            var fax = "";
            var sh = "";
            var hgdm = "";
            var khyh = "";
            var yhzh = "";
        }
        else {
            if (arrayobj.length == 0) {
                var cname = "";
                var ename = "";
                var eaddr = "";
                var tt_no = "";
                var address = "";
                var tel = "";
                var fax = "";
                var sh = "";
                var hgdm = "";
                var khyh = "";
                var yhzh = "";

            }
            else {
                cname = arrayobj[0];
                ename = arrayobj[1];
                eaddr = arrayobj[2];
                tt_no = arrayobj[3];
                address = arrayobj[4];
                tel = arrayobj[5];
                fax = arrayobj[6];
                sh = arrayobj[7];
                hgdm = arrayobj[8];
                khyh = arrayobj[9];
                yhzh = arrayobj[10];
                //                var yhzh = "";
            }
        }

        var ywyobj = new Array(2);
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid(userid).value;
        if (ywyobj == null) {
            var ywy = "";
            var bm = "";
        }
        else {
            if (ywyobj.length == 0) {
                var ywy = "";
                var bm = "";

            }
            else {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }

        var Dlwtf = requestor.GetParm("Dlwtf");
        var Dlxyh = null;
        Dlxyh = QsWebSoft.PubMethod.GetDlxyhImformationbyUserid(Dlwtf).value;

        dw_master.SetItem(1, 'zbr', userid);
        dw_master.SetItem(1, 'jcgzry', userid);
        dw_master.SetItem(1, 'sdry', userid);
        dw_master.SetItem(1, 'dlwtf', Dlwtf);
        dw_master.SetItem(1, 'sfdj', sfdj);
        dw_master.SetItem(1, 'sfdjbm', sfdjbm);
        dw_master.SetItem(1, 'zsbh', zsbh);
        dw_master.SetItem(1, 'zsmc', zsmc);

        var zmyhl = QsWebSoft.PubMethod.Wb2Usd("USD").value;
        dw_master.SetItem(1, "wbbb", "USD")
        dw_master.SetItem(1, "zmyhl", zmyhl)
        dw_master.SetItem(1, "hdgsbm", "admin0004")
        dw_master.SetItem(1, "hdgsmc", "上海鸿神货运代理有限公司")
        dw_master.SetItem(1, "hdgsjc", "上海鸿神")
        dw_master.SetItem(1, "hdgspym", "shhshydlyxgs")
        dw_master.SetItem(1, "bggsbm", "40010142")
        dw_master.SetItem(1, "bggsmc", "上海欧恒国际货运代理有限公司")
        dw_master.SetItem(1, "bggsjc", "欧恒货运")
        dw_master.SetItem(1, "bggspym", "shohgjhydlyxgs")
        dw_master.SetItem(1, "bjgsbm", "40010142")
        dw_master.SetItem(1, "bjgsmc", "上海欧恒国际货运代理有限公司")
        dw_master.SetItem(1, "bjgsjc", "欧恒货运")
        dw_master.SetItem(1, "bjgspym", "shohgjhydlyxgs")
        dw_master.SetItem(1, "mdg", "上海")

        dw_master.SetItem(1, "jyjbm", "40010126")
        dw_master.SetItem(1, "jyjmc", "龙吴检疫局")
        dw_master.SetItem(1, "jyjjc", "龙吴检疫局")
        dw_master.SetItem(1, "jyjpym", "lwjy")
        dw_master.SetItem(1, "hzdwdqdm", "31222")
        dw_master.SetItem(1, "sbdwdm", "3111980075")
        dw_master.SetItem(1, "myfs", "0110")
        dw_master.SetItem(1, "zmfs", "101")
        dw_master.SetItem(1, "bxfbj", "1")
        dw_master.SetItem(1, "bxfbb", "USD")
        dw_master.SetItem(1, "BXFJE", 0.3)
        dw_master.SetItem(1, "bzzl", "2")
        dw_master.SetItem(1, "bjgslxr", "王春华")
        dw_master.SetItem(1, "bjgslxdh", "13916274081")
        dw_master.SetItem(1, "bjydm", "3100708095")
        dw_master.SetItem(1, "qyxz", "9")
        dw_master.SetItem(1, "hwcfd", "龙吴")
        dw_master.SetItem(1, "spts", 30)
        dw_master.SetItem(1, "bjlb", "13")
        var mt = dw_master.GetItemString(1, "mt");
        if (mt == "" || mt == null) {
            dw_master.SetItem(1, "mt", "N/M")
        }
        dw_master.SetItem(1, "bjgssjjgdm", "3100910593")
        dw_master.SetItem(1, "rjmdd", "310112")
        dw_master.SetItem(1, "jyjsjjgdm", "310040")
        dw_master.SetItem(1, "sfjy", "Y")
        //根据运输方式默认报关海关
        var ysfs = dw_master.GetItemString(1, "ysfs");
        if (ysfs == "海运") {
            dw_master.SetItem(1, "bghgbm", "admin0612")
            dw_master.SetItem(1, "bghg", "龙吴海关")
            dw_master.SetItem(1, "bghgjc", "龙吴海关")
            dw_master.SetItem(1, "bghgpym", "lwhg")
            dw_master.SetItem(1, "ysgj", "29")

        }
        if (ysfs == "空运") {
            dw_master.SetItem(1, "bghgbm", "admin0618")
            dw_master.SetItem(1, "bghg", "浦东机场海关")
            dw_master.SetItem(1, "bghgjc", "浦东机场海关")
            dw_master.SetItem(1, "bghgpym", "pdjchg")
        }
        ////
        //根据汇总集装箱号，插入集装箱默认信息
        var hz_jzxh = dw_master.GetItemString(1, "hz_jzxh");
        var jzxh = new Array(hz_jzxh);
        var ysfs = dw_master.GetItemString(1, "ysfs")
        var khbm = dw_master.GetItemString(1, "khbm");
        var khmc = dw_master.GetItemString(1, "khmc");
        var clfs = dw_master.GetItemString(1, "clfs");
        var lxr = dw_master.GetItemString(1, "lxr");
        var lxdh = dw_master.GetItemString(1, "lxdh");
        //        requestor.MessageBox("", jzxh.length);
        //        for (var i = 0; i < jzxh.length; i++) {
        //            requestor.MessageBox("", jzxh[i]);
        //            var li_insertrow = dw_jzxxx.InsertRow(0);
        //            dw_jzxxx.SetItem(li_insertrow, "jzxh", jzxh[i]);
        //            dw_jzxxx.SetItem(li_insertrow, "ysfs", ysfs);
        //            dw_jzxxx.SetItem(li_insertrow, "sjshrbm", khbm);
        //            dw_jzxxx.SetItem(li_insertrow, "sjshrmc", khmc);
        //            dw_jzxxx.SetItem(li_insertrow, "clfs", clfs);

        //            if (ysfs == "海运") {
        //                dw_jzxxx.SetItem(li_insertrow, "xx", "40尺高柜");
        //                dw_jzxxx.SetItem(li_insertrow, "xl", "冷藏集装箱");
        //                var Tybm = QsWebSoft.PubMethod.ReadWldwTybm(khbm).value;
        //                lxr = QsWebSoft.PubMethod.ReadWldwTybmLxr(Tybm).value;
        //                lxdh = QsWebSoft.PubMethod.ReadWldwTybmLxdh(Tybm).value;
        //            };
        //            dw_jzxxx.SetItem(li_insertrow, "lxr", lxr);
        //            dw_jzxxx.SetItem(li_insertrow, "lxdh", lxdh);
        //        }



        ///



        ////
        var ycddm = dw_master.GetItemString(1, "ycddm");
        if (ycddm != "" && ycddm != null) {
            var ycdobj = new Array(4);

            ycdobj = QsWebSoft.PubMethod.GetYcd(ycddm).value;
            if (ycdobj == null) {
                requestor.MessageBox("", "没有对应的原产地信息")
            }
            else {
                if (ycdobj.length == 0) {

                }
                else {
                    var ename = ycdobj[0];
                    var hgcode = ycdobj[1];
                    var yzbh = ycdobj[2];
                    var dqdm = ycdobj[3];
                    var ctr_area2 = ycdobj[4];
                    dw_master.SetItem(1, 'ycd', ename);
                    dw_master.SetItem(1, 'ycddm', hgcode);
                    dw_master.SetItem(1, 'qiyunguo', ename);
                    dw_master.SetItem(1, 'qiyunguodm', hgcode);
                    dw_master.SetItem(1, 'yzbh', yzbh);
                    dw_master.SetItem(1, 'dqdm', dqdm);
                    dw_master.SetItem(1, 'ctr_area2', ctr_area2);
                }
            }
        }
        ///

        var qyg = dw_master.GetItemString(1, "qyg");
        if (qyg != "" && qyg != null) {
            var qygobj = new Array(2);
            qygobj = QsWebSoft.PubMethod.GetQyg(qyg).value;
            if (qygobj == null) {
                requestor.MessageBox("", "没有对应的启运港信息")
            }
            else {
                if (qygobj.length == 0) {

                }
                else {
                    var qyg = qygobj[0];
                    var qygdm = qygobj[1];
                    var qygsjgkdm = qygobj[2];
                    dw_master.SetItem(1, 'qyg', qyg);
                    dw_master.SetItem(1, 'qygdm', qygdm);
                    dw_master.SetItem(1, 'qygsjgkdm', qygsjgkdm);
                }
            }
        }

        dw_sxgsjjl.Reset();
        dw_sxgsjjl.InsertRow(0);


        for (row = 1; row <= dw_spxx.RowCount(); row++) {
            var spobj = new Array(18);
            var spmc_yw = dw_spxx.GetItemString(row, "spmc_yw");

            spobj = QsWebSoft.PubMethod.GetSpxx(spmc_yw).value;

            if (spobj == null) {
                requestor.MessageBox("", "没有对应的商品信息")
            }
            else {
                if (spobj.length == 0) {

                }
                else {
                    var yw_spbm = spobj[0];
                    var spzwmc = spobj[1];
                    var spywmc = spobj[2];
                    var hgbm = spobj[3];
                    var spgg = spobj[4];
                    var hgjldw = spobj[5];
                    var jldw_e = spobj[6];
                    var sjjldw = spobj[7];
                    var sfysx = spobj[8];
                    var sfygzfs = spobj[9];
                    var sfypz = spobj[10];
                    var sfydj = spobj[11];
                    var sfybzgg = spobj[12];
                    var sfypp = spobj[13];
                    var sfygg = spobj[14];
                    var sfycf = spobj[15];
                    var sfyxjgjggy = spobj[16];
                    var sfzy = spobj[17];
                    var sfyqt = spobj[18];


                    var tsl = QsWebSoft.PubMethod.GetTslByHgbm(hgbm).value;
                    var zzsl = QsWebSoft.PubMethod.GetZzslByHgbm(hgbm).value;

                    if (spzwmc.indexOf("鲜") >= 0) {
                        dw_spxx.SetItem(row, "spsx", "鲜");
                    };
                    if (spzwmc.indexOf("鲜椰子") >= 0) {
                        dw_spxx.SetItem(row, "spsx", "鲜、未去内壳（内果皮）");
                        dw_spxx.SetItem(row, "zy", "非种用");
                    };

                    dw_spxx.SetItem(row, "spbm", yw_spbm);
                    dw_spxx.SetItem(row, "hgbm", hgbm);
                    dw_spxx.SetItem(row, "spmc", spzwmc);
                    dw_spxx.SetItem(row, "spmc_yw", spywmc);
                    dw_spxx.SetItem(row, "sp_id", row)
                    //                    dw_spxx.SetItem(row, "spgg", spgg);
                    dw_spxx.SetItem(row, "hgjldw", hgjldw);
                    dw_spxx.SetItem(row, "fdjldw", hgjldw);
                    dw_spxx.SetItem(row, "jldw", jldw_e);
                    dw_spxx.SetItem(row, "sjjldw", sjjldw);
                    dw_spxx.SetItem(row, "sfysx", sfysx);
                    dw_spxx.SetItem(row, "sfygzfs", sfygzfs);
                    dw_spxx.SetItem(row, "sfypz", sfypz);
                    dw_spxx.SetItem(row, "sfydj", sfydj);
                    dw_spxx.SetItem(row, "sfybzgg", sfybzgg);
                    dw_spxx.SetItem(row, "sfypp", sfypp);
                    dw_spxx.SetItem(row, "sfygg", sfygg);
                    dw_spxx.SetItem(row, "sfycf", sfycf);
                    dw_spxx.SetItem(row, "sfyxjgjggy", sfyxjgjggy);
                    dw_spxx.SetItem(row, "sfzy", sfzy);
                    dw_spxx.SetItem(row, "sfyqt", sfyqt);
                    dw_spxx.SetItem(row, "sjyt", "2");
                    dw_spxx.SetItem(row, "zlqz", 1);
                    if (spzwmc.indexOf("鲜") >= 0) {
                        dw_spxx.SetItem(row, "spsx", "鲜");
                    };
                    if (spzwmc.indexOf("鲜椰子") >= 0) {
                        dw_spxx.SetItem(row, "spsx", "鲜、未去内壳（内果皮）");
                        dw_spxx.SetItem(row, "zy", "非种用");
                    };
                    dw_spxx.SetItem(row, "zjmsfs", "1");
                    dw_spxx.SetItem(row, "yt", "11");
                    var spid = dw_spxx.Describe("evaluate('max(sp_id)',0)");
                    spid++;
                    dw_spxx.SetItem(row, "sp_id", spid)


                    var ll_insertrow1 = dw_sjzs.InsertRow(0);
                    dw_sjzs.SetItem(ll_insertrow1, "sp_id", spid)
                    dw_sjzs.SetItem(ll_insertrow1, "szkzdm", "07")


                }
            }

        }

        ///


        var zmz = dw_fpzb.GetItemNumber(1, "zmz");
        var zmz_sum = 0;
        var jlsl_qz_sum = 0;
        if (dw_spxx.RowCount() > 1) {
            zmz_sum = dw_spxx.GetItemNumber(1, "zmz_sum");
            jlsl_qz_sum = dw_spxx.GetItemNumber(1, "jlsl_qz_sum");
            if (zmz != zmz_sum && zmz_sum != 0 && zmz_sum != null) {
//                requestor.MessageBox("提示", "读取过来的总毛重和商品合计出来的总毛重不一致，请注意检查");
            }
        }

        var zjz = dw_fpzb.GetItemNumber(1, "zjz");
        var zjz_sum = 0;
        var jlsl_qz_sum = 0;
        if (dw_spxx.RowCount() > 1) {
            zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
            jlsl_qz_sum = dw_spxx.GetItemNumber(1, "jlsl_qz_sum");
            if (zjz != zjz_sum && zjz_sum != 0 && zjz_sum != null) {
//                requestor.MessageBox("提示", "读取过来的总净重和商品合计出来的总净重不一致，请注意检查");
            }
        }

        for (row = 1; row <= dw_spxx.RowCount(); row++) {
            var ldc_zmz = dw_spxx.GetItemNumber(row, "zmz");

            if (ldc_zmz == null || ldc_zmz == 0) {
                var jlsl_qz = dw_spxx.GetItemNumber(row, "jlsl_qz");
                ldc_zmz = zmz * jlsl_qz / jlsl_qz_sum;
                ldc_zmz = parseFloat(ldc_zmz.toFixed(2));
                dw_spxx.SetItem(row, "zmz", ldc_zmz);
            }
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
            //计算毛重、净重
            if (ldc_jlsl > 0 && ldc_zmz > 0) {
                var ldc_djmz = ldc_zmz / ldc_jlsl;
                ldc_djmz = parseFloat(ldc_djmz.toFixed(4));
                dw_spxx.SetItem(row, "djmz", ldc_djmz);
            }

            var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz");
            if (ldc_zjz == null || ldc_zjz == 0) {
                var jlsl_qz = dw_spxx.GetItemNumber(row, "jlsl_qz");
                var ldc_zjz = zjz * jlsl_qz / jlsl_qz_sum;

                ldc_zjz = parseFloat(ldc_zjz.toFixed(2));
                dw_spxx.SetItem(row, "zjz", ldc_zjz);
                dw_spxx.SetItem(row, "fdsl", ldc_zjz);
            } else {
                dw_spxx.SetItem(row, "fdsl", ldc_zjz);
            }
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
            //计算毛重、净重
            if (ldc_jlsl > 0 && ldc_zjz > 0) {
                var ldc_djjz = ldc_zjz / ldc_jlsl;
                ldc_djjz = parseFloat(ldc_djjz.toFixed(4));
                dw_spxx.SetItem(row, "djjz", ldc_djjz);
            }
        }


        self.CacluFcybf()
        for (row = 1; row <= dw_spxx.RowCount(); row++) {

            var ldz_zj = dw_spxx.GetItemNumber(row, "zj");
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (ldz_zj / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                 dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }
 
        }

        //////



        this.Csdzqk();
        ////
    }
   //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();
        var mxq = null;

        dw_master.SetItem(1, "ywbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate());
        var date_null = new Date("0000/00/00");

        dw_master.SetItem(1, "yjkgsj", dw_master.GetItemDate(1, 'fzyjkgsj'));
        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "hth", "");
        dw_master.SetItem(1, "beizhu", "");

        dw_master.SetItem(1, "beizhu_xgrq", Date());
        dw_master.SetItem(1, "sjkgsj", Date());
        dw_master.SetItem(1, "invoiceno", "");
        dw_master.SetItem(1, "invoice_date", Date());
        dw_master.SetItem(1, "hz_jzxh", "");
        dw_master.SetItem(1, "hz_spmc", "");
        dw_master.SetItem(1, "hz_spywmc", "");
        dw_master.SetItem(1, "hz_hgbm", "");
        dw_master.SetItem(1, "hz_pz", "");
        dw_master.SetItem(1, "dmbz", "N");

        dw_master.SetItem(1, "clfs", "");
        var ysfs = dw_master.GetItemString(1, "ysfs");
        //        if (ysfs == "海运") {
        //            dw_master.SetItem(1, "mtdm", "");
        //        }
        dw_master.SetItem(1, "mxq", mxq);
        dw_master.SetItem(1, "bgdh", "");
        dw_master.SetItem(1, "dzlx", "");
        dw_master.SetItem(1, "zxs", 0);
        dw_master.SetItem(1, "bzzl", "");
        dw_master.SetItem(1, "zmz", 0)
        dw_master.SetItem(1, "zjz", 0);
        dw_master.SetItem(1, "zxs", 0);
        dw_master.SetItem(1, "ztdh", "");
        dw_master.SetItem(1, "jsdwbm", "");
        dw_master.SetItem(1, "jsdwmc", "");
        dw_master.SetItem(1, "jsdwjc", "");
        dw_master.SetItem(1, "jsdwpym", "");
        dw_master.SetItem(1, "gjyf", "N");
        dw_master.SetItem(1, "jzxsl", 0);
        dw_master.SetItem(1, "yfje", 0);
        dw_master.SetItem(1, "hdzljcsj", date_null.getVarDate());
        dw_master.SetItem(1, "wlfyqr", 0);
        dw_master.SetItem(1, "gwgys_tymc", "");
        dw_master.SetItem(1, "jyjyzs", "");
        dw_master.SetItem(1, "wjgd", "");
        dw_master.SetItem(1, "sfyjyjyzs", "");
        dw_master.SetItem(1, "sfysd", "");
        dw_master.SetItem(1, "sfygdwj", "");
        dw_master.SetItem(1, "dztxts", 0);
        dw_master.SetItem(1, "tdzt", 0);
        dw_master.SetItem(1, "sdtgfs", 0);
        dw_master.SetItem(1, "zdzfs", 0);
        dw_master.SetItem(1, "ohdlxy", "");
        dw_master.SetItem(1, "zzrq", date_null.getVarDate());
        dw_master.SetItem(1, "dzqk", "");
        dw_master.SetItem(1, "qrdf", "");
        dw_master.SetItem(1, "qrdfsj", date_null.getVarDate());
//        dw_master.SetItem(1, "jdrbm", "");
//        dw_master.SetItem(1, "jdrmc", "");
//        dw_master.SetItem(1, "jdrjc", "");
//        dw_master.SetItem(1, "jdrpym", "");
        dw_master.SetItem(1, "dlxyh", "");
        dw_master.SetItem(1, "ohdlxy", "");
        dw_master.SetItem(1, "sfsjjyw", "");
        dw_master.SetItem(1, "zzrq", date_null.getVarDate());
        dw_master.SetItem(1, "SupplierSellID", "");
        dw_master.SetItem(1, "dlxyh", "");
        dw_master.SetItem(1, "ohdlxy", "");
        dw_master.SetItem(1, "sfsjjyw", "");
        dw_master.SetItem(1, "zzrq", date_null.getVarDate());
//        var xhgqjc = dw_master.GetItemString(1, "xhgqjc");
//        if (xhgqjc == "洋三" || xhgqjc == "洋山") {
//            dw_master.SetItem(1, "qgld", "T");
//        } else {
//            dw_master.SetItem(1, "qgld", "");
//        };

        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "clfs", "");

            dw_jzxxx.SetItem(row, "sjshrbm", "");
            dw_jzxxx.SetItem(row, "sjshrmc", "");
            
            dw_jzxxx.SetItem(row, "lxr", "");
            dw_jzxxx.SetItem(row, "lxdh", "");
            dw_jzxxx.SetItem(row, "shdz", "");
            dw_jzxxx.SetItem(row, "zybz", "");
            dw_jzxxx.SetItem(row, "zyxx", "");
            
            dw_jzxxx.SetItem(row, "zjfscwld_shrbm", "");
            dw_jzxxx.SetItem(row, "zjfscwld_shrmc", "");
            dw_jzxxx.SetItem(row, "zjfscwld_zyxx", "");
            
            dw_jzxxx.SetItem(row, "jschfscwld_shrbm", "");
            dw_jzxxx.SetItem(row, "jschfscwld_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr2", "");
            dw_jzxxx.SetItem(row, "lxdh2", "");
            dw_jzxxx.SetItem(row, "jschfscwld_zyxx", "");
            
            dw_jzxxx.SetItem(row, "fscwld3_shrbm", "");
            dw_jzxxx.SetItem(row, "fscwld3_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr3", "");
            dw_jzxxx.SetItem(row, "lxdh3", "");
            dw_jzxxx.SetItem(row, "fscwld3_zyxx", "");
           
            dw_jzxxx.SetItem(row, "fscwld4_shrbm", "");
            dw_jzxxx.SetItem(row, "fscwld4_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr4", "");
            dw_jzxxx.SetItem(row, "lxdh4", "");
            dw_jzxxx.SetItem(row, "fscwld4_zyxx", "");
            dw_jzxxx.SetItem(row, "fscwld4_zyxx", 0);
            dw_jzxxx.SetItem(row, "wlfyqr", "N");
            dw_jzxxx.SetItem(row, "contractcontainerid", "");
        }
       
        //        for (row = dw_spxx.RowCount(); row > 0; row--) {
        //            var sp_id = dw_spxx.GetItemNumber(row, "sp_id");
        //            if (sp_id == null) {
        //                dw_spxx.SetItem(row, "sp_id", row);
        //            }
        //        }

        zdmc = "";
        self.SetZje();
        dw_dzqk.Reset();
        this.Csdzqk();

        //重新按收货单位来设置是否是加急业务
        var shdwbm = dw_master.GetItemString(1, "shdwbm");
        var sfsjjyw = QsWebSoft.PubMethod.Wldw_Sfsjjyw(shdwbm);
        dw_master.SetItem(1, "sfsjjyw", sfsjjyw);
        //

        self.SetEditMode("copy");
    }
    //#endregion

    this.dw_master_ButtonClicked = function (Row, dwoName) {
        if (editMode == "show")
            return;



        if (dwoName == "b_yfqk") {

            //生鲜港
            dw_master.SetItem(1, "yfbj", "")
            if (zdmc == null || zdmc == "") {
                zdmc = "yfbj";
            } else {
                if (zdmc.indexOf(dwoName) < 1) {
                    zdmc = zdmc + ',' + "yfbj";
                };
            };
        }


        if (dwoName == "b_bxfqk") {
            dw_master.SetItem(1, "bxfbj", "")
            dw_master.SetItem(1, "bxfbb", "")
            dw_master.SetItem(1, "bxfje", parseFloat(null))
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "yfbj";
            } else {
                if (zdmc.indexOf(dwoName) < 1) {
                    zdmc = zdmc + ',' + "bxfbj,bxfb,b,bxfje";
                };
            };
        }


        if (dwoName == "b_zsbh") {
            if (ib_zsbh) {
                dw_zsbh.Show();
                ib_zsbh = false;
            }
            else {
                dw_zsbh.Hide()
                ib_zsbh = true;
            }

        }

        if (dwoName == "b_sjsfdj") {
            if (ib_sjsfdj) {
                dw_sjsfdj.Show();
                ib_sjsfdj = false;
            }
            else {
                dw_sjsfdj.Hide()
                ib_sjsfdj = true;
            }

        }

        if (dwoName == "b_pg") {
            if (iw_Hddz_Zqhc == null)
                iw_Hddz_Zqhc = new W_Hddz_Zqhc();

            var Dlwtf = requestor.GetParm("Dlwtf");
            var cm = dw_master.GetItemString(Row, "cm");
            var hcorhbh_zq = dw_master.GetItemString(Row, "hcorhbh_zq");
            var yjkgsj = dw_master.GetItemDate(Row, "yjkgsj");
            var zbr = dw_master.GetItemString(Row, "zbr")
            var userid = requestor.GetParm("userid");

            iw_Hddz_Zqhc.SetDataWindow(dw_master);
            iw_Hddz_Zqhc.SetData(cm);
            iw_Hddz_Zqhc.SetRow(Row);
            iw_Hddz_Zqhc.SetZbr(zbr);
            iw_Hddz_Zqhc.SetYjkgsj(yjkgsj);
            iw_Hddz_Zqhc.SetHcorhbh_zq(hcorhbh_zq);

            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Zqhc", iw_Hddz_Zqhc);

        }

    }

    function Todate(num) { //Fri Oct 31 18:00:00 UTC+0800 2008
        num = num + "";
        var date = "";
        var month = new Array();
        month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jun"] = 6;
        month["Jul"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
        var week = new Array();
        week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
        str = num.split(" ");
        date = str[5] + "-";
        date = date + month[str[1]] + "-" + str[2];
        return date;
    }

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        //        if (dwoName == "yjkgsj") {
        //            if (iw_RqTime_Select == null)
        //                iw_RqTime_Select = new W_RqTime_Select();
        //                khlx = "hdgs";
        //                var ywy = requestor.GetParm("userid");
        //                var ShareMode = requestor.GetParm("ShareMode");
        //                var Dlwtf = requestor.GetParm("Dlwtf");
        //                iw_RqTime_Select.SetDataWindow(dw_master);
        //                iw_RqTime_Select.SetData("hddz_hdgs");
        //                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_RqTime_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_RqTime_Select);
        //               dw_master.SetFocus();


        //        }

        //        if (dwoName == "clqy") {
        //            dw_master.AcceptText();
        //            dw_spxx.AcceptText();
        //            dw_master.GetChild("clqy", dwc);
        //            var ycddm = dw_master.GetItemString(1, "ycddm");
        //            if (ycddm == null) {
        //                ycddm = "";
        //            }

        //            var spbm = "";
        //            if (dw_spxx.RowCount() > 0) {
        //                spbm = dw_spxx.GetItemString(1, "spbm")
        //            };

        //            dwc.Retrieve(ycddm, spbm);

        //        }
        if (dwoName == "hdgsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "hdgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hddz_hdgs");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bxfbj,bxfb,b,bxfje";
            } else {
                zdmc = zdmc + ',' + "bxfbj,bxfb,b,bxfje";

            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "bggsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "bggs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_bggs");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bggsbm,bggsmc,bggsjc,bggspym,sbdwdm";
            } else {
                zdmc = zdmc + ',' + "bggsbm,bggsmc,bggsjc,bggspym,sbdwdm";

            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "bjgsbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "bjgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_bjgs");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bjgsbm,bjgsmc,bjgsjc,bjgspym,bjgssjjgdm";
            } else {
                zdmc = zdmc + ',' + "bjgsbm,bjgsmc,bjgsjc,bjgspym,bjgssjjgdm";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }
        if (dwoName == "bm") {
            dw_master.GetChild("bm", dwc);
            var jdrbm = dw_master.GetItemString(1, "jdrbm");
            if (jdrbm != null) {
                dwc.Retrieve(jdrbm);
            }

        }
        if (dwoName == "bghg_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "hg";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_bghg");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "bghgbm,bghg,bghgjc,bghgpym";
            } else {
                zdmc = zdmc + ',' + "bghgbm,bghg,bghgjc,bghgpym";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "jyj_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "jyj";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_jyj");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jyjbm,jyjmc,jyjjc,jyjpym,jyjsjjgdm,hwcfd";
            } else {
                zdmc = zdmc + ',' + "jyjbm,jyjmc,jyjjc,jyjpym,jyjsjjgdm,hwcfd";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }


        if (dwoName == "khbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "wts";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            var Dlxyh = dw_master.GetItemString(1, "dlxyh");

            //            if (Dlxyh != null && Dlxyh != "") {
            //                requestor.MessageBox("提示", "代理协议号已经选择，不能再更改客户!", ICON.StopSign)
            //                return;
            //            }

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "khmc,khjc,khpym,lxr,lxdh,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            } else {
                zdmc = zdmc + ',' + "khmc,khjc,khpym,lxr,lxdh,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };


            if (zydl == "代理") {
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_kh_dl");

                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (zydl == "自营") {
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_kh_zy");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }


        }

        if (dwoName == "jdr_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            jdr = "jdr";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_jdr");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jdrbm,jdrmc,jdrjc,jdrpym";
            } else {
                zdmc = zdmc + ',' + "jdrbm,jdrmc,jdrjc,jdrpym";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select);
            dw_master.SetFocus();
        }
        //物流公司
        if (dwoName == "wlgs_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            jdr = "wlgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_wlgsjc");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "wlgsbm,wlgsmc,wlgsjc,wlgspym";
            } else {
                zdmc = zdmc + ',' + "wlgsbm,wlgsmc,wlgsjc,wlgspym";

            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "shdwbm_t") {
            if (iw_Hddz_Dlxy_Select == null)
                iw_Hddz_Dlxy_Select = new W_Hddz_Dlxy_Select();
            iw_Hddz_Dlxy_Select.SetDataWindow(dw_master);
            var zydl = dw_master.GetItemString(1, "zydl");
            var zbrq = dw_master.GetItemDate(1, "zbrq");
            var zbrqstr = Todate(zbrq);
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            } else {
                zdmc = zdmc + ',' + "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };


            if (zydl == "代理") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_dl");
            }
            else if (zydl == "自营") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_zy");
            }
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select&zbrq=" + zbrqstr, iw_Hddz_Dlxy_Select);
            dw_master.SetFocus();

            //            if (iw_Wldw_Select == null)
            //                iw_Wldw_Select = new W_Wldw_Select();
            //            khlx = "gncgs";
            //            var ywy = requestor.GetParm("userid");
            //            var ShareMode = requestor.GetParm("ShareMode");
            //            var Dlwtf = requestor.GetParm("Dlwtf");
            //            var zydl = dw_master.GetItemString(1, "zydl");
            //            var gjyf = dw_master.GetItemNumber(1, "gjyf");
            //            if (gjyf > 0) {
            //                requestor.MessageBox("提示", "国际运费已经支付，如果需要修改收货单位，请通知财务修改！");
            //                return
            //            }
            //            iw_Wldw_Select.SetDataWindow(dw_master);
            //            if (zydl == "代理") {
            //                iw_Wldw_Select.SetData("hddz_shdw_dl");
            //                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            //                dw_master.SetFocus();
            //            }
            //            if (zydl == "自营") {
            //                iw_Wldw_Select.SetData("hddz_shdw_zy");
            //                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            //                dw_master.SetFocus();
            //            }
        }

        if (dwoName == "tzr_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            iw_Wldw_Select.SetDataWindow(dw_master);
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "tzrbm,tzrmc,tzrjc,tzrpym";
            } else {
                zdmc = zdmc + ',' + "tzrbm,tzrmc,tzrjc,tzrpym";
            };


            iw_Wldw_Select.SetData("hddz_tzr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "jydwbm_t" || dwoName == "jydwbm1_t" || dwoName == "jydwbm2_t" || dwoName == "jydwbm3_t" || dwoName == "jydwbm4_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            } else {
                zdmc = zdmc + ',' + "jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };

            if (zydl == "代理") {
                khlx = "wmgs";
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_jydw");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            } else if (zydl == "自营") {
                khlx = "gncgs";
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_jydw");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus()
            }
        }

        if (dwoName == "gwgysbm_t" || dwoName == "gwgysbm1_t" || dwoName == "gwgysbm2_t" || dwoName == "gwgysbm3_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gwgys";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_gwgys");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "gwgysbm,gwgysmc,gwgysjc,gwgyspym,zjsbm,zjsmc,zjsjc,zjspym,mygb";
            } else {
                zdmc = zdmc + ',' + "gwgysbm,gwgysmc,gwgysjc,gwgyspym,zjsbm,zjsmc,zjsjc,zjspym,mygb";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "cdgs_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cdorhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_cdgs");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "cdgsbm,cdgs,cdgsjc,cdgspym";
            } else {
                zdmc = zdmc + ',' + "cdgsbm,cdgs,cdgsjc,cdgspym";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "cyr_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cgsorhkgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_cyr");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "cyrbm,cyr,cyrjc,cyrpym";
            } else {
                zdmc = zdmc + ',' + "cyrbm,cyr,cyrjc,cyrpym";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zjs_t" || dwoName == "zjs1_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "zjs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_zjs");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "zjsbm,zjsmc,zjsjc,zjspym,mygb";
            } else {
                zdmc = zdmc + ',' + "zjsbm,zjsmc,zjsjc,zjspym,mygb";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "mygb_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetDataWindow1(dw_dzqk);
            iw_Country_Select.SetData("hddz_mygb");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "mygb";
            } else {
                zdmc = zdmc + ',' + "mygb";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "gwhd_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gwhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_gwhd");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "gwhdbm,gwhdmc,gwhdjc,gwhdpym";
            } else {
                zdmc = zdmc + ',' + "gwhdbm,gwhdmc,gwhdjc,gwhdpym";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }


        if (dwoName == "xhgq_t") {
            var ysfs = dw_master.GetItemString(1, "ysfs");
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

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "xhgqbm,xhgq,xhgqjc,xhgqpym,mtdm,jcka,rjka";
            } else {
                zdmc = zdmc + ',' + "xhgqbm,xhgq,xhgqjc,xhgqpym,mtdm,jcka,rjka";
            };

            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_xhgq");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "qyg_t" || dwoName == "qyg1_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("qyg");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "qyg,qygdm,qygsjgkdm";
            } else {
                zdmc = zdmc + ',' + "qyg,qygdm,qygsjgkdm";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zzgk_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("zzgk");
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "zzgk";
            } else {
                zdmc = zdmc + ',' + "zzgk";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }




        if (dwoName == "dlxyh_t") {

            if (iw_Hddz_Dlxy_Select == null)
                iw_Hddz_Dlxy_Select = new W_Hddz_Dlxy_Select();
            iw_Hddz_Dlxy_Select.SetDataWindow(dw_master);
            var zydl = dw_master.GetItemString(1, "zydl");
            var zbrq = dw_master.GetItemDate(1, "zbrq");
            var zbrqstr = Todate(zbrq);

            if (zydl == "代理") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_dl");
            }
            else if (zydl == "自营") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_zy");
            }
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            } else {
                zdmc = zdmc + ',' + "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };


            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select&zbrq=" + zbrqstr, iw_Hddz_Dlxy_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "hygsmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cdorhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hddz_hygs");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "hygsbm,hygsmc,hygsjc,hygspym";
            } else {
                zdmc = zdmc + ',' + "hygsbm,hygsmc,hygsjc,hygspym";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }


        if (dwoName == "ycd_t" || dwoName == "ycd2_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetDataWindow1(dw_dzqk);
            iw_Country_Select.SetData("ycd_ky");
            iw_Country_Select.SetDataWindow2(dw_spxx);


            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "ycd,ycddm,qiyunguo,qiyunguodm,yzbhdqdm,ctr_area2,rjka";
            } else {
                zdmc = zdmc + ',' + "ycd,ycddm,qiyunguo,qiyunguodm,yzbhdqdm,ctr_area2,rjka";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "qiyunguo_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("qiyunguo");

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "qiyunguo,qiyunguodm";
            } else {
                zdmc = zdmc + ',' + "qiyunguo,qiyunguodm";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }


        if (dwoName == "yfcdr_t") {
            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "yfcdrbm,yfcdr,yfcdrjc,yfcdrpym";
            } else {
                zdmc = zdmc + ',' + "yfcdrbm,yfcdr,yfcdrjc,yfcdrpym";
            };


            var khorhd = dw_master.GetItemString(1, "khorhd")
            if (khorhd == "客户") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                var khlx = "gncgs";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");

                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_yf_yfcdr");
                iw_Wldw_Select.SetRow(1);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (khorhd == "货代") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "hdgs";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");

                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_yf_yfcdr");
                iw_Wldw_Select.SetRow(1);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        }

        if (dwoName == "jsdwbm_t") {

            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            var khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_jsdw");
            iw_Wldw_Select.SetRow(1);

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "jsdwbm,jsdwmc,jsdwjc,jsdwpym";
            } else {
                zdmc = zdmc + ',' + "jsdwbm,jsdwmc,jsdwjc,jsdwpym";
            };
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "t_clqy") {
            dw_master.AcceptText();
            dw_spxx.AcceptText();
            if (iw_Clqy_Select == null)
                iw_Clqy_Select = new W_Clqy_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            row = dw_master.GetRow();
            var dwo = dw_master.GetDataObject();
            iw_Clqy_Select.SetRow(row);
            iw_Clqy_Select.SetDwo(dwo);
            iw_Clqy_Select.SetDetailDW(dw_master);

            var ycddm = dw_master.GetItemString(1, "ycddm"); ;
            if (ycddm == null) {
                requestor.MessageBox("提示", "请选择原产地！");
                return;
            };

            var spbm = "";
            if (dw_spxx.RowCount() > 0) {
                spbm = dw_spxx.GetItemString(1, "spbm")
            };

            if (ycddm == null) {
                requestor.MessageBox("提示", "请选择商品！");
                return;
            };

            //生鲜港 
            if (zdmc == null || zdmc == "") {
                zdmc = "clqy";
            } else {
                zdmc = zdmc + ',' + "clqy";
            };

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Clqy_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf + '&Ycddm=' + ycddm + '&Spbm=' + spbm, iw_Clqy_Select);

        }

        if (dwoName == "gwgysdz_t") {

            if (iw_Wldw_Dz_Select == null)
                iw_Wldw_Dz_Select = new W_Wldw_Dz_Select();
            var yw_khbm = dw_master.GetItemString(1, "gwgysbm");
            iw_Wldw_Dz_Select.SetDataWindow(dw_master);
            iw_Wldw_Dz_Select.SetData("hddz_gwgysdz");
            iw_Wldw_Dz_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Dz_Select&yw_khbm=" + yw_khbm, iw_Wldw_Dz_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "zjsdz_t") {
            if (iw_Wldw_Dz_Select == null)
                iw_Wldw_Dz_Select = new W_Wldw_Dz_Select();
            var yw_khbm = dw_master.GetItemString(1, "gwgysbm");
            iw_Wldw_Dz_Select.SetDataWindow(dw_master);
            iw_Wldw_Dz_Select.SetData("hddz_zjsdz");
            iw_Wldw_Dz_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Dz_Select&yw_khbm=" + yw_khbm, iw_Wldw_Dz_Select);
            dw_master.SetFocus();

        }
    }
    //#endregion


    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (zdmc == null || zdmc == "") {
            zdmc = dwoName;
        } else {
            if (zdmc.indexOf(dwoName) < 1) {
                zdmc = zdmc + ',' + dwoName;
            };
        };
        //生鲜港
        if (dwoName == "zje") {
            //生鲜港
            if (zdmc == null || zdmc == "") {
                zdmc = "zje";
            } else {
                if (zdmc.indexOf(dwoName) < 1) {
                    zdmc = zdmc + ',' + "zje";
                };
            };
        }
        if (dwoName == "khorhd") {
            if (data == "客户") {
                var khbm = dw_master.GetItemString(1, "khbm")
                var khmc = dw_master.GetItemString(1, "khmc")
                var khjc = dw_master.GetItemString(1, "khjc")
                var khpym = dw_master.GetItemString(1, "khpym")

                dw_master.SetItem(1, "yfcdrbm", khbm)
                dw_master.SetItem(1, "yfcdr", khmc)
                dw_master.SetItem(1, "yfcdrjc", khjc)
                dw_master.SetItem(1, "yfcdrpym", khpym)

                dw_master.SetItem(1, "jsdwbm", null)
                dw_master.SetItem(1, "jsdwmc", null)
                dw_master.SetItem(1, "jsdwjc", null)
                dw_master.SetItem(1, "jsdwpym", null)
            }
            else if (data == "货代") {
                var hdgsbm = dw_master.GetItemString(1, "hdgsbm")
                var hdgsmc = dw_master.GetItemString(1, "hdgsmc")
                var hdgsjc = dw_master.GetItemString(1, "hdgsjc")
                var hdgspym = dw_master.GetItemString(1, "hdgspym")

                dw_master.SetItem(1, "yfcdrbm", hdgsbm)
                dw_master.SetItem(1, "yfcdr", hdgsmc)
                dw_master.SetItem(1, "yfcdrjc", hdgsjc)
                dw_master.SetItem(1, "yfcdrpym", hdgspym)

                var khbm = dw_master.GetItemString(1, "khbm")
                var khmc = dw_master.GetItemString(1, "khmc")
                var khjc = dw_master.GetItemString(1, "khjc")
                var khpym = dw_master.GetItemString(1, "khpym")

                dw_master.SetItem(1, "jsdwbm", khbm)
                dw_master.SetItem(1, "jsdwmc", khmc)
                dw_master.SetItem(1, "jsdwjc", khjc)
                dw_master.SetItem(1, "jsdwpym", khpym)

            };

        }



        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            if (zusdhl == null || zusdhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
            }

            dw_master.SetItem(1, "zmyhl", zusdhl);
            self.SetZje();
            var jgfs = dw_master.GetItemString(1, "jgfs");
            if (jgfs != "CIF") {
                dw_master.SetItem(1, "bxfbb", data);
            }
        }

        if (dwoName == "zydl") {

            zdmc = zdmc + ',jydwbm,jydwmc,jydwjc,jydwpym';

            if (data == "代理") {
                dw_master.SetItem(1, "jydwbm", "admin0003");
                dw_master.SetItem(1, 'jydwmc', "上海欧恒进出口有限公司");
                dw_master.SetItem(1, 'jydwjc', "上海欧恒");
                dw_master.SetItem(1, 'jydwpym', "shohjckyxgs");

                var ename = dw_master.GetItemString(1, "ycd");
                var mp = dw_spxx.GetItemString(1, "spmc_yw");

                dw_master.SetItem(1, "rjhwjyjyzm", "Y");

            }
            if (data == "自营") {
                dw_master.SetItem(1, 'rjhwjyjyzm', "Y");

                //                var shdwbm = dw_master.GetItemString(1, "shdwbm");
                //                var shdwmc = dw_master.GetItemString(1, "shdwmc");
                //                var shdwjc = dw_master.GetItemString(1, "shdwjc");
                //                var shdwpym = dw_master.GetItemString(1, "shdwpym");
                //                dw_master.SetItem(1, "jydwbm", shdwbm);
                //                dw_master.SetItem(1, 'jydwmc', shdwmc);
                //                dw_master.SetItem(1, 'jydwjc', shdwjc);
                //                dw_master.SetItem(1, 'jydwpym', shdwpym);
            }

        }

//        if (dwoName == "ysfs") {
//            //更新行号
//            for (row = dw_jzxxx.RowCount(); row > 0; row--) {
//                    dw_jzxxx.SetItem(row, "jzxh", "");
//                    dw_jzxxx.SetItem(row, "xx", "");
//                    dw_jzxxx.SetItem(row, "xl", "");
//                }
//            var bghg = dw_master.GetItemString(1, "bghg")
//            if (bghg == null || bghg == "") {
//                    dw_master.SetItem(1, "bghgbm", "admin0618")
//                    dw_master.SetItem(1, "bghg", "浦东机场海关")
//                    dw_master.SetItem(1, "bghgjc", "浦东机场海关")
//                    dw_master.SetItem(1, "bghgpym", "pdjchg")
//            }



//            //                        var jyjmc = dw_master.GetItemString(1, "jyjmc")
//            //                        if (jyjmc == null || jyjmc == "") {
//            //                            if (data == "海运") {
//            //                                dw_master.SetItem(1, "jyjbm", "40010126")
//            //                                dw_master.SetItem(1, "jyjmc", "龙吴检疫局")
//            //                                dw_master.SetItem(1, "jyjjc", "龙吴检疫局")
//            //                                dw_master.SetItem(1, "jyjpym", "lwjyj")
//            //                                dw_master.SetItem(1, "jyjsjjgdm", "310040")
//            //                                dw_master.SetItem(1, "hwcfd", "龙吴")
//            //                            } else {
//            //                                dw_master.SetItem(1, "jyjbm", "40010126")
//            //                                dw_master.SetItem(1, "jyjmc", "龙吴检疫局")
//            //                                dw_master.SetItem(1, "jyjjc", "龙吴检疫局")
//            //                                dw_master.SetItem(1, "jyjpym", "lwjyj")
//            //                                dw_master.SetItem(1, "jyjsjjgdm", "310040")
//            //                                dw_master.SetItem(1, "hwcfd", "龙吴")
//            //            //                    dw_master.SetItem(1, "jyjbm", "admin0611")
//            //            //                    dw_master.SetItem(1, "jyjmc", "浦东检疫局")
//            //            //                    dw_master.SetItem(1, "jyjjc", "浦东检疫局")
//            //            //                    dw_master.SetItem(1, "jyjpym", "pdjyj")
//            //            //                    dw_master.SetItem(1, "jyjsjjgdm", "310200")
//            //            //                    dw_master.SetItem(1, "hwcfd", "上农批")
//            //                            }
//            //                        }




//        }

        //如果是否有运费打勾，价格方式变为FOB
        if (dwoName == "sfyyf") {
            if (data == "Y") {
                dw_master.SetItem(1, "jgfs", "FOB")
                dw_master.SetItem(1, "yfbj", "3")
                dw_master.SetItem(1, "yfbb", "USD")
                dw_master.SetItem(1, "bxfbj", "1")
                dw_master.SetItem(1, "bxfbb", "USD")
                dw_master.SetItem(1, "bxfje", 0.3)
            } else {
                dw_master.SetItem(1, "khorhd", "")
                dw_master.SetItem(1, "yfcdrbm", "")
                dw_master.SetItem(1, "yfcdr", "")
                dw_master.SetItem(1, "yfcdrjc", "")
                dw_master.SetItem(1, "yfcdrpym", "")
                dw_master.SetItem(1, "jsdwbm", "")
                dw_master.SetItem(1, "jsdwmc", "")
                dw_master.SetItem(1, "jsdwjc", "")
                dw_master.SetItem(1, "jsdwpym", "")

            }

        }

        if (dwoName == "jgfs") {
            if (data == "FOB" || data == "C&F") {
                dw_master.SetItem(1, "bxfbj", "1")
                dw_master.SetItem(1, "bxfbb", "USD")
                dw_master.SetItem(1, "bxfje", 0.3)
            }
            if (data == "CIF") {
                dw_master.SetItem(1, "bxfbj", "")
                dw_master.SetItem(1, "bxfbb", "")
                dw_master.SetItem(1, "bxfje", parseFloat(null))
            }
        }

        //货代提单默认需要二次换单
        if (dwoName == "sfshytd") {
            if (data == "Y")
            { dw_master.SetItem(row, "sfxyechd", "Y") }
            else { dw_master.SetItem(row, "sfxyechd", "N") };
        };

        //货代提单
        if (dwoName == "sfshytd") {
            if (data == "N") {
                dw_master.SetItem(row, "sfxyechd", "N");
                dw_master.SetItem(row, "ftdh", "");
                dw_master.SetItem(row, "hygsbm", "");
                dw_master.SetItem(row, "hygsmc", "");
                dw_master.SetItem(row, "hygsjc", "");
                dw_master.SetItem(row, "hygspym", "");
            }
        }

        //是否中转
        if (dwoName == "sfzy") {
            if (data == "N") {
                dw_master.SetItem(row, "zz_cm", "");
                dw_master.SetItem(row, "zz_hcorhbh", "");
                dw_master.SetItem(row, "zzgk", "");
            }
        }
        //单证类型和进出口标志一致
        if (dwoName == "dzlx") {
            dw_master.SetItem(row, "jckbz", data);
        }

        if (dwoName == "qygdm") {
            var qyg = QsWebSoft.PubMethod.ReadQyg(data).value;
            var qygsjgkdm = QsWebSoft.PubMethod.ReadQygsjgkdm(data).value;
            dw_master.SetItem(row, "qyg", qyg);
            dw_master.SetItem(row, "qygsjgkdm", qygsjgkdm);
            if (zdmc == null || zdmc == "") {
                zdmc = qyg + ',' + qygsjgkdm;
            } else {
                zdmc = zdmc + ',' + qyg + ',' + qygsjgkdm;
            };

        }

        if (dwoName == "ycddm") {
            var ycd = QsWebSoft.PubMethod.ReadGj(data).value;
            dw_master.SetItem(row, "ycd", ycd);
            dw_master.SetItem(row, "qiyunguodm", data);
            dw_master.SetItem(row, "qiyunguo", ycd);
            for (row = dw_dzqk.RowCount(); row > 0; row--) {
                dw_dzqk.DeleteRow(row);
            };
        };

        if (dwoName == "qiyunguodm") {
            var qiyunguo = QsWebSoft.PubMethod.ReadGj(data).value;
            dw_master.SetItem(row, "qiyunguo", qiyunguo);
        }

        if (dwoName == "dfcyf" || dwoName == "dfcbxf") {
            self.CacluFcybf();
        }

        if (dwoName == "tdlx") {
            var li_find = dw_dzqk.Find("dzmc = '提单'", 1, dw_dzqk.RowCount())
            if (data == "正本提单") {
                dw_dzqk.SetItem(li_find, "zfbqk", "正本")
            } else if (data == "未知") {
                dw_dzqk.SetItem(li_find, "zfbqk", "")
            }
            else {
                dw_dzqk.SetItem(li_find, "zfbqk", "副本")
            }
        }

        if (dwoName == "zmz") {
            var zmz_sum = 0;
            var jlsl_qz_sum = 0;
            if (dw_spxx.RowCount() > 1) {
                zmz_sum = dw_spxx.GetItemNumber(1, "zmz_sum");
                jlsl_qz_sum = dw_spxx.GetItemNumber(1, "jlsl_qz_sum");
            }


            if (zmz_sum != parseFloat(data) && jlsl_qz_sum != 0) {
                for (row = 1; row <= dw_spxx.RowCount(); row++) {
                    var jlsl_qz = dw_spxx.GetItemNumber(row, "jlsl_qz");
                    var ldc_zmz = 0;
                    if (row == dw_spxx.RowCount()) {
                        dw_spxx.SetItem(row, "zmz", 0);
                        dw_spxx.AcceptText();
                        var ldc_zmz_sum = dw_spxx.GetItemNumber(1, "zmz_sum");
                        ldc_zmz = parseFloat(data) - ldc_zmz_sum;

                    } else {
                        ldc_zmz = parseFloat(data) * jlsl_qz / jlsl_qz_sum;
                    }
                    ldc_zmz = parseFloat(ldc_zmz.toFixed(2));
                    dw_spxx.SetItem(row, "zmz", ldc_zmz);
                    var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
                    //计算毛重、净重
                    if (ldc_jlsl > 0 && ldc_zmz > 0) {
                        var ldc_djmz = ldc_zmz / ldc_jlsl;
                        ldc_djmz = parseFloat(ldc_djmz.toFixed(4));
                        dw_spxx.SetItem(row, "djmz", ldc_djmz);

                    }
                }
                self.CacluFcybf()
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zmz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zmz";
                    };
                };
            }

        }


        if (dwoName == "zjz") {
            var zjz_sum = 0;
            var jlsl_qz_sum = 0;
            if (dw_spxx.RowCount() > 1) {
                zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
                jlsl_qz_sum = dw_spxx.GetItemNumber(1, "jlsl_qz_sum");
            }


            if (zjz_sum != parseFloat(data) && jlsl_qz_sum != 0) {
                for (row = 1; row <= dw_spxx.RowCount(); row++) {
                    var jlsl_qz = dw_spxx.GetItemNumber(row, "jlsl_qz");
                    var ldc_zjz = 0;
                    if (row == dw_spxx.RowCount()) {
                        dw_spxx.SetItem(row, "zjz", 0);
                        dw_spxx.AcceptText();
                        var ldc_zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
                        ldc_zjz = parseFloat(data) - ldc_zjz_sum;

                    } else {
                        ldc_zjz = parseFloat(data) * jlsl_qz / jlsl_qz_sum;
                    }
                    ldc_zjz = parseFloat(ldc_zjz.toFixed(2));
                    dw_spxx.SetItem(row, "zjz", ldc_zjz);

                    var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
                    //计算毛重、净重
                    if (ldc_jlsl > 0 && ldc_zjz > 0) {
                        var ldc_djjz = ldc_zjz / ldc_jlsl;
                        ldc_djjz = parseFloat(ldc_djjz.toFixed(4));
                        dw_spxx.SetItem(row, "djjz", ldc_djjz);
                    }
                }
                self.CacluFcybf()
            }

        }

        /*如果已经发送亿通、则提醒需要通知报关人员*/
        if (dwoName == "dmbz") {
            var ytjkfscs = dw_master.GetItemNumber(1, "ytjkfscs");
            if (ytjkfscs > 0) {
                requestor.MessageBox("提醒", "报关数据已经发送，请及时通知报关人员修改报关信息！");
                var yjtsbm = dw_master.GetItemString(1, "yjtsbm");
                if (yjtsbm == null) { yjtsbm = "" }
                if (yjtsbm.indexOf("A") <= 0) {
                    yjtsbm = yjtsbm + "A"
                    dw_master.SetItem(1, "yjtsbm", yjtsbm);
                }

            };
        }

        if (dwoName == "yjkgsj") {
            var sj = new Date();
            dw_tdzb.SetItem(1, "yjkgsjsrsj", sj.getVarDate());
        }

        if (dwoName == "yjbl") {
            var yjbl = parseFloat(data);
            if (yjbl > 0) {
                yjbl = yjbl / 100;
                var zje = dw_fpzb.GetItemNumber(1, "zje");
                var yj;
                yj = zje * yjbl;
                dw_fpzb.SetItem(1, "yj", yj);
            }
        }

        if (dwoName == "jzxgjzxh") {
            if (dw_tdzb.GetItemString(1, "jzxgjzxh") != "Y") {
                dw_jzxxx.Modify("jzxh.Tabsequence=0");
            } else {
                dw_jzxxx.Modify("jzxh.Tabsequence=1");
            }
        }
    }
    //#endregion

    //#region 正本全选
    this.Select_zbqx = function () {
        var userid = requestor.GetParm("userid");
        var date = new Date();
        for (row = 1; row <= dw_dzqk.RowCount(); row++) {
            dw_dzqk.SetItem(row, "sfsdzb", "Y")
            dw_dzqk.SetItem(row, "sdzbry", userid)
            dw_dzqk.SetItem(row, "sdzxjg", "通过")
            dw_dzqk.SetItem(row, "sdzbsj", date.getVarDate());
            dw_dzqk.SetItem(row, "zymdj", "Y");
        }
        
//        zdmc_dzyq = "Y";
    }
    //#endregion

    //#region 副本全选
    this.Select_fbqx = function () {
        var userid = requestor.GetParm("userid");
        var date = new Date();
        for (row = 1; row <= dw_dzqk.RowCount(); row++) {
            dw_dzqk.SetItem(row, "sfsdfb", "Y")
            dw_dzqk.SetItem(row, "sdfbry", userid)
            dw_dzqk.SetItem(row, "sdzxjg", "通过")
            dw_dzqk.SetItem(row, "sdfbsj", date.getVarDate());
            dw_dzqk.SetItem(row, "zymdj", "Y");
        }
        //        zdmc_dzyq = "Y";
         
    }
    //#endregion

    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
        if (dwoName == "ckka") {
            dw_master.GetChild(dwoName, dwc);
            if (data != "") {
                dwc.Retrieve("%" + data + "%");
            }
            else {
                dwc.Retrieve("%");
            }
        }
        
    }
    //#endregion



    //#region dw_spxx ItemChanged
    this.dw_spxx_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "jlsl") {
            if (data < 0) {
                alert("数量不能小于0,请重新输入!");
                return 1;
            }
            var ldc_zj = dw_spxx.GetItemNumber(row, "zj")
            var ldc_djjg = ldc_zj / data;
            var ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
            dw_spxx.SetItem(row, "djjg", ldc_djjg);
            self.SetZje();
            self.CacluMjztj(row);
        }

        else if (dwoName == "zj") {
            if (data < 0) {
                alert("总价不能小于0,请重新输入!");
                return 1;
            }
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl != null && ldc_jlsl != 0) {
                var ldc_djjg = (data / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }

            ldc_zjz = dw_spxx.GetItemNumber(row, "zjz")
            if (ldc_zjz != null && ldc_zjz != 0) {
                var ldc_dj = (data / ldc_zjz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }
            self.SetZje();
        }

        else if (dwoName == "zmz" || dwoName == "zjz") {
            if (data < 0) {
                alert("输入值不能小于0,请重新输入!");
                return 1;
            }
            if (dwoName == "zjz") {
                dw_spxx.SetItem(row, "fdsl", parseFloat(data));
                var ldc_zj = dw_spxx.GetItemNumber(row, "zj")
                if (ldc_zj != null || ldc_zj != 0) {
                    ldc_dj = (ldc_zj / data);
                    ldc_dj = parseFloat(ldc_dj.toFixed(4));
                    dw_spxx.SetItem(row, "dj", ldc_dj);
                }
            }
            if (dwoName == "zmz") {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zmz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zmz";
                    };
                };
            } else {
                //生鲜港
                if (zdmc == null || zdmc == "") {
                    zdmc = "zjz";
                } else {
                    if (zdmc.indexOf(dwoName) < 1) {
                        zdmc = zdmc + ',' + "zjz";
                    };
                };
            }   
            self.SetZje();
            self.CacluMjztj(row);
            var ldc_zmz_sum = dw_spxx.GetItemNumber(1, "zmz_sum");
            dw_master.SetItem(1, "zmz", ldc_zmz_sum);
            var ldc_zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
            dw_master.SetItem(1, "zjz", ldc_zjz_sum);

        }
        else if (dwoName == "sppp") {
            dw_spxx.SetItem(row, "sppp_yw", data)
        }
        else if (dwoName == "spgg") {
            dw_spxx.SetItem(row, "spgg_yw", data)
        }

        if (dwoName == "fpje") {
            var ldc_yf = dw_spxx.GetItemNumber(row, "yf")
            if (ldc_yf == null) {
                ldc_yf = 0;
            }
            var ldc_bxf = dw_spxx.GetItemNumber(row, "bxf")
            if (ldc_bxf == null) {
                ldc_bxf = 0;
            }
            var ldc_zj = parseFloat(ldc_yf) + parseFloat(ldc_bxf) + parseFloat(data);

            dw_spxx.SetItem(row, "zj", ldc_zj)
            var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz")
            if (ldc_zjz == null) {
                ldc_zjz = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_zjz != 0) {
                var ldc_dj = (ldc_zj / ldc_zjz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row, "dj", ldc_dj);
            }
            var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl")
            if (ldc_jlsl == null) {
                ldc_jlsl = 0;
            }
            if ((ldc_zj != null || ldc_zj != 0) && ldc_jlsl != 0) {
                var ldc_djjg = (ldc_zj / ldc_jlsl);
                ldc_djjg = parseFloat(ldc_djjg.toFixed(4));
                dw_spxx.SetItem(row, "djjg", ldc_djjg);
            }
            //生鲜港
            if (zdmc == null || zdmc == "") {
                zdmc = "zje";
            } else {
                if (zdmc.indexOf("zje") < 1) {
                    zdmc = zdmc + ',' + "zje";
                };
            };
        }

        if (dwoName == "zjz") {
            self.CacluFcybf();
        }

        if (dwoName == "bzzl") {
            if (data == "9C91") {
                var row_find_q = dw_sjsfdj.Find("sfdjbh = 'Q'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_q, "sfxz", "Y")
                var row_find_v = dw_sjsfdj.Find("sfdjbh = 'V'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_v, "sfxz", "N")
            } else {
                var row_find_q = dw_sjsfdj.Find("sfdjbh = 'Q'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_q, "sfxz", "N")
                var row_find_v = dw_sjsfdj.Find("sfdjbh = 'V'", 1, dw_sjsfdj.RowCount())
                dw_sjsfdj.SetItem(row_find_v, "sfxz", "Y")
            }
            dw_sjsfdj.AcceptText()
            var sfdjbm = "";
            var sfdj = "";
            for (row1 = 1; row1 <= dw_sjsfdj.RowCount(); row1++) {
                var sfxz = dw_sjsfdj.GetItemString(row1, "sfxz")
                if ((sfxz == "Y" && row != row1) || (row == row1 && data == "Y")) {
                    var sfdjbh = dw_sjsfdj.GetItemString(row1, "sfdjbh")
                    var sfdjmc = dw_sjsfdj.GetItemString(row1, "sfdjmc")
                    if (sfdjbh == null) {
                        sfdjbh = "";
                    }
                    sfdjbm = sfdjbm + sfdjbh

                    if (sfdj == "") {
                        sfdj = sfdjmc;
                    } else {
                        sfdj = sfdj + ',' + sfdjmc
                    }


                }
            }
            dw_master.SetItem(1, "sfdjbm", sfdjbm)
            dw_master.SetItem(1, "sfdj", sfdj)
        }
        if (dwoName == "djmz") {
            var djmz = data;
            var jlsl = dw_spxx.GetItemNumber(row, "jlsl");
            var zmz = djmz * jlsl;
            dw_spxx.SetItem(row, "zmz", zmz);
        }
    }
    //#endregion



    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {

        if (dwoName == "sjshrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "shdz") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;             
            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }

        ////
        if (dwoName == "jschfscwld_shrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr2_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr2_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "shdz") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "sjshrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }

        /////
        if (dwoName == "jschfscwld_shrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr2_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr2_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr2") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "jschfscwld_shrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr2");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "jschfscwld_zyxx") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "jschfscwld_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz2");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }
        /////
        if (dwoName == "fscwld3_shrmc") {
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr3_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr3_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr3") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld3_shrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr3");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "fscwld3_zyxx") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld3_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz3");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }


        /////
        if (dwoName == "fscwld4_shrmc") {
            var gjyf = dw_jzxxx.GetItemString(Row, "gjyf");
            var jsdwqr = dw_jzxxx.GetItemString(Row, "jsdwqr");
            if (gjyf == "Y") {
                requestor.MessageBox("提示", "国际运费已经支付，请找财务更改结算单位！")
                return
            }
            if (jsdwqr == "Y") {
                requestor.MessageBox("提示", "结算单位财务已经确认，请找财务更改结算单位！")
                return
            }
            var ysfs = dw_master.GetItemString(1, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_jzxxx);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr4_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr4_hy");
            }
            //            iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "lxr4") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld4_shrbm");
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Lxr_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Lxr_Select.SetData("hddz_lxr4");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_jzxxx.SetFocus();

        }

        if (dwoName == "fscwld4_zyxx") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_jzxxx.GetRow();
            var yw_khbm = dw_jzxxx.GetItemString(Row, "fscwld4_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_jzxxx);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz4");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_jzxxx.SetFocus();

        }

    }
    //#endregion



     //#region dw_jzxxx dw_jzxxx_DoubleClicked
     this.dw_dzqk_Clicked = function (xPos, yPos, Row, dwoName) {
        var sfqrdf = dw_dzqk.GetItemString(Row, "sfsdzb");
        var sftd = dw_dzqk.GetItemString(Row, "dzmc");
        var date = new Date();
        if (dwoName == "sfsdzb") {
            if (sftd == "提单") {
                if (sfqrdf == "Y") {
                    dw_master.SetItem(1, "qrdf", "Y");
                    dw_master.SetItem(1, "qrdfsj", date.getVarDate());
                } else {
                    dw_master.SetItem(1, "qrdf", "N");
                    dw_master.SetItem(1, "qrdfsj", "");
                }
            }
        }
        dw_dzqk.SetFocus();
    }
     //#endregion

     //#region this.dw_dzqk_ItemChanged
    this.dw_dzqk_ItemChanged = function (Row, dwoName, data) {
        //        zdmc_dzyq = "Y";
        var userid = requestor.GetParm("userid");
        var date = new Date();
        if (dwoName == "sfsdzb") {
            if (data == "Y") {
                dw_dzqk.SetItem(Row, "sdzbry", userid)
                dw_dzqk.SetItem(Row, "sdzxjg", "通过")
            } else {
                dw_dzqk.SetItem(Row, "sdzbry", "")
                dw_dzqk.SetItem(Row, "sdzxjg", "")
            }
            dw_dzqk.SetItem(Row, "sdzbsj", date.getVarDate());
        }
        if (dwoName == "sfsdfb") {
            if (data == "Y") {
                dw_dzqk.SetItem(Row, "sdfbry", userid)
                dw_dzqk.SetItem(Row, "sdzxjg", "通过")
            } else {
                dw_dzqk.SetItem(Row, "sdfbry", "")
                dw_dzqk.SetItem(Row, "sdzxjg", "")

            }
            dw_dzqk.SetItem(Row, "sdfbsj", date.getVarDate());
        };
         dw_dzqk.SetItem(Row, "zymdj", "Y");

    }
     //#endregion



    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {

        if (dwoName == "sjshr_qk") {
            var sfymx = requestor.GetParm("sfymx");
            if (sfymx == '0') {
                if (requestor.MessageBox("提示", "是否清除实际收货人记录?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                    dw_jzxxx.SetItem(Row, "sjshrbm", "")
                    dw_jzxxx.SetItem(Row, "sjshrmc", "")
                }
            }
        }

        dw_jzxxx.SetFocus();

    }
    //#endregion


 



    //#region dw_spxx_Clicked
    this.dw_spxx_RowFocusChanged = function (Row) {
        if (Row > 0) {
            il_sp_id = dw_spxx.GetItemNumber(Row, "sp_id");
        }
        if (il_sp_id == null) {
            il_sp_id = 0;
        }
        dw_sjzs.SetFilter("sp_id = " + il_sp_id)
        dw_sjzs.Filter()
        dw_sjbzcl.SetFilter("sp_id = " + il_sp_id)
        dw_sjbzcl.Filter()
    };
    //#endregion

    //#region dw_jzxxx EditChanged
    this.dw_jzxxx_EditChanged = function (row, dwoName, data) {
        zdmc_jzxxx = "Y";
        dw_master.AcceptText();
        if (dwoName == "clfs") {
            var clfs = dw_master.GetItemString(1, "clfs")
            if (clfs == null || clfs == "") {
                dw_master.SetItem(1, "clfs", data)
            }
        }
    }
            //#endregion


            //#region dw_zsbh ItemChanged
            this.dw_zsbh_ItemChanged = function (row, dwoName, data) {
                if (dwoName == "sfxz") {
                    var zsbh_sum = "";
                    var zsmc_sum = "";
                    for (row1 = 1; row1 <= dw_zsbh.RowCount(); row1++) {
                        var sfxz = dw_zsbh.GetItemString(row1, "sfxz")
                        if ((sfxz == "Y" && row != row1) || (row == row1 && data == "Y")) {
                            var zsbh = dw_zsbh.GetItemString(row1, "zsbh")
                            var zsmc = dw_zsbh.GetItemString(row1, "zsmc")
                            if (zsbh_sum == "") {
                                zsbh_sum = zsbh;
                                zsmc_sum = zsmc;
                            } else {
                                zsbh_sum = zsbh_sum + "," + zsbh
                                zsmc_sum = zsmc_sum + "," + zsmc
                            }
                        }
                    }
                    dw_master.SetItem(1, "zsbh", zsbh_sum)
                    dw_master.SetItem(1, "zsmc", zsmc_sum)
                }

            }
            //#endregion


            //#region dw_sjsfdj ItemChanged
            this.dw_sjsfdj_ItemChanged = function (row, dwoName, data) {
                if (dwoName == "sfxz") {
                    var sfdj = "";
                    var sfdjbm = ""
                    for (row1 = 1; row1 <= dw_sjsfdj.RowCount(); row1++) {
                        var sfxz = dw_sjsfdj.GetItemString(row1, "sfxz")
                        if ((sfxz == "Y" && row != row1) || (row == row1 && data == "Y")) {
                            var sfdjbh = dw_sjsfdj.GetItemString(row1, "sfdjbh")
                            var sfdjmc = dw_sjsfdj.GetItemString(row1, "sfdjmc")
                            if (sfdjbh == null) {
                                sfdjbh = "";
                            }
                            sfdjbm = sfdjbm + sfdjbh

                            if (sfdj == "") {
                                sfdj = sfdjmc;
                            } else {
                                sfdj = sfdj + ',' + sfdjmc
                            }


                        }
                    }
                    dw_master.SetItem(1, "sfdjbm", sfdjbm)
                    dw_master.SetItem(1, "sfdj", sfdj)
                }

            }
            //#endregion

           


    //#region dw_spxx_Clicked
    this.dw_spxx_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        dw_spdhsr.ScrollToRow(Row);
            if (dwoName == "b_zs") {
                if (ib_zs) {
                    dw_sjzs.Show();
                    ib_zs = false;

                }
                else {
                    dw_sjzs.Hide()
                    ib_zs = true;
                }
                ib_bzcl = true;
                dw_sjbzcl.Hide();
            }

            if (dwoName == "b_bzcl") {
                if (ib_bzcl) {
                    dw_sjbzcl.Show();
                    ib_bzcl = false;
                }
                else {
                    dw_sjbzcl.Hide()
                    ib_bzcl = true;
                }
                ib_zs = true;
                dw_sjzs.Hide();
            }
    };
    //#endregion
    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_jzxxx') {

            var sfymx = requestor.GetParm("sfymx");
            if (sfymx != '0') {
                tb_1.SetEnabled("btn_rownext", false);
                requestor.MessageBox("提示", "已产生费用明细，不可修改！", ICON.Information);
                return;
            }

            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_cmd.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_jzxxx.SetRedraw(false);
            dw_jzxxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_jzxxx, ll_row_to, DWBUFFER.Primary);
            dw_jzxxx.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_jzxxx.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_jzxxx.ScrollToRow(ll_row_count);
            }

            if (dw_jzxxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_jzxxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

        if (lastdw.GetName() == 'dw_spxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from < ll_row_count) {
                ll_row_to = ll_row_from + 2;
            }
            else {
                ll_row_to = dw_cmd.RowCount();
            }


            if (ll_row_to == ll_row_from) {
                return;
            }
            dw_spxx.SetRedraw(false);
            dw_spxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary);
            dw_spxx.SetRedraw(true);
            if (ll_row_from + 1 <= ll_row_count) {
                dw_spxx.ScrollToRow(ll_row_from + 1);
            }
            else {
                dw_spxx.ScrollToRow(ll_row_count);
            }

            if (dw_spxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_spxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function (dragobject, row, dwo) {
        if (lastdw.GetName() == 'dw_jzxxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from -1 ;
            }
            else {
                ll_row_to = 1;
            }

            dw_jzxxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_jzxxx, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1 ) {
                dw_jzxxx.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_jzxxx.ScrollToRow(1);
            }

            if (dw_jzxxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_jzxxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

        if (lastdw.GetName() == 'dw_spxx') {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if (ll_row_from > 1) {
                ll_row_to = ll_row_from - 1;
            }
            else {
                ll_row_to = 1;
            }

            dw_spxx.RowsMove(ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary);
            if (ll_row_from > 1) {
                dw_spxx.ScrollToRow(ll_row_from - 1);
            }
            else {
                dw_spxx.ScrollToRow(1);
            }

            if (dw_spxx.GetItemStatus(1, 0, DWBUFFER.Primary) == DWITEMSTATUS.NotModified) {
                dw_spxx.SetItemStatus(1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified);
            }
        }

    }
    //#endregion

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    //#region SetZje
    this.SetZje = function () {
        dw_spxx.AcceptText();
        dw_master.AcceptText();
        if (dw_spxx.RowCount() > 0) {
            ldc_zj_sum = dw_spxx.GetItemNumber(1, "zj_sum");
            ldc_zj_sum = parseFloat(ldc_zj_sum.toFixed(2));
        }
        else {
            ldc_zj_sum = 0;
        };
        dw_master.SetItem(1, "zje", ldc_zj_sum);
        var ldc_zmyhl = dw_master.GetItemNumber(1,"zmyhl");
        var ldc_zmyje = ldc_zj_sum * ldc_zmyhl;
        ldc_zmyje = parseFloat(ldc_zmyje.toFixed(2));
        dw_master.SetItem(1, 'zmyje', ldc_zmyje);

    }
    //#endregion

    //#region CacluMjztj
    this.CacluMjztj = function (row) {
        dw_spxx.AcceptText();
        var ldc_jlsl = dw_spxx.GetItemNumber(row, "jlsl");
        //计算毛重、净重
        var ldc_zmz = dw_spxx.GetItemNumber(row, "zmz");
        var ldc_zjz = dw_spxx.GetItemNumber(row, "zjz");

        if (ldc_jlsl > 0 && ldc_zmz > 0) {
            var ldc_djmz = ldc_zmz / ldc_jlsl;
            ldc_djmz = parseFloat(ldc_djmz.toFixed(4));
            dw_spxx.SetItem(row, "djmz", ldc_djmz);
        }
        if (ldc_jlsl > 0 && ldc_zjz > 0) {
            var ldc_djjz = ldc_zjz / ldc_jlsl;
            ldc_djjz = parseFloat(ldc_djjz.toFixed(4));
            dw_spxx.SetItem(row, "djjz", ldc_djjz);
        }
       
    }
    //#endregion

    //#region CacluMjztj
    this.CacluFcybf = function () {
        dw_master.AcceptText();
        dw_spxx.AcceptText();
        dw_fpzb.AcceptText();

        var ldc_dfcyf = dw_fpzb.GetItemNumber(1, "dfcyf");
      
        if (ldc_dfcyf == null) {
            ldc_dfcyf = 0;
        }
        var ldc_dfcbxf = dw_fpzb.GetItemNumber(1, "dfcbxf");
        if (ldc_dfcbxf == null) {
            ldc_dfcbxf = 0;
        }

        var ldc_zjz_sum = 0;
        if (dw_spxx.RowCount() > 0) {
            ldc_zjz_sum = dw_spxx.GetItemNumber(1, "zjz_sum");
        };

        var ldc_yf_lj = 0;
        var ldc_bxf_lj = 0;
         
        for (row2 = 1; row2 <= dw_spxx.RowCount(); row2++) {
            var ldc_zjz = dw_spxx.GetItemNumber(row2, "zjz");
            if (ldc_zjz == null) {
                ldc_zjz = 0;
            }
            var ldc_fpje = dw_spxx.GetItemNumber(row2, "fpje");
            if (ldc_fpje == null) {
                ldc_fpje = 0;
            }
            var ldc_yf = 0;
            var ldc_bxf = 0;
           
            if (ldc_zjz_sum != 0) {
                ldc_yf = (ldc_dfcyf * ldc_zjz / ldc_zjz_sum);
                ldc_bxf = (ldc_dfcbxf * ldc_zjz / ldc_zjz_sum);
            }
            ldc_yf = parseFloat(ldc_yf.toFixed(2));
            
            ldc_bxf = parseFloat(ldc_bxf.toFixed(2));

            if (row2 == dw_spxx.RowCount()) {
                ldc_yf = ldc_dfcyf - ldc_yf_lj;
                ldc_bxf = ldc_dfcbxf - ldc_bxf_lj;
            } else {
                ldc_yf_lj = ldc_yf_lj + ldc_yf;
                ldc_bxf_lj = ldc_bxf_lj + ldc_bxf;
            }
           
            dw_spxx.SetItem(row2, "yf", ldc_yf)
            dw_spxx.SetItem(row2, "bxf", ldc_bxf)
            var ldc_fpje = dw_spxx.GetItemNumber(row2, "fpje");

            var ldc_zj = parseFloat(ldc_yf) + parseFloat(ldc_bxf) + parseFloat(ldc_fpje);
            dw_spxx.SetItem(row2, "zj", ldc_zj)

            if ((ldc_zj != null || ldc_zj != 0) && ldc_zjz != 0) {
                ldc_dj = (ldc_zj / ldc_zjz);
                ldc_dj = parseFloat(ldc_dj.toFixed(4));
                dw_spxx.SetItem(row2, "dj", ldc_dj);
            }

        }
    }
    //#endregion

    //#region tabselect
    var lastdw = new DataWindow();
    this.Tab_Select = function () {
        if (tab_1.GetSelectedTab() == 1) {
            var bEditFlag = false;
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_jzxxx.SetFocus()
        }
        if (tab_1.GetSelectedTab() == 2) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            dw_spxx.SetFocus()
        }

        if (tab_1.GetSelectedTab() == 3) {
            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
                bEditFlag = true;
            }
            else {
                bEditFlag = false;
            };
            tb_1.SetVisible("btn_rowcopy", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
            tb_1.SetVisible("btn_rowback", bEditFlag);
            tb_1.SetVisible("btn_rowadd", bEditFlag);
            tb_1.SetVisible("btn_rowdelete", bEditFlag);
            tb_1.SetVisible("btn_rownext", bEditFlag);
//            dw_zzxx.dw_zzxx_GetFocus()
        }
      
    };
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit_Ky", "dw_hddz_edit_ky");
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_spxx = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit_Ky", "dw_hddz_edit_ky_spxx");
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_dzqk = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzEdit_Ky", "dw_hddz_edit_ky_dzqk");
        self.Retrieve();
    }
    //#endregion

    //#region 获得字段焦点
    this.dw_master_RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_spxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_zzxx = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_fsdz = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown_dzqk = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
    }

    //#endregion

    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_jzxxx.GetRow();
        if (row <= 0)
            return;
        colType = dw_jzxxx.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_jzxxx.GetItemString(dw_jzxxx.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_jzxxx.GetItemDate(dw_jzxxx.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_jzxxx.GetItemNumber(dw_jzxxx.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion




    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row =  dw_master.GetRow();
        if (row <= 0)
            return;
        colType = dw_master.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_master.GetItemString(dw_master.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_master.GetItemDate(dw_master.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_master.GetItemNumber(dw_master.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol = function () {
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


    //#region 按商品判断是否需要产生新的证书
    this.Spcsdzqk = function (spbm) {
        var ycddm = dw_master.GetItemString(1, "ycddm");
        var li_rowcount = ds_dzqk.Retrieve(ycddm, spbm);
        var ysfs = dw_master.GetItemString(1,"ysfs");
        if (li_rowcount > 0) {
            var cpxxkbm = ds_dzqk.GetItemString(1, "cpxxkbm");
            var li_find = dw_dzqk.Find("cpxxkbm = '" + cpxxkbm + "'", 1, ds_dzqk.RowCount());
            if (li_find > 0) {
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
                    var li_find = dw_dzqk.Find("dzmc = '" + ls_dzmc + "'", 1, ds_dzqk.RowCount());
                    if (li_find < 1 && (ysfs == "海运" || (ysfs =="空运" && ls_zfbqk == "正本" && ls_dzmc == "原产地证"))) {
                        var li_insert = dw_dzqk.InsertRow(0);
                        sfcr = "Y";
                        dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
                        dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
                        dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
                        dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
                        dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
                        dw_dzqk.SetItem(li_insert, "zfbqk", ls_zfbqk);
                        dw_dzqk.SetItem(li_insert, "dzmc", ls_dzmc);
                    };
                };
            };
        };

        var li_find_td = dw_dzqk.Find("dzmc = '提单'", 1, ds_dzqk.RowCount());
        if (li_find_td < 1 && ysfs == "海运") {
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
        var zydl = dw_master.GetItemString(1, "zydl");
        if (zydl == "自营") {
            var li_find_bjwts = dw_dzqk.Find("dzmc = '报检委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bjwts < 1  && ysfs == "海运") {
                var li_insert = dw_dzqk.InsertRow(0);
                dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
                dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
                dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
                dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
                dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
                dw_dzqk.SetItem(li_insert, "zfbqk", "正本");
                dw_dzqk.SetItem(li_insert, "dzmc", "报检委托书");
            };

            var li_find_bgwts = dw_dzqk.Find("dzmc = '报关委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bgwts < 1  && ysfs == "海运") {
                var li_insert = dw_dzqk.InsertRow(0);
                dw_dzqk.SetItem(li_insert, "cpxxkbm", ls_cpxxkbm);
                dw_dzqk.SetItem(li_insert, "spbm", ls_spbm);
                dw_dzqk.SetItem(li_insert, "spzwmc", ls_spzwmc);
                dw_dzqk.SetItem(li_insert, "ctr_code", ls_ctr_code);
                dw_dzqk.SetItem(li_insert, "ctr_cname", ls_ctr_cname);
                dw_dzqk.SetItem(li_insert, "zfbqk", "正本");
                dw_dzqk.SetItem(li_insert, "dzmc", "报关委托书");
            };
        } else {
            var li_find_bjwts = dw_dzqk.Find("dzmc = '报检委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bjwts > 0) {
                dw_dzqk.DeleteRow(li_find_bjwts);

            };

            var li_find_bgwts = dw_dzqk.Find("dzmc = '报关委托书'", 1, dw_dzqk.RowCount());
            if (li_find_bgwts > 0) {
                dw_dzqk.DeleteRow(li_find_bgwts);
            };
        }
    };
    //#endregion

    //#region 单证审单情况
    this.dw_dzqk_DoubleClicked = function (xPos, yPos, Row, dwoName) {

        //        if (dwoName == "sdzxjg" || dwoName == "sdzxnr" || dwoName == "sdzxsj") {


        if (iw_Hddz_Dzsd == null)
            iw_Hddz_Dzsd = new W_Hddz_Dzsd();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var ywbh = dw_dzqk.GetItemString(Row, "ywbh")
        var cxh = dw_dzqk.GetItemNumber(Row, "cxh")
        var userid = requestor.GetParm("userid");

        iw_Hddz_Dzsd.SetDataWindow(dw_dzqk);
        iw_Hddz_Dzsd.SetDataWindow_master(dw_master);
        iw_Hddz_Dzsd.SetData(ywbh);
        iw_Hddz_Dzsd.SetRow(cxh);
        iw_Hddz_Dzsd.SetZbr(userid);
        var tdsfzb = dw_dzqk.GetItemNumber(Row, "tdsfzb");
        iw_Hddz_Dzsd.SetTdsfzb(tdsfzb);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Dzsd", iw_Hddz_Dzsd);
        dw_dzqk.SetFocus();
        //        }

    }
    //#endregion

    //#region 单证审单情况


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
                
                result = temp + pos[count-1]   + result;
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
                result = result + ' CENTS '  + temp 
            }
        }

        if (result.substring(0, 3) == "AND") {
            result = result.substring(3, result.length - 2)
        }
 
    };

    //#endregion

//    //#region 同步生鲜港
//    this.Tbsxg = function () {
//        var ywbh = dw_master.GetItemString(1, "ywbh");
//        //执行删除的WebService       
//        webReq.SetFunctionID(requestor.GetFunctionID());

//        if (zdmc != null) {
//            zdmc = zdmc + ",hz_jzxh,zxs,hz_spmc";
//        }
//        webReq.Invoke("Tbsxg", "ywbh=" + ywbh + "&zdmc=" + zdmc + "&zdmc_jzxxx=" + zdmc_jzxxx + "&zdmc_dzyq=" + zdmc_dzyq);

//        if (webReq.StatusCode() == 200) {
//            webReq.ResponseText();
//            var num = QsWebSoft.PubMethod.UpdateTbsxgbz(ywbh, "Y").value;
//        }
//        else {
//            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
//        }
//    }
//    //#endregion

}





