//#region PB枚举类型定义
if (typeof (DWBUFFER) == "undefined") {
    var DWBUFFER = {
        Primary: 0, 
        Delete: 1,
        Filter: 2
    }
}
if (typeof (DWITEMSTATUS) == "undefined") {
    var DWITEMSTATUS = {
        NotModified: 0,
        DataModified: 1,
        New: 2,
        NewModified: 3
    }
}
if (typeof (SAVEASTYPE) == "undefined") {
    var SAVEASTYPE = {
        Text: 1,
        CSV: 2,
        Dbase3: 8,
        SQLInsert: 9,
        Clipboard: 10,
        PSReport: 11,
        WMF:12,
        HTMLTable: 13,
        Excel5: 14,
        XML: 15,
        XSLFO: 16,
        PDF: 17,
        Excel8: 18,
        EMF: 19
    }
}
if (typeof (ENCODING) == "undefined") {
    var ENCODING = {
        EncodingANSI: 0,
        EncodingUTF16LE: 1,
        EncodingUTF8: 2,
        EncodingUTF16BE: 3
     }
}
if (typeof (DRAGMODES) == "undefined") {
    var DRAGMODES = {
        Begin: 0,
        End: 1,
        Cancel: 2
    }
}
if (typeof (POINTER) == "undefined") {
    var POINTER = {
        Arrow: 0,
        Cross: 1,
        Beam: 2,
        SizeNESW: 3,
        SizeNS: 4,
        SizeNWSE: 5,
        SizeWE: 6,
        UpArrow: 7,
        HourGlass: 8,
        Icon: 9,
        Size: 10,
        AppStarting: 12,
        Help: 13,
        Hyperlink: 14
    }
}
if (typeof (SETPOSTYPE) == "undefined") {
    var SETPOSTYPE = {
        ToTop: 0,
        ToBottom: 1,
        Behind: 2
    }
}
if (typeof (TEXTCASE) == "undefined") {
    var TEXTCASE = {
        AnyCase: 0,
        Upper: 1,
        Lower: 2
    }
}
if (typeof (ICON) == "undefined") {
    var ICON = {
        Information: 0,
        StopSign: 1,
        Exclamation: 2,
        Question: 3,
        None: 4
    }
}
if (typeof (BUTTON) == "undefined") {
    var BUTTON = {
        OK: 0,
        OKCancel: 1,
        RetryCancel: 2,
        AbortRetryIgnore: 3,
        YesNo: 4,
        YesNoCancel: 5
    }
}
if (typeof (TREENAVIGATION) == "undefined") {
    var TREENAVIGATION = {
        RootTreeItem: 0,
        NextTreeItem: 1,
        PreviousTreeItem: 2,
        ParentTreeItem: 3,
        ChildTreeItem: 4,
        FirstVisibleTreeItem: 5,
        NextVisibleTreeItem: 6,
        PreviousVisibleTreeItem: 7,
        DropHighlightTreeItem: 8,
        CurrentTreeItem: 9
    }
}
if (typeof (TABPOSITION) == "undefined") {
    var TABPOSITION = {
        TabsOnTop: 0,
        TabsOnLeft: 1,
        TabsOnRight: 2,
        TabsOnBottom: 3,
        TabsOnLeftAndRight: 4,
        TabsOnTopAndBottom: 5,
        TabsOnRightAndLeft: 6,
        TabsOnBottomAndTop: 7
    }
}
//#endregion

//#region CreatePBWindow
function CreatePBWindow(containtID, controlID, Syntax, curVersion) {
    var obj = document.getElementById(containtID);
    if (obj == null || obj == undefined){
        return false;
    }

    obj.innerHTML = Syntax;
    var winInstance = document.getElementById(controlID);
/*    if (winInstance==undefined ||  winInstance == null ) {
        obj.innerHTML="当前系统还没有安装ExtPB.Net插件应用程序,请先下载安装!</br><a href=\"/ExtPB.Net/qq.exe\" >ExtPB.Net客户端插件程序下载</a>";
        return false;
    }
    if (typeof(winInstance.GetVersion ) == "undefined" || typeof(winInstance.Load ) == "undefined" ) {
        alert("ExtPB.Net插件程序不能正常初始化!\r\n请检查:\r\n1.是否已安装ExtPB.Net客户端插件程序.\r\n2.是否已启用ExtPB.Net插件程序.\r\n3.浏览器设置是否禁用了Activex插件功能。");
        return false;
    }

    var ver = winInstance.GetVersion();
    if (ver < curVersion) {
        obj.innerHTML = "当前系统安装的ExtPB.Net插件程序的版本号是:" + ver + "<br/>服务器上插件程序的版本是：" + curVersion + "<br/>,请重新下载安装升级,否则程序将不能正常运行!<a href=\"/ExtPB.Net/qq.exe\"><br/>ExtPB.Net客户端插件程序下载</a>";
        return false;
    }*/
    return true;
 }
//#endregion

 //#region PBDragObjectImpl
 function PBObjectUserDataImpl(Requestor) {
     Requestor.prototype.GetStringData1 = function () {
         return this.Instance.StringData1;
     }
     Requestor.prototype.SetStringData1 = function (newValue) {
         this.Instance.StringData1 = newValue;
     }
     Requestor.prototype.GetStringData2 = function () {
         return this.Instance.StringData2;
     }
     Requestor.prototype.SetStringData2 = function (newValue) {
         this.Instance.StringData2 = newValue;
     }
     Requestor.prototype.GetStringData3 = function () {
         return this.Instance.StringData3;
     }
     Requestor.prototype.SetStringData3 = function (newValue) {
         this.Instance.StringData3 = newValue;
     }
     Requestor.prototype.GetStringData4 = function () {
         return this.Instance.StringData4;
     }
     Requestor.prototype.SetStringData4 = function (newValue) {
         this.Instance.StringData4 = newValue;
     }
     Requestor.prototype.GetStringData5 = function () {
         return this.Instance.StringData5;
     }
     Requestor.prototype.SetStringData5 = function (newValue) {
         this.Instance.StringData5 = newValue;
     }
     Requestor.prototype.GetStringData6 = function () {
         return this.Instance.StringData6;
     }
     Requestor.prototype.SetStringData6 = function (newValue) {
         this.Instance.StringData6 = newValue;
     }
     Requestor.prototype.GetStringData7 = function () {
         return this.Instance.StringData7;
     }
     Requestor.prototype.SetStringData7 = function (newValue) {
         this.Instance.StringData7 = newValue;
     }
     Requestor.prototype.GetStringData8 = function () {
         return this.Instance.StringData8;
     }
     Requestor.prototype.SetStringData8 = function (newValue) {
         this.Instance.StringData8 = newValue;
     }
     Requestor.prototype.GetStringData9 = function () {
         return this.Instance.StringData9;
     }
     Requestor.prototype.SetStringData9 = function (newValue) {
         this.Instance.StringData9 = newValue;
     }
     Requestor.prototype.GetStringData10 = function () {
         return this.Instance.StringData10;
     }
     Requestor.prototype.SetStringData10 = function (newValue) {
         this.Instance.StringData10 = newValue;
     }
     Requestor.prototype.GetNumberData1 = function () {
         return this.Instance.NumberData1;
     }
     Requestor.prototype.SetNumberData1 = function (newValue) {
         this.Instance.NumberData1 = newValue;
     }
     Requestor.prototype.GetNumberData2 = function () {
         return this.Instance.NumberData2;
     }
     Requestor.prototype.SetNumberData2 = function (newValue) {
         this.Instance.NumberData2 = newValue;
     }
     Requestor.prototype.GetNumberData3 = function () {
         return this.Instance.NumberData3;
     }
     Requestor.prototype.SetNumberData3 = function (newValue) {
         this.Instance.NumberData3 = newValue;
     }
     Requestor.prototype.GetNumberData4 = function () {
         return this.Instance.NumberData4;
     }
     Requestor.prototype.SetNumberData4 = function (newValue) {
         this.Instance.NumberData4 = newValue;
     }
     Requestor.prototype.GetNumberData5 = function () {
         return this.Instance.NumberData5;
     }
     Requestor.prototype.SetNumberData5 = function (newValue) {
         this.Instance.NumberData5 = newValue;
     }
 }

 function PBObjectInvokeImpl(Requestor) {
     Requestor.prototype.GetJSFunction = function (jsFunction, funName) {
         return this.Instance.GetJSFunction(jsFunction, funName);
     }
     Requestor.prototype.GetProperty = function (propertyName) {
         return this.Instance.GetProperty(propertyName);
     }
     Requestor.prototype.SetProperty = function (propertyName, newValue) {
         this.Instance.SetProperty(propertyName, newValue);
     }
     Requestor.prototype.Invoke = function (funName, signer, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20) {
         return this.Instance.Invoke(funName, signer, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20);
     }
     Requestor.prototype.TriggerEvent = function (funName, signer, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20) {
         return this.Instance.TriggerEvent(funName, signer, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20);
     }
 }

 function PBDragObjectImpl(Requestor) {

    PBObjectInvokeImpl(Requestor); //支持调用Inovke等函数

   Requestor.prototype.SetFocus = function () {
       return this.Instance.SetFocus();
    }
    Requestor.prototype.SetRedraw = function (bDraw) {
        return this.Instance.SetRedraw(bDraw);
    }
    Requestor.prototype.Move = function (x, y) {
        return this.Instance.Move(x, y);
    }
    Requestor.prototype.Resize = function (newWidth, newHeight) {
        return this.Instance.Resize(newWidth, newHeight);
    }
    Requestor.prototype.Show = function () {
        return this.Instance.Show();
    }
    Requestor.prototype.Hide = function () {
        return this.Instance.Hide();
    }
    Requestor.prototype.PointerX = function () {
        return this.Instance.PointerX();
    }
    Requestor.prototype.PointerY = function () {
        return this.Instance.PointerY();
    }
    Requestor.prototype.SetPosition = function (posType) {
        return this.Instance.SetPosition(posType);
    }
    Requestor.prototype.AttachEvent = function (eventName, jsFunction, funName) {
        if (arguments.length == 2)
            this.Instance.AttachEvent(eventName, jsFunction);
        else
            this.Instance.AttachEvent(eventName, jsFunction, funName);
    }
    Requestor.prototype.DetachEvent = function (eventName, jsFunction, funName) {
        if (arguments.length == 2)
            this.Instance.DetachEvent(eventName, jsFunction);
        else
            this.Instance.DetachEvent(eventName, jsFunction, funName);
    }
    Requestor.prototype.SetEnabled = function (bEnalbed) {
        this.Instance.Enabled = bEnalbed;
    }
    Requestor.prototype.GetEnabled = function () {
        return this.Instance.Enabled;
    }
    Requestor.prototype.SetVisible = function (bVisible) {
        this.Instance.Visible = bVisible;
    }
    Requestor.prototype.GetVisible = function () {
        return this.Instance.Visible;
    }
    Requestor.prototype.GetX = function () {
        return this.Instance.X;
    }
    Requestor.prototype.SetX = function (newValue) {
        this.Instance.X = newValue;
    }
    Requestor.prototype.GetY = function () {
        return this.Instance.Y;
    }
    Requestor.prototype.SetY = function (newValue) {
        this.Instance.Y = newValue;
    }
    Requestor.prototype.GetWidth = function () {
        return this.Instance.Width;
    }
    Requestor.prototype.SetWidth = function (newValue) {
        this.Instance.Width = newValue;
    }
    Requestor.prototype.GetHeight = function () {
        return this.Instance.Height;
    }
    Requestor.prototype.SetHeight = function (newValue) {
        this.Instance.Height = newValue;
    }
    Requestor.prototype.GetBringToTop = function () {
        return this.Instance.BringToTop;
    }
    Requestor.prototype.SetBringToTop = function (newValue) {
        this.Instance.BringToTop = newValue;
    }
    Requestor.prototype.GetTabOrder = function () {
        return this.Instance.TabOrder;
    }
    Requestor.prototype.SetTabOrder = function (newValue) {
        this.Instance.TabOrder = newValue;
    }
    Requestor.prototype.GetBackColor = function () {
        return this.Instance.BackColor;
    }
    Requestor.prototype.SetBackColor = function (newValue) {
        this.Instance.BackColor = newValue;
    }
    Requestor.prototype.GetName = function () {
        return this.Instance.Name;
    }
    Requestor.prototype.GetParentWindow = function () {
        return this.Instance.ParentWindow;
    }
    Requestor.prototype.GetTag = function () {
        return this.Instance.Tag;
    }
    Requestor.prototype.SetTag = function (newValue) {
        this.Instance.Tag = newValue;
    }
    Requestor.prototype.GetDragAuto = function () {
        return this.Instance.DragAuto;
    }
    Requestor.prototype.SetDragAuto = function (newValue) {
        this.Instance.DragAuto = newValue;
    }
    Requestor.prototype.GetDragIcon = function () {
        return this.Instance.DragIcon;
    }
    Requestor.prototype.SetDragIcon = function (newValue) {
        this.Instance.DragIcon = newValue;
    }
}

function PBDragObjectExImpl(Requestor) {
    PBDragObjectImpl(Requestor);

    Requestor.prototype.GetText = function () {
        return this.Instance.Text;
    }
    Requestor.prototype.SetText = function (newValue) {
        this.Instance.Text = newValue;
    }
    Requestor.prototype.GetFaceName = function () {
        return this.Instance.FaceName;
    }
    Requestor.prototype.SetFaceName = function (newValue) {
        this.Instance.FaceName = newValue;
    }
    Requestor.prototype.GetTextSize = function () {
        return this.Instance.TextSize;
    }
    Requestor.prototype.SetTextSize = function (newValue) {
        this.Instance.TextSize = newValue;
    }
    Requestor.prototype.GetItalic = function () {
        return this.Instance.Italic;
    }
    Requestor.prototype.SetItalic = function (newValue) {
        this.Instance.Italic = newValue;
    }
    Requestor.prototype.GetUnderLine = function () {
        return this.Instance.UnderLine;
    }
    Requestor.prototype.SetUnderLine = function (newValue) {
        this.Instance.UnderLine = newValue;
    }
    Requestor.prototype.GetTextColor = function () {
        return this.Instance.TextColor;
    }
    Requestor.prototype.SetTextColor = function (newValue) {
        this.Instance.TextColor = newValue;
    }
 }

 function PBWindowImpl(Requestor) {

     PBDragObjectImpl(Requestor);
     PBObjectUserDataImpl(Requestor);

     Requestor.prototype.Control = function (name) {
         return this.Instance.Control(name);
     }
     Requestor.prototype.AttachEvent = function (objectName, eventName, jsFunction, funName) {
        if(arguments.length>=4)
            this.Instance.AttachEvent(objectName, eventName, jsFunction,funName);
        else
            this.Instance.AttachEvent(objectName, eventName, jsFunction);
     }
    Requestor.prototype.DetachEvent = function (objectName, eventName, jsFunction, funName) {
        if (arguments.length >= 4)
            this.Instance.DetachEvent(objectName, eventName, jsFunction, funName);
        else
            this.Instance.DetachEvent(objectName, eventName, jsFunction);
     }
     Requestor.prototype.Open = function (url, fun, showLoading) {
         this.Instance.Open(url, fun, showLoading);
     }
     Requestor.prototype.Load = function (xml, fun, showLoading) {
         this.Instance.Load(xml, fun, showLoading);
     }
     Requestor.prototype.Close = function () {
         this.Instance.Close();
     }
     Requestor.prototype.MessageBox = function (szTitle, szText, icon, buttons) {
         return this.Instance.MessageBox(szTitle, szText, icon, buttons);
     }
     Requestor.prototype.CreateOleObject = function (progID, oleObject) {
         var ole = this.Instance.CreateOleObject(progID);
         if (ole != null && typeof (oleObject) == "object" && typeof (oleObject.Attach) == "function") {
             oleControl.Attach(ole);
         }
         return ole;
     }
     Requestor.prototype.CreatePBObject = function (objectType, nvo) {
        if (nvo.Instance == null)
             nvo.Attach(this.Instance.CreatePBObject(objectType));
     }
    Requestor.prototype.CreateDataStore = function (ds) {
        if (ds.Instance == null)
            ds.Attach(this.Instance.CreateDataStore());
    }
    Requestor.prototype.CreateDw2Xls = function (dw2xls) {
        if (dw2xls.Instance == null)
            dw2xls.Attach(this.Instance.CreateDw2Xls());
    }
    Requestor.prototype.GetDocument = function () {
        return this.Instance.Document;
    }
    Requestor.prototype.GetParm = function (keyName) {
        return this.Instance.GetParm(keyName);
    }
    Requestor.prototype.SetParm = function (keyName, KeyValue) {
        return this.Instance.SetParm(keyName, KeyValue);
    }
    Requestor.prototype.GetTitle = function () {
        return this.Instance.Title;
    }
    Requestor.prototype.SetTitle = function (title) {
        this.Instance.Title = title;
    }
    Requestor.prototype.GetFunctionID = function () {
        return this.Instance.FunctionID;
    }
    Requestor.prototype.PrintSetup = function () {
        return this.Instance.PrintSetup();
    }
    Requestor.prototype.PrintSetPrinter = function (szPrinter) {
        return this.Instance.PrintSetPrinter(szPrinter);
    }
    Requestor.prototype.PrintGetPrinter = function () {
        return this.Instance.PrintGetPrinter();
    }
    Requestor.prototype.PrintGetPrinters = function () {
        return this.Instance.PrintGetPrinters();
    }
    Requestor.prototype.XPixelsToUnits = function () {
        return this.Instance.XPixelsToUnits();
    }
    Requestor.prototype.YPixelsToUnits = function () {
        return this.Instance.YPixelsToUnits();
    }
    Requestor.prototype.XUnitsToPixels = function () {
        return this.Instance.XUnitsToPixels();
    }
    Requestor.prototype.YUnitsToPixels = function () {
        return this.Instance.YUnitsToPixels();
    }
    Requestor.prototype.FileExists = function (fileName) {
        return this.Instance.FileExists(fileName);
    }
    Requestor.prototype.GetFileOpenName = function (title, filename, extension, filter, initdir) {
        return this.Instance.GetFileOpenName(title, filename, extension, filter, initdir);
    }
    Requestor.prototype.GetFileSaveName = function (title, filename, extension, filter, initdir) {
        return this.Instance.GetFileSaveName(title, filename, extension, filter, initdir);
    }
    Requestor.prototype.GetFileSize = function (fileName) {
        return this.Instance.GetFileSize(fileName);
    }
    Requestor.prototype.GetFolder = function (title, initdir) {
        return this.Instance.GetFolder(title, initdir);
    }
    Requestor.prototype.DirectoryExists = function (dirName) {
        return this.Instance.DirectoryExists(dirName);
    }
    Requestor.prototype.Trim = function (text) {
        return this.Instance.Trim(text);
    }
    Requestor.prototype.LeftTrim = function (text) {
        return this.Instance.LeftTrim(text);
    }
    Requestor.prototype.RightTrim = function (text) {
        return this.Instance.RightTrim(text);
    }
    Requestor.prototype.ClipBoard = function (text) {
        if (arguments.length == 0)
            return this.Instance.ClipBoard();
        else
            return this.Instance.ClipBoard(text);
    }
    Requestor.prototype.ChooseColor = function (nColor) {
        return this.Instance.ChooseColor(nColor);
    }
    Requestor.prototype.GetFileBase64 = function (fileName) {
        return this.Instance.GetFileBase64(fileName);
    }
    Requestor.prototype.GetFileMD5 = function (fileName) {
        return this.Instance.GetFileMD5(fileName);
    }
    Requestor.prototype.GetCacheFile = function (url, fileExt) {
        return this.Instance.GetCacheFile(url, fileExt);
    }
    Requestor.prototype.Increase = function (text, step) {
        return this.Instance.Increase(text, step);
    }
    Requestor.prototype.HasRight = function (permissionID) {
        return this.Instance.HasRight(permissionID);
    }
    Requestor.prototype.Compress = function (text) {
        return this.Instance.Compress(text);
    }
    Requestor.prototype.UnCompress = function (text) {
        return this.Instance.UnCompress(text);
    }
    Requestor.prototype.GetEditMode = function () {
        return this.Instance.EditMode;
    }
    Requestor.prototype.SetEditMode = function (newValue) {
        this.Instance.EditMode = newValue;
    }
    Requestor.prototype.IsNumber = function (text) {
        return this.Instance.IsNumber(text);
    }
    Requestor.prototype.IsDate = function (text) {
        return this.Instance.IsDate(text);
    }
    Requestor.prototype.IsDateTime = function (text) {
        return this.Instance.IsDateTime(text);
    }
    Requestor.prototype.IsTime = function (text) {
        return this.Instance.IsTime(text);
    }
    Requestor.prototype.SetShowContextMenu = function (show) {
        this.Instance.ShowContextMenu = show;
    }
    Requestor.prototype.GetShowContextMenu = function () {
        return this.Instance.ShowContextMenu;
    }
    Requestor.prototype.GetContextMenu = function (contextMenu) {
        var menu = this.Instance.ContextMenu;
        if (contextMenu != undefined && typeof (contextMenu.Attach) == "function")
            contextMenu.Attach(menu);
        return menu;
    }
    Requestor.prototype.GetPermission = function (dataStore) {
        var ds = this.Instance.Permission;
        if (dataStore != undefined && typeof (dataStore.Attach) == "function")
            dataStore.Attach(menu);
        return ds;
    }
    Requestor.prototype.ShowModalDialog = function (url, arg, options) {
        return this.Instance.ShowModalDialog(url, arg, options);
    }
    Requestor.prototype.ShowModelessDialog = function (url, arg, options) {
        return this.Instance.ShowModelessDialog(url, arg, options);
    }
    Requestor.prototype.ResumeLayout = function () {
         this.Instance.ResumeLayout();
     }
     Requestor.prototype.SuspendLayout = function () {
         this.Instance.SuspendLayout();
     }
     Requestor.prototype.ShowLoading = function (text) {
        return  this.Instance.ShowLoading(text);
    }
    Requestor.prototype.CloseLoading = function () {
        return this.Instance.CloseLoading();
    }
    Requestor.prototype.String = function (dataValue, dataFormat) {
        return this.Instance.String(dataValue, dataFormat );
    }
 }
//#endregion

 //#region
function DataWindowBaseImpl(Requestor)
{
    Requestor.prototype.GetRow = function () {
        return this.Instance.GetRow();
    }
    Requestor.prototype.SetRow = function (rowNumber) {
        return this.Instance.SetRow(rowNumber);
    }
    Requestor.prototype.InsertRow = function (rowNumber) {
        return this.Instance.InsertRow(rowNumber);
    }
    Requestor.prototype.DeleteRow = function (rowNumber) {
        return this.Instance.DeleteRow(rowNumber);
    }
    Requestor.prototype.GetItemString = function (RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue) {
        try {
            if (arguments.length == 2)
                return this.Instance.GetItemString(RowNumber, ColumnNameOrNumber);
            else if (arguments.length == 3)
                return this.Instance.GetItemString(RowNumber, ColumnNameOrNumber, dwBuffer);
            else
                return this.Instance.GetItemString(RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue);
        } catch (e) {
            throw new Error("GetItemString Error.\r\nRow: " + RowNumber + "\r\nColumn:" + ColumnNameOrNumber);
        }
    }
    Requestor.prototype.GetItemNumber = function (RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue) {
        try {
            if (arguments.length == 2)
                return this.Instance.GetItemNumber(RowNumber, ColumnNameOrNumber);
            else if (arguments.length == 3)
                return this.Instance.GetItemNumber(RowNumber, ColumnNameOrNumber, dwBuffer);
            else
                return this.Instance.GetItemNumber(RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue);
        } catch (e) {
            throw new Error("GetItemNumber Error.\r\nRow: " + RowNumber + "\r\nColumn:" + ColumnNameOrNumber);
        }
    }
    Requestor.prototype.GetItemDate = function (RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue) {
        try {
            if (arguments.length == 2)
                return this.Instance.GetItemDate(RowNumber, ColumnNameOrNumber);
            else if (arguments.length == 3)
                return this.Instance.GetItemDate(RowNumber, ColumnNameOrNumber, dwBuffer);
            else
                return this.Instance.GetItemDate(RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue);
        } catch (e) {
            throw new Error("GetItemDate Error.\r\nRow: " + RowNumber + "\r\nColumn:" + ColumnNameOrNumber);
        }
    }
    Requestor.prototype.GetDisplayValue = function (RowNumber, ColumnNameOrNumber) {
        return this.Instance.GetDisplayValue(RowNumber, ColumnNameOrNumber);
    }

    Requestor.prototype.SetItem = function (RowNumber, ColumnNameOrNumber, ColumnValue) {
        try {
            return this.Instance.SetItem(RowNumber, ColumnNameOrNumber, ColumnValue);

        } catch (e) {
            throw new Error("SetItem Error.\r\nRow: " + RowNumber + "\r\nColumn: " + ColumnNameOrNumber);
        }
    }
    Requestor.prototype.Modify = function (modString) {
        return this.Instance.Modify(modString);
    }
    Requestor.prototype.Describe = function (PropertyList) {
        return this.Instance.Describe(PropertyList);
    }
    Requestor.prototype.GetChanges = function () {
        return this.Instance.GetChanges();
    }
    Requestor.prototype.SetChanges = function (changes) {
        return this.Instance.SetChanges(changes);
    }
    Requestor.prototype.GetFullState = function () {
        return this.Instance.GetFullState();
    }
    Requestor.prototype.SetFullState = function (State) {
        return this.Instance.SetFullState(State);
    }
    Requestor.prototype.GetItemStatus = function (Row, ColumnNameOrNumber, dwBuffer) {
        return this.Instance.GetItemStatus(Row, ColumnNameOrNumber, dwBuffer);
    }
    Requestor.prototype.SetItemStatus = function (Row, ColumnNameOrNumber, dwBuffer, Status) {
        return this.Instance.SetItemStatus(Row, ColumnNameOrNumber, dwBuffer, Status);
    }
    Requestor.prototype.RowCount = function () {
        return this.Instance.RowCount();
    }
    Requestor.prototype.DeletedCount = function () {
        return this.Instance.DeletedCount();
    }
    Requestor.prototype.ModifiedCount = function () {
        return this.Instance.ModifiedCount();
    }
    Requestor.prototype.FilteredCount = function () {
        return this.Instance.FilteredCount();
    }
    Requestor.prototype.AcceptText = function () {
        return this.Instance.AcceptText();
    }
    Requestor.prototype.GetColumn = function () {
        return this.Instance.GetColumn();
    }
    Requestor.prototype.GetColumnName = function () {
        return this.Instance.GetColumnName();
    }
    Requestor.prototype.SetColumn = function (ColumnNameOrNumber) {
        return this.Instance.SetColumn(ColumnNameOrNumber);
    }
    Requestor.prototype.SelectRow = function (Row, bSelect) {
        return this.Instance.SelectRow(Row, bSelect);
    }
    Requestor.prototype.IsSelected = function (Row) {
        return this.Instance.IsSelected(Row);
    }
    Requestor.prototype.GetSelectedRow = function (StartRow) {
        return this.Instance.GetSelectedRow(StartRow);
    }
    Requestor.prototype.GetNextModified = function (Row, dwBuffer) {
        return this.Instance.GetNextModified(Row, dwBuffer);
    }
    Requestor.prototype.GetRowIdFromRow = function (Row, dwBuffer) {
        return this.Instance.GetRowIdFromRow(Row, dwBuffer);
    }
    Requestor.prototype.GetRowFromRowId = function (Row, dwBuffer) {
        return this.Instance.GetRowFromRowId(Row, dwBuffer);
    }
    Requestor.prototype.Print = function (CancelDialog, ShowPrintDialog) {
        return this.Instance.Print(CancelDialog, ShowPrintDialog);
    }
    Requestor.prototype.Reset = function () {
        return this.Instance.Reset();
    }
    Requestor.prototype.ResetUpdate = function () {
        return this.Instance.ResetUpdate();
    }
    Requestor.prototype.GroupCalc = function () {
        return this.Instance.GroupCalc();
    }
    Requestor.prototype.RowsCopy = function (StartRow, EndRow, CopyBuffer, TargetDW, BeforeRow, TargetBuffer) {
        if(typeof (TargetDW.Instance) == "undefined")
            return this.Instance.RowsCopy(StartRow, EndRow, CopyBuffer, TargetDW, BeforeRow, TargetBuffer);
        else if (TargetDW.Instance != null)
            return this.Instance.RowsCopy(StartRow, EndRow, CopyBuffer, TargetDW.Instance, BeforeRow, TargetBuffer);
        else
            return -1;
   }
    Requestor.prototype.RowsMove = function (StartRow, EndRow, CopyBuffer, TargetDW, BeforeRow, TargetBuffer) {
        if (typeof (TargetDW.Instance) == "undefined")
            return this.Instance.RowsMove(StartRow, EndRow, CopyBuffer, TargetDW, BeforeRow, TargetBuffer);
        else if (TargetDW.Instance != null)
            return this.Instance.RowsMove(StartRow, EndRow, CopyBuffer, TargetDW.Instance, BeforeRow, TargetBuffer);
        else
            return -1;
    }
    Requestor.prototype.RowsDiscard = function (StartRow, EndRow, Buffer) {
        return this.Instance.RowsDiscard(StartRow, EndRow, Buffer);
    }
    Requestor.prototype.ShareData = function (TargetDW) {
         if(typeof (TargetDW.Instance) == "undefined")
             return this.Instance.ShareData(TargetDW);
         else if (TargetDW.Instance != null)
            return this.Instance.ShareData(TargetDW.Instance);
        else
            return -1;
    }
    Requestor.prototype.ShareDataOff = function () {
        return this.Instance.ShareDataOff();
    }
    Requestor.prototype.SetSort = function (Format) {
        return this.Instance.SetSort(Format);
    }
    Requestor.prototype.Sort = function () {
        return this.Instance.Sort();
    }
    Requestor.prototype.SetFilter = function (Format) {
        return this.Instance.SetFilter(Format);
    }
    Requestor.prototype.Filter = function () {
        return this.Instance.Filter();
    }
    Requestor.prototype.Find = function (SearchString, StartRow, EndRow) {
        return this.Instance.Find(SearchString, StartRow, EndRow);
    }
    Requestor.prototype.FindGroupChange = function (Row, evel) {
        return this.Instance.FindGroupChange(Row, evel);
    }
    Requestor.prototype.Retrieve = function (arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19,arg20) {
        return this.Instance.Retrieve(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19,arg20);
    }
    Requestor.prototype.RetrieveEx = function (SqlWhere) {
        return this.Instance.RetrieveEx(SqlWhere);
    }
    Requestor.prototype.ReSelectRow = function (Row) {
        return this.Instance.ReSelectRow(Row);
    }
    Requestor.prototype.ImportFile = function (FileName) {
        return this.Instance.ImportFile(FileName);
    }
    Requestor.prototype.ImportString = function (Data) {
        return this.Instance.ImportString(Data);
    }
        Requestor.prototype.ImportBase64String = function (Data) {
        return this.Instance.ImportBase64String(Data);
    }
    Requestor.prototype.IsItemNull = function (Row, ColumnNameOrNumber) {
        return this.Instance.IsItemNull(Row, ColumnNameOrNumber);
    }
    Requestor.prototype.SetItemNull = function (Row, ColumnNameOrNumber) {
        return this.Instance.SetItemNull(Row, ColumnNameOrNumber);
    }
    Requestor.prototype.Scroll = function (ScrollAmount) {
        return this.Instance.Scroll(ScrollAmount);
    }
    Requestor.prototype.ScrollToRow = function (Row) {
        return this.Instance.ScrollToRow(Row);
    }
    Requestor.prototype.ScrollNextPage = function () {
        return this.Instance.ScrollNextPage();
    }
    Requestor.prototype.ScrollPriorPage = function () {
        return this.Instance.ScrollPriorPage();
    }
    Requestor.prototype.ScrollNextRow = function () {
        return this.Instance.ScrollNextRow();
    }
    Requestor.prototype.ScrollPriorRow = function () {
        return this.Instance.ScrollPriorRow();
    }
    Requestor.prototype.SetDetailHeight = function (StartRow, EndRow, Height) {
        return this.Instance.SetDetailHeight(StartRow, EndRow, Height);
    }
    Requestor.prototype.GetText = function () {
        return this.Instance.GetText();
    }
    Requestor.prototype.SetText = function (Text) {
        return this.Instance.SetText(Text);
    }
    Requestor.prototype.GetValue = function (ColumnNameOrNumber, Index) {
        return this.Instance.GetValue(ColumnNameOrNumber, Index);
    }
    this.SetValue = function (ColumnNameOrNumber, Index, Value) {
        return this.Instance.SetValue(ColumnNameOrNumber, Index, Value);
    }
    Requestor.prototype.ClearValues = function (ColumnNameOrNumber) {
        return this.Instance.ClearValues(ColumnNameOrNumber);
    }
    Requestor.prototype.GetValidate = function (ColumnNameOrNumber) {
        return this.Instance.GetValidate(ColumnNameOrNumber);
    }
    Requestor.prototype.SetValidate = function (ColumnNameOrNumber, Rule) {
        return this.Instance.SetValidate(ColumnNameOrNumber, Rule);
    }
    Requestor.prototype.GetFormat = function (ColumnNameOrNumber) {
        return this.Instance.GetFormat(ColumnNameOrNumber);
    }
    Requestor.prototype.SetFormat = function (ColumnNameOrNumber, Format) {
        return this.Instance.SetFormat(ColumnNameOrNumber, Format);
    }
    Requestor.prototype.GetSyntaxData = function () {
        return this.Instance.GetSyntaxData();

    }
   Requestor.prototype.SetSyntaxData = function (newValue) {
        return this.Instance.SetSyntaxData(newValue);
    }
    Requestor.prototype.Update = function (showMessage) {
        if(arguments.length==0)
            return this.Instance.Update();
        else
            return this.Instance.Update(showMessage);
    }
    Requestor.prototype.SetPosition = function (ObjectName, Band, BringToFront) {
        return this.Instance.SetPosition(ObjectName, Band, BringToFront);
    }
    Requestor.prototype.GetClickedColumn = function () {
        return this.Instance.GetClickedColumn();
    }
    Requestor.prototype.GetClickedRow = function () {
        return this.Instance.GetClickedRow();
    }
    Requestor.prototype.GetObjectAtPointer = function () {
        return this.Instance.GetObjectAtPointer();
    }
    Requestor.prototype.GetBandAtPointer = function () {
        return this.Instance.GetBandAtPointer();
    }
    Requestor.prototype.SaveAs = function (FileName, SaveAsType, colHeading, encoding) {
        var retValue = -1;
        switch (arguments.length) {
            case 1:
                retValue = this.Instance.SaveAs(FileName);
                break;
            case 2:
                retValue = this.Instance.SaveAs(FileName, SaveAsType);
                break;
            case 3:
                retValue = this.Instance.SaveAs(FileName, SaveAsType, colHeading);
                break;
            default:
                this.Instance.SaveAs(FileName, SaveAsType, colHeading, encoding);
                break;
        }
        return retValue;
    }
    Requestor.prototype.ImportFileEx = function (SaveAsType, FileName, StartRow, EndRow, StartColumn, EndColumn, DwStartColumn) {
         return this.Instance.ImportFileEx(SaveAsType, FileName, StartRow, EndRow, StartColumn, EndColumn, DwStartColumn);
    }
    Requestor.prototype.ImportStringEx = function (SaveAsType, String, StartRow, EndRow, StartColumn, EndColumn, DwStartColumn) {
        return this.Instance.ImportStringEx(SaveAsType, String, StartRow, EndRow, StartColumn, EndColumn, DwStartColumn);
    }

    Requestor.prototype.GetDataObject = function () {
        return this.Instance.DataObject;
    }

    Requestor.prototype.SetDataObject = function (name) {
        this.Instance.DataObject = name;
    }
    Requestor.prototype.Refresh = function () {
        return this.Instance.Refresh();
    }
    Requestor.prototype.GetDbProfile = function () {
        return this.Instance.DbProfile;
    }
    Requestor.prototype.SetDbProfile = function (dbProfileName) {
        this.Instance.DbProfile =dbProfileName;
    }
    Requestor.prototype.GetAsyncRetrieve = function () {
        return this.Instance.AsyncRetrieve;
    }
    Requestor.prototype.SetAsyncRetrieve = function (async) {
        this.Instance.AsyncRetrieve = async;
    }
}

function DataWindowImpl(Requestor) {
    PBDragObjectImpl(DataWindow);
    PBObjectUserDataImpl(DataWindow);
    DataWindowBaseImpl(Requestor);

    Requestor.prototype.CreateDataWindowChild = function (dwc) {
        if (dwc.Instance == null)
            dwc.Attach(this.Instance.CreateDataWindowChild());
    }
    Requestor.prototype.GetChild = function (name, dwc) {
        try {
            if (dwc.Instance == null)
                dwc.Attach(this.Instance.CreateDataWindowChild());

            return this.Instance.GetChild(name, dwc.Instance);
        }
        catch (e) {
            throw new Error("GetChild Error. DataWindowChild Name: " + name);
        }
    }
    Requestor.prototype.GetService = function (name, service) {
        if (service != undefined && typeof (service.Attach) == "function")
            service.Attach(this.Instance.GetService(name));
        else
            return this.Instance.GetService(name);
    }

    Requestor.prototype.GetReportSrv = function (service) {
        var srv =this.Instance.ReportSrv;
        if (service != undefined && typeof (service.Attach) == "function")
            service.Attach(srv);
        
        return srv;
    }

    Requestor.prototype.RefreshDetails = function () {
        return this.Instance.RefreshDetails();
    }
    Requestor.prototype.SortDlg = function (disableAdvButton) {
        return this.Instance.SortDlg(disableAdvButton);
    }
    Requestor.prototype.FilterDlg = function (disableAdvButton) {
        return this.Instance.FilterDlg(disableAdvButton);
    }
    Requestor.prototype.FindDlg = function () {
        this.Instance.FindDlg();
    }
    Requestor.prototype.PrintPreview = function () {
        return this.Instance.PrintPreview();
    }
    Requestor.prototype.PageSetup = function () {
        return this.Instance.PageSetup();
    }
    Requestor.prototype.Export = function () {
        return this.Instance.Export();
    }
    Requestor.prototype.SelectColumn = function () {
        return this.Instance.SelectColumn();
    }
    Requestor.prototype.Create = function (syntax) {
        return this.Instance.Create(syntax);
    }
    Requestor.prototype.AppendRows = function () {
        return this.Instance.AppendRows();
    }
    Requestor.prototype.SetRowSelection = function (Style) {
        return this.Instance.SetRowSelection(Style);
    }
    Requestor.prototype.SelectColumn = function () {
        return this.Instance.SelectColumn();
    }
    Requestor.prototype.Drag = function (DragMode) {
        return this.Instance.Drag(DragMode);
    }
    Requestor.prototype.SaveLayout = function () {
        return this.Instance.SaveLayout();
    }
    Requestor.prototype.RestoreLayout = function () {
        return this.Instance.RestoreLayout();
    }
    Requestor.prototype.ScrollToPage = function (pageIndex) {
        return this.Instance.ScrollToPage(pageIndex);
    }
    Requestor.prototype.ScrollFirstPage = function () {
        return this.Instance.ScrollFirstPage();
    }
    Requestor.prototype.ScrollLastPage = function () {
        return this.Instance.ScrollLastPage();
    }
    Requestor.prototype.ScrollFirstRow = function () {
        return this.Instance.ScrollFirstRow();
    }
    Requestor.prototype.ScrollLastRow = function () {
        return this.Instance.ScrollLastRow();
    }
    Requestor.prototype.Copy = function () {
        return this.Instance.Copy();
    }
    Requestor.prototype.Paste = function () {
        return this.Instance.Paste();
    }
    Requestor.prototype.Cut = function () {
        return this.Instance.Cut();
    }
    Requestor.prototype.Undo = function () {
        return this.Instance.Undo();
    }
    Requestor.prototype.CanUndo = function () {
        return this.Instance.CanUndo();
    }
    Requestor.prototype.Clear = function () {
        return this.Instance.Clear();
    }
    Requestor.prototype.ReplaceText = function (text) {
        return this.Instance.ReplaceText(text);
    }
    Requestor.prototype.SelectedLength = function () {
        return this.Instance.SelectedLength();
    }
    Requestor.prototype.SelectedStart = function () {
        return this.Instance.SelectedStart();
    }
    Requestor.prototype.SelectedText = function () {
        return this.Instance.SelectedText();
    }
    Requestor.prototype.SelectText = function (start, len) {
        return this.Instance.SelectText(start, len);
    }
    Requestor.prototype.Position = function () {
        return this.Instance.Position();
    }
    Requestor.prototype.TextLine = function () {
        return this.Instance.TextLine();
    }
    Requestor.prototype.LineCount = function () {
        return this.Instance.LineCount();
    }
    Requestor.prototype.SetPicture = function (name, url) {
        return this.Instance.SetPicture(name, url);
    }
    Requestor.prototype.Create = function (syntax) {
        return this.Instance.Create(syntax);
    }
    Requestor.prototype.GetPageSize = function () {
        return this.Instance.PageSize;
    }
    Requestor.prototype.SetPageSize = function (newValue) {
        this.Instance.PageSize = newValue;
    }
    Requestor.prototype.GetPageIndex = function () {
        return this.Instance.PageIndex;
    }
    Requestor.prototype.SetPageIndex = function (newValue) {
        this.Instance.PageIndex = newValue;
    }
    Requestor.prototype.GetPageCount = function () {
        return this.Instance.PageCount;
    }
    Requestor.prototype.GetPageRowCount = function () {
        return this.Instance.PageRowCount;
    }
    Requestor.prototype.GetProcessing = function () {
        return this.Instance.Processing;
    }
    Requestor.prototype.SetProcessing = function (newValue) {
        this.Instance.Processing = newValue;
    }
    Requestor.prototype.GetProcessEnter = function () {
        return this.Instance.ProcessEnter;
    }
    Requestor.prototype.SetProcessEnter = function (newValue) {
        this.Instance.ProcessEnter = newValue;
    }
    Requestor.prototype.GetProcessArrow = function () {
        return this.Instance.ProcessArrow;
    }
    Requestor.prototype.SetProcessArrow = function (newValue) {
        this.Instance.ProcessArrow = newValue;
    }
    Requestor.prototype.GetProcessItemError = function () {
        return this.Instance.ProcessItemError;
    }
    Requestor.prototype.SetProcessItemError = function (newValue) {
        this.Instance.ProcessItemError = newValue;
    }
    Requestor.prototype.GetAutoSaveColumnInfo = function () {
        return this.Instance.AutoSaveColumnInfo;
    }
    Requestor.prototype.SetAutoSaveColumnInfo = function (newValue) {
        this.Instance.AutoSaveColumnInfo = newValue;
    }
    Requestor.prototype.GetShowRetrieveMessage = function () {
        return this.Instance.ShowRetrieveMessage;
    }
    Requestor.prototype.SetShowRetrieveMessage = function (newValue) {
        this.Instance.ShowRetrieveMessage = newValue;
    }
    Requestor.prototype.GetClickHeaderSort = function () {
        return this.Instance.ClickHeaderSort;
    }
    Requestor.prototype.SetClickHeaderSort = function (newValue) {
        this.Instance.ClickHeaderSort = newValue;
    }
    Requestor.prototype.GetAutoSelectText = function () {
        return this.Instance.AutoSelectText;
    }
    Requestor.prototype.SetAutoSelectText = function (newValue) {
        this.Instance.AutoSelectText = newValue;
    }
    Requestor.prototype.GetAllowPrint = function () {
        return this.Instance.AllowPrint;
    }
    Requestor.prototype.GetAllowExport = function () {
        return this.Instance.AllowExport;
    }
    Requestor.prototype.GetAllowRetrieve = function () {
        return this.Instance.AllowRetrieve;
    }
    Requestor.prototype.GetAllowSetFullState = function () {
        return this.Instance.AllowSetFullState;
    }
    Requestor.prototype.GetAllowCreate = function () {
        return this.Instance.AllowCreate;
    }
    Requestor.prototype.SetShowContextMenu = function (show) {
        this.Instance.ShowContextMenu = show;
    }
    Requestor.prototype.GetShowContextMenu = function () {
        return this.Instance.ShowContextMenu;
    }
    Requestor.prototype.GetContextMenu = function (contextMenu) {
        var menu = this.Instance.ContextMenu;
        if (contextMenu != undefined && typeof (contextMenu.Attach) == "function")
            contextMenu.Attach(menu);
        return menu;
    }

    Requestor.prototype.SetExtendedWhereClause = function (extendedWhereClause) {
        this.Instance.ExtendedWhereClause = extendedWhereClause;
    }
    Requestor.prototype.GetExtendedWhereClause = function () {
        return this.Instance.ExtendedWhereClause;
    }
    Requestor.prototype.SetTrackRowHover = function (trackRowHover) {
        this.Instance.TrackRowHover = trackRowHover;
    }
    Requestor.prototype.GetTrackRowHover = function () {
        return this.Instance.TrackRowHover;
    }
    Requestor.prototype.SetRowHoverField = function (rowHoverField) {
        this.Instance.RowHoverField = rowHoverField;
    }
    Requestor.prototype.GetRowHoverField = function () {
        return this.Instance.RowHoverField;
    }
}

function TreeViewImpl(Requestor) {
    
    PBDragObjectExImpl(Requestor);
    PBObjectUserDataImpl(Requestor);

    Requestor.prototype.CreateTreeViewItem = function (tvi) {
        if (tvi.Instance == null)
            tvi.Attach(this.Instance.CreateTreeViewItem());
    }
    Requestor.prototype.GetService = function (name, service) {
        if (service.Instance == null)
            service.Attach(this.Instance.GetService(name));
    }
    Requestor.prototype.GetItem = function (nodeHandle, tvi) {
        if (tvi.Instance == null)
            tvi.Attach(this.Instance.CreateTreeViewItem());

        if (tvi.Instance != null)
            return this.Instance.GetItem(nodeHandle, tvi.Instance);
        else
            return -1;
    }
    Requestor.prototype.SetItem = function (nodeHandle, tvi) {
        if (tvi.Instance != null)
            return this.Instance.SetItem(nodeHandle, tvi.Instance);
        else
            return -1;
    }
    Requestor.prototype.InsertItemFirst = function (handleParent, tvi) {
        if (tvi.Instance != null)
            return this.Instance.InsertItemFirst(handleParent, tvi.Instance);
        else
            return -1;
    }
    Requestor.prototype.InsertItemLast = function (handleParent, tvi) {
        if (tvi.Instance != null) {
            return this.Instance.InsertItemLast(handleParent, tvi.Instance);
        }
        else
            return -1;
    }
    Requestor.prototype.InsertItemSort = function (handleParent, tvi) {
        if (tvi.Instance != null)
            return this.Instance.InsertItemSort(handleParent, tvi.Instance);
        else
            return -1;
    }
    Requestor.prototype.InsertItem = function (handleParent, handleAfer, tvi) {
        if (tvi.Instance != null)
            return this.Instance.InsertItem(handleParent, handleAfer, tvi.Instance);
        else
            return -1;
    }
    Requestor.prototype.CollapseItem = function (nodeHandle) {
        return this.Instance.CollapseItem(nodeHandle);
    }
    Requestor.prototype.DeleteItem = function (nodeHandle) {
        return this.Instance.DeleteItem(nodeHandle);
    }
    Requestor.prototype.EditLabel = function (nodeHandle) {
        return this.Instance.EditLabel(nodeHandle);
    }
    Requestor.prototype.ExpandAll = function (nodeHandle) {
        return this.Instance.ExpandAll(nodeHandle);
    }
    Requestor.prototype.ExpandItem = function (nodeHandle) {
        return this.Instance.ExpandItem(nodeHandle);
    }
    Requestor.prototype.SelectItem = function (nodeHandle) {
        return this.Instance.SelectItem(nodeHandle);
    }
    Requestor.prototype.SetFirstVisible = function (nodeHandle) {
        return this.Instance.SetFirstVisible(nodeHandle);
    }
    Requestor.prototype.SetDropHighlight = function (nodeHandle) {
        return this.Instance.SetDropHighlight(nodeHandle);
    }
    Requestor.prototype.FindItem = function (navigationCode, nodeHandle) {
        return this.Instance.FindItem(navigationCode, nodeHandle);
    }
    Requestor.prototype.RowCount = function () {
        return this.Instance.RowCount();
    }
    Requestor.prototype.InsertRow = function (rowNumber) {
        return tthis.Instancev.InsertRow(rowNumber);
    }
    Requestor.prototype.DeleteRow = function (rowNumber) {
        return this.Instance.DeleteRow(rowNumber);
    }
    Requestor.prototype.Find = function (SearchString, StartRow, EndRow) {
        return this.Instance.Find(SearchString, StartRow, EndRow);
    }
    Requestor.prototype.GetItemString = function (RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue) {
        try {
            if (arguments.length == 2)
                return this.Instance.GetItemString(RowNumber, ColumnNameOrNumber);
            else if (arguments.length == 3)
                return this.Instance.GetItemString(RowNumber, ColumnNameOrNumber, dwBuffer);
            else
                return this.Instance.GetItemString(RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue);
        } catch (e) {
            throw new Error("GetItemString Error.\r\nRow: " + RowNumber + "\r\nColumn: " + ColumnNameOrNumber);
        }
    }
    Requestor.prototype.GetItemNumber = function (RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue) {
        try {
            if (arguments.length == 2)
                return this.Instance.GetItemNumber(RowNumber, ColumnNameOrNumber);
            else if (arguments.length == 3)
                return this.Instance.GetItemNumber(RowNumber, ColumnNameOrNumber, dwBuffer);
            else
                return this.Instance.GetItemNumber(RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue);
        } catch (e) {
            throw new Error("GetItemString Error.\r\nRow: " + RowNumber + "\r\nColumn: " + ColumnNameOrNumber);
        }
    }
    Requestor.prototype.GetItemDate = function (RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue) {
        try {
            if (arguments.length == 2)
                return this.Instance.GetItemDate(RowNumber, ColumnNameOrNumber);
            else if (arguments.length == 3)
                return this.Instance.GetItemDate(RowNumber, ColumnNameOrNumber, dwBuffer);
            else
                return this.Instance.GetItemDate(RowNumber, ColumnNameOrNumber, dwBuffer, OriginalValue);
        } catch (e) {
            throw new Error("GetItemString Error.\r\nRow: " + RowNumber + "\r\nColumn: " + ColumnNameOrNumber);
        }
    }
    Requestor.prototype.SetItemEx = function (RowNumber, ColumnNameOrNumber, ColumnValue) {
        return this.Instance.SetItemEx(RowNumber, ColumnNameOrNumber, ColumnValue);
    }
    Requestor.prototype.GetHandleField = function () {
        return this.Instance.HandleField;
    }
    Requestor.prototype.GetDataField = function () {
        return this.Instance.DataField;
    }
    Requestor.prototype.GetLabelField = function () {
        return this.Instance.LabelField;
    }
    Requestor.prototype.GetParentField = function () {
        return this.Instance.ParentField;
    }
    Requestor.prototype.GetLeaveField = function () {
        return this.Instance.LeaveField;
    }
    Requestor.prototype.GetCheckedField = function () {
        return this.Instance.CheckedField;
    }
    Requestor.prototype.GetPictureIndexFiled = function () {
        return this.Instance.PictureIndexFiled;
    }
    Requestor.prototype.GetSelectedPictureIndexField = function () {
        return this.Instance.SelectedPictureIndexField;
    }
    Requestor.prototype.GetStatePictureIndexField = function () {
        return this.Instance.StatePictureIndexField;
    }
    Requestor.prototype.SetShowContextMenu = function (show) {
        this.Instance.ShowContextMenu = show;
    }
    Requestor.prototype.GetShowContextMenu = function () {
        return this.Instance.ShowContextMenu;
    }
    Requestor.prototype.GetContextMenu = function (contextMenu) {
        var menu = this.Instance.ContextMenu;
        if (contextMenu != undefined && typeof (contextMenu.Attach) == "function")
            contextMenu.Attach(menu);
        return menu;
    }
    Requestor.prototype.GetDataStore = function (dataStore) {
        var ds = this.Instance.DataStore;
        if (dataStore != undefined && typeof (dataStore.Attach) == "function")
            dataStore.Attach(ds);
        return ds;
    }
}

function TabStripImpl(Requestor) {

    PBDragObjectExImpl(Requestor); 

    Requestor.prototype.Open = function (key, title, image, urlPath, closeAble) {
        return this.Instance.Open(key, title, image, urlPath, closeAble);
    }
    Requestor.prototype.Load = function (key, title, image, xml, closeAble, listener) {
        return this.Instance.Load(key, title, image, xml, closeAble, listener);
    }
    Requestor.prototype.FindItem = function (key) {
        return this.Instance.FindItem(key);
    }
    Requestor.prototype.SelectItem = function (key) {
        return this.Instance.SelectItem(key);
    }
    Requestor.prototype.CloseItem = function (key) {
        return this.Instance.CloseItem(key);
    }
    Requestor.prototype.SetVisible = function (key, bVisible) {
        return this.Instance.SetVisible(key, bVisible);
    }
    Requestor.prototype.SetEnabled = function (key, bEnabled) {
        return this.Instance.SetEnabled(key, bEnabled);
    }
    Requestor.prototype.SetText = function (key, szText) {
        return this.Instance.SetText(key, szText);
    }
    Requestor.prototype.SetImage = function (key, szImage) {
        return this.Instance.SetImage(key, szImage);
    }
    Requestor.prototype.GetVisible = function (key) {
        return this.Instance.GetVisible(key);
    }
    Requestor.prototype.GetEnabled = function (key) {
        return this.Instance.GetEnabled(key);
    }
    Requestor.prototype.GetText = function (key) {
        return this.Instance.GetText(key);
    }
    Requestor.prototype.GetImage = function (key) {
        return this.Instance.GetImage(key);
    }
    Requestor.prototype.GetDocument = function (key) {
        return this.Instance.GetDocument(key);
    }
}
function ToolStripImpl(Requestor) {
    
    PBDragObjectExImpl(Requestor);

    Requestor.prototype.SetVisible = function (key, bVisible) {
        return this.Instance.SetVisible(key, bVisible);
    }
    Requestor.prototype.GetVisible = function (key) {
        return this.Instance.GetVisible(key);
    }
    Requestor.prototype.SetEnabled = function (key, bEnabled) {
        return this.Instance.SetEnabled(key, bEnabled);
    }
    Requestor.prototype.GetEnabled = function (key) {
        return this.Instance.GetEnabled(ke);
    }
    Requestor.prototype.SetText = function (key, szText) {
        return this.Instance.SetText(key, szText);
    }
    Requestor.prototype.GetText = function (key) {
        return this.Instance.GetText(key);
    }
    Requestor.prototype.SetImage = function (key, szImage) {
        return this.Instance.SetImage(key, szImage);
    }
    Requestor.prototype.GetImage = function (key) {
        return this.Instance.GetImage(key);
    }
    Requestor.prototype.SetTag = function (key, szTag) {
        return this.Instance.SetTag(key, szTag);
    }
    Requestor.prototype.GetTag = function (key) {
        return this.Instance.GetTag(key);
    }
    Requestor.prototype.SetChecked = function (key, bChecked) {
        return this.Instance.SetChecked(key, bChecked);
    }
    Requestor.prototype.GetChecked = function (key) {
        return this.Instance.GetChecked(key);
    }
}
function SplitContainerImpl(Requestor) {
    PBDragObjectExImpl(Requestor);
    Requestor.prototype.CollapsePanel = function (panelIndex) {
        return this.Instance.CollapsePanel(panelIndex);
    }
    Requestor.prototype.ExpandPanel = function (panelIndex) {
        return this.Instance.ExpandPanel(panelIndex);
    }
    Requestor.prototype.IsCollapsed = function (panelIndex) {
        return this.Instance.IsCollapsed(panelIndex);
    }
    Requestor.prototype.GetPanel1 = function (panel) {
        if (typeof (panel) == "object" && typeof (panel.Attach) == "function") {
            panel.Attach(this.Instance.Panel1);
        }
        return this.Instance.Panel1;
    }
    Requestor.prototype.GetPanel2 = function (panel) {
        if (typeof (panel) == "object" && typeof (panel.Attach) == "function") {
            panel.Attach(this.Instance.Panel2);
        }
        return this.Instance.Panel2;
    }
    Requestor.prototype.SetTitle = function (panelIndex, Title) {
         this.Instance.Title(panelIndex) = Title;
    }
    Requestor.prototype.GetTitle = function (panelIndex) {
       return this.Instance.Title(panelIndex);
   }
   Requestor.prototype.SetImage = function (panelIndex, Image) {
       this.Instance.Image(panelIndex) = Image;
   }
   Requestor.prototype.GetImage = function (panelIndex) {
       return this.Instance.Image(panelIndex);
   }
   Requestor.prototype.SetIsSplitterFixed = function (panelIndex, SplitterFixed) {
       this.Instance.IsSplitterFixed(panelIndex) = SplitterFixed;
   }
   Requestor.prototype.GetIsSplitterFixed = function (panelIndex) {
       return this.Instance.IsSplitterFixed(panelIndex);
   }
   Requestor.prototype.SetEnableCollpasePanel = function (panelIndex, EnableCollpasePanel) {
       this.Instance.EnableCollpasePanel(panelIndex) = EnableCollpasePanel;
   }
   Requestor.prototype.GetEnableCollpasePanel = function (panelIndex) {
       return this.Instance.EnableCollpasePanel(panelIndex);
   }
   Requestor.prototype.ResumeLayout = function () {
       this.Instance.ResumeLayout();
   }
   Requestor.prototype.SuspendLayout = function () {
       this.Instance.SuspendLayout();
   }
}
function TabControlImpl(Requestor) {

    PBDragObjectExImpl(Requestor);

    Requestor.prototype.GetSelectedTab = function () {
        return this.Instance.SelectedTab;
    }
    Requestor.prototype.SetSelectedTab = function (newValue) {
        this.Instance.SelectedTab = newValue;
    }
    Requestor.prototype.GetBoldSelectedText = function () {
        return this.Instance.BoldSelectedText;
    }
    Requestor.prototype.SetBoldSelectedText = function (newValue) {
        this.Instance.BoldSelectedText = newValue;
    }
    Requestor.prototype.GetFixedWidth = function () {
        return tb.FixedWidth;
    }
    Requestor.prototype.SetFixedWidth = function (newValue) {
        this.Instance.FixedWidth = newValue;
    }
    Requestor.prototype.GetMultiLine = function () {
        return this.Instance.MultiLine;
    }
    Requestor.prototype.SetMultiLine = function (newValue) {
        this.Instance.MultiLine = newValue;
    }
    Requestor.prototype.GetPictureOnRight = function () {
        return this.Instance.PictureOnRight;
    }
    Requestor.prototype.SetPictureOnRight = function (newValue) {
        this.Instance.PictureOnRight = newValue;
    }
    Requestor.prototype.GetPowerTips = function () {
        return this.Instance.PowerTips;
    }
    Requestor.prototype.SetPowerTips = function (newValue) {
        this.Instance.PowerTips = newValue;
    }
    Requestor.prototype.GetRangedRight = function () {
        return this.Instance.RangedRight;
    }
    Requestor.prototype.SetRangedRight = function (newValue) {
        this.Instance.RangedRight = newValue;
    }
    Requestor.prototype.GetShowText = function () {
        return this.Instance.ShowText;
    }
    Requestor.prototype.SetShowText = function (newValue) {
        this.Instance.ShowText = newValue;
    }
    Requestor.prototype.GetShowPicture = function () {
        return this.Instance.ShowPicture;
    }
    Requestor.prototype.SetShowPicture = function (newValue) {
        this.Instance.ShowPicture = newValue;
    }
    Requestor.prototype.GetPerpendicularText = function () {
        return this.Instance.PerpendicularText;
    }
    Requestor.prototype.SetPerpendicularText = function (newValue) {
        this.Instance.PerpendicularText = newValue;
    }
    Requestor.prototype.GetTabPositon = function () {
        return this.Instance.TabPositon;
    }
    Requestor.prototype.SetTabPositon = function (newValue) {
        this.Instance.TabPositon = newValue;
    }
    Requestor.prototype.SelectTab = function (Index) {
        return this.Instance.SelectTab(Index);
    }
    Requestor.prototype.MoveTab = function (s, d) {
        return this.Instance.MoveTab(s, d);
    }
    Requestor.prototype.GetTabPageText = function (NameOrIndex) {
        return this.Instance.TabPageText(NameOrIndex);
    }
    Requestor.prototype.SetTabPageText = function (NameOrIndex, newValue) {
         this.Instance.TabPageText(NameOrIndex)=newValue;
     }
     Requestor.prototype.GetTabPagePicture = function (NameOrIndex) {
         return this.Instance.TabPagePicture(NameOrIndex);
     }
     Requestor.prototype.SetTabPagePicture = function (NameOrIndex, newValue) {
         this.Instance.TabPagePicture(NameOrIndex)= newValue;
     }
     Requestor.prototype.GetTabPageVisible = function (NameOrIndex) {
         return this.Instance.TabPageVisible(NameOrIndex);
     }
     Requestor.prototype.SetTabPageVisible = function (NameOrIndex, newValue) {
         this.Instance.TabPageVisible(NameOrIndex)=newValue;
     }
     Requestor.prototype.GetTabPageEnabled = function (NameOrIndex) {
         return this.Instance.TabPageEnabled(NameOrIndex);
     }
     Requestor.prototype.SetTabPageEnabled = function (NameOrIndex, newValue) {
         this.Instance.TabPageEnabled(NameOrIndex)=newValue;
     }
     Requestor.prototype.ResumeLayout = function () {
         this.Instance.ResumeLayout();
     }
     Requestor.prototype.SuspendLayout = function () {
         this.Instance.SuspendLayout();
     }
 }
 function ProgressBarImpl(Requestor) {

     PBDragObjectExImpl(Requestor);

     Requestor.prototype.OffsetPos = function (increment) {
         return this.Instance.OffsetPos(increment);
     }
     Requestor.prototype.SetRange = function (StartPos, EndPos) {
         return this.Instance.SetRange(StartPos, EndPos);
     }
     Requestor.prototype.StepIt = function () {
         return this.Instance.StepIt();
     }
     Requestor.prototype.GetMaxPosition = function () {
         return this.Instance.MaxPosition;
     }
     Requestor.prototype.SetMaxPosition = function (newValue) {
         this.Instance.MaxPosition = newValue;
     }
     Requestor.prototype.GetMinPosition = function () {
         return this.Instance.MinPosition;
     }
     Requestor.prototype.SetMinPosition = function (newValue) {
         this.Instance.MinPosition = newValue;
     }
     Requestor.prototype.GetPosition = function () {
         return this.Instance.Position; ;
     }
     Requestor.prototype.SetPosition = function (newValue) {
         this.Instance.Position = newValue;
     }
     Requestor.prototype.GetSetStep = function () {
         return this.Instance.SetStep;
     }
     Requestor.prototype.SetSetStep = function (newValue) {
         this.Instance.SetStep = newValue;
     }
     Requestor.prototype.GetSmoothScroll = function () {
         return this.Instance.SmoothScroll;
     }
     Requestor.prototype.SetSmoothScroll = function (newValue) {
         this.Instance.SmoothScroll = newValue;
     }
 }
//#endregion

//#region PBWindow
function PBWindow() {
    var self = this;
    var win = null;
    this.Instance = null;

    this.Attach = function (obj) {
        win = obj;
        self.Instance = obj;
    }

    this.Detach = function () {
        win = null;
        self.Instance = null;
    }
}
PBWindowImpl(PBWindow);

//#endregion

//#region ReportSrv
function ReportSrv() {
    var self = this;
    var service = null;
    this.Instance = null;

    this.Attach = function (obj) {
        service = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        service = null;
        self.Instance = null;
    }
    this.UpdateRequestor = function () {
        return service.UpdateRequestor();
    }
    this.MoveColumn = function (OldIndex, NewIndex, ShowTips) {
        return service.MoveColumn(OldIndex, NewIndex, ShowTips);
    }
    this.AddKey = function (KeyName, KeyValue) {
        return service.AddKey(KeyName, KeyValue);
    }
    this.AddKeyFromDW = function (SourceDW) {
        return service.AddKeyFromDW(SourceDW.Instance);
    }
     this.DeleteKey = function (KeyName) {
        return service.DeleteKey(KeyName);
    }
    this.DeleteAllKeys = function () {
        return service.DeleteAllKeys();
    }
    this.SetTitle = function (Row, Alignment, Exp) {
        return service.SetTitle(Row, Alignment, Exp);
    }
    this.DeleteTitle = function (Row, Alignment) {
        return service.DeleteTitle(Row, Alignment);
    }
    this.DeleteAllTitles = function () {
        return service.DeleteAllTitles();
    }
    this.SetColumnVisible = function (columnName, bVisible) {
        return service.SetColumnVisible(columnName, bVisible);
    }
    this.GetMainTitle = function () {
        return service.MainTitle;
    }
    this.SetMainTitle = function (newValue) {
        service.MainTitle = newValue;
    }
    this.GetInLineColor = function () {
        return service.InLineColor;
    }
    this.SetInLineColor = function (newValue) {
        service.InLineColor = newValue;
    }
    this.GetOutLineColor = function () {
        return service.OutLineColor;
    }
    this.SetOutLineColor = function (newValue) {
        service.OutLineColor = newValue;
    }
    this.GetInLineWidth = function () {
        return service.InLineWidth;
    }
    this.SetInLineWidth = function (newValue) {
        service.InLineWidth = newValue;
    }
    this.GetOutLineWidth = function () {
        return service.OutLineWidth;
    }
    this.SetOutLineWidth = function (newValue) {
        service.OutLineWidth = newValue;
    }
    this.GetFixColumns = function () {
        return service.FixColumns;
    }
    this.SetFixColumns = function (newValue) {
        service.FixColumns = newValue;
    }
    this.GetZoom = function () {
        return service.Zoom;
    }
    this.SetZoom = function (newValue) {
        service.Zoom = newValue;
    }
    this.GetZoomOnePage = function () {
        return service.ZoomOnePage;
    }
    this.SetZoomOnePage = function (newValue) {
        service.ZoomOnePage = newValue;
    }
    this.GetRowHeight = function () {
        return service.RowHeight;
    }
    this.SetRowHeight = function (newValue) {
        service.RowHeight = newValue;
    }
    this.GetTitleUnderLines = function () {
        return service.TitleUnderLines;
    }
    this.SetTitleUnderLines = function (newValue) {
        service.TitleUnderLines = newValue;
    }
    this.GetRemark = function () {
        return service.Remark;
    }
    this.SetRemark = function (newValue) {
        service.Remark = newValue;
    }
    this.GetFooter_Left = function () {
        return service.Footer_Left;
    }
    this.SetFooter_Left = function (newValue) {
        service.Footer_Left = newValue;
    }
    this.GetFooter_Center = function () {
        return service.Footer_Center;
    }
    this.SetFooter_Center = function (newValue) {
        service.Footer_Center = newValue;
    }
    this.GetFooter_Right = function () {
        return service.Footer_Right;
    }
    this.SetFooter_Right = function (newValue) {
        service.Footer_Right = newValue;
    }
    this.GetAutoRowHeight = function () {
        return service.AutoRowHeight;
    }
    this.SetAutoRowHeight = function (newValue) {
        service.AutoRowHeight = newValue;
    }
    this.GetFontName = function () {
        return service.FontName;
    }
    this.SetFontName = function (newValue) {
        service.FontName = newValue;
    }
    this.GetFontSize = function () {
        return service.FontSize;
    }
    this.SetFontSize = function (newValue) {
        service.FontSize = newValue;
    }
    this.GetTitleFontName = function () {
        return service.TitleFontName;
    }
    this.SetTitleFontName = function (newValue) {
        service.TitleFontName = newValue;
    }
    this.GetTitleFontSize = function () {
        return service.TitleFontSize;
    }
    this.SetTitleFontSize = function (newValue) {
        service.TitleFontSize = newValue;
    }
    this.GetRequestorDrawTitle = function () {
        return service.RequestorDrawTitle;
    }
    this.SetRequestorDrawTitle = function (newValue) {
        service.RequestorDrawTitle = newValue;
    }
    this.GetAllowMoveColumn = function () {
        return service.AllowMoveColumn;
    }
    this.SetAllowMoveColumn = function (newValue) {
        service.AllowMoveColumn = newValue;
    }
    this.GetAllowResizeColumn = function () {
        return service.AllowResizeColumn;
    }
    this.SetAllowResizeColumn = function (newValue) {
        service.AllowResizeColumn = newValue;
    }
    this.GetAllowUserDefinePageSummary = function () {
        return service.AllowUserDefinePageSummary;
    }
    this.SetAllowUserDefinePageSummary = function (newValue) {
        service.AllowUserDefinePageSummary = newValue;
    }
    this.GetAddPageSummaryRows = function () {
        return service.AddPageSummaryRows;
    }
    this.SetAddPageSummaryRows = function (newValue) {
        service.AddPageSummaryRows = newValue;
    }
    this.GetPageSummaryText = function () {
        return service.PageSummaryText;
    }
    this.SetPageSummaryText = function (newValue) {
        service.PageSummaryText = newValue;
    }
    this.GetPageSummaryTextCol = function () {
        return service.PageSummaryTextCol;
    }
    this.SetPageSummaryTextCol = function (newValue) {
        service.PageSummaryTextCol = newValue;
    }
    this.GetPerPageRows = function () {
        return service.PerPageRows;
    }
    this.SetPerPageRows = function (newValue) {
        service.PerPageRows = newValue;
    }
    this.GetAutoAppendRows = function () {
        return service.AutoAppendRows;
    }
    this.SetAutoAppendRows = function (newValue) {
        service.AutoAppendRows = newValue;
    }
    this.GetAllNumberColumns = function () {
        return service.AllNumberColumns;
    }
    this.SetAllNumberColumns = function (newValue) {
        service.AllNumberColumns = newValue;
    }
    this.GetAddUpDownRows = function () {
        return service.AddUpDownRows;
    }
    this.SetAddUpDownRows = function (newValue) {
        service.AddUpDownRows = newValue;
    }
    this.GetUpRowText = function () {
        return service.UpRowText;
    }
    this.SetUpRowText = function (newValue) {
        service.UpRowText = newValue;
    }
    this.GetDownRowText = function () {
        return service.DownRowText;
    }
    this.SetDownRowText = function (newValue) {
        service.DownRowText = newValue;
    }
    this.SetUpRowText = function (newValue) {
        service.UpRowText = newValue;
    }
    this.GetUpDownTextCol = function () {
        return service.UpDownTextCol;
    }
    this.SetUpDownTextCol = function (newValue) {
        service.UpDownTextCol = newValue;
    }
    this.GetAcrossColumns = function () {
        return service.AcrossColumns;
    }
    this.SetAcrossColumns = function (newValue) {
        service.AcrossColumns = newValue;
    }
    this.GetAcrossColumnSpace = function () {
        return service.AcrossColumnSpace;
    }
    this.SetAcrossColumnSpace = function (newValue) {
        service.AcrossColumnSpace = newValue;
    }
    this.GetSummaryOnPerPage = function () {
        return service.SummaryOnPerPage;
    }
    this.SetSummaryOnPerPage = function (newValue) {
        service.SummaryOnPerPage = newValue;
    }
}
//#endregion

//#region DataWindowChild
function DataWindowChild() {
    var self = this;
    var dw = null;
    this.Instance = null;

    this.Attach = function (obj) {
        dw = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        dw = null;
        self.Instance = null;
    }
}
DataWindowBaseImpl( DataWindowChild); 
//#endregion


//#region DataStore
function DataStore() {
    var self = this;
    var dw = null;
    this.Instance = null;

    this.Attach = function (obj) {
        dw = obj;
        self.Instance = obj;
    }
   this.Detach = function () {
        dw = null;
        self.Instance = null;
    }
    this.SetExtendedWhereClause = function (extendedWhereClause) {
        dw.ExtendedWhereClause = extendedWhereClause;
    }
    this.GetExtendedWhereClause = function () {
        return dw.ExtendedWhereClause;
    }
}
DataWindowBaseImpl(DataStore); 
//endregion

//#region DataWindow
function DataWindow(win) {
    var self = this;
    var dw = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        dw = obj;
        self.Instance = obj;
    }

    this.Detach = function () {
        dw = null;
        self.Instance = null;
    }
}
DataWindowImpl(DataWindow); 

//#endregion 

//#region TreeViewItem
function TreeViewItem() {
    var self = this;
    var tvi = null;
    this.Instance = null;

    this.Attach = function (obj) {
        tvi = obj;
        self.Instance = obj;

    }
    this.Detach = function () {
        tvi = null;
        self.Instance = null;
    }
    this.GetItemHandle = function () {
        return tvi.ItemHandle;
    }
    this.GetData = function () {
        return tvi.Data;
    }
    this.SetData = function (newValue) {
        tvi.Data = newValue;
    }
    this.GetLabel = function () {
        return tvi.Label;
    }
    this.SetLabel = function (newValue) {
        tvi.Label = newValue;
    }
    this.GetBold = function () {
        return tvi.Bold;
    }
    this.SetBold = function (newValue) {
        tvi.Bold = newValue;
    }
    this.GetChildren = function () {
        return tvi.Children;
    }
    this.SetChildren = function (newValue) {
        tvi.Children = newValue;
    }
    this.GetCutHighLighted = function () {
        return tvi.CutHighLighted;
    }
    this.SetCutHighLighted = function (newValue) {
        tvi.CutHighLighted = newValue;
    }
    this.GetCutHighLighted = function () {
        return tvi.CutHighLighted;
    }
    this.SetCutHighLighted = function (newValue) {
        tvi.CutHighLighted = newValue;
    }
    this.GetDropHighLighted = function () {
        return tvi.DropHighLighted;
    }
    this.SetDropHighLighted = function (newValue) {
        tvi.DropHighLighted = newValue;
    }
    this.GetExpanded = function () {
        return tvi.Expanded;
    }
    this.SetExpanded = function (newValue) {
        tvi.Expanded = newValue;
    }
   this.GetExpandedOnce = function () {
        return tvi.ExpandedOnce;
    }
    this.SetExpandedOnce = function (newValue) {
        tvi.ExpandedOnce = newValue;
    }
    this.GetHasFocus = function () {
        return tvi.HasFocus;
    }
    this.SetHasFocus = function (newValue) {
        tvi.HasFocus = newValue;
    }
    this.GetSelected = function () {
        return tvi.Selected;
    }
    this.SetSelected = function (newValue) {
        tvi.Selected = newValue;
    }
    this.GetLevel = function () {
        return tvi.Level;
    }
    this.SetLevel = function (newValue) {
        tvi.Level = newValue;
    }
    this.GetPictureIndex = function () {
        return tvi.PictureIndex;
    }
    this.SetPictureIndex = function (newValue) {
        tvi.PictureIndex = newValue;
    }
    this.GetSelectedPictureIndex = function () {
        return tvi.SelectedPictureIndex;
    }
    this.SetSelectedPictureIndex = function (newValue) {
        tvi.SelectedPictureIndex = newValue;
    }
    this.GetStatePictureIndex = function () {
        return tvi.StatePictureIndex;
    }
    this.SetStatePictureIndex = function (newValue) {
        tvi.StatePictureIndex = newValue;
    }
    this.GetOverlayPictureIndex = function () {
        return tvi.OverlayPictureIndex;
    }
    this.SetOverlayPictureIndex = function (newValue) {
        tvi.OverlayPictureIndex = newValue;
    }
    this.GetChecked = function () {
        return tvi.Checked;
    }
    this.SetChecked = function (newValue) {
        tvi.Checked = newValue;
    }
}
//#endregion

//#region TreeView
function TreeView(win) {
    var self = this;
    var tv = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        tv = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        tv = null;
        self.Instance = null;
    }
}
TreeViewImpl(TreeView);
//#endregion

//#region TabStrip
function TabStrip(win) {
    var self = this;
    var ts = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        ts = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        ts = null;
        self.Instance = null;
    }
}
TabStripImpl(TabStrip);

//#endregion

//#region ToolStrip
function ToolStrip(win) {
    var self = this;
    var ts = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        ts = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        ts = null;
        self.Instance = null;
    }
}
ToolStripImpl(ToolStrip);

//#endregion

//#region PBWebBrowser
function PBWebBrowser(win) {
    var self = this;
    var wb = null;
    this.document = null;
    this.webBrowser = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        wb = obj;
        self.Instance = obj;
        self.webBrowser = obj.Object;
        self.document = obj.Document;
    }
    this.Detach = function () {
        self.document = null;
        self.Instance = null;
        wb = null;
    }
    this.Navigate = function (url) {
        return wb.Navigate(url);
    }
    this.ExecWB = function (cmdID, cmdexecopt, pvaIn) {
        if (self.webBrowser != null)
            return self.webBrowser.ExecWB(cmdID, cmdexecopt, pvaIn);
    }
 }
PBDragObjectImpl(PBWebBrowser);
//#endregion

//#region ContextMenu
function ContextMenu(win) {
    var self = this;
    var menu = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        menu = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        menu = null;
        self.Instance = null;
    }
    this.PopMenu = function (xPos, yPos) {
        return menu.PopMenu(xPos, yPos);
    }
    this.SetVisible = function (key, bVisible) {
        return menu.SetVisible(key, bVisible);
    }
    this.GetVisible = function (key) {
        return menu.GetVisible(key);
    }
    this.SetEnabled = function (key, bEnabled) {
        return menu.SetEnabled(key, bEnabled);
    }
    this.GetEnabled = function (key) {
        return menu.GetEnabled(key);
    }
    this.SetText = function (key, szText) {
        return menu.SetText(key, szText);
    }
    this.GetText = function (key) {
        return menu.GetText(key);
    }
    this.SetImage = function (key, szImage) {
        return menu.SetImage(key, szImage);
    }
    this.GetImage = function (key) {
        return menu.GetImage(key);
    }
    this.SetChecked = function (key, bChecked) {
        return menu.SetChecked(key, bChecked);
    }
    this.GetChecked = function (key) {
        return menu.GetChecked(key);
    }
    this.SetTag = function (key, szTag) {
       return menu.SetTag(key, szTag);
    }
    this.GetTag = function (key) {
        return menu.GetTag(key);
    }
}

//#endregion

//#region SplitContainer
function SplitContainer(win) {
    var self = this;
    var sc = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        sc = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        sc = null;
        self.Instance = null;
    }
 }
SplitContainerImpl(SplitContainer);

//#endregion


//#region Panel
function Panel(win) {
    var self = this;
    var panel = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        panel = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        panel = null;
        self.Instance = null;
    }
    this.GetTitle = function () {
        return panel.Title;
    }
    this.SetTitle = function (title) {
        panel.Title = title;
    }
    this.SetImage = function (image) {
        panel.Image = image;
    }
    this.ResumeLayout = function () {
        panel.ResumeLayout();
    }
    this.SuspendLayout = function () {
        panel.SuspendLayout();
    }
}
PBDragObjectImpl(Panel);

//#endregion

//#region ListView
function ListView(win) {
    var self = this;
    var lv = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        lv = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        lv = null;
        self.Instance = null;
    }
}
PBDragObjectImpl(ListView);

//#endregion

//#region TabControl
function TabControl(win) {
    var self = this;
    var tb = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        tb = obj;
        self.Instance = obj;
    }

    this.Detach = function () {
        tb = null;
        self.Instance = null;
    }
}
TabControlImpl(TabControl);

//#endregion

//#region SingleLineEdit
function SingleLineEdit(win) {
    var self = this;
    var sle = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        sle = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        sle = null;
        self.Instance = null;
    }
    this.GetLimit = function () {
        return sle.Limit;
    }
    this.SetLimit = function (newValue) {
        sle.Limit = newValue;
    }
    this.GetTextCase = function () {
        return sle.TextCase;
    }
    this.SetTextCase = function (newValue) {
        sle.TextCase = newValue;
    }
    this.GetDisplayOnly = function () {
        return sle.DisplayOnly;
    }
    this.SetDisplayOnly = function (newValue) {
        sle.DisplayOnly = newValue;
    }
    this.GetAutoHScroll = function () {
        return sle.AutoHScroll;
    }
    this.SetAutoHScroll = function (newValue) {
        sle.AutoHScroll = newValue;
    }
    this.GetHideSelection = function () {
        return sle.HideSelection;
    }
    this.SetHideSelection = function (newValue) {
        sle.HideSelection = newValue;
    }
    this.GetRightToLeft = function () {
        return sle.RightToLeft;
    }
    this.SetRightToLeft = function (newValue) {
        sle.RightToLeft = newValue;
    }
    this.Copy = function () {
        return sle.Copy();
    }
    this.Paste = function () {
        return sle.Paste();
    }
    this.Cut = function () {
        return sle.Cut();
    }
    this.Undo = function () {
        return sle.Undo();
    }
    this.CanUndo = function () {
        return sle.CanUndo();
    }
    this.Clear = function () {
        return sle.Clear();
    }
    this.ReplaceText = function (text) {
        return sle.ReplaceText(text);
   }
    this.SelectedLength = function () {
        return sle.SelectedLength();
    }
    this.SelectedStart = function () {
        return sle.SelectedStart();
    }
    this.SelectedText = function () {
        return sle.SelectedText();
    }
    this.SelectText = function (start, len) {
        return sle.SelectText(start, len);
    }
    this.Position = function () {
        return sle.Position();
    }
}
PBDragObjectExImpl(SingleLineEdit);
//#endregion

//#region MultiLineEdit
function MultiLineEdit(win) {
    var self = this;
    var mle = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        mle = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        mle = null;
        self.Instance = null;
    }
     this.GetLimit = function () {
        return mle.Limit;
    }
    this.SetLimit = function (newValue) {
        mle.Limit = newValue;
    }
    this.GetTextCase = function () {
        return mle.TextCase;
    }
    this.SetTextCase = function (newValue) {
        mle.TextCase = newValue;
    }
    this.GetDisplayOnly = function () {
        return mle.DisplayOnly;
    }
    this.SetDisplayOnly = function (newValue) {
        mle.DisplayOnly = newValue;
    }
    this.GetAutoHScroll = function () {
        return mle.AutoHScroll;
    }
    this.SetAutoHScroll = function (newValue) {
        mle.AutoHScroll = newValue;
    }
    this.GetHideSelection = function () {
        return mle.HideSelection;
    }
    this.SetHideSelection = function (newValue) {
        mle.HideSelection = newValue;
    }
    this.GetRightToLeft = function () {
        return mle.RightToLeft;
    }
    this.SetRightToLeft = function (newValue) {
        mle.RightToLeft = newValue;
    }
    this.Copy = function () {
        return mle.Copy();
    }
    this.Paste = function () {
        return mle.Paste();
    }
    this.Cut = function () {
        return mle.Cut();
    }
    this.Undo = function () {
        return mle.Undo();
    }
    this.CanUndo = function () {
        return mle.CanUndo();
    }
    this.Clear = function () {
        return mle.Clear();
    }
    this.ReplaceText = function (text) {
        return mle.ReplaceText(text);
    }
    this.SelectedLength = function () {
        return mle.SelectedLength();
    }
    this.SelectedStart = function () {
        return mle.SelectedStart();
    }
    this.SelectedText = function () {
        return mle.SelectedText();
    }
    this.SelectText = function (start, len) {
        return mle.SelectText(start, len);
    }
    this.Position = function () {
        return mle.Position();
    }
    this.LineCount = function () {
        return mle.LineCount();
    }
    this.LineLength = function () {
        return mle.LineLength();
    }
    this.SelectedLine = function () {
        return mle.SelectedLine();
    }
    this.TextLine = function () {
        return mle.TextLine();
    }
    this.Scroll = function (lines) {
        return mle.Scroll(lines);
    }
}
PBDragObjectExImpl(MultiLineEdit);
//#endregion

//#region EditMask
function EditMask(win) {
    var self = this;
    var em = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        em = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        em = null;
        self.Instance = null;
    }
    this.GetLimit = function () {
        return em.Limit;
    }
    this.SetLimit = function (newValue) {
        em.Limit = newValue;
    }
    this.GetTextCase = function () {
        return em.TextCase;
    }
    this.SetTextCase = function (newValue) {
        em.TextCase = newValue;
    }
    this.GetDisplayOnly = function () {
        return em.DisplayOnly;
    }
    this.SetDisplayOnly = function (newValue) {
        em.DisplayOnly = newValue;
    }
    this.GetAutoHScroll = function () {
        return em.AutoHScroll;
    }
    this.SetAutoHScroll = function (newValue) {
        em.AutoHScroll = newValue;
    }
    this.GetHideSelection = function () {
        return em.HideSelection;
    }
    this.SetHideSelection = function (newValue) {
        em.HideSelection = newValue;
    }
    this.GetRightToLeft = function () {
        return em.RightToLeft;
    }
    this.SetRightToLeft = function (newValue) {
        em.RightToLeft = newValue;
    }
    this.Copy = function () {
        return em.Copy();
    }
   this.Paste = function () {
        return em.Paste();
    }
    this.Cut = function () {
        return em.Cut();
    }
    this.Undo = function () {
        return em.Undo();
    }
    this.CanUndo = function () {
        return em.CanUndo();
    }
    this.Clear = function () {
        return em.Clear();
    }
    this.ReplaceText = function (text) {
        return em.ReplaceText(text);
    }
    this.SelectedLength = function () {
        return em.SelectedLength();
    }
    this.SelectedStart = function () {
        return em.SelectedStart();
    }
    this.SelectedText = function () {
        return em.SelectedText();
    }
    this.SelectText = function (start, len) {
        return em.SelectText(start, len);
    }
    this.Position = function () {
        return em.Position();
    }
    this.LineCount = function () {
        return em.LineCount();
    }
    this.LineLength = function () {
        return em.LineLength();
    }
    this.SelectedLine = function () {
        return em.SelectedLine();
    }
    this.TextLine = function () {
        return em.TextLine();
    }
    this.Scroll = function (lines) {
        return em.Scroll(lines);
    }
}
PBDragObjectExImpl(EditMask);
//#endregion

//#region DropDownListBox
function DropDownListBox(win) {
    var self = this;
    var ddlb = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        ddlb = obj;
        self.Instance = obj;
    }

    this.Detach = function () {
        ddlb = null;
        self.Instance = null;
    }

    this.GetLimit = function () {
        return ddlb.Limit;
    }
    this.SetLimit = function (newValue) {
        ddlb.Limit = newValue;
    }
    this.GetDisplayOnly = function () {
        return ddlb.DisplayOnly;
    }
    this.SetDisplayOnly = function (newValue) {
        ddlb.DisplayOnly = newValue;
    }
    this.GetAutoHScroll = function () {
        return ddlb.AutoHScroll;
    }
    this.SetAutoHScroll = function (newValue) {
        ddlb.AutoHScroll = newValue;
    }
    this.GetHideSelection = function () {
        return ddlb.HideSelection;
    }
    this.SetHideSelection = function (newValue) {
        ddlb.HideSelection = newValue;
    }
    this.GetRightToLeft = function () {
        return ddlb.RightToLeft;
    }
    this.SetRightToLeft = function (newValue) {
        ddlb.RightToLeft = newValue;
    }
    this.GetAllowEdit = function () {
        return ddlb.AllowEdit;
    }
    this.SetAllowEdit = function (newValue) {
        ddlb.AllowEdit = newValue;
    }
    this.GetShowList = function () {
        return ddlb.ShowList;
    }
    this.SetShowList = function (newValue) {
        ddlb.ShowList = newValue;
    }
    this.GetSorted = function () {
        return ddlb.Sorted;
    }
    this.SetSorted = function (newValue) {
        ddlb.Sorted = newValue;
    }
    this.GetHScrollBar = function () {
        return ddlb.HScrollBar;
    }
    this.SetHScrollBar = function (newValue) {
        ddlb.HScrollBar = newValue;
    }
    this.GetVScrollBar = function () {
        return ddlb.VScrollBar;
    }
    this.SetVScrollBar = function (newValue) {
        ddlb.VScrollBar = newValue;
    }
    this.Copy = function () {
        return ddlb.Copy();
    }
    this.Paste = function () {
        return ddlb.Paste();
    }
    this.Cut = function () {
        return ddlb.Cut();
    }
    this.Undo = function () {
        return ddlb.Undo();
    }
    this.CanUndo = function () {
        return ddlb.CanUndo();
    }
    this.Clear = function () {
        return ddlb.Clear();
    }
    this.ReplaceText = function (text) {
        return ddlb.ReplaceText(text);
    }
    this.SelectedLength = function () {
        return ddlb.SelectedLength();
    }
    this.SelectedStart = function () {
        return ddlb.SelectedStart();
    }
    this.SelectedText = function () {
        return ddlb.SelectedText();
    }
    this.SelectText = function (start, len) {
        return ddlb.SelectText(start, len);
    }
    this.Position = function () {
        return ddlb.Position();
    }
    this.AddItem = function (text) {
        return ddlb.AddItem(text);
    }
    this.DeleteItem = function (index) {
        return ddlb.DeleteItem(index);
    }
    this.FindItem = function (text, beginIndex) {
        return ddlb.FindItem(text, beginIndex);
    }
    this.InsertItem = function (text, insertBefore) {
        return ddlb.InsertItem(text, insertBefore);
    }
    this.SelectItem = function (index) {
        return ddlb.SelectItem(index);
    }
    this.GetItem = function (index) {
        return ddlb.GetItem(index);
    }
    this.TotalItems = function () {
        return ddlb.TotalItems();
    }
    this.Reset = function () {
        return ddlb.Reset();
    }
}
PBDragObjectExImpl(DropDownListBox);
//#endregion

//#region ListBox
function ListBox(win) {
    var self = this;
    var lb = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        lb = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        lb = null;
        self.Instance = null;
    }
    this.AddItem = function (text) {
        return lb.AddItem(text);
    }
    this.DeleteItem = function (index) {
        return lb.DeleteItem(index);
    }
    this.FindItem = function (text, beginIndex) {
        return lb.FindItem(text, beginIndex);
    }
    this.InsertItem = function (text, beginIndex) {
        return lb.InsertItem(text, beginIndex);
    }
    this.SelectItem = function (index) {
        return lb.SelectItem(index);
    }
    this.GetItem = function (index) {
        return lb.GetItem(index);
    }
    this.Reset = function () {
        return lb.Reset();
    }
    this.SelectedItem = function () {
        return lb.SelectedItem();
    }
    this.SelectedIndex = function () {
        return lb.SelectedIndex();
    }
    this.SetTop = function (index) {
        return lb.SetTop(index);
    }
    this.SetState = function (index, state) {
        return lb.SetState(index, state);
    }
    this.Top = function () {
        return lb.Top();
    }
    this.TotalItems = function () {
        return lb.TotalItems();
    }
    this.TotalSelected = function () {
        return lb.TotalSelected();
    }
    this.GetExtendedSelect = function () {
        return lb.ExtendedSelect;
    }
    this.SetExtendedSelect = function (newValue) {
        lb.ExtendedSelect = newValue;
    }
    this.GetMultiSelect = function () {
        return lb.MultiSelect;
    }
    this.SetMultiSelect = function (newValue) {
        lb.MultiSelect = newValue;
    }
    this.GetRightToLeft = function () {
        return lb.RightToLeft;
    }
    this.SetRightToLeft = function (newValue) {
        lb.RightToLeft = newValue;
    }
    this.GetDisableNoScroll = function () {
        return lb.DisableNoScroll;
    }
    this.SetDisableNoScroll = function (newValue) {
        lb.DisableNoScroll = newValue;
    }
    this.GetSorted = function () {
        return lb.Sorted;
    }
    this.SetSorted = function (newValue) {
        lb.Sorted = newValue;
    }
    this.GetHScrollBar = function () {
        return lb.HScrollBar;
    }
    this.SetHScrollBar = function (newValue) {
        lb.HScrollBarrt = newValue;
    }
    this.GetHScrollBar = function () {
        return lb.HScrollBar;
    }
    this.SetVScrollBar = function (newValue) {
        lb.VScrollBar = newValue;
    }
}
PBDragObjectExImpl(ListBox);
//#endregion

//#region CommandButton
function CommandButton(win) {
    var self = this;
     var cb = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        cb = obj;
        self.Instance = obj;
    }

    this.Detach = function () {
        cb = null;
        self.Instance = null;
    }

}
PBDragObjectExImpl(CommandButton);
//#endregion

//#region CheckBox
function CheckBox(win) {
    var self = this;
    var cbx = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        cbx = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        cbx = null;
        self.Instance = null;
    }
    this.GetChecked = function () {
        return cbx.Checked;
    }
    this.SetChecked = function (newValue) {
        cbx.Checked = newValue;
    }
    this.GetLeftText = function () {
        return cbx.LeftText;
    }
    this.SetLeftText = function (newValue) {
        cbx.LeftText = newValue;
    }
    this.GetThirdState = function () {
        return cbx.ThirdState;
    }
    this.SetThirdState = function (newValue) {
        cbx.ThirdState = newValue;
    }
    this.GetThreeState = function () {
        return cbx.ThreeState;
    }
    this.SetThreeState = function (newValue) {
        cbx.ThreeState = newValue;
    }
}
PBDragObjectExImpl(CheckBox);
//#endregion

//#region RadioButton
function RadioButton(win) {
    var self = this;
    var rb = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        rb = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        rb = null;
        self.Instance = null;
    }
    this.GetChecked = function () {
        return rb.Checked;
    }
    this.SetChecked = function (newValue) {
        rb.Checked = newValue;
    }
    this.GetLeftText = function () {
        return rb.LeftText;
    }
    this.SetLeftText = function (newValue) {
        rb.LeftText = newValue;
    }
}
PBDragObjectExImpl(RadioButton);
//#endregion

//#region ProgressBar
function ProgressBar(win) {
    var self = this;
    var pb = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        pb = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        pb = null;
        self.Instance = null;
    }
   
}
ProgressBarImpl(ProgressBar);

//#endregion

//#region TrackBar
function TrackBar(win) {
    var self = this;
    var tb = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        tb = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        tb = null;
        self.Instance = null;
    }
    this.SelectionRange = function (StartPos, EndPos) {
        return tb.SelectionRange(StartPos, EndPos);
    }
    this.GetMaxPosition = function () {
        return tb.MaxPosition;
    }
    this.SetMaxPosition = function (newValue) {
        tb.MaxPosition = newValue;
    }
    this.GetMinPosition = function () {
        return tb.MinPosition; ;
    }
    this.SetMinPosition = function (newValue) {
        tb.MinPosition = newValue;
    }
    this.GetPosition = function () {
        return tb.Position;
   }
    this.SetPosition = function (newValue) {
        tb.Position = newValue;
    }
    this.GetLineSize = function () {
        return tb.LineSize;
    }
    this.SetLineSize = function (newValue) {
        tb.LineSize = newValue;
    }
    this.GetPageSize = function () {
        return tb.PageSize;
    }
    this.SetPageSize = function (newValue) {
        tb.PageSize = newValue;
    }
    this.GetSliderSize = function () {
        return tb.SliderSize;
    }
    this.SetSliderSize = function (newValue) {
        tb.SliderSize = newValue;
    }
    this.GetTickFrequency = function () {
        return tb.TickFrequency;
    }
    this.SetTickFrequency = function (newValue) {
        tb.TickFrequency = newValue;
    }
    this.GetTickMarks = function () {
        return tb.TickMarks;
    }
    this.SetTickMarks = function (newValue) {
        tb.TickMarks = newValue;
    }
    this.GetSlider = function () {
        return tb.Slider;
    }
    this.SetSlider = function (newValue) {
        tb.Slider = newValue;
    }
}
PBDragObjectImpl(TrackBar);

//#endregion

//#region StaticText
function StaticText(win) {
    var self = this; 
    var st = null;
    this.Instance = null;
    this.ParentWindow = win;

    this.Attach = function (obj) {
        st = obj;
        self.Instance = obj; 
    }
    this.Detach = function () {
        st = null;
        self.Instance = null; 
    }
}
PBDragObjectExImpl(StaticText);
//#endregion


//#region Flash
function Flash(win) {
    var self = this;
    var flash = null;
    var flashObject = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        flash = obj;
        flashObject = obj.Object;
        self.Instance = obj;
    }
    this.Detach = function () {
        self.Instance = null;
        flashObject = null;
        flash = null;
    }
    this.LoadMovie = function (url) {
        flash.LoadMovie(url);
    }
    this.Play = function () {
        flashObject.Play();
    }
   this.Stop = function () {
        flashObject.Stop();
    }
    this.StopPlay = function () {
        flashObject.StopPlay();
    }
    this.Back = function () {
        flashObject.Back();
    }
    this.Forward = function () {
        flashObject.Forward();
    }
    this.Rewind = function () {
        flashObject.Rewind();
    }
    this.Zoom = function (factor) {
        flashObject.Zoom(factor);
    }
    this.IsPlaying = function () {
        return flashObject.IsPlaying();
    }
    this.GetMovie = function () {
        return flashObject.Movie;
    }

    //为了支持相对路径，所以调用的不是Adoble Flash控件本身的Movie属性，而是ExtPB.Net Com对象里面的LoadMovie方式
    this.SetMovie = function (newValue) {
       flash.LoadMovie(newValue);
    }
    this.GetVariable = function (name) {
        return flashObject.GetVariable(name);
    }
    this.SetVariable = function (name, value) {
        flashObject.SetVariable(name, value);
    }
    this.GetFlashVars = function () {
        return flashObject.FlashVars;
    }
    this.SetFlashVars = function (newValue) {
        flashObject.FlashVars = newValue;
    }
    this.GetMovieData = function () {
        return flashObject.MovieData;
    }
    this.SetMovieData = function (newValue) {
        flashObject.MovieData = newValue;
    }
    this.GetLoop = function () {
        return flashObject.Loop;
    }
    this.SetLoop = function (newValue) {
        flashObject.Loop = newValue;
    }
    this.GetScaleMode = function () {
        return flashObject.ScaleMode;
    }
   this.SetScaleMode = function (newValue) {
        flashObject.ScaleMode = newValue;
    }
    this.GetScale = function () {
        return flashObject.Scale;
    }
    this.SetScale = function (newValue) {
        flashObject.Scale = newValue;
    }
    this.GetAlignMode = function () {
        return flashObject.AlignMode;
    }
    this.SetAlignMode = function (newValue) {
        flashObject.AlignMode = newValue;
    }
    this.GetQuality = function () {
        return flashObject.Quality;
    }
   this.SetQuality = function (newValue) {
        flashObject.Quality = newValue;
    }
    this.GeWMode = function () {
        return flashObject.WMode;
    }
    this.SetWMode = function (newValue) {
        flashObject.WMode = newValue;
    }
    this.GeSAlign = function () {
        return flashObject.SAlign;
    }
    this.SetSAlign = function (newValue) {
        flashObject.SAlign = newValue;
    }
    this.CallFunction = function (request) {
        return flashObject.CallFunction(request);
    }
    this.SetReturnValue = function (returnValue) {
        return flashObject.SetReturnValue(returnValue);
    }
}
PBDragObjectImpl(Flash);
//#endregion


//#region OleControl
function OleControl(win) {
    var self = this;
     var ole = null;
    this.Instance = null;
    this.ParentWindow = win; 

    this.Attach = function (obj) {
        ole = obj;
        self.Instance = obj;
    }

    this.Detach = function () {
        ole = null;
        self.Instance = null;
    }
    this.GetObject = function () {
        if (ole != null)
            return ole.Object;
        return null; 
    }
}
PBDragObjectImpl(OleControl);
//#endregion

//#region Picture
function Picture(win) {
    var self = this;
    var pic = null;
    this.Instance = null;
    this.ParentWindow = win;

    this.Attach = function (obj) {
        pic = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        pic = null;
        self.Instance = null;
    }
    this.SetPicture = function (url) {
        return pic.SetPicture(url);
    }
}
PBDragObjectImpl(Picture);
//#endregion

//#region DatePicker
function DatePicker(win) {
    var self = this;
    var dp = null;
    this.Instance = null;
    this.ParentWindow = win;

    this.Attach = function (obj) {
        dp = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        dp = null;
        self.Instance = null;
    }
    this.GetValue = function () {
        return dp.GetValue();
    }
    this.SetValue = function (newValue) {
       return  dp.SetValue(newValue);
   }
   this.GetToday = function () {
       return dp.GetToday();
   }
   this.SetToday = function (newValue) {
       return dp.SetToday(newValue);
   }
}
PBDragObjectImpl(DatePicker);
//#endregion

//#region NonVisualObject
function MonthCalendar(win) {
    var self = this;
    var mc = null;
    this.Instance = null;
    this.ParentWindow = win;

    this.Attach = function (obj) {
        mc = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        mc = null;
        self.Instance = null;
    }
}
PBObjectInvokeImpl(MonthCalendar);
//#endregion

//#region UserObject
function UserObject(win) {
    var self = this;
    var uo = null;
    this.Instance = null;
    this.ParentWindow = win;

    this.Attach = function (obj) {
        uo = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        uo = null;
        self.Instance = null;
      }
}
PBDragObjectImpl(UserObject);
//#endregion

//#region NonVisualObject
function NonVisualObject(win) {
    var self = this;
    var nvo = null;
    this.Instance = null;
    this.ParentWindow = win;

    this.Attach = function (obj) {
        nvo = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        nvo = null;
        self.Instance = null;
    }
}
PBObjectInvokeImpl(NonVisualObject);
//#endregion

//#region Dw2Xls
function Dw2Xls(win) {
    var self = this;
    var dw2xls = null;
    this.Instance = null;
    this.ParentWindow = win;

    this.Attach = function (obj) {
        dw2xls = obj;
        self.Instance = obj;
    }
    this.Detach = function () {
        dw2xls = null;
        self.Instance = null;
    }
    this.AddSheet = function (dw, sheetName) {
        if (typeof (dw.Instance) == "undefined")
            return dw2xls.AddSheet(dw, sheetName);
        else if (dw.Instance != null)
            return dw2xls.AddSheet(dw.Instance, sheetName)
        else
            return -1;
    }
    this.Save = function (fileName) {
        return dw2xls.Save(fileName);
    }
    this.Reset = function () {
        return dw2xls.Reset();
    }
    this.GetShowZeroValues = function () {
        return dw2xls.ShowZeroValues;
    }
    this.SetShowZeroValues = function (newValue) {
        dw2xls.ShowZeroValues = newValue;
    }
    this.GetWriteBKColor = function () {
        return dw2xls.WriteBKColor;
    }
    this.SetWriteBKColor = function (newValue) {
        dw2xls.WriteBKColor = newValue;
    }
    this.GetFreezeTitles = function () {
        return dw2xls.FreezeTitles;
    }
    this.SetFreezeTitles = function (newValue) {
        dw2xls.FreezeTitles = newValue;
    }
    this.GetShowGridLines = function () {
        return dw2xls.ShowGridLines;
    }
    this.SetShowGridLines = function (newValue) {
        dw2xls.ShowGridLines = newValue;
    }
    this.GetProcessSparse = function () {
        return dw2xls.ProcessSparse;
    }
    this.SetProcessSparse = function (newValue) {
        dw2xls.ProcessSparse = newValue;
    }
    this.GetOpenExcelFile = function () {
        return dw2xls.OpenExcelFile;
    }
    this.SetOpenExcelFile = function (newValue) {
        dw2xls.OpenExcelFile = newValue;
    }
    this.GetDefFontName = function () {
        return dw2xls.DefFontName;
    }
    this.SetDefFontName = function (newValue) {
        dw2xls.DefFontName = newValue;
    }
    this.GetDefFontSize = function () {
        return dw2xls.DefFontSize;
    }
    this.SetDefFontSize = function (newValue) {
        dw2xls.DefFontSize = newValue;
    }
}
//#endregion