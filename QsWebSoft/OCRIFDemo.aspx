<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OCRIFDemo.aspx.cs" Inherits="IFView.OCRIFDemo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>对接OCR列表</title>
    <script src="Scripts/jquery-1.7.1.min.js"></script>
    <script src="Scripts/easyui/jquery.easyui.min.js"></script>
    <script src="Scripts/easyui/easyui-lang-zh_CN.js"></script>
    <link href="Scripts/easyui/themes/bootstrap/easyui.css" rel="stylesheet" />
    <link href="Scripts/easyui/themes/icon.css" rel="stylesheet" />
    <script src="Scripts/layer-v2.1/layer.js"></script>
    <script>
        var winsjxz = 0, winsjcl = 0;
        $(function () {
            $("#grid1").datagrid({
                url: 'AjaxHandler.ashx',
                queryParams: {
                    action: "GetOcrDataList"
                },
                idField: "ocrmainid",
                columns: [
                    [
                        { checkbox: true, field: 'ck' },
                        {
                            field: 'IsSync', title: '同步状态', width: 70, halign: 'center', align: 'center', sortable: false,
                            formatter: function (value, row) {

                                if (value) {//已同步
                                    return "<span  style='color:green'>已同步</span>&nbsp;";
                                }
                                else {//未同步
                                    return "<span style='color:red'>未同步</span>";
                                }
                            }
                        },
                        { field: 'ywbh', title: '已同步业务编号', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'invoiceno', title: '发票号', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'billno', title: '提单号', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'countrycnname', title: '国家', width: 80, halign: 'center', align: 'center', sortable: false },
                        { field: 'productcnname', title: '产品名称', width: 80, halign: 'center', align: 'center', sortable: false },
                        { field: 'regions', title: '地区', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'transportname', title: '运输方式', width: 70, halign: 'center', align: 'center', sortable: false },
                        { field: 'shippingcompany', title: '船公司', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'invstatusname', title: '发票', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'plstatusname', title: '箱单', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'blstatusname', title: '海运提单', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'blairstatusname', title: '空运提单', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'orstatusname', title: '产地证', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'prstatusname', title: '探针校准记录', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'phystatusname', title: '植检证', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'examinationstatusname', title: '核辐射', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'ciqstatusname', title: '冷处理证明', width: 110, halign: 'center', align: 'center', sortable: false }
                    ]
                ],
                width: "100%",
                height: "100%",
                singleSelect: false,
                rownumbers: true,
                remoteSort: false,
                onLoadSuccess: function (data) {
                    //console.info(data)
                    if (data.result != undefined && data.result == false) {
                        alert(data.message);
                    }
                }
                //pagination: true,
                //pageSize: 30
            });
            $('#DIV_toolbar').appendTo('.datagrid-toolbar');
            $("#btnSeach").click(function () {
                $("#grid1").datagrid("load", { action: "GetOcrDataList", invoiceno: $("#txtinvoiceno").val(), billno: $("#txtbillno").val() })
            });
            //同步
            $("#btnSync").click(function () {

                var rows = $("#grid1").datagrid("getSelections");
                if (rows.length == 0) {
                    alert("请选择要同步的数据！");
                    return false;
                }

                //for (var i = 0; i < rows.length; i++) {
                //    if (rows[i].IsSync) {
                //        alert("不能选择已经同步过的数据！");
                //        return false;
                //    }
                //}

                layer.open({
                    type: 1,
                    shade: false,
                    title: "同步窗口", //不显示标题
                    area: ["400px", "300px"],
                    content: $('.layer_notice'), //捕获的元素
                    success: function (layero, index) {
                        zxjg = { successcout: 0, failcount: 0 };
                        $("#log").empty();
                        $("#progressbar").progressbar("setValue", 0);
                        postSync(rows, 0);
                    }, close: function () {
                        if (isRef) {
                            $("#grid1").datagrid("clearSelections");
                            $("#grid1").datagrid("reload");
                        }
                    }
                });
            })

        })
        //选择往来单位
        function fun_wldw() {
            $("#grid_wldw").datagrid({
                idField: "yw_khbm", url: 'AjaxHandler.ashx', queryParams: { action: "GetWldwList" },
                toolbar: [{ type: "" }],
                columns: [
                    [
                        { field: 'khjc', title: '客户简称', width: 80, halign: 'center', align: 'center', sortable: false },
                        { field: 'khmc', title: '客户名称', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'khmc_yw', title: '客户英文名称', width: 110, halign: 'center', align: 'center', sortable: false }
                        //,{ field: 'yw_khbm', title: '客户编码', width: 80, halign: 'center', align: 'center', sortable: false }
                    ]
                ],
                width: "100%",
                height: "100%",
                singleSelect: true,
                rownumbers: true,
                remoteSort: false,
                pagination: true,
                pageSize: 30,
                onDblClickRow: function (rowIndex, rowData) {
                    xzsj_callbak(rowData.khmc);
                    layer.close(winsjxz);
                }
            });

            $("#btnwldwfilter").click(function () {
                $("#grid_wldw").datagrid("load", { action: "GetWldwList", name: $("#txtwldwfilter").val() });
            })
        }
        //选择国家（原产地）
        function fun_country() {
            $("#grid_country").datagrid({
                idField: "ctr_hgcode", url: 'AjaxHandler.ashx', queryParams: { action: "GetCountryList" },
                toolbar: [{ type: "" }],
                columns: [
                    [
                        { field: 'ctr_cname', title: '中文名', width: 110, halign: 'center', align: 'center', sortable: false },
                        { field: 'ctr_ename', title: '英文名', width: 110, halign: 'center', align: 'center', sortable: false }
                    ]
                ],
                width: "100%",
                height: "100%",
                singleSelect: true,
                rownumbers: true,
                remoteSort: false,
                pagination: true,
                pageSize: 30,
                onDblClickRow: function (rowIndex, rowData) {
                    xzsj_callbak(rowData.ctr_cname);
                    layer.close(winsjxz);
                }
            });

            $("#btncountryfilter").click(function () {
                $("#grid_country").datagrid("load", { action: "GetCountryList", name: $("#txtcountryfilter").val() });
            })
        }

        var postSync = function (rows, i) {

            if (i >= rows.length) {
                return false;
            }
            $("#divstatus").html("正在同步中，请不要关闭窗口。已同步" + i + "/" + rows.length + "条，成功" + zxjg.successcout + "条，失败" + zxjg.failcount + "条");
            var id = rows[i].ocrmainid;
            $.post('AjaxHandler.ashx', { action: "OCRToFruit", id: rows[i].ocrmainid },
                function (res) {
                    if (typeof res == "string")
                        res = $.parseJSON(res);
                    if (changeStatus(rows, i, res))
                        postSync(rows, ++i);
                    else {
                        $("#divstatus").html("同步完成。成功" + zxjg.successcout + "条，失败" + zxjg.failcount + "条");
                        isRef = true;
                    }
                });
        }

        var zxjg = { successcout: 0, failcount: 0 };
        var failrow = [];
        var isRef = false;
        var changeStatus = function (rows, i, res) {

            var msg = "";
            var $li = $("<li>");
            if (res.result) {
                msg = "第" + (i + 1) + "条数据下载成功;";
                $li.addClass("success");
                zxjg.successcout++;
                $li.text(msg);
            }
            else {
                failrow.push({ ocrmainid: rows[i].ocrmainid })
                msg = "第" + (i + 1) + "条数据下载失败,原因：" + res.msg;
                $li.text(msg);
                $li.addClass("fail");
                if (res.errortype == 1) {
                    $btn = $("<a href='#'>处理</a>");
                    $btn.click(function () {
                        clsj(res);
                    })
                    $li.append($btn)
                }
                zxjg.failcount++;
            }

            $("#log").append($li);
            $("#progressbar").progressbar("setValue", Math.round((i + 1) / rows.length * 100));
            return rows.length - 1 > i;
        }

        var clsj = function (data) {
            winsjcl = layer.open({
                type: 1,
                shade: false,
                title: "处理问题", //不显示标题
                area: ["540px", "300px"],
                content: $('#sjcl')
            });
            $("#grid_errdata").datagrid({
                data: data.errordata,
                idField: "field",
                toolbar: [
                    {
                        id: "btnsave",
                        text: "提交",
                        iconCls: 'icon-save',
                        handler: function () {
                            var errdata = $("#grid_errdata").datagrid("getRows");
                            var hddzdata = data.data;
                            var listdata = data.data1;
                            $.post("AjaxHandler.ashx", { action: "JsonToFruit", data: JSON.stringify(hddzdata), data1: JSON.stringify(listdata), errdata: JSON.stringify(errdata) },
                                function (res) {
                                    if (typeof res == "string") {
                                        res = $.parseJSON(res);
                                    }
                                    if (res.result)
                                        alert("同步成功");
                                    else {
                                        alert("同步失败");
                                    }
                                })
                        }
                    }
                ],
                columns: [
                    [
                        //{ field: 'field', title: '字段', width: 55, halign: 'center', align: 'center', sortable: false },
                        { field: 'fieldname', title: '字段名称', width: 90, halign: 'center', align: 'center', sortable: false },
                        { field: 'tablename', title: '基础表', width: 80, halign: 'center', align: 'center', sortable: false },
                        { field: 'ocrvalue', title: 'OCR值', width: 120, halign: 'center', align: 'center', sortable: false },
                        {
                            field: 'value', title: '货代单证值', width: 120, halign: 'center', align: 'center', sortable: false
                        },
                        {
                            field: 'a', title: '操作', width: 80, halign: 'center', align: 'center', sortable: false, formatter: function (value, row, index) {
                                return "<a  href='#' onclick='xzsj(" + index + ");'>选择</a>";
                            }
                        }
                    ]
                ],
                width: "100%",
                height: "100%",
                singleSelect: false,
                rownumbers: true,
                remoteSort: false
            });
            return false;
        }
        var xzsjindex = -1;
        //选择数据弹框
        var xzsj = function (index) {
            xzsjindex = index;
            var rowdata = $("#grid_errdata").datagrid("getRows")[index];
            var windom;
            switch (rowdata.tablename) {
                case "yw_wldw":
                    windom = $('#sjcl_wldw');
                    break;
                case "t_country":
                    windom = $('#sjcl_country');
                    break;
            }

            winsjxz = layer.open({
                type: 1,
                shade: false,
                title: "选择数据", //不显示标题
                area: ["540px", "300px"],
                content: windom, //捕获的元素
                success: function (layero, index) {
                    switch (rowdata.tablename) {
                        case "yw_wldw":
                            fun_wldw();
                            break;
                        case "t_country":
                            fun_country();
                            break;
                    }

                }
            });
        }
        //数据选择后回调
        var xzsj_callbak = function (name) {
            //var data = $("#grid_errdata").datagrid("getRows");
            //data[xzsjindex].value = name;
            $("#grid_errdata").datagrid("updateRow", { index: xzsjindex, row: { value: name } });
        }
    </script>
    <style>
        .SearchFrom {
            list-style: none;
            width: 100%;
            height: 50px;
            margin: 0;
            padding: 0;
            margin-top: 10px;
        }

            .SearchFrom li {
                width: 250px;
                float: left;
                margin: 0;
                padding: 0;
                height: 30px;
                line-height: 30px;
                margin: auto 0;
                overflow: hidden;
            }

                .SearchFrom li .lableTxt {
                    display: inline-block;
                    width: 80px;
                    height: 26px;
                    text-align: right;
                }

                .SearchFrom li .valueTxt {
                    width: 150px;
                    height: 26px;
                }

        #log {
            margin: 0;
            padding: 0;
            list-style: none;
            width: 350px;
            height: 200px;
        }

            #log #divstatus {
                font-size: 14px;
                margin-top: 20px;
            }

            #log li {
                margin: 0;
                padding: 0;
                line-height: 28px;
                font-size: 12px;
            }

            #log .success {
                color: green;
            }

            #log .fail {
                color: #666666;
            }

                #log .fail a {
                    color: red;
                }
    </style>
</head>
<body class="easyui-layout">
    <div data-options="region:'north',split:true" style="height: 55px; overflow: hidden">
        <div class="layer_notice" style="display: none; padding: 10px;">
            <div id="progressbar" class="easyui-progressbar" data-options="value:0" style="width: 300px;"></div>
            <div id="divstatus"></div>
            <ul id="log">
            </ul>
        </div>

        <div id="sjcl_wldw" class="easyui-layout" style="display: none; height: 264px; width: 540px;">
            <div data-options="region:'north',split:true" style="height: 40px; overflow: hidden; background-color: transparent; padding-top: 5px; border: 0px; width: 540px;">
                <span class="lableTxt">名称：</span>
                <input class="easyui-validatebox textbox valueTxt" type="text" id="txtwldwfilter" />
                <a href="javascript:void(0)" class="easyui-linkbutton" id="btnwldwfilter"
                    data-options="iconCls:'icon-search'" style="width: 80px; height: 26px;">过滤</a>
            </div>
            <div data-options="region:'center'">
                <div id="grid_wldw"></div>
            </div>
        </div>
        <div id="sjcl_country" class="easyui-layout" style="display: none; height: 264px; width: 540px;">
            <div data-options="region:'north',split:true" style="height: 40px; overflow: hidden; background-color: transparent; padding-top: 5px; border: 0px; width: 540px;">
                <span class="lableTxt">名称：</span>
                <input class="easyui-validatebox textbox valueTxt" type="text" id="txtcountryfilter" />
                <a href="javascript:void(0)" class="easyui-linkbutton" id="btncountryfilter"
                    data-options="iconCls:'icon-search'" style="width: 80px; height: 26px;">过滤</a>
            </div>
            <div data-options="region:'center'">
                <div id="grid_country"></div>
            </div>
        </div>
        <div id="sjcl" style="display: none; height: 264px; width: 540px;">
            <div id="grid_errdata"></div>
        </div>
        <ul class="SearchFrom">
            <li><span class="lableTxt">发票号：</span>
                <input class="easyui-validatebox textbox valueTxt" type="text" id="txtinvoiceno" />
            </li>
            <li><span class="lableTxt">提单号：</span>
                <input class="easyui-validatebox textbox valueTxt" type="text" id="txtbillno" />
            </li>
            <li>
                <a href="javascript:void(0)" class="easyui-linkbutton" id="btnSeach"
                    data-options="iconCls:'icon-search'" style="width: 80px; height: 26px;">查询</a>
                <a href="javascript:void(0)" class="easyui-linkbutton" id="btnSync" data-options="iconCls:'icon-reload'" style="width: 80px; height: 26px;">同步</a>
            </li>
        </ul>
    </div>

    <div data-options="region:'center'" style="">
        <div id="grid1">
        </div>
    </div>
</body>
</html>
