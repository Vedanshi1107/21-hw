var canvas;
var music,square;
var greenbox,pinkbox,redbox,bluebox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     greenbox = createSprite(700,590,190,40);
     greenbox.shapecolor = "green";
     greenbox.velocityX = 0;

     pinkbox = createSprite(500,590,190,40);
     pinkbox.shapecolor = "pink";
     pinkbox.velocityX = 0;

     redbox = createSprite(300,590,190,40);
     redbox.shapecolor = "red";
     redbox.velocityX = 0;

     bluebox = createSprite(100,590,190,40);
     bluebox.shapecolor = "blue";
     bluebox.velocityX = 0;


    //create box sprite and give velocity
    square = createSprite(random(20,750),200,50,50);
    square.shapecolor = color("white");
    square.velocityX = 3;
    square.velocityY = 3;


}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    
    createEdgeSprite();
    
     
    //add condition to check if box touching surface and make it box
    
    if(greenbox.isTouching(box) && box.bounceOff(greenbox)){
        square.shapecolor = "green"
    }

    if(pinkbox.isTouching(box) && box.bounceOff(pinkbox)){
        square.shapecolor = "pink"
    }

    if(redbox.isTouching(box) && box.bounceOff(redbox)){
        square.shapecolor = "red"
    }

    if(bluebox.isTouching(box) && box.bounceOff(bluebox)){
        square.shapecolor = "blue"
    }

    drawSprites();
}


