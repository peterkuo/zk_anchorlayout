package org.zkoss.addon.anchorlayout;

import java.io.IOException;

import org.zkoss.lang.Objects;
import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.UiException;
import org.zkoss.zk.ui.sys.ContentRenderer;
import org.zkoss.zul.impl.XulElement;

/**
 * The children of Anchorlayout. <br> 
 * Can accept any ZK component as child.
 * <p>Available in ZK addon
 * 
 * <p>Default {@link #getZclass}: z-anchorchildren.
 * @author peterkuo
 * @since 5.0.7
 */
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
	
	/**
	 * The width, height relative to parent, anchorlayout.
	 * It can use % or number.
	 * Accept one argument, or two argument separated by space.
	 * The first argument is for width, and second for height.
	 * For example, "50% 50%" means the anchorchildren width and height is 50% of anchorlayout.
	 * "-30 20%" means the width is 20px less than parent, and height is 20% of parent.
	 * "50%" means the width is 50% of parent, and the height is no assumed. 
	 * @param anchor
	 */
	public void setAnchor(String anchor){
		if(!Objects.equals(_anchor,anchor)){
			_anchor = anchor;
			smartUpdate("anchor",_anchor);
		}
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
