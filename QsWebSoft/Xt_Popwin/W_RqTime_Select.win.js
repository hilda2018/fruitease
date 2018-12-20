///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_RqTime_Select() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_master= new DataWindow( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("cb_cancel","Clicked",self.Exit); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("cb_ok","Clicked",self.save); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_master.Detach(); dw_master=null; 
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
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}


//#endregion


    //#region 窗口的OPEN事件
this.PostOpen = function () {
    
    mxdbh = requestor.GetParm("mxdbh");
    dw_master.Modify("DataWindow.Readonly=no");
}

//#endregion

    //#region CloseQuery
    this.CloseQuery = function () {

        dw_master.AcceptText();
     

        if ((dw_master.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }
    }
    //#endregion



    //#region 存盘
    this.save = function () {
        if (dw_master.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() <= 0)) {
            alert("没有数据需要保存!");
            return;
        }



        var cmhc = dw_master.GetItemString(1, "cmhc");
        if (cmhc == null || cmhc == "") {
            alert("请输入船名!");
            dw_master.SetFocus();
            dw_master.SetColumn("cmhc")
            return;
        }

    

    
        dw_master.AcceptText();
        var row = dw_master.GetRow();
        var mxdbh = dw_master.GetItemString(row, "mxdbh");
        var bbh = dw_master.GetItemNumber(row, "bbh");
        var dw_master_data = dw_master.GetChanges();
        if (dw_master_data == "")
            return;

        var ret = QsWebSoft.PubMethod.UpdateTyzssCmhc(mxdbh, cmhc).value;
            if (ret > 0) {

                requestor.MessageBox("提示", "船名保存成功!", ICON.Information);
                dw_master.ResetUpdate();
                requestor.Close();
            }
            else {
                requestor.MessageBox("提示", "船名保存失败!", ICON.StopSign);
            }
           
       

          

       
 
    }
    //#endregion 存盘

    //#region 关闭窗口
    this.Exit = function () {

        requestor.Close(); 
    }
    //#endregion


 
}
