///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Kycd_ThwljhList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_log= new DataWindow( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var dw_list= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_kh= new SingleLineEdit( requestor );
	 var sle_hth= new SingleLineEdit( requestor );
	 var sle_xhgq= new SingleLineEdit( requestor );
	 var sle_ycd= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ddlb_thwljhzt= new DropDownListBox( requestor );
	 var cbx_dt= new CheckBox( requestor );
	 var dp_yjkgsj= new DatePicker( requestor );
	 var sle_2= new SingleLineEdit( requestor );
	 var ddlb_jdrjc= new DropDownListBox( requestor );
	 var ddlb_mdg= new DropDownListBox( requestor );
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
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
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
		 if(sle_xhgq == null ) sle_xhgq= new SingleLineEdit( requestor );
		 sle_xhgq.Attach( win.Control( "sle_xhgq") ); 
		 if(sle_ycd == null ) sle_ycd= new SingleLineEdit( requestor );
		 sle_ycd.Attach( win.Control( "sle_ycd") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ddlb_thwljhzt == null ) ddlb_thwljhzt= new DropDownListBox( requestor );
		 ddlb_thwljhzt.Attach( win.Control( "ddlb_thwljhzt") ); 
		 if(cbx_dt == null ) cbx_dt= new CheckBox( requestor );
		 cbx_dt.Attach( win.Control( "cbx_dt") ); 
		 if(dp_yjkgsj == null ) dp_yjkgsj= new DatePicker( requestor );
		 dp_yjkgsj.Attach( win.Control( "dp_yjkgsj") ); 
		 if(sle_2 == null ) sle_2= new SingleLineEdit( requestor );
		 sle_2.Attach( win.Control( "sle_2") ); 
		 if(ddlb_jdrjc == null ) ddlb_jdrjc= new DropDownListBox( requestor );
		 ddlb_jdrjc.Attach( win.Control( "ddlb_jdrjc") ); 
		 if(ddlb_mdg == null ) ddlb_mdg= new DropDownListBox( requestor );
		 ddlb_mdg.Attach( win.Control( "ddlb_mdg") ); 
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
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.slekh_EditChanged)=="function") 
			 win.AttachEvent("sle_kh","EditChanged",self.slekh_EditChanged); 

		 if(typeof(self.slehth_EditChanged)=="function") 
			 win.AttachEvent("sle_hth","EditChanged",self.slehth_EditChanged); 

		 if(typeof(self.slexhgq_EditChanged)=="function") 
			 win.AttachEvent("sle_xhgq","EditChanged",self.slexhgq_EditChanged); 

		 if(typeof(self.sleycd_EditChanged)=="function") 
			 win.AttachEvent("sle_ycd","EditChanged",self.sleycd_EditChanged); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_prn","Clicked",self.Print); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_thwljhzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("cbx_dt","Clicked",self.Retrieve); 

		 if(typeof(self.sleztdh_EditChanged)=="function") 
			 win.AttachEvent("sle_2","EditChanged",self.sleztdh_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_jdrjc","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Filter)=="function") 
			 win.AttachEvent("单列过滤ToolStripMenuItem","Clicked",self.Filter); 

		 if(typeof(self.Filter_Cancle)=="function") 
			 win.AttachEvent("取消过滤ToolStripMenuItem","Clicked",self.Filter_Cancle); 

		 if(typeof(self.Dcrz)=="function") 
			 win.AttachEvent("导出ToolStripMenuItem","Clicked",self.Dcrz); 

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

		 dw_log.Detach(); dw_log=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 dw_list.Detach(); dw_list=null; 
		 tb_2.Detach(); tb_2=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_kh.Detach(); sle_kh=null; 
		 sle_hth.Detach(); sle_hth=null; 
		 sle_xhgq.Detach(); sle_xhgq=null; 
		 sle_ycd.Detach(); sle_ycd=null; 
		 tb_1.Detach(); tb_1=null; 
		 ddlb_thwljhzt.Detach(); ddlb_thwljhzt=null; 
		 cbx_dt.Detach(); cbx_dt=null; 
		 dp_yjkgsj.Detach(); dp_yjkgsj=null; 
		 sle_2.Detach(); sle_2=null; 
		 ddlb_jdrjc.Detach(); ddlb_jdrjc=null; 
		 ddlb_mdg.Detach(); ddlb_mdg=null; 
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
    var iw_Wldw_Lxr_Select = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Kycd_Thwljh.ashx");   

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
      
        self.Retrieve();
    }
    //#endregion

    //#region 自己查询
    this.Retrieve = function () {
        if (self.CloseQuery() == 1)
            return;

        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var yjkgsj = new Date(dp_yjkgsj.GetValue());
        var thwljhzt = ddlb_thwljhzt.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var mdg = ddlb_mdg.GetText();

        //把开始日期的时间部分设置为 00:00:00
        beginDate.setHours(0);
        beginDate.setMinutes(0);
        beginDate.setSeconds(0);

        //把结束日期的时间部分设置为 23:59:59
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        //把结束日期的时间部分设置为 23:59:59
        yjkgsj.setHours(23);
        yjkgsj.setMinutes(59);
        yjkgsj.setSeconds(59);

        if (endDate < beginDate) {
            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
            dp_Begin.SetFocus();
            return;
        }

        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var dt = "N"
        if (cbx_dt.GetChecked()) {
            dt = "Y"
        };

        //        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), thwljhzt, dt, yjkgsj.getVarDate(), Dlwtf, userid, jdrjc);
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), thwljhzt, dt, yjkgsj.getVarDate(), Dlwtf,userid,jdrjc,mdg);
        dw_log.Retrieve(userid, "kyth");
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
        var node = "000302";
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

        var jzxxx_csbz = dw_list.GetItemString(dw_list.GetRow(), "jzxxx_csbz");
        var operation = requestor.GetParm("operation");
       
   
              

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


    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");
        if (Row > 0) {
            if (dwoName == "ywbh") {
                self.OpenHddz();
            } else  
            if (dwoName == "jzxxx_lxr" || dwoName == "jzxxx_lxdh") {
                    if (iw_Wldw_Lxr_Select == null)
                        iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    var Row = dw_list.GetRow();
                    var yw_khbm = dw_list.GetItemString(Row, "jzxxx_sjshrbm");
                    var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;
                    iw_Wldw_Lxr_Select.SetDataWindow(dw_list);
                    iw_Wldw_Lxr_Select.SetData("kycdphxx_lxr");
                    iw_Wldw_Lxr_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
                    dw_list.SetFocus();
             } else
             if (dwoName == "jzxxx_htjhthsj") {
                    var ztdh = dw_list.GetItemString(Row, "ztdh");

                    var zhlx = dw_list.GetItemString(Row, "jzxxx_zhlx");
                    var tpxx = dw_list.GetItemNumber(Row, "jzxxx_tpxx");

                    if (ztdh == "" || ztdh == null){
                        requestor.MessageBox("提示","提单号未输入不能填入预计操作时间");
                        return;
                    }

                    if (zhlx == "" || zhlx == null){
                        requestor.MessageBox("提示", "装货类型未输入不能填入预计操作时间");
                        return;
                    }

                    if (tpxx == 0 || tpxx == null){
                        requestor.MessageBox("提示", "托盘数量未输入不能填入预计操作时间");
                        return;
                    }
                    var yjkgsj = new Date(dw_list.GetItemDate(Row, "yjkgsj"))
                   
                    //                    var htjhthsj_lb = dw_list.GetItemString(Row, "htjhthsj_lb")
                     
                    dw_list.SetItem(Row, "jzxxx_htjhthsj", yjkgsj.getVarDate());
//                    dw_list.SetItem(Row, "jzxxx_htjhthsj_lb", htjhthsj_lb);
                    dw_list.SetItem(Row, "jhbhbz", "Y");

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
                            iw_Wldw_Select.SetData("ky_thwljh_sjshr");
                            iw_Wldw_Select.SetRow(Row);
                            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                            dw_list.SetFocus();
                        }
                    }
                    else {
                        self.OpenWindow();
                    }

        }
    }
        //#endregion

     //#region dw_list ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "jzxxx_htjhthsj") { 
            dw_list.SetItem(row, "jhbhbz", "Y") 
        }
    }


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
        webReq.Invoke("Delete", "ywbh=" + ywbh );

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
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%')) or ( Upper(khpym) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤目的港
    this.ddlb_mdg_SelectionChanged = function () {

        var mdg = ddlb_mdg.GetText();

        if (mdg == "全部") {
            dw_list.SetFilter("");
        }
        else {
            dw_list.SetFilter("( Upper(yw_hddz_mdg) like Upper('%" + mdg + "%'))")
        };
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

    //#region 过滤客户
    this.sleztdh_EditChanged = function (text) {
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


    //#region 过滤卸货港区
    this.slexhgq_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(xhgqjc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤原产地
    this.sleycd_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ycd) like Upper('%" + text + "%'))");
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

    this.Dcrz = function ()
    {
        var userid = requestor.GetParm( "userid" );
        var sjts = dw_list.RowCount();
        var num = QsWebSoft.PubMethod.Dcrq( userid, "空运车队提货计划", sjts ).value;

    }

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh  + '&operation=' + operation.toString() , true);



    }
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wlxx.W_Kycd_ThwljhList", "dw_kycd_thwljh_list");
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

        //数据同步生鲜港
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1 || dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 3) {

                var ywbh = dw_list.GetItemString(i, "ywbh");
                var cxh = dw_list.GetItemNumber(i, "cxh");
                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
                dw_log.SetItem(row, "changecols", "sjshrbm,sjshrmc,lxr,lxdh,zjfscwld_bz,zjfscwld_sj,zjfscwld_cp,zjfscwld_shrbm,zjfscwld_shrmc,zjfscwld_zyxx,sc_bz,sc_sj,sc_cp,sc_bm,sc_mc,sc_jc,sc_pym");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.SetItem(row, "parameters", cxh.toString());
                dw_log.ScrollToRow(row);
            }
        }

        dw_log.AcceptText();
        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListSave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

            for (row = dw_list.RowCount(); row > 0; row--) {
                var jhbhbz = dw_list.GetItemString(row, "jhbhbz")
                if (jhbhbz == "Y") {
                    var ztdh = dw_list.GetItemString(row, "ztdh");
                    var ywbh = dw_list.GetItemString(row, "ywbh");
                    var zhlx = dw_list.GetItemString(row, "jzxxx_zhlx");
                    var tpxx = dw_list.GetItemNumber(row, "jzxxx_tpxx");
                    var cxh = dw_list.GetItemNumber(row, "cxh");

                    QsWebSoft.PubMethod.DeleteKyTmdy(ywbh, cxh).value;
                    if (zhlx == "托盘") {
                        for (row1 = tpxx; row1 > 0; row1--) {
                            var xh = cxh * 1000 + row1
                            var tdh = "A" + ztdh + "XX-" + xh.toString();
                            var num = QsWebSoft.PubMethod.GenKyTmdy(tdh, ywbh, cxh).value;
                        }
                    } else {
                        var tdh = "B" + ztdh + "XX-" + cxh.toString() + "001"
                        var num = QsWebSoft.PubMethod.GenKyTmdy(tdh, ywbh, cxh).value;
                    }
                }
            }
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
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
