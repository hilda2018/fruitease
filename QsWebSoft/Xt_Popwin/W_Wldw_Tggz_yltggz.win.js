///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wldw_Tggz_yltggz()
{

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow( requestor );
    var dw_log = new DataWindow( requestor );
    var tb_1 = new ToolStrip( requestor );
    var ContextMenuStrip2 = new ContextMenu( requestor );
    var ContextMenuStrip3 = new ContextMenu( requestor );

    if ( typeof ( this.bind ) == "function" ) var baseBind = this.bind;
    this.bind = function ( win )
    {
        if ( typeof ( baseBind ) == "function" ) baseBind( win );

        if ( requestor == null ) requestor = new PBWindow();
        requestor.Attach( win );
        if ( dw_1 == null ) dw_1 = new DataWindow( requestor );
        dw_1.Attach( win.Control( "dw_1" ) );
        if ( dw_log == null ) dw_log = new DataWindow( requestor );
        dw_log.Attach( win.Control( "dw_log" ) );
        if ( tb_1 == null ) tb_1 = new ToolStrip( requestor );
        tb_1.Attach( win.Control( "tb_1" ) );
        if ( ContextMenuStrip2 == null ) ContextMenuStrip2 = new ContextMenu( requestor );
        ContextMenuStrip2.Attach( win.Control( "ContextMenuStrip2" ) );
        if ( ContextMenuStrip3 == null ) ContextMenuStrip3 = new ContextMenu( requestor );
        ContextMenuStrip3.Attach( win.Control( "ContextMenuStrip3" ) );

        if ( typeof ( self.dw_1_Clicked ) == "function" )
            win.AttachEvent( "dw_1", "Clicked", self.dw_1_Clicked );

        if ( typeof ( self.dw_1_ItemChanged ) == "function" )
            win.AttachEvent( "dw_1", "ItemChanged", self.dw_1_ItemChanged );

        if ( typeof ( self.Save ) == "function" )
            win.AttachEvent( "btn_ok", "Clicked", self.Save );

        if ( typeof ( self.Exit ) == "function" )
            win.AttachEvent( "btn_Cancel", "Clicked", self.Exit );

        if ( typeof ( self.AddRow_dw_3 ) == "function" )
            win.AttachEvent( "添加一行ToolStripMenuItem1", "Clicked", self.AddRow_dw_3 );

        if ( typeof ( self.DeleteRow_dw_3 ) == "function" )
            win.AttachEvent( "删除一行ToolStripMenuItem", "Clicked", self.DeleteRow_dw_3 );

        if ( typeof ( self.AddRow_dw_4 ) == "function" )
            win.AttachEvent( "添加一行ToolStripMenuItem2", "Clicked", self.AddRow_dw_4 );

        if ( typeof ( self.DeleteRow_dw_4 ) == "function" )
            win.AttachEvent( "删除一行ToolStripMenuItem1", "Clicked", self.DeleteRow_dw_4 );

    }

    if ( typeof ( this.unbind ) == "function" ) var baseUnBind = this.unbind;
    this.unbind = function ()
    {
        if ( typeof ( this.Release ) == "function" ) this.Release();
        if ( typeof ( baseUnBind ) == "function" ) baseUnBind();

        dw_1.Detach(); dw_1 = null;
        dw_log.Detach(); dw_log = null;
        tb_1.Detach(); tb_1 = null;
        ContextMenuStrip2.Detach(); ContextMenuStrip2 = null;
        ContextMenuStrip3.Detach(); ContextMenuStrip3 = null;
        requestor.Detach(); requestor = null;

        setTimeout( CollectGarbage, 100 );
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Tggz.ashx");

    var dw_mx = null;

    var iw_Wldw_Select = null;
    var iw_Wldw_Shdz_Select = null;

    this.SetDataWindow = function (dw) {
        dw_mx = dw;
    }
    var column = null; 
    this.SetData = function (parm) {
        column = parm;
    }
    //报关时间 = 放行时间
    this.dw_1_ItemChanged = function (Row, dwoName, data) {
       
        if (dwoName == "hgfxfs") {
            if (data == "查验放行" || data == "放行查验") {
                dw_1.SetItem(Row, "sfcy", "Y")
            }
            else {
                dw_1.SetItem(Row, "sfcy", "N")
            };
        } 
//if (dwoName == "mxqrq") {
//            
////            var sjkgsj = dw_1.GetItemDate(Row, "sjkgsj");
////            var ywbh = dw_1.GetItemString(Row, "ywbh");
////            requestor.MessageBox
////            var mxq = DateMinus(sjkgsj, data);

////            dw_1.SetItem(Row, "mxq", mxq);

//        }
    }
//    function DateMinus(date1, date2) {//date1:小日期   date2:大日期
//        var sdate = new Date(date1);
//        var now = new Date(date2);
//        var days = now.getVarDate() - sdate.getVarDate();
//        var day = parseInt(days / (1000 * 60 * 60 * 24)) + 1;
//        return day;
//    } 
    //#region 存盘



        //#region dw_master弹出选择
    this.dw_1_Clicked = function ( xPos, yPos, Row, dwoName )
    {

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
    this.Save = function () {
      

        if (dw_1.AcceptText() != 1)
            return;

        if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
            alert("没有数据需要保存!");
            return;
        }

        var mxq_jsl = dw_1.GetItemNumber(1,"mxq_jsl");
        dw_1.SetItem(1,"mxq",mxq_jsl);

        //数据同步生鲜港
        for (var i = 1; i <= dw_1.RowCount(); i++) {
            if (dw_1.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {
                var ywbh = dw_1.GetItemString(i, "ywbh");
                //                var log_num = dw_log.RowCount();

                var row = dw_log.InsertRow(0);
                //var maxNumber =  self.SerialNumber(log_num);
                var serialNumber = dw_log.GetItemString(row, "eid_max") //"hyfx" + userid + yearMonDay + maxNumber;

                dw_log.SetItem(row, "eid", serialNumber);

                dw_log.SetItem(row, "tablename", "yw_hddz");
                dw_log.SetItem(row, "changecols", "yjkgsj,sjkgsj,sjzq_zqcdsj,cktgsj,tgdh,bgdh,sjhdsj,bjh,xccy,sfcy,hgfxsj");
                dw_log.SetItem(row, "mainid", ywbh);
                dw_log.ScrollToRow(row);
            }
        }
        //#region 关闭窗口
        this.Exit = function () {
            requestor.Close();

        }

        var dw_log_data = dw_log.GetChanges();
        //        if (dw_log_data == "")
        //           
        //        return;

        var dw_d_data = dw_1.GetChanges();
        //        if (dw_d_data == "")
        //            return;



        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Save_Tggz", "dw_1=" + dw_d_data + "&dw_log=" + dw_log_data);

        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号            
            requestor.MessageBox("提示", "数据保存成功!");
            dw_1.SetFocus();
            // setTimeout("window.close();", 100);
        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_1.SetFocus();
        }
    }


    function uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    }

    //#region 关闭窗口
    this.Exit = function () {
        requestor.Close();

    }
    


}
