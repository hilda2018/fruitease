///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Sj() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);
    var sle_2 = new SingleLineEdit(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);

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
        if (sle_2 == null) sle_2 = new SingleLineEdit(requestor);
        sle_2.Attach(win.Control("sle_2"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));

        if (typeof (self.dw_1_ButtonClicked) == "function")
            win.AttachEvent("dw_1", "ButtonClicked", self.dw_1_ButtonClicked);

        if (typeof (self.dw_1_DoubleClicked) == "function")
            win.AttachEvent("dw_1", "DoubleClicked", self.dw_1_DoubleClicked);

        if (typeof (self.dw_1_ItemChanged) == "function")
            win.AttachEvent("dw_1", "ItemChanged", self.dw_1_ItemChanged);

        if (typeof (self.dw_List_EntertoTab) == "function")
            win.AttachEvent("dw_1", "KeyDown", self.dw_List_EntertoTab);

        if (typeof (self.RbuttonDown) == "function")
            win.AttachEvent("dw_1", "RButtonDown", self.RbuttonDown);

        if (typeof (self.InsertRow) == "function")
            win.AttachEvent("btn_rowadd", "Clicked", self.InsertRow);

        if (typeof (self.DeleteRow) == "function")
            win.AttachEvent("btn_rowdelete", "Clicked", self.DeleteRow);

        if (typeof (self.CopyRow) == "function")
            win.AttachEvent("btn_1", "Clicked", self.CopyRow);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.slesjmc_EditChanged) == "function")
            win.AttachEvent("sle_1", "EditChanged", self.slesjmc_EditChanged);

        if (typeof (self.slecph_EditChanged) == "function")
            win.AttachEvent("sle_2", "EditChanged", self.slecph_EditChanged);

        if (typeof (self.Recover) == "function")
            win.AttachEvent("恢复默认列ToolStripMenuItem", "Clicked", self.Recover);

        if (typeof (self.Retrieve) == "function")
            win.AttachEvent("刷新ToolStripMenuItem", "Clicked", self.Retrieve);

        if (typeof (self.CopyCol) == "function")
            win.AttachEvent("复制ToolStripMenuItem", "Clicked", self.CopyCol);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        sle_2.Detach(); sle_2 = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var iw_Wldw_Select = null;
    var iw_Sjmc_Select = null;
    var iw_Bdsbh_Select = null;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Sj.ashx");



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


    dw_1.AcceptText();
 

    if ((dw_1.DeletedCount() + dw_1.ModifiedCount() ) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }


}
//#endregion


//#region 双击
this.dw_1_DoubleClicked = function (xPos, yPos, Row, dwoName) {
    if (Row > 0) {
        if (dwoName == "cdmc") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_1);
            iw_Wldw_Select.SetData("sj");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_1.SetFocus();

        }

        if (dwoName == "sjmc") {
            if (iw_Sjmc_Select == null)
                iw_Sjmc_Select = new W_Sjmc_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Sjmc_Select.SetDataWindow(dw_1);
            iw_Sjmc_Select.SetData("hysj");
            iw_Sjmc_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sjmc_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf, iw_Sjmc_Select);
            dw_1.SetFocus();

        }

        if (dwoName == "bdsbh" || dwoName == "bdyssbh") {
            if (iw_Bdsbh_Select == null)
                iw_Bdsbh_Select = new W_Bdsbh_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var hyky = "hy"
            iw_Bdsbh_Select.SetDataWindow(dw_1);
            iw_Bdsbh_Select.SetRow(Row);
            iw_Bdsbh_Select.SetData("sj_bdsbh");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Bdsbh_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&hyky=" + hyky, iw_Bdsbh_Select);
            dw_1.SetFocus();


        }

        if (dwoName == "czbdjc") {
            var logid = requestor.GetParm("userid");
            var cph = dw_1.GetItemString(Row, "cph");
            if (cph.length > 0) {
//                $.getJSON( "IFView/MapHandler.ashx", { action: "PdcphVerifyLicensePlate", cph: cph, logid: logid, r: Math.random() }, function ( res )
//                {
                $.getJSON( "IFView/MapHandler.ashx", { action: "VerifyLicensePlate", cph: cph }, function ( res )
                {
              
                    
                    if (res.result) {
                        dw_1.SetItem(Row, "sfybd", "Y");
                    } else {
                        dw_1.SetItem(Row, "sfybd", "N");
                    }
                })

            };
        }
        ///

        if (dwoName == "jcbd") {
//            var cph_csh = "沪A00000";
            var cph = dw_1.GetItemString(Row, "cph");
            cph = cph.replace(/(^\s*)|(\s*$)/g, "");
            var bdyssbh = dw_1.GetItemString(Row, "bdyssbh");
            bdyssbh = bdyssbh.replace(/(^\s*)|(\s*$)/g, "");
            var sfcg = "Y";
            
            if (bdyssbh.length > 0) {
               
                var logid = requestor.GetParm("userid");
                $.getJSON("IFView/MapHandler.ashx", { action: "Cphbdbdsbh", cph: bdyssbh, bdyssbh: bdyssbh, logid: logid, r: Math.random() }, function (res) {
                    if (res.result) {
                        sfcg = "Y";

                    } else {
                        sfcg = "N";
                        alert("车牌号：" + cph + "绑定北斗设备" + bdsbh + "失败！");
                    }
                })

                 if (sfcg == "Y") {
                    var num = QsWebSoft.PubMethod.BdsbhCph(bdyssbh, cph).value;
                    alert("车牌号：" + cph + "绑定北斗设备" + bdyssbh + "成功！");
                    dw_1.SetItem(Row, "bdsbh", "");
                    dw_1.SetItem(Row, "bdyssbh", "");
                }
            }
        }
        ///

    }

}
//#endregion

 
this.sz = function () {
    var logid = requestor.GetParm("userid");
    for (row = dw_1.RowCount(); row > 0; row--) {
  
     var cph = dw_1.GetItemString(row, "cph");
   
     if (cph.length > 0 ) {
//         $.getJSON( "IFView/MapHandler.ashx", { action: "PdcphVerifyLicensePlate", cph: cph, logid: logid, r: Math.random() }, function ( res )
//         {
           $.getJSON( "IFView/MapHandler.ashx", { action: "singleVerifyLicensePlate", cph: cph}, function ( res )  {
               
            if (res.result) {
                dw_1.SetItem(row, "sfybd", "Y");
            } else {
                dw_1.SetItem(row, "sfybd", "N");
            }
        })

    };
    }
}

//#region 双击
this.dw_1_ItemChanged = function (Row, dwoName, data) {
    if (dwoName == "cph") { 
        if (data.length > 0) {
            var logid = requestor.GetParm("userid");
            $.getJSON("IFView/MapHandler.ashx", { action: "VerifyLicensePlate", cph: data, logid: logid, r: Math.random() }, function (res) {
                if (res.result) {
                    dw_1.SetItem(Row, "sfybd", "Y");
                } else {
                    dw_1.SetItem(Row, "sfybd", "N");
                }
            })

        };
    }
}
//#endregion
//#region 过滤
this.slesjmc_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    if (text == "")
        dw_1.SetFilter("");
    else
        dw_1.SetFilter("( Upper(sjmc) like '%" + text + "%')  or ( Lower(sjmc) like '%" + text + "%')");
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

//#region 过滤
this.slecph_EditChanged = function (text) {
    dw_1.SetRedraw(false);
    if (text == "")
        dw_1.SetFilter("");
    else
        dw_1.SetFilter("( Upper(cph) like '%" + text + "%')  or ( Lower(cph) like '%" + text + "%')");
    dw_1.Filter();
    dw_1.Sort();
    dw_1.SetRedraw(true);
}
//#endregion

function newGuid() {
    var guid = "";
    for (var i = 1; i <= 16; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 4) || (i == 8) || (i == 12))
            guid += "-";
    }
    return guid;
}

this.InsertRow = function () {
    var row = dw_1.InsertRow(0);

    dw_1.SetItem(row, "sjbm", newGuid());

    //    var sjbm_max = dw_1.GetItemString(row, "sjbm_max")
    //    if (sjbm_max == null || sjbm_max == "") {
    //        sjbm_max = "00001"
    //    }
    //    else {
    //        
    //        var sjbm_max_1 = sjbm_max + 1
    //        requestor.MessageBox("",sjbm_max_1)
    //        if (sjbm_max_1 <= 9) {
    //            sjbm_max = "0000" + sjbm_max.toString();
    //        }
    //        else
    //            if (sjbm_max_1 <= 99) {
    //                sjbm_max = "000" + sjbm_max_1.toString();
    //            } 
    //            else if (sjbm_max_1 <= 999) {
    //                sjbm_max = "00" + sjbm_max
    //            } else  if (sjbm_max_1 <= 9999) {
    //                    sjbm_max = "0" + sjbm_max_1.toString();
    //            } else {
    //                    sjbm_max = sjbm_max_1.toString();
    //            }
    //    };
    //    dw_1.SetItem(row, "sjbm", sjbm_max)

}
this.DeleteRow = function ()
{
    var row = dw_1.GetRow();
    if ( row > 0 )
    {
        var sfsy = dw_1.GetItemString( row, "sfsy" )
        if ( sfsy == "Y" )
        {
            alert( "该车已经在我公司使用过，不能删除！" );
        } else
        {
            dw_1.DeleteRow( row );
        }
    } else
    {
        alert( "请选择要删除的数据！" );
    }
}

this.CopyRow = function () {
    var row = dw_1.GetRow();
    if (row <= 0)
        return;

    dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
    dw_1.ScrollToRow(row + 1);
    dw_1.SetItem(row+1, "sjbm", newGuid());

}

this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;


    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }


    for (var i = 1; i <= dw_1.RowCount(); i++) {

        var sfybd = dw_1.GetItemString(i, "sfybd");
        var cph = dw_1.GetItemString(i, "cph");
        cph = cph.replace(/(^\s*)|(\s*$)/g, "");
        var bdyssbh = dw_1.GetItemString(i, "bdyssbh");
        bdyssbh = bdyssbh.replace(/(^\s*)|(\s*$)/g, "");
        var bdsbh = dw_1.GetItemString(i, "bdsbh");
        var status = dw_1.GetItemStatus(i, "bdyssbh", DWBUFFER.Primary);
        var sfcg = "N";
        if (bdyssbh.length > 0 && status == 1) {
            var logid = requestor.GetParm("userid");
            $.getJSON("IFView/MapHandler.ashx", { action: "Cphbdbdsbh", cph: cph, bdyssbh: bdyssbh, logid: logid, r: Math.random() }, function (res) {
                if (res.result) {
                     sfcg = "Y";
                } else {
                    alert("车牌号：" + cph + "邦定北斗设备" + bdsbh + "失败！");
                }
            })

           var num = QsWebSoft.PubMethod.BdsbhCph(bdyssbh, cph).value;
          
        }

    };



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

//#region 恢复默认列
this.Recover = function () {

    QsWebSoft.PubMethod.DelColRecord("QsWebSoft.xt.W_Xtdm_Sj", "dw_sj_list");
    dw_1.Retrieve();
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

//#region 自己查询
this.Retrieve = function () {
  
    dw_list.Retrieve();

}
//#endregion

 }