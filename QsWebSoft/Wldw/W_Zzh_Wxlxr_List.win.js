///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Zzh_Wxlxr_List() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_FindText= new SingleLineEdit( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(sle_FindText == null ) sle_FindText= new SingleLineEdit( requestor );
		 sle_FindText.Attach( win.Control( "sle_FindText") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 

		 if(typeof(self.dw_1_Clicked)=="function") 
			 win.AttachEvent("dw_1","Clicked",self.dw_1_Clicked); 

		 if(typeof(self.dw_1_DoubleClicked)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.dw_1_DoubleClicked); 

		 if(typeof(self.dw_1_MouseMove)=="function") 
			 win.AttachEvent("dw_1","MouseMove",self.dw_1_MouseMove); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_1","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_FindText","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Filter)=="function") 
			 win.AttachEvent("sle_FindText","Modified",self.Filter); 

		 if(typeof(self.Add)=="function") 
			 win.AttachEvent("btn_Add","Clicked",self.Add); 

		 if(typeof(self.Edit)=="function") 
			 win.AttachEvent("btn_Edit","Clicked",self.Edit); 

		 if(typeof(self.Delete)=="function") 
			 win.AttachEvent("btn_Delete","Clicked",self.Delete); 

		 if(typeof(self.SetRoles)=="function") 
			 win.AttachEvent("btn_SetRoles","Clicked",self.SetRoles); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_FindText.Detach(); sle_FindText=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改


    var iw_Edit = null;  
    var iw_SetRoles = null; 

    this.Filter = function (text) {
        if (text == "")
            dw_1.SetFilter("");
        else
            dw_1.SetFilter("( ID like '%" + text + "%') or ( name like '%" + text + "%') ");

        dw_1.Filter();
        dw_1.Sort();
    }


    this.Add = function () {
        if (iw_Edit == null) {
            iw_Edit = new W_Zzh_Wxlxr_Edit();
            iw_Edit.SetListDataWindow(dw_1);
        }
        if (dw_1.RowCount() > 0) {
            var id_max = escape(requestor.GetParm("userid")) + dw_1.GetItemString(1, "id_max");
        } else {
            var id_max = escape(requestor.GetParm("userid")) + "001";
        }

        requestor.Open("/LoadWindow.ashx?WinName=Wldw.W_Zzh_Wxlxr_Edit" + "&id_max=" + id_max, iw_Edit);
    }

     this.Edit = function () {
            if (dw_1.GetRow() <= 0)
                return;

            if (iw_Edit == null) {
                iw_Edit = new W_Zzh_Wxlxr_Edit();
                iw_Edit.SetListDataWindow(dw_1);
             }
            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "userid"));
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "Y") {
                requestor.MessageBox("提示", "本帐户不是子帐户,不能修改！")
                return;
            }
            requestor.Open("/LoadWindow.ashx?WinName=Wldw.W_Zzh_Wxlxr_Edit&ID=" + id, iw_Edit);
        }

        this.Delete = function () {
            if (dw_1.GetRow() <= 0)
                return;
            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "Y") {
                requestor.MessageBox("提示", "本帐户不是子帐户,不能删除！")
                return;
            }
            if (requestor.MessageBox("提示", "真的要删除当前选择的用户吗?", ICON.Question, BUTTON.YesNo) == 2) {
                dw_1.SetFocus();
                return;
            }

            webReq.Invoke("Delete", "id=" + escape(dw_1.GetItemString(dw_1.GetRow(), "userid")));
            if (webReq.StatusCode() == 200) {
                dw_1.RowsDiscard(dw_1.GetRow(), dw_1.GetRow(), DWBUFFER.Primary);
                dw_1.SetFocus(); 
            }
            else {
                requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            }
            dw_1.SetFocus();
        }

        
        
        this.SetRoles = function () {
           

            if (dw_1.GetRow() <= 0)
                return;
            if (iw_SetRoles == null)
                iw_SetRoles = new W_Zzh_Wxlxr_SetRoles();

            var sfszzh = dw_1.GetItemString(dw_1.GetRow(), "sfszzh");
            if (sfszzh == "Y") {
                requestor.MessageBox("提示", "本帐户不是子帐户,不能设置！")
                return;
            }


            var id = escape(dw_1.GetItemString(dw_1.GetRow(), "userid"));
            requestor.Open("/LoadWindow.ashx?WinName=Wldw.W_Zzh_Wxlxr_SetRoles&ID=" + id, iw_SetRoles);

        }
        this.dw_1_DoubleClicked = function (xPos, yPos, Row, data) {
            if (Row == 0)
                return;

            self.Edit();
        }
        //#region 过滤
        this.sle_EditChanged = function (text) {

            dw_1.SetRedraw(false);
            if (text == "")
                dw_1.SetFilter("");
            else
                dw_1.SetFilter("( Upper(xm) like '%" + text + "%')  or ( Lower(xm) like '%" + text + "%') or ( Upper(sjhm) like '%" + text + "%')  or ( Lower(sjhm) like '%" + text + "%') or ( Upper(khbm) like '%" + text + "%')  or ( Lower(khbm) like '%" + text + "%')");
            dw_1.Filter();
            dw_1.Sort();
            dw_1.SetRedraw(true);
        }
        //#endregion


        //#region 恢复默认列
        this.Recover = function () {

            QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Wldw.W_Wxlxr_List", "dw_wxlxr_list");
            self.Retrieve();
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


        
    }


    

var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Wxlxr.ashx");
