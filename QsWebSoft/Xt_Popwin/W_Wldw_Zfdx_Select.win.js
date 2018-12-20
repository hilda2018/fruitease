///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_Zfdx_Select() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var cbx_xsqb= new CheckBox( requestor );

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
		 if(cbx_xsqb == null ) cbx_xsqb= new CheckBox( requestor );
		 cbx_xsqb.Attach( win.Control( "cbx_xsqb") ); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.OK); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.OK); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

		 if(typeof(self.cbx_xsqb_clicked)=="function") 
			 win.AttachEvent("cbx_xsqb","Clicked",self.cbx_xsqb_clicked); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_1.Detach(); sle_1=null; 
		 cbx_xsqb.Detach(); cbx_xsqb=null; 
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
    var RowData = null;
    this.SetRow = function (parm) {
        RowData = parm;
    }



    this.OK = function () {
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要添加的往来单位信息!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var code = dw_1.GetItemString(row, 'yw_khbm');
        var cname = dw_1.GetItemString(row, 'khmc');
        var ename = dw_1.GetItemString(row, 'khmc_yw');
        var khjc = dw_1.GetItemString(row, 'khjc')
        var addr = dw_1.GetItemString(row, 'address');
        var lxr = dw_1.GetItemString(row, 'lxr');
        var tel = dw_1.GetItemString(row, 'tel');
        var tzr = dw_1.GetItemString(row, 'tzr');
        var shr = dw_1.GetItemString(row, 'shr');
        var khyh = dw_1.GetItemString(row, 'khyh');
        var yhzh = dw_1.GetItemString(row, 'yhzh');
        var fax = dw_1.GetItemString(row, 'fax');
        var email = dw_1.GetItemString(row, 'email');
        var pym = dw_1.GetItemString(row, 'pym');
        var mtdm = dw_1.GetItemString(row, "mtdm")
        var cd = dw_1.GetItemString(row, "cd")
        if (dw_mx != null) {
            if (column == "hdfyhycqf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "hdfyhxdcf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "hdfyhdf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "wlgzsjyf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "hdfymtthf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "hdfyhyfxgsfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "hdfyjydfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "hdfyjyfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfybhxjhxxxfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfybgbjfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfyhgcyfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfyqt_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfykykgthfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfykycdfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfyscfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "jsdwqr_zfdx") {
                dw_mx.SetItem(RowData, 'jsdwbm', code);
                dw_mx.SetItem(RowData, 'jsdwmc', cname);
                dw_mx.SetItem(RowData, 'jsdwjc', khjc);
                dw_mx.SetItem(RowData, 'jsdwpym', pym);
                var jsbm = "";
                dw_mx.SetItem(RowData, 'jsbm', jsbm);
              
              
                var sfyjsbm = QsWebSoft.PubMethod.ReadWldwJsbm(code).value;
                if (sfyjsbm > 0) {
                    dw_mx.SetItem(RowData, "sfyjsbm", "Y")
                }
                else {
                    dw_mx.SetItem(RowData, "sfyjsbm", "N")
                }

                requestor.Close();
            };

            if (column == "hdfysjxzf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };

            if (column == "hdfygjyfzf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };
            if (column == "hdfysjzf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                requestor.Close();
            };


            if (column == "wlgz_fywfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                dw_mx.SetItem(RowData, 'zfdxlx', cd);
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
                dw_1.SetFilter("( Upper(khmc) like '%" + text + "%') or ( Lower(khmc) like '%" + text + "%') or ( Upper(khmc_yw) like '%" + text + "%') or ( Lower(khmc_yw) like '%" + text + "%') or ( Upper(pym) like '%" + text + "%')  or ( Lower(sh) like '%" + text + "%') or ( Upper(sh) like '%" + text + "%') or ( Lower(pym) like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();
            }
            dw_1.SetRedraw(true);
        }

        //#region 增加
        var iw_WldwAdd = null;
        this.Add = function () {
            var yw_khbm = null;
            
            if (iw_WldwAdd == null)
                iw_WldwAdd = new W_WldwAdd_New();
            iw_WldwAdd.SetListDataWindow(dw_1);
            iw_WldwAdd.SetData("yw_khbm");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_WldwAdd_New", iw_WldwAdd);
           
            self.Retrieve();

        }
        //#endregion

        this.cbx_xsqb_clicked = function () {
            var ywbh = requestor.GetParm("ywbh")
            var xsqb = "N"
            if (cbx_xsqb.GetChecked() == true) {
                xsqb = "Y"
            } else {
                xsqb = "N"
            }
             dw_1.Retrieve(ywbh, xsqb);
            dw_1.Modify("DataWindow.Readonly=yes");
        };

        //#region 刷新
        this.Retrieve = function () {
            var userid = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var khlx = requestor.GetParm("khlx");
            var fgflx = requestor.GetParm("fgflx");
            var ywbh = requestor.GetParm("ywbh")
            var xsqb = "N"
            if (cbx_xsqb.GetChecked() == true) {
                xsqb = "Y"
            } else {
                xsqb = "N"
            }
            dw_1.Retrieve(ywbh, xsqb);
            dw_1.Modify("DataWindow.Readonly=yes");

        }
        //#endregion

        //#region 获取字符串长度
        function len(s) {
            var l = 0;
            var a = s.split("");
            for (var i = 0; i < a.length; i++) {
                if (a[i].charCodeAt(0) < 299)
                { l++; }
                else { l += 2; }
            }
            return l;
        }

        //#endregion

}