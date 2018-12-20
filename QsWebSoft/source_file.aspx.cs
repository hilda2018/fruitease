using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace ExtAspNet.Examples
{
    public partial class source_file : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string file = Request.QueryString["file"].ToString();;
                file = Server.MapPath(file);
                if (!File.Exists(file))
                {
                    SyntaxHighlighter1.Text = "文件不存在或禁止访问!";
                    return; 
                }

                string content = File.ReadAllText(file,System.Text.Encoding.UTF8  );
                if (!String.IsNullOrEmpty(content))
                {
                    string language = string.Empty;
                    string fileName = file.ToLower();
                    if (fileName.EndsWith(".aspx"))
                    {
                        language = "ASPX";
                    }
                    else if (fileName.EndsWith(".win"))
                    {
                        language = "C#";
                    }
                    else if (fileName.EndsWith(".cs"))
                    {
                        language = "C#";
                    }
                    else if (fileName.EndsWith(".css"))
                    {
                        language = "CSS";
                    }
                    else if (fileName.EndsWith(".js"))
                    {
                        language = "JavaScript";
                    }

                    if (!string.IsNullOrEmpty(language))
                    {
                        SyntaxHighlighter1.Mode = Wilco.Web.SyntaxHighlighting.HighlightMode.Source;
                        SyntaxHighlighter1.Language = language;
                        SyntaxHighlighter1.Text = content;
                    }
                    else
                    {
                        SyntaxHighlighter1.Text = "文件不存在或禁止访问!";
                    }
                } 

            }
        }
    }
}
