///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Bgdsy_Select() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var cbx_1 = new CheckBox(requestor);
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
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (cbx_1 == null) cbx_1 = new CheckBox(requestor);
        cbx_1.Attach(win.Control("cbx_1"));
        if (ss_1 == null) ss_1 = new ToolStrip(requestor);
        ss_1.Attach(win.Control("ss_1"));

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_2", "Clicked", self.Retrieve);

        if (typeof (self.cbx_clicked) == "function")
            win.AttachEvent("cbx_1", "Clicked", self.cbx_clicked);

        if (typeof (self.Sum) == "function")
            win.AttachEvent("btn_sum", "Clicked", self.Sum);

        if (typeof (self.OK) == "function")
            win.AttachEvent("btn_ok", "Clicked", self.OK);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Cancel", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        cbx_1.Detach(); cbx_1 = null;
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
         if (dwo == "dw_hddz_bgdsy_edit_cmd") {
             self.Ky_Cdph();
         };    

         requestor.Close();

     }

     this.Sum = function () {
         var sum = 0;
         for (var i = 1; i <= dw_1.RowCount(); i++) {
             if (dw_1.GetItemString(i, "selected") == "Y") {
                 sum += dw_1.GetItemNumber(i, "zje")
             }
         }
         requestor.MessageBox("合计金额", sum);
     }

     //增加记录
     this.Ky_Cdph = function () {
         var count = 0;
         var tgjysj;
         var sjkgsj;
         var hdcsj;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }
             var ywbh = dw_1.GetItemString(row, "ywbh");
             var li_find = dw_d.Find("ywbh = '" + ywbh + "'", 1, dw_d.RowCount());
             if (li_find > 0) {
                 continue;
             }

             //             if (rownum > 0) {
             //                 //                 if (count == 0) {
             //                 //                     ll_insertrow = rownum;
             //                 //                 }
             //                 //                 else {
             //                 //                     ll_insertrow = dw_d.InsertRow(0);
             //                 //                 }
             //                 ll_insertrow = rownum;
             //                 ll_insertrow = dw_d.InsertRow(ll_insertrow);
             //             }
             //             else {

             //                 ll_insertrow = dw_d.InsertRow(0);
             //             }

             ll_insertrow = dw_d.InsertRow(0);

             dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
             dw_d.SetItem(ll_insertrow, "bb", dw_1.GetItemString(row, "wbbb"));
             dw_d.SetItem(ll_insertrow, "je", dw_1.GetItemNumber(row, "zje"));
             dw_d.SetItem(ll_insertrow, "bgd", dw_1.GetItemString(row, "bgdh"));
             count++;

         }


         if (count <= 0) {
             requestor.MessageBox("提示", "请选择要添加的集装箱记录!", ICON.StopSign);
             sle_1.SetFocus();
             return;
         }


     }
     

	 this.Exit = function () {
	     requestor.Close();
	 }

	 //#region 查询
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

	     if (endDate < beginDate) {
	         requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
	         dp_Begin.SetFocus();
	         return;
	     }

	     var userid = requestor.GetParm("userid");
	     var ShareMode = requestor.GetParm("ShareMode");
	     var Dlwtf = requestor.GetParm("Dlwtf");
	     var bb = requestor.GetParm("bb");

	     dw_1.Retrieve(beginDate.getVarDate(), endDate.getVarDate(), bb);
	 }
	 //#endregion

	 //#region 全选
	 this.cbx_clicked = function () {
	     dw_1.SetRedraw(false);
	     if (cbx_1.GetChecked()) {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "selected", "Y")
	         }
	     } else {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "selected", "N")
	         }
	     }
	     dw_1.SetRedraw(true);
	 }
	 //#endregion

	 //#region 过滤
	 this.sle_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "")
	         dw_1.SetFilter("");
	     else
	         dw_1.SetFilter("(Upper(ywbh) like Upper('%" + text + "%')) or (Upper(hz_jzxh) like Upper('%" + text + "%')) or (Upper(bgdh) like Upper('%" + text + "%')) or (Upper(hth) like Upper('%" + text + "%')) or (Upper(ztdh) like Upper('%" + text + "%')) or (Upper(ftdh) like Upper('%" + text + "%')) or (Upper(tgdh) like Upper('%" + text + "%'))");
	     dw_1.Filter();
	     dw_1.Sort();
	     dw_1.SetRedraw(true);
	 }
	 //#endregion

	 var iw_Item_Edit = null;
  }