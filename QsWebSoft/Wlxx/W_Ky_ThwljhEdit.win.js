///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Ky_ThwljhEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_master= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dw_log= new DataWindow( requestor );
	 var ds_1= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("window","Clicked",self.Exit); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

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
		 dw_print.Detach(); dw_print=null; 
		 tb_1.Detach(); tb_1=null; 
		 dw_log.Detach(); dw_log=null; 
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
 
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Ky_Thwljh.ashx");

    
    
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

        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString(row, "ywbh");
        var cxh = dw_master.GetItemNumber(row, "cxh");
        var cdbm = dw_master.GetItemString(row, "cdbm");
        if (cdbm == "" || cdbm == null) {
            alert("车队必须选择!");
            return;
        }
        //更新行号
        dw_master.SetItem(row, "csbz", "Y")
        var xccy = dw_master.GetItemString(row, "xccy");
        dw_master.SetItem(row, "jyd_bz", xccy)

        var dw_master_data = dw_master.GetChanges();

        if (dw_master_data == "")
            return;

        //数据同步生鲜港
        if (dw_master.GetItemStatus(1, 0, DWBUFFER.Primary) == 1) {
            var ywbh = dw_master.GetItemString(1, "ywbh");
            var cxh = dw_master.GetItemNumber(1, "cxh");
            var row = dw_log.InsertRow(0);
            //var maxNumber =  self.SerialNumber(log_num);
            var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "yw_hddz_jzxxx");
            dw_log.SetItem(row, "changecols", "zjfscwld_bz,sc_bz,zjfscwld_shrmc,zjfscwld_zyxx,cdjsdwjc");
            dw_log.SetItem(row, "mainid", ywbh);
            dw_log.SetItem(row, "parameters", cxh.toString());
            dw_log.ScrollToRow(row);
        }

        dw_log.AcceptText()
        var dw_log_data = dw_log.GetChanges();
        if (dw_log_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_log=" + dw_log_data + "&ywbh=" + ywbh + "&cxh=" + cxh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            ywbh = webReq.ResponseText();
            dw_master.SetItem(1, "ywbh", ywbh);

            dw_master.ResetUpdate();
            dw_log.ResetUpdate();
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
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
        var cxh = dw_master.GetItemNumber(1,"cxh")
        dw_print.SetDataObject("dw_ky_thwljh_print");
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
        //        dw_master.SetItem(1, "jyd_bz", "Y");
        var xccy = dw_master.GetItemString(1, "xccy")
        if (xccy == "Y") {
            dw_master.SetItem(1, "jyd_bz", "Y");
            var jyjbm = dw_master.GetItemString(1, "jyjbm")
            if (jyjbm == "40010126") {
                dw_master.SetItem(1, "jyd_bm", "40070075");
                dw_master.SetItem(1, "jyd_mc", "上海龙吴果蔬批发交易市场经营管理有限公司");
                dw_master.SetItem(1, "jyd_jc", "龙吴市场");
                dw_master.SetItem(1, "jyd_pym", "shlwgspfjyscjyglyxgs");
            }
            if (jyjbm == "admin0611") {
                dw_master.SetItem(1, "jyd_bm", "admin0615");
                dw_master.SetItem(1, "jyd_mc", "上农批");
                dw_master.SetItem(1, "jyd_jc", "上农批");
                dw_master.SetItem(1, "jyd_pym", "snp");
            }
        } else {
            dw_master.SetItem(1, "jyd_bz", "N");
        }
        dw_master.SetItem(1, "sc_bm", "admin0616");
        dw_master.SetItem(1, "sc_mc", "上海辉展物流有限公司");
        dw_master.SetItem(1, "sc_jc", "辉展市场");
        dw_master.SetItem(1, "sc_pym", "shhzwlyxgs");
        dw_master.SetItem(1, "dc_bz", "Y");
        //        dw_master.SetItem(1, "sc_bz", "Y");
        //        dw_master.SetItem(1, "dc_bz", "Y");
        self.SetEditMode("new");



    }
    //#endregion

    function Todate(num) { //Fri Oct 31 18:00:00 UTC+0800 2008
        num = num + "";
        var date = "";
        var month = new Array();
        month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jan"] = 6;
        month["Jul"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
        var week = new Array();
        week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
        str = num.split(" ");
        date = str[5] + "-";
        date = date + month[str[1]] + "-" + str[2];
        return date;
    }

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

        if (dwoName == "dc_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "dc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_dc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }


        if (dwoName == "khbm_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var zydl = dw_master.GetItemString(1, "zydl");
            var Dlxyh = dw_master.GetItemString(1, "dlxyh");

            if (Dlxyh !=null && Dlxyh != "") {
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
            var zbrq = dw_master.GetItemDate(1, "zbrq");
            var zbrqstr = Todate(zbrq);

            if (zydl == "代理") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_dl");
            }
            else if (zydl == "自营") {
                iw_Hddz_Dlxy_Select.SetData("dlxyh_zy");
            }
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select&zbrq=" + zbrqstr, iw_Hddz_Dlxy_Select);
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


        if (dwoName == "cdjc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("ky_thwljh_cdjc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }


        if (dwoName == "cdjsdwjc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "cd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("ky_thwljh_cdjsdwjc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
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

        //如果非市场物流选择后 默认取对应上面的收获人和物流信息

        if (dwoName == "zjfscwld_bz") {
            if (data == "Y") {
                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "zjfscwld_shrbm", sjshrbm)
                dw_master.SetItem(1, "zjfscwld_shrmc", sjshrmc)
                dw_master.SetItem(1, "zjfscwld_zyxx", zyxx)

            }
        }

        if (dwoName == "jyd_bz") {
            if (data == "Y") {
                var mrjydbm = dw_master.GetItemString(1, "mrjydbm");
                var mrjyd = dw_master.GetItemString(1, "mrjyd");
                var mrjydjc = dw_master.GetItemString(1, "mrjydjc");
                var mrjydpym = dw_master.GetItemString(1, "mrjydpym");
                dw_master.SetItem(1, "jyd_bm", "mrjydbm")
                dw_master.SetItem(1, "jyd_mc", "mrjyd")
                dw_master.SetItem(1, "jyd_jc", "mrjydjc")
                dw_master.SetItem(1, "jyd_pym", "mrjydpym")

            } else {
                dw_master.SetItem(1, "jyd_bm", "")
                dw_master.SetItem(1, "jyd_mc", "")
                dw_master.SetItem(1, "jyd_jc", "")
                dw_master.SetItem(1, "jyd_pym", "")
            }
        }

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





