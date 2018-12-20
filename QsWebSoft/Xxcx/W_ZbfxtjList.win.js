///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_ZbfxtjList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_list_day= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var dp_begin_day= new DatePicker( requestor );
	 var dp_end_day= new DatePicker( requestor );
	 var ddlb_sjd_day= new DropDownListBox( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var dw_list_week= new DataWindow( requestor );
	 var tb_4= new ToolStrip( requestor );
	 var dp_begin_week= new DatePicker( requestor );
	 var dp_end_week= new DatePicker( requestor );
	 var ddlb_sjd_week= new DropDownListBox( requestor );
	 var dw_list_mon= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var dp_nf_mon= new DropDownListBox( requestor );
	 var dp_sjd_mon= new DropDownListBox( requestor );
	 var dw_list_year= new DataWindow( requestor );
	 var tb_5= new ToolStrip( requestor );
	 var ddlb_nf_beginyear= new DropDownListBox( requestor );
	 var ddlb_nf_endyear= new DropDownListBox( requestor );
	 var ddlb_sjd_year= new DropDownListBox( requestor );
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dp_1= new DatePicker( requestor );
	 var dw_print= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_list_day == null ) dw_list_day= new DataWindow( requestor );
		 dw_list_day.Attach( win.Control( "dw_list_day") ); 
		 if(tb_3 == null ) tb_3= new ToolStrip( requestor );
		 tb_3.Attach( win.Control( "tb_3") ); 
		 if(dp_begin_day == null ) dp_begin_day= new DatePicker( requestor );
		 dp_begin_day.Attach( win.Control( "dp_begin_day") ); 
		 if(dp_end_day == null ) dp_end_day= new DatePicker( requestor );
		 dp_end_day.Attach( win.Control( "dp_end_day") ); 
		 if(ddlb_sjd_day == null ) ddlb_sjd_day= new DropDownListBox( requestor );
		 ddlb_sjd_day.Attach( win.Control( "ddlb_sjd_day") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(dw_list_week == null ) dw_list_week= new DataWindow( requestor );
		 dw_list_week.Attach( win.Control( "dw_list_week") ); 
		 if(tb_4 == null ) tb_4= new ToolStrip( requestor );
		 tb_4.Attach( win.Control( "tb_4") ); 
		 if(dp_begin_week == null ) dp_begin_week= new DatePicker( requestor );
		 dp_begin_week.Attach( win.Control( "dp_begin_week") ); 
		 if(dp_end_week == null ) dp_end_week= new DatePicker( requestor );
		 dp_end_week.Attach( win.Control( "dp_end_week") ); 
		 if(ddlb_sjd_week == null ) ddlb_sjd_week= new DropDownListBox( requestor );
		 ddlb_sjd_week.Attach( win.Control( "ddlb_sjd_week") ); 
		 if(dw_list_mon == null ) dw_list_mon= new DataWindow( requestor );
		 dw_list_mon.Attach( win.Control( "dw_list_mon") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(dp_nf_mon == null ) dp_nf_mon= new DropDownListBox( requestor );
		 dp_nf_mon.Attach( win.Control( "dp_nf_mon") ); 
		 if(dp_sjd_mon == null ) dp_sjd_mon= new DropDownListBox( requestor );
		 dp_sjd_mon.Attach( win.Control( "dp_sjd_mon") ); 
		 if(dw_list_year == null ) dw_list_year= new DataWindow( requestor );
		 dw_list_year.Attach( win.Control( "dw_list_year") ); 
		 if(tb_5 == null ) tb_5= new ToolStrip( requestor );
		 tb_5.Attach( win.Control( "tb_5") ); 
		 if(ddlb_nf_beginyear == null ) ddlb_nf_beginyear= new DropDownListBox( requestor );
		 ddlb_nf_beginyear.Attach( win.Control( "ddlb_nf_beginyear") ); 
		 if(ddlb_nf_endyear == null ) ddlb_nf_endyear= new DropDownListBox( requestor );
		 ddlb_nf_endyear.Attach( win.Control( "ddlb_nf_endyear") ); 
		 if(ddlb_sjd_year == null ) ddlb_sjd_year= new DropDownListBox( requestor );
		 ddlb_sjd_year.Attach( win.Control( "ddlb_sjd_year") ); 
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dp_1 == null ) dp_1= new DatePicker( requestor );
		 dp_1.Attach( win.Control( "dp_1") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_list_day","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_Day_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list_day","DoubleClicked",self.dw_Day_DoubleClicked); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_list_day","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list_day","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sjd_day","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_4","Clicked",self.Retrieve); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_5","Clicked",self.Exit); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_list_week","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_Week_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list_week","DoubleClicked",self.dw_Week_DoubleClicked); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_list_week","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list_week","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sjd_week","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_6","Clicked",self.Retrieve); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_7","Clicked",self.Exit); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_list_mon","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_Mon_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list_mon","DoubleClicked",self.dw_Mon_DoubleClicked); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_list_mon","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list_mon","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("dp_nf_mon","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("dp_sjd_mon","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.Exit); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_list_year","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_Year_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list_year","DoubleClicked",self.dw_Year_DoubleClicked); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_list_year","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list_year","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_nf_beginyear","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_nf_endyear","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sjd_year","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_8","Clicked",self.Retrieve); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_9","Clicked",self.Exit); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_1","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_1_DoubleClicked)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.dw_1_DoubleClicked); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_1","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_1","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_2","Clicked",self.Retrieve); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_3","Clicked",self.Exit); 

		 if(typeof(self.Filter)=="function") 
			 win.AttachEvent("单列过滤ToolStripMenuItem","Clicked",self.Filter); 

		 if(typeof(self.Filter_Cancle)=="function") 
			 win.AttachEvent("取消过滤ToolStripMenuItem","Clicked",self.Filter_Cancle); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.CopySelect)=="function") 
			 win.AttachEvent("选择复制ToolStripMenuItem","Clicked",self.CopySelect); 

		 if(typeof(self.CopyL)=="function") 
			 win.AttachEvent("整列复制ToolStripMenuItem","Clicked",self.CopyL); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_list_day.Detach(); dw_list_day=null; 
		 tb_3.Detach(); tb_3=null; 
		 dp_begin_day.Detach(); dp_begin_day=null; 
		 dp_end_day.Detach(); dp_end_day=null; 
		 ddlb_sjd_day.Detach(); ddlb_sjd_day=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 dw_list_week.Detach(); dw_list_week=null; 
		 tb_4.Detach(); tb_4=null; 
		 dp_begin_week.Detach(); dp_begin_week=null; 
		 dp_end_week.Detach(); dp_end_week=null; 
		 ddlb_sjd_week.Detach(); ddlb_sjd_week=null; 
		 dw_list_mon.Detach(); dw_list_mon=null; 
		 tb_2.Detach(); tb_2=null; 
		 dp_nf_mon.Detach(); dp_nf_mon=null; 
		 dp_sjd_mon.Detach(); dp_sjd_mon=null; 
		 dw_list_year.Detach(); dw_list_year=null; 
		 tb_5.Detach(); tb_5=null; 
		 ddlb_nf_beginyear.Detach(); ddlb_nf_beginyear=null; 
		 ddlb_nf_endyear.Detach(); ddlb_nf_endyear=null; 
		 ddlb_sjd_year.Detach(); ddlb_sjd_year=null; 
		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 dp_1.Detach(); dp_1=null; 
		 dw_print.Detach(); dw_print=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_role.Detach(); ds_role=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改



    //#region 变量定义
    var editMode = "";
    var dwc = new DataWindowChild();
    var cloname = "";


    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    var iw_Kyyctj_Mon_Mx = null;
    var iw_Kyyctj_Day_Mx = null;
    var iw_Kyyctj_Week_Mx = null;
    var iw_Kyyctj_Year_Mx = null;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Zbfxtj.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        self.Retrieve();
    }
    //#endregion



    //#region 数据查询
    this.Retrieve = function () {

        var begin_day = new Date(dp_begin_day.GetValue());
        var end_day = new Date(dp_end_day.GetValue());
        var sjd_day = ddlb_sjd_day.GetText();

        var begin_week = new Date(dp_begin_week.GetValue());
        var end_week = new Date(dp_end_week.GetValue());
        var sjd_week = ddlb_sjd_week.GetText();

        var nf_mon = dp_nf_mon.GetText();
        var sjd_mon = dp_sjd_mon.GetText();

        var nf_beginyear = ddlb_nf_beginyear.GetText();
        var nf_endyear = ddlb_nf_endyear.GetText();
        var sjd_year = ddlb_sjd_year.GetText();

        var dp_kyzbfxtj = dp_1.GetValue();

        if (begin_week.getFullYear() != end_week.getFullYear()) {
            requestor.MessageBox("", "周统计不允许跨年份");
            return
        }

        dw_list_day.Retrieve(begin_day.getVarDate(), end_day.getVarDate(), sjd_day);
        dw_list_week.Retrieve(begin_week.getVarDate(), end_week.getVarDate(), sjd_week);
        dw_list_mon.Retrieve(nf_mon, sjd_mon);
        dw_list_year.Retrieve(nf_beginyear,nf_endyear, sjd_year);
        dw_1.Retrieve(dp_kyzbfxtj);
    }
    //#endregion


    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    }
    //#endregion


    //#region 月统计双击
    this.dw_Mon_DoubleClicked = function (xPos, yPos, Row, dwoName) {

        var Year = dp_nf_mon.GetText();
        var Sjd = dp_sjd_mon.GetText();
        var Kyycyy = dwoName;
        var Yuefen = dw_list_mon.GetItemNumber(Row, "yuefen");
        if (dwoName == 'zpsyd' || dwoName == 'zpsc') {
            return;
        }
        if (Row > 0) {
            if (iw_Kyyctj_Mon_Mx == null)
                iw_Kyyctj_Mon_Mx = new W_Kyyctj_Mon_Mx();

            iw_Kyyctj_Mon_Mx.SetYear(Year);
            iw_Kyyctj_Mon_Mx.SetSjd(Sjd);
            iw_Kyyctj_Mon_Mx.SetKyycyy(Kyycyy);
            iw_Kyyctj_Mon_Mx.SetYuefen(Yuefen);

            requestor.Open("/LoadWindow.ashx?WinName=Xxcx.W_Kyyctj_Mon_Mx&Year=" + Year + "&Sjd=" + Sjd + "&Kyycyy=" + Kyycyy + "&Yuefen=" + Yuefen, iw_Kyyctj_Mon_Mx);
            dw_list_mon.SetFocus();
        }
    }
    //#endregion

    //#region 日统计双击
    this.dw_Day_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var Rq = dw_list_day.GetItemString(Row, "rq_jsl");
        var Sjd = ddlb_sjd_day.GetText();
        var Kyycyy = dwoName;

        if (dwoName == 'zpsyd' || dwoName == 'zpsc') {
            return;
        }

        if (Row > 0) {
            if (iw_Kyyctj_Day_Mx == null)
                iw_Kyyctj_Day_Mx = new W_Kyyctj_Day_Mx();

            iw_Kyyctj_Day_Mx.SetRq(Rq);
            iw_Kyyctj_Day_Mx.SetSjd(Sjd);
            iw_Kyyctj_Day_Mx.SetKyycyy(Kyycyy);

            requestor.Open("/LoadWindow.ashx?WinName=Xxcx.W_Kyyctj_Day_Mx&Rq=" + Rq + "&Sjd=" + Sjd + "&Kyycyy=" + Kyycyy, iw_Kyyctj_Day_Mx);
            dw_list_day.SetFocus();
        }
    }
    //#endregion

    //#region 周统计双击
    this.dw_Week_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var Week = dw_list_week.GetItemNumber(Row,"weeks");
        var Sjd = ddlb_sjd_week.GetText();
        var Kyycyy = dwoName;
        if (dwoName == 'zpsyd' || dwoName == 'zpsc') {
            return;
        }
        if (Row > 0) {
            if (iw_Kyyctj_Week_Mx == null)
                iw_Kyyctj_Week_Mx = new W_Kyyctj_Week_Mx();

            iw_Kyyctj_Week_Mx.SetWeek(Week);
            iw_Kyyctj_Week_Mx.SetSjd(Sjd);
            iw_Kyyctj_Week_Mx.SetKyycyy(Kyycyy);

            requestor.Open("/LoadWindow.ashx?WinName=Xxcx.W_Kyyctj_Week_Mx&Week=" + Week + "&Sjd=" + Sjd + "&Kyycyy=" + Kyycyy, iw_Kyyctj_Week_Mx);
            dw_list_week.SetFocus();
        }
    }
    //#endregion

    //#region 年统计双击
    this.dw_Year_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var Year = dw_list_year.GetItemString(Row, "nianfen");
        var Sjd = ddlb_sjd_year.GetText();
        var Kyycyy = dwoName;
        if (dwoName == 'zpsyd' || dwoName == 'zpsc') {
            return;
        }
        if (Row > 0) {
            if (iw_Kyyctj_Year_Mx == null)
                iw_Kyyctj_Year_Mx = new W_Kyyctj_Year_Mx();

            iw_Kyyctj_Year_Mx.SetYear(Year);
            iw_Kyyctj_Year_Mx.SetSjd(Sjd);
            iw_Kyyctj_Year_Mx.SetKyycyy(Kyycyy);

            requestor.Open("/LoadWindow.ashx?WinName=Xxcx.W_Kyyctj_Year_Mx&Year=" + Year + "&Sjd=" + Sjd + "&Kyycyy=" + Kyycyy, iw_Kyyctj_Year_Mx);
            dw_list_year.SetFocus();
        }
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



    //#region dw_list Clicked
    this.dw_list_Clicked = function (xPos, yPos, Row, dwoName) {
      

    }
    //#endregion


    //#region dw_list ItemChanged
    this.dw_list_ItemChanged = function (row, dwoName, data) {
        

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
