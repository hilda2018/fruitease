<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Nav.aspx.cs" Inherits="QsWebSoft.Nav" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <link href="/Nav/global.css" rel="stylesheet" type="text/css"/>
    <link href="/Nav/styles.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript">
        var ts_1 = null;
        function OpenItem(itemData, itemLabel) {
            //先取得页面父窗口的TabStrip控件
            if (ts_1 == null) {
                if (window.external != null)
                    ts_1 = window.external.Control("ts_1");
            }

            if (ts_1 == null)
                return;

            //模块是否已打开
            var index = ts_1.SelectItem(itemData);
            if (index > 0)
                return;
            //

//            var openStyle = "0";
//            var url = "";
//            var parm = "";
//            var row = ds.Find("id='" + itemData + "'", 1, ds.RowCount());
//            if (row > 0) {
//                openStyle = ds.GetItemString(row, "openStyle");
//                url = ds.GetItemString(row, "WindowName");
//                parm = ds.GetItemString(row, "OpenParm");
//            }
//            //如果OpenStyle为2,则标识为打开的是一个Url地址
//            //如果是3,则表示打开一个响应用的HTML窗口
//            if (openStyle == "2")
//                ts_1.Open(itemData, itemLabel, "", url, true);
//            else if (openStyle == "3")
//                requestor.ShowModalDialog(url, null, parm);
//                        else

//
                ts_1.Open(itemData, itemLabel, "", "/OpenWindow.aspx?FunID=" + itemData, true);
            }


            function OpenUrl(itemData, itemLabel) {
                //先取得页面父窗口的TabStrip控件
                if (ts_1 == null) {
                    if (window.external != null)
                        ts_1 = window.external.Control("ts_1");
                }

                if (ts_1 == null)
                    return;


                //模块是否已打开
                var index = ts_1.SelectItem(itemData);
                if (index > 0)
                    return;
                if (itemData == "009805") {
                    url = "http://login.yj.nbeport.gov.cn/sso/nbeportLogin?userId=zjrh&sign=b055cf3cde801393e0d215f58e69d4ab&redirectURL="+encodeURI( "http://yj.nbeport.gov.cn/entry/HQWebApp/BDTProject/Pages/entry/entryQuery2.aspx");
                }
                if (itemData == "009806") {
                    url = "http://login.yj.nbeport.gov.cn/sso/nbeportLogin?userId=zjrh&sign=b055cf3cde801393e0d215f58e69d4ab&redirectURL="+encodeURI("http://yj.nbeport.gov.cn/entry/HQWebApp/BDTProject/Pages/externalEntry/externalEntryQuery2.aspx");
                }
                if (itemData == "009807") {
                    url = "http://login.nbeport.gov.cn/sso/nbeportLogin?userId=zjrh&sign=b055cf3cde801393e0d215f58e69d4ab&redirectURL="+encodeURI("http://www.nbeport.gov.cn/apdev/proDes/npedi/checkQuery.jsp");
                }
                if (itemData == "009808") {
                    url = "http://login.nbeport.gov.cn/sso/nbeportLogin?userId=zjrh&sign=b055cf3cde801393e0d215f58e69d4ab&redirectURL="+encodeURI("http://www.nbeport.gov.cn/nbedi/NBEDISearchWeb/TSHXZMLDY.aspx");
                }
                var parm = "";
                ts_1.Open(itemData, itemLabel, "", url, true); 
            }
    </script>
</head>
<body style="height:100%; overflow:hidden;">
    <form id="form1" runat="server">
    <table border="0" cellpadding="0" cellspacing="0" width="100%"  height="100%">
    <tr>
    <%--注释--%>
    
    <%--<td valign="top" style="background-color:#fafafa;">
             <%=this.MenuHtml %>

    </td>
    <td width="1px">
    
    </td>
        <td width="150px" valign="top" style="background-color:#fafafa;" >
              <div class="fl com_fun">
            <h2 class="c_h2"><strong>常用功能</strong></h2>
            <ol id="customFun"> 
            
                <li><a onclick="OpenItem('009804','退税税率查询');return false" href="javascript:void(0;">退税税率查询</a></li>
                <li><a onclick="OpenUrl('009805','报关单查询');return false" href="javascript:void(0);">报关单查询</a></li>
                <li><a onclick="OpenUrl('009806','异地报关单');return false" href="javascript:void(0);">异地报关单</a></li>
                <li><a onclick="OpenUrl('009807','国检查验信息查询');return false" href="javascript:void(0);">国检查验信息查询</a></li>
                <li><a onclick="OpenUrl('009808','退税核销证明联');return false" href="javascript:void(0);">退税核销证明联</a></li>
                <li><a onclick="return false" href="javascript:void(0);">收汇预警</a></li>
                <li><a onclick="return false" href="javascript:void(0);">增票预警</a></li>
                <li><a onclick="return false" href="javascript:void(0);">报关返单预警</a></li>
                <li><a onclick="return false" href="javascript:void(0);">应收款查询</a></li>
                <li><a onclick="return false" href="javascript:void(0);">出运情况统计</a></li>
                <li><a onclick="return false" href="javascript:void(0);">资金明细查询</a></li>
                <li><a onclick="return false" href="javascript:void(0);">单票结算查询</a></li>
                 <li></li>
            </ol>
   

  </div>

         </td>
         --%>
         <%--注释--%>
     </tr>
    </table>
    </form>
</body>
</html>
