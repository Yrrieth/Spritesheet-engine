# Spritesheet-engine

## L3 Développement web avancé - Projet

***
### How to use Spritesheet Engine:

1. Create a global variable that will be your object SpriteSheet, for example in the main.js file. 
Ex: 
```var blob;```

2. With your new variable, create an instance of the object SpriteSheet in the function putCanvas() in the file canvas.js, according the differents parameters. (Watch the commentary of the class SpriteSheet in the file controller.js for more informations)
Ex: 
```blob = new SpriteSheet("img/Blob_Walk.png", 4, 6, 0, 0, 50, 50, 50, 100);```

3. Call the function getSizeAfterLoad() with your object SpriteSheet in parameter in the function putCanvas() in the file canvas.js.
Ex: 
```getSizeAfterLoad(blob);```

4. Call the function update() with your object SpriteSheet in parameter in the function frameloop() of the file controller.js, inside the, ```if (hideFrame == 0) { }```, block.
Ex: 
```
if (hideFrame == 0) {
    update(blob);
};
```

- You can change the value of the movement speed by changing the value of the variable moveSpeed in the function upadte().

***

### TO DO:

- Put multiples images in the canvas and animate them all.
- Able to put image in the input and animate it.

***
## Report

### The first version can be used with this image : 
![Image of loading](https://devforum.roblox.com/uploads/default/optimized/3X/4/5/4566fd70b0bccbf7e94b3a9ad3271630916ad128_1_690x230.png)

https://devforum.roblox.com/uploads/default/optimized/3X/4/5/4566fd70b0bccbf7e94b3a9ad3271630916ad128_1_690x230.png

***

### [UPDATE 11/30/2018]
This version can be used with whichever images which are __strictly well ordonned__ :

__Exemple :__

![Image of explosion](http://www.appuntidigitali.it/site/wp-content/uploads/explosion-sprite.png)

http://www.appuntidigitali.it/site/wp-content/uploads/explosion-sprite.png

![Image of explosion2](http://www.rigzsoft.co.uk/media/toon.png)

http://www.rigzsoft.co.uk/media/toon.png

![Image of Scott Pilgrim](http://i.imgur.com/FDHsu.png)

http://i.imgur.com/FDHsu.png

***

### [UPDATE 01/01/2019]

This version can only use this image :

(![Image of blob](http://2.bp.blogspot.com/--Vr6-kWHp0s/TorCoWHvu5I/AAAAAAAAAII/PpPQ2azjKeI/s1600/Blob_Walk.png)

http://one-percent-talent.blogspot.com/2011/10/difference-form-character-sprite-sheet.html

