///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_MxdList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dw_print= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_read_mxd= new DataStore( requestor );
	 var ds_read_master= new DataStore( requestor );
	 var ds_read_mxd_cmd= new DataStore( requestor );
	 var ds_read_cmd= new DataStore( requestor );
	 var ds_read_fy= new DataStore( requestor );
	 var ds_read_mxd_fy= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
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
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_read_mxd == null ) ds_read_mxd= new DataStore( requestor );
		 ds_read_mxd.Attach( win.Control( "ds_read_mxd") ); 
		 if(ds_read_master == null ) ds_read_master= new DataStore( requestor );
		 ds_read_master.Attach( win.Control( "ds_read_master") ); 
		 if(ds_read_mxd_cmd == null ) ds_read_mxd_cmd= new DataStore( requestor );
		 ds_read_mxd_cmd.Attach( win.Control( "ds_read_mxd_cmd") ); 
		 if(ds_read_cmd == null ) ds_read_cmd= new DataStore( requestor );
		 ds_read_cmd.Attach( win.Control( "ds_read_cmd") ); 
		 if(ds_read_fy == null ) ds_read_fy= new DataStore( requestor );
		 ds_read_fy.Attach( win.Control( "ds_read_fy") ); 
		 if(ds_read_mxd_fy == null ) ds_read_mxd_fy= new DataStore( requestor );
		 ds_read_mxd_fy.Attach( win.Control( "ds_read_mxd_fy") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list","DoubleClicked",self.dw_List_DoubleClicked); 

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
			 win.AttachEvent("btn_mxd","Clicked",self.Print); 

		 if(typeof(self.HyPrint)=="function") 
			 win.AttachEvent("btn_hy","Clicked",self.HyPrint); 

		 if(typeof(self.KyPrint)=="function") 
			 win.AttachEvent("btn_ky","Clicked",self.KyPrint); 

		 if(typeof(self.dw_list_DataSend)=="function") 
			 win.AttachEvent("btn_sjfs","Clicked",self.dw_list_DataSend); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_list.Detach(); dw_list=null; 
		 tb_2.Detach(); tb_2=null; 
		 sle_1.Detach(); sle_1=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 tb_1.Detach(); tb_1=null; 
		 dw_print.Detach(); dw_print=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_read_mxd.Detach(); ds_read_mxd=null; 
		 ds_read_master.Detach(); ds_read_master=null; 
		 ds_read_mxd_cmd.Detach(); ds_read_mxd_cmd=null; 
		 ds_read_cmd.Detach(); ds_read_cmd=null; 
		 ds_read_fy.Detach(); ds_read_fy=null; 
		 ds_read_mxd_fy.Detach(); ds_read_mxd_fy=null; 
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


    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Mxd.ashx");

    var webReqbg = new WebRequestor();
    webReqbg.SetWebServiceUrl("/Service/Bgdj.ashx");

    var webReqjh = new WebRequestor();
    webReqjh.SetWebServiceUrl("/Service/Jhdj.ashx");

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
        dw_list.Retrieve(ShareMode, userid,Dlwtf, beginDate.getVarDate(), endDate.getVarDate());



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
        var node = "000103";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var mxdbh = dw_list.GetItemString(dw_list.GetRow(), 'mxdbh')
        var bbh = dw_list.GetItemNumber(dw_list.GetRow(), 'bbh')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'state')
        var ywy = dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zdr = dw_list.GetItemString(dw_list.GetRow(), "zdr");
        var userid = requestor.GetParm("userid");
        var operation
        if (ywy == userid || zdr == userid) {
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&mxdbh=' + mxdbh + '&bbh=' + bbh.toString() + '&operation=' + operation.toString(), true);



    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow();

    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0)
            if (dwoName == "mxdbh") {
                self.OpenWindow();
            }
    }
    //#endregion

//     this.Download = function () {
//         QsWebSoft.PubMethod.DownLoad();
//    }
    //#region 新建
    this.New = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000103";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        var mxdbh = null;
        var bbh = 1;

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&mxdbh=' + mxdbh + '&bbh=' + bbh.toString() + '&operation=' + operation.toString(), true);
                
    }
    //#endregion

    //#region 删除
    this.Delete = function () {

        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;

        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();

        var status = dw_list.GetItemString(row, "state");

        if (status != "新制" & status != "退回") {
            requestor.MessageBox("提示", "当前明细单的状态不是<" + "未生成"+ ">,不能被删除!", 1);
            return;
        }

        var ywy = dw_list.GetItemString(row, "ywy");
        var zdr = dw_list.GetItemString(row, "zdr");
        var userid = requestor.GetParm("userid");
        if (ywy != userid && zdr != userid) {
            requestor.MessageBox("提示", "不是自己的数据,不能被删除!", 1);
            return;
        }

        var mxdbh = dw_list.GetItemString(row, "mxdbh");
        var bbh = dw_list.GetItemNumber(row, "bbh");
        if (requestor.MessageBox("提示", "删除出口明细单<" + mxdbh + "--第" + bbh.toString() + "版>,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
            return;

        //执行删除的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Delete", "mxdbh=" + mxdbh + "&bbh=" + bbh.toString());

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
        dw_print.SetDataObject("dw_mxd_prn");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "mxdbh"), dw_list.GetItemNumber(dw_list.GetRow(), "bbh"));
        dw_print.PrintPreview();
    }
    //#endregion

    //#region 海运打印
    this.HyPrint = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print.SetDataObject("dw_td_mxd_prn_sea_cncie");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "mxdbh"), dw_list.GetItemNumber(dw_list.GetRow(), "bbh"));
        dw_print.PrintPreview();
    }
    //#endregion

    //#region 空运打印
    this.KyPrint = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print.SetDataObject("dw_td_mxd_prn_air_cncie");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "mxdbh"), dw_list.GetItemNumber(dw_list.GetRow(), "bbh"));
        dw_print.PrintPreview();
    }
    //#endregion

    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(mxdbh) like '%" + text + "%')  or ( Lower(mxdbh) like '%" + text + "%')  or ( Lower(wxhth) like '%" + text + "%') or ( Upper(wxhth) like '%" + text + "%')");
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
        var node = "000103";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var mxdbh = dw_list.GetItemString(dw_list.GetRow(), 'mxdbh')
        var bbh = dw_list.GetItemNumber(dw_list.GetRow(), 'bbh')
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&mxdbh=' + mxdbh + '&bbh=' + bbh.toString() + '&operation=' + operation.toString() , true);



    }
    //#endregion

//#region 数据发送
    this.dw_list_DataSend = function () {


        var row = dw_list.GetRow();
        if (row <= 0) {
            return;
        }
        self.Retrieve();

          self.sle_EditChanged(sle_1.GetText());

        //        dw_list.ReSelectRow(row);
        dw_list.ScrollToRow(row);
        var mxdbh = dw_list.GetItemString(row, "mxdbh");
        var bbh = dw_list.GetItemNumber(row, "bbh");
        var state = dw_list.GetItemString(row, "compute_3");
        var zdr = dw_list.GetItemString(row, "zdr");
        var ywy = dw_list.GetItemString(row, "ywy");
        var ls_dz_state = dw_list.GetItemString(row, "dz_state");
        var ls_dzjh_state = dw_list.GetItemString(row, "dzjh_state");
        var userid = requestor.GetParm("userid");
        var count = dw_list.GetItemNumber(row, "count");
        if (ywy != userid && zdr != userid) {
            requestor.MessageBox("提示", "不是自己的数据,不能生成单据!", 1);
            return;
        }

        //        if (state != '批准') {
        //	       alert("提示,发票号"+mxdbh+"还未审批通过，不能再发送数据！");
        //	       return ;
        //         }
        //        if (ls_dz_state == "已接收" && ls_dzjh_state == "已接收") {
        //            requestor.MessageBox("提示", "报关、结汇数据都已生成，不用重复生成！");
        //            return;
        //        }
        if (state == "已生成") {
            requestor.MessageBox("提示", "报关、结汇数据都已生成，不用重复生成！");
            return;
        }

        self.DataReceive(mxdbh, bbh);
        ////        dw_list.ReSelectRow(row);
                dw_list.ScrollToRow(row);
        var date = new Date();
        dw_list.SetItem(row, "dz_state", "已接收")
        dw_list.SetItem(row, "fsrq", date.getVarDate())
        dw_list.SetItem(row, "compute_3", "已生成")


    }


    //#endregion

    //#region 数据接收
    this.DataReceive = function (mxdbh, bbh, row) {
        var jhdz = QsWebSoft.PubMethod.CheckDetailMxdbh(mxdbh).value;
        var bgdz = QsWebSoft.PubMethod.CheckBgMxdbh(mxdbh).value;
        if (jhdz > 0 || bgdz > 0) {
            var ll_choice = requestor.MessageBox("注意", "本条数据为更改后的出口明细单数据，是否覆盖现有单证信息?" + "\n" + "Yes：重新自动生成报关结汇数据；" + "\n" + "No：根据变更数据手工修改报关结汇数据；" + "\n" + "Cancel：取消接受", ICON.Question, BUTTON.YesNoCancel, 2);
            if (ll_choice == 2 || ll_choice == 3) {
                return;
            }
            else {
                if (bgdz > 0) {
                    // 执行删除报关单据的WebService
                    webReqbg.SetFunctionID(requestor.GetFunctionID());
                    webReqbg.Invoke("Delete", "mxdbh=" + mxdbh + "&bbh=" + bbh.toString());

                    if (webReqbg.StatusCode() == 200) {
                        //                        requestor.MessageBox("提示", webReqbg.ResponseText());

                    }
                    else {
                        requestor.MessageBox("删除报关数据提示", webReqbg.ResponseText(), ICON.StopSign);
                        return;
                    }
                }

                if (jhdz > 0) {
                    //执行删除结汇单据的WebService
                    webReqjh.SetFunctionID(requestor.GetFunctionID());
                    webReqjh.Invoke("Delete", "mxdbh=" + mxdbh + "&bbh=" + bbh.toString());

                    if (webReqjh.StatusCode() == 200) {
                        //                        requestor.MessageBox("提示", webReqjh.ResponseText());
                    }
                    else {
                        requestor.MessageBox("删除结汇数据提示", webReqjh.ResponseText(), ICON.StopSign);
                        return;
                    }
                }
            }
        }

        //接收结汇数据
        self.DetailDataReceive(mxdbh, bbh);

        //接收报关数据
        self.BaoGuanDataReceive(mxdbh, bbh);


        //生成报关单据打印格式
        num = QsWebSoft.PubMethod.GenBgdzAfterReceiveData(mxdbh, bbh).value;
        if (num != 1) {
            alert("提示，生成报关单据打印格式失败!");
        }

        //生成结汇单据打印格式
        num = QsWebSoft.PubMethod.GenJhdzAfterReceiveData(mxdbh, bbh).value;
        if (num != 1) {
            alert("提示，生成结汇单据打印格式失败!");
        }

        jhdz = QsWebSoft.PubMethod.CheckDetailMxdbh(mxdbh).value;
        bgdz = QsWebSoft.PubMethod.CheckBgMxdbh(mxdbh).value;
        if (jhdz <= 0 & bgdz <= 0)
            return;
        //更新明细单状态
        var num = QsWebSoft.PubMethod.UpdateMxdAfterReceiveData(mxdbh, bbh, "接收").value;
        if (num != 1) {
            alert("提示，更新明细单状态失败!");
            return;
        }

        //更新报关费用付款方
        var num = QsWebSoft.PubMethod.UpdateBgdjFy(mxdbh).value;
        if (num != 1) {
            alert("提示，更新报关费用付款方失败!");
            return;
        }





    }
    //#endregion

    //#region 生成结汇数据
    this.DetailDataReceive = function (mxdbh, bbh) {
        var userid = requestor.GetParm("userid");
        var date = new Date();
        ds_read_master.SetDataObject("ds_read_jhdj");
        ds_read_cmd.SetDataObject("ds_read_jhdj_cmd");
        ds_read_fy.SetDataObject("ds_read_jhdj_fy");
        ds_read_mxd.Retrieve(mxdbh, bbh);
        ds_read_mxd_cmd.Retrieve(mxdbh, bbh);
        ds_read_mxd_fy.Retrieve(mxdbh, bbh);

        if (ds_read_mxd.RowsCopy(1, 1, DWBUFFER.Primary, ds_read_master, 1, DWBUFFER.Primary) < 0) {
            alert("友情提示,结汇单证主表信息读取数据时出错！");
            return;
        }
        else {
            //修改单证状态
            ds_read_master.SetItem(1, 'zdrq', date.getVarDate())
            ds_read_master.SetItem(1, 'state', "新制")
            ds_read_master.SetItem(1, 'dz_jsrq', date.getVarDate())
            ds_read_master.SetItem(1, 'dzjh_zdy', userid)
            ds_read_master.SetItem(1, "dzjh_state", "已接收")
            ds_read_master.SetItem(1, 'fsrq', date.getVarDate())
        }

        if (ds_read_mxd_cmd.RowsCopy(1, ds_read_mxd_cmd.RowCount(), DWBUFFER.Primary, ds_read_cmd, 1, DWBUFFER.Primary) < 0) {
            alert("友情提示,结汇单证商品信息读取数据时出错！");
            return;
        }
        if (ds_read_mxd_fy.RowCount() > 0) {
            if (ds_read_mxd_fy.RowsCopy(1, ds_read_mxd_fy.RowCount(), DWBUFFER.Primary, ds_read_fy, 1, DWBUFFER.Primary) < 0) {
                alert("友情提示,结汇单证费用信息读取数据时出错！");
                return;
            }
        }



        if (ds_read_master.AcceptText() != 1)
            return;
        if (ds_read_cmd.AcceptText() != 1)
            return;
        if (ds_read_fy.AcceptText() != 1)
            return;


        var dw_master_data = ds_read_master.GetChanges();
        var dw_cmd_data = ds_read_cmd.GetChanges();
        var dw_fy_data = ds_read_fy.GetChanges();

        //执行保存的WebService
        webReqjh.SetFunctionID(requestor.GetFunctionID());
        webReqjh.Invoke("SaveCopy", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data + "&dw_Fy=" + dw_fy_data + "&mxdbh=" + mxdbh + "&bbh=" + bbh);


        if (webReqjh.StatusCode() == 200) {
            //服务器成功处理

            requestor.MessageBox("提示", "结汇单据生成成功!");
            ds_read_master.Reset();
            ds_read_cmd.Reset();
            ds_read_fy.Reset();

        }
        else {
            requestor.MessageBox("结汇单据生成提示", webReqjh.ResponseText(), ICON.StopSign);
            ds_read_master.Reset();
            ds_read_cmd.Reset();
            ds_read_fy.Reset();
            return;
        }

    }
    //#endregion


    //#region 生成报关数据

    this.BaoGuanDataReceive = function (mxdbh, bbh) {
        var userid = requestor.GetParm("userid");
        var date = new Date();
        ds_read_master.SetDataObject("ds_read_bgdj");
        ds_read_cmd.SetDataObject("ds_read_bgdj_cmd");
        ds_read_fy.SetDataObject("ds_read_bgdj_fy");
        ds_read_mxd.Retrieve(mxdbh, bbh);
        ds_read_mxd_cmd.Retrieve(mxdbh, bbh);
        ds_read_mxd_fy.Retrieve(mxdbh, bbh);
 


        if (ds_read_mxd.RowsCopy(1, 1, DWBUFFER.Primary, ds_read_master, 1, DWBUFFER.Primary) < 0) {
            alert("友情提示,报关单证主表信息读取数据时出错！");
            return;
        }
        else {
            //修改单证状态
            ds_read_master.SetItem(1, 'zdrq', date.getVarDate())
            ds_read_master.SetItem(1, 'state', "新制")
            ds_read_master.SetItem(1, 'dz_jsrq', date.getVarDate())
            ds_read_master.SetItem(1, 'dz_zdy', userid)
            ds_read_master.SetItem(1, "dz_state", "已接收")
            ds_read_master.SetItem(1, 'fsrq', date.getVarDate())
        }

        if (ds_read_mxd_cmd.RowsCopy(1, ds_read_mxd_cmd.RowCount(), DWBUFFER.Primary, ds_read_cmd, 1, DWBUFFER.Primary) < 0) {
            alert("友情提示,报关单证商品信息读取数据时出错！");
            return;
        }


        if (ds_read_mxd_fy.RowCount() > 0) {
            if (ds_read_mxd_fy.RowsCopy(1, ds_read_mxd_fy.RowCount(), DWBUFFER.Primary, ds_read_fy, 1, DWBUFFER.Primary) < 0) {
                alert("友情提示,报关单证费用信息读取数据时出错！");
                return;
            }
        }



        if (ds_read_master.AcceptText() != 1)
            return;
        if (ds_read_cmd.AcceptText() != 1)
            return;
        if (ds_read_fy.AcceptText() != 1)
            return;

        var dw_master_data = ds_read_master.GetChanges();
        var dw_cmd_data = ds_read_cmd.GetChanges();
        var dw_fy_data = ds_read_fy.GetChanges();

        //执行保存的WebService
        webReqbg.SetFunctionID(requestor.GetFunctionID());
        webReqbg.Invoke("SaveCopy", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data + "&dw_Fy=" + dw_fy_data + "&mxdbh=" + mxdbh + "&bbh=" + bbh);


        if (webReqjh.StatusCode() == 200) {
            //服务器成功处理
//            self.Retrieve();
            requestor.MessageBox("提示", "报关单据生成成功!");
            ds_read_master.Reset();
            ds_read_cmd.Reset();
            ds_read_fy.Reset();

        }
        else {
            requestor.MessageBox("报关单据生成提示", webReqbg.ResponseText(), ICON.StopSign);
            ds_read_master.Reset();
            ds_read_cmd.Reset();
            ds_read_fy.Reset();
            return;
        }
//        self.Retrieve();

    }
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Mxd.W_MxdList", "dw_mxd_list");
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



 


 
}
