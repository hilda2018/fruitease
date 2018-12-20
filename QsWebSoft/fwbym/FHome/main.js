
var globalInfo = {};
globalInfo.menu = {};
globalInfo = {
    "tabsCount":0,
    "containMenuId":"menuContainerId",
    "items":[],
	"myBrowser": function() {
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
	},
    "formatterData": function(dataArr,index) {
        //第一次加载菜单，主菜单项是没有windowname
        var origin = dataArr && dataArr.rows;
        if (!(origin && origin.length)) {
            return false;
        }
        var menuItems = [];
  

        $.each(origin, function(i) {
            var temMenuItem = {
                "text": origin[i].Title ? $.trim(origin[i].Title) : "",
                "id": origin[i].ID ? origin[i].ID : "",
                "isLast": origin[i].IsLast ? origin[i].IsLast : "",
                "isValid": origin[i].IsValid ? origin[i].IsValid : "",
                "state": "closed",
                "parentId": origin[i].ParentID ? origin[i].ParentID : "",
                "windowName": origin[i].WindowName ? origin[i].WindowName : "",
                "seq": origin[i].Seq ? origin[i].Seq : "",
                "openStyle": origin[i].OpenStyle ? origin[i].OpenStyle : "",
                "parentIndex": index ? index : "",
                "selfIndex": i
            };
            menuItems.push(temMenuItem);

        });
        
        return menuItems;
    },
    "initMenuItems": function(menuItems) {

		if (!menuItems && menuItems[0]) {
			return false;
		}
        // console.log(menuItems );


        $("#" + globalInfo.containMenuId).accordion({
            animate: false,
            border: false,
            multiple: false,
            selected: 0
        });

       if (menuItems[0].parentId === "00") {

            for (var indexItem = 0; indexItem < menuItems.length; indexItem++) {
                var item = menuItems[indexItem];
                 $("#" + globalInfo.containMenuId).accordion("add",
                    {
                        title: item.text,
                        content: "<ul id=\"" + item.id + "\" class=\"treeMenu treeMenu" + item.parentId + "\"></ul>"
                    }
                );

            }

        }

        $("#" + globalInfo.containMenuId).accordion({
            onSelect: function(title, index) {

                var $panel = $(this).accordion("getSelected");
                $(this).find(".panel").removeClass("activePanel");
                
                $panel.closest(".panel").addClass("activePanel");
                
                if ( globalInfo.items[index].hasInit) {
                   // console.log("已经初始化");
                    return false;
                } //已经初始化  


                
                //未初始化发起，ajax 请求，渲染二级菜单
                var getMenuUrl = "IFView/IndexHandler.ashx?action=getMenuList&parentid=" + menuItems[index].id;
                $.ajax({
                    type: "Get",
                    url: getMenuUrl,
                    dataType: "json",
                    async: true,
                    success: function(menuData) {
                        //防止多次请求     初始化数据 次级菜单

                        globalInfo.items[index].menuData =  globalInfo.formatterData(menuData,index);
                        globalInfo.items[index].hasInit = true;// 初始化
                        //  console.log(globalInfo.items[index].menuData );
                        globalInfo.submenuItems(globalInfo.items[index].menuData );
					  
                    },
                    error: function(errorMsg) {
                        $.messager.alert("提示", "系统出错：" + errorMsg);
                    }
                });

            }
        });

	},
	"submenuItems": function(submenuItemsData) {

	
            /***** 生成子菜单 ********/
	    if ( !submenuItemsData && !submenuItemsData.length ) {
            return false;
	    }
	    $("#" + submenuItemsData[0].parentId).tree({
			data: submenuItemsData,
			onClick: function(node) {
			    // 当PB页面在谷歌或火狐打开时
				// console.log(node);
				var state = "";
				var parentIndex = parseInt(node.parentIndex);
				var selfIndex = parseInt(node.selfIndex);
				//console && console.log(node);
				if (node && node.openStyle && parseInt(node.openStyle) === 0 && globalInfo.myBrowser()) {

					$.messager.alert("警告", "这是旧版水果通页面，请用IE浏览器或者360兼容模式下打开");
					return;
				}


				if (!parentIndex && node.parentId !== "0001") {
					return false;
				} else if (node.parentId === "0001") {
					state = globalInfo.items[0]["menuData"][node.selfIndex]["state"];

				} else {

					state = globalInfo.items[parentIndex]["menuData"][node.selfIndex]["state"];
				}


				// 不是最后一个，且有链接,且 有效,增加选项卡
				if (node.windowName !== "" && node.isLast === "1" && node.isValid === "1" && node.id && node.id !== "00" && state === "closed") {

					globalInfo.addPanel(node);
				} else {
					return false;
				}
			}
		});
	},
    "initMenu": function() {
        $.ajax({
            type: "get",
            url: "IFView/IndexHandler.ashx?action=getMenuList&parentId=00",
            dataType: "json",
            async: true,
            success: function(initData) {
                globalInfo.items = globalInfo.formatterData(initData);
                globalInfo.initMenuItems( globalInfo.items );
            }
        });
    }
  
}


globalInfo.initMenu();// 菜单初始化

if (globalInfo.myBrowser()) {
    $('#old').hide();
    //  console && console.log("hide");
} else {
    $('#old').show();
    //   console && console.log("show");
}


globalInfo.addPanel = function(node) {/***********增加tab 页面 **************/
    // 非PB页面
    if (node && node.openStyle && (node.openStyle === "2")) {

        globalInfo.tabsCount++;
        $("#fruitEaseTabs").tabs("add",
            {
                title: node.text,
                bodyCls: "panelCls",
                fit: true,
                id: node.id,
                content: '<iframe parentIndex ="' +
                    node.parentIndex +
                    '"  selfIndex ="' +
                    node.selfIndex +
                    '"   id="mainIframe"  name="mainIframe" src="' +
                    node.windowName +
                    '" frameborder="0" style="width:100%;height:100%;" scrolling="hidden" ></iframe>',
                closable: true
            });

        node.state = "open";
        if (node.parentId === "0001") {
            globalInfo.items[0]["menuData"][node.selfIndex]["state"] = "open";
        } else {
            globalInfo.items[node.parentIndex].menuData[node.selfIndex]["state"] = "open";
        }

    }

    // PB页面
    if (node && node.openStyle && (node.openStyle === "0")) {

        node.isSelected = true;
        globalInfo.tabsCount++;
        ts_1.Open(node.id, node.text, "", "/OpenWindow.aspx?FunID=" + node.id, true);
        node.state = "open";
        if (node.parentIndex) {
            globalInfo.items[node.parentIndex].menuData[node.selfIndex]["state"] = "open";
        } else {
            globalInfo.items[0].menuData[node.selfIndex]["state"] = "open";
        }
    }
}



globalInfo.bindEvent = function() {


    $("#menuShift").click(function() {

        if (this.menuShow) {

            $("#mainFrame").removeClass("menuHide");
        } else {
            $("#mainFrame").addClass("menuHide");
        }
        this.menuShow = !this.menuShow;
    });


    $("#fruitEaseTabs").tabs({
        onBeforeClose: function(title, index) {
            var closePanel = $(this).tabs("getTab", index);
            var parentIndex = parseInt($(closePanel).find("iframe").attr("parentIndex"));
            var selfIndex = parseInt($(closePanel).find("iframe").attr("selfIndex"));
           // console.log(parentIndex);
 console.log(selfIndex);

            if (parentIndex ) {

             globalInfo.items[parentIndex].menuData[selfIndex]["state"] = "closed";
            } else if (selfIndex) {

                globalInfo.items[0].menuData[selfIndex]["state"] = "closed";
            } else {

                // 首页。

            }

        }

    });


    globalInfo.iw_ChangePassword = null;
    globalInfo.iw_ChangePassword_Login = null;
    globalInfo.ChangePwd = function() {
        // 当PB页面在谷歌或火狐打开时

        if(globalInfo.myBrowser() ){

            $.messager.alert("警告", "这是旧版水果通页面，请用IE浏览器或者360兼容模式下打开");
            return;
        }
   
        if (window.external != null) {
            if (globalInfo.iw_ChangePassword == null)
                globalInfo.iw_ChangePassword = new W_ChangePassword();
            window.open("/LoadWindow.ashx?WinName=Admin.W_ChangePassword&&iw_ChangePassword=",
                globalInfo.iw_ChangePassword);

        }
    };


    globalInfo.isPwdSame = "";

    globalInfo.IsUpdate = function() {
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
    };
    globalInfo.IsUpdate();

    globalInfo.Logout = function() {
        if (window.external != null) {


            $.messager.confirm("确认",
                "真的要退出平台系统吗?",
                function(r) {
                    if (r) {
                      //  console.log("确认");
                        window.location.href = window.location.origin + "/Logout.aspx";
                    }
                });


        }
    };


    $("#loginOut").click(function() {
        globalInfo.Logout();
    });

    $("#changePassword").click(function() {
        globalInfo.ChangePwd();
    });











};


$(document).ready(function() {

    globalInfo.bindEvent();
});


