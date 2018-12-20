using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using QsWebSoft.Helper;
using System.Text;


namespace QsWebSoft
{
    public partial class Nav : QsWebSoft.BasePage
    {
        private const string MainMenu = "<div class=\"shortcut\"><h2 class=\"c_h2\"><strong class=\"{2}\">{0}</strong></h2><div class=\"xiaoshou mb6 p_5\" style=\" height:100%;\"><ul>{1}</ul></div></div>";
        private const string SubMenu = "<li><a onclick=\"OpenItem('{0}','{1}');return false\" href=\"javascript:void(0);\"><span class=\"{2}\"></span></a><a class=\"txt\" onclick=\"OpenItem('{0}','{1}');return false\" href=\"javascript:void(0);\">{1}</a></li>";

        public StringBuilder MenuHtml;
        
        protected void Page_Load(object sender, EventArgs e)
        {
            MenuHtml = new StringBuilder();

            var user = AppService.GetUserID();
            var result = AppService.MenuList(user);


            foreach (var group in result.GroupBy(i=>i.Id))
            {
                var sub = string.Empty;
                var main = group.First();
                foreach (var item in group)
                {
                    sub += string.Format(SubMenu, item.SubId, item.SubTitle,item.SubStyle);
                }
                MenuHtml.Append(string.Format(MainMenu, main.Title, sub, main.Style));
            }
        }


    }
}