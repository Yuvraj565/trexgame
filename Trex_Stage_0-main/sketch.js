
var trex ,trex_running;
var edge;
var ground, move_ground;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex2.png")
  move_ground = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  edges = createEdgeSprites();
  //create a trex sprite
 trex = createSprite(40, 150, 10, 20);
 trex.addAnimation("run", trex_running);
 trex.scale = 0.5

 //ground
 ground = createSprite(300, 180, 600, 3)
 ground.addImage("move", move_ground)
}

function draw(){
  background(201)

  ground.velocityX = -4

  if (ground.x < 299){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    trex.velocityY = -5
  }
  trex.collide(ground)
  trex.velocityY = trex.velocityY + 0.2

  drawSprites()

}
