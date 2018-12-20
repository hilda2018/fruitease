//用于处理产品类别的树控件
//以下对象在写js时，因为是直接操作COM对象指针，所以都没有智能提示
//需要对调用的类对象的函数和参数列表比较熟悉

function TV_Category(win) {
    var self = this;
    var tv = null;
    var requestor = win; //PBWindow 的JavaScript对象类实例
    var ds = null;
    var dw = null;
    var tvItem = null; 
    this.Instance = null;

    //必须实现的接口,用于跟树控件的Com对象邦定
    this.Attach = function (obj) {
        tv = obj;
        self.Instance = obj;

        //是否有设置关联的DataStore?
        if (tv.StringData1 != "")
            ds = requestor.Control(tv.StringData1);

        //是否有关联的DataWindow控件？
        if (tv.StringData2 != "")
            dw = requestor.Control(tv.StringData2);

        //实例化tvItem对象
        tvItem = tv.CreateTreeViewItem();

        //加入树控件的事件处理
        tv.AttachEvent("ItemPopulate", ItemPopulate);
       

        //初始化树控件
        tvItem.Data = "0";
        tvItem.Label = "产品类别";
        tvItem.PictureIndex = 1;
        tvItem.SelectedPictureIndex = 1;
        tvItem.Children = true;
        var itemHandle = tv.InsertItemLast(0, tvItem);

        //调用树控件的ExpandItem函数，展开指定节点，由于节点是第一次展开，所以会触发ItemPopulate事件
        tv.ExpandItem(itemHandle);

        //选择第一个分类，与产品列表的分类对应
        if (ds != null && ds.RowCount() > 0)
            tv.SelectItem(ds.GetItemNumber(1, "itemHandle"));

        //在生成树之后，再邦定SelectionChanged事件，可以避免在第一次加载时
        //双从服务器又检索数据一次
        tv.AttachEvent("SelectionChanged", SelectionChanged);
    }

    //必须实现的接口，用于跟树控件COM对象解除邦定关系
    this.Detach = function () {
        tv = null;
        ds = null;
        dw = null;
        tvItem = null;
        self.Instance = null;
    }

    //由于不需要向外公开事件处理程序，所以事件的响应函数，定义为私有的，而不是公共方法
    var ItemPopulate = function (itemHandle) {
        tv.GetItem(itemHandle, tvItem);

        //在这里，可以根据当前节点的内容，生成下一级节点
        //由于demo只有一级分类，所以直接根据DataStore的内容，生成树节点
        if (ds == null)
            return;

        for (var row = 1; row <= ds.RowCount(); row++) {
            tvItem.Data = ds.GetItemNumber(row, "categoryid");
            tvItem.Label = ds.GetItemString(row, "categoryname");
            tvItem.PictureIndex = 2;
            tvItem.SelectedPictureIndex = 2;
            tvItem.Children = false; //没有子节点了

            var handle = tv.InsertItemLast(itemHandle, tvItem);

            //把节点的Handle缓存到DataStore
            ds.SetItem(row, "itemHandle", handle);
         }
    }
    var SelectionChanged = function (oldHandle, newHandle) {
        if (dw == null)
            return;

        tv.GetItem(newHandle, tvItem);
        if (tvItem.Children)
            return;

        //重检索关联的数据窗口对象的数据
        dw.Retrieve(parseInt(tvItem.Data));
    }
}