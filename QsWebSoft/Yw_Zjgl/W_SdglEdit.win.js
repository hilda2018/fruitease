///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_SdglEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_mx= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_print= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ds_1= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_mx == null ) dw_mx= new DataWindow( requestor );
		 dw_mx.Attach( win.Control( "dw_mx") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_mx_Clicked)=="function") 
			 win.AttachEvent("dw_mx","Clicked",self.dw_mx_Clicked); 

		 if(typeof(self.dw_mx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_mx","DoubleClicked",self.dw_mx_DoubleClicked); 

		 if(typeof(self.dw_mx_ItemChanged)=="function") 
			 win.AttachEvent("dw_mx","ItemChanged",self.dw_mx_ItemChanged); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_preview","Clicked",self.Print); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tab_1.Detach(); tab_1=null; 
		 dw_mx.Detach(); dw_mx=null; 
		 dw_master.Detach(); dw_master=null; 
		 dw_print.Detach(); dw_print=null; 
		 tb_1.Detach(); tb_1=null; 
		 ds_1.Detach(); ds_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改



    //#region 变量定义
    var editMode = "";
    var iw_Mxd_Select = null;
    var iw_Wldw_Select = null;
    var dwc = new DataWindowChild();
    

    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Sdgl.ashx");

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

        tb_1.SetEnabled("btn_save", bEditFlag);

        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_mx.Modify("DataWindow.Readonly=no");
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_mx.Modify("DataWindow.Readonly=yes");
        };
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
            };
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            };

            if (operation == "open") {
                self.SetEditMode("open");
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

    //#region 存盘
        this.Save = function () {
            if (editMode == "show")
                return;


            if (dw_mx.AcceptText() != 1)
                return;

            if ((dw_mx.ModifiedCount() + dw_mx.DeletedCount()) <= 0) {
                alert("没有数据需要保存!");
                return;
            }
            var sdbh = dw_master.GetItemString(dw_master.GetRow(), "sdbh");

            //更新行号
            var ls_mxdbh = "";
            var ls_mxdbh_all = "";
            for (row = dw_mx.RowCount(); row > 0; row--) {
                if (dw_mx.GetItemString(row, "mxdbh") == "" || dw_mx.GetItemString(row, "mxdbh") == null) {
                    requestor.MessageBox("提示", "拆分数据第" + row + "行没有外销发票号，请确认!");
                    return;
                }
                dw_mx.SetItem(row, "cxh", row);
                dw_mx.SetItem(row, "sdbh", sdbh);
                ls_mxdbh = dw_mx.GetItemString(row, "mxdbh")
                if (ls_mxdbh_all.indexOf(ls_mxdbh) <= 0) {
                    ls_mxdbh_all = ls_mxdbh_all + "," + ls_mxdbh;
                }
            }
            ls_mxdbh_all = ls_mxdbh_all.substring(2);
            dw_master.SetItem(dw_master.GetRow(), "wxhth", ls_mxdbh_all);
            var ldc_shje = dw_master.GetItemNumber(dw_master.GetRow(), "shje");
            var cfje = 0;
            if (dw_mx.RowCount() > 0) {
                cfje = dw_mx.GetItemNumber(1, "sum_shje");
            }
            if (ldc_shje.toFixed(2) - cfje.toFixed(2) < -0.000001) {
                requestor.MessageBox("提示", '拆分的收汇金额大于财务输入的收汇金额');
                return;
            }
            if ((ldc_shje.toFixed(2) - cfje.toFixed(2)) < 0.001 || (ldc_shje.toFixed(2) - cfje.toFixed(2))>-0.001) {
                dw_mx.SetItem(1, "full_flag", "Y")
            }
            else {
                dw_mx.SetItem(1, "full_flag", "N")		//full_bgfp
            }


            var dw_mx_data = dw_mx.GetChanges();
            var dw_mater_data = dw_master.GetChanges();
            if (dw_mater_data == "" && dw_mx_data == "")
                return;

            //执行保存的WebService
            webReq.SetFunctionID(requestor.GetFunctionID());
            webReq.Invoke("Save", "dw_Master=" + dw_mater_data + "&dw_Detail=" + dw_mx_data + "&sdbh=" + sdbh + "&operation=" + editMode);

            if (webReq.StatusCode() == 200) {
                //服务器成功处理，返回单号
                var sqdbh = webReq.ResponseText();
                dw_mx.ResetUpdate();
                dw_master.ResetUpdate();
                requestor.MessageBox("提示", "数据保存成功!");
                //                self.Exit();
            }
            else {
                requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
                dw_mx.SetFocus();
            };
        };
        //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();
        dw_mx.AcceptText();

        if ((dw_master.ModifiedCount() + dw_mx.DeletedCount() + dw_mx.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); dwc = null;

    }
    //#endregion


    //#region 打印 
        this.Print = function () {
            var sqdbh = dw_master.GetItemString(1, "sqdbh");
            dw_print.Retrieve(sqdbh);
            dw_print.PrintPreview();
        }
        //#endregion
   


    //#region 双击选择
        this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;
            if (dwoName == "skdw_bm_t") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "fgf";
                fgflx = "%";
               
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");
                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("skdwbh");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx + "&fgflx=" + fgflx, iw_Wldw_Select);
                dw_master.SetFocus();
            }
        };
        //#endregion

    //#region 添加明细
        this.AddRow = function () {
            dw_mx.ScrollToRow(dw_mx.InsertRow(0));
            dw_mx.SetFocus();
        }
            //#endregion

    //#region 删除明细
        this.DeleteRow = function () {
            var row = dw_mx.GetRow();
            if (row <= 0)
                return;
            var ls_state = dw_mx.GetItemString(row, "state")
            if (ls_state != "新拆") {
                requestor.MessageBox("提示", "不是新拆数据不能删除!");
                return;
            }
            var status = dw_mx.GetItemStatus(row, 0, DWBUFFER.Primary);

            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    dw_mx.SetFocus();
                    return;
                }


                dw_mx.DeleteRow(row);
            }


        }
        //#endregion







       //#region dw_mx ItemChanged
        this.dw_mx_ItemChanged = function (row, dwoName, data) {
            if (dwoName == "shje") {
                ldc_shje = dw_mx.GetItemNumber(row,"wshje");	
		        if ((data - ldc_shje) >0){
                 requestor.MessageBox("提示", "你输入的收汇金额大于本发票的未收汇金额，请注意核对！");
                 }
            }
        }
        //#endregion

        //#region dw_mx双击
        this.dw_mx_DoubleClicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;

            if (dwoName == "mxdbh") {
                var ls_state = dw_mx.GetItemString(Row, "state")
                if (ls_state != "新拆") {
                    requestor.MessageBox("提示", "不是新拆数据不能修改发票号!");
                    return;
                }
                if (iw_Mxd_Select == null)
                    iw_Mxd_Select = new W_Mxd_Select();
                iw_Mxd_Select.SetDataWindow(dw_mx);
                iw_Mxd_Select.SetData("sdgl");
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Mxd_Select", iw_Mxd_Select);
                dw_master.SetFocus();
            }
        }
        //#endregion


        //#region dw_mx单击
        this.dw_mx_Clicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;
             var row = dw_mx.GetRow();
             if ( row<=0 )
                return;
            if (dwoName == "c_bscw") {
              var ls_state = dw_mx.GetItemString(row,"state")
              if (ls_state == "新拆") {
	              dw_mx.SetItem(row,"state",'待确认')
                  }
               if (ls_state == "待确认") {
	            dw_mx.SetItem(row,"state",'新拆')
                }
            }
        }
        //#endregion

};