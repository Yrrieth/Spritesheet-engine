//window.onload = main;
/*
https://developer.mozilla.org/fr/docs/Web/API/File
https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload
https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
*/

var inpt;
var cvs; // Canvas (Le support du contexte ctx de la fonction make())
var ctx; // Contexte du convas (L'interieur du canvas)
var fileList;
var img; // Contient la balise <img>




function make() {

    img = document.createElement("img");

    inpt = document.createElement("input");
    inpt.style.position = "absolute";
    inpt.style.left = "0" + px;
    inpt.style.top = "0" + px;
    inpt.type = "file";
    inpt.id = "image";
    inpt.name = "imageTest";
    inpt.accept = ".png, .jpg, .jpeg, .gif";

    inpt.addEventListener("change", function() {
	fileList = inpt.files;

	for(var i = 0; i < fileList.length; i++) {
	    img.title = fileList.name;
	    img.src = window.URL.createObjectURL(fileList[i]);
	    img.addEventListener("load", function() {
		ctx.drawImage(img, 0, 0, cvs.width, cvs.height);

	    });
	}

    });
    
    
    document.body.appendChild(inpt);

    cvs = document.createElement("canvas");
    cvs.style.position = "absolute";
    cvs.style.width = "800" + px;
    cvs.style.height = "600" + px;
    cvs.style.top = "30" + px;
    document.body.appendChild(cvs);
    
    ctx = cvs.getContext('2d');

    var fd = nouveau("fieldset", document.body, 300, 300, 810, 30, "", "", "");

    var label = nouveau("label", document.body, "", "", 20, 40, "", "", "");
    label.appendChild(document.createTextNode("Luminosité"));
    fd.appendChild(label);

    var slide = nouveau("input", document.body, "", "", 100, 40, "", "", "");
    slide.type = "range";
    slide.min = 0;
    slide.max = 100;
    slide.value = 50; // Valeur de base
    on(slide, "mousedown", function() {
	ctx = img.style.filter = "brigthness("+ slide.value + "%)";
    });
    fd.appendChild(slide);

    var label1 = nouveau("label", document.body, "", "", 20, 140, "", "", "");
    label1.appendChild(document.createTextNode("Contraste"));
    fd.appendChild(label1);

    var slide1 = nouveau("input", document.body, "", "", 100, 140, "", "", "");
    slide1.type = "range";
    slide1.min = 0;
    slide1.max = 100;
    slide1.value = 50;
    fd.appendChild(slide1);

    var label2 = nouveau("label", document.body, "", "", 20, 240, "", "", "");
    label2.appendChild(document.createTextNode("Saturation"));
    fd.appendChild(label2);

    var slide2 = nouveau("input", document.body, "", "", 100, 240, "", "", "");
    slide2.type = "range";
    slide2.min = 0;
    slide2.max = 100;
    slide2.value = 50;
    fd.appendChild(slide2);
    
    document.body.appendChild(fd);
}
