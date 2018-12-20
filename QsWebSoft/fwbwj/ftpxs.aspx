<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ftpxs.aspx.cs" Inherits="QsWebSoft.pdfwj.ftpxs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div> 
        <asp:Button ID="Button1" runat="server" Text="下载"  OnClick="Button1_Click" />
        <asp:Button ID="Button2" runat="server"  Text="预览" onclick="Button2_Click" />
    </div>
    <asp:FileUpload ID="FileUpload1" runat="server" />
    <asp:Button ID="Button3" runat="server" onclick="Button3_Click" Text="添加" />
    </form>
</body>
</html>
