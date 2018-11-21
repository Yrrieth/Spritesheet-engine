class SpriteSheet {
    constructor(source, numberRow, numberColumn) {
        this.element = document.createElement("img");
        this.source = source;
        this.element.src = this.source;

        this.numberRow = numberRow;
        this.numberColumn = numberColumn;

        this.element = resizeSprite(this.element)

        /*this.sizeSprite = sizeSprite(this.element, numberRow, numberColumn);
        this.spriteWidth = this.sizeSprite[0];
        this.spriteHeight = this.sizeSprite[1];*/
    }
}

function resizeSprite(image) {
	console.log(image + image)
        if (image.width > canvas.width || image.height > canvas.height) {
		    var coefficientDeReduction = Math.max(image.width / canvas.width, image.height / canvas.height);
		    Math.round(image.width /= coefficientDeReduction);
		    Math.round(image.height /= coefficientDeReduction); 
		}
        //frameloop(image);
        return image;
}

function sizeSprite(image, numberRow, numberColumn) {
	var spriteWidth = image.width / numberRow;
	var spriteHeight = image.height / numberColumn;
	return [spriteWidth, spriteHeight];
}


/**
 * @method on : call an event
 * @param element : element which will receives an event 
 * @param type : type of event
 * @param callback : function which will be called when the event will be performed
 */

function on(element, type, callback) {
    element.addEventListener(type, callback);
}

/**
 * @method newElement : create new element to put in the window page
 * @param element : HTML tag
 * @param parent : parent which receives the element
 * @param width : element's width
 * @param height : element's height
 * @param x : coordinate x
 * @param y : coordinate y
 * @param identifier : 
 * @param style : CSS property, write in this form {"cssProperty1":"value1", "cssProperty2":"value2", "etc..."}
 *
 * Write "" in the parameters you don't need
 */

function newElement(element, parent, width, height, x, y, identifier, style) {
    var element = document.createElement(element);
    parent.appendChild(element);
    element.style.position = "absolute";
    element.style.width = width + px;
    element.style.height = height + px;
    element.style.left = x + px;
    element.style.top = y + px;
    element.id = identifier;
    for(var value in style) {
	    element.style[value] = style[value];
    }
    return element;
}




function move() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, x, y, 57.5, 57.5, 0, 0, /*image.width*/ 50, /*image.height*/ 50);

    if (ligne == nbLigne && colonne == nbColonne) {
        ligne = 1;
        colonne = 1;
        x = 0;
        y = 0;
    }
    
    
    if (colonne < nbColonne) {
        colonne++;
        x += dx;
    } else {
        ligne++;
        y += dy;
        colonne = 1;
        x = 0;
    }
   
}

var tmp; 
var t = 0; 

function frameloop() {
	/*Pour je ne sais quelle raison, apres la 1er boucle, 
	 *la variable image devient du type object au type number 
	 */ 

	if (t == 1) { 
		image = tmp; 
	} 
	move(); 

	t = 1; 
	tmp = image
    /*on(canvas, "resize", function() {
        console.log("w : "+window.innerWidth + " h : " +window.innerHeight)
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
    });*/

    requestAnimationFrame(frameloop);
}

