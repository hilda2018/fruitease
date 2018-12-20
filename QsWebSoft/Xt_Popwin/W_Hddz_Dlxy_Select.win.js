///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Dlxy_Select() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );

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
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.OK); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.Retrieve); 

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
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    var dw_mx = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }

    this.SetDataWindow2 = function (dw) {
        dw_mx2 = dw;
    }
    var column = null;
    this.SetData = function (parm) {
        column = parm;
    }

    this.OK = function () {
        var row = dw_1.GetRow();
        if (row <= 0) {
            requestor.MessageBox("提示", "请选择要添加的合作协议!", ICON.StopSign);
            sle_1.SetFocus();
            return;

        }
        var code = dw_1.GetItemString(row, 'dlxyh');
        var dlwtf_bm = dw_1.GetItemString(row, 'dlwtf_bm');
        var dlwtf_mc = dw_1.GetItemString(row, 'dlwtf_mc');
        var dlwtf_jc = dw_1.GetItemString(row, 'dlwtf_jc');
        var dlwtf_pym = dw_1.GetItemString(row, 'dlwtf_pym');
        var qyhgbm = dw_1.GetItemString(row, "dlwtf_qyhgbm");
        var szhm = dw_1.GetItemString(row, "dlwtf_szhm");          
     
        var sjjgdm = dw_1.GetItemString(row, "dlwtf_sjjgdm");
        var wtkhbm = dw_1.GetItemString(row, 'wtkhbm');
        var wtkhmc = dw_1.GetItemString(row, 'wtkhmc');
        var wtkhjc = dw_1.GetItemString(row, 'wtkhjc');
        var wtkhpym = dw_1.GetItemString(row, 'wtkhpym');
        var wtkhywmc = dw_1.GetItemString(row, 'wtkhywmc');
        var ohdlxy = dw_1.GetItemString(row, 'ohdlxy');
        var zzrq = dw_1.GetItemDate(row, 'zzrq');
        var sfsjjyw = dw_1.GetItemString(row, 'sfsjjyw');
        if (wtkhywmc == null || wtkhywmc == "") {
            requestor.MessageBox("提示", "该税单抬头所对应的委托客户的英文名称没有，请找归海平维护！", ICON.StopSign); 
            return;
        }
        if ((qyhgbm == null || qyhgbm == "") && (szhm == null || szhm == "")) {
            requestor.MessageBox("提示", "该税单抬头对应的企业海关编码和统一信用代码一个也没有维护，请找归海平维护！", ICON.StopSign);
            return;
        }

        if (dw_mx != null) {
            if (column == "dlxyh_dl") {
                dw_mx.SetItem(1, 'dlxyh', code);
                dw_mx.SetItem(1, 'khbm', wtkhbm);
                dw_mx.SetItem(1, 'khmc', wtkhmc);
                dw_mx.SetItem(1, 'khjc', wtkhjc);
                dw_mx.SetItem(1, 'khpym', wtkhpym);
                dw_mx.SetItem(1, 'shdwbm', dlwtf_bm);
                dw_mx.SetItem(1, 'shdwmc', dlwtf_mc);
                dw_mx.SetItem(1, 'shdwjc', dlwtf_jc);
                dw_mx.SetItem(1, 'shdwpym', dlwtf_pym);
                dw_mx.SetItem(1, 'sfsjjyw', sfsjjyw);
                dw_mx.SetItem(1, 'shdwdm', qyhgbm);
                dw_mx.SetItem(1, 'jydwbm', "admin0003");
                dw_mx.SetItem(1, 'jydwmc', "上海欧恒进出口有限公司");
                dw_mx.SetItem(1, 'jydwjc', "上海欧恒");
                dw_mx.SetItem(1, 'jydwpym', "shohjckyxgs");
                dw_mx.SetItem(1, 'jydwdm', "3122269401");
                dw_mx.SetItem(1, 'jydwsjjgdm', "3100647614");
                dw_mx.SetItem(1, 'ohdlxy', ohdlxy);
                dw_mx.SetItem(1, 'zzrq', zzrq);
                requestor.Close();
            };

            if (column == "dlxyh_zy") {
                dw_mx.SetItem(1, 'dlxyh', code);
                dw_mx.SetItem(1, 'khbm', wtkhbm);
                dw_mx.SetItem(1, 'khmc', wtkhmc);
                dw_mx.SetItem(1, 'khjc', wtkhjc);
                dw_mx.SetItem(1, 'khpym', wtkhpym);
                dw_mx.SetItem(1, 'shdwbm', dlwtf_bm);
                dw_mx.SetItem(1, 'shdwmc', dlwtf_mc);
                dw_mx.SetItem(1, 'shdwjc', dlwtf_jc);
                dw_mx.SetItem(1, 'shdwpym', dlwtf_pym);
                dw_mx.SetItem(1, 'sfsjjyw', sfsjjyw);
                dw_mx.SetItem(1, 'shdwdm', qyhgbm);
                dw_mx.SetItem(1, 'jydwbm', dlwtf_bm);
                dw_mx.SetItem(1, 'jydwmc', dlwtf_mc);
                dw_mx.SetItem(1, 'jydwjc', dlwtf_jc);
                dw_mx.SetItem(1, 'jydwpym', dlwtf_pym);
                dw_mx.SetItem(1, 'jydwdm', qyhgbm);
                dw_mx.SetItem(1, 'jydwsjjgdm', sjjgdm);
                dw_mx.SetItem(1, 'ohdlxy', ohdlxy);
                dw_mx.SetItem(1, 'zzrq', zzrq);
                requestor.Close();
            };

        };



    }


        this.Exit = function () {
            requestor.Close();
        }

       

        //#region 数据查询
        this.Retrieve = function () {
            var beginDate = new Date(dp_begin.GetValue());
            var endDate = new Date(dp_end.GetValue());
            if (endDate < beginDate) {
                requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
                dp_Begin.SetFocus();
                return;
            }

            //把开始日期的时间部分设置为 00:00:00
            beginDate.setHours(0);
            beginDate.setMinutes(0);
            beginDate.setSeconds(0);

            //把结束日期的时间部分设置为 23:59:59
            endDate.setHours(23);
            endDate.setMinutes(59);
            endDate.setSeconds(59);
            var userid = requestor.GetParm("userid");
            var zbrq = requestor.GetParm("zbrq");
            dw_1.Retrieve(userid, beginDate.getVarDate(), endDate.getVarDate(), zbrq);


        }
        //#endregion

        //#region 窗口的OPEN事件
        this.PostOpen = function () {
            self.Retrieve();
        }
        //#endregion


        //#region 过滤
        this.sle_EditChanged = function (text) {
            dw_1.SetRedraw(false);
            if (text == "")
                dw_1.SetFilter("");
            else
                dw_1.SetFilter("( Upper(dlxyh) like '%" + text + "%')  or ( Lower(dlxyh) like '%" + text + "%') or  ( Upper(dlwtf_mc) like '%" + text + "%')  or ( Lower(dlwtf_mc) like '%" + text + "%')  or  ( Upper(dlwtf_pym) like '%" + text + "%')  or ( Lower(dlwtf_pym) like '%" + text + "%')");
            dw_1.Filter();
            dw_1.Sort();
            dw_1.SetRedraw(true);
        }
        //#endregion

}