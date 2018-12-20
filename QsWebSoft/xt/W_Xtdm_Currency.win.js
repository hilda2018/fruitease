///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Xtdm_Currency() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var dw_log= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(dw_log == null ) dw_log= new DataWindow( requestor );
		 dw_log.Attach( win.Control( "dw_log") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 

		 if(typeof(self.InsertRow)=="function") 
			 win.AttachEvent("btn_rowadd","Clicked",self.InsertRow); 

		 if(typeof(self.DeleteRow)=="function") 
			 win.AttachEvent("btn_rowdelete","Clicked",self.DeleteRow); 

		 if(typeof(self.CopyRow)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.CopyRow); 

		 if(typeof(self.Save)=="function") 
			 win.AttachEvent("btn_save","Clicked",self.Save); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("btn_close","Clicked",self.Exit); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 dw_log.Detach(); dw_log=null; 
		 tb_1.Detach(); tb_1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    //#region 变量定义
   
    //实例化明细单的WebService请求的JS类对象
    var webReq = new WebRequestor();
    webReq.SetWebServiceUrl("/Service/Currency.ashx");



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


this.InsertRow = function () {
    dw_1.InsertRow(0);
}
this.DeleteRow = function () {
    dw_1.DeleteRow(0);
}

this.CopyRow = function () {
    var row = dw_1.GetRow();
    if (row <= 0)
        return;

    dw_1.RowsCopy(row, row, DWBUFFER.Primary, dw_1, row + 1, DWBUFFER.Primary)
    dw_1.ScrollToRow(row + 1);


}

this.Save = function () {


    if (dw_1.AcceptText() != 1)
        return;


    if ((dw_1.ModifiedCount() + dw_1.DeletedCount()) <= 0) {
        alert("没有数据需要保存!");
        return;
    }

    //数据同步生鲜港   cu_type
    for (var i = 1; i <= dw_1.RowCount(); i++) {

        var cu_type= dw_1.GetItemString(i, "cu_type");
        var li_pos = 0;
        var ycyymc_tctsfh = cu_type;

        ycyymc_tctsfh.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");

        var li_find1 = 0;
        if (i > 1) {
            li_find1 = dw_1.Find("cu_type= '" + cu_type+ "' or cu_type= '" + ycyymc_tctsfh + "' or ycyymc_tctsfh = '" + cu_type+ "' or ycyymc_tctsfh = '" + ycyymc_tctsfh + "'", 1, i - 1)
        }

        var li_find2 = 0;
        if (i < dw_1.RowCount()) {
            li_find1 = dw_1.Find("cu_type= '" + cu_type+ "' or cu_type= '" + ycyymc_tctsfh + "' or ycyymc_tctsfh = '" + cu_type+ "' or ycyymc_tctsfh = '" + ycyymc_tctsfh + "'", i + 1, dw_1.RowCount())
        }

        if (li_find1 + li_find2 > 0) {
            var li_find = 0;
            if (li_find2 > 0) {
                li_find = li_find1 + li_find2 + 1;
            } else {
                li_find = li_find1;
            };
            requestor.MessageBox("提示", "异常原因：" + cu_type+ "在" + li_find.toString() + "行存在重复，不能保存！");
            return;
        }

        if (dw_1.GetItemStatus(i, 0, DWBUFFER.Primary) == 1) {

            var ctr_code = dw_1.GetItemString(i, "cu_type");
            var log_num = dw_log.RowCount();

            var row = dw_log.InsertRow(0);

            var serialNumber = dw_log.GetItemString(row, "eid_max")

            dw_log.SetItem(row, "eid", serialNumber);
            dw_log.SetItem(row, "tablename", "t_currency");
            dw_log.SetItem(row, "changecols", "ctr_no,cu_cname,cu_ename,cu_code,xchg_usd,xchg_rmb");
            dw_log.SetItem(row, "mainid", ctr_code);
            dw_log.ScrollToRow(row);

        }
    }

    var dw_log_data = dw_log.GetChanges();
    if (dw_log_data == "") {

        return;
    }
 
    var dw_d_data = dw_1.GetChanges();
    if ( dw_d_data == "")
        return;

    //执行保存的WebService
    webReq.SetFunctionID(requestor.GetFunctionID());
    webReq.Invoke("Save", "dw_Master=" + dw_d_data + "&dw_log=" + dw_log_data);


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