function putButton() {
    var input = newElement("input", document.body, "", "", 5, 5, "", {"position":"absolute"});
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg, .gif";

    imageInput = document.createElement("img");
    if (animationRunning == false) {
        on(input, "change", function() {
        	var fileList = input.files;
        	for(var i = 0; i < fileList.length; i++) {
        	    /*imageInput.title = fileList.name;
        	    imageInput.src = window.URL.createObjectURL(fileList[i]);
        	    imageInput.id = "image" + i;
                */


                var numRow = null;
                while (numRow == null || isNaN(numRow)) {
                    if (numRow == "exit")
                        return;
                    numRow = prompt("How many row does your image have ?"); 
                    if (numRow == null || isNaN(numRow)) {
                        numRow = prompt("Your answer must be a number ! How many row does your image have ?\n Write \"exit\" to quit."); 
                    }
                }
                console.log(numRow + " numRow")

                var numColumn = null;
                while (numColumn == null || isNaN(numColumn)) {
                    if (numColumn == "exit")
                        return;
                    numColumn = prompt("How many column does your image have ?"); 
                    if (numColumn == null || isNaN(numColumn)) {
                        numColumn = prompt("Your answer must be a number ! How many column does your image have ?\n Write \"exit\" to quit"); 
                    }
                }
                console.log(numColumn + " numColumn")

                stopButton();
                context.clearRect(0, 0, canvas.width, canvas.height);
                imageInput =  new SpriteSheet(window.URL.createObjectURL(fileList[i]), numRow, numColumn, 0, 0, 50, 50, 100, 100);
                getSizeAfterLoad(imageInput);
                frameloop(imageInput)
        	}
        });
    }

    var start = newElement("button", document.body, "", "", 250, 5, "", {"position":"absolute"});
    start.innerHTML = "Start";
    on(start, "click", function() {
        if (animationRunning == false) {
            animationRunning = true;
            raf = requestAnimationFrame(frameloop);
        }
    });

    var stop = newElement("button", document.body, "", "", 300, 5, "", {"position":"absolute"});
    stop.innerHTML = "Stop";
    on(stop, "click", function() {
        stopButton();    
    })

    var erase = newElement("button", document.body, "", "", 350, 5, "", {"position":"absolute"});
    erase.innerHTML = "Erase";
    on(erase, "click", function() {
        stopButton();
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
 
    var info = newElement("div", document.body, 110, 20, window.innerWidth - 300, 5, "", {"position":"absolute"});
    info.innerHTML = "Move : Q and D"
}