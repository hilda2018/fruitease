using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using System.Drawing;
using BarcodeLib;

namespace QsWebSoft.Service
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class BarCode : IHttpHandler 
    {

        public void ProcessRequest(HttpContext context)
        {
            if (context.Request["code"] == null || context.Request["width"] == null || context.Request["height"] == null)
            {
                context.Response.StatusCode = 401;
                return; 
            }

            int width = Int32.Parse(context.Request["width"].ToString() );
            int height = Int32.Parse(context.Request["height"].ToString() );

            BarcodeLib.Barcode b = new BarcodeLib.Barcode();
            b.IncludeLabel = true;
            b.Alignment = AlignmentPositions.LEFT;
            b.LabelPosition = LabelPositions.BOTTOMLEFT;

            b.LabelFont = new Font("Tohoma",9);
            b.Encode(BarcodeLib.TYPE.CODE128, context.Request["code"].ToString(), Color.Black, Color.White, width, height);
            context.Response.ContentType = "image/jpeg";
            b.SaveImage(context.Response.OutputStream, BarcodeLib.SaveTypes.JPG );
            b.Dispose(); 
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}