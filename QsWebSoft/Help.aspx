<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Help.aspx.cs" Inherits="QsWebSoft.Help" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>帮助文档</title>
</head>
<body>
   <form id="form1" runat="server">
    <div>
        欢迎使用水果通服务平台，帮助文档正在完善中...
    </div>
    <input type="button" value="单证说明" onclick="javascript:window.open('\中文说明.txt');" />
    <input type="button" value="传入的参数" onclick="javascript:alert(window.dialogArguments);" />
    <br />
    </form>
</body>
</html>
