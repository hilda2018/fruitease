///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_Yh_Select() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);

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

        if (typeof (self.OK) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.OK);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.sle_EditChanged);

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
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var dw_mx = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }
    var RowData = null;
    this.SetRow = function (parm) {
        RowData = parm;
    }

    var sjlx = null;
    this.SetSjlx = function (parm) {
        sjlx = parm;
    }


    this.OK = function () {
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要添加的往来单位信息!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var yhmc = dw_1.GetItemString(row, 'yhmc');
        var yhdz = dw_1.GetItemString(row, 'yhdz');
        var wbbb = dw_1.GetItemString(row, 'wbbb');
        var zh = dw_1.GetItemString(row, 'zh')
        var swift = dw_1.GetItemString(row, 'swift');
        var iban = dw_1.GetItemString(row, 'iban');
        var aba = dw_1.GetItemString(row, 'aba');
        var bsb = dw_1.GetItemString(row, 'bsb');
        var mryh = dw_1.GetItemString(row, 'mryh'); 
        if (dw_mx != null) {
            if (column == "hdfyhdf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);               

                requestor.Close();
            };

            if (column == "wlgzsjyf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };

            if (column == "hdfyhxdcf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };

            if (column == "hdfyhycqf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };


            if (column == "hdfymtthf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);        
               
                requestor.Close();
            };

            if (column == "fkcnqr_zfyh") {
                var zfsj = new  Date();
                dw_mx.SetItem(RowData, 'zfyh', yhmc);
                dw_mx.SetItem(RowData, 'zfyhzh', zh);
                dw_mx.SetItem(RowData, 'zfsj', zfsj.getVarDate())
                dw_mx.SetItem(RowData, 'fkzt', "Y")
                requestor.Close();
            };

            if (column == "hdfyhyfxgsfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };
            if (column == "hdfyjydfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };

            if (column == "hdfyfywfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };


            if ( column == "szfywfy_zfyh" )
            {
                dw_mx.SetItem( 1, 'zfyh', yhmc );
                dw_mx.SetItem( 1, 'zfyhzh', zh );

                requestor.Close();
            };

            if ( column == "szywfkgl_zfyh" )
            {
                dw_mx.SetItem( 1, 'zfyh', yhmc );
                dw_mx.SetItem( 1, 'zfyhzh', zh );  
                requestor.Close();
            };


            if ( column == "szywyfgl_zfyh" )
            {
                dw_mx.SetItem( 1, 'zfyh', yhmc );
                dw_mx.SetItem( 1, 'zfyhzh', zh );
                requestor.Close();
            };

            

            if (column == "hdfyjyfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };

            if (column == "hdfybhxjhxxxfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };
            if (column == "hdfybgbjfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };
            if (column == "hdfyhgcyfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };

            if (column == "hdfyqt_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfykykgthfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };
            if (column == "hdfykycdfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };
            if (column == "hdfyscfy_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };
            if (column == "hdfysjskgl_lkrkhyh") {
                dw_mx.SetItem(1, 'lkrkhyh', yhmc);
                dw_mx.SetItem(1, 'lkryhzh', zh);
                requestor.Close();
            };
            if (column == "hdfysjskgl_skrkhyh") {
                dw_mx.SetItem(1, 'skrkhyh', yhmc);
                dw_mx.SetItem(1, 'skryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfysjxzf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };

            if (column == "hdfygjyfzf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfysjzf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };

            if (column == "hdfybzjzf_sjskryh") {
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                requestor.Close();
            };


        };

    }


        this.Exit = function () {
            requestor.Close();
        }

        this.sle_EditChanged = function (text) {
            dw_1.SetRedraw(false);
            if (text == "") {
                dw_1.SetFilter("");
                dw_1.Filter();
            }
            else {
                dw_1.SetFilter("( Upper(yhmc) like '%" + text + "%') or ( Lower(yhmc) like '%" + text + "%') or ( Upper(yhdz) like '%" + text + "%') or ( Lower(yhdz) like '%" + text + "%') or ( Upper(zh) like '%" + text + "%') or ( Lower(zh) like '%" + text + "%')  or ( Lower(swift) like '%" + text + "%') or ( Upper(swift) like '%" + text + "%')  or ( Lower(iban) like '%" + text + "%') or ( Upper(iban) like '%" + text + "%')  or ( Lower(aba) like '%" + text + "%') or ( Upper(aba) like '%" + text + "%')  or ( Lower(bsb) like '%" + text + "%') or ( Upper(bsb) like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();
            }
            dw_1.SetRedraw(true);
        }

      
        //#region 刷新
        this.Retrieve = function () {
            var userid = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var sjlx = requestor.GetParm("sjlx");

            requestor.MessageBox("",sjlx)
            if (sjlx == null) {
                sjlx = "全部";                
            }
            else if (sjlx == "hy") {
                sjlx = "海运";               
            }
            else if (sjlx == "ky") {
                sjlx = "空运";               
            }
            requestor.MessageBox("",sjlx)
           dw_1.Retrieve(sjlx);
           
            dw_1.Modify("DataWindow.Readonly=yes");

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

}