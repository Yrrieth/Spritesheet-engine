function putElement() {
    canvas = newElement("canvas", document.body, window.innerWidth - 200, window.innerHeight - 50, "", 30, "", {"position":"absolute", "background":"#D0D0D0"});
    document.body.appendChild(canvas);
    
    context = canvas.getContext("2d");

    //load = new SpriteSheet("img/load.png", 4, 12, 0, 0, 0, 0, 100, 100);
    //load = new SpriteSheet("img/explosion-sprite.png", 3, 5, 0, 0, 0, 50, 100, 100);
    load = new SpriteSheet("img/toon.png", 5, 10, 0, 0, 0, 0, 100, 100);
    //load = new SpriteSheet("img/FDHsu.png", 2, 3, 0, 0, 50, 50, 100, 100);

    //on(load.image, "load", getSizeAfterLoad(load));
    getSizeAfterLoad(load)
    //getSizeAfterLoad(scott)

    //context.drawImage(load.image, load.sourceX, load.sourceY, load.sourceWidth, load.sourceHeight, load.destinationX, load.destinationY, load.destinationWidth, load.destinationHeight);


    frameloop();


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