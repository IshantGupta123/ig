var canvas;
var music;
var box1 ,box2,box3,box4,ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(100,550,100,100)
box1.shapeColor="blue"


    //create box sprite and give velocity
ball=createSprite(100,100,25,25);
ball.velocityX=4;
ball.velocityY=5;
}

function draw() {
    background(rgb(169,169,0));
    console.log(boy2.x-boy.x);
    //create edgeSprite
ball.bounceoff(edges);

music.play();
    //add condition to check if box touching surface and make it box
drawSprite();
}
