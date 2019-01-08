var updateDate = "20190104";
var globalInfo = {};
$.getScript("./FHome/lib/js/jqueryAndeasyuiAndjson.js?date=" + new Date().getTime(), function () {
    $('#fruitEaseTabs').tabs({
        fit: true,
        bodyCls: "tabPanelCls",
        border: false,
        onSelect: function (title) {

            if (title == "FruitEase") {

                if (!($.browser && $.browser.webkit)) {
                    $("#old").show();
                } else {

                    $("#old").hide();
                }

            } else {
                $("#old").hide();
            }
        }
    });


    /**************************/

    globalInfo.myBrowser = function () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

        if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
            return "Opera"
        } //判断是否Opera浏览器
        else if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        else if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        else {
            return false;
        }
    }

    globalInfo.iw_ChangePassword = null;
    globalInfo.iw_ChangePassword_Login = null;
    globalInfo.ChangePwd = function () {
        // 当PB页面在谷歌或火狐打开时

        if (globalInfo.myBrowser()) {      //谷歌
            $("#old").hide();
            $.messager.alert("警告", "这是FruitEase水果通页面，请用IE浏览器或者360兼容模式下打开");
            return;
        }






        if (window.external != null) {
            if (globalInfo.iw_ChangePassword == null)


                globalInfo.iw_ChangePassword = new W_ChangePassword();
            window.open("/LoadWindow.ashx?WinName=Admin.W_ChangePassword&&iw_ChangePassword=",
            globalInfo.iw_ChangePassword);

        }
    };

    if (globalInfo.myBrowser()) {
        $("#old").hide();
    } else {
        $("#old").show();
    }




    globalInfo.isPwdSame = "";

    globalInfo.IsUpdate = function () {
        globalInfo.isPwdSame = '<%=Session["IsPwdSame"]%>';
        if (globalInfo.isPwdSame === 1) {

            $.messager.alert("警告", "请修改初始密码！");
            if (window.external != null) {
                if (globalInfo.iw_ChangePassword_Login == null)
                    globalInfo.iw_ChangePassword_Login = new W_ChangePassword_Login();
                window.external.Open("/LoadWindow.ashx?WinName=Admin.W_ChangePassword_Login",
                globalInfo.iw_ChangePassword_Login);

            }
        }
        return false;
    };
    globalInfo.IsUpdate();

    globalInfo.Logout = function () {

        $("#old").hide();


        if (window.external != null) {



            $.messager.confirm("确认",
            "真的要退出平台系统吗?",
            function (r) {
                if (r) {

                    window.location.href = window.location.origin + "/Logout.aspx";
                } else {

                    $("#old").show();


                }
            });


        }

        return false;
    };

    /**************************/

    $("#changePassword").click(function () {
        globalInfo.ChangePwd();
    });


    /**************************/

    $(document).delegate('#mini', 'click', function () {

        $("body").toggleClass("changeLayout");

        $("#west .nav-item").removeClass("nav-show");

        $(".nav-item span").show();
        $(".changeLayout .nav-item span").hide();

        var doc = document.body.scrollTop ? document.body : document.documentElement;
        Math.easeout(doc.scrollTop, 0, 4, function () {
            doc.scrollTop = 0;
        });
    });

    /**************************/
    if ($.cookie) {
        $.cookie("userIDName", $("#userName").text());
    }
    /**************************/
    if (globalInfo.myBrowser()) {

        var time = new Date().getTime();
        $('#fruitEaseTabs').tabs('add',
    {
        title: "预警模块",
        content: '<iframe src="/FHome/html/W_Xtdm_Yjxx.html" frameborder="0" width="100%" height="100%" marginwidth="0px" marginheight="0px" scrolling="no" style="display:block"></iframe>',
        closable: true,
        fit: true,
        select: true,
        tools: [{
            iconCls: 'icon iconfont icon-shuaxin',
            handler: function () {
                $('.panel:visible > .panel-body > iframe').get(0).src = $('.panel:visible > .panel-body > iframe').get(0).src;
            }
        }]
    });

    }



    $(document).delegate('.treeMenu li', 'click', function () {
        var title = $(this).text();

        var isSelect = $("#fruitEaseTabs").tabs('exists', title);
        var node = $(this).data('cusData');
        var url = $(this).data('cusData').windowName; $(this).toggleClass('activeLi');


        if (node && node.openStyle && parseInt(node.openStyle) === 0 && globalInfo.myBrowser()) {
            $("#fruitEaseTabs").tabs('select', 'FruitEase'); $("#old").hide();
            $.messager.alert("警告", "这是FruitEase水果通页面，请用IE浏览器或者360兼容模式下打开");
            return;
        }




        // PB页面
        if (node && node.openStyle && (node.openStyle === "0")) {


            $("#fruitEaseTabs").tabs('select', 'FruitEase');
            ts_1.Open(node.id, node.text, "", window.location.origin + "/OpenWindow.aspx?FunID=" + node.id, true);

            return false;

        }

        $("#old").hide();
        var strHtml = '<iframe src="' + url + '?date=' + updateDate + '" frameborder="0" width="100%" height="100%" marginwidth="0px" marginheight="0px" scrolling="no" style="display:block"></iframe>';
        //'exists' 方法来判断 tab 是否已经存在，如果为true，则选中tab
        if (isSelect) {
            $("#fruitEaseTabs").tabs('select', title);

            if (title == "FruitEase") {
                $("#old").show();
            } else {
                $("#old").hide();
            }
            return;
        } else {

            //添加tab菜单
            $("#fruitEaseTabs").tabs('add', {
                title: title,
                content: strHtml,
                closable: true,
                //刷新按钮
                tools: [{
                    iconCls: 'icon iconfont icon-shuaxin',
                    handler: function () {
                        $('.panel:visible > .panel-body > iframe').get(0).contentDocument.location.reload(true);
                    }
                }]
            });
        }
    });

});

