using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Interfaces.OCRModel;
using Interfaces.Service;
using Interfaces.Model;

namespace Interfaces
{
    /// <summary>
    /// 对Ocr系统相关接口
    /// </summary>
    public class OcrIF
    {
        /// <summary>
        /// 根据库中查询数据，更改ocr传来列表的状态过滤掉别的用户同步的数据
        /// </summary>
        /// <param name="list"></param>
        public static void ChangeStatus(List<OCRHddzEntity> list, string zbr)
        {
            HddzService serv = new HddzService();

            List<yw_hddzEntity> listID = serv.GetOcrIDList();
            List<int> delIndexs = new List<int>();
            int i = 0;
            foreach (var model in list)
            {
                yw_hddzEntity ocrID = listID.Find(p => p.OcrID == model.ocrmainid);

                if (ocrID != null)
                {
                    if (ocrID.zbr != zbr)
                    {
                        delIndexs.Add(i);
                    }
                    else
                    {
                        model.IsSync = true;
                        model.ywbh = ocrID.ywbh;
                    }
                }
                i++;
            }

            foreach(int j in delIndexs)
            {
                list.RemoveAt(j);
            }

        }
    }
}
