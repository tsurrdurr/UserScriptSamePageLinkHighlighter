// ==UserScript==
// @name           Anchor Title alternative highlight color
// @namespace      https://github.com/tsurrdurr/UserScriptSamePageLinkHighlighter
// @version	0.1
// @description    Hightlights links starting with # with different color
// @include     http://*
// @include     https://*
// @include     file://*
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