///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />

function W_Import() {

    var self = this;
    var requestor = new PBWindow();
    var dw_1 = new DataWindow(requestor);
    var tb_1 = new ToolStrip(requestor);
    var sle_1 = new SingleLineEdit(requestor);

    if (typeof (this.bind) == "function") var baseBind = this.bind;
    this.bind = function (win) {
        if (typeof (baseBind) == "function") baseBind(win);

        if (requestor == null) requestor = new PBWindow();
        requestor.Attach(win);
        if (dw_1 == null) dw_1 = new DataWindow(requestor);
        dw_1.Attach(win.Control("dw_1"));
        if (tb_1 == null) tb_1 = new ToolStrip(requestor);
        tb_1.Attach(win.Control("tb_1"));
        if (sle_1 == null) sle_1 = new SingleLineEdit(requestor);
        sle_1.Attach(win.Control("sle_1"));

        if (typeof (self.SelectFile) == "function")
            win.AttachEvent("btn_SelectFile", "Clicked", self.SelectFile);

        if (typeof (self.Import) == "function")
            win.AttachEvent("btn_Import", "Clicked", self.Import);

        if (typeof (self.Save) == "function")
            win.AttachEvent("btn_Save", "Clicked", self.Save);

        if (typeof (self.Exit) == "function")
            win.AttachEvent("btn_Exit", "Clicked", self.Exit);

    }

    if (typeof (this.unbind) == "function") var baseUnBind = this.unbind;
    this.unbind = function () {
        if (typeof (this.Release) == "function") this.Release();
        if (typeof (baseUnBind) == "function") baseUnBind();

        dw_1.Detach(); dw_1 = null;
        tb_1.Detach(); tb_1 = null;
        sle_1.Detach(); sle_1 = null;
        requestor.Detach(); requestor = null;

        setTimeout(CollectGarbage, 100);
    }

    //以上代码由设计器自动生成,请不要手工修改
    //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    this.SelectFile = function () {
        var fileName = requestor.GetFileOpenName("提示", "", ".xls", "Excel文件(*.xls),*.xls;", "");
        if (fileName == "")
            return;

        sle_1.SetText(fileName);
        sle_1.SetFocus();

    }

    this.Import = function () {
        var fileName = sle_1.GetText();
        if (fileName == "") {
            requestor.MessageBox("提示", "请选择要导入的Excel文件!", ICON.StopSign);
            sle_1.SetFocus();
            return;
        }

        if (!requestor.FileExists(fileName)) {
            requestor.MessageBox("提示", "文件[ " + fileName + " ]不存在,请检查!", ICON.StopSign);
            sle_1.SetFocus();
            return;
        }

        var xlsApp = null;
        try {
            //以下通过Ole读取Excel文件所调用的方法和属性名称，注意大小写

            //通过Ole连接Excel
            xlsApp = requestor.CreateOleObject("Excel.Application");
            if (xlsApp == null) {
                requestor.MessageBox("提示", "不能连接Microsft Excel程序,请检查本机是否已安装相应的软件程序!", ICON.StopSign);
                return;
            }

            xlsApp.Application.Visible = false;

            //打开文件
            xlsApp.Application.Workbooks.Open(fileName);

            //取打开的第一个工作表
            var xlsSheet = xlsApp.Application.ActiveWorkbook.Worksheets.Item(1);

            //按需要导入数据即可.
            var rowIndex = 2;
            var row = 0;
            var bh = xlsSheet.Cells(rowIndex, 1).Text;   //从第二行开始导入

            dw_1.SetRedraw(false);
            while (bh != null && bh != "") {

                //是否已存相同编号的记录,如果是，同不导入该行记录
                row = dw_1.Find("bh='" + bh + "'", 1, dw_1.RowCount());
                if (row <= 0) {
                    row = dw_1.InsertRow(0);
                    dw_1.SetItem(row, "bh", bh);

                    dw_1.SetItem(row, "name", xlsSheet.Cells(rowIndex, 2).Text);
                    dw_1.SetItem(row, "gz", parseFloat(xlsSheet.Cells(rowIndex, 3).Text));
                    dw_1.SetItem(row, "jj", parseFloat(xlsSheet.Cells(rowIndex, 4).Text));
                    dw_1.SetItem(row, "bt", parseFloat(xlsSheet.Cells(rowIndex, 5).Text))
                }

                rowIndex++;
                bh = xlsSheet.Cells(rowIndex, 1).Text;
            }
            dw_1.SetRedraw(true);

            //退出Excel,但很奇怪，excel的进程不会关闭，一直要等到IE程序退出
            //深入原因还要进一步测试
            xlsApp.Application.Workbooks.Close();
            xlsApp.Application.Quit();
            xlsSheet = null;
            xlsApp = null;

        }
        catch (er) {
            dw_1.SetRedraw(true);
            if (xlsApp != null) {
                xlsApp.Application.Workbooks.Close();
                xlsApp.Application.Quit();
                xlsApp = null;
            }

            requestor.MessageBox("提示", "导入数据出现错误.\r\n详细信息为:\r\n" + er.Message);
        }
    }

    this.Exit = function () {
        setTimeout("window.close();", 100);
    }
 }