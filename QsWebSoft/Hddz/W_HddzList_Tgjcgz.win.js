///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Tgjcgz() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_3= new ToolStrip( requestor );
	 var sle_gwgys= new SingleLineEdit( requestor );
	 var sle_sp= new SingleLineEdit( requestor );
	 var sle_jzxh= new SingleLineEdit( requestor );
	 var sle_ycd= new SingleLineEdit( requestor );
	 var ddlb_jdrjc= new DropDownListBox( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_kh= new SingleLineEdit( requestor );
	 var sle_hth= new SingleLineEdit( requestor );
	 var sle_ztdh= new SingleLineEdit( requestor );
	 var sle_cm= new SingleLineEdit( requestor );
	 var sle_hc= new SingleLineEdit( requestor );
	 var sle_cyr= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var cbx_xszj= new CheckBox( requestor );
	 var ddlb_sjzt= new DropDownListBox( requestor );
	 var ddlb_qgzt= new DropDownListBox( requestor );
	 var ddlb_hdzt= new DropDownListBox( requestor );
	 var ddlb_bjsbzt= new DropDownListBox( requestor );
	 var ddlb_bjzt= new DropDownListBox( requestor );
	 var dw_print= new DataWindow( requestor );
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
		 if(sle_gwgys == null ) sle_gwgys= new SingleLineEdit( requestor );
		 sle_gwgys.Attach( win.Control( "sle_gwgys") ); 
		 if(sle_sp == null ) sle_sp= new SingleLineEdit( requestor );
		 sle_sp.Attach( win.Control( "sle_sp") ); 
		 if(sle_jzxh == null ) sle_jzxh= new SingleLineEdit( requestor );
		 sle_jzxh.Attach( win.Control( "sle_jzxh") ); 
		 if(sle_ycd == null ) sle_ycd= new SingleLineEdit( requestor );
		 sle_ycd.Attach( win.Control( "sle_ycd") ); 
		 if(ddlb_jdrjc == null ) ddlb_jdrjc= new DropDownListBox( requestor );
		 ddlb_jdrjc.Attach( win.Control( "ddlb_jdrjc") ); 
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
		 if(sle_ztdh == null ) sle_ztdh= new SingleLineEdit( requestor );
		 sle_ztdh.Attach( win.Control( "sle_ztdh") ); 
		 if(sle_cm == null ) sle_cm= new SingleLineEdit( requestor );
		 sle_cm.Attach( win.Control( "sle_cm") ); 
		 if(sle_hc == null ) sle_hc= new SingleLineEdit( requestor );
		 sle_hc.Attach( win.Control( "sle_hc") ); 
		 if(sle_cyr == null ) sle_cyr= new SingleLineEdit( requestor );
		 sle_cyr.Attach( win.Control( "sle_cyr") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(cbx_xszj == null ) cbx_xszj= new CheckBox( requestor );
		 cbx_xszj.Attach( win.Control( "cbx_xszj") ); 
		 if(ddlb_sjzt == null ) ddlb_sjzt= new DropDownListBox( requestor );
		 ddlb_sjzt.Attach( win.Control( "ddlb_sjzt") ); 
		 if(ddlb_qgzt == null ) ddlb_qgzt= new DropDownListBox( requestor );
		 ddlb_qgzt.Attach( win.Control( "ddlb_qgzt") ); 
		 if(ddlb_hdzt == null ) ddlb_hdzt= new DropDownListBox( requestor );
		 ddlb_hdzt.Attach( win.Control( "ddlb_hdzt") ); 
		 if(ddlb_bjsbzt == null ) ddlb_bjsbzt= new DropDownListBox( requestor );
		 ddlb_bjsbzt.Attach( win.Control( "ddlb_bjsbzt") ); 
		 if(ddlb_bjzt == null ) ddlb_bjzt= new DropDownListBox( requestor );
		 ddlb_bjzt.Attach( win.Control( "ddlb_bjzt") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
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

		 if(typeof(self.dw_List_LButtonDown)=="function") 
			 win.AttachEvent("dw_list","LButtonDown",self.dw_List_LButtonDown); 

		 if(typeof(self.dw_List_MouseMove)=="function") 
			 win.AttachEvent("dw_list","MouseMove",self.dw_List_MouseMove); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.slegwgysmc_EditChanged)=="function") 
			 win.AttachEvent("sle_gwgys","EditChanged",self.slegwgysmc_EditChanged); 

		 if(typeof(self.slegwgysmc_EditChanged)=="function") 
			 win.AttachEvent("sle_sp","EditChanged",self.slegwgysmc_EditChanged); 

		 if(typeof(self.slehz_jzxh_EditChanged)=="function") 
			 win.AttachEvent("sle_jzxh","EditChanged",self.slehz_jzxh_EditChanged); 

		 if(typeof(self.sleycd_EditChanged)=="function") 
			 win.AttachEvent("sle_ycd","EditChanged",self.sleycd_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_jdrjc","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.slekh_EditChanged)=="function") 
			 win.AttachEvent("sle_kh","EditChanged",self.slekh_EditChanged); 

		 if(typeof(self.slehth_EditChanged)=="function") 
			 win.AttachEvent("sle_hth","EditChanged",self.slehth_EditChanged); 

		 if(typeof(self.sleztdh_EditChanged)=="function") 
			 win.AttachEvent("sle_ztdh","EditChanged",self.sleztdh_EditChanged); 

		 if(typeof(self.slecm_EditChanged)=="function") 
			 win.AttachEvent("sle_cm","EditChanged",self.slecm_EditChanged); 

		 if(typeof(self.slehcorhbh_EditChanged)=="function") 
			 win.AttachEvent("sle_hc","EditChanged",self.slehcorhbh_EditChanged); 

		 if(typeof(self.slecyr_EditChanged)=="function") 
			 win.AttachEvent("sle_cyr","EditChanged",self.slecyr_EditChanged); 

		 if(typeof(self.Help)=="function") 
			 win.AttachEvent("btn_bzsm","Clicked",self.Help); 

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

		 if(typeof(self.cbx_xszj_Clicked)=="function") 
			 win.AttachEvent("cbx_xszj","Clicked",self.cbx_xszj_Clicked); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sjzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_qgzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_hdzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_bjsbzt","SelectionChanged",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_bjzt","SelectionChanged",self.Retrieve); 

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
		 sle_gwgys.Detach(); sle_gwgys=null; 
		 sle_sp.Detach(); sle_sp=null; 
		 sle_jzxh.Detach(); sle_jzxh=null; 
		 sle_ycd.Detach(); sle_ycd=null; 
		 ddlb_jdrjc.Detach(); ddlb_jdrjc=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 tb_2.Detach(); tb_2=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_kh.Detach(); sle_kh=null; 
		 sle_hth.Detach(); sle_hth=null; 
		 sle_ztdh.Detach(); sle_ztdh=null; 
		 sle_cm.Detach(); sle_cm=null; 
		 sle_hc.Detach(); sle_hc=null; 
		 sle_cyr.Detach(); sle_cyr=null; 
		 tb_1.Detach(); tb_1=null; 
		 cbx_xszj.Detach(); cbx_xszj=null; 
		 ddlb_sjzt.Detach(); ddlb_sjzt=null; 
		 ddlb_qgzt.Detach(); ddlb_qgzt=null; 
		 ddlb_hdzt.Detach(); ddlb_hdzt=null; 
		 ddlb_bjsbzt.Detach(); ddlb_bjsbzt=null; 
		 ddlb_bjzt.Detach(); ddlb_bjzt=null; 
		 dw_print.Detach(); dw_print=null; 
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
    var iw_Hddz_Beizhu = null;

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
        var beginDate = new Date(dp_begin.GetValue());
        var endDate = new Date(dp_end.GetValue());
        var sjzt = ddlb_sjzt.GetText();
        var xszjzt = cbx_xszj.GetChecked();
        var xszj = "qb"
        var qgzt = ddlb_qgzt.GetText();
        var hdzt = ddlb_hdzt.GetText();
        var bjzt = ddlb_bjzt.GetText();
        var bjsbzt = ddlb_bjsbzt.GetText();
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

        if (xszjzt) {
            xszj = userid
        }
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), sjzt, xszj, qgzt, hdzt, bjzt, Dlwtf, Tybm, Sfqytybm, bjsbzt, userid, jdrjc);

    }
    //#endregion

    this.cbx_xszj_Clicked = function () {
        self.Retrieve();
    }

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

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0 && dwoName == "ywbh") {
            self.OpenWindow();
        } else if (dwoName == "beizhu") {
            self.AddBeizhu(Row);
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

    //#region 过滤主提单号
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

    //#region 过滤船名
    this.slecm_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(cm) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion


    //#region 过滤航次
    this.slehcorhbh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hcorhbh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion  

    //#region 承运人
    this.slecyr_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(cyr) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

   
    //#region 原产地
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

    //#region 国外供应商
    this.slegwgysmc_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(gwgysmc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 商品
    this.slehz_spmc_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hz_spmc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 集装箱号
    this.slehz_jzxh_EditChanged = function (text) {
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


    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Hd", "dw_hddz_list_Hd");
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
        webReq.Invoke("ListTgjcgzSave", "dw_list=" + dw_d_data);

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
        iw_Hddz_Beizhu.SetDataWindow(dw_list);
        iw_Hddz_Beizhu.SetData(ywbh);
        iw_Hddz_Beizhu.SetRow(Row);
        iw_Hddz_Beizhu.SetZbr(zbr);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Beizhu", iw_Hddz_Beizhu);
        self.Retrieve()
      
    }
    //#endregion

    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\海运通关进程跟踪.txt')
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
        iw_Hddz_Ycyy.SetYybm("01");
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
