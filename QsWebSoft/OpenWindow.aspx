<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OpenWindow.aspx.cs" Inherits="QsWebSoft.OpenWindow" %>
<!DOCTYPE html>
<head id="Head1" runat="server">
    <meta hcharset="utf-8"/>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
<form id="form1" runat="server" class="winFormCls" style="padding: 0; margin: 0;">
    <pb:WindowHost runat="server" ID="win" BackColor="Fuchsia"
                   ClientIDMode="Static" CssClass="winHostCls" DoubleParm="0"
                   JSObjectType="" ViewStateMode="Enabled" WindowType="" 
        Font-Overline="True"/>
</form>
<script>

    $(function () {
        $("#ExtPB_Window_win").css({ "position": "absolute", "left": "0", "right": "0", "bottom": "10px", "top": "0", "height": "auto", "width": "100%" });
    });
</script>
</body>
</html>
