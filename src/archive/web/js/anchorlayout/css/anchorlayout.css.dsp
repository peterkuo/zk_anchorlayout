<%@ taglib uri="http://www.zkoss.org/dsp/web/core" prefix="c" %>
.z-anchorlayout,
.z-anchorlayout-inner,
.z-anchorchildren,
.z-anchorchildren-body,
.z-anchorchildren-cnt{
	overflow: hidden;
}

.z-anchorchildren{
	border:1px solid red;
}

.z-anchorlayout{
	border:1px solid blue;
}

.z-anchorchildren {
    float: left; padding: 0; margin: 0;
}

<c:if test="${c:isExplorer()}">
.z-anchorlayout,
.z-anchorchildren,
.z-anchorchildren-body {
    zoom: 1;
}
</c:if>