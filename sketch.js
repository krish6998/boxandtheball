var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box1=createSprite(0,580,360,30);
     box1.shapeColor = rgb(0,0,225);

     box2=createSprite(295,580,200,30);
     box2.shapeColor = rgb(0,100,0);

     box3=createSprite(515,580,200,30);
     box3.shapeColor = rgb(153,0,76);

     box4=createSprite(740,580,220,30);8
     box4.shapeColor= rgb(225,255,100);

    //create box sprite and give velocity
    //anywhere
     ball=createSprite(random(70,750),100,40,40);
     ball.shapeColor = rgb(225,255,255);
     ball.velocityX=4;
     ball.velocityY=6;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    
       drawSprites();


    //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = rgb(0,0,225);
    }
    if(box2.isTouching(ball)){
        ball.shapeColor = rgb(0,100,0);
        ball.velocityX=0;
        ball.velocityY=0;
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = rgb(255,255,100);
    }
}