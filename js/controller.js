/**
 * @construtor SpriteSheet : the object SpriteSheet which contains all the necessary informations of a spritesheet
 * @param source : the link of the image source
 * @param numberRow : the number of row of sprite in the spritesheet
 * @param numberColumn : the number of column of sprite in the spritesheet
 * @param sourceWidth : the width of 1 sprite of the spritesheet (see the commentary of the function getSizeAfterLoad() for more information)
 * @param sourceHeight : the height of 1 sprite of the spritesheet (see the commentary of the function getSizeAfterLoad() for more information)
 * @param destinationX : the coordinate X of the origin of the spritesheet in the canvas
 * @param destinationY : the coordinate Y of the origin of the spritesheet in the canvas
 * @param destinationWidth : the width of the spritesheet in the canvas
 * @param destinationHeight : the height of the spritesheet in the canvas
 */

class SpriteSheet {
    constructor(source, numberRow, numberColumn, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight) {
        this.image = document.createElement("img");       

        this.source = source;
        this.image.src = this.source;

        this.numberRow = numberRow;
        this.numberColumn = numberColumn;

        // A sprite is 1 image of a spritesheet
        this.spriteX; // The number of the current sprite
        this.spriteY;

        this.sourceX; // The coordinate X of the first sprite of the spritesheet
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
 * otherwise, the width and height will be always 0.
 * So, firstly, sourceWidth and sourceHeight will temporarily take the size of the image source then,
 * those properties will take the size of 1 sprite of the image after the function spriteSize() have been called.
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

/**
 * @method spriteSize : calculate the size of 1 sprite from a spritesheet
 * @param image : the object SpriteSheet
 * @param numberRow : the number of row of sprite in the spritesheet
 * @param numberColumn : the number of column of sprite in the spritesheet
 *
 * When the function spriteSize() is called by the function getSizeAfterLoad(),
 * the variables image.sourceWidth and image.sourceHeight have the size of the image source 
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

/**
 * @method update : function that will update the animation
 * @param imageObject : the object SpriteSheet
 *
 * Change the value of the variable moveSpeed to change the speed of the movement perform by the keyboard event
 */

function update(imageObject) {
    var moveSpeed = 6; 
    var oldPositionX = imageObject.destinationX;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageObject.image, imageObject.sourceX, imageObject.sourceY, imageObject.sourceWidth, imageObject.sourceHeight, imageObject.destinationX, imageObject.destinationY, imageObject.destinationWidth, imageObject.destinationHeight);

    // The following lines correspond to the movement within the spritesheet and which sprite the function context.drawImage will show us
    // Reset everything
    if (imageObject.spriteX == imageObject.numberRow && imageObject.spriteY == imageObject.numberColumn) {
        imageObject.spriteX = 1;
        imageObject.spriteY = 1;
        imageObject.sourceX = 0;
        imageObject.sourceY = 0;
    }

    // Move horizontally
    if (imageObject.spriteY < imageObject.numberColumn) {
        imageObject.spriteY++;
        imageObject.sourceX += imageObject.sourceWidth;
    } else { // Move vertically
        imageObject.spriteX++;
        imageObject.sourceY += imageObject.sourceHeight;
        imageObject.spriteY = 1;
        imageObject.sourceX = 0;
    }

    // Keyboard event
    on(document.body, "keydown", (event) => {
        console.log("oldPositionX : " + oldPositionX + " current position : " + imageObject.destinationX);
        if (oldPositionX != imageObject.destinationX) { // If the old position is different from the current position, then we return
            return;
        } else {
        var key = event.key;
        console.log("La key appuyée est : " + key + " destinationX : " + imageObject.destinationX)
        console.log(performance.now() / 1000)
        if (imageObject.destinationX < canvas.width - imageObject.destinationWidth)
            if (key == 'd')
                imageObject.destinationX += moveSpeed;

        if (imageObject.destinationX > 0)
            if (key == 'q')
                imageObject.destinationX -= moveSpeed;
        }
    })
}

var raf = null; // requestAnimationFrame
var hideFrame = 1; // variable boolean to have a animation at 30 fps
var animationRunning = false // variable boolean used for the buttons

/**
 * @method frameloop : 
 * @param imageObject : the object SpriteSheet
 *
 * Change the value of the variable moveSpeed to change the speed of the movement perform by the keyboard event.
 * Change the parameter in the function update(), depending of your image
 */

function frameloop(imageObject) {
    console.log("loop")
    hideFrame = 1 - hideFrame; // 1 then 0 at each loop : 1 - 1 = 0 ; 1 - 0 = 1
    if (hideFrame == 0) {
        update(blob);
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
 *
 * This function is only used for the buttons
 */
function stopButton() {
    cancelAnimationFrame(raf);
    raf = null;
    animationRunning = false;
}
