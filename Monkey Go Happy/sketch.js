var playerimg, groundimg, bananaimg, backimg, stoneimg
var player, ground, banana,stone
var score = 0
var bananagroup, stonesgroup

function preload() {
  playerimg=loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
"Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png",
"Monkey_09.png","Monkey_10.png");
  stoneimg = loadImage ("stone.png")
  backimg = loadImage ("jungle.jpg")
  bananaimg = loadImage ("banana.png")
}

function setup() {
  createCanvas(400, 400);
  stonesgroup=new Group();
  bananagroup=new Group();
  ground = createSprite(200,380,400,20)
  stone = createSprite(300,300,10,10)
  stone.velocityX = -2
  bg = createSprite (0,0,400,400)
  bg.addImage  (backimg);
  bg.scale = 1.1
  bg.velocityX = -2
  player = createSprite(50,360,20,20)
  player.addAnimation("running",playerimg)
  player.scale = 0.1
  
 
}

function draw() {
  switch(score){
    case 10: player. scale = 0.12
      break;
    case 20: player. scale = 0.14
      break;
    case 30: player. scale = 0.16
      break;
    case 40: player. scale = 0.18
      break;
    default: break;
  }
  background(0);
  if(bg.x<0){
    bg.x = bg.width/2
  }
  if(keyDown ("SPACE")){
     player.velocityY = -3
     }
  player.velocityY = player.velocityY+0.5
  if(player.isTouching(bananagroup)) {
    bananagroup.destroyEach();
    score = score+1;
  }
  spawnstones();
  spawnbananas();
  player.collide(ground)
  drawSprites();
  text ("Score " +score,300,50)
  
}

function spawnstones() {
      if(frameCount%100 === 0){
  stone = createSprite(350,350,20,20);
  stone.addImage (stoneimg);
  stone.velocityX = -6
  stone.scale = 0.15 
  stone.lifetime = 200;
  stonesgroup.add(stone);

}
}

function spawnbananas(){
    if(frameCount%100 === 0){
    var banana = createSprite(400, 200 ,20 ,20);
  banana.addImage(bananaimg)
  banana.scale = 0.05
  banana.velocityX = -3 
  banana.lifetime = 200;
  bananagroup.add (banana);
  

}
}

