var fixedRect,movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200, 400, 50, 80);
  movingRect.shapeColor = "green";
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
     movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2){

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  } 
  
  
  drawSprites();
}