﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_Jdr_Select() {

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
      


        dw_mx.SetItem(RowData, 'jdrjc', dw_1.GetItemString(row, "dwjc"));
        dw_mx.SetItem(RowData, 'jdrmc', dw_1.GetItemString(row, "dwmc"));
        dw_mx.SetItem(RowData, 'jdrbm', dw_1.GetItemString(row, "dwbm"));
        dw_mx.SetItem(RowData, 'jdrpym', dw_1.GetItemString(row, "dwpym"));      
        requestor.Close();
           
           
             
        
        
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
                dw_1.SetFilter("( Upper(jdrjc) like '%" + text + "%') or ( Lower(jdrbm) like '%" + text + "%') or ( Upper(jdrmc) like '%" + text + "%') or ( Lower(jdrpym) like '%" + text + "%')");
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