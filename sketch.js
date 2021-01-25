var canvas,box1,box2,box3,box4,ball,edges
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1=createSprite(0,580,360,30);
    box1.shapeColor="yellow";

    box2=createSprite(295,580,200,30);
    box2.shapeColor="lightblue";

    box3=createSprite(515,580,280,30);
    box3.shapeColor="magenta";

    box4=createSprite(740,580,220,30);
    box4.shapeColor="red";

   ball=createSprite(0,0,40,40);
    ball.shapeColor="white";

    ball.velocityX=4;
    ball.velocityY=9;

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if (ball.isTouching(box1)&&ball.bounceOff(box1)){
        ball.shapeColor="yellow"
    }

    if (ball.isTouching(box2)&&ball.bounceOff(box2)){
        ball.shapeColor="lightblue"
    }

    if (ball.isTouching(box3)&&ball.bounceOff(box3)){
        ball.shapeColor="magenta"
    }

    if (ball.isTouching(box4)&&ball.bounceOff(box4)){
        ball.shapeColor="red"
    }
    
    drawSprites();



    //add condition to check if box touching surface and make it box
}
