﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_GnkhsyList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_print= new DataWindow( requestor );
	 var dw_list= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var sle_khmc= new SingleLineEdit( requestor );
	 var ddlb_sfty= new DropDownListBox( requestor );
	 var ddlb_khlx= new DropDownListBox( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(sle_khmc == null ) sle_khmc= new SingleLineEdit( requestor );
		 sle_khmc.Attach( win.Control( "sle_khmc") ); 
		 if(ddlb_sfty == null ) ddlb_sfty= new DropDownListBox( requestor );
		 ddlb_sfty.Attach( win.Control( "ddlb_sfty") ); 
		 if(ddlb_khlx == null ) ddlb_khlx= new DropDownListBox( requestor );
		 ddlb_khlx.Attach( win.Control( "ddlb_khlx") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list","DoubleClicked",self.dw_List_DoubleClicked); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_khmc","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.ddlb_SelectionChanged)=="function") 
			 win.AttachEvent("ddlb_sfty","SelectionChanged",self.ddlb_SelectionChanged); 

		 if(typeof(self.ddlb_SelectionChanged)=="function") 
			 win.AttachEvent("ddlb_khlx","SelectionChanged",self.ddlb_SelectionChanged); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_prn","Clicked",self.Print); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_print.Detach(); dw_print=null; 
		 dw_list.Detach(); dw_list=null; 
		 tb_2.Detach(); tb_2=null; 
		 sle_khmc.Detach(); sle_khmc=null; 
		 ddlb_sfty.Detach(); ddlb_sfty=null; 
		 ddlb_khlx.Detach(); ddlb_khlx=null; 
		 tb_1.Detach(); tb_1=null; 
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

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Gnkhsy.ashx");

    //#endregion


    //#region 数据查询
    this.Retrieve = function () {
        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        requestor.MessageBox("", Dlwtf)
        requestor.MessageBox("", "ssss")
        dw_list.Retrieve(Dlwtf);
    }
    //#endregion
   

    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenWindow = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000713";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var tybm = dw_list.GetItemString(dw_list.GetRow(), 'tybm'); 
        //        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var userid = requestor.GetParm("userid");
        var operation = "open"
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&tybm=' + tybm  + '&operation=' + operation.toString(), true);

    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow();

    }
    //#endregion


    //#region 打印
    this.Print = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "yw_khbm"));
        dw_print.PrintPreview();
    }
    //#endregion

    //#region 过滤
  
    this.ddlb_SelectionChanged = function (text) {
        var text_ddlb_sfty = ddlb_sfty.GetText();
        var text_ddlb_khlx = ddlb_khlx.GetText();
        var ls_filter = "";
        if (text_ddlb_sfty != null && text_ddlb_sfty != "" && text_ddlb_sfty != "全部") {
            ls_filter = " (( Upper(sfty) like '%" + text_ddlb_sfty + "%')  or ( Lower(sfty) like '%" + text_ddlb_sfty + "%'))"
        }

        if (text_ddlb_khlx != null && text_ddlb_khlx != "" && text_ddlb_khlx != "全部") {
            if (ls_filter == "") {
                ls_filter = " (( Upper(khlx) like '%" + text_ddlb_khlx + "%')  or ( Lower(khlx) like '%" + text_ddlb_khlx + "%'))"
            } else {
                ls_filter = ls_filter + " and " + "(( Upper(khlx) like '%" + text_ddlb_khlx + "%')  or ( Lower(khlx) like '%" + text_ddlb_khlx + "%'))"

            }
        }

        dw_list.SetRedraw(false);
        if (text == "") {
            if (ls_filter == "") {
                dw_list.SetFilter("");
            }
            else {
                dw_list.SetFilter(ls_filter);
            }

        }
        else {
            if (ls_filter == "") {
                ls_filter =  "(( Upper(tybm) like '%" + text + "%')  or ( Lower(tybm) like '%" + text + "%')  or ( Lower(tymc) like '%" + text + "%') or ( Upper(tymc) like '%" + text + "%') )";
            } else {
                ls_filter = ls_filter + " and " + "(( Upper(tybm) like '%" + text + "%')  or ( Lower(tybm) like '%" + text + "%')  or ( Lower(tymc) like '%" + text + "%') or ( Upper(tymc) like '%" + text + "%') )";
            }
        }
 
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤
    this.ddlb_sfty_SelectionChanged = function () {
        var text_ddlb_sfty = ddlb_sfty.GetText();
        var text_ddlb_khlx = ddlb_khlx.GetText();
        var text_sle_khmc = sle_khmc.GetText();
        var ls_filter = "";
 
        if (text_ddlb_sfty != null && text_ddlb_sfty != "" && text_ddlb_sfty != "全部") {
            ls_filter = " (( Upper(sfty) like '%" + text_ddlb_sfty + "%')  or ( Lower(sfty) like '%" + text_ddlb_sfty + "%'))"
        }

        if (text_ddlb_khlx != null && text_ddlb_khlx != "" && text_ddlb_khlx != "全部") {
            if (ls_filter == "") {
                ls_filter = " (( Upper(khlx) like '%" + text_ddlb_khlx + "%')  or ( Lower(khlx) like '%" + text_ddlb_khlx + "%'))"
            } else {
                ls_filter = ls_filter + " and " + "(( Upper(khlx) like '%" + text_ddlb_khlx + "%')  or ( Lower(khlx) like '%" + text_ddlb_khlx + "%'))"

            }
        }
        if (text_sle_khmc != null && text_sle_khmc != "") {
            if (ls_filter == "") {
                ls_filter = "(( Upper(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tymc) like '%" + text_sle_khmc + "%') or ( Upper(tymc) like '%" + text_sle_khmc + "%') )";
            } else {
                ls_filter = ls_filter + " and " + "(( Upper(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tymc) like '%" + text_sle_khmc + "%') or ( Upper(tymc) like '%" + text_sle_khmc + "%'))";
      
            }
        }
 
        dw_list.SetRedraw(false);
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤
    this.ddlb_khlx_SelectionChanged = function () {
        var text_ddlb_sfty = ddlb_sfty.GetText();
        var text_ddlb_khlx = ddlb_khlx.GetText();
        var text_sle_khmc = sle_khmc.GetText();
        var ls_filter = "";
        if (text_ddlb_sfty != null && text_ddlb_sfty != "" && text_ddlb_sfty != "全部") {
            ls_filter = " (( Upper(sfty) like '%" + text_ddlb_sfty + "%')  or ( Lower(sfty) like '%" + text_ddlb_sfty + "%'))"
        }

        if (text_ddlb_khlx != null && text_ddlb_khlx != "" && text_ddlb_khlx != "全部") {
            if (ls_filter == "" ) {
                ls_filter = " (( Upper(khlx) like '%" + text_ddlb_khlx + "%')  or ( Lower(khlx) like '%" + text_ddlb_khlx + "%'))"
            } else {
                ls_filter = ls_filter + " and " + "(( Upper(khlx) like '%" + text_ddlb_khlx + "%')  or ( Lower(khlx) like '%" + text_ddlb_khlx + "%'))"

            }
        }
        if (text_sle_khmc != null && text_sle_khmc != "") {
            if (ls_filter == "") {
                ls_filter = "(( Upper(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tymc) like '%" + text_sle_khmc + "%') or ( Upper(tymc) like '%" + text_sle_khmc + "%') )";
            } else {
                ls_filter = ls_filter + " and " + "(( Upper(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tybm) like '%" + text_sle_khmc + "%')  or ( Lower(tymc) like '%" + text_sle_khmc + "%') or ( Upper(tymc) like '%" + text_sle_khmc + "%') )";

            }
        }
        dw_list.SetRedraw(false);
        dw_list.SetFilter(ls_filter);
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 数据发送
    this.dw_list_DataSend = function () {
        var row = dw_list.GetRow();
        if (row <= 0) {
            return;
        }
        var yw_khbm = dw_list.GetItemString(row, "yw_khbm");
        var state = dw_list.GetItemString(row, "state");
        var ywy = dw_list.GetItemString(row, "ywy");
        var userid = requestor.GetParm("userid");
        if (ywy != userid ) {
            requestor.MessageBox("提示", "不是自己的数据,不能发送!", 1);
            return;
        }

        if (state !== "新制"){
            alert("提示,不是新制状态，不能请求审批！");
            return;
        }

        // 执行修改往来单位状态的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("UpdateState", "yw_khbm=" + yw_khbm);
        if (webReq.StatusCode() == 200) {
            requestor.MessageBox("提示", webReq.ResponseText());
        }
        else {
            requestor.MessageBox("往来单位提交审批提示", webReqbg.ResponseText(), ICON.StopSign);
            return;
        }
        dw_list.ReSelectRow(row);
    }


    //#endregion


    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(tybm) like '%" + text + "%')  or ( Lower(tybm) like '%" + text + "%')  or ( Lower(tymc) like '%" + text + "%') or ( Upper(tymc) like '%" + text + "%')  or ( Lower(pym) like '%" + text + "%') or ( Upper(pym) like '%" + text + "%')");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
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
}
