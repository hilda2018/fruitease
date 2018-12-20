///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Skhx_Select() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var cbx_1 = new CheckBox(requestor);
    var sle_skje = new SingleLineEdit(requestor);
    var ss_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (cbx_1 == null) cbx_1 = new CheckBox(requestor);
        cbx_1.Attach(win.Control("cbx_1"));
        if (sle_skje == null) sle_skje = new SingleLineEdit(requestor);
        sle_skje.Attach(win.Control("sle_skje"));
        if (ss_1 == null) ss_1 = new ToolStrip(requestor);
        ss_1.Attach(win.Control("ss_1"));

        if (typeof (self.Sjdq) == "function")
            win.AttachEvent("btn_sjdq", "Clicked", self.Sjdq);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.zdjs) == "function")
            win.AttachEvent("btn_zdjs", "Clicked", self.zdjs);

        if (typeof (self.cbx_clicked) == "function")
            win.AttachEvent("cbx_1", "Clicked", self.cbx_clicked);

        if (typeof (self.OK) == "function")
            win.AttachEvent("btn_ok", "Clicked", self.OK);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Cancel", "Clicked", self.Exit);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_2", "Clicked", self.Retrieve);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        cbx_1.Detach(); cbx_1 = null;
        sle_skje.Detach(); sle_skje = null;
        ss_1.Detach(); ss_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //获取数据窗口

     var dw_d = null;
     this.SetDetailDW = function (dw) {
         dw_d = dw;
     }

     var dwo = null;
     this.SetDwo = function (parm) {
         dwo = parm;
     }

     var rownum = 0;
     this.SetRow = function (row) {
         rownum = row;
     }


     this.OK = function () {
         if (dw_d == null)
             return;      
         dw_1.SetFilter("");
         dw_1.Filter();

         //空运车队配货信息
         if (dwo == "dw_hddz_skhx_edit_cmd") {
             self.Ky_Cdph();
         };    

         requestor.Close();

     }

     //增加记录
     this.Ky_Cdph = function () {
         var count = 0;
         var sjkgsj;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "xz") != "Y") {
                 continue;
             }
             if (rownum > 0) {
                 if (count == 0) {
                     ll_insertrow = rownum;
                 }
                 else {
                     ll_insertrow = dw_d.InsertRow(rownum + 1);
                 }

             }
             else {
                 ll_insertrow = dw_d.InsertRow(0);
             }
             dw_d.SetItem(ll_insertrow, "djh", dw_1.GetItemString(row, "djh"));
             dw_d.SetItem(ll_insertrow, "djxh", dw_1.GetItemNumber(row, "djxh"));
             dw_d.SetItem(ll_insertrow, "sjly", dw_1.GetItemString(row, "sjly"));
             dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
             dw_d.SetItem(ll_insertrow, "cxh_hddz", dw_1.GetItemNumber(row, "cxh_hddz"));
             dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
             dw_d.SetItem(ll_insertrow, "tdh", dw_1.GetItemString(row, "ztdh"));
             dw_d.SetItem(ll_insertrow, "jzxh", dw_1.GetItemString(row, "jzxh"));
             dw_d.SetItem(ll_insertrow, "fybm", dw_1.GetItemString(row, "fybm"));
             dw_d.SetItem(ll_insertrow, "fymc", dw_1.GetItemString(row, "fymc"));
             dw_d.SetItem(ll_insertrow, "skje", dw_1.GetItemNumber(row, "whxje"));

             dw_d.SetItem(ll_insertrow, "yw_hddz_jdrjc", dw_1.GetItemString(row, "jdrjc"));
             dw_d.SetItem(ll_insertrow, "yw_hddz_jdrmc", dw_1.GetItemString(row, "jdrmc"));
             dw_d.SetItem(ll_insertrow, "yw_hddz_jdrbm", dw_1.GetItemString(row, "jdrbm"));
             dw_d.SetItem(ll_insertrow, "yw_hddz_jdrpym", dw_1.GetItemString(row, "jdrpym"));

             count++;

         }


         if (count <= 0) {
             requestor.MessageBox("提示", "请选择要添加的应收明细记录!", ICON.StopSign);
             sle_1.SetFocus();
             return;
         }


     }
     

	 this.Exit = function () {
	     requestor.Close();
	 }

	 //#region 查询
	 this.Sjdq = function () {


	     var jsdwbm = requestor.GetParm("jsdwbm");

	     var jsbm = requestor.GetParm("jsbm");
	     var fydlbm = requestor.GetParm("fydlbm");
	     var jdrjc = requestor.GetParm("jdrjc");

	     var num = QsWebSoft.PubMethod.p_hddz_skhx_select_sjk(jsdwbm, parseInt(jsbm), fydlbm);
	     if (num == "[object Object]") {
	         dw_1.Retrieve(jsdwbm, parseInt(jsbm), fydlbm, jdrjc);
	     }

	 }
	 //#endregion


	 //#region 查询
	 this.Retrieve = function () {

	     //	     var beginDate = new Date(dp_begin.GetValue());
	     //	     var endDate = new Date(dp_end.GetValue());

	     //	     //把开始日期的时间部分设置为 00:00:00
	     //	     beginDate.setHours(0);
	     //	     beginDate.setMinutes(0);
	     //	     beginDate.setSeconds(0);

	     //	     //把结束日期的时间部分设置为 23:59:59
	     //	     endDate.setHours(23);
	     //	     endDate.setMinutes(59);
	     //	     endDate.setSeconds(59);

	     //	     if (endDate < beginDate) {
	     //	         requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
	     //	         dp_Begin.SetFocus();
	     //	         return;
	     //	     }

	     var userid = requestor.GetParm("userid");
	     var ShareMode = requestor.GetParm("ShareMode");
	     var Dlwtf = requestor.GetParm("Dlwtf");
	     var jsdwbm = requestor.GetParm("jsdwbm");
	     var jsbm = requestor.GetParm("jsbm");
	     var fydlbm = requestor.GetParm("fydlbm");
	     var jdrjc = requestor.GetParm("jdrjc");
	     
	     dw_1.Retrieve(jsdwbm, jsbm, fydlbm, jdrjc);

	 }
	 //#endregion

	 //#region 全选
	 this.cbx_clicked = function () {
	     dw_1.SetRedraw(false);
	     if (cbx_1.GetChecked()) {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "xz", "Y")
	         }
	     } else {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "xz", "N")
	         }
	     }
	     dw_1.SetRedraw(true);
	 }
	 //#endregion

	 //#region 自动计算
	 this.zdjs = function () {
	     var cmd_skje = requestor.GetParm("cmd_skje");
	     var whxje = 0
	     dw_1.SetRedraw(false);
	     for (row = 1; row <= dw_1.RowCount(); row++) {
	         whxje = dw_1.GetItemNumber(row, "whxje")
	         if ( cmd_skje > 0 ) {
	             dw_1.SetItem(row, "xz", "Y")
	             cmd_skje = cmd_skje - whxje
	         } else {
	             dw_1.SetItem(row, "xz", "N")
             }
	     }

	     dw_1.SetRedraw(true);
	 }
	 //#endregion


	 this.sle_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "") {
	         dw_1.SetFilter("");
	         dw_1.Filter();
	     }
	     else {
	         dw_1.SetFilter("( Upper(jzxh) like '%" + text.toUpperCase() + "%')  or ( Lower(jzxh) like '%" + text.toLowerCase() + "%') or ( Upper(hth) like '%" + text.toUpperCase() + "%') or ( Lower(hth) like '%" + text.toLowerCase() + "%') or ( Upper(ztdh) like '%" + text.toUpperCase() + "%') or ( Lower(ztdh) like '%" + text.toLowerCase() + "%') or ( Upper(ftdh) like '%" + text.toUpperCase() + "%') or ( Lower(ftdh) like '%" + text.toLowerCase() + "%')");
	         dw_1.Filter();
	         dw_1.Sort();
	     }
	     dw_1.SetRedraw(true);
	 }

	 var iw_Item_Edit = null;



  }