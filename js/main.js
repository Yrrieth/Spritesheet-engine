window.onload = main;

// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images
// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage

//https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball



//BOITE
//https://developer.mozilla.org/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_mod%C3%A8le_de_bo%C3%AEte
//https://developer.mozilla.org/fr/docs/Web/HTML/Element/Fieldset

// UTILISER REQUESTANIMATIONFRAME
// https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm

// ANIMATION
// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Animations_basiques

// LOAD IMAGES
// https://www.html5canvastutorials.com/tutorials/html5-canvas-image-loader/

// https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler
// Compilateur Javascript : YUI et CLOSURE

var canvas;
var context;

// Put here the variables image

var images = [];

var load;
var scott;
var blob;

var imageInput;

var px = "px";

var keydown = false;

function keyboardEvent(imageObject) {
	var moveSpeed = 6; 
    on(document.body, "keydown", (event) => {
        var key = event.key;
        keydown = true;
        if (keydown == true) {
        if (imageObject.destinationX < canvas.width - imageObject.destinationWidth)
            if (key == 'd')
                imageObject.destinationX += moveSpeed;

        if (imageObject.destinationX > 0)
            if (key == 'q')
                imageObject.destinationX -= moveSpeed;
        }
    })

    on(document.body, "keyup", (event) => {
    	keydown = false;
    })
}

function main() {
	putButton();
    putCanvas();
    keyboardEvent(blob);
}
