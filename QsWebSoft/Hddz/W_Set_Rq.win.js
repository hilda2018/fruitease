///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Set_Rq() {

	 var self=this;
	 var requestor= new PBWindow();
	 var tb_1= new ToolStrip( requestor );
	 var dp_1= new DatePicker( requestor );
	 var ddlb_sxw= new DropDownListBox( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dp_1 == null ) dp_1= new DatePicker( requestor );
		 dp_1.Attach( win.Control( "dp_1") ); 
		 if(ddlb_sxw == null ) ddlb_sxw= new DropDownListBox( requestor );
		 ddlb_sxw.Attach( win.Control( "ddlb_sxw") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 tb_1.Detach(); tb_1=null; 
		 dp_1.Detach(); dp_1=null; 
		 ddlb_sxw.Detach(); ddlb_sxw=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
 

var dw_mx = null;

this.SetDataWindow = function (dw) {
    dw_mx = dw;
    
}
var column = null;
this.SetData = function (parm) {
    column = parm;
}


//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hddz.ashx"); 

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
     
    
} 

//#region CloseQuery
this.CloseQuery = function () {

   
}
//#endregion

 

//#region 存盘
this.save = function () {
    var rq_lj = new Date(dp_1.GetValue());
    var sxw = ddlb_sxw.GetText();
    if (sxw == "" || sxw == null) {
        requestor.MessageBox("提示", "请选择上午下午！")
        return;
    }
    else if (sxw == "上午") {
        rq_lj.setHours(11);
        rq_lj.setMinutes(59);
        rq_lj.setSeconds(59);
    } else {
        rq_lj.setHours(16);
        rq_lj.setMinutes(59);
        rq_lj.setSeconds(59);
    }
    if (column == "yghd") {
        for (row = 1; row <= dw_mx.RowCount(); row++) {
            var xz = dw_mx.GetItemString(row, "xz");
            if (xz == "Y") {
                dw_mx.SetItem(row, "yjhdsj", rq_lj.getVarDate());
            }
        }
    };

    if (column == "ygfx") {
        for (row = 1; row <= dw_mx.RowCount(); row++) {
            var xz = dw_mx.GetItemString(row, "xz");
            if (xz == "Y") {
                dw_mx.SetItem(row, "yghgfxsj", rq_lj.getVarDate());
            }
        }
    };

    requestor.Close();

}


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion

}
