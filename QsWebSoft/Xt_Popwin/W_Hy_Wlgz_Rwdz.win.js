///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_Wlgz_Rwdz() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ContextMenuStrip1 = new ContextMenu(requestor);
    var ds_sc = new DataStore(requestor);
    var ds_sggq = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ContextMenuStrip1 == null) ContextMenuStrip1 = new ContextMenu(requestor);
        ContextMenuStrip1.Attach(win.Control("ContextMenuStrip1"));
        if (ds_sc == null) ds_sc = new DataStore(requestor);
        ds_sc.Attach(win.Control("ds_sc"));
        if (ds_sggq == null) ds_sggq = new DataStore(requestor);
        ds_sggq.Attach(win.Control("ds_sggq"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_list_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_list_Clicked);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        tb_1.Detach(); tb_1 = null;
        ContextMenuStrip1.Detach(); ContextMenuStrip1 = null;
        ds_sc.Detach(); ds_sc = null;
        ds_sggq.Detach(); ds_sggq = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;
var iw_Country_Select = null;

var column = null;
this.SetData = function (parm) {
    column = parm;
}
var RowData = null;
this.SetRow = function (parm) {
    RowData = parm;
}

var dworwxz = null;
this.SetDwoRwxz = function (dw) {
    dworwxz = dw;
}

var dwowldz = null;
this.SetDwoWldz = function (dw) {
    dwowldz = dw;
}

var dwomaster = null;
this.SetDwoMaster = function (dw) {
    dwomaster = dw;
}

var dwojzxxx = null;
this.SetDwoJzxxx = function (dw) {
    dwojzxxx = dw;
}

var Rwxh = null;
this.SetRwxh = function (parm) {
    Rwxh = parm;
}

//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Wldw.ashx");

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function ()
{

    var gq_bz = dworwxz.GetItemString( 1, "gq_bz" );

    
   
    if ( gq_bz == "Y" && Rwxh <= 1 )
    {
        
        var li_insertrow = dw_list.InsertRow( 0 );

        var ccfs = dworwxz.GetItemString( 1, "sjzq_ccfs" );

        if ( ccfs == "疏运" )
        {
            var sggqbm = dworwxz.GetItemString( 1, "sggqbm" );
            var gq_jd = "";
            var gq_wd = "";
            var gq_fw = "";
            var gq_dz = "";
            var gq_type = "";
            var gq_points = "";
            if ( ds_sggq.Retrieve( sggqbm ) > 0 )
            {
                gq_jd = ds_sggq.GetItemString( 1, "jd" );
                gq_wd = ds_sggq.GetItemString( 1, "wd" );
                gq_fw = ds_sggq.GetItemString( 1, "fw" );
                gq_dz = ds_sggq.GetItemString( 1, "shdz" );
                gq_type = ds_sggq.GetItemNumber( 1, "type" );
                gq_points = ds_sggq.GetItemString( 1, "points" );
            }
            var sggqjc = dworwxz.GetItemString( 1, "sggqjc" );
            var ll_retrieve = ds_sc.Retrieve( sggqjc );
            if ( ll_retrieve > 0 )
            {
                var road_name = ds_sc.GetItemString( ll_retrieve, "road_name" );
                var area_name = ds_sc.GetItemString( ll_retrieve, "area_name" );
                var prv_name = ds_sc.GetItemString( ll_retrieve, "prv_name" );
                dw_list.SetItem( li_insertrow, "dz_sf", prv_name );
                dw_list.SetItem( li_insertrow, "dz_dq", area_name );
                dw_list.SetItem( li_insertrow, "dz_lm", road_name );
            } else
            {
                dw_list.SetItem( li_insertrow, "dz_sf", "" );
                dw_list.SetItem( li_insertrow, "dz_dq", "" );
                dw_list.SetItem( li_insertrow, "dz_lm", "" );
            }
            dw_list.SetItem( li_insertrow, "xm", "港区" );
            dw_list.SetItem( li_insertrow, "rwxh", 1 );
            dw_list.SetItem( li_insertrow, "jd", gq_jd );
            dw_list.SetItem( li_insertrow, "wd", gq_wd );
            dw_list.SetItem( li_insertrow, "fw", gq_fw );
            dw_list.SetItem( li_insertrow, "type", gq_type );
            dw_list.SetItem( li_insertrow, "points", gq_points );
            dw_list.SetItem( li_insertrow, "dz_xx", gq_dz );
            dw_list.SetItem( li_insertrow, "rwxh", 1 );

        } else
        {

            var gq_jd = dworwxz.GetItemString( 1, "gq_jd" );
            var gq_wd = dworwxz.GetItemString( 1, "gq_wd" );
            var gq_fw = dworwxz.GetItemString( 1, "gq_fw" );
            var gq_dz = dworwxz.GetItemString( 1, "gq_dz" );
            var gq_type = dworwxz.GetItemNumber( 1, "gq_type" );
            var gq_points = dworwxz.GetItemString( 1, "gq_points" );
            var xhgqjc = dworwxz.GetItemString( 1, "yw_hddz_xhgqjc" );
            var ll_retrieve = ds_sc.Retrieve( xhgqjc );
            if ( ll_retrieve > 0 )
            {
                var road_name = ds_sc.GetItemString( ll_retrieve, "road_name" );
                var area_name = ds_sc.GetItemString( ll_retrieve, "area_name" );
                var prv_name = ds_sc.GetItemString( ll_retrieve, "prv_name" );
                dw_list.SetItem( li_insertrow, "dz_sf", prv_name );
                dw_list.SetItem( li_insertrow, "dz_dq", area_name );
                dw_list.SetItem( li_insertrow, "dz_lm", road_name );
            } else
            {
                dw_list.SetItem( li_insertrow, "dz_sf", "" );
                dw_list.SetItem( li_insertrow, "dz_dq", "" );
                dw_list.SetItem( li_insertrow, "dz_lm", "" );
            }
            dw_list.SetItem( li_insertrow, "xm", "港区" );
            dw_list.SetItem( li_insertrow, "rwxh", 1 );
            dw_list.SetItem( li_insertrow, "jd", gq_jd );
            dw_list.SetItem( li_insertrow, "wd", gq_wd );
            dw_list.SetItem( li_insertrow, "fw", gq_fw );
            dw_list.SetItem( li_insertrow, "type", gq_type );
            dw_list.SetItem( li_insertrow, "points", gq_points );
            dw_list.SetItem( li_insertrow, "dz_xx", gq_dz );
            dw_list.SetItem( li_insertrow, "rwxh", 1 );
        }




    };

    var hgcyd_bz = dworwxz.GetItemString( 1, "hgcyd_bz" );


    if ( hgcyd_bz == "Y" && Rwxh <= 2 )
    {

       
        var li_insertrow = dw_list.InsertRow( 0 );

        var cydjc = dworwxz.GetItemString( 1, "yw_hddz_cydjc" );
        var hgcyd_jd = dworwxz.GetItemString( 1, "hgcyd_jd" );
        var hgcyd_wd = dworwxz.GetItemString( 1, "hgcyd_wd" );
        var hgcyd_fw = dworwxz.GetItemString( 1, "hgcyd_fw" );
        var hgcyd_dz = dworwxz.GetItemString( 1, "hgcyd_dz" );
        var hgcyd_type = dworwxz.GetItemNumber( 1, "hgcyd_type" );
        var hgcyd_points = dworwxz.GetItemString( 1, "hgcyd_points" );
        var ll_retrieve = ds_sc.Retrieve( cydjc );
        if ( ll_retrieve > 0 )
        {
            var road_name = ds_sc.GetItemString( ll_retrieve, "road_name" );
            var area_name = ds_sc.GetItemString( ll_retrieve, "area_name" );
            var prv_name = ds_sc.GetItemString( ll_retrieve, "prv_name" );

            dw_list.SetItem( li_insertrow, "dz_sf", prv_name );
            dw_list.SetItem( li_insertrow, "dz_dq", area_name );
            dw_list.SetItem( li_insertrow, "dz_lm", road_name );
            dw_list.SetItem( li_insertrow, "xm", "港区" );
            dw_list.SetItem( li_insertrow, "rwxh", 2 );
            dw_list.SetItem( li_insertrow, "jd", hgcyd_jd );
            dw_list.SetItem( li_insertrow, "wd", hgcyd_wd );
            dw_list.SetItem( li_insertrow, "fw", hgcyd_fw );
            dw_list.SetItem( li_insertrow, "type", hgcyd_type );
            dw_list.SetItem( li_insertrow, "points", hgcyd_points );
            dw_list.SetItem( li_insertrow, "dz_xx", hgcyd_dz );
        } else
        {
            dw_list.SetItem( li_insertrow, "dz_sf", "" );
            dw_list.SetItem( li_insertrow, "dz_dq", "" );
            dw_list.SetItem( li_insertrow, "dz_lm", "" );
            dw_list.SetItem( li_insertrow, "xm", "港区" );
            dw_list.SetItem( li_insertrow, "rwxh", 2 );
            dw_list.SetItem( li_insertrow, "jd", hgcyd_jd );
            dw_list.SetItem( li_insertrow, "wd", hgcyd_wd );
            dw_list.SetItem( li_insertrow, "fw", hgcyd_fw );
            dw_list.SetItem( li_insertrow, "type", hgcyd_type );
            dw_list.SetItem( li_insertrow, "points", hgcyd_points );
            dw_list.SetItem( li_insertrow, "dz_xx", hgcyd_dz );
        }
    }

    var jyd_bz = dworwxz.GetItemString( 1, "jyd_bz" );


    if ( jyd_bz == "Y" && Rwxh <= 3 )
    {
       

        var li_insertrow = dw_list.InsertRow( 0 );
        var jyd_jc = dworwxz.GetItemString( 1, "jyd_jc" );
        var jyd_jd = dworwxz.GetItemString( 1, "jyd_jd" );
        var jyd_wd = dworwxz.GetItemString( 1, "jyd_wd" );
        var jyd_fw = dworwxz.GetItemString( 1, "jyd_fw" );
        var jyd_type = dworwxz.GetItemNumber( 1, "jyd_type" );
        var jyd_points = dworwxz.GetItemString( 1, "jyd_points" );
        var jyd_dz = dworwxz.GetItemString( 1, "jyd_dz" );

        var ll_retrieve = ds_sc.Retrieve( jyd_jc );
        if ( ll_retrieve > 0 )
        {
            var road_name = ds_sc.GetItemString( ll_retrieve, "road_name" );
            var area_name = ds_sc.GetItemString( ll_retrieve, "area_name" );
            var prv_name = ds_sc.GetItemString( ll_retrieve, "prv_name" );

            dw_list.SetItem( li_insertrow, "dz_sf", prv_name );
            dw_list.SetItem( li_insertrow, "dz_dq", area_name );
            dw_list.SetItem( li_insertrow, "dz_lm", road_name );

            dw_list.SetItem( li_insertrow, "xm", "检疫点" );
            dw_list.SetItem( li_insertrow, "rwxh", 3 );
            dw_list.SetItem( li_insertrow, "jd", jyd_jd );
            dw_list.SetItem( li_insertrow, "wd", jyd_wd );
            dw_list.SetItem( li_insertrow, "fw", jyd_fw );
            dw_list.SetItem( li_insertrow, "type", jyd_type );
            dw_list.SetItem( li_insertrow, "points", jyd_points );
            dw_list.SetItem( li_insertrow, "dz_xx", jyd_dz );

        } else
        {
            dw_list.SetItem( li_insertrow, "dz_sf", "" );
            dw_list.SetItem( li_insertrow, "dz_dq", "" );
            dw_list.SetItem( li_insertrow, "dz_lm", "" );
            dw_list.SetItem( li_insertrow, "xm", "检疫点" );
            dw_list.SetItem( li_insertrow, "rwxh", 3 );
            dw_list.SetItem( li_insertrow, "jd", jyd_jd );
            dw_list.SetItem( li_insertrow, "wd", jyd_wd );
            dw_list.SetItem( li_insertrow, "fw", jyd_fw );
            dw_list.SetItem( li_insertrow, "type", jyd_type );
            dw_list.SetItem( li_insertrow, "points", jyd_points );
            dw_list.SetItem( li_insertrow, "dz_xx", jyd_dz );
        }

    }

    var sfysc = 0;
    for ( row = 1; row <= dwowldz.RowCount(); row++ )
    {
         
        if ( Rwxh <= row + 3 )
        {
            var li_insertrow = dw_list.InsertRow( 0 );
            dw_list.SetItem( li_insertrow, "dz_sf", dwowldz.GetItemString( row, "dz_sf" ) );
            dw_list.SetItem( li_insertrow, "dz_dq", dwowldz.GetItemString( row, "dz_dq" ) );
            dw_list.SetItem( li_insertrow, "dz_lm", dwowldz.GetItemString( row, "dz_lm" ) );
            dw_list.SetItem( li_insertrow, "dz_xx", dwowldz.GetItemString( row, "dz_xx" ) );
            var scmc = dwowldz.GetItemString( row, "dz_lm" )
            if ( scmc.indexOf( "永南路1688号" ) >= 0 || scmc.indexOf( "永南路1668号" ) >= 0 )
            {
                dw_list.SetItem( li_insertrow, "xm", "市场" );
                sfysc = 1;
            } else
            {
                dw_list.SetItem( li_insertrow, "xm", "非市场物流地" + ( row - sfysc ) );
            }
            dw_list.SetItem( li_insertrow, "rwxh", row + 3 );
            dw_list.SetItem( li_insertrow, "jd", dwowldz.GetItemString( row, "jd" ) );
            dw_list.SetItem( li_insertrow, "wd", dwowldz.GetItemString( row, "wd" ) );
            dw_list.SetItem( li_insertrow, "fw", dwowldz.GetItemString( row, "fw" ) );

            dw_list.SetItem( li_insertrow, "type", dwowldz.GetItemNumber( row, "type" ) );

            dw_list.SetItem( li_insertrow, "points", dwowldz.GetItemString( row, "points" ) );
        }
    }

    var dc_bz = dworwxz.GetItemString( 1, "dc_bz" );


    if ( dc_bz == "Y" && Rwxh < 4 + dwowldz.RowCount() )
    {

        var li_insertrow = dw_list.InsertRow( 0 );

        var fxdcjc = dworwxz.GetItemString( 1, "fxdcjc" );
        var dc_jd = dworwxz.GetItemString( 1, "dc_jd" );
        var dc_wd = dworwxz.GetItemString( 1, "dc_wd" );
        var dc_fw = dworwxz.GetItemString( 1, "dc_fw" );
        var dc_type = dworwxz.GetItemNumber( 1, "dc_type" );
        var dc_points = dworwxz.GetItemString( 1, "dc_points" );
        var dc_dz = dworwxz.GetItemString( 1, "dc_dz" );
        var ll_retrieve = 0;
        if ( fxdcjc.length > 1 )
        {
            ll_retrieve = ds_sc.Retrieve( fxdcjc );
        }

        if ( ll_retrieve > 0 )
        {
            var road_name = ds_sc.GetItemString( ll_retrieve, "road_name" );
            var area_name = ds_sc.GetItemString( ll_retrieve, "area_name" );
            var prv_name = ds_sc.GetItemString( ll_retrieve, "prv_name" );

            dw_list.SetItem( li_insertrow, "dz_sf", prv_name );
            dw_list.SetItem( li_insertrow, "dz_dq", area_name );
            dw_list.SetItem( li_insertrow, "dz_lm", road_name );

            dw_list.SetItem( li_insertrow, "xm", "堆场" );
            dw_list.SetItem( li_insertrow, "rwxh", dwowldz.RowCount() + 4 );
            dw_list.SetItem( li_insertrow, "jd", dc_jd );
            dw_list.SetItem( li_insertrow, "wd", dc_wd );
            dw_list.SetItem( li_insertrow, "fw", dc_fw );
            dw_list.SetItem( li_insertrow, "type", dc_type );
            dw_list.SetItem( li_insertrow, "points", dc_points );
            dw_list.SetItem( li_insertrow, "dz_xx", dc_dz );
        } else
        {
            dw_list.SetItem( li_insertrow, "dz_sf", "" );
            dw_list.SetItem( li_insertrow, "dz_dq", "" );
            dw_list.SetItem( li_insertrow, "dz_lm", "" );
            dw_list.SetItem( li_insertrow, "xm", "堆场" );
            dw_list.SetItem( li_insertrow, "rwxh", dwowldz.RowCount() + 4 );
            dw_list.SetItem( li_insertrow, "jd", dc_jd );
            dw_list.SetItem( li_insertrow, "wd", dc_wd );
            dw_list.SetItem( li_insertrow, "fw", dc_fw );
            dw_list.SetItem( li_insertrow, "type", dc_type );
            dw_list.SetItem( li_insertrow, "points", dc_points );
            dw_list.SetItem( li_insertrow, "dz_xx", dc_dz );
        }

    }

}

var dw_List = null;
this.SetListDataWindow = function (dw) {
    dw_List = dw;
}
//#endregion

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();

}
//#endregion

  

//#region 存盘
this.save = function () {
    var rwbh = dwomaster.GetItemString(RowData, "rwbh");
    var ywbh = dwomaster.GetItemString(RowData, "ywbh");
    var hddz_cxh = dwomaster.GetItemNumber(RowData, "hddz_cxh");
    var jzxh = dwomaster.GetItemString(RowData, "jzxh");
    var rwlx = dwomaster.GetItemString(RowData, "rwlx");
    for (row = 1; row <= dw_list.RowCount(); row++) {
        var xz = dw_list.GetItemString(row, "xz");
        if (xz == "Y") {
            var li_insertrow = dwojzxxx.InsertRow(0);
            var logid = requestor.GetParm("userid");
            var address = dw_list.GetItemString(row, "dz_xx");
            dwojzxxx.SetItem(li_insertrow, "dz_sf", dw_list.GetItemString(row, "dz_sf"));
            dwojzxxx.SetItem(li_insertrow, "dz_dq", dw_list.GetItemString(row, "dz_dq"));
            dwojzxxx.SetItem(li_insertrow, "dz_lm", dw_list.GetItemString(row, "dz_lm"));
            dwojzxxx.SetItem(li_insertrow, "dz_xx", dw_list.GetItemString(row, "dz_xx"));
            dwojzxxx.SetItem(li_insertrow, "rwxh", dw_list.GetItemNumber(row, "rwxh"));
            dwojzxxx.SetItem(li_insertrow, "rwmc", dw_list.GetItemString(row, "xm"));
            dwojzxxx.SetItem(li_insertrow, "rwkssj", dwomaster.GetItemDate(RowData, "rwkssj"));
            dwojzxxx.SetItem(li_insertrow, "jd", dw_list.GetItemString(row, "jd"));
            dwojzxxx.SetItem(li_insertrow, "wd", dw_list.GetItemString(row, "wd"));
            dwojzxxx.SetItem( li_insertrow, "fw", dw_list.GetItemString( row, "fw" ) );
            dwojzxxx.SetItem( li_insertrow, "wllx", dw_list.GetItemNumber( row, "type" ) );
            dwojzxxx.SetItem( li_insertrow, "points", dw_list.GetItemString( row, "points" ) );
//            if (address != null && address != "") {
//                $.ajax({
//                    async: false,
//                    dataType: "json",
//                    url: "IFView/FenceHandler.ashx",
//                    data: { action: "getSiteByAddress", address: address, logid: logid, r: Math.random() },
//                    success: function (res) {
//                        var obj = $.parseJSON(res.data);
//                        dwojzxxx.SetItem(li_insertrow, "jd", obj.result.lng.toString());
//                        dwojzxxx.SetItem(li_insertrow, "wd", obj.result.lat.toString());
//                        dwojzxxx.SetItem(li_insertrow, "fw", parseInt(obj.result.radius.toString()));
//                    }
//                });
//            }
            dwojzxxx.SetItem(li_insertrow, "rwbh", rwbh);
            dwojzxxx.SetItem(li_insertrow, "ywbh", ywbh);
            dwojzxxx.SetItem(li_insertrow, "hddz_cxh", hddz_cxh);
            dwojzxxx.SetItem(li_insertrow, "rwlx", rwlx);
            if (row == 1 && dw_list.GetItemNumber(row, "rwxh") == "港区") {
                dwomaster.SetItem(RowData, "sfgq", "Y");
            }
        };
    }
    requestor.Close();
};
//#endregion

 

//#region 获得数据窗口的焦点
var lastdw = new DataWindow();
this.dw_GetFocus = function (sender) {
    lastdw.Attach(sender);
};
//#endregion

 


//#region 关闭窗口
this.Exit = function () {

    requestor.Close();
}
//#endregion


//#region 添加明细
this.AddRow = function () {
    var row = dw_list.InsertRow(0);
    var khbm = requestor.GetParm("khbm");
    
    var cxh_max = dw_list.GetItemNumber(1,"cxh_max");
    
    dw_list.ScrollToRow(row);
    dw_list.SetItem(row, "yw_khbm", khbm);
    dw_list.SetItem(row, "cxh", cxh_max+1);
    dw_list.SetFocus();

}
//#endregion

this.dw_list_Clicked = function (xPos, yPos, Row, dwoName, Data) {
    
}

//#region 删除商品
this.DeleteRow = function () {
    var row = dw_list.GetRow();
    if (row <= 0)
         return; 
    var status = dw_list.GetItemStatus(row, 0, DWBUFFER.Primary);

    if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
    if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
        dw_list.SetFocus();
        return;
    }
    }
    dw_list.DeleteRow(row);
  
}
//#endregion

}
