var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.debug = true;

  movingRect = createSprite(200,200,80,50);
  movingRect.debug = true;
  fixedRect.shapeColor = 'blue';
  movingRect.shapeColor = 'blue';
  
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  console.log(movingRect.x - fixedRect.x);
  console.log(fixedRect.width/2 + movingRect.width/2);
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.shapeColor = 'purple';
    movingRect.shapeColor = 'purple';
  }else {
    fixedRect.shapeColor = 'blue';
    movingRect.shapeColor = 'blue';
  }
  drawSprites();
}