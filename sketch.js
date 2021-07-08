var bg,start,angel;
var fireball,fireball1,fireball2,fireball3;
function preload(){
  bg = loadImage("bg2.jpg");
  start = loadImage("start.png");
  angelImage = loadImage("a.png");
  devilImage = loadImage("devil.png");
  fireball3 = loadImage("blueFireball.png");
  fireball2 = loadImage("greenFireball.png");
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  angel = createSprite(1500,550,50,50)
  angel.addImage(angelImage);
  angel.scale=0.8;
  devil = createSprite(500,550,50,50)
  devil.addImage(devilImage)
  devil.scale=0.5;
  angel.debug=false;
  angel.setCollider("rectangle",0,0,1500,700);
  
}
function draw(){
  background(bg);
  devil.y=angel.y
  fireball.y=devil.y
  if(keyDown(LEFT_ARROW)){
    angel.x-=2
  }
  if(keyDown(RIGHT_ARROW)){
    angel.x+=2
  }
  if(keyDown(UP_ARROW)){
    angel.y-=2
  }
  if(keyDown(DOWN_ARROW)){
    angel.y+=2
  }
  if(devil.isTouching(angel)){
    fireball.velocityX=2
  }
  devilFireball()
  angelFireball()
  drawSprites()
}
  function devilFireball(){
    if(frameCount%100===0){
    fireball= createSprite(500,550,50,50);
    fireball.addImage(fireball2);
    fireball.scale=0.2;
    //fireball.velocityX=+2
  }
}

    function angelFireball(){
      if(frameCount%100===0){
      fireball1= createSprite(1500,550,50,50);
      fireball1.addImage(fireball3);
      fireball1.scale=0.2;
      fireball1.velocityX=-2
      
    }
  }