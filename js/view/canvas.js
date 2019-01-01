function putCanvas() {
    canvas = newElement("canvas", document.body, window.innerWidth - 200, window.innerHeight - 50, 0, 30, "", {"position":"absolute", "background":"#D0D0D0"});
    document.body.appendChild(canvas);
    
    context = canvas.getContext("2d");

    //load = new SpriteSheet("img/load.png", 4, 12, 0, 0, 0, 0, 100, 100);
    //load = new SpriteSheet("img/explosion-sprite.png", 3, 5, 0, 0, 0, 50, 100, 100);
    //load = new SpriteSheet("img/toon.png", 5, 10, 0, 0, 0, 0, 100, 100);
    //scott = new SpriteSheet("img/FDHsu.png", 2, 3, 0, 0, 50, 50, 100, 100);
    //carpenter = new SpriteSheet("img/carpenter-man.png", 2, 4, 0, 0, 50, 50, 100, 100)
    blob = new SpriteSheet("img/Blob_Walk.png", 4, 6, 0, 0, 50, 50, 100, 100)
    //hit = new SpriteSheet("img/Get Hit_Effect.png", 3, 3, 0, 0, 50, 50, 100, 100)

    //on(load.image, "load", getSizeAfterLoad(load));
    //getSizeAfterLoad(load)
    //getSizeAfterLoad(scott)
    getSizeAfterLoad(blob)
    //getSizeAfterLoad(hit)

    /*on(load, "load", function() {
        getSizeAfterLoad(load)
        context.drawImage(load.image, load.sourceX, load.sourceY, load.sourceWidth, load.sourceHeight, load.destinationX, load.destinationY, load.destinationWidth, load.destinationHeight);
    });*/


    frameloop(blob);
}