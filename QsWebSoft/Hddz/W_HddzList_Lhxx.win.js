///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Lhxx() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var ddlb_jdrjc= new DropDownListBox( requestor );
	 var sle_pch= new SingleLineEdit( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var sle_jzxsl= new SingleLineEdit( requestor );
	 var sle_cdgs= new SingleLineEdit( requestor );
	 var sle_gq= new SingleLineEdit( requestor );
	 var ddlb_dgzt= new DropDownListBox( requestor );
	 var ddlb_jkdt= new DropDownListBox( requestor );
	 var ddlb_lhzt= new DropDownListBox( requestor );
	 var ddlb_sqlhzt= new DropDownListBox( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_cm= new SingleLineEdit( requestor );
	 var sle_hcorhbh= new SingleLineEdit( requestor );
	 var sle_ztdh= new SingleLineEdit( requestor );
	 var sle_jzxh= new SingleLineEdit( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
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
		 if(sle_pch == null ) sle_pch= new SingleLineEdit( requestor );
		 sle_pch.Attach( win.Control( "sle_pch") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(sle_jzxsl == null ) sle_jzxsl= new SingleLineEdit( requestor );
		 sle_jzxsl.Attach( win.Control( "sle_jzxsl") ); 
		 if(sle_cdgs == null ) sle_cdgs= new SingleLineEdit( requestor );
		 sle_cdgs.Attach( win.Control( "sle_cdgs") ); 
		 if(sle_gq == null ) sle_gq= new SingleLineEdit( requestor );
		 sle_gq.Attach( win.Control( "sle_gq") ); 
		 if(ddlb_dgzt == null ) ddlb_dgzt= new DropDownListBox( requestor );
		 ddlb_dgzt.Attach( win.Control( "ddlb_dgzt") ); 
		 if(ddlb_jkdt == null ) ddlb_jkdt= new DropDownListBox( requestor );
		 ddlb_jkdt.Attach( win.Control( "ddlb_jkdt") ); 
		 if(ddlb_lhzt == null ) ddlb_lhzt= new DropDownListBox( requestor );
		 ddlb_lhzt.Attach( win.Control( "ddlb_lhzt") ); 
		 if(ddlb_sqlhzt == null ) ddlb_sqlhzt= new DropDownListBox( requestor );
		 ddlb_sqlhzt.Attach( win.Control( "ddlb_sqlhzt") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 
		 if(sle_cm == null ) sle_cm= new SingleLineEdit( requestor );
		 sle_cm.Attach( win.Control( "sle_cm") ); 
		 if(sle_hcorhbh == null ) sle_hcorhbh= new SingleLineEdit( requestor );
		 sle_hcorhbh.Attach( win.Control( "sle_hcorhbh") ); 
		 if(sle_ztdh == null ) sle_ztdh= new SingleLineEdit( requestor );
		 sle_ztdh.Attach( win.Control( "sle_ztdh") ); 
		 if(sle_jzxh == null ) sle_jzxh= new SingleLineEdit( requestor );
		 sle_jzxh.Attach( win.Control( "sle_jzxh") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_2 == null ) ds_2= new DataStore( requestor );
		 ds_2.Attach( win.Control( "ds_2") ); 

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

		 if(typeof(self.LhxxExport)=="function") 
			 win.AttachEvent("btn_daochu","Clicked",self.LhxxExport); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_pch","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_jzxsl","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_cdgs","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_gq","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_dgzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.jkdtSelChanged)=="function") 
			 win.AttachEvent("ddlb_jkdt","SelectionChanged",self.jkdtSelChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_lhzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sqlhzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Help)=="function") 
			 win.AttachEvent("btn_Help","Clicked",self.Help); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_cm","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_hcorhbh","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_ztdh","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_jzxh","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.OpenYcyy)=="function") 
			 win.AttachEvent("btn_ycyy","Clicked",self.OpenYcyy); 

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
		 sle_pch.Detach(); sle_pch=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 tb_2.Detach(); tb_2=null; 
		 sle_jzxsl.Detach(); sle_jzxsl=null; 
		 sle_cdgs.Detach(); sle_cdgs=null; 
		 sle_gq.Detach(); sle_gq=null; 
		 ddlb_dgzt.Detach(); ddlb_dgzt=null; 
		 ddlb_jkdt.Detach(); ddlb_jkdt=null; 
		 ddlb_lhzt.Detach(); ddlb_lhzt=null; 
		 ddlb_sqlhzt.Detach(); ddlb_sqlhzt=null; 
		 tb_1.Detach(); tb_1=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_cm.Detach(); sle_cm=null; 
		 sle_hcorhbh.Detach(); sle_hcorhbh=null; 
		 sle_ztdh.Detach(); sle_ztdh=null; 
		 sle_jzxh.Detach(); sle_jzxh=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_log.Detach(); dw_log=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
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

    this.jkdtSelChanged = function () {
        if (ddlb_jkdt.GetText() == "确报动态") {
            ddlb_lhzt.SetText("非正常理货");
            ddlb_sqlhzt.SetText("未申请状态");
        }
        if (ddlb_jkdt.GetText() == "非确报动态") {
            ddlb_lhzt.SetText("全部");
            ddlb_sqlhzt.SetText("全部");
        }
        self.Retrieve();
    }

    //#region 数据查询
    this.Retrieve = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
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

        var dgzt = ddlb_dgzt.GetText();
        var jkdt = ddlb_jkdt.GetText();
        var lhzt = ddlb_lhzt.GetText();
        var sqlhzt = ddlb_sqlhzt.GetText();
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), dgzt, jkdt, lhzt, sqlhzt, userid, jdrjc);
        dw_log.Retrieve(userid, "lhxx");
    }
    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
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
                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz");
                dw_log.SetItem(row, "changecols", "sjzq_zqlhsj,sjzq_zqdgsj");
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
        webReq.Invoke("lhxxSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
    }
    //#endregion      

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy = function () {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh");
        iw_Hddz_Ycyy.SetDataWindow(dw_list);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(row);
        iw_Hddz_Ycyy.SetYybm("0108");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        var ls_filter = ""
        var cm = sle_cm.GetText();
        var hcorhbh = sle_hcorhbh.GetText();
        var ztdh = sle_ztdh.GetText();
        var jzxh = sle_jzxh.GetText();
        var jzxsl = sle_jzxsl.GetText();
        var cdgs = sle_cdgs.GetText();
        var gq = sle_gq.GetText();
        var pch = sle_pch.GetText();

        if (cm == null || cm == "") {
            //
        } else {
            ls_filter = "( cm  like '%" + cm + "%')"
        };

        if (hcorhbh == null || hcorhbh == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(hcorhbh like '%" + hcorhbh + "%') "
            } else {
                ls_filter = ls_filter + " and ( hcorhbh like '%" + hcorhbh + "%')"
            };
        };

        if (ztdh == null || ztdh == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(ztdh like '%" + ztdh + "%') "
            } else {
                ls_filter = ls_filter + " and ( ztdh like '%" + ztdh + "%')"
            };
        };


        if (jzxh == null || jzxh == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(jzxh like '%" + jzxh + "%') "
            } else {
                ls_filter = ls_filter + " and ( jzxh like '%" + jzxh + "%')"
            };
        };

        if (jzxsl == null || jzxsl == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(jzxsl = " + jzxsl + ") "
            } else {
                ls_filter = ls_filter + " and ( jzxsl = " + jzxsl + ")"
            };
        };

        if (cdgs == null || cdgs == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(cdgsjc like '%" + cdgs + "%') "
            } else {
                ls_filter = ls_filter + " and ( cdgsjc like '%" + cdgs + "%')"
            };
        };

        if (gq == null || gq == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(jcka like '%" + gq + "%') "
            } else {
                ls_filter = ls_filter + " and ( jcka like '%" + gq + "%')"
            };
        };

        if (pch == null || pch == "") {
            //
        } else {
            if (ls_filter == "") {
                ls_filter = "(sqlhpc like '%" + pch + "%') "
            } else {
                ls_filter = ls_filter + " and ( sqlhpc like '%" + pch + "%')"
            };
        };

        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion
    this.LhxxExport = function () {

        var zds = QsWebSoft.PubMethod.GenLhxxPch().value;
        zds = zds + 1;
        zds = zds.toString();
        if (zds.length == 1) {
            zds = "00" + zds;
        };
        if (zds.length == 2) {
            zds = "0" + zds;
        };
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
   : nowDate.getMonth() + 1;
        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
   .getDate();
        var dateStr = year + month + day;
        dateStr = dateStr.toString();
        dateStr = dateStr + zds;
        for (var i = 1; i <= dw_list.RowCount(); i++) {
           dw_list.SetItem(i, "sqlhpc", dateStr);

        }
        self.Save();

        dw_list.Export();
    }

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
//        if (Row > 0) {
//            if (dwoName == "sjzq_jkdgqrbz") {
//                var ywbh = dw_list.GetItemString(Row, "ywbh");
//                var sjzq_jkdgqrbz = dw_list.GetItemString(Row, "sjzq_jkdgqrbz");
//                var jkdgqrbz = "";
//                if (sjzq_jkdgqrbz == "确报动态") {
//                    jkdgqrbz = "N"
//                } else {
//                    jkdgqrbz = "确报动态"
//                };
//                var num = QsWebSoft.PubMethod.EditLhzt_jkdgqrbz(ywbh, jkdgqrbz);

//            }

//            if (dwoName == "sjzq_lhzt") {
//                var ywbh = dw_list.GetItemString(Row, "ywbh");
//                var sjzq_lhzt = dw_list.GetItemString(Row, "sjzq_lhzt");
//                if (sjzq_lhzt == "正常理货") {
//                    sjzq_lhzt = "N"
//                } else {
//                    sjzq_lhzt = "正常理货"
//                }
//                var num = QsWebSoft.PubMethod.EditLhzt_lhzt(ywbh, sjzq_lhzt);

//            }
//            fzks_row = Row;

//        }
    }
    //#region 修改数据窗口内容dw_List_ItemChanged
    this.dw_List_ItemChanged = function (Row, dwoName, data) {


        if (Row > 0) {
            if (dwoName == "sjzq_jkdgqrbz") {
                var ywbh = dw_list.GetItemString(Row, "ywbh");
//                var sjzq_jkdgqrbz = data; // dw_list.GetItemString(Row, "sjzq_jkdgqrbz");
//                var jkdgqrbz = "";
//                if (sjzq_jkdgqrbz == "确报动态") {
//                    jkdgqrbz = "N"
//                } else {
//                    jkdgqrbz = "确报动态"
                //                };
                
                var num = QsWebSoft.PubMethod.EditLhzt_jkdgqrbz(ywbh, data);
                var date = new Date();
                dw_list.SetItem(Row, "sjzq_zqdgsj", date.getVarDate());
            }

            if (dwoName == "sjzq_lhzt") {
                var ywbh = dw_list.GetItemString(Row, "ywbh");
//                var sjzq_lhzt = data;// dw_list.GetItemString(Row, "sjzq_lhzt");
//                if (sjzq_lhzt == "正常理货") {
//                    sjzq_lhzt = "N"
//                } else {
//                    sjzq_lhzt = "正常理货"
//                }
                var num = QsWebSoft.PubMethod.EditLhzt_lhzt(ywbh, data);
                var date = new Date();
                dw_list.SetItem(Row, "sjzq_zqlhsj", date.getVarDate());

            }
            fzks_row = Row;

        }
    }
    //#endregion


    //#region 双击事件
//    var iw_Hddz_Clh = null;
//    this.dw_List_DoubleClicked = function (Row) {
//        if (iw_Hddz_Clh == null)
//            iw_Hddz_Clh = new W_Hddz_Clh();

//        var Dlwtf = requestor.GetParm("Dlwtf");
//        var row = dw_list.GetRow();
//        var ywbh = dw_list.GetItemString(row, "ywbh");
//        var jzxh = dw_list.GetItemString(row, "jzxh");

//        iw_Hddz_Clh.SetDataWindow(dw_list);
//        iw_Hddz_Clh.SetData(ywbh);
//        iw_Hddz_Clh.SetData(jzxh);
//        iw_Hddz_Clh.SetRow(Row);

//        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Clh", iw_Hddz_Clh);
//    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle = function () {
        dw_list.SetFilter("");
        dw_list.Filter();
        dw_list.SetFocus(); 
        dw_filter.Reset();
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

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList", "dw_hddz_list");
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

}
