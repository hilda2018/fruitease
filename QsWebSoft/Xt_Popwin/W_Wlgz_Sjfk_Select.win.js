///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wlgz_Sjfk_Select() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var cbx_1= new CheckBox( requestor );
	 var cbx_yxzkh= new CheckBox( requestor );
	 var ss_1= new ToolStrip( requestor );
	 var dw_fymx= new DataWindow( requestor );
	 var ds_fyqr= new DataStore( requestor );

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
		 if(cbx_1 == null ) cbx_1= new CheckBox( requestor );
		 cbx_1.Attach( win.Control( "cbx_1") ); 
		 if(cbx_yxzkh == null ) cbx_yxzkh= new CheckBox( requestor );
		 cbx_yxzkh.Attach( win.Control( "cbx_yxzkh") ); 
		 if(ss_1 == null ) ss_1= new ToolStrip( requestor );
		 ss_1.Attach( win.Control( "ss_1") ); 
		 if(dw_fymx == null ) dw_fymx= new DataWindow( requestor );
		 dw_fymx.Attach( win.Control( "dw_fymx") ); 
		 if(ds_fyqr == null ) ds_fyqr= new DataStore( requestor );
		 ds_fyqr.Attach( win.Control( "ds_fyqr") ); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_2","Clicked",self.Retrieve); 

		 if(typeof(self.cbx_clicked)=="function") 
			 win.AttachEvent("cbx_1","Clicked",self.cbx_clicked); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.OK); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

		 if(typeof(self.Yxzkh)=="function") 
			 win.AttachEvent("cbx_yxzkh","Clicked",self.Yxzkh); 

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
		 cbx_1.Detach(); cbx_1=null; 
		 cbx_yxzkh.Detach(); cbx_yxzkh=null; 
		 ss_1.Detach(); ss_1=null; 
		 dw_fymx.Detach(); dw_fymx=null; 
		 ds_fyqr.Detach(); ds_fyqr=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //获取数据窗口

     var dw_d = null;
     this.SetDetailDW = function (dw) {
         dw_d = dw;
     }

     var dwo = null;
     this.SetDwo = function (parm) {
         dwo = parm;
     }

     var rownum = 0;
     this.SetRow = function (row) {
         rownum = row;
     }


     this.OK = function () {
         if (dw_d == null)
             return;      
         dw_1.SetFilter("");
         dw_1.Filter();

         //空运车队配货信息
         if (dwo == "dw_wlgz_sjfk_edit_cmd") {
             self.Wlgz_sjfk();
         };    

         requestor.Close();

     }

     //增加记录
     this.Wlgz_sjfk = function () {
         var count = 0;
         var sjkgsj;
         for (row = 1; row <= dw_1.RowCount(); row++) {
             if (dw_1.GetItemString(row, "selected") == "N") {
                 continue;
             };
             var rwbh = dw_1.GetItemString(row, "rwbh");
              dw_fymx.Retrieve(rwbh);
              for (row1 = 1; row1 <= dw_fymx.RowCount(); row1++) {
                 if (rownum > 0) {
                     if (count == 0) {
                         ll_insertrow = rownum;
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(rownum + 1);
                     }

                 }
                 else {
                     ll_insertrow = dw_d.InsertRow(0);
                 }
                 dw_d.SetItem(ll_insertrow, "rwbh", dw_1.GetItemString(row, "rwbh"));
                 dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                 dw_d.SetItem(ll_insertrow, "hddz_cxh", dw_1.GetItemNumber(row, "hddz_cxh"));
                 dw_d.SetItem(ll_insertrow, "jzxh", dw_1.GetItemString(row, "jzxh"));
                 dw_d.SetItem(ll_insertrow, "fybm", dw_fymx.GetItemString(row1, "fybm"));
                 dw_d.SetItem(ll_insertrow, "fymc", dw_fymx.GetItemString(row1, "fymc"));
                 dw_d.SetItem(ll_insertrow, "je", dw_fymx.GetItemNumber(row1, "fyje"));
                 dw_d.SetItem(ll_insertrow, "beizhu", dw_fymx.GetItemString(row1, "beizhu"));
                 count++;
             }


             ds_fyqr.Retrieve(rwbh);
             for (row1 = 1; row1 <= ds_fyqr.RowCount(); row1++) {
                 if (rownum > 0) {
                     if (count == 0) {
                         ll_insertrow = rownum;
                     }
                     else {
                         ll_insertrow = dw_d.InsertRow(rownum + 1);
                     }

                 }
                 else {
                     ll_insertrow = dw_d.InsertRow(0);
                 }
                 dw_d.SetItem(ll_insertrow, "rwbh", dw_1.GetItemString(row, "rwbh"));
                 dw_d.SetItem(ll_insertrow, "ywbh", dw_1.GetItemString(row, "ywbh"));
                 dw_d.SetItem(ll_insertrow, "hddz_cxh", dw_1.GetItemNumber(row, "hddz_cxh"));
                 dw_d.SetItem(ll_insertrow, "jzxh", dw_1.GetItemString(row, "jzxh"));
                 dw_d.SetItem(ll_insertrow, "fybm", ds_fyqr.GetItemString(row1, "fybm"));
                 dw_d.SetItem(ll_insertrow, "fymc", ds_fyqr.GetItemString(row1, "fymc"));
                 dw_d.SetItem(ll_insertrow, "je", ds_fyqr.GetItemNumber(row1, "fyje"));
                 dw_d.SetItem(ll_insertrow, "beizhu", ds_fyqr.GetItemString(row1, "beizhu"));
                 count++;
             }

         }


         //         if (count <= 0) {
         //             requestor.MessageBox("提示", "请选择要添加的集装箱记录!", ICON.StopSign);
         //             sle_1.SetFocus();
         //             return;
         //         }


     }
     

	 this.Exit = function () {
	     requestor.Close();
	 }


	 //#region 查询
	 this.Retrieve = function () {

	     var beginDate = new Date(dp_begin.GetValue());
	     var endDate = new Date(dp_end.GetValue());

	     //把开始日期的时间部分设置为 00:00:00
	     beginDate.setHours(0);
	     beginDate.setMinutes(0);
	     beginDate.setSeconds(0);

	     //把结束日期的时间部分设置为 23:59:59
	     endDate.setHours(23);
	     endDate.setMinutes(59);
	     endDate.setSeconds(59);

	     if (endDate < beginDate) {
	         requestor.MessageBox("提示", "结束日期不能小于开始日期!", ICON.StopSign);
	         dp_Begin.SetFocus();
	         return;
	     }

	     var userid = requestor.GetParm("userid");
	     var ShareMode = requestor.GetParm("ShareMode");
	     var Dlwtf = requestor.GetParm("Dlwtf");

	     var Sjskrbm = requestor.GetParm("Sjskrbm");
	     dw_1.Retrieve(beginDate.getVarDate(), endDate.getVarDate());
	     if (cbx_yxzkh.GetChecked()) {
	         dw_1.SetFilter("cdbm = '" + Sjskrbm + "'");
	     } else {
	         dw_1.SetFilter("");
	     }
	     dw_1.Filter("")


	 }
	 //#endregion

	 //#region 选择
	 this.Yxzkh = function () {
	     var Sjskrbm = requestor.GetParm("Sjskrbm"); 
	     if (cbx_yxzkh.GetChecked()) {
	         dw_1.SetFilter("cdbm = '" + Sjskrbm + "'");
	     } else {
	         dw_1.SetFilter("");
	     }
	     dw_1.Filter("")
	 }
	 //

	 //#region 全选
	 this.cbx_clicked = function () {
	     dw_1.SetRedraw(false);
	     if (cbx_1.GetChecked()) {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "selected", "Y")
	         }
	     } else {
	         for (row = 1; row <= dw_1.RowCount(); row++) {
	             dw_1.SetItem(row, "selected", "N")
	         }
	     }
	     dw_1.SetRedraw(true);
	 }
	 //#endregion

	 this.sle_EditChanged = function (text) {
	     dw_1.SetRedraw(false);
	     if (text == "") {
	         dw_1.SetFilter("");
	         dw_1.Filter();
	     }
	     else {
	         dw_1.SetFilter("( Upper(jzxh) like '%" + text.toUpperCase() + "%')  or ( Lower(jzxh) like '%" + text.toLowerCase() + "%') or ( Upper(ywbh) like '%" + text.toUpperCase() + "%') or ( Lower(ywbh) like '%" + text.toLowerCase() + "%') or ( Upper(sjmc) like '%" + text.toUpperCase() + "%') or ( Lower(sjmc) like '%" + text.toLowerCase() + "%') or ( Upper(cdmc) like '%" + text.toUpperCase() + "%') or ( Lower(cdmc) like '%" + text.toLowerCase() + "%')");
	         dw_1.Filter();
	         dw_1.Sort();
	     }
	     dw_1.SetRedraw(true);
	 }

	 var iw_Item_Edit = null;



  }