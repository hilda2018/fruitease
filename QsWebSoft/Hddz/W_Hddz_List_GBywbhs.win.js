///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_List_GBywbhs() {

    var self = this;
    var requestor = new PBWindow();
    var sle_2 = new SingleLineEdit(requestor);
    var sle_2_gbywbh = new SingleLineEdit(requestor);
    var tb_4 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_kh = new SingleLineEdit(requestor);
    var tb_3 = new ToolStrip(requestor);
    var dp_begin = new DatePicker(requestor);
    var dp_end = new DatePicker(requestor);
    var sle_2_jzxh = new SingleLineEdit(requestor);
    var sle_2_ztdh = new SingleLineEdit(requestor);
    var tb_2 = new ToolStrip(requestor); 
    var sle_tdh = new SingleLineEdit(requestor);
    var sle_jzxh = new SingleLineEdit(requestor);
    var dw_2 = new DataWindow(requestor);
    var dw_1 = new DataWindow(requestor);
    var dw_4 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ContextMenuStrip2 = new ContextMenu(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (sle_2 == null) sle_2 = new SingleLineEdit(requestor);
        sle_2.Attach(win.Control("sle_2"));
        if (sle_2_gbywbh == null) sle_2_gbywbh = new SingleLineEdit(requestor);
        sle_2_gbywbh.Attach(win.Control("sle_2_gbywbh"));
        if (tb_4 == null) tb_4 = new ToolStrip(requestor);
        tb_4.Attach(win.Control("tb_4"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (sle_kh == null) sle_kh = new SingleLineEdit(requestor);
        sle_kh.Attach(win.Control("sle_kh"));
        if (tb_3 == null) tb_3 = new ToolStrip(requestor);
        tb_3.Attach(win.Control("tb_3"));
        if (dp_begin == null) dp_begin = new DatePicker(requestor);
        dp_begin.Attach(win.Control("dp_begin"));
        if (dp_end == null) dp_end = new DatePicker(requestor);
        dp_end.Attach(win.Control("dp_end"));
        if (sle_2_jzxh == null) sle_2_jzxh = new SingleLineEdit(requestor);
        sle_2_jzxh.Attach(win.Control("sle_2_jzxh"));
        if (sle_2_ztdh == null) sle_2_ztdh = new SingleLineEdit(requestor);
        sle_2_ztdh.Attach(win.Control("sle_2_ztdh"));
        if (tb_2 == null) tb_2 = new ToolStrip(requestor);
        tb_2.Attach(win.Control("tb_2"));
        if (sle_tdh == null) sle_tdh = new SingleLineEdit(requestor);
        sle_tdh.Attach(win.Control("sle_tdh"));
        if (sle_jzxh == null) sle_jzxh = new SingleLineEdit(requestor);
        sle_jzxh.Attach(win.Control("sle_jzxh"));
        if (dw_2 == null) dw_2 = new DataWindow(requestor);
        dw_2.Attach(win.Control("dw_2"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (dw_4 == null) dw_4 = new DataWindow(requestor);
        dw_4.Attach(win.Control("dw_4"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ContextMenuStrip2 == null) ContextMenuStrip2 = new ContextMenu(requestor);
        ContextMenuStrip2.Attach(win.Control("ContextMenuStrip2"));

        if (typeof (self.sle_2_ywbh_EditChanged) == "function")
            win.AttachEvent("sle_2", "EditChanged", self.sle_2_ywbh_EditChanged);

        if (typeof (self.sle_2_gbywbh_EditChanged) == "function")
            win.AttachEvent("sle_2_gbywbh", "EditChanged", self.sle_2_gbywbh_EditChanged);

        if (typeof (self.ywbh_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.ywbh_EditChanged);

        if (typeof (self.kh_EditChanged) == "function")
            win.AttachEvent("sle_kh", "EditChanged", self.kh_EditChanged);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("btn_read", "Clicked", self.Retrieve);

        if (typeof (self.sle_2_jzxh_EditChanged) == "function")
            win.AttachEvent("sle_2_jzxh", "EditChanged", self.sle_2_jzxh_EditChanged);

        if (typeof (self.sle_2_ztdh_EditChanged) == "function")
            win.AttachEvent("sle_2_ztdh", "EditChanged", self.sle_2_ztdh_EditChanged);

        if (typeof (self.tdh_EditChanged) == "function")
            win.AttachEvent("sle_tdh", "EditChanged", self.tdh_EditChanged);

        if (typeof (self.jzxh_EditChanged) == "function")
            win.AttachEvent("sle_jzxh", "EditChanged", self.jzxh_EditChanged);

        if (typeof (self.dw_2_Clicked) == "function")
            win.AttachEvent("dw_2", "Clicked", self.dw_2_Clicked);

        if (typeof (self.dw_1_Clicked) == "function")
            win.AttachEvent("dw_1", "Clicked", self.dw_1_Clicked);

        if (typeof (self.RemoveUsers) == "function")
            win.AttachEvent("cb_3", "Clicked", self.RemoveUsers);

        if (typeof (self.AddUsers) == "function")
            win.AttachEvent("cb_1", "Clicked", self.AddUsers);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_OK", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Exit", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        sle_2.Detach(); sle_2 = null;
        sle_2_gbywbh.Detach(); sle_2_gbywbh = null;
        tb_4.Detach(); tb_4 = null;
        sle_1.Detach(); sle_1 = null;
        sle_kh.Detach(); sle_kh = null;
        tb_3.Detach(); tb_3 = null;
        dp_begin.Detach(); dp_begin = null;
        dp_end.Detach(); dp_end = null;
        sle_2_jzxh.Detach(); sle_2_jzxh = null;
        sle_2_ztdh.Detach(); sle_2_ztdh = null;
        tb_2.Detach(); tb_2 = null;
        sle_tdh.Detach(); sle_tdh = null;
        sle_jzxh.Detach(); sle_jzxh = null;
        dw_2.Detach(); dw_2 = null;
        dw_1.Detach(); dw_1 = null;
        dw_4.Detach(); dw_4 = null;
        tb_1.Detach(); tb_1 = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hddz.ashx");   



	 var dataChanged = false;
	 this.AddUsers = function () {
	     if (dw_1.RowCount() <= 0)
	         return;
	     if (dw_1.GetSelectedRow(0) <= 0) {
	         requestor.MessageBox("提示", "请选择要增加的用户帐号!");
	         return;
	     }

	     dw_1.SetRedraw(false);
	     dw_2.SetRedraw(false);

	     var filter = dw_1.Describe("datawindow.table.filter");
	     if (filter == "?" || filter == "!")
	         filter = "";
	     var sle_1_text = sle_1.GetText();
	     if (sle_1_text == "" || sle_1_text == null) {

	         dw_1.SetFilter("isSelected() ");
	     } else {
	         dw_1.SetFilter("isSelected() and Upper(name) like Upper('%" + sle_1_text + "%')");
	     }

	     dw_1.Filter();
	     var num = dw_2.RowCount() + 1;

	     dw_1.RowsMove(1, dw_1.RowCount(), DWBUFFER.Primary, dw_2, dw_2.RowCount() + 1, DWBUFFER.Primary);
	     var ywbh = requestor.GetParm("ywbh");
	     dw_2.SetItem(num, "gbh_ywbh", ywbh);
	     dw_1.SetFilter(filter);
	     dw_1.Filter();

	     dw_2.SelectRow(0, false);
	     dw_1.SelectRow(0, false);
	     dw_1.SetRedraw(true);
	     dw_2.SetRedraw(true);
	     dataChanged = true;

	 }

	 this.RemoveUsers = function () {

	     if (dw_2.RowCount() <= 0)
	         return;
	     if (dw_2.GetSelectedRow(0) <= 0) {
	         requestor.MessageBox("提示", "请选择要移除的用户帐号!");
	         return;
	     }
	     var yshdfygj = requestor.GetParm("yshdfygj");
	     var skhxgl = requestor.GetParm("skhxgl");

	     if (parseInt(yshdfygj) > 0) {
	         alert("此业务在应收货代费用归集管理中已归集！不能撤销");
	         return;
	     }
	     if (parseInt(skhxgl) > 0) {
	         alert("此业务在收款核销管理中已核销！不能撤销");
	         return;
	     }
	     var dd = dw_2.GetRow();
	     var ywbh = dw_2.GetItemString(dd, "ywbh");
	     var count1 = QsWebSoft.PubMethod.GjhYwbh_yshdfygj2(ywbh).value;
	     var count2 = QsWebSoft.PubMethod.GjhYwbh_skhxgl2(ywbh).value;
	     
	     if (count1 > 0) {
	         alert("此业务在应收货代费用归集管理中已归集！不能撤销");
	         return;
	     }
	     if (count2 > 0) {
	         alert("此业务在收款核销管理中已核销！不能撤销");
	         return;
	     }

	     dw_1.SetRedraw(false);
	     dw_2.SetRedraw(false);

	     var sle_2_text = sle_2.GetText();
	     if (sle_2_text == "" || sle_2_text == null) {

	         dw_2.SetFilter("isSelected() ");
	     } else {
	         dw_2.SetFilter("isSelected() and Upper(name) like Upper('%" + sle_2_text + "%')");
	     }

	     //        dw_2.SetFilter("isSelected()");
	     dw_2.Filter();
	     var num = dw_1.RowCount() + 1;
	     dw_2.RowsMove(1, dw_2.RowCount(), DWBUFFER.Primary, dw_1, dw_1.RowCount() + 1, DWBUFFER.Primary);
	     dw_1.SetItem(num, "gbh_ywbh", "");
	     if (sle_2_text == "" || sle_2_text == null) {
	         dw_2.SetFilter("");
	     } else {
	         dw_2.SetFilter("Upper(name) like Upper('%" + sle_2_text + "%')");
	     }
	     dw_2.Filter();

	     dw_2.SelectRow(0, false);
	     dw_1.SelectRow(0, false);
	     dw_1.SetRedraw(true);
	     dw_2.SetRedraw(true);
	     dataChanged = true;
	 }
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
	         dp_Begin.SetFocus();
	         return;
	     }


	     var userid = requestor.GetParm("userid");
	     var ShareMode = requestor.GetParm("ShareMode");
	     var Dlwtf = requestor.GetParm("Dlwtf");
	     var Tybm = requestor.GetParm("Tybm");
	     var Sfqytybm = requestor.GetParm("Sfqytybm");
	     var lx = ""

	     dw_1.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
	
	 }


	 //dw_1 集装箱号
	 this.jzxh_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "")
	         dw_1.SetFilter("");
	     else
	         dw_1.SetFilter("Upper(hz_jzxh) like Upper('%" + text + "%')");
	     dw_1.Filter();
	     dw_1.Sort();
	     dw_1.SetRedraw(true);
	 }

	 //dw_1 提单号
	 this.tdh_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "")
	         dw_1.SetFilter("");
	     else
	         dw_1.SetFilter("Upper(ztdh) like Upper('%" + text + "%')");
	     dw_1.Filter();
	     dw_1.Sort();
	     dw_1.SetRedraw(true);
	 }
	 //dw_1客户
	 this.kh_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "")
	         dw_1.SetFilter("");
	     else
	         dw_1.SetFilter("Upper(khmc) like Upper('%" + text + "%')");
	     dw_1.Filter();
	     dw_1.Sort();
	     dw_1.SetRedraw(true);
     }
	 //dw_1 业务编号
	 this.ywbh_EditChanged = function (text) {
        dw_1.SetRedraw(false);
        if (text == "")
            dw_1.SetFilter("");
        else
            dw_1.SetFilter("Upper(ywbh) like Upper('%" + text + "%')");
        dw_1.Filter();
        dw_1.Sort();
        dw_1.SetRedraw(true);
    }

    //dw_2 业务编号
    this.sle_2_ywbh_EditChanged = function (text) {
        dw_2.SetRedraw(false);
        if (text == "") 
            dw_2.SetFilter("");
        else
            dw_2.SetFilter("Upper(ywbh) like Upper('%" + text + "%')");
        dw_2.Filter();
        dw_2.Sort();
        dw_2.SetRedraw(true);
    }
    // dw_2 归并集装箱号
    this.sle_2_gbywbh_EditChanged = function (text) {
        dw_2.SetRedraw(false);
        if (text == "")
            dw_2.SetFilter("");
        else
            dw_2.SetFilter("Upper(gbh_ywbh) like Upper('%" + text + "%')");
        dw_2.Filter();
        dw_2.Sort();
        dw_2.SetRedraw(true);
    }
    //dw_2 主提单号
    this.sle_2_ztdh_EditChanged = function (text) {
        dw_2.SetRedraw(false);
        if (text == "")
            dw_2.SetFilter("");
        else
            dw_2.SetFilter("Upper(ztdh) like Upper('%" + text + "%')");
        dw_2.Filter();
        dw_2.Sort();
        dw_2.SetRedraw(true);
    }
    //dw_2 集装箱号
    this.sle_2_jzxh_EditChanged = function (text) {
        dw_2.SetRedraw(false);
        if (text == "")
            dw_2.SetFilter("");
        else
            dw_2.SetFilter("Upper(hz_jzxh) like Upper('%" + text + "%')");
        dw_2.Filter();
        dw_2.Sort();
        dw_2.SetRedraw(true);
    }

    this.Save = function () {
        if (!dataChanged) {
            requestor.MessageBox("提示", "未调整角色用户帐号资料,不需要保存!");
            return;
        }
        var ywbh = requestor.GetParm("ywbh");    //归集——业务编号
        //var id = escape(dw_3.GetItemString(1, "id"));
        //var data = dw_2.GetChanges();
        var data = "";
        dw_2.SetFilter("");
        dw_2.Filter();
        for (row = 1; row <= dw_2.RowCount(); row++) {
            data += escape(dw_2.GetItemString(row, "ywbh")) + ";"
        }

        webReq.Invoke("SetUpdateYwbh", "ywbh=" + ywbh + "&roles=" + data);
        if (webReq.StatusCode() == 200) {
            requestor.MessageBox("提示", "业务编号归集成功!");
            dataChanged = false;
            requestor.Close();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText());
        }
    }
//    //#region 存盘
//    this.Save = function () {
//        if (dw_2.AcceptText() != 1)
//            return;

//        if ((dw_2.ModifiedCount() + dw_2.DeletedCount()) <= 0) {
//            alert("没有数据需要保存!");
//            return;
//        }

//        var dw_d_data = dw_2.GetChanges();
//        if (dw_d_data == "")
//            return;

//        //执行保存的WebService
//        webReq.SetFunctionID(requestor.GetFunctionID());
//        webReq.Invoke("dw_2Save", "dw_2=" + dw_d_data);

//        if (webReq.StatusCode() == 200) {
//            //服务器成功处理，返回单号      
//            dw_2.ResetUpdate();
//            requestor.MessageBox("提示", "数据保存成功!");
//            dw_2.SetFocus();

//        }
//        else {
//            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
//            dw_2.SetFocus();
//        }
//    }
//    //#endregion 
	 this.Exit = function () {
	     if(dataChanged) {
	         if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
	             return;
	     }

	     requestor.Close();
	 }


	 this.dw_4_Retrieve = function (roles) {
	     dw_4.Retrieve(roles);
	 };

 }