﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Bgdgl() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var ddlb_jdrjc= new DropDownListBox( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var ddlb_rqlx= new DropDownListBox( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_kh= new SingleLineEdit( requestor );
	 var sle_hth= new SingleLineEdit( requestor );
	 var sle_tdh= new SingleLineEdit( requestor );
	 var sle_bgdh= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ddlb_yslx= new DropDownListBox( requestor );
	 var sle_2= new SingleLineEdit( requestor );
	 var sle_sdtt= new SingleLineEdit( requestor );
	 var cbx_ohxtwcl= new CheckBox( requestor );
	 var ddlb_bgzt= new DropDownListBox( requestor );
	 var ddlb_sfsy= new DropDownListBox( requestor );
	 var dw_print= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );
	 var ds_2= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_3 == null ) tb_3= new ToolStrip( requestor );
		 tb_3.Attach( win.Control( "tb_3") ); 
		 if(ddlb_jdrjc == null ) ddlb_jdrjc= new DropDownListBox( requestor );
		 ddlb_jdrjc.Attach( win.Control( "ddlb_jdrjc") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
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
		 if(sle_kh == null ) sle_kh= new SingleLineEdit( requestor );
		 sle_kh.Attach( win.Control( "sle_kh") ); 
		 if(sle_hth == null ) sle_hth= new SingleLineEdit( requestor );
		 sle_hth.Attach( win.Control( "sle_hth") ); 
		 if(sle_tdh == null ) sle_tdh= new SingleLineEdit( requestor );
		 sle_tdh.Attach( win.Control( "sle_tdh") ); 
		 if(sle_bgdh == null ) sle_bgdh= new SingleLineEdit( requestor );
		 sle_bgdh.Attach( win.Control( "sle_bgdh") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ddlb_yslx == null ) ddlb_yslx= new DropDownListBox( requestor );
		 ddlb_yslx.Attach( win.Control( "ddlb_yslx") ); 
		 if(sle_2 == null ) sle_2= new SingleLineEdit( requestor );
		 sle_2.Attach( win.Control( "sle_2") ); 
		 if(sle_sdtt == null ) sle_sdtt= new SingleLineEdit( requestor );
		 sle_sdtt.Attach( win.Control( "sle_sdtt") ); 
		 if(cbx_ohxtwcl == null ) cbx_ohxtwcl= new CheckBox( requestor );
		 cbx_ohxtwcl.Attach( win.Control( "cbx_ohxtwcl") ); 
		 if(ddlb_bgzt == null ) ddlb_bgzt= new DropDownListBox( requestor );
		 ddlb_bgzt.Attach( win.Control( "ddlb_bgzt") ); 
		 if(ddlb_sfsy == null ) ddlb_sfsy= new DropDownListBox( requestor );
		 ddlb_sfsy.Attach( win.Control( "ddlb_sfsy") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 
		 if(ds_2 == null ) ds_2= new DataStore( requestor );
		 ds_2.Attach( win.Control( "ds_2") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

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

		 if(typeof(self.dw_List_LButtonDown)=="function") 
			 win.AttachEvent("dw_list","LButtonDown",self.dw_List_LButtonDown); 

		 if(typeof(self.dw_List_MouseMove)=="function") 
			 win.AttachEvent("dw_list","MouseMove",self.dw_List_MouseMove); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_jdrjc","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_rqlx","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.slekh_EditChanged)=="function") 
			 win.AttachEvent("sle_kh","EditChanged",self.slekh_EditChanged); 

		 if(typeof(self.slehth_EditChanged)=="function") 
			 win.AttachEvent("sle_hth","EditChanged",self.slehth_EditChanged); 

		 if(typeof(self.sletdh_EditChanged)=="function") 
			 win.AttachEvent("sle_tdh","EditChanged",self.sletdh_EditChanged); 

		 if(typeof(self.slebb_EditChanged)=="function") 
			 win.AttachEvent("sle_bgdh","EditChanged",self.slebb_EditChanged); 

		 if(typeof(self.Help)=="function") 
			 win.AttachEvent("btn_Help","Clicked",self.Help); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_prn","Clicked",self.Print); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_yslx","SelectionChanged",self.Retrieve); 

		 if(typeof(self.slejzxh_EditChanged)=="function") 
			 win.AttachEvent("sle_2","EditChanged",self.slejzxh_EditChanged); 

		 if(typeof(self.slesdtt_EditChanged)=="function") 
			 win.AttachEvent("sle_sdtt","EditChanged",self.slesdtt_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("cbx_ohxtwcl","Clicked",self.Retrieve); 

		 if(typeof(self.Qx)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.Qx); 

		 if(typeof(self.Qqx)=="function") 
			 win.AttachEvent("btn_qqx","Clicked",self.Qqx); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_bgzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sfsy","SelectionChanged",self.Retrieve); 

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
		 tb_3.Detach(); tb_3=null; 
		 ddlb_jdrjc.Detach(); ddlb_jdrjc=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 tb_2.Detach(); tb_2=null; 
		 ddlb_rqlx.Detach(); ddlb_rqlx=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_kh.Detach(); sle_kh=null; 
		 sle_hth.Detach(); sle_hth=null; 
		 sle_tdh.Detach(); sle_tdh=null; 
		 sle_bgdh.Detach(); sle_bgdh=null; 
		 tb_1.Detach(); tb_1=null; 
		 ddlb_yslx.Detach(); ddlb_yslx=null; 
		 sle_2.Detach(); sle_2=null; 
		 sle_sdtt.Detach(); sle_sdtt=null; 
		 cbx_ohxtwcl.Detach(); cbx_ohxtwcl=null; 
		 ddlb_bgzt.Detach(); ddlb_bgzt=null; 
		 ddlb_sfsy.Detach(); ddlb_sfsy=null; 
		 dw_print.Detach(); dw_print=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_role.Detach(); ds_role=null; 
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
    var iw_Wldw_Select = null;
    var iw_Hddz_Sjzf = null;
    var iw_Fj_Edit = null;

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
        var yslx = ddlb_yslx.GetText();
        var rqlx = ddlb_rqlx.GetText();
        var bgzt = ddlb_bgzt.GetText();
        var sfsy = ddlb_sfsy.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
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
        var ohxt_clbz = "N";

        if (cbx_ohxtwcl.GetChecked()) {
            ohxt_clbz = "Y";
        }
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), Dlwtf, yslx, Tybm, Sfqytybm, rqlx, ohxt_clbz, bgzt, sfsy,jdrjc);
    }
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

        dw_list.AcceptText();

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


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

    //#region 双击

    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            var readonly = requestor.GetParm("Readonly");
            if (dwoName == "sjzfkhjc") {
                if (readonly == "no") {
                    var sjzfkhlx = dw_list.GetItemString(Row, "sjzfkhlx")
                    if (sjzfkhlx == "货代") {
                        if (iw_Wldw_Select == null)
                            iw_Wldw_Select = new W_Wldw_Select();
                        khlx = "hdgs";
                        var ywy = requestor.GetParm("userid");
                        var ShareMode = requestor.GetParm("ShareMode");
                        var Dlwtf = requestor.GetParm("Dlwtf");

                        iw_Wldw_Select.SetDataWindow(dw_list);
                        iw_Wldw_Select.SetData("hddz_sj_sjzfkh");
                        iw_Wldw_Select.SetRow(Row);
                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                        dw_list.SetFocus();
                    }
                    if (sjzfkhlx == "经营单位") {
                        if (iw_Wldw_Select == null)
                            iw_Wldw_Select = new W_Wldw_Select();
                        khlx = "wmgs";
                        var ywy = requestor.GetParm("userid");
                        var ShareMode = requestor.GetParm("ShareMode");
                        var Dlwtf = requestor.GetParm("Dlwtf");

                        iw_Wldw_Select.SetDataWindow(dw_list);
                        iw_Wldw_Select.SetData("hddz_sj_sjzfkh");
                        iw_Wldw_Select.SetRow(Row);
                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                        dw_list.SetFocus();
                    }
                    if (sjzfkhlx == "代理客户") {
                        if (iw_Wldw_Select == null)
                            iw_Wldw_Select = new W_Wldw_Select();
                        khlx = "gncgs";
                        var ywy = requestor.GetParm("userid");
                        var ShareMode = requestor.GetParm("ShareMode");
                        var Dlwtf = requestor.GetParm("Dlwtf");

                        iw_Wldw_Select.SetDataWindow(dw_list);
                        iw_Wldw_Select.SetData("hddz_sj_sjzfkh");
                        iw_Wldw_Select.SetRow(Row);
                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                        dw_list.SetFocus();
                    }
                }
            }
            else if (dwoName == "hygsmc") {
                if (readonly == "no") {
                    var yw_khbm = dw_list.GetItemString(Row, "hygsmc")
                    if (yw_khbm == null || yw_khbm == "")
                        return
                    self.OpenWldw(yw_khbm);
                }
            } else if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_list.GetItemString(Row, "ywbh");
                var lx = "sj"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_list.SetFocus();

            } else if (dwoName == "gs" || dwoName == "zzs" || dwoName == "bzj") {
                if (iw_Hddz_Sjzf == null)
                    iw_Hddz_Sjzf = new W_Hddz_Sjzf();

                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_list.GetItemString(Row, "ywbh")
                var zbr = dw_list.GetItemString(Row, "zbr")
                var userid = requestor.GetParm("userid");

                iw_Hddz_Sjzf.SetDataWindow(dw_list);
                iw_Hddz_Sjzf.SetData(ywbh);
                iw_Hddz_Sjzf.SetRow(Row);
                iw_Hddz_Sjzf.SetZbr(zbr);
                iw_Hddz_Sjzf.SetBslx("zcsj"); 
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Sjzf", iw_Hddz_Sjzf);
                //                    self.Retrieve()

            } else if (dwoName == "gs_bj" || dwoName == "zzs_bj" || dwoName == "bzj_bj") {
                if (iw_Hddz_Sjzf == null)
                    iw_Hddz_Sjzf = new W_Hddz_Sjzf();

                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_list.GetItemString(Row, "ywbh")
                var zbr = dw_list.GetItemString(Row, "zbr")
                var userid = requestor.GetParm("userid");

                iw_Hddz_Sjzf.SetDataWindow(dw_list);
                iw_Hddz_Sjzf.SetData(ywbh);
                iw_Hddz_Sjzf.SetRow(Row);
                iw_Hddz_Sjzf.SetZbr(zbr);
                iw_Hddz_Sjzf.SetBslx("bjsj");
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Sjzf", iw_Hddz_Sjzf);
                //                    self.Retrieve()

            }
            else if (dwoName == "ywbh") {
                self.OpenWindow();
            }
        }

    }
    //#endregion

    //#region 修改数据窗口内容dw_List_ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "sjzfkhlx") {

            if (data == "货代") {
                var hdgsbm = dw_list.GetItemString(row, "hdgsbm")
                var hdgsmc = dw_list.GetItemString(row, "hdgsmc")
                var hdgsmc = dw_list.GetItemString(row, "hdgsjc")
                var hdgspym = dw_list.GetItemString(row, "hdgspym")
                dw_list.SetItem(row, "sjzfkhbm", hdgsbm)
                dw_list.SetItem(row, "sjzfkhmc", hdgsmc)
                dw_list.SetItem(row, "sjzfkhjc", hdgsmc)
                dw_list.SetItem(row, "sjzfkhpym", hdgspym)
            }
            else if (data == "经营单位") {
                var jydwbm = dw_list.GetItemString(row, "jydwbm")
                var jydwmc = dw_list.GetItemString(row, "jydwmc")
                var jydwjc = dw_list.GetItemString(row, "jydwjc")
                var jydwpym = dw_list.GetItemString(row, "jydwpym")
                dw_list.SetItem(row, "sjzfkhbm", jydwbm)
                dw_list.SetItem(row, "sjzfkhmc", jydwmc)
                dw_list.SetItem(row, "sjzfkhjc", jydwjc)
                dw_list.SetItem(row, "sjzfkhpym", jydwpym)
            } else if (data == "代理客户") {
                var shdwbm = dw_list.GetItemString(row, "shdwbm")
                var shdwmc = dw_list.GetItemString(row, "shdwmc")
                var shdwjc = dw_list.GetItemString(row, "shdwjc")
                var shdwpym = dw_list.GetItemString(row, "shdwpym")
                dw_list.SetItem(row, "sjzfkhbm", shdwbm)
                dw_list.SetItem(row, "sjzfkhmc", shdwmc)
                dw_list.SetItem(row, "sjzfkhjc", shdwjc)
                dw_list.SetItem(row, "sjzfkhpym", shdwpym)
            };

        }

        if (dwoName == "bgdh") {
            var ywbh = dw_list.GetItemString(row, "ywbh");
            if (data != "" && data != null) {
                QsWebSoft.PubMethod.UpdateBgdhOcrwjsb(ywbh, data).value;
            }
        }
        
        if (dwoName == "ohxt_clbz") {
 
            var ohxt_clsj = new Date();
            dw_list.SetItem(row, "ohxt_clsj", ohxt_clsj.getVarDate());
        }

    }
    //#endregion


    //#region 全选
    this.Qx = function () {
        var date = new Date();
        for (row = 1; row <= dw_list.RowCount(); row++) {
            dw_list.SetItem(row, "ohxt_clbz", "Y");
            dw_list.SetItem(row, "ohxt_clsj", date.getVarDate());
        }
    }
    //#endregion

   
    //#region 全选
    this.Qqx = function () {
        var date = new Date();
        for (row = 1; row <= dw_list.RowCount(); row++) {
            dw_list.SetItem(row, "ohxt_clbz", "N");
            dw_list.SetItem(row, "ohxt_clsj", date.getVarDate());
        }
    }
    //#endregion

    //#region 打印
    this.Print = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print.SetDataObject("dw_hddz_print");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print.PrintPreview();
    }
    //#endregion
  
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
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
            dw_list.SetFilter("( Upper(khjc) like Upper('%" + text + "%')) or ( Upper(khpym) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤合同号
    this.slesdtt_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(shdwjc) like Upper('%" + text + "%'))");
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
            dw_list.SetFilter("( Upper(hth) like Upper('%" + text + "%'))");
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

    //#region 过滤报关单号
    this.slebgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(bgdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤报关单号
    this.slebb_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(wbbb) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤集装箱号
    this.slejzxh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hz_jzxh) like Upper('%" + text + "%'))");
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



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hd", "dw_hddz_list_Hd");
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

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

        dw_list.SetFilter();
        dw_list.Filter();

        //数据同步生鲜港
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {

                var ywbh = dw_list.GetItemString(i, "ywbh");
                //                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz");
                dw_log.SetItem(row, "changecols", "bgdh,sfsy");
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
        webReq.Invoke("ListSjSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            var num_gs = QsWebSoft.PubMethod.InertSjzf_gs().value;
            var num_zzs = QsWebSoft.PubMethod.InertSjzf_zzs().value;
            var num_bzj = QsWebSoft.PubMethod.InertSjzf_bzj().value;
            var num_bjgs = QsWebSoft.PubMethod.InertSjzf_bjgs().value;
            var num_bjzzs = QsWebSoft.PubMethod.InertSjzf_bjzzs().value;
            var num_bjbzj = QsWebSoft.PubMethod.InertSjzf_bjbzj().value;
            var num_zbj = QsWebSoft.PubMethod.InertSjzf_zbj().value;

            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
    }
    //#endregion  

    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\税金管理.txt')
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
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

}
