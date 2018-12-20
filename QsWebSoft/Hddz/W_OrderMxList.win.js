///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_OrderMxList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_filter= new DataWindow( requestor );
	 var dw_list= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_kh= new SingleLineEdit( requestor );
	 var sle_hth= new SingleLineEdit( requestor );
	 var sle_tdh= new SingleLineEdit( requestor );
	 var sle_3= new SingleLineEdit( requestor );
	 var sle_4= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var rb_qb= new RadioButton( requestor );
	 var rb_hy= new RadioButton( requestor );
	 var rb_ky= new RadioButton( requestor );
	 var sle_2= new SingleLineEdit( requestor );
	 var sle_tgdh= new SingleLineEdit( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
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
		 if(sle_kh == null ) sle_kh= new SingleLineEdit( requestor );
		 sle_kh.Attach( win.Control( "sle_kh") ); 
		 if(sle_hth == null ) sle_hth= new SingleLineEdit( requestor );
		 sle_hth.Attach( win.Control( "sle_hth") ); 
		 if(sle_tdh == null ) sle_tdh= new SingleLineEdit( requestor );
		 sle_tdh.Attach( win.Control( "sle_tdh") ); 
		 if(sle_3 == null ) sle_3= new SingleLineEdit( requestor );
		 sle_3.Attach( win.Control( "sle_3") ); 
		 if(sle_4 == null ) sle_4= new SingleLineEdit( requestor );
		 sle_4.Attach( win.Control( "sle_4") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(rb_qb == null ) rb_qb= new RadioButton( requestor );
		 rb_qb.Attach( win.Control( "rb_qb") ); 
		 if(rb_hy == null ) rb_hy= new RadioButton( requestor );
		 rb_hy.Attach( win.Control( "rb_hy") ); 
		 if(rb_ky == null ) rb_ky= new RadioButton( requestor );
		 rb_ky.Attach( win.Control( "rb_ky") ); 
		 if(sle_2 == null ) sle_2= new SingleLineEdit( requestor );
		 sle_2.Attach( win.Control( "sle_2") ); 
		 if(sle_tgdh == null ) sle_tgdh= new SingleLineEdit( requestor );
		 sle_tgdh.Attach( win.Control( "sle_tgdh") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 

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

		 if(typeof(self.dw_List_EntertoTab)=="function") 
			 win.AttachEvent("dw_list","KeyDown",self.dw_List_EntertoTab); 

		 if(typeof(self.dw_List_LButtonDown)=="function") 
			 win.AttachEvent("dw_list","LButtonDown",self.dw_List_LButtonDown); 

		 if(typeof(self.dw_List_MouseMove)=="function") 
			 win.AttachEvent("dw_list","MouseMove",self.dw_List_MouseMove); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.slekh_EditChanged)=="function") 
			 win.AttachEvent("sle_kh","EditChanged",self.slekh_EditChanged); 

		 if(typeof(self.slehth_EditChanged)=="function") 
			 win.AttachEvent("sle_hth","EditChanged",self.slehth_EditChanged); 

		 if(typeof(self.sletdh_EditChanged)=="function") 
			 win.AttachEvent("sle_tdh","EditChanged",self.sletdh_EditChanged); 

		 if(typeof(self.slegwgys_EditChanged)=="function") 
			 win.AttachEvent("sle_3","EditChanged",self.slegwgys_EditChanged); 

		 if(typeof(self.sleSp_EditChanged)=="function") 
			 win.AttachEvent("sle_4","EditChanged",self.sleSp_EditChanged); 

		 if(typeof(self.Help)=="function") 
			 win.AttachEvent("btn_help","Clicked",self.Help); 

		 if(typeof(self.New)=="function") 
			 win.AttachEvent("btn_new","Clicked",self.New); 

		 if(typeof(self.Copy)=="function") 
			 win.AttachEvent("btn_duplicate","Clicked",self.Copy); 

		 if(typeof(self.Delete)=="function") 
			 win.AttachEvent("btn_delete","Clicked",self.Delete); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.PrintContract)=="function") 
			 win.AttachEvent("合同打印ToolStripMenuItem","Clicked",self.PrintContract); 

		 if(typeof(self.PrintInvoice)=="function") 
			 win.AttachEvent("发票打印ToolStripMenuItem","Clicked",self.PrintInvoice); 

		 if(typeof(self.PrintPackingList)=="function") 
			 win.AttachEvent("箱单打印ToolStripMenuItem","Clicked",self.PrintPackingList); 

		 if(typeof(self.PrintZthqksm)=="function") 
			 win.AttachEvent("直提货情况说明ToolStripMenuItem","Clicked",self.PrintZthqksm); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.RetrieveQb)=="function") 
			 win.AttachEvent("rb_qb","Clicked",self.RetrieveQb); 

		 if(typeof(self.RetrieveHy)=="function") 
			 win.AttachEvent("rb_hy","Clicked",self.RetrieveHy); 

		 if(typeof(self.RetrieveKy)=="function") 
			 win.AttachEvent("rb_ky","Clicked",self.RetrieveKy); 

		 if(typeof(self.sleycd_EditChanged)=="function") 
			 win.AttachEvent("sle_2","EditChanged",self.sleycd_EditChanged); 

		 if(typeof(self.sleTgdh_EditChanged)=="function") 
			 win.AttachEvent("sle_tgdh","EditChanged",self.sleTgdh_EditChanged); 

		 if(typeof(self.sleBgdh_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sleBgdh_EditChanged); 

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

		 dw_filter.Detach(); dw_filter=null; 
		 dw_list.Detach(); dw_list=null; 
		 tb_2.Detach(); tb_2=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_kh.Detach(); sle_kh=null; 
		 sle_hth.Detach(); sle_hth=null; 
		 sle_tdh.Detach(); sle_tdh=null; 
		 sle_3.Detach(); sle_3=null; 
		 sle_4.Detach(); sle_4=null; 
		 tb_1.Detach(); tb_1=null; 
		 rb_qb.Detach(); rb_qb=null; 
		 rb_hy.Detach(); rb_hy=null; 
		 rb_ky.Detach(); rb_ky=null; 
		 sle_2.Detach(); sle_2=null; 
		 sle_tgdh.Detach(); sle_tgdh=null; 
		 sle_1.Detach(); sle_1=null; 
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
var iw_Bgdj_Slwts = null;
var dwc = new DataWindowChild();
var dwoname = "";
var cloname = "";

var iw_Hddz_Beizhu = null;
var iw_Fj_Edit = null;
var iw_Test = null;
var iw_Main1 = null;

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

    self.RetrieveQb();
}
//#endregion

//#region 自己查询
this.Retrieve = function () {
    var beginDate = new Date(dp_begin.GetValue());
    var endDate = new Date(dp_end.GetValue());



    //把开始日期的时间部分设置为 00:00:00
    beginDate.setHours(0);
    beginDate.setMinutes(0);
    beginDate.setSeconds(0);

    //把结束日期的时间部分设置为 23:59:59
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);

    if (endDate <= beginDate) {
        requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
        dp_begin.SetFocus();
        return;
    }


    var userid = requestor.GetParm("userid");
    var ShareMode = requestor.GetParm("ShareMode");
    var Dlwtf = requestor.GetParm("Dlwtf");
    var lx = ""

    if (rb_qb.GetChecked() == true) {
        lx = "qb"
    } else
        if (rb_hy.GetChecked() == true) {
            lx = "hy"
        }
        else
            if (rb_ky.GetChecked() == true) {
                lx = "ky"
            }
            dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), lx);

}
//#endregion



//#region 全部查询
this.RetrieveQb = function () {
    var beginDate = new Date(dp_begin.GetValue());
    var endDate = new Date(dp_end.GetValue());


    //把开始日期的时间部分设置为 00:00:00
    beginDate.setHours(0);
    beginDate.setMinutes(0);
    beginDate.setSeconds(0);

    //把结束日期的时间部分设置为 23:59:59
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);


    if (endDate <= beginDate) {
        requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
        dp_Begin.SetFocus();
        return;
    }

    var userid = requestor.GetParm("userid");
    var ShareMode = requestor.GetParm("ShareMode");
    var Dlwtf = requestor.GetParm("Dlwtf");

    dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), "qb");

}
//#endregion

//#region 海运查询
this.RetrieveHy = function () {
    var beginDate = new Date(dp_begin.GetValue());
    var endDate = new Date(dp_end.GetValue());


    //把开始日期的时间部分设置为 00:00:00
    beginDate.setHours(0);
    beginDate.setMinutes(0);
    beginDate.setSeconds(0);

    //把结束日期的时间部分设置为 23:59:59
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);

    if (endDate <= beginDate) {
        requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
        dp_Begin.SetFocus();
        return;
    }

    var userid = requestor.GetParm("userid");
    var ShareMode = requestor.GetParm("ShareMode");
    var Dlwtf = requestor.GetParm("Dlwtf");

    dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), "hy");

}
//#endregion



//#region 空运查询
this.RetrieveKy = function () {
    var beginDate = new Date(dp_begin.GetValue());
    var endDate = new Date(dp_end.GetValue());


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

    dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), "ky");

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
    //        var operation = requestor.GetParm("operation");
    //失效按钮的控制
    var zbr = dw_list.GetItemString(dw_list.GetRow(), "zbr");
    var userid = requestor.GetParm("userid");
    var operation
    if (ywy == userid || zbr == userid) {
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
        ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString(), true);



}
//#endregion



//#region 双击
this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
    if (Row > 0) {
        if (dwoName == "ywbh") {
            self.OpenWindow();
        }
        else if (dwoName == "fj") {
            if (iw_Fj_Edit == null)
                iw_Fj_Edit = new W_Fj_Edit();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var ywbh = dw_list.GetItemString(Row, "ywbh");
            var lx = "hddz"
            requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
            dw_list.SetFocus();
            dw_list.ScrollToRow(Row)
        }
        else if (dwoName == "beizhu") {
            self.AddBeizhu(Row);
        }


    }
}
//#endregion





//    //#region 单击明细单编号
//    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName,Data) {
//        if (Row > 0)
//            if (dwoName == "hz_jzxh") {
//                mle_jzxh.Show()
//                var hz_jzxh = dw_list.GetItemString(Row, "hz_jzxh")
//                mle_jzxh.SetText(hz_jzxh);
//                mle_jzxh.Move(xPos + 600, yPos + 450)

//            }  else {
//                mle_jzxh.Hide()
//            }
//    }
//        //#endregion

//#region 修改数据窗口内容dw_List_ItemChanged
this.dw_List_ItemChanged = function (row, dwoName, data) {
    if (dwoName == "hdzljcbz") {
        var date = new Date();
        var date_null = new Date("1900/1/1");
        if (data == "Y") {
            dw_list.SetItem(row, "hdzljcsj", date.getVarDate())
        } else {
            dw_list.SetItem(row, "hdzljcsj", date_null.getVarDate())
        }

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
    var node = "000110";
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
        ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh + '&operation=' + operation.toString(), true);

}
//#endregion

//#region 删除
this.Delete = function () {

    var row = dw_list.GetRow();
    if (row <= 0)
        retturn;



    //        dw_list.ReSelectRow(row);
    //        dw_list.RefreshDetails();

    var status = dw_list.GetItemString(row, "state");

    if (status != "新制") {
        requestor.MessageBox("提示", "当前货代单证的状态为<" + status + ">,不能被删除!", 1);
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
        dw_list.SetFilter("( Upper(kh) like Upper('%" + text + "%'))");
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
        dw_list.SetFilter("( Upper(number) like Upper('%" + text + "%'))");
    dw_list.Filter();
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion

//#region 过滤通关单号
this.sleTgdh_EditChanged = function (text) {
    dw_list.SetRedraw(false);
    if (text == "")
        dw_list.SetFilter("");
    else
        dw_list.SetFilter("( Upper(inspectionnumber) like Upper('%" + text + "%'))");
    dw_list.Filter();
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion

//#region 过滤报关单号
this.sleBgdh_EditChanged = function (text) {
    dw_list.SetRedraw(false);
    if (text == "")
        dw_list.SetFilter("");
    else
        dw_list.SetFilter("( Upper(customdeclarenum) like Upper('%" + text + "%'))");
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
        dw_list.SetFilter("( Upper(bl_number) like Upper('%" + text + "%'))");
    dw_list.Filter();
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion

//#region 过滤副提单号
this.sleftdh_EditChanged = function (text) {
    dw_list.SetRedraw(false);
    if (text == "")
        dw_list.SetFilter("");
    else
        dw_list.SetFilter("( Upper(ftdh) like Upper('%" + text + "%'))");
    dw_list.Filter();
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion


//#region 过滤国外供应商
this.slegwgys_EditChanged = function (text) {
    dw_list.SetRedraw(false);
    if (text == "")
        dw_list.SetFilter("");
    else
        dw_list.SetFilter("( Upper(gwgys) like Upper('%" + text + "%'))");
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
        dw_list.SetFilter("( Upper(nations_name) like Upper('%" + text + "%'))");
    dw_list.Filter();
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion

//#region 过滤原产地
this.sleSp_EditChanged = function (text) {
    dw_list.SetRedraw(false);
    if (text == "")
        dw_list.SetFilter("");
    else
        dw_list.SetFilter("( Upper(products_name) like Upper('%" + text + "%'))");
    dw_list.Filter();
    dw_list.Sort();
    dw_list.SetRedraw(true);
}
//#endregion




//#region 过滤集装箱号
this.sleJzxh_EditChanged = function (text) {
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

    QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList", "dw_hddz_list");
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

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("ListSave", "dw_list=" + dw_d_data);

    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号      
        dw_list.ResetUpdate();

        requestor.MessageBox("提示", "数据保存成功!");
        dw_list.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_list.SetFocus();
    }
}
//#endregion  

//#region 增加备注
var iw_Hddz_Beizhu = null;
this.AddBeizhu = function (Row) {
    if (iw_Hddz_Beizhu == null)
        iw_Hddz_Beizhu = new W_Hddz_Beizhu();

    var Dlwtf = requestor.GetParm("Dlwtf");
    var ywbh = dw_list.GetItemString(Row, "ywbh")
    var zbr = dw_list.GetItemString(Row, "zbr")
    var userid = requestor.GetParm("userid");
    //        if (zbr == userid) {
    iw_Hddz_Beizhu.SetDataWindow(dw_list);
    iw_Hddz_Beizhu.SetData(ywbh);
    iw_Hddz_Beizhu.SetRow(Row);
    iw_Hddz_Beizhu.SetZbr(zbr);
    requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Beizhu", iw_Hddz_Beizhu);
    self.Retrieve()
    //        }
}
//#endregion

//#region 获得字段焦点
this.Help = function () {
    //            javascript: window.open('\货代单证.txt')
    javascript: window.open('\aa.docx')
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
    iw_Hddz_Ycyy.SetYybm("0101");
    requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

}
//#endregion



this.Btn = function (Row) {

    //            if (iw_Test == null)
    //                iw_Test = new W_Test();

    //            requestor.Open("\WebForm1.aspx.cs.");

    //        }

    //         string strConn = "uid=sa;pwd=a6023;database=zjnb;server=180.166.207.114";
    //            SqlConnection ConnSql=new SqlConnection (strConn); 
    //            ConnSql.Open ();
    //             string strSQL="SELECT * FROM yw_hddz where datediff(yy,zbrq,getdate()) = 0 ";
    //            SqlDataAdapter da=new SqlDataAdapter(strSQL,ConnSql);         
    //            DataSet ds=new DataSet();
    //            da.Fill(ds);
    //            ds.WriteXml("aaa.xml");

    //            javascript: window.open("\Hddz\HTMLPage1.htm")
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
