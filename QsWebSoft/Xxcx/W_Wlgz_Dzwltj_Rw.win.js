///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Wlgz_Dzwltj_Rw() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_list= new DataWindow( requestor );
	 var dw_mx= new DataWindow( requestor );
	 var dw_xgqj= new DataWindow( requestor );
	 var dw_filter= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ddlb_jdr= new DropDownListBox( requestor );
	 var ddlb_pdy= new DropDownListBox( requestor );
	 var ddlb_bdqk= new DropDownListBox( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_jdr= new DataStore( requestor );
	 var ds_pdy= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(dw_mx == null ) dw_mx= new DataWindow( requestor );
		 dw_mx.Attach( win.Control( "dw_mx") ); 
		 if(dw_xgqj == null ) dw_xgqj= new DataWindow( requestor );
		 dw_xgqj.Attach( win.Control( "dw_xgqj") ); 
		 if(dw_filter == null ) dw_filter= new DataWindow( requestor );
		 dw_filter.Attach( win.Control( "dw_filter") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ddlb_jdr == null ) ddlb_jdr= new DropDownListBox( requestor );
		 ddlb_jdr.Attach( win.Control( "ddlb_jdr") ); 
		 if(ddlb_pdy == null ) ddlb_pdy= new DropDownListBox( requestor );
		 ddlb_pdy.Attach( win.Control( "ddlb_pdy") ); 
		 if(ddlb_bdqk == null ) ddlb_bdqk= new DropDownListBox( requestor );
		 ddlb_bdqk.Attach( win.Control( "ddlb_bdqk") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_jdr == null ) ds_jdr= new DataStore( requestor );
		 ds_jdr.Attach( win.Control( "ds_jdr") ); 
		 if(ds_pdy == null ) ds_pdy= new DataStore( requestor );
		 ds_pdy.Attach( win.Control( "ds_pdy") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.dw_list_Clicked)=="function") 
			 win.AttachEvent("dw_list","Clicked",self.dw_list_Clicked); 

		 if(typeof(self.dw_list_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list","DoubleClicked",self.dw_list_DoubleClicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_list","GetFocus",self.dw_GetFocus); 

		 if(typeof(self.dw_master_ItemChanged)=="function") 
			 win.AttachEvent("dw_list","ItemChanged",self.dw_master_ItemChanged); 

		 if(typeof(self.dw_list_RowFocusChanged)=="function") 
			 win.AttachEvent("dw_list","RowFocusChanged",self.dw_list_RowFocusChanged); 

		 if(typeof(self.ddlb_bdqk_SelectionChanged)=="function") 
			 win.AttachEvent("ddlb_jdr","SelectionChanged",self.ddlb_bdqk_SelectionChanged); 

		 if(typeof(self.ddlb_bdqk_SelectionChanged)=="function") 
			 win.AttachEvent("ddlb_pdy","SelectionChanged",self.ddlb_bdqk_SelectionChanged); 

		 if(typeof(self.ddlb_bdqk_SelectionChanged)=="function") 
			 win.AttachEvent("ddlb_bdqk","SelectionChanged",self.ddlb_bdqk_SelectionChanged); 

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
		 dw_mx.Detach(); dw_mx=null; 
		 dw_xgqj.Detach(); dw_xgqj=null; 
		 dw_filter.Detach(); dw_filter=null; 
		 tb_1.Detach(); tb_1=null; 
		 ddlb_jdr.Detach(); ddlb_jdr=null; 
		 ddlb_pdy.Detach(); ddlb_pdy=null; 
		 ddlb_bdqk.Detach(); ddlb_bdqk=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 ds_jdr.Detach(); ds_jdr=null; 
		 ds_pdy.Detach(); ds_pdy=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;
var iw_Country_Select = null;
var iw_Wlgz_Dzwltj_Ycyy = null;
var iw_Filter = null;
var begin = "N";
var fzks_row = 0;
var fzjs_row = 0;
var arr = new Array();

var Gnkhmc = null;
this.SetGnkhmc = function (parm) {
    Gnkhmc = parm;
}
 
var BeginDate = null;
this.SetBeginDate = function (parm) {
    BeginDate = new Date(parm);
}

var EndDate = null;
this.SetEndDate = function (parm) {
    EndDate = new Date(parm);
}

var Ysfs = null;
this.SetYsfs = function (parm) {
    Ysfs = parm;
}



this.SetDataWindow = function ( dw )
{
    dw_mx = dw;
}
var column = null;
this.SetData = function ( parm )
{
    column = parm;
}
var RowData = null;
this.SetRow = function ( parm )
{
    RowData = parm;
}
        


//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hddz.ashx"); 

//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
 
    dw_list.Retrieve( column )
    self.ddlb_bdqk_SelectionChanged()
}
 

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();


    if ((dw_list.ModifiedCount()) > 0) {
        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
            return 1;
    }
}
//#endregion



this.ddlb_bdqk_SelectionChanged = function ()
{
    var bdqk = ddlb_bdqk.GetText();
    var jdrjc = ddlb_jdr.GetText();
    var pdy = ddlb_pdy.GetText();
    var ls_filert = "";
    if ( bdqk == "全部" )
    {
        ls_filert = ""
    } else if ( bdqk == "北斗失败" )
    {
        ls_filert = "sfzxcg = 'N'";
    } else if ( bdqk == "北斗正确" )
    {
        ls_filert = "sfzxcg = 'Y'";
    }

    if ( jdrjc != "全部" )
    {
        if ( ls_filert == "" )
        {
            ls_filert = "jdrjc = '" + jdrjc + "'";
        } else
        {
            ls_filert = ls_filert + " and jdrjc = '" + jdrjc + "'";
        }
    }

    if ( pdy != "全部" )
    {
        if ( ls_filert == "" )
        {
            ls_filert = "pdy = '" + pdy + "'";
        } else
        {
            ls_filert = ls_filert + " and pdy = '" + pdy + "'";
        }
    }

    dw_list.SetFilter( ls_filert )
    dw_list.Filter()
}


this.dw_list_RowFocusChanged = function ( row )
{
    if ( row > 0 )
    {
        var ywbh = dw_list.GetItemString( row, "ywbh" );
        var hddz_cxh = dw_list.GetItemNumber( row, "hddz_cxh" );

        dw_mx.Retrieve( ywbh, hddz_cxh );
        dw_xgqj.Retrieve( ywbh, hddz_cxh );
    }
}


//#region 关闭窗口
this.Exit = function () {    
    requestor.Close();
}
//#endregion


this.dw_list_DoubleClicked = function ( xPos, yPos, Row, dwoName, Data )
{
    var ywbh = dw_list.GetItemString( Row, "ywbh" );
    var hddz_cxh = dw_list.GetItemNumber( Row, "hddz_cxh" );

    if ( iw_Wlgz_Dzwltj_Ycyy == null )
        iw_Wlgz_Dzwltj_Ycyy = new W_Wlgz_Dzwltj_Ycyy();

 
    var ywbh = dw_list.GetItemString( Row, "ywbh" )
    var hddz_cxh = dw_list.GetItemNumber( Row, "hddz_cxh" )
    
    iw_Wlgz_Dzwltj_Ycyy.SetDataWindow( dw_list );
    iw_Wlgz_Dzwltj_Ycyy.SetData( ywbh );
    iw_Wlgz_Dzwltj_Ycyy.SetDatacxh( hddz_cxh );
    iw_Wlgz_Dzwltj_Ycyy.SetRow( Row );   
    requestor.Open( "/LoadWindow.ashx?WinName=Xxcx.W_Wlgz_Dzwltj_Ycyy", iw_Wlgz_Dzwltj_Ycyy );

}

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
    if (Row > 0) {  fzjs_row   = Row;   }
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
