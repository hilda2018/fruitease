///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Eport_Select() {

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

    this.SetData= function (parm) {
        column = parm;
    }

    var RowData = null;
    this.SetRow = function (parm) {
        RowData = parm;
    }

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        sle_1.SetFocus();
    }

    this.OK = function () {
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要添加的港口信息!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var mdka = dw_1.GetItemString(row, 'port_country');
        var hggkdm = dw_1.GetItemString(row, 'hggkdm');
        var sjgkdm = dw_1.GetItemString(row, 'sjgkdm');
        
        if (dw_mx != null) {
            if (column == "mdka") {
                dw_mx.SetItem(1, 'mdka', mdka);
                requestor.Close();
            }
            if (column == "zkka") {
                dw_mx.SetItem(1, 'zzka', mdka);
                requestor.Close();
            }
            if (column == "qyg") {
                dw_mx.SetItem(1, 'qyg', mdka);
                dw_mx.SetItem(1, 'qygdm', hggkdm);
                dw_mx.SetItem(1, 'qygsjgkdm', sjgkdm);
                requestor.Close();
            }
            if (column == "qd") {
                dw_mx.SetItem(RowData, 'qidian', mdka);                 
                requestor.Close();
            }
            if (column == "zzgk") {
                dw_mx.SetItem(1, 'zzgk', mdka);
                requestor.Close();
            }

            if (column == "hddz_zzgk") {
                dw_mx.SetItem(RowData, 'zzgk', mdka);
                requestor.Close();
            }

            if (column == "list_zzgk") {
                dw_mx.SetItem(RowData, 'zzgk', mdka);
                requestor.Close();
            }

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
                dw_1.SetFilter("( Upper(hggkdm) like '%" + text.toUpperCase() + "%') or ( Lower(hggkdm) like '%" + text.toLowerCase + "%') or ( Upper(ename) like '%" + text.toUpperCase() + "%') or ( Lower(ename) like '%" + text.toLowerCase + "%') or ( cname like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();               
            }
            dw_1.SetRedraw(true);
        }

    
}