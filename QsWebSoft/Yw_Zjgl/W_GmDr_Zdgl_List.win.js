///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_GmDr_Zdgl_List() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var dw_xgzdbs_print= new DataWindow( requestor );
	 var dw_xgzdbbs_print= new DataWindow( requestor );
	 var dw_skzdbbs_print= new DataWindow( requestor );
	 var dw_jzxxx= new DataWindow( requestor );
	 var dw_master= new DataWindow( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var dp_begin= new DatePicker( requestor );
	 var dp_end= new DatePicker( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var sle_kh= new SingleLineEdit( requestor );
	 var sle_hth= new SingleLineEdit( requestor );
	 var sle_2= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var rb_wsczd= new RadioButton( requestor );
	 var rb_ysczd= new RadioButton( requestor );
	 var dw_print= new DataWindow( requestor );
	 var dw_skzdbs_print= new DataWindow( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(dw_xgzdbs_print == null ) dw_xgzdbs_print= new DataWindow( requestor );
		 dw_xgzdbs_print.Attach( win.Control( "dw_xgzdbs_print") ); 
		 if(dw_xgzdbbs_print == null ) dw_xgzdbbs_print= new DataWindow( requestor );
		 dw_xgzdbbs_print.Attach( win.Control( "dw_xgzdbbs_print") ); 
		 if(dw_skzdbbs_print == null ) dw_skzdbbs_print= new DataWindow( requestor );
		 dw_skzdbbs_print.Attach( win.Control( "dw_skzdbbs_print") ); 
		 if(dw_jzxxx == null ) dw_jzxxx= new DataWindow( requestor );
		 dw_jzxxx.Attach( win.Control( "dw_jzxxx") ); 
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(dp_begin == null ) dp_begin= new DatePicker( requestor );
		 dp_begin.Attach( win.Control( "dp_begin") ); 
		 if(dp_end == null ) dp_end= new DatePicker( requestor );
		 dp_end.Attach( win.Control( "dp_end") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(sle_kh == null ) sle_kh= new SingleLineEdit( requestor );
		 sle_kh.Attach( win.Control( "sle_kh") ); 
		 if(sle_hth == null ) sle_hth= new SingleLineEdit( requestor );
		 sle_hth.Attach( win.Control( "sle_hth") ); 
		 if(sle_2 == null ) sle_2= new SingleLineEdit( requestor );
		 sle_2.Attach( win.Control( "sle_2") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(rb_wsczd == null ) rb_wsczd= new RadioButton( requestor );
		 rb_wsczd.Attach( win.Control( "rb_wsczd") ); 
		 if(rb_ysczd == null ) rb_ysczd= new RadioButton( requestor );
		 rb_ysczd.Attach( win.Control( "rb_ysczd") ); 
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_skzdbs_print == null ) dw_skzdbs_print= new DataWindow( requestor );
		 dw_skzdbs_print.Attach( win.Control( "dw_skzdbs_print") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_List_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_List_Clicked); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list","DoubleClicked",self.dw_List_DoubleClicked); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.slekh_EditChanged)=="function") 
			 win.AttachEvent("sle_kh","EditChanged",self.slekh_EditChanged); 

		 if(typeof(self.slehth_EditChanged)=="function") 
			 win.AttachEvent("sle_hth","EditChanged",self.slehth_EditChanged); 

		 if(typeof(self.yshdfygjbh_EditChanged)=="function") 
			 win.AttachEvent("sle_2","EditChanged",self.yshdfygjbh_EditChanged); 

		 if(typeof(self.wsczd)=="function") 
			 win.AttachEvent("rb_wsczd","Clicked",self.wsczd); 

		 if(typeof(self.ysczd)=="function") 
			 win.AttachEvent("rb_ysczd","Clicked",self.ysczd); 

		 if(typeof(self.New)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.New); 

		 if(typeof(self.Delete)=="function") 
			 win.AttachEvent("btn_delete","Clicked",self.Delete); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Skzdbs)=="function") 
			 win.AttachEvent("蛇口账单模板报包税ToolStripMenuItem","Clicked",self.Skzdbs); 

		 if(typeof(self.Skzdbbs)=="function") 
			 win.AttachEvent("蛇口账单不包税ToolStripMenuItem","Clicked",self.Skzdbbs); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Filter)=="function") 
			 win.AttachEvent("单列过滤ToolStripMenuItem","Clicked",self.Filter); 

		 if(typeof(self.Filter_Cancle)=="function") 
			 win.AttachEvent("取消过滤ToolStripMenuItem","Clicked",self.Filter_Cancle); 

		 if(typeof(self.Recover)=="function") 
			 win.AttachEvent("恢复默认列ToolStripMenuItem","Clicked",self.Recover); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

		 if(typeof(self.CopySelect)=="function") 
			 win.AttachEvent("选择复制ToolStripMenuItem","Clicked",self.CopySelect); 

		 if(typeof(self.CopyL)=="function") 
			 win.AttachEvent("整列复制ToolStripMenuItem","Clicked",self.CopyL); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_list.Detach(); dw_list=null; 
		 dw_xgzdbs_print.Detach(); dw_xgzdbs_print=null; 
		 dw_xgzdbbs_print.Detach(); dw_xgzdbbs_print=null; 
		 dw_skzdbbs_print.Detach(); dw_skzdbbs_print=null; 
		 dw_jzxxx.Detach(); dw_jzxxx=null; 
		 dw_master.Detach(); dw_master=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 tb_2.Detach(); tb_2=null; 
		 dp_begin.Detach(); dp_begin=null; 
		 dp_end.Detach(); dp_end=null; 
		 sle_1.Detach(); sle_1=null; 
		 sle_kh.Detach(); sle_kh=null; 
		 sle_hth.Detach(); sle_hth=null; 
		 sle_2.Detach(); sle_2=null; 
		 tb_1.Detach(); tb_1=null; 
		 rb_wsczd.Detach(); rb_wsczd=null; 
		 rb_ysczd.Detach(); rb_ysczd=null; 
		 dw_print.Detach(); dw_print=null; 
		 dw_skzdbs_print.Detach(); dw_skzdbs_print=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_1.Detach(); ds_1=null; 
		 ds_role.Detach(); ds_role=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
	


    //#region 变量定义
    var editMode = "";
    var iw_Bgdj_Slwts = null;
    var dwc = new DataWindowChild();
    var dwoname = "";

    var iw_Filter = null;
    var begin = "N";
    var fzks_row = 0;
    var fzjs_row = 0;
    var arr = new Array();
    var zdzt = "N"

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Yw_Zjgl_Zdgl.ashx");   

    //#endregion

    //#region 窗口的OPEN事件
    this.PostOpen = function () {
      
        self.Retrieve();
    }
    //#endregion


    //#region 窗口的OPEN事件
    this.wsczd = function ()
    {

        zdzt = "N";
        self.Retrieve();
    }
    //#endregion

    //#region 窗口的OPEN事件
    this.ysczd = function ()
    {

        zdzt = "Y";
        self.Retrieve();
    }
    //#endregion


    //#region 查询
    this.Retrieve = function () {
        if (self.CloseQuery() == 1)
            return;

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


        dw_list.Retrieve( zdzt,beginDate.getVarDate(), endDate.getVarDate() );

    }
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

        dw_list.AcceptText();

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }


    }
    //#endregion

    //#region 打开编辑窗口
    this.OpenWindow = function ()
    {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "0005c10";
        var row = ds_1.Find( "id='" + node + "'", 1, ds_1.RowCount() );
        //如果没有数据，则返回
        if ( dw_list.RowCount() <= 0 )
            return;

        if ( zdzt == "N" )
            return;

        var zdbm = dw_list.GetItemString( dw_list.GetRow(), 'zdbm' )
        var ywy = ""// dw_list.GetItemString(dw_list.GetRow(), "ywy");
        var zbr = dw_list.GetItemString( dw_list.GetRow(), "zbr" );
        var userid = requestor.GetParm( "userid" );
        var operation = requestor.GetParm( "operation" );
        //失效按钮的控制
        //        var state = dw_list.GetItemString(dw_list.GetRow(), 'state')

        //        if (state == "提交" || state == "待批") {
        operation = "show";
        //        }


        //先取得页面父窗口的TabStrip控件
        if ( ts_1 == null )
        {
            if ( window.external != null )
                ts_1 = window.external.Control( "ts_1" );
        }

        if ( ts_1 == null )
            return;

        //模块是否已打开
        var index = ts_1.SelectItem( node );
        if ( index > 0 )
            return;


        //取节点所对应的数据窗口记录

        if ( row > 0 )
        {
            openStyle = ds_1.GetItemString( row, "openStyle" );
            url = ds_1.GetItemString( row, "WindowName" );
            parm = ds_1.GetItemString( row, "OpenParm" );
            label = ds_1.GetItemString( row, "Title" );
        }
        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if ( openStyle == "2" )
            ts_1.Open( node, label, "", url, true );
        else if ( openStyle == "3" )
            requestor.ShowModalDialog( url, null, parm );
        else
            ts_1.Open( node, label, "", "/OpenWindow.aspx?FunID=" + node + '&zdbm=' + zdbm + '&operation=' + operation.toString(), true );
    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow();

    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName) {
//        dwoname = dwoName;
//        if (Row > 0)
//            if (dwoName == "id") {
//                self.OpenWindow();
//            }
    }
    //#endregion

//     this.Download = function () {
//         QsWebSoft.PubMethod.DownLoad();
//    }
    //#region 新建
    this.New = function () {
        dw_master.Reset()
        dw_jzxxx.Reset()
        var ysje1 = 0;
        var wsje1 = 0;
        for (row = 1; row <= dw_list.RowCount(); row++) {

            var ls_xz = dw_list.GetItemString(row, "xz");
            if (ls_xz == "Y") {

                var jdrbm = dw_list.GetItemString(row, "jdrbm");
                var jdrmc = dw_list.GetItemString(row, "jdrmc");
                var jdrjc = dw_list.GetItemString(row, "jdrjc");
                var jdrpym = dw_list.GetItemString(row, "jdrpym");
                var khbm = dw_list.GetItemString(row, "khbm");
                var khmc = dw_list.GetItemString(row, "khmc");
                var khjc = dw_list.GetItemString(row, "khjc");
                var khpym = dw_list.GetItemString(row, "khpym");
                var skrbm = dw_list.GetItemString(row, "skrbm");
                var skrmc = dw_list.GetItemString(row, "skrmc");
                var skrjc = dw_list.GetItemString(row, "skrjc");
                var skrpym = dw_list.GetItemString(row, "skrpym");
                var ywbh = dw_list.GetItemString(row, "ywbh");
                var ztdh = dw_list.GetItemString(row, "ztdh");
                var jzxh = dw_list.GetItemString(row, "jzxh");
                var zbrq = dw_list.GetItemString(row, "zbrq");
               


                if (dw_master.RowCount() < 1) {
                    var master_row = dw_master.InsertRow(0)
                    var userid = requestor.GetParm("userid");
                    dw_master.SetItem(master_row, "zbr", userid);
                    dw_master.SetItem(master_row, "jdrbm", jdrbm);
                    dw_master.SetItem(master_row, "jdrmc", jdrmc);
                    dw_master.SetItem(master_row, "jdrjc", jdrjc);
                    dw_master.SetItem(master_row, "jdrpym", jdrpym);
                    dw_master.SetItem(master_row, "khbm", khbm);
                    dw_master.SetItem(master_row, "khmc", khmc);
                    dw_master.SetItem(master_row, "khjc", khjc);
                    dw_master.SetItem(master_row, "khpym", khpym);
                    dw_master.SetItem(master_row, "skrbm", skrbm);
                    dw_master.SetItem(master_row, "skrmc", skrmc);
                    dw_master.SetItem(master_row, "skrjc", skrjc);
                    dw_master.SetItem(master_row, "skrpym", skrpym);
                    //dw_master.SetItem(master_row, "wbbb", wbbb);



                } else {
                    var jdrbm_old = dw_master.GetItemString(1, "jdrbm");
                    var khbm_old = dw_list.GetItemString(1, "jsdwbm");
                    var skrbm_old = dw_list.GetItemString(1, "skrbm");
                    if (jdrbm != jdrbm_old || khbm != khbm_old || skrbm != skrbm_old) {
                        requestor.MessageBox("提示", "第" + row.toString() + "行的客户和其他数据不一致，不能生成同一个账单！");
                        return;
                    }


                }
                dw_jzxxx.AcceptText();
                var jzxxx_row = dw_jzxxx.InsertRow(0);
                var yshdfygjbh = dw_list.GetItemString(row, "yshdfygjbh");
                dw_jzxxx.SetItem(jzxxx_row, "yshdfygjbh", yshdfygjbh);
                dw_jzxxx.SetItem(jzxxx_row, "yshdfygj_cxh", 1);
                var ywbh = dw_list.GetItemString(row, "ywbh");
                dw_jzxxx.SetItem(jzxxx_row, "ywbh", ywbh);
                var ztdh = dw_list.GetItemString(row, "ztdh");
                dw_jzxxx.SetItem(jzxxx_row, "ztdh", ztdh);
                var jzxh = dw_list.GetItemString(row, "jzxh");
                dw_jzxxx.SetItem(jzxxx_row, "jzxh", jzxh);

                var ysje = dw_list.GetItemNumber(row, "ysje");
                var wsje = dw_list.GetItemNumber(row, "wsje");
                //dw_jzxxx.SetItem(jzxxx_row, "je", ysje);
                ysje1 = ysje1 + ysje;
                wsje1 = wsje1 + wsje;

            };
            dw_jzxxx.AcceptText();
        };
        if (dw_master.RowCount() == 1 && dw_jzxxx.RowCount() > 0) {
            dw_jzxxx.SetItem(jzxxx_row, "ysybje", ysje1);

            //            var je = dw_jzxxx.GetItemNumber(1, "je");
            dw_master.SetItem(1, "ysje", ysje1);
            dw_master.SetItem(1, "dzje", 0);
            dw_master.SetItem(1, "wsje", ysje1);
        }

        dw_master.AcceptText()

        dw_jzxxx.AcceptText()

        var dw_master_data = dw_master.GetChanges();
        var dw_jzxxx_data = dw_jzxxx.GetChanges();
        var zdbm = "";
        //执行保存的WebService
        var aa = requestor.GetFunctionID();
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save", "dw_master=" + dw_master_data + "&dw_jzxxx=" + dw_jzxxx_data + "&zdbm=" + zdbm + "&operation=" + editMode);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
            zdbm = webReq.ResponseText();

            var khbm = dw_list.GetItemString(dw_list.GetRow(), "khbm");
            var ywbh = dw_list.GetItemString(dw_list.GetRow(), "ywbh");
            var num = QsWebSoft.PubMethod.dzlxrwh(khbm, ywbh).value;

            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "数据生成成功!");
            dw_list.Modify("zdbh.Tabsequence=0");

        }

    }

    


    //#endregion

    //#region 撤销报批
    this.Cxbp = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var state = dw_list.GetItemString(row, "state")
        var zfsj = dw_list.GetItemDate(row, "zfsj")
        var date = new Date(zfsj)
        var Str=date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' + 
        date.getDate() + ' ' + 
        date.getHours() + ':' + 
        date.getMinutes() + ':' + 
        date.getSeconds()
        var sj = Str
        if (sj != "1900-1-1 0:0:0") {
            requestor.MessageBox("提示", "本单据已支付，不能做撤消!")
            return
        }
        if (state != "提交") {
            requestor.MessageBox("提示", "本单据未提交，不能做撤消!")
            return
        }
        var sqdbh = dw_list.GetItemString(row, "sqdbh")

        var num = QsWebSoft.PubMethod.Yw_ZjglHddzCxbp(sqdbh, "新制").value;
        if (num == "1") {
            dw_list.SetItem(row, "state", "新制")
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "撤销成功!")
        }
        else {
            requestor.MessageBox("提示", "撤销失败!")

        }

    }
    //#endregion

    //#region 删除
    this.Delete = function () {

        var row = dw_list.GetRow();
        if (row <= 0)
            retturn;

        dw_list.ReSelectRow(row);
        dw_list.RefreshDetails();
        var zdbm = dw_list.GetItemString( row, "zdbm" );
        var dzje = dw_list.GetItemNumber( row, "dzje" );
        if ( dzje != 0 && dzje != null )
        {
            requestor.MessageBox( "提示", "账单<" + zdbm + ">,已经核销过，不能被删除!", 1 );
            return;
        }

        var ywy = ""//dw_list.GetItemString(row, "ywy");
        var zbr = dw_list.GetItemString(row, "zbr");
        var userid = requestor.GetParm("userid");
        if ( zbr != userid) {
            requestor.MessageBox("提示", "不是自己的数据,不能被删除!", 1);
            return;
        }



      
        if ( zdbm == "" || zdbm == null )
        {
            requestor.MessageBox( "提示", "账单编号为空,不能被删除!", 1 );
            return;
        }

        if ( requestor.MessageBox( "提示", "删除账单编号为<" + zdbm + ">,是否确定?", ICON.Question, BUTTON.YesNo ) == 2 )
            return;

        //执行删除的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke( "Delete", "zdbm=" + zdbm );

        if (webReq.StatusCode() == 200) {
            dw_list.RowsDiscard(row, row, DWBUFFER.Primary);
            requestor.MessageBox("提示", webReq.ResponseText());
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
        }
    }
    //#endregion

    //#region 打印
    this.Print = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        var state = dw_list.GetItemString(row, 'state')
        if (state != "提交") {
            requestor.MessageBox("提示", "数据不是提交状态,不能打印!");
            return;
        }

        dw_print.SetDataObject("dw_wlgz_sjfk_print");
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "sqdbh"));
        dw_print.PrintPreview();
    }
    //#endregion


    //#region 合同打印
    this.Skzdbs = function ()
    {
        var row = dw_list.GetRow();
        if ( row <= 0 )
            return;

        dw_print.SetDataObject( "dw_gmdr_zddy_skzdbs_print" );
        var zdbm = dw_list.GetItemString( dw_list.GetRow(), "zdbm" )

        dw_print.Retrieve( zdbm );

        dw_print.Export();       
    }
    //#endregion

    //#region 合同打印
    this.Skzdbbs = function ()
    {
        var row = dw_list.GetRow();
        if ( row <= 0 )
            return;

        dw_print.SetDataObject("dw_gmdr_zdyjdy_skzdbs_print");
        var zdbm = dw_list.GetItemString( dw_list.GetRow(), "zdbm" )

        dw_print.Retrieve( zdbm );

        dw_print.Export();
    }
    //#endregion 
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(ywbh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }

    this.yshdfygjbh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(yshdfygjbh) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤客户
    this.slekh_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(khmc) like Upper('%" + text + "%')) or ( Upper(khpym) like Upper('%" + text + "%'))or ( Upper(khjc) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    //#endregion

    //#region 过滤合同号
    this.slehth_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(hth) like Upper('%" + text + "%'))");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
    }
    
    //#region 复制
    this.Copy = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "000253";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var ywbh = dw_list.GetItemString(dw_list.GetRow(), 'ywbh') 
        var operation
            operation = "copy";


        //先取得页面父窗口的TabStrip控件
        if (ts_1 == null) {
            if (window.external != null)
                ts_1 = window.external.Control("ts_1");
        }

        if (ts_1 == null)
            return;

        //模块是否已打开
        var index = ts_1.SelectItem(node);
        if (index > 0)
            return;


        //取节点所对应的数据窗口记录

        if (row > 0) {
            openStyle = ds_1.GetItemString(row, "openStyle");
            url = ds_1.GetItemString(row, "WindowName");
            parm = ds_1.GetItemString(row, "OpenParm");
            label = ds_1.GetItemString(row, "Title");
        }

        //如果OpenStyle为2,则标识为打开的是一个Url地址
        //如果是3,则表示打开一个响应用的HTML窗口
        if (openStyle == "2")
            ts_1.Open(node, label, "", url, true);
        else if (openStyle == "3")
            requestor.ShowModalDialog(url, null, parm);
        else
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&ywbh=' + ywbh  + '&operation=' + operation.toString() , true);



    }
    //#endregion



    //#region 恢复默认列
    this.Recover = function () {

        QsWebSoft.PubMethod.DelColRecord("QsWebSoft.Yw_Zjgl.W_HdfyhdfList", "dw_hddz_hdfyhdf_list");
        self.Retrieve();
    }
    //#endregion


    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;

    }
    //#endregion


    //#region 复制字段内容
    this.CopyCol = function () {
        var copytext = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        colType = dw_list.Describe(cloname + ".colType");
        colType = colType.substring(0, 4);
        if (colType == "char") {
            copytext = dw_list.GetItemString(dw_list.GetRow(), cloname);
        }
        else if (colType == "date" || colType == "time") {
            var rq = new Date(dw_list.GetItemDate(dw_list.GetRow(), cloname));
            rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
            copytext = rq;
        }
        else {
            var num = dw_list.GetItemNumber(dw_list.GetRow(), cloname);
            copytext = num.toString();
        }
        window.clipboardData.setData("Text", copytext);


    }
    //#endregion


    //#region 存盘
    this.Save = function () {
        if (dw_list.AcceptText() != 1)
            return;

        if ((dw_list.ModifiedCount() + dw_list.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var dw_d_data = dw_list.GetChanges();
        if (dw_d_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("ListSave", "dw_list=" + dw_d_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号      
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "数据保存成功!");
            dw_list.SetFocus();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_list.SetFocus();
        }
    }
    //#endregion
      
    //#region 提交
    this.Tj = function () {
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        var state = dw_list.GetItemString(row, "state")
        if (state == "提交") {         
            requestor.MessageBox("提示", "本单据已经提交，不能再提交!")
            return
        }
        var sqdbh = dw_list.GetItemString(row, "sqdbh")

        var num = QsWebSoft.PubMethod.Yw_ZjglHddzFksqd(sqdbh, "提交").value;
        if (num == "1") {
            dw_list.SetItem(row,"state","提交")
            dw_list.ResetUpdate();
            requestor.MessageBox("提示", "报批成功!")
        }
        else {
            requestor.MessageBox("提示", "报批失败!")

        }

    }
    //#endregion

    //#region 单击明细单编号
    this.dw_List_Clicked = function (xPos, yPos, Row, dwoName, Data) {
        if (Row > 0) {
            fzks_row = Row;
        };
    }
    //#endregion

    //#region 获得字段焦点
    this.RbuttonDown = function (dwo, xPos, yPos, Row, dwoName) {
        cloname = dwoName;
        fzjs_row = Row;
    }
    //#endregion

    //#region 复制字段内容
    this.CopyAll = function () {
        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;


        for (row = fzks_row; row <= fzjs_row; row++) {
            colType = dw_list.Describe(cloname + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                copytext = dw_list.GetItemString(row, cloname);
            }
            else if (colType == "date" || colType == "time") {
                var rq = new Date(dw_list.GetItemDate(row, cloname));
                rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                copytext = rq;
            }
            else {
                var num = dw_list.GetItemNumber(row, cloname);
                copytext = num.toString();
            }

            if (copytext_sum == "") {
                copytext_sum = copytext
            } else {
                copytext_sum = copytext_sum + '\t' + '\n' + copytext
            }

        }

        window.clipboardData.setData("Text", copytext_sum);

    }
    //#endregion



    //#region 点击开始
    this.dw_List_LButtonDown = function (flags, xPos, yPos) {
        arr.splice(0, arr.length);
        begin = "Y"
    }
    //#endregion

    //#region 选择复制
    this.CopySelect = function () {
        begin = "N";

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;
        for (row = fzks_row; row <= fzjs_row; row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list.GetItemNumber(row, arr[row1]);
                    copytext = num.toString();
                };
                if (copytext_sum == "") {
                    copytext_sum = copytext
                } else {
                    if (row1 == 0) {
                        copytext_sum = copytext_sum + copytext
                    } else {
                        copytext_sum = copytext_sum + '\t' + copytext
                    }
                }
            }

            copytext_sum = copytext_sum + '\n'

        }

        if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
            copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
        };

        window.clipboardData.setData("Text", copytext_sum);
    }

    //#endregion

    //#region 鼠标移动
    this.dw_List_DwnMouseMove = function (xPos, yPos, row, dwoName) {
        if (begin == "Y") {
            var str = arr.join(" ");
            if (str.indexOf(dwoName) < 0 && dwoName.indexOf("line") < 0 && dwoName.indexOf("reportsrv") < 0 && dwoName.indexOf("datawindow") < 0) {
                arr.push(dwoName);
            }

        }
    }
    //#endregion

    //#region 整列复制
    this.CopyL = function () {

        var copytext = "";
        var copytext_sum = "";
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        for (row = 1; row <= dw_list.RowCount(); row++) {

            for (row1 = 0; row1 <= arr.length; row1++) {
                colType = dw_list.Describe(arr[row1] + ".colType");
                colType = colType.substring(0, 4);
                if (colType == "char") {
                    copytext = dw_list.GetItemString(row, arr[row1]);
                }
                else if (colType == "date" || colType == "time") {
                    var rq = new Date(dw_list.GetItemDate(row, arr[row1]));
                    rq = QsWebSoft.PubMethod.ReturnDateString(rq).value;
                    copytext = rq;
                } else if (colType == "!") {
                    continue;
                }
                else {
                    var num = dw_list.GetItemNumber(row, arr[row1]);
                    copytext = num.toString();
                };
                if (copytext_sum == "") {
                    copytext_sum = copytext
                } else {
                    if (row1 == 0) {
                        copytext_sum = copytext_sum + copytext
                    } else {
                        copytext_sum = copytext_sum + '\t' + copytext
                    }
                }
            }

            copytext_sum = copytext_sum + '\n'

        }

        if (copytext_sum.substring(copytext_sum, copytext_sum.length - 2, copytext_sum.length) == "\n") {
            copytext_sum = copytext_sum.substring(copytext_sum, 1, copytext_sum.length - 2)
        };

        window.clipboardData.setData("Text", copytext_sum);
    }

    //#endregion

    //#region 单列过滤
    this.Filter = function () {
        dw_list.AcceptText();
        var row = dw_list.GetRow();
        if (row <= 0)
            return;

        colType = dw_list.Describe(cloname + ".colType");

        if (cloname.indexOf("line") >= 0) {
            return;
        }

        colType = colType.substring(0, 4);

        if (iw_Filter == null)
            iw_Filter = new W_Filter();
        var ywy = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var filter = "";
        //        var rowcount = dw_list.RowCount();
        //        if (rowcount > 0) {
        //            filter = dw_list.GetItemString(1, "filter");
        //        };
        iw_Filter.SetDataWindow(dw_list);
        //        iw_Filter.SetData(filter);
        iw_Filter.SetDataWindowFilter(dw_filter);
        requestor.Open("/LoadWindow.ashx?WinName=Hddz.W_Filter&Zdm=" + cloname + '&colType=' + colType, iw_Filter);
        dw_list.SetFocus();
        dw_list.ScrollToRow(row)


    }
    //#endregion

    //#region 过滤取消
    this.Filter_Cancle = function () {
        dw_list.SetFilter("");
        dw_list.Filter();
        dw_list.SetFocus();
        dw_filter.Reset();
    }
    //#endregion
}
