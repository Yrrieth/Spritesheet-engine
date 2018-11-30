function putElement() {
    canvas = newElement("canvas", document.body, window.innerWidth - 200, window.innerHeight - 50, "", 30, "", {"position":"absolute", "background":"#D0D0D0"});
    document.body.appendChild(canvas);
    
    context = canvas.getContext("2d");

    //load = new SpriteSheet("img/load.png", 4, 12, 0, 0);
    //load = new SpriteSheet("img/explosion-sprite.png", 3, 5, 0, 0);
    load = new SpriteSheet("img/toon.png", 5, 10, 0, 0);
    //load = new SpriteSheet("img/FDHsu.png", 2, 3, 0, 0);

    on(load.image, "load", 
        function() {
        load.imageWidth = load.image.naturalWidth; // the "this" here, refers to "loadImage". The .imageWidth and .imageHeight property can only be obtained after the image have been loaded,
        load.imageHeight = load.image.naturalHeight; // otherwise, the width and height will be 0
        console.log(load.image.naturalWidth)
        console.log(load.imageWidth + " " + load.imageHeight);
        var loadSpriteSize = spriteSize(load, load.numberRow, load.numberColumn);
        console.log(load.numberRow + " " + load.numberColumn);
        load.spriteWidth = loadSpriteSize.spriteWidth;
        load.spriteHeight = loadSpriteSize.spriteHeight;
        console.log(load.spriteWidth + " " + load.spriteHeight)
        load.frameX = 1;
        load.frameY = 1;
        load.coordinateFrameX = 0;
        load.coordinateFrameY = 0;
        frameloop();
    }
        //getSizeAfterLoad(load)
    );


    imageInput = document.createElement("img");
    
    var input = newElement("input", document.body, "", "", "", "", "", "", {"position":"absolute"});
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg, .gif";

    on(input, "change", function() {
    	var fileList = input.files;
    	for(var i = 0; i < fileList.length; i++) {
    	    imageInput.title = fileList.name;
    	    imageInput.src = window.URL.createObjectURL(fileList[i]);
    	    imageInput.id = "image" + i;
    	    on(imageInput, "load", frameloop)
    	}
    });
}