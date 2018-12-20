///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_List_GB_ywbh() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var dw_print_cns= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_print_forma= new DataWindow( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var dw_print_ecczm= new DataWindow( requestor );
	 var dw_print_hczm= new DataWindow( requestor );
	 var dw_print_zthqksm= new DataWindow( requestor );
	 var dw_print_packinglist= new DataWindow( requestor );
	 var dw_print_invoice= new DataWindow( requestor );
	 var dw_print_contract= new DataWindow( requestor );
	 var mle_jzxh= new MultiLineEdit( requestor ); 
	 var tb_2= new ToolStrip( requestor );
	 var ddlb_rqlx= new DropDownListBox( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_3= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var rb_zj= new RadioButton( requestor );
	 var rb_qb= new RadioButton( requestor );
	 var rb_hy= new RadioButton( requestor );
	 var rb_ky= new RadioButton( requestor );
	 var ddlb_fxzt= new DropDownListBox( requestor );
	 var dw_print_bzjsqs= new DataWindow( requestor );
	 var dw_print_qksm= new DataWindow( requestor );
	 var dw_print_dlbgwts= new DataWindow( requestor );
	 var dw_print_dlxy= new DataWindow( requestor );
	 var dw_print_sjmf_contract= new DataWindow( requestor );
	 var dw_print_sjmf_packinglist= new DataWindow( requestor );
	 var dw_print_sjmf_invoice= new DataWindow( requestor );
	 var dw_ygkthsj= new DataWindow( requestor );
	 var dw_1= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );
	 var ds_2= new DataStore( requestor );
	 var ds_role_kybmjl= new DataStore( requestor );
	 var ds_role_hybmjl= new DataStore( requestor );
	 var ds_sd= new DataStore( requestor );
	 var ds_jyj= new DataStore( requestor );
	 var ds_3= new DataStore( requestor );
	 var ds_4= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(dw_print_cns == null ) dw_print_cns= new DataWindow( requestor );
		 dw_print_cns.Attach( win.Control( "dw_print_cns") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_print_forma == null ) dw_print_forma= new DataWindow( requestor );
		 dw_print_forma.Attach( win.Control( "dw_print_forma") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(dw_print_ecczm == null ) dw_print_ecczm= new DataWindow( requestor );
		 dw_print_ecczm.Attach( win.Control( "dw_print_ecczm") ); 
		 if(dw_print_hczm == null ) dw_print_hczm= new DataWindow( requestor );
		 dw_print_hczm.Attach( win.Control( "dw_print_hczm") ); 
		 if(dw_print_zthqksm == null ) dw_print_zthqksm= new DataWindow( requestor );
		 dw_print_zthqksm.Attach( win.Control( "dw_print_zthqksm") ); 
		 if(dw_print_packinglist == null ) dw_print_packinglist= new DataWindow( requestor );
		 dw_print_packinglist.Attach( win.Control( "dw_print_packinglist") ); 
		 if(dw_print_invoice == null ) dw_print_invoice= new DataWindow( requestor );
		 dw_print_invoice.Attach( win.Control( "dw_print_invoice") ); 
		 if(dw_print_contract == null ) dw_print_contract= new DataWindow( requestor );
		 dw_print_contract.Attach( win.Control( "dw_print_contract") ); 
		 if(mle_jzxh == null ) mle_jzxh= new MultiLineEdit( requestor );
		 mle_jzxh.Attach( win.Control( "mle_jzxh") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(ddlb_rqlx == null ) ddlb_rqlx= new DropDownListBox( requestor );
		 ddlb_rqlx.Attach( win.Control( "ddlb_rqlx") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(sle_3 == null ) sle_3= new SingleLineEdit( requestor );
		 sle_3.Attach( win.Control( "sle_3") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(rb_zj == null ) rb_zj= new RadioButton( requestor );
		 rb_zj.Attach( win.Control( "rb_zj") ); 
		 if(rb_qb == null ) rb_qb= new RadioButton( requestor );
		 rb_qb.Attach( win.Control( "rb_qb") ); 
		 if(rb_hy == null ) rb_hy= new RadioButton( requestor );
		 rb_hy.Attach( win.Control( "rb_hy") ); 
		 if(rb_ky == null ) rb_ky= new RadioButton( requestor );
		 rb_ky.Attach( win.Control( "rb_ky") ); 
		 if(ddlb_fxzt == null ) ddlb_fxzt= new DropDownListBox( requestor );
		 ddlb_fxzt.Attach( win.Control( "ddlb_fxzt") ); 
		 if(dw_print_bzjsqs == null ) dw_print_bzjsqs= new DataWindow( requestor );
		 dw_print_bzjsqs.Attach( win.Control( "dw_print_bzjsqs") ); 
		 if(dw_print_qksm == null ) dw_print_qksm= new DataWindow( requestor );
		 dw_print_qksm.Attach( win.Control( "dw_print_qksm") ); 
		 if(dw_print_dlbgwts == null ) dw_print_dlbgwts= new DataWindow( requestor );
		 dw_print_dlbgwts.Attach( win.Control( "dw_print_dlbgwts") ); 
		 if(dw_print_dlxy == null ) dw_print_dlxy= new DataWindow( requestor );
		 dw_print_dlxy.Attach( win.Control( "dw_print_dlxy") ); 
		 if(dw_print_sjmf_contract == null ) dw_print_sjmf_contract= new DataWindow( requestor );
		 dw_print_sjmf_contract.Attach( win.Control( "dw_print_sjmf_contract") ); 
		 if(dw_print_sjmf_packinglist == null ) dw_print_sjmf_packinglist= new DataWindow( requestor );
		 dw_print_sjmf_packinglist.Attach( win.Control( "dw_print_sjmf_packinglist") ); 
		 if(dw_print_sjmf_invoice == null ) dw_print_sjmf_invoice= new DataWindow( requestor );
		 dw_print_sjmf_invoice.Attach( win.Control( "dw_print_sjmf_invoice") ); 
		 if(dw_ygkthsj == null ) dw_ygkthsj= new DataWindow( requestor );
		 dw_ygkthsj.Attach( win.Control( "dw_ygkthsj") ); 
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 
		 if(ds_2 == null ) ds_2= new DataStore( requestor );
		 ds_2.Attach( win.Control( "ds_2") ); 
		 if(ds_role_kybmjl == null ) ds_role_kybmjl= new DataStore( requestor );
		 ds_role_kybmjl.Attach( win.Control( "ds_role_kybmjl") ); 
		 if(ds_role_hybmjl == null ) ds_role_hybmjl= new DataStore( requestor );
		 ds_role_hybmjl.Attach( win.Control( "ds_role_hybmjl") ); 
		 if(ds_sd == null ) ds_sd= new DataStore( requestor );
		 ds_sd.Attach( win.Control( "ds_sd") ); 
		 if(ds_jyj == null ) ds_jyj= new DataStore( requestor );
		 ds_jyj.Attach( win.Control( "ds_jyj") ); 
		 if(ds_3 == null ) ds_3= new DataStore( requestor );
		 ds_3.Attach( win.Control( "ds_3") ); 
		 if(ds_4 == null ) ds_4= new DataStore( requestor );
		 ds_4.Attach( win.Control( "ds_4") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list","DoubleClicked",self.dw_List_DoubleClicked); 

		 if(typeof(self.dw_List_DwnMouseMove)=="function") 
			 win.AttachEvent("dw_list","DwnMouseMove",self.dw_List_DwnMouseMove); 

		 if(typeof(self.dw_List_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_List_ItemChanged); 

		 if(typeof(self.dw_List_EntertoTab)=="function") 
			 win.AttachEvent("dw_list","KeyDown",self.dw_List_EntertoTab); 

		 if(typeof(self.dw_List_LButtonDown)=="function") 
			 win.AttachEvent("dw_list","LButtonDown",self.dw_List_LButtonDown); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_rqlx","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.sletdh_EditChanged)=="function") 
			 win.AttachEvent("sle_3","EditChanged",self.sletdh_EditChanged); 

		 if(typeof(self.bhdy_Clicked)=="function") 
			 win.AttachEvent("btn_bhdy","Clicked",self.bhdy_Clicked); 

		 if(typeof(self.Help)=="function") 
			 win.AttachEvent("btn_help","Clicked",self.Help); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("rb_zj","Clicked",self.Retrieve); 

		 if(typeof(self.RetrieveQb)=="function") 
			 win.AttachEvent("rb_qb","Clicked",self.RetrieveQb); 

		 if(typeof(self.RetrieveHy)=="function") 
			 win.AttachEvent("rb_hy","Clicked",self.RetrieveHy); 

		 if(typeof(self.RetrieveKy)=="function") 
			 win.AttachEvent("rb_ky","Clicked",self.RetrieveKy); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_fxzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Filter)=="function") 
			 win.AttachEvent("单列过滤ToolStripMenuItem","Clicked",self.Filter); 

		 if(typeof(self.Filter_Cancle)=="function") 
			 win.AttachEvent("取消过滤ToolStripMenuItem","Clicked",self.Filter_Cancle); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.CopySelect)=="function") 
			 win.AttachEvent("选择复制ToolStripMenuItem","Clicked",self.CopySelect); 

		 if(typeof(self.CopyL)=="function") 
			 win.AttachEvent("整列复制ToolStripMenuItem","Clicked",self.CopyL); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_list.Detach(); dw_list=null; 
		 dw_print_cns.Detach(); dw_print_cns=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_print_forma.Detach(); dw_print_forma=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 dw_print_ecczm.Detach(); dw_print_ecczm=null; 
		 dw_print_hczm.Detach(); dw_print_hczm=null; 
		 dw_print_zthqksm.Detach(); dw_print_zthqksm=null; 
		 dw_print_packinglist.Detach(); dw_print_packinglist=null; 
		 dw_print_invoice.Detach(); dw_print_invoice=null; 
		 dw_print_contract.Detach(); dw_print_contract=null; 
		 mle_jzxh.Detach(); mle_jzxh=null; 
		 tb_2.Detach(); tb_2=null; 
		 ddlb_rqlx.Detach(); ddlb_rqlx=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_3.Detach(); sle_3=null; 
		 tb_1.Detach(); tb_1=null; 
		 rb_zj.Detach(); rb_zj=null; 
		 rb_qb.Detach(); rb_qb=null; 
		 rb_hy.Detach(); rb_hy=null; 
		 rb_ky.Detach(); rb_ky=null; 
		 ddlb_fxzt.Detach(); ddlb_fxzt=null; 
		 dw_print_bzjsqs.Detach(); dw_print_bzjsqs=null; 
		 dw_print_qksm.Detach(); dw_print_qksm=null; 
		 dw_print_dlbgwts.Detach(); dw_print_dlbgwts=null; 
		 dw_print_dlxy.Detach(); dw_print_dlxy=null; 
		 dw_print_sjmf_contract.Detach(); dw_print_sjmf_contract=null; 
		 dw_print_sjmf_packinglist.Detach(); dw_print_sjmf_packinglist=null; 
		 dw_print_sjmf_invoice.Detach(); dw_print_sjmf_invoice=null; 
		 dw_ygkthsj.Detach(); dw_ygkthsj=null; 
		 dw_1.Detach(); dw_1=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_role.Detach(); ds_role=null; 
		 ds_2.Detach(); ds_2=null; 
		 ds_role_kybmjl.Detach(); ds_role_kybmjl=null; 
		 ds_role_hybmjl.Detach(); ds_role_hybmjl=null; 
		 ds_sd.Detach(); ds_sd=null; 
		 ds_jyj.Detach(); ds_jyj=null; 
		 ds_3.Detach(); ds_3=null; 
		 ds_4.Detach(); ds_4=null; 
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
    var iW_Wldw_Tggz = null;
    var iw_Hddz_Beizhu = null;
    var iw_Hddz_Edit_Yflr = null;
    var iw_Fj_Edit = null;
    var iw_Wldw_Select = null;
    var iw_Hddz_Ygkthsj = null;
    var iw_Eport_Select = null;
    var iW_Hddz_List_GBywbhs = null;
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

    //#region 自己查询
    this.Retrieve = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();

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
                    dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), lx, fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, "全部", "N", "全部", "全部", "全部");      
        //        self.slectr_area2_EditChanged();
    }
    //#endregion


    //#region 全部查询
    this.RetrieveQb = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();
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
        dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), "qb", fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, "全部", "N", "全部", "全部", "全部");
       
        //        self.slectr_area2_EditChanged();
    }
    //#endregion

    //#region 海运查询
    this.RetrieveHy = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();
        
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

        dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), "hy", fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, "全部", "N", "全部", "全部", "全部");
        
        
        //        self.slectr_area2_EditChanged();
    }
    //#endregion



    //#region 空运查询
    this.RetrieveKy = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var fxzt = ddlb_fxzt.GetText();
        var rqlx = ddlb_rqlx.GetText();
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

        dw_list.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), "ky", fxzt, Dlwtf, rqlx, Tybm, Sfqytybm, "全部", "N", "全部", "全部", "全部");
        
        //        self.slectr_area2_EditChanged();
    }
    //#endregion


    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    } 
    //#endregion


    this.qgld = function () {
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh");

        if (row <= 0)
            return;

        var qgld = dw_list.GetItemString(row, "qgld");
        if (qgld == "Y") {
            var num = QsWebSoft.PubMethod.UpdateQgld(ywbh, qgld).value;
            if (num == 1) {
                dw_list.SetItem(row, "qgld", "N");
            }
        } else {
            var num = QsWebSoft.PubMethod.UpdateQgld(ywbh, qgld).value;
            if (num == 1) {
                dw_list.SetItem(row, "qgld", "Y");
            }
        }
    }

    this.yspt = function () {
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh");

        if (row <= 0)
            return;

        var qgld = dw_list.GetItemString(row, "qgld");
        if (qgld == "G") {
            var num = QsWebSoft.PubMethod.UpdateYspt(ywbh, qgld).value;
            if (num == 1) {
                dw_list.SetItem(row, "qgld", "N");
            }
        } else {
            var num = QsWebSoft.PubMethod.UpdateYspt(ywbh, qgld).value;
            if (num == 1) {
                dw_list.SetItem(row, "qgld", "G");
            }
        }
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

    //#region 过滤目的港
    this.mdg_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("(Upper(mdg) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
	//#endregion    this.mdg_EditChanged


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

    this.bhdy_Clicked = function () {
        var Row = dw_list.GetRow();
        if (Row > 0) {
            var ywbh = dw_list.GetItemString(Row, "ywbh");


            if (iW_Hddz_List_GBywbhs == null) {
                iW_Hddz_List_GBywbhs = new W_Hddz_List_GBywbhs();
            }
           // iW_Hddz_List_GBywbhs.setYwbh(ywbh);

            var operation = requestor.GetParm("operation");
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_List_GBywbhs" + '&operation=' + operation.toString() + '&ywbh=' + ywbh, iW_Hddz_List_GBywbhs);
            dw_list.SetFocus();
        }
    }


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

    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_Hddz_List_GB_ywbh", "dw_hddz_list");
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


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        fzjs_row = Row;
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


    //#endregion
}