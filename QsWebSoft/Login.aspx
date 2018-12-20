<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="QsWebSoft.Login" %>

<!DOCTYPE html>
<html lang="zh-CN" id="fruitease" runat="server">
<head >
    <meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>水果通服务平台</title>
    <!--样式表优先级主题样式必须在easyui组件样式后 -->
    <link rel="shortcut icon" href="./FHome/images/favicon.ico">
    <link href="./FHome/lib/css/easyui.css" rel="stylesheet" type="text/css">
    <link href="./FHome/lib/css/icon.css" rel="stylesheet" type="text/css">
    <link href="./FHome/lib/css/insdep_theme_default.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="./FHome/lib/js/jqueryAndeasyuiAndjson.js"></script>
    <script type="text/javascript" src="./Scripts/ExtPB_Net.js"></script>

   
 
</head>

<body class="theme-login-layout"  >
    <div class="theme-login-header"></div>
    <div id="theme-login-form">
        <div class="QRcode"></div>
        <div class="QRcode-layout hide">
            <div class="QRcode-layout-close"></div>
            <div class="QRcode-header">
                <b>APP扫码登录</b>
                <span>请使用最新版APP进行扫码登录</span>
            </div>
            <div class="QRcode-content">
                <img src="images/wxewm.png" width="215">
            </div>
        </div>

        <form id="formLogin" class="theme-login-form" method="post" runat="server">

            <dl>
                <dt>  <img src="./FHome/images/fruitease.png" /></dt>
                <dt class="userLogin">账户登陆</dt>

                <dd class="theme-login-text" >
                    <label> 用户名：</label>
                    <div class="fe-textbox  mb20">
                        <asp:TextBox ID="UserID" runat="server" name="username" class="fe-textbox-input" customTip="请输入登录用户帐号"/> 
                    </div>
                </dd>
                <dd class="theme-login-text  mb20" >
                    <div class="fe-textbox  mb20">
                        <label>密码： </label>
                        <asp:TextBox ID="Password" TextMode="Password" runat="server" name="password" class="fe-textbox-input" customTip="输入的帐号密码长度少于6位,请重新输入！" minlength="6" autocomplete="off"/> 
                    </div>
                </dd>
                <dd class="theme-login-text  mb20" >
                    <label> 验证码：</label>
                    <div class="fe-textbox">
                        <span class="wrapCodeInput">
                            <asp:TextBox ID="Code" runat="server" name="code" class="fe-textbox-input" customTip="请输入验证码" autoComplete="false" /> 
                        </span>
                        <span class="wrapCodeImg">
                            <asp:Image class="yz_img" id="VeriryCode" runat="server" src="/captcha/captcha.ashx?w=65&h=24"  />
                        </span>
                    </div>
                </dd>

                <dd id="submitWrap">
                    <button class="easyui-linkbutton button" type="submit"  id="submit">Sign in</button>
                </dd>
            </dl>

            <div style="display: none">
                <PB:Updater ID="Updater" runat="server"/>
            </div>

        </form>
        
        
        <div class="theme-login-footer"  >
            <div>
                
                <a href="/ExtPB.Net/qq.exe" target="_blank"  >客户端插件程序下载</a> | 
                <a href="/微信说明.txt" target="_blank"   >微信使用说明</a> | 
                <a href="https://www.freshport.com"  target="_blank" >生鲜港</a> | 
                <a href="http://www.fruitease.com">联系我们</a>  | 
                <a href="/中文说明.txt" target="_blank" >平台系统使用说明...</a>  
            </div>
            <div>&copy; 2008 - <script>var year=new Date;document.write(year.getFullYear());</script>上海欧恒进出口有限公司 版权所有</div>
        </div>

    </div>


<script type="text/javascript">


    
    $.extend($.fn.validatebox.defaults.tipOptions,
        {
            onShow: function() {
                $(this).tooltip("tip").css({ backgroundColor: "#ff7e00", border: "none", color: "#fff" });

            }
    });
        

    $(".QRcode").click(function() {
        $(".QRcode-layout").removeClass("hide");

    });

    $(".QRcode-layout-close").click(function() {
        $(".QRcode-layout").addClass("hide");
     });
        
        

    var submintForm = function() {
        
        
        var $userId = $("#UserID");

        var userid = $.trim( $userId.val() );   

        if (userid.length === 0) {
            $.messager.alert("警告","请输入登录用户帐号!");
            $userId.focus();
            return;
        }
 
        var $Password= $("#Password");

        var password= $.trim( $Password.val() );   
        

        if (password.length === 0) {
            $.messager.alert("警告","请输入帐号密码!");
            $Password.focus();
            return;
        }

        if (password.length < 6) {
            $.messager.alert("警告","输入的帐号密码长度少于6位,请重新输入!");
            $Password.focus();
            return;
        }
        
        
        var $Code= $("#Code");

        var code= $.trim( $Code.val() );   
        

        if (code.length == 0) {
            $.messager.alert("警告","请输入验证号!");
            $Code.focus();
            return;
        }
        

        $("#formLogin").submit();
        
    }
    
    
    

    /*登录相关事件绑定 */

    $("#UserID").click(function(ev) {

        if (ev.keyCode === 13) {
            $("#Password").focus();
        }
    });


    $("#Password").click(function(ev) {
        if (ev.keyCode === 13) {
            $("#Code").focus();
        }
    });


    $("#Code").click(function(ev) {
        if (ev.keyCode === 13) {
            submintForm();
        }
    });

    $('#VeriryCode').mouseup(function() {
        $(this).attr({ "src": "/captcha/captcha.ashx?w=65&h=24&t=" + new Date() });
    });
    
    
    
    $('#submit').click(function() {

        submintForm();

    });
    

</script>



</body>
</html>