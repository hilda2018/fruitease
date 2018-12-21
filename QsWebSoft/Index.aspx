<%@ Page Language="C#" MasterPageFile="~/Site.master"
AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="QsWebSoft.Index" %>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">

    <script type="text/javascript" src="./FHome/lib/js/jqueryAndeasyuiAndjson.js"></script>
    <script type="text/javascript" src="./FHome/main.js"></script>
    <script type="text/javascript" >

        globalInfo.globalTabObj = 
    
        $('#fruitEaseTabs').tabs({
            fit: true,
            border:false,
            onSelect: function(title, index) {

                //console.log(title);
                // console.log(index);
           
                if ( !globalInfo.myBrowser() && index === 0) {

                    
                    $('#old').show();
                    console && console.log("show");
                } else {
                    
                    $('#old').hide();
                    console && console.log("hide");
                }

            }
        });

        $('#fruitEaseTabs').tabs('add',
            {
                title: "首页",
//                content: '<iframe id="mainIframe"  name="mainIframe" src="./FHome/W_Xtdm/W_Xtdm_Yjxx.html" frameborder="0" style="width:100%;height:100%;" scrolling="hidden" ></iframe>',

                content: '<iframe id="mainIframe"  name="mainIframe" src="./FHome/W_Xtdm/Wldw.html" frameborder="0" style="width:100%;height:100%;" scrolling="hidden" ></iframe>',
                closable: false,
                fit: true,
                select: true,
                onSelect: function(title) {
                    console.log(title + ' is selected');
                }
            });


    </script>
  
    <PB:WindowHost runat="server" ID="win" WindowType=" QsWebSoft.W_Index" Lisetener="W_Index" ClientIDMode="Static"/>
 
    <script type="text/javascript" src="/Admin/W_ChangePassword.win.js" ></script>
    <!--  <script type="text/javascript" src="/Scripts/Common.js" ></script>  -->
</asp:Content>
