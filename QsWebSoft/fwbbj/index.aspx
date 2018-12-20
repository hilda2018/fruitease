<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="kindeditor/plugins/code/prettify.css" rel="stylesheet" type="text/css" />
    <%--<script src="kindeditor/lang/zh_CN.js" type="text/javascript"></script>--%>
    <script src="kindeditor/kindeditor.js" type="text/javascript"></script>
    <script src="kindeditor/plugins/code/prettify.js" type="text/javascript"></script>  
    <script type="text/javascript">
        KindEditor.ready(function (K) {
            var editor = K.create('#content', {
                //上传管理
                uploadJson: 'kindeditor/asp.net/upload_json.ashx',
                //文件管理
                fileManagerJson: 'kindeditor/asp.net/file_manager_json.ashx',
                allowFileManager: true,
                //设置编辑器创建后执行的回调函数
                afterCreate: function () {
                    var self = this;
                    K.ctrl(document, 13, function () {
                        self.sync();
                        K('form[name=example]')[0].submit();
                    });
                    K.ctrl(self.edit.doc, 13, function () {
                        self.sync();
                        K('form[name=example]')[0].submit();
                    });
                },
                //上传文件后执行的回调函数,获取上传图片的路径
                afterUpload: function (url) {
                //alert(url);
                },
                //编辑器高度
                width: '100%',
                //编辑器宽度
                height: '600px;',
                //配置编辑器的工具栏
                items: [
                'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
                'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
                'anchor', 'link', 'unlink', '|', 'about'
                ]
            });
            prettyPrint();
        });
    </script>
</head>
<body onload = "getparam();">
    <form id="form1" runat="server">
     <table width="98%"  border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="cccccc">       
        <tr bgcolor="#eeeeee">
            <td align="right" width="10%" style="height: 600px">
            </td>
            <td style="height: 600px" width="80%">
                <asp:TextBox id="content" name="content" TextMode="MultiLine" runat="server" 
                    Height="600px" Width="100%"></asp:TextBox></td>
            <td align="left" width="10%" style="height: 600px">
            </td>
        </tr>
          <tr bgcolor="#eeeeee">
            <td align="right" width="10%" style="height: 20px">&nbsp;</td>
            <td>
                 <asp:Button ID="btnSubmit" runat="server" Text="提交" OnClientClick="content"
                    OnClick="btnSubmit_OnClick" />&nbsp&nbsp
            </td>
            <td align="left" width="10%" style="height: 20px">&nbsp;</td>
          </tr>
    </table>
    </form>
</body>
</html>
