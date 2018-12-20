///<reference path="/Scripts/ExtPB_Net.js" />
///<reference path="/Scripts/MyExtPB.js" />
///<reference path="/Beta3/ExtPB_Demo.js" />

function W_ContextMenu() {

	 var self=this;
	 var requestor= new PBWindow();
	 var dw_1= new DataWindow( requestor );
	 var tb_1= new ToolStrip( requestor );
	 var cbx_1= new CheckBox( requestor );
	 var ContextMenuStrip1= new ContextMenu( requestor );

	 if(typeof(this.bind)=="function") var baseBind=this.bind;
	 this.bind=function(win){
	 if(typeof( baseBind )=="function") baseBind(win);

		 if(requestor == null ) requestor= new PBWindow();
		 requestor.Attach(win);
		 if(dw_1 == null ) dw_1= new DataWindow( requestor );
		 dw_1.Attach( win.Control( "dw_1") ); 
		 if(tb_1 == null ) tb_1= new ToolStrip( requestor );
		 tb_1.Attach( win.Control( "tb_1") ); 
		 if(cbx_1 == null ) cbx_1= new CheckBox( requestor );
		 cbx_1.Attach( win.Control( "cbx_1") ); 
		 if(ContextMenuStrip1 == null ) ContextMenuStrip1= new ContextMenu( requestor );
		 ContextMenuStrip1.Attach( win.Control( "ContextMenuStrip1") ); 

		 if(typeof(self.dw_1_RButtonDown)=="function") 
			 win.AttachEvent("dw_1","RButtonDown",self.dw_1_RButtonDown); 

		 if(typeof(self.SetShowContextMenu)=="function") 
			 win.AttachEvent("cbx_1","Clicked",self.SetShowContextMenu); 

		 if(typeof(self.UpdateContextMenu)=="function") 
			 win.AttachEvent("btn_1","Clicked",self.UpdateContextMenu); 

	 }

	 if(typeof(this.unbind)=="function") var baseUnBind=this.unbind; 
	 this.unbind=function() {
	 if(typeof(this.Release)=="function") this.Release(); 
	 if(typeof(baseUnBind)=="function") baseUnBind(); 

		 dw_1.Detach(); dw_1=null; 
		 tb_1.Detach(); tb_1=null; 
		 cbx_1.Detach(); cbx_1=null; 
		 ContextMenuStrip1.Detach(); ContextMenuStrip1=null; 
		 requestor.Detach(); requestor=null; 

		 setTimeout(CollectGarbage, 100); 
	 }

	 //以上代码由设计器自动生成,请不要手工修改
	 //ExtPB.Net JavaScript End  设计器查找标志,请不要删除或修改

    this.SetShowContextMenu = function () {
        dw_1.Instance.ShowContextMenu= cbx_1.GetChecked();
    }

    this.UpdateContextMenu = function () {

        //直接用ContextMenu1操作
        ContextMenuStrip1.SetEnabled("m_AddRow", false);
        ContextMenuStrip1.SetEnabled("m_DeleteRow", false);

        //用数据窗口的ContextMenu属性进行操作
        dw_1.Instance.ContextMenu.SetEnabled("m_Filter", false);

    }

    //如果数据窗口有关联ContextMenu,则点击右键时，会触发RButtonDown事件
    //这个事件的第一个参数就是关联的ContextMenu对象，可以在代码中设置这个Context的一个状态
    //如果事件返回1,则取消显示这个ContextMenu
    this.dw_1_RButtonDown = function (contextMenu) {
        contextMenu.SetEnabled("m_Export", false);
        //return 1; 
    }
}