///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_WldwOldList() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_print= new DataWindow( requestor );
	 var dw_list= new DataWindow( requestor );
	 var tb_2= new ToolStrip( requestor );
	 var sle_1= new SingleLineEdit( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );
	 var ds_1= new DataStore( requestor );
	 var ds_role= new DataStore( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_print == null ) dw_print= new DataWindow( requestor );
		 dw_print.Attach( win.Control( "dw_print") ); 
		 if(dw_list == null ) dw_list= new DataWindow( requestor );
		 dw_list.Attach( win.Control( "dw_list") ); 
		 if(tb_2 == null ) tb_2= new ToolStrip( requestor );
		 tb_2.Attach( win.Control( "tb_2") ); 
		 if(sle_1 == null ) sle_1= new SingleLineEdit( requestor );
		 sle_1.Attach( win.Control( "sle_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 
		 if(ds_1 == null ) ds_1= new DataStore( requestor );
		 ds_1.Attach( win.Control( "ds_1") ); 
		 if(ds_role == null ) ds_role= new DataStore( requestor );
		 ds_role.Attach( win.Control( "ds_role") ); 

		 if(typeof(self.dw_List_DoubleClicked)=="function") 
			 win.AttachEvent("dw_list","DoubleClicked",self.dw_List_DoubleClicked); 

		 if(typeof(self.RbuttonDown)=="function") 
			 win.AttachEvent("dw_list","RButtonDown",self.RbuttonDown); 

		 if(typeof(self.sle_EditChanged)=="function") 
			 win.AttachEvent("sle_1","EditChanged",self.sle_EditChanged); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("btn_read","Clicked",self.Retrieve); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("全部ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.RetrieveGwgys)=="function") 
			 win.AttachEvent("国外发货人ToolStripMenuItem","Clicked",self.RetrieveGwgys); 

		 if(typeof(self.RetrieveGncgs)=="function") 
			 win.AttachEvent("国内收货人ToolStripMenuItem","Clicked",self.RetrieveGncgs); 

		 if(typeof(self.RetrieveWmgs)=="function") 
			 win.AttachEvent("外贸公司ToolStripMenuItem","Clicked",self.RetrieveWmgs); 

		 if(typeof(self.RetrieveHdgs)=="function") 
			 win.AttachEvent("货代公司ToolStripMenuItem","Clicked",self.RetrieveHdgs); 

		 if(typeof(self.RetrieveBggs)=="function") 
			 win.AttachEvent("报关公司ToolStripMenuItem","Clicked",self.RetrieveBggs); 

		 if(typeof(self.RetrieveBjgs)=="function") 
			 win.AttachEvent("报检公司ToolStripMenuItem","Clicked",self.RetrieveBjgs); 

		 if(typeof(self.RetrieveJyj)=="function") 
			 win.AttachEvent("检疫局ToolStripMenuItem","Clicked",self.RetrieveJyj); 

		 if(typeof(self.RetrieveJyd)=="function") 
			 win.AttachEvent("检验点ToolStripMenuItem","Clicked",self.RetrieveJyd); 

		 if(typeof(self.RetrieveJyfwgs)=="function") 
			 win.AttachEvent("检疫服务公司ToolStripMenuItem","Clicked",self.RetrieveJyfwgs); 

		 if(typeof(self.RetrieveCgsorhkgs)=="function") 
			 win.AttachEvent("船公司或航空公司ToolStripMenuItem","Clicked",self.RetrieveCgsorhkgs); 

		 if(typeof(self.RetrieveCdorhd)=="function") 
			 win.AttachEvent("船代或航代ToolStripMenuItem","Clicked",self.RetrieveCdorhd); 

		 if(typeof(self.RetrieveCd)=="function") 
			 win.AttachEvent("车队ToolStripMenuItem","Clicked",self.RetrieveCd); 

		 if(typeof(self.RetrieveMt)=="function") 
			 win.AttachEvent("码头ToolStripMenuItem","Clicked",self.RetrieveMt); 

		 if(typeof(self.RetrieveCgsfxd)=="function") 
			 win.AttachEvent("船公司放箱点ToolStripMenuItem","Clicked",self.RetrieveCgsfxd); 

		 if(typeof(self.RetrieveDc)=="function") 
			 win.AttachEvent("堆场ToolStripMenuItem","Clicked",self.RetrieveDc); 

		 if(typeof(self.RetrieveFxgs)=="function") 
			 win.AttachEvent("放箱公司ToolStripMenuItem","Clicked",self.RetrieveFxgs); 

		 if(typeof(self.RetrieveYh)=="function") 
			 win.AttachEvent("银行ToolStripMenuItem","Clicked",self.RetrieveYh); 

		 if(typeof(self.RetrieveHg)=="function") 
			 win.AttachEvent("海关ToolStripMenuItem","Clicked",self.RetrieveHg); 

		 if(typeof(self.RetrieveHgcyd)=="function") 
			 win.AttachEvent("海关查验点ToolStripMenuItem","Clicked",self.RetrieveHgcyd); 

		 if(typeof(self.RetrieveSc)=="function") 
			 win.AttachEvent("市场ToolStripMenuItem","Clicked",self.RetrieveSc); 

		 if(typeof(self.RetrieveQt)=="function") 
			 win.AttachEvent("其它ToolStripMenuItem","Clicked",self.RetrieveQt); 

		 if(typeof(self.New)=="function") 
			 win.AttachEvent("btn_new","Clicked",self.New); 

		 if(typeof(self.Copy)=="function") 
			 win.AttachEvent("btn_duplicate","Clicked",self.Copy); 

		 if(typeof(self.Delete)=="function") 
			 win.AttachEvent("btn_delete","Clicked",self.Delete); 

		 if(typeof(self.OpenWindow)=="function") 
			 win.AttachEvent("btn_open","Clicked",self.OpenWindow); 

		 if(typeof(self.Print)=="function") 
			 win.AttachEvent("btn_prn","Clicked",self.Print); 

		 if(typeof(self.dw_list_DataSend)=="function") 
			 win.AttachEvent("btn_tjsp","Clicked",self.dw_list_DataSend); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

		 if(typeof(self.Retrieve)=="function") 
			 win.AttachEvent("刷新ToolStripMenuItem","Clicked",self.Retrieve); 

		 if(typeof(self.CopyCol)=="function") 
			 win.AttachEvent("复制ToolStripMenuItem","Clicked",self.CopyCol); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_print.Detach(); dw_print=null; 
		 dw_list.Detach(); dw_list=null; 
		 tb_2.Detach(); tb_2=null; 
		 sle_1.Detach(); sle_1=null; 
		 tb_1.Detach(); tb_1=null; 
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
    var dwc = new DataWindowChild();
    var cloname = "";

    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/WldwOld.ashx");

    //#endregion


    //#region 数据查询
    this.Retrieve = function () {
        var userid = requestor.GetParm("userid");
        var ShareMode = requestor.GetParm("ShareMode");
        var Dlwtf = requestor.GetParm("Dlwtf");
        var khlx = null;
        dw_list.Retrieve();
    }
    //#endregion

   

    //#region 关闭窗口
    this.Exit = function () {
        setTimeout("window.close();", 100);
    }
    //#endregion


    //#region 打开编辑窗口
    this.OpenWindow = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "009019";
        var row = ds_1.Find("id='" + node + "'",1,ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var yw_khbm = dw_list.GetItemString(dw_list.GetRow(), 'yw_khbm')
        var status = dw_list.GetItemString(dw_list.GetRow(), 'status')
        var userid = requestor.GetParm("userid");
        var operation = requestor.GetParm("operation")
        //失效按钮的控制

        

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&yw_khbm=' + yw_khbm + '&operation=' + operation.toString(), true);

    }
    //#endregion

    //#region 双击
    this.dw_List_DoubleClicked = function (Row) {
        if (Row > 0)
            self.OpenWindow();

    }
    //#endregion

    //#region 新建
    this.New = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "009019";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        var operation = "new";
        var yw_khbm = null;

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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&yw_khbm=' + yw_khbm + '&operation=' + operation.toString(), true);

    }
    //#endregion

    //#region 复制
    this.Copy = function () {
        var ts_1 = null;
        var openStyle = "0";
        var url = "";
        var parm = "";
        var label = "";
        var node = "009019";
        var row = ds_1.Find("id='" + node + "'", 1, ds_1.RowCount());
        //如果没有数据，则返回
        if (dw_list.RowCount() <= 0)
            return;
        var yw_khbm = dw_list.GetItemString(dw_list.GetRow(), 'yw_khbm')
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
            ts_1.Open(node, label, "", "/OpenWindow.aspx?FunID=" + node + '&yw_khbm=' + yw_khbm + '&operation=' + operation.toString(), true);
         }

    //#endregion

    //#region 删除
         this.Delete = function () {

             var row = dw_list.GetRow();
             if (row <= 0)
                 retturn;
             var khbm = dw_list.GetItemString(row, "yw_khbm");
             var exists = QsWebSoft.PubMethod.CheckKh(khbm).value;
             if (exists > 0) {
                 requestor.MessageBox("提示", "客户<" + khbm + "已经使用,不能删除!");
                 return;
             }

             var exists2 = QsWebSoft.PubMethod.CheckBggs(khbm).value;
             if (exists2 > 0) {
                 requestor.MessageBox("提示", "客户<" + khbm + "已经使用,不能删除!");
                 return;
             }

             var exists3 = QsWebSoft.PubMethod.CheckHdgs(khbm).value;
             if (exists3 > 0) {
                 requestor.MessageBox("提示", "客户<" + khbm + "已经使用,不能删除!");
                 return;
             }
             dw_list.ReSelectRow(row);
             dw_list.RefreshDetails();

 

             var yw_khbm = dw_list.GetItemString(row, "yw_khbm");
             if (requestor.MessageBox("提示", "删除往来单位<" + yw_khbm + ">,是否确定?", ICON.Question, BUTTON.YesNo) == 2)
                 return;

             //执行删除的WebService
             webReq.SetFunctionID(requestor.GetFunctionID());
             webReq.Invoke("Delete", "yw_khbm=" + yw_khbm);

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
        dw_print.Retrieve(dw_list.GetItemString(dw_list.GetRow(), "yw_khbm"));
        dw_print.PrintPreview();
    }
    //#endregion
    
    //#region 过滤
    this.sle_EditChanged = function (text) {
        dw_list.SetRedraw(false);
        if (text == "")
            dw_list.SetFilter("");
        else
            dw_list.SetFilter("( Upper(yw_khbm) like '%" + text + "%')  or ( Lower(yw_khbm) like '%" + text + "%')  or ( Lower(khmc) like '%" + text + "%') or ( Upper(khmc) like '%" + text + "%') or ( Lower(khmc_yw) like '%" + text + "%') or ( Upper(khmc_yw) like '%" + text + "%') or ( Lower(pym) like '%" + text + "%') or ( Upper(pym) like '%" + text + "%')");
        dw_list.Filter();
        dw_list.Sort();
        dw_list.SetRedraw(true);
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
}
