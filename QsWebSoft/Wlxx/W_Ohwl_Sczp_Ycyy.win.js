﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Ohwl_Sczp_Ycyy() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_list","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_list.Detach(); dw_list=null; 
		 tb_1.Detach(); tb_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;
var iw_Country_Select = null;

var dw_mx = null;

this.SetDataWindow = function (dw) {
    dw_mx = dw;
}
var ywbh = null;

this.SetData = function (parm) {
    ywbh = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}
var hddz_cxh = null;
this.SetDatacxh = function ( parm )
{
    hddz_cxh = parm;
}

var zbr = null;
this.SetZbr = function (parm) {
    zbr = parm;
}

 var dwc = new DataWindowChild();  

//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl( "/Service/Bgtj.ashx" ); 

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
      self.Add();

    
}


this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();


    if ((dw_list.ModifiedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }
  
}
//#endregion

//#region 新建
this.Add = function ()
{

    if ( dw_list.Retrieve( ywbh, hddz_cxh ) <= 0 )
    {
        var li_insertrow = dw_list.InsertRow( 0 );
        dw_list.SetItem( li_insertrow, "ywbh", ywbh );
        dw_list.SetItem( li_insertrow, "hddz_cxh", hddz_cxh );

    } else
    {
             dw_list.GetChild( "yclx", dwc );
             dwc.Retrieve();
    }

}
//#endregion

//#region 存盘
this.save = function ()
{
    if ( dw_list.AcceptText() != 1 )
        return;

    if ( ( dw_list.ModifiedCount() + dw_list.DeletedCount() <= 0 ) )
    {
        alert( "没有数据需要保存!" );
        return;
    }

    var yclx = dw_list.GetItemString( 1, "yclx" );
    var ycyy = dw_list.GetItemString( 1, "ycyy" );

    dw_mx.SetItem( RowData, "yclx", yclx );
    dw_mx.SetItem( RowData, "ycyy", ycyy );

    var dw_d_data = dw_list.GetChanges();
    if ( dw_d_data == "" )
        return;




    //执行保存的WebService
    webReq.SetFunctionID( requestor.GetFunctionID() );
    webReq.Invoke( "Ohwl_Sczp_Ycyy", "dw_list=" + dw_d_data );


    if ( webReq.StatusCode() == 200 )
    {
        //服务器成功处理，返回单号

        dw_list.ResetUpdate();
        requestor.MessageBox( "提示", "数据保存成功!" );
        dw_list.SetFocus();
        requestor.Close();
    }
    else
    {
        requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
        dw_list.SetFocus();
    }

}


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion

}
