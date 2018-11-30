class SpriteSheet {
    constructor(source, numberRow, numberColumn, imageWidth, imageHeight) {
        this.image = document.createElement("img");       

        this.source = source;
        this.image.src = this.source;

        this.numberRow = numberRow;
        this.numberColumn = numberColumn;

        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;

        this.spriteWidth;
        this.spriteHeight;

        this.frameX;
        this.frameY;
        this.coordinateFrameX;
        this.coordinateFrameY;
    }
}

function getSizeAfterLoad(imageObject) {
    imageObject.imageWidth = imageObject.image.naturalWidth; // the "this" here, refers to "loadImage". The .imageWidth and .imageHeight property can only be obtained after the image have been loaded,
    imageObject.imageHeight = imageObject.image.naturalHeight; // otherwise, the width and height will be 0
    console.log(imageObject.imageWidth + " " + imageObject.imageHeight);
    var loadSpriteSize = spriteSize(load, imageObject.numberRow, imageObject.numberColumn);
    console.log(imageObject.numberRow + " " + imageObject.numberColumn);
    imageObject.spriteWidth = loadSpriteSize.spriteWidth;
    imageObject.spriteHeight = loadSpriteSize.spriteHeight;
    console.log(imageObject.spriteWidth + " " + imageObject.spriteHeight);
    load.frameX = 1;
    load.frameY = 1;
    load.coordinateFrameX = 0;
    load.coordinateFrameY = 0;
    frameloop();
}

function resizeSprite(image) {
    if (image.width > canvas.width || image.height > canvas.height) {
	    var coefficientDeReduction = Math.max(image.width / canvas.width, image.height / canvas.height);
	    Math.round(image.width /= coefficientDeReduction);
	    Math.round(image.height /= coefficientDeReduction); 
	}
    //frameloop(image);
    return image;
}

/**
 * @method spriteSize : calculate the size of 1 sprite from a spritesheet
 * @param image : the object spritesheet
 * @param numberRow : 
 * @param numberColumn :
 */

function spriteSize(image, numberRow, numberColumn) {
	var spriteWidth = image.imageWidth / numberColumn;
	var spriteHeight = image.imageHeight / numberRow;
	return {
        spriteWidth : spriteWidth,
        spriteHeight : spriteHeight
    };
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
    context.drawImage(load.image, load.coordinateFrameX, load.coordinateFrameY, load.spriteWidth, load.spriteHeight, 0, 0, /*canvas.width*/ 50, /*canvas.height*/ 50);

    if (load.frameX == load.numberRow && load.frameY == load.numberColumn) {
        load.frameX = 1;
        load.frameY = 1;
        load.coordinateFrameX = 0;
        load.coordinateFrameY = 0;
    }

    if (load.frameY < load.numberColumn) {
        load.frameY++;
        load.coordinateFrameX += load.spriteWidth;
    } else {
        load.frameX++;
        load.coordinateFrameY += load.spriteHeight;
        load.frameY = 1;
        load.coordinateFrameX = 0;
    }
}

function frameloop() {
    setTimeout(function() {
	   move(); 

    /*on(canvas, "resize", function() {
        console.log("w : "+window.innerWidth + " h : " +window.innerHeight)
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
    });*/

        requestAnimationFrame(frameloop);
    }, 50); // 50 ms == 0,05 s
}

