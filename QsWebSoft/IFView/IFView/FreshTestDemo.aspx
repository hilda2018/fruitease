<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FreshTestDemo.aspx.cs" Inherits="WebApplication1.FreshTestDemo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>对接生鲜港测</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <a href="/IFView/OCRIFDemo.aspx" target="_blank">对接ocr</a><br />
        
        <asp:Button ID="Button2" runat="server" Text="服务地址" OnClick="Button2_Click" />
        <asp:Button ID="Button3" runat="server" Text="多条测试" OnClick="Button3_Click" /><br />
        <br />
        <asp:Button ID="Button5" runat="server" Text="测试专用" OnClick="Button5_Click" />
        <br />

        <asp:TextBox ID="txtywbh" runat="server"  placeholder="输入业务编号"></asp:TextBox>
        <asp:Button ID="Button4" runat="server" Text="代卖同步" OnClick="Button4_Click" /><br />
         <asp:Button ID="Button1" runat="server" Text="国际物流" OnClick="Button1_Click" /><br />
        <asp:Button ID="Button6" runat="server" Text="国内物流" OnClick="Button6_Click" /><br />
        <asp:Label ID="Label1" runat="server" Text="" ></asp:Label><br />
        <asp:TextBox ID="TextBox1" runat="server" TextMode="MultiLine" Width="600" Height="200"></asp:TextBox>
        
    </div>
    </form>
</body>
</html>
