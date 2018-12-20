///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Bgdj_Slwts() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_master= new DataWindow( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_master == null ) dw_master= new DataWindow( requestor );
		 dw_master.Attach( win.Control( "dw_master") ); 

		 if(typeof(self.CloseQuery)=="function") 
			 win.AttachEvent("window","CloseQuery",self.CloseQuery); 

		 if(typeof(self.PostOpen)=="function") 
			 win.AttachEvent("window","PostOpen",self.PostOpen); 

		 if(typeof(self.Exit)=="function") 
			 win.AttachEvent("cb_cancel","Clicked",self.Exit); 

		 if(typeof(self.save)=="function") 
			 win.AttachEvent("cb_ok","Clicked",self.save); 

		 if(typeof(self.dw_master_Clicked)=="function") 
			 win.AttachEvent("dw_master","Clicked",self.dw_master_Clicked); 

		 if(typeof(self.dw_GetFocus)=="function") 
			 win.AttachEvent("dw_master","GetFocus",self.dw_GetFocus); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_master.Detach(); dw_master=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";
var iw_Wldw_Select = null;


//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Bgdj.ashx");

//#endregion


    //#region 窗口的OPEN事件
this.PostOpen = function () {
    self.Retrieve();
    mxdbh = requestor.GetParm("mxdbh");
    var tt_no =  dw_master.GetItemString(1, "tt_no");
    var bm = dw_master.GetItemString(1, "bm");
    var dzy = dw_master.GetItemString(1, "dz_zdy");
    var ywyobj = new Array(2);
    ywyobj = QsWebSoft.PubMethod.GetLdr(tt_no, bm).value;
    var ldr = "";
    var sdry = "";
    if (ywyobj == null) {
        ldr = "";
        sdry = "";
    }
    else {
        if (ywyobj.length == 0) {
            ldr = "";
            sdry = "";

        }
        else {
            ldr = ywyobj[1];
            sdry = ywyobj[0];

        }
    }
    dw_master.SetItem(1, "hxd_ldr", ldr);
    dw_master.SetItem(1, "sdry", sdry);
}
   
    //#endregion
    //#region CloseQuery
    this.CloseQuery = function () {

        dw_master.AcceptText();
     

        if ((dw_master.ModifiedCount()) > 0) {
            if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
                return 1;
        }
    }
    //#endregion
    //#region Retrieve
    this.Retrieve = function () {
        mxdbh = requestor.GetParm("mxdbh");
        dw_master.Retrieve(mxdbh);
    }
    //#endregion
    //#region 存盘
    this.save = function () {
        if (dw_master.AcceptText() != 1)
            return;

        if ((dw_master.ModifiedCount() <= 0)) {
            alert("没有数据需要保存!");
            return;
        }

        var hxd_ldr = dw_master.GetItemString(1, "hxd_ldr");
        if (hxd_ldr == null || hxd_ldr == "") {
            alert("请选择领单人员!");
            dw_master.SetFocus();
            dw_master.SetColumn("hxd_ldr")
            return;
        }


        var bghmc = dw_master.GetItemString(1, "bghmc");
        if (bghmc == null || bghmc == "") {
            alert("请选择报关行!");
            dw_master.SetFocus();
            dw_master.SetColumn("bghmc")
            return;
        }

        ld_yqcyr = new Date(dw_master.GetItemDate(1, "yjbgrq"));
        var ls_date = QsWebSoft.PubMethod.CheckDate(ld_yqcyr).value;
        if (ld_yqcyr == null || ls_date == "1900-01-01") {
            alert("请输入预计报关日期!");
            dw_master.SetFocus();
            dw_master.SetColumn("yjbgrq")
            return;
        }

        var btj_bz = dw_master.GetItemString(1, "formahm");
        if (btj_bz == null || btj_bz == "") {
            alert("请选择报关类型!");
            dw_master.SetFocus();
            dw_master.SetColumn("formahm")
            return;
        }


        dw_master.SetItem(1, "state", "待接收");
        dw_master.AcceptText();
        var row = dw_master.GetRow();
        var mxdbh = dw_master.GetItemString(row, "mxdbh");
        var bbh = dw_master.GetItemNumber(row, "bbh");
        var bggsbm = dw_master.GetItemString(row, "bghkhbm")
        var bggsmc = dw_master.GetItemString(row, "bghmc")
        var dw_master_data = dw_master.GetChanges();
        if (dw_master_data == "")
            return;

        //执行保存的WebService
        webReq.SetFunctionID(requestor.GetFunctionID());
        webReq.Invoke("Fszj", "dw_Master=" + dw_master_data + "&mxdbh=" + mxdbh + "&bbh=" + bbh);
        if (webReq.StatusCode() == 200) {
            //服务器成功处理，返回单号
           
            var ret = QsWebSoft.PubMethod.UpdateTyzssBggs(mxdbh, bggsbm, bggsmc).value;
            if (ret > 0) {

                requestor.MessageBox("提示", "报关公司保存成功!", ICON.Information);
                self.Bbs();
            }
            else {
                requestor.MessageBox("提示", "报关公司保存失败!", ICON.StopSign);
            }

            dw_master.ResetUpdate();
            requestor.Close();

        }
        else {
            requestor.MessageBox("提示", webReq.ResponseText(), ICON.StopSign);
            dw_master.SetFocus();
        }
    }
    //#endregion 存盘
    //#region 单击选择
    this.dw_master_Clicked = function (xPos, yPos, Row, dwoName) {

        if (dwoName == "b_select_fgf") {
            if (iw_Wldw_Select == null)
                iw_Wldw_Select = new W_Wldw_Select();
            khlx = "fgf";
            fgflx = "bggs";
            iw_Wldw_Select.SetDataWindow(dw_master);
            iw_Wldw_Select.SetData("bghkhbm");

            requestor.Open("/LoadWindow.ashx?WinName=Xt_Popwin.W_Wldw_Select&khlx=" + khlx + "&fgflx=" + fgflx, iw_Wldw_Select);
            dw_master.SetFocus();
        }
    }
    //#endregion
    //#region 关闭窗口
    this.Exit = function () {

        requestor.Close(); 
    }
    //#endregion


    //发消息给内网业务员
    this.Bbs = function () {
        var mxdbh = dw_master.GetItemString(1, "mxdbh");
        var jsr = dw_master.GetItemString(1, "sdry");
        userid = requestor.GetParm("userid");
        var msg = QsWebSoft.PubMethod.F_bbs_fb(userid, "报关数据发送", "发票" + mxdbh + "已经发送，请查收!",jsr, "mxdfs").value;
        if (msg <= 0) {
            requestor.MessageBox("提示", "报关数据" + mxdbh + "提交后，发送消息给" + jsr + "未成功!");
            return;
        }
    }
}
