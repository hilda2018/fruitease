///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_Wlgz() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_wldz= new DataWindow( requestor );
	 var dw_dcrw= new DataWindow( requestor );
	 var dw_rwxz= new DataWindow( requestor );
	 var tab_1= new TabControl( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_print_cns= new DataWindow( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_lsjl= new DataWindow( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_wldz == null ) dw_wldz= new DataWindow( requestor );
		 dw_wldz.Attach( win.Control( "dw_wldz") ); 
		 if(dw_dcrw == null ) dw_dcrw= new DataWindow( requestor );
		 dw_dcrw.Attach( win.Control( "dw_dcrw") ); 
		 if(dw_rwxz == null ) dw_rwxz= new DataWindow( requestor );
		 dw_rwxz.Attach( win.Control( "dw_rwxz") ); 
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_print_cns == null ) dw_print_cns= new DataWindow( requestor );
		 dw_print_cns.Attach( win.Control( "dw_print_cns") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_lsjl == null ) dw_lsjl= new DataWindow( requestor );
		 dw_lsjl.Attach( win.Control( "dw_lsjl") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_dcrw_Clicked)=="function") 
			 win.AttachEvent("dw_dcrw","Clicked",self.dw_dcrw_Clicked); 

		 if(typeof(self.dw_rwxz_ButtonClicked)=="function") 
			 win.AttachEvent("dw_rwxz","ButtonClicked",self.dw_rwxz_ButtonClicked); 

		 if(typeof(self.dw_rwxz_Clicked)=="function") 
			 win.AttachEvent("dw_rwxz","Clicked",self.dw_rwxz_Clicked); 

		 if(typeof(self.dw_rwxz_ItemChanged)=="function") 
			 win.AttachEvent("dw_rwxz","ItemChanged",self.dw_rwxz_ItemChanged); 

		 if(typeof(self.dw_Master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_Master_ButtonClicked); 

		 if(typeof(self.dw_Master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_Master_Clicked); 

		 if(typeof(self.dw_Master_DoubleClicked)=="function") 
			 win.AttachEvent("dw_master","DoubleClicked",self.dw_Master_DoubleClicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_Master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_Master_ItemChanged); 

		 if(typeof(self.dw_Master_EntertoTab)=="function") 
			 win.AttachEvent("dw_master","KeyDown",self.dw_Master_EntertoTab); 

		 if(typeof(self.dw_Master_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_master","RowFocusChanged",self.dw_Master_RowFocusChanged); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_jzxxx_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_jzxxx_GetFocus); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.RowCopy)=="function") 
			 win.AttachEvent("btn_rowcopy","Clicked",self.RowCopy); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowinsert","Clicked",self.InsertRow); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.save); 

		 if(typeof(self.Xztp)=="function") 
			 win.AttachEvent("btn_2","Clicked",self.Xztp); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.fhd_Clicked)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.fhd_Clicked); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_wldz.Detach(); dw_wldz=null; 
		 dw_dcrw.Detach(); dw_dcrw=null; 
		 dw_rwxz.Detach(); dw_rwxz=null; 
		 tab_1.Detach(); tab_1=null; 
		 dw_master.Detach(); dw_master=null; 
		 dw_print_cns.Detach(); dw_print_cns=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 tb_1.Detach(); tb_1=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_lsjl.Detach(); dw_lsjl=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";

    var dw_mx = null;

    var dwc = new DataWindowChild();
    var dwc_zbr = new DataWindowChild();
    var iw_Sj_Select = null;
    var iw_Sjmc_Select = null;
    var iw_Wldw_Select = null;
    var iw_Cj_Select = null;
    var iw_Hy_Wlgz_Rwdz = null;
    var iw_Bdsbh_Select = null;
    // var lastdw = new DataWindow();
    var lastdw = new DataWindow();

    var dwc_dq = new DataWindowChild();
    var dwc_lm = new DataWindowChild();
    var iw_Sfdqlm_Select = null;
    var xgnr = "";

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }
    var RowData = null;
    this.SetRow = function (parm) {
        RowData = parm;
    }

    var Rwlx = null;
    this.SetRwlx = function (parm) {
        Rwlx = parm;
    }



    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Wlgz.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_rwxz.ShareData(dw_dcrw);
        dw_wldz.Modify("DataWindow.Readonly=yes");
        lastdw.Attach(dw_master);
        self.Add();
        var count = dw_master.RowCount();
        if (count < 1) {
            self.AddRow1();
            self.b_xzwldz_clicked();
        }
    }
    
    this.SetListDataWindow = function (dw) {
        dw_List = dw;
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_rwxz.AcceptText();
        dw_wldz.AcceptText();
        dw_log.AcceptText();
        if ((dw_master.ModifiedCount() + dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_wldz.ModifiedCount() + dw_wldz.DeletedCount() + dw_log.ModifiedCount() + dw_log.DeletedCount() + dw_rwxz.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }
    }
    //#endregion

    //#region 新建
    this.Add = function () {
        var userid = requestor.GetParm("userid")
        var ywbh = requestor.GetParm("ywbh")
        var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
        var li_count = dw_master.Retrieve(ywbh, hddz_cxh);
        var jzxxx_count =  dw_jzxxx.Retrieve(ywbh, hddz_cxh);
        dw_rwxz.Retrieve(ywbh, hddz_cxh);
        dw_wldz.Retrieve(ywbh, hddz_cxh);
        dw_lsjl.Retrieve( ywbh, hddz_cxh );

        for ( var jzxxx_row = 1; jzxxx_row <= jzxxx_count; jzxxx_row++ )
        {
            var jd = dw_jzxxx.GetItemString( jzxxx_row, "jd" );    
            var points = dw_jzxxx.GetItemString( jzxxx_row, "points" );
            var rwmc = dw_jzxxx.GetItemString( jzxxx_row, "rwmc" );
            if ( ( jd == null || jd == "" ) && ( points == null || points == "" ) && rwmc == "堆场" )
            {
                var dc_jd = dw_rwxz.GetItemString(1,"dc_jd");
                var dc_wd = dw_rwxz.GetItemString(1,"dc_wd");
                var dc_fw = dw_rwxz.GetItemString(1,"dc_fw");
                var dc_points = dw_rwxz.GetItemString(1,"dc_points");    
                var dc_dz = dw_rwxz.GetItemString(1,"dc_dz");
                dw_jzxxx.SetItem(  jzxxx_row,"jd",dc_jd);
                dw_jzxxx.SetItem(  jzxxx_row,"wd",dc_wd);
                dw_jzxxx.SetItem(  jzxxx_row,"fw",dc_fw);
                dw_jzxxx.SetItem(  jzxxx_row,"points",dc_points);
                dw_jzxxx.SetItem(  jzxxx_row,"dz_xx",dc_dz);

            }             
        }

         for (var row = 1; row <= li_count; row++)
        {
            var dzwlbh = dw_master.GetItemString(row, "dzwlbh");
            dw_master.SetItem(row, "dzwlbh_old", dzwlbh);
            var cph = dw_master.GetItemString(row, "cph");
            dw_master.SetItem(row, "cph_old", cph);
        }
        dw_log.Retrieve(userid, "gzzz");


    }
    //#endregion

    //#region 新建
    this.Xztp = function () {
        
        var webReq1 = new WebRequestor();
                webReq1.SetWebServiceUrl("/Service/xztp.ashx");
//        var num = QsWebSoft.PubMethod.BdsbhCph(bdyssbh, cph, "", rwbh).value;
//        var num1 = QsWebSoft.PubMethod.ProcessRequests1();

    }
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

        tb_1.SetVisible("btn_save", bEditFlag);
        tb_1.SetVisible("btn_rowdelete", bEditFlag);


        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_jzxxx.Modify("DataWindow.Readonly=no");
            dw_rwxz.Modify("DataWindow.Readonly=no");
            dw_wldz.Modify("DataWindow.Readonly=no");
            dw_log.Modify("DataWindow.Readonly=no");

        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_rwxz.Modify("DataWindow.Readonly=yes");
            dw_wldz.Modify("DataWindow.Readonly=yes");
            dw_log.Modify("DataWindow.Readonly=yes");

        }
    };
    //#endregion

    //#region 获得数据窗口的焦点
    this.dw_GetFocus = function (sender) {

        lastdw.Attach(sender);

    };
    this.dw_jzxxx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    }
    //#endregion

    this.fhd_Clicked = function () {

        var rwbh = dw_jzxxx.GetItemString(1, "rwbh");
        
        dw_print_cns.Modify("p_1.filename='C:\wxgzh_sj.gif'");
        dw_print_cns.SetRedraw(false);
        dw_print_cns.SetDataObject("dw_hddz_print_shd");
        //        dw_print_cns.Retrieve(rwbh);
        dw_print_cns.Retrieve(rwbh);
        //dw_print_cns.Retrieve('18ZT369511');
        dw_print_cns.PrintPreview();
        dw_print_cns.SetRedraw(true);

    }

    function CurentTime() {
        var now = new Date();

        var year = now.getFullYear();       //年  
        var month = now.getMonth() + 1;     //月  
        var day = now.getDate();            //日  

        var hh = now.getHours();            //时  
        var mm = now.getMinutes();          //分  
        var ss = now.getSeconds();           //秒  

        var clock = year + "-";

        if (month < 10)
            clock += "0";

        clock += month + "-";

        if (day < 10)
            clock += "0";

        //            clock += day + " ";
        clock += day;

        if (hh < 10)
            clock += "0";

        clock += hh + ":";
        if (mm < 10) clock += '0';
        clock += mm + ":";

        if (ss < 10) clock += '0';
        clock += ss;
        return (clock);
    }

    //添加明细
    this.AddRow1 = function () {
        var rwlx_master = dw_master.GetItemNumber( row, "rwlx_master" );
        rwlx_master = rwlx_master + 1;
        var ywbh = requestor.GetParm("ywbh");
        var userid = requestor.GetParm("userid");
        var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
        var jzxh = dw_rwxz.GetItemString(1, "jzxh");

        var row = dw_master.InsertRow(0);
        dw_master.SetItem(row, "rwlx", rwlx_master.toString());
        dw_master.SetItem(row, "ywbh", ywbh);
        dw_master.SetItem(row, "hddz_cxh", hddz_cxh);
        dw_master.SetItem(row, "jzxh", jzxh);
        dw_master.SetItem(row, "zbr", userid);
        var rwbh = ywbh + hddz_cxh.toString() + rwlx_master.toString();

        dw_master.SetItem(row, "rwbh", rwbh);

        //                var date = new Date();
        var dzwlbh = rwbh + CurentTime();
        dw_master.SetItem(row, "dzwlbh", dzwlbh);
        dw_master.ScrollToRow(row);
    }

    //#region 添加明细
    this.AddRow = function () {
        if (lastdw.GetName() == "dw_master" || lastdw.GetName() == null || lastdw.GetName() == "") {
            var jzxh = dw_rwxz.GetItemString(1, "jzxh");
            if (jzxh == "" || jzxh == null) {
                alert("集装箱号不能为空！");
                return;
            }
            var rwlx_master = dw_master.GetItemNumber(row, "rwlx_master");
            var ywbh = requestor.GetParm("ywbh");
            var userid = requestor.GetParm("userid");
            var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));




            if (rwlx_master == "" || rwlx_master == null) {
                rwlx_master = 1;
            } else {
                rwlx_master = rwlx_master + 1;
                var count = rwlx_master - 1;
                dw_jzxxx.AcceptText();
                for (var i = 1; i <= dw_jzxxx.RowCount(); i++) {
                    dw_jzxxx.AcceptText();
                    var rwmc = dw_jzxxx.GetItemString(i, "rwmc");
                    if (rwmc == "堆场") {
                        alert("任务'" + count + "'已经有堆场了，不能下任务" + rwlx_master);
                        return;
                    }
                }
            }
            var row = dw_master.InsertRow(0);
            dw_master.SetItem(row, "rwlx", rwlx_master.toString());
            dw_master.SetItem(row, "ywbh", ywbh);
            dw_master.SetItem(row, "hddz_cxh", hddz_cxh);
            dw_master.SetItem(row, "jzxh", jzxh);
            dw_master.SetItem(row, "zbr", userid);
            var rwbh = ywbh + hddz_cxh.toString() + rwlx_master.toString();

            dw_master.SetItem(row, "rwbh", rwbh);

            //                var date = new Date();
            var dzwlbh = rwbh + CurentTime();
            dw_master.SetItem(row, "dzwlbh", dzwlbh);
            dw_master.ScrollToRow(row);
            dw_master.SetFocus();
        }
        if (lastdw.GetName() == "dw_jzxxx") {
            var row_master = dw_master.GetRow();
            if (row_master < 1) {
                requestor.MessageBox("提示", "请选择任务！");
            }
            else {
                var ywbh = dw_master.GetItemString(row_master, "ywbh");
                var hddz_cxh = dw_master.GetItemNumber(row_master, "hddz_cxh");
                var rwlx = dw_master.GetItemString(row_master, "rwlx");
                var rwbh = dw_master.GetItemString(row_master, "rwbh");
                var dzwlbh = dw_master.GetItemString(row_master, "dzwlbh");
                var row = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItem(row, "ywbh", ywbh);
                dw_jzxxx.SetItem(row, "hddz_cxh", hddz_cxh);
                dw_jzxxx.SetItem(row, "rwlx", rwlx);
                dw_jzxxx.SetItem(row, "rwbh", rwbh);
                dw_jzxxx.SetItem(row, "dzwlbh", dzwlbh);
                dw_jzxxx.ScrollToRow(row);
                dw_jzxxx.SetFocus();
            }
        }
    }
    //#endregion


    //#region 删除商品
    this.DeleteRow = function () {
        if (lastdw.GetName() == "dw_master") {
         
            var row = dw_master.GetRow();
            if (row <= 0)
                return;

            var status = dw_master.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                    for (row1 = dw_jzxxx.RowCount(); row1 > 0; row1--) {
                        dw_jzxxx.DeleteRow(row1);
                    }
                    dw_master.DeleteRow(row);
                }
            } else {
                for (row1 = dw_jzxxx.RowCount(); row1 > 0; row1--) {
                    dw_jzxxx.DeleteRow(row1);
                }
                dw_master.DeleteRow(row);
            }
        }

        if (lastdw.GetName() == "dw_jzxxx") {
            var row = dw_jzxxx.GetRow();
            if (row <= 0)
                return;
            var status = dw_jzxxx.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 1) {
                    dw_jzxxx.DeleteRow(row);
                }
            } else {
                dw_jzxxx.DeleteRow(row);
            }

        };

    }


    //#region 复制商品
    this.RowCopy = function () {
        if (lastdw.GetName() == 'dw_master') {
            var row = dw_master.GetRow();
            if (row <= 0)
                return;
            dw_master.RowsCopy(row, row, DWBUFFER.Primary, dw_master, row + 1, DWBUFFER.Primary)
            dw_master.ScrollToRow(row + 1);
        }


        if (lastdw.GetName() == 'dw_jzxxx') {
            var row = dw_jzxxx.GetRow();
            if (row <= 0)
                return;
            dw_jzxxx.RowsCopy(row, row, DWBUFFER.Primary, dw_jzxxx, row + 1, DWBUFFER.Primary)
            dw_jzxxx.ScrollToRow(row + 1);
        }


    }
    //#endregion

    this.dw_rwxz_Clicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "yw_hddz_xhgqjc_t") {
            var sjzq_ccfs = dw_rwxz.GetItemString(Row, "sjzq_ccfs");
            if (sjzq_ccfs == "疏运") {

                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                var khlx = "hymt";

                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_rwxz);
                iw_Wldw_Select.SetData("hddz_sygq");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        }
    }




     //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_Master_DoubleClicked = function ( xPos, yPos, Row, dwoName )
    {

        if ( dwoName == "rwkssj" )
        {
            var cph = dw_master.GetItemString( Row, "cph" );
             
            if ( cph != null && cph != "" )
            {
                var date = new Date();
                dw_master.SetItem( Row, "rwkssj", date.getVarDate() );
            }

        }
    }

    function uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    }
    function GMTToStr(time) {
        var date = new Date(time)
        var Str = date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate() + ' ' +
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds()
        return Str
    }
    //#region 存盘
    this.save = function ()
    {

        if ( editMode == "show" )
            return;

        dw_master.SetFocus();
        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_rwxz.AcceptText();
        dw_wldz.AcceptText();
        dw_lsjl.AcceptText();
        dw_log.AcceptText();

        if ( ( dw_master.ModifiedCount() + dw_master.DeletedCount() + dw_wldz.ModifiedCount() + dw_wldz.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_log.ModifiedCount() + dw_log.DeletedCount() + dw_rwxz.ModifiedCount() ) <= 0 )
        {
            alert( "没有数据需要保存!" );
            return;
        }

        var jzxh = dw_rwxz.GetItemString( 1, "jzxh" );
        if ( jzxh == "" || jzxh == null )
        {
            alert( "集装箱号不能为空！" );
            return;
        }




        var sjsfyz = "Y";

        for ( var i = 1; i <= dw_master.RowCount(); i++ )
        {


            var sfybd = dw_master.GetItemString( i, "sfybd" );
            var cph = dw_master.GetItemString( i, "cph" );
            var cph_old = dw_master.GetItemString( i, "cph_old" );
            var rwbh = dw_master.GetItemString( i, "rwbh" );
            var rwkssj = dw_master.GetItemDate( i, "rwkssj" );
            var rwjssj = dw_master.GetItemDate( i, "rwjssj" );
            //            if ( cph != "" && cph !== null && ( GMTToStr( rwkssj ) == "1900-1-1 0:0:0" || rwkssj == null ) )
            //            {

            //                alert( "请检查第" + i.toString() + "行的任务没有输入任务开始时间，请确认任务开始时间!" );
            //                return;
            //            }

            if ( GMTToStr( rwjssj ) == "1900-1-1 0:0:0" || rwjssj == null || rwkssj > rwjssj )
            {


            } else
            {
                alert( "请检查第" + i.toString() + "行的任务结束时间异常!" );
                return;
            }

            //如果车牌号发生变化，则调整任务编号编码
            if ( cph != cph_old && cph_old != "" && cph_old != null )
            {
                var dzwlbh = rwbh + CurentTime();
                dw_master.SetItem( i, "dzwlbh", dzwlbh );
            }

            dw_jzxxx.SetFilter( "rwbh = '" + dw_master.GetItemString( i, "rwbh" ) + "'" );
            dw_jzxxx.Filter();



            var rwkssj = dw_master.GetItemDate( i, "rwkssj" );
            var count = dw_jzxxx.RowCount();
            var date = new Date();
            var dzwlkzsj = GMTToStr1( rwkssj );
            var userid = requestor.GetParm( "userid" );

            if ( dw_jzxxx.RowCount() > 0 )
            {
                var ii_wlxh = 0;
                for ( var ii = 1; ii <= dw_jzxxx.RowCount(); ii++ )
                {

                    var jrdzwlsj = dw_jzxxx.GetItemDate( ii, "jrdzwlsj" );
                    var jdzwlsj_lrsj = dw_jzxxx.GetItemDate( ii, "jdzwlsj_lrsj" );
                    var rwmc = dw_jzxxx.GetItemDate( ii, "rwmc" );
                    if ( GMTToStr( jrdzwlsj ) != "1900-1-1 0:0:0" && jrdzwlsj != null )
                    {

                        if ( GMTToStr( rwkssj ) != "1900-1-1 0:0:0" && rwkssj != null )
                        {

                            if ( rwkssj - jrdzwlsj > 259200000 )
                            {

                                alert( "进电子围栏时间不能小于任务时间3天！" );
                            }
                        }

                    }
                    var bybd = dw_jzxxx.GetItemString( ii, "bybd" );

                    if ( bybd == "Y" )
                    {

                        var wlxh_null = null;
                        dw_jzxxx.SetItem( ii, "wlxh", wlxh_null );
                    } else
                    {
                        ii_wlxh = ii_wlxh + 1;
                        dw_jzxxx.SetItem( ii, "wlxh", ii_wlxh );
                    }



                    if ( dzwlkzsj > '2018110100000' )
                    {
                        var jd = dw_jzxxx.GetItemString( ii, "jd" );
                        var points = dw_jzxxx.GetItemString( ii, "points" );
                        var rwmc = dw_jzxxx.GetItemString( ii, "rwmc" );
                        if ( ( jd == "" || jd == null ) && ( points == "" || points == null ) && rwmc != "堆场" )
                        {
                            alert( "有电子围栏为空不能保存!" );
                            return;
                        }
                    }

                    var jrdzwlsj = dw_jzxxx.GetItemDate( ii, "jrdzwlsj" );
                    var jdzwlsj_lrsj = dw_jzxxx.GetItemDate( ii, "jdzwlsj_lrsj" );
                    if ( GMTToStr( jrdzwlsj ) != '1900-1-1 0:0:0' && GMTToStr( jdzwlsj_lrsj ) == '1900-1-1 0:0:0' )
                    {
                        var rq = new Date()
                        dw_jzxxx.SetItem( ii, "jdzwlsj_lrsj", rq.getVarDate() );
                        dw_jzxxx.SetItem( ii, "jdzwlsj_czry", userid );
                    }
                    var cdzwlsj = dw_jzxxx.GetItemDate( ii, "cdzwlsj" );
                    var cdzwlsj_lrsj = dw_jzxxx.GetItemDate( ii, "cdzwlsj_lrsj" );
                    if ( GMTToStr( cdzwlsj ) != '1900-1-1 0:0:0' && GMTToStr( cdzwlsj_lrsj ) == '1900-1-1 0:0:0' )
                    {
                        var rq = new Date()
                        dw_jzxxx.SetItem( ii, "cdzwlsj_lrsj", rq.getVarDate() );
                        dw_jzxxx.SetItem( ii, "cdzwlsj_czry", userid );
                    }

                }
            }
            //选择车辆的时候已经进行判断是否有北斗
            //            var logid = requestor.GetParm("userid");
            //            var cph = dw_master.GetItemString(i, "cph");
            //            if (cph.length > 0) {
            //                $.getJSON("IFView/MapHandler.ashx", { action: "PdcphVerifyLicensePlate", cph: cph, logid: logid, r: Math.random() }, function (res) {
            //                    if (res.result) {
            //                        dw_master.SetItem(i, "sfybd", "Y");
            //                        var num = QsWebSoft.PubMethod.UpdateCph(cph, "Y").value;
            //                    } else {
            //                        dw_master.SetItem(i, "sfybd", "N");
            //                        var num = QsWebSoft.PubMethod.UpdateCph(cph, "N").value;
            //                    }
            //                })

            //            };

            //在选择车辆的时候，先把是否有北斗设置未O，然后看结果是否返回T或则F
            if ( ( sfybd == "O" || sfybd == null ) && cph.length > 0 )
            {
                alert( "第" + i.toString() + "行的任务对应车辆是否有北斗尚未识别完成，请等3秒再保存，如果还不行，请重新选择一下车辆！" );
                return;
            };

            //是否有电子围栏后台杨涛哪里判断，程序中不再做判断
            //            if ( sfybd == "N" )
            //            {
            //                var zxcph = dw_master.GetItemString( i, "zxcph" );
            //                var bdyssbh = dw_master.GetItemString( i, "bdyssbh" );
            //                var bdsbh = dw_master.GetItemString( i, "bdsbh" );
            //                if ( cph != zxcph && bdyssbh.length > 0 )
            //                {
            //                    var num = QsWebSoft.PubMethod.BdsbhCph( bdyssbh, cph, "", rwbh ).value;
            //                    var logid = requestor.GetParm( "userid" );

            //                }
            //            }


            //            if ( dw_master.GetItemStatus( i, "cph", DWBUFFER.Primary ) == 1 )
            //            {
            //                var cph = dw_master.GetItemString( i, "cph" );
            //                var rwbh = dw_master.GetItemString( i, "rwbh" );
            //                $.ajax( {
            //                    async: false,
            //                    url: "IFView/MapHandler.ashx",
            //                    data: { action: "Szcljkks", cph: cph, logid: logid, r: Math.random() },
            //                    success: function ( res )
            //                    {
            //                        res = $.parseJSON( res );
            //                        if ( res.result )
            //                        {
            //                            var date = new Date();
            //                            dw_master.SetItem( i, "startdate", date.getVarDate() );
            //                        } else
            //                        {
            //                            alert( "车牌号：" + cph + "设置车辆监控(开始)失败！" );
            //                        }
            //                    }
            //                } );
            //            }
            //        };
            //        var userid = requestor.GetParm( "userid" )
            //        for ( var i = 1; i <= dw_master.RowCount(); i++ )
            //        {
            //            dw_jzxxx.SetFilter( "rwbh = '" + dw_master.GetItemString( i, "rwbh" ) + "'" );
            //            dw_jzxxx.Filter();
            //            var rwkssj = dw_master.GetItemDate( i, "rwkssj" );
            //            if ( dw_jzxxx.RowCount() > 0 )
            //            {
            //                for ( var ii = 1; ii <= dw_jzxxx.RowCount(); ii++ )
            //                {
            //                    dw_jzxxx.SetItem( ii, "wlxh", ii );
            //                    var dz_xx = dw_jzxxx.GetItemString( ii, "dz_xx" );
            //                    var jd = dw_jzxxx.GetItemString( ii, "jd" );
            //                    var wd = dw_jzxxx.GetItemString( ii, "wd" );
            //                    var fw = dw_jzxxx.GetItemString( ii, "fw" );
            //                    var wllx = dw_jzxxx.GetItemNumber( ii, "wllx" );
            //                    var points = dw_jzxxx.GetItemString( ii, "points" );
            //                    if ( rwkssj == null || dz_xx == null || ( wllx == 0 && ( jd == null || wd == null || fw == null ) ) || ( wllx == 1 && points == null ) )
            //                    {
            //                        sjsfyz = "N";
            //                    }

            //                    var jrdzwlsj = dw_jzxxx.GetItemDate( ii, "jrdzwlsj" );
            //                    var jdzwlsj_lrsj = dw_jzxxx.GetItemDate( ii, "jdzwlsj_lrsj" );
            //                    if ( GMTToStr( jrdzwlsj ) != '1900-1-1 0:0:0' && GMTToStr( jdzwlsj_lrsj ) == '1900-1-1 0:0:0' )
            //                    {
            //                        var rq = new Date()
            //                        dw_jzxxx.SetItem( ii, "jdzwlsj_lrsj", rq.getVarDate() );
            //                        dw_jzxxx.SetItem( ii, "jdzwlsj_czry", userid );
            //                    }
            //                    var cdzwlsj = dw_jzxxx.GetItemDate( ii, "cdzwlsj" );
            //                    var cdzwlsj_lrsj = dw_jzxxx.GetItemDate( ii, "cdzwlsj_lrsj" );
            //                    if ( GMTToStr( cdzwlsj ) != '1900-1-1 0:0:0' && GMTToStr( jdzwlsj_lrsj ) == '1900-1-1 0:0:0' )
            //                    {
            //                        var rq = new Date()
            //                        dw_jzxxx.SetItem( ii, "cdzwlsj_lrsj", rq.getVarDate() );
            //                        dw_jzxxx.SetItem( ii, "cdzwlsj_czry", userid );
            //                    }
            //                }

            //            };

        }


        //        if ( sjsfyz == "N" )
        //        {
        //            if ( requestor.MessageBox( "提示", "有数据的电子围栏精度维度范围或则地址没有信息,是否继续退出?", ICON.Question, BUTTON.YesNo ) == 2 )
        //                return 1;

        //        }


        if ( xgnr.length > 1 )
        {
            var li_insertrow = dw_lsjl.InsertRow( 0 );
            var zbr = requestor.GetParm( "userid" );
            var ywbh = dw_rwxz.GetItemString( 1, "ywbh" );
            var hddz_cxh = dw_rwxz.GetItemNumber( 1, "cxh" );
            dw_lsjl.SetItem( li_insertrow, "ywbh", ywbh );
            dw_lsjl.SetItem( li_insertrow, "hddz_cxh", hddz_cxh );
            dw_lsjl.SetItem( li_insertrow, "zbr", zbr );
            dw_lsjl.SetItem( li_insertrow, "xgnr", xgnr );
        }


        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_lsjl.AcceptText();

        var ywbhsql = "";
        var cxhsql = 0;
        if ( dw_master.RowCount() > 0 )
        {
            var ywbhsql = dw_master.GetItemString( 1, "ywbh" );
            var cxhsql = dw_master.GetItemNumber( 1, "hddz_cxh" );
        }
        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_rwxz_data = dw_rwxz.GetChanges();
        var dw_wldz_data = dw_wldz.GetChanges();
        var dw_lsjl_data = dw_lsjl.GetChanges();

        if ( dw_master_data == "" && dw_jzxxx_data == "" && dw_rwxz_data == "" && dw_wldz_data == "" && dw_lsjl_data == "" )
            return;



        //数据同步生鲜港

        var ywbh = dw_rwxz.GetItemString( 1, "ywbh" );
        var cxh = dw_rwxz.GetItemNumber( 1, "cxh" );


        var row = dw_log.InsertRow( 0 );

        var userid = requestor.GetParm( "userid" );
        var dd = new Date();

        dw_log.SetItem( row, "eid", "gzzz" + userid + uuid( 8, 16 ) + GMTToStr1( dd.getVarDate() ) ) + "01";
        dw_log.SetItem( row, "tablename", "yw_hddz_jzxxx" );
        str1 = "gq_sj,gq_cp,gq_sjlxfs,gq_rwbh,gq_c_rwbh,hgcyd_sj,hgcyd_cp,hgcyd_sjlxfs,hgcyd_rwbh,hgcyd_c_rwbh,jyd_sj,jyd_cp,jyd_sjlxfs,jyd_rwbh,jyd_c_rwbh,";
        str1 += "sc_sj,sc_cp,sc_sjlxfs,sc_rwbh,sc_c_rwbh,zjfscwld_sj,zjfscwld_cp,zjfscwld_sjlxfs,zjfscwld_rwbh,zjfscwld_c_rwbh,jschfscwld_sj,jschfscwld_cp,";
        str1 += "jschfscwld_sjlxfs,jschfscwld_rwbh,jschfscwld_c_rwbh,fscwld3_sj,fscwld3_cp,fscwld3_sjlxfs,fscwld3_rwbh,fscwld3_c_rwbh,fscwld4_sj,fscwld4_cp,";
        str1 += "fscwld4_sjlxfs,fscwld4_rwbh,fscwld4_c_rwbh,dc_sj,dc_cp,dc_sjlxfs,dc_rwbh,cgqsj,rscsj,djydsj,tgjysj,cscsj,hdcsj,fscwl_ddsj,fscwl_lksj,fscwl2_ddsj,";
        str1 += "fscwl2_lksj,fscwl3_ddsj,fscwl3_lksj,fscwl4_ddsj,fscwl4_lksj";
        dw_log.SetItem( row, "changecols", str1 );
        dw_log.SetItem( row, "mainid", ywbh );
        dw_log.SetItem( row1, "parameters", cxh.toString() );
        dw_log.ScrollToRow( row );

        var row1 = dw_log.InsertRow( 0 );
        dw_log.SetItem( row1, "eid", "wlrw1" + userid + uuid( 8, 16 ) ) + GMTToStr1( dd.getVarDate() ) + "02";
        dw_log.SetItem( row1, "tablename", "yw_hddz_wlgz" );
        dw_log.SetItem( row1, "mainid", ywbh );
        dw_log.SetItem( row1, "parameters", cxh.toString() );
        dw_log.ScrollToRow( row1 );
        //            }
        //        }

        dw_log.AcceptText()

        var dw_log_data = dw_log.GetChanges();
        if ( dw_log_data == "" )
            return;

        //执行保存的WebService
        webReq.SetFunctionID( requestor.GetFunctionID() );
        webReq.Invoke( "Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_rwxz=" + dw_rwxz_data + "&dw_wldz=" + dw_wldz_data + "&dw_lsjl=" + dw_lsjl_data + "&dw_log=" + dw_log_data + "&operation=" + editMode + "&ywbh=" + ywbhsql + "&cxh=" + cxhsql.toString() );
        if ( webReq.StatusCode() == 200 )
        {
            //服务器成功处理，返回单号
            //            rwbh = webReq.ResponseText();
            //            if ( dw_master.RowCount() > 0 )
            //            {
            //                dw_master.SetItem( 1, "rwbh", rwbh );
            //            }
            //            for ( row = 1; row <= dw_jzxxx.RowCount(); row++ )
            //            {
            //                dw_jzxxx.SetItem( row, "rwbh", rwbh );
            //            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_rwxz.ResetUpdate();
            dw_wldz.ResetUpdate();
            dw_lsjl.ResetUpdate();
            dw_log.ResetUpdate();

            var sjzq_ccfs = dw_rwxz.GetItemString( 1, "sjzq_ccfs" );
            var ywbh1 = dw_master.GetItemString( 1, "ywbh" );

            //            if (sjzq_ccfs == "疏运") {

            //                var yw_hddz_sygq = dw_rwxz.GetItemString(1, "yw_hddz_sygq");
            //                var yw_hddz_sygqpym = dw_rwxz.GetItemString(1, "yw_hddz_sygqpym");
            //                var yw_hddz_sygqbm = dw_rwxz.GetItemString(1, "yw_hddz_sygqbm");
            //                var yw_hddz_sygqjc = dw_rwxz.GetItemString(1, "yw_hddz_sygqjc");
            //                var num = QsWebSoft.PubMethod.shuyunxhgq(ywbh1, yw_hddz_sygq, yw_hddz_sygqpym, yw_hddz_sygqbm, yw_hddz_sygqjc).value;
            //            }
            self.SetEditMode( "open" );
            requestor.MessageBox( "提示", "数据保存成功!" );
            dw_master.Modify( "rwbh.Tabsequence=0" );
            self.Exit();

        }
        else
        {
            requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
            dw_master.SetFocus();
        }
    }
    function GMTToStr1(time) {
        var date = new Date(time)
        var Str = date.getFullYear() + '' +
    (date.getMonth() + 1) + '' +
    date.getDate() + '' +
    date.getHours() + '' +
    date.getMinutes() + '' + date.getSeconds()
        return Str
    }
    //#region dw_Master_RowFocusChanged
    this.dw_Master_RowFocusChanged = function (Row) {
        if (Row > 0) {

            var rwbh = dw_master.GetItemString(Row, "rwbh");
            dw_jzxxx.SetFilter("rwbh = '" + rwbh + "'");
            dw_jzxxx.Filter();
        }
    }
    //#region dw_Master_RowFocusChanged

    //#region dw_jzxxx_ItemChanged
    this.dw_jzxxx_ItemChanged = function (Row, dwoName, data) {

        var rwmc = dw_jzxxx.GetItemString(Row, "rwmc");
        var date = new Date("1900/01/01 00:00");
        if (Row > 0) {


            if (dwoName == "jrdzwlsj") {
                dw_jzxxx.AcceptText();
                var ywy = requestor.GetParm("userid");
                var date = new Date();
                dw_jzxxx.SetItem(Row, "jdzwlsj_lrsj", date.getVarDate());
               dw_jzxxx.SetItem(Row, "jdzwlsj_czry", ywy);

                var row1 = dw_master.GetRow();
                var rwkssj = dw_master.GetItemDate(row1, "rwkssj");
                var jrdzwlsj = dw_jzxxx.GetItemDate(Row, "jrdzwlsj");
                if (rwkssj - jrdzwlsj > 259200000) {
                    alert("进电子围栏时间不能小于任务时间3天！");
                   
                }

            }

            if (dwoName == "cdzwlsj") {
                dw_jzxxx.AcceptText();
                var ywy = requestor.GetParm("userid");
                var date = new Date();
                dw_jzxxx.SetItem(Row, "cdzwlsj_lrsj", date.getVarDate())
                dw_jzxxx.SetItem(Row, "cdzwlsj_czry", ywy)
            }
        }
    }
    //#endregion

    this.dw_dcrw_Clicked = function (xPos, yPos, Row, dwoName) {

        if (dwoName == "dc_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "dc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_dcrw);
            iw_Wldw_Select.SetData("hyrw_dc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }
    }


    //#region dw_Master ItemChanged
    this.dw_Master_ItemChanged = function (Row, dwoName, data) {
        var rwbh = dw_master.GetItemString(1, "rwbh");
        for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
            var rwbh_new = dw_jzxxx.GetItemString(row, "rwbh");
            if (rwbh_new == null || rwbh_new == "") {
                dw_jzxxx.SetItem(row, "rwbh", rwbh);
            }
        };
        if (dwoName == "cph") {
            //            if (data.length > 0) {
            //                var logid = requestor.GetParm("userid");
            //                 $.getJSON("IFView/MapHandler.ashx", { action: "VerifyLicensePlate", cph: data, logid: logid, r: Math.random() }, function (res) {
            //                    if (res.result) {
            //                        dw_master.SetItem(Row, "sfybd", "Y");
            //                    } else {
            //                        alert("车牌号：" + data + " 没有北斗信息");
            //                        dw_master.SetItem(Row, "sfybd", "N");
            //                    }
            //                })
            //               
            //            };

//            dw_updatecph.SetItem(row, "dzwlbh", dw_master.GetItemString(Row, "rwbh"));
            xgnr = xgnr + "第" + Row.toString() + "行的车牌号修改为：" + data + ";";
        }
        if (dwoName == "bdsbh") {
            xgnr = xgnr + "第" + Row.toString() + "行的北斗设备号修改为：" + data + ";";
        }
        if (dwoName == "cjmc") {
            xgnr = xgnr + "第" + Row.toString() + "行的车架名称修改为：" + data + ";";
        }
        if (dwoName == "sjmc") {
            xgnr = xgnr + "第" + Row.toString() + "行的司机名称修改为：" + data + ";";
        }
        if (dwoName == "sjh") {
            xgnr = xgnr + "第" + Row.toString() + "行的手机号修改为：" + data + ";";
        }
        if (dwoName == "sfzh") {
            xgnr = xgnr + "第" + Row.toString() + "行的身份证号修改为：" + data + ";";
        }
        if (dwoName == "rwkssj") {
            xgnr = xgnr + "第" + Row.toString() + "行的任务时间修改为：" + data + ";";
        }
        if (dwoName == "jsfs") {
            xgnr = xgnr + "第" + Row.toString() + "行的结算方式修改为：" + data + ";";
        }
        if (dwoName == "hxssmt") {
            xgnr = xgnr + "第" + Row.toString() + "行的还箱所属码头修改为：" + data + ";";
        }
        if (dwoName == "beizhu") {
            xgnr = xgnr + "第" + Row.toString() + "行的备注修改为：" + data + ";";
        }
        if (dwoName == "sfsc") {
            xgnr = xgnr + "第" + Row.toString() + "行的顺车改为：" + data + ";";
        }
    };
    //#endregion




    //#region dw_Master Clicked
    this.dw_Master_ButtonClicked = function ( Row, dwoName )
    {
        if ( dwoName == "b_cph" )
        {
            if ( iw_Sj_Select == null )
                iw_Sj_Select = new W_Sj_Select();
            sjlx = "hy";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Sj_Select.SetDataWindow( dw_master );
            iw_Sj_Select.SetRow( Row );
            iw_Sj_Select.SetData( "wlgz_sj" );

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx + "&Cdbm= '" + "'", iw_Sj_Select );


            xgnr = xgnr + "第" + Row.toString() + "行的司机选择了 ;";
            dw_master.SetFocus();


        }




        if ( dwoName == "b_sjmc" )
        {
            if ( iw_Sjmc_Select == null )
                iw_Sjmc_Select = new W_Sjmc_Select();
            sjlx = "hy";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Sjmc_Select.SetDataWindow( dw_master );
            iw_Sjmc_Select.SetRow( Row );
            iw_Sjmc_Select.SetData( "wlgz_sjmc" );
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Sjmc_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Sjmc_Select );
            xgnr = xgnr + "第" + Row.toString() + "行的司机选择了 ;";

            dw_master.SetFocus();

        }

        if ( dwoName == "b_cdmc" )
        {
            if ( iw_Wldw_Select == null )
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cd";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select.SetDataWindow( dw_master );
            iw_Wldw_Select.SetData( "wlgz_cd" );
            iw_Wldw_Select.SetRow( Row );
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select );
            dw_master.SetFocus();
            xgnr = xgnr + "第" + Row.toString() + "行的车队选择了 ;";
        }

        if ( dwoName == "b_cjmc" )
        {
            if ( iw_Cj_Select == null )
                iw_Cj_Select = new W_Cj_Select();
            sjlx = "hy";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Cj_Select.SetDataWindow( dw_master );
            iw_Cj_Select.SetRow( Row );
            iw_Cj_Select.SetData( "wlgz_cj" );
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Cj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Cj_Select );
            dw_master.SetFocus();
            xgnr = xgnr + "第" + Row.toString() + "行的车队选择了 ;";
        }

        if ( dwoName == "b_xzwldz" )
        {
            var sjzq_ccfs = dw_rwxz.GetItemString( 1, "sjzq_ccfs" );
            var xhgqjc = dw_rwxz.GetItemString( 1, "sggqjc" );
            if ( sjzq_ccfs == "疏运" && xhgqjc == "" )
            {
                alert( "请填写疏运港区！！" );
                return;
            }

            if ( iw_Hy_Wlgz_Rwdz == null )
                iw_Hy_Wlgz_Rwdz = new W_Hy_Wlgz_Rwdz();
            sjlx = "hy";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );



            iw_Hy_Wlgz_Rwdz.SetDwoRwxz( dw_rwxz );
            iw_Hy_Wlgz_Rwdz.SetDwoWldz( dw_wldz );
            iw_Hy_Wlgz_Rwdz.SetDwoJzxxx( dw_jzxxx );
            iw_Hy_Wlgz_Rwdz.SetDwoMaster( dw_master );
            iw_Hy_Wlgz_Rwdz.SetRow( Row );
            dw_jzxxx.AcceptText();
            dw_jzxxx.SetFilter( "" );
            dw_jzxxx.Filter();
            var rwxh = 0
            if ( dw_jzxxx.RowCount() > 0 )
            {
                rwxh = dw_jzxxx.GetItemNumber( dw_jzxxx.RowCount(), "rwxh" );

            }          
            iw_Hy_Wlgz_Rwdz.SetRwxh( rwxh );
            if ( Row > 0 )
            {
                var rwbh = dw_master.GetItemString( Row, "rwbh" );
                dw_jzxxx.SetFilter( "rwbh = '" + rwbh + "'" );
                dw_jzxxx.Filter();
            }
            iw_Hy_Wlgz_Rwdz.SetRow( Row );

            //            var rwmc = dw_jzxxx.GetItemString(1, "rwmc");
            //            alert(rwmc);

            //            iw_Hy_Wlgz_Rwdz.SetData("wlgz_cj");
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Hy_Wlgz_Rwdz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Hy_Wlgz_Rwdz );

            xgnr = xgnr + "第" + Row.toString() + "行的物流地址选择了 ;";
            dw_master.SetFocus();
            dw_jzxxx.AcceptText();

            //            var sjzq_ccfs = dw_rwxz.GetItemString(1, "sjzq_ccfs");
            //            var rwmc = dw_jzxxx.GetItemString(1, "rwmc");
            //            if (sjzq_ccfs == "疏运") {
            //                dw_jzxxx.SetItem(1, "rwmc", "疏运");
            //                var sygqjc = dw_rwxz.GetItemString(1, "yw_hddz_sygqjc");
            //                dw_jzxxx.SetItem(1, "dz_xx", sygqjc);
            //            }

        }

        if ( dwoName == "b_bdcx" )
        {
            var cph = dw_master.GetItemString( Row, "cph" );

            if ( cph.length > 0 )
            {
                var logid = requestor.GetParm( "userid" );


                //                $.getJSON( "IFView/MapHandler.ashx", { action: "PdcphVerifyLicensePlate", cph: cph, logid: logid, r: Math.random() }, function ( res )
                //                {
                $.getJSON( "IFView/MapHandler.ashx", { action: "singleVerifyLicensePlate", cph: cph }, function ( res )
                {
                    if ( res.result )
                    {
                        dw_master.SetItem( Row, "sfybd", "Y" );
                    } else
                    {
                        alert( "车牌号：" + cph + " 没有北斗信息" );
                        dw_master.SetItem( Row, "sfybd", "N" );
                    }
                } )

            };

        }


        if ( dwoName == "b_bdsbh" )
        {
            if ( iw_Bdsbh_Select == null )
                iw_Bdsbh_Select = new W_Bdsbh_Select();
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            var hyky = "hy";
            iw_Bdsbh_Select.SetDataWindow( dw_master );
            iw_Bdsbh_Select.SetRow( Row );
            iw_Bdsbh_Select.SetData( "wlgz_bdsbh" );

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Bdsbh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&hyky=" + hyky, iw_Bdsbh_Select );
            dw_master.SetFocus();


        }



    }
    //#endregion



    //#region 选择
    this.dw_rwxz_ItemChanged = function (row, dwoName, data) {
        var row_insert = 0;
        var row_find = 0;
        var ywbh = requestor.GetParm("ywbh")
        var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
        if (dwoName == "gq_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '港区'", 1, dw_jzxxx.RowCount());
            var gq_rwbh = dw_rwxz.GetItemString(1, "gq_rwbh");
            var gq_c_rwbh = dw_rwxz.GetItemString(1, "gq_c_rwbh");
            var gq_jd = dw_rwxz.GetItemString(1, "gq_jd");
            var gq_wd = dw_rwxz.GetItemString(1, "gq_wd");
            var gq_fw = dw_rwxz.GetItemNumber(1, "gq_fw");
            var gqdz = dw_rwxz.GetItemString(1, "gqdz");
            if (gqdz == "" || gqdz == null) {
                gqdz = "港区";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 1);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "港区");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", gq_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", gq_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", gq_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", gqdz);
                }
                dw_rwxz.SetItem(1, "gq_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "gq_rwbh", "N");
                    if (gq_rwbh == gq_c_rwbh || gq_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "gq_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "gq_c_sfxz", "N");
                    };
                };
            };
        };


        if (dwoName == "gq_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '港区'", 1, dw_jzxxx.RowCount());
            var gq_sfxz = dw_rwxz.GetItemString(1, "gq_sfxz");
            var gq_jd = dw_rwxz.GetItemString(1, "gq_jd");
            var gq_wd = dw_rwxz.GetItemString(1, "gq_wd");
            var gq_fw = dw_rwxz.GetItemNumber(1, "gq_fw");
            var gqdz = dw_rwxz.GetItemString(1, "gqdz");
            if (gqdz == "" || gqdz == null) {
                gqdz = "港区";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 1);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "港区");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", gq_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", gq_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", gq_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", gqdz);
                }
                if (gq_sfxz == "N" || gq_sfxz == "" || gq_sfxz == null) {
                    dw_rwxz.SetItem(1, "gq_rwbh", "Y");
                    dw_rwxz.SetItem(1, "gq_sfxz", "Y");
                }
                dw_rwxz.SetItem(1, "gq_c_rwbh", "Y");

            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0 && gq_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find)
                    };
                    dw_rwxz.SetItem(1, "gq_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "hgcyd_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '海关查验点'", 1, dw_jzxxx.RowCount());
            var hgcyd_rwbh = dw_rwxz.GetItemString(1, "hgcyd_rwbh");
            var hgcyd_c_rwbh = dw_rwxz.GetItemString(1, "hgcyd_c_rwbh");
            var hgcyd_jd = dw_rwxz.GetItemString(1, "hgcyd_jd");
            var hgcyd_wd = dw_rwxz.GetItemString(1, "hgcyd_wd");
            var hgcyd_fw = dw_rwxz.GetItemNumber(1, "hgcyd_fw");
            var hgcyddz = dw_rwxz.GetItemString(1, "hgcyddz");
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 2);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    //                dw_jzxxx.SetItem(row_insert, "dz", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "jd", hgcyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", hgcyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", hgcyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", hgcyddz);
                }
                dw_rwxz.SetItem(1, "hgcyd_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "hgcyd_rwbh", "N");
                    if (hgcyd_rwbh == hgcyd_c_rwbh || hgcyd_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "hgcyd_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "hgcyd_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "hgcyd_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '海关查验点'", 1, dw_jzxxx.RowCount());
            var hgcyd_sfxz = dw_rwxz.GetItemString(1, "hgcyd_sfxz")
            var hgcyd_jd = dw_rwxz.GetItemString(1, "hgcyd_jd");
            var hgcyd_wd = dw_rwxz.GetItemString(1, "hgcyd_wd");
            var hgcyd_fw = dw_rwxz.GetItemNumber(1, "hgcyd_fw");
            var hgcyddz = dw_rwxz.GetItemString(1, "hgcyddz");
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 2);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    //                dw_jzxxx.SetItem(row_insert, "dz", "海关查验点");
                    dw_jzxxx.SetItem(row_insert, "jd", hgcyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", hgcyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", hgcyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", hgcyddz);
                };
                if (hgcyd_sfxz == null || hgcyd_sfxz == "" || hgcyd_sfxz == "N") {
                    dw_rwxz.SetItem(1, "hgcyd_rwbh", "Y");
                    dw_rwxz.SetItem(1, "hgcyd_sfxz", "Y");
                };
                dw_rwxz.SetItem(1, "hgcyd_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {

                    if (row_find > 0 && hgcyd_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "hgcyd_c_rwbh", "N");
                };
            };
        };



        if (dwoName == "jyd_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '检疫点'", 1, dw_jzxxx.RowCount());
            var jyd_rwbh = dw_rwxz.GetItemString(1, "jyd_rwbh");
            var jyd_c_rwbh = dw_rwxz.GetItemString(1, "jyd_c_rwbh");
            var jyd_jd = dw_rwxz.GetItemString(1, "jyd_jd");
            var jyd_wd = dw_rwxz.GetItemString(1, "jyd_wd");
            var jyd_fw = dw_rwxz.GetItemNumber(1, "jyd_fw");
            var jyddz = dw_rwxz.GetItemString(1, "jyddz");
            if (jyddz == "" || jyddz == null) {
                jyddz = "检疫点";
            };

            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 3);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "检疫点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jyddz);
                }
                dw_rwxz.SetItem(1, "jyd_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "jyd_rwbh", "N");
                    if (jyd_rwbh == jyd_c_rwbh || jyd_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "jyd_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "jyd_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "jyd_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '检疫点'", 1, dw_jzxxx.RowCount());
            var jyd_sfxz = dw_rwxz.GetItemString(1, "jyd_sfxz");
            var jyd_jd = dw_rwxz.GetItemString(1, "jyd_jd");
            var jyd_wd = dw_rwxz.GetItemString(1, "jyd_wd");
            var jyd_fw = dw_rwxz.GetItemNumber(1, "jyd_fw");
            var jyddz = dw_rwxz.GetItemString(1, "jyddz");
            if (jyddz == "" || jyddz == null) {
                jyddz = "检疫点";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 3);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "检疫点");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jyd_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jyd_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jyd_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jyddz);
                }

                //            if (jyd_sfxz == null || jyd_sfxz == "" || jyd_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jyd_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jyd_sfxz", "Y");
                //            }
                dw_rwxz.SetItem(1, "jyd_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var jyd_sfxz = dw_rwxz.GetItemString(1, "jyd_sfxz");
                    if (row_find > 0 && jyd_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "jyd_c_rwbh", "N");
                };
            };
        };


        if (dwoName == "zjfscwld_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地1'", 1, dw_jzxxx.RowCount());
            var zjfscwld_rwbh = dw_rwxz.GetItemString(1, "zjfscwld_rwbh");
            var zjfscwld_c_rwbh = dw_rwxz.GetItemString(1, "zjfscwld_c_rwbh");
            var zjfscwld_jd = dw_rwxz.GetItemString(1, "zjfscwld_jd");
            var zjfscwld_wd = dw_rwxz.GetItemString(1, "zjfscwld_wd");
            var zjfscwld_fw = dw_rwxz.GetItemNumber(1, "zjfscwld_fw");
            var zjfscwld_zyxx = dw_rwxz.GetItemString(1, "zjfscwld_zyxx");
            if (zjfscwld_zyxx == "" || zjfscwld_zyxx == null) {
                zjfscwld_zyxx = "非市场物流地1";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 4);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地1");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", zjfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", zjfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", zjfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", zjfscwld_zyxx);
                };
                dw_rwxz.SetItem(1, "zjfscwld_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "zjfscwld_rwbh", "N");
                    if (zjfscwld_rwbh == zjfscwld_c_rwbh || zjfscwld_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "zjfscwld_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "zjfscwld_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "zjfscwld_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地1'", 1, dw_jzxxx.RowCount());
            var zjfscwld_sfxz = dw_rwxz.GetItemString(1, "zjfscwld_sfxz");
            var zjfscwld_jd = dw_rwxz.GetItemString(1, "zjfscwld_jd");
            var zjfscwld_wd = dw_rwxz.GetItemString(1, "zjfscwld_wd");
            var zjfscwld_fw = dw_rwxz.GetItemNumber(1, "zjfscwld_fw");
            var zjfscwld_zyxx = dw_rwxz.GetItemString(1, "zjfscwld_zyxx");
            if (zjfscwld_zyxx == "" || zjfscwld_zyxx == null) {
                zjfscwld_zyxx = "非市场物流地1";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 4);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地1");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh); 3330680
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", zjfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", zjfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", zjfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", zjfscwld_zyxx);
                };
                var zjfscwld_jv = dw_rwxz.GetItemNumber(1, "zjfscwld_jv");
                if (zjfscwld_jv == 1 && (zjfscwld_sfxz == null || zjfscwld_sfxz == "" || zjfscwld_sfxz == "N")) {
                    dw_rwxz.SetItem(1, "zjfscwld_rwbh", "Y");
                    dw_rwxz.SetItem(1, "zjfscwld_sfxz", "Y");
                }
                dw_rwxz.SetItem(1, "zjfscwld_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0 && zjfscwld_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "zjfscwld_c_rwbh", "N");
                };
            };
        };



        if (dwoName == "sc_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '市场'", 1, dw_jzxxx.RowCount());
            var sc_rwbh = dw_rwxz.GetItemString(1, "sc_rwbh");
            var sc_c_rwbh = dw_rwxz.GetItemString(1, "sc_c_rwbh");
            var sc_jd = dw_rwxz.GetItemString(1, "sc_jd");
            var sc_wd = dw_rwxz.GetItemString(1, "sc_wd");
            var sc_fw = dw_rwxz.GetItemNumber(1, "sc_fw");
            var scdz = dw_rwxz.GetItemString(1, "scdz");
            if (scdz == "" || scdz == null) {
                scdz = "市场";
            };

            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 5);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "市场");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", sc_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", sc_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", sc_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", scdz);
                }
                dw_rwxz.SetItem(1, "sc_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "sc_rwbh", "N");
                    if (sc_rwbh == sc_c_rwbh || sc_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "sc_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "sc_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "sc_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '市场'", 1, dw_jzxxx.RowCount());
            var sc_sfxz = dw_rwxz.GetItemString(1, "sc_sfxz");
            var sc_jd = dw_rwxz.GetItemString(1, "sc_jd");
            var sc_wd = dw_rwxz.GetItemString(1, "sc_wd");
            var sc_fw = dw_rwxz.GetItemNumber(1, "sc_fw");
            var scdz = dw_rwxz.GetItemString(1, "scdz");
            if (scdz == "" || scdz == null) {
                scdz = "市场";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 5);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "市场");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", sc_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", sc_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", sc_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", scdz);

                };
                //            if (sc_sfxz == null || sc_sfxz == "" || sc_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "sc_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "sc_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "sc_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0 && sc_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "sc_c_rwbh", "N");
                };
            };
        };


        if (dwoName == "jschfscwld_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地2'", 1, dw_jzxxx.RowCount());
            var jschfscwld_rwbh = dw_rwxz.GetItemString(1, "jschfscwld_rwbh");
            var jschfscwld_c_rwbh = dw_rwxz.GetItemString(1, "jschfscwld_c_rwbh");
            var jschfscwld_jd = dw_rwxz.GetItemString(1, "jschfscwld_jd");
            var jschfscwld_wd = dw_rwxz.GetItemString(1, "jschfscwld_wd");
            var jschfscwld_fw = dw_rwxz.GetItemNumber(1, "jschfscwld_fw");
            var jschfscwld_zyxx = dw_rwxz.GetItemString(1, "jschfscwld_zyxx");
            if (jschfscwld_zyxx == "" || jschfscwld_zyxx == null) {
                jschfscwld_zyxx = "非市场物流地2";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 6);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地2");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jschfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jschfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jschfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jschfscwld_zyxx);
                }
                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "jschfscwld_rwbh", "N");
                    if (jschfscwld_rwbh == jschfscwld_c_rwbh || jschfscwld_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "jschfscwld_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "jschfscwld_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "jschfscwld_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地2'", 1, dw_jzxxx.RowCount());
            var jschfscwld_sfxz = dw_rwxz.GetItemString(1, "jschfscwld_sfxz");
            var jschfscwld_jd = dw_rwxz.GetItemString(1, "jschfscwld_jd");
            var jschfscwld_wd = dw_rwxz.GetItemString(1, "jschfscwld_wd");
            var jschfscwld_fw = dw_rwxz.GetItemNumber(1, "jschfscwld_fw");
            var jschfscwld_zyxx = dw_rwxz.GetItemString(1, "jschfscwld_zyxx");
            if (jschfscwld_zyxx == "" || jschfscwld_zyxx == null) {
                jschfscwld_zyxx = "非市场物流地2";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 6);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地2");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", jschfscwld_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", jschfscwld_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", jschfscwld_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", jschfscwld_zyxx);
                };
                //            if (jschfscwld_sfxz == null || jschfscwld_sfxz == "" || jschfscwld_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jschfscwld_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "jschfscwld_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var jschfscwld_sfxz = dw_rwxz.GetItemString(1, "jschfscwld_sfxz");
                    if (row_find > 0 && jschfscwld_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "jschfscwld_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "fscwld3_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地3'", 1, dw_jzxxx.RowCount());
            var fscwld3_rwbh = dw_rwxz.GetItemString(1, "fscwld3_rwbh");
            var fscwld3_c_rwbh = dw_rwxz.GetItemString(1, "fscwld3_c_rwbh");
            var fscwld3_jd = dw_rwxz.GetItemString(1, "fscwld3_jd");
            var fscwld3_wd = dw_rwxz.GetItemString(1, "fscwld3_wd");
            var fscwld3_fw = dw_rwxz.GetItemNumber(1, "fscwld3_fw");
            var fscwld3_zyxx = dw_rwxz.GetItemString(1, "fscwld3_zyxx");
            if (fscwld3_zyxx == "" || fscwld3_zyxx == null) {
                fscwld3_zyxx = "非市场物流地3";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 7);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地3");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld3_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld3_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld3_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld3_zyxx);
                }
                dw_rwxz.SetItem(1, "fscwld3_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "fscwld3_rwbh", "N");
                    if (fscwld3_rwbh == fscwld3_c_rwbh || fscwld3_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "fscwld3_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "fscwld3_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "fscwld3_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地3'", 1, dw_jzxxx.RowCount());
            var fscwld3_sfxz = dw_rwxz.GetItemString(1, "fscwld3_sfxz");
            var fscwld3_jd = dw_rwxz.GetItemString(1, "fscwld3_jd");
            var fscwld3_wd = dw_rwxz.GetItemString(1, "fscwld3_wd");
            var fscwld3_fw = dw_rwxz.GetItemNumber(1, "fscwld3_fw");
            var fscwld3_zyxx = dw_rwxz.GetItemString(1, "fscwld3_zyxx");
            if (fscwld3_zyxx == "" || fscwld3_zyxx == null) {
                fscwld3_zyxx = "非市场物流地3";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 7);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地3");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld3_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld3_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld3_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld3_zyxx);
                };
                //            if (jschfscwld_sfxz == null || jschfscwld_sfxz == "" || jschfscwld_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jschfscwld_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "fscwld3_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var fscwld3_sfxz = dw_rwxz.GetItemString(1, "fscwld3_sfxz");
                    if (row_find > 0 && fscwld3_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "fscwld3_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "fscwld4_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地4'", 1, dw_jzxxx.RowCount());
            var fscwld4_rwbh = dw_rwxz.GetItemString(1, "fscwld4_rwbh");
            var fscwld4_c_rwbh = dw_rwxz.GetItemString(1, "fscwld4_c_rwbh");
            var fscwld4_jd = dw_rwxz.GetItemString(1, "fscwld4_jd");
            var fscwld4_wd = dw_rwxz.GetItemString(1, "fscwld4_wd");
            var fscwld4_fw = dw_rwxz.GetItemNumber(1, "fscwld4_fw");
            var fscwld4_zyxx = dw_rwxz.GetItemString(1, "fscwld4_zyxx");
            if (fscwld4_zyxx == "" || fscwld4_zyxx == null) {
                fscwld4_zyxx = "非市场物流地4";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 8);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地4");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld4_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld4_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld4_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld4_zyxx);
                }
                dw_rwxz.SetItem(1, "fscwld4_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "fscwld4_rwbh", "N");
                    if (fscwld4_rwbh == fscwld4_c_rwbh || fscwld4_c_rwbh == "Y") {
                        dw_rwxz.SetItem(1, "fscwld4_c_rwbh", "N");
                        dw_rwxz.SetItem(1, "fscwld4_c_sfxz", "N");
                    }
                };
            };
        };

        if (dwoName == "fscwl4_c_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '非市场物流地4'", 1, dw_jzxxx.RowCount());
            var fscwld4_sfxz = dw_rwxz.GetItemString(1, "fscwld4_sfxz");
            var fscwld4_jd = dw_rwxz.GetItemString(1, "fscwld4_jd");
            var fscwld4_wd = dw_rwxz.GetItemString(1, "fscwld4_wd");
            var fscwld4_fw = dw_rwxz.GetItemNumber(1, "fscwld4_fw");
            var fscwld4_zyxx = dw_rwxz.GetItemString(1, "fscwld4_zyxx");
            if (fscwld4_zyxx == "" || fscwld4_zyxx == null) {
                fscwld4_zyxx = "非市场物流地4";
            };
            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 8);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "非市场物流地4");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", fscwld4_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", fscwld4_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", fscwld4_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", fscwld4_zyxx);
                };
                //            if (jschfscwld_sfxz == null || jschfscwld_sfxz == "" || jschfscwld_sfxz == "N") {
                //                dw_rwxz.SetItem(1, "jschfscwld_rwbh", "Y");
                //                dw_rwxz.SetItem(1, "jschfscwld_sfxz", "Y");
                //            };
                dw_rwxz.SetItem(1, "fscwld4_c_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                }
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    var fscwld3_sfxz = dw_rwxz.GetItemString(1, "fscwld3_sfxz");
                    if (row_find > 0 && fscwld4_sfxz != "Y") {
                        dw_jzxxx.DeleteRow(row_find);
                    }
                    dw_rwxz.SetItem(1, "fscwld4_c_rwbh", "N");
                };
            };
        };

        if (dwoName == "dc_sfxz") {
            row_find = dw_jzxxx.Find("rwmc = '堆场'", 1, dw_jzxxx.RowCount());
            var dc_jd = dw_rwxz.GetItemString(1, "dc_jd");
            var dc_wd = dw_rwxz.GetItemString(1, "dc_wd");
            var dc_fw = dw_rwxz.GetItemNumber(1, "dc_fw");
            var dcdz = dw_rwxz.GetItemString(1, "dcdz");
            if (dcdz == "" || dcdz == null) {
                dcdz = "堆场";
            };

            if (data == "Y") {
                if (row_find < 1) {
                    row_insert = dw_jzxxx.InsertRow(0);
                    dw_jzxxx.SetItem(row_insert, "rwxh", 9);
                    dw_jzxxx.SetItem(row_insert, "rwmc", "堆场");
                    dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
                    dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
                    dw_jzxxx.SetItem(row_insert, "jd", dc_jd);
                    dw_jzxxx.SetItem(row_insert, "wd", dc_wd);
                    dw_jzxxx.SetItem(row_insert, "fw", dc_fw);
                    dw_jzxxx.SetItem(row_insert, "dz", dcdz);
                }
                dw_rwxz.SetItem(1, "dc_rwbh", "Y");
            } else {
                var jrdzwlsj = new Date("1900/1/1");
                var ksj = new Date("1900/1/1");
                if (row_find > 0) {
                    jrdzwlsj = new Date(dw_jzxxx.GetItemDate(row_find, "jrdzwlsj"));
                };
                if (jrdzwlsj.getDate() == ksj.getDate() && jrdzwlsj.getYear() == ksj.getYear() && jrdzwlsj.getMonth() == ksj.getMonth()) {
                    if (row_find > 0) {
                        dw_jzxxx.DeleteRow(row_find)
                    }
                    dw_rwxz.SetItem(1, "dc_rwbh", "N");
                };
            }

        };

    }
    //#endregion


    //#region dw_master entertotab
    this.dw_Master_EntertoTab = function (key, keyflags, dwo) {
        var colname = dwo.GetColumnName();
        if (colname == "ycyymc") {
            return 0
        }
        else {
            return 1
        }
    }

    //#region 双击
    this.dw_rwxz_ButtonClicked = function (Row, dwoName) {
        if (dwoName == "b_sjshr1") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr1");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_sjshr2") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr2");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_sjshr3") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr3");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_sjshr4") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("wlgz_sjshr4");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
        if (dwoName == "b_dc") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "dc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_rwxz);
            iw_Wldw_Select.SetData("hy_wlgz_dcmc");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_rwxz.SetFocus();
        }
    }
    //#endregion


    //#region  dw_cmd_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "dz_dq") {
            var dz_sf = dw_jzxxx.GetItemString(Row, "dz_sf");

            dw_jzxxx.GetChild("dz_dq", dwc_dq);
            dwc_dq.SetFilter("");
            dwc_dq.Filter();

            dwc_dq.SetFilter("prv_name = '" + dz_sf + "'");
            dwc_dq.Filter();

        }

        if (dwoName == "dz_lm") {
            var dz_sf = dw_jzxxx.GetItemString(Row, "dz_sf");
            var dz_dq = dw_jzxxx.GetItemString(Row, "dz_dq");
            dw_jzxxx.GetChild("dz_lm", dwc_lm);
            dwc_lm.SetFilter("");
            dwc_lm.Filter();

            dwc_lm.SetFilter("prv_name = '" + dz_sf + "' and area_name = '" + dz_dq + "'");
            dwc_lm.Filter();

        }

    }
    //#endregion



    //#region  dw_cmd_Clicked
    this.dw_jzxxx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        
        if (dwoName == "jrdzwlsj") {
            var date = new Date();
            dw_jzxxx.SetItem(Row, "jrdzwlsj", date.getVarDate());
        }
        if (dwoName == "cdzwlsj") {
            var date = new Date();
            dw_jzxxx.SetItem(Row, "cdzwlsj", date.getVarDate());
        }




        //        if (dwoName == "dz_sf" || dwoName == "dz_dq" || dwoName == "dz_lm") {
        //            if (iw_Sfdqlm_Select == null)
        //                iw_Sfdqlm_Select = new W_Sfdqlm_Select();
        //            var ywy = requestor.GetParm("userid");
        //            var ShareMode = requestor.GetParm("ShareMode");
        //            var Dlwtf = requestor.GetParm("Dlwtf");
        //            var Khbm = "";



        //            iw_Sfdqlm_Select.SetDataWindow(dw_jzxxx);
        //            iw_Sfdqlm_Select.SetData("wlrw_jzxxx");
        //            iw_Sfdqlm_Select.SetRow(Row);

        //            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sfdqlm_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Sfdqlm_Select);
        //            dw_jzxxx.SetFocus();

        //        }

    }
    //#endregion


    //#region 同步生鲜港
    this.Tbsxg = function () {
        //        var ywbh = dw_master.GetItemString(1, "ywbh");

        //        var cxh = dw_master.GetItemNumber(1, "hddz_cxh");
        //        //执行删除的WebService       
        //        webReq.SetFunctionID(requestor.GetFunctionID());

        //        zdmc = "djydsj,tgjysj,hdcsj";

        //        webReq.Invoke("Tbsxg", "ywbh=" + ywbh + "&cxh=" + cxh + "&zdmc=" + zdmc);

        //        if (webReq.StatusCode() == 200) {
        //            webReq.ResponseText();
        //            var num = QsWebSoft.PubMethod.UpdateTbsxgbz(ywbh, "Y").value;
        //        }
        //        else {
        //            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        //        }
    }
    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        requestor.Close();
    }
    //#endregion

    var iw_Hy_Wlgz_Rwdz = null;
    this.b_xzwldz_clicked = function () {

        var sjzq_ccfs = dw_rwxz.GetItemString(1, "sjzq_ccfs");
        var xhgqjc = dw_rwxz.GetItemString(1, "sggqjc");
        if (sjzq_ccfs == "疏运" && xhgqjc == "") {
            alert("请填写疏运港区！！");
            return;
        }

        if (iw_Hy_Wlgz_Rwdz == null)
            iw_Hy_Wlgz_Rwdz = new W_Hy_Wlgz_Rwdz();
        sjlx = "hy";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var Row = dw_master.GetRow();
        iw_Hy_Wlgz_Rwdz.SetDwoRwxz(dw_rwxz);
        iw_Hy_Wlgz_Rwdz.SetDwoWldz(dw_wldz);
        iw_Hy_Wlgz_Rwdz.SetDwoJzxxx(dw_jzxxx);
        iw_Hy_Wlgz_Rwdz.SetDwoMaster(dw_master);
        iw_Hy_Wlgz_Rwdz.SetRow(Row);
        dw_jzxxx.AcceptText();
        dw_jzxxx.SetFilter("");
        dw_jzxxx.Filter();
        var rwxh = 0
        if (dw_jzxxx.RowCount() > 0) {
            rwxh = dw_jzxxx.GetItemNumber(dw_jzxxx.RowCount(), "rwxh");

        }

        iw_Hy_Wlgz_Rwdz.SetRwxh(rwxh);
        if (Row > 0) {
            var rwbh = dw_master.GetItemString(Row, "rwbh");
            dw_jzxxx.SetFilter("rwbh = '" + rwbh + "'");
            dw_jzxxx.Filter();
        }
        iw_Hy_Wlgz_Rwdz.SetRow(Row);
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hy_Wlgz_Rwdz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Hy_Wlgz_Rwdz);

        xgnr = xgnr + "第" + Row.toString() + "行的物流地址选择了 ;";
//        dw_master.SetFocus();
//        dw_jzxxx.AcceptText();

    }
     

}
