///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hssh_Select() {

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

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.OK); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.OK); 

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

    var dw_mx = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }


    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        sle_1.SetFocus();
    }
    this.OK = function () {
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要添加的海关代码!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var code = dw_1.GetItemString(row, 'hs_code');
        var unit_name = dw_1.GetItemString(row, 'unit_name');
        var unit_ename = dw_1.GetItemString(row, 'unit_ename');
        if (dw_mx != null) {
            if (column == "hgbm") {
                dw_mx.SetItem(1, 'hgbm', code);
                requestor.Close();
            };
            if (column == "hgbm_sp") {
                dw_mx.SetItem(1, 'hgbm', code);
                dw_mx.SetItem(1, 'jldw_c_hg', unit_name);
                dw_mx.SetItem(1, 'jldw_e_hg', unit_ename);
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
            dw_1.SetFilter("( Upper(hs_code) like '%" + text + "%') or ( Lower(cname) like '%" + text + "%') or ( cname like '%" + text + "%')");
            dw_1.Filter();
            dw_1.Sort();
        }
        dw_1.SetRedraw(true);
    }


 }