///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_Tggz() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_2= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_4= new DataWindow( requestor );
	 var dw_3= new DataWindow( requestor );
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ContextMenuStrip3= new ContextMenu( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_2 == null ) dw_2= new DataWindow( requestor );
		 dw_2.Attach( win.Control( "dw_2") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_4 == null ) dw_4= new DataWindow( requestor );
		 dw_4.Attach( win.Control( "dw_4") ); 
		 if(dw_3 == null ) dw_3= new DataWindow( requestor );
		 dw_3.Attach( win.Control( "dw_3") ); 
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ContextMenuStrip2 == null ) ContextMenuStrip2= new ContextMenu( requestor );
		 ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2") ); 
		 if(ContextMenuStrip3 == null ) ContextMenuStrip3= new ContextMenu( requestor );
		 ContextMenuStrip3.Attach( win.Control( "ContextMenuStrip3") ); 

		 if(typeof(self.dw_2_clicked)=="function") 
			 win.AttachEvent("dw_2","Clicked",self.dw_2_clicked); 

		 if(typeof(self.dw_2_DoubleClicked)=="function") 
			 win.AttachEvent("dw_2","DoubleClicked",self.dw_2_DoubleClicked); 

		 if(typeof(self.dw_2_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_2","RowFocusChanged",self.dw_2_RowFocusChanged); 

		 if(typeof(self.dw_3_Clicked)=="function") 
			 win.AttachEvent("dw_3","Clicked",self.dw_3_Clicked); 

		 if(typeof(self.dw_3_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_3","RowFocusChanged",self.dw_3_RowFocusChanged); 

		 if(typeof(self.dw_1_ItemChanged)=="function") 
			 win.AttachEvent("dw_1","ItemChanged",self.dw_1_ItemChanged); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.Save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

		 if(typeof(self.AddRow_dw_3)=="function") 
			 win.AttachEvent("添加一行ToolStripMenuItem1","Clicked",self.AddRow_dw_3); 

		 if(typeof(self.DeleteRow_dw_3)=="function") 
			 win.AttachEvent("删除一行ToolStripMenuItem","Clicked",self.DeleteRow_dw_3); 

		 if(typeof(self.AddRow_dw_4)=="function") 
			 win.AttachEvent("添加一行ToolStripMenuItem2","Clicked",self.AddRow_dw_4); 

		 if(typeof(self.DeleteRow_dw_4)=="function") 
			 win.AttachEvent("删除一行ToolStripMenuItem1","Clicked",self.DeleteRow_dw_4); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_2.Detach(); dw_2=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_4.Detach(); dw_4=null; 
		 dw_3.Detach(); dw_3=null; 
		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ContextMenuStrip3.Detach(); ContextMenuStrip3=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Tggz.ashx");

    var dw_mx = null;

    var iw_Wldw_Select = null;
    var iw_Wldw_Shdz_Select = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }
    //报关时间 = 放行时间
    this.dw_1_ItemChanged = function (Row, dwoName, data) {
        dw_1.AcceptText();
//        if (dwoName == "hgfxsj") {
//            var hgfxsj = dw_1.GetItemDate(Row, "hgfxsj");
//            dw_1.SetItem(Row, "bgsj", hgfxsj);

//        }
        if (dwoName == "hgfxfs") {
            if (data == "查验放行" || data == "放行查验") {
                dw_1.SetItem(Row, "sfcy", "Y")
            }
            else {
                dw_1.SetItem(Row, "sfcy", "N")
            };
        }
    }
    //#region dw_3_RowFocusChanged
    this.dw_3_RowFocusChanged = function (Row) {
        if (Row > 0) {
            var rwbh = dw_3.GetItemString(Row, "rwbh");            
            dw_4.SetFilter("rwbh = '" + rwbh + "'");
            dw_4.Filter();
        }
    }
    //#region dw_2_RowFocusChanged
    this.dw_2_RowFocusChanged = function (Row) {
        if (Row > 0) {
            var ywbh = dw_2.GetItemString(Row, "ywbh");
            var cxh = dw_2.GetItemNumber(Row, "cxh");
            //查询出所有数据时。按照这两个条件进行筛选
            dw_3.SetFilter("ywbh = '" + ywbh + "' and hddz_cxh =" + cxh );
            dw_3.Filter();
        }
    }
    //#region dw_Master_RowFocusChanged


    //#region 存盘
    this.Save = function () {
        if (dw_1.AcceptText() != 1)
            return;
        dw_2.AcceptText();
        dw_3.AcceptText();
        dw_4.AcceptText();


        for (var i = 1; i <= dw_2.RowCount(); i++) {
            var jzxh = dw_2.GetItemString(i, "jzxh");
            if (jzxh == "" || jzxh == null) {
                alert("集装箱号不能为空！");
                return;
            }
        }


        if ((dw_1.ModifiedCount() + dw_1.DeletedCount() + dw_2.ModifiedCount() + dw_2.DeletedCount() + dw_3.ModifiedCount() + dw_3.DeletedCount() + dw_4.ModifiedCount() + dw_4.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        //        //报关时间 = 放行时间
        //        var hgfxsj = dw_1.GetItemDate(1, "hgfxsj");
        //        dw_1.SetItem(1, "bgsj", hgfxsj);


        //数据同步生鲜港
        for (var i = 1; i <= dw_1.RowCount(); i++) {
            if (dw_1.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {
                var ywbh = dw_1.GetItemString(i, "ywbh");
                //                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);
                
                dw_log.SetItem(row, "tablename", "yw_hddz");
                dw_log.SetItem(row, "changecols", "yjkgsj,sjkgsj,sjzq_zqcdsj,cktgsj,tgdh,bgdh,sjhdsj,bjh,xccy,sfcy,hgfxsj");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.ScrollToRow(row);
            }
        }

        for (var i = 1; i <= dw_2.RowCount(); i++) {

            var ywbh = dw_2.GetItemString(i, "ywbh");
            var cxh = dw_2.GetItemNumber(i, "cxh");

            var row = dw_log.InsertRow(0);
            var userid = requestor.GetParm("userid");

            dw_log.SetItem(row, "eid", "wlrw" + userid + uuid(8, 16));
            dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
            str1 = "gq_sj,gq_cp,gq_sjlxfs,gq_rwbh,gq_c_rwbh,hgcyd_sj,hgcyd_cp,hgcyd_sjlxfs,hgcyd_rwbh,hgcyd_c_rwbh,jyd_sj,jyd_cp,jyd_sjlxfs,jyd_rwbh,jyd_c_rwbh,";
            str1 += "sc_sj,sc_cp,sc_sjlxfs,sc_rwbh,sc_c_rwbh,zjfscwld_sj,zjfscwld_cp,zjfscwld_sjlxfs,zjfscwld_rwbh,zjfscwld_c_rwbh,jschfscwld_sj,jschfscwld_cp,";
            str1 += "jschfscwld_sjlxfs,jschfscwld_rwbh,jschfscwld_c_rwbh,fscwld3_sj,fscwld3_cp,fscwld3_sjlxfs,fscwld3_rwbh,fscwld3_c_rwbh,fscwld4_sj,fscwld4_cp,";
            str1 += "fscwld4_sjlxfs,fscwld4_rwbh,fscwld4_c_rwbh,dc_sj,dc_cp,dc_sjlxfs,dc_rwbh,cgqsj,rscsj,djydsj,tgjysj,cscsj,hdcsj,fscwl_ddsj,fscwl_lksj,fscwl2_ddsj,";
            str1 += "fscwl2_lksj,fscwl3_ddsj,fscwl3_lksj,fscwl4_ddsj,fscwl4_lksj";
            dw_log.SetItem(row, "changecols", str1);
            dw_log.SetItem(row, "mainid", ywbh);
            dw_log.SetItem(row1, "parameters", cxh.toString());
            dw_log.ScrollToRow(row);

            var row1 = dw_log.InsertRow(0);
            var serialNumber1 = dw_log.GetItemString(row1, "eid_max");

            dw_log.SetItem(row1, "eid", serialNumber1);
            dw_log.SetItem(row1, "tablename", "yw_hddz_wlgz");
            dw_log.SetItem(row1, "mainid", ywbh);
            dw_log.SetItem(row1, "parameters", cxh.toString());
            dw_log.ScrollToRow(row1);


        }

        dw_log.AcceptText();

        var dw_log_data = dw_log.GetChanges();
        //        if (dw_log_data == "")
        //           
        //        return;

        var dw_d_data = dw_1.GetChanges();
        //        if (dw_d_data == "")
        //            return;

        var dw_d_data2 = dw_2.GetChanges();
        //        if (dw_d_data2 == "")
        //            return;

        var dw_d_data3 = dw_3.GetChanges();
        //        if (dw_d_data3 == "")
        //            return;

        var dw_d_data4 = dw_4.GetChanges();
        //        if (dw_d_data4 == "")
        //            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_1=" + dw_d_data + "&dw_2=" + dw_d_data2 + "&dw_3=" + dw_d_data3 + "&dw_4=" + dw_d_data4 + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号            
            requestor.MessageBox("提示", "数据保存成功!");
            dw_1.SetFocus();
            // setTimeout("window.close();", 100);
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_1.SetFocus();
        }
    }


    function uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    }

    //#region 关闭窗口
    this.Exit = function () {
        requestor.Close();

    }
    this.dw_2_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (dwoName == "sjshrmc") {

            var ysfs = dw_2.GetItemString(Row, "ysfs")
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_2);
            if (ysfs == "空运") {
                iw_Wldw_Select.SetData("hddz_sjshr_ky");
            } else {
                iw_Wldw_Select.SetData("hddz_sjshr_hy");
            }
            //iw_Wldw_Select.SetData("hddz_sjshr");
            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_2.SetFocus();

        }
        if (dwoName == "shdz") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_2.GetRow();
            var yw_khbm = dw_2.GetItemString(Row, "sjshrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_2);
            iw_Wldw_Shdz_Select.SetData("hddz_shdz");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_2.SetFocus();

        }
    }
    this.dw_2_clicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            //            var ywbh = dw_2.GetItemString(Row, "ywbh");
            //            var dd = dw_2.GetRow();
            //            var cxh = dw_2.GetItemNumber(Row, "cxh");
            //            dw_3.Retrieve(ywbh, cxh);
            var row = dw_2.GetRow();

            if (dwoName == "sc_jc") {
                if (dw_2.GetItemString(Row, "sc_bz") == "N") {
                    return;
                }
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "sc";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_2);

                iw_Wldw_Select.SetData("scxx");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_2.SetFocus();


            }

        }

    }

    this.dw_3_Clicked = function (xPos, yPos, Row, dwoName) {
        if (Row > 0) {
            if (dwoName == "wlgsjc") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                jdr = "wlgs";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_3);
                iw_Wldw_Select.SetData("yw_hddz_wlgsjc");
                iw_Wldw_Select.SetRow(Row);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select);
                dw_3.SetFocus();
            }
        }
    }



    //#region 添加明细表2
//    this.AddRow_dw_2 = function () {
//        var ywbh = dw_1.GetItemString(1, "ywbh");
//        var row = dw_2.InsertRow(0);
//        dw_2.ScrollToRow(row);
//        dw_2.SetFocus();
//        var cxh = dw_2.RowCount();
//        dw_2.SetItem(cxh, "cxh", cxh);
//        dw_2.SetItem(cxh, "ywbh", ywbh);

//    }
    //#region 添加明细表3
    this.AddRow_dw_3 = function () {
        var userid = requestor.GetParm("userid");
        var ywy = requestor.GetParm("userid");
        var date = new Date();
        var row = dw_3.InsertRow(0);
        dw_3.ScrollToRow(row);
        dw_3.SetFocus();
        var ywbh = dw_1.GetItemString(1, "ywbh");
        var dw_2_row = dw_2.GetRow();
        var cxh = dw_2.GetItemNumber(dw_2_row, "cxh");        
        var bh = ywbh + cxh + row;
        dw_3.SetItem(row, "rwbh", bh);
        dw_3.SetItem(row, "hddz_cxh", cxh);
        dw_3.SetItem(row, "ywbh", ywbh);
        dw_3.SetItem(row, "zbr", ywy);
        dw_3.SetItem(row, "zbsj", date.getVarDate());
        dw_3.SetItem(row, "rwlx", cxh.toString());


    }
    //#region 添加明细表4
    this.AddRow_dw_4 = function () {

        if (dw_3.GetRow() <= 0) {
            alert("没有一个任务编号");
            return;
        }
        var ywbh = dw_1.GetItemString(1, "ywbh");
        var row = dw_4.InsertRow(0);
        dw_4.ScrollToRow(row);
        dw_4.SetFocus();
        var rwbh = dw_3.GetItemString(dw_3.GetRow(), "rwbh");
        var hddz_cxh = dw_3.GetItemNumber(dw_3.GetRow(), "hddz_cxh");
        var rwlx = dw_3.GetItemString(dw_3.GetRow(), "rwlx");
        dw_4.SetItem(dw_4.RowCount(), "rwbh", rwbh);
        dw_4.SetItem(row, "hddz_cxh", hddz_cxh);
        dw_4.SetItem(row, "ywbh", ywbh);
       
       

        dw_4.SetItem(row, "rwxh", row);
        dw_4.SetItem(row, "rwlx", rwlx);

    }
    //删除 dw_3
    this.DeleteRow_dw_3 = function () {
        var row = dw_3.GetRow();
        if (row <= 0) {
            return;
        }
        var rwbh = dw_3.GetItemString(row, "rwbh");
        dw_4.SetFilter("rwbh = '" + rwbh + "'");
        dw_4.SetFilter();

        var count = dw_4.RowCount();
        if (count != 0) {
            alert("此任务编号有子数据，不能删除");
            return;
        }
        dw_3.DeleteRow(row);
    }
    //删除  dw_4
    this.DeleteRow_dw_4 = function () {
        var row = dw_4.GetRow();        
        dw_4.DeleteRow(row);
    }
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

}
