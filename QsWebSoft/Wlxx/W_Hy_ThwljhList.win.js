///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_ThwljhList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var mdg_name= new SingleLineEdit( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var dw_htjhthsj= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_kh= new SingleLineEdit( requestor );
	 var sle_hth= new SingleLineEdit( requestor );
	 var sle_jzxh= new SingleLineEdit( requestor );
	 var sle_bgdh= new SingleLineEdit( requestor );
	 var sle_tgdh= new SingleLineEdit( requestor );
	 var ddlb_pdy= new DropDownListBox( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ddlb_wlzt= new DropDownListBox( requestor );
	 var ddlb_sc= new DropDownListBox( requestor );
	 var sle_sp= new SingleLineEdit( requestor );
	 var ddlb_jdr= new DropDownListBox( requestor );
	 var ddlb_qgld= new DropDownListBox( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );
	 var ds_jdr= new DataStore( requestor );
	 var ds_2= new DataStore( requestor );
	 var ds_pdy= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_3 == null ) tb_3= new ToolStrip( requestor );
		 tb_3.Attach( win.Control( "tb_3") ); 
		 if(mdg_name == null ) mdg_name= new SingleLineEdit( requestor );
		 mdg_name.Attach( win.Control( "mdg_name") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(dw_htjhthsj == null ) dw_htjhthsj= new DataWindow( requestor );
		 dw_htjhthsj.Attach( win.Control( "dw_htjhthsj") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
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
		 if(sle_jzxh == null ) sle_jzxh= new SingleLineEdit( requestor );
		 sle_jzxh.Attach( win.Control( "sle_jzxh") ); 
		 if(sle_bgdh == null ) sle_bgdh= new SingleLineEdit( requestor );
		 sle_bgdh.Attach( win.Control( "sle_bgdh") ); 
		 if(sle_tgdh == null ) sle_tgdh= new SingleLineEdit( requestor );
		 sle_tgdh.Attach( win.Control( "sle_tgdh") ); 
		 if(ddlb_pdy == null ) ddlb_pdy= new DropDownListBox( requestor );
		 ddlb_pdy.Attach( win.Control( "ddlb_pdy") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ddlb_wlzt == null ) ddlb_wlzt= new DropDownListBox( requestor );
		 ddlb_wlzt.Attach( win.Control( "ddlb_wlzt") ); 
		 if(ddlb_sc == null ) ddlb_sc= new DropDownListBox( requestor );
		 ddlb_sc.Attach( win.Control( "ddlb_sc") ); 
		 if(sle_sp == null ) sle_sp= new SingleLineEdit( requestor );
		 sle_sp.Attach( win.Control( "sle_sp") ); 
		 if(ddlb_jdr == null ) ddlb_jdr= new DropDownListBox( requestor );
		 ddlb_jdr.Attach( win.Control( "ddlb_jdr") ); 
		 if(ddlb_qgld == null ) ddlb_qgld= new DropDownListBox( requestor );
		 ddlb_qgld.Attach( win.Control( "ddlb_qgld") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 
		 if(ds_jdr == null ) ds_jdr= new DataStore( requestor );
		 ds_jdr.Attach( win.Control( "ds_jdr") ); 
		 if(ds_2 == null ) ds_2= new DataStore( requestor );
		 ds_2.Attach( win.Control( "ds_2") ); 
		 if(ds_pdy == null ) ds_pdy= new DataStore( requestor );
		 ds_pdy.Attach( win.Control( "ds_pdy") ); 

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

		 if(typeof(self.xhgqjc_EditChange)=="function") 
			 win.AttachEvent("mdg_name","EditChanged",self.xhgqjc_EditChange); 

		 if(typeof(self.btn_dkrw_Clicked)=="function") 
			 win.AttachEvent("btn_dkrw","Clicked",self.btn_dkrw_Clicked); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.slekh_EditChanged)=="function") 
			 win.AttachEvent("sle_kh","EditChanged",self.slekh_EditChanged); 

		 if(typeof(self.slehth_EditChanged)=="function") 
			 win.AttachEvent("sle_hth","EditChanged",self.slehth_EditChanged); 

		 if(typeof(self.slejzxh_EditChanged)=="function") 
			 win.AttachEvent("sle_jzxh","EditChanged",self.slejzxh_EditChanged); 

		 if(typeof(self.slebgdh_EditChanged)=="function") 
			 win.AttachEvent("sle_bgdh","EditChanged",self.slebgdh_EditChanged); 

		 if(typeof(self.sletgdh_EditChanged)=="function") 
			 win.AttachEvent("sle_tgdh","EditChanged",self.sletgdh_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_pdy","SelectionChanged",self.Retrieve); 

		 if(typeof(self.New)=="function") 
			 win.AttachEvent("btn_new","Clicked",self.New); 

		 if(typeof(self.DZOpenWindow)=="function") 
			 win.AttachEvent("btn_dzOpen","Clicked",self.DZOpenWindow); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_prn","Clicked",self.Print); 

		 if(typeof(self.OpenYcyy)=="function") 
			 win.AttachEvent("btn_ycyy","Clicked",self.OpenYcyy); 

		 if(typeof(self.Cancle_Dcrw)=="function") 
			 win.AttachEvent("btn_cxdcrw","Clicked",self.Cancle_Dcrw); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_wlzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sc","SelectionChanged",self.Retrieve); 

		 if(typeof(self.sleSp_EditChanged)=="function") 
			 win.AttachEvent("sle_sp","EditChanged",self.sleSp_EditChanged); 

		 if(typeof(self.Bgd)=="function") 
			 win.AttachEvent("btn_bgd","Clicked",self.Bgd); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_jdr","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_qgld","SelectionChanged",self.Retrieve); 

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
		 mdg_name.Detach(); mdg_name=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 dw_htjhthsj.Detach(); dw_htjhthsj=null; 
		 dw_print.Detach(); dw_print=null; 
		 tb_2.Detach(); tb_2=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_kh.Detach(); sle_kh=null; 
		 sle_hth.Detach(); sle_hth=null; 
		 sle_jzxh.Detach(); sle_jzxh=null; 
		 sle_bgdh.Detach(); sle_bgdh=null; 
		 sle_tgdh.Detach(); sle_tgdh=null; 
		 ddlb_pdy.Detach(); ddlb_pdy=null; 
		 tb_1.Detach(); tb_1=null; 
		 ddlb_wlzt.Detach(); ddlb_wlzt=null; 
		 ddlb_sc.Detach(); ddlb_sc=null; 
		 sle_sp.Detach(); sle_sp=null; 
		 ddlb_jdr.Detach(); ddlb_jdr=null; 
		 ddlb_qgld.Detach(); ddlb_qgld=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_role.Detach(); ds_role=null; 
		 ds_jdr.Detach(); ds_jdr=null; 
		 ds_2.Detach(); ds_2=null; 
		 ds_pdy.Detach(); ds_pdy=null; 
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

    var iw_Wldw_Shdz_Select = null;
    var iW_Wldw_htjhthsj_Select = null;
    var iw_Sfdqlm_Select = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Thwljh.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {

        self.Retrieve();
    }
    //#endregion

    //#region 新建
    this.New = function () {

        var node = "000108";
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var ysfs = escape("海运");
        var bg = "N"
        var bj = "N"
        var wl = "Y"
        var hd = "N"
        var fx = "N"

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

        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&ysfs=' + ysfs + '&bg=' + bg + '&bj=' + bj + '&wl=' + wl + '&hd=' + hd + '&fx=' + fx + '&operation=' + operation.toString(), true);

    }
    //#endregion
  
    //#region 打开编辑窗口
    this.DZOpenWindow = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000108";
        var bg = dw_list.GetItemString(1, "bg")
        var bj = dw_list.GetItemString(1, "bj")
        var wl = dw_list.GetItemString(1, "wl")
        var hd = dw_list.GetItemString(1, "hd")
        var fx = dw_list.GetItemString(1, "fx")
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var ysfs = dw_list.GetItemString(dw_list.GetRow(), 'ysfs')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        //失效按钮的控制
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");

        var kybmjl = requestor.GetParm("kybmjl");
        var hybmjl = requestor.GetParm("hybmjl");


        var operation
        if (ywy == userid || zbr == userid || userid == "0003" || (ysfs == "空运" && kybmjl == "Y") || (ysfs == "海运" && hybmjl == "Y")) {
            operation = "open";
        }
        else {
            operation = "show";
        }

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&ysfs=' + ysfs + '&bg=' + bg + '&bj=' + bj + '&wl=' + wl + '&hd=' + hd + '&fx=' + fx + '&operation=' + operation.toString(), true);



    }
    //#endregion

    //#region 自己查询
    this.Retrieve = function ()
    {
        if ( self.CloseQuery() == 1 )
            return;
        var beginDate = new Date( dp_begin.GetValue() );
        var endDate = new Date( dp_end.GetValue() );
        var wlzt = ddlb_wlzt.GetText();
        var jdr = ddlb_jdr.GetText();
        var qgld = ddlb_qgld.GetText();
//        var jdrjc = ddlb_jdrjc.GetText();
        var sc = ddlb_sc.GetText();
        var pdy = ddlb_pdy.GetText();
        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours( 0 );
        beginDate.setMinutes( 0 );
        beginDate.setSeconds( 0 );

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours( 23 );
        endDate.setMinutes( 59 );
        endDate.setSeconds( 59 );

        if ( endDate < beginDate )
        {
            requestor.MessageBox( "提示", "结束日期不能小于开始日期!", ICON.StopSign );
            dp_Begin.SetFocus();
            return;
        }

        var userid = requestor.GetParm( "userid" );
        var ShareMode = requestor.GetParm( "ShareMode" );
        var Dlwtf = requestor.GetParm( "Dlwtf" );


        dw_list.Retrieve( beginDate.getVarDate(), endDate.getVarDate(), wlzt, jdr, qgld, userid,  sc,pdy );
        dw_log.Retrieve( userid, "hyth" );
    }
    //#endregion


    this.dw_List_ItemChanged = function (row, dwoName, data) {
        //修改记录应该一次保存一次保留一次记录 ，而不是只要修改就插入一条记录
//        if (dwoName == "jzxxx_htjhthsj") {
//            dw_list.AcceptText();    //相当于更新
//            var i = dw_htjhthsj.InsertRow(0);
//            var ywbh = dw_list.GetItemString(row, "ywbh");
//            var cxh = dw_list.GetItemNumber(row, "cxh");
//            var jzxxx_htjhthsj = dw_list.GetItemDate(row, "jzxxx_htjhthsj");
//            var jzxxx_htjhthsj_sjd = dw_list.GetItemString(row, "jzxxx_htjhthsj_sjd");
//            var userid = requestor.GetParm("userid");
//            var date = new Date();
//            dw_htjhthsj.SetItem(i, "ywbh", ywbh);
//            dw_htjhthsj.SetItem(i, "hddz_cxh", cxh);
//            dw_htjhthsj.SetItem(i, "zbr", userid);
//            dw_htjhthsj.SetItem(i, "zbrq", date.getVarDate());
//            dw_htjhthsj.SetItem(i, "htjhthsj", jzxxx_htjhthsj);
//            dw_htjhthsj.SetItem(i, "htjhthsj_sjd", jzxxx_htjhthsj_sjd);
        //        }
        if (dwoName == "jzxxx_htjhthsj" || dwoName == "jzxxx_htjhthsj_sjd") {
            dw_list.AcceptText();
            var date = new Date();
            dw_list.SetItem(row, "jzxxx_htjhthsj_lrsj", date.getVarDate());
        }

        if ( dwoName == "wlbgz"   )
        {
            var date = new Date();
            var userid = requestor.GetParm( "userid" );
             dw_list.SetItem( row, "wlbgz_lrsj", date.getVarDate() );
             dw_list.SetItem( row, "wlbgz_lrry", userid );
        }

    }

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

   

    var iw_Hy_Wlgz = null;
    this.btn_dkrw_Clicked = function (Row) {
        if (iw_Hy_Wlgz == null)
            iw_Hy_Wlgz = new W_Hy_Wlgz();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();

        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hddz_cxh = dw_list.GetItemNumber(row, "cxh");
        var rwbh = QsWebSoft.PubMethod.ReadRwbh(ywbh, hddz_cxh.toString(), "gq_c_rwbh").value;  //dw_list.GetItemString(row, "jzxxx_gq_c_rwbh");
        var rwmc = "gq";

        iw_Hy_Wlgz.SetDataWindow(dw_list);
        iw_Hy_Wlgz.SetData(ywbh);
        iw_Hy_Wlgz.SetRow(hddz_cxh);
        iw_Hy_Wlgz.SetRwlx("码头司机任务");

        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Hy_Wlgz&Rwbh=" + rwbh + '&Ywbh=' + ywbh + '&Hddz_cxh=' + hddz_cxh.toString() + '&Rwmc=' + rwmc, iw_Hy_Wlgz);
        dw_list.RowsDiscard(row);
    }


    //#region 打开编辑窗口
    this.OpenWindow = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000202";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var cxh = dw_list.GetItemNumber(dw_list.GetRow(), 'cxh')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
        var userid = requestor.GetParm("userid");
        dw_list.AcceptText();
        var jzxxx_csbz = dw_list.GetItemString(dw_list.GetRow(), "jzxxx_csbz");
        var operation = requestor.GetParm("operation");

        if (operation == "open" && (jzxxx_csbz == "" || jzxxx_csbz == "N" || jzxxx_csbz == null)) {
            operation = "new"
        }

        //失效按钮的控制



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



    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenHddz = function () {
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
        var operation = "show";
        //失效按钮的控制



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

    //#region 撤销堆场任务
    var iw_Hy_Wlgz = null;
    this.Cancle_Dcrw = function (Row) {
        if (iw_Hy_Wlgz == null)
            iw_Hy_Wlgz = new W_Hy_Wlgz();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh");
        var hddz_cxh = dw_list.GetItemNumber(row, "cxh");

        var rwbh = QsWebSoft.PubMethod.ReadRwbh(ywbh, hddz_cxh.toString(), "dc_rwbh").value;
        if (rwbh == "" || rwbh == null) {
            requestor.MessageBox("提示", "尚未下堆场任务，不能查看！");
            return
        }
        iw_Hy_Wlgz.SetDataWindow(dw_list);
        iw_Hy_Wlgz.SetData(ywbh);
        iw_Hy_Wlgz.SetRow(hddz_cxh);
        iw_Hy_Wlgz.SetRwlx("堆场任务");
        var rwmc = "dc";
        requestor.Open("/LoadWindow.ashx?WinName=Wlxx.W_Hy_Wlgz&Rwbh=" + rwbh + '&Ywbh=' + ywbh + '&Hddz_cxh=' + hddz_cxh.toString() + '&Rwmc=' + rwmc, iw_Hy_Wlgz);

    }
    //#endregion


    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");
        if (Row > 0) {
            if (dwoName == "ywbh") {
                self.OpenHddz();
            } else
                if (dwoName == "jzxxx_sjshrmc") {
                    if (readonly == "no") {
                        if (iw_Wldw_Select == null)
                            iw_Wldw_Select = new W_Wldw_Select();
                        khlx = "gncgs";
                        var ywy = requestor.GetParm("userid");
                        var ShareMode = requestor.GetParm("ShareMode");
                        var Dlwtf = requestor.GetParm("Dlwtf");

                        iw_Wldw_Select.SetDataWindow(dw_list);
                        iw_Wldw_Select.SetData("hy_thwljh_sjshr");
                        iw_Wldw_Select.SetRow(Row);
                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                        dw_list.SetFocus();
                    }
                } else if (dwoName == "jzxxx_zyxx") {
                    if (readonly == "no") {
                        if (iw_Wldw_Shdz_Select == null)
                            iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
                        var ywy = requestor.GetParm("userid");
                        var ShareMode = requestor.GetParm("ShareMode");
                        var Dlwtf = requestor.GetParm("Dlwtf");

                        var Khbm = dw_list.GetItemString(Row, "jzxxx_sjshrmc")

                        iw_Wldw_Shdz_Select.SetDataWindow(dw_list);
                        iw_Wldw_Shdz_Select.SetData("thwljh_wlgz_dz_list");
                        iw_Wldw_Shdz_Select.SetRow(Row);
                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
                        dw_list.SetFocus();

                    }
                } else if (dwoName == "jzxxx_htjhthsj" || dwoName == "jzxxx_htjhthsj_sjd") {
                    if (iW_Wldw_htjhthsj_Select == null)
                        iW_Wldw_htjhthsj_Select = new W_Wldw_htjhthsj_Select();

                    var ywbh = dw_list.GetItemString(Row, "ywbh");
                    var cxh = dw_list.GetItemNumber(Row, "cxh");
                    ywbh = ywbh.replace(" ", ""); 
                 
//                    iW_Wldw_htjhthsj_Select.Setywbh(ywbh);
//                    iW_Wldw_htjhthsj_Select.SetCxh(cxh);

                    iW_Wldw_htjhthsj_Select.SetDataWindow(dw_list);
                    iW_Wldw_htjhthsj_Select.SetData("thwljh_wlgz_dz_list");
                    iW_Wldw_htjhthsj_Select.SetRow(Row);
                   requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_htjhthsj_Select&ywbh=" + ywbh + "+&cxh=" + cxh, iW_Wldw_htjhthsj_Select);
              
                    dw_list.SetFocus();
                   }

                else {
                    self.OpenWindow();
                }

        }
    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
        //        dwoname = dwoName;
        //        if (Row > 0)
        //            if (dwoName == "id") {
        //                self.OpenWindow();
        //            }
    }
    //#endregion

    //     this.Download = function () {
    //         QsWebSoft.PubMethod.DownLoad();
    //    }


    //#region 删除
    this.Delete = function () {

        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;

        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();

        var status = dw_list.GetItemString(row, "state");
        if (status != "新制" & status != "退回") {
            requestor.MessageBox("提示", "当前明细单的状态为<" + status + ">,不能被删除!", 1);
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
        if (requestor.MessageBox("提示", "删除货代单证<" + ywbh + ">,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
            return;

        //执行删除的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Delete", "ywbh=" + ywbh);

        if (webReq.StatusCode() == 200) {
            dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
            requestor.MessageBox("提示", webReq.ResponseText());
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
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
    this.slejdr_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jdjc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤客户
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

    //#region 过滤市场
    this.ddlb_sc_SelectionChanged = function () {

        var sc = ddlb_sc.GetText();
        var bjsc = "N";
        var jsc = "Y";

        if (sc == "全部") {
            dw_list.SetFilter("");
        }
        else {
            if (sc == "非市场") {
                dw_list.SetFilter("( Upper(jzxxx_sc_bz) like Upper('%" + bjsc + "%'))");
            }
            else {
                dw_list.SetFilter("( Upper(yw_hddz_jzxxx_sc_jc) like Upper('%" + sc + "%')) and ( Upper(jzxxx_sc_bz) like Upper('%" + jsc + "%'))");
            }
        };
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);

    }
    //#endregion
    this.xhgqjc_EditChange = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(xhgqjc) like Upper('%" + text + "%'))");

        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#region 过滤客户
    this.slekh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%')) or ( Upper(khjc) like Upper('%" + text + "%')) or ( Upper(khpym) like Upper('%" + text + "%'))");

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


    //#region 过滤集装箱号
    this.slejzxh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(jzxxx_jzxh) like Upper('%" + text + "%'))");
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

    //#region 过滤通关单号
    this.sletgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(tgdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤商品
    this.sleSp_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hz_spmc) like Upper('%" + text + "%'))");
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



    //#region 复制
    this.Copy = function () {
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
        var operation
        operation = "copy";


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



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Hy_ThwljhList", "dw_hy_thwljh_list");
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

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount() + dw_htjhthsj.ModifiedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var dw_d_data = dw_list.GetChanges();
        if (dw_d_data == "")
            return;
       
        var str1 = dw_list.Describe("DataWindow.Table.Filter");
        dw_list.SetFilter();
        dw_list.Filter();

        //数据同步生鲜港
        var userid = requestor.GetParm("userid");
        var date = new Date();
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            var htjhthsj_state = dw_list.GetItemStatus(i, "jzxxx_htjhthsj", DWBUFFER.Primary);
            var htjhthsj_sjd_state = dw_list.GetItemStatus(i, "jzxxx_htjhthsj_sjd", DWBUFFER.Primary);
            if (htjhthsj_state == 1 || htjhthsj_sjd_state == 1) {
                var htjhthsj_insertrow = dw_htjhthsj.InsertRow(0);
                var ywbh = dw_list.GetItemString(i, "ywbh");
                var cxh = dw_list.GetItemNumber(i, "cxh");
                var jzxxx_htjhthsj = dw_list.GetItemDate(i, "jzxxx_htjhthsj");
                var jzxxx_htjhthsj_sjd = dw_list.GetItemString(i, "jzxxx_htjhthsj_sjd");
                var jzxxx_jzxh = dw_list.GetItemString(i, "jzxxx_jzxh");
                dw_htjhthsj.SetItem(htjhthsj_insertrow, "ywbh", ywbh);
                dw_htjhthsj.SetItem(htjhthsj_insertrow, "hddz_cxh", cxh);
                dw_htjhthsj.SetItem(htjhthsj_insertrow, "zbr", userid);
                dw_htjhthsj.SetItem(htjhthsj_insertrow, "zbrq", date.getVarDate());
                dw_htjhthsj.SetItem(htjhthsj_insertrow, "htjhthsj", jzxxx_htjhthsj);
                dw_htjhthsj.SetItem(htjhthsj_insertrow, "htjhthsj_sjd", jzxxx_htjhthsj_sjd);
                dw_htjhthsj.SetItem(htjhthsj_insertrow, "jzxh", jzxxx_jzxh);
            }

            var state = dw_list.GetItemStatus(i, 0, DWBUFFER.Primary);
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {

                var ywbh = dw_list.GetItemString(i, "ywbh");
                var cxh = dw_list.GetItemString(i, "cxh");

                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
                dw_log.SetItem(row, "changecols", "zyxx,htjhthsj,htjhthsj_sjd,thjjcd,beizhu,cgqsj,sjshrbm,sjshrmc");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.SetItem(row, "parameters", cxh);
                dw_log.ScrollToRow(row);
            }
        }

        var dw_htjhthsj_data = dw_htjhthsj.GetChanges();  //获取改变的
        if (dw_htjhthsj_data == "")
       

        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data + "&dw_htjhthsj=" + dw_htjhthsj_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            dw_htjhthsj.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
        dw_list.SetFilter(str1);
        dw_list.Filter();
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
        //var jzxh = dw_list.GetItemString(row, "jzxxx_jzxh")
        iw_Hddz_Ycyy.SetDataWindow(dw_list);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("0201");
        //iw_Hddz_Ycyy.setDataJzxh(jzxh);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);
        //requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy&jzxh=" + jzxh, iw_Hddz_Ycyy);

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


    //#region 报关单
    this.Bgd = function () {
        var row = dw_list.GetRow();
        if (row > 0) {
            var bgdh = dw_list.GetItemString(row, "bgdh");
            if (bgdh == null || bgdh == "") {
                requestor.MessageBox("提示", "对应报关单号未输入！")
            } else {
                var sfybgd = dw_list.GetItemString(row, "sfybgd");
                if (sfybgd == "N") {
                    //                    requestor.MessageBox("提示", "报关单未上传！")
                    var ywbh = dw_list.GetItemString(row, "ywbh");

                    var index = ywbh.indexOf("-");

                    if (index > 0) {
                        ywbh = ywbh.substring(0, index);
                    };
                    window.open("http://www.fruitease.com:8009/wenjian/bgd/" + ywbh + ".pdf", "_blank", "channelmode");
                } else {
                    bgdh = bgdh + ",";
                    do {

                        var bgd = "";
                        var index = bgdh.indexOf(",");
                        if (index > 0) {
                            bgd = bgdh.substring(0, index)
                            bgdh = bgdh.substr(index + 1)

                        }
                        if (bgd.length > 1) {
                            window.open("http://www.fruitease.com:8009/wenjian/bgd/" + bgd + ".pdf", "_blank", "channelmode");
                        }
                    } while (bgdh.indexOf(",") > 0);

                }
            }
        }
    }
    //#endregion

}
