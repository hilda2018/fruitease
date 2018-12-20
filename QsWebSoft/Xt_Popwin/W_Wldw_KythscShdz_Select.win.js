﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_KythscShdz_Select() {

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

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("dw_1","DoubleClicked",self.OK); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.OK)=="function") 
			 win.AttachEvent("btn_ok","Clicked",self.OK); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_Cancel","Clicked",self.Exit); 

		 if(typeof(self.Add)=="function") 
			 win.AttachEvent("btn_Add","Clicked",self.Add); 

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
        var shdz = dw_1.GetItemString(row, 'shdz');
        var dz_sf = dw_1.GetItemString(row, 'dz_sf');
        var dz_dq = dw_1.GetItemString(row, 'dz_dq');
        var dz_lm = dw_1.GetItemString(row, 'dz_lm');

        if (dw_mx != null) {
            if (column == "hddz_shdz") {
                dw_mx.SetItem(RowData, 'shdz', shdz);
                requestor.Close();
            };
            if (column == "hddz_shdz2") {
                dw_mx.SetItem(RowData, 'jschfscwld_zyxx', shdz);

                requestor.Close();
            };

            if (column == "hddz_shdz3") {
                dw_mx.SetItem(RowData, 'fscwld3_zyxx', shdz);

                requestor.Close();
            };

            if (column == "hddz_shdz4") {
                dw_mx.SetItem(RowData, 'fscwld4_zyxx', shdz);
                requestor.Close();
            };
            if (column == "hddz_shdz5") {
                dw_mx.SetItem(RowData, 'zhongdian', shdz);
                requestor.Close();
            };

            if (column == "thwljh_shdz") {
                dw_mx.SetItem(RowData, 'shdz', shdz);
                dw_mx.SetItem(RowData, 'zjfscwld_zyxx', shdz);
                requestor.Close();
            };

            if (column == "thwljh_zjfscwld_zyxx") {
                dw_mx.SetItem(RowData, 'zjfscwld_zyxx', shdz);
                requestor.Close();
            };

            if (column == "thwljh_jschfscwld_zyxx") {
                dw_mx.SetItem(RowData, 'jschfscwld_zyxx', shdz);
                requestor.Close();
            };

            if (column == "thwljh_fscwld3_zyxx") {
                dw_mx.SetItem(RowData, 'fscwld3_zyxx', shdz);
                requestor.Close();
            };

            if (column == "thwljh_fscwld4_zyxx") {
                dw_mx.SetItem(RowData, 'fscwld4_zyxx', shdz);
                requestor.Close();
            };

            if (column == "thwljh_wlgz_dz") {
                dw_mx.SetItem(RowData, 'dz_xx', shdz);
                dw_mx.SetItem(RowData, 'dz_sf', dz_sf);
                dw_mx.SetItem(RowData, 'dz_dq', dz_dq);
                dw_mx.SetItem(RowData, 'dz_lm', dz_lm);

                var ifModify = dw_mx.GetItemNumber(RowData, "ifmodify");
                if (ifModify > 0) {
                    ifModify += 1;
                }
                dw_mx.SetItem(RowData, "ifmodify", ifModify);

                requestor.Close();
            };

            if (column == "thwljh_wlgz_dz_list") {
                dw_mx.SetItem(RowData, 'jzxxx_zyxx', shdz);
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
                dw_1.SetFilter("( Upper(shdz) like '%" + text + "%') or ( Lower(shdz) like '%" + text + "%')");
                dw_1.Filter();
                dw_1.Sort();
            }
           
            dw_1.SetRedraw(true);
        }

//        //#region 增加
//        var iw_WldwAdd_Shdz = null;
//        this.Add = function () {
//            var yw_khbm = null;

//            if (iw_WldwAdd_Shdz == null)
//                iw_WldwAdd_Shdz = new W_WldwAdd_Shdz_New();
//            iw_WldwAdd_Shdz.SetListDataWindow(dw_1);
//            var khbm = requestor.GetParm("khbm");
//            var cxh_max = 0;
//            if (dw_1.RowCount() > 0) {
//                cxh_max = dw_1.GetItemNumber(1,"cxh_max");
//            }
//       
//            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_WldwAdd_Shdz_New&Khbm=" + khbm + "&cxh_max=" + cxh_max.toString(), iw_WldwAdd_Shdz);
//            self.Retrieve();

//        }
        //#endregion


        //#region 刷新
        this.Retrieve = function () {
            var userid = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            var khbm = requestor.GetParm("khbm");
          
            dw_1.Retrieve();
             
            dw_1.Modify("DataWindow.Readonly=yes");

        }
        //#endregion

        

}