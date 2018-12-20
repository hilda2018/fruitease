///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_KddglEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_master= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_ts= new SingleLineEdit( requestor );
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
		 if(sle_ts == null ) sle_ts= new SingleLineEdit( requestor );
		 sle_ts.Attach( win.Control( "sle_ts") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_master_ButtonClicked); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

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
		 sle_ts.Detach(); sle_ts=null; 
		 ds_1.Detach(); ds_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Hddz_Hdf_Select = null;
    var dwc = new DataWindowChild();
    var iw_Wldw_Select = null;
    var iw_Wldw_Zfdx_Select = null;
    var iw_Wldw_Yh_Select = null;
    var iw_Ry_Select = null;
    
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Kddgl.ashx");

    
    
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
        } else {
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
       

        if (dw_master.ModifiedCount() > 0) {
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

       
        if ((dw_master.ModifiedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var row = dw_master.GetRow();
        var kddbh = dw_master.GetItemString(row, "kddbh"); 
 

        var dw_master_data = dw_master.GetChanges(); 
        

        if (dw_master_data == "" && dw_jzxxx_data == ""  )
            return;
        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&kddbh=" + kddbh + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            kddbh = webReq.ResponseText();
            dw_master.SetItem(1, "kddbh", kddbh);
                        
            dw_master.ResetUpdate(); 
            
            self.SetEditMode("open");
            requestor.MessageBox("提示", "数据保存成功!");
            dw_master.Modify("kddbh.Tabsequence=0");            

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion


    //#region 打印 
    this.Print = function () {

        var kddbh = dw_master.GetItemString(1, "kddbh");

        

        dw_print.SetDataObject("dw_kddgl_print_sf");
        dw_print.Retrieve(kddbh);
        dw_print.PrintPreview();
    }
    //#endregion
   

    //#region 新建
    this.Add = function () {
        dw_master.Reset();
        dw_master.InsertRow(0);

        var userid = requestor.GetParm("userid");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var userip = requestor.GetParm("userip");

        var date = new Date();
        var ywyobj = new Array(2);
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid(userid).value;
        if (ywyobj == null) {
            var ywy = "";
            var bm = "";
        }
        else {
            if (ywyobj.length == 0) {
                var ywy = "";
                var bm = "";

            }
            else {
                ywy = ywyobj[0];
                bm = ywyobj[1];

            }
        }

        dw_master.SetItem(1, 'zbr', userid);
        dw_master.SetItem(1, 'jjr_lxr', "邢颖颖");
         dw_master.SetItem(1, 'jjr_lxdh', "13651982467");
//        var userobj = new Array(2);
//        userobj = QsWebSoft.PubMethod.GetGrxxbyUserid(userid).value;
//        if (userobj == null) {
//            var jjr_lxr = "";
//            var jjr_lxdh = "";
//        }
//        else {
//            if (userobj.length == 0) {
//                var jjr_lxr = "";
//                var jjr_lxdh = "";

//            }
//            else {
//                jjr_lxr = userobj[0];
//                jjr_lxdh = userobj[1];
//                dw_master.SetItem(1, 'jjr_lxr', jjr_lxr);
//                dw_master.SetItem(1, 'jjr_lxdh', jjr_lxdh);
//            }
//        }
        
        self.SetEditMode("new");



    }
    //#endregion


    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();

        dw_master.SetItem(1, "kddbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate());         
        self.SetEditMode("copy");
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_ButtonClicked = function (Row, dwoName) {

        if (editMode == "show")
            return;

        if (dwoName == "b_sjr_gs") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("kddgl");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "b_jjr_lxr") {
            if (iw_Ry_Select == null)
                iw_Ry_Select = new W_Ry_Select();
            iw_Ry_Select.SetDataWindow(dw_master);
            iw_Ry_Select.SetData("jjr_lxr");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Ry_Select", iw_Ry_Select);
            dw_master.SetFocus();
        }

    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        if (dwoName == "sjr_lxr") {
             var sjr_gs = dw_master.GetItemString(1,"sjr_gs");
             dw_master.GetChild("sjr_lxr", dwc);
             dwc.Retrieve(sjr_gs);

        }
         if (dwoName == "jjr_lxr") {
             dw_master.GetChild("jjr_lxr", dwc);
             dwc.Retrieve();

         }
        
    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {
        if (editMode == "show")
            return;

        if (dwoName == "sjr_lxr") {
            var row_find = dwc.Find("lxr = '" + data + "'", 1, dwc.RowCount());

            if (row_find > 0) {
                var sjr_gddh = dwc.GetItemString(row_find, "mobile");
                if (sjr_gddh == null || sjr_gddh == "") {
                    sjr_gddh = dwc.GetItemString(row_find, "tel");
                }
                dw_master.SetItem(1, "sjr_gddh", sjr_gddh);
            }

        }

        if (dwoName == "jjr_lxr") {
            var row_find = dwc.Find("e_name = '" + data + "'", 1, dwc.RowCount());

            if (row_find > 0) {
                var jjr_lxdh = dwc.GetItemString(row_find, "mobile_tel");
                if (jjr_lxdh == null || jjr_lxdh == "") {
                    jjr_lxdh = dwc.GetItemString(row_find, "e_tel");
                }

                dw_master.SetItem(1, "jjr_lxdh", jjr_lxdh);
            }

        }

        if (dwoName == "jff") {
            if (data == "Y") {
                dw_master.SetItem(1, "yjzh", "0212928295");
                dw_master.SetItem(1, "sff", "");
                dw_master.SetItem(1, "dsff", "");
            } else {
                dw_master.SetItem(1, "yjzh", "");
            }

        }

        if (dwoName == "sff") {
            if (data == "Y") {
                dw_master.SetItem(1, "yjzh", "");
                dw_master.SetItem(1, "jff", "");
                dw_master.SetItem(1, "dsff", "");
            } else {
                dw_master.SetItem(1, "yjzh", "");
            }

        }

        if (dwoName == "dsff") {
            if (data == "Y") {
                dw_master.SetItem(1, "yjzh", "");
                dw_master.SetItem(1, "jff", "");
                dw_master.SetItem(1, "sff", "");
            } else {
                dw_master.SetItem(1, "yjzh", "");
            }

        }

    }
    //#endregion


    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {
        dw_master.AcceptText();       
    }
    //#endregion

    

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

}





