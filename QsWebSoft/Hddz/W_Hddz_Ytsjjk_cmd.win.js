///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_Hddz_Ytsjjk_cmd() {

    var self = this;
    var requestor = new PBWindow();
    var dw_list = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var ds_1 = new DataStore(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_list == null) dw_list = new DataWindow(requestor);
        dw_list.Attach(win.Control("dw_list"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (ds_1 == null) ds_1 = new DataStore(requestor);
        ds_1.Attach(win.Control("ds_1"));

        if (typeof (self.CloseQuery) == "function")
            win.AttachEvent("window", "CloseQuery", self.CloseQuery);

        if (typeof (self.PostOpen) == "function")
            win.AttachEvent("window", "PostOpen", self.PostOpen);

        if (typeof (self.dw_List_Clicked) == "function")
            win.AttachEvent("dw_list", "Clicked", self.dw_List_Clicked);

        if (typeof (self.dw_GetFocus) == "function")
            win.AttachEvent("dw_list", "GetFocus", self.dw_GetFocus);

        if (typeof (self.dw_List_ItemChanged) == "function")
            win.AttachEvent("dw_list", "ItemChanged", self.dw_List_ItemChanged);

        if (typeof (self.dw_List_EntertoTab) == "function")
            win.AttachEvent("dw_list", "KeyDown", self.dw_List_EntertoTab);

        if (typeof (self.save) == "function")
            win.AttachEvent("btn_save", "Clicked", self.save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_close", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_list.Detach(); dw_list = null;
        tb_1.Detach(); tb_1 = null;
        ds_1.Detach(); ds_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

//#region 变量定义
var editMode = "";

//var ywbh = null;
//this.SetYwbh = function (parm) {
//    ywbh = parm;
//}
 
//实例化销售订单的WebService请求的JS类对象
var webReq = new WebRequestor();
webReq.SetWebServiceUrl("/Service/Hddz.ashx");
//#endregion

//#region 窗口的OPEN事件
this.PostOpen = function () {
    var ywbh = requestor.GetParm("ywbh");
    ds_1.Retrieve(ywbh);
    var li_count = ds_1.RowCount();
    if (li_count == 0) {
        return;
    }

    for (var i = 1; i <= ds_1.RowCount(); i++) {
        var dzbh_yz = ds_1.GetItemString(i, "dzbh");
        var dzbh_xz = QsWebSoft.PubMethod.GetYtsjjk_fsdz(ywbh, "dzbh", i).value;
        if (dzbh_yz != dzbh_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "单证编号");
            dw_list.SetItem(dw_list.GetRow(), "yz", dzbh_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", dzbh_xz);
        }
        var dzdm_yz = ds_1.GetItemString(i, "dzdm");
        var dzdm_xz = QsWebSoft.PubMethod.GetYtsjjk_fsdz(ywbh, "dzdm", i).value;
        if (dzdm_yz != dzdm_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "单证代码");
            dw_list.SetItem(dw_list.GetRow(), "yz", dzdm_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", dzdm_xz);
        }
    }

    for (var i = 1; i <= ds_1.RowCount(); i++) {
        var jzxh_yz = ds_1.GetItemString(i, "jzxh");
        var jzxh_xz = QsWebSoft.PubMethod.GetYtsjjk_jzxxx(ywbh, "jzxh", i).value;

        if (jzxh_yz != jzxh_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "集装箱号");
            dw_list.SetItem(dw_list.GetRow(), "yz", jzxh_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", jzxh_xz);
        }
        var xx_yz = ds_1.GetItemString(i, "xx");
        var xx_xz = QsWebSoft.PubMethod.GetYtsjjk_jzxxx(ywbh, "xx", i).value;
        if (xx_yz != xx_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "箱型");
            dw_list.SetItem(dw_list.GetRow(), "yz", xx_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", xx_xz);
        }
    }

    var ytsjfszt_yz = ds_1.GetItemString(1, "ytsjfszt");
    var ytsjfszt_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ytsjfszt").value;
    if (ytsjfszt_yz != ytsjfszt_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "亿通数据发送状态");
        dw_list.SetItem(dw_list.GetRow(), "yz", ytsjfszt_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ytsjfszt_xz);
    }
    var ytjkfscs_yz = ds_1.GetItemNumber(1, "ytjkfscs");
    var ytjkfscs_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ytjkfscs").value;
    if (ytjkfscs_yz.toString() != ytjkfscs_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "亿通数据发送次数");
        dw_list.SetItem(dw_list.GetRow(), "yz", ytjkfscs_yz.toString());
        dw_list.SetItem(dw_list.GetRow(), "xz", ytjkfscs_xz);
    }
    var ep15212_yz = ds_1.GetItemString(1, "ep15212");
    var ep15212_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ep15212").value;
    if (ep15212_yz != ep15212_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "ep15212");
        dw_list.SetItem(dw_list.GetRow(), "yz", ep15212_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ep15212_xz);
    }
    var ep14514_yz = ds_1.GetItemString(1, "ep14514");
    var ep14514_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ep14514").value;
    if (ep14514_yz != ep14514_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "ep14514");
        dw_list.SetItem(dw_list.GetRow(), "yz", ep14514_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ep14514_xz);
    }
    var ep14515_yz = ds_1.GetItemString(1, "ep14515");
    var ep14515_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ep14515").value;
    if (ep14515_yz != ep14515_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "ep14515");
        dw_list.SetItem(dw_list.GetRow(), "yz", ep14515_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ep14515_xz);
    }
    var ep14516_yz = ds_1.GetItemString(1, "ep14516");
    var ep14516_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ep14516").value;
    if (ep14516_yz != ep14516_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "ep14516");
        dw_list.SetItem(dw_list.GetRow(), "yz", ep14516_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ep14516_xz);
    }
    var dzlx_yz = ds_1.GetItemString(1, "dzlx");
    var dzlx_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "dzlx").value;
    if (dzlx_yz != dzlx_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "单证类型");
        dw_list.SetItem(dw_list.GetRow(), "yz", dzlx_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", dzlx_xz);
    }
    var ytjkzt_yz = ds_1.GetItemString(1, "ytjkzt");
    var ytjkzt_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ytjkzt").value;
    if (ytjkzt_yz != ytjkzt_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "亿通接口状态");
        dw_list.SetItem(dw_list.GetRow(), "yz", ytjkzt_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ytjkzt_xz);
    }
    var bgdh_yz = ds_1.GetItemString(1, "bgdh");
    var bgdh_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "bgdh").value;
    if (bgdh_yz != bgdh_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "报关单号");
        dw_list.SetItem(dw_list.GetRow(), "yz", bgdh_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", bgdh_xz);
    }
    var jydwdm_yz = ds_1.GetItemString(1, "jydwdm");
    var jydwdm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "jydwdm").value;
    if (jydwdm_yz != jydwdm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "经营单位代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", jydwdm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", jydwdm_xz);
    }
    var jydwmc_yz = ds_1.GetItemString(1, "jydwmc");
    var jydwmc_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "jydwmc").value;
    if (jydwmc_yz != jydwmc_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "经营单位名称");
        dw_list.SetItem(dw_list.GetRow(), "yz", jydwmc_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", jydwmc_xz);
    }
    var hzdwdqdm_yz = ds_1.GetItemString(1, "hzdwdqdm");
    var hzdwdqdm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "hzdwdqdm").value;
    if (hzdwdqdm_yz != hzdwdqdm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "货主单位地区代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", hzdwdqdm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", hzdwdqdm_xz);
    }
    var shdwdm_yz = ds_1.GetItemString(1, "shdwdm");
    var shdwdm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "shdwdm").value;
    if (shdwdm_yz != shdwdm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "收货单位代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", shdwdm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", shdwdm_xz);
    }
    var shdwmc_yz = ds_1.GetItemString(1, "shdwmc");
    var shdwmc_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "shdwmc").value;
    if (shdwmc_yz != shdwmc_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "收货单位名称");
        dw_list.SetItem(dw_list.GetRow(), "yz", shdwmc_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", shdwmc_xz);
    }
    var sbdwdm_yz = ds_1.GetItemString(1, "sbdwdm");
    var sbdwdm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "sbdwdm").value;
    if (sbdwdm_yz != sbdwdm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "申报单位代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", sbdwdm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", sbdwdm_xz);
    }
    var bggsmc_yz = ds_1.GetItemString(1, "bggsmc");
    var bggsmc_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "bggsmc").value;
    if (bggsmc_yz != bggsmc_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "报关公司名称");
        dw_list.SetItem(dw_list.GetRow(), "yz", bggsmc_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", bggsmc_xz);
    }
    var ysfs_yz = ds_1.GetItemString(1, "ysfs");
    var ysfs_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ysfs").value;
    if (ysfs_yz != ysfs_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "运输方式");
        dw_list.SetItem(dw_list.GetRow(), "yz", ysfs_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ysfs_xz);
    }
    var jcka_yz = ds_1.GetItemString(1, "jcka");
    var jcka_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "jcka").value;
    if (jcka_yz != jcka_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "进出口岸");
        dw_list.SetItem(dw_list.GetRow(), "yz", jcka_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", jcka_xz);
    }
    var zzgk_yz = ds_1.GetItemString(1, "zzgk");
    var zzgk_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "zzgk").value;
    if (zzgk_yz != zzgk_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "中转港口");
        dw_list.SetItem(dw_list.GetRow(), "yz", zzgk_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", zzgk_xz);
    }
    var qyg_yz = ds_1.GetItemString(1, "qyg");
    var qyg_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "qyg").value;
    if (qyg_yz != qyg_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "启运港");
        dw_list.SetItem(dw_list.GetRow(), "yz", qyg_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", qyg_xz);
    }
    var qygdm_yz = ds_1.GetItemString(1, "qygdm");
    var qygdm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "qygdm").value;
    if (qygdm_yz != qygdm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "启运港代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", qygdm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", qygdm_xz);
    }
    var zzgkdm_yz = ds_1.GetItemString(1, "zzgkdm");
    var zzgkdm_xz = QsWebSoft.PubMethod.GetYtsjjk_master_zzgkdm(ywbh).value;
    if (zzgkdm_yz != zzgkdm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "中转港口代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", zzgkdm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", zzgkdm_xz);
    }
    var cm_yz = ds_1.GetItemString(1, "cm");
    var cm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "cm").value;
    if (cm_yz != cm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "船名");
        dw_list.SetItem(dw_list.GetRow(), "yz", cm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", cm_xz);
    }
//    var zz_cm_yz = ds_1.GetItemString(1, "zz_cm");
//    var zz_cm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "zz_cm").value;
//    if (zz_cm_yz != zz_cm_xz) {
//        ywbh
//        dw_list.InsertRow(dw_list.GetRow());
//        dw_list.SetItem(dw_list.GetRow(), "zdm", "新的船名");
//        dw_list.SetItem(dw_list.GetRow(), "yz", zz_cm_yz);
//        dw_list.SetItem(dw_list.GetRow(), "xz", zz_cm_xz);
//    }
    var hth_yz = ds_1.GetItemString(1, "hth");
    var hth_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "hth").value;
    if (hth_yz != hth_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "合同号");
        dw_list.SetItem(dw_list.GetRow(), "yz", hth_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", hth_xz);
    }
    var ztdh_yz = ds_1.GetItemString(1, "ztdh");
    var ztdh_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ztdh").value;
    if (ztdh_yz != ztdh_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "主提单号");
        dw_list.SetItem(dw_list.GetRow(), "yz", ztdh_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ztdh_xz);
    }
    var qiyunguo_yz = ds_1.GetItemString(1, "qiyunguo");
    var qiyunguo_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "qiyunguo").value;
    if (qiyunguo_yz != qiyunguo_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "启运国");
        dw_list.SetItem(dw_list.GetRow(), "yz", qiyunguo_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", qiyunguo_xz);
    }
    var qiyunguodm_yz = ds_1.GetItemString(1, "qiyunguodm");
    var qiyunguodm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "qiyunguodm").value;
    if (qiyunguodm_yz != qiyunguodm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "启运国代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", qiyunguodm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", qiyunguodm_xz);
    }
    var myfs_yz = ds_1.GetItemString(1, "myfs");
    var myfs_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "myfs").value;
    if (myfs_yz != myfs_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "贸易方式");
        dw_list.SetItem(dw_list.GetRow(), "yz", myfs_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", myfs_xz);
    }
    var zmfs_yz = ds_1.GetItemString(1, "zmfs");
    var zmfs_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "zmfs").value;
    if (zmfs_yz != zmfs_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "征免方式");
        dw_list.SetItem(dw_list.GetRow(), "yz", zmfs_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", zmfs_xz);
    }
    var jgfs_yz = ds_1.GetItemString(1, "jgfs");
    var jgfs_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "jgfs").value;
    if (jgfs_yz != jgfs_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "价格方式");
        dw_list.SetItem(dw_list.GetRow(), "yz", jgfs_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", jgfs_xz);
    }
    var yfbj_yz = ds_1.GetItemString(1, "yfbj");
    var yfbj_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "yfbj").value;
    if (yfbj_yz != yfbj_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "运费币别");
        dw_list.SetItem(dw_list.GetRow(), "yz", yfbj_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", yfbj_xz);
    }
    var kpbz_yz = ds_1.GetItemString(1, "kpbz");
    var kpbz_xz = QsWebSoft.PubMethod.GetYtsjjk_master_kpbz(ywbh).value;
    if (kpbz_yz != kpbz_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "kpbz");
        dw_list.SetItem(dw_list.GetRow(), "yz", kpbz_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", kpbz_xz);
    }
    var kpje_yz = ds_1.GetItemNumber(1, "kpje");
    var kpje_xz = QsWebSoft.PubMethod.GetYtsjjk_master_kpje(ywbh).value;
    if (kpje_yz.toString() != kpje_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "kpje");
        dw_list.SetItem(dw_list.GetRow(), "yz", kpje_yz.toString());
        dw_list.SetItem(dw_list.GetRow(), "xz", kpje_xz);
    }
    var bxfbj_yz = ds_1.GetItemString(1, "bxfbj");
    var bxfbj_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "bxfbj").value;
    if (bxfbj_yz != bxfbj_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "报销费标记");
        dw_list.SetItem(dw_list.GetRow(), "yz", bxfbj_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", bxfbj_xz);
    }
    var bxfbb_yz = ds_1.GetItemString(1, "bxfbb");
    var bxfbb_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "bxfbb").value;
    if (bxfbb_yz != bxfbb_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "报销费币别");
        dw_list.SetItem(dw_list.GetRow(), "yz", bxfbb_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", bxfbb_xz);
    }
    var bxfje_yz = ds_1.GetItemNumber(1, "bxfje");
    var bxfje_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "bxfje").value;
    if (bxfje_yz.toString() != bxfje_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "报销费金额");
        dw_list.SetItem(dw_list.GetRow(), "yz", bxfje_yz.toString());
        dw_list.SetItem(dw_list.GetRow(), "xz", bxfje_xz);
    }
    var zxs_yz = ds_1.GetItemNumber(1, "zxs");
    var zxs_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "zxs").value;
    if (zxs_yz.toString() != zxs_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "总箱数");
        dw_list.SetItem(dw_list.GetRow(), "yz", zxs_yz.toString());
        dw_list.SetItem(dw_list.GetRow(), "xz", zxs_xz);
    }
    var master_zmz_yz = ds_1.GetItemNumber(1, "master_zmz");
    var master_zmz_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "zmz").value;
    if (master_zmz_yz.toString() != master_zmz_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "总毛重");
        dw_list.SetItem(dw_list.GetRow(), "yz", master_zmz_yz.toString());
        dw_list.SetItem(dw_list.GetRow(), "xz", master_zmz_xz);
    }
    var master_zjz_yz = ds_1.GetItemNumber(1, "master_zjz");
    var master_zjz_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "zjz").value;
    if (master_zjz_yz.toString() != master_zjz_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "总净重");
        dw_list.SetItem(dw_list.GetRow(), "yz", master_zjz_yz.toString());
        dw_list.SetItem(dw_list.GetRow(), "xz", master_zjz_xz);
    }
    var bzzl_yz = ds_1.GetItemString(1, "bzzl");
    var bzzl_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "bzzl").value;
    if (bzzl_yz != bzzl_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "包装总类");
        dw_list.SetItem(dw_list.GetRow(), "yz", bzzl_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", bzzl_xz);
    }
    var ytbz_yz = ds_1.GetItemString(1, "ytbz");
    var ytbz_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ytbz").value;
    if (ytbz_yz != ytbz_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "亿通备注");
        dw_list.SetItem(dw_list.GetRow(), "yz", ytbz_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ytbz_xz);
    }
    var hcorhbh_yz = ds_1.GetItemString(1, "hcorhbh");
    var hcorhbh_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "hcorhbh").value;
    if (hcorhbh_yz != hcorhbh_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "航班号");
        dw_list.SetItem(dw_list.GetRow(), "yz", hcorhbh_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", hcorhbh_xz);
    }
//    var zz_hcorhbh_yz = ds_1.GetItemString(1, "zz_hcorhbh");
//    var zz_hcorhbh_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "zz_hcorhbh").value;
//    if (zz_hcorhbh_yz != zz_hcorhbh_xz) {
//        dw_list.InsertRow(dw_list.GetRow());
//        dw_list.SetItem(dw_list.GetRow(), "zdm", "中转航班号");
//        dw_list.SetItem(dw_list.GetRow(), "yz", zz_hcorhbh_yz);
//        dw_list.SetItem(dw_list.GetRow(), "xz", zz_hcorhbh_xz);
//    }
    var jckbz_yz = ds_1.GetItemString(1, "jckbz");
    var jckbz_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "jckbz").value;
    if (jckbz_yz != jckbz_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "进出口标志");
        dw_list.SetItem(dw_list.GetRow(), "yz", jckbz_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", jckbz_xz);
    }
    var jydwtyxydm_yz = ds_1.GetItemString(1, "jydwtyxydm");
    var jydwtyxydm_xz = QsWebSoft.PubMethod.GetYtsjjk_master_jydwtyxydm(ywbh).value;
    if (jydwtyxydm_yz != jydwtyxydm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "jydwtyxydm");
        dw_list.SetItem(dw_list.GetRow(), "yz", jydwtyxydm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", jydwtyxydm_xz);
    }
    var sbdwtyxydm_yz = ds_1.GetItemString(1, "sbdwtyxydm");
    var sbdwtyxydm_xz = QsWebSoft.PubMethod.GetYtsjjk_master_sbdwtyxydm(ywbh).value;
    if (sbdwtyxydm_yz != sbdwtyxydm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "sbdwtyxydm");
        dw_list.SetItem(dw_list.GetRow(), "yz", sbdwtyxydm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", sbdwtyxydm_xz);
    }
    var shdwtyxydm_yz = ds_1.GetItemString(1, "shdwtyxydm");
    var shdwtyxydm_xz = QsWebSoft.PubMethod.GetYtsjjk_master_shdwtyxydm(ywbh).value;
    if (shdwtyxydm_yz != shdwtyxydm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "shdwtyxydm");
        dw_list.SetItem(dw_list.GetRow(), "yz", shdwtyxydm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", shdwtyxydm_xz);
    }
    var mygb_yz = ds_1.GetItemString(1, "mygb");
    var mygb_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "mygb").value;
    if (mygb_yz != mygb_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "贸易国别");
        dw_list.SetItem(dw_list.GetRow(), "yz", mygb_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", mygb_xz);
    }
    var wbbb_yz = ds_1.GetItemString(1, "wbbb");
    var wbbb_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "wbbb").value;
    if (wbbb_yz != wbbb_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "币别");
        dw_list.SetItem(dw_list.GetRow(), "yz", wbbb_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", wbbb_xz);
    }
    var dmbz_yz = ds_1.GetItemString(1, "dmbz");
    var dmbz_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "dmbz").value;
    if (dmbz_yz != dmbz_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "代卖标志");
        dw_list.SetItem(dw_list.GetRow(), "yz", dmbz_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", dmbz_xz);
    }
    var ycddm_yz = ds_1.GetItemString(1, "ycddm");
    var ycddm_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ycddm").value;
    if (ycddm_yz != ycddm_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "原产地代码");
        dw_list.SetItem(dw_list.GetRow(), "yz", ycddm_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ycddm_xz);
    }
    var ycd_yz = ds_1.GetItemString(1, "ycd");
    var ycd_xz = QsWebSoft.PubMethod.GetYtsjjk_master(ywbh, "ycd").value;
    if (ycd_yz != ycd_xz) {
        dw_list.InsertRow(dw_list.GetRow());
        dw_list.SetItem(dw_list.GetRow(), "zdm", "原产地");
        dw_list.SetItem(dw_list.GetRow(), "yz", ycd_yz);
        dw_list.SetItem(dw_list.GetRow(), "xz", ycd_xz);
    }

    for (var i = 1; i <= ds_1.RowCount(); i++) {
        var hgbm_yz = ds_1.GetItemString(i, "hgbm");
        var hgbm_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "hgbm", i).value;
        if (hgbm_yz != hgbm_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "海关编码");
            dw_list.SetItem(dw_list.GetRow(), "yz", hgbm_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", hgbm_xz);
        }
        var spmc_yz = ds_1.GetItemString(i, "spmc");
        var spmc_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "spmc", i).value;
        if (spmc_yz != spmc_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "商品名称");
            dw_list.SetItem(dw_list.GetRow(), "yz", spmc_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", spmc_xz);
        }
        var spmc_yw_yz = ds_1.GetItemString(i, "spmc_yw");
        var spmc_yw_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "spmc_yw", i).value;
        if (spmc_yw_yz != spmc_yw_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "英文商品名称");
            dw_list.SetItem(dw_list.GetRow(), "yz", spmc_yw_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", spmc_yw_xz);
        }
        var sfysx_yz = ds_1.GetItemString(i, "sfysx");
        var sfysx_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfysx", i).value;
        if (sfysx_yz != sfysx_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有属性");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfysx_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfysx_xz);
        }
        var sfzy_yz = ds_1.GetItemString(i, "sfzy");
        var sfzy_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfzy", i).value;
        if (sfzy_yz != sfzy_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否种用");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfzy_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfzy_xz);
        }
        var sfygzfs_yz = ds_1.GetItemString(i, "sfygzfs");
        var sfygzfs_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfygzfs", i).value;
        if (sfygzfs_yz != sfygzfs_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有干制方式");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfygzfs_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfygzfs_xz);
        }
        var sfypz_yz = ds_1.GetItemString(i, "sfypz");
        var sfypz_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfypz", i).value;
        if (sfypz_yz != sfypz_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有品种");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfypz_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfypz_xz);
        }
        var sfydj_yz = ds_1.GetItemString(i, "sfydj");
        var sfydj_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfydj", i).value;
        if (sfydj_yz != sfydj_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有等级");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfydj_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfydj_xz);
        }
        var sfybzgg_yz = ds_1.GetItemString(i, "sfybzgg");
        var sfybzgg_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfybzgg", i).value;
        if (sfybzgg_yz != sfybzgg_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有包装规格");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfybzgg_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfybzgg_xz);
        }
        var sfypp_yz = ds_1.GetItemString(i, "sfypp");
        var sfypp_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfypp", i).value;
        if (sfypp_yz != sfypp_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有品牌");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfypp_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfypp_xz);
        }
        var sfygg_yz = ds_1.GetItemString(i, "sfygg");
        var sfygg_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfygg", i).value;
        if (sfygg_yz != sfygg_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有规格");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfygg_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfygg_xz);
        }
        var sfycf_yz = ds_1.GetItemString(i, "sfycf");
        var sfycf_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfycf", i).value;
        if (sfycf_yz != sfycf_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有成分");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfycf_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfycf_xz);
        }
        var sfyxjgjggy_yz = ds_1.GetItemString(i, "sfyxjgjggy");
        var sfyxjgjggy_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfyxjgjggy", i).value;
        if (sfyxjgjggy_yz != sfyxjgjggy_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有香蕉干加工工艺");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfyxjgjggy_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfyxjgjggy_xz);
        }
        var sfyqt_yz = ds_1.GetItemString(i, "sfyqt");
        var sfyqt_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sfyqt", i).value;
        if (sfyqt_yz != sfyqt_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "是否有其他");
            dw_list.SetItem(dw_list.GetRow(), "yz", sfyqt_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sfyqt_xz);
        }
        var spsx_yz = ds_1.GetItemString(i, "spsx");
        var spsx_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "spsx", i).value;
        if (spsx_yz != spsx_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "商品属性");
            dw_list.SetItem(dw_list.GetRow(), "yz", spsx_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", spsx_xz);
        }
        var zy_yz = ds_1.GetItemString(i, "zy");
        var zy_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "zy", i).value;
        if (zy_yz != zy_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "种用");
            dw_list.SetItem(dw_list.GetRow(), "yz", zy_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", zy_xz);
        }
        var gzfs_yz = ds_1.GetItemString(i, "gzfs");
        var gzfs_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "gzfs", i).value;
        if (gzfs_yz != gzfs_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "干制方式");
            dw_list.SetItem(dw_list.GetRow(), "yz", gzfs_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", gzfs_xz);
        }
        var sppz_yz = ds_1.GetItemString(i, "sppz");
        var sppz_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sppz", i).value;
        if (sppz_yz != sppz_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "品牌");
            dw_list.SetItem(dw_list.GetRow(), "yz", sppz_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sppz_xz);
        }
        var spdj_yz = ds_1.GetItemString(i, "spdj");
        var spdj_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "spdj", i).value;
        if (spdj_yz != spdj_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "等级");
            dw_list.SetItem(dw_list.GetRow(), "yz", spdj_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", spdj_xz);
        }
        var bzgg_yz = ds_1.GetItemString(i, "bzgg");
        var bzgg_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "bzgg", i).value;
        if (bzgg_yz != bzgg_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "包装规格");
            dw_list.SetItem(dw_list.GetRow(), "yz", bzgg_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", bzgg_xz);
        }
        var sppp_yz = ds_1.GetItemString(i, "sppp");
        var sppp_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "sppp", i).value;
        if (sppp_yz != sppp_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "品牌");
            dw_list.SetItem(dw_list.GetRow(), "yz", sppp_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", sppp_xz);
        }
        var spgg_yz = ds_1.GetItemString(i, "spgg");
        var spgg_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "spgg", i).value;
        if (spgg_yz != spgg_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "规格");
            dw_list.SetItem(dw_list.GetRow(), "yz", spgg_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", spgg_xz);
        }
        var cf_yz = ds_1.GetItemString(i, "cf");
        var cf_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "cf", i).value;
        if (cf_yz != cf_xz && cf_yz != null && cf_xz != null) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "成分");
            dw_list.SetItem(dw_list.GetRow(), "yz", cf_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", cf_xz);
        }
        var xjgjggy_yz = ds_1.GetItemString(i, "xjgjggy");
        var xjgjggy_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "xjgjggy", i).value;
        if (xjgjggy_yz != xjgjggy_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "香蕉干加工工艺");
            dw_list.SetItem(dw_list.GetRow(), "yz", xjgjggy_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", xjgjggy_xz);
        }
        var spqtys_yz = ds_1.GetItemString(i, "spqtys");
        var spqtys_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "spqtys", i).value;
        if (spqtys_yz != spqtys_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "其他要素");
            dw_list.SetItem(dw_list.GetRow(), "yz", spqtys_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", spqtys_xz);
        }
        var spxx_zjz_yz = ds_1.GetItemNumber(i, "spxx_zjz");
        var spxx_zjz_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "zjz", i).value;
        if (spxx_zjz_yz.toString() != spxx_zjz_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "总净重");
            dw_list.SetItem(dw_list.GetRow(), "yz", spxx_zjz_yz.toString());
            dw_list.SetItem(dw_list.GetRow(), "xz", spxx_zjz_xz);
        }
        var jlsl_yz = ds_1.GetItemNumber(i, "jlsl");
        var jlsl_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "jlsl", i).value;
        if (jlsl_yz.toString() != jlsl_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "计量数量");
            dw_list.SetItem(dw_list.GetRow(), "yz", jlsl_yz.toString());
            dw_list.SetItem(dw_list.GetRow(), "xz", jlsl_xz);
        }
        var hgjldw_yz = ds_1.GetItemString(i, "hgjldw");
        var hgjldw_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "hgjldw", i).value;
        if (hgjldw_yz != hgjldw_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "海关计量单位");
            dw_list.SetItem(dw_list.GetRow(), "yz", hgjldw_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", hgjldw_xz);
        }
        var jldw_yz = ds_1.GetItemString(i, "jldw");
        var jldw_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx_jldw_jsl(ywbh, "jldw", i).value;
        if (jldw_yz != jldw_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "计量单位");
            dw_list.SetItem(dw_list.GetRow(), "yz", jldw_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", jldw_xz);
        }
        var hgdj_yz = ds_1.GetItemNumber(i, "hgdj");
        var hgdj_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh,i).value;
        if (hgdj_yz.toString() != hgdj_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "单件价格");
            dw_list.SetItem(dw_list.GetRow(), "yz", hgdj_yz.toString());
            dw_list.SetItem(dw_list.GetRow(), "xz", hgdj_xz);
        }
        var djjg_yz = ds_1.GetItemNumber(i, "djjg");
        var djjg_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "djjg", i).value;
        if (djjg_yz.toString() != djjg_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "单件价格");
            dw_list.SetItem(dw_list.GetRow(), "yz", djjg_yz.toString());
            dw_list.SetItem(dw_list.GetRow(), "xz", djjg_xz);
        }
        var zj_yz = ds_1.GetItemNumber(i, "zj");
        var zj_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "zj", i).value;
        if (zj_yz.toString() != zj_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "总价");
            dw_list.SetItem(dw_list.GetRow(), "yz", zj_yz.toString());
            dw_list.SetItem(dw_list.GetRow(), "xz", zj_xz);
        }
        var zjmsfs_yz = ds_1.GetItemString(i, "zjmsfs");
        var zjmsfs_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "zjmsfs", i).value;
        if (zjmsfs_yz != zjmsfs_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "增减免税方式");
            dw_list.SetItem(dw_list.GetRow(), "yz", zjmsfs_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", zjmsfs_xz);
        }
        var yt_yz = ds_1.GetItemString(i, "yt");
        var yt_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "yt", i).value;
        if (yt_yz != yt_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "用途");
            dw_list.SetItem(dw_list.GetRow(), "yz", yt_yz);
            dw_list.SetItem(dw_list.GetRow(), "xz", yt_xz);
        }
        var spxx_zmz_yz = ds_1.GetItemNumber(i, "spxx_zmz");
        var spxx_zmz_xz = QsWebSoft.PubMethod.GetYtsjjk_spxx(ywbh, "zmz", i).value;
        if (spxx_zmz_yz.toString() != spxx_zmz_xz) {
            dw_list.InsertRow(dw_list.GetRow());
            dw_list.SetItem(dw_list.GetRow(), "zdm", "总毛重");
            dw_list.SetItem(dw_list.GetRow(), "yz", spxx_zmz_yz.toString());
            dw_list.SetItem(dw_list.GetRow(), "xz", spxx_zmz_xz);
        }
    }
}

//#region CloseQuery
this.CloseQuery = function () {

    dw_list.AcceptText();

//    if ((dw_list.ModifiedCount()) > 0) {
//        if (requestor.MessageBox("提示", "数据还没有保存,是否继续退出?", ICON.Question, BUTTON.YesNo) == 2)
//            return 1;
//    }
}
//#endregion

//#region 关闭窗口
this.Exit = function () {
    requestor.Close();
}
//#endregion

}