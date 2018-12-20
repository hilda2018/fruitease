///<reference path="/ExtPB.Net/ExtPB_Net-1.0.js" />

//以下是通过 JS的prototype ，扩展ExtPB.Net的JS类对象的功能
DataWindow.prototype.ShowError = function (Error, Row, Column) {
        this.ScrollToRow(Row);
        this.SetColumn(Column);
         this.ParentWindow.MessageBox("提示", Error, ICON.StopSign);
        this.SetFocus();
    }

                          
DataWindow.prototype.InsertRowEx = function (Row, Column, SetFocus) {
         if (Row == null || Row == "undefined")
            Row = 0;

            Row = this.InsertRow(Row);
            this.ScrollToRow(Row);
            if (Column != null && Column != "" && Column != "undefined") {
                this.SetColumn(Column);
            }
            if (SetFocus)
                this.SetFocus();
            return Row;
        }


DataWindow.prototype.CheckData = function (chkCol, uniqueCols) {
    if (this.RowCount() <= 0)
        return false;

    if (!this.AcceptText())
        return false;

    if ((this.ModifiedCount() + this.DeletedCount()) <= 0) {
        this.ParentWindow.MessageBox("提示", "没有数据需要保存!");
        this.SetFocus();
        return false;
    }

    var flag1 = false;
    var flag2 = false;

    if (chkCol == null || chkCol == "undefined" || chkCol == "*") {
        flag1 = true;
        chkCol = new Array();
    }

    if (uniqueCols == null || uniqueCols == "undefined" || uniqueCols == "*") {
        flag2 = true;
        uniqueCols = new Array();
    }

    if (flag1 || flag2) {
        var colCount = parseInt(this.Describe("datawindow.column.count"));
        var tag = "";
        var name = "";

        for (index = 1; index <= colCount; index++) {
            name = this.Describe("#" + index + ".Name");
            tag = this.Describe(name + ".tag");

            if (flag1 && (tag == "*" || tag == "**")) {
                chkCol[chkCol.length] = name;
            }
            if (flag2 && tag == "**") {
                uniqueCols[uniqueCols.length] = name;
            }
        }
    }
    //检查数据
    var status = 0;
    var colType = "";
    var caption = "";
    var findRow = 0;
    var findStr = "";
    var uniqueInfo = "";

    //生成重复记录的提示信息
    for (index = 0; index < uniqueCols.length; index++) {
        caption = this.Describe(uniqueCols[index] + "_t.Text")
        if (caption == "" || caption == "?" || caption == "!")
            caption = name;

        if (uniqueInfo == "")
            uniqueInfo = caption;
        else
            uniqueInfo += " + " + caption;
    }


    for (Row = 1; Row <= this.RowCount(); Row++) {

        //如果行记录没有被修改,则不检查
        status = this.GetItemStatus(Row, 0, DWBUFFER.Primary);
        if (status == DWITEMSTATUS.NewModified || status == DWITEMSTATUS.DataModified) {
            for (index = 0; index < chkCol.length; index++) {
                colType = this.Describe(chkCol[index] + ".colType");
                colType = colType.substring(0, 4);
                caption = this.Describe(chkCol[index] + "_t.Text")

                if (caption == "" || caption == "?" || caption == "!")
                    caption = name;

                if (colType == "char") {
                    if (this.GetItemString(Row, chkCol[index]) == "") {
                        this.ShowError(caption + "未输入数据!", Row, chkCol[index]);
                        return false;
                    }
                }
                else if (colType == "date" || colType == "time") {
                    value = new Date(this.GetItemDate(Row, chkCol[index]));  //转换为日期对象
                    if (value != null && value.getFullYear() == 1900) {
                        this.ShowError(caption + "未输入数据!", Row, chkCol[index]);
                        return false;
                    }
                }
                else {
                    if (this.GetItemNumber(Row, chkCol[index]) == 0) {
                        this.ShowError(caption + "未输入数据!", Row, chkCol[index]);
                        return false;
                        return false;
                    }
                }
            }

        }

        if (Row < this.RowCount() && uniqueCols.length > 0) {
            //检查重复行
            findStr = "1=1";
            for (index = 0; index < uniqueCols.length; index++) {
                colType = this.Describe(uniqueCols[index] + ".colType");
                colType = colType.substring(0, 4);

                if (colType == "char") {
                    findStr += " AND (" + uniqueCols[index] + "='" + this.GetItemString(Row, uniqueCols[index]) + "') ";
                }

                else if (colType == "date") {
                    findStr += " AND (Date('" + uniqueCols[index] + "='" + this.GetItemDate(Row, uniqueCols[index]).toDateString() + "'))  ";
                }

                else if (colType == "time") {
                    findStr += " AND (Time('" + uniqueCols[index] + "='" + this.GetItemDate(Row, uniqueCols[index]).toTimeString() + "')) ";
                }

                else {
                    findStr += " AND (" + uniqueCols[index] + "=" + this.GetItemNumber(Row, uniqueCols[index]) + ") ";
                }
            }

            findRow = this.Find(findStr, Row + 1, this.RowCount());
            if (findRow > 0) {
                //dw.ShowError("第<"+Row+">行与第<"+findRow+">行的关键字段重复,请检查!",Row,uniqueCols[0] );
                this.ShowError("第<" + Row + ">行与第<" + findRow + ">行的[ " + uniqueInfo + " ]重复,请检查!", Row, uniqueCols[0]);

                return false;
            }
        }

    }

    return true;
}

//把当前数据窗口找定行记录的数据,更新目标数据窗口指定行记录的数据,按列的dbname进行匹配查找
DataWindow.prototype.CopyDataEx = function (Row, Dest, destRow) {
    if (Row < 1 || Row > this.RowCount())
        return;

    if (Dest == null || Dest == "undefined")
        return;

    if (destRow == 0) {
        destRow =Dest.InsertRow(0);
        Dest.ScrollToRow(destRow);
    }

    if (destRow < 1 || destRow > Dest.RowCount())
        return;

    var SourceCols = parseInt(this.Describe("datawindow.column.count"));
    var DestCols = parseInt(Dest.Describe("datawindow.column.count"));
    var dbName = "";
    var colType = "";

    Dest.SetRedraw(false);
    for (i = 1; i <= SourceCols; i++) {
        dbName = this.Describe("#" + i + ".dbName").toLowerCase();

        for (j = 1; j <= DestCols; j++) {
            if (Dest.Describe("#" + j + ".dbName").toLowerCase() != dbName)
                continue;


            colType = this.Describe("#" + i + ".colType");
            colType = colType.substring(0, 4);
            if (colType == "char") {
                Dest.SetItem(destRow, j, this.GetItemString(Row, i));
            }

            else if (colType == "date" || colType == "time") {
                Value = new Date(this.GetItemDate(Row, i));   //把日期转换为Date对象
                if (Value.getFullYear() != 1900) {
                        Dest.SetItem(destRow, j, Value.getVarDate());
                 }
            }

            else {
                Dest.SetItem(destRow, j, this.GetItemNumber(Row, i));
            }
            break;
        }
    }
    Dest.SetRedraw(true);
}

DataWindow.prototype.TestA = function () {
    this.PrintPreview();
}

DataWindow.prototype.TestB = function () {
   this.ScrollToRow( this.InsertRow(0));
}

function WebRequestor() {
    var self = this;
    this.ServiceUrl = "";
    this.FunctionID = "";
    var request = null;
  
    var Initilal = function () {
        if (request == null) {
            if (window.XMLHttpRequest)
                request = new window.XMLHttpRequest();
            else
             {
		request = new ActiveXObject("MSXML2.XMLHTTP.6.0");
		if(request==null)
		   request = new ActiveXObject("MSXML2.XMLHTTP.4.0");

		if(request==null)
		   request = new ActiveXObject("MSXML2.XMLHTTP.3.0");

		if(request==null)
		   request = new ActiveXObject("MSXML2.XMLHTTP");

	      }
        }

    }

    var ChecRequest = function () {
        if (self.ServiceUrl == null || self.ServiceUrl == "" )
            return false;
          
        //实例化XmlHttpRequestor
        if (request == null) {
            Initilal();
            if (request == null)
                return false;
        }

        request.open("POST", self.ServiceUrl, false);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; ");
        return true;
    }

    this.SetWebServiceUrl = function (url) {
        self.ServiceUrl = url;
    }

    this.SetFunctionID = function (funID) {
        self.FunctionID = funID;
    }

    this.StatusCode = function () {
        if (request == null)
            return -1;
        return request.status;
    }

    this.ResponseText = function () {
        if (request == null)
            return "";
        return request.responseText;
    }

    this.Invoke = function (methodName, postData) {
        if (!ChecRequest())
            return;

        //必须传入在调用的服务方法名称
        if (arguments.lenght == 0 || methodName == null || methodName == "")
            return;

        var data = "";

        if (self.FunctionID!=null && self.FunctionID.length > 0)
            data = "FunID=" + self.FunctionID + "&Method=" + methodName
        else
            data = "Method=" + methodName

        if (arguments.lenght == 1 || postData == null || postData == "") {
            request.send(data);
        }
        else {
            request.send(data + "&" + postData);
        }
    }

    this.Release = function () {
        request = null; 
    }
}