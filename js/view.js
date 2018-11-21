function putElement() {
    canvas = newElement("canvas", document.body, window.innerWidth - 200, window.innerHeight - 50, "", 30, "", {"position":"absolute", "background":"#D0D0D0"});
    document.body.appendChild(canvas);
    
    context = canvas.getContext("2d");

    tempo = new SpriteSheet("img/load.png", 4, 12);
    //console.log(tempo.element +  " " + tempo.numberRow);
    
    image = tempo.element

    //on(image, "load", resizeSprite)
    on(image, "load", frameloop)



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