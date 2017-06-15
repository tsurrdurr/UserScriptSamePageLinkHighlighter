// ==UserScript==
// @name           Anchor Title alternative highlight color
// @namespace      
// @version	0.1
// @description   something
// @include        *
// ==/UserScript==

(function(){
	var anchors = document.getElementsByTagName('a');
	for (var i = 0, k = anchors.length; i < k ; i++) {
		if(anchors[i].href.startsWith(anchors[i].baseURI + '#')) {
			applyStyle(anchors[i]);
		}
	}

	function applyStyle(anchor){
		anchor.style.color ='#BBBBBB';
		//anchor.style.backgroundColor ='#BBBBBB';
	}
})();