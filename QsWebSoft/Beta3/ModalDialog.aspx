<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ModalDialog.aspx.cs" Inherits="QsWebSoft.Beta3.ModalDialog" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ShowModalDialog测试</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <br />
    <input type="button" value="传入的参数" onclick="javascript:alert(window.dialogArguments);" />
    <br />
    <input type="button" value="关闭并返回值" onclick="javascript:window.returnValue='这是返回的结果'; window.close();" />
    <input type="button" value="window.open" onclick="javascript:window.open('/help.aspx');" />
    </div>
    </form>
</body>
</html>
