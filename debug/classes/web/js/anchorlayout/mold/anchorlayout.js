function (out) {
	out.push('<div', this.domAttrs_(),'>',"this is anchorlayout");
	
	for (var w = this.firstChild; w; w = w.nextSibling)
		w.redraw(out);
	
	out.push('</div>');
}