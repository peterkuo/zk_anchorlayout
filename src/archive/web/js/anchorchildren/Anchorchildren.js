anchorchildren.Anchorchildren = zk.$extends(zul.Widget, {
	_anchor: null,
	$define: {
		anchor: function () {
			this.onSize();
		}
	},
	getZclass: function () {
		var zcls = this._zclass;
		return zcls != null ? zcls: "z-anchorchildren";
	},
	bind_: function () {
		this.$supers('bind_', arguments);
		zWatch.listen({onSize: this, onShow: this});
		this._oriWidth = this.$n().style.width;
	},
	unbind_: function () {
		zWatch.unlisten({onSize: this, onShow: this});
		this.$supers('unbind_', arguments);
	},	
	onSize: _zkf = function () {
		var n;
		if (!(n = this.$n()) || !zk(n).isRealVisible()) 
			return;
		this._clearSize();
		var cave;
		if ((cave = this.$n("cave")) && zk.ie6_)
			cave.style.width = "0px";
		cave.style.width = zk(n).revisedWidth(n.offsetWidth) + "px";
		
		if (n.style.height) {
			if(zk.ie6_)
				cave.style.height = "0px";
			cave.style.height = zk(n).revisedHeight(n.offsetHeight, true) + "px";
		}
		
		//calculate the height and width in pixel based on _anchor
		if(!this._anchor) return;
		var parentn = this.parent.$n();
		var parentwidth = jq(parentn).width();
		var parentheight = jq(parentn).height();
		var arr = this._anchor.split(" ",2);
		var anchorWidth=arr[0], anchorHeight=arr[1];
		
		if(anchorWidth.indexOf("%") > 0){
			this.$n().style.width = Math.floor(parentwidth * zk.parseInt(anchorWidth) / 100) + "px";
		}else{
			this.$n().style.width = parentwidth + zk.parseInt(anchorWidth) + "px";
		}
		this.$n("cave").style.width = this.$n().style.width;
		
		if(anchorHeight){
			if(anchorHeight.indexOf("%") > 0){
				this.$n().style.height = Math.floor(parentheight * zk.parseInt(anchorHeight) / 100) + "px";
			}else{
				this.$n().style.height = parentheight + zk.parseInt(anchorHeight) + "px";
			}
			this.$n("cave").style.height = this.$n().style.height;		
		}		
	},
	onShow: _zkf,
	_clearSize: function () {
		var cave;
		if (cave = this.$n("cave")) {
			cave.style.width = "";
			cave.style.height = "";
		}
	},
	setStyle: function () {
		this.$supers('setStyle', arguments);
		var n = this.$n();
		if (n) {
			this._oriWidth = n.style.width;
		}
	},
	setWidth: function () {
		this.$supers('setWidth', arguments);
		var n = this.$n();
		if (n) {
			this._oriWidth = n.style.width;
		}
	}
});