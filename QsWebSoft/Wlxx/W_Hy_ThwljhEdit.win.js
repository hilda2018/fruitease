///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hy_ThwljhEdit()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_cmd = new DataWindow( requestor );
    var dw_master_dc = new DataWindow( requestor );
    var dw_log = new DataWindow( requestor );
    var dw_master = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );
    var dw_print = new DataWindow( requestor );
    var ds_1 = new DataStore( requestor );
    var ds_sc = new DataStore( requestor );
    var ds_zxshdz = new DataStore( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_cmd == null ) dw_cmd = new DataWindow( requestor );
        dw_cmd.Attach( win.Control( "dw_cmd" ) );
        if ( dw_master_dc == null ) dw_master_dc = new DataWindow( requestor );
        dw_master_dc.Attach( win.Control( "dw_master_dc" ) );
        if ( dw_log == null ) dw_log = new DataWindow( requestor );
        dw_log.Attach( win.Control( "dw_log" ) );
        if ( dw_master == null ) dw_master = new DataWindow( requestor );
        dw_master.Attach( win.Control( "dw_master" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( dw_print == null ) dw_print = new DataWindow( requestor );
        dw_print.Attach( win.Control( "dw_print" ) );
        if ( ds_1 == null ) ds_1 = new DataStore( requestor );
        ds_1.Attach( win.Control( "ds_1" ) );
        if ( ds_sc == null ) ds_sc = new DataStore( requestor );
        ds_sc.Attach( win.Control( "ds_sc" ) );
        if ( ds_zxshdz == null ) ds_zxshdz = new DataStore( requestor );
        ds_zxshdz.Attach( win.Control( "ds_zxshdz" ) );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "window", "Clicked", self.Exit );

        if ( typeof ( self.CloseQuery ) == "function" )
            win.AttachEvent( "window", "CloseQuery", self.CloseQuery );

        if ( typeof ( self.PostOpen ) == "function" )
            win.AttachEvent( "window", "PostOpen", self.PostOpen );

        if ( typeof ( self.dw_cmd_Clicked ) == "function" )
            win.AttachEvent( "dw_cmd", "Clicked", self.dw_cmd_Clicked );

        if ( typeof ( self.dw_cmd_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_cmd", "DoubleClicked", self.dw_cmd_DoubleClicked );

        if ( typeof ( self.dw_cmd_ItemChanged ) == "function" )
            win.AttachEvent( "dw_cmd", "ItemChanged", self.dw_cmd_ItemChanged );

        if ( typeof ( self.dw_master_ButtonClicked ) == "function" )
            win.AttachEvent( "dw_master_dc", "ButtonClicked", self.dw_master_ButtonClicked );

        if ( typeof ( self.dw_master_Clicked ) == "function" )
            win.AttachEvent( "dw_master_dc", "Clicked", self.dw_master_Clicked );

        if ( typeof ( self.dw_master_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_master_dc", "DoubleClicked", self.dw_master_DoubleClicked );

        if ( typeof ( self.dw_master_EditChanged ) == "function" )
            win.AttachEvent( "dw_master_dc", "EditChanged", self.dw_master_EditChanged );

        if ( typeof ( self.dw_master_ItemChanged ) == "function" )
            win.AttachEvent( "dw_master_dc", "ItemChanged", self.dw_master_ItemChanged );

        if ( typeof ( self.dw_master_ButtonClicked ) == "function" )
            win.AttachEvent( "dw_master", "ButtonClicked", self.dw_master_ButtonClicked );

        if ( typeof ( self.dw_master_Clicked ) == "function" )
            win.AttachEvent( "dw_master", "Clicked", self.dw_master_Clicked );

        if ( typeof ( self.dw_master_DoubleClicked ) == "function" )
            win.AttachEvent( "dw_master", "DoubleClicked", self.dw_master_DoubleClicked );

        if ( typeof ( self.dw_master_EditChanged ) == "function" )
            win.AttachEvent( "dw_master", "EditChanged", self.dw_master_EditChanged );

        if ( typeof ( self.dw_GetFocus ) == "function" )
            win.AttachEvent( "dw_master", "GetFocus", self.dw_GetFocus );

        if ( typeof ( self.dw_master_ItemChanged ) == "function" )
            win.AttachEvent( "dw_master", "ItemChanged", self.dw_master_ItemChanged );

        if ( typeof ( self.dw_master_EntertoTab ) == "function" )
            win.AttachEvent( "dw_master", "KeyDown", self.dw_master_EntertoTab );

        if ( typeof ( self.AddRow ) == "function" )
            win.AttachEvent( "btn_rowadd", "Clicked", self.AddRow );

        if ( typeof ( self.DeleteRow ) == "function" )
            win.AttachEvent( "btn_rowdelete", "Clicked", self.DeleteRow );

        if ( typeof ( self.InsertRow ) == "function" )
            win.AttachEvent( "btn_rowinsert", "Clicked", self.InsertRow );

        if ( typeof ( self.Save ) == "function" )
            win.AttachEvent( "btn_save", "Clicked", self.Save );

        if ( typeof ( self.Print ) == "function" )
            win.AttachEvent( "btn_print", "Clicked", self.Print );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_close", "Clicked", self.Exit );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        dw_cmd.Detach(); dw_cmd = null;
        dw_master_dc.Detach(); dw_master_dc = null;
        dw_log.Detach(); dw_log = null;
        dw_master.Detach(); dw_master = null;
        tb_1.Detach(); tb_1 = null;
        dw_print.Detach(); dw_print = null;
        ds_1.Detach(); ds_1 = null;
        ds_sc.Detach(); ds_sc = null;
        ds_zxshdz.Detach(); ds_zxshdz = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Wldw_Select = null;
    var dwc = new DataWindowChild();
    var dwc_dq = new DataWindowChild();
    var dwc_lm = new DataWindowChild();
    var iw_Wldw_Lxr_Select = null;
    var iw_Wldw_Shdz_Select = null;
    var iw_Sfdqlm_Select = null;
    var dwc_sc = new DataWindowChild();
    var mediantNum = 0;
    var zdmc_wldz = "N";
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Hy_Thwljh.ashx");

   
    
    //#endregion

    //#region 设置窗口是否可编辑
    this.SetEditMode = function (newMode) {
        editMode = newMode;
        var bEditFlag = false;
        if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
            bEditFlag = true;
        }
        else {
            bEditFlag = false;
        };
       
        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_cmd.Modify("DataWindow.Readonly=no");          
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_cmd.Modify("DataWindow.Readonly=yes");          
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.ShareData(dw_master_dc);

        dw_master.SetFocus();
        var operation = requestor.GetParm("operation");

        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {
                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                self.Copy();
                self.SetEditMode("copy");
            }
            if (operation == "open") {
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
            }

            if (operation == "modify") {
                self.SetEditMode("modify");
            }

        }
        else {
            self.SetEditMode("show");
        };

        var userid = requestor.GetParm("userid");
        dw_log.Retrieve(userid, "hyjh");
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
        if (self.CloseQuery() == 1)
            return;
        setTimeout("window.close();", 100);
    }
    //#endregion

    //#region CloseQuery
    this.CloseQuery = function () {
        if (editMode == "show")
            return;

        dw_master.AcceptText();
       

        if (dw_master.ModifiedCount()) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }

        //释放对象
        dwc.Detach(); dwc = null;
    }
    //#endregion

    //#region 存盘
    this.Save = function ()
    {
        if ( editMode == "show" )
            return;

        if ( dw_master.AcceptText() != 1 )
            return;

        if ( dw_cmd.AcceptText() != 1 )
            return;

        if ( dw_master.ModifiedCount() + dw_cmd.ModifiedCount() + dw_cmd.DeletedCount() <= 0 )
        {
            alert( "没有数据需要保存!" );
            return;
        }


        if ( dw_cmd.GetItemString( 1, "sjshrlxr" ) == "" || dw_cmd.GetItemString( 1, "sjshrlxr" ) == null )
        {
            requestor.MessageBox( "提示", "请选择收货人!" );
            return;
        }



        var sc_bz = dw_master.GetItemString( 1, "sc_bz" );
        var sc_mc = dw_master.GetItemString( 1, "sc_mc" );
        //        if (sc_bz == "Y" && (sc_mc == null || sc_mc == "")) {
        //            requestor.MessageBox("提示", "请选择市场！")
        //            return;
        //        }

        var dcrwcs = dw_master.GetItemNumber( 1, "dcrwcs" );
        var dc_rwbh = dw_master.GetItemString( 1, "dc_rwbh" );

        if ( dcrwcs > 0 && dc_rwbh != null && dc_rwbh != "" )
        {
            requestor.MessageBox( "提示", "已经存在堆场任务，不能更改，如需更改计划，请先撤销堆场任务！" );
            return
        }

        var pdy = dw_master.GetItemString( 1, "jzxxx_pdy" );
        if ( pdy == null && pdy == "" )
        {
            requestor.MessageBox( "提示", "请需要分配派单员，否则不能下任务！" );
        }

        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString( row, "ywbh" );
        var cxh = dw_master.GetItemNumber( row, "cxh" )

        //更新物流信息
        var num = 0;
        var scbz = "N";
        for ( var i = 1; i <= dw_cmd.RowCount(); i++ )
        {
            var dz_lm = dw_cmd.GetItemString( i, "dz_lm" );
            var aa = dz_lm.indexOf("永南路1688号" );
              if ( dz_lm.indexOf( "永南路1688号" ) >= 0 )
            {
                scbz = "Y";
                dw_cmd.SetItem( i, "scmc", "辉展果蔬" );
            } else
            {
                num += 1;
            }
        }

        var xxdz;
        for ( var i = 1; i <= dw_cmd.RowCount(); i++ )
        {
            xxdz += dw_cmd.GetItemString( i, "dz_xx" ) + ";";
        }
        if ( scbz == "Y" )
        {
            dw_master.SetItem( 1, "sc_bz", "Y" );
            if ( num > 0 )
            {
                dw_master.SetItem( 1, "jschfscwld_bz", "Y" );
                dw_master.SetItem( 1, "jschfscwld_zyxx", xxdz );
            }
        } else
        {
            dw_master.SetItem( 1, "sc_bz", "N" );
            if ( num > 0 )
            {
                dw_master.SetItem( 1, "zjfscwld_bz", "Y" );
                dw_master.SetItem( 1, "zjfscwld_zyxx", xxdz );
            }
        }

        //更新行号
        //dw_master.SetItem(row, "csbz", "Y")
        var wllxqdrq = new Date();
        dw_master.SetItem( row, "wllxqdrq", wllxqdrq.getVarDate() );
        //        dw_master.SetItem(1, "sc_bz", "N");
        for ( row = 1; row <= dw_cmd.RowCount(); row++ )
        {
            dw_cmd.SetItem( row, "ywbh", ywbh );
            dw_cmd.SetItem( row, "hddz_cxh", cxh );
            dw_cmd.SetItem( row, "cxh", row );
            //            var scmc = dw_cmd.GetItemString(row, "scmc");
            //            if (scmc.length > 1) {
            //                dw_master.SetItem(1, "sc_bz", "Y");
            //            }

            //判断对应地址信息是否已经存在，如果不存在，则插入到费用表里面去
            var sjshrbm = dw_cmd.GetItemString( row, "sjshrbm" );
            var dz_xx = dw_cmd.GetItemString( row, "dz_xx" );
            var dz_sf = dw_cmd.GetItemString( row, "dz_sf" );
            var dz_dq = dw_cmd.GetItemString( row, "dz_dq" );
            var dz_lm = dw_cmd.GetItemString( row, "dz_lm" );
//            var num = QsWebSoft.PubMethod.Pdshdzbcr( sjshrbm, dz_xx, dz_sf, dz_dq, dz_lm ).value;

            var type = dw_cmd.GetItemNumber( row, "type" );
            var jd = dw_cmd.GetItemString( row, "jd" );
            var wd = dw_cmd.GetItemString( row, "wd" );
            var fw = dw_cmd.GetItemString( row, "fw" );
            var points = dw_cmd.GetItemString( row, "points" );
            if ( type == null )
            {
                type = 0
            }


            if ( ( type == 0 && ( jd == null || jd == "" || wd == null || wd == "" || fw == null || fw == "" ) ) || ( type == 1 && ( points == null || points == "" ) ) )
            {
                requestor.MessageBox( "提示", "第" + row.toString() + "行电子围栏没有设置成功，请注意检查！" )
            }

        }

        var hz_sc = "";
        for ( var i = 1; i <= dw_cmd.RowCount(); i++ )
        {
            var ifmodify = dw_cmd.GetItemNumber( i, "ifmodify" );
            ifmodify += 1;
            dw_cmd.SetItem( i, "ifmodify", ifmodify );

            var scmc = dw_cmd.GetItemString( i, "scmc" );
             if ( scmc == '' || scmc == null )
            {
                scmc = "非市场";
            }
            hz_sc += ( scmc + "," );

        }

     
        dw_master.SetItem( 1, "yw_hddz_jzxxx_hz_sc", hz_sc );


        dw_cmd.AcceptText();
        var dw_master_data = dw_master.GetChanges();
        var dw_cmd_data = dw_cmd.GetChanges();
        if ( dw_master_data == "" && dw_cmd_data == "" )
            return;


        //        //数据同步生鲜港
        //        for ( var i = 1; i <= dw_cmd.RowCount(); i++ )
        //        {
        //            if ( dw_cmd.GetItemStatus( i, 0, DWBUFFER.Primary ) == 1 || dw_cmd.GetItemStatus( i, 0, DWBUFFER.Primary ) == 3 )
        //            {
        //                var ywbh = dw_cmd.GetItemString( i, "ywbh" );
        //                var cxh = dw_cmd.GetItemNumber( i, "hddz_cxh" );
        //                var row = dw_log.InsertRow( 0 );
        //                //var maxNumber =  self.SerialNumber(log_num);
        //                var serialNumber = dw_log.GetItemString( row, "eid_max" ) //"hyfx" + userid + yearMonDay + maxNumber;

        //                dw_log.SetItem( row, "eid", serialNumber );
        //                dw_log.SetItem( row, "tablename", "yw_hddz_wldz" );
        //                dw_log.SetItem( row, "changecols", "" );
        //                dw_log.SetItem( row, "mainid", ywbh );
        //                dw_log.SetItem( row, "parameters", cxh.toString() );
        //                dw_log.ScrollToRow( row );
        //            }
        //        }






        dw_log.AcceptText()
        var dw_log_data = dw_log.GetChanges();
        //        if (dw_log_data == "")
        //            return;


        //执行保存的WebService
        webReq.SetFunctionID( requestor.GetFunctionID() );
        webReq.Invoke( "Save", "dw_master=" + dw_master_data + "&dw_cmd=" + dw_cmd_data + "&dw_log=" + dw_log_data + "&ywbh=" + ywbh + "&cxh=" + cxh + "&operation=" + editMode );

        if ( webReq.StatusCode() == 200 )
        {
            //服务器成功处理，返回单号
            //            ywbh = webReq.ResponseText();
            dw_master.SetItem( 1, "ywbh", ywbh );
            for ( row = 1; row <= dw_cmd.RowCount(); row++ )
            {
                dw_cmd.SetItem( row, "ywbh", ywbh );
                dw_cmd.SetItem( row, "hddz_cxh", cxh );
                dw_cmd.SetItem( row, "cxh", row );
            }

            dw_master.ResetUpdate();
            dw_cmd.ResetUpdate();
            dw_log.ResetUpdate();
            self.SetEditMode( "open" );
            requestor.MessageBox( "提示", "数据保存成功!" );

            self.Tbsxg();
            self.Exit();

        }
        else
        {
            requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
            dw_master.SetFocus();
        }
    }
    //#endregion



    //#region 打印 
    this.Print = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        var cxh = dw_master.GetItemNumber(1,"cxh");
        dw_print.SetDataObject("dw_hy_thwljh_print");
        dw_print.Retrieve(ywbh, cxh);
        dw_print.PrintPreview();
    }
    //#endregion

    //#region 新建初始化
    this.Add = function () {
        dw_master.SetItem(1, "csbz", "Y");
        dw_master.SetItem(1, "gq_bz", "Y");


        var hgfxfs = dw_master.GetItemString(1, "yw_hddz_hgfxfs")
        if (hgfxfs == "放行查验") {
            dw_master.SetItem(1, "hgcyd_bz", "Y");
        }

        //        var jyjbm = dw_master.GetItemString(1, "jyjbm")
        //        if (jyjbm == "40010126") {
        //            dw_master.SetItem(1, "jyd_bz", "Y");
        //            dw_master.SetItem(1, "jyd_bm", "40070075");
        //            dw_master.SetItem(1, "jyd_mc", "上海龙吴果蔬批发交易市场经营管理有限公司");
        //            dw_master.SetItem(1, "jyd_jc", "龙吴市场");
        //            dw_master.SetItem(1, "jyd_pym", "shlwgspfjyscjyglyxgs");
        //        } else {
        //            dw_master.SetItem(1, "jyd_bz", "Y");
        //            dw_master.SetItem(1, "jyd_bm", "admin0615");
        //            dw_master.SetItem(1, "jyd_mc", "上农批");
        //            dw_master.SetItem(1, "jyd_jc", "上农批");
        //            dw_master.SetItem(1, "jyd_pym", "snp");
        //        }

        var xccy = dw_master.GetItemString(1, "xccy")
        if (xccy == "Y") {
            var jydbm = dw_master.GetItemString(1, "yw_hddz_jydbm")
            var jyd = dw_master.GetItemString(1, "yw_hddz_jyd")
            var jydjc = dw_master.GetItemString(1, "yw_hddz_jydjc")
            var jydpym = dw_master.GetItemString(1, "yw_hddz_jydpym")


            dw_master.SetItem(1, "jyd_bz", "Y");
            dw_master.SetItem(1, "jyd_bm", jydbm);
            dw_master.SetItem(1, "jyd_mc", jyd);
            dw_master.SetItem(1, "jyd_jc", jydjc);
            dw_master.SetItem(1, "jyd_pym", jydpym);
        }


//        dw_master.SetItem(1, "sc_bm", "admin0616");
//        dw_master.SetItem(1, "sc_mc", "上海辉展物流有限公司");
//        dw_master.SetItem(1, "sc_jc", "辉展市场");
//        dw_master.SetItem(1, "sc_pym", "shhzwlyxgs");
        //        dw_master.SetItem(1, "sc_bz", "Y");
        dw_master.SetItem(1, "dc_bz", "Y");
        self.SetEditMode("new");



    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_ButtonClicked = function (Row, dwoName) {
        if (editMode == "show")
            return;
        if (dwoName == "b_lxr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
             
            var Khbm = dw_master.GetItemString(1, "sjshrbm")

            iw_Wldw_Lxr_Select.SetDataWindow(dw_master);
            iw_Wldw_Lxr_Select.SetData("thwljh_lxr");
            iw_Wldw_Lxr_Select.SetRow(1);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_master.SetFocus();

        }

        if (dwoName == "b_shdz") {
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            
            var Khbm = dw_master.GetItemString(1, "sjshrbm")

            iw_Wldw_Shdz_Select.SetDataWindow(dw_master);
            iw_Wldw_Shdz_Select.SetData("thwljh_shdz");
            iw_Wldw_Shdz_Select.SetRow(1);
           
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_master.SetFocus();

        }

    }
    //#endregion
    //#region dw_master弹出选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;

        if (dwoName == "jyd_mc_t") {
            if (dw_master.GetItemString(1, "xccy") == "N") {
                return;
            }
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "jyd";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);

            iw_Wldw_Select.SetData("hy_jyd");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();


        }
        if (dwoName == "sc_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "sc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_sc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

        if (dwoName == "cyd_t") {
            if (dw_master.GetItemString(1, "hgcyd_bz") != "Y") {
                return;
            }
            var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz");
            if (hgcyd_bz == "Y") {
                if (iw_Wldw_Select == null)
                    iw_Wldw_Select = new W_Wldw_Select();
                khlx = "hgcyd";
                var ywy = requestor.GetParm("userid");
                var ShareMode = requestor.GetParm("ShareMode");
                var Dlwtf = requestor.GetParm("Dlwtf");

                iw_Wldw_Select.SetDataWindow(dw_master);
                iw_Wldw_Select.SetData("thwljh_hgcyd");
                iw_Wldw_Select.SetRow(1);
                requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);

                dw_master.AcceptText();

                var ywbh = dw_master.GetItemString(1, "ywbh");
                var cydbm = dw_master.GetItemString(1, "yw_hddz_cydbm");
                var cyd = dw_master.GetItemString(1, "yw_hddz_cyd");
                var cydjc = dw_master.GetItemString(1, "yw_hddz_cydjc");
                var cydpym = dw_master.GetItemString(1, "yw_hddz_cydpym");

                QsWebSoft.PubMethod.UpdateThwljhHgcyd(ywbh, cydbm, cyd, cydjc, cydpym);

                dw_master.SetFocus();
            }
        }

        //堆场名称选择
        if (dwoName == "dc_mc_t") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "dc";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("hy_dc");
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_master.SetFocus();
        }

    }
    //#endregion

    //#region dw_master ItemChanged
    this.dw_master_ItemChanged = function (row, dwoName, data) {

        if (dwoName == "wbbb") {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd(data).value;
            if (zusdhl == null || zusdhl == 0) {
                alert("系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!");
            }

            dw_master.SetItem(1, "zmyhl", zusdhl);
            self.SetZje();
        }

        if (dwoName == "zydl") {
            if (data == "代理") {
                dw_master.SetItem(1, "jydwbm", "admin0003");
                dw_master.SetItem(1, 'jydwmc', "上海欧恒进出口有限公司");
                dw_master.SetItem(1, 'jydwpym', "shohjckyxgs");
            }
            if (data == "自营") {
                var shdwbm = dw_master.GetItemString(1, "shdwbm");
                var shdwmc = dw_master.GetItemString(1, "shdwmc");
                var shdwpym = dw_master.GetItemString(1, "shdwpym");
                dw_master.SetItem(1, "jydwbm", shdwbm);
                dw_master.SetItem(1, 'jydwmc', shdwmc);
                dw_master.SetItem(1, 'jydwpym', shdwpym);
            }

        }

        if (dwoName == "ysfs") {
            //更新行号
            for (row = dw_jzxxx.RowCount(); row > 0; row--) {
                dw_jzxxx.SetItem(row, "ysfs", data);
                if (data == "海运") {
                    dw_jzxxx.SetItem(row, "tpxx", "");
                }
                if (data == "空运") {
                    dw_jzxxx.SetItem(row, "jzxh", "");
                    dw_jzxxx.SetItem(row, "xx", "");
                    dw_jzxxx.SetItem(row, "xl", "");
                }
            }

        }

        //如果是否有运费打勾，价格方式变为FOB
        if (dwoName == "sfyyf") {
            if (data == "Y") {
                dw_master.SetItem(1, "jgfs", "FOB")
            }
        }

 


        if (dwoName == "hgcyd_bz") {
            if (data == "Y") {
                var gq_bz = dw_master.GetItemString(1, "gq_bz")
                var hgcyd_sj = "";
                var hgcyd_cp = "";
                var hgcyd_sjlxfs = ""
                if (gq_bz == "Y") {
                    hgcyd_sj = dw_master.GetItemString(1, "hgcyd_sj")
                    hgcyd_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                    hgcyd_cp = dw_master.GetItemString(1, "hgcyd_cp")
                }
                dw_master.SetItem(1, "hgcyd_sj", hgcyd_sj)
                dw_master.SetItem(1, "hgcyd_cp", hgcyd_cp)
                dw_master.SetItem(1, "hgcyd_sjlxfs", hgcyd_sjlxfs)
            } else {
                dw_master.SetItem(1, "hgcyd_sj", "")
                dw_master.SetItem(1, "hgcyd_cp", "")
                dw_master.SetItem(1, "hgcyd_sjlxfs", "")
                dw_master.SetItem(1, 'yw_hddz_cydbm', null);
                dw_master.SetItem(1, 'yw_hddz_cyd', null);
                dw_master.SetItem(1, 'yw_hddz_cydjc', null);
                dw_master.SetItem(1, 'yw_hddz_cydpym', null);
                ///                
                var hgcyd_rwbh = dw_master.GetItemString(1, "hgcyd_rwbh");
                var hgcyd_c_rwbh = dw_master.GetItemString(1, "hgcyd_rwbh");
                if (hgcyd_rwbh.length > 1 || hgcyd_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "海关查验点任务已经下达，请及时去修改！")
                }
                ///

            }
        }



        if (dwoName == "jyd_bz") {
            if (data == "Y") {
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")
                var jyd_sj = "";
                var jyd_cp = "";
                var jyd_sjlxfs = ""
                if (hgcyd_bz == "Y") {
                    jyd_sj = dw_master.GetItemString(1, "hgcyd_sj")
                    jyd_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                    jyd_cp = dw_master.GetItemString(1, "hgcyd_cp")
                }
                else if (gq_bz = "Y") {
                    jyd_sj = dw_master.GetItemString(1, "gq_sj")
                    jyd_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                    jyd_cp = dw_master.GetItemString(1, "gq_cp")
                }
                dw_master.SetItem(1, "jyd_sj", jyd_sj)
                dw_master.SetItem(1, "jyd_cp", jyd_cp)
                dw_master.SetItem(1, "jyd_sjlxfs", jyd_sjlxfs)
            } else {
                dw_master.SetItem(1, "jyd_bm", "")
                dw_master.SetItem(1, "jyd_mc", "")
                dw_master.SetItem(1, "jyd_jc", "")
                dw_master.SetItem(1, "jyd_pym", "")
                dw_master.SetItem(1, "jyd_sj", "")
                dw_master.SetItem(1, "jyd_cp", "")
                dw_master.SetItem(1, "jyd_sjlxfs", "")

                ///                
                var jyd_rwbh = dw_master.GetItemString(1, "jyd_rwbh");
                var jyd_c_rwbh = dw_master.GetItemString(1, "jyd_c_rwbh");
                if (jyd_rwbh.length > 1 || jyd_c_rwbh.length > 1) {
                    requestor.MessageBox("提示","检疫点物流任务已经下达，请及时去修改！")
                }                
                ///

            }
        }


        //如果非市场物流选择后 默认取对应上面的收获人和物流信息

        if (dwoName == "zjfscwld_bz") {
            if (data == "Y") {
                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "zjfscwld_shrbm", sjshrbm)
                dw_master.SetItem(1, "zjfscwld_shrmc", sjshrmc)
                dw_master.SetItem(1, "zjfscwld_zyxx", zyxx)

                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var zjfscwld_sj = "";
                var zjfscwld_cp = "";
                var zjfscwld_sjlxfs = ""

                if (jyd_bz == "Y") {
                    zjfscwld_sj = dw_master.GetItemString(1, "jyd_sj")
                    zjfscwld_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                    zjfscwld_cp = dw_master.GetItemString(1, "jyd_cp")
                }
                else if (hgcyd_bz == "Y") {
                    zjfscwld_sj = dw_master.GetItemString(1, "hgcyd_sj")
                    zjfscwld_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                    zjfscwld_cp = dw_master.GetItemString(1, "hgcyd_cp")
                }
                else if (gq_bz = "Y") {
                    zjfscwld_sj = dw_master.GetItemString(1, "gq_sj")
                    zjfscwld_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                    zjfscwld_cp = dw_master.GetItemString(1, "gq_cp")
                }
                dw_master.SetItem(1, "zjfscwld_sj", zjfscwld_sj)
                dw_master.SetItem(1, "zjfscwld_cp", zjfscwld_cp)
                dw_master.SetItem(1, "zjfscwld_sjlxfs", zjfscwld_sjlxfs)

//                dw_master.SetItem(1, "sc_bz", "")
//                dw_master.SetItem(1, "sc_sj", "")
//                dw_master.SetItem(1, "sc_sjlxfs", "")
//                dw_master.SetItem(1, "sc_cp", "")
//                dw_master.SetItem(1, "sc_bm", "")
//                dw_master.SetItem(1, "sc_mc", "")
//                dw_master.SetItem(1, "sc_jc", "")
//                dw_master.SetItem(1, "sc_pym", "")
//                dw_master.SetItem(1, "sc_lgfs", "")


            } else {
                dw_master.SetItem(1, "zjfscwld_shrbm", "")
                dw_master.SetItem(1, "zjfscwld_shrmc", "")
                dw_master.SetItem(1, "zjfscwld_zyxx", "")
                dw_master.SetItem(1, "zjfscwld_sj", "")
                dw_master.SetItem(1, "zjfscwld_cp", "")
                dw_master.SetItem(1, "zjfscwld_sjlxfs", "")
                ///                
                var zjfscwld_rwbh = dw_master.GetItemString(1, "zjfscwld_rwbh");
                var zjfscwld_c_rwbh = dw_master.GetItemString(1, "zjfscwld_c_rwbh");
                if (zjfscwld_rwbh.length > 1 || zjfscwld_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地1任务已经下达，请及时去修改！")
                }
                ///
            }
        }
        if (dwoName == "sc_bz") {

            if (data == "Y") {
                //             

            } else {
                dw_master.SetItem(1, "sc_bm", "")
                dw_master.SetItem(1, "sc_mc", "")
                dw_master.SetItem(1, "sc_jc", "")
                dw_master.SetItem(1, "sc_pym", "")
                dw_master.SetItem(1, "sc_lgfs", "")
                dw_master.SetItem(1, "jschfscwld_bz", "N")
                ///                
                var sc_rwbh = dw_master.GetItemString(1, "sc_rwbh");
                var sc_c_rwbh = dw_master.GetItemString(1, "sc_c_rwbh");
                if (sc_rwbh.length > 1 || sc_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "市场任务已经下达，请及时去修改！")
                }
                ///
            }
            dw_master.SetItem(1, "sc_sj", "")
            dw_master.SetItem(1, "sc_cp", "")
            dw_master.SetItem(1, "sc_sjlxfs", "")

            dw_master.SetItem(1, "jschfscwld_sj", "")
            dw_master.SetItem(1, "jschfscwld_cp", "")
            dw_master.SetItem(1, "jschfscwld_sjlxfs", "")
        }

        if (dwoName == "jschfscwld_bz") {
            if (data == "Y") {
                var sc_bz = dw_master.GetItemString(1, "sc_bz")
                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "jschfscwld_shrbm", sjshrbm)
                dw_master.SetItem(1, "jschfscwld_shrmc", sjshrmc)
                dw_master.SetItem(1, "jschfscwld_zyxx", zyxx)


                var jschfscwld_sj = ""
                var jschfscwld_cp = ""
                var jschfscwld_sjlxfs = ""
                if (sc_bz == "Y") {
                    jschfscwld_sj = dw_master.GetItemString(1, "sc_sj")
                    jschfscwld_sjlxfs = dw_master.GetItemString(1, "sc_sjlxfs")
                    jschfscwld_cp = dw_master.GetItemString(1, "sc_cp")
                } else
                    if (jyd_bz == "Y") {
                        jschfscwld_sj = dw_master.GetItemString(1, "jyd_sj")
                        jschfscwld_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                        jschfscwld_cp = dw_master.GetItemString(1, "jyd_cp")
                    }
                    else if (hgcyd_bz == "Y") {
                        jschfscwld_sj = dw_master.GetItemString(1, "hgcyd_sj")
                        jschfscwld_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                        jschfscwld_cp = dw_master.GetItemString(1, "hgcyd_cp")
                    }
                    else if (gq_bz = "Y") {
                        jschfscwld_sj = dw_master.GetItemString(1, "gq_sj")
                        jschfscwld_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                        jschfscwld_cp = dw_master.GetItemString(1, "gq_cp")
                    }

                dw_master.SetItem(1, "jschfscwld_sj", jschfscwld_sj)
                dw_master.SetItem(1, "jschfscwld_cp", jschfscwld_cp)
                dw_master.SetItem(1, "jschfscwld_sjlxfs", jschfscwld_sjlxfs)

            } else {
                dw_master.SetItem(1, "jschfscwld_shrbm", "")
                dw_master.SetItem(1, "jschfscwld_shrmc", "")
                dw_master.SetItem(1, "jschfscwld_zyxx", "")
                dw_master.SetItem(1, "jschfscwld_sj", "")
                dw_master.SetItem(1, "jschfscwld_cp", "")
                dw_master.SetItem(1, "jschfscwld_sjlxfs", "")
                ///                
                var jschfscwld_rwbh = dw_master.GetItemString(1, "jschfscwld_rwbh");
                var jschfscwld_c_rwbh = dw_master.GetItemString(1, "jschfscwld_c_rwbh");
                if (jschfscwld_rwbh.length > 1 || jschfscwld_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地2任务已经下达，请及时去修改！")
                }
                ///
            }
        }

       
        if (dwoName == "fscwld3_bz") {
            if (data == "Y") {
                var sc_bz = dw_master.GetItemString(1, "sc_bz")
                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "fscwld3_shrbm", sjshrbm)
                dw_master.SetItem(1, "fscwld3_shrmc", sjshrmc)
                dw_master.SetItem(1, "fscwld3_zyxx", zyxx)


                var fscwld3_sj = ""
                var fscwld3_cp = ""
                var fscwld3_sjlxfs = ""
                if (sc_bz == "Y") {
                    fscwld3_sj = dw_master.GetItemString(1, "sc_sj")
                    fscwld3_sjlxfs = dw_master.GetItemString(1, "sc_sjlxfs")
                    fscwld3_cp = dw_master.GetItemString(1, "sc_cp")
                } else
                    if (jyd_bz == "Y") {
                        fscwld3_sj = dw_master.GetItemString(1, "jyd_sj")
                        fscwld3_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                        fscwld3_cp = dw_master.GetItemString(1, "jyd_cp")
                    }
                    else if (hgcyd_bz == "Y") {
                        fscwld3_sj = dw_master.GetItemString(1, "hgcyd_sj")
                        fscwld3_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                        fscwld3_cp = dw_master.GetItemString(1, "hgcyd_cp")
                    }
                    else if (gq_bz = "Y") {
                        fscwld3_sj = dw_master.GetItemString(1, "gq_sj")
                        fscwld3_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                        fscwld3_cp = dw_master.GetItemString(1, "gq_cp")
                    }

                dw_master.SetItem(1, "fscwld3_sj", fscwld3_sj)
                dw_master.SetItem(1, "fscwld3_cp", fscwld3_cp)
                dw_master.SetItem(1, "fscwld3_sjlxfs", fscwld3_sjlxfs)

            } else {
                dw_master.SetItem(1, "fscwld3_shrbm", "")
                dw_master.SetItem(1, "fscwld3_shrmc", "")
                dw_master.SetItem(1, "fscwld3_zyxx", "")
                dw_master.SetItem(1, "fscwld3_sj", "")
                dw_master.SetItem(1, "fscwld3_cp", "")
                dw_master.SetItem(1, "fscwld3_sjlxfs", "")
                ///                
                var fscwld3_rwbh = dw_master.GetItemString(1, "fscwld3_rwbh");
                var fscwld3_c_rwbh = dw_master.GetItemString(1, "fscwld3_c_rwbh");
                if (fscwld3_rwbh.length > 1 || fscwld3_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地3任务已经下达，请及时去修改！")
                }
                ///
            }
        }


        if (dwoName == "fscwld4_bz") {
            if (data == "Y") {
                var sc_bz = dw_master.GetItemString(1, "sc_bz")
                var jyd_bz = dw_master.GetItemString(1, "jyd_bz")
                var hgcyd_bz = dw_master.GetItemString(1, "hgcyd_bz")
                var gq_bz = dw_master.GetItemString(1, "gq_bz")

                var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
                var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
                var zyxx = dw_master.GetItemString(1, "zyxx");

                dw_master.SetItem(1, "fscwld4_shrbm", sjshrbm)
                dw_master.SetItem(1, "fscwld4_shrmc", sjshrmc)
                dw_master.SetItem(1, "fscwld4_zyxx", zyxx)


                var fscwld4_sj = ""
                var fscwld4_cp = ""
                var fscwld4_sjlxfs = ""
                if (sc_bz == "Y") {
                    fscwld4_sj = dw_master.GetItemString(1, "sc_sj")
                    fscwld4_sjlxfs = dw_master.GetItemString(1, "sc_sjlxfs")
                    fscwld4_cp = dw_master.GetItemString(1, "sc_cp")
                } else
                    if (jyd_bz == "Y") {
                        fscwld4_sj = dw_master.GetItemString(1, "jyd_sj")
                        fscwld4_sjlxfs = dw_master.GetItemString(1, "jyd_sjlxfs")
                        fscwld4_cp = dw_master.GetItemString(1, "jyd_cp")
                    }
                    else if (hgcyd_bz == "Y") {
                        fscwld4_sj = dw_master.GetItemString(1, "hgcyd_sj")
                        fscwld4_sjlxfs = dw_master.GetItemString(1, "hgcyd_sjlxfs")
                        fscwld4_cp = dw_master.GetItemString(1, "hgcyd_cp")
                    }
                    else if (gq_bz = "Y") {
                        fscwld4_sj = dw_master.GetItemString(1, "gq_sj")
                        fscwld4_sjlxfs = dw_master.GetItemString(1, "gq_sjlxfs")
                        fscwld4_cp = dw_master.GetItemString(1, "gq_cp")
                    }

                dw_master.SetItem(1, "fscwld4_sj", fscwld4_sj)
                dw_master.SetItem(1, "fscwld4_cp", fscwld4_cp)
                dw_master.SetItem(1, "fscwld4_sjlxfs", fscwld4_sjlxfs)

            } else {
                dw_master.SetItem(1, "fscwld4_shrbm", "")
                dw_master.SetItem(1, "fscwld4_shrmc", "")
                dw_master.SetItem(1, "fscwld4_zyxx", "")
                dw_master.SetItem(1, "fscwld4_sj", "")
                dw_master.SetItem(1, "fscwld4_cp", "")
                dw_master.SetItem(1, "fscwld4_sjlxfs", "")
                ///                
                var fscwld4_rwbh = dw_master.GetItemString(1, "fscwld4_rwbh");
                var fscwld4_c_rwbh = dw_master.GetItemString(1, "fscwld4_c_rwbh");
                if (fscwld4_rwbh.length > 1 || fscwld4_c_rwbh.length > 1) {
                    requestor.MessageBox("提示", "非市场物流地4任务已经下达，请及时去修改！")
                }
                ///
            }
        }


        if (dwoName == "dc_bz") {
            if (data == "Y") {

            } else {
                dw_master.SetItem(1, "fxdcbm", "")
                dw_master.SetItem(1, "fxdcmc", "")
                dw_master.SetItem(1, "fxdcjc", "")
                dw_master.SetItem(1, "fxdcpym", "")

            }
        }



    }
    //#endregion


    //#region dw_jzxxx dw_jzxxx_DoubleClicked
    this.dw_master_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        

    }
    //#endregion

    //#region dw_master EditChanged
    this.dw_master_EditChanged = function (row, dwoName, data) {

        dw_master.AcceptText();
        if (dwoName == "ckka") {
            dw_master.GetChild(dwoName, dwc);
            if (data != "") {
                dwc.Retrieve("%" + data + "%");
            }
            else {
                dwc.Retrieve("%");
            }
        }
    }
    //#endregion

    

//#region dw_master entertotab
    this.dw_master_EntertoTab = function (key, keyflags, dwo) {
//        var keycode = key;
//        var colname = dwo.GetColumnName();

    }
    
//#endregion

    //#region tabselect
    var lastdw = new DataWindow();
    this.Tab_Select = function () {
//        if (tab_1.GetSelectedTab() == 1) {
//            var bEditFlag = false;
//            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
//                bEditFlag = true;
//            }
//            else {
//                bEditFlag = false;
//            };
//            tb_1.SetVisible("btn_rowcopy", bEditFlag);
//            tb_1.SetVisible("btn_rownext", bEditFlag);
//            tb_1.SetVisible("btn_rowback", bEditFlag);
//            tb_1.SetVisible("btn_rowadd", bEditFlag);
//            tb_1.SetVisible("btn_rowdelete", bEditFlag);
//            tb_1.SetVisible("btn_rownext", bEditFlag);
//            dw_jzxxx.dw_GetFocus()
//        }
//        if (tab_1.GetSelectedTab() == 2) {
//            if (editMode == "new" || editMode == "open" || editMode == "copy" || editMode == "modify") {
//                bEditFlag = true;
//            }
//            else {
//                bEditFlag = false;
//            };
//            tb_1.SetVisible("btn_rowadd", false);
//            tb_1.SetVisible("btn_rowdelete", false);
//            tb_1.SetVisible("btn_rowcopy", false);
//            tb_1.SetVisible("btn_rownext", false);
//            tb_1.SetVisible("btn_rowback", false);
//        }

      
    };
    //#endregion


    //#region 插入商品
    this.InsertRow = function () {

        var row = dw_cmd.InsertRow(dw_cmd.GetRow());
        for (row1 = row; row1 <= dw_cmd.RowCount(); row1++) {
            dw_cmd.SetItem(row1, "dzxh", row1);
        };

        dw_cmd.ScrollToRow(row);
        dw_cmd.SetFocus();
    }
    //#endregion

    //#region 添加明细
    this.AddRow = function () {
        var row = dw_cmd.InsertRow(0);
        dw_cmd.SetItem(row, "dzxh", row);

        var sjshrbm = dw_master.GetItemString(1, "sjshrbm");
        var sjshrmc = dw_master.GetItemString(1, "sjshrmc");
        dw_cmd.SetItem(row, "sjshrbm", sjshrbm);
        dw_cmd.SetItem(row, "sjshrmc", sjshrmc);
        var ywbh = dw_master.GetItemString(1, "ywbh");
        var hddz_cxh = dw_master.GetItemNumber(1, "cxh");
        
        var zxshdz_count = ds_zxshdz.Retrieve(sjshrbm, ywbh, hddz_cxh);
        if (zxshdz_count > 0) {
            var sjshrlxr = ds_zxshdz.GetItemString(1, "sjshrlxr");
            var sjshrlxdh = ds_zxshdz.GetItemString(1, "sjshrlxdh");
            
            dw_cmd.SetItem(row, "sjshrlxr", sjshrlxr);
            dw_cmd.SetItem(row, "sjshrlxdh", sjshrlxdh);
           
            if (row == 1) {
                var dz_xx = ds_zxshdz.GetItemString(1, "dz_xx");
                var dz_sf = ds_zxshdz.GetItemString(1, "dz_sf");
                var dz_dq = ds_zxshdz.GetItemString(1, "dz_dq");
                var dz_lm = ds_zxshdz.GetItemString( 1, "dz_lm" );
                var type = ds_zxshdz.GetItemNumber( 1, "type" );
                var jd = ds_zxshdz.GetItemString( 1, "jd" );
                var wd = ds_zxshdz.GetItemString( 1, "wd" );
                var fw = ds_zxshdz.GetItemString( 1, "fw" );
                var points = ds_zxshdz.GetItemString( 1, "points" );
                dw_cmd.SetItem(row, "dz_xx", dz_xx);
                dw_cmd.SetItem(row, "dz_sf", dz_sf);
                dw_cmd.SetItem(row, "dz_dq", dz_dq);
                dw_cmd.SetItem( row, "dz_lm", dz_lm );
                dw_cmd.SetItem( row, "type", type );
                dw_cmd.SetItem( row, "jd", jd );
                dw_cmd.SetItem( row, "wd", wd );
                dw_cmd.SetItem( row, "fw", fw );
                dw_cmd.SetItem( row, "points", points );
//                dw_cmd.SetItem(row, "scmc", "辉展果蔬");
                }
        }
        dw_cmd.ScrollToRow(row);
        dw_cmd.SetFocus();

    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = dw_cmd.GetRow();
        if (row <= 0)
            return;

        var status = dw_cmd.GetItemStatus(row, 0, DWBUFFER.Primary);

        if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
            if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                dw_cmd.SetFocus();
                return;
            }
        }
        dw_cmd.DeleteRow(row);

    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        var row = dw_cmd.GetRow();
        if (row <= 0)
            return;
        dw_cmd.RowsCopy(row, row, DWBUFFER.Primary, dw_cmd, row + 1, DWBUFFER.Primary)
        dw_cmd.ScrollToRow(row + 1);

    }
    //#endregion

      //#region  dw_cmd_DoubleClicked
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        zdmc_wldz == "Y";

        if (dwoName == "sjshrmc") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "gncgs";
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            iw_Wldw_Select.SetDataWindow(dw_cmd);
            iw_Wldw_Select.SetData("hy_thwljh_sjshrmc");

            iw_Wldw_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select);
            dw_cmd.SetFocus();

        }


        if (dwoName == "sjshrlxr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            var Khbm = dw_cmd.GetItemString(Row, "sjshrbm")

            iw_Wldw_Lxr_Select.SetDataWindow(dw_cmd);
            iw_Wldw_Lxr_Select.SetData("thwljh_lxr_cmd");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_master.SetFocus();

        }
        if (dwoName == "yw_hddz_wldz_shr") {
            if (iw_Wldw_Lxr_Select == null)
                iw_Wldw_Lxr_Select = new W_Wldw_Lxr_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            var Khbm = dw_cmd.GetItemString(Row, "sjshrbm")

            iw_Wldw_Lxr_Select.SetDataWindow(dw_cmd);
            iw_Wldw_Lxr_Select.SetData("thwljh_shr_cmd");
            iw_Wldw_Lxr_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Lxr_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Wldw_Lxr_Select);
            dw_master.SetFocus();

        }


        if (dwoName == "dz_xx") {
            if (dw_cmd.GetItemString(Row, "sjshrbm") == "" || dw_cmd.GetItemString(Row, "sjshrbm") == null) {
                alert("实际收货人不能为空！");
                return;
            }
            if (iw_Wldw_Shdz_Select == null)
                iw_Wldw_Shdz_Select = new W_Wldw_Shdz_Select();
            var ywy = requestor.GetParm("userid");
            var ShareMode = requestor.GetParm("ShareMode");
            var Dlwtf = requestor.GetParm("Dlwtf");

            var Khbm = dw_cmd.GetItemString(Row, "sjshrbm")

            iw_Wldw_Shdz_Select.SetDataWindow(dw_cmd);
            iw_Wldw_Shdz_Select.SetData("thwljh_wlgz_dz");

            iw_Wldw_Shdz_Select.SetRow(Row);
            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Shdz_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&yw_khbm=" + Khbm + "&Khbm=" + Khbm, iw_Wldw_Shdz_Select);
            dw_master.SetFocus();
        }

        //        if (dwoName == "dz_sf" || dwoName == "dz_dq" || dwoName == "dz_lm") {
        //            if (iw_Sfdqlm_Select == null)
        //                iw_Sfdqlm_Select = new W_Sfdqlm_Select();
        //            var ywy = requestor.GetParm("userid");
        //            var ShareMode = requestor.GetParm("ShareMode");
        //            var Dlwtf = requestor.GetParm("Dlwtf");

        //            var Khbm = dw_master.GetItemString(1, "sjshrbm")

        //            iw_Sfdqlm_Select.SetDataWindow(dw_cmd);
        //            iw_Sfdqlm_Select.SetData("thwljh_wlgz_dz");
        //            iw_Sfdqlm_Select.SetRow(Row);

        //            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Sfdqlm_Select&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&Khbm=" + Khbm, iw_Sfdqlm_Select);
        //            dw_master.SetFocus();
        //        }
    }

    //#endregion

     //#region  dw_cmd_Clicked
    this.dw_cmd_Clicked = function (xPos, yPos, Row, dwoName) {
        zdmc_wldz = "Y";
        if (dwoName == "dz_dq") {
            var dz_sf = dw_cmd.GetItemString(Row, "dz_sf");

            dw_cmd.GetChild("dz_dq", dwc_dq);
            dwc_dq.SetFilter("");
            dwc_dq.Filter();

            dwc_dq.SetFilter("prv_name = '" + dz_sf + "'");
            dwc_dq.Filter();

        }

        if (dwoName == "dz_lm") {
            var dz_sf = dw_cmd.GetItemString(Row, "dz_sf");
            var dz_dq = dw_cmd.GetItemString(Row, "dz_dq");
            dw_cmd.GetChild("dz_lm", dwc_lm);
            dwc_lm.SetFilter("");
            dwc_lm.Filter();

            dwc_lm.SetFilter("prv_name = '" + dz_sf + "' and area_name = '" + dz_dq + "'");
            dwc_lm.Filter();

        }


        if (dwoName == "scmc") {
            dw_cmd.GetChild("scmc", dwc_sc);
            dwc_sc.Retrieve("%");
        }

    }
    //#endregion

     
      //#region dw_cmd  ItemChanged
    this.dw_cmd_ItemChanged = function (row, dwoName, data) {
        dw_cmd.AcceptText();
        zdmc_wldz = "Y";
        if (dwoName == "scmc") {
            var ll_retrieve = ds_sc.Retrieve(data);
            if (ll_retrieve > 0) {
                var road_name = ds_sc.GetItemString(ll_retrieve, "road_name");
                var area_name = ds_sc.GetItemString(ll_retrieve, "area_name");
                var prv_name = ds_sc.GetItemString(ll_retrieve, "prv_name");

                dw_cmd.SetItem(row, "dz_sf", prv_name);
                dw_cmd.SetItem(row, "dz_dq", area_name);
                dw_cmd.SetItem(row, "dz_lm", road_name);

                var scmc = dw_cmd.GetItemString(row, "scmc");
                var sfsc = dw_cmd.Find("scmc like '%辉展%'", 1, dw_cmd.RowCount());
                if (sfsc == 1) {
                    dw_master.SetItem(1, "sc_bz", "Y");
                }
            }
        }

        if (dwoName == "sjshrlxdh") {
            var ifModify = dw_cmd.GetItemNumber(row, "ifmodify");
            if (ifModify > 0) {
                ifModify += 1;
            }
            dw_cmd.SetItem(row, "ifmodify", ifModify);
        }
    }
    //#endregion


    //#region 同步生鲜港
    this.Tbsxg = function () {
        var ywbh = dw_master.GetItemString(1, "ywbh");
        var hddz_cxh = dw_master.GetItemNumber(1, "cxh");
        //执行删除的WebService       
        webReq.SetFunctionID(requestor.GetFunctionID());

        webReq.Invoke("Tbsxg", "ywbh=" + ywbh + "&hddz_cxh=" + hddz_cxh.toString() + "&zdmc_wldz=" + zdmc_wldz);

        if (webReq.StatusCode() == 200) {
            webReq.ResponseText();
            //            var num = QsWebSoft.PubMethod.UpdateTbsxgbz(fph, "Y").value;
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }
    //#endregion


}





