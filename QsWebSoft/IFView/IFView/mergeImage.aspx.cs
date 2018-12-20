using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;


namespace WebApplication1.IFView
{
    public partial class mergeImage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                //DrawImage("a1.png", "yz.png", 1, Server.MapPath("img/"));
                //ConvertPDF2Image(Server.MapPath("img/") + "aa.pdf", Server.MapPath("img/"), "A", 1, 5, ImageFormat.Jpeg, Definition.One);
                Response.ContentType = "image/gif";

                string imgpath = Request.QueryString["imgpath"];
                string yzpath = Request.QueryString["yzpath"];

                //if (string.IsNullOrEmpty(imgpath))
                //    imgpath = "img/aaa.jpg";
                if (string.IsNullOrEmpty(yzpath))
                    yzpath = "img/yz.png";

                //GetImageFs(Server.MapPath("img/aa.pdf"));
                DrawImage(Server.MapPath(imgpath), Server.MapPath(yzpath), 1);
            }
        }


        #region pdf转图片

        //public MemoryStream GetImageFs(string path)
        //{
        //    Aspose.Pdf.Document document = new Document(path);
        //    //p.Pages[0].;
        //    var device = new Aspose.Pdf.Devices.JpegDevice();
        //    FileStream fs;
        //    MemoryStream ms = new MemoryStream();
        //    //默认质量为100，设置质量的好坏与处理速度不成正比，甚至是设置的质量越低反而花的时间越长，怀疑处理过程是先生成高质量的再压缩
        //    device = new Aspose.Pdf.Devices.JpegDevice(100);

        //    if (document.Pages.Count > 0)
        //    {
        //        string filePathOutPut = Server.MapPath("img/aa_15.jpg");

        //        try
        //        {

        //            device.Process(document.Pages[1], ms);


        //        }
        //        catch (Exception ex)
        //        {
        //            ms.Close();
        //            File.Delete(filePathOutPut);
        //        }
        //    }
        //    else
        //    {
        //        throw new Exception("pdf文件页数少于1");
        //    }
        //    document.Dispose();
        //    return ms;
        //}

        #endregion



        #region 绘制印章
        /// <summary>
            /// 添加图片水印
            /// </summary>
            /// <param name="sourcePicture">源图片文件名</param>
            /// <param name="waterImage">水印图片文件名</param>
            /// <param name="alpha">透明度(0.1-1.0数值越小透明度越高)</param>
            /// <param name="position">位置</param>
            /// <param name="PicturePath" >图片的路径</param>
            /// <returns>返回生成于指定文件夹下的水印文件名</returns>
        public void DrawImage(string sourcePictureName, string waterPictureName, float alpha)
        {

            string fileSourceExtension = System.IO.Path.GetExtension(sourcePictureName).ToLower();
            string fileWaterExtension = System.IO.Path.GetExtension(waterPictureName).ToLower();
            //
            // 判断文件是否存在,以及类型是否正确
            //
            if (System.IO.File.Exists(sourcePictureName) == false || System.IO.File.Exists(waterPictureName) == false ||
                (fileSourceExtension != ".gif" && fileSourceExtension != ".jpg" && fileSourceExtension != ".png") || (fileWaterExtension != ".gif" &&
      fileWaterExtension != ".jpg" && fileWaterExtension != ".png"))
            {
                return;
            }

            //

            // 目标图片名称及全路径
            //
            string targetImage = sourcePictureName.Replace(System.IO.Path.GetExtension(sourcePictureName), "") + "_1101.jpg";

            //
            // 将需要加上水印的图片装载到Image对象中
            //
            System.Drawing.Image imgPhoto = System.Drawing.Image.FromFile(sourcePictureName);
            //
            // 确定其长宽
            //
            int phWidth = imgPhoto.Width;
            int phHeight = imgPhoto.Height;

            //
            // 封装 GDI+ 位图，此位图由图形图像及其属性的像素数据组成。
            //
            Bitmap bmPhoto = new Bitmap(phWidth, phHeight, PixelFormat.Format24bppRgb);

            //
            // 设定分辨率
            // 
            bmPhoto.SetResolution(imgPhoto.HorizontalResolution, imgPhoto.VerticalResolution);

            //
            // 定义一个绘图画面用来装载位图
            //
            Graphics grPhoto = Graphics.FromImage(bmPhoto);

            //
            //同样，由于水印是图片，我们也需要定义一个Image来装载它
            //
            System.Drawing.Image imgWatermark = new Bitmap(waterPictureName);

            //
            // 获取水印图片的高度和宽度
            //
            int wmWidth = imgWatermark.Width;
            int wmHeight = imgWatermark.Height;

            //SmoothingMode：指定是否将平滑处理（消除锯齿）应用于直线、曲线和已填充区域的边缘。
            // 成员名称  说明 
            // AntiAlias   指定消除锯齿的呈现。 
            // Default    指定不消除锯齿。

            // HighQuality 指定高质量、低速度呈现。 
            // HighSpeed  指定高速度、低质量呈现。 
            // Invalid    指定一个无效模式。 
            // None     指定不消除锯齿。 
            grPhoto.SmoothingMode = SmoothingMode.AntiAlias;



            //
            // 第一次描绘，将我们的底图描绘在绘图画面上
            //
            //grPhoto.DrawImage(imgPhoto, new Rectangle(0, 0, phWidth, phHeight), 0, 0, phWidth, phHeight, GraphicsUnit.Pixel);
            //grPhoto.Dispose();
            //
            // 与底图一样，我们需要一个位图来装载水印图片。并设定其分辨率
            //


            Bitmap bmWatermark = new Bitmap(imgPhoto);
            bmWatermark.SetResolution(imgPhoto.HorizontalResolution, imgPhoto.VerticalResolution);

            //
            // 继续，将水印图片装载到一个绘图画面grWatermark
            //
            Graphics grWatermark = Graphics.FromImage(bmWatermark);

            //
            //ImageAttributes 对象包含有关在呈现时如何操作位图和图元文件颜色的信息。
            //   

            ImageAttributes imageAttributes = new ImageAttributes();

            //
            //Colormap: 定义转换颜色的映射
            //
            ColorMap colorMap = new ColorMap();

            //
            //我的水印图被定义成拥有绿色背景色的图片被替换成透明
            //
            colorMap.OldColor = Color.FromArgb(255, 0, 255, 0);
            colorMap.NewColor = Color.FromArgb(0, 0, 0, 0);

            ColorMap[] remapTable = { colorMap };

            imageAttributes.SetRemapTable(remapTable, ColorAdjustType.Bitmap);

            float[][] colorMatrixElements = {
new float[] {1.0f, 0.0f, 0.0f, 0.0f, 0.0f}, // red红色
      new float[] {0.0f, 1.0f, 0.0f, 0.0f, 0.0f}, //green绿色
      new float[] {0.0f, 0.0f, 1.0f, 0.0f, 0.0f}, //blue蓝色    
      new float[] {0.0f, 0.0f, 0.0f, alpha, 0.0f}, //透明度   
      new float[] {0.0f, 0.0f, 0.0f, 0.0f, 1.0f}};//

            // ColorMatrix:定义包含 RGBA 空间坐标的 5 x 5 矩阵。
            // ImageAttributes 类的若干方法通过使用颜色矩阵调整图像颜色。
            ColorMatrix wmColorMatrix = new ColorMatrix(colorMatrixElements);

            imageAttributes.SetColorMatrix(wmColorMatrix, ColorMatrixFlag.Default,
            ColorAdjustType.Bitmap);

            // 第二次绘图，把水印印上去
            //
            //grWatermark.DrawImage(imgWatermark, new Rectangle(xPosOfWm, yPosOfWm, wmWidth, wmHeight), 0, 0, wmWidth, wmHeight, GraphicsUnit.Pixel, imageAttributes);
            grWatermark.DrawImage(imgWatermark, new System.Drawing.Rectangle(phWidth * 1 / 12, phHeight * 4 / 5, phWidth * 1 / 2, wmHeight * phWidth / 2 / wmWidth), 0, 0, wmWidth, wmHeight, GraphicsUnit.Pixel, imageAttributes);

            imgPhoto = bmWatermark;

            grWatermark.Dispose();

            //
            // 保存文件到服务器的文件夹里面
            //
            imgPhoto.Save(Response.OutputStream, ImageFormat.Jpeg);
            imgPhoto.Dispose();
            imgWatermark.Dispose();

        }

        #endregion
    }

    /// <summary>
      /// 图片位置
      /// </summary>
    public enum ImagePosition
    {
        LeftTop,    //左上
        LeftBottom,  //左下
        RightTop,    //右上
        RigthBottom, //右下
        TopMiddle,   //顶部居中
        BottomMiddle, //底部居中
        Center      //中心
    }



}