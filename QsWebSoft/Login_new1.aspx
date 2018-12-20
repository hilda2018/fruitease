<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login_new1.aspx.cs" Inherits="QsWebSoft.Login_new1"  %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="css/mind_20121128.css" rel="stylesheet" type="text/css" />
<title>上海欧恒进出口有限公司</title>
<style type="text/css">
    *{margin:0 0 82 0; 
padding:0;
    }
body{ background:url(images/body-bg1.png) repeat; color:#484b50; font-size:12px; font-family:\5b8b\4f53;/* min-height:600px;*/background-attachment:fixed;  }
ol,ul {
    list-style:none;
}
a{ color:#434343; text-decoration:none;}
a:hover{ color:#d94a38; text-decoration:none; cursor:pointer;}
.color-blue{ color:#0086d0;}
#top{ height:7px; width:100%; background-color:#555;}
#content{ position:absolute; left:50%; top:30%; margin-left:-281px; width:562px; height:280px; background:url(images/box.png) no-repeat;}
#logo{ position:relative; width:311px; height:50px;  margin:-75px auto 0; z-index:100; background-image:url(images/logo.png);}
#login-box{ position:absolute; top:0;}
.box-left,.box-right{ margin:22px 25px 20px;}
.box-left h2,.box-right h2{ font-family:\5FAE\8F6F\96C5\9ED1,\5b8b\4f53; font-size:18px; color:#3b3b3b; line-height:24px; font-weight:normal;
        width: 195px;
    }
.t-user,.t-news{ height:22px; padding-left:25px; background:url(images/ico.png) 0 -4px no-repeat;}
.t-news{ background-position:0 -25px;}
.box-right{ position:absolute; top:0; left:300px; width:258px;}
.box-right ul{ margin:30px 0 0 25px; }
.box-right ul li{ line-height:1.8; color:#797b80;}
.validation-summary-errors { border:1px solid #FF8080; background:url(images/stuff.gif) no-repeat 2px center #FFF2F2; line-height:18px; margin-top:2px; width:220px; padding:5px 10px 5px 28px; text-align:left; }
.input-box { margin-top:25px;}
.input-box td{ padding:3px 0; vertical-align:middle;}
.input-box label{ font-size:14px;}
input.login-input { height:25px;padding:0 3px; line-height:25px; background:none; border:1px solid #ddd; border-radius:4px; background:#fff; outline:none;}
.login-btn{ margin-right:10px; width:80px; height:29px; background-color:#0086d0; border-radius:3px;  border:none;  color:#fff; cursor:pointer;}
.login-btn:hover{ background-color:#077cbc;}
.color-gary{ color:#adaeb1; text-decoration:none;}
.color-gary:hover{ color:#0086d0; }
#footer{ background-color:#e9e9e9; height:40px; width:100%; position:fixed; bottom:0; font-family:\5FAE\8F6F\96C5\9ED1,\5b8b\4f53;  border-top:1px solid #d7d7d7;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0))); }
.copyright{ background:url(images/small-logo.png) no-repeat; padding-left:35px; margin-left:46%; margin-top:5px; height:35px; line-height:14px;}
    .style1
    {
        height: 33px;
    }
</style>
<script type="text/javascript" src="/Scripts/jquery-1.6.min.js" ></script>
<script type="text/javascript" src="/Scripts/ExtPB_Net.js" ></script>
<script type="text/javascript" src="/Scripts/Common.js" ></script>
<script type="text/javascript" src="/Scripts/json2.js" ></script>
<script type="text/javascript">
    $(function () {

        $(".smal_text input").focus(function () {
            $(this).css("background-position", "-5px -30px")
            $(this).parent().css("background-position", "0px -25px")
        }).blur(function () {
            $(this).css("background-position", "-5px -5px")
            $(this).parent().css("background-position", "0px 0px")
        })
        $(".yanzheng input").focus(function () {
            $(this).css("background-position", "-5px -30px")
            $(this).parent().css("background-position", "0px -25px")
        }).blur(function () {
            $(this).css("background-position", "-5px -5px")
            $(this).parent().css("background-position", "0px 0px")
        })
        //居中
        var w_h = $(window).height();
        var wi = (w_h - 700) / 2;
        if (wi > 0) {
            $("#gxz").css("margin-top", wi);
        } else {
            $("#gxz").css("margin-top", "0px");
        }
        $(window).resize(function () {
            var w_h = $(window).height();
            var wi = (w_h - 700) / 2;
            if (wi > 0) {
                $("#gxz").css("margin-top", wi);
            } else {
                $("#gxz").css("margin-top", "0px");
            }
        })

        var userID = document.getElementById("UserID").value;
        if (userID.length == 0) {
            document.getElementById("UserID").focus();
        }
        else {
            document.getElementById("Password").focus();
        }
    })

    function login() {

        //检测插件安装更新情况
//        if (Updater == null) {
//            alert("对不起，当前浏览器未安装或禁用了ExtPB.Net安装更新服务程序,不能继续运行ERP系统!");
//            return;
//        }
//        if (Updater.StatusCode != 0) {
//            alert(Updater.StatusText + ",不能继续运行ERP系统!");
//            return;
//        }

        var userID = Trim(document.getElementById("UserID").value);
        if (userID.length == 0) {
            alert("请输入登录用户帐号!");
            document.getElementById("UserID").focus();
            return;
        }
        var Pwd = Trim(document.getElementById("Password").value);
        if (Pwd.length == 0) {
            alert("请输入帐号密码!");
            document.getElementById("Password").focus();
            return;
        }

        if (Pwd.length < 6) {
            alert("输入的帐号密码长度少于6位,请重新输入!");
            document.getElementById("Password").focus();
            return;
        }
        var Code = Trim(document.getElementById("Code").value);
        if (Code.length == 0) {
            alert("请输入验证号!");
            document.getElementById("Code").focus();
            return;
        }
        form1.submit();
    }
    function UserIDKeyDown(evn) {
        if (evn.keyCode == 13) {
            document.getElementById("Password").focus();
        }
    }

    function PasswordKeyDown(evn) {
        if (evn.keyCode == 13) {
            document.getElementById("Code").focus();
        }
    }

    function CodeKeyDown(evn) {
        if (evn.keyCode == 13) {
            login();
        }
    }

    function RefreshImg() {
        document.getElementById("VeriryCode").src = "/captcha/captcha.ashx?w=65&h=24&t=" + new Date();
    }



</script>
</head>
<body>
<form id="form1" runat="server">
	<div id="top"></div>
    <div id="content">
    	<div id="logo"></div>
        
        <div class="box-left">
       
            	<h2 class="t-user" style="margin-top: 15px">帐户登陆</h2>
             
                <div class="input-box">
               <table width="580px">
                    <tbody>
                    	<tr>
                            <td width="60px" class="style1">
                               <label>账户名：</label>
                       </td>   <td width="80px" class="style1"><span><asp:TextBox ID="UserID" runat="server" onkeydown="UserIDKeyDown(event);"  class="login-input" /></span>
       </td>
                        </tr>
                        <tr>
                            <td >
                               <label>密  码：</label>
                            </td>
                            <td colspan="2">
                              <span ><asp:TextBox ID="TextBox1" TextMode="Password"   runat="server" 
           onkeydown="PasswordKeyDown(event); " class="login-input"></asp:TextBox></span>
                              
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <label>验证码：</label>
                            </td>
                            <td align="left">
                                <span ><asp:TextBox ID="Code"   runat="server" onkeydown="CodeKeyDown(event);"  class="login-input"/> 
   </span> 
   <asp:Image class="yz_img" id="VeriryCode" runat="server" src="/captcha/captcha.ashx?w=65&h=24" onmouseup="RefreshImg()" alt=""/>
                                
                            </td>
                                                  </tr>
                        <tr>
                            <td></td>
                            <td colspan="2">
                                <input id="btnLogOn" type="submit" value="登  录" class="login_button" onclick="login();" />
                               
                            </td>
                        </tr>
                    
                	</tbody>
                </table>
                 
            </div>
                
            </div>
            <div class="box-right">
            	<h2 class="t-news">重要新闻 / <font class="color-blue">通知</font></h2>
                <ul>
                	<li><a href="/Help.aspx" target="_blank" >平台ERP系统使用说明1...</a></li>
                     <li><a href="/ExtPB.Net/ExtPB_Net.exe" target="_blank" >客户端插件程序下载1...</a></li>
                </ul>
            </div>
        </div>
        
    </div>
    </form>
    <div id="footer">
        <div class="copyright">
        <p>杭州全顺科技技术支持<br><a href="http://www.tradeserving.com">www.tradeserving3.com</a></p>
        </div>
    </div>
    
    
</body>

</html>
