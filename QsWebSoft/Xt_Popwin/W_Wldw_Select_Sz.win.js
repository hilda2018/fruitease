///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_Select_Sz() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_2= new DataWindow( requestor );
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var ddlb_sz_flag= new DropDownListBox( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_2 == null ) dw_2= new DataWindow( requestor );
		 dw_2.Attach( win.Control( "dw_2") ); 
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(ddlb_sz_flag == null ) ddlb_sz_flag= new DropDownListBox( requestor );
		 ddlb_sz_flag.Attach( win.Control( "ddlb_sz_flag") ); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.OK); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("ddlb_sz_flag","SelectionChanged",self.Retrieve); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.OK); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

		 if(typeof(self.Add)=="function") 
			 win.AttachEvent("btn_Add","Clicked",self.Add); 

		 if(typeof(self.Set_Sz)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.Set_Sz); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_2.Detach(); dw_2=null; 
		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 sle_1.Detach(); sle_1=null; 
		 ddlb_sz_flag.Detach(); ddlb_sz_flag=null; 
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
    var RowData = 1;
    this.SetRow = function (parm) {
        RowData = parm;
    }

    var dw_mx_gnkh = null;

    this.SetDataWindow_gnkh = function (dw) {
        dw_mx_gnkh = dw;
    }

    var dw_mx_lxr = null;

    this.SetDataWindow_lxr = function (dw) {
        dw_mx_lxr = dw;
    };


    this.Set_Sz = function ()
    {
        var row = dw_1.GetRow();
        if ( row <= 0 )
        {
            requestor.MessageBox( "提示", "请选择要添加的往来单位信息!", ICON.StopSign );
            return;
        };
        var yw_khbm = dw_1.GetItemString( row, "yw_khbm" );
       var num =  QsWebSoft.PubMethod.Wldw_SetSz( yw_khbm );

    };

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
        var mtdm = dw_1.GetItemString(row, "mtdm");
        var yhmc = dw_1.GetItemString(row, "yhmc");
        var zh = dw_1.GetItemString(row, "zh");
        var lxr = dw_1.GetItemString(row, "lxr");
        var lxr_mobile = dw_1.GetItemString(row, "lxr_mobile");
        var lxdh = dw_1.GetItemString(row, "lxdh");
        var qyhgbm = dw_1.GetItemString(row, "qyhgbm");
        var gqdm = dw_1.GetItemString(row, "gqdm");
        var sjjgdm = dw_1.GetItemString(row, "sjjgdm");
        var rjka = dw_1.GetItemString(row, "rjka");
        var hwcfd = dw_1.GetItemString(row, "hwcfd");
        var sfgnwl_lxr = dw_1.GetItemString(row, "sfgnwl_lxr");
        var sfgnwl_lxdh = dw_1.GetItemString(row, "sfgnwl_lxdh");
        var hymr_shdz = dw_1.GetItemString(row, "hymr_shdz");
        var sfkygnwl_lxr = dw_1.GetItemString(row, "sfkygnwl_lxr");
        var sfkygnwl_lxdh = dw_1.GetItemString(row, "sfkygnwl_lxdh");
        var kymr_shdz = dw_1.GetItemString(row, "kymr_shdz");
        var cd = dw_1.GetItemString( row, "cd" );
        var ycddm = dw_1.GetItemString( row, "country" );
        var gjmc = dw_1.GetItemString( row, "gjmc" );
        var tymc = dw_1.GetItemString(row, "tymc");
        var mrjydbm = dw_1.GetItemString(row, "mrjydbm");
        var mrjyd = dw_1.GetItemString(row, "mrjyd");
        var mrjydjc = dw_1.GetItemString(row, "mrjydjc");
        var mrjydpym = dw_1.GetItemString(row, "mrjydpym");
        var ssbm = dw_1.GetItemString( row, "ssbm" );
        if (dw_mx != null) {
            if (column == "khbm") {
                dw_mx.SetItem(1, 'khbm', code);
                dw_mx.SetItem(1, 'khmc', cname);
                if (shr == null || len(shr) == 0) {
                    dw_mx.SetItem(1, 'shr', cname + '\n' + addr);
                }
                else {
                    dw_mx.SetItem(1, 'shr', shr);
                }
                if (tzr == null || len(tzr) == 0) {
                    dw_mx.SetItem(1, 'tzr', cname + '\n' + addr);
                }
                else {
                    dw_mx.SetItem(1, 'tzr', tzr);
                }
                dw_mx.SetItem(1, 'ttr', cname + '\n' + addr);
                dw_mx.SetItem(1, 'fkr', cname + '\n' + addr);
                requestor.Close();
            };

            if (column == "shr") {
                dw_mx.SetItem(1, 'shr', cname + '\n' + addr);
                requestor.Close();
            };

            if (column == "tzr") {
                dw_mx.SetItem(1, 'tzr', cname + '\n' + addr);
                requestor.Close();
            };

            if (column == "ttr") {
                dw_mx.SetItem(1, 'ttr', cname + '\n' + addr);
                requestor.Close();
            };

            if (column == "fkr") {
                dw_mx.SetItem(1, 'fkr', cname + '\n' + addr);
                requestor.Close();
            };

            if (column == "zjsmc") {
                dw_mx.SetItem(1, 'zjsbm', code);
                dw_mx.SetItem(1, 'zjsmc', cname);
                dw_mx.SetItem(1, 'zjsdz', addr);
                requestor.Close();
            };
            if (column == "zdhd") {
                dw_mx.SetItem(1, 'zdhd', code);
                dw_mx.SetItem(1, 'hdgs', code);
                dw_mx.SetItem(1, 'hdgs_lxr', lxr);
                dw_mx.SetItem(1, 'hdgs_lxdh', tel);
                requestor.Close();
            };
            if (column == "hdgs") {
                dw_mx.SetItem(1, 'hdgs', code);
                dw_mx.SetItem(1, 'hdgs_lxr', lxr);
                dw_mx.SetItem(1, 'hdgs_lxdh', tel);
                requestor.Close();
            };

            if (column == "bghkhbm") {
                dw_mx.SetItem(1, 'bghkhbm', code);
                dw_mx.SetItem(1, 'bghmc', cname);
                requestor.Close();
            };

            if (column == "skdwbh") {
                dw_mx.SetItem(1, 'skdwbm', code);
                dw_mx.SetItem(1, 'skdwmc', cname);
                dw_mx.SetItem(1, 'skdwkhyh', khyh);
                dw_mx.SetItem(1, 'skdwyhzh', yhzh);
                requestor.Close();
            };

            if (column == "kpdw") {
                dw_mx.SetItem(1, 'kpdwbm', code);
                dw_mx.SetItem(1, 'kpdwmc', cname);
                dw_mx.SetItem(1, 'kpdwlxr', lxr);
                dw_mx.SetItem(1, 'kpdwtel', tel);
                dw_mx.SetItem(1, 'kpdwfax', fax);
                dw_mx.SetItem(1, 'kpdwemail', email);
                requestor.Close();
            };

            if (column == "jhdw") {
                dw_mx.SetItem(1, 'jhdwbm', code);
                dw_mx.SetItem(1, 'jhdwmc', cname);
                requestor.Close();
            };

            if (column == "hddz_hdgs") {
                dw_mx.SetItem(1, 'hdgsbm', code);
                dw_mx.SetItem(1, 'hdgsmc', cname);
                dw_mx.SetItem(1, 'hdgsjc', khjc);
                dw_mx.SetItem(1, 'hdgspym', pym);
                requestor.Close();
            };


            if (column == "hddz_bggs") {
                dw_mx.SetItem(1, 'bggsbm', code);
                dw_mx.SetItem(1, 'bggsmc', cname);
                dw_mx.SetItem(1, 'bggsjc', khjc);
                dw_mx.SetItem(1, 'bggspym', pym);
                dw_mx.SetItem(1, 'sbdwdm', qyhgbm);
                requestor.Close();
            };

            if (column == "hddz_jdr") {
                dw_mx.SetItem(1, 'jdrbm', code);
                dw_mx.SetItem(1, 'jdrmc', cname);
                dw_mx.SetItem(1, 'jdrjc', khjc);
                dw_mx.SetItem(1, 'jdrpym', pym);
                requestor.Close();
            };

            if (column == "jdrys") {

                dw_mx.SetItem(RowData, 'jdrbm', code);
                dw_mx.SetItem(RowData, 'jdrmc', cname);

                requestor.Close();
            };

            if (column == "cskz") {

                dw_mx.SetItem(RowData, 'jdrbm', code);
                dw_mx.SetItem(RowData, 'jdrmc', cname);
                dw_mx.SetItem(RowData, 'jdrjc', khjc);
                dw_mx.SetItem(RowData, 'jdrpym', pym);

                requestor.Close();
            };

            if (column == "hddz_czd_jdr") {
                dw_mx.SetItem(1, 'jdrbm', code);
                dw_mx.SetItem(1, 'jdrmc', cname);
                dw_mx.SetItem(1, 'jdrjc', khjc);
                dw_mx.SetItem(1, 'jdrpym', pym);
                if (requestor.GetParm("czd_jsdwbm") != "" && requestor.GetParm("czd_jsdwbm") != null) {

                    dw_2.Retrieve(code, requestor.GetParm("czd_jsdwbm"));
                    dw_mx.SetItem(1, "dzmx", dw_2.GetItemString(1, "dzmx"));
                    dw_mx.SetItem(1, "sffbm", dw_2.GetItemString(1, "sffbm"));
                    if (dw_2.RowCount() > 1) {

                    } else {
                        dw_mx.SetItem(1, "zdfl", dw_2.GetItemString(1, "zdfl"));
                    }
                }
                requestor.Close();
            };

            if (column == "hddz_czd_jsdw") {
                dw_mx.SetItem(1, 'jsdwbm', code);
                dw_mx.SetItem(1, 'jsdwmc', cname);
                dw_mx.SetItem(1, 'jsdwjc', khjc);
                dw_mx.SetItem(1, 'jsdwpym', pym);
                if (requestor.GetParm("czd_jdrbm") != "" && requestor.GetParm("czd_jdrbm") != null) {
                    dw_2.Retrieve(requestor.GetParm("czd_jdrbm"), code);
                    dw_mx.SetItem(1, "dzmx", dw_2.GetItemString(1, "dzmx"));
                    dw_mx.SetItem(1, "sffbm", dw_2.GetItemString(1, "sffbm"));
                    if (dw_2.RowCount() > 1) {

                    } else {
                        dw_mx.SetItem(1, "zdfl", dw_2.GetItemString(1, "zdfl"));
                    }
                }
                requestor.Close();
            };

            if (column == "hddz_wlgsjc") {
                dw_mx.SetItem(1, 'wlgsbm', code);
                dw_mx.SetItem(1, 'wlgsmc', cname);
                dw_mx.SetItem(1, 'wlgsjc', khjc);
                dw_mx.SetItem(1, 'wlgspym', pym);
                requestor.Close();
            };

            if (column == "yw_hddz_wlgsjc") {
                dw_mx.SetItem(RowData, 'wlgsbm', code);
                dw_mx.SetItem(RowData, 'wlgsmc', cname);
                dw_mx.SetItem(RowData, 'wlgsjc', khjc);
                dw_mx.SetItem(RowData, 'wlgspym', pym);
                requestor.Close();
            };


            if (column == "hddz_hdrjc") {
                dw_mx.SetItem(1, 'hdrbm', code);
                dw_mx.SetItem(1, 'hdrmc', cname);
                dw_mx.SetItem(1, 'hdrjc', khjc);
                dw_mx.SetItem(1, 'hdrpym', pym);
                requestor.Close();
            };

            if (column == "wlgzsjfkd_sqrgs") {
                dw_mx.SetItem(1, 'sqrgsbm', code);
                dw_mx.SetItem(1, 'sqrgsmc', cname);
                dw_mx.SetItem(1, 'sqrgsjc', khjc);
                dw_mx.SetItem(1, 'sqrgspym', pym);
                requestor.Close();
            };

            if (column == "hddz_bjgs") {
                dw_mx.SetItem(1, 'bjgsbm', code);
                dw_mx.SetItem(1, 'bjgsmc', cname);
                dw_mx.SetItem(1, 'bjgsjc', khjc);
                dw_mx.SetItem(1, 'bjgspym', pym);
                dw_mx.SetItem(1, 'bjgssjjgdm', sjjgdm);

                requestor.Close();
            };
            if (column == "W_Wlcjgl") {
                //dw_mx.SetItem(RowData, 'khbm', code);
                dw_mx.SetItem(RowData, 'subordinate_company', cname);
                //dw_mx.SetItem(RowData, 'khjc', khjc);
                //dw_mx.SetItem(RowData, 'khpym', pym);
                requestor.Close();
            }
            if (column == "hddz_kh_dl") {
                dw_mx.SetItem(RowData, 'khbm', code);
                dw_mx.SetItem(RowData, 'khmc', cname);
                dw_mx.SetItem(RowData, 'khjc', khjc);
                dw_mx.SetItem(RowData, 'khpym', pym);
                dw_mx.SetItem(RowData, 'lxr', lxr);
                dw_mx.SetItem(RowData, 'lxdh', lxdh);
                
                dw_mx.SetItem(RowData, 'jydwbm', "admin0003");
                dw_mx.SetItem(RowData, 'jydwmc', "上海欧恒进出口有限公司");
                dw_mx.SetItem(RowData, 'jydwjc', "上海欧恒");
                dw_mx.SetItem(RowData, 'jydwpym', "shohjckyxgs");
                dw_mx.SetItem(RowData, 'jydwdm', "3122269401");
                dw_mx.SetItem(RowData, 'jydwsjjgdm', "3100647614");
                requestor.Close();
            };

            if ( column == "hddz_kh_sz" )
            {
                dw_mx.SetItem( RowData, 'khbm', code );
                dw_mx.SetItem( RowData, 'khmc', cname );
                dw_mx.SetItem( RowData, 'khjc', khjc );
                dw_mx.SetItem( RowData, 'khpym', pym );   
                requestor.Close();
            };

            if (column == "hddz_dzfs_jdr") {
                dw_mx.SetItem(RowData, 'jdrbm', code);
                dw_mx.SetItem(RowData, 'jdrmc', cname);
                dw_mx.SetItem(RowData, 'jdrjc', khjc);
                dw_mx.SetItem(RowData, 'jdrpym', pym);
                requestor.Close();
            };

            if (column == "hddz_dzfs_kh") {
                dw_mx.SetItem(RowData, 'khbm', code);
                dw_mx.SetItem(RowData, 'khmc', cname);
                dw_mx.SetItem(RowData, 'khjc', khjc);
                dw_mx.SetItem(RowData, 'khpym', pym);
                requestor.Close();
            };

            if (column == "hddz_kh_zy") {
                dw_mx.SetItem(RowData, 'khbm', code);
                dw_mx.SetItem(RowData, 'khmc', cname);
                dw_mx.SetItem(RowData, 'khjc', khjc);
                dw_mx.SetItem(RowData, 'khpym', pym);
                dw_mx.SetItem(RowData, 'lxr', lxr);
                dw_mx.SetItem(RowData, 'lxdh', lxdh);

                //                dw_mx.SetItem(RowData, 'shdwbm', code);
                //                dw_mx.SetItem(RowData, 'shdwmc', cname);
                //                dw_mx.SetItem(RowData, 'shdwjc', khjc);
                //                dw_mx.SetItem(RowData, 'shdwpym', pym);
                //                dw_mx.SetItem(RowData, 'shdwdm', qyhgbm);
                dw_mx.SetItem(RowData, 'jydwbm', code);
                dw_mx.SetItem(RowData, 'jydwmc', cname);
                dw_mx.SetItem(RowData, 'jydwjc', khjc);
                dw_mx.SetItem(RowData, 'jydwpym', pym);
                dw_mx.SetItem(RowData, 'jydwdm', qyhgbm);
                dw_mx.SetItem(RowData, 'jydwdm', sjjgdm);
                dw_mx.SetItem(RowData, 'jydwdm', qyhgbm);
                dw_mx.SetItem(RowData, 'jydwsjjgdm', sjjgdm);
                requestor.Close();
            };

            if (column == "hddz_sjshr") {
                dw_mx.SetItem(RowData, 'sjshrbm', code);
                dw_mx.SetItem(RowData, 'sjshrmc', cname);
                dw_mx.SetItem(RowData, 'lxr', lxr);
                dw_mx.SetItem(RowData, 'lxdh', lxdh);
                requestor.Close();
            };

            if (column == "hddz_sjshr_hy") {
                dw_mx.SetItem(RowData, 'sjshrbm', code);
                dw_mx.SetItem(RowData, 'sjshrmc', cname);
                dw_mx.SetItem(RowData, 'lxr', sfgnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh', sfgnwl_lxdh);
                //                dw_mx.SetItem(RowData, 'shdz', hymr_shdz);
                requestor.Close();
            };

            if (column == "hy_thwljh_sjshrmc") {
                dw_mx.SetItem(RowData, 'sjshrbm', code);
                dw_mx.SetItem(RowData, 'sjshrmc', cname);
                dw_mx.SetItem(RowData, 'sjshrlxr', sfgnwl_lxr);
                dw_mx.SetItem(RowData, 'sjshrlxdh', sfgnwl_lxdh);

                var ifModify = dw_mx.GetItemNumber(RowData, "ifmodify");
                if (ifModify > 0) {
                    ifModify += 1;
                }
                dw_mx.SetItem(RowData, "ifmodify", ifModify);
                //                dw_mx.SetItem(RowData, 'shdz', hymr_shdz);
                requestor.Close();
            };

            if ( column == "ywxx_sxkh" )
            {
                dw_mx.SetItem( RowData, 'xskhbm', code );
                dw_mx.SetItem( RowData, 'xskhmc', cname );
                dw_mx.SetItem( RowData, 'xskhjc', khjc );
                dw_mx.SetItem( RowData, 'xskhpym', pym );
                requestor.Close();
            };

            if (column == "hddz_sjshr_ky") {
                dw_mx.SetItem(RowData, 'sjshrbm', code);
                dw_mx.SetItem(RowData, 'sjshrmc', cname);
                dw_mx.SetItem(RowData, 'lxr', sfkygnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh', sfkygnwl_lxdh);
                //                dw_mx.SetItem(RowData, 'shdz', kymr_shdz);
                requestor.Close();
            };


            if (column == "hddz_sjshr2_hy") {
                dw_mx.SetItem(RowData, 'jschfscwld_shrbm', code);
                dw_mx.SetItem(RowData, 'jschfscwld_shrmc', cname);
                dw_mx.SetItem(RowData, 'lxr2', sfgnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh2', sfgnwl_lxdh);

                requestor.Close();
            };

            if (column == "hddz_sjshr2_ky") {
                dw_mx.SetItem(RowData, 'jschfscwld_shrbm', code);
                dw_mx.SetItem(RowData, 'jschfscwld_shrmc', cname);
                dw_mx.SetItem(RowData, 'lxr', sfkygnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh', sfkygnwl_lxdh);

                requestor.Close();
            };

            if (column == "hddz_sjshr3_hy") {
                dw_mx.SetItem(RowData, 'fscwld3_shrbm', code);
                dw_mx.SetItem(RowData, 'fscwld3_shrmc', cname);
                dw_mx.SetItem(RowData, 'lxr3', sfgnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh3', sfgnwl_lxdh);

                requestor.Close();
            };

            if (column == "hddz_sjshr3_ky") {
                dw_mx.SetItem(RowData, 'fscwld3_shrbm', code);
                dw_mx.SetItem(RowData, 'fscwld3_shrmc', cname);
                dw_mx.SetItem(RowData, 'lxr3', sfkygnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh3', sfkygnwl_lxdh);

                requestor.Close();


            };

            if (column == "hddz_sjshr4_hy") {
                dw_mx.SetItem(RowData, 'fscwld4_shrbm', code);
                dw_mx.SetItem(RowData, 'fscwld4_shrmc', cname);
                dw_mx.SetItem(RowData, 'lxr4', sfgnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh4', sfgnwl_lxdh);

                requestor.Close();
            };

            if (column == "hddz_sjshr4_ky") {
                dw_mx.SetItem(RowData, 'fscwld4_shrbm', code);
                dw_mx.SetItem(RowData, 'fscwld4_shrmc', cname);
                dw_mx.SetItem(RowData, 'lxr4', sfkygnwl_lxr);
                dw_mx.SetItem(RowData, 'lxdh4', sfkygnwl_lxdh);

                requestor.Close();

            };


            if (column == "wlgz_sjshr1") {
                dw_mx.SetItem(RowData, 'zjfscwld_shrbm', code);
                dw_mx.SetItem(RowData, 'zjfscwld_shrmc', cname);
                requestor.Close();
            };

            if (column == "wlgz_sjshr2") {
                dw_mx.SetItem(RowData, 'jschfscwld_shrbm', code);
                dw_mx.SetItem(RowData, 'jschfscwld_shrmc', cname);
                requestor.Close();
            };
            if (column == "wlgz_sjshr3") {
                dw_mx.SetItem(RowData, 'fscwld3_shrbm', code);
                dw_mx.SetItem(RowData, 'fscwld3_shrmc', cname);
                requestor.Close();
            };
            if (column == "wlgz_sjshr4") {
                dw_mx.SetItem(RowData, 'fscwld4_shrbm', code);
                dw_mx.SetItem(RowData, 'fscwld4_shrmc', cname);
                requestor.Close();
            };


            if (column == "hddz_shdw_dl") {

                dw_mx.SetItem(1, 'shdwbm', code);
                dw_mx.SetItem(1, 'shdwmc', cname);
                dw_mx.SetItem(1, 'shdwjc', khjc);
                dw_mx.SetItem(1, 'shdwpym', pym);
                dw_mx.SetItem(1, 'shdwdm', qyhgbm);
                dw_mx.SetItem(1, 'jydwbm', "admin0003");
                dw_mx.SetItem(1, 'jydwmc', "上海欧恒进出口有限公司");
                dw_mx.SetItem(1, 'jydwjc', "上海欧恒");
                dw_mx.SetItem(1, 'jydwpym', "shohjckyxgs");
                dw_mx.SetItem(1, 'jydwdm', "3122269401");
                dw_mx.SetItem(1, 'jydwsjjgdm', "3100910593");
                requestor.Close();
            };
            if (column == "hddz_shdw_zy") {

                dw_mx.SetItem(1, 'shdwbm', code);
                dw_mx.SetItem(1, 'shdwmc', cname);
                dw_mx.SetItem(1, 'shdwjc', khjc);
                dw_mx.SetItem(1, 'shdwpym', pym);
                dw_mx.SetItem(1, 'shdwdm', qyhgbm);
                //                dw_mx.SetItem(1, 'jydwbm', code);
                //                dw_mx.SetItem(1, 'jydwmc', cname);
                //                dw_mx.SetItem(1, 'jydwjc', khjc);
                //                dw_mx.SetItem(1, 'jydwpym', pym);
                //                dw_mx.SetItem(1, 'jydwdm', qyhgbm);
                requestor.Close();
            };

            if (column == "hddz_tzr") {
                dw_mx.SetItem(1, 'tzrbm', code);
                dw_mx.SetItem(1, 'tzrmc', ename);
                dw_mx.SetItem(1, 'tzrjc', khjc);
                dw_mx.SetItem(1, 'tzrpym', pym);

                requestor.Close();
            };



            if (column == "hddz_jydw") {
                dw_mx.SetItem(1, 'jydwbm', code);
                dw_mx.SetItem(1, 'jydwmc', cname);
                dw_mx.SetItem(1, 'jydwjc', khjc);
                dw_mx.SetItem(1, 'jydwpym', pym);
                dw_mx.SetItem(1, 'jydwdm', qyhgbm);
                dw_mx.SetItem(1, 'jydwsjjgdm', sjjgdm);
                requestor.Close();
            };

            if (column == "hddz_bghg") {
                dw_mx.SetItem(1, 'bghgbm', code);
                dw_mx.SetItem(1, 'bghg', cname);
                dw_mx.SetItem(1, 'bghgjc', khjc);
                dw_mx.SetItem(1, 'bghgpym', pym);
                //                dw_mx.SetItem(1, 'sbdwdm', qyhgbm);
                requestor.Close();
            };

            if (column == "hddz_jyj") {
                dw_mx.SetItem(1, 'jyjbm', code);
                dw_mx.SetItem(1, 'jyjmc', cname);
                dw_mx.SetItem(1, 'jyjjc', khjc);
                dw_mx.SetItem(1, 'jyjpym', pym);
                dw_mx.SetItem(1, 'jydbm', mrjydbm);
                dw_mx.SetItem(1, 'jydmc', mrjyd);
                dw_mx.SetItem(1, 'jydjc', mrjydjc);
                dw_mx.SetItem(1, 'jydpym', mrjydpym);
                dw_mx.SetItem(1, 'jyjsjjgdm', sjjgdm);
                dw_mx.SetItem(1, 'hwcfd', hwcfd);

                if (khjc == "上海洋山局小洋山办事处") {
                    dw_mx.SetItem(1, 'qgld', "T");
                } else if (khjc == "洋山检疫局") {
                    dw_mx.SetItem(1, 'qgld', "G");
                } else {
                    dw_mx.SetItem(1, 'qgld', "");
                }

                requestor.Close();
            };


            if (column == "hddz_gwgys") {
                dw_mx.SetItem(1, 'gwgysbm', code);
                dw_mx.SetItem(1, 'gwgysmc', ename);
                dw_mx.SetItem(1, 'gwgysjc', khjc);
                dw_mx.SetItem(1, 'gwgyspym', pym);
                dw_mx.SetItem(1, 'zjsbm', code);
                dw_mx.SetItem(1, 'zjsmc', ename);
                dw_mx.SetItem(1, 'zjsjc', khjc);
                dw_mx.SetItem( 1, 'zjspym', pym );
                dw_mx.SetItem( 1, 'ycddm', ycddm );  
                dw_mx.SetItem( 1, 'ycd', gjmc );       
                requestor.Close();
            };

            if (column == "hddz_cdgs") {
                dw_mx.SetItem(RowData, 'cdgsbm', code);
                dw_mx.SetItem(RowData, 'cdgs', cname);
                dw_mx.SetItem(RowData, 'cdgsjc', khjc);
                dw_mx.SetItem(RowData, 'cdgspym', pym);
                requestor.Close();
            };

            if (column == "cdgl_cdgs") {
                for (var i = 1; i <= dw_mx.RowCount(); i++) {
                    if (dw_mx.GetItemString(i, "xz") == "Y") {
                        dw_mx.SetItem(i, 'cdgsbm', code);
                        dw_mx.SetItem(i, 'cdgs', cname);
                        dw_mx.SetItem(i, 'cdgsjc', khjc);
                        dw_mx.SetItem(i, 'cdgspym', pym);
                    }
                }
                requestor.Close();
            };

            if (column == "hddzlist_cdgs") {
                dw_mx.SetItem(RowData, 'cdgsbm', code);
                dw_mx.SetItem(RowData, 'cdgs', cname);
                dw_mx.SetItem(RowData, 'cdgsjc', khjc);
                dw_mx.SetItem(RowData, 'cdgspym', pym);
                requestor.Close();
            };

            if (column == "hddz_cyr") {
                dw_mx.SetItem(RowData, 'cyrbm', code);
                dw_mx.SetItem(RowData, 'cyr', cname);
                dw_mx.SetItem(RowData, 'cyrjc', khjc);
                dw_mx.SetItem(RowData, 'cyrpym', pym);
                requestor.Close();
            };

            if (column == "hddz_yf_yfcdr") {
                dw_mx.SetItem(RowData, 'yfcdrbm', code);
                dw_mx.SetItem(RowData, 'yfcdr', cname);
                dw_mx.SetItem(RowData, 'yfcdrjc', khjc);
                dw_mx.SetItem(RowData, 'yfcdrpym', pym);
                requestor.Close();
            };

            if (column == "hddz_yf_jsdw") {
                dw_mx.SetItem(RowData, 'jsdwbm', code);
                dw_mx.SetItem(RowData, 'jsdwmc', cname);
                dw_mx.SetItem(RowData, 'jsdwjc', khjc);
                dw_mx.SetItem(RowData, 'jsdwpym', pym);
                requestor.Close();
            };

            if (column == "hddz_jsdw") {
                dw_mx.SetItem(RowData, 'jsdwbm', code);
                dw_mx.SetItem(RowData, 'jsdwmc', cname);
                dw_mx.SetItem(RowData, 'jsdwjc', khjc);
                dw_mx.SetItem(RowData, 'jsdwpym', pym);
                requestor.Close();
            };

            if (column == "hddz_bzj_bzjzfr") {
                dw_mx.SetItem(RowData, 'bzjzfrbm', code);
                dw_mx.SetItem(RowData, 'bzjzfr', cname);
                dw_mx.SetItem(RowData, 'bzjzfrjc', khjc);
                dw_mx.SetItem(RowData, 'bzjzfrpym', pym);
                requestor.Close();
            };

            if (column == "hddz_fx_hgcyd") {
                dw_mx.SetItem(RowData, 'cydbm', code);
                dw_mx.SetItem(RowData, 'cyd', cname);
                dw_mx.SetItem(RowData, 'cydjc', khjc);
                dw_mx.SetItem(RowData, 'cydpym', pym);
                requestor.Close();
            };

            if (column == "thwljh_hgcyd") {
                dw_mx.SetItem(RowData, 'yw_hddz_cydbm', code);
                dw_mx.SetItem(RowData, 'yw_hddz_cyd', cname);
                dw_mx.SetItem(RowData, 'yw_hddz_cydjc', khjc);
                dw_mx.SetItem(RowData, 'yw_hddz_cydpym', pym);

                requestor.Close();
            };
            if (column == "hddz_xhgqQd") {
                dw_mx.SetItem(RowData, 'qidian', cname);
                requestor.Close();
            }

            if ( column == "ywxx_mtxx" )
            {
                dw_mx.SetItem( RowData, 'mtxx', cname );
                dw_mx.SetItem( RowData, 'ssbm', ssbm );    
                requestor.Close();
            }

            if (column == "hddz_xhgq") {
                dw_mx.SetItem(1, 'xhgqbm', code);
                dw_mx.SetItem(1, 'xhgq', cname);
                dw_mx.SetItem(1, 'xhgqjc', khjc);
                dw_mx.SetItem(1, 'xhgqpym', pym);
                dw_mx.SetItem(1, 'mtdm', mtdm);
                dw_mx.SetItem(1, 'jcka', gqdm);
                dw_mx.SetItem(1, 'rjka', rjka);


                if (khjc == "洋三" || khjc == "洋山") {
                    dw_mx.SetItem(1, 'jyjbm', "40010492");
                    dw_mx.SetItem(1, 'jyjmc', "上海洋山局小洋山办事处");
                    dw_mx.SetItem(1, 'jyjjc', "上海洋山局小洋山办事处");
                    dw_mx.SetItem(1, 'jyjpym', "shysjxysbsc");
                    dw_mx.SetItem(1, 'jyjsjjgdm', "311010");
                    dw_mx.SetItem(1, 'qgld', "T");
                }

                requestor.Close();
            };

            if (column == "hddzlist_xhgq") {
                dw_mx.SetItem(RowData, 'xhgqbm', code);
                dw_mx.SetItem(RowData, 'xhgq', cname);
                dw_mx.SetItem(RowData, 'xhgqjc', khjc);
                dw_mx.SetItem(RowData, 'xhgqpym', pym);
                dw_mx.SetItem(RowData, 'mtdm', mtdm);
                dw_mx.SetItem(RowData, 'jcka', gqdm);
                dw_mx.SetItem(RowData, 'rjka', rjka);

                if (khjc == "洋三" || khjc == "洋山") {
                    dw_mx.SetItem(RowData, 'jyjbm', "40010492");
                    dw_mx.SetItem(RowData, 'jyjmc', "上海洋山局小洋山办事处");
                    dw_mx.SetItem(RowData, 'jyjjc', "上海洋山局小洋山办事处");
                    dw_mx.SetItem(RowData, 'jyjpym', "shysjxysbsc");
                    dw_mx.SetItem(RowData, 'jyjsjjgdm', "311010");
                    dw_mx.SetItem(RowData, 'qgld', "T");
                }

                requestor.Close();
            };

            //货代输入界面用
            if (column == "hddz_hygs") {
                dw_mx.SetItem(1, 'hygsbm', code);
                dw_mx.SetItem(1, 'hygsmc', cname);
                dw_mx.SetItem(1, 'hygsjc', khjc);
                dw_mx.SetItem(1, 'hygspym', pym);
                requestor.Close();
            };


            if (column == "dlxy_dlwtf") {
                dw_mx.SetItem(1, 'dlwtf_bm', code);
                dw_mx.SetItem(1, 'dlwtf_mc', cname);
                dw_mx.SetItem(1, 'dlwtf_jc', khjc);
                dw_mx.SetItem(1, 'dlwtf_pym', pym);
                dw_mx.SetItem(1, 'dlwtf_tel', tel);
                dw_mx.SetItem(1, 'dlwtf_fax', fax);
                dw_mx.SetItem(1, 'dlwtf_email', email);
                dw_mx.SetItem(1, 'dlwtf_lxr', lxr);
                requestor.Close();
            };

            if (column == "hddz_sj_sjzfkh") {
                dw_mx.SetItem(RowData, 'sjzfkhbm', code);
                dw_mx.SetItem(RowData, 'jsjzfkhmc', cname);
                dw_mx.SetItem(RowData, 'sjzfkhjc', khjc);
                dw_mx.SetItem(RowData, 'sjzfkhpym', pym);
                requestor.Close();
            };


            if (column == "dlxy_dlstf") {
                dw_mx.SetItem(1, 'dlstf_bm', code);
                dw_mx.SetItem(1, 'dlstf_mc', cname);
                dw_mx.SetItem(1, 'dlstf_jc', khjc);
                dw_mx.SetItem(1, 'dlstf_pym', pym);
                dw_mx.SetItem(1, 'dlstf_tel', tel);
                dw_mx.SetItem(1, 'dlstf_fax', fax);
                dw_mx.SetItem(1, 'dlstf_email', email);
                dw_mx.SetItem(1, 'dlstf_lxr', lxr);
                requestor.Close();
            };

            if (column == "dlxy_dljdr") {
                dw_mx.SetItem(1, 'jdrbm', code);
                dw_mx.SetItem(1, 'jdrmc', cname);
                dw_mx.SetItem(1, 'jdrjc', khjc);
                dw_mx.SetItem(1, 'jdrpym', pym);
                requestor.Close();
            };

            //海运 
            if (column == "hy_jyd") {
                dw_mx.SetItem(1, 'jyd_bm', code);
                dw_mx.SetItem(1, 'jyd_mc', cname);
                dw_mx.SetItem(1, 'jyd_jc', khjc);
                dw_mx.SetItem(1, 'jyd_pym', pym);
                requestor.Close();
            };

            if (column == "scxx") {
                dw_mx.SetItem(row, 'sc_bm', code);
                dw_mx.SetItem(row, 'sc_mc', cname);
                dw_mx.SetItem(row, 'sc_jc', khjc);
                dw_mx.SetItem(row, 'sc_pym', pym);
                requestor.Close();
            };

            if (column == "hy_zjfscwld_shr") {
                dw_mx.SetItem(1, 'zjfscwld_shrbm', code);
                dw_mx.SetItem(1, 'zjfscwld_shrmc', cname);
                requestor.Close();
            };

            if (column == "hy_fscwld3_shr") {
                dw_mx.SetItem(1, 'fscwld3_shrbm', code);
                dw_mx.SetItem(1, 'fscwld3_shrmc', cname);
                requestor.Close();
            };

            if (column == "hy_fscwld4_shr") {
                dw_mx.SetItem(1, 'fscwld4_shrbm', code);
                dw_mx.SetItem(1, 'fscwld4_shrmc', cname);
                requestor.Close();
            };
            if (column == "hy_sc") {
                dw_mx.SetItem(1, 'sc_bm', code);
                dw_mx.SetItem(1, 'sc_mc', cname);
                dw_mx.SetItem(1, 'sc_jc', khjc);
                dw_mx.SetItem(1, 'sc_pym', pym);
                requestor.Close();
            };

            if (column == "hy_jschfscwld_shr") {
                dw_mx.SetItem(1, 'jschfscwld_shrbm', code);
                dw_mx.SetItem(1, 'jschfscwld_shrmc', cname);
                requestor.Close();
            };

            if (column == "hy_dc") {
                dw_mx.SetItem(1, 'fxdcbm', code);
                dw_mx.SetItem(1, 'fxdcmc', cname);
                dw_mx.SetItem(1, 'fxdcjc', khjc);
                dw_mx.SetItem(1, 'fxdcpym', pym);
                requestor.Close();
            };

            if (column == "hyrw_dc") {
                dw_mx.SetItem(1, 'fxdcbm', code);
                dw_mx.SetItem(1, 'fxdcmc', cname);
                dw_mx.SetItem(1, 'fxdcjc', khjc);
                dw_mx.SetItem(1, 'fxdcpym', pym);
                requestor.Close();
            };

            if (column == "cdph_cd") {
                dw_mx.SetItem(1, 'cdbm', code);
                dw_mx.SetItem(1, 'cdmc', cname);
                dw_mx.SetItem(1, 'cdjc', khjc);
                dw_mx.SetItem(1, 'cdpym', pym);
                requestor.Close();
            };

            if (column == "hddz_jy_jyj") {
                dw_mx.SetItem(RowData, 'jyjbm', code);
                dw_mx.SetItem(RowData, 'jyjmc', cname);
                dw_mx.SetItem(RowData, 'jyjjc', khjc);
                dw_mx.SetItem(RowData, 'jyjpym', pym);
                dw_mx.SetItem(RowData, 'jyjsjjgdm', sjjgdm);
                if (hwcfd != "" && hwcfd != null) {
                    dw_mx.SetItem(RowData, 'hwcfd', hwcfd);
                }

                if (khjc == "上海洋山局小洋山办事处") {
                    dw_mx.SetItem(RowData, 'qgld', "T");
                } else if (khjc == "洋山检疫局") {
                    dw_mx.SetItem(RowData, 'qgld', "G");
                } else {
                    dw_mx.SetItem(RowData, 'qgld', "");
                }
                if (dw_mx.GetItemString(RowData, 'jdrbm') == "admin0003") {
                    dw_mx.SetItem(RowData, 'jydbm', mrjydbm);
                    dw_mx.SetItem(RowData, 'jyd', mrjyd);
                    dw_mx.SetItem(RowData, 'jydjc', mrjydjc);
                    dw_mx.SetItem(RowData, 'jydpym', mrjydpym);
                }
                requestor.Close();
            };

            if (column == "hddz_jy_jyd") {

                if (jydwsjjgdm == sjjgdm) {
                    requestor.MessageBox("提示", "您选择的检疫点不是对应检疫局的，请重新选择！");
                    return
                }
                dw_mx.SetItem(RowData, 'jydbm', code);
                dw_mx.SetItem(RowData, 'jyd', cname);
                dw_mx.SetItem(RowData, 'jydjc', khjc);
                dw_mx.SetItem(RowData, 'jydpym', pym);
                dw_mx.SetItem(RowData, 'hwcfd', hwcfd);

                requestor.Close();
            };

            if (column == "wldw_jy_mrjyd") {
                //                if (jydwsjjgdm == sjjgdm) {
                //                    requestor.MessageBox("提示", "您选择的检疫点不是对应检疫局的，请重新选择！");
                //                    return
                //                }
                dw_mx.SetItem(RowData, 'mrjydbm', code);
                dw_mx.SetItem(RowData, 'mrjyd', cname);
                dw_mx.SetItem(RowData, 'mrjydjc', khjc);
                dw_mx.SetItem(RowData, 'mrjydpym', pym);
                requestor.Close();
            };

            if (column == "wldw_khjc_khsdttsz") {
                dw_mx.SetItem(RowData, 'khbm', code);
                dw_mx.SetItem(RowData, 'khmc', cname);
                dw_mx.SetItem(RowData, 'khjc', khjc);
                dw_mx.SetItem(RowData, 'khpym', pym);
                requestor.Close();
            };

            if (column == "wldw_shdwjc_khsdttsz") {
                dw_mx.SetItem(RowData, 'shdwbm', code);
                dw_mx.SetItem(RowData, 'shdwmc', cname);
                dw_mx.SetItem(RowData, 'shdwjc', khjc);
                dw_mx.SetItem(RowData, 'shdwpym', pym);
                requestor.Close();
            };

            if (column == "hddz_bg_bghg") {
                dw_mx.SetItem(RowData, 'bghgbm', code);
                dw_mx.SetItem(RowData, 'bghg', cname);
                dw_mx.SetItem(RowData, 'bghgjc', khjc);
                dw_mx.SetItem(RowData, 'bghgpym', pym);
                requestor.Close();
            };

            if (column == "hddz_kybg_bghg") {
                dw_mx.SetItem(RowData, 'bghgbm', code);
                dw_mx.SetItem(RowData, 'bghg', cname);
                dw_mx.SetItem(RowData, 'bghgjc', khjc);
                dw_mx.SetItem(RowData, 'bghgpym', pym);
                requestor.Close();
            };
            if (column == "hy_mtywcl_fxgs") {
                dw_mx.SetItem(RowData, 'jzxxx_fxgsbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_fxgsmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_fxgsjc', khjc);
                dw_mx.SetItem(RowData, 'jzxxx_fxgspym', pym);
                //                var date = new Date();
                //                dw_mx.SetItem(RowData, 'jzxxx_fxsj', date.getVarDate());
                requestor.Close();
            };

            if (column == "hy_mtywcl_cgsfxd") {
                dw_mx.SetItem(RowData, 'jzxxx_cgsfxdbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_cgsfxdmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_cgsfxdjc', khjc);
                dw_mx.SetItem(RowData, 'jzxxx_cgsfxdpym', pym);
                requestor.Close();
            };

            if (column == "hy_mtywcl_fxdc") {
                dw_mx.SetItem(RowData, 'jzxxx_fxdcbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcjc', khjc);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcpym', pym);
                var date = new Date();
                dw_mx.SetItem(RowData, 'jzxxx_fxsj', date.getVarDate());  
                requestor.Close();
            };

            if (column == "sj") {
                dw_mx.SetItem(RowData, 'cdbm', code);
                dw_mx.SetItem(RowData, 'cdmc', cname);
                dw_mx.SetItem(RowData, 'cdjc', khjc);
                dw_mx.SetItem(RowData, 'cdpym', pym);
                requestor.Close();
            };

            if (column == "wlgz_cd") {
                dw_mx.SetItem(RowData, 'cdbm', code);
                dw_mx.SetItem(RowData, 'cdmc', cname);
                requestor.Close();
            };

            if (column == "hdwl_cd") {
                dw_mx.SetItem(1, 'yw_hddz_wlgz_cdbm', code);
                dw_mx.SetItem(1, 'yw_hddz_wlgz_cdmc', cname);
                requestor.Close();
            };

            if (column == "hy_thwljh_sjshr") {
                dw_mx.SetItem(RowData, 'jzxxx_sjshrbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_sjshrmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_lxr', sfhygnwl_lxr);
                dw_mx.SetItem(RowData, 'jzxxx_lxdh', sfhygnwl_lxdh);
                requestor.MessageBox("", 11);
                requestor.MessageBox("", cname);
                requestor.MessageBox("", sfhygnwl_lxr);
                requestor.Close();
            };

            if (column == "ky_thwljh_sjshr") {
                dw_mx.SetItem(RowData, 'jzxxx_sjshrbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_sjshrmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_lxr', sfkygnwl_lxr);
                dw_mx.SetItem(RowData, 'jzxxx_lxdh', sfkygnwl_lxdh);
                requestor.Close();
            };

            if (column == "hddz_kggl_xhgq") {
                dw_mx.SetItem(1, 'xhgqbm', code);
                dw_mx.SetItem(1, 'xhgq', cname);
                dw_mx.SetItem(1, 'xhgqjc', khjc);
                dw_mx.SetItem(1, 'xhgqpym', pym);

                dw_mx.SetItem(1, 'mtdm', mtdm);
                dw_mx.SetItem(1, 'jcka', gqdm);
                dw_mx.SetItem(1, 'rjka', rjka);

                requestor.Close();
            };

            //            if (column == "hddz_kggl_xhgq") {
            //                dw_mx.SetItem(1, 'xhgqbm', code);
            //                dw_mx.SetItem(1, 'xhgq', cname);
            //                dw_mx.SetItem(1, 'xhgqjc', khjc);
            //                dw_mx.SetItem(1, 'xhgqpym', pym);
            //                requestor.Close();
            //            };      

            if (column == "hddz_zjs") {
                dw_mx.SetItem(1, 'zjsbm', code);

                if (cname == null || cname == "") {
                    dw_mx.SetItem(1, 'zjsmc', ename);
                } else {
                    dw_mx.SetItem(1, 'zjsmc', cname);
                }
                dw_mx.SetItem(1, 'zjsjc', khjc);
                dw_mx.SetItem(1, 'zjspym', pym);
                dw_mx.SetItem(1, 'mygb', country);
                dw_mx.SetItem(1, 'gwgys_tymc', tymc);
                requestor.Close();
            };

            if (column == "hddz_gwhd") {
                dw_mx.SetItem(1, 'gwhdbm', code);
                dw_mx.SetItem(1, 'gwhdmc', cname);
                dw_mx.SetItem(1, 'gwhdjc', khjc);
                dw_mx.SetItem(1, 'gwhdpym', pym);
                requestor.Close();
            };

            if (column == "hddz_ky_xhgq") {
                dw_mx.SetItem(RowData, 'xhgqbm', code);
                dw_mx.SetItem(RowData, 'xhgq', cname);
                dw_mx.SetItem(RowData, 'xhgqjc', khjc);
                dw_mx.SetItem(RowData, 'xhgqpym', pym);
                requestor.Close();
            };

            if (column == "user_dlwtf") {
                dw_mx.SetItem(1, 'dlwtf', code);
                requestor.Close();
            };

            if (column == "wxlxr_khbm") {
                dw_mx.SetItem(1, 'khbm', code);
                requestor.Close();
            };

            if (column == "hy_sc_dc") {

                dw_mx.SetItem(RowData, 'jzxxx_fxdbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcjc', khjc);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcpym', pym);
                requestor.Close();
            };
            if (column == "hy_fscwl_dc") {

                dw_mx.SetItem(RowData, 'jzxxx_fxdcbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcjc', khjc);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcpym', pym);
                requestor.Close();
            };
            if (column == "hy_dc_dcmc") {
                dw_mx.SetItem(RowData, 'jzxxx_fxdcbm', code);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcmc', cname);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcjc', khjc);
                dw_mx.SetItem(RowData, 'jzxxx_fxdcpym', pym);
                requestor.Close();
            };

            if (column == "hy_wlgz_dcmc") {
                dw_mx.SetItem(RowData, 'fxdcbm', code);
                dw_mx.SetItem(RowData, 'fxdcmc', cname);
                dw_mx.SetItem(RowData, 'fxdcjc', khjc);
                dw_mx.SetItem(RowData, 'fxdcpym', pym);
                requestor.Close();
            };

            if (column == "hy_cgscqfsfbz") {
                dw_mx.SetItem(RowData, 'cgsbm', code);
                dw_mx.SetItem(RowData, 'cgsmc', cname);
                dw_mx.SetItem(RowData, 'cgsjc', khjc);
                dw_mx.SetItem(RowData, 'cgspym', pym);
                requestor.Close();
            };

            if (column == "sdzpgl_kpr") {
                dw_mx.SetItem(1, 'kprbm', code);
                dw_mx.SetItem(1, 'kprmc', cname);
                dw_mx.SetItem(1, 'kprjc', khjc);
                dw_mx.SetItem(1, 'kprpym', pym);
                requestor.Close();
            };
            if (column == "hdfyhycqf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };
            if (column == "hdfyhycqf_sqrgsbm") {
                dw_mx.SetItem(1, 'sqrgsbm', code);
                dw_mx.SetItem(1, 'sqrgsmc', cname);
                dw_mx.SetItem(1, 'sqrgsjc', khjc);
                dw_mx.SetItem(1, 'sqrgspym', pym);
                requestor.Close();
            }
            if (column == "hdfykycd_sqrgsbm") {
                dw_mx.SetItem(1, 'sqrgsbm', code);
                dw_mx.SetItem(1, 'sqrgsmc', cname);
                dw_mx.SetItem(1, 'sqrgsjc', khjc);
                dw_mx.SetItem(1, 'sqrgspym', pym);
                requestor.Close();
            }
            if (column == "hdfyxdf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyhxdcf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfymtthf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyhdf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyhyfxgsfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };
            if (column == "hdfyjydfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyjydfy_sqrgs") {
                dw_mx.SetItem(1, 'sqrgsbm', code);
                dw_mx.SetItem(1, 'sqrgsmc', cname);
                dw_mx.SetItem(1, 'sqrgsjc', khjc);
                dw_mx.SetItem(1, 'sqrgspym', pym);
                dw_mx.SetItem(1, 'zfyh', yhmc);
                dw_mx.SetItem(1, 'zfyhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyjyfy_sqrgs") {
                dw_mx.SetItem(1, 'sqrgsbm', code);
                dw_mx.SetItem(1, 'sqrgsmc', cname);
                dw_mx.SetItem(1, 'sqrgsjc', khjc);
                dw_mx.SetItem(1, 'sqrgspym', pym);
                dw_mx.SetItem(1, 'zfyh', yhmc);
                dw_mx.SetItem(1, 'zfyhzh', zh);
                requestor.Close();
            };


            if (column == "hdfyfywfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyfywfy_sqr") {
                dw_mx.SetItem(1, 'sqrgsbm', code);
                dw_mx.SetItem(1, 'sqrgsmc', cname);
                dw_mx.SetItem(1, 'sqrgsjc', khjc);
                dw_mx.SetItem(1, 'sqrgspym', pym);
                dw_mx.SetItem(1, 'jdrbm', code);
                dw_mx.SetItem(1, 'jdrmc', cname);
                dw_mx.SetItem(1, 'jdrjc', khjc);
                dw_mx.SetItem(1, 'jdrpym', pym);
                requestor.Close();
            };

            if (column == "hdfyjyfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfybhxjhxxxfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfybgbjfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyhgcyfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyqt_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "ky_thwljh_cdjc") {
                dw_mx.SetItem(1, 'cdbm', code);
                dw_mx.SetItem(1, 'cdmc', cname);
                dw_mx.SetItem(1, 'cdjc', khjc);
                dw_mx.SetItem(1, 'cdpym', pym);
                dw_mx.SetItem(1, 'cdjsdwbm', code);
                dw_mx.SetItem(1, 'cdjsdwmc', cname);
                dw_mx.SetItem(1, 'cdjsdwjc', khjc);
                dw_mx.SetItem(1, 'cdjsdwpym', pym);
                requestor.Close();
            };

            if (column == "ky_thwljh_cdjsdwjc") {
                dw_mx.SetItem(1, 'cdjsdwbm', code);
                dw_mx.SetItem(1, 'cdjsdwmc', cname);
                dw_mx.SetItem(1, 'cdjsdwjc', khjc);
                dw_mx.SetItem(1, 'cdjsdwpym', pym);
                requestor.Close();
            };

            if (column == "hdfykykgthfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfykycdfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfyscfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfysjskgl_lkrbm") {
                dw_mx.SetItem(1, 'lkrbm', code);
                dw_mx.SetItem(1, 'lkrmc', cname);
                dw_mx.SetItem(1, 'lkrjc', khjc);
                dw_mx.SetItem(1, 'lkrpym', pym);
                dw_mx.SetItem(1, 'lkrkhyh', yhmc);
                dw_mx.SetItem(1, 'lkryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfysjskgl_skrbm") {
                dw_mx.SetItem(1, 'skrbm', code);
                dw_mx.SetItem(1, 'skrmc', cname);
                dw_mx.SetItem(1, 'skrjc', khjc);
                dw_mx.SetItem(1, 'skrpym', pym);
                dw_mx.SetItem(1, 'skrkhyh', yhmc);
                dw_mx.SetItem(1, 'skryhzh', zh);
                requestor.Close();
            };

            if (column == "sjskgl_jsdw") {
                dw_mx.SetItem(RowData, 'jsdwbm', code);
                dw_mx.SetItem(RowData, 'jsdwmc', cname);
                dw_mx.SetItem(RowData, 'jsdwjc', khjc);
                dw_mx.SetItem(RowData, 'jsdwpym', pym);
                var sfyjsbm = QsWebSoft.PubMethod.ReadWldwJsbm(code).value;
                if (sfyjsbm > 0) {
                    dw_mx.SetItem(RowData, "sfyjsbm", "Y")
                }
                else {
                    dw_mx.SetItem(RowData, "sfyjsbm", "N")
                }

                requestor.Close();
            };

            if (column == "hdfysjxzf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfygjyfzf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfysjzf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };

            if (column == "hdfybzjzf_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                requestor.Close();
            };


            if (column == "wldw_tybm") {
                dw_mx.SetItem(1, 'tybm', code);
                if (cname == null || cname == "") {
                    dw_mx.SetItem(1, 'tymc', ename);
                } else {
                    dw_mx.SetItem(1, 'tymc', cname);
                }
                requestor.Close();
            };

            if (column == "wldw_wtkh") {
                dw_mx.SetItem(1, 'wtkhbm', code);
                dw_mx.SetItem(1, 'wtkhmc', cname);
                dw_mx.SetItem(1, 'wtkhjc', khjc);
                dw_mx.SetItem(1, 'wtkhpym', pym);

                requestor.Close();
            };

            if (column == "hdfybzjzf_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxbm', code);
                dw_mx.SetItem(RowData, 'zfdxmc', cname);
                dw_mx.SetItem(RowData, 'zfdxjc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);

                var fkcs = 0;
                var sqdbh = dw_mx.GetItemString(1, "sqdbh")
                if (sqdbh == null) {
                    sqdbh = ""
                }
                fkcs = QsWebSoft.PubMethod.ReadZfdxFycs(code, "04", sqdbh).value;
                for (var rowfind = 1; rowfind <= dw_mx.RowCount(); rowfind++) {
                    if (dw_mx.Find("zfdxbm = '" + code + "' and fybm = '04'", rowfind, rowfind) > 0) {
                        if (rowfind != RowData) {
                            fkcs++
                        }
                    }
                };
                dw_mx.SetItem(RowData, "fkcs", fkcs + 1)
                requestor.Close();
            };

            if (column == "gnkh_tybm") {
                for (var row = 1; row <= dw_mx.RowCount(); row++) {
                    dw_mx.SetItem(row, "tybm", code);
                    dw_mx.SetItem(row, "tymc", cname);
                };

                for (var row = 1; row <= dw_mx_gnkh.RowCount(); row++) {
                    dw_mx_gnkh.SetItem(row, "tybm", code);
                    dw_mx_gnkh.SetItem(row, "tymc", cname);
                };

                for (var row = 1; row <= dw_mx_lxr.RowCount(); row++) {
                    dw_mx_lxr.SetItem(row, "yw_khbm", code);
                };

                requestor.Close();
            };

            if (column == "tszx_kh") {
                dw_mx.SetItem(1, 'yw_khbm', code);
                dw_mx.SetItem(1, 'khmc', cname);
                requestor.Close();
            };


            if (column == "wlgz_fywfy_zfdx") {
                dw_mx.SetItem(RowData, 'zfdxjc', code);
                dw_mx.SetItem(RowData, 'zfdxjc', cname);
                dw_mx.SetItem(RowData, 'zfdxmc', khjc);
                dw_mx.SetItem(RowData, 'zfdxpym', pym);
                dw_mx.SetItem(RowData, 'zfdxlx', cd);
                requestor.Close();


            };


            if (column == "wlgzfywfy_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);
                dw_mx.SetItem(1, 'zfdxlx', cd);
                requestor.Close();
            };

            if (column == "wlgzsjfk_sjskr") {
                dw_mx.SetItem(1, 'sjskrbm', code);
                dw_mx.SetItem(1, 'sjskrmc', cname);
                dw_mx.SetItem(1, 'sjskrjc', khjc);
                dw_mx.SetItem(1, 'sjskrpym', pym);
                dw_mx.SetItem(1, 'sjskrkhyh', yhmc);
                dw_mx.SetItem(1, 'sjskryhzh', zh);

                var syyf = QsWebSoft.PubMethod.cddqyp(code).value;

                dw_mx.SetItem(1, 'kyypje', syyf);
                requestor.Close();
            };

            if (column == "kddgl") {
                dw_mx.SetItem(1, 'sjr_gs', cname);
                dw_mx.SetItem(1, 'sjr_dz', addr);
                dw_mx.SetItem(1, 'sjr_lxr', lxr);
                if (lxr_mobile == null || lxr_mobile == "") {
                    dw_mx.SetItem(1, 'sjr_gddh', lxdh);
                } else {
                    dw_mx.SetItem(1, 'sjr_gddh', lxr_mobile);
                }
                requestor.Close();
            };

            if (column == "qsd_jsdwmc") {
                dw_mx.SetItem(1, 'jsdwbm', code);
                dw_mx.SetItem(1, 'jsdwmc', cname);
                requestor.Close();
            };

            if (column == "Ssgdmkhxxtx_shdw") {
                dw_mx.SetItem(RowData, 'shdw', code);
                dw_mx.SetItem(RowData, 'cnshdw', cname);
                requestor.Close();
            };

            if (column == "fybz_mtzlfy") {
                dw_mx.SetItem(RowData, 'mtbm', code);
                dw_mx.SetItem(RowData, 'mtmc', cname);
                dw_mx.SetItem(RowData, 'mtjc', khjc);
                dw_mx.SetItem(RowData, 'mtpym', pym);
                requestor.Close();
            };

            if (column == "fybz_jydfy") {
                dw_mx.SetItem(RowData, 'jydbm', code);
                dw_mx.SetItem(RowData, 'jydmc', cname);
                dw_mx.SetItem(RowData, 'jydjc', khjc);
                dw_mx.SetItem(RowData, 'jydpym', pym);
                requestor.Close();
            };

            if (column == "fybz_cxdfy") {
                dw_mx.SetItem(RowData, 'cxfbm', code);
                dw_mx.SetItem(RowData, 'cxfmc', cname);
                dw_mx.SetItem(RowData, 'cxfjc', khjc);
                dw_mx.SetItem(RowData, 'cxfpym', pym);
                requestor.Close();
            };

            if (column == "fybz_thzcf") {
                dw_mx.SetItem(RowData, 'jydbm', code);
                dw_mx.SetItem(RowData, 'jydmc', cname);
                dw_mx.SetItem(RowData, 'jydjc', khjc);
                dw_mx.SetItem(RowData, 'jydpym', pym);
                requestor.Close();
            };

            if (column == "fybz_kythfy") {
                dw_mx.SetItem(RowData, 'xhgqbm', code);
                dw_mx.SetItem(RowData, 'xhgqmc', cname);
                dw_mx.SetItem(RowData, 'xhgqjc', khjc);
                dw_mx.SetItem(RowData, 'xhgqym', pym);
                requestor.Close();
            };

            if (column == "fybz_dcfy") {
                dw_mx.SetItem(RowData, 'dcbm', code);
                dw_mx.SetItem(RowData, 'dcmc', cname);
                dw_mx.SetItem(RowData, 'dcjc', khjc);
                dw_mx.SetItem(RowData, 'dcqym', pym);
                requestor.Close();
            };

            if (column == "fybz_hdf_cyr") {
                dw_mx.SetItem(RowData, 'cyrbm', code);
                dw_mx.SetItem(RowData, 'cyr', cname);
                dw_mx.SetItem(RowData, 'cyrjc', khjc);
                dw_mx.SetItem(RowData, 'cyrpym', pym);
                requestor.Close();
            };

            if (column == "fybz_hdf_cdgs") {
                dw_mx.SetItem(RowData, 'cdgsbm', code);
                dw_mx.SetItem(RowData, 'cdgs', cname);
                dw_mx.SetItem(RowData, 'cdgsjc', khjc);
                dw_mx.SetItem(RowData, 'cdgspym', pym);
                requestor.Close();
            };

            if (column == "bdsbwh_sj") {
                dw_mx.SetItem(RowData, 'cdbm', code);
                dw_mx.SetItem(RowData, 'cdmc', cname);
                dw_mx.SetItem(RowData, 'cdjc', khjc);
                dw_mx.SetItem(RowData, 'cdpym', pym);
                requestor.Close();
            };

            if (column == "akhfygj_khjc") {
                dw_mx.SetItem(RowData, 'khbm', code);
                dw_mx.SetItem(RowData, 'khmc', cname);
                dw_mx.SetItem(RowData, 'khjc', khjc);
                dw_mx.SetItem(RowData, 'khpym', pym);
                requestor.Close();
            }

            if (column == "akhfygj_jsdwjc") {
                dw_mx.SetItem(RowData, 'jsdwbm', code);
                dw_mx.SetItem(RowData, 'jsdwmc', cname);
                dw_mx.SetItem(RowData, 'jsdwjc', khjc);
                dw_mx.SetItem(RowData, 'jsdwpym', pym);
                requestor.Close();
            }

            if (column == "SgxxwhList") {
                dw_mx.SetItem(RowData, 'sggqbm', code);
                dw_mx.SetItem(RowData, 'sggqmc', cname);
                dw_mx.SetItem(RowData, 'sggqjc', khjc);
                dw_mx.SetItem(RowData, 'sggqpym', pym);
                requestor.Close();
            };

            if ( column == "wlxx_xgjb" )
            {
                dw_mx.SetItem( 1, 'xgjbbm', code );
                dw_mx.SetItem( 1, 'xgjb', cname );     
                requestor.Close();
            };

            if ( column == "wlxx_szjb" )
            {
                dw_mx.SetItem( 1, 'szjbbm', code );
                dw_mx.SetItem( 1, 'szjb', cname );
                requestor.Close();
            };

            if ( column == "wlxx_hgdc" )
            {
                dw_mx.SetItem( 1, 'hgdcbm', code );       
                dw_mx.SetItem( 1, 'hgdc', cname );
                requestor.Close();
            };


            if ( column == "hgxx_hgdc" )
            {
                dw_mx.SetItem( 1, 'hgdcbm', code );
                dw_mx.SetItem( 1, 'hgdc', cname );
                requestor.Close();
            };

            

        };

    }


        this.Exit = function () {
            requestor.Close();
        }

        this.sle_EditChanged = function (text) {
            dw_1.SetRedraw(false);

            if (column == "gnkh_tybm") {
                var tybm = requestor.GetParm("tybm");
                if (text == "") {
                    dw_1.SetFilter("tybm = '" + tybm+"'");
                    dw_1.Filter();
                }
                else {
                    dw_1.SetFilter("tybm = '" + tybm + "' and (( Upper(khmc) like '%" + text + "%') or ( Lower(khmc) like '%" + text + "%') or ( Upper(khmc_yw) like '%" + text + "%') or ( Lower(yw_khbm) like '%" + text + "%')  or ( Lower(khmc_yw) like '%" + text + "%') or ( Upper(pym) like '%" + text + "%')  or ( Lower(sh) like '%" + text + "%') or ( Upper(sh) like '%" + text + "%') or ( Lower(pym) like '%" + text + "%'))");
                    dw_1.Filter();
                    dw_1.Sort();
                }


            } else {
                if (text == "") {
                    dw_1.SetFilter("");
                    dw_1.Filter();
                }
                else {
                    dw_1.SetFilter("( Upper(khmc) like '%" + text + "%') or ( Lower(khmc) like '%" + text + "%') or ( Upper(yw_khbm) like '%" + text + "%') or ( Upper(khmc_yw) like '%" + text + "%') or ( Lower(khmc_yw) like '%" + text + "%') or ( Upper(pym) like '%" + text + "%')  or ( Lower(sh) like '%" + text + "%') or ( Upper(sh) like '%" + text + "%') or ( Lower(pym) like '%" + text + "%')");
                    dw_1.Filter();
                    dw_1.Sort();
                }
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

       

        //#region 刷新
        this.Retrieve = function ()
        {
            var userid = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            var khlx = requestor.GetParm( "khlx" );
            var fgflx = requestor.GetParm( "fgflx" );
            var sz_flag = ddlb_sz_flag.GetText();
            

            if ( sz_flag == "深圳" )
                sz_flag = "Y";
            {
            }
            if ( fgflx == "hdgs" )
            {
                fgflx = "货代公司";
            }

            if ( fgflx == "bggs" )
            {
                fgflx = "报关公司";
            }

            if ( khlx == null )
            {
                khlx = "全部";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "gwgys" )
            {
                khlx = "国外供应商";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "gncgs" )
            {
                khlx = "国内采购商";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "wts" )
            {
                khlx = "委托商";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "jy_jyd" )
            {
                khlx = "检疫点";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "mt" )
            {
                khlx = "码头";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "hymt" )
            {
                khlx = "海运码头";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "all" )
            {
                khlx = "全部";
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }
            else if ( khlx == "fgf" )
            {
                dw_1.DataWindowObject = "dw_ywy_wldw_fgf_select";
                dw_1.Retrieve( fgflx );
            }
            else
            {
                dw_1.Retrieve( ShareMode, userid, Dlwtf, khlx, sz_flag );
            }


            dw_1.Modify( "DataWindow.Readonly=yes" );

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