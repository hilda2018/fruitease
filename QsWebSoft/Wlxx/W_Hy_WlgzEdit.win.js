///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_WlgzEdit() {

    var self = this;
    var requestor = new PBWindow();
    var dw_jzxxx = new DataWindow(requestor);
    var dw_master = new DataWindow(requestor);
    var dw_rwxz = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_jzxxx == null) dw_jzxxx = new DataWindow(requestor);
        dw_jzxxx.Attach(win.Control("dw_jzxxx"));
        if (dw_master == null) dw_master = new DataWindow(requestor);
        dw_master.Attach(win.Control("dw_master"));
        if (dw_rwxz == null) dw_rwxz = new DataWindow(requestor);
        dw_rwxz.Attach(win.Control("dw_rwxz"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_master", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_Master_ItemChanged) == "function")
            win.AttachEvent("dw_master", "ItemChanged", self.dw_Master_ItemChanged);

        if (typeof (self.dw_Master_EntertoTab) == "function")
            win.AttachEvent("dw_master", "KeyDown", self.dw_Master_EntertoTab);

        if (typeof (self.dw_Master_RowFocusChanged) == "function")
            win.AttachEvent("dw_master", "RowFocusChanged", self.dw_Master_RowFocusChanged);

        if (typeof (self.dw_rwxz_ItemChanged) == "function")
            win.AttachEvent("dw_rwxz", "ItemChanged", self.dw_rwxz_ItemChanged);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_jzxxx.Detach(); dw_jzxxx = null;
        dw_master.Detach(); dw_master = null;
        dw_rwxz.Detach(); dw_rwxz = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";

var dw_mx = null;

var dwc = new DataWindowChild();
var dwc_zbr = new DataWindowChild();
var iw_Sj_Select = null;
var iw_Sjmc_Select = null;
var iw_Wldw_Select = null;
var iw_Cj_Select = null;

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

var Rwlx = null;
this.SetRwlx = function (parm) {
    Rwlx = parm;
}



//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hy_Wlgz.ashx"); 

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
      self.Add();
  }

this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_master.AcceptText();
    dw_jzxxx.AcceptText();
    dw_rwxz.AcceptText();
    if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_rwxz.ModifiedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }

   

}
//#endregion

//#region 新建
this.Add = function () {
     var rwbh = requestor.GetParm("Rwbh")

    var ywbh = requestor.GetParm("ywbh")
    var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));
    var rwmc = requestor.GetParm("rwmc");
    var rwmc_zw = "";
    if (rwmc == "gq") {
        rwmc_zw = "港区";
    }
    if (rwmc == "jyd") {
        rwmc_zw = "检疫点";
    }
    if (rwmc == "sc") {
        rwmc_zw = "市场";
    }
    if (rwmc == "jschzy") {
        rwmc_zw = "进市场后转运";
    }
    if (rwmc == "dc") {
        rwmc_zw = "堆场";
    }
   
    dw_rwxz.Retrieve(ywbh, hddz_cxh, rwbh);
    var row_insert = 0;
    if (rwbh == null || rwbh == "") {
        dw_master.InsertRow(0);
        dw_master.SetItem(1, "rwlx", "码头司机任务");

        if (dw_rwxz.RowCount > 0) {
            var gq_sfxz = dw_rwxz.GetItemString(1, "gq_sfxz");
            if (gq_sfxz == "Y") {
                row_insert = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItem(row_insert, "rwxh", row_insert);
                dw_jzxxx.SetItem(row_insert, "rwmc", "港区");

            };

           
            var hgcyd_sfxz = ds_jzxxx.GetItemString(1, "hgcyd_sfxz");
            if (hgcyd_sfxz == "Y") {
                row_insert = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItem(row_insert, "rwxh", row_insert);
                dw_jzxxx.SetItem(row_insert, "rwmc", "海关查验点");

            }

            var jyd_sfxz = ds_jzxxx.GetItemString(1, "jyd_sfxz");
            if (jyd_sfxz == "Y") {
                row_insert = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItem(row_insert, "rwxh", row_insert);
                dw_jzxxx.SetItem(row_insert, "rwmc", "检疫点");

            };

            var zjfscwld_sfxz = ds_jzxxx.GetItemString(1, "zjfscwld_sfxz");
            if (zjfscwld_sfxz == "Y") {
                row_insert = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItem(row_insert, "rwxh", row_insert);
                dw_jzxxx.SetItem(row_insert, "rwmc", "直接转运");

            };

            var sc_sfxz = ds_jzxxx.GetItemString(1, "sc_sfxz");
            if (sc_sfxz == "Y") {
                row_insert = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItem(row_insert, "rwxh", row_insert);
                dw_jzxxx.SetItem(row_insert, "rwmc", "市场");

            };

            var jschfscwld_sfxz = ds_jzxxx.GetItemString(1, "jschfscwld_sfxz");
            if (jschfscwld_sfxz == "Y") {
                row_insert = dw_jzxxx.InsertRow(0);
                dw_jzxxx.SetItemDecimal(row_insert, "rwxh", row_insert);
                dw_jzxxx.SetItemString(row_insert, "rwmc", "进市场后转运");

            };

        }

    } else {
        dw_master.Retrieve(ywbh, hddz_cxh);
        dw_jzxxx.Retrieve(ywbh, hddz_cxh);
        dw_master.Modify("DataWindow.Readonly=yes");
        dw_jzxxx.Modify("DataWindow.Readonly=yes");
    }

}
//#endregion

//#region 设置窗口是否可编辑
this.SetEditMode = function (newMode) {
    editMode = newMode;
    var bEditFlag = false;
    if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
        bEditFlag = true;
    }
    else {
        bEditFlag = false;
    };
    if (tab_1.GetSelectedTab() == 2) { 
        tb_1.SetVisible("btn_rowdelete", false); 
    }
    else {
        tb_1.SetVisible("btn_save", bEditFlag); 
        tb_1.SetVisible("btn_rowdelete", bEditFlag); 
    }

//    if (bEditFlag) {
//        dw_master.Modify("DataWindow.Readonly=no");
//        dw_jzxxx.Modify("DataWindow.Readonly=no");
//        
//    }
//    else {
        dw_master.Modify("DataWindow.Readonly=yes");
        dw_jzxxx.Modify("DataWindow.Readonly=yes");
       
//    }
};
//#endregion

 //#region 删除商品
this.DeleteRow = function () {
    var row = dw_jzxxx.GetRow();
    if (row <= 0)
        return;
    var status = dw_jzxxx.GetItemStatus(row, 0, DWBUFFER.Primary);
        if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
            if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                dw_jzxxx.SetFocus();
                return;
            }
        }
        dw_jzxxx.DeleteRow(row);
    }

    //#region dw_Master_RowFocusChanged
    this.dw_Master_RowFocusChanged = function (Row) {
        if (Row > 0) {
            var rwbh = dw_master.GetItemString(Row, "rwbh");
            dw_jzxxx.SetFilter("rwbh = '" + rwbh + "'");
            dw_jzxxx.Filter();
        }
    }
    //#region dw_Master_RowFocusChanged

//#region 存盘
    this.save = function () {
        alert('1');
        if (editMode == "show")
            return;
        alert('2');
        if (dw_master.AcceptText() != 1)
            return;
        alert('3');
        if (dw_jzxxx.AcceptText() != 1)
            return;
        alert('4');
        if ((dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_master.GetRow();
        var rwbh = dw_master.GetItemString(row, "rwbh");

        dw_master.SetItem(1, "zbr", requestor.GetParm("userid"));

        //更新行号

        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "rwbh", rwbh);
            //        if (row == 1) {
            //            dw_jzxxx.SetItem(row, "qdbz", "Y");
            //        }
            //        else {
            //            dw_jzxxx.SetItem(row, "qdbz", "N");
            //        };

            //        

            //        if (row == dw_jzxxx.RowCount()) {
            //            var rwmc = dw_jzxxx.GetItemString(row, "rwmc");
            //            var rwmc_sh = dw_jzxxx.GetItemString(row - 1, "rwmc");
            //            var zjfscwld_sfjsc = dw_rwxz.GetItemString(1, "zjfscwld_sfjsc");
            //            var jschfscwld_sfjsc = dw_rwxz.GetItemString(1, "jschfscwld_sfjsc");
            //            var fscwld3_sfjsc = dw_rwxz.GetItemString(1, "fscwld3_sfjsc");
            //            var fscwld4_sfjsc = dw_rwxz.GetItemString(1, "fscwld4_sfjsc");
            //            if (rwmc == "市场" && rwmc_sh == "非市场物流地1" && zjfscwld_sfjsc == "进市场转运") {
            //                dw_jzxxx.SetItem(row - 1, "zdbz", "Y");
            //                dw_jzxxx.SetItem(row, "zdbz", "N");
            //            } else if (rwmc == "市场" && rwmc_sh == "非市场物流地2" && jschfscwld_sfjsc == "进市场转运") {
            //                dw_jzxxx.SetItem(row - 1, "zdbz", "Y");
            //                dw_jzxxx.SetItem(row, "zdbz", "N");
            //            } else if (rwmc == "市场" && rwmc_sh == "非市场物流地3" && fscwld3_sfjsc == "进市场转运") {
            //                dw_jzxxx.SetItem(row - 1, "zdbz", "Y");
            //                dw_jzxxx.SetItem(row, "zdbz", "N");
            //            } else if (rwmc == "市场" && rwmc_sh == "非市场物流地3" && fscwld4_sfjsc == "进市场转运") {
            //                dw_jzxxx.SetItem(row - 1, "zdbz", "Y");
            //                dw_jzxxx.SetItem(row, "zdbz", "N");
            //            } else 
            //            {
            //                dw_jzxxx.SetItem(row, "zdbz", "Y");
            //            }
            //        }
            //        else {
            //            dw_jzxxx.SetItem(row, "zdbz", "N");
            //        };
        };

        if (dw_jzxxx.RowCount() == 0) {
            alert("物流跟踪任务中没有任务详细信息!");
            dw_jzxxx.SetFocus();
            return;
        }

        if (dw_jzxxx.RowCount() < 2) {
            alert("物流跟踪任务中必须有两个任务点信息!");
            dw_jzxxx.SetFocus();
            return;
        }

        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_rwxz_data = dw_rwxz.GetChanges();


        if (dw_master_data == "" && dw_jzxxx_data == "" && dw_rwxz_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_rwxz=" + dw_rwxz_data + "&rwbh=" + rwbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            rwbh = webReq.ResponseText();
            dw_master.SetItem(1, "rwbh", rwbh);
            for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
                dw_jzxxx.SetItem(row, "rwbh", rwbh);
            }


            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_rwxz.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("rwbh.Tabsequence=0");

            dw_master.SetItem(1, "rwbh", rwbh);

            //        var ywbh = requestor.GetParm("ywbh")
            //        var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));

            //        for (row = 1; row <= dw_jzxxx.RowCount(); row++) {
            //            var rwmc = dw_jzxxx.GetItemString(row, "rwmc");
            //            QsWebSoft.PubMethod.UpdateWlgzRwbh(rwbh, ywbh,hddz_cxh,rwmc);
            //        }


            //dw_cmd.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }


//#region dw_Master ItemChanged
this.dw_Master_ItemChanged = function (row, dwoName, data) {
     

}
//#endregion

//#region dw_Master Clicked
this.dw_Master_ButtonClicked = function (Row, dwoName) {
    if (dwoName == "b_cph") {
        if (iw_Sj_Select == null)
            iw_Sj_Select = new W_Sj_Select();
        sjlx = "hy";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Sj_Select.SetDataWindow(dw_master);
        iw_Sj_Select.SetRow(Row);
        iw_Sj_Select.SetData("wlgz_sj");
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx+ "&Cdbm= '" + "'", iw_Sj_Select);
        dw_master.SetFocus();
    }

    if (dwoName == "b_sjmc") {
        if (iw_Sjmc_Select == null)
            iw_Sjmc_Select = new W_Sjmc_Select();
        sjlx = "hy";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Sjmc_Select.SetDataWindow(dw_master);
        iw_Sjmc_Select.SetRow(Row);
        iw_Sjmc_Select.SetData("wlgz_sjmc");
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sjmc_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Sjmc_Select);
        dw_master.SetFocus();
    }

    if (dwoName == "b_cdmc") {    

        if (iw_Wldw_Select == null)
            iw_Wldw_Select = new W_Wldw_Select();
        khlx = "cd";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Wldw_Select.SetDataWindow(dw_master);
        iw_Wldw_Select.SetData("wlgz_cd");
        iw_Wldw_Select.SetRow(Row);
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        dw_master.SetFocus();

    }

    if (dwoName == "b_cjmc") {
        if (iw_Cj_Select == null)
            iw_Cj_Select = new W_Cj_Select();
        sjlx = "hy";
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        iw_Cj_Select.SetDataWindow(dw_master);
        iw_Cj_Select.SetRow(Row);
        iw_Cj_Select.SetData("wlgz_cj");
        requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Cj_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&sjlx=" + sjlx, iw_Cj_Select);
        dw_master.SetFocus();

    }

}
//#endregion



 //#region 选择
this.dw_rwxz_ItemChanged = function (row, dwoName, data) {
    var row_insert = 0;
    var row_find = 0;
    var gq_sfxz = dw_rwxz.GetItemString(1, "gq_sfxz");
    var ywbh = requestor.GetParm("ywbh")
    var hddz_cxh = parseInt(requestor.GetParm("hddz_cxh"));

    if (dwoName == "gq_sfxz") {
        if (data == "Y") {
            row_insert = dw_jzxxx.InsertRow(0);
            dw_jzxxx.SetItem(row_insert, "rwxh", 1);
            dw_jzxxx.SetItem(row_insert, "rwmc", "港区");
            dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
            dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
        } else {
            row_find = dw_jzxxx.Find("rwmc = '港区'", 1, dw_jzxxx.RowCount());
            if (row_find > 0) {
                dw_jzxxx.DeleteRow(row_find)
            }
        }

    };

    if (dwoName == "hgcyd_sfxz") {
        if (data == "Y") {
            row_insert = dw_jzxxx.InsertRow(0);
            dw_jzxxx.SetItem(row_insert, "rwxh", 2);
            dw_jzxxx.SetItem(row_insert, "rwmc", "海关查验点");
            dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
            dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
        } else {
            row_find = dw_jzxxx.Find("rwmc = '海关查验点'", 1, dw_jzxxx.RowCount());
            if (row_find > 0) {
                dw_jzxxx.DeleteRow(row_find)
            }
        }

    };

    if (dwoName == "jyd_sfxz") {
        if (data == "Y") {
            row_insert = dw_jzxxx.InsertRow(0);
            dw_jzxxx.SetItem(row_insert, "rwxh", 3);
            dw_jzxxx.SetItem(row_insert, "rwmc", "检疫点");
            dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
            dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
        } else {
            row_find = dw_jzxxx.Find("rwmc = '检疫点'", 1, dw_jzxxx.RowCount());
            if (row_find > 0) {
                dw_jzxxx.DeleteRow(row_find)
            }
        }

    };

    if (dwoName == "zjfscwld_sfxz") {
        if (data == "Y") {
            row_insert = dw_jzxxx.InsertRow(0);
            dw_jzxxx.SetItem(row_insert, "rwxh", 4);
            dw_jzxxx.SetItem(row_insert, "rwmc", "直接转运");
            dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
            dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
        } else {
            row_find = dw_jzxxx.Find("rwmc = '直接转运'", 1, dw_jzxxx.RowCount());
            if (row_find > 0) {
                dw_jzxxx.DeleteRow(row_find)
            }
        }

    };

    if (dwoName == "sc_sfxz") {
        if (data == "Y") {
            row_insert = dw_jzxxx.InsertRow(0);
            dw_jzxxx.SetItem(row_insert, "rwxh", 5);
            dw_jzxxx.SetItem(row_insert, "rwmc", "市场");
            dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
            dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
        } else {
            row_find = dw_jzxxx.Find("rwmc = '市场'", 1, dw_jzxxx.RowCount());
            if (row_find > 0) {
                dw_jzxxx.DeleteRow(row_find)
            }
        }

    };

    if (dwoName == "jschfscwld_sfxz") {
        if (data == "Y") {
            row_insert = dw_jzxxx.InsertRow(0);
            dw_jzxxx.SetItem(row_insert, "rwxh", 6);
            dw_jzxxx.SetItem(row_insert, "rwmc", "进市场后转运");
            dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
            dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
        } else {
            row_find = dw_jzxxx.Find("rwmc = '进市场后转运'", 1, dw_jzxxx.RowCount());
            if (row_find > 0) {
                dw_jzxxx.DeleteRow(row_find)
            }
        }

    };

    if (dwoName == "dc_sfxz") {
        if (data == "Y") {
            row_insert = dw_jzxxx.InsertRow(0);
            dw_jzxxx.SetItem(row_insert, "rwxh", 7);
            dw_jzxxx.SetItem(row_insert, "rwmc", "堆场");
            dw_jzxxx.SetItem(row_insert, "ywbh", ywbh);
            dw_jzxxx.SetItem(row_insert, "hddz_cxh", hddz_cxh);
        } else {
            row_find = dw_jzxxx.Find("rwmc = '堆场'", 1, dw_jzxxx.RowCount());
            if (row_find > 0) {
                dw_jzxxx.DeleteRow(row_find)
            }
        }

    };

}
//#endregion


//#region dw_master entertotab
this.dw_Master_EntertoTab = function (key, keyflags, dwo) {
    var colname = dwo.GetColumnName();
    if (colname == "ycyymc") { 
        return 0
    }
    else {        
 		return 1
    } 
}

//#region 关闭窗口
this.Exit = function () {
    requestor.Close();
}
//#endregion

}
