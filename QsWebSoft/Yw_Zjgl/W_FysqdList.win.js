﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_FysqdList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_filter= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_list= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ds_1= new DataStore( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list","DoubleClicked",self.dw_List_DoubleClicked); 

		 if(typeof(self.dw_list_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_list_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.New)=="function") 
			 win.AttachEvent("btn_new","Clicked",self.New); 

		 if(typeof(self.Copy)=="function") 
			 win.AttachEvent("btn_duplicate","Clicked",self.Copy); 

		 if(typeof(self.Delete)=="function") 
			 win.AttachEvent("btn_delete","Clicked",self.Delete); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_prn","Clicked",self.Print); 

		 if(typeof(self.Audit)=="function") 
			 win.AttachEvent("btn_tjsp","Clicked",self.Audit); 

		 if(typeof(self.AuditAll)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.AuditAll); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

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

		 dw_filter.Detach(); dw_filter=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_list.Detach(); dw_list=null; 
		 tb_2.Detach(); tb_2=null; 
		 sle_1.Detach(); sle_1=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 tb_1.Detach(); tb_1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
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

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Fysqd.ashx");

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        self.Retrieve();
    }
    //#endregion



    //#region 数据查询
    this.Retrieve = function () {
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());

        if (endDate < beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }

        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        dw_list.Retrieve(ShareMode, Dlwtf, userid, beginDate.getVarDate(), endDate.getVarDate());
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
        var node = "000208";
        var row = ds_1.Find("id='" + node + "'",1,ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var sqdbh = dw_list.GetItemString(dw_list.GetRow(), 'sqdbh')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var operation
        if (status == "审核通过" || status == "付款" || status == "入账") {
            operation = "show";
        }
        else {
            operation = "open";
        };
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&sqdbh=' + sqdbh + '&operation=' + operation.toString(), true);

    }
    //#endregion

    //双击
    this.dw_List_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow();

    }

    //#region 新建
    this.New = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000208";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        var sqdbh = null;

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&sqdbh=' + sqdbh + '&operation=' + operation.toString(), true);

    }
    //#endregion

    //#region 复制
    this.Copy = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000208";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var sqdbh = dw_list.GetItemString(dw_list.GetRow(), 'sqdbh')
        var operation = "";
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&sqdbh=' + sqdbh + '&operation=' + operation.toString(), true);
    }

    


    //#region 删除
         this.Delete = function () {

             var row = dw_list.GetRow();
             if (row <= 0)
                 retturn;
             
             dw_list.ReSelectRow(row);
             dw_list.RefreshDetails();
            
             var status = dw_list.GetItemString(row, "state");
             if (status == "审核通过" || status == "付款" || status == "入账") {
                 requestor.MessageBox("提示", "当前费用申请单的状态为<" + status + ">,不能被删除!", 1);
                 return;
             }

             var sqdbh = dw_list.GetItemString(row, "sqdbh");
             if (requestor.MessageBox("提示", "删除费用申请单<" + sqdbh + ">,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
                 return;

             //执行删除的WebService
             webReq.SetFunctionID(requestor.GetFunctionID());
             webReq.Invoke("Delete", "sqdbh=" + sqdbh);

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
             var ls_bh = "";
             var num = 0;
             var dy_flag = "";
             for (row = dw_list.RowCount(); row > 0; row--) {
                 if (dw_list.GetItemString(row, "xz") == "N") {
                     continue;
                 }
                 if (num == 0) {
                     ls_bh = dw_list.GetItemString(row, "sqdbh");
                 }
                 else {
                     ls_bh = ls_bh + "," + dw_list.GetItemString(row, "sqdbh");
                 }
                 num = num + 1;
             }
             if (num <= 0) {
                 requestor.MessageBox("提示", "请选择申请单!");
                 return;
             }
             dw_print.Retrieve(ls_bh);
             dw_print.PrintPreview();
             //执行删除的WebService
             webReq.SetFunctionID(requestor.GetFunctionID());
             webReq.Invoke("Print", "sqdbh=" + ls_bh);

             if (webReq.StatusCode() == 200) {
                 dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
                 self.Retrieve();
                 //                 requestor.MessageBox("提示", webReq.ResponseText());
            
             }
             else {
                 //                 requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
             }
         }
    //#endregion
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(sqdbh) like '%" + text.toUpperCase() + "%')  or ( Lower(sqdbh) like '%" + text.toLowerCase() + "%')   or ( Lower(wxfph) like '%" + text.toLowerCase() + "%') or ( Lower(skdwmc) like '%" + text.toLowerCase() + "%') or ( Upper(skdwmc) like '%" + text.toUpperCase() + "%')");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 提交
    this.Audit = function () {
        if (editMode != "")
            return;

        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;

        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();

        var status = dw_list.GetItemString(row, "state");
        if (status != "新制" && status != "不通过") {
            requestor.MessageBox("提示", "当前费用申请单的状态为<" + status + ">,不需要提交审核!", 1);
            return;
        }

        var sqdbh = dw_list.GetItemString(row, "sqdbh");
        var ywy = dw_list.GetItemString(row, "ywy");
        if (requestor.MessageBox("提示", "是否确定需要提交号码为<" + sqdbh + ">的费用申请?", ICON.Question, BUTTON.YesNo) == 2)
            return;

        //执行审核的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Audit", "sqdbh=" + sqdbh);

        if (webReq.StatusCode() == 200) {
            var auditInfo = window.eval(webReq.ResponseText());
            dw_list.SetItem(row, "state", auditInfo.Status);
            
            self.Bbs(sqdbh, ywy);
            requestor.MessageBox("提示", "申请单提交欧恒成功!");
            

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }


    //#endregion

    //#region 提交当天
    this.AuditAll = function () {
        if (editMode != "")
            return;
        var num = 0;
        var sqdbh = "";
        var date = new Date();

        for (row = dw_list.RowCount(); row > 0; row--) {

            var sqrq = new Date(dw_list.GetItemDate(row, "sqrq")); 
            if (sqrq.getDate() != date.getDate()) {
                continue;
            }
            var status = dw_list.GetItemString(row, "state");
            if (status != "新制" && status != "不通过") {
                continue;
            }
            if (num == 0) {
                sqdbh = dw_list.GetItemString(row, "sqdbh");
            }
            else {
                sqdbh = sqdbh + "," + dw_list.GetItemString(row, "sqdbh");
            }
            num = num + 1;
        }
        if (num <= 0)
        return;

        //执行审核的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Audit", "sqdbh=" + sqdbh);

        if (webReq.StatusCode() == 200) {
            var auditInfo = window.eval(webReq.ResponseText());

            requestor.MessageBox("提示", "申请单提交欧恒成功!");
            self.Retrieve();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
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
        if (dwoName == "xz") {
            if (dw_list.GetItemString(Row, "dy_flag") == "Y") {
                var sqdbh = dw_list.GetItemString(Row, "sqdbh");
                requestor.MessageBox("提示", "申请单" + sqdbh + "已经打印，请先取消打印标志!");
                dw_list.SetItem(Row, "xz", "N");
                return;
            }
            if (dw_list.GetItemString(Row, "xz") == "Y") {
                dw_list.SetItem(Row, "xz", "N");
            }
            else {

                dw_list.SetItem(Row, "xz", "Y");
            }
        }
        if (dwoName == "dy_flag") {
            if (dw_list.GetItemString(Row, "dy_flag") == "Y") {
                var sqdbh = dw_list.GetItemString(Row, "sqdbh");
                if (requestor.MessageBox("提示", "是否取消费用申请单<" + sqdbh + ">打印标志,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
                    return;
                //执行删除的WebService
               
                webReq.SetFunctionID(requestor.GetFunctionID());
                webReq.Invoke("Cancel", "sqdbh=" + sqdbh);

                if (webReq.StatusCode() == 200) {
//                    dw_list.RowsDiscard(Row, Row, DWBUFFER.Primary);
//                    requestor.MessageBox("提示", webReq.ResponseText());
                    self.Retrieve();
                }
                else {
                    requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
                }

            }
        }

    }
    //#endregion


    //#region dw_list ItemChanged
    this.dw_list_ItemChanged = function (row, dwoName, data) {
//        if (dwoName == "xz") {
//            if (dw_list.GetItemString(row, "dy_flag") == "Y") {
//                var sqdbh = dw_list.GetItemString(row, "sqdbh");
//                requestor.MessageBox("提示", "申请单" + sqdbh + "已经打印，请确认!");
//                dw_list.SetItem(row, "xz", "N");
//                return;
//            }
//        }
    }
    //#endregion



    //发消息给内网业务员
    this.Bbs = function (sqdbh,jsr) {
        userid = requestor.GetParm("userid");
        var msg = QsWebSoft.PubMethod.F_bbs_fb(userid, "费用申请发送", "申请单" + sqdbh + "已经发送，请查收!", jsr, "fysqfs").value;
        if (msg <= 0) {
            requestor.MessageBox("提示", "费用申请" + mxdbh + "提交后，发送消息给" + jsr + "未成功!");
            return;
        }
    }
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
