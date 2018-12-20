//调用demo里面n_cst_dllTest所对应的js类
function DllTest(win) {
    var self = this;
    var nvo = null; 
    this.Instance = null;
    this.ParentWindow = win;

    //obj是一个com对象实例,把obj保存到js类的私有变量nvo
    //然后通过nvo就可以调用不可视对象Invoke方式，从而调用相应的PB对象的实例方法
   this.Attach = function (obj) {
        nvo = obj;
        self.Instance = obj;
    }

    //对象释放
    this.Detach = function () {
        nvo = null;
        self.Instance = null;
    }

    //以下是调用n_cst_dllTest里面的具体函数
    this.GetSystemDir = function () {
       return nvo.Invoke("of_getsystemdirectory", "S");
   }

   this.GetWindowDir = function () {
       return nvo.Invoke("of_getwindowsdirectory", "S");
   }

   this.GetComputeName = function () {
       return nvo.Invoke("of_getcomputername", "S");
   }

   this.RunCalc = function () {
        //函数没有返回值,不需要return
      nvo.Invoke("of_runcalc", "Q");
  }
  this.RunNotePad = function () {
      //函数没有返回值,不需要return
      nvo.Invoke("of_runnotepad", "Q");
  }

  //直接调用声明的外部dll函数
  this.Add = function (num1, num2) {
      return  nvo.Invoke("f_add", "LII", num1, num2);
   }

 //直接调用声明的外部dll函数
 this.Max = function (num1, num2) {
     return nvo.Invoke("f_max", "LII", num1, num2);
 }
}

//调用n_cst_Demo里面的功能
function NvoTest(win) {
    var self = this;
    var nvo = null;
    this.Instance = null;
    this.ParentWindow = win;

    //obj是一个com对象实例,把obj保存到js类的私有变量nvo
    //然后通过nvo就可以调用不可视对象Invoke方式，从而调用相应的PB对象的实例方法
    this.Attach = function (obj) {
        nvo = obj;
        self.Instance = obj;
    }

    //对象释放
    this.Detach = function () {
        nvo = null;
        self.Instance = null;
    }

    //参数dt传入的是一个Date类型的数据
    this.FormatDate = function (dt, fmt) {
        return nvo.Invoke("of_formatdate", "SWS", dt.getVarDate(), fmt);
    }

    //传入窗口名称，打开一个窗口
    this.OpenWindow = function (winName, dw) {

        //如果只传入一个参数，则表示只有窗口名称，没有需要向窗口传入的参数
        if (arguments.length == 1) {

            nvo.Invoke("of_openwin", "QS", winName);
        }
        else {
             //注册，传入的是数据窗口控件的COM指针，而不是js实例对象
            nvo.Invoke("of_openwin", "QSCu_dw_base.", winName, dw.Instance);
        }
    }
    this.InsertRow = function (row) {
        return nvo.Invoke("of_insertrow", "LL", row);
    }
    this.DeleteRow = function (row) {
        return nvo.Invoke("of_deleterow", "LL", row);
    }
    this.SetButtonText = function (name, text) {
        nvo.Invoke("of_setbuttontext", "QSS", name, text); 
    }
}

//调用n_cst_httpClient_Test里面的功能
function HttpClientTest(win) {
    var self = this;
    var nvo = null;
    this.Instance = null;
    this.ParentWindow = win;

    //obj是一个com对象实例,把obj保存到js类的私有变量nvo
    //然后通过nvo就可以调用不可视对象Invoke方式，从而调用相应的PB对象的实例方法
    this.Attach = function (obj) {
        nvo = obj;
        self.Instance = obj;
    }

    //对象释放
    this.Detach = function () {
        nvo = null;
        self.Instance = null;
    }

    this.PostData = function (url, data, type) {
        return nvo.Invoke("of_postdata", "SSSS", url, data, type);
    }
    this.GetData = function (url) {
        return nvo.Invoke("of_getdata", "SS", url);
    }
}