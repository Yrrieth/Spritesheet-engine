window.onload = main;

// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images
// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage
var canvas;
var context;
var image;

var x = 0;
var y = 0;
var dx = 57.5;
var dy = 57.5;
var nbLigne = 4;
var nbColonne = 12;

var ligne = 1;
var colonne = 1;


function cree() {
    canvas = nouveau("canvas", document.body, 800, 600, "", 30, "", "", {"position":"absolute"});
    document.body.appendChild(canvas);
    context = canvas.getContext("2d");
    image = document.createElement("img");
    var input = nouveau("input", document.body, "", "", "", "", "", "", {"position":"absolute"});
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg, .gif";

    input.addEventListener("change", function() {
	var fileList = input.files;
	for(var i = 0; i < fileList.length; i++) {
	    image.title = fileList.name;
	    image.src = window.URL.createObjectURL(fileList[i]);
	    image.id = "image" + i;
	    //image.src = "img/loading-sprite.png";
	    on(image, "load", function() {
		if (image.width > canvas.width || image.height > canvas.height) {
		    var coefficientDeReduction = Math.max(image.width / canvas.width, image.height / canvas.height);
		    Math.round(image.width /= coefficientDeReduction);
		    Math.round(image.height /= coefficientDeReduction); 
		}
		//context.drawImage(image, 0, 0, image.width, image.height);
		//context.drawImage(image, 0, 0, 57.5, 57.5, 0, 0, image.width, image.height);
		frameloop();
		console.log("longueur " + image.width + " " + image.width / 12 + " hauteur : " + image.height + " " + image.height / 4)
	    })
	    
	}

    });
}

function move() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, x, y, 57.5, 57.5, 0, 0, image.width, image.height);

    if (ligne == nbLigne && colonne == nbColonne) {
	ligne = 1;
	colonne = 1;
	x = 0;
	y = 0;
     }
    
    x += dx;
    if (colonne < nbColonne) {
	colonne++;
    } else {
	console.log("tact")
	y += dy;
	ligne++;
	colonne = 1;
	x = 0;

    }
   
}

function frameloop() {
    move();
    requestAnimationFrame(frameloop);
}

function main() {
    cree();
    
    
}
