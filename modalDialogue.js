/*
Free Software: see license.txt Copyright (c) 2011 Rich Boakes
*/
var modalDialogue = (function () {
	"use strict";
	var body, console, modal, overlay, openDialogue, closeDialogue, loader, message;
	openDialogue = function (url) {
		body = document.querySelector("body");
		modal = document.createElement("div");
		modal.setAttribute("class", "modal");
		overlay = document.createElement("div");
		overlay.setAttribute("class", "overlay");
		overlay.appendChild(modal);
		overlay.addEventListener("click", closeDialogue, false);
		body.appendChild(overlay);
		loader(url);
	};
	closeDialogue = function () {
		body.removeChild(overlay);
		overlay.removeEventListener("click", closeDialogue, false);
	};
	loader = function (url) {
		var xhr, changeListener;
		xhr = new XMLHttpRequest();
		changeListener = function () {
			if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
				modal.innerHTML = xhr.responseText;
			} else {
				modal.innerHTML = "<p>Message could not be retrieved.  Please click to cancel.<\/p>";
			}
		};	
		xhr.open("GET", url, true);
		xhr.onreadystatechange = changeListener;
		xhr.send();
	};
	return {
		open: openDialogue,
		close: closeDialogue
	};
}());

