///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Import_Xml() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var dw_wlxx = new DataWindow(requestor);
    var dw_cbyc = new DataWindow(requestor);
    var dw_tyzss = new DataWindow(requestor);
    var dw_cmd = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var ds_wlxx = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (dw_wlxx == null) dw_wlxx = new DataWindow(requestor);
        dw_wlxx.Attach(win.Control("dw_wlxx"));
        if (dw_cbyc == null) dw_cbyc = new DataWindow(requestor);
        dw_cbyc.Attach(win.Control("dw_cbyc"));
        if (dw_tyzss == null) dw_tyzss = new DataWindow(requestor);
        dw_tyzss.Attach(win.Control("dw_tyzss"));
        if (dw_cmd == null) dw_cmd = new DataWindow(requestor);
        dw_cmd.Attach(win.Control("dw_cmd"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));
        if (ds_wlxx == null) ds_wlxx = new DataStore(requestor);
        ds_wlxx.Attach(win.Control("ds_wlxx"));

        if (typeof (self.SelectFile) == "function")
            win.AttachEvent("btn_SelectFile", "Clicked", self.SelectFile);

        if (typeof (self.Import) == "function")
            win.AttachEvent("btn_Import", "Clicked", self.Import);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_Save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Exit", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        dw_wlxx.Detach(); dw_wlxx = null;
        dw_cbyc.Detach(); dw_cbyc = null;
        dw_tyzss.Detach(); dw_tyzss = null;
        dw_cmd.Detach(); dw_cmd = null;
        dw_master.Detach(); dw_master = null;
        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        ds_wlxx.Detach(); ds_wlxx = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改



    //#region 变量定义
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/ImpMxd.ashx");

    
    
    //#endregion

    this.SelectFile = function () {

        dw_1.Reset();
        var fileName = requestor.GetFileOpenName("提示", "", ".xml", "Xml文件(*.xml),*.xml;", "");
        if (fileName == "")
            return;

        sle_1.SetText(fileName);
        sle_1.SetFocus();

    }

    this.Import = function () {
        var fileName = sle_1.GetText();
        if (fileName == "") {
            requestor.MessageBox("提示", "请选择要导入的Xml文件!", ICON.StopSign);
            sle_1.SetFocus();
            return;
        }

        if (!requestor.FileExists(fileName)) {
            requestor.MessageBox("提示", "文件[ " + fileName + " ]不存在,请检查!", ICON.StopSign);
            sle_1.SetFocus();
            return;
        }
        dw_master.ResetUpdate();
        dw_cmd.ResetUpdate();
        dw_cbyc.ResetUpdate();
        dw_tyzss.ResetUpdate();
        dw_wlxx.ResetUpdate();
        dw_master.Reset();
        dw_cmd.Reset();
        dw_cbyc.Reset();
        dw_wlxx.Reset();
        dw_tyzss.Reset();
        dw_list.Retrieve();

        dw_1.ImportFile(fileName);
        dw_master.ImportFile(fileName);
        dw_cmd.ImportFile(fileName);
      
        sle_1.SetText("");
        var fph = dw_master.GetItemString(1, "yw_mxd_mxdbh");
        var wxhth = dw_master.GetItemString(1, "yw_mxd_xkzh");
        var zje = dw_master.GetItemNumber(1, "yw_mxd_zje");
        var wbbb = dw_master.GetItemString(1, "yw_mxd_wbbb");
        var khmc = dw_master.GetItemString(1, "yw_mxd_khmc");
       
        var exists = QsWebSoft.PubMethod.CheckMxdbh(fph,1).value;
        if (exists > 0) {
            alert("提示，发票号" + fph + "已经存在，不允许重复导入!");
            return;
        }
        dw_list.InsertRow(0);
        var insertrow = dw_list.GetRow();
        dw_list.SetItem(insertrow, "mxdbh", fph);
        dw_list.SetItem(insertrow, "xkzh", wxhth);
        dw_list.SetItem(insertrow, "zje", zje);
        dw_list.SetItem(insertrow, "khmc", khmc);
        dw_list.SetItem(insertrow, "wbbb", wbbb);
    }

	 this.Exit = function () {
	     if (self.CloseQuery() == 1)
	         return;
        setTimeout("window.close();", 100);
    }

    this.Save = function () {
        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");
        var date = new Date();
        var rowcount = dw_master.RowCount();
        var mygb = dw_master.GetItemString(1, "yw_mxd_mygbmc");
        var zzxfgb = dw_master.GetItemString(1, "yw_mxd_zzxfgbmc");
        if (rowcount <= 0) {
            alert("错误，没有条款信息!");
            return;
        }
        if (dw_cmd.RowCount() == 0) {
            alert("错误，没有商品信息!");
            return;
        }

        var arrayobj = new Array(4);
        var cname = "";
        var ename = "";
        var eaddr = "";
        var tt_no = "";
        arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyWtf(Dlwtf).value;
        if (arrayobj == null) {
            cname = "";
            ename = "";
            eaddr = "";
            tt_no = "";

        }
        else {
            if (arrayobj.length == 0) {
                cname = "";
                ename = "";
                eaddr = "";
                tt_no = "";

            }
            else {
                cname = arrayobj[0];
                ename = arrayobj[1];
                eaddr = arrayobj[2];
                tt_no = arrayobj[3];
            }
        }

        var ywyobj = new Array(2);
        var ywy = "";
        var bm = "";
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid(userid).value;
        if (ywyobj == null) {
            ywy = "";
            bm = "";
        }
        else {
            if (ywyobj.length == 0) {
                ywy = "";
                bm = "";

            }
            else {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }

        var Dlxyh = null;
        Dlxyh = QsWebSoft.PubMethod.GetDlxyhImformationbyUserid(Dlwtf).value;

        var bb = dw_master.GetItemString(1, "yw_mxd_wbbb");
        var zusdhl = QsWebSoft.PubMethod.Wb2Usd(bb).value;
        var zrmbhl = QsWebSoft.PubMethod.Wb2Rmb(bb).value;
        dw_master.SetItem(1, "yw_mxd_tt_no", tt_no)
        dw_master.SetItem(1, "yw_mxd_jydw_cname", cname)
        dw_master.SetItem(1, "yw_mxd_jydw_ename", ename)
        dw_master.SetItem(1, "yw_mxd_jydw_eaddr", eaddr)
        dw_master.SetItem(1, 'yw_mxd_jydwxx', ename + '\n' + eaddr)

        dw_master.SetItem(1, 'yw_mxd_zdr', userid);
        dw_master.SetItem(1, 'yw_mxd_ywy', ywy);
        dw_master.SetItem(1, 'yw_mxd_bm', bm);
        dw_master.SetItem(1, 'yw_mxd_zdrq', date.getVarDate());
        dw_master.SetItem(1, 'yw_mxd_fprq', date.getVarDate());
        dw_master.SetItem(1, 'yw_mxd_dz_state', "新制");
        dw_master.SetItem(1, 'yw_mxd_spjc', "未审批");
        dw_master.SetItem(1, 'yw_mxd_zusdhl', zusdhl);
        dw_master.SetItem(1, 'yw_mxd_zrmbhl', zrmbhl);
        var zje = dw_master.GetItemNumber(1, "yw_mxd_zje");
        ldc_zusdje = zusdhl * zje; //折美元
        ldc_zusdje = parseFloat(ldc_zusdje.toFixed(2));
        ldc_zrmbje = zrmbhl * zje; //折人民币
        ldc_zrmbje = parseFloat(ldc_zrmbje.toFixed(2));
        dw_master.SetItem(1, "yw_mxd_zusdje", ldc_zusdje);
        dw_master.SetItem(1, "yw_mxd_zrmbje", ldc_zrmbje);
        dw_cbyc.SetItem(1, "zje_usd", ldc_zusdje);
        dw_master.SetItem(1, 'yw_mxd_dlwtf', Dlwtf);
        dw_master.SetItem(1, 'yw_mxd_dlxyh', Dlxyh);
        dw_master.SetItem(1, 'yw_mxd_mxdbh_lsh', userip);
        dw_master.SetItem(1, "yw_mxd_state", "新制");
        dw_master.SetItem(1, "yw_mxd_bbh", 1);
        dw_master.SetItem(1, "yw_mxd_bb_flag", "Y");
        dw_master.SetItem(1, 'yw_mxd_zydl', "合营");
        dw_master.SetItem(1, "yw_mxd_dzjh_state", "新制");
        dw_master.SetItem(1, "yw_mxd_cy_state", "新制");
        dw_master.SetItem(1, "yw_mxd_imp_flag", "Y");
        dw_master.SetItem(1, "yw_mxd_imp_date", date.getVarDate());
        dw_master.SetItem(1, "yw_mxd_khbm", "dr");
        dw_master.SetItem(1, "yw_mxd_mygb", mygb);
        dw_master.SetItem(1, "yw_mxd_zzxfgb", zzxfgb);
        dw_tyzss.InsertRow(0);
        dw_cbyc.InsertRow(0);
        dw_tyzss.SetItem(1, "yfzdtt", cname)
        dw_cbyc.SetItem(1, "zusdhl", zusdhl);
        dw_cbyc.SetItem(1, "zrmbhl", zrmbhl);
        dw_cbyc.SetItem(1, "zydl", "合营");



        if (dw_wlxx.RowCount() <= 0) {
            ds_wlxx.Retrieve('MODEL')
            ds_wlxx.RowsCopy(1, 1000, DWBUFFER.Primary, dw_wlxx, 1, DWBUFFER.Primary)
        }


        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {
            dw_cmd.SetItem(row, "yw_mxd_cmd_zldw", "KGS");
        }

        self.SetZmjztj();

        if (dw_master.AcceptText() != 1)
            return;

        if (dw_cmd.AcceptText() != 1)
            return;

        if (dw_cbyc.AcceptText() != 1)
            return;

        if (dw_tyzss.AcceptText() != 1)
            return;

        if (dw_wlxx.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() + dw_cbyc.ModifiedCount() + dw_tyzss.ModifiedCount() + dw_wlxx.ModifiedCount() + dw_wlxx.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }
        var row = dw_master.GetRow();
        var mxdbh = dw_master.GetItemString(row, "yw_mxd_mxdbh");
        var bbh = dw_master.GetItemNumber(row, "yw_mxd_bbh");
        mxdbh = mxdbh.replace(' ', '');
        if (mxdbh == null || mxdbh == "") {
            alert("明细单编号不能为空!");
            return;
        }


        var num = QsWebSoft.PubMethod.CheckMxdbh(mxdbh, bbh).value;
        if (num > 0) {
            alert("提示，明细单编号已经存在,保存失败");
            return;
        }

        if (mxdbh.indexOf("&") > 0) {
            alert("明细单编号不能包含&符号!");
            return;
        }
        if (mxdbh.indexOf("%") > 0) {
            alert("明细单编号不能包含%符号!");
            return;
        }

        if (mxdbh.indexOf("#") > 0) {
            alert("明细单编号不能包含#符号!");
            return;
        }
        if (mxdbh.indexOf(",") > 0) {
            alert("明细单编号不能包含逗号!");
            return;
        }
        if (mxdbh.indexOf("（") > 0) {
            alert("明细单编号不能包含中文括号左符号!");
            return;
        }
        if (mxdbh.indexOf("）") > 0) {
            alert("明细单编号不能包含中文右括号!");
            return;
        }

        ld_yqcyr = new Date(dw_master.GetItemDate(1, "yw_mxd_fprq"));
        var ls_date = QsWebSoft.PubMethod.CheckDate(ld_yqcyr).value;
        if (ld_yqcyr == null || ls_date == "1900-01-01") {
            alert("发票日期为空，保存失败!");
            return;
        }

        var xkzh = dw_master.GetItemString(row, "yw_mxd_xkzh");
        if (xkzh == null || xkzh == "") {
            alert("合同协议号为空，保存失败!");
            return;
        }
        if (len(xkzh) > 50) {
            alert("合同协议号长度不能超过50位，保存失败!");
            return;
        }


        ld_yqcyr = new Date(dw_master.GetItemDate(1, "yw_mxd_zyqx"));
        ls_date = QsWebSoft.PubMethod.CheckDate(ld_yqcyr).value;
        if (ld_yqcyr == null || ls_date == "1900-01-01") {
            alert("装运期限为空，保存失败!");
            return;
        }

        var wbbb = dw_master.GetItemString(row, "yw_mxd_wbbb");
        if (wbbb == null || wbbb == "") {
            alert("币别为空，保存失败!");
            return;
        }


        var zje = dw_master.GetItemNumber(row, "yw_mxd_zje");
        if (zje == 0 || zje == null) {
            alert("发票总金额不得为0，保存失败!");
            return;
        }
        //主从表金额比对
        var spje = dw_cmd.GetItemNumber(1, "sum_wxzj");
        var je = zje - spje;
        ce = parseFloat(je.toFixed(2));
        zje = zje.toFixed(2);
        spje = spje.toFixed(2);
        if (ce != 0) {
            alert("错误!商品金额为" + spje + "，跟总金额" + zje + "不一致!");
            return;
        }


        var myfs = dw_master.GetItemString(row, "yw_mxd_myfs");
        if (myfs == null || myfs == "") {
            alert("贸易方式为空，保存失败!");
            return;
        }

        //加工贸易必须输手册号，必须有成品序号

        if (myfs == "J" || myfs == "L") {
            var jgscbh = dw_master.GetItemString(row, "yw_mxd_jgscbh");
            if (jgscbh == null || jgscbh == "") {
                alert("加工贸易，加工手册编号不能为空，保存失败!");
                return;
            }

            for (row = dw_cmd.RowCount(); row > 0; row--) {
                var cpxh = dw_cmd.GetItemNumber(row, "yw_mxd_cmd_cpxh")
                if (cpxh == null || cpxh == 0) {
                    alert("加工贸易，第" + row + "行商品对应的成品序号不能为空!");
                    return;
                }
            }



        }


        var jgtk = dw_master.GetItemString(row, "yw_mxd_jgtk");
        if (jgtk == null || jgtk == "") {
            alert("价格条款为空，保存失败!");
            return;
        }

        var shfs = dw_master.GetItemString(row, "yw_mxd_shfs");
        if (shfs == null || shfs == "") {
            alert("收汇方式为空，保存失败!");
            return;
        }

        var rate = dw_master.GetItemNumber(row, "yw_mxd_rate");
        if (rate == null || rate == 0 || rate > 1) {
            alert("错误!收汇方式1比例不正确!");
            return;
        }

        var shfs2 = dw_master.GetItemString(row, "yw_mxd_shfs2");
        if (shfs2 != null && shfs2 != "") {
            var rate2 = dw_master.GetItemNumber(row, "yw_mxd_rate2");
            if (rate2 == null || rate2 == 0 || rate2 > 1) {
                alert("错误!收汇方式2比例不正确!");
                return;
            }

            var bl = rate + rate2;
            bl = parseFloat(bl.toFixed(2));
            if (bl != 1) {
                alert("错误!两种收汇方式比例合计不等于100%!");
                return;
            }

        }


        var ysfs = dw_master.GetItemString(row, "yw_mxd_ysfs");
        if (ysfs == null || ysfs == "") {
            alert("运输方式为空，保存失败!");
            return;
        }

        var mygb = dw_master.GetItemString(row, "yw_mxd_mygbmc");
        if (mygb == null || mygb == "") {
            alert("贸易国别为空，保存失败!");
            return;
        }

        var zzxfgbmc = dw_master.GetItemString(row, "yw_mxd_zzxfgbmc");
        if (zzxfgbmc == null || zzxfgbmc == "") {
            alert("最终消费国别为空，保存失败!");
            return;
        }

        var jnhyd = dw_master.GetItemString(row, "yw_mxd_jnhyd");
        if (jnhyd == null || jnhyd == "") {
            alert("境内货源地为空，保存失败!");
            return;
        }

        var ckka = dw_master.GetItemString(row, "yw_mxd_ckka");
        if (ckka == null || ckka == "") {
            alert("出口口岸为空，保存失败!");
            return;
        }

        var mdka = dw_master.GetItemString(row, "yw_mxd_mdka");
        if (mdka == null || mdka == "") {
            alert("目的口岸为空，保存失败!");
            return;
        }


        var kffp = dw_master.GetItemString(row, "yw_mxd_kffp");
        if (kffp == null || kffp == "") {
            alert("可否分批为空，保存失败!");
            return;
        }


        var kfzy = dw_master.GetItemString(row, "yw_mxd_kfzy");
        if (kfzy == null || kfzy == "") {
            alert("可否转运为空，保存失败!");
            return;
        }



        var khbm = dw_master.GetItemString(row, "yw_mxd_khmc");
        if (khbm == null || khbm == "") {
            alert("国外客户为空，保存失败!");
            return;
        }

        var khbm = dw_master.GetItemString(row, "yw_mxd_shr");
        if (khbm == null || khbm == "") {
            alert("收货人为空，保存失败!");
            return;
        }

        var khbm = dw_master.GetItemString(row, "yw_mxd_tzr");
        if (khbm == null || khbm == "") {
            alert("通知人为空，保存失败!");
            return;
        }

        var khbm = dw_master.GetItemString(row, "yw_mxd_ttr");
        if (khbm == null || khbm == "") {
            alert("抬头人为空，保存失败!");
            return;
        }

        var khbm = dw_master.GetItemString(row, "yw_mxd_fkr");
        if (khbm == null || khbm == "") {
            alert("付款人为空，保存失败!");
            return;
        }


        temp = dw_master.GetItemString(row, "yw_mxd_shr");
        if (len(temp) > 255) {
            alert("收货人长度超长，保存失败!");
            return;
        }
        temp = dw_master.GetItemString(row, "yw_mxd_tzr");
        if (len(temp) > 255) {
            alert("通知人长度超长，保存失败!");
            return;
        }
        temp = dw_master.GetItemString(row, "yw_mxd_ttr");
        if (len(temp) > 255) {
            alert("抬头人长度超长，保存失败!");
            return;
        }

        temp = dw_master.GetItemString(row, "yw_mxd_fkr");
        if (len(temp) > 255) {
            alert("付款人长度超长，保存失败!");
            return;
        }


        //更新行号
        for (row = dw_cmd.RowCount(); row > 0; row--) {

            dw_cmd.SetItem(row, "yw_mxd_cmd_cxh", row);
            dw_cmd.SetItem(row, "yw_mxd_cmd_mxdbh", mxdbh);
            dw_cmd.SetItem(row, "yw_mxd_cmd_bbh", bbh);
            dw_cmd.SetItem(row, "yw_mxd_cmd_mxd_spid", row);
            dw_cmd.SetItem(row, "yw_mxd_cmd_zldw", "KGS");
        }






        for (row = dw_wlxx.RowCount(); row > 0; row--) {

            dw_wlxx.SetItem(row, "cxh", row);
            dw_wlxx.SetItem(row, "mxdbh", mxdbh);
        }
        row = dw_cbyc.GetRow();
        dw_cbyc.SetItem(row, "mxdbh", mxdbh);
        dw_cbyc.SetItem(row, "bbh", bbh);
        row = dw_tyzss.GetRow();
        dw_tyzss.SetItem(row, "mxdbh", mxdbh);
        dw_tyzss.SetItem(row, "bbh", bbh);


        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();
        var dw_cbyc_data = dw_cbyc.GetChanges();

        var dw_tyzss_data = dw_tyzss.GetChanges();
        var dw_wlxx_data = dw_wlxx.GetChanges();
        if (dw_master_data == "" && dw_cmd_data == "" && dw_cbyc_data == "" && dw_tyzss_data == "" && dw_wlxx_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&dw_Detail=" + dw_cmd_data + "&dw_Cbyc=" + dw_cbyc_data + "&dw_Tyzss=" + dw_tyzss_data + "&dw_Wlxx=" + dw_wlxx_data + "&mxdbh=" + mxdbh + "&bbh=" + bbh);


        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            mxdbh = webReq.ResponseText();
            dw_master.SetItem(1, "yw_mxd_mxdbh", mxdbh);
            dw_cbyc.SetItem(1, "mxdbh", mxdbh);
            dw_tyzss.SetItem(1, "mxdbh", mxdbh);
            for (row = 1; row <= dw_cmd.RowCount(); row++) {
                dw_cmd.SetItem(row, "yw_mxd_cmd_mxdbh", mxdbh);
            }


            for (row = 1; row <= dw_wlxx.RowCount(); row++) {
                dw_wlxx.SetItem(row, "mxdbh", mxdbh);
                dw_wlxx.SetItem(row, "cxh", row);
            }

            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            dw_cbyc.ResetUpdate();
            dw_tyzss.ResetUpdate();
            dw_wlxx.ResetUpdate();
            dw_master.Reset();
            dw_cmd.Reset();
            dw_cbyc.Reset();
            dw_wlxx.Reset();
            dw_tyzss.Reset();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.Retrieve();
            //	         dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }

 //#region GenBzms
    this.GenBzms = function (row) {
        dw_cmd.AcceptText();
        dw_master.AcceptText();

        ldc_bzjs = dw_master.GetItemNumber(1, 'yw_mxd_bzjs');
        ls_bzdw = dw_master.GetItemString(1, 'yw_mxd_bzdw');

//        if (dw_cmd.RowCount() == 0) {
            ldc_nbzjs = 0;
//        }
//        else {
//            ldc_nbzjs = dw_cmd.GetItemNumber(1, 'sum_nbzjs');
//            ls_nbzdw = dw_cmd.GetItemString(1, 'c_nbzdw');
//        }

        if (dw_cmd.RowCount() > 0) {
            ls_max_bzdw = dw_cmd.Describe("evaluate('max(yw_mxd_cmd_bzdw)',0)");
            ls_min_bzdw = dw_cmd.Describe("evaluate('min(yw_mxd_cmd_bzdw)',0)");
        }

        if (ls_max_bzdw != ls_min_bzdw) {
            ls_bzdw = 'PACKAGES';
        }

        var ls_bzjs = QsWebSoft.PubMethod.Ywdx(ldc_bzjs).value;
        var ls_nbzjs = QsWebSoft.PubMethod.Ywdx(ldc_nbzjs).value;
        if (ldc_bzjs > 0 && ldc_nbzjs > 0) {
            ls_bzms = "TOTAL PACKED IN " + ls_bzjs + " " + ls_bzdw + " ( " + ls_nbzjs + " " + ls_nbzdw + " ) ";
        }
        else if (ldc_bzjs > 0 && (ldc_nbzjs <= 0 || ldc_nbzjs == null)) {
            ls_bzms = "TOTAL PACKED IN " + ls_bzjs + " " + ls_bzdw;
        }
        else {
            ls_bzms = '';
        }

        dw_master.SetItem(1, 'yw_mxd_bzms', ls_bzms);

    }
    //#endregion


  //#region SetZmjztj
    this.SetZmjztj = function (row) {
        dw_cmd.AcceptText();
        if (dw_cmd.RowCount() > 0) {
            ldc_zsl = dw_cmd.GetItemNumber(1, "sum_jjsl");
            ldc_zsl = parseFloat(ldc_zsl.toFixed(2));
        }
        else {
            ldc_zsl = 0
        }

        if (dw_cmd.RowCount() > 0) {
            ldc_zjs = dw_cmd.GetItemNumber(1, "sum_bzjs");
            ldc_zjs = parseFloat(ldc_zjs.toFixed(2));
            ldc_zmz = dw_cmd.GetItemNumber(1, "sum_mz");
            ldc_zmz = parseFloat(ldc_zmz.toFixed(2));
            ldc_zjz = dw_cmd.GetItemNumber(1, "sum_jz");
            ldc_zjz = parseFloat(ldc_zjz.toFixed(2));
            ldc_ztj = dw_cmd.GetItemNumber(1, "sum_tj");
            ldc_ztj = parseFloat(ldc_ztj.toFixed(3));
        }
        else {
            ldc_zjs = 0;
            ldc_zmz = 0;
            ldc_zjz = 0;
            ldc_ztj = 0;
        }
        var sldw = dw_cmd.Describe("evaluate('max(yw_mxd_cmd_jjdw)',0)");
        var bzdw = dw_cmd.Describe("evaluate('max(yw_mxd_cmd_bzdw)',0)");
        var zldw = dw_cmd.Describe("evaluate('max(yw_mxd_cmd_zldw)',0)");
        dw_master.SetItem(1, "yw_mxd_spsl", ldc_zsl)
        dw_master.SetItem(1, "yw_mxd_sldw", sldw)
        dw_master.SetItem(1, "yw_mxd_bzjs", ldc_zjs)
        dw_master.SetItem(1, "yw_mxd_bzdw", bzdw)
        dw_master.SetItem(1, "yw_mxd_zmz", ldc_zmz)
        dw_master.SetItem(1, "yw_mxd_zjz", ldc_zjz)
        dw_master.SetItem(1, "yw_mxd_zldw", zldw)
        dw_master.SetItem(1, "yw_mxd_ztj", ldc_ztj)

        self.GenBzms();

    }
    //#endregion


    //#region 获取字符串长度
    function len(s) {
        var l = 0; 
        var a = s.split("");
        for (var i = 0; i < a.length; i++) {
            if (a[i].charCodeAt(0) < 299)
            { l++; }
            else { l += 2; } 
        }
        return l;
    }

    //#endregion


    //#region CloseQuery
    this.CloseQuery = function () {
      
        dw_master.AcceptText();
        dw_cmd.AcceptText();
        dw_cbyc.AcceptText();
        dw_tyzss.AcceptText();
        dw_wlxx.AcceptText();
        if ((dw_master.ModifiedCount() + dw_cbyc.ModifiedCount() + dw_tyzss.ModifiedCount() + dw_cmd.DeletedCount() + dw_cmd.ModifiedCount() + dw_wlxx.DeletedCount() + dw_wlxx.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion




    }



 