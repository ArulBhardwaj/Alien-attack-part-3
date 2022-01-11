var score=0;

var spaceship,alien,alien2,ground,space;

var spaceshipImg,alienImg,alien2Img,groundImg,spaceImg;

var laser,blast;
var laserImg,blastImg;

var alienGroup,alien2Group,laserGroup;

var life = 3;
var gameState=1;

function preload() {
  spaceshipImg=loadImage("spaceship.png");
  alienImg=loadImage("alien.png");
  alien2Img=loadImage("alien2.png");
  groundImg=loadImage("ground.png");
  laserImg=loadImage("laser.png");
  blast=loadImage("blast.png");
  spaceImg=loadImage("space.png");

}
function setup() {
  createCanvas(1200,800);

  ground=createSprite(600,800,1200,50)
  ground.addImage(groundImg);
  ground.scale=4

  spaceship=createSprite(600,700,50,50);
  spaceship.addImage(spaceshipImg);


  Scoreboard=createElement();
  LifeCount=createElement();

  laserGroup=createGroup();
  alienGroup=createGroup();
  alien2Group=createGroup();
}

function draw() {
  background(spaceImg); 

  LifeCount.html("Life:"+life);
  LifeCount.style('color:blue');
  LifeCount.position(150,20);

  Scoreboard.html("Score:"+score);
  Scoreboard.style('color:blue');
  Scoreboard.position(700,20);

  if(gameState===1) {
    spaceship.x=mouseX;
    
    if(frameCount%80===0) {
      spawnAlien();
    }

    if(frameCount%100===0) {
      spawnAlien2();
    }
    
    if(keyDown("space")) {
      shootLaser();
    }
    
    if(alienGroup.collide(ground)) {
      gameOver(alienGroup);
    }

    if(alien2Group.collide(ground)) {
      gameOver(alien2Group);
    }

  }

  drawSprites();
}