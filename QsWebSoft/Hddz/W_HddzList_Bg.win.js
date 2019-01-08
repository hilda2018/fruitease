///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_HddzList_Bg() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var dw_filter = new DataWindow(requestor);
    var dw_bsnr = new DataWindow(requestor);
    var dw_print_dlbgwts = new DataWindow(requestor);
    var dw_print_bzjsqs = new DataWindow(requestor);
    var dw_print_qksm = new DataWindow(requestor);
    var dw_print = new DataWindow(requestor);
    var dw_print_hczm = new DataWindow(requestor);
    var tb_3 = new ToolStrip(requestor);
    var sle_jzxh = new SingleLineEdit(requestor);
    var cbx_ycsj = new CheckBox(requestor);
    var ddlb_jdrjc = new DropDownListBox(requestor);
    var tb_2 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_kh = new SingleLineEdit(requestor);
    var sle_sdtt = new SingleLineEdit(requestor);
    var sle_hth = new SingleLineEdit(requestor);
    var sle_tdh = new SingleLineEdit(requestor);
    var sle_2 = new SingleLineEdit(requestor);
    var sle_bghg = new SingleLineEdit(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ddlb_bgzt = new DropDownListBox(requestor);
    var dw_log = new DataWindow(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);
    var ds_role = new DataStore(requestor);
    var ds_spxx = new DataStore(requestor);
    var ds_zzxx = new DataStore(requestor);
    var ds_jzxxx = new DataStore(requestor);
    var ds_master = new DataStore(requestor);
    var ds_fsdz = new DataStore(requestor);
    var ds_2 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (dw_bsnr == null) dw_bsnr = new DataWindow(requestor);
        dw_bsnr.Attach(win.Control("dw_bsnr"));
        if (dw_print_dlbgwts == null) dw_print_dlbgwts = new DataWindow(requestor);
        dw_print_dlbgwts.Attach(win.Control("dw_print_dlbgwts"));
        if (dw_print_bzjsqs == null) dw_print_bzjsqs = new DataWindow(requestor);
        dw_print_bzjsqs.Attach(win.Control("dw_print_bzjsqs"));
        if (dw_print_qksm == null) dw_print_qksm = new DataWindow(requestor);
        dw_print_qksm.Attach(win.Control("dw_print_qksm"));
        if (dw_print == null) dw_print = new DataWindow(requestor);
        dw_print.Attach(win.Control("dw_print"));
        if (dw_print_hczm == null) dw_print_hczm = new DataWindow(requestor);
        dw_print_hczm.Attach(win.Control("dw_print_hczm"));
        if (tb_3 == null) tb_3 = new ToolStrip(requestor);
        tb_3.Attach(win.Control("tb_3"));
        if (sle_jzxh == null) sle_jzxh = new SingleLineEdit(requestor);
        sle_jzxh.Attach(win.Control("sle_jzxh"));
        if (cbx_ycsj == null) cbx_ycsj = new CheckBox(requestor);
        cbx_ycsj.Attach(win.Control("cbx_ycsj"));
        if (ddlb_jdrjc == null) ddlb_jdrjc = new DropDownListBox(requestor);
        ddlb_jdrjc.Attach(win.Control("ddlb_jdrjc"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (sle_kh == null) sle_kh = new SingleLineEdit(requestor);
        sle_kh.Attach(win.Control("sle_kh"));
        if (sle_sdtt == null) sle_sdtt = new SingleLineEdit(requestor);
        sle_sdtt.Attach(win.Control("sle_sdtt"));
        if (sle_hth == null) sle_hth = new SingleLineEdit(requestor);
        sle_hth.Attach(win.Control("sle_hth"));
        if (sle_tdh == null) sle_tdh = new SingleLineEdit(requestor);
        sle_tdh.Attach(win.Control("sle_tdh"));
        if (sle_2 == null) sle_2 = new SingleLineEdit(requestor);
        sle_2.Attach(win.Control("sle_2"));
        if (sle_bghg == null) sle_bghg = new SingleLineEdit(requestor);
        sle_bghg.Attach(win.Control("sle_bghg"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ddlb_bgzt == null) ddlb_bgzt = new DropDownListBox(requestor);
        ddlb_bgzt.Attach(win.Control("ddlb_bgzt"));
        if (dw_log == null) dw_log = new DataWindow(requestor);
        dw_log.Attach(win.Control("dw_log"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));
        if (ds_role == null) ds_role = new DataStore(requestor);
        ds_role.Attach(win.Control("ds_role"));
        if (ds_spxx == null) ds_spxx = new DataStore(requestor);
        ds_spxx.Attach(win.Control("ds_spxx"));
        if (ds_zzxx == null) ds_zzxx = new DataStore(requestor);
        ds_zzxx.Attach(win.Control("ds_zzxx"));
        if (ds_jzxxx == null) ds_jzxxx = new DataStore(requestor);
        ds_jzxxx.Attach(win.Control("ds_jzxxx"));
        if (ds_master == null) ds_master = new DataStore(requestor);
        ds_master.Attach(win.Control("ds_master"));
        if (ds_fsdz == null) ds_fsdz = new DataStore(requestor);
        ds_fsdz.Attach(win.Control("ds_fsdz"));
        if (ds_2 == null) ds_2 = new DataStore(requestor);
        ds_2.Attach(win.Control("ds_2"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_List_DoubleClicked) == "function")
            win.AttachEvent("dw_list", "DoubleClicked", self.dw_List_DoubleClicked);

        if (typeof (self.dw_List_DwnMouseMove) == "function")
            win.AttachEvent("dw_list", "DwnMouseMove", self.dw_List_DwnMouseMove);

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.dw_List_LButtonDown) == "function")
            win.AttachEvent("dw_list", "LButtonDown", self.dw_List_LButtonDown);

        if (typeof (self.dw_List_MouseMove) == "function")
            win.AttachEvent("dw_list", "MouseMove", self.dw_List_MouseMove);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_list", "RButtonDown", self.RbuttonDown);

        if (typeof (self.text) == "function")
            win.AttachEvent("btn_1", "Clicked", self.text);

        if (typeof (self.sle_hz_jzxh_EditChanged) == "function")
            win.AttachEvent("sle_jzxh", "EditChanged", self.sle_hz_jzxh_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("cbx_ycsj", "Clicked", self.Retrieve);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_jdrjc", "SelectionChanged", self.Retrieve);

        if (typeof (self.jdzdy_clicked) == "function")
            win.AttachEvent("btn_4", "Clicked", self.jdzdy_clicked);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.slekh_EditChanged) == "function")
            win.AttachEvent("sle_kh", "EditChanged", self.slekh_EditChanged);

        if (typeof (self.slesdtt_EditChanged) == "function")
            win.AttachEvent("sle_sdtt", "EditChanged", self.slesdtt_EditChanged);

        if (typeof (self.slehth_EditChanged) == "function")
            win.AttachEvent("sle_hth", "EditChanged", self.slehth_EditChanged);

        if (typeof (self.sleztdh_EditChanged) == "function")
            win.AttachEvent("sle_tdh", "EditChanged", self.sleztdh_EditChanged);

        if (typeof (self.slebgdh_EditChanged) == "function")
            win.AttachEvent("sle_2", "EditChanged", self.slebgdh_EditChanged);

        if (typeof (self.slebghg_EditChanged) == "function")
            win.AttachEvent("sle_bghg", "EditChanged", self.slebghg_EditChanged);

        if (typeof (self.Help) == "function")
            win.AttachEvent("btn_Help", "Clicked", self.Help);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.OpenYtjk) == "function")
            win.AttachEvent("btn_3", "Clicked", self.OpenYtjk);

        if (typeof (self.OpenYtjk2018) == "function")
            win.AttachEvent("btn_dkytjk2018", "Clicked", self.OpenYtjk2018);

        if (typeof (self.Ytsjjc) == "function")
            win.AttachEvent("btn_ytsjjc", "Clicked", self.Ytsjjc);

        if (typeof (self.OpenWindow) == "function")
            win.AttachEvent("btn_open", "Clicked", self.OpenWindow);

        if (typeof (self.Print) == "function")
            win.AttachEvent("btn_2", "Clicked", self.Print);

        if (typeof (self.Print_qksm) == "function")
            win.AttachEvent("btn_qksm", "Clicked", self.Print_qksm);

        if (typeof (self.Print_bzjsqs) == "function")
            win.AttachEvent("btn_bzjsqs", "Clicked", self.Print_bzjsqs);

        if (typeof (self.Print_dlbgwts) == "function")
            win.AttachEvent("btn_dlbgwts", "Clicked", self.Print_dlbgwts);

        if (typeof (self.Print_hczm) == "function")
            win.AttachEvent("btn_hczm", "Clicked", self.Print_hczm);

        if (typeof (self.OpenYcyy) == "function")
            win.AttachEvent("btn_ycyy", "Clicked", self.OpenYcyy);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("ddlb_bgzt", "SelectionChanged", self.Retrieve);

        if (typeof (self.Filter) == "function")
            win.AttachEvent("单列过滤ToolStripMenuItem", "Clicked", self.Filter);

        if (typeof (self.Filter_Cancle) == "function")
            win.AttachEvent("取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle);

        if (typeof (self.Dcrz) == "function")
            win.AttachEvent("导出ToolStripMenuItem", "Clicked", self.Dcrz);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

        if (typeof (self.CopySelect) == "function")
            win.AttachEvent("选择复制ToolStripMenuItem", "Clicked", self.CopySelect);

        if (typeof (self.CopyL) == "function")
            win.AttachEvent("整列复制ToolStripMenuItem", "Clicked", self.CopyL);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        dw_filter.Detach(); dw_filter = null;
        dw_bsnr.Detach(); dw_bsnr = null;
        dw_print_dlbgwts.Detach(); dw_print_dlbgwts = null;
        dw_print_bzjsqs.Detach(); dw_print_bzjsqs = null;
        dw_print_qksm.Detach(); dw_print_qksm = null;
        dw_print.Detach(); dw_print = null;
        dw_print_hczm.Detach(); dw_print_hczm = null;
        tb_3.Detach(); tb_3 = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        cbx_ycsj.Detach(); cbx_ycsj = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        tb_2.Detach(); tb_2 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        sle_sdtt.Detach(); sle_sdtt = null;
        sle_hth.Detach(); sle_hth = null;
        sle_tdh.Detach(); sle_tdh = null;
        sle_2.Detach(); sle_2 = null;
        sle_bghg.Detach(); sle_bghg = null;
        tb_1.Detach(); tb_1 = null;
        ddlb_bgzt.Detach(); ddlb_bgzt = null;
        dw_log.Detach(); dw_log = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        ds_role.Detach(); ds_role = null;
        ds_spxx.Detach(); ds_spxx = null;
        ds_zzxx.Detach(); ds_zzxx = null;
        ds_jzxxx.Detach(); ds_jzxxx = null;
        ds_master.Detach(); ds_master = null;
        ds_fsdz.Detach(); ds_fsdz = null;
        ds_2.Detach(); ds_2 = null;
        requestor.Detach(); requestor = null;

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
    var iw_HddzYtjkEdit = null;

    var iw_HddzYtjkEdit2018 = null;

    var iw_HddzYtsjjkCmd = null;

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    var sfqx = false;
    var zdmc = "";

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
        var bgzt = ddlb_bgzt.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var ycsj = "N";
        if (cbx_ycsj.GetChecked() == true) {
            ycsj = "Y";
        }

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
        dw_list.SetRedraw(false);        
        dw_list.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), bgzt, ycsj, userid, jdrjc);
        dw_log.Retrieve(userid, "hybg");
        dw_list.SetRedraw(true);
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
    this.OpenYtjk = function () {
        if (iw_HddzYtjkEdit == null)
            iw_HddzYtjkEdit = new W_HddzYtjkEdit();
    
        
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
        var userid = requestor.GetParm("userid");
        var operation
        operation = "open";
 
       requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_HddzYtjkEdit&ywbh=" + ywbh + "&operation=" + operation.toString(), iw_HddzYtjkEdit);
                 


    }
   //#endregion


   //#region 打开编辑窗口
   this.OpenYtjk2018 = function () {
       if (iw_HddzYtjkEdit2018 == null)

           iw_HddzYtjkEdit2018 = new W_HddzYtjkEdit2018();


       var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh')
       var userid = requestor.GetParm("userid");
       var operation
       operation = "open";

       requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_HddzYtjkEdit2018&ywbh=" + ywbh + "&operation=" + operation.toString(), iw_HddzYtjkEdit2018);



   }
   //#endregion

   this.text = function (xPos, yPos, Row, dwoName) {
        
//       var aa = $.getJSON("http://transport.fruitease.com/index.php/Home/Web/test")
//         $.each(aa.list, function (idx, item) {
//               requestor.MessageBox("1", "cc");
//               if (idx == 0) {
//                   requestor.MessageBox("1", "aa");
//                   return true; //同countinue，返回false同break 
//               }
//               requestor.MessageBox("name:" + item.name + ",value:" + item.value);
//           });

//       
//       requestor.MessageBox("",aa.toString())

//       requestor.MessageBox("1","aa");
//       $.getJSON("http://transport.fruitease.com/index.php/Home/Web/test", function (data) {
//           requestor.MessageBox("1", "bb");
//           $.each(data.list, function (idx, item) {
//               requestor.MessageBox("1", "cc");
//               if (idx == 0) {
//                   requestor.MessageBox("1", "aa");
//                   return true; //同countinue，返回false同break 
//               }
//               requestor.MessageBox("name:" + item.name + ",value:" + item.value);
//           });
//       }); 



//         var agres[2] = new ;
//         Array
//        var aa = QsWebSoft.PubMethod.SendJsonHttpWithPost("http://transport.fruitease.com/index.php/Home/Web/test", agres, "utf8")
//        requestor.MessageBox("", aa.toString());

        //       string url = "http://transport.fruitease.com/index.php/Home/Web/test ";  
        //               WebRequest wRequest = WebRequest.Create(url);  
        //              WebResponse wResponse = wRequest.GetResponse();  
        //            Stream stream = wResponse.GetResponseStream();  
        //           StreamReader reader = new StreamReader(stream, System.Text.Encoding.Default);  
        //                       string r = reader.ReadToEnd();   //url返回的值   

        //            wResponse.Close();  

    }

    //#region 双击
    this.dw_List_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        var readonly = requestor.GetParm("Readonly");

        if (Row > 0)
            if (dwoName == "ywbh") {
                self.OpenWindow();
            } else if (dwoName == "bghg") {
                if (readonly == "no") {
                    if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "hg";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    iw_Wldw_Select.SetDataWindow(dw_list);
                    iw_Wldw_Select.SetData("hddz_bg_bghg");
                    iw_Wldw_Select.SetRow(Row);
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
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
                var lx = "hybg"
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Fj_Edit&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&ywbh=" + ywbh + "&lx=" + lx, iw_Fj_Edit);
                dw_list.SetFocus();

            } else if (dwoName == "bgsj") {
                var bgsj_new = new Date();
                dw_list.SetItem(Row, "bgsj", bgsj_new.getVarDate());
                dw_list.SetItem(Row, "wsbjsj", bgsj_new.getVarDate());

            } else {
                if (iw_HddzYtsjjkCmd == null)
                    iw_HddzYtsjjkCmd = new W_Hddz_Ytsjjk_cmd();
                var ywbh = dw_list.GetItemString(Row, "ywbh");
                requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ytsjjk_cmd&ywbh=" + ywbh, iw_HddzYtsjjkCmd);
            }

        var ywbh = dw_list.GetItemString(Row, "ywbh");

        dw_bsnr.Retrieve(ywbh)

    }
    //#endregion



    function convertDateFromString(dateString) {
        if (dateString) {
            var arr1 = dateString.split(" ");
            var sdate = arr1[0].split('-');
            var date = new Date(sdate[0], sdate[1] - 1, sdate[2]);
            return date;
        }
    }

    //#region dw_list ItemChanged
    this.dw_List_ItemChanged = function (row, dwoName, data) {
        if (dwoName == "bgdh") {
            var date = new Date();

            // dw_list.SetItem(row, "bgsj", date.getVarDate())
            var ywbh = dw_list.GetItemString(row, "ywbh");
            if (data != "" && data != null) {
                QsWebSoft.PubMethod.UpdateBgdhOcrwjsb(ywbh, data).value;
            }
        }
        if (dwoName == "bgsj") {

            dw_list.AcceptText();
            var date = dw_list.GetItemDate(row, "bgsj");

            dw_list.SetItem(row, "wsbjsj", date);

        }
        if (dwoName == "htd") {
            if (data == "Y") {
                var date = new Date();
                dw_list.SetItem(row, "htd_rq", date.getVarDate())
            }
        }
        //        if (dwoName == "sgzq_dyxx") {
        //            if (data == "Y") {
        //                var ztdh = dw_list.GetItemString(row, "ztdh");
        //                var gq = dw_list.GetItemString(row, "gq");
        //                if (ztdh == null || ztdh == "") {
        //                    alert("提单号为空，不能抓取数据!");
        ////                    dw_list.SetItem(row, "sgzq_dyxx", "N");
        //                    return -2;
        //                }
        //                if (gq == null || gq == "") {
        //                    alert("港区为空，不能抓取数据!");
        ////                    dw_list.SetItem(row, "sgzq_dyxx", "N");
        //                    return -2 ;
        //                }
        //            }
        //        }

        if (dwoName == "sjzq_cdrgzqbz") {
            if (data == "Y") {
                var hcorhbh_zq = dw_list.GetItemString(row, "hcorhbh_zq");
                var zz_hcorhbh = dw_list.GetItemString(row, "zz_hcorhbh");
                if (hcorhbh_zq.length > 1) {
                    dw_list.SetItem(row, "sjzq_hc", hcorhbh_zq);
                } else {
                    if (zz_hcorhbh.length > 1) {
                        dw_list.SetItem(row, "sjzq_hc", zz_hcorhbh);
                    } else {
                        dw_list.SetItem(row, "sjzq_hc", dw_list.GetItemString(row, "hcorhbh"));
                    }
                }
                dw_list.SetItem(row, "sjzq_js", dw_list.GetItemNumber(row, "zxs"));
                dw_list.SetItem(row, "sjzq_zl", dw_list.GetItemNumber(row, "zmz"));
                var date = new Date();
                dw_list.SetItem(row, "sjzq_zqcdsj", date.getVarDate());
            } else {
                dw_list.SetItem(row, "sjzq_hc", "");
                dw_list.SetItem(row, "sjzq_js", 0);
                dw_list.SetItem(row, "sjzq_zl", 0);
                var date = new Date("0000/00/00");
                dw_list.SetItem(row, "sjzq_zqcdsj", date.getVarDate());
            };
        }

        if (dwoName == "xc2ccy") {
            var ywy = requestor.GetParm("userid");
            dw_list.SetItem(row, "xc2ccy_lrry", ywy);
            var date = new Date();
            dw_list.SetItem(row, "xc2ccy_lrrq", date.getVarDate());

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
            } else {
                dw_list.SetItem(row, "jydbm", "");
                dw_list.SetItem(row, "jyd", "");
                dw_list.SetItem(row, "jydjc", "");
                dw_list.SetItem(row, "jydpym", "");

                dw_list.SetItem(row, "xccy_lrry", ywy);
                dw_list.SetItem(row, "xccy_lrsj", date.getVarDate());

            }

        }
        if (dwoName == "xc2ccy") {
            var xc2ccy = dw_list.GetItemString(row, "xc2ccy");
            var xccy = dw_list.GetItemString(row, "xccy");

            if (xccy != null && xccy != '') {
                if (xccy != data) {
                    alert("现场检疫不一致，请确认！");
                }
            }
        }

        if (dwoName == "xccy") {
            var xc2ccy = dw_list.GetItemString(row, "xc2ccy");
            var xccy = dw_list.GetItemString(row, "xccy");

            if (xc2ccy != null && xc2ccy != '') {
                if (xc2ccy != data) {
                    alert("现场检疫不一致，请确认！");
                }
            }
        }


    }
    //#endregion

    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
        //        if (dwoName == "bgsj" || dwoName == "bgdh") {
        //            //
        //        }
        //        else {
        //            var ywbh = dw_list.GetItemString(Row, "ywbh")
        //            dw_bsnr.Retrieve(ywbh)
        //        }

        if (Row > 0) {
            fzks_row = Row;
        }

        if (dwoName == "sgzq_dyxx") {

            var ztdh = dw_list.GetItemString(Row, "ztdh");
            var gq = dw_list.GetItemString(Row, "gq");
            var sgzq_dyxx = dw_list.GetItemString(Row, "sgzq_dyxx");

            if (ztdh == null || ztdh == "") {
                alert("提单号为空，不能抓取数据!");
                dw_list.SetItem(Row, "sgzq_dyxx", "N");
                return;
            }
            else {
                if (sgzq_dyxx == "Y") {
                    dw_list.SetItem(Row, "sgzq_dyxx", "N");
                } else {
                    dw_list.SetItem(Row, "sgzq_dyxx", "Y");
                }
            }
            if (gq == null || gq == "") {
                alert("港区为空，不能抓取数据!");
                dw_list.SetItem(Row, "sgzq_dyxx", "N");
                return;
            } else {
                if (sgzq_dyxx == "Y") {
                    dw_list.SetItem(Row, "sgzq_dyxx", "N");
                } else {
                    dw_list.SetItem(Row, "sgzq_dyxx", "Y");
                }
            }

        }

        if (dwoName == "xz_t") {
            var rowcount = dw_list.RowCount();
            if (sfqx == false) {
                for (var i = 1; i <= rowcount; i++) {
                    dw_list.SetItem(i, "xz", "Y");
                }
                sfqx = true;
            } else {
                for (var i = 1; i <= rowcount; i++) {
                    dw_list.SetItem(i, "xz", "N");
                }
                sfqx = false;
            }

        }

    }
    //#endregion

    this.dw_List_RowFocusChanged = function (CurrentRow) {
        
        var ywbh = dw_list.GetItemString(CurrentRow, "ywbh");
       
        dw_bsnr.Retrieve(ywbh)

    }

    //#region 提交
    this.Tj = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var sftj = dw_list.GetItemString(row, "sftj")
        if (sftj == "Y") {
            requestor.MessageBox("提示", "本单据已经提交，不能再提交!")
            return
        }
        else {
            dw_list.SetItem(row, "sftj", "Y");
            var ywbh = dw_list.GetItemString(row,"ywbh");
            dw_list.ResetUpdate();

            var num = QsWebSoft.PubMethod.Gghybgtjzt("Y", ywbh).value;
            if (num = 1) {

                requestor.MessageBox("提示", "数据已提交到货代单证!")
            }
            else {
                requestor.MessageBox("提示", "提交失败!")
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

    //#region 打印
    this.Print_qksm = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_qksm.SetDataObject("dw_hddz_print_qksm");
        dw_print_qksm.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_qksm.PrintPreview();
    }
    //#endregion
    //校对单打印
    this.jdzdy_clicked = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_bzjsqs.SetDataObject("dw_hddz_jyddy_print");
        dw_print_bzjsqs.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_bzjsqs.PrintPreview();
    }
    //#region 打印
    this.Print_bzjsqs = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_bzjsqs.SetDataObject("dw_hddz_print_bzjsqs");
        dw_print_bzjsqs.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_bzjsqs.PrintPreview();
    }
    //#endregion

    //#region 打印
    this.Print_dlbgwts = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        dw_print_dlbgwts.SetDataObject("dw_hddz_print_dlbgwts");
        dw_print_dlbgwts.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
        dw_print_dlbgwts.PrintPreview();
    }
    //#endregion

    

    //#region 打印
    this.Print_hczm = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        //获取选中条数
        var xzs = 0;
        var rowcount = dw_list.RowCount();
        for (var i = 1; i <= rowcount; i++) {
            var xzk = dw_list.GetItemString(i, "xz");
            if (xzk == "Y") {
                xzs += 1;
            }
        }

        //判断选中条数是否为0,为0则打印点击行,不为0则打印选中行
        if (xzs == 0) {
            var row = dw_list.GetRow();
            if (row <= 0)
                return;
            dw_print_hczm.SetDataObject("dw_hddz_print_hczm");
            dw_print_hczm.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "ywbh"));
            dw_print_hczm.PrintPreview();
        } else {
            var rowcount = dw_list.RowCount();
            for (var i = 1; i <= rowcount; i++) {
                var xzk = dw_list.GetItemString(i, "xz");
                if (xzk == "Y") {
                    dw_print_hczm.SetDataObject("dw_hddz_print_hczm");
                    dw_print_hczm.Retrieve(dw_list.GetItemString(i, "ywbh"));
//                    dw_print_hczm.PrintPreview();
                    dw_print_hczm.Print(true);
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
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%'))   or ( Upper(khpym) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤税单抬头
    this.slesdtt_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "") {
            dw_list.SetFilter("");
        }
        else {
            dw_list.SetFilter("( Upper(shdwmc) like Upper('%" + text + "%'))   or ( Upper(shdwpym) like Upper('%" + text + "%'))");
        }
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

    //#region 过滤报关单号
    this.slebgdh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(bgdh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤报关海关
    this.slebghg_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(bghg) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤报关单号
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

    
    //#region 过滤汇总集装箱号
    this.sle_hz_jzxh_EditChanged = function (text) {
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

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Hddz.W_HddzList_Bg", "dw_hddz_list_bg");
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        if (Row > 0) {  fzjs_row   = Row;   }
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

    //日期格式
    this.YearMonDay = function () {
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1;
        var curr_year = d.getFullYear();
        String(curr_month).length < 2 ? (curr_month = "0" + curr_month) : curr_month;
        String(curr_date).length < 2 ? (curr_date = "0" + curr_date) : curr_date;
        var yyyyMMdd = curr_year + "" + curr_month + "" + curr_date;
        return yyyyMMdd;
    }

    //流水号自增
    this.SerialNumber = function (num) {
        if (num == 0) {
            num = 1;
        } else {
            num += 1;
        }
        var fixedNum = 100000000;
        fixedNum += num;
        fixedNum = fixedNum.toString().substring(1);
        return fixedNum;
    }

    //#region 存盘
    this.Save = function () {
        if (dw_list.AcceptText() != 1)
            return;
        if (dw_bsnr.AcceptText() != 1)
            return;

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount() + dw_bsnr.DeletedCount()) <= 0) {
            var sftj = dw_list.GetItemString(dw_list.GetRow(), "sftj");
            alert(sftj);
            alert("没有数据需要保存!");
            return;
        }

        var dw_list_data = dw_list.GetChanges();
        var dw_bsnr_data = dw_bsnr.GetChanges();
        if (dw_list_data == "" && dw_bsnr_data == "")
            return;

        var userid = requestor.GetParm("userid");
        var yearMonDay = self.YearMonDay();
        dw_list.SetFilter("");
        dw_list.Filter();

        //数据同步生鲜港
        for (var i = 1; i <= dw_list.RowCount(); i++) {
            if (dw_list.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {
                var ywbh = dw_list.GetItemString(i, "ywbh");
                var log_num = dw_log.RowCount();

                //                var maxNumber = self.SerialNumber(log_num);
                //                var serialNumber = "hybg" + userid + yearMonDay + maxNumber;
                var row = dw_log.InsertRow(0);

                var serialNumber = dw_log.GetItemString(row, "eid_max")

                dw_log.SetItem(row, "eid", serialNumber);
                dw_log.SetItem(row, "tablename", "yw_hddz");
                dw_log.SetItem(row, "changecols", "bgdh,bgsj,sjzq_zqcdsj,sjzq_hc,sjzq_js,sjzq_zl,xccy,xc2ccy,wsbgsj");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.ScrollToRow(row);
            }
        }

        var dw_log_data = dw_log.GetChanges();
        //        if (dw_log_data == "")
        //            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListBgSave", "dw_list=" + dw_list_data + "&dw_bsnr=" + dw_bsnr_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            dw_log.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();
            dw_log.SetFocus();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
            dw_log.SetFocus();
        }
    }
    //#endregion  

    //#region 获得字段焦点
    this.Help = function () {
        javascript: window.open('\海运报关.txt')
    }
    //#endregion

    //#region 异常原因
    var iw_Hddz_Ycyy = null;
    this.OpenYcyy = function (Row) {
        if (iw_Hddz_Ycyy == null)
            iw_Hddz_Ycyy = new W_Hddz_Ycyy();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_list.GetRow();
        var ywbh = dw_list.GetItemString(row, "ywbh");

        iw_Hddz_Ycyy.SetDataWindow(dw_list);
        iw_Hddz_Ycyy.SetData(ywbh);
        iw_Hddz_Ycyy.SetRow(row);
        iw_Hddz_Ycyy.SetYybm("0104");
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy", iw_Hddz_Ycyy);

    }
    //#endregion

    //数据检测
    this.Ytsjjc = function () {
        var row = dw_list.GetRow()
        var ywbh = dw_list.GetItemString(row, "ywbh")
        for (row1 = dw_bsnr.RowCount(); row1 > 0; row1--) {
            dw_bsnr.DeleteRow(row1)
        }
        var retrieve_master_row = ds_master.Retrieve(ywbh)
        var dzlx = dw_list.GetItemString(retrieve_master_row, "dzlx");
        if (dzlx == null || dzlx == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "单证类型")
        };
        var bgdh = ds_master.GetItemString(retrieve_master_row, "bgdh");
        if (bgdh == null || bgdh == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "报关单号")
        };
        var jcka = ds_master.GetItemString(retrieve_master_row, "jcka");
        if (jcka == null || jcka == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "进口口岸")
        };
        var hth = ds_master.GetItemString(retrieve_master_row, "hth");
        if (hth == null || hth == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "合同号")
        };
        var jydwdm = ds_master.GetItemString(retrieve_master_row, "jydwdm");
        if (jydwdm == null || jydwdm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "经营单位")
        };
        var shdwdm = ds_master.GetItemString(retrieve_master_row, "shdwdm");
        if (shdwdm == null || shdwdm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "收货单位")
        };
        var sbdwdm = ds_master.GetItemString(retrieve_master_row, "sbdwdm");
        if (sbdwdm == null || sbdwdm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "报关单位")
        };
        var ysfs = ds_master.GetItemString(retrieve_master_row, "ysfs");
        if (ysfs == null || ysfs == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "运输方式")
        };
        var cm = ds_master.GetItemString(retrieve_master_row, "cm");
        if (cm == null || cm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "运输工具名称")
        };
        var hcorhbh = ds_master.GetItemString(retrieve_master_row, "hcorhbh");
        if (hcorhbh == null || hcorhbh == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "航次号")
        };
        var ztdh = ds_master.GetItemString(retrieve_master_row, "ztdh");
        if (ztdh == null || ztdh == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "提单号")
        };
        var myfs = ds_master.GetItemString(retrieve_master_row, "myfs");
        if (myfs == null || myfs == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "贸易方式")
        };
        var zmfs = ds_master.GetItemString(retrieve_master_row, "zmfs");
        if (zmfs == null || zmfs == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "征免性质")
        };
        var qiyunguodm = ds_master.GetItemString(retrieve_master_row, "qiyunguodm");
        if (qiyunguodm == null || qiyunguodm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "起运国")
        };
        var qygdm = ds_master.GetItemString(retrieve_master_row, "qygdm");
        if (qygdm == null || qygdm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "装货港")
        };
        var hzdwdqdm = ds_master.GetItemString(retrieve_master_row, "hzdwdqdm");
        if (hzdwdqdm == null || hzdwdqdm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "收货单位地区代码")
        };
        var jgfs = ds_master.GetItemString(retrieve_master_row, "jgfs");
        if (jgfs == null || jgfs == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "成交方式")
        };
        var kpje = ds_master.GetItemNumber(retrieve_master_row, "kpje");
        if ((bxfje == null || bxfje == 0) && jgfs == "FOB") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "运费")
        };
        var bxfje = ds_master.GetItemNumber(retrieve_master_row, "bxfje");
        if ((bxfje == null || bxfje == 0) && (jgfs == "FOB" || jgfs == "C&F")) {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "保险费")
        };
        var zxs = ds_master.GetItemNumber(retrieve_master_row, "zxs");
        if (zxs == null || zxs == 0) {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "件数")
        };
        var bzzl = ds_master.GetItemString(retrieve_master_row, "bzzl");
        if (bzzl == null || bzzl == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "包装种类")
        };
        var sfqrbzlx = ds_master.GetItemString(retrieve_master_row, "sfqrbzlx");
        if (sfqrbzlx == null || sfqrbzlx == "N") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "确认包装类型")
        };
        var zmz = ds_master.GetItemNumber(retrieve_master_row, "zmz");
        if (zmz == null || zmz == 0) {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "毛重")
        };
        var zjz = ds_master.GetItemNumber(retrieve_master_row, "zjz");
        if (zjz == null || zjz == 0) {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "净重")
        };
        var bzzl = ds_master.GetItemString(retrieve_master_row, "bzzl");
        if (bzzl == null || bzzl == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "亿通备注栏")
        };
        var ycddm = ds_master.GetItemString(retrieve_master_row, "ycddm");
        if (ycddm == null || ycddm == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "原产地")
        };
        var wbbb = ds_master.GetItemString(retrieve_master_row, "wbbb");
        if (wbbb == null || wbbb == "") {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "币别")
        };

        var li_rowcount_spxx = ds_spxx.Retrieve(ywbh)
        if (li_rowcount_spxx == 0 || li_rowcount_spxx == null) {
            var Insertrow = dw_bsnr.InsertRow();
            dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
            dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
            dw_bsnr.SetItem(Insertrow, "zdmc", "没有商品信息")
        }

        for (row_spxx = ds_spxx.RowCount(); row_spxx > 0; row_spxx--) {
            var spmc_yw = ds_spxx.GetItemString(row_spxx, "spmc_yw");
            if (spmc_yw == null || spmc_yw == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行商品名称")
            };
            var spmc = ds_spxx.GetItemString(row_spxx, "spmc");
            if (spmc == null || spmc == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行商品中文名称")
            };
            var hgbm = ds_spxx.GetItemString(row_spxx, "hgbm");
            if (hgbm == null || hgbm == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行海关编码")
            };
            var zjz = ds_spxx.GetItemNumber(row_spxx, "zjz");
            if (zjz == null || zjz == 0) {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行总净重")
            };
            var hgjldw = ds_spxx.GetItemString(row_spxx, "hgjldw");
            if (hgjldw == null || hgjldw == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行申报单位")
            };
            var dj = ds_spxx.GetItemNumber(row_spxx, "dj");
            if (dj == null || dj == 0) {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行单价（按重量）")
            };
            var zj = ds_spxx.GetItemNumber(row_spxx, "zj");
            if (zj == null || zj == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行总价")
            };
            var fdsl = ds_spxx.GetItemNumber(row_spxx, "fdsl");
            if (fdsl == null || fdsl == 0) {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行法定数量")
            };
            var fdjldw = ds_spxx.GetItemString(row_spxx, "fdjldw");
            if (fdjldw == null || fdjldw == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行法定单位")
            };
            var zjmsfs = ds_spxx.GetItemString(row_spxx, "zjmsfs");
            if (zjmsfs == null || zjmsfs == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行征免方式")
            };
            var yt = ds_spxx.GetItemString(row_spxx, "yt");
            if (yt == null || yt == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行用途")
            };

            var sfysx = ds_spxx.GetItemString(row_spxx, "sfysx");
            var spsx = ds_spxx.GetItemString(row_spxx, "spsx");
            if ((spsx == null || spsx == "") && sfysx == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行商品属性")
            };
            var sfygzfs = ds_spxx.GetItemString(row_spxx, "sfygzfs");
            var gzfs = ds_spxx.GetItemString(row_spxx, "gzfs");
            if ((gzfs == null || gzfs == "") && sfygzfs == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行干制方式")
            };
            var sfypz = ds_spxx.GetItemString(row_spxx, "sfypz");
            var sppz = ds_spxx.GetItemString(row_spxx, "sppz");
            if ((sppz == null || sppz == "") && sfypz == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行品种")
            };
            var sfydj = ds_spxx.GetItemString(row_spxx, "sfydj");
            var spdj = ds_spxx.GetItemString(row_spxx, "spdj");
            if ((spdj == null || spdj == "") && sfydj == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行等级")
            };
            var sfybzgg = ds_spxx.GetItemString(row_spxx, "sfybzgg");
            var bzgg = ds_spxx.GetItemString(row_spxx, "bzgg");
            if ((bzgg == null || bzgg == "") && sfybzgg == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行包装规格")
            };
            var sfypp = ds_spxx.GetItemString(row_spxx, "sfypp");
            var sppp = ds_spxx.GetItemString(row_spxx, "sppp");
            if ((sppp == null || sppp == "") && sfypp == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行品牌")
            };
            var sfygg = ds_spxx.GetItemString(row_spxx, "sfygg");
            var spgg = ds_spxx.GetItemString(row_spxx, "spgg");
            if ((spgg == null || spgg == "") && sfygg == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行规格")
            };
            var sfycf = ds_spxx.GetItemString(row_spxx, "sfycf");
            var cf = ds_spxx.GetItemString(row_spxx, "cf");
            if ((cf == null || cf == "") && sfycf == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行成份")
            };
            var sfyxjgjggy = ds_spxx.GetItemString(row_spxx, "sfyxjgjggy");
            var xjgjggy = ds_spxx.GetItemString(row_spxx, "xjgjggy");
            if ((xjgjggy == null || xjgjggy == "") && sfyxjgjggy == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行香蕉干加工工艺")
            };
            var sfyqt = ds_spxx.GetItemString(row_spxx, "sfyqt");
            var spqtys = ds_spxx.GetItemString(row_spxx, "spqtys");
            if ((spqtys == null || spqtys == "") && sfyqt == "Y") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_spxx + "行其他要素")
            };
        }

        var li_rowcount_jzxxx = ds_jzxxx.Retrieve(ywbh)

        for (row_jzxxx = ds_jzxxx.RowCount(); row_jzxxx > 0; row_jzxxx--) {
            var jzxh = ds_jzxxx.GetItemString(row_jzxxx, "jzxh");
            if (jzxh == null || jzxh == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_jzxxx + "行集装箱号")
            };
            var xx = ds_jzxxx.GetItemString(row_jzxxx, "xx");
            if (xx == null || xx == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_jzxxx + "行箱型")
            };
            var xl = ds_jzxxx.GetItemString(row_jzxxx, "xl");
            if (xl == null || xl == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_jzxxx + "行箱类")
            };
        }

        var li_rowcount_fsdz = ds_fsdz.Retrieve(ywbh)

        for (row_fsdz = ds_fsdz.RowCount(); row_fsdz > 0; row_fsdz--) {
            var dzdm = ds_fsdz.GetItemString(row_fsdz, "dzdm");
            if (dzdm == null || dzdm == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_fsdz + "行单证代码")
            };
            var dzbh = ds_fsdz.GetItemString(row_fsdz, "dzbh");
            if (dzbh == null || dzbh == "") {
                var Insertrow = dw_bsnr.InsertRow();
                dw_bsnr.SetItem(Insertrow, "ywbh", ywbh)
                dw_bsnr.SetItem(Insertrow, "cxh", Insertrow)
                dw_bsnr.SetItem(Insertrow, "zdmc", "第" + row_fsdz + "行单证编号")
            };

        }


        if (dw_bsnr.RowCount() > 0) {
            dw_list.SetItem(row, "ytzt", "未全输");
        } else {
            dw_list.SetItem(row, "ytzt", "已全输")
        }

        self.Save()

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
        fzks_row
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

    this.Dcrz = function ()
    {
        var userid = requestor.GetParm( "userid" );
        var sjts = dw_list.RowCount();
        var num = QsWebSoft.PubMethod.Dcrq( userid, "货代单证", sjts ).value;

    }

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
     
    //数据导出
    this.Ytjk = function () {
        var row = dw_list.GetRow()
        var fsfxtid = dw_list.GetItemString(row, "ywbh");
        var ywlx = "0987654321"
        var sjylx = "10"
        var date = new Date;
        var nf = date.getYear().toString();
        var yf = date.getMonth() + 1;
        if (yf < 10) {
            yf = "0" + yf;
        };
        var rq = date.getDate();
        if (rq < 10) {
            rq = "0" + rq;
        };
        var hh = date.getHours();
        if (hh < 10) {
            hh = "0" + hh;
        };
        var mm = date.getMinutes();
        if (mm < 10) {
            mm = "0" + mm;
        };
        var ss = date.getSeconds();
        if (ss < 10) {
            ss = "0" + ss;
        };
        var sj = nf.toString() + yf.toString() + rq.toString() + hh.toString() + mm.toString() + ss.toString();
        var mrrq = nf.toString() + '/' + yf.toString() + '/' + rq.toString()
        var fileFullPath = "D:\\XML\\EMVS_EP_" + fsfxtid + "_" + ywlx + "_" + sjylx + "_" + sj + ".DEC";

        var content = '<?xml version="1.0" encoding="UTF-8"?>';
        content += '\n<Message_Data>';
        content += '\n  <project_id/>';
        content += '\n  <project_ver/>';
        content += '\n  <Message_Head>';
        var ywbh = dw_list.GetItemString(row, "ywbh");
        content += '\n    <Id>' + ywbh + '</Id>';
        content += '\n    <MsgType>EMVS_DHL</MsgType>';
        content += '\n    <FileName>' + fileFullPath + '</FileName>';
        content += '\n    <Version>1.0</Version>';
        content += '\n    <Description>EMVS报文</Description>';
        content += '\n    <CreateTime>' + sj + '</CreateTime>';
        content += '\n    <From></From>';
        content += '\n    <To></To>';
        content += '\n    <CommType></CommType>';
        content += '\n    <MsgStatus></MsgStatus>';
        content += '\n  </Message_Head>';
        content += '\n  <Message_Body>';
        content += '\n    <PRE_ENTRY_INFO_ROOT COUNT="1">';
        content += '\n      <PRE_ENTRY_INFO_ITEM>';
        content += '\n        <SEQ_NO></SEQ_NO>';
        content += '\n        <BILL_SEQ_NO></BILL_SEQ_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';
        content += '\n        <COP_NO>' + ywbh + '</COP_NO>';
        content += '\n        <SEND_TRADE_CODE>3111980075</SEND_TRADE_CODE>';
        content += '\n        <RECEIVE_TRADE_CODE> </RECEIVE_TRADE_CODE>';
        content += '\n        <USER_INFO>EMVSOHGJ</USER_INFO>';
        content += '\n        <BIZ_TYPE>1</BIZ_TYPE>';
        content += '\n        <DATA_SOURCE_TYPE>0</DATA_SOURCE_TYPE>';
        var dzlx = dw_list.GetItemString(row, "dzlx");
        if (dzlx == null || dzlx == "") {
            requestor.MessageBox("提示", "请输入单证类型！")
            return
        }
        content += '\n        <DEC_TYPE>' + dzlx + '</DEC_TYPE>';
        var ytjkzt = dw_list.GetItemString(row, "ytjkzt")
        if (ytjkzt == null) {
            dw_list.SetItem(row, "ytjkzt", "4")
            ytjkzt = "4"
        } else if (ytjkzt == "4") {
            dw_list.SetItem(row, "ytjkzt", "5")
            ytjkzt = "5"
        };

        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';
        content += '\n      </PRE_ENTRY_INFO_ITEM>';
        content += '\n    </PRE_ENTRY_INFO_ROOT>';
        content += '\n    <EP_DEC_ROOT>';
        content += '\n      <EP_DEC_HEAD>';
        var bgdh = dw_list.GetItemString(row, "bgdh");
        if (bgdh == null) {
            bgdh = "";
        }
        content += '\n        <PRE_ENTRY_ID>' + bgdh + '</PRE_ENTRY_ID>';
        var jydwdm = dw_list.GetItemString(row, "jydwdm")
        if (jydwdm == null) {
            requestor.MessageBox("提示", "经营单位代码为空，不能申报")
            return;
        }
//        var jydwbm_hgqybm = QsWebSoft.PubMethod.ReadHgqydm(jydwbm).value;
//        if (jydwbm_hgqybm == null) {
//            jydwbm_hgqybm = "";
//        };
        content += '\n        <TRADE_CO>' + jydwdm + '</TRADE_CO>';
        var jydwmc = dw_list.GetItemString(row, "jydwmc")
        content += '\n        <TRADE_NAME>' + jydwmc + '</TRADE_NAME>';
        var hzdwdqdm = dw_list.GetItemString(row, "hzdwdqdm")
        if (hzdwdqdm == null) {
            hzdwdqdm = "";
        }
        content += '\n        <DISTRICT_CODE>' + hzdwdqdm + '</DISTRICT_CODE>';

        var shdwdm = dw_list.GetItemString(row, "shdwdm");
        if (shdwdm == null) {
            requestor.MessageBox("提示", "货主单位代码为空，不能申报")
            return;
        }
        content += '\n        <OWNER_CODE>' + shdwdm + '</OWNER_CODE>';
        var shdwmc = dw_list.GetItemString(row, "shdwmc");
        if (shdwmc == null) {
            shdwmc = "";
        }
        content += '\n        <OWNER_NAME>' + shdwmc + '</OWNER_NAME>';
        var sbdwdm = dw_list.GetItemString(row, "sbdwdm")
        if (sbdwdm == null) {
            requestor.MessageBox("提示","申报单位代码为空，不能申报")
            return;
        }
        content += '\n        <AGENT_CODE>' + sbdwdm + '</AGENT_CODE>';
        var bggsmc = dw_list.GetItemString(row, "bggsmc")
        if (bggsmc == null) {
            bggsmc = "";
        }
        content += '\n        <AGENT_NAME>' + bggsmc + '</AGENT_NAME>';
        var ysfs = dw_list.GetItemString(row, "ysfs")
        var ysfsbm = "";
        if (ysfs != null) {
            ysfsbm = QsWebSoft.PubMethod.ReadYsfsbm(ysfs).value; ;
        };
        if (ysfsbm == null) {
            ysfsbm = "";
        }
        content += '\n        <TRAF_MODE>' + ysfsbm + '</TRAF_MODE>';
        var jcka = dw_list.GetItemString(row, "jcka")
        if (jcka == null) {
            jcka = ""
        }
        content += '\n        <I_E_PORT>' + jcka + '</I_E_PORT>';
        var qygdm = dw_list.GetItemString(row, "qygdm")

        if (qygdm == null) {
            qygdm = ""
        }
        content += '\n        <DISTINATE_PORT>' + qygdm + '</DISTINATE_PORT>';
        var cm = dw_list.GetItemString(row, "cm")
        if (cm == null) {
            cm = ""
        }
        content += '\n        <TRAF_NAME>' + cm + '</TRAF_NAME>';
        var hth = dw_list.GetItemString(row, "hth")
        if (hth == null) {
            hth = ""
        }
        content += '\n        <CONTR_NO>' + hth + '</CONTR_NO>';
        content += '\n        <IN_RATIO></IN_RATIO>';
        var ztdh = dw_list.GetItemString(row, "ztdh")
        if (ztdh == null) {
            ztdh = ""
        }
        content += '\n        <BILL_NO>' + ztdh + '</BILL_NO>';

        var ycd = dw_list.GetItemString(row, "ycd")
        var hggjdm = "";
        if (ycd != null) {
            hggjdm = QsWebSoft.PubMethod.ReadGjdm(ycd).value;
        };
        if (hggjdm == null) {
            hggjdm = "";
        }
        content += '\n        <TRADE_COUNTRY>' + hggjdm + '</TRADE_COUNTRY>';
        var myfs = dw_list.GetItemString(row, "myfs")
        if (myfs == null) {
            myfs = ""
        }
        content += '\n        <TRADE_MODE>' + myfs + '</TRADE_MODE>';
        var zmfs = dw_list.GetItemString(row, "zmfs")
        if (zmfs == null) {
            zmfs = ""
        }
        content += '\n        <CUT_MODE>' + zmfs + '</CUT_MODE>';
        content += '\n        <PAY_MODE>0</PAY_MODE>';
        var jgfs = dw_list.GetItemString(row, "jgfs")
        var jgtkdm = QsWebSoft.PubMethod.ReadJgtk(jgfs).value; ;
        if (jgtkdm == null) {
            jgtkdm = ""
        }
        content += '\n        <TRANS_MODE>' + jgtkdm + '</TRANS_MODE>';
        content += '\n        <PAY_WAY></PAY_WAY>';
        var yfbj = dw_list.GetItemString(row, "yfbj")
        if (yfbj == null) {
            yfbj = ""
        }
        content += '\n        <FEE_MARK>' + yfbj + '</FEE_MARK>';
        var yfbb = dw_list.GetItemString(row, "kpbz")
        var yfbbdm = "";
        if (yfbb != null) {
            yfbbdm = QsWebSoft.PubMethod.ReadBbdm(yfbb).value; ;
        };
        if (yfbbdm == null) {
            yfbbdm = ""
        }
        content += '\n        <FEE_CURR>' + yfbbdm + '</FEE_CURR>';
        var yfje = dw_list.GetItemNumber(row, "kpje")
        if (yfje == null) {
            yfje = 0;
        }
        content += '\n        <FEE_RATE>' + yfje + '</FEE_RATE>';

        content += '\n        <OTHER_MARK></OTHER_MARK>';
        content += '\n        <OTHER_CURR></OTHER_CURR>';
        content += '\n        <OTHER_RATE></OTHER_RATE>';
        var bxfbj = dw_list.GetItemString(row, "bxfbj")
        if (bxfbj == null) {
            bxfbj = ""
        }
        content += '\n        <INSUR_MARK>' + bxfbj + '</INSUR_MARK>';
        var bxfbb = dw_list.GetItemString(row, "bxfbb")
        var bxfbbdm = "";
        if (bxfbb != null) {
            bxfbbdm = QsWebSoft.PubMethod.ReadBbdm(bxfbb).value; ;
        };
        if (bxfbbdm == null) {
            bxfbbdm = ""
        }
        content += '\n        <INSUR_CURR>' + bxfbbdm + '</INSUR_CURR>';
        var bxfje = dw_list.GetItemNumber(row, "bxfje")
        if (bxfje == null) {
            bxfje = 0;
        }
        content += '\n        <INSUR_RATE>' + bxfje + '</INSUR_RATE>';
        var zxs = dw_list.GetItemNumber(row, "zxs")
        if (zxs == null) {
            zxs = 0;
        }
        content += '\n        <PACK_NO>' + zxs + '</PACK_NO>';
        var zmz = dw_list.GetItemNumber(row, "zmz")
        if (zmz == null) {
            zmz = 0;
        }
        content += '\n        <GROSS_WT>' + zmz + '</GROSS_WT>';
        var zjz = dw_list.GetItemNumber(row, "zjz")
        if (zjz == null) {
            zjz = 0;
        }
        content += '\n        <NET_WT>' + zjz + '</NET_WT>';
        content += '\n        <LICENSE_NO></LICENSE_NO>';
        content += '\n        <APPR_NO></APPR_NO>';
        content += '\n        <MANUAL_NO></MANUAL_NO>';

        content += '\n        <I_E_DATE>' + mrrq + '</I_E_DATE>';
        var bzzl = dw_list.GetItemString(row, "bzzl")
        if (bzzl == null) {
            bzzl = "";
        }
        content += '\n        <WRAP_TYPE>' + bzzl + '</WRAP_TYPE>';
        var ytbz = dw_list.GetItemString(row, "ytbz")
        if (ytbz == null || ytbz == "") {
            requestor.MessageBox("提示", "亿通备注，不能申报")
            return;
        }
        content += '\n        <NOTE_S>' + ytbz + '</NOTE_S>';
        content += '\n        <D_DATE>' + mrrq + '</D_DATE>';

        content += '\n        <EX_SOURCE></EX_SOURCE>';
        var hcorhbh = dw_list.GetItemString(row, "hcorhbh")
        ds_zzxx.Retrieve(ywbh)
        var zzxx_row = ds_zzxx.RowCount();
        if (zzxx_row > 0) {
            hcorhbh = ds_zzxx.GetItemString(zzxx_row, "zz_hcorhbh")
        }
        if (hcorhbh == null) {
            hcorhbh = "";
        }
        content += '\n        <VOYAGE_NO>' + hcorhbh + '</VOYAGE_NO>';
        var jckbz = dw_list.GetItemString(row, "jckbz")
        if (jckbz == null) {
            jckbz = "";
        }
        content += '\n        <IE_FLAG>' + jckbz + '</IE_FLAG>';

        content += '\n        <PRDTID></PRDTID>';
        content += '\n        <STORENO></STORENO>';
        content += '\n        <RAMANUALNO></RAMANUALNO>';
        content += '\n        <RADECLNO></RADECLNO>';
        var ytjkzt = dw_list.GetItemString(row, "ytjkzt")
        if (ytjkzt == null) {
            ytjkzt = "";
        }
        content += '\n        <STATUS>' + ytjkzt + '</STATUS>';
      
        content += '\n        <MEMO></MEMO>';
        content += '\n      </EP_DEC_HEAD>';
        ds_spxx.Retrieve(ywbh)
        var spxx_row = ds_spxx.RowCount();
        content += '\n      <EP_DEC_LIST COUNT="' + spxx_row + '">';
        content += '\n        <EP_DEC_LIST_ITEM>';

        var wbbb = dw_list.GetItemString(row, "wbbb")
        var wbbbdm = "";
        if (wbbb != null) {
            wbbbdm = QsWebSoft.PubMethod.ReadBbdm(wbbb).value; ;
        };
        if (wbbbdm == null) {
            wbbbdm = ""
        }
        var newrow = 0;
        for (row = ds_spxx.RowCount(); row > 0; row--) {
            newrow = newrow + 1
            content += '\n          <G_NO>' + newrow + '</G_NO>';
            content += '\n          <CONTR_ITEM></CONTR_ITEM>';
            var hgbm = ds_spxx.GetItemString(row, "hgbm");
            if (hgbm == null) {
                hgbm = "";
            }
            content += '\n          <CODE_T>' + hgbm.substr(1, 8) + '</CODE_T>';
            content += '\n          <CODE_S>' + hgbm.substr(9, 2) + '</CODE_S>';
            var spmc = ds_spxx.GetItemString(row, "spmc");
            if (spmc == null) {
                spmc = "";
            }
            content += '\n          <G_NAME>' + spmc + '</G_NAME>';
            var spsx = ds_spxx.GetItemString(row, "spsx");
            var gzfs = ds_spxx.GetItemString(row, "gzfs");
            var sppz = ds_spxx.GetItemString(row, "sppz");
            var spdj = ds_spxx.GetItemString(row, "spdj");
            var bzgg = ds_spxx.GetItemString(row, "bzgg");
            var sppp = ds_spxx.GetItemString(row, "sppp");
            var spgg = ds_spxx.GetItemString(row, "spgg");
            var cf = ds_spxx.GetItemString(row, "cf");
            var xjgjggy = ds_spxx.GetItemString(row, "xjgjggy");
            var spqtys = ds_spxx.GetItemString(row, "spqtys");
            var ls_model = ""
            if (spsx != null && spsx != "") {
                ls_model = spsx;
            };
            if (gzfs != null || gzfs != "") {
                if (ls_model== ""){
                     ls_model = spsx;
                 }else{
                     ls_model = ls_model+"|"+spsx
                 }

             };
             if (sppz != null || sppz != "") {
                 if (ls_model == "") {
                     ls_model = "品种:" + sppz;
                 } else {
                     ls_model = ls_model + "|" + "品种:" + sppz
                 }

             };
             if (spdj != null || spdj != "") {
                 if (ls_model == "") {
                     ls_model = "等级:" + spdj;
                 } else {
                     ls_model = ls_model + "|" + "等级:" + spdj
                 }

             };
             if (bzgg != null || bzgg != "") {
                 if (ls_model == "") {
                     ls_model = bzgg;
                 } else {
                     ls_model = ls_model + "|" + bzgg
                 }

             };
             if (sppp != null || sppp != "") {
                 if (ls_model == "") {
                     ls_model = "品牌:" + sppp;
                 } else {
                     ls_model = ls_model + "|" + "品牌:" + sppp
                 }

             };

             if (spgg != null || spgg != "") {
                 if (ls_model == "") {
                     ls_model = spgg;
                 } else {
                     ls_model = ls_model + "|" + spgg
                 }

             };

             if (cf != null || cf != "") {
                 if (ls_model == "") {
                     ls_model = cf;
                 } else {
                     ls_model = ls_model + "|" + cf
                 }

             };
             if (xjgjggy != null || xjgjggy != "") {
                 if (ls_model == "") {
                     ls_model = xjgjggy;
                 } else {
                     ls_model = ls_model + "|" + xjgjggy
                 }

             };
             if (spqtys != null || spqtys != "") {
                 if (ls_model == "") {
                     ls_model = spqtys;
                 } else {
                     ls_model = ls_model + "|" + spqtys
                 }

             };
             

            content += '\n          <G_MODEL>' + ls_model + '</G_MODEL>';
            content += '\n          <ORIGIN_COUNTRY>' + hggjdm + '</ORIGIN_COUNTRY>';
            var zjz = ds_spxx.GetItemNumber(row, "zjz");
            if (zjz == null) {
                zjz = 0;
            }
            content += '\n          <G_QTY>' + zjz + '</G_QTY>';
            var hgjldw = ds_spxx.GetItemString(row, "hgjldw");
            if (hgjldw == null) {
                hgjldw = "";
            }
            content += '\n          <G_UNIT>' + hgjldw + '</G_UNIT>';
            content += '\n          <QTY_1>' + zjz + '</QTY_1>';
            content += '\n          <UNIT_1>' + hgjldw + '</UNIT_1>';
            content += '\n          <QTY_2></QTY_2>';
            content += '\n          <UNIT_2></UNIT_2>';

            content += '\n          <TRADE_CURR>' + wbbbdm + '</TRADE_CURR>';
            var hgdj = ds_spxx.GetItemNumber(row, "hgdj")
            content += '\n          <DECL_PRICE>' + hgdj + '</DECL_PRICE>';
            var zj = ds_spxx.GetItemNumber(row, 'zj')
            content += '\n          <TRADE_TOTAL>' + zj + '</TRADE_TOTAL>';

            var zjmsfs = ds_spxx.GetItemString(row, "zjmsfs")
            if (zjmsfs == null) {
                zjmsfs = ""
            }
            content += '\n          <DUTY_MODE>' + zjmsfs + '</DUTY_MODE>'; //未做
            var yt = ds_spxx.GetItemString(row, "yt")
            if (yt == null) {
                yt = ""
            }
            content += '\n          <USE_TO>' + yt + '</USE_TO>';
            content += '\n          <PRDT_NO></PRDT_NO>';
            content += '\n          <GOODS_ID></GOODS_ID>';
            var zmz = ds_spxx.GetItemNumber(row, "zmz");
            if (zmz == null) {
                zmz = 0;
            }
            content += '\n          <GROSS_WT>' + zmz + '</GROSS_WT>';
            var zjz = ds_spxx.GetItemNumber(row, "zjz");
            if (zjz == null) {
                zjz = 0;
            }
            content += '\n          <NET_WT>' + zjz + '</NET_WT>';
            content += '\n          <WORK_USD>0.0</WORK_USD>';
        }
        content += '\n        </EP_DEC_LIST_ITEM>';
        content += '\n      </EP_DEC_LIST>';
        ds_jzxxx.Retrieve(ywbh)
        var jzxxx_row = ds_jzxxx.RowCount();
        content += '\n      <EP_DEC_CONTAINER_LIST COUNT="' + jzxxx_row + '">';
        content += '\n      	<EP_DEC_CONTAINER_ITEM>';
        var newrow_jzxxx = 0;
        for (row = ds_jzxxx.RowCount(); row > 0; row--) {
            var jzxh = ds_jzxxx.GetItemString(row, "jzxh");
            if (jzxh == null) {
                jzxh = "";
            }
            content += '\n      		<CONTAINER_NO>' + jzxh + '</CONTAINER_NO>';
            var xx = ds_jzxxx.GetItemString(row, "xx");
            var xxdm = "";
            if (xx != null) {
                xxdm = QsWebSoft.PubMethod.ReadXxdm(xx).value; 
            };
            if (xxdm == null) {
                xxdm = ""
            }
            content += '\n          <CONTAINER_MODEL>' + xxdm + '</CONTAINER_MODEL>';
            var jzxzz = "";
            
            if (xx != null) {
                jzxzz = QsWebSoft.PubMethod.ReadJzxzz(xx).value;
                
            };
            if (jzxzz == null) {
                jzxzz = 0
            }
            content += '\n          <CONTAINER_WT>' + jzxzz + '</CONTAINER_WT>';
        }
        content += '\n      	</EP_DEC_CONTAINER_ITEM>';
        content += '\n      </EP_DEC_CONTAINER_LIST>';

        //        content += '\n      <EP_DEC_CERT_LIST COUNT="1">';
        //        content += '\n      	<EP_DEC_CERT_ITEM>';
        //        content += '\n      		<DOCU_CODE>2</DOCU_CODE>';
        //        content += '\n          <CERT_CODE>010101110011</CERT_CODE>';
        //        content += '\n      	</EP_DEC_CERT_ITEM>';
        //        content += '\n      </EP_DEC_CERT_LIST>';
        //        content += '\n       <EP_DEC_EDOCRELATION_LIST COUNT="1">';
        //        content += '\n      	<EP_DEC_EDOCRELATION_ITEM>';
        //        content += '\n      		<FILE_TYPE>1</FILE_TYPE>';
        //        content += '\n          <FILE_NAME></FILE_NAME >';
        //        content += '\n          <EDOCOWNERCODE>1234567890</EDOCOWNERCODE>';
        //        content += '\n          <EDOCOWNERNAME>上海亿通国际股份有限公司</EDOCOWNERNAME>';
        //        content += '\n          <OPNOTE>备注</OPNOTE>';
        //        content += '\n      	</EP_DEC_EDOCRELATION_ITEM>';
        //        content += '\n      </EP_DEC_EDOCRELATION_LIST>';
        //        content += '\n      <EP_DEC_RESULT_LIST COUNT="1">';
        //        content += '\n        <EP_DEC_RESULT_ITEM>';
        //        content += '\n          <NOTICE_DATE></NOTICE_DATE>';
        //        content += '\n          <CHANNEL></CHANNEL>';
        //        content += '\n          <NOTE></NOTE>';
        //        content += '\n          <I_E_DATE></I_E_DATE>';
        //        content += '\n          <D_DATE></D_DATE>';
        //        content += '\n        </EP_DEC_RESULT_ITEM>';
        //        content += '\n      </EP_DEC_RESULT_LIST>';

        content += '\n    </EP_DEC_ROOT> ';
        content += '\n  </Message_Body>';
        content += '\n</Message_Data>';

        if (content == null) {
            requestor.MessageBox("提示", "数据不全，无法生成文件！")
        } else {
            QsWebSoft.PubMethod.WriteYtjkXml(content, "D:\\XML\\", fileFullPath);
            requestor.MessageBox("提示", "文件<" + fileFullPath + ">已经生成完成！")
        }

    }

//    this.dc = function () { 
//       dw_list.SaveAs(D:\XML\AAAA.xml)
//    }
}
