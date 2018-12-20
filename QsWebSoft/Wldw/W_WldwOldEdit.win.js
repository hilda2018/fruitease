///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_WldwOldEdit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tab_1= new TabControl( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tab_1 == null ) tab_1= new TabControl( requestor );
		 tab_1.Attach( win.Control( "tab_1") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Tab_Select)=="function") 
			 win.AttachEvent("tab_1","Clicked",self.Tab_Select); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

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
		 dw_print.Detach(); dw_print=null; 
		 dw_master.Detach(); dw_master=null; 
		 tb_1.Detach(); tb_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改



    //#region 变量定义
    var editMode = "";
    var iw_Commodity_Select = null;
    var iw_Eport_Select = null;
    var iw_Country_Select = null;
    var iw_Wldw_Select = null;

    //实例化销售订单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/WldwOld.ashx");

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
            dw_master.Modify("DataWindow.Readonly=no"); 
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes"); 
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
            self.SetEditMode("Show");
        };
    };
        //#endregion

        //#region 获得数据窗口的焦点
        var lastdw = new DataWindow();
        this.dw_GetFocus = function (sender) {           
            lastdw.Attach(sender);
        };
        //#endregion

        //#region 获得数据窗口的焦点
        var lastdw = new DataWindow();
        this.dw_Jsbm_GetFocus = function (sender) {
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
            if (dw_master.AcceptText() != 1)
                return;
            
            if ((dw_master.ModifiedCount() ) <= 0) {
                alert("没有数据需要保存!");
                return;
            }
           
            var row = dw_master.GetRow();
            var yw_khbm = dw_master.GetItemString(row, "yw_khbm");
                    
            var dw_master_data = dw_master.GetChanges();
            
            if (dw_master_data == "" )
                return;

            //执行保存的WebService 
            webReq.SetFunctionID(requestor.GetFunctionID());
            webReq.Invoke("Save", "dw_Master=" + dw_master_data + "&yw_khbm=" + yw_khbm + "&operation=" + editMode);
            if (webReq.StatusCode() == 200) {
                //服务器成功处理，返回单号
                var yw_khbm = webReq.ResponseText();
                dw_master.SetItem(1, "yw_khbm", yw_khbm);
                dw_master.ResetUpdate();
                requestor.MessageBox("提示", "数据保存成功!");
                self.Exit();
            }
            else {
                requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
                dw_master.SetFocus();
            };
        };
        //#endregion

   //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();


        if ((dw_master.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion


        //#region 打印 
        this.Print = function () {
            var yw_khbm = dw_master.GetItemString(1, "yw_khbm");
            dw_print.Retrieve(yw_khbm);
            dw_print.PrintPreview();
        }
        //#endregion



        //#region 新建
        this.Add = function () {
            dw_master.Reset();
            dw_master.InsertRow(0); 
            var userid = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
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
        }
        //#endregion

        //#region 复制
        this.Copy = function () {
            var userid = requestor.GetParm("userid"); 
            self.SetEditMode("copy");
        }
        //#endregion

        //#region 双击选择
        this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
            if (editMode == "show")
                return;
            

            if (dwoName == "tybm" || dwoName == "tymc" || dwoName == "tybm_t" || dwoName == "tymc_t") {
                   if (iw_Wldw_Select == null)
                        iw_Wldw_Select = new W_Wldw_Select();
                    khlx = "";
                    var ywy = requestor.GetParm("userid");
                    var ShareMode = requestor.GetParm("ShareMode");
                    var Dlwtf = requestor.GetParm("Dlwtf");
                    iw_Wldw_Select.SetDataWindow(dw_master);
                    iw_Wldw_Select.SetData("wldw_tybm");
                    requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
                    dw_master.SetFocus();


            }

        };
        //#endregion

        //#region 添加明细
        this.AddRow = function () {

           
        }
        //#endregion

        //#region 删除商品
        this.DeleteRow = function () {
            var row = lastdw.GetRow();
            if (row <= 0)
                return;

          

        }
        //#endregion

        //#region 复制商品
        this.RowCopy = function () {
            


        }
        //#endregion

        //#region 插入商品
        this.InsertRow = function () {
            


        }
        //#endregion

        //#region tabselect
        this.Tab_Select = function () {
            var bEditFlag = false;
            if (tab_1.GetSelectedTab() == 1) {
                var bEditFlag = false;
                tb_1.SetVisible("btn_rowcopy", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);
                tb_1.SetVisible("btn_rowback", bEditFlag);
                tb_1.SetVisible("btn_rowadd", bEditFlag);
                tb_1.SetVisible("btn_rowdelete", bEditFlag);
                tb_1.SetVisible("btn_rownext", bEditFlag);

            }
          
        };
        //#endregion

        

};