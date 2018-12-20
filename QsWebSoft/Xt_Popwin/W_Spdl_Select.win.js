///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Spdl_Select() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 

		 if(typeof(self.btn_ok)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.btn_ok); 

		 if(typeof(self.btn_ok)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.btn_ok); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_1.Detach(); sle_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var dw_primary = null;

    this.SetDataWindow = function (dw) {
        dw_primary = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }


    this.btn_ok = function () {
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要添加的大类信息!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var code = dw_1.GetItemString(row, 'dldm');
        if (dw_primary != null) {
            if (column == "spdl") {
                dw_primary.SetItem(1, 'spdl', code);
                requestor.Close();
            };
        };
    }

    this.Exit = function () {
        requestor.Close();
    }

    this.sle_EditChanged = function (text) {
        dw_1.SetRedraw(false);
        if (text == "") {
            dw_1.SetFilter("");
            dw_1.Filter();
        }
        else {
            dw_1.SetFilter("( Upper(dldm) like '%" + text + "%') or ( Lower(cdlmc) like '%" + text + "%') or ( edlmc like '%" + text + "%')");
            dw_1.Filter();
            dw_1.Sort();
        }
        dw_1.SetRedraw(true);
    }


 }