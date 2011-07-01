package org.zkoss.addon.anchorlayout;

import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.UiException;
import org.zkoss.zul.impl.XulElement;

/**
 * An anchorlayout lays out a container which can resize 
 * it's children base on its width and height<br>
 * <p>Available in ZK addon.
 * 
 * <p>Default {@link #getZclass}: z-anchorlayout.
 * 
 * @author peterkuo
 * @since 5.0.7
 */
public class Anchorlayout extends XulElement{

	public void beforeChildAdded(Component child, Component refChild) {
		if (!(child instanceof Anchorchildren))
			throw new UiException("Unsupported child for Anchorlayout: "
					+ child);
		super.beforeChildAdded(child, refChild);
	}
	
	public String getZclass() {
		return _zclass == null ? "z-anchorlayout" : _zclass;
	}
}
