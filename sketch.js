var astronaut,bg,bgimage;
var eat,move,bath,drink,brush,gym,sleep;
var edges;

function preload(){
  bgimage=loadImage("iss.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move=loadAnimation("move.png");
  drink=loadAnimation("drink1.png","drink2.png");
  eat=loadAnimation("eat1.png","eat2.png")
  bath=loadAnimation("bath1.png","bath2.png")
  sleep=loadAnimation("sleep.png")
}

function setup() {
  createCanvas(800,400); 
  bg=createSprite(200,200,50,50);
  edges=createEdgeSprites();
  bg.addImage(bgimage);
  astronaut= createSprite(300,230,50,50)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255); 
  astronaut.bounceOff(edges)
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing",brush)
    astronaut.velocityX=2;
    astronaut.velocityY=2;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming",gym)
    astronaut.velocityX=2;
    astronaut.velocityY=2;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing",bath)
    astronaut.velocityX=2;
    astronaut.velocityY=2;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating",eat)
    astronaut.velocityX=2;
    astronaut.velocityY=2;
  }
  if(keyDown("M")){
    astronaut.velocityX=3
    astronaut.velocityY=-2
  }
  drawSprites();
  text("INSTRUCTIONS:", 500,50) 
  text("up arrow: brush", 500,60)
  text("down arrow: gym", 500,70)
  text("right arrow:eat", 500,80)
  text("left arrow:bath", 500,90) 
  text("m key: move", 500,100)

}