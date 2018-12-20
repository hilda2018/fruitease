var warningMes = {};
var init = "";
var $menuContainer = $('#warningContainer');
var $gridDiv = $('#tableDataGrid');
var log = function (str) {
    if (window.console) {
        console.log(str);
    }
}
var ycyyAddData = {};


//异常原因相关 js
var yjlxSetting = {};
yjlxSetting.baseOptions = {
    nowrap: true,
    rownumbers: true,
    resizable: true,
    striped: true,
    url: window.location.origin + "/IFView/IndexHandler.ashx",
    singleSelect: true,
    halign: "center",
    border: false,
    onLoadSuccess: function (data) {

        window.console ? console.log(data) : '';
    }
};
//异常原因相关 下拉 相关 datagrid options 
yjlxSetting.listOptions = function (yjlxbh) {
    var op = {
        height: 200,
        title: "",
        width: 400,
        columns: [
            [{
                    sortable: false,
                    field: "ycyybm",
                    title: "编码",
                    width: 50
                },
                {
                    sortable: false,
                    field: "ycyymc",
                    title: "异常原因名称",
                    width: 160,
                    formatter: function (value, row, index) {
                        return '<span title="' + value + '">' + value + '</span>';
                    }
                },
                {
                    sortable: false,
                    field: "ycyylb",
                    title: "异常原因类别",
                    width: 80
                },
            ]
        ],
        queryParams: {
            "yjlxbh": yjlxbh ? yjlxbh : '',
            "action": "GetYcyyListData"
        },
        onSelect: function (rowIndex, rowData) {

            //回写数据到 异常原因 表格
            var $selectRow = $('#yjlxTableDataGrid').datagrid('getSelected');
            var getSelectedIndex = $('#yjlxTableDataGrid').datagrid('getRowIndex', $selectRow);
            var data = $('#yjlxTableDataGrid').datagrid('getData');
            log(data);
            log(getSelectedIndex);
            log(rowData);
            data.rows[getSelectedIndex].ycyybm = rowData.ycyybm;
            data.rows[getSelectedIndex].yy = rowData.yy;
            data.rows[getSelectedIndex].wxsffs = rowData.sfmx;
            data.rows[getSelectedIndex].ycyylb = rowData.ycyylb;
            data.rows[getSelectedIndex].ycyymc = rowData.ycyymc;;
            $('#yjlxTableDataGrid').datagrid('loadData', data);

            ycyyAddData = $.extend({}, ycyyAddData, data.rows[getSelectedIndex]);


            $('#ycyyList').dialog('close');

        }
    };
    return $.extend({}, op, yjlxSetting.baseOptions);
};
//异常原因相关 表格相关 datagrid options 
yjlxSetting.tableOptions = function (ywbh, yjlxbh) {

    var op = {
        height: '100%',
        fit: true,
        showFooter: false,
        border: true,
        onBeforeClose: function () {
            if ($('#addYcyy').enabled) {
                $('#addYcyy').enabled()
            } else {
                $('#addYcyy').removeClass('disabled');
            }
        },
        width: '100%',
        toolbar: "#ycyyToolbar",
        columns: [
            [{
                    sortable: false,
                    field: "id",
                    title: "id",
                    width: 0,
                    hidden: true,
                },
                {
                    sortable: false,
                    field: "zbr",
                    title: "制表人",
                    width: 50
                },
                {
                    sortable: false,
                    field: "ycyymc",
                    title: "异常原因",
                    width: 120,
                    formatter: function (value, row, index) {
                        console.log(value);
                        if (value) {
                            return value;

                        } else {
                            return "<div class='relative ycyyBtn cursor important'><span >请选择异常原因</span><i class='ui-select-icon'></i></div>";
                        }
                    }
                },
                {
                    sortable: false,
                    field: "zbrq",
                    title: "制表日期",
                    width: 80
                },
                {
                    sortable: false,
                    field: "beizhu",
                    title: "备注",
                    width: 140,
                    formatter: function (value, row, index) {


                        if (!row.id && value === '') { // 没id,新增
                            return '<input class="ui-input beizhu" name="beizhu"  readonly />'
                        }
                        return value;
                    }


                },
                {
                    sortable: false,
                    field: "ycyyqc",
                    title: "异常原因取消",
                    width: 80,
                    align: 'center',
                    formatter: function (value, row, index) {

                        var temAttr = '';

                        if (row.id) {
                            temAttr = (value === "Y" ? 'checked disabled' : '');
                        }

                        return '<div class="ycyyqcFunc"  index="' + index + '"><input ' + temAttr + 'type="checkbox" id="checkbox' + index + '" name="checkbox' + index + '"  >  <label for="checkbox' + index + '" class="ui-checkbox"></label><label for="checkbox' + index + '"></label></div>';
                    }
                },
                {
                    sortable: false,
                    field: "ycyyqcsj",
                    title: "异常原因取消时间",
                    width: 80,
                    formatter: function (value, row, index) {

                        return '<span class="ycyyqcsjFunc">' + value + '</span>';
                    }
                },
                {
                    field: "wxsffs",
                    title: "微信是否发送",
                    width: 80,
                    align: 'center',
                    formatter: function (value, row, index) {


                        var temAttr = '';

                        if (row.id) {
                            temAttr = (value === "Y" ? 'checked disabled' : '');
                        }

                        return '<div class = "wxsffsFunc"><input ' + temAttr + 'type="checkbox" id="checkbox' + index + '" name="checkbox' + index + '"  >  <label for="checkbox' + index + '" class="ui-checkbox"></label><label for="checkbox' + index + '"></label></div>';
                    }
                }
            ]
        ],
        queryParams: {
            "ywbh": ywbh ? ywbh : '',
            "yjlxbh": yjlxbh ? yjlxbh : '',
            "action": "GetYcyyTableData"
        }
    };
    return $.extend({}, op, yjlxSetting.baseOptions);
};
//异常记录 更新或新增的 保存操作
yjlxSetting.saveData = function (json) {

    var oneItem;
    if (json.id) { //如果id 存在
        oneItem = {
            "action": "SaveYcyy",
            "json": JSON.stringify(json),
            "id": json.id
        };
    } else {
        oneItem = {
            "action": "SaveYcyy",
            "json": JSON.stringify(json)
        };
    }

    $.ajax({
        type: "post",
        url: window.location.origin + "/IFView/IndexHandler.ashx",
        dataType: "json",
        data: oneItem,
        async: false,
        success: function (data) {

            if (data.result) {
                $.messager.alert('提示信息', data.msg, 'info');
                if ($('#addYcyy').enabled) {
                    $('#addYcyy').enabled()
                } else {
                    $('#addYcyy').removeClass('disabled');
                }


                $gridDiv.datagrid('reload');
            } else {

                $.messager.alert('提示信息', '保存失败，查找后台相关原因', 'info');
            }

        }

    });
}

//异常记录 更新或新增的 保存操作 方法调用
var ycyySaveBtn = function (json) {
    if (!json) {
        $.messager.alert("警告", "必须传相应的数据参数才能进行保存操作", "alert");
        return false;
    }

    yjlxSetting.saveData(json);
}


/*****  异常保存方法调用 示例
var json = {
    beizhu: "0018",
    cxh: 1,
    wxsffs: "",
    id:"30188",
    ycyybm: "",
    ycyymc: "",
    ycyyqc: "Y",
    ycyyqcsj: "",
    ywbh: "18LY4856",
    yy: "N",
    zbr: "0009222",
    zbrq: "2018/12/6 12:55:33"
}

ycyySaveBtn(json);

*/


$(document).delegate('.ycyyBtn', 'click', function (e) {


    //表格初始化
    $('#ycyyList').dialog('open');

});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


warningMes = {
    "containMenuId": "warningContainer",
    "items": [],
    "getOptions": function () {
        return {
            "toolbar": [],
            columns: [
                [
                    /*{field:'hide',title:'hide', width:0,
                        formatter: function(value,row,index){
                            if (row.hide && row.hide === "true") {
                                return '<span class="rowHide">' + value + '</span>';
                            } else {
                                return value;
                            }
                        }
                    },*/

                    {
                        sortable: false,
                        field: "ry",
                        width: 0,
                        title: "用户名",
                        hidden: true
                    },
                    {
                        sortable: false,
                        field: "xh",
                        width: 0,
                        title: "序号",
                        hidden: true
                    },
                    {
                        sortable: false,
                        field: "sfhys",
                        width: 0,
                        title: "是否是红颜色",
                        hidden: true
                    },
                    {
                        sortable: false,
                        field: "yjlxbm",
                        width: 80,
                        title: "预警类型编码"
                    },
                    {
                        sortable: false,
                        field: "ywbh",
                        width: 80,
                        title: "编号"
                    },
                    {
                        sortable: false,
                        field: "hth",
                        title: "合同号"
                    },
                    {
                        sortable: false,
                        field: "yjsj",
                        title: "预警时间"
                    },
                    {
                        sortable: false,
                        field: "jsq",
                        width: 80,
                        title: "计时器"
                    },
                    {
                        sortable: false,
                        field: "rymc",
                        width: 50,
                        title: "人员"
                    },
                    {
                        sortable: false,
                        field: "yjnr",
                        title: "预警内容"
                    },
                    {
                        sortable: false,
                        field: "ycd",
                        width: 80,
                        title: "原产地",
                        align: 'center'
                    },
                    {
                        sortable: false,
                        field: "sp",
                        width: 80,
                        title: "商品",
                        align: 'center'
                    },
                    {
                        sortable: false,
                        field: "xq",
                        width: 80,
                        title: "详情",
                        align: 'center'
                    },
                    {
                        sortable: false,
                        field: "qzyj",
                        width: 80,
                        title: "前置预警"
                    },
                    {
                        sortable: false,
                        field: "jdrjc",
                        width: 100,
                        title: "接单人"
                    },
                    {
                        sortable: false,
                        field: "sfyycyy",
                        width: 100,
                        title: "是否有异常原因",
                        align: 'center',
                        formatter: function (value, row, index) {

                            var temAttr = (value === "N" ? '' : 'checked ');
                            return '<input disabled type="checkbox"  ' + temAttr + ' id="checkbox' +
                                index + '"  name= "checkbox"> <label for="checkbox' +
                                index + '"  class="ui-checkbox"></label><label for="checkbox' +
                                index + '" ></label>';
                        }
                    },
                    {
                        field: "sfgx",
                        width: 80,
                        title: "是否勾选",
                        align: 'center',
                        formatter: function (value, row, index) {

                            var temAttr = (value === "N" ? '' : 'checked ');
                            return '<input disabled type="checkbox"  ' +
                                temAttr + ' id="sfgx_checkbox' +
                                index + '"  name="checkbox"> <label for="sfgx_checkbox' +
                                index + '"  class="ui-checkbox"></label><label for="sfgx_checkbox' +
                                index + '" ></label>';

                        }
                    }
                ]
            ],

            nowrap: true,
            fit: true,

            rowStyler: function (index, row) {
                if (row.hide && row.hide === "true") {
                    return 'display:none;height:0;font-size:0;line-height:0;tansition:0.5s all;-webkit-transition:0.5s all;';
                }
            },


            rownumbers: true,
            singleSelect: true,
            idField: "ry",
            halign: "center",
            border: false,
            onBeforeLoad: function () {

            },
            loadFilter: function (data) {
                if (data.rows) {
                    data.total = parseInt(data.rows[0]["total"]);
                }

                return data;
            },
            onLoadSuccess: function (data) {

                console.log(325);
            },
            resizable: true,
            striped: true,
            width: "100%",
            height: "600",
            pagination: true,
            pageNumber: 1,
            pageSize: 200,
            pageList: [200, 400, 600, 800, 1000]
        }
    },
    "initJdr": function () {

        $.ajax({
            type: "get",
            url: window.location.origin + "/IFView/IndexHandler.ashx?action=GetJdrData",
            dataType: "json",
            async: true,
            success: function (initData) {

                if (!initData && !initData.length) {
                    return false;
                }

                log(initData);

                var tempHtml = '';
                $.each(initData.rows, function (i, item) {
                    tempHtml += '<option value = "' + item.khjc + '">' + item.khjc + '</option>';
                });
                $('#jdrjc').html(tempHtml);

                setTimeout(function () {

                    var config = {
                        'base': '../lib/theme/modern/js'
                    };
                    seajs.config(config).use(['common/ui/Select'], function (Select) {

                        $('select').selectMatch();
                    });



                }, 500);

            }

        });
    },
    "formatterData": function (dataArr, index) { //对后台传过来的数据进行修造
        var origin = dataArr && dataArr.rows;
        if (!(origin && origin.length)) {
            return false;
        }
        var menuItems = [];
        $.each(origin, function (i) {
            var temMenuItem = {
                "yjlxmc": origin[i].yjlxmc ? $.trim(origin[i].yjlxmc) : "",
                "yjlxbh": origin[i].yjlxbh ? origin[i].yjlxbh : "",
                "IsLast": origin[i].IsLast ? origin[i].IsLast : "",
                "syjbh": origin[i].syjbh ? origin[i].syjbh : "",
                "xh": origin[i].xh ? origin[i].xh : "",
                "parentIndex": index ? index : "",
                "selfIndex": i
            };
            menuItems.push(temMenuItem);

        });
        return menuItems;
    },
    "initMenuItems": function (menuItems) { //一级菜单

        if (!menuItems && menuItems[0]) {
            return false;
        }

        if (menuItems[0].syjbh === "00") {

            var strhtml = "";
            var tophtml = "";
            for (var indexItem = 0; indexItem < menuItems.length; indexItem++) {

                var item = menuItems[indexItem];

                if (item && item.yjlxbh && item.yjlxbh === "00") {
                    tophtml = '<div data-syjbh="' + item.syjbh + '"  class="menuTopTitle"   id="' + item.yjlxbh + '"  ><i class="icon icon-menu"><svg><use xlink:href="#icon-menu"></use></svg></i><i>' + item.yjlxmc + '</i>' +
                        '<a id="btnEffect" href="javascript:;" class=""> <span class="left">&lt;&lt;</span><span class="right">&gt;&gt;</span> </a> </div>';
                } else {
                    strhtml += '<div> <div class="menuListTitle"  data-syjbh="' + item.syjbh + '"  data-id="' + item.yjlxbh + '"  ><i class="icon icon-item"><svg><use xlink:href="#icon-item"></use></svg></i><i>  ' + item.yjlxmc + '</i> </div> <ul data-syjbh="' + item.syjbh + '"   class="hide  subMenu"   id="' +
                        item.yjlxbh + '"  ></ul>  </div>';
                }

                $menuContainer.html(tophtml + strhtml);
            }
        }

        // 给一级菜单绑定 点击事件
        $menuContainer.delegate('.menuListTitle', 'click', function (e) {
            $('.menuListTitle').removeClass("activeMenuListTitle");
            $(this).addClass("activeMenuListTitle");

            var index = $(this).parent().index();
            var $thisParent = $(this).parent();
            $thisParent.find('ul').toggleClass("hide");


            if (!$(this).get(0).clicked) {
                $this2 = $(this).get(0);
                $this2.clicked = 'false';
            }

            if (warningMes.items[index].hasInit) {
                // console.log("已经初始化");
                return false;
            } //已经初始化  



            //未初始化发起，ajax 请求，渲染二级菜单
            $.ajax({
                type: "Get",
                url: window.location.origin +
                    "/IFView/IndexHandler.ashx?action=GetWarningMenuList&parentId=" + $(this).attr("data-id"),
                dataType: "json",
                async: true,
                success: function (menuData) {
                    //防止多次请求     初始化数据 次级菜单
                    warningMes.items[index].menuData = warningMes.formatterData(menuData, index);
                    warningMes.items[index].hasInit = true; // 初始化
                    warningMes.submenuItems(warningMes.items[index].menuData);
                },
                error: function (errorMsg) {
                    $.messager.alert("提示", "系统出错：" + errorMsg);
                }
            });


        });


        if (menuItems[0].syjbh === "00") { //一级菜单
            if (!init) { // 第一次初始化时，触发第一个菜单的点击事件
                $('.menuListTitle').eq(0).trigger('click');
                init = "step1";
            };
        }

    },
    "submenuItems": function (submenuItemsData) {

        console.log(submenuItemsData);

        /***** 生成子菜单 ********/
        if (!submenuItemsData && !submenuItemsData.length) {
            return false;
        }

        var submenuHtml = "";

        $.each(submenuItemsData,
            function (iItem, indexItem) {


                if (indexItem.IsLast === "1") { //最后一个

                    submenuHtml += '<li  data-syjbh="' +
                        indexItem.syjbh +
                        '"   id="' +
                        indexItem.yjlxbh +
                        '"   class="' +
                        indexItem.syjbh +
                        ' theLastItem"   ><i class="icon icon-circle"><svg><use xlink:href="#icon-circle"></use></svg></i><i> ' +
                        indexItem.yjlxmc +
                        '  <i></li>';
                } else {
                    submenuHtml += '<li  data-syjbh="' +
                        indexItem.syjbh +
                        '"     class="' +
                        indexItem.syjbh +
                        '"   ><div class="menuListTitle"  data-parentIndex="' +
                        indexItem.parentIndex +
                        '"  data-selfIndex="' +
                        indexItem.selfIndex +
                        '"    data-syjbh="' +
                        indexItem.syjbh +
                        '"   id="' +
                        indexItem.yjlxbh +
                        '">' +
                        indexItem.yjlxmc +
                        '</div> <ul data-syjbh="' +
                        indexItem.syjbh +
                        '"   class="hide subMenu"   ></ul></li>';

                }

            });



        $('#' + submenuItemsData[0]["syjbh"]).html(submenuHtml);


        $("#" + warningMes.containMenuId).delegate('.theLastItem', 'click', function () {


            //  求异常原因类型下拉数据
            /*yjlxbm: 000101
            action: GetTableData
            page: 1
            rows: 200*/

            $(".activeTheLastItem").removeClass("activeTheLastItem");
            $(this).addClass("activeTheLastItem");
            var yjlxbm = $(this).attr("id");


            $.get(window.location.origin + "/IFView/IndexHandler.ashx", {
                    "yjlxbm": yjlxbm,
                    "action": "GetTableData",
                    "page": 1,
                    "rows": 200
                },
                function (data) {

                    $gridDiv.datagrid({
                        "loadData": {
                            "total": parseInt(data.rows[0]["total"]),
                            "rows": data.rows
                        },
                        url: window.location.origin + "/IFView/IndexHandler.ashx",
                        queryParams: {
                            "yjlxbm": yjlxbm,
                            "action": "GetTableData"
                        }
                    });

                    warningMes.Tabledata = {
                        "total": data.rows[0]["total"],
                        "rows": data.rows
                    };


                }, "json");

            yjlxSetting.listGridDiv = $('#yjlxListDataGrid').datagrid(yjlxSetting.listOptions(yjlxbm));
        });
        if (submenuItemsData[0].IsLast === "1" && init === "step1") { // 第一次初始化，触发点击事件

            $('.theLastItem').eq(0).trigger('click');
            init = "over";

        }

    },
    "initMenu": function () {
        $('#ycyy').dialog({
            height: 400,
            cls: 'dialogCls',
            width: 600,
            resizable: true,
            modal: true,
            closed: true,
            minimizable: true,
            collapsible: true,
            minimizable: true,
            maxmizable: true,
            draggable: true
        });
        $.ajax({
            type: "get",
            url: window.location.origin + "/IFView/IndexHandler.ashx?action=GetWarningMenuList&parentId=00",
            dataType: "json",
            async: false,
            success: function (initData) {
                warningMes.items = warningMes.formatterData(initData);
                warningMes.initMenuItems(warningMes.items);
            }
        });

    },
    bindEvent: function () {


        $('#btnEffect').click(function () {
            $messager.confirm('确认', '您确认想要关闭首页吗？', function (r) {
                if (r) {
                    alert('确认删除');
                }
            });
            $('body').toggleClass('maxDataGrid');
            $(this).toggleClass('active');
        });

        $('#helpDocument').click(function () {
            window.top.open(window.location.origin + '/help.aspx', '_blank');
        });


        $('#closeWindow').click(function () {
            // $('#confirmDialog').dialog('open');


            var dialogOptions = $.extend({}, {
                width: 400,
                title: '温馨提醒',
                height: 160,
                content: "你确定要关闭首页窗口吗？",
                modal: true,
                bodyCls: 'dialogBodyCls',
                closed: false,
                buttons: [{
                    text: '确定',
                    iconCls: 'icon-ok',
                    handler: function () {

                        var Tab = window.top.globalInfo.globalTabObj;

                        if (Tab) {
                            var selectedTab = Tab.tabs('getSelected');
                            Tab.tabs('close', Tab.tabs('getTabIndex', selectedTab));
                        } else {
                            $.messager.alert("提示", "系统出错：" + errorMsg);
                        }

                    }
                }, {
                    text: '关闭',
                    iconCls: 'icon-remove',
                    handler: function () {

                        $('#confirmDialog').dialog('close');
                    }
                }]
            });
            $('#confirmDialog').dialog(dialogOptions).dialog('open');
            $('#confirmDialog').removeClass('hide');


        });


        $('#ycyyBtn').click(function () {

            var selectedRow = $gridDiv.datagrid('getSelected');

            if (!selectedRow) { // 没有选择行

                $.messager.alert('警告', '必须选择一行数据后，才能进行操作！', 'info');


                return false;
            }




            // open a window    

            yjlxSetting.tableGridDiv = $('#yjlxTableDataGrid').datagrid(yjlxSetting.tableOptions(selectedRow["ywbh"], selectedRow["yjlxbh"]));
            $('#ycyy').dialog('open');

            var ycyyOptions = $gridDiv.datagrid('options');

            ycyyOptions.toolbar = "#ycyyToolbar";

            ycyyOptions.url = '';
            ycyyOptions.columns = [
                [{
                        sortable: false,
                        field: "xh",
                        width: 50,
                        title: "序号"
                    },
                    {
                        sortable: false,
                        field: "ry",
                        width: 80,
                        title: "制表人"
                    },
                    {
                        sortable: false,
                        field: "xh",
                        width: 80,
                        title: "制表日期"
                    },
                    {
                        sortable: false,
                        field: "sfhys",
                        width: 100,
                        title: "异常原因"
                    },
                    {
                        sortable: false,
                        field: "yjlxbm",
                        width: 80,
                        title: "备注"
                    },
                    {
                        sortable: false,
                        field: "ywbh",
                        width: 80,
                        title: "异常原因取消时间"
                    },
                    {
                        sortable: false,
                        field: "sfyy",
                        width: 100,
                        title: "异常原因取消",
                        align: 'center',
                        formatter: function (value, row, index) {

                            var temAttr = (value === "N" ? '' : 'checked ');
                            return '<input type="checkbox"  ' + temAttr + ' id="checkbox' + index + '"  name="checkbox"> <label for="checkbox' + index + '"  class="ui-checkbox"></label><label for="checkbox' + index + '" ></label>';
                        }
                    },
                    {
                        sortable: false,
                        field: "sfyycyy",
                        width: 100,
                        title: "微信是否发送",
                        align: 'center',
                        formatter: function (value, row, index) {

                            var temAttr = (value === "N" ? '' : 'checked ');
                            return '<input  type="checkbox"  ' + temAttr + ' id="checkbox' + index + '"  name="checkbox"> <label for="checkbox' + index + '"  class="ui-checkbox"></label><label for="checkbox' + index + '" ></label>';
                        }
                    }
                ]
            ];

            ycyyOptions.pagination = false;

            $('#ycyyTable').datagrid(ycyyOptions);


        });





    }

}

warningMes.initMenu(); // 菜单初始化
warningMes.initJdr();
$gridDiv.datagrid(warningMes.getOptions()); // 表格初始化

warningMes.bindEvent();

var getTime = function () {
    var date = new Date();
    var time = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}
//异常记录 更新或新增的操作 方法调用
var ycyyAddFunc = function (e) {

    log("99:");
    log(e.target || e.srcElement);



    var $target = $('#addYcyy');

    if ($target.hasClass('disabled')) {
        $.messager.alert('警告', '一次只能新增一行，保存之后才能新增！', 'info');
        return false;
    }

    if ($target.disabled) {
        $target.disabled();
    } else {
        $target.addClass('disabled');
    }



    var $datagrid = $('#yjlxTableDataGrid');
    var data = $datagrid.datagrid('getData');
    var selectedRow = $gridDiv.datagrid('getSelected');

    console.log(selectedRow);
    var zbr = '';
    if (data.rows.length) {
        zbr = data.rows[0]["zbr"];
    } else {
        zbr = getCookie("UserID");
    }


    ycyyAddData = {
        beizhu: "",
        cxh: 0,
        id: "",
        wxsffs: "Y",
        ycyybm: selectedRow["yjlxbm"] ? selectedRow["yjlxbm"] : '',
        ycyymc: "",
        ycyyqc: "Y",
        ycyyqcsj: "",
        ywbh: selectedRow["ywbh"] ? selectedRow["ywbh"] : '',
        yy: "",
        zbr: zbr,
        zbrq: getTime() ? getTime() : ''
    };

    data.rows.push(ycyyAddData);

    ycyyAddData.index = data.rows.length;

    console.log(data);
    $datagrid.datagrid('loadData', data);
    log(data);
    log("新增行结束:");

};


$('#addYcyy').click(function (e) {
    ycyyAddFunc(e);
    return false;
});

$('#closeYcyy').click(function () {
    $('#ycyy').dialog('close');
});


$(document).ready(function () {
    $('#mainContent').css({
        "top": $('#topList').height()
    });



});



$('#formSubmit').click(function () {
    var data = $gridDiv.datagrid('getData')



    $.each(data.rows, function (index, indexItem) {

        var paras = {};
        $.each($('#ohForm').serializeArray(), function (i, item) {
            paras[item.name] = item.value;

        });

        indexItem.hide = "true";

        if (indexItem["jdrjc"] === paras["jdrjc"]) { // 接单人

            var ywbh = (paras["ywbh"] === '' || indexItem["ywbh"] === paras["ywbh"]);
            var rymc = (paras["rymc"] === '' || indexItem["rymc"] === paras["rymc"]);
            var yjnr = (paras["rymc"] === '' || (indexItem["yjnr"].indexOf(paras["yjnr"]) != -1));
            var sfgx = (paras["sfgx"] === '' || indexItem["sfgx"] === paras["sfgx"]);
            if (ywbh && rymc && yjnr && sfgx) {
                indexItem.hide = "false";

            }

        }
    });
    //   console.log(data);

    $gridDiv.datagrid('loadData', data);


});

$('#saveYcyy').click(function () {

    if (!ycyyAddData || !ycyyAddData.ycyymc) {
        $.messager.alert('提醒', '必须选择异常原因后，才能进行保存操作', 'alert');
        return false;
    }
    if (ycyyAddData) {


        ycyySaveBtn(ycyyAddData);
        ycyyAddData = {};

    } else {
        console.log('798');
    }
});


$(document).delegate('.ycyyqcFunc ', 'click', function () {
    var checkbox = $(this).find('input[type=checkbox]').get(0);
    var checked = checkbox.checked
    checkbox.checked = !checked;
    var index = parseInt($(this).attr("index"));
    if (checkbox.checked) {
        $('.ycyyqcsjFunc').eq(index).html(getTime());
    } else {
        $('.ycyyqcsjFunc').eq(index).html('');
    }
    ycyyAddData.ycyyqc = checkbox.checked ? 'Y' : 'N';
    ycyyAddData.ycyyqcsj = $('.ycyyqcsjFunc').eq(index).val();
});



$(document).delegate('.wxsffsFunc ', 'click', function () {
    var checkbox = $(this).find('input[type=checkbox]').get(0);
    var checked = checkbox.checked
    checkbox.checked = !checked;

    ycyyAddData.wxsffs = checkbox.checked ? 'Y' : 'N';
});


$(document).delegate('.beizhu ', 'hover', function () {


    $(this).attr('readonly', false);

});
$(document).delegate('.beizhu ', 'mouseout', function () {

    ycyyAddData.beizhu = $.trim($(this).val());

});