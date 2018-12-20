<%@ Page Language="C#" 
AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="QsWebSoft.Index" %>
<!DOCTYPE html>
<html lang="zh-CN" id="fruitease2" runat="server">
<head>
    <meta http-equiv="Content-Type" content="text/html;"  charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>水果通服务平台</title>
    <!-- 加载框架运行库 -->
    <link rel="shortcut icon" href="FHome/images/favicon.ico"/>
  
    <script type="text/javascript" src="/Scripts/ExtPB_Net.js" />
    <script type="text/javascript" src="/Scripts/MyExtPB.js" />

</head>

<body id="mainFrame">
		   
            <div id="main">
                
            
  
                <PB:WindowHost runat="server" ID="win2" WindowType=" QsWebSoft.W_Index" Lisetener="W_Index" ClientIDMode="Static"/>
 

        </div>

	</body>

</html>
