﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_WljdgzEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_master= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dw_print= new DataWindow( requestor );
	 var ds_1= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("window","Clicked",self.Exit); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_master_ButtonClicked); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_DoubleClicked)=="function") 
			 win.AttachEvent("dw_master","DoubleClicked",self.dw_master_DoubleClicked); 

		 if(typeof(self.dw_master_EditChanged)=="function") 
			 win.AttachEvent("dw_master","EditChanged",self.dw_master_EditChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_EntertoTab)=="function") 
			 win.AttachEvent("dw_master","KeyDown",self.dw_master_EntertoTab); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_print","Clicked",self.Print); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_master.Detach(); dw_master=null; 
		 tb_1.Detach(); tb_1=null; 
		 dw_print.Detach(); dw_print=null; 
		 ds_1.Detach(); ds_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Wldw_Select = null;
    var dwc = new DataWindowChild();

    var iw_Wldw_Lxr_Select = null;
    var iw_Wldw_Shdz_Select = null;

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Thwljh.ashx");

   
    
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
       
        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");           
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");          
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus();
         var operation = requestor.GetParm("operation");
       
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else {
            self.SetEditMode("show");
        };


    };
    //#endregion

    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_GetFocus = function (sender) {
        lastdw.Attach(sender);
    };
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
        if (editMode == "show")
            return;

        dw_master.AcceptText();
       

        if (dw_master.ModifiedCount()) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function () {
        if (editMode == "show")
            return;

        if (dw_master.AcceptText() != 1)
            return;


        if (dw_master.ModifiedCount() <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var sc_bz = dw_master.GetItemString(1, "sc_bz");
        var sc_mc = dw_master.GetItemString(1, "sc_mc");
        if (sc_bz == "Y" && (sc_mc == null || sc_mc == "")){
           requestor.MessageBox("提示","请选择市场！")
           return;
       }

       var dcrwcs = dw_master.GetItemNumber(1, "dcrwcs");
       var dc_rwbh = dw_master.GetItemString(1, "dc_rwbh");

       if (dcrwcs > 0 && dc_rwbh != null && dc_rwbh != "") {
           requestor.MessageBox("提示", "已经存在堆场任务，不能更改，如需更改计划，请先撤销堆场任务！");
           return
       }

        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString(row, "ywbh");
        var cxh = dw_master.GetItemNumber(row, "cxh")
        //更新行号
        //        dw_master.SetItem(row, "csbz", "Y")
        var wllxqdrq = new Date();
        dw_master.SetItem(row, "wllxqdrq", wllxqdrq.getVarDate());
        var dw_master_data = dw_master.GetChanges();
        requestor
        if (dw_master_data == "")
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&ywbh=" + ywbh + "&cxh=" + cxh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
//            ywbh = webReq.ResponseText();
//            dw_master.SetItem(1, "ywbh", ywbh);
           
            dw_master.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            //同步生鲜港数据
            self.Tbsxg();

            self.Exit();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion



    //#region 打印 
    this.Print = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        var cxh = dw_master.GetItemNumber(1,"cxh");
        dw_print.SetDataObject("dw_hy_thwljh_print");
        dw_print.Retrieve(ywbh, cxh);
        dw_print.PrintPreview();
    }
    //#endregion

    //#region 新建初始化
    this.Add = function () {
        dw_master.SetItem(1, "csbz", "Y");
        dw_master.SetItem(1, "gq_bz", "Y");


        var hgfxfs = dw_master.GetItemString(1, "yw_hddz_hgfxfs")
        if (hgfxfs == "放行查验") {
            dw_master.SetItem(1, "hgcyd_bz", "Y");
        }

        var jyjbm = dw_master.GetItemString(1, "jyjbm")
        if (jyjbm == "40010126") {
            dw_master.SetItem(1, "jyd_bz", "Y");
            dw_master.SetItem(1, "jyd_bm", "admin0616");
            dw_master.SetItem(1, "jyd_mc", "上海辉展物流有限公司");
            dw_master.SetItem(1, "jyd_jc", "辉展物流");
            dw_master.SetItem(1, "jyd_pym", "shhzwlyxgs");
        } else {
            dw_master.SetItem(1, "jyd_bz", "Y");
            dw_master.SetItem(1, "jyd_bm", "admin0615");
            dw_master.SetItem(1, "jyd_mc", "上农批");
            dw_master.SetItem(1, "jyd_jc", "上农批");
            dw_master.SetItem(1, "jyd_pym", "snp");
        }


        dw_master.SetItem(1, "sc_bm", "admin0616");
        dw_master.SetItem(1, "sc_mc", "上海辉展物流有限公司");
        dw_master.SetItem(1, "sc_jc", "辉展市场");
        dw_master.SetItem(1, "sc_pym", "shhzwlyxgs");
        dw_master.SetItem(1, "sc_bz", "Y");
        dw_master.SetItem(1, "dc_bz", "Y");
        self.SetEditMode("new");



    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_ButtonClicked = function (Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "b_lxr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
             
            var Khbm = dw_master.GetItemString(1, "sjshrbm")

            iw_Wldw_Lxr_Select.SetDataWindow(dw_master);
            iw_Wldw_Lxr_Select.SetData("thwljh_lxr");
            iw_Wldw_Lxr_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "b_shdz") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            
            var Khbm = dw_master.GetItemString(1, "sjshrbm")

            iw_Wldw_Shdz_Select.SetDataWindow(dw_master);
            iw_Wldw_Shdz_Select.SetData("thwljh_shdz");
            iw_Wldw_Shdz_Select.SetRow(1);
           
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_master.SetFocus();

        }

    }
    //#endregion
    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        if (dwoName == "jyd_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "jyd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hy_jyd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }

        if (dwoName == "zjfscwld_shrmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_zjfscwld_shr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "fscwld3_shrmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_fscwld3_shr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "fscwld4_shrmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_fscwld4_shr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zjfscwld_zyxx_t") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_master.GetRow();
            var yw_khbm = dw_master.GetItemString(Row, "zjfscwld_shrbm");           
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;             
            iw_Wldw_Shdz_Select.SetDataWindow(dw_master);
            iw_Wldw_Shdz_Select.SetData("thwljh_zjfscwld_zyxx");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_master.SetFocus();
        }



        if (dwoName == "jschfscwld_zyxx_t") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_master.GetRow();
            var yw_khbm = dw_master.GetItemString(Row, "jschfscwld_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_master);
            iw_Wldw_Shdz_Select.SetData("thwljh_jschfscwld_zyxx");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "fscwld3_zyxx_t") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_master.GetRow();
            var yw_khbm = dw_master.GetItemString(Row, "fscwld3_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_master);
            iw_Wldw_Shdz_Select.SetData("thwljh_fscwld3_zyxx");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "fscwld4_zyxx_t") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var Row = dw_master.GetRow();
            var yw_khbm = dw_master.GetItemString(Row, "fscwld4_shrbm")
            var Khbm = QsWebSoft.PubMethod.ReadWldwTybm(yw_khbm).value;

            iw_Wldw_Shdz_Select.SetDataWindow(dw_master);
            iw_Wldw_Shdz_Select.SetData("thwljh_fscwld4_zyxx");
            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_master.SetFocus();

        }
        ////
        if (dwoName == "sc_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "sc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_sc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "jschfscwld_shrmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_jschfscwld_shr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        //        if (dwoName == "dc_mc_t") {
        //            if (iw_Wldw_Select == null)
        //                iw_Wldw_Select = new W_Wldw_Select();
        //            khlx = "dc";
        //            var ywy = requestor.GetParm("userid");
        //            var ShareMode = requestor.GetParm("ShareMode");
        //            var Dlwtf = requestor.GetParm("Dlwtf");
        //            iw_Wldw_Select.SetDataWindow(dw_master);
        //            iw_Wldw_Select.SetData("hy_dc");
        //            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
        //            dw_master.SetFocus();
        //        }


        if (dwoName == "khbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            var Dlxyh = dw_master.GetItemString(1, "dlxyh");

            if (Dlxyh != null && Dlxyh != "") {
                requestor.MessageBox("提示", "代理协议号已经选择，不能再更改客户!", ICON.StopSign)
                return;
            }
            if (zydl == "代理") {
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_kh_dl");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (zydl == "自营") {
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_kh_zy");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }


        }

        if (dwoName == "shdwbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            iw_Wldw_Select.SetDataWindow(dw_master);
            if (zydl == "代理") {
                iw_Wldw_Select.SetData("hddz_shdw_dl");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
            if (zydl == "自营") {
                iw_Wldw_Select.SetData("hddz_shdw_zy");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        }
        if (dwoName == "cyd_t") {
            var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz");
            if (hgcyd_bz == "Y") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "hgcyd";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");

                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("thwljh_hgcyd");
                iw_Wldw_Select.SetRow(1);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);

                dw_master.AcceptText();

                var ywbh = dw_master.GetItemString(1, "ywbh");
                var cydbm = dw_master.GetItemString(1, "yw_hddz_cydbm");
                var cyd = dw_master.GetItemString(1, "yw_hddz_cyd");
                var cydjc = dw_master.GetItemString(1, "yw_hddz_cydjc");
                var cydpym = dw_master.GetItemString(1, "yw_hddz_cydpym");

                QsWebSoft.PubMethod.UpdateThwljhHgcyd(ywbh, cydbm, cyd, cydjc, cydpym);

                dw_master.SetFocus();
            }
        }

        if (dwoName == "jydwbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "wmgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            if (zydl == "代理") {
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("hddz_jydw");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        }

        if (dwoName == "gwgysbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gwgys";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_gwgys");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "cdgs_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cdorhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_cdgs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "cyr_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cgsorhkgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_cyr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "xhgq_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "mt";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hddz_xhgq");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "qyg_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("qyg");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "zzgk_t") {
            if (iw_Eport_Select == null)
                iw_Eport_Select = new W_Eport_Select();
            iw_Eport_Select.SetDataWindow(dw_master);
            iw_Eport_Select.SetData("zzgk");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Eport_Select", iw_Eport_Select);
            dw_master.SetFocus();
        }




        if (dwoName == "dlxyh_t") {

            if (iw_Hddz_Dlxy_Select == null)
                iw_Hddz_Dlxy_Select = new W_Hddz_Dlxy_Select();
            iw_Hddz_Dlxy_Select.SetDataWindow(dw_master);
            var zydl = dw_master.GetItemString(1, "zydl");

            if (zydl == "代理") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_dl");
            }
            else if (zydl == "自营") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_zy");
            }
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select", iw_Hddz_Dlxy_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "hygsmc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cdorhd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hddz_hygs");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }


        if (dwoName == "ycd_t") {
            if (iw_Country_Select == null)
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow(dw_master);
            iw_Country_Select.SetData("ycd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select);
            dw_master.SetFocus();

        }

    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            if (zusdhl == null || zusdhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
            }

            dw_master.SetItem(1, "zmyhl", zusdhl);
            self.SetZje();
        }

        if (dwoName == "zydl") {
            if (data == "代理") {
                dw_master.SetItem(1, "jydwbm", "admin0003");
                dw_master.SetItem(1, 'jydwmc', "上海欧恒进出口有限公司");
                dw_master.SetItem(1, 'jydwpym', "shohjckyxgs");
            }
            if (data == "自营") {
                var shdwbm = dw_master.GetItemString(1, "shdwbm");
                var shdwmc = dw_master.GetItemString(1, "shdwmc");
                var shdwpym = dw_master.GetItemString(1, "shdwpym");
                dw_master.SetItem(1, "jydwbm", shdwbm);
                dw_master.SetItem(1, 'jydwmc', shdwmc);
                dw_master.SetItem(1, 'jydwpym', shdwpym);
            }

        }

        if (dwoName == "ysfs") {
            //更新行号
            for (row = dw_jzxxx.RowCount(); row > 0; row--) {
                dw_jzxxx.SetItem(row, "ysfs", data);
                if (data == "海运") {
                    dw_jzxxx.SetItem(row, "tpxx", "");
                }
                if (data == "空运") {
                    dw_jzxxx.SetItem(row, "jzxh", "");
                    dw_jzxxx.SetItem(row, "xx", "");
                    dw_jzxxx.SetItem(row, "xl", "");
                }
            }

        }

        //如果是否有运费打勾，价格方式变为FOB
        if (dwoName == "sfyyf") {
            if (data == "Y") {
                dw_master.SetItem(1, "jgfs", "FOB")
            }
        }

//        if (dwoName == "gq_bz") {
//            if (data == "Y") {
//                //
//            } else {
//                var gq_rwbh = dw_master.GetItemString(1, "gq_rwbh");
//                var gq_c_rwbh = dw_master.GetItemString(1, "gq_rwbh");
//                if (gq_rwbh.length > 1) {
//                    requestor.MessageBox("", gq_rwbh.length)
//                }
//            }
//        }


        if (dwoName == "hgcyd_bz") {
            if (data == "Y") {
                var gq_bz = dw_master.GetItemString(1, "gq_bz")
                var hgcyd_sj = "";
                var hgcyd_cp = "";
                var hgcyd_sjlxfs = ""
                if (gq_bz == "Y") {
                    hgcyd_sj = dw_master.GetItemString(1, "hgcyd_sj")
                    hgcyd_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                    hgcyd_cp = dw_master.GetItemString(1, "hgcyd_cp")
                }
                dw_master.SetItem(1, "hgcyd_sj", hgcyd_sj)
                dw_master.SetItem(1, "hgcyd_cp", hgcyd_cp)
                dw_master.SetItem(1, "hgcyd_sjlxfs", hgcyd_sjlxfs)
            } else {
                dw_master.SetItem(1, "hgcyd_sj", "")
                dw_master.SetItem(1, "hgcyd_cp", "")
                dw_master.SetItem(1, "hgcyd_sjlxfs", "")
                ///                
                var hgcyd_rwbh = dw_master.GetItemString(1, "hgcyd_rwbh");
                var hgcyd_c_rwbh = dw_master.GetItemString(1, "hgcyd_rwbh");
                if (hgcyd_rwbh.length > 1 || hgcyd_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "海关查验点任务已经下达，请及时去修改！")
                }
                ///

            }
        }



        if (dwoName == "jyd_bz") {
            if (data == "Y") {
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")
                var jyd_sj = "";
                var jyd_cp = "";
                var jyd_sjlxfs = ""
                if (hgcyd_bz == "Y") {
                    jyd_sj = dw_master.GetItemString(1, "hgcyd_sj")
                    jyd_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                    jyd_cp = dw_master.GetItemString(1, "hgcyd_cp")
                }
                else if (gq_bz = "Y") {
                    jyd_sj = dw_master.GetItemString(1, "gq_sj")
                    jyd_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                    jyd_cp = dw_master.GetItemString(1, "gq_cp")
                }
                dw_master.SetItem(1, "jyd_sj", jyd_sj)
                dw_master.SetItem(1, "jyd_cp", jyd_cp)
                dw_master.SetItem(1, "jyd_sjlxfs", jyd_sjlxfs)
            } else {
                dw_master.SetItem(1, "jyd_bm", "")
                dw_master.SetItem(1, "jyd_mc", "")
                dw_master.SetItem(1, "jyd_jc", "")
                dw_master.SetItem(1, "jyd_pym", "")
                dw_master.SetItem(1, "jyd_sj", "")
                dw_master.SetItem(1, "jyd_cp", "")
                dw_master.SetItem(1, "jyd_sjlxfs", "")

                ///                
                var jyd_rwbh = dw_master.GetItemString(1, "jyd_rwbh");
                var jyd_c_rwbh = dw_master.GetItemString(1, "jyd_c_rwbh");
                if (jyd_rwbh.length > 1 || jyd_c_rwbh.length > 1) {
                    requestor.MessageBox("提示","检疫点物流任务已经下达，请及时去修改！")
                }                
                ///

            }
        }


        //如果非市场物流选择后 默认取对应上面的收获人和物流信息

        if (dwoName == "zjfscwld_bz") {
            if (data == "Y") {
                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "zjfscwld_shrbm", sjshrbm)
                dw_master.SetItem(1, "zjfscwld_shrmc", sjshrmc)
                dw_master.SetItem(1, "zjfscwld_zyxx", zyxx)

                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var zjfscwld_sj = "";
                var zjfscwld_cp = "";
                var zjfscwld_sjlxfs = ""

                if (jyd_bz == "Y") {
                    zjfscwld_sj = dw_master.GetItemString(1, "jyd_sj")
                    zjfscwld_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                    zjfscwld_cp = dw_master.GetItemString(1, "jyd_cp")
                }
                else if (hgcyd_bz == "Y") {
                    zjfscwld_sj = dw_master.GetItemString(1, "hgcyd_sj")
                    zjfscwld_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                    zjfscwld_cp = dw_master.GetItemString(1, "hgcyd_cp")
                }
                else if (gq_bz = "Y") {
                    zjfscwld_sj = dw_master.GetItemString(1, "gq_sj")
                    zjfscwld_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                    zjfscwld_cp = dw_master.GetItemString(1, "gq_cp")
                }
                dw_master.SetItem(1, "zjfscwld_sj", zjfscwld_sj)
                dw_master.SetItem(1, "zjfscwld_cp", zjfscwld_cp)
                dw_master.SetItem(1, "zjfscwld_sjlxfs", zjfscwld_sjlxfs)

//                dw_master.SetItem(1, "sc_bz", "")
//                dw_master.SetItem(1, "sc_sj", "")
//                dw_master.SetItem(1, "sc_sjlxfs", "")
//                dw_master.SetItem(1, "sc_cp", "")
//                dw_master.SetItem(1, "sc_bm", "")
//                dw_master.SetItem(1, "sc_mc", "")
//                dw_master.SetItem(1, "sc_jc", "")
//                dw_master.SetItem(1, "sc_pym", "")
//                dw_master.SetItem(1, "sc_lgfs", "")


            } else {
                dw_master.SetItem(1, "zjfscwld_shrbm", "")
                dw_master.SetItem(1, "zjfscwld_shrmc", "")
                dw_master.SetItem(1, "zjfscwld_zyxx", "")
                dw_master.SetItem(1, "zjfscwld_sj", "")
                dw_master.SetItem(1, "zjfscwld_cp", "")
                dw_master.SetItem(1, "zjfscwld_sjlxfs", "")
                ///                
                var zjfscwld_rwbh = dw_master.GetItemString(1, "zjfscwld_rwbh");
                var zjfscwld_c_rwbh = dw_master.GetItemString(1, "zjfscwld_c_rwbh");
                if (zjfscwld_rwbh.length > 1 || zjfscwld_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地1任务已经下达，请及时去修改！")
                }
                ///
            }
        }
        if (dwoName == "sc_bz") {

            if (data == "Y") {
                //             

            } else {
                dw_master.SetItem(1, "sc_bm", "")
                dw_master.SetItem(1, "sc_mc", "")
                dw_master.SetItem(1, "sc_jc", "")
                dw_master.SetItem(1, "sc_pym", "")
                dw_master.SetItem(1, "sc_lgfs", "")
                dw_master.SetItem(1, "jschfscwld_bz", "N")
                ///                
                var sc_rwbh = dw_master.GetItemString(1, "sc_rwbh");
                var sc_c_rwbh = dw_master.GetItemString(1, "sc_c_rwbh");
                if (sc_rwbh.length > 1 || sc_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "市场任务已经下达，请及时去修改！")
                }
                ///
            }
            dw_master.SetItem(1, "sc_sj", "")
            dw_master.SetItem(1, "sc_cp", "")
            dw_master.SetItem(1, "sc_sjlxfs", "")

            dw_master.SetItem(1, "jschfscwld_sj", "")
            dw_master.SetItem(1, "jschfscwld_cp", "")
            dw_master.SetItem(1, "jschfscwld_sjlxfs", "")
        }

        if (dwoName == "jschfscwld_bz") {
            if (data == "Y") {
                var sc_bz = dw_master.GetItemString(1, "sc_bz")
                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "jschfscwld_shrbm", sjshrbm)
                dw_master.SetItem(1, "jschfscwld_shrmc", sjshrmc)
                dw_master.SetItem(1, "jschfscwld_zyxx", zyxx)


                var jschfscwld_sj = ""
                var jschfscwld_cp = ""
                var jschfscwld_sjlxfs = ""
                if (sc_bz == "Y") {
                    jschfscwld_sj = dw_master.GetItemString(1, "sc_sj")
                    jschfscwld_sjlxfs = dw_master.GetItemString(1, "sc_sjlxfs")
                    jschfscwld_cp = dw_master.GetItemString(1, "sc_cp")
                } else
                    if (jyd_bz == "Y") {
                        jschfscwld_sj = dw_master.GetItemString(1, "jyd_sj")
                        jschfscwld_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                        jschfscwld_cp = dw_master.GetItemString(1, "jyd_cp")
                    }
                    else if (hgcyd_bz == "Y") {
                        jschfscwld_sj = dw_master.GetItemString(1, "hgcyd_sj")
                        jschfscwld_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                        jschfscwld_cp = dw_master.GetItemString(1, "hgcyd_cp")
                    }
                    else if (gq_bz = "Y") {
                        jschfscwld_sj = dw_master.GetItemString(1, "gq_sj")
                        jschfscwld_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                        jschfscwld_cp = dw_master.GetItemString(1, "gq_cp")
                    }

                dw_master.SetItem(1, "jschfscwld_sj", jschfscwld_sj)
                dw_master.SetItem(1, "jschfscwld_cp", jschfscwld_cp)
                dw_master.SetItem(1, "jschfscwld_sjlxfs", jschfscwld_sjlxfs)

            } else {
                dw_master.SetItem(1, "jschfscwld_shrbm", "")
                dw_master.SetItem(1, "jschfscwld_shrmc", "")
                dw_master.SetItem(1, "jschfscwld_zyxx", "")
                dw_master.SetItem(1, "jschfscwld_sj", "")
                dw_master.SetItem(1, "jschfscwld_cp", "")
                dw_master.SetItem(1, "jschfscwld_sjlxfs", "")
                ///                
                var jschfscwld_rwbh = dw_master.GetItemString(1, "jschfscwld_rwbh");
                var jschfscwld_c_rwbh = dw_master.GetItemString(1, "jschfscwld_c_rwbh");
                if (jschfscwld_rwbh.length > 1 || jschfscwld_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地2任务已经下达，请及时去修改！")
                }
                ///
            }
        }

       
        if (dwoName == "fscwld3_bz") {
            if (data == "Y") {
                var sc_bz = dw_master.GetItemString(1, "sc_bz")
                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "fscwld3_shrbm", sjshrbm)
                dw_master.SetItem(1, "fscwld3_shrmc", sjshrmc)
                dw_master.SetItem(1, "fscwld3_zyxx", zyxx)


                var fscwld3_sj = ""
                var fscwld3_cp = ""
                var fscwld3_sjlxfs = ""
                if (sc_bz == "Y") {
                    fscwld3_sj = dw_master.GetItemString(1, "sc_sj")
                    fscwld3_sjlxfs = dw_master.GetItemString(1, "sc_sjlxfs")
                    fscwld3_cp = dw_master.GetItemString(1, "sc_cp")
                } else
                    if (jyd_bz == "Y") {
                        fscwld3_sj = dw_master.GetItemString(1, "jyd_sj")
                        fscwld3_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                        fscwld3_cp = dw_master.GetItemString(1, "jyd_cp")
                    }
                    else if (hgcyd_bz == "Y") {
                        fscwld3_sj = dw_master.GetItemString(1, "hgcyd_sj")
                        fscwld3_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                        fscwld3_cp = dw_master.GetItemString(1, "hgcyd_cp")
                    }
                    else if (gq_bz = "Y") {
                        fscwld3_sj = dw_master.GetItemString(1, "gq_sj")
                        fscwld3_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                        fscwld3_cp = dw_master.GetItemString(1, "gq_cp")
                    }

                dw_master.SetItem(1, "fscwld3_sj", fscwld3_sj)
                dw_master.SetItem(1, "fscwld3_cp", fscwld3_cp)
                dw_master.SetItem(1, "fscwld3_sjlxfs", fscwld3_sjlxfs)

            } else {
                dw_master.SetItem(1, "fscwld3_shrbm", "")
                dw_master.SetItem(1, "fscwld3_shrmc", "")
                dw_master.SetItem(1, "fscwld3_zyxx", "")
                dw_master.SetItem(1, "fscwld3_sj", "")
                dw_master.SetItem(1, "fscwld3_cp", "")
                dw_master.SetItem(1, "fscwld3_sjlxfs", "")
                ///                
                var fscwld3_rwbh = dw_master.GetItemString(1, "fscwld3_rwbh");
                var fscwld3_c_rwbh = dw_master.GetItemString(1, "fscwld3_c_rwbh");
                if (fscwld3_rwbh.length > 1 || fscwld3_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地3任务已经下达，请及时去修改！")
                }
                ///
            }
        }


        if (dwoName == "fscwld4_bz") {
            if (data == "Y") {
                var sc_bz = dw_master.GetItemString(1, "sc_bz")
                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "fscwld4_shrbm", sjshrbm)
                dw_master.SetItem(1, "fscwld4_shrmc", sjshrmc)
                dw_master.SetItem(1, "fscwld4_zyxx", zyxx)


                var fscwld4_sj = ""
                var fscwld4_cp = ""
                var fscwld4_sjlxfs = ""
                if (sc_bz == "Y") {
                    fscwld4_sj = dw_master.GetItemString(1, "sc_sj")
                    fscwld4_sjlxfs = dw_master.GetItemString(1, "sc_sjlxfs")
                    fscwld4_cp = dw_master.GetItemString(1, "sc_cp")
                } else
                    if (jyd_bz == "Y") {
                        fscwld4_sj = dw_master.GetItemString(1, "jyd_sj")
                        fscwld4_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                        fscwld4_cp = dw_master.GetItemString(1, "jyd_cp")
                    }
                    else if (hgcyd_bz == "Y") {
                        fscwld4_sj = dw_master.GetItemString(1, "hgcyd_sj")
                        fscwld4_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                        fscwld4_cp = dw_master.GetItemString(1, "hgcyd_cp")
                    }
                    else if (gq_bz = "Y") {
                        fscwld4_sj = dw_master.GetItemString(1, "gq_sj")
                        fscwld4_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                        fscwld4_cp = dw_master.GetItemString(1, "gq_cp")
                    }

                dw_master.SetItem(1, "fscwld4_sj", fscwld4_sj)
                dw_master.SetItem(1, "fscwld4_cp", fscwld4_cp)
                dw_master.SetItem(1, "fscwld4_sjlxfs", fscwld4_sjlxfs)

            } else {
                dw_master.SetItem(1, "fscwld4_shrbm", "")
                dw_master.SetItem(1, "fscwld4_shrmc", "")
                dw_master.SetItem(1, "fscwld4_zyxx", "")
                dw_master.SetItem(1, "fscwld4_sj", "")
                dw_master.SetItem(1, "fscwld4_cp", "")
                dw_master.SetItem(1, "fscwld4_sjlxfs", "")
                ///                
                var fscwld4_rwbh = dw_master.GetItemString(1, "fscwld4_rwbh");
                var fscwld4_c_rwbh = dw_master.GetItemString(1, "fscwld4_c_rwbh");
                if (fscwld4_rwbh.length > 1 || fscwld4_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地4任务已经下达，请及时去修改！")
                }
                ///
            }
        }


        if (dwoName == "dc_bz") {
            if (data == "Y") {

            } else {
                dw_master.SetItem(1, "fxdcbm", "")
                dw_master.SetItem(1, "fxdcmc", "")
                dw_master.SetItem(1, "fxdcjc", "")
                dw_master.SetItem(1, "fxdcpym", "")

            }
        }



    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_master_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        

    }
    //#endregion

    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
        if (dwoName == "ckka") {
            dw_master.GetChild(dwoName, dwc);
            if (data != "") {
                dwc.Retrieve("%" + data + "%");
            }
            else {
                dwc.Retrieve("%");
            }
        }
    }
    //#endregion


    //#region 同步生鲜港
    this.Tbsxg = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        
        var cxh = dw_master.GetItemNumber(1, "cxh");
        //执行删除的WebService       
        webReq.SetFunctionID(requestor.GetFunctionID());

        zdmc = "jyd_bm,jyd_mc,jyd_jc,jyd_pym,djydsj,tgjysj";
        
        webReq.Invoke("Tbsxg", "ywbh=" + ywbh + "&cxh=" + cxh + "&zdmc=" + zdmc);

        if (webReq.StatusCode() == 200) {
            webReq.ResponseText();
            var num = QsWebSoft.PubMethod.UpdateTbsxgbz(ywbh, "Y").value;
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }
    //#endregion

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    //#region tabselect
    var lastdw = new DataWindow();
    this.Tab_Select = function () {
//        if (tab_1.GetSelectedTab() == 1) {
//            var bEditFlag = false;
//            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
//                bEditFlag = true;
//            }
//            else {
//                bEditFlag = false;
//            };
//            tb_1.SetVisible("btn_rowcopy", bEditFlag);
//            tb_1.SetVisible("btn_rownext", bEditFlag);
//            tb_1.SetVisible("btn_rowback", bEditFlag);
//            tb_1.SetVisible("btn_rowadd", bEditFlag);
//            tb_1.SetVisible("btn_rowdelete", bEditFlag);
//            tb_1.SetVisible("btn_rownext", bEditFlag);
//            dw_jzxxx.dw_GetFocus()
//        }
//        if (tab_1.GetSelectedTab() == 2) {
//            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
//                bEditFlag = true;
//            }
//            else {
//                bEditFlag = false;
//            };
//            tb_1.SetVisible("btn_rowadd", false);
//            tb_1.SetVisible("btn_rowdelete", false);
//            tb_1.SetVisible("btn_rowcopy", false);
//            tb_1.SetVisible("btn_rownext", false);
//            tb_1.SetVisible("btn_rowback", false);
//        }

      
    };
    //#endregion

}





