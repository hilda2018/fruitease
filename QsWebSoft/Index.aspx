<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="QsWebSoft.Index" %>
  <!DOCTYPE html>
  <html lang="en" id="fruitease" runat="server">
    
    <head>
      <link rel="shortcut icon" href="FHome/images/favicon.ico" />
      <link href="./FHome/lib/css/easyui.css" rel="stylesheet" type="text/css" />
      <link href="FHome/lib/css/insdep_theme_default.css" rel="stylesheet" type="text/css" />
      <link href="FHome/font/iconfont.css" rel="stylesheet" type="text/css" /></head>
      <link href="http://at.alicdn.com/t/font_991114_hoqht490s8v.css" rel="stylesheet" type="text/css" />    <style type="text/css">
     html {
  overflow-y: scroll;  overflow-x:hidden;
}


.main {
    overflow: hidden;
    position: absolute;
    margin-top: 49px;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;}


body {
  width: 100vw;background:#fff;
  overflow: hidden;height:1200em;
}
.window-mask{
    z-index: 999999!important;
}
.window-shadow{
    z-index: 1000000!important;
}
.window{
    z-index: 1000001!important;
}
    </style></head>
    <body id="mainFrame">   
      <div class="fix" id="north">       
            <div class="logo"></div>        
            <div id="mini">
              <span class="iconW">
                <i class="icon iconfont icon-menu"></i>
              </span>
            </div>
            <div id="menuPos">
              <a href="#" id="menuTit">
                <i class="icon iconfont icon-yonghu"></i>
                <span id="userName">
                  <%=Session[ "UserName"]%>
                    <%=Session[ "Zlcqts"]%></span>
              </a>
              <a href="http://www.fruitease.com" target="_blank">
                <span class="iconW">
                  <i class="icon iconfont icon-home"></i>
                </span>
                <span>水果通官网</span></a>
              <a href="javascript:void(0)" id="changePassword" onclick="globalInfo.IsUpdate()">
                <span class="iconW">
                  <i class="icon iconfont icon-xiugaimima"></i>
                </span>
                <span>修改密码</span></a>
              <a href="/Help.aspx" target="_blank">
                <span class="iconW">
                  <i class="icon iconfont icon-bangzhuwendang"></i>
                </span>
                <span>帮助文档</span></a>
              <a href="javascript:void(0)" id="loginOut" onclick="globalInfo.Logout()">
                <span class="iconW">
                  <i class="icon iconfont icon-quit"></i>
                </span>
                <span>退出系统</span></a>
            </div>
   </div> 


  <div class="main">
        <div id="west" class="nav" unselectable="on">
            <div id="wrapMenuContainer"> <div id="menuContainerId"></div> </div>
        </div>
   
        <div id="center">
          <div id="new">
            <div id="fruitEaseTabs" data-options="fit:true"><div title="FruitEase" data-options="closable:false">&nbsp;</div> </div>  
          
            </div>  
      <script type="text/javascript" src="./Scripts/JQuery-1.6.min.js"></script>
  
    <script type="text/javascript" >
   
       function formatterData(dataArr, index) {
           //第一次加载菜单，主菜单项是没有windowname
           var origin = dataArr && dataArr.rows;
           if (!(origin && origin.length)) {
               return false;
           }
           var menuItems = [];
           $.each(origin, function (i) {
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
       }


       function submenuItems(submenuItemsData) {
           /***** 生成子菜单 ********/
           if (!submenuItemsData && !submenuItemsData.length) {
               return false;
           }

           var str = "";
           $.each(submenuItemsData, function (i, item) {
               str += "<li id=" + item.id + "  title=" + item.text + "  ><a href=\"javascript:void(0);\"> <i class='iconfont  nav-icon  icon-biyan'></i><span>" + item.text + "</span></a></li>";

           });

           $("#" + submenuItemsData[0].parentId).html(str);
           $.each(submenuItemsData, function (i, item) {

               $("#" + submenuItemsData[0].parentId).find('li').eq(i).data("cusData", item);

           });
       }


       var getMenuUrl = "/IFView/IndexHandler.ashx";
       var menuItems;
       $.getJSON("/IFView/IndexHandler.ashx?action=getMenuList&parentId=00", function (initData) {
           menuItems = formatterData(initData);
           if (!menuItems && menuItems[0]) {
               return false;
           }

           var html = "";
           if (menuItems[0].parentId === "00") {

               for (var indexItem = 0; indexItem < menuItems.length; indexItem++) {
                   var item = menuItems[indexItem];
                   var cls = "";
                   if (indexItem == 0) {
                       cls = "nav-unit active-unit2";
                   } else {
                       cls = "nav-unit";

                   }
                   html += "<div class='nav-item'><div class='" + cls + "' index=" + indexItem + "><i class='iconfont  nav-icon icon-" + (indexItem + 1) + "'></i><span>" + item.text + "</span><i class='iconfont nav-icon icon-more2'></i></div><ul id=\"" + item.id + "\" class=\"treeMenu treeMenu" + item.parentId + "\"></ul></div>"

               }
               $("#menuContainerId").html(html);

               for (var indexItem = 0; indexItem < menuItems.length; indexItem++) {
                   var item = menuItems[indexItem];
                   $('.nav-unit').data("menuItems", menuItems[indexItem]);
                   $('.nav-unit').data("index", indexItem);
               }

               $.getJSON("/IFView/IndexHandler.ashx?action=getMenuList&parentid=" + menuItems[0].id, function (data) {

                   $('.nav-unit').eq(0).data('cusData', data);
                   menuItems[0].menuData = formatterData(data, 0);
                   menuItems[0].hasInit = true; // 初始化
                   submenuItems(menuItems[0].menuData)
                   $('.nav-unit').eq(0).parent().addClass('nav-show');

               });

           }
       });

       /**************************/
       $(document).delegate('.nav-unit', 'click', function () {
           $(".nav-item span").show();
           $("body").removeClass("changeLayout");

           $(this).parent().toggleClass('nav-show');
           $(this).addClass('active-unit');


           //未初始化发起，ajax 请求，渲染二级菜单
           var index = parseInt($(this).attr("index"));

           if ($(this).data('cusData')) {
           } else {

               $.ajax({
                   type: 'get',
                   url: getMenuUrl,
                   dataType: "JSON",
                   data: { "action": "getMenuList", "parentid": $(this).next('ul').get(0).id },
                   success: function (data) {

                       $('.nav-unit').eq(index).data('cusData', data);
                       menuItems[index].menuData = formatterData(data, index);
                       menuItems[index].hasInit = true; // 初始化
                       submenuItems(menuItems[index].menuData)
                       $('.nav-unit').eq(index).parent().addClass('nav-show');


                   },
                   error: function (result) {
                       alert(result.status + "：" + result.statusText);
                   }
               }
                    );
           }
       });


    </script>
    <div id="old">
    <script>

        if (!($.browser && $.browser.webkit)) {
            $("#old").show();
        } else {

            $("#old").hide();
        }
        </script>
             <form id="Form2" runat="server" style="position: absolute!important; left: 0px!important;top:0px!important; right: 0px!important; bottom: 0px!important; overflow:hidden!important;margin:0;padding:0;">
              <PB:WindowHost runat="server" ID="win" WindowType=" QsWebSoft.W_Main" Lisetener="W_Main" ClientIDMode="Static"/>
              </form>
          </div>
          </div>  </div>

            
  
     <script type="text/javascript" >

         $.getScript("./FHome/main.js?date=" + new Date().getTime());

    </script>
    </body>

  
  </html>