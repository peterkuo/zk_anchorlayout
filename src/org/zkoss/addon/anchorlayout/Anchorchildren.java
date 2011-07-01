package org.zkoss.addon.anchorlayout;

import java.io.IOException;

import org.zkoss.lang.Objects;
import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.UiException;
import org.zkoss.zk.ui.sys.ContentRenderer;
import org.zkoss.zul.impl.XulElement;

public class Anchorchildren extends XulElement{

	/** accept number, percent, space separated*/
	String _anchor; 
	
	public Anchorchildren(){}
	
	public Anchorchildren(String anchor){
		super();
		this._anchor = anchor;
	}
	
	public String getAnchor(){
		return _anchor;
	}
	
	public void setAnchor(String anchor){
		if(!Objects.equals(_anchor,anchor)){
			_anchor = anchor;
			smartUpdate("anchor",_anchor);
		}
	}

	private void test(){
		getHeight();
	}

	public String getZclass() {
		return _zclass == null ? "z-anchorchildren" : _zclass;
	}

	public void beforeParentChanged(Component parent) {
		if (parent != null && !(parent instanceof Anchorlayout))
			throw new UiException("Wrong parent: " + parent);
		super.beforeParentChanged(parent);
	}
	
	protected void renderProperties(ContentRenderer renderer) throws IOException{
		super.renderProperties(renderer);
				
		if(_anchor != null)
			render(renderer,"anchor", _anchor);
		
	}
}
