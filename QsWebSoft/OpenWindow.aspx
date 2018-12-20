<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OpenWindow.aspx.cs" Inherits="QsWebSoft.OpenWindow" %>

<head runat="server">
    <meta hcharset="utf-8"/>

    <title runat="server">水果通服务平台</title>
    <style>
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
                   JSObjectType="" ViewStateMode="Enabled" WindowType=""/>
</form>
<script>

    $(function() {
        $("#win").height($(window).height()).width($(window).width());
    });
</script>
</body>
</html>
