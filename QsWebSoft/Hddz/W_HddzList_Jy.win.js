///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Jy() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var dw_xccy= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var ddlb_jdrjc= new DropDownListBox( requestor );
	 var sle_bgdh= new SingleLineEdit( requestor );
	 var sle_jzxh= new SingleLineEdit( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_kh= new SingleLineEdit( requestor );
	 var sle_hth= new SingleLineEdit( requestor );
	 var sle_tdh= new SingleLineEdit( requestor );
	 var sle_bjh= new SingleLineEdit( requestor );
	 var sle_tgdh= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ddlb_wssbzt= new DropDownListBox( requestor );
	 var ddlb_jyzt= new DropDownListBox( requestor );
	 var ddlb_ysfs= new DropDownListBox( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
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
		 if(dw_xccy == null ) dw_xccy= new DataWindow( requestor );
		 dw_xccy.Attach( win.Control( "dw_xccy") ); 
		 if(tb_3 == null ) tb_3= new ToolStrip( requestor );
		 tb_3.Attach( win.Control( "tb_3") ); 
		 if(ddlb_jdrjc == null ) ddlb_jdrjc= new DropDownListBox( requestor );
		 ddlb_jdrjc.Attach( win.Control( "ddlb_jdrjc") ); 
		 if(sle_bgdh == null ) sle_bgdh= new SingleLineEdit( requestor );
		 sle_bgdh.Attach( win.Control( "sle_bgdh") ); 
		 if(sle_jzxh == null ) sle_jzxh= new SingleLineEdit( requestor );
		 sle_jzxh.Attach( win.Control( "sle_jzxh") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
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
		 if(sle_tdh == null ) sle_tdh= new SingleLineEdit( requestor );
		 sle_tdh.Attach( win.Control( "sle_tdh") ); 
		 if(sle_bjh == null ) sle_bjh= new SingleLineEdit( requestor );
		 sle_bjh.Attach( win.Control( "sle_bjh") ); 
		 if(sle_tgdh == null ) sle_tgdh= new SingleLineEdit( requestor );
		 sle_tgdh.Attach( win.Control( "sle_tgdh") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ddlb_wssbzt == null ) ddlb_wssbzt= new DropDownListBox( requestor );
		 ddlb_wssbzt.Attach( win.Control( "ddlb_wssbzt") ); 
		 if(ddlb_jyzt == null ) ddlb_jyzt= new DropDownListBox( requestor );
		 ddlb_jyzt.Attach( win.Control( "ddlb_jyzt") ); 
		 if(ddlb_ysfs == null ) ddlb_ysfs= new DropDownListBox( requestor );
		 ddlb_ysfs.Attach( win.Control( "ddlb_ysfs") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
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

		 if(typeof(self.slebgdh_EditChanged)=="function") 
			 win.AttachEvent("sle_bgdh","EditChanged",self.slebgdh_EditChanged); 

		 if(typeof(self.slejzxh_EditChanged)=="function") 
			 win.AttachEvent("sle_jzxh","EditChanged",self.slejzxh_EditChanged); 

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

		 if(typeof(self.slebjh_EditChanged)=="function") 
			 win.AttachEvent("sle_bjh","EditChanged",self.slebjh_EditChanged); 

		 if(typeof(self.sletgdh_EditChanged)=="function") 
			 win.AttachEvent("sle_tgdh","EditChanged",self.sletgdh_EditChanged); 

		 if(typeof(self.Help)=="function") 
			 win.AttachEvent("btn_Help","Clicked",self.Help); 

		 if(typeof(self.OpenRjjk)=="function") 
			 win.AttachEvent("btn_rjjk","Clicked",self.OpenRjjk); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_prn","Clicked",self.Print); 

		 if(typeof(self.OpenYcyy)=="function") 
			 win.AttachEvent("btn_ycyy","Clicked",self.OpenYcyy); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_wssbzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_jyzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_ysfs","SelectionChanged",self.Retrieve); 

		 if(typeof(self.UpdateYs)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.UpdateYs); 

		 if(typeof(self.qkxccy)=="function") 
			 win.AttachEvent("btn_2","Clicked",self.qkxccy); 

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
		 dw_xccy.Detach(); dw_xccy=null; 
		 tb_3.Detach(); tb_3=null; 
		 ddlb_jdrjc.Detach(); ddlb_jdrjc=null; 
		 sle_bgdh.Detach(); sle_bgdh=null; 
		 sle_jzxh.Detach(); sle_jzxh=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 tb_2.Detach(); tb_2=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_kh.Detach(); sle_kh=null; 
		 sle_hth.Detach(); sle_hth=null; 
		 sle_tdh.Detach(); sle_tdh=null; 
		 sle_bjh.Detach(); sle_bjh=null; 
		 sle_tgdh.Detach(); sle_tgdh=null; 
		 tb_1.Detach(); tb_1=null; 
		 ddlb_wssbzt.Detach(); ddlb_wssbzt=null; 
		 ddlb_jyzt.Detach(); ddlb_jyzt=null; 
		 ddlb_ysfs.Detach(); ddlb_ysfs=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_log.Detach(); dw_log=null; 
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
    var iw_Fj_Edit = null;
    var iw_HddzRjjkEdit = null;

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
        var jyzt = ddlb_jyzt.GetText();
        var ysfs = ddlb_ysfs.GetText();
        var wssbzt = ddlb_wssbzt.GetText(); 
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
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), jyzt, ysfs, wssbzt, Dlwtf, userid, jdrjc ); 
        dw_log.Retrieve(userid, "hyjy");
    }
    //#endregion

    var iw_Set_Bjys = null;
    //#region UpdateYs
    this.UpdateYs = function (xPos, yPos, Row, dwoName) {
        var str1 = dw_list.Describe("DataWindow.Table.Filter");
        dw_list.SetFilter();
        dw_list.Filter();
        if (iw_Set_Bjys == null)
            iw_Set_Bjys = new W_Set_Bjys();
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Set_Bjys", iw_Set_Bjys);
        self.Retrieve();
        dw_list.SetFilter(str1);
        dw_list.Filter();
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


    //#region 打开编辑窗口
    this.OpenRjjk = function () {
        if (iw_HddzRjjkEdit == null)
            iw_HddzRjjkEdit = new W_HddzRjjkEdit();

        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var userid = requestor.GetParm("userid");
        var operation
        operation = "open";

        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_HddzRjjkEdit&ywbh=" + ywbh + "&operation=" + operation.toString(), iw_HddzRjjkEdit);



    }
    //#endregion

    //#region 清空现场查验
    this.qkxccy = function () {
       
        var Row = dw_list.GetRow();
        if (Row <= 0) {
            alert("没有选中一行!");
            return;
        }
        var xccy = dw_list.GetItemString(Row, "xccy");
        if (xccy == "" || xccy == null) {
            return;
        }
        dw_list.SetItem(Row, "xccy", "");
        //self.Save();

    }

    //#region 双击

    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");

        if (Row > 0) {
            if (dwoName == "ywbh") {
                self.OpenWindow();
            } else if (dwoName == "cktgsj") {
                var date = new Date();
                dw_list.SetItem(Row, "cktgsj", date.getVarDate());
            }
            else if (dwoName == "jyjjc") {
                if (readonly == "no") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "jyj";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetData("hddz_jy_jyj");
                    iw_Wldw_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_list.SetFocus();
                }
            } else
                if (dwoName == "jydjc") {
                    if (readonly == "no") {
                        if (iw_Wldw_Select == null)
                            iw_Wldw_Select = new W_Wldw_Select();
                        khlx = "jy_jyd";
                        var ywy = requestor.GetParm("userid");
                        var ShareMode = requestor.GetParm("ShareMode");
                        var Dlwtf = requestor.GetParm("Dlwtf");
                        iw_Wldw_Select.SetDataWindow(dw_list);
                        iw_Wldw_Select.SetData("hddz_jy_jyd");
                        iw_Wldw_Select.SetRow(Row);
                        var jyjsjjgdm = dw_list.GetItemString(Row, "jyjsjjgdm")
                        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx + "&jyjsjjgdm=" + jyjsjjgdm, iw_Wldw_Select);
                        dw_list.SetFocus();
                    }
                }
                else if (dwoName == "fj") {
                    if (iw_Fj_Edit == null)
                        iw_Fj_Edit = new W_Fj_Edit();
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    var ywbh = dw_list.GetItemString(Row, "ywbh");
                    var lx = "bj"
                    requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                    dw_list.SetFocus();
                }
                else if (dwoName == "rjjk") {
                    if (iw_Fj_Edit == null)
                        iw_Fj_Edit = new W_Fj_Edit();
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    var ywbh = dw_list.GetItemString(Row, "ywbh");
                    var lx = "rjjk"
                    requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                    dw_list.SetFocus();

                } 
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


    //#region dw_list ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "bjh") {
            dw_list.AcceptText();
            var ywy = requestor.GetParm("userid");
            var date = new Date();
            dw_list.SetItem(row, "wsbjsj", date.getVarDate())
            dw_list.SetItem(row, "bjhsrry", ywy)
            dw_list.SetItem(row, "bjhsrsj", date.getVarDate())
            dw_list.SetItem(row, "cktgsj", date.getVarDate())
        }
        if (dwoName == "tgdh") {

            var jyjsjjgdm = dw_list.GetItemString(row, "jyjsjjgdm")

            //            if (data.indexOf(jyjsjjgdm) < 0 && data != "") {
            //                requestor.MessageBox("提示", "请检查输入的通关单号前几位和检疫点的时检结构代码不一致，请重新输入！")

            //                return 2
            //            }

            var ywbh = dw_list.GetItemString(row, "ywbh")
            QsWebSoft.PubMethod.UpdateHddzBgdh(ywbh, data)
            if (data != "" && data != null) {
                QsWebSoft.PubMethod.UpdateTgdhOcrwjsb(ywbh, data).value;
            }
            var tgdh = data;
            var li_len = tgdh.length;
            var bjh = tgdh.substr(0, li_len - 3); // 获取子字符串。 
            //            dw_list.SetItem(row, "bjh", bjh)

            var date = new Date();
            dw_list.SetItem(row, "wsbjsj", date.getVarDate())
            //            dw_list.SetItem(row, "cktgsj", date.getVarDate())

            //判断对应报关数据是否已经发送亿通接口，如果已经发送，则设置bghbjxgbz为Y否则为N
            var tgdh1 = dw_list.GetItemString(row, "tgdh", true);

            var ytjkfscs = dw_list.GetItemNumber(row, "ytjkfscs")
            if (ytjkfscs > 0 && tgdh1.length > 1) {
                dw_list.SetItem(row, "bghbjxgbz", "Y");
            } else {
                var bghbjxgbz = dw_list.GetItemString(row, "bghbjxgbz")
                if (bghbjxgbz != "Y") {
                    dw_list.SetItem(row, "bghbjxgbz", "N");
                }
            }
        }

        if (dwoName == "gjczbz") {
            var ywy = requestor.GetParm("userid");
            var date = new Date();
            if (data == "Y") {
                dw_list.SetItem(row, "gjczsj", date.getVarDate())
                dw_list.SetItem(row, "gjczry", ywy)
            } else {
                dw_list.SetItem(row, "gjczsj", date.getVarDate())
                dw_list.SetItem(row, "gjczry", ywy)
            }
        }
        if (dwoName == "yw_hddz_xc2ccy") {
            var ywy = requestor.GetParm("userid");
            dw_list.SetItem(row, "yw_hddz_xc2ccy_lrry", ywy);
            var date = new Date();
            dw_list.SetItem(row, "yw_hddz_xc2ccy_lrrq", date.getVarDate());

        }

        if (dwoName == "xccy") {
            dw_list.AcceptText();
            var ywy = requestor.GetParm("userid");
            var date = new Date();
            if (data == "Y") {
                var jydbm = dw_list.GetItemString(row, "jydbm");
                if (jydbm.length < 1) {
                    var mrjydbm = dw_list.GetItemString(row, "mrjydbm");
                    var mrjyd = dw_list.GetItemString(row, "mrjyd");
                    var mrjydjc = dw_list.GetItemString(row, "mrjydjc");
                    var mrjydpym = dw_list.GetItemString(row, "mrjydpym");

                    dw_list.SetItem(row, "jydbm", mrjydbm);
                    dw_list.SetItem(row, "jyd", mrjyd);
                    dw_list.SetItem(row, "jydjc", mrjydjc);
                    dw_list.SetItem(row, "jydpym", mrjydpym);
                }
                dw_list.SetItem(row, "xccy_lrry", ywy);
                dw_list.SetItem(row, "xccy_lrsj", date.getVarDate());
                dw_list.SetItem(row, "cktgsj", date.getVarDate());
            } else {
                dw_list.SetItem(row, "jydbm", "");
                dw_list.SetItem(row, "jyd", "");
                dw_list.SetItem(row, "jydjc", "");
                dw_list.SetItem(row, "jydpym", "");

                dw_list.SetItem(row, "xccy_lrry", ywy);
                dw_list.SetItem(row, "xccy_lrsj", date.getVarDate());
                dw_list.SetItem(row, "cktgsj", date.getVarDate());

            }


        }
        if (dwoName == "yw_hddz_xc2ccy") {
            var yw_hddz_xc2ccy = dw_list.GetItemString(row, "yw_hddz_xc2ccy");
            var xccy = dw_list.GetItemString(row, "xccy");

            if (xccy != null && xccy != '') {
                if (xccy != data) {
                    alert("现场检疫不一致，请确认！");
                }
            }
        }

        if (dwoName == "xccy") {
            var yw_hddz_xc2ccy = dw_list.GetItemString(row, "yw_hddz_xc2ccy");
            var xccy = dw_list.GetItemString(row, "xccy");

            if (yw_hddz_xc2ccy != null && yw_hddz_xc2ccy != '') {
                if (yw_hddz_xc2ccy != data) {
                    alert("现场检疫不一致，请确认！");
                }
            }
        }
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

    //#region 过滤报关单号
    this.slebgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(yw_hddz_bgdh) like Upper('%" + text + "%'))");
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


    //#region 过滤报检号
    this.slebjh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(bjh) like Upper('%" + text + "%'))");
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

        var userid = requestor.GetParm("userid");
        var date = new Date();

        for (var i = 1; i <= dw_list.RowCount(); i++) {
            if (dw_list.GetItemStatus(i, "xccy", DWBUFFER.Primary) == 1) {
                var insertrow = dw_xccy.InsertRow(0);
                dw_xccy.SetItem(insertrow, "ywbh", dw_list.GetItemString(i, "ywbh"));
                dw_xccy.SetItem(insertrow, "zbr", userid);
                dw_xccy.SetItem(insertrow, "zbrq", date.getVarDate());
                dw_xccy.SetItem(insertrow, "xccy", dw_list.GetItemString(i, "xccy"));
            }
        }

        //数据同步生鲜港
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {

                var ywbh = dw_list.GetItemString(i, "ywbh");
                //                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max"); //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz");
                dw_log.SetItem(row, "changecols", "bjh,tgdh,wsbjsj,cktgsj,xccy");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.ScrollToRow(row);
            }

            if (dw_list.GetItemStatus(i, "xccy", DWBUFFER.Primary) == 1) {
                var ywbh = dw_list.GetItemString(i, "ywbh");
                var xccy = dw_list.GetItemString(i, "xccy");
                var num = QsWebSoft.PubMethod.UpdateJzxxxXccy(ywbh, xccy).value;
            }
        }

        dw_log.AcceptText();

        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        dw_xccy.AcceptText()
        var dw_xccy_data = dw_xccy.GetChanges();  //获取改变的
        if (dw_xccy_data == "")

        //执行保存的WebService
            webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListJySave", "dw_list=" + dw_d_data + "&dw_log=" + dw_log_data + "&dw_xccy=" + dw_xccy_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            dw_xccy.ResetUpdate();
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
        javascript: window.open('\报检.txt')
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

        iw_Hddz_Ycyy.SetDataWindow(dw_list);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(Row);
        iw_Hddz_Ycyy.SetYybm("0105");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

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
        if (Row > 0) {  fzjs_row   = Row;   }
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
