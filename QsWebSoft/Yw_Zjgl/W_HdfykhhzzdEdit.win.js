///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HdfykhhzzdEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_khxxzd= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ddlb_hxzt= new DropDownListBox( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_khxxzd == null ) dw_khxxzd= new DataWindow( requestor );
		 dw_khxxzd.Attach( win.Control( "dw_khxxzd") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ddlb_hxzt == null ) ddlb_hxzt= new DropDownListBox( requestor );
		 ddlb_hxzt.Attach( win.Control( "ddlb_hxzt") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ContextMenuStrip2 == null ) ContextMenuStrip2= new ContextMenu( requestor );
		 ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_jzxxx == null ) ds_jzxxx= new DataStore( requestor );
		 ds_jzxxx.Attach( win.Control( "ds_jzxxx") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_jzxxx","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_jzxxx_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_jzxxx_GetFocus); 

		 if(typeof(self.dw_jzxxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","ItemChanged",self.dw_jzxxx_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_jzxxx","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_khxxzd","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_khxxzd_DoubleClicked)=="function") 
			 win.AttachEvent("dw_khxxzd","DoubleClicked",self.dw_khxxzd_DoubleClicked); 

		 if(typeof(self.dw_xx_GetFocus)=="function") 
			 win.AttachEvent("dw_khxxzd","GetFocus",self.dw_xx_GetFocus); 

		 if(typeof(self.dw_xx_ItemChanged)=="function") 
			 win.AttachEvent("dw_khxxzd","ItemChanged",self.dw_xx_ItemChanged); 

		 if(typeof(self.RbuttonDown_xx)=="function") 
			 win.AttachEvent("dw_khxxzd","RButtonDown",self.RbuttonDown_xx); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_print","Clicked",self.Print); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_hxzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.Recover_xx)=="function") 
			 win.AttachEvent("m_5","Clicked",self.Recover_xx); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_6","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_xx)=="function") 
			 win.AttachEvent("m_8","Clicked",self.CopyCol_xx); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_khxxzd.Detach(); dw_khxxzd=null; 
		 dw_master.Detach(); dw_master=null; 
		 tb_1.Detach(); tb_1=null; 
		 ddlb_hxzt.Detach(); ddlb_hxzt=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_jzxxx.Detach(); ds_jzxxx=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = ""; 
    var dwc = new DataWindowChild();
    var iw_Wldw_Select = null;
    var iw_Wldw_Zfdx_Select = null;
    var iw_Wldw_Yh_Select = null;
    var iw_Fj_Edit = null;
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hdfykhhzzd.ashx");

    
    
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
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
           
        }
    };
    //#endregion

   

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus();
         var operation = requestor.GetParm("operation");
       
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            }
            if (operation == "open") {
//                self.SetEditMode("open");

                dw_master.Modify("id.Tabsequence=0");
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else {
            self.SetEditMode("show");
        };


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
    this.dw_jzxxx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_xx_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
    //#endregion

    //#region 查询
    this.Retrieve = function ()
    {
        if ( self.CloseQuery() == 1 )
            return;


        if ( endDate < beginDate )
        {
            requestor.MessageBox( "提示", "结束日期不能小于开始日期!", ICON.StopSign );
            dp_Begin.SetFocus();
            return;
        }

        var userid = requestor.GetParm( "userid" );
        var ShareMode = requestor.GetParm( "ShareMode" );
        var Dlwtf = requestor.GetParm( "Dlwtf" );
        var jsdwbm = requestor.GetParm( "jsdwbm" );
        var cxh = requestor.GetParm( "cxh" );
        var fydlbm = requestor.GetParm( "fydlbm" );
        var begin = requestor.GetParm( "beginDate" );
        var end = requestor.GetParm( "endDate" );
        var jdrbm = requestor.GetParm( "jdrbm" );
        var beginDate = new Date( begin );
        var endDate = new Date( end );


        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours( 0 );
        beginDate.setMinutes( 0 );
        beginDate.setSeconds( 0 );

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours( 23 );
        endDate.setMinutes( 59 );
        endDate.setSeconds( 59 );
        dw_master.Retrieve( jsdwbm, cxh, jdrbm );
        dw_jzxxx.Retrieve( jsdwbm, cxh, fydlbm, beginDate.getVarDate(), endDate.getVarDate(), jdrbm );
        var sfhx = "N"
        if ( ddlb_hxzt.GetText() == "未核销" )
        {
            sfhx = "Y"
        };
        
        dw_khxxzd.Retrieve( jsdwbm, cxh, fydlbm, beginDate.getVarDate(), endDate.getVarDate(), sfhx, jdrbm );
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
        if (editMode == "show")
            return;

        dw_master.AcceptText();
        dw_jzxxx.AcceptText(); 
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() )) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }
       
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        dw_master.AcceptText();
        dw_jzxxx.AcceptText();
        dw_khxxzd.AcceptText();
        var num_sum = 0;
        var gxts = 0; 
        for (row = dw_khxxzd.RowCount(); row > 0; row--) {
            var sjly = dw_khxxzd.GetItemString(row, "sjly");
            var djh = dw_khxxzd.GetItemString(row, "djh");
            var djxh = dw_khxxzd.GetItemNumber(row, "djxh");
            var khqr = dw_khxxzd.GetItemString(row, "khqr");
            var khbz = dw_khxxzd.GetItemString(row, "khbz"); 
            if ((sjly == "fygj" || sjly == "fygj2" || sjly == "sjskd") && (khqr != null || khbz != null ) ){
                gxts = gxts + 1 
                var num = QsWebSoft.PubMethod.GenJsdwJsxxxx(sjly, djh, djxh, khqr, khbz).value;
                if (num == "1") {
                    num_sum = num_sum + 1
                }
            }
        }

        if (gxts == num_sum) {
            requestor.MessageBox("提示", "存盘成功!")
        }
        else {
            requestor.MessageBox("提示", "存盘失败!")

        }


    }
    //#endregion
     

    //#region 打印 
    this.Print = function () {

//        var sqdbh = dw_master.GetItemString(1, "sqdbh");

//        var state = dw_master.GetItemString(1, 'state')
//        if (state != "提交") {
//            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
//            return;
//        }

        var jsdwbm = requestor.GetParm("jsdwbm");
        var cxh = requestor.GetParm("cxh");
        var fydlbm = requestor.GetParm("fydlbm");
        var beginDate = requestor.GetParm("beginDate");
        var endDate = requestor.GetParm("endDate");
        var jdrbm = requestor.GetParm("jdrbm");
        var sfhx = "N"
        if (ddlb_hxzt.GetText() == "未核销") {
            sfhx = "Y"
        };
        dw_print.SetDataObject("dw_hddz_hdfykhhzzd_print");
        dw_print.Retrieve(jsdwbm, cxh, fydlbm, beginDate, endDate, sfhx, jdrbm);
        dw_print.PrintPreview();
 
    }
    //#endregion


   
    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
       
    }
    //#endregion



  
    //#region dw_jzxxx dw_jzxxx_Clicked
    this.dw_jzxxx_Clicked = function (xPos, yPos, Row, dwoName) {
       

        dw_jzxxx.SetFocus();

    }
    //#endregion


    //#region 双击
    this.dw_khxxzd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0)
            if (dwoName == "fj") {
                if (iw_Fj_Edit == null)
                    iw_Fj_Edit = new W_Fj_Edit();
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var ywbh = dw_khxxzd.GetItemString(Row, "ywbh");
                var lx = "cqfgl"
                var fybm = dw_khxxzd.GetItemString(Row, "fybm");
                var fymc = dw_khxxzd.GetItemString(Row, "fymc");
                if (fybm == "010501" && fymc == "超期费") {
                    requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                    dw_khxxzd.SetFocus();
                }

            }
    }
        //#endregion

        //#region 获得字段焦点
        this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
            cloname = dwoName;

        }
        //#endregion

        //#region 获得字段焦点
        this.RbuttonDown_xx = function (dwo, xPos, yPos, Row, dwoName) {
            cloname = dwoName;

        }
        //#endregion


        //#region 恢复默认列
        this.Recover = function () {

            QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Yw_Zjgl.W_HdfykhhzzdEdit", "dw_hddz_hdfykhhzzd_edit_cmd");
            self.Retrieve();
        }
        //#endregion

        //#region 恢复默认列
        this.Recover_xx = function () {

            QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Yw_Zjgl.W_HdfykhhzzdEdit", "dw_hddz_hdfykhhzzd_edit_cmd_mx");
            self.Retrieve();
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
        this.CopyCol_xx = function () {
            var copytext = "";
            var row = dw_khxxzd.GetRow();
            if (row <= 0)
                return;
            colType = dw_khxxzd.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_khxxzd.GetItemString(dw_khxxzd.GetRow(), cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_khxxzd.GetItemDate(dw_khxxzd.GetRow(), cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_khxxzd.GetItemNumber(dw_khxxzd.GetRow(), cloname);
                copytext = num.toString();
            }
            window.clipboardData.setData("Text", copytext);


        }
        //#endregion


//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    

    


}





