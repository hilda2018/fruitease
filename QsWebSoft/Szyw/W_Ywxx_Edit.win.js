﻿///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Ywxx_Edit() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_spxx= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var dw_log= new DataWindow( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ContextMenuStrip2= new ContextMenu( requestor );
	 var ContextMenuStrip3= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_jzxxx= new DataStore( requestor );
	 var ds_spxx= new DataStore( requestor );
	 var ds_jdr= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_spxx == null ) dw_spxx= new DataWindow( requestor );
		 dw_spxx.Attach( win.Control( "dw_spxx") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ContextMenuStrip2 == null ) ContextMenuStrip2= new ContextMenu( requestor );
		 ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2") ); 
		 if(ContextMenuStrip3 == null ) ContextMenuStrip3= new ContextMenu( requestor );
		 ContextMenuStrip3.Attach( win.Control( "ContextMenuStrip3") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_jzxxx == null ) ds_jzxxx= new DataStore( requestor );
		 ds_jzxxx.Attach( win.Control( "ds_jzxxx") ); 
		 if(ds_spxx == null ) ds_spxx= new DataStore( requestor );
		 ds_spxx.Attach( win.Control( "ds_spxx") ); 
		 if(ds_jdr == null ) ds_jdr= new DataStore( requestor );
		 ds_jdr.Attach( win.Control( "ds_jdr") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_spxx_Clicked)=="function") 
			 win.AttachEvent("dw_spxx","Clicked",self.dw_spxx_Clicked); 

		 if(typeof(self.dw_spxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_spxx","DoubleClicked",self.dw_spxx_DoubleClicked); 

		 if(typeof(self.dw_spxx_EditChanged)=="function") 
			 win.AttachEvent("dw_spxx","EditChanged",self.dw_spxx_EditChanged); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_spxx","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_spxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_spxx","ItemChanged",self.dw_spxx_ItemChanged); 

		 if(typeof(self.RbuttonDown_spxx)=="function") 
			 win.AttachEvent("dw_spxx","RButtonDown",self.RbuttonDown_spxx); 

		 if(typeof(self.dw_spxx_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_spxx","RowFocusChanged",self.dw_spxx_RowFocusChanged); 

		 if(typeof(self.dw_master_ButtonClicked)=="function") 
			 win.AttachEvent("dw_master","ButtonClicked",self.dw_master_ButtonClicked); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_master_EditChanged)=="function") 
			 win.AttachEvent("dw_master","EditChanged",self.dw_master_EditChanged); 

		 if(typeof(self.dw_master_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_master_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_master","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_master_RbuttonDown)=="function") 
			 win.AttachEvent("dw_master","RButtonDown",self.dw_master_RbuttonDown); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.AddRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.AddRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowinsert","Clicked",self.InsertRow); 

		 if(typeof(self.RowCopy)=="function") 
			 win.AttachEvent("btn_rowcopy","Clicked",self.RowCopy); 

		 if(typeof(self.dw_cmd_RowNext)=="function") 
			 win.AttachEvent("btn_rownext","Clicked",self.dw_cmd_RowNext); 

		 if(typeof(self.dw_cmd_RowBack)=="function") 
			 win.AttachEvent("btn_rowback","Clicked",self.dw_cmd_RowBack); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.dw_jzxxx_Clicked)=="function") 
			 win.AttachEvent("dw_jzxxx","Clicked",self.dw_jzxxx_Clicked); 

		 if(typeof(self.dw_jzxxx_DoubleClicked)=="function") 
			 win.AttachEvent("dw_jzxxx","DoubleClicked",self.dw_jzxxx_DoubleClicked); 

		 if(typeof(self.dw_jzxxx_EditChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","EditChanged",self.dw_jzxxx_EditChanged); 

		 if(typeof(self.dw_jzxxx_GetFocus)=="function") 
			 win.AttachEvent("dw_jzxxx","GetFocus",self.dw_jzxxx_GetFocus); 

		 if(typeof(self.dw_jzxxx_ItemChanged)=="function") 
			 win.AttachEvent("dw_jzxxx","ItemChanged",self.dw_jzxxx_ItemChanged); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_jzxxx","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_6","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_spxx)=="function") 
			 win.AttachEvent("m_8","Clicked",self.CopyCol_spxx); 

		 if(typeof(self.Recover_spxx)=="function") 
			 win.AttachEvent("m_5","Clicked",self.Recover_spxx); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("m_13","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol_zzxx)=="function") 
			 win.AttachEvent("m_15","Clicked",self.CopyCol_zzxx); 

		 if(typeof(self.Recover_zzxx)=="function") 
			 win.AttachEvent("m_12","Clicked",self.Recover_zzxx); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_spxx.Detach(); dw_spxx=null; 
		 dw_master.Detach(); dw_master=null; 
		 tb_1.Detach(); tb_1=null; 
		 dw_log.Detach(); dw_log=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ContextMenuStrip2.Detach(); ContextMenuStrip2=null; 
		 ContextMenuStrip3.Detach(); ContextMenuStrip3=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_jzxxx.Detach(); ds_jzxxx=null; 
		 ds_spxx.Detach(); ds_spxx=null; 
		 ds_jdr.Detach(); ds_jdr=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
    var editMode = "";
    var iw_Commodity_Select = null;
    var iw_Eport_Select = null;
    var iw_Country_Select = null;
    var iw_Jnhyd_Select = null;
    var iw_Dlxy_Select = null;
    var iw_Wldw_Select_Sz = null;
    var iw_Mxd_Select = null;
    var iw_Hddz_Dlxy_Select = null;
    var iw_Country_Select = null;
    var iw_RqTime_Select = null;
    var dwc = new DataWindowChild();
                                                         
    var iw_Wldw_Lxr_Select = null;
    var iw_Wldw_Shdz_Select = null;
    var iw_Wldw_Dz_Select = null;
 
     
    var result = "";
    var zdmc = "";
    var zdmc_jzxxx = "N";
 

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Szyw_Ywxx.ashx");

    
    
    //#endregion

    //#region 设置窗口是否可编辑
    this.SetEditMode = function (newMode) {
        editMode = newMode;
        var bEditFlag = false;
        if ( editMode == "new" || editMode == "open" || editMode == "reopen" || editMode == "copy" || editMode == "modify" )
        {
            bEditFlag = true;
        }
        else {
            bEditFlag = false;
        };
       
        if (bEditFlag) {
            dw_master.Modify("DataWindow.Readonly=no");
            dw_jzxxx.Modify("DataWindow.Readonly=no");
            dw_spxx.Modify("DataWindow.Readonly=no");
           
        }
        else {
            dw_master.Modify("DataWindow.Readonly=yes");
            dw_jzxxx.Modify("DataWindow.Readonly=yes");
            dw_spxx.Modify("DataWindow.Readonly=yes");
            
        }
    };
    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
        dw_master.SetFocus();
      
        var operation = requestor.GetParm("operation");
        if (operation == "new" || operation == "copy" || operation == "open" || operation == "modify") {
            if (operation == "new") {

                self.Add();
                self.SetEditMode("new");
            }
            if (operation == "copy") {
                zdmc_jzxxx = "Y";
                self.Copy();
                self.SetEditMode("copy");
                self.Save();
                self.SetEditMode("open");
                dw_master.Modify("id.Tabsequence=0");
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
               
    };
    //#endregion

    //#region 新建
    this.Add = function ()
    {
        dw_master.Reset();
        dw_master.InsertRow( 0 );
        dw_jzxxx.InsertRow( 0 );
        var userid = requestor.GetParm( "userid" );
        var bm = requestor.GetParm( "bm" );
        var Dlwtf = requestor.GetParm( "Dlwtf" );
        var userip = requestor.GetParm( "userip" );
        var sfdj = requestor.GetParm( "sfdj" );
        var sfdjbm = requestor.GetParm( "sfdjbm" );
        var zsbh = requestor.GetParm( "zsbh" );
        var zsmc = requestor.GetParm( "zsmc" );
        var date = new Date();
        var arrayobj = new Array( 4 );
        arrayobj = QsWebSoft.PubMethod.GetCompanyImformationbyWtf( Dlwtf ).value;
        if ( arrayobj == null )
        {
            var cname = "";
            var ename = "";
            var eaddr = "";
            var tt_no = "";
            var address = "";
            var tel = "";
            var fax = "";
            var sh = "";
            var hgdm = "";
            var khyh = "";
            var yhzh = "";
        }
        else
        {
            if ( arrayobj.length == 0 )
            {
                var cname = "";
                var ename = "";
                var eaddr = "";
                var tt_no = "";
                var address = "";
                var tel = "";
                var fax = "";
                var sh = "";
                var hgdm = "";
                var khyh = "";
                var yhzh = "";

            }
            else
            {
                cname = arrayobj[0];
                ename = arrayobj[1];
                eaddr = arrayobj[2];
                tt_no = arrayobj[3];
                address = arrayobj[4];
                tel = arrayobj[5];
                fax = arrayobj[6];
                sh = arrayobj[7];
                hgdm = arrayobj[8];
                khyh = arrayobj[9];
                yhzh = arrayobj[10];
            }
        }

        var ywyobj = new Array( 3 );
        ywyobj = QsWebSoft.PubMethod.GetYwybyUserid( userid ).value;
        if ( ywyobj == null )
        {
            var ywy = "";
            var bm = "";
            var ssbm = "";
        }
        else
        {
            if ( ywyobj.length == 0 )
            {
                var ywy = "";
                var bm = "";
                var ssbm = "";
            }
            else
            {
                ywy = ywyobj[0];
                bm = ywyobj[1];
                ssbm = ywyobj[2];
            }
        }

        var Dlwtf = requestor.GetParm( "Dlwtf" );
        var Dlxyh = null;
        Dlxyh = QsWebSoft.PubMethod.GetDlxyhImformationbyUserid( Dlwtf ).value;
       
        dw_master.SetItem( 1, 'zbr', userid );
        dw_master.SetItem( 1, 'ssbm', ssbm );
        dw_master.SetItem( 1, 'jcgzry', userid );
        dw_master.SetItem( 1, 'sdry', userid );
        dw_master.SetItem( 1, 'dlwtf', Dlwtf );
        self.SetEditMode( "new" );

        var zmyhl = QsWebSoft.PubMethod.Wb2Usd( "USD" ).value;
        dw_master.SetItem( 1, "wbbb", "USD" )
        dw_master.SetItem( 1, "zmyhl", zmyhl )


    }
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_GetFocus = function ( sender )
    {
        lastdw.Attach( sender );
    };
    //#endregion


    //#region 获得数据窗口的焦点
    var lastdw = new DataWindow();
    this.dw_jzxxx_GetFocus = function ( sender )
    {
        lastdw.Attach( sender );
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
        dw_jzxxx.AcceptText();
        dw_spxx.AcceptText();
        
        if ((dw_master.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_jzxxx.ModifiedCount() + dw_spxx.DeletedCount() + dw_spxx.ModifiedCount()) > 0 ) {
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

        if ( dw_jzxxx.AcceptText() != 1 )
            return;

        if ( dw_spxx.AcceptText() != 1 )
            return;


        if ( ( dw_master.ModifiedCount() + dw_jzxxx.ModifiedCount() + dw_jzxxx.DeletedCount() + dw_spxx.ModifiedCount() + dw_spxx.DeletedCount() ) <= 0 )
        {
            alert( "没有数据需要保存!" );
            return;
        }


        if ( dw_master.GetItemString( 1, "ysfs" ) == "" || dw_master.GetItemString( 1, "ysfs" ) == null )
        {
            requestor.MessageBox( "提示", "请输入运输方式!" );
            return;

        }



        var row = dw_master.GetRow();
        var ywbh = dw_master.GetItemString( 1, "ywbh" );
        dw_master.SetItem( row, "ywbh", ywbh );

        //保存放行时间
        var bgsj = dw_master.GetItemDate( 1, "bgsj" );
        var date = new Date( bgsj );
        if ( date != null && date.getFullYear() > "1900" )
        {
            dw_master.SetItem( 1, "hgfxsj", bgsj );
        }

        //更新行号
        var hz_jzxh = dw_master.GetItemString( 1, "hz_jzxh" );
        var ysfs = dw_master.GetItemString( 1, "ysfs" )

        var ztdh = dw_master.GetItemString( 1, "ztdh" );

//        var yjkgsj = dw_master.GetItemDate( 1, "yjkgsj" );
//        dw_master.SetItem( 1, "sjkgsj", yjkgsj );

        for ( row = dw_jzxxx.RowCount(); row > 0; row-- )
        {
            dw_jzxxx.SetItem( row, "cxh", row );
            dw_jzxxx.SetItem( row, "ywbh", ywbh );
            dw_jzxxx.SetItem( row, "jzxh", hz_jzxh );
            dw_jzxxx.SetItem( row, "ysfs", ysfs );
        }

        if ( ysfs == "海运" )
        {
            dw_master.SetItem( 1, "jzxsl", dw_jzxxx.RowCount() );
        } else
        {
            dw_master.SetItem( 1, "jzxsl", 0 );
        };

        var hz_spmc = "";
        var hz_spywmc = ""

        for ( row = dw_spxx.RowCount(); row > 0; row-- )
        {
            dw_spxx.SetItem( row, "cxh", row );
            dw_spxx.SetItem( row, "ywbh", ywbh );
            if ( row == dw_spxx.RowCount() )
            {
                hz_spmc = dw_spxx.GetItemString( row, "spmc" );
                hz_spywmc = dw_spxx.GetItemString( row, "spmc_yw" );

            }
            else
            {
                var spmc = dw_spxx.GetItemString( row, "spmc" );
                var spmc_yw = dw_spxx.GetItemString( row, "spmc_yw" );
                if ( hz_spmc.indexOf( spmc ) < 0 )
                {
                    hz_spmc = hz_spmc + "," + dw_spxx.GetItemString( row, "spmc" )
                    hz_spywmc = hz_spywmc + "," + dw_spxx.GetItemString( row, "spmc_yw" )
                }

            };

        };
        dw_master.SetItem( 1, "hz_spmc", hz_spmc )
        dw_master.SetItem( 1, "hz_spywmc", hz_spywmc )

        if ( dw_spxx.RowCount() > 0 )
        {
            var hz_sl = dw_spxx.GetItemNumber( 1, "jlsl_sum" );
            dw_master.SetItem( 1, "hz_sl", hz_sl )
        }


        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var dw_spxx_data = dw_spxx.GetChanges();

        if ( dw_master_data == "" && dw_jzxxx_data == "" && dw_spxx_data == "" )
            return;

        //数据同步生鲜港
        if ( ( dw_master.GetItemString( 1, "ysfs" ) == "海运" && dw_jzxxx.GetItemString( 1, "jzxh" ) != "" && dw_jzxxx.GetItemString( 1, "jzxh" ) != null ) || dw_master.GetItemString( 1, "ysfs" ) != "海运" )
        {
            if ( editMode == "new" || editMode == "copy" )
            {
                var ywbh = dw_master.GetItemString( i, "ywbh" );
                var row = dw_log.InsertRow( 0 );
                var serialNumber = dw_log.GetItemString( row, "eid_max" );

                dw_log.SetItem( row, "eid", serialNumber );
                dw_log.SetItem( row, "tablename", "yw_hddz" );
                var mainid = dw_log.GetItemString( row, "mainid" );
                if ( mainid == null || mainid == "" )
                {
                    dw_log.SetItem( row, "mainid", ywbh );
                };
                dw_log.ScrollToRow( row );
            } else if ( zdmc != null && zdmc != "" )
            {
                var ywbh = dw_master.GetItemString( i, "ywbh" );
                var row = dw_log.InsertRow( 0 );

                var serialNumber = dw_log.GetItemString( row, "eid_max" )

                dw_log.SetItem( row, "eid", serialNumber );
                dw_log.SetItem( row, "tablename", "yw_hddz" );
                zdmc = zdmc + ",hz_jzxh,zxs,hz_spmc,hgfxsj";
                dw_log.SetItem( row, "changecols", zdmc );
                var mainid = dw_log.GetItemString( row, "mainid" );
                if ( mainid == null || mainid == "" )
                {
                    dw_log.SetItem( row, "mainid", ywbh );
                };
                dw_log.ScrollToRow( row );
            }
            setTimeout( function () { }, 10 );

            for ( var i = 1; i <= dw_jzxxx.RowCount(); i++ )
            {
                if ( dw_jzxxx.GetItemString( i, "jzxh" ) != "" && dw_jzxxx.GetItemString( i, "jzxh" ) != null )
                {
                    var ywbh = dw_jzxxx.GetItemString( i, "ywbh" );
                    var cxh = dw_jzxxx.GetItemNumber( i, "cxh" );
                    var row = dw_log.InsertRow( 0 );
                    //var maxNumber =  self.SerialNumber(log_num);
                    var serialNumber = dw_log.GetItemString( row, "eid_max" ) //"hyfx" + userid + yearMonDay + maxNumber;

                    dw_log.SetItem( row, "eid", serialNumber );
                    dw_log.SetItem( row, "tablename", "yw_hddz_jzxxx" );
                    dw_log.SetItem( row, "changecols", "" );
                    dw_log.SetItem( row, "mainid", ywbh );
                    dw_log.SetItem( row, "parameters", cxh.toString() );
                    dw_log.ScrollToRow( row );
                }
            }

        }


        zdmc = "";
        zdmc_jzxxx = "";
        dw_log.AcceptText();

        var dw_log_data = dw_log.GetChanges();

        //执行保存的WebService
        webReq.SetFunctionID( requestor.GetFunctionID() );
        webReq.Invoke( "Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&dw_spxx=" + dw_spxx_data + "&dw_log=" + dw_log_data + "&ywbh=" + ywbh + "&operation=" + editMode );


        if ( webReq.StatusCode() == 200 )
        {
            //服务器成功处理，返回单号
            ywbh = webReq.ResponseText();
            dw_master.SetItem( 1, "ywbh", ywbh );


            var hth = dw_master.GetItemString( 1, "hth" )
            if ( hth == "" || hth == null )
            {
                dw_master.SetItem( 1, "hth", ywbh )
            };

            for ( row = 1; row <= dw_jzxxx.RowCount(); row++ )
            {
                dw_jzxxx.SetItem( row, "ywbh", ywbh );
                dw_jzxxx.SetItem( row, "cxh", row );
            }

            for ( row = 1; row <= dw_spxx.RowCount(); row++ )
            {
                dw_spxx.SetItem( row, "ywbh", ywbh );
                dw_spxx.SetItem( row, "cxh", row );
            }

            dw_master.ResetUpdate();
            dw_jzxxx.ResetUpdate();
            dw_spxx.ResetUpdate();
            dw_log.ResetUpdate();
            self.SetEditMode( "open" );
            requestor.MessageBox( "提示", "数据保存成功!" );
            var userid = requestor.GetParm( "userid" );
            dw_master.Retrieve( ywbh );
            dw_jzxxx.Retrieve( ywbh );
            dw_spxx.Retrieve( ywbh );
            dw_master.Modify( "ywbh.Tabsequence=0" );

        }
        else
        {
            requestor.MessageBox( "提示", webReq.ResponseText(), ICON.StopSign );
            dw_master.SetFocus();
        }

    }
    //#endregion

    //#region 插入商品
    this.InsertRow = function () {
 
            if (iw_Commodity_Select == null)
                iw_Commodity_Select = new W_Commodity_Select();
            var ShareMode = requestor.GetParm("ShareMode");
            var ywy = requestor.GetParm("userid");
            var Dlwtf = requestor.GetParm("Dlwtf");
            row = dw_spxx.InsertRow(dw_spxx.GetRow());
            var dwo = dw_spxx.GetDataObject();

            iw_Commodity_Select.SetRow(row);
            iw_Commodity_Select.SetDwo(dwo);
            iw_Commodity_Select.SetDetailDW(dw_spxx);     
            iw_Commodity_Select.SetMaster(dw_master);
            iw_Commodity_Select.SetLx("insertrow");
            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);
 

    }
    //#endregion

    //#region 添加明细
    this.AddRow = function ()
    {
        dw_spxx.InsertRow( 0 );
        //                dw_spxx.AcceptText();
        //            if (iw_Commodity_Select == null)
        //                iw_Commodity_Select = new W_Commodity_Select();
        //            var ShareMode = requestor.GetParm("ShareMode");
        //            var ywy = requestor.GetParm("userid");
        //            var Dlwtf = requestor.GetParm("Dlwtf");
        //            var dwo = dw_spxx.GetDataObject();
        //            iw_Commodity_Select.SetDwo(dwo);
        //            iw_Commodity_Select.SetDetailDW(dw_spxx);
        //            iw_Commodity_Select.SetLx("addrow");      
        //            iw_Commodity_Select.SetMaster(dw_master);
        //            iw_Commodity_Select.SetRow(0);
        //            requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);


    }
    //#endregion

    //#region 删除商品
    this.DeleteRow = function () {
        var row = lastdw.GetRow();
        if (row <= 0)
            return;
        var ywbh = dw_master.GetItemString(1, "ywbh")
        if (ywbh = null && operation == "copy") {
            requestor.MessageBox("提示", "复制状态下，请先保存后再删除明细数据！", ICON.Information);
            lastdw.SetFocus();
            return;

        }

 

            var status = lastdw.GetItemStatus(row, 0, DWBUFFER.Primary);
            if (status == DWITEMSTATUS.DataModified || status == DWITEMSTATUS.NotModified) {
                if (requestor.MessageBox("提示", "是否确认删除当前明细记录?", ICON.Question, BUTTON.YesNo, 2) == 2) {
                    lastdw.SetFocus();
                    return;
                }
            }

            if (row > 0) {


                lastdw.DeleteRow(row);


            }


    }
    //#endregion

    //#region 复制商品
    this.RowCopy = function () {
        if (lastdw.GetName() == 'dw_jzxxx') {
            var row = dw_jzxxx.GetRow();
            if (row <= 0)
                return;
            dw_jzxxx.RowsCopy(row, row, DWBUFFER.Primary, dw_jzxxx, row + 1, DWBUFFER.Primary)
            dw_jzxxx.ScrollToRow(row + 1);
            dw_jzxxx.SetItem(row + 1, "contractcontainerid", "");
        }
        if (lastdw.GetName() == 'dw_spxx') {
            var row = dw_spxx.GetRow();
            if (row <= 0)
                return;

            dw_spxx.RowsCopy(row, row, DWBUFFER.Primary, dw_spxx, row + 1, DWBUFFER.Primary)
            dw_spxx.SetItem(row + 1, "sp_id", il_sp_id);

            dw_spxx.ScrollToRow(row + 1);
        }

    }
    //#endregion



    //#region dw_cmd弹出选择
    this.dw_cmd_DoubleClicked = function (xPos, yPos, Row, dwoName) {
        if (editMode == "show")
            return;
                    
    }
    //#endregion

  

    //#region 复制
    this.Copy = function () {
        var userid = requestor.GetParm("userid");
        var userip = requestor.GetParm("userip");
        var date = new Date();
        var mxq = null;
        dw_master.SetItem(1, "ywbh", "");
        dw_master.SetItem(1, "zbr", userid);
        dw_master.SetItem(1, "zbrq", date.getVarDate());
        var date_null = new Date("0000/00/00");
        dw_master.SetItem(1, "yjkgsj", dw_master.GetItemDate(1, 'fzyjkgsj'));
        dw_master.SetItem(1, "state", "新制");
        dw_master.SetItem(1, "hth", "");
        dw_master.SetItem(1, "beizhu", "");
        dw_master.SetItem(1, "sjkgsj", Date());
        dw_master.SetItem(1, "hz_jzxh", "");
        dw_master.SetItem(1, "hz_spmc", "");
        dw_master.SetItem(1, "hz_spywmc", "");  
        var ysfs = dw_master.GetItemString(1, "ysfs");
        dw_master.SetItem(1, "SupplierSellID", "");  



        for (row = dw_jzxxx.RowCount(); row > 0; row--) {
            dw_jzxxx.SetItem(row, "jzxh", "");     

            dw_jzxxx.SetItem(row, "sjshrbm", "");
            dw_jzxxx.SetItem(row, "sjshrmc", "");

            dw_jzxxx.SetItem(row, "lxr", "");
            dw_jzxxx.SetItem(row, "lxdh", "");
            dw_jzxxx.SetItem(row, "shdz", "");
            dw_jzxxx.SetItem(row, "zybz", "");
            dw_jzxxx.SetItem(row, "zyxx", "");

            dw_jzxxx.SetItem(row, "zjfscwld_shrbm", "");
            dw_jzxxx.SetItem(row, "zjfscwld_shrmc", "");
            dw_jzxxx.SetItem(row, "zjfscwld_zyxx", "");

            dw_jzxxx.SetItem(row, "jschfscwld_shrbm", "");
            dw_jzxxx.SetItem(row, "jschfscwld_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr2", "");
            dw_jzxxx.SetItem(row, "lxdh2", "");
            dw_jzxxx.SetItem(row, "jschfscwld_zyxx", "");

            dw_jzxxx.SetItem(row, "fscwld3_shrbm", "");
            dw_jzxxx.SetItem(row, "fscwld3_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr3", "");
            dw_jzxxx.SetItem(row, "lxdh3", "");
            dw_jzxxx.SetItem(row, "fscwld3_zyxx", "");

            dw_jzxxx.SetItem(row, "fscwld4_shrbm", "");
            dw_jzxxx.SetItem(row, "fscwld4_shrmc", "");
            dw_jzxxx.SetItem(row, "lxr4", "");
            dw_jzxxx.SetItem(row, "lxdh4", "");
            dw_jzxxx.SetItem(row, "fscwld4_zyxx", "");
            dw_jzxxx.SetItem(row, "fscwld4_zyxx", 0);
            dw_jzxxx.SetItem(row, "wlfyqr", "N");
            dw_jzxxx.SetItem(row, "htjhthsj_lb", "");

            dw_jzxxx.SetItem(row, "gjyf", "N");
            dw_jzxxx.SetItem(row, "jsdwqr", "N");

            dw_jzxxx.SetItem(row, "contractcontainerid", "");

        }

        self.SetEditMode("copy");
    }
    //#endregion





    //重写date属性
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1, //month 
            "d+": this.getDate(), //day 
            "h+": this.getHours(), //hour 
            "m+": this.getMinutes(), //minute 
            "s+": this.getSeconds(), //second 
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
            "S": this.getMilliseconds() //millisecond 
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }
    //#endregion



               

     //#region
     function Todate( num )
    { //Fri Oct 31 18:00:00 UTC+0800 2008
        num = num + "";
        var date = "";
        var month = new Array();
        month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jan"] = 6;
        month["Jun"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
        var week = new Array();
        week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
        str = num.split( " " );
        date = str[5] + "-";
        date = date + month[str[1]] + "-" + str[2];
        return date;
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_Clicked = function ( xPos, yPos, Row, dwoName )
    {

        if ( editMode == "show" )
            return;

        if ( dwoName == "hdgsbm_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "hdgs";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );

            iw_Wldw_Select.SetData( "hddz_hdgs" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "bxfbj,bxfb,b,bxfje";
            } else
            {
                zdmc = zdmc + ',' + "bxfbj,bxfb,b,bxfje";

            };
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();

        }

        if ( dwoName == "bggsbm_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "bggs";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "hddz_bggs" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "bggsbm,bggsmc,bggsjc,bggspym,sbdwdm";
            } else
            {
                zdmc = zdmc + ',' + "bggsbm,bggsmc,bggsjc,bggspym,sbdwdm";

            };

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
        }

        if ( dwoName == "bjgsbm_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "bjgs";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "hddz_bjgs" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "bjgsbm,bjgsmc,bjgsjc,bjgspym,bjgssjjgdm";
            } else
            {
                zdmc = zdmc + ',' + "bjgsbm,bjgsmc,bjgsjc,bjgspym,bjgssjjgdm";
            };
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
        }
             

        if ( dwoName == "khbm_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "wts";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            var zydl = dw_master.GetItemString( 1, "zydl" );     


            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "khbm,khmc,khjc,khpym";
            } else
            {
                zdmc = zdmc + ',' + "khbm,khmc,khjc,khpym";
            };




            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "hddz_kh_sz" );

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
             


        }


        if ( dwoName == "xskh_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "gncgs";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            var zydl = dw_master.GetItemString( 1, "zydl" );


            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "xskhbm,xskhmc,xskhjc,xskhpym";
            } else
            {
                zdmc = zdmc + ',' + "xskhbm,xskhmc,xskhjc,xskhpym";
            };




            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "ywxx_sxkh" );

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();



        }
        if ( dwoName == "hgdc_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "dc";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );


            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "hgdc";
            } else
            {
                zdmc = zdmc + ',' + "hgdc";
            };

            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "wlxx_hgdc" );

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();


        }

        if ( dwoName == "hdgs_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            jdr = "jdr";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "hddz_hdrjc" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "hdrbm,hdrmc,hdrjc,hdrpym";
            } else
            {
                zdmc = zdmc + ',' + "hdrbm,hdrmc,hdrjc,hdrpym";

            };
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + jdr, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
        }


        if ( dwoName == "shdwbm_t" )
        {
            if ( iw_Hddz_Dlxy_Select == null )
                iw_Hddz_Dlxy_Select = new W_Hddz_Dlxy_Select();
            iw_Hddz_Dlxy_Select.SetDataWindow( dw_master );
            var zydl = dw_master.GetItemString( 1, "zydl" );
            var zbrq = dw_master.GetItemDate( 1, "zbrq" );
            var zbrqstr = GMTToStr( zbrq );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";

            } else
            {
                zdmc = zdmc + ',' + "dlxyh,khbm,khmc,khjc,khpym,shdwbm,shdwmc,shdwjc,shdwpym,shdwdm,jydwbm,jydwmc,jydwjc,jydwpym,jydwdm,jydwsjjgdm";
            };


            if ( zydl == "代理" )
            {
                iw_Hddz_Dlxy_Select.SetData( "dlxyh_dl" );
            }
            else if ( zydl == "自营" )
            {
                iw_Hddz_Dlxy_Select.SetData( "dlxyh_zy" );
            }
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Hddz_Dlxy_Select&zbrq=" + zbrqstr, iw_Hddz_Dlxy_Select );
            dw_master.SetFocus();


        }



        
        if ( dwoName == "gwgysbm_t"  )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "gwgys";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "hddz_gwgys" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "gwgysbm,gwgysmc,gwgysjc,gwgyspym,zjsbm,zjsmc,zjsjc,zjspym,ycd";
            } else
            {
                zdmc = zdmc + ',' + "gwgysbm,gwgysmc,gwgysjc,gwgyspym,zjsbm,zjsmc,zjsjc,zjspym,ycd";
            };

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
        }



        if ( dwoName == "cyr_t" )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "cgsorhkgs";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "hddz_cyr" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "cyrbm,cyr,cyrjc,cyrpym";
            } else
            {
                zdmc = zdmc + ',' + "cyrbm,cyr,cyrjc,cyrpym";
            };
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
        }

        if ( dwoName == "zjs_t"   )
        {
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            khlx = "zjs";
            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "hddz_zjs" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "zjsbm,zjsmc,zjsjc,zjspym,mygb";
            } else
            {
                zdmc = zdmc + ',' + "zjsbm,zjsmc,zjsjc,zjspym,mygb";
            };

            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
        }

        if ( dwoName == "ycd_t" )
        {
            if ( iw_Country_Select == null )
                iw_Country_Select = new W_Country_Select();
            iw_Country_Select.SetDataWindow( dw_master );
            iw_Country_Select.SetData( "ywxx_ycd" );
            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "ycd,cyddm";
            } else
            {
                zdmc = zdmc + ',' + "ycd,cyddm";
            };
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Country_Select", iw_Country_Select );
            dw_master.SetFocus();

        }


        if ( dwoName == "mtxx_t" )
        {
            var ysfs = dw_master.GetItemString( 1, "ysfs" );
            if ( ysfs == "" || ysfs == null )
            {
                requestor.MessageBox( "提示", "请先选择运输方式！" )
                return
            }
            if ( iw_Wldw_Select_Sz == null )
                iw_Wldw_Select_Sz = new W_Wldw_Select_Sz();
            if ( ysfs == "海运" )
            {
                khlx = "hymt";
            } else
            {
                khlx = "mt"
            }

            //生鲜港 
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "mtxx";
            } else
            {
                zdmc = zdmc + ',' + "mtxx";
            };

            var ywy = requestor.GetParm( "userid" );
            var ShareMode = requestor.GetParm( "ShareMode" );
            var Dlwtf = requestor.GetParm( "Dlwtf" );
            iw_Wldw_Select_Sz.SetDataWindow( dw_master );
            iw_Wldw_Select_Sz.SetData( "ywxx_mtxx" );
            requestor.Open( "/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select_Sz&ShareMode=" + ShareMode + "&ywy=" + ywy + "&Dlwtf=" + Dlwtf + "&khlx=" + khlx, iw_Wldw_Select_Sz );
            dw_master.SetFocus();
        }




    }
    //#endregion

    //#region 
    function GMTToStr( time )
    {
        var date = new Date( time )
        var Str = date.getFullYear() + '-' +
        ( date.getMonth() + 1 ) + '-' +
        date.getDate() + ' ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds()
        return Str
    }
    //#region dw_master ItemChanged

    this.dw_spxx_EditChanged = function ( row, dwoName, data )
    {
        if ( dwoName == "spmc" )
        {
            dw_spxx.GetChild( "spmc", dwc );
            dwc.Retrieve( data );
        }
    }

    //#region dw_cmd弹出选择
    this.dw_spxx_DoubleClicked = function ( xPos, yPos, Row, dwoName )
    {
        if ( editMode == "show" )
            return;
        if ( dwoName == "spmc" )
        {
                    dw_spxx.AcceptText();
                if (iw_Commodity_Select == null)
                    iw_Commodity_Select = new W_Commodity_Select();
                var ShareMode = requestor.GetParm("ShareMode");
                var ywy = requestor.GetParm("userid");
                var Dlwtf = requestor.GetParm("Dlwtf");
                var dwo = dw_spxx.GetDataObject();
                iw_Commodity_Select.SetDwo(dwo);
                iw_Commodity_Select.SetDetailDW(dw_spxx);
                iw_Commodity_Select.SetLx( "setrow" );      
                iw_Commodity_Select.SetMaster(dw_master);
                iw_Commodity_Select.SetRow(0);
                requestor.Open("/LoadWindow.ashx?WinName=Commodity.W_Commodity_Select&ShareMode=" + ShareMode + '&ywy=' + ywy + '&Dlwtf=' + Dlwtf, iw_Commodity_Select);

        }
    }
    //#endregion

    //#region dw_master弹出选择
    this.dw_master_EditChanged = function ( row, dwoName, data )
    {
        if ( dwoName == "gwgysjc" )
        {
            dw_master.GetChild( "gwgysjc", dwc );
            dwc.Retrieve( data );
        }

        if ( dwoName == "khjc" )
        {
            dw_master.GetChild( "khjc", dwc );
            dwc.Retrieve( data );
        }

        if ( dwoName == "xskhjc" )
        {
            dw_master.GetChild( "xskhjc", dwc );
            dwc.Retrieve( data );
        }
        if ( dwoName == "jhdd" )
        {
            dw_master.GetChild( "jhdd", dwc );
            dwc.Retrieve( data );
        }

       

        if ( dwoName == "hgdc" )
        {
            dw_master.GetChild( "hgdc", dwc );
            dwc.Retrieve( data );
        }
    }
    //#endregion


    //#region
    this.dw_master_ItemChanged = function ( row, dwoName, data )
    {


        if ( zdmc == null || zdmc == "" )
        {
            zdmc = dwoName;
        } else
        {
            if ( zdmc.indexOf( dwoName ) < 1 )
            {
                zdmc = zdmc + ',' + dwoName;
            };
        };

        if ( dwoName == "gwgysjc" )
        {
            dw_master.GetChild( "gwgysjc", dwc );
            dwc.Retrieve( data );
            if ( dwc.Retrieve( data ) > 0 )
            {
                var gwgysbm = dwc.GetItemString( 1, "yw_khbm" );
                var gwgysmc = dwc.GetItemString( 1, "khmc_yw" );
                var gwgyspym = dwc.GetItemString( 1, "pym" );
                dw_master.SetItem( row, "gwgysbm", gwgysbm );
                dw_master.SetItem( row, "gwgysmc", gwgysmc );
                dw_master.SetItem( row, "gwgyspym", gwgyspym );
            } else
            {
                requestor.MessageBox( "提示", "你输入的单位不存在！" );
                return;
            }
        };

        if ( dwoName == "khjc" )
        {
            dw_master.GetChild( "khjc", dwc );
            if ( dwc.Retrieve( data ) > 0 )
            {
                var khbm = dwc.GetItemString( 1, "yw_khbm" );
                var khmc = dwc.GetItemString( 1, "khmc_yw" );
                var khpym = dwc.GetItemString( 1, "pym" );
                dw_master.SetItem( row, "khbm", gwgysbm );
                dw_master.SetItem( row, "khmc", gwgysmc );
                dw_master.SetItem( row, "khpym", khpym );

            } else
            {
                requestor.MessageBox( "提示", "你输入的单位不存在！" );
                return;
            }
        };

        if ( dwoName == "xskhjc" )
        {
            dw_master.GetChild( "xskhjc", dwc );
            if ( dwc.Retrieve( data ) > 0 )
            {
                var xskhbm = dwc.GetItemString( 1, "yw_khbm" );
                var xskhmc = dwc.GetItemString( 1, "khmc_yw" );
                var xskhpym = dwc.GetItemString( 1, "pym" );
                dw_master.SetItem( row, "xskhbm", xskhbm );
                dw_master.SetItem( row, "xskhmc", xskhmc );
                dw_master.SetItem( row, "xskhpym", xskhpym );
            } else
            {
                requestor.MessageBox( "提示", "你输入的单位不存在！" );
                return;
            }
        };

        if ( dwoName == "zje" )
        {
            //生鲜港
            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "zje";
            } else
            {
                if ( zdmc.indexOf( dwoName ) < 1 )
                {
                    zdmc = zdmc + ',' + "zje";
                };
            };
        }



        if ( dwoName == "wbbb" )
        {
            var zusdhl = QsWebSoft.PubMethod.Wb2Usd( data ).value;
            if ( zusdhl == null || zusdhl == 0 )
            {
                alert( "系统代码的货币汇率表中货币:" + data + " 折美元值为0或者该货币没录入,请检查后重新修改!" );
            }

            dw_master.SetItem( 1, "zmyhl", zusdhl );

        }



        if ( dwoName == "ysfs" )
        {
            //更新行号
            for ( row = dw_jzxxx.RowCount(); row > 0; row-- )
            {
                dw_jzxxx.SetItem( row, "ysfs", data );
                if ( data == "海运" )
                {
                    dw_jzxxx.SetItem( row, "tpxx", 0 );
                    dw_jzxxx.SetItem( row, "zhlx", "集装箱" );
                }
                if ( data == "空运" )
                {
                    dw_jzxxx.SetItem( row, "jzxh", "" );
                    dw_jzxxx.SetItem( row, "xx", "" );
                    dw_jzxxx.SetItem( row, "xl", "" );
                }
            }


        }


        if ( dwoName == "cm" || dwoName == "hcorhbh" )
        {

            if ( zdmc == null || zdmc == "" )
            {
                zdmc = "cm,hcorhbh";
            } else
            {
                if ( zdmc.indexOf( dwoName ) < 1 )
                {
                    zdmc = zdmc + ',' + "cm,hcorhbh";
                };
            };
        }

        if ( dwoName == "jhrq" )
        {
            dw_master.AcceptText()
            var ts = dw_master.GetItemNumber( 1, "jhrq_ts" )
            if ( ts > 15 )
            {
                requestor.MessageBox( "提示", "你输入的日期到当前日期为" + ts.toString() + "天，请核实确认！" );
            }
        }

    }
    //#endregion


            

    //#region dw_cmd RowNext
    this.dw_cmd_RowNext = function ( dragobject, row, dwo )
    {
        if ( lastdw.GetName() == 'dw_spxx' )
        {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if ( ll_row_from < ll_row_count )
            {
                ll_row_to = ll_row_from + 2;
            }
            else
            {
                ll_row_to = dw_cmd.RowCount();
            }


            if ( ll_row_to == ll_row_from )
            {
                return;
            }
            dw_spxx.SetRedraw( false );
            dw_spxx.RowsMove( ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary );
            dw_spxx.SetRedraw( true );
            if ( ll_row_from + 1 <= ll_row_count )
            {
                dw_spxx.ScrollToRow( ll_row_from + 1 );
            }
            else
            {
                dw_spxx.ScrollToRow( ll_row_count );
            }

            if ( dw_spxx.GetItemStatus( 1, 0, DWBUFFER.Primary ) == DWITEMSTATUS.NotModified )
            {
                dw_spxx.SetItemStatus( 1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified );
            }
        }

    }
    //#endregion


    //#region dw_cmd RowBack
    this.dw_cmd_RowBack = function ( dragobject, row, dwo )
    {

        if ( lastdw.GetName() == 'dw_spxx' )
        {
            ll_row_from = dw_jzxxx.GetRow();
            ll_row_count = dw_jzxxx.RowCount();


            if ( ll_row_from > 1 )
            {
                ll_row_to = ll_row_from - 1;
            }
            else
            {
                ll_row_to = 1;
            }

            dw_spxx.RowsMove( ll_row_from, ll_row_from, DWBUFFER.Primary, dw_spxx, ll_row_to, DWBUFFER.Primary );
            if ( ll_row_from > 1 )
            {
                dw_spxx.ScrollToRow( ll_row_from - 1 );
            }
            else
            {
                dw_spxx.ScrollToRow( 1 );
            }

            if ( dw_spxx.GetItemStatus( 1, 0, DWBUFFER.Primary ) == DWITEMSTATUS.NotModified )
            {
                dw_spxx.SetItemStatus( 1, 0, DWBUFFER.Primary, DWITEMSTATUS.DataModified );
            }
        }

    }
    //#endregion




    //#region 恢复默认列
    this.Recover = function ()
    {

        QsWebSoft.PubMethod.DelColRecord( "QsWebSoft.Hddz.W_Ywxx_Edit", "dw_ywxx_edit" );
        self.Retrieve();
    }
    //#endregion


    //#region 恢复默认列
    this.Recover_spxx = function ()
    {

        QsWebSoft.PubMethod.DelColRecord( "QsWebSoft.Hddz.W_Ywxx_Edit", "dw_ywxx_edit_spxx" );
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.dw_master_RbuttonDown = function ( dwo, xPos, yPos, Row, dwoName )
    {
        cloname = dwoName;

    }
    //#endregion



    //#region 获得字段焦点
    this.RbuttonDown_spxx = function ( dwo, xPos, yPos, Row, dwoName )
    {
        cloname = dwoName;

    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol = function ()
    {
        var copytext = "";
        var row = dw_jzxxx.GetRow();
        if ( row <= 0 )
            return;
        colType = dw_jzxxx.Describe( cloname + ".colType" );
        colType = colType.substring( 0, 4 );
        if ( colType == "char" )
        {
            copytext = dw_jzxxx.GetItemString( dw_jzxxx.GetRow(), cloname );
        }
        else if ( colType == "date" || colType == "time" )
        {
            var rq = new Date( dw_jzxxx.GetItemDate( dw_jzxxx.GetRow(), cloname ) );
            rq = QsWebSoft.PubMethod.ReturnDateString( rq ).value;
            copytext = rq;
        }
        else
        {
            var num = dw_jzxxx.GetItemNumber( dw_jzxxx.GetRow(), cloname );
            copytext = num.toString();
        }
        window.clipboardData.setData( "Text", copytext );


    }
    //#endregion




    //#region 复制字段内容
    this.CopyCol = function ()
    {
        var copytext = "";
        var row = dw_master.GetRow();
        if ( row <= 0 )
            return;
        colType = dw_master.Describe( cloname + ".colType" );
        colType = colType.substring( 0, 4 );
        if ( colType == "char" )
        {
            copytext = dw_master.GetItemString( dw_master.GetRow(), cloname );
        }
        else if ( colType == "date" || colType == "time" )
        {
            var rq = new Date( dw_master.GetItemDate( dw_master.GetRow(), cloname ) );
            rq = QsWebSoft.PubMethod.ReturnDateString( rq ).value;
            copytext = rq;
        }
        else
        {
            var num = dw_master.GetItemNumber( dw_master.GetRow(), cloname );
            copytext = num.toString();
        }
        window.clipboardData.setData( "Text", copytext );


    }
    //#endregion

    //#region 复制字段内容
    this.CopyCol = function ()
    {
        var copytext = "";
        var row = dw_spxx.GetRow();
        if ( row <= 0 )
            return;
        colType = dw_spxx.Describe( cloname + ".colType" );
        colType = colType.substring( 0, 4 );
        if ( colType == "char" )
        {
            copytext = dw_spxx.GetItemString( dw_spxx.GetRow(), cloname );
        }
        else if ( colType == "date" || colType == "time" )
        {
            var rq = new Date( dw_spxx.GetItemDate( dw_spxx.GetRow(), cloname ) );
            rq = QsWebSoft.PubMethod.ReturnDateString( rq ).value;
            copytext = rq;
        }
        else
        {
            var num = dw_spxx.GetItemNumber( dw_spxx.GetRow(), cloname );
            copytext = num.toString();
        }
        window.clipboardData.setData( "Text", copytext );


    }
    //#endregion
         
};