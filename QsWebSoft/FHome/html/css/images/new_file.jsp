<!DOCTYPE html>
<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ include file="/WEB-INF/jsp/basePage2.jsp" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head> 
	<title>freshport</title>
	<meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1" />
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="shortcut icon" href="${novaone}/themes/default/images/login/favicon.ico">
	<link rel="stylesheet" type="text/css" href="${css}/common.css">
	<link rel="stylesheet" type="text/css" href="${css}/add.css">
	<link rel="stylesheet" type="text/css" href="${css}/jquery-ui-custom.css">
	<link rel="stylesheet" type="text/css" href="${css}/easyui.css">
	<link rel="stylesheet" type="text/css" href="${css}/icon.css">
	<link rel="stylesheet" type="text/css" href="${css}/main.css">
	<link rel="stylesheet" type="text/css" href="${css}/iconMoon.css">
	<link rel="stylesheet" type="text/css" href="${css}/iconfont.css">
	<script type="text/javascript" src="${js}/main.js"></script>
	


	<style>
	/*********menu start ******/	
	.layout-expand{
		display:none!important;
		width:0!important;
	}
	.panel-title {

  		height: 30px !important;
  		line-height: 30px !important;
	}
	.layout-panel-west>.panel-header{
		background:#86BC20!important;
		border:none;
		border-left: 5px solid #ff9d02!important;
	} 
	.layout-panel-west>.panel-header .panel-title,.layout-panel-west>.panel-header .panel-icon{
		color:#fff!important;
	}
	.layout-panel-west>.panel-header .panel-title{
		margin-left:10px;
	}
	#frame-all .accordion .accordion-header {
	  background: #ffffff;
	  filter: none;
	  color:#000;
	  font-size:14px;
	  line-height:30px;
	  width:218px;
	  height:30px;
	}
	#frame-all .accordion .accordion-header-selected {
		line-height:30px!important;
		background:#f5f5f5!important;
		font-size:14px!important;
		color:#000;
		border-left:none!important;
		
	}
	#frame-all .accordion .accordion-header-selected .panel-title {
	  color: #000; 
	  height:30px!important;
	  line-height:30px!important;
	}

	.tabs-header,.tabs-wrap,.tabs{
		height:30px;
	}
	.tabs-header{
		padding-top:0px;
	}
	.tabs{
		padding:0px;
		border-bottom:2px solid #80AF41!important;
		
	} 
	.tabs li a.tabs-inner{
		line-height:30px;
		height:30px!important;
		color:#000;
		background-color:#f1f1f1;
		border-bottom: 2px solid #80AF41!important;
	 	box-sizing:border-box;
	}
	.tabs-header-plain .tabs-tool {
	    padding: 0 1px;
	    padding: 0;
	    height: 30px!important;
	    line-height: 30px;
	    float: right;
	    padding-right: 10px;
	    background-color:transparent!important;
	    border:none;
	    box-sizing:border-box;
	  	border-bottom: 2px solid #80AF41!important; 	
	}
	.tabs li{
		margin:0;
		border:none!important;

	}
	.tabs li.tabs-selected {
	    /* border-top: 3px solid #faae37!important; */
	    box-sizing:border-box!important;
	    height:30px!important;
	    line-height:30px!important;
	    color:#fff;
	    border:none!important;
	    border-radius:0px;
	}

	.tabs li.tabs-selected a.tabs-inner {
	    background-color: #80AF41!important;
	    color: #fff!important;
	    border-bottom: 2px solid #80AF41!important;
	}
	.tabs li.tabs-selected a.tabs-close {
	    opacity: 1;
	    display: inline-block;
	    border-radius: 50%;
	    background-color:#f00;
	    background-position:-51px center;
	}	
	
	.tabs li.tabs-selected a.tabs-inner {
	    background-color: #80AF41!important;
	    color: #fff!important;
	    border-bottom: 2px solid #80AF41!important;
	}
	
	.tabs li:nth-child(1) a:nth-child(1) {
	    background-color: #fff!important;
	    color: #000!important;
	    border-bottom: 2px solid #80AF41!important;
	}
	.layout-button-left:hover{
		background-color:#86BC20;
	}
	.layout-button-left,.layout-button-left:hover,.layout-button-right{
		margin-right:4px!important;
		margin-top:-1px!important;
	}
	
	.tree-node-selected {
		color:#699f00!important;
	}
	/*********menu end ******/

	.iconfont{
		font-size:14px;
	}
	.panel-header {
			padding: 0px;
	}
	.panel-with-icon {
  			padding-left: 25px;
	}
	.panel-icon{
		margin-top:-16px;
	}
	.layout-panel-west .panel-tool {
   		right: 0px;
   		width:0px!important;
	}
	html {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	body {
		width: 100%;
		height: 100%;
		overflow: auto;
			
	}
	


	.l-btn-plain{
		margin-top:-6px;
	} 
	
/* 	.layout-split-north {
    border-bottom: 0px solid #f8f8f8!important;
	} */
	
	.icon-search {
    background: url(${novaone}/themes/default/images/accordion_arrows1.png) no-repeat;
    background-position: left center;
	}

	.accordion-body{
		height:auto!important;
		max-height:250px;
		overflow-x:hidden;
	}
	ul[id*=menuContainerId_]{
		height:auto!important;
		max-height:10000px;
		overflow:auto;
		overflow-x:hidden;
	}

	span.tree-hit.tree-collapsed,span.tree-hit.tree-expanded{
    margin-left: 2px;
	}
	
	.tree-expanded, .tree-collapsed, .tree-folder, .tree-file, .tree-checkbox, .tree-indent {
    margin-top: 2px;
	}
	
	#menuContainerId .panel-header, #menuContainerId .panel-body {
  
    border-left: none;
	}
	
	#ie-alert-overlay {
	width:100%;
	height:100%;
	background-image:url(${novaone}/themes/default/images/bg.png);
	position: fixed; 
	top: 0; 
	left: 0;
	z-index:9999;
	
	}
	
	* html #ie-alert-overlay {   /* fixed position hack for IE6 */
		position: absolute;
		z-index:9999;
		
	}
	
	/*
	
		IE浏览器
	
	*/
	
	#ie-alert-panel {
		width:520px;
		height:331px;
		position:fixed;
		background: url(${novaone}/themes/default/images/iealertsprite.png) no-repeat;
		background-position: -1px -109px ;
		top:50%;
		left:50%;
		margin:-201px 0 0 -296px;
		padding:72px 0 0 72px;
		_position:absolute;  /* fixed position hack for IE6 */
	    _top:expression(300+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+'px');  /* top:300px hack for IE6 */
	    
	    /* font settings */
	    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
		font-weight:bold;
		color:#333;
		line-height:1.5em;
		z-index:10000;
	}
	
	#ie-alert-panel p {
		font-size:14px;
		width:486px;
		text-align:justify;
	}
	
	#ie-alert-panel img {
		border:0;
	}
	
	
	#ie-alert-panel span {
		font-size:18px;
		margin: 0 0 20px 0;
		display:block;
		padding:0;
	}
	
	#ie-alert-panel ul {
		list-style: none;
		margin:0;
		padding:0;	
	}
	
	#ie-alert-panel li {
		float:left;
		margin:0 22px 0 0;
			
	}
	
	#ie-alert-panel li.last {
		margin-right:0;
	}
	
	
	#ie-alert-panel a {
		display:inline-block;
			
	}
	
	.browser {
		position: absolute;
		bottom:35px;	
	}
	
	.chrome, .firefox, .ie9, .opera, .safari {
		background: url(${novaone}/themes/default/images/iealertsprite.png) no-repeat;
	}
	
	/*
	
		browsers
	
	*/
	
	
	.chrome {
		background-position: 0 0;
		width: 73px;
		height: 96px;
		margin:0 4px 0 0;
	}
	
	.firefox {
		background-position: -292px 0;
		width: 73px;
		height: 98px;
	}
	
	.ie9 {
		background-position: -179px 0;
		width: 95px;
		height: 98px;
	}
	
	.opera {
		background-position: -90px 0;
		width: 73px;
		height: 98px;
	}
	
	.safari {
		background-position: -387px 0;
		width: 73px;
		height: 98px;
		margin:0 4px 0 0;
	}


	</style>
</head>
<body style="padding:0;margin:0;">
 	<div id="novaoneHeader" style="background:#fff!important;z-index:222229;display:block" callapse="uncallapse" >
		<div class="layui-header header header-demo">
				<div class="main">
					<div class="admin-login-box">
						<img style="margin:6px 0 4px 50px;width:90px;background-size:cover;"  src='${base}/<%=SystemParameter.getInstance().getValue(NovaCloudState.NOVAONE_BANNER)%>'/>
					
					</div>
				
					
				</div>
				
				<!-- 平台登录 -->
				<ul class="nav admin-header-item">
					<li class="nav-item" style="border:none;">
						<a href="javascript:;">
						 <i class="user-photo" style="background-image:url(' ${novaone}/themes/default/images/people.jpg');filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' ${novaone}/themes/default/images/people.jpg', sizingMethod='scale');">
			           		 </i>&nbsp;&nbsp;
			            		<span id="headerContainerId" ></span><br/>
			            		
			            		</a>
					</li>
					<li class="nav-item" >|</li>
					<li class="nav-item" >
						<a href="https://www.freshport.com/pages/html/app.html">
						 <i class="app" style="background-image:url(' ${novaone}/themes/default/images/app.jpg');">
			           		 </i>&nbsp;&nbsp;
			            		<span style="position:relative;top:2px;"> 手机版下载
			            		
			            		
			            		<img style="position:absolute;top:-13px;right:-20px;" src=" ${novaone}/themes/default/images/new.png" />
			            		</span><br/>
			            	
			            		</a>
					</li>
					
					<li class="nav-item" >|</li>
					<li class="nav-item" >
						<a href="${novaone}/pdf/freshPortBook.pdf" target="_blank">
						 <i class="app" style="background-image:url(' ${novaone}/themes/default/images/helpBook.png');width:30px;position:relative;">
			           		 </i>&nbsp;&nbsp;
			            		<span style="position:relative;top:2px;">帮助文档
			      
			            		</span><br/>
			            	
			            		</a>
					</li>
					<li class="nav-item" >|</li>
					<li class="nav-item">
						<a href="${front}" title="主页">
			  							<!-- <span class="icon-home" style="font-size:22px;"></span>&nbsp;&nbsp; -->
								<span >主页</span><br/>
								<span style="font-size:10px;" >Home</span>
			             			</a>
					</li>
					<li class="nav-item" >|</li>
					<li class="nav-item">
						<a href="javascript:;" onClick="clearUserMap();"  title="退出">
			  							<!-- <span class="iconfont" style="font-size:22px;">&#xe60e;</span>&nbsp;&nbsp; -->
			          					<span >退出</span><br/>
			          					<span style="font-size:10px;">Exit</span>
			          					
			            			 </a>
					</li>
					<li class="nav-item" >|</li>
					<li class="nav-item">
						<a href="javascript:;" onClick='changePwd();' title="修改密码">
			  							<!-- <span class="iconfont" style="font-size:22px;">&#xe60e;</span>&nbsp;&nbsp; -->
			          					<span >修改密码</span><br/>
			          					<span style="font-size:10px;" >Change password</span>
			            </a>
					</li>
						
				</ul>
			
		
		</div>
	</div>
<div class="easyui-layout" id="frame-all" style="height:99%;"  >
	
<%-- 	<div id="novaoneHeader" style="background:#fff!important;z-index:222229;"  data-options="region:'north',border:false">
		<div class="layui-header header header-demo">
				<div class="main">
					<div class="admin-login-box">
						<img style="margin:10px 0 4px 50px" src='${base}/<%=SystemParameter.getInstance().getValue(NovaCloudState.NOVAONE_BANNER)%>'/>
					</div>
					
				</div>
		
		</div>
	</div>  --%>
	<div id="west" data-options="region:'west',title:'菜单',iconCls:'icon-menu,height:400'" style="font-size:12px;width:200px;background:#fff;padding:0px;">
		
				
		<div id="menuContainerId" class="ncpMenuContainer"  ></div>
	
		
	
	</div>
	<div  id="center" data-options="region:'center',border:false"  style="height:1200px;overflow:hidden;border-left:2px solid #7fac43!important;box-sizing:border-box;">

		<div id="contentContainerId" class="ncpMenuContainer" style="overflow:hidden;" >
		
		</div>


		
	</div>
		<!-- 平台底部 修改  -->
	<div data-options="region:'south',border:false"  style="height:30px;box-sizing:border-box;">
	&nbsp;

		
	</div>
    
	</div>

	<div id="pf-ft" style="position:absolute;bottom:0;width:100%;" >
	

        
        
	</div>
	

	<script>
		
			$(function(){
				$("body").iealert();
			
				$(".tree-node").find(".tree-indent").remove();
				$('.tabs li:nth-child(1) a:nth-child(1)').prepend('<i style="margin-right:6px;" class="icon-home"></i>');
				
				
				var windowHeight=$(window).height();
				var $framaeAll=$('#frame-all');
				var $novaoneHeader=$('#novaoneHeader');
				
				$framaeAll.css({"height":windowHeight-48});
				$framaeAll.layout('resize');
				
				//console.log($(window).height()+'frame'+$('#frame-all').height());
	
				var callapse=$novaoneHeader.attr('callapse');//判断是否收缩
				
				$(window).resize(function(){
					windowHeight=$(window).height();
					callapse=$novaoneHeader.attr('callapse');
					if(callapse=="uncallapse"){//如果没收缩
						
						$framaeAll.css({"height":windowHeight-48});

						
					}else{
						$framaeAll.css({"height":windowHeight});
					}
					
					
					$framaeAll.layout('resize');
					console.log($(window).height()+'frame'+$('#frame-all').height());
				
				})
				

			});
			
			(function($){
			$("#goon").live("click", function(){
					$("#ie-alert-overlay").hide();	
					$("#ie-alert-panel").hide();						  
			});
				
			
			function initialize($obj, support, title, text){

				var panel = "<span>"+ title +"</span>"
						  + "<p> "+ text +"</p>"
					      + "<div class='browser'>"
					      + "<ul>"
					      + "<li><a class='chrome' href='https://www.google.com/chrome/' target='_blank'></a></li>"
					      + "<li><a class='firefox' href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'></a></li>"
					      + "<li><a class='ie9' href='http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/' target='_blank'></a></li>"
					      + "<ul>"
					      + "</div>"; 
		
				var overlay = $("<div id='ie-alert-overlay'></div>");
				var iepanel = $("<div id='ie-alert-panel'>"+ panel +"</div>");
		
				var docHeight = $(document).height();
		
				overlay.css("height", docHeight + "px");
		
		
		
					     
				
				if (support === "ie8") { 			//  IE8, IE7, IE6
				
					if ($.browser.msie  && parseInt($.browser.version, 10) < 9) {
						
						$obj.prepend(iepanel);
						$obj.prepend(overlay);
						
					}
		
					if ($.browser.msie  && parseInt($.browser.version, 10) === 6) {
		
						
						$("#ie-alert-panel").css("background-position","-626px -116px");
						$obj.css("margin","0");
		  
					}
					
					
				} else if (support === "ie7") { 	// in IE7, IE6
					
					if ($.browser.msie  && parseInt($.browser.version, 10) < 8) {
						
						$obj.prepend(iepanel);
						$obj.prepend(overlay);
					}
					
					if ($.browser.msie  && parseInt($.browser.version, 10) === 6) {
						
						$("#ie-alert-panel").css("background-position","-626px -116px");
						$obj.css("margin","0");
		  
					}
					
				} else if (support === "ie6") { 	// only in IE6
					
					if ($.browser.msie  && parseInt($.browser.version, 10) < 7) {
						
						$obj.prepend(iepanel);
						$obj.prepend(overlay);
						
		  				$("#ie-alert-panel").css("background-position","-626px -116px");
						$obj.css("margin","0");
						
					}
				}
		
			}; //end initialize function


			$.fn.iealert = function(options){
					var defaults = { 
						support: "ie7",  // ie8 (ie6,ie7,ie8), ie7 (ie6,ie7), ie6 (ie6)
						title: "\u4F60\u77E5\u9053\u4F60\u7684Internet Explorer\u662F\u8FC7\u65F6\u4E86\u5417?", // title text  你知道你的Internet Explorer是过时了吗?
						text: "\u4E3A\u4E86\u5F97\u5230\u6211\u4EEC\u7F51\u7AD9\u6700\u597D\u7684\u4F53\u9A8C\u6548\u679C,\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\u7684Internet Explorer\u6216\u9009\u62E9\u53E6\u4E00\u4E2Aweb\u6D4F\u89C8\u5668.\u4E00\u4E2A\u5217\u8868\u6700\u6D41\u884C\u7684web\u6D4F\u89C8\u5668\u5728\u4E0B\u9762\u53EF\u4EE5\u627E\u5230.<br /><br /><h1 id='goon' style='font-size:20px;cursor:pointer;'>>>&nbsp;&nbsp;\u5ffd\u7565\uff0c\u7ee7\u7eed\u8bbf\u95ee</h1>"//为了得到我们网站最好的体验效果,我们建议您升级到最新版本的Internet Explorer或选择另一个web浏览器.一个列表最流行的web浏览器在下面可以找到.
					};
					
					
					var option = $.extend(defaults, options);
			
					
					
			
						return this.each(function(){
							if ( $.browser.msie ) {
								var $this = $(this);  
								initialize($this, option.support, option.title, option.text);
							} //if ie	
						});		       
				
				};
			})(jQuery);
			
		
	</script>
</body>
</html>