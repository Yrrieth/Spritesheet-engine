class SpriteSheet {
    constructor(source, numberRow, numberColumn, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight) {
        this.image = document.createElement("img");       

        this.source = source;
        this.image.src = this.source;

        this.numberRow = numberRow;
        this.numberColumn = numberColumn;

        // A sprite is 1 image of a spritesheet
        this.spriteX;
        this.spriteY;
        this.sourceX;
        this.sourceY;
        this.sourceWidth = sourceWidth;
        this.sourceHeight = sourceHeight;

        this.destinationX = destinationX;
        this.destinationY = destinationY;
        this.destinationWidth = destinationWidth;
        this.destinationHeight = destinationHeight;
    }
}

/**
 * @method getSizeAfterLoad :
 * @param imageObject : the object SpriteSheet
 *
 * The sourceWidth and sourceHeight property can only be obtained after the image have been loaded,
 * otherwise, the width and height will be 0.
 * So, firstly, sourceWidth and sourceHeight will take the size of the image source then,
 * those property will take the size of 1 sprite of the image after the function spriteSize() have been called.
 */

function getSizeAfterLoad(imageObject) {
    on(imageObject.image, "load", function() {
        imageObject.sourceWidth = imageObject.image.naturalWidth; 
        imageObject.sourceHeight = imageObject.image.naturalHeight; 
        console.log(imageObject.image)
        console.log(imageObject.sourceWidth + " " + imageObject.sourceHeight);
        var loadSpriteSize = spriteSize(imageObject, imageObject.numberRow, imageObject.numberColumn);
        console.log(imageObject.numberRow + " " + imageObject.numberColumn);
        imageObject.sourceWidth = loadSpriteSize.spriteWidth;
        imageObject.sourceHeight = loadSpriteSize.spriteHeight;
        console.log(imageObject.sourceWidth + " " + imageObject.sourceHeight + " taille");
        imageObject.spriteX = 1;
        imageObject.spriteY = 1;
        imageObject.sourceX = 0;
        imageObject.sourceY = 0;
        //frameloop(imageObject);
    });
}

/*function resizeSprite(image) {
    if (image.width > canvas.width || image.height > canvas.height) {
	    var coefficientDeReduction = Math.max(image.width / canvas.width, image.height / canvas.height);
	    Math.round(image.width /= coefficientDeReduction);
	    Math.round(image.height /= coefficientDeReduction); 
	}
    //frameloop(image);
    return image;
}*/

/**
 * @method spriteSize : calculate the size of 1 sprite from a spritesheet
 * @param image : the object SpriteSheet
 * @param numberRow : 
 * @param numberColumn :
 */

function spriteSize(image, numberRow, numberColumn) {
	var spriteWidth = image.sourceWidth / numberColumn;
	var spriteHeight = image.sourceHeight / numberRow;
	return {
        spriteWidth : spriteWidth,
        spriteHeight : spriteHeight
    };
}

/**
 * @method on : useful function to use when we want to create events 
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

function animate(imageObject) {
    var moveSpeed = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageObject.image, imageObject.sourceX, imageObject.sourceY, imageObject.sourceWidth, imageObject.sourceHeight, imageObject.destinationX, imageObject.destinationY, imageObject.destinationWidth, imageObject.destinationHeight);

    // Reset everything
    if (imageObject.spriteX == imageObject.numberRow && imageObject.spriteY == imageObject.numberColumn) {
        imageObject.spriteX = 1;
        imageObject.spriteY = 1;
        imageObject.sourceX = 0;
        imageObject.sourceY = 0;
    }

    if (imageObject.spriteY < imageObject.numberColumn) {
        imageObject.spriteY++;
        imageObject.sourceX += imageObject.sourceWidth;
    } else {
        imageObject.spriteX++;
        imageObject.sourceY += imageObject.sourceHeight;
        imageObject.spriteY = 1;
        imageObject.sourceX = 0;
    }

    on(document.body, "keypress", (event) => {
        var touche = event.key;
        console.log("La touche appuyée est : " + touche + " destinationX : " + imageObject.destinationX)
        console.log(performance.now() / 1000)
        if (touche == 'd') {
            imageObject.destinationX += moveSpeed;
        }
        if (touche == 'q') {
            imageObject.destinationX -= moveSpeed;
        }
    })
}

var raf = null; // requestAnimationFrame
var hideFrame = 1; // variable boolean to have a animation at 30 fps
var animationRunning = false // variable boolean used for the buttons

function frameloop(imageObject) {
    console.log("a")
    hideFrame = 1 - hideFrame; // 1 then 0 at each loop : 1 - 1 = 0 ; 1 - 0 = 1
    if (hideFrame == 0) {
        animate(blob);
    }
    raf = requestAnimationFrame(frameloop)
    
    if (raf != null) {
        animationRunning = true;
    } else {
        animationRunning = false;
    }

    /*on(document.body, "resize", function() {
        console.log("w : "+window.innerWidth + " h : " +window.innerHeight)
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
    });*/
}

/**
 * @method stopButton : function used after a stop or erase event that will stop the function requestAnimationFrame()
 */
function stopButton() {
    cancelAnimationFrame(raf);
    raf = null;
    animationRunning = false;
}
