//window.onload = main;

var px = "px";

function on(element, type, event) {
    element.addEventListener(type, event);
}


function nouveau(el, parent, w, h, x, y, idt, evnt, style) {
    var el = document.createElement(el);
    parent.appendChild(el);
    el.style.position = "absolute";
    el.style.width = w + px;
    el.style.height = h + px;
    el.style.left = x + px;
    el.style.top = y + px;
    el.id = idt;
    el.evnt = evnt;
    for(var valeur in style){
	el.style[valeur] = style[valeur];
	//console.log(valeur + " = " + style[valeur] + " , " + el.style[valeur]);
    }
    return el;
}