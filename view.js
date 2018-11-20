function putElement() {
    canvas = newElement("canvas", document.body, window.innerWidth - 200, window.innerHeight - 50, "", 30, "", {"position":"absolute", "background":"#D0D0D0"});
    document.body.appendChild(canvas);
    
    context = canvas.getContext("2d");

    

   var tempo = new SpriteSheet("img/load.png", 4, 12);
    image = tempo[0];
    console.log(tempo[1] +  " " + tempo[2]);

    on(image, "load", resizeSprite)


/*
    image = document.createElement("img");
    
    var input = newElement("input", document.body, "", "", "", "", "", "", {"position":"absolute"});
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg, .gif";

    on(input, "change",function() {
	var fileList = input.files;
	for(var i = 0; i < fileList.length; i++) {
	    image.title = fileList.name;
	    image.src = window.URL.createObjectURL(fileList[i]);
	    image.id = "image" + i;

	    on(image, "load", resizeSprite)
	    
	}

    });
*/

}

/*
function resizeSprite() {
        if (image.width > canvas.width || image.height > canvas.height) {
            var coefficientDeReduction = Math.max(image.width / canvas.width, image.height / canvas.height);
            Math.round(image.width /= coefficientDeReduction);
            Math.round(image.height /= coefficientDeReduction); 
        }
        //context.drawImage(image, x, y, 57.5, 57.5, 0, 0, image.width, image.height);
        frameloop();
        }*/


/*
function putElement() {
    canvas = newElement("canvas", document.body, window.innerWidth - 200, window.innerHeight - 50, "", 30, "", {"position":"absolute", "background":"#D0D0D0"});
    document.body.appendChild(canvas);
    
    context = canvas.getContext("2d");
    image = document.createElement("img");

    //var fieldset = nouveau
    
    var input = newElement("input", document.body, "", "", "", "", "", {"position":"absolute"});
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
        frameloop();
        console.log("longueur " + image.width + " hauteur : " + image.height)
        })
        
    }

    });
}
*/
