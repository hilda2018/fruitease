///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Sjzf_Select() {

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
         if (dwo == "dw_hddz_hdfysjzf_edit_cmd") {
             self.Ky_Cdph();
         };

         requestor.Close();

     }

     //增加记录
     this.Ky_Cdph = function () {
         var count = 0;
         var sjzfrq;
         var sqdbh = dw_d.GetItemString(1, "sqdbh");
         if (sqdbh == null) {
             sqdbh = ""
         }

         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             }

             var sjlx = dw_1.GetItemString(row, "sjlx");
             if (sjlx == "关税") {

                 if (rownum > 0) {
                     ll_insertrow = dw_d.InsertRow(rownum);
                     rownum = rownum + 1
                 }
                 else {
                     ll_insertrow = dw_d.InsertRow(0);
                 }

                 var gs = dw_1.GetItemNumber(row, "sjje")
                 if (gs != null && gs != 0) {
                     dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                     dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
                     dw_d.SetItem(ll_insertrow, "khbm", dw_1.GetItemString(row, "khbm"));
                     dw_d.SetItem(ll_insertrow, "khmc", dw_1.GetItemString(row, "khmc"));
                     dw_d.SetItem(ll_insertrow, "khjc", dw_1.GetItemString(row, "khjc"));
                     dw_d.SetItem(ll_insertrow, "khpym", dw_1.GetItemString(row, "khpym"));
                     dw_d.SetItem(ll_insertrow, "hz_jzxh", dw_1.GetItemString(row, "hz_jzxh"));
                     dw_d.SetItem(ll_insertrow, "ztdh", dw_1.GetItemString(row, "ztdh"));
                     dw_d.SetItem(ll_insertrow, "bgdh", dw_1.GetItemString(row, "bgdh"));
                     dw_d.SetItem(ll_insertrow, "bslx", dw_1.GetItemString(row, "bslx"));
                     dw_d.SetItem(ll_insertrow, "sjzf_cxh", dw_1.GetItemNumber(row, "sjzf_cxh"));
                     sjzfrq = dw_1.GetItemDate(row, "jsjzf_sjzfrq")
                     if (new Date(sjzfrq) > new Date("1900/1/1")) {
                         dw_d.SetItem(ll_insertrow, "sjzfrq", dw_1.GetItemDate(row, "sjzfrq"));
                         dw_d.SetItem(ll_insertrow, "fkts", dw_1.GetItemNumber(row, "fkts"));
                     }
                     var ywbh = dw_1.GetItemString(row, "ywbh");
                     fkcs = QsWebSoft.PubMethod.ReadFycs(dw_d, "0301", sqdbh).value;

                     for (var rowfind = 1; rowfind <= dw_d.RowCount(); rowfind++) {
                         if (dw_d.Find("ywbh = '" + ywbh + "' and fybm = '0301'", rowfind, rowfind) > 0) {
                             fkcs++
                         }
                     };
                     dw_d.SetItem(ll_insertrow, "fkcs", fkcs + 1)

                     dw_d.SetItem(ll_insertrow, "zfdxbm", dw_1.GetItemString(row, "shdwbm"));
                     dw_d.SetItem(ll_insertrow, "zfdxmc", dw_1.GetItemString(row, "shdwmc"));
                     dw_d.SetItem(ll_insertrow, "zfdxjc", dw_1.GetItemString(row, "shdwjc"));
                     dw_d.SetItem(ll_insertrow, "zfdxpym", dw_1.GetItemString(row, "shdwpym"));

                     dw_d.SetItem(ll_insertrow, "jdrjc", dw_1.GetItemString(row, "yw_hddz_jdrjc"));
                     dw_d.SetItem(ll_insertrow, "jdrmc", dw_1.GetItemString(row, "yw_hddz_jdrmc"));
                     dw_d.SetItem(ll_insertrow, "jdrbm", dw_1.GetItemString(row, "yw_hddz_jdrbm"));
                     dw_d.SetItem(ll_insertrow, "jdrpym", dw_1.GetItemString(row, "yw_hddz_jdrpym"));

                     dw_d.SetItem( ll_insertrow, "shdwbm", dw_1.GetItemString( row, "shdwbm" ) );
                     dw_d.SetItem( ll_insertrow, "shdwmc", dw_1.GetItemString( row, "shdwmc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwjc", dw_1.GetItemString( row, "shdwjc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwpym", dw_1.GetItemString( row, "shdwpym" ) );

                     dw_d.SetItem( ll_insertrow, "jydwbm", dw_1.GetItemString( row, "jydwbm" ) );
                     dw_d.SetItem( ll_insertrow, "jydwmc", dw_1.GetItemString( row, "jydwmc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwjc", dw_1.GetItemString( row, "jydwjc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwpym", dw_1.GetItemString( row, "jydwpym" ) );

                     dw_d.SetItem(ll_insertrow, "fybm", "0301");
                     dw_d.SetItem(ll_insertrow, "je", gs);

                 }
             }
             if (sjlx == "增值税") {
                 var zzs = dw_1.GetItemNumber(row, "sjje")
                 if (zzs != null && zzs != 0) {

                     if (rownum > 0) {
                         ll_insertrow = dw_d.InsertRow(rownum);
                         rownum = rownum + 1
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(0);
                     }


                     dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                     dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
                     dw_d.SetItem(ll_insertrow, "khbm", dw_1.GetItemString(row, "khbm"));
                     dw_d.SetItem(ll_insertrow, "khmc", dw_1.GetItemString(row, "khmc"));
                     dw_d.SetItem(ll_insertrow, "khjc", dw_1.GetItemString(row, "khjc"));
                     dw_d.SetItem(ll_insertrow, "khpym", dw_1.GetItemString(row, "khpym"));
                     dw_d.SetItem(ll_insertrow, "hz_jzxh", dw_1.GetItemString(row, "hz_jzxh"));
                     dw_d.SetItem(ll_insertrow, "ztdh", dw_1.GetItemString(row, "ztdh"));
                     dw_d.SetItem(ll_insertrow, "bgdh", dw_1.GetItemString(row, "bgdh"));
                     dw_d.SetItem(ll_insertrow, "bslx", dw_1.GetItemString(row, "bslx"));
                     dw_d.SetItem(ll_insertrow, "sjzf_cxh", dw_1.GetItemNumber(row, "sjzf_cxh"));
                     sjzfrq = dw_1.GetItemDate(row, "jsjzf_sjzfrq")
                     if (new Date(sjzfrq) > new Date("1900/1/1")) {
                         dw_d.SetItem(ll_insertrow, "sjzfrq", dw_1.GetItemDate(row, "sjzfrq"));
                         dw_d.SetItem(ll_insertrow, "fkts", dw_1.GetItemNumber(row, "fkts"));
                     }
                     var ywbh = dw_1.GetItemString(row, "ywbh");
                     fkcs = QsWebSoft.PubMethod.ReadFycs(dw_d, "0302", sqdbh).value;
                     for (var rowfind = 1; rowfind <= dw_d.RowCount(); rowfind++) {
                         if (dw_d.Find("ywbh = '" + ywbh + "' and fybm = '0302'", rowfind, rowfind) > 0) {
                             fkcs++
                         }
                     };
                     dw_d.SetItem(ll_insertrow, "fkcs", fkcs + 1)

                     dw_d.SetItem(ll_insertrow, "zfdxbm", dw_1.GetItemString(row, "shdwbm"));
                     dw_d.SetItem(ll_insertrow, "zfdxmc", dw_1.GetItemString(row, "shdwmc"));
                     dw_d.SetItem(ll_insertrow, "zfdxjc", dw_1.GetItemString(row, "shdwjc"));
                     dw_d.SetItem(ll_insertrow, "zfdxpym", dw_1.GetItemString(row, "shdwpym"));

                     dw_d.SetItem(ll_insertrow, "jdrjc", dw_1.GetItemString(row, "yw_hddz_jdrjc"));
                     dw_d.SetItem(ll_insertrow, "jdrmc", dw_1.GetItemString(row, "yw_hddz_jdrmc"));
                     dw_d.SetItem(ll_insertrow, "jdrbm", dw_1.GetItemString(row, "yw_hddz_jdrbm"));
                     dw_d.SetItem( ll_insertrow, "jdrpym", dw_1.GetItemString( row, "yw_hddz_jdrpym" ) );

                     dw_d.SetItem( ll_insertrow, "shdwbm", dw_1.GetItemString( row, "shdwbm" ) );
                     dw_d.SetItem( ll_insertrow, "shdwmc", dw_1.GetItemString( row, "shdwmc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwjc", dw_1.GetItemString( row, "shdwjc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwpym", dw_1.GetItemString( row, "shdwpym" ) );

                     dw_d.SetItem( ll_insertrow, "jydwbm", dw_1.GetItemString( row, "jydwbm" ) );
                     dw_d.SetItem( ll_insertrow, "jydwmc", dw_1.GetItemString( row, "jydwmc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwjc", dw_1.GetItemString( row, "jydwjc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwpym", dw_1.GetItemString( row, "jydwpym" ) );

                     dw_d.SetItem(ll_insertrow, "fybm", "0302");
                     dw_d.SetItem(ll_insertrow, "je", zzs);
                 }
             };

             if (sjlx == "消费税") {
                 var bzj = dw_1.GetItemNumber(row, "sjje")
                 if (bzj != null && bzj != 0) {
                     if (rownum > 0) {
                         ll_insertrow = dw_d.InsertRow(rownum);
                         rownum = rownum + 1
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(0);
                     }

                     dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                     dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
                     dw_d.SetItem(ll_insertrow, "khbm", dw_1.GetItemString(row, "khbm"));
                     dw_d.SetItem(ll_insertrow, "khmc", dw_1.GetItemString(row, "khmc"));
                     dw_d.SetItem(ll_insertrow, "khjc", dw_1.GetItemString(row, "khjc"));
                     dw_d.SetItem(ll_insertrow, "khpym", dw_1.GetItemString(row, "khpym"));
                     dw_d.SetItem(ll_insertrow, "hz_jzxh", dw_1.GetItemString(row, "hz_jzxh"));
                     dw_d.SetItem(ll_insertrow, "ztdh", dw_1.GetItemString(row, "ztdh"));
                     dw_d.SetItem(ll_insertrow, "bgdh", dw_1.GetItemString(row, "bgdh"));
                     dw_d.SetItem(ll_insertrow, "bslx", dw_1.GetItemString(row, "bslx"));
                     dw_d.SetItem(ll_insertrow, "sjzf_cxh", dw_1.GetItemNumber(row, "sjzf_cxh"));
                     sjzfrq = dw_1.GetItemDate(row, "jsjzf_sjzfrq");

                     if (new Date(sjzfrq) > new Date("1900/1/1")) {
                         dw_d.SetItem(ll_insertrow, "sjzfrq", dw_1.GetItemDate(row, "sjzfrq"));
                         dw_d.SetItem(ll_insertrow, "fkts", dw_1.GetItemNumber(row, "fkts"));
                     }
                     var ywbh = dw_1.GetItemString(row, "ywbh");
                     fkcs = QsWebSoft.PubMethod.ReadFycs(dw_d, "0307", sqdbh).value;
                     for (var rowfind = 1; rowfind <= dw_d.RowCount(); rowfind++) {
                         if (dw_d.Find("ywbh = '" + ywbh + "' and fybm = '0307'", rowfind, rowfind) > 0) {
                             fkcs++
                         }
                     };
                     dw_d.SetItem(ll_insertrow, "fkcs", fkcs + 1)

                     dw_d.SetItem(ll_insertrow, "zfdxbm", dw_1.GetItemString(row, "shdwbm"));
                     dw_d.SetItem(ll_insertrow, "zfdxmc", dw_1.GetItemString(row, "shdwmc"));
                     dw_d.SetItem(ll_insertrow, "zfdxjc", dw_1.GetItemString(row, "shdwjc"));
                     dw_d.SetItem(ll_insertrow, "zfdxpym", dw_1.GetItemString(row, "shdwpym"));

                     dw_d.SetItem(ll_insertrow, "jdrjc", dw_1.GetItemString(row, "yw_hddz_jdrjc"));
                     dw_d.SetItem(ll_insertrow, "jdrmc", dw_1.GetItemString(row, "yw_hddz_jdrmc"));
                     dw_d.SetItem(ll_insertrow, "jdrbm", dw_1.GetItemString(row, "yw_hddz_jdrbm"));
                     dw_d.SetItem( ll_insertrow, "jdrpym", dw_1.GetItemString( row, "yw_hddz_jdrpym" ) );

                     dw_d.SetItem( ll_insertrow, "shdwbm", dw_1.GetItemString( row, "shdwbm" ) );
                     dw_d.SetItem( ll_insertrow, "shdwmc", dw_1.GetItemString( row, "shdwmc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwjc", dw_1.GetItemString( row, "shdwjc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwpym", dw_1.GetItemString( row, "shdwpym" ) );

                     dw_d.SetItem( ll_insertrow, "jydwbm", dw_1.GetItemString( row, "jydwbm" ) );
                     dw_d.SetItem( ll_insertrow, "jydwmc", dw_1.GetItemString( row, "jydwmc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwjc", dw_1.GetItemString( row, "jydwjc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwpym", dw_1.GetItemString( row, "jydwpym" ) );

                     dw_d.SetItem(ll_insertrow, "fybm", "0307");
                     dw_d.SetItem(ll_insertrow, "je", bzj);
                 }
             };
             if (sjlx == "保证金") {
                 var bzj = dw_1.GetItemNumber(row, "sjje")
                 if (bzj != null && bzj != 0) {
                     if (rownum > 0) {
                         ll_insertrow = dw_d.InsertRow(rownum);
                         rownum = rownum + 1
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(0);
                     }

                     dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                     dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
                     dw_d.SetItem(ll_insertrow, "khbm", dw_1.GetItemString(row, "khbm"));
                     dw_d.SetItem(ll_insertrow, "khmc", dw_1.GetItemString(row, "khmc"));
                     dw_d.SetItem(ll_insertrow, "khjc", dw_1.GetItemString(row, "khjc"));
                     dw_d.SetItem(ll_insertrow, "khpym", dw_1.GetItemString(row, "khpym"));
                     dw_d.SetItem(ll_insertrow, "hz_jzxh", dw_1.GetItemString(row, "hz_jzxh"));
                     dw_d.SetItem(ll_insertrow, "ztdh", dw_1.GetItemString(row, "ztdh"));
                     dw_d.SetItem(ll_insertrow, "bgdh", dw_1.GetItemString(row, "bgdh"));
                     dw_d.SetItem(ll_insertrow, "bslx", dw_1.GetItemString(row, "bslx"));
                     dw_d.SetItem(ll_insertrow, "sjzf_cxh", dw_1.GetItemNumber(row, "sjzf_cxh"));
                     sjzfrq = dw_1.GetItemDate(row, "jsjzf_sjzfrq");

                     if (new Date(sjzfrq) > new Date("1900/1/1")) {
                         dw_d.SetItem(ll_insertrow, "sjzfrq", dw_1.GetItemDate(row, "sjzfrq"));
                         dw_d.SetItem(ll_insertrow, "fkts", dw_1.GetItemNumber(row, "fkts"));
                     }
                     var ywbh = dw_1.GetItemString(row, "ywbh");
                     fkcs = QsWebSoft.PubMethod.ReadFycs(dw_d, "0303", sqdbh).value;
                     for (var rowfind = 1; rowfind <= dw_d.RowCount(); rowfind++) {
                         if (dw_d.Find("ywbh = '" + ywbh + "' and fybm = '0303'", rowfind, rowfind) > 0) {
                             fkcs++
                         }
                     };
                     dw_d.SetItem(ll_insertrow, "fkcs", fkcs + 1)

                     dw_d.SetItem(ll_insertrow, "zfdxbm", dw_1.GetItemString(row, "shdwbm"));
                     dw_d.SetItem(ll_insertrow, "zfdxmc", dw_1.GetItemString(row, "shdwmc"));
                     dw_d.SetItem(ll_insertrow, "zfdxjc", dw_1.GetItemString(row, "shdwjc"));
                     dw_d.SetItem(ll_insertrow, "zfdxpym", dw_1.GetItemString(row, "shdwpym"));

                     dw_d.SetItem(ll_insertrow, "jdrjc", dw_1.GetItemString(row, "yw_hddz_jdrjc"));
                     dw_d.SetItem(ll_insertrow, "jdrmc", dw_1.GetItemString(row, "yw_hddz_jdrmc"));
                     dw_d.SetItem(ll_insertrow, "jdrbm", dw_1.GetItemString(row, "yw_hddz_jdrbm"));
                     dw_d.SetItem( ll_insertrow, "jdrpym", dw_1.GetItemString( row, "yw_hddz_jdrpym" ) );

                     dw_d.SetItem( ll_insertrow, "shdwbm", dw_1.GetItemString( row, "shdwbm" ) );
                     dw_d.SetItem( ll_insertrow, "shdwmc", dw_1.GetItemString( row, "shdwmc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwjc", dw_1.GetItemString( row, "shdwjc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwpym", dw_1.GetItemString( row, "shdwpym" ) );

                     dw_d.SetItem( ll_insertrow, "jydwbm", dw_1.GetItemString( row, "jydwbm" ) );
                     dw_d.SetItem( ll_insertrow, "jydwmc", dw_1.GetItemString( row, "jydwmc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwjc", dw_1.GetItemString( row, "jydwjc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwpym", dw_1.GetItemString( row, "jydwpym" ) );

                     dw_d.SetItem(ll_insertrow, "fybm", "0303");
                     dw_d.SetItem(ll_insertrow, "je", bzj);
                 }
             };
             if (sjlx == "滞报金") {
                 var zbj = dw_1.GetItemNumber(row, "sjje")
                 if (zbj != null && zbj != 0) {
                     if (rownum > 0) {
                         ll_insertrow = dw_d.InsertRow(rownum);
                         rownum = rownum + 1
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(0);
                     }

                     dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                     dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
                     dw_d.SetItem(ll_insertrow, "khbm", dw_1.GetItemString(row, "khbm"));
                     dw_d.SetItem(ll_insertrow, "khmc", dw_1.GetItemString(row, "khmc"));
                     dw_d.SetItem(ll_insertrow, "khjc", dw_1.GetItemString(row, "khjc"));
                     dw_d.SetItem(ll_insertrow, "khpym", dw_1.GetItemString(row, "khpym"));
                     dw_d.SetItem(ll_insertrow, "hz_jzxh", dw_1.GetItemString(row, "hz_jzxh"));
                     dw_d.SetItem(ll_insertrow, "ztdh", dw_1.GetItemString(row, "ztdh"));
                     dw_d.SetItem(ll_insertrow, "bgdh", dw_1.GetItemString(row, "bgdh"));
                     dw_d.SetItem(ll_insertrow, "bslx", dw_1.GetItemString(row, "bslx"));
                     dw_d.SetItem(ll_insertrow, "sjzf_cxh", dw_1.GetItemString(row, "sjzf_cxh"));
                     sjzfrq = dw_1.GetItemDate(row, "jsjzf_sjzfrq")
                     if (new Date(sjzfrq) > new Date("1900/1/1")) {
                         dw_d.SetItem(ll_insertrow, "sjzfrq", dw_1.GetItemDate(row, "sjzfrq"));
                         dw_d.SetItem(ll_insertrow, "fkts", dw_1.GetItemNumber(row, "fkts"));
                     }
                     var ywbh = dw_1.GetItemString(row, "ywbh");
                     fkcs = QsWebSoft.PubMethod.ReadFycs(dw_d, "0304", sqdbh).value;
                     for (var rowfind = 1; rowfind <= dw_d.RowCount(); rowfind++) {
                         if (dw_d.Find("ywbh = '" + ywbh + "' and fybm = '0304'", rowfind, rowfind) > 0) {
                             fkcs++
                         }
                     };
                     dw_d.SetItem(ll_insertrow, "fkcs", fkcs + 1)
                     dw_d.SetItem(ll_insertrow, "zfdxbm", dw_1.GetItemString(row, "shdwbm"));
                     dw_d.SetItem(ll_insertrow, "zfdxmc", dw_1.GetItemString(row, "shdwmc"));
                     dw_d.SetItem(ll_insertrow, "zfdxjc", dw_1.GetItemString(row, "shdwjc"));
                     dw_d.SetItem(ll_insertrow, "zfdxpym", dw_1.GetItemString(row, "shdwpym"));

                     dw_d.SetItem(ll_insertrow, "jdrjc", dw_1.GetItemString(row, "yw_hddz_jdrjc"));
                     dw_d.SetItem(ll_insertrow, "jdrmc", dw_1.GetItemString(row, "yw_hddz_jdrmc"));
                     dw_d.SetItem(ll_insertrow, "jdrbm", dw_1.GetItemString(row, "yw_hddz_jdrbm"));
                     dw_d.SetItem( ll_insertrow, "jdrpym", dw_1.GetItemString( row, "yw_hddz_jdrpym" ) );

                     dw_d.SetItem( ll_insertrow, "shdwbm", dw_1.GetItemString( row, "shdwbm" ) );
                     dw_d.SetItem( ll_insertrow, "shdwmc", dw_1.GetItemString( row, "shdwmc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwjc", dw_1.GetItemString( row, "shdwjc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwpym", dw_1.GetItemString( row, "shdwpym" ) );

                     dw_d.SetItem( ll_insertrow, "jydwbm", dw_1.GetItemString( row, "jydwbm" ) );
                     dw_d.SetItem( ll_insertrow, "jydwmc", dw_1.GetItemString( row, "jydwmc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwjc", dw_1.GetItemString( row, "jydwjc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwpym", dw_1.GetItemString( row, "jydwpym" ) );

                     dw_d.SetItem(ll_insertrow, "fybm", "0304");
                     dw_d.SetItem(ll_insertrow, "je", zbj);
                 }
             }


             if (sjlx == "补交增值税") {
                 var zzs = dw_1.GetItemNumber(row, "sjje")
                 if (zzs != null && zzs != 0) {

                     if (rownum > 0) {
                         ll_insertrow = dw_d.InsertRow(rownum);
                         rownum = rownum + 1
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(0);
                     }


                     dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                     dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
                     dw_d.SetItem(ll_insertrow, "khbm", dw_1.GetItemString(row, "khbm"));
                     dw_d.SetItem(ll_insertrow, "khmc", dw_1.GetItemString(row, "khmc"));
                     dw_d.SetItem(ll_insertrow, "khjc", dw_1.GetItemString(row, "khjc"));
                     dw_d.SetItem(ll_insertrow, "khpym", dw_1.GetItemString(row, "khpym"));
                     dw_d.SetItem(ll_insertrow, "hz_jzxh", dw_1.GetItemString(row, "hz_jzxh"));
                     dw_d.SetItem(ll_insertrow, "ztdh", dw_1.GetItemString(row, "ztdh"));
                     dw_d.SetItem(ll_insertrow, "bgdh", dw_1.GetItemString(row, "bgdh"));
                     dw_d.SetItem(ll_insertrow, "bslx", dw_1.GetItemString(row, "bslx"));
                     dw_d.SetItem(ll_insertrow, "sjzf_cxh", dw_1.GetItemNumber(row, "sjzf_cxh"));
                     sjzfrq = dw_1.GetItemDate(row, "jsjzf_sjzfrq")
                     if (new Date(sjzfrq) > new Date("1900/1/1")) {
                         dw_d.SetItem(ll_insertrow, "sjzfrq", dw_1.GetItemDate(row, "sjzfrq"));
                         dw_d.SetItem(ll_insertrow, "fkts", dw_1.GetItemNumber(row, "fkts"));
                     }
                     var ywbh = dw_1.GetItemString(row, "ywbh");
                     fkcs = QsWebSoft.PubMethod.ReadFycs(dw_d, "0306", sqdbh).value;
                     for (var rowfind = 1; rowfind <= dw_d.RowCount(); rowfind++) {
                         if (dw_d.Find("ywbh = '" + ywbh + "' and fybm = '0306'", rowfind, rowfind) > 0) {
                             fkcs++
                         }
                     };
                     dw_d.SetItem(ll_insertrow, "fkcs", fkcs + 1)

                     dw_d.SetItem(ll_insertrow, "zfdxbm", dw_1.GetItemString(row, "shdwbm"));
                     dw_d.SetItem(ll_insertrow, "zfdxmc", dw_1.GetItemString(row, "shdwmc"));
                     dw_d.SetItem(ll_insertrow, "zfdxjc", dw_1.GetItemString(row, "shdwjc"));
                     dw_d.SetItem(ll_insertrow, "zfdxpym", dw_1.GetItemString(row, "shdwpym"));

                     dw_d.SetItem(ll_insertrow, "jdrjc", dw_1.GetItemString(row, "yw_hddz_jdrjc"));
                     dw_d.SetItem(ll_insertrow, "jdrmc", dw_1.GetItemString(row, "yw_hddz_jdrmc"));
                     dw_d.SetItem(ll_insertrow, "jdrbm", dw_1.GetItemString(row, "yw_hddz_jdrbm"));
                     dw_d.SetItem( ll_insertrow, "jdrpym", dw_1.GetItemString( row, "yw_hddz_jdrpym" ) );

                     dw_d.SetItem( ll_insertrow, "shdwbm", dw_1.GetItemString( row, "shdwbm" ) );
                     dw_d.SetItem( ll_insertrow, "shdwmc", dw_1.GetItemString( row, "shdwmc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwjc", dw_1.GetItemString( row, "shdwjc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwpym", dw_1.GetItemString( row, "shdwpym" ) );

                     dw_d.SetItem( ll_insertrow, "jydwbm", dw_1.GetItemString( row, "jydwbm" ) );
                     dw_d.SetItem( ll_insertrow, "jydwmc", dw_1.GetItemString( row, "jydwmc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwjc", dw_1.GetItemString( row, "jydwjc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwpym", dw_1.GetItemString( row, "jydwpym" ) );

                     dw_d.SetItem(ll_insertrow, "fybm", "0306");
                     dw_d.SetItem(ll_insertrow, "je", zzs);
                 }
             };

             if (sjlx == "补交关税") {
                 var gs = dw_1.GetItemNumber(row, "sjje")
                 if (gs != null && gs != 0) {

                     if (rownum > 0) {
                         ll_insertrow = dw_d.InsertRow(rownum);
                         rownum = rownum + 1
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(0);
                     }


                     dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                     dw_d.SetItem(ll_insertrow, "hth", dw_1.GetItemString(row, "hth"));
                     dw_d.SetItem(ll_insertrow, "khbm", dw_1.GetItemString(row, "khbm"));
                     dw_d.SetItem(ll_insertrow, "khmc", dw_1.GetItemString(row, "khmc"));
                     dw_d.SetItem(ll_insertrow, "khjc", dw_1.GetItemString(row, "khjc"));
                     dw_d.SetItem(ll_insertrow, "khpym", dw_1.GetItemString(row, "khpym"));
                     dw_d.SetItem(ll_insertrow, "hz_jzxh", dw_1.GetItemString(row, "hz_jzxh"));
                     dw_d.SetItem(ll_insertrow, "ztdh", dw_1.GetItemString(row, "ztdh"));
                     dw_d.SetItem(ll_insertrow, "bgdh", dw_1.GetItemString(row, "bgdh"));
                     dw_d.SetItem(ll_insertrow, "bslx", dw_1.GetItemString(row, "bslx"));
                     dw_d.SetItem(ll_insertrow, "sjzf_cxh", dw_1.GetItemNumber(row, "sjzf_cxh"));
                     sjzfrq = dw_1.GetItemDate(row, "jsjzf_sjzfrq")
                     if (new Date(sjzfrq) > new Date("1900/1/1")) {
                         dw_d.SetItem(ll_insertrow, "sjzfrq", dw_1.GetItemDate(row, "sjzfrq"));
                         dw_d.SetItem(ll_insertrow, "fkts", dw_1.GetItemNumber(row, "fkts"));
                     }
                     var ywbh = dw_1.GetItemString(row, "ywbh");
                     fkcs = QsWebSoft.PubMethod.ReadFycs(dw_d, "0305", sqdbh).value;
                     for (var rowfind = 1; rowfind <= dw_d.RowCount(); rowfind++) {
                         if (dw_d.Find("ywbh = '" + ywbh + "' and fybm = '0305'", rowfind, rowfind) > 0) {
                             fkcs++
                         }
                     };
                     dw_d.SetItem(ll_insertrow, "fkcs", fkcs + 1)

                     dw_d.SetItem(ll_insertrow, "zfdxbm", dw_1.GetItemString(row, "shdwbm"));
                     dw_d.SetItem(ll_insertrow, "zfdxmc", dw_1.GetItemString(row, "shdwmc"));
                     dw_d.SetItem(ll_insertrow, "zfdxjc", dw_1.GetItemString(row, "shdwjc"));
                     dw_d.SetItem(ll_insertrow, "zfdxpym", dw_1.GetItemString(row, "shdwpym"));

                     dw_d.SetItem(ll_insertrow, "jdrjc", dw_1.GetItemString(row, "yw_hddz_jdrjc"));
                     dw_d.SetItem(ll_insertrow, "jdrmc", dw_1.GetItemString(row, "yw_hddz_jdrmc"));
                     dw_d.SetItem(ll_insertrow, "jdrbm", dw_1.GetItemString(row, "yw_hddz_jdrbm"));
                     dw_d.SetItem( ll_insertrow, "jdrpym", dw_1.GetItemString( row, "yw_hddz_jdrpym" ) );

                     dw_d.SetItem( ll_insertrow, "shdwbm", dw_1.GetItemString( row, "shdwbm" ) );
                     dw_d.SetItem( ll_insertrow, "shdwmc", dw_1.GetItemString( row, "shdwmc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwjc", dw_1.GetItemString( row, "shdwjc" ) );
                     dw_d.SetItem( ll_insertrow, "shdwpym", dw_1.GetItemString( row, "shdwpym" ) );

                     dw_d.SetItem( ll_insertrow, "jydwbm", dw_1.GetItemString( row, "jydwbm" ) );
                     dw_d.SetItem( ll_insertrow, "jydwmc", dw_1.GetItemString( row, "jydwmc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwjc", dw_1.GetItemString( row, "jydwjc" ) );
                     dw_d.SetItem( ll_insertrow, "jydwpym", dw_1.GetItemString( row, "jydwpym" ) );

                     dw_d.SetItem(ll_insertrow, "fybm", "0305");
                     dw_d.SetItem(ll_insertrow, "je", gs);
                 }
             };

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

	     dw_1.Retrieve(beginDate.getVarDate(), endDate.getVarDate());

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

	 this.sle_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "") {
	         dw_1.SetFilter("");
	         dw_1.Filter();
	     }
	     else {
	         dw_1.SetFilter("( Upper(hth) like '%" + text.toUpperCase() + "%')  or ( Lower(hth) like '%" + text.toLowerCase() + "%') or ( Upper(ztdh) like '%" + text.toUpperCase() + "%') or ( Lower(ztdh) like '%" + text.toLowerCase() + "%') or ( Upper(ztdh) like '%" + text.toUpperCase() + "%') or ( Lower(ztdh) like '%" + text.toLowerCase() + "%') or ( Upper(bgdh) like '%" + text.toUpperCase() + "%') or ( Lower(bgdh) like '%" + text.toLowerCase() + "%')");
	         dw_1.Filter();
	         dw_1.Sort();
	     }
	     dw_1.SetRedraw(true);
	 }

	 var iw_Item_Edit = null;



  }