/**
 * @author whkuo
 */
anchorlayout.Anchorlayout = zk.$extends(zul.Widget, {
	getZclass: function () {
		var zcls = this._zclass;
		return zcls != null ? zcls: "z-anchorlayout";
	},
	
	_isLegalChild: function (n) {
		return n.id && n.tagName == "DIV"; 
	},
	
	render: _zkf = function () {
		var cmp;
		if (!(cmp = this.$n()) || !zk(cmp).isRealVisible()) 
			return;
		var cave, total, cns;	
		if ((cave = this.$n("cave")) && zk.ie6_)
			this.$n("cave").style.width = "0px";
			
		total = zk(cmp).revisedWidth(cmp.offsetWidth);
		
		if (!(cns = jq(cave).find(">div:first")[0])) return;
		
		cave.style.width = total + "px";
		
		if (cmp.style.height) {
			if (zk.ie6_)
				cave.style.height = "0px";
			cave.style.height = zk(cmp).revisedHeight(cmp.offsetHeight, true) + "px";
		}
		
		do {
			var oriWidth = zk.Widget.$(cns.id)._oriWidth;
			if (this._isLegalChild(cns) && oriWidth.endsWith("px") > 0)
				total -= (zk.parseInt(oriWidth) + zk(cns).padBorderWidth());
		} while (cns = jq(cns).next("div:first")[0])
		
		total = Math.max(0, total);
		
		cns = jq(cave).find(">div:first")[0];
		do {
			var oriWidth = zk.Widget.$(cns.id)._oriWidth;
			if (this._isLegalChild(cns) && oriWidth.indexOf("%") > 0) {
				cns.style.width = (total ? Math.max(0, Math.floor(zk.parseInt(oriWidth) / 100 * total) - zk(cns).padBorderWidth()) : 0) + "px";
			}
		} while (cns = jq(cns).next("div:first")[0])
		
	},	
	onSize: _zkf,
	onShow: _zkf,
	setWidth: function () {
		this.$supers('setWidth', arguments);
		var n = this.$n();
		if (n) {
			zWatch.fireDown('onSize',this);
		}
	},
	setHeight: function () {
		this.$supers('setHeight', arguments);
		var n = this.$n();
		if (n) {
			zWatch.fireDown('onSize',this);
		}
	},	
	setStyle: function () {
		this.$supers('setStyle', arguments);
		var n = this.$n();
		if (n) {
			zWatch.fireDown('onSize',this);
		}
	},	
	onChildAdded_: function (child) {
		this.$supers('onChildAdded_', arguments);
		this.listen({
			onSize: child
		});	
	},
	onChildRemoved_: function (child) {
		this.$supers('onChildRemoved_', arguments);
		this.unlisten({
			onSize: child
		});	
	},	
	bind_: function () {//after compose
		this.$supers(anchorlayout.Anchorlayout, 'bind_', arguments); 
		zWatch.listen({onSize: this, onShow: this});
	},
	unbind_: function () {
		zWatch.unlisten({onSize: this, onShow: this});
		this.$supers(anchorlayout.Anchorlayout, 'unbind_', arguments);
	}
});