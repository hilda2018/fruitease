///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Pdy()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_2 = new DataWindow( requestor );
    var dw_1 = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_2 == null ) dw_2 = new DataWindow( requestor );
        dw_2.Attach( win.Control( "dw_2" ) );
        if ( dw_1 == null ) dw_1 = new DataWindow( requestor );
        dw_1.Attach( win.Control( "dw_1" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );

        if ( typeof ( self.dw_GetFocus ) == "function" )
            win.AttachEvent( "dw_2", "GetFocus", self.dw_GetFocus );

        if ( typeof ( self.dw_1_clicked ) == "function" )
            win.AttachEvent( "dw_1", "Clicked", self.dw_1_clicked );

        if ( typeof ( self.dw_GetFocus ) == "function" )
            win.AttachEvent( "dw_1", "GetFocus", self.dw_GetFocus );

        if ( typeof ( self.dw_1_RowFocusChanged ) == "function" )
            win.AttachEvent( "dw_1", "RowFocusChanged", self.dw_1_RowFocusChanged );

        if ( typeof ( self.InsertRow ) == "function" )
            win.AttachEvent( "btn_rowadd", "Clicked", self.InsertRow );

        if ( typeof ( self.DeleteRow ) == "function" )
            win.AttachEvent( "btn_rowdelete", "Clicked", self.DeleteRow );

        if ( typeof ( self.CopyRow ) == "function" )
            win.AttachEvent( "btn_1", "Clicked", self.CopyRow );

        if ( typeof ( self.Save ) == "function" )
            win.AttachEvent( "btn_save", "Clicked", self.Save );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        dw_2.Detach(); dw_2 = null;
        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Pdy.ashx");



    //#endregion

//#region 关闭窗口
this.Exit = function () {
    if (self.CloseQuery() == 1)
        return;
    setTimeout("window.close();", 100);
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {


    dw_1.AcceptText();
 

    if ((dw_1.DeletedCount() + dw_1.ModifiedCount() ) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }


}
//#endregion


//#region 获得数据窗口的焦点
var lastdw = new DataWindow();
this.dw_GetFocus = function ( sender )
{
    lastdw.Attach( sender );
};
//#endregion


this.dw_1_RowFocusChanged = function ( row )
{
    var pdy = dw_1.GetItemString( row,"pdy" );
    dw_2.SetFilter( "pdy = '" + pdy + "'" )
    dw_2.Filter()
}

this.InsertRow = function ()
{
      if ( lastdw.GetName() == "dw_2" )
    {
        var row = dw_1.GetRow();
        if ( row > 0 )
        {
             dw_1.AcceptText();
            var pdy = dw_1.GetItemString( row, "pdy" );
              var li_insertrow = lastdw.InsertRow( 0 );
             lastdw.SetItem( li_insertrow, "pdy", pdy );

        } else
        {
            requestor.MessageBox( "提示", "请先选择左面派单员！" );
        }
    } else
    {
        lastdw.InsertRow( 0 );
    }
}
this.DeleteRow = function () {
    lastdw.DeleteRow( 0 );
}

this.CopyRow = function () {
    var row = lastdw.GetRow();
    if (row <= 0)
        return;

    lastdw.RowsCopy( row, row, DWBUFFER.Primary, lastdw, row + 1, DWBUFFER.Primary )
    lastdw.ScrollToRow( row + 1 );


}

this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;

    if ( dw_2.AcceptText() != 1 )
        return;

    if ( ( dw_1.ModifiedCount() + dw_1.DeletedCount() + dw_2.ModifiedCount() + dw_2.DeletedCount() ) <= 0 )
    {
        alert("没有数据需要保存!");
        return;
    }


 
    var dw_d_data = dw_1.GetChanges();
//    if ( dw_d_data == "")
//        return;

    var dw_d_data_cmd = dw_2.GetChanges();
//    if ( dw_d_data_cmd == "" )
//        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke( "Save", "dw_Master=" + dw_d_data + "&dw_Cmd=" + dw_d_data_cmd );


    if (webReq.StatusCode() == 200) {
        //服务器成功处理，返回单号
      
        dw_1.ResetUpdate();
        requestor.MessageBox("提示", "数据保存成功!");
         dw_1.SetFocus();

    }
    else {
        requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        dw_1.SetFocus();
    }
}

 }