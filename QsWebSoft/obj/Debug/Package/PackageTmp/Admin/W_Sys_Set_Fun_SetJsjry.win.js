///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Sys_Set_Fun_SetJsjry() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var dw_Modules= new DataWindow( requestor );
	 var dw_RoleInfo= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ds_right= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(dw_Modules == null ) dw_Modules= new DataWindow( requestor );
		 dw_Modules.Attach( win.Control( "dw_Modules") ); 
		 if(dw_RoleInfo == null ) dw_RoleInfo= new DataWindow( requestor );
		 dw_RoleInfo.Attach( win.Control( "dw_RoleInfo") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ds_right == null ) ds_right= new DataStore( requestor );
		 ds_right.Attach( win.Control( "ds_right") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_1_ItemChanged)=="function") 
			 win.AttachEvent("dw_1","ItemChanged",self.dw_1_ItemChanged); 

		 if(typeof(self.dw_Modules_Clicked)=="function") 
			 win.AttachEvent("dw_Modules","Clicked",self.dw_Modules_Clicked); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.Save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_2","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 dw_Modules.Detach(); dw_Modules=null; 
		 dw_RoleInfo.Detach(); dw_RoleInfo=null; 
		 tb_1.Detach(); tb_1=null; 
		 ds_right.Detach(); ds_right=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改



    var roleID = "";
    var moduleID = "";
    var priorRow = 0;
    var funID = "";

    this.PostOpen = function () {
        priorRow = 0;
        var row = dw_Modules.Find("isLast='1'", 1, dw_Modules.RowCount());
        if (row > 0)
            self.dw_Modules_Clicked(0, 0, row, "");
    }


    this.Exit = function () {
        requestor.Close(); 
    }

    this.Save = function () {
        dw_1.AcceptText();
        if (dw_1.ModifiedCount() <= 0) {
            return;
        }
        self.UpdatePermission();
    }

    this.UpdatePermission = function () {

        if (dw_1.ModifiedCount() <= 0)
            return;
        var Row = dw_Modules.GetRow();
        moduleID = dw_Modules.GetItemString(Row, "id");
        roleID = dw_RoleInfo.GetItemString(dw_RoleInfo.GetRow(), "id");
        webReq.Invoke("SetPermissions", "roleid=" + roleID + "&moduleid=" + moduleID + "&data=" + ds_right.GetSyntaxData());
        if (webReq.StatusCode() == 200) {
            requestor.MessageBox("提示", "保存成功", ICON.Information);
            ds_right.ResetUpdate();
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }

    this.dw_Modules_Clicked = function (xPos, yPos, Row, dwoName) {
        if (Row <= 0 || priorRow == Row)
            return;
        var moduleID = dw_Modules.GetItemString(Row, "id");
        var roleID = dw_RoleInfo.GetItemString(1, "id");
        dw_1.Retrieve(moduleID, roleID)
        ds_right.Retrieve(roleID, moduleID);

    }

    this.dw_1_ItemChanged = function (row, dwoName, data) {
        if (row <= 0)
            return;
        moduleID = dw_1.GetItemString(row, "parentid");
        roleID = dw_RoleInfo.GetItemString(1, "id");
        funID = dw_1.GetItemString(row, "id");
       

        if (dwoName == "selected") {
            if (data == "1") {
                var insertrow = ds_right.InsertRow(0);
                ds_right.SetItem(insertrow, "moduleid", moduleID);
                ds_right.SetItem(insertrow, "funid", funID);
                ds_right.SetItem(insertrow, "roleid", roleID);
                ds_right.SetItem(insertrow, "hasright", "1");

            }

            if (data == "0") {
                var findrow = 0;
                var find = "funid='" + funID + "'";

                findrow = ds_right.Find(find, 1, ds_right.RowCount());

                if (findrow > 0) {
                    ds_right.DeleteRow(findrow);
                }

            }

        }
 

    }
    
}