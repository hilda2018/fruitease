
















var alam=function(type ) {
    if (type === 1) {
        $.messager.alert('警告',"后台程序出错","info");
    }else {
        $.messager.alert('警告',type ,"info");
    }
}

var YjGlobal = (function () {

    var $menuContainer = $('#warningContainer');
    var $gridDiv = $('#tableDataGrid');
    var yjlxSetting = {};

    this.yjlxSetting = yjlxSetting = {
        "tools": {
            getCookie: function(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            },
            getTime: function() {
                var time = new Date().getFullYear() +
                    "/" +
                    (new Date().getMonth() + 1) +
                    "/" +
                    new Date().getDate() +
                    " " +
                    new Date().getHours() +
                    ":" +
                    new Date().getMinutes() +
                    ":" +
                    new Date().getSeconds();
                return time;
            },
            log: function(str) {
                if (window.console) {
                    console.log(str);
                }
            }
        },
        "ycyyAddData": {},
        "baseOptions": {
            nowrap: true,
            rownumbers: true,
            resizable: true,
            striped: true,
            url: window.location.origin + "/IFView/IndexHandler.ashx",
            singleSelect: true,
            halign: "center",
            border: false,
            onLoadSuccess: function(data) {
            }
        },
        "listOptions": function(yjlxbh) {
            var op = {
                height: 200,
                title: "",
                width: 400,
                columns: [
                    [
                        {
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
                            formatter: function(value, row, index) {
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
                onSelect: function(rowIndex, rowData) {

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

                    yjlxSetting.ycyyAddData =
                        $.extend({}, yjlxSetting.ycyyAddData, data.rows[getSelectedIndex]);


                    $('#ycyySelectList').dialog('close');

                }
            };
            return $.extend({}, op, yjlxSetting.baseOptions);
        },
        "tableOptions": function(ywbh,yjlxbh ) {
            var op = {
                height: '100%',
                fit: true,
                showFooter: false,
                border: true,
                onBeforeClose: function() {
           
                  $('#addYcyy').removeClass('disabled');
              
                },
                width: '100%',
                toolbar: "#ycyyToolbar",
                columns: [
                    [
                        {
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
                            formatter: function(value, row, index) {
                                console.log(value);
                                if (value) {
                                    return value;

                                } else {
                                    return "<div class='relative ycyyBtnSelect cursor important'><span >请选择异常原因</span><i class='ui-select-icon'></i></div>";
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
                            width: 180,
                            formatter: function(value, row, index) {


                                if (!row.id && value === '') { // 没id,新增
                                    return '<input class="ui-input beizhu" name="beizhu"  focus />'
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
                            formatter: function(value, row, index) {

                                var temAttr = '';

                                if (row.id) { // 更新
                                    temAttr = (value === "Y" ? 'checked disabled' : 'disabled');
                                } else {
                                    temAttr = ''; // 新增

                                }

                                return '<div class="ycyyqcDiv fieldDiv"  index="' +
                                    index +
                                    '"><input ' +
                                    temAttr +
                                    'type="checkbox" id="checkbox' +
                                    index +
                                    '" name="checkbox' +
                                    index +
                                    '"  >  <label style="width:16px;display:inline-block;height:16px;"  for="checkbox' +
                                    index +
                                    '" class="ui-checkbox"></label><label style="width:16px;display:inline-block;height:16px;" for="checkbox' +
                                    index +
                                    '">   </label></div>';
                            }
                        },
                        {
                            sortable: false,
                            field: "ycyyqcsj",
                            title: "异常原因取消时间",
                            width: 80,
                            formatter: function(value, row, index) {

                                return '<span class="ycyyqcsjSpan">' + value + '</span>';
                            }
                        },
                        {
                            field: "wxsffs",
                            title: "微信是否发送",
                            width: 80,
                            align: 'center',
                            formatter: function(value, row, index) {

                                var temAttr = '';

                                if (row.id) { // 更新
                                    temAttr = (value === "Y" ? 'checked disabled' : 'disabled');
                                } else {
                                    temAttr = ''; // 新增

                                }

                                return '<div class="wxsffsDiv fieldDiv"  index="' +
                                    index +
                                    '"><input ' +
                                    temAttr +
                                    'type="checkbox" style="width:16px;display:inline-block;height:16px;"  id="checkbox' +
                                    index +
                                    '" name="checkbox' +
                                    index +
                                    '"  >  <label style="width:16px;display:inline-block;height:16px;"  for="checkbox' +
                                    index +
                                    '" class="ui-checkbox"></label><label for="checkbox' +
                                    index +
                                    '"></label></div>';
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
        },
        "saveDataFunc": function() { //异常记录  保存操作 方法调用



            if (!yjlxSetting.ycyyAddData || !yjlxSetting.ycyyAddData.ycyymc) {
                $.messager.alert('提醒', '必须选择异常原因后，才能进行保存操作', 'alert');
                return false;
            }

            console.log(yjlxSetting.ycyyAddData);

            if (!yjlxSetting.ycyyAddData) {
                $.messager.alert("警告", "必须传相应的数据参数才能进行保存操作", "alert");
                return false;
            }


            var json = yjlxSetting.ycyyAddData;
            var oneItem = {};
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
            yjlxSetting.ycyyAddData = {};
            //loading 
            $.ajax({
                type: "post",
                url: window.location.origin + "/IFView/IndexHandler.ashx",
                dataType: "json",
                data: oneItem,
                async: true,
                success: function(data) {
                    //loading  end
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

        },
        "ycyyAddFunc": function($target) { //异常记录 更新或新增 方法调用

            if (!$target) {
                $.messager.alert('警告', '必须传入参数！', 'info');
                return false;
            }
            if ($target.hasClass('disabled')) {
                $.messager.alert('警告', '一次只能新增一行，保存之后才能新增！', 'info');
                return false;
            }
                $target.addClass('disabled');

            var zbr = '';

            var data = yjlxSetting.tableGridDiv.datagrid('getData');
            if (data.rows.length) {
                zbr = data.rows[0]["zbr"];
            } else {
                zbr = yjlxSetting.tools.getCookie("UserID");
            }
            yjlxSetting.ycyyAddData.zbr = zbr;
            yjlxSetting.ycyyAddData.zbrq =  yjlxSetting.tools.getTime() ? yjlxSetting.tools.getTime() : ''
            
            yjlxSetting.ycyyAddData.index = data.rows.length;
            data.rows.push(yjlxSetting.ycyyAddData);   
            $("#yjlxTableDataGrid").datagrid('loadData', data);

            console.log("新增行结束:");
        },
        "YJMenuData": [],
        "filterFunc": function() { //预警表格 筛选

            var paras = {};
            $.each($('#ohForm').serializeArray(),
                function(i, item) {
                    paras[item.name] = item.value;
                });

            var ywbh = paras["ywbh"]?paras["ywbh"]:'';
            var yjnr = paras["yjnr"]?paras["yjnr"]:'';
            var ry = paras["ry"]? paras["ry"]:'';
            var jdrjc = paras["jdrjc"]?paras["jdrjc"]:'';
            var sfgx = paras["sfgx"]?paras["sfgx"]:'';

            var yjlxbm = $('.activeMenuListTitle').attr('data-id');

            if ($('.activeTheLastItem').attr('data-id')) {
                yjlxbm = $('.activeTheLastItem').attr('data-id');
            }
            $gridDiv.datagrid('reload', { "yjlxbm": yjlxbm, "page": 1, "rows":200, "action": "GetTableData","ywbh":ywbh,"yjnr":yjnr,"ry":ry,"jdrjc":jdrjc,"sfgx":sfgx });
          

        },
        "initDrid": function() {

            // 初次加载全部数据
            $('.menuTopTitle').addClass('activeMenuListTitle');
            $gridDiv.datagrid({
                "toolbar": "#topList",
                "url": window.location.origin + "/IFView/IndexHandler.ashx",
                dataType: "json",
                queryParams: {
                    "yjlxbm": "00",
                    "action": "GetTableData",
                    "page": 1,
                    "rows": 200
                },
                "columns": [
                    [
                        {
                            sortable: false,
                            field: "rownumber",
                            title: "序号",
                            align:"center",
                            width: 40
                        },
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
                            formatter: function(value, row, index) {

                                var temAttr = (value === "N" ? '' : 'checked ');
                                return '<input disabled type="checkbox"  ' +
                                    temAttr +
                                    ' id="checkbox' +
                                    index +
                                    '"  name= "checkbox"> <label for="checkbox' +
                                    index +
                                    '"  class="ui-checkbox"></label><label for="checkbox' +
                                    index +
                                    '" ></label>';
                            }
                        },
                        {
                            field: "sfgx",
                            width: 80,
                            title: "是否勾选",
                            align: 'center',
                            formatter: function(value, row, index) {

                                var temAttr = (value === "N" ? '' : 'checked ');
                                return '<input disabled type="checkbox"  ' +
                                    temAttr +
                                    ' id="sfgx_checkbox' +
                                    index +
                                    '"  name="checkbox"> <label for="sfgx_checkbox' +
                                    index +
                                    '"  class="ui-checkbox"></label><label for="sfgx_checkbox' +
                                    index +
                                    '" ></label>';

                            }
                        }
                    ]
                ],
                "nowrap": true,
                fit: true,
                rowStyler: function(index, row) {
                    if (row.hide && row.hide === "true") {
                        return 'display:none;height:0;font-size:0;line-height:0;tansition:0.5s all;-webkit-transition:0.5s all;';
                    }
                },
                rownumbers: false,
                singleSelect: true,
                idField: "ry",
                halign: "center",
                border: false,
                onBeforeLoad: function() {
                    console.log('beforeload');
                },
                loadFilter: function(data) {
                    if (data.rows && data.result) {
               
                    } else {
                        alam(data.msg);
                    }

                    return data;
                },
                onLoadSuccess: function(data) {

                    console.log('onLoadSuccess');
                },
                onLoadError: function(data) {

                    alam(data.msg);
                },
                resizable: true,
                striped: true,
                width: "100%",
                height: "600",
                pagination: true,
                pageNumber: 1,
                pageSize: 200,
                pageList: [200, 400, 600, 800, 1000]
            });
        }(),
        "YJDataFormatter": function(dataArr, index) { //对后台传过来的数据进行修造
            var origin = dataArr && dataArr.rows;
            if (!(origin && origin.length)) {
                return false;
            }
            var menuItems = [];
            $.each(origin,
                function(i) {

                    menuItems.push({
                        "yjlxmc": origin[i].yjlxmc ? $.trim(origin[i].yjlxmc) : "",
                        "yjlxbh": origin[i].yjlxbh ? origin[i].yjlxbh : "",
                        "IsLast": origin[i].IsLast ? origin[i].IsLast : "",
                        "syjbh": origin[i].syjbh ? origin[i].syjbh : "",
                        "xh": origin[i].xh ? origin[i].xh : "",
                        "parentIndex": index ? index : "",
                        "selfIndex": i
                    });

                });
            return menuItems;
        },
        "initMenuItems": function(menuItems) { //一级菜单

            if (!menuItems && menuItems[0]) {
                return false;
            }

            var strhtml = "";
            var tophtml = "";
            for (var indexItem = 0; indexItem < menuItems.length; indexItem++) {

                var item = menuItems[indexItem];

                if (item && item.yjlxbh && item.yjlxbh === "00") {
                    tophtml = '<div data-syjbh="' +
                        item.syjbh +
                        '"   class="menuTopTitle menuListTitle" data-id="' + item.yjlxbh + '"    id="' + item.yjlxbh + '"  ><i class="icon icon-menu"><svg><use xlink:href="#icon-menu"></use></svg></i><i>' +
                        item.yjlxmc +
                        '</i>' +
                        '</div><a id="btnEffect" href="javascript:;" class=""> <span class="left">&lt;&lt;</span><span class="right">&gt;&gt;</span> </a> ';
                } else {
                    strhtml += '<div class="menuSection"> <div class="menuListTitle"  data-syjbh="' +
                        item.syjbh +
                        '"  data-id="' +
                        item.yjlxbh +
                        '"  ><i class="icon icon-item"><svg><use xlink:href="#icon-item"></use></svg></i><i>  ' +
                        item.yjlxmc +
                        '</i> </div> <ul data-syjbh="' +
                        item.syjbh +
                        '"   class="hide  subMenu"    data-id="' + item.yjlxbh + '"  id="' +
                        item.yjlxbh +
                        '"  ></ul>  </div>';
                }


            }

            $menuContainer.html(tophtml + strhtml);


        },
        "getMenuDetailFunc": function(submenuItemsData) {

            console.log(yjlxSetting.YJMenuData);

            /***** 生成子菜单 ********/
            if (!submenuItemsData && !submenuItemsData.length) {
                return false;
            }

            var submenuHtml = "";

            $.each(submenuItemsData,
                function(iItem, indexItem) {

                    if (indexItem.IsLast === "1") { //最后一个

                        submenuHtml += '<li  data-syjbh="' +
                            indexItem.syjbh +
                            '"   data-id="' + indexItem.yjlxbh + '"   id="' +
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


            $('#' + submenuItemsData[0]["syjbh"]).delegate('.theLastItem',
                'click',
                function(e) {
                    console.log(2);
                    yjlxSetting.lastItemClick($(e.currentTarget));
                    return false;
                });


        },
        "lastItemClick": function($taerget) {

            $(".activeTheLastItem").removeClass("activeTheLastItem");
            $taerget.addClass("activeTheLastItem");
            var yjlxbm = $taerget.attr("id");


            if (yjlxbm === "00") {
                yjlxbm = "00";
                $gridDiv.datagrid('reload',
                    { "yjlxbm": "00" + '', "page": "1", "rows": "200", "action": "GetTableData" });
                return false;
            }

            $gridDiv.datagrid('reload', { "yjlxbm": yjlxbm, "page": "1", "rows": "200", "action": "GetTableData" });
            yjlxSetting.listGridDiv = $('#yjlxListDataGrid').datagrid(yjlxSetting.listOptions(yjlxbm));

        },
        "menuTitleClick": function($menuTitle) {
            // 给一级菜单绑定 点击事件

            $('.menuListTitle').removeClass("activeMenuListTitle");
            $menuTitle.addClass("activeMenuListTitle");
            if ($menuTitle.data("data")) {
                console.log($menuTitle.data("data"));
                console.log("已经初始化");
                return false;
            }


            var index = $menuTitle.parent().index();
            var $thisParent = $menuTitle.parent();
            $thisParent.find('ul').toggleClass("hide");


            //已经初始化  

            //  console.log($menuTitle);


            //未初始化发起，ajax 请求，渲染二级菜单

            var id = $menuTitle.attr("data-id");
            if (!id) {
                $.messager.alert("提示", "系统出错：" + errorMsg);
            }
            $.ajax({
                type: "Get",
                url: window.location.origin +
                    "/IFView/IndexHandler.ashx?action=GetWarningMenuList&parentId=" +
                    id,
                dataType: "json",
                async: true,
                success: function(menuData) {

                    $menuTitle.data("data", menuData);
                    console.log($menuTitle);
                    //防止多次请求     初始化数据 次级菜单
                    yjlxSetting.YJMenuData[index].menuData = yjlxSetting.YJDataFormatter(menuData, index);
                    console.log(yjlxSetting.YJMenuData[index].menuData);
                    yjlxSetting.YJMenuData[index].hasInit = true; // 初始化
                    yjlxSetting.getMenuDetailFunc(yjlxSetting.YJMenuData[index].menuData);
                },
                error: function(errorMsg) {
                    $.messager.alert("提示", "系统出错：" + errorMsg);
                }
            });

        },
        "getInitMenuData": function(this_) {
      
            $.ajax({
                type: "get",
                url: window.location.origin + "/IFView/IndexHandler.ashx?action=GetWarningMenuList&parentId=00",
                dataType: "json",
                async: true,
                success: function(initData) {

                    $menuContainer.data("data", initData);
                    this_.YJMenuData = this_.YJDataFormatter(initData);
                    this_.initMenuItems(this_.YJMenuData);
                    // 初次加载全部数据
                    $('.menuTopTitle').addClass('activeMenuListTitle');
                }
            });

        },
        "initJdr": function() {

            $.ajax({
                type: "get",
                url: window.location.origin + "/IFView/IndexHandler.ashx?action=GetJdrData",
                dataType: "json",
                async: true,
                success: function(initData) {

                    if (!initData && !initData.length) {
                        return false;
                    }


                    var tempHtml = '<option value = "">全部</option>';
                    $.each(initData.rows,
                        function(i, item) {
                            tempHtml += '<option value = "' + item.khjc + '">' + item.khjc + '</option>';
                        });
                    $('#jdrjc').html(tempHtml);

                    setTimeout(function() {

                            var config = {
                                'base': '../lib/theme/modern/js'
                            };
                            seajs.config(config).use(['common/ui/Select'],
                                function(Select) {

                                    $('select').selectMatch();
                                });


                        },
                        500);

                }

            });
        }(),
        "dialogInit": function() {
            ycyySelectList

            $('#ycyySelectList').dialog({
                height:246,
                width:400,
                closed: true,
                resizable: true,
                draggable: true
            });
            $('#ycyyInputTable').dialog({
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
                draggable: true,
                onBeforeOpen: function() {


                    var selectedRow = $gridDiv.datagrid('getSelected');
                    console.log(selectedRow);

                    if (!selectedRow) { // 没有选择行

                        $.messager.alert('警告', '必须选择一行数据后，才能进行操作！', 'info');
                        return false;
                    }

                    var params = {
                        "yjlxbh": selectedRow["yjlxbm"] ? selectedRow["yjlxbm"] : '',
                        "ywbh": selectedRow["ywbh"] ? selectedRow["ywbh"] : ''
                    };

                    if (params["ywbh"] && params["yjlxbh"]) {

                        yjlxSetting.tableGridDiv = $('#yjlxTableDataGrid').datagrid(yjlxSetting.tableOptions(params["ywbh"], params["yjlxbh"] ));
                        yjlxSetting.listGridDiv = $('#yjlxListDataGrid').datagrid(yjlxSetting.listOptions( params["yjlxbh"]) );

                        
                        yjlxSetting.ycyyAddData = {
                            beizhu: "",
                            cxh: 0,
                            id: "",
                            wxsffs: "N",
                            ycyybm: params["yjlxbh"]? params["yjlxbh"]: '',
                            ycyymc: "",
                            ycyyqc: "N",
                            ycyyqcsj: "",
                            ywbh: params["ywbh"]? params["ywbh"]: '',
                            yy: ""
                        };


                    } else {
                        alam(1);
                    }

                }
            });
        }()
            
};
  



    this.yjlxSetting.getInitMenuData(this.yjlxSetting);//菜单初始化

    $menuContainer.delegate('.menuListTitle','click',function(e) {

        console.log(e)

        if (e.currentTarget.id === "00") {
            //全部 菜单触发
            yjlxSetting.lastItemClick($(e.currentTarget));
        } else {

            // console.log('menuListTitle Click');
            yjlxSetting.menuTitleClick($(e.currentTarget));
        }
        return false;
    });

    $(document).delegate("#addYcyy",
        'click',
        function(e) {

        
            yjlxSetting.ycyyAddFunc($(e.currentTarget));
            $('#saveYcyy').removeClass('disabled');//保存 按钮可点击
            
            $('#addYcyy').addClass('disabled');//新增 按钮可点击
    });


    $(document).delegate("#closeYcyy", 'click',
    function() {
        $('#ycyyInputTable').dialog('close');//面板 关闭
        $('#addYcyy').removeClass('disabled');//新增 按钮可点击
        yjlxSetting.ycyyAddData = {};//清空 新增的数据
    });

    $(document).delegate("#saveYcyy", 'click',
    function(e) {
    
        $('#saveYcyy').addClass('disabled');//保存 按钮 不可点击
        yjlxSetting.saveDataFunc(e);
        $('#ycyySelectList').dialog('close');//面板 关闭
        $('#addYcyy').removeClass('disabled');//新增 按钮可点击
        yjlxSetting.ycyyAddData = {};//清空 新增的数据
    });


    
    $(document).delegate("#btnEffect", 'click',
        function() {
        
            $('body').toggleClass('maxDataGrid');
            $(this).toggleClass('active');
        });



    $('#ycyyInputTable').delegate(".fieldDiv", 'click',
        function(e) {
    
            var checkbox = $(this).find('input[type=checkbox]').get(0);
            var checked = checkbox.checked
            checkbox.checked = !checked;
            var field = $(e.target).closest('td').attr("field");
            var index = $(e.target).closest('tr').attr("index");

            if (field === "wxsffs") {
                yjlxSetting.ycyyAddData.wxsffs = checkbox.checked ? 'Y' : 'N';



            } else if( field === "ycyyqc"){
                yjlxSetting.ycyyAddData.ycyyqc = checkbox.checked ? 'Y' : 'N';

              
                if (checkbox.checked) {

                    var time =yjlxSetting.tools.getTime();
                    $(".ycyyqcsjSpan").eq(index).html(time);
                    console.log(  $('.ycyyqcsjSpan').eq(index) );
                    yjlxSetting.ycyyAddData.ycyyqcsj = time;
                    console.log(time);

                } else {
                    $('.ycyyqcsjSpan').eq(index).html('');
                    yjlxSetting.ycyyAddData.ycyyqcsj = '';
                }
            }
            console.log(field);
        });

    $('#ycyyInputTable').delegate(".datagrid-row-selected input[name='beizhu']", 'change',function(e) {
        yjlxSetting.ycyyAddData.beizhu = $(this).val();
    });

    $(document).delegate(".ycyyBtnSelect", 'click',
        function(e) {
            $('#ycyySelectList').dialog('open');
    });
    $(document).delegate("#filterFunc", 'click', function(e) {
        yjlxSetting.filterFunc();
    });
    
    return this;
}());






$('#ycyyInput').click(function() {

    $('#ycyyInputTable').dialog('open');
});


function autoResize() {
    
    $('#mainContent').css({ "height":$(window).height()- $('#topList').height()+'px' });
    $('.datagrid-wrap ').css({ "height": ($(window).height() - $('#topList').height() - 32) });
}

$(document).ready(function () {


    $(window).resize(function(){ setTimeout(autoResize,500)});
});
