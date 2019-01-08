 var baseUrl = window.location.origin + "/IFView/IndexHandler.ashx";


 var ajaxPost = function(url, data, success, error){

        $.ajax({
            type: 'post',
            url: url,
            data: data,
            dataType: 'json',
            success: function (data) {
                if(success){ success(data); }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if(!error){return false;}
                error({
                    jqXHR: jqXHR,
                    textStatus: textStatus,
                    errorThrown: errorThrown
                });
            }
        });
    };


var main={
    "yjxxMenuData":""
};

/**************************menu**************************/
var $menuContainer = $('#warningContainer');
var $gridDiv = $('#tableDataGrid');

var formatData = function(dataArr, index) { //对后台传过来的数据进行修造
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
};

// 第一次 初始化菜单       参数设置
  
var menuParams ={"action":"GetWarningMenuList","parentId":"00"};   // 请求参数
var menuHandler = function(initData){    // 处理函数

    $menuContainer.data("data", initData);
    var menuItems = main.yjxxMenuData = formatData(initData);

    if (!menuItems && menuItems[0]) { return false; }

    var strhtml = "";
    var tophtml = "";
    for (var iItem = 0; iItem < menuItems.length; iItem++) {

        var item = menuItems[iItem];
        if (item && item.yjlxbh && item.yjlxbh === "00") {
            tophtml = '<div data-syjbh="'+ item.syjbh + '"   class="menuTopTitle menuListTitle" data-id="' + item.yjlxbh + '"    id="' + item.yjlxbh + '"  ><i class="icon icon-menu"><svg><use xlink:href="#icon-menu"></use></svg></i><i>' +
                item.yjlxmc + '</i>' + '</div><a id="btnEffect" href="javascript:;" class=""> <span class="left">&lt;&lt;</span><span class="right">&gt;&gt;</span> </a> ';
        } else {
            strhtml += '<div class="menuSection"> <div class="menuListTitle"  data-syjbh="' + item.syjbh + '"  data-id="' +  item.yjlxbh +'"  ><i class="icon icon-item"><svg><use xlink:href="#icon-item"></use></svg></i><i>  ' +
                item.yjlxmc +'</i> </div> <ul data-syjbh="' + item.syjbh + '"   class="hide  subMenu"    data-id="' + item.yjlxbh + '"  id="' +
                item.yjlxbh +'"  ></ul>  </div>';
        }
    }

    $menuContainer.html(tophtml + strhtml);
    //  初次加载全部数据
     $('.menuTopTitle').addClass('activeMenuListTitle');

};



// 接单人请求  
$('#jdrjc').combobox({    
    url:baseUrl+"?action=GetJdrData",   
    valueField:'khjc',    
    textField:'khjc', 
    loadFilter:function(data){
        data.rows.unshift({"khjc":"全部"});
        return data;
    }  
});  


// 给一级菜单绑定 点击事件
  $(document).delegate('.menuListTitle','click',function(e){


        var $this = $(this);
        $('.menuListTitle').removeClass("activeMenuListTitle");
        $this.addClass("activeMenuListTitle");

        if (e.currentTarget.id === "00") {
            //全部 菜单触发
            $gridDiv.datagrid('reload', { "yjlxbm": "00" + '', "page": "1", "rows": "200", "action": "GetTableData" });
            return false;
        } 



        if ($this.data("data")) { // 判断是否请求过数据  //已经初始化  
            console.log($menuTitle.data("data"));
            console.log("已经初始化");
            return false;
        }

        //未初始化发起，ajax 请求，渲染二级菜单
        var $thisParent = $this.parent();
        var index = $thisParent.index();

        $thisParent.find('ul').toggleClass("hide");
        var id = $this.attr("data-id");
        if (!id) {
            $.messager.alert("提示", "系统出错：" + errorMsg);
        }

        var subMenuParms = {
            "action":"GetWarningMenuList",
            "parentId":id
        };

        var subMenuHandler = function(menuData){
            $this.data("data", menuData);
            //防止多次请求     初始化数据 次级菜单
            main.yjxxMenuData[index].menuData = formatData(menuData, index);
            console.log(main.yjxxMenuData[index].menuData);
            main.yjxxMenuData[index].hasInit = true; // 初始化
            // 将求得的二级菜单数据变为html 
            var subData = main.yjxxMenuData[index].menuData;
            /***** 生成子菜单 ********/
            if (!subData && !subData.length) {  return false; }
            var submenuHtml = "";

            $.each(subData, function(i, item) {
                submenuHtml += '<li  data-syjbh="' + item.syjbh + '"   data-id="' + item.yjlxbh + '" id="' + item.yjlxbh + '"   class="' + item.syjbh + ' theLastItem"   ><i class="icon icon-circle"><svg><use xlink:href="#icon-circle"></use></svg></i><i> ' + item.yjlxmc + '<i></li>';
            });
            var $subObj = $('#' + subData[0]["syjbh"]);
            $subObj.html(submenuHtml);
            $subObj.delegate('.theLastItem', 'click',  function(e) {
           
                var $taerget = $(e.currentTarget);
                $(".activeTheLastItem").removeClass("activeTheLastItem");
                $taerget.addClass("activeTheLastItem");
                var yjlxbm = $taerget.attr("id");
                if (yjlxbm === "00") {
                    $gridDiv.datagrid('reload', { "yjlxbm": "00" + '', "page": "1", "rows": "200", "action": "GetTableData" });
                    return false;
                }

                $gridDiv.datagrid('reload', { "yjlxbm": yjlxbm, "page": "1", "rows": "200", "action": "GetTableData" });
                //yjlxSetting.listGridDiv = $('#yjlxListDataGrid').datagrid(yjlxSetting.listOptions(yjlxbm))
                return false;
                });

        };
        //  点击一级菜单  发起请求
        ajaxPost(baseUrl,subMenuParms,subMenuHandler);  
  
  });


  /***********************end***menu**************************/



var     gridDivOptions = 








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

          


        },
        "getMenuDetailFunc": function(submenuItemsData) {

          

        },
        "lastItemClick": function($taerget) {

 

        },
        "menuTitleClick": function($menuTitle) {
           

        },

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


//  第一次 初始化菜单  发起请求
ajaxPost(baseUrl,menuParams,menuHandler);