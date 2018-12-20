///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Country_Select() {

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
    var dw_mx1 = null;
    var dw_mx2 = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }

    this.SetDataWindow1 = function (dw) {
        dw_mx1 = dw;
    }
    this.SetDataWindow2 = function (dw) {
        dw_mx2 = dw;
        
    }

    var column = null;
    this.SetData = function (parm) {
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
            requestor.MessageBox("提示", "请选择要添加的国家信息!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var code = dw_1.GetItemString(row, 'ctr_code');
        var hgcode = dw_1.GetItemString(row, 'ctr_hgcode');
        var ename = dw_1.GetItemString(row, 'ctr_ename');
        var cname = dw_1.GetItemString(row, "ctr_cname")
        var rjka = dw_1.GetItemString(row, "rjka");
        var yzbh = dw_1.GetItemString(row, "yzbh");
        var dqdm = dw_1.GetItemString(row, "dqdm");
        var ctr_area2 = dw_1.GetItemString(row, "ctr_area2");
        var dztxts = dw_1.GetItemString(row, "dztxts");
        if (dw_mx != null) {
            if (column == "mygb") {
                dw_mx.SetItem(1, 'mygb', code);
                dw_mx.SetItem(1, 'mygbmc', ename);
                requestor.Close();
            };

            if (column == "hddz_mygb") {
                dw_mx.SetItem(1, 'mygb', ename);
                requestor.Close();
            };

            if ( column == "ywxx_ycd" )
            {
                dw_mx.SetItem( 1, 'ycddm', code );       
                dw_mx.SetItem( 1, 'ycd', cname );
                requestor.Close();
            };
            

            if (column == "zzxfgb") {
                dw_mx.SetItem(1, 'zzxfgb', code);
                dw_mx.SetItem(1, 'zzxfgbmc', ename);
                requestor.Close();
            };

            if (column == "country") {
                dw_mx.SetItem(1, 'country', code);
                requestor.Close();
            };
            if (column == "ycd") {
                var pm = dw_mx2.GetItemString(1, "spmc_yw");

                var dqdm_old = dw_mx.GetItemString(1, 'dqdm');
                var ysfs = dw_mx.GetItemString(1, "ysfs");

                if (ename == 'JAPAN') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'THAILAND') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'MALAYSIA') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'TAIWAN') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'BELGIUM') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'VIETNAM') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NETHERLANDS' && pm == 'FRESH PEAR') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'URUGUAY' && pm == 'FRESH MANDARIN') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'URUGUAY' && pm == 'FRESH ORANGE') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NEW ZEALAND' && pm == 'FRESH CHERRY') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NEW ZEALAND' && pm == 'FRESH PERSIMMON') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NEW ZEALAND' && pm == 'FRESH KIWIFRUIT') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "N");
                }




                if (dqdm_old == "" || dqdm_old == null || dqdm == dqdm_old || ysfs == "空运") {
                    dw_mx.SetItem(1, 'ycd', ename);
                    dw_mx.SetItem(1, 'ycddm', hgcode);
                    dw_mx.SetItem(1, 'qiyunguo', ename);
                    dw_mx.SetItem(1, 'qiyunguodm', hgcode);
                    dw_mx.SetItem(1, 'yzbh', yzbh);
                    dw_mx.SetItem(1, 'dqdm', dqdm);
                    dw_mx.SetItem(1, 'ctr_area2', ctr_area2);
                    dw_mx.SetItem(1, 'dztxts', dztxts);
                    var yrjka = dw_mx.GetItemString(1, "rjka");
                    if (yrjka == null || yrjka == "") {
                        dw_mx.SetItem(1, 'rjka', rjka);
                    }
                    for (row = dw_mx1.RowCount(); row > 0; row--) {
                        dw_mx1.DeleteRow(row);
                    };
                    requestor.Close();
                };
            };



            if (column == "ycd_ky") {
                var dqdm_old = dw_mx.GetItemString(1, 'dqdm');
                var ysfs = dw_mx.GetItemString(1, "ysfs");

                var pm = dw_mx2.GetItemString(1, "spmc_yw");
                
                if (ename == 'JAPAN') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'THAILAND') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'MALAYSIA') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'TAIWAN') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'BELGIUM') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'VIETNAM') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NETHERLANDS' && pm == 'FRESH PEAR') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'URUGUAY' && pm == 'FRESH MANDARIN') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'URUGUAY' && pm == 'FRESH ORANGE') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NEW ZEALAND' && pm == 'FRESH CHERRY') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NEW ZEALAND' && pm == 'FRESH PERSIMMON') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else if (ename == 'NEW ZEALAND' && pm == 'FRESH KIWIFRUIT') {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "Y");
                } else {
                    dw_mx.SetItem(1, "rjhwjyjyzm", "N");
                }

                if (dqdm_old == "" || dqdm_old == null || dqdm == dqdm_old || ysfs == "空运") {
                    dw_mx.SetItem(1, 'ycd', ename);
                    dw_mx.SetItem(1, 'ycddm', hgcode);
                    dw_mx.SetItem(1, 'qiyunguo', ename);
                    dw_mx.SetItem(1, 'qiyunguodm', hgcode);
                    dw_mx.SetItem(1, 'yzbh', yzbh);
                    dw_mx.SetItem(1, 'dqdm', dqdm);
                    dw_mx.SetItem(1, 'ctr_area2', ctr_area2);
                    dw_mx.SetItem(1, 'dztxts', dztxts);
                    var yrjka = dw_mx.GetItemString(1, "rjka");
                    if (yrjka == null || yrjka == "") {
                        dw_mx.SetItem(1, 'rjka', rjka);
                    }
                    for (row = dw_mx1.RowCount(); row > 0; row--) {
                        dw_mx1.DeleteRow(row);
                    };
                    requestor.Close();
                };
            };



            if (column == "wldw_ycd") {
                dw_mx.SetItem(RowData, 'ycd', ename);
                requestor.Close();
            };

            if (column == "qiyunguo") {
                dw_mx.SetItem(1, 'qiyunguo', ename);
                dw_mx.SetItem(1, 'qiyunguodm', hgcode);
                requestor.Close();
            };

            if (column == "ycdjsje") {
                dw_mx.SetItem(RowData, 'ycd', ename);
                requestor.Close();
            };

            if (column == "zhsflb") {
                dw_mx.SetItem(RowData, 'fllb', ename);
                requestor.Close();
            };

            if (column == "zhsflb_gjsp") {
                dw_mx.SetItem(RowData, 'country', ename);
                requestor.Close();
            };



            if (column == "cpxxk_country") {
                dw_mx.SetItem(1, 'ctr_code', code);
                dw_mx.SetItem(1, 'ctr_cname', cname);
                dw_mx.SetItem(1, 'ctr_ename', ename);
                requestor.Close();
            };

            if (column == "Ssgdmkhxxtx_gj") {
                dw_mx.SetItem(RowData, 'gj', hgcode);
                dw_mx.SetItem(RowData, 'gjmc', cname);
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
                dw_1.SetFilter("( Upper(ctr_ename) like '%" + text.toUpperCase() + "%') or ( Lower(ctr_ename) like '%" + text.toLowerCase() + "%') or ( Lower(pym) like '%" + text + "%')  or ( Upper(pym) like '%" + text + "%') or ( ctr_cname like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();               
            }
            dw_1.SetRedraw(true);
        }

    
}