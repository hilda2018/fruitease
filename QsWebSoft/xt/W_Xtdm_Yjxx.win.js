///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Yjxx() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var mle_1 = new MultiLineEdit(requestor);
    var dw_filter = new DataWindow(requestor);
    var tv_1 = new TreeView(requestor);
    var dw_2 = new DataWindow(requestor);
    var tb_3 = new ToolStrip(requestor);
    var sle_ywbm = new SingleLineEdit(requestor);
    var sle_ry = new SingleLineEdit(requestor);
    var sle_yjnr = new SingleLineEdit(requestor);
    var ddlb_jdrjc = new DropDownListBox(requestor);
    var ddlb_sfgx = new DropDownListBox(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_1 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (mle_1 == null) mle_1 = new MultiLineEdit(requestor);
        mle_1.Attach(win.Control("mle_1"));
        if (dw_filter == null) dw_filter = new DataWindow(requestor);
        dw_filter.Attach(win.Control("dw_filter"));
        if (tv_1 == null) tv_1 = new TreeView(requestor);
        tv_1.Attach(win.Control("tv_1"));
        if (dw_2 == null) dw_2 = new DataWindow(requestor);
        dw_2.Attach(win.Control("dw_2"));
        if (tb_3 == null) tb_3 = new ToolStrip(requestor);
        tb_3.Attach(win.Control("tb_3"));
        if (sle_ywbm == null) sle_ywbm = new SingleLineEdit(requestor);
        sle_ywbm.Attach(win.Control("sle_ywbm"));
        if (sle_ry == null) sle_ry = new SingleLineEdit(requestor);
        sle_ry.Attach(win.Control("sle_ry"));
        if (sle_yjnr == null) sle_yjnr = new SingleLineEdit(requestor);
        sle_yjnr.Attach(win.Control("sle_yjnr"));
        if (ddlb_jdrjc == null) ddlb_jdrjc = new DropDownListBox(requestor);
        ddlb_jdrjc.Attach(win.Control("ddlb_jdrjc"));
        if (ddlb_sfgx == null) ddlb_sfgx = new DropDownListBox(requestor);
        ddlb_sfgx.Attach(win.Control("ddlb_sfgx"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_1", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_1_DoubleClicked) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.dw_1_DoubleClicked);

        if (typeof (self.dw_List_DwnMouseMove) == "function")
            win.AttachEvent("dw_1", "DwnMouseMove", self.dw_List_DwnMouseMove);

        if (typeof (self.dw_1_ItemChanged) == "function")
            win.AttachEvent("dw_1", "ItemChanged", self.dw_1_ItemChanged);

        if (typeof (self.dw_List_EntertoTab) == "function")
            win.AttachEvent("dw_1", "KeyDown", self.dw_List_EntertoTab);

        if (typeof (self.dw_List_LButtonDown) == "function")
            win.AttachEvent("dw_1", "LButtonDown", self.dw_List_LButtonDown);

        if (typeof (self.dw_List_MouseMove) == "function")
            win.AttachEvent("dw_1", "MouseMove", self.dw_List_MouseMove);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_1", "RButtonDown", self.RbuttonDown);

        if (typeof (self.tv_1_Clicked) == "function")
            win.AttachEvent("tv_1", "Clicked", self.tv_1_Clicked);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_help", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_ywbm", "EditChanged", self.sle_EditChanged);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_ry", "EditChanged", self.sle_EditChanged);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("sle_yjnr", "EditChanged", self.sle_EditChanged);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("ddlb_jdrjc", "SelectionChanged", self.sle_EditChanged);

        if (typeof (self.sle_EditChanged) == "function")
            win.AttachEvent("ddlb_sfgx", "SelectionChanged", self.sle_EditChanged);

        if (typeof (self.OpenYcyy) == "function")
            win.AttachEvent("btn_ycyy", "Clicked", self.OpenYcyy);

        if (typeof (self.Filter) == "function")
            win.AttachEvent("单列过滤ToolStripMenuItem", "Clicked", self.Filter);

        if (typeof (self.Filter_Cancle) == "function")
            win.AttachEvent("取消过滤ToolStripMenuItem", "Clicked", self.Filter_Cancle);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

        if (typeof (self.CopySelect) == "function")
            win.AttachEvent("选择复制ToolStripMenuItem", "Clicked", self.CopySelect);

        if (typeof (self.CopyL) == "function")
            win.AttachEvent("整列复制ToolStripMenuItem", "Clicked", self.CopyL);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        mle_1.Detach(); mle_1 = null;
        dw_filter.Detach(); dw_filter = null;
        tv_1.Detach(); tv_1 = null;
        dw_2.Detach(); dw_2 = null;
        tb_3.Detach(); tb_3 = null;
        sle_ywbm.Detach(); sle_ywbm = null;
        sle_ry.Detach(); sle_ry = null;
        sle_yjnr.Detach(); sle_yjnr = null;
        ddlb_jdrjc.Detach(); ddlb_jdrjc = null;
        ddlb_sfgx.Detach(); ddlb_sfgx = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_1.Detach(); ds_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var iw_Filter = null;

    var dwoname = "";
    var cloname = "";
    var fzks_row = 0;
    var fzjs_row = 0;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Yjxx.ashx");

    var tvi = new TreeViewItem();


    //#endregion

    //#region 关闭窗口
    this.Exit = function () {
        //        if (self.CloseQuery() == 1)
        //            return;
        requestor.MessageBox("","123");
        setTimeout("window.close();", 100);
        requestor.MessageBox("", "456");
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {


        dw_1.AcceptText();


        if ((dw_1.DeletedCount() + dw_1.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion


    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        var itemHandle = tv_1.FindItem(TREENAVIGATION.RootTreeItem, 0);
        itemHandle = tv_1.FindItem(TREENAVIGATION.FirstVisibleTreeItem, itemHandle);
        tv_1.ExpandItem(itemHandle);

        self.Retrieve();

        
    }
   

    //#region 数据查询
    this.Retrieve = function () {
        if (self.CloseQuery() == 1)
            return;

        //        var wcbz = "N"
        //        if (cbx_wcbz.GetChecked() == true) {
        //            wcbz = "Y";
        //        }

        //        var beginDate = new Date(dp_begin.GetValue());
        //        var endDate = new Date(dp_end.GetValue());



        //        //把开始日期的时间部分设置为 00:00:00
        //        beginDate.setHours(0);
        //        beginDate.setMinutes(0);
        //        beginDate.setSeconds(0);

        //        //把结束日期的时间部分设置为 23:59:59
        //        endDate.setHours(23);
        //        endDate.setMinutes(59);
        //        endDate.setSeconds(59);

        //        if (endDate < beginDate) {
        //            requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
        //            dp_begin.SetFocus();
        //            return;
        //        }

        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");

        //        var yjbh = sle_yjbh.GetText();
        //        var clry = sle_clry.GetText();
        //        var bmry = sle_bmry.GetText();
        //        var gsry = sle_gsry.GetText();
        //        var yjlxmc = sle_yjlxmc.GetText();
        //        var khmc = sle_khmc.GetText();
        //        var ywbm = sle_ywbm.GetText();
        //        var gj = sle_gj.GetText();
        //        var hzsp = sle_hzsp.GetText();
        //        var yjjb = sle_yjjb.GetText();
        //        var itemData = tvi2.GetData();

        //        requestor.MessageBox("", itemData)
        //        var itemLabel = tvi2.GetLabel();
        //        requestor.MessageBox("itemLabel", itemLabel)
        //        var index = ts_1.SelectItem(itemData);
        //        requestor.MessageBox("index", index)
        //        dw_1.Retrieve(index, userid);


        dw_1.Retrieve("00", userid);
        self.sle_EditChanged();
        for (var i = 1; i <= dw_1.RowCount(); i++) {
            var ys = dw_1.GetItemString(i, "sfhys");
            dw_1.Modify("yjsj.textcolor=" + ys);
        }
    }
    //#endregion

    this.dw_1_ItemChanged = function (Row, dwoName, data) {

        dw_1.AcceptText();
        if (dwoName == "sfgx") {
            if (data == 'Y') {
                var yjlxbm = dw_1.GetItemString(Row, "yjlxbm");
                var ywbh = dw_1.GetItemString(Row, "ywbh");
                var hth = dw_1.GetItemString(Row, "hth");
                QsWebSoft.PubMethod.YjlxSfgx(yjlxbm, ywbh,hth, data).value;
                //var dd = QsWebSoft.PubMethod.YjlxSfgx( ywbh).value;


            }
            if (data == 'N') {
                var yjlxbm = dw_1.GetItemString(Row, "yjlxbm");
                var ywbh = dw_1.GetItemString(Row, "ywbh");
                var hth = dw_1.GetItemString(Row, "hth");
                var ywyobj = QsWebSoft.PubMethod.Yjlxfd(yjlxbm, ywbh).value;

            }
        }
        //        if (dwoName == "sfgx") {
        //            alert(data);
        //            alert("mmmmmmm")
        //        }
    }

    this.tv_1_Clicked = function (itemHandle) {
        if (tv_1.GetItem(itemHandle, tvi) < 0)
            return;

        if (tvi.GetChildren())
            return;

        var itemData = tvi.GetData();
        var itemLabel = tvi.GetLabel();
//        alert(itemData)
//        alert(itemLabel);

        //取节点所对应的数据窗口记录
        var openStyle = "0";
        var ds = tv_1.Instance.DataStore;
        var row = ds.Find("yjlxbh='" + itemData + "'", 1, ds.RowCount());

        if (row > 0) {
            var yjlxbh = tv_1.GetItemString(row, "yjlxbh");
            var userid = requestor.GetParm("userid");
            dw_1.Retrieve(itemData, userid);
            var yjbz = tv_1.GetItemString(row, "yjbz");
            
            mle_1.SetText(yjbz);
            self.sle_EditChanged();
        }

        //        var yjlxbh = tv_1.GetItemString(itemHandle, "yjlxbh");
        //        var userid = requestor.GetParm("userid");
        //        dw_1.Retrieve(yjlxbh, userid); 
        //        var yjbz = tv_1.GetItemString(itemHandle, "yjbz");
        //        em_1.SetText(yjbz);
    }


    //#region 过滤客户
    this.sle_EditChanged = function (text) {
        dw_1.SetRedraw(false);

        var ywbm = sle_ywbm.GetText();
        var yjnr = sle_yjnr.GetText();
        var ry = sle_ry.GetText();
        var jdrjc = ddlb_jdrjc.GetText();
        var sfgx = ddlb_sfgx.GetText();
        if (sfgx == "未勾选") {
            sfgx = "N";
        } else if (sfgx == "已勾选") {
            sfgx = "Y";
        }
        var ls_filter = ""

        if (ywbm == null || ywbm == "") {
            //
        } else {
            ls_filter = "( ywbh  like '%" + ywbm + "%')"
        };

        if (yjnr == null || yjnr == "") {
            //处理预警内容 
        } else {
            if (ls_filter == "") {
                ls_filter = "(yjnr like '%" + yjnr + "%') "
            } else {
                ls_filter = ls_filter + " and ( yjnr like '%" + yjnr + "%')"
            };
        };

        if (ry == null || ry == "") {
            //处理人员 
        } else {
            if (ls_filter == "") {
                ls_filter = "(ry like '%" + ry + "%') "
            } else {
                ls_filter = ls_filter + " and ( ry like '%" + ry + "%')"
            };
        };

        if (jdrjc == null || jdrjc == "" || jdrjc == "全部") {
            //处理人员 
        } else {
            if (ls_filter == "") {
                ls_filter = "(jdrjc like '%" + jdrjc + "%') "
            } else {
                ls_filter = ls_filter + " and ( jdrjc like '%" + jdrjc + "%')"
            };
        };

        if (sfgx == null || sfgx == "" || sfgx == "全部") {
            //是否勾选 
        } else {
            if (ls_filter == "") {
                ls_filter = "(sfgx like '%" + sfgx + "%') "
            } else {
                ls_filter = ls_filter + " and ( sfgx like '%" + sfgx + "%')"
            };
        };

        dw_1.SetFilter(ls_filter);
        dw_1.Filter();
        dw_1.Sort();
        dw_1.SetRedraw(true);
    }
    //#endregion



    //this.InsertRow = function () {
    //    dw_1.InsertRow(0);
    //}
    //this.DeleteRow = function () {
    //    dw_1.DeleteRow(0);
    //}

    //this.CopyRow = function () {
    //    var row = dw_1.GetRow();
    //    if (row <= 0)
    //        return;

    //    dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
    //    dw_1.ScrollToRow(row + 1);


    //}


    this.Save = function () {


        if (dw_1.AcceptText() != 1)
            return;


        if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }



        var dw_d_data = dw_1.GetChanges();
        if (dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_Master=" + dw_d_data);


        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号

            dw_1.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_1.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_1.SetFocus();
        }
    }

    //#region 单击明细单编号
    this.dw_1_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion


    //#region 双击
    var iw_Xtdm_Yjxx_cmd = null;
    this.dw_1_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "sfyycyy" || dwoName == "sfgx") {
            return;
        }
        //        if (iw_Xtdm_Yjxx_cmd == null)
        //            iw_Xtdm_Yjxx_cmd = new W_Xtdm_Yjxx_cmd();
        //        var ywbh = dw_1.GetItemString(Row, "ywbh");
        //        var yjlx = dw_1.GetItemString(Row, "yjlxbm");

        //        iw_Xtdm_Yjxx_cmd.SetYwbh(ywbh);

        //        iw_Xtdm_Yjxx_cmd.SetYjlx(yjlx);

        //        requestor.Open("/LoadWindow.ashx?WinName=xt.W_Xtdm_Yjxx_cmd&yjlx=" + yjlx.toString() + "&ywbh=" + ywbh.toString(), iw_Xtdm_Yjxx_cmd);


        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000110";
        //        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var row = "85";
        //如果没有数据，则返回
        if (dw_1.RowCount() <= 0)
            return;
        var ywbh = dw_1.GetItemString(Row, 'ywbh')
        //        var status = dw_1.GetItemString(Row, 'state')
        var ywy = "";
        var zbr = dw_1.GetItemString(Row, "ry");
        var userid = requestor.GetParm("userid");
        var operation = requestor.GetParm("operation");
        //失效按钮的控制
        //        var zbr = dw_1.GetItemString(Row, "zbr");
        var userid = requestor.GetParm("userid");

        var kybmjl = requestor.GetParm("kybmjl");
        var hybmjl = requestor.GetParm("hybmjl");

        //        var ysfs = dw_1.GetItemString(Row, 'ysfs')

        var operation
        //        if (ywy == userid || zbr == userid || userid == "0003" || (ysfs == "空运" && kybmjl == "Y") || (ysfs == "海运" && hybmjl == "Y")) {
        //            operation = "open";
        //        }
        //        else {
        //            operation = "show";
        //        }

        if (zbr == userid) {
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
            openStyle = "0";
            url = "QsWebSoft.Hddz.W_HddzEdit";
            parm = "";
            label = "货代单证编辑";
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

    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_1.GetRow();
        if (row <= 0)
            return;
        colType = dw_1.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);

        if (colType == "char") {
            copytext = dw_1.GetItemString(dw_1.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_1.GetItemDate(dw_1.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_1.GetItemNumber(dw_1.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);

    }
    //#endregion


    //#region 异常原因
    var iw_Hddz_Ycyy_Yjxx = null;
    this.OpenYcyy = function (Row) {
        if (iw_Hddz_Ycyy_Yjxx == null)
            iw_Hddz_Ycyy_Yjxx = new W_Hddz_Ycyy_Yjxx();

        var Dlwtf = requestor.GetParm("Dlwtf");
        var row = dw_1.GetRow();
        var ywbh = dw_1.GetItemString(row, "ywbh")
        var yjlxbm = dw_1.GetItemString(row, "yjlxbm")

        iw_Hddz_Ycyy_Yjxx.SetDataWindow(dw_1);
        iw_Hddz_Ycyy_Yjxx.SetData(ywbh);
        iw_Hddz_Ycyy_Yjxx.SetRow(Row);
        iw_Hddz_Ycyy_Yjxx.SetYjlxbh(yjlxbm);
    
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Hddz_Ycyy_Yjxx", iw_Hddz_Ycyy_Yjxx);

    }
    //#endregion


    //#region 选择复制
    this.CopySelect = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_1.GetRow();
        if (row <= 0)
            return;

        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_1.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_1.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_1.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_1.GetItemNumber(row, arr[row1]);
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


    //#region 整列复制
    this.CopyL = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_1.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_1.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_1.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_1.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_1.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_1.GetItemNumber(row, arr[row1]);
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

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        fzjs_row = Row;
    }
    //#endregion

    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xt.W_Xtdm_Yjxx", "dw_yjxx_list");
        self.Retrieve();
    }
    //#endregion


    //#region 单列过滤
    this.Filter = function () {
        dw_1.AcceptText();
        var row = dw_1.GetRow();
        if (row <= 0)
            return;

        colType = dw_1.Describe(cloname + ".colType");

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
        //        var rowcount = dw_1.RowCount();
        //        if (rowcount > 0) {
        //            filter = dw_1.GetItemString(1, "filter");
        //        };
        iw_Filter.SetDataWindow(dw_1);
        //        iw_Filter.SetData(filter);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_1.SetFocus();
        dw_1.ScrollToRow(row)


    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle = function () {
        dw_1.SetFilter("");
        dw_1.Filter();
        dw_1.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
}